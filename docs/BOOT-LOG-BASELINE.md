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
- `alcohol_industry:filling/alcohol_base_bottle` — re-authored to the Create 6
  filling schema (`neoforge:single` fluid ingredient, `id` result).
- `trailandtales_delight` cutting `cherry_petal_from_cherry_sapling` — the
  unwrapped result entry wrapped in `item`.
- Create's Galosphere silver compat (smelting/blasting/splashing) **and**
  `create_compressed`'s galosphere silver pile washing — retargeted to
  `galosphere:palladium_ingot` / `palladium_nugget` (Galosphere 1.5.3 fully
  renamed silver→palladium; see the gotcha note below).
- `create_compressed` Create-style processing recipes shipped with the
  pre-Create-6 schema — the splashing crushed-pile washes (copper, gold, iron,
  zinc, wheat flour, galosphere silver), `mixing/dough_block`, and
  `sandpaper_polishing/polished_rose_quartz_block` — re-authored to the Create 6
  schema (`id`/`count`/`chance` results, `neoforge:single` fluid). These are
  newly surfaced by the mod update; the original 2026-06-02 log predates them.

### Snowy Spirit — now loads natively, no override needed

The 2026-06-02 log dropped all 50 Snowy Spirit recipes on the Fabric-only
`snowyspirit:flag` resource condition. In the 2026-06-06 boot they load with no
error: the pack now carries the Fabric resource-conditions API
(`fabric_resource_conditions_api_v1`), so `snowyspirit:flag` resolves and the
mod's own config toggles for those recipes are respected. An override would
re-add them unconditionally and defeat those toggles, so **no Snowy Spirit
override ships** — the earlier-planned one was dropped after the new log.

### alcohol_industry — only the base bottle is broken now

The 2026-06-02 log flagged whiskey/vodka/tequila bottle filling; on 2026-06-06
those load fine and only `filling/alcohol_base_bottle` still fails (same stale
schema). Only that one is overridden.
- `createtreadmill` treadmill block drop — `treadmill_item` → `treadmill`.
- `samurai_dynasty` komainu/kawauso/tanuki statue drops — wrong-namespace
  `minecraft:` → `samurai_dynasty:`, plus the missing `block` key on the
  `block_state_property` condition.
- `stoneholm` cleric chest — `minecraft:set_nbt` (removed in 1.21) re-authored
  as `set_components` with `minecraft:potion_contents`.
- `trailandtales_delight` pottery cooking pot — `farmersdelight:copy_meal`
  (removed in FD 1.3.1) → vanilla `minecraft:copy_components`; lantern_fruits
  boolean `ropelogged: false` → string `"false"`.
- `smokeleafindustries` house structure biome tag — `#miencraft:is_plains`
  typo → `#minecraft:is_plains`.

### Galosphere silver→palladium — CLAUDE.md gotcha is stale for 1.5.3

The CLAUDE.md gotcha says Galosphere "kept the legacy item id `silver_ingot`".
That is **no longer true in Galosphere 1.21.1-1.5.3**: the item is now
`galosphere:palladium_ingot` (verified in the jar — item models, lang, and the
`c:ingots/palladium` tag all use `palladium`). There is no `galosphere:silver_*`
item anymore. The tag guidance still holds — it's `c:ingots/palladium`, never
`c:ingots/silver` — but the "legacy id retained" half of the note is outdated.

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
  `cmpackagecouriers:*` (references uninstalled `create_factory_logistics`),
  `fxntstorage:*`, `s_a_b:glassarmor` — target mods/deps not installed.
- `irons_spellbooks:test/ring_gen_break_me` — upstream dev/test artifact.
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
