# Phase 2 candidates — chunk-08

## spawn   [anchors: survival (1)]

Existing connections: anchored to survival via FD cooking/cutting. Has a registered method `spawn:casting_net_clam`. The dossier flags M-09 (luxury→coin) and M-12 — M-09 is retired and must not be proposed.

**Candidate 1 — clam/crab/seafood → Create milling / FD cutting chain (M-12)**
Power-read: clams and crabs are everyday ambient drops, not progression gates. A light additional step (milling clam shells into shell dust, or cutting crab into crab meat then cooking) advances the food chain without over-costing a common drop. Theme: seafood → industrial food processing reads naturally in a Create pack (think cannery). Red-team: milling a clam shell for dust is plausible only if that dust has an onward use (seasoning, fertilizer); without a downstream the step is noise. Verdict: accept the food-chain routing (FD/Create milling → cooked seafood → diet groups), flag that the intermediate must connect to something else to avoid a dead end.
- from: spawn:clam / spawn:crab drop | via: farmersdelight:cutting → farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spawn's crabs and clams become raw protein for Farmer's Delight cutting boards and cooking pots, broadening the Protein and Grains diet groups

**Candidate 2 — clam shell → create:milling for shell-meal (M-12 → survival/Create)**
Power-read: everyday drop. A light Create-milling step (clam shell → shell-meal/calcium dust) as a crop fertilizer or cooking additive would thread Spawn into Create. Red-team: shell-meal as a fertilizer has zero demand signal in this pack (no crop-fertilizer mechanic is established). Without a confirmed downstream use this is an invented edge, not a loop-advancing weave.
- from: spawn:clam shell | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: no confirmed downstream use for shell-meal/calcium dust in the pack; would be a dead-end branch, not loop-advancing

**Candidate 3 — date-palm wood → create:crushing recycle (M-04)**
Power-read: everyday deco wood. Theme: all mod deco woods are candidates for M-04 recycle. Red-team: EveryComp already generates cross-mod variants; recycling date logs back to sawdust/planks is trivially coherent.
- from: spawn:date_log / date_planks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Date-palm timber from new biomes crushes back to sawdust/wood pulp in Create, closing the resource loop on a renewable wood

**Candidate 4 — seafood drops as Bountiful board objectives (M-26 consumption sink / M-34 combat-route supply)**
Power-read: everyday. Bountiful boards can request specific items; seafood/critter drops are clean daily-repeatable objectives. Red-team: this is a config/data lever, not a recipe edge — but it qualifies as M-26 (consumption sink that renews demand). Economy link via demand-gating, not a bare sell.
- from: spawn:crab_claw / clam / angler_fish | via: bountiful decree objective pool | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bountiful boards list crab catches and clam harvests as daily objectives, creating repeating demand for fishing/marine output and tying Spawn into the economy's bounty loop

REWORK: existing link (FD cooking/cutting) is sound — no rework needed. The dossier candidate M-09 (luxury→coin) is correctly dead on arrival given the retired status.
OK — existing FD connection sound; three new candidates above advance the loop.

## betterclouds   [anchors: support/client-visual (1)]

Zero items, zero blocks, zero loot, client-only volumetric cloud renderer. No content surface whatsoever.
- LEAVE — pure client-side renderer; no items/blocks/loot; zero material surface; any edge would be invented noise.

