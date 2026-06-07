# Phase 2 candidates — chunk-15

## tfmg   [anchors: create (1)]

- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg | via: recipe (fuel tag / config-tie) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's distillation tower is the only way to refine crude oil into aircraft-grade diesel; without a refinery your airship doesn't fly far
- from: tfmg:steel_ingot | via: recipe (aeronautics construction) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a structural airframe that doesn't use steel isn't a real airframe — the blast furnace feeds the shipyard
- from: tfmg:aluminum_flywheel / tfmg:aluminum_cogwheel (combustion engine parts) | via: recipe (aeronautics drivetrain) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG combustion engines are the portable powerplant — mount one as an aeronautics portable engine input
- from: tfmg:steel_ingot / tfmg:cast_iron_ingot | via: numismatics sell (processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined steel is the first real industrial metal — specialists mint surplus bars into coin
- from: tfmg:diesel (fuel) | via: numismatics sell (fuel resale / trade caravan) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: fuel cans on an airship economy — the refinery town sells diesel to every crew that lands
- from: tfmg:sulfur / tfmg:saltpeter | via: create:mixing → gunpowder / explosive chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the processing chain is internal to TFMG/Create; it doesn't add a new pillar anchor — Create already covers it. Doesn't advance the loop to a new node.
- from: tfmg:concrete/asphalt blocks | via: create:crushing (recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-recycle is a very weak second anchor for a mod already deeply Create; doesn't add economy or magic reach.
- from: tfmg:winding / tfmg:polarizing (electricity machines) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: TFMG's electricity is FE-compatible but the thematic bridge to magic is thin — a charging station doesn't make TFMG a magic participant; M-17 is more coherent from the magic side inward, not TFMG outward.

REWORK: existing anchor is Create (1) only. The dossier's "aeronautics via fuels/engines" and "economy via steel/fuel" candidates above are strong and should be actioned — TFMG is a natural 3-anchor mod (Create + aeronautics + economy) once M-13/M-23/M-24/M-08/M-09 are authored; confirm fuel tag inclusion for burners and the aeronautics engine recipe.

---

## mcwstairs   [anchors: support/decoration (1)]

- from: mcwstairs:*_railing / *_balcony (stone variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-recycle is sanctioned but the dossier explicitly flags this as "only as part of a wholesale deco-family pass" — do not wire just one deco mod in isolation; hold for the coordinated deco-crush pass.

LEAVE — pure decoration palette; no content surface beyond the deco-crush candidate above, which is deferred to the deco-family pass. Decoration is a sanctioned support anchor; no forced second anchor.

---

## irons_spellbooks   [anchors: magic, create (2)]

- from: irons_spellbooks:mithril ore/ingot | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril is a rare Y<38 ore — crushing it rewards a wizard who runs their own ore-processing line
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement (mint ↔ source_gem) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane essence and source gems are both magical currencies — scholars exchange them at the Imbuement Chamber to fund spells across both schools. (Reagent-ownership confirmed: arcane_essence is the Iron's-side M-01 hub.)
- from: mob drop (apothecarist reagent) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the apothecarist's reagents aren't just loot — brew them for a higher-tier spell effect
- from: irons_spellbooks:pyrium_ingot | via: create:mechanical_crafting (gated component) | to: create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: pyrium is the alloy of heat and ice — a Create mechanical-crafting table is the only place to shape it into a magic weapon blank
- from: irons_spellbooks affinity_ring drops (loot=yes) | via: loot-seed (structure/dungeon) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: rare spell-gear in dungeons creates bounties — combat specialists hunt for ring drops to sell or commission
- from: irons_spellbooks:scroll (one-shot spell) | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: scrolls are one-shot consumables; selling them is coherent but this is vanilla-trade territory — there's no processing step or scarcity driver unique to scrolls here. Low-value weave that doesn't advance the loop meaningfully.
- from: irons_spellbooks:pyrium / mithril | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the enchanting apparatus already accepts many reagents; adding pyrium/mithril here is plausible but redundant with the M-05 create:mechanical_crafting gate above — two deep-magic gates on the same metals is over-designed; keep M-05.

OK — connections sound (magic + create already established; M-01/M-02/M-03 deepen them without overlap). REWORK: the existing create anchor is implicit (emptying/filling the alchemist cauldron); it should be made explicit in the dossier's anchor list.

---

## shulkerboxtooltip   [anchors: support/QoL (1)]

LEAVE — zero content surface: no items, no blocks, no loot, no recipes; pure client tooltip renderer. Genuine zero-surface library/behavior mod.

---

## oceansdelight   [anchors: survival (1)]

- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice (high-tier seafood dishes) | via: numismatics sell (luxury trade good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: coastal cooks sell to inland traders who've never tasted elder guardian — a real coast-to-inland trade route
- from: oceansdelight:cut_tentacles / oceansdelight:cooked_guardian_tail | via: farmersdelight:cutting + create:milling (processing chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run guardian drops through a Create mill for a rendered fish oil/paste that feeds other recipes — the processing chain pulls ocean content into the Create spine
- from: oceansdelight:fugu_slice (poison risk) | via: irons_spellbooks:alchemist_cauldron_brew (toxin reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pufferfish venom distilled in a magic cauldron yields a potency-boosting poison ink; the sea's deadliest creature feeds the spellbook
- from: oceansdelight:braised_sea_pickle (bioluminescent) | via: ars_nouveau:imbuement (light reagent) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: sea pickles as a magic reagent is a thematic stretch — bioluminescence is a tenuous "arcane light" hook; survives theme-test only weakly. Better to keep the magic edge at the fugu/venom level (M-02 above) which is more coherent.

REWORK: existing anchor is survival only; M-09 (economy) and M-12 (create/processing) bring it to 3 with clear loop logic. The M-02 magic edge via fugu is a bonus third.

---

## sable_sa_compat   [anchors: support/compat (1)]

LEAVE — zero content surface: no items, no blocks, no loot, no recipes; pure compat behavior patch. Genuine zero-surface mod.

---

## yungsapi   [anchors: support/library (1)]

LEAVE — zero content surface: pure API library; "does not affect the game in any way" on its own. Genuine zero-surface library.

---

## zombiemoon   [anchors: survival (1)]

- from: zombiemoon zombie variants (tougher undead) | via: loot-seed (unique drop) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier confirms no unique drops (vanilla rotten-flesh only); seeding a custom reagent onto these mobs would be an invented edge with no dossier grounding. Reserve M-14 for mobs with real drops.
- from: zombiemoon zombie variants (combat pressure) | via: bountiful bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: bounty boards CAN list vanilla kill-quests, but zombiemoon adds no unique item to pay out — the bounty would pay vanilla rotten flesh, which is not a meaningful economy sink. No unique drop = no weave.

LEAVE — no unique drops, no items, no loot=yes content surfaced; the mobs raise combat pressure (survival) but provide no weave surface without inventing a drop. Dossier explicitly states "forcing a drop-reagent here would be an invented edge."

---

## naturalist   [anchors: survival (1)]

- from: naturalist:venison / naturalist:bushmeat | via: farmersdelight:cutting + farmersdelight:cooking | to: survival (processing chain deepens food web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: butcher the deer and boar at a cutting board, roast in the cooking pot — naturalist animals become real food-chain inputs, not just ambient flavor
- from: naturalist:cooked_venison / cooked bushmeat | via: numismatics sell (trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a hunting-specialized player sells game meat to inland settlements; venison is a regional luxury no farmer can grow
- from: naturalist:glow_goop (firefly bioluminescence material) | via: ars_nouveau:imbuement (light catalyst) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: captured firefly glow-goop is the arcane light catalyst — the naturalist lets a wizard bottle ambient magic
- from: naturalist:antler | via: occultism:spirit_fire (reagent transmutation) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bone-analogue from a living creature, burned in spirit-fire, yields a binding spirit essence — hunters supply the occultist's workbench
- from: naturalist:shellstone / froglass blocks | via: create:crushing (deco recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same as mcwstairs — hold for the coordinated deco-crush pass; don't wire one deco set in isolation.

REWORK: survival-only at present. M-12 (food processing) + M-09 (economy) + M-10/M-11 (magic) bring naturalist to 4 anchors cleanly. The glow_goop and antler magic edges are strong and thematically immediate.

---

## modulargolems   [anchors: create (1)]

- from: boss-drop metal (Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble | to: survival/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: only the player who killed a Cataclysm boss holds cursium — the boss-key metal is the gate to a near-indestructible construct
- from: occultism:otherstone / ars_nouveau:source_gem (infused core) | via: modulargolems:golem_replace_part (part slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: fitting an arcane source-gem core into a golem's chest plate animates it with magic awareness — golemancy meets the arcane school
- from: modulargolems golem entities (combat automatons) | via: loot-seed / bountiful bounty | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: golems are player-built constructs, not spawned mob-drops — M-14 is for mob kills paying coin; golems don't drop anything useful for a bounty board. No loot surface.
- from: irons_spellbooks:mithril_ingot | via: modulargolems:golem_assemble (mithril body) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a mithril-body golem channels spells cast near it — the metal links golemancy to the Iron's magic school

REWORK: Create anchor is present (create:crushing/mechanical_crafting/sequenced_assembly already in made-by). The dossier's "2nd-anchor candidates" suggest survival/magic; M-15 boss-key and M-10 arcane-core are the strong edges. With M-15 + M-10 the mod gains survival and magic anchors (3 total). OK on the Create anchor — connections are jar-grounded.

---

## aeronautics   [anchors: aeronautics, create (2)]

- from: aeronautics:levitite (bulk lift material, zinc-gated) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: every server builder needs lift; the zinc refiner who mass-produces levitite becomes the fleet's lift supplier and mints surplus into coin
- from: aeronautics:levitite_blend crystallization step (in-world, code-recipe) | via: KubeJS catalyst (Ars/Occultism catalyst adjacent to crystallization block) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite won't crystallize without an arcane catalyst placed beside it — the sky-ship builder must trade with the mage. Note: this is the code-only step; confirm in JEI before authoring.
- from: aeronautics:adjustable_burner fuel tag | via: config-tie (TFMG diesel tag extension) | to: create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: a diesel-powered burner on your balloon is strictly better than charcoal — the industrial age upgrades your airship's altitude capability
- from: offroad:tire / offroad:large_tire | via: numismatics sell (cosmetic trade) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: tires are construction components, not consumables; their cosmetic color variants are low-value economy surface. The main economy edge is levitite (above); tires add noise, not signal.
- from: simulated:rope_coupling / simulated:docking_connector | via: config / station build | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: docking stations as trade-post infrastructure is a flavor/build note, not a recipe-level weave; no delivery mechanism (no recipe, no loot, no trade table entry). Flag for the economy-update narrative, not Phase 3 authoring.

OK — aeronautics + Create anchors are sound (jar-grounded). M-09 (levitite→economy) and M-10/M-13 (magic catalyst + fuel) are the three new outbound edges that complete the loop: aeronautics produces ships, economy distributes them, and magic gates the premium lift tier.

---

## moonlight   [anchors: support/library (1)]

LEAVE — zero content surface: 1 spawn_box block is internal API helper; no player-facing items, no loot, no recipes. Genuine library mod.

---

## rhino   [anchors: support/library (1)]

LEAVE — zero content surface: pure JS engine runtime; no blocks, no items, no loot. Genuine zero-surface library.

---

## charta   [anchors: survival (1)]

- from: charta:card_table (multiplayer game table) + Numismatics coins | via: KubeJS event hook (wager = burn coin on game-start, winner receives) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: ante a Numismatics coin to play — the card table is the only place in the pack where players bet real in-game currency against each other. (Delivery: KubeJS event hook on game-start/game-end; requires Phase 3 scripting.)
- from: charta bar furniture (bar_shelf, bar_stool, wine_glass) | via: create:cutting / farmersdelight:cooking (glasses + drinks) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-crush on bar furniture is a very weak edge — it gives Create a trivial recycle but doesn't advance the loop. Better to hold bar furniture for the deco-crush family pass.
- from: charta:loot=yes (tables generate in villages/dungeons) | via: loot-seed (coin drop in card-table chests) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: the dungeon's card table has a small coin purse in its chest — raiders find Numismatics currency among the chips. (Delivery: loot-table datapack edit seeding numismatics coin into charta structure loot.)

REWORK: survival-only anchor at present; both economy edges above (M-08 wager + M-14 loot-seed) are coherent and make the card table an economy node.

---

## notenoughcrashes   [anchors: support/QoL (1)]

LEAVE — zero content surface: no blocks, no items, no loot; pure crash-recovery behavior mod. Genuine zero-surface mod.

---

## controlling   [anchors: support/QoL (1)]

LEAVE — zero content surface: no blocks, no items; client keybind UI only. Genuine zero-surface mod.

---

## copperagebackport   [anchors: survival (1)]

- from: copperagebackport copper blocks (oxidation variants) + minecraft:copper_chest | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: an oxidized copper block crushes back to copper nuggets — the full copper deco palette feeds the Create copper economy in both directions
- from: minecraft:copper_golem_statue (Copper Golem: item-sorting mob) | via: thematic logistics tie | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: the Copper Golem is an early logistics helper, but "it hauls items" is not a recipe/loot/trade weave — it's ambient behavior that doesn't require a delivery action. No clear M-21 villager-trade mechanism; the golem is mob-AI, not a trade route. Mark as provisional-motif and leave for economy-update narrative.
- from: minecraft:copper_chest (oxidation-locked chest) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: copper chests are storage furniture; they don't spawn in structures with loot. loot=yes on the jar likely refers to the Copper Golem spawner, not a structure loot table. No drop economy surface confirmed.
- from: copper tools/armor set | via: create:crushing (recycle) + create:item_application (wax application) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wax your copper sword to lock its patina in Create's deployer — and when it's worn out, crush the blade back to nuggets. (Two light steps, both everyday-tier, coherent with M-04.)

REWORK: survival-only; M-04 (copper deco/tool recycle through Create) is the natural second anchor. Two ACCEPT rows above give it a Create anchor. The aeronautics/logistics angle for the Copper Golem is interesting flavor but not weave-able at this tier.

---

## createadditionallogistics   [anchors: create, aeronautics (2)]

OK — connections sound. Create (kinetics infrastructure) + aeronautics (train-seat logistics) are both jar-grounded. No new edge needed; mod serves its two anchors cleanly.

---

## kleeslabs   [anchors: support/QoL (1)]

LEAVE — zero content surface: behavior-only QoL, no blocks/items registered. Genuine zero-surface mod.

---

## createlowheated   [anchors: create (1)]

- from: createlowheated:basic_burner (consumes any furnace fuel) | via: survival fuel pressure | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasonal charcoal from summer-harvested wood is your basin fuel in winter — the burner turns Create heat into a managed seasonal resource. (Serene Seasons gated: charcoal output varies by season → lowheated demand creates a fuel-supply pressure loop.)
- from: createlowheated:basic_burner | via: TFMG diesel (fuel tag extension) | to: create | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is the aeronautics propulsion motif (fuel → engine); applying it to a stationary basin burner conflates fuel-for-propulsion with fuel-for-processing. The basin burner is not a propulsion device. Better classified as a balance/depth mechanic within Create only; no new pillar anchor earned by noting it accepts fuel.
- from: createlowheated "lowheated" heat tier | via: TFMG:vat/industrial_blasting compatibility | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: cross-mod heat-tier compatibility is a config/compat concern, not a weave connection. No new pillar, no motif fit.

REWORK: Create-only anchor is accurate for a balance mechanic. The M-16 seasonal-charcoal edge is the only coherent second anchor — it ties heat supply to the survival/seasons loop (scarcity → fuel pressure → Create processing output). One ACCEPT.

---

== CHUNK COMPLETE ==
