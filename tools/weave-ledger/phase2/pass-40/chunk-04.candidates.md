# Phase 2 candidates — chunk-04 (context-fed)

## jeed
OK — existing rows sufficient
(Zero content surface: 0 blocks / 0 items / 0 loot. JEI "Effects" documentation addon; its two recipe-types are JEI display providers, not craftable methods. Support role — no weave; CANDIDATES.tsv correctly holds no rows.)

## resourcefullib
OK — existing rows sufficient
(Pure library/API, 0 items/0 loot, no registered methods. Support role — nothing to weave.)

## tipsmod
OK — existing rows sufficient
(Client UI / pack-authoring tool, 0 items/0 loot. Could carry onboarding tips but that is content authoring, not a pillar weave. Support role.)

## rhino
OK — existing rows sufficient
(KubeJS JS engine, 0 items/0 loot. Invisible infrastructure — nothing to weave.)

## geckolib
OK — existing rows sufficient
(Animation/rendering API, 0 items/0 loot. Support library — no weave surface.)

## cubes_without_borders
OK — existing rows sufficient
(Client-only borderless-fullscreen QoL, 0 items/0 loot. Support role.)

## entity_texture_features
OK — existing rows sufficient
(Client texture-feature engine, 0 items/0 loot. Support role.)

## timm
OK — existing rows sufficient
(Traveler's Titles — client immersion overlay, 0 items/0 loot. Support role.)

## attributefix
OK — existing rows sufficient
(Attribute-cap bugfix lib, 0 items/0 loot. Support role — enables high-power gear to scale; no weave.)

## kiwi
OK — existing rows sufficient
(Snownee modding library, 0 items/0 loot. Support role.)

## wits
OK — existing rows sufficient
(/wits structure-identification debug command, 0 items/0 loot. Support role.)

## lithostitched__tectonic-3.0
OK — existing rows sufficient
(Tectonic terrain overhaul — pure worldgen, 0 blocks / 0 items / 0 biome-modifiers / 0 loot. Thematically adjacent to the scarcity foundation — continent-scale landmasses spread regional ores out, reinforcing M-30's premise — but there is no item/loot/recipe surface to route, so per the briefing's worldgen-only guardrail this is a leave, not a forced edge.)

## tfmg
NEW | from: tfmg:diesel / gasoline / lpg (refinery fuel barrels) | via: aeronautics/train bulk-haul as the move method | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: fuel is refined at the oil-region derrick but burned everywhere — moving barrels at fleet scale needs the logistics arm, giving aeronautics its distribution role (the existing M-13/M-30 rows establish supply+region but never the bulk-move edge).
NEW | from: tfmg:steel (structural blocks/beams, heavy stacks) | via: aeronautics/train bulk-haul | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: hull-grade steel is heavy and produced at the blast-furnace region; trading it to shipwrights elsewhere is exactly the bulk good the logistics arm exists to move.
NEW | from: tfmg:diesel / gasoline (engine fuel, consumed per run) | via: combustion-engine burn (native consumption) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: every airship/machine run burns the diesel down, so fuel demand never zeroes — the loop's closing arrow (distinct from M-13's supply line: M-26 is the demand-renewal edge, which §5 explicitly names "burned as fuel").
CHALLENGE | from: tfmg:steel_ingot (iron → blast furnace → steel) | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 reserves coin-minting for SCARCE REGIONAL metal; steel is a processing chain on abundant iron+coal, not region-locked, so "mint steel into coin" misuses M-08 — the regionally-scarce TFMG metals are nickel/lead/lithium (already routed via M-30), and steel's real economy role is the M-31 bulk good above. (One existing M-08 row already self-flags this; consolidating the verdict.)
