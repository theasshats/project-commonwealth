# Phase 2 candidates — chunk-09

## alternate_current   [anchors: support (1)]
- LEAVE — pure behavior/performance patch; no items, no methods, no materials. Rewrites redstone-dust
  propagation in-process; nothing to route through any method. Zero content surface — genuine LEAVE case.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — a single craftable compass that locates biomes; produces no materials and registers no recipe
  methods. Its value to the pack is scarcity navigation (players hunt regional ores/biomes), but that is
  purely informational — there is no item or fluid to route through any method. Genuine zero-surface
  utility. No forced edge warranted.

## cookingforblockheads   [anchors: survival (1)]
REWORK: OK — single anchor documented; the dossier already notes the M-05 gating candidate.
- from: cookingforblockheads:oven / fridge / sink (flagship appliance blocks) | via: create:mechanical_crafting or create:sequenced_assembly (M-05 native-method gating — built inside the mod's own appliance machine, gated on Create brass/copper sheets) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: assembling a proper kitchen requires a trip to the brass workshop — the oven, fridge, and sink are machines, not just carpentry
- from: cookingforblockheads kitchen outputs (aggregated cooked meals — stews, pies, fancy dishes pulled in from Farmer's Delight / Expanded Delight) | via: numismatics sell/price table | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the mod is a recipe-discovery / batch-crafting convenience layer, not a food producer — the luxury-good sell is more naturally owned by Farmer's Delight and Expanded Delight (which are the actual producers); tagging CfB for M-09 duplicates economy anchors on a logistics mod without adding real loop signal

## mutantszombies   [anchors: survival (1)]
- LEAVE — 7 new hostile zombie variants with enhanced behaviors; loot=no in the dossier, no special drops
  registered, only spawn eggs exist as items. The pressure contribution (harder nights) is real but there
  is nothing material to route. A forced mob-drop reagent edge would need loot-table authoring to create a
  drop first, which is a Phase 3 act of invention, not a Phase 2 mapping of existing surface. Reserve
  LEAVE here — revisit in Phase 3 if designer wants to seed a unique drop (e.g. mutant bile) for M-02/M-14.

## dtterralith   [anchors: survival/worldgen (1)]
- LEAVE — a worldgen compatibility bridge; its product is ordinary logs/saplings that already enter the
  Create/cooking webs as vanilla wood. The Terralith-flavored seeds (jacaranda, maple, kapok…) are
  cosmetic species variants, not distinct materials with c:tags that differ from normal logs. Adding a
  bespoke weave for "kapok log" when it functions identically to oak log is the forced-edge failure mode.
  loot=yes, but its loot tables are tree drops (logs, sticks, seeds) with no novel material. No weave
  warranted; the mod's value is purely worldgen aesthetics.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — config serialization/GUI/sync API; 0 blocks, 0 items, no recipe methods. Genuine zero-content
  code library; no player surface to weave.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — data-driven guidebook engine; 6 items are the book objects themselves (no materials). It has no
  recipe-type methods and produces nothing. The books are flavor/documentation, not a material sink.
  Genuine zero-surface for weaving; its value is player onboarding.

## prickle   [anchors: support/library (1)]
- LEAVE — Prickle JSON config format library; 0 blocks, 0 items, no recipe methods. Genuine zero-content
  code library (Darkhax ecosystem). No player surface.

## woodworks   [anchors: survival (1)]
REWORK: existing 2nd-anchor candidates in dossier — evaluate both.
- from: woodworks deco blocks (boards, bookshelves, chests, ladders) | via: create:crushing → raw plank + gravel + create:experience_nugget (lossy) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-decorated your cabin? a crusher reclaims planks from the boards — the Create web treats wood deco like any other buildable
- from: woodworks deco outputs (boards, ladders) | via: woodworks:sawmill or create:cutting (overlap/bridge) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is a cosmetic recipe-unification (making the Sawmill and Create's saw read as one web), not a cross-system weave — it doesn't add a new pillar anchor or advance the loop; it's maintenance-polish, not a weave candidate worth tracking as M-12; and M-04 (crushing back) already earns Create as the second anchor

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals shared code framework; 0 blocks, 1 trivial template chest item, no recipe
  methods. The template chest is a vanilla-style item; the library itself is the only real content and it
  is code API. The 13 c:tags it ships are tag scaffolding for dependent mods, not novel materials.
  Genuine library LEAVE.

## create_jetpack   [anchors: create, aeronautics (2)]
REWORK: OK — connections sound. Already at 2 anchors (Create-air-fuelled personal flight = Create +
aeronautics). The dossier correctly notes a possible progression gate (MineColonies/boss-drop unlock) but
that is a gating call, not a new pillar weave. No further cross-system link is coherent: magic would
mean "enchant the jetpack through an arcane infusion" (awkward — the jetpack is pneumatic, not arcane),
economy is too shallow (just "sell it"), and survival is already implicit via the backtank supply pressure.
No new candidates.


