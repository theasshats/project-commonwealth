# Phase 2 candidates — chunk-16

## drones   [anchors: aeronautics (1)]
- from: drones:iron_rotor / drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: a drone's thrust tier is a Create build — brass precision parts and sequenced-assembly plate the ion thruster, so drone upgrades are earned through the same machine chain as the rest of the pack's tech.
- from: drones:controller | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the assembly controller is a more-complex mechanical contraption; gating it behind Mechanical Crafting ties personal robotics into the Create spine naturally.
- from: drones:pocket_drone (finished crafted good) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: drone is a personal use item, not a trade good with natural buyer demand — selling it feels like padding the coin economy, not a player-driven specialization; the mod's real identity is the flight+drill combo, not artisan production.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — pure client cloud renderer; 0 items, 0 blocks, no loot, no content surface. Genuine zero-surface visual mod; no coherent weave possible.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — zero content (0 items, 0 blocks, no loot). Pure keybind-triggered multiplayer ping marker. No material or recipe surface exists.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the potion that accelerates tree growth is logically an arcane preparation — imbueing it through Ars Nouveau links forest cultivation to the magic pillar and gives the dendro_potion a second life as an alchemical reagent.
- from: dynamictrees:branch (generic branch drops from felling) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: branches stripped from felled dynamic trees are a constant byproduct; milling them into wood pulp/sawdust gives Create's processing line something to eat from every lumber run — small step that makes the automated tree farm feel complete.
- from: dynamictrees seeds (species seeds as seasonal crops) | via: season-gated worldgen/growth behavior | to: survival/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Serene Seasons already gates DT tree growth by season; explicitly calling out that rare mega-species seeds (e.g. mega_spruce_seed) only drop in the right season gives the seasonal-reagent motif a forest flavor — a log-supply pinch that drives trade and planning.
- from: dynamictrees:dirt_bucket | via: create:milling or occultism:spirit_fire | to: Create or magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: dirt_bucket is a utility item for the planting mechanic, not a material in its own right; routing soil through machines or ritual feels arbitrary and has no thematic coherence.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library. 0 blocks, 0 items, no loot, no recipes. Provides base classes and registry helpers for MMF-Group mods only. No content surface to weave.

## createbigcannons   [anchors: Create, aeronautics (2)]
- REWORK: existing aeronautics anchor is solid (cannons mount on Aeronautics ships) — no rework needed.
- REWORK: existing Create anchor (deep sequenced/mechanical_crafting chain for barrels/breeches) is solid — no rework needed.
- from: createbigcannons shells / munitions (finished war goods) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cannon-focused specialist selling shells to the group's military buyers is a natural trade-guild driver — munitions are a luxury processed good with obvious demand in a PvPvE pack.
- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: numismatics mint (M-08 adjacency — scarcity metal → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: CBC steel is already a shared c:ingot tag; making the raw ingot mintable into coin is weaker than the processed-munitions path above and risks commoditizing the metal rather than the finished product. The M-09 munitions path is the better first weave.
- from: boss/elite mob drops (via loot=yes — cannon loot tables exist) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding bounty-relevant drops (cartridge fragments, cannon parts) into CBC's loot tables links the PvPvE combat loop to the bounty board → coin chain; fighting to scavenge cannon parts is thematically resonant.
- OK — connections sound on Create + aeronautics pillars; economy weave is the natural third.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:thorium_ore / thorium_ingot | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is a scarce regional ore with its own biome-modifiers; Create-crushing it and minting the processed output into coin follows the exact scarcity-metal→coin spine (M-08), making the nuclear tier a genuine economic specialization.
- from: create_new_age:corium (reactor byproduct) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor slag glowing with radioactive energy is a natural endgame arcane catalyst — imbueing or spirit-firing corium produces a high-tier magic reagent, threading the nuclear tier into the magic pillar without requiring extra mining.
- from: create_new_age:energising (method) | via: create_new_age:energising applied to magic focus/tool | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Energiser is the pack's FE↔rotation bridge; charging an Ars Nouveau focus or Iron's Spellbooks scroll through it creates the electric-magic seam (M-17) — the tech tier powering the magic tier's high-end items.
- from: create_new_age:thorium_ore (biome-modifier scarcity) | via: worldgen scarcity config | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: scarcity of Thorium is already expressed by its biome-modifiers (2 of them); adding a separate config tie doesn't add a pillar connection — it's just tuning, not a weave. The M-08 coin path is the real 2nd-pillar move.

## create_compressed   [anchors: Create (1)]
- from: create_compressed bulk-pile blocks (compressed crushed ores) | via: create:splashing / bulk washing | to: Create (depth) | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing/washing flow is entirely within Create's own ecosystem — the compressed block → bulk wash path is exactly what the mod is built for; no new pillar is added, it's a Create-internal QoL loop. No foreign connection.
- from: create_compressed:mechanism_block / cogwheel_block (compressed Create mechanical parts) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: compressed mechanism blocks are a natural structural intermediate for building large Aeronautics ship hulls — requiring a mechanism_block in an airframe recipe ties the storage-compression mod to the aeronautics pillar and gives it a reason to exist beyond QoL.
- from: create_compressed:crushed_<metal>_pile blocks | via: create:mixing (batch processing) | to: Create (already) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: same-pillar; the compressed blocks feeding Create's own mixing chain is a Create-internal efficiency path, not a cross-pillar weave.

## moreculling   [anchors: support/performance (1)]
- LEAVE — pure rendering-performance mod; 0 items, 0 blocks, no loot. Client face-culling optimization with no content surface. Genuine zero-surface mod.

## glitchcore   [anchors: support/library (1)]
- LEAVE — genuine zero-content loader-abstraction library; 0 blocks, 0 items, no loot. Backs Glitchfiend mods (Serene Seasons, Biomes O' Plenty, TerraBlender); no player-facing surface to weave.

== CHUNK COMPLETE ==
