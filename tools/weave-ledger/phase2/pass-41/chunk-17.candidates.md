# Phase 2 candidates — chunk-17 (context-fed)

## betterstrongholds   [anchors: survival (1)]


The existing rows converge tightly on three weaves: M-02 (magic reagent loot-seed), M-08 (coin loot-seed — conditioned on deep-room rarity), and M-34 (combat-specialist drops). The M-15 boss-key rows are consistently rejected because the stronghold has no boss entity. What's missing: the *pressure angle* — the stronghold as a *cost* the player pays (survival pressure) before they earn the loot — and a colony angle that no pass has named.

- NEW | from: betterstrongholds dungeon loot (deepest room/trap-room chests) | via: loot-seed | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a MineColonies ancienttome into the deepest stronghold vault — the scholar's library is where ancient colony records end up, so clearing the stronghold is an alternate (dangerous) path to colony research progress; knowledge gate feeds from danger-pressure rather than emerald-grinding

- NEW | from: betterstrongholds loot tables (library room chests) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the stronghold is already a scholar/knowledge space (not a boss room) — seed a "ruined schematic fragment" there that, combined with Create parts, completes a locked mid-tier Create recipe; this isn't a boss-kill M-15 but a knowledge-discovery M-15 that passes the theme test: finding the blueprint in the archive is thematically exact, and it gates a Create recipe without demanding a boss that doesn't exist

