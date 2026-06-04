# Phase 2 candidates — chunk-03

## sereneseasons   [anchors: survival (1)]

- from: season_sensor redstone output | via: Create contraption logic (gearshifts/clutches reading redstone) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create automated farm switches crop type or opens greenhouse shutters when the sensor fires — the machine reads the calendar, not the player
- from: out-of-season produce scarcity | via: numismatics sell / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: scarcity is real but this is a passive market effect, not a discrete recipe-level weave; the season already applies the scarcity — adding a coin-sink on top is redundant friction with no method hook. Revisit if M-09 bounties get a formal price-list in 0.9.
- NOTE: M-16 is the priority motif (the ledger explicitly calls Serene Seasons a "priority" seasonal lever); the sensor-→-gearshift route is the cleanest single step and requires no new items.

## expandeddelight   [anchors: survival (1)]

- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt is a basic seasoning input; crushing the ore in a Create crusher doubles the yield (salt dust) and byproducts a small XP nugget — salt becomes a reason to run a crusher rather than smelting raw ore
- from: expandeddelight:cinnamon (dust/log) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grinding cinnamon bark in a Create Millstone produces cinnamon dust for cooking/alchemy — a light one-step tie that makes the Millstone relevant to the kitchen chain
- from: expandeddelight:cheese_wheel / goat_cheese_wheel | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese is time-gated (cask maturation) and scarce enough to be worth trading; a cheese wheel is exactly the sort of regional luxury good M-09 targets
- from: expandeddelight:cheese_wheel | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: infusing cheese into a magic reagent is thematically incoherent — dairy and arcane infusion don't share a tone; M-10 warns not to gate basic components, and cheese is a food, not a power item. No upgrade to cheese's power level justifies the ritual frame.
- from: expandeddelight:asparagus / chili_pepper (seasonal crops) | via: create:milling or farmersdelight:cutting | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: these crops already route through farmersdelight:cooking/cutting (existing inbound weave); adding a second Create milling path gives diminishing returns and clutters the recipe graph — the salt_ore + cinnamon routes already anchor to Create cleanly. Record as low-priority duplicate.

## bosses_of_mass_destruction   [anchors: survival (1)]

