# Phase 2 candidates — chunk-11

## sound_physics_remastered   [anchors: support/client-immersion (1)]

LEAVE — pure client-side audio simulation (raytraced reverb/attenuation/occlusion); 0 blocks, 0 items, no recipe-types, no material outputs. Nothing to weave; sanctioned support role.

## puzzleslib   [anchors: support/library-API (1)]

LEAVE — zero-content code library (Fuzs mod abstraction layer); 0 blocks, 0 items, no recipe-types, no materials. Genuine zero-surface library; sanctioned support role.

## followersteleporttoo   [anchors: support/QoL (1)]

LEAVE — pure behavior tweak (tamed-pet teleport on owner TP); 0 blocks, 0 items, no recipe-types, no material outputs. No content surface to weave; sanctioned QoL support role.

## cubes_without_borders   [anchors: support/client-QoL (1)]

LEAVE — client-only Video Settings option (borderless fullscreen); 0 blocks, 0 items, no recipe-types, no material outputs. No content surface; genuine zero-surface client display mod.

## sereneseasons   [anchors: survival (1)]

Power-read: sereneseasons is the pack's seasonal clock — it modulates crop growth (out-of-season = stunted), shifts biome temperature (winter cold overlaps Cold Sweat), and emits a redstone signal via `season_sensor`. The calendar items are everyday informational goods. The key join surfaces are: (a) the `season_sensor` block's redstone output (readable by Create logic), and (b) out-of-season crops becoming scarce, trade-worthy goods. Designated in SYSTEMS.md as a *driver* feeding scarcity + survival, not a standalone pillar.

Existing 2nd-anchor candidate in dossier (Create via season_sensor → M-05) — analysing:

- from: sereneseasons:season_sensor redstone output | via: create contraption logic (gearshift/clutch read from sensor) | to: create | motif: M-16 | power: everyday | tone: ok — seasons driving automation is exactly "seasonal reagent" — the sensor is a seasonal gate on machinery | verdict: ACCEPT | hook: a seasonal sensor wired into a Create gearshift makes automated crop-switching farms that adapt to what's fertile, not what the player remembered to replant — the loop: survival pressure (scarce off-season crops) → Create automation (sensor-gated farm) → production
- from: out-of-season crop (e.g. wheat in winter) | via: create:milling or farmersdelight:cooking | to: create/survival | motif: M-16 | power: everyday | tone: ok — out-of-season scarcity is a real demand hook that forces either greenhouse investment or trade; routes the seasonal scarcity into production decisions | verdict: ACCEPT | hook: winter shortages make greenhouse-grown or hoarded out-of-season crops worth trading — scarcity → pressure → economy (distribution closes the gap)
- from: sereneseasons:calendar | via: loot-seed | to: survival | motif: no-motif — the calendar is an information item, not a material; adding it to structure loot is decorative flavor rather than a weave | verdict: REJECT | reason: no-motif; calendar is informational, not a method-routed material; loot-seeding it doesn't advance the loop

REWORK on dossier candidate "economy via seasonal scarcity → M-09 luxury-good→coin": M-09 is retired (#163/#240). The underlying scarcity-driven demand is real and sound; re-express as M-30 (regional-scarcity gate — seasonal scarcity is temporal, but the mechanism is analogous: a good becomes scarce and trade-worthy when unavailable). However, M-30 is formally about *geographic* region-locking via GTMOGS; temporal season-gating is closer to M-16 (seasonal reagent driving demand). The dossier's M-09 citation is outdated. The *correct* framing is M-16 applied to food-demand: out-of-season crop scarcity → diet-variety demand (survival pressure) → trade-driven economy link. Mark the dossier's M-09 candidate as REWORK.

REWORK: dossier lists "economy via numismatics sell → M-09" — M-09 is retired; the economy link is real (seasonal scarcity drives trade) but must be re-expressed via M-16 (seasonal scarcity gating demand) + M-26 (consumption sink — food eaten/used up) rather than a bare sell link. Flag for dossier update.


