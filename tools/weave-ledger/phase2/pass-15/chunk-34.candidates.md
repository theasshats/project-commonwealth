# Phase 2 candidates — chunk-34

## lithostitched   [anchors: support/library (1)]
- LEAVE — genuine zero-content worldgen library; 0 blocks, 0 items, no loot tables, no recipe surface. Pure terrain/biome-modifier API dependency (for Tectonic etc.). Nothing to route.

## ohthetreesyoullgrow   [anchors: support/worldgen (1)]
- LEAVE — genuine zero-content tree-growth framework; 0 blocks, 0 items, loot=no. Pure sapling-growth algorithm + NBT tree template engine consumed by dependent mods. Nothing to route.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grain crops) | via: recipe (create:milling) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create millstone grinds barley and oat into flour — the farmstead grain chain runs through the spine, and you need rotational power before you can bake at scale.
- from: farm_and_charm:barley / farm_and_charm:oat (grain crops) | via: recipe (create:milling) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 is the ore-doubling motif — grains are not ores. M-12 (processing-chain pull) is the correct motif here; keeping M-03 to avoid double-listing.
- from: farm_and_charm:butter / farm_and_charm:bacon / farm_and_charm:baked_lamb_ham (high-effort processed foods) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: surplus butter, bacon, and baked ham from the farming loop become sellable goods — a "farmstead provisioner" trade role emerges without forcing anyone.
- from: farm_and_charm:barley (grain crop) | via: config / worldgen — Serene Seasons gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley is a summer/autumn crop; restricting its harvest window (via SereneSeasons crop-config) ties the farmhouse cooking chain to seasonal rhythm — you can't bake barley bread in winter.
- REWORK: current anchor is survival (1-pillar). No existing cross-pillar connections to flag as weak — the mod has no inbound foreign-method weaves yet. First ACCEPT above (Create milling) and second (M-09 economy sell) together bring it to 3 pillars, which is the goal; the seasonal gating (M-16) is a reinforcing survival-depth touch, not a separate pillar jump.

## createpickywheels   [anchors: Create (1)]
- from: biome-gated power placement (water wheel → River biome, windmill → open Overworld) | via: config tie | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the biome/placement gate is a genuine survival-world-pushes-back flavor, but it has no material surface — no item, no loot, no recipe to route through a method. It's a behavioral config constraint on an existing Create machine, not a connective weave. No motif covers pure config-gating of another mod's generator. REJECT (no-motif); worth a Gate-0 note if a "geography-gates-power" motif is ever desired, but don't force it now.
- LEAVE — 0 blocks, 0 items, loot=no. The mod's value is a behavioral constraint on Create generators; it has no material surface to weave. Pure Create-internal balance tweak.

## fluid   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already at 2 pillars (Create spine + aeronautics logistics). Recipes route through Create machines (compacting/deploying/mechanical_crafting/mixing); the centrifugal pump and smart fluid interfaces are a real aeronautics fluid-routing tool. No forced third needed.
- from: fluid:neon_tube (decorative lighting block) | via: recipe (create:crushing → M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: neon tubes are a minor cosmetic; applying M-04 (deco crushes back to raw) to a cosmetic from a plumbing mod feels like padding. The mod's real contribution is industrial plumbing, not decoration. Skip.
- from: fluid:centrifugal_pump / fluid:smart_fluid_interface (fluid infra components) | via: recipe (M-23/M-24 airframe/drivetrain) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: already captured under existing aeronautics anchor — the mod's fluid infrastructure is already justified there. Adding a formal M-23 structural-ingredient role would require the pump to be an airframe material, which is a stretch (it's a fluid mover, not a hull component). Don't force it.

## ichunutil   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; 0 blocks, 0 items, loot=no. Shared rendering/config/util classes for iChun's mods. Nothing to route.






