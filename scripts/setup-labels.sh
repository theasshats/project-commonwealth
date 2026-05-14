#!/usr/bin/env bash
# setup-labels.sh
#
# Creates the Derpack X label set, idempotently.
# Existing labels are LEFT ALONE — so your custom colors won't be clobbered.
# To force-update an existing label, delete it first or edit it via GitHub UI.
#
# Run this once before label-existing-issues.sh or create-audit-issues.sh.
#
# Usage:
#   ./setup-labels.sh           # DRY RUN (default)
#   ./setup-labels.sh --apply   # actually create labels

set -euo pipefail

APPLY=false
if [[ "${1:-}" == "--apply" ]]; then
    APPLY=true
elif [[ -n "${1:-}" ]]; then
    echo "Unknown argument: $1"
    echo "Usage: $0 [--apply]"
    exit 2
fi

# --- preflight --------------------------------------------------------------

if ! command -v gh >/dev/null 2>&1; then
    echo "ERROR: gh CLI not installed. https://cli.github.com/"
    exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
    echo "ERROR: gh CLI not authenticated. Run: gh auth login"
    exit 1
fi
if ! gh repo view >/dev/null 2>&1; then
    echo "ERROR: not inside a GitHub repo accessible to gh."
    exit 1
fi

REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
echo "Target repo: $REPO"
if $APPLY; then echo "Mode:        APPLY"; else echo "Mode:        DRY RUN"; fi
echo

# --- helpers ----------------------------------------------------------------

EXISTING="$(gh label list --limit 200 --json name -q '.[].name' 2>/dev/null || echo '')"

label_exists() { grep -qFx "$1" <<<"$EXISTING"; }

CREATED=0
SKIPPED=0

ensure_label() {
    local name="$1" color="$2" desc="$3"
    if label_exists "$name"; then
        echo "  skip:    $name (already exists)"
        SKIPPED=$((SKIPPED + 1))
    elif $APPLY; then
        gh label create "$name" --color "$color" --description "$desc"
        echo "  CREATED: $name  #$color  $desc"
        CREATED=$((CREATED + 1))
    else
        echo "  would:   $name  #$color  $desc"
        CREATED=$((CREATED + 1))
    fi
}

# --- label definitions ------------------------------------------------------

echo "Existing labels (only created if missing):"
ensure_label "bug"           "d73a4a" "Something isn't working"
ensure_label "documentation" "0075ca" "Improvements or additions to documentation"
ensure_label "editor"        "a371f7" "Editor web app issue"
echo

echo "Mod-list action labels:"
ensure_label "add-mod"       "1f883d" "Add a mod (or mods) to the pack"
ensure_label "remove-mod"    "b35900" "Drop a mod (or mods) from the pack"
ensure_label "update-mod"    "dbab09" "Bump a version, pin, or change source"
echo

echo "Other type labels:"
ensure_label "content"       "0e8a16" "Recipes, loot, KubeJS, or mod configs"
ensure_label "infra"         "5a5a5a" "Packwiz, CI, builds, or distribution"
ensure_label "discussion"    "c5def5" "Open question or decision needed"
echo

echo "Modifier labels:"
ensure_label "low-priority"  "cccccc" "Nice to have, no rush"
ensure_label "high-priority" "ff7800" "Blocks a release or causes pain"
ensure_label "blocked"       "5319e7" "Waiting on something external"
ensure_label "needs-info"    "fbca04" "Can't proceed without more details"
echo

# --- summary ----------------------------------------------------------------

echo "============================================================"
if $APPLY; then
    echo "Created $CREATED labels, skipped $SKIPPED existing."
else
    echo "DRY RUN: would create $CREATED labels, skip $SKIPPED existing."
    echo "Re-run with --apply to actually create."
fi
echo "============================================================"
