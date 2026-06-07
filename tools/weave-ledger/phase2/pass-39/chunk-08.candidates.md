# Phase 2 candidates — chunk-08

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single meme music disc; zero methods, zero materials, zero recipe surface. The loot=yes flag is just the disc itself dropping; seeding it into other mods' loot tables would be arbitrary noise with no loop function. No coherent 2nd anchor possible.

## irons_spellbooks   [anchors: magic, Create (2)]
REWORK: OK — existing connections sound. Magic anchor is the mod's identity; Create anchor (alchemist cauldron using create:emptying/filling) is a real, coherent inbound weave. No arbitrary links to flag.

- from: irons_spellbooks mithril ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Mithril is a deep scarce ore; the crusher doubles it and yields a byproduct, rewarding a Create player who mines rather than hand-smelts — the vanilla smelt path stays per M-03 rules
- from: irons_spellbooks:apothecarist drops (scroll_dust / arcane debris) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Apothecarist scholars fall in battle; their arcane remains feed an Occultism ritual — dark-fantasy cross-link between two magic specialisms, neither can fully self-supply
- from: irons_spellbooks arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is the Iron's-side magic currency already reserved as the M-01 reagent-ownership entry; confirming the bond here — Ars source_gem ↔ arcane_essence exchange is the inter-school currency bridge
- from: irons_spellbooks endgame school scroll (e.g. blood/eldritch master spell) | via: KubeJS recipe gate | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: To build an Arcane-tier Create machine the engineer must seek out a master scroll — the wizard's pinnacle knowledge gates the technologist's most advanced fabrication; forces a magic-Create trade
- from: irons_spellbooks:alchemist_cauldron_brew + snowyspirit ginger (c:crops/ginger, cold-season only) | via: irons_spellbooks:alchemist_cauldron_brew | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: A winter brew requiring ginger only harvestable in cold season — players must stock up before frost or trade with a cold-biome grower; scarcity feeds the brew demand
- from: irons_spellbooks pyrium ingot | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: pyrium is forge-crafted (mithril + nether star component), not mined ore — it's a refined product; ore-doubling via M-03 applies to raw ores, not alloys; forcing crushing on a finished metal is category mismatch

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API (0 blocks, 0 items, loot=no); no gameplay surface. Genuine zero-content code library; routed by dependent mods, not weaveable directly.

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — client input-handling tweak (0 blocks, 0 items, loot=no); no gameplay surface, no materials. Genuine zero-content behavior mod.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals shared code library; one incidental chest item (blueprint:template_chest) with no loop function. The 13 c:tags are framework scaffolding for dependent mods, not weaveable materials. Genuine zero-content library.

## imfast   [anchors: support/QoL-fix (1)]
- LEAVE — server-side anti-cheat movement patch (0 blocks, 0 items, loot=no). Functionally enables aeronautics at speed but is a behavioral fix, not a wireable resource. Nothing to route through any method.

## modulargolems   [anchors: Create (1)]
- from: boss-tier golem body metal (cursium / dragonsteel, from Cataclysm/Ice&Fire bosses) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: To build the strongest golem the engineer must source dragonsteel from a slain dragon or cursium from a Cataclysm boss — the golemancer depends on a combat specialist for the key input
- from: ars_nouveau:source_gem (or occultism:otherstone) | via: modulargolems:golem_add_slot or golem_replace_part | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create-built golem needs a magic reagent to unlock its upper upgrade slots — the tech specialist must trade with a magic specialist; no route is self-sufficient
- from: modulargolems golem parts (basic iron/copper body) | via: minecolonies hut/research | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A colony Foundry produces standard-metal golem cores cheaper than hand-crafting them via Create, making the settlement-builder the natural golem-parts supplier for the server
- from: modulargolems golem loot drops | via: loot-seed / combat farm | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: Golems are player-built constructs, not wild mobs — a player can build-and-kill to farm drops, which bypasses the danger requirement of M-34; the combat specialist loop only works for genuinely dangerous encounters, not manufactured ones
- from: modulargolems golem (autonomous combat unit) | via: aeronautics crew behavior | to: aeronautics | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: No method routes golem behavior into aeronautics construction or function; thematic adjacency (golem crew on airships) is not a recipe/loot/method edge — no-motif, no coherent Phase-3 action against existing methods

