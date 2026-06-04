# Phase 2 candidates — chunk-23

## mru   [anchors: support/library (1)]
LEAVE — pure code-sharing library (mru); zero player-facing items, blocks, or methods. No material surface to weave through any method.

## lithium   [anchors: support/performance (1)]
LEAVE — server-tick/AI optimization mod; registers no items, blocks, or recipe-types. Nothing to route through any method; its value is entirely under-the-hood MSPT reduction.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolition grinder reduces an unwanted iron door back to scrap — sensible workshop recycle, lossy
- from: mcwdoors metal door variants | via: create:mechanical_crafting | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the existing vanilla crafting table path is light and adequate; routing door assembly through mechanical_crafting adds cost without proportional reward — M-20 is for upgrade/application steps, not basic fabrication; power-tier mismatch
- from: mcwdoors any door variant | via: numismatics sale | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: doors are infrastructure/building-block commodities, not luxury goods; the M-09 hook needs high-effort consumables — a door does not clear the bar; no player would pay a premium coin price for a plank door

## oceansdelight   [anchors: survival/food (1)]
- from: oceansdelight:fugu_slice / oceansdelight:elder_guardian_roll | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a coastal cook charges premium coin for exotic seafood — fugu is a risky delicacy, elder guardian roll requires killing a raid boss; inland players pay, coast specialists supply
- from: oceansdelight:cut_tentacles / oceansdelight:guardian (raw drop) | via: create:cutting (farmersdelight:cutting already used; create:cutting extends) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing raw ocean-mob flesh through a Create fan-cutter (or supplementary FD cutting step) produces a sellable intermediate (pressed squid ink, sliced tentacle rings) that feeds the food processing chain into a finished good — the processing chain is the natural home for bulk seafood
- from: oceansdelight:cooked_stuffed_squid | via: extradelight:vat (brine/salt liquid step) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: plausible flavor but extradelight:vat is not confirmed to produce a useful *intermediate* here — the output is a finished food, not a feedstock for another mod; adding an extra step to an already-cooked dish makes cooking *harder* without giving a 2nd pillar payoff; depth without purpose

## dragonlib   [anchors: support/library (1)]
LEAVE — developer framework/API library (MrJulsen's); the lone dragonlib:dragon block is a dev artifact with no gameplay role. Zero items, methods, or material surface to route through anything.

## sable   [anchors: support/physics-backend (1)]
LEAVE — Rapier/sub-level physics engine; no items, blocks, or recipe-types registered. The weaving surface lives entirely in the dependent mods (Create Aeronautics etc.) that build on top of sable — any weave is recorded against those mods, not here.

## openpartiesandclaims   [anchors: support/server-protection (1)]
LEAVE — chunk-claim + party server-protection framework; zero items, blocks, or methods. No material surface; the mod's function is social/territorial scaffolding, not gameplay content.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted wood furniture (chairs, tables, shelves, cupboards) | via: create:cutting (wood-cutting step on planks → furniture piece) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding planks through a Create sawblade produces the finished chair stock — wood-cutting IS what Create does with wood; furniture production becomes a small automated chain rather than a pure crafting-table craft
- from: handcrafted metal/stone trim pieces (andesite_corner_trim, etc.) | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone/metal trim shapes need pressing from raw slabs — small one-step Create tie that makes the stonecutting-side of the furniture set consistent with Create's sheet-metal workflow
- from: handcrafted finished furniture sets (e.g. oak dining set: table + 4 chairs + shelf) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: individual furniture items are everyday construction blocks not luxury consumables; a "furniture set" as a bundled trade good is thematically interesting but there's no mechanic to bundle and sell a set as one item — would require authoring a custom bundle item that doesn't exist; no-motif for the bundle form, and per-piece sales are too cheap to be M-09 luxury goods
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking or extradelight:mixing_bowl | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the jam jar is a consumable/condiment — routing it as an ingredient in a FD or ExtraDelight recipe (e.g. jam toast, filled pastry) ties the furniture mod's food prop into the cooking chain; a jam jar on a shelf that can also be eaten is exactly the cozy homestead fantasy both mods share

## naturalist   [anchors: survival/food (1)]
- from: naturalist:venison / naturalist:bushmeat | via: farmersdelight:cutting + farmersdelight:cooking | to: survival (deepens existing pillar via processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw venison through a cutting board → venison steak/strips/stew; the FD processing chain is the natural home for wild game meat and gives Naturalist's fauna a culinary identity beyond "just a food drop"
- from: naturalist:cooked venison / naturalist:cooked_bushmeat | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: game hunters sell premium wild-game cuts to colonist markets — venison is a huntable luxury that can't be farmed like chicken; creates a specialization niche for a wilderness-scout player
- from: naturalist:antler | via: ars_nouveau:enchanting_apparatus or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a deer antler is a classic arcane component (bone-like, naturally shed, symbolically lunar); routing it as a catalyst or spirit-transmutation input in Ars or Occultism gives Naturalist's most unique drop a meaningful second home beyond a craft ingredient
- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: firefly bioluminescence refined into a glowing arcane reagent — a light-magic attunement input; thematically the strongest Naturalist→magic route (glow_goop is unique, rare, and visually magical)
- from: naturalist:shellstone / froglass | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: shellstone is a vanilla-style deco stone; crushing it back to gravel/sand is technically M-04 but adds very little — the deco blocks have no elevated craft cost and the recycle gives back nothing interesting; the forced edge earns a weak 2nd pillar at trivial cost, which is exactly the pattern the briefing warns against for M-04; skip unless the deco-family wholesale pass covers all stone variants
- from: naturalist:antler | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling an antler to bone meal is mechanically possible (M-12 processing chain) but antler-as-bone-meal is a step down from its more interesting reagent use (M-02/M-10 above); using up the mod's best drop on a bulk-commodity output dilutes specialization pressure — the M-02 magic reagent route is strictly better

## edf-remastered-5.0-beta4   [anchors: survival/endgame-boss (1)]
LEAVE — pure behavior datapack that raises the Ender Dragon's difficulty (HP, phases, minions); adds no items, blocks, or drop-table entries. There is no material surface to route through any method. Any boss-key (M-15) weave must be authored against the vanilla dragon drop (dragon egg / elytra) or another mod's drop — not against this mod, which produces nothing new.

== CHUNK COMPLETE ==









