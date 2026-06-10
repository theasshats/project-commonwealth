# Project Commonwealth — Patch Notes

<!-- Style: professional, player-facing. No decorative emoji, sparing bold, no hype or filler.
     Each release: "## X.Y.Z — Theme", a short lead paragraph, then "### Section"s.
     Bullets where they make sense: independent changes (fixes, additions, tweaks) get one
     bullet each — lead with the change, then the why/impact in the same bullet. Keep prose
     paragraphs for narrative that doesn't enumerate (a new system's introduction, a rename).
     The "## X.Y.Z" section ships verbatim as the GitHub release body (build.yml), so it must
     read complete on its own. Shipped sections are the published record — don't restyle them. -->

## 0.6.3 — Ore generation, prospecting, and mining hunger

Fixes to regional ore generation and the prospecting guide, plus a new survival mechanic: mining now costs hunger.

### Ore generation

- Aluminium (bauxite), lignite, and fireclay no longer generate in every overworld biome. They rode along in a background stone feature, which sidestepped the regional vein system; they now come from dedicated regional veins — bauxite in jungle and savanna, and lignite, with fireclay as its secondary band, in swamps and lowland plains.
- The background stone feature still generates as terrain decoration but no longer carries any ore. Lead's stray secondary source there was removed for the same reason; lead remains available from its regional vein.

### Prospecting

- The in-game prospecting guide was corrected: veins are located by right-clicking an ore block, not by breaking it — breaking does nothing. The guide now covers the right-click trigger, the map overlay toggles, marking veins as depleted, waypoints, sharing prospecting data with teammates, and the JEI ore-vein diagram.
- Vein markers on the map now draw with a hot pink outline so they stand out against terrain. Previously the outline was transparent and effectively invisible.

### Mining hunger

Breaking blocks now drains hunger, so a big dig needs provisioning — or machinery.

- The cost scales with the block: roughly 100 stone or dirt per hunger bar with an iron tool; planks, wool, and glass cost about half that; ores and metal blocks noticeably more.
- The tool matters: each tier from wood up to netherite tires you less, and digging with no tool at all drains fastest.
- Harvesting crops costs a small amount. Decorative blocks such as torches, flowers, and saplings cost nothing, and creative mode is exempt.
- Automation pays nothing: Create drills and other machine breakers drain nobody's hunger, so machines remain the answer to industrial-scale digging.

### Fixes

- Dying no longer disconnects you from the server. A library bundled inside another mod (Forgified Fabric API) crashed while opening the death screen, and the resulting packet error kicked the player to the server list on every death. The pack now ships the library explicitly at a newer build that contains the fix.
- TxniLib and the two small interface mods that pulled it in — Immersive Armor HUD and Mining Speed Tooltips — have been removed. The library carried its own hidden copy of the Fabric API build involved in the death-screen bug; the pack now ships that library once, explicitly, at the fixed version.
- Create Big Cannons moved back from 5.11.5 to 5.11.3. The Advanced Technologies addon is built against 5.11.3 and calls a block-damage method whose signature changed in the newer build, so firing a heavy autocannon armour-piercing round at a block crashed the server.
- Firing a cannon no longer crashes the client while rendering its muzzle smoke. The smoke particle uses a vertex format the renderer's optimized particle path did not expect; that path is now disabled for billboard particles, which fall back to the standard renderer with no visible difference.

### Other

- Mining tools show their mining speed in the tooltip again, now including the Efficiency enchantment's boost. The removed Mining Speed Tooltips mod is replaced by a small pack script that reads the speed directly from the tool's own data, so nothing external is needed.
- This build bundles an X-ray resource pack (disabled by default) as a debugging aid for verifying the ore generation changes during the pre-alpha. It will be removed in a later release.

## 0.6.2 — Project Commonwealth

The pack has been renamed to Project Commonwealth (motto: Magna Communitas). The new name runs through the installer, the launcher instance, the documentation, and the pack's internal data. Mods, recipes, balance, and world generation are unchanged from 0.6.1.

