# Phase 2 candidates — chunk-07

## endrem   [anchors: survival (1)]

**Existing connections:** none beyond its survival anchor (exploration/progression gate to the End).
No existing ≥2-anchor status; proposing new cross-system links.

- from: endrem:undead_eye / endrem:corrupted_eye | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual transmutation lets a magic specialist craft a specific eye using undead/void reagents — the End is partially unlockable through the magic route, not pure RNG exploration, and it consumes a thematic occultism material in the process
- from: endrem:guardian_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian_eye (aquatic theme — prismarine/water) imbuement with source energy and lapis produces an arcane variant; the enchanting apparatus consumes Source and a guardian-themed ingredient, weaving exploration-loot into the magic spine
- from: endrem:ancient_eye (one rarest eye) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: one or two of the 16 eyes can be assembled through a derpack:incomplete_eye multi-step chain (Create parts as intermediates) — the End is partly accessible via deep industrial craft, but only for the rarest one or two so exploration intent is preserved; depth scales with endgame tier
- from: endrem:nether_eye | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: a nether-themed eye passes through Create's haunting (soul-fire transmutation) — a soul-infused eye variant fits the nether vibe perfectly and gives a Create-native path to one of the nether-type eyes without trivializing the set
- from: endrem:magical_eye / endrem:black_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: making multiple eyes craftable via sequenced assembly undermines the whole point of endrem — 16 unique sources, 12 needed — reducing the exploration gate to a crafting exercise; a single assembler-path eye is fine (ACCEPT above), two or more erodes the design intent; reject broad M-06 application here
- from: endrem eye (any) | via: sell/numismatics | to: economy | motif: none applicable | power: mid | tone: clash | verdict: REJECT | reason: economy link as "sell the eye" is a bare sellable endpoint (retired M-09); no demand-gating mechanism proposed; reject

## bagus_lib   [anchors: support/library (1)]

LEAVE — genuine zero-content code library; zero blocks, zero items, zero loot. No player-facing surface to weave. Auto-pulled dependency for baguchi's mods only.

## createblockchain   [anchors: economy, Create (2)]

**Existing connections:** economy (the Numismatics coin faucet) + Create (FE from Create-side mechanical_crafting/mixing; miner built via those methods). Already ≥2 anchors.

