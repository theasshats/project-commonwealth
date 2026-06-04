# Phase 2 candidates — chunk-04

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single filter-item QoL tool that extends Create Deployer behavior (randomizes which item is dispensed); no material outputs, no processing surface, no method-routing possible without fabricating a contrivance. One-pillar Create QoL mods are a known category; forcing a 2nd pillar here would be purely nominal.

## direct_chute   [anchors: Create (1)]
- LEAVE — a single slot-less logistics block (zinc direct chute); it transports items but does not transform them, has no material outputs, and registers no recipe-types. Any "aeronautics logistics" tie-in would be purely nominal (the block has no ship-specific mechanic). Crafted from zinc already in the Create system; no foreign join possible.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is a flight-grade component — of course it needs a precision Create assembly chain, not a craft table
- from: drones:iron_rotor | via: create:mechanical_crafting (brass shaft + andesite casing) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors are machined parts; a mechanical crafter is the natural home for a moving-parts assembly
- from: drones:pocket_drone (assembled) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a hand-built personal quadcopter is a luxury good; traders would pay coin for one
- from: drones:wood_rotor | via: any complex method | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: hard guardrail — wood_rotor is the starter/everyday tier; gating it behind a machine would block basic drone access; keep vanilla crafting

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: tavern cartographer villager trade | via: numismatics / M-21 | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and maintainer leans no; the tie-in is also indirect (vanilla emerald trades, not Numismatics directly) — no coherent method-routing to economy without inventing content; surface for review only
- from: trial-key / ominous-trial-key loot | via: numismatics bounty / M-14 | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is provisional; the keys are vanilla items not unique to this mod and any bounty edit would live on the key item itself (shared with vanilla trial chambers) — too broad and too provisional to author here
- LEAVE — an exploration/structures datapack with no proprietary items or processing methods; its contribution is loot and discovery. Any downstream sink (bounty boards, recipes) would be on items from *other* mods that happen to spawn in these structures. The mod itself has no material join surface.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: naval structures (aesthetic / thematic) | via: aeronautics pillar — ships rhyme with airships | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the structures are static worldgen, not functional vessels; a thematic "ships↔airships" edge has no in-game mechanic, no item/method routing, and would be a lore-stretch with no player-observable effect; no-motif
- LEAVE — worldgen-only nautical dungeon mod; 0 blocks/items registered, no processing surface. Its value is ocean exploration and loot variety, which already seeds whatever economy/craft sinks exist downstream. No coherent 2nd pillar without fabricating content the mod doesn't have.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill chews desert forage into a cactus pulp that feeds food/dye recipes — raw world → machine output, exactly what Create's mill is for
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: farmersdelight:cutting | to: Create (survival↔Create processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: giant mushroom caps cut down to cooking-ready pieces on the Farmer's Delight cutting board — big dynamic tree falls into the food chain
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro_fruit is an everyday forage item with no processing behind it; M-09 is for high-effort consumables — a raw cactus fruit sold raw is not a luxury good; the processing path (milling→intermediate) is the right route, not raw sell

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — pure behavior datapack: raises dragon HP, adds phases, adds boss music. Adds no items and does not alter dragon drop tables. There is no material to route through any method. Any weave would require inventing content the mod simply does not have; that is a design change, not a recipe weave.

## endermoon   [anchors: survival (1)]
- LEAVE — a lunar-event mod that boosts enderman spawns; it has no items or blocks of its own. The indirect effect (more enderman → more ender pearls) is a supply-tap that benefits any existing pearl-consuming recipe elsewhere, but the weave belongs on the *ender pearl consumer* (an Ars/Occultism recipe), not on endermoon itself. Per M-22 note: the Ender Moon event is one of the "all the moons" Enhanced Celestials family — if a lunar-reagent weave is designed, it should target the parent enhancedcelestials dossier or a shared lunar reagent, not this zero-item event mod.
