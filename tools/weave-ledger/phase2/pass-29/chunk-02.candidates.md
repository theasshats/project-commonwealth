# Phase 2 candidates — chunk-02

## foodeffecttooltips   [anchors: support/client-QoL (1)]
- LEAVE — pure client tooltip renderer; no items, no recipe surface, no content to weave. Sanctioned support role.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single placeable item (target dummy); no material I/O, no recipe type, no loot table. The combat-test use-case is its whole surface and no coherent weave emerges. Forcing an edge (e.g. "craft it from boss drops") would be contrived and mis-cost a basic utility item.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — pure client UI (pause-screen button). Zero content surface.

## almostunified   [anchors: support/infrastructure (1)]
- LEAVE — operates on the recipe graph itself, not as a content node. Its sanctioned role is to keep the web from fragmenting into duplicate material clusters. The galosphere PALLADIUM gotcha (CLAUDE.md) is its one pack-specific hazard to keep in mind but that is a config guard, not a weave.

## biolith   [anchors: support/worldgen-API (1)]
- LEAVE — worldgen placement library with no items/blocks/loot. Pure API dependency of biome mods; nothing to route through a method.

## appleseed   [anchors: survival (1)]
- from: diet-variety demand signal | via: config/tuning (no new recipe — the mechanic auto-reads the full food graph) | to: production (Create/cooking) | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player who only eats bread starves on buffs; cooking up a diverse plate of FD/ExtraDelight/Bakery dishes is the literal pressure-→-production loop — appleseed is the valve that keeps food demand from zeroing out.
- from: balanced diet buffs → trade specialty | via: player trade (emergent, no recipe) | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: "a cook can sell high-nutrition dishes" is the ambient endpoint of the loop (M-09 retired). There is no demand-gating mechanism here that a recipe or KubeJS step creates — it's the same "it's sellable" logic that M-09 retired. Economy link only counts when it gates demand; appleseed's diet pressure does that for production (accepted above), but it doesn't gate economy in a Phase-3-authorable way.
- REWORK: existing 2nd-anchor candidate in dossier mentions M-09 (economy via numismatics sell) — that is a retired motif. Dossier should be updated to drop the M-09 reference and note that the production-demand edge (M-26) is the real 2nd anchor.
- OK — the M-26 production-demand link is sound; one anchor accepted.

