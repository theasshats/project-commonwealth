# Phase 2 candidates — chunk-02

## gravestone   [anchors: survival (1)]
- LEAVE — pure death-recovery utility (no craftable material, no loot beyond the inventory already held, no processing method). Any weave would be a forced edge.

## glitchcore   [anchors: support/library (1)]
- LEAVE — zero-surface loader-abstraction library (0 items, 0 blocks). Genuine zero-content dependency.

## wits   [anchors: support (1)]
- LEAVE — server-side debug command only (0 items, 0 blocks). Nothing to weave.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute (logistics block) | via: recipe (crafting) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: M-24 is the mechanical-component → propulsion/control drivetrain seam; a passive logistics conduit is not a drivetrain component — the pairing is thematically adjacent but not coherent. The block is a conveyance helper, not an aeronautics mechanical part. Force.
- LEAVE — a single Create logistics block with no foreign feedstock, no loot, and no thematic hook beyond Create itself. LEAVE is warranted; forced aeronautics edge above is already rejected.

## ribbits   [anchors: survival (1)]
- from: ribbits Amethyst-Shard trade economy | via: KubeJS trade bridge (config tie) | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: ACCEPT (provisional) | hook: Ribbit merchants already run on amethyst shards — mapping that shard-trade to Numismatics makes swamp-village commerce part of the shared economy rather than an isolated pocket currency. Tag: provisional motif per M-21.
- from: ribbits:toadstool / ribbits:mossy_oak_planks (deco woodset) | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for metal/stone deco crushing back to raw material; applying it to a wood deco set is a category stretch (no metal/stone component), and generic-wood cutting is already covered by vanilla/other woodsets — too thin a hook to justify adding another wood to the cutting-recipe catalogue.
- REWORK: existing connections — only 1 anchor (survival); the provisional M-21 economy link above is the logical second.
- OK for survival anchor — the swamp-village flavor is genuine survival/world-population content.

## moreculling   [anchors: support/performance (1)]
- LEAVE — pure render-culling client optimization (0 items, 0 blocks, 0 loot). Genuine zero-content dependency.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear / gnkinetics:industrial_gear (kinetic components) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: A planetary gear or worm gear is exactly the kind of mechanical part that belongs in a real airship drivetrain or propeller transmission — using gnkinetics parts as required inputs for mid-tier Aeronautics propeller/engine assemblies gives the gear-variety content a cross-system purpose and makes the aeronautics build tier more interesting.
- from: gnkinetics gear components | via: create:mechanical_crafting | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is the sequenced-assembly keystone for endgame multi-stage chains; routing a kinetic gear through mechanical_crafting is a single-step self-referential Create move, not a cross-system weave. It adds depth within Create but not a second anchor. No new pillar gained.
- REWORK: only 1 anchor (Create). The M-24 aeronautics link above is the coherent second.

