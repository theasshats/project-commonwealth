# Phase 2 candidates — chunk-04 (pass-04, blind)

## betteroceanmonuments   [anchors: survival (1)]
- LEAVE — structure-overhaul only; 0 blocks/0 items, no registry items and no recipe type to route material through. A loot-table seed (coin/reagent into monument chests) is a datapack edit, not a mod weave; no coherent method-routed 2nd pillar.

## underground_village   [anchors: survival (1)]
- from: Stoneholm villager trades | via: numismatics trade-seating (villager trade → coin) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/explore-only (maintainer leans no); it's location/trade-seating, not a method-routed processing edge, and the mod owns no recipe type. Surface for review, do not author.
- LEAVE — 0 blocks/0 items, no recipe type. Only conceivable 2nd pillar is the contested villager-trade seam (M-21), which is explore-only. No coherent method-routing.

## create_enchantment_industry   [anchors: Create (1)]
- from: liquid experience (experience_bucket) | via: magic-side XP cost — Occultism ritual / Ars enchanting_apparatus / Iron's spell-gear upgrade consuming liquid XP as fuel | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: pipe your mob-farm XP straight into a ritual or spell-gear upgrade — the factory enchant line feeds the magic table.
- from: liquid experience | via: ars_nouveau:imbuement / forbidden_arcanus infusion using liquid XP as a refined input | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-10 generalizes the same XP→magic bridge as the M-05 routing above; listing both double-counts the one real seam (liquid XP into a magic method). Keep the native-gating form, drop the redundant infusion form.
- from: enchanted gear / books output | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: enchanted books are already vanilla-tradeable and player-priced; minting them via Numismatics adds a flat-currency arbitrage on an automatable good (hyper-enchant could print money). Balance risk; player-run-currency caveat. Leave to the 0.9 economy review.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: structure/trial loot + tavern cartographer trades | via: numismatics trade-seating | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla emerald villager trading, not a method; any tie-in is a separate loot/bounty datapack edit on the contested M-21 seam (explore-only). No recipe type to route through.
- LEAVE — datapack of 100+ structures, 0 blocks and only vanilla trial-key items; no processing join. Exploration content that seeds downstream sinks already.

## createnuclear   [anchors: Create (1)]
- from: refined uranium / steel ingots (scarce regional metals) | via: create:* processing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade metal is rare and regional — process it, mint it, and the atomic tier becomes a high-value trade good only a few colonies can supply.
- from: reactor_core / multiblock fission (massive SU) | via: M-15 boss-key unlock (reactor build gated behind a boss/MineColonies on-ramp per DESIGN) | to: organic↔Create on-ramp | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: that's progression-gating already native to the Create pillar, not a 2nd-pillar weave for THIS mod; M-15 anchors the consuming recipe, not createnuclear's own anchor. Record as a gating note, not a pillar add.
- from: anti_radiation armor + radiation hazard | via: Cold-Sweat / Serene Seasons survival layer | to: survival | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: thematic only, no method-routing — radiation is a hazard system, not a material run through a method. no-motif, surface for review.

## createlowheated   [anchors: Create (1)]
- LEAVE — single-block heat-mechanic tweak (1 block / 1 item, no recipe type, no tradeable/magic surface). It deepens the Create pillar itself (heat as managed fuel cost) but has no material to route into a 2nd pillar. Support-tier within Create.

## betterendisland   [anchors: survival (1)]
- LEAVE — pure structure overhaul; 0 blocks/0 items/0 loot, no method. Nothing to weave.

## rottencreatures   [anchors: survival (1)]
- from: themed undead drops (frozen_rotten_flesh, magma_rotten_flesh, corrupted_wart) | via: occultism:spirit_fire / ars_nouveau:crush transmutation | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a storm-lich's corrupted wart and frozen flesh aren't trash — spirit-fire them into arcane essence; themed undead loot becomes ritual reagents.
- from: themed undead drops (rotten flesh variants) | via: create:haunting (soul-fire) into a soul/byproduct | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: haunt the rotten flesh on the Create line and pull a soul output — the bestiary feeds the soul seam, not just the kill count.
- from: decorative mob heads | via: create:crushing recycle | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: trophy heads are display deco; crushing a unique mob head back to flesh/gravel is incoherent (no player nods at "grind the storm-lich's head"). Leave heads as trophies.

## spawn   [anchors: survival (1) — FD cooking/cutting inbound]
- from: clam/crab/anglerfish seafood drops | via: create:milling / farmersdelight:cutting deeper into the meal-feast processing web | to: survival/food (Create-side) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: push the catch past raw FD into Create-milled seafood meals — fishing flows into the same processing web as the crops.
- from: clam-pearl variants + exotic catches (anglerfish, sea cow) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare clam pearls and exotic catches sell as luxury trade goods — coastal players get an economic payoff for fishing a regional biome.
- from: clam/fish drops | via: createfisheryindustry mechanized harvesting → Create logistics | to: aeronautics/logistics | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: weak/derivative — its catch is already covered by the M-12 food routing above; routing the SAME everyday drops a second time into fishery logistics double-counts one material and the aeronautics tie is a stretch for a cute-critter mod.

## travelersbackpack   [anchors: survival (1)]
- from: backpack tank + hose (portable fluid buffer + respawn) | via: passive transport/logistics role on long-range Aeronautics expeditions | to: aeronautics | motif: (none — passive item, no routable method) | power: mid | tone: ok | verdict: REJECT | reason: thematically a logistics fit but it's a worn passive item, not a material run through a method; no-motif. Surface for review, don't force.
- from: tank/blast-furnace/smelting upgrade modules (the endgame upgrade tier) | via: create:deploying item-application of a Create-pressed component onto the upgrade | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the high-tier pack upgrades (extra tanks, in-pack smelting) slot a Create-pressed mechanism — the explorer's kit earns a light Create step at the upgrade tier, not the basic leather pack.
- from: basic leather-tier backpack | via: create:sequenced_assembly | to: Create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: guardrail — never gate a basic/everyday component (the entry leather pack) behind a deep sequenced chain. Depth must scale with power; the basic pack stays a simple craft.

== CHUNK COMPLETE ==
