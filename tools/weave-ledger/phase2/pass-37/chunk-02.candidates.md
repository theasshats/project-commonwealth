# Phase 2 candidates — chunk-02

## gravestone   [anchors: survival (1)]

- LEAVE — death-recovery utility; its loot=yes flag refers only to the player's own preserved inventory, not a seedable external loot table. No material inputs/outputs and no craftable items with cross-system value. Any weave (e.g. magic ritual consuming the obituary) would be purely contrived with no player-nod.

## bettermineshafts   [anchors: survival (1)]

- LEAVE — pure structure/worldgen overhaul; loot=no (vanilla mineshaft loot only), 0 items, 0 blocks of its own, no methods. Indirectly serves the scarce-ore mining loop by making mineshafts richer to explore, but there is no surface to route a weave through. Nothing to seed, craft, or process.

## s_a_b   [anchors: create, aeronautics (2)]

REWORK: OK — existing connections sound. The Create→aeronautics link (armored steel blocks built through create:compacting/mixing for ship/vehicle hull armor, M-23 structural alloy → airframe/hull) is coherent and correctly scaled (mid-tier structural material). No mis-costing or lore clash.

New candidate — 3rd angle to survival:
- from: s_a_b:lightsteelblock (basic tier) | via: minecolonies:composting/colony-request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Blacksmith can produce basic light-steel armor blocks cheaper than full Create compacting — making s_a_b plating the colony route to fortification, not only the Create-forge route.

New candidate — survival (danger) angle:
- from: s_a_b:hardsteelblock / doublesteelblock (high tier) | via: loot-seed (boss-drop key gates the hard-steel recipe?) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: s_a_b blocks are primarily structural/decorative; gating the hardest tier behind a boss drop would frustrate builders who need blast resistance for fortification — the armor-progression theme better fits Create depth (M-06) than M-15 boss-key, and the dossier already notes M-06 as an optional deepening direction.

## kubejs   [anchors: support/tooling (1)]

- LEAVE — this is the weaving engine itself (the scripting layer that authors every weave in the pack). It has no player-facing items to route and no in-game method to pull through. Any "weave" of kubejs would be circular. Correct anchor is support.

## ichunutil   [anchors: support/library (1)]

- LEAVE — zero blocks, zero items, zero loot; a pure shared-class library for iChun's mods. No gameplay surface whatsoever.

## spark   [anchors: support/performance (1)]

- LEAVE — server/client profiler with no in-game items, no methods, no loot. Diagnostic tooling only; correctly filed as support.




