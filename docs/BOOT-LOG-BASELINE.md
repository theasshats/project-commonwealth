# Boot-log baseline — accepted ERRORs

Documents the boot-log `ERROR` lines that are **not ours to fix** (upstream
bugs, cosmetic, or no-ops for mods we don't ship), so they don't get
re-investigated each boot. Companion to the content fixes in #119 (recipes)
and #120 (loot/tags). Reconciled against `latest.log`, 2026-06-06 (a later
boot than the 2026-06-02 log the issues were filed from; the pack had updated
in between, which moved a couple of items — see notes).

After the #119/#120 overrides land, the remaining ERRORs should all map to an
entry below. If a new one appears that isn't here, it's worth a look.

## Fixed in #119 / #120 (no longer expected)

These were genuine content loss and are now re-authored as datapack overrides
under `kubejs/data/`:

- `recipe_integration` farm_and_charm mincer recipes for installed mods
  (tfmg, occultism, irons_spellbooks, vinery, create) — the `mod_laoded` typo,
  re-added with the corrected `neoforge:mod_loaded` condition.
- `trailandtales_delight` cutting `cherry_petal_from_cherry_sapling` — the
  unwrapped result entry wrapped in `item`.
- The stale Galosphere silver compat (Create `smelting`/`blasting`/`splashing`
  **and** `create_compressed`'s silver pile washing) — these pointed at the
  no-longer-existent `galosphere:silver_ingot`/`silver_nugget`. **Retargeted to
  Occultism silver** (`occultism:silver_ingot` / `silver_nugget`), gated on
  `occultism`. Silver is **not** palladium — Galosphere renamed *its* metal to
  palladium, but the pack's actual silver is Occultism's (see the gotcha note);
  `create:crushed_raw_silver` / `create_compressed:crushed_silver_pile` are
  silver, so they belong in the Occultism silver chain, not palladium.
- `create_compressed` Create-style processing recipes shipped with the
  pre-Create-6 schema — the splashing crushed-pile washes (copper, gold, iron,
  zinc, wheat flour, silver), `mixing/dough_block`, and
  `sandpaper_polishing/polished_rose_quartz_block` — re-authored to the Create 6
  schema (`id`/`count`/`chance` results, `neoforge:single` fluid). These are
  newly surfaced by the mod update; the original 2026-06-02 log predates them.
- `create_compressed`'s **compressed crushed uranium pile** had no working
  output here (its only washes are gated on mekanism / immersiveengineering,
  neither installed). Added a `create:splashing` recipe washing it into
  `createnuclear:uranium_powder` ×81 (= the pile's 9 crushed × 9 powder each),
  gated on `createnuclear`, so it feeds Create: Nuclear's uranium chain.

### Snowy Spirit — now loads natively, no override needed

The 2026-06-02 log dropped all 50 Snowy Spirit recipes on the Fabric-only
`snowyspirit:flag` resource condition. In the 2026-06-06 boot they load with no
error: the pack now carries the Fabric resource-conditions API
(`fabric_resource_conditions_api_v1`), so `snowyspirit:flag` resolves and the
mod's own config toggles for those recipes are respected. An override would
re-add them unconditionally and defeat those toggles, so **no Snowy Spirit
override ships** — the earlier-planned one was dropped after the new log.

### alcohol_industry — base bottle is upstream-broken, not overridable

The 2026-06-02 log flagged whiskey/vodka/tequila bottle filling; those now load
fine. Only `filling/alcohol_base_bottle` still fails — and **it can't be fixed
from our side.** Re-authoring it to the Create 6 schema cleared the schema
error but exposed the real problem: its result, `alcohol_industry:alcohol_base`,
is **not a registered item** (the drinks beer/vodka/whiskey/tequila each have an
item + lang entry; `alcohol_base` has only a vestigial model, no lang key, no
registration). The recipe fills a bottle to produce a non-existent item — an
upstream dev leftover. No override ships for it; the single remaining KubeJS
"empty output" warning on it is accepted noise. (Reported-upstream candidate.)
- `createtreadmill` treadmill block drop — `treadmill_item` → `treadmill`.
- `samurai_dynasty` komainu/kawauso/tanuki statue drops — wrong-namespace
  `minecraft:` → `samurai_dynasty:`, plus the missing `block` key on the
  `block_state_property` condition.
- `stoneholm` cleric chest — `minecraft:set_nbt` (removed in 1.21) re-authored
  as `set_components` with `minecraft:potion_contents`.
- `trailandtales_delight` pottery cooking pot — `farmersdelight:copy_meal`
  (removed in FD 1.3.1) → vanilla `minecraft:copy_components`; lantern_fruits
  boolean `ropelogged: false` → string `"false"`.
- `smokeleafindustries` house structure biome tag — the broken
  `#miencraft:is_plains` reference. The override uses `"replace": true` (a
  merge would keep the mod's broken entry) and points at `#c:is_plains`. Note:
  `#minecraft:is_plains` (what #120 assumed the typo should be) **does not
  exist** — `is_plains` is not a vanilla biome tag; the valid convention tag is
  `c:is_plains`, which is exactly the `required:false` fallback the mod already
  listed. Verified against the 2026-06-06 playtest log.

### Galosphere silver→palladium — CLAUDE.md gotcha is stale for 1.5.3

The CLAUDE.md gotcha says Galosphere "kept the legacy item id `silver_ingot`".
That is **no longer true in Galosphere 1.21.1-1.5.3**: the item is now
`galosphere:palladium_ingot` (verified in the jar — item models, lang, and the
`c:ingots/palladium` tag all use `palladium`). There is no `galosphere:silver_*`
item anymore. The tag guidance still holds — it's `c:ingots/palladium`, never
`c:ingots/silver` — but the "legacy id retained" half of the note is outdated.

Consequently the stale Create/`create_compressed` "silver compat" recipes that
pointed at the old Galosphere silver id are **not** retargeted to palladium —
silver is a different metal. Palladium has its own Galosphere processing; the
pack's silver is Occultism's, so those recipes route `create:crushed_raw_silver`
/ `create_compressed:crushed_silver_pile` into `occultism:silver_ingot` /
`silver_nugget` instead.

## Accepted as-is — benign for this pack (mod not installed)

- `create_integrated_farming:blocks/{duck,goose}_roost_*` (9). **Not a loss
  here.** These self-drop the roost block item, which CIF only registers when
  `untitledduckmod` is present — and that mod is **not** in the pack. So the
  block doesn't exist; the unresolved-item error is benign noise, and an
  override would fail on the same missing item. (#120 assumed these were real
  losses; they aren't for our modlist.)
- `railways:blocks/track_natures_spirit_*` (120) — Nature's Spirit not installed.
- `recipe_integration:clayworks/*` (11), `recipe_integration:mystical_agriculture/*`
  (8) — clayworks / mysticalagriculture not installed.
- `create_ironworks:misc/compat/better_smithing_upgrades/*` (8) — not installed.
- `createadditionallogistics` network_monitor (computercraft not installed),
  `cmpackagecouriers:deploying/jar_plane` (references uninstalled
  `create_factory_logistics:copper_jar_package_8x8`),
  `fxntstorage:*`, `s_a_b:glassarmor` — target mods/deps not installed.
- `cmpackagecouriers:portable_stock_ticker` + `_clear` — reference
  `cmpackagecouriers:portable_stock_ticker`, which is **unregistered** in 2.3.0
  (`Unknown registry key`). Recipes for a non-existent own-item; upstream-broken,
  not overridable (no valid result/ingredient to point at).
- `createaddition:compat/jeed/shocking`, `cold_sweat:compat/jeed/{warmth,
  frigidness}` (~6 lines) — JEED (Just Enough Effect Descriptions) info entries
  shaped `{"id":"…"}` where the codec wants a bare string. **Cosmetic** (JEI
  effect-description tooltips only, no craftable); #119 flagged them "low
  stakes." Left as-is; could be re-authored with string effect ids if a clean
  log is wanted.
- `irons_spellbooks:test/ring_gen_break_me` — upstream dev/test artifact.
- `create_compressed:splashing/oreganized/crushed_raw_lead_pile` — oreganized
  not installed; the recipe skips ("not a json object" under its absent-mod
  condition). The installed-mod create_compressed piles are fixed (see above).
- Most of `recipe_integration`'s ~3,700 conditional recipes — gated on mods we
  don't ship (regions_unexplored, eternal_starlight, cobblemon, sgjourney, …).

## Accepted as-is — cosmetic / upstream (mod installed, no pack fix)

- **Moonlight + Every Compat** `cactus_extra` dynamic-texture gen
  `IndexOutOfBoundsException` (145 + 18) — placeholder textures on generated
  Domum Ornamentum blocks; known upstream interaction.
- **Spawn / CBC:AT** `cbc_at:cannon_blocks/...` block-recipe read failures (144)
  + `rocket_munition_fuzing` — tied to a playtest, not a code change; confirm
  cannon assembly works in-game, otherwise benign logger spam.
- **Curios API** `is not a registered slot type!` (14) — items requesting
  Curios slots on the Accessories bridge; verify halo/artifact items are
  wearable, else trim `accessories-compat-layer` config.
- **KleeSlabs** `Slab quark:*_vertical_slab could not be found` (18) — config
  lists Quark vertical-slab ids absent in this Quark build; cosmetic. Lever to
  silence: trim the KleeSlabs config list.
- **JEI** duplicate `create:potion / create:flowing_potion` subtype interpreter
  (4) — benign double-registration.
- **GeckoLib / AzureLib / touhou_little_maid** animation/expression parse
  failures — asset bugs in those mods; cosmetic.
- **Epic Samurais statue models** (3 `ModelBakery` WARNs) — the komainu/kawauso/
  tanuki statue block models parent to `minecraft:tanuki_statue` etc. (the same
  wrong-namespace typo as the loot tables, but on the client model side). The
  loot drops are fixed; this is a separate client-asset bug that would need a
  `kubejs/assets/` model override to silence. Cosmetic (statue may render with a
  missing-model fallback). Upstream report candidate.
- **Trail & Tales `budding_lantern_fruits` model** — references
  `farmersdelight:block/crop_cross`, a model FD removed in 1.3.x. Cosmetic
  (growth-stage model); the lantern_fruits loot drop itself is fixed.
- **Xaero's** `Online mod data expired!` — version phone-home, irrelevant offline.
- `Invalid path in pack` packaging litter (`TODO.txt`, `LICENSE.txt`,
  `... copy.json`, `...(1).ogg`) — harmless, upstream only.

## Still worth a closer look (low priority)

- **`create_factory:sweet_berries_jam`** fluid tag references a missing
  `_flowing` fluid — likely a missing upstream flowing-fluid registration;
  verify the jam fluid works in-world and report.
- **Every Compat × ExtraDelight** `everycomp:extradelight/cinnamon_log[s]`
  reference ungenerated `extradelight:stripped_cinnamon_wood` — dynamic-compat
  tag-gen mismatch; cosmetic (axe-stripping / tag membership).
- **MineColonies Compatibility** `minecolonies_compatibility:blocks/citizen_grid`
  unresolved item — the jar is CurseForge-only (no Modrinth mirror) so it
  couldn't be inspected from the sandbox; needs the jar's loot table read on a
  machine that has it, or an in-game check of whether the citizen_grid block
  drops correctly.
- **Veil** (11 ERRORs) — note: CLAUDE.md's "we run Sodium proper" claim is
  itself outdated; Veil is **required** (Aeronautics → Sable → Veil), so its
  presence is expected, not a regression. The 11 ERRORs themselves are
  uncategorized; glance to confirm benign.
- **DataMapLoader** `modid:example` placeholder in some mod's dimension data
  map — track down which jar and report; harmless but sloppy.
- `AdvancementTree` (1) and `SimpleJsonResourceReloadListener` (2) —
  uncategorized; glance to confirm benign.

## Realistic levers for a clean log

If a quiet boot is ever wanted, the tractable config-side levers are: the
Curios slot config, the KleeSlabs vertical-slab list, and pruning the
`cactus_extra` Every Compat wood set. The rest is upstream.

## Re-check procedure (run each stabilization release)

Mods update every feature wave, so the boot log can regress: an override's
target id can change out from under it, or a freshly-updated mod can ship a new
malformed recipe/loot table. The stabilization-release perf re-checks
(#200-204, gate #205) carry a boot-log hygiene rider that points here. This is
the runbook for a future instance doing that rider.

**Inputs:** a fresh `latest.log` from a playtest boot of the release being
checked (ask the maintainer to attach one — the sandbox can't launch the game),
and this branch's `mods/*.pw.toml` (for jar URLs). The sandbox **can** reach
`cdn.modrinth.com` / CurseForge, so jars can be downloaded and inspected.

**1. Pull the drop lists from the log.**
```
grep -E 'RecipeManager.*(Error parsing|Parsing error|Skipping recipe)' latest.log
grep -E "LootDataType.*Couldn't parse" latest.log
grep -E "TagLoader.*missing following references" latest.log
```

**2. Confirm the recovered overrides still clear (each must return 0).** These
are the ids this pass fixed under `kubejs/data/`; if any reappears, a mod update
re-broke it — re-author against the current jar.
```
recipe_integration:farm_and_charm/mincer/(tfmg|occultism|create|irons_spellbooks|vinery)
create_compressed:(splashing/(crushed_raw_(copper|gold|iron|zinc)|wheat|galosphere)|mixing/dough_block|sandpaper)
silver_ingot_compat_galosphere            # smelt/blast → occultism:silver_ingot
create:splashing/galosphere/crushed_raw_silver   # → occultism:silver_nugget
create_compressed:splashing/createnuclear/crushed_uranium_pile   # → createnuclear:uranium_powder
trailandtales_delight:.../cherry_petal_from_cherry_sapling
createtreadmill .../treadmill (loot)      # drops createtreadmill:treadmill
samurai_dynasty .../{komainu,kawauso,tanuki}_statue (loot)
stoneholm .../cleric (loot)
trailandtales_delight pottery_cooking_pot + lantern_fruits (loot)
smokeleafindustries:has_structure/smokeleaf_house_biomes (tag)
```

**3. Every remaining ERROR must map to an entry in this file.** Diff the
log's drop list against the "Accepted as-is" + "upstream-broken" sections
above. A drop that isn't documented here is the signal to act:
- **Installed mod, real content** (a recipe/loot for a mod in `mods/`): triage
  per the #119/#120 method — download the pinned jar from its `.pw.toml` URL,
  read the intended `data/<mod>/recipe|loot_table/...` JSON, and re-author a
  corrected override under `kubejs/data/` (fix the schema/typo/namespace; for a
  Create recipe, match the Create 6 shape — `id`/`count`/`chance` results,
  `neoforge:single` fluid). Add a `## Playtest` line for it to the PR.
- **Absent-mod / cosmetic / unregistered-item-upstream**: it's benign — add a
  one-line entry to the relevant "Accepted as-is" section here so the next
  re-check doesn't re-investigate it.

**4. Watch for these specific regression shapes** (all seen at least once here):
a mod renaming a metal id (Galosphere silver→palladium); a loot function
removed in a Minecraft/loader bump (`set_nbt`→`set_components`,
`farmersdelight:copy_meal`→`minecraft:copy_components`); a Create schema bump
(`{"item":...}`→`{"id":...}` results, old `{"fluid","amount"}`→`neoforge:single`
fluid ingredients); a Fabric-only resource condition that the Fabric API layer
may or may not resolve depending on whether `fabric_resource_conditions_api_v1`
is present (Snowy Spirit). When a recovered id moves, re-point the override, not
the symptom.

**Pass = every ERROR/`Couldn't parse`/missing-tag line in the fresh log maps to
either a fixed override (step 2, now 0) or a documented entry here (step 3).**
