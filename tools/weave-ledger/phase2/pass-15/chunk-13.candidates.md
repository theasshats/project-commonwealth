# Phase 2 candidates — chunk-13

## lootjs   [anchors: support (1)]
- LEAVE — genuine zero-content scripting library. No items, blocks, or loot tables of its own. It is the *enabler* of M-02 weaves (loot-table injection), not a weave node itself.

## create   [anchors: Create (1)]
- LEAVE — Create is the method library and north-star pillar; it is the hub other mods weave INTO, not a recipient seeking a 2nd anchor. All economy/magic/aeronautics/survival weaves route *through* Create's 17 recipe-types; adding inbound edges to Create itself would invert the graph.
- REWORK: none — the single-pillar designation is by deliberate design. No existing connections to audit.

## spark   [anchors: support (1)]
- LEAVE — genuine zero-content profiler. No items, blocks, or loot. Server-only diagnostic tooling; nothing to route through any method.

## tide   [anchors: survival (1)]
- from: tide fish (rare biome-locked species) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a haul of rare deep-ocean or void-biome fish is a sellable luxury — fishers specialize and trade catches for coin just as a miner trades ore.
- from: tide fish (rare biome-locked species) | via: bountiful board → numismatics payout | to: economy | motif: M-14 (provisional) | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards listing rare fish species (e.g. tide:abyss_angler) paid in coin makes fishing a repeatable income loop parallel to combat bounties; pairs naturally with M-09.
- from: tide:abyss_angler / void-caught fish | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: creatures of the deep dark and the void carry residual soul energy — transmuting an Abyss Angler in spirit fire into a soul-adjacent essence is thematically tidy and gives fishing an arcane downstream. Keep to 1–2 exotic species, not the whole roster.
- from: tide raw fish (common) | via: create:milling → fishmeal | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mill-full of surplus fish producing fishmeal as a fertilizer/compost intermediate ties fishing waste into the Create processing chain without touching the scarce species.
- from: tide fish (any) | via: ars_nouveau:imbuement or occultism:ritual (whole-fish-roster as reagents) | to: magic | motif: M-02 | power: everyday | tone: clash — routing common fish like anchovy through a magic ritual feels arbitrary; the tone only holds for exotic/eldritch species | verdict: REJECT | reason: theme-clash for common species; already covered cleanly by the narrow M-11 candidate above.
- REWORK: existing farmersdelight:cutting inbound weave (filleting) is solid — OK. No other existing connections to audit.

