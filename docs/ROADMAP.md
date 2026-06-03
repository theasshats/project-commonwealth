# Derpack X — Roadmap (multi-phase)

> Living roadmap for the build-out. **Goal:** a cooperative PvPvE Create pack for a small crew (~10)
> where every mod earns its place by anchoring to one of **five systems — Create, magic, economy,
> aeronautics, survival** — or it's cut; scarcity drives emergent (not forced) trade, and complex
> tech unlocks via MineColonies or boss drops. See `docs/DESIGN.md` ("the goal — five systems") and
> `docs/RECIPES.md` (the recipe convention + triage ledger, merged with #62).
>
> **Standing caveat:** the dev sandbox is **headless** — everything is authored + structurally
> validated (JSON valid, JS syntax OK); **an in-game playtest is required before any of it merges**
> (JEI shows the new recipes/veins, the originals are gone, no errors in the log).

**Status:** ✅ done & on `main` · 🟦 in review (open PR) · 🚧 in progress · ⏳ queued · 💤 not started

**Current release:** **v0.5.2** (Magic Web). MC **1.21.1** / NeoForge **21.1.228**.

## Where the work lives

`main` now carries **Phases 0–6**: tooling + ground-truth digest, ore-gen, guns, design docs,
`pr-checks.yml`, the **recipe overhaul (#62, v0.4.6)**, the **curation/spawn-gating pass (#88, v0.5.0)**,
the **GTMOGS ore-gen rework (#82, v0.5.1)**, and the **magic web (#75, v0.5.2)**.

**The only open PR is #80** — Derpack Arcana, the code-bridge mod (skeleton in `mods-src/`), a draft
until its P1 "Attunement Font" is ready. Everything else is now issue work, not stacked PRs.

| Release | Shipped |
|---|---|
| v0.4.6 | Recipe overhaul (#62) — "made through Create" + almost-unified dedup + EMI→JEI |
| v0.5.0 | Curation / spawn-gating (#88) — mob/boss cuts + In Control! gating + kobold swap |
| v0.5.1 | Ore veins (#82) — GTMOGS GregTech-style mix veins replace the per-ore model |
| v0.5.2 | Magic web (#75) — KubeJS bridges weaving Ars / Iron's / Occultism into the Create spine |

## Phases

### Phase 0 — Tooling & ground truth ✅ (on `main`)
packwiz pack + editor + build CI. **Ground-truth digest** at `tools/mod-data/` (facts + recipe + loot
indexes) via **Actions ▸ "Ground-truth digest"** — re-run after modlist changes.

### Phase 1 — Eco foundation: ore-gen + scarcity ✅ on `main` — **model settled: GTMOGS**
The **#56 per-ore model has been retired**; **PR #82 (GTMOGS GregTech-style mix veins) shipped as the
v1 model in v0.5.1**, strictly regional. The #56-vs-#82 decision (**#93**) is **closed**. Remaining
ore-gen work is all release-tuning:
- **#81** — early-game ore bootstrap, now that the vanilla starter trickle is gone (`needed-for-release`).
- **#116** — pre-release tuning: cave ores follow the surface biome, salt trim, rarity curve, Y-bands (`needed-for-release`).
- **#58** — playtest + rarity/regionality review (zagwar). Written against the old #56 model — refocus onto GTMOGS or fold into #116.
- **#115** — player-facing prospecting wiki page (kicked off by the GTMOGS move).

### Phase 2 — Guns / combat ✅ on `main` (#55, #59)
TaCZ + Create: Immersive TaCZ + Create: Armorer gunpack + Create Big Cannons. Merged and playtested.
- **Later:** gun→Create recipe reconciliation + sequenced-assembly depth (#112); gun loot (#18).

### Phase 3 — Recipe overhaul: "made through Create" ✅ on `main` (#62, v0.4.6)
Routed crafting through Create parts + methods across the pack (`docs/RECIPES.md` = convention + full
triage ledger). Metals foundation + almost-unified dedup; per-mod gating; the decoration/equipment
weave; worldgen-island bridges; EMI→JEI + JER/JEED; the `tools/recipe-graph/` connectivity toolkit.
- **Dedup follow-ups:** #103 (functional-duplicate parts), #101 (limestones), #102 (carbon/graphene), #113 (connectivity islands).
- **Boot-log correctness:** #119 (dropped recipes), #120 (mangled loot tables), #121 (remaining ERROR noise).

### Phase 3b — Magic web ✅ on `main` (#75, v0.5.2)
KubeJS bridges weaving Ars Nouveau / Iron's Spells / Occultism into the Create spine.
- **Follow-ups:** #122 (post-merge balance, playtest), #123 (flagship depth, conceded from #75).
- **Code track:** #80 (Derpack Arcana) — the bridges KubeJS can't express; #118 tracks its P3 deviation.

### Phase 4 — Loot pass ⏳ (#18)
`lootjs` + the loot index: pull structure/dungeon loot back from free end-game gear; seed Numismatics
coins. Feeds the economy pillar (#90). Not started.

### Phase 5 — Economy (Numismatics) 💤 #90
Coin values, vendors + pricing, Trading Floor, **Bountiful** bounties, and **wiring the inputs** (mob
drops / structure loot → sellables + bounties). The five systems' highest-leverage,
thinnest-in-integration pillar. **#129** (mob drops in the connectivity tool) is the enabler.

### Phase 6 — Curation & de-dup ✅ #88 on `main` (v0.5.0) — follow-ups open
The mob/boss + duplicate-mechanic pass landed (arphex/creeper-overhaul/mutant-monsters cuts, In Control!
spawn-gating, kobold swap). Remaining curation: **#94** (un-anchored mods + dup clusters), **#107**
(Ender Moon keep/cut), **#106/#108** (spawn-gating allowlist + behavioral review), **#60** (umapyoi
verdict, zagwar), **#100** (orphan library jars), **#21** (living removal tracker), **#87** (Create
Stuff'N Additions balance). MineColonies is settled as a woven on-ramp (#92).

### Phase 7 — Stability & QoL 💤 (needs a live server)
Playtest pre-gen #98 (force-multiplier) · RAM/GC #48 · flight interactions #43 · claims #25 ·
purple-arrows bug #3 · shaders caveat #1 · render distance #2. (TPS audit #42 resolved in v0.3.5/0.3.6.)

### Phase 8 — CI / merge-gating ✅ (`pr-checks.yml`)
PR-triggered checks gate merges (packwiz index freshness, manifest lint incl. the `pin` gotcha, KubeJS
JS/JSON + config TOML parse, Go build/vet for the editor + site). Full rundown in `docs/CI-CHECKS.md`.
- **Open (#79):** flip the checks to *required* on `main` via a branch-protection ruleset — #76 has
  merged, so this is unblocked (a one-time admin toggle).
- **CI hygiene:** #127 (consolidate the 3 overlapping index-refresh workflows).

## Needed for release

The set that gates the next milestone release (tagged `needed-for-release`). Everything else is
post-release polish or ongoing curation.

- [x] **Ore-gen model decided** — **#93 closed**; GTMOGS (#82) shipped as the v1 model in v0.5.1.
- [ ] **Early-game ore bootstrap** — #81 (vanilla trickle removed; define the replacement). Phase 1.
- [ ] **Ore-gen tuned for release** — #116 (cave-ore biome follow, rarity curve) + #58 review. Phase 1.
- [x] **Create recipe spine landed** — #62 (v0.4.6). Follow-ups: #101/#102/#103/#113.
- [ ] **Pack renamed** — #78 (decide the name with zagwar before players have instances named "Derpack X").
- [ ] **CI required on `main`** — #79 (turn on the `pr-checks.yml` ruleset; Phase 8).
- [x] **Design/goal docs merged** — PR #61; the five-systems direction is canon.
- [x] **Release artifacts sane** — `.mrpack` dropped (#73); Prism installer is the single ~5 MB artifact.

**Explicit non-goals** (keep off the release path): a server-pack artifact, NeoForge auto-bump,
bundled-jar distribution — all deliberately out, see `docs/DESIGN.md`.

## Open-issue work-order (sequenced)

The open issues, ordered for execution. Front-loaded with small/middle work; the `needed-for-release`
items (bucket 7) sit deliberately after it. Living trackers (#9/#17/#18/#21) stay open by design.

**1 · Quick wins** (small, low-risk, sandbox-doable, unblock the rest)
#111 pin almost-unified · #105 prune merged branches + auto-delete · #100 orphan-mod sweep ·
#127 consolidate index-refresh workflows · #126 docs cleanup + index.

**2 · Boot-log correctness** (authorable straight from the boot log)
#119 re-add dropped recipes · #120 override mangled loot tables · #121 triage the remaining ERRORs.

**3 · Recipe-web dedup** (#62 follow-ups)
#103 duplicate parts (steel-plate family) · #101 limestones · #102 carbon/graphene · #113 connectivity islands.

**4 · Curation cleanup** (post-#88)
#107 Ender Moon keep/cut · #94 + #99 un-anchored mods + midnight-thoughts anchor · #106 structure
allowlist · #108 spawn-gating behavioral review · #110 MFFS textures · #60 umapyoi (zagwar).

**5 · Pillar weaving** (bigger; the two-pillar work)
#129 mob drops in the connectivity tool · #90 economy pillar · #18 loot pass · #92 MineColonies/boss
gating · #91 survival interlock (+ #99/#124/#125; cull the 3 SoL forks) · #84 Create/Aeronautics harder ·
#112 guns through sequenced assembly · #87 Create Stuff'N Additions · #125 Touhou-maids weave ·
#122/#123 magic-web balance + flagship · #17 recipes tracker (zagwar).

**6 · Site & nice-to-have**
#115 player wiki · #77 in-site issue submission · #70 WEB_DIR bind-mount · #13 Create: Harmonics eval ·
#9 mod-ideas wishlist.

**7 · Release runway [NFR]** (the gate before tagging — deliberately after the middle work)
#79 require CI on `main` · #81 ore bootstrap · #116 ore-gen tuning · #58 ore-gen review (zagwar) ·
#78 rename the pack (zagwar).

**8 · Needs the live server / a human in-game** (parked)
#98 pre-gen test world (force-multiplier) · #48 GC/RAM · #43 flight interactions · #25 claims (zagwar) ·
#3 purple arrows · #1 shaders · #2 render distance · #40 quarterly port watch ·
#38 inventory sort (close after a quick in-game check).

**Recently closed/merged:** #75 (magic web, v0.5.2) · #82 (GTMOGS ore-gen, v0.5.1) · #88 (curation, v0.5.0) ·
#93 (ore-gen model decided → GTMOGS) · #62 (recipe overhaul, v0.4.6) · #51 (meadow cheese, in #62) ·
#117/#128/#130 (patch notes + site reframe) · #42 (TPS) · #73 (`.mrpack` drop) · #45 (meme cull) ·
#55/#59 (guns) · #56 (per-ore gen, since retired for GTMOGS) · #57/#63/#65 (digest/worldgen) ·
#61 (design docs) · #76/#85/#89 (CI + auto-resolver + workflow docs) · #86 (→ #88).

## Cross-cutting notes
- **Verification gates everything** — headless can't validate KubeJS/worldgen; playtest per phase.
- **Network:** the sandbox reaches GitHub only (not Modrinth/CF); jar ground truth comes via `tools/mod-data/`.
- **Duplicate *items*** (lead/silver/tin/steel ×N) are auto-collapsed by `almost-unified` + `polymorph` —
  but **never unify `galosphere:*silver*`** (it's palladium, not silver); pin almost-unified (#111) to protect the config.
