# Phase 2 candidates — chunk-07

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (appliance blocks) | via: create:mechanical_crafting or M-05 native-method gating | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A brass-fitted industrial kitchen makes sense — Create players upgrade their cooking stations with the same parts they use everywhere else; the appliances become a mid-tier milestone build rather than a free craft.
- from: cookingforblockheads kitchen blocks as sellable furnishings | via: numismatics sell order | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: cookingforblockheads sells convenience, not a processed luxury good; the food mods it aggregates are the right M-09 nodes — routing the kitchen blocks themselves to coin is arbitrary and dilutes the M-09 signal.
- REWORK: existing single anchor (survival) is sound — it is a downstream aggregator for the food cluster. The M-05 ACCEPT above is the natural second anchor. No existing connections to flag.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs / Undead Fortress / Spider Cave chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Clearing a dungeon pays off in coin fragments or precious metal dust — the loop from dangerous exploration to the player economy closes naturally.
- from: betterdungeons loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Magic reagents (Ars source gems, Occultism crystal seeds) seeded into dungeon loot gates early magic behind exploration, making dungeons a meaningful progression step rather than just XP farms.
- from: betterdungeons loot tables | via: loot-seed (bounty target) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bounty boards can list dungeon mob types as targets; clearing a YUNG dungeon pays coin — combat → economy loop tightened. (provisional motif)
- REWORK: none — single anchor, all candidates are additive.

## blockui   [anchors: support/library (1)]
- LEAVE — pure UI framework library (zero items, zero methods, zero loot); MineColonies hard-dep. No content surface to route through any method.

## incontrol   [anchors: support/server-util (1)]
- LEAVE — JSON-only spawn/loot rule engine; no items, no recipe methods, no loot tables of its own. It is enabling infrastructure for scarcity but is not itself a node in the material graph.

## mffs   [anchors: Create, survival (2)]
- OK — connections sound. The authored M-05 + M-06 weave (focus_matrix via electron_tube; projector + interdiction_matrix via sequenced_assembly with TFMG steel) is the gold-standard reference. No new edge warranted; a third anchor would be forced.
- from: mffs force-field modules as a traded security service / purchasable upgrade | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: force fields are base-defense infrastructure, not a luxury good; the M-09 hook is thematically strained (selling defense modules like wine misreads the pillar). Keep mffs at Create + survival; the economy receives pressure from the threat these fields defend against, not from mffs itself.

