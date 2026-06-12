# phase2/ — the weave program's working tree (post-housekeeping map)

> Housekept 2026-06-12 (maintainer GO). The raw discovery exhaust — 42 `pass-*` dirs, 1,419 chunk
> files — was **deleted from HEAD at commit `7cbf8a8`** (its parent has everything; the corpus they
> produced is frozen here as `CANDIDATES.tsv`). History docs moved to `archive/`.

## Live (everything here is load-bearing)

| File | Role |
|---|---|
| `CANDIDATES.tsv` | the frozen discovery corpus of record (6,373 rows) |
| `CANDIDATES.md` | rendered twin — **kept because main's `gen-weave-review.py` reads it from this branch via `git show`** |
| `PHASE2-BRIEFING.md` | the discovery agent brief (live for future delta sweeps) |
| `PASS-PLAN-V2.md` | the discovery-method playbook (how to run the next census/sweep) |
| `WEAVE-PLAN-REVIEW.md` | the program audit + rulings record (F1–F5, §11 reconciliation) |
| `NEXT-SESSION.md` | the runbook — read first |
| `triage/ratification.tsv` → `apply-ratification.py` → `decisions-ratified.tsv` + `RATIFIED-SLATE.md` | **the slate pipeline**: every post-triage decision, with reasons, applied over the frozen base |
| `triage/decisions.tsv` + `batch-*.md` | the frozen triage record (flattened + prose provenance) |
| `triage/FILING-PLAN.md` | cluster→issue map (v0.8.0 set FILED #333–#341) |
| `triage/consolidate.py`, `build-review.py` | regenerators for the deleted pre-ratification surfaces, on demand |
| `sweep/` | the V2-S sweep: BRIEFING, 22 findings files (cited as evidence by the filed issues), fold tooling (`fold-findings.py`, FOLD-QUEUE/RESOLUTIONS), `CUSTOM-MOD-CANDIDATES.md`, `PACK-FIXES.md` (filed #333), MANIFEST |
| `../PHASE3-AUTHORING-PROMPT.md` | paste-prompt for the approval-gated authoring sessions |

## archive/ — the methodology story (kept readable, no longer load-bearing)

`READINESS-REVIEW.md` (the mid-run critique), `CONVERGENCE.md/.tsv` (the saturation curve),
`ECONOMY-DEEMPHASIS.md`, `STATUS-TLDR.md`, `TRIAGE-PLAN.md` (the Phase-2.5 method),
`AERONAUTICS-DATA-GAP.md` (resolved), `CANDIDATES-dead-motifs.tsv` (the quarantined M-09/14/21 rows).

## Deleted at `7cbf8a8` (recover via `git checkout 7cbf8a8^ -- <path>`)

`pass-00..41/` (raw discovery outputs), legacy `chunk-0*.txt`, `RUN-5-PASSES-PROMPT.md`,
`LEAVE-TALLY.txt`, `PROGRESS.md`, `GATE2-REVIEW.md`, `aeronautics-research-A/B.md`,
`triage/REVIEW.md`, `triage/SLATE-SUMMARY.md`, `triage/inputs/`.
