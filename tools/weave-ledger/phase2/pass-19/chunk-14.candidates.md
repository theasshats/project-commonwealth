# Phase 2 candidates — chunk-14

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight cooked stews/pies (high-effort meals) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a batch of hearty stews turned in at a trading post pays proper coin — the kitchen feeds the market
- from: farmersdelight crops (cabbage/tomato/rice) | via: create:milling → farmersdelight:cooking | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling grain to flour before the cooking pot keeps Create in the food loop as the essential prep step
- from: farmersdelight cooked meals as MineColonies cook-hut provisioning | via: minecolonies request system | to: survival (colony) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: not a cross-system weave — both farmersdelight and MineColonies sit in survival; this is intra-pillar depth, not a new anchor
OK — connections sound (survival + Create already established; M-09 economy weave is the recommended addition)

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies colony-produced food/goods (apple_pie, baked_salmon, bread) | via: numismatics sell / bountiful bounty objective | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: colony surplus hits the bounty board and gets priced in coin — the settlement becomes a supply node for the player economy
- from: minecolonies ancienttome (research gate item) | via: loot-seed — seed into structure chests / boss drops (endrem, cataclysm) | to: survival (exploration) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: ancienttome is already obtainable in-world via colony trading; adding it to structure loot dilutes the colony-progression gate — the design intent is that you need to build a colony to unlock research, not find shortcuts
OK — connections sound (M-05 Create gating is authored; M-09 economy via surplus is the natural 3rd)

## moreculling   [anchors: support/performance (1)]
LEAVE — pure client render-culling library; zero content surface (no items, no methods, no loot); no coherent weave is possible

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore / tin_ingot | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a regional scarcity metal — crush it, process it, mint Cog-tier coin; the smelter's output lands in the economy
- from: create_ironworks:steel_plate / steel_ingot | via: fabricated structural part → aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: you need real forged steel plate to lay an airship hull — no steel, no ship; makes the metallurgy tier load-bearing for aeronautics
- from: create_ironworks:bronze_ingot | via: create:mixing / pressing → aeronautics drivetrain part | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze bearings and rotors are the mechanical heart of the Aeronautics propulsion train — the alloy tier earns its place in the build chain
- from: create_ironworks:steel_ingot | via: occultism:spirit_trade / ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: theme clash — refined industrial steel going through an arcane infusion ritual feels forced; the mod's identity is metallurgy and engineering, not mystical transmutation; M-08 + M-23 already give it 3 pillars

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore | via: create:crushing (ore-doubling) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: run salt ore through a crushing wheel to yield salt dust + a byproduct — salt becomes a Create-processed commodity, not a hand-mined luxury
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-aged) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of aged cheese is time-gated effort — that's what gives it real trade value when priced at a trading post
- from: expandeddelight:cinnamon (dust) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon logs go through the Millstone to yield cinnamon dust — one Create step makes the spice pantry flow through the spine
- from: expandeddelight:juicer outputs (juices) | via: numismatics sell / bountiful bounty objective | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: juices are low-effort (one-step juicer press) — M-09 is for *high-effort* luxury goods; juices don't clear the cost bar; keep the sell angle for aged cheese only

## ldlib2   [anchors: support/library (1)]
LEAVE — developer UI/rendering library; registers no real player-facing content (the two "blocks" are dev test entries); no material to weave

