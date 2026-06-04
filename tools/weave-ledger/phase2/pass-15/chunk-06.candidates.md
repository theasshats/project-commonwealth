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

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — build-tooling QoL within Create: 3 items (empty_pattern_schematic, pattern_schematic, pattern_schematic_and_quill), no loot, no processing methods. The items are tool/utility items with no material surface to route through another pillar's method. Forcing them into a second pillar would be arbitrary.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a werewolf-cryptid claw transmutes in spirit-fire into a dark essence — folklore meets occult ritual, obvious to a player
- from: brazil_legends:amber_shard / amber_pearl | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: fossilized amber carries preserved magic; imbuement refines it into a usable arcane reagent
- from: brazil_legends:big_tongue | via: occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Giant's tongue is a ritual component — folklore grotesque becomes a summoning ingredient
- from: brazil_legends:amber_shard | via: numismatics sell (loot-seed into trader goods) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw amber is a curio — rare enough to be a trade good, light integration, one sell step
- from: brazil_legends:bottle_with_saci | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: a trickster-spirit trapped in a bottle is thematically charged but arbitrary as a coin trade good — the thematic tension between "magic curiosity" and "sell for coin" is too weak; use it as a magic catalyst instead (already ACCEPT via M-10/M-11 path)
- from: brazil_legends:bloodmoon_sickle | via: config/worldgen (bloodmoon event) | to: survival/magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the sickle — forged in bloodmoon loot or dropped under a lunar event — ties the weapon to the lunar cycle system (M-22 lunar/celestial reagent, provisional extension to weapon drops)

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: whale ambergris is historically a perfume/alchemical ingredient — imbuement into an arcane reagent is an obvious player read
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: void-touched residue transmutes in spirit-fire into an ender essence — organic→occult, coherent
- from: alexsmobs:void_worm_beak (endgame drop) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a void worm beak — hard organic material — feeds a sequenced assembly chain as a structural component for high-end Create machinery (boss-drop → tech gate)
- from: alexsmobs:bear_dust | via: occultism:ritual | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: powdered bear essence is a standard ritual material — everyday mob drop gets a use
- from: alexsmobs:banana (food drop) | via: farmersdelight:cooking or create:mixing | to: survival (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bananas feed a food-processing chain (banana bread, smoothie intermediate) — fauna → food web
- from: alexsmobs:skunk_spray | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: spraying a liquid reagent into Create mixing is technically possible but the tone is clashing — a stink gimmick as an industrial mixing input reads as forced; thematically weak
- from: alexsmobs:ambergris | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a real-world luxury commodity — selling it for coin needs no explanation
- from: alexsmobs:void_worm_effigy | via: loot-seed / boss drop | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm effigy — a totem of an endgame beast — unlocks a high-tier Create recipe as a boss-key gate (M-15 boss-key unlock)
- REWORK: (no existing cross-pillar connections yet — survival only, all candidates are new)

