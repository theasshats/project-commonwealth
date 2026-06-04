# Phase 2 candidates — chunk-14

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (multiblock climate machine) | via: create:mechanical_crafting or M-05 native-method gating | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth is a serious heat-engineering feat — it should need brass fittings or andesite casing, not just stone; gating its construction on Create parts makes cold-weather prep a milestone in the tech path.
- from: cold_sweat:filled_waterskin (hot/cold water carrier) | via: create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Already inbound — `create:filling` is in the made-by list. No new authoring needed; connection exists. Flag as OK on existing edge.
- from: cold_sweat:goat_fur / cold_sweat:chameleon_molt / cold_sweat:hoglin_hide (insulating hides) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Biome-specific insulated armor is a real survival trade good — a crew member running tundra/nether biomes can equip others; exactly the kind of specialization the emergent economy is built for.
- from: cold_sweat:thermolith (temp-sensor block) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: thermolith is an informational display block, not a high-power machine; gating a sensor behind Create crafting is depth-mismatch (everyday tool → no complex recipe per guardrails). The Hearth ACCEPT above covers the Create anchor; doubling down on the thermolith weakens both.
- REWORK: existing `create:filling` inbound edge is sound — correctly a light step for an everyday waterskin. No rework needed.
- OK — connections (the waterskin–filling edge is the right weight for the item's tier; Hearth–Create and hide–economy ACCEPTs above round out the two-pillar goal)

## geckolib   [anchors: support/library (1)]
- LEAVE — pure animation/rendering API; 0 blocks, 0 items, no materials to route. Any weave would be forced onto a different mod's outputs, not geckolib's own surface. Correct LEAVE per briefing.

## endermoon   [anchors: survival (1)]
- LEAVE — zero items/blocks; the mod is a spawn-weight event modifier. Any weave belongs on ender pearl drops (vanilla item) or the parent enhancedcelestials system. Noting: the Ender Moon event creates a passive ender-pearl supply surge that *could* be referenced in an M-22 (lunar reagent) recipe elsewhere (e.g. "ender pearls harvested during Ender Moon are more plentiful → feed an Ars/Occultism ritual"). But that weave is authored on enhancedcelestials or the consuming mod, not on endermoon itself, which registers no items. This mod earns a comment in the enhancedcelestials dossier; it cannot anchor a weave of its own.

## nochatreports   [anchors: support (1)]
- LEAVE — networking/privacy utility; 0 blocks, 0 items, 0 recipe hooks. No content surface whatsoever.

## create_confectionery   [anchors: Create, survival (2)]
- from: create_confectionery chocolate/caramel bars (multi-step luxury processed good) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A chocolate bar is the textbook luxury good — grown (cocoa), crushed, mixed, molded; selling boxed confectionery is an obvious trade specialization for the crew's food-industry player.
- from: create_confectionery:hot_chocolate (warm comfort drink, Regeneration effect) | via: cold_sweat integration — hot_chocolate counts as a warming consumable | to: survival (cold_sweat temperature tie) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Hot Chocolate granting Regeneration *and* body-warming makes the confectionery line double as cold-biome survival gear — a neat cross-mod coherence that emerges without any forced recipe, just a cold_sweat config entry listing `create_confectionery:hot_chocolate` as a warming item. (Config-only; no recipe authoring needed.)
- from: create_confectionery effect candies (Speed/Saturation) | via: irons_spellbooks:alchemist_cauldron_brew or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: candy-as-magic-reagent is a tone mismatch — the confectionery vibe is whimsical-food, while arcane infusion wants minerals/essences; a speed candy dissolving into a magic infusion reads as arbitrary. The M-09 economy route is the correct second-pillar path.
- REWORK: none — existing Create + survival anchors are solid; M-09 above completes the two-pillar goal.

## appleskin   [anchors: support (1)]
- LEAVE — HUD/tooltip display mod; 0 items, 0 recipe hooks. Correctly identified as support infrastructure that makes the food system *legible* but has no content to weave.

## bettermodsbutton   [anchors: support (1)]
- LEAVE — client UI convenience; 0 items, 0 recipe hooks. Pure pause-screen button; no content surface.

## mutantszombies   [anchors: survival (1)]
- LEAVE — vanilla-horror mob expansion with no special drops (loot=no per dossier). All 7 items are spawn eggs; there is no material surface to route. Forced edges here would be the explicit failure mode the briefing warns against. Worth a DESIGN note: if the mod ever gains unique drops in a future version, M-02 (mob-drop reagent sink) is the natural entry point.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs stone/brick/blackstone stair variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT (conditional — batch deco pass only) | hook: Architectural stone stairs crush back to gravel + xp nugget (lossy recycling); consistent with how every other stone-family deco block is handled in the pack. Should be authored as part of a wholesale deco-family M-04 pass that covers all Macaw's mods together, not in isolation.
- from: mcwstairs wood/plank railing variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood-family Create-crush is less interesting (planks → sawdust, not the stone→gravel+xp nugget that makes M-04 worthwhile); the stone variants are the meaningful return. Scoping the ACCEPT to stone/brick only keeps the recipe count sane.

## kleeslabs   [anchors: support QoL (1)]
- LEAVE — behavior-only mod; 0 items, 0 blocks, 0 recipe hooks. Single-slab-break interaction operates on existing blocks; nothing registered to weave.

== CHUNK COMPLETE ==
