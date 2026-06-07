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

## smokeleafindustries   [anchors: survival (1)]
Existing rows: M-17 (generator FE → createaddition FE↔kinetic) is 12-ACCEPT consensus; M-12 (raw hemp → create:milling) is split (10 ACCEPT / 6 REJECT — the REJECT camp correctly notes smokeleafindustries already has its own grinder so adding a parallel Create path is weak); M-26 (gummies/extracts as consumption sink) has 3+ ACCEPTs; M-28 (colony apothecary requests extracts) has 3 ACCEPTs; M-05 (sequencer gated on Create sequenced_assembly) has 1 ACCEPT.

Missing angles:

1. M-32 (byproduct → input): one row tries "smokeleaf generator consumes Create milling crop chaff" — ACCEPT'd once, interesting but the chaff/biomass connection is cleaner explored here. The smokeleafindustries generator burns *any furnace fuel*; Create milling crop leftovers (straw, mulch) could be the explicit biomass feedstock link. This hasn't been resolved with a clean method-routing.
2. The M-05 sequencer gate idea (1 ACCEPT) is worth a dedicated row: the smokeleafindustries:sequencer is the mod's flagship automation-tier machine (multi-step batch processing of buds); gating its recipe behind Create's sequenced_assembly is a precise M-05 application that no blind pass cleanly formulated with the right motif.
3. One row proposes hemp-stem → hemp fiber/flour → farmersdelight flatbread (M-12, 1 ACCEPT). That's the one food-chain bridge no pass resolved clearly — smokeleafindustries hemp has a fiber/textile interpretation that's distinct from its drug pipeline.

- NEW | from: smokeleafindustries:sequencer (multi-batch automation machine — the mod's production flagship) | via: create:sequenced_assembly (gate the Sequencer's recipe behind a Create sequenced-assembly step, requiring brass components) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the machine that automates the strain-processing chain is itself assembled on a Create sequencer — you need the tech spine before the drug factory runs at scale
- NEW | from: smokeleafindustries hemp stem / hemp crop (fibrous plant material, distinct from the drug pipeline) | via: create:milling → hemp fiber → farmersdelight:cooking (hemp-flour flatbread or seed-oil base) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the hemp stem mills into fiber the same way flax does — one corner of the cannabis farm feeds the food web without touching the drug pipeline, weaving survival into an otherwise self-contained island
- CHALLENGE | from: smokeleafindustries raw hemp / buds | via: create:milling | to: create | motif: M-12 | verdict: REJECT | hook: smokeleafindustries already has its own processing chain (manual_grinder → dryer → extractor); adding a Create milling path as a *parallel* entry creates redundancy without a new system anchor — the M-17 FE↔kinetic bridge already covers the Create pillar; a second Create path on the same raw material should be REJECT unless it produces a *different output* (the hemp-fiber/food route above is the distinct version worth keeping)

## libipn
LEAVE — GUI/config library (0 blocks, 0 items, no recipe-types); required dependency for IPN only; sanctioned support role; nothing to weave.

## handcrafted   [anchors: support/decoration (1)]
Existing rows converge: M-12/M-04 (furniture via create:cutting) is 9-11 ACCEPT; M-28 (colonist housing requests furniture) is 7 ACCEPT; M-31 (furniture as bulk logistics good) has 1 ACCEPT. The berry_jam_jar → farmersdelight cooking has 9 ACCEPT.

Missing angles:

1. No row captures the M-35 (maturation/aging) angle: handcrafted:berry_jam_jar is a condiment, not a mature good — but the *jam* itself implies a preserved-food route; is there an extradelight:drying_rack or evaporator step that ages handcrafted's jam into something of higher value? The existing rows only route it *as an ingredient into FD cooking*, not as a product that itself undergoes an aging/curing step.
2. The M-28 rows focus on colonist housing furnishing, but the more precise framing is the **Carpenter hut** route: a MineColonies Carpenter produces basic handcrafted furniture cheaper and faster, making the colony route genuinely distinct from solo crafting. Several rows mention this but don't all cite M-28 clearly as colony-route-cheaper.
3. Handcrafted has `loot=yes` — it's possible structure chests could drop a rare furniture piece or a jam jar as a "found homewares" reward. No loot-seed row exists.

- NEW | from: handcrafted:berry_jam_jar (condiment/preserved food item) | via: extradelight:drying_rack or extradelight:evaporator (age/concentrate the jam into a higher-value preserve — jam → aged preserve or fruit leather) | to: survival | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: jam doesn't mature on its own — running it through a drying rack or evaporator concentrates it into a preserve worth more as a trade food, weaving the handcrafted condiment into the food-aging chain
- NEW | from: handcrafted furniture (chairs, tables, fancy_bed, cupboard) | via: loot-seed (seed rare/quality furniture pieces into village/structure loot tables as "found homewares" — the explorer finds a furnished ruin) | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: an abandoned homestead leaves behind a fine acacia table or a fancy bed — loot that rewards exploration and primes demand for the armorsmith's counterpart: the builder who can make more

