#!/usr/bin/env bash
#
# Derpack X server auto-update for the ishimura box.
#
# WHAT CHANGED AND WHY
# --------------------
# The previous design resolved the NeoForge loader and the mod set from two
# different places at two different times:
#   - NeoForge came from .env, changed only when this script ran on a pack.toml
#     hash diff (cron, 4am).
#   - Mods floated on main and were re-synced by packwiz on EVERY container
#     start (reboot, OOM, crash-loop, manual `up`).
# Any restart not driven by this script pulled a newer mod set against the old
# loader -> exactly the crash where the box ran NeoForge 21.1.228 while the pack
# required 21.1.233.
#
# This version removes that split brain. It resolves ONE immutable commit from
# the chosen channel, reads pack.toml AT that commit, and pins BOTH the loader
# (NEOFORGE_VERSION) AND the mod set (PACKWIZ_URL, pinned to that commit's raw
# URL) into .env together. Every container start - scripted or not - now
# resolves the same coupled pair. The loader and mods cannot drift apart.
#
# It also gates a deploy on the container's REAL Docker healthcheck (server
# actually accepting connections), not "is the process alive after 60s", and
# rolls the whole .env back to the previously deployed commit if the new one
# never becomes healthy or crash-loops.
#
# NOTE ON NEOFORGE: the version is still a human decision made in pack.toml in
# the pack repo. This script only MIRRORS that decision onto the box (as the
# old script already did) - it never bumps pack.toml itself.
#
# CHANNELS
#   release  - track the latest published GitHub release tag vX.Y.Z (production)
#   branch   - track the tip of BRANCH_REF, e.g. v0.7.0 (dev / playtest)
#
# CRON (xela's crontab) - frequent is fine; it's a no-op unless the tracked
# commit moved:
#   */15 * * * * /home/Minecraft/Derpack-X/auto-update.sh >> /home/Minecraft/Derpack-X/auto-update.log 2>&1
#
# MANUAL
#   ./auto-update.sh [--now] [--channel release|branch] [--branch <name>]
#   --now            skip the player-warning countdown
#   --channel/-c     override CHANNEL for this run
#   --branch         shorthand for --channel branch --branch <name>
#
# PAUSE / RESUME
#   touch /home/Minecraft/Derpack-X/.pause-auto-update
#   rm    /home/Minecraft/Derpack-X/.pause-auto-update

set -euo pipefail

# --- Static config ----------------------------------------------------------

readonly REPO="derpack-org/Derpack-X"          # canonical owner (NOT Xela112233)
readonly PACK_DIR="/home/Minecraft/Derpack-X"
readonly ENV_FILE="${PACK_DIR}/.env"
readonly PAUSE_FILE="${PACK_DIR}/.pause-auto-update"
readonly LOCK_FILE="${PACK_DIR}/.auto-update.lock"
readonly CONTAINER_NAME="derpack-x-mc"

# Player-warning cadence before a restart.
# Format "label-shown-to-players:seconds-to-wait-after-announcing".
readonly WARNINGS=(
    "10 minutes:300"
    "5 minutes:240"
    "1 minute:50"
    "10 seconds:10"
)

# How long to wait for the container to report HEALTHY after a (re)deploy.
# A cold first boot does a full NeoForge install + packwiz mod sync + initial
# worldgen, so this is deliberately generous. Keep it >= compose start_period.
readonly HEALTH_TIMEOUT=1500   # 25 min
readonly HEALTH_POLL=15        # seconds between checks
readonly CRASHLOOP_LIMIT=3     # restarts during the wait => treat as failed

# --- Helpers ----------------------------------------------------------------

log()  { echo "$(date -Iseconds) $*"; }
fail() { log "ERROR: $*"; exit 1; }

rcon() { docker exec "$CONTAINER_NAME" rcon-cli "$@" >/dev/null 2>&1 || true; }

container_state()   { docker inspect -f '{{.State.Status}}'  "$CONTAINER_NAME" 2>/dev/null || echo "missing"; }
restart_count()     { docker inspect -f '{{.RestartCount}}'  "$CONTAINER_NAME" 2>/dev/null || echo 0; }
health_status()     { docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "$CONTAINER_NAME" 2>/dev/null || echo "missing"; }
container_running() { [[ "$(container_state)" == "running" ]]; }

# GitHub: public repo, so unauthenticated works. Honour GITHUB_TOKEN if present
# (higher rate limit / private access).
gh_curl() {
    local url="$1"; shift
    if [[ -n "${GITHUB_TOKEN:-}" ]]; then
        curl -fsSL -H "Authorization: Bearer ${GITHUB_TOKEN}" "$@" "$url"
    else
        curl -fsSL "$@" "$url"
    fi
}

# Resolve a branch name or tag to its 40-char commit SHA (no jq dependency).
resolve_sha() {
    gh_curl "https://api.github.com/repos/${REPO}/commits/$1" \
        -H "Accept: application/vnd.github.sha"
}

