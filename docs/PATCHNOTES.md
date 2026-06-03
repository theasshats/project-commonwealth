# Derpack X — Patch Notes

## 0.5.0 — Made Through Create (diff vs 0.4.6)

> **Headline:** the big one — **crafting across the whole pack now flows through Create.** Tech, gear,
> machines, and a lot of decoration are re-routed through Create **parts** (sheets, casings, mechanisms)
> and **methods** (pressing, mixing, sequenced assembly), so the Create spine actually *connects* the pack
> instead of 350 mods sitting side by side. Two things you'll notice immediately: the **recipe viewer is now
> JEI** (was EMI), and a **mob/spawn curation pass**. Recipe changes apply to new crafts right away — no
> world reset needed.

### ⚠️ Heads-up: recipe viewer is now JEI (was EMI)
EMI **can't display Create's processing recipes** on 1.21.1 (pressing/mixing/deploying showed "no recipe" —
even for base Create items), which is fatal for a Create pack. Switched to **JEI**, with **JER** (loot /
worldgen / villager trades) and **JEED** (potion-effect info) restoring EMI's extras. Re-check your
recipe-lookup keybind if it feels off.

### ⚙️ "Made through Create" — the recipe overhaul (#62)
- **Tech / gear / machines routed through Create**, gated by *complexity*: everyday gear gets one light part;
  endgame machines (MFFS force-field gear, …) are **staged on the Mechanical Crafters** via sequenced
  assembly. Covers Immersive Armors, Samurai Dynasty, Modular Golems, Northstar, MFFS, SecurityCraft, Drones,
  Traveler's Backpack, MineColonies quarries, gliders, and more — originals kept where coherent, never a grind.
- **Steel/bronze are Create-made at the source** — the iron→steel blasting and MFFS smelt shortcuts are gone;
  steel comes from Create Ironworks / TFMG / Big Cannons.
- **Decoration & kitchenware woven in** — Macaw's metal doors & windows, Supplementaries metal decoration, and
  Farmer's Delight cooking gear now use Create-pressed sheets (cost-neutral). Macaw metal doors get an
  andesite-alloy accent.
- **Worldgen leftovers bridged** — orphan stones (Quark, Create Nuclear autunite, TFMG asphalt) now have a
  Create use so they're not dead-ends.
- **Flavor:** the meme "bible" is now a Totem-of-Undying-gated holy book; Meadow cheese ⇄ Create cheese bridge.

### 🔗 One of each metal (material unification)
No more six near-identical "steel ingots" cluttering the recipe viewer. **almost-unified** now collapses
duplicate metals to a single canonical item each — **steel & bronze → Create: Ironworks**, **lead & cast iron
→ TFMG** — plus **pasta → Farmer's Delight**. (Heads-up for tinkerers: Galosphere's "silver" is actually its
*palladium* under a legacy id — intentionally left out of silver unification.)

