# Phase 2 candidates — chunk-14

## ctov   [anchors: survival (1)]
- LEAVE — zero registered items/blocks; content is vanilla-loot structures. The loot tables are a curation knob (seed other mods' items into village chests), but that's a pack decision, not a mod-to-mod weave. No method surface to route through; no 2nd-anchor weave is coherent.
- REWORK: existing anchor (survival) is sound; no existing connections to flag.

## jade   [anchors: support (1)]
- LEAVE — client-only HUD overlay; no items, no methods, no loot. Pure informational display. Zero content surface.

## modelfix   [anchors: support (1)]
- LEAVE — client rendering bugfix; no items, no methods. Genuine zero-content library.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: loot tables (Create-themed structure chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a player cracking open an abandoned Create foundry finds a pressed brass coin — seeding Numismatics coin into these ruins makes the structures an early mint-supply node without any NPC faucet; the player who finds it brings coins into circulation.
- from: loot tables (Create-themed structure chests) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an Ars source gem fragment or Iron's arcane essence buried in a Create ruin gives magic players a reason to explore Create structures — an organic pull connecting the exploration loop to the magic system.
- from: loot tables | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already the 2nd anchor (exploration); seeding basic food/armour into loot is just normal structure content, not a demand-gating economy link. No new pillar added.
- OK — existing connections sound (Create + survival worldgen).

## towntalk   [anchors: support (1)]
- LEAVE — audio-only flavor mod for MineColonies; no items, no methods, no loot. Genuine zero-surface add-on.

## rechiseledcreate   [anchors: Create, decoration (2)]
- from: chiseled Create stone/window variants (rechiseledcreate blocks) | via: recipe (crafting table) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player furnishing an airship hull or cabin uses the Mechanical Chisel to run Create andesite/asurine blocks into polished cut-stone panels for the interior — the Mechanical Chisel on-contraption becomes a ship-fitting station, tying deco production to the aeronautics build arc.
- from: chiseled Create stone/window variants | via: recipe | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: "sellable deco blocks" is the ambient endpoint (M-09 retired); deco as a cross-route dependency would require another production route to need rechiseled variants as a recipe *input*, and no such natural demand gate exists here — forced.
- OK — existing connections sound (Create + decoration palette).

## particlerain   [anchors: support (1)]
- LEAVE — client-side weather/particle renderer; no items, no methods, no loot. Genuine zero-surface.

## azurelib   [anchors: support (1)]
- LEAVE — animation-engine library; the sole item (lightblock) is internal. Zero weave surface.

## betterclouds   [anchors: support (1)]
- LEAVE — volumetric cloud renderer; no items, no methods. Zero weave surface.

## pingwheel   [anchors: support (1)]
- LEAVE — multiplayer ping-marker QoL; no items, no methods. Zero weave surface.

## aeronautics   [anchors: aeronautics, Create (2)]
- from: levitite blend (aeronautics:levitite_blend) | via: create:mixing (zinc nugget + end_stone_powder + water) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: zinc is regionally scarce and levitite blend is the lift-material every builder needs — a zinc-rich region becomes the server's designated lift supplier; that scarcity alone routes trade without any NPC.
- from: hot-air (adjustable) burner | via: config-tie (extend fuel tag to tfmg:diesel/gasoline) | to: Create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: a burner that runs on TFMG diesel gives the fuel-production specialist a direct customer — the airship fleet's buoyancy layer depends on the refinery output.
- from: levitite blend in-world crystallization step | via: KubeJS event gating | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: requiring an Ars source gem or occultism spirit adjacent to catalyze blend → levitite makes the crystallization an arcane step — magic players become the enablers of lift production, not just bystanders.
- from: rope coupling / docking connector (simulated:rope_coupling) | via: config/structure-tie | to: economy | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: this is a config/flavor observation, not an authorable method-pull — rope+dock doesn't gate demand or require a recipe; it's just "airships exist, so logistics exists." The demand is already ambient. No delivery mechanism to specify.
- from: dyeable tires / colored levitite | via: recipe (dye + base part) | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: color variants are cosmetic; "sellable paint job" is the ambient endpoint (M-09 retired). A cross-route dependency would need another mod's recipe to *require* a specific colored levitite as an input — no such gate exists.
- REWORK: the dossier proposes M-09 sell links ("dyeable tires → economy: dyed variants as cosmetic NPC trade goods [M-09]") which is explicitly retired — flag for removal from dossier 2nd-anchor notes. Also the borehead-bearing → economy chain via M-08 is mint-adjacent flavor, not a demand gate; reject unless Create ore-doubling (M-03) is chained through.
- OK — Create dependency (zinc/brass/gyro/sequenced-assembly) is sound as a de-facto 2nd anchor. M-13 fuel is the strongest existing inbound motif direction.

## cmparallelpipes   [anchors: Create (1)]
- from: pipe_wrench (fluid-network control tool) | via: recipe | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the wrench already lives in Create and is crafted via vanilla; gating it behind a deeper Create recipe would gate a QoL tool — violates "never gate basics behind complex recipes." M-05 is for flagship items, not QoL utilities.
- LEAVE — a Create plumbing QoL tool with no natural second-pillar surface; forcing a weave would be arbitrary.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — config-screen library; no items, no methods. Genuine zero-surface.

## bagus_lib   [anchors: support (1)]
- LEAVE — code library for author's mod suite; no content. Genuine zero-surface.

## beachparty   [anchors: survival (1)]
- from: coconut (beachparty:coconut / coconut_open) | via: create:milling or extradelight:juicer | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a coconut run through the Create Mill yields coconut shreds/flour as a baking intermediate; the beach biome's signature crop feeds the Create-automated food chain — a natural processing-chain pull.
- from: cocktails (cocoa_cocktail / honey_cocktail / melon_cocktail) | via: beachparty:palm_bar_mixing | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: cocktails grant temporary status buffs (haste/strength) that players consume during construction or combat, creating continuous repeating demand — a tropical drink specialist supplies the airship crew and colony workers.
- from: mini_fridge ice output (beachparty:mini_fridge_freezing) | via: mini_fridge → Create filling/mixing | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: the fridge makes packed ice as a byproduct/output; but Create's cooling recipes already have better ice sources (vanilla Powder Snow, direct), and the fridge is a manual block not easily integrated into a contraption as a method input. Byproduct is too thin to anchor a second pillar.
- from: beachparty loot tables (structure loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: beachparty has biome-modifiers (3) and loot=yes, but the loot is likely beach furniture/food items — seeding coin here is plausible but thin; the real weave is the cocktail consumption loop above. Flagged reject to avoid duplication.
- REWORK: dossier 2nd-anchor note proposes "M-09" sell link for cocktails — M-09 is retired. The consumption (M-26) framing above is the correct replacement.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite (16 color variants) | via: recipe (base levitite + dye) | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: color variants are cosmetic; "another player wants a matching hull" is ambient, not a demand gate via cross-route dependency. M-09 retired; no method-pull exists for colored blocks being a required *input* to another production chain.
- from: dyed tires | via: recipe | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is "deco crushes back to raw" — tires aren't a deco block to recycle; this is a stretch and tonally off (you wouldn't crush tires for scrap in a playful aeronautics mod).
- LEAVE — cosmetic skin layer for Aeronautics; no second-pillar surface. The dye step is vanilla and the output is purely visual.

## entity_texture_features   [anchors: support (1)]
- LEAVE — client texture-feature engine; no items, no methods. Genuine zero-surface library.

## create_central_kitchen   [anchors: Create, survival (2)]
- from: automated feast output (dishes assembled via sequenced assembly / Blaze Stove) | via: recipe gate | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: the automated kitchen outputs finished dishes that workers, colony builders, and ship crews *consume* — steady food-demand from colony huts (M-28 adjacent) means the kitchen operator is a colony supplier; the Create spine feeds the economy's labor demand.
- from: Blaze Stove (blaze-powered cooking accelerator) | via: Create:item_application or recipe | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the Blaze Stove uses a blaze for heat; connecting it to Ars/Iron's would require the blaze to be replaced by a source-gem or arcane catalyst — that would strip the Blaze of its thematic role and create an awkward "magic powers cooking" chain that doesn't advance the loop. Tone: mild clash. Reject.
- from: sequenced-assembly sandwich/burger/pie chain | via: create:sequenced_assembly | to: economy | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: M-37 is a research/knowledge gate (MineColonies research or Ars spell-knowledge unlocks a recipe). create_central_kitchen has no research gating; sequenced assembly is a standard Create method, not a knowledge lock. No motif fit.
- OK — existing connections sound (Create automation + survival/food bridge).

## midnightthoughts   [anchors: survival (1)]
- from: well-rested buff (status effect from sleep) | via: config-tie (Cold Sweat / Serene Seasons interaction) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is "seasonal reagent — a material only obtainable in a season feeds a machine/ritual." A sleep buff is not a material and not season-gated; the motif does not fit. No delivery mechanism for this config tie as a weave.
- LEAVE — a rest/sleep effect system with no items, no methods. The well-rested buff is a survival quality-of-life layer only; no material to route through any method palette entry; no natural second anchor.

## cookingforblockheads   [anchors: survival (1)]
- from: Oven / Fridge / Sink (flagship kitchen appliances) | via: recipe (gate appliances on Create copper/brass sheets or pressed copper) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen — oven that cooks fast, fridge that keeps food, sink with running water — costs real fabricated metal parts; players who want the automated cookbook kitchen need to progress through Create's metalworking first.
- from: cookingforblockheads kitchen multiblock (as downstream food aggregator) | via: colony supply | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies tavern/cook huts can be configured to request food from a connected kitchen; a kitchen operator becomes the colony's designated food supplier — the colony's food demand routes through the kitchen block, gating colony growth on food production capacity.
- from: Toaster (cookingforblockheads:toaster recipe) | via: cookingforblockheads:toaster | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the Toaster is an everyday trivial item (toasts bread → toast); gating it behind Create brass violates the "never gate a basic behind a complex recipe" rule. M-05 applies to flagship machines, not a bread-toaster. Reject; apply M-05 only to the Oven/Fridge/Sink tier.
- REWORK: dossier 2nd-anchor note lists M-05 for appliance gating (sound) but also mentions "economy via numismatics — none strong" — correct, that's retired M-09 logic; no rework needed beyond noting the rejection of the bare sell link.

== CHUNK COMPLETE ==
