# Phase 2 candidates — chunk-04

## puzzleslib   [anchors: support/library (1)]
LEAVE — pure code library (Fuzs registration/config/networking abstraction); 0 items, 0 blocks, no game content surface. Nothing to weave.

## justenoughbreeding   [anchors: support/QoL (1)]
LEAVE — JEI plugin that displays breeding requirements; 0 items, 0 blocks, no material flows. Documents breeding but is not a node in any system loop.

## cold_sweat   [anchors: survival (1)]

- from: cold_sweat:hearth (climate machine) | via: recipe (crafting gate with Create brass fittings) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth's smokestack heat regulation is obviously mechanical — gating its construction on Create brass casing / copper flue components makes it a mid-tier Create craft milestone; players see "survive cold → build Create → unlock permanent climate control."
- from: cold_sweat:boiler (fuel-burning heat emitter) | via: create:filling (pipe lava/steam into boiler as fuel) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create fluid pump feeding the boiler with superheated fluids is a natural industrial upgrade to manual fuel stoking; one light Create step to unlock consistent heat output.
- from: cold_sweat:goat_fur / cold_sweat:chameleon_molt / cold_sweat:hoglin_hide (insulating pelts) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — RED TEAM: thermal insulation is a physical property; arcane infusion adding magic-resistance insulation to pelts feels lore-odd. Survivalist/Ars themes don't naturally overlap. | verdict: REJECT | reason: theme clash — cold resistance is grounded-physical, not arcane; forcing an imbuement step here is arbitrary. Magic has no warmth/cold domain established.
- from: cold_sweat:filled_waterskin (hot/cold water transport) | via: create:filling (automate fill via fluid pipe) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling inbound edge already exists per dossier digest — this is already woven. Not a new link.
- from: cold_sweat insulated armor set (chameleon/hoglin/fur) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Any survival armor can be sold; this adds no structural loop closure.

REWORK: cold_sweat has only survival anchor (1). The two ACCEPT links above (M-05 hearth gate + M-05 boiler Create-pipe) would each add create anchor → 3 anchors total. Check that the Hearth gating isn't over-costed against the "basics ≈3×" rule — Hearth is a mid-tier unlock, so brass fittings (a mid-Create step) is correctly matched.

