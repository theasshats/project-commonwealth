# Phase 2 candidates — chunk-11 (context-fed)

## immersive_armors   [anchors: survival (1)]
- NEW | from: immersive_armors prismarine set (spike retaliation, ocean-themed) | via: recipe requiring upgrade_aquatic:prismarine_rod or deepsea material as cross-route input | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the armor that spikes back attackers is forged from the real deepsea rods — the ocean specialist's material is the one ingredient the armorsmith can't make themselves
- NEW | from: immersive_armors heavy/steampunk set crafting offcuts (pressed plate scraps) | via: create:crushing lossy recycle → create:experience_nugget + iron dust | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the pressing bench leaves trim waste — crushing the offcuts recovers iron dust and an XP sliver; industrial circularity closes the armor-smithing chain
- NEW | from: immersive_armors heavy armor set (c:armor/heavy) | via: minecolonies research unlock — MineColonies Guard Tower research unlocks the cheaper heavy-set recipe path, not just provisioning requests | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony's barracks research is what teaches your armorsmith the efficient plate-forging method — knowledge the solo crafter has to discover the hard way

## expandeddelight   [anchors: survival (1)]
- NEW | from: expandeddelight:salt (c:dusts/salt) as a mandatory preservation input | via: farm_and_charm:drying + extradelight:drying_rack recipes requiring salt as a consumed ingredient (not just a product) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: every batch of dried meat or pickled asparagus burns through a pinch of salt — the miner who controls the salt ore controls the kitchen's shelf life
- NEW | from: foreign mod fruits/berries (farm_and_charm:nettle, alexsmobs exotic fruit drops, born_in_chaos_v1:bagof_candy) | via: expandeddelight:juicing (the registered method acting as an inbound sink) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Juicer is the pack's dedicated fruit press — routing exotic mod fruits through it makes expandeddelight the processing hub for the whole botanical web, not just its own crops
- CHALLENGE | from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: ars_nouveau:imbuement (warm/fire-attuned reagent) | to: magic | motif: M-10 | verdict: REJECT | hook: existing 1-ACCEPT row (fire-attuned cinnamon) violates M-10's anti-rule — cinnamon dust is an everyday kitchen spice; gating it behind arcane infusion makes it a basic component behind a complex recipe, which the motif explicitly forbids; the Create milling anchor is the correct weave for cinnamon

## born_in_chaos_v1   [anchors: survival (1)]
- NEW | from: born_in_chaos_v1:dark_metal (Create-processed ingot) | via: create:haunting → soul-tempered dark metal (a distinct product, not ore-doubling) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal already carries a cursed aura — running it through the soul-fire haunt does not double the yield but transmutes it into a spirit-fused variant that Occultism rituals can actually consume; the M-03 crush and the M-19 haunt give two different outputs from the same ore, not redundant routes
- NEW | from: born_in_chaos_v1:dark_metal_deposit (regional via 50 biome-modifiers, danger-biome locked) | via: GTMOGS regional ore-gen reinforcing the biome-danger compound | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal only appears where Born in Chaos' gothic biome modifiers land — a player who hasn't pushed into the spooky zones must buy it; scarcity that has teeth because the supply zone is also the most lethal zone in the pack
- CHALLENGE | from: born_in_chaos_v1:dark_metal_deposit | via: numismatics mint (M-08) | to: economy | motif: M-08 | verdict: REJECT | hook: two existing ACCEPT rows mint dark metal as coin; this is weak — M-08 works when the metal is the chosen settlement medium (like a regional gold-equivalent); dark metal is a combat-biome danger material whose loop role is boss-key (M-15) and trade commodity (M-34), not a settlement currency; minting it as coin fragments the currency signal and the reagent-ownership table already reserves numismatics coins for player-minted settlement medium from scarce regional metals, which dark metal is but its primary demand vector is tech/magic, not currency