CHALLENGE | from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-34 | verdict: REJECT | hook: M-34 is "combat specialist farms boss drops and trades them" — the stronghold has no boss; its danger is traps and mobs, not a boss encounter; the M-34 rows here conflate "dungeon danger" with "boss drop supply chain." The rarer loot-seed weaves (M-02 reagent, M-08 coin) are the correct economy anchor; M-34 should be cut from betterstrongholds since it mis-applies the motif (M-34 requires a boss-style encounter to create specialist vs. non-specialist division, which traps/rooms don't provide)

## createoreexcavation   [anchors: Create (1)]

Existing rows are dense and well-converged. The core accepted weaves (M-08 vein→coin, M-30 regional scarcity, M-05 drill-head gating, M-15 netherite-drill boss gate, M-03 ore-doubling, M-13 fluid-vein→fuel, M-28 colony unlock) cover the mod's main surfaces well. What's missing: the *magic-route vein* angle (route magic mod's ores through the vein table so a Create driller can supply a magic specialist) and a more careful power-tier note on the M-15 rows.

- NEW | from: createoreexcavation:vein (vein recipe table, pack-configured) | via: createoreexcavation:vein datapack entry seeding occultism silver / ars_nouveau-compatible crystal ore | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: adding occultism silver or a magic-mod crystal ore as a vein-table target means a Create driller in the right chunk supplies the magic specialist's bottleneck metal — a genuine cross-route dependency (Create drill → magic reagent chain) that neither route can shortcut alone

- NEW | from: createoreexcavation:vein_atlas (cartography output — records surveyed vein locations) | via: config/loot-seed (seed vein_atlas or vein_finder as an aeronautics-worthy scouting reward) | to: aeronautics | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a vein survey is a *service* — an airship pilot scouts chunk-veins across regions and sells vein_atlas maps to drilling operators who can't afford to fly; the logistics arm earns income from geographic knowledge, closing the aeronautics↔economy loop without requiring a direct recipe edge

CHALLENGE | from: createoreexcavation:extractor (fluid vein → aeronautics fuel) | via: createoreexcavation:extracting → tfmg:distillation | to: aeronautics | motif: M-13 | verdict: REJECT | hook: the existing M-13 accept rows are conditioned on "if a petroleum vein is configured" — but the dossier notes fluid vein outputs are pack-configured, and the reserved reagents table lists tfmg:diesel/gasoline as the designated aeronautics fuel (M-13 reserved); adding an infinite-reservoir path to that same fuel breaks the scarcity basis of M-13 (infinite-slow oil → no pressure on fuel supply). The M-32 byproduct framing (extractor → TFMG as refinery input) is stronger and doesn't undermine the reserved fuel reagent.

## endermoon   [anchors: survival (1)]

Dossier and all passes agree: zero items of its own; weaves belong on the ender-pearl commodity or the Enhanced Celestials event system. The M-22 and M-34 (Super Ender Moon all-mob surge) accepts are sound and no new surface is available. One subtlety no pass named: the M-19 (haunting) angle is interesting — pearls → haunted intermediate — but it belongs on ender_pearl not endermoon as the anchor.

OK — existing rows sufficient. The dossier correctly calls this a LEAVE for endermoon-as-anchor; the accepted M-22 rows (ender pearl → ritual/imbuement gated on lunar event) express the only real weave and it rides on ender_pearl as the material, not this mod's items. No new surface found.

## meadow   [anchors: survival (1)]

Existing rows are extensive. Well-accepted: M-12 (alpine salt → create:milling), M-35 (cheese maturation), M-28 (colony food requests), M-30 (salt regional lock), M-16 (seasonal alpine crops), M-10 (lavender/herbs → magic infusion). What no pass has examined: the meadow:felting method as a *target* (foreign wool/fiber routed through felting for a non-textiles weave) and the meadow:alpine_salt as a Create catalyst (salt as a processing aid, not just a food ingredient).

- NEW | from: meadow:alpine_salt | via: create:mixing (salt as a mixing catalyst — heated basin mixing with salt as a required ingredient in a non-food recipe, e.g. a saline solution for Create ore-processing or a descaling agent for metal refining) | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create processing chain needs alpine salt as a descaling/purification additive in one mid-tier metal-refining step — the highland salt miner supplies the lowland foundry, a cross-route dependency with geographic teeth

- NEW | from: meadow:climbing_rope | via: create:mechanical_crafting (woven rope → aeronautics rigging component — a coiled rope assembly requiring meadow climbing_rope as a structural input for ship anchor lines or ladder gangways) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: every airship needs rope — the alpine meadow specialist who farms the climbing_rope plant supplies the fleet's rigging; structural without being expensive, scaling to basic-ship tier as the brief requires

CHALLENGE | from: meadow:chambray_wool (felted textile) | via: create:mechanical_crafting or aeronautics envelope recipe | to: aeronautics | motif: M-23 | verdict: WEAK | hook: existing M-23 rows for chambray_wool score 3 ACCEPTs but the anti-arbitrage check finds a problem: aeronautics envelope/gasbag recipes aren't confirmed to exist as open recipe types in the palette (no `aeronautics:*gasbag*` method appears in the methods-palette); authoring this as a gasbag recipe is a datapack invention, not a method-routing through an existing slot; the weave should be reformulated as feeding a known aeronautics construction recipe or deferred until the aeronautics recipe surface is confirmed

## ars_nouveau   [anchors: magic (1)]

This is a deep, well-mapped mod. Accepted rows cover: M-01 (source_gem hub), M-02 (vitalic/agronomic sourcelinks as organic→magic sink), M-10 (foreign material → imbuement), M-11 (drygmy mob-drop → ritual), M-17 (FE charging), M-18 (drygmy logistics), M-19 (archwood haunting), M-29 (source_gem cross-route), M-33 (enchant-for-hire), M-37 (spell knowledge gate). One gap: the `ars_nouveau:summon_ritual` method's lunar-gate angle (M-22) appears once with 1 ACCEPT and is underdeveloped. Another: `ars_nouveau:alakarkinos_conversion` (converts blocks into archwood-adjacent budding forms) as a method other mods' materials could route through.

- NEW | from: ars_nouveau:summon_ritual (Wilden Chimera / Guardian summon) | via: worldgen/spawn event gating — KubeJS gate the summon_ritual activation so the ritual only completes under the Enhanced Celestials blood moon or Ender Moon event | to: survival | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wilden Guardian doesn't answer on an ordinary night — the mage must wait for the right celestial event to open the summoning circle; lunar timing becomes a required progression gate, threading the moon-event mods into the magic pillar's boss unlocks

- NEW | from: ars_nouveau:mage_bloom (growable magic crop) | via: ars_nouveau:imbuement (mage_bloom as a catalyst input in an imbuement recipe — consuming blooms to power a specific high-tier imbuement tier) | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: mage_bloom only blooms in spring/summer (Serene Seasons fertility window) — stocking the imbuement pantry before the bloom passes is the seasonal-reagent constraint that ties the magic web's most common station to the seasons driver; the magic specialist plans around seasons

CHALLENGE | from: ars_nouveau archwood logs | via: create:milling → arcane sawdust/resin | to: create | motif: M-12 | verdict: REJECT | hook: archwood milling rows score 4–12 ACCEPTs but the hook is thin: "mill archwood into arcane sawdust" produces a material that has no confirmed consuming recipe — the sawdust is invented at proposal time, not an existing Create or Ars recipe slot; M-12 requires a route INTO "a finished good or useful intermediate" that feeds other recipes, and a speculative sawdust intermediate without a destination fails the method-routing test. Either commit to what the sawdust does (an Ars imbuement input, an M-10 route) or defer.

## snowyspirit   [anchors: survival (1)]

Existing rows are well-converged: M-12 (ginger → create:milling, farmersdelight cooking), M-16 (ginger as seasonal-winter reagent), M-35 (eggnog aging/maturation). Sled as aeronautics is correctly and consistently rejected. A gap: the ginger c:crops/ginger tag as a cross-route input into a magic recipe (an iron's spellbooks cold-brew or irons_spellbooks:alchemist_cauldron_brew) — ginger as a warming-potion reagent routes survival-winter into the magic system.

- NEW | from: snowyspirit:ginger (c:crops/ginger, winter-season crop) | via: irons_spellbooks:alchemist_cauldron_brew (ginger as a warming-potion reagent — brew a Warmth or Cold Resistance potion needing ginger root) | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the winter-harvested ginger root is the herbalist's potion base — Iron's cauldron needs fresh ginger to brew the cold-resistance flask that Cold Sweat players actually need in winter; a seasonal crop directly feeding the magic alchemist's pressure-relief recipe

- NEW | from: snowyspirit:eggnog | via: alcohol_industry:alcohol_boiling or vinery:apple_fermenting (age eggnog through a fermentation step to produce "aged nog" — a higher-value specialty spirit with a distinct diet-group tag) | to: survival | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw eggnog sits in the barrel until it deepens — aged nog earns a premium Sugars/Dairy diet contribution that plain eggnog doesn't; a winter specialist who times the batch earns a maturation good worth trading; pairs the seasonal crop with the aging-specialist economy

## cmparallelpipes   [anchors: Create (1)]

All passes and the dossier agree: a single-utility Create plumbing tool with no second-pillar surface. The M-05 pipe-wrench-behind-Create-parts rows correctly score low (gating a QoL tool behind a deeper recipe just to hit pillar count violates the "never gate basics behind complex recipes" guardrail). The LEAVE verdict is correct.

LEAVE — pure Create plumbing QoL tool; 2 items, no recipe types, no second-system surface; forcing a pillar edge on a wrench would violate the depth-scales-with-power rule (it's an everyday tool).

## bettercombat   [anchors: support/combat framework (1)]

Zero items, zero recipe types, JSON-driven combat-animation framework. No content surface to weave.

LEAVE — pure behavior framework; no items, no methods, no materials; anchors as a support role.

## smartbrainlib   [anchors: support/library (1)]

Pure AI library. No content surface.

LEAVE — code-only AI library; zero content surface; no weave possible.

## tacz   [anchors: support/PvPvE flavor (1)]

Existing rows are very dense. The M-05 (gun_smith_table → Create-pressed inputs), M-06 (high-tier guns → sequenced assembly), M-26 (ammo consumption), M-34 (combat-supply economy), M-30 (regional ore-scarcity → ammo materials), M-15 (boss-key component for top-tier firearms) rows are all well-accepted and converged. What's genuinely missing: the *MineColonies route* for ammo production as a cheaper-basics path, and the *loot-seed for ammo as dungeon reward* (which one pass names but doesn't develop fully).

- NEW | from: tacz:ammo_box (consumable bulk ammo) | via: minecolonies hut request / MineColonies blacksmith route (colony blacksmith produces basic ammo cartridges cheaper than hand-crafting; mid-tier ammo remains Create-assembly-only) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony armorer churns out basic 9mm rounds faster than any solo Create line — the combat specialist buys cheap ammo from the settlement player instead of running their own factory; M-28's cheaper-basics route applied to the ammo supply chain, separating everyday ammo from high-tier Create-exclusive loadouts

- NEW | from: tacz:m67 (grenade) | via: loot-seed (seed m67 into TACZ's own loot tables or into combat-structure loot tables of compatible mods — military crate / dungeon chests) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: grenades found in ruins are the kind of pre-war scavenge that rewards dangerous exploration — the m67 as a loot-table mob-drop-adjacent reward (found, not crafted) connects the danger face of survival to tacz's combat economy without requiring a boss

CHALLENGE | from: tacz:gun_smith_table + metals | via: MineColonies colony-workshop route | to: economy | motif: M-28 | verdict: REJECT | hook: the single existing M-28 row ("colony workshop produces guns slower/cheaper") is accepted once but underdeveloped; more critically, the dossier notes guns are data-driven via JSON configs, so a MineColonies blacksmith producing *guns* (not just ammo) requires a custom colony-craft recipe for each gun model — that is significant authoring work that wasn't flagged in the proposal; the ammo-only M-28 route (above) is the correct cheaper-basics form; gun production stays Create-exclusive to maintain the locked-exclusive anti-erosion wall

## dragonlib   [anchors: support/library (1)]

Pure developer library (shared API for MrJulsen's mods). The lone dragonlib:dragon block is confirmed as a dev artifact.

LEAVE — code-only API library; dev artifact block has no gameplay surface; no weave possible.

## yet_another_config_lib_v3   [anchors: support/library (1)]

Pure config-screen UI library. No content surface.

LEAVE — config-UI library; no items, no methods, no weave surface.

## freefbible   [anchors: support/curated flavor (1)]

Single inert readable-book item. No mechanics, no crafting surface.

LEAVE — joke/novelty item; single inert book; no content surface; any forced edge would be noise. The one prior row (supplementaries:antique_book) was correctly rejected.

## create_better_villagers   [anchors: Create + economy (2)]

Already 2-pillar. Existing rows well-cover M-08 (coin re-denomination of trades), M-30 (regional Miner profession), M-33 (service-for-hire via settlement), M-37 (trade knowledge gate). The one gap: no pass has named the *seasonal* angle — the Brass Worker's stock thinning in winter under Serene Seasons is an M-16 row that got 1 ACCEPT but was underdeveloped.

- NEW | from: create_better_villagers Brass Worker profession (stock of brass parts) | via: config tie / KubeJS trade-gate (restrict some Brass Worker trades to non-winter seasons, simulating supply-chain disruption; the brass supply thins when the foundry is cold) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Brass Worker's stock runs thin in winter — brass production slows when snow grounds the supply boats; a seasonal trade-gate that drives players toward self-sufficiency precisely when the world is hardest; survival's winter pressure bites into the Create supply chain

## create_compressed   [anchors: Create (1)]

Existing rows: M-23 (compressed mechanism/sheet blocks as aeronautics hull plating) and M-28 (colony request for compressed bulk parts) are the accepted second-anchor candidates. M-31 (logistics bulk good) is partially accepted (2/2 split). A gap: the compressed bulk-pile blocks as an explicit *logistics unit* — create_compressed makes bulk trade physically compact, which is the M-31 premise, but no pass framed it as the *unit of measurement* for inter-player bulk trade (not aeronautics specifically, just trade volume).

- NEW | from: create_compressed:crushed_<scarce_metal>_pile (e.g. crushed_silver_pile, crushed_platinum_pile, crushed_lead_pile — compressed 9× ore blocks) | via: loot-seed / trade (compressed ore piles as the standard bulk-trade denomination — the Create economy uses a crate of compressed crushed-silver as the interregional exchange unit, larger than a stack of ingots and small enough to carry) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: one compressed platinum crate equals nine ingots' worth and fits in a single chest slot — bulk Create output gets a natural trade denominator; the logistics arm gains a standard unit to move; without this unit, inter-regional ore trade is a loose pile of ingots

CHALLENGE | from: create_compressed:mechanism_block / cogwheel_block | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | verdict: REJECT | hook: the M-24 rows argue compressed mechanism blocks are "dense drivetrain components for Aeronautics engines" — but M-24 requires a mod's *mechanical part (rotor, bearing, engine block, gearset)* to feed Aeronautics propellers/engines; compressed mechanism blocks are a *storage alias* (9 mechanisms → 1 block, unstacks on use), not a new mechanical component; routing a storage block into a drivetrain recipe conflates compression-for-storage with structural function. M-23 (compressed *sheet* blocks as hull plating) is sounder because flat sheet stock is genuinely structural.

## minecolonies   [anchors: survival + Create (2)]

Already 2-pillar and very dense. Existing rows cover M-37, M-28, M-15 (ancienttome loot-seed), M-31, M-26, M-29, M-32 (composting), M-03, M-05. What no pass has examined: the minecolonies:blockhutenchanter feeding the M-37 magic route more specifically, and the colony food output as a *cross-route dependency* into the magic system (a magic mod's recipe requiring a colony-produced food ingredient). The existing magic rows (M-28 colony alchemist) are accepted but shallow.

- NEW | from: minecolonies:blockhutmysticalsite / blockhutenchanter output (enchanted gear, magical components) | via: minecolonies University research gate → locked exclusives KubeJS | to: magic | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony's Mystical Site produces a mid-tier enchanted output only after University research unlocks the wing — you can't buy the capability, only the enchanted gear that comes from it; colony research is non-tradeable knowledge, and the gap between "I have a colony" and "my colony has a Mystical Site" is a genuine specialization wall; this is M-37 applied to the magic pillar's colony route

- NEW | from: minecolonies colony food outputs (apple_pie, baked_salmon, c:foods/bread, c:foods/vegetable) | via: ars_nouveau:agronomic_sourcelink passive drain (surplus food placed near an Agronomic Sourcelink generates Source — the colony Cook overproduces, the magic player places the surplus nearby) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony baker's surplus goes to the mage's garden — every apple pie placed within the Agronomic Sourcelink radius generates Source; a settlement player who produces food in bulk becomes the magic player's passive fuel supply, threading two non-overlapping routes into mutual dependence

## alexsmobs   [anchors: survival (1)]

Existing rows are very dense and well-converged. Core accepted weaves: M-02 (mob drops → Occultism spirit_fire / Ars imbuement), M-10 (ambergris / ender_residue → magic infusion), M-11 (ambergris / void_worm parts → occultism ritual), M-15 (void_worm_beak as boss-key gate), M-34 (combat-supply economy), M-19 (ender_residue → create:haunting). One gap: no pass examined the leafcutter_ant_chamber's *colony route* as an M-28 candidate specifically for the organic-material supply chain. Another: alexsmobs:bear_fur / bison_fur feeding Cold Sweat (M-26 consumption as insulation wear) — this is accepted twice but underdeveloped in the power-tier framing.

- NEW | from: alexsmobs:bear_fur / bison_fur (everyday mob-drop, cold-biome animals) | via: cold_sweat sewing table or crafting recipe (fur → insulation layer for Cold Sweat armor/clothing — the basic survival pressure of cold temperatures drives repeating demand for hunted furs) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Cold Sweat winter drains insulation faster than you replace it — bear fur is the everyday consumable that the hunter farms and the settler buys; pressure renews demand continuously, and the bear is the lowest-effort source; the survival consumption loop closes directly through a real Cold Sweat mechanic

- NEW | from: alexsmobs:leafcutter_ant_chamber (passive biomass output) | via: minecolonies:composting (route ant-chamber leaf-mold / biomass into the colony composter as feedstock, making the anthill a passive organic input for colony agriculture) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the anthill churns out leaf-fragment biomass the colony composter can digest — a passive resource generator feeding the settlement's agricultural infrastructure; the survival player who keeps an anthill near their colony gains a composting edge without hand-gathering, threading fauna into the colony route

CHALLENGE | from: alexsmobs:banana / acacia_blossom (everyday organic food drops) | via: farmersdelight:cutting or extradelight:juicer | to: survival | motif: M-12 | verdict: REJECT | hook: consistently split (4 ACCEPT / 4 REJECT in the CANDIDATES) and the rejection logic is correct: processing bananas or blossoms through FD/ExtraDelight adds processing steps within the *survival pillar* without crossing into a new system; alexsmobs already anchors survival; the M-12 route here just deepens survival without earning a second anchor for the mod; M-02 (magic infusion of exotic drops) and M-15 (void_worm boss-key) are the correct second-anchor moves.











