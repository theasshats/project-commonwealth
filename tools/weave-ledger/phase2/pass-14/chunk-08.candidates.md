# Phase 2 candidates — chunk-08

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (iron/basalt/cathedral/acorn/bastion) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player deconstructs a metal fence back to iron nuggets and scrap on the crushing wheels — the lossy recycle loop makes overbought material recoverable.
- from: mcwfences wood/stone fence variants (bulk) | via: recipe (create:cutting) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:cutting targets logs→planks/wood processing; adding 180 fence-cut recipes via cutting would bloat the saw recipe list with trivially-cheap deco pieces — the dossier itself flags "only weave the metal variants as part of a wholesale deco-family pass." The wood/stone variants have vanilla crafting and no cross-pillar hook beyond padding. Save for a consolidated deco-family cutting pass only.
- REWORK: none existing (1-pillar, first weave proposed here)

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese aged cheeses (cheddar/brie/gouda/etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wedge of properly matured Gouda takes real time and dairy automation to produce — exactly the luxury good that commands a coin price on the player market.
- from: create_cheese:cheese_curds | via: recipe (ars_nouveau:imbuement or occultism:spirit_fire) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: ritual-purified dairy feels tonally wrong — cheese is firmly artisanal/food, not an arcane reagent; the pairing would confuse players and dilute both systems.
- from: create_cheese:calendar_page_tier_3 (the 900-tick maturing gate) | via: recipe (create:sequenced_assembly) | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: calendar pages are purely a time-gate mechanism for the Cellar, not a crafted item the player builds through sequenced assembly — using M-06 here is a mis-application of the motif. The time-gate IS the depth; no recipe chain needed.
- OK — existing Create+survival connections are sound (maturing chain is a genuine two-pillar bridge). M-09 economy is the right third pillar to add.

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — genuine zero-content client animation library: 0 items, 0 blocks, loot=no, no recipe types. Nothing to route through any method.

## occultism   [anchors: magic (1)]
- from: occultism:iesnium_ingot (rare otherworld ore) | via: recipe (create:crushing) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing iesnium ore doubles yield — the rare otherworld metal earns a Create-ore-processing bonus, pulling players toward the crushing wheel before smelting.
- from: occultism:silver_ingot (real silver, c:ingots/silver) | via: recipe (create:crushing) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's true silver through crushing wheels yields double — incentivizes Create-processing over vanilla smelting for the pack's real silver ore.
- from: mob/boss drops (afrit/djinni essences, otherworld drops) | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: a summoned spirit-merchant deals otherworld goods for coin — demon labor becomes a logistics arm of the player economy.
- from: foreign mob drops (any c:tag mob drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: dropping a common mob trophy into spirit fire transmutes it into a foliot/djinni essence — every fight feeds the ritual supply chain.
- from: occultism:datura (crop) | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: datura's hallucinogenic character fits infusion into an arcane reagent — a natural bridge between Occultism's herbalism and Ars Nouveau's imbuement.
- REWORK: The dossier lists "magic (1)" as sole anchor but occultengineering already bridges rituals to Create. Flag that occultism should be re-anchored as magic+Create (2) once the M-03 crushing weaves above are authored, avoiding double-counting with occultengineering.
- OK — spirit_fire/ritual as foreign-drop sinks, crushing ore-doubling, and spirit_trade economy tie are all thematically coherent and well-motifed.

## structurize   [anchors: support/library (1)]
- LEAVE — genuine zero-content build-engine library: 10 blocks are all internal substitution/tool entities for MineColonies (build-tool, scan-tool, placeholder blocks), not player-facing content blocks. loot=no. No recipe types. Its weave is MineColonies' weave.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear (mechanical drivetrain components) | via: recipe (aeronautics construction recipe) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gear or worm gear is exactly the kind of fabricated mechanical component that should sit inside an Aeronautics engine or control-surface mechanism — the kinetic toolbox feeds the drivetrain supply line.
- from: gnkinetics:industrial_gear / gnkinetics:large_industrial_gear | via: recipe (aeronautics construction recipe) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: industrial-grade gearing is the natural endgame tier for high-torque Aeronautics propulsion — larger, faster ships need harder gears.
- from: gnkinetics gear types (general) | via: recipe (create:mechanical_crafting) | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: gnkinetics parts are already Create-internal; routing them back through mechanical_crafting as an M-06 keystone is circular — it deepens the same pillar they already inhabit without crossing to a second one. Better served by M-24 aeronautics bridge above.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: more_slabs_stairs_and_walls stone/wood cut variants (bulk) | via: recipe (create:cutting) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player loads logs or stone blocks into the mechanical saw to bulk-produce the cut variants for a build — the decoration set becomes an output of the Create automation chain.
- from: more_slabs_stairs_and_walls:*concrete_powder_slab/stairs/wall (gravity variants) | via: recipe (create:mixing) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: concrete-powder variants via mixing is an overly granular edge — Create already handles concrete via compacting/mixing at the base-block level; duplicating this per every powder-slab variant is recipe noise without new cross-pillar meaning.
- from: more_slabs_stairs_and_walls stone cuts (cobble/stone/deepslate family) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing 847 variants back to base material would mean hundreds of crushing recipes for decorative blocks — M-04 is best applied to a targeted metal/deco family pass, not wholesale to every stone cut. Flag for a consolidated pass with mcwfences metal variants.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — genuine zero-content network-fix library: 0 items, 0 blocks, loot=no, no recipe types. Nothing to route.

## txnilib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library: 0 items, 0 blocks, loot=no, no recipe types. Nothing to route.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — near-zero content (1 item: a placeable test dummy with no material outputs). No loot table, no recipe types. Forcing a weave edge onto a combat-test prop would be contrived; the dossier correctly notes its value is measuring hits, not a material chain.

== CHUNK COMPLETE ==
