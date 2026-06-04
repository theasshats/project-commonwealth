# Phase 2 candidates — chunk-36

## cristellib   [anchors: support/library (1)]
- LEAVE — pure code library; zero items/blocks/methods; no content surface to weave. Sanctioned support role (dependency of t_and_t, expanded_ecosphere).

## towntalk   [anchors: support/flavor (1)]
- LEAVE — audio-only MineColonies flavor addon; no items, no blocks, no recipe methods. Nothing to route. It rides on MineColonies which carries the real weave.

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Gear built through Create sequenced_assembly/mechanical_crafting (Create pillar) and jetpacks/drones are personal flight (aeronautics pillar). Two pillars is the goal; the existing linkage is coherent and properly costed.
- from: create_sa:blazing_* tools | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the blazing line is mid-tier workhorse gear (blaze rods → fire tools); gating it behind an arcane infusion step adds complexity without a thematic payoff — a fire-forging step in a furnace or Create:haunting is more coherent. The Create+aeronautics double is already complete; this third edge is unnecessary.
- from: create_sa:brass_drone_item | via: create:sequenced_assembly (upgrade path) | to: aeronautics (deeper) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: drones already belong to the aeronautics pillar; deepening within the same pillar doesn't earn a new pillar. M-06 is for depth within Create, not for lateral extension. No new pillar gained.
- REWORK: None — the two existing pillar anchors (Create construction method + aeronautics personal flight) are both coherent, properly costed, and thematically tight. No arbitrary edges found.

## yungsapi   [anchors: support/library (1)]
- LEAVE — pure API/library; no items, no blocks, no recipe methods, explicitly "does not affect the game in any way" standalone. Sanctioned support role (dependency of YUNG's structure mods).

## woodworks   [anchors: survival (1)]
- from: woodworks:*_boards / *_bookshelf / *_chest | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood-deco blocks crush back to planks + sawdust + xp-nugget — a lossy, natural Create recycle loop that ties the decoration palette into the Create web without forcing players through it.
- from: woodworks:*_sawmill (method) | via: woodworks:sawmill recipe-type | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill is a stonecutter-equivalent for wood; overlapping it with create:cutting would only be a cosmetic recipe duplication, not a real cross-pillar connection. A recipe duplication is not a weave. The crushing route (M-04, above) is the stronger, cleaner single edge.
- from: woodworks:*_beehive | via: farmersdelight:cutting or extradelight:drying_rack | to: survival (economy) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: beehives are a deco variant of vanilla beehives; extracting honey/comb from a Woodworks beehive via a cutting/drying step would work mechanically, but it's trivially available from vanilla beehives already — no meaningful scarcity or weave value added. Not worth the recipe noise.
- from: woodworks:*_chest | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: a crafted wood chest as a trade good is too everyday/cheap to register as a meaningful luxury-good sell (M-09 target is high-effort consumables). Would muddy the economy signal.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block) | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: a fallen meteor is a "space rock" — crushing it in a Create millstone/crusher yields iron nuggets, a small nickel/copper byproduct, and an xp-nugget; meteors become a minor Create ore-feedstock rather than pure atmospheric deco, grounding them in the production web.
- from: Blood Moon / Blue Moon active state | via: ars_nouveau:summon_ritual or occultism:ritual (event-gated) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain rituals (e.g. an Ars Nouveau celestial-attunement ritual, or an Occultism moon-binding ritual) can only be completed under an Enhanced Celestials lunar event — the moon is a real reagent-of-time, not a grind gate, tying the atmospheric night-cycle into the magic pillar.
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: space moss is atmospheric surface deco; imbuing it as a magic reagent has no thematic grounding (it's a worldgen biome grass, not a celestial artifact). The meteor + lunar-event edges are the coherent hooks; moss-as-reagent would feel arbitrary.
- from: Harvest Moon growth buff | via: (passive, no method) | to: Create (supply chain) | motif: no-motif | verdict: REJECT | reason: the Harvest Moon buff accelerates crops globally — it's a passive world-state modifier, not a routable material or method. No item to pull, no recipe to write. Can't be woven; it's free ambiance.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — pure interaction-behavior mod; no items, no blocks, no recipe methods. Door-convenience QoL with no content surface. Nothing to weave without forcing a nonsensical edge.

== CHUNK COMPLETE ==
