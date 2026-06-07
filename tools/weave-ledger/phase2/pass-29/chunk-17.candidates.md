# Phase 2 candidates — chunk-17

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure recipe/tag glue library for the Let's Do / Farm&Charm / Farmer's Delight food cluster; registers no items/blocks, no methods to route through, no loot. Its existence already performs M-12-style cross-mod food-chain unification — that is the whole mod. Forcing a 2nd anchor would mean re-weaving the bridged mods' materials, which is their business, not this shim's.

## mffs   [anchors: Create, survival (2)]
REWORK: OK — connections sound. The authored weave (focus_matrix via M-05, projector/interdiction_matrix via M-06 sequenced-assembly chains, TFMG steel mid-tier) is the gold-standard Create-native gating pattern. Existing anchors are Create + survival (PvE base defense). No rework needed.

- from: mffs force-field projection (utility) | via: no-method | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: a field-specialist player sells field-setup and tuning as a service to colony/base builders who lack the Create infrastructure to source Fortron components themselves — labor, not goods
- from: mffs:biometric_identifier / access cards | via: loot-seed (structure loot) | to: survival | motif: no-motif | verdict: REJECT | reason: no-motif — access cards found in loot doesn't anchor a system, it's just a minor find; not coherent enough to accept
- from: mffs loot=yes | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: MFFS drops no boss/combat loot — loot=yes likely means the guide book spawns; there's no combat-supply loop here; M-34 doesn't fit a base-defense utility mod's loot table

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items that extend Create Deployer behavior with randomized placement; no material flows through it, no items of its own to route, no loot. It's a builder QoL tool; every potential "2nd anchor" would require forcing the filter items into a recipe web they don't belong in. Genuinely zero content surface beyond Create utility.

## create_ironworks   [anchors: Create (1)]
- from: c:ingots/tin (scarce regional ore, 3 biome-modifiers) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is region-locked by biome-modifier placement; a Create-ore-doubling → alloy → mint chain makes tin the coin-spine metal for the mid-tech economy tier, pushing cross-region trade to access it
- from: c:ingots/steel (Create-processed) | via: aeronautics hull/structural-block recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the obvious structural alloy for mid-tier airframes — it has the right industrial register and Create_Ironworks is already deeply Create-native, so requiring it for hull construction is coherent and adds fabrication depth
- from: c:ingots/bronze | via: create_ironworks tool/armor tier | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: bronze tools being worn/consumed is the ambient use of any tool set — not a weave, just the baseline. M-26 consumption sink requires a *deliberate spending* mechanic (fuel, upkeep, food), not tool durability that every mod shares
- from: c:plates/steel | via: aeronautics control-surface/drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plates feed aeronautics propulsion/control surfaces (rudders, ailerons) alongside M-23 hull framing — the drivetrain companion to the structural seam; Create_Ironworks already has plates in its tag vocabulary so the method pull is direct
- from: c:ingots/tin (regional) | via: GTMOGS ore-gen region-lock | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tin's 3 biome-modifiers make it region-bound; whoever mines that biome controls the tin supply → coin stock and bronze alloy; anchors tin to the scarcity foundation and forces specialization without extra recipes
REWORK: no existing connections to rework — this is a 1-anchor mod. The Create anchor is solid (whole mod routes through create:mixing/crushing/pressing/etc.); the missing 2nd anchor is economy/aeronautics, addressed above.



