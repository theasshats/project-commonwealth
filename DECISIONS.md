# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance · **[PLAN]** plan-doc change · **[GITHUB]** issue action · **[NOTE]** low-stakes.

---

## Status — HOLDING for your review before Gate 1

Phase 0 + Phase 1 complete (**367/367 dossiers VERIFIED**, pushed). Per your instruction I've integrated
your feedback into the docs and am **holding** — not running Gate 1 (the dossier spot-check) or Phase 2
until you approve. `check.py` coverage now reads: **58 at ≥2 pillars** (coverage met — *not* "done", per
your call), **235 support-role**, **74 content mods at <2 pillars**.

⚠ **The digest is stale — it caveats those numbers.** The mod-data digest predates recent curation:
**358 manifests vs 367 dossiers**, so ~9 dossiers describe mods no longer in the pack (the **EMI** family
among them). Before Gate 1 the digest should be regenerated and orphan dossiers pruned — this is exactly
**#131**. Read the 367 as "≈358 live + ~9 stale."

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

## Curation / balance flags — updated per your calls

- **[KEEP] Spice of Life — both `solclassic` + `solonion` are desired** (not a cut). **Action queued:**
  check whether a single **2-in-1 SoL** variant exists that covers both the penalty and reward models
  (would collapse two mods into one); if so, propose it; else keep both.
- **[CORRECTION] EMI is already gone — you were right.** There are **no EMI manifests in `mods/`**; the
  pack already cut the EMI family + `emi_letsdo_compat`. The EMI *dossiers* exist only because the digest
  is stale. So this isn't a "remove EMI" task — it's the **digest-regen + orphan-prune** above (#131). No
  separate issue needed.
- **[ISSUE?] `trashcans` — debate, weighted expensive-or-remove.** Unlimited void sink is mildly
  anti-scarcity. **Action queued:** debate it; if kept, gate behind a meaningfully **expensive** Create
  craft, else remove. Candidate GitHub issue — say the word (and a milestone) and I'll file it.
- **[CONFIRMED] `samurai_dynasty` silver ≠ palladium.** You confirmed it's genuine silver. **Action:**
  ensure it unifies with the real silver (`occultism`, `c:ingots/silver`) and is **never** merged into
  Galosphere palladium. (The boot-log stale silver-compat recipe is tracked at #119 §4.)

## Proposed new motifs / reagents — for your Gate-0 review (NOT yet usable to author)

Starter set from common current-mod/pack patterns (history noted); a fuller pass is Phase 0.5. Not added to
`weaves.json` until you approve.
- **M-13 Fuel→propulsion** — refined fuels (TFMG diesel/LPG, Create Addition) power Aeronautics engines /
  generators. Method: engine/generator intake. Pillars: Create↔aeronautics. *History:* TFMG×Aeronautics is
  a common 1.21 pairing.
- **M-14 Bounty→drop economy** — a bounty board (`bountiful`) consumes mob drops / pays coin, turning
  combat into economy. Pillars: organic↔economy. *History:* Bountiful is the standard bounty mod; pairs
  with Numismatics in trade packs. (Ties to #137.)
- **M-15 Boss-key unlock** — a boss drop is the gate item for a complex Create/tech recipe (the DESIGN
  "complex tech unlocks via boss drops" rule). Pillars: organic↔Create. *History:* our own north star;
  common in progression packs.
- **M-16 (blue-sky) Seasonal reagent** — a crop/material obtainable only in a given Serene Season feeds a
  machine/ritual, tying survival-seasons to Create/magic. Pillars: survival↔Create/magic. *No in-pack
  history yet* — flagged for review.
- Reagent candidates: `tfmg:diesel`/`gasoline` (M-13), `numismatics` payout coins (M-14), each boss's
  signature drop (M-15).

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
