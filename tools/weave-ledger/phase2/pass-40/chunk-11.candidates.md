# Phase 2 candidates — chunk-11 (context-fed)

## dynamic_fps   [anchors: support/performance (1)]
LEAVE — pure client-side FPS throttler; 0 items, 0 methods, no material surface. Existing rows: none. No weave possible.

## imfast   [anchors: support/QoL (1)]
LEAVE — server-side movement-validation patch; 0 items, 0 methods. Enables aeronautics/vehicles but is itself not wireable. Existing rows: none.

## ldlib2   [anchors: support/library (1)]
LEAVE — developer rendering/UI library; 0 real items, 0 methods. Existing rows: none.

## txnilib   [anchors: support/library (1)]
LEAVE — multiversion code library; 0 items, 0 methods. Existing rows: none.

## supermartijn642configlib   [anchors: support/library (1)]
LEAVE — config-API library; 0 items, 0 methods. Existing rows: none.

## incontrol   [anchors: support/server-util (1)]
LEAVE — JSON spawn/loot rule engine; no items or methods of its own. It can shape scarcity/regionality design but has no material surface to weave. Existing rows: none.

## dummmmmmy   [anchors: support/QoL (1)]
LEAVE — single-item combat test prop (target dummy); no processing, no meaningful material output. Forcing a weave here would be arbitrary friction. Existing rows: none.

## spyglass_improvements   [anchors: support/client (1)]
LEAVE — client-side zoom/overlay mod; 0 items, 0 methods. Existing rows: none.

## zombiemoon   [anchors: survival (1)]
Existing rows cover: M-02 REJECT (no unique drops — jar confirmed loot=no, vanilla rotten flesh only); M-11 ACCEPT (1v1 split, weak); M-34 ACCEPT (2v0, mutants harder so combat specialist supplies rare drops).

The M-34 ACCEPT (row at times_suggested=2) has a structural weakness: the dossier confirms `loot=no` and no unique drops — the mod adds no new items to the loot tables, so there is no distinct "rare drop" a combat specialist can supply that a regular player couldn't also get. M-34 requires an actual product the combat route produces for trade. With purely vanilla rotten flesh, the distinction collapses.

- CHALLENGE | from: zombiemoon mutant mobs (vanilla rotten flesh, loot=no confirmed) | via: emergent trade | to: economy | motif: M-34 | verdict: REJECT | hook: M-34 requires a distinct combat-route product for trade; zombiemoon adds no new drops (loot=no, jar-grounded), so the "specialist supplier" role is hollow — any player who kills zombies gets the same rotten flesh; no differentiation exists

OK — the M-11 ACCEPT (spirit_fire on vanilla rotten flesh) is borderline weak for the same reason (not a distinct drop), but it's a very minor Ask and has survived multiple rounds. No new proposals: the mod has zero items and truly zero material surface beyond the harder mob behaviors. One survived ACCEPT (M-34) should become REJECT per above; no new weaves are possible without custom loot-table seeding, which would be a pack-design action, not a mod weave.

## rottencreatures   [anchors: survival (1)]
Existing rows well-cover the main material surface: M-11 ACCEPT (frozen_rotten_flesh + magma_rotten_flesh → spirit_fire), M-10 ACCEPT (corrupted_wart → ars imbuement), M-02 ACCEPT (corrupted_wart → ars crush), M-19 ACCEPT (magma_rotten_flesh → create:haunting), M-34 ACCEPT (Dead Beard treasure_chest + boss drops → economy/trade), M-02 ACCEPT (frozen_rotten_flesh → spirit_fire). The M-19 REJECT on frozen_rotten_flesh (ice/cold vs. soul-fire tone clash) is correctly rejected.

One gap: the `rottencreatures:mummy_head` / `rottencreatures:immortal_head` / other mob heads are decorative trophies — existing rows REJECT M-04 crushing for these (correctly). But the **Immortal (storm-lich / lightning zombie)** and **Dead Beard (pirate captain)** are explicitly boss-tier. The existing M-34 ACCEPT covers their drops for combat-economy supply, but there is no M-15 row (boss-key unlock) for these despite both qualifying. The existing M-15 REJECTs are for proposals that assumed a *guaranteed boss mob* wasn't present — but the dossier confirms Dead Beard and Immortal are named boss-tier spawns with the `treasure_chest` as a unique drop.

