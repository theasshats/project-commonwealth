# Phase 2 candidates — chunk-30

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, 0 loot tables, no methods. Pure crash-handler hook with no content to route.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled decorative block variants | via: recipe (rechiseledcreate Mechanical Chisel — already companion in pack) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: running your chisel off rotational power — bulk decorative cuts at machine scale, natural Create throughput play
- from: rechiseled stone/metal variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing rechiseled variants back to raw material is a marginal bookkeeping loop; M-04 already established on the Mechanical Chisel route; adding a crush-back is low signal and creates waste-economy noise for everyday deco blocks
- REWORK: existing dossier candidate flags M-04 as STRONG for rechiseledcreate Mechanical Chisel — connection is sound; no rework needed. One note: confirm rechiseledcreate is actually in the pack's mods/ (the dossier says "already in pack") — if the companion mod is present, rechiseled already has 2 pillars and is complete.

## create_jetpack   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create + aeronautics is a natural fit (air-pressure flight gear from the Create backtank); pillar count is 2.
- from: create_jetpack:netherite_jetpack (endgame variant) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the lava-dive jetpack shouldn't be a flat bench craft — a sequenced finishing step (deploy netherite plate onto completed brass jetpack) earns the endgame tier a real construction feel
- from: create_jetpack:jetpack (brass tier) | via: M-15 boss-key | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: the brass jetpack is mid-game, not endgame flagship; gating it behind a boss drop over-prices the entry tier — M-15 is better reserved for true endgame gates; depth scaling rule says mid = one light step, not a boss gate
- from: create_jetpack:jetpack | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: jetpack is air-pressure (pneumatic), not FE/electric; forcing an electric charging step would contradict the mod's own pneumatic theme; tone clash

## timm   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-surface client mod: 0 blocks, 0 items, loot=no, no methods. Biome-title overlay; purely cosmetic display code with no content surface.

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics IS the economy pillar hub; coins are the reagent-owned output of M-08/M-09. It is a destination mod, not a source.
- from: numismatics:vendor / depositor | via: config tie | to: Create | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: no new weave needed — the existing anchors already cover Create (vendor/depositor are Create-flavored, crafted via Create methods) and economy. Adding config-tie noise on a hub mod clutters reagent-ownership records with no gain.
- from: numismatics:blaze_banker / bank_terminal | via: loot-table seeding | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: seeding bank cards into dungeon chests is cute but fits no current motif (no M covers "economy object as loot"); mark no-motif, reject-for-review rather than invent.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — genuine zero-surface language adapter: 0 blocks, 0 items, loot=no. Kotlin runtime shim with no player-facing content whatsoever.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — genuine zero-surface client rendering engine: 0 blocks, 0 items, loot=no. OptiFine texture-property parser; pure render-layer code, no game content.

## rhino   [anchors: support/library (1)]
- LEAVE — genuine zero-surface JS engine library: 0 blocks, 0 items, loot=no. Mozilla Rhino runtime adapter for KubeJS; no player-facing content.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: the 847 slab/stair/wall cuts | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create saw on the log/stone cuts means the whole builder's palette auto-produces on the Create spine — bulk material prep is exactly what the mechanical saw is for
- from: concrete-powder / sand / gravel gravity cuts | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed concrete-powder stairs → sand/gravel recycle; closes the loop on the gravity-block cuts without needing the player to manually break them, which is a natural Create throughput step
- from: wood/log cut variants | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling is for extracting material (sawdust / pulp); milling a finished decorative slab doesn't yield a coherent intermediate — this is a forced edge. create:cutting is the correct method for wood; M-12 would require a believable intermediate product that these cuts don't plausibly give.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a dungeon this deep should pay out coin — stronghold chests containing a handful of Numismatics coins (spurs/bevels) makes the End-portal structure a meaningful economic objective, not just an End-access gate; seeds M-14 bounty → drop economy without any recipe
- from: betterstrongholds loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: hidden stronghold rooms — alchemy alcoves, ritual chambers — plausibly hold Ars Nouveau source gems or Occultism ritual components; a magic reagent drop deepens the exploration payoff for magic-path players and ties the structure to the magic pillar
- from: betterstrongholds loot tables | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 (boss-key unlock) is for boss drops gating complex recipes, not dungeon chest loot; the stronghold has no boss — the End Portal in its center does enable the Ender Dragon, so a boss-key argument could be stretched, but the direct loot-seed route (M-02/M-14) is more coherent; the M-15 route would require treating the stronghold as a boss encounter, which is a forced read

== CHUNK COMPLETE ==

