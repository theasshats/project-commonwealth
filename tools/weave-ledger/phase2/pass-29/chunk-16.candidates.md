# Phase 2 candidates — chunk-16

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence bonds to source_gem as the Iron's-side magic currency hub, completing the magic-web spine
- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: mithril goes through the Crusher for ore-doubling just like every other ore — no reason the wizard metal is exempt
- from: irons_spellbooks mob drops (apothecarist / ice_spider / boss loot) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: mob drops from wizard-tower encounters are raw magical residue — spirit-fire transmutes them into Occultism essences
- from: irons_spellbooks:scroll (one-shot consumable) | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: haunting infuses soul-fire; scrolls burning to ash in a soul-fire chamber is thematically odd for a scholarly magic mod and adds no mechanically useful output
- from: irons_spellbooks:alchemist_cauldron brew outputs (potions/brews) | via: create:filling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Alchemist Cauldron's fluid brews are piped out by Create filling — Brewery → fluid logistics is already the inbound seam, this deepens it (iron's brew outputs feed Create-mixing recipes as reagents)
REWORK: OK — existing Create (emptying/filling) connection is real and functional; no arbitrary edges spotted.

## byzantine   [anchors: survival (1)]
- LEAVE — pure schematic/style pack for MineColonies; 0 items, 0 blocks, no loot table, no material surface. No coherent weave target beyond MineColonies itself.

## kubejs   [anchors: support (1)]
- LEAVE — the pack's weaving engine, not a weave target; zero in-game material surface.