## letsdocompat   [anchors: survival (1)]
- LEAVE — this mod IS the weaving/glue layer for the food cluster (Let's Do / Farm&Charm / Farmer's Delight), stitching their recipes and tags together. It authors other mods' recipe-types rather than registering its own; it carries no items or methods to serve as a 2nd-anchor surface. Its existence already advances the "one web" goal for food — nothing more to propose.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ginger goes through the mill to become ground-ginger spice, an intermediate that feeds Farmer's Delight cooking and Iron's Spellbooks winter brews — the crop feeds both the food and the magic chain
- from: snowyspirit:ginger (cold-season availability) | via: any Create/magic recipe using c:crops/ginger as a seasonal input | to: Create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Ginger only flourishes in cold climates or winter — a Create or brew recipe requiring ginger becomes seasonally scarce, so players stockpile or trade with cold-biome specialists before the frost breaks
- from: snowyspirit:ginger (spawns in sparse jungle / cold biomes) | via: regional ore-gen + recipe input | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: Players without cold-climate or sparse-jungle access must buy ginger from those who have it — the crop's biome restriction anchors it as a regional trade good, closing the scarcity→economy arrow
- from: snowyspirit:eggnog | via: food consumption (survival pressure) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Winter-only eggnog creates a recurring seasonal consumption demand — players drink it for warmth/buffs in winter, pulling on the ginger→dairy supply chain each cold season; demand renews annually
- from: snowyspirit:sled | via: aeronautics / vehicle compat | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: Sled is terrain-hugging snow transport; it has no tie to Create Aeronautics' physics-based flight system and no method routes through it into the loop — thematic adjacency is too weak and no coherent Phase-3 action exists
- from: snowyspirit:gingerbread_golem drops | via: loot-seed | to: Create/magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: Gingerbread golem is a festive cosmetic mob, not a real combat encounter; its drops would be trivial (cookie-level items) and using them as meaningful reagents forces a tone mismatch — a cute holiday golem is not a monster-drop source

## jamlib   [anchors: support/library (1)]
- LEAVE — pure cross-platform code library (0 blocks, 0 items, loot=no); provides JSON5 config and platform-abstraction helpers for JamCoreModding mods only. Genuine zero-content library.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ender_residue / void_worm_beak | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: The End's most alien biology transmutes in spirit-fire into an occult essence — the naturalist who braves the End feeds the occultist's deepest rituals; neither can self-supply
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ambergris is the oldest magical perfume ingredient — routing this rare oceanic drop through an Ars imbuement makes the sea-hunter the magic specialist's supplier; classic material meets arcane method
- from: alexsmobs:ambergris (raw) | via: create_cheese:maturing (or extradelight:drying_rack) | to: Create | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Raw ambergris sits in the aging cellar for days before it becomes refined ambergris (the actual reagent) — a time-gated luxury material that a patient specialist produces and then trades; maturation creates the specialist role
- from: alexsmobs:void_worm_beak | via: KubeJS recipe gate (boss drop as required input) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The void worm's beak — processed into a high-grade drill coupler — is the one missing part of a deep-tier Create excavation machine; defeating the End boss unlocks the engineer's most powerful tool
- from: alexsmobs leafcutter_anthill outputs (leaf-matter / chitin) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The ant farm trickles organic matter into a hopper; the mill grinds it into chitin-meal or leaf-dust — a passive feedstock for fertilizer or alchemical grinding, turning fauna into a Create production input
- from: alexsmobs rare drops (ambergris, void_worm_beak) | via: emergent player trade | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: The combat naturalist farms rare creatures and sells their drops to magic specialists who cannot safely hunt — the danger-side supplier role feeding the economy's demand for reagents
- from: alexsmobs:bear_dust | via: create:mixing (with water/lard) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Bear dust as a Create mixing input into a lubricant analog is mechanically plausible but thematically strained — there is no clear intermediate product that a player would find obviously useful; the "bear grease" framing needs a real TFMG/Create lubricant slot and that slot is already filled by TFMG's own lubricant; don't force a redundant path
- from: alexsmobs:banana / skunk_spray | via: create:crushing or farmersdelight:cutting | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Banana and skunk spray are flavor drops without a meaningful intermediate product that advances the loop; adding processing steps for joke/flavor items dilutes the web without advancing scarcity→pressure→production

## modernfix   [anchors: support/performance (1)]
- LEAVE — broad performance patch (0 blocks, 0 items, loot=no); JVM/loader-level fixes only. No gameplay surface; nothing to weave.

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — JSON-driven combat behavior framework (0 blocks, 0 items, loot=no); defines weapon swing-arcs and combos but adds no materials, recipe-types, or loot tables. A pure behavior system with no wireable surface; the weapons it enhances belong to other mods that already have weave candidates.