## northstar   [anchors: Create, aeronautics (2)]
- NEW | from: northstar off-world planets (Moon/Mars atmosphere = Cold Sweat hostile zone) | via: config tie — Cold Sweat temperature extremes apply on Northstar planet surfaces, requiring survival gear (insulated suits, heated food, oxygen) produced/traded | to: survival | motif: M-26 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Moon surface is a Cold Sweat arctic extreme — your survival kit is a consumable that the warmth-food and cold-gear specialists produce; going to space burns survival resources as a deliberate cost of the off-world economy
- NEW | from: northstar planet-dimension ores (titanium/tungsten, off-world locked) | via: occultism:miner dispatched to a northstar dimension — a summoned spirit mines where mortals need air | to: magic | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Djinni sent to mine Martian ore needs no breath — occultism's dimensional miner is the magic route to space metals, trading spirit-ritual skill for the rocketeer's transport monopoly
- CHALLENGE | from: northstar:astronomical_reading | via: ars_nouveau:enchanting_apparatus or occultism:ritual (M-22 celestial reagent) | to: magic | motif: M-22 | verdict: REJECT | hook: two ACCEPT rows exist for astronomical_reading as a lunar/celestial catalyst, but the reading is navigation data generated at a crafting table, not a material available only during a lunar event — M-22 is for items obtainable only during a specific moon phase/event; the reading is obtainable any clear night, which does not satisfy the "only during event" requirement; the correct motif is M-37 (research/knowledge gate), not M-22

## resourcefulconfig   [anchors: support (1)]
- LEAVE — zero-surface config library; no items, methods, or loot to route; its weave is the dependent mods' weave

## sablecollisiondamage   [anchors: support (aeronautics physics addon) (1)]
- LEAVE — pure behavior patch; no items/methods/loot; existing REJECT rows correctly dismiss all proposals

## structurize   [anchors: support (MineColonies build engine) (1)]
- LEAVE — required dependency for MineColonies with 10 items that are builder-tools, not materials; its weave is MineColonies' weave

## ohthetreesyoullgrow   [anchors: support (worldgen library) (1)]
- LEAVE — zero items/methods; tree-growth framework with no player-facing material surface

## kiwi   [anchors: support (library/API) (1)]
- LEAVE — developer library with no gameplay content; zero items/methods

## bundle_recipe   [anchors: support (QoL/vanilla-parity) (1)]
- LEAVE — re-enables a vanilla crafting recipe; the bundle is vanilla, no foreign material or method surface

## immersive_paintings   [anchors: decoration palette / support (1)]
- LEAVE — pure decorative-expression mod; zero material surface (4 items that are canvas-display objects, no fluids/essences/ores); every previous weave attempt correctly rejected; forcing an edge would be busywork

## jade   [anchors: support (client UI) (1)]
- LEAVE — display-only HUD overlay; no items, no methods, no material surface; nothing to route

## towntalk   [anchors: support (MineColonies flavor) (1)]
- LEAVE — audio-only colonist voice lines; no items/methods; its anchor is MineColonies' anchor

## farm_and_charm   [anchors: survival (1)]
- NEW | from: exotic mob meats (alexsmobs/mowziesmobs combat drops tagged c:meats) | via: farm_and_charm:mincer accepting foreign meats by tag → ground meat for farmhouse recipes | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the fighter who drops a rare Mowzie mob brings its meat to the farmstead mincer — combat-route output feeds the food-production chain; the two specialists need each other's work
- NEW | from: farm_and_charm dried grains (barley/oat preserved via farm_and_charm:drying during harvest season) | via: farm_and_charm:drying → stored as out-of-season supply held by a preservation specialist | to: economy | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: the drying rack turns peak-harvest grain into off-season commodity — the farmstead that dries summer barley becomes the winter supplier everyone trades with; the maturation axis is time-hoarding, not just aging

