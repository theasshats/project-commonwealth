# Phase 2 candidates — chunk-04

## azurelib   [anchors: support/library (1)]
- LEAVE — pure animation/rendering API, zero player-facing items or methods; no weave surface.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot chests | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: airships are the intended vector to reach sky whales — seeding an Aeronautics structural component or propulsion part into whale-back chests makes the reward match the effort (you fly up, you get ship parts)
- from: sky_whale_ship loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: floating whale platforms carry arcane-ecology flavor — a rare scroll shard or Iron's scroll fragment as whale loot grounds the magic pillar in aerial exploration
- from: sky_whale_ship loot chests | via: loot-seed (coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; whale loot coins don't form a loop-closing sink, just an incidental payout

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink | via: recipe (crafting) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Oven and Fridge are kitchen *machines*; requiring Create brass/copper sheets to craft the upgraded appliance tiers earns the kitchen a production-tier gate without touching its food logic — cooking scales with Create progression
- from: cookingforblockheads:cooking_table (aggregate) | via: recipe (crafting) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the cooking table aggregates others' foods; those foods are already M-09 candidates under their own mods, duplicating here adds no structural value
- REWORK: existing survival anchor is sound. The dossier's "economy via numismatics" candidate correctly dropped; M-05 on appliance tiers is the real second anchor.

## irons_spellbooks   [anchors: magic, Create (2)]
- OK — connections sound. Two anchors confirmed: magic spellcasting spine + alchemist cauldron using create:emptying/filling. Depth candidates below.
- from: irons_spellbooks:mithril_ore | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril is a deep-vein metal — the Crushing Wheel doubles output (byproduct: experience nugget), tying spell-metals into the Create ore-doubling chain and rewarding automated mining
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is Iron's-side magic currency (RESERVED in ledger §2 as bonded to source via M-01) — binding it to ars_nouveau:source_gem through imbuement keeps the two magic spines in one currency web; already sanctioned in ledger
- from: mob/boss drop (apothecarist etc.) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boss mob drops (skeleton mages, apothecarist) feed the Alchemist Cauldron as brew ingredients, closing the combat→magic-production loop

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — behavior-only mod; no items, blocks, or methods; no weave surface.

## just_blahaj   [anchors: decoration/flavor (1)]
- LEAVE — pure decorative plush with no material routing; forcing an edge is the failure mode per briefing guardrails.

## create_integrated_farming   [anchors: Create, survival (2)]
- OK — connections sound. Two anchors confirmed: Create contraption automation + survival food/husbandry.
- from: roost egg/feather/meat output | via: farmersdelight:cooking / create:mixing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: roost bulk-produces eggs/feathers continuously — routing them through Create mixing (mayonnaise, batter) or FarmersDelight cutting gives the automated farm a downstream processing chain, not just a chest fill
- from: bulk poultry products (eggs/feathers) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; steady egg/feather output is trivially sellable; the real value is the processing chain (M-12 above)

## ribbits   [anchors: survival (1)]
- from: ribbits merchant trades (Amethyst Shard economy) | via: villager trade → numismatics bridge (KubeJS) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: Ribbits already run an Amethyst-Shard trade economy — bridging their merchants to Numismatics makes the swamp village a genuine entry point into the player-coin loop, not an isolated currency island; distinctive because the bridge is between two *non-coin* exchange systems
- from: ribbits:toadstool / mossy_oak woodset | via: create:cutting / create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood/deco crush-back — mossy oak is just another wood variant; M-04 applied to a whole deco-family pass has value, but this one mod's woodset alone is insufficient signal; not a distinctive second anchor

## bookshelf   [anchors: support/library (1)]
- LEAVE — mod-dev library, no player-facing items or methods; no weave surface.

## createbigcannons   [anchors: Create, aeronautics (2)]
- OK — connections sound. Two anchors confirmed: deep Create machine-chain + Aeronautics ship-mounted cannons.
- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: createbigcannons:melting → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel and cast iron are the structural metals of heavy industry — requiring them in Aeronautics armored hull/frame recipes makes cannon-building and ship-building share a foundry supply chain (you need the same furnace to arm *and* armor your ship)
- from: createbigcannons:big_cartridge / shells (finished munitions) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; munitions are sellable but the distinctive value here is the aeronautics structural seam (M-23), not a sell link
- from: createbigcannons:cannon_mount (mechanical control surface) | via: aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the cannon mount/carriage is a mechanical aiming mechanism — folding it into Aeronautics turret-control or swivel-mount recipes makes ship-weapons cost real cannon-craft parts (drivetrain side of M-24)

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — pure config API, no player-facing items or methods; no weave surface.

## dtterralith   [anchors: survival (1)]
- from: dtterralith exotic saplings (cedar, jacaranda, kapok, maple, giga_spruce seeds) | via: dynamictrees:seed_conversion | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith biomes are seasonal — jacaranda blooms only in temperate climates, cedar in boreal; tying the rare seeds to season-gated biome conditions (Serene Seasons biome-lock on certain saplings) makes these trees a seasonal resource, not just a worldgen aesthetic; seasonal reagent framing (M-16)
- from: dtterralith exotic wood logs (cedar/kapok/ebony) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood milling — exotic log → sawdust/pulp is the same chain as vanilla wood; no distinctive loop advancement; dtterralith's value is in the biome-seasonal angle, not wood processing

## attributefix   [anchors: support/fix (1)]
- LEAVE — pure attribute-cap patch, no items, blocks, or methods; no weave surface.

## geckolib   [anchors: support/library (1)]
- LEAVE — animation/rendering API, no player-facing items or methods; no weave surface.

## mcwfences   [anchors: decoration/support (1)]
- from: mcwfences metal fence variants (iron/steel/bastion/cathedral/acorn) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal fences crush back to nuggets + xp nugget (lossy) — part of a wholesale deco-family recycle pass; the metal variants specifically earn this because they represent real refined metal, not just wood
- from: mcwfences:hedge variants (leaf fences) | via: create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: hedge/leaf fences are organic deco with no meaningful metal-recover analog; milling leaves→bonemeal is trivial and doesn't serve the loop; the interesting M-04 hook is the metal variants only

## creativecore   [anchors: support/library (1)]
- LEAVE — GUI/API library, no player-facing items or methods; no weave surface.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter, no player-facing content; no weave surface.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build-engine dependency; its weave surface belongs entirely to MineColonies, not here.

## jeed   [anchors: support/client-UI (1)]
- LEAVE — JEI display provider only; its two "recipe-types" are viewer categories, not processable methods; no weave surface.

## modulargolems   [anchors: Create (1)]
- from: boss/combat drop metals (Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble | to: survival | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies demand boss-tier metals — cursium from the Cataclysm bosses, dragonsteel from Ice&Fire drakes — making endgame automatons a direct combat-progression reward and closing the combat→construct loop
- from: ars_nouveau:source_gem / irons_spellbooks:arcane_essence | via: modulargolems:golem_assemble (upgrade slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a golem upgraded with an arcane-essence core gains spell-casting behavior (sorcerer-golem concept) — tying golemancy to magic-production means a magic player can contribute to the construct line and makes golems a cross-system bridge piece
- from: modulargolems golem parts (completed golem) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; golems are technically sellable as automatons but the distinctive loop is combat→construct→magic, not a sell link

== CHUNK COMPLETE ==
