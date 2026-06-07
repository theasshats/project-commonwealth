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

## sereneseasons   [anchors: survival (1)]

Serene Seasons is the pack's priority survival lever (per WEAVE-LEDGER M-16: "Serene Seasons is a priority survival lever; want more of these"). It has a season_sensor block, a calendar item, and a loot=yes tag. The dossier flags M-09 (retired) as the economy candidate — must not be proposed. The real candidates are the M-16 motif (seasonal reagent) and the sensor→Create logic link.

**Candidate 1 — season_sensor → Create gearshift/contraption automation (M-16 + Create production)**
Power-read: the season_sensor is a redstone block — everyday, available once you know about it. Routing it into Create's shaft gearshifts or analog levers to flip automated farm configurations per season is exactly the loop: seasonal scarcity → Create automation adapts → production shifts. Theme: a Create farm that auto-switches crops when the sensor fires a new season signal is textbook Create-pack play. Red-team: this is a config/contraption design, not a recipe edge — but the delivery is `via: config tie / Create contraption logic`, which is a valid delivery mechanism. The motif is M-16 (seasonal reagent as a gating input to a Create process — here the gating is automated contraption switching, not a recipe ingredient per se). Strictly M-16 is "seasonal crop/material feeds a machine"; the sensor-as-redstone-signal to switch a contraption is slightly adjacent. However: a cleaner M-16 read is that out-of-season crops produce much less, so a player must time planting to season — the sensor just makes that timing automatable via Create.
- from: sereneseasons:season_sensor (redstone output) | via: Create contraption redstone/gearshift | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wire the season sensor to Create gearshifts so an automated farm contraption switches its crop rotation when the season changes — the calendar forces production planning

**Candidate 2 — seasonal crop scarcity as Bountiful demand gates (M-16 / M-26)**
Power-read: out-of-season crops are scarce (everyday when in-season, rare off-season). Pointing Bountiful Decrees at out-of-season crops makes seasonal scarcity generate economic demand — someone who has a greenhouse farm can sell warm-season crops in winter. This is M-16 threading into M-26/economy demand gating.
- from: out-of-season crops (sereneseasons fertility modifier) | via: bountiful decree objective pool | to: economy | motif: M-16 | power: everyday/scarce off-season | tone: ok | verdict: ACCEPT | hook: Bountiful boards request out-of-season produce, making a greenhouse operator the seasonal supplier — Serene Seasons scarcity becomes an economy pressure

**Candidate 3 — season-locked crop → magic ritual ingredient (M-16)**
Power-read: mid (requires knowing the season). WEAVE-LEDGER explicitly calls for more M-16 links. An Ars Nouveau or Occultism ritual requiring a spring-only bloom or autumn-harvested grain gates a magic recipe behind the seasonal calendar.
- from: seasonal crop (spring/autumn exclusive) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic ritual requires a blossom that only grows in spring — the season sensor tells you when to harvest, and a magician must time their craft to the calendar

REWORK: dossier candidate M-09 is correctly retired. No existing connections to flag. All three above are genuine M-16 extensions.

## immersivearmorhud   [anchors: client-only UI / support (1)]

Zero items, zero blocks, zero loot. Purely a visual HUD renderer for armor durability. No material surface.
- LEAVE — client-only UI with no items/blocks/loot; a display mod with zero weaving surface.

## copperagebackport   [anchors: survival (1)]

70 blocks, 81 items, loot=yes. Copper tools/armor, Copper Golem (item-sorting mob), copper deco blocks in four oxidation stages. Core material: copper ingots (c:ingots/copper — a Create staple). The dossier identifies M-04 (recycle) and M-03 (ore-doubling), plus an aeronautics Copper Golem candidate (flagged WEAK).

