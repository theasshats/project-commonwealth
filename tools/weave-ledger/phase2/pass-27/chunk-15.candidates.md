# Phase 2 candidates — chunk-15

## patchouli   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; produces only guide-book items, no material surface, no recipe method to route through. Support role sanctioned.

## immersive_paintings   [anchors: decoration/support (1)]
- LEAVE — pure decorative-expression mod; 4 items (painting canvas types), no fluids/ores/essences to route. Forcing a Create-frame recipe would be busywork — no "of course" hook exists. Zero-surface for weaving.

## necronomicon   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items); exists only as a dependency for opacpvp. Nothing to weave.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. The mod is already ≥2 anchors: it is a Create-spine logistics extension (Bee/Drone Ports built from Create parts) and the aeronautics/logistics arm (airborne courier delivery). Economy-infrastructure adjacency is ambient rather than demand-gating; no economy motif applies without a bare sell link (rejected). No REWORK needed on existing links — they are coherent and direct.
- from: robo_bee courier delivery | via: no weave | to: economy | motif: no-motif | verdict: REJECT | reason: "delivers trade goods" is ambient endpoint, not a demand gate; no motif matches without inventing one. Existing Create+aeronautics anchors suffice.

## sounds   [anchors: support/client-polish (1)]
- LEAVE — client SFX overhaul (0 blocks, 0 items); audio-only, no material surface, no recipe method. Support role; nothing to weave.

## create_confectionery   [anchors: Create, survival (2)]
- OK — existing Create+survival anchors are sound (cocoa→chocolate through create:mixing/crushing; candies feed the food/effects side of survival). M-09 in dossier is retired — that candidate is dead.
- from: create_confectionery:bar_of_black_chocolate (mid-tier processed good, multi-step) | via: farmersdelight:cooking / extradelight:melting_pot | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: molten chocolate as a cooking-recipe input for fancy dessert dishes in FD/ExtraDelight, deepening the food web without a new system anchor — but survival already anchored; this solidifies the weave by routing chocolate *through* a second food-processing method rather than just Create.
- from: create_confectionery:hot_chocolate | via: create_confectionery:*_candy effect foods | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: effect candies (Speed, Regen, Mining Fatigue cure) are consumed on use — demand never zeroes; these are repeating consumables that keep the Create chocolate-factory chain producing continuously. Satisfies consumption-sink demand-renewal edge.
- from: create_confectionery:bar_of_ruby_chocolate | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the mod has loot=yes but its loot tables are for the confectionery chest drops, not boss/combat drops; M-34 is combat-route supply and doesn't apply here. No combat specialty relevance.
- REWORK: dossier's "economy via numismatics sell" 2nd-anchor candidate cites M-09 which is retired — flag as dead candidate, needs removal from dossier notes.

## incontrol   [anchors: support/server-util (1)]
- LEAVE — config-only JSON rule engine; 0 blocks, 0 items. Shapes spawn tables and loot as a design tool but is not itself a routable material or method. Support/infra; nothing to weave.

