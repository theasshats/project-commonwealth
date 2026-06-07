# Phase 2 candidates — chunk-05

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — pure code library; zero items/blocks/methods/loot. No content surface to weave.

---

## trading_floor   [anchors: Create, economy (2)]
REWORK: OK — connections sound. Hard Create-depot dependency + its whole purpose is automated trade automation: both anchors are tight and load-bearing. The dossier note about M-08 (feed Create-processed scarce goods through the depot to mint Numismatics value) is a valid future tie-in; no REWORK needed.
- from: trading_floor:trading_depot (automates villager trades on Create belt) | via: emergent — region-specialist colonies hold their own exclusive villagers (professions locked to colony-type huts); a non-colony player can only access those trades by shipping goods to the colony and receiving outputs via the depot | to: economy | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: ACCEPT | hook: the depot doesn't just move goods — the villager on the other side of it is the colony's locked exclusive, so you can't skip the colony player
- from: trading_floor:trading_depot (automates emerald→enchanted-book trades) | via: trading_depot on belt | to: economy | motif: M-33 service-for-hire | power: mid | tone: ok | verdict: ACCEPT | hook: an enchanting-specialist player sets up a depot colony with librarians and charges belt-access in coin — labor, not just goods
- from: trading_floor:trading_depot (loot=yes, emerald arbitrage path) | via: bare sell | to: economy | motif: no-motif (bare sell — ambient endpoint, not demand-gating) | power: — | tone: — | verdict: REJECT | reason: "automate emerald sales" is the ambient loop endpoint; not a weave — M-09 retired; any economy link needs to gate demand, not just enable a vendor transaction

---

## drones   [anchors: aeronautics (1)]
- from: drones:iron_rotor / drones:ion_thruster | via: create:sequenced_assembly | to: create | motif: M-06 sequenced-assembly keystone | power: mid (iron_rotor) / endgame (ion_thruster) | tone: ok | verdict: ACCEPT | hook: a precision-rotor or ion-drive isn't hand-crafted — it's assembled in stages on the sequenced-assembly line; the better the drone, the deeper the Create chain
- from: drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 native-method gating | power: mid | tone: ok | verdict: ACCEPT | hook: the assembly controller itself requires precision components (brass/cogwheels) made in Create's mechanical crafter, gating the drone system behind Create competence
- from: drones:pocket_drone (finished item) | via: bare sell | to: economy | motif: no-motif (bare sell — M-09 retired) | power: — | tone: — | verdict: REJECT | reason: "sellable craft good" is ambient endpoint; not a demand-gating economy link
- from: drones:drill (combat/mining ability block) | via: thematic stretch | to: survival | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the drill-drone is a QoL assist tool, not a survival-pressure response; forcing a danger/survival anchor onto it is contrived

---

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — client-only camera/movement addon; zero items/blocks/loot/methods. Nothing to weave.

---

## recipe_integration   [anchors: support (library/recipe-bridge) (1)]
- LEAVE — this mod IS connective infrastructure; it authors recipes of other mods' types but has no items, blocks, or loot of its own. Its value is in the cross-mod recipe layer it provides (M-03/M-12 style edges are authored through it, not to it). Weaving this mod as a destination makes no sense; it has no material surface. Treat as support-anchored infrastructure.

---

## domum_ornamentum   [anchors: decoration palette + MineColonies support (1 content + support)]
- from: domum_ornamentum:architectscutter | via: domum_ornamentum:architects_cutter consuming Create-chain output blocks (andesite alloy blocks, zinc blocks, brass blocks) as main/support material | to: create | motif: M-04 Create recycles deco | power: everyday | tone: ok | verdict: ACCEPT | hook: the cutter is a "fancy stonecutter" — every Create-processed stone or metal block is automatically palette-eligible; a Create builder feeds their smelted blocks into the cutter and gets framed/shingled variants, creating a natural Create→deco pipeline
- from: domum_ornamentum:architectscutter | via: domum_ornamentum:architects_cutter + MineColonies Architect's Hut unlock (research-gated) | to: economy (M-28) | motif: M-28 colony route | power: mid | tone: ok | verdict: ACCEPT | hook: the Architect's Hut in MineColonies is what unlocks the full cutter recipe tree — the deco palette is colony-gated, so a non-colony player must buy framed blocks from a colony-builder specialist
- from: domum_ornamentum framed/shingled blocks | via: aeronautics ship build using DO blocks as hull cosmetic — explicit hull-material sourcing | to: aeronautics | motif: M-23 structural alloy → airframe/hull | power: everyday | tone: ok | verdict: ACCEPT | hook: colony-cutter blocks are the decorative hull layer on Aeronautics ships — the airship builder buys framed panels from the settlement specialist
- from: domum_ornamentum loot table (loot=yes) | via: loot-seed: place architectscutter and DO ornamental block samples in colony/village/dungeon loot to introduce the material to explorers | to: survival | motif: M-02 mob-drop reagent sink (adapted: structure loot, not mob drop) | power: everyday | tone: ok | verdict: REJECT | reason: DO's loot=yes refers to its item forms being loot-eligible, not a structure it generates; it doesn't own a dungeon/structure loot table to seed — this would be seeding foreign loot tables (village chests), which is plausible but the connection doesn't advance a loop edge; better flagged as a QoL note, not a weave. no-motif fit.

