# Pack fixes found by the V2-S sweep — FILED as #333 (v0.8.0 Stabilization)

> These are **shipped-pack bugs**, not weaves — found in passing while verifying the weave slate
> against shipped kubejs/data. They belong to the pack's own milestones (v0.8.0 stabilization
> charter fits all of them), filed separately from the weave program. Evidence chunk in brackets.

1. **Reagent double-booking: `grimoireofgaia:rotten_heart`** — listed as a Gaia boss key in
   `05-tags.js` (`#pcmc:boss_keys`) while already spent as a spirit-fire reagent in
   `35-magic-web-mobs.js`. Fix: swap Gaia's roster entries to the mini-boss busts. [P-2]
2. **Reagent double-spend: `mowziesmobs:ice_crystal`** — `35-magic-web-mobs.js` imbues it →
   water essence while `40-gates.js`/`05-tags.js` spend it as the T3 boss key, violating the
   one-master rule. Fix: re-point the imbuement input (glowing_jelly carries the motif) or drop
   that imbue line. Escalated in `DECISIONS.md`. [S-14]
3. **Lock-wall bypass: Stoneholm worker-room loot** — `underground_village` 2.0 chests drop
   `create:precision_mechanism` + `create:electron_tube`, the exact ids `spine/10-locks.js`
   route-locks (#220 anti-erosion wall). Fix: LootJS trim of those entries. [S-15]
4. **Lock-wall bypass #2: Create Better Villagers native trades** — villager trades aren't
   recipes, so CBV's Andesite/Brass/Copper Worker trade lists sell spine-locked parts around the
   wall. Fix: audit/config-cap CBV trade lists before v0.9.0. [S-18]
5. **Stale gate reference:** `spine/40-gates.js` still references removed `createnuclear`
   (dead gate) — and its Gaia comment block is stale per fix 1; the Wroughtnaut comment is wrong
   per the loot digest (`earthrend_gauntlet` drops from the Sculptor trial, and the Wroughtnaut's
   real drops gate nothing). [reconciliation, S-14]
6. **Loop-inert loot seeds:** the kobold loot override seeds `grimoireofgaia` fur/box_iron that
   nothing consumes — harmless, but either give them sinks (gaia's M-4 cluster) or trim. [S-01]
7. **Dossier-layer data fixes (on-box regen list):** zombiemoon's dossier describes
   mutantszombies (cross-contamination); create_hypertube's claims sequenced_assembly crafting
   the digest disproves; EDF's denies the `minecraft:entities/ender_dragon` override its loot
   digest shows; kobolds/undergroundworlds/tacz AUTO sections lag current jars; miningspeedtooltips'
   dossier survives its 0.6.3 removal. [S-13, S-20, S-17, S-01, S-18]
