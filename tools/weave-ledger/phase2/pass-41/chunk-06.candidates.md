# Phase 2 candidates — chunk-06 (context-fed)

## searchables   [anchors: support (1)]
LEAVE — pure client-UI library/API; zero items, zero methods, no gameplay surface to weave.

## resourcefullib   [anchors: support (1)]
LEAVE — cross-platform utility/API library; zero items, zero methods, no gameplay surface to weave.

## yungsapi   [anchors: support (1)]
LEAVE — structure/jigsaw API library for YUNG's mods; zero items, zero methods, no gameplay surface to weave.

## controlling   [anchors: support (1)]
LEAVE — client keybind-menu UI mod; zero items, zero methods, no gameplay surface to weave.

## foodeffecttooltips   [anchors: support (1)]
LEAVE — client tooltip-display QoL; zero items, zero methods, no gameplay surface to weave.

## cubes_without_borders   [anchors: support (1)]
LEAVE — client Video-Settings borderless-window option; zero items, zero methods, no gameplay surface to weave.

## detect-afk-1.2.2   [anchors: support (1)]
LEAVE — server-side AFK detection utility; zero items, zero methods, no gameplay surface to weave.

## blockui   [anchors: support (1)]
LEAVE — XML UI-framework library for MineColonies/Structurize; zero items, zero methods, no gameplay surface to weave.

## aeronauticscompat   [anchors: aeronautics (1)]
LEAVE — compat-patcher glue mod (required, per CLAUDE.md) that makes foreign mods ship-aware on Sable contraptions; zero items, zero methods, nothing to weave.

## bcc   [anchors: support (1)]
LEAVE — server/client version-mismatch handshake utility; zero items, zero methods, no gameplay surface to weave.

## betteroceanmonuments   [anchors: survival (1)]

Existing rows converge on: M-02 loot-seed (magic reagent into monument chests — strong consensus) and M-08 coin-seed (high accept rate). The M-15 boss-key rows are split, and M-30 regional-scarcity appeared once late. What the prior passes missed:

1. The M-30 angle is actually underexplored. The deeper issue is that Better Ocean Monuments concentrates the monument *as a deep-ocean-only location* — not merely "a dungeon with loot" but a *region-specific* structure that only ocean-settling players control. That's a genuine regional-scarcity gate on whatever is seeded into it, not just a loot table. No prior row has articulated the M-30 frame cleanly as the *reason* why the loot-seed of a magic reagent or coin also functions as a regional gate.

2. The M-15 (boss-key) debate: the Elder Guardian IS a boss (unique hostile with a specific death mechanic, not a generic mob). A rare aquatic-component seeded as an *Elder Guardian drop* (not a chest) would be M-15-eligible, distinct from the chest-loot rows. This has not been proposed cleanly.

- NEW | from: monument chest loot (ocean-monument-exclusive deep-ocean structure) | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: whatever is seeded into monument chests is by geography region-locked to ocean players — a land-locked Create engineer who needs it must trade or sail; the aquatic specialization gate is M-30 carried by loot-table injection, not ore-gen
- NEW | from: Elder Guardian unique drop (seeded via loot-table, distinct from chest loot) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elder Guardian is the monument's capstone boss — seeding a rare aquatic-core component as its death-drop (not just a chest) gives the mod a boss-key role (M-15) that the chest-loot rows cannot: you must *defeat* the guardian, not merely open boxes

OK — existing M-02 and M-08 rows are sound and well-supported; the two NEW rows above add the missing regional-scarcity frame (M-30) and the boss-drop distinction (M-15 via guardian death-loot vs chest-loot).

## createpickywheels   [anchors: Create (1)]

The existing candidate pool (30+ rows) is almost entirely the same behavioral claim re-expressed: "the biome-gate on water-wheels/windmills is a survival flavour." The rows that ACCEPT do so under M-30 or M-16, but both motifs require a *material* flowing through a *method* — this mod has zero items and no recipe-types. That means every ACCEPT row is itself mis-motifed, and the REJECT rows calling that out are correct.

What has NOT been proposed: a direct CHALLENGE to the surviving ACCEPT rows and an explicit resolution.

- CHALLENGE | from: biome-gated power placement (no material) | via: config-tie (behavioral, no recipe) | to: survival | motif: M-30 | verdict: REJECT | hook: M-30 requires a material whose key input is region-locked by ore-gen so the good must be traded — a location constraint on generator *placement* produces no tradeable good and routes through no recipe type; the existing ACCEPT rows under M-30 misapply the motif. The correct call is LEAVE for a 2nd anchor: the mod is a Create-internal balance patch that deepens the survival flavour of the Create spine without adding a second pillar. It is well-placed at 1 anchor (Create); the biome-gate IS the survival texture of Create power, but there is no method-routing motif that can carry it without items. No new candidate surfaces here that the prior passes missed.

LEAVE (2nd anchor) — zero items/blocks/methods; the behavioral biome-gate is real survival flavor but no motif covers a placement-constraint-only connection; the correct verdict is Create (1 anchor, well-placed).



