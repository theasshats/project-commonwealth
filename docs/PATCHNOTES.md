# Derpack X — Patch Notes

<!-- Style: professional, plain prose. No decorative emoji, sparing bold, no hype. Each release:
     "## X.Y.Z — Theme (diff vs prev)", a short lead paragraph, then sections (see CLAUDE.md). -->

## 0.5.1 — Ore Veins (diff vs 0.5.0)

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

## 0.5.0 — Made Through Create (diff vs 0.4.6)

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

## 0.4.6 — World Generation (diff vs 0.4.5)

> **Headline:** this release makes custom ore generation actually work. **0.4.4 and 0.4.5
> crash the moment you click _Create New World_** (a malformed worldgen file aborts the whole
> registry load) — 0.4.6 fixes that and ships the full GregTech-style ore layer. Worldgen only
> affects **newly generated chunks**: use a fresh world or explore unloaded terrain to see it.

### Critical fixes (0.4.5 could not create worlds)
- **Fixed world-creation crash** from biome modifiers that listed multiple biome tags in a JSON
  array (`"biomes": ["#tag", "#tag"]`). That form is invalid for a HolderSet and failed registry
  load with `Failed to load registries`. All 21 veins now resolve their biomes through proper
  custom biome **tags** (`#derpack:vein_<ore>`).
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