### 🧹 Curation & spawns (#88)
- **Removed:** Arphex, Creeper Overhaul, Mutant Monsters (+ the orphaned Sophisticated Core lib).
- **Spawn gating via In Control!:** Grimoire of Gaia **kobolds no longer spawn naturally** (the standalone
  **Kobolds** mod fills that niche and inherits GoG's drops); **Rotten Creatures** spawn **only in structures**;
  **Mutants & Zombies** are gated to **(super) blood moons** only.
- **Added (aeronautics / furniture):** Create Aeronautics Dyeable Components, Create Stuff 'N Additions
  (+ Sable & Aeronautics compat), furniture × Create/Sable compat, Sable Collision Damage.

### 🔧 Under the hood
- **Connectivity tooling** (`tools/recipe-graph/`) — an interactive map + metric for "how woven-together is
  the pack?", driving the weave work (and CI-regenerated).
- **Design canon & infra** — the five-systems direction + roadmap, recipe conventions, the player website's
  **releases page**, and CI that gates every PR (packwiz index freshness, manifest lint, auto-conflict-resolve).

### 📋 Still open (tracked for after 0.5.0)
- In-game spawn-gating observation (#108) + modded-structure allowlist (#106); the **magic-mod weave**
  (#75 / #80); the ore-gen model decision (#93); functional-duplicate parts like heavy_plate vs steel sheet (#103).

## 0.4.6 — World Generation (diff vs 0.4.5)

> **Headline:** this release makes custom ore generation actually work. **0.4.4 and 0.4.5
> crash the moment you click _Create New World_** (a malformed worldgen file aborts the whole
> registry load) — 0.4.6 fixes that and ships the full GregTech-style ore layer. Worldgen only
> affects **newly generated chunks**: use a fresh world or explore unloaded terrain to see it.

### 🩹 Critical fixes (0.4.5 could not create worlds)
- **Fixed world-creation crash** from biome modifiers that listed multiple biome tags in a JSON
  array (`"biomes": ["#tag", "#tag"]`). That form is invalid for a HolderSet and failed registry
  load with `Failed to load registries`. All 21 veins now resolve their biomes through proper
  custom biome **tags** (`#derpack:vein_<ore>`).
- **Fixed second world-creation crash** (`Unbound values … [minecraft:ore_copper, minecraft:ore_diamond]`):
  the copper/diamond vanilla-thinning files pointed at configured features that don't exist in 1.21
  (the real names are `ore_copper_small` / `ore_diamond_small`).

### ⛏️ Ore generation — the system
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

### 🕳️ Underground findability (3D biomes)
MC 1.21 biomes are 3D — underground is mostly **cave biomes** (vanilla dripstone/lush/deep_dark
plus Terralith/Galosphere/Northstar/Quark, pooled in `#c:is_underground`), which our surface-keyed
veins didn't cover, so caving turned up almost nothing. **Every vein tag now also includes the cave
biomes**, so veins are findable wherever you mine. _Trade-off under review_ (issue #58): cave pockets
are currently region-agnostic.

### 🆕 New / changed ores this release
- **Palladium (Galosphere)** — added a rare, regional vein (mountains + dripstone + deep_dark,
  `chance 14`, deliberately **not** in the global cave coverage — it's the prestige exception). Also
  **stopped Galosphere's default palladium flood**: 1.5.x renamed *Silver → Palladium* but kept the
  old `ore_silver_*` feature IDs, so it was dumping small palladium blobs into every overworld biome —
  now disabled (the large crystal-canyons deposit is left as a regional bonus).
- **Born in Chaos infected diamond** — disabled its all-biome overworld injection so diamonds come
  only from the regional diamond vein + thinned vanilla. No replacement vein (by design).

### 📋 Still open (needs zagwar — see issue #58)
- Rarity/size pass — current numbers are a first cut.
- Regionality model — keep "findable everywhere," go strict-regional, or hybrid.

### 🔧 Other
- Editor: removed the server `WriteTimeout` so long operations (build, batch-add, version checks)
  no longer fail with `i/o timeout`. _(Shipped in 0.4.5; noted here for completeness.)_
- `docs/ORE-GENERATION.md` expanded: HolderSet array-vs-tag gotcha, 3D/cave-biome notes, the
  shadow table, and per-ore decisions.

---

## 0.4.5 — TaCZ × Create guns + tooling

### 🔫 Gun integration (Timeless & Classics × Create)
- **Stock TaCZ guns removed** — the pack is **Armorer-only**: vanilla TaCZ default guns are stripped
  (via KubeJS recipe removal, after the config route proved unreliable) so firearms come exclusively
  through the Create-integrated path.
- **All Immersive TaCZ recipes re-authored to the Create 6.0.10 schema** and routed through the
  Create **Armorer / gun smith table**, requiring Create + Immersive components (with an EMI-visible
  fallback). Recipe difficulty bumped **+2–3 notches** to fit progression.
- Added `create-immersive-tacz-integration` and the `create-armorer` pack (shipped as a native TaCZ
  pack rather than `kubejs/data`).

### 🛠️ Tooling / infrastructure
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

### ⛏️ Ore generation — first cut
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

### 🪙 Create: Blockchain gating
- **Currency Miner re-tuned into a slow sink, not a printer:** "Cost per Coin" gated to ~**10×**
  energy with a steep global ramp (`config/createblockchain-common.toml`), so minting currency is an
  expensive late-game activity rather than an early exploit.

### 🧭 Project
- Added `CLAUDE.md` (repo/agent guidance) and `docs/ORE-GENERATION.md` (design + per-ore tables).
