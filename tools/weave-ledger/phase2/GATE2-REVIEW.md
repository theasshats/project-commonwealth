# Phase 2 — Gate 2 review (consolidated candidate list)

> The opportunity-mapping output across all 9 chunks, consolidated for your **Gate 2** sign-off. Full
> per-mod detail (accepts + rejects + reasons) is in `chunk-NN.candidates.md`. Nothing here is authored —
> approving a candidate sends it to **Phase 2.5** (a milestone-attached GitHub issue), where authoring
> becomes milestone work after this instance retires.

## Totals
**~98 accepted candidates · ~116 logged rejects (the considered-set) · ~57 leaves · 12 quality-audit checks**,
over the 72 content mods at <2 pillars + 14 ≥2-pillar audit mods. Rejects were *recorded, not dropped*
(red-team / theme-fit / guardrail kills, each with a reason) — review them in the chunk files too.

| chunk | type | acc | rej | leave |
|---|---|--:|--:|--:|
| 01 | coverage (mobs/food) | 20 | 16 | 8 |
| 02 | coverage (bosses/cooking/structures) | 19 | 10 | 12 |
| 03 | coverage (Create-family/tech) | 9 | 21 | 5 |
| 04 | coverage (drones/structures/events) | 11 | 8 | 6 |
| 05 | coverage (mobs/samurai/mushroom) | 14 | 12 | 6 |
| 06 | coverage (seasons/food/villages) | 9 | 13 | 3 |
| 07 | coverage (Create-tech/armor/gliders) | 11 | 21 | 13 |
| 08 | coverage (golems/tfmg) | 2 | 7 | 0 |
| 09 | quality-audit (≥2-pillar) | 3 | 8 | 4 |

## Motif distribution of accepts (the web is balanced, not Create-skewed)
- **Economy** — M-09 luxury→coin ×14, M-08 coin-from-scarcity ×7, M-14 bounty ×7 *(provisional)* = **28**
- **Magic** — M-11 ritual ×11, M-10 arcane-infusion ×12, M-02 mob-drop ×6 = **29**
- **Create-gating** — M-05 native-method ×9, M-06 sequenced keystone ×8, M-04 deco-recycle ×6, M-03 ore-double ×4, M-17 FE-charge ×4 = **31**
- **Processing** — M-12 ×14 · **Aeronautics** — M-13 fuel ×3 · **Boss/season/lunar** — M-15 ×3, M-22 ×2, M-16 ×1 · M-21 trade ×2 *(provisional)*

## Highlights (strongest accepted weaves)
- **Boss-key (M-15):** `alexsmobs:void_worm_beak`, `bosses_of_mass_destruction:obsidian_heart`,
  `deeperdarker:heart_of_the_deep` (Warden), `modulargolems` boss-metals → endgame Create/golem gates.
- **Magic infusion/ritual (M-10/M-11):** deeperdarker soul matter, alexsmobs ambergris, rottencreatures
  elemental flesh, endrem's themed eyes, brazil_legends spirits → Ars imbuement / Occultism spirit_fire.
- **Economy (M-08/M-09):** createmetalwork molten + create_ironworks tin/bronze + createnuclear uranium →
  Numismatics **mint**; smokeleaf extracts, trailandtales artisan foods, tide rare fish, immersive armors → **sell**.
- **Aeronautics (M-13):** TFMG diesel/gasoline/LPG → engine fuel; createoreexcavation fluid veins → distillation → propulsion.
- **New motifs in action:** **M-17** (smokeleaf/createaddition FE → charge magic gear), **M-22** (mowziesmobs
  moon-phase `elokosa_paw` → lunar-gated imbuement), **M-16** (sereneseasons season-sensor → Create logic).

## Quality-audit (chunk-09) — the ≥2-pillar track
Mostly **OK — connections sound** (extradelight, occultengineering, cbc_at, bits_n_bobs, cmpackagecouriers);
hubs `create`/`numismatics` correctly "weave TO, not from." **One real REWORK flag:** `chefsdelight` Cook/Chef
villager trades run on **emerald** economy, which unifies poorly with the pack's Numismatics coin → flagged
for the **0.9 economy review** (not a defect, a seam to reconcile).

## Surfaced for your decision
- **New Gate-0 motif candidates** (from rejects that fit no current motif — vocabulary-expansion fodder):
  **reactor SU / rotational power → aeronautics** (M-13 covers fluid fuel, not SU); **logistics-carrier /
  cardboard → aeronautics**; a **"behavioral-constraint"** motif (createpickywheels). Approve any → I add them.
- **`samurai_dynasty` silver** — agents independently refused to author until the palladium/silver split is
  resolved (#177). Good.
- **Provisional motifs M-14 (bounty) & M-21 (trade-seam)** candidates are tagged provisional throughout —
  M-21 especially (you lean no); decide before Phase 2.5 whether their issues get filed.

## Opus-vs-Sonnet comparison (chunk-01, independent re-map)
The Opus pass (`chunk-01.candidates.opus.md`) reached the same overall shape as Sonnet but added **marginal
depth** at ~2.3× the token cost (~132k vs ~56k): it caught **deeperdarker souls → `create:haunting` (M-19)**
where Sonnet used only Occultism (a cleaner in-spine bridge the dossier never named); reframed **tide →
M-16** (the priority lever) vs a weaker generic ritual; made a sharper **power/double-spend** call on
ambergris (one signature drop → one pillar); and caught a **cross-mod item overlap** (Soul Elytra) Sonnet
didn't surface. **Verdict:** Sonnet is ~85–90% as good and the right default for bulk mapping; reserve Opus
for the **highest-value seams** (boss/magic/economy) or as a **second-opinion pass** on Sonnet output, not
for every chunk.

## Next
Gate 2 = your approve/reject on the candidate set (per chunk file or in bulk). Approved candidates → **Phase
2.5**: one milestone-attached GitHub issue each (folding into existing pillar issues where they exist), then
the instance retires and authoring proceeds as milestone work.
