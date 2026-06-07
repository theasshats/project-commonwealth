# Phase 2 candidates — chunk-05 (pass-23, blind)

## bakery   [anchors: survival (1)]
- from: bakery cakes/tarts/jams (finished baked goods) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a baker sells high-effort cakes and tarts for coin — the dessert tier of the food economy
- from: bakery wheat→flour step | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill wheat to flour on Create power as an alternative to the hand crafting_bowl, tying the bake chain to the spine
- from: bakery cakes/jams as MineColonies food supply | via: minecolonies food stocking | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: colony cooks and restaurants stock baked goods — a non-currency demand sink that still distributes value
- from: bakery surplus crops/baked goods as Ars Source feedstock | via: ars_nouveau imbuement/sourcelink | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: cakes-as-mana-fuel is arbitrary and better owned by raw-crop farm mods; tone clash (dessert ≠ reagent), and risks gating cheap Source behind food

## durabilitytooltip   [anchors: support/client UI (1)]
- LEAVE — pure client tooltip UI; 0 blocks/items, no methods, no material surface to route. Genuine zero-content support mod.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit ginger (c:crops/ginger) | via: create:milling / farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill/cut ginger into a spice ingredient so it joins the food-processing web instead of being a self-contained crop
- from: snowyspirit ginger as a Serene Seasons winter-gated crop | via: season-gated input → cooking method | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger as a cold-season specialty crop feeding seasonal recipes — leans into the seasons lever the pack wants more of
- from: snowyspirit gingerbread/candy/gumdrop deco as seasonal trade goods | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: candy/gingerbread are cheap decorative novelties, not high-effort luxuries; selling them undercuts the M-09 "high-effort consumable" rule (basics-as-coin)
- from: snowyspirit sled | via: aeronautics ship traversal | to: aeronautics | motif: (none) | power: everyday | tone: clash | verdict: REJECT | reason: no-motif; a snow sled has no mechanical tie to Create Aeronautics physics ships — only a loose "winter transport" word-overlap, a forced edge

## createfood   [anchors: survival, create (2)]
- from: createfood finished dishes (pizzas/cakes/pies) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cook mints coin from elaborate Create-processed dishes — the archetypal high-effort sell-good
- from: createfood dishes as bounty objectives | via: bountiful board reward | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards request prepared meals and pay coin, turning the kitchen's surplus into demand
- REWORK: none — existing survival+Create anchors are jar-grounded (recipes ride create:* + farmersdelight:* types). OK — connections sound.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds chest loot tables | via: loot-seed (datapack) → numismatics coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a richer stronghold delve can drop a stash of pack currency, tying exploration into the economy faucet
- from: betterstrongholds chest loot tables | via: loot-seed → magic reagent / boss-key | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed magic reagents (e.g. attunement shards) into deep stronghold loot so exploration feeds the magic producer
- from: betterstrongholds loot | via: loot-seed → progression key | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: strongholds are mid-tier vanilla-plus exploration, not boss content; gating a complex Create recipe behind a stronghold key over-costs an everyday dungeon (use a boss, not this)

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts brass/copper window+step variants | via: create:pressing (pressed sheets as inputs) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: train fittings cost pressed brass/copper sheets, making the deco explicitly Create-fabricated rather than raw-metal crafted
- from: create_train_parts steps/slides/windows as ship-cabin fittings | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: everyday | tone: clash | verdict: REJECT | reason: these are train-furniture (boarding/window deco), not propulsion/control or structural airframe parts; routing them as M-24 drivetrain is a mis-fit, and they already anchor transport-side

## create_cheese   [anchors: create, survival (2)]
- from: create_cheese aged cheeses | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: matured cheese, gated behind the cellar wait, is the textbook luxury sell-good — a fromager specialization
- from: create_cheese maturing station (tag-driven outputs) | via: create_cheese:maturing accepting foreign perishables | to: survival/create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cheese Cellar's tag-extensible outputs let other mods' perishables (wine, cured goods) age in it — a generic "age-an-item" node for the food web
- REWORK: none — Create+survival anchors are jar-grounded (maturing is its own type, curds via create:mixing/compacting). OK — connections sound.

