# Phase 2 — readiness review (before running more passes)

> Audit of docs / scripts / corpus state to answer: **are we ready for more passes, what should we update,
> and which motifs are over-represented?** Snapshot at **35 passes (pass-00…pass-34), 5,850 unique
> candidates**. Proposal-stage only; nothing here touches the pack. Companion to `STATUS-TLDR.md` (lay
> orientation) and `TRIAGE-PLAN.md` (the Gate-2 method).

## Verdict
**Mechanically ready, strategically not — for *blind* passes.** The scripts run and `PHASE2-BRIEFING.md`
is current, but the saturation curve shows blind passes are **diverging into singleton noise**, and the
corpus carries a large **dead-motif debt** (retired/cut economy motifs) that more passes won't clear. The
high-value next moves are **(a) clean the corpus**, **(b) switch any further passes to `context-fed`**, and
**(c) fix the stale paste-prompt's motif range** — see "What to update". Pure blind passes are low-value now.

## Corpus state (computed from `CANDIDATES.tsv`)

| metric | value |
|---|--:|
| passes (pass-00…34); next pass | 35; **pass-35** |
| unique candidates | 5,850 |
| ≥2-pass / ≥5-pass / Gate-2 core (≥5 + ACCEPT) | 1,866 / 557 / **408** |
| mods with ≥1 candidate / with a ≥5-core candidate | 198 / 139 (of ~351 dossiers) |
| consensus ACCEPT / REJECT | 3,091 / 2,751 |

**times_suggested histogram (the noise pile):**

| times | candidates | share |
|---|--:|--:|
| 1 (singleton) | 3,984 | **68%** |
| 2 | 766 | 13% |
| 3–4 | 543 | 9% |
| 5–9 | 356 | 6% |
| 10+ | 201 | 3% |

## Saturation — NOT converging
`new` (unique growth per merge) from `CONVERGENCE.md`: **+848 → +690 → +337 → +810 → +1174**. It is *rising*,
not flattening; the last interval (30→35) added the most. Meanwhile the confident core grew only
332→408 (+76) over those 5 passes. So each blind pass adds **~15 core candidates and ~235 singletons** — the
signal-to-noise is degrading. Two compounding causes:
- **Phrasing-sensitive dedup.** The merge key is `(mod, norm_from, to_pillar, motif)`; `norm_from` takes the
  first `mod:item` token, so re-wordings of the same item (`x:a / x:b` vs `x:b`) mint a *new* unique. Much of
  the singleton pile is rephrasings, not new ideas.
- **REJECTs accumulate too.** The merge counts every verdict into `times_suggested` (consensus = the mode), so
  a candidate repeatedly proposed-and-rejected gains a high `times_suggested` with a REJECT consensus. This is
  why the **Gate-2 core ANDs ≥5 *and* ACCEPT** — `times_suggested` alone is not quality.

**Implication:** more *blind* passes chase diminishing returns. Judge saturation by **non-economy core
growth** (per `ECONOMY-DEEMPHASIS.md`), and refine with **`context-fed`** rather than re-minting blind noise.

## Over-represented motifs (the headline ask)