- NEW | from: rottencreatures:treasure_chest (Dead Beard pirate captain unique drop) | via: loot-seed + recipe (KubeJS gate) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Dead Beard's treasure chest holds a rare schematics fragment or iron-casting blueprint that gates a mid-tier Create ship-cannon or hull recipe — the pirate boss becomes the nautical-tech unlock

Red-team: Does the treasure_chest reliably drop? The dossier lists it as a block (rottencreatures:treasure_chest) that Dead Beard drops or spawns near — it's distinct enough from vanilla loot. The pirate-captain-unlocks-ship-tech pairing is thematically tight (nautical boss → nautical tech). Survives the red-team.

One more gap: the **Swampy zombie** (swamp biome spawn, no distinct unique drop beyond the head) is uncovered. The head is decorative only — existing row correctly REJECTs M-04 crushing of heads. No new proposal warranted there.

Also: the `rottencreatures:corrupted_wart` already has M-10 (imbuement) and M-02 (crush) and M-11 (spirit_fire) ACCEPTs. That's three magic anchors on a single mid-rarity drop — this is over-woven. A subtler issue not yet flagged:

- CHALLENGE | from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement (M-10) + occultism:spirit_fire (M-11) + ars_nouveau:crush (M-02) | to: magic | motif: M-10 | verdict: REJECT | hook: three separate magic-sink ACCEPTs on one mid-rarity drop is redundant — pick the strongest single route (M-11 spirit_fire is most distinct and thematically resonant for undead plant matter); the M-10 imbuement ACCEPT and M-02 crush ACCEPT both land in magic and are functionally interchangeable, leaving the same weave counted three times

## expandeddelight   [anchors: survival (1)]
Existing rows comprehensively cover: M-03 ACCEPT (salt_ore → create:crushing), M-12 ACCEPT (cinnamon → create:milling), M-35 ACCEPT (cheese_wheel aging), M-30 ACCEPT (salt_ore regional biome placement), M-16 ACCEPT (seasonal crops → magic/cooking). Contested: M-29 ACCEPT (salt as ritual/purification in occultism — 2v0), M-16 ACCEPT (chili/cranberry as seasonal crops, 2v0 each).

One missing angle: the `expandeddelight:juicer` machine is the mod's own registered recipe type (`expandeddelight:juicing`). Existing rows never route a foreign material *through the juicer* — they route expandeddelight's own crops through other mods' methods. The juicer could serve as a processing step for other mods' fruit/crop outputs (alexsmobs exotic fruits? farm_and_charm crops?) creating a cross-mod M-12 pull *into* expandeddelight's machine rather than only out of it.

- NEW | from: c:crops (any modded fruit/berry — alexsmobs, alexscaves exotic flora, or farm_and_charm berries if present) | via: expandeddelight:juicing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Juicer is the pack's dedicated fruit-processing station — routing foreign berries/fruits through it ties the food web into one machine rather than several scattered crafting recipes, and makes the juicer a hub rather than a single-mod dead-end

Red-team: Is this a real weave or just using the juicer as intended? The juicer already handles vanilla fruits. If modded fruits use c:crops tags, they slot in with zero authoring — that's ambient, not a weave. The value here is explicitly *seeding foreign crops into the juicing method* via a KubeJS recipe addition, which is an authored M-12 edge. Survives.

Also: The M-29 ACCEPT (salt as occultism ritual ingredient) at 2v0 deserves scrutiny. Occultism rituals use chalk for circle-drawing — salt is a folkloric purification agent but doesn't slot into Occultism's specific chalk-based mechanic. The existing REJECT at 1v1 on the earlier row flagged this. The 2v0 ACCEPT row specifies "Create-processed salt dust → occultism ritual" which would require authoring a ritual recipe that demands salt — that's a forced cross-mod linkage with no precedent in Occultism's design.

- CHALLENGE | from: expandeddelight:salt (c:dusts/salt) | via: occultism:ritual | to: magic | motif: M-29 | verdict: REJECT | hook: Occultism rituals use chalk (drawn circles) not salt for purification; inserting a food-mod byproduct as a ritual reagent has no mechanical support in Occultism's recipe schema and forces a thematic seam that players would find puzzling — the M-29 cross-route dependency requires a *genuine* recipe gate, not a retrofitted folk-magic nod

