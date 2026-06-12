# Weave program — next-session runbook (read with CLAUDE.md; layout map in README.md)

> **STATE (2026-06-12, post-housekeeping): discovery and verification are COMPLETE; the program is
> in Phase 3 (authoring).** Final slate: **287 ratified KEEPs** (v0.8.0: 53 + 14 plumbing — FILED
> as #333–#341 · v0.9.0: 40 · v0.11.0: 99 · v0.13.0: 95-FROZEN on the economy/government plan) +
> **64 DONE** (verified shipped/native). Custom-mod approvals routed (#118, #331, #332, #329, #330,
> #239); coin-loot-seed ruling SIGNED (#328). The slate pipeline is
> `triage/ratification.tsv → apply-ratification.py → decisions-ratified.tsv + RATIFIED-SLATE.md`.
>
> **NEXT MOVES:** (1) Phase-3 authoring sessions work #333–#341 via `../PHASE3-AUTHORING-PROMPT.md`
> (plan-first, one issue per exchange, maintainer approval gate). (2) v0.9.0/v0.11.0 clusters file
> from `triage/FILING-PLAN.md` on maintainer GO. (3) Next discovery is DELTA-MODE only, on the next
> content update, per `PASS-PLAN-V2.md` §3. (4) Dossiers refreshed + pruned 2026-06-12 (see Standing rules) — regen is now routine per content update.

## History (full story in `archive/` + `WEAVE-PLAN-REVIEW.md`; raw outputs in git history at `7cbf8a8^`)

- **Discovery:** 42 passes / 694 agent-runs → 7,282 candidates (6,373 live in `CANDIDATES.tsv`).
- **Triage:** 13 batches over 202 mods → 423 KEEPs (frozen in `triage/decisions.tsv` + `batch-*.md`).
- **Review + ratification (2026-06-10):** independent audit; F1 maintainer-agreed, F2–F5 delegated;
  423 → 395 KEEPs; milestone remap + anchor-stat fixes.
- **Post-v0.7.0 reconciliation:** 12 removed mods cleared; create bucket re-homed; → 364.
- **V2-S sweep (22 chunks, all 345 mods, ~3.05M tokens, 620 findings) + final fold:** → 287 KEEPs,
  64 DONE, the coin-faucet ruling, the pack-fix bundle (#333), custom-mod candidates.
- **Pilot filing (2026-06-12):** v0.8.0 clusters #334–#341 + fixes #333; housekeeping pass.

## Standing rules

- Branch `weaving-plan`: the program's home — slate pipeline, evidence, playbooks. **Proposal/record
  only: pack authoring happens on version branches** (Phase 3 uses `v0.8.0`). No PRs from here;
  maintainer owns merges.
- **Dossiers are weave-program jurisdiction** (maintainer, 2026-06-12). `scripts/build-dossiers.py`
  is safe again (the #131 caution died with #312's clean digest): default mode preserves curated
  heads and now PRUNES dossiers of removed mods. **Run it after every content update**, once
  ground-truth.yml has landed the digest changes; review the git diff; hand-fix any curated-head
  claims the update invalidates.
- The frozen records (`CANDIDATES.tsv`, `triage/decisions.tsv`, `batch-*.md`, `sweep/*.findings.md`)
  are never edited — all change flows through `triage/ratification.tsv`.
- Any discovery/triage/sweep fan-out is gated on maintainer GO + usage budget.