REWORK check on existing connections:
- economy anchor (coin faucet via FE→miner): REWORK RISK. The currency miner is effectively an NPC-adjacent automatic coin source — it mints coins from FE + geode cores, not from player-produced value. Under the player-run economy ruling (rework #163/#240), a machine that autonomously converts energy into Numismatics coins is borderline NPC-faucet behavior. The design intent says coins should trace back to player-controlled scarce material; the miner's geode-core scarcity *partially* addresses this (cores are worldgen-limited), but the FE input is freely produced. Flag for review: is the geode-core rate-limit sufficient to keep this player-run, or does it need a stronger processed-metal input requirement?
- Create anchor: OK — it uses create:mechanical_crafting and create:mixing in its own construction recipes.

New weave candidates:
- from: createblockchain:mining_core (worldgen consumable) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mining cores (geode ore) processed through a crusher yield a coin-press byproduct (residue or refined sliver) — tying the minting input to the Create ore-doubling chain makes coins trace back through the Create spine, not just raw FE; a crushed core is a richer thematic fit (precision machined coin-blanks) than a raw bucket of coolant
- from: createblockchain:currency_miner | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the currency miner itself (as a non-trivial economic machine) assembled through a sequenced_assembly chain — derpack:incomplete_currency_miner step — instead of plain crafting, making the coin-factory a Create build achievement rather than a simple craft; depth appropriate to its economic power
- from: createblockchain miner FE | via: createaddition:liquid_burning | to: Create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: require the miner's FE source to come from a TFMG/CreateAddition fuel-burning generator (diesel/coal gas), so the coin supply chain runs through the fuel production line — coins now trace: regional ore → refined fuel → FE → miner → coins; closes the scarcity→economy loop via M-08/M-13 together
- from: createblockchain:cryotheum_coolant | via: create:mixing | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: coolant production as a Create mixing recipe (e.g. water + a processed mineral → cryotheum coolant) pulls the operational upkeep of the coin miner into the Create production chain — byproduct circularity: the coolant is an ongoing consumable linking coin output to active Create processing
- from: createblockchain:piggy_bank coins | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: piggy banks spawning in dungeon chests (loot=yes already) seed starter coins into dangerous spaces — the combat-supply loop: players risk danger to find the coins that kickstart the economy; links betterdungeons/adventure danger to the economy arm without an NPC faucet

## betterdungeons   [anchors: survival (1)]

> YUNG's Better Dungeons — pure structure/loot worldgen; 0 items, 0 blocks; loot=yes (custom loot tables on Catacombs, Undead Fortress, Spider Cave chests). Dossier candidates: loot-seed to economy (M-08-adjacent coins), loot-seed magic reagents (M-02), loot-seed boss-key fragments (M-15/M-34).

- from: betterdungeons loot tables (Catacombs / Undead Fortress) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding a small Numismatics coin spread (cog × 2–4) into dungeon chests makes dangerous structures a minor coin source; explorers risk actual danger to gather the settlement medium — the supply of coins traces back to player effort, not an NPC vendor; ties the danger face of survival to the economy's currency without an NPC faucet
- from: betterdungeons loot tables (Spider Cave / Undead Fortress) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding Occultism spirit-dust / Ars Nouveau source shards into dungeon chests means the magic specialist has a reason to fight through dangerous structures; mob-drop reagent logic applied via loot injection — the danger pillar feeds the magic pillar through structure loot
- from: betterdungeons loot tables (deepest Catacomb chests) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare boss-key fragment (one step toward an M-15 unlock) in deep Catacomb loot means the combat specialist farming dungeons collects pieces that matter to tech/magic players; establishes a supplier economy between the danger route and the production routes
- from: betterdungeons structures (as bounty targets) | via: MineColonies bounty / quest system | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: M-28 is the colony route motif — using dungeons as colony-assigned bounty targets is a reasonable idea but requires a mechanic linking MineColonies quest dispatch to structure locations; no such method exists in the methods palette; the loot-seed accepts above cover the relevant economy link; do not add a fourth edge without a concrete delivery mechanism

## brazil_legends   [anchors: survival (1)]

> Brazilian folklore mobs — Capelobo (beast cryptid), Headless Mule (cursed horse), Saci (trickster), Cuca (witch-hag); drops: capelobo_claw, big_tongue, amber_shard, bottle_with_saci. Dossier candidates: M-02 (spirit_fire), M-11 (imbuement), M-09 rejected (retired).

- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo's claw (a beast-spirit creature) burns in spirit fire to yield a demonology essence — the Occultism specialist needs to hunt this unique Brazilian cryptid, locking that essence to the combat+exploration route; thematically the beast-spirit fits Occultism's demonology aesthetic
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Headless Mule's tongue (a cursed creature of folk legend) sunk in imbuement with source energy yields a chaos essence; cursed-creature organ → arcane transmutation is coherent in Ars's naturalist-arcane aesthetic; the folklore-horror vibe aligns with dark imbuement
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: amber_shard is a gemstone/mineral output (semi-precious), not a mob organ — the thematic hook is weaker than the two organic drops already accepted; also, three imbuement sinks from one mod risks over-concentrating Ars dependency; reject in favor of the two organic drop ACCEPTs; amber can be revisited if a third magic weave is needed later
- from: brazil_legends:bottle_with_saci | via: ars_nouveau:summon_ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the Saci (a trickster spirit) bottled is thematically close to Ars Nouveau's summon_ritual, but bottle_with_saci is a mob-capture item; having the Ars summon_ritual consume it would free or transmute the Saci — thematically rich but mechanically unclear (summon_ritual summons things, not binds them); the tone is interesting but the mechanic doesn't fit the method cleanly; REJECT with a note that if Occultism binding ritual becomes available, this is a better candidate via M-11
- from: brazil_legends:amber_shard (luxury curio) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 RETIRED — bare sell links are not weaves

## netmusic   [anchors: support/QoL-flavor (1)]

> Custom-music jukebox. Purely cosmetic audio. Already routes through touhou_little_maid:altar_recipe_serializers (made-by methods). No material to route.

- from: netmusic:music_cd | via: touhou_little_maid:altar_recipe_serializers | to: (already weaved — TLM altar) | motif: — | power: everyday | tone: ok | verdict: REJECT | reason: already routes through the TLM altar; that connection is the one relevant weave this mod has; no additional system anchor is reachable without forcing contrived edges; the "service" framing (M-33 player plays music for others) is too thin to count as a loop advancement

LEAVE — purely cosmetic audio mod in a sanctioned curated-flavor role; already has a TLM altar weave; no material to route through any production method; no loop-advancing content surface beyond the existing tie.

## edf-remastered-5.0-beta4   [anchors: survival (1)]

> Ender Dragon Fight Remastered — pure behavior datapack. 0 items, 0 blocks. loot=yes in the jar digest but the dossier confirms: it does NOT add new drops or change the dragon's loot table rewards.

LEAVE — zero new content surface (no items, no seeded loot); behavior-only difficulty overhaul that makes the Ender Dragon harder without adding drop routes. A forced loot-seed would put items into functions that don't exist in this mod. The survival anchor (endgame boss difficulty) is the only coherent position; one anchor is correct.

## direct_chute   [anchors: Create (1)]

> A single zinc-based Create logistics block (slot-less chute). No material processing, no foreign join points.

- from: direct_chute:direct_chute (logistics block on ship contraption) | via: — | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 requires a good to be "heavy/bulky/perishable enough that trading at scale *requires* the logistics arm" — the direct chute is a logistics component *used in* aeronautics setups, not a good *moved by* them; the aeronautics tie is "this block can be placed on a ship" which is trivially true of any block; a nominal touch isn't a weave; reject

LEAVE — single Create logistics QoL block with no economy, magic, or survival surface; correctly 1-anchor. The aeronautics connection is nominal (any block can sit on a contraption) and doesn't advance the loop.

## gtmogs   [anchors: survival, economy (2)]

> GregTech Ore Generation Standalone — the vein-based worldgen framework that makes ores scarce and regional. Already ≥2 anchors (survival = exploration to find veins; economy = regional scarcity creates trade). Dossier notes it enables M-03 and M-08 downstream.

- from: gtmogs regional vein definitions | via: KubeJS vein authoring + GTMOGS config | to: scarcity/economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: formally acknowledge GTMOGS as the substrate of every M-30 (regional-scarcity gate) weave in the pack — it is not a weave itself but the foundation every scarcity-gated recipe rides on; the ACCEPT here logs that any M-30 proposed elsewhere requires GTMOGS vein data as the upstream; a single acknowledgment suffices for the ledger

OK — connections sound. Survival (exploration/danger to reach vein pockets) and economy (regional scarcity drives inter-player trade) are both grounded and correct. No rework needed; the mod is infrastructure, not a content target, and the two anchors are the right framing.

## biolith   [anchors: support/library (1)]

LEAVE — genuine worldgen API library; 0 items, 0 blocks, loot=no; biome-placement framework that other mods depend on. No content surface to weave.

## ars_nouveau   [anchors: magic (1)]

> The pack's magic spine — 18 registered recipe-types (the richest method set in the palette), 199 blocks, 446 items, source_gem as the M-01 hub reagent. Currently only 1 anchor. This is the highest-priority mod in the chunk to upgrade to ≥2 anchors; it is the magic pillar's spine and should deeply connect to Create and survival.

- from: ars_nouveau:source_gem | via: create:mixing | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create mixing recipe requires source_gem as a reagent (alongside a scarce ore/metal) to produce an arcane alloy or infused intermediate — the tech player needs source_gem from the magic specialist, and the magic specialist needs Create-processed metals for their apparatus; neither self-sufficient; the clearest cross-route dependency in the pack
- from: ars_nouveau Vitalic/Agronomic Sourcelinks (mob deaths + crop growth) | via: native Sourcelink mechanic | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: farm surplus and mob kills natively feed Source generation — every crop eaten by a Sourcelink radius or mob killed nearby is a consumption sink that renews the magic economy; farming/ranching players are indirect suppliers to the magic pillar, and the demand never zeroes because Source is continuously spent casting spells
- from: ars_nouveau:archwood_log | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood logs milled in Create yield an arcane sawdust / resin intermediate (a useful by-product unique to magic-forest wood) that feeds back into imbuement recipes — everyday processing step, one light weave; archwood is not a reserved reagent; the Create player has a reason to buy/harvest archwood logs from the magic specialist's forest
- from: ars_nouveau drygmy_charm (mob-drop automator) | via: ars_nouveau:summon_ritual | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Drygmy collects drops from any mob within its radius, including folkloric drops (brazil_legends claws), Ice&Fire scales, Cataclysm drops — the magic specialist is also a passive mob-drop aggregator; survival danger outputs feed the magic economy through the Drygmy's collection; any mob-drop reagent weave is implicitly reachable via this path
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement → numismatics | to: economy | motif: M-08 | power: mid | tone: clash | verdict: REJECT | reason: source_gem is RESERVED as the universal magic currency hub (reagent-ownership table); using it as a Numismatics-mintable coin would double-spend it, merging the magic economy and the player settlement medium; the two currency systems must remain distinct; REJECT as ownership conflict
- from: ars_nouveau spell scrolls | via: ars_nouveau:spell_write + economy | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic specialist writes spell scrolls to order (M-33 service-for-hire labor) — another player pays for the scroll's effect (combat, utility, healing); knowledge of the spell glyph combination isn't tradeable but the scroll product is; the magic player's labor (casting expertise + source cost) is the service; payment is emergent player-to-player; this is a genuine M-33 service economy link

REWORK: single anchor (magic) is all that exists; the five ACCEPTs above add Create (M-29 cross-route, M-12 processing), survival (M-26 consumption, M-02 mob-drop), and economy (M-33 service) — bringing ars_nouveau to the 2-anchor goal and beyond. No existing connections to rework.

## knightlib   [anchors: support/library (1)]

> Utility library with dormant content (grail, chalice, homunculus, essences) — only active if Knight Quest is present. Knight Quest is NOT in this pack.

LEAVE — library dependency for Knight Quest, which is absent from this pack; bundled content items are inert without that dependent mod. Weaving items that have no active gameplay surface creates orphaned recipe references. If Knight Quest is ever added, knightlib:great_essence becomes a natural M-02/M-11 candidate.

## ctl   [anchors: Create, aeronautics (2)]

> Create Train Lights — lamp blocks for trains/contraptions; built via create:sequenced_assembly (made-by methods confirmed). Already at the 2-pillar goal. Dossier says OK.

- from: ctl:htlb_block (head/tail lamp — directional light) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-24 is the mechanical-component→propulsion/control drivetrain motif; a lamp block is not a propulsion or control surface — it's a cosmetic/functional lighting accessory; the aeronautics anchor is correct (purpose-built for train/contraption detailing) but M-24 is the wrong motif to cite for it; the anchor stands, the motif citation would be wrong; no new weave needed

OK — connections sound. Create (sequenced_assembly) and aeronautics (train/contraption lighting) are both legitimate and well-grounded. Two anchors is the right position; no rework needed.

## libipn   [anchors: support/library (1)]

LEAVE — genuine zero-content library; 0 items, 0 blocks, loot=no; GUI/config API for Inventory Profiles Next only. No gameplay surface to weave.

## dummmmmmy   [anchors: support/QoL (1)]

> Target Dummy — one item, loot=no. Damage-number display for combat testing. No material processing, no loot surface.

LEAVE — single-item QoL combat testing tool; no material to route, no loot table to seed, no production method to connect to; any proposed weave edge would be contrived. One anchor (support/QoL) is the correct position.

## irons_spellbooks   [anchors: magic, Create (2)]

> Full RPG spellcasting — 70+ spells, mithril/pyrium metals, Alchemist Cauldron (fluid brew). Already at 2 anchors; Create anchor rides create:emptying / create:filling (fluid I/O in made-by methods). Dossier deepeners: mithril crushing (M-03), arcane_essence ↔ source_gem (M-01), cauldron fluid pipe logistics (M-12).

- from: irons_spellbooks mithril ore (c:ores/mithril, Y<38) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril ore crushed in Create yields crushed mithril + XP nugget byproduct — standard ore-doubling reward; mithril is locked to deep Y<38, making it naturally scarce and a candidate for M-30 region-locking; the Create player processes mithril for the magic specialist who needs it for scrolls/foci; tech serves magic
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence (Iron's magic currency) mints into/out of source_gem via imbuement — the two magic spines share a currency bridge; reagent-ownership notes arcane_essence is "bonded to source via M-01"; formally accepts the established design intent and logs it as a proposed weave
- from: irons_spellbooks alchemist_cauldron (brew output fluids) | via: create:filling / create:emptying | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: brewed potions from the Alchemist Cauldron are piped via Create's fluid system (emptying/filling already in made-by methods) into tanks for bulk storage or application — the Create logistician manages potion output distribution; the magic brewer and the Create engineer each do their specialized step; neither can skip the other
- from: irons_spellbooks:scroll (one-shot consumable) | via: ars_nouveau:spell_write (symmetry attempt) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: making Ars's spell_write produce Iron's scrolls is an asymmetric cross-route — Ars can produce Iron's consumables but Iron's can't produce Ars glyphs without their own table; asymmetric cross-route dependencies erode the specialization intent (one side becomes dependent, the other self-sufficient in both); REJECT pending a symmetric design where both routes produce something the other needs
- from: irons_spellbooks:affinity_ring (school-specific magic gear) | via: create:deploying | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a blank affinity ring is upgraded with a school-attuned gem via create:deploying (or item_application) — the Create player operates the deployer to apply the school focus to the ring blank; light single-step upgrade (M-20's "deploy-application upgrade"); the tech player is part of the magic gear pipeline; scales to mid-tier, not endgame sequenced assembly

REWORK: existing Create anchor (emptying/filling) is real and sound. Existing magic anchor is correct. No rework needed on either. The three ACCEPTs above deepen the Create tie (M-03 crushing, M-12 fluid logistics, M-20 deploy-upgrade) and the magic internal hub (M-01 currency bridge).

## lithostitched   [anchors: support/library (1)]

LEAVE — genuine worldgen library; 0 items, 0 blocks, loot=no; data-driven biome/terrain modifier framework. No gameplay surface to weave.

## modulargolems   [anchors: Create (1)]

> Tinker-style golems — assembled from metals at a workbench; Create is existing anchor (crushing, mechanical_crafting, sequenced_assembly in made-by methods). Dossier candidates: M-15 boss-metal bodies (dragonsteel/cursium), M-10/M-11 magic material in core upgrade.

- from: modulargolems golem-body (Cataclysm cursium / Ice&Fire dragonsteel metal variants) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies require cursium (Cataclysm boss drop) and dragonsteel (Ice&Fire dragon kill) — these metals are boss-key gated; the combat specialist is the only player who naturally farms them; the construct-builder must trade with or be the fighter; ties golemancy to the survival/danger pillar as a boss-key unlock
- from: modulargolems golem core upgrade | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: an arcane core upgrade slot filled via Ars imbuement (source_gem + archwood resin + golem-core in the imbuement chamber) yields a Guided Core that gives the golem intelligent targeting/pathfinding — the magic specialist provides a unique golem enhancement the pure tech player cannot self-produce; creates cross-route dependency (golemancer needs magic player)
- from: modulargolems golem parts (mass-produced via sequenced_assembly) | via: create:sequenced_assembly → aeronautics | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: golem limbs/parts are not drivetrain, propulsion, or control-surface components for Aeronautics ships; the method overlap (sequenced_assembly is also used in aeronautics construction) is coincidental, not a semantic connection; forcing M-24 here is a contrived edge; reject
- from: modulargolems golem labor (combat/utility constructs) | via: — | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 requires a player-to-player service mechanic; golem labor is indirectly player-driven but operates autonomously; there is no method in the palette that mechanically ties golem services to inter-player payment; the delivery mechanism is "player convention," not a game mechanic; reject pending a concrete method

REWORK: existing Create anchor (three Create methods in made-by) is solid. The two ACCEPTs above add survival (M-15 boss-metal gating) and magic (M-10 arcane upgrade) as second and third anchors.

## createlowheated   [anchors: Create (1)]

> Create Low Heated — reworks heating into an active model; Basic Burner consumes solid fuel; disables passive heaters; adds "lowheated" heat tier. Single block. No tradeable material output.

- from: createlowheated:basic_burner (solid-fuel heat demand) | via: create:mixing (fuel consumption) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Basic Burner demands a continuous supply of solid fuel (coal, charcoal, or seasonal biomass) — every Create basin running at low heat is a fuel consumption sink; the fuel supply is ongoing demand that pulls on mining (coal, a scarce regional ore via GTMOGS) and forestry (charcoal, seasonal wood); heat is no longer free, making it a managed survival resource that ties Create operations to the resource-gathering / survival pillar
- from: createlowheated lowheated tier (any burnable fuel → heat) | via: seasonal fuel (Serene Seasons crops/logs) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 requires a material obtainable *only* in a given Serene Season to feed the machine; the Basic Burner accepts *any* furnace fuel (coal, charcoal, logs — most are non-seasonal); the seasonal constraint isn't native to this mod and forcing a seasonal-only fuel rule would require a separate KubeJS config change that is independent of createlowheated itself; the M-26 ACCEPT already captures the survival link; reject M-16 here as over-specification

REWORK: no existing connections beyond Create. The ACCEPT above adds survival (M-26 consumption) as a second anchor — the fuel demand is a real mechanical loop connector tying Create operations to resource gathering.

## architectury   [anchors: support/library (1)]

LEAVE — genuine zero-content infrastructure library; 0 items, 0 blocks, loot=no; cross-platform modding API pulled transitively. No weave possible or needed.

== CHUNK COMPLETE ==

