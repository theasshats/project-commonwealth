# Mining hunger — block-breaking costs food

> **Status: trial, pending in-game verification.** A KubeJS mechanic, not a mod. Lives in
> `kubejs/server_scripts/mining-hunger.js`; all numbers are tunable at the top of that file.

## What it does

Breaking a solid block makes the player hungrier. The cost is per-block and scales with a
"weight" tier, so the rate depends on what you break:

| Tier | Weight | Blocks per full hunger bar | Examples |
|------|--------|----------------------------|----------|
| Free | 0.0 | ∞ (no cost) | torches, crops, flowers, saplings, redstone wire, leaves, carpets, signs |
| Light | 0.5 | ~200 | planks, wool, glass, sand, gravel, ice |
| Normal | 1.0 | **100** | stone, dirt, concrete, bricks, terracotta, **logs/wood/stems** |
| Heavy | 1.6 | ~62 | ores, obsidian, deepslate, basalt, anvils |
| Very heavy | 2.2 | ~45 | solid metal/storage blocks (iron/gold/…), netherite, ancient debris |

The **100 blocks per bar** target sets the Normal tier; the others scale off it.

### How the rate is set

Minecraft drains 1 food point per **4.0 exhaustion**, and a full hunger bar is 20 food
points (= 80 exhaustion). The script adds `EXHAUSTION_PER_WEIGHT × weight` per block.
With `EXHAUSTION_PER_WEIGHT = 0.8`, a Normal block costs 0.8 exhaustion, so 100 of them
drain a full bar. Saturation absorbs the first hits (as it does for any exhaustion), so a
well-fed player sees the bar start dropping only once saturation is gone — same as sprinting
or jumping.

### What does **not** cost hunger

- **Creative / spectator** players.
- **No-player breaks** — Create drills and other contraption miners, TNT, fire, pistons,
  endermen, etc. The event only charges when `event.player` is present, so automated mining
  is unaffected (it remains a reason to *build* the Create spine rather than hand-mine).
- **Free-tier blocks** (see table). The "lighter blocks excluded" rule is what makes this
  livable: routine torch/crop/foliage work never touches your food bar.

## The Create: Aeronautics tie-in

The weight tiers **mirror the Create: Aeronautics mass ranking**. In Aeronautics every block
carries a *physics value* "mass" (in kpg) used to compute how heavy a contraption is — oak
planks are ~0.5 kpg, stone and dirt are heavier, metal and ore are heaviest, and unspecified
blocks fall back to defaults. The hunger tiers are chosen to track that same ranking by
material category: **the heavier a block is to fly, the heavier it is to mine.** That ties
this Survival-pressure mechanic to the Economy/aeronautics arm thematically — material that
weighs down an airship also weighs on the body that hauls it.

### Why mirror it instead of reading it live

The honest tie-in is a *parallel* ranking, not a live lookup. Aeronautics resolves block mass
internally from datapack physics-value JSON (plus its defaults), and exposes **no stable,
KubeJS-readable API** for "the resolved mass of block X." A runtime read would be fragile and
couldn't be verified in the build sandbox (which can't launch the game). Mirroring the tiers
in a plain, tunable table is robust, readable, and easy for maintainers to rebalance.

**Future tightening (optional):** if a later Aeronautics version exposes resolved per-block
mass to scripts, `hungerWeight()` could be swapped to read it directly (mass → exhaustion via
a single scale constant), collapsing the tier table into a continuous function. Until then the
table is the source of truth, and any new heavy/light material just needs a line in the
relevant list in `mining-hunger.js`.

## Where it sits in the systems loop

Survival pillar (pressure). Per `docs/SYSTEMS.md`, survival pressure *creates demand* that
pulls on production and the food economy. A metabolic cost on mining means large builds and
ore runs consume food, which raises demand for the diet system's varied nutrition — feeding
the loop rather than sitting as standalone flavor. Its second weave is the Aeronautics/Economy
coupling above (the weight ranking), so it anchors to two systems, not one.

## Tuning

Everything is at the top of `kubejs/server_scripts/mining-hunger.js`:

- **Overall harshness** — `EXHAUSTION_PER_WEIGHT`. Lower it to make all mining cheaper
  (e.g. 0.4 → 200 blocks/bar for Normal); raise it to bite harder.
- **Per-tier multipliers** — `W_LIGHT` / `W_NORMAL` / `W_HEAVY` / `W_VHEAVY`.
- **What lands in each tier** — the `FREE_*`, `LIGHT_*`, `HEAVY_*`, `METALS`, `VHEAVY_*`
  lists. The `METALS` list catches modded `<metal>_block` storage blocks generically; add a
  metal name there and every mod's block of it becomes very-heavy automatically.

Classification is by block-id pattern (collision-checked), with a `try/catch` that defaults to
Normal so a bad id can never break block-breaking. After playtest, expect to nudge the lists
(it's a first cut) — the obvious candidates are blocks that "feel" mis-tiered in practice.
