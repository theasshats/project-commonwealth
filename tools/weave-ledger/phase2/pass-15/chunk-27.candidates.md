# Phase 2 candidates — chunk-27

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — genuine zero-content library/behavior mod: 0 blocks, 0 items, no loot tables, no recipes; purely cosmetic client-side animation overrides. Nothing to route material through.

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese:cheddar / brie / gouda / aged cheeses | via: numismatics sell / trade config | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an aged cheese takes real time and Create machinery; selling it for coin is the natural luxury-trade payoff
- from: create_cheese:cheese_cellar (maturing station, tag-driven inputs) | via: create_cheese:maturing | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: route a magical perishable (e.g. an Ars Nouveau or Occultism alchemical ingredient) through the Cellar's tag-driven maturing slot to produce an aged arcane reagent — the "aged essence" angle, cellar as an atemporal incubation chamber
- from: create_cheese:calendar_page_tier_3 (endgame maturing gate) | via: bountiful decree (config) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board requests fine aged cheese as a luxury-fetch objective, paying coin — connects the kitchen to the quest economy
- from: create_cheese:cheese_curds | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing dairy curds into raw/gravel equivalent is thematically incoherent; M-04 is a deco/metal motif, not a food motif
- REWORK: no existing connections flagged as weak — current 2 anchors (Create + survival) are well-grounded. M-09 economy link is listed as candidate but not yet authored; accept it as top priority.

## dndesires   [anchors: Create (1, deep)]
- from: dndesires:rubber (output of hydraulic_compacting) | via: create:mixing / dndesires:hydraulic_compacting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber gaskets and seals are a plausible structural/airframe material — a fabricated elastic intermediate for Aeronautics hull joints and balloon envelopes
- from: dndesires:milkshakes (chocolate/glowberry/vanilla) | via: numismatics sell config | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshakes are a processed luxury consumable (Create machinery + crop inputs); selling them for coin is the natural food-economy payout
- from: crops/drops routed through dndesires:freezing sail | via: dndesires:freezing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: freezing a crop or mob drop on a belt is a Create-native food-preservation prep step, tying seasonal produce to the Create spine
- from: dndesires:asphalt blocks | via: create:deploying / item_application | to: aeronautics | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: asphalt as a landing-pad or runway surface block applied to airship docking structures; light deploy-application upgrade for ship bases — thematically plausible industrial surface
- from: dndesires:rubber | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: haunting rubber (soul-fire transmutation) has no thematic grounding — rubber is an industrial material with no soul/spirit connection; forcing M-19 here is arbitrary
- from: dndesires:cardboard_package_* | via: bountiful decree (config) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty board requests packaged goods (cardboard-packaged Create output) as a logistics-chain objective, paying coin — ties Create packaging to the quest board
- REWORK: dndesires is currently 1-pillar (Create only). The milkshake/food angle (M-12 + M-09) is the clearest 2nd pillar; aeronautics rubber (M-23) is the strongest 3rd candidate.

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — zero-content behavior mod: 0 blocks, 0 items, no loot, no recipes. It is a JSON-driven combat framework; materials cannot be routed through it. No coherent 2nd-pillar weave possible without forcing an edge.

## structurize   [anchors: support/library — MineColonies build engine (1)]
- LEAVE — library/build-engine dependency for MineColonies; its tools (sceptergold, sceptersteel, shapetool) are not gameplay-progression items and its weave is entirely MineColonies' weave. No loot tables. No recipes. Treating its tool items as weave targets would be forcing edges onto deliberately-utility content.

