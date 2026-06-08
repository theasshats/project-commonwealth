## blood_n_particles_datapack — LEAVE (pure behavior datapack: particle VFX only, no items, no methods, no content surface; the single candidate row confirmed loot=yes is a false positive on particle-holder pseudo-item entries)

---

## create — LEAVE (Create is the method library / hub; it is the weave *target* for every other mod; the two candidate rows are both REJECT-consensus confirming this orientation is wrong; no FROM-Create weave slate is appropriate here)

---

## create_better_villagers  — slate: 2 KEEP / 6 CUT / 4 MERGE / 0 DEFER   | anchors after: Create + economy (now 2)

KEEP  | CBV villager trades → economy | motif M-08 | delivery: KubeJS villager-trade re-denomination (swap emerald prices to Numismatics coins on Brass/Copper/Andesite Worker trades) | milestone: v0.9.0 | the factory-town's craftsmen quote prices in cogs and spurs, not emeralds — of course the currency is industrial
KEEP  | CBV Miner villager (buys raw regional metals) → economy | motif M-30 | delivery: config (KubeJS Miner buy-list entries for regionally-scarce ores) | milestone: v0.9.0 | a Miner villager in a copper-rich region becomes the regional copper buyer — scarcity drives trade through the villager layer

CUT   | CBV Miner profession → survival (M-16 seasonal miner) | motif M-16 | reason: no seasonal-reagent hook; the Miner buys raw ore, not a season-gated crop; motif mismatch, mixed consensus
CUT   | CBV → Create (M-05 profession unlock / progression gate) | motif M-05 | reason: mod has no recipe types of its own; profession unlock is server-config, not a recipe-routing weave; all 4 M-05 rows rejected
CUT   | CBV professions → M-33 service-for-hire specialist village | motif M-33 | reason: emergent player behavior, no recipe/method edge; the M-08 coin-denominated trade is the correct frame; 1× ACCEPT but M-33 requires a player performing work, not NPC trades
CUT   | CBV Miner → M-28 colony route (minecolonies hut equivalent) | motif M-28 | reason: no technical coupling between CBV professions and MineColonies huts; all M-28 rows either REJECT or "would require custom colony huts"; no-method
CUT   | CBV → M-29 Miner cross-route dependency | motif M-29 | reason: M-29 requires a *recipe* cross-dependency; an NPC buy/sell is an emergent economy interaction, not a recipe input; REJECT-consensus
CUT   | CBV → M-37 research gate (Create parts only via Brass Worker trade) | motif M-37 | reason: Create parts are craftable via normal recipes; the trade is an alternate route, not a research-locked gate; 2× ACCEPT but the lock is soft (vanilla crafting still exists); MERGE-into M-08 if delivery needed

MERGE | emerald-denominated Create-parts trade → re-denominated to Numismatics (3× times_suggested, opus-corroborated) | into: M-08 KEEP | reason: same link — re-denomination of the Brass/Copper/Andesite Worker prices; prefer the highest-times_suggested ACCEPT phrasing
MERGE | CBV Miner villager paying Numismatics coins for raw materials (M-33 framing) | into: M-08 KEEP | reason: the coin-payment surface is captured by the M-08 re-denomination KEEP; the M-33 "Miner pays coin" reading is the same mechanic re-labeled
MERGE | CBV Create-parts trades → M-30 regional scarcity (2×) | into: M-30 KEEP | reason: both rows land on the same idea — the Miner buys region-specific raw materials; consolidate into the M-30 KEEP
MERGE | Brass Worker trade availability gated by Serene Season (M-16, 1×) | into: M-08 KEEP | reason: seasonal trade gating is a config overlay on the same trade slot already captured by M-08; not a separate anchor

---

## create_hypertube  — slate: 2 KEEP / 12 CUT / 2 MERGE / 0 DEFER   | anchors after: Create + economy (now 2)

