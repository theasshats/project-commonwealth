# Phase 2 candidates — chunk-09

## kubejs   [anchors: support/tooling (1)]
- LEAVE — pure scripting framework: no items, no methods, no material surface. It is the weaving engine, not a weave target. No pillar anchor is possible or sensible.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — config-screen API library: zero items, zero methods, no in-game content. Pulled as a hard dependency of other mods; nothing to route or anchor.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — datapack that re-enables vanilla bundle crafting; no items or methods of its own. The bundle already feeds inventory logistics (helps carry output stacks) — that's a support role, not an anchor. Forcing a Create or economy edge on a vanilla recipe re-enabler would be noise.

## sliceanddice   [anchors: create, survival (2)]
- REWORK check: OK — connections sound. The two anchors are organic: the Slicer automating farmersdelight:cutting is a genuine M-12 processing-chain bridge, and the Sprinkler piping fluids for crop irrigation sits solidly in the Create→survival food-production link. No arbitrary connections to flag.
- from: sliceanddice:sprinkler (fluid irrigation) | via: create:filling → exotic fluid feed | to: economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: The Sprinkler accepts any piped fluid, so in principle a processed liquid from TFMG or Create New Age could power enhanced crop growth — but Slice & Dice doesn't expose its own output as a trade good, and the irrigation step already routes through Create (the spine). Adding an economy anchor here would be forced (nothing about the Slicer/Sprinkler is a sellable product or a bounty target). The existing 2-anchor coverage is the correct ceiling.
- from: sliceanddice:slicer (automation of FD cutting) | via: farmersdelight:cutting → create:milling (dough/ingredient chain) | to: economy (as luxury food output via M-09) | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: The economy hook belongs to the food *products* themselves (farmersdelight, extradelight, etc.) — not to the automation block that processes them. Attributing an economy anchor to the automation intermediary duplicates credit and muddies where the weave actually lives. Route M-09 from the food-product mods, not here.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — multiplayer ping/marker utility: no items, no methods, no material surface. Core to a ~10-player co-op pack's coordination, but produces nothing routable. No pillar anchor is sensible.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single music disc easter egg (loot=yes, but the disc itself is not a routable material; it's a joke item). The disc has no crafting, no method, and no thematic fit in any production chain. Forcing a coin edge ("rare disc sells for coin") would be superficial noise — the economy pillar is not a dumping ground for collectibles. No weave.

## necronomicon   [anchors: support/library (1)]
- LEAVE — pure code library (ElocinDev Necronomicon API): zero items, zero methods, no player-facing content. Pulled as a dependency (opacpvp); nothing to route.

## dtterralith   [anchors: survival (1)]
- from: dtterralith special seeds (cedar_seed, jacaranda_seed, kapok_seed, maple_seed, giga_spruce_seed, etc.) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith's exotic tree species (kapok, jacaranda, cedar) yield distinct milled dusts or plank fibres through the Create mill — a player hunting rare biomes for rare wood to feed production is exactly the scarcity→pressure→production loop. Power-read: these seeds/logs are everyday-tier worldgen outputs; one light milling step is appropriate. Theme-fit: Dynamic Trees + Create milling is the standard "wood as industrial feedstock" edge; the exotic species names make it feel like a genuine resource-hunt rather than plain oak.
  - Red-team: Is there real differentiation between vanilla oak-milled and exotic-log-milled output, or does vanilla Create milling already produce the same crushed bark? If so, the weave needs a distinct KubeJS output (e.g. `dtterralith:cedar_resin` or a unique wood pulp) to justify the biome-hunt scarcity story. Flag for Phase 3 to confirm distinct outputs exist or can be authored.
- from: dtterralith special seeds | via: ars_nouveau:imbuement (Terralith biome-specific reagent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars Nouveau imbuement needs a thematically fitting input — there's no established lore tying Terralith's cedar or jacaranda to arcane energy. The connection would be arbitrary (just "rare wood + imbuement = magic reagent") without a theme anchor. Reject unless a specific biome tree has a strong aesthetic tie to one of the magic mods (e.g. amethyst-tree seeds have marginal Ars adjacency, but it's a stretch at this tier).
- from: dtterralith:amethyst_seed / amethyst_sapling (unique Terralith amethyst tree) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Slightly more coherent than generic exotic wood, since amethyst is associated with the arcane — but the amethyst tree in Terralith is a decorative biome feature, not a magic-tree in lore, and ars_nouveau already has its own magic-wood (archwood). Forcing a second "magic wood" imbuement risks confusing the magic reagent space. Reject; note as an edge case for maintainer review if the magic pillar wants regional diversity.




