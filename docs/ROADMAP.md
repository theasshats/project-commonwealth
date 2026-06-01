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
RAM/GC #48 · flight interactions #43 · inventory sort #38 · claims #25 · shaders caveat #1 ·
render distance #2 · purple-arrows bug #3. (TPS audit #42 resolved — fixed in v0.3.5/0.3.6.)

### Phase 8 — CI / merge-gating ✅ (`pr-checks.yml`)
PR-triggered checks now gate merges: packwiz index freshness, manifest lint (incl. the `pin`
gotcha), KubeJS JS/JSON + config TOML parse, and Go build/vet for the editor + site. Full rundown
and how to mark them **required** in `docs/CI-CHECKS.md`. Also dropped the bloated `.mrpack` release
artifact (#73). **Open:** flip the checks to *required* on `main` via a branch-protection ruleset.

## Needed for release

The small set that gates the next milestone release (tagged `needed-for-release`). Everything else is
post-release polish or ongoing curation.

- [ ] **Ore-gen verified & tuned** — #58 (playtest + the rarity/regionality call). Phase 1.
- [ ] **Create recipe spine landed** — #17 / PR #62 enough per-mod passes that "made through Create"
  is real, not a stub. Phase 3.
- [ ] **Design spine docs merged** — PR #61 (DESIGN spine, CLAUDE north-star, MODLIST-AUDIT) settled
  with zagwar and on `main`, so the direction is canon.
- [ ] **CI required on `main`** — turn on the `pr-checks.yml` ruleset (Phase 8 / `docs/CI-CHECKS.md`).
- [x] **Release artifacts sane** — `.mrpack` dropped; Prism installer is the single ~5 MB artifact (#73).

**Explicit non-goals** (don't let these creep onto the release path): a server-pack artifact,
NeoForge auto-bump, bundled-jar distribution — all deliberately out, see `docs/DESIGN.md`.

## Open-issue triage

Every open issue, categorized. `NFR` = needed-for-release. Living trackers (#9/#17/#18/#21) stay open
by design. See `docs/MODLIST-AUDIT.md` for the curation detail behind the Phase 6 rows.

| # | Title | Area | Phase | NFR | Status / next |
|---|---|---|---|:---:|---|
| #58 | Ore-gen playtest + rarity/regionality | worldgen | 1 | ✅ | playtest; zagwar tunes table + picks regionality model |
| #17 | Recipes to change (living) | recipes | 3 | ✅ | per-mod passes in #62; bible done, death-note needs an item id |
| #51 | Let's Do Meadow cheese recipes | content | 3 | — | done in #62 (`99-meadow-cheese.js`); playtest then close |
| #18 | Loot tables to change (living) | loot | 4 | — | `lootjs` pass; pull free end-game gear, maybe seed coins |
| #21 | Mod-removal suggestions (living) | curation | 6 | — | "~90% of guns" + memes; resolve via MODLIST-AUDIT §A |
| #60 | umapyoi keep/cut | curation | 6 | — | zagwar playtest verdict; remove manifest if cut |
| #38 | Inventory sort (IPN/mouse-tweaks) | qol | 6/7 | — | clientsort removed, invtweaks-emu added; pick sort owner, test |
| #25 | open-parties-and-claims config | content | 7 | — | config drafted (zagwar); needs a server test |
| #48 | Garbage collection / RAM | performance | 7 | — | tune on the live server; measure with spark |
| #43 | Flight-system interactions | investigation | 7 | — | playtest jetpack/glider/barrel-roll vs Aeronautics; document |
| #3 | Purple arrows in hotbar | bug | 7 | — | needs repro; identify the offending mod |
| #1 | Built-in shaders | discussion | 7 | — | Iris/Oculus break Aeronautics ships — decide ship-a-shader vs "no shaders" |
| #2 | Far-field render distance | discussion | 7 | — | evaluate a distant-horizons-style mod against TPS cost |
| #70 | Site `WEB_DIR` bind-mount | site | — | — | optional convenience; low priority |
| #9 | Mod ideas (living wishlist) | add-mod | 6 | — | keep open; pull from it as clusters are reached |
| #13 | Create: Harmonics requirements | add-mod | 6 | — | evaluate the add; low priority |
| #40 | Monitor unofficial 1.21.1 ports | maintenance | — | — | quarterly: migrate to official releases when they ship |

**Closed by this work:** #42 (TPS audit — fixed v0.3.5/0.3.6; mob-count curation continues in #21) ·
#73 (`.mrpack` dropped from `build.yml`).

## Cross-cutting notes
- **Verification gates everything** — headless can't validate KubeJS/worldgen; playtest per phase.
- **Design docs** (DESIGN spine, CLAUDE north-star, MODLIST-AUDIT) are pending in **#61** (zagwar review).
- **Network:** sandbox reaches GitHub only (not Modrinth/CF); jar ground truth comes via the digest or hand-uploads.
- **Duplicate *items*** (lead/silver/tin/steel ×N) are auto-collapsed by `almost-unified` + `polymorph`.
