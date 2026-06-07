# Phase 2 candidates — chunk-16

## dragonlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; 1 dev-artifact block, no items/methods/mechanics of its own; pulled automatically as a dependency; nothing to weave.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — client-only zoom/overlay tweak on the vanilla spyglass; 0 items, 0 blocks, no recipe surface; pure render/input behavior. Curios slot is already there. Nothing to route.

## createlowheated   [anchors: create (1)]
- from: solid furnace fuel (coal/charcoal/biomass) | via: M-26 consumption (fuel burned in Basic Burner) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: every Create basin that smelts now eats real fuel — charcoal, coal, or biomass from farming/forestry becomes a production input that the survival pillar supplies; the heat cost creates demand that pulls on the survival resource chain.
- from: Basic Burner block (createlowheated:basic_burner) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Basic Burner is a single-block installed device, not a deco or ingot sink; crushing it back is a trivial drop-recovery edge, not a weave — forced and low-value. The mod's real weaving surface is the fuel-consumption mechanic, not the block itself.
- from: lowheated heat tier | via: M-29 cross-route dependency | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: Ars/Occultism use their own heat sources (arcane fire, spirit fire); piggybacking the lowheated tier into magic rituals would require authoring new heat-conditioned ritual steps — too much cross-mod mechanical coupling for a behavioral tweak mod; scope exceeds the mod's nature.
OK — the M-26 fuel-consumption link is the clean second anchor. The mod already sits in Create; fuel burning binds it to survival's resource chain, advancing the loop (production demands survival output). No existing connections to rework (mod has 1 anchor; M-26 is the proposed addition).



