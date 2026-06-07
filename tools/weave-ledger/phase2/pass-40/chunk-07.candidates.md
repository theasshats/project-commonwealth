# Phase 2 candidates — chunk-07 (context-fed)

## craftingtweaks   [anchors: support (QoL) (1)]
LEAVE — zero blocks/items/recipe-types; crafting-grid QoL overlay only. No material surface to route through any method. Dossier confirms: nothing to weave.

## create_train_parts   [anchors: aeronautics (1)]
The existing rows have converged strongly on one direction: route brass/copper variants through create:pressing (M-20/M-04 territory). That core weave is well-covered. What is missing is: (a) an explicit economy anchor for the mod via MineColonies, which several rows hint at but no row develops cleanly against the loop; (b) a CHALLENGE to the arm_extender aeronautics rows which conflate "functional contraption part" with M-24 inappropriately.

- NEW | from: create_train_parts:brass_sliding_window / train_step_brass / train_slide_brass (mid-tier train fittings) | via: create:pressing (brass ingot → pressed brass sheet → window/step recipe input) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: pressed brass sheet into a sliding window frame — the same rolling mill that makes pipe fittings makes train-cabin panels; train outfitting becomes a Create sub-specialty
- NEW | from: create_train_parts (train-interior fittings set) | via: minecolonies colony builder-hut request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies "stationmaster" building schematic requests brass steps and sliding windows for the platform structure — the colony builder fills the order from the train shop, giving the mod a clean second anchor via the colony route without inventing anything
- CHALLENGE | from: create_train_parts:arm_extender | via: create:deploying / item_application | to: create | motif: M-20 | verdict: REJECT | hook: the arm_extender is already a functional Create contraption part that works in-game without a recipe gate; gating it behind item_application adds friction to a functional fitting whose whole point is to be accessible for contraption-building — depth-scales-with-power guardrail applies (arm_extender is everyday-tier contraption hardware, not a flagship endgame item)


