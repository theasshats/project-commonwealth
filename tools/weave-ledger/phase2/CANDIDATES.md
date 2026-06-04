# Phase 2.x — master candidate table (convergence accumulator)

_Built by `scripts/phase2-merge.py` over **4 pass(es)**: pass-00, pass-01, pass-02, pass-03. `times` = how many independent passes proposed this candidate (confidence); `opus` = an Opus run also proposed it. Re-run after every pass._

**525 unique candidates** (deduped on mod + item + pillar + motif).

| times | opus | mod | from → | via (method) | pillar | motif | consensus |
|--:|:--:|---|---|---|---|---|---|
| 4 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:ancient_anima | ars_nouveau:imbuement (highest-tie | magic | M-10 | ACCEPT |
| 4 |  | `create_new_age` | create_new_age:thorium_ore (scarce biome-gated | create:crushing → numismatics mint | economy | M-08 | ACCEPT |
| 4 | ✓ | `deeperdarker` | deeperdarker:soul_dust / soul_crystal (Othersi | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 4 |  | `dynamictreesplus` | dynamictreesplus:saguaro_fruit | create:milling | create | M-12 | ACCEPT |
| 4 |  | `dynamictreesplus` | dynamictreesplus:brown_mushroom_cap / red_mush | farmersdelight:cutting | create | M-12 | ACCEPT |
| 4 |  | `dynamictreesplus` | dynamictreesplus:saguaro_fruit | numismatics sell | economy | M-09 | REJECT |
| 4 |  | `endrem` | endrem:undead_eye | occultism:ritual (wither skeleton  | magic | M-11 | ACCEPT |
| 4 |  | `endrem` | endrem:corrupted_eye | create:sequenced_assembly (derpack | create | M-06 | REJECT |
| 4 | ✓ | `expandeddelight` | expandeddelight:salt_ore / deepslate_salt_ore | create:crushing | create | M-03 | ACCEPT |
| 4 |  | `expandeddelight` | expandeddelight:cinnamon (c:dusts/cinnamon) | create:milling | create | M-12 | ACCEPT |
| 4 |  | `expandeddelight` | expandeddelight:cheese_wheel / goat_cheese_whe | numismatics sell | economy | M-09 | ACCEPT |
| 4 | ✓ | `farm_and_charm` | farm_and_charm:barley / oat (grains) | create:milling | create | M-12 | ACCEPT |
| 4 |  | `farm_and_charm` | farm_and_charm:butter / eggs / meat surplus (a | numismatics sell | economy | M-09 | ACCEPT |
| 4 |  | `mowziesmobs` | mowziesmobs:ice_crystal (Frostmaw drop) | create:sequenced_assembly (gate in | create | M-15 | ACCEPT |
| 4 |  | `sereneseasons` | out-of-season produce (scarce) | numismatics sell | economy | M-09 | REJECT |
| 4 |  | `smokeleafindustries` | refined extracts / gummies (finished consumabl | numismatics sell / dealer-trade br | economy | M-09 | ACCEPT |
| 4 |  | `tfmg` | tfmg:diesel / tfmg:gasoline / tfmg:lpg (TFMG d | TFMG combustion engine → Aeronauti | aeronautics | M-13 | ACCEPT |
| 4 |  | `tfmg` | tfmg:steel_ingot (iron → Industrial Blast Furn | numismatics mint | economy | M-08 | ACCEPT |
| 4 |  | `tide` | tide raw fish output (c:foods/raw_fish, bulk s | farmersdelight:cutting → create:mi | create | M-12 | ACCEPT |
| 4 | ✓ | `underground_village` | Stoneholm villager trades (loot=yes, villagers | numismatics villager-trade seating | economy | M-21 | REJECT |
| 4 | ✓ | `undergroundworlds` | undergroundworlds:spider_fang (Black Recluse d | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 4 | ✓ | `undergroundworlds` | undergroundworlds:temple_bricks / pyramid_bric | create:crushing | create | M-04 | ACCEPT |
| 3 |  | `alexsmobs` | alexsmobs:bear_dust (rare, combat drop) | occultism:ritual | magic | M-02 | ACCEPT |
| 3 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:void_thorns (from V | occultism:ritual (high-tier summon | magic | M-11 | ACCEPT |
| 3 |  | `brazil_legends` | brazil_legends:capelobo_claw | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 3 |  | `brazil_legends` | brazil_legends:amber_shard | numismatics sell | economy | M-09 | REJECT |
| 3 |  | `cold_sweat` | cold_sweat:hearth (the multiblock climate-cont | create:mechanical_crafting (gate i | create | M-05 | ACCEPT |
| 3 |  | `copperagebackport` | Copper Golem (minecraft:copper_golem_statue, l | thematic adjacency to Create logis | aeronautics |  | REJECT |
| 3 |  | `create_new_age` | create_new_age:energising (method: the Energis | create_new_age:energising of a mag | magic | M-17 | ACCEPT |
| 3 |  | `create_new_age` | create_new_age:corium (reactor waste) | occultism:spirit_fire | magic | M-11 | REJECT |
| 3 | ✓ | `createaddition` | createaddition:charging method + createadditio | createaddition:charging → irons_sp | magic | M-17 | ACCEPT |
| 3 |  | `createaddition` | createaddition:electrum_ingot / c:ingots/elect | numismatics mint | economy | M-08 | REJECT |
| 3 |  | `createimmersivetacz` | createimmersivetacz:twelve_gauge_shell / creat | numismatics sell/trade | economy | M-09 | ACCEPT |
| 3 |  | `drones` | drones:ion_thruster | create:sequenced_assembly | create | M-06 | ACCEPT |
| 3 |  | `drones` | drones:iron_rotor | create:mechanical_crafting (brass  | create | M-05 | ACCEPT |
| 3 |  | `drones` | drones:pocket_drone (assembled) | numismatics sell | economy | M-09 | REJECT |
| 3 |  | `endrem` | endrem:nether_eye | ars_nouveau:imbuement (fire charge | magic | M-10 | ACCEPT |
| 3 |  | `enhancedcelestials` | enhancedcelestials:meteor | create:crushing | create | M-04 | ACCEPT |
| 3 | ✓ | `enhancedcelestials` | Blood/Harvest/Blue Moon event state (no item) | any recipe-type method | magic | M-22 | ACCEPT |
| 3 |  | `friendsandfoes` | friendsandfoes:crab_claw | ars_nouveau:imbuement OR occultism | magic | M-02 | ACCEPT |
| 3 |  | `immersive_armors` | immersive_armors:heavy_chestplate set (Heavy / | create:pressing (plates) + create: | create | M-05 | ACCEPT |
| 3 |  | `immersive_armors` | immersive_armors:divine_chestplate set | ars_nouveau:enchanting_apparatus | magic | M-10 | ACCEPT |
| 3 |  | `oceansdelight` | oceansdelight:elder_guardian_roll / fugu_slice | numismatics sell | economy | M-09 | ACCEPT |
| 3 |  | `rottencreatures` | rottencreatures:frozen_rotten_flesh (Frostbitt | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 3 |  | `sereneseasons` | season_sensor redstone output | create:deploying / contraption log | create | M-16 | ACCEPT |
| 3 |  | `smokeleafindustries` | raw hemp / buds | create:milling | create | M-12 | REJECT |
| 3 | ✓ | `tide` | tide exotic fish (abyss_angler, void catches) | occultism:ritual / ars imbuement | magic | M-02 | REJECT |
| 3 |  | `travelersbackpack` | travelersbackpack:netherite / travelersbackpac | create:sequenced_assembly | create | M-06 | ACCEPT |
| 2 | ✓ | `aileron` | aileron Elytra enchantments | ars_nouveau:enchanting_apparatus / | magic | M-10 | REJECT |
| 2 | ✓ | `alexsmobs` | alexsmobs:ambergris (rare whale-adjacent drop  | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 2 |  | `alexsmobs` | alexsmobs:ender_residue (End biome drop, exoti | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 2 |  | `alexsmobs` | alexsmobs:skunk_spray (environmental, common) | create:mixing | create | M-12 | REJECT |
| 2 |  | `alexsmobs` | alexsmobs mob drops (diverse set) | numismatics / bountiful board | economy | M-14 | ACCEPT |
| 2 | ✓ | `alexsmobs` | alexsmobs:void_worm_beak (+ void_worm cartilag | a complex Create/tech recipe gated | create | M-15 | ACCEPT |
| 2 | ✓ | `alexsmobs` | alexsmobs:ambergris | numismatics vendor/price | economy | M-09 | ACCEPT |
| 2 |  | `ars_nouveau` | crop surplus / mob death events (farm mods' or | ars_nouveau:agronomic_sourcelink / | survival | M-02 | ACCEPT |
| 2 |  | `astikorcartsredux` | plow/reaper (iron-bearing implements) | create:pressing → iron sheets as c | create | M-05 | REJECT |
| 2 | ✓ | `bakery` | bakery wheat → flour path | create:milling | create | M-12 | ACCEPT |
| 2 |  | `bakery` | bakery baked goods (surplus production) | ars_nouveau:imbuement (Vitalic sou | magic | M-10 | REJECT |
| 2 |  | `bakery` | bakery:strawberry_cake / chocolate_gateau / li | numismatics sell — high-effort mul | economy | M-09 | ACCEPT |
| 2 | ✓ | `bakery` | wheat (crop input) | create:milling — mill wheat to flo | create | M-12 | ACCEPT |
| 2 |  | `betterdungeons` | betterdungeons loot tables (datapack-overridab | numismatics coin seeding | economy | M-08 | ACCEPT |
| 2 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:obsidian_heart | create:sequenced_assembly (+ upstr | create | M-06 | ACCEPT |
| 2 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:blazing_eye | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 2 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:obsidian_heart (Nig | create:sequenced_assembly (as requ | create | M-15 | ACCEPT |
| 2 |  | `bountiful` | bountiful:bounty (payout reward slot) | numismatics coin as the default bo | economy | M-14 | ACCEPT |
| 2 |  | `bountiful` | bountiful:decree (objective pool) configured t | bountiful objective → numismatics  | create | M-14 | ACCEPT |
| 2 |  | `bountiful` | bountiful:decree configured to demand magic re | bountiful objective → numismatics  | magic | M-14 | ACCEPT |
| 2 |  | `brazil_legends` | brazil_legends:big_tongue | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 2 |  | `cold_sweat` | cold_sweat:filled_waterskin (hot/cold) | create:filling (already exists as  | create | M-12 | REJECT |
| 2 |  | `cold_sweat` | cold_sweat:goat_fur / chameleon_molt / hoglin  | numismatics sell — insulated gear  | economy | M-09 | REJECT |
| 2 |  | `companions` | Crystallized Blood / soul gems | occultism:spirit_fire or ars_nouve | magic | M-11 | ACCEPT |
| 2 |  | `cookingforblockheads` | Oven / Fridge / Sink (flagship kitchen applian | create:mechanical_crafting or crea | create | M-05 | ACCEPT |
| 2 |  | `copperagebackport` | copper deco blocks (copper_chest, copper_bars, | create:crushing | create | M-04 | ACCEPT |
| 2 |  | `create_enchantment_industry` | create_enchantment_industry:experience_bucket  | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 2 |  | `create_ironworks` | create_ironworks:tin_ingot / c:ingots/tin (sca | create:crushing → numismatics mint | economy | M-08 | ACCEPT |
| 2 |  | `create_ironworks` | create_ironworks:bronze_ingot / c:ingots/bronz | numismatics mint (M-08 extension — | economy | M-08 | ACCEPT |
| 2 |  | `createmetalwork` | createmetalwork processed metals (molten_<scar | numismatics coin mint — refined mo | economy | M-08 | ACCEPT |
| 2 |  | `createnuclear` | createnuclear:autunite (glowing uranium-bearin | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 2 |  | `deeperdarker` | deeperdarker:heart_of_the_deep (boss drop — Wa | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 2 | ✓ | `deeperdarker` | deeperdarker gloomslate / sculk_stone block fa | create:crushing | create | M-04 | ACCEPT |
| 2 | ✓ | `deeperdarker` | deeperdarker:heart_of_the_deep | a complex Create/aeronautics recip | create | M-15 | ACCEPT |
| 2 |  | `deeperdarker` | deeperdarker:warden_carapace / sculk_bone | numismatics sell | economy | M-09 | REJECT |
| 2 |  | `dndesires` | dndesires milkshakes (chocolate_milkshake, glo | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `dndesires` | dndesires:cardboard_package_* (logistics packa | aeronautics ship logistics / M-13  | aeronautics | M-13 | REJECT |
| 2 |  | `dndesires` | dndesires:chocolate_milkshake / glowberry_milk | numismatics sell — processed Creat | economy | M-09 | ACCEPT |
| 2 |  | `endrem` | endrem:magical_eye / endrem:old_eye / remainin | any complex method | create | M-06 | REJECT |
| 2 |  | `enhancedcelestials` | enhancedcelestials:space_moss_block | ars_nouveau:imbuement (source-gem  | magic | M-10 | ACCEPT |
| 2 |  | `expandeddelight` | expandeddelight:cranberry / sweet_potato (seas | create:milling or farmersdelight:c | create | M-16 | REJECT |
| 2 |  | `farm_and_charm` | farm_and_charm:barley (grain) | vinery:apple_mashing or extradelig | economy | M-12 | REJECT |
| 2 | ✓ | `friendsandfoes` | copper deco blocks (copper_button, lightning_r | create:crushing | create | M-04 | ACCEPT |
| 2 |  | `friendsandfoes` | friendsandfoes:copper_golem_head | create:crushing | create | M-04 | REJECT |
| 2 |  | `immersive_armors` | immersive_armors:bone_chestplate set (Bone tie | create:pressing / mechanical_craft | create | M-05 | REJECT |
| 2 |  | `immersive_armors` | finished immersive_armors sets | numismatics sell | economy | M-09 | REJECT |
| 2 |  | `modulargolems` | golem body (boss-metal tier — dragonsteel, cur | modulargolems:golem_assemble consu | survival | M-02 | ACCEPT |
| 2 |  | `modulargolems` | golem slot-upgrade items | occultism:spirit_fire / ars_nouvea | magic | M-10 | ACCEPT |
| 2 |  | `modulargolems` | modulargolems golem assembly (all tiers) | create:sequenced_assembly (already | create | M-06 | REJECT |
| 2 |  | `mowziesmobs` | mowziesmobs:earthrend_gauntlet (Wroughtnaut dr | create:sequenced_assembly (gate in | create | M-06 | ACCEPT |
| 2 |  | `mowziesmobs` | mowziesmobs:sol_visage (Barako/Barakoa drop) | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 2 |  | `mowziesmobs` | mowziesmobs:elokosa_paw (crescent / gibbous /  | ars_nouveau:imbuement OR magic met | magic | M-22 | ACCEPT |
| 2 |  | `mowziesmobs` | mowziesmobs (boss kills) | bountiful bounty → numismatics | economy | M-14 | REJECT |
| 2 |  | `mushroomquest` | rare/mythical mushroom caps (e.g. agarikon, my | farmersdelight:cooking OR extradel | create | M-12 | ACCEPT |
| 2 |  | `mushroomquest` | deadly / effect-bearing mushroom caps (poisono | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 2 |  | `mushroomquest` | mushroomquest rare / mythical mushroom caps (a | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `mushroomquest` | mushroomquest deadly / mythical mushroom caps | occultism:spirit_fire or ars_nouve | magic | M-11 | REJECT |
| 2 | ✓ | `oceansdelight` | oceansdelight raw seafood intermediates (cut_t | create:cutting / farmersdelight:cu | create | M-12 | REJECT |
| 2 |  | `rottencreatures` | rottencreatures:corrupted_wart (generic undead | ars_nouveau:crush | magic | M-02 | ACCEPT |
| 2 |  | `rottencreatures` | rottencreatures:magma_rotten_flesh (magma-vari | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 2 |  | `rottencreatures` | rottencreatures mob heads (decorative blocks) | create:crushing | create | M-04 | REJECT |
| 2 |  | `samurai_dynasty` | samurai_dynasty Yokai drops (akaname_tongue, e | occultism:spirit_fire OR ars_nouve | magic | M-02 | ACCEPT |
| 2 |  | `samurai_dynasty` | samurai_dynasty:silver_ore / silver ingot | create:crushing (ore-doubling) | create | M-03 | REJECT |
| 2 |  | `samurai_dynasty` | samurai_dynasty:akaname_tongue / Yokai drops ( | occultism:spirit_fire or ritual | magic | M-02 | ACCEPT |
| 2 | ✓ | `sky_whale_ship` | whale-structure loot | loot-table → aeronautics destinati | aeronautics | M-15 | ACCEPT |
| 2 |  | `sky_whale_ship` | sky_whale_ship loot chests | numismatics coin drop | economy | M-09 | REJECT |
| 2 |  | `solonion` | golden_lunchbox (the tier-3 best food containe | create:mechanical_crafting | create | M-05 | ACCEPT |
| 2 |  | `solonion` | solonion:golden_lunchbox (top-tier food contai | create:mechanical_crafting | create | M-05 | ACCEPT |
| 2 |  | `solonion` | solonion:lunchbox | create:pressing / milling | create | M-05 | REJECT |
| 2 |  | `spawn` | spawn:clam (various colour variants, obtained  | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `spawn` | spawn seafood (general) | createfisheryindustry:bait_trap —  | create | M-12 | REJECT |
| 2 |  | `t_and_t` | village / fort structure loot (chest items) +  | numismatics trade / sell economy s | economy | M-21 | ACCEPT |
| 2 |  | `tfmg` | tfmg:aluminum_ingot / plastic | numismatics sell | economy | M-08 | REJECT |
| 2 |  | `tfmg` | tfmg:sulfur / saltpeter (c:dusts) | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 2 | ✓ | `tide` | tide rare/biome-locked fish (abyss_angler, voi | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `tide` | tide rare/biome-locked fish (e.g. tide:abyss_a | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `trailandtales_delight` | trailandtales_delight:cheese_wheel / cherry_ch | numismatics sell | economy | M-09 | ACCEPT |
| 2 |  | `trailandtales_delight` | trailandtales_delight:lantern_fruit (tagged it | create:milling | create | M-12 | ACCEPT |
| 2 |  | `trailandtales_delight` | trailandtales_delight:cheese_wheel | create_cheese:maturing | create | M-12 | REJECT |
| 2 |  | `travelersbackpack` | travelersbackpack:blank_upgrade / tank_upgrade | create:pressing | create | M-20 | REJECT |
| 2 | ✓ | `undergroundworlds` | undergroundworlds:desert_charm / antidote_flas | ars_nouveau:enchanting_apparatus / | magic | M-10 | REJECT |
| 2 |  | `undergroundworlds` | undergroundworlds:spider_fang | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 2 |  | `valarian_conquest` | valarian_conquest faction armor/weapon sets (k | create:pressing / mechanical_craft | create | M-05 | REJECT |
| 2 |  | `vc_gliders` | vc_gliders:paraglider_iron / _gold / _diamond  | create:pressing (metal sheets) + c | create | M-05 | ACCEPT |
| 2 |  | `vc_gliders` | vc_gliders:paraglider_diamond / paraglider_net | create:mechanical_crafting | create | M-05 | ACCEPT |
| 1 |  | `aeronautics_dyeable_components` | colored levitite/tire | create:toolbox_dyeing | create |  | REJECT |
| 1 |  | `alcohol_industry` | spirits/beer | extradelight:vat or extradelight:m | survival | M-12 | ACCEPT |
| 1 |  | `alcohol_industry` | alcohol_industry:beer / vodka / whiskey / tequ | numismatics vendor price | economy | M-09 | ACCEPT |
| 1 |  | `alcohol_industry` | alcohol_industry:alcohol_base (fluid) | extradelight:vat / ars_nouveau:imb | magic | M-10 | REJECT |
| 1 |  | `alexsmobs` | alexsmobs:void_worm_beak / void_worm_effigy (f | create:sequenced_assembly | create | M-06 | ACCEPT |
| 1 | ✓ | `alexsmobs` | alexsmobs:void_worm_beak / soul-flavored drops | occultism:ritual / spirit_fire | magic | M-11 | ACCEPT |
| 1 | ✓ | `alexsmobs` | alexsmobs mid mob-drops (bear_dust, skunk_spra | occultism:spirit_fire / ars imbuem | magic | M-02 | ACCEPT |
| 1 | ✓ | `alexsmobs` | alexsmobs mob bones/shells/dust (e.g. bear_dus | create:crushing / mixing | create | M-03 | ACCEPT |
| 1 | ✓ | `alexsmobs` | alexsmobs:banana / banana_peel (meme content) | any method | any |  | REJECT |
| 1 | ✓ | `alexsmobs` | alexsmobs:leafcutter_anthill (passive leaf→res | create:* automation | create |  | REJECT |
| 1 |  | `alexsmobs` | alexsmobs:ambergris (mid drop, whale-type mob) | occultism:spirit_fire | magic | M-02 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:ender_residue (mid/endgame drop, end | occultism:spirit_fire | magic | M-02 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:void_worm_beak (endgame — void worm  | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:bear_dust (everyday — common bear dr | create:crushing | create | M-03 | REJECT |
| 1 |  | `alexsmobs` | alexsmobs:banana (tropical food, renewable fro | farmersdelight:cooking or extradel | economy | M-12 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:ambergris (rare ocean-mob drop — spe | occultism:spirit_fire → spirit-rea | magic | M-11 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:ender_residue (void worm drop, endga | ars_nouveau:imbuement → arcane rea | magic | M-10 | ACCEPT |
| 1 |  | `alexsmobs` | alexsmobs:void_worm_beak (rare/endgame boss dr | create:crushing → exotic powder /  | create | M-02 | REJECT |
| 1 |  | `alexsmobs` | alexsmobs:banana / alexsmobs:acacia_blossom (e | farmersdelight:cutting or extradel | survival | M-12 | REJECT |
| 1 |  | `ars_nouveau` | ars_nouveau:archwood_log (archwood burns; Volc | ars_nouveau:imbuement (or haunting | create | M-19 | REJECT |
| 1 |  | `ars_nouveau` | ars_nouveau:source_gem | create:crushing (crush spent sourc | create | M-04 | REJECT |
| 1 |  | `ars_nouveau` | foreign essences / lapis / amethyst | ars_nouveau:imbuement → source_gem | magic | M-01 | ACCEPT |
| 1 |  | `ars_nouveau` | ars_nouveau:source_gem (magic currency) | numismatics vendor price | economy | M-09 | REJECT |
| 1 |  | `ars_nouveau` | ars_nouveau archwood surplus (archwood logs/pl | create:milling → Ars recipes | create | M-12 | REJECT |
| 1 |  | `ars_nouveau` | `ars_nouveau:source_gem` ↔ foreign essences | `ars_nouveau:imbuement` | magic | M-01 | ACCEPT |
| 1 |  | `ars_nouveau` | spell scrolls / source gems | `numismatics` vendor | economy | M-09 | REJECT |
| 1 |  | `astikorcartsredux` | astikorcartsredux supply cart (cargo hauling) | numismatics vendor — a filled supp | economy | M-21 | REJECT |
| 1 | ✓ | `bakery` | bakery finished goods (cakes, tarts, jams, bre | numismatics sell | economy | M-09 | ACCEPT |
| 1 | ✓ | `bakery` | bakery surplus crops/baked goods | ars_nouveau agronomic/vitalic sour | magic | M-02 | REJECT |
| 1 |  | `bakery` | bakery:apple_jam / bakery:chocolate_jam (high- | ars_nouveau:imbuement as alchemica | magic | M-10 | REJECT |
| 1 | ✓ | `bakery` | finished cakes/tarts/cupcakes | numismatics sell (or MineColonies  | economy | M-09 | ACCEPT |
| 1 | ✓ | `bakery` | surplus baked goods | Ars agronomic/vitalic sourcelink | magic | M-02 | REJECT |
| 1 | ✓ | `betterdungeons` | dungeon chest loot | loot-table seeding of magic reagen | magic | M-02 | REJECT |
| 1 | ✓ | `betterdungeons` | dungeon chest loot | loot-table seeding of numismatics  | economy | M-08 | REJECT |
| 1 |  | `betterdungeons` | betterdungeons loot tables | bountiful:bountyboard decree targe | economy | M-14 | ACCEPT |
| 1 |  | `betterdungeons` | betterdungeons loot tables | loot-table seeding of Ars/Occultis | magic | M-02 | REJECT |
| 1 |  | `bits_n_bobs` | bits_n_bobs tile/chair deco blocks | create:crushing → crushed stone +  | create | M-04 | ACCEPT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:blazing_eye | create:sequenced_assembly or boss- | create | M-06 | ACCEPT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:ancient_anima | bountiful bounty (premium objectiv | economy | M-14 | ACCEPT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:obsidian_heart | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:brimstone_nectar /  | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `bosses_of_mass_destruction` | boss reagents (any) | numismatics sell or bountiful boun | economy | M-14 | REJECT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:blazing_eye (Nether | occultism:ritual | magic | M-11 | REJECT |
| 1 |  | `bosses_of_mass_destruction` | bosses_of_mass_destruction:void_thorns (Void B | bountiful bounty board → numismati | economy | M-14 | ACCEPT |
| 1 |  | `bosses_of_mass_destruction` | all boss drops | numismatics bounty (M-14) | economy | M-14 | REJECT |
| 1 |  | `bountiful` | bountiful:decree configured to demand Farmer's | bountiful objective → numismatics  | survival | M-14 | ACCEPT |
| 1 |  | `bountiful` | bountiful:bounty (reward slot) → direct Ars so | bountiful reward | magic | M-01 | REJECT |
| 1 | ✓ | `bountiful` | bounty reward payout | bountiful board → numismatics (set | economy | M-14 | ACCEPT |
| 1 | ✓ | `bountiful` | mob-kill bounty objectives (Decrees pointed at | bountiful board consumes kills → p | organic/combat | M-14 | ACCEPT |
| 1 | ✓ | `bountiful` | farm/fish/hunt bounty objectives (Decrees poin | bountiful board consumes goods → p | survival | M-14 | ACCEPT |
| 1 | ✓ | `bountiful` | any-pillar surplus as a bounty objective (Decr | bountiful board consumes the good  | create | M-14 | ACCEPT |
| 1 |  | `bountiful` | bountiful reward pool (configurable) | numismatics coin payout (set rewar | create | M-14 | ACCEPT |
| 1 |  | `bountiful` | bountiful objective pool (configurable) | Create-processed goods as required | create | M-12 | ACCEPT |
| 1 |  | `bountiful` | bountiful objective pool | magic reagents as required items ( | magic | M-02 | ACCEPT |
| 1 |  | `bountiful` | bountiful objective pool | farm/harvest outputs from Serene S | survival | M-16 | REJECT |
| 1 |  | `brazil_legends` | brazil_legends:amber_shard | create:crushing (→ fine amber powd | create | M-03 | ACCEPT |
| 1 |  | `brazil_legends` | brazil_legends:amber_shard | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 1 |  | `brazil_legends` | brazil_legends:big_tongue (Cuca/folklore drop) | occultism:ritual | magic | M-11 | REJECT |
| 1 |  | `brazil_legends` | brazil_legends:amber_shard / amber_pearl | occultism:spirit_fire | magic | M-11 | ACCEPT |
| 1 |  | `brazil_legends` | brazil_legends:capelobo_claw | bountiful board → numismatics payo | economy | M-14 | ACCEPT |
| 1 |  | `brazil_legends` | brazil_legends:bottle_with_saci | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `brazil_legends` | brazil_legends:bloodmoon_sickle | create:haunting | create | M-19 | REJECT |
| 1 |  | `brazil_legends` | brazil_legends:alteration_spell_book (blank va | ars_nouveau:enchanting_apparatus | magic | M-10 | REJECT |
| 1 | ✓ | `brazil_legends` | capelobo_claw / big_tongue / amber_shard | occultism:spirit_fire / ars_nouvea | magic | M-11 | ACCEPT |
| 1 | ✓ | `brazil_legends` | amber_shard / amber_pearl | numismatics sell | economy | M-09 | ACCEPT |
| 1 | ✓ | `brazil_legends` | themed spell_book items | ars_nouveau glyph/caster integrati | magic | M-01 | REJECT |
| 1 |  | `cbc_at` | cbc_at heavy-autocannon / rocket-pod (endgame  | boss-drop gate (M-15) | create | M-15 | ACCEPT |
| 1 |  | `cbc_at` | cbc_at munitions (gunpowder/propellant chain) | tfmg:coking or create:mixing (chem | create | M-12 | REJECT |
| 1 |  | `chefsdelight` | chefsdelight Cook/Chef villager meal sales (Ro | numismatics vendor price (KubeJS t | economy | M-09 | ACCEPT |
| 1 |  | `chefsdelight` | chefsdelight Cook villager profession | M-21 (villager trade → numismatics | economy | M-21 | REJECT |
| 1 |  | `cold_sweat` | cold_sweat:boiler + cold_sweat:icebox | create:mechanical_crafting (gate o | create | M-05 | ACCEPT |
| 1 |  | `cold_sweat` | cold_sweat:goat_fur / cold_sweat:chameleon_mol | create:milling (→ insulation fiber | create | M-12 | ACCEPT |
| 1 |  | `cold_sweat` | cold_sweat:goat_fur_chestplate / cold_sweat:ch | numismatics sell | economy | M-09 | ACCEPT |
| 1 |  | `cold_sweat` | cold_sweat:soul_stalk (a cold_sweat plant drop | ars_nouveau:imbuement or occultism | magic | M-10 | REJECT |
| 1 |  | `cold_sweat` | cold_sweat:goat_fur / chameleon_molt | occultism:spirit_fire transmutatio | magic | M-11 | REJECT |
| 1 |  | `cold_sweat` | cold_sweat:boiler / icebox fueling | create:filling — pipe Create fluid | create | M-12 | REJECT |
| 1 | ✓ | `cold_sweat` | hearth / boiler (climate machines) | create:filling + Create brass/casi | create | M-05 | ACCEPT |
| 1 | ✓ | `cold_sweat` | chameleon/hoglin/goat_fur insulated armor | numismatics sell/price | economy | M-09 | ACCEPT |
| 1 | ✓ | `cold_sweat` | goat_fur / chameleon_molt (insulation reagents | create:crushing or ars imbuement | create | M-10 | REJECT |
| 1 |  | `companions` | companions:relic_gold (boss drop of the Sacred | numismatics vendor (sell for coin) | economy | M-09 | ACCEPT |
| 1 |  | `companions` | companions:copper_coin / nether_coin / end_coi | numismatics exchange (bridge to pa | economy |  | REJECT |
| 1 |  | `companions` | voltaic pillar / tesla coil deco blocks | create:crushing | create | M-04 | REJECT |
| 1 |  | `companions` | companions:crystallized_blood (Soul Furnace ou | occultism:spirit_fire or occultism | magic | M-11 | ACCEPT |
| 1 |  | `companions` | companions:soul_gem (Soul Furnace diamond outp | ars_nouveau:imbuement → source con | magic | M-10 | ACCEPT |
| 1 |  | `companions` | companions boss drop — relic_gold (Sacred Pont | numismatics vendor price (M-09 lux | economy | M-09 | ACCEPT |
| 1 |  | `companions` | companions boss drop — relic_gold (Sacred Pont | boss-drop gate as Create recipe in | create | M-15 | ACCEPT |
| 1 |  | `companions` | companions tesla/voltaic deco blocks (copper-b | create:crushing → copper scrap + x | create | M-04 | REJECT |
| 1 |  | `companions` | companions:crystallized_blood | createaddition:charging (FE/electr | create | M-17 | REJECT |
| 1 |  | `companions` | Relic Gold / soul gems (Sacred Pontiff boss dr | `numismatics` vendor | economy | M-09 | ACCEPT |
| 1 |  | `companions` | Tesla/Voltaic deco blocks | `create:crushing` | create | M-04 | REJECT |
| 1 |  | `cookingforblockheads` | cookingforblockheads:oven / cookingforblockhea | create:mechanical_crafting (gate e | create | M-05 | ACCEPT |
| 1 |  | `cookingforblockheads` | cookingforblockheads:cooking_table (the kitche | create:mechanical_crafting (gate o | create | M-05 | ACCEPT |
| 1 |  | `cookingforblockheads` | cookingforblockheads kitchen output (any batch | bountiful decree demanding cooked  | economy | M-14 | ACCEPT |
| 1 |  | `cookingforblockheads` | cookingforblockheads:cow_jar / cookingforblock | any method | create |  | REJECT |
| 1 |  | `cookingforblockheads` | kitchen appliances (all color variants) | numismatics sell — selling pre-ass | economy | M-09 | REJECT |
| 1 |  | `cookingforblockheads` | Toaster (cookingforblockheads:toaster recipe t | pull foreign breads/baked goods th | survival | M-12 | REJECT |
| 1 |  | `cookingforblockheads` | cooking_table (assembled kitchen multiblock) | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `cookingforblockheads` | cow_jar / milk_jar outputs → food processed vi | farmersdelight:cooking | economy | M-09 | REJECT |
| 1 | ✓ | `cookingforblockheads` | upgraded appliance blocks (oven/fridge/sink) | create:* part gating (brass/copper | create | M-05 | ACCEPT |
| 1 | ✓ | `cookingforblockheads` | cooked food output | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `copperagebackport` | copper_chest (double-chest support, oxidized v | numismatics economy — a waxed copp | economy | M-09 | REJECT |
| 1 |  | `copperagebackport` | minecraft:copper_chest / copper_bars / copper_ | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `copperagebackport` | minecraft:copper_axe / copper_boots / copper a | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `copperagebackport` | copperagebackport:copper_button / exposed_copp | create:crushing | create | M-04 | REJECT |
| 1 |  | `copperagebackport` | copperagebackport copper deco blocks (copper_b | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `copperagebackport` | copperagebackport copper ingot chain (c:ingots | numismatics mint | economy | M-08 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:experience_bucket  | occultism:ritual | magic | M-11 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:enchanting_templat | irons_spellbooks:alchemist_cauldro | magic | M-17 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:experience_bucket | create_enchantment_industry:grindi | create | M-06 | REJECT |
| 1 |  | `create_enchantment_industry` | Liquid Experience as a high-tier sellable | numismatics coin | economy | M-09 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry enchanted book out | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry liquid XP (experie | irons_spellbooks:alchemist_cauldro | magic | M-10 | ACCEPT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:experience_cake (a | numismatics sell / M-09 | economy | M-09 | ACCEPT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:mechanical_grindst | create_enchantment_industry:grindi | magic | M-05 | REJECT |
| 1 |  | `create_enchantment_industry` | create_enchantment_industry:printer (copies en | occultism:spirit_trade | magic | M-18 | REJECT |
| 1 | ✓ | `create_enchantment_industry` | liquid experience (experience fluid) | native-gating a magic-side cost (A | magic | M-05 | ACCEPT |
| 1 | ✓ | `create_enchantment_industry` | enchanted output / liquid XP | ars_nouveau:imbuement / forbidden_ | magic | M-10 | REJECT |
| 1 |  | `create_ironworks` | create_ironworks:steel_ingot / c:ingots/steel  | numismatics mint (premium denomina | economy | M-08 | REJECT |
| 1 | ✓ | `create_ironworks` | tin (raw_tin / ingots/tin via the c:tags vocab | create:crushing/mixing processing  | economy | M-08 | ACCEPT |
| 1 | ✓ | `create_ironworks` | bronze/steel plates (item/plates/bronze, item/ | Create assembly → Aeronautics hull | aeronautics | M-13 | REJECT |
| 1 | ✓ | `create_ironworks` | steel_ingot | create:deploying / item_applicatio | create | M-20 | REJECT |
| 1 | ✓ | `create_ironworks` | bronze/steel ingot | arcane infusion (ars_nouveau:imbue | magic | M-10 | REJECT |
| 1 |  | `create_ironworks` | create_ironworks tin ingot (c:ingots/tin) | create:crushing (ore → crushed tin | economy | M-08 | ACCEPT |
| 1 |  | `create_ironworks` | create_ironworks steel_ingot (c:ingots/steel) | numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `create_ironworks` | create_ironworks bronze/tin deco blocks (creat | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `create_ironworks` | create_ironworks steel tools/armor | occultism:spirit_fire or ars_nouve | magic | M-10 | REJECT |
| 1 |  | `create_ironworks` | create_ironworks:steel_ingot (near-Netherite,  | occultism:spirit_fire or ars_nouve | magic | M-10 | REJECT |
| 1 |  | `create_new_age` | create_new_age:energising | ars_nouveau:enchanting_apparatus p | magic | M-10 | REJECT |
| 1 |  | `create_new_age` | create_new_age:copper_wire | create:crushing | create | M-04 | REJECT |
| 1 |  | `create_new_age` | create_new_age:energising method (as a gate) | create_new_age:energising | aeronautics | M-05 | ACCEPT |
| 1 |  | `create_new_age` | create_new_age circuits (blank_circuit / coppe | ars_nouveau:imbuement or enchantin | magic | M-10 | REJECT |
| 1 |  | `create_new_age` | create_new_age FE generation (generator_coil / | createaddition:charging | magic | M-17 | REJECT |
| 1 |  | `create_new_age` | create_new_age:energising (sequenced-assembly  | create:sequenced_assembly + create | magic | M-06 | REJECT |
| 1 |  | `create_new_age` | create_new_age:fluxuated_magnetite (energised  | ars_nouveau:imbuement (arcane infu | magic | M-10 | REJECT |
| 1 |  | `create_new_age` | create_new_age:corium (reactor waste) | occultism:spirit_fire or ars_nouve | magic | M-10 | REJECT |
| 1 |  | `create_new_age` | create_new_age Energiser gating Create-Aeronau | create_new_age:energising | aeronautics | M-05 | REJECT |
| 1 |  | `createaddition` | irons_spellbooks / ars_nouveau FE-chargeable i | createaddition:charging — the tesl | magic | M-17 | ACCEPT |
| 1 |  | `createaddition` | farmed seeds / crops → createaddition:seed_oil | M-12 processing-chain pull — agric | survival | M-12 | ACCEPT |
| 1 |  | `createaddition` | createaddition:biomass / seed_oil | M-09 luxury good→coin — processed  | economy | M-09 | REJECT |
| 1 | ✓ | `createaddition` | seed_oil / bioethanol (crop fuels) | createaddition:liquid_burning → Ae | aeronautics | M-13 | ACCEPT |
| 1 | ✓ | `createaddition` | seed_oil / bioethanol | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `createaddition` | createaddition:seed_oil / bioethanol (crop-oil | createaddition:liquid_burning + nu | economy | M-12 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:gunpowder_bucket / nitropo | occultism:ritual or ars_nouveau:im | magic | M-10 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:primer (andesite-alloy + s | create:crushing (hypothetical recy | create | M-04 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz: cannon-grade components ( | createbigcannons ammo pipeline (cr | aeronautics | M-06 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:nitropowder_bucket (nitrop | tfmg:distillation | create | M-13 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:gun_barrel / firing_mechan | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:gun_barrel / finished TACZ | numismatics sell/price (high-value | economy | M-09 | ACCEPT |
| 1 |  | `createimmersivetacz` | createimmersivetacz:nitropowder_bucket (fluid  | occultism:ritual or ars_nouveau:im | magic | M-10 | REJECT |
| 1 | ✓ | `createimmersivetacz` | bulk ammo (twelve_gauge_shell / rounds) | numismatics sell/price | economy | M-09 | ACCEPT |
| 1 | ✓ | `createimmersivetacz` | gunpowder/nitropowder fluid | tfmg distillation/coking | create | M-12 | REJECT |
| 1 | ✓ | `createimmersivetacz` | gun parts (barrel/firing_mechanism) | ars/occultism reagent | magic | M-02 | REJECT |
| 1 |  | `createmechanicalcompanion` | createmechanicalcompanion:mechanical_wolf_link | ars_nouveau:imbuement or ars_nouve | magic | M-10 | REJECT |
| 1 |  | `createmechanicalcompanion` | createmechanicalcompanion:optical_sensor (mid- | create_new_age:energising | create | M-06 | REJECT |
| 1 |  | `createmechanicalcompanion` | createmechanicalcompanion:mechanical_wolf_link | numismatics — selling or commissio | economy | M-09 | REJECT |
| 1 |  | `createmetalwork` | createmetalwork:molten_<metal> fluids (molten  | numismatics mint (coin from proces | economy | M-08 | ACCEPT |
| 1 |  | `createmetalwork` | createmetalwork c:crushed_raw_materials/pallad | create:crushing → ars_nouveau:imbu | magic | M-10 | ACCEPT |
| 1 |  | `createmetalwork` | createmetalwork:molten_steel_bucket (high-tier | createbigcannons:melting (CBC's ow | aeronautics |  | REJECT |
| 1 |  | `createmetalwork` | createmetalwork:crushed_andesite (everyday byp | create:crushing recycle | create | M-04 | REJECT |
| 1 |  | `createmetalwork` | createmetalwork:crushed_raw_materials/* (magic | create:crushing → create:mixing (m | magic | M-03 | REJECT |
| 1 |  | `createmetalwork` | createmetalwork crushed rare metals (c:crushed | create:mixing → numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `createmetalwork` | magic-mod metal ores (occultism raw ores, galo | create:crushing (createmetalwork c | create | M-03 | ACCEPT |
| 1 |  | `createmetalwork` | createmetalwork:molten_<metal> fluids | tfmg:casting | create |  | REJECT |
| 1 |  | `createmetalwork` | createmetalwork crushed_raw_materials/palladiu | ars_nouveau:imbuement or occultism | magic | M-10 | REJECT |
| 1 |  | `createmetalwork` | createmetalwork molten_netherite / molten_stee | create:sequenced_assembly — gate a | create | M-06 | REJECT |
| 1 |  | `createnuclear` | createnuclear:uranium_ingot / c:raw_materials/ | create:crushing → create:mixing/pr | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear:lead_ingot / c:ingots/lead (bypr | create:crushing → numismatics mint | economy | M-08 | REJECT |
| 1 |  | `createnuclear` | createnuclear reactor SU output (massive kinet | aeronautics engine intake (M-13 ex | aeronautics | M-13 | REJECT |
| 1 |  | `createnuclear` | createnuclear:uranium (ore → dust → fuel, c:or | create:crushing → numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear steel (c:ingots/steel, a shared  | create:crushing (ore-doubling) → n | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear:enriched recipe type (the enrich | enriched campfire/fire — route a f | magic | M-19 | REJECT |
| 1 |  | `createnuclear` | createnuclear radiation hazard / anti-radiatio | numismatics sell (hazmat suits as  | economy | M-09 | REJECT |
| 1 |  | `createnuclear` | createnuclear:steel_ingot (c:ingots/steel, sca | numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear:uranium (refined fuel rod) | numismatics sell/price (high-value | economy | M-09 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear:lead_ingot (c:ingots/lead, radia | create:crushing (ore-doubling) | create | M-03 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear:steel_block / c:ingots/steel (sc | numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear uranium dust / processed uranium | numismatics mint (high-value trade | economy | M-08 | ACCEPT |
| 1 |  | `createnuclear` | createnuclear lead (c:ingots/lead, radiation-s | occultism:ritual or spirit_trade | magic | M-11 | REJECT |
| 1 |  | `createoreexcavation` | createoreexcavation vein-table outputs (scarce | numismatics coin (processed scarce | economy | M-08 | ACCEPT |
| 1 |  | `createoreexcavation` | createoreexcavation:vein_finder (mid-tier expl | ars_nouveau:imbuement to create a  | magic | M-10 | REJECT |
| 1 |  | `createoreexcavation` | createoreexcavation:diamond_drill / netherite_ | create_new_age:energising (electri | create | M-17 | REJECT |
| 1 |  | `createoreexcavation` | createoreexcavation:extractor (fluid vein extr | tfmg:distillation (refine extracte | aeronautics | M-13 | ACCEPT |
| 1 | ✓ | `createoreexcavation` | vein-table ore output (scarce/regional coin-gr | createoreexcavation:vein → create: | economy | M-08 | ACCEPT |
| 1 | ✓ | `createoreexcavation` | Extractor infinite-fluid output (if a propulsi | createoreexcavation:extracting → A | aeronautics | M-13 | REJECT |
| 1 |  | `createoreexcavation` | vein table outputs (raw ores of scarce regiona | createoreexcavation:vein + create: | economy | M-08 | ACCEPT |
| 1 |  | `createoreexcavation` | createoreexcavation:drilling_machine (the mach | minecolonies progression (colony u | create | M-15 | REJECT |
| 1 |  | `createoreexcavation` | (drill-output scarce ores) via: vein-table con |  | economy | M-08 | ACCEPT |
| 1 |  | `createoreexcavation` | createoreexcavation:diamond_drill / netherite_ | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `createpickywheels` | createpickywheels biome-gated water wheel (req | survival biome placement — buildin | survival | M-01 | REJECT |
| 1 |  | `deeperdarker` | deeperdarker:warden_carapace / sculk_bone (mid | occultism:ritual | magic | M-02 | REJECT |
| 1 | ✓ | `deeperdarker` | deeperdarker:soul_dust / soul_crystal | create:haunting (Create's soul-fir | create | M-19 | ACCEPT |
| 1 | ✓ | `deeperdarker` | deeperdarker:soul_elytra (boost-capable elytra | aileron's elytra rebalance / aeron | aeronautics |  | REJECT |
| 1 | ✓ | `deeperdarker` | deeperdarker soul materials | numismatics vendor/price | economy | M-09 | REJECT |
| 1 |  | `deeperdarker` | deeperdarker:heart_of_the_deep | occultism:ritual or ars_nouveau:im | magic | M-02 | ACCEPT |
| 1 |  | `deeperdarker` | deeperdarker:sculk_stone / gloomslate block fa | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `deeperdarker` | deeperdarker:gloomslate / sculk_stone block fa | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `deeperdarker` | deeperdarker:soul_dust / Otherside mob drops | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `deeperdarker` | deeperdarker:soul_crystal | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 1 |  | `dndesires` | pack crops / survival drops (any belt-fed item | dndesires:freezing / dndesires:see | survival | M-12 | ACCEPT |
| 1 |  | `dndesires` | crops/drops from survival mods (berries, milk, | dndesires:freezing / dndesires:see | survival | M-12 | ACCEPT |
| 1 |  | `dndesires` | milkshake foods (chocolate_milkshake, glowberr | numismatics sell/price | economy | M-09 | ACCEPT |
| 1 |  | `dndesires` | rubber (raw/processed) | numismatics sell/price (as scarce  | economy | M-08 | REJECT |
| 1 |  | `dndesires` | any foraged/harvested pack crop or drop | dndesires:freezing / dndesires:see | survival | M-12 | ACCEPT |
| 1 |  | `dndesires` | dndesires:rubber (hydraulic press output) | create:mechanical_crafting (belt/g | create | M-06 | REJECT |
| 1 |  | `dndesires` | dndesires:rubber | aeronautics ship component (Create | aeronautics | M-13 | REJECT |
| 1 |  | `dndesires` | dndesires:asphalt (road surface block) | minecolonies build supply | economy | M-12 | ACCEPT |
| 1 |  | `dndesires` | dndesires milkshake foods | farm_and_charm:stove / extradeligh | survival | M-12 | REJECT |
| 1 |  | `dndesires` | dndesires:cardboard_package_* | aeronautics logistics (ship manife | aeronautics | M-05 | REJECT |
| 1 |  | `drones` | drones:wood_rotor | any complex method | create | M-05 | REJECT |
| 1 | ✓ | `drones` | rotors / ion_thruster / controller | create:sequenced_assembly + native | create | M-06 | ACCEPT |
| 1 | ✓ | `drones` | pocket_drone / drill-drone | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `dungeons-and-taverns-v4.4.4` | tavern cartographer villager trade | numismatics / M-21 | economy | M-21 | REJECT |
| 1 |  | `dungeons-and-taverns-v4.4.4` | trial-key / ominous-trial-key loot | numismatics bounty / M-14 | economy | M-14 | REJECT |
| 1 |  | `dungeons-and-taverns-v4.4.4` | in-tavern cartographer villager trade | numismatics (coin-payout config or | economy | M-21 | REJECT |
| 1 |  | `dungeons-and-taverns-v4.4.4` | dungeons-and-taverns structure loot tables | bountiful:bountyboard decree targe | economy | M-14 | ACCEPT |
| 1 |  | `dungeons-and-taverns-v4.4.4` | dungeons-and-taverns loot (treasure chests in  | numismatics coin seeding | economy | M-08 | ACCEPT |
| 1 |  | `dungeons_arise_seven_seas` | naval structures (aesthetic / thematic) | aeronautics pillar — ships rhyme w | aeronautics |  | REJECT |
| 1 |  | `dynamictreesplus` | dynamictreesplus:mushroom_branch / cactus_bran | create:crushing | create | M-04 | REJECT |
| 1 |  | `endrem` | endrem:guardian_eye | occultism:spirit_fire (guardian sc | magic | M-02 | ACCEPT |
| 1 |  | `endrem` | endrem:guardian_eye | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `endrem` | endrem:nether_eye | occultism:ritual | magic | M-11 | ACCEPT |
| 1 |  | `endrem` | endrem:magical_eye (arcane-named variant) | ars_nouveau:enchanting_apparatus | magic | M-10 | REJECT |
| 1 |  | `enhancedcelestials` | enhancedcelestials:space_moss_block | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `enhancedcelestials` | Harvest Moon event (faster growth) | M-16 seasonal-reagent — a crop har | create | M-16 | REJECT |
| 1 |  | `enhancedcelestials` | enhancedcelestials Blood Moon (world-state eve | ars_nouveau:summon_ritual gated by | magic | M-22 | ACCEPT |
| 1 |  | `enhancedcelestials` | enhancedcelestials Harvest Moon (crop-growth b | create:milling seasonal crop yield | create | M-16 | ACCEPT |
| 1 | ✓ | `enhancedcelestials` | meteor block | create:crushing | create | M-04 | ACCEPT |
| 1 | ✓ | `enhancedcelestials` | space_moss block-set | any method | magic |  | REJECT |
| 1 | ✓ | `expandeddelight` | expandeddelight apple/berry juices (Juicer out | numismatics sell | economy | M-09 | REJECT |
| 1 | ✓ | `expandeddelight` | expandeddelight:cinnamon_log / cinnamon (dust) | create:milling | create | M-12 | ACCEPT |
| 1 | ✓ | `expandeddelight` | expandeddelight:salt (dust) | numismatics vendor/price | economy | M-09 | REJECT |
| 1 | ✓ | `expandeddelight` | expandeddelight new crops (chili/peanut/etc.) | ars_nouveau agronomic sourcelink | magic | M-02 | REJECT |
| 1 |  | `expandeddelight` | expandeddelight:cheese_wheel | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `expandeddelight` | expandeddelight:asparagus / chili_pepper (seas | create:milling or farmersdelight:c | create | M-12 | REJECT |
| 1 |  | `expandeddelight` | expandeddelight:peanut_butter / chili-based fo | numismatics (luxury good) | economy | M-09 | REJECT |
| 1 |  | `expandeddelight` | expandeddelight:chili_pepper | occultism:spirit_fire or ars_nouve | magic | M-10 | REJECT |
| 1 |  | `extradelight` | grain crops (c:crops/wheat etc.) | create:milling → extradelight:oven | create | M-12 | ACCEPT |
| 1 |  | `extradelight` | coffee beans (c:crops/coffee) | create:milling → extradelight:oven | create | M-12 | ACCEPT |
| 1 |  | `extradelight` | extradelight feast dishes (high-effort cooked  | numismatics vendor price | economy | M-09 | ACCEPT |
| 1 |  | `extradelight` | extradelight:apple_cider / fruit syrups (fluid | create:compacting / numismatics ve | economy | M-09 | ACCEPT |
| 1 |  | `extradelight` | extradelight:drying_rack outputs (dried herbs/ | ars_nouveau:imbuement (herb-infusi | magic | M-10 | REJECT |
| 1 | ✓ | `farm_and_charm` | farm_and_charm grains (barley / oat) | create:milling | create | M-12 | ACCEPT |
| 1 | ✓ | `farm_and_charm` | farm_and_charm husbandry surplus (meat / eggs  | minecolonies food supply (restaura | economy | M-09 | ACCEPT |
| 1 | ✓ | `farm_and_charm` | farm_and_charm:butter / dairy | occultism:spirit_fire or ars imbue | magic | M-11 | REJECT |
| 1 |  | `farm_and_charm` | farm_and_charm:fertilized_farmland | any Create or magic method | create |  | REJECT |
| 1 |  | `farm_and_charm` | farm_and_charm:barley (grain) | sereneseasons fertility | survival | M-16 | REJECT |
| 1 |  | `formationsnether` | structure loot tables (Nether altar/chest loot | loot-table edit (not a recipe meth | economy | M-14 | REJECT |
| 1 |  | `formationsnether` | formationsnether loot tables (ritual-altar che | loot-table seeding of numismatics  | economy | M-08 | REJECT |
| 1 |  | `friendsandfoes` | Wildfire / Illusioner drops (hostile loot) | occultism:spirit_fire | magic | M-02 | REJECT |
| 1 |  | `friendsandfoes` | friendsandfoes:crab_claw | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `friendsandfoes` | friendsandfoes:crab_claw | occultism:spirit_fire | magic | M-11 | REJECT |
| 1 | ✓ | `friendsandfoes` | crab_claw / Wildfire / Illusioner drops | ars_nouveau:imbuement / occultism: | magic | M-02 | REJECT |
| 1 |  | `immersive_armors` | immersive_armors:heavy_chestplate/helmet/leggi | create:pressing (metal plates as r | create | M-05 | ACCEPT |
| 1 |  | `immersive_armors` | immersive_armors:divine_chestplate/helmet/legg | ars_nouveau:enchanting_apparatus ( | magic | M-10 | ACCEPT |
| 1 |  | `immersive_armors` | immersive_armors:emerald_chestplate set | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `immersive_armors` | immersive_armors:steampunk_* (Steampunk set —  | create:sequenced_assembly | create | M-06 | ACCEPT |
| 1 |  | `immersive_armors` | immersive_armors:bone_* (Bone set, pacifies sk | occultism:ritual | magic | M-11 | ACCEPT |
| 1 |  | `modulargolems` | boss-tier metals (dragonsteel — Ice&Fire fire/ | modulargolems:golem_assemble | survival | M-15 | ACCEPT |
| 1 |  | `modulargolems` | Ars Nouveau source_gem or Occultism otherstone | ars_nouveau:imbuement / occultism: | magic | M-10 | REJECT |
| 1 |  | `modulargolems` | golem entity loot (loot=yes) | occultism:spirit_fire / numismatic | magic | M-02 | REJECT |
| 1 |  | `modulargolems` | TFMG steel (via TFMG industrial chain) as gole | modulargolems:golem_assemble | create |  | REJECT |
| 1 |  | `modulargolems` | standard golem body (iron/copper tier) | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `modulargolems` | golem body (iron/gold tier) | numismatics coin as unlock fee | economy | M-21 | REJECT |
| 1 |  | `modulargolems` | modulargolems golem body (boss/mid metal: Cata | modulargolems:golem_assemble gated | survival | M-15 | ACCEPT |
| 1 |  | `modulargolems` | modulargolems golem upgrade slots (add_1_slot  | ars_nouveau:imbuement or occultism | magic | M-10 | ACCEPT |
| 1 |  | `modulargolems` | modulargolems soldier golem (combat construct) | numismatics sell / M-09 | economy | M-09 | REJECT |
| 1 |  | `mowziesmobs` | mowziesmobs:blowgun / dart | create:crushing OR numismatics sel | create | M-09 | REJECT |
| 1 |  | `mowziesmobs` | Grottol (ore-eating mob / diamond drop) | numismatics bounty (M-14) | economy | M-14 | REJECT |
| 1 |  | `mowziesmobs` | mowziesmobs:earthrend_gauntlet (endgame Wrough | create:sequenced_assembly as boss- | create | M-15 | ACCEPT |
| 1 |  | `mowziesmobs` | mowziesmobs:elokosa_paw_full / elokosa_paw_cre | ars_nouveau:imbuement or occultism | magic | M-22 | ACCEPT |
| 1 |  | `mowziesmobs` | mowziesmobs:ice_crystal (endgame, non-renewabl | occultism:spirit_fire → frost esse | magic | M-11 | REJECT |
| 1 |  | `mowziesmobs` | mowziesmobs:earthrend_gauntlet (Wroughtnaut dr | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `mowziesmobs` | mowziesmobs:sol_visage (Barako drop) | ars_nouveau:imbuement or occultism | magic | M-11 | ACCEPT |
| 1 |  | `mushroomquest` | mushroomquest:resin_orb | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `mushroomquest` | mushroomquest edible/effect mushrooms (common  | farmersdelight:cooking + extradeli | create | M-12 | ACCEPT |
| 1 |  | `mushroomquest` | rare/mythical mushroom caps (endgame tier: aga | numismatics sell/price | economy | M-09 | ACCEPT |
| 1 |  | `mushroomquest` | mushroomquest rare/mythical caps (agarikon, an | farmersdelight:cooking or extradel | survival | M-12 | ACCEPT |
| 1 |  | `occultengineering` | occultengineering:sterling_silver (ingot, Crea | create:crushing → numismatics vend | economy | M-08 | ACCEPT |
| 1 |  | `occultengineering` | occultengineering:spirit_solution | ars_nouveau:imbuement (arcane conv | magic | M-10 | REJECT |
| 1 | ✓ | `oceansdelight` | oceansdelight elder_guardian_roll / fugu_slice | numismatics vendor/price | economy | M-09 | ACCEPT |
| 1 | ✓ | `oceansdelight` | oceansdelight:fugu_slice (poison delicacy) | occultism:spirit_fire / ars imbuem | magic | M-11 | REJECT |
| 1 | ✓ | `oceansdelight` | high-effort seafood dishes (elder_guardian_rol | numismatics sell/price | economy | M-09 | ACCEPT |
| 1 | ✓ | `oceansdelight` | everyday cod/salmon/sea-pickle dishes (braised | numismatics sell | economy | M-09 | REJECT |
| 1 | ✓ | `oceansdelight` | raw guardian flesh / cut_tentacles | numismatics sell of the raw drop | economy | M-12 | REJECT |
| 1 |  | `oceansdelight` | oceansdelight:cut_tentacles / guardian drops | farmersdelight:cutting → create:mi | create | M-12 | REJECT |
| 1 |  | `oceansdelight` | oceansdelight:cooked_stuffed_squid / oceansdel | numismatics sell/price | economy | M-09 | REJECT |
| 1 |  | `rottencreatures` | rottencreatures:treasure_chest (Dead Beard pir | numismatics (M-09 luxury or M-14 b | economy | M-09 | REJECT |
| 1 |  | `rottencreatures` | frozen_rotten_flesh (Frostbitten zombie drop — | occultism:spirit_fire transmutatio | magic | M-11 | ACCEPT |
| 1 |  | `rottencreatures` | corrupted_wart (swamp-zombie drop) | ars_nouveau:crush — grinding corru | magic | M-02 | ACCEPT |
| 1 |  | `rottencreatures` | magma_rotten_flesh (Burned/magma zombie drop) | create:haunting — haunting magma f | create | M-19 | ACCEPT |
| 1 |  | `rottencreatures` | mob heads (decorative: dead_beard/immortal/fro | bountiful bounty board → numismati | economy | M-14 | ACCEPT |
| 1 |  | `rottencreatures` | frozen_rotten_flesh / magma_rotten_flesh | create:crushing into byproducts (r | create | M-02 | REJECT |
| 1 |  | `rottencreatures` | rottencreatures:corrupted_wart | ars_nouveau:imbuement | magic | M-10 | ACCEPT |
| 1 |  | `rottencreatures` | rottencreatures:immortal_head (storm-lich mob  | create:haunting | create | M-19 | ACCEPT |
| 1 |  | `rottencreatures` | rottencreatures mob heads (decorative) | numismatics sell / M-14 bounty boa | economy | M-14 | ACCEPT |
| 1 |  | `rottencreatures` | rottencreatures:frozen_rotten_flesh | create:haunting | create | M-19 | REJECT |
| 1 |  | `rottencreatures` | rottencreatures:magma_rotten_flesh (Immortal / | create:haunting | create | M-19 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty jade/ruby/onyx/aquamarine ores | create:crushing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:steel_block / steel ingots (c: | create:crushing / create:mixing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty spirit_stone blocks (decorativ | create:crushing | create | M-04 | REJECT |
| 1 |  | `samurai_dynasty` | katana / samurai weapon set | create:deploying (item_application | create | M-20 | REJECT |
| 1 |  | `samurai_dynasty` | samurai_dynasty jade/ruby/onyx/aquamarine ores | create:crushing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:jade / jade_ore (c:gems/jade,  | create:crushing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:ruby_ore / aquamarine_ore / on | create:crushing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:steel_ingot (c:ingots/steel, p | numismatics mint | economy | M-08 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:silver (c:* silver — ⚠ Galosph | create:crushing or ars_nouveau:imb | create | M-03 | REJECT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:jade_ore / samurai_dynasty:rub | create:crushing | create | M-03 | ACCEPT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:jade (gem) | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `samurai_dynasty` | samurai_dynasty:steel_ingot | tfmg hot_blast / unification | create | M-03 | REJECT |
| 1 |  | `sereneseasons` | season_sensor redstone output | Create automation gating | create | M-05 | REJECT |
| 1 |  | `sereneseasons` | sereneseasons:season_sensor (redstone output k | Create redstone logic (gearshifts, | create | M-16 | ACCEPT |
| 1 |  | `sky_whale_ship` | whale-structure loot | numismatics sell / bounty | economy | M-09 | REJECT |
| 1 |  | `sky_whale_ship` | sky_whale_ship loot chests | aeronautics (thematic destination  | create | M-15 | ACCEPT |
| 1 | ✓ | `sky_whale_ship` | whale loot rarities | numismatics sell / bounty | economy | M-09 | REJECT |
| 1 |  | `sky_whale_ship` | sky_whale_ship loot chests (onboard structure  | custom loot-table entries — place  | aeronautics | M-15 | ACCEPT |
| 1 |  | `smokeleafindustries` | smokeleafindustries:generator FE output | createaddition:charging (FE↔kineti | create | M-17 | ACCEPT |
| 1 |  | `smokeleafindustries` | strain seeds / buds | occultism:ritual / spirit_fire | magic | M-11 | REJECT |
| 1 |  | `smokeleafindustries` | smokeleaf generator (FE output) | createaddition:charging bridge (FE | create | M-17 | ACCEPT |
| 1 |  | `smokeleafindustries` | smokeleaf oil / extract (mid refined product) | create:mixing as a solvent/lubrica | create | M-12 | REJECT |
| 1 |  | `smokeleafindustries` | hemp plant / raw buds | create:milling | create | M-12 | ACCEPT |
| 1 |  | `smokeleafindustries` | smokeleaf generator (FE output) | createaddition:charging (FE↔kineti | create | M-05 | REJECT |
| 1 |  | `smokeleafindustries` | hemp building blocks (hemp_planks/bricks) | create:crushing | create | M-04 | REJECT |
| 1 |  | `smokeleafindustries` | smokeleafindustries FE output / generator | createaddition:charging or alterna | create | M-17 | ACCEPT |
| 1 |  | `solonion` | lunchbag→lunchbox upgrade | solonion:upgrade_food_container (e | create | M-20 | REJECT |
| 1 |  | `solonion` | lunchbox food diversity score | numismatics economy incentive | economy | M-09 | REJECT |
| 1 |  | `solonion` | lunchbox (mid-tier container) | create:mechanical_crafting | create | M-05 | REJECT |
| 1 |  | `spawn` | spawn seafood drops (crab, anglerfish, seal, s | create:milling (crab shell → calci | create | M-12 | REJECT |
| 1 |  | `spawn` | clam meat / crab claw (mid seafood drops) | numismatics sell as exotic caught  | economy | M-09 | ACCEPT |
| 1 |  | `spawn` | raw crab / clam (everyday aquatic catch) | create:milling (shell meal / chiti | create | M-12 | ACCEPT |
| 1 |  | `spawn` | angler_fish (rare deep-ocean catch) | occultism:spirit_fire — angler bio | magic | M-11 | REJECT |
| 1 |  | `spawn` | spawn:crab / crab drops (cooked crab, crab cla | farmersdelight:cooking + create:mi | create | M-12 | ACCEPT |
| 1 |  | `spawn` | spawn:angler_fish drop (bioluminescent fluid / | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `spawn` | spawn:ant_pupa / ant colony byproducts | occultism:spirit_fire or ritual | magic | M-11 | REJECT |
| 1 |  | `spawn` | spawn exotic catches (anglerfish, rare color-v | numismatics sell | economy | M-09 | ACCEPT |
| 1 |  | `t_and_t` | pillager fort conquest | bountiful bounty board → numismati | economy | M-14 | REJECT |
| 1 |  | `t_and_t` | sail-ship / ocean structure loot | aeronautics destination | aeronautics | M-15 | REJECT |
| 1 |  | `t_and_t` | t_and_t villager variants (16 biome-specific v | numismatics — village settlements  | economy | M-21 | ACCEPT |
| 1 |  | `t_and_t` | t_and_t structures (conquest forts, outpost to | could be loot tables seeding scarc | aeronautics |  | REJECT |
| 1 |  | `tfmg` | tfmg:fuel_can / tfmg:steel_ingot as high-effor | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `tfmg` | TFMG Voltage/FE power grid | createaddition:charging → magic to | magic | M-17 | REJECT |
| 1 |  | `tfmg` | TFMG combustion engine as Create kinetic sourc | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `tfmg` | tfmg:plastic (vat_machine_recipe output) | create:mixing or occultism:spirit_ | magic |  | REJECT |
| 1 |  | `tfmg` | tfmg:aluminum_ingot | create:crushing (ore-doubling bypr | create | M-03 | REJECT |
| 1 |  | `tide` | tide fishing yields (generic) | bountiful board payout | economy | M-14 | REJECT |
| 1 | ✓ | `tide` | tide season-locked catches (Serene Seasons-gat | a season-gated input → Create/magi | create | M-16 | ACCEPT |
| 1 | ✓ | `tide` | tide fish byproducts / trophies | create:crushing / milling → fishme | create | M-12 | ACCEPT |
| 1 | ✓ | `tide` | tide rod/bobber gear (consumes amethyst/diamon | create:* | create |  | REJECT |
| 1 |  | `tide` | tide:abyss_angler / void-fish | occultism:spirit_fire or ars_nouve | magic | M-02 | REJECT |
| 1 |  | `trailandtales_delight` | cherry_cheese_pie / ancient_coffee / cherry_pe | numismatics sell / colony delivera | economy | M-09 | ACCEPT |
| 1 |  | `trailandtales_delight` | lantern_fruit / pitcher_taro crops | create:milling | create | M-12 | ACCEPT |
| 1 |  | `trailandtales_delight` | curd_block / cheese_wheel (milk-fermented inte | create:pressing | create | M-12 | REJECT |
| 1 |  | `trailandtales_delight` | cooked_sniffer_egg / stuffed_sniffer_egg | occultism:spirit_fire | magic | M-11 | REJECT |
| 1 |  | `trailandtales_delight` | trailandtales_delight:cherry_petal_tea / ancie | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 |  | `trailandtales_delight` | trailandtales_delight:ancient_coffee / cherry_ | numismatics sell | economy | M-09 | ACCEPT |
| 1 |  | `trailandtales_delight` | trailandtales_delight crops / produce | sereneseasons fertility window | survival | M-16 | REJECT |
| 1 |  | `trailandtales_delight` | trailandtales_delight:cherry_cheese_pie / anci | numismatics sell / price | economy | M-09 | ACCEPT |
| 1 |  | `trailandtales_delight` | trailandtales_delight lantern_fruit / pitcher_ | create:milling | create | M-12 | ACCEPT |
| 1 |  | `travelersbackpack` | backpack_tank (portable fluid tank) | aeronautics / expedition logistics | aeronautics |  | REJECT |
| 1 |  | `travelersbackpack` | travelersbackpack tank upgrade / backpack_upgr | create:pressing (pressed plates as | create | M-20 | ACCEPT |
| 1 |  | `travelersbackpack` | travelersbackpack:backpack (fluid tanks — can  | fluid-carrier for Aeronautics prop | aeronautics | M-13 | REJECT |
| 1 |  | `travelersbackpack` | travelersbackpack themed mob-variant packs (dr | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `travelersbackpack` | travelersbackpack:backpack_tank (portable flui | create:sequenced_assembly | create | M-06 | ACCEPT |
| 1 |  | `travelersbackpack` | travelersbackpack:blank_upgrade (upgrade modul | create:pressing or create:mechanic | create | M-05 | REJECT |
| 1 |  | `travelersbackpack` | travelersbackpack tank + hose as portable flui | aeronautics logistics (passive) | aeronautics |  | REJECT |
| 1 | ✓ | `trek-b0.6.1.1` | chest loot | loot-table seeding (NOT a method-r | magic | M-02 | REJECT |
| 1 |  | `underground_village` | Stoneholm villager trades | bountiful board | economy | M-14 | ACCEPT |
| 1 |  | `undergroundworlds` | undergroundworlds:spider_fang | ars_nouveau:imbuement | magic | M-02 | REJECT |
| 1 |  | `undergroundworlds` | temple_bricks / pyramid_bricks (block sets — c | create:crushing | create | M-04 | ACCEPT |
| 1 |  | `undergroundworlds` | undergroundworlds:desert_charm / antidote_flas | numismatics sell | economy | M-09 | REJECT |
| 1 |  | `undergroundworlds` | undergroundworlds Ashan drop (blindness-arrow  | occultism:ritual | magic | M-02 | REJECT |
| 1 | ✓ | `undergroundworlds` | undergroundworlds:spider_fang | bountiful board objective (kill Bl | economy | M-14 | ACCEPT |
| 1 | ✓ | `undergroundworlds` | undergroundworlds:quicksand | create:* | create |  | REJECT |
| 1 |  | `undergroundworlds` | undergroundworlds:freezing_* tools (freeze-on- | create:haunting — soul-fire transm | create | M-19 | REJECT |
| 1 |  | `undergroundworlds` | undergroundworlds:antidote_flask / desert_char | ars_nouveau:imbuement or occultism | magic | M-10 | REJECT |
| 1 |  | `undergroundworlds` | undergroundworlds:icicle | dndesires:freezing or create_drago | create | M-12 | REJECT |
| 1 |  | `valarian_conquest` | valarian_conquest:*_citizenship + mercenary hi | numismatics coin gate | economy | M-09 | ACCEPT |
| 1 |  | `valarian_conquest` | faction gear / mercenary-hire trades | numismatics villager/trade economy | economy | M-14 | ACCEPT |
| 1 |  | `valarian_conquest` | valarian_conquest:armorsmith / builder station | create:mechanical_crafting — gate  | create | M-05 | ACCEPT |
| 1 |  | `valarian_conquest` | valarian_conquest:*_citizenship (faction alleg | ars_nouveau:imbuement — imbuement  | magic | M-10 | REJECT |
| 1 |  | `valarian_conquest` | bandit boss / Ashan knight drop | M-15 boss-key gate for a Create ar | create | M-15 | REJECT |
| 1 |  | `valarian_conquest` | valarian_conquest mercenary hire / faction cit | numismatics coins as payment metho | economy | M-09 | ACCEPT |
| 1 |  | `valarian_conquest` | valarian_conquest:*_citizenship items (faction | numismatics trade seam | economy | M-21 | ACCEPT |
| 1 |  | `valarian_conquest` | valarian_conquest:bandit_axeman_item / faction | bountiful bounty board → numismati | economy | M-14 | ACCEPT |
| 1 |  | `valarian_conquest` | valarian_conquest:*_citizenship items + mercen | numismatics economy — gate mercena | economy | M-14 | ACCEPT |
| 1 |  | `vc_gliders` | vc_gliders:paraglider_netherite (top tier) | create:sequenced_assembly | create | M-06 | REJECT |
| 1 |  | `vc_gliders` | vc_gliders:copper_upgrade | create:pressing | create | M-20 | ACCEPT |
| 1 |  | `vc_gliders` | vc_gliders:nether_upgrade | create:haunting | create | M-19 | ACCEPT |
| 1 |  | `vc_gliders` | vc_gliders:paraglider_gold | ars_nouveau:imbuement | magic | M-10 | REJECT |
| 1 | ✓ | `vc_gliders` | paraglider_diamond/_netherite (higher tiers) | create:pressing / mechanical_craft | create | M-05 | ACCEPT |
| 1 | ✓ | `vc_gliders` | reinforced_paper (glider feedstock) | create:milling/pressing (paper-pul | create | M-12 | REJECT |
| 1 | ✓ | `vc_gliders` | copper_upgrade / nether_upgrade | create:deploying / item_applicatio | create | M-20 | ACCEPT |
| 1 |  | `vc_gliders` | reinforced paper (glider feedstock) | create:pressing | create | M-12 | REJECT |
