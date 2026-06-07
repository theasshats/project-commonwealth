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

## trashcans   [anchors: support/automation QoL (1)]
- LEAVE — void blocks for items/fluids/FE; 4 items, no recipe methods, outputs nothing (deletes). The
  dossier's balance note stands: in a scarcity pack, making voiding trivial erodes byproduct value, but
  that is a config/balance concern, not a weave opportunity. There is no material to route and no second
  system to anchor to. Genuine LEAVE.
  BALANCE-FLAG: in a scarcity pack, unlimited item/fluid voiding can trivialize byproduct value — worth a
  config review (e.g. disable the trash cans entirely in favor of Create's own overflow mechanisms, or
  rate-limit them) before the economy pillar lands.

## farmersdelight   [anchors: survival, create (2)]
REWORK: OK — connections sound. The Create anchor is established (made-by: create:filling/milling/mixing —
flour milling, rice milling, etc.). The dossier's M-09 (luxury good → coin) and M-12 (processing-chain
deepening) candidates are both valid candidates to surface; assess below.
- from: farmersdelight high-tier cooked dishes (beef stew, pie, hearty stew, gleaming salad) | via: numismatics sell/price table at a Trade Post | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a meal that takes multiple ingredients and a cooking pot is worth something at the market — the kitchen feeds the economy, not just the player
- from: farmersdelight:straw / farmersdelight:rice (crop side-products) | via: create:milling or create:crushing (extends existing grain→flour chain to new side-products) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the Create anchor is already established via the made-by inbound weaves (create:milling/filling/mixing are already in use); deepening the existing grain chain is maintenance, not a new pillar connection — the anchor is already counted; this would be an authoring refinement (add more crop routes), not a new weave

## balm   [anchors: support/library (1)]
- LEAVE — BlayTheNinth multi-loader abstraction library; 0 blocks, 0 items, no recipe methods. Ships two
  iron/gold nugget c:tags as scaffolding (already universal) and 1 internal biome-modifier. Genuine
  zero-content library. No weave possible.

## create_factory   [anchors: create, survival (2)]
REWORK: OK — connections sound. Already at 2 anchors (Create dessert chain + survival/food). Assess
the economy candidate.
- from: create_factory sweets (waffles, caramel rolls, honey-glazed berries — assembled through
  create:mixing/pressing/filling) | via: numismatics sell/price table at a Trade Post or Bakery colonist |
  to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a machine-made candy apple
  or waffle is a finished good — it sells for more than raw ingredients, and an airship bakery run is a
  legitimate trade loop
- from: create_factory jam/nectar fluids (sweet_berries_jam, cream, glow_berry_spread) | via:
  ars_nouveau:imbuement (sweet/bioluminescent essence — glow berries contain natural light magic) |
  to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: jam as an arcane reagent
  is a reach — the tone difference between confectionery and arcane infusion is too large; players would
  not find "pour glow-berry jam into the imbuement chamber" coherent

## create_new_age   [anchors: create (1)]
REWORK: examining whether 1-anchor status is correct; also assessing the dossier's 3 candidates.
- from: create_new_age:thorium_ore (scarce biome-specific ore, 2 biome-modifiers) | via: create:crushing
  (ore-doubling byproduct — thorium dust; feeds the reactor fuel chain with a Create processing step) |
  to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the reactor's fuel supply
  passes through the crushing wheel before it ever sees the fuel acceptor — mining alone is not enough
- from: create_new_age:energising (the Energiser recipe-type, which charges items with Create electricity)
  | via: energising an Ars Nouveau focus/wand component, making an arcane-electric focus that bridges the
  Create FE tier into magic gear | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT
  | hook: the Energiser floods a charged essence into a spell focus — electricity has a place in magic when
  the voltage is high enough
