# Phase 2 candidates — chunk-31

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, melon_cocktail, honey_cocktail, etc.) | via: numismatics sell / M-09 | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A beach-side bar stocking cocktails feels like a natural trade good a wandering merchant would pay coin for; luxury drink → coin sell is the M-09 pattern exactly.
- from: beachparty:coconut (raw material) | via: create:milling or farmersdelight:cutting → coconut milk / shredded coconut as a cooking intermediate | to: Create / survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A mill crushing a coconut into coconut milk/shredded coconut that feeds a Farmer's Delight or ExtraDelight cooking chain is the processing-chain pull (M-12) — coconut is a distinctive ingredient the tropical-food web wants.
- from: mini_fridge bulk-ice output | via: feed into create:mixing cold-process recipes as an ice input | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The Mini Fridge is not a Create machine, and routing "ice from fridge → Create mixing" is just "ice → Create mixing", which doesn't distinguish beachparty at all; ice is vanilla. Thin/arbitrary connection — doesn't survive red-team.
- from: beachparty:mussel_meat / cooked_mussel_meat | via: farmersdelight:cooking → a seafood dish (chowder etc.) | to: survival (food web broadening) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: This is intra-survival (food → more food); doesn't add a second pillar. Worth noting as a food-web texture addition but not a pillar-crossing weave.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — pure behavior mod (single-slab break interaction); registers 0 blocks, 0 items, no loot tables; no material surface to route.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic cooked fish (cooked_pike / cooked_perch / cooked_lionfish) | via: farmersdelight:cooking → seafood dishes (fish stew, chowder, poke bowl) | to: survival (food web depth) + economy via M-09 sell | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Upgrade Aquatic adds distinct named fish — routing them through Farmer's Delight cutting/cooking produces named aquatic dishes that feel like specialization rewards and can be sold for coin.
- from: upgrade_aquatic cooked fish dishes (post M-12) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cooked regional fish → sellable luxury food exactly matches M-09 (high-effort consumable → coin); a fisher specialization route.
- from: upgrade_aquatic:thrasher / hostile aquatic mob drops | via: loot-seed into thrasher/aquatic-mob loot table — add coin or magic reagent drop | to: economy or magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A dangerous aquatic predator rewarding coin or a reagent on kill gives combat/exploration a tangible economy hook; thrasher drops are currently isolated — seeding a Numismatics coin or Ars Nouveau reagent makes it meaningful.
- from: upgrade_aquatic coralstone family | via: create:crushing → gravel + coral dust byproduct (lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Coralstone is a deco block; crushing it back to gravel is a weak connection — coral-palette deco being recycled has thin thematic rationale and is a stretch of M-04 which is intended for metal/stone deco blocks, not organic coral. Low value.
- REWORK: driftwood/riverwood → woodworks:sawmill (already in made-by methods). This is a thin one-step deco-output weave without a second-pillar outcome; it doesn't pull upgrade_aquatic into a second pillar. Consider pairing it with Create:cutting as a stronger M-12 chain or leaving it as texture rather than calling it a weave.

## byzantine   [anchors: survival/MineColonies (1)]
- LEAVE — pure schematic/style data pack for MineColonies (0 blocks, 0 items, 0 loot tables). Its only "weave" is being a MineColonies content set; there is no independent material surface to route through another pillar's method.

## crash_assistant   [anchors: support/client utility (1)]
- LEAVE — pure client diagnostic utility (0 blocks, 0 items, 0 loot, no materials). Coremod behavior only; no game-content surface.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — networking/privacy utility (0 blocks, 0 items, no materials). No game-content surface; nothing to weave.

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation library API (0 blocks, 0 items, no materials, no loot). Dependency of animation-using mods; no game-content surface of its own.

## emojitype   [anchors: support/client UI (1)]
- LEAVE — client text-input helper (0 blocks, 0 items, no materials). Chat cosmetic; nothing to weave.

## woodworks   [anchors: survival/decoration (1)]
- from: woodworks wood-deco blocks (boards, bookshelves, chests) | via: create:crushing → plank/sawdust + experience_nugget byproduct (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wood deco that can be recycled through Create's crusher for planks/sawdust is textbook M-04 (deco → Create recycle); makes the wood-deco palette part of the Create resource loop.
- from: woodworks:*_beehive variants | via: config tie — Woodworks beehives are crafted per wood-type; a Create-Addition honey-extraction or vinery fermenting step (honey → wine/mead input) threads the beehive output into the fermentation economy | to: economy/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Woodworks typed beehives produce honey by wood-type flavor; routing honey through vinery:apple_mashing or extradelight for mead/drink production that then sells as M-09 chains beehives into the drink-economy web — two steps that feel natural.
- from: woodworks wood-deco | via: create:cutting (sawmill unification — route woodworks sawmill outputs through create:cutting to read as one wood-processing web) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Unifying two saw methods (woodworks:sawmill and create:cutting) is a recipe-duplication convenience, not a pillar-crossing weave. It doesn't give woodworks a second pillar — both endpoints are the same survival/deco space. Low value as a weave (keep as a recipe-cleanup note, not a motif candidate).
- REWORK: No existing cross-pillar connections yet (1-pillar mod). The M-04 crushing candidate above is the primary path.

## create_hypertube   [anchors: Create, aeronautics/logistics (2)]
- OK — connections sound. Already anchors Create (crafted via create:sequenced_assembly, kinetic power) and aeronautics/logistics (fast player/entity transit alongside trains/airships). Both pillars are coherent and well-earned.
- from: create_hypertube tube network | via: M-23/M-24 framing — Hypertube Entrance could require a machined aluminum/brass structural part (M-23 light), tying airframe material into the tube network and deepening the aeronautics-logistics supply chain | to: aeronautics (deeper) | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: The mod already has 2 pillars and create:sequenced_assembly already gates it behind Create fabrication. Adding M-23 structural material gating on top would be punishing for a transit-QoL block that should stay accessible once players have Create brass. Depth is already right.

== CHUNK COMPLETE ==
