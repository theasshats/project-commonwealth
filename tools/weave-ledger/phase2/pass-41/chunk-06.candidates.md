# Phase 2 candidates — chunk-06 (context-fed)

## searchables   [anchors: support (1)]
LEAVE — pure client-UI library/API; zero items, zero methods, no gameplay surface to weave.

## resourcefullib   [anchors: support (1)]
LEAVE — cross-platform utility/API library; zero items, zero methods, no gameplay surface to weave.

## yungsapi   [anchors: support (1)]
LEAVE — structure/jigsaw API library for YUNG's mods; zero items, zero methods, no gameplay surface to weave.

## controlling   [anchors: support (1)]
LEAVE — client keybind-menu UI mod; zero items, zero methods, no gameplay surface to weave.

## foodeffecttooltips   [anchors: support (1)]
LEAVE — client tooltip-display QoL; zero items, zero methods, no gameplay surface to weave.

## cubes_without_borders   [anchors: support (1)]
LEAVE — client Video-Settings borderless-window option; zero items, zero methods, no gameplay surface to weave.

## detect-afk-1.2.2   [anchors: support (1)]
LEAVE — server-side AFK detection utility; zero items, zero methods, no gameplay surface to weave.

## blockui   [anchors: support (1)]
LEAVE — XML UI-framework library for MineColonies/Structurize; zero items, zero methods, no gameplay surface to weave.

## aeronauticscompat   [anchors: aeronautics (1)]
LEAVE — compat-patcher glue mod (required, per CLAUDE.md) that makes foreign mods ship-aware on Sable contraptions; zero items, zero methods, nothing to weave.

## bcc   [anchors: support (1)]
LEAVE — server/client version-mismatch handshake utility; zero items, zero methods, no gameplay surface to weave.

## betteroceanmonuments   [anchors: survival (1)]

Existing rows converge on: M-02 loot-seed (magic reagent into monument chests — strong consensus) and M-08 coin-seed (high accept rate). The M-15 boss-key rows are split, and M-30 regional-scarcity appeared once late. What the prior passes missed:

1. The M-30 angle is actually underexplored. The deeper issue is that Better Ocean Monuments concentrates the monument *as a deep-ocean-only location* — not merely "a dungeon with loot" but a *region-specific* structure that only ocean-settling players control. That's a genuine regional-scarcity gate on whatever is seeded into it, not just a loot table. No prior row has articulated the M-30 frame cleanly as the *reason* why the loot-seed of a magic reagent or coin also functions as a regional gate.

2. The M-15 (boss-key) debate: the Elder Guardian IS a boss (unique hostile with a specific death mechanic, not a generic mob). A rare aquatic-component seeded as an *Elder Guardian drop* (not a chest) would be M-15-eligible, distinct from the chest-loot rows. This has not been proposed cleanly.

- NEW | from: monument chest loot (ocean-monument-exclusive deep-ocean structure) | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: whatever is seeded into monument chests is by geography region-locked to ocean players — a land-locked Create engineer who needs it must trade or sail; the aquatic specialization gate is M-30 carried by loot-table injection, not ore-gen
- NEW | from: Elder Guardian unique drop (seeded via loot-table, distinct from chest loot) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elder Guardian is the monument's capstone boss — seeding a rare aquatic-core component as its death-drop (not just a chest) gives the mod a boss-key role (M-15) that the chest-loot rows cannot: you must *defeat* the guardian, not merely open boxes

OK — existing M-02 and M-08 rows are sound and well-supported; the two NEW rows above add the missing regional-scarcity frame (M-30) and the boss-drop distinction (M-15 via guardian death-loot vs chest-loot).

## createpickywheels   [anchors: Create (1)]

The existing candidate pool (30+ rows) is almost entirely the same behavioral claim re-expressed: "the biome-gate on water-wheels/windmills is a survival flavour." The rows that ACCEPT do so under M-30 or M-16, but both motifs require a *material* flowing through a *method* — this mod has zero items and no recipe-types. That means every ACCEPT row is itself mis-motifed, and the REJECT rows calling that out are correct.

