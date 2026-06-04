# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance/"is this island intentional?" · **[NOTE]** judgment worth surfacing but low-stakes.

---

## Open — needs your call

_(none yet — Phase 0/1 is tooling + understanding; no weaves authored, so no taste gates fired yet.)_

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
