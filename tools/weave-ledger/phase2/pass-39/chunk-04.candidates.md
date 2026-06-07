# Phase 2 candidates — chunk-04

## createadditionallogistics   [anchors: create, aeronautics (2)]

Existing connections review:
- create anchor: kinetics infrastructure is correct — it IS Create (deepens the spine).
- aeronautics anchor: seats wired to Stock Keepers / train logistics is legitimate; the aeronautics / logistics arm explicitly includes train transport.
REWORK: OK — connections sound. Both anchors are load-bearing and the mod's role is well-scoped (a performance+logistics deepener of Create, not a standalone content mod). No new edges needed; forcing one would be arbitrary.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: structure datapack — 150+ vanilla-block structures across biomes, loot=yes. No items of its own; content surface is entirely loot tables. Single survival anchor (exploration/discovery) is correct.

Method-pull candidates:
- from: trek chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scarce Numismatics coin (or coin blank requiring Create-pressing) seeded into rare trek structures makes exploring ruins a way to seed the early coin economy — players loot coin or coin blanks rather than emeralds, threading exploration into the player-run currency layer. This is a genuine demand-gating link (M-08 player-minted currency); loot-seed is the delivery.
- from: trek chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: source gems, arcane essences, or Occultism spirit-books seeded into trek ruins make remote structures a source of hard-to-farm magic reagents — exploration feeds the magic production route and draws players out into danger. Mob-drop-reagent logic applies here: the loot table IS the organic/world source.
- from: trek chest loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-key or rare Create-gated blueprint component hidden in the deepest trek fortresses / pyramid / dungeon loot creates an exploration-to-tech unlocking arc — players who push far enough find a gate item for a high-tier Create machine, making exploration matter for tech progression. Scale to the structure rarity (a pyramid or fortress, not every island).
- from: trek chest loot tables | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: seeding combat drops into trek loot doesn't advance the loop — that's just extra loot scattered across structures rather than a combat-route supply link. M-34 is about combat specialists farming bosses to trade; scattering boss-adjacent drops into structure chests doesn't create the specialist dynamic, it removes it. REJECT.

## supermartijn642configlib   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (config API); no items, no recipe types, no loot, no in-world behavior. Nothing to weave.



