# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance · **[PLAN]** plan-doc change · **[GITHUB]** issue action · **[NOTE]** low-stakes.

---

## Status — Phase 2 multi-pass convergence (9 passes done; STILL BLIND)

Phase 2 is running as independent blind passes (plan §2.x). **pass-00 … pass-08 complete** — 9 passes.
After this run (`scripts/phase2-merge.py`): **828 unique candidates**, **283 proposed by ≥2 passes**,
**148 opus-corroborated**. Progression: 2 passes → 54 overlap; 4 → 133; **9 → 283**. The agreement core keeps
growing but uniques are *still* climbing (525 → 828), so **not yet saturated** → staying `--mode blind`; the
switch to `--mode context-fed` (then Gate 2) waits until a fresh blind pass adds little.
- **times_suggested distribution:** 545×1, 149×2, 43×3, 32×4, 18×5, 21×6, 8×7, 9×8, 3×9. **47 candidates are
  high-confidence (times≥5 AND consensus=ACCEPT)** — the Gate-2 short-list core.
- **M-23/M-24 (new aeronautics seams) landed well:** 27 ACCEPT vs 3 REJECT across passes — the difficulty/depth
  weave is corroborated, not a one-off. tfmg/create_ironworks/createmetalwork/create_new_age/createaddition
  are the recurring anchors (steel/alloy → airframe; engine/motor/wire → drivetrain/control).
Convergence table: `tools/weave-ledger/phase2/CANDIDATES.{md,tsv}`.

**[NOTE] How the consensus column works (so Gate 2 reads it right).** `phase2-merge.py` dedups on
`(mod, from-item, to-pillar, motif)` — **verdict is NOT in the key**, so an ACCEPT in one pass and a REJECT of
the same edge in another collapse into ONE row. `times_suggested` counts **every** pass that surfaced the edge
(accepts *and* rejects together → it measures attention, not approval); the `verdicts` TSV column keeps the raw
split (e.g. `{'ACCEPT':3,'REJECT':1}`); `consensus = max(verdicts)` is the majority verdict. **Read `times` and
`consensus` together** — a high `times` with `consensus: REJECT` is "robustly noticed and rejected," not a
candidate. Ties (2/2) break by insertion order (arbitrary) — those are exactly the human-adjudicate rows; the
`verdicts` dict flags them.

**[G0] New-motif candidates — maintainer ruled this turn:**
- **Structural-alloy → aeronautics → ACCEPTED, and expanded.** Added **M-23 (structural alloy → airframe/hull)**
  *and* **M-24 (mechanical component → propulsion/control)** to the ledger + `weaves.json` — "do more for various
  aeronautics components, part of its difficulty issue." Together with M-13 (fuel) these are the three aeronautics
  supply seams (build / drivetrain / fuel); they deliberately add depth to airship construction. Tied to #143.
- **Logistics-carrier / cardboard → aeronautics → REJECTED.** Maintainer: "I do not think this one makes sense."
  Not added; do not author. (Logistics mods still earn 2nd pillars via other motifs where coherent.)
- **Behavioral-constraint motif → HELD.** Maintainer: "leave them spinning on this one for now, I'll have an
  action after the next round." No decision yet; behaviour-only mods (`createpickywheels`, `solclassic`) stay
  `no-motif` / LEAVE until then.