## tide   [anchors: survival (1)]
- from: tide:abyss_angler / rare biome-locked fish | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a deep-sea or void fish transmuted via spirit fire into an aquatic essence — "of course a spirit ritual would want something from the abyss." Deepwater fish are genuinely hard to obtain (void-fishing gear required), appropriate mid-tier input. Advances survival→magic arm of the loop.
- from: tide:raw_fish (c:foods/raw_fish, large volume) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish milled into fishmeal fertilizer — a clean processing-chain pull; fishmeal feeds Create's crop-automation or Farmers Delight, tying the fishing output stream into the production spine. Everyday tier, one light step.
- from: tide:fish (biome-locked catch, rare varieties) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this edge already exists (dossier: "already feeds farmersdelight:cutting") — not a new weave.
- from: tide:abyss_angler / void fish | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (occultism:spirit_fire) is already accepted above and is a cleaner routing (aquatic+death→spirit resonance). Two magic routings for the same material family is redundant; the spirit_fire path is the stronger theme. Keep M-11, drop this.
- from: tide:biome-locked fish (e.g. nether/void varieties) | via: worldgen gate (Serene Seasons compat already present) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: certain fish are only catchable in specific seasons (compat is already live) — seasonal reagent gate, ties tide directly into the seasons pressure lever. This is a config/data action, not a recipe, but the compat hook is there. Advances survival depth.
- from: tide:rare fish drops | via: loot-seed (existing loot=yes) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: biome-locked catches are region-scarce (a void fish can't be caught in a river biome; deep-ocean fish need the right region) — makes rare fish a trade good by geography, completing the scarcity→economy arc without an NPC faucet.

## imfast   [anchors: support/QoL (1)]
- LEAVE — server-side mixin patch (0 blocks, 0 items); removes vanilla movement anti-cheat for vehicles. Functional enabler for aeronautics; no material or method surface to weave.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ice_crystal as a keystone input in a deep sequenced-assembly chain (e.g. a cryo-brass component or a refrigeration stage for advanced food/chem processing) — "the boss gave you the key; now it unlocks the machine." Endgame depth, many steps, consistent with pack's boss-key-unlock design. Advances survival→Create.
- from: mowziesmobs:earthrend_gauntlet / wrought_helm (Wroughtnaut artifacts) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: using the gauntlet *as input* to a crafting recipe would consume/destroy it — these are meant to be worn artifacts. The ice_crystal path (M-06 above) is the right model; the gauntlet/helm are rewards, not reagents. Consuming them would be thematically wrong.
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: imbuing an ice crystal in the Enchanting Apparatus to produce a frost-attuned magic reagent — the crystal bridges survival-boss fight with the magic production route. Thematically resonant (Frostmaw is a cold-magic boss). Advances survival→magic.
- from: mowziesmobs:sol_visage (Barako solar artifact) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a sol_visage offered in an Occultism ritual channels solar energy into a high-tier magic product — the sun-god artifact feeds the spirit/occult system. Very thematic (tribal solar boss → occult sun ritual). Endgame; one-per-boss scarcity gate.
- from: mowziesmobs boss drops (general) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: combat specialists farm Mowzie's bosses and trade the artifacts (ice_crystal, sol_visage) to magic/tech specialists who need them as gate inputs — the supplier side of the boss dual-role. Loop: survival danger → boss drop → trade. No NPC; pure player-economy.

## minecolonies   [anchors: survival, Create (2)]
- OK — existing anchors are sound: colony progression gated on Create parts (quarries on andesite/brass/cogwheel/precision_mechanism via 98-minecolonies.js); survival anchor clear (food/farming/mining). Deeper Create tech is intentionally gated behind colony research (the on-ramp).
- from: minecolonies University research | via: knowledge gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: certain tech capabilities (e.g. a miner hut that extracts a specific ore, or an enchanter hut enabling Ars-for-hire) are locked behind colony research — you can't buy the *knowledge*, only its products. This is a demand-gate: a player who has the research has a service to offer. Advances production→economy (labor axis).
- from: minecolonies worker requests (huge inbound surface) | via: minecolonies:composting | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the composter hut continuously consumes organic byproducts (crop waste, wood chips, husks) to produce compost, creating a repeating consumption sink — the colony's appetite for organics never zeros out. Connects survival farming output into a colony consumption loop.
- from: minecolonies colony food demand | via: MineColonies hut requests | to: Create | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: this is the ambient colony-route already documented (M-28 is the designated motif for "colony route" but the specific edge — colony requests Create-processed food — needs a concrete recipe-lock to be a weave, not just "citizens eat food." Not specific enough to author against without a KubeJS gate. Flag as design intent, not a ready weave.
- REWORK: dossier notes "economy via M-09 (colony food/goods as sellable trade goods) — emergent, leave to economy pillar." M-09 is retired; this note should be updated to remove the M-09 reference and reframe as M-26 consumption (already accepted above) or M-28 (colony route). Minor dossier cleanup, not a weave issue.

## fluid   [anchors: Create, aeronautics (2)]
- OK — existing Create+aeronautics anchors are sound (centrifugal pump = Create-spine fluid tooling; fluid routing for bases/ships = logistics arm). No forced third anchor needed.
- from: fluid:centrifugal_pump (mid-tier, made via create:mechanical_crafting/compacting) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the centrifugal pump as a required fluid-distribution component on Aeronautics ships (fuel-line + coolant routing on larger vessels) — the drivetrain/fluid-control side of the airship supply line. Mechanical component → propulsion/control fits M-24. Solidifies the Create→aeronautics edge with a named part.
- from: fluid:neon_tube (decorative, everyday) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: neon_tube crush-back is M-04 territory but the item is a minor decorative light; forcing a crushing recipe adds no loop value — it's busywork deco-recycling. The anchors are already solid; this is padding.

## woodworks   [anchors: survival (1)]
- from: woodworks:*_boards / *_bookshelf blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood deco blocks crush back to planks + sawdust + XP nugget (lossy) — the standard deco-recycle seam; a player who overbuilds with wood boards can recover some plank value through Create. One light step, everyday tier, thematically obvious. Earns Create as 2nd anchor.
- from: woodworks:sawmill recipe-type | via: woodworks:sawmill | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the sawmill is a stonecutter-analog for wood; it doesn't process *Create's* materials. Overlapping its outputs with create:cutting is a recipe cosmetic, not a loop-advancing weave — it doesn't route any Create material through the sawmill. No real demand gate.
- from: woodworks:*_beehive | via: create:mixing (honey) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: woodworks wood-type beehives produce honey (via vanilla bee mechanic) that feeds into Create's honey-mixing recipes (honey blocks, honey bottles → create:mixing sweeteners) — a gentle but coherent material flow from the wood/beekeeping palette into Create's processing chain. Everyday, one step. Strengthens Create anchor.

## lithostitched   [anchors: support/library (1)]
- LEAVE — genuine worldgen-library; 0 blocks, 0 items. Shapes terrain/biome compatibility for mods like Tectonic. No player-facing material or method surface to weave.

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — client-side tooltip renderer (0 blocks, 0 items); no material surface. Support role.

## trashcans   [anchors: support/automation-QoL (1)]
- LEAVE — void blocks for item/fluid/FE overflow (4 items, no method). By nature anti-scarcity (deletes rather than routes); a scarcity-driven pack should not weave a void-block deeper into the loop. Existing support anchor is its correct role.

## hpm   [anchors: aeronautics (1)]
- from: hpm:corvette_steamship_item / hpm:cuttermilitariseditem (endgame ships) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the war cutter and corvette steamship are multi-stage sequenced-assembly builds requiring brass/mechanical-crafting components — a naval vessel that takes real Create investment to commission. Endgame depth; completely thematic (steam/industrial-age ship fits the Create-industrial aesthetic). Advances Create→aeronautics.
- from: hpm:pirate_cutter_item / hpm:raftitem (everyday-tier vessels) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the smaller ships built with a mechanical-crafting recipe gated on basic Create parts (andesite casing, cogwheels) — not sequenced, just a crafting-table-in-a-machine step. Light single gate appropriate for the everyday-tier vessels.
- from: hpm:hand_cannon / hpm:hand_mortar | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: naval handheld weapons made through Create mechanical crafting (cast iron barrel + brass fittings) — weapons manufacturing through the tech spine. Mid-tier, one step. Thematic: an industrial-age cannon should come from a machine shop.
- from: hpm:cannonball / hpm:mortar_ball | via: tfmg:casting or create:compacting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cannonballs are cast from molten iron through TFMG casting or Create compacting — munitions manufacturing is a continuous consumption sink (fired → gone), so demand never zeros. Advances Create→aeronautics supply chain and satisfies M-26 consumption loop.
- from: hpm ships (high-value, large items) | via: aeronautics transport as prerequisite | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a completed ship is too large/valuable to courier — it must be crewed to its buyer, making a shipwright's delivery itself an aeronautics/logistics service (you sail the ship to the customer). Gives the logistics arm a role in the naval economy. M-31 logistics-required bulk good.
- NOTE: dossier flags curation concern (overlap with Create Aeronautics + Create Big Cannons). That is a thunderdome question, not a weave. Noted; not blocking these proposals.

## spark   [anchors: support/performance (1)]
- LEAVE — performance profiler (0 blocks, 0 items); instrumentation only. Support role; nothing to weave.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — guidebook framework (6 items: book variants + leaflet); books are the surface, but they contain no routable material and no method to pull through. Support role; correctly left as docs/QoL anchor.

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchantments (loot=yes injection) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchantments applied through the Enchanting Apparatus using source_gem + materials — magic as the route to premium Elytra upgrades. Thematic: enchanting a glider with arcane flight magic is an "of course." Advances aeronautics→magic. (Contingent on Aileron's enchants being datapack/registry-exposed — verify at Phase 3.)
- from: aileron Elytra rebalance (behavior mod) | via: no material weave | to: Create/survival | motif: no-motif | verdict: REJECT | reason: the behavioral rebalance has no item surface to route; a recipe-link to Create or survival would be forced ("build a wing brace from brass"  is busywork). M-10 above via the enchanting apparatus is the only coherent hook.

== CHUNK COMPLETE ==
