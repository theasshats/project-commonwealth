# Phase 2 candidates — chunk-07

## createtreadmill   [anchors: create (1)]
- REWORK: dossier notes "no clean 2nd-anchor routing" — affirmed. The Treadmill's only cross-mod join is the touhou_little_maid Soul Orb / Photo for the Maid Motor; TLM is aesthetic flavor, not a pillar.
- from: createtreadmill:treadmill (player-powered SU generator) | via: loot-seed | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif — loot=yes but the loot table is vanilla (no registry items); trying to make the treadmill a coin/reagent drop doesn't parse. Force.
- from: createtreadmill:treadmill (SU source) | via: config/design lever — designate as the sanctioned low-tier manual SU source for MineColonies-adjacent "colony power" flavor (colony workers tread mills) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — purely thematic; adds no routable edge and there's no motif for "flavor assignment." Not a weave.
- LEAVE — genuine single-anchor Create mod; TLM integration is its own closed loop, not a pillar join. No coherent 2nd-anchor.

## createfisheryindustry   [anchors: create, survival (2)]
- OK — connections sound (Create kinetic fishing machines + survival food/gear is coherent and already verified).
- from: createfisheryindustry:seafood_chowder / cooked_lobster / cooked_cod_steak (high-effort processed seafood) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A maritime trader selling lobster bisque and chowder for coin is exactly the kind of specialized production the emergent economy wants — nobody else runs the cannery.
- from: createfisheryindustry:fish_skin (leather-like by-product) | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running fish skin through a Create press yields a processed leather sheet — industrial fishery feeds the tannery line without a magic-leather source.
- from: createfisheryindustry:mussels / lobster (raw aquatic critters) | via: ars_nouveau:imbuement (as a brine/reagent catalyst) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — salt-water critters as arcane infusion inputs is a stretch; no precedent in Ars lore. Force.
- REWORK: fish_skin as "leather substitute" (everyday commodity) — existing connection is implicit/undocumented. Should be made explicit via a `create:pressing` recipe (fish_skin + zinc → processed_skin) so it's visible in JEI and the survival↔Create link is player-readable.

## createmetalwork   [anchors: create (1)]
- from: createmetalwork crushed scarce metals (palladium, osmium, platinum, etc.) processed via create:mixing → molten → ingots | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Refining a scarce regional metal through the molten pipeline is exactly how coin feedstock is meant to work — the foundry IS the mint feeder.
- from: createmetalwork:molten_<magic-mod-metal> (e.g. molten form of occultism silver / galosphere palladium) | via: create:crushing → create:mixing (existing inbound) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Magic-mod ore veins yield twice the ingots when run through the molten pipeline — a concrete reason to invest in Create even mid-magic-playthrough.
- from: createmetalwork molten structural metals (iron, steel, bronze) | via: aeronautics construction recipe (airframe ingredient) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Pouring molten steel into molds for airframe plating ties the foundry directly to the shipyard — you can't fly without the smeltery.
- from: createmetalwork:molten_netherite / molten_steel | via: tfmg:casting | to: create (spine depth) | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: M-05 requires the mod's own machine as the gate; createmetalwork has no machine of its own (rides Create basins). This would just be a Create basin recipe, which already exists — not a new weave edge.

## balm   [anchors: support/library (1)]
- LEAVE — zero-content code library. No items, blocks, or methods. Nothing to weave.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — zero-content code library. 0 blocks, 0 items, 0 c:tags. Nothing to weave.

## sound_physics_remastered   [anchors: support/client-immersion (1)]
- LEAVE — client audio simulation only. No items, blocks, loot, or methods. Nothing to weave.

## create_central_kitchen   [anchors: create, survival (2)]
- OK — connections sound (Create automation of FD/ED food methods is coherent; 2-anchor floor met).
- from: create_central_kitchen blaze_stove / automated feast output (high-effort fully-automated dish) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: An automated kitchen line running feasts and multi-course meals is a natural seller's specialization — the colony cook sells to the traveling market.
- from: create_central_kitchen pie/sauce/drink fluids | via: createfisheryindustry:bait_trap (fish-food bait input) | to: survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: using kitchen sauce-fluid as fishing bait is thematically forced; no precedent and the method-pull is contrived.

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API, 0 items/blocks/loot. Nothing to weave.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — API compat shim, 0 items/blocks. Nothing to weave.