**[NOTE] Guardrails held under fan-out.** `createmetalwork` palladium was caught and **escalated, not routed**
(the Galosphere `silver`=PALLADIUM gotcha); `samurai_dynasty` silver kept off `c:ingots/silver` confusion
(#177); deliberately-vanilla worldgen/structure/behaviour mods drew `LEAVE` rather than forced edges.

**[NOTE] Coverage-gap bug FOUND + FIXED (passes 00–12 were not exhaustive).** `phase2-chunks.py` chunked the
72-mod coverage track fully but capped the ≥2-pillar **audit** track at `aud[:14]` with a deterministic sort —
so the **same 44 audit mods were dropped from every pass** and re-running never reached them. Among the skipped:
**occultism, irons_spellbooks, minecolonies(+compat), createbigcannons, railways, gtmogs, mffs, trading_floor,
vinery, illagerinvasion, kobolds** — keystone mods that got neither a 2nd-pillar suggestion nor an audit.
Fix: the script now shuffles the audit set per seed and chunks the **whole** thing (14 chunks/pass, was 9).
**Action needed before Gate 2:** one catch-up run over the 44 previously-unreviewed mods (or a full fixed pass).

**[NOTE] Stat read of the 13-pass set (1078 rows, 575 ACCEPT/501 REJECT).** Economy is over-favored as a 2nd
pillar (163 accepts, method `numismatics` used 131× — 2× the next) because it is the only pillar with THREE
accepted motifs (M-08/M-09/M-14) all pointing at one sink; accept-rate 57% (vs magic 47%), so it's a vocabulary
bias, not red-team noise. Aeronautics (43) + survival (40) are the thinnest pillars even after M-23/24. Endgame
crafts converge on boss-drop keystones: drones:ion_thruster (M-06 ×8), mowziesmobs:ice_crystal &
bomd:obsidian_heart (dual M-15/M-06 ×5–6). See chat for full breakdown.

**[NOTE] Quality-audit (chunk-09) recurring REWORKs — maintainer calls this turn:**
- `companions` in-mod coins vs Numismatics → **issue filed: #178** (suppress/bridge/keep, on v0.9.0 — Economy).
- `ars_nouveau` / `companions` under-counted at 1 pillar (promote foundational M-01/M-02/M-11 weaves) →
  **deferred to Gate 2 / Phase 2** (decide there, not now).
- `aeronautics_bundled` 0-item wrapper → weaves redirect to the `aeronautics` ns (mechanical, no decision).

**[G2] Provisional motifs — HOLD (maintainer: "won't decide for a long time").** M-21 trade-seam stays
*explore-only*; M-09/M-14 player-run-currency caveats stay parked. Surface candidates, do not author; no
decision requested until much later.

**[NOTE] chefsdelight emerald-economy reprice** — no dedicated issue; recommended to **fold into #136**
(Numismatics coin tiers + base price sheet) as a single-item reprice rather than a standalone issue.

---

## Status — round-2 feedback integrated; now running Gate 1

Phase 0 + Phase 1 complete (**367/367 dossiers VERIFIED**, pushed). This round I integrated your second
batch of feedback (below), **re-ran phases 0–1** (no regen needed — see digest note), filed the decision
issues, and am now **running Gate 1** (dossier spot-check), with questions bundled at the end.
`check.py`: **58 at ≥2 pillars** (coverage met — *not* "done"), **235 support-role**, **74 content mods at
<2 pillars**.

✅ **Digest correction (I was wrong last round).** Re-running `build-dossiers.py` on the unchanged digest
produces **zero** changes — the digest is **not** stale. But EMI is genuinely **absent from the manifests**
(filename *and* content) yet **present in the digest** → a **manifest↔instance drift** (the instance the
digest was built from still has EMI jars; that's why your re-run showed no changes). Per your call I handed
this to a cheaper-model agent to **fold into #131** (the digest issue), *not* a dossier prune. The EMI
in/out decision is yours — see Gate-1 questions.

## Your feedback — actions taken this turn

- **[PLAN] ≥2 pillars is NOT a free pass.** Agreed (real gap in my framing). §6 now has two worklist
  tracks: (a) coverage for <2-pillar mods, (b) a **quality audit** of already-anchored mods' *existing*
  connections — they must be on-theme, tasteful, balanced, not merely present. `check.py` relabelled so
  ≥2 never reads "done."
- **[PLAN] Crafting table is not a fallback.** Fixed in §2.0/§7/Phase 3 — the method is the *default* to
  reach for, but a shaped recipe is a first-class answer where it's the coherent form. "If it makes sense,
  it makes sense."
- **[PLAN] Power-scaled integration.** Added to §7 + Phase 2: read each item's tier in *its own* mod (loot
  rarity `tools/mod-data/loot/`, recipe depth, wiki tier) and size the weave to it — deep multi-step for
  endgame/flagship, one clean gate for everyday. End goal: everything feels intentional, not just flagships.
- **[PLAN] Dossier isn't enough for theme fit.** Added §7 point 5: a **tone/setting tag taxonomy** (per-mod
  tags → auto-flag clashing pairings) **+ an adversarial red-team pass** (an independent agent argues
  *against* each pairing before authoring). The per-mod dossier can't catch bad *pairwise* fit; this does.
- **[PLAN] Round-trip arbitrage isn't always bad.** Softened §7 — a 1:1 swap is legitimate for genuinely
  equivalent materials (your limestone case, already in `35-web-bridges.js`); use sparingly, prefer a
  better mechanic where one exists, but it's an honest placeholder, not a failure.
- **[PLAN] More motifs/reagents, with history.** Added a §2.1 expansion rule + a new **Phase 0.5** (mine
  how mods/packs integrate *right now*, each with a precedent note; blue-sky proposals welcome, Gate-0
  reviewed; sprawl guardrail kept). Starter proposals below for your review.
