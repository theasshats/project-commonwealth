# Phase 2 candidates — chunk-03

## libipn   [anchors: support/library (1)]
- LEAVE — pure code/GUI library for IPN; registers 0 items/blocks/recipe-types; zero content surface.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:steel_ingot (c:ingots/steel) | via: numismatics mint (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is scarce—requires nuclear refining—so minting it into coin makes the reactor a monetary engine, not just a power source
- from: createnuclear:uranium (processed fuel) | via: numismatics mint (M-08) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade uranium is a regional-scarcity metal; selling refined fuel pellets is the obvious high-value trade
- from: createnuclear:lead_ingot | via: create:crushing ore-doubling (M-03) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: lead ore gets doubled like every other regional ore; the byproduct (shielding scraps) hints at radiation protection
- from: anti-radiation armor set | via: occultism:spirit_fire or ars_nouveau:imbuement as a "purification" step (M-10) | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: radiation protection has no coherent arcane narrative; forcing a magic infusion onto hazmat gear is tone-clash; the armor is tech, not a magic reagent
- from: createnuclear:autunite (glowing ore block) | via: ars_nouveau:imbuement as a glow-catalyst (M-10) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: autunite's eerie green luminescence reads as an arcane catalyst—a Create nuclear byproduct that feeds the Ars infusion table; ties the reactor into the magic web
- from: createnuclear:enriched_soul_soil | via: create:haunting → occultism spirit bridge (M-19) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: soul-enriched soil is the natural output of haunting; autunite + haunting = irradiated soul substrate, a reagent Occultism can crystallize

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. The mod is already at the two anchors that define it (Create logistics spine + aeronautics delivery layer). Possible economy adjacency (delivering purchased goods) is infrastructure, not a coin-sink edge; no recipe weave to author.
- REWORK: none — both anchors (Create + aeronautics) are accurate and tight. The aeronautics label is correct: drone/bee-port delivery is the economics' physical-movement arm by definition.

## azurelib   [anchors: support/library (1)]
- LEAVE — animation-engine library; 0 items, 0 recipe-types; the one block (lightblock) is an internal renderer utility. No content surface.

## alcohol_industry   [anchors: Create, survival (2)]
- from: bottled spirits (beer/vodka/whiskey/tequila) | via: numismatics sell/price (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a full Create distillery chain turns fermentable crops into bottled spirits—high-effort luxury goods that players sell at the trade post; the alcohol-as-commodity is exactly M-09
- from: alcohol_industry:alcohol_base fluid | via: extradelight:vat / farmersdelight:cooking as an intermediate solvent (M-12) | to: survival (food chain depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: distilled base can substitute as a cooking solvent in Vat reductions (flavour extracts, tinctures), pulling the brewery into the cooking web
- from: alcohol_industry:tequila / whiskey | via: ars_nouveau:imbuement as a fermented catalyst (M-10) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: spirits-as-magic-catalyst is a thematic stretch; the pack's arcane reagents are crystalline/organic esoteric materials, not booze; tone-clash

## moreculling   [anchors: support/performance (1)]
- LEAVE — client render-culling optimizer; 0 items/blocks/recipe-types; depends on Sodium. No content surface.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. GTMOGS is the worldgen substrate that makes scarcity real; it *enables* M-03/M-08 downstream rather than needing its own weave edge. Already at 2 anchors (survival exploration + economy feedstock).
- REWORK: none — both anchors accurately reflect its role. Flagging a potential documentation note: the dossier correctly notes it ENABLES motifs M-03/M-08 rather than participating in them—this framing should be preserved and not rewritten as a direct motif-candidate.

## entity_texture_features   [anchors: support/client rendering (1)]
- LEAVE — client texture-feature engine; 0 items/blocks/recipe-types. No content surface.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a rare whale-analogue secretion—an obvious arcane perfume/catalyst for Ars infusion; the mob hunt to obtain it makes the magic web feel earned
- from: alexsmobs:ender_residue | via: occultism:spirit_fire (M-11) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue transmuting through spirit-fire into an occult essence is the obvious bridge—void matter becomes occult fuel
- from: alexsmobs:void_worm_beak (endgame boss drop) | via: boss-key gate on a complex Create/tech recipe (M-15) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is the Alex's Mobs apex encounter; its beak as a required component in a high-tier Create mechanism (e.g. drill-head or kinetic chassis) makes hunting it necessary for late-tech advancement
- from: alexsmobs:bear_dust | via: create:crushing (M-02+M-03) | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic animal dusts processed in a crushing wheel yield reagent powders—fauna feeds the tech spine at low cost, one light step
- from: alexsmobs:banana | via: extradelight:juicer / mortar (M-12) | to: survival (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bananas from the forest canopy feed the kitchen—one natural processing step into juice or flour for Delight recipes
- from: alexsmobs:ambergris | via: occultism:spirit_trade (M-18) | to: magic/economy | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: ambergris is already ACCEPT via M-10 imbuement; adding a second routing to spirit_trade for the same item creates ambiguity about its canonical use; keep M-10, drop this to avoid double-spend

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — behavior-only door-sync mod; 0 items/blocks/recipe-types. No content surface.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mini-boss drops (bust_valkyrie/gorgon/minotaur/sphinx/vampire) | via: occultism:spirit_fire / ritual (M-11) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: mythic-creature trophies transmuted through spirit-fire yield occult essences—busts of legendary beings are exactly what spirit-fire consumes; the hunt feeds the ritual web
- from: grimoireofgaia:bone_shield (mid-tier drop) | via: create:crushing → bone meal/fragments (M-02/M-03) | to: Create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing a bone shield back to bone fragments and dust connects the bestiary to Create ore-doubling byproducts; one processing step, sensible cost
- from: grimoireofgaia rare artifact rings (Ring of Speed/Jump/Haste) | via: numismatics sell — boss-loot bounty (M-14) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: killing mythic bosses to claim artifact rings, then selling them at the bounty board, is the exact combat→economy loop M-14 describes; rings as coinage-worthy loot is intuitive
- from: grimoireofgaia:pearl_block (decorative block) | via: create:crushing → pearl fragments (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a pearl-block can be crushed back to pearl shards—deco-to-Create recycle, standard M-04 lossy loop
- from: grimoireofgaia drops (all nuggets/fragments) | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the bust/boss-drop → occultism:spirit_fire (M-11) already covers the magic routing at the appropriate endgame power level; adding a blanket M-10 imbuement over all fragments at mid power would dilute the M-11 endgame spike and create redundant edges—one magic entry point is enough; keep M-11 for bosses

## dndesires   [anchors: Create (1)]
- from: dndesires:rubber (mid-tier Create intermediate) | via: create:sequenced_assembly as an aeronautics gasket/seal component (M-24) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber gaskets and seals are the obvious mechanical component for ship hull integrity and pneumatic controls; adding rubber to airframe sealing recipes makes the dndesires Hydraulic Press part of the aeronautics build chain
- from: seasonal crops (Serene Seasons gated) | via: dndesires:freezing fan-processing (M-16) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: preserving seasonal produce by freezing it in a dndesires freezing-sail fan is the natural "out of season" answer—a Create machine that turns seasonal scarcity into a preserved good
- from: dndesires milkshakes (chocolate/glowberry etc.) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: bottled milkshakes are luxury consumables with Create-depth behind them (mixing + fan processing)—appropriate as small-coin trade goods
- from: dndesires:rubber | via: ars_nouveau:imbuement as a vulcanisation catalyst (M-10) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: rubber is an industrial polymer; arcane imbuement of it has no coherent theme—the magic web doesn't need industrial intermediates; tone-clash
- from: dndesires:asphalt blocks | via: aeronautics structural use (M-23) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: asphalt is a ground-surface paving material; its narrative is roads and runways, not airframe structure; using it as a hull material would feel wrong—players expect metal plates, not asphalt; better left as runway/landing-pad deco

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein outputs (scarce regional metals via drilling) | via: numismatics mint (M-08) — the vein-table populates the same scarce ores the mint wants | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a drilling rig that slowly extracts a regional ore vein—then runs that ore through Create and into a mint—is a self-contained "mine → process → coin" loop; the infinite-but-slow rate makes it a fair ongoing economy engine
- from: createoreexcavation:diamond_drill / netherite_drill (endgame tool) | via: boss-key gate (M-15) — a boss drop as a required part for the top-tier drill head | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite drill head is endgame mining automation; gating it behind a boss drop (fitting a "dangerous relic") makes the drilling machine a progression milestone, not an early automation shortcut
- from: createoreexcavation:raw_diamond / raw_emerald (vein raw outputs) | via: create:crushing ore-doubling (M-03) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: raw diamonds/emeralds from the drill should pass through crushing wheels like every other raw ore—consistent and expected; the bonus dust rewards specialized extraction
- from: createoreexcavation vein fluid outputs | via: aeronautics fuel chain (M-13) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: the mod can extract fluids but TFMG/diesel is the designated aeronautics fuel (reserved reagent); rerouting COE-extracted crude into the fuel chain duplicates a path that TFMG already owns; no new anchor added

## durabilitytooltip   [anchors: support/client UI (1)]
- LEAVE — client tooltip overlay; 0 items/blocks/recipe-types. No content surface.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (soul-furnace output) | via: occultism:spirit_fire (M-11) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallized blood from the Soul Furnace is exactly the kind of transmuted-essence Occultism's spirit-fire wants; the gothic alchemy tone of Companions maps cleanly onto Occultism's ritual web
- from: companions:soul_gem | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a soul gem crystallized from the Soul Furnace is an obvious arcane reagent for Ars infusion; binding a captured essence into a source catalyst is coherent and thematically satisfying
- from: companions:relic_gold (boss/Sacred Pontiff drop) | via: numismatics sell — bounty payout (M-09) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: relic gold dropped by the Sacred Pontiff boss is a high-effort luxury; selling it at the trade post completes the combat → economy loop
- from: companions copper/nether/end coins | via: numismatics unification (M-21 provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); and bridging Companions' internal coin types to Numismatics creates a parallel-currency conflict—the pack explicitly owns the Numismatics economy; competing coin systems should NOT be bridged without Gate-0 sign-off; record as rejected
- from: companions tesla/voltaic blocks | via: create:crushing (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: voltaic pillars and relay blocks are copper-core constructs; crushing them back to copper/redstone scrap is the same lossy recycle M-04 uses for any metal deco—small but sensible

## trashslot   [anchors: support/QoL (1)]
- LEAVE — UI trash-slot; 0 items/blocks/recipe-types. No content surface.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight crops/ingredients (coffee, garlic, citrus, corn) | via: create:milling / create:pressing (M-12) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running coffee through a milling wheel for ground coffee, or pressing citrus for juice concentrate, makes the ExtraDelight kitchen a downstream of Create's processing belt—the bakery reads as a Create production line, not a parallel food island
- from: extradelight feasts (high-tier) | via: numismatics sell — MineColonies provisioning / luxury trade (M-09) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: feasts take deep cooking-chain effort; selling them to colony workers or at the trade post closes the food→economy loop naturally
- from: extradelight:evaporator outputs (salt, syrups) | via: alcohol_industry:alcohol_boiling as a base-flavouring intermediate (M-12) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: evaporated syrups and salt from the Evaporator feed back into the Alcohol Boiler as flavour inputs—the two kitchen systems share a processing web; syrup-whiskey and salted vodka give the distillery depth
- from: extradelight crops (seasonal—Serene Seasons) | via: seasonal gating (M-16) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: coffee and citrus as warm-season crops means the deep kitchen's most elaborate recipes are seasonally bottlenecked—a natural pressure driver; players stockpile or trade to bridge the gap
- from: extradelight kitchen-deco blocks (counters, sinks, spice racks) | via: create:crushing (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 826 deco blocks is a massive set; blanket crushing recipes for kitchen furniture is tedious and adds minimal value—these are aesthetic items, not resource nodes; one or two iconic blocks might be worth it (e.g. acacia_sink → plank+copper scrap) but not a blanket edge; leave unless specifically targeted
- REWORK: existing Create anchor is sound; the connection to survival is accurate (deep food chain). Suggest the Create anchor be strengthened: the dossier's "already partially Create-woven (create:mixing)" understates the full scope—create:milling + create:pressing are natural unlocked inbound edges, and these ACCEPT rows make the Create link first-class, not partial.

## minecolonies_tweaks   [anchors: support/QoL+tag-harmonization (1)]
- LEAVE — tag-injection and QoL glue mod; 0 blocks, 38 items (inventory/copy scrolls only), no recipe-types that weave into the causal loop; its output is the c:crops/foods tag set that *enables* other weaves, not a weave node in itself. (Like lootjs for loot—infrastructure, not content.)

## txnilib   [anchors: support/library (1)]
- LEAVE — developer code library; 0 items/blocks/recipe-types. No content surface.

## ponderjs   [anchors: support/Create tooling (1)]
- LEAVE — KubeJS scripting extension for Create's Ponder tutorial scenes; 0 items/blocks/recipe-types; documents the pack's weaves rather than feeding a pillar.

== CHUNK COMPLETE ==
