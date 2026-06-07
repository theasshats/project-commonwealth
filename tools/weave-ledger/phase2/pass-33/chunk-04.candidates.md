# Phase 2 candidates — chunk-04 (pass-33)

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen datapack (no blocks, no items, no loot tables, no recipe types). Sets continent/mountain scale which amplifies regional ore scarcity thematically, but there is no material surface to route through any method. Thematic adjacency to M-30 regional scarcity is real but not actionable here — the lever is GTMOGS ore-gen, not terrain shape. No forced edge.

## trading_floor   [anchors: Create, economy (2)]
- OK — connections sound. Trading Depot is already a 2-anchor mod (Create automation + economy). Potential M-08 deepening (feed Create-processed scarce metals through the depot to acquire Numismatics coin from a human buyer) is naturally emergent — no recipe weave needed, the depot just does it. The M-21-style NPC faucet reading is cut; this mod's trades are player-to-player via villager automation, not an NPC coin source. No REWORK items — anchors are clean.

## cbc_at   [anchors: Create, aeronautics (2)]
- from: cbc_at:bronze_heavy_autocannon_barrel (endgame ship weapon) | via: cbc_at:ha_munition_assembly + M-15 boss-key | to: aeronautics | motif: M-15 | power: endgame | tone: ok — boss drop as a required component for the heaviest ship-to-ship weapon fits the progression curve naturally | verdict: ACCEPT | hook: the heaviest guns need more than metal — the war-machine demands a trophy from the hardest fight
- from: cbc_at assembled munitions (rockets/caseless) | via: create:sequenced_assembly cross-route — require an Ars Nouveau or Occultism reagent (e.g. source_gem or purified inert stone) in the sequenced fuze step | to: magic | motif: M-29 | power: mid/endgame | tone: ok — alchemical stabilizer preventing premature detonation is thematically coherent | verdict: ACCEPT | hook: volatile propellants need a magical stabilizer before they won't cook off in the barrel
- from: cbc_at munitions supply line | via: emergent trade — a combat specialist on one ship supplies munitions to traders/farmers | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: nobody wants to stop mining to forge rockets; the combat player becomes the munitions trader
- REWORK: existing aeronautics anchor is sound. No arbitrary connections flagged.

## resourcefullib   [anchors: support (1)]
- LEAVE — pure cross-platform utility/API library; 0 items, 0 blocks, 0 loot, no recipe types. Zero material surface. Genuine zero-content library.

## dynamic_fps   [anchors: support/performance (1)]
- LEAVE — client-side FPS throttle with no game-state content, no items, no loot. Genuine zero-content performance mod.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore / raw_tin (regional, biome-modded) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — Tin is positioned as a fresh scarce regional metal exactly parallel to how the pack narrates minting; player-run coin specialist route | verdict: ACCEPT | hook: whoever controls the tin veins controls the coin press
- from: create_ironworks:steel_plate / steel_ingot (fabricated endgame structural part) | via: aeronautics airframe/hull construction recipe requiring steel plate | to: aeronautics | motif: M-23 | power: endgame | tone: ok — steel is the premium structural material; iron ships are early, steel ships are late | verdict: ACCEPT | hook: a steel-hulled airship takes more to build — and takes more to sink
- from: create_ironworks:bronze_ingot / bronze_plate | via: cbc_at barrel/breech assembly (cbc_at:ha_munition_assembly consumes bronze) | to: aeronautics | motif: M-24 | power: mid | tone: ok — cannon barrels are bronzecast; the ironsmith is already the cannon supplier | verdict: ACCEPT | hook: the ironworks' bronze forge feeds the armory that arms the fleet
- REWORK: single anchor at Create is the gap — M-08 and M-23 each add a second system. No existing connection is arbitrary; just underpopulated.

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco blocks (bars, chains, lanterns, chests — any oxidation stage) | via: create:crushing → copper nuggets/raw copper + create:experience_nugget | to: Create | motif: M-04 | power: everyday | tone: ok — all copper deco fits the M-04 "recycles deco" established path; vanilla-era copper set is the prototypical case | verdict: ACCEPT | hook: an oxidized copper chest that didn't make the cut still puts copper back on the belt
- from: copperagebackport copper tools/armor | via: create:crushing (lossy) → copper nuggets | to: Create | motif: M-04 | power: everyday | tone: ok — same established path as other metal tools | verdict: ACCEPT | hook: broken copper tools go back to the smelter, not the bin
- from: minecraft:copper_golem_statue (Copper Golem mob) | via: thematic logistics adjacency to aeronautics — golem sorts chests into positions that feed Create item transport and, eventually, airship cargo holds | to: aeronautics | motif: no-motif | power: everyday | tone: ok — but no method to route through | verdict: REJECT | reason: no-motif — useful thematic synergy but there is no recipe-type or mechanic to compose against; "the golem helps loading ships" is pure emergent behavior, not a weave
- REWORK: survival anchor is sound. M-04 adds Create as a clean second anchor.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen library/API; 0 blocks, 0 items, 0 loot tables. Transitively required by Moog's structure mods (which have their own dossiers). No material surface.

