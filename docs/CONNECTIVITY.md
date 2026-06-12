# Recipe connectivity — keeping the pack "one web, not many clusters"

**North star (CLAUDE.md):** if you drew a line from every item to what it's *used for*, the whole pack
should look like **one or two cohesive webs — not many disconnected clusters/branches**. This doc turns
that into a number you can re-check. The web *is* the trade loop made visible — an island is a cluster
disconnected from the production/distribution loop in `docs/SYSTEMS.md` (the structural model).

## How to measure it

```sh
python3 tools/connectivity/connectivity.py                  # default: real (no-vanilla) lens + live kubejs overlay
python3 tools/connectivity/connectivity.py --with-vanilla   # keep minecraft: nodes (upper-bound view)
python3 tools/connectivity/connectivity.py --jars-only      # untouched base game (ignore our kubejs weave)
python3 tools/connectivity/connectivity.py --remove minecraft,create   # how Create's ADDONS weave w/o the spine
python3 tools/connectivity/connectivity-viz.py              # writes tools/connectivity/connectivity-web.html — interactive, offline
```

`connectivity-viz.py` emits a **self-contained HTML** (no deps, no network): a force-directed *mod*-level
map you can explore — toggle any mod (or the **Remove vanilla** / **Remove Create spine** presets) and the
connected components + giant-web % recompute live. It's the same graph surgery the CLI does, watchable;
the core lives in `tools/connectivity/connectivity_lib.py`, shared by both.

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
- **Mob drops are edges (#129, default-on; `--no-drops` to compare).** Entity loot tables from the
  `loot/` digest become mob nodes (`mod:entities/<mob>`) with a *direct* edge to each dropped item — no
  shared "drop" hub node, which would weld all ~540 mob tables into one artificial cluster and inflate
  the giant %. The design says mobs anchor via drops/bounties (#90); this makes that checkable: the
  report's **drop-only items** list (drops no recipe consumes) is the mob-curation signal (#90/#94).
  Caveat: the digest has no pools/weights/conditions, so these are *possible* drops (presence), **not
  rates** — fine for connectivity, wrong tool for balance. Chest/structure loot is excluded (#18's pass).

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
- **Phantom filtering.** Only namespaces that *author* a recipe or a loot table count; condition
  predicates (`neoforge:tag_empty`), dead compat for uninstalled mods (`mekanism:*`), and loot
  functions/conditions (`minecraft:set_count` — filtered by a vanilla loot-registry noise set, with
  modded refs validated against the by-mod block/item registries) are dropped.

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

<!-- DATA: regenerate with `python3 tools/connectivity/connectivity.py` -->

# Connectivity report

_Generated by the connectivity CLI — lens: **NO vanilla**, removed: `minecraft`, jars + live kubejs overlay, incl. mob-drop edges._

- item nodes: **17629**  (+2815 `c:` tags, incl. 361 mob nodes)
- connected components: **1861**
- giant component ("the web"): **14217** items — 80% of items
- items OUTSIDE the web: **3412** across 1860 clusters

## Mob drops — possible drops (presence), not rates

- entity loot tables in digest: **540** · mobs with in-lens drops: **361** (183 in the web) · distinct dropped items: **386**
- **drop-only items** (no recipe consumes or produces them — the curation signal, #90/#94): **220**

| drop-only items | mod | examples |
|--:|---|---|
| 88 | `tide` | `abyss_angler`, `alpha_fish`, `amber_rockfish`, `anchovy` … |
| 50 | `grimoireofgaia` | `bag_arrows`, `bag_book`, `bag_record`, `book_of_memory` … |
| 24 | `born_in_chaos_v1` | `bagof_candy`, `birch_branches`, `bloody_gadfly_eye`, `charmof_endurance` … |
| 12 | `minecolonies` | `ancienttome`, `chiefsword`, `firearrow`, `pharaoscepter` … |
| 9 | `deeperdarker` | `brittle_gloomsherd`, `dark_heart_gloomsherd`, `gloomsherd`, `listener_gloomsherd` … |
| 7 | `irons_spellbooks` | `betrayer_signet`, `blood_staff`, `bone_key`, `decrepit_key` … |
| 5 | `cataclysm` | `chitin_claw`, `lionfish`, `music_disc_maledictus`, `music_disc_scylla` … |
| 5 | `quark` | `crab_shell`, `forgotten_hat`, `monster_box`, `pathfinders_quill` … |
| 4 | `undergroundworlds` | `winter_boots`, `winter_chestplate`, `winter_helmet`, `winter_leggings` |
| 3 | `friendsandfoes` | `crab_claw`, `totem_of_freezing`, `totem_of_illusion` |
| 3 | `samurai_dynasty` | `akaname_tongue`, `jorogumo_eye`, `kitsune_tail` |
| 3 | `spawn` | `angler_fish`, `music_disc_rain`, `sunstone` |

## Depth — hops from the Create spine

reachable from `create:*`: **14340** items (avg **1.8** hops); unreachable: **3289**
  0:698  1:7179  2:3328  3:1771  4:850  5:315  6:133  7:56  8:10

## Load-bearing mods (cut vertices — removing one splits the mod web)

  `create`(100), `extradelight`(48), `touhou_little_maid`(39), `justenoughbreeding`(30), `companions`(2)

## Separate webs / islands by mod

| items off-web | clusters | biggest | bucket | mod |
|--:|--:|--:|---|---|
| 850 | 745 | 17 | block/deco | `more_slabs_stairs_and_walls` |
| 474 | 258 | 68 | block/deco | `quark` |
| 228 | 69 | 20 | block/deco | `upgrade_aquatic` |
| 222 | 111 | 5 | organic/mob | `tide` |
| 165 | 30 | 41 | security | `securitycraft` |
| 103 | 13 | 23 | tech/gear | `create` |
| 93 | 16 | 24 | organic/mob | `ecologics` |
| 85 | 41 | 45 | block/deco | `domum_ornamentum` |
| 74 | 30 | 17 | organic/mob | `cataclysm` |
| 69 | 2 | 68 | tech/gear | `tfmg` |
| 69 | 19 | 15 | phantom | `spawn` |
| 68 | 4 | 17 | other | `aeronautics_dyeable_components` |
| 67 | 11 | 14 | organic/mob | `deeperdarker` |
| 64 | 27 | 6 | organic/mob | `alexsmobs` |
| 60 | 11 | 14 | block/deco | `galosphere` |
| 59 | 40 | 10 | other | `mushroomquest` |
| 56 | 10 | 28 | organic/mob | `born_in_chaos_v1` |
| 55 | 14 | 18 | organic/mob | `naturalist` |
| 53 | 15 | 25 | organic/mob | `beachparty` |
| 49 | 16 | 4 | other | `pantographsandwires` |
| 47 | 8 | 11 | block/deco | `undergroundworlds` |
| 35 | 23 | 3 | other | `friendsandfoes` |
| 32 | 1 | 32 | other | `just_blahaj` |
| 25 | 22 | 2 | tech/gear | `createbigcannons` |
| 20 | 0 | 0 | other | `bits_n_bobs` |
| 20 | 16 | 2 | tech/gear | `immersive_armors` |
| 18 | 9 | 6 | misc/util | `simplehats` |
| 17 | 10 | 6 | tech/gear | `minecolonies` |
| 17 | 17 | 1 | tech/gear | `create_ironworks` |
| 15 | 5 | 6 | other | `cold_sweat` |
| 14 | 4 | 10 | other | `exposure` |
| 14 | 3 | 6 | other | `illagerinvasion` |
| 12 | 6 | 6 | organic/mob | `snowyspirit` |
| 12 | 9 | 2 | magic | `irons_spellbooks` |
| 12 | 12 | 1 | tech/gear | `cbc_at` |
| 11 | 11 | 1 | other | `companions` |
| 9 | 9 | 2 | magic | `ars_nouveau` |
| 8 | 4 | 2 | other | `copperagebackport` |
| 7 | 1 | 7 | other | `kobolds` |
| 7 | 2 | 4 | other | `trailandtales_delight` |
| 7 | 5 | 2 | other | `mowziesmobs` |
| 6 | 1 | 6 | organic/mob | `ribbits` |
| 6 | 3 | 3 | other | `rottencreatures` |
| 6 | 6 | 1 | other | `smokeleafindustries` |
| 5 | 1 | 5 | other | `immersive_paintings` |
| 5 | 4 | 2 | organic/mob | `grimoireofgaia` |
| 5 | 3 | 2 | other | `endrem` |
