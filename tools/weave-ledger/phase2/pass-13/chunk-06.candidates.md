# Phase 2 candidates — chunk-06

## almostunified   [anchors: support (1)]
- LEAVE — pure recipe-graph plumbing; no items, no content surface. It is the tool that enables cohesion, not a node to weave. ⚠ GOTCHA retained: never map galosphere:*silver* → c:ingots/silver (that material is palladium per CLAUDE.md).

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — client-side model/animation replacements only; zero items, zero blocks, zero gameplay surface. Nothing to weave.

## more_slabs_stairs_and_walls   [anchors: decoration/support (1)]
- from: stone/wood cut variants (847 blocks) | via: create:cutting | to: Create | motif: M-04 (recycles deco via Create saw) | power: everyday | tone: ok | verdict: ACCEPT | hook: a player building on an airship or colony wants bulk stone cuts — of course the saw produces them automatically
- from: gravity-block cuts (concrete-powder/sand/gravel slabs) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for recycling *back* to raw material; crushing the gravity-cuts back to sand/gravel is valid but marginal — adds no real cross-pillar depth since the vanilla block already exists; low value, not worth authoring

## formations   [anchors: survival (1)]
- LEAVE — pure worldgen scatter-structure mod; no registered blocks or items of its own. The only item is a template_editor authoring tool, not a player-gated material. Forced recipe edges on "scattered ruins" would be incoherent — any loot-table weaves belong to whatever blocks the structures contain, not to Formations itself.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / bulk ammo casings | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced ammo is the consumable output of an arms-factory specialization — selling rounds for coin is exactly the kind of niche trade the emergent economy is built around
- from: createimmersivetacz:nitropowder_bucket (fluid) | via: tfmg:coking or tfmg:distillation (TFMG refinery) | to: Create (depth) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: nitropowder is a refined propellant — routing it through TFMG's industrial refinery (distillation/coking column) before it hits the ammo line reads as natural industrial chemistry and ties the gun factory to the TFMG processing spine
- from: createimmersivetacz:gun_barrel / firing_mechanism | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: this is already how the mod works — it already uses create:sequenced_assembly per dossier; not a new weave, already authored by the mod itself
- from: createimmersivetacz:primer | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: imbuing a gunpowder primer with arcane energy has no thematic grounding — primers are industrial chemistry, not arcane components; tone clash

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics is the economy hub; the weaving direction is always foreign goods → numismatics vendor/price (M-08/M-09). No outgoing edge needed.
- REWORK: none identified. The two pillars (economy + Create) are structural — Create dependency is native, economy anchor is the mod's purpose.

## platform   [anchors: support/library (1)]
- LEAVE — pure code library (0 blocks, 0 items, 1 biome-modifier that is framework infrastructure). No player-facing content surface whatsoever.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux:oak_plow / reaper / seed_drill (iron-tipped implements) | via: create:pressing (iron plates as craft input for the metal blade/blade frame) | to: Create | motif: M-05 (native-method gating — require Create-processed iron sheets as ingredient) | power: everyday | tone: ok | verdict: ACCEPT | hook: a plow blade needs a pressed iron sheet — the cart upgrade is a one-light-step Create tie-in that makes early farm tools cost the tech spine's first metal product without over-gating basic transport
- from: astikorcartsredux reaper crop harvest output (bulk crops) | via: numismatics vendor (sell bulk crops for coin) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a draft-animal reaper can harvest a whole field in seconds — selling that surplus is the agrarian player's trade good, making the cart a legitimate economy node
- from: astikorcartsredux:oak_supply_cart (hauling) | via: create:mechanical_crafting (brass fittings upgrade) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: supply cart is purely vanilla-wood tier; requiring mechanical_crafting for a basic hauling cart over-gates transport flavor content that should remain low-tech; depth must scale with power and a cart is everyday-tier

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (as a keystone input in an ice-themed endgame Create recipe, e.g. a cryogenic compressor or refrigeration unit) | to: Create | motif: M-15 (boss-key unlock) | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's ice crystal is the only source of extreme cold — gating a cryogenic Create machine behind it fits the "Create tech unlocks via boss drops" design note perfectly
- from: mowziesmobs:earthrend_gauntlet item-drop material (wrought-metal component) | via: create:sequenced_assembly (deep multi-stage chain; boss-key gate for a heavy forging/press machine) | to: Create | motif: M-06 (sequenced-assembly keystone) | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's artifact is forged metal at its apex — seeding it into the deepest Create pressing chain is exactly the boss-key-to-tech-unlock the pack's DESIGN doc describes
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement (attune the crystal into an arcane cold-essence reagent) | to: magic | motif: M-10 (arcane infusion pull) | power: endgame | tone: ok | verdict: ACCEPT | hook: crystallized Frostmaw cold is a natural arcane catalyst — imbuing it for a cold/frost spell effect is thematically obvious
- from: mowziesmobs boss drops (sol_visage, ice_crystal) | via: numismatics vendor (sell rare drops for bounty coin) | to: economy | motif: M-14 (bounty→drop economy, provisional) | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional (leans no); and selling endgame artifacts for coin cheapens them as gating reagents — the boss-key role (M-15) is more valuable than a coin payout. Better to keep these items rare and gated.
- from: mowziesmobs:captured_grottol (rare ore-eating mob — drops diamonds) | via: occultism:spirit_fire | to: magic | motif: M-11 (ritual/transmutation sink) | power: mid | tone: ok | verdict: ACCEPT | hook: a captured Grottol that eats ores is a living transmutation engine — burning it in spirit fire to yield a concentrated essence feels like a natural ritual sink for such a strange creature

## create_connected   [anchors: Create (1)]
- from: create_connected:copycat_* family (slab/block/stairs/fence/beam) | via: create:item_application (apply a foreign block as "skin" material onto a copycat base) | to: Create (depth) | motif: M-20 (deploy-application upgrade) | power: everyday | tone: ok | verdict: REJECT | reason: this is already the vanilla mechanic of the copycat block — you right-click it with any block to skin it; the mod already implements this as item_application in its own recipe list (dossier: made-by includes create:item_application). Not a new weave, already authored.
- from: create_connected:kinetic_battery | via: createaddition:charging (charge the battery from a FE source) | to: Create↔magic/tech | motif: M-17 (electric/FE charging bridge) | power: mid | tone: ok | verdict: ACCEPT | hook: a kinetic battery that stores rotational energy and can be topped off from an electric source is the natural bridge between the Create electricity tier (New Age/Create Addition) and the kinetic spine — players who run FE generators should be able to charge a battery and release it as rotation
- from: create_connected:fan_*_catalyst blocks (blasting/haunting/splashing/etc.) | via: create:haunting (the haunting catalyst feeds the soul-fire seam) | to: magic | motif: M-19 (soul/haunting seam) | power: everyday | tone: ok | verdict: REJECT | reason: the fan_haunting_catalyst IS the Create haunting mechanic made portable — it's already an internal Create tool; no new cross-pillar link exists here, it's intra-Create
- from: create_connected:item_silo / inventory_bridge (bulk storage + logistics) | via: numismatics depositor integration (automate a shop that pays from a silo-fed vendor) | to: economy | motif: M-08/M-09 | power: mid | tone: ok | verdict: REJECT | reason: this is a player-build pattern (silo → hopper → vendor), not a recipe weave; Numismatics already accepts any item through its vendor, so no authoring is needed — the connection is organic, not a designed edge

== CHUNK COMPLETE ==

