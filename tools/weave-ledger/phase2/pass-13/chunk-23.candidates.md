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







