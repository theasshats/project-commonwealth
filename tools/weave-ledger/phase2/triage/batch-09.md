## aeronautics  — slate: 4 KEEP / 19 CUT / 10 MERGE / 1 DEFER   | anchors after: create + economy + magic (now 3)

<!-- KEEP set -->
KEEP  | adjustable_burner fuel→create/aeronautics | motif M-13 | delivery: config fuel-tag JSON (extend to tfmg:diesel/gasoline) | milestone: v0.9.0 | why "of course": every airship pilot running a hot-air burner becomes a diesel buyer — the refinery crew has a direct customer; charcoal farmers and oilmen both have a buyer; closes the fuel-production→propulsion leg cleanly
KEEP  | levitite_blend crystallization→magic (arcane catalyst gate) | motif M-10 | delivery: KubeJS catalyst-adjacent (Ars source_gem or Occultism entity adjacent during in-world crystallization step) | milestone: v0.11.0 | why "of course": lift won't crystallize without an arcane touch — the ship builder must trade with the mage; the gravity-defying material requires an attunement no forge produces
KEEP  | levitite (zinc-gated)→economy (regional commodity) | motif M-30 | delivery: GTMOGS regional ore-gen already seeds zinc biome-modifiers; confirm levitite_blend recipe pulls from c:ingots/zinc so the lock is automatic | milestone: v0.9.0 | why "of course": zinc is regionally scarce and levitite blend is the lift material every builder needs — whoever controls the zinc region controls lift production; a lift specialist emerges without a rule
KEEP  | aeronautics structural alloy→create (hull + drivetrain) | motif M-23+M-24 (combined physical weave) | delivery: recipe — aeronautics hull/frame construction recipes require create_ironworks steel_plate (M-23); propeller bearing / gyroscopic_mechanism / portable engine already sequenced_assembly (M-24, jar-confirmed); confirm steel/bronze inputs in hull block recipes | milestone: v0.7.0 | why "of course": you can't bolt together an airship frame from dirt — real fabricated steel earns the hull; propellers and engines are Create all the way down

<!-- CUT: M-09/M-14/M-21 retired-economy rows -->
CUT   | levitite_blend/levitite→economy via numismatics mint | motif M-08 | reason: duplicate-of KEEP M-30 (the regional-scarcity gate already makes levitite a trade commodity; minting it into coin specifically is the M-08 work that belongs to create_ironworks tin/bronze, not lift material)
CUT   | aeronautics borehead → ore → numismatics mint | motif M-08 | reason: no-method — the ore processing is already vanilla/Create ore-doubling (M-03 is the established path); the borehead is emergent play-style, not a weave to author
CUT   | rope/docking connector→economy (cargo-run service) | motif M-33 (and M-31) | reason: no-method — docking-at-trading-posts is a design/layout observation, not a recipe or loot-seed deliverable; all rope/dock rows in various motifs (M-08, M-31, M-33) share this defect
CUT   | aeronautics:levitite (loot-seed, boss drop gate) | motif M-15 | reason: depth — gating the lift material the WHOLE ship needs behind a boss drop is a guardrail violation; the recipe chain is already unresolved (code-only) and the loot direction (M-15 runs boss→recipe, not recipe→loot)
CUT   | offroad:tire→create:pressing (rubber sheet) | motif M-20 | reason: no confirmed rubber/polymer source in pack (TFMG polymer output speculative); only times_suggested=1, ACCEPT=1 — too thin
CUT   | simulated:gyroscopic_mechanism→northstar:engraving (circuit engraving) | motif M-06 | reason: Northstar is not confirmed in pack; times_suggested=1, thin ACCEPT; gyro is already addressed in the M-23/M-24 KEEP
CUT   | pearlescent_levitite→create:sequenced_assembly (keystone) | motif M-06 | reason: the code-only recipe is already a known sequenced_assembly chain (jar-confirmed); this is documenting existing inbound, not a new weave to author
CUT   | portable_engine→magic (cross-route dependency, spirit-forged component) | motif M-29 | reason: split verdicts (ACCEPT=1/REJECT=1 at best); the engine is already a deep Create chain; adding a magic cross-route muddies an already-complex item; REJECT dominant among comparable rows
CUT   | aviator goggles→ars_nouveau:enchanting_apparatus | motif M-10 | reason: mid-tier cosmetic gear — goggles are not a power item warranting an arcane gate; depth-guardrail warning; times_suggested=2
CUT   | adjustable_burner→survival (fuel consumption sink) | motif M-26 | reason: duplicate-of KEEP M-13 (the fuel-tag extension already closes this loop; calling the same burn a separate M-26 weave is double-counting)
CUT   | aeronautics:end_stone_powder→create:milling or mixing | motif M-03/M-32 | reason: end_stone_powder is a direct recipe input for levitite_blend, not a byproduct; M-32 is for waste/byproducts; M-03 requires an ore seam; motif mis-tag; REJECT dominant
CUT   | dyeable tires/colored levitite→economy | motif M-29 | reason: color variants are cosmetic; "another player wants a matching hull" is ambient endpoint; no demand-gating mechanism
CUT   | aeronautics:levitite→magic gate via M-10 (bare framing row) | motif M-10 | reason: blank hook field, times_suggested=1 — covered by KEEP levitite→magic; duplicate
CUT   | borehead bearing→create:crushing (M-03 ore-doubling) | motif M-03/M-04 | reason: established inbound; the borehead mines standard ores already processable by crushing; no new weave to author; REJECT dominant
CUT   | adjustable_burner→aeronautics M-13 (duplicate row with to_pillar=aeronautics) | motif M-13 | reason: duplicate-of KEEP M-13; pillar label differs but delivery is identical
CUT   | aeronautics rope/dock→design-intent loot | motif M-08 | reason: pure narrative suggestion (build trading posts near docks); no recipe surface; REJECT dominant

