# Phase 2 — next-session runbook (read with CLAUDE.md + the task's READ-FIRST list)

Branch: `claude/weaving-plan` (do NOT rename, do NOT open a PR). Commit per chunk; keep your own context light;
do NOT read candidate files; don't expand on agent summaries. Confirm the user has free usage before each big fan.

## State at handoff
- **14 passes done (pass-00 … pass-13).** pass-13 was the FULL pass (all 357 mods, `--full`); pass-12 was
  context-fed; the rest blind.
- **Exhaustive coverage achieved.** pass-13 reviewed every dossier. `LIBRARY-FREEZE.txt` now lists the **207
  LEAVE-only mods** (pure libs/APIs/client/empty-structure) — built by `phase2-freeze.py`, verified to contain
  no content keystone. Blind passes auto-skip them → **150 mods / 15 chunks per pass** going forward.
- Convergence: **1413 unique candidates, 389 at ≥2-pass agreement, 209 opus-corroborated.** The full pass
  added the previously-missing keystones (occultism 5, minecolonies, irons_spellbooks 4, cataclysm 4,
  grimoireofgaia 3, northstar 5, meadow 6, naturalist 4, companions 6, create_new_age 5, …).

## THE PLAN — steps 1–2 DONE; resume at step 3

### 1. ~~Full pass (pass-13, `--full`)~~ ✅ DONE — 36/36 merged.
### 2. ~~Freeze libraries (`phase2-freeze.py --pass 13 --write`)~~ ✅ DONE — 207 frozen, spot-checked.

### 3. Resume blind passes on the reduced (content-only) set — START HERE
```
python3 scripts/phase2-chunks.py --pass 14 --seed 14          # auto-skips LIBRARY-FREEZE.txt -> 15 chunks
```
Dispatch 15 agents (opus = MANIFEST `opus_chunk`, rest sonnet), same blind prompt as below, merge, commit.
Keep running blind passes until a fresh pass moves the ≥2-pass core little (it's ~389 now). Then switch later
passes to `--mode context-fed`, and proceed to **Gate 2** (sort CANDIDATES by times_suggested) → Phase 2.5
issue filing (fold into pillar issues #137/#143/#92/#91; economy items onto v0.9.0 milestone #13).

> NOTE: re-merge already includes pass-13. If you ever rebuild the freeze, eyeball `LIBRARY-FREEZE.txt` — a
> content mod that LEAVE'd once shouldn't be frozen; the full pass saw each mod once.

### Parked (from the LIBRARY-FREEZE audit — don't lose these)
- **Aeronautics digest gap:** `aeronautics`/`sable`/`aeronautics_bundled` register 0 items, so Create
  Aeronautics' own parts never got a 2nd-pillar review. Before Gate 2 on the aeronautics pillar, regen the
  digest (#131) so its parts get a dossier, then run them through one pass. Until then M-13/M-23/M-24 only
  weave INTO aeronautics, never out of it.
- **Loot-seeding backlog:** 25 loot=yes structure/dungeon mods are frozen from weave-passes (no items/recipes)
  but their loot tables can carry weave-relevant drops — a Phase-3 datapack task, not a weave pass.

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