**Top motifs, all candidates** (normalized to the M-## code; names from `docs/WEAVE-LEDGER.md`):

| motif | total | name / status |
|---|--:|---|
| **M-12** | 552 | Processing-chain pull — *live; the legit catch-all ("run it through a machine")* |
| **M-09** | 551 | Luxury good → coin — **RETIRED (#163/#240)** |
| **(none)** | 360 | *no parseable motif code — data-quality bucket* |
| M-10 | 326 | Arcane infusion pull — live |
| M-04 | 306 | Create recycles deco (lossy) — *live but low-signal catch-all* |
| M-02 | 280 | Mob-drop reagent sink — live |
| M-08 | 272 | Player-minted currency — live (reframed) |
| M-05 | 255 | Native-method gating — live |
| **M-14** | 222 | Bounty → coin — **CUT (#163/#240)** |
| M-15 | 213 | Boss-key unlock — live |
| … | | |
| **M-21** | 93 | Trade-seam to economy — **CUT (#163/#240)** |

### The problem: dead motifs dominate
The player-run-economy rework retired **M-09** and cut **M-14 / M-21** (NPC coin faucets). Most passes (0–23)
predate that ruling, so they converged a large pile of now-dead candidates that the merge still carries:

| motif | total | ACCEPT-consensus | ≥5-core | status |
|---|--:|--:|--:|---|
| M-09 | 551 | 212 | 77 | retired |
| M-14 | 222 | 126 | 19 | cut |
| M-21 | 93 | 12 | 11 | cut |
| **dead total** | **866** | **350** | **107** | **~15% of corpus; ~19% of the 557-row core** |

- **M-09 is the single most-converged motif in the confident core** (77 at ≥5) — i.e. the most "robust"
  signal the run produces is for a motif we've explicitly killed.
- These distort the pillar balance: **economy = 1,773 rows**, of which **761 (43%) are M-09/M-14/M-21**.
  Strip the dead motifs and economy falls to ~1,012 — well below Create's 1,794. Economy's apparent
  co-dominance with Create is largely a **dead-motif artifact**, not a real over-weighting of the pillar.

`PHASE2-BRIEFING.md` already forbids proposing M-09/M-14/M-21, and the pass-24+ de-emphasis turns bare
sell/mint/bounty into REJECTs — so **new** passes won't add these as ACCEPTs. But the merge keeps the legacy
rows and their `times_suggested`, so **the debt only clears by filtering the corpus**, not by running more.

### Live motifs worth a quality eye (over-represented but legitimate)
- **M-12 (552)** and **M-04 (306)** are the cheap catch-alls ("mill/crush it", "crush deco back"). Legitimate,
  but they absorb volume and many will collapse/merge in triage. Not a data defect — a triage dedup target.

### Data-quality: 360 untagged rows
**360 candidates (6%) carry no parseable `M-##`** — the agent didn't cite one, or wrote it where the merge's
`M-\d{2}` regex misses it. They're invisible to every motif analysis and can't be bucketed at Gate 2. Worth a
merge-time warning + a spot-check of the source lines.

## What to update (docs / scripts)

**Stale docs (fix before — or instead of — running more):**
1. **`NEXT-SESSION.md`** — *(the file most recently linked)* still says "19 passes … set up but not to run …
   keep running blind." Wrong on all three: 35 passes done, blind is diverging, and the next move is
   clean+context-fed (or triage). **Top priority** — it's the first file a fresh session reads.
2. **`RUN-5-PASSES-PROMPT.md`** — targets pass-19–23, "BLIND mode", "STATE: 19 passes / 2839", and crucially
   tells agents to use **"motifs M-01..M-24"**. The ledger now runs to **M-38**, and M-25–M-38 are the *good*
   post-rework motifs (consumption sink, colony route, cross-route, regional scarcity, research, service,
   maturation). A copy-paste of this prompt **under-cites the registry** and steers agents back to the dead
   economy motifs. Either retarget+fix the range to M-01..M-38 or delete it (the canonical brief is
   `PHASE2-BRIEFING.md`, which is correct).
3. **`PROGRESS.md`** — shows pass-00's old 9-chunk layout, not the 35-pass reality. Update or scope-label it.
4. **`GATE2-REVIEW.md`** — a ~98-accept snapshot from the original 9-chunk run; superseded by the 5,850-row
   corpus. Add a "superseded" banner so it isn't mistaken for the current Gate-2 set.
5. **`docs/WEAVE-LEDGER.md`** — registry body is current (M-01…M-38, retired/cut/mechanism-pending all marked),
   but the trailing summary line still says **"M-01–M-24 are Gate-0 accepted"** — stale; should read M-01–M-38.

**Current / no change:** `PHASE2-BRIEFING.md` (encodes the rework, M-01..M-38, context-fed), `TRIAGE-PLAN.md`,
`STATUS-TLDR.md`, `ECONOMY-DEEMPHASIS.md`, `CONVERGENCE.md` (auto-gen).

**Scripts:**
- `scripts/phase2-chunks.py` — current & correct (full coverage, `--mode context-fed`). Ready. Next:
  `--pass 35 --seed 35 --size 20`.
- `scripts/phase2-merge.py` — works; candidate enhancements: **(a)** drop or quarantine retired/cut motifs
  (M-09/M-14/M-21) from the merged output so the corpus the next passes + triage read is clean; **(b)** count
  and warn on the 360 (none)-motif rows in the summary; **(c)** optionally normalize `from` harder to curb
  phrasing-driven singleton inflation.
- `scripts/build-dossiers.py` — **do not run** (re-surfaces the #131 dossier↔digest drift the maintainer
  reverted; clean regen is an on-box task). Carry this warning forward.

## Recommendation
1. **Clean first** (merge filter for dead motifs + (none)-row warning) — biggest signal/noise win, one script edit.
2. **Fix the stale prompt's motif range** (M-01..M-24 → M-01..M-38) before any dispatch.
3. **If running passes, run `context-fed`** (refine: agents read accumulated rows for their mods, propose only
   what's missing / challenge weak rows) — blind has stopped paying off.
4. Refresh `NEXT-SESSION.md` / `PROGRESS.md` / `GATE2-REVIEW.md` so the next session isn't misdirected.

## Applied (this session — "just the fixes", no passes)
- **`phase2-merge.py`** now quarantines the dead motifs (M-09/M-14/M-21) to `CANDIDATES-dead-motifs.tsv` and
  warns on untagged rows. Re-run result: **5,850 total → 4,984 live + 866 quarantined**; live Gate-2 core
  **408 → 334**. `CONVERGENCE.md` still counts the full discovery set (note added) so it reads larger.
- **Docs refreshed:** `RUN-5-PASSES-PROMPT.md` (context-fed + M-01..M-38 + next pass numbers), `NEXT-SESSION.md`
  (35-pass state + the two gated options), `PROGRESS.md` (35-pass reality; pass-00 table marked historical),
  `GATE2-REVIEW.md` (superseded banner), `docs/WEAVE-LEDGER.md` (Gate-0 line M-01..M-24 → M-01..M-38).

_Still gated: no passes dispatched. The numbers above this section are the **pre-cleanup** diagnostic snapshot
that justified the filter; the live working corpus is now 4,984._