---

## spark   [anchors: support (performance) (1)]
- LEAVE — server profiler; zero items/blocks/loot/methods. Nothing to weave.

---

## configuration   [anchors: support (library) (1)]
- LEAVE — pure config-screen library; zero content surface.

---

## death-count-1.0   [anchors: support (QoL/flavor) (1)]
- LEAVE — vanilla-scoreboard datapack; no items/blocks/loot/methods. No material surface; nothing coherent to weave.

---

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:netherite (backpack variant) / travelersbackpack:blank_upgrade | via: create:sequenced_assembly (multi-step assembly of the high-end backpack's netherite-tier frame + integrated tank) | to: create | motif: M-06 sequenced-assembly keystone | power: endgame | tone: ok | verdict: ACCEPT | hook: a Netherite-tier backpack with dual-tank and blast-furnace upgrade isn't hand-crafted — it comes off the sequenced assembler; only Create players make the premium packs
- from: travelersbackpack:tank_upgrade / travelersbackpack:backpack_tank (fluid tanks) | via: create:filling or create:emptying (fluid tank integration — the hose and integrated tank are natural Create fluid-pipe targets) | to: create | motif: M-20 deploy-application upgrade | power: mid | tone: ok | verdict: ACCEPT | hook: slot the tank upgrade into the backpack via a Create deployer on a belt — the pack passes through automation to get its fluid module installed, a light Create-spine integration
- from: travelersbackpack:dragon / travelersbackpack:enderman / travelersbackpack variants (mob-drop themed) | via: travelersbackpack:backpack_shaped + mob-drop reagent inputs (boss drops as crafting ingredients for top-tier themed packs) | to: survival | motif: M-15 boss-key unlock | power: endgame | tone: ok | verdict: ACCEPT | hook: the Dragon pack needs a dragon-drop to craft — the themed cosmetic packs for boss-mob variants require the boss's own drop as a component, making the backpack a combat-route reward
- from: travelersbackpack (loot=yes — mob-themed packs appear in dungeon/structure loot) | via: loot-seed: place specific themed packs in matching structure loot (netherite variant in bastion remnants, dragon variant in end city) | to: survival | motif: M-34 combat-route supply | power: mid | tone: ok | verdict: ACCEPT | hook: finding a themed backpack in a bastion loot chest is a combat-route reward; a combatant player who clears structures trades found packs to non-combat players who want the carry capacity
- from: travelersbackpack as portable fluid buffer for aeronautics expeditions | via: passive item (no routing method) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: thematic adjacency (portable fluid on a ship), but no routable method — it's a passive item, not a machine input or output; the aeronautics anchor is already served by M-34's loot/combat path; don't add a second loose edge

---

## controlling   [anchors: support (client UI) (1)]
- LEAVE — client-side keybind search UI; zero items/blocks/loot/methods. Nothing to weave.

---

## platform   [anchors: support (library/API) (1)]
- LEAVE — cross-platform developer library; zero player-facing content.

---

## s_a_b   [anchors: Create, aeronautics (2)]
REWORK: OK — connections sound. Already at 2 anchors (Create-chain build via compacting/mixing + aeronautics hull armor role). The dossier's optional M-06 depth note is viable but not urgent.
- from: s_a_b:hardsteelblock / s_a_b:doublesteelblock (armored hull tier) | via: require as structural hull material for mid–high Aeronautics hull recipes (the blast-resistant tier of M-23) | to: aeronautics | motif: M-23 structural alloy → airframe/hull | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: a warship hull isn't basic Create casing — the armored plating tier is required for any ship meant to survive cannon fire; the shipwright trades with the Create-steel specialist
- from: s_a_b armored plate blocks (large volume, heavy) | via: aeronautics freight — bulk armor plating shipped between regions by cargo ship | to: aeronautics | motif: M-31 logistics-required bulk good | power: mid | tone: ok | verdict: ACCEPT | hook: armor plate is heavy and regional (steel is a scarce ore input); moving it at scale requires freight aeronautics, not a player's backpack
- from: s_a_b:steelblock (requires steel, c:ingots/steel) | via: GTMOGS regional ore-gen (uranium/lead/steel locked to specific biomes, createnuclear shares the steel c:tag) | to: economy | motif: M-30 regional-scarcity gate | power: mid | tone: ok | verdict: ACCEPT | hook: armored hull plating is only buildable in regions with steel; warship builders must trade for steel if their region lacks it

---

## cubes_without_borders   [anchors: support (client QoL) (1)]
- LEAVE — client-only borderless-fullscreen option; zero content surface.

---

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (processed fuel, c:item/ores/uranium + c:ingots path) | via: GTMOGS regional ore-gen — uranium ore locked to specific biome types (deep-hot biomes / underground volcanic zones); only a uranium-region player can produce reactor fuel | to: economy | motif: M-30 regional-scarcity gate | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor fuel is region-locked; you either settle in uranium country or buy fuel from someone who did
- from: createnuclear:steel_block / c:ingots/steel (shared alloy with create_ironworks / s_a_b) | via: cross-mod material graph — steel from createnuclear feeds s_a_b armor plates and Create Ironworks structural steel; a steel-region player is the supplier for all three consumers | to: economy | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: ACCEPT | hook: createnuclear's steel output is an input for the hull-armor specialist and the structural-steel specialist; your regional steel surplus is everyone's problem
- from: createnuclear:reactor_core (the endgame multiblock; massive SU) | via: create:sequenced_assembly (reactor_core assembly gated on precision reactor-grade components made through sequenced steps) | to: create | motif: M-06 sequenced-assembly keystone | power: endgame | tone: ok | verdict: ACCEPT | hook: a fission reactor core isn't hammered together at the crafting table — reactor components go through the sequenced assembler; deep Create competence unlocks the highest SU tier
- from: createnuclear anti-radiation armor | via: survival/Cold-Sweat hazard — radiation damage feeds the survival-pressure loop: you need the hazmat suit to work near the reactor, the suit's cloth components feed a production requirement | to: survival | motif: M-26 consumption sink | power: mid | tone: ok | verdict: ACCEPT | hook: anti-radiation cloth and armor consume resources and degrade under use; producing near uranium creates a sustained demand for replacements — the reactor creates its own supply pressure
- from: createnuclear uranium/steel (high-value regional metals) | via: numismatics mint (player-minted coin from Create-processed scarce ore) | to: economy | motif: M-08 player-minted currency | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade uranium ingots are the natural denomination for high-value Numismatics coin — only a reactor-region Create specialist can mint them
- from: createnuclear radiation survival | via: thematic survival — radiation as Cold-Sweat temperature analog | to: survival | motif: no-motif (thematic only — no routing method in existing Cold-Sweat / temperature system for radiation damage) | power: mid | tone: ok | verdict: REJECT | reason: thematic adjacency, not a method-routing; no existing method bridges radiation↔Cold-Sweat; would need a custom mechanic (M-25 territory); reject as weave, note as future config/KubeJS opportunity

---

## gamediscs   [anchors: survival (1)]
- from: gamediscs:processor / gamediscs:gaming_console components | via: create:mechanical_crafting or create:pressing (electronics flavor — a processor is naturally a precision-crafted item) | to: create | motif: M-05 native-method gating | power: mid | tone: clash | verdict: REJECT | reason: gamediscs is a whimsical novelty/downtime toy; forcing it onto the Create production spine is a tone clash — a retro gaming console gated behind a brass precision crafter feels contrived for what is explicitly "a friend-group easter egg." The dossier's own judgment ("forcing a recipe weave … would be a contrived edge") is correct.
- LEAVE — novelty toy with no resource role; cosmetic outputs only; forcing a weave would be a contrived edge per the dossier. Sanctioned support / flavor role.

---

## timm   [anchors: support (QoL/client) (1)]
- LEAVE — client-only biome-title overlay; zero content surface.

---

## irons_lib   [anchors: support (library/API) (1)]
- LEAVE — pure library dependency for Iron's Spellbooks; the transmog table and player statue are cosmetic (no routable material); nothing coherent to weave.

---

## ars_n_spells   [anchors: magic (1)]
- from: ars_n_spells unified mana bridge (Ars source ↔ Iron's mana pool) | via: ars_nouveau:enchanting_apparatus (a cross-cast tablet that requires BOTH source gems AND arcane essence as co-catalysts, sourced from both magic specialists) | to: magic (deepens) | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: ACCEPT | hook: the cross-cast inscription ritual requires reagents from both magic systems simultaneously — an Ars specialist and an Iron's specialist must cooperate to enable cross-casting, so the unified mana benefit isn't free
- from: ars_n_spells (enables Ars spells on Iron's gear and vice versa — unlocks hybrid loadouts) | via: M-37 research gate — the cross-cast capability could be gated behind MineColonies magic-research-hut progress, so the unified mana isn't available early | to: economy | motif: M-37 research/knowledge gate | power: mid | tone: ok | verdict: ACCEPT | hook: cross-system spell capability is unlocked by colony research, not just having both mods' books; the knowledge isn't tradeable — only its products are; forces early magic specialists to remain separate until colony magic-research completes
- from: ars_n_spells (internal magic↔magic weave only; no foreign-material surface) | via: no external method | to: any foreign pillar | motif: no-motif | power: — | tone: — | verdict: REJECT | reason: ars_n_spells has 0 items/blocks of its own; its only surface is the mana-bridge behavior between two magic mods; there is no material to route through a foreign method; all weave candidates must stay within the magic pillar or stay as LEAVE

---

## txnilib   [anchors: support (library) (1)]
- LEAVE — pure developer library; no items/blocks/loot/methods. Nothing to weave.

---

== CHUNK COMPLETE ==
