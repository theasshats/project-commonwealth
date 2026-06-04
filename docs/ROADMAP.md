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
- **#58** — playtest (you — runs on the server) + rarity/regionality review (zagwar). Written against the old #56 model — refocus onto GTMOGS or fold into #116.
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

## Milestones — the road to 1.0

Open issues are organized into GitHub **milestones**, not loose buckets. The structure leans on the
**five systems**: the small/foundational work is front-loaded to clear the decks, then each pillar gets
a focused version with a concrete **goal** (its exit criterion — the bar to call it done and move to the
next), and the `needed-for-release` gate sits last. **Every issue maps to a milestone, and so does every
*new* issue** — pick the pillar version whose goal it serves, or `Backlog / living` for ongoing trackers
and not-yet-scheduled work. The backlog is expected to grow well past today's count, so it's the holding
pen that keeps everything triaged. (The server is up now, so the old "needs the box" items are woven into
the versions where they fit rather than parked.) Milestones are created/edited on GitHub; this list is the map. See `docs/TRIAGE.md` for the triage process (label / milestone / assign / close).

**Curation is a recurring thunderdome, not a phase.** Each content milestone *closes* with a time-boxed
~2-hour pass — **v0.6.0, v0.8.0, v0.10.0, and a final sweep at v1.0.0** — where every questionable mod faces
the rubric: does it anchor a pillar (ideally two of Create / magic / economy / aeronautics / survival), or
earn its place via a recipe weave? Snap calls, then a quick cleanup (packwiz removals + config). It rides on
the host milestone — no separate slot or date. Rubric: `docs/DESIGN.md` + `docs/MODLIST-AUDIT.md`.

