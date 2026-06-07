# Phase 2 candidates — chunk-12

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — zero content surface: client HUD overlays only (light-level X, chunk grid, JEI-search dim), no items, no blocks, no loot table, no material flows. Nothing to route through any method.

## accessories_compat_layer   [anchors: support (1)]
LEAVE — pure API translation shim (Curios/Trinkets → Accessories slot system). No items, no blocks, no loot, no material surface. The wearables that could weave live in the host mods; this layer is invisible plumbing.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — movement-physics tweak only (ladder/vine climb speed, jump-while-climbing). No items, no blocks, no loot, no material flows. Genuine zero-content behavior mod; nothing to route.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is a desert forage item; milling it into a dye pigment or food dust is exactly the "raw forage → processed good" path Create mills crops through — natural and discoverable
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps are bulk organic blocks; milling them yields mushroom powder / dye intermediate the same way vanilla mushrooms can be processed — fits the Create-spine foraging economy
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is an everyday renewable forage drop in desert biomes — it's too abundant and low-effort to be a meaningful luxury trade good; M-09 requires "high-effort consumable" (wine, cheese, processed crop). The raw fruit alone fails the bar; a processed downstream (e.g. milled into powder then crafted into a jam via extradelight:dynamic_jam) could qualify but that edge lives on the downstream mod, not here.
- from: dynamictreesplus:mushroom_branch | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is the "deco block crushes back to raw/gravel + XP nugget" motif; mushroom branches are organic growth byproducts, not deco blocks placed by the player. Applying M-04's lossy-recycle logic to organic wood-like branches doesn't fit the motif's anti-arbitrage rule — it would create a free XP farm from mushroom farms.
REWORK: existing anchor (survival only) is the floor. The two ACCEPT items above (saguaro fruit milling, mushroom cap milling) each add Create as a 2nd anchor. Both are same-motif (M-12) so only one needs to ship to elevate the mod; the mushroom-cap route is the higher-value one (bulk block → processed dye/ingredient) and should be prioritized.

## ctl   [anchors: Create, aeronautics (2)]
OK — connections sound. CTL is built via create:sequenced_assembly (Create anchor) and its entire purpose is train/contraption lighting (aeronautics anchor). Already at the 2-pillar goal and the links are load-bearing and thematically tight, not arbitrary.
- from: ctl:htlb_block / ilb_block | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: train lamp blocks are functional build components, not luxury consumables — selling them as trade goods is plausible but doesn't advance the loop meaningfully; M-09 applies to consumable luxury goods (wine, cheese), not durable crafted parts. A forced economy edge here would be arbitrary.