# Latest published release tag via the /releases/latest redirect (no jq).
latest_release_tag() {
    local eff
    eff=$(curl -fsSL -o /dev/null -w '%{url_effective}' \
        "https://github.com/${REPO}/releases/latest") || return 1
    case "$eff" in
        */releases/tag/*) printf '%s' "${eff##*/tag/}" ;;
        *) return 1 ;;   # no release published yet
    esac
}

# Poll until the container is healthy, or fail on crash-loop / hard exit / timeout.
wait_healthy() {
    local deadline base st hs rc
    deadline=$(( $(date +%s) + HEALTH_TIMEOUT ))
    base=$(restart_count)
    log "Waiting up to ${HEALTH_TIMEOUT}s for the container to report healthy..."
    while (( $(date +%s) < deadline )); do
        st=$(container_state); hs=$(health_status); rc=$(restart_count)
        if [[ "$hs" == "healthy" ]]; then return 0; fi
        if [[ "$st" == "exited" || "$st" == "dead" ]]; then
            log "  container is '$st' before becoming healthy."; return 1
        fi
        if (( rc - base >= CRASHLOOP_LIMIT )); then
            log "  crash-looping (RestartCount climbed by $(( rc - base )))."; return 1
        fi
        if [[ "$hs" == "unhealthy" ]]; then
            log "  health=unhealthy (past start_period)."; return 1
        fi
        sleep "$HEALTH_POLL"
    done
    log "  timed out (state=$(container_state) health=$(health_status))."
    return 1
}

# Fully regenerate .env. Every field is passed via the surrounding scope.
write_env() {
    local tmp; tmp=$(mktemp)
    cat > "$tmp" <<EOF
# Managed by auto-update.sh.
# CHANNEL, BRANCH_REF and RCON_PASSWORD are operator inputs, preserved across
# runs. The rest are resolved from the deployed commit and rewritten on every
# successful update - do not hand-edit them; change CHANNEL/BRANCH_REF and let
# the script redeploy.
CHANNEL=${CHANNEL}
BRANCH_REF=${BRANCH_REF}
NEOFORGE_VERSION=${NEOFORGE_VERSION}
PACKWIZ_URL=${PACKWIZ_URL}
DEPLOYED_SHA=${DEPLOYED_SHA}
DEPLOYED_VERSION=${DEPLOYED_VERSION}
RCON_PASSWORD=${RCON_PASSWORD}
EOF
    chmod 600 "$tmp"; mv "$tmp" "$ENV_FILE"
}

deploy() {
    log "docker compose up -d --force-recreate ..."
    docker compose up -d --force-recreate
}

# --- Args -------------------------------------------------------------------

FORCE_NOW=false
CLI_CHANNEL=""; CLI_BRANCH=""
while [[ $# -gt 0 ]]; do
    case "$1" in
        --now|-n)        FORCE_NOW=true; shift ;;
        --channel|-c)    CLI_CHANNEL="${2:-}"; shift 2 ;;
        --branch)        CLI_BRANCH="${2:-}"; shift 2 ;;
        *) echo "Usage: $0 [--now] [--channel release|branch] [--branch <name>]" >&2; exit 1 ;;
    esac
done

# --- Main -------------------------------------------------------------------

log "=== Derpack X auto-update run ==="

if [[ -f "$PAUSE_FILE" ]]; then
    log "Paused ($PAUSE_FILE exists). Skipping."
    exit 0
fi

cd "$PACK_DIR"

# Single-flight: a 10-minute warning cycle can outlast the cron interval.
exec 9>"$LOCK_FILE"
if ! flock -n 9; then
    log "Another run holds the lock. Skipping."
    exit 0
fi

# First-run bootstrap.
if [[ ! -f "$ENV_FILE" ]]; then
    log "First run: creating $ENV_FILE (channel=branch, ref=v0.7.0)."
    CHANNEL="branch"; BRANCH_REF="v0.7.0"
    NEOFORGE_VERSION=""; PACKWIZ_URL=""; DEPLOYED_SHA=""; DEPLOYED_VERSION=""
    RCON_PASSWORD=$(openssl rand -hex 24 2>/dev/null || head -c 32 /dev/urandom | base64 | tr -d '\n+/=')
    write_env
fi
mkdir -p "${PACK_DIR}/data"

# Load state.
# shellcheck disable=SC1090
source "$ENV_FILE"
: "${CHANNEL:=branch}" "${BRANCH_REF:=v0.7.0}"
[[ -n "${RCON_PASSWORD:-}" ]] || fail "RCON_PASSWORD missing from $ENV_FILE"
DEPLOYED_SHA="${DEPLOYED_SHA:-}"
NEOFORGE_VERSION="${NEOFORGE_VERSION:-}"
[[ -n "$CLI_CHANNEL" ]] && CHANNEL="$CLI_CHANNEL"
[[ -n "$CLI_BRANCH"  ]] && { CHANNEL="branch"; BRANCH_REF="$CLI_BRANCH"; }

