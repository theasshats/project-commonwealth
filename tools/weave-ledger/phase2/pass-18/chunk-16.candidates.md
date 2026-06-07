# Phase 2 candidates — chunk-16

## mysterious_mountain_lib   [anchors: support/library (1)]
LEAVE — zero-content code library (base block/item classes + FoodInfo registry helpers for MMF-Group mods; 0 blocks, 0 items, no recipe types). Nothing to weave; pull-only dependency.

## endermoon   [anchors: survival (1)]
- from: endermoon lunar-event (Ender Moon / Super Ender Moon) | via: worldgen/spawn gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ender Moon floods the night with endermen — an Occultism spirit-fire or Ars Nouveau imbuement ritual that requires an ender pearl obtained *only during an active Ender Moon* (KubeJS tag check on spawn-time or calendar-check) ties celestial pressure directly to magic supply; a player says "of course — the ender rift calls them" (M-22: lunar/celestial reagent)
- from: endermoon mass-enderman-spawn | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ender Moon nights yield a bounty of ender pearls; a Bountiful bounty that pays coin for bulk ender pearls during the active event window closes the loop from moon→combat→economy (M-14: bounty→drop economy)
- from: endermoon mass-enderman-spawn | via: recipe | to: Create | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: endermoon itself owns no items; the ender pearl is vanilla and already has Create uses — no new connection belongs on this mod specifically; weave belongs on enhancedcelestials or the pearl consumer, not the spawn-rate event

## clumps   [anchors: support/performance (1)]
LEAVE — zero-content server-performance mod; merges XP orbs into single entities for TPS. 0 blocks, 0 items, no recipe types. Nothing to weave; sanctioned support role.

## rightclickharvest   [anchors: support/QoL (1)]
LEAVE — behavior-only QoL interaction hook (right-click harvest + replant). 0 blocks, 0 items, no recipe types, no material output. Nothing to weave; no coherent content surface.

## ferritecore   [anchors: support/performance (1)]
LEAVE — pure runtime memory optimization (blockstate dedup, model-data consolidation). 0 blocks, 0 items, no gameplay content. Nothing to weave; sanctioned support role.

## dynamic_fps   [anchors: support/performance (1)]
LEAVE — client FPS throttler when window is unfocused/minimized. 0 blocks, 0 items, no gameplay content. Nothing to weave; sanctioned client-performance role.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: create:milling or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dendro Potion is an alchemical growth accelerant that feeds a tree; route its crafting through an Ars imbuement step (source gem + a seasonal bark catalyst) so that growth-hacking the forest requires actual magic investment — a player instantly understands "a magical growth elixir needs arcane infusion" (M-10: arcane-infusion pull); the output is mid-tier (not a basic everyday item), so infusion depth is appropriate
- from: dynamictrees logs (bulk output, whole-tree fell) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: DT fells a whole tree's worth of logs at once — routing those logs through a Create Millstone for sawdust/wood pulp byproduct (a standard M-12 processing-chain pull) ties the forest-harvest rhythm to the Create spine; everyday item, light single step (M-12: processing-chain pull)
- from: dynamictrees:dirt_bucket | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dirt_bucket is a convenience consumable for seed planting, not a "deco block recycling" candidate — M-04 is for deco/stone blocks crushing back to raw; forcing it here is a category mismatch even if mechanically possible
- from: dynamictrees species-seed conversion | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 is ore-doubling — crushing seeds isn't a resource-multiplication context; and DT's own seed_conversion recipe type already handles sapling↔seed; a Create crushing step here is redundant and adds no loop value
REWORK: dossier says "leave — DT trees are awkward for Create automated harvesters" but doesn't distinguish the *dendro_potion* (a mid-power alchemical item) from the *log output* (everyday). Both have coherent method pulls once tiered correctly. The blanket LEAVE recommendation understates the magic hook.

## ponderjs   [anchors: support/Create-docs (1)]
LEAVE — developer-tooling: a KubeJS scripting API for authoring Create Ponder scenes; 0 blocks, 0 items, no recipe types, no material graph. Sanctioned support role; nothing to weave.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone output) | via: config-tie / Create logic | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the season_sensor emits a redstone signal keyed to the current season; wire it to a Create gearshift/clutch/mechanical-arm so automated farms (harvesters, sequenced sorting) switch crop loadouts by season without player intervention — a player nods immediately: "the calendar runs the farm" (M-05: native-method gating — the sensor's redstone output IS the "machine's own method" gating a Create automation)
- from: out-of-season crops (scarce, slow-growing) | via: numismatics bounty / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: out-of-season produce is genuinely scarce (stunted growth without a greenhouse) so it commands a price — a Numismatics-priced trade or Bountiful bounty for winter tomatoes or summer barley closes the scarcity→economy loop; the seasonal calendar creates natural commodity price swings (M-09: luxury good→coin)
- from: seasonal fertility modifier (M-16 seed) | via: worldgen/event | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: crops that are ONLY fertile in a specific season become an Ars Nouveau / Occultism ritual reagent that must be timed to that season — "spring barley for the growth ritual, autumn wheat for the harvest ritual" — reinforcing the calendar as a gameplay clock that ties survival output to magic supply (M-16: seasonal reagent)
- from: greenhouse_glass | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: greenhouse_glass is referenced in config/wiki but does NOT appear in the jar block digest — only season_sensor and calendar items are grounded; proposing a Create recipe for an unconfirmed item is speculation; flag for JEI verification before authoring
OK — dossier's existing 2nd-anchor candidates (sensor→Create, scarcity→economy) are coherent and properly tiered. Adding the M-16 magic seam as new.



