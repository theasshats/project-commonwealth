# Phase 2 candidates — chunk-10

## sky_whale_ship   [anchors: survival (1)]
- from: sky whale loot tables | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: reaching a sky whale by airship rewards the pilot with aeronautics-tier components — destination justifies the vessel
- from: sky whale loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: whale-back rarities are harvested by a flying combat specialist and traded to ground-side players — boss-encounter dual-role even without a formal boss (exploration danger = the supplier side)
- from: sky whale loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: "seed a coin drop" is an NPC coin faucet pattern — coins should be player-minted from processed metals, not discovered in loot; bare sell-link
- REWORK: dossier 2nd-anchor candidate flags M-09 (luxury good → coin) — M-09 is retired; the correct reframe is M-34 (combat-route supply, accepted above).

## ohthetreesyoullgrow   [anchors: support/library (1)]
- LEAVE — genuine zero-content library (0 blocks, 0 items, no loot); a worldgen-framework dependency for Oh The Biomes You'll Go trees; nothing to weave.

## create_hypertube   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already anchors Create (kinetic-powered) + aeronautics/logistics (player/entity fast transport). The dossier rightly notes no coherent further pillar: forcing magic or survival onto a tube-transport system would be arbitrary.
- REWORK check: the dossier candidate floats "no coherent further weave — leave," which is correct. Confirming: the loot=yes flag is presumably incidental (a structure or guide book), not a meaningful loot surface — no loot-seed candidate identified.

## bigsignwriter   [anchors: support/client UI (1)]
- LEAVE — zero-content client UI library (0 blocks, 0 items, no loot); sign-text utility; no material surface to route.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — zero-content client QoL (0 blocks, 0 items, no loot); keybind ping markers; no material surface to route.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create-machined artillery (create:cutting + CBC assembly pipeline) + Aeronautics ship armament. Already two robust anchors.
- from: heavy autocannon / rocket tier | via: recipe gate (KubeJS) | to: survival/economy | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: mounting a Heavy Autocannon or Rocket Pod on a ship requires a boss-drop key component — the toughest ship weapons need the most dangerous encounters to unlock; scales depth with power appropriately
- from: heavy autocannon / rocket tier | via: recipe gate (KubeJS) | to: survival/economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: rocket assembly components are cheaper/faster via a MineColonies Blacksmith or Fletcher, pushing players toward colony investment to arm their fleet
- from: AP munitions / rocket fuzes | via: combat-loop | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: a combat-specialist maintains the ship's magazine and trades loaded munitions to players who build ships but don't want to run the CBC munition assembly chain
- from: rocket pod recipe | via: create:mechanical_crafting | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: cbc_at already uses create:cutting + CBC assembly natively; adding mechanical_crafting on top is a redundant extra step with no thematic gain — the mod's own assembly pipeline IS its native gating mechanism, not a missing link

