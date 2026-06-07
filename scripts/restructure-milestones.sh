#!/usr/bin/env bash
#
# restructure-milestones.sh — apply the systems-loop milestone restructure on GitHub.
#
# Why this is a script (not done by the agent): the GitHub MCP tooling can set an
# issue's milestone but cannot CREATE, RENAME, or set the DESCRIPTION of a milestone.
# Those need the REST API, so they live here for a maintainer to run.
#
# What it does (idempotent — safe to re-run):
#   1. Retitles milestones 13/15/17 for the model change:
#        13  v0.9.0 — Economy            → v0.9.0 — Economy & logistics   (absorbs aeronautics)
#        15  v0.11.0 — Survival & Magic  → v0.11.0 — Magic                (split)
#        17  v0.13.0 — Aeronautics ...   → v0.13.0 — Survival             (split)
#   2. Sets a one-line goal/description on every milestone (10–21).
#   3. Reassigns issues that moved:
#        aeronautics/logistics issues → 13 (Economy & logistics)
#        survival issues             → 17 (Survival)
#      (magic issues stay in 15; economy issues stay in 13.)
#
# Milestone NUMBERS are stable across a rename, so we address by number. A pre-flight
# prints current titles so you can sanity-check before anything is written.
#
# Requires: gh (GitHub CLI), authenticated with repo write scope:  gh auth login
# Usage:    ./scripts/restructure-milestones.sh [--dry-run]
#
set -euo pipefail

REPO="${REPO:-derpack-org/Derpack-X}"
DRY_RUN="${1:-}"

run() {
  if [[ "$DRY_RUN" == "--dry-run" ]]; then
    echo "  DRY-RUN: gh $*"
  else
    gh "$@"
  fi
}

echo "Repo: $REPO"
command -v gh >/dev/null || { echo "ERROR: gh (GitHub CLI) not found. Install + 'gh auth login'."; exit 1; }

echo
echo "== Pre-flight: current milestones =="
gh api "repos/$REPO/milestones?state=all&per_page=100" \
  --jq '.[] | "  #\(.number)  \(.title)  (open:\(.open_issues) closed:\(.closed_issues))"'
echo

# --- 1 + 2: milestone titles (number → "title|description") -----------------------
# Title is set for all so the script is self-documenting; only 13/15/17 actually change.
set_milestone() {            # $1=number  $2=title  $3=description
  echo "Milestone #$1 → \"$2\""
  run api -X PATCH "repos/$REPO/milestones/$1" \
    -f title="$2" -f description="$3" >/dev/null
}

set_milestone 10 "v0.6.0 — Foundation" \
  "Clean boot log, deterministic CI, fast playtest loop, perf baseline, modlist hygiene — decks cleared. Charters the SYSTEMS.md loop model + the CURATION rubric."
set_milestone 11 "v0.7.0 — Create spine" \
  "The recipe graph reads as one web; the recipe/gating spine is built — cost model (~3x basics + GregTech step-depth) + KubeJS locking/gating + the Create-spine lock list. Everything builds on this."
set_milestone 12 "v0.8.0 — Stabilization I" \
  "Profile, balance, and bug-fix everything 0.7 added; no new mods."
set_milestone 13 "v0.9.0 — Economy & logistics" \
  "The load-bearing economy playable end-to-end (coins valued, vendors price, bounties pay, inputs wired, pricing+currency resolved) PLUS its logistics/aeronautics movement arm (airship payoff + transport ladder), balanced against the scarcity lens. The economy is the distribution stage; aeronautics is its physical arm."
set_milestone 14 "v0.10.0 — Stabilization II" \
  "Profile, balance, and bug-fix everything 0.9 added; no new mods."
set_milestone 15 "v0.11.0 — Magic" \
  "The magic web balanced and bridged into one progression, with its own locked exclusives (a magic specialist is a needed trade partner; also reachable via the MineColonies route)."
set_milestone 16 "v0.12.0 — Stabilization III" \
  "Profile, balance, and bug-fix everything 0.11 added; no new mods."
set_milestone 17 "v0.13.0 — Survival" \
  "The survival interlock (seasons x temperature x diet) works in play — the world pushing back, tuned."
set_milestone 18 "v0.14.0 — Stabilization IV" \
  "Profile, balance, and bug-fix everything 0.13 added; no new mods."
set_milestone 19 "v0.15.0 — Polish & site" \
  "Wiki, onboarding, QoL, claims, and the open decisions settled — plus the comprehensive weave review (all systems against each other, the loop seams). Last call for additions; then feature freeze."
set_milestone 20 "v1.0.0 — Release [NFR]" \
  "Feature-frozen — final performance + RAM tuning, ore-gen finalized, pack renamed, CI required on main → ship the public build."
set_milestone 21 "📋 Backlog / living" \
  "Holding pen so nothing is untriaged; pull into a version when it is next up. Recurring passes (#160 conflict catalog, #161 mod-update) ride the cadence from here."

# --- 3: reassign moved issues -----------------------------------------------------
move_issues() {              # $1=milestone-number  $2..=issue numbers
  local ms="$1"; shift
  for n in "$@"; do
    echo "Issue #$n → milestone #$ms"
    run api -X PATCH "repos/$REPO/issues/$n" -F milestone="$ms" >/dev/null
  done
}

# Aeronautics / logistics → Economy & logistics (13)
move_issues 13  84 43 144 143 142 141 140 125
# Survival → Survival (17)   (#91 is the umbrella over #124/#99)
move_issues 17  91 124 99 152 155 107

echo
echo "Done.${DRY_RUN:+  (dry-run — nothing was written)}"
echo "Verify: gh api \"repos/$REPO/milestones?state=all\" --jq '.[]|\"#\(.number) \(.title)\"'"