## appleseed   [anchors: survival (1)]
- from: appleseed diet-variety demand signal | via: config pull — diet variety requirement creates continuous demand for diverse crops, meats, cooked dishes → pulls Farmer's Delight / ExtraDelight / vinery / farming production | to: production (Create/farming) | motif: M-26 | power: everyday | tone: ok — diet as standing consumption sink driving food production is the entire point of the mod | verdict: ACCEPT | hook: a balanced diet can't come from one crop — the farmer, the rancher, the cook, and the brewer all have a standing order
- from: appleseed diet buffs for certain nutrient groups | via: config/tuning — certain buff types (strength, speed) could be the explicit gate that makes a magic player want cooked meals, not just raw produce | to: magic | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — diet buffs feeding magic is thematically forced; there is no method to compose against; the magic link here would be arbitrary
- REWORK: survival anchor is sound; M-26 (consumption sink) adds a production-side second anchor. The dossier's own 2nd-anchor note correctly identifies the demand-driver framing.

## jakes-build-tools-2.0.1.5   [anchors: QoL/building tools (1)]
- from: minecraft:hard_hat / minecraft:diamond_chisel / minecraft:diamond_trowel | via: create:deploying or M-05 gating — gate the diamond-tier builder tools through Create's deployer (apply a Create-made component onto the iron base) | to: Create | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — these are vanilla-style builder conveniences; gating a QoL chisel behind Create machinery turns a simple utility into a progression hoop with no design purpose; cost doesn't scale with power here (a trowel is not a keystone)
- LEAVE — no coherent 2nd anchor. Build-assist utility tools under the minecraft: namespace; the mod's sole role is construction QoL. Forcing a Create or magic edge onto a trowel is a defect per guardrails.

