# Decisions queue — taste-gate calls made during autonomous weaving

> Per the session directive ("proceed on best judgment, queue decisions"), every point the weaving plan
> reserves for a maintainer (docs/WEAVING-PLAN.md §10 — Gate 0 new-motif, Gate 2 candidate approve/reject,
> Gate 3 ambiguity) is logged here instead of blocking. **Ratify, override, or revert** at your leisure;
> each entry says exactly what I did and how to undo it. Nothing here is load-bearing until you confirm.

Legend: **[G0]** new motif/vocabulary · **[G2]** weave candidate approve/reject · **[G3]** ambiguous
theme/balance/"is this island intentional?" · **[NOTE]** judgment worth surfacing but low-stakes.

---

## Open — needs your call

- **[STATUS] Phase 0 + Phase 1 COMPLETE.** All **367/367 dossiers VERIFIED** and pushed. `check.py`
  coverage: **58 mods at ≥2 pillars · 235 support-role · 74 content mods at <2 pillars** — that 74 is the
  real **Phase-2 weave worklist** (run `python3 tools/weave-ledger/check.py` for the live list). Heaviest
  clusters in it: the Create-family addons anchored only to Create (`createaddition`, `create_ironworks`,
  `createmetalwork`, `createnuclear`, `createmechanicalcompanion`, …) and content mobs/structures
  (`alexsmobs`, `bosses_of_mass_destruction`, `bountiful`, the YUNG's/structure datapacks).
- **[G2-PREVIEW] Strong weave candidates the sweep surfaced** (for Phase-2 candidate lists, not authored):
  `tfmg`→aeronautics (diesel/LPG fuels + engines power Aeronautics) · `tacz`→Create gating + ammo
  coin-sink (M-05/M-08) · `smokeleafindustries`→economy (refined extracts→coin, M-09) · `meadow`→economy
  (cheese luxury, M-09) · `rottencreatures`/`undergroundworlds`→magic (themed drops via spirit_fire/imbue,
  M-02/M-11) · `samurai_dynasty`→Create (ore-doubling, M-03) · `upgrade_aquatic`→cooking chain (M-12) ·
  `createmetalwork` flagged as a natural **M-08 metals→coin hub** · `bountiful` (bounty board) is a ready
  **economy** anchor.
- **[CURATION] Flags the sweep raised for the thunderdome (#157), your call:**
  - `solclassic` (penalty SoL) **and** `solonion` (reward SoL) both installed — redundant Spice-of-Life
    forks (#91); pick one.
  - 6 **EMI** addons + `emi_letsdo_compat` are redundant display layers — the pack runs **JEI** per
    CLAUDE.md. Cut candidates.
  - `trashcans` = unlimited void sink; mildly anti-scarcity for this pack — consider gating/omitting.
  - `recipe_integration` ships ~3,700 conditional recipes, most for **uninstalled** mods (mekanism/MI/GT);
    worth an audit of which actually fire on this modlist.
  - ⚠ `samurai_dynasty:silver_ore` is tagged **silver** — watch unification vs. the CLAUDE.md
    Galosphere-palladium / Occultism-silver caveat (don't let it merge wrong).
- **[NOTE] Identity corrections recorded in dossiers** (namespaces were misleading): `timm`=Traveler's
  Titles (client) · `trek`=structure datapack (not stamina) · `zombiemoon`=Mutants & Zombies (mobs, not a
  moon event) · `underground_village`=Stoneholm · `vc_gliders`=Gliders · `s_a_b`=Create: Steel Armor Blocks.
- **[COST LESSON] Don't fan out Opus subagents.** Phase 1's first pass was ~23 parallel **Opus** agents and
  it exhausted the plan's usage in minutes (the final 60 were later resumed on Opus by explicit request).
  For future bulk passes the dossier sweep is templated web-research — **prefer Haiku 4.5 / Sonnet** via the
  Agent `model` override, a few at a time, not a wide Opus fan-out.

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
