# Phase 2 candidates — chunk-14

## galosphere   [anchors: survival, magic (2)]

Existing connections: allurite/lumiere shards are established M-07 attunement catalysts (magic); survival via cave-biome worldgen. Both anchors are sound, well-documented, and in use.

REWORK: OK — connections sound. The two existing anchors (survival worldgen + M-07 magic) are coherent and load-bearing. No arbitrary connections to flag.

New candidates via method-pull:

- from: galosphere:silver_ingot (=palladium ingot, c:ingots/palladium) | via: create:crushing → numismatics:mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a scarce, regionally-biased underground metal — crushing it for ore-doubling then minting into coin is exactly the scarcity-to-coin seam the pack wants; distinct from iron/gold, fits M-08's "scarce regional metal → Create-processed → coin"
- from: galosphere:palladium ore (ore-doubling) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: running palladium ore through the Crushing Wheel gives a doubled yield + XP nugget, the standard Create ore-doubling treatment every underground metal earns; coherent and expected
- from: galosphere deco bricks (allurite/lumiere/pink-salt/amethyst brick blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-mined deco bricks crush back to raw mineral/gravel — lossy recycling; the cave biome's deco palette feeds the crusher as scrap, same as any stone deco mod
- from: galosphere:allurite_shard or galosphere:lumiere_shard (as catalyst) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: this is already covered by the RESERVED M-07 attunement catalyst role — the shards gate conversions in 33/80/97 precisely through host magic methods; adding a separate M-10 imbuement edge would double-spend the reagent-ownership rule; reject in favor of existing M-07

## txnilib   [anchors: support (1)]

LEAVE — genuine zero-surface code library; 0 blocks, 0 items, no recipe types. No content to route.

## ichunutil   [anchors: support (1)]

LEAVE — genuine zero-surface shared-class library; 0 blocks, 0 items, no recipe types. No content to route.

## jeed   [anchors: client-only UI / support (1)]

LEAVE — JEI display-only provider; its registered "recipe types" are viewer categories (jeed:effect_provider / jeed:potion_provider), not craftable methods. 0 items, 0 blocks. No material graph. Nothing to route.

## ars_n_spells   [anchors: magic (1)]

The mod is already an internal magic↔magic weave (Ars Nouveau ↔ Iron's Spellbooks mana unification). 0 items, 0 blocks, no recipe types of its own. Its join surface is mana/spell data, not physical materials.

- from: ars_n_spells shared-mana surface | via: ars_nouveau:imbuement (the host method) | to: magic (internal) | motif: M-01 | power: mid | tone: ok | verdict: REJECT | reason: this would be a magic-internal weave within a mod that IS already that weave; M-01 is established but routing THROUGH ars_n_spells adds nothing new that isn't already captured by the Ars↔Iron's bridge itself. No second anchor available without a physical-material surface.

LEAVE — no item/block surface; genuine internal bridge; forcing a 2nd anchor to an external pillar would be arbitrary.

## create_ironworks   [anchors: Create (1)]

Existing candidate confirmed: tin is a fresh Create-processed regional metal; the mod already rides create:mixing/pressing/crushing/sequenced_assembly.

- from: create_ironworks:tin_ingot (c:ingots/tin, regionally scarce via 3 biome-modifiers) | via: create:crushing → numismatics:mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a fresh scarcity metal with its own regional biome-modifier bias — Create-crushing it for ore-doubling then minting into coin closes the scarcity-to-economy seam; a "tinsmith" specialization naturally emerges
- from: create_ironworks:steel_plate (c:plates/steel) | via: aeronautics airframe recipe (structural material) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plate is exactly the fabricated structural material airframes and hulls should cost — heavier ship tiers requiring ironworks steel plates makes airship construction meaningfully expensive and ties the metallurgy tier to the aeronautics supply chain; depth scales with ship tier (don't gate basic frames)
- from: create_ironworks:steel_ingot (c:ingots/steel) | via: aeronautics drivetrain recipe (portable engine component) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the portable engine and heavier propulsion components should cost steel — the drivetrain side of the supply line runs on the best available alloy; ties ironworks steel to aeronautics propulsion depth
- from: create_ironworks:bronze_ingot (c:ingots/bronze) | via: createbigcannons:melting (cannon-grade feedstock) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze is the classic cannon metal; ironworks bronze feeding the CBC foundry's melting recipe is a sensible cross-addon integration — "of course the best bronze source feeds the cannon-casters"
- from: create_ironworks:brass_hammer (3×3 mining tool) | via: survival pressure (mining speed / diet throughput) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the hammer's contribution to survival is passive tool efficiency, not a recipe weave or a system crossing; no motif fits a "tool that mines faster → survival is easier" edge; reject for no-motif

## createaddoncompatibility   [anchors: support (1)]

LEAVE — pure tag-unification/priority glue; 0 items, 0 blocks. Its one authored recipe (tfmg:distillation for plastic) is internal compat, not a new system anchor. No material surface to route elsewhere.

## moonlight   [anchors: support (1)]

LEAVE — developer library/API for MehVahdJukaar mods; 0 meaningful items, no recipe types. The registered spawn_box/placeable_item are internal helpers. No content to route.

## bundle_recipe   [anchors: support (1)]

LEAVE — datapack that re-enables vanilla bundle crafting; 0 own items/blocks, no recipe types. Vanilla leather+string → bundle is a QoL unlock, not a system node. Nothing to route.

## aeronautics   [anchors: aeronautics, Create (2)]

Existing connections: pillar spine (aeronautics) + Create (de-facto, jar-proven via zinc/brass/andesite/sequenced-assembly). Both are sound and jar-grounded.

REWORK: OK — connections sound. The jar-grounding in #179 confirmed the Create dependency is real and pervasive; no arbitrary connections to flag.

New candidates via method-pull (outbound — what the pillar's outputs feed):

- from: aeronautics:levitite_blend (zinc-gated Create:mixing product) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite blend is a bulk manufactured intermediate that every ship-builder needs — a mass-production specialist selling it on the Trading Floor is exactly the kind of economy node the aeronautics supply chain should create; zinc scarcity makes this non-trivial
- from: aeronautics:adjustable_burner (hot-air lift, burns furnace fuel) | via: fuel-tag JSON extending to TFMG diesel/gasoline | to: aeronautics (fuel supply chain) | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the hot-air burner already burns coal/charcoal; a tag-JSON extension accepting TFMG diesel ties the aeronautics fuel supply line to the TFMG refinery chain — charcoal farmer OR diesel refiner can supply the fleet; no KubeJS needed, just a tag
- from: simulated:rope_coupling / docking connector | via: config / economy logistics placement | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: this is an infrastructure/flavor connection (docking at trading posts), not a recipe edge; no motif covers "build placement encourages logistics behavior"; reject for no-motif; the loop connection is real but too diffuse to author
- from: aeronautics levitite crystallization step | via: ars_nouveau:imbuement (add Ars catalyst as adjacent requirement via KubeJS) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the levitite blend → levitite in-world crystallization step is a code recipe — requiring an arcane catalyst (Ars imbuement reagent) adjacent for the crystallization bridges aeronautics and magic coherently; "you need a mage to birth levitite" fits the wonder-material's lore; power-level appropriate (mid-tier airship material, not basic)

## l2library   [anchors: support (1)]

LEAVE — developer library/API (Curios tabs + common code for LightLand mods); 0 items, 0 blocks, no recipe types. Nothing to route.

## death-count-1.0   [anchors: support (1)]

LEAVE — vanilla-scoreboard datapack; no items, no blocks, no recipe types. A tab-list death tally is a social cosmetic; nothing to route.

## pantographsandwires   [anchors: Create, aeronautics (2)]

Existing connections: built on Create machines (sequenced_assembly + 5 other inbound types); serves rail/train transport (aeronautics/logistics). Both are well-grounded and jar-confirmed.

REWORK: OK — connections sound. Deep Create inbound and a coherent aeronautics (train logistics) anchor. No arbitrary connections.

New candidates via method-pull:

- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking (produces coal coke as coking byproduct / feedstock node) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: pantographs produces coal_coke as a crafting intermediate with a c:tag; TFMG's coker also produces coal coke via coking — the shared c:item/dusts/coal_coke tag lets TFMG's industrial chain feed pantographs' wire-assembly, tying the train infrastructure to the heavy-industry chain; "build electric rail, need the steel mill's coke" is a natural industrial coupling
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:milling (already inbound, graphite as milled intermediate) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: create:milling is already an INBOUND method to pantographsandwires (it uses milling to make graphite); listing it as a new outbound candidate would be circular. The graphite tag is already consumed within the mod's own chain. Reject as redundant.
- from: pantographsandwires:coal_coke | via: aeronautics burner fuel tag | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coke is a higher-energy solid fuel (coke burns hotter than coal) — if the aeronautics burner accepts a c:dusts/coal_coke tag, the rail-industry's coke byproduct becomes airship fuel; train-builder and airship-fleet-operator share a fuel supply line

## createbigcannons   [anchors: Create, aeronautics (2)]

Existing connections: deep Create machine build chain (compacting/cutting/milling/mixing/sequenced_assembly) + Aeronautics ship-mounted cannons. Both are well-grounded.

REWORK: OK — connections sound. The Create→aeronautics pair (cannons on ships) is the core PvPvE purpose of the mod; no arbitrary connections.

New candidates via method-pull:

- from: createbigcannons:big_cartridge / shells (finished munitions) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon shells are high-effort processed goods (metal → foundry → mould → filling → fuzing) that a "munitions specialist" produces and sells; a war-goods market is a natural economy node in a PvPvE pack; "buy shells from the armourer" is a coherent trade loop
- from: createbigcannons:cast_iron_ingot (c:ingots/cast_iron) | via: create_ironworks cross-tag (shared c:ingots) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the cross-mod metal tag sharing is a de-facto unification benefit, not a authored weave; there's no method to route it through that isn't already covered by CBC's own foundry (cbc:melting) or create_ironworks' existing chains; no new edge to author. Reject as passive tag overlap, not a new connection.
- from: createbigcannons: cannon mounts on Aeronautics ships | via: M-23/M-24 (structural alloy + mechanical component for cannon mounts) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: the cannon-mount-on-ships aeronautics link is ALREADY the core of the existing aeronautics anchor; adding M-24 would re-label an existing connection as a new one; reject as already-captured

## betterclouds   [anchors: support (1)]

LEAVE — client-side volumetric cloud renderer; 0 blocks, 0 items, no recipe types. Pure visual polish; nothing to route.

## ldlib2   [anchors: support (1)]

LEAVE — developer library/API (UI/rendering/sync infrastructure for GregTech-lineage mods); its 2 "blocks" (renderer_model, test_2) are dev entries; 0 c:tags, no recipe types. Nothing to route.

## rolling_down_in_the_deep   [anchors: support (1)]

LEAVE — client-side movement/camera addon to Do a Barrel Roll; 0 blocks, 0 items, no recipe types. No material graph.

## byzantine   [anchors: survival (1)]

Pure MineColonies schematic/style pack: 0 blocks, 0 items, no recipe types. Its only weave IS MineColonies (colony construction). Forcing a second-pillar edge would be artificial.

- from: byzantine styles (Byzantine/Shogun/Nile schematics) | via: Domum Ornamentum architect's cutter (building materials) | to: economy (Domum-sourced materials as traded goods for colony builds) | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is PROVISIONAL and the maintainer leans no; the connection is "colony builder buys Domum cut-stone from a trader," which is too diffuse/indirect to be an authored weave; the materials are vanilla/Domum, not byzantine's own. Reject: M-21 provisional + no material surface of its own.

LEAVE — genuine schematic-only pack; no item surface; the MineColonies anchor is sufficient for its support role.

## immersive_paintings   [anchors: decoration/support (1)]

0 items beyond the painting items themselves, no recipe types. Pure creative-expression mod.

- from: immersive_paintings:painting (canvas item) | via: create:pressing (flatten a canvas onto a frame — decorative) | to: Create | motif: M-20 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — pressing a custom painting canvas through a mechanical press is tonally wrong (it's personal art, not industrial throughput); the pairing forces an industrial framing on a whimsical expression mod; no "of course" player nod. Reject for tone clash.

LEAVE — pure decorative-expression mod; no coherent cross-system routing without forcing it.

## miningspeedtooltips   [anchors: support (1)]

LEAVE — tooltip display tweak (reads tool mining-speed attribute, renders it); 0 items, 0 blocks, no recipe types. No material graph; nothing to route.

== CHUNK COMPLETE ==