# Resolve the target commit from the channel.
case "$CHANNEL" in
    release)
        TAG=$(latest_release_tag) \
            || fail "No published release found for ${REPO}. Use CHANNEL=branch for playtesting."
        log "Channel=release, latest tag=$TAG"
        TARGET_SHA=$(resolve_sha "$TAG") || fail "Could not resolve tag $TAG to a commit."
        TRACK_LABEL="release $TAG" ;;
    branch)
        log "Channel=branch, ref=$BRANCH_REF"
        TARGET_SHA=$(resolve_sha "$BRANCH_REF") || fail "Could not resolve branch '$BRANCH_REF'."
        TRACK_LABEL="branch $BRANCH_REF" ;;
    *)
        fail "Unknown CHANNEL '$CHANNEL' (expected 'release' or 'branch')." ;;
esac
[[ "$TARGET_SHA" =~ ^[0-9a-f]{40}$ ]] || fail "Resolved SHA looks wrong: '$TARGET_SHA'."

if [[ "$TARGET_SHA" == "$DEPLOYED_SHA" ]]; then
    log "Already on ${TARGET_SHA:0:12} ($TRACK_LABEL). Nothing to do."
    exit 0
fi

# Read pack.toml AT that exact commit - loader and mods come from one point.
PACK_URL="https://raw.githubusercontent.com/${REPO}/${TARGET_SHA}/pack.toml"
PACK_TOML=$(curl -fsSL "$PACK_URL") || fail "Could not fetch pack.toml @ ${TARGET_SHA:0:12}."
NEW_NEOFORGE=$(printf '%s' "$PACK_TOML" | awk -F'"' '/^[[:space:]]*neoforge[[:space:]]*=/ {print $2; exit}')
NEW_VERSION=$(printf  '%s' "$PACK_TOML" | awk -F'"' '/^[[:space:]]*version[[:space:]]*=/  {print $2; exit}')
[[ -n "$NEW_NEOFORGE" ]] || fail "Could not read neoforge version from pack.toml @ ${TARGET_SHA:0:12}."

log "Update available: $TRACK_LABEL -> commit ${TARGET_SHA:0:12} (pack ${NEW_VERSION:-?}, NeoForge $NEW_NEOFORGE)."
[[ -n "$DEPLOYED_SHA" ]] && log "  current: ${DEPLOYED_SHA:0:12} (NeoForge ${NEOFORGE_VERSION:-unknown})"

# Warn players, only if the server is actually up.
if container_running; then
    if [[ "$FORCE_NOW" == "true" ]]; then
        log "--now set: skipping the warning countdown."
        rcon "say [Derpack X] Server updating to ${NEW_VERSION:-new build} now."
        rcon "save-all"; sleep 5
    else
        log "Warning players over ~10 minutes (use --now to skip)."
        for entry in "${WARNINGS[@]}"; do
            label="${entry%%:*}"; wait="${entry##*:}"
            log "  T-${label}: announcing"
            rcon "say [Derpack X] Server restarting for update (${NEW_VERSION:-new build}) in ${label}."
            sleep "$wait"
        done
        log "Flushing world (save-all)..."
        rcon "save-all"; sleep 5
    fi
else
    log "Container not running. No warnings needed."
fi

# Back up the current (last-good) .env so rollback restores a working commit.
BACKUP="${ENV_FILE}.last-good"
cp "$ENV_FILE" "$BACKUP"

# Atomic write: loader + pinned mod URL move together.
NEOFORGE_VERSION="$NEW_NEOFORGE"
PACKWIZ_URL="$PACK_URL"
DEPLOYED_SHA="$TARGET_SHA"
DEPLOYED_VERSION="$NEW_VERSION"
log "Pinning .env: NeoForge $NEW_NEOFORGE + mods @ ${TARGET_SHA:0:12} (one commit)."
write_env

if deploy && wait_healthy; then
    log "SUCCESS: healthy on ${NEW_VERSION:-new build} (NeoForge $NEW_NEOFORGE, commit ${TARGET_SHA:0:12})."
    rcon "say [Derpack X] Update complete - now on ${NEW_VERSION:-the latest build}."
    rm -f "$BACKUP"
    log "=== Update complete ==="
    exit 0
fi

# --- Rollback ---------------------------------------------------------------
log "New commit never became healthy. Rolling back to the previous commit."
if [[ -s "$BACKUP" ]] && grep -q '^DEPLOYED_SHA=' "$BACKUP"; then
    mv "$BACKUP" "$ENV_FILE"
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    if deploy && wait_healthy; then
        log "ROLLED BACK: server is UP on ${DEPLOYED_VERSION:-previous build} (NeoForge ${NEOFORGE_VERSION}, commit ${DEPLOYED_SHA:0:12})."
        fail "Update to ${TARGET_SHA:0:12} failed and was reverted. Investigate that commit before retrying."
    fi
    fail "Rollback target ALSO failed health. Manual intervention required: docker compose logs --tail=300"
else
    fail "No usable last-good .env to roll back to. Manual intervention required."
fi
