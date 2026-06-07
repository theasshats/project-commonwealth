# Curation rubric — the charter for every keep/cut pass

> **Status: accepted** — the canonical yardstick. This is the single document a curation pass scores
> mods against, so calls are consistent and defensible instead of per-reviewer vibes. It gathers the
> criteria that already existed, scattered, into one place: the `docs/DESIGN.md` north star, the
> structural loop in `docs/SYSTEMS.md`, the `docs/archive/MODLIST-AUDIT.md` fit-flags (§A) / scarcity (§C) /
> dup (§B), and the in-flight curation issues (#83 / #94 / #100 / #113 / #45 / #60). Lands in **v0.6.0**
> (Foundation) as the charter; every later pass runs against it. Pairs with `docs/archive/RELEASE-CADENCE.md`
> (odd/even), #160 (conflict catalog), #161 (mod-update pass).

## What curation is (and isn't)

Curation is a **time-boxed ~2-hour thunderdome that closes a milestone** — everyone in a room asking
"does this mod meet the rubric?", snapping keep / cut / rework calls, with cleanup after. It is **not**
a standalone milestone, a version, or a long work phase. The suspect list is pre-worked (the
ground-truth digest #131, the connectivity tool #129/#113, JEI in-game, spark for perf-suspects) so the
meeting is *decisions, not research*.

It is **piggybacked on existing milestones**, never its own version:

- **v0.6.0 — Foundation (even):** an **initial keep/cut cleanup** (not a full feature thunderdome) — the
  post-#88 backlog (#83 umbrella, #106 structure allowlist, #108 spawn-gating review). This is where
  this charter lands.
- **Odd milestones (v0.7.0, v0.9.0, v0.11.0, v0.13.0, v0.15.0):** a **competition thunderdome** closing
  each feature pillar.
- **Even milestones (v0.8.0, v0.10.0, v0.12.0, v0.14.0, v1.0.0):** a **performance-pruning** pass.

See `docs/ROADMAP.md` ("Milestones — the road to 1.0") for the per-version schedule.

## The rubric — a mod survives only if it passes every gate (or is explicitly exempted)

1. **System anchor (the north star).** It feeds the system loop (`docs/SYSTEMS.md`) at one of its
   systems — **Create** or **magic** (production), **survival** (pressure), or the **economy**
   (distribution & trade, including its **logistics/aeronautics** arm) — or a cross-cutting production
   route (MineColonies, boss drops) or the scarcity foundation — *or* a sanctioned support role:
   **library/API, performance, QoL, decoration palette, or curated friend-group flavor**. Anchors to
   nothing → **cut**. (`docs/DESIGN.md` + `docs/SYSTEMS.md`; the "if none, why is it here?" test. The
   goal is *two* anchors — one is the floor, so a one-system mod is a candidate for a second weave, not a
   cut.)
2. **Not an orphan.** A dependency-only library must still have an installed dependent (#100).
   Content-free **and** undepended-on → cut.
3. **No redundant mechanic.** If it overlaps another mod's mechanic it must be the **canonical pick** or
   play a **distinct role**, not a parallel duplicate. (Item dupes are auto-handled by
   almost-unified/polymorph; *mod/mechanic* dupes need a verdict — #83 §B, #94, #132.)
4. **Woven, not floating.** It connects into the recipe web (#113/#129), *or* it's an accepted
   standalone (pure decoration/cosmetic per the connectivity guardrails). And it **doesn't break
   scarcity** — no mega-stacks, free OP gear/loot, or kitchen-sink factory shortcuts
   (`docs/archive/MODLIST-AUDIT.md` §A1/§C). (Logistics/transport mods get the extra scarcity lens: do they
   collapse distance enough to erase regional specialization? — `docs/SYSTEMS.md` §5.)
5. **Performance cost is justified.** TPS/RAM cost proportional to value; worldgen-/entity-heavy mods
   get spark-measured if suspect (#48/#98/#147/#160). "Measure, don't analogize."
6. **Server-safe.** Doesn't crash the server; client-only mods (itemphysic, FoamFix) are correctly
   sided.
7. **Maintained / version-appropriate.** Official 1.21.1 vs community-port risk noted (#40); not
   abandoned in a way that blocks updates.
8. **Meme exemption.** Joke/meme mods survive **only if they also pass gate 1** (anchor to a system) —
   pure flavor is allowed but must be deliberate, not drift (#45, `docs/archive/MODLIST-AUDIT.md` §A2).

> Failing a gate isn't auto-cut. The verdict can be **cut**, **rework** (recipe-gate / config / re-tag to
> make it pass), or **keep-with-reason** (a documented exemption). The rubric's real job is forcing the
> *why* to be written down.

> **Default to cut unless argued for.** A front-loaded modlist has inertia; the rubric flips it so an
> unjustified mod loses by default and that inertia works *for* curation. Cuts run as a *process* — the
> field competed, these lost — **depersonalized by design**.

## Two modes — same rubric, different gates

The cadence runs this one rubric in two modes, matched to the milestone's parity
(`docs/archive/RELEASE-CADENCE.md`):

- **Odd thunderdome — curation *by competition*.** Closes each odd/feature milestone. The version's new
  adds **and** the existing related set are judged against each other on merit — gates **1, 3, 4**
  (system-anchor, no-redundant-mechanic, woven-not-floating). Winners stay; losers are cut or reworked;
  then the version freezes.
- **Even stabilization — *performance pruning*.** Closes each even milestone. Apply gate **5** hardest:
  is each mod's TPS/RAM cost justified (spark — #147/#160)? Cut or optimize the expensive, fix what
  broke, balance. No new mods.

> **Web % is a compass, not a gate.** Use the connectivity tool (#129) to *find* off-web clusters worth
> a human look — never as a release target. Target it and it gets gamed (Goodhart). Ask "is this island
> *intentional* (cosmetic — fine) or a *real gap*?", not "are we at N%."

## The process (how a pass runs)

A pass is a **single ~2-hour thunderdome**, time-boxed on purpose:

1. **Score** each suspect mod against the gates using the ground-truth digest (#131), the connectivity
   tool (#129/#113), JEI in-game, and spark for perf-suspects (#147/#160).
2. **Snap a verdict + one-line reason** per mod (keep / cut / rework / keep-with-reason) — no
   rabbit-holes.
3. **Cleanup after the meeting.** Cuts are local packwiz removals + `packwiz refresh`; reworks spawn
   recipe/config issues.

`#21` (removal suggestions) is the living feeder each pass pulls from; `#160` (conflict catalog) feeds
the even stabilizations; `#161` (mod-update/changelog) feeds the next odd thunderdome.

## Scoring template

Copy this per pass and fill one row per suspect mod. (Gate columns: ✅ pass · ❌ fail · — N/A.)

```
Pass: <milestone, e.g. v0.7.0 Create-spine thunderdome>   Date: <YYYY-MM-DD>
Mode: <odd competition | even perf-prune | v0.6.0 initial cleanup>

| Mod (slug) | 1 anchor | 2 orphan | 3 dup | 4 woven | 5 perf | 6 server | 7 maint | 8 meme | Verdict | One-line reason |
|------------|----------|----------|-------|---------|--------|----------|---------|--------|---------|-----------------|
| example    | ✅        | ✅        | ✅     | ❌       | ✅      | ✅        | ✅       | —      | rework  | floating — recipe-gate behind Create brass |
```

- **Verdict** is one of: `keep` / `cut` / `rework` / `keep-with-reason`.
- A `rework` or `keep-with-reason` verdict **must** carry its reason in the last column — that written
  *why* is the point of the rubric.
- Filed templates live wherever the pass is hosted (the milestone's tracking issue or a PR description);
  this doc holds the blank.

## Relationship to the in-flight curation issues

This is the **charter** the existing curation issues apply — each runs a slice of this rubric in
whichever pass hosts it:

- **#83** — mob/boss + duplicate mechanics (gate 3).
- **#94** — un-anchored mods + duplicate clusters (gates 1, 3).
- **#100** — orphan libraries (gate 2).
- **#21** — removal suggestions (the living feeder).
- **#45** — memes, confirmed (gate 8).
- **#60** — umapyoi, cut.
- **#113 / #129** — connectivity islands (gate 4; the compass tool).

---

_Refs: `docs/DESIGN.md` (the north star), `docs/SYSTEMS.md` (the structural loop the rubric scores
against), `docs/archive/MODLIST-AUDIT.md` (fit-flags §A / scarcity §C / dup §B), `docs/CONNECTIVITY.md`,
`docs/ROADMAP.md` (the pass schedule), `docs/archive/RELEASE-CADENCE.md` (odd/even),
#83 / #94 / #100 / #21 / #45 / #60 / #113 / #129 / #131 / #132 / #147 / #160 / #161._