## enhancedcelestials   [anchors: survival (1)]
Existing rows: M-04 (meteor → create:crushing, iron/nickel + XP) is 35-ACCEPT; M-22 (lunar event as ritual gate — Blood/Blue Moon) is 3-ACCEPT with broad support; M-16 (Harvest Moon crop-growth buff) is deeply split — the dominant REJECT case correctly points out Harvest Moon is a passive world-buff with no item to route. Space moss (M-10) is 5 ACCEPT / 13 REJECT — dominated by "ambient worldgen deco, no distinct product."

Missing angles:

1. The M-22 rows propose "ritual completable only under Blood/Blue Moon" — correct framing, but no row proposes the specific *method* delivery precisely: `occultism:ritual` has a condition API; if the pack can data-pack a moon-state condition on an occultism ritual, that's the authoring mechanism. Blind passes said "event-as-catalyst" but didn't resolve *how* to author it — the method-delivery should be named as `config-tie / datapack` on the occultism ritual condition.
2. The Blood Moon's monster-surge means more mob drops in bulk — M-34 (combat-supply) for this is more nuanced than "ambient supply boost": a specialist who *stays online during Blood Moons* to farm drop surges and sells to others is a real service role (M-33/M-34). One row proposes this (ACCEPT 1) but the full framing combines M-34 (combat-route supply) with M-33 (labor/service) — both apply.
3. Space moss: the 13-REJECT consensus on M-10 is correct. But the dossier notes it's harvestable. The one surviving angle: space moss as a loot-seed or worldgen aesthetic that marks crash sites → no real weave.

- NEW | from: enhancedcelestials Blood/Blue Moon (world-state event — active during night) | via: config-tie / datapack condition on occultism:ritual (author an Occultism ritual that only completes when the Blood Moon or Blue Moon world-state is active — a real condition the occultism ritual system can gate on) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the demonic ritual the magic specialist needs sits dormant until the right moon rises — the moon gates the magic calendar, not just the mood
- CHALLENGE | from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: 13-REJECT consensus is correct — space moss is ambient worldgen deco with no distinct arcane property; it falls from meteors but has no gameplay hook beyond decoration; the meteor itself (M-04, create:crushing) is the correct weave for the fallen-star surface; don't invent a "celestial energy" property for a block that is visually just green mossy ground

## mcwdoors   [anchors: support/decoration (1)]
Existing rows: M-04 (metal/iron door variants → create:crushing, lossy) is the consensus (12+3 ACCEPT, 9+2 REJECT — split, but metal-only is the defensible subset). Wood doors consistently REJECT. M-28 (colony Builder requests door variants) has 1 ACCEPT.

Missing angles:

1. The crushing debate on wood doors is resolved correctly: REJECT. The crushing debate on metal doors is split but the "metal-only, lossy" framing has plurality support. No CHALLENGE needed on the top ACCEPT.
2. The M-28 (colony Builder hut places MCW doors in colony structures) is a genuine second-anchor that no blind pass fully articulated: MineColonies Builder huts pull door items from the player's inventory to complete structures, and if the colonist build requires MCW door variants as the schematic's door block, a door specialist is the supply chain. This is a *demand-gating* edge (the colony requests specific door types, creating sustained demand). The existing 1-ACCEPT row is thin; worth a clearer row.

- NEW | from: mcwdoors:*_barn_door / *_stable_door / *_cottage_door (wood variant families — the "rustic" set) | via: create:cutting (mechanical saw mills rough planks into the pre-cut door shapes, automating the door palette for a colony builder) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony Builder hut needs 40 barn doors for the new Stable schematic — feed planks through the saw, not through a crafting table, if you're furnishing a town
- CHALLENGE | from: mcwdoors iron/metal door variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: challenge the *scope*, not the motif — M-04 on metal doors is valid but the existing top row (13 ACCEPT) doesn't distinguish between "all 260 item variants get crushing entries" vs "the ~20 iron/modern-door variants only"; authoring crushing recipes for all 260 MCW door items including wood is mass-noise with negligible loop contribution; the weave should be scoped to iron-framed variants only (~20 entries) to remain coherent

## revelationary
LEAVE — advancement-gating library/API (0 blocks, 0 items, no recipe-types); no standalone gameplay content; sanctioned support role; nothing to weave.

## rolling_down_in_the_deep
LEAVE — client-only movement/camera extension (0 blocks, 0 items, no recipe-types); behavior mod with no material graph; sanctioned support role; nothing to weave.

## kobolds   [anchors: economy, survival (2)]
Existing rows: M-02/M-11 (kobold_skull → occultism:spirit_fire) is 18-ACCEPT consensus; M-34 (combat specialist farms Dens, sells skulls to magic users) has multiple ACCEPTs; M-37 (Prospector enchantment is knowledge-gated via kobold enchanter trade) has 1 ACCEPT; M-33 (Prospector enchant as a service-for-hire) has 1 ACCEPT; M-15 (kobold_wither_skull as boss-key gate for Create recipe) has 1 ACCEPT.