## touhou_little_maid   [anchors: survival (1)]
- from: touhou_little_maid maid (the entity / summoning recipe) | via: touhou_little_maid:altar_recipe_serializers — gate the maid summoning on a magic reagent input (e.g. ars_nouveau:source_gem or occultism:silver_thread) so the altar reads as a true ritual | to: magic | motif: M-11 | power: mid | tone: ok — the altar is already a ritual-style multiblock; feeding a magic-currency item into it is how "arcane summoning" should work; the Touhou shrine-maiden (miko) aesthetic and the Ars Nouveau / Occultism ritual vocabulary are tonally aligned (shrine ↔ ritual circle) | verdict: ACCEPT | hook: a maid doesn't just appear — the shrine's altar demands an offering the mage knows how to prepare
- from: touhou_little_maid maid labor (farming / fishing / ranching tasks) | via: MineColonies adjacency — maid farm workers reduce colony pressure by automating tasks that colony huts also fill, creating a choice between colony investment and shrine investment | to: economy (colony route) | motif: M-28 | power: mid | tone: ok — two labor routes (colony hut vs. shrine maid) is the "non-overlapping producers" design; players trade altar ingredients vs. colony resources | verdict: ACCEPT | hook: building a shrine full of maid farmers is cheaper up front than a full colony, but the colony pays off later — pick your route
- from: touhou_little_maid power-point bottles (the altar's fuel currency) | via: loot-seed into boss / dungeon loot tables → power-point bottles appear as rare boss-room drops | to: survival | motif: M-02 | power: mid | tone: ok — power-point bottles as mob-drop reagents gate the altar's throughput; scarcity of power points limits maid automation rate | verdict: ACCEPT | hook: the maids' power comes from bottles you find in the world's darkest corners
- REWORK: survival anchor is sound; three candidates add magic and economy. No existing connection is arbitrary.

## gravestone   [anchors: survival (1)]
- LEAVE — single-item death-recovery utility (gravestone block + obituary item). No processing surface, no loot route that isn't its own death-spawned block. Any weave would be contrived. Genuine minimal-content mod.

## geckolib   [anchors: support/library (1)]
- LEAVE — pure rendering/animation API library; 0 items, 0 blocks, 0 loot. Hard dependency for many mobs/magic mods but carries no material of its own.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising (the mod's own recipe type) — a magic item (e.g. ars_nouveau focus, occultism infused gem) is built by energising through an electric coil | to: magic | motif: M-17 | power: mid | tone: ok — "electrically charged focus" is the standard Create-electricity-meets-magic bridge; the energiser is exactly the kind of mid-tier step that makes magic players depend on the electrical engineer | verdict: ACCEPT | hook: the enchanter found that running a source gem through an arc of electrified copper makes it receptive to spells it couldn't hold before
- from: create_new_age:thorium_ore (scarce, 2 biome-modifiers) | via: create:crushing → enrichment → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok — Thorium is rare by design; a reactor-fuel mint is the highest-tier coin path, parallel to the tin/steel tiers below it | verdict: ACCEPT | hook: the rare-earth traders deal in thorium bars — heavier coin for a heavier element
- from: create_new_age advanced energiser / reactor heat output | via: aeronautics — FE-to-rotation motor powers an Aeronautics engine or heavy propulsion system, threading electricity into the fleet's power tier | to: aeronautics | motif: M-24 | power: endgame | tone: ok — nuclear-powered airships is a natural late-game milestone; the motor is the drivetrain component | verdict: ACCEPT | hook: the biggest airships need more than a windmill — they need a nuclear heart
- from: create_new_age:corium (reactor byproduct) | via: create:crushing or occultism:spirit_fire → corium as a dangerous waste-reagent feeding a dark ritual or create process | to: magic | motif: M-32 | power: endgame | tone: ok — nuclear waste as ritual ingredient is thematically daring but coherent ("the most corrupted material feeds the deepest ritual"); aligns with Occultism's darker tone | verdict: ACCEPT | hook: the corium the reactor spits out is exactly what the ritual circle was waiting for
- REWORK: single-anchor Create; all four candidates add valid second systems. No existing connection is arbitrary.

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (captures villagers) | via: emergent behavior — relocating villagers to a MineColonies town or Aeronautics ship is the primary value; no recipe weave, but the lasso is a logistics enabler | to: aeronautics | motif: no-motif | power: mid | tone: ok but no method | verdict: REJECT | reason: no-motif — lasso-as-logistics-enabler is real emergent value but there is no recipe-type or method to compose against; "it helps you move mobs onto ships" is pure convenience, not a designed weave
- from: moblassos:golden_lasso craft (gold + leather + slimeball) | via: M-05 — gate the lasso behind a Create-pressed component (e.g. require a Create-made brass mechanism) to add a small tech-onramp | to: Create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: depth doesn't scale with power — a livestock-carrying lasso is a basic everyday tool; gating it behind Create machining over-costs it (guardrail: "never gate a basic/everyday component behind a complex recipe")
- LEAVE — item-transport utility; no material processing surface. Any weave forces an edge onto a basic QoL item, violating the cost guardrail.

## dataanchor   [anchors: support/library (1)]
- LEAVE — pure data-attachment + networking developer library; 0 items, 0 blocks, 0 loot, no recipe types. Genuine zero-content library.

## ponderjs   [anchors: support/Create tooling (1)]
- LEAVE — documentation/authoring tool (KubeJS Ponder scenes); 0 items, 0 blocks, no material. Supports the Create spine's discoverability. No weave possible or needed.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-layer fishing tweak (spawn entity on reel-in); 0 items, 0 blocks, 0 loot. No material of its own to route. Weaving belongs to the fish-content mods it sits beneath.

## recipe_integration   [anchors: support/recipe-bridge (1)]
- LEAVE — conditional cross-mod recipe datapack; 0 blocks, 0 items, no content of its own. It authors recipes of other mods' types rather than exposing a material surface. Note: a pack-author task is to audit which of its 82 c:tags actually fire given this modlist (most reference uninstalled mods — aether, mekanism, MI, GT — and are inert). That audit is a maintenance task, not a Phase-3 weave.

## chefsdelight   [anchors: survival, economy (2)]
- from: chefsdelight Cook/Chef villager trades | via: the player-run economy reads: a cook player supplies FD meals to a Chef villager who in turn sells to other players via Trading Floor | to: economy | motif: M-26 | power: everyday | tone: ok — the cook profession creates a consumption sink (villager trades consume food, continuously) that drives food production demand | verdict: ACCEPT | hook: the village chef's order never stops — someone has to keep the cooking pot full
- from: chefsdelight Cook/Chef villager trades | via: M-33 service — a player-cook maintains the Chef workstation (keeps the Cooking Pot stocked) as a paid service for a village that other players visit | to: economy | motif: M-33 | power: everyday | tone: ok — "cook-for-hire" is the labor economy face of the food pillar | verdict: ACCEPT | hook: you don't have to cook for yourself if you know where the village chef lives — and they take coin
- from: chefsdelight existing "M-09 route trades onto numismatics" note in dossier | via: M-09 is RETIRED | to: — | motif: M-09 RETIRED | verdict: REJECT | reason: M-09 is retired per rework #163/#240 — "villager sells for coin" is an NPC faucet; the economy link must be demand-gating, not a vendor sale. The two valid links above (M-26 consumption, M-33 service) replace this.
- OK — existing survival + economy anchors are sound; M-09 deepening in dossier should be flagged as REWORK (retired motif). REWORK: the dossier's 2nd-anchor candidate citing M-09 (luxury-good→coin via numismatics config) must be updated — M-09 is retired; redirect to M-26 consumption or M-33 service framing instead.

== CHUNK COMPLETE ==
