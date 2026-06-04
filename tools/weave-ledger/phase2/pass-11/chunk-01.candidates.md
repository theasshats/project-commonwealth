# Phase 2 candidates — chunk-01

## sereneseasons   [anchors: survival (1)]
- from: season_sensor redstone signal | via: create:gearshift / contraption logic | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the automation switches crops or opens greenhouse shutters automatically when the season changes — a Create farm that "reads the calendar"
- from: out-of-season produce (scarce seasonal crop) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the scarcity is ambient and universal — every player in the pack experiences the same season simultaneously, so "scarce this season" doesn't create regional trade differentiation; it creates a pack-wide seasonal gap, not a specialization lever. Too weak as a standalone economy seam.

## tide   [anchors: survival (1)]
- from: rare / biome-locked fish (e.g. tide:abyss_angler, void-biome catches) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an abyss angler caught in a deep-ocean trench fetches real coin — rare fish are a natural trade good and Tide's biome-lock makes them genuinely regional
- from: tide:abyss_angler / exotic fish | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the magic mods already have rich mob-drop reagent pools; an abyssal fish transmute is thematically plausible but thin — no narrative hook ties deep fishing to arcane ritual that a player would find self-evident. M-09 covers the 2nd pillar adequately; a forced M-02 on the same mod dilutes both.
- from: raw fish (large volume output) | via: create:milling into fishmeal fertilizer | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fishmeal fertilizer is redundant — vanilla bonemeal and Create's own composting paths already exist. Adds clutter without meaningful differentiation. The economy weave (M-09) is the stronger 2nd pillar.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack with no items of its own to route; every recipe it ships already terminates in a Create machine. There is no material join key to pull for a 2nd pillar. It deepens Create internally and support-tier mods don't need a forced bridge.

## dungeons-and-taverns-v4.4.4   [anchors: survival / exploration (1)]
- from: structure loot / trial keys | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the mod ships no items of its own — trial keys are vanilla `minecraft:trial_key`. Any economy tie-in would edit a foreign (vanilla) loot table, not this mod's own material. That's a pack-global loot tweak, not a mod edge.
- LEAVE — exploration/structure datapack with no owned items or recipe-types. Its loot seeds downstream sinks through vanilla items. A forced 2nd-pillar edge would live in another mod's loot table, not in this one.

## solonion   [anchors: survival / food-discipline (1)]
- from: solonion:golden_lunchbox | via: create:mechanical_crafting (gate behind a Create precision component) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the golden lunchbox — the best auto-food tool in a survival pack — earns its keep by requiring a Create-machined precision component; tech progression gates the QoL peak
- from: solonion:lunchbox (base tier) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: guardrail — never gate a basic/everyday component behind a complex recipe. The base lunchbag and lunchbox are everyday carry items; only the golden tier (flagship) should be tech-gated. Base-tier upgrade stays at the crafting table.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot / tin plate (scarce regional ore, Create-processed) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is scarce and biome-regional; once crushed and processed through Create you can mint it into coin — the pack's scarcity-economy seam made tangible
- from: create_ironworks:steel_plate | via: aeronautics airframe / hull recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: structural airframes and hulls need fabricated steel plate — a steel-tier ship hull is built from processed industry, not raw blocks
- from: create_ironworks:bronze_plate / bronze_ingot | via: aeronautics drivetrain component recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze is the historical bearing-and-gear metal; rotors and control surfaces on a steam-era airship calling for bronze plate is sensible industrial design
- from: create_ironworks:steel_ingot | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — refined industrial steel routed through arcane infusion to become a magic reagent is arbitrary. Why specifically steel? The metal already earns two strong pillars (M-08, M-23/M-24); forcing magic dilutes coherence.

## trek-b0.6.1.1   [anchors: survival / exploration (1)]
- LEAVE — structure-only worldgen datapack with no items, no recipe-types, and no material outputs it owns. Any weave would be a foreign loot-table edit seeded into Trek's chests, not a connection Trek itself provides.

## tidal-towns-1.3.4   [anchors: survival / exploration (1)]
- LEAVE — structure-only worldgen datapack with no items, blocks, or recipe-types. Its ocean-village setting is thematically adjacent to Tide (fishing) and Aeronautics (sea destination) but contributes no material or method to weave through. World-design flavor, not a recipe edge.

## midnightthoughts   [anchors: survival / rest-loop (1)]
- LEAVE — pure behavioral/effect mod (well-rested buffs, sleep overlay) with no items, no recipe-types, and no material outputs. Nothing to route through any method. Thematically supports survival triad but offers no join key for a 2nd pillar.

## brazil_legends   [anchors: survival / folklore-adventure (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the claw of a werewolf-cryptid is exactly the charged folkloric material occult rituals consume — spirit-fire transmutation is the natural home for it
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a cursed tongue from a mischievous forest spirit is a plausible imbuement catalyst — Ars reagent use gives the drop a purpose beyond its own gear set
- from: brazil_legends:amber_shard | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber_shard as a luxury curio sell is weak — no rarity or production-chain depth justifies special coin value vs. any random rare drop. The magic weaves (M-11/M-02) already give drops a real sink. Adding a coin-sell on top is redundant and dilutes reagent scarcity. One coherent 2nd pillar (magic) is better than two thin ones.

== CHUNK COMPLETE ==
