# Prompt — run 5 more Phase-2 passes (paste into a fresh instance)

Copy everything in the fenced block below into a new Claude Code session on branch `claude/weaving-plan`.
(Kept here, not in `docs/`, per #126 — paste-prompt scaffolding lives with the workstream.)

```
You are continuing the Derpack X taste-weaving execution (issue #163) on branch claude/weaving-plan. Your
job THIS session: run 5 more Phase-2 opportunity-mapping passes — pass-19, 20, 21, 22, 23 — by fanning out
background sub-agents, then merging. AUTHOR NOTHING in pack files; Phase 2 is proposal-only.

READ FIRST (do not skip):
- CLAUDE.md (repo conventions; the systems-loop north star).
- docs/SYSTEMS.md (the causal-loop model: scarcity -> pressure -> production -> economy; four anchorable
  systems: Create/magic = production, survival = pressure, economy = trade incl. logistics/aeronautics).
- docs/WEAVING-PLAN.md (the method — esp. §2.0 methods-as-resources, §2.x convergence, §6 finding, §7
  authoring rubric).
- DECISIONS.md (top status: current state + the PARKED Gate-0 new-motif candidates and the LEAVE-tally
  curation shortlist — do NOT action those, they're the maintainer's).
- tools/weave-ledger/phase2/NEXT-SESSION.md (runbook) and tools/weave-ledger/phase2/PHASE2-BRIEFING.md
  (the exact per-chunk agent brief).

STATE: 19 passes done (pass-00 … pass-18). 2839 unique candidates; 831 at >=2-pass; 126 Gate-2 core
(>=5 passes AND consensus ACCEPT); 307 opus-corroborated. The library-FREEZE is RETIRED — every pass
covers ALL ~351 dossiers, no skipping. Convergence is NOT saturated (passes 16/17/18 added +848 — see
tools/weave-ledger/phase2/CONVERGENCE.md), so run these passes in BLIND mode (independent samples).

FOR EACH pass N in 19,20,21,22,23 (you MAY run several passes in parallel — usage is approved, time is the
constraint; the last batch ran 3 passes = 54 agents at once successfully):
  1. python3 scripts/phase2-chunks.py --pass N --seed N --size 20
       -> writes tools/weave-ledger/phase2/pass-NN/chunk-MM.txt (~18 chunks) + MANIFEST.json. Note
          MANIFEST.json's "opus_chunk".
  2. Dispatch ONE BACKGROUND sub-agent per chunk via the Agent tool:
       subagent_type: general-purpose ; model: sonnet  (EXCEPT the single opus_chunk -> model: opus).
     Each agent's prompt (fill NN/MM):
       "Phase 2 weave mapping, Derpack X — follow tools/weave-ledger/phase2/PHASE2-BRIEFING.md EXACTLY.
        mode=blind. Your chunk list: tools/weave-ledger/phase2/pass-NN/chunk-MM.txt. Read each listed mod's
        tools/mod-data/dossiers/<ns>.md, plus docs/WEAVE-LEDGER.md (motifs M-01..M-24 + reagent-ownership)
        and tools/weave-ledger/methods-palette.md. Model = the loop in docs/SYSTEMS.md; anchor labels
        create/magic/economy/aeronautics/survival (aeronautics = economy's logistics arm). For EVERY mod:
        propose cross-system weave links via method-pull (power-read + theme/red-team + cite a motif
        M-01..M-24), AND flag REWORK on weak existing connections (or 'OK — connections sound'). AUTHOR
        NOTHING. Record ACCEPT and REJECT both with reasons; LEAVE only a genuine zero-content code library.
        INDEPENDENT blind sample — do NOT read other passes' files or CANDIDATES.md. Write INCREMENTALLY to
        tools/weave-ledger/phase2/pass-NN/chunk-MM.candidates.md, ending with exactly: == CHUNK COMPLETE ==.
        Return a short per-mod summary (ns: N accepted / M rejected / leave)."
  3. As chunks finish, commit the candidate files and push (git add the pass-NN candidate files; commit
     with --no-verify; git push -u origin claude/weaving-plan — on non-fast-forward, fetch + rebase onto
     origin/claude/weaving-plan, then push). A chunk is DONE when its file ends with == CHUNK COMPLETE ==.
     The stop hook will remind you to commit; commit/push every time it does.
  4. When ALL chunks of a pass are complete: python3 scripts/phase2-merge.py
     -> rebuilds CANDIDATES.{md,tsv} (cut-mod-aware) and appends a CONVERGENCE.md row. Commit + push.

AFTER the 5 passes: report the convergence delta (the new CONVERGENCE.md rows). Watch the `new` column —
if a fresh pass adds little, say we're approaching saturation and suggest either switching later passes to
`--mode context-fed` (hand each agent the accumulated CANDIDATES rows for its mods, ask only for what's
missing) or that we're ready for Gate 2.

HARD CONSTRAINTS:
- Branch claude/weaving-plan — do NOT rename it, do NOT open a PR.
- Do NOT run scripts/build-dossiers.py (it re-surfaces the #131 dossier<->digest drift the maintainer
  reverted; the clean digest regen is an on-box task, not yours).
- Do NOT act on the parked items (LEAVE-TALLY.txt curation shortlist; the Gate-0 new-motif candidates in
  DECISIONS.md) — surface only, the maintainer decides those.
- Keep your OWN context light: do NOT read the chunk candidate files or CANDIDATES.md/.tsv; rely on the
  agents' short summaries and the merge output.

NEXT after this (not your job, for context): Gate 2 — the maintainer sorts CANDIDATES by times_suggested,
approves/rejects the >=5+ACCEPT short-list — then Phase 2.5 files one milestone issue per accepted weave
(fold into pillar issues: economy+logistics -> v0.9.0, magic -> v0.11.0, survival -> v0.13.0, Create ->
v0.7.0; per docs/ROADMAP.md).
```