Existing worlds and installs continue to work, and ore generation is unchanged.

## 0.6.1 — Dedicated server fix

Diet – AppleSeed Edition, which provides the diet and nutrition system, crashed dedicated servers on startup. It now uses a patched build that resolves the crash. Single-player and client installs are unaffected.

## 0.6.0 — Foundation

This release concentrates on performance and maintenance: a new renderer, a full pass of mod updates,
spawn tuning, and a set of fixes and removals.

### Performance

Sodium has been added. It replaces the default terrain renderer, which carried out its work on the
CPU rather than the graphics card and was the primary cause of low frame rates at an established
base. In testing, frame rates approximately doubled. Sodium could not be used previously because it
left all world textures invisible alongside Create: Aeronautics; a compatibility layer now reconciles
the two, so Sodium runs together with Aeronautics and its airships. Sodium is client-side only and
has no effect on the server. Shaders remain unsupported with Aeronautics.

Natural spawn rates have been reduced for several of the more demanding creature mods — Born in
Chaos, Mowzie's Mobs, and Grimoire of Gaia. These mobs were appearing often enough to take up a
noticeable share of server tick time. They still spawn, only less frequently. This is an initial
adjustment and will be revised with further play.

Chunky, a chunk pre-generation tool, has been added. Running `/chunky radius <n>` followed by
`/chunky start` on the server generates the surrounding area in advance, so chunks are saved before
players reach them and live world generation does not stall a session.

Memory and garbage-collection settings were tuned. The client instance ships with G1GC at 8 GB minimum /
12 GB maximum and a 50 ms collection-pause target, so the brief periodic GC hitches are shorter and less
noticeable on high-refresh displays. The setup guide adds a system-RAM-to-heap table and an optional
Generational ZGC configuration for machines with 24 GB or more (`docs/PRISM-SETUP.md`). These ship in the
installer, so a fresh install or reinstall picks them up.

### Updates

Approximately a month of mod updates has been applied across the pack. NeoForge has been raised to
21.1.233 to meet the requirements of the updated mods. Update your launcher's loader version to
21.1.233 before playing.

Configured has been added. It provides in-game configuration screens for mods that support it,
reachable from the mod list, so per-mod settings can be changed without editing config files by hand.

### Fixes

The locked-slot indicators from Inventory Profiles Next no longer appear as stray arrows on the
hotbar. Slot locking continues to function normally.

Cactus is no longer offered as a building material in the cases where it produced broken decoration
blocks.

Iron's Spellbooks spellbooks now fit the dedicated spellbook accessory slot.

### Recovered content

A number of recipes and block drops that several mods intended to ship were being discarded at load
because of malformed files, with no visible sign beyond a missing recipe or an empty drop. Each was
checked against the mod's own files and restored.

Recipes: the Farm and Charm mincer now processes the ores and logs from Create: TFMG, Occultism,
Iron's Spells, Let's Do Vinery, and Create that it was meant to; Create: Compressed's crushed-pile
washing, dough, and polished rose quartz work again; and the cherry-sapling cutting recipe works.
Crushed raw silver smelts, blasts, and washes into Occultism silver. Create: Compressed's compressed
crushed uranium pile, which previously had no use here, now washes into Create: Nuclear uranium powder.

Block drops: the Create treadmill, the komainu, kawauso, and tanuki statues, the Stoneholm cleric
chest, and the Trail and Tales pottery cooking pot and lantern fruits now drop correctly. Smokeleaf
Industries houses can generate in plains again.

### Spawns and content

Rotten Creatures spawning has been tuned per mob so each undead appears where it fits. The Undead
Miner is limited to mineshafts and mining dungeons; Frostbitten and the Glacial Hunter to cold biomes
and snowy forts; Swampy to swamps; the Mummy to deserts, pyramids, and crypts; Burned to ruined
portals and Nether structures; and Dead Beard to ocean ruins, with a smaller chance aboard the When
Dungeons Arise pirate ships. Spawns draw on the relevant vanilla structures together with those from
YUNG's Better Dungeons and Dungeons and Taverns.

