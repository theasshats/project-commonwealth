# Phase 2 candidates — chunk-06

## createmechanicalcompanion   [anchors: Create (1)]
- LEAVE — Personal combat companion; no tradeable output, no magic surface, no processing method. Combat is not a pillar. The dossier itself calls this out — forcing a second edge would be artificial. One-pillar floor is the honest ceiling here.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: fallen-star rock is obviously crushable; yields iron/nickel + xp-nugget byproduct — a Create feedstock bonus for players who find craters, no arbitrage risk
- from: Blood/Blue Moon active (world-state flag) | via: event-as-catalyst for occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual only completable under the right moon — Blood Moon for destruction/summoning rituals, Blue Moon for fortune/attunement — fits both lore and the M-22 "all moons" mandate; event-gating means no item manufactured, just timing (anti-arbitrage built in)
- from: Harvest Moon growth-rate modifier | via: — | to: any | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: Harvest Moon is a passive world-buff on all crops, not an item; can't route it through any method — it's already a free survival bonus, no edge to author

## betterstrongholds   [anchors: survival (1)]
- LEAVE — Pure structure overhaul; zero registered items, blocks, or methods. Nothing to route through any method. A loot-table tweak (drop a coin or reagent in stronghold chests) is a datapack edit outside Phase 2 scope — flag for milestone content work, not a mod weave. One-pillar floor is correct.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — Structure datapack with no items or methods. Same reasoning as betterstrongholds; loot-table seeding is a valid future data edit but is not a mod-weave edge. One-pillar floor is correct.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cherry_cheese_pie / ancient_coffee | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese and ancient coffee are clearly luxury trade goods — multi-step, sniffer-crop inputs make them scarce enough that selling to players/colony is obvious; player nods immediately
- from: trailandtales_delight:lantern_fruit / pitcher_taro | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling exotic sniffer-found fruits into flour/pulp for further processing is a natural light step; puts a sniffer-crop into the Create food-processing web without over-gating (everyday tier = one step)
- from: trailandtales_delight:ancient_coffee | via: extradelight:vat or create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-09 coin path already gives a strong 2nd pillar; adding a second Create route for the same item would create over-engineering — coffee-as-trade-good is cleaner and more distinct. Keep M-12 on the milling/crop side only; don't double up on the flagship drink.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork crushed/molten scarce regional metals (palladium, osmium, platinum, runite, quicksilver…) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the whole point of the mod is higher-yield ore processing — the refined output is the natural mint feedstock; "crush ore → smelt molten → cast ingot → mint coin" is one coherent Create→economy pipeline players will walk without prompting
- from: magic-mod ores (occultism otherstone-metal, galosphere palladium) | via: create:crushing → createmetalwork molten flow | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed-ore tags already cover palladium (galosphere) and the occultism metals; routing them through createmetalwork's crush+melt pipeline gives magic-mod metals a Create doubling bonus — small, sensible, one step
- from: createmetalwork:molten_steel (fluid) | via: M-23 aeronautics structural alloy | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: molten steel cast into structural plates is the obvious airframe material; createmetalwork already produces molten_steel; connecting it to aeronautics hull recipes adds depth without a new chain
- from: createmetalwork molten metals | via: tfmg:casting / create:compacting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: superseded by the molten_steel → M-23 row above; routing every molten metal to aeronautics is over-broad — steel plate is the right single anchor, not the full metal roster

## modulargolems   [anchors: Create (1)]
- from: modulargolems golem bodies (cataclysm cursium / Ice&Fire dragonsteel parts) | via: modulargolems:golem_assemble using boss-drop metals | to: survival (combat progression) | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: dragonsteel and cursium are already boss-drop metals in the pack; gating the best golem bodies behind them makes constructs a natural combat-progression reward — players feel the golem tier-ladder as boss-fight payoff
- from: modulargolems golem core/slot upgrade | via: ars_nouveau:imbuement with source_gem | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbuing a golem core with arcane source connects golemancy to the magic web — a magic-infused construct upgrade feels thematically on-point; one imbuement step is proportionate for a mid-tier upgrade slot
- from: modulargolems golem body parts | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: spirit-fire is for organic-to-essence transmutation (M-11 organic↔magic); applying it to a metal construct body is a tone mismatch — metal parts don't transmute through soul fire; the Ars imbuement above covers the magic pillar cleanly

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: irons_spellbooks:alchemist_cauldron_fill / or as ritual fuel in occultism:ritual | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: liquid XP as a ritual/spell-crafting fuel is immediately intuitive — "bottled experience powers the magic circle"; Iron's cauldron already accepts fluids for brewing; this gives the magic pillar a Create-produced consumable it wants
- from: create_enchantment_industry:experience_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-05 via Iron's/Occultism is cleaner and more specific; adding an Ars imbuement route for the same fluid is redundant — one magic bridge is enough for liquid XP
- from: create_enchantment_industry enchanted books (Printer output) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Printer that mass-produces enchanted books makes those books a commodity — players sell surplus enchants to other players via Numismatics; enchanting factory → trade good is an obvious economy loop
- from: create_enchantment_industry:experience_cake | via: farmersdelight:cooking chain | to: survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: the experience_cake is a Create gimmick item, not a food item — routing it through a cooking chain is a tone mismatch; it exists as a humor/XP item, not a survival food. Don't force it into the food web.







