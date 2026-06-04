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