## mutantszombies   [anchors: survival (1)]
- from: mutantszombies mob kills | via: bountiful kill-bounty → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards pay coin for clearing mutant-zombie threats, turning the raised night-threat into an economy faucet (provisional motif M-14)
- from: mutantszombies as a magic-drop source | via: loot-table seeding → occultism/ars reagent | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: loot=no — the mod registers only spawn eggs, no drops/loot tables to seed; nothing to route, forcing a drop would be authoring new content not weaving

## domum_ornamentum   [anchors: decoration palette / MineColonies support (1)]
- from: domum_ornamentum architects_cutter consuming Create/processed stone as main/support material | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: feed Create-made or pack palette blocks into the cutter to get framed/shingled variants — the build palette draws on Create's stone output
- from: domum_ornamentum framed/timber blocks as colony build-mats | via: minecolonies build requirements | to: survival/economy | motif: (none) | power: everyday | tone: ok | verdict: REJECT | reason: no-motif; DO is already MineColonies' native decoration backbone (its support anchor) — this is restating the existing tie, not a cross-system weave

## moreoverlays   [anchors: support/client QoL (1)]
- LEAVE — client HUD overlay (light/chunk/JEI-search); 0 blocks/items, no methods, no material. Genuine zero-content support mod.

## particlerain   [anchors: support/client atmosphere (1)]
- LEAVE — client weather/particle rendering only; 0 items, no methods. Thematic pairing with Serene Seasons weather is flavor, not a method edge. Zero-content support mod.

## mru   [anchors: support/library (1)]
- LEAVE — pure code-sharing library (0 blocks/items, no methods, no loot). Genuine zero-content code library.

## rechiseled   [anchors: support/decoration palette (1)]
- from: rechiseled chiseling-recipe groups | via: create Mechanical Chisel (rechiseledcreate companion) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the rechiseledcreate Mechanical Chisel runs the whole 600+ variant palette on Create power, routing decoration through the spine
- REWORK: existing single anchor is fine; the Create tie above is the natural 2nd. No weak/arbitrary existing edge to rework. OK.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine API (0 blocks/items, no methods, no content). Genuine zero-content library.

## bountiful   [anchors: economy (1)]
- from: bountiful reward payout | via: numismatics:cog/spur payout (replace default gold) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards pay the pack's real currency, making the board the early coin faucet (binds it into the economy pillar properly)
- from: bountiful kill-objective pool | via: bountiful board → coin for mob kills | to: economy/survival | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: combat bounties convert mob drops/kills into coin — the canonical combat→economy seam (provisional M-14)
- from: bountiful fetch-objective pool pointed at farm/fish/hunt + Create/magic/aeronautics goods | via: data-driven Decree objective lists | to: survival + create + magic + aeronautics | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties demand each pillar's surplus (crops, processed goods, reagents, cargo), making the board a universal demand node draining every producer
- REWORK: existing "economy" anchor is sound but currently rides the default gold payout — note M-08 repoint to numismatics is the real binding (the above ACCEPT). Not a defect, an upgrade.

## minecolonies_compatibility   [anchors: survival, create (2)]
- REWORK: none — this is itself the bridge mod; its anchors are its purpose (Courier↔Create Stock Link = create; modded-crop colony jobs = survival), jar-grounded via immersiveengineering:cloche/botanypots methods. OK — connections sound.
- from: minecolonies_compatibility Gunner (TaCZ) / Butcher jobs | via: colony job → economy goods supply | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: no-motif; colony jobs producing goods is internal MineColonies progression, not a cross-system method routing — no clean motif and the survival/Create anchors already cover the mod

## detect-afk-1.2.2   [anchors: support/server-admin (1)]
- LEAVE — server-side AFK detection behavior; 0 items/blocks, no methods, no content. Genuine zero-content utility.

## revelationary   [anchors: support/library (1)]
- LEAVE — advancement-gated visibility library (0 items/blocks, no methods). It is a hook for M-05 native-method gating when a dependent uses it, but has no content surface of its own. Zero-content library.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — worldgen structure-generation library (0 items/blocks, no loot, no methods). The dependent structure mods carry the loot; this lib has no surface. Zero-content library.

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure mixin/runtime compat patcher (0 items/blocks, no methods, no loot). REQUIRED per CLAUDE.md but nothing to weave — zero-content behavior glue.

== CHUNK COMPLETE ==
