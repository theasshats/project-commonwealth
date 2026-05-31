# Derpack X — Roadmap (multi-phase)

> Living roadmap for the Create-economy build-out. **Vision:** a broad kitchen-sink survival pack
> unified by a **Create-driven scarcity economy that penetrates every branch** — see
> `docs/DESIGN.md` ("the design spine") and `docs/RECIPES.md`.
>
> **Standing caveat:** the dev sandbox is **headless** — everything below is authored + structurally
> validated (JSON valid, JS syntax OK); **an in-game playtest is required before any of it merges**
> (JEI/EMI shows the new recipes/veins, originals gone, no errors in the log).

**Status:** ✅ done & on `main` · 🟦 in review (open PR) · 🚧 in progress · ⏳ queued · 💤 not started

## Where the work lives (important)
Most current work is in **open PR branches, *not* `main`** — a fresh clone of `main` has only Phase 0
plus the older worldgen. `git fetch` and check out the relevant branch to continue.

| PR | Branch | Holds |
|---|---|---|
| **#62** | `claude/recipe-overhaul` | Phase 3 recipes — **also the only branch you need for recipe work** (carries the digest) |
| **#56** | `claude/eco-ore-gen` | Phase 1 ore-gen (20 veins, blockchain gate, verified `ORE-GENERATION.md`) |
| **#55** | `claude/tacz-create-integration` | Phase 2 guns |
| **#61** | `claude/modlist-audit` | design-spine docs + `MODLIST-AUDIT.md` (held for zagwar) |

## Phases

### Phase 0 — Tooling & ground truth ✅ (on `main`)
packwiz pack + editor + build CI. **Ground-truth digest** at `tools/mod-data/` (facts + recipe +
loot indexes for 354 mods) via **Actions ▸ "Ground-truth digest"** — re-run after modlist changes.

### Phase 1 — Eco foundation: ore-gen + scarcity 🟦 #56 · 🚧 curation
20 ores as large/rare/biome-specific veins; vanilla thinned to a starter trickle; each mod's default
gen shadowed with `neoforge:none`; modded ore IDs verified. (`docs/ORE-GENERATION.md`.)
- **Open:** collaborator tunes the biome/size/rarity table · **playtest #58** · **curation #45** —
  meme removals (`staaaaaaaaaaaack`, `mmmmmmmmmmmm`, `brazil-legends`, pipe-bombs, umapyoi #60) not yet executed.

### Phase 2 — Guns / combat 🟦 #55
TaCZ + **Create: Immersive TaCZ** (Create recipes) + **Create: Armorer** gunpack (replaces the dead
`tacz-create`; #27 closed) + Create Big Cannons.
- **Open:** mirror `create_armorer-1.2.0.1.zip` to the `mod-mirror` release · **playtest #59** ·
  later: gun→Create recipe polish + gun loot (#17/#18).

### Phase 3 — Recipe overhaul: "made through Create" 🚧 #62
Route crafting through Create **parts + methods**; **not a grind** (`docs/RECIPES.md` = convention,
palette, guardrails). Each swap keeps the original as an `orig:` comment; per-pass rationale in #62's comments.
- **Done:** convention/scaffold · **metals foundation** (steel → Create, auto-propagates via
  `#c:ingots/steel`) · Immersive Armors · Samurai Dynasty.
- **Next:** continue per-mod from the digest (Modular Golems → Northstar → magic → storage …) ·
  decide the flagged `occultengineering` brass alt-path. Tracks #17.

### Phase 4 — Loot pass ⏳ (#18)
`lootjs` + the loot index: pull structure/dungeon loot back from free end-game gear; optionally seed
Numismatics coins. Not started.

### Phase 5 — Economy (Numismatics) 💤
Coin values (runtime config), Vendors + pricing (in-world), Trading Floor (villager/emerald side).
Blockchain Currency Miner already gated (config on #56). Mostly in-world + config — needs the
generated config TOMLs (upload-based; the digest can't capture runtime configs).

### Phase 6 — Curation & de-dup 💤 (#45, #21 — see `docs/MODLIST-AUDIT.md`)
Execute meme removals; resolve duplicate **mechanics** (sort #38, accessory API, tree-growth, moon
events, spice-of-life, backpacks, afk); **decide MineColonies auto-production gating** (the big open call).

### Phase 7 — Stability & QoL 💤 (needs a live server)
TPS/spark #42 · RAM/GC #48 · flight interactions #43 · inventory sort #38 · claims #25 ·
shaders caveat #1 · render distance #2 · purple-arrows bug #3.

## Cross-cutting notes
- **Verification gates everything** — headless can't validate KubeJS/worldgen; playtest per phase.
- **Design docs** (DESIGN spine, CLAUDE north-star, MODLIST-AUDIT) are pending in **#61** (zagwar review).
- **Network:** sandbox reaches GitHub only (not Modrinth/CF); jar ground truth comes via the digest or hand-uploads.
- **Duplicate *items*** (lead/silver/tin/steel ×N) are auto-collapsed by `almost-unified` + `polymorph`.
