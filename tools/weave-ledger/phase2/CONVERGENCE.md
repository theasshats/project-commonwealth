# Phase 2.x — convergence log (the saturation curve)

> One row per distinct pass-count, upserted by `scripts/phase2-merge.py` on each merge. `new` = unique-candidate growth since the previous pass-count; when it flattens, the search has saturated.
> Tracking starts here (post cut-mod exclusion); earlier ad-hoc snapshots are in `DECISIONS.md`.
> **⚠ The library-freeze was retired at pass 16+** — every pass now covers all ~351 dossiers (≈160 were skipped before), so expect `new` to **re-open** (jump) before it settles again.

| passes | unique | ≥2 | ≥5 | Gate-2 core (≥5+ACCEPT) | opus | new |
|--:|--:|--:|--:|--:|--:|--:|
| 16 | 1991 | 556 | 111 | 86 | 225 |  |
