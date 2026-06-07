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

## trading_floor   [anchors: create, economy (2)]

Existing connections review:
- create anchor: hard Create dependency (it IS a Create depot variant) — correct.
- economy anchor: its purpose is automating villager trades, which is a distribution/exchange mechanic — correct.
REWORK: OK — connections sound. It is already a genuine two-anchor mod at the exact seam of Create logistics and the economy distribution layer. No new edges needed.

Additional checks (method-pull):
- The dossier flags M-08 (player-minted currency via the Trading Depot accepting Create-processed goods → emeralds → Numismatics mint) as a natural future use. That's a valid weave candidate but it's an economy-internal refinement: Create output → depot → emeralds → player mints coin. Power: mid. Tone: ok. Motif: M-08. Verdict: ACCEPT | hook: a Create production line auto-feeds the Trading Depot to convert refined goods into emeralds, which a player mints into Numismatics coin — the depot becomes the monetization point where the tech spine meets the player-run currency layer. via: config tie (depot wired into Create belt) + numismatics mint.
- from: trading_floor:trading_depot used for enchanted book farming | via: create belt + trading depot | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: routing enchanted books via the depot into magic is a one-hop convenience shortcut — it removes scarcity rather than gating demand. Enchantments belong to the magic specialist role (M-33 service-for-hire or the magic route's locked output); auto-farming them through a depot erodes that specialization. REJECT.

## dataanchor   [anchors: support/library (1)]

LEAVE — genuine zero-content developer library (data-attachment + networking API); no items, no blocks, no loot, no gameplay behavior. Nothing to weave.





