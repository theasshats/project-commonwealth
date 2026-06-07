# Phase 2.5 — Gate-2 triage plan (hand a batch to a fresh session)

> **Purpose.** Phase 2 produced **5850 unique candidate weaves** across 35 passes (pass-00…pass-34),
> 557 at ≥5 passes, **408 at the Gate-2 core** (≥5 passes AND consensus ACCEPT), spread over **198 mods**.
> That's too many for one read. This plan splits Gate-2 triage into per-mod batches a fresh session can run,
> producing a **consolidated weave slate per mod** that the maintainer ratifies before Phase-2.5 issue filing.
> Triage is **judgment + consolidation, not new discovery** — do NOT propose new weaves here.

## Inputs (all on branch `claude/weaving-plan`)
- `tools/weave-ledger/phase2/CANDIDATES.tsv` — the merged corpus. Columns:
  `times_suggested · from_opus · mod · from · via · to_pillar · motif · consensus · verdicts · hook`
  (mod = column 3; `consensus` is ACCEPT/REJECT/mixed; `times_suggested` = how many passes proposed it.)
- `docs/WEAVE-LEDGER.md` — the **reworked motif registry M-01…M-38** + reagent-ownership. Read it first.
- `docs/SYSTEMS.md` — the loop model (scarcity→pressure→production→economy; anchors create/magic/economy/
  aeronautics/survival). `tools/mod-data/dossiers/<ns>.md` — per-mod detail if a call is unclear.
- `docs/ROADMAP.md` — pillar→milestone map (for the target-milestone field).

## Hard rules carried from the rework (#163/#240) — apply, don't re-litigate
- **Economy is player-run.** "Sellable / mint for coin" is the ambient endpoint, NOT a weave. Any candidate
  whose motif is **M-09 (retired)** or **M-14 / M-21 (cut)** → **CUT** unless it already reads as a
  *distinct* demand-gate (then RE-TAG to M-08/M-26/M-28/M-29/M-30/M-33/M-34/M-37). There are ~534 M-09 /
  221 M-14 / 92 M-21 legacy rows from passes 0–23 — expect to cut/retag most of them.
- **MECHANISM-PENDING motifs are build tasks, not weaves.** Candidates tagged **M-25 (ecological cost),
  M-36 (perishability), M-38 (tooling wear)** → route to their build issues (**#222 / #238 / #239**), mark
  `DEFER→build`, do NOT file as Phase-3 weaves.
- **Depth scales with power**; never gate a basic/everyday component behind a deep chain.
- **LEAVE** mods (pure libraries / client-QoL / zero-content) have no weaves — skip; don't force one.

## Batching
Triage **by mod** (so all of a mod's competing candidates are judged together). ~198 mods with candidates →
~18 mods per batch ≈ **11 batches**. To pull one mod's rows:
`awk -F'\t' 'NR==1||$3=="<ns>"' tools/weave-ledger/phase2/CANDIDATES.tsv`
(or sort the whole file by `times_suggested` desc and hand out bands — but per-mod is preferred for dedupe.)

## Per-mod method (for each mod in the batch)
1. Pull its candidate rows. Group near-duplicates (same `from→to_pillar` via the same/equivalent motif).
2. For each distinct link decide: **KEEP / CUT / MERGE(into the kept twin) / DEFER(→build|→playtest)**.
   - Prefer the higher-`times_suggested`, ACCEPT-consensus, opus-corroborated phrasing of a duplicate.
   - Apply the hard rules above (economy retag/cut; mechanism-pending defer; depth/basics guardrail).
3. Produce the mod's **weave slate**: the 1–4 KEEP links that give it its anchors (target is 2 anchors;
   note if it reaches 3–4). State each KEEP's **anchor added**, **delivery** (recipe / loot-seed / config /
   datapack), and **target milestone** (per ROADMAP: Create→v0.7.0 #136-area, Economy+logistics→v0.9.0,
   Magic→v0.11.0, Survival→v0.13.0; cross-cutting/colony→its pillar).
4. Record CUTs and MERGEs with one-line reasons (the rejects are wanted — the maintainer reviews the full set).

## Output (per batch)
Write `tools/weave-ledger/phase2/triage/batch-NN.md`, one block per mod:
```
## <ns>  — slate: <N> KEEP / <M> CUT / <K> DEFER   | anchors after: <create/magic/…> (now N)
KEEP  | from→to | motif M-## | delivery: <recipe|loot-seed|config> | milestone: vX.Y.0 | why "of course"
CUT   | from→to | motif M-## | reason: <retired-economy | duplicate-of <kept> | depth | tone | no-method>
MERGE | from→to | into: <kept link> | reason
DEFER | from→to | motif M-## | →build #NNN  (mechanism-pending)  OR  →playtest
```
End each batch file with `== BATCH COMPLETE ==`. Commit per batch (`--no-verify`), push to
`claude/weaving-plan`; do NOT open a PR. Return a short per-mod KEEP/CUT/DEFER tally.

## After all batches → maintainer ratify → Phase 2.5
The maintainer skims the slates, overrides as needed, then **Phase 2.5 files one milestone issue per
accepted weave** (or one umbrella issue per mod), folded into the pillar issues on ROADMAP. The build-task
DEFERs are already tracked (#222/#238/#239); economy dynamic-pricing is #240.

---
_Ready-to-paste fresh-session prompt (fill the mod list or batch number):_

> Phase 2.5 Gate-2 **triage** for Derpack X — follow `tools/weave-ledger/phase2/TRIAGE-PLAN.md` EXACTLY.
> Branch `claude/weaving-plan`; do NOT open a PR. This is **consolidation + judgment, not discovery** —
> propose NO new weaves. Read `docs/WEAVE-LEDGER.md` (reworked motifs M-01..M-38; economy is player-run;
> M-09 retired, M-14/M-21 cut; M-25/M-36/M-38 mechanism-pending→build issues) and the TRIAGE-PLAN method.
> Your batch = these mods: <NS1, NS2, …>. For each, pull its rows from
> `tools/weave-ledger/phase2/CANDIDATES.tsv` (`awk -F'\t' 'NR==1||$3=="<ns>"' …`), dedupe, decide
> KEEP/CUT/MERGE/DEFER per the rules, and write the consolidated slate to
> `tools/weave-ledger/phase2/triage/batch-NN.md` ending with `== BATCH COMPLETE ==`. Commit + push that file
> (`--no-verify`). Return a short per-mod KEEP/CUT/DEFER tally.
