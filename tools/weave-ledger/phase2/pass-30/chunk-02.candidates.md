# Phase 2 candidates — chunk-02

## blueprint   [anchors: support/library (1)]
- LEAVE — pure code library; ships one trivial vanilla-style chest (blueprint:template_chest) with no coherent processing role; no recipe types, no c:tags of substance, no loot table. No second anchor possible.

## towntalk   [anchors: support/curated-flavor (1)]
- LEAVE — audio-only MineColonies addon; zero items, zero blocks, zero loot. Nothing to weave.

## betterbiomereblend   [anchors: support/performance-client (1)]
- LEAVE — client-side color-blend engine; no items, no blocks, no loot, no material surface whatsoever.

## sound_physics_remastered   [anchors: support/client-audio (1)]
- LEAVE — client audio rendering; no items, no blocks, no material graph. Nothing to weave.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime; no items, no blocks. Nothing to weave.

## byzantine   [anchors: survival/colony (1)]
- LEAVE — MineColonies schematic-style pack; zero items, zero blocks; purely a schematic/visual extension of MineColonies. All economy/production weave potential flows through MineColonies itself, not through Byzantine independently.

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — behavior-only interaction hook; no items, no recipes, no loot. Nothing to weave.

## mru   [anchors: support/library (1)]
- LEAVE — pure code-sharing library; zero items, zero blocks, no material surface.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — pure library dependency; zero items, zero blocks. Nothing to weave.

## immersive_paintings   [anchors: support/decoration (1)]
- LEAVE — pure decorative-expression mod; no recipe types; 4 items are placeable canvases with no material role in any machine/ritual. Forcing a frame-via-Create edge would be busywork; the content surface produces no fluid, ore, essence, or intermediate that any method wants.

## underground_village   [anchors: survival/worldgen (1)]
- from: Stoneholm structure (loot chests + villager trades) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: underground villages hold loot that rewards the players who explore them; seeding combat-supply drops (rope, torches, tools) or regional goods into Stoneholm chests makes the settlement a resource node the party competes to discover first — combat-route supply made spatial
- from: Stoneholm villagers | via: loot-seed (trade-table edit) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: M-30 requires region-locked ore-gen as the gate; a villager trade table is not a scarcity gate, it's ambient availability. M-21 (villager-trade seam to economy) is CUT. No clean motif for "underground settlement is a regional trade hub" that isn't a bare sell-link.
- REWORK: existing anchor survival is correct. The dossier proposes M-09 (Numismatics sell) which is RETIRED — that proposed connection should be flagged for replacement with the loot-seed / M-34 approach above.

## mousetweaks   [anchors: support/QoL-client (1)]
- LEAVE — client input-handling tweak; zero items, zero blocks, no material surface. Nothing to weave.

## moonlight   [anchors: support/library (1)]
- LEAVE — library/API; spawn_box and placeable_item are internal scaffolding items, not player-facing materials with a processing role. The data-driven-trade API it exposes is exercised by dependent mods, not moonlight itself.

