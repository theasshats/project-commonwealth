# Phase 2 candidates — chunk-13

## sounds   [anchors: support/client-audio (1)]
- LEAVE — pure client SFX overhaul; 0 items/blocks/loot, no recipe methods. Zero content surface; nothing to weave.

## lithium   [anchors: support/performance (1)]
- LEAVE — server/world-tick optimizer only; 0 items/blocks/loot, no methods. Genuine zero-surface perf library; nothing to weave.

## ribbits   [anchors: survival (1)]
- from: ribbits:ribbit_merchant trade (Amethyst Shard sink) | via: M-08 coin-mint path — regional Amethyst (swamp-biome access) → Create-crushed → Numismatics coin; Ribbit merchants are a regional demand node for the scarce crystal, making swamp settlement economically meaningful | to: economy | motif: M-08 | power: mid | tone: ok — frog-folk "shard coin" economy integrating with the player trade layer reads coherently; player nods at "the Ribbits run a shard trade I can plug into" | verdict: ACCEPT | hook: Ribbit merchants accept Amethyst Shards — that's already the regional coin feedstock; settling swamp-adjacent gives you a shard-demand outlet that feeds the mint
- from: ribbits:toadstool / mossy_oak_planks blocks | via: create:crushing (M-04 deco recycle) | to: create | motif: M-04 | power: everyday | tone: ok mechanically | verdict: REJECT | reason: M-04 applies to any woodset universally — this adds nothing qualitatively specific to ribbits; the edge is generic, not a meaningful weave for the mod. Weak/arbitrary.
- from: ribbits:ribbit_sorcerer (mob) | via: loot-seed — seed a swamp-magic essence drop onto the sorcerer that Ars Nouveau imbuement can consume | to: magic | motif: M-02 | power: mid | tone: ok — frog sorcerer emitting a swamp arcane reagent fits Ars Nouveau's wild-creature magic vibe | verdict: ACCEPT | hook: the Ribbit sorcerer drops a swamp essence that becomes an imbuement catalyst — frog magic is real magic

## edf-remastered-5.0-beta4   [anchors: survival/boss-difficulty (1)]
- LEAVE — pure Ender Dragon behavioral overhaul (more HP, phases, AI). loot=yes in manifest but the dossier confirms it adds NO new drops or rewards; vanilla dragon loot is unchanged. No new material surface exists; a loot-seed would be inventing content this mod doesn't provide. The mod earns its place as danger-pressure amplification — that's its anchor and it needs no weave.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client model/animation replacement only; 0 items/blocks/loot, no methods. Zero content surface; nothing to weave.

## tacz   [anchors: support (1)]
- from: tacz gun/ammo recipes (gun_smith_table_crafting inputs) | via: recipe — gate gun bodies + ammo cartridges behind Create-pressed iron sheets, brass casings, and precision-mechanism parts (M-05 native-method gating; high-tier guns via M-06 sequenced-assembly chain) | to: create | motif: M-05 | power: mid (basic guns) / endgame (elite rifles via sequenced assembly) | tone: ok — industrial Create forge producing firearms is internally consistent; PvPvE pack arms production off the Create spine fits the design perfectly | verdict: ACCEPT | hook: the gun_smith_table runs on Create-pressed metal; ore scarcity gates your firepower
- from: tacz:ammo (consumable) | via: combat-route supply — ammo is spent every engagement; an arms-maker specialist (who mastered Create-gated gun production) supplies others who can't or won't climb that chain (M-34 combat-route supply) | to: economy | motif: M-34 | power: mid-to-endgame (ongoing ammo burn) | tone: ok — PvPvE arms market is natural; the distinction from M-09 is that this is a specialist-to-non-specialist supply trade, not a bare sell link | verdict: ACCEPT | hook: the arms maker feeds the fighters who feed the market — nobody has to fight AND forge
- from: tacz weapons on aeronautics vehicles | via: no implementing method (TACZ↔Aeronautics native integration absent; aeronauticscompat covers other turret mods, not TACZ) | to: aeronautics | motif: no-motif | power: n/a | tone: clash (speculation only) | verdict: REJECT | reason: no implementing method exists; this is flavour with no route

## ctl   [anchors: create, aeronautics (2)]
OK — connections sound. sequenced_assembly inbound (Create) is solid; aeronautics anchor is the mod's core purpose. No rework needed.
- LEAVE — no coherent 3rd anchor; train-lamp blocks don't connect to magic/survival/economy without forcing. The mod is well-placed at 2.

## minecolonies   [anchors: survival, create (2)]
OK — connections sound. M-05 (quarries on Create parts) is correct and load-bearing; survival (settlement/food) is the right primary anchor. Existing connections: no rework needed.
- from: MineColonies colony worker system (basics cheaper + colony exclusives) | via: MineColonies huts/requests/research (M-28 colony route) | to: economy | motif: M-28 | power: mid-to-endgame (colony research depth) | tone: ok — the colony IS the cheaper-basics + locked-exclusives route that makes trade necessary; this formalizes that role as an economy anchor | verdict: ACCEPT | hook: a colony player produces basics cheaper and holds exclusive outputs nobody else can make — the trade loop depends on them
- from: MineColonies Alchemist / Mystical Site huts | via: MineColonies colony route → magic production (M-28) | to: magic | motif: M-28 | power: mid (hut-level gated) | tone: ok — SYSTEMS.md §3 explicitly names the colony as a route "across both tech *and* magic"; the Alchemist hut producing magic reagents is the colony's magic arm | verdict: ACCEPT | hook: you don't need to master Ars Nouveau yourself — commission the colony's alchemist and buy what you need
