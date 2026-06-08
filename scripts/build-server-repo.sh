#!/usr/bin/env bash
# Build the derpack-server deploy repo from scripts/server-repo/.
#
# TRANSITIONAL one-shot. The Derpack X server deploy config (compose +
# auto-update.sh) is moving OUT of the pack repo into its own repo,
# derpack-org/derpack-server — the same split as the site. The agent sandbox
# can't create org repos (the GitHub app is scoped to Derpack-X), so this lets a
# maintainer do it in one command. Source of truth is scripts/server-repo/; once
# derpack-server is populated, this script AND scripts/server-repo/ can be
# deleted from the pack repo (the doc pointer in docs/SERVER.md stays).
#
#   ./scripts/build-server-repo.sh             # bundle only -> dist/derpack-server.zip
#   ./scripts/build-server-repo.sh --push      # also create + push the repo (needs gh)
#   ./scripts/build-server-repo.sh --push --public
#
# The bundle is the new repo's root: docker-compose.yml, auto-update.sh,
# .env.example, .gitignore, README.md — drop straight into the box's deploy dir.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

readonly SRC="scripts/server-repo"
readonly ORG_REPO="derpack-org/derpack-server"
readonly OUT_DIR="dist/derpack-server"
readonly OUT_ZIP="dist/derpack-server.zip"

PUSH=false
VIS="private"
while [[ $# -gt 0 ]]; do
    case "$1" in
        --push)   PUSH=true; shift ;;
        --public) VIS="public"; shift ;;
        --private) VIS="private"; shift ;;
        *) echo "usage: $0 [--push] [--public|--private]" >&2; exit 1 ;;
    esac
done

[[ -d "${SRC}" ]] || { echo "ERROR: ${SRC} not found (run from the pack repo)." >&2; exit 1; }
[[ -f "${SRC}/docker-compose.yml" && -f "${SRC}/auto-update.sh" ]] \
    || { echo "ERROR: ${SRC} is missing deploy files." >&2; exit 1; }

# --- Bundle -----------------------------------------------------------------
rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"
cp -a "${SRC}/." "${OUT_DIR}/"          # dotfiles too (.env.example, .gitignore, .gitattributes)
chmod +x "${OUT_DIR}/auto-update.sh" 2>/dev/null || true

# Force LF on every bundled file. The box runs these on Linux; a CRLF that snuck
# in from a Windows checkout would break the auto-update.sh shebang. No-op on a
# clean LF checkout (the pack repo's `* -text` keeps them LF), but cheap insurance.
find "${OUT_DIR}" -type f -exec sed -i 's/\r$//' {} + 2>/dev/null || true

mkdir -p dist
if command -v zip >/dev/null 2>&1; then
    ( cd dist && rm -f "$(basename "${OUT_ZIP}")" && zip -qr "$(basename "${OUT_ZIP}")" "$(basename "${OUT_DIR}")" )
    echo "==> Bundle: ${OUT_ZIP}  (and ${OUT_DIR}/)"
else
    echo "==> Bundle: ${OUT_DIR}/  (no 'zip' on PATH — skipped the .zip; the dir is the bundle)"
fi
echo "    Repo root contents:"
( cd "${OUT_DIR}" && find . -mindepth 1 -maxdepth 1 | sort | sed 's#^\./#      #' )

# --- Optional: create + push the repo ---------------------------------------
if [[ "${PUSH}" == "true" ]]; then
    command -v gh >/dev/null 2>&1 \
        || { echo "ERROR: gh (GitHub CLI) not found. Install it, or push ${OUT_ZIP} by hand." >&2; exit 1; }
    if gh repo view "${ORG_REPO}" >/dev/null 2>&1; then
        echo "==> ${ORG_REPO} exists — syncing the bundle into it..."
        WORK="$(mktemp -d)"
        gh repo clone "${ORG_REPO}" "${WORK}" -- -q
        cp -a "${OUT_DIR}/." "${WORK}/"          # overlay built files; keeps the clone's .git
        (
            cd "${WORK}"
            git add -A
            git update-index --add --chmod=+x auto-update.sh 2>/dev/null || true
            if git diff --cached --quiet; then
                echo "    Already up to date — nothing to push."
            else
                git commit -q -m "Sync deploy config from Derpack-X"
                git push -q
                echo "    Pushed update."
            fi
        )
        rm -rf "${WORK}"
    else
        echo "==> Creating ${ORG_REPO} (${VIS}) and pushing the bundle..."
        (
            cd "${OUT_DIR}"
            git init -q -b main
            git add -A
            # Persist the executable bit even when built on Windows (no +x on the
            # filesystem), so the box's clone can run auto-update.sh directly.
            git update-index --add --chmod=+x auto-update.sh
            git commit -q -m "Initial deploy config (from Derpack-X/scripts/server-repo)"
            gh repo create "${ORG_REPO}" "--${VIS}" \
                -d "Deploy config for a Derpack X Minecraft server" \
                --source=. --remote=origin --push
        )
    fi
    echo "==> Done: https://github.com/${ORG_REPO}"
    echo "    Once deployed, you can delete scripts/server-repo/ + scripts/build-server-repo.sh from the pack repo."
else
    echo "    (no --push: bundle only. Add --push to create ${ORG_REPO} via gh.)"
fi
