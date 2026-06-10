# Weave-plan review — audit of the V1 output (registry, triage, slates, path to issues)

> **Status: review findings for the maintainer** — written June 2026 by the post-triage review session,
> as an independent second pass over everything the discovery+triage run produced. Method: full read of
> the process docs and scripts; statistical passes over `CANDIDATES.tsv` (6,373 rows) and
> `triage/decisions.tsv` (3,174 decisions); three parallel read-only audits — a 14-mod deep re-judgment
> of triage slates, a structural analysis of all 423 KEEPs, and a full audit of the 42 LEAVEs + the
> one-anchor set; plus a recipe-graph islands × KEEPs join. Companion: `PASS-PLAN-V2.md` (the
> methodology review). **Nothing here touches the pack**; two data-integrity fixes were applied to the
> *triage tooling layer* and are described in §2 — everything else is a recommendation or a flag.
>
> **RATIFICATION OUTCOME (2026-06-10).** The maintainer agreed **F1** explicitly and delegated the
> remaining calls ("this whole branch and project is a test to see how well LLMs can do this work — you
> decide"). F2–F5 and §10's per-item calls were therefore resolved as recommended below, and applied as
> an auditable overlay: `triage/ratification.tsv` (every decision, with reasons) →
> `triage/apply-ratification.py` → **`triage/decisions-ratified.tsv` + `triage/RATIFIED-SLATE.md`**
> (the post-ratification truth: **395 KEEPs**, 21 M-04 patterns folded into one plumbing batch, 10
> singleton-REJECT drops, 3 reinstates, 5 LEAVE reclasses, M-28 moved to v0.11.0) and
> **`triage/FILING-PLAN.md`** (26 cluster issues, ready to file — **filing itself stays gated on an
> explicit GO**, since it writes to the shared tracker). The frozen batch files and `decisions.tsv`
> are untouched.

## §1 — TL;DR verdict

**The triage output is good and is worth ratifying — after corrections.** The discipline on the hard
rules is the strongest part: retired-economy rows were cut consistently even at high vote counts,
mechanism-pending motifs were not authored against, evidence-grounding cuts (rejecting popular rows the
dossier can't support) appear repeatedly, and **all 423 KEEPs trace to real corpus rows — zero
inventions; 60% rest on ≥5-pass core evidence**. The set's size and thin-spread shape (2.7 KEEPs/mod
over 155 mods) match the "every mod earns its place" philosophy.

The defects are specific and fixable, in priority order:

1. **(fixed this session)** Every milestone label predated the #305 pillar reorder — 170 economy KEEPs
   said v0.9.0, 50 survival KEEPs said v0.13.0. The ratification surface now remaps at render time (§2).
2. **(fixed this session)** The anchor statistics were a parser artifact — flagship mods (`ars_nouveau`,
   `trading_floor`) were listed as "one-anchor" because the parser truncated `magic (primary) + survival`
   at the first parenthesis (§2).
3. **Anchor headers also over-count** — at least 3 slates claim an anchor no kept weave delivers
   (securitycraft "survival", northstar "magic", minecolonies "create"). Headers are claims, not ground
   truth; the corrected REVIEW.md banner says so (§4).
4. **~21 KEEPs are blanket deco-crush (M-04) weaves that game the metric** rather than integrate
   anything; the cleanest fix is a design ruling, not per-mod edits — **flag F1, the most consequential
   single decision in this review** (§6, §9).
5. **11 KEEPs override corpus REJECT-consensus singletons** — the only evidence-quality hole in the 423;
   each needs a deliberate yes/no at ratification (§4).
6. **Don't file 423 issues.** File ~30–45 delivery-cluster issues; the audit found four bulk patterns
   covering ~20% of all KEEPs in four authoring sprints (§8).

What I explicitly do **not** challenge: the systems-loop model, the player-run-economy ruling, and the
two-anchor target *for content mods*. All three were stress-tested by this audit and held up — the
player-run rules in particular produced visibly better triage decisions than the pre-rework corpus
suggested was possible. The challenges below (§9) are boundary clarifications, not reversals.

## §2 — Corrections applied this session (triage tooling layer only)

Both fixes operate on the *generated* review artifacts; the 13 batch files (the agents' frozen record)
are untouched. Scripts changed: `triage/consolidate.py`, `triage/build-review.py`; artifacts
regenerated: `REVIEW.md`, `SLATE-SUMMARY.md`, `decisions.tsv`.

- **Milestone remap (post-#305).** The reorder swapped Survival and Economy on the roadmap
  (v0.9.0 = Survival, v0.13.0 = Economy & logistics). The scripts now remap the agents' pre-reorder
  labels at render time and carry the new milestone names. §1 of REVIEW.md now reads: v0.7.0 Create 117 ·
  **v0.9.0 Survival 50** · v0.11.0 Magic & MineColonies 86 · **v0.13.0 Economy & logistics 170**.
  (Quoted `milestone:` strings inside frozen detail text still say the old labels — banner explains.)
- **Anchor parse fix.** `anchors after:` headers are now parsed with parenthetical *spans* stripped
  instead of truncating at the first `(`. Corrected distribution: **2 @0 · 24 @1 · 65 @2 · 57 @3 ·
  12 @4 → 134/160 at goal** (was: 2/26/63/57/12 → 132/160, with `ars_nouveau` and `trading_floor`
  falsely on the one-anchor list). Residual caveat: the headers remain agent free-text and §4 shows they
  over-count too — V2's triage format makes these fields machine-derived (`PASS-PLAN-V2.md` Phase D).
- Renamed the REVIEW.md title to Project Commonwealth and added a banner documenting both corrections.

## §3 — Data-integrity findings (beyond the two fixed)

- **Stale-label debt from #305 extends past the triage dir:** `TRIAGE-PLAN.md` (the milestone map in
  §3 of the method), `RUN-5-PASSES-PROMPT.md` (footer map), `NEXT-SESSION.md` (KEEP-by-pillar lines),
  `ECONOMY-DEEMPHASIS.md` is fine, `docs/SYSTEMS.md` was already updated by the merge. These are
  historical/process docs — a one-line erratum note is enough; rewriting them isn't (NEXT-SESSION got
  the banner since it's the first file a fresh session reads).
- **Number drift between summary docs:** NEXT-SESSION's rollup ("9 @4, 55 @3, 62 @2, 10 @1") never
  matched SLATE-SUMMARY (it predates the REVIEW build). The regenerated SLATE-SUMMARY/REVIEW are
  canonical; treat prose rollups elsewhere as snapshots.
- **Old-name references** ("Derpack X") survive in `PHASE2-BRIEFING.md`, `TRIAGE-PLAN.md`,
  `STATUS-TLDR.md`, `RUN-5-PASSES-PROMPT.md`, and STATUS-TLDR's pass-count (35) is stale (42). Cosmetic;
  batch with the next doc sweep.
- **Corpus hygiene numbers** (context for anyone mining `CANDIDATES.tsv` later): 429 rows have no
  parseable motif, 99 have an empty `from`, ~156 carry non-canonical pillar values (`any`, `n/a`,
  `scarcity`, `production`, `support`), and 11 carry junk consensus strings. None of these blocked
  triage (it read per-mod, not per-field), but they're invisible to any motif/pillar query — see
  `PASS-PLAN-V2.md` F4 for the structural fix.

## §4 — Triage quality (the 14-mod re-judgment + KEEP-set structure)

**Verdict: AGREE or MOSTLY-AGREE on 14/14 sampled slates** (minecolonies, occultism, vinery,
securitycraft, mcwroofs, formationsnether, trading_floor, oceansdelight, friendsandfoes, terralith,
alexsmobs, northstar, tfmg, touhou_little_maid). Highlights of what's *good*, because it should be kept
in any future process: securitycraft's top row by votes (M-08 keycard-coin, 10 passes) was correctly
killed as a coin-sink; friendsandfoes' ts=7 ACCEPT mob-drop rows were cut because the dossier names no
unique drops (evidence-grounding over vote-counting); northstar's `astronomical_reading` was denied M-37
because a tradeable item can't be a knowledge gate (correct motif discipline).

**Systematic defects found:**

1. **Anchor-header over-count.** securitycraft claims survival with every survival candidate cut;
   northstar claims magic with all four magic routes cut; minecolonies counts an inherited (already
   authored) Create weave as if this slate added it. The dashboard's "134/160 at goal" is therefore an
   upper bound. Treat `anchors after:` as the agent's claim; the KEEPs' actual target pillars are the
   evidence.
2. **M-18 ↔ M-30 conflation (recurring).** Twice the triage treated "a spirit-miner can fetch the scarce
   material" (M-18, the acquisition workaround) as making "this material is region-locked and forces
   trade" (M-30, the scarcity anchor) redundant. They are opposite edges of the same scarcity.
   Concrete case to reverse: **occultism `silver_ingot` → M-30 should be reinstated** (real silver is
   the canonical regional-scarcity material; the cut reason was a motif error).
3. **Reagent double-listing.** alexsmobs keeps ambergris in *both* the M-10 imbuement KEEP and the M-11
   spirit-fire KEEP's input list, then cuts a standalone row for "double-spending M-10" — internally
   contradictory. Scope ambergris to M-10; M-11 keeps ender_residue/void-worm parts.
4. **Eleven KEEPs rest on singleton corpus rows whose consensus is REJECT** (the structural audit's
   list: appleseed seasonal-stress, create_connected fan-catalysts, createmechanicalcompanion M-06,
   createoreexcavation fluid-vein→aero, createtreadmill→survival, dndesires rubber + haunted-sails,
   dungeons-and-taverns loot→M-15, fluid centrifugal-pump, gnkinetics worm-gear→colony, tfmg
   byproducts-M-32 variant). These are the only place the triage *overrode* the corpus rather than
   consolidating it. Each needs an explicit ratify/reject — default to reject unless the slate's
   stated reason is independently convincing (dungeons-and-taverns→M-15 in particular misuses a
   boss-gate motif for dungeon chest loot).
5. **Minor reversals worth making at ratification** (from the deep audit): trading_floor's M-08 KEEP
   should drop "emeralds" from its loop phrasing (NPC-faucet adjacency the slate itself rejects
   elsewhere); terralith's M-30 KEEP should be marked build-coupled (it presumes GTMOGS biome-keying
   that isn't authored); oceansdelight's fugu M-02 is a borderline keep (ts=4 for, ts=8 opus against in
   a sibling phrasing) — keep but flag fragile.

**KEEP-set structure** (full-set numbers): 423 KEEPs / 155 mods, max 7 on one mod (tfmg) — thin and
broad, matching the design. Delivery shape: **~40% recipes, 21% loot-seeds, 17% config, 14% KubeJS
scripts, 5% emergent-no-authoring**; every KEEP has a parseable delivery. Cross-mod duplication is
minor (~2–3%) and mostly *intentional* parallel supply (six steel mods feeding one `c:ingots/steel`
tag-join; five Macaw mods sharing one crush pattern; five coin-minting mods on one M-08 mechanic) —
which is precisely why issues should bundle by mechanic, not by weave (§8).

## §5 — Coverage: LEAVEs, one-anchor mods, flagged conflicts

**The 42 LEAVEs all hold.** Full audit verdict: no hard LEAVE-WRONG. (The handoff's fishingreal
suspicion dissolves: the old library-freeze wrongly *skipped* it; once reviewed, its dossier is
genuinely 0 items/0 loot — the LEAVE is correct.) Three soft contests a maintainer could reasonably
reinstate, all colony-flavoured: **comforts** (M-28 colony bedroll requests), **aeronautics_dyeable_components**
(M-28 fleet livery), **copycats** (M-23 hull-skin panels, 4 ACCEPTs). None is load-bearing.

**The one-anchor list is mostly fine — and smaller than it looks.** After the §2 parse fix (26 mods)
and the deep audit, the list decomposes into:

- **Counting artifacts, actually at goal:** bits_n_bobs, rechiseledcreate, byzantine (deco/Create-method
  *is* their second anchor at dossier level, or two KEEPs landed one pillar) — see flag F3.
- **Genuine ceilings — accept at 1:** ars_n_spells (magic↔magic by nature), aileron,
  create_pattern_schematics, endermoon, formations, formationsnether, gravestone, mutantszombies,
  cmpackagecouriers, create_train_parts, create_ultimate_factory, bettermineshafts, naturescompass,
  sliceanddice, vc_gliders (2 weaves, 1 pillar — honest).
- **Reinstate a second weave (corpus-supported, wrongly cut):** **copperagebackport** — Copper Golem →
  M-28 colony courier/warehouse role, 2 ACCEPTs incl. Opus, cut on a weak "overlaps Create logistics"
  argument; the strongest miss in the whole audit. **mcwfences** — metal fences → M-28 colony
  construction orders, for parity with sibling mcwdoors which kept the identical route.
- **Should be LEAVE, not one-anchor:** zombiemoon (zero distinguishing drops; shares mutantszombies'
  jar; its slate even says "cannot reach 2 without custom drops"), trashcans (the M-06
  sequenced-assembly gate on a void-can is a forced weave on an anti-scarcity item; the slate itself
  flags it), and — pending flag F1 — mcwroofs/mcwstairs/mcwwindows.

So the *real* "stuck at one pillar with no fix" set is ~4–6 mods, not 28. The §2 list in REVIEW.md is a
decision queue, not a problem list.

**The 8 flagged conflicts (REVIEW §2) — recommendations:** create_ultimate_factory renewable-diamond:
yes, KubeJS-disable, but that's a pack change — file it as a curation issue under the appropriate
milestone, separate from the weave program. friendsandfoes: keep the CUTs until the dossier confirms
unique named drops (it currently doesn't). exposure silver-route: the slate's M-29 retag is correct and
the palladium gotcha is respected — confirm and close. minecolonies M-28 vs M-29: **M-28** — the
colony-magic-wing is the colony *route* extending into magic, not a recipe-level cross-input; M-29 would
dilute its meaning. northstar M-37: agree with the cut and the stated reinstate condition.
create_enchantment_industry → #220: correct routing. oceansdelight tone call: fine. edf delivery
constraint: fine.

## §6 — Motif registry (M-01…M-38)

**The taxonomy held up in use** — 31 of 35 live motifs appear among the KEEPs, the four absentees are
the three mechanism-pending (correctly absent) plus M-27 (deliberately unassigned). The
retired/cut/mechanism-pending markings did real work in both discovery and triage. Two structural
problems and one ruling-request:

1. **The catch-all boundaries are genuinely ambiguous, and it costs data quality.** Half the corpus
   (3,213 rows in 1,199 groups) is the same (mod, item, pillar) edge tagged with different motifs —
   M-12 vs M-04 (raw-material processing vs deco recycling), M-10 vs M-01 (infusion vs currency), M-05
   vs M-06 vs M-20 (gating tiers), M-15 vs M-34 (boss gate vs boss supply), M-18 vs M-30 (§4). The fix
   is **not** a registry redesign mid-flight: add a thin **family layer** for statistics and dedup
   (processing {M-03,04,12,32} · infusion {M-01,10,11,19} · aero-supply {M-13,23,24,31} · gates
   {M-05,15,28,29,37} · time/decay {M-25,26,35,36,38} · event-gated {M-07,16,22} · currency/labor
   {M-08,30,33,34}), and treat the exact motif as an annotation voted on at evaluation time
   (`PASS-PLAN-V2.md` Phase C). The registry text itself stays as is.
2. **M-04 is doing something no other motif is allowed to do** — see flag **F1** (§9). Its KEEPs are
   ~21 nearly-identical "crush this mod's stone deco back to gravel" rows. The registry's own player-run
   rework retired M-09 on exactly this logic: a link that applies to *everything* with zero design
   friction is the ambient endpoint of a system, not a weave. Crushing deco is ambient Create behaviour
   the same way sellability is ambient economy behaviour.
3. **Registry bookkeeping:** `docs/WEAVE-LEDGER.md` §3 still promises every Phase-2 proposal gets logged
   in the weave log with `weaves.json` kept in sync — in reality the corpus lives in `CANDIDATES.tsv`
   and the decisions in `decisions.tsv`, and the weave log is empty. Flag **F5**: declare the TSVs the
   canonical "considered set" record and reword §3 (one paragraph), or commit to back-filling the log
   at authoring time. Don't leave the promise dangling into Phase 3.

## §7 — Systems coverage vs the north star

**Does the KEEP set move the pack toward "one or two cohesive webs"? Mostly yes, with three caveats.**

- **Island coverage is good.** Joining the fresh recipe-graph island table (81% giant component, post-merge
  data) against the KEEPs: 51 of 56 islanded mods carry ≥1 KEEP; the five with none are the spine itself
  (`create` — correctly LEAVE'd as the weave *target*) and four LEAVE'd cosmetics (aeronautics_dyeable_components,
  just_blahaj, gamediscs, immersive_paintings). No real gap.
- **Caveat 1 — weaves ≠ web.** An anchor attaches via one or two items; the island metric counts every
  variant. The big deco islands (more_slabs: 850 items across 745 micro-clusters; quark: 466/255) are
  *unreachable by weaves* — they need tag/stonecutting **family wiring**, a different workstream
  (CONNECTIVITY.md's per-material bridges), and shouldn't be held against the weave program.
- **Caveat 2 — two pillar-pairs are genuinely starved.** Across 423 KEEPs: survival→aeronautics is
  ~zero (no KEEP makes weather/season/cold drive aeronautics demand — for the flagship build milestone
  that's a missing pull), and create→magic is thin (≈3 of 70 magic-target KEEPs originate from
  Create-spine mods; the flow is overwhelmingly outside-mods→magic). Both are worth one targeted
  discovery probe when their pillars build (not a full re-run — `PASS-PLAN-V2.md` §3 delta mode).
- **Caveat 3 — the economy block (170) is heavy but front-loads risk, not work.** Post-#305 it lands
  *last* (v0.13.0), which actually fits: the audit shows the block is dominated by M-28 colony config
  (37 KEEPs) and loot/config edits rather than recipes — light authoring, heavy *mechanism dependency*.
  Two concentration risks to manage: **(a)** 35+ M-28 KEEPs assume MineColonies' request/research API
  behaves as modelled — stress-test a handful in-game before the batch is authored (it's also a
  v0.11.0 dependency now that MineColonies builds there); **(b)** a subset of economy KEEPs presume
  tooling that #221/#240 haven't resolved (dynamic pricing, minting flows). At ratification, split the
  170 into "authorable against existing mechanics" vs "parked on #221/#240" rather than re-balancing
  pillar counts — the imbalance is mostly *delivery type*, not misdesign. If #309 later splits
  logistics from economy-value, the M-13/M-23/M-24/M-31 group moves with logistics cleanly.

## §8 — Path to issues (Phase 2.5)

TRIAGE-PLAN's "one issue per accepted weave" would mint ~423 issues — wrong unit. The audit found the
natural authoring unit is the **delivery cluster** (one mechanic, many mods): the six steel suppliers
are one tag-join recipe; the five Macaw crush patterns are one KubeJS loop; the 37 M-28 rows are one
colony-config working session; the ~11 coin loot-seeds are one loot-injection script. Four bulk clusters
alone cover ~85 KEEPs (20%).

Recommendation:
1. **Maintainer ratifies on the corrected REVIEW.md** (tick/strike per line), with §4's 11
   singleton-REJECT KEEPs and §5's reinstates/should-LEAVEs decided explicitly.
2. **File ~30–45 cluster issues**, one per delivery-mechanic per milestone (e.g. "v0.7.0: M-04/M-12
   crush+mill batch — mods A…N", "v0.11.0: imbuement reagent batch", "v0.13.0: M-28 colony request
   wave 1"), each carrying its member weaves as a checklist plus a **`verify:` precondition line**
   (what playtest must confirm before authoring — the 9 DEFER→playtest items model this well; many more
   KEEPs deserve one, e.g. every cross-mod tag assumption).
3. Per-mod umbrella issues only for the genuinely deep slates (tfmg, northstar, occultism, minecolonies,
   aeronautics) where a mod's weaves form one coherent build story.
4. Keep the close-on-stage convention (`docs/TRIAGE.md` §5): a cluster issue closes when its weaves land
   on the version branch, `playtest-blocked` until verified.

This keeps milestone bars meaningful (45 bars climb; 423 would be noise) and matches how the work will
actually be authored.

## §9 — Flags for maintainer ratification (resolved 2026-06-10 — see the banner; statuses inline)

- **F1 — RATIFIED (maintainer-agreed). Demote M-04 from "anchor-granting weave" to default plumbing.** A blanket "stone deco crushes
  to gravel" applies to every block family in the pack with zero design friction — the same test that
  retired M-09 for the economy. Proposal: implement deco-crush as one generic KubeJS rule (or per-material
  family), stop counting it as a mod's second anchor, and re-class the M-04-only mods (mcwroofs,
  mcwstairs, mcwwindows; bits_n_bobs and rechiseledcreate survive via their other anchors) as
  **support-role: decoration palette** per SYSTEMS §6 — which the model already sanctions. mcwfences
  keeps a real weave (metal recovery + the M-28 reinstate). Net effect: ~21 KEEPs collapse into one
  plumbing task, the one-anchor list shrinks to the genuine ceilings, and the metric stops being
  gameable in exactly the way `docs/WEAVING-STRATEGY.md` warns about ("bridge-for-the-metric…
  Goodhart"). **This is the highest-leverage single ruling available on the slate.**
- **F2 — DECIDED (delegated). Hub-mod anchor policy.** `create` was LEAVE'd as "the weave target"; `ars_nouveau` (the magic
  hub) sat on the one-anchor worklist until the §2 fix. Rule to ratify: **system-hub mods are the
  anchor *suppliers*; the two-anchor target applies to content mods, and a hub's "second anchor" is
  satisfied by cross-pillar weaves it hosts** (Ars hosting M-17 charging / M-33 enchant-services
  already ties it to Create/economy from the hosting side). One sentence in CURATION.md ends the
  ambiguity.
- **F3 — DECIDED (delegated). Define "anchor" countably.** Today it's free prose. Proposal: a mod's anchors = its dossier
  home system(s) + the distinct target pillars of its ratified weaves, with **support-role anchors
  (decoration/QoL/library) named as such and excluded from the 2-anchor arithmetic**. This turns the
  §2 dashboard into a computable fact (and is the Phase-D format change in PASS-PLAN-V2).
- **F4 — DECIDED (delegated). Park mechanism-dependent economy KEEPs explicitly.** At ratification, tag each v0.13.0 KEEP
  "authorable now" vs "blocked on #221/#240/#309" so the economy pillar's true ready-work is visible
  and the #309 split (if taken) has a pre-sorted list. (Surface only — no re-bucketing done here.)
- **F5 — DECIDED (delegated). Reconcile WEAVE-LEDGER §3's weave-log promise with reality** (§6.3): the
  TSVs (`CANDIDATES.tsv` + `decisions-ratified.tsv`) are now declared the canonical considered-set
  record; `docs/WEAVE-LEDGER.md` §3 reworded.

## §10 — Recommended next moves (ordered) — status as of ratification

_Items 1–2 are DONE via the ratification overlay (`triage/RATIFIED-SLATE.md` is the result); item 3 is
PREPARED (`triage/FILING-PLAN.md` — filing gated on GO); items 4–6 unchanged._

1. Maintainer reads the regenerated `triage/REVIEW.md` end-to-end **after** ruling on F1–F3 (F1 changes
   ~21 lines of what's being ratified — rule first, ratify once).
2. During ratification, action this review's specific calls: the 11 singleton-REJECT KEEPs (§4.4 —
   default reject), the two reinstates (copperagebackport M-28, mcwfences M-28) and the occultism M-30
   restore, the two should-LEAVEs (zombiemoon, trashcans), the trading_floor/terralith/oceansdelight
   wording fixes, and the three soft LEAVE-contests if wanted (§5).
3. File issues by delivery cluster (§8), each with a `verify:` precondition; per-mod umbrellas only for
   the five deep slates.
4. Schedule the MineColonies M-28 stress-test (a few requests authored + playtested) **before** v0.11.0
   colony work hardens 37 KEEPs' assumptions.
5. Optional, gated: the one cheap assurance probe — a ballot pass over the 423 KEEPs
   (`PASS-PLAN-V2.md` §5) if independent accept-rates are wanted on the slate before filing.
6. No discovery re-run this cycle (`PASS-PLAN-V2.md` §5). Next discovery is delta-mode, on the next
   content update, under the V2 engine.