## mru   [anchors: support/library (1)]
- LEAVE — zero-content utility library. Nothing to weave.

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — crash-recovery utility, 0 items/blocks. Nothing to weave.

## minecolonies_compatibility   [anchors: survival, create (2)]
- OK — connections sound (colony workers bridged to Create Stock Link storage + modded farming is the core purpose; 2-anchor already).
- from: minecolonies_compatibility Butcher job (produces carcasses/cuts via FD cutting board) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony butcher produces processed meat cuts that can be sold for coin — colony output feeding the market is a classic Eco-loop move (production → economy).
- from: minecolonies_compatibility Gunner job (TaCZ weapons) | via: economy/bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A colony Gunner on a bounty produces mob drops → bounty board pays coin — the colony's combat arm feeds the drop economy directly. (provisional motif)
- from: minecolonies_compatibility storage-network bridge (citizen_terminal / common_network_storage) | via: Create Stock Link / aeronautics logistics | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the storage bridge is a logistics convenience, not a physical material route; no motif covers "colony ↔ logistics network wiring."

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments loot tables (chest drops in expanded monument rooms) | via: loot-seed (add coin/prismarine-processing catalyst drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: A guardian vault rewarding a spur or cog alongside prismarine makes the deep-sea raid worth the risky maritime trip — ties the aquatic dungeon to the coin economy without inventing new items.
- from: betteroceanmonuments loot tables | via: loot-seed (add ars_nouveau source_gem or iron's arcane_essence) | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: ocean monuments have no arcane lore hook; seeding magic currency into a guardian dungeon reads as random item injection, not a sensible player expectation.

## createoreexcavation   [anchors: create (1)]
- from: createoreexcavation vein output table (configurable ore faucet) | via: vein recipe datapack — add scarce regional coin-metal veins as drilling targets | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: The drilling machine as the slow, SU-hungry route to scarce coin metals — you build a proper Create mine to keep the mint fed; that's the scarcity→production→economy arc in one machine.
- from: createoreexcavation vein output table | via: vein recipe datapack — add magic-mod ore veins (e.g. occultism silver, createnuclear uranium) as drilling targets | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Magic reagent ores run through the infinite vein → crushed → molten pipeline means the Create spine supplies both the mint AND the magic lab — a second reason to invest in excavation.
- from: createoreexcavation:extractor (fluid reservoir extraction) | via: tfmg:distillation — add crude-oil fluid veins so the Extractor feeds TFMG fuel production | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: The only reliable jet fuel supply runs through a drilling rig — you need a Create mine before you can fly; perfect scarcity→production→aeronautics loop.
- from: createoreexcavation:diamond_drill / netherite_drill (drill heads) | via: create:sequenced_assembly | to: create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: drill heads are already made via create:cutting/milling (existing inbound); adding a sequenced_assembly chain on top of an already-Create-native item gains depth but no cross-system anchor — stays within Create, doesn't add a 2nd pillar.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — pure server-side threading optimization, 0 items/blocks/loot. Nothing to weave.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen library, 0 items/blocks/loot. Nothing to weave.

## creativecore   [anchors: support/library (1)]
- LEAVE — GUI/event library, 0 items/blocks/loot. Nothing to weave.

## irons_lib   [anchors: support/library (1)]
- from: irons_lib:transmog_table (reskin armor appearance) | via: recipe — require a magic dye or arcane pigment as reagent input | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: the transmog table is purely cosmetic (NBT appearance edit); mandating a magic reagent to change how armor looks is punishing cosmetics, not gating power. Clash with the "don't gate basics behind complex recipes" rule.
- LEAVE — support library; the transmog table / statue are cosmetic-only blocks with no routable material or power-tier.

## accessories   [anchors: support/library (1)]
- LEAVE — slot-API library, 0 items/blocks/loot. Nothing to weave.

## imfast   [anchors: support/QoL (1)]
- LEAVE — movement-validation patch, 0 items/blocks/loot. Nothing to weave.

== CHUNK COMPLETE ==