The mod already has 2 anchors (economy + survival). The gaps are nuance/alternative-routing, not new system anchors.

Missing angles:

1. The M-37 row (Prospector enchantment knowledge-gated via kobold trade) is the most interesting underdeveloped row: the Prospector enchant is a mining-luck book that can only come from the kobold enchanter — it's genuinely knowledge-gated (you can't craft it), which is M-37 exactly. One ACCEPT row exists but no row articulates the full chain: Prospector book → player applies at ars_nouveau:enchanting_apparatus or smithing table → this creates a *cross-route dependency* (M-29) where the magic production route needs a trade-obtained item from the exploration/economy route. The M-29 angle (kobold enchanter trade + apparatus application) is missing.
2. The pirate kobold den (jungle structure, loot=yes) hasn't had a loot-seed row that specifies *what* to seed beyond generic "coin precursor ingots." An aeronautics schematic or navigation chart seeded into pirate den chests (M-34) is thematically excellent — pirate kobolds as the pack's nautical/aerial history — but no row resolves this into a specific item.

- NEW | from: kobolds:Prospector enchantment (sold only by kobold enchanter — cannot be crafted) | via: recipe: player takes Prospector book from kobold trade → applies it at ars_nouveau:enchanting_apparatus onto a mining tool (cross-route dependency — the magic production route needs a trade-obtained book) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Prospector enchant only lives in kobold dens — a magic specialist who wants ore-luck on her mining gear has to trade with the underground lizard-folk first; two routes forced to interact
- NEW | from: kobolds pirate den (jungle structure — loot=yes, Captain + chest) | via: loot-seed (seed an Aeronautics schematic fragment or a navigation chart item into the Pirate Den chest — thematic: pirate kobolds are the pack's ancient mariners/airship-era remnants) | to: aeronautics | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the kobold pirates' hoard contains a tattered airship blueprint — clearing the den is how the aeronautics specialist finds the schematic she can't reverse-engineer alone

## doubledoors
LEAVE — behavioral QoL mod (0 blocks, 0 items, no recipe-types); door-interaction convenience only; sanctioned support role; nothing to weave.

## zeta
LEAVE — modular mod-development framework (0 blocks, 0 items, no recipe-types); Quark's backbone library; sanctioned support role; nothing to weave.

## createlowheated   [anchors: Create (1)]
Existing rows: M-26 (basic_burner fuel consumption as a demand sink) is 5-ACCEPT; M-32 (TFMG coal coke as higher-value burner fuel — industrial fuel chain) has 1 ACCEPT; M-05 (burner itself built from Create parts) has 1 ACCEPT. The dossier says "none — leave; single-block balance tweak with no tradeable/magic surface."

The key question: does the mod have *any* unexplored 2nd-anchor that isn't contrived? The dossier's own conclusion is "leave." But checking the CANDIDATES more carefully:

1. M-26 (fuel consumption) is solid and has consensus — the basic_burner makes heat a managed resource; coal/charcoal demand is now sustained. This is the correct weave and it *does* thread Create into the survival fuel-supply chain (coal traders, charcoal farms have real demand). But is it a *2nd anchor* for the mod, or just a side-effect of its mechanic? The mod's primary anchor is Create; M-26 here tags "survival" as the second (the fuel comes from survival foraging/mining). That's a legitimate 2nd anchor.
2. M-32 (coal coke in TFMG → higher burner value) is the one genuinely new-routing not in consensus: TFMG coking produces `coke` from coal; if coke burns hotter or longer in the Basic Burner (config-compatible — the mod burns "any furnace fuel"), that's a byproduct→input chain (M-32) that threads TFMG industrial fuel processing into the Create heating backbone. Neat, no existing consensus ACCEPT on it.

- NEW | from: tfmg:coke (TFMG coking byproduct — coal coked into cleaner industrial coke) | via: createlowheated:basic_burner (TFMG coke accepted as a premium burner fuel — burns longer per unit than coal, making the TFMG fuel-processing chain a genuine Create heating upgrade) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: a TFMG coking oven turns coal into coke that lasts twice as long in the Basic Burner — the industrial fuel chain closes into the Create heat spine; a coke specialist keeps the factory hot
- CHALLENGE | from: createlowheated:basic_burner fuel demand | via: create:mixing | to: survival | motif: (none) | verdict: REJECT | hook: the 2-REJECT consensus row ("fuel is generic furnace fuel; no distinctive survival join key — it's a Create-internal balance tweak") is correct; the fuel-consumption angle *does* thread survival (coal/charcoal demand) but routing it *through create:mixing* as the method has no thematic logic — the basic_burner accepts furnace fuel directly via its block interface, not through a mixing recipe; the correct delivery is config-tie / ambient consumption (M-26), not a recipe method