**`v0.6.0 — Foundation`** — *Goal: clean boot log, deterministic CI, a fast playtest loop, modlist
hygiene — decks cleared for the pillar work.* The big front-loaded cleanup (all small, low-risk work).
- Quick wins / CI: #111 pin almost-unified · #105 prune merged branches · #100 orphan-mod sweep · #127 consolidate index-refresh workflows · #131 auto-regen the ground-truth digest · #154 config/ vs defaultconfigs audit · #126 docs cleanup + index.
- Boot-log correctness: #119 dropped recipes · #120 mangled loot tables · #121 remaining ERROR noise.
- Perf baseline (server's up): #147 spark TPS routine + target · #151 Create contraption guardrails.
- Curation (modlist hygiene — run as the **pass-I curation thunderdome**, chartered by #157): #157 define the rubric (`docs/CURATION.md`) · #83 umbrella · #107 Ender Moon · #106 structure allowlist · #108 spawn-gating review · #60 umapyoi · #110 MFFS textures.
- Server's up: #98 pre-gen test world · #3 purple-arrows repro · #38 inventory-sort verify + close.

**`v0.7.0 — Create spine`** — *Goal: the recipe graph reads as one connected web — no functional-duplicate
parts, materials unified, Create addons cohere, complex tech gated via MineColonies/boss.*
#103 duplicate parts (steel-plate family) · #101 limestones · #102 carbon/graphene · #113 connectivity
islands · #132 Create-addon cohesion · #145 kinetic power tier ladder · #92 MineColonies/boss gating ·
#112 guns through sequenced assembly · #87 Create Stuff'N Additions · #17 recipes tracker (zagwar).

**`v0.8.0 — Economy`** — *Goal: the trade loop is playable end-to-end — coins valued, vendors price,
bounties pay, mob/structure inputs wired.* The thinnest-integrated pillar; highest leverage.
#129 mob drops in the connectivity tool (enabler) · #138 pick the shop/transaction mechanism · #136 coin
tiers + price sheet · #137 Bountiful bounty pools · #150 faucet/sink integrity audit · #139 regional
export specialization · #90 Numismatics + Trading Floor + Bountiful + wire inputs · #18 loot pass (feeds
the economy) · #94 modlist audit (un-anchored mods + new dup clusters).
**Closes with a curation thunderdome (pass II)** — rubric-check what the Create spine + Economy build dragged in.

**`v0.9.0 — Survival & Magic`** — *Goal: the survival interlock (seasons × temperature × food) works in
play and the magic web is balanced.*
Survival: #91 interlock (umbrella over #124/#99) + cull the SoL forks · #124 altitude-driven cold · #99
midnight-thoughts anchor · #152 author Cold Sweat world config · #155 death-penalty + gravestone tuning.
Magic (the #80 Arcana satellites): #122 post-merge balance · #123 flagship depth · #118 Soul-Reaping
intent · #146 gate Ars/Iron's/Occultism behind Create.

**`v0.10.0 — Aeronautics & logistics`** — *Goal: airships/flight earn their payoff and logistics are
woven; flight interactions documented.* (Now ticketed out — the flight/logistics pillar.)
#84 Create + Aeronautics harder · #43 flight-system interactions · #144 airship assembly/docking infra ·
#143 ship power/fuel economy · #142 audit Create machinery on ships · #141 transport/logistics ladder ·
#140 airship combat balance (Big Cannons) · #125 Touhou-maids weave.
**Closes with a curation thunderdome (pass III)** — rubric-check the back-half pillar additions.

**`v0.11.0 — Polish & site`** — *Goal: player wiki live, QoL and the open decisions settled.*
#115 player wiki · #148 in-game onboarding quest/guide · #153 JEI recipe-viewer cleanup pass · #77 in-site
issue submission · #134 map server to new Cloudflare address · #70 WEB_DIR bind-mount · #13 Create:
Harmonics eval · #25 open-parties-and-claims · #1 shaders decision · #2 far-field render distance.

**`v1.0.0 — Release` [NFR]** — *Goal: renamed, CI required on `main`, ore-gen tuned + playtested, RAM
tuned — ship a stable public build.* The needed-for-release gate, deliberately last.
#149 v1.0.0 readiness checklist (meta-tracker) · #79 require CI on `main` · #81 early-game ore bootstrap ·
#116 ore-gen tuning · #58 ore-gen review (refocus onto GTMOGS or fold into #116) · #78 rename the pack
(zagwar) · #48 GC/RAM (spark; server's up).
**Closes with the final curation thunderdome (pass IV)** — last tighten before the tag, nothing un-anchored ships.

**`📋 Backlog / living`** — *Goal: the holding pen — every unscheduled or ongoing issue lands here so
nothing is untriaged; pull into a version when it's next up. New pillar issues slot into that pillar's milestone.*
#9 mod-ideas wishlist · #21 mod-removal suggestions · #40 quarterly port watch.

**Recently closed/merged:** #75 (magic web, v0.5.2) · #82 (GTMOGS ore-gen, v0.5.1) · #88 (curation, v0.5.0) ·
#93 (ore-gen model decided → GTMOGS) · #62 (recipe overhaul, v0.4.6) · #51 (meadow cheese, in #62) ·
#117/#128/#130 (patch notes + site reframe) · #42 (TPS) · #73 (`.mrpack` drop) · #45 (meme cull) ·
#55/#59 (guns) · #56 (per-ore gen, since retired for GTMOGS) · #57/#63/#65 (digest/worldgen) ·
#61 (design docs) · #76/#85/#89 (CI + auto-resolver + workflow docs) · #86 (→ #88) · #133/#135/#156/#158 (docs sync + milestone map + triage playbook + curation-thunderdome scheduling).

## Cross-cutting notes
- **Verification gates everything** — headless can't validate KubeJS/worldgen; playtest per phase.
- **Network:** the sandbox reaches GitHub only (not Modrinth/CF); jar ground truth comes via `tools/mod-data/`.
- **Duplicate *items*** (lead/silver/tin/steel ×N) are auto-collapsed by `almost-unified` + `polymorph` —
  but **never unify `galosphere:*silver*`** (it's palladium, not silver); pin almost-unified (#111) to protect the config.
