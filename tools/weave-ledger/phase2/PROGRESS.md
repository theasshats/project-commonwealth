# Phase 2 progress manifest

**Current: 35 passes complete (pass-00 … pass-34).** The live state is the merge output — see
`CANDIDATES.{md,tsv}` (4,984 live candidates), `CONVERGENCE.md` (the saturation curve), and
`READINESS-REVIEW.md` (readiness + the next move). Each pass's chunk files live in `pass-NN/`.

**Resumable (within a pass):** a chunk is DONE when its `pass-NN/chunk-MM.candidates.md` exists and ends with
`== CHUNK COMPLETE ==`. To resume after a usage cutout, re-dispatch only the chunks missing that marker, then
re-run `python3 scripts/phase2-merge.py`.

> The table below is the **original pass-00** layout (the flat 9-chunk Phase-2 run), kept for history. Every
> pass since shuffles all ~351 dossiers into ~18 chunks of 20 (`phase2-chunks.py --size 20`); see each
> `pass-NN/MANIFEST.json` for that pass's chunk count, seed, and Opus chunk.

| chunk (pass-00) | type | mods | status |
|---|---|--:|---|
| chunk-01..07 | coverage | 10 each | DONE |
| chunk-08 | coverage | 2 | DONE |
| chunk-09 | quality-audit | 14 | DONE |
