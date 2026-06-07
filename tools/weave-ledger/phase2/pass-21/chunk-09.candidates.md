# Phase 2 candidates — chunk-09

## beachparty   [anchors: survival (1)]
- from: beachparty:coconut_cocktail / beachparty:honey_cocktail / other cocktails | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a tropical cocktail is exactly the kind of high-effort drink a coastal bar would price in coin — luxury goods feeding the economy loop
- from: beachparty:mini_fridge ice output (packed ice / snow blocks) | via: create:compacting or as feedstock for cold-chain recipes | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the fridge requires no power and outputs ice trivially (near-free cold source); making ice a meaningful Create input would require other mods' cold chains to exist, which they don't — the link is too thin and supply-side arbitrage-prone
- from: beachparty:coconut / beachparty:open_coconut | via: create:milling / create:crushing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Millstone grinds open coconut into coconut flour / oil — a food-processing intermediate that feeds createfood or farmersdelight recipes, routing the tropical harvest into the Create spine
- REWORK: none (single-anchor mod, no existing cross-system connections to review)

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot chests (onboard structures) | via: loot-seed | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: reaching a sky whale demands a working airship — seed their loot with a Create Aeronautics blueprint shard or structural alloy (M-23 material) so boarding one yields a real ship-tech reward, making aeronautics the intended vehicle for reaching them
- from: sky_whale_ship loot chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: whale loot seeded with coins or a rare trade-good turns sky-whale raiding into a bounty run, feeding the combat→economy loop (M-14 combat reward pays coin)
- from: sky_whale_ship loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the whales are explicitly whimsical-adventure, not arcane — seeding them with magic reagents clashes tonally; the aeronautics + economy loot is already two anchors; adding a magic seed is forcing a third and dilutes the payoff theme
- REWORK: none (single-anchor; no existing cross-system connections)

## bettermodsbutton   [anchors: support/client UI]
- LEAVE — pure client UI mod; zero items, zero methods, zero loot; nothing to weave.

## packetfixer   [anchors: support/compat-perf]
- LEAVE — pure network-layer fix; zero items, zero methods, zero loot; nothing to weave.

## createfood   [anchors: survival, Create (2)]
- from: createfood finished dishes (pizza, cheesecake, milkshake, ice cream) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a multi-step Create-cooked dish is the perfect coin-earner — the baker specialises, sells by the slice, and the economy loop closes (production → economy)
- from: createfood:apple_jam_block / berry jams | via: expandeddelight:juicing or create:milling (feedstock) | to: survival (depth / cross-mod) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: createfood already sits firmly on both survival and Create; tying it to another food mod's method deepens the food web but doesn't cross a new system pillar — it stays inside the same two anchors, so this is deepening, not a new anchor
- REWORK: OK — connections sound (survival + Create already well-established; adding economy via M-09 is the natural 3rd)

## companion   [anchors: support/QoL]
- LEAVE — pure pet-behavior mod; zero items, zero methods, zero loot; nothing to weave.

## lithium   [anchors: support/performance]
- LEAVE — pure server tick optimization; zero items, zero methods, zero loot; nothing to weave.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: frozen flesh from an undead biome variant is a natural transmutation reagent — the spirit-fire purifies it into a cold essence, wiring the bestiary into the arcane spine
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: magma-variant flesh already reads as elemental; a spirit-fire transmutes it into a heat/fire essence — coherent kill-loot→magic sink
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart is a blight reagent — an Ars Nouveau imbuement chamber could use it as a corruption catalyst for a dark-aligned spell component, advancing the arcane loop
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: create:haunting (soul-fire transmutation) is thematically fire/soul, not ice — routing frozen flesh through haunting produces a tonal mismatch; the magic sink via spirit_fire is the cleaner path
- from: rottencreatures themed drops (all) | via: bountiful board → numismatics | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Undead Miner / Dead Beard / Immortal are distinct bounty targets — pay coin for a variant head or themed drop, making nightly combat pay into the economy loop
- REWORK: none (single-anchor; no existing cross-system connections)

