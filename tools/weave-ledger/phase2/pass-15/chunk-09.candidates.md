# Phase 2 candidates — chunk-09

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — Pure documentation layer (JER): surfaces existing mob-drop/worldgen/loot data via JEI; zero items, zero loot tables, no processing surface. No content to route through a method.

## citadel   [anchors: support/library (1)]
- LEAVE — Genuine zero-surface library: the jar has 1 block + 5 items but they are all dev/debug tooling (citadel:debug, citadel:effect_item, citadel:fancy_item, citadel:icon_item, citadel:lectern) with no player-facing function and no recipes. Nothing can be coherently routed through a method.

## northstar   [anchors: Create, aeronautics (2)]
- from: northstar:titanium_ingot (c:ingots/titanium) | via: recipe (numismatics mint, create:pressing → ingot → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Titanium is an off-world scarcity metal — processing it into a high-denomination coin creates an interplanetary trade good only the rocketeer can supply.
- from: northstar:tungsten_ingot (c:ingots/tungsten) | via: recipe (numismatics mint, create:pressing → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tungsten from Mars/Moon is a scarcer metal than overworld iron; minting it adds a specialist currency tier for the off-world production chain.
- from: northstar:advanced_circuit | via: recipe (craft/trade → numismatics sell as luxury tech good) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced circuits are the rocketeer's flagship output; selling them to colony/magic specialists for coin closes the economy loop and justifies the circuit-engraver investment.
- from: northstar:biofuel (fluid/bucket) | via: createaddition:liquid_burning or create:filling → fuel line | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Biofuel is already a Northstar output from its processing chain; routing it into Aeronautics engines makes the off-world farm a propulsion supply line — two pillars served in one pass.
- from: northstar:martian_steel_ingot | via: recipe (airframe construction ingredient) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Martian steel is denser than overworld alloys — using it as a structural hull material for large/advanced airships means reaching orbit funds the next ship tier. Already in-theme (space-age alloy for skycraft).
- from: northstar:advanced_circuit | via: recipe (Aeronautics control-surface / navigation upgrade) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Circuits as the brains of precision flight control — autopilot/navigation modules — naturally extends the Northstar tech tier into aeronautics without forcing it.
- REWORK: existing dossier notes economy candidates as [MED]/[WEAK] and marks them "not required." Given that Northstar outputs titanium/tungsten/biofuel/advanced_circuit — all strongly connected to the economy and aeronautics pillars — these should be promoted to STRONG and authored in Phase 3. The "astronomical_reading as trade good" candidate (M-09) is weaker — an unusual item, unclear player demand — keep as LOW.
- OK — Create anchor is well-woven (crushing/pressing/mixing/sequenced_assembly all inbound per dossier). The aeronautics anchor is structural (rockets = off-world transport). New weaves above add economy and deepen aeronautics.

## jeed   [anchors: support/client-UI (1)]
- LEAVE — Pure documentation layer (JEED): the two registered recipe-types (jeed:effect_provider, jeed:potion_provider) are JEI display-only; zero items, zero loot, no processing surface.

## corgilib   [anchors: support/library (1)]
- LEAVE — Genuine zero-surface library: no blocks, no items, no loot tables (loot=no), no registered methods. Pure code dependency for Alex's Caves and similar.

## aeronautics_bundled   [anchors: aeronautics (1)]
- LEAVE — Bundle wrapper jar only: registers zero items/blocks/loot under its own namespace. All actual content (levitite, propeller bearing, envelope, etc.) lives in the `aeronautics` namespace. Weaving belongs on the `aeronautics` dossier; nothing to route here.

## letsdocompat   [anchors: survival (1)]
- LEAVE — Support glue: registers no items or blocks; its only exports are 3 c:tags (incl. items/foods/leafy_green) and cross-mod food recipes. Its purpose is precisely to unify food-web methods across Let's Do / Farm&Charm / Farmer's Delight — it IS the M-12 bridge, not a node that needs one. Forcing a second pillar onto the connector itself (rather than the mods it connects) would be architecturally backward.

## sliceanddice   [anchors: Create, survival (2)]
- from: sliceanddice:sprinkler (fluid distributor — accepts any piped fluid) | via: config or recipe (pipe a magic-aligned fluid — e.g. Ars Nouveau source-infused water, or a Vinery wine — through the Sprinkler to give crops a growth/quality boost) | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic-infused fluid through a Create sprinkler accelerating special crops is a natural "of course" pairing — the irrigation line becomes a ritual delivery mechanism.
- from: sliceanddice:fertilizer_bucket | via: recipe (create:mixing — produce the fertilizer fluid from Farmer's Delight compost + Create-processed mineral dust) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The mod already anchors Create (Slicer is a Create kinetic block, mixing inbound); adding a recipe for fertilizer inside Create mixing doesn't add a new pillar link — it's redundant depth on an already-created connection. No new pillar gained.
- from: sliceanddice products (any FD-sliced output — meats, produce) | via: numismatics sell (processed food as luxury trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Automating a kitchen with Create/Slice&Dice lets a specialist farmer sell prepared cuts at scale — the Create food-line becomes a coin generator, linking the cooking pillar to the economy.
- OK — Create+survival anchor is well-defined (the mod exists to bridge these two). New weaves above add magic (sprinkler fluid) and economy (processed goods).

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies (smokeleafindustries:*_extract, *_gummy — highest-value processed outputs) | via: numismatics sell / trade (luxury consumable → coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The mod already ships a Dealer villager who trades product; mapping premium extracts to Numismatics coin formalizes that loop and makes the strain farm an economy node, not just a flavor island.
- from: smokeleafindustries:generator (burns inputs for FE) | via: createaddition:charging or config (FE↔kinetic bridge via Create Addition) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Routing Create's rotational power into (or out of) the smokeleaf generator places the hemp farm on the same power grid as the Create spine — the machines become a Create-powered industrial line rather than a standalone FE island.
- from: raw hemp / dried buds (smokeleafindustries:hemp, *_bud) | via: create:milling or create:crushing (alternate coarse-grind entry point before the smokeleaf grinder) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Adds a cosmetic alternate path but not a new pillar — smokeleafindustries would still be survival. The M-17 FE bridge above is the stronger, cleaner Create link; a recipe duplication on top is redundant and creates balance noise.
- from: smokeleafindustries:*_extract (concentrated effects) | via: ars_nouveau:imbuement or occultism:ritual (use a potent hemp extract as a consumable catalyst / reagent in a magic ritual for an effect-amplifying spell step) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Tone clash — ars nouveau / occultism reagents are arcane gems and soul-derived materials; inserting a cannabis extract as a magic catalyst reads as a gag, not a coherent lore connection. The fun-stoner vibe of SLI clashes with the serious arcane tone of the magic pillar here.
- from: hemp seeds / strain seeds | via: config (Serene Seasons seasonal availability — some tropical strains season-gated, e.g. only mature in summer) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Locking exotic strains behind a seasonal window (tropical strains need summer warmth) creates a natural scarcity rhythm without new recipes — the farm becomes season-sensitive. Already survival-pillar, but this deepens the survival mechanic and could drive seasonal trade.
- NOTE: M-16 above deepens survival rather than adding a new pillar. Primary second-pillar wins are economy (M-09) and Create (M-17). Three pillars total: survival, economy, Create.

== CHUNK COMPLETE ==
