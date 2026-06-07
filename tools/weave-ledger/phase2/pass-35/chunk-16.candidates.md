# Phase 2 candidates — chunk-16

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — zero-content behavior-only mod; registers no items, no blocks, no methods; the slab-break interaction offers no material to route through any method. Sanctioned QoL support role.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — pure Kotlin language adapter; zero player-facing content, no items, no blocks, no methods. Genuine zero-content code library; sanctioned dependency role.

## fusion   [anchors: support/library (1)]
- LEAVE — client-only rendering library for connected/scrolling textures; no items, no blocks, no recipe methods. Genuine zero-content visual backend; sanctioned support role.

## trading_floor   [anchors: create, economy (2)]
- REWORK: the dossier notes "Natural keystone for M-08: feed Create-processed scarce goods into the depot to mint emeralds/Numismatic value." — the Trading Depot automates *villager trades*, not Numismatics minting; the M-08 framing is a loose analogy and risks conflating NPC emeralds (an old faucet model) with player-minted coin. The correct read: Trading Depot as an economy node should be scoped to M-33 (service-for-hire labor — the depot does *work* on behalf of a player's production line) or the ambient loop endpoint (moving processed goods through a villager trade channel to acquire useful items), not flagged as a coin-minting node.
- from: trading_floor:trading_depot (Create depot + villager integration) | via: worldgen/spawn config + colony interaction — seed a MineColonies villager-type worker who can staff a Trading Depot (emergent labor market for automated trading) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony player staffs the depot to automate trade throughput; another player's Create belt feeds it — the depot becomes a colony service node
- from: trading_floor:trading_depot | via: loot-seed — the Depot block itself drops into betterstrongholds / relevant dungeon loot so players find the technology in exploration, not just JEI | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the Depot is a crafted Create block, not a found artifact; seeding it in loot undermines the Create-production anchor and it doesn't fit M-34's combat-supply framing — no-motif for the exploration angle
- OK — the two core connections (Create spine + economy distribution) are sound and coherent; the existing M-08 note in the dossier needs the reframe above (REWORK flagged).