## lionfishapi   [anchors: support/library]
- LEAVE — animation/entity rendering API; zero items, zero methods, zero loot; nothing to weave.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a giant crab's claw already brews a reach-extending potion — it's mob-loot with magical character; routing it through an imbuement chamber as a reach/aquatic magic reagent is thematically coherent
- from: friendsandfoes copper deco (copper_button / oxidized_lightning_rod / copper_golem_head) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the copper buttons and oxidized copper set crush back to copper nuggets + an XP nugget — the whole vanilla-plus copper set folds into Create's metal economy; players can recycle deco they don't need
- from: friendsandfoes Wildfire / Illusioner / Iceologer drops | via: loot-seed → numismatics / bountiful | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: friendsandfoes hostile mobs don't currently define unique drops beyond vanilla loot — loot-seeding with coin is thin without an anchor item; the crab_claw magic route is the stronger one-weave; forcing a second is over-engineering for this mod's low loot specificity
- REWORK: none (single-anchor; no existing cross-system connections)

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry liquid XP (experience fluid) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: liquid XP is factory-bottled experience — feeding it into Iron's Spellbooks' alchemist cauldron to brew a high-level spell scroll or upgrade a focus bridges the industrial XP factory to the magic spine; the FE/XP theme fits M-17's electric-bridge character (factory energy powering magic)
- from: create_enchantment_industry liquid XP | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the enchanting_apparatus already accepts standard XP semantics; liquid XP feeding it is plausible but the connection is loose — the more specific M-17 bridge (FE-scale XP into a magic-side spell craft) is the stronger pairing; this is a weaker duplicate
- from: create_enchantment_industry:mechanical_grindstone | via: create_enchantment_industry:grinding | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the mechanical grindstone is already a Create-side machine (automated grindstone); adding sequenced-assembly depth is possible but this mod is already anchored on Create — it doesn't cross to a new system; this is same-anchor deepening
- REWORK: REWORK — the mod sits on a single Create anchor; its liquid XP output is the obvious bridge to the magic pillar (M-17 / M-10) but no link is currently authored; the accepted M-17 candidate above should be elevated

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (as boss-key input) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ice crystal is a non-renewable boss artifact — requiring it as a keystone in a high-tier Create sequenced assembly (e.g. a refrigeration component or cryo-processing part) is exactly the pack's design: boss drops gate complex tech
- from: mowziesmobs:earthrend_gauntlet / wrought metal drops | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's forged-iron artifact gates a mechanical component — the boss-fights become the unlock condition for advanced Create machinery (boss-key unlock M-15)
- from: mowziesmobs boss artifacts (ice_crystal / sol_visage / wrought helm) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: mythic tribal artifacts from boss encounters transmute into potent magic catalysts in the arcane web — fitting the "boss drop feeds magic" loop and giving the drops a second use path beyond tech-gating
- from: mowziesmobs:elokosa_paw (moon-themed Elokosa cat drops) | via: magic ritual / lunar-event gate | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elokosa is a lunar-behaving mob (its paw appears in moon-phase variants per the item names) — seeding a ritual or imbuement that accepts the paw only during a moon event ties the bestiary into the celestial/lunar web
- from: mowziesmobs boss drops | via: bountiful board → numismatics | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: paying coin for a non-renewable boss kill devalues the artifact and misaligns the reward — the boss drop should be a gate ingredient (M-15 / M-06 above) not a fungible coin source; combat bounty at endgame tier risks short-circuiting the scarcity loop
- REWORK: none (single-anchor; no existing cross-system connections)

## configuration   [anchors: support/library]
- LEAVE — config-screen library; zero items, zero methods, zero loot; nothing to weave.

