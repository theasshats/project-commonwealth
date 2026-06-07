# Phase 2.x — convergence log (the saturation curve)

> One row per distinct pass-count, upserted by `scripts/phase2-merge.py` on each merge. `new` = unique-candidate growth since the previous pass-count; when it flattens, the search has saturated.
> Tracking starts here (post cut-mod exclusion); earlier ad-hoc snapshots are in `DECISIONS.md`.
> **⚠ The library-freeze was retired at pass 16+** — every pass now covers all ~351 dossiers (≈160 were skipped before), so expect `new` to **re-open** (jump) before it settles again.
> **`unique` / `Gate-2 core` here count ALL discovered candidates, incl. the historically-proposed dead motifs** (M-09 retired, M-14/M-21 cut — #163/#240); the **live** working corpus in `CANDIDATES.md` excludes them (-> `CANDIDATES-dead-motifs.tsv`), so it is smaller.

| passes | unique | ≥2 | ≥5 | Gate-2 core (≥5+ACCEPT) | opus | new |
|--:|--:|--:|--:|--:|--:|--:|
| 16 | 1991 | 556 | 111 | 86 | 225 |  |
| 19 | 2839 | 831 | 174 | 126 | 307 | +848 |
| 24 | 3529 | 1150 | 324 | 240 | 394 | +690 |
| 27 | 3866 | 1306 | 397 | 292 | 450 | +337 |
| 30 | 4676 | 1513 | 451 | 332 | 508 | +810 |
| 35 | 5850 | 1866 | 557 | 408 | 629 | +1174 |
| 36 | 6124 | 1955 | 592 | 436 | 643 | +274 |
| 37 | 6332 | 2024 | 618 | 455 | 664 | +208 |
| 38 | 6565 | 2095 | 637 | 471 | 685 | +233 |
