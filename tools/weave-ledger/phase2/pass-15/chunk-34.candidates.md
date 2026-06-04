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

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:seafood_chowder / createfisheryindustry:cooked_lobster / createfisheryindustry:cooked_cod_steak (high-effort processed seafood) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mechanical fishing → peeled steaks → chowder is a full automated processing chain; the output is a premium food that a sea-trade specialist can sell — encourages maritime specialization and cross-player food trade.
- from: createfisheryindustry:fish_skin (leather-substitute output) | via: recipe (create:pressing or create:milling) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish_skin is already a byproduct of the peeling chain which is itself a Create-kinetic process; routing it through yet another Create step for a leather-sub just doubles down on an existing pillar without adding a new one. Already at Create; skip.
- from: createfisheryindustry:harpoon (projectile weapon, mid-tier iron/zinc craft) | via: recipe (create:sequenced_assembly — add a backtank valve part) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: harpoon is already in the Create pillar (made via create:sequenced_assembly per existing inbound weaves). M-06 would be redundant — the weapon is already a Create product.
- OK — existing connections sound for 2 pillars. The M-09 economy ACCEPT above is a clean third weave that completes the maritime provisioner loop.
- REWORK: no weak connections found in existing anchors. The farmersdelight cooking/cutting inbound weaves are coherent (seafood → food mods). Nothing to flag.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (a player-powered kinetic generator) | via: config / design note | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the treadmill is a player-effort → SU device with no material output and no recipe join into another pillar. The closest motif would be a "manual labor → economy" angle (M-09) but the treadmill produces SU, not a trade good. No motif fits cleanly; the mod's value is Create-internal. REJECT no-motif.
- from: createtreadmill:maid_motor (Soul Orb / Photo consumption) | via: recipe (ars_nouveau:imbuement or occultism:spirit_fire — infuse a Soul Orb into a magic-charged motor variant) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — the maid-motor is a whimsical mechanical crossover with TLM, not a magic artifact. Forcing it through Ars/Occultism infusion misreads the item's identity. The Soul Orb is a TLM-specific resource, not a generic magic reagent. Reject.
- LEAVE — 2 blocks, 2 items, loot=yes (minor). The mod adds Create SU sources; its only non-trivial cross-mod join key is the TLM Soul Orb, which is friend-group flavor, not a pillar. No coherent 2nd pillar without forcing it.

## gravestone   [anchors: survival (1)]
- from: gravestone:gravestone (tombstone block, craftable) | via: recipe (create:crushing — M-04, lossy deco recycle) | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — crushing a gravestone back to gravel/stone via a Create machine is tonally wrong; the gravestone is a somber utility block placed on death, not a decorative stone block to be recycled. Applying M-04 here is a forced, lore-clashing edge.
- from: gravestone:obituary (death-record paper item) | via: any method | to: any pillar | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the obituary is a pure informational/QoL item (shows death coords/gear); no motif covers "death record → resource". Any route would be contrived.
- LEAVE — the mod is a death-recovery utility. Its 1 block (gravestone) and 2 items (gravestone + obituary) have no material role; they are functional objects used in the death loop. A loot=yes flag exists but only because the grave stores the player's existing inventory — no novel loot drops. No coherent weave without forcing it.

## dragonlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; 1 block/item is a dev/test artifact (dragonlib:dragon), loot=no. Provides API/GUI/networking abstractions for MrJulsen's mods. Nothing to route.

== CHUNK COMPLETE ==









