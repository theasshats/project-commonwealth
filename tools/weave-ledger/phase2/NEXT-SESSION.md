# Phase 2 — next-session runbook (read with CLAUDE.md + the task's READ-FIRST list)

Branch: `claude/weaving-plan` (do NOT rename, do NOT open a PR). Commit per chunk; keep your own context light;
do NOT read candidate files; don't expand on agent summaries. **Confirm the user has free usage before each big
fan, and confirm the user's GO** — passes are **set up but not to be run yet** (see "Gating" below).

## State at handoff
- **16 passes done (pass-00 … pass-15).** Convergence table: `CANDIDATES.{md,tsv}` —
  **~1991 unique candidates** (after the merge excludes cut mods), **556 at ≥2-pass, 225 opus-corroborated**.
- **The library-FREEZE was RETIRED** (maintainer call: *"I don't think I said to freeze"* + *"unfreeze
  everything"*). It skipped ~160 "zero-content" mods to save tokens, but its content test trusted the digest's
  block/item count, which **false-zeroes code-registered & mechanic-only content** (Aeronautics parts — now GROUNDED via #179 — diet/
  AppleSeed, sleep/`midnightthoughts`, `fishingreal`) — so real content mods were silently skipped and their
  weaves missed, re-introducing the exclusion the *"review everything"* rule had removed. `LIBRARY-FREEZE.txt`
  and `phase2-freeze.py` are deleted; `phase2-chunks.py` now chunks **ALL ~351 dossiers every pass** (full
  coverage). Only CUT mods (no dossier) are absent.
- **Candidate merge is cut-aware** (`phase2-merge.py` reads `build-dossiers.py` `CUT_NS`) — BOMD (confirmed
  intentional cut), solclassic, solonion, umapyoi are excluded automatically.

## Gating — set up, do NOT run yet
1. **#179 (aeronautics digest gap) — ✅ DONE** (commit f85fc1d). The bundle is parsed into the digest
   (141 blocks / 18 items + recipes/loot) and `dossiers/aeronautics.md` is **GROUNDED** with jar-confirmed
   make-chains; the `aeronautics_bundled` stub was removed. Aeronautics is now covered like everything else —
   the gap no longer blocks the passes.
2. **Do NOT run `build-dossiers.py` to "refresh" first** — it re-surfaces the general dossier↔by-mod #131
   drift (~90 stale dossiers + a palette delta) that the #179 instance saw and reverted. That's a separate
   **on-box clean regen** (#131), not a blocker; the current dossiers are usable as-is.
3. **Confirm the maintainer's GO + free usage** before dispatching any fan.

## THE PLAN — run full passes once ungated

### 1. Generate a full-coverage pass (no freeze — covers every dossier)
```
python3 scripts/phase2-chunks.py --pass 16 --seed 16          # -> ~351 mods / 36 chunks, all dossiers
```
(Use `--mode context-fed` for later refine passes once blind passes stop adding new candidates.)

### 2. Dispatch the chunk agents
One Opus agent on `MANIFEST.json`'s `opus_chunk`, the rest Sonnet — **identical** prompt (never tell the Opus
agent it's the comparison). Same briefing as below. Commit per chunk; resumable (a chunk is done when its
`chunk-NN.candidates.md` ends with `== CHUNK COMPLETE ==`).

> Phase 2 weave mapping, Derpack X. READ FIRST and follow exactly: tools/weave-ledger/phase2/PHASE2-BRIEFING.md.
> Pass dir: tools/weave-ledger/phase2/pass-16 (mode=blind). Chunk: chunk-MM. Read your chunk list
> pass-16/chunk-MM.txt; each mod's dossier tools/mod-data/dossiers/<ns>.md; docs/WEAVE-LEDGER.md (motifs
> M-01..M-24 + reagent ownership); tools/weave-ledger/methods-palette.md. For EVERY mod do BOTH: propose
> new/better cross-pillar links (method-pull, power-read, theme/red-team, motif) AND, if it already has
> connections, flag REWORK on weak/arbitrary ones. AUTHOR NOTHING. Record ACCEPT/REJECT with reasons; LEAVE only
> for a genuine zero-content code library. INDEPENDENT blind sample — do NOT read other passes or CANDIDATES.md.
> Write INCREMENTALLY to pass-16/chunk-MM.candidates.md, one mod at a time; end with exactly: == CHUNK COMPLETE ==.
> Then return a short per-mod summary.

### 3. Merge + commit
```
python3 scripts/phase2-merge.py        # rebuilds CANDIDATES.{md,tsv}; excludes cut mods; re-run after every pass
```
Keep running full passes until even a fresh pass (eventually `--mode context-fed`) adds little new — saturation.
Then **Gate 2** (sort CANDIDATES by `times_suggested`) → **Phase 2.5** issue filing (fold into pillar issues
#136/#137/#143/#92/#91; economy + logistics/aeronautics items onto **v0.9.0**, magic onto v0.11.0, survival
onto v0.13.0 — per `docs/ROADMAP.md`).

## Carry-over decisions (DECISIONS.md has detail — surface, don't bulk-dump)
- **Freeze retired** — review everything, every pass (above). Don't re-introduce a skip list.
- **BOMD cut** (confirmed intentional) — merge already excludes it + the other cut mods.
- **Held Gate-0:** the "behavioral-constraint" motif (createpickywheels) — maintainer will rule later; stays
  LEAVE/no-motif until then.
- **Provisional:** M-21 trade-seam and the M-09/M-14 player-run-currency caveats are HOLD — surface, don't author.
- **New motifs live:** M-23 (structural alloy → airframe/hull) + M-24 (mechanical component → propulsion/control).
- **Open issues:** #178 (companions coins vs Numismatics). chefsdelight emerald reprice → fold into #136.
- **Token note:** context-fed agents cost ~1.8× blind (they ingest the full CANDIDATES table). Use blind to
  saturate, context-fed sparingly to refine.