## everycomp   [anchors: support/decoration (1)]
- LEAVE — runtime block/asset generator; weaving belongs on the host mods (Create, Macaw's) whose shapes it stamps, not on the generator itself. No content surface of its own.

## puzzleslib   [anchors: support/library (1)]
- LEAVE — pure code library (Fuzs multi-loader abstraction). Zero player-facing surface.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — blockstate memory optimizer; no content whatsoever.

## jeed   [anchors: support/client-UI (1)]
- LEAVE — JEI display provider for status effects; its two "recipe-types" are documentation categories, not craftable methods. No material I/O.

## prickle   [anchors: support/library (1)]
- LEAVE — config-format library. No blocks, no items, no recipe types. Pure developer dependency.

## createblockchain   [anchors: economy, Create (2)]
- REWORK: The currency miner is an FE→coin faucet. Under the player-run economy ruling (rework #163/#240), the miner is an NPC-style coin faucet — it injects numismatics coins from outside the player economy (FE in → coins out), which contradicts the M-08 reframing where coins must be player-minted from scarce regional metal via Create processing. The miner short-circuits that scarcity chain. This is a design tension worth flagging: either (a) the miner's rate is so restricted (geode scarcity) it's effectively player-controlled and OK under M-08, or (b) it's an NPC coin faucet and should be audited for removal. Flag for Gate 2.
- from: Mining Core (worldgen geode, ~every 30 chunks) | via: regional scarcity of geodes | to: economy (coin scarcity) | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: coins are only as common as the geodes that fuel the miner — the geode spawn rate is the regional scarcity valve; a coin-minter who controls a geode-rich region controls local currency supply.
- from: FE supply to Currency Miner | via: createaddition:charging / FE from Create | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: you need a live Create FE setup to even run the miner — the tech spine gates the money supply; no factory, no coins.
- OK — the two accepted anchors (economy + Create) are sound. The M-08 tension noted under REWORK should be reviewed but does not block the weave candidates.

## inventoryprofilesnext   [anchors: support/client-QoL (1)]
- LEAVE — client-side inventory sort/lock UI. No items, no server-side processing, no content surface.

## mushroomquest   [anchors: survival (1)]
- from: common/rare mushroom caps (bay bolete, agarikon, etc.) | via: farmersdelight:cooking / extradelight:oven | to: Create/production | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraged caps go into the cooking-pot as any other ingredient — mushroom stew, miso, sautéed fungi — folding the foraging layer cleanly into the food-processing chain.
- from: deadly/mythical mushroom caps (effect-bearing rare drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a toxic destroying-angel cap transmuted by spirit fire yields an occult reagent — the deadly mushroom earns its place on the dangerous end of the magic supply chain.
- from: rare/mythical mushroom caps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (M-11, already accepted) covers the magic-reagent use for deadly caps; adding an imbuement route for the same tier of item creates a double-spend without adding loop advance. Keep one magic method; M-11 is the cleaner fit (transmutation from dangerous organic → spirit reagent). M-10 imbuement is better reserved for mods whose drops are already attuned / crystalline in theme.
- from: rare mushroom drops (Mushroom Island structure loot) | via: loot-seed | to: magic/economy | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Mushroom Island structure chests carry a rare mythical cap as a loot bonus — a discovery reward that seeds both the cooking chain and the occult reagent supply; players who explore the biome expansion find ingredients others can't farm.
- REWORK: dossier 2nd-anchor candidate mentions M-09 (sell rares for coin) — retired motif; drop. The loot-seed and spirit_fire links (M-02, M-11) are the real second anchors.

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — KubeJS scripting bridge for Create Ponder scenes. Zero player-facing content. Its value is as documentation infrastructure for the pack's own KubeJS weaves, not a weave surface itself.

## cmpackagepipebomb   [anchors: Create (1)]
- from: pipebomb (TNT/gunpowder explosive delivered by Create package) | via: createbigcannons:cartridge_assembly (or vanilla crafting) | to: survival/combat | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the cartridge_assembly route is thematically strained — a package-bomb is a prank/trap, not a munition manufactured for combat supply. The items already require gunpowder (vanilla) and ride Create logistics; forcing a CBC assembly step mis-costs a joke item. No coherent M-34 combat-supply chain emerges here.
- LEAVE — PvP prank/trap add-on. The Create-package delivery is its only real hook, and that's already its anchor. The item itself (a booby-trapped package) has no material output and no coherent 2nd-pillar weave that isn't forced.

## copperagebackport   [anchors: survival (1)]
- from: copper deco blocks (copper bars, chains, lanterns, chests, oxidized variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a weathered copper chest or bar set crushes back to copper nuggets + an XP nugget — the Create recycling loop absorbs the whole copper-deco palette, and the oxidized variants yield a little extra verdigris grit; no content is stranded.
- from: copper tools / copper armor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools and armor cycle back into the Create copper supply via the crushing wheel — low-power but thematically tight (copper is a Create staple material).
- from: Copper Golem (item-ferry between copper chests) | via: thematic adjacency to Create logistics | to: aeronautics/logistics | motif: M-29 | power: everyday | tone: clash | verdict: REJECT | reason: the Copper Golem is a cute low-tech sorter, but "Copper Golem → aeronautics" is a cross-system stretch with no recipe-authorable step connecting them. Thematic adjacency is not a weave. A config-tie or recipe-gate between golem and Create conveyor/funnel is possible but no method in the palette formalizes it; would be no-motif.
- from: copper ore (and copper-rich blocks) | via: create:crushing (M-03 ore-doubling) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: copper ore crushing is already the canonical vanilla-copper M-03 weave owned by Create itself; copperagebackport adds blocks but not new ore. Claiming M-03 here is redundant — M-04 (deco recycle) is the right motif for the deco/tool/armor set.
- OK — M-04 (deco recycle, two instances) accepted; survival+Create is the target 2-anchor state.

## bakery   [anchors: survival (1)]
- from: wheat → flour step | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bakery's flour — the base of every bread, dough, and tart — can be milled on a Create millstone as an alternative to the crafting_bowl, threading the whole bake chain to the tech spine; a flour-specialist mill run feeds the baker.
- from: finished cakes / tarts / cupcakes (high-saturation luxury foods) | via: colony food supply (MineColonies requests) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies citizens demand a variety of foods; luxury baked goods satisfy that demand at a high nutrition tier — a baker's colony output flows directly into the colony food-request queue, making the bakery a colony supplier.
- from: high-effort baked goods | via: emergent player trade | motif: M-09 (retired) | verdict: REJECT | reason: bare sell-link; M-09 is retired. "Cakes are luxury sellables" is the ambient endpoint, not a weave. The M-28 colony demand route (above) is the correct demand-gate.
- from: fruit-based jams / berry fillings | via: seasonal crop availability (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: strawberry and berry jams are only craft-able in-season — in winter the jam jar stays empty and the bakery's best pastries are locked; seasonal scarcity makes the jam-maker a coveted specialist.
- REWORK: dossier 2nd-anchor candidate mentions M-09 for economy — retired motif. M-28 (colony demand) and M-12 (milling) are the correct anchors. Also the Ars Vitalic/Agronomic Sourcelink idea (M-02 weak) in the dossier is genuinely weak — surplus baked goods as Source is contrived since fresh crops feed the Sourcelink better; mark that candidate REJECT in the dossier.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — terrain-generation overhaul; no items, no recipe types, no loot. Tectonic's real value to the pack is making the world feel worth traversing (continent-scale mountains spread ore regions further apart, amplifying M-30 regional-scarcity), but there is nothing to route through a method — it is causal context, not a content node.

## corgilib   [anchors: support/library (1)]
- LEAVE — code library (loot/worldgen helpers for dependent mods). No player-facing surface.

== CHUNK COMPLETE ==
