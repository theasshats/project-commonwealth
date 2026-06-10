# Recipe connectivity — keeping the pack "one web, not many clusters"

**North star (CLAUDE.md):** if you drew a line from every item to what it's *used for*, the whole pack
should look like **one or two cohesive webs — not many disconnected clusters/branches**. This doc turns
that into a number you can re-check. The web *is* the trade loop made visible — an island is a cluster
disconnected from the production/distribution loop in `docs/SYSTEMS.md` (the structural model).

## How to measure it

```sh
python3 tools/recipe-graph/recipe-graph.py                  # default: real (no-vanilla) lens + live kubejs overlay
python3 tools/recipe-graph/recipe-graph.py --with-vanilla   # keep minecraft: nodes (upper-bound view)
python3 tools/recipe-graph/recipe-graph.py --jars-only      # untouched base game (ignore our kubejs weave)
python3 tools/recipe-graph/recipe-graph.py --remove minecraft,create   # how Create's ADDONS weave w/o the spine
python3 tools/recipe-graph/recipe-graph-viz.py              # writes tools/recipe-graph/recipe-web.html — interactive, offline
```

`recipe-graph-viz.py` emits a **self-contained HTML** (no deps, no network): a force-directed *mod*-level
map you can explore — toggle any mod (or the **Remove vanilla** / **Remove Create spine** presets) and the
connected components + giant-web % recompute live. It's the same graph surgery the CLI does, watchable;
the core lives in `tools/recipe-graph/recipe_graph_lib.py`, shared by both.

It builds an undirected graph and reports the connected components. The **giant component is "the web";**
everything else is an **island** — items that only craft among themselves. Two design choices make the
number honest:

- **Nodes = modded items + `c:` tags; vanilla `minecraft:` is filtered out by default.** Vanilla
  primitives (stick, planks, iron) touch almost everything, so leaving them in makes *everything* look
  connected (94% giant — a useless upper bound). Removing them means "connected" has to run through the
  **modded / Create economy**, which is what we actually care about. That drops the giant to ~65% raw.
- **Source = jar digests + our live `kubejs/` overlay.** The digests are the mods' *own* recipes; they
  can't see the bridges we author. The overlay parses `kubejs/server_scripts/recipes/*.js` for both
  explicit item ids **and** `replaceInput({ mod: 'X' }, …, 'create:Y')` weaves (which name a mod only by
  filter), wiring those mods into Create. Counting the overlay lifts the giant by ~10 points (to ~75%):
  that delta **is** the recipe overhaul, made visible.
- **Edges count Create PARTS *and* METHODS — for every mod.** A modded recipe-*type* (`create:mixing`,
  `farmersdelight:cooking`, `occultism:ritual`, `ars_nouveau:enchanting_apparatus`, …) becomes a node that
  links every item it produces — "made in that machine" is real connectivity (vanilla types stay dropped as
  universal). This is what connected `createfood` to `create` (its food is made *in* Create machines, not
  *from* Create items), and it lights up **magic-apparatus** connectivity too — useful for the #75 magic PR.

> **The % is a compass, not a gate.** Use it to *find* off-web clusters worth a human look — never as a
> release target. Target a coverage number and it gets gamed (bridge-recipes-for-the-metric — Goodhart's
> law), and a high giant-% can still hide lifeless threads. The right question is "is this island
> *intentional* (cosmetic — fine) or a *real gap*?", not "are we at N%." The deep *taste*-weave behind the
> number is `docs/WEAVING-STRATEGY.md`; the cadence that uses this tool is `docs/archive/RELEASE-CADENCE.md`.

## Beyond connected components (the four sharper lenses)

Connectivity is binary — in the web or not. These add nuance (all in the CLI report):

- **Depth — hops from the Create spine.** BFS distance of every item from the nearest `create:*` node.
  "Reachable but 7 hops away" is *technically* woven but dangling; low average depth means tightly woven.
  (Currently avg ~2 hops.)
