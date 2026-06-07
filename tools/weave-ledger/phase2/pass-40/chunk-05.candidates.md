# Phase 2 candidates — chunk-05 (context-fed)

## naturescompass   [anchors: support/QoL (1)]
- CHALLENGE | from: naturescompass:naturescompass | via: recipe (regional-ore input) | to: economy | motif: M-30 | verdict: REJECT | hook: the compass is an everyday exploration tool; region-locking the recipe means players in certain regions literally cannot craft a basic navigation aid — the power-read (everyday = one light step, never blocked) conflicts with a regional-ore gate that is only accessible after finding a biome you already need the compass to locate; circular and over-gates a utility

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — pure client HUD overlay; 0 items, 0 methods, no material surface to route through any motif

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — code library only (GUI/block/BE/packet scaffolding); 0 items, 0 methods, no content surface

## spark   [anchors: support/performance (1)]
- LEAVE — server performance profiler; 0 items, 0 methods; diagnostics tooling has no material routing

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — packdev scripting tool for Create Ponder scenes; 0 items, 0 methods; documents the spine but produces no content to weave

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — chat-signing/reporting intercept; 0 items, 0 methods; purely a networking privacy mod

## rechiseledcreate   [anchors: Create, decoration (2)]
OK — existing rows sufficient; mod already has ≥2 anchors (Create kinetic method + decoration palette); M-04 deco-recycle ACCEPT and M-28 colony window request ACCEPT cover the real edges; no uncaptured motif survives red-team

## t_and_t   [anchors: survival (1)]
- CHALLENGE | from: t_and_t sail-ship loot | via: loot-seed | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is "structural alloy/plate → airframe hull construction ingredient"; a schematic or canvas found in a sail-ship chest is not a structural alloy — the motif is misapplied; the correct motif for a loot-seeded blueprint/gate-item is M-15 (boss-key unlock: the document gates a complex aeronautics recipe) or M-34 (exploration/combat yields supply); M-23 should not tag informational loot drops
- NEW | from: t_and_t village/fort structures | via: loot-seed (worldgen-placed Trading Floor stall block seeded into T&T village structure templates via datapack structure override) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: each biome-specific T&T village has one pre-placed Trading Floor stall wired into its central square — the village is a trade hub by structure, not just by suggestion; players travel to a jungle village expecting different goods than the tundra village, and the stall confirms it mechanically

## spawn   [anchors: survival (1)]
- NEW | from: spawn:date_bunch (date palm fruit from date_log tree set) | via: vinery:apple_fermenting → aged date wine | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: date palms yield a fruit that ferments in a vinery barrel over time — a date wine that must age before it's worth anything, tying the spawn wood set's unique fruit into the maturation-specialist role; the aging time (not just the processing step) is what creates value and makes this M-35 rather than M-12

## owo   [anchors: support/library (1)]
- LEAVE — declarative GUI/config library; 0 items, 0 methods, no player-facing content
