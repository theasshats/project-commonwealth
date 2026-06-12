# Pass-plan V2 — the discovery-engine playbook (for future weave runs)

> **Status: proposal for ratification** — written by the post-triage review session (June 2026) after
> auditing the V1 run end-to-end. V1's corpus and triage outputs are **frozen and stay valid**; nothing
> here re-opens them. This doc is the playbook for the **next** time discovery runs (a content-update
> delta, a rule change, or a future full re-census). Companion: `WEAVE-PLAN-REVIEW.md` (the audit of what
> V1's output *contains*); `READINESS-REVIEW.md` (the prior model's own mid-run critique — largely
> confirmed here, and extended with measurements it didn't make).

## TL;DR

V1 found a real, usable core — but spent roughly **a third of its compute discovering nothing**. The last
7 of 42 passes (≈252 of 694 agent-runs) contributed **zero** candidates to the final Gate-2 core; 98% of
the core had been first-proposed by pass-29. The engine's three structural flaws: **(1)** discovery and
evaluation were conflated in one number (`times_suggested` counts REJECT votes too), **(2)** the dedup key
hashes free prose, so phrasing and motif-tagging variance minted ~3,000 phantom "uniques" (68% of the
corpus is singletons), and **(3)** the confidence gate was an absolute count (≥5) against a growing pass
denominator, which forced extra passes just to re-corroborate already-known rows. V2 separates the
phases — **census → consolidate → ballot → triage** — enforces structure at *generation* time (a negative
experiment below shows post-hoc normalization cannot fix it), and budget-boxes the whole run at roughly
**⅓–½ of V1's agent-runs** for a cleaner corpus.

---

## 1. What V1 was, and what it actually bought

Mechanics: 42 passes (pass-00…41) × ~18 chunks of ~20 mods = **694 chunk-agent runs** (early passes used
9 chunks; one Opus chunk per pass, the rest Sonnet). Each agent read its mods' dossiers + the motif
registry + methods palette per `PHASE2-BRIEFING.md` and appended candidate lines; `phase2-merge.py`
deduped on `(mod, norm_from, to_pillar, motif)` and counted distinct proposing passes as
`times_suggested`; Gate-2 core = ≥5 passes AND consensus ACCEPT. Passes 0–34 + 35–39 blind, 40–41
context-fed. Final: **7,282 unique → 6,373 live + 909 dead-motif quarantined; 435 live core over 202
mods**, consumed by the 13-batch triage.

Credit where due — keep these in V2:

- **It worked.** The triage audit (see `WEAVE-PLAN-REVIEW.md`) found the kept weaves overwhelmingly trace
  to real, well-corroborated corpus rows. The census-with-shuffled-neighbours design did surface the space.
- **Full coverage, no skip-list.** The library-freeze retirement was right (its "zero-content" test
  false-zeroed code-registered mods — the aeronautics lesson). Pure libraries LEAVE cheaply.
- **Rejects recorded with reasons** — triage leaned on them constantly.
- **Incremental writes + `== CHUNK COMPLETE ==` markers** — made the run resumable and auditable.
- **Mid-run self-correction** — the economy de-emphasis (pass 24), the motif rework, the dead-motif
  quarantine, and the readiness review were all good moves. V2's job is to need fewer of them.

## 2. Measured failure modes (the evidence)

Each item below was computed from the committed pass files / corpus this session (scripts inline in §6).

**F1 — A redundant tail: ~36% of compute discovered nothing.**
First-seen analysis of the final 435-row live core: **82% first-proposed by pass-19, 98% by pass-29,
100% by pass-34**. Passes 35–41 (252 agent-runs) added **0** eventual-core candidates — blind *and*
context-fed alike. Their only effect was corroboration: pushing ~100 already-known rows over the fixed
≥5 bar (live core 334→435). Discovery was over by ~pass-25; nobody could see it because…

**F2 — The confidence gate was statistically incoherent.**
"≥5 passes" is an absolute count against a growing denominator: ≥5-of-19 demands a 26% reproposal rate,
≥5-of-42 only 12%. The bar silently *fell* as the run lengthened, and reaching it required running passes
whose only purpose was to be a denominator. A confidence gate must be a **rate with a floor** (see §3).

**F3 — `times_suggested` conflates popularity with approval.**
Every verdict — ACCEPT and REJECT — increments it; consensus is the bare mode of verdicts. So a
repeatedly-rejected idea scores "high confidence" (why Gate-2 had to AND in ACCEPT), ties resolve by
insertion order, and **14% of ≥5-pass candidates sit within one vote of a consensus flip** (88 of 590).
Eleven rows carry junk consensus strings ("REWORK check", "?") the parser passed through.

**F4 — The dedup key hashes prose, so the "unique" count is fiction.**
`norm_from` keeps the first `mod:item` token or else the first word: **48% of live rows (3,074/6,373)
key on a bare free-text word**. Motif sits *in* the key, so the same edge tagged M-12 by one agent and
M-04 by another (the catch-all boundaries genuinely overlap) splits into two "uniques": **1,199
(mod,from,pillar) groups — 3,213 rows, half the corpus — span >1 motif tag**. `via` is *not* in the key,
so genuinely different routings collapse and the first-seen phrasing wins the display row. Net: the 68%
singleton share and the "non-converging `new`" curve were largely artifacts of the key, not of the search.
Plus parse debris: **429 untagged-motif rows** (invisible to motif analyses — including dead-motif
quarantining), **99 empty-`from` rows**, **~156 junk-pillar rows** (`any`, `—`, `n/a`, `scarcity`…).

**F5 — Negative result: post-hoc normalization makes it *worse*, not better.**
This session tested the "obvious" fix — a canonicalized key (all namespaced ids sorted, not just the
first token; method-normalized `via` in the key; motif out of the key). Result: **6,363 → 9,223
"uniques"** (singletons 68%→81%). Finer string keys split more than they merge because the variance is
**semantic** — different agents legitimately describe the same idea with different item subsets, methods
named at different granularity, etc. Conclusion: **no merge-side string key recovers true identity.
Structure must be enforced when the line is written** (§3, Phase A format), and residual grouping is an
LLM judgment task (§3, Phase B), which is exactly what triage's 670 MERGE decisions ended up doing by
hand at the end.

**F6 — Mode-control failure: five passes ran in the wrong mode and nobody noticed.**
`RUN-5-PASSES-PROMPT.md` instructed `--mode context-fed` for passes 35–39; their `MANIFEST.json` files
say `"mode": "blind"` — the flag defaulted silently and ~90 agent-runs executed the wrong protocol. (It
mattered little only because of F1 — there was nothing left to find either way.) The context-fed format
spec had a second latent bug: the briefing prescribes leading lines with `NEW:`/`CHALLENGE:`, but a
colon-prefix swallows the `from:` field under the merge's `key:value` splitter — every context-fed agent
happened to write `NEW |` (pipe) instead, dodging it. And the merge implements no challenge semantics at
all: a CHALLENGE only lands if its prose happens to collide with the original row's key.

**F7 — Era mixing: one corpus, three rule regimes.**
Passes 0–23 ran pre-rework (M-09/M-14/M-21 still legal — 909 quarantined rows plus an uncountable share
of the 429 untagged), 24–29 with a prompt-level de-emphasis, 30+ post-rework. The de-emphasis trial
barely moved cumulative stats (`DECISIONS.md` notes it: prompt bias can't outvote 23 passes of history) —
**vocabulary changes work, prompt-bias patches don't**. Era-mixed consensus numbers needed manual
correction for the rest of the run.

**F8 — The saturation metric watched the wrong thing.**
`new` (unique-key growth) is dominated by F4's phrasing noise, so it "rose" while actual discovery was
finished. The signal that mattered — first-seen growth of eventually-corroborated candidates — was
computable from the pass files all along but never tracked. The mid-run library-freeze retirement (pass
16) also broke the curve's comparability, acknowledged in the log.

**F9 — The Opus overlay was too thin to mean anything.**
One Opus chunk per pass ⇒ each mod saw an Opus agent ~1.2 times across the whole run; `from_opus` was
never used by the gate. Either make the second-model lens systematic or drop the column.

## 3. The V2 engine

**Design principles.** (1) **Separate discovery from evaluation** — census passes *find*, ballot passes
*judge*; no number serves both masters. (2) **Structure at generation, not normalization at merge** (F5).
(3) **Confidence is a rate with provenance**, never a raw count. (4) **One corpus = one rule era**; a rule
change bumps the era and segments the data. (5) **Budget-boxed**: the run's size is decided up front, with
stop rules that can only shrink it.

### Phase A — Census (blind discovery)

- **8–12 passes**, full dossier coverage, chunk size ~20, per-pass seeded shuffle (V1's neighbour-mixing
  is worth keeping — cross-mod adjacency is where links surface). Sonnet for bulk; **one full Opus pass
  mid-census** (every chunk, once) if a second-model lens is wanted — a whole pass is a usable signal,
  one chunk per pass was not.
- **Structured output, validated at write time.** Same one-line-per-candidate shape, but every field from
  a controlled vocabulary, and `from:` **must** carry at least one `ns:item` id that appears in the mod's
  dossier/digest id list:
  `- kind: new | from: <ns:id[+ns:id…]> | via: <methods-palette id> | to: <create|magic|economy|aeronautics|survival> | motif: M-##|none | power: everyday|mid|endgame | verdict: ACCEPT|REJECT | hook: <prose>`
  A ~50-line linter (`phase2-lint.py`, to be written with the V2 tooling) runs **per chunk file at
  completion**; the dispatching session re-prompts the agent on lint failure. This is what kills F4 at the
  source — the merge key becomes exact equality on `(mod, from-ids, via, to)`, **motif excluded** (it's an
  annotation to be voted on, not an identity). F6's format bug dies with the `kind:` field (no colon-prefix).
- **Manifest hardening (F6/F7):** `MANIFEST.json` records `mode`, `briefing_sha` (hash of
  PHASE2-BRIEFING at dispatch), `era`, and per-chunk model; each chunk file's header line echoes them;
  the merge **refuses** to mix eras or briefing hashes without an explicit flag.
- **Stop rule (F1/F2/F8):** after each pass, the merge reports *first-seen candidates that have since
  gained ≥2 total proposals* (the eventual-signal proxy, immune to singleton noise). **Stop when two
  consecutive passes each add <3% of the cumulative figure** — on V1's curve this fires around pass 11–13
  of comparable coverage. Hard cap regardless: 12 passes.

### Phase B — Consolidate (cheap, continuous)

After the census (or every ~4 passes), a **per-mod clustering sweep**: one Sonnet agent per ~25 mods
reads each mod's structured rows and emits merge-sets ("rows 3/7/12 are one idea; canonical = row 7"),
applied mechanically with provenance kept. This is triage's MERGE step (670 hand-merges in V1) moved
to where it's cheap, and it's the *only* dedup that works (F5). Output: a clustered candidate list,
**one row per real idea**, all votes/phrasings attached.

### Phase C — Ballots (evaluation, replaces V1's corroboration-by-re-discovery)

For every clustered candidate: **3–5 independent judge ballots** (Opus; agents see the candidate + the
mod's dossier + registry + the briefing's guardrails, *not* each other). A ballot is structured:
`verdict: ACCEPT|REJECT | strength: 1-3 | motif: M-##|none | power: … | reason: <prose>`.
- **Confidence = accept-rate over ballots** (e.g. 4/5), reported **with margin**; fragile rows (margin
  ≤1) are flagged instead of silently classified (F3).
- **Motif = ballot plurality**, with disagreement preserved as an `ambiguous-motif` flag — motif fights
  (M-12 vs M-04, M-18 vs M-30, M-10 vs M-01 — all recurrent in V1) become visible data instead of
  phantom duplicates.
- Cost is fixed and known up front: ~clustered-candidates × ballots ÷ per-agent batch size. Batched
  per-mod (a judge ballots a whole mod's slate in one call), this is ~60–90 agent-runs for a V1-sized
  corpus.

### Phase D — Triage & ratification (largely as V1 did it, two fixes)

Per-mod consolidation into KEEP/CUT/DEFER slates stays — V1's triage discipline was genuinely good. Two
format changes, both bugs found in the audit (`WEAVE-PLAN-REVIEW.md` §3): the slate header carries
**machine-readable anchor fields** (`anchors_before:` from the dossier, `anchors_added:` derived from the
KEEPs' `to:` fields — never free prose; V1's prose headers both over- and under-counted), and **milestone
labels are written by the consolidator from the current `docs/ROADMAP.md` map at render time**, not
hand-copied by agents (the #305 reorder instantly staled 220 hand-written labels).

### Budget & models (V1 actuals → V2 estimate)

| | V1 actual | V2 estimate |
|---|---|---|
| Census | 42 passes ≈ 694 runs (Sonnet + 42 Opus-chunks) | 10–12 passes ≈ 180–220 runs (Sonnet) + 1 Opus pass ≈ 18 |
| Consolidate | — (done by hand inside triage) | ~10–16 Sonnet runs |
| Evaluate | — (conflated into census) | ~60–90 Opus ballot runs |
| Triage | 13 Sonnet agents | ~13 runs (Opus-class recommended — judgment work) |
| **Total** | **~707** | **~280–360 (≈40–50%)** |

### When to re-run (the actual reuse case)

- **Content update (mods added/removed):** do **not** re-census the world. Run Phase A over the **delta
  only**: new mods' chunks plus their likeliest partners (connectivity-graph adjacency (tools/connectivity, renamed from recipe-graph by #129) + methods-palette
  owners), 3–4 passes, then Phases B–D on the delta. Removed mods: drop their rows (the cut-mod exclusion
  already does this).
- **Rule/registry change (new motif, a retirement):** bump the **era**, re-ballot affected clusters
  (Phase C is re-runnable in isolation — that's the point of separating it), only re-census if the change
  opens a genuinely new search space.
- **Full re-census:** only for a structural redesign of the pack model. There is no scheduled "refresh."

## 4. Concrete tooling changes (build when a V2 run is GO'd)

1. `scripts/phase2-chunks.py` — add `--era`, write `briefing_sha` + per-chunk `model` into the manifest,
   **print the mode in the first line of output in caps**, and refuse to generate a context-fed pass if
   the prior pass's merge hasn't run (staleness guard).
2. **New `scripts/phase2-lint.py`** — per-chunk structural validation (field enums, dossier-id check for
   `from:`, methods-palette check for `via:`); the dispatch loop treats lint-fail as chunk-incomplete.
3. `scripts/phase2-merge.py` → **v2 keying + scoring**: key = exact structured fields (motif out);
   per-row provenance (`first_pass`, votes-by-era, phrasings); columns `accept_rate`, `margin`,
   `motif_votes` replacing `times_suggested`/`consensus`; hard warnings → lint-class errors for junk
   pillar/verdict; convergence log tracks **first-seen-of-eventually-corroborated** (F8), not raw uniques.
4. `PHASE2-BRIEFING.md` v2 — the structured line format above; drop the `NEW:`-colon spec (F6); the
   ballot briefing as a separate short doc (`PHASE2-BALLOT-BRIEFING.md`).
5. Retire `RUN-5-PASSES-PROMPT.md` (historical) — the dispatch prompt should be generated per-run from
   the manifest so its state numbers can't go stale (V1's prompt shipped wrong pass numbers, a wrong
   motif range, and the silent mode bug at various times).

**Why none of this was implemented now:** the V1 corpus is frozen mid-ratification — re-keying or
re-scoring it would fork the data the maintainer is reviewing; and F5 proved these designs need
validation against a *live* run, not retrofitting. The two fixes that operate on frozen data and are
verifiable instantly (the triage anchor-parser and the milestone remap) **were** applied — see
`WEAVE-PLAN-REVIEW.md` §2.

## 5. Re-run recommendation for the current cycle

**Don't.** Discovery is exhausted (F1) and triage has consumed the corpus; a V2 re-run now would
re-find the same core at new expense. The one cheap, high-value probe available — **if** the maintainer
wants more assurance before ratifying: a single Phase-C-style **ballot run over the 423 KEEPs only**
(~15–20 Opus agent-runs, no discovery) to attach an independent accept-rate + fragility flag to each
KEEP before issues are filed. Gated on GO; the ratification surface works without it.

> **Status update (2026-06-12, post-v0.7.0):** the §3 delta trigger has arrived — v0.7.0 shipped with
> 5 additions / 12 removals / 116 kubejs files of spine recipes, and #312/#129 delivered clean digests
> plus the mob-drop lens (220 drop-only items = the census's targeting seed; see `WEAVE-PLAN-REVIEW.md`
> §11). The **delta census is now the planned next discovery run**, scoped per §3: the five new mods
> (create_winery, aeroworks, aeroclaims, the two dynamic-trees compats) + spine mods whose recipes
> materially changed + the survival→aeronautics starved-pair probe. **Remaining precondition: dossiers
> for the five new mods** (digests exist; dossier regen is the #131-cautioned on-box step). Still gated
> on maintainer GO.

## 6. Appendix — how the numbers were computed

All measurements re-parse the committed `pass-*/chunk-*.candidates.md` files with the merge's own
parsing/keying logic (replicated read-only; `CUT_NS` extracted textually from `build-dossiers.py` —
never executed, per the #131 standing warning). First-seen = min pass number among a key's proposing
passes; the replication reproduces the canonical totals exactly (7,282 / 6,373 / 435) before measuring.
The F5 experiment swaps the key for `(mod, sorted ns:ids ∪ cleaned tokens, pillar, normalized via)` and
re-counts. Corpus-quality counts (untagged / empty-from / junk-pillar / junk-consensus / fragile-margin)
are single `awk`/python passes over `CANDIDATES.tsv` and the ≥5 slice. Rerunnable from the repo as-is.