## modernfix   [anchors: support/performance (1)]
LEAVE — JVM/loader-level performance patches only; zero content surface; no weave possible

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual (transmute from wither skull / undead reagent) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a stuck player with no undead_eye loot luck can summon one ritually — the occult path to the End requires mastering spirit methods first
- from: endrem:nether_eye | via: occultism:ritual (transmute from blaze rod + nether reagent stack) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Nether eye demands a nether reagent ritual — progression to the End runs through Occultism as a viable alternate path
- from: endrem:guardian_eye | via: create:sequenced_assembly (derpack:incomplete_guardian_eye chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the exploration-gating intent of endrem is its design core — giving a Create-craft path for any eye that's also achievable via exploration/loot dilutes the entire progression hook; keep craft paths only in the magic pillar (ritual) where the cost is high and thematic; reject Create route to preserve the scarcity/exploration pressure
- from: endrem eyes (multiple) | via: loot-seed — seed into cataclysm boss loot / deeperdarker sculk chests | to: survival (exploration) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: specific thematic eyes (corrupted_eye from Deeperdarker's warden loot, magical_eye from Cataclysm boss) slot naturally into the exploration challenge; combat earns portal keys

## mutantszombies   [anchors: survival (1)]
LEAVE — hostile mob expansion mod with no item drops (loot=no, only spawn eggs); 7 biome-modifier spawns raise night-threat pressure but the dossier explicitly confirms no drops or craftable outputs; no material surface to route; forcing an edge would be contrived

## companion   [anchors: support/QoL (1)]
LEAVE — pet-safety behavior mod; no items, no blocks, no loot; pure behavior; no weave surface

## dummmmmmy   [anchors: support/QoL (1)]
LEAVE — single Target Dummy item (combat tester); no drops, no processing output, no loot table; the only item's purpose is absorbing hits for measurement — forcing it into a recipe chain would strip its identity as a test tool

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns ocean village structures (blacksmith/chest loot) | via: loot-seed — seed numismatics coin + fishing/seafood reagents into chest loot tables | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a sunken-town blacksmith chest yielding coin and salted fish rewards the sea voyage and plants the economy currency in exploration naturally
- from: tidal-towns ocean village structures | via: loot-seed — seed Create parts (cog, shaft, fluid pipe) into blacksmith chest loot | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: tidal-towns uses vanilla blocks and loot exclusively by design (vanilla-faithful intent from dossier); seeding Create parts into its loot would break the vanilla-faithful feel and could conflict with the datapack's loot override approach; stick to coin/food loot (economy tie) rather than tech parts

## modonomicon   [anchors: support/documentation (1)]
LEAVE — in-game guidebook framework only; books are documentation flavor, not material sinks; the mod registers no blocks/items with game relevance; a "book as ingredient" edge would be contrived

## jeed   [anchors: client UI/support (1)]
LEAVE — JEI display provider for status effects; the two "recipe-types" are viewer display registrations, not craftable methods; no weave surface

## mousetweaks   [anchors: support/QoL (1)]
LEAVE — client input-handling mod (drag/scroll inventory); zero content; no weave possible

## appleskin   [anchors: support/QoL (1)]
LEAVE — food HUD display mod; surfaces hidden food stats but adds no mechanics, items, or processing; no weave possible

## bountiful   [anchors: economy (1)]
- from: bountiful bounty payout configuration | via: config tie — set reward pool to numismatics:cog/spur/bevel | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: turn in a bounty, collect coin — the board is the economy's faucet; Numismatics coin is the natural payout for a scarcity-driven pack
- from: bountiful Decree objective pools | via: config tie — point Decrees at farmersdelight/expandeddelight crop outputs and Serene Seasons seasonal items | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bounty board asks for seasonal goods — tomatoes in summer, cranberries in autumn — linking the food calendar to the economy demand cycle
- from: bountiful Decree objective pools | via: config tie — include Create-processed goods (brass gears, crushed ore) as bounty objectives | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a board that requests processed Create goods turns the fabrication workshop into a coin-earning operation; production feeds demand
- from: bountiful Decree objective pools | via: config tie — include mob-drop objectives (rotten flesh, bones) with coin payout | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: while thematically valid, mob-drop bounties are the most generic/trivial form — they make combat the primary economy driver, which flattens the scarcity↔production loop into a grind; better to weight Decrees toward processed and seasonal goods (above) and keep raw mob kills a minor/low-rep-tier objective, not a first-class weave candidate

## ding   [anchors: support/QoL (1)]
LEAVE — client audio-cue mod (plays a sound on load); no items, no blocks, no content; no weave possible

## accessories   [anchors: support/library (1)]
LEAVE — accessory-slot API library; registers no player-facing items; wearables that weave live in dependent mods (create_sa, etc.), not in this library

## create_sa   [anchors: Create, aeronautics (2)]
- from: create_sa:brass_jetpack_chestplate / andesite_jetpack_chestplate | via: create:sequenced_assembly chain | to: Create | motif: M-06 | power: mid-endgame | tone: ok | verdict: REJECT | reason: the dossier confirms jetpacks are already built via create:sequenced_assembly (inbound weave present); tagging this as a new M-06 candidate would duplicate an existing connection — not a new link
- from: create_sa:brass_drone_item | via: aeronautics logistics integration — drone as a personal logistics unit bridging ground and airship cargo | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the brass drone is a mechanical flyer — its drivetrain (propeller, control module) requires Aeronautics-adjacent parts, folding it into the same supply chain as airships
- from: create_sa blaze tools (blazing_pickaxe, flamethrower) | via: ars_nouveau:imbuement or occultism:ritual — attune the blazing line with a magic catalyst | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the blaze-infused tools feel like they want a ritual step — attune the blazing core with an Ars source gem or an occult fire-spirit seal to unlock their full temperature potential
REWORK: the aeronautics anchor for create_sa is cited as jetpacks/drones = personal flight. Valid but lightweight — jetpacks are personal gear, not part of the airship construction or logistics chain. The M-24 drone candidate above would deepen this into the supply-chain seam rather than just "person who flies." Consider tightening the aeronautics anchor description to require at least one drivetrain/logistics component recipe tie, not just "gear that lets you fly."

== CHUNK COMPLETE ==
