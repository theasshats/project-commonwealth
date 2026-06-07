# Phase 2 candidates — chunk-14

## pingwheel   [anchors: support/QoL (1)]

- LEAVE — zero content surface: no items, no recipes, no loot tables. Pure multiplayer keybind / marker utility. No coherent game-loop weave is possible; forcing one would be contrived.

## enhancedcelestials   [anchors: survival (1)]

**Method-pull:** The mod has two discrete content types: (a) world-state lunar events (Blood Moon / Harvest Moon / Blue Moon) that alter gameplay globally, and (b) physical items — `enhancedcelestials:meteor` block and `enhancedcelestials:space_moss_*` blocks. The events map cleanly to M-22; the meteor block to M-04.

- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen-star rock crushes to iron chunks + a nickel byproduct (or gravel + xp-nugget), making meteor fields a minor Create ore-doubling stop; thematically obvious (space rock = metal-bearing)

- from: Blood Moon / Blue Moon lunar events | via: event-gated input → ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a particular ritual or imbuement only completes under a Blood or Blue Moon — the world's most dangerous night becomes the only window for a specific arcane step; the moon-calendar is a real planning constraint for the magic specialist

- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: space_moss is worldgen decoration/mob-spawn-egg flavor, not a material with an obvious arcane identity; "mossy space rock → magic reagent" is too arbitrary — the tone is sci-fi cosmetic, not eldritch organic; no coherent player nod

- from: Harvest Moon event | via: config-tie → Serene Seasons seasonal multiplier | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is not a new weave — Harvest Moon's crop-growth boost is a global modifier on existing crops; it already rides the survival pillar. No second pillar is added; the link is ambient, not a method-routing. Records as rejected to document the considered path.

REWORK: existing anchor (survival) is sound — the lunar events are legitimate survival pressure. No rework needed on the existing anchor; the two ACCEPT candidates above add Create and magic as a 2nd anchor.


