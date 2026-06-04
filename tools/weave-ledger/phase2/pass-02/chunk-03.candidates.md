# Phase 2 candidates — chunk-03

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies (any strain) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the strain farm already has dealer/stoner villager trades; routing polished gummies and extracts into coin makes the farm an explicit income source for the trade economy — player earns by specialising in the grow op.
- from: hemp plant / raw buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hemp run through a Create millstone yields shredded hemp / seeds as an alternate entry to the processing chain, weaving the harvest into the Create spine at the everyday tier (no complex gate — just milling a harvest).
- from: smokeleaf generator (FE output) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the generator produces FE that you'd route into Create via createaddition — but this is a power-routing bridge, not a material weave; it doesn't add a meaningful recipe edge (players don't "craft" the bridge, they just connect cables). Depth without a hook a player would notice. Leave as emergent infra if the mods happen to be compatible; not a Phase-2 weave.
- from: hemp building blocks (hemp_planks/bricks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is deco↔Create (crush back to raw/gravel+XP); hemp blocks qualify but the recycling loop is weak design motivation here — the blocks aren't a significant enough decoration product to merit it, and the first-tier M-09 economy tie already gives a second pillar. Don't stack weaves on a mod that has a cleaner one already.

## formationsnether   [anchors: survival (1)]
- LEAVE — no items, no recipe-types, no methods; the mod is a structure placer with loot tables only. Any "weave" would be a loot-table data edit (dropping a pack reagent into its chests), not a mod-to-mod recipe edge. That edit belongs to the mod whose item is placed (e.g. the reagent owner's dossier), not here. No coherent 2nd pillar for formationsnether itself.

## cookingforblockheads   [anchors: survival (1)]
- from: oven / fridge / sink (flagship appliance blocks) | via: create:mechanical_crafting (gated recipe using Create brass/copper sheets as assembly inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a player building a full kitchen earns it through the Create spine — the oven needs a copper heat-plate, the fridge a brass compression fitting — at mid-tier, coherent with the "complex appliances need machined parts" vibe.
- from: cooking_table (assembled kitchen multiblock) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the Cooking Table is a QoL aggregator, not an endgame/flagship item; depth-scaling says simple tier-appropriate gate only (M-05 at mid is already right). Sequenced assembly for a kitchen utility would feel punishing and arbitrary. Keep M-05 only.
- from: cow_jar / milk_jar outputs → food processed via other food mods | via: farmersdelight:cooking | to: economy (via M-09) | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the economy edge belongs on the food mods producing sellable dishes (FarmersDelight, Meadow, Vinery), not on cookingforblockheads which is a convenience layer over them. Don't double-attribute the economy tie.

## endermoon   [anchors: survival (1)]
- LEAVE — no items, no blocks, no recipe-types. It's a lunar spawn-rate event modifier; any weave on enderman drops (ender pearls) belongs on the item's owner (vanilla / enhanced-celestials side) not here. M-22 (lunar/celestial reagent) is the natural home for Ender Moon hooks, but it should be authored on the pearl consumer (e.g. Ars or Occultism), not endermoon itself. No coherent 2nd pillar for this mod.

## betterendisland   [anchors: survival (1)]
- LEAVE — no items, no blocks, no loot, no recipe-types. Pure structure/worldgen overhaul; nothing to route or connect. No coherent 2nd pillar.

## mushroomquest   [anchors: survival (1)]
- from: rare/mythical mushroom caps (agarikon, angels_wing, etc.) | via: farmersdelight:cooking / extradelight:oven | to: Create (via M-12 processing-chain pull folding into the food-processing web) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: foraged rare caps run through cooking-pot/oven into rich broths and dishes — the fungi naturally belong in the food chain already built by FarmersDelight; players forage and then cook, no forced edge.
- from: rare/mythical mushroom caps (endgame tier: agarikon, bay bolete, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a specialist forager sells rare foraged caps as luxury goods — low-floor income, high ceiling on mythicals; coherent with the emergent economy goal.
- from: deadly/mythical mushroom caps (death cap, destroying angel equivalents) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the transmutation idea is thematically coherent (poisonous caps → dark reagent) but occultism:spirit_fire is already heavily loaded with mob-drop reagents (M-02/M-11 uses). Adding a plant product blurs the identity of the method. More importantly, mushrooms have no established occult lore in this pack; forcing toxic shrooms into spirit_fire is weakly motivated compared to the cleaner M-12 + M-09 pair already accepted. Prefer not to stack a third weave unless the magic web is thin on plant inputs.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — structure-only datapack mod with no items, no recipe-types. Any pillar tie would be a loot-table data edit on a vanilla item; not a mod-to-mod edge. No coherent 2nd pillar for trek itself.

## letsdocompat   [anchors: survival (1)]
- LEAVE — this mod IS the weaving layer for the Let's Do / Farm&Charm / Farmer's Delight food cluster. It ships recipes + c:tags that already perform M-12-style cross-mod routing. There is no second pillar to add because its function is the connection itself; the "2nd pillar" is earned by the food mods it bridges, not by the glue mod. Forcing an additional edge here would be redundant.

## mutantszombies   [anchors: survival (1)]
- LEAVE — vanilla-style hostile mob expansion; no drops, no items beyond spawn eggs, no methods. Nothing to route. The increased threat level is the contribution; no coherent 2nd pillar without fabricating a drop that isn't there.

## dndesires   [anchors: Create (1, deep)]
- from: milkshake foods (chocolate_milkshake, glowberry_milkshake) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: milkshakes are a Create-processed luxury food (sap + milk through the hydraulic press chain) — exactly the high-effort consumable that earns coin as a trade good; feeds the emergent economy without forcing it.
- from: rubber (raw/processed) | via: numismatics sell/price (as scarce processed intermediate) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: rubber is an intermediate, not a finished good; M-08 is for scarce regional metal → coin, not general intermediates. More importantly, rubber's value is as a crafting input for other Create components — selling it undercuts its role. Better left as internal Create-pillar material. Reject; don't double-spend the economy motif here.
- from: any foraged/harvested pack crop or drop | via: dndesires:freezing / dndesires:seething / dndesires:sanding (fan catalyst methods) | to: survival (deepens the food-processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pack crops (mushrooms, grains, seasonals) routed through the freezing or seething fan as a processing step (freeze-drying mushrooms into powder, searing herbs into concentrates) — Create-native, everyday tier, bridges survival harvests into Create machinery.

== CHUNK COMPLETE ==
