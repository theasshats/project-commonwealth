# Phase 2 candidates — chunk-01 (context-fed)

## mysterious_mountain_lib
LEAVE — pure code library (0 blocks, 0 items, no recipe-types); sanctioned support role; nothing to weave.

## balm
LEAVE — multi-loader abstraction library (0 blocks, 0 items, no recipe-types); sanctioned support role; nothing to weave.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
Existing rows cover M-24 (flexible shafts → aeronautics drivetrain), M-20 (andesite cogwheel deploy-upgrade), M-28 (lazy shafts via colony), and M-31 (seats on logistics trains). The one unchallenged gap: the flexible shaft's *consume-route* — it consumes Create kinetics parts + dye, and loot=yes opens a small surface. Reading the CANDIDATES, every M-23 and second M-28 attempt was rejected; M-24 consensus is strong (3-ACCEPT/1-REJECT top row). The dossier itself says "already ≥2 pillars — leave." Two genuine misses to explore:

1. The mod has `loot=yes` — what does that loot table actually seed? Probably drop tables from its seats/shafts, which would just be the blocks themselves. No structural loot to seed cross-system content into. Weak surface.
2. Colony route for lazy shafts: one ACCEPT row exists (M-28), but the dominant signal is REJECT ("kinetics convenience block, not colony-exclusive"). The ACCEPT framing is sound — a large factory needs dozens — but it's a "nice colony route" not a demand-locked edge. Flagging as challengeable.

- CHALLENGE | from: lazy shaft/cogwheel blocks (bulk infrastructure components) | via: minecolonies colony route | to: economy | motif: M-28 | verdict: REJECT | hook: lazy shafts are generic Create kinetics parts — MineColonies has no hut type that specifically requests or produces them, and they carry no locked-exclusive value; the colony route for basics requires that the item is something the colony *actually requests*, not just "could craft in volume"

OK — remaining accepted rows (M-24 flexible shaft → aeronautics drivetrain, M-20 andesite cogwheel deploy-upgrade) are well-grounded.

## immersive_armors   [anchors: survival (1)]
Existing rows strongly converge: M-05 (Heavy/Steampunk via create:pressing + mechanical_crafting) and M-10 (Divine/Robe via ars_nouveau:enchanting_apparatus/armor_upgrade) both have 25+ ACCEPTs. M-34 (finished sets as combat-supply trade goods) and M-15 (Wither set gated on wither skull boss drop) each appear with several ACCEPTs. M-28 (Guard Tower requests immersive_armors heavy sets) is present once. Missing coverage:

1. The Wither set's M-15 framing exists but one row conflates it with adding a *Create pressing* step on top of vanilla boss-gating — the more precise framing is that `kobolds:kobold_wither_skull` (rare cap-variant) vs `minecraft:wither_skeleton_skull` are two distinct paths; the existing rows don't distinguish this clearly.
2. No row picks up that the **Prismarine set** (spike retaliation, ocean-themed) has a natural tie to `upgrade_aquatic` materials — the M-29 cross-route dependency motif. Every attempt at prismarine→Create was REJECTED (M-03/M-05/M-20 all rejected correctly), but none tried a cross-route dependency into upgrade_aquatic prismarine rods.
3. M-06 (sequenced assembly) for the Steampunk set has multiple ACCEPTs and is distinct from M-05 — the depth-vs-scale question: M-05 is "gated on Create parts"; M-06 is a multi-stage chain. Both appear with ACCEPTs. No CHALLENGE needed — they describe different depths (everyday press vs. endgame chain).

- NEW | from: immersive_armors:prismarine_chestplate set (ocean-sourced, spike-retaliation) | via: recipe (upgrade_aquatic:prismarine_rod as a crafting input to the Prismarine set) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: prismarine armor that spikes attackers is forged from the actual deep-sea rods upgrade_aquatic drops — the ocean specialist's harvest gates the armorsmith's ocean set, so neither is self-sufficient
- CHALLENGE | from: immersive_armors:wither set (wither skull input) | via: wither_skull = boss drop | to: survival | motif: M-15 | verdict: REJECT | hook: M-15 is the correct motif but tagging the pillar as "survival" is imprecise — wither_skeleton_skull already gates the vanilla wither fight; the *weave value* is routing the armor through Create-pressed nethersteel (createbigcannons:nethersteel_plate already ACCEPT'd separately), not relabeling the boss-drop as a survival anchor; accept the combined M-15+Create version instead

## dynamictreesplus   [anchors: survival (1)]
Existing rows converge strongly: M-12 (saguaro_fruit → create:milling) is a 35-ACCEPT consensus; M-12 (mushroom caps → farmersdelight:cutting) is 24/25 ACCEPT. M-16 (saguaro fruiting tied to Serene Seasons summer) has split signal (ACCEPT+REJECT both around 1-2). M-11 (red/brown mushroom cap → occultism:spirit_fire) has a split: several ACCEPTs (Opus row: "red caps in spirit-fire yield a potion reagent — the mycotoxin burns off as pure essence") vs several REJECTs ("mushrooms are mundane organic matter"). M-30 (saguaro fruit as region-locked desert good) has 1 ACCEPT.

Missing angles:

1. The M-16 debate is under-resolved: the strongest version isn't "gate the milling recipe on summer" (too punishing for a basic input) but rather "give a *yield bonus* during summer Harvest Moon / warm season" — which threads M-16 and M-22 (Enhanced Celestials Harvest Moon). No row combined M-16+M-22 for this mod.
2. The M-30 regional scarcity angle for saguaro (desert-only) was raised but the hook was "milled output is region-locked" — the more precise framing is that saguaro fruit is a *green dye* precursor that's region-locked to deserts, giving desert settlers a trade good; M-30 + M-12 together.

- NEW | from: dynamictreesplus:saguaro_fruit (desert-biome-only, summer-scarce) | via: create:milling with Harvest Moon / warm-season yield bonus (M-16 + M-22 combined — normal yield in any season, bonus yield during Enhanced Celestials Harvest Moon or Serene Seasons summer) | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling saguaro in the Harvest Moon's warmth doubles the dye pulp — the desert grove blooms hardest when it's hottest, and the seasonal surplus is worth shipping
- CHALLENGE | from: dynamictreesplus mushroom caps (brown/red) | via: occultism:spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: the ACCEPT case ("red caps as amanita-adjacent mycotoxin") is thematically imaginative but thin — these are the same vanilla mushroom species that grow in any cave; the M-11 motif works best for a *distinctive* drop that reads as organic-uncanny (a boss relic, a deep-world exotic); common mushroom caps don't clear that bar and the reagent-ownership table makes no space for "fungal essence"; the milling route (M-12 mushroom dye/powder) is the correct weave for this material