- from: create_new_age:energising — gating an Aeronautics motor/advanced propulsion control unit through
  the Energiser (requires Create electricity to manufacture) | to: aeronautics | motif: M-24 | power:
  endgame | tone: ok | verdict: ACCEPT | hook: the advanced ship engine is more than a spinning shaft —
  it needs a charged winding from the Energiser before it will turn
- from: create_new_age processed reactor outputs (solid_corium) | via: numismatics sell / bounty economy
  (rare nuclear waste as a high-value hazardous-material contract) | to: economy | motif: M-08 | power:
  endgame | tone: ok | verdict: REJECT | reason: M-08 specifies scarce regional metal → Create-processed →
  minted coin; corium is a reactor byproduct (not a mineable ore), and "sell nuclear waste as a luxury
  good" has a tone problem; the economy anchor belongs more naturally on the ore (thorium) via M-08 if
  thorium is treated as the regional scarcity rather than the waste product; keep as a candidate to revisit
  but not a clean M-08 fit

## ars_nouveau   [anchors: magic (1)]
REWORK: at only 1 anchor for the magic spine — this is the most important mod in the chunk to weave
upward. Assess the dossier's candidates plus new routes.
- from: ars_nouveau Vitalic Sourcelink (consumes any mob death / baby growth in radius → Source) + Agronomic
  Sourcelink (consumes crop growth → Source) | via: these are non-recipe native mechanics that already
  accept any mob drop / crop as organic input; expose this as the survival↔magic organic sink | to:
  survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: every farm and every fight
  around the source garden feeds power into the magic pillar — the world's living activity charges the
  arcane
- from: ars_nouveau:imbuement (the Imbuement Chamber recipe-type) — foreign essences / gems routed through
  imbuement → source_gem (the M-01 universal magic currency hub) | to: magic (internal + cross-magic) |
  motif: M-01 / M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: raw lapis or amethyst charges the
  imbuement chamber and comes out as a source gem — foreign mineral → universal magic coin
- from: ars_nouveau spell scrolls / source_gem (high-effort arcane crafted goods) | via: numismatics sell /
  Trade Post (arcane goods as economy commodities) | to: economy | motif: M-09 | power: mid | tone: ok |
  verdict: REJECT | reason: the dossier already flags this as weak ("prefer leaving economy to dedicated
  arcane-currency weaves") and the motif-ownership concern is real — M-09 is best applied where the
  PRODUCER anchors to economy (food→sell, not magic→sell); the magic pillar's economy connection should
  come from a dedicated economy-facing weave (e.g. bounties for arcane essences, per M-14), not from
  treating source_gems as a shop good; reject here, let M-14 carry the magic↔economy seam
- from: ars_nouveau:imbuement — route a Create-processed metal (e.g. Create brass sheet or zinc ingot) into
  the Imbuement Chamber to produce an enchanted alloy (arcane-tempered brass) required for high-tier Create
  gear (an M-10 pull that also creates a Create↔magic upstream dependency) | to: create | motif: M-10 |
  power: endgame | tone: ok | verdict: ACCEPT | hook: the precision mechanism alone isn't enough for the
  finest contraptions — the gears need arcane tempering; the imbuement chamber is where engineering meets
  enchantment

## create_tweaked_controllers   [anchors: aeronautics (1)]
- LEAVE — a control interface (lectern + linked controllers) that emits redstone-link signals to drive
  Create contraptions/vehicles; its craft already uses Create parts (precision mechanism, electron tubes).
  The only possible 2nd anchor would be Create-craft (which is already implicit in the recipe), but the
  dossier correctly notes no coherent magic/economy/survival edge. The aeronautics label is appropriate —
  this is the player's hands on the helm — but no new cross-system weave is coherent. LEAVE.
  NOTE: the dossier lists aeronautics as the only anchor but the craft requires precision mechanism +
  electron tubes (Create components) — the Create dependency is implicit but not formally anchored; a
  reviewer might want to promote this to create+aeronautics (2 anchors) at the dossier level, since
  getting the controller requires meaningful Create progression.


