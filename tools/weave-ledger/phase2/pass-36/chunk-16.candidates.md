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

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- from: experience_flask items (experience_flask_0..3) | via: create:filling / create_enchantment_industry:grinding | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: XP-flask items are build-tool consumables for storing/releasing XP on construction sites; routing them through Create's enchantment-industry grinder would be a forced thematic import — the XP flasks exist to help builders, not as a Create feedstock. The cost model says everyday items get one light step; but there's no coherent "whose machine wants a builder's XP flask?" answer. No-motif for the core toolset itself.
- from: hammer / chisel / trowel tools | via: M-05 native-method gating | to: create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: These are builder utilities (datapack-registered, vanilla namespace), not progression-gated tech items. Requiring Create parts to craft a hammer would be punishing for a basic building tool and tonal mismatch — the dossier notes this explicitly as "forced edge." Everyday builder items should not be gated behind a crafting spine.
- LEAVE — no coherent 2nd anchor; QoL builder tools with no machine or processing surface. The experience_flasks have no home in the methods palette as inputs. Force-fitting Create gating onto basic construction utilities is a defect.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen terrain-shaper (density functions only); 0 blocks, 0 items, 0 loot tables. No processing surface, no recipe surface. Thematically adjacent to regional scarcity (bigger terrain spreads ores out), but that is the worldgen configuration's effect, not a weave this mod can participate in as a recipe-graph node.

## createpickywheels   [anchors: create (1)]
- from: water wheel / windmill placement (behavioral gate) | via: config tie — biome/geography requirement | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: where you can generate Create power is dictated by the world's geography — a River biome for water wheels, open air for windmills — so early base location becomes a deliberate choice shaped by the terrain; the world pushes back on industrialization, which is exactly the survival pillar's role. Via: config (no new recipe; the delivery is the biome-gate behavior already built into this mod). M-30 covers regional scarcity as a gate on goods; here the "good" is power generation, which is region-locked by biome. Closest fit — the mechanic advances the loop's scarcity→pressure→Create-production edge.
- from: windmill/water-wheel power output | via: M-29 cross-route dependency (magic forced to use Create's geographically-locked power) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: magic power (Ars source, Occultism spirit) runs independently of Create's electricity; the biome-location gate on a water wheel doesn't propagate into magic's power source. The dependency doesn't exist in the game loop — magic specialists wouldn't be blocked by a Create water-wheel biome rule. Forced edge.
OK — the M-30 biome-gate → survival link is real and already partially acknowledged in the dossier. Delivery is via the mod's existing config mechanism (no recipe to author). No existing connections to rework (mod has 1 anchor; survival is the proposed addition).









