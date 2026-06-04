# Phase 2 — next-session runbook (read with CLAUDE.md + the task's READ-FIRST list)

Branch: `claude/weaving-plan` (do NOT rename, do NOT open a PR). Commit per chunk; keep your own context light;
do NOT read candidate files; don't expand on agent summaries. Confirm the user has free usage before each big fan.

## State at handoff
- **13 passes done (pass-00 … pass-12).** pass-12 was the first `context-fed` pass; the rest blind.
- **The dataset is NOT exhaustive yet.** Passes 00–12 only ever reviewed ~130 of 357 mods — two bugs (now
  fixed) excluded the rest: an `aud[:14]` audit cap and a prose SUPPORT regex. See DECISIONS.md
  "Exclusion ABOLISHED".
- **`phase2-chunks.py` now maps ALL 357 dossiers** (no support filter, no coverage/audit split) → 36 chunks/pass.
  It honors `tools/weave-ledger/phase2/LIBRARY-FREEZE.txt` (skip those), unless `--full` is given.
- Convergence so far: 1078 unique candidates, ~347 at ≥2-pass agreement (saturated), 575 ACCEPT-consensus.

## THE PLAN (do these in order)

### 1. The full pass — pass-13, `--full` (reviews literally everything, flushes out libraries)
```
python3 scripts/phase2-chunks.py --pass 13 --seed 13 --full     # 36 chunks; opus_chunk in MANIFEST.json
```
Dispatch **36 background agents**, one per `pass-13/chunk-MM.txt`. Opus on the MANIFEST `opus_chunk`, the rest
Sonnet. Use the IDENTICAL blind prompt for all (never tell the Opus agent it's special). Commit each chunk as it
lands; resumable = re-dispatch only chunks missing `== CHUNK COMPLETE ==`. The blind prompt to reuse:

> Phase 2 weave mapping, Derpack X. READ FIRST and follow exactly: tools/weave-ledger/phase2/PHASE2-BRIEFING.md.
> Pass dir: tools/weave-ledger/phase2/pass-13 (mode=blind). Chunk: chunk-MM. Read your chunk list
> pass-13/chunk-MM.txt; each mod's dossier tools/mod-data/dossiers/<ns>.md; docs/WEAVE-LEDGER.md (motifs
> M-01..M-24 + reagent ownership); tools/weave-ledger/methods-palette.md. For EVERY mod do BOTH: propose
> new/better cross-pillar links (method-pull, power-read, theme/red-team, motif) AND, if it already has
> connections, flag REWORK on weak/arbitrary ones. AUTHOR NOTHING. Record ACCEPT/REJECT with reasons; LEAVE only
> for a genuine zero-content code library. INDEPENDENT blind sample — do NOT read other passes or CANDIDATES.md.
> Write INCREMENTALLY to pass-13/chunk-MM.candidates.md, one mod at a time; end with exactly: == CHUNK COMPLETE ==.
> Then return a short per-mod summary.

When 36/36 complete: `python3 scripts/phase2-merge.py` → commit.

### 2. Freeze the libraries (the "pull out" step)
```
python3 scripts/phase2-freeze.py --pass 13 --write
```
This writes `LIBRARY-FREEZE.txt` = mods that produced ONLY LEAVE in the full pass (pure code-libs). **Eyeball it**
before trusting (a content mod that happened to LEAVE once should not be frozen — but the full pass is one review
per mod, so spot-check the surprising entries). Commit it.

### 3. Resume blind passes on the reduced (content-only) set
```
python3 scripts/phase2-chunks.py --pass 14 --seed 14          # auto-skips LIBRARY-FREEZE.txt -> ~fewer chunks
```
Dispatch as usual, merge, commit. Keep running blind passes until even a fresh pass adds little NEW agreement
(the ≥2-pass core is already flat at ~347 — watch whether the newly-included content mods move it). Then switch
later passes to `--mode context-fed`, and proceed to **Gate 2** (sort CANDIDATES by times_suggested) → Phase 2.5
issue filing (fold into pillar issues #137/#143/#92/#91; economy items onto the v0.9.0 milestone #13).

## Carry-over decisions (DECISIONS.md has detail — surface, don't bulk-dump)
- **Held Gate-0:** the "behavioral-constraint" motif (createpickywheels/solclassic) — maintainer will rule after
  a round; until then those stay LEAVE/no-motif.
- **Provisional:** M-21 trade-seam and the M-09/M-14 player-run-currency caveats are HOLD — surface, don't author.
- **New motifs live:** M-23 (structural alloy → airframe/hull) + M-24 (mechanical component → propulsion/control).
- **Open issue filed this workstream:** #178 (companions coins vs Numismatics). chefsdelight emerald reprice →
  fold into #136, not a new issue.
- **Token note:** context-fed agents cost ~1.8× blind (they ingest the full CANDIDATES table). Use blind to
  saturate, context-fed sparingly to refine.
