# Phase 2 — next-session runbook (read with CLAUDE.md + READINESS-REVIEW.md)

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