### Food and diet

The two Spice of Life diet mods have been replaced by Diet – AppleSeed Edition, a single nutrition
system that tracks five food groups and grants small benefits for eating a varied diet. It reads each
food's groups from its recipe automatically, so it covers the whole pack without per-item setup. The
separate Touhou Little Maid diet addon is unrelated and stays.

### Removed

Bosses of Mass Destruction has been removed, along with its library dependency. Its four
structure-bosses overlapped L_Ender's Cataclysm, which remains as the pack's endgame boss mod.

Umapyoi and five unused library mods were also removed. Nothing that depended on any of these remains
in the pack.

## 0.5.4 — Guns crafted through Create

Guns, ammunition, and attachments are now built through their Create recipes, not assembled at the
gun smith table. The table no longer offers them — nor the stock TaCZ weapons — so the path is the
Create machinery the recipes were always meant to run on. Use JEI to find a gun's recipe. The gun
smith table blocks are no longer craftable, since they no longer do anything. Guns and parts you
already have are unaffected.

## 0.5.3 — Gunsmith delivery fix

Builds made with the pack editor were shipping without the Create: Armorer gun pack, so its
guns, ammo, and attachments were missing and the gun smith table had nothing to craft. The editor
now bundles the gun pack the same way the build scripts do, so a fresh build has the full Armorer
lineup. No recipes or content changed; this only restores files that should have been included.

The stock TaCZ gun smith table can no longer be crafted, so the Create: Armorer table is the one
survival path to building guns. The stock block still exists in the creative tab.

## 0.5.2 — Magic Web

The magic mods are now tied together. Ars Nouveau sits at the center: its Source acts as a common
currency that other schools' essences convert into and out of, the occult mods funnel through one shared
reagent, and a number of mob drops and metals that had no purpose now feed the magic systems. Everything
here is an addition — no existing recipe changed, so these are extra paths rather than replacements.
Conversion rates are a first pass and will be tuned with play.

### Ars Nouveau at the center
- Source gems and Iron's Spellbooks arcane essence convert into each other at the Imbuement Chamber and
  the Enchanting Apparatus, with a Galosphere shard as the catalyst so a round trip costs a crystal
  instead of being free.
- Source also produces Occultism's basic essence, and Occultism's higher otherworld essence converts
  back into the arcane line.

### The occult branch
- Ars Source and Born in Chaos spirits can be combined with water in a heated mixing basin to make
  Occult Engineering's spirit solution — the same reagent it already runs on.
- Born in Chaos spiritual dust and ethereal spirits transmute into Occultism essences on the Spirit Fire.

### Drops with a purpose
- Drops that previously did nothing now feed the web: Grimoire of Gaia's soulfire, shiny pearls, and its
  organ drops; Mowzie's Mobs' ice crystals, glowing jelly, and foliaath seeds. Reward gear is left alone.
- Modular Golems' upgrade base gains an alternative route through Ars Source.

### Magic metals through Create
- Iron's Spellbooks mithril ore and Occultism's iesnium ore can now be run through the crushing wheels
  for their raw material, alongside their existing smelting routes.

### Other
- A few metal building blocks can be recycled in the crushing wheels: Northstar tungsten sheetmetal and
  grates back into tungsten, and Quark raw-copper bricks back into raw copper.

### Known rough edges
- Conversion rates and Source costs are first-pass; expect adjustments. The deeper code-level weave
  (a block that moves Source and mana directly, cross-school spell power) is still in progress and not
  part of this release.

## 0.5.1 — Ore Veins

Ore generation is reworked to a GregTech-style model. Instead of ore scattered evenly through the
ground, ores are concentrated in large regional veins of related materials, vanilla overworld ore
generation is turned off, and a layer of scattered small ores plus a prospecting system help you find
the veins. Worldgen only affects newly generated chunks, so use a fresh world or unexplored terrain to
see it.

