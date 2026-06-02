# Derpack X — Roadmap (multi-phase)

> Living roadmap for the build-out. **Goal:** a cooperative PvPvE Create pack for a small crew (~10)
> where every mod earns its place by anchoring to one of **five systems — Create, magic, economy,
> aeronautics, survival** — or it's cut; scarcity drives emergent (not forced) trade, and complex
> tech unlocks via MineColonies or boss drops. See `docs/DESIGN.md` ("the goal — five systems") and
> `docs/RECIPES.md` (lands with #62).
>
> **Standing caveat:** the dev sandbox is **headless** — everything below is authored + structurally
> validated (JSON valid, JS syntax OK); **an in-game playtest is required before any of it merges**
> (JEI/EMI shows the new recipes/veins, originals gone, no errors in the log).

**Status:** ✅ done & on `main` · 🟦 in review (open PR) · 🚧 in progress · ⏳ queued · 💤 not started

## Where the work lives (important)
A fresh clone of `main` now has Phase 0 + Phase 1 ore-gen (#56) + Phase 2 guns (#55) + the design/goal
docs (#61) + `pr-checks.yml` + the ground-truth digest. The **open** work lives in these PR branches.
**Merge order:** the index-touching trio **#62 → #88 → #82** serialize on `index.toml`/`pack.toml` (the auto-resolver re-refreshes between each). **#75** lands right after #62 (stacked on it). **#80** compiles standalone but its magic bridges are **feature-dependent on #62/#75** — land it *with* the magic layer, not before.

| PR | Branch | Holds |
|---|---|---|
| **#62** | `claude/recipe-overhaul` | Phase 3 recipes through Create (carries `docs/RECIPES.md` + the digest) |
| **#75** | `claude/magic-web` | Magic-web v2 KubeJS bridges — **stacked on #62** (re-sync + retarget to `main` when #62 lands) |
| **#80** | `claude/arcana-mod` | Derpack Arcana code-bridge mod (skeleton, `mods-src/`) — index-isolated, but **feature-dependent on #62/#75**; land with the magic layer |
| **#82** | `claude/trusting-heisenberg-cbWYb` | GTMOGS ore-gen rework — **gated** on #81 + the #93 model decision |
| **#88** | `claude/awesome-brown-s4bBD` | Curation pass (#83): mob cuts + In Control! + spawn gating (absorbed #86) |

## Phases

### Phase 0 — Tooling & ground truth ✅ (on `main`)
packwiz pack + editor + build CI. **Ground-truth digest** at `tools/mod-data/` (facts + recipe +
loot indexes for 356 mods) via **Actions ▸ "Ground-truth digest"** — re-run after modlist changes.

### Phase 1 — Eco foundation: ore-gen + scarcity ✅ on `main` (#56) · ⚠️ model under review
The **#56 per-ore model is on `main`**: 20 ores as large/rare/biome-specific veins, vanilla thinned to
a starter trickle, each mod's default gen shadowed with `neoforge:none` (`docs/ORE-GENERATION.md`).
- **Open decision (#93):** PR **#82** proposes replacing this with **GregTech-style GTMOGS mix veins**
  *and* removing the vanilla trickle entirely (→ couples to **#81** early-game bootstrap). Decide which
  model ships v1 before tuning further.
- **Playtest #58** tunes rarity/regionality for whichever model wins. Meme removals moved to #21/#60.

### Phase 2 — Guns / combat ✅ on `main` (#55, #59 done)
TaCZ + **Create: Immersive TaCZ** (Create recipes) + **Create: Armorer** gunpack (replaces the dead
`tacz-create`; #27 closed) + Create Big Cannons. Merged and playtested.
- **Later:** gun→Create recipe polish + gun loot (#17/#18).

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

### Phase 5 — Economy (Numismatics) 💤 #90
Coin values (runtime config), Vendors + pricing (in-world), Trading Floor (villager/emerald side),
**Bountiful** bounties, and **wiring the inputs** (mob drops / structure loot → sellables + bounties).
Blockchain Currency Miner already gated. The five systems' **highest-leverage, thinnest-in-integration**
pillar — tracked in **#90**.

### Phase 6 — Curation & de-dup 🟦 #88 (#83, #94, #21 — see `docs/MODLIST-AUDIT.md`)
Mob/boss + duplicate-mechanic curation (**#83**, executed in PR **#88**): clean cuts (arphex,
creeper-overhaul, mutant-monsters, orphan sophisticated-core), In Control! spawn-gating, kobold swap.
**#94** carries the follow-up misfits (fishing-real/companion cuts, the `create-storage`↔Traveler's
backpack dup, a third Spice-of-Life fork). Sort #38 handled; trees/moons re-scoped per #83.
MineColonies is **settled** as a woven progression on-ramp (**#92** wires the tech-gating).

### Phase 7 — Stability & QoL 💤 (needs a live server)
RAM/GC #48 · flight interactions #43 · inventory sort #38 · claims #25 · shaders caveat #1 ·
render distance #2 · purple-arrows bug #3. (TPS audit #42 resolved — fixed in v0.3.5/0.3.6.)

### Phase 8 — CI / merge-gating ✅ (`pr-checks.yml`)
PR-triggered checks now gate merges: packwiz index freshness, manifest lint (incl. the `pin`
gotcha), KubeJS JS/JSON + config TOML parse, and Go build/vet for the editor + site. Full rundown
and how to mark them **required** in `docs/CI-CHECKS.md`. Also dropped the bloated `.mrpack` release
artifact (#73). **Open (#79):** flip the checks to *required* on `main` via a branch-protection ruleset.

## Needed for release

The small set that gates the next milestone release (tagged `needed-for-release`). Everything else is
post-release polish or ongoing curation.

- [ ] **Ore-gen model decided & verified** — **#93** (pick #56-on-main vs #82-GTMOGS) → then #58 playtest
  (+ #81 bootstrap if #82 wins). Phase 1.
- [ ] **Create recipe spine landed** — #17 / PR #62 enough per-mod passes that "made through Create"
  is real, not a stub. Phase 3.
- [ ] **Pack renamed** — #78 (decide the name before players have instances named "Derpack X").
- [ ] **CI required on `main`** — #79 (turn on the `pr-checks.yml` ruleset; Phase 8 / `docs/CI-CHECKS.md`).
- [x] **Design/goal docs merged** — PR #61 on `main`; the five-systems direction is canon.
- [x] **Release artifacts sane** — `.mrpack` dropped; Prism installer is the single ~5 MB artifact (#73).

**Explicit non-goals** (don't let these creep onto the release path): a server-pack artifact,
NeoForge auto-bump, bundled-jar distribution — all deliberately out, see `docs/DESIGN.md`.

## Open-issue triage

The open issues, categorized. `NFR` = needed-for-release. Living trackers (#9/#17/#18/#21) stay open
by design. See `docs/MODLIST-AUDIT.md` for the curation detail behind the Phase 6 rows.

| # | Title | Area | Phase | NFR | Status / next |
|---|---|---|---|:---:|---|
| #93 | Decide v1 ore-gen model (#56 vs #82) | worldgen | 1 | ✅ | **decision** — gates #58 / #82 / #81 |
| #58 | Ore-gen playtest + rarity/regionality | worldgen | 1 | ✅ | playtest (for whichever #93 picks) |
| #78 | Rename the pack | meta | — | ✅ | decide name w/ zagwar before release |
| #79 | Require CI on `main` (branch protection) | tooling-ci | 8 | ✅ | one-time admin ruleset toggle |
| #81 | Early-game ore bootstrap (trickle removed) | worldgen | 1 | (✅ if #82) | depends on the #93 decision |
| #90 | Economy pillar build-out | economy | 5 | — | highest-leverage integration; wire inputs |
| #91 | Survival & seasons integration | survival | — | — | seasons × SoL × cold-sweat; 3 SoL forks |
| #92 | MineColonies / boss tech-gating | gameplay | 6 | — | the progression on-ramp |
| #94 | Modlist misfit follow-up | curation | 6 | — | un-anchored mods + new dup clusters |
| #83 | Curation: mob/boss + duplicates | curation | 6 | — | decisions; executed in PR #88 |
| #84 | Make Create + Aeronautics harder | gameplay | 3 | — | KubeJS difficulty; coordinate w/ #62 |
| #87 | Create Stuff'N Additions balance | gameplay | 6 | — | jetpack dup vs Create Jetpack; after #88 |
| #77 | Player issue submission via the site | site | — | — | Discord webhook first |
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

**Recently closed/merged:** #42 (TPS audit) · #73 (`.mrpack` drop) · #45 (meme cull) · #55/#59 (guns) ·
#56 (ore-gen, on `main`) · #57/#63/#65 (digest/worldgen) · #61 (design docs) · #76/#85/#89 (CI +
auto-resolver + workflow docs) · #86 (→ #88).

## Cross-cutting notes
- **Verification gates everything** — headless can't validate KubeJS/worldgen; playtest per phase.
- **Design docs** (DESIGN five-systems goal, CLAUDE north-star, MODLIST-AUDIT) are **merged** (#61) — the five-systems direction is canon on `main`.
- **Network:** sandbox reaches GitHub only (not Modrinth/CF); jar ground truth comes via the digest or hand-uploads.
- **Duplicate *items*** (lead/silver/tin/steel ×N) are auto-collapsed by `almost-unified` + `polymorph`.