## particlerain   [anchors: support/client-atmosphere (1)]
- LEAVE — client-only visual mod (zero items, zero methods, zero loot). No material surface to route.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — sleep/rest buff system; no items, no methods, no loot. The well-rested status is thematically adjacent to Serene Seasons and Cold Sweat but has no join key (no consumable, no reagent, no config that ties to another mod's method).

## inventoryprofilesnext   [anchors: client QoL/support (1)]
- LEAVE — pure client inventory UI. Zero items, zero methods. The arrow-glyph override is cosmetic infra (see CLAUDE.md §gotchas). No weave surface.

## entity_model_features   [anchors: support/client-rendering (1)]
- LEAVE — client model-replacement engine (OptiFine CEM); zero items, zero methods, zero loot. No game-content surface.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ambergris is a real-world prized organic substance used in perfumes and alchemy — an arcane infusion consuming it to produce a higher magic intermediate is both lore-coherent and rare enough to justify mid-tier depth.
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: End-mob residue transmuted through spirit fire into an Occultism essence — the interdimensional origin makes the ritual match obvious to any player.
- from: alexsmobs:void_worm (boss fight) → alexsmobs:void_worm_beak / effigy drop | via: boss-key gating | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The void worm is an endgame boss; its beak or effigy part unlocking a high-tier Create/tech recipe is the pack's explicit boss-key design — exploration earns industrial capability.
- from: alexsmobs mob drops (bear_dust, banana_slug_slime, etc.) | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Organic drops run through the millstone or crusher yields intermediates (pigment, sticky resin, fine powder) — fauna feeds the tech spine at the everyday level without gating basics behind complexity.
- from: alexsmobs rare drops (ambergris, ender_residue) | via: numismatics bounty or sell | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Exotic creature drops as bounty targets closes the combat → economy arc: hunting rare mobs for the board or market is an emergent trade specialization. (provisional motif)
- from: alexsmobs:bear_fur / bison items as luxury textile trade goods | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is for high-effort processed goods (wine, cheese); raw mob drops are commodities, not luxury goods. The M-14 bounty angle is the right economy hook at this power tier; duplicating with M-09 here dilutes both.
- REWORK: single anchor (survival); all accepted candidates are additive second/third anchors. No existing connections to flag.

## everycomp   [anchors: support/decoration (1)]
- LEAVE — runtime block/asset generator; its content is entirely derivative of host mods (Create, Macaw, Moonlight wood shapes). Any weaving belongs on the host mods, not on the generator itself.

## kambrik   [anchors: library/API (1)]
- LEAVE — Kotlin dev-framework library. Zero items, zero methods, zero loot. No content surface.

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — client animation-replacement cosmetic. Zero items, zero methods. No game-content surface.

## sablecollisiondamage   [anchors: support/physics (1)]
- LEAVE — Sable/Aeronautics behavior addon; zero items, zero loot. Serves the aeronautics pillar as physics infrastructure, not a weave node.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — particle/sound emitter on damage; zero real items (the 184 "items" are particle holder entries, not craftable objects), zero methods. No material surface.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: more_slabs_stairs_and_walls stone/log cuts | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running stone and log cuts through Create's mechanical saw is a natural builder workflow — bulk-produce architectural variants on the Create spine instead of one at a time at the stonecutter; the decoration set earns a Create anchor.
- from: more_slabs_stairs_and_walls:gravel/sand/concrete-powder gravity variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco blocks crushing back to raw/gravel as a lossy recycle. The dossier flags this WEAK for good reason — gravity variants of concrete-powder are already made of sand/gravel; re-crushing them is a trivial round-trip that adds no loop value. The M-12 cutting weave is sufficient.
- REWORK: none — single anchor; M-12 cutting ACCEPT is the natural second.

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — code library (GUI/block/BE/packet scaffolding); zero items, zero methods, zero loot. No content surface.

## createbigcannons   [anchors: Create, aeronautics (2)]
- OK — connections sound. Deep Create-machine build chain + Aeronautics ship-mounting is the ideal two-anchor state for a warfare mod.
- from: createbigcannons finished shells / cartridges (processed war goods) | via: numismatics sell order | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A munitions market — players specialize in cannon production and sell shells to the crew — is a natural emergent economy node; processed gunpowder + cast metal → finished ordnance is the high-effort good M-09 is designed for.
- from: createbigcannons:cast_iron_ingot / nethersteel_ingot (its own metal c:tags) | via: create:crushing or tfmg:hot_blast (as scrap input) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: CBC already deep-integrates with Create's own material ladder (it uses create:compacting, mixing, sequenced_assembly per the dossier); adding a duplicate ore-doubling path for its metals would be redundant, not additive. The second-anchor Create connection is already established.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear (specialized high-torque gear components) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Planetary and worm gears are exactly the components that would appear in a real drivetrain or propeller gearbox — routing gnkinetics advanced gears into Aeronautics propulsion/control components gives the kinetics addon a second pillar and makes the drivetrain supply chain richer.
- from: gnkinetics:industrial_gear / large_industrial_gear | via: create:mechanical_crafting (already native) → aeronautics structural component | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is for structural alloys (plates, beams) not gears; M-24 (drivetrain) is the correct motif and already accepted above. Doubling up here is redundant.
- REWORK: single anchor (Create), M-24 ACCEPT is the natural second.

## zeta   [anchors: support/library (1)]
- LEAVE — Quark's modular framework backbone; zero items, zero methods, zero loot. No content surface to weave through.

== CHUNK COMPLETE ==
