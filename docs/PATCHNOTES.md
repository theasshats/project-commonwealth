# Derpack X — Patch Notes

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
