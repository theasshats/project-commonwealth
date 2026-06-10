#!/usr/bin/env bash
#
# restructure-milestones.sh — apply the pillar-order milestone restructure on GitHub.
#
# Why this is a script (not done by the agent): the GitHub MCP tooling can set an
# issue's milestone but cannot CREATE, RENAME, or set the DESCRIPTION of a milestone.
# Those need the REST API, so they live here for a maintainer to run.
#
# This is the SECOND restructure (the first — the systems-loop retitle — was applied
# and lives in git history). This one rebuilds the pillar ORDER to walk the loop
# (scarcity → pressure → production → economy) and pairs the maintainers' tracks:
#
#   1. Retitles milestones 13/15/17 (numbers are stable across a rename):
#        13  v0.9.0 — Economy & logistics → v0.9.0 — Survival
#                                            (pressure first: demand before distribution)
#        15  v0.11.0 — Magic              → v0.11.0 — Magic & MineColonies
#                                            (the two non-Create production routes,
#                                             one owner each: Xela112233 / zagwar)
#        17  v0.13.0 — Survival           → v0.13.0 — Economy & logistics
#                                            (mostly whole-pack balance — needs the
#                                             other pillars to exist; lands last)
#   2. Sets a one-line goal/description on every milestone (10–21).
#   3. Reassigns the issues that move:
#        survival set + pressure strays   → 13 (Survival)
#        colony track (#92, #259)         → 15 (Magic & MineColonies)
#        economy-value + logistics/aero   → 17 (Economy & logistics)
#        speculative non-pillar work      → 21 (Backlog: #169, #260)
#      (#25 claims stays in 13 — it's the stakes infrastructure #155 tunes against.)
#   4. Retitles the three mod-review sweeps to their pillar's new slot
#      (#247's colonies scope hands over to #249).
#
# A pre-flight prints current titles so you can sanity-check before anything is
# written. Idempotent — safe to re-run.
#
# Requires: gh (GitHub CLI), authenticated with repo write scope:  gh auth login
# Usage:    ./scripts/restructure-milestones.sh [--dry-run]
#
set -euo pipefail

REPO="${REPO:-theasshats/project-commonwealth}"
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
set_milestone 13 "v0.9.0 — Survival" \
  "The survival interlock (seasons x temperature x diet) works in play — the world pushing back, tuned. Pressure goes first: it generates the demand the production exclusives (v0.11.0) and the economy (v0.13.0) exist to serve."
set_milestone 14 "v0.10.0 — Stabilization II" \
  "Profile, balance, and bug-fix everything 0.9 added; no new mods."
set_milestone 15 "v0.11.0 — Magic & MineColonies" \
  "The two non-Create production routes, one owner each. Magic (Xela112233): the web balanced + bridged into one progression, with its own locked exclusives. MineColonies (zagwar): the colony route stood up — its lock list (colony-exclusive outputs) + cheap-basics calibration vs the ~3x Create cost. Completes the supply side."
set_milestone 16 "v0.12.0 — Stabilization III" \
  "Profile, balance, and bug-fix everything 0.11 added; no new mods."
set_milestone 17 "v0.13.0 — Economy & logistics" \
  "The load-bearing economy playable end-to-end (coins valued, player-driven pricing, bounties pay, inputs wired, pricing+currency tooling resolved) PLUS its logistics/aeronautics movement arm (airship payoff + transport ladder), balanced against the scarcity lens. Lands last by design: it prices and moves what the other pillars made and what pressure demands."
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

# Survival set (from old v0.13.0) → 13   (#91 is the umbrella over #124/#99)
move_issues 13  91 99 107 124 152 155 238 251 263 270 301
# Survival-pressure strays parked in Magic → 13
move_issues 13  197 217 225
# Colony track: gating on-ramp + boss-route health → 15
move_issues 15  92 259
# Economy-value + logistics/aeronautics (from old v0.9.0) → 17
move_issues 17  18 43 90 125 129 136 137 138 139 140 141 142 143 144 150 167 178 209 221 240 247 280 298 300 304
# Map-gating (travel-meaningfulness lens, was parked in Magic) → 17
move_issues 17  277
# Speculative / non-pillar work → Backlog
move_issues 21  169 260

# --- 4: retitle the mod-review sweeps to their pillar's new slot -------------------
retitle_issue() {            # $1=issue number  $2=new title
  echo "Issue #$1 title → \"$2\""
  run api -X PATCH "repos/$REPO/issues/$1" -f title="$2" >/dev/null
}

retitle_issue 251 "Mod review sweep — v0.9.0 batch (Survival core: mobs/food/combat)"
retitle_issue 249 "Mod review sweep — v0.11.0 batch (Magic + MineColonies)"
retitle_issue 247 "Mod review sweep — v0.13.0 batch (Economy/logistics/aeronautics)"

echo
echo "Done.${DRY_RUN:+  (dry-run — nothing was written)}"
echo "Verify: gh api \"repos/$REPO/milestones?state=all\" --jq '.[]|\"#\(.number) \(.title) (open:\(.open_issues))\"'"
echo "Expect: #13 Survival open:15 · #15 Magic & MineColonies open:8 · #17 Economy & logistics open:26"
