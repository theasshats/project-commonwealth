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

