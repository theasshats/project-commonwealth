# Phase 2 candidates — chunk-02

## gravestone   [anchors: survival (1)]
- LEAVE — pure death-recovery utility; the gravestone and obituary items are functional QoL, not tradeable materials. No method-pull surface, no loot table that seeds weave-relevant drops (the loot=yes is just the block dropping itself when broken). Any edge would be forced.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structural worldgen overhaul only; 0 items, 0 blocks, loot=no (uses vanilla mineshaft loot tables, not its own). No custom loot tables to seed, no method surface. It deepens the underground exploration feel but provides no material hook for weaving.

## kubejs   [anchors: support / modpack tooling (1)]
- LEAVE — the scripting engine that authors every weave; it has no player-facing items and is not a weave target. Genuine zero-content role.

## ichunutil   [anchors: support / library (1)]
- LEAVE — shared class library; 0 items, 0 blocks. Genuine zero-surface dependency.

## spark   [anchors: support / performance (1)]
- LEAVE — server/client profiler; no items, no gameplay content. Genuine zero-surface diagnostic tool.

## minecolonies_compatibility   [anchors: survival, create (2)]
REWORK: OK — connections sound. Survival (colony farming/jobs) and Create (Courier ↔ Stock Link bridge) are the right two anchors for a bridge mod. No rework warranted.
- from: ars_nouveau:source_gem (or irons_spellbooks reagent) as IE-fertilizer substitute | via: immersiveengineering:fertilizer route (colony orchardist/farmer) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony orchardist needs a magic fertilizer to grow exotic modded crops at speed — magic specialists supply the colony farm, forcing cross-route exchange between the magic and colony production routes.
- from: minecolonies_compatibility:common_network_storage / citizen_stock_keeper | via: aeronautics/logistics (Create Stock Link as ship cargo hold relay) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: the storage-network bridge is a logistics convenience (colony pulls from player storage) but it doesn't specifically require aeronautics as the transport method; any local storage network satisfies it — no distinct logistics-required weave, just ambient Create infrastructure reuse.
- from: minecolonies_compatibility:tacz_dummy_gun | via: tacz:gun_smith_table_crafting | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the tacz_dummy_gun is an internal NPC-behavior shim, not a player-obtainable weapon or trade good; it's a headless behavioral token, not a material surface for weaving.

## s_a_b   [anchors: create, aeronautics (2)]
REWORK: OK — connections sound.
- create link (via create:compacting + create:mixing) is the correct intake for steel armored blocks; the method-routing is coherent.
- aeronautics link (M-23 structural alloy → airframe/hull) is the clearest application: blast-resistant hull plating for ships and vehicles is exactly what the aeronautics arm needs for armored-vessel construction.
- from: s_a_b:hardsteelblock | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard-steel hull panels take sequential pressing and annealing steps — the endgame tier of armored construction earns GregTech-style depth, just like other top-tier Create outputs.
- from: s_a_b:steelblock (any tier) | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: bare "combat player buys from Create player" is the ambient loop endpoint, not a distinct weave mechanism; M-34 requires the combat route producing something the non-combat player can't self-make, but s_a_b blocks are already in the Create pillar accessible to any Create specialist — no isolation that forces trade.



