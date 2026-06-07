# Phase 2 candidates — chunk-18

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — pure client rendering engine; no items, no blocks, no loot, no recipe surface. Zero content to weave. Dependency target for EMF; no second anchor is coherent.

## prickle   [anchors: support/library (1)]
- LEAVE — zero-content config-format library. No items, no loot, no recipe surface; no second anchor is coherent.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull + hpm:smallhull (ship-hull components) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: you build the cutter's hull on the mechanical crafter from brass fittings and iron plates — the pirate ships sit above raw wood-craft, where they belong in a Create pack
- from: hpm:corvette_steamship_item (WIP steamship — engine-driven) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the steamship is the pinnacle of the naval line; assembling its hull, boiler, and paddle-wheel through sequenced assembly gates it appropriately above the basic cutter
- from: hpm:cuttermilitariseditem / hpm:hand_cannon (combat vessels and weapons) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a shipwright who specializes can sell outfitted warships for coin — combat transport as a luxury trade good
- from: hpm:cannonball / hpm:mortar_ball (cannon munitions) | via: create:pressing (iron sheet → ball) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: createbigcannons already owns the cannon-ammo fabrication space; adding a parallel hpm munition chain risks cannons being double-sourced and de-values CBS's deep ammo system — role overlap, not a weave gap
- REWORK: existing anchor "aeronautics" is reasonable (water transport), but the mod's ships are bespoke boat-entities, NOT Aeronautics-physics ships. The anchor label should be clarified as "logistics/transport (naval)" rather than implying direct Aeronautics compat; note the curation overlap with Create Aeronautics + Create Big Cannons flagged in the dossier.
- OK — after the M-05/M-06 weave the mod earns Create + aeronautics/economy anchors (3 total), which is appropriate for a ship mod in this pack.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull (rare mob drop from dangerous underground creature) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold skulls are clearly magical curios — transmuting one in spirit fire to yield an essence fits the whimsical-dark-fantasy tone and gives a reason to seek out kobold dens beyond trade goods
- from: kobolds loot tables (kobold den structures, pirate dens) | via: loot-seed (numismatics coin drops) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: kobolds already trade in emeralds; seeding their loot with coins as well creates two overlapping currency drops from the same source — muddies the emerald-economy identity; keep emerald as their currency and M-14 bounties for coin conversion instead
- from: kobolds:kobold_skull (endgame bone-like block form — kobold wither skull exists) | via: loot-seed → bountiful board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty on kobold skulls pays coin — combat in kobold dens feeds the player economy, driving demand for better gear and rewarding specialization
- OK — two anchors (economy + survival) are sound. The M-11 transmutation add and M-14 bounty weave push it to magic + economy + survival (3), which is strong for an ambient creature mod.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:fish_skin (leather-substitute output of mechanical peeler) | via: numismatics sell / M-09 | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fisher who runs industrial peeling operation produces fish-skin in bulk — a traded hide commodity, enabling a maritime-supply specialization distinct from farming leather
- from: createfisheryindustry:seafood_chowder / cooked_lobster (high-effort processed seafood) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: premium seafood dishes are luxury goods — a ship cook's output that sells for more coin than raw fish, completing the fisher→processor→economy chain
- from: createfisheryindustry:cooked_lobster / mussels (rare seafood) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: lobster-as-magic-reagent is a tonal stretch — the mod's vibe is industrial cannery, not arcane cooking; forced edge
- from: createfisheryindustry loot (loot=yes — bait traps have catch tables) | via: loot-seed (rare season-gated fish variant available only in Summer/Autumn — Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: certain bait trap catches (e.g. lobster/mussels) are seasonal — trapping in summer yields more, driving the fisher to plan around seasons and feeding the survival pressure loop
- REWORK: none — existing Create + survival anchors are coherent and well-grounded. The M-09 economy adds are a natural third anchor.
- OK — after the above adds: Create + survival + economy (3 anchors), which is ideal for an industrial food-production mod.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — zero-content network-fix mod; no items, no loot, no recipe surface. No second anchor is coherent.

## cmparallelpipes   [anchors: Create (1)]
- LEAVE — single-purpose Create plumbing QoL tool (pipe wrench). No items with a material surface, no loot, no recipe types. The pipe_wrench_gear is a crafted tool, not a connective material. The dossier's own conclusion (no second-pillar weave is coherent) holds; forcing a Create-internal tool into a second system is an arbitrary edge.

## platform   [anchors: support/library (1)]
- LEAVE — pure cross-platform API library; no items, no loot, no recipe surface. No second anchor is coherent.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library; no items, no loot, no recipe surface. No second anchor is coherent.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — config-screen builder API; zero content surface. No second anchor is coherent.

== CHUNK COMPLETE ==
