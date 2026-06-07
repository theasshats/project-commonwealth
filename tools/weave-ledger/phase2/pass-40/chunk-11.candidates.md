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







