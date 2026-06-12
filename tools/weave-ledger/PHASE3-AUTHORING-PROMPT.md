# Phase 3 authoring prompt — v0.8.0 pilot clusters (#333–#341)

> Paste the fenced block into a fresh Claude Code session on this repo. It authors the filed v0.8.0
> weave clusters into the pack on the shared `v0.8.0` branch. (Kept with the workstream per #126;
> the weave program's state lives in `tools/weave-ledger/phase2/NEXT-SESSION.md`.)

```
You are starting Phase 3 of the Project Commonwealth weave program: AUTHORING the v0.8.0 pilot
cluster issues #333–#341 into the pack. Unlike the weaving-plan sessions, you EDIT PACK FILES —
kubejs/config/loot authoring under the repo's normal conventions. CLAUDE.md governs everything;
read it fully before touching anything.

BRANCH & DELIVERY
- Work on the shared version branch `v0.8.0` (it exists on origin; fetch and check it out). Fold ALL
  work into it — do not create branches, do not open PRs. If a v0.8.0 PR already exists, append your
  changes' playtest steps to its `## Playtest` section as you land work; otherwise accumulate playtest
  steps in your final report and per-issue comments.
- After adding/removing ANY file under kubejs/ or config/: run `./tools/packwiz refresh` and commit
  index.toml with the change.
- Sanity-parse every script you write (node --check) — pr-checks gates on JS/JSON parse.
- Commit per coherent unit with descriptive messages; push regularly (git push -u origin v0.8.0).

WORK ORDER (dependencies + value)
1. #333 pack fixes — items 1 and 5 unblock #337; item 7 (dossier regen) is on-box maintainer work:
   tick the others, comment that item 7 is out of session scope.
2. #334 deco-crush plumbing batch (one KubeJS loop, follow 35-web-bridges.js)
3. #339 ore-doubling — silver and palladium crush lines FIRST (mirror 36-magic-web-create.js);
   respect the gem-vein sequencing note (no gem crushes before their veins exist)
4. #335 processing pulls
5. #340 light bridges
6. #341 stragglers
7. #336 native-method gates
8. #338 sequenced-assembly keystones
9. #337 boss-key gates (only after #333 items 1+5 are landed)

PER-MEMBER WORKFLOW (every checklist line, no exceptions)
a. Read the slate row first:
     git fetch origin weaving-plan
     git show origin/weaving-plan:tools/weave-ledger/phase2/triage/decisions-ratified.tsv | awk -F'\t' '$1=="<mod>"'
   The row carries the delivery spec, evidence, and any [RESCOPED@sweep ...] note — a RESCOPED note
   OVERRIDES the original delivery wherever present.
b. Verify every item/recipe-type id against the digest (tools/mod-data/by-mod/). Never invent ids —
   the sweep killed four weaves for invented outputs; do not author a fifth.
c. Grep kubejs/server_scripts/ before writing — several members are half-shipped; extend the existing
   file in its own idiom rather than starting a parallel one.
d. Match the pattern file the issue names (35-web-bridges.js, 81-decoration-metal.js, 40-gates.js...)
   and follow docs/RECIPES.md (balance > theme > cost; basics ~3x; depth through steps, never
   multiplied cost) plus any M-guardrail cited on the row.
e. As each member lands on the branch, tick its checkbox in the issue body.

HARD RULES
- DUMP-FIRST: members needing a create:sequenced_assembly or create:mechanical_crafting grid are NOT
  authorable from the digest (ingredient ID-sets only — no grids/counts/NBT). Do NOT guess grids.
  Collect such members into ONE "needs runtime dump" comment per issue, skip them, continue.
- v0.8.0 charter: no new mods, no scope beyond the issue checklists. Rows marked *(balance)* ship at
  conservative defaults and stay flagged for playtest.
- galosphere "silver" is PALLADIUM — key #339's outputs on c:ingots/palladium, never silver.
- No lossless round-trips that emit XP byproducts (the XP-printer trap).
- The weaving-plan branch is READ-ONLY reference. Never commit to it. Never touch mods/ or pack.toml.
- Close-on-stage per docs/TRIAGE.md §5: when an issue's authorable members are all landed, close it
  as completed with the `playtest-blocked` label, leaving dump-gated members listed in a comment.

AUTONOMY
- Work without check-ins. Surface a genuine ambiguity as a short comment on its issue and move on —
  never stall the run on one member. If usage runs low, stop at a clean commit boundary and leave a
  handoff comment on the last issue stating exactly where you stopped and what's next.
- End with a report: per issue — landed / dump-gated / skipped-with-reason; files touched; the
  accumulated playtest checklist; anything you found that contradicts the slate (report, don't
  silently "fix" design).
```
