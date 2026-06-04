# Phase 2 candidates — chunk-06

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen overhaul with no items, methods, or outputs of its own. Its contribution to the pack is the terrain other content lands on (regional ore scarcity, biome-gated spawns, structure placement); that indirect support is real but not a recipe edge. Nothing coherent to route a 2nd pillar through.

## createoreexcavation   [anchors: Create (1)]
- from: vein-table (scarce regional ore output) | via: createoreexcavation:drilling → create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: you sink a Drilling Machine into a vein chunk, get slow infinite ore, crush and mint it — the only way to sustain a coin-grade metal supply long-term
- from: createoreexcavation:vein_finder / vein_atlas | via: pack-design (vein table config) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: regional scarcity is the economy's foundation; configuring coin-ore veins as regional-only makes the ore→coin chain geography-dependent, forcing cross-player trade
- from: createoreexcavation:extracting (fluid veins) | via: tfmg:distillation or create:mixing | to: Create (depth) | motif: no-motif | power: mid | tone: ok | verdict: REJECT-for-review | reason: no-motif — fluid veins feeding a refinery chain is interesting but no existing motif covers the fluid-extraction→processing path; would need a Gate 0 motif or fold into M-12

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block, harvestable) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen meteor block crushes to iron nuggets + nickel dust + xp nugget byproduct — space rock feeds the smelter just like any ore-bearing stone; low value, always worth picking up
- from: lunar event (Blood Moon / Blue Moon active) | via: event-as-precondition on ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain rituals only complete under the right moon — a Blood Moon brews a war-ritual reagent, a Blue Moon unlocks a luck-infusion; the sky itself becomes a crafting gate
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: space-moss is atmospheric floor decor with no lore-grounded arcane identity; infusing it into a magic reagent feels arbitrary rather than inevitable. The meteor+moon angles are already sufficient and better-motivated.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — this mod IS a weave (it is the Ars↔Iron's Spellbooks bridge), operating entirely on mana/spell data with zero material I/O surface. Its single pillar is precisely the role it plays: internal magic↔magic connective tissue. Forcing a second pillar onto a connective-tissue mod with no items or methods would create an artificial edge; nothing coherent to route through.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (raw grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grains hit the Millstone for flour before they go in the pot — the farm feeds the Create spine just like any crop, and you need rotation for both
- from: farm_and_charm:butter / farm_and_charm:bacon / farm_and_charm:baked_lamb_ham (high-effort animal products) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a husbandry specialist runs a steady surplus of butter and cured meats that traders inland will actually pay for — the animal-feeding loop has a cash outlet
- from: farm_and_charm:barley (grain) | via: vinery:apple_fermenting / alcohol_industry:alcohol_boiling | to: Create (brewing chain) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: barley→beer is a natural processing chain, but alcohol_industry is already the brewing spine and this would need a cross-mod recipe that duplicates what vinery + alcohol_industry already cover; adds complexity with no new pillar (stays survival/economy, not Create). Lower priority than the milling ACCEPT above.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy_helmet set (iron-block-heavy) | via: create:pressing (iron sheets as input) + create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a set that's literally "layered metal plates" requires pressed iron sheets from the rolling mill — mid-game armor that pulls from the spine instead of the bench
- from: immersive_armors:divine_chestplate / divine_helmet set (magical protection set) | via: ars_nouveau:enchanting_apparatus + armor_upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Divine set's "block one hit per minute" effect is arcane in flavour — finishing it through the Enchanting Apparatus makes sense; the set bonus is the payoff for the magic investment
- from: immersive_armors:steampunk_* set (if present) | via: create:mechanical_crafting (brass/copper components) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a steampunk set should visibly cost Create materials; brass-trimmed plate from mechanical crafting is the obvious read
- from: immersive_armors:bone_* set | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: bone armor is vanilla-mob-drop combat gear, not magical; pulling it into an arcane ritual feels forced. The divine/robe sets are the thematically motivated magic targets; bone stays survival.
- from: immersive_armors:* sets as sellable goods | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: armor is kept by players, not sold; this is a weak loop. Economy entry is better served by the coin-from-processing chain. Leave this as a maybe at best.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice / oceansdelight:cooked_stuffed_squid (high-effort luxury seafood) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: coastal specialists prepare elaborate dishes nobody else can; inland players pay coin for fugu rolls they'd never make themselves — a natural geography-driven trade
- from: oceansdelight:cut_tentacles / oceansdelight:guardian (raw ocean drops) | via: farmersdelight:cutting → create:milling (dried/ground seafood intermediate) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: guardian/squid drops are organic mob materials; routing them through a Create machine (milling into "dried seafood powder") is a stretch with no thematic payoff — a player would ask "why does a Millstone process squid?" The economy angle via finished dishes is already strong and sufficient.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit (foraged desert cactus fruit) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit mills into a cactus-pulp dye intermediate or food flour — desert foraging feeds the spine the way any crop does, making it worth harvesting beyond eating raw
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk mushroom blocks) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps mill to mushroom powder — a cooking ingredient or dye precursor that connects the overgrown mushroom biome to the processing chain
- from: dynamictreesplus:saguaro_fruit / mushroom output | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: raw forage sells too cheaply to anchor an economy pillar; selling unprocessed fruit/mushrooms is a weak trade loop. The Create milling path is the stronger second pillar and is already accepted; economy via selling the *milled intermediate* would be a downstream M-09 on a different mod.

## betterendisland   [anchors: survival (1)]
- LEAVE — pure structural/worldgen overhaul of the End island; no items, no blocks, no loot tables, no methods registered. Nothing to route a 2nd pillar through. Its value is cosmetic spectacle and atmospheric quality for the dragon fight.

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart (Obsidilith drop) | via: create:sequenced_assembly (as required keystone ingredient) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the obsidian heart is an endgame boss core — it's the final gate piece in a sequenced-assembly chain for a high-tier Create machine; you kill the Obsidilith to unlock the spine's next tier
- from: bosses_of_mass_destruction:blazing_eye (Nether Gauntlet drop) | via: create:mechanical_crafting (gated component) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Gauntlet's eye gates a precision-crafted Create part that you cannot make before you've ventured into the Nether's worst corner
- from: bosses_of_mass_destruction:ancient_anima (Night Lich drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: anima distilled from an undead lich is exactly what a top-tier Ars ritual or Occultism infusion calls for — dark life-essence as the capstone arcane reagent
- from: bosses_of_mass_destruction:void_thorns (Void Blossom drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: void thorns dissolve into pure spirit-essence in the occult fire — the pack's most alien organic becomes an occultism top-tier reagent
- from: boss reagents (obsidian_heart / ancient_anima / blazing_eye / void_thorns) | via: numismatics bounty payout (bountiful board) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT (provisional motif) | hook: rare boss drops command a premium bounty — the crew's best fighter can convert a boss kill into significant coin, connecting combat achievement to the economy
- from: bosses_of_mass_destruction:ancient_anima | via: forbidden_arcanus infusion | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: Forbidden Arcanus infusion is not confirmed installed; the ars_nouveau:imbuement path (already ACCEPT above) covers the same motif more reliably. Duplicate route rejected; keep the Ars one.

== CHUNK COMPLETE ==