## afk-sleep-1.3.2   [anchors: support/QoL]
- LEAVE — AFK sleep percentage fix; zero items, zero methods, zero loot; nothing to weave.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure/worldgen overhaul only; zero items, zero loot tables, no methods; no content surface to weave.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charge method) / createaddition:tesla_coil | via: createaddition:charging → irons_spellbooks magic gear (focus / battlemage gear) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks battlemage gear and magical focuses that hold an FE charge are topped up by the tesla coil or charging station — the electric layer on the Create spine literally powers magic gear; a player needs both systems running
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning → tfmg distillation or aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: bioethanol refined from farmed seeds is an alternative propulsion fuel alongside diesel — the farm→crop→oil→engine supply chain is an agri-based aeronautics fuel loop (M-13 fuel → propulsion)
- from: createaddition:electrum_ingot | via: create:pressing → structural/electrical component | to: create (depth) | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: electrum is createaddition's own alloy used for wires/rods — routing it through pressing is same-system deepening within Create; it doesn't cross to a new pillar; not a weave candidate
- from: createaddition:seed_oil | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: seed oil as a sellable good is too thin — it's an intermediate fuel, not a luxury good; the M-09 luxury-good sell is better reserved for finished dishes or aged goods; reject as low-signal
- REWORK: REWORK — sits on a single Create anchor despite two clear external bridges (M-17 electric→magic, M-13 bioethanol→aeronautics); the accepted candidates above should be the priority lifts

## accessories_compat_layer   [anchors: support/compat-shim]
- LEAVE — compat shim for Accessories/Curios/Trinkets slot translation; zero items, zero methods, zero loot; nothing to weave.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy_helmet (Heavy set) | via: create:mechanical_crafting (require pressed plates) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy set (max armor/toughness) demanding Create-pressed iron plates to craft pulls endgame armor into the industrial spine — a player needs a running Create operation to outfit in the best non-netherite protection
- from: immersive_armors:divine_chestplate / divine_helmet (Divine set) | via: ars_nouveau:armor_upgrade | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Divine set (once-per-minute damage block) finishing through an arcane armor-upgrade step makes it genuinely magical — the survival loadout's apex armor is locked behind the magic pillar, weaving the two systems at the progression apex
- from: immersive_armors:steampunk_* set | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Steampunk set's aesthetic is a perfect Create-gating candidate — brass fittings + pressed plates crafted in a Mechanical Crafter makes the steampunk flavor explicitly industrial; the tone match is the strongest in the set
- from: immersive_armors armor sets as sellable smith goods | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: armor sells thinly in practice — players keep it, they don't sell it; the M-09 luxury sell works for consumed goods (food, drink); equipping gear is not a consumption loop; reject as noted in dossier
- REWORK: none (single-anchor; no existing cross-system connections)

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco/tools (copper_lantern, copper_bars, copper_chain, copper armor) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the entire copper deco palette (bars, chains, lanterns, worn tools) crushed back to copper nuggets + XP nugget ties the expansion cleanly to Create's copper recycling economy — players don't trash old copper gear, they feed it to the crusher
- from: copperagebackport:copper_golem_statue (Copper Golem logistics behavior) | via: thematic / config-tie — Copper Golem hauls between copper chests, a proto-logistics mob | to: economy/aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the golem's logistics role is thematic but doesn't route through any named method in the palette — no method tie, no clean motif match; reject-for-review (no-motif); forced as "logistics" when it's a simple item-mover
- REWORK: none (single-anchor; no existing cross-system connections)

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / expandeddelight:deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore is a mined resource — running it through a Create crusher yields salt dust (+ a byproduct, e.g. mineral traces) following the exact ore-doubling pattern; a millstone for a smaller yield keeps the basics light
- from: expandeddelight:cheese_wheel / expandeddelight:goat_cheese_wheel (time-aged) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese is time-gated by cask aging — it's a genuine luxury good with a production delay; selling aged wheels for coin is the natural M-09 move, and regional salt scarcity feeds the scarcity→pressure→production loop
- from: expandeddelight:cinnamon (cinnamon dust / cinnamon bark) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark milled in a Millstone yields cinnamon dust (a spice intermediate) — the processing-chain pull brings the new spice crop into the Create cooking web, feeding createfood or farmersdelight recipes that call for c:dusts/cinnamon
- from: expandeddelight:chili_pepper / chili crops | via: create:milling → chili powder → Cold Sweat / survival heat mechanic | to: survival (depth) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 requires a Serene Seasons seasonal gate; chili is a farmland crop without a season-locked spawn window, so this isn't a true seasonal reagent; the seasonal read is a stretch — reject
- REWORK: none (single-anchor; no existing cross-system connections)

== CHUNK COMPLETE ==