## vc_gliders   [anchors: aeronautics (1)]
Existing rows well-cover: M-05 ACCEPT (iron/gold/diamond tiers → create:pressing / mechanical_crafting), M-20 ACCEPT (copper_upgrade via deployer), M-19 ACCEPT (nether_upgrade via create:haunting). Correctly REJECTed: M-06 (sequenced assembly — glider isn't endgame flagship), M-12 on reinforced paper (gates everyday basic behind Create — forbidden by briefing).

One gap: the glider's **M-20 (copper_upgrade / deploy-application)** ACCEPT exists but there is also a REJECT on M-20 for the same item. The ACCEPT at 12v2 is the dominant signal but the mechanism deserves precision: the copper upgrade is applied *via* the deployer in the existing row, which is M-20. That's correct for the nether_upgrade too (M-19 via haunting is a distinct and also accepted row). These are not redundant — M-19 routes the *nether* upgrade through haunting while M-20 routes the *copper* upgrade through deploy-application. Both survive.

Missing angle: the gliders have **durability** (consumed on use/crash) — this is a natural M-26 consumption sink. No row exists for this. Gliders wear out, which means demand for replacement never zeroes. This is a pure M-26 note (not a recipe to author, but design recognition that the mod feeds the consumption loop).

- NEW | from: vc_gliders:paraglider_* (tiered gliders with durability) | via: durability/wear (native mechanic) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: gliders wear out on hard landings and extended use — the flight-gear tier ladder creates sustained replacement demand that keeps the Create-production supply line turning, feeding M-26's consumption-closes-the-loop role

Red-team: Is durability-as-consumption a weave or just ambient game design? M-26 is specifically the "consumption sink" motif — goods spent against pressure so demand never zeroes. Glider durability qualifies: the glider is a produced good that degrades. The weave is recognizing this as the closing arrow of the loop (production → consumption → demand renewal), even though no recipe needs authoring. The delivery here is design-recognition, not a KubeJS action. Survives.

Also: no existing row covers the **gold tier glider** as a wasted-material edge. Gold is a currency-adjacent metal in vanilla — a gold glider uses a scarce, non-structural metal for flight gear, which feeds the scarcity→pressure→production loop. But this is ambient game content, not a weave.

## dtterralith   [anchors: survival (1)]
Existing rows: M-12 ACCEPT (exotic seeds → create:milling for wood-pulp/dye byproduct, 8v4 — contested), M-10 ACCEPT (amethyst_seed → ars imbuement, 3v2), M-30 ACCEPT (region-specific tree species → economy, 2v0), M-16 ACCEPT (biome-specific seeds tied to seasonal biomes, 1v1). The M-04 REJECT (crushing logs) and M-10 REJECT (seeds as magic reagents) are correctly killed.

The M-12 ACCEPT (seeds → milling) is the most contested (8v4) and the existing negative votes flag that the seeds are planting items not material reagents, and that the mod outputs vanilla logs on harvest. This deserves a sharper look.

- CHALLENGE | from: dtterralith exotic seeds (jacaranda_seed, maple_seed etc.) | via: create:milling | to: create | motif: M-12 | verdict: REJECT | hook: the seeds are planting items — their value is *growing* the tree, not being ground up; milling a planting-seed to get wood pulp destroys the only meaningful thing the seed does; the mod's actual output (logs on harvest) already enters the Create/cooking web as vanilla wood with no authoring needed; the milling edge creates friction on a basic item for no loop-advancing reason

The M-30 ACCEPT (region-specific trees → economy) is the genuinely interesting existing row, but it has no motif-specific *method* — it's ambient worldgen scarcity, not a recipe weave. M-30 requires a *recipe* that demands a region-locked input. If jacaranda planks only grow in Terralith's sakura/spring biomes, they're inherently region-locked — but this works at the log level without any authoring.

One missing angle not in existing rows: dtterralith's `loot=yes` in the jar-grounded data. It has loot tables despite being a compat mod. The loot is likely seed drops from leaves. This means you could **loot-seed a rare reagent into dtterralith leaf-loot tables** (a magic catalyst that drops rarely when a Dynamic Tree's exotic canopy is broken). That's a distinct M-02 (mob-drop reagent sink via loot table, applied to a non-mob source) or M-16 seasonal variant.