## sliceanddice   [anchors: Create, survival (2)]
- OK — connections sound. Already the canonical M-12 processing-chain bridge (Create kinetics automating Farmer's Delight cutting/cooking). No rework needed; the two-anchor position is well-motivated and the existing inbound weaves (create:filling, create:mixing) confirm it.
- from: sliceanddice:sprinkler (fluid dispenser over crops) | via: config tie / fluid routing | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT (no-motif) | reason: sprinkler-as-economy-node has no clear motif fit; it's a growth accelerator, not a trade good or coin sink. Would need a new motif to proceed — queue for Gate 0 if desired.

## betterendisland   [anchors: survival (1)]
- LEAVE — zero-item, zero-loot structure overhaul only (0 items, 0 blocks, loot=no). Nothing to weave; confirmed zero-content surface.

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight cooked dishes (beef_stew, chicken_stew, pies, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A hearty stew or pie is the obvious tavern commodity — pricing high-effort cooked meals on the Numismatics market lets a kitchen-specialist player sell provisions to explorers and fighters, feeding the scarcity→economy loop naturally.
- from: farmersdelight crops (cabbage, tomato, onion, rice) | via: serene_seasons (seasonal availability gating) | to: survival (loop reinforcement) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seasonal crops are already a core design lever (M-16 priority per ledger); tagging FD's unique crops as season-limited growers (e.g. tomatoes in summer, cabbage in autumn) makes the food system feel alive and ties cultivation to the calendar — a direct scarcity-pressure driver.
- REWORK: connections are sound and both anchors are genuine; the M-09 economy link above upgrades it to 3-system coverage. No existing connections need cutting.

## lootjs   [anchors: support (1)]
- LEAVE — scripting API library (0 items, 0 blocks). It is the enabler of M-02 mob-drop weaves elsewhere; it is not itself a weave node.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (multiblock climate machine) | via: recipe gating on Create brass/casing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth is post-Nether kit that radiates long-range climate control — requiring Create brass casing or a fluid pipe connection (to pipe steam/lava as fuel) to build the full-power Hearth makes temperature-control a Create deliverable, tying the survival pressure directly to the tech spine. Depth scales appropriately: the Hearth is already a mid-tier item (needs Nether first).
- from: cold_sweat insulated armor (goat_fur_*, chameleon_*, hoglin_*) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Insulated armor is a functional necessity in cold biomes, not a luxury consumable. M-09 is for high-effort luxury goods (wine, cheese, pies) — survival gear doesn't fit the motif cleanly. A player would buy it for function, not luxury, which muddies the coin-sink intent.
- REWORK: only 1 anchor (survival). The M-05 Create gating above is the coherent second.

## imfast   [anchors: support (1)]
- LEAVE — server-side movement-validation patch (0 items, 0 blocks). Genuine zero-content; functions as aeronautics prerequisite infrastructure, not a wireable resource.

## multipiston   [anchors: support (1)]
- LEAVE — MineColonies/Structurize dependency block (1 block but it's a colony builder tool, no item processing, no loot value). Any weave would be contrived.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller | via: recipe gating on Create precision mechanism | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The block already requires precision mechanism + electron tubes in its crafting recipe (dossier notes this). Proposing M-05 again for the same item is redundant — the existing recipe already threads it through Create's material ladder. No new anchor is added.
- from: create_tweaked_controllers control surface | via: aeronautics drivetrain recipe (control-surface seat / rudder assembly) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: A programmable controller that translates player inputs into redstone-link signals is exactly the control-surface half of M-24 — making it a required component in an Aeronautics helm or rudder assembly means flying a ship requires a real control rig, not just any lever. Anchors the mod to aeronautics formally rather than by proximity.
- REWORK: only 1 anchor (aeronautics); the above M-24 accept formalizes that anchor rather than adding a second. For a genuine second, the Create craft-gate is already present in the recipe (create parts required) — the mod is functionally dual-anchored (Create-inputs, aeronautics-output) but the dossier only lists aeronautics. OK to count it as Create + aeronautics (2) once the M-24 connection is authored.

## l2library   [anchors: support/library (1)]
- LEAVE — developer API library (0 items, 0 blocks). Genuine zero-content dependency.

## exposure   [anchors: Create, survival (2)]
- from: exposure:camera (gold or base) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A developed photograph or camera is a high-effort luxury keepsake — selling printed photographs at a Numismatics-priced stall (e.g. an ingame portrait photographer on a server) is a natural economy niche; the Create automation pipeline (sequenced-assembly film development) already makes quantity feasible.
- from: exposure:black_and_white_film (film cartridge) | via: create:pressing | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 is the deploy-application upgrade seam, not a flat pressing step. Film cartridges are everyday craft items; pressing them into a "developed" intermediate is a light step, but the motif requires applying a woven part via deploying/item_application for an upgrade — pressing raw stock doesn't fit M-20's intent. No-motif reject.
- REWORK: existing connections are sound (Create sequenced-assembly development + survival hobby). The M-09 economy link above is a natural third. No rework needed on current anchors.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. GTMOGS is the worldgen substrate of the scarcity model; it enables M-03 and M-08 downstream rather than needing its own weave. Two-anchor position (survival exploration + economy scarcity foundation) is well-motivated and correct. No rework needed.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, honey_cocktail, melon_cocktail, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Tropical cocktails are the textbook luxury consumable — a beach-bar proprietor selling them on a server is exactly the kind of player-run commerce Derpack targets. The Palm Bar's multi-ingredient mixing already makes them non-trivial to produce in bulk.
- from: beachparty:mini_fridge (freezing method) | via: beachparty:mini_fridge_freezing → bulk ice supply | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The Mini Fridge produces ice/packed-ice passively; routing it as a Create processing feedstock via M-12 stretches the motif (M-12 is about crop/material chain-pull into finished goods or useful intermediates, not a passive ice-chest). Ice is also trivially obtainable; no meaningful scarcity hook. Weak edge, REJECT.
- from: beachparty:coconut / beachparty:cooked_mussel_meat | via: farmersdelight:cutting + create:milling | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Coconut is a distinct tropical crop — routing it through FD cutting (shredded coconut) and optionally create:milling (coconut flour) makes it a processing-chain ingredient that feeds the kitchen network, grounding the tropical food tier in the same production web as the rest of Farmer's Delight. Mussels through FD cutting (mussel meat byproducts) similarly.
- REWORK: only 1 anchor (survival). Both ACCEPTs above take it to 3-system coverage (economy + Create/survival chain).

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (fallen-star rock block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A meteor fragment is thematically a "rock from the sky" — crushing it yields iron/nickel dust + an experience nugget byproduct, making meteor craters a minor but flavorful Create processing feedstock. Depth is appropriate: everyday power (a rock that fell in your world, not an endgame gate).
- from: Blood Moon / Blue Moon (event state) | via: event-gating (config tie / KubeJS event hook) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: M-22 explicitly covers ALL moon events (Enhanced Celestials + Ender Moon + any lunar mod); gating a magic ritual or reagent-attuning step on a Blood Moon or Blue Moon being active turns celestial events from atmosphere into a material production window — e.g. a Blood Moon infusion for a combat reagent, or Blue Moon attunement for a luck-aligned catalyst. Directly advances survival→magic leg of the loop.
- from: Harvest Moon (crop-growth event) | via: seasonal reagent (season-gated input) | to: survival/Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: The Harvest Moon's accelerated crop-growth window makes it the obvious time to run a Create automated farm at full throughput — pairing a unique crop yield (e.g. a "moon-touched" seed or a bonus drop only during Harvest Moon) with Create's processing chain creates a time-pressure production burst that feeds the scarcity loop.
- REWORK: only 1 anchor (survival). Three ACCEPTs above bring it to Create + magic + survival (3-system coverage). The M-22 magic link is the primary new anchor.

== CHUNK COMPLETE ==