## everycomp   [anchors: support/decoration (1)]
LEAVE — runtime block/recipe generator; its content lives under host-mod namespaces. Any weaving belongs on those host mods (Macaw's, Create wood shapes), not here. 0 items in everycomp namespace to route.

## lootjs   [anchors: support/packdev tooling (1)]
LEAVE — KubeJS scripting library for loot-table rewriting; no items, no materials, no methods of its own. It is the enabler of M-02 mob-drop weaves elsewhere (used by packdevs to inject drops), not a weave target.

## chat_heads   [anchors: support/client QoL (1)]
LEAVE — client-side chat UI overlay; renders player heads next to messages. 0 items/blocks, no material surface, no weave possible.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj:blahaj variants (plush blocks, 31 items) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash — RED TEAM: crushing a beloved plush toy for scrap wool is tonally hostile to its "wholesome cozy" identity; players who place a pride-flag shark would reasonably find this upsetting. | verdict: REJECT | reason: tone clash — M-04 lossy recycle works on deco blocks; here it contradicts the mod's explicit emotional identity. Forcing a Create edge is the failure mode the briefing names.
- from: just_blahaj:glowhaj (glow variant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — glowhaj is a cosmetic deco prop; treating it as a magic input trivializes both mods. | verdict: REJECT | reason: tone clash + no-motif fit (M-10 is for refining foreign materials into reagents; a plush shark is not a material, it's a decoration).

LEAVE — pure flavor/decoration. No coherent 2nd anchor without forcing an edge that either trivializes the mod's identity or is arbitrary. Both candidates cleanly rejected.

## ohthetreesyoullgrow   [anchors: support/worldgen (1)]
LEAVE — worldgen/sapling growth library; 0 items, 0 blocks. Its purpose is enabling other mods' trees; nothing to weave here.

## durabilitytooltip   [anchors: support/client QoL (1)]
LEAVE — client tooltip overlay showing numeric durability; no items, no mechanics, no weave surface.

## kambrik   [anchors: library/API (1)]
LEAVE — Kotlin dev-framework library (registration DSL, command helpers); 0 items, no gameplay surface.

## ars_nouveau   [anchors: magic (1)]

- from: ars_nouveau:source_gem (magic currency hub) | via: ars_nouveau:imbuement | to: magic (internal) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Foreign essences (iron's arcane_essence, occultism spirit outputs) all mint through imbuement into source_gem — this IS the magic-web spine, already designed and reserved; recording explicitly as the core established link.
- from: any farm/mob surplus (crops growing, mobs dying in radius of Agronomic/Vitalic Sourcelink) | via: ars_nouveau sourcelink native mechanic (passive Source drain) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running a farm or mob-farm next to an Agronomic/Vitalic Sourcelink naturally powers the magic system from survival's surplus — the organic→magic drain is direct and thematically seamless ("life feeds the arcane").
- from: ars_nouveau:archwood_log | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood is a magical wood but physically still wood — a crushing wheel producing archwood pulp/planks-fragments fits M-04 deco-recycle; a small Create step that pulls the magic biome's timber into the industrial chain.
- from: ars_nouveau:source_gem | via: create_new_age:energising | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Charging a source_gem in an electric energising station threads Ars magic currency into the Create electric tier — a natural bridge where magic power and FE/Create power share an interface. (M-17 "only when it makes sense" — a magic currency with stored energy being chargeable is coherent.)
- from: ars_nouveau:drygmy_charm (automated mob-drop harvester) | via: occultism:spirit_trade / miner | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Drygmy (Ars) and Occultism spirit-traders are both magic-logistics nodes; routing specific scarce mob drops through spirit_trade to complement Drygmy's output gives the magic pillar an acquisition route for hard-to-farm materials.
- from: ars_nouveau spell glyph (e.g. a crafted glyph tablet) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals consuming an Ars glyph tablet to summon or transmute — both are scholarly arcane mods and ritual-vs-glyph interplay is thematically tight; magic→magic depth via two distinct systems' methods.
- from: ars_nouveau:source_gem → numismatics sell | to: economy | motif: M-09 | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Source gems are obviously tradeable; sellability alone is not a distinctive weave.
- from: ars_nouveau:worn_notebook (spellbook) | via: numismatics bounty | to: economy | motif: M-14 | verdict: REJECT | reason: generic-sellable, non-distinctive — a spellbook as bounty output is trivially an economy link; doesn't close a structural loop.

OK — existing magic anchor is sound (M-01 spine is the established design). The five ACCEPTs above extend it to survival (M-02), Create×2 (M-04, M-17), and magic-internal depth (M-18, M-11), bringing ars_nouveau to ≥3 anchors.

## jeresources   [anchors: support/client UI (1)]
LEAVE — JEI addon for mob-drop/worldgen/dungeon-loot display; 0 items, no material flows. Documentation layer only; its value to the scarcity design is transparency, not a weave node.

## create_central_kitchen   [anchors: Create, survival (2)]
OK — connections sound. Already 2 anchors (Create + survival) via its core purpose (automates FarmersDelight et al. through Create Packager/Arms). The Blaze Stove is a Create→survival mid-tier bridge. Economy (M-09 luxury dish sell) is noted in dossier as a weak optional; flagged here:

- from: create_central_kitchen finished dishes / feast outputs | via: numismatics sell | to: economy | motif: M-09 | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Automated food is obviously sellable; not a structural sink.

No new distinctive anchors found. Two-anchor status is solid; no REWORK needed.

## modernfix   [anchors: support/performance (1)]
LEAVE — JVM/loader-level perf patches; 0 items, 0 content surface. No weave possible or appropriate.

## ding   [anchors: support/client QoL (1)]
LEAVE — client audio cue on load completion; no items, no mechanics, no weave surface.

## cloth_config   [anchors: support/library (1)]
LEAVE — config-screen API library; no items, no gameplay surface. Dependency infrastructure.

## entity_texture_features   [anchors: support/client rendering (1)]
LEAVE — client texture engine for OptiFine-format random/emissive mob textures; no game content, no weave surface.

## buildguide   [anchors: support/QoL (1)]
LEAVE — client build-assist overlay (shape outlines); no items, no mechanics. Build aide has no system-loop surface.

## create_factory   [anchors: Create, survival (2)]
OK — connections sound. Already 2 anchors (Create + survival) through dessert-food chain expressed via Create mixing/pressing/filling. Jam/cream/nectar fluids as intermediates for other food methods is a solid M-12 embodiment.

- from: create_factory sweet foods (waffles, honey rolls, etc.) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis.
- from: create_factory:cream_bucket / sweet_berries_jam fluid | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — RED TEAM: berry jam or cream as a magic imbuement ingredient is arbitrary; no thematic connection between confectionery fluids and arcane infusion. | verdict: REJECT | reason: theme clash — confectionery fluids have no arcane thematic coherence; would feel random to players.
- from: create_factory honey/nectar fluids | via: ars_nouveau Agronomic Sourcelink (crop growth → Source) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: A bee farm / crop farm producing honey that feeds into the confectionery chain also sits in radius of an Agronomic Sourcelink — the same organic surplus that makes nectar also charges the magic system; survival surplus → Create confectionery + magic simultaneously.

New link: create_factory gains a soft magic anchor (M-02 via the shared organic-surplus → Sourcelink pathway). This is delivered via config/design note rather than a recipe — the Sourcelink proximity mechanic naturally picks up any crop growth; no recipe needed, just a pack design note to co-locate the farm.

## ponderjs   [anchors: support/Create tooling (1)]
LEAVE — KubeJS scripting API for authoring Create Ponder scenes; no items, no materials. Documents the Create spine (its value is player-facing onboarding for custom recipes), not a weave target itself.

== CHUNK COMPLETE ==
