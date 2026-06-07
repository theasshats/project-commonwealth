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

## jamlib   [anchors: library/API (1)]

Dossier confirms: Architectury-based cross-platform library for JamCoreModding mods. Zero items,
zero blocks, zero loot, no recipe-types, no gameplay surface. Purely a JSON5 config abstraction
and platform-agnostic helper layer.

- LEAVE — genuine zero-content code library. Identical verdict to balm: no surface to weave
  against. The dependents it enables carry any weave independently.

## moreoverlays   [anchors: support/QoL-client (1)]

Dossier confirms: pure client-side HUD overlay mod (spawn-danger light level markers F7, chunk
boundary grid F9, JEI-search inventory dimming). Zero items, zero blocks, zero loot, no recipe-
types, no world/material interaction. Requires JEI on client; invisible server-side.

Power-read: everything it does is a rendering pass on existing world state — no material output,
no method that other mods can pull through. There is genuinely no content surface.

Red-team: could we seed a "surveyor's tool" item that ties to its overlay and has a Create/economy
use? That would be authoring content *for* the mod, not weaving *through* it — Phase 2 maps
existing surface, doesn't invent it. Reject that direction.

- LEAVE — client-only HUD overlay with zero items, methods, or loot. Not a code library in the
  strict sense (it has behavior), but has no content surface to weave — the same functional
  conclusion: nothing to propose here without inventing content the mod doesn't ship.
