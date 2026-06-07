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

## irons_lib   [anchors: support/library (1)]

Dossier confirms: Iron431's shared framework, providing armor transmog table and player-statue
multiblock plus a Patreon API. Ships 4 items/blocks (the transmog_table and player_statue in two
namespaces). Loot=yes per the jar counts, but that loot is the player_statue's drop, not a
structure chest.

Power-read:
- Transmog table: reskins armor appearance without changing stats/NBT in any way another mod would
  care about. It consumes an armor item to change look — not a material that a Create crusher or
  ritual would plausibly want.
- Player statue: purely cosmetic decorative multiblock. No material output, no joinable recipe.
- The Patreon API: dev scaffolding; zero player surface.

Red-team: could transmog_table be part of a service-for-hire economy link (M-33 — "enchant-for-
hire" analogy where a transmog specialist reskins gear for coin)? The mechanic is purely cosmetic
and not gated on materials, so the service is a "just GUI" operation — a player-run barber's table.
That's thematically plausible (a cosmetics specialist sells appearance services) but M-33 requires
the work to be *labor* on another player's materials, which transmog is. However, the service
creates zero demand pull on production and zero scarcity loop feedback — it's pure vanity. This
sits at the ambient "nice to have" level, not a load-bearing loop connection. Reject.

Could the transmog table take a KubeJS recipe that requires an Ars/magic reagent to unlock
high-tier appearances (M-10 arcane infusion pull)? That would be inventing a recipe on a cosmetic
block to manufacture a weave — authoring, not mapping. The existing item surface gives no hook.

- LEAVE — library with cosmetic-only content (transmog table, player statue). No material is
  routable through any pack method. Forced edges would be authoring new content *onto* the mod, not
  weaving *through* it. The dossier's own candidate assessment reaches the same conclusion.

## bettermineshafts   [anchors: survival (1)]

Dossier confirms: YUNG's mineshaft overhaul — structural/worldgen mod only. Zero items, zero blocks
of its own, loot=no (uses vanilla mineshaft loot tables unmodified), no recipe-types.

Power-read: the structural improvement is meaningful for survival pressure — more dangerous,
sprawling mineshafts with ore caverns — but there is no material surface. The mod does not register
its own loot tables, so even a loot-seed approach (the briefing's explicit alternative to LEAVE for
structure mods) cannot apply here: the loot tables belong to vanilla, not this mod.

Red-team: is there anything in the expanded geometry — side rooms, ore caverns — that could carry
a weave? The side rooms might contain chests if vanilla mineshaft does; but the loot is vanilla's
and any seeding would be to vanilla's tables (attributable to vanilla, not bettermineshafts). The
structural geometry itself has no hook.

Could we call bettermineshafts a "pressure amplifier" that feeds the scarcity → pressure edge more
richly? Yes in design terms — bigger, more dangerous mineshafts = more risk in ore extraction = more
pressure on players to specialize and trade. But this is the *ambient* pressure role of exploration
content, not a weave (no method-pull, no material join). It's the same as BetterCaves or any
terrain overhaul: it enriches survival without needing an explicit weave link.

- LEAVE — structural worldgen overhaul with no own items, no own loot tables, and no material
  surface. The loot-seed escape valve (used for structure mods with loot tables) does not apply
  because bettermineshafts uses vanilla's tables unmodified. Survival anchor is earned through
  the enriched underground environment; a second anchor requires a material hook this mod
  simply does not provide.