## bakery   [anchors: survival (1)]
- from: bakery:strawberry_cake / bakery:chocolate_gateau / bakery:linzer_tart (high-effort baked goods) | via: numismatics sell config | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: multi-step baked luxury goods (Farm & Charm bowl → jam → cake) are textbook sell items; coin payout connects the baking chain to the economy pillar
- from: bakery wheat input | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat into flour through the Create millstone routes the bakery's raw-ingredient step through the Create spine — a simple, coherent fork of the vanilla baking chain
- from: bakery:apple_jam / bakery:strawberry_jam / bakery:glowberry_jam (jams, high sugar/fruit processing) | via: bountiful decree (config) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bounty board requests jam jars as a village supply contract, paying coin — ties artisanal food production to the quest economy
- from: bakery:baguette / bakery:bread (food output) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: infusing bread into a magic reagent has no thematic grounding in Ars Nouveau or Occultism lore — magic mods don't use baked goods as arcane catalysts; this would be forced arbitrage
- from: bakery:blank_cake_interaction (in-world right-click decoration) | via: create:deploying | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: re-route the blank_cake decoration step through a Create deployer rather than hand-click — the deployer applies the topping as a light automation hook, tying bakery automation to Create's deploying method
- REWORK: existing survival anchor is sound. Economy (M-09) and Create (M-12) are both ACCEPT and should be the priority 2nd/3rd pillar authors.

## betterendisland   [anchors: survival/end-game (1)]
- LEAVE — genuine zero-content structure-overhaul mod: 0 blocks, 0 items, 0 loot tables (loot=no). It is a pure structural/visual worldgen rework of the End island arena. No items to weave, no loot to seed. Nothing coherent to connect.

## endermoon   [anchors: survival/spawn-event (1)]
- from: endermoon lunar event (passive enderman spawn surge) | via: Enhanced Celestials event system / config | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: during the Ender Moon, enderman spawn surge produces a glut of ender pearls — gating an Ars Nouveau or Occultism lunar ritual ingredient on this event makes the moon matter (pearls collected under Ender Moon carry a "lunar charge," used as a magic catalyst); the event is the delivery mechanism
- from: endermoon lunar event | via: bountiful decree (config) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board Decree activates during Ender Moon night (or its aftermath) requesting ender pearl quantities for coin — turns the spawn surge into a timed economic event; players hunting during the moon earn extra
- from: endermoon Super Ender Moon (all-mob surge) | via: config tie (Enhanced Celestials + Bountiful decree timing) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Super Ender Moon triggers an emergency bounty Decree for any mob drop, making the chaotic night profitable — reinforces "the world pushing back" as both dangerous and economically rewarding
- REWORK: no items means delivery is exclusively config / loot-seed / event-system — these are valid Phase-3 actions per the briefing. The M-22 lunar-reagent link is the strongest weave since it directly feeds magic.

## bountiful   [anchors: economy (1)]
- from: bountiful reward pool | via: numismatics config (reward = coin) | to: economy | motif: M-08 / M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: repointing bounty payouts to numismatics:cog/spur gives Numismatics a natural money faucet and locks Bountiful into the economy pillar; without this the gold-ingot default sits outside the pack's currency system
- from: bountiful objective pool (Decree config) | via: config — request Create-processed goods as objectives | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a Decree that demands Create-processed intermediates (iron sheets, zinc ingots, cogwheels) as bounty objectives makes the Create production chain generate a demand signal — "the board needs gears today" ties manufacturing to the quest economy
- from: bountiful objective pool | via: config — request magic reagents (source gems, arcane essence) as objectives | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Decree requesting mob-drop magic reagents (e.g. `ars_nouveau:source_gem` from infused mobs, occultism drops) bridges combat/magic to the economy in both directions
- from: bountiful:decree (configurable objective category selector) | via: config — Aeronautics cargo delivery as objective type | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — "fly cargo to location X" is not mapped to any M-01..M-24 motif; this is a legitimate future gate-0 motif candidate but cannot be accepted without one
- REWORK: current 1-pillar (economy) is coherent but thin. The top priority is the numismatics coin-payout config (M-14) to close the loop, followed by the Create-demand decree (M-12) as 2nd pillar.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content behavior mod: 0 blocks, 0 items, no loot, no recipes. Pure door-interaction convenience. No material surface to route or weave.

== CHUNK COMPLETE ==
