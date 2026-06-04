# Phase 2 candidates — chunk-26

## wits   [anchors: support (1)]
- LEAVE — pure server-side debug command (no items, no outputs, no material surface to weave). Zero-content utility; forcing an edge here would be arbitrary.

## attributefix   [anchors: support/library (1)]
- LEAVE — pure attribute-cap bugfix library; no items, no outputs, nothing to route through any method. Its value is enabling other mods' gear to scale correctly; the weaving belongs on those mods, not here.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals shared-code framework; no material surface to weave. The one shipped item (blueprint:template_chest) is a vanilla-style utility chest with no distinct gameplay identity — too trivial to anchor a pillar and not a candidate for a recipe edge.

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — crash-recovery UI mod; no items, no outputs, no material surface. Purely a developer/user-experience fix; weaving has nothing to grip.

## titanium   [anchors: support/library (1)]
- LEAVE — HRZNStudio developer library; titanium:test_serializer is a dev-only recipe type, not gameplay. The dev-content blocks (diamond/gold/iron/smashing_table) are internal test scaffolding with no survival identity. Genuine zero-content code library.

## citadel   [anchors: support/library (1)]
- LEAVE — sbom_xela (Alex's Mobs/Alex's Caves) shared animation/spawn framework. Items present (citadel:citadel_book, debug, effect_item, fancy_item, icon_item) are internal dev tooling with no player-facing recipe identity. The content weaving belongs on Alex's Mobs/Caves, not on this library itself.

## create_dragons_plus   [anchors: Create (1)]
<!-- This mod IS the Create fan-processing library. Its own recipe-types (ending, freezing) are weave TARGETS
     that other mods route through; it doesn't need a second pillar for itself in the same way. But let's
     check: does it have loose materials of its own that could earn it a 2nd pillar? -->
<!-- Materials: dragon_breath fluid, dye fluids (16 colors), blaze_upgrade_smithing_template, fluid_hatch,
     levitite_fragile_fluid_tank. Dragon breath is the interesting one — it's the catalyst for fan_ending. -->

- from: create_dragons_plus:dragon_breath_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Dragon's Breath is a vanilla material (also piped through the fan_ending catalyst here); using it as an Ars imbuement input is coherent thematically, but this mod itself doesn't "own" dragon's breath — it just wraps it in a fluid form. The weave belongs on a mod that actually adds a dragon (e.g. a dragon mod's boss drop), not on the fluid-piping library. Red-team: this would create a confusing double-use of a vanilla fluid with no clear ownership.

- from: create_dragons_plus:blaze_upgrade_smithing_template | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: The blaze smithing template is a support item for sibling add-ons (Central Kitchen, Enchantment Industry) — its recipe context is defined by those mods. Gating it behind a sequenced assembly here would conflict with or duplicate what its consumer mods define. Not this mod's surface to weave.

- from: create_dragons_plus dye fluids (bulk dyeing station) | via: create:mixing → numismatics | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: Dye fluids are bulk convenience throughput, not scarce processed metals — M-08 is explicitly "scarce regional metal → Create-processed → coin." Routing dye fluid to a coin mint is arbitrary and tone-clashes with the scarcity-driven economy pillar.

- REWORK-CHECK: existing anchor is Create (1). The dossier already calls this a support/library role for the add-on family and says "leave." Agree — the fan-catalyst methods (ending/freezing) are weave infrastructure that other mods route through; the module earns its place fully via its Create role. No rework needed on existing connections; no new cross-pillar link is coherent with this mod's own materials.

- LEAVE — its content role is as a method-provider (fan_ending / fan_freezing), not a material source. The weaving belongs on the mods that route materials *through* those methods, not on the library itself. No coherent 2nd pillar from its own material surface.