**Candidate 1 — copper deco/tools → create:crushing recycle (M-04)**
Power-read: everyday copper deco (lanterns, bars, chains, chests). Crushing oxidized copper blocks back to copper nuggets/raw + XP nugget is the clean M-04 application. No tone clash — Create already crushes all vanilla copper; this just extends the same pattern to the backported blocks. Red-team: the minecraft:-namespaced blocks should already be crushed by vanilla Create rules if Create covers them; only the copperagebackport:-namespaced button variants would be genuinely new. Worth confirming scope, but the principle is sound.
- from: copperagebackport:copper_button (oxidized variants) / minecraft:copper_bars / copper_chain / copper_chest | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Weathered and oxidized copper fittings crush back to copper nuggets on a Create millstone, closing the deco→materials loop on the backported copper set

**Candidate 2 — copper tools/armor → create:crushing (M-04, tool recycling)**
Power-read: everyday tools. Copper tools are weaker than iron and quickly replaced; crushing them back to nuggets gives a gentle recycle path consistent with M-04's "lossy" spirit. Red-team: vanilla Create already handles copper ingots; the tool/armor shapes are likely not covered unless explicitly added. Coherent extension.
- from: minecraft:copper_axe / copper_sword / copper_boots etc. | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Worn-out copper tools crushed in a millstone yield copper nuggets — the backport's tool tier feeds back into Create's copper economy without requiring a dedicated smelter

**Candidate 3 — Copper Golem as a low-tech item-logistics tier (M-20 / aeronautics-adjacent)**
Power-read: mid (requires copper blocks + crafting, available early). The Copper Golem routes items between copper chests — an organic item-logistics mob predating Create's mechanical logistics. Theme: it could be framed as a "pre-automation" logistics step before Create belts, reinforcing the "Create is the spine, not the only option" message. Red-team: the aeronautics link is very thin — the Golem doesn't move cargo spatially, it sorts locally. The logistics arm of economy is about *physical transport*, not local sorting. Not a clean aeronautics or economy weave; the golem is a survival/early-game QoL mob. Flagging REJECT for aeronautics framing; it doesn't advance the loop.
- from: minecraft:copper_golem_statue (Copper Golem item-sorting) | via: n/a | to: aeronautics | motif: no-motif | power: mid | tone: clash (local sorting ≠ cargo transport) | verdict: REJECT | reason: Copper Golem is a local chest-sorter, not a cargo logistics tool; forcing it into the aeronautics/logistics arm misrepresents its scale and advances no meaningful loop edge

**Candidate 4 — copper oxidation stages as Create splashing input (M-12 / Create processing)**
Power-read: everyday. Create's splashing method uses water; oxidized copper deoxidizing (via scraping in vanilla — waxing/unwaxing) could be represented as a splashing step to clean oxidized copper back to fresh copper, or inversely, splashing copper blocks to accelerate oxidation. Theme: coherent with Create's water-handling. Red-team: vanilla already has scraping with an axe; a Create splashing override for the same result is redundant unless it produces a distinct byproduct. Without a meaningful byproduct (verdigris dust? a dye?) the step is a parallel of vanilla, not an advance.
- from: oxidized copper variants | via: create:splashing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: splashing to de-oxidize copper duplicates vanilla axe-scraping without a meaningful byproduct; depth without a downstream use is not a loop-advancing step

REWORK: no existing connections to flag (mod currently at 1 anchor).

## freefbible   [anchors: support/curated-flavor (1)]

Single inert readable item. No mechanics, no loot, no recipe types. Pure novelty/joke item added by the pack maintainers as a friend-group easter egg.
- LEAVE — single inert readable item with no mechanics, no loot, and no material surface; forcing any recipe edge would be noise on a gag item.

## configuration   [anchors: support/library (1)]

Pure config-screen library. Zero blocks, items, biome modifiers, loot. No player-facing content whatsoever.
- LEAVE — genuine zero-content code library (config-screen framework); no items/blocks/loot; weaving is impossible.

## jade   [anchors: client-only UI / support (1)]

Zero blocks, zero items, zero loot. Pure informational HUD overlay. No material surface.
- LEAVE — client-only informational overlay; zero items/blocks/loot; no weaving surface exists.