KEEP  | hypertube_entrance/accelerator → Create | motif M-06 | delivery: recipe (create:sequenced_assembly already inbound per dossier — confirm gate exists) | milestone: v0.7.0 | transit infrastructure at speed is of course assembled on a sequenced line; the kinetic tube entrance IS a Create sequenced-assembly product
KEEP  | hypertube_entrance (sequenced_assembly) requires a magic reagent sub-component → magic | motif M-29 | delivery: recipe (KubeJS: add Ars source_gem or Iron's arcane_essence as a sub-component in the sequenced-assembly chain) | milestone: v0.11.0 | a kinetic tube that punches players across regions at speed needs a spark of arcane acceleration — the shipwright and the mage trade

CUT   | hypertube → M-31 logistics-required bulk good (item movement) | motif M-31 | reason: hypertubes move *players/entities*, not item stacks; M-31 is for bulk-material logistics; all M-31 rows confirmed REJECT on this basis
CUT   | hypertube → aeronautics M-24 drivetrain component | motif M-24 | reason: tube entrance is ground-transit ingress, not a propulsion/control surface on a vessel; tone mismatch; all M-24 rows REJECT
CUT   | hypertube → aeronautics M-23 structural alloy | motif M-23 | reason: M-23 is airframe/hull alloys; tube blocks are ground infrastructure; all M-23 rows REJECT
CUT   | hypertube accelerator → M-08 numismatics mint | motif M-08 | reason: a transport block is not a minted coin source; M-08 is scarce regional metal → coin; REJECT-consensus
CUT   | hypertube → M-28 colony route (colonist-pathing through tubes) | motif M-28 | reason: no technical hook for colonists to enter tube networks; coupling is cosmetic; REJECT-consensus
CUT   | hypertube → M-26 consumption sink (kinetic energy burn) | motif M-26 | reason: the power-draw is an ambient design property of the mod, not a recipe-authored consumption weave; 1× ACCEPT but no-method for authoring it
CUT   | hypertube infrastructure → M-33 service-for-hire (tunnel builder charges passage) | motif M-33 | reason: emergent player behavior, no recipe-method edge; 1× ACCEPT but delivery is undefined
CUT   | hypertube as cargo conduit | no-method | reason: hypertubes carry players, not item-stacks; no item-throughput surface exists
CUT   | hypertube → M-31 bulk personnel mover (entity transit at scale) | motif M-31 | reason: confirmed REJECT multiple times — M-31 is items not players
CUT   | create_hypertube tubes → M-06 (a re-statement of the existing inbound weave) | motif M-06 | reason: duplicate of KEEP above; flagged as re-statement in candidate verdicts
CUT   | short-hop personnel transport → aeronautics/logistics role (M-31, 1× opus ACCEPT) | motif M-31 | reason: hypertubes cannot carry items; the logistics motif requires material throughput, not entity movement; even the opus-corroborated framing conflates player transport with bulk-goods logistics

MERGE | hypertube tube segment → M-05 native-method gating | into: M-06 KEEP | reason: the sequenced_assembly gate already covers this; M-05 and M-06 are both "Create machine as gate" motifs; M-06 is the better fit (multi-stage chain); collapse into the sequenced-assembly KEEP
MERGE | hypertube_entrance requiring a structual alloy (M-23 light framing) | into: M-29 KEEP | reason: the M-29 cross-route dependency (magic reagent sub-component) already deepens the recipe; the structural-alloy idea is superseded by the cleaner magic cross-route

---

## create_integrated_farming  — slate: 3 KEEP / 12 CUT / 6 MERGE / 0 DEFER   | anchors after: Create + magic + survival (now 3; 3 is acceptable given the mod's output diversity)

KEEP  | roost egg/feather/poultry output → survival (via farmersdelight:cooking) | motif M-12 | delivery: recipe (FD cooking / cutting recipes consuming roost outputs; loot-seed to establish the chain as canonical) | milestone: v0.13.0 | the roost's egg stream flows straight into an automated kitchen — of course custard and mayo start in the henhouse
KEEP  | lava_fishing_net nether drops (blaze rods, magma cream) → magic | motif M-11 | delivery: recipe (occultism:spirit_fire or ars_nouveau:imbuement consuming nether-mob drops from lava net) | milestone: v0.11.0 | lava-fishing auto-harvests nether mob drops; routing blaze rods through spirit-fire ties automated extraction to the magic web
KEEP  | roost/net bulk outputs → economy (colony supply via MineColonies hut requests) | motif M-28 | delivery: config (MineColonies Fisher/Butcher/Cook hut request lists seeded with roost/net output items) | milestone: v0.9.0 | the colony butcher and cook request bulk meat and eggs — roost/net steady output is exactly the supply a colony demands

CUT   | fishing_net aquatic drops → create:milling | motif M-12 | reason: milling fish is thematically off (milling is dry grain/ore); REJECT-majority
CUT   | roost output feathers → create:milling (feather milling) | motif M-12 | reason: feathers into milling adds no depth; feathers already reach Create via vanilla; REJECT-majority
CUT   | fishing_net → M-31 logistics bulk good (roost farm ships at scale) | motif M-31 | reason: speculative perishability framing depends on M-36 (mechanism-pending #238); without spoilage the logistics hook is thin; ACCEPT but premature
CUT   | roost/net outputs → M-26 consumption sink (food loop closing) | motif M-26 | reason: ambient food consumption is the loop endpoint, not a weave (M-27 rationale); REJECT majority; the M-28 colony supply KEEP already provides the demand gate
CUT   | fishing-net catches → createfisheryindustry:peeling / bait_trap (M-29 cross-route) | motif M-29 | reason: interesting but 1× only, speculative; createfisheryindustry interaction belongs in that mod's weave, not here; no-method confirmed
CUT   | roost feather output → ars_nouveau:imbuement (M-10 arcane infusion) | motif M-10 | reason: thematic clash — feathers are vanilla commodity with no arcane grounding; M-10 warns against basic components; REJECT-majority for this framing
CUT   | roost feather output → occultism:ritual as reagent (M-29 cross-route) | motif M-29 | reason: feathers as a generic reagent used by Occultism are already in vanilla — no new KubeJS recipe edge needed; 1× ACCEPT only; ambient not authored
CUT   | roost/net products → M-31 logistics (feather bulk shipment at scale) | motif M-31 | reason: same M-31/M-36 mechanism-pending dependency as above; DEFER if M-36 lands; cut now
CUT   | roost → M-06 sequenced_assembly (building the roost itself) | motif M-06 | reason: roost is a mid-tier farming station, not a flagship keystone; M-06 depth would violate the basics-not-gated rule; REJECT-consensus
CUT   | roost→net → M-37 colony research unlock | motif M-37 | reason: 1× only; thematic but weak — the M-28 KEEP already handles the colony supply angle; one economy anchor is enough
CUT   | lava_fishing_net drops → M-03 ore-doubling (create:crushing) | motif M-03 | reason: category mismatch; the net outputs mob/loot items not ores; REJECT-consensus

MERGE | roost feather output → ars_nouveau:imbuement (M-02 mob-drop reagent — feathers as magic input) | into: lava_fishing_net→magic KEEP | reason: the magic anchor is already provided by the lava net nether drops; feathers are too mundane to earn a second magic KEEP; fold the "automated feathers → magic" idea here if the delivery expands
MERGE | roost feather/egg output → occultism ritual reagent (M-02, 3× ACCEPT) | into: lava_fishing_net→magic KEEP | reason: feathers already supply the ritual tier via the magic KEEP; same pillar; consolidate
MERGE | fishing_net fish → farmersdelight:cooking (survival M-12, 2× ACCEPT) | into: roost→survival KEEP | reason: fish cooking is the same M-12 processing-chain motif as roost egg cooking; single delivery covers both output streams
MERGE | roost egg/meat → create:mixing (automated meal M-26) | into: roost→survival KEEP | reason: Create mixing as an upstream prep step is part of the same food-chain delivery; captured in the survival KEEP's recipe delivery note
MERGE | lava_fishing_net drops → occultism:ritual (M-11, 1–2× ACCEPT) | into: lava_fishing_net→magic KEEP | reason: same link, slightly different method (ritual vs spirit_fire); prefer the spirit_fire / imbuement framing (higher times_suggested ACCEPT)
MERGE | roost/net fish → fish-meal via create:milling → fertilizer (M-32, 1×) | into: roost→survival KEEP | reason: byproduct-into-feedstock framing is the byproduct side of the same chain; not a new pillar anchor; fold into survival KEEP delivery note

---

## create_ltab-3.9.2  — slate: 2 KEEP / 6 CUT / 4 MERGE / 0 DEFER   | anchors after: Create + economy (now 2)

KEEP  | Create-themed structure loot tables → economy | motif M-08 | delivery: loot-seed (inject Numismatics coins into Create-ruin chest loot tables) | milestone: v0.9.0 | scavenging an abandoned Create factory yields not just cogs but a few coins — the old operators got paid; highest times_suggested (14) ACCEPT-consensus
KEEP  | Create-themed structure loot tables → Create | motif M-15 | delivery: loot-seed (inject a boss-key fragment / rare Create component into the deepest Create ruins as a gate unlock) | milestone: v0.7.0 | the hardest-to-find ruin holds the schematic for a complex sequenced-assembly stage — exploration gates tech; 5× times_suggested, opus-corroborated subset ACCEPT

CUT   | loot tables → magic (M-02 mob-drop reagent / Ars source_gem) | motif M-02 | reason: M-02 is *mob*-drop reagent sink; structure loot is not a mob drop; multiple verdicts flag the motif mismatch; REJECT-majority (15× REJECT vs 5× ACCEPT on the magic seed rows overall)
CUT   | loot tables → aeronautics (M-23 structural hull plate / ship component blueprint) | motif M-23 | reason: M-23 is the structural-alloy → airframe motif (fabricated materials); seeding hull plates into loot conflates discovery with fabrication; REJECT-majority (2× ACCEPT only)
CUT   | loot tables → survival (M-15 boss-key fragment in a non-boss structure) | motif M-15 | reason: M-15 is boss drops gating complex tech, not structure-chest drops; motif mismatch flagged in verdicts; REJECT-majority
CUT   | loot tables → economy via M-34 (combat specialist loots fabricated components to trade) | motif M-34 | reason: 1–2× only; the M-08 coin-seed KEEP already establishes the exploration-economy link; M-34 is redundant here and adds no new anchor
CUT   | loot tables → M-01 (seeding coins as a method-routing) | motif M-01 | reason: M-01 is "source_gem is the magic currency hub"; seeding coins into loot is not a method-routing; REJECT-consensus
CUT   | loot tables → magic via mob-drop framing (1× ACCEPT — damaged-munition cbc_at component) | motif M-02 | reason: speculative; cbc_at drop is thematically forced and 1× only; CUT-on-tone

MERGE | structure loot → economy (3× "seed Numismatics coin or magic reagent") | into: M-08 KEEP | reason: near-duplicate of the 14× ACCEPT; same delivery, weaker phrasing; fold in
MERGE | Create-themed ruins loot → economy (M-08, 1× multiple) | into: M-08 KEEP | reason: identical link restated at lower times_suggested; consolidate
MERGE | structure loot → Create tech unlock (M-15, 2× ACCEPT — blueprint fragment / boss-key analog) | into: M-15 KEEP | reason: same link as the M-15 KEEP; prefer the 5× phrasing
MERGE | structure loot → magic (M-02 Ars source gem buried in ruin, 2× ACCEPT) | into: M-15 KEEP | reason: magic seeding into structure loot is thematically plausible but the motif is wrong (M-02 = mob drop not structure); if the maintainer wants a magic-seed, author it as a loot-seed alongside the M-15 KEEP delivery; fold here rather than a third KEEP

---

## createfood  — slate: 3 KEEP / 11 CUT / 5 MERGE / 0 DEFER   | anchors after: Create + survival + economy (now 3)

KEEP  | seasonal crop ingredients → createfood recipes | motif M-16 | delivery: config (Serene Seasons crop-fertility config + KubeJS ingredient gate on seasonal-crop recipes — apple pie only when apples are in season) | milestone: v0.13.0 | an apple pie is only as plentiful as the harvest — seasonal scarcity of raw ingredients makes Create-food output fluctuate with the calendar; highest times_suggested (12) ACCEPT-consensus
KEEP  | createfood finished dishes → economy (colony supply, MineColonies cook/restaurant hut requests) | motif M-28 | delivery: config (MineColonies hut request lists seeded with createfood pies/pastries/milkshakes) | milestone: v0.9.0 | a colony cook demands pies and pastries from the player economy — high-effort food gates colony upkeep; 9× ACCEPT, opus-corroborated
KEEP  | createfood dishes consumed under diet/hunger pressure | motif M-26 | delivery: config (diet-group mapping; dishes already consumed by players under Spice-of-Life / food-variety pressure) | milestone: v0.13.0 | high-effort processed meals are consumed against hunger/diet pressure, renewing demand every session; 6× ACCEPT-consensus

CUT   | createfood plated feast blocks → MineColonies cook/tavern (M-12 config/behavior) | motif M-12 | reason: MineColonies feeding might consume createfood dishes but this is a behavior link with no recipe motif; REJECT-majority (3×)
CUT   | createfood dishes as diet-group completers (M-12 Diet-AppleSeed auto-derive) | motif M-12 | reason: not a new weave — createfood already anchors survival via nutrition; auto-derive is existing behavior, not a recipe authoring task; REJECT-majority
CUT   | createfood dishes as magic reagents (M-10 arcane infusion) | motif M-10 | reason: processed food as arcane catalyst is tonally incoherent; Create-food is culinary-industrial, not arcane; REJECT-majority (all M-10 rows on createfood)
CUT   | createfood dishes → M-29 cross-route (Ars potion flask requiring a dish) | motif M-29 | reason: 2× ACCEPT but speculative; the magic anchor is not a target anchor for createfood (the three KEEP anchors are Create/survival/economy); a fourth cross-route to magic overloads; CUT-on-depth
CUT   | createfood → M-35 maturation/aging (cheesecake aged in casks) | motif M-35 | reason: 1× opus ACCEPT only; aging is better expressed as a create_cheese / expandeddelight weave on the aging specialist mod; createfood is the *consumer*, not the aging mod
CUT   | createfood dishes → M-08 coin mint (press dish into coin) | motif M-08 | reason: "sellable luxury = coin" is the retired M-09 framing; REJECT in verdicts; cut per hard rule
CUT   | createfood → M-31 logistics (fill casks for ship provisioning) | motif M-31 | reason: 1× only; the logistics angle is M-36/perishability mechanism-pending; defer to that build track
CUT   | createfood → M-33 catering service (plated food deco as catering) | motif M-33 | reason: deco blocks are not a recipe-method edge; 1× mixed; thin delivery
CUT   | createfood warm drinks → Cold Sweat config warmth bonus | no motif | reason: no numbered motif covers ad-hoc config-temperature-food link; no-method; REJECT-consensus
CUT   | createfood:apple_milkshake → alcohol industry (ferment juice to hard cider) | motif M-12 | reason: createfood already has 3 anchors; this is a same-pillar deepening without new cross-system link; 1× only
CUT   | createfood → M-05 MineColonies colony route as cheaper alt-production (bulk food) | motif M-05 | reason: M-05 is native-method gating of the mod's flagship item in its own machine; this is a M-28 colony-supply idea mislabeled; the M-28 KEEP captures it correctly

MERGE | createfood seasonal dishes (M-16) - 1× opus, 2× other ACCEPT rows for seasonal-crop gate | into: M-16 KEEP | reason: same link at lower times_suggested; consolidate
MERGE | createfood:apple_milkshake / fruit drinks → seasonal gate | into: M-16 KEEP | reason: seasonal ingredient gate on the milkshake line is the same delivery as the apple-pie seasonal KEEP; fold
MERGE | createfood → M-28 colony supply (opus-corroborated 1× + 9× main) | into: M-28 KEEP | reason: all M-28 rows are the same link; prefer the 9× phrasing
MERGE | createfood dishes as M-26 (survival variant, 5×) | into: M-26 KEEP | reason: same motif, same mechanic; higher-times_suggested economy framing (6×) is preferred; fold survival-framed rows into the one KEEP
MERGE | createfood dish processing chain as M-12 inbound (is itself a giant M-12 consumer) | into: M-16 KEEP | reason: the M-12 "createfood is a Create-output consumer" is an inbound edge (Create feeds createfood), not a new createfood anchor; captured by the seasonal-input KEEP which gates the Create chain

---

## dndesires  — slate: 4 KEEP / 17 CUT / 7 MERGE / 0 DEFER   | anchors after: Create + survival + aeronautics + magic (now 4; 4 is justified by the mod's broad method surface)

KEEP  | pack crops/drops → dndesires fan methods (freezing/seething/sanding) → survival | motif M-12 | delivery: recipe (KubeJS: add pack-crop / mob-drop inputs to dndesires:freezing, dndesires:seething, dndesires:sanding fan-processing recipes — freeze-dry seasonal fish, heat-treat hides) | milestone: v0.13.0 | pack crops pass through Create-powered catalyst sails for preservation and prep — survival's raw ingredients find a processing home; highest times_suggested cluster (11+ across M-12 rows), strong ACCEPT
KEEP  | dndesires:rubber (hydraulic_compacting output) → aeronautics | motif M-23 | delivery: recipe (Aeronautics structural/hull recipe requiring processed rubber as a gasket/seal component) | milestone: v0.9.0 | rubber seals pressurized compartments on airship hulls — of course the ship needs it; 8× ACCEPT-consensus (M-23 framing), 10× supporting M-24 framing (collapsed here as the sealing role is structural not drivetrain)
KEEP  | dndesires:rubber (cross-route input into Create/magic chain) → Create | motif M-29 | delivery: recipe (KubeJS: require processed rubber as a sub-component in a Create belt/machine insulation recipe, or as a gasket in a magic cauldron brew) | milestone: v0.7.0 | rubber is the industrial material Create's pipes and machines need — no vanilla equivalent; the rubber producer and the machine-builder trade; supported by M-29 rows (opus-corroborated), M-32 byproduct framing, and the "hydraulic press → Create insulation" cluster
KEEP  | dndesires:haunting_sail / dragon_breathing_sail → magic | motif M-19 | delivery: recipe (route a magic mob drop or a Wither rose through the haunting sail to yield a soul-infused intermediate; or route an allurite/lumiere shard through dragon_breathing as an attunement heat step) | milestone: v0.11.0 | the haunting sail is Create's soul-fire in bulk — routing undead drops through it is the M-19 bridge made physical; 2× ACCEPT (M-19), supported by M-10 dragon_breathing rows (consolidated here)

CUT   | dndesires:asphalt → aeronautics structural alloy (M-23) | motif M-23 | reason: asphalt is a road/floor material, not a hull or frame alloy; REJECT-majority (5×); tone mismatch
CUT   | dndesires:cardboard_package_* → aeronautics (M-23/M-24/M-13/M-31/M-06 various) | motif multiple | reason: cardboard is a logistics *container*, not a structural/drivetrain/fuel component; all aeronautics rows for cardboard REJECT-majority; the packaging is already inside Create's own c:tags
CUT   | dndesires:rubber → M-08 numismatics mint | motif M-08 | reason: rubber is an intermediate, not a scarce regional ore; M-08 requires metal→coin, not intermediate→coin; REJECT-majority across all rubber-coin rows
CUT   | dndesires:asphalt → create:crushing deco-recycle (M-04) | motif M-04 | reason: D&D is already anchored in Create (anchor 1 deep); adding a crushing recycle on its own palette blocks is inward-not-outward; REJECT-majority
CUT   | dndesires milkshake foods → M-26 (diet consumption sink) | motif M-26 | reason: ambient food→diet loop; diet-demand was explicitly rejected as a motif (M-27); the survival anchor comes from M-12 processing, not ambient eating; REJECT-majority
CUT   | dndesires:seething / dragon_breathing → magic drops (M-10 arcane infusion) | motif M-10 | reason: routing raw magic ores/drops through heat fans is a forced industrial-not-arcane stretch; REJECT-mixed but the haunting-sail KEEP handles the magic bridge more cleanly
CUT   | dndesires:rubber → M-12 survival (rubber as survival-critical insulation material) | motif M-12 | reason: survival is not a target anchor for dndesires; the M-29 Create cross-route KEEP captures the rubber supply chain; avoid a 5th anchor
CUT   | dndesires milkshakes → M-16 seasonal (glowberry seasonal gate) | motif M-16 | reason: glowberries are not a Serene Seasons crop; the seasonal gate is speculative; 3× ACCEPT but the motif is better spent on the crop-processing M-12 KEEP; cut to avoid thin 5th anchor
CUT   | dndesires:rubber → M-13 fuel (M-13 is fuel→propulsion; rubber is structural, not fuel) | motif M-13 | reason: M-13 is specifically fuel intake; rubber is a seal/structural material; motif mismatch; 1× REJECT
CUT   | dndesires:bore_block / drill components → aeronautics M-24 drivetrain | motif M-24 | reason: 1× ACCEPT only; bore blocks are mining/extraction tools, not propulsion/control surfaces; tone mismatch; the rubber KEEP already provides the aeronautics anchor
CUT   | dndesires:industrial_fan → aeronautics propeller nacelle (M-24) | motif M-24 | reason: 2× ACCEPT, interesting, but the rubber-gasket M-23 KEEP already covers aeronautics; a second aeronautics KEEP (M-24 fan→propeller) is redundant; MERGE possibility explored but the rubber anchor is cleaner
CUT   | dndesires cardboard_package_* → M-31 logistics-required (bulk goods packaged for aeronautics) | motif M-31 | reason: packaging is not a bulk-goods movement gate; M-31 requires the *good* to need aeronautics to move at scale; cardboard is the *wrapper*, not the good; ACCEPT fringe (2× opus) but no-method for authoring a recipe
CUT   | dndesires asphalt → aeronautics runway/landing-pad (theme association) | no motif | reason: no-method; decorative association; REJECT-consensus
CUT   | dndesires:asphalt → M-20 deploy-application (landing pad surface) | motif M-20 | reason: 1× ACCEPT only; asphalt as a deploy-applied runway surface is a stretch on M-20 (which is about upgrading an item, not placing blocks); thin delivery
CUT   | dndesires milkshakes → M-28 colony Tavern request | motif M-28 | reason: colony supply for milkshakes is plausible but creates a 5th anchor; the M-12 survival KEEP already provides the production chain; CUT to keep the slate to 4

MERGE | crop/drop routing through dndesires:freezing_sail (M-16 seasonal preservation, multiple rows) | into: M-12 KEEP | reason: the freezing-sail-as-seasonal-preserve framing is a sub-case of the crop-processing M-12 KEEP; same delivery, same motif family; consolidate
MERGE | dndesires:freezing / seething / sanding as foreign-material sink (opus-corroborated 2× M-12) | into: M-12 KEEP | reason: same link as the M-12 KEEP; prefer the highest-times_suggested cluster phrasing
MERGE | dndesires milkshake items as M-12 food-processing output | into: M-12 KEEP | reason: milkshakes ARE products of the fan-method chain; capturing them as M-12 outputs within the survival KEEP is correct
MERGE | dndesires:rubber → M-24 aeronautics drivetrain (10× supporting rows) | into: M-23 KEEP | reason: rubber's role as gasket/seal (M-23 structural) and rubber as a drivetrain coupling (M-24) both land in the aeronautics pillar; the structural framing (8×) has higher consensus; fold the M-24 rows under M-23 KEEP with a note that the delivery should cover both sealing and coupling use
MERGE | dndesires:rubber → M-32 byproduct feedstock (Create insulation/belts) | into: M-29 KEEP | reason: M-32 (byproduct→input) and M-29 (cross-route dependency) are describing the same rubber-as-Create-input idea; prefer M-29 (clearer demand-gate: the builder needs it)
MERGE | dndesires:haunting_sail as bulk Create:haunting (M-19, 2× opus-mixed) | into: M-19 KEEP | reason: the opus rows flag the sail as a *method target*, not an edge the mod needs; correct — our KEEP routes foreign drops *through* the haunting sail, which is exactly the method-routing pattern
MERGE | dndesires:dragon_breathing → magic drops attunement (M-10, 2× ACCEPT) | into: M-19 KEEP | reason: the dragon_breathing sail as a heat-attunement step for magic shards is structurally the same as the haunting-sail magic bridge; deliver both through the same M-19 KEEP (the delivery note already covers both sails)

---

## edf-remastered-5.0-beta4  — slate: 2 KEEP / 6 CUT / 4 MERGE / 0 DEFER   | anchors after: Create + magic (now 2)

KEEP  | Ender Dragon fight (harder, multi-phase) → Create (loot-seed boss-key drop) | motif M-15 | delivery: loot-seed (KubeJS: add a unique "Ender Core Shard" or equivalent into the dragon's entity-drop loot table, required as input for a late-game sequenced-assembly component) | milestone: v0.7.0 | the harder dragon rewards harder — a 500-HP multi-phase dragon should gate the hardest Create tech; of course you need to beat it; 8× ACCEPT-consensus (highest times_suggested)
KEEP  | Ender Dragon fight → magic (loot-seed magic reagent drop) | motif M-02 | delivery: loot-seed (KubeJS: add a dragon-flame reagent / arcane-essence drop to the dragon's entity-drop loot, consumed in Ars imbuement or Occultism ritual) | milestone: v0.11.0 | a harder dragon drops something proportionally magical — the enraged-phase reagent feeds the magic web; 4× ACCEPT (M-02), 2× supporting M-34 framing collapsed here

CUT   | dragon loot → economy (M-34 combat-route supply) | motif M-34 | reason: M-34 (combat specialist farms boss → trades drops) is the *economy side* of the M-15 boss gate; the M-15 and M-02 KEEPs already seed the loot table; a third loot-seed KEEP for M-34 is redundant — the combat-route supply emerges automatically once M-15/M-02 drops exist; CUT-as-consequence
CUT   | dragon loot → M-08 numismatics coin (high-value coin into dragon vault) | motif M-08 | reason: the dossier confirms EDF adds NO items and does NOT modify drop tables; also, the dragon drops to the player personally (no chest vault to seed); M-08 coin seed would need a chest, not entity drops; REJECT-consensus
CUT   | dragon loot → M-02 (same-pillar duplicate, 1× mixed) | motif M-02 | reason: duplicate of the M-02 KEEP above at lower times_suggested; CUT and MERGE
CUT   | dragon AI-only (no items) → recipe weave | no-method | reason: the mod adds zero items/blocks; any recipe link is invented; REJECT-consensus
CUT   | end-zombie minions → loot-seed (minion drops) | motif M-34 | reason: end-zombies are vanilla zombie variants in the End context; no confirmed special drops; REJECT-consensus
CUT   | dragon loot → M-15 survival (boss-key for magic tech, M-15 tagged survival) | motif M-15 | reason: duplicate of the Create M-15 KEEP; the survival-pillar framing is a mis-tagging; the boss-key gate is Create pillar (v0.7.0); MERGE into KEEP

MERGE | edf dragon loot → Create M-15 (2× ACCEPT plus 1× opus-flagged) | into: M-15 KEEP | reason: same link restated at lower times_suggested; consolidate under 8× phrasing
MERGE | edf dragon loot → magic M-15 (2× ACCEPT) | into: M-15 KEEP | reason: M-15 is a Create-pillar motif; the magic-pillar framing of a boss-key gate for magic tech is captured by the M-02 KEEP; fold into M-15 KEEP
MERGE | edf dragon loot → M-02 magic (1× multiple supporting rows) | into: M-02 KEEP | reason: same link restated; consolidate under highest-times_suggested ACCEPT phrasing
MERGE | edf dragon loot → M-34 economy (hardened dragon earns a commensurate reward as trade good) | into: M-02 KEEP | reason: the combat-route economy angle (M-34) is downstream of the M-15/M-02 drops existing; captured implicitly; fold under M-02 KEEP with a note that the reagent drop enables the M-34 dynamic

---

## expandeddelight  — slate: 4 KEEP / 10 CUT / 7 MERGE / 0 DEFER   | anchors after: Create + economy + survival + magic (now 4; justified; salt-ore is its own scarcity node and cheese+spice are distinct economy/magic anchors)

KEEP  | expandeddelight:salt_ore → Create (create:crushing ore-doubling) | motif M-03 | delivery: recipe (create:crushing on salt_ore / deepslate_salt_ore → doubled salt dust + experience_nugget byproduct) | milestone: v0.7.0 | crushing salt ore doubles the yield and feeds the seasoning chain — a modest ore-doubling reward for a kitchen mineral; 37× times_suggested, opus-corroborated, unanimous ACCEPT
KEEP  | expandeddelight:cinnamon (bark → dust via create:milling) → Create | motif M-12 | delivery: recipe (create:milling on cinnamon_log/bark → cinnamon_dust; the spice chain runs through the spine) | milestone: v0.7.0 | cinnamon bark goes through the Millstone before the mixing bowl — of course the spice chain runs through Create; 26× times_suggested, ACCEPT-consensus
KEEP  | expandeddelight:cheese_wheel (aged) → economy | motif M-35 | delivery: recipe/config (aged cheese wheel as a time-gated value-add trade good via create_cheese:maturing or expandeddelight cask mechanic; MineColonies cook hut requests aged cheese) | milestone: v0.9.0 | cheese aging is time-gated value; the cask sits while wheat prices fluctuate — an aging specialist controls supply; 10× times_suggested (M-35), plus M-28 colony support collapsed here
KEEP  | expandeddelight:salt_ore regional spawn → economy | motif M-30 | delivery: config (GTMOGS biome-placement: salt ore spawns only in arid/coastal/deep biome bands; players in forested regions must trade for salt) | milestone: v0.9.0 | if salt ore is regionally scarce, every salted dish is region-locked — the kitchen and the miner trade; 3× ACCEPT (M-30); natural companion to the M-03 crushing KEEP

CUT   | expandeddelight:salt (c:dusts/salt) → create:mixing (brine/preservation, M-12) | motif M-12 | reason: duplicates the salt_ore→Create M-03 KEEP; one Create anchor on salt is sufficient; REJECT-majority (2× for the mixing sub-case)
CUT   | expandeddelight:chili_pepper / hot foods → survival config tie (M-16 Serene Seasons) | motif M-16 | reason: expandeddelight already anchors survival; a same-pillar config tie doesn't add a cross-system anchor; REJECT-majority (2× mixed)
CUT   | expandeddelight:chili_pepper / exotic spice → magic (M-10/M-11 arcane infusion) | motif M-10 | reason: chili is everyday food content with no arcane vibe; theme clash; REJECT-majority (3×)
CUT   | expandeddelight:salt → occultism:ritual purification (M-29 cross-route) | motif M-29 | reason: 3× ACCEPT (2× M-29, 1× M-11) but Occultism's ritual circles use chalk, not salt; no supported recipe hook for salt-as-circle-salt; thin delivery for a new anchor
CUT   | expandeddelight:cinnamon → ars_nouveau:imbuement (M-10 fire-attuned reagent) | motif M-10 | reason: 2× mixed; thematic stretch (culinary spice as arcane catalyst); the magic anchor is better expressed through salt-purification or cinnamon's fire-essence but needs a clearer motif; CUT-on-theme
CUT   | expandeddelight:cranberry/asparagus (seasonal crops) → M-16 seasonal → magic imbuement | motif M-16 | reason: 2× ACCEPT but creates a 5th anchor; the survival/Create/economy/magic four KEEPs already reach the goal; additional seasonal-magic edges are depth without new anchors
CUT   | expandeddelight:cinnamon → create:milling (same as KEEP but through seasonal gating) | motif M-16 | reason: duplicate of M-12 cinnamon KEEP with a seasonal gate overlay; the seasonal KEEP below already handles the seasonal-reagent angle; consolidate rather than two cinnamon edges
CUT   | expandeddelight:sweet_potato / peanut crops → create:compacting / mixing (M-12) | motif M-12 | reason: salt and cinnamon already anchor Create amply; adding a third Create processing route for additional crops is redundant depth; REJECT-majority (various 1× rows)
CUT   | expandeddelight:asparagus / sweet_potato / chili → Serene Seasons fertility (config-level) | motif M-16 | reason: a config-level fertility slot is not a recipe weave; M-16 requires a recipe-gated seasonal input; REJECT on no-method
CUT   | expandeddelight juicer output (juices) → fermentation / M-35 | motif M-35 | reason: expandeddelight's juicer overlaps with vinery; the aging/fermentation M-35 is already captured by the cheese_wheel KEEP; second M-35 edge is same-pillar; REJECT on economy / juicer dossier note

MERGE | expandeddelight:cinnamon_dust → create:milling (near-duplicate, 7× opus) | into: M-12 KEEP | reason: same link as the 26× ACCEPT; opus-corroborated at lower count; consolidate
MERGE | expandeddelight:salt (c:dusts/salt) → create:mixing as M-12 | into: M-03 KEEP | reason: salt-into-mixing is a sub-case of the same salt→Create processing chain; the M-03 crushing KEEP covers the inbound Create anchor
MERGE | expandeddelight cranberry/asparagus/sweet_potato → seasonal Serene Seasons gate (M-16, 2–3× ACCEPT rows) | into: M-12 cinnamon KEEP | reason: these seasonal-crop rows add a seasonal overlay to the existing M-12 chain; the cinnamon KEEP delivery note can specify seasonal-crop gate for those ingredients; fold rather than a separate KEEP
MERGE | expandeddelight:cheese_wheel → MineColonies request (M-28, 1× ACCEPT) | into: M-35 KEEP | reason: colony cheese request is the demand gate that makes the M-35 aging valuable; fold into the M-35 KEEP delivery note (include colony request as the demand mechanism)
MERGE | expandeddelight salt / cinnamon → MineColonies standing order (M-28, 1× ACCEPT) | into: M-30 KEEP | reason: the colony supply demand (tavern keeper ordering salt/cinnamon) is a consequence of the regional scarcity making them trade goods; fold under M-30 KEEP delivery note
MERGE | expandeddelight:asparagus / sweet_potato / chili → Serene Seasons seasonal growing (M-16, 1× multiple) | into: M-12 cinnamon KEEP | reason: same seasonal-input framing; cinnamon is the lead; others collapse into the delivery
MERGE | expandeddelight:cheese_wheel → create_cheese:maturing as alternative path (M-35, multiple 1× rows) | into: M-35 KEEP | reason: all the cheese-aging rows are the same M-35 link; prefer the 10× main phrasing

---

## extradelight  — slate: 3 KEEP / 9 CUT / 6 MERGE / 0 DEFER   | anchors after: Create + economy + survival (now 3)

KEEP  | extradelight crops/outputs (grain, coffee, spices) → Create (milling/pressing/mixing) | motif M-12 | delivery: recipe (create:milling on coffee beans / grain → ground coffee / flour; create:pressing on citrus/oil → juice; these feed extradelight:oven / vat downstream) | milestone: v0.7.0 | the bakery's grain goes through Create's millstone before the oven — of course; 15× times_suggested (opus-corroborated), unanimous ACCEPT across multiple phrasings
KEEP  | extradelight feasts / high-tier dishes → economy (MineColonies colony provisioning) | motif M-28 | delivery: config (MineColonies restaurant/tavern/cook hut request lists seeded with extradelight feast items; colony workers request feasts for productivity buffs) | milestone: v0.9.0 | a colony cook needs prepared dishes to feed citizens — the deep kitchen becomes a colony supply chain; 8× times_suggested (opus-corroborated), strong ACCEPT
KEEP  | extradelight:drying_rack / evaporator outputs (dried herbs, syrups, reduced fluids) → economy | motif M-35 | delivery: recipe/config (dried spices and aged reductions must sit on the rack before usable — a time-axis aging specialist role; deliver via KubeJS aging timer or existing rack mechanic) | milestone: v0.9.0 | dried/aged goods must sit before they gain value — the aging specialist's pantry is the economy bottleneck; 2× ACCEPT (M-35), plus M-32 byproduct rows collapsed here

CUT   | extradelight:drying_rack outputs (dried herbs) → ars_nouveau:imbuement (M-10) | motif M-10 | reason: dried culinary herbs as arcane catalysts strain tone — domestic-kitchen not apothecary; REJECT-majority (2×); the magic pillar is not a target anchor for extradelight
CUT   | extradelight feasts → M-26 consumption (food demand) | motif M-26 | reason: food-demand is the ambient loop endpoint; M-27 was rejected for this reason; REJECT-consensus; the M-28 colony-demand KEEP already provides the demand gate
CUT   | extradelight:coffee (caffeine) → Cold Sweat config hook | motif M-16 | reason: a coffee→warmth config tie has no accepted motif; no-method; REJECT-consensus
CUT   | garlic/citrus/coffee → Serene Seasons seasonal gate | motif M-16 | reason: staple crops season-gated make the whole cuisine layer seasonal and starve the kitchen — everyday crops should not be gated; REJECT (opus-corroborated)
CUT   | extradelight:oven bakeware → create:pressing (M-20 deploy-application) | motif M-20 | reason: M-20 is item_application upgrading an item, not bakeware transformation; motif mismatch; REJECT
CUT   | extradelight kitchen-deco blocks → create:crushing (M-04) | motif M-04 | reason: 826 deco blocks with blanket crushing recipes is tedious and adds minimal value; REJECT
CUT   | extradelight evaporator output (rendered fat) → aeronautics (M-13 biofuel) | motif M-13 | reason: 1× ACCEPT only; the M-13 reservation is for TFMG diesel/gasoline fuels; biofuel from food processing conflicts with the reserved reagent; CUT-per-reagent-ownership
CUT   | extradelight:mortar → magic-reagent grinding (M-07 attunement catalyst) | motif M-07 | reason: 2× ACCEPT (M-07 Galosphere lumiere ground in mortar as attunement dust); interesting but extradelight already has 3 anchors; a magic 4th would expand scope; the attunement-catalyst role (M-07) belongs to Galosphere, not extradelight; CUT-on-reagent-ownership
CUT   | extradelight:vat outputs → TFMG:distillation (M-32 tone clash) | motif M-32 | reason: rustic-kitchen vat feeding heavy-industry distillation crosses a tone boundary; REJECT-consensus
CUT   | extradelight coffee/grain/citrus → Serene Seasons (M-16, 1× only) | motif M-16 | reason: seasonal gate on everyday staple crops; REJECT as above (matching the opus-flagged CUT on garlic/citrus)

MERGE | extradelight evaporator/vat outputs → create:mixing (M-12, 2× ACCEPT) | into: M-12 KEEP | reason: reduced fluids from the evaporator feeding Create mixing is the same M-12 processing-chain pull; fold into the Create KEEP delivery note
MERGE | coffee / grain → create:milling (multiple 2–3× rows, opus-corroborated) | into: M-12 KEEP | reason: all near-duplicate phrasings of the same M-12 link; prefer the 15× phrasing
MERGE | extradelight feasts → colony provisioning (multiple 1–2× rows) | into: M-28 KEEP | reason: all colony-provisioning rows converge on the same link; consolidate under 8× ACCEPT phrasing
MERGE | extradelight:drying_rack → M-16 seasonal reagent (harvest-season crops dried for winter) | into: M-35 KEEP | reason: seasonal-drying is a sub-case of the maturation/aging M-35 KEEP; fold into delivery note (the rack runs overtime before winter)
MERGE | extradelight:drying_rack → M-35 aging (fermentation/alcohol industry) | into: M-35 KEEP | reason: drying-rack aging is captured by M-35 KEEP; fermentation extension is same-pillar; fold
MERGE | extradelight:mortar as magic-reagent grinder (M-12 cross-mod method, 1× ACCEPT) | into: M-12 KEEP | reason: routing foreign magic-mod herbs through the mortar is a M-12 processing-chain pull using the mortar as a Create-adjacent method; fold into Create KEEP delivery note with a note that the mortar accepts magic-mod herb inputs

---

## fishingreal  — LEAVE (pure behavior layer: intercepts rod-reel events and spawns live fish entities instead of drops; adds no items, no recipe types, no materials; all 5 candidate rows are REJECT-consensus confirming no weave surface exists; any weave must be authored on content mods above it)

---

## immersive_armors  — slate: 3 KEEP / 9 CUT / 6 MERGE / 0 DEFER   | anchors after: Create + magic + economy (now 3)

KEEP  | immersive_armors Heavy / Steampunk sets → Create (create:pressing + create:mechanical_crafting) | motif M-05 | delivery: recipe (KubeJS: Heavy set requires Create-pressed iron plates; Steampunk set requires mechanical-crafted brass components) | milestone: v0.7.0 | pressing the Heavy chestplate needs a pressed iron plate out of the Create workshop — of course it does; highest times_suggested (31×), unanimous ACCEPT
KEEP  | immersive_armors:divine_chestplate set → magic (ars_nouveau:enchanting_apparatus) | motif M-10 | delivery: recipe (KubeJS armor_upgrade: the Divine set's once-per-minute block passive is imbued at the Enchanting Apparatus with a source_gem catalyst) | milestone: v0.11.0 | a divine set's aegis isn't forged — it's blessed; of course the enchanting apparatus finalizes it; 26× times_suggested, ACCEPT-consensus
KEEP  | immersive_armors finished armor sets (Heavy/Divine/Steampunk) → economy (emergent trade by armorsmith specialist) | motif M-34 | delivery: emergent (a Create+magic specialist forges the gated sets and trades them to combat players; no recipe needed — the economy edge follows from the gate) | milestone: v0.9.0 | running the pressing bench and the magic apparatus for themed sets is a natural craft specialty; 2× ACCEPT (M-34), supported by multiple 1× rows; the gate creates the trade dynamic

CUT   | immersive_armors:bone_chestplate set → occultism:spirit_fire (M-11) | motif M-11 | reason: bone armor uses vanilla bone (cheap everyday material); spirit_fire is for transmuting mid-tier drops; depth-scales-with-power guardrail violated; REJECT-majority (4×)
CUT   | immersive_armors:bone set → occultism:ritual (M-11 ritual attunement) | motif M-11 | reason: bone armor pacifying skeletons via ritual attunement is thematically interesting but bone is a basic mob-drop; the basics-not-deep guardrail applies; 2× mixed; CUT-on-depth
CUT   | immersive_armors:prismarine set → create:deploying (M-20 deploy-upgrade) | motif M-20 | reason: prismarine set's spike-retaliation is already a set bonus; deploying a component for a basic ocean-material set overloads a simple armor; CUT-on-depth
CUT   | immersive_armors:prismarine set → upgrade_aquatic M-29 cross-route | motif M-29 | reason: 2× ACCEPT (prismarine armor requiring upgrade_aquatic:prismarine_rod) — thematically coherent but creates a 4th anchor; the 3 KEEPs already achieve the target; CUT to avoid scope expansion
CUT   | immersive_armors Robe set → ars_nouveau:enchanting_apparatus (separate M-10 path) | motif M-10 | reason: redundant — the Divine set M-10 KEEP already anchors magic; a second M-10 path on the Robe set would double-up on the same pillar with less thematic weight; REJECT (1×)
CUT   | immersive_armors:emerald_chestplate → numismatics sell | no motif | reason: generic-sellable; armor as NPC coin source is M-09 retired / M-21 cut; REJECT
CUT   | immersive_armors bone/wooden/prismarine/slime/warrior/emerald sets → any deep recipe method | multiple | reason: everyday-tier guardrail — these sets use simple early-game materials; gating them behind deep chains violates the depth-scales-with-power rule; REJECT-consensus (1× blanket row)
CUT   | immersive_armors:wither set → M-15 boss key (wither skull gate) | motif M-15 | reason: wither skull is already a vanilla boss-key; adding a Create step is recipe hardening within survival, not a new cross-system anchor; 2× mixed but the M-15 apply doesn't add a pillar beyond the existing wither gating; CUT-as-redundant
CUT   | immersive_armors sets → MineColonies Guard Tower request (M-28 colony) | motif M-28 | reason: 1× ACCEPT; colony requesting heavy sets is plausible but creates a 4th anchor; the economy M-34 KEEP already covers the player-economy supply chain; fold into M-34 rather than a separate M-28 KEEP
CUT   | immersive_armors:heavy_armor offcuts → create:crushing (M-32 byproduct recycle) | motif M-32 | reason: pressing offcuts are a legitimate M-32 candidate but 1× only; industrial circularity is a nice add-on to the M-05 KEEP delivery; fold into delivery note rather than a standalone KEEP

MERGE | immersive_armors Steampunk set → create:mechanical_crafting (4× + 2× + 1×+ opus) | into: M-05 KEEP | reason: multiple phrasings of the same M-05 link; prefer the 31× combined phrasing
MERGE | immersive_armors Heavy set → create:pressing (3× separate rows) | into: M-05 KEEP | reason: Heavy set pressing is the same M-05 KEEP; fold
MERGE | Steampunk → create:sequenced_assembly (M-06, 4× ACCEPT) | into: M-05 KEEP | reason: sequenced_assembly is the multi-stage version of M-05; the Steampunk set could plausibly be M-06 instead of M-05; the maintainer can decide at authoring which method to use; prefer M-05 (higher consensus) and note M-06 as an upgrade option in delivery
MERGE | Divine set → M-10 enchanting_apparatus (multiple 1–3× supporting rows) | into: M-10 KEEP | reason: all are the same link at lower times_suggested; consolidate under 26× phrasing
MERGE | immersive_armors finished sets as trade goods (M-34, multiple 1× rows) | into: M-34 KEEP | reason: all trade-economy rows are the same M-34 emergent link; consolidate
MERGE | immersive_armors → M-37 research (colony barracks research unlocks armor schematic, 1×) | into: M-34 KEEP | reason: the research-unlock angle adds nuance but is a delivery detail on the economy anchor; fold into M-34 KEEP delivery note (colony research gates the efficient plate-forging method)

---

## kobolds  — slate: 2 KEEP / 9 CUT / 6 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | kobolds:kobold_skull → magic (occultism:spirit_fire transmutation) | motif M-02 | delivery: recipe (occultism:spirit_fire on kobold_skull → occult essence; the wither-skull variant yields a rarer essence) | milestone: v0.11.0 | a kobold skull — an underground lizard-folk relic — transmuted in spirit fire feels like exact occult material; of course a ritualist uses it; 18× times_suggested (opus-corroborated), ACCEPT-consensus
KEEP  | kobold combat drops (skulls, from raiding Dens) → economy (combat specialist → magic user trade) | motif M-34 | delivery: emergent (clearing a Kobold Den is dangerous; a combat player supplies skull reagents to magic users via trade; no recipe needed — the drop creates the supply chain) | milestone: v0.9.0 | raiding a Kobold Den is dangerous; a combat specialist farms them and sells skulls to ritualists — player-run economy; opus-corroborated 1×, supported by multiple 1× ACCEPT rows

CUT   | kobolds:kobold_skull → ars_nouveau:imbuement (M-10) | motif M-10 | reason: kobold skull is organic/trophy material; routing it through Ars imbuement doubles up on the magic pillar where spirit_fire (M-02) is the cleaner motif; REJECT-majority (7×)
CUT   | kobolds redstone-item trades (engineer kobold) → create:crushing (M-29 cross-route) | motif M-29 | reason: the engineer kobold's redstone trades are vanilla NPC trades, not a recipe cross-dependency; M-29 requires a recipe input relationship, not a trade route; REJECT-majority (3×)
CUT   | kobolds Prospector enchantment → ars_nouveau:enchanting_apparatus (M-29 / M-02) | motif M-29 | reason: the Prospector enchant is already the *output* of kobold trading; routing it through the apparatus would "inscribe" a trade-acquired book — possible but the enchant is already player-obtainable and this doesn't create a new production anchor; REJECT on no-new-anchor
CUT   | kobolds pirate den loot → aeronautics (seed airship schematic / navigation chart) | motif M-34 | reason: interesting theme (pirate kobolds as ancient mariners) but 2× mixed; aeronautics is not a target anchor for kobolds; forces a 3rd anchor that the mod doesn't need; CUT-on-scope
CUT   | kobolds:kobold_wither_skull → M-15 boss-key gate (high-tier Create recipe) | motif M-15 | reason: kobolds are a whimsical-fantasy mob, not a boss-tier threat; M-15 is for signature boss drops gating complex tech; wither-skull is a variant drop, not a boss defeat; REJECT-majority (2×)
CUT   | kobold pirate den loot → economy (loot-seed numismatics coin) | motif M-08 | reason: kobolds already trade in emeralds; a coin loot-seed on top creates overlapping currency drops; thin 1×; the M-34 KEEP already provides the economy anchor through the combat-specialist trade dynamic
CUT   | kobolds Prospector enchantment → M-37 research gate (knowledge gated behind kobold trade) | motif M-37 | reason: 1× ACCEPT only; the enchant is knowledge-locked behind trade rather than a crafting recipe, which is an M-37 reading — but M-37 is for MineColonies research / Ars spell-knowledge; villager trade knowledge is the ambient design, not a recipe weave; CUT-on-no-method
CUT   | kobolds:kobold_skull → create:haunting (M-19 soul-fire transmutation) | motif M-19 | reason: M-02 via spirit_fire is the cleaner motif-grounded route; haunting is an M-19 Create→occult bridge designed for Create's method, not a skull; REJECT (1×)
CUT   | kobolds iron tool drops → create:crushing (M-04 deco-recycle) | motif M-04 | reason: kobold iron tools are mob-drop items of vanilla tier; recycling them is practical noise, not a system weave; REJECT-majority (1× ACCEPT only)

MERGE | kobolds:kobold_skull → occultism:spirit_fire (M-11 framing, 12× times_suggested) | into: M-02 KEEP | reason: M-11 (ritual/transmutation sink) and M-02 (mob-drop reagent sink) are both applicable here; M-02 is the canonical motif for a mob drop given a magic use; the M-11 rows are the same physical action; prefer M-02 (mob-drop reagent); consolidate all 12× M-11 rows into the M-02 KEEP
MERGE | kobolds:kobold_wither_skull → occultism:spirit_fire (rarer essence variant, 1× M-11) | into: M-02 KEEP | reason: same link, wither-skull variant; fold into M-02 KEEP delivery note (wither-skull variant yields a rarer essence)
MERGE | kobold combat drops → M-34 economy (opus-corroborated 1×, multiple 1× supporting) | into: M-34 KEEP | reason: all trade-economy rows around kobold den raiding are the same M-34 emergent link; consolidate
MERGE | kobold Prospector enchantment → service-for-hire (M-33, 1–2× ACCEPT) | into: M-34 KEEP | reason: a mining specialist who finds kobold enchanters and sells Prospector-inscribed tools is a M-33/M-34 service-labor economy role; fold under M-34 KEEP as a delivery note (the enchant becomes a traded service output)
MERGE | kobold engineer redstone trades → M-29 Create cross-route (1× ACCEPT) | into: M-34 KEEP | reason: the redstone trade as a supply path is an emergent economy dynamic (M-34 / M-33), not a recipe cross-dependency (M-29); fold under M-34 KEEP delivery note
MERGE | kobold pirate den loot → loot-seed (Create blueprint fragment, M-15, 1×) | into: M-02 KEEP | reason: a single loot-seed on the pirate den is a minor delivery add-on; if the maintainer wants a loot-seed, fold it into the M-02 KEEP delivery note (den chest also drops a rare reagent or schematic fragment)

---

## multipiston  — LEAVE (multipiston:multipistonblock is a MineColonies / Structurize internal tool block, not a player-built item in the conventional sense; the single candidate row is REJECT; no weave surface exists that isn't already inside MineColonies' own build mechanic)

---

## pantographsandwires  — slate: 3 KEEP / 10 CUT / 5 MERGE / 0 DEFER   | anchors after: Create + aeronautics + magic (now 3)

KEEP  | pantographsandwires:coal_coke → Create (TFMG:coking byproduct feedstock) | motif M-32 | delivery: recipe (TFMG:coking oven consumes pantographsandwires:coal_coke as an input / byproduct feedstock; the coke that wires the overhead line feeds the coking chain) | milestone: v0.7.0 | TFMG's coking oven turns raw coal into coke; pantographsandwires consumes coal_coke as a crafting input — of course the industrial carbon chain shares a node; 9× times_suggested (highest), ACCEPT-consensus
KEEP  | pantographsandwires overhead-line infrastructure → aeronautics / logistics | motif M-31 | delivery: config/design (electrified rail spans regions; catenary mast + wire infrastructure is the ground-logistics arm of the economy pillar alongside aeronautics; building regional electric freight requires this mod's infra blocks) | milestone: v0.9.0 | stringing pantograph lines is what makes long-haul electric freight viable — the distribution backbone earns its keep; 2× ACCEPT (M-31), opus-corroborated
KEEP  | pantographsandwires:graphite → Create (create_new_age:energising cross-route dependency) | motif M-29 | delivery: recipe (KubeJS: require pantographsandwires:graphite as a conductor component in a Create New Age energising recipe — the rail-infrastructure material becomes a cross-route dependency) | milestone: v0.7.0 | the Energiser needs graphite as a conductor; a rail-infrastructure material becomes a required Create-electric input; 3× ACCEPT (M-29), 3× supporting M-17 rows (collapsed here — M-17 is the FE-charging bridge, M-29 is the cross-route dependency; prefer M-29 as the authoring motif)

CUT   | pantographsandwires:graphite → ars_nouveau:imbuement / occultism:ritual (M-10/M-11 magic) | motif M-10/M-11 | reason: graphite is an industrial/electrical conductor; routing it through arcane infusion or ritual chalk is a tone stretch — the magic pillar is not the primary anchor for this mod; REJECT-majority (7× M-10)
CUT   | pantographsandwires:coal_coke → aeronautics fuel (M-13) | motif M-13 | reason: coal_coke is already a Create-processed intermediate; M-13 is reserved for TFMG diesel/gasoline propulsion fuels; coal_coke as a propulsion fuel competes with the reserved reagent table; REJECT-majority (3×)
CUT   | pantographsandwires infrastructure blocks → create:crushing (M-04 recycle) | motif M-04 | reason: already 3-pillar anchored; adding a crushing-recycle edge doesn't advance a system; REJECT-majority (2×)
CUT   | pantographsandwires:graphite → aeronautics M-24 drivetrain (control surface electrical conductor) | motif M-24 | reason: graphite's role as catenary/wire infra intermediate is already the *source* of this mod's own system; grafting it into a ship control surface doubles up within a third anchor without a new pillar; 1× ACCEPT only; CUT-on-scope (3 anchors sufficient)
CUT   | pantographsandwires:graphite → create:milling (M-12) | motif M-12 | reason: graphite is produced within the mod's own Create-routed recipes; adding a milling route is a within-Create hop; REJECT-majority (3×)
CUT   | pantographsandwires:graphite → TFMG:winding / create:mixing (M-32 electrode chain) | motif M-32 | reason: graphite feeding TFMG/Create electrode chains is a Create↔Create hop; both source and sink are same pillar; REJECT-majority (2×)
CUT   | pantographsandwires:graphite → occultism chalk substitute (M-11, 2× mixed) | motif M-11 | reason: 2× ACCEPT (graphite as chalk substitute in Occultism circles); thematically interesting but the magic pillar is not a target anchor for this mod and Occultism's chalk mechanic uses its own registered chalk; no supported recipe hook; CUT-on-no-method (though if the magic KEEP below is added, this could fold in as an add-on)
CUT   | pantographsandwires:coal_coke → create:haunting (M-19, soul-coal) | motif M-19 | reason: haunting industrial coal coke has no thematic grounding; coal coke is purely industrial; tone clash; REJECT (1×)
CUT   | pantographsandwires overhead-line infra → loot-seed numismatics (M-08) | motif M-08 | reason: pantographsandwires is a construction/infra mod, not a dungeon/loot-bearing structure mod; seeding its blocks into dungeons is incoherent; REJECT (1×)
CUT   | pantographsandwires:graphite → create:haunting (M-19, soul-carbon for ritual) | motif M-19 | reason: haunting graphite as a "soul-carbon" ritual conductor is a stretch; 1× ACCEPT only; the magic connection is better expressed through the M-29 graphite cross-route KEEP; CUT-on-tone

MERGE | pantographsandwires:coal_coke → TFMG:coking (M-12 framing, 5× ACCEPT) | into: M-32 KEEP | reason: M-12 (processing-chain pull) and M-32 (byproduct→input) both describe coke flowing into the TFMG coking chain; prefer M-32 (cleaner — coke IS the byproduct feedstock); fold the M-12 rows into M-32 KEEP
MERGE | pantographsandwires:graphite → create_new_age:energising (M-17, 3× + 1× ACCEPT) | into: M-29 KEEP | reason: M-17 (FE-charging bridge) and M-29 (cross-route dependency) are describing the same graphite→energiser link; prefer M-29 (clearer demand-gate); fold M-17 rows
MERGE | pantographsandwires catenary infra → M-31 logistics (1× opus, 2× main) | into: M-31 KEEP | reason: same link at varying phrasings; consolidate under the opus-corroborated phrasing
MERGE | pantographsandwires → M-28 colony route (Builder constructs station/depot, 1×) | into: M-31 KEEP | reason: colony use of infra materials is a delivery sub-case of the aeronautics/logistics KEEP; fold into delivery note
MERGE | pantographsandwires:graphite / coal_coke → M-32 byproduct feedstock for carbon chains (opus-corroborated) | into: M-32 KEEP | reason: same byproduct-feedstock link; consolidate

---

## trashcans  — slate: 1 KEEP / 6 CUT / 2 MERGE / 0 DEFER   | anchors after: Create (now 1; 1 is the floor; this is a QoL/convenience mod — note for maintainer as a candidate for a second weave or for LEAVE consideration)

KEEP  | trashcans:ultimate_trash_can → Create (create:sequenced_assembly gate) | motif M-06 | delivery: recipe (KubeJS: gate the ultimate_trash_can behind a sequenced-assembly chain so infinite-void is a meaningful build milestone, not a starter convenience; a machine that deletes matter at arbitrary rate is endgame infrastructure) | milestone: v0.7.0 | a machine that voids items, fluids, and FE at arbitrary rate is of course an endgame fabrication, not a workbench craft; 3× ACCEPT (M-06), supported by balance-note rows

CUT   | trashcans:ultimate_trash_can → create:mechanical_crafting gate (M-05) | motif M-05 | reason: M-06 (sequenced_assembly) is the appropriate deep-chain gate for a true endgame void machine; M-05 (native-method gating) is a lighter gate; the M-06 KEEP covers this; REJECT-majority (3×) and the balance note explicitly recommends M-06 escalation
CUT   | trashcans:item_trash_can / liquid_trash_can → M-05 recipe gate (Create-processed iron) | motif M-05 | reason: in a scarcity-driven pack, making it harder to void materials is correct but M-05 is the wrong depth; the M-06 KEEP already gates the ultimate; individual can gates via M-05 are intermediate steps that may be added at authoring but not a separate KEEP
CUT   | trashcans:item_trash_can → M-32 (overflow bypass on Create processing line) | motif M-32 | reason: a byproduct sink on a Create line is legitimate in principle but free infinite-rate deletion is an economic leak in a scarcity pack; the M-06 gate makes the ultimate_trash_can expensive enough that earlier-tier items go to alternate sinks first; 1× ACCEPT but anti-scarcity tension; CUT pending maintainer judgment
CUT   | trashcans void mechanic → M-09 / economy sink | no motif | reason: voiding is anti-scarcity; no motif covers intentional destruction as a connective link; REJECT-consensus
CUT   | trashcans (4 items, loot=yes) → loot-seed | any | reason: seeding a void/deletion utility block into dungeons is incoherent; REJECT-consensus
CUT   | trashcans voided byproducts → any sink | no motif | reason: voiding is anti-scarcity/anti-economy; opus-corroborated REJECT

MERGE | trashcans:liquid_trash_can → create:sequenced_assembly (same M-06 escalation, 1×) | into: M-06 KEEP | reason: the liquid-void and item-void cans are variants of the same convenience item; gate them together in the same sequenced-assembly chain (or as sub-recipes); fold under M-06 KEEP delivery note
MERGE | trashcans balance-note on gating (M-06 / M-05 design intent) | into: M-06 KEEP | reason: the balance note is a delivery detail, not a separate weave; fold into KEEP delivery note

---

== BATCH COMPLETE ==