<!-- MERGE: near-duplicate groups into KEEPs -->
MERGE | levitite crystallization→magic (4 rows: times_suggested 8,7,5,4 all M-10, top two opus-corroborated partial) | into: KEEP levitite→magic M-10 | reason: same delivery (KubeJS catalyst-adjacent), same pillar, phrasing varies; keep highest-times_suggested, fold rest
MERGE | adjustable_burner fuel-tag extension (rows at times_suggested 11,2,2,2,1,1,1 targeting create/aeronautics/survival) | into: KEEP M-13 fuel→propulsion | reason: all propose the same config/tag-JSON change; to_pillar labels vary; representative is the 11× ACCEPT row
MERGE | levitite zinc-gated regional commodity (rows M-30 at times_suggested 4,1,1,1; also M-08 rows that are really scarcity-gate) | into: KEEP M-30 regional-scarcity gate | reason: all expressing the same zinc-lock economic fact; M-08 rows that describe the SAME scarcity are MERGEd here (minting is create_ironworks' job)
MERGE | structural alloy (M-23) + drivetrain (M-24) rows at various times_suggested (M-23: 1,1,1,1; M-24: 1,1,1,1,1) | into: KEEP M-23+M-24 combined | reason: hull and drivetrain are two faces of the same "airship is built from Create fabricated parts" weave; merge all matching rows
MERGE | levitite_blend crystallization→magic via M-07 galosphere catalyst (1× opus) | into: KEEP levitite→magic M-10 | reason: galosphere attunement shard as the catalyst is a valid refinement of the same delivery (M-07 rides inside M-10 as anti-arbitrage guard); fold in as implementation note
MERGE | levitite→magic M-22 lunar gating (2×, ACCEPT) | into: KEEP levitite→magic M-10 | reason: lunar-gated crystallization is a valid flavour addition on the same in-world step; treat as delivery option alongside the catalyst-adjacent route; merge rather than split into a separate anchor
MERGE | portable_engine already-sequenced_assembly (existing) documenting rows (M-06/M-24 at times_suggested=1 each, jar-confirmed) | into: KEEP M-23+M-24 | reason: confirming an existing inbound weave; no new delivery action needed
MERGE | aeronautics M-15 boss-key for portable engine (netherite jetpack, boss-drop input) | into: DEFER (see below) | reason: different mechanism (boss gate) that competes with the sequenced-assembly chain; route to playtest to avoid double-pathing
MERGE | aeronautics:portable_engine→magic via M-29 cross-route (high split: ACCEPT=1/REJECT=1, also M-29 REJECT=1 from a separate row) | into: CUT portable_engine→magic | reason: REJECT dominant across comparable rows; the engine is already complex; fold into the CUT
MERGE | docking connector → economy M-31 logistics-required bulk good (multiple rows, all times_suggested=1) | into: CUT rope/dock rows | reason: all share the no-method defect; none have a recipe/loot-seed deliverable

<!-- DEFER -->
DEFER | portable_engine boss-key tier gate | motif M-15 | →playtest: confirm whether the top-tier engine variant (netherite-grade) should require a boss drop before authoring a cross-route that could double-path the item; decision affects create_sa rows too


## aeronautics_dyeable_components  — LEAVE (pure cosmetic add-on; all candidates are REJECT-dominant; no motif survives the "no forced cosmetic weave" and "economy is player-run" rules)


## copycats  — LEAVE (deco/cosmetic mod; all high-times_suggested rows are REJECT-dominant; the one live candidate — M-04 zinc-block recycle — is already covered by the blanket Create zinc-cycle; forcing a second anchor onto a pure shape-container mod would be gilding)


## create_factory  — slate: 2 KEEP / 10 CUT / 5 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | create_factory sweets (waffles/rolls/candy apple)→economy via MineColonies colony requests | motif M-28 | delivery: config — colony Baker/Cook hut request table seeded with create_factory confectionery items (caramel_apple, honey_waffle, cream_roll) | milestone: v0.9.0 | why "of course": a colony's cooks demand desserts the confectionery factory uniquely produces — a dedicated sweet-maker becomes the server's confectioner and colony provisioner in one
KEEP  | create_factory sweets→survival (diet demand, sugar group) | motif M-26 | delivery: confirm create_factory finished sweets are tagged in Diet-AppleSkin sugar group (or add KubeJS tag if missing) | milestone: v0.13.0 | why "of course": desserts fill the Sugars diet group — players must keep eating them to maintain balance; the confectionery factory has a permanent consumption sink

CUT   | cream/jam/nectar fluids→ars_nouveau:imbuement | motif M-10 | reason: tone clash — dessert fluids as arcane catalysts; no lore coherence; REJECT dominant (6 rows, 5–6 REJECTs)
CUT   | sweets→farmersdelight:cooking or extradelight methods | motif M-12 | reason: already anchors survival via create:mixing/pressing inbound; intra-pillar deepening not a new system anchor; REJECT dominant
CUT   | sweets→meadow:cooking/extradelight:feast M-35 maturation | motif M-35 | reason: sweets don't age/mature; the "M-35 maturation" read is mis-motif for confectionery; no real aging mechanic; REJECT dominant (4 rows)
CUT   | honey/nectar→ars_nouveau Agronomic Sourcelink | motif M-02 | reason: indirect at best (a bee farm near a sourcelink generates Source passively — this is ambient, not a recipe weave); times_suggested=1, thin ACCEPT; no-method for the weave itself
CUT   | cream_bucket→create_cheese:maturing | motif M-35 | reason: cream→cheese already covered by a separate mod (create_cheese); double-tracking an existing chain; REJECT-majority in comparable row
CUT   | create_factory:ruby/chocolate variants→create:sequenced_assembly | motif M-06 | reason: depth-guardrail violation — waffles and candy apples are everyday food, not endgame flagships; REJECT
CUT   | sweets→bountiful decree pool | motif M-26 | reason: Bountiful uses decree goods/rep payout, not player-run economy; this slides toward M-14 (NPC coin faucet) if coin is involved; times_suggested=2 mixed consensus
CUT   | honey/nectar fluids→vinery fermentation (honey spirit side-line) | motif M-12 | reason: honey→mead/spirit is already createbigcannons-adjacent and a competing chain; times_suggested=1; gilding
CUT   | create_factory seasonal jam (M-16 berry season gate) | motif M-16 | reason: this is a real seasonal constraint but it's background survival pressure, not a discrete weave to author — the jam press just runs fewer months; no recipe delivery; times_suggested=1

MERGE | create_factory sweets→M-28 colony (3 rows at times_suggested 6,1,1, including 1 opus) | into: KEEP M-28 colony | reason: same colony-request delivery; fold the opus-corroborated row (confirmed higher confidence); keep single representative
MERGE | create_factory diet-demand / M-26 consumption (3 rows at times_suggested 3,1,1 targeting survival M-26) | into: KEEP M-26 survival diet | reason: all express the same sugar-group diet sink; merge
MERGE | cream/jam fluids→M-32 byproduct feedstock (times_suggested 1, opus) | into: KEEP M-28 (via delivery note) | reason: cream/jam as feedstocks for other kitchens is a valid implementation detail of the confectionery chain; noted as a delivery consideration in the KEEP but not a separate anchor
MERGE | sweets→M-35 aging (2 rows at times_suggested 2, ACCEPT) | into: CUT M-35 | reason: "candy apple that needs to sit and set" stretches the maturation motif; merged into CUT with note that a real aging step (e.g., vinery-style barrel aging for a syrup) could re-enter if a mechanism is authored
MERGE | seasonal M-16 sweet-berry jam rows (times_suggested 1 each) | into: CUT M-16 | reason: background seasonal constraint, not a discrete weave; fold both into CUT


## create_ironworks  — slate: 4 KEEP / 15 CUT / 11 MERGE / 0 DEFER   | anchors after: create + economy + aeronautics (now 3)

KEEP  | tin (c:ingots/tin, regional)→economy via player-minted coin | motif M-08 | delivery: recipe — create:crushing ore→crushed_tin + create:pressing blank→numismatics spur/cog; confirm tin is tagged c:ores/tin for crushability | milestone: v0.9.0 | why "of course": tin is scarce and biome-locked — a miner who stakes a tin region becomes the pack's tinsmith; minting tin spurs is a specialization that controls the settlement medium
KEEP  | tin ore→economy via regional scarcity gate | motif M-30 | delivery: confirm GTMOGS biome-modifier entries for tin already present (3 modifiers per dossier); tag tin_ore/raw_tin in GTMOGS config if not auto-registered | milestone: v0.9.0 | why "of course": tin only generates in certain regions, locking bronze and the coin supply chain to geography; the scarcity foundation earns its place
KEEP  | steel_plate / bronze_plate→aeronautics hull (M-23) + drivetrain (M-24) | motif M-23+M-24 | delivery: recipe — aeronautics hull construction recipes require create_ironworks:steel_plate (mid/high tier) or bronze_plate (early/explorer tier); drivetrain parts (portable engine, propeller hub) require steel_ingot or bronze_ingot | milestone: v0.9.0 | why "of course": you can't bolt an airship frame from dirt — fabricated steel earns the hull; bronze is the classic propeller metal
KEEP  | steel_ingot→magic via cross-route dependency | motif M-29 | delivery: KubeJS recipe — a high-tier ritual frame or magic tool (e.g., Occultism spirit lantern / Iron's Spellbooks casting altar upgrade) requires create_ironworks:steel_ingot as one input, so the metallurgist and the mage must trade | milestone: v0.11.0 | why "of course": a high-tier ritual frame needs forged steel — the smith and the caster can't each do the other's half; the clearest "nobody self-sufficient" edge for this mod

CUT   | steel_ingot→ars_nouveau:imbuement or occultism:spirit_fire (arcane-tempered steel) | motif M-10 | reason: theme mismatch — industrial metal has no arcane resonance; REJECT dominant (7/8 reject); depth guardrail (steel is an everyday structural component)
CUT   | bronze/tin→ars_nouveau:imbuement (catalysts) | motif M-10 | reason: same as above; industrial metals forced into arcane infusion; REJECT dominant
CUT   | steel gear/tools→occultism:spirit_trade or spirit_fire | motif M-11/M-18 | reason: transmuting forged steel through spirit fire is tone mismatch; steel is the industrialist's material, not soul-stuff; REJECT dominant
CUT   | steel_ingot→create:sequenced_assembly (extra depth) | motif M-06 | reason: steel depth already expressed through the alloy chain (tin+iron→bronze, coking coal→steel via create:mixing); gating steel itself behind sequenced-assembly is redundant and violates depth-scales-with-power for a structural input; REJECT dominant
CUT   | bronze_ingot→numismatics mint (premium denomination) | motif M-08 | reason: duplicate-of KEEP M-08 (tin is the primary mint metal; bronze inherits the same scarcity and minting bronze on top risks flooding the economy with two coin metals from one supplier); 2× ACCEPT but thin; defer to playtest if tin mint proves insufficient
CUT   | steel_ingot→numismatics mint (high denomination) | motif M-08 | reason: steel is already Create's endgame processed metal; minting it into coin on top of tin+bronze risks coin inflation; REJECT majority; the tin KEEP already anchors M-08
CUT   | steel armor/tools→MineColonies hut requests (gear provisioning) | motif M-28 | reason: valid in principle but this is ambient colony behavior (any gear mod could provision a colony); not a distinctive weave that earn's ironworks a second anchor; merged into KEEP M-29 note instead
CUT   | bronze/tin deco blocks→create:crushing (M-04 recycle) | motif M-04 | reason: storage-block recycle is valid but creates a bronze-arbitrage loop (smelt→block→crush→dust at profit); M-04 is for deco, not alloy storage; REJECT for bronze_ingot row; the one rose-quartz row is thematically fine but too marginal to lift to a KEEP
CUT   | brass_hammer/brass_paxel→create:sequenced_assembly or create:mechanical_crafting | motif M-06/M-05 | reason: the Hammer/Paxel are mid-tier convenience tools, not endgame flagships; M-06 explicitly for endgame; depth-guardrail violation
CUT   | brass_hammer/paxel→create:deploying (tool-application upgrade) | motif M-20 | reason: mid-tier tools, not endgame; M-20 is for light upgrades to power items; REJECT
CUT   | steel_ingot→M-15 boss-key gate (Netherite upgrade) | motif M-15 | reason: M-15 requires the boss drop as INPUT to a complex recipe; steel-to-Netherite is already a Smithing template path; double-pathing; REJECT dominant
CUT   | bronze_armor→farmersdelight:cutting/crushing recycle | motif M-04 | reason: armor is not deco; M-04 is for decorative blocks; tone mismatch; REJECT
CUT   | tin→worldgen scarcity M-16 (seasonal) | motif M-16 | reason: M-16 is season-gated; tin is biome-gated (different mechanic); mis-motif; REJECT

MERGE | tin→M-08 player-minted coin (rows at times_suggested 24,8,3,2,2,1,1,1 all ACCEPT including 2 opus) | into: KEEP M-08 tin mint | reason: all propose same delivery (crushing→pressing→numismatics); keep highest-times_suggested (24×) as representative
MERGE | tin→M-30 regional scarcity (rows at times_suggested 3,2,1,1,1,1 including 1 opus) | into: KEEP M-30 | reason: same GTMOGS confirmation needed; merge all
MERGE | steel_plate→M-23 hull (rows at times_suggested 18,16,1,1,1,1,1 all ACCEPT including 1 opus) | into: KEEP M-23+M-24 | reason: same delivery (hull construction recipe); merge
MERGE | bronze/steel→M-24 drivetrain (rows at times_suggested 11,5,1,1,1) | into: KEEP M-23+M-24 | reason: same drivetrain delivery; bronze covers early tier, steel covers mid/high; merge
MERGE | bronze_plate→M-23 mid-tier hull (times_suggested 4,1) | into: KEEP M-23+M-24 | reason: bronze as early-tier hull material is the same delivery as steel; merge with note that bronze=early, steel=mid, and the recipe should tier accordingly
MERGE | steel_ingot→MineColonies blacksmith / colony supply (M-28, times_suggested 2,1,1) | into: KEEP M-29 note | reason: the colony provisioning is real but is ambient colony behavior; folded as an implementation note that ironworks steel is requested by colony blacksmiths
MERGE | steel_ingot→M-29 cross-route (magic requires steel, 1× opus ACCEPT) | into: KEEP M-29 | reason: opus-corroborated and thematically clean; the representative row is the KEEP; fold remaining duplicates
MERGE | tin ore→create:crushing M-03 ore-doubling (times_suggested=1) | into: KEEP M-08 delivery note | reason: the crushing step is the first step in the mint chain; it's part of the M-08 delivery, not a separate anchor
MERGE | bronze→createbigcannons:melting (bronze as cannon feedstock, times_suggested=1 ACCEPT) | into: CUT (noted) | reason: times_suggested=1 only; createbigcannons is a separate mod; the claim is plausible but out of scope for ironworks triage; file as consideration for the CBC batch
MERGE | brass_hammer AOE mining→survival M-26 (times_suggested=1 each) | into: CUT | reason: hammer durability wear is ambient Minecraft behavior, not a weave; REJECT
MERGE | steel_armor/bronze_armor→M-34 combat-route supply (times_suggested=1) | into: CUT MineColonies note | reason: thin; single-pass, not corroborated; merged into CUT


## create_sa  — slate: 2 KEEP / 13 CUT / 6 MERGE / 0 DEFER   | anchors after: create + magic (now 2)

KEEP  | blazing tools (blazing_pickaxe/axe/cleaver) → magic via arcane infusion | motif M-10 | delivery: ars_nouveau:imbuement — a blazing tool placed in the imbuement pedestal with source_gem attunes a fire-affinity enchant or upgrade; one light step, not a deep chain | milestone: v0.11.0 | why "of course": the tool that consumes blaze rods is already fire-aligned — an Ars fire imbuement extends the blaze core's heat into a magical plane; the mage unlocks what the smith built
KEEP  | brass_exoskeleton_chestplate → create via FE charging | motif M-17 | delivery: createaddition:charging — the exoskeleton's strength aura runs on stored FE, charged at the Create Addition Energiser | milestone: v0.7.0 | why "of course": powered armor that eats electricity threads the Create electric tier into survival/combat gear; the player returns to the power grid on every expedition

CUT   | blazing tools→ars_nouveau:imbuement (M-10 rows where the conclusion is "too complex" or "muddies the Create pillar") | motif M-10 | reason: contradicted by KEEP above — the KEEP row at times_suggested=10 (ACCEPT=5/REJECT=5) is the definitive call; all lower-times_suggested variants of the same link are CUT/MERGE
CUT   | brass_drone_item→aeronautics M-24 drivetrain | motif M-24 | reason: drones are personal logistics, not ship drivetrain components; M-24 covers propellers/engines/control surfaces; REJECT dominant (3/6)
CUT   | brass_drone_item→create:sequenced_assembly (deeper chain add) | motif M-06 | reason: drones are already sequenced_assembly per dossier; re-layering is redundant; REJECT dominant
CUT   | brass_jetpack→aeronautics M-24 drivetrain or M-23 structural | motif M-24/M-23 | reason: jetpacks are personal flight gear, not airframe/drivetrain components; REJECT dominant across all rows
CUT   | brass_drone_item→M-33 service-for-hire (drone rental) | motif M-33 | reason: drone-as-a-service is ambient emergent behavior; no recipe or config delivery; times_suggested=2, no-method
CUT   | brass_drone_item→M-29 cross-route (arcane optical sensor + source_gem) | motif M-29 | reason: interesting but thin (2× ACCEPT only); drones are already deep; adding a magic cross-route risks muddying the Create gadgeteer identity; marginal
CUT   | blazing_pickaxe→M-15 boss-key gate | motif M-15 | reason: M-15 is boss-drop-as-input to a complex recipe; blazing tools are mid-tier workhorse gear, not endgame flagships; depth guardrail; REJECT dominant
CUT   | andesite/brass armor→sell/trade | motif blank | reason: ambient endpoint; no demand gate; economy is player-run; REJECT
CUT   | create_sa gear (jetpack)→loot-seed boss drop | motif M-15 | reason: direction reversed; M-15 runs boss-drop→recipe, not gear→loot; REJECT
CUT   | brass_jetpack fuel consumption→M-26 consumption sink | motif M-26 | reason: fuel burn is ambient; the M-13 fuel-tag weave in aeronautics already closes this loop for the fleet; a per-item M-26 is double-counting
CUT   | blazing tools→create_new_age:energising | motif M-17 | reason: FE-charging a fire tool is thematically adjacent but the create_new_age energising is for storing electrical charge, not combustion; tone mismatch; REJECT dominant
CUT   | andesite/brass armor→MineColonies blacksmith (colony supply, M-28) | motif M-28 | reason: ambient colony behavior; any armor mod could provision a colony; not a distinctive second anchor; thin (1× each)

MERGE | blazing tools→M-10 imbuement (rows at times_suggested 10,4,3 plus 1 opus REJECT) | into: KEEP M-10 blazing | reason: all propose the same delivery; keep highest-times_suggested (10×); fold the REJECT-minority rows as implementation caveats (don't gate the tool behind the infusion — it's an optional upgrade, not a gate)
MERGE | blazing tools→M-20 deploy-application (apply blaze shard via deployer) | into: KEEP M-10 | reason: same outcome (fire-attune the blazing tool); M-20 deploy-application is the delivery mechanism inside M-10; merge as delivery note
MERGE | brass_jetpack→ars_nouveau:haunting (soul-fire spectral upgrade, M-19) | into: CUT | reason: haunting a jetpack is thematically tangential; no motif fits cleanly; REJECT
MERGE | brass_exoskeleton→ars_nouveau:armor_upgrade M-29 cross-route | into: KEEP M-17 note | reason: the arcane upgrade idea is real but the primary anchor is M-17 FE-charging; a magic cross-route on top would exceed the 2-anchor target; note as a candidate v0.11.0 consideration
MERGE | netherite jetpack / top-tier variant → boss-key gate (M-15, times_suggested 1,1,1 ACCEPT) | into: DEFER (see KEEP delivery note) | reason: boss-key gate for the top tier is valid but competes with the existing sequenced_assembly chain; merge into KEEP M-17 delivery note — if a netherite-grade tier is added, the boss drop is the gate; don't author until the tier exists
MERGE | brass_drone→aeronautics logistics arm M-33 (times_suggested=1) | into: CUT drone M-33 | reason: no-method; same defect as other M-33 rows; fold into CUT


## createfisheryindustry  — slate: 3 KEEP / 16 CUT / 7 MERGE / 0 DEFER   | anchors after: create + economy + survival (now 3)

KEEP  | seafood (chowder/soups/steaks)→economy via MineColonies colony requests | motif M-28 | delivery: config — MineColonies Cook/Restaurant hut request table seeded with createfisheryindustry seafood items (seafood_chowder, cooked_lobster, mussel_soup) | milestone: v0.9.0 | why "of course": the colony kitchen always needs protein; a fishing specialist supplying the colony becomes the settlement's food chain — no colony can afford to keep its own fishery easily
KEEP  | seafood dishes→survival (protein diet demand, consumption sink) | motif M-26 | delivery: confirm createfisheryindustry seafood is tagged in Diet-AppleSkin protein group (or KubeJS tag if missing) | milestone: v0.13.0 | why "of course": high-saturation seafood dishes are spent against hunger and diet-variety pressure; the fishery has a permanent consumption sink
KEEP  | bait_trap catch→survival (seasonal bait, seasonal rare catch) | motif M-16 | delivery: config — seed seasonal bait types into the bait_trap catch table (spring: bloodworm, summer: cicada, winter: ice-grub) so rare shellfish/lobster only appear in season-appropriate windows; requires Serene Seasons integration check | milestone: v0.13.0 | why "of course": a fishing operation that runs year-round but peaks in season forces a stockpile-or-trade decision; the seasonal catch table is already a config surface the mod exposes

CUT   | fish_skin→ars_nouveau:imbuement (magic reagent) | motif M-10 | reason: tone clash — mundane leather-substitute has no arcane resonance; REJECT dominant (5 rows, mix 3 ACCEPT but consistently flagged tone-mismatch in hooks)
CUT   | fish_skin→occultism:spirit_fire (M-11 transmutation) | motif M-11 | reason: crustaceans/fish hide as occult reagents have no lore grounding; REJECT dominant; already CUT in comparable tone-clash rows
CUT   | harpoon→create:sequenced_assembly (deeper chain) | motif M-06 | reason: harpoon is already a Create-anchored item (inbound weaves present); re-layering is redundant; REJECT dominant
CUT   | fish_skin→create:milling or farmersdelight:cutting (second processing step) | motif M-12 | reason: fish_skin is already the output of the peeling step; a second Create milling step is redundant housekeeping; REJECT dominant (10× top row, 5 REJECTs)
CUT   | fish_skin→aeronautics:upholstery/soft-goods M-23 | motif M-23 | reason: fish_skin as airship balloon fabric is a stretch; M-23 is for load-bearing structural metal, not soft goods; REJECT dominant
CUT   | copper_diving_leggings→create:sequenced_assembly or aeronautics M-24 | motif M-24 | reason: diving leggings are underwater survival gear, not a propulsion/control component; forced drivetrain link; REJECT dominant
CUT   | copper_diving_leggings→create_new_age:energising M-17 | motif M-17 | reason: M-17 is for charging tools/foci/reagents; diving leggings are passive armor, not charge-driven; REJECT
CUT   | bait_trap→create:sequenced_assembly (M-06 endgame) | motif M-06 | reason: bait_trap is mid-tier; M-06 explicitly for endgame flagships; depth guardrail; REJECT
CUT   | fish_skin→cold_sweat insulation (fish_skin panels as insulating lining) | motif M-12/M-29 | reason: times_suggested=1; no confirmed cold_sweat config surface for fish_skin; speculative; thin ACCEPT
CUT   | raw fish→ars_nouveau:vitalic or agronomic sourcelink | motif M-02 | reason: sourcelinks consume mob events, not fish items directly; routing raw fish into Ars Source requires an imbuement step that isn't the sourcelink; mis-method; REJECT
CUT   | seafood→create_cheese:maturing or farmersdelight double-processing | motif M-12 | reason: prepared dishes are finished food; routing through another processing method is gilding; REJECT dominant (opus row)
CUT   | harpoon_gun→aeronautics ship-mounted use M-24 | motif M-24 | reason: harpoon is a handheld weapon that happens to use backtank air; mounting on ship is player-emergent, not a recipe weave; REJECT
CUT   | mussels/lobster→ocean biome scarcity M-30 | motif M-30 | reason: ocean-biome dependence is normal fishing mechanics, not GTMOGS-style regional ore-gen; M-30 requires the GTMOGS gate; mis-motif; REJECT
CUT   | fish_skin→bulk aeronautics transport M-31 | motif M-31 | reason: fish_skin is not demonstrably heavy/perishable enough to require aeronautics at scale; speculative; times_suggested=1
CUT   | bait_trap→M-29 cross-route (magic reagent bait) | motif M-29 | reason: no existing bait_trap method accepts a magic reagent input; would require inventing a mechanic; REJECT
CUT   | copper_diving_leggings→aeronautics pressurized component M-29 | motif M-29 | reason: aeronautics buoyancy balloon piece as a legging ingredient is speculative and the legging itself is a minor survival item; depth mismatch; times_suggested=1

MERGE | seafood→M-28 colony (rows at times_suggested 3,3,2,1,1 including 1 opus) | into: KEEP M-28 | reason: same delivery; merge; keep opus-corroborated row (3× all ACCEPT)
MERGE | seafood→M-26 consumption sink (rows at times_suggested 3,1,1,1 including 1 opus) | into: KEEP M-26 | reason: all expressing same diet-pressure sink; merge
MERGE | bait_trap seasonal catch (M-16, times_suggested 3,1 ACCEPT) | into: KEEP M-16 | reason: same delivery; merge
MERGE | fish_skin→M-32 byproduct feedstock (leather substitute, times_suggested 2,1 opus ACCEPT) | into: KEEP M-28 delivery note | reason: fish_skin as a leather-substitute feedstock is a valid implementation detail (e.g., tag c:leather → fish_skin for colony construction); noted as a delivery option in the KEEP but not a separate anchor
MERGE | seafood→combat-supply M-34 (times_suggested 1,1 ACCEPT) | into: KEEP M-26 note | reason: high-saturation food as combat sustain is a sub-case of M-26 consumption; fold into the KEEP delivery note
MERGE | fish→createfisheryindustry peeling + farmersdelight cooking (inbound confirming rows, opus) | into: KEEP M-26 delivery note | reason: confirming existing inbound weave; no new action needed
MERGE | copper_diving_leggings→fish_skin insulation M-29 (times_suggested=1) | into: CUT cold_sweat | reason: same speculative delivery; fold into CUT


## freefbible  — LEAVE (freefbible:freef_bible + supplementaries:antique_book is a pure flavor/no-method link; the single candidate is a REJECT with no-motif; the mod is a zero-content cosmetic item)


## illagerinvasion  — slate: 4 KEEP / 10 CUT / 8 MERGE / 0 DEFER   | anchors after: magic + economy + create (now 3)

KEEP  | hallowed_gem (Invoker boss drop)→magic via arcane infusion catalyst | motif M-02 | delivery: ars_nouveau:imbuement or occultism:ritual — hallowed_gem as a Tier-3 catalyst/ritual ingredient gating a high-tier arcane operation (over-cap enchantment imbuement or a Marid summoning) | milestone: v0.11.0 | why "of course": the Invoker's gem is suffused with dark enchantment energy — of course the Ars mage needs it; a raider holds the key to arcane supremacy; 25× ACCEPT, opus-independent, highest-corroboration row in the batch
KEEP  | illusionary_dust (Illusioner drop)→magic via spirit_fire transmutation | motif M-11 | delivery: occultism:spirit_fire — illusionary_dust transmuted into an occult essence (spirit_solution or equivalent); the Illusioner's residue is raw spirit-stuff | milestone: v0.11.0 | why "of course": illusion-dust is what the Illusioner leaves when reality snaps back — spirit fire transmutes it into binding essence; 20× ACCEPT, clear consensus
KEEP  | lost_candle→create (soul/haunting seam) → magic | motif M-19 | delivery: create:haunting — a lost_candle passed through Create's soul-fire charges it with soul energy, producing a spirit-infused intermediate usable in Occultism | milestone: v0.7.0 | why "of course": a candle taken from a dead illager's dark ritual, soul-fired, yields a wisp-bound relic; thematic chain from Create's own haunting to the occult spine; 4× ACCEPT
KEEP  | hallowed_gem (boss drop)→economy via combat-route supply + enchant service | motif M-34+M-33 | delivery: M-34 emergent trade (combat specialist farms Invoker raids, trades gems to magic-progression players); M-33 service — the Imbuing Table enchant service is available to any player with the gem | milestone: v0.9.0 | why "of course": only players who defeat an Invoker raid supply Hallowed Gems; enchant specialists offer over-cap upgrades for hire; 5× ACCEPT for M-33, 3× for M-34

CUT   | platinum_chunk→numismatics mint M-08 | motif M-08 | reason: platinum_chunk is a mob drop, not a mined/processed regional ore; M-08 requires the scarcity→Create-processed→mint chain; REJECT dominant (5/9); mis-motif
CUT   | platinum_chunk→create:crushing (ore-doubling) M-03 | motif M-03 | reason: platinum_chunk is a mob drop, not an ore seam; M-03 requires an ore seam; REJECT dominant; dossier flags as WEAK
CUT   | platinum_chunk→GTMOGS regional gate M-30 | motif M-30 | reason: mob drops are not regional ore-gen; M-30 is specifically the GTMOGS-gate mechanic; REJECT dominant
CUT   | platinum_chunk→occultism:crystallize M-11 | motif M-11 | reason: platinum is a metal, not a spirit/organic reagent; crystallizing a metal through Occultism is tone mismatch; REJECT
CUT   | illusionary_dust→ars_nouveau:imbuement (spell-focus attunement) M-10/M-02 | motif M-10 | reason: the M-11 spirit_fire row already covers the magic anchor cleanly; routing dust through imbuement on top would double-spend the reagent against two magic methods; pick the stronger motif (M-11 spirit_fire); REJECT for the M-10 duplicate
CUT   | horn_of_sight→ars_nouveau:enchanting_apparatus M-02 | motif M-02 | reason: the hallowed_gem already covers the magic bridge; horn_of_sight is a utility item (reveals entities), and consuming it as a ritual reagent feels punitive; REJECT majority
CUT   | lost_candle/horn_of_sight→loot-seed (M-34) | motif M-34 | reason: these are mob drops, not loot-seeded items; already drops naturally; M-34 combat-route supply is covered by the KEEP hallowed_gem row; REJECT
CUT   | imbuing_table→create:deploying M-20 | motif M-20 | reason: the Imbuing Table is a static multiblock, not an item upgraded via deploying; mis-method; REJECT
CUT   | illagerinvasion drops→MineColonies guard research M-28 | motif M-28 | reason: colony guard research unlocking an enchantment substitute is thematically attractive but no specific mechanic exists in MineColonies to model this; speculative; thin ACCEPT (2×)
CUT   | imbuing_table→ars_nouveau:source_gem as required fuel M-29 | motif M-29 | reason: interesting but times_suggested=1; the Imbuing Table already requires hallowed_gem — adding source_gem as a fuel creates a double-resource gate on an already-gated block; depth concern

MERGE | hallowed_gem→magic (M-02 ars imbuement catalyst, M-15 boss-key gate, M-10 imbuement Tier-3, M-05 native-method) — rows at times_suggested 25,8,2,1 all heavily ACCEPT | into: KEEP M-02 magic | reason: all propose using hallowed_gem as the magic gate item; M-15 and M-02 are complementary reads of the same weave (boss drop → magic gate); keep M-02 (highest times_suggested, clearest consensus); note M-15 reading as implementation detail (the gem is the gate FOR the ritual/imbuement, not separately a "boss key to a Create machine" — KEEP the magic side)
MERGE | hallowed_gem→create M-15 boss-key (8× ACCEPT, 1 REJECT) | into: CUT with note | reason: the hallowed_gem is already a magic-gate item (KEEP M-02); routing it ALSO as a Create tech boss-key would double-spend the reagent (reagent-ownership rule); CUT the Create-gate read; note that a SEPARATE boss (e.g., Mowzies) handles the Create boss-key role
MERGE | illusionary_dust→M-02 ars imbuement rows (times_suggested 4,1 ACCEPT) | into: CUT illusionary_dust M-10 | reason: M-11 spirit_fire covers the magic anchor; M-02/M-10 imbuement rows are a weaker read of the same material; merge into CUT with note
MERGE | lost_candle→M-11 occultism ritual (2× ACCEPT) | into: KEEP M-19 soul seam | reason: lost_candle→occultism via create:haunting is the KEEP; the direct M-11 ritual route (without haunting) is a weaker variant of the same destination; fold as delivery alternative
MERGE | hallowed_gem→economy combat-trade M-34 (3× ACCEPT, 2× ACCEPT in combined rows) | into: KEEP M-34+M-33 economy | reason: same emergent-trade delivery; merge
MERGE | illagerinvasion drops→player trade M-34 combined rows (2×) | into: KEEP M-34+M-33 economy | reason: same combat-specialist supplier reading
MERGE | illusionary_dust→M-07 galosphere catalyst (mix with allurite shard, 1× ACCEPT) | into: KEEP M-11 spirit_fire | reason: galosphere attunement shard as the anchoring catalyst inside the transmutation is a valid implementation note; fold as delivery refinement
MERGE | imbuing_table service M-33 rows (5×, 2× ACCEPT) | into: KEEP M-34+M-33 | reason: the Imbuing Table enchant-for-hire service is the M-33 anchor; merge all service rows into the single KEEP


## just_blahaj  — LEAVE (all candidates REJECT-dominant; every proposed weave — crushing for wool, haunting for ghost-shark, arcane plush — is a tone-clash with the mod's wholesome/cozy identity; no motif survives; the mod is pure decorative/charm content with no system hook)


## moblassos  — slate: 2 KEEP / 17 CUT / 4 MERGE / 1 DEFER   | anchors after: economy + magic (now 2)

KEEP  | emerald_lasso (villager capture)→economy via MineColonies colony seeding | motif M-28 | delivery: emergent player action enabled by recipe (no KubeJS needed) — lasso a specialist villager from a structure/settlement and walk it to your colony gate; enables colony population without leads; confirm emerald_lasso recipe is in place | milestone: v0.9.0 | why "of course": you can't lead a villager across the map with a lead; the emerald lasso is the colony-seeder's tool; every new colony depends on it; 6× ACCEPT majority
KEEP  | hostile_lasso (weakened monster capture) → magic via occultism spirit delivery | motif M-11 | delivery: occultism:spirit_fire or ritual — a hostile_lasso_filled submitted as a "live container" to an Occultism ritual site delivers the spirit of the captured mob into the transmutation; the trapper earns payment from the ritualist | milestone: v0.11.0 | why "of course": the Occultism ritualist needs a specific live mob for the binding; they commission the monster-trapper; the lasso bridges combat and magic without a recipe — it's a logistics tool in a player economy

CUT   | emerald_lasso→aeronautics logistics (no-method rows) | motif blank/M-31 | reason: lasso-as-logistics-enabler is real emergent value but there is no recipe or method to route through; no-motif; REJECT dominant
CUT   | golden/diamond lasso→create:mechanical_crafting M-05 | motif M-05 | reason: lassos are utility tools, not mod flagship machines; M-05 requires the mod's own machine gated on Create parts; moblassos has no machine; REJECT dominant
CUT   | hostile_lasso→occultism:ritual (live sacrifice, container item) | motif M-11 | reason: Occultism rituals consume drops, not living container items; the lasso is an NBT container, not a drop; the KEEP above re-routes this correctly through the spirit delivery framing; REJECT dominant (5/8) for the direct-ritual version
CUT   | golden_lasso→aeronautics logistics M-31 | motif M-31 | reason: one mob at a time doesn't constitute a "logistics-required bulk good"; M-31 requires goods heavy/bulky enough to require aeronautics at scale; REJECT dominant
CUT   | moblassos lasso crafting→aeronautics (various no-method rows) | motif blank | reason: utility synergy only; no method to route through; "carry mobs onto ships" is ambient player behavior; REJECT dominant
CUT   | hostile_lasso→create:item_application M-20 | motif M-20 | reason: mid-tier item + M-20 is for functional-item upgrades, not capture tools; REJECT
CUT   | hostile_lasso→M-02 mob-drop reagent sink (captured mob as reagent) | motif M-02 | reason: M-02 requires a drop, not a live container; the KEEP M-11 covers the right reading; REJECT for M-02 framing
CUT   | hostile_lasso→occultism:miner / spirit_trade M-18 | motif M-18 | reason: the hostile lasso doesn't route through dimensional miners or spirit trade; mis-method; REJECT
CUT   | emerald_lasso→aeronautics+minecolonies M-29 cross-route | motif M-29 | reason: the emerald_lasso doesn't require an aeronautics component as an input; the cross-route dependency is invented; the M-28 KEEP captures the real anchor; REJECT
CUT   | moblassos:contract item→economy M-33 | motif M-33 | reason: the contract's actual in-game mechanic is unclear from the dossier; if it's a decorative signed-paper item rather than a true trade mechanic, no method exists; REJECT dominant
CUT   | golden_lasso→MineColonies herder/animal-handler hut requests M-28 | motif M-28 | reason: the herder hut doesn't actually request lassos in standard MineColonies config; this is speculative config; thin ACCEPT (2×)
CUT   | diamond_lasso→create:mechanical_crafting aeronautics M-24 | motif M-24 | reason: "precision instrument for stocking your airship" is thematically charming but M-24 is for propellers/engines/control surfaces, not capture devices; mis-motif
CUT   | hostile_lasso→create:pressing + ars:imbuement M-29 cross-route | motif M-29 | reason: physical clasp + arcane binding on a lasso tool is plausible but times_suggested=1; the hostile_lasso is mid-tier, not a power item warranting a deep cross-route gate; depth guardrail
CUT   | emerald/diamond lasso→MineColonies functional synergy (behavior, no recipe) | motif M-28 | reason: REJECT dominant when framed as pure functional synergy without a recipe change; the KEEP covers the real anchor
CUT   | lassos→create:crushing recycle M-04 | motif M-04 | reason: lassos are tools, not deco blocks; M-04 is for decorative blocks; tone mismatch; REJECT
CUT   | aqua_lasso→tide fish capture extension M-12 | motif M-12 | reason: routing aqua_lasso into tide's fish roster creates a round-trip substitute; no recipe deliverable; REJECT
CUT   | filled lassos→aeronautics utility synergy (opus, no-method) | motif blank | reason: no method; opus correctly identifies it as utility synergy; REJECT

MERGE | emerald_lasso→M-28 colony (rows at times_suggested 6,2,1 including mixed consensus) | into: KEEP M-28 | reason: all expressing same colony-seeding delivery; merge; keep 6× ACCEPT representative
MERGE | hostile_lasso→M-11 occultism (rows at times_suggested 1,1 ACCEPT) | into: KEEP M-11 | reason: same spirit-delivery framing; merge
MERGE | golden_lasso→MineColonies herder (2× ACCEPT thin rows) | into: CUT herder note | reason: speculative config; fold into CUT with note that if MineColonies adds animal-handler request support, golden_lasso is the natural tool
MERGE | diamond_lasso→MineColonies research gate M-37 (1× ACCEPT) | into: DEFER | reason: research-gate on the "capture anything" ability is architecturally interesting but requires MineColonies research authoring; route to playtest

DEFER | diamond_lasso→MineColonies research gate ("capture anything" unlocked by colony University research) | motif M-37 | →playtest: verify whether MineColonies research can gate a recipe/capability; if yes, file as a v0.9.0 issue; the lock is thematically sound (too powerful to be materials-only)


## mowziesmobs  — slate: 4 KEEP / 11 CUT / 10 MERGE / 0 DEFER   | anchors after: create + magic + economy (now 3)

KEEP  | ice_crystal (Frostmaw drop)→create via boss-key sequenced_assembly gate | motif M-15 | delivery: KubeJS recipe — ice_crystal as a required input in a high-tier create:sequenced_assembly chain (cold-tier endgame tech item) | milestone: v0.7.0 | why "of course": the ice crystal is a rare, non-renewable boss trophy; gating a high-end Create machine behind it is the design's north star; 19× ACCEPT, highest corroboration in batch, no Opus dissent
KEEP  | earthrend_gauntlet (Wroughtnaut drop)→create via boss-key gate | motif M-15 | delivery: KubeJS recipe — earthrend_gauntlet (or a shard derived from it) as a required input in a high-tier create:sequenced_assembly chain (forge-tier endgame tech item); the Wroughtnaut is an iron-golem-scale construct — its relic gates advanced metalwork | milestone: v0.7.0 | why "of course": a forged iron guardian's relic gating advanced Create metalwork is read-at-a-glance; 9× ACCEPT clear consensus
KEEP  | elokosa_paw (crescent/gibbous/full variants)→magic via lunar-reagent | motif M-22 | delivery: ars_nouveau:imbuement — elokosa_paw variants used as moon-phase-specific catalysts (crescent=waning, full=peak); the Elokosa is a moon-phase shapeshifter — its paw in each phase resonates with that phase's rituals | milestone: v0.11.0 | why "of course": a creature named for moon phases leaves behind moon-phase reagents — of course the Ars ritualist needs the right phase; 10× ACCEPT, clean consensus
KEEP  | sol_visage / earthrend artifacts→magic via ritual transmutation | motif M-11 | delivery: occultism:spirit_fire — sol_visage (Barako drop) and wrought artifacts (Wroughtnaut) transmuted into a high-tier occult essence (solar-aspect or earth-aspect); the combat specialist trades raw artifacts to magic players | milestone: v0.11.0 | why "of course": a tribal sun-mask channels solar power — placed in an occultism ritual, it amplifies source; a mythic iron guardian's relic is obviously spirit-charged; 5–6× ACCEPT for sol_visage M-11

CUT   | ice_crystal→occultism:spirit_fire (M-11 ritual transmutation) | motif M-11 | reason: ice_crystal is the boss-key gate item (KEEP M-15); consuming it in a ritual burns a unique, non-renewable boss trophy that every Create-specialist needs; reagent-ownership conflict; REJECT dominant (3/6)
CUT   | boss drops→numismatics bounty / mint | motif M-08/M-14 | reason: NPC coin faucet (M-14 cut; M-08 is player-minted, not bounty-board payout); drops are too scarce/non-renewable to anchor a coin loop; REJECT dominant across all such rows
CUT   | earthrend_gauntlet / wrought drops→ars_nouveau:imbuement M-10 | motif M-10 | reason: a finished wearable weapon into an imbuement step is a forced use; the gauntlet is mythic gear, not a raw material; the M-11 spirit_fire route covers the magic anchor; REJECT majority (1/2)
CUT   | captured_grottol→occultism:spirit_fire | motif M-11 | reason: the Grottol is a living mob mechanic, not a drop; spirit fire transmutes items, not living entities; thin ACCEPT (1/2 split)
CUT   | captured_grottol→create:crushing / numismatics M-03 | motif M-03 | reason: Grottol drops vanilla diamonds; processing vanilla diamonds isn't a Mowzie-specific weave; REJECT
CUT   | blowgun→create_new_age:energising M-17 | motif M-17 | reason: FE-charging a tribal dart blowpipe is tone clash; REJECT
CUT   | sol_visage→create_new_age:energising M-17 | motif M-17 | reason: a tribal sun-mask is not charge-driven equipment; tone mismatch; REJECT
CUT   | captured_grottol→MineColonies guard contract M-28 | motif M-28 | reason: MineColonies colony route applies to buildable huts/requests, not mob-capture mechanics; mis-motif; REJECT
CUT   | boss drop locations→GTMOGS M-30 (biome-spawn gating) | motif M-30 | reason: mob spawn biomes are config, not GTMOGS ore-gen; M-30 specifically covers regional ore-gen; mis-motif; marginal ACCEPT (1×)
CUT   | boss kill→MineColonies research unlock M-37 (defeat Barako→Solar Forge research) | motif M-37 | reason: MineColonies research cannot currently be triggered by a boss kill (no hook); speculative mechanic; times_suggested=1
CUT   | Barakoa village structures→loot-seed coins/magic reagents M-08 | motif M-08 | reason: coins as dungeon loot undercuts the scarcity-driven mint (M-08 specifies player-minted, not found); REJECT

MERGE | ice_crystal→M-15 boss-key gate (rows at times_suggested 19,13,2,1 all ACCEPT, 2 opus) | into: KEEP M-15 ice_crystal | reason: all propose the same delivery; merge; keep 19× representative
MERGE | earthrend_gauntlet→M-15 boss-key (rows at times_suggested 9,8,3,2,1) | into: KEEP M-15 earthrend | reason: same delivery; merge; note that M-06 (sequenced_assembly keystone) and M-15 (boss-key gate) are complementary reads of the same weave — the boss drop IS the keystone
MERGE | elokosa_paw→M-22 lunar (rows at times_suggested 10,2,1) | into: KEEP M-22 | reason: same delivery; merge
MERGE | sol_visage→M-11 spirit_fire (rows at times_suggested 5,4,2,1,1 including 2 opus) | into: KEEP M-11 sol_visage/wrought | reason: same delivery; merge; the M-02 (ars_nouveau:imbuement) rows for sol_visage are a weaker read of the same magic anchor — fold into KEEP as delivery alternative (sol_visage can be imbuement OR spirit_fire; pick one per playtest)
MERGE | earthrend_gauntlet→M-11 spirit_fire/ars M-02 (6× ACCEPT) | into: KEEP M-11 sol_visage/wrought | reason: wrought artifacts are already covered by the KEEP; merge
MERGE | ice_crystal→ars_nouveau:imbuement M-10 (8× ACCEPT, 3 REJECT) | into: CUT M-10 with note | reason: ice_crystal is the boss-key gate item; imbuement on top would double-spend it; if imbuement is the chosen delivery for the magic side, ice_crystal can ONLY serve one master; recommend ice_crystal→M-15 Create (primary) and sol_visage→M-11 magic (primary), keeping them separate
MERGE | boss drops→M-34 combat-route supply / emergent trade (rows at times_suggested 10,3,2,1 including 1 opus) | into: KEEP M-11 delivery note | reason: the combat-specialist selling artifacts to magic/tech players is the emergent-trade side of the KEEP weaves; fold as ambient economy note (M-34 is the background loop, no additional delivery needed)
MERGE | sol_visage/ice_crystal→M-02 ars imbuement (3× ACCEPT combined rows) | into: KEEP M-11 (with M-02 noted as delivery alternative) | reason: same magic anchor; merge; the higher-times_suggested M-11 is primary
MERGE | elokosa_paw crescent→M-22 waning-moon specific (1×) | into: KEEP M-22 | reason: phase-specific delivery detail; fold
MERGE | boss drops→M-34 economy (standalone rows, times_suggested=1) | into: KEEP M-11 delivery note | reason: M-34 is ambient economy; the combat specialist's drop trade is inherent to any boss; no additional delivery needed


## numismatics  — slate: 3 KEEP / 6 CUT / 3 MERGE / 0 DEFER   | anchors after: economy + create + survival (now 3)

KEEP  | vendor/depositor blocks→create (native-method gating) | motif M-05 | delivery: recipe — numismatics:vendor and numismatics:depositor blocks gated behind create:mechanical_crafting or create:pressing; the blocks are already Create-styled; makes the economy infrastructure cost real Create fabrication | milestone: v0.9.0 | why "of course": a trading post needs precision engineering — you don't hand-craft the automated store; the economy's physical nodes cost the tech spine
KEEP  | blaze_banker (requires blaze rods)→survival (consumption sink / combat-route demand) | motif M-26 | delivery: confirm blaze_banker block consumes blaze rods as a running cost (or add KubeJS config if absent); blaze rods require Nether combat — the bank's operation has a combat-route supply cost | milestone: v0.13.0 | why "of course": a bank that requires blaze rods to stay "hot" makes the banker a permanent blaze customer; every transaction has a fuel cost traceable to danger
KEEP  | vendor block→economy (service-for-hire storefronts, M-33) | motif M-33 | delivery: config/design — players set up vendor blocks as storefronts for enchanting fees, cargo-run payment, crafting contracts; the vendor IS the service-for-hire interface | milestone: v0.9.0 | why "of course": the vendor block is the labor-exchange node — specialist services (enchanting, cargo runs, synthesis) post prices and collect payment player-to-player

CUT   | numismatics coin tiers→any processing method to refine coins | motif M-08 | reason: do NOT invent an outbound edge from the coin sink — coins are the terminus of value, not a feedstock; REJECT dominant (opus-confirmed)
CUT   | vendor/depositor→config tie→create M-08 | motif M-08 | reason: no new weave needed — the existing anchors already cover Create (vendor/depositor are already Create-flavored); duplicate of KEEP M-05
CUT   | coin loot-seed into dungeon chests | motif M-08 | reason: coins are the OUTPUT of M-08 flows; seeding coin as loot undercuts the scarcity-driven mint; REJECT
CUT   | blaze_banker→create:haunting M-19 | motif M-19 | reason: routing a bank NPC block through soul-fire transmutation is a tone mismatch; REJECT
CUT   | vendor/depositor→MineColonies trade integration M-28 | motif M-28 | reason: the colony-vendor integration is real but ambient — any vendor block works with any player economy; not a distinctive weave that earns a second anchor; fold into KEEP M-33 delivery note
CUT   | coins as crafting recipe inputs | motif blank | reason: coins as crafting inputs contradict the player-run economy ruling; coins are the medium of exchange, not a consumable component; REJECT

MERGE | vendor/depositor→M-05 Create gating (rows at times_suggested 3,1 ACCEPT) | into: KEEP M-05 | reason: same delivery; merge
MERGE | blaze_banker blaze-rod fuel consumption (rows at times_suggested 2,1 ACCEPT) | into: KEEP M-26 | reason: same delivery; merge
MERGE | player-minted coins→create:pressing→numismatics mint (rows at times_suggested 1,1,1 ACCEPT) | into: KEEP M-05 delivery note | reason: the minting process is the inbound M-08 flow from other mods (create_ironworks tin etc.); documented in KEEP delivery; merge here rather than declaring numismatics its own M-08 KEEP (numismatics IS the hub, not the M-08 sender)


## vinery  — slate: 4 KEEP / 9 CUT / 6 MERGE / 0 DEFER   | anchors after: create + economy + survival (now 3)

KEEP  | grapes/apples→create via mechanical pressing (industrial juice production) | motif M-12 | delivery: recipe — create:pressing (grape/apple → mash/juice at industrial scale; bulk juice piped into vinery fermentation barrels) | milestone: v0.7.0 | why "of course": foot-stomping grapes is for peasants — an industrial vineyard uses a mechanical press; bulk juice output at scale is exactly what Create's filling/pressing machines are for; 13× ACCEPT, highest times_suggested row in batch
KEEP  | wines (aged, effect-bearing)→economy via maturation specialization | motif M-35 | delivery: vinery's native barrel aging (1 in-game year / ~20 days) — a vintner who invests in multi-year aging stock produces a genuinely scarce luxury; aged wine is worth more than fresh | milestone: v0.9.0 | why "of course": a bottle that took weeks to mature commands a premium; the winemaker's patience IS the specialization; 6× ACCEPT clear consensus; opus-confirmed
KEEP  | wines/ciders (effect-bearing consumables)→survival via consumption sink | motif M-26 | delivery: confirm vinery wines grant effects consumed against hunger/pressure; ensure they are tagged as food items; the demand never zeroes out — wine is burned on effects, not stockpiled | milestone: v0.13.0 | why "of course": effect wines (speed, regen, resistance) are spent during factory runs and fights; a vintner has a permanent demand sink
KEEP  | grapes (biome-specific cultivars)→economy via regional scarcity | motif M-30 | delivery: GTMOGS config — confirm grape variety biome-modifiers are set (temperate/jungle/cold variants each restricted to their climate zone); if absent, add GTMOGS biome-modifier entries for vinery grapevines | milestone: v0.9.0 | why "of course": a temperate vintner makes varieties the jungle player can never grow — regional wine specialization emerges without a rule; 2× ACCEPT clear consensus

CUT   | wines→ars_nouveau:imbuement M-10 | motif M-10 | reason: tone clash — rustic beverages have no arcane resonance in Ars Nouveau's palette (crystals/essences, not wine bottles); REJECT dominant (5 rows, 2-3 REJECTs each); flagged in hooks as forced
CUT   | apple_mash→extradelight:vat or farmersdelight vat | motif M-12 | reason: already anchors survival via inbound pressing; intra-pillar deepening; REJECT majority
CUT   | wines→farmersdelight:cooking M-12 | motif M-12 | reason: finished wines are consumables; routing them back into cooking would produce a second finished good from a finished good; gilding; REJECT dominant
CUT   | fermentation_barrel/apple_press→create:crushing M-04 | motif M-04 | reason: fermentation barrels are wooden containers, not metal/stone deco; M-04 recycles metal/stone deco; mis-motif; REJECT dominant
CUT   | chorus_wine→occultism/ars M-29 (wine-as-ritual-catalyst) | motif M-29 | reason: wine feeding ritual as a catalyst struggles tone test — Occultism's palette is bones/demonic-blood/soul, not fermented fruit; REJECT dominant
CUT   | vinery apple_press/fermentation_barrel→M-05 native-method gating (Create brass fittings gate) | motif M-05 | reason: the apple_press and fermentation_barrel are relatively simple wooden blocks; gating them behind Create brass fittings might over-gate access to wine production; marginal ACCEPT (1×); depth guardrail concern
CUT   | apple_juice→alcohol_industry:alcohol_boiling then Create solvent chain M-29 | motif M-29 | reason: alcohol_industry is not confirmed in pack; speculative cross-chain; times_suggested=1
CUT   | seasonal grapes M-16 / grape climate gate | motif M-16 | reason: the M-30 KEEP already captures the regional/biome specialization; M-16 (Serene Seasons season gate) adds another layer on the same supply chain without a distinct delivery; the seasonal angle is real but the regional KEEP covers the primary constraint; CUT the M-16 duplicates (3 rows at times_suggested 2,1,1)
CUT   | wine consumption→M-26 (bare ambient use) | motif M-26 | reason: covered by KEEP M-26; the bare "wine is always consumed" row is just the ambient endpoint; duplicate

MERGE | grapes/apples→create pressing (rows at times_suggested 13,9,5,4,4,1,1,1 including 1 opus) | into: KEEP M-12 pressing | reason: all propose the same mechanical-press delivery; merge; keep 13× representative
MERGE | wines→M-35 maturation (rows at times_suggested 6,2,1,1,1,1 including 2 opus) | into: KEEP M-35 | reason: all expressing same barrel-aging delivery; merge
MERGE | wines/ciders consumption M-26 (rows at times_suggested 4,2,1) | into: KEEP M-26 | reason: same consumption sink; merge
MERGE | grape biome-regional scarcity M-30 (rows at times_suggested 2,1) | into: KEEP M-30 | reason: same GTMOGS delivery; merge
MERGE | chorus_wine→M-11 occultism spirit_fire (1× ACCEPT) | into: CUT | reason: the M-11 transmutation via spirit fire for chorus wine is thematically adjacent (End/void material) but chorus wine is a finished consumable, not a raw material; the tone concern applies; fold into CUT with note that a weaker version (chorus wine as a ritual catalyst in Occultism, not burned) could be revisited
MERGE | vinery apple_mash→colony composting M-32 (1× ACCEPT) | into: KEEP M-12 delivery note | reason: fruit-pressing waste as colony farm compost input is a valid circular note; fold into the pressing KEEP as a delivery detail (the mash byproduct is composted, not discarded)


## zombiemoon  — slate: 0 KEEP / 7 CUT / 0 MERGE / 0 DEFER   | anchors after: survival only (now 1 — cannot reach 2 without custom drops; flag for build task)

<!-- Note: zombiemoon has confirmed 0 unique drops (dossier: loot=no, vanilla rotten flesh only). Every
     proposed weave requires either inventing a custom drop or treating ambient pressure as a weave. Neither
     is valid under the triage rules. The mod contributes survival pressure (harder undead raises the gear
     bar) but has no material surface to route through a second system. This is a CANDIDATE for a build task:
     add a custom rare drop (e.g., "mutant_marrow") via datapack/loot-table that can feed M-11 spirit_fire.
     Until that drop exists, all rows are CUT or noted as no-method. -->

CUT   | zombiemoon mobs→loot-seed magic M-02 | motif M-02 | reason: dossier confirms no unique drops (vanilla rotten flesh only); M-02 requires a distinct drop to give a use as magic/economy input; nothing to route; REJECT dominant (7× including opus)
CUT   | zombiemoon mobs→M-34 combat-route supply (harder mobs, better drops) | motif M-34 | reason: no unique drops; "harder zombie variants drop more rotten flesh" is not a weave; ambient pressure only; REJECT dominant
CUT   | zombiemoon mob drops→occultism:spirit_fire M-11 | motif M-11 | reason: vanilla rotten flesh in spirit_fire is not a zombiemoon-specific weave; M-11 requires a zombiemoon-distinctive material; REJECT
CUT   | zombiemoon mob drops→occultism:ritual M-02 | motif M-02 | reason: same defect; no unique reagent; REJECT
CUT   | zombiemoon bare sell rotten flesh | motif blank | reason: ambient endpoint; economy is player-run; no-motif; REJECT
CUT   | zombiemoon danger pressure→emergent gear demand M-26 | motif M-26 | reason: ambient survival pressure is the background function; "harder mobs → players need better gear" is the ambient loop, not a weave; REJECT
CUT   | zombiemoon unique mutant drop (opus: inventing a drop) | motif M-02 | reason: the mod has NO unique drop; inventing a "mutant heart" reagent would be authoring new content, not weaving existing content; REJECT; route to build task

<!-- Build note: file a tracking issue to add a custom rare drop to zombiemoon mutant variants
     (e.g., datapack loot table addition) before filing any Phase-3 weave for this mod. Until then, zombiemoon
     is a 1-anchor survival-pressure mod with no weave surface. -->

== BATCH COMPLETE ==
