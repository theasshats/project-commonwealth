# Phase 2 candidates — chunk-03 (pass-19)

## cristellib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; structure-config API; no items/blocks/recipes; no weave surface.

## jakes-build-tools-2.0.1.5   [anchors: QoL/building-tools support (1)]
- from: experience_flask items | via: create:mixing or create:sequenced_assembly | to: Create | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: experience flasks are trivial builder-QoL consumables; gating them behind Create assembly is depth-inappropriate for their power tier, and forcing a theme connection between "building convenience" and Create tech is contrived. The dossier notes "forced edge."
- LEAVE — QoL/builder-helper datapack; tools are consumable conveniences, not progression items; no coherent 2nd-anchor weave survives red-team.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — pure multiplayer co-op QoL; no items, no content surface, nothing to route through any method.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- OK — connections sound. Already at ≥2 anchors (Create-themed worldgen + survival/exploration). Dossier notes loot-table seeding as weak/optional; no method-routing candidate survives. No new edge needed.
- REWORK: none — the 2 anchors are coherent and well-motivated.

## direct_chute   [anchors: Create (1)]
- from: direct_chute block (zinc logistics pipe) | via: aeronautics ship-logistics role | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no approved motif covers "logistics block used aboard ships." It's a convenience block, not a structural/drivetrain component (M-23/M-24) or a fuel (M-13). Nominal aeronautics tie would be forced.
- LEAVE — single Create logistics block; every weave candidate reduces to a nominal edge with no approved motif; the dossier's own conclusion is "leave."

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure behavior-patch compat glue; no items/blocks; no weave surface. REQUIRED by CLAUDE.md but unweaveable by design.