## terralith   [anchors: survival (1)]
- from: terralith biome variety (loot=yes, 65 c:tags grounded) | via: loot-seed (Terralith's structure/loot tables) | to: economy | motif: M-08 / M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Terralith's biome-exclusive structures (buried treasures, hidden vaults in fantastical biomes like Skylands or Mirage Isles) are natural seed-points for scarce regional coin or processed-metal fragments — making exploration of exotic biomes pay off economically without any recipe edge. Delivery: datapack loot-seed into Terralith-tagged structure loot tables. The 65 c:tags indicate it already registers tags other mods key off; seeding coin/regional-metal drops into Terralith's structure chests is coherent and non-intrusive.
- from: Terralith fantastical biomes (Moonlight Grove, Skylands) | via: worldgen/spawn gating | to: magic | motif: M-22 (lunar/celestial reagent — biome gating is the spatial analogue) | power: mid | tone: ok | verdict: ACCEPT | hook: if a magic reagent (e.g. galosphere lumiere shard, or a custom allurite variant) spawns exclusively in Terralith's sky/moonlight biomes, those biomes become a required travel destination for magic players — world variety becomes a magic supply chain. Delivery: biome-modifier / spawn config that ties a magic material to the celestial/fantastical Terralith biomes.
- from: Terralith (data-only, no own items, no recipes) | via: recipe | to: any | motif: any | power: n/a | tone: clash — Terralith has zero items; any recipe route invents fictitious items | verdict: REJECT | reason: no items to route; recipe delivery is wrong for a data-only worldgen mod.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust from the Otherside is literally soul material — feeding it into Occultism's spirit fire to yield an occult essence is the obvious downstream; the Otherside becomes a soul-reagent supplier for the magic pillar.
- from: deeperdarker:heart_of_the_deep (rare Warden drop, portal key) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the rarest drop in the deep dark unlocking the Otherside *also* being an optional high-tier magic catalyst is thematically resonant — it already gates a dimension, so gating an arcane upgrade too scales correctly. Keep depth proportional: one deep-ritual step, not a multi-chain.
- from: deeperdarker:warden_carapace / deeperdarker:sculk_bone | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic Otherside mob parts (carapace, sculk bone) crush into gravel-equivalents + experience nuggets, pulling the dimension's mob-drop economy into the Create recycling loop. Already primed: create:crushing is an inbound weave per dossier.
- from: deeperdarker:crystallized_amber | via: create:crushing → dust byproduct | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallized amber block crushes to fine amber dust — a processing byproduct that could feed a further recipe (e.g. ars imbuement catalyst or a polish agent). Scales correctly at one light step for a mid-tier material.
- from: deeperdarker Otherside soul-materials (soul_dust, soul_crystal) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: dangerous-to-obtain dimensional materials are a natural luxury trade good; an explorer risks the Otherside and sells its rarer drops for coin. Secondary to the magic routing — already flagged WEAK in dossier, but loot-seed/sell delivery makes it viable as an economic secondary without a recipe.
- from: deeperdarker:sculk_transmitter | via: create:mechanical_crafting (gate on Create parts) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the wireless-redstone Sculk Transmitter — a useful logistics/automation block — requiring brass casing or an andesite component as a crafting ingredient makes Create progression a prerequisite for advanced redstone-wireless builds.
- from: deeperdarker soul-materials (generic bulk) | via: bountiful board | to: economy | motif: M-14 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-14 provisional — surface for review but don't author; the M-09 sell candidate is cleaner and non-provisional.
- REWORK: existing create:crushing + farmersdelight:cutting inbound weaves are correct and thematic. No arbitrary connections to flag — OK.

## ding   [anchors: support (client QoL) (1)]
- LEAVE — genuine zero-content client audio mod. No items, blocks, loot tables, or methods. Client-only audio notification; nothing to route.

## blockui   [anchors: support (library) (1)]
- LEAVE — genuine zero-content UI framework library. No items, blocks, or loot. Hard dependency of MineColonies; no surface to weave.

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein outputs (any scarce regional ore) | via: createoreexcavation:vein table → numismatics mint (M-08 chain: drill output → Create process → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the Drilling Machine's infinite-but-slow ore output — especially of scarce regional metals — is the exact feedstock for the coin-from-processed-scarcity loop; a pack-design config (adding coin-grade metals to the vein table) makes drilling automation the Create-side economy engine. Delivery: config/datapack (vein recipe additions), not a crafting recipe.
- from: createoreexcavation:diamond_drill / netherite_drill (drill-head tiers) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the highest drill-head tiers (diamond/netherite) requiring a sequenced-assembly chain (an `incomplete_drill_head` intermediate) makes upgrading your drilling rig a proper Create milestone, not just a crafting-table grind. Scales correctly — endgame tier gets the deep chain.
- from: createoreexcavation:vein_finder (exploration tool) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Vein Finder (a field prospecting tool) requiring brass components via mechanical crafting means you need a working Create setup before you can locate infinite veins — a logical gating of the automation tier behind the automation spine.
- from: createoreexcavation drill outputs (ore) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: clash — drill ore is already vanilla ore; routing raw crushed ore through a magic ritual for no unique gain adds nothing; the weave is with the downstream processed metal, not the raw ore | verdict: REJECT | reason: no unique material surface; raw ore→magic is handled more coherently via boss-gate and regional-metal weaves elsewhere.
- REWORK: existing inbound weaves (create:crushing, create:cutting, create:milling, create:mechanical_crafting) are all correct and internal to the Create spine — OK.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — genuine zero-content config-screen library. No items, blocks, or loot. Pure API; nothing to route through any method.

== CHUNK COMPLETE ==







