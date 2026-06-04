# Phase 2 candidates — chunk-08

## zombiemoon   [anchors: survival (1)]
- LEAVE — genuine zero-content-surface; 0 items, 0 blocks, no unique drops, no loot table seeding surface. Mobs use vanilla rotten-flesh-style drops. No coherent weave available that isn't invented from whole cloth.

## minecolonies_compatibility   [anchors: survival, Create (2)]
OK — connections sound. This mod is itself a bridge layer (colony workers ↔ Create Stock Link, IE, Farmer's Delight, BotanyPots). Its two pillars are accurate: colony farming pipeline (survival) and Create logistics (the Stock Link courier bridge).
- from: minecolonies_compatibility:butcher job | via: loot-seed | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony butcher output (cuts of meat, leather) flows to Farmer's Delight recipes and sells as processed food — a natural luxury-goods loop that adds an economy pillar without forcing anything.
- from: minecolonies_compatibility:tacz_dummy_gun (colony Gunner job) | via: recipe | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: Gunner is a combat job but bountiful/coin payout from colony kills is indirect; the Gunner trains colonists, it doesn't produce a mob-drop bounty directly — the connection is too abstract to author cleanly.
- REWORK: no existing connections are mis-costed; the Create↔colony bridge via citizen_stock_keeper is thematically solid and correctly light-weight (no recipe depth needed, it's infra).

## gtmogs   [anchors: survival, economy (2)]
OK — connections sound. GTMOGS is the worldgen substrate that makes M-03/M-08 possible; no weave can be authored *on* it directly.
- from: gtmogs vein definitions (regional scarce ores) | via: config | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: This is not a weave on GTMOGS itself — GTMOGS enables M-03 downstream; authoring a recipe *for* GTMOGS would be misplaced. The ledger already notes it enables M-03/M-08 as upstream knob. Record as infrastructure, not a candidate.
- from: gtmogs:overworld_marker / the_nether_marker (placed to anchor vein clusters) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: The markers are internal config blocks, not player-facing loot nodes. No loot table to seed.
- LEAVE (no additional weave to author) — infrastructure framework; all weaves route THROUGH what it spawns, not through it directly.

## jei   [anchors: support/client-UI (1)]
- LEAVE — pure client UI library with no items, no loot, no recipe surface. Zero-content for weaving purposes.

## buildguide   [anchors: support/client-QoL (1)]
- LEAVE — pure client-side render overlay; no items, no blocks, no loot table, no gameplay material surface whatsoever. True zero-content library.

## ribbits   [anchors: survival (1)]
- from: ribbits Amethyst-Shard trade economy | via: trade (villager-equivalent) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: Ribbit merchants already trade in Amethyst Shards — bridging their currency to Numismatics (accept coin, or sell swamp goods for coin) is the lightest possible step and makes the swamp village part of the pack economy rather than a side attraction.
- from: ribbits:toadstool / ribbits:red_toadstool (mushroom deco blocks) | via: recipe (create:milling) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Toadstool is an unusual material but milling mushrooms into spores/powder is generic and adds almost no connection depth — it'd be a one-step dead end with no downstream use. Not worth the noise.
- from: ribbits:toadstool / occultism:spirit_fire | via: recipe (occultism:spirit_fire) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Toadstool fungi incinerated in spirit fire yield a foliot-grade essence or fungal reagent — swamp-harvested mushrooms becoming an arcane ingredient is thematically coherent (swamp magic) and gives Ribbits a second pillar.
- from: ribbits:maraca (unique instrument) | via: trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: Maraca has charm value but routing a musical instrument to coin trade is arbitrary — it would be a one-liner with no depth and M-21 is already provisional. Better to keep the maraca as flavor.
- REWORK: no existing connections to rework (currently 1-pillar survival only).

## createadditionallogistics   [anchors: Create, aeronautics (2)]
OK — connections sound. Kinetics infrastructure (Create) + Stock Keeper seats for transport/logistics (aeronautics pillar). No forced additional edge needed.
- from: createadditionallogistics:brass_encased_lazy_shaft | via: recipe (create:mechanical_crafting) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Lazy shafts are a performance infrastructure piece, not a drivetrain component in the Aeronautics sense; treating them as propulsion inputs would misrepresent their function. The aeronautics anchor already exists through seats/logistics, not through drivetrain.
- from: createadditionallogistics flexible shafts (omnidirectional kinetics) | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Flexible shafts that connect any direction are exactly what a ship's mechanical drivetrain needs to route power to propellers at odd angles — requiring flexible shafts in Aeronautics prop/control recipes makes the airship build feel mechanically deliberate rather than just "throw regular shafts in".
- REWORK: aeronautics anchor is currently justified by seats alone; the flexible-shaft M-24 candidate above, if accepted, makes that aeronautics anchor materially stronger.

## occultism   [anchors: magic (1)]
- from: occultism:spirit_trade | via: trade (occultism:spirit_trade) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Summoned trader spirits deal in otherworld reagents at coin value — binding demon commerce to the pack's trade pillar so Numismatics players have a magical market to buy from, not just an industrial one.
- from: foreign mob/boss drops (c:tag intake — occultism accepts many external drop tags) | via: recipe (occultism:spirit_fire / :ritual) | to: magic | motif: M-11 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: Boss and elite mob drops transmuted in spirit_fire become higher-tier essences; the logic is already used in 34/35 scripts but needs systematic extension to every boss drop in the pack.
- from: occultism:silver_ingot (real silver, c:ingots/silver) | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Silver ore crushed in Create yields double ingots + a small byproduct — same logic as any other ore, and since occultism:silver is the pack's real silver (not galosphere palladium), the ore-doubling path belongs here.
- from: occultism:datura (rare crop) | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Datura, already an arcane ingredient, passes through the imbuement apparatus to yield a refined Ars essence — cross-magic-system bridge using an ingredient both systems would plausibly want.
- from: occultism:iesnium_ingot (rare otherworld metal) | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Iesnium, a metal drawn from a pocket void dimension by a bound Djinni, is exotic enough to be an endgame sequenced-assembly input — it gates high-end Create components behind magic infrastructure progression.
- from: occultism:dimensional_mineshaft (passive ore logistics) | via: config | to: Create | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Dimensional miner spirits acquire scarce regional ores that are too deep or too sparse to mine by hand — magic as a logistics provider for Create's ore-processing spine (already accepted motif M-18).
- REWORK: currently listed as 1-pillar (magic) despite the dossier noting Create dep and ore-crushing use; the anchors field should be updated to magic + Create (2). The spirit_trade→economy weave above would bring it to 3 pillars.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals framework library; zero gameplay content surface (template_chest is a trivial vanilla-style chest). No coherent weave available; forcing a recipe on a generic chest is noise.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: dungeon/tavern loot tables (loot=yes, 17 items registered in minecraft namespace) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tavern chests and dungeon vaults seed coin purses (Numismatics) into their loot — adventurers looting a dungeon find currency alongside gear, connecting exploration directly to the trade economy without any recipe work.
- from: dungeon/tavern loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding Ars source gems or Occultism foliot-grade reagents into higher-tier dungeon loot tables gives magic players a reason to explore rather than purely farm — mob-drop/loot-table reagent acquisition is exactly M-02's scope.
- from: dungeons-and-taverns trial-vault loot (minecraft:trial_key / ominous_trial_key gating) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ominous trial vault drops a Create Ironworks-tier component or sequenced-assembly keystone — the hardest dungeon content gates the deepest Create recipes, making exploration the on-ramp to tech (DESIGN.md north star).
- from: in-tavern cartographer villager | via: trade (villager) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT (provisional) | reason: M-21 is provisional and the maintainer leans no; a cartographer selling maps for coin is intuitive but this is exactly the uncertain territory M-21 flags. Surface for review but don't author.
- REWORK: no existing connections to rework (1-pillar survival). The three accepted loot-seed candidates above each add a second pillar — any one is enough to satisfy the floor.

== CHUNK COMPLETE ==

