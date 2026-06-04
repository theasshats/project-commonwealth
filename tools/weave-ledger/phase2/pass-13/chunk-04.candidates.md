# Phase 2 candidates — chunk-04

## fxntstorage   [anchors: Create, survival (2)]
- REWORK: OK — connections sound. Create-gated material ladder (andesite→brass) via `create:mechanical_crafting` is coherent and correctly sized. Survival anchor is the QoL/inventory role. No weak/arbitrary edges.
- from: fxntstorage:backpack_flight_upgrade | via: create:mechanical_crafting (M-20 deploy-application upgrade or M-24 mechanical component) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: The flight upgrade is a worn gadget granting personal lift; it doesn't logically feed an Aeronautics airframe/drivetrain recipe — the linkage would be thematic reach at best. M-24 requires a component that becomes part of the ship's propulsion/control, not a backpack perk. Force-fit.
- from: fxntstorage:hardened_backpack (hardened brass/iron tier) | via: `fxntstorage:backpack_crafting` as a colony logistics tool | to: economy (MineColonies colony supply) | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: No motif covers "colony supply item"; M-21 (trade-seam) is provisional and leans no; the backpack has no MineColonies crafting hook. No-motif → reject-for-review.

## zeta   [anchors: support (1)]
- LEAVE — pure code library (module/registration framework for Quark; 0 items, 0 blocks, 0 recipe types). Nothing to weave.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item builder QoL utility (filter items for Create Deployer randomization). No material surface, no processing method, no coherent 2nd pillar. Forced integration would be arbitrary.

## lionfishapi   [anchors: support (1)]
- LEAVE — pure animation/entity API library; 0 items, 0 blocks, 0 recipe types. Nothing to weave.

## sound_physics_remastered   [anchors: support/client-immersion (1)]
- LEAVE — client-only audio rendering mod; no items, no blocks, no recipe types. Nothing to weave.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — pure compat shim (Curios/Trinkets → Accessories bridge); 0 items, 0 blocks, 0 recipe types. Nothing to weave.

## clumps   [anchors: support/performance (1)]
- LEAVE — XP-orb entity merging for server TPS; no items, no blocks, no recipe types. Nothing to weave.

## extradelight   [anchors: survival, Create (2)]
- REWORK: OK — Create anchor via `create:mixing` (inbound made-by) is sound; survival anchor is the cuisine/feast role. No arbitrary edges. Both existing connections are coherent.
- from: extradelight crops/outputs (dried goods, syrups, jams, reduced fluids) | via: `create:milling` (grain→flour) + `create:pressing` (oil/juice extraction) + `create:mixing` (dough/batter) | to: Create (deepen existing) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The bakery's grain goes through Create's millstone before the Oven — Create is the prep station, not just a side method.
- from: extradelight high-tier feasts (feast dishes, baked alaska, structured desserts) | via: `numismatics` sell/pricing as luxury trade goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A full feast tray fetches real coin at a player shop — cooking effort converts to currency, tying the kitchen to the economy pillar.
- from: extradelight:evaporator output (salt, reduced fluid concentrates) | via: `create:mixing` or `ars_nouveau:imbuement` as a reagent solvent | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Salt/concentrate-as-magic-solvent is a stretch; the arcane infusion method already has Galosphere shards (M-07) as the anti-arbitrage catalyst. Introducing extradelight salt as a magic solvent steps on that reserved role without a clear player-legible reason. Theme borderline.
- from: extradelight:coffee (brewed/ground) | via: `create:milling` (grind beans) → `extradelight:oven` / mixing_bowl (brew) → sell as a luxury stimulant | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Freshly-milled coffee is a trade-post staple — someone roasts it, someone sells it, the market sets the price.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver UI, no items/blocks/recipe types. Nothing to weave.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: `ars_nouveau:imbuement` as an arcane catalyst or `occultism:ritual` ingredient | to: magic | motif: M-02 + M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Invoker's gem is suffused with dark enchantment energy — feeding it into an Ars imbuement chamber or an Occultism ritual is exactly the role it looks like it was built for.
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: `ars_nouveau:imbuement` as a spell-focus attunement reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary Dust — literally the residue of a creature of illusion — is a natural magic crafting ingredient; dropping it into an imbuement vessel makes sense at first read.
- from: illagerinvasion:platinum_chunk (Invoker/illager loot) | via: `create:crushing` → platinum ingot/dust intermediate | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: The dossier flags this as WEAK, and it is. Platinum as a Create ore-doubling target is fine in isolation, but platinum_chunk is a rare boss/illager drop — not a regional ore — so ore-doubling framing is misleading. It would be better treated as a scarce magic metal than folded into the Create spine generically. Defer.
- from: illagerinvasion:hallowed_gem | via: `numismatics` bounty/sell (rare Invoker drop → high-value coin) | to: economy | motif: M-14 (bounty → drop economy) | power: endgame | tone: ok | verdict: ACCEPT | hook: A bounty board paying out for an Invoker kill (proven by the Hallowed Gem it drops) bridges the combat loop to the player economy — dangerous raid for real reward.
- from: illagerinvasion:lost_candle | via: `create:haunting` (Create soul-fire transmutation) → soul-infused candle intermediate for Occultism | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: A candle "lost" in the Invoker's dark ritual — passing it through Create's haunting process charges it with soul-fire, making it a ready Occultism ritual component. The name earns the method.
- from: illagerinvasion:horn_of_sight | via: `occultism:spirit_trade` or ritual as a scrying-reagent input | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: horn_of_sight is a utility item (player tool — reveals hidden entities). Using it as a ritual-consumed reagent feels punishing for an item players will want to keep. Better flagged for a REWORK note than accepted as a sink. Tone: borderline.

== CHUNK COMPLETE ==