## quark   [anchors: support/decoration (1)]
- from: quark decorative blocks (vertical slabs, polished/brick variants, crate blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's crusher recycles Quark's extra decorative variants back to raw stone/gravel + an XP nugget — the deco palette feeds the tech spine's ore-prep loop at no extra cost
- from: quark:apple_crate / potato_crate / gunpowder_crate (storage blocks) | via: create:compacting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Quark's crate blocks are already 9:1 crafting-table compressions of vanilla crops/materials; adding a create:compacting step just duplicates that compression with a machine tax — no meaningful new connection, and it would gate a basic convenience block behind a machine (violates "never gate a basic component behind a complex recipe")
- from: quark ancient wood / Glimmering Weald blocks | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Quark's wood sets already have vanilla sawing equivalents; routing through create:cutting is marginally useful but adds no systemic connection — the mod is a decoration/QoL anchor, not a resource provider, so no second pillar is forced

## sliceanddice   [anchors: Create, survival (2)]
- OK — connections sound. Slice and Dice IS the M-12 processing-chain bridge by design (Slicer runs FD cutting; FD cooking = heated mixing). No forced third pillar needed; it is the connective tissue, not a mod that needs connecting.

## createpickywheels   [anchors: Create (1)]
- from: biome-gated water-wheel power | via: config / behavioral patch | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: early Create power requires a River biome placement — the world's geography dictates where industry can take root, not the other way around; the same regional-scarcity logic that gates ores gates power sources
- from: biome-gated windmill power | via: config / behavioral patch | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: windmill placement is locked to Overworld biomes with open air circulation — weather systems and biome choice constrain the energy grid, making wind power a geographic specialization
- NOTE: these two are config-behavioral, not recipe weaves — the delivery is "keep the mod in with its default biome config" (the behavioral gate already exists). The motif M-30 (regional-scarcity gate) applies because the machine's function is gated on regional world conditions; that's the same logic as ore-gen scarcity. No Phase-3 recipe authoring needed — it's a design-configuration call.
- from: biome-gated generators | via: config | to: survival | motif: M-37 | power: everyday | tone: clash | verdict: REJECT | reason: M-37 is research/knowledge gate — this is a placement gate, not a knowledge unlock; wrong motif, already handled by M-30 above

## chat_heads   [anchors: support/client QoL (1)]
- LEAVE — zero-content client-side UI mod (0 blocks, 0 items, no loot); chat-head textures; nothing to route material through.

## cubes_without_borders   [anchors: support/client QoL (1)]
- LEAVE — zero-content client display mod (0 blocks, 0 items, no loot); borderless fullscreen option only; nothing to route.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: galleon / fortress loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: naval dungeon raiders are the pack's maritime combat specialists — they sell the nautical rarities harvested from galleons to landlocked players; ocean danger drives supply
- from: galleon / fortress loot tables | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a rare nautical chart or "captain's compass" item into galleon loot that serves as a region-unlock key for an aeronautics or high-tier recipe — reaching the ocean structure rewards ship-builders
- from: galleon loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: minting coin from loot is the retired NPC-faucet pattern — player-minted coin comes from processed metals, not chest drops; bare coin seed is M-09 territory (retired)
- from: dungeon hostiles / pirate crew | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pirate crew / cursed sailors drop a unique nautical essence or cursed gem used as a magic reagent (mob-drop reagent sink — the organic↔magic link that prevents the dungeon being a purely loot-dump with no system connection)

## create_compressed   [anchors: Create (1)]
- LEAVE — Create-internal storage QoL (compresses Create's own intermediates: crushed ores, sheets, flour, cogs). It consumes only Create-native items, uses Create methods internally, and introduces no foreign material. A forced 2nd anchor would be a synthetic edge. Already grounded in the Create pillar; treat as Create-internal support.

## blockui   [anchors: support/library (1)]
- LEAVE — genuine zero-content UI API library (0 blocks, 0 items, no loot); XML GUI framework for MineColonies; nothing to weave.

## ding   [anchors: support/client QoL (1)]
- LEAVE — zero-content client audio cue (0 blocks, 0 items, no loot); load-complete sound; nothing to route.

## galosphere   [anchors: survival (1)]
- from: galosphere:allurite_shard / lumiere_shard | via: ars_nouveau:imbuement (and host magic methods) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: allurite and lumiere shards from Crystal Canyon caves gate attunement conversions — scarce cave minerals prevent free-arbitrage of magic transformations (already partially established in 33/80/97, confirming this is the real second anchor)
- from: galosphere:silver_ingot (=palladium) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: palladium ore runs through Create's crusher for ore-doubling (the standard tech-spine bonus) — the scarce cave metal earns its place on the Create belt line
- from: palladium (processed via Create) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined palladium is a regional coin metal — a player who controls Crystal Canyon geography controls the palladium mint; minting is the specialization, not a vendor sale
- from: galosphere:preserved_transform_recipe (amber transform) | via: galosphere:preserved_transform_recipe | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber-preserved transforms take foreign materials (mob drops, botanical items) into preserved reagents used in magic infusions — the crystal preservation mechanic becomes an arcane refinement step
- from: galosphere deco bricks (allurite bricks, amethyst bricks, pink salt blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Galosphere's cave-crystal masonry crushes back to raw mineral + XP nugget — decorative cave-quarrying feeds the Create recycling loop
- from: palladium as a coin metal | via: regional ore-gen | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystal Canyon biomes generate in distinct regions — the palladium mint is geography-locked, so controlling or trading that region is an emergent economy pressure
- REWORK: dossier's "economy via Numismatics — M-09 luxury-good→coin" entry references the retired M-09; the correct reframe is M-08 (player-minted from processed regional metal), accepted above.
- REWORK: dossier lists anchors as survival (1) only; with M-07 established in existing scripts (33/80/97), the real anchor count should already be survival + magic (2). Confirm anchor count reflects authored weaves, not just candidates.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: M-17 is for charging a tool/focus/reagent with FE; the proposed link is powering the smokeleaf machines FROM Create kinetics, not charging a smokeleaf output — wrong direction for M-17; the actual FE↔kinetic bridge needs M-05 framing
- from: smokeleafindustries machines (grinder/extractor/liquifier) | via: createaddition FE↔kinetic (config/compat) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: smokeleaf machines run on FE — wiring Create Addition's kinetic-to-FE alternator into the smokeleaf factory means the Create rotational network powers the strain-processing chain; the tech farm joins the Create spine instead of being an isolated island
- from: raw hemp harvest | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: dry hemp flowers run through Create's millstone as an alternate first-processing step (instead of the manual grinder), giving the farming output a place on the Create belt from harvest to extract
- from: smokeleafindustries refined extracts / gummies / joints | via: consumption (effect items) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: strain gummies and joints are consumed for effects — they're durability/health-adjacent consumables that create repeating demand (a player can't stockpile "one dose," effects must be re-applied), closing the production loop back to survival pressure
- from: smokeleafindustries refined extracts / gummies | via: colony supply / MineColonies provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony apothecary or healer hut requests effect consumables (extracts/gummies) as a supply item, making the strain farm a supplier to the colony economy — the farm earns its keep by feeding colony demand, not just player recreation
- from: smokeleafindustries extracts / gummies | via: numismatics (bare sell link) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — "refined extracts are sellable" is the ambient endpoint, not a weave; the real demand-gate is M-28 (colony) accepted above
- from: smokeleafindustries products | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — Ars Nouveau's crystalline-arcane aesthetic doesn't naturally absorb hemp extracts; the "herb → arcane" bridge would feel grafted without a clear lore hook; no established precedent in the pack for botanical extracts as arcane inputs
- REWORK: dossier 2nd-anchor candidate "economy via Numismatics — M-09" references the retired motif; the correct demand-gate is M-28 (colony, accepted above). Flag for dossier update.

## copycats   [anchors: Create (2)]
- OK — connections sound. Already anchored Create (zinc-built, Create-dependent; extends the Create build vocabulary). The dossier rightly finds no coherent second pillar — the mod IS a Create decoration extension, not a resource producer.
- NOTE: the dossier marks it "2 anchors" with the second being architectural (Create-dependent deco); there's no literal second named system. Confirming: the Create anchor is solid; a forced survival/magic/economy pillar would be synthetic.

## create_train_parts   [anchors: aeronautics (1)]
- from: brass/copper train steps + sliding windows | via: create:pressing (sheets → components) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: train-detailing blocks (brass steps, copper windows) are assembled via a deployer applying pressed brass/copper sheet onto a blank frame — a light deploy-application link that makes the train parts consume Create-processed sheet metal rather than vanilla crafting table; depth fits an everyday decorative component
- from: brass sliding window / train step | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: redundant with the deploy-application ACCEPT above — two delivery mechanisms for the same M-20 link adds no additional systemic value; keep the cleaner one (pressing → the assembled block, not item_application as a separate step)

## extradelight   [anchors: survival, Create (2)]
- OK — connections sound. Already at two anchors (survival + Create via create:mixing inbound). The dossier's candidates for deepening are sound; evaluating them:
- from: grain / coffee / sugar crops | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flour, ground coffee, powdered sugar — the Extradelight kitchen's dry-ingredient step runs through Create's millstone so the bakery and café chains flow off the same belt that processes ore; Create is the kitchen's upstream grinder
- from: Evaporator / Vat fluid outputs (syrups, salts, reduced stocks) | via: create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: concentrated fluids from the Extradelight Evaporator become inputs for Create mixing recipes (e.g. salt brine → preserving fluid, syrup → adhesive); the reduction chain feeds the tech spine's fluid-processing line
- from: feasts / high-tier cooked meals | via: minecolonies hut provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies restaurant/tavern huts request feast dishes and complex meals as provisioning supplies — cooking effort becomes colony fuel, and the cook specialist role is unlocked by supplying the colony's food tier; cooking earns its economy anchor through colony demand, not vendor sales
- from: dried herbs / spices (drying rack outputs) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — dried kitchen herbs as arcane reagents feels forced; the magic pillar has its own reagent system (source gems, galosphere shards, boss drops) and importing culinary spices as magic inputs dilutes both mod identities with no clear in-world logic
- from: extradelight feasts | via: consumption (food items) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: food-demand is the ambient use of food (the briefing notes motif M-27 was considered and rejected as "diet-demand"); feasts being eaten is the loop endpoint, not a weave — the demand is implicit in player survival, not a designed gate
- from: extradelight:coffee (crop) | via: seasonal gate | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: citrus / coffee crops grow only in warm-season windows (Serene Seasons summer/spring) — the seasonal gate makes ground coffee a scarce seasonal input that drives demand spikes and cross-player trade; aligns with the briefing's note that seasonal gates are a priority lever

== CHUNK COMPLETE ==
