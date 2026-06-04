# Magic web (#75) — in-game playtest checklist

> The recipe weave in `kubejs/server_scripts/recipes/33–36-magic-web-*.js` (+ the metal recyclers in
> `35-web-bridges.js`) is **headless-unverifiable** — the `event.custom` recipes (Ars imbuement /
> enchanting_apparatus, occultism spirit_fire) load silently and a wrong field just **skips that one
> recipe**. This list operationalizes the in-game gates from `MAGIC-WEB-HANDOFF.md` §6/§10. Work it
> station-by-station with JEI open. **Scope: this is the recipe layer only** — the Arcana mod (Attunement
> Font etc., PR #80) is a separate test. (A flagship multi-step chain was conceded pre-merge — see #123.)

## 0. Setup
- [ ] Pack loads; the magic mods present (Ars Nouveau, Iron's Spellbooks, Occultism, Occult Engineering, Born in Chaos, Grimoire of Gaia, Mowzie's, Modular Golems, Galosphere).
- [ ] **Tail `logs/kubejs/server.log`** on world load / after `/reload`. Note any line rejecting a recipe (bad field, unknown item) — that's the silent-skip symptom. Cross-check against the JEI checks below: a recipe that's missing from JEI but listed here = a schema field to fix.
- [ ] Recipe viewer is **JEI** (not EMI — EMI can't render Create processing).

## 1. Schema-load gate (the `event.custom` recipes)
Each must **appear in JEI on the named station**. If absent → wrong field; check the §4 jar-verified schema in `MAGIC-WEB-HANDOFF.md` and the log.
- [ ] Ars **Imbuement Chamber** shows: `source_gem → arcane_essence`, `source_gem → demons_dream_essence`, `otherworld_essence → arcane_essence` (33); `shiny_pearl → source_gem`, `ice_crystal → water_essence`, `glowing_jelly → source_gem`, `source_gem → empty_upgrade` (35).
- [ ] Ars **Enchanting Apparatus** shows: `arcane_essence (+lumiere) → 2× source_gem` (33).
- [ ] Occultism **Spirit Fire** shows: `spiritual_dust → demons_dream_essence`, `ethereal_spirit → otherworld_essence` (34); `withered_brain`/`rotten_heart → demons_dream_essence`, `foliaath_seed → datura` (35).

## 2. Ars stations — do the recipes actually run?
- [ ] **Imbuement**: drop `source_gem` on the Imbuement Chamber with the allurite pedestal + enough Source nearby → yields `irons_spellbooks:arcane_essence`. Source is **consumed** (~1000).
- [ ] **Enchanting Apparatus**: `arcane_essence` reagent + the 2 pedestal items (arcane_essence, lumiere_shard) + Source → **2× source_gem**. Confirm the apparatus accepts a **2-pedestal** recipe.
- [ ] **Galosphere shards are consumed** every conversion (no free round-trip arbitrage source↔essence).

## 3. Occult branch (34) — Create heated mixing + Spirit Fire
- [ ] **Heated** `create:mixing` (Blaze Burner under the Basin): `source_gem + 250 mb water → 250 mb occultengineering:spirit_solution` **fluid**; `ethereal_spirit + 1000 mb → 1000 mb`. Confirm output is the **fluid** (not an item).
- [ ] Spirit Fire transmutes `spiritual_dust → demons_dream_essence` and `ethereal_spirit → otherworld_essence`.
- [ ] The minted `spirit_solution` is usable by Occult Engineering's own recipes (it's their reagent).

## 4. Mob-drop sinks (35)
- [ ] Gaia `soulfire → spirit_solution` (heated mixing, 500 mb); `shiny_pearl → source_gem`, `withered_brain`/`rotten_heart → demons_dream_essence`.
- [ ] Mowzie's `ice_crystal → water_essence`, `glowing_jelly → source_gem`, `foliaath_seed → datura`.
- [ ] Modular Golems `source_gem → empty_upgrade` (alt path; the Create-gated `30-` recipe still works too).

## 5. Create crushing — the metal bridges (36 + 35-web-bridges)
- [ ] `36`: crushing `irons_spellbooks:mithril_ore` and `deepslate_mithril_ore` → **2× raw_mithril** + XP; `occultism:iesnium_ore` → **2× iesnium_dust** + XP (dust still smelts to the ingot).
- [ ] `35`: crushing `northstar:tungsten_sheetmetal`/`tungsten_grate` → **4× tungsten_nugget**; `quark:raw_copper_bricks` → **2× raw_copper**. (Recycling — lossy, no profit loop.)

## 6. Balance & regression
- [ ] **Ratios feel right** — Source costs (1000/800/600/500/400/200), fluid amounts, crushing yields. Note anything to tune (all first-pass — collected in #122).
- [ ] **Additive — nothing broke.** Every original magic recipe still works; JEI shows **both** the original acquisition and the new bridge path. No `event.remove` regressions.
- [ ] No duplicate/conflicting recipes between `35-magic-web-mobs.js` and `35-web-bridges.js` (same numeric prefix, both load).

## 7. Sign-off
- [ ] Record ratio tweaks in #122 (feed back into the `33–36` files).
- [ ] List any recipe that didn't appear in JEI (= a schema field to fix vs `MAGIC-WEB-HANDOFF.md` §4).
- [ ] Confirm with #80 in the world together (the magic layer ships as #75 + #80).
