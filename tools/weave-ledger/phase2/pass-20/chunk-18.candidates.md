# Phase 2 candidates — chunk-18

## lionfishapi   [anchors: support/library (1)]
- LEAVE — pure animation/rendering API with zero player-facing content (0 blocks, 0 items, no loot, no recipe types). Nothing to route or weave.

## appleskin   [anchors: support (1)]
- LEAVE — client HUD overlay that reads food values but registers no items, no methods, and no loot. No material surface to weave.

## create_integrated_farming   [anchors: Create, survival (2)]
- from: roost egg/feather/meat output | via: farmersdelight:cooking + create:sequenced_assembly | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: an automated roost + Central Kitchen line turns bulk eggs and goose/duck meat into sellable prepared dishes — farm output feeds the trade table
- from: lava_fishing_net exotic aquatic drops | via: loot-seed (seed rare drop into lava fishing net loot table) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: rare lava-catch drops (magma cream, blaze rods) could be seeded as bounty-board bait — scarce lava-fish filling a Numismatics bounty
- from: roost output feathers | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: feathers already reach Create via vanilla (fletching/arrows); routing them through milling adds no meaningful depth — redundant with existing paths
- REWORK: existing Create anchor is sound (roosts are a Create contraption block designed around Mechanical Arms/Harvesters). Existing survival anchor is sound (FarmersDelight dependency grounds it in the food pillar). OK — connections sound.

## sereneseasons   [anchors: survival (1)]
- from: season_sensor redstone output | via: create:item_application / gearshift config (wire sensor to Create logic so farms switch crop profiles per season) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a brass gearshift wired to the season sensor automatically redirects the harvester arm to the in-season crop bed — automation that reads the calendar
- from: out-of-season produce (scarce in-season exclusive crop) | via: numismatics sell/bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: greenhouse-grown winter wheat or summer melon becomes a premium bounty-board commodity during the off-season when most players can't grow it
- from: season-gated crop (e.g. wheat/pumpkin locked to a season) | via: ars_nouveau:imbuement (seasonal reagent gates a magic conversion) | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: only spring-harvested blossoms can complete the Ars imbuement of a seasonal reagent — the calendar puts pressure on magic crafters too
- from: sereneseasons:calendar item | via: crafting-table recipe using Create parts | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the calendar is a readout/HUD item, not a progression gate; gating its crafting behind Create parts would be arbitrary complexity on a purely informational object — depth doesn't scale with its power level

## fzzy_config   [anchors: support/library (1)]
- LEAVE — config serialization/GUI API; 0 blocks, 0 items, no loot. No material surface to weave.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot (boss drop) | via: create:crushing → create:pressing → sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: only a player who has cleared the Ancient Remnant can feed the Mechanical Fusion Anvil's keystone material into a sequenced-assembly chain for late-game Create tech — boss kills gate the industrial frontier
- from: cataclysm:witherite_ingot / cataclysm:ignitium_ingot (boss mats) | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-forged alloys carry latent dark energy — passing them through spirit fire yields a high-tier occult reagent unavailable any other way
- from: cataclysm boss-dungeon loot tables (loot=yes) | via: loot-seed (seed Numismatics coin drops into boss chests) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: defeating the Leviathan or Harbinger pays out a haul of coins alongside gear — endgame combat directly converts to the highest-tier Numismatics denominations
- from: cataclysm:ancient_metal_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: already covered more cleanly by M-11 (spirit_fire); adding a parallel M-10 imbuement route for the same material creates double-spend confusion on the boss-ingot reagent; one archon method is the better constraint
- from: cataclysm azure_seastone / black_steel decorative blocks | via: create:crushing (M-04 recycles deco) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: decorative stone blocks from dungeon construction feel thin as a weave candidate — the real value of cataclysm is boss progression, not its building blocks; M-04 would add noise without meaningful loop progression
- REWORK: existing single survival anchor is correctly minimal — none of the SWEEP suggestions had been authored yet. The three ACCEPTs above (M-15, M-11, M-08) collectively bring cataclysm to Create + magic + economy, covering the full loop: survival→Create (M-15), survival→magic (M-11), combat→economy (M-08).

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — 0 blocks, 0 items, 0 loot tables; the mod is purely a painting-entity variant selector. No material surface exists to weave.

## xaeroworldmap   [anchors: support (1)]
- LEAVE — client-side map rendering with 0 blocks, 0 items, and no loot. No material surface to weave.

## dtterralith   [anchors: survival (1)]
- from: dtterralith exotic seeds (jacaranda_seed, maple_seed, cedar_seed, kapok_seed) | via: create:milling (seeds → milled powder / dye precursor) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: dynamic-tree seeds from Terralith biomes fed into a millstone yield exotic wood-meal or pigment — exploration-sourced inputs to a Create processing line
- from: dtterralith exotic leaves (maple, jacaranda) | via: farmersdelight:cutting or create:milling (leaf → dried herb/dye intermediate) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: dtterralith leaves are visually distinctive but have no mechanical identity beyond vanilla leaves; routing them through cutting adds no legible scarcity or loop advancement — this would be cosmetic complexity, not a real weave edge
- from: dtterralith:amethyst_seed / giga_spruce_seed (region-locked Terralith biomes) | via: ars_nouveau:imbuement (rare seed as a botanical reagent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a jacaranda seed harvested in a Terralith flowering biome is the aromatic catalyst for a mid-tier Ars Nouveau imbuement — biome exploration feeds the magic lab
- REWORK: existing single survival anchor is correct for the compat-bridge nature of this mod. The two ACCEPTs above add Create (M-12) and magic (M-10), reaching the 2-anchor target.

## create_central_kitchen   [anchors: Create, survival (2)]
- from: finished feast/dish output (pie, sandwich, ice-cream fluid) | via: numismatics sell/bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully automated Central Kitchen contraption produces artisanal sandwiches and ice cream that a Numismatics vendor buys at luxury-good rates — industrial food production drives the trade economy
- from: blaze_stove (requires a live Blaze as input) | via: loot-seed (seed blaze-rod bounty on Numismatics board, making blaze rods a sought combat-economy item) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: blaze rods are already vanilla and universally available via Nether grinding; a bounty on them doesn't introduce meaningful scarcity or loop pressure — the M-14 edge would be trivially satisfied with no real engagement
- REWORK: existing Create + survival anchors are sound — Central Kitchen is the canonical Create↔FarmersDelight bridge. OK — connections sound. The M-09 ACCEPT above adds a meaningful economy arm.

== CHUNK COMPLETE ==
