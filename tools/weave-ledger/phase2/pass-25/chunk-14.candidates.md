# Phase 2 candidates — chunk-14

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a corrupted fungal growth from a zombie variant transmutes in spirit-fire into a warp-essence — the decay theme maps cleanly onto occult transmutation
- from: rottencreatures:frozen_rotten_flesh | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: flesh that formed in supernatural cold carries latent arcane charge, imbued into an ice-aligned reagent for Ars spells
- from: rottencreatures:magma_rotten_flesh | via: occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: heat-infused undead flesh is a plausible fire-ritual ingredient, giving the bestiary's drops an occult output sink
- from: rottencreatures:corrupted_wart | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 soul/haunting seam is the weaker path here — the wart's corrupted-fungal nature fits spirit_fire (occultism) far better than vanilla-Create haunting; spirit-fire is the correct method, already accepted above; redundant edge
- from: mob heads (rottencreatures:*_head) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; a mob head is trivially tradeable but adds no structurally distinctive loop closure

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. Already the canonical Create×Occultism bridge (M-05, M-11, M-19 all ride through it); its occultengineering:spirit_solution is the reserved occult intermediate. No REWORK flags.
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; sterling_silver is a real material but minting it is trivially available to any metal; the mod already sits at 2 anchors and this adds no loop-closing signal beyond "metal → coin"

## searchables   [anchors: support (1)]
LEAVE — pure client-UI search-bar library; zero items, zero methods, zero loot. Nothing to weave.

## inventoryprofilesnext   [anchors: client-only QoL (1)]
LEAVE — pure client inventory-management behavior; zero items, zero recipe types, no material surface.

## ferritecore   [anchors: support/perf (1)]
LEAVE — memory-optimization runtime library; zero items, zero methods. Nothing to weave.

## jade   [anchors: client-only UI (1)]
LEAVE — client display overlay; zero items, zero methods. Nothing to weave.

## modonomicon   [anchors: support (1)]
LEAVE — in-game guidebook framework; 6 book items but they are display/flavor items only, no material processing surface. Nothing coherent to weave.

## playeranimator   [anchors: support/library (1)]
LEAVE — client animation API; zero items, zero methods, no gameplay surface.

## create_hypertube   [anchors: Create, aeronautics (2)]
OK — connections sound. create:sequenced_assembly crafting (Create anchor) + the player/entity transport network (aeronautics/logistics anchor) are the correct two anchors. No further coherent weave surface — it moves entities, not materials.
- from: hypertube network as cargo conduit | via: any | to: economy | motif: no-motif | verdict: REJECT | reason: hypertubes move players/entities, not item stacks — there is no item-throughput surface to route into the economy; no-motif and forced edge

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (endgame companion unlock) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — a clockwork-industrial wolf animated by gears and precision casings doesn't cohere with arcane imbuement or spirit-fire; the mod's vibe is mechanical engineering, not animist magic; forced edge
- from: createmechanicalcompanion:quantum_drive (high-tier internal part) | via: create:sequenced_assembly gated by a boss drop | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the quantum drive, the wolf's "brain," is the natural boss-key gate — a rare drop from a strong boss unlocks the deepest component in the build chain, keeping the companion an endgame milestone rather than a mid-game shortcut
- from: createmechanicalcompanion (wolf companion) as combat logistics | via: aeronautics ship crew concept | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: M-24 is for mechanical components feeding propulsion/control recipes; the wolf is a companion entity, not a drivetrain part — no recipe-level aeronautics weave available; forced mapping

## jamlib   [anchors: library (1)]
LEAVE — cross-platform config/API library; zero items, zero methods, no content surface.

## create   [anchors: Create (1)]
LEAVE — the method hub; Create IS the spine that other mods weave through. Adding inbound edges that "consume Create itself" contradicts the design model. No weave action needed or appropriate.

## rightclickharvest   [anchors: support/QoL (1)]
LEAVE — pure interaction-hook QoL (right-click harvest); zero items, zero recipe types. Nothing to weave.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (flagship kitchen appliances) | via: create:pressing + crafting (brass/copper sheets as construction input) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: an industrial-grade kitchen oven built from copper-pressed casing feels exactly right — Create's metal-working upgrades the homestead kitchen into a serious food-production station; ties the food cluster to the tech spine without touching food recipes
- from: cookingforblockheads:cow_jar / milk_jar (convenience dairy supply) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the jar just produces milk, which is already trivially sellable as a food ingredient

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (advanced contraption-control block) | via: create:mechanical_crafting gated on precision mechanism + electron tube | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a lectern-mounted controller that maps real inputs to redstone frequencies should require precision-machined Create components; deepens the Create→aeronautics control chain so the advanced controller is earned, not just crafted at a table
- REWORK: current anchor is aeronautics only (1); the controller is crafted from Create precision parts — Create should be a co-anchor, which the M-05 link above formalises.

## cubes_without_borders   [anchors: support (1)]
LEAVE — client borderless-window display option; zero items, zero methods. Nothing to weave.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo is a wolf-headed cryptid; its claw transmuting in spirit-fire into a bestial occult essence fits the dark-folklore theme perfectly
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient amber carries a trapped organic charge — imbuement into an Ars reagent (nature/earth-aligned) is thematically sound and gives a worldgen-scarce drop a non-trivial use
- from: brazil_legends:big_tongue | via: occultism:ritual | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a monstrous tongue from a cryptid mob is exactly the kind of grotesque ritual ingredient Occultism was designed for
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; amber is sellable but the magic link above is the distinctive 2nd anchor; adding a bare sell link on top adds no structural value

## underground_village   [anchors: survival (1)]
- from: underground_village (Stoneholm villager settlement) | via: villager trade seating (Numismatics-priced trades seeded into Stoneholm villager professions) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT | hook: a subterranean trading post whose inhabitants deal in the pack's coin currency turns Stoneholm from a worldgen curiosity into an economy node — players seek out underground villages to trade for scarce goods; this is structurally distinctive (a specific settlement type as a currency-using trade hub, not just "item is sellable")
  (provisional motif — M-21 is explore-only; flag for Gate-0 review before authoring)
- REWORK NOTE: the dossier's own economy candidate flags M-09 (luxury trade) but the correct framing is M-21 (villager profession → Numismatics trade-seam); update dossier at next sweep.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (Soul Furnace output) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallized blood produced by a Soul Furnace is a natural spirit-ritual ingredient — it bridges the mod's internal alchemy loop into the pack's Occultism web so the two soul-processing systems talk to each other
- from: companions:soul_gem (diamond→soul gem via Soul Furnace, boss-tier) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a gemstone refined through soul-fire carries an arcane charge suitable for high-tier Ars infusion — gives the boss-progression item a second use in the magic pillar
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-exclusive gold is structurally distinctive as coin stock — not generic sellability but a scarcity-gated metal that closes the loop: kill the boss, smelt the relic, mint the rarest coin tier; this is loop-closing, not trivially sellable
- from: companions (Tesla/voltaic deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: tone clash moderate — clockwork-industrial recycling of gothic-alchemical Tesla pillars is a reach; the blocks' primary value is architectural and their internal copper cost is low, making the crush-back trivial; the magic anchor above is far stronger for this mod's second leg; weak signal

## betterendisland   [anchors: survival (1)]
LEAVE — pure structural/worldgen overhaul of the End island; zero items, zero methods, loot=no. Nothing to weave.

== CHUNK COMPLETE ==
