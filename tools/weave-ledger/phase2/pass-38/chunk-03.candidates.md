# Phase 2 candidates — chunk-03

## gnkinetics   [anchors: create (1)]
- from: gnkinetics:planetary_gear / ring_gear | via: aeronautics construction recipe (crafting/M-24) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gearset is exactly how you gear down an engine to a propeller — the player who builds the kinetics tree makes the drivetrain parts the aeronaut needs
- from: gnkinetics:worm_gear | via: create:mechanical_crafting (aeronautics rudder/aileron control surface) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: worm gears handle orthogonal torque conversion — plausible in a control surface, but gnkinetics:planetary_gear is the stronger flagship fit and using both risks diluting the single clean edge; one well-targeted M-24 weave is enough here
- from: gnkinetics:ring_gear | via: create:mechanical_crafting (aeronautics airframe ring-frame piece) | to: aeronautics | motif: M-23 | power: mid | tone: clash | verdict: REJECT | reason: ring gears are kinetic transmission parts, not structural hull elements — calling one an airframe component is a category error even if the shape matches

## yungsapi   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; no items, no loot, no mechanics to weave

## multipiston   [anchors: support/colony-dependency (1)]
- LEAVE — functional utility block used internally by Structurize colony builders; not a player-craftable or recipe-routable item; no coherent weave surface

## knightlib   [anchors: support/library (1)]
- LEAVE — library whose content items (chalice, grail, homunculus, essences) are dormant without Knight Quest (not in this pack); dossier explicitly says do not weave dead items; the medieval/alchemical flavor is appealing but wiring inert items is authoring noise

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — zero items, zero blocks, zero loot; pure client-side movement physics tweak; nothing to weave





