# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance/"is this island intentional?" · **[NOTE]** judgment worth surfacing but low-stakes.

---

## Open — needs your call

- **[NOTE] Phase 1 status (paused at usage limit).** Phase 0 tooling = done. Dossiers: **307/367 filled
  & VERIFIED**, all pushed. **60 remain as skeletons** — the s–w tail (batches 16–23) whose agents hit the
  account session limit mid-run. Resume them with `tools/weave-ledger/_batches/batch-16..23.txt`; the
  generator's merge preserves finished cards, so a re-run is safe and only fills skeletons.
  Notable content mods still pending: `tfmg`, `touhou_little_maid`, `sereneseasons` (survival core),
  `sable`/`sky_whale_ship` (aeronautics), `samurai_dynasty`, `smokeleafindustries`, `securitycraft`,
  `supplementaries`, `terralith`, `titanium`, `meadow`, `ribbits`, `s_a_b`.
- **[COST LESSON] Don't fan out Opus subagents.** Phase 1 was run as ~23 parallel **Opus** research
  agents — that exhausted the plan's usage in minutes. The dossier sweep is templated web-research:
  **run it on Haiku 4.5 (support mods) / Sonnet (content mods)** via the Agent `model` override, a few at
  a time, not a 23-way Opus fan-out. Apply this to the remaining 60 and to any future bulk pass.

## Standing defaults I'm proceeding on (override any time)

- **[NOTE] Ledger location** — `docs/WEAVE-LEDGER.md` + `tools/weave-ledger/` (the plan's §15 proposal),
  not folded into `RECIPES.md`. Undo: move the files and update references.
- **[NOTE] `check.py` enforcement** — advisory only (not wired into `pr-checks.yml` yet; plan proposed
  advisory→required at 0.15).
- **[NOTE] Seed motifs** — the 12 motifs M-01..M-12 from the plan are seeded as the starting vocabulary
  (M-01..M-07 marked `established` from existing weaves; M-08..M-12 `proposed`). Treat M-08..M-12 as
  pending your Gate-0 blessing before they're used to author.
- **[NOTE] Dossier keying** — one card per *content namespace* (e.g. `ars_nouveau`), not per jar; 2 addon
  jars ride a parent namespace with a `__<jar>` suffix (`emi__…`, `lithostitched__…`).

## Ratified / closed

_(none yet)_
