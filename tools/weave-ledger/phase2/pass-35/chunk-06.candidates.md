# Phase 2 candidates — chunk-06

## bountiful   [anchors: economy (1)]

Bountiful is a bounty-board mod whose reward AND objective pools are fully config-driven. Current anchor is economy (1). The existing dossier candidate for M-08/M-09 coin-from-goods is mis-scoped: M-09 is retired and bare "sellable" links are the ambient endpoint, not a weave. The real economy weave is demand-gating — pointing bounties at a non-trivially-satisfied demand sink.

- from: bountiful:decree (objective-category config) | via: config tie (bounty objective pool seeded with pack-specific outputs) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: boards demand the week's seasonal harvest — torchflower tea, sniffer eggs, Lantern Fruit — channelling the diet-variety pressure into steady repeating demand that no single player can stockpile ahead of
- from: bountiful:decree (kill-objective pool) | via: config tie (kill-bounty list seeded with pack's hostile/dungeon mobs) | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: boards post kill-bounties on dungeon-dwelling Kobolds, Skelebolds, and cave creatures — giving the combat specialist a concrete economic role: turn kills into board rewards that non-combat players need
- from: bountiful:decree (objective pool → Create-processed goods) | via: config tie (objective list seeded with Create-processed outputs such as sheets, brass, or packaged goods) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties requesting iron sheets or brass ingots make the Create specialist the reliable supply node; production feeds the board, the board renews demand
- from: bountiful reward pool | via: config tie (reward set to numismatics coin types) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: boards pay out in player-minted coin (cog/spur) rather than gold, making them the primary coin faucet that gives freshly minted currency its first circulation without going through an NPC vendor
- from: bountiful:decree (objective pool → magic reagents) | via: config tie (reagent objectives: datura, source_gem, boss-drop ingredients) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boards request magic materials that only a ritual specialist can supply — turning arcane reagents into tradeable demand, not just private use
- from: bountiful reward pool → bare "sellable luxury goods" | via: — | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired — "post a bounty, get coin" is the board's ambient purpose; the motif-bearing candidates above capture the actual demand-gating dimension; the naked sell-link is not a weave

REWORK: dossier's 2nd-anchor candidate referencing M-08/M-09 conflates the two. M-09 is retired; the real weave is M-08 (reward pool = player-minted coin as the circuit-closer) plus M-26/M-34/M-29 on the objective side for demand gating. The "economy→already" framing in the dossier understates the opportunity: the board's objective side is where the real loop-feeding happens. Recommend updating the dossier note.

## corgilib   [anchors: support/library (1)]

Zero player-facing items, no registered recipe types, no loot tables, no blocks. Pure code library dependency.

- LEAVE — genuine zero-content code library; dependency of Alex's Caves and similar; nothing to route through any method

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

Single music disc item. loot=yes but the loot surface is just the one disc; forcing any economy/loop edge would be noise for a joke easter-egg.

- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (disc) | via: loot-seed (seed into a structure loot table as a rare find in, e.g., a Kobold Pirate Den or an NTH dungeon) | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: even granting a structure placement, the disc has no gameplay function beyond playing music — adding it to a loot table via M-34 (combat-supply) is a stretch; the item carries zero loop weight. Tone is ok but balance is non-existent. Leave as pure flavor.
- LEAVE — single joke flavor disc; no meaningful content surface; forced integration would be noise, not signal

## stylecolonies   [anchors: support/decoration palette (1)]

Blueprint-set add-on for MineColonies. No items, no blocks, no loot tables. Ships style blueprints only. The Steampunk style already passively consumes Create blocks at construction time — that IS a real connection to Create production (the colony demands Create-built structural blocks to construct the Steampunk style), but it's a build-time material sink inherent to MineColonies' construction mechanic, not a recipe weave.

- from: stylecolonies Steampunk style blueprints (require Create blocks at colony construction) | via: MineColonies hut build request (colony builder consumes Create-fabricated blocks) | to: create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: building the Steampunk colony style demands Create-fabricated structural blocks — sheets, andesite casings, etc. — turning the colony into a steady Create-production demand node; the more you build out the settlement, the more Create output you need
- from: stylecolonies High Magic / FairyTale style blueprints | via: MineColonies hut build request (colony builder consumes magic-adjacent blocks) | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: High Magic colony buildings call for arcane or exotic blocks (amethyst clusters, deepslate, otherstone-style variants) — the magic specialist supplies the colony builder; settlement ambition drives magic-pillar demand
- from: stylecolonies blueprint styles requiring modded wood/stone not available locally | via: worldgen / regional scarcity gate (some style blocks are biome-region-locked) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: building the Frontier or Underwater style requires materials from a biome you may not be settled near — trade becomes the bridge between a player's colony ambitions and the block palette they need

REWORK: dossier notes "support role (pure blueprint content)" and lists no 2nd-anchor. The Steampunk/High Magic style demand on Create/magic blocks is a genuine M-28 colony-route connection — not a recipe, but a construction-material pull. The support-role call is too conservative given these structural material demands. These are passive but real loop connections: colony construction creates durable demand on the production pillars.

## endrem   [anchors: survival (1)]

Endrem gates the End behind collecting 12 of 16 distinct eyes from structure loot, bosses, and mining. The eyes are themed (nether/undead/guardian/corrupted/magical/etc.) and currently pure exploration-loot with no recipe graph ties. loot=yes. This is a genuine progression gate sitting at the top of the survival danger arc — strong loop position.

Power-read: the eyes are endgame items (require broad exploration across multiple structure/boss types). Deep integration is appropriate. Tone: any crafting route must stay costly and thematically coherent — ritual/transmutation (arcane) for the magical-themed eyes is a natural match; a Create sequenced-assembly chain for a technological-themed eye is possible but must not trivialize the exploration intent.

- from: endrem:undead_eye / endrem:corrupted_eye / endrem:cursed_eye (undead/dark-themed eyes) | via: occultism:ritual (ritual transmutation with rare organic components as catalyst) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a ritual specialist can transmute a Wither-adjacent mob drop into the undead eye, unlocking End progression through arcane mastery rather than pure dungeon luck — but the ritual components must be genuinely hard to gather
- from: endrem:magical_eye / endrem:exotic_eye (magic-themed eyes) | via: ars_nouveau:enchanting_apparatus (imbuement with source gems + rare reagents) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the magical and exotic eyes are byproducts of deep Ars knowledge — an arcane infusion of source gems and specialist reagents produces the eye; magic progression unlocks End progression; the two systems' endgames are now interlinked
- from: endrem:guardian_eye / endrem:nether_eye (biome-hostile-environment eyes) | via: loot-seed (seeded into the pack's structure loot tables — Nether fortresses / ocean monument / relevant dungeon chests — at a low rate) | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the nether and guardian eyes reward sustained dangerous exploration of the most lethal overworld/nether structures; the combat specialist who farms Nether fortresses and ocean monuments becomes the End-key supplier for the server
- from: endrem:old_eye / endrem:cryptic_eye (ancient/archaeological-themed eyes) | via: create:sequenced_assembly (a derpack:incomplete_eye chain — requires ore-processing byproducts + brass parts as inputs; 2–3 stages) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Create specialist can reverse-engineer two of the eyes through precision assembly — but the chain is deep enough that exploration is still the faster path; this is the "build your way past a bottleneck" option that the high-tier fork is designed to provide
- from: endrem eye subset (any 2–3 types) | via: recipe (vanilla-crafting table with boss-drop inputs) | to: survival (boss-drops gate) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: one or two eyes require a boss drop as a craft input — the Cataclysm / Kobold captain / dungeon boss becomes the key to End access; combat and boss-farming are a direct path to the End
- from: endrem:rogue_eye / endrem:evil_eye (chaos/trickster-themed eyes) | via: create:haunting (a haunted-item path — a base component is soul-haunted into the eye form) | to: create | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: the soul-haunting furnace transforms a dark-themed reagent into the rogue/evil eye — Create's occult seam gives the tech-focused player a route to the most elusive eyes
- from: endrem eye collection as a whole | via: bare "gate the End with more loot" — no pillar connection, just harder loot | to: — | motif: no-motif | power: — | tone: — | verdict: REJECT | reason: endrem's default mode is pure exploration-loot gating with no recipe/pillar tie; that's just a harder dungeon run, not a loop connection; it stays at survival(1) unless the craft/transmute routes above are added
- from: endrem:ancient_portal_frame | via: create:mechanical_crafting (craft replacement portal frames at cost) | to: create | motif: M-05 | power: endgame | tone: clash | verdict: REJECT | reason: the ancient portal frame is a world-spawn structural element, not a crafted item; letting players mass-craft portal frames undermines the ancient/found aesthetic of the End gate and trivializes the entire exploration-gate design; tone clash

OK — existing survival anchor is sound. New links (magic via ritual/imbuement, Create via sequenced assembly/haunting, boss-key, loot-seed) are all adding real 2nd/3rd system ties.

## trailandtales_delight   [anchors: survival (1)]

Farmer's Delight addon with Sniffer-recovered Lantern Fruit crop, cheese-making, cherry/pitcher dishes, and ancient coffee/teas. Strong food diversity. Existing anchor: survival (1). Already uses farmersdelight:cooking + farmersdelight:cutting.

Power-read: Lantern Fruit is a mid-tier crop (requires Sniffer egg recovery — sniffer is exploration-gated), golden variant is higher-value. Cherry cheese pie and ancient coffee are multi-step luxury foods (everyday→mid: they require sniffer egg + milk + cherry + pottery cooking, so 3-4 steps even before any Create integration). The mod explicitly has cheese production (curd → cheese wheel → slices) which is a maturing/aging chain.

- from: trailandtales_delight:lantern_fruit (Sniffer crop) | via: create:milling (mill lantern fruit into lantern_fruit_flour or jam-precursor) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the exotic Sniffer-recovered fruit feeds the Create milling chain, producing an ingredient used in further cooking steps — the food-processing web and the Create spine meet at this unusual crop
- from: trailandtales_delight:curd_block → cheese_wheel | via: create_cheese:maturing (aging the curd under the right conditions to produce cheese) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese must age — players can't rush it — creating a natural time-specialist role: the dairy farmer who keeps a maturing cellar and trades aged cheese to the server's cooks; the wait itself is the value-add
- from: trailandtales_delight:ancient_coffee / trailandtales_delight:cherry_petal_tea | via: farmersdelight:cooking + Serene Seasons seasonal gate (cherry/pitcher ingredients are season-dependent) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient coffee requires cherry blossoms obtainable only in spring — and cherry-blossom wood is a Serene Seasons spring-availability resource; a cup of ancient coffee is a seasonal rarity that players plan harvests around
- from: trailandtales_delight:golden_lantern_fruit (rare golden variant from the Sniffer crop) | via: ars_nouveau:imbuement (imbuement of source gems onto golden lantern fruit to produce a magic reagent or food-buff variant) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the golden Sniffer-crop carries an otherworldly glow that makes it a natural imbuement substrate — the magic specialist turns the baker's rarest ingredient into a reagent, and the baker needs to trade to keep the golden fruit supply up
- from: trailandtales_delight:cherry_cheese_pie / trailandtales_delight:cooked_sniffer_egg_block (flagship luxury dishes) | via: config tie (bountiful Decree objective pool seeded with these dishes) | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: the server's bounty boards list cherry cheese pies and stuffed sniffer eggs as weekly demand — the most elaborate dishes from this mod become the items that drive continuous cooking production; consumption is the engine, not decoration
- from: trailandtales_delight dishes as bare "luxury sellable goods" | via: — | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare "sell the pie for coin" is the ambient endpoint; the M-26/M-35/M-16 candidates above capture the actual demand-gating mechanisms

REWORK: dossier lists M-09 "luxury good → coin" as a candidate. That's retired. The real economy link is M-26 (consumption demand, e.g. via bountiful) or M-35 (cheese aging = maturation specialist). Both are stronger and correct. The Create milling pull (M-12) and Ars golden fruit imbuement (M-10) are also missing from the dossier's candidates — both are genuine.

## lithostitched   [anchors: support/library (1)]

Worldgen library (biome injectors, density functions, terrain modifiers). Zero blocks, zero items, zero loot tables, no recipe types. Pure worldgen plumbing.

- LEAVE — genuine zero-content worldgen library; all player-facing effects belong to the dependent mods (Tectonic, etc.) that register content through it; nothing to route

## wits   [anchors: support/QoL (1)]

Server-side debug command, no items, no blocks, no loot.

- LEAVE — zero-content server command utility; provides /wits structure-identification, no items or material surface to weave

## resourcefulconfig   [anchors: support/library (1)]

Config-screen library. Zero content surface.

- LEAVE — genuine zero-content config library/API; no items, blocks, or methods

## chat_heads   [anchors: support/QoL (1)]

Client-side chat-UI cosmetic, no items, no blocks.

- LEAVE — zero-content client UI mod; no material surface; pure quality-of-life for the multiplayer experience

## kobolds   [anchors: economy, survival (2)]

Kobolds has underground civilization mobs with emerald trading, unique structures, boss-tier Kobold Captains, and a loot=yes table. Already anchored at economy + survival (2). The dossier notes the mod is already well-connected; the one optional candidate is kobold_skull as a magic reagent sink.

Power-read: kobold_skull is a mid-tier mob drop (kill a kobold, rare variant). Kobold Captains are Pirate-Den boss-tier (endgame-adjacent). The Prospector enchantment is a distinctive specialty item (loot/trade output). Kobold iron tools are everyday-tier common drops.

- from: kobolds:kobold_skull | via: occultism:spirit_fire (transmute the skull of an arcane kobold enchanter into a spirit essence) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold enchanters are half-magical beings — their skull transmutes in spirit fire into a minor magic essence; the kobold farmer (mob-kill specialist) supplies a raw material to the magic specialist, threading the underground creatures into the magic production web
- from: kobolds:kobold_skull (skelebold variant — kobold wither skull) | via: occultism:ritual (use the wither-skull variant as a ritual sacrifice component) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the rare Skelebold wither-skull is a exotic mob drop with obvious ritual resonance — a magic specialist trades for wither-skulls to fuel higher-tier rituals, giving Kobold-hunters a repeating demand stream
- from: kobolds Prospector enchantment (exploration/mining buff) | via: ars_nouveau:enchanting_apparatus or create:sequenced_assembly | to: create | motif: M-29 | power: mid | tone: clash | verdict: REJECT | reason: the Prospector enchant is a kobold-exclusive trade good, not a craftable component — routing it through Create assembly would collapse the enchanter kobold's monopoly on it; the strength of the mob-trade economy is that players must go find kobolds, not craft around them; tone clash with the exploration intent
- from: kobolds iron tool drops (kobold_iron_axe, pickaxe, sword) | via: create:crushing (M-04, crush back to raw iron + gravel) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: kobold iron weapons are everyday loot; running them through the crushing wheel converts junk drops into refined material — a small but logical Create recycle for the exploration/combat player's inventory clutter
- from: Kobold Pirate Den (structure, Captain + chest) | via: loot-seed (seed Aeronautics schematic blueprint or rare map item into the Pirate Den chest) | to: aeronautics | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: kobold pirates are island-hopping sailors; their Pirate Den might hold a recovered airship schematic or a navigation chart — combat with the kobold captain becomes the way to unlock an Aeronautics build blueprint; danger feeds logistics

OK — existing economy + survival anchors are sound. New links: M-11/M-02 (skull reagents → magic), M-04 (iron tools → Create recycle), M-34 loot-seed (pirate den → aeronautics). The M-29 Prospector enchant REJECT preserves the kobold trading economy's value.

## terrablender   [anchors: support/library (1)]

Biome-region injection API. Zero items, zero blocks, zero loot tables.

- LEAVE — genuine zero-content worldgen library/API; all player-facing biome content belongs to the dependent mods; nothing to route

## createlowheated   [anchors: create (1)]

A single-block Create balance tweak (Basic Burner + "lowheated" heat tier). One block, one item, loot=yes. Currently Create(1) with dossier recommending leave.

Power-read: the Basic Burner is an everyday-tier block (early Create progression). It consumes solid furnace fuel and emits low heat. Its loot table is likely the block's own drop. The mod injects a heat condition into Create basin recipes — fundamentally a resource-management modifier for the entire Create heating stack.

- from: createlowheated:basic_burner (actively consumes furnace fuel for Create basin heating) | via: M-26 consumption mechanic (solid fuel is now a *recurring operational cost* for all Create heated-processing, not a passive resource) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Basic Burner makes coal and charcoal a *running expense* of the Create spine — a survival-layer fuel demand that never zeroes out; the woodcutter / coal miner becomes a steady supplier to every Create operation; fuel scarcity becomes a real pressure on the production loop
- from: createlowheated "lowheated" heat tier (new recipe tier between heated and superheated) | via: create:mixing / create:compacting (basin recipes that use the lowheated tier) | to: survival | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: lowheated processing of organic byproducts (fat rendering, early-stage food processing, low-heat chemical steps) produces usable intermediates from waste — the byproduct→input circularity works because the lowheated tier handles reactions too gentle for the standard heated basin
- from: createlowheated basic_burner (consumes charcoal specifically) | via: config tie (tie charcoal source to Serene Seasons winter availability — felling trees is harder in winter; charcoal becomes a seasonal bottleneck) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is a config-level tuning choice (season-gating charcoal production), not a weave against an existing pack method; it depends on external seasonal mechanics that aren't intrinsic to createlowheated itself; overfitting for a small balance-tweak mod
- from: createlowheated fuel consumption | via: tfmg:coking (coal coked into coke for cleaner/higher-value burner fuel) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coked to coke in a TFMG coking oven burns hotter and longer in the Basic Burner — the industrial fuel-processing chain feeds directly into Create's heating; a Create specialist who invests in the coking step gets more heat per resource, making coking a worthwhile production step rather than an isolated TFMG feature

REWORK: dossier recommends LEAVE ("single-block balance tweak with no tradeable/magic surface"). That's too conservative. The Basic Burner creates a *real fuel demand* across all Create heated processing — that IS a survival-pressure connection (M-26) of genuine weight. The whole pack's Create spine now has an ongoing resource cost, which is a loop-feeding outcome. The LEAVE call should be revised to recognize this passive but load-bearing survival tie.

## create_mobile_packages   [anchors: create, aeronautics (2)]

Already at Create + aeronautics (2). Airborne courier Robo Bees delivering addressed packages between Bee/Drone Ports. The dossier notes economy adjacency but calls it infrastructure rather than a coin sink. Let's re-examine.

Power-read: Bee Port, Drone Port are mid-tier Create logistics infrastructure. The Portable Stock Ticker is a significant convenience tool. Robo Bee is the courier item (crafted from Create parts). All are mid-tier.

- from: create_mobile_packages delivery network (packages carry addressed goods between player bases) | via: aeronautics/logistics layer (Robo Bees fly packages between distant player settlements on a modded server) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk goods traded between players actually fly as packages — the economy's logistics arm is physically realised by Robo Bees; the trading-floor exchange posts the order, the bee delivers the goods; logistics is not just a build, it's the physical commerce layer
- from: create_mobile_packages:robo_bee (crafted courier item) | via: create:sequenced_assembly (a short assembly chain — a brass chassis + Create cogwheel + copper wire → assembled Robo Bee) | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the robo_bee is mid-tier, not endgame — M-06 is the sequenced-assembly *keystone* for endgame items; using sequenced assembly for a mid-tier logistics item is over-engineered relative to the power level; a simpler mechanical-crafting or create:pressing step is more appropriate depth for a mid-tier courier
- from: create_mobile_packages:portable_stock_ticker (handheld remote stock access) | via: create:mechanical_crafting (a precision-crafted brass/copper instrument) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the portable ticker is a precision instrument — mechanical crafting (deployer-applied components onto a base) turns it into a Create-native gadget rather than a simple workbench craft; one light assembly step appropriate for its mid-tier role
- from: create_mobile_packages delivery network (delivers paid orders) | via: bare "it moves goods so it's the economy" | to: economy | motif: no-motif | power: — | tone: — | verdict: REJECT | reason: "infrastructure moves goods" alone is the ambient role; M-31 (logistics-required bulk good) is the right frame only when the logistics arm is the *required* delivery method for bulk/distance trade — that's already captured in the M-31 ACCEPT above; a second bare version has no additional motif

OK — existing Create + aeronautics anchors are sound. New link: M-31 (package delivery = logistics-required commerce layer) gives a genuine economy 3rd anchor. M-20 for portable ticker is a light, appropriate Create-depth step.

## cloth_config   [anchors: support/library (1)]

Config-screen API library. Zero content surface.

- LEAVE — genuine zero-content config library; no items, blocks, or methods; pulled as a transitive dependency

## occultism   [anchors: magic (1)]

Occultism is the flagship summoning/ritual magic pillar mod. Currently at magic(1) per the dossier, though the dossier itself acknowledges strong Create, economy, and organic ties. The dossier notes spirit_trade as an economy candidate via M-09/M-02 — M-09 is retired; the M-02 framing is the right direction.

Power-read: Occultism spans everyday (foliot summoning, spirit fire transmutation) through endgame (marid summoning, dimensional mineshaft, iesnium). spirit_fire and ritual are prime foreign-material sinks of the widest scope in the pack. iesnium is the endgame occult metal.

- from: occultism:spirit_fire (transmutation method) | via: occultism:spirit_fire (foreign mob drops → spirit essence) | to: survival | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: every hostile mob drop in the pack — from kobold skulls to Cataclysm boss pieces — has a spirit-fire path into occult essences; the combat specialist farms the dangerous world, the magic specialist buys the drops and transmutes them; danger-pressure feeds directly into magic production
- from: occultism:ritual (ritual pentacle method) | via: occultism:ritual (foreign magic-system reagents as ritual inputs) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars source gems, Iron's arcane essence, and Forbidden Arcanus fragments are all valid ritual sacrifices — the magic pillar's three systems are bound together at the ritual pentacle; a magic specialist who masters one system gains leverage over the others through cross-ritual trade
- from: occultism:dimensional_mineshaft (djinni-mined void-dimension ore) | via: occultism:miner (sends bound djinni to mine scarce regional ores) | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: the occultism dimensional miner is the magic specialist's logistics arm — it extracts scarce regional ores from a pocket dimension, giving the magic specialist ore-acquisition power that rivals the Create engineer's drilling rig; trading mined ore for magic reagents is the natural specialization split
- from: occultism:crushing (crush doubles ores, parallel to create:crushing) | via: occultism:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the occultism crusher is a magical parallel to Create's crushing wheel — running ores through it yields doubled output just like M-03; the two crushing paths are specialization alternatives, making the choice between Create and Occultism production routes economically meaningful (one requires mechanical infrastructure, the other spirit labour)
- from: occultism:silver_ingot (the pack's REAL silver, c:ingots/silver) | via: create:pressing (silver → silver plate for Aeronautics hull/panel components) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: occultism silver (iesnium's companion metal) provides the corrosion-resistant plating for Aeronautics airframes at a tier above iron — the magic specialist who mines silver via spirit-mining supplies the Aeronautics builder; silver plates become a cross-pillar supply chain node
- from: occultism:spirit_trade (summoned spirit merchant) | via: occultism:spirit_trade (otherworld goods exchanged in the spirit market) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the spirit trader is a service the occultism specialist performs for others — summoning a spirit merchant, offering its exotic otherworld goods in exchange for the pack's player-economy currency; the magic specialist is the only player who can broker this spiritual supply line, making them a service node in the player economy
- from: occultism:iesnium_ingot (unique endgame occult metal) | via: create:sequenced_assembly (iesnium component in an aeronautics endgame machine) | to: aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: iesnium — the otherdimensional metal only Occultism mines — is a required component in the highest-tier Aeronautics control unit; the Create airship master must trade with the occultism specialist or never reach the largest ship tier
- from: occultism:spirit_trade → bare "sell otherworld goods for coin" | via: — | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 is retired; "spirit goods are sellable" is the ambient endpoint; M-33 (service-for-hire) is the correct framing for spirit_trade as an economy node

REWORK: dossier assigns magic(1) and notes economy/Create as candidates, but the economy candidate explicitly references M-09 (retired) and M-02 (correct but incomplete). The mod's real anchor count should be magic + Create + economy (3) based on spirit_fire/crushing/silver/iesnium paths. The dossier underestimates the mod's weave potential significantly — it has the widest method surface in the pack (8 registered types) and touches every pillar. A dedicated Occultism weave pass in Phase 3 is warranted.

## structurize   [anchors: support/library (1)]

MineColonies build-engine library. No items of gameplay value beyond build/scan tools. No loot.

- LEAVE — support role as required MineColonies build engine; its weave IS MineColonies' weave; the structurize tools themselves are scaffolding utilities, not tradeable/loop-bearing items

## pingwheel   [anchors: support/QoL (1)]

Team ping-marker utility. No items, no blocks, no loot.

- LEAVE — zero-content multiplayer co-op utility; no material surface; fits the ~10-player group play target but carries no loop connections

## mcwwindows   [anchors: support/decoration palette (1)]

Macaw's Windows — 328 window/shutter/blind/curtain/parapet/arrow-slit variants. Stone, wood, and wool-based deco. loot=yes (likely block self-drop). The dossier suggests Create crushing (M-04) for stone parapets.

Power-read: all blocks are everyday-tier deco (vanilla crafting table, simple recipes). The stone parapet/arrow-slit variants use stone and are the strongest M-04 candidate — crushing a carved stone deco back to gravel + xp is the standard lossy recycle. Mosaic glass is dyed-glass-based and has no compelling secondary use. Curtains are wool-based.

- from: mcwwindows stone parapet / arrow-slit blocks (stone-carved deco) | via: create:crushing (M-04 lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone parapets and arrow slits crush back to gravel + an experience nugget — a routine recycle for the builder who over-ordered stone deco; low-effort, appropriate for everyday-tier decoration
- from: mcwwindows curtain blocks (wool-based) | via: create:milling (mill curtains back to wool fibers / string, a one-step everyday recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing curtains into wool fibers is a reasonable idea but wool is trivially available from sheep — the recycle has near-zero value since the player loses nothing by discarding curtains; it would be a recipe no one uses; the signal/noise ratio is wrong for everyday wool items
- from: mcwwindows mosaic glass blocks (16-color dyed-glass mosaic) | via: create:crushing (M-04 lossy recycle to glass shards/gravel) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing colored mosaic glass to plain glass or gravel loses all the dye investment; the player would just never do this; the recycle is tone-mismatched (why crush a carefully colored mosaic?) and creates a recipe no one uses in practice
- from: mcwwindows:*_parapet / *_arrow_slit (fortification blocks) | via: loot-seed (seed into dungeon/fortress loot as a rare architectural find) | to: survival | motif: M-34 | power: everyday | tone: clash | verdict: REJECT | reason: fortification deco blocks as loot-seed in a combat chest is a tone mismatch; players who find arrow slits in a dungeon chest are confused, not rewarded; these are builder palette items, not combat rewards

OK — existing decoration-palette support anchor is appropriate. Only stone parapet M-04 recycle passes; the rest REJECT cleanly. The deco-family pass noted in the dossier is the right scope.

## letsdocompat   [anchors: survival (1)]

Cross-mod recipe/tag compat bridge for the Let's Do food family. No items, no blocks, no loot. Ships recipes + 3 c:tags. It IS the food-web weave (M-12-style cross-system tag unification). Currently survival(1).

- from: letsdocompat items/foods/leafy_green tag (standardized leafy-greens across the Let's Do family) | via: create:milling (milling leafy greens into a dried-herb intermediate usable across cooking chains) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the standardized leafy-green tag makes every Let's Do salad green millable into dried herbs in one recipe — a single Create step unifies the entire food-family into the Create processing chain; one recipe, full coverage
- from: letsdocompat thirst-compat registration API (cross-mod thirst tagging) | via: config tie (tie pack's drink items to Serene Seasons temperature — hot season raises thirst faster) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is a config/external-mod interaction, not a weave against a pack method; letsdocompat itself only provides the tag bridge; the season-thirst interaction would be authored against the thirst mod directly, not through letsdocompat
- from: letsdocompat food-web unification (bridges multiple Let's Do modules into one tag-aligned web) | via: farmersdelight:cooking + farm_and_charm methods (already present in the web) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: with letsdocompat bridging the tags, a single Create milling recipe on the c:foods/leafy_green tag feeds every Let's Do cooking station — the compat glue becomes the hook; adding Create milling as the upstream step turns this from isolated food clusters into one connected food-Create web
- from: letsdocompat as a pure support mod | via: — | motif: no-motif | verdict: REJECT | reason: assigning a second anchor to the compat glue mod itself is category error — the 2nd anchor accrues to the food mods it bridges, not to the glue layer; letsdocompat is correctly a survival-support mod; its value is enabling the food-web weave, not being an independent weave node

OK — existing survival anchor is appropriate. The M-12 Create-milling-via-leafy_green tag is a genuine lightweight 2nd-anchor candidate that the compat layer enables (the tag is the weave-point); the thirst and support candidates reject correctly.

== CHUNK COMPLETE ==