- NEW | from: dtterralith leaf-loot (exotic canopy drops — the loot=yes surface) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: breaking a jacaranda or amethyst-grove canopy block rarely drops a crystalline shard — a biome-specific, harvest-gated reagent that makes exotic tree farming (and the regions that grow them) a magic-supply node, not just a wood farm

Red-team: Is seeding leaf-loot-tables a real loot-seed (the mod ships loot=yes so the tables exist)? The loot tables in dtterralith are almost certainly seed drops from Dynamic Trees leaf-decay — not custom drops. Adding an Ars reagent to a Dynamic Trees leaf-loot table is a datapack edit to a generated loot table, which is authoring. Thematically the amethyst_seed biome / jacaranda biome have a clear material identity. The pairing is plausible and advances the loop (biome → magic reagent supply). Survives.

## dungeons_arise_seven_seas   [anchors: survival (1)]
Existing rows cover the main surfaces: M-08 ACCEPT (galleon/fortress loot → numismatics coin, 7v0 dominant), M-02 ACCEPT (magic reagents in naval chests, 4v0 + 2v0 variants), M-34 ACCEPT (combat specialist farms galleons, trades nautical rarities). M-15 REJECT (no guaranteed boss mob, no droppable blueprint item). The no-motif aeronautics row (thematic "ships rhyme with airships") correctly REJECTed.

One gap: the existing M-34 ACCEPT rows don't clarify *what specific item* the combat specialist farms and trades. For M-34 to be a real weave rather than ambient ("raiders sell stuff"), the loot-seed needs to drop something *distinctive* that non-combat players specifically want. The existing M-02 ACCEPT (magic reagents) + M-08 ACCEPT (coin) cover two of the three things worth having. What's missing is a **survival/gear-tier exclusive** — a combat-route item from the naval dungeon that feeds a tech gate (M-15) or craft chain.

- NEW | from: dungeons_arise_seven_seas galleon captain chest (flagship galleon structure, explorable interior) | via: loot-seed (a rare nautical-grade iron alloy: a single `createbigcannons:cast_iron_cannon_end` or `createbigcannons:steel_ingot` seeded at low probability as "salvaged cannon part") | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: boarding a galleon at sea and cracking the captain's strongbox is how you get salvaged cannon-grade steel without running the CBC foundry yourself — ocean exploration becomes an alternative sourcing route for the artillery tech chain

Red-team: Does this dilute the CBC foundry as the primary source? At a low drop rate (1 ingot per flagship chest, rare spawn), this is flavor/exploration reward not a replacement route — you still need the foundry for mass production. The pairing (nautical dungeon → naval cannon parts salvaged from the wreck) is tight. Survives.

Also: The M-31 ACCEPT row (structures as aeronautics waypoints, "cargo stop" framing) exists at 2v0 for tidal-towns but NOT for dungeons_arise_seven_seas. A boardable galleon is actually a stronger aeronautics destination than a static village — it's a combat-raiding target that an airship crew would specifically fly to.

- NEW | from: dungeons_arise_seven_seas galleon / floating fortress structures | via: worldgen placement (existing) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: galleons and sea-fortresses are exactly the kind of high-value objectives that justify an aeronautics raid-run — the bulk cargo (salvaged metals, coin, reagents) recovered there needs a ship to haul; the structure gives the logistics arm a *destination*, making sea routes purposeful

Red-team: M-31 is "logistics-required bulk good" — a structure isn't a good. But the framing is that the *recoverable loot is the bulk good* that justifies the aeronautics haul. The structures serve as the destinations that give aeronautics routes economic purpose. This is the same framing the tidal-towns M-31 ACCEPT uses (2v0). Survives.

## tidal-towns-1.3.4   [anchors: survival (1)]
Existing rows: M-08 ACCEPT (ocean village chests → numismatics coin, 10v0 dominant), M-31 ACCEPT (village as aeronautics cargo stop, 2v1), M-29 ACCEPT (village as aeronautics route incentive, 1v1), M-02 ACCEPT/REJECT (magic reagent in chests, contested), M-15 ACCEPT/REJECT (hull blueprint in blacksmith chest, contested).

