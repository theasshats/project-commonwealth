# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance · **[PLAN]** plan-doc change · **[GITHUB]** issue action · **[NOTE]** low-stakes.

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
- **[NOTE] Seed motifs** — 12 (M-01..M-12); M-01..M-07 `established` from existing weaves, M-08..M-12
  `proposed` (pending your Gate-0 blessing before authoring). M-13+ above are proposals only.
- **[NOTE] Dossier keying** — one card per *content namespace*; 2 addon jars ride a parent namespace with a
  `__<jar>` suffix.

## Ratified / closed (your confirmations this turn)

- ✅ **Spice of Life: keep both** `solclassic` + `solonion` (was flagged as redundant; you want both).
- ✅ **`samurai_dynasty` silver is real silver**, distinct from Galosphere palladium.
- ✅ **Decisions-queue approach approved** ("decisions are good") — continuing to surface, not bulk-dump.
