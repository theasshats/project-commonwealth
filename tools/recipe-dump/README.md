# Recipe dump — getting exact recipes for spine work

The committed `tools/mod-data` digest is license-safe but **lossy**: it records each recipe's ingredient
**ID set**, with no grid layout, no keys, and no counts. That's enough to *see* what an item touches, but
**not enough to safely re-author** a `sequenced_assembly` or `mechanical_crafting` recipe — which is what
the Create-spine cross-tier work (`docs/CREATE-SPINE-IMPL.md` §9) needs. This folder is how we get the
exact recipes.

The agent sandbox has **no mod jars** (only the digest), so the dump must be produced on a machine that has
the pack installed. Pick whichever method is easiest.

## Method A — KubeJS dump (recommended; vanilla + modded, exact JSON)

KubeJS is already in the pack, so no extra mods. `dump_recipes.js` iterates every loaded recipe and writes
the full JSON for the Create-spine namespaces.

1. Copy `tools/recipe-dump/dump_recipes.js` → `<instance>/kubejs/server_scripts/zz_dump_recipes.js`.
2. Boot the pack (a world or a dedicated server) so recipes load.
3. Run `/reload` in-game. It writes `<instance>/kubejs/pcmc-recipes.json` and logs each recipe
   to `logs/latest.log` prefixed `PCMC_RECIPE` (fallback).
4. Send back `pcmc-recipes.json` (or paste the specific recipes needed). **Never commit a dump**
   (`pcmc-recipes.*` and `dump/` are gitignored): it's verbatim mod recipe JSON — the mod
   authors' content, licensing-sensitive in a public repo — and a point-in-time snapshot that
   goes stale on every mod update with no CI able to refresh it. Keep dumps local, note their
   provenance (pack version + commit + date), and discard them when the authoring work lands.
5. **Delete** the copied `zz_dump_recipes.js` — it re-dumps on every reload.

Edit the `NAMESPACES` list at the top of the script to widen/narrow the dump.

> If `JsonIO.write` errors on your KubeJS build, the `PCMC_RECIPE` log lines have the same data —
> `grep PCMC_RECIPE logs/latest.log > pcmc-recipes.txt`.

## Method B — extract straight from the jars (no game launch)

Recipe JSON ships inside each mod jar at `data/<namespace>/recipe/*.json` (1.21) or `.../recipes/*.json`
(older). If you have the jars:

```sh
# example: pull all of TFMG's recipes
unzip -o "TFMG-*.jar" "data/tfmg/recipe*/*" -d tfmg-recipes
```

Zip the resulting folders (or just the recipes for the items in `CREATE-SPINE-IMPL.md` §9) and share them.

## Method C — JEI (manual, single recipes)

JEI has **no** native "export all recipes to JSON." For a one-off, open the recipe in-game (JEI) and read
the grid directly, then paste the layout. For bulk, use Method A or B instead — don't hand-transcribe
dozens of recipes.

## What the agent actually needs first

The staged cross-tier re-recipes in `docs/CREATE-SPINE-IMPL.md` §9 — priority items:
`tfmg:electric_motor`, `tfmg:engine_controller`, `create_new_age:reactor_casing`,
`create_new_age:advanced_energiser`, `createnuclear:reactor_core`, and confirmation that
`create_new_age:reactor_controller` exists. With those exact recipes, the lineage work stops being blind.

## Known blind spot — KubeJS-added recipes

The dump's `NAMESPACES` filter matches **recipe ids**, and recipes added by our own KubeJS scripts get
`kubejs:`-namespaced ids — so they are filtered OUT of the dump even when their *output* is a covered
mod's item. A "missing" recipe for an item the spine re-authored (e.g. `gnkinetics:planetary_gear`,
re-added in `spine/62-machines-misc.js`) is usually this, not an unobtainable item: check
`kubejs/server_scripts/` before concluding a recipe doesn't exist.
