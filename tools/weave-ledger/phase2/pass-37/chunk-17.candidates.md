# Phase 2 candidates — chunk-17

## sable_sa_compat   [anchors: support/aeronautics (1)]
- LEAVE — pure compat behavior patch (0 blocks, 0 items, no recipe types); bridges Create: Stuff 'N Additions movement gear to Sable ship-physics engine. No material surface to route through any method.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: farmersdelight:cutting | to: create (food-processing web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a cook slices ginger root on the cutting board into minced ginger, a spice ingredient that feeds cooking recipes — the same step a real kitchen takes.
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday (automated scale) | tone: ok | verdict: ACCEPT | hook: automated millstone grinds ginger root into ground ginger spice — lets a Create baker automate the spice supply for cookie/eggnog production chains.
- from: snowyspirit:gingerbread_cookie / gingerbread goods (c:foods/cookie) | via: create:mixing / extradelight:mixing_bowl | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: gingerbread recipes call for seasonal ginger (sparse-jungle/winter-biome crop) — winter is the only time stocks are replenished, making gingerbread a genuine seasonal food good that drives winter-period foraging demand; requires Serene Seasons config gate on ginger growth to be meaningful.
- from: snowyspirit:sled | via: (no method) | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: sled is a terrain-bound snow vehicle with no interface to Create Aeronautics ships or any routable method; the "traversal" link is a vibe overlap, not a mechanism.
- from: snowyspirit:candy_cane_block / gingerbread deco | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: M-04 covers metal/stone deco → raw material + XP nugget; food-material decorative blocks (candy, gingerbread) produce no coherent crush byproduct — the pairing is mechanically incoherent, not just unusual.
