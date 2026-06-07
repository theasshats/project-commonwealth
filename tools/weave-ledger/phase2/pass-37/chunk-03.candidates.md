# Phase 2 candidates — chunk-03

## createadditionallogistics   [anchors: create, aeronautics (2)]

REWORK: The aeronautics anchor is listed as "seats wired to Stock Keepers/train logistics." The flexible-shaft / lazy-shaft angle is the stronger Create anchor (lag-free kinetics for big factory runs). The aeronautics seat claim is thin — the short/tall seats are for Stock Keeper mobs (train seats), which is logistics-adjacent but not a named aeronautics weave. Flag for review: the aeronautics anchor should be tightened to "seat variants used in train/drone logistics platforms" or narrowed to logistics-support and the aeronautics label left for mods with proper Aeronautics recipes. Does not invalidate the 2-anchor count, but the aeronautics claim is weak.

- from: lazy shafts/cogwheels | via: aeronautics contraption builds | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: lazy cogwheels/shafts are general Create kinetics components, not a drivetrain for Aeronautics propulsion/control specifically; M-24 is for propellers/engines/control surfaces, not kinetics infrastructure. The perf-support role is the real justification for keeping this mod, not a second weave edge.

- from: flexible shafts (andesite/brass encased) | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: M-23 is structural alloy for airframes/hulls; flexible shafts are kinetics components, not hull material. Tone clash: a flexible shaft is not a structural airframe element.

OK — existing connections are passable (Create clear; aeronautics thin but not wrong — seat variants genuinely serve train/drone platform builds). Primary value is the perf-support role. No new cross-system weave found that survives red-team.

## sparsestructures   [anchors: support (1)]

LEAVE — genuine zero-content (no items, no blocks, no loot tables). This is a worldgen-config-only mod that dilates structure spacing. There is no material surface to route through any method. Its effect on the loop is indirect (rarer structures → exploration is more rewarding, pressure from danger is maintained), but that is an ambient design effect, not a weave.

## rolling_down_in_the_deep   [anchors: support (1)]

LEAVE — genuine zero-content, client-only camera/movement mod. No items, no blocks, no loot tables; no material surface whatsoever. It is a feel-polish mod for underwater swimming (extends Do a Barrel Roll's camera freedom to diving). Nothing to route through any method.

## smartbrainlib   [anchors: support (1)]

LEAVE — genuine zero-content library. Pure AI/Brain framework code consumed by mob mods (Alex's Mobs, Naturalist); zero items, zero blocks, zero loot. No material surface to route.

## sounds   [anchors: support (1)]

LEAVE — genuine zero-content, client-only audio mod. 170+ sound effect replacements/additions; no items, no blocks, no loot. Nothing to route through any method.

## drones   [anchors: aeronautics (1)]

- from: drones:iron_rotor | via: create:pressing (iron plates → shaped rotor) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a rotor that lifts a drone is a pressed mechanical part — of course it goes through the rolling mill / press before it flies.

- from: drones:ion_thruster | via: create:sequenced_assembly (precision parts + electrum wire from createaddition + brass casing) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: ion thrust is advanced propulsion; it should cost more process steps than an iron rotor, not just more iron. Naturally pulls in createaddition electrum wire (a Create-electric intermediate) — cross-mod without forcing it.

- from: drones:wood_rotor | via: crafting table (vanilla wood + string) | to: create | motif: M-05 | power: everyday | verdict: REJECT | reason: everyday-tier item; do NOT gate the starter rotor behind Create processing — that violates the cost-model guardrail (basics ≈3×, not complex chains). Leave wood rotor at vanilla crafting depth.

- from: drones:pocket_drone (assembled) | via: aeronautics logistics role | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is service-for-hire labor, not a goods trade; a pocket drone is a finished good, not a service. The ambient "it's sellable" angle is M-09 retired. The economy tie would need a demand-gating mechanism (e.g. a colony hut that requires drones for automation — M-28) and that is speculative with no colony recipe hook defined. Reject until a concrete demand-gate exists.

- from: drones:drill (ability block) | via: the drone assembly mechanic pulling in a Create drill block as the ability component | to: create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: the drone assembly mechanic accepts *any* block as a body part — it doesn't specifically require a Create drill; it accepts minecraft:drill via the block-building system. Forcing a Create-drill cross-route dependency would be authoring a restriction, not a recipe. The dossier says "the drill/thrusters are natural Create-material sinks" but the drill is the *drone's* drill block, not create's drill. No clean M-29 here without an authored restriction.