## s_a_b   [anchors: Create, aeronautics (2)]
- OK — connections sound. Steel armor blocks are crafted through Create (compacting/mixing) and exist as hulling/armor for Aeronautics ships and Big Cannons vehicles. Both anchors are strong and thematically coherent.
- from: hard_steelblock / doublesteelblock (endgame armor tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the toughest ship hull isn't assembled in one step — a sequenced-assembly chain of press → weld → harden produces hard-steel armor plating, making armored builds cost real fabricated effort.
- REWORK: none — existing connections are solid; the M-06 deepening is additive.

## fishingreal   [anchors: survival (1)]
- from: fishing-catch behavior (item→live mob) | via: any method | to: any | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: this is a behavior-layer tweak with no items of its own. Any weave would have to be authored on a content mod above it (createfisheryindustry, farmersdelight). No approved motif applies to a pure catch-behavior interceptor. Dossier conclusion "leave" is correct.
- LEAVE — behavior-only mod; weaving belongs to content mods above it; no direct weave surface.

## ribbits   [anchors: survival (1)]
- from: Ribbit merchant trades (Amethyst-Shard economy) | via: numismatics coin trade bridge (KubeJS villager trade → coin) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: the Ribbits' swamp market already runs on scarce Amethyst Shards — a Numismatics trade lane lets players cash out swamp goods for coin or spend coin at the merchant, folding this isolated shard-economy into the main trade pillar. (Tagged provisional per M-21 rules; maintainer may reject at Gate 2.)
- from: ribbits:toadstool / mossy_oak_planks blocks | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic woodset crush-back; toadstool/mossy-oak are swamp deco, not a distinctive material. M-04 is for mods with a strong deco identity that benefits from the Create recycle loop. Adding another generic wood/mushroom here is noise, not signal. Low motif fit.
- REWORK: none — the survival anchor is clean. The provisional M-21 economy edge is the real opportunity.

## dndesires   [anchors: Create (1, deep)]
- from: dndesires:rubber (from hydraulic press — sap + water) | via: create:sequenced_assembly or item_application | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber seals and gaskets are essential for pressurized engine housings — Aeronautics engine/propulsion components require hydraulic-pressed rubber as a fabricated intermediate, making the Hydraulic Press a step in the drivetrain supply chain.
- from: seasonal crop / drop (e.g. a Serene-Seasons-gated ingredient) | via: dndesires:freezing fan (freezing sail processing) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: only ingredients harvested in winter can be flash-frozen on the belt — the freezing sail gives season-gated crops a processing identity, turning the Serene Seasons calendar into an industrial input condition.
- from: dndesires milkshakes (food outputs from mixing + milk/cocoa) | via: numismatics luxury-goods sale | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: milkshakes are low-effort outputs (milk + mixing), not high-effort luxury goods; M-09 requires "high-effort consumable." Putting them in the coin economy at everyday tier undercuts the scarcity-driven economy model. The survival↔Create connection (milkshake as a food output of Create processing) is already the stronger frame.
- from: dndesires:rubber | via: create:deploying (applying to a base frame) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: duplicate of the M-24 ACCEPT above (different delivery but same from/to/motif — keep the cleaner sequenced-assembly version).
- REWORK: existing anchor is only Create (1). The two ACCEPTs (M-24 aeronautics + M-16 survival) bring it to 3 systems — that's strong.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; FoodInfo + registry helpers; no items/blocks/recipes.

## extradelight   [anchors: survival, Create (2)]
- OK — connections are sound: deep culinary survival layer already partially Create-woven (create:mixing inbound).
- from: coffee/grain crops → ground coffee/flour | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bakery doesn't start in the kitchen — raw coffee and grain run through the Create millstone before they reach the Mortar or Oven, tying the food chain's raw-prep step to the Create production spine.
- from: extradelight feast (high-effort) | via: numismatics sell / MineColonies provisioning | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a prepared feast is a luxury trade good — a player who runs the full cooking chain can sell it at a trading post or provision a colony kitchen, completing the scarcity→production→economy loop for food.
- from: extradelight:evaporator fluid-reduction (salt/syrups) | via: create:mixing as upstream fluid source | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the Evaporator/Vat are downstream sinks (fluid → reduced product); routing Create fluids into them is a create:mixing upstream feed, which is already an existing inbound weave (made-by: create:mixing). Flagging it as a new candidate adds no new edge — it's a refinement of an existing connection, not a new one.
- REWORK: none — both pillars are coherent; the two ACCEPTs (M-12 deeper Create + M-09 economy) are additive.

## architectury   [anchors: support (1)]
- LEAVE — cross-platform modding API; zero gameplay content; no items/blocks; no weave surface.

## jade   [anchors: client UI/support (1)]
- LEAVE — client-only HUD overlay; no items, no recipes, no processing; documentation-only.

## createblockchain   [anchors: economy, Create (2)]
- OK — connections are sound: the FE→coin faucet is a genuine Create↔economy joint.
- from: createblockchain:mining_core (geode worldgen consumable) | via: create:crushing (ore-doubling analog: crushing a spent/extra core) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: the Mining Core is a functional consumable (required to run the miner), not an ore to double. Routing it through crushing would be a workaround, not a natural extension. Tone: ok but mechanically forced. Depth doesn't scale appropriately.
- from: FE supply chain (coin trace back through scarce metal → Create processing → FE → coins) | via: existing Create-FE chain deepening | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins don't come from nothing — the currency miner's FE intake traces back through the Create electric chain to a processed scarce regional metal, so the pack's scarcity foundation drives how fast money is minted. (Deepens the existing Create↔economy edge rather than adding a new pillar.)
- REWORK: the existing "economy + Create" anchors are well-motivated; no weak connections. The M-08 deepening reinforces rather than replaces.

## create_central_kitchen   [anchors: Create, survival (2)]
- OK — connections sound. The mod is the explicit Create↔FarmersDelight automation bridge.
- from: finished automated dish / packaged feast | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial kitchen that runs on contraptions can also supply a trading post — packaged dishes produced at scale become a coin-earning trade good, giving the food-automation line an economic outlet.
- REWORK: none — the Create + survival anchors are direct and strong.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. Chain drives are kinetic-Create; deco tiles serve builds.
- from: bits_n_bobs tile blocks (andesite_tiles, asurine_tiles, crimsite_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the factory floor tiles aren't permanent — a Create crusher can reclaim crushed stone and a small XP fragment from worn tile blocks, making the decorative layer feed back into the production loop rather than being a dead end.
- from: bits_n_bobs:chain_pulley / chain_rope | via: aeronautics ship rigging / contraption-mover role | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: chain pulleys are Create contraption-movers; the connection to aeronautics is thematic-nominal at best. M-24 specifies "mechanical part → Aeronautics propellers/engines/control surfaces (drivetrain)." A chain pulley is a vertical-lift mechanism, not a drivetrain or control component. Forced edge.
- REWORK: none — both existing anchors are earned.

## better_lib   [anchors: support/library (1)]
- LEAVE — shared config/messaging library; no gameplay content; no items/blocks.

## ichunutil   [anchors: support/library (1)]
- LEAVE — iChun shared-class library; no items/blocks; no gameplay content.

## jeresources   [anchors: client UI/support (1)]
- LEAVE — JEI loot/worldgen documentation addon; display-only; no items/recipes; the scarcity-awareness it provides is useful to the pack's design but it is not a weave node.

== CHUNK COMPLETE ==