The dossier clarifies: `loot=no` in the jar-grounded data, which means the mod registers no loot tables of its own — it uses vanilla loot tables for its structures (vanilla deep-ocean village loot). This is critical: loot-seeding into tidal-towns' chests means editing *vanilla loot tables*, not the mod's own. That's more invasive than seeding into a dungeon mod's own tables.

- CHALLENGE | from: tidal-towns ocean-village blacksmith/treasure chests | via: loot-seed (datapack edit to vanilla loot tables) | to: economy | motif: M-08 | verdict: ACCEPT (maintain) | hook: the coin-seeding is the most robust row but needs the delivery mechanism clarified — since loot=no, this requires editing *vanilla structure loot tables* (village/blacksmith_chest.json or a jigsaw override), not the mod's own tables; Phase 3 authors should note this is vanilla-table territory, not a mod-table patch

This is not a REJECT challenge — the weave is sound, just the delivery note needs flagging.

One gap: the tidal-towns ocean village populates with vanilla villagers. This means **villager trades** from a sea-village are already present. If the village spawns e.g. toolsmith or cartographer, those trades could represent "coastal economy" flavor. But M-21 is CUT (villager trade → economy, NPC coin faucet). No weave possible via trades.

What's genuinely missing: the village is a *coastal settlement* in deep ocean. The most underserved connection is **colony**: a tidal-towns village is the natural seed location for a MineColonies coastal colony. That's not a recipe weave but a design note — the structures complement MineColonies' coastal building set. No motif covers "structure suggests a colony start location" — this is ambient/thematic, not a weave.

OK — existing rows are the main substance. The M-31 ACCEPT (aeronautics cargo stop) and M-08 ACCEPT (coin loot) cover the two real weaves. The M-15 contested row (hull blueprint gate) is worth preserving as a proposal even if delivery is uncertain.

## create_dragons_plus   [anchors: Create (1)]
Existing rows are extremely extensive (50+ rows). Key ACCEPTs that stand: M-10 ACCEPT (ending fan → Ars imbuement pairing, 9v0), M-16 ACCEPT (freezing fan → Serene Seasons powder-snow gate, 8v1), M-07 ACCEPT (allurite/lumiere shards cold-hardened via bulk-freeze → attuned catalyst variant, 1v0), M-29 ACCEPT (dragon_breath as cross-route dependency forcing tech + End, 2v0), M-15 ACCEPT (Dragon Head catalyst as boss-key gate, dragon must be killed first, multiple rows).

The dossier says "its ending/freezing methods are weave-TARGETS other mods route through, not edges this mod needs." Many of the 180+ rows across all passes treat create_dragons_plus as a *target method* platform, not a mod that itself needs a second anchor. The 2nd anchor question is moot — the mod is already Create-anchored and its methods serve as the connective tissue.

One gap in the existing rows that no pass has picked up: the **levitite_fragile_fluid_tank** has 1 ACCEPT (M-23 airship lift component, 1v0) and 1 ACCEPT (M-24 aeronautics drivetrain, 1v0). Both have single-vote support. The levitite tank stores a *levitation fluid* — this is directly named "levitite" (lift/levitation). For aeronautics airship construction, a tank containing a buoyancy fluid is a structural part, not a mechanical drive component. M-23 (structural alloy → airframe) is the better motif than M-24 (drivetrain/control), and the 1v0 M-23 ACCEPT is correct.

- CHALLENGE | from: create_dragons_plus:levitite_fragile_fluid_tank | via: aeronautics ship-construction recipe | to: aeronautics | motif: M-24 | verdict: REJECT | hook: M-24 is mechanical propulsion components (rotors, engines, control surfaces); a buoyancy-fluid storage tank is a *structural/lift* component (M-23 territory) — the M-24 ACCEPT on this item misroutes the motif; the M-23 ACCEPT (1v0) is the correct framing and should supersede it

The **bulk-dyeing** rows are all correctly REJECTed (cosmetic, not loop-advancing). The **blaze_upgrade_smithing_template** is an interesting item — from Nether content (Blaze mob drop pathway) upgrading armor — but existing M-02 and M-34 ACCEPTs (1v0 each) cover it. The M-05/M-06 REJECTs on it are correct.

OK — no new proposals needed beyond the M-24 CHALLENGE above. The mod is a Create-anchored method platform; its second-anchor question is fully resolved by the fan methods being used by other mods.

