- **[PLAN] Phase 2 issue sweep.** Added step 0 to Phase 2: an agent searches/filters/passes through relevant
  GitHub issues so existing intent feeds the weave list (#136 economy, #146 magic-gating, #119 dropped
  recipes, #103 dup parts, #171/#172 re-author-through-Create).
- **[GITHUB] #119 updated.** Commented to add the recipe_integration quantification task — how many of the
  203 dropped recipes are recipe_integration's conditional-for-absent-mods noise vs. real lost content.
  Did **not** run the count, per your instruction.

## Curation / balance flags — RESOLVED into issues this round

- **[#91 comment] Spice of Life — keep both** `solclassic` + `solonion` (per your call). Commented on #91
  with the keep-both decision + the 2-in-1-variant check action.
- **[#131 — agent, done] Manifest↔digest drift (broader than EMI).** Corrected from last round (drift, not
  stale dossiers). The agent folded it into #131 (comment posted) and found **10 digest entries with no
  manifest** — the 6 EMI jars (confirmed cut, JEI replaced them) **+ `ArPhEx`, `CreeperOverhaul`,
  `MutantMonsters`, `sophisticatedcore`** (unclear if intentional cuts) — and **1 manifest with no digest
  entry**: `smarter-farmers` (added after the last digest gen). So ~10 of the 367 dossiers may describe
  mods no longer shipped, and `smarter-farmers` has no dossier yet. **Gate-1 question:** confirm which of
  those 10 are truly out (prune their dossiers) vs. in (need re-adding), and regen the digest so
  `smarter-farmers` gets a card.
- **[#176 filed] `trashcans`** — new issue: debate, weighted expensive-or-remove (anti-scarcity void sink).
- **[#177 filed] `samurai_dynasty` silver ≠ palladium** — new issue: unify as `c:ingots/silver`
  (occultism), never Galosphere palladium; cross-refs #119 §4 / #103.

## Approved motifs (Gate-0 this round) — now in the ledger, tracked on issues

You blessed all four; **M-13–M-16 are now in `WEAVE-LEDGER.md` + `weaves.json` (status `accepted`)**, each
folded onto its existing pillar issue rather than a duplicate:
- **M-13 Fuel→propulsion** ("good") → commented on **#143** (aeronautics fuel). `tfmg:diesel`/`gasoline`
  reserved.
- **M-14 Bounty→drop economy** ("interesting, add for now") → commented on **#137**, with your caveat:
  Eco-style economy is **player-run currency**, so board payouts are provisional — **review in the 0.9
  economy update**.
- **M-15 Boss-key unlock** ("great, should make sense") → commented on **#92**, with the
  must-stay-sensible caveat.
- **M-16 Seasonal reagent** ("damn good use of Serene Season") → commented on **#91**. Recorded as a
  **priority survival-pillar lever** — you want Serene Seasons to be a major focus; more like it.

> **Judgment call I'm flagging (per "add issues for each point"):** four of your points already had
> dedicated, milestone-attached issues (#137/#143/#92/#91), so I **commented the decision onto those**
> rather than creating duplicates, and filed **new** issues only for the two with no home (#176, #177). Say
> the word if you'd rather have standalone issues for the others.

## Phase 0.5 — proposed new motifs (Gate-0 review; NOT yet in the registry)

Mined from the 223-method palette + how mods/packs integrate *now*. Methods marked [grounded] are jar-real
(in the palette); "history" cites current-mod precedent. Kept tight (sprawl guardrail) — approve/reject each:
- **M-17 Electric/FE charging bridge** — Create: New Age / Create Addition electricity (FE) charges a
  tool/focus/reagent → bridges the Create **electric tier** into magic/tech gear. Method:
  `createaddition:charging`. Pillars: Create↔magic/tech. *History:* Create New Age is the electricity addon;
  Create+Ars packs pair them. [grounded]
- **M-18 Summoned-spirit logistics** — Occultism **dimensional miner spirits** / `spirit_trade` acquire a
  scarce material or trade → magic becomes an *acquisition/logistics* provider, not just essences. Method:
  `occultism:miner` / `spirit_trade`. Pillars: magic↔Create/economy. *History:* Occultism's core mid-game
  (dimensional mining; Iesnium bottleneck). [grounded]
- **M-19 Soul / haunting seam** — `create:haunting` (Create's own soul-fire method) transmutes an item into
  a soul/spirit output → a **native** Create→occult bridge (complements occultengineering). Method:
  `create:haunting`. Pillars: Create↔magic. *History:* Create haunting + occult packs. [grounded]
- **M-20 Deploy-application upgrade** — `create:deploying` / `item_application` applies a woven part onto a
  base to upgrade it (the canonical Create "apply X to Y"); a light-to-mid gate — **not** for basic
  components (guardrail). Method: `create:deploying` / `item_application`. Pillars: any↔Create. [grounded]
- **M-21 Trade-seam to economy** — a mod's villager profession / wandering-trader routes into Numismatics
  (vanilla-style trade → player currency). Pillars: any↔economy. *History:* villager-trade × Numismatics
  (ties #90). [knowledge — verify]
- **(blue-sky) M-22 Celestial / lunar reagent** — sibling to M-16: a material/effect available only during
  an Enhanced Celestials lunar event feeds a method (night-magic flavor). Pillars: survival↔magic/Create.
  *No in-pack history* — blue-sky.
- Reagents proposed: createaddition charged/FE items (M-17); occultism iesnium/otherstone (M-18); create
  haunted/soul items (M-19).

## Phase 2 fan-out plan — FOR YOUR APPROVAL before I launch (no big fan without sign-off)

Per "prep phase 2 fan out for review." Phase 2 = opportunity mapping only (**no authoring**). Proposed run:
- **Chunking** by **pillar-seam neighborhood** (plan §3.2): ~6–8 chunks over the **72 content mods at <2
  pillars** + the ≥2-pillar quality audit — e.g. {Create-family addons at 1 pillar}, {food → economy/Create},
  {mob/boss drops → magic/economy}, {aeronautics + fuel}, {survival/seasons}, {magic web depth},
  {deco/structure leftovers}.
- **Per agent (cheaper model — Sonnet):** read its chunk's dossiers + methods palette + ledger; run Phase-2
  steps 1–5 (issue-sweep → candidates → power-read → theme-fit/red-team → quality-audit); emit
  one-line-per-candidate **+ the considered-set (incl. rejects + reasons)**. Composes only from accepted
  motifs M-01..M-16 (+ any M-17+ you bless).
- **Scale:** ~6–8 Sonnet agents in 1–2 waves; **I check usage with you after wave 1**.
- **Output for Gate 2:** a consolidated candidate list (accepted + rejected, with power-tier + tone-fit +
  motif) → becomes the Phase-2.5 milestone-issue set. Nothing authored; instance retires after 2.5.
- **Launch only on your go.** Tell me if you want a different chunking, model, agent count, or scope first.

## Run policy (revised per your guidance — supersedes the earlier "cost lesson")

- **Fan-out is fine on cheaper models** (Haiku 4.5 / Sonnet via the Agent `model` override) and is the
  **preferred** way to do bulk passes — *until you say otherwise*.
- **Ask before a big fan** (until you say otherwise). After the **first** big cheaper-model fan, I'll
  **check with you whether the usage is acceptable** before continuing further fans.
- **Opus fan-out only on explicit request** (a wide Opus fan is what exhausted the plan's usage earlier).

## Standing defaults (override any time)

- **[NOTE] Ledger location** — `docs/WEAVE-LEDGER.md` + `tools/weave-ledger/` (plan §15), not folded into
  `RECIPES.md`.
- **[NOTE] `check.py` enforcement** — advisory only (plan proposed advisory → required at 0.15).
- **[NOTE] Motifs — all 16 Gate-0 accepted.** M-01..M-07 established; **M-08..M-16 accepted**. Caveats
  carried: M-09/M-14 player-run-currency review in 0.9; M-10 no basic-components; M-12 covers intermediates.
- **[NOTE] Dossier keying** — one card per *content namespace*; addon jars ride a parent namespace with a
  `__<jar>` suffix.
- **[NOTE] Next step (your call):** Phase 0.5 (vocabulary expansion) now, then **prep the Phase 2 fan-out
  and present it for review** before launching (no big fan without sign-off). Cheaper models; usage check
  after the first big fan.

## Ratified / closed (your confirmations)

- ✅ **Gate 1 PASSED** — dossier spot-check clean (hubs + sample grounded, sourced, no hallucination).
- ✅ **Pruned 10 cut mods** — 6 EMI + `arphex` + `creeperoverhaul` + `mutantmonsters` + `sophisticatedcore`
  dossiers deleted; `build-dossiers.py` `CUT_NS` stops regeneration. Digest reconciliation stays #131
  (instance still has the jars; `smarter-farmers` still needs a card on a regen). 357 dossiers now.
- ✅ **Motifs M-08..M-16 blessed** (Gate 0), with the caveats above; **guardrail added: no complex recipe
  for a basic component** (plan §7 + ledger).
- ✅ **Spice of Life: keep both** `solclassic` + `solonion` → #91.
- ✅ **`samurai_dynasty` silver is real silver** ≠ palladium → #177.
- ✅ **Issue tracking:** comment-on-existing (#137/#143/#92/#91) + new #176/#177 — approved.
- ✅ **Decisions-queue approach approved** ("decisions are good").