### Ore veins
- Ore now comes from large mix veins. A single vein holds several related ores in layers: a headline
  ore through the upper part, a second ore through the lower part, and smaller amounts of two more
  mixed in. An iron vein in the mountains, for example, also carries magnetite, some nickel, and a
  little gold.
- Veins are regional. The biome decides what generates: iron and magnetite in mountains, copper in
  badlands, redstone and lithium in deserts, coal in forests and taiga, zinc and tin in plains,
  diamond and jade in jungles, lapis in snowy biomes, emerald in peaks, salt along coasts, and so on.
  Twenty-one veins in all, covering the vanilla ores and the pack's modded metals.
- Vanilla overworld ore generation is disabled. Veins and small ores are the only sources, so where
  you settle now determines what you can mine, and what you will need to trade for.

### Small ores
- Single ore blocks of the common metals are scattered across the world. They are enough to get a
  first set of tools, and they double as indicators: a cluster of one type hints at a matching vein
  below.

### Prospecting
- Break an ore block to locate nearby veins of that material; a message confirms how many were found.
  With a supported map mod the located veins can be shown on the map with waypoints, and
  `/gtmogs share_prospection_data <player>` shares your finds with the rest of the group.

### Mods added
- GregTech Modern Ore Generation Standalone (the vein engine) and its libraries LDLib and
  Configuration.

### Known rough edges (tuning continues)
- Balance is not final. Ongoing work covers vein rarity, salt density along coasts, and ore depth.
- Cave pockets follow the local cave biome rather than the surface biome above them, so veins are
  currently absent in those pockets; the scattered small ores cover caving in the meantime. Making
  cave ore follow the surface region is the priority for the next ore-gen pass.

## 0.5.0 — Made Through Create

Crafting across the pack now routes through Create. Most tech, gear, machines, and a fair amount of
decoration are built from Create parts (sheets, casings, mechanisms) and methods (pressing, mixing,
sequenced assembly) rather than plain crafting tables, so the mods connect through the Create progression
instead of standing alone. The recipe viewer also changed from EMI to JEI, and a mob and spawn curation
pass landed. Recipe changes take effect on new crafts immediately; no world reset is required.

### Recipe viewer: EMI replaced by JEI
EMI does not display Create's processing recipes on 1.21.1 (pressing, mixing, and similar showed no recipe,
including for base Create items), which made it unusable for this pack. JEI replaces it. JER (loot, worldgen,
villager trades) and JEED (potion-effect descriptions) cover the extras EMI provided.

### Recipe overhaul (#62)
- Tech, gear, and machines route through Create, gated by complexity: everyday gear takes a single Create
  part, while endgame machines such as the MFFS force-field gear are assembled on the Mechanical Crafters
  through sequenced assembly. Affected mods include Immersive Armors, Samurai Dynasty, Modular Golems,
  Northstar, MFFS, SecurityCraft, Drones, Traveler's Backpack, the MineColonies quarries, and gliders.
- Steel and bronze are produced through Create at the source. The iron-to-steel blasting and MFFS smelt
  shortcuts were removed; steel now comes from Create Ironworks, TFMG, or Big Cannons.
- Decoration and kitchenware are included: Macaw's metal doors and windows, Supplementaries metal decoration,
  and Farmer's Delight cooking gear use Create-pressed sheets at comparable cost.
- Orphan worldgen materials (Quark stones, Create Nuclear autunite, TFMG asphalt) gained a Create use rather
  than dead-ending.
- The joke "bible" item is now a Totem-of-Undying-gated holy book, and Meadow cheese converts to and from
  Create cheese.

### Material unification
Duplicate metals from different mods are collapsed to one item each via almost-unified: steel and bronze to
Create Ironworks, lead and cast iron to TFMG, and pasta to Farmer's Delight. Note that Galosphere's "silver"
is its palladium under a legacy id, and is intentionally left out of silver unification.

