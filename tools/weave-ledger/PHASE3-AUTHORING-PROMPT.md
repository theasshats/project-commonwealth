# Phase 3 authoring prompt — v0.8.0 pilot clusters (#333–#341)

> Paste the fenced block into a fresh Claude Code session on this repo. It works the filed v0.8.0
> weave clusters into the pack on the shared `v0.8.0` branch, **one issue at a time, plan-first with
> a maintainer approval gate** — the maintainer digests and approves each issue's plan before any
> authoring. (Kept with the workstream per #126; program state lives in
> `tools/weave-ledger/phase2/NEXT-SESSION.md`.)

```
You are starting Phase 3 of the Project Commonwealth weave program: working the v0.8.0 pilot
cluster issues #333-#341 into the pack, ONE ISSUE AT A TIME, with a maintainer approval gate
before any authoring. CLAUDE.md governs everything; read it fully before touching anything.

THE LOOP (repeat per issue, in the WORK ORDER below)
1. RESEARCH the issue's members fully — this happens BEFORE presenting, so the plan reflects
   verified reality, not the issue text re-warmed:
   - the slate row for each member:
       git fetch origin weaving-plan
       git show origin/weaving-plan:tools/weave-ledger/phase2/triage/decisions-ratified.tsv | awk -F'\t' '$1=="<mod>"'
     (any [RESCOPED@sweep ...] note in the detail OVERRIDES the original delivery)
   - every item/recipe-type id against the digest (tools/mod-data/by-mod/) — never trust a plan
     with an unverified id
   - the shipped scripts (grep kubejs/server_scripts/) for conflicts, half-shipped overlaps, and
     the pattern file to imitate
2. PRESENT THE PLAN in your reply, then STOP and wait for approval. Format — scannable, the
   maintainer reads it at work:
   - a 3-line issue header: what this cluster does for the loop, member count, which members are
     dump-gated or skipped (and why)
   - per member, a compact block:
       WEAVE: <input -> method -> output, one line>
       HOW: the exact recipe/config/loot edit and which file it lands in (extend X / new NN-name.js)
       WHY IT WORKS: the loop edge + the strongest piece of evidence (votes, digest fact, shipped pattern)
       RISKS / WHY IT MIGHT NOT: balance concerns, conflicts, uncertainties, anything playtest must catch
       SKETCH: the recipe in 1-3 lines of pseudo-KubeJS (real ids, proposed counts)
   - end with: "Reply 'go' to author as planned, 'go except <member>: <change>' for tweaks, or
     'skip <member>'."
3. ON APPROVAL: author exactly what was approved (incorporate tweaks), parse-check (node --check),
   run ./tools/packwiz refresh if kubejs/config files were added/removed, commit + push to v0.8.0,
   tick the members' checkboxes in the issue body, close the issue per docs/TRIAGE.md SS5 when its
   authorable members are all landed (closed as completed + `playtest-blocked` label, dump-gated
   members listed in a comment).
4. Immediately present the NEXT issue's plan and stop. One issue per exchange, always.

BRANCH & DELIVERY
- All work on the shared version branch `v0.8.0` (exists on origin). No new branches, no PRs.
  If a v0.8.0 PR exists, append each landed change's playtest steps to its `## Playtest` section.
- Commit per issue with descriptive messages; push with git push -u origin v0.8.0.

WORK ORDER
#333 pack fixes (items 1+5 unblock #337; item 7 dossier-regen is on-box maintainer work — say so)
-> #334 plumbing batch -> #339 ore-doubling (silver+palladium first; gem veins before gem crushes)
-> #335 processing pulls -> #340 light bridges -> #341 stragglers -> #336 native-method gates
-> #338 SA keystones -> #337 boss-key gates (only after #333 items 1+5 landed).

HARD RULES
- DUMP-FIRST: create:sequenced_assembly / create:mechanical_crafting grids are NOT authorable from
  the digest (ID-sets only). Never guess a grid. List such members in the plan as dump-gated, ask
  for the dump in the same message, and proceed with the rest.
- v0.8.0 charter: no new mods, nothing beyond the issue checklists. *(balance)*-marked rows ship at
  conservative defaults and stay playtest-flagged.
- galosphere "silver" is PALLADIUM — #339 outputs key on c:ingots/palladium, never silver.
- No lossless round-trips that emit XP byproducts (the XP-printer trap).
- The weaving-plan branch is READ-ONLY reference. Never commit to it. Never touch mods/ or pack.toml.
- If research contradicts the slate (wrong premise, already shipped, missing mechanism), present
  that in the plan with a recommendation — the maintainer decides; never silently redesign.
- If the maintainer goes quiet, STOP after presenting a plan — never author unapproved work. If
  usage runs low mid-authoring, stop at a clean commit and leave a handoff comment on the issue.
```
