# Phase 2 candidates — chunk-15

## mru   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); pure code-sharing library for itsmineblock11 mods. No material surface to route through any method.

## resourcefullib   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); pure cross-platform API/utility library. No material surface to route through any method.

## yungsapi   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); jigsaw/structure tooling API for YUNG's mods. No material surface; all weave potential lives in the dependent YUNG structure mods, not here.

## configuration   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); config-screen GUI library. No material surface to route through any method.

## voicechat   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); proximity voice-chat infrastructure. No material surface; weaving would be purely contrived.

## crash_assistant   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); client crash-diagnostics utility. No material surface to route through any method.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — no items/blocks (0 blocks, 0 items, loot=no); sleep/rest-buff mechanic only (status effects applied to player). Pairs thematically with temperature and seasonal survival but offers no material join key — any connection would be a contrived config-tie with no player-legible hook. The well-rested buff is a survival pressure signal, not a connectable resource.

## born_in_chaos_v1   [anchors: survival (1)]
Power-read: dark_metal is a mid-tier material (bench-crafted mob drops from ~7–16% rare kill drops, not mineable); boss weapons (Soul Saber, Great Reaper Axe) are endgame-adjacent. bundle_of_bones is an everyday drop block. loot=yes (dungeon/structure loot potential). Spooky-gothic vibe; graveyard/soul aesthetic.

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal ore runs through the crusher like any other metal — the spooky forge feeds the same industrial pipeline, doubling yield with a sinister dust byproduct.
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: The haunted bone bundle is ritual kindling — burning it in spirit-fire transmutes it into a necromantic reagent intermediate, connecting the undead kill-loop to the occult pillar.
- from: born_in_chaos_v1:dark_metal (boss-drop weapons / Soul Saber) | via: bountiful board + numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bounty boards call for proof of the chaos incursions; dark metal blades and boss drops are the receipts, paying out coin and converting the danger loop to trade goods.
- from: born_in_chaos_v1:bagof_candy / seasonal Pumpkinhead loot | via: loot-seed | to: economy | motif: M-14 (provisional motif) | power: everyday | tone: ok | verdict: ACCEPT | hook: Pumpkinhead's seasonal chest drops include the candy bag as a time-limited collectible; seeding it into the loot table as a rare trade item links seasonal danger to the coin economy.
- from: born_in_chaos_v1:dark_metal | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal passed through the soul-fire haunt process gains a spirit-infused cursed quality — a natural Create→occult bridge using metal already steeped in undead lore.
- from: born_in_chaos_v1:argillite blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco-block recycling back to raw material; argillite is primarily a build palette, not a processed material — crushing it to gravel/dust is coherent but adds little loop-value; the dark_metal M-03 edge already anchors Create, and adding argillite crushing is redundant depth-padding for a basic block. Low ROI; keep Create anchor tight to the metal edge.
- from: born_in_chaos_v1:great_reaper_axe (boss weapon) | via: cataclysm:weapon_fusion | to: survival | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: No motif covers "cross-mod boss weapon fusion into cataclysm's anvil" and the tone pairing (Halloween-spooky born_in_chaos + dark-fantasy Cataclysm) is workable but the fusion target would be arbitrary — cataclysm's fusion path is for its own boss lineage. No-motif → reject-for-review.

OK — existing connection (survival) is sound. New edges add Create (M-03, M-19), magic (M-11), economy (M-14) — taking born_in_chaos to 3–4 anchors.




