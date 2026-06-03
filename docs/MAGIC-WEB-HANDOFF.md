# PR #75 — Magic web (weave the magic mods): handoff

> **For a fresh Claude instance** continuing/verifying the magic recipe weave on branch
> `claude/magic-web` (stacked on `claude/recipe-overhaul` / PR #62). Self-contained: read before acting.
> Deep design lives in the "Magic web" section of `docs/RECIPES.md`; this is the continuation brief.

## 1. What this PR is
Weaves the **magic** mods into one progression around an arcane **spine = Ars Nouveau + Iron's
Spellbooks**, with Occultism + Born in Chaos folded in, and Grimoire-of-Gaia / Mowzie's isolated drops
given a sink. Modeled on the pack's *own* bridge mods: **Ars 'n Spells** makes Ars the casting hub (→ Ars
is the spine) and **Create: Occult Engineering** bridges via native machines + a dedicated intermediate.
**Everything additive** — no existing magic recipe is removed; bridges are alt paths. Recipes route through
the mods' **native machines**, not crafting tables. MC **1.21.1 / NeoForge 21.1.228**, KubeJS.

## 2. State
- **Green** on `pr-checks.yml`. **Stacked on PR #62** (base = `claude/recipe-overhaul`). If #62 merges
  first, **rebase this onto `main`**. (This PR's `33-magic-web-spine.js` replaces #62's first-pass
  `33-magic-web.js` — that file is removed here.)
- **All recipe schemas were jar-verified** (§4) — the weave is native-machine-only, no fallbacks.
- KubeJS is **headless here**; real verification is in-game (§6). Ratios/source-costs are **first-pass**.

## 3. Files (`kubejs/server_scripts/recipes/`)
- `33-magic-web-spine.js` — **Ars source = universal currency.** Ars `source_gem` ⇄ Iron's `arcane_essence`
  via the **Imbuement Chamber** and **Enchanting Apparatus**; source also mints `occultism:demons_dream_essence`.
  Galosphere shards are the attunement catalyst (pedestal items).
- `34-magic-web-occult.js` — **occult intermediate.** Mints `occultengineering:spirit_solution` (a FLUID)
  via *heated* `create:mixing` from Ars source and Born-in-Chaos `ethereal_spirit`; Born-in-Chaos
  `spiritual_dust` → `demons_dream_essence` and `ethereal_spirit` → `otherworld_essence` via occult `spirit_fire`.
- `35-magic-web-mobs.js` — **fold in isolated mods.** Grimoire of Gaia (`soulfire`→spirit_solution,
  `shiny_pearl`→source, `withered_brain`/`rotten_heart`→demon essence), Mowzie's (`ice_crystal`→water_essence,
  `glowing_jelly`→source, `foliaath_seed`→datura), + a light Modular Golems tie (`source_gem`→`empty_upgrade`).

## 4. VERIFIED recipe schemas (1.21.1 — jar-confirmed; reuse, don't re-derive)
Authored with `event.custom({...})` (Ars/occultism) + `event.recipes.create.mixing` (Create):
- `ars_nouveau:imbuement` = `{type, input:{item|tag}, output:{count,id}, source:<int>, pedestalItems:[{item}]}`.
- `ars_nouveau:enchanting_apparatus` = `{type, reagent:{item}, pedestalItems:[{item|tag}], result:{count,id},
  sourceCost:<int>, keepNbtOfReagent:<bool>}`.
- `occultism:spirit_fire` = `{type, ingredient:{item}, result:{count,id}}`.
- `occultengineering:spirit_solution` is a **FLUID** (mb): `event.recipes.create.mixing(Fluid.of(
  'occultengineering:spirit_solution', n), [<item>, Fluid.water(n)]).heated()`.
- `occultism:ritual` is **intentionally NOT authored** (pentacle/spirit-bound; no clean event/KubeJS path).
- To re-pull jars: CurseForge URL = `https://mediafilez.forgecdn.net/files/<fileid first4>/<rest>/<file>`
  (Ars 401955/7764018, Iron's 855414/7907341); Occultism/OE on Modrinth (url in the `.pw.toml`).
  Inspect with `unzip -p` / `javap`.

## 5. Conventions
- **Additive only** — never `event.remove` a magic recipe. Bridges are extra paths.
- **Ars source is the hub** — foreign essences mint into/out of it via Ars's own stations.
- **Reuse `occultengineering:spirit_solution`** as the occult intermediate — don't invent a new reagent.
- **Galosphere allurite/lumiere shards** are the connective "attunement" catalyst (also gives an underused
  worldgen mod a magic purpose); they keep conversions from being free arbitrage.
- **Don't over-gate magic** — spells/glyphs/rituals/apparatus untouched; this only adds cross-school *bridges*.
- occultism↔Create is *already* bridged by the installed **occultengineering** mod — no KubeJS needed there.

## 6. What's left (to finish/merge #75)
- **In-game verification (only real test):** open JEI/EMI and confirm each bridge appears on the correct
  station — Imbuement Chamber, Enchanting Apparatus, occult Spirit Fire, heated Create mixing. Watch
  `logs/kubejs/server.log` for any `event.custom` rejection (a wrong field would skip just that recipe).
- **Balance:** source-costs / fluid amounts / drop-sink rates are first-pass — tune against the real essence
  economies in playtest.
- **Bus check:** confirm Ars `imbuement`/`apparatus` recipes actually run (source consumed, output produced).
- **Rebase ordering** vs #62 (above).

## 7. Relationship to the Arcana mod (PR #80)
This PR is the **recipe/material layer**. The deeper, code-level magic weave lives in the **Arcana** helper
mod (`mods-src/derpack-arcana/`, PR #80): the Attunement Font (Ars Source→Iron's mana), spell-power
crossover, and Soul Reaping (Born-in-Chaos kills→Occultism essence). Keep the two consistent; the Arcana
`docs/ARCANA-BRIDGE-MOD.md` + `docs/WEAVE-HANDOFF.md` cover that side.

## 8. To extend (add a magic bridge)
1. Verify the source/target item ids in `tools/mod-data/recipes/<mod>.txt` (don't guess).
2. Pick the native machine: refine into/out of Ars source (imbuement/apparatus), funnel occult things into
   `spirit_solution` (heated mixing), or transmute via `spirit_fire`. Use the §4 schemas.
3. Keep it additive + thematically justified; Galosphere shard as catalyst where a cost is wanted.
4. `node --check`; **`packwiz refresh`** + commit `index.toml`/`pack.toml` (CI gate).

## 9. Pointers
- Design: `docs/RECIPES.md` ("Magic web" section). Digests: `tools/mod-data/recipes/*.txt`, loot: `tools/mod-data/loot/*.txt`.
- Arcana mod + wider roadmap: `docs/ARCANA-BRIDGE-MOD.md`, `docs/WEAVE-HANDOFF.md`, `docs/INTEGRATION-BRAINSTORM.md`.
- The two real model bridge mods to study: **Ars 'n Spells** (`ars_n_spells`) and **Create: Occult Engineering** (`occultengineering`).
