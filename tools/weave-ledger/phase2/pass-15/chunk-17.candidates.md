# Phase 2 candidates — chunk-17

## railways   [anchors: Create, aeronautics (2)]
- REWORK: OK — connections sound. Create (mechanical_crafting + sequenced_assembly inbound) + aeronautics/transport pillar is coherent and well-earned. No arbitrary edges visible.
- from: railways:locometal blocks (deco stock) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scrapped locometal shell runs back through the crusher for salvaged iron/copper — the railway industry recycles itself
- from: railways:conductor_cap / conductor entity (remote toolbox carrier) | via: recipe (crafting) | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: the conductor is a logic entity, not a luxury good; forcing it into a coin-sale is arbitrary — no sensible "a player sells a conductor" story
- from: railways track/signal infrastructure | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: railways adds no dungeon/structure loot tables; it's a construction mod, not a loot-bearing one — loot-seed delivery doesn't apply here

## fusion   [anchors: support/client-library (1)]
- LEAVE — zero-content rendering library; 0 items, 0 blocks, loot=no. No material surface to weave.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — vanilla recipe enabler only; 0 items, 0 blocks, loot=no. No content surface to weave; the bundle itself is a vanilla item and any economy/create weave would belong to vanilla or the leather/string suppliers, not this mod.

## rolling_down_in_the_deep   [anchors: support/client (1)]
- LEAVE — clientside camera/movement mod; 0 items, 0 blocks, loot=no. No material graph whatsoever.

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / naturalist:bushmeat (cooked) | via: numismatics sell (trade listing) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a butcher-level trade good — venison sells for coin at market, making wildlife hunting worth the effort beyond mere calories
- from: naturalist:antler | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a shed antler carries natural spiritual resonance; imbued into a nature-attuned arcane focus component — a deer-hunt payoff that feeds the magic bench
- from: naturalist:glow_goop (firefly drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: distilled bioluminescence transmutes in spirit flame into a minor illumination essence — firefly hunting has a ritual payoff
- from: naturalist:shellstone / naturalist:froglass blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco stone and glass blocks crush back to sand/gravel + an XP nugget — the coastal deco set feeds the recycling loop
- from: naturalist:antler | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: antler-to-bone-meal via milling is mechanically fine but redundant if M-10 already earmarks antler for magic imbuement; double-spending the same low-volume drop is better avoided — dedicate antler to magic, keep milling for food crops
- from: naturalist:bushmeat (raw) | via: farmersdelight:cutting | to: survival (deeper food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw boar bushmeat on the cutting board yields strip cuts and lard, extending the food-processing web with wild-game butchery

## biolith   [anchors: support/worldgen-library (1)]
- LEAVE — worldgen API with 0 items, 0 blocks, loot=no. Pure plumbing; no material surface to weave.

## modernfix   [anchors: support/performance (1)]
- LEAVE — JVM/loader performance patches; 0 items, 0 blocks, loot=no. No content surface.

## accessories   [anchors: support/API (1)]
- LEAVE — slot-framework API; 0 items, 0 blocks, loot=no. Wearables live in the mods that register into it, not here.

## endrem   [anchors: survival/progression (1)]
- from: endrem:undead_eye | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual over undead remains and wither-bone fragments summons the undead eye — stuck players get a costly magic craft path rather than a pure RNG dead-end
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the arcane eye can be assembled at the enchanting apparatus from source gems + a chorus flower; the magic pillar earns a hand in opening the End
- from: endrem:corrupted_eye | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a corrupted essence transmuted through spirit fire from ender-themed drops (chorus fruit + dark matter) — corruption is thematically at home in the occult flame
- from: endrem (loot=yes, eyes seeded into structure chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards can pay coin for rare eyes turned in — exploration and boss-hunting pay literal dividends, bridging the End gate into the economy pillar
- from: endrem:nether_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: End-access is deliberately exploration-gated; making even one eye assembler-craftable risks trivializing the gate for a well-equipped Create specialist — the magic-ritual routes (M-11/M-10) already provide a safety valve without bypassing exploration intent; keep Create out of portal gating

## spawn   [anchors: survival (1)]
- from: spawn:clam (caught via casting_net_clam) | via: numismatics sell (trade listing) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: colorful clam shells and pearls command a steady coin price — maritime gathering has an economic payoff alongside the food use
- from: spawn:crab (cooked crab / crab boil) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: crab boil sells as a luxury coastal dish; harvesting an Ant Garden / Seagrass Meadow biome turns food into coin
- from: spawn:angler_fish | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: an anglerfish lantern-organ passed through Create's haunting (soul-fire) yields a soul-infused lure — the deep-sea predator's light bleeds into the occult spine
- from: spawn:date_log / date_planks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: date-palm deco blocks crush back to sawdust/sticks + XP nugget — the new wood set joins the Create recycling loop
- from: spawn:ant_pupa | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: ant pupa as a magic reagent is thematically strained — the magical/arcane lens doesn't map to insect larvae without forcing a connection; no sensible player "of course" moment
- from: spawn seafood drops (clam, crab, angler_fish) | via: create:milling or farmersdelight:cutting | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw seafood through the mill or cutting board yields fish meal, fish oil, and shells for deeper food-processing chains and Create fluid mixing

== CHUNK COMPLETE ==