## tide   [anchors: survival (1)]
- from: tide raw fish (c:foods/raw_fish, biome-specific catches) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill whole raw fish → fishmeal (a fertilizer intermediate) + bone scraps; fishmeal feeds Create's automated farming chains — every fishery output has a downstream machine step
- from: tide exotic fish (tide:abyss_angler, void / nether catches) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: abyss-dwelling creatures carry a residue the occultist can burn for spirit essence; rare biome-locked fish become a magic input that the combat/exploration specialist trades to the mage
- from: tide raw/cooked fish (large seasonal output stream) | via: farmersdelight:cooking + extradelight:drying_rack | to: survival (food-depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasonal catches → smoked/dried fish via drying rack; a preserved-food intermediate that feeds the colony food supply chain (M-28 is the downstream; this step is the processing link)
- from: tide:abyss_angler / exotic fish as "sellable luxury" | via: bare economy sell | to: economy | motif: (none — bare sell-link) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; "exotic fish are sellable" is the ambient endpoint, not a demand-gating weave. Rejected per player-run-economy rules.
- from: tide fish drops (Serene Seasons seasonal gate) | via: config/worldgen seasonal-spawn compat | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tide already has Serene Seasons compat (dossier confirmed); ensure seasonal-only fish feed at least one recipe that creates a mid-tier item unavailable in off-season — the season is the gate, not just flavor
- REWORK: dossier lists M-09 as a STRONG candidate — that motif is retired; the economy link needs re-scoping to M-34 (combat/exploration supply, biome-locked fish traded to non-explorers) or M-30 (biome-locked fish as a regional-scarcity gate input). The M-12 fishmeal/processing and M-02 exotic-reagent directions above are the correct replacements.

## bakery   [anchors: survival (1)]
- from: bakery finished baked goods (cakes, tarts, cupcakes) | via: minecolonies request/supply | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: bakery-tier luxury foods are exactly what a thriving colony's citizens request; a Bakery hut (or Cook hut with a recipe list) consuming bakery outputs creates a recurring colony-driven demand that the food specialist must supply — colony route as the demand engine
- from: bakery:bread / flour stage | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wheat → flour is the entry step in the baking chain; routing it through Create's Mill instead of (or as an alt to) the crafting_bowl ties the bakery's first step to the tech spine without force — a miller specialization feeds a baker specialization
- from: bakery baked goods as "luxury sell goods" (bare) | via: numismatics sell | to: economy | motif: (none — bare sell-link) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "cakes are sellable" is the ambient endpoint. Economy link only counts when it gates demand (M-28 above does this correctly via colony consumption).
- from: bakery surplus sweets (speed/strength buff foods) | via: occultism:ritual or ars_nouveau:imbuement (as catalyst) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — baked goods as arcane catalysts is a forced whimsy pairing. A cupcake as an infusion ingredient strains credibility even in a fantasy pack; no "of course" hook.
- REWORK: existing survival anchor is correct. Dossier's M-09 sell-link and weak M-02 magic lead should be retired; M-28 colony-demand and M-12 Create-milling are the sound replacements above.

## modelfix   [anchors: support/performance-bugfix (1)]
- LEAVE — client rendering fix; no items, no blocks, no content surface. Nothing to weave.

## rolling_down_in_the_deep   [anchors: support/client-QoL (1)]
- LEAVE — client camera/movement addon; no items, no blocks, no material graph.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a werewolf-like creature's severed claw carries predatory spiritual charge; burning it in spirit-fire yields an occult essence — folklore-horror drop becomes a magic reagent the mage needs
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the grotesque organ of a legendary beast is the right texture for a transmutation catalyst; imbuement produces a source-adjacent reagent that only the folklore hunter supplies
- from: brazil_legends:amber_shard | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: amber is fossilized resin — crushing yields a fine dust and an XP nugget (standard M-04 deco/mineral crush); the dust is a natural polish or alchemical intermediate
- from: brazil_legends:amber_shard as a sellable luxury (bare) | via: numismatics sell | to: economy | motif: (none — bare sell-link) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; "amber is a luxury curio for coin" is ambient. Economy link only counts when gating demand. The M-02/M-11 magic routes above give it real demand without a bare sell.
- from: brazil_legends boss/rare drops (capelobo, headless mule, cuca) | via: loot-seed / boss-key gate | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Cuca (a witch-entity) or the Headless Mule as a boss whose drop gates a complex Create recipe — a boss-key unlock in the folklore combat route; players must confront the creature before the tech step opens
- REWORK: dossier M-09 sell-link (amber_shard as "sellable luxury") is the exact retired motif pattern; should be replaced with M-02/M-11 magic routing and M-15 boss-key established above.

## create_mobile_packages   [anchors: create, aeronautics (2)]
- OK — connections sound. Already holds create + aeronautics (the drone-courier logistics arm). No forced third anchor needed; infrastructure mods don't need a magic/survival pull.
- from: robo_bee courier network as a player-to-player goods-delivery layer | via: aeronautics logistics arm | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a cross-route dependency emerges naturally — a player who produces goods in one base ships them to another player via bee-port network; the logistics layer becomes the physical trade medium the economy pillar rides, without touching coin at all
- from: create_mobile_packages:robo_bee item | via: create:mechanical_crafting | to: create (deeper fabrication) | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the courier bee is a sophisticated Create-built automaton; requiring a mechanical_crafting recipe for the robo_bee (with Create parts as inputs) gating the drone tier behind the tech spine makes the logistics upgrade a real milestone, not a free unlock

## prickle   [anchors: support/library (1)]
- LEAVE — config-format library; zero items, zero blocks, no material surface. Nothing to weave.

== CHUNK COMPLETE ==