- **Load-bearing mods (cut vertices).** A Tarjan pass on the mod graph finds mods whose removal *splits*
  the web — the fragile single joints. It correctly fingers `create` and `createfood` as the hubs holding
  everything together (and the viz lets you pull them and watch it shatter).
- **Material unification (tag-membership blind spot).** Digests don't record which items sit in a `c:`
  tag, so a mod's own steel/tin can look islanded though it's tag-unified in game. The tool infers this:
  any `mod:[raw_]<metal>[_ingot/_block/…]` is wired to a synthetic `c:material/<metal>` node, collapsing
  those false islands (and surfacing real unification gaps as a tagging — not recipe — fix).
- **Phantom filtering.** Only namespaces that *author* a recipe count; condition predicates
  (`neoforge:tag_empty`) and dead compat for uninstalled mods (`mekanism:*`) are dropped.

## How to read it — and how to fix an island

An island isn't "uncraftable"; it's **disconnected from the economy**. The usual cause is a *new
material that only feeds its own block family*: a worldgen stone → its bricks/pillars/slabs/walls, used
nowhere else. To rejoin the web an island needs **~one bridge edge**, not a gate on every variant — e.g.
make the material crushable in Create, convertible to/from a common material, or an ingredient in one
spine recipe. **One bridge collapses the whole island into the web; it does not add a grind.**

## Triage buckets (what to actually do)

- **`tech/gear`** (createnuclear, createbigcannons/cbc_at, northstar/tfmg stragglers, minecolonies,
  create_d2d, silentgear) — **bridge these first.** A tech cluster floating free of the Create spine is
  exactly the thing the overhaul is meant to prevent; these are unambiguous, on-theme wins.
- **`block/deco`** (more_slabs, upgrade_aquatic, quark/galosphere/undergroundworlds stone, mcwroofs,
  domum_ornamentum, usefulfoundation) — the **bulk** of the islands, and a **judgment call**: one
  cross-link per *material* (not per variant) collapses these cheaply, but a forced "why is jasper
  convertible to granite?" bridge can feel arbitrary. Best handled per-material with a natural link
  (Create crushing → gravel/sand/dust, or a stonecutting cross-edge).
- **`organic/mob`** (alexsmobs, naturalist, vinery, tide, ecologics, deeperdarker, cataclysm…) —
  **deliberately left vanilla** per the `docs/RECIPES.md` ledger: mob-drop / worldgen / food families
  are thematically their own thing; forcing Create/economy edges would be incoherent. These islands are
  *acceptable* and shouldn't be counted against the goal.
- **`magic`** (ars_nouveau, forbidden_arcanus) — route through their own apparatus/ritual systems; the
  `33-magic-web.js` bridges already tie the magic mods together. Small residual islands are fine.
- **`security`** (securitycraft) — the 150 off-web items are ~all **reinforced building blocks** +
  per-wood security boats: cosmetic variant families of an already-spine-gated mod (its devices are
  gated in `80`). Same call as `block/deco`.
- **`phantom`** (recipe_integration, spawn, some `minecraft`) — **not real**: dead compat data for
  uninstalled mods + tag artifacts. Ignore; not fixable and not a goal.

So the *meaningful* worklist is **tech/gear first**, then a per-material decision on **block/deco +
security**; organic/magic/phantom are out of scope by design.

---

<!-- DATA: regenerate with `python3 tools/recipe-graph/recipe-graph.py` -->

# Recipe-graph connectivity

_Generated by `tools/recipe-graph/recipe-graph.py` — lens: **NO vanilla**, removed: `minecraft`, jars + live kubejs overlay._

- item nodes: **18083**  (+2856 `c:` tags)
- connected components: **1921**
- giant component ("the web"): **14689** items — 81% of items
- items OUTSIDE the web: **3394** across 1920 clusters

## Depth — hops from the Create spine

reachable from `create:*`: **14812** items (avg **1.8** hops); unreachable: **3271**
  0:699  1:7401  2:3485  3:1862  4:931  5:273  6:62  7:22  8:8 …

