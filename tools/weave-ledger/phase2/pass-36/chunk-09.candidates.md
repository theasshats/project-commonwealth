# Phase 2 candidates — chunk-09

## createfood   [anchors: survival, create (2)]

Already has 2 anchors (survival + Create). Reviewing existing connections first, then looking for richer links.

REWORK: OK — connections sound. Create processing chain (create:milling/mixing/pressing/compacting/deploying) producing high-effort finished dishes is exactly the right arc; survival via diet/nutrition is solid. No arbitrary edges.

New candidates:

- from: createfood finished dishes (pizzas, pastries, ice cream) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare "sellable luxury = coin" is the ambient loop endpoint, not a weave — this re-states M-09 which is retired. There is no demand-gating here, just "cook and sell." Economy link only earns its place when it gates demand (M-26/M-28/M-29/M-30), not when it just observes that food is tradeable.

- from: createfood finished dishes (plated blocks — cakes, pies, cheesecakes eaten by slice) | via: consumption (M-26) | to: survival → economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Plated dishes are placed in communal spaces and eaten slice-by-slice — they degrade on use, so the baker must keep restocking; the consumption-sink closes the diet-demand loop natively without any recipe change. This is already in-game; the weave is naming it explicitly so the diet-system and demand accounting recognise createfood as a M-26 node.

- from: createfood raw meat/crop tags (c:foods/raw_*, c:foods/doughs) | via: farmersdelight:cooking / create:milling as M-12 pull | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: createfood's 2424 c:tags already pull raw crops and meats through Create/FD methods into finished dishes — the processing chain is the mod's core mechanism. Acknowledging this as M-12 means the graph reads correctly: farm output (survival-side) flows through Create machines (Create-side) into food (back to survival). Confirming the arc keeps the web coherent.

- from: createfood finished dishes (seasonal fruit pies, jam variants) | via: Serene Seasons seasonal gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Apple/berry-flavour lines could require seasonally-available fruits (apples heavy autumn, berries spring/summer) — a baker can't stock the full menu year-round, making seasonal pies a specialization product with variable supply. Depth matches everyday-to-mid tier (one extra seasonal-ingredient step). A Phase-3 KubeJS gating, not a recipe rewrite.

## moreoverlays   [anchors: support — QoL/client (1)]

LEAVE — Confirmed zero-content client HUD overlay (spawn markers, chunk-grid, JEI search dim). No items, no blocks, no loot, no processing. Nothing to route or weave.



