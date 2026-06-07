# Phase 2 candidates — chunk-09

## tide   [anchors: survival (1)]
- from: tide:abyss_angler / void-caught exotic fish | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: fish from the void or the deep abyss make more sense as ritual fuel than dinner — the catch becomes a magic reagent, connecting the angling table to the occult spine.
- from: tide:raw_fish (large new food stream) | via: farmersdelight:cutting / extradelight:oven | to: create (via survival food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tide already wires into farmersdelight:cutting; extending the catch to extradelight and cooking methods pulls the fishing system into the food-processing chain that feeds colony workers and survival pressure.
- from: tide:rare biome-locked fish | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; every rare drop is trivially sellable; fish aren't a scarcity-gated distribution node, and the bounty-payout alone (M-14) isn't structural enough for a primary anchor here.
- REWORK: existing survival anchor is solid; the farmersdelight:cutting inbound weave is already noted (made-by). The 2nd anchor should be magic (exotic fish as reagent, M-02) or Create food chain (M-12), not bare economy sell.
- OK — existing survival(1) connection is sound. New second anchor candidates above are the priority.

## createaddoncompatibility   [anchors: support (library/compat)]
- LEAVE — pure tag/priority compat glue with no items, blocks, or methods; zero content surface to weave.

## appleskin   [anchors: support (client UI)]
- LEAVE — HUD display mod; no items, methods, or material flows to weave.

## trashslot   [anchors: support (QoL/client)]
- LEAVE — inventory UI slot only; no gameplay content, no material flow.

## kubejs_create   [anchors: support (Create-recipe scripting bridge)]
- LEAVE — scripting bridge enabling Create-recipe weaving; it is the tool that builds the edges, not a weave target itself.

## minecolonies   [anchors: survival, create (2)]
- OK — connections sound. Both existing anchors (survival settlement/food + Create quarry M-05) are well-authored. No REWORK needed.
- from: colony-produced food (apple_pie, baked_salmon, c:foods/bread/soup) | via: numismatics sell / trade economy | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; colony food is abundant and sellability alone is not a structural loop-closer. Dossier itself notes this as "emergent — leave to the economy pillar." Correct call.
- from: minecolonies:ancienttome (research gate) | via: boss-drop gate / KubeJS gating | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: ancienttome is already the colony's own research gate mechanism, not a boss drop; re-using it as a M-15 boss-key would conflict with its established role and its reagent-ownership isn't listed as free. No clean path here without invention.

## blood_n_particles_datapack   [anchors: support (cosmetic)]
- LEAVE — emits cosmetic particles only; no items, no methods, no material flow to weave.

## dynamic_fps   [anchors: support (performance/client)]
- LEAVE — client FPS throttling; no items or methods, pure runtime optimization.

## modelfix   [anchors: support (bugfix/render)]
- LEAVE — client rendering patch; no items, methods, or materials.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ambergris — a rare oceanic secretion — is the kind of exotic organic that Ars imbuement wants; routing it in makes whale-hunting feed the magic spine rather than be a dead-end drop.
- from: alexsmobs:ender_residue / void_worm_beak | via: occultism:ritual or ars_nouveau:summon_ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: End-tier creature drops as ritual catalyst for Occultism or a high-tier Ars glyph — the void boss's remains open access to a deep magic recipe, connecting the boss-hunt loop to the magic production axis.
- from: alexsmobs:bear_dust / bone/shell drops (mid-tier organics) | via: create:crushing or create:mixing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crush bear dust or brittle shells in a millstone to yield a bone-meal variant or fertilizer intermediate; fauna outputs become a Create input stream instead of dead-end drops.
- from: alexsmobs:rare drops (void_worm_beak, effigy) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; rare drops are trivially worth selling; the structural tie is the magic anchor (M-02), not the coin payout.
- REWORK: alexsmobs currently has only survival(1). All three ACCEPT proposals above add a real second anchor (magic or create). Priority order: magic via M-02 (strongest thematic fit, exotic drops), then create via M-02 crushing intermediates.

## bettermodsbutton   [anchors: support (client UI)]
- LEAVE — pause-screen UI button; no items, methods, or gameplay.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- from: vanilla dragon drop stream (dragon egg, dragon's breath) | via: loot-table seeding | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: EDF raises the dragon to 500 HP and adds attack phases — a harder kill should reward better. Seed a small additional drop (e.g. a specific essence or catalyst usable in Ars/Occultism) into the dragon's loot table, making the enhanced fight a gateway into the magic tier. The mod doesn't add drops itself, but it owns the encounter context that justifies a richer loot table.
- from: edf dragon encounter (enhanced difficulty, no reward upgrade) | via: loot-table seeding | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A harder dragon fight is the natural gate for a high-tier Create component or machine unlock; seed a boss-key drop (e.g. dragon_scale) that gates a late Create recipe, so defeating the enhanced dragon is the prerequisite for a fabrication milestone.
- REWORK: loot=yes is confirmed in dossier, but the current dossier says "Does NOT change dragon drops or add rewards." That means the two loot-seed ACCEPTs above are Phase-3 datapack edits (seed INTO the vanilla dragon loot table, contextually justified by the harder encounter), not changes to EDF itself. Delivery: `via: loot-seed` on both. The first anchor survives as survival; these add magic and create respectively.

## jeresources   [anchors: support (client UI)]
- LEAVE — display-only JEI addon; no items, methods, or material flows.

## ponderjs   [anchors: support (Create tooling/docs)]
- LEAVE — scripting API for Create Ponder scenes; developer tooling, no player-facing content or material flow.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. GTMOGS is the worldgen framework that makes scarcity real; it enables M-03 and M-08 downstream but doesn't need its own weave. Two anchors (survival exploration + economy scarcity foundation) are accurate and correct.
- No REWORK needed. The framework is correctly framed as an enabler, not a target.

## chat_heads   [anchors: support (QoL/client)]
- LEAVE — chat-UI cosmetic; no items, methods, or materials.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest:bay_bolete / common_puffball (everyday foraged mushrooms) | via: farmersdelight:cooking or extradelight:melting_pot | to: create (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Foraged mushrooms go into the cooking pot like any crop — the foraging layer slots cleanly into the Farmer's Delight food chain, making the fungi part of the pack's cooking-processing network.
- from: mushroomquest:agarikon / rare mythical caps (effect-bearing, biome-locked) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare alchemical mushrooms with magical effects are exactly the kind of worldgen-locked reagent an arcane infusion method wants — the mycology hunt becomes a magic-ingredient gather.
- from: mushroomquest:deadly caps (poisonous/hallucinogenic) | via: extradelight:vat or create:mixing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Process toxic mushroom caps in a vat or mixing bowl into a crude toxin or solvent that feeds another recipe step — a useful intermediate that converts the dangerous foraging output into a craft input.
- from: mushroomquest:rare mushrooms | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Sellability of rare foraging drops is trivial; the structural anchor is the magic infusion (M-10) or the food-chain processing (M-12).
- REWORK: mushroomquest has only survival(1). The three ACCEPTs above give it create (M-12 via food chain) and magic (M-10 via rare reagent). Priority: M-12 first (natural food-layer fit), M-10 second (rare caps as infusion reagents).

## better_lib   [anchors: support (library)]
- LEAVE — pure shared-systems library, no gameplay content.

## mcwroofs   [anchors: support (decoration palette)]
- from: mcwroofs:stone/brick/terracotta roof variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A roof block crushed back to rubble and an XP nugget keeps the deco-palette in the Create recycling loop — a builder who overbuilt can recover raw materials, and the XP nugget is a light reward for the grind.
- REWORK: The dossier itself flags M-04 as "WEAK — leave unless a wholesale deco sweep." However, with 605 blocks, a single wholesale KubeJS tag-based rule (crush all `mcwroofs:*` stone/brick variants → gravel + xp nugget) is exactly how Create deco recycling works and covers the whole mod in one authored line. This lifts it from support(1) to support+create(2) cheaply. Tone is fine (craft → overbuild → recycle is the Create loop). Upgrade to ACCEPT at low authoring cost.
- from: mcwroofs wood/plank roof blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Wood planks crushing back to... planks or sticks is essentially lossless and low-signal; M-04 is designed for stone/metal deco (yields gravel/raw), not wood. Wood roofs don't fit the lossy-recycle motif cleanly.

## dummmmmmy   [anchors: support (QoL/combat-testing)]
- LEAVE — single-item combat-test prop; no material flow, no method surface, no structural weave.

== CHUNK COMPLETE ==
