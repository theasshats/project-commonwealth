# Phase 2 candidates — chunk-06

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron (base tier) | via: recipe (create:pressing + crafting) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: flight gear from the tech bench — pressing iron plates into reinforced frames earns the glider its wings
- from: vc_gliders:paraglider_diamond / _netherite (high tier) | via: recipe (create:mechanical_crafting) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the upper-tier gliders demand a mechanical crafting table, making aerial mobility a proper Create milestone
- from: vc_gliders:copper_upgrade | via: recipe (create:deploying) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: deployer-applies the copper upgrade onto an existing glider — single-step, light, sensible
- from: vc_gliders:nether_upgrade | via: recipe (craft, nether materials) | to: aeronautics (depth) | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — nether gating of an upgrade is a vanilla adventure hook, not a cross-pillar link; no second pillar gained
- from: reinforced paper feedstock | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling paper pulp is a very weak weave — the paper volume required for gliders is tiny, the link is incidental rather than structural; doesn't meaningfully tie the glider to the Create spine

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — genuine zero-content behavior mod: 0 items, 0 blocks, 0 loot, pure runtime mixin patcher. No surface to weave.

## controlling   [anchors: support/client-UI (1)]
- LEAVE — genuine zero-content client UI mod: 0 items, 0 blocks, 0 loot, no world mechanics. Adds a search bar to the keybinds screen; nothing to weave.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — genuine zero-content code library: 0 items, 0 blocks, 0 loot, no recipe methods. Pure API scaffolding; nothing to weave.

## t_and_t   [anchors: survival (1)]
- from: t_and_t loot tables (chests in village/fort/sail-ship structures) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: conquerable forts and trade-port ships naturally carry coin — explorers find currency in the world, not just at a mint
- from: t_and_t loot tables (conquerable outpost/fort chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a pillager fort yields bounty tokens or coin alongside loot — combat feeds the economy (M-14 bounty drop economy)
- from: t_and_t village variants (16 biome villages with villagers) | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional) | hook: biome-specific villagers in t_and_t's settlements carry specialty goods priced in Numismatics coin — the settlement is a trade hub (provisional motif)
- from: t_and_t loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare folklore/ancient structures occasionally seed a magic reagent (source_gem shard, arcane scroll) — exploration converts to magical progression
- REWORK: (no existing cross-pillar connections yet — survival only, all candidates are new)

