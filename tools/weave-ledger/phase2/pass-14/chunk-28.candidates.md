# Phase 2 candidates — chunk-28

## underground_village   [anchors: survival (1)]
- from: Stoneholm villager trades | via: trade (villager restock/economy node) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional) | hook: underground settlements become trade hubs — players descend to barter for scarce goods or sell processed coin-minted materials; the physical location adds risk/reward and makes the economy geography-anchored. via: loot-seed / trade config
- from: Stoneholm chest loot | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed a modest coin drop (numismatics cog / spur) into Stoneholm chest loot tables so finding an underground village immediately connects to the currency layer — exploration pays in the same unit as trade
- REWORK: current anchor is survival/exploration only; trade-seating delivers a tangible economy pillar without forcing fabrication; M-21 is provisional but a trade-config delivery (retuning existing villager profession pool) is lower-risk than authoring new trades from scratch — flag for Gate-2 review on M-21 scope.

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content client behavior library (no items, no blocks, no loot tables, no world interaction); weaving is impossible.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client camera/movement rework, zero items/blocks/loot; the flight theme touches elytra, not Create Aeronautics ships, so even a thematic aeronautics label is a stretch with nothing to route.

## solonion   [anchors: survival (1)]
- from: solonion:golden_lunchbox | via: recipe → create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the best food-carry item requiring a Create-fabricated component (e.g. a precision mechanism or a brass casing inset) makes tech investment pay off at the survival layer — the food-diversity incentive and the Create tech-tree become co-dependent
- from: solonion:lunchbox→golden_lunchbox upgrade | via: recipe → create:deploying (M-20 light upgrade) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: M-20 is the light single-step sibling of M-06; deploying a lunchbox upgrade is thematically awkward (deploying stamping a food container doesn't read naturally); M-05 mechanical_crafting is a cleaner fit — keep that, drop this
- from: food-diversity milestone benefit | via: config tie | to: magic | motif: no-motif | verdict: REJECT | reason: no motif covers diversity-score unlocking magic ability; a purely config-level cross-mod hook has no authored seam and no method routing — REJECT-for-review

## lionfishapi   [anchors: support/library (1)]
- LEAVE — confirmed zero-content animation/rendering API; registers no items, no loot, no blocks; nothing to route. Required dependency only.

## mcwwindows   [anchors: support/decoration (1)]
- from: stone/brick window/parapet variants (e.g. mcwwindows:andesite_parapet, blackstone_brick_arrow_slit) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: decoration blocks that wear out or get overbuilt crush back to gravel + an XP nugget — fits the lossy recycle motif and makes the huge deco palette feel less disposable; standard deco-family pass candidate
- from: mcwwindows:*_mosaic_glass variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushing to sand is already the vanilla/Create expectation; adding 100+ glass variants as explicit recipes would bloat the recipe graph without meaningfully raising connectivity — one representative tag-based recipe would cover it but only if a future deco-family pass addresses glass uniformly; defer to that pass

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — data-driven guidebook framework with no material surface beyond flavor books. The 6 items are book variants (no crafting method registered, no loot); nothing coherent to route through a method. Forced weaving would be a defect.

## sky_whale_ship   [anchors: survival (1)]
- from: sky whale loot chests | via: loot-seed | to: aeronautics | motif: M-15 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: sky whales drift above the clouds — players build or crew an Aeronautics airship to reach and board them; seeding a Create Aeronautics progression component (e.g. a structural blueprint fragment or rare alloy) into whale-back loot makes the airship the natural tool for the job, not just a fun coincidence. The boss-key framing (M-15) is soft here — treat it as a loot-seed that ties the exploration payoff to the aeronautics pillar. via: loot-seed
- from: sky whale loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a premium coin (numismatics crown / sun) or a rare sell-good into whale loot makes sky whales an economy event — the flight investment pays back in the currency layer; aligns M-08 (processed scarcity → coin) loosely via the scarcity of access (aerial travel barrier). via: loot-seed
- from: sky whale loot — wandering-trader link | via: trade | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: sky whales don't host vanilla villager professions; adding a wandering-trader seam is two layers of indirection (whale loot → trader) and M-21 is provisional/leans-no; the direct loot-seed to economy above is cleaner

## ferritecore   [anchors: support/perf (1)]
- LEAVE — pure runtime memory optimization; zero items, blocks, loot, or world interaction. Genuine zero-content infrastructure mod.

## modelfix   [anchors: support/perf-bugfix (1)]
- LEAVE — client-side rendering patch only; zero items, blocks, loot. Genuine zero-content fix mod.

== CHUNK COMPLETE ==