## createtreadmill   [anchors: Create (1)]
- LEAVE — pure SU-source block; all weave routes correctly rejected (TLM Soul Orb is flavor-mod not a pillar; player effort is not a routable material; no items/methods of its own); the dossier confirms no clean 2nd-anchor routing
- CHALLENGE | from: createtreadmill:treadmill (player-powered SU source) | via: create:* network consumption | to: survival | motif: M-26 | verdict: REJECT | hook: M-26 requires a *material item* being spent against pressure so demand renews — the treadmill consumes player time/presence, not a craftable good; the M-26 framing misapplies the motif to labor rather than material consumption; M-33 (labor service) is closer but the treadmill is not a player-to-player service delivery mechanism either, since it just emits SU into a local network

## pantographsandwires   [anchors: Create, aeronautics (2)]
- NEW | from: pantographsandwires overhead catenary mast/cantilever blocks (heavy iron+concrete construction, produced in quantity) | via: aeronautics bulk transport — building a full rail electrification corridor requires shipping masts, wire coils, and cantilever brackets at scale, making the logistics arm necessary | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't carry a year's worth of catenary mast on your back — electrifying the main line between colonies is an airship cargo job
- CHALLENGE | from: pantographsandwires:graphite (c:item/ingots/graphite) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | verdict: REJECT | hook: the dominant 6-REJECT consensus correctly kills this — graphite is an industrial electrical conductor with no established arcane connotation in Ars/Occultism lore; the tone clash is real and no mechanical hook supports it; the M-17/M-29 create_new_age:energising rows are the correct anchors for graphite's cross-system role

## createbigcannons   [anchors: Create, aeronautics (2)]
- NEW | from: createbigcannons nethersteel munitions (built_up_nethersteel_cannon_barrel / nethersteel shell) | via: recipe requiring an ars_nouveau enchanting_apparatus step or irons_spellbooks:alchemist_cauldron_brew to charge the propellant — the shell that penetrates magic armor needs a mage's blessing on the charge | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the cannoneer forges the barrel but the charge that makes it punch through warded hulls comes from the magic specialist — a cross-route dependency that keeps the arms race player-driven rather than self-contained
- NEW | from: createbigcannons cannon-grade cast_iron/steel production (colony foundry route) | via: minecolonies research unlock — Barracks/Guard research at high tier unlocks a colony-cheaper cannon-parts production path | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony's master-of-ordnance research is what enables batch-casting cannon balls at half the fuel cost — a knowledge gate that keeps the colony player relevant to the war economy even without personal Create expertise

## mowziesmobs   [anchors: survival (1)]
- NEW | from: mowziesmobs boss kill (Barako / Frostmaw / Wroughtnaut defeated) | via: minecolonies research — defeating each boss unlocks a specific colony research branch (e.g., Barako → Solar Forge research, Frostmaw → Glacial Smelting research) that enables a colony-cheaper production path | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: your colony smiths couldn't figure out high-temp solar forging until you brought back proof that Barako had been conquered — a knowledge gate only the combat specialist can unlock for the colony player
- NEW | from: mowziesmobs boss drop locations (Frostmaw in cold biomes, Barako in savanna, Wroughtnaut in dungeons) | via: GTMOGS / biome-spawn configuration — boss access is biome-locked, so the supply of ice_crystal/sol_visage/earthrend is region-gated by terrain, not recipe | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: ice_crystal only comes from the coldest biomes where Frostmaw spawns — a hot-climate colony must either travel far or trade with the faction that controls the glacier; the artifact supply is as region-locked as any ore
- CHALLENGE | from: mowziesmobs:ice_crystal (Frostmaw drop) | via: occultism:spirit_fire → frost essence (M-11 transmutation) | to: magic | motif: M-11 | verdict: REJECT | hook: existing rows split 3 ACCEPT / 2 REJECT on this; the REJECT reasoning is sound — ice_crystal is already the pack's intended boss-key gate item (M-15, dominant 19-ACCEPT); consuming it as a disposable spirit-fire reagent destroys the gate-key, making it dual-spend; a non-renewable boss artifact that gates high Create tech should not also be a bulk magic reagent or it forces the player to grind the boss repeatedly to satisfy both demands; sol_visage is the better magic-route candidate since it has fewer claimed roles

