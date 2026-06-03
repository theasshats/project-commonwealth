# Issue Triage Playbook

Quick process for an issue-triage session — re-label, **milestone**, re-assign, close, and sequence.
Written from the post-0.5.2 triage; **update it as the project moves** (issue numbers below will drift).

## 0 · Get ground truth first — the ROADMAP can lag `main`
The live tracker is truth; `docs/ROADMAP.md` / `docs/NEXT-SESSION.md` can be stale. Always:
1. `git log --oneline -40 | grep -iE "merge pull request|bump version"` — what actually shipped + the current version.
2. `pack.toml` → current `version`.
3. List **open PRs** (only those are unmerged work) and **open issues** (`state OPEN`, `perPage 100`).
4. Reconcile: an "open" issue may already be resolved by a merged PR — flag those as **close candidates**.

## 1 · Parse the issue list (too big for context)
`mcp__github__list_issues` returns 100 KB+. Offload to a subagent: slice the saved tool-result file in
~80 KB spans (`open(path).read()[A:B]` via python) and return a table of number / title / labels /
milestone / body-summary / cross-refs. Note: the list API **omits `assignees`** — read those per-issue
(`issue_read`) only if needed.

## 2 · Re-label — work within the fixed vocabulary (don't invent labels)
16 labels in use: `add-mod` · `bug` · `content` · `discussion` · `enhancement` · `gameplay` ·
`low-priority` · `needed-for-release` · `performance` · `playtest-blocked` · `qol` · `remove-mod` ·
`site` · `tooling-ci` · `update-mod` · `worldgen`. (Confirm against the live set; it can grow.)
- Every issue gets ≥1 **area** label and, where apt, a **type**.
- `needed-for-release` = the `v1.0.0` gate set **only** (§6). Keep it tight.
- `playtest-blocked` = can't finish without an in-game check.
- `issue_write` with `labels` **replaces** the whole set — include the labels you're keeping.

## 3 · Milestone every issue (the road to 1.0)
The backlog is organized into GitHub **milestones**, not loose buckets, and **every issue — including
every new one — must have one** (an unmilestoned issue is untriaged). Pick the milestone whose **goal**
it serves; ongoing trackers and not-yet-scheduled work go to **`📋 Backlog / living`**. The map (each
version's goal / exit-criterion) lives in `docs/ROADMAP.md` → "Milestones — the road to 1.0":
`v0.6.0 Foundation` → `v0.7.0 Create spine` → `v0.8.0 Economy` → `v0.9.0 Survival & Magic` →
`v0.10.0 Aeronautics` → `v0.11.0 Polish & site` → `v1.0.0 Release [NFR]`. Set it via `issue_write`
(`milestone` = the milestone number). Front-load small/foundational work; the maintainer prefers **not**
leading with release blockers.

## 4 · Re-assign — two people, clear lanes
- **Xela112233** (you, admin) own implementation **and everything that runs on the live server** — you
  run the box, so **server tests / playtests / RAM tuning are yours** (e.g. #25 claims, #48 GC/RAM,
  #98 pre-gen, #43 flight, the #58 ore-gen *playtest*). zagwar typically hands server tests to you.
- **zagwar** (write; co-maintainer) owns: his living trackers (#17 recipes, #18 loot, #21 removals) and
  playtest **verdicts / design calls** (#60 umapyoi keep/cut, #58 rarity/regionality *review*). Joint
  **decisions** (#78 rename, #1 shaders) → assign **both**.
- Assign the **active milestone's** work to its owner; leave the long tail **unassigned** as backlog —
  don't self-assign all 50+ (noise; self-actions don't notify anyway).

## 5 · Close — ask first
- A merged PR often leaves its tracking issue open → close as `completed` with a one-line comment pointing
  to the live follow-ups (e.g. #93 → #81/#116/#58).
- **Living trackers stay open by design:** #9 (mod ideas), #17 (recipes), #18 (loot), #21 (removals).
- **Always confirm closes** with the maintainer (`AskUserQuestion`) before flipping state.

## 6 · Release gate — `v1.0.0` / `needed-for-release`
The `needed-for-release`-tagged set is the `v1.0.0 — Release` milestone, deliberately last: rename (#78),
CI-required (#79), ore-gen tuned + playtested (#81/#116/#58), RAM tuned (#48). Tag flow: bump `version`
in `pack.toml` → merge to `main` → tag `vX.Y.Z`.

## 7 · The five-systems yardstick (why an issue matters)
Every mod/feature anchors to ≥1 of **Create · magic · economy · aeronautics · survival** (target: **2**) —
which is also why the pillar milestones are shaped the way they are. A one-pillar mod is a candidate for a
*second* weave; a no-pillar mod is a **cut** candidate (curation). See `CLAUDE.md` + `docs/DESIGN.md`.

## 8 · After triage — update the docs
Refresh `docs/ROADMAP.md` (milestones + needed-for-release + recently-merged) and `docs/NEXT-SESSION.md`
(shipped list + open-PR table + near-term milestone) so the next session starts from truth.

## Workflow guardrails (from `CLAUDE.md`)
- **Branch:** rename the harness's random name to `claude/<topic>` before pushing; never commit to `main`.
- **PRs:** don't auto-open; fold related work into the branch you're on. Gameplay/content PRs stay
  **draft + carry a `## Playtest` checklist**; docs-only PRs don't. After opening, `subscribe_pr_activity`.
- **Gotchas:** `galosphere:silver_ingot` is palladium (never unify as silver); don't re-add EMI / add Veil;
  itemphysic + FoamFix are client-only; Aeronautics breaks under shaders.
