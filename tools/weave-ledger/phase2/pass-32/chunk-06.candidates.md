# Phase 2 candidates — chunk-06

## createaddition   [anchors: create (1)]
- from: createaddition:seed_oil / bioethanol (crop-oil fuels) | via: createaddition:liquid_burning + farmersdelight / extradelight crop chain | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: farmed seeds go through the Create mill → oil press → liquid burner as an agricultural-to-energy route; the energy loop feeds back into automated crop growing
- from: createaddition:charging (FE charge) applied to irons_spellbooks gear / ars_nouveau battery-focus | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the electrical spine powers a mage's charged focus; Create electricity and arcane energy share a conversion seam
- from: createaddition:electrum_ingot (regional alloy) → create:pressing → numismatics mint | via: create:pressing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum is a bi-metallic (gold+silver) alloy — a fitting premium coinage material; the minting step makes money-creation a Create specialization
- from: createaddition:biomass / bioethanol as aeronautics generator fuel | via: createaddition:liquid_burning → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: biofuel from waste-crop biomass supplements diesel/gasoline on an airship; gives the agri-production chain a propulsion outlet
- REWORK: existing anchor list is Create-only (1). The seed_oil/charging/electrum candidates above all survive red-team; no existing connections to rework since it's a 1-anchor mod.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen meteor is just a strange rock — crushing it in a millstone for iron dust + nickel powder (+ xp nugget) is exactly the M-04 "recycles deco" pattern; gives meteors a use beyond floor decoration
- from: Blood Moon / Harvest Moon / Blue Moon events as a gating condition | via: event-gating (config/KubeJS listener) on ars_nouveau:summon_ritual or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain rituals only complete under the right moon phase — Blood Moon for dark summons, Harvest Moon for growth/fertility spells; enhancedcelestials already tracks moon state, and M-22 explicitly covers "all moon events"
- from: Harvest Moon crop-growth bonus as a seasonal reagent gate | via: worldgen/event-state modifier feeding create:milling crop-doubling on moonlit nights | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Harvest Moon is a "season event" that boosts crop yield; tagging some Create milling recipes to produce a bonus output on Harvest Moon nights makes the moon a production lever, not just ambiance
- from: space_moss block | via: ars_nouveau:imbuement (arcane substrate) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: moss grown on fallen stardust absorbs celestial energy; imbuement refines it into a minor arcane reagent (e.g. a star-attuned essence input for a lunar-tier spell)
- REWORK: 1-anchor mod; no existing connections to rework.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure glue/bridge library (0 items, 0 blocks, no methods); it IS already the internal food-web weave for the Let's Do cluster. No item surface to route a 2nd pillar through; forcing one would be attaching it to its dependents' content rather than its own.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea (high-effort drinks) | via: extradelight:vat or extradelight:evaporator as a multi-step reduction step | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: coffee roasting and tea reduction naturally pass through heated-vat processing; the Create chain (milling beans → mixing with hot water → evaporating to concentrate) reads as the industrial kitchen working with ancient produce
- from: trailandtales_delight:cheese_wheel (multi-step milk→curd→cheese) | via: create:milling (rennet/salt intermediate) + create:mixing (brine) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: industrial cheesemaking needs a salt brine stage and rennet crushing — exactly what milling + mixing handle; the traditional craft path still exists, the Create path adds depth
- from: trailandtales_delight:lantern_fruit (Sniffer-discovered; rare crop) | via: farmersdelight:cooking / extradelight:juicer → regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Sniffer seeds are rare and the Lantern Fruit only grows in warm biomes; that natural regional limitation makes Lantern Fruit dishes a genuine trade good, not a home-grown convenience
- from: trailandtales_delight:cooked_sniffer_egg → MineColonies restaurant provisioning | via: minecolonies request / colony supply | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic stuffed sniffer egg on the colony chef's shopping list creates a supply loop: colony demands a hard-to-cook specialty → players specialize in sniffer-egg cuisine
- REJECT: economy via M-09 luxury→coin (noted in dossier) | reason: M-09 is retired; bare "sell for coin" is not a weave; the M-28/M-30 routes above capture the economy anchor properly

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero items, zero blocks, zero c:tags, no recipe types of its own; it IS already a magic-internal weave (Ars↔Iron's mana unification). No material surface to route a 2nd pillar through; forcing one would be artificial per dossier.

## controlling   [anchors: support/client-UI (1)]
- LEAVE — pure client UI, no items, no methods, no blocks; a genuine zero-content library. No weave possible.

## bigsignwriter   [anchors: support/client-UI (1)]
- LEAVE — pure client UI, no items, no methods; zero content surface.

## cmpackagepipebomb   [anchors: create (1)]
- from: pipebomb (gunpowder/TNT + Create package delivery) | via: createbigcannons:caseless_munition_assembly (or cartridge_assembly) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a packaged pipe bomb is a one-shot improvised munition — routing its crafting through the Create Big Cannons munition assembly chain (gunpowder measure, casing, fuse) ties the PvPvE prank item into the weapons-production chain and creates a cross-route dependency
- from: pipebomb as a combat-supply good | via: emergent trade (the pvp trap economy) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist who can fab pipebombs and mail them in packages creates a genuine supply/demand — the "delivery weapons" role feeds the combat-route supply pillar
- REWORK: no existing cross-system connections; both above survive red-team (the munition-chain route is coherent; the M-34 combat supply is thematic with a PvPvE pack).

## dynamic_fps   [anchors: support/performance (1)]
- LEAVE — client-only performance utility; no items, no methods, no world impact. Genuine zero-surface library.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid UI mod; no items, no methods, no material surface. Genuine zero-surface library.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single item (target_dummy) that is a test prop; no processing surface, no material I/O. Forcing a combat-test tie to magic would be contrived per dossier assessment.

## formationsnether   [anchors: survival (1)]
- from: Nether structure loot tables | via: loot-seed (Phase-3 datapack edit seeding magic reagents) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether altars and sanctuaries have thematic affinity with occultism/forbidden arcana; seeding spirit-essence or corrupted-soul fragments into their loot tables makes exploring them a magic-route acquisition path
- from: Nether structure loot tables | via: loot-seed (seeding a scarce Nether-exclusive metal or boss fragment) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: loot exclusive to Nether structures is inherently region-locked (Nether access) — seeding a unique regional material into these chests makes them a scarcity node feeding the trade economy
- REJECT: dossier candidate "economy via numismatics — drop a sellable reward" | reason: bare "sellable reward" is M-09 (retired); the M-30 loot-seed above captures the economy link properly by using regional-scarcity gating
- REWORK: 1-anchor mod; no existing connections to rework.

## ribbits   [anchors: survival (1)]
- from: ribbits Amethyst-Shard trade economy (merchants sink shards → emit swamp goods) | via: KubeJS trade-currency bridge tying amethyst shards to Numismatics coin / making swamp goods colony-requestable | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Ribbit merchants already run a functioning barter economy; bridging their shard currency to Numismatics turns their swamp village into a cross-route economy node — a non-player trading post that players can supply or arbitrage with
- from: ribbits:toadstool / mossy_oak_planks woodset | via: create:cutting / create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mossy-oak woodset is a distinct tropical swamp lumber — cutting and milling it into beams/boards through Create is a light, coherent "recycles deco" step that ties the swamp biome wood into the production spine
- REJECT: dossier candidate "M-08 coin from processed scarcity" for Ribbit trade | reason: M-08 requires a Create-processed regional metal → numismatics mint; the Amethyst-shard trade is a different mechanism; M-29 cross-route dependency captures it more accurately than forcing M-08
- REWORK: 1-anchor mod; no existing connections to rework.

## createshufflefilter   [anchors: create (1)]
- LEAVE — two filter items that modify Deployer behavior; no material I/O, no processing surface of their own. No coherent 2nd pillar without attaching to contraption content it doesn't own.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — client loading-screen UI; no items, no methods, no gameplay surface. Genuine zero-content library.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice (tagged c:foods/fruit) | via: extradelight:juicer → create:milling (coconut flesh → coconut milk / coconut oil) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: coconut oil is a valid cooking/industrial oil alongside seed oil; the Create mill extracts it as a fluid feedstock for the kitchen chain and (bonus) as a liquid_burning fuel parallel to seed_oil
- from: ecologics:coconut woodset + azalea woodset | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: two distinct decorative woodsets → create:cutting into planks/beams is the standard deco-to-Create route; light one-step, coherent
- from: ecologics region-exclusive biome items (beach coconuts, azalea-grove flowers) | via: regional scarcity (biome-locked harvest) → Numismatics trade | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts only grow on beaches, azalea flowers only in azalea-grove biomes — biome-locking makes them natural trade commodities for players in other regions
- REJECT: dossier "sell coconut dishes for coin" | reason: bare sell link = M-09 (retired); the M-30 regional-scarcity gate above is the correct economy anchor
- REWORK: 1-anchor mod; no existing connections to rework.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: sea-dungeon loot tables (galleons, sunken ruins) | via: loot-seed (insert aeronautics-relevant blueprint fragment or structural alloy) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: galleons and sunken fortresses are exactly where one finds old ship-building plans; seeding an airship/naval hull schematic or structural alloy (e.g. a rare sea-brass plate) into the loot tables ties ocean exploration to the aeronautics build-out
- from: sea-dungeon loot tables | via: loot-seed (scarce ocean-exclusive metal / prismarine composite) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean structures are geographically distant from land bases; their exclusive drops are naturally region-locked, and the aeronautics/logistics arm is the efficient way to reach and trade them — the mod anchors the ocean as a scarcity node
- REWORK: 1-anchor mod; no existing connections to rework.

## tide   [anchors: survival (1)]
- from: tide biome-locked rare fish (abyss_angler, void-dimension catches, Nether fish) | via: regional-scarcity gate → emergent trade (biome-exclusive catch = non-fungible good) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: certain fish only appear in specific biomes (deep ocean, Nether, void); a player who lives near the right biome and fishes there becomes the specialist supplier — a real scarcity-driven trade commodity
- from: tide raw fish stream (c:foods/raw_fish) | via: farmersdelight:cutting + extradelight:drying_rack / evaporator | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the large fish catch flows into the pack's deep-cuisine chain — cutting board for fillets, drying rack for salt-fish, evaporator for fish sauce; a Create milling step (bones → bonemeal + fish meal fertilizer) closes the loop
- from: tide exotic fish (abyss_angler, deep-sea catches) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: deep-ocean creatures that live below the light carry a latent essence; the spirit-fire transmutes an abyss fish into a deep-water spirit reagent (M-02 mob-drop reagent sink — exotic fish as a mob/boss-adjacent organic drop)
- REJECT: dossier candidate "Numismatics fish sale → coin" | reason: M-09 retired; bare sell-for-coin is not a weave; M-30 above captures the economy anchor properly
- REWORK: 1-anchor mod; no existing connections to rework.

## extradelight   [anchors: survival, create (2)]
- from: extradelight:mortar + grain/coffee crops | via: create:milling (grain → flour, coffee → grounds) feeding extradelight:oven / mixing_bowl | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the industrial kitchen's milling step belongs in Create; the mortar and pestle is the manual fallback, but automated grain milling through Create's millstone feeding the Oven/Mixing Bowl is the intended production-scale path
- from: extradelight feast-blocks (large prepared feasts) | via: minecolonies request / colony provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists need food; feasts satisfy large groups; colony restaurants requesting feasts creates recurring structured demand that the food specialist must supply — a colony-demand driver
- from: extradelight:drying_rack / evaporator outputs (dried herbs, syrups, salt) | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: dried arcane herbs, concentrated syrups, and evaporated mineral salts are natural arcane-infusion inputs; routing the Drying Rack / Evaporator outputs as potion/brew feedstock ties the deep-kitchen into the magic pillar
- REJECT: dossier "luxury feasts → coin (M-09)" | reason: M-09 retired; M-28 colony-demand above is the correct economy weave
- OK — existing create↔survival connections are sound (create:mixing already inbound; farmersdelight:cooking/cutting already inbound); M-12 deepening via milling is additive, not a rework.

== CHUNK COMPLETE ==
