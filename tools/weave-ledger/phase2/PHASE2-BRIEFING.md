# Phase 2 — opportunity-mapping briefing (READ FIRST)

You map **candidate weaves** for a chunk of mods in the Derpack X pack. **You author NOTHING** — no
recipes, no KubeJS, no edits to pack files. Phase 2 is a *proposal* pass; a human reviews your output at
Gate 2 and authoring happens later as milestone work.

## Inputs (read these)
- Your chunk's mod list: `tools/weave-ledger/phase2/chunk-NN.txt` (NN given in your task).
- For each mod: its dossier `tools/mod-data/dossiers/<ns>.md` (what it is, its **methods**, consumes/outputs, current anchors, 2nd-pillar candidates).
- The motif registry + reagent-ownership: `docs/WEAVE-LEDGER.md`.
- The methods you can route THROUGH: `tools/weave-ledger/methods-palette.md`.

## What to produce, per mod
Your chunk is a random mix — it may hold any mod (a 1-pillar mod, an already-well-connected mod, even a
library). **Nothing is excluded** and there is no separate "audit chunk": for **every** mod, do BOTH (a)
propose new/better cross-pillar links, and (b) if it already has connections, flag any that are weak/arbitrary
(REWORK). Reviewing well-connected mods alongside the rest is deliberate — it surfaces new links/methods the
isolated view misses. If a mod genuinely has no content surface (a pure code library), write `LEAVE — <reason>`
and move on. The core move is **method-pull**
(WEAVING-PLAN §2.0/§6): cross the mod's loose materials (its `consumes/outputs`) against the methods palette
and ask **"whose machine / ritual / infusion / processing method WANTS this material?"** — then route it
through that method.

For each candidate, decide ACCEPT or REJECT and record BOTH (the rejects are wanted — see below). Steps:
1. **Find** candidates via method-pull + thematic adjacency (dossier vibe).
2. **Power-read**: tier the item in its own mod (everyday / mid / endgame, from loot rarity, recipe depth,
   wiki). Size the integration to it — deep multi-step only for endgame/flagship; one light step for everyday.
3. **Theme-fit / red-team**: would a player find the pairing sensible, or do the two mods' tones clash? Argue
   *against* it briefly; keep only if it survives. A clash → REJECT (record it).
4. **Motif**: cite the accepted motif it composes (M-01..M-22 in the ledger). If it fits no motif, mark it
   `no-motif` and REJECT-for-review (don't invent one). `M-14` and `M-21` are **provisional** — you may
   surface candidates but tag them `(provisional motif)`.

## Delivery mechanisms — a weave is NOT only a recipe (Phase 2 produces Phase-3 actions of every kind)
A candidate's motif says *what* the link is; its **delivery** says *how* Phase 3 authors it. Recipes are one
delivery. Name the delivery alongside the motif (`via: <method>`), choosing whichever fits:
- **recipe** (crafting/Create/ritual/etc.) — the default for mods that register items.
- **loot-table seeding** — for **structure/dungeon mods** (`loot=yes`, often 0 items of their own): the action
  is "seed weave-relevant drops into this mod's loot tables" (a Phase-3 datapack edit). A boss/structure feeding
  coin (M-08/M-14), magic reagents (M-02), or a progression key (M-15) is a REAL candidate — **do NOT `LEAVE`
  a loot-bearing structure mod just because it has no recipes.** Tag `via: loot-seed`.
- **worldgen/spawn or event gating** (M-16 seasonal, M-22 lunar), **villager trade** (M-21 provisional),
  **config tie** (e.g. cross-mod food/temperature hooks) — all valid; name the mechanism.

## Hard guardrails
- **Never gate a basic/everyday component behind a complex recipe.** Depth scales with power, both ways.
- **Don't force edges onto deliberately-vanilla mobs/organic content** — if nothing is coherent, write
  `LEAVE — <reason>`. A forced "why is this convertible to that?" edge is a defect. But a mod with a **loot
  table or any item/block is not "no content"** — reach for a loot-seed or processing candidate before LEAVE;
  reserve `LEAVE` for genuine zero-surface libraries/behavior mods.
- **1:1 round-trip swaps** only for genuinely equivalent materials (rare); otherwise avoid.
- **Method-first**, but a crafting-table recipe is fine where it's the coherent form (not a lesser fallback).
- Respect **reagent-ownership** (don't repurpose a reserved reagent).

## Output — write INCREMENTALLY (so partial work survives a usage cutout)
Append to `tools/weave-ledger/phase2/chunk-NN.candidates.md` (NN = your chunk number) as you finish each mod —
**one mod at a time**, do not hold it all to the end. Format:

```
# Phase 2 candidates — chunk-NN
## <ns>   [anchors: <pillars> (N)]
- from: <material> | via: <method> | to: <pillar> | motif: M-## | power: everyday|mid|endgame | tone: ok|clash | verdict: ACCEPT | hook: <one line a player would nod at>
- from: <…> | … | verdict: REJECT | reason: <red-team/theme/balance/no-motif reason>
- LEAVE — <reason>                       (use when no coherent 2nd pillar; don't force)
## <next ns> …
```
For a mod that **already has connections** (≥2 pillars): in addition to any new links you find, list `REWORK:`
items on its *existing* connections (arbitrary / lore-clashing / mis-costed), or `OK — connections sound`.

When EVERY mod in your chunk is done, write a final line exactly: `== CHUNK COMPLETE ==`
(this marker is how the run knows the chunk finished vs. was interrupted).

Then return a short summary: per mod, `ns: N accepted / M rejected / leave`.

---

## Multi-pass note (read your pass's MANIFEST.json `mode`)
This mapping is run as many independent passes (Phase 2.x). Your task prompt will tell you your pass dir.

- **`mode: blind` (default):** work as above — propose independently, do NOT look at other passes' output.
  Your value is being an *independent sample*; convergence across blind passes is the confidence signal.
- **`mode: context-fed`:** the blind passes have converged, so don't re-list the obvious. First read the
  accumulated `tools/weave-ledger/phase2/CANDIDATES.md` rows for YOUR mods, then propose only **what's
  missing** — alternative method-routings, a deeper/subtler weave, a power-tier or theme nuance the existing
  rows miss, or a reasoned challenge to an existing row. Same output format; lead each with `NEW:` or
  `CHALLENGE:` so the merge can tell you extended rather than repeated.

Either way: AUTHOR NOTHING, record rejects with reasons, and keep the incremental write + `== CHUNK COMPLETE ==`.