What has NOT been proposed: a direct CHALLENGE to the surviving ACCEPT rows and an explicit resolution.

- CHALLENGE | from: biome-gated power placement (no material) | via: config-tie (behavioral, no recipe) | to: survival | motif: M-30 | verdict: REJECT | hook: M-30 requires a material whose key input is region-locked by ore-gen so the good must be traded — a location constraint on generator *placement* produces no tradeable good and routes through no recipe type; the existing ACCEPT rows under M-30 misapply the motif. The correct call is LEAVE for a 2nd anchor: the mod is a Create-internal balance patch that deepens the survival flavour of the Create spine without adding a second pillar. It is well-placed at 1 anchor (Create); the biome-gate IS the survival texture of Create power, but there is no method-routing motif that can carry it without items. No new candidate surfaces here that the prior passes missed.

LEAVE (2nd anchor) — zero items/blocks/methods; the behavioral biome-gate is real survival flavor but no motif covers a placement-constraint-only connection; the correct verdict is Create (1 anchor, well-placed).

## sliceanddice   [anchors: Create, survival (2)]

Dossier: already 2-anchor (Create + survival). The prior rows mostly argue about the Sprinkler-fluid angle (split/noisy), the fertilizer M-26 sink (1 ACCEPT), and season-gated inputs (M-16, 1 ACCEPT each). The mod is well-placed at 2 anchors.

The one genuinely underexplored angle: the **Sprinkler's fluid-intake creates a real cross-route dependency** when the fluid required is magic-sourced. The 2 prior proposals under M-29 (magic fluid through Create sprinkler → crop boost) are split because they're vague about *which* magic fluid and why a player would find it sensible. The sharpest version: Create Enchantment Industry produces an `enchanted_liquid` fluid — a Create-native enchantment fluid that a Create player already knows. Routing that through a Sprinkler to accelerate crops is a Create↔Create linkage (no magic gating needed), not a useful 2nd anchor. The genuine M-29 case would be Ars Nouveau's `source` fluid (if it exposes a piped form) — but there's no confirmed piped Ars source fluid in the methods palette. Reject cleanly.

- CHALLENGE | from: magic fluid (Ars/Occultism) | via: sliceanddice:sprinkler | to: magic | motif: M-29 | verdict: REJECT | hook: the Sprinkler's M-29 frame requires Ars Nouveau to expose a pipeable source fluid — nothing in the methods palette confirms that; without a confirmed fluid type the weave is hypothetical and risks authoring a non-functional recipe

OK — sliceanddice is correctly 2-anchor; no new anchor-adding row survives the red-team. The CHALLENGE above resolves the split Sprinkler-M-29 debate.

## exposure   [anchors: Create, survival (2)]

Existing rows: M-35 aged_photograph (7 ACCEPTs — solid), M-33 photography-service / album trade (several ACCEPTs), M-29 occultism-silver→create:mixing→film (1 ACCEPT). The M-29 silver row is the most mechanically grounded new link but no prior pass articulated the galosphere-gotcha constraint correctly.

Per CLAUDE.md: galosphere `silver_ingot` is actually palladium. The pack's *real silver* is occultism. So the film-emulsion chain (B&W photography needs silver halide) becomes: `occultism:silver` → `create:crushing`/`create:milling` → silver dust → `create:mixing` → photographic emulsion → `exposure:black_and_white_film`. This is a genuine M-29 cross-route dependency: a Create photographer *must* source occultism silver from the magic specialist, since galosphere silver is the wrong metal. That's the purest "nobody self-sufficient" edge.

One missing angle: **MineColonies demand for photographs as colony records / quest items** — not explored in any prior row under M-28. A colony archivist hut requesting developed photographs as progression items would add an economy anchor. However, MineColonies' archivist hut is not a confirmed stock building (it's not in the standard MineColonies hut set), so this is speculative. Reject as no confirmed mechanic.