## startuptime   [anchors: support (1)]
- LEAVE — boot-time diagnostic logger; zero in-game content.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a crop — run it through the Millstone (or Grinder) to get ground ginger spice powder, feeding extradelight/farmersdelight spice chains; a crop finds its place in the Create processing web
- from: snowyspirit:ginger (c:crops/ginger) | via: extradelight:mortar | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mortar-and-pestle is exactly the right tool to grind ginger into a spice; this ties the winter crop into the deep-cuisine station set
- from: snowyspirit:gingerbread_cookie / eggnog | via: farm_and_charm:stove or extradelight:oven | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: baking gingerbread in an oven (instead of a plain crafting table) is the obvious culinary weave; eggnog reduces on the Vat — both read naturally as festive kitchen output
- from: snowyspirit:eggnog | via: vinery:apple_fermenting (or alcohol_industry:alcohol_boiling) | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: eggnog/nog aged/fermented in a barrel is a classic; ties the winter drink into the maturation/brewing chain (M-35 aging specialist)
- from: snowyspirit:sled | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a sled with moving parts reads as light Create fabrication — mechanical_crafting for the curved runners is a one-step gating that makes the sled feel like a crafted vehicle, not a freebie
- from: snowyspirit sled (terrain vehicle) | via: aeronautics logistics route | to: aeronautics | motif: M-31 | power: mid | tone: clash | verdict: REJECT | reason: the sled is a low-tech downhill toy; calling it "aeronautics logistics" is a stretch — it doesn't use any Create Aeronautics system and the tone clashes with airships/trains
- from: snowyspirit:gingerbread / candy_cane blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: gingerbread crushing back to sugar/cocoa is technically M-04-shaped, but it's absurd flavor — the deco blocks are decorative food, not a metal/stone that should recycle; forced edge

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / oat grains | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grains hit the Millstone first — barley and oat into flour is the exact step Create milling does for wheat; tying this farmhouse kitchen into the Create spine is the obvious 2nd anchor
- from: farm_and_charm:barley / oat | via: vinery:apple_mashing or alcohol_industry:alcohol_boiling | to: survival/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: barley is the canonical brewing grain; routing it through the fermentation/mash chain gives the brewery a native cereal malt — aging specialist connection
- from: farm_and_charm animal-husbandry surplus (meat/eggs/butter) | via: minecolonies:composting or as MineColonies provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony's food-supply requests (Farmer, Cook hut) consume these goods, so a well-run chicken coop/cattle grid is the colony's pantry — makes surplus production a colonial demand driver
- from: farm_and_charm:butter | via: extradelight:mixing_bowl or oven | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: butter from the coop/farm feeds directly into extradelight's baking stations (brioche, pastry dough) — cross-mod food-chain pull
- from: farm_and_charm:fertilized_farmland | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: apply Farmer's Delight's (or farm_and_charm's) fertilizer/bone-meal equivalent onto farmland via a Deployer — light single-step Create automation of the growth-boost
- from: farm_and_charm products | via: numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired — "farmhouse surplus is sellable" is the ambient endpoint; economy link requires demand-gating, and the M-28 colony route already captures the real demand edge
REWORK: OK — no existing 2nd-anchor connections to flag (vanilla only inbound); new links above are the additions.

## fluid   [anchors: Create, aeronautics (2)]
- from: fluid:centrifugal_pump / smart_fluid_interface | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the high-tier smart interface (automation-grade pumping control) assembled in a sequenced chain — adds depth to the premium tier, consistent with how Create's own brass parts work
- from: fluid:neon_tube (decorative lighting) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: neon tubes (glass + dye + wire) crush back to glass pane + dust at the Crusher — lightweight M-04 deco recycling; fits the "metal/glass deco recycles" motif
- from: fluid:honeycomb_mold (item in digest) | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the honeycomb mold pressed in Create's rolling mill to shape it — small step that grounds the mold in Create fabrication
- from: fluid parts (copper components) | via: tfmg:casting | to: Create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: fluid mod's copper parts are already made via create:compacting/mechanical_crafting; a TFMG casting bypass would duplicate an existing route with no loop benefit — no-motif gain
REWORK: OK — existing (Create + aeronautics) connections are sound and documented; no arbitrary edges.

## craftingtweaks   [anchors: support (1)]
- LEAVE — crafting-grid QoL (rotate/balance/clear buttons); zero material surface, no items, no recipes, nothing to route.

## patchouli   [anchors: support (1)]
- LEAVE — guide-book library; the `patchouli:shapeless_book_recipe` type only produces guide books, no material sink or loop contribution.

## multipiston   [anchors: support (1)]
- LEAVE — MineColonies/Structurize internal dependency block; 1 block/item (the piston itself), loot=yes but the block's loot is itself; no material web surface worth routing.

## lionfishapi   [anchors: support (1)]
- LEAVE — animation/entity API library; 0 items, 0 blocks, no loot, pure code.

## tide   [anchors: survival (1)]
- from: tide rare fish (biome-locked, rarity-tiered) | via: farmersdelight:cutting (already wired) + create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw fish → filleted cuts on the Cutting Board already works; route fish byproducts (bones, scales) through a Millstone to fishmeal fertilizer — closes the loop from ocean to farm
- from: tide exotic/void fish (abyss_angler, void-biome catches) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: creatures from the void and the abyss carry residual dark energy — spirit-fire transmutes them into Occultism essences; rare catches become a magic reagent source that the combat-averse player can farm
- from: tide exotic fish | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a unique fish from a lunar-event biome imbued into an arcane reagent — foreign material refined through the enchanting apparatus into a spell component; pairs with seasonal fishing (M-16 Serene Seasons compat already noted in dossier)
- from: tide rare fish (regional biome-locked catches) | via: regional-scarcity gate (not a recipe) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tide's biome-modifier system means certain fish only appear in specific regional biomes — a jungle-region angler has anchovy; a deep-ocean specialist has abyss fish; neither can self-supply both, so inter-regional fish trade is emergent
- from: tide fish | via: numismatics / bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired — "fish are sellable" is the ambient endpoint; the M-30 regional-scarcity row already captures the demand-gating logic
- from: tide fish | via: minecolonies (Cook/Fisher hut provisioning) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Fisher hut + Cook hut request fish stock for colony food; tide's 100+ fish fill those requests while making rare varieties a specialty trade item the colony can't always source itself
REWORK: OK — no existing 2nd-anchor connections to flag (only farmersdelight:cutting inbound); new links above provide the 2nd anchor.

## pantographsandwires   [anchors: Create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking | to: Create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: coal_coke is the metallurgical intermediate — TFMG's coking oven produces it and pantographs consumes it (byproduct→input circularity); the railway electrification chain pulls from the same industrial coking that steelmaking uses
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:pressing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite rods pressed from coke in Create — the railway-grade carbon conductor is a Create-fabricated intermediate, not a raw mine drop; adds one crafting step that grounds the material
- from: pantographsandwires:graphite | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: graphite is an industrial conductor; pulling it into arcane infusion as a magic reagent has no thematic grounding (conductive ≠ magical); tone clash — industrial vs. high-fantasy arcane
- from: pantographsandwires overhead-line infra | via: minecolonies colony route (Builder constructs station/depot) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: overhead wires + masts are bulk construction materials a colony Builder could deploy for a train-station district build — the economy/logistics arm of colony expansion needs rail infra
REWORK: OK — existing Create + aeronautics anchors are correct and deep (6 inbound recipe types including sequenced_assembly); no weak edges.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- from: Ender Dragon (harder fight, boss) | via: loot-seed — add weave-relevant drops to the dragon's loot table | to: economy/magic | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a harder dragon *should* drop something proportionally valuable — seed the loot table with a combat-specialist trade good (M-34) or a magic gating material (M-15 boss-key) so killing the buffed dragon pays off for the group, not just the solo victor
- from: Ender Dragon (harder fight, boss) | via: loot-seed | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the endgame boss-key for the hardest Create/magic tech recipe (e.g. the void-tier sequenced-assembly unlock) drops only from the 500-HP dragon — makes the dragon a required milestone for the full pack progression, not just "get an elytra"
- from: edf behavior (AI-only, no items) | via: recipe | to: Create | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: the mod adds zero items/blocks; any Create recipe link would be invented content the mod doesn't provide — forced edge
REWORK: N/A — single-anchor mod, no existing connections to audit.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight:coffee_beans / garlic / citrus crops | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coffee beans and spice crops through the Millstone for ground coffee/spice powder — the bakery's upstream is Create's milling spine; deepens the already-noted "grain→flour" pattern to the full spice/crop set
- from: extradelight:evaporator output (salt, reduced syrup) | via: create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: salt is a critical cooking intermediate — once the evaporator reduces brine, mix it into Create recipes (e.g. salt→chemical processing, or as curing agent for other recipes); closes the loop from sea-water extraction to the Create mixing basin
- from: extradelight feast blocks | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: feast blocks are exactly the high-nutrition food a Colony Cook hut would serve — the colony requests feast-tier food for high-level colonists, making the extradelight kitchen a colony supply node
- from: extradelight:drying_rack output (dried herbs/jerky) | via: vinery fermentation or alcohol_industry | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: dried/aged ingredients (jerky, dried citrus peel) are classic inputs for curing and fermenting — a drying rack feeds the aging specialist chain (M-35 maturation)
- from: extradelight:coffee (brewed) | via: createaddition:liquid_burning | to: Create/aeronautics | motif: M-13 | power: mid | tone: clash | verdict: REJECT | reason: coffee as engine fuel is a joke, not a weave — tone clash between cozy bakery and industrial propulsion; M-13 is reserved for real fuels
- from: extradelight luxury feasts | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — "feasts are sellable" is the ambient endpoint; the M-28 colony route covers the real demand-gating logic
REWORK: OK — existing Create (create:mixing inbound) and survival anchors are sound; no mis-costed or arbitrary edges flagged.

## mcwdoors   [anchors: support (1)]
- from: mcwdoors metal/iron door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: iron/metal doors crush back to nuggets + xp nugget at the Crusher — lightweight deco-recycling consistent with the whole deco-family pattern; gives the metal variants a Create loop rather than a dead end
- from: mcwdoors wooden door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden doors crushing to planks/sticks is technically M-04 but adds trivial value (you craft them from planks anyway); only the metal variants carry the interesting recycle edge — don't dilute with wood
REWORK: N/A — 1-anchor mod, no existing cross-system connections to audit.

## resourcefullib   [anchors: support (1)]
- LEAVE — pure library/API, zero items, zero blocks, no loot, no material surface.

## createbigcannons   [anchors: Create, aeronautics (2)]
- from: createbigcannons:steel_ingot / cast_iron / nethersteel (c:ingots/steel etc.) | via: create:crushing (ore-doubling path) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: CBC provides the pack's dedicated steel/cast-iron tags; those ores should double through the Crusher like every other ore — the metallurgy chain belongs in Create
- from: createbigcannons shells/munitions (big_cartridge, cartridge, grapeshot) | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a munitions specialist makes shells and sells them to crews who want ship cannons but haven't set up a foundry — the artillery supply chain is a natural trade route (combat specialist ↔ non-combat players)
- from: createbigcannons:nethersteel (c:ingots/nethersteel, endgame metal) | via: regional-scarcity (nethersteel = Nether-region locked) | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: nethersteel only comes from Nether forging; a player who hasn't built a Nether infrastructure must trade for it — the highest-tier cannon barrel is region-gated, making a "Nether foundry specialist" a viable economic role
- from: createbigcannons:cannon_mount + barrel blocks | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the highest-tier cannon barrel (built_up_steel/nethersteel) assembled through a sequenced-assembly chain with intermediate barrel sections — depth that matches a weapon of that power level (already partially true in mod; this cements it)
- from: createbigcannons steel | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies Blacksmith/Smelter hut produces basic cast-iron ingots via the colony route (cheaper basics per M-28), while endgame nethersteel stays boss/Nether-locked — the colony gives new players access to entry-level cannon bronze/cast-iron, not the top tier
- from: createbigcannons shell casings (brass/bronze/steel scrap post-fire) | via: create:crushing | to: Create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: spent shell casings recovered from the battlefield crush to metal scraps — industrial circularity that rewards combat cleanup and feeds the metallurgy loop
- from: createbigcannons | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-29 | power: endgame | tone: clash | verdict: REJECT | reason: enchanting a cannon barrel in an Ars Nouveau apparatus is thematically absurd — arcane inscription on artillery has no lore grounding in either mod; tone clash kills this
REWORK: OK — existing Create + aeronautics anchors are deep and well-founded; no arbitrary edges.

## polymorph   [anchors: support (1)]
- LEAVE — recipe-conflict resolution QoL; zero items/blocks/loot, operates only on other mods' outputs, nothing to route.

## sable_sa_compat   [anchors: support (1)]
- LEAVE — compat behavior patch (Create S&A × Sable); zero items, zero blocks, no material surface.

== CHUNK COMPLETE ==
