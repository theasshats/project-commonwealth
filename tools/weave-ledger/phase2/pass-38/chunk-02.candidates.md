# Phase 2 candidates — chunk-02

## incontrol   [anchors: support (server-util/QoL) (1)]
- LEAVE — config-only spawn/loot/XP rule engine; 0 blocks, 0 items, no registered methods, no routable material. It can *enable* the scarcity foundation (region-gating spawns/drops that feed M-02/M-30), but that is infrastructure shaping other mods' tables, not a weave-able node of its own. Genuine zero-surface admin tool.

## platform   [anchors: support (library/API) (1)]
- LEAVE — pure code library (ItsBlackGear's Architectury wrapper); 0 blocks, 0 items, no gameplay surface. The single biome-modifier is its own framework hook, not player content. Nothing to weave.

## shulkerboxtooltip   [anchors: support (QoL/client) (1)]
- LEAVE — client-side container-preview tooltip; 0 items/blocks, informational overlay only. No content surface to route through any method.

## farm_and_charm   [anchors: survival (1)]
- from: barley/oat grain | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: take your barley/oat to a Create millstone for flour, threading the farmhouse bread chain onto the Create spine alongside its own crafting-bowl path.
- from: barley/oat (grain) | via: create_central_kitchen / farmersdelight:cooking | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: barley/oat feed Create's Central Kitchen mechanical-cooking automation (this farm is a grain producer; CCK automates the meals) — a cross-route dependency that pulls farm output through the Create kitchen.
- from: barley/oat | via: alcohol_industry:alcohol_boiling / vinery ferment | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: barley is the brewer's grain — ferment/age it (Alcohol Industry boiling) into ale/spirits that must sit to gain value, creating an aging specialist who buys raw grain.
- from: feeding-trough/coop husbandry surplus (meat/eggs/butter) | via: minecolonies request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony's cooks/restaurant want bulk eggs, butter and meat — the "feed-for-more-drops" husbandry loop becomes a colony-provisioning production engine, not a vendor sale.
- from: nettle/ribwort tea, butter, dishes | via: numismatics mint (bare sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this is the dossier's old "luxury good → coin" suggestion; M-09 is RETIRED (economy is player-run, "sellable" is the ambient endpoint, not a weave). The real demand-gate is the colony/diet route already captured above (M-28) and the diet-variety pull is ambient food use (M-27 n/a), so no standalone weave.
- from: fertilized farmland / soil boost | via: — | to: — | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: growth-boost soil is an everyday self-contained farming convenience; no method WANTS it and forcing a Create/magic tie would gate a basic. No coherent cross-system pull.

## fishingreal   [anchors: survival (1)]
- LEAVE — pure behavior tweak (reeled fish item -> live fish entity, datapack-mapped); 0 items/blocks of its own, no method to feed. Any weave belongs to the fish-content/cooking mods it sits beneath (createfisheryindustry, farmersdelight, spawn's casting net), not here. Forcing an edge would be arbitrary.