- NEW | from: occultism:silver_ore / silver dust (the pack's real silver, per CLAUDE.md gotcha — galosphere silver_ingot is palladium, NOT silver) | via: create:milling → create:mixing → exposure:black_and_white_film | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: B&W photography needs silver halide — the pack's only true silver is Occultism's; a Create photographer must source it from the magic specialist, making the darkroom a forced cross-route trade not just a hobby
- CHALLENGE | from: exposure:black_and_white_film (silver halide chemistry implied) | via: create:mixing with galosphere silver | to: create | motif: M-29 | verdict: REJECT | hook: galosphere silver_ingot is palladium (CLAUDE.md gotcha) — any row that routes galosphere silver into film emulsion is wrong-metal and would silently produce a mis-tagged recipe; only occultism holds the real silver

OK — M-35 aged_photograph and M-33 service rows are well-supported. The silver chemistry M-29 above is the key missing precision.

## illagerinvasion   [anchors: survival (1); strong 2nd-anchor candidates in magic + economy]

Well-covered mods: hallowed_gem M-02 (25 ACCEPTs), illusionary_dust M-11 (20 ACCEPTs), lost_candle M-19 (4 ACCEPTs), M-33 imbuing-table service (5 ACCEPTs), M-34 combat-supply (solid), M-15 boss-key (split but directionally ACCEPT). What's NOT covered or underexplored:

1. The **platinum_chunk M-03 row** (27 counts, split 20A/7R) is the noisiest. The REJECT argument is: platinum_chunk is a mob-drop, not a mined ore — M-03 is ore-doubling, which is for ores. That REJECT is correct and should be formalized as a CHALLENGE.

2. The **M-28 colony-research angle** (1 ACCEPT) — a colony guard-hall research unlocking a cheaper imbuing-table substitute — is genuinely good (it's the "boss fork vs colony fork" pattern the design describes) and underexplored. No other pass articulated it cleanly as the *high-tier fork* for enchantment-upgrading. This deserves a NEW.

3. The **lost_candle M-19 soul-fire angle** is accepted but the power tier hasn't been argued: lost_candle is an *everyday* atmospheric drop (not rare/endgame). The hook says "a candle taken from a dead illager, soul-fired" — that's fine for an everyday step, which M-19 is (not a complex chain). Power: everyday. That distinction is missing from the prior rows.

- CHALLENGE | from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | verdict: REJECT | hook: M-03 is ore-doubling (ore → crushed + byproduct); platinum_chunk is a mob-drop, not a mined ore — applying ore-doubling to a mob-drop is a motif mismatch; the correct framing if platinum is to enter the Create spine is M-02 (mob-drop reagent given a Create use), not M-03
- NEW | from: illagerinvasion boss/raid drops (hallowed_gem, illusionary_dust) | via: minecolonies guard-hall barracks research | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: a colony that trains enough guards earns a research unlock for an in-colony enchantment-upgrading ritual — the colony route to the same endgame (over-cap enchants) that the boss-drop route provides via the Imbuing Table; two paths to one ceiling, neither self-sufficient without their respective specialist

OK — core magic and combat-supply rows are strong. The CHALLENGE resolves the platinum_chunk motif confusion; the NEW adds the missing high-tier-fork articulation for the colony route.

## alcohol_industry   [anchors: Create, survival (2)]

Well-covered: M-28 colony-tavern demand (multiple ACCEPTs), M-35 aging (multiple ACCEPTs), M-26 consumption (ACCEPT), M-16 seasonal crop input (ACCEPT), M-31 logistics-bulk (1 ACCEPT). One angle not clearly argued: the Iron's Spellbooks alchemist_cauldron as a magic *consumer* of distilled spirits creates a genuine M-29 (cross-route dependency) — not just "spirits are a processing solvent" (M-12) but "a magic specialist *requires* a distilled spirit as a reagent they can't produce themselves, so the distillery player and the magic player are forced to trade." The distinction matters for motif accuracy.

- NEW | from: alcohol_industry:alcohol_base or high-proof spirit (vodka) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks alchemist cauldron brews potions from reagents — if a recipe requires a distilled spirit as the solvent base, the magic specialist cannot brew that tier without sourcing from the Create distillery; the two routes are forced to intersect (neither makes everything alone)
- CHALLENGE | from: alcohol_industry:alcohol_base (fluid intermediate) | via: tfmg:distillation (parallel refining step) | to: create | motif: M-29 | verdict: REJECT | hook: TFMG distillation processes petroleum/industrial fractions (diesel, gasoline, lubricant) — its column is designed for hydrocarbons, not grain mash; routing potable spirits through an industrial petroleum still is a tone and chemistry mismatch that a player would find absurd, not intuitive; the M-12 alcohol_base→Create-mixing→boiler chain already covers the Create integration cleanly

OK — M-28, M-35, M-26, M-16, M-31 rows are well-founded. The NEW above adds the missing M-29 magic-route dependency that distinguishes a forced trade from ambient processability.

## cold_sweat   [anchors: survival (1)]

M-05 hearth-on-Create-brass is the dominant ACCEPT (37 votes). M-26 fuel-consumption is accepted. M-19 soul_stalk→create:haunting has 1 ACCEPT. M-28 colony-insulation demand has 1 ACCEPT. M-33 sewing-table service has 2. What's missing or underargued:

1. The **TFMG diesel fuel as boiler input** (M-26) appeared once and was accepted. No row has articulated this as a genuine *Create-production → climate-machine* dependency: TFMG diesel is produced from petroleum (a scarce regional resource, M-30), so using it as efficient boiler fuel chains the climate-survival system into the Create fuel-production economy. That's a two-step loop advance (scarcity → fuel production → climate machine → survival pressure), which is stronger than "fuel burns." This needs a NEW as a power-tier/motivation nuance.

2. The **soul_stalk M-19 angle** (soul_stalk + create:haunting → soul-infused intermediate): the 1 ACCEPT doesn't argue *what the output does*. For M-19 to earn its place, the haunted output must feed something (Occultism reagent? Ars source? A unique insulation catalyst?). Without a clear downstream consumer the weave is dangling. I'll propose a completed version.

3. **M-16 seasonal**: cold_sweat insulation materials (chameleon_molt is from a tropical mob, only found in warm biomes) could be season-gated: cold-climate materials (goat_fur from mountain biomes) become *more available in winter* (more mountain mobs active in cold) while chameleon_molt is harder to get in winter. This is a config/behavior note not a method-routing — no recipe carries it. Reject as no-motif.

- NEW | from: cold_sweat:hearth / boiler (fuel-burning climate machines) | via: create:filling → tfmg:distillation output (diesel) as high-efficiency fuel | to: create | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: running climate machines on TFMG diesel (scarce regional petroleum → Create-refined → fuel) ties the colony's warmth to the fuel-production chain — the survival pressure loop closes back into Create's industrial output, so producing climate comfort costs real resource investment
- NEW | from: cold_sweat:soul_stalk (Nether plant, carries soul-fire resonance) | via: create:haunting → occultism:ritual input | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: soul_stalk grows where soul sand meets cold; run through Create's soul-fire haunting it becomes a soul-charged plant essence — the output feeds an Occultism ritual (a warmth-spirit infusion) that is otherwise gated behind Nether exploration, making cold_sweat's plant a dual-system ingredient (survival-gathered, magic-consumed)

OK — M-05 hearth-gating is the load-bearing 2nd-anchor weave. The two NEW rows above add the missing fuel-chain motivation (M-26 TFMG diesel) and the soul_stalk output-pathway that prior rows left dangling (M-19 completed through Occultism).

## create_jetpack   [anchors: Create, aeronautics (2)]

Already 2-anchor. Well-covered: M-06 netherite sequenced-assembly (6 ACCEPTs), M-15 boss-key (many ACCEPTs), M-37 research-unlock (2 ACCEPTs), M-33 courier-service (1 ACCEPT). The dossier itself says "leave" for further weaves. No prior row has explicitly resolved the motif question for the jetpack's *power tier* — multiple passes propose both M-15 and M-06 for the netherite tier without distinguishing which is primary.

- NEW | from: create_jetpack:netherite_jetpack (lava-traversal endgame personal flight) | via: create:sequenced_assembly (multi-step netherite assembly) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: M-06 is the right motif for the netherite tier — it's the *assembly chain* (sequenced-assembly keystone), while M-15 is the *boss-key input gate*; both apply and are complementary: the boss drop is the required *input*, the sequenced-assembly is the required *process* — together they make lava-flight a genuine endgame milestone rather than a flat bench recipe
- CHALLENGE | from: create_jetpack:jetpack (brass tier mid-game flight) | via: M-15 boss-drop gating | to: survival | motif: M-15 | verdict: REJECT | hook: M-15 gating is calibrated for endgame/flagship items; the brass jetpack is mid-tier (backtank + brass = normal Create progression); gating mid-tier personal mobility behind a boss drop over-prices entry-level flight and creates a progression bottleneck the dossier explicitly notes ("gating a brass jetpack behind a boss drop" is flagged as a concern in the prior rows); M-15 belongs only on the netherite tier

OK — the mod is correctly 2-anchor. The NEW above clarifies the M-06/M-15 complementary role for the netherite tier; the CHALLENGE resolves the brass-tier over-gating risk.

## t_and_t   [anchors: survival (1)]

Well-covered: M-08 coin-seed (14 ACCEPTs), M-02 magic-reagent seed (6 ACCEPTs), M-34 combat-supply fort-loot (solid), M-30 region-specific village loot (3 ACCEPTs), M-33 village-hub trade (2 ACCEPTs). The M-15 sail-ship aeronautics-schematic angle is split. What's missing:

1. The 16 biome-specific village variants are T&T's flagship feature and no prior row has exploited their biome-specificity for M-30 at the *item-category* level: a badlands village logically hoards copper-adjacent materials (rooted in arid-mining); a swamp village has herbalist/alchemy goods; a tundra village has insulation-tier materials (cold_sweat, goat_fur adjacent). This is the *richest* M-30 application for T&T — not just "put regional loot in chests" but "the biome of the village determines what category of goods it holds, so exploring T&T villages is the beginner's way to *discover* regional specialization before a player can travel far."

2. The **sail-ship → aeronautics schematic** (M-15, split) — a static loot chest is exploration content, and M-15 requires a *boss drop*; the ship is not a boss. REJECT for M-15. But framing it as M-23 (structural alloy → airframe) — if the ship's hold contains treated canvas or rare sail material that is an Aeronautics construction input — that's more coherent. Only 1 prior row floated M-23 for ship loot and it got 3 ACCEPTs. This deserves sharper articulation.

- NEW | from: T&T biome-specific village chest loot (16 distinct biome variants) | via: loot-seed with biome-keyed item categories | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: a badlands T&T village chest yields copper-region goods; a tundra village holds insulation-grade materials; a jungle village carries tropical-crop seeds — the 16-variant map means exploring villages *teaches* regional scarcity before a player is mobile enough to trade at scale; loot becomes a regional identity, not just random drops
- NEW | from: T&T ocean sail-ship cargo hold loot | via: loot-seed (treated canvas or structural sail-material as aeronautics construction input) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a salvaged sail-ship's hold contains treated canvas and maritime iron straps — structural materials for early Aeronautics airframes; the ocean dungeon feeds the aeronautics build-out, making seafaring exploration a prerequisite for the first proper ship
- CHALLENGE | from: T&T ocean sail-ship loot | via: loot-seed | to: create | motif: M-15 | verdict: REJECT | hook: M-15 requires a boss drop (unique hostile-with-a-drop) as the gate item; T&T's sail-ship is a static worldgen structure with loot chests, not a boss encounter; seeding a boss-key component into a non-boss chest misapplies M-15 — the aeronautics structural-material frame (M-23, above) is the correct vehicle for the sail-ship's maritime theme










