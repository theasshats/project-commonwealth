# Phase 2 candidates — chunk-14 (context-fed)

## blood_n_particles_datapack   [anchors: support (1)]
LEAVE — zero content surface confirmed. The dossier's `loot=yes` flag is a false positive: the 184 "items" (minecraft:blood1..blood15, *_parent, etc.) are particle/effect holder entries, not usable items, and the mod registers no recipe-types. No method-pull is possible. The existing REJECT row for the loot-seed candidate is correct and sufficient.

## more_slabs_stairs_and_walls   [anchors: support/Create (1→2)]

Existing rows already cover the core weaves: M-12 create:cutting bulk-production (strong, well-accepted), M-04 gravity-variant crushing (contested but partial accept), M-28 colony builder requests, and one M-29 ACCEPT for amethyst-slab imbuement pedestals. The M-12 and M-28 angles are sound. The following are what the existing coverage is missing:

- CHALLENGE | from: more_slabs_stairs_and_walls:amethyst_block_slab / amethyst_block_stairs | via: ars_nouveau:imbuement (as pedestal blocks gating progression) | to: magic | motif: M-29 | verdict: REJECT | hook: The existing row misdescribes M-29 — cross-route dependency means a *recipe* in mod A requires an ingredient from mod B; Ars Nouveau's Enchanting Apparatus uses structural blocks in-world (not as consumed recipe inputs), so the amethyst-slab pedestals are a *build* constraint, not a recipe cross-dependency. The cited M-29 is the wrong motif; if the link is real, it should be M-05 (native-method gating: the apparatus setup constrains what shapes you can use) and the existing row's one ACCEPT is an error.

- NEW | from: more_slabs_stairs_and_walls wood-family cuts (log/plank slabs, stair, wall) | via: minecolonies:zero_waste (colony builder requests bulk log-cuts for schematic upgrades, making the cuts a colony-supply good, not just a builder-palette filler) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony Builder's Hut reaching tier 3 requests polished-log walls and plank stairs for its schematic — the Create saw runs them, and the colony player buys from the woodworker, not the quarry; the cut-block demand is continuous and never zeroes.

OK — existing rows sufficient for M-12 and M-04 core coverage; the M-28 colony supply and M-29 amethyst challenge are the only gaps.

## modernfix   [anchors: support (1)]
LEAVE — pure performance mod, zero items/blocks/recipe-types. No rows existed; none are needed.

## lionfishapi   [anchors: support (1)]
LEAVE — pure code library (animation/entity API), zero content surface. No rows existed; none are needed.

## inventoryprofilesnext   [anchors: support (1)]
LEAVE — client-only inventory QoL, zero items/blocks/recipe-types. The one existing REJECT (no-motif behavioral UI) is correct and exhausts the space.

## midnightthoughts   [anchors: survival (1)]
LEAVE — confirmed. Nine distinct approaches were rejected across prior passes, all hitting the same wall: the mod ships no items or tags, so no method-pull is possible and any link would require inventing new content (authoring, not weaving). The survival anchor is its only anchor. OK — existing rows sufficient (and exhaustively negative).

## createshufflefilter   [anchors: Create (1)]
LEAVE — confirmed. Ten prior REJECT rows exhaust every plausible angle (M-06, M-20, M-24, M-05, M-10, M-08, aeronautics framing). The two filter items are pure builder utility with no cross-system surface; forcing a second anchor is arbitrary. Dossier's own assessment ("leave") stands.



