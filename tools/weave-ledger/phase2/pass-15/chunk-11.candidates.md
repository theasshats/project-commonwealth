# Phase 2 candidates — chunk-11

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, no loot tables, no recipe types. Operates purely on existing crafting grids as a UI overlay. Nothing to route through any method.

## imfast   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, no loot, pure server-side movement-validation mixin. Functionally enables aeronautics at speed but has no material surface to weave.

## jamlib   [anchors: library/API (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, no loot, no recipe types. Pure developer API/config framework; no player-facing content surface.

## clumps   [anchors: support/performance (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, no loot, no recipe types. XP-orb entity merger; operates on vanilla orbs only, no material to route.

## cmpackagecouriers   [anchors: Create, aeronautics/logistics (2)]
- from: cmpackagecouriers:cardboard_plane (long-range autonomous courier) | via: trade (M-21) | to: economy | motif: M-21 | power: mid | tone: clash | verdict: REJECT | reason: The courier moves packages, it doesn't participate in a market. Wiring a logistics tool into the economy pillar via villager trade would be arbitrary — economy pillar cares about coins and sellable goods, not the delivery mechanism. M-21 is also provisional/leans no.
- from: cmpackagecouriers components (rope, transmitter) | via: recipe | to: economy (cross-base trade fulfilment) | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: No motif fits a "logistics-enables-trade" link; that's an emergent/design-layer connection, not a recipe-level one. Don't invent a motif.
- OK — connections sound. Already 2 pillars (Create + aeronautics/logistics). The emergent economy adjacency (couriers enable inter-player delivery of traded goods) is real but lives at the design layer, not a recipe weave.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create crushing wheel doubles your samurai gem yield — exactly what a prospector trading in rare stones would want.
- from: samurai_dynasty:steel_block / steel ingots (c:ingots/steel) | via: create:crushing (ore-doubling / recycling) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Route Yokai-region steel through the Create metal web — crushing steel scraps reclaims it, folding the feudal-Japan ore tier into the tech spine.
- from: samurai_dynasty Yokai drops (akaname_tongue, enenra essence-style drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are supernatural creatures — their remnants transmuting into occult essences via spirit fire is thematically exact, not forced.
- from: samurai_dynasty Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A tengu feather or oni horn imbuement-infused into an arcane reagent reads naturally for a pack that weaves East Asian spirit folklore into its magic system.
- from: samurai_dynasty:ruby / jade gems | via: numismatics (M-09 luxury good → coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare gems from Yokai-guarded shrines are exactly the kind of luxury commodity that commands a premium on the player market.
- from: samurai_dynasty Yokai boss drops | via: recipe (boss-key gate on a Create tech machine) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Defeating the Oni boss to unlock a high-tier Create machine component — the feudal gatekeeper of industrial progress.
- from: samurai_dynasty spirit_stone blocks (deco) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spirit-stone temple deco can be recycled back through a crushing wheel for raw stone + XP nuggets — consistent with how all deco recycles in the pack.
- REWORK: None needed — mod has no existing weaves authored yet; all candidates above are new proposals.

## lootr   [anchors: support/QoL (1)]
- from: lootr:trophy (a distinct item registered by lootr, found in structure chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: lootr:trophy is lootr's own container-state marker block, not a tradeable drop. It's not a material with economy value; trying to route it is forced. The loot=yes flag reflects that lootr intercepts all structure loot tables, not that it generates its own loot items.
- LEAVE — lootr is a loot-fairness mechanic, not a loot-content mod. Its own items (chest/barrel reskins, trophy) are structural UI elements, not materials. The loot=yes flag means it touches loot tables, but it reads/proxies existing tables rather than adding its own drops. No coherent second-pillar link without inventing arbitrary content.

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — genuine zero-surface client UI mod: 0 blocks, 0 items, no loot, no recipe types. Renders armor durability on HUD; purely visual, nothing to route.

## puzzleslib   [anchors: library/API (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, no loot, no recipe types. Multi-loader framework dependency for Fuzs mods; no player-facing surface.

## create_sa   [anchors: Create, aeronautics (2)]
- from: create_sa:brass_jetpack_chestplate / andesite_jetpack_chestplate | via: recipe | to: aeronautics deeper (M-23/M-24 adjacency) | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Jetpacks are personal flight, not airframe/drivetrain components. M-24 targets propellers/engines/control surfaces on ships, not wearable gear. Forcing a jetpack into M-24 would be a mis-categorization.
- from: create_sa blazing tools (blaze-powered) | via: ars_nouveau:imbuement or occultism ritual | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Dossier already flagged this and judged it not needed (Create+aeronautics sufficient). The blaze-magic link is coherent in tone but adds no new design leverage — the mod is already well-anchored. Leave unless a magic pillar actively wants a blaze infusion material.
- from: create_sa:brass_drone_item (programmable autonomous helper) | via: config/recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Drones are personal logistics, not ship drivetrain. M-24 specifically covers propellers/control surfaces for Aeronautics ships; drones don't feed that.
- OK — connections sound. Already 2 strong pillars (Create sequenced-assembly chain + aeronautics personal flight). No forced edge needed; dossier assessment holds.

== CHUNK COMPLETE ==
