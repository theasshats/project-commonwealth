# Filing plan — Phase 2.5 cluster issues (ready to file on GO)

> Built from `decisions-ratified.tsv` — now **sweep-verified at the 12/22 waypoint** (V2-S
> pilot + waves 2-3 folded 2026-06-12): **48 rows closed as DONE** (shipped/native — zero
> authoring), 19 further drops, ~40 rescopes embedded in the rows as `[RESCOPED@sweep]`,
> 8 sweep-found weaves added, and the coin-loot-seed ruling applied to E-1 (flagged for
> maintainer sign-off). **319 ratified weaves + the 15-pattern plumbing batch in 26 cluster
> issues.** Verify lines carry the sweep evidence. Remaining sweep chunks (S-11..S-20) fold
> the same way before filing, or file v0.9.0 now and fold the rest as they land.
> **No issues filed yet — filing gated on maintainer GO.**


## v0.9.0 — Survival (milestone 13) — 103 weaves (incl. the re-homed create-spine bucket) + plumbing batch

### C-1 · Deco-crush plumbing batch (M-04, one KubeJS loop) — 15 patterns
_static; no anchor credit (F1). v0.8.0-ELIGIBLE. Sweep pruned the vanilla-material families (mcw*, rechiseled*) — the shipped 35-web-bridges batch deliberately skips that class_
- [ ] `bits_n_bobs` — bits_n_bobs tile/chair deco → create:crushing (M-04)
- [ ] `copperagebackport` — copperagebackport deco/blocks→create
- [ ] `create_confectionery` — create_confectionery deco blocks (chocolate/caramel/gingerbread bricks) → create
- [ ] `deeperdarker` — deeperdarker gloomslate/sculk_stone→create (crushing recycle)
- [ ] `domum_ornamentum` — domum_ornamentum Create-processed-stone→create (architects_cutter)
- [ ] `enhancedcelestials` — enhancedcelestials:meteor block → create M-04
- [ ] `friendsandfoes` — friendsandfoes copper deco (copper buttons / weathered lightning rods) → create:
- [ ] `galosphere` — galosphere deco blocks→create M-04
- [ ] `mcwdoors` — mcwdoors→create
- [ ] `mcwroofs` — mcwroofs stone/brick/andesite/deepslate roof variants → create
- [ ] `quark` — quark deco blocks (vertical slabs, polished stone/brick variants) → create:crush
- [ ] `railways` — railways:locometal blocks → create (M-04 deco recycle via create:crushing)
- [ ] `underground_village` — underground_village Stoneholm structure blocks (dismantled) → create:crushing (M
- [ ] `undergroundworlds` — undergroundworlds temple/pyramid bricks → create M-04
- [ ] `woodworks` — woodworks→create

### C-2 · M-12 processing pulls — mill/press/mix raw materials into the spine — 19 weaves *(re-homed from v0.7.0)*
_VERIFY-NOT-ALREADY-SHIPPED (sweep closed the known overlaps; check residue per row)_
- [ ] `bakery` — wheat→flour via create:milling `M-12`
- [ ] `beachparty` — beachparty coconut/tropical fruit → create (M-12) `M-12`
- [ ] `createaddition` — farmed seeds/crops → createaddition:seed_oil → createaddition:liquid_burning (FE) `M-12`
- [ ] `dtterralith` — dtterralith exotic seeds (cedar/jacaranda/maple/kapok) → create (M-12 via create:milling) `M-12`
- [ ] `dynamictrees` — dynamictrees:branch byproduct → create:milling (sawdust/pulp intermediate) `M-12`
- [ ] `dynamictreesplus` — dynamictreesplus:saguaro_fruit→create:milling (M-12, times=35 ACCEPT) `M-12`
- [ ] `dynamictreesplus` — dynamictreesplus:brown/red mushroom_cap→farmersdelight:cutting / create:milling (M-12, times=25 `M-12`
- [ ] `ecologics` — ecologics:coconut (raw fruit) → create M-12 `M-12`
- [ ] `expandeddelight` — expandeddelight:cinnamon (bark → dust via create:milling) → Create `M-12`
- [ ] `extradelight` — extradelight crops/outputs (grain, coffee, spices) → Create (milling/pressing/mixing) `M-12`
- [ ] `handcrafted` — handcrafted wood furniture (chairs, tables, shelves, cupboards)→create `M-12`
- [ ] `hpm` — hpm:cannonball / mortar_ball → create (M-12/M-29 via createbigcannons:cartridge_assembly or cre `M-12` *(rescoped)*
- [ ] `minecolonies_tweaks` — minecolonies_tweaks→create `M-12`
- [ ] `more_slabs_stairs_and_walls` — more_slabs_stairs_and_walls stone/wood cut variants → create (M-12 via create:cutting) `M-12`
- [ ] `quark` — quark crop/food storage_blocks (apple_crate, carrot_crate, potato_crate, sugar_cane, etc.) → cr `M-12`
- [ ] `snowyspirit` — snowyspirit ginger→create (milling) `M-12` *(rescoped)*
- [ ] `supplementaries` — supplementaries:flax→create M-12 `M-12` *(rescoped)*
- [ ] `tide` — tide→create `M-12`
- [ ] `trailandtales_delight` — trailandtales_delight→create `M-12`

### C-3 · M-05 native-method gates — flagship items built in their own machine on Create parts — 10 weaves *(re-homed from v0.7.0)*
_VERIFY-NOT-ALREADY-SHIPPED; verify recipe-type injection per mod_
- [ ] `cookingforblockheads` — flagship appliances (oven/fridge/sink)→create:mechanical_crafting (M-05, times=32+4+2+1 opus) `M-05`
- [ ] `create_cheese` — create_cheese tier-3 maturing→Create-pressed beeswax seal (M-05, times=1 ACCEPT) `M-05` *(rescoped)*
- [ ] `create_mobile_packages` — create_mobile_packages:robo_bee (completed drone) → create `M-05`
- [ ] `create_tweaked_controllers` — create_tweaked_controllers:tweaked_lectern_controller → create (M-05) `M-05` *(rescoped)*
- [ ] `deeperdarker` — deeperdarker warden_carapace→create (pressing/mechanical_crafting) `M-05`
- [ ] `hpm` — hpm:largehull / largemast → create (M-05/M-23 via create:mechanical_crafting) `M-05`
- [ ] `minecolonies_tweaks` — minecolonies_tweaks→create `M-05`
- [ ] `valarian_conquest` — valarian_conquest armorsmith / builder stations → create M-05 `M-05`
- [ ] `vc_gliders` — vc_gliders mid/high-tier paragliders (iron/gold/diamond/netherite) → create `M-05`
- [ ] `woodworks` — woodworks→create `M-05`

### C-4 · M-15 boss-key gates — boss drops unlock complex tech recipes — 12 weaves *(re-homed from v0.7.0)*
_verify: each gate item is a UNIQUE named drop; check 40-gates.js ladder + the rotten_heart double-booking fix (swap gaia roster to busts) FIRST_
- [ ] `alexsmobs` — alexsmobs drops (void_worm_beak) → create `M-15`
- [ ] `cataclysm` — cataclysm:ancient_metal_ingot→create `M-15`
- [ ] `cbc_at` — cbc_at heavy-autocannon / rocket-pod (endgame tier)→create `M-15` *(rescoped)*
- [ ] `companions` — companions:relic_gold → create (M-15 boss-key gate) `M-15`
- [ ] `create_ltab-3.9.2` — Create-themed structure loot tables → Create `M-15`
- [ ] `createmechanicalcompanion` — mechanical_wolf_link→survival M-15 `M-15`
- [ ] `createoreexcavation` — createoreexcavation:netherite_drill → create/survival (M-15 boss-key gate) `M-15`
- [ ] `dungeons-and-taverns-v4.4.4` — dungeons-and-taverns structure loot→create M-15 `M-15` *(rescoped)*
- [ ] `edf-remastered-5.0-beta4` — Ender Dragon fight (harder, multi-phase) → Create (loot-seed boss-key drop) `M-15`
- [ ] `grimoireofgaia` — grimoireofgaia mini-boss drops (bust_valkyrie / bust_gorgon / bust_sphinx) → boss-key gate on h `M-15`
- [ ] `mowziesmobs` — ice_crystal (Frostmaw drop)→create via boss-key sequenced_assembly gate `M-15`
- [ ] `mowziesmobs` — earthrend_gauntlet (Wroughtnaut drop)→create via boss-key gate `M-15`

### C-5 · M-06 sequenced-assembly keystones — 6 weaves *(re-homed from v0.7.0)*
_depth scales with power; fxntstorage rides the incomplete-frame rescope (NBT-safe)_
- [ ] `create_hypertube` — hypertube_entrance/accelerator → Create `M-06`
- [ ] `create_jetpack` — create_jetpack:netherite_jetpack→create:sequenced_assembly (M-06, times=7 ACCEPT) `M-06`
- [ ] `fxntstorage` — fxntstorage hardened_backpack→create (sequenced-assembly) `M-06` *(rescoped)*
- [ ] `hpm` — hpm:corvette_steamship_item → create (M-06 sequenced_assembly) `M-06` *(rescoped)*
- [ ] `occultengineering` — occultengineering mechanical upgrades (afrit/djinni tier) → create `M-06`
- [ ] `s_a_b` — s_a_b:hardsteelblock/doublesteelblock→create M-06 `M-06`

### C-6 · M-03/M-32 ore & byproduct circularity — 5 weaves *(re-homed from v0.7.0)*
_v0.8.0-ELIGIBLE; author silver + palladium crushing first (both veins shipped, no crush exists)_
- [ ] `born_in_chaos_v1` — born_in_chaos_v1:dark_metal_deposit → create:crushing (M-03) `M-03`
- [ ] `expandeddelight` — expandeddelight:salt_ore → Create (create:crushing ore-doubling) `M-03`
- [ ] `galosphere` — galosphere palladium ore→create M-03 `M-03`
- [ ] `pantographsandwires` — pantographsandwires:coal_coke → Create (TFMG:coking byproduct feedstock) `M-32` *(rescoped)*
- [ ] `samurai_dynasty` — samurai_dynasty gem/jade/ruby/onyx/aquamarine ores → create M-03 `M-03`

### C-7 · M-20/M-17/M-19 light bridges — deploy upgrades, FE charging, haunting seams — 5 weaves *(re-homed from v0.7.0)*
_M-17 charging recipes must be AUTHORED (not config — sweep finding); createaddition overlap closed_
- [ ] `createaddition` — createaddition:charging → irons_spellbooks FE-chargeable magic gear `M-17` *(rescoped)*
- [ ] `illagerinvasion` — lost_candle→create (soul/haunting seam) → magic `M-19`
- [ ] `rottencreatures` — rottencreatures→create `M-19`
- [ ] `smokeleafindustries` — smokeleafindustries generator FE output → create M-17 `M-17`
- [ ] `vc_gliders` — vc_gliders:copper_upgrade / nether_upgrade → create `M-20`

### C-8 · Create-spine integration stragglers — 6 weaves *(re-homed from v0.7.0)*
_review individually at authoring_
- [ ] `appleseed` — diet-variety demand→create `M-26`
- [ ] `bountiful` — Decree objective pool→Create-processed goods (M-08/M-12, times=5+3+2) `M-08`
- [ ] `exposure` — exposure→create `M-29`
- [ ] `occultengineering` — occultengineering:spirit_solution → create cross-route dependency `M-29`
- [ ] `pantographsandwires` — pantographsandwires:graphite → Create (create_new_age:energising cross-route dependency) `M-29` *(rescoped)*
- [ ] `sereneseasons` — sereneseasons:season_sensor (redstone output) → create:gearshift / contraption logic `M-16`

### S-1 · M-26 consumption sinks — goods spent against pressure — 14 weaves
_verify rates vs the ~3x cost model; incl. sweep-added coal_coke hearth fuel (cold pressure x burner fleet share one fuel market)_
- [ ] `bakery` — bakery luxury goods (tarts/cakes) → consumption sink (diet system) `M-26`
- [ ] `beachparty` — beachparty cocktails → survival (M-26) `M-26`
- [ ] `chefsdelight` — chefsdelight feast-tier meals (Roast Chicken / Honey Glazed Ham) → diet-system consumption sink `M-26`
- [ ] `cold_sweat` — cold_sweat insulated armor mob-drop sink→survival (M-26, times=2 ACCEPT) `M-26`
- [ ] `cold_sweat` — NEW tfmg:coal_coke(+coal_coke_block) → via Cold Sweat hearth/boiler fuel config → premium  `M-26` **(sweep-added)**
- [ ] `create_central_kitchen` — create_central_kitchen automated feast dishes → consumption sink (M-26) `M-26`
- [ ] `create_confectionery` — create_confectionery effect candies (Speed/Saturation/Regen/Phantom-repel) → survival `M-26`
- [ ] `create_factory` — create_factory sweets→survival (diet demand, sugar group) `M-26`
- [ ] `createfisheryindustry` — seafood dishes→survival (protein diet demand, consumption sink) `M-26`
- [ ] `createfood` — createfood dishes consumed under diet/hunger pressure `M-26`
- [ ] `farmersdelight` — farmersdelight diet-system foods → survival (M-26 consumption sink, AppleSeed pressure) `M-26`
- [ ] `mffs` — mffs force-field projection → survival (PvE base defense against raids) `M-26`
- [ ] `simplehats` — simplehats custom_hatscraps→survival (consumption-sink recycling) `M-26`
- [ ] `smokeleafindustries` — smokeleafindustries:*_gummy / *_extract (refined consumables) → survival M-26 `M-26`

### S-2 · M-16 seasonal reagent gates (Serene Seasons) — 9 weaves
_verify season-gating per crop IN-GAME; the c:crops/ginger tag spans TWO crops (extradelight + snowyspirit) — gate both or it leaks; incl. create_winery grape seasons_
- [ ] `bountiful` — Decree objective pool→seasonal crops / survival outputs (M-16, times=9+3+2) `M-16`
- [ ] `create_central_kitchen` — create_central_kitchen seasonal pie recipe → Serene Seasons crop gate (M-16) `M-16`
- [ ] `create_dragons_plus` — create_dragons_plus:freezing (Bulk Freezing fan method, powder snow catalyst) → survival/season `M-16`
- [ ] `create_winery` — NEW create_winery:red/white_grape_bush → via Serene Seasons fertility config → season-gate `M-16` **(sweep-added)**
- [ ] `createfisheryindustry` — bait_trap catch→survival (seasonal bait, seasonal rare catch) `M-16`
- [ ] `createfood` — seasonal crop ingredients → createfood recipes `M-16`
- [ ] `farmersdelight` — farmersdelight seasonal crops (cabbage/tomato/rice/onion) → survival (M-16 seasonal reagent, Se `M-16`
- [ ] `snowyspirit` — snowyspirit ginger/eggnog/gingerbread→survival (seasonal gate) `M-16`
- [ ] `tide` — tide→survival `M-16`

### S-3 · M-12 survival-side processing chains (food) — 11 weaves
_SCOPE (#129): tide fish via tag-level milling (88 drop-only); upgrade_aquatic via the c:foods/safe_raw_fish tag join_
- [ ] `alcohol_industry` — alcohol_industry→survival `M-12`
- [ ] `cataclysm` — cataclysm:amethyst_crab_meat (Blessed)→survival `M-12`
- [ ] `charta` — charta:empty_wine_glass / empty_beer_glass → survival `M-12` *(rescoped)*
- [ ] `create_integrated_farming` — roost egg/feather/poultry output → survival (via farmersdelight:cooking) `M-12` *(rescoped)*
- [ ] `dndesires` — pack crops/drops → dndesires fan methods (freezing/seething/sanding) → survival `M-12`
- [ ] `ecologics` — ecologics:coconut / coconut_slice → survival M-12 `M-12`
- [ ] `mushroomquest` — mushroomquest edible/effect mushrooms (common to mid-tier: bay_bolete, autumn_skullcap, artist_ `M-12`
- [ ] `naturalist` — naturalist:venison + bushmeat → farmersdelight:cutting / cooking (M-12) `M-12`
- [ ] `snowyspirit` — snowyspirit gingerbread/eggnog→survival (food-processing chain) `M-12`
- [ ] `spawn` — spawn seafood (clam, crab, anglerfish) → farmersdelight:cutting / cooking + create:milling (M-1 `M-12`
- [ ] `upgrade_aquatic` — upgrade_aquatic raw fish (raw_pike / raw_perch / raw_lionfish) → survival `M-12`

### S-4 · Danger-face items — M-34/M-15/M-02/M-05 survival-side — 6 weaves
_verify drop uniqueness; mutantszombies rides LootJS entity-predicates (mobs share vanilla tables)_
- [ ] `cold_sweat` — cold_sweat:hearth (Nether climate-control multiblock)→create (M-05, times=36 opus) `M-05`
- [ ] `copperagebackport` — NEW copperagebackport copper deco/chests ← create:copper_sheet → via replaceInput (81 patt `` **(sweep-added)**
- [ ] `create_jetpack` — create_jetpack:netherite_jetpack→boss-drop gating (M-15, times=5+4+1+1 ACCEPT) `M-15`
- [ ] `ctov` — ctov outpost chests → survival `M-34`
- [ ] `mutantszombies` — mutant zombie variants→survival M-34 `M-34` *(rescoped)*
- [ ] `simplehats` — simplehats grab-bags→survival (boss loot-seed) `M-34`

## v0.11.0 — Magic & MineColonies (milestone 15) — 105 weaves

### M-1 · M-28 colony route wave — requests, cheap basics, colony-locked outputs — 33 weaves
_PRECONDITION: stress-test the MineColonies request/research API first; mcwfences delivery = schematic/style-pack work, not config_
- [ ] `alcohol_industry` — alcohol_industry→economy `M-28` *(rescoped)*
- [ ] `astikorcartsredux` — astikorcartsredux:oak_seed_drill + colony Farmer hut → economy (M-28) `M-28` *(rescoped)*
- [ ] `bakery` — bakery finished goods → MineColonies cook-hut colony demand `M-28`
- [ ] `byzantine` — byzantine schematic styles → economy (M-28) `M-28`
- [ ] `cbc_at` — cbc_at barrel attachments (rifled barrel, silencer, muzzle brake)→economy via MineColonies rese `M-28`
- [ ] `cookingforblockheads` — kitchen as MineColonies cook building (M-28, times=6+4 ACCEPT) `M-28`
- [ ] `create_central_kitchen` — create_central_kitchen automated feast output → MineColonies provisioning (M-28) `M-28`
- [ ] `create_cheese` — aged cheeses→MineColonies colony demand (M-28, times=3 ACCEPT + variants) `M-28`
- [ ] `create_compressed` — create_compressed mechanism_block / cogwheel_block → economy (MineColonies) `M-28`
- [ ] `create_confectionery` — create_confectionery output (candies / chocolate goods) → economy `M-28`
- [ ] `create_factory` — create_factory sweets (waffles/rolls/candy apple)→economy via MineColonies colony requests `M-28`
- [ ] `create_integrated_farming` — roost/net bulk outputs → economy (colony supply via MineColonies hut requests) `M-28` *(rescoped)*
- [ ] `createadditionallogistics` — createadditionallogistics lazy-cogwheels→economy (colony route) `M-28`
- [ ] `createfisheryindustry` — seafood (chowder/soups/steaks)→economy via MineColonies colony requests `M-28`
- [ ] `createfood` — createfood finished dishes → economy (colony supply, MineColonies cook/restaurant hut requests) `M-28`
- [ ] `domum_ornamentum` — domum_ornamentum colony-builder-demands-DO-blocks `M-28`
- [ ] `dynamictrees` — dynamictrees lumberjack colony route → economy (bulk wood supply) `M-28`
- [ ] `extradelight` — extradelight feasts / high-tier dishes → economy (MineColonies colony provisioning) `M-28` *(rescoped)*
- [ ] `farmersdelight` — farmersdelight cooked meals → economy (M-28 colony provisioning) `M-28`
- [ ] `fxntstorage` — fxntstorage hardened-tier→economy (colony cheaper-basics) `M-28`
- [ ] `handcrafted` — handcrafted furniture sets→economy via MineColonies colony requests `M-28`
- [ ] `mcwdoors` — mcwdoors→economy `M-28`
- [ ] `mcwfences` — metal fence variants → MineColonies builder orders `M-28` **(reinstated)** *(rescoped)*
- [ ] `minecolonies` — minecolonies as alternate production route M-28 (times=4+1+1 ACCEPT) `M-28`
- [ ] `minecolonies` — minecolonies colony food output→magic demand (M-28 + colony magic huts, times=3+1+1 ACCEPT) `M-28`
- [ ] `minecolonies_compatibility` — minecolonies_compatibility colony outputs→economy M-28 `M-28`
- [ ] `moblassos` — emerald_lasso (villager capture)→economy via MineColonies colony seeding `M-28`
- [ ] `more_slabs_stairs_and_walls` — more_slabs_stairs_and_walls stone variants → economy (M-28 colony route) `M-28`
- [ ] `smokeleafindustries` — smokeleafindustries refined extracts / gummies → economy M-28 `M-28`
- [ ] `stylecolonies` — stylecolonies Steampunk blueprint style → create `M-28`
- [ ] `stylecolonies` — stylecolonies High Magic blueprint style → magic `M-28`
- [ ] `trailandtales_delight` — trailandtales_delight→economy `M-28`
- [ ] `woodworks` — woodworks→economy `M-28` *(rescoped)*

### M-2 · M-10 imbuement reagent pulls — 20 weaves
_no basics behind infusion; ambergris stays M-10-only; CEI liquid-XP rescoped to bucket/nugget reagents_
- [ ] `aeronautics` — levitite_blend crystallization→magic (arcane catalyst gate) `M-10` *(rescoped)*
- [ ] `alcohol_industry` — alcohol_industry→magic `M-10`
- [ ] `alexsmobs` — alexsmobs:ambergris (rare ocean mob drop) → magic `M-10`
- [ ] `companions` — companions:soul_gem → magic (M-10 via ars_nouveau:imbuement) `M-10`
- [ ] `create_dragons_plus` — create_dragons_plus:ending (Bulk Ending fan method, dragon breath catalyst) → magic (M-10) `M-10`
- [ ] `create_enchantment_industry` — create_enchantment_industry→magic `M-10` *(rescoped)*
- [ ] `createbigcannons` — createbigcannons nethersteel→magic (cross-route) `M-10`
- [ ] `deeperdarker` — deeperdarker heart_of_the_deep→magic (boss-key reagent) `M-10`
- [ ] `dtterralith` — dtterralith:amethyst_seed (amethyst-cave biome) → magic (M-10 via ars_nouveau:imbuement) `M-10`
- [ ] `grimoireofgaia` — grimoireofgaia drops → ars_nouveau:imbuement `M-10`
- [ ] `immersive_armors` — immersive_armors:divine_chestplate set → magic (ars_nouveau:enchanting_apparatus) `M-10` *(rescoped)*
- [ ] `naturalist` — naturalist:antler → ars_nouveau:imbuement (M-10) / occultism:spirit_fire (M-11) `M-10`
- [ ] `naturalist` — naturalist:glow_goop → ars_nouveau:imbuement (M-10) `M-10`
- [ ] `quark` — quark:ancient_wood (Glimmering Weald underground biome) → ars_nouveau:imbuement (arcane infusio `M-10`
- [ ] `quark` — quark:ancient_bookshelf (Glimmering Weald) → ars_nouveau:enchanting_apparatus (power bonus) `M-10`
- [ ] `rottencreatures` — rottencreatures→magic `M-10`
- [ ] `supplementaries` — supplementaries:ash→magic M-10 `M-10`
- [ ] `touhou_little_maid` — touhou_little_maid:broom (endgame rideable flight item)→magic `M-10` *(rescoped)*
- [ ] `trailandtales_delight` — trailandtales_delight→magic `M-10`
- [ ] `woodworks` — woodworks→magic `M-10`

### M-3 · M-11 ritual / spirit-fire transmutation sinks — 21 weaves
_occultism:ritual is NOT KubeJS-safe (shipped 34-magic-web comment) — spirit_fire/apparatus only; endrem eyes ride the two-step offering rescope_
- [ ] `alexsmobs` — alexsmobs exotic drops (ambergris / ender_residue / void_worm parts) → magic `M-11` *(rescoped)*
- [ ] `born_in_chaos_v1` — born_in_chaos_v1:bundle_of_bones → occultism:spirit_fire (M-11) `M-11`
- [ ] `cataclysm` — cataclysm:witherite_ingot / cursium_ingot (boss drops)→magic `M-11`
- [ ] `cold_sweat` — cold_sweat:soul_stalk→magic (M-11, times=2+1 ACCEPT) `M-11`
- [ ] `companions` — companions:crystallized_blood → magic (M-11 via occultism:spirit_fire/ritual) `M-11`
- [ ] `create_integrated_farming` — lava_fishing_net nether drops (blaze rods, magma cream) → magic `M-11`
- [ ] `create_new_age` — create_new_age:corium (reactor waste)→magic `M-11`
- [ ] `deeperdarker` — deeperdarker soul_dust/soul_crystal→magic (spirit_fire) `M-11`
- [ ] `dynamictreesplus` — dynamictreesplus mushroom caps (brown/red)→occultism:spirit_fire (M-11, times=1+1+1 ACCEPT) `M-11`
- [ ] `endrem` — endrem themed eyes (undead_eye, nether_eye, corrupted_eye) → magic via occultism:ritual transmu `M-11` *(rescoped)*
- [ ] `grimoireofgaia` — grimoireofgaia mob-drop fragments → occultism:spirit_fire `M-11`
- [ ] `illagerinvasion` — illusionary_dust (Illusioner drop)→magic via spirit_fire transmutation `M-11`
- [ ] `moblassos` — hostile_lasso (weakened monster capture) → magic via occultism spirit delivery `M-11`
- [ ] `mowziesmobs` — sol_visage / earthrend artifacts→magic via ritual transmutation `M-11`
- [ ] `mushroomquest` — mushroomquest deadly / mythical mushroom caps→magic `M-11`
- [ ] `ribbits` — ribbits:toadstool / brown_toadstool → occultism:spirit_fire M-11 `M-11`
- [ ] `rottencreatures` — rottencreatures→magic `M-11`
- [ ] `samurai_dynasty` — samurai_dynasty:akaname_tongue / Yokai mob drops → magic M-11 `M-11`
- [ ] `spawn` — spawn:angler_fish → occultism:spirit_fire M-11 `M-11`
- [ ] `tide` — tide→magic `M-11`
- [ ] `undergroundworlds` — undergroundworlds:spider_fang (Black Recluse drop) → magic M-11 `M-11`

### M-4 · M-02 mob-drop reagent loot-seeds (magic-side) — 17 weaves
_drops must be unique named items; gaia: fragments/shards only (bags/busts self-useful)_
- [ ] `betterdungeons` — betterdungeons loot tables→magic `M-02`
- [ ] `betteroceanmonuments` — betteroceanmonuments loot→magic `M-02`
- [ ] `betterstrongholds` — betterstrongholds loot→magic `M-02`
- [ ] `ctov` — ctov village loot tables → magic `M-02`
- [ ] `dungeons-and-taverns-v4.4.4` — dungeons-and-taverns loot→magic `M-02`
- [ ] `dungeons_arise_seven_seas` — galleon/fortress loot → magic M-02 `M-02`
- [ ] `edf-remastered-5.0-beta4` — Ender Dragon fight → magic (loot-seed magic reagent drop) `M-02`
- [ ] `formationsnether` — formationsnether structure loot→magic reagent loot-seed (M-02, times=15 opus + 10 opus + 1+1) `M-02`
- [ ] `friendsandfoes` — friendsandfoes:crab_claw → magic (occultism:spirit_fire / ars_nouveau:imbuement) `M-02`
- [ ] `illagerinvasion` — hallowed_gem (Invoker boss drop)→magic via arcane infusion catalyst `M-02`
- [ ] `irons_spellbooks` — irons_spellbooks apothecarist-mob-drops→magic (ritual/transmutation) `M-02`
- [ ] `kobolds` — kobolds:kobold_skull → magic (occultism:spirit_fire transmutation) `M-02`
- [ ] `oceansdelight` — oceansdelight:fugu_slice→magic `M-02`
- [ ] `t_and_t` — t_and_t→magic `M-02`
- [ ] `trek-b0.6.1.1` — trek structures→magic `M-02`
- [ ] `upgrade_aquatic` — upgrade_aquatic jellyfish / thrasher mob drops → magic `M-02`
- [ ] `valarian_conquest` — valarian_conquest boss/elite drops (faction lord relics) → magic M-02 `M-02`

### M-5 · Event & currency gates — M-22 lunar (all moons), M-01/M-07 catalysts — 5 weaves
_moon-event ritual gating needs the pcmc-arcana event hook (CUSTOM-MOD-CANDIDATES) — gate TABLET recipes meanwhile_
- [ ] `ars_nouveau` — Wilden Guardian summon timing → magic (celestial gate) `M-22` *(rescoped)*
- [ ] `endermoon` — endermoon event→magic M-22 `M-22` *(rescoped)*
- [ ] `enhancedcelestials` — Blood/Blue Moon event-state → magic M-22 `M-22`
- [ ] `mowziesmobs` — elokosa_paw (crescent/gibbous/full variants)→magic via lunar-reagent `M-22`
- [ ] `terralith` — terralith Moonlight Grove / lunar biomes → magic M-22 (lunar/celestial reagent gate) `M-22`

### M-6 · v0.11.0 stragglers — 9 weaves
_incl. sweep-added: price the occultism dimensional mineshaft in Create fabrication (anti-bypass)_
- [ ] `ars_nouveau` — ars_nouveau enchanting/spell service → economy (labor) `M-33`
- [ ] `create_hypertube` — hypertube_entrance (sequenced_assembly) requires a magic reagent sub-component → magic `M-29`
- [ ] `create_ironworks` — steel_ingot→magic via cross-route dependency `M-29`
- [ ] `create_new_age` — create_new_age:energising (method)→magic `M-17`
- [ ] `createmechanicalcompanion` — quantum_drive/optical_sensor→magic M-29 `M-29`
- [ ] `occultism` — NEW occultism:dimensional_mineshaft → via authored crafting (c:plates/steel + a Create pre `M-29` **(sweep-added)**
- [ ] `sereneseasons` — season-gated crops (specific fertile-season reagent crops) → ars_nouveau:imbuement or occultism `M-16`
- [ ] `sliceanddice` — sliceanddice sprinkler (fluid-area dispenser) + magic potion fluid→magic `M-29` *(rescoped)*
- [ ] `touhou_little_maid` — touhou_little_maid altar_recipe_serializers (maid summoning / high-tier upgrade gate)→magic `M-05`

## v0.13.0 — Economy & logistics (milestone 17) — 111 weaves

### E-1 · M-08 player-minted currency set — mint recipes + coin loot-seeds — 22 weaves
_RULING (triple-confirmed by sweep, flagged for maintainer): chests seed RAW regional mint-metal + trade goods, NEVER minted coins (faucet class). Mint ladder = tin/silver/palladium on shipped vein weights (55/35/12); steel-mint rows dead_
- [ ] `betterdungeons` — betterdungeons loot tables→economy `M-08` *(rescoped)*
- [ ] `bettermineshafts` — mineshaft chest loot → loot-seed (numismatics coin) `M-08`
- [ ] `betteroceanmonuments` — betteroceanmonuments loot→economy `M-08`
- [ ] `betterstrongholds` — betterstrongholds loot→economy `M-08`
- [ ] `bountiful` — bounty payout→numismatics coin faucet (M-08, times=9+4 opus) `M-08`
- [ ] `create_better_villagers` — CBV villager trades → economy `M-08`
- [ ] `create_ironworks` — tin (c:ingots/tin, regional)→economy via player-minted coin `M-08`
- [ ] `create_ltab-3.9.2` — Create-themed structure loot tables → economy `M-08`
- [ ] `createblockchain` — createblockchain:currency_miner FE intake → Create-Addition FE sourced from scarce regional met `M-08`
- [ ] `createoreexcavation` — createoreexcavation vein table (scarce regional metals) → economy (M-08 player-minted currency) `M-08`
- [ ] `ctov` — ctov structure chests → economy `M-08` *(rescoped)*
- [ ] `dungeons-and-taverns-v4.4.4` — dungeons-and-taverns loot→economy M-08 `M-08`
- [ ] `dungeons_arise_seven_seas` — galleon/fortress loot tables → economy M-08 `M-08`
- [ ] `galosphere` — galosphere palladium→economy M-08 `M-08`
- [ ] `occultengineering` — occultengineering:sterling_silver → economy `M-08`
- [ ] `occultism` — occultism:silver_ingot (c:ingots/silver) → economy `M-08`
- [ ] `ribbits` — ribbits amethyst-shard trade → economy M-08 (player-minted currency framing) `M-08`
- [ ] `t_and_t` — t_and_t→economy `M-08` *(rescoped)*
- [ ] `tidal-towns-1.3.4` — tidal-towns ocean village chests → loot-seed (numismatics coin) `M-08`
- [ ] `trek-b0.6.1.1` — trek structures (ship holds, pyramid chests, fortress rooms)→economy `M-08`
- [ ] `underground_village` — underground_village Stoneholm chest loot → loot-seed (numismatics coin) `M-08`
- [ ] `valarian_conquest` — valarian_conquest faction loot (shields, armor, weapons) → economy M-08 `M-08`

### E-2 · M-34 combat-route supply — 23 weaves
_~half emergent — confirm on playtest and close; Bountiful payouts = goods/rep only (#137 re-scope)_
- [ ] `alexsmobs` — alexsmobs rare drops (void_worm_beak / ambergris / ender_residue) → economy `M-34`
- [ ] `born_in_chaos_v1` — born_in_chaos_v1 mob drops (dark_metal, bones, candy) → economy via M-34 `M-34`
- [ ] `bountiful` — Decree objective pool→boss drops / mob kills (M-34, times=3+2+2) `M-34`
- [ ] `cbc_at` — cbc_at munitions (AP rounds, rockets) as bounty objectives→economy `M-34`
- [ ] `companions` — companions:relic_gold (Sacred Pontiff boss drop) → economy (M-34 combat-route supply) `M-34`
- [ ] `createbigcannons` — createbigcannons munitions/shells→economy (combat supply) `M-34`
- [ ] `createimmersivetacz` — createimmersivetacz ammo → economy (M-34 combat-route supply) `M-34`
- [ ] `dungeons_arise_seven_seas` — galleon/fortress loot → economy M-34 `M-34`
- [ ] `endrem` — endrem boss-linked eye collection → economy (combat-route supply / emergent trade) `M-34`
- [ ] `grimoireofgaia` — grimoireofgaia mini-boss drops + rare reagents → combat-specialist trade `M-34`
- [ ] `hpm` — hpm ships (war-cutter / corvette) → economy (M-34 combat-route supply) `M-34`
- [ ] `illagerinvasion` — hallowed_gem (boss drop)→economy via combat-route supply + enchant service `M-34`
- [ ] `immersive_armors` — immersive_armors finished armor sets (Heavy/Divine/Steampunk) → economy (emergent trade by armo `M-34`
- [ ] `kobolds` — kobold combat drops (skulls, from raiding Dens) → economy (combat specialist → magic user trade `M-34`
- [ ] `naturalist` — naturalist large predator drops → economy M-34 (combat-route supply) `M-34`
- [ ] `oceansdelight` — oceansdelight elder_guardian drops → combat farming → prestige dishes→economy `M-34`
- [ ] `rottencreatures` — rottencreatures→economy `M-34`
- [ ] `s_a_b` — s_a_b steel plates→economy M-34 `M-34`
- [ ] `samurai_dynasty` — samurai_dynasty Yokai drops → economy M-34 `M-34`
- [ ] `sky_whale_ship` — sky_whale_ship loot → economy M-34 `M-34`
- [ ] `tacz` — tacz guns/ammo → economy (combat-route supply / emergent trade) `M-34`
- [ ] `touhou_little_maid` — power_point_bottles (fairy drops / village loot)→economy `M-34`
- [ ] `undergroundworlds` — undergroundworlds dungeon loot (loot=yes) → economy M-34 `M-34`

### E-3 · M-30 regional-scarcity gates — 14 weaves
_SEQUENCING: samurai ruby/onyx/aquamarine have NO native worldgen — author their veins BEFORE any gem-crush or it ships dead JEI paths; re-read all rows vs the v0.7.1 vein map_
- [ ] `aeronautics` — levitite (zinc-gated)→economy (regional commodity) `M-30`
- [ ] `born_in_chaos_v1` — born_in_chaos_v1:dark_metal → regional scarcity gate (M-30) `M-30` *(rescoped)*
- [ ] `byzantine` — byzantine colony buildings requiring exotic/region-locked stone → economy (M-30) `M-30`
- [ ] `create_better_villagers` — CBV Miner villager (buys raw regional metals) → economy `M-30`
- [ ] `createblockchain` — createblockchain:mining_core (geode worldgen consumable) → M-30 regional-scarcity gate on coin  `M-30`
- [ ] `createoreexcavation` — createoreexcavation vein table → economy (M-30 regional-scarcity gate) `M-30`
- [ ] `dtterralith` — dtterralith region-specific tree species → economy (M-30 regional scarcity) `M-30`
- [ ] `ecologics` — ecologics:coconut (beach-biome regional) → economy M-30 `M-30`
- [ ] `mushroomquest` — mushroomquest rare/mythical caps (biome-specific spawning, 32 biome-modifiers)→economy `M-30`
- [ ] `samurai_dynasty` — samurai_dynasty jade/ruby/onyx/aquamarine gems (regional ores) → economy M-30 `M-30`
- [ ] `sereneseasons` — sereneseasons out-of-season crop scarcity → economy (seasonal-scarcity gate, M-30) `M-30`
- [ ] `terralith` — terralith biome c:tags (65) → GTMOGS regional ore-gen M-30 `M-30`
- [ ] `tide` — tide→economy `M-30`
- [ ] `upgrade_aquatic` — upgrade_aquatic raw/cooked fish (regional ocean good) → economy `M-30` *(rescoped)*

### E-4 · M-23/M-24 airframe & drivetrain seams — 12 weaves
_M-23 "hull recipes" do not exist (free-form builds) — re-aim at flight-machine/structural blocks; M-24 rows tier onto the engine seam (gnkinetics T3 / CNA T4), do not stack_
- [ ] `create_connected` — create_connected:kinetic_battery → aeronautics `M-24`
- [ ] `create_dragons_plus` — create_dragons_plus:levitite_fragile_fluid_tank → aeronautics (M-23) `M-23` *(rescoped)*
- [ ] `create_ironworks` — steel_plate / bronze_plate→aeronautics hull (M-23) + drivetrain (M-24) `M-23` *(rescoped)*
- [ ] `create_new_age` — create_new_age advanced_motor / reinforced_motor / generator_coil→aeronautics `M-24` *(rescoped)*
- [ ] `create_tweaked_controllers` — create_tweaked_controllers:tweaked_lectern_controller → aeronautics control surface (M-24) `M-24`
- [ ] `createadditionallogistics` — createadditionallogistics flexible-shafts→aeronautics `M-24`
- [ ] `dndesires` — dndesires:rubber (hydraulic_compacting output) → aeronautics `M-23`
- [ ] `gnkinetics` — gnkinetics planetary/worm/industrial-gear→aeronautics (drivetrain) `M-24` *(rescoped)*
- [ ] `s_a_b` — s_a_b steel plates→aeronautics M-23 `M-23`
- [ ] `supplementaries` — supplementaries:flax/rope→aeronautics M-23 `M-23` *(rescoped)*
- [ ] `t_and_t` — t_and_t→aeronautics `M-23`
- [ ] `tfmg` — tfmg:steel→aeronautics M-23 `M-23` *(rescoped)*

### E-5 · M-33 service-for-hire — 10 weaves
_mostly emergent; incl. sweep-added mage-applied flight enchants (aileron via ars apparatus)_
- [ ] `aileron` — NEW aileron:cloudskipper + aileron:smokestack (enchants) → via ars_nouveau:enchantment (ap `M-33` **(sweep-added)**
- [ ] `chefsdelight` — chefsdelight Cook/Chef villager → service-for-hire (player-economy labor) `M-33`
- [ ] `cmpackagecouriers` — cmpackagecouriers→economy `M-33`
- [ ] `create_enchantment_industry` — create_enchantment_industry→economy `M-33`
- [ ] `exposure` — exposure→economy `M-33`
- [ ] `gravestone` — gravestone:obituary → economy (M-33 service-for-hire: death recovery) `M-33`
- [ ] `numismatics` — vendor block→economy (service-for-hire storefronts, M-33) `M-33`
- [ ] `occultism` — occultism:spirit_trade (summoned trader) → economy `M-33`
- [ ] `railways` — railways conductor logistics → economy (M-33 service-for-hire) `M-33`
- [ ] `securitycraft` — securitycraft base-defense-installation→economy (service-for-hire) `M-33`

### E-6 · M-31 logistics-required bulk goods — 11 weaves
_BLOCKED-ON-LOGISTICS-ARM (#309 watch); incl. sweep-added winter food imports (tropical/temperate asymmetry)_
- [ ] `cmpackagecouriers` — cmpackagecouriers→economy `M-31`
- [ ] `create_compressed` — create_compressed crushed_<scarce>_pile blocks → economy (M-31 bulk-good logistics) `M-31`
- [ ] `create_mobile_packages` — create_mobile_packages delivery network (robo_bee + drone_port) → economy `M-31`
- [ ] `createimmersivetacz` — createimmersivetacz ammo → aeronautics (M-31 logistics-required bulk good) `M-31`
- [ ] `minecolonies` — minecolonies colony bulk output→aeronautics logistics M-31 (times=3 ACCEPT) `M-31`
- [ ] `pantographsandwires` — pantographsandwires overhead-line infrastructure → aeronautics / logistics `M-31`
- [ ] `railways` — railways locometal build demand → economy (M-31 logistics-required bulk good) `M-31`
- [ ] `sereneseasons` — NEW tropical wet/dry vs temperate four-season asymmetry → via SS fertility/biome-season co `M-31` **(sweep-added)**
- [ ] `spawn` — spawn clam/crab bulk catch → aeronautics logistics M-31 `M-31`
- [ ] `terralith` — terralith rare/fantastical biomes (Skylands, Moonlight Grove, Mirage Isles) → aeronautics logis `M-31`
- [ ] `tidal-towns-1.3.4` — tidal-towns as aeronautics destination / logistics stop `M-31`

### E-7 · M-35 maturation / aging — 7 weaves
_create_winery:maturing is the pack first shipped maturation method — register it in the M-35 method list; author against it_
- [ ] `alcohol_industry` — alcohol_industry→economy `M-35`
- [ ] `create_cheese` — create_cheese:maturing station (tag-extensible)→economy (M-35, times=6 opus + 3 + 2) `M-35`
- [ ] `create_winery` — NEW create_winery:red/white_grape_pomace → via create_winery:maturing (wine_cellar) → wine `M-35` **(sweep-added)**
- [ ] `expandeddelight` — expandeddelight:cheese_wheel (aged) → economy `M-35`
- [ ] `exposure` — exposure→economy `M-35`
- [ ] `extradelight` — extradelight:drying_rack / evaporator outputs (dried herbs, syrups, reduced fluids) → economy `M-35`
- [ ] `trailandtales_delight` — trailandtales_delight→economy `M-35`

### E-8 · v0.13.0 stragglers — M-13 fuels, M-37 research gates, misc — 12 weaves
_incl. sweep-added: the rail arm burns fuel (railways fuel_tank config; ownership check vs M-13)_
- [ ] `aeronautics` — adjustable_burner fuel→create/aeronautics `M-13`
- [ ] `create_enchantment_industry` — create_enchantment_industry→economy `M-37`
- [ ] `createbigcannons` — createbigcannons munitions consumption-sink `M-26`
- [ ] `createimmersivetacz` — createimmersivetacz:twelve_gauge_shell / rounds → economy (M-26 consumption sink) `M-26`
- [ ] `mffs` — mffs projector delivery → economy (colony Fortress research gate + service-for-hire) `M-37`
- [ ] `minecolonies` — minecolonies University research→knowledge gate M-37 (times=8+2 ACCEPT) `M-37`
- [ ] `minecolonies_compatibility` — minecolonies_compatibility TaCZ Gunner job→economy M-37 `M-37`
- [ ] `occultism` — occultism:dimensional_mineshaft (spirit miner spirits) → economy `M-18`
- [ ] `railways` — NEW railways:fuel_tank (+coal/charcoal or tfmg fuels) → via S'nR native train-fuel consump `M-26` **(sweep-added)**
- [ ] `sky_whale_ship` — sky_whale_ship loot chests → aeronautics M-15 `M-15`
- [ ] `tfmg` — tfmg fuels→aeronautics M-13 `M-13`
- [ ] `trading_floor` — trading_floor:trading_depot → economy (cross-route bridge + colony labor) `M-29`

---
_26 cluster issues. Regenerate from `decisions-ratified.tsv` after each sweep fold._
