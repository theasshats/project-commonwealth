# Phase 2 — next-session runbook (read with CLAUDE.md + READINESS-REVIEW.md)

> **LATEST — independent review COMPLETE (June 2026): read `WEAVE-PLAN-REVIEW.md` (audit of the triage
> output, with corrections + maintainer flags F1–F5) and `PASS-PLAN-V2.md` (the revised discovery
> playbook for future runs).** Applied: the #305 milestone reorder is remapped into the regenerated
> `triage/REVIEW.md` / `SLATE-SUMMARY.md` / `decisions.tsv` (economy→**v0.13.0**, survival→**v0.9.0** —
> the per-pillar KEEP counts below predate this), and the anchor stats were rebuilt after an
> anchor-parser fix (corrected reach: 2 @0 · 24 @1 · 65 @2 · 57 @3 · 12 @4; the flagship mods formerly
> on the one-anchor list were parser artifacts). Verdict in brief: triage is sound and ratifiable after
> the listed corrections; **don't file 423 issues — file ~30–45 delivery-cluster issues** (REVIEW §8);
> **no further discovery passes this cycle** (the last 7 passes found 0 new core rows — PASS-PLAN-V2 §2).
> **NEXT: maintainer rules on flags F1–F3 (M-04 demotion is the big one), then ratifies on the
> regenerated `triage/REVIEW.md`.** _(Prior states below retained for history.)_
>
> ---
>
> **PRIOR — Phase 2.5 triage COMPLETE (all 202 mods, 13 batches; gated agent fan-out, Sonnet).** The
> 6,373-row corpus was consolidated per-mod into KEEP/CUT/MERGE/DEFER slates — `triage/batch-01..13.md`;
> cross-batch rollup in `triage/SLATE-SUMMARY.md` (regen: `python3 triage/consolidate.py`). Result:
> **423 KEEP weaves** across 160 mods · **2,028 CUT** · **670 MERGE** · **11 DEFER** (2→build #239/#220,
> 9→playtest) · **42 LEAVE**. KEEP-by-pillar (via milestone): Create 117 / Economy+aero 170 / Magic 86 /
> Survival 50. Anchor reach: 9 mods @4, 55 @3, 62 @2, **10 @1** (second-weave candidates: aileron, bits_n_bobs,
> byzantine, copperagebackport, endermoon, gravestone, mcwroofs, mcwstairs, mcwwindows, mutantszombies).
> Batching/inputs frozen in `triage/MANIFEST.json` + `triage/inputs/`. **NEXT: maintainer ratifies the slates
> (skim SLATE-SUMMARY + batch files, override as needed) → Phase 2.5 files one milestone issue per accepted
> weave (or a per-mod umbrella), folded into the pillar issues on ROADMAP.** Build-task DEFERs already tracked
> (#239 tooling-wear, #220 locked-exclusive gate); economy dynamic-pricing #240. _(Prior phase below — 42
> passes, refine saturated — retained for history.)_
>
> ---
>
> **PRIOR — 42 passes done (pass-00…41): 35–39 blind + 40–41 context-fed refine, all merged.**
> **7,282 total → 6,373 live + 909 dead-motif quarantined**; live **Gate-2 core (≥5+ACCEPT) = 435**, ≥2 =
> 2,387, ~198 mods. The 2 context-fed passes added ~+125 unique each (≈half blind's rate) and grew the ≥2
> corroboration band by +228, but the **live core stayed flat (433→439→435)** — the 2nd refine pass
> *net-pruned* the core as CHALLENGE lines flipped weak ACCEPTs to mixed/REJECT. **Refine has saturated;
> further passes (blind or context-fed) are not worth running.** The context-fed CHALLENGE layer flagged many
> bad existing rows for triage (loot=no loot-seeds, motif mislabels M-10/M-23/M-24, NPC coin-faucet rows,
> motif-duplicate proliferation). **Next: Phase 2.5 triage** (`TRIAGE-PLAN.md`) — corpus is mature and ready
> to consolidate. (Pass runner below still works if ever needed: next would be `--pass 42`.)

Branch: `claude/weaving-plan` (do NOT rename, do NOT open a PR). Keep your own context light; do NOT read the
chunk candidate files; rely on agent summaries + merge output. **Any pass fan-out is gated — confirm the
maintainer's GO + free usage first.**

## State at handoff (post readiness-review)
- **35 passes done (pass-00 … pass-34).** The merge now splits the corpus: **5,850 total → 4,984 live +
  866 dead-motif quarantined** (`scripts/phase2-merge.py` moves the retired/cut economy motifs M-09/M-14/M-21
  to `CANDIDATES-dead-motifs.tsv` — #163/#240, kept for mining, out of the working set). Live working corpus:
  `CANDIDATES.{md,tsv}`. Live **Gate-2 core (≥5 + ACCEPT) = 334**, ≥2 = 1,539, over **198 mods**.
  `CONVERGENCE.md` tracks the full discovery set (so its `unique`/core counts are larger than the live corpus).
- **Read `READINESS-REVIEW.md` first.** Findings: blind passes are **diverging** (68% of the corpus is
  singletons; `new` is *rising*, not flattening), and the over-representation is the **dead economy motifs**,
  not a live skew. So **do NOT run more *blind* passes.** If running passes, use **`--mode context-fed`**
  (refine: agents read the accumulated rows for their mods and propose only what's missing / challenge weak rows).

## The two live options (maintainer picks; both gated on GO + free usage)
1. **Context-fed refine passes** — see "Running a pass" below. Use `RUN-5-PASSES-PROMPT.md` (refreshed to
   context-fed + M-01..M-38).
2. **Proceed to Phase 2.5 triage** — mapping is rich enough; consolidate per-mod via `TRIAGE-PLAN.md`
   (KEEP/CUT/MERGE/DEFER slates). Also a gated fan-out.

## Running a pass (option 1)
```
python3 scripts/phase2-chunks.py --pass 35 --seed 35 --size 20 --mode context-fed   # ~18 chunks, all dossiers
```
Dispatch one agent per chunk (Opus on `MANIFEST.json`'s `opus_chunk`, the rest Sonnet) — identical briefing,
`PHASE2-BRIEFING.md` (current: motifs M-01..M-38, the player-run-economy rules, the context-fed section).
Commit per chunk (a chunk is done when its `pass-35/chunk-MM.candidates.md` ends with `== CHUNK COMPLETE ==`;
resumable — re-dispatch only chunks missing the marker). Then `python3 scripts/phase2-merge.py` and commit.
Judge saturation by **non-economy** core growth (per `ECONOMY-DEEMPHASIS.md`), not raw `new`.

## Do NOT
- **Do NOT run `scripts/build-dossiers.py`** to "refresh" — it re-surfaces the #131 dossier↔digest drift (an
  on-box clean regen, not a blocker here); current dossiers are usable as-is.
- **Do NOT re-introduce a skip list / library-freeze** (retired — full coverage every pass; only CUT mods, with
  no dossier, are absent).
- **Do NOT open a PR or rename the branch.**

## Carry-over decisions (DECISIONS.md has detail — surface, don't bulk-dump)
- **Economy is player-run** (#163/#240): M-09 retired, M-14/M-21 cut (now auto-quarantined by the merge);
  a bare "sellable" link is the ambient endpoint of the loop, not a weave.
- **MECHANISM-PENDING** M-25 / M-36 / M-38 → build issues #222 / #238 / #239 (+ dynamic pricing #240), not
  Phase-3 weaves.
- **New aeronautics motifs live:** M-23 (structural alloy → airframe/hull), M-24 (mechanical component →
  propulsion/control).
- **Held Gate-0:** the createpickywheels "behavioral-constraint" motif — maintainer rules later; stays
  LEAVE/no-motif until then.
- **Cut mods** (BOMD, solclassic, solonion, umapyoi) — merge excludes them automatically.
- **Open issues:** #178 (companions coins vs Numismatics); chefsdelight emerald reprice → fold into #136.
- **Stale-doc note:** `PROGRESS.md` / `GATE2-REVIEW.md` carry historical pass-00 / 9-chunk data, banner-marked.
