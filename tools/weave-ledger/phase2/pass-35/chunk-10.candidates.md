# Phase 2 candidates — chunk-10

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: undead ice-variant flesh dissolves into a cold spirit essence — biomancy from the frozen dead is an obvious pairing
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-zombie flesh feeds a heat-aligned ritual spirit; the element is already there in the drop name
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: wart from a corrupt undead is a plausible Ars corruption-reagent — thematically sits squarely beside Ars' blight/undead spells
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: soul-fire haunting of cold-death flesh producing a chilled soul-byproduct is coherent and routes the bestiary through the Create web
- from: rottencreatures:corrupted_wart | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed corrupted wart yields a nether-spore dust useful as a dye or chemical intermediate — Create already crushes wart-family items
- from: rottencreatures mob heads (decorative) | via: loot-seed (loot tables) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mob heads (dead_beard, immortal, glacial_hunter) are combat trophies a combat specialist sells; the pirate/storm-lich variants are thematically prestige collectibles a non-fighter would pay for
- from: rottencreatures:treasure_chest drop | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the treasure_chest is a block spawned by Dead Beard; its loot is vanilla-style pirate loot — seeding pack-specific economy items into it would require knowing exact loot-table structure, and the generic "loot chest → coin" is a bare sell link falling under the retired M-09 logic; REJECT until a specific gated demand exists
- REWORK: the dossier's 2nd-anchor candidates both cited M-09 (luxury→coin, retired) and M-11/M-02 which are valid — the dossier flagging is partially stale on M-09. The M-02/M-11 routings above are the correct reformulation.

## do_a_barrel_roll   [anchors: support (client QoL) (1)]
LEAVE — pure client camera/movement mod with zero items, blocks, or recipe surface; the flight it modifies is vanilla elytra, not Create Aeronautics ships; nothing to route through any method. Support role confirmed.

## towntalk   [anchors: support (MineColonies flavor) (1)]
LEAVE — no items, no blocks, no recipe methods; audio-cosmetic layer riding MineColonies which carries the real weave; independent edge would be entirely contrived.

## sereneseasons   [anchors: survival (1)]
- from: season-gated crops (any seasonal fertility window) | via: create:milling or farmersdelight:cooking | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: out-of-season crops are rare enough to be worth milling for a higher-yield flour or cooking into a premium dish — the scarcity the season creates amplifies value through a processing step
- from: sereneseasons:season_sensor (redstone output) | via: config tie → Create contraption gearshift | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create automated farm reads the sensor and swaps crop varieties by season, turning the season clock into a real automation trigger a Create specialist wires up
- from: winter-scarce crop (e.g. pumpkin, wheat, off-season) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: an off-season ingredient harvested under snow is imbued with a seasonal attunement; "winter wheat" as a magic reagent is a classic folklore/alchemy trope and the M-16 motif is explicitly listed as a priority survival lever
- from: seasonal scarcity (general) | via: bare economy sell link | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: dossier's 2nd candidate explicitly cited M-09 (retired); seasonal scarcity does create trade-value but "it's sellable" is the ambient loop endpoint, not a weave — a real economy edge needs demand-gating (e.g. M-30 regional gate + M-26 consumption); reject until a specific cross-player demand gate is scoped
- REWORK: dossier candidate 2 uses M-09 (luxury→coin, retired) — should be rephrased as M-30 regional-scarcity gate or M-26 consumption sink if an economy anchor is later wanted. The season_sensor Create link is correctly framed but was listed as M-05 "native-method gating" in the dossier — that label fits since the sensor IS sereneseasons' own flagship device driving a Create method. OK on the stronger candidates; M-09 mention is stale.


