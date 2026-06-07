# Phase 2 candidates — chunk-07

## ferritecore   [anchors: support/perf (1)]
- LEAVE — zero-surface performance library; no items, no methods, no loot tables. No content to route through any method; sanctioned support anchor requires no weave.

## vinery   [anchors: survival (1)]
- from: grapes / apples | via: create:milling or create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mechanical mill pre-crushes fruit → vinery fermentation barrel finishes the wine; real wineries do exactly this; Create becomes an upstream stage in the wine chain
- from: apple_mash / grape_mash (press byproduct) | via: minecolonies:composting | to: survival/economy | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: fruit-pressing waste composted into colony farm inputs closes a loop — vineyard waste feeds colony fields
- from: aged wine (20-day matured) | via: vinery aging mechanic → aeronautics transport | to: aeronautics | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: wine that took weeks to mature is worth shipping by airship; the vineyard becomes a luxury exporter whose stock is time-locked and high-value
- from: wine as bare sellable | via: — | to: economy | motif: M-09 (retired) | power: mid | tone: — | verdict: REJECT | reason: M-09 retired; "wines are sellable" is the ambient endpoint, not a weave; use M-35 aging + M-31 logistics framing instead
- from: wine consumption | via: — | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 ambient use — wine is always consumed as a survival food/drink; this is the loop's background function, not a weave candidate (demand is already implicit)
- REWORK: dossier 2nd-anchor candidate lists M-09 (economy via Numismatics luxury-good sell) — M-09 is retired; replace with M-35 (aging specialist) + M-12 (Create processing upstream stage); those two give vinery Create + aeronautics without a bare sell link.
- OK — survival anchor is sound.

## s_a_b   [anchors: Create, aeronautics (2)]
- from: hardsteelblock / doublesteelblock | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard steel armor panels are required ingredients for higher-tier Aeronautics hull/frame blocks — the armored-hull supply chain now demands a Create steel specialist
- from: hardsteelblock | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a hardened steel armor panel is forged in stages (compacted steel → plate → pressed faces → sequenced weld) making it a flagship multi-step build, not a single craft
- from: colored steelblock (16 variants) | via: bare deco use | to: — | motif: no-motif | power: everyday | tone: — | verdict: REJECT | reason: color variants are deco fills; no method wants colored steel blocks specifically; forcing a weave edge on deco variants is a defect
- REWORK: aeronautics anchor is currently thematic (players *may* use these blocks on ships) rather than mechanically gated; M-23 would harden it to load-bearing — flag for Phase 3 to gate a hull recipe on s_a_b hard steel blocks so the anchor is enforced, not aspirational.
- OK — Create anchor (compacting/mixing inbound) is mechanically sound.

## underground_village   [anchors: survival (1)]
- from: underground village chests (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: buried Stoneholm chests yield rare magic reagents (Ars source gems, Occultism ritual fragments) — underground explorers find starting catalysts, not just vanilla loot
- from: Stoneholm villager trades | via: loot-seed / trade-table edit | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm merchants offer colony-exclusive goods only accessible via MineColonies production, seating underground villages as economy waypoints that reward regional exploration over self-sufficiency
- from: underground village as economy node | via: M-09 (retired) Numismatics sell | to: economy | motif: M-09 (retired) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare "villagers sell things for coin" is an NPC coin faucet (M-21 cut too); redirect to M-33 service framing (villagers require specific goods to trade, not just give coin)
- REWORK: dossier 2nd-anchor candidate cites M-09 (Numismatics trade = NPC faucet) — retired; replace with M-02 loot-seed + M-33 service-for-hire (villagers need goods, don't hand out coin).

## particlerain   [anchors: support/client-atmosphere (1)]
- LEAVE — client-side rendering mod; zero items, no methods, no loot tables. Visual weather particles only; nothing to route through any method. Sanctioned support anchor (atmosphere) requires no weave.

## bookshelf   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (Darkhax utility framework); no items, no methods, no loot tables. Sanctioned support anchor; no weave possible or needed.

## sound_physics_remastered   [anchors: support/client-immersion (1)]
- LEAVE — client-only audio simulation; zero items, no methods, no loot tables. Nothing to route through any method; sanctioned support anchor requires no weave.

## kubejs_create   [anchors: support/modpack-tooling (1)]
- LEAVE — scripting bridge exposing Create's recipe-types to KubeJS scripts; it is the tool that *builds* weaves, not a weave target itself. Zero items, no in-game methods, no loot tables. Sanctioned support anchor requires no weave.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen overhaul; zero items, zero blocks, no registered methods. Its real loop contribution is as the geographic substrate that makes GTMOGS regional ore scarcity *spatially legible* (biomes give regions distinct identities). That is an indirect M-30-adjacency but the weave belongs to GTMOGS, not Terralith. No method edge to author here; reaching for a loot-seed would hit vanilla loot tables (not Terralith's). The dossier's assessment is sound.

## mru   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code-sharing library; no items, no methods, no loot tables. Sanctioned support anchor; no weave possible or needed.

## fogoverrides   [anchors: support/client-QoL (1)]
- LEAVE — client-side config-only fog visual tuning; zero items, no methods, no loot tables. Sanctioned atmosphere support anchor; nothing to route through any method.

## betteroceanmonuments   [anchors: survival (1)]
- from: Elder Guardian (boss of the overhauled monument) | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Elder Guardian drops a unique aquatic component (seeded via loot-table injection) that gates a mid/endgame Create fluid-processing recipe — monuments become a combat prerequisite for the water-industry tech branch
- from: expanded monument chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: deep-sea vault chests yield rare magic reagents (Ars source shards, Occultism ritual materials), making the overhauled monument a magic-progression waypoint for underwater explorers
- from: monument chests as bare loot | via: — | to: — | motif: no-motif | power: — | tone: — | verdict: REJECT | reason: vanilla loot enrichment alone (better swords, books) is not a weave — the weave must connect to a loop system; M-15 and M-02 loot-seeds are the right forms
- REWORK: dossier says "leave — defer" for a loot-bearing structure mod; this contradicts Phase 2 briefing which explicitly prohibits LEAVE on loot=yes mods; correct to loot-seed candidates M-15 + M-02.

## sparsestructures   [anchors: support/QoL-worldgen-tuning (1)]
- LEAVE — config-only worldgen density multiplier; zero items, zero methods, no loot tables. It makes structures rarer (which *supports* the scarcity pressure loop by making discoveries more meaningful) but has no content surface to weave through any method. Sanctioned support anchor; no weave needed.

## blockui   [anchors: support/library-UI-API (1)]
- LEAVE — genuine zero-content UI framework library (LDTTeam); no items, no methods, no loot. Hard dependency of MineColonies whose weave belongs to MineColonies. Sanctioned support anchor; no weave needed.
