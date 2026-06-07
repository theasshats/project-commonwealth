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