## Load-bearing mods (cut vertices — removing one splits the mod web)

  `create`(103), `extradelight`(50), `touhou_little_maid`(40), `justenoughbreeding`(31), `farm_and_charm`(6), `occultengineering`(5), `companions`(2)

## Separate webs / islands by mod

| items off-web | clusters | biggest | bucket | mod |
|--:|--:|--:|---|---|
| 850 | 745 | 17 | block/deco | `more_slabs_stairs_and_walls` |
| 466 | 255 | 68 | block/deco | `quark` |
| 223 | 70 | 16 | block/deco | `upgrade_aquatic` |
| 165 | 30 | 41 | security | `securitycraft` |
| 114 | 65 | 33 | food | `vinery` |
| 103 | 13 | 23 | tech/gear | `create` |
| 92 | 16 | 24 | organic/mob | `ecologics` |
| 85 | 41 | 45 | block/deco | `domum_ornamentum` |
| 70 | 30 | 17 | organic/mob | `cataclysm` |
| 69 | 2 | 68 | tech/gear | `tfmg` |
| 68 | 4 | 17 | other | `aeronautics_dyeable_components` |
| 64 | 15 | 28 | organic/mob | `born_in_chaos_v1` |
| 62 | 27 | 5 | organic/mob | `alexsmobs` |
| 60 | 11 | 14 | block/deco | `galosphere` |
| 59 | 17 | 15 | phantom | `spawn` |
| 59 | 40 | 10 | other | `mushroomquest` |
| 53 | 15 | 25 | organic/mob | `beachparty` |
| 49 | 10 | 13 | organic/mob | `deeperdarker` |
| 49 | 16 | 4 | other | `pantographsandwires` |
| 42 | 15 | 17 | organic/mob | `naturalist` |
| 39 | 8 | 11 | block/deco | `undergroundworlds` |
| 38 | 35 | 3 | food | `meadow` |
| 33 | 23 | 3 | organic/mob | `tide` |
| 32 | 1 | 32 | other | `just_blahaj` |
| 28 | 20 | 2 | other | `friendsandfoes` |
| 25 | 22 | 2 | tech/gear | `createbigcannons` |
| 23 | 20 | 2 | food | `farm_and_charm` |
| 20 | 0 | 0 | other | `bits_n_bobs` |
| 20 | 5 | 7 | other | `brazil_legends` |
| 20 | 16 | 2 | tech/gear | `immersive_armors` |
| 18 | 11 | 6 | tech/gear | `minecolonies` |
| 18 | 9 | 6 | misc/util | `simplehats` |
| 18 | 18 | 1 | food | `bakery` |
| 17 | 7 | 4 | tech/gear | `northstar` |
| 17 | 17 | 1 | tech/gear | `create_ironworks` |
| 16 | 1 | 16 | other | `travelersbackpack` |
| 14 | 4 | 10 | other | `exposure` |
| 12 | 10 | 3 | magic | `ars_nouveau` |
| 12 | 12 | 1 | tech/gear | `cbc_at` |
| 11 | 6 | 5 | organic/mob | `snowyspirit` |
| 11 | 11 | 1 | other | `companions` |
| 10 | 3 | 6 | other | `cold_sweat` |
| 8 | 3 | 4 | other | `illagerinvasion` |
| 8 | 4 | 2 | other | `copperagebackport` |
| 8 | 7 | 2 | organic/mob | `grimoireofgaia` |
| 8 | 7 | 2 | magic | `irons_spellbooks` |
| 7 | 1 | 7 | other | `gamediscs` |
| 7 | 1 | 7 | other | `kobolds` |
| 7 | 2 | 4 | other | `trailandtales_delight` |
| 6 | 1 | 6 | organic/mob | `ribbits` |
| 6 | 2 | 5 | other | `moblassos` |
| 6 | 6 | 1 | other | `smokeleafindustries` |
| 5 | 1 | 5 | other | `immersive_paintings` |
| 5 | 4 | 2 | other | `mowziesmobs` |
| 5 | 3 | 2 | other | `endrem` |