### Curation and spawns (#88)
- Removed: Arphex, Creeper Overhaul, Mutant Monsters, and the orphaned Sophisticated Core library.
- Spawn control through In Control!: Grimoire of Gaia kobolds no longer spawn naturally (the Kobolds mod
  covers that role and inherits the drops), Rotten Creatures spawn only inside structures, and Mutants and
  Zombies spawn only during blood moons.
- Added: Create Aeronautics Dyeable Components, Create Stuff 'N Additions with its Sable and Aeronautics
  compat, furniture/Create/Sable compatibility, and Sable Collision Damage.

### Infrastructure
- A recipe-connectivity tool (tools/recipe-graph/) measures how connected the pack's recipes are, with an
  interactive map regenerated by CI.
- Added the five-systems design docs and roadmap, the recipe conventions, the website releases page, and CI
  checks on every pull request (packwiz index freshness, manifest lint, automatic conflict resolution).

### Open after 0.5.0
Spawn-gating observation (#108) and the modded-structure allowlist (#106), the magic-mod weave (#75 and #80),
the ore-generation model decision (#93), and functional-duplicate parts such as heavy_plate versus steel
sheet (#103).

## 0.4.6 — World Generation

> **Headline:** this release makes custom ore generation actually work. **0.4.4 and 0.4.5
> crash the moment you click _Create New World_** (a malformed worldgen file aborts the whole
> registry load) — 0.4.6 fixes that and ships the full GregTech-style ore layer. Worldgen only
> affects **newly generated chunks**: use a fresh world or explore unloaded terrain to see it.

### Critical fixes (0.4.5 could not create worlds)
- **Fixed world-creation crash** from biome modifiers that listed multiple biome tags in a JSON
  array (`"biomes": ["#tag", "#tag"]`). That form is invalid for a HolderSet and failed registry
  load with `Failed to load registries`. All 21 veins now resolve their biomes through proper
  custom biome **tags** (`#pcmc:vein_<ore>`).
- **Fixed second world-creation crash** (`Unbound values … [minecraft:ore_copper, minecraft:ore_diamond]`):
  the copper/diamond vanilla-thinning files pointed at configured features that don't exist in 1.21
  (the real names are `ore_copper_small` / `ore_diamond_small`).

### Ore generation — the system
GregTech-style economy: **rare, large, biome-specific veins** so regions specialize and trade
matters, with vanilla ore **thinned to a starter trickle** so new players aren't hard-stuck.

- **21 modded + vanilla ores veined**, each as a configured feature (the ore body, size 16–48 vs
  vanilla's ~8), a placed feature (depth + rarity), and a biome modifier keyed to a biome tag:
  coal, iron, copper, gold, redstone, lapis, diamond, emerald, zinc, thorium, magnetite, silver,
  uranium, lead, lithium, nickel, jade, tin, salt, mithril, **palladium**.
- **Vanilla ore thinned** (rarity 12–16, iron's small vein at 6) — a deliberate scarce baseline
  near spawn; veins are the real supply.
- **Mod default ore gen disabled** so our veins are the only overworld source. Shadowed with
  `neoforge:none`: Create zinc; Create: New Age thorium + magnetite; Occultism silver (+deepslate);
  Create: Nuclear uranium + lead; TFMG lead/lithium/nickel; Create: Ironworks tin (+ raw-tin
  deposits); irons_spellbooks mithril; samurai_dynasty jade; expandeddelight salt.

### Underground findability (3D biomes)
MC 1.21 biomes are 3D — underground is mostly **cave biomes** (vanilla dripstone/lush/deep_dark
plus Terralith/Galosphere/Northstar/Quark, pooled in `#c:is_underground`), which our surface-keyed
veins didn't cover, so caving turned up almost nothing. **Every vein tag now also includes the cave
biomes**, so veins are findable wherever you mine. _Trade-off under review_ (issue #58): cave pockets
are currently region-agnostic.

### New / changed ores this release
- **Palladium (Galosphere)** — added a rare, regional vein (mountains + dripstone + deep_dark,
  `chance 14`, deliberately **not** in the global cave coverage — it's the prestige exception). Also
  **stopped Galosphere's default palladium flood**: 1.5.x renamed *Silver → Palladium* but kept the
  old `ore_silver_*` feature IDs, so it was dumping small palladium blobs into every overworld biome —
  now disabled (the large crystal-canyons deposit is left as a regional bonus).
- **Born in Chaos infected diamond** — disabled its all-biome overworld injection so diamonds come
  only from the regional diamond vein + thinned vanilla. No replacement vein (by design).

### Still open (needs zagwar — see issue #58)
- Rarity/size pass — current numbers are a first cut.
- Regionality model — keep "findable everywhere," go strict-regional, or hybrid.

### Other
- Editor: removed the server `WriteTimeout` so long operations (build, batch-add, version checks)
  no longer fail with `i/o timeout`. _(Shipped in 0.4.5; noted here for completeness.)_
- `docs/ORE-GENERATION.md` expanded: HolderSet array-vs-tag gotcha, 3D/cave-biome notes, the
  shadow table, and per-ore decisions.

---

## 0.4.5 — TaCZ × Create guns + tooling

### Gun integration (Timeless & Classics × Create)
- **Stock TaCZ guns removed** — the pack is **Armorer-only**: vanilla TaCZ default guns are stripped
  (via KubeJS recipe removal, after the config route proved unreliable) so firearms come exclusively
  through the Create-integrated path.
- **All Immersive TaCZ recipes re-authored to the Create 6.0.10 schema** and routed through the
  Create **Armorer / gun smith table**, requiring Create + Immersive components (with an EMI-visible
  fallback). Recipe difficulty bumped **+2–3 notches** to fit progression.
- Added `create-immersive-tacz-integration` and the `create-armorer` pack (shipped as a native TaCZ
  pack rather than `kubejs/data`).

### Tooling / infrastructure
- **Editor:** removed the server `WriteTimeout`, so long operations (build, batch-add, version
  checks) no longer die with `write tcp …: i/o timeout`.
- **CI ground-truth digest:** new workflow + extractor that indexes every mod's real block/ore IDs,
  biome modifiers, tags, recipes, and loot tables into `tools/mod-data/`. This is what let later
  worldgen work verify IDs from the jars instead of guessing (e.g. catching the Galosphere
  Silver→Palladium rename).

---

## 0.4.4 — Eco-foundation: ore generation + Blockchain gating (PR #56)

> ⚠️ **Shipped broken** — this release introduced the ore-gen layer but a malformed worldgen file
> crashes world creation. **Do not use 0.4.4/0.4.5 for new worlds; use 0.4.6.** Documented here
> because the original notes were bare-bones.

### Ore generation — first cut
- Introduced the whole **GregTech-style vein system**: rare, large, biome-specific veins for **16
  modded + vanilla ores** (configured feature + placed feature + biome modifier each), with vanilla
  ore **thinned to a starter trickle**.
- **Disabled mods' default `#is_overworld` ore gen** via `neoforge:none` shadows so the veins are the
  intended source — Create zinc, Create: New Age thorium + magnetite, Occultism silver (+deepslate),
  Create: Nuclear uranium + lead, TFMG lead/lithium/nickel, Create: Ironworks tin, samurai_dynasty
  jade, irons_spellbooks mithril, expandeddelight salt. Let's Do Meadow alpine ores left regional.
- Modded ore IDs and biome-modifier override paths verified against the mod jars.
- _(Known issue, fixed in 0.4.6: the biome modifiers used an invalid tag-in-array form and crashed
  world creation; copper/diamond thinning referenced nonexistent configured features.)_

### Create: Blockchain gating
- **Currency Miner re-tuned into a slow sink, not a printer:** "Cost per Coin" gated to ~**10×**
  energy with a steep global ramp (`config/createblockchain-common.toml`), so minting currency is an
  expensive late-game activity rather than an early exploit.

### Project
- Added `CLAUDE.md` (repo/agent guidance) and `docs/ORE-GENERATION.md` (design + per-ore tables).
