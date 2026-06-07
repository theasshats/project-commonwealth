# Derpack X — Roadmap (multi-phase)

> Living roadmap for the build-out. **Goal:** a cooperative PvPvE Create pack for a small crew (~10)
> where every mod earns its place by anchoring to one of the systems — **Create** or **magic**
> (production), **survival** (pressure), or the **economy** (distribution & trade, incl.
> logistics/aeronautics) — or it's cut. They form one causal loop (**scarcity → pressure → production →
> economy**, inspired by *Eco*): scarcity + locked exclusives drive an emergent but **load-bearing** trade
> economy, and complex tech unlocks via MineColonies or boss drops. (The old flat "five systems" framing
> is retired — see `docs/SYSTEMS.md`, **the canonical structural model**.) Also: `docs/DESIGN.md` (the
> why) and `docs/RECIPES.md` (the recipe convention + triage ledger, merged with #62).
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
drops / structure loot → sellables + bounties). The loop's highest-leverage,
thinnest-in-integration system. **#129** (mob drops in the connectivity tool) is the enabler.

### Phase 6 — Curation & de-dup ✅ #88 on `main` (v0.5.0) — follow-ups open
The mob/boss + duplicate-mechanic pass landed (arphex/creeper-overhaul/mutant-monsters cuts, In Control!
spawn-gating, kobold swap). Remaining curation: **#94** (un-anchored mods + dup clusters), **#106/#108** (spawn-gating allowlist +
behavioral review), **#21** (living removal tracker), **#87** (Create Stuff'N Additions balance).
_Settled: #60 umapyoi cut, #100 orphan libs swept, #107 Ender Moon kept (flavor → v0.11.0)._ MineColonies is settled as a woven on-ramp (#92).

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
- [x] **Design/goal docs merged** — PR #61; the systems-loop direction is canon (`docs/SYSTEMS.md`).
- [x] **Release artifacts sane** — `.mrpack` dropped (#73); Prism installer is the single ~5 MB artifact.

**Explicit non-goals** (keep off the release path): a server-pack artifact, NeoForge auto-bump,
bundled-jar distribution — all deliberately out, see `docs/DESIGN.md`.

## Milestones — the road to 1.0 (odd/even cadence)

Open issues are organized into GitHub **milestones** on an **odd/even release cadence** (`docs/RELEASE-CADENCE.md`): the minor version's parity sets the job. **ODD = feature / integration** — add the pillar's mods, weave them in structurally, then curate by merit (**the thunderdome** — see below). **EVEN = stabilization** — profile, balance, and bug-fix what the prior odd added; *no new mods or features*. One **pillar per odd version**, each followed by its own **even stabilization pass** so feature debt never stacks; the version count is open (extend with odd/even pairs as the pillars need). **`1.0.0` is even → a feature-frozen performance patch.** **Every issue maps to a milestone, and so does every *new* issue** — the pillar's odd version, the stabilization even that follows it, or `📋 Backlog / living`. (Milestones are created/edited on GitHub; this list is the map. See `docs/TRIAGE.md` for the process.)

**Two kinds of curation — both apply the #157 rubric, on different gates.** The **odd thunderdome** is curation *by competition*: the version's new adds **and** the existing related set are reviewed against each other on merit (system-anchor, no-redundant-mechanic, woven-not-floating); winners stay, losers are cut or reworked, then the version freezes. The **even stabilization** is *performance pruning*: is a mod's TPS/RAM cost justified (spark — #147/#160)? Cut or optimize the expensive, fix what broke, balance. **Web % is a compass, not a gate** — use the connectivity tool (#129) to *find* off-web clusters worth a human look, never as a release target (target it and it gets gamed — Goodhart). The deep *taste*-weaving question is worked separately in `docs/WEAVING-STRATEGY.md`.

**`v0.6.0 — Foundation` · even / stabilization** — *Goal: clean boot log, deterministic CI, a fast playtest loop, a perf baseline, modlist hygiene — decks cleared for the pillar work.* The initial cleanup, not a feature dump (already even-aligned).
- Quick wins / CI: #127 consolidate index-refresh workflows · #131 auto-regen the ground-truth digest · #154 config/ vs defaultconfigs audit. _Done in #166: #111 pin · #100 orphan-lib sweep · #126 docs cleanup + index. #105 prune branches → recurring at v0.7.0._
- Boot-log correctness: #119 dropped recipes · #120 mangled loot tables · #121 remaining ERROR noise.
- Perf baseline (server's up): #147 spark TPS routine + target · #151 Create contraption guardrails.
- Modlist hygiene (chartered by the #157 rubric — initial keep/cut cleanup, not a feature thunderdome): #157 define the rubric (`docs/CURATION.md`) · #83 umbrella · #106 structure allowlist · #108 spawn-gating review. _Done in #166: #60 umapyoi cut. Moved out: #107 Ender Moon (kept → flavor at v0.11.0), #110 textures (→ v1.0.0 living tracker)._
- Design charter: #218 ratify the structural model (`docs/SYSTEMS.md` — the Eco-style production/trade loop) + reconcile the docs to it; #157 curation rubric (`docs/CURATION.md`). _Done in #166: both landed + ratified; SoL → Diet (AppleSeed) food swap._
- Server's up: #98 pre-gen test world · #3 purple-arrows repro · #38 inventory-sort verify + close.

**`v0.7.0 — Create spine` · odd / feature** — *Goal: the recipe graph reads as one connected web — no functional-duplicate parts, materials unified, Create addons cohere; **the recipe/gating spine is built** — cost model applied (~3× basics, GregTech-style step-depth for tiers) and the KubeJS locking + progression-gating mechanism stood up with the Create-spine lock list. Everything builds on this, so it goes first.*
#219 recipe cost model (3× basics + step-depth) · #220 KubeJS locking + gating mechanism + first lock list · #103 duplicate parts (steel-plate family) · #101 limestones · #102 carbon/graphene · #113 connectivity islands · #132 Create-addon cohesion · #145 kinetic power tier ladder · #92 MineColonies/boss gating · #112 guns through sequenced assembly · #87 Create Stuff'N Additions · #17 recipes tracker (zagwar) · #105 prune merged branches (recurring hygiene sweep).
**Closes with the thunderdome** — the Create-related set reviewed by feature merit. _(Per `docs/SYSTEMS.md`, each feature pillar refines its content against the model and sets its locks as it's built.)_

**`v0.8.0 — Stabilization I` · even** — *Goal: profile, balance, and bug-fix everything 0.7 added; no new mods.* Spark the Create-spine feature dump (#147 routine), run the mod-conflict catalog (#160), perf-prune by the #157 perf gate, clear any boot-log regressions.

**`v0.9.0 — Economy & logistics` · odd / feature** — *Goal: the **load-bearing** economy is playable end-to-end — coins valued, vendors price, bounties pay, mob/structure inputs wired, the dynamic-pricing / player-minted-currency question resolved — **and its logistics/aeronautics movement arm is woven** (airship payoff + transport ladder), balanced against the scarcity lens (logistics must relieve regional scarcity without erasing it — `docs/SYSTEMS.md` §5).* The economy *is* the distribution stage and aeronautics is its physical arm, so they build together. The highest-leverage pillar — where the economy stops being optional flavor.
Economy: #221 economy tooling (dynamic pricing + player-minted currency) · #129 mob drops in the connectivity tool (enabler) · #138 shop/transaction mechanism · #136 coin tiers + price sheet · #137 Bountiful bounty pools · #150 faucet/sink integrity audit · #139 regional export specialization · #90 Numismatics + Trading Floor + Bountiful + wire inputs · #18 loot pass · #94 modlist audit (un-anchored mods + new dup clusters). Logistics/aeronautics: #84 Create + Aeronautics harder · #43 flight-system interactions · #144 airship assembly/docking infra · #143 ship power/fuel economy · #142 audit Create machinery on ships · #141 transport/logistics ladder · #140 airship combat balance (Big Cannons) · #125 Touhou-maids weave.
**Closes with the thunderdome.**

**`v0.10.0 — Stabilization II` · even** — *Goal: profile, balance, and bug-fix everything 0.9 added; no new mods.*

**`v0.11.0 — Magic` · odd / feature** — *Goal: the magic web is balanced and bridged into one progression, **with its own locked exclusives** (so a magic specialist is a needed trade partner — reachable also via the MineColonies route, mirroring Create).*
Magic (the #80 Arcana satellites): #122 post-merge balance · #123 flagship depth · #118 Soul-Reaping intent · #146 gate Ars/Iron's/Occultism behind Create + define magic's locked exclusives (per #220).
**Closes with the thunderdome.**

**`v0.12.0 — Stabilization III` · even** — *Goal: profile, balance, and bug-fix everything 0.11 added; no new mods.*

**`v0.13.0 — Survival` · odd / feature** — *Goal: the survival interlock (temperature × diet × seasons-driven scarcity) works in play — the world pushing back is real and tuned.*
Survival: #91 interlock (umbrella over #124/#99) · #124 altitude-driven cold · #99 midnight-thoughts anchor · #152 author Cold Sweat world config · #155 death-penalty + gravestone tuning. _(Diet — AppleSeed replaced the SoL forks in v0.6.0; tune its groups/buffs here.)_ Flavor: #107 Ender Moon weave (kept; earn its place via a system tie).
**Closes with the thunderdome.**

**`v0.14.0 — Stabilization IV` · even** — *Goal: profile, balance, and bug-fix everything 0.13 added; no new mods.*

**`v0.15.0 — Polish & site + weave review` · odd / feature — LAST CALL** — *Goal: wiki, onboarding, QoL, claims, and the open decisions settled — plus the comprehensive weave review (all systems checked against each other — the loop seams) before the freeze.*
#115 player wiki · #148 in-game onboarding quest/guide · #153 JEI recipe-viewer cleanup pass · #77 in-site issue submission · #134 map server to new Cloudflare address · #70 WEB_DIR bind-mount · #13 Create: Harmonics eval · #25 open-parties-and-claims · #1 shaders decision · #2 far-field render distance.
**Last call for major additions/integrations**; closes with the final thunderdome + the full weave review (the loop seams *between* the systems), then feature freeze.

**`v1.0.0 — Release` · even / perf patch [NFR]** — *Goal: feature-frozen — final performance + RAM tuning, ore-gen finalized, renamed, CI required → ship the public build.*
#149 v1.0.0 readiness checklist (meta-tracker) · #79 require CI on `main` · #81 early-game ore bootstrap · #116 ore-gen tuning · #58 ore-gen review (refocus onto GTMOGS or fold into #116) · #78 rename the pack (zagwar) · #48 GC/RAM (spark; server's up) · #110 custom-item textures (living tracker, needed-for-release).

**`📋 Backlog / living`** — *the holding pen so nothing is untriaged; pull into a version when it's next up.* #9 mod-ideas wishlist · #21 mod-removal suggestions · #40 quarterly port watch. Recurring passes that ride the cadence: #160 (mod-conflict catalog — runs on the even stabilization passes) · #161 (mod-update / changelog — feeds the next odd thunderdome).

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
