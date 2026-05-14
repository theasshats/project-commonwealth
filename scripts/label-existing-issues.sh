#!/usr/bin/env bash
# label-existing-issues.sh
#
# Applies the new label scheme to the 13 currently-open issues on Derpack X.
# Idempotent: re-running won't duplicate labels.
# Also renames #13 to drop "- low priority" from the title (it gets the
# low-priority label instead). Comment out the rename_issue line at the
# bottom to skip the rename.
#
# Run setup-labels.sh first — the labels must exist or `gh issue edit` fails.
#
# Usage:
#   ./label-existing-issues.sh           # DRY RUN (default)
#   ./label-existing-issues.sh --apply   # actually apply

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
    echo "ERROR: gh CLI not installed."; exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
    echo "ERROR: gh CLI not authenticated. Run: gh auth login"; exit 1
fi
if ! gh repo view >/dev/null 2>&1; then
    echo "ERROR: not inside a GitHub repo accessible to gh."; exit 1
fi

# Verify required labels exist (must run setup-labels.sh first)
REQUIRED=("discussion" "add-mod" "remove-mod" "update-mod" "content" "infra" "low-priority")
EXISTING="$(gh label list --limit 200 --json name -q '.[].name' 2>/dev/null || echo '')"
MISSING=()
for L in "${REQUIRED[@]}"; do
    grep -qFx "$L" <<<"$EXISTING" || MISSING+=("$L")
done
if [[ ${#MISSING[@]} -gt 0 ]]; then
    echo "ERROR: required labels missing: ${MISSING[*]}"
    echo "       Run ./setup-labels.sh --apply first."
    exit 1
fi

REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
echo "Target repo: $REPO"
if $APPLY; then echo "Mode:        APPLY"; else echo "Mode:        DRY RUN"; fi
echo

# --- helpers ----------------------------------------------------------------

label_issue() {
    local num="$1" labels="$2"
    if $APPLY; then
        gh issue edit "$num" --add-label "$labels" >/dev/null
        echo "  #$num: + $labels"
    else
        echo "  would: #$num + $labels"
    fi
}

rename_issue() {
    local num="$1" new_title="$2"
    if $APPLY; then
        gh issue edit "$num" --title "$new_title" >/dev/null
        echo "  #$num: renamed → \"$new_title\""
    else
        echo "  would: #$num rename → \"$new_title\""
    fi
}

# --- label assignments ------------------------------------------------------

echo "Applying labels..."
label_issue 1  "discussion"
label_issue 2  "discussion"
label_issue 3  "discussion"
label_issue 9  "add-mod,discussion"
label_issue 13 "discussion,low-priority"
label_issue 17 "content"
label_issue 18 "content"
label_issue 21 "remove-mod,discussion"
label_issue 24 "remove-mod"
label_issue 25 "content"
label_issue 26 "infra"
label_issue 27 "update-mod"
label_issue 30 "infra"
echo

# --- renames ----------------------------------------------------------------

echo "Renaming (comment out lines below to skip individual renames)..."
rename_issue 13 "Create: Harmonics requirements"
echo

echo "Done."