- from: bosses_of_mass_destruction:obsidian_heart | via: create:sequenced_assembly (as a required ingredient in a multi-stage chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Night Lich drops an Obsidian Heart; it becomes the keystone component in the sequenced-assembly chain for a tier-3 Create machine part — players must kill the boss before the machine can be completed
- from: bosses_of_mass_destruction:ancient_anima | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: "ancient anima" reads like distilled soul-essence — a perfect high-tier catalyst for an arcane infusion or Occultism ritual, giving the Obsidilith drop a magic use alongside the tech gate
- from: bosses_of_mass_destruction:blazing_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: ancient_anima is the better single magic pick — using two boss drops for the same motif (M-10 imbuement) dilutes both and splits the design signal. blazing_eye should be reserved for M-15 boss-key gating on a Create/tech recipe; one drop per axis is cleaner. Flag for reagent-ownership check before authoring.
- from: bosses_of_mass_destruction:void_thorns (Void Blossom drop) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: void thorns transmuted via Occultism spirit ritual into a void-essence — thematically consistent (void mob → spirit method), giving the Void Blossom's drop a magic-side use and distinguishing it from ancient_anima
- from: boss reagents (any) | via: numismatics sell or bountiful bounty | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional (leans no, flagged for 0.9 review); surfacing for completeness but should not be authored until the currency review confirms the bounty board model. Also, boss drops as coin-buyable goods would undercut their gating role.

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / farm_and_charm:oat | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat feed a Create Millstone to produce flour — the bread chain now runs through the spine; a windmill-driven millstone grinding grain is the iconic farm-Create image
- from: farm_and_charm:butter / farm_and_charm:bacon / farm_and_charm:baked_lamb_ham | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the husbandry loop (feed animal → better drops → surplus butter/meat) produces sellable goods naturally; butter and cured meats are classic regional trade goods
- from: farm_and_charm:barley | via: vinery:wine_fermentation or alcohol_industry:alcohol_boiling | to: economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: Barley→ale is thematically coherent but the pack already has vinery/wine and alcohol_industry routes in the processing-chain web; adding barley-ale through yet another intermediate risks over-branching the food graph. The grain→flour milling path (ACCEPT above) is the cleaner single hook. Revisit in 0.9 economy update if ale needs a dedicated identity.
- from: farm_and_charm:fertilized_farmland | via: any Create or magic method | to: Create/magic | motif: none | power: everyday | tone: ok | verdict: REJECT | reason: fertilized farmland is a placed block, not a material; no method routes a block type — no-motif, leave alone.

## sky_whale_ship   [anchors: survival (1)]

- from: sky_whale_ship loot chests | via: aeronautics (thematic destination — players fly ships up to board them) | to: aeronautics/Create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales are a natural airship destination; seeding their loot tables with a Create Aeronautics progression item (blueprint fragment / propulsion part) makes reaching them by ship a meaningful reward — the exploration and the tech pillar reinforce each other. This is a loot-table weave not a recipe, flagged for human review re: scope.
- from: sky_whale_ship loot chests | via: numismatics coin drop | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: coins-in-loot is logistically valid but weak as a second pillar — it adds to economy without giving sky_whale_ship any distinct economy identity. The aeronautics loot route (ACCEPT) is a stronger and more distinctive hook.
- NOTE: sky_whale_ship has 0 registered items/blocks; all weaves are loot-table edits, not recipe authoring. The ACCEPT above requires a datapack loot-table addition, not a KubeJS recipe. Flag for Gate 2 review — this is a data approach, not a method-routing.

## endermoon   [anchors: survival (1)]

- LEAVE — endermoon is a spawn-rate event with no items, blocks, or methods of its own; it is a pure atmospheric/world modifier. Any weave on ender pearls belongs to the pearl drop itself (a vanilla item) or to the Enhanced Celestials parent system. Forcing a method-routing here would be a contrived edge on the event-timing layer. The lunar-reagent motif M-22 is the natural hook, but it requires items *obtainable during* the event — endermoon contributes none; it only multiplies what was already there. Revisit if a future content pass adds an endermoon-specific drop (e.g. a "Voidpearl" variant that only drops during the event).

## createlowheated   [anchors: Create (1)]

- LEAVE — createlowheated is a single-block balance tweak (heat mechanics rework); it sits entirely within the Create pillar as a depth mod. It has no tradeable outputs, no magic surface, no economy hook, and no discrete material to route through a second pillar's method. Its "fuel in → heat out" loop is a Create-internal resource management concern. Forcing a survival or economy edge (e.g. "coal is now scarce so buy it") would attach to the coal/fuel supply chain, not to this mod. No second pillar candidate survives red-teaming.

## direct_chute   [anchors: Create (1)]

- LEAVE — direct_chute is a single Create logistics component (zinc conduit) whose entire purpose is Create-internal item transport. It has no methods, no tradeable materials, and no thematic surface outside the Create pillar. Aeronautics-logistics tie was considered (chutes on ships) but it is nominal — using a zinc pipe on a ship doesn't earn an aeronautics pillar any more than any zinc block does. No coherent second pillar exists.

## brazil_legends   [anchors: survival (1)]

- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a werewolf-like cryptid's claw, burned in Occultism spirit fire, transmutes into a spirit essence — folkloric creatures and spirit magic share the "liminal/otherworldly" register; the pairing is thematically coherent
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is already associated with preserved/trapped essences; imbuement of amber into an arcane reagent reads as releasing the trapped essence — a sensible arcane-infusion target that ties the folklore drops to the Ars web
- from: brazil_legends:big_tongue (Cuca/folklore drop) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: using both big_tongue AND capelobo_claw for the same M-11/magic slot is redundant; one mob-drop-to-spirit-fire (capelobo_claw) is sufficient. big_tongue is thematically weaker (a tongue → spirit essence is less coherent than a claw). Keep as a low-priority alternative if capelobo_claw is already claimed.
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: amber as a decorative curiosity-sellable is coherent in isolation, but this mod's value is its folklore-magic vibe, not trade goods; giving amber both a magic role (ACCEPT above) and an economy role splits its identity without clear benefit. The magic route gives a stronger second pillar. Flag for 0.9 economy review if amber supply turns out to exceed magic consumption.

## betteroceanmonuments   [anchors: survival (1)]

- LEAVE — betteroceanmonuments is a YUNG's structure overhaul with 0 registered items/blocks. Its only data hook is loot tables (chest additions), not methods or materials. A loot-table seed (add a coin or reagent to monument chests) is a datapack edit, not a mod weave, and does not give betteroceanmonuments its own second pillar — it merely seeds the economy through the location. Defer to any future "aquatic-biome economy" pass that deliberately seeds regional loot. Guardian drops (prismarine/sea lanterns) are vanilla items; their economy/Create uses belong to the vanilla-items weave layer, not to this mod.

== CHUNK COMPLETE ==
