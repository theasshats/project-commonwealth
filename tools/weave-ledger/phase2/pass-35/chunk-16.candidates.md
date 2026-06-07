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

## minecolonies_compatibility   [anchors: survival, create (2)]
- OK — connections sound: the bridge mod's two anchors are structural (colony workers ↔ Create Stock Link logistics + colony farming/jobs). The whole mod IS a weave between MineColonies and the Create/IE/storage spine; its anchors emerge organically from its function.
- from: minecolonies_compatibility:tacz_dummy_gun (TaCZ-Gunner job bridge) | via: M-28 colony route — the Gunner hut produces combat-ready ammunition/weapons through the colony route, making the colony the cheap-basics path for ammo supply (a fighter-player can source ammo from a colony specialist instead of crafting everything themselves) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony Gunner hut churns out basic TaCZ ammo cheaper than solo crafting; the fighter buys rather than grinds
- from: minecolonies_compatibility (Butcher job rendering carcasses) | via: farmersdelight:cutting — the Butcher hut outputs Farmer's Delight cuts (chops, raw meats) as colony production, feeding the diet-variety pressure loop directly | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: diet pressure (protein group) sourced from a colony butcher; the food specialist doesn't need to personally run every kill
- from: minecolonies_compatibility (Create Stock Link courier) | via: M-33 service-for-hire — the Courier job provides inter-player logistics labor (moves goods from one colony's stock to another player's belt or chest), a player-to-player transport service priced by the colony operator | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony player rents courier runs to non-colony players who need bulk transfers — logistics as a sellable colony service
- from: minecolonies_compatibility (Orchardist/modded-crop farming) | via: M-16 seasonal reagent — the Orchardist grows season-gated modded crops (e.g. apples in Serene Seasons fall, berries in summer); the colony becomes the reliable year-round seasonal crop supplier by automating what solo farming can't maintain through winter | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony Orchardist buffers seasonal scarcity — in winter it draws from stockpile rather than field, making the colony the survival anchor for off-season foods

## revelationary   [anchors: support (1)]
- LEAVE — pure progression-gating library/API; zero player-facing items, no methods, no content surface. Its mechanic (hide blocks until an advancement fires) is enabler infrastructure for other mods (e.g. Occultism otherworld blocks); the weave lives in those mods' dossiers, not here.

