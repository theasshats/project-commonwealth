# Phase 2 candidates — chunk-18

## structurize   [anchors: support/library (1)]

Dossier confirms: pure build-engine dependency for MineColonies. Registers no recipe-types, exposes no
material surface — its scepters and placeholder blocks are purely internal pipeline tools the builder
uses to consume the player's block inventory during construction. No loot tables. The weave is
MineColonies' weave, not this mod's.

- LEAVE — zero independent content surface; no items, no methods, no loot. A structural dependency
  whose integration lives entirely inside MineColonies' weave. Forcing an edge here would be
  attaching to an API object, not a player-facing material.

## balm   [anchors: support/library (1)]

Dossier confirms: multi-loader abstraction API (BlayTheNinth). Zero items, zero blocks, zero loot,
no recipe-types, no gameplay surface of any kind. The 5 c:tags it ships are loader scaffolding
(nugget tags), not routable materials of their own. Dependents (Cooking for Blockheads, Waystones)
carry their own weave separately.

- LEAVE — genuine zero-content code library. No material, no method, no loot. The briefing's
  threshold for LEAVE is explicitly a "pure code library"; balm is the textbook case.
