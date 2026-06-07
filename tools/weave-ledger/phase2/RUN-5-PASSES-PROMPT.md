# Prompt — run 5 more Phase-2 passes (paste into a fresh instance)

Copy the fenced block below into a new Claude Code session on branch `claude/weaving-plan`.
(Kept here, not in `docs/`, per #126 — paste-prompt scaffolding lives with the workstream.)

> ⚠ **Read `tools/weave-ledger/phase2/READINESS-REVIEW.md` first.** Blind passes have **diverged** (singletons
> dominate; `new` rising, not flattening), so run **`--mode context-fed`** (refine), not blind. The economy
> motifs M-09/M-14/M-21 are dead and auto-quarantined by the merge — agents must not propose them.

```
You are continuing the Derpack X taste-weaving execution (issue #163) on branch claude/weaving-plan. Your
job THIS session: run 5 more Phase-2 opportunity-mapping passes in CONTEXT-FED (refine) mode — pass-35, 36,
37, 38, 39 — by fanning out background sub-agents, then merging. AUTHOR NOTHING in pack files; Phase 2 is
proposal-only.

READ FIRST (do not skip):
- CLAUDE.md (repo conventions; the systems-loop north star).
- docs/SYSTEMS.md (the causal-loop model: scarcity -> pressure -> production -> economy; anchors
  Create/magic = production, survival = pressure, economy = trade incl. logistics/aeronautics).
- tools/weave-ledger/phase2/READINESS-REVIEW.md (why context-fed now, and what's over-represented).
- tools/weave-ledger/phase2/NEXT-SESSION.md (runbook) and PHASE2-BRIEFING.md (the exact per-chunk brief — it
  is current: motifs M-01..M-38, the player-run-economy rework, and the context-fed mode section).
- DECISIONS.md (top status + PARKED Gate-0 items — do NOT action those, they're the maintainer's).

STATE: 35 passes done (pass-00 ... pass-34). 5,850 total candidates -> 4,984 live + 866 dead-motif quarantined
(M-09 retired, M-14/M-21 cut). Live Gate-2 core (>=5 + ACCEPT) = 334. The library-FREEZE is RETIRED — every
pass covers ALL ~351 dossiers. Blind passes have stopped converging (see READINESS-REVIEW + CONVERGENCE.md),
so run these in CONTEXT-FED mode: each agent reads the accumulated CANDIDATES rows for its mods and proposes
only what's MISSING (lead lines with NEW: or CHALLENGE:), not the obvious re-list.

FOR EACH pass N in 35,36,37,38,39 (you MAY run several in parallel — confirm free usage first; time is the
constraint):
  1. python3 scripts/phase2-chunks.py --pass N --seed N --size 20 --mode context-fed
       -> writes tools/weave-ledger/phase2/pass-NN/chunk-MM.txt (~18 chunks) + MANIFEST.json (note opus_chunk).
  2. Dispatch ONE BACKGROUND sub-agent per chunk via the Agent tool:
       subagent_type: general-purpose ; model: sonnet  (EXCEPT the single opus_chunk -> model: opus).
     Each agent's prompt (fill NN/MM):
       "Phase 2 weave mapping, Derpack X — follow tools/weave-ledger/phase2/PHASE2-BRIEFING.md EXACTLY.
        mode=context-fed. Your chunk list: tools/weave-ledger/phase2/pass-NN/chunk-MM.txt. Read each listed
        mod's tools/mod-data/dossiers/<ns>.md, docs/WEAVE-LEDGER.md (motifs M-01..M-38 + reagent-ownership),
        tools/weave-ledger/methods-palette.md, AND the accumulated rows for your mods in
        tools/weave-ledger/phase2/CANDIDATES.tsv. Propose ONLY what's missing (lead each line NEW: or
        CHALLENGE:) — an alternative routing, a deeper/subtler weave, a power-tier or theme nuance the
        existing rows miss, or a reasoned challenge to an existing row. Anchor labels
        create/magic/economy/aeronautics/survival. Cite a motif M-01..M-38; economy is player-run, so do NOT
        propose M-09/M-14/M-21 (dead) or a bare 'sellable' link; M-25/M-36/M-38 are mechanism-pending (don't
        author). AUTHOR NOTHING. Record ACCEPT and REJECT both with reasons; LEAVE only a genuine zero-content
        code library. Write INCREMENTALLY to tools/weave-ledger/phase2/pass-NN/chunk-MM.candidates.md, ending
        with exactly: == CHUNK COMPLETE ==. Return a short per-mod summary (ns: N accepted / M rejected / leave)."
  3. As chunks finish, commit the candidate files + push (git add the pass-NN files; commit --no-verify;
     git push -u origin claude/weaving-plan — on non-fast-forward, fetch + rebase onto origin then push).
  4. When ALL chunks of a pass are complete: python3 scripts/phase2-merge.py
     -> rebuilds CANDIDATES.{md,tsv} (cut-mod + dead-motif aware) and appends a CONVERGENCE.md row. Commit + push.

AFTER the 5 passes: report the convergence delta (the new CONVERGENCE.md rows). Judge saturation by
NON-economy core growth (per ECONOMY-DEEMPHASIS.md), not raw `new`. If context-fed is adding little, say
we're ready for Gate 2 / Phase 2.5 triage (TRIAGE-PLAN.md).

HARD CONSTRAINTS:
- Branch claude/weaving-plan — do NOT rename it, do NOT open a PR.
- Do NOT run scripts/build-dossiers.py (#131 dossier<->digest drift; an on-box task, not yours).
- Do NOT act on parked items (LEAVE-TALLY.txt; the Gate-0 motif candidates in DECISIONS.md) — surface only.
- Keep your OWN context light: do NOT read the chunk candidate files; rely on agent summaries + merge output.

NEXT after this (for context): Gate 2 / Phase 2.5 — the maintainer ratifies the per-mod slates (TRIAGE-PLAN.md),
then files milestone issues (economy + logistics -> v0.9.0, magic -> v0.11.0, survival -> v0.13.0, Create ->
v0.7.0; per docs/ROADMAP.md).
```
