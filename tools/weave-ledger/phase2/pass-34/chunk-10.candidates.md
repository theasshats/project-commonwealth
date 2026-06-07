# Phase 2 candidates — chunk-10

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — pure cosmetic particle/sound-effect datapack; no items, no methods, no drops to route. The 184 "items" are internal particle-holder entries, not craftable/usable objects.

## create_cheese   [anchors: Create, survival (2)]
- REWORK: existing economy candidate cites M-09 (luxury→coin), which is RETIRED. Re-express:
- from: create_cheese:aged_cheese (brie/gouda/camembert) | via: farmersdelight:cooking (cheese in a stew/toasted dish) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese melted into a FarmersDelight cooking-pot sauce — the maturing wait earns the step, and the stew feeds the diet loop
- from: create_cheese:cheese (any tier) | via: MineColonies colony provisioning (baker/cook hut) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony's baker requests aged cheese as a high-nutrition provision, making the cheese specialist a supplier for settlement growth
- from: create_cheese:calendar_page_tier_3 | via: create_cheese:maturing → ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — cheese maturation as a magical attunement step reads absurd; no lore bridge between fromagerie and arcane infusion
- OK — Create↔survival connections sound (Create mixing/compacting → curing is the spine; stew/colony routes give it the second and a third touch via M-12/M-28)

## dtterralith   [anchors: survival/support (1)]
- LEAVE — pure worldgen compat bridge (DT species for Terralith biomes); logs/saplings produced are vanilla-type outputs already covered by the general wood economy downstream. No bespoke item or method surface to weave without forcing an arbitrary edge.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:fish_skin | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the kinetic peeler yields fish skin → press it into a leather-substitute sheet, weaving the fishing line into the Create materials chain (a c:leather alternative the pack likely needs)
- from: createfisheryindustry:seafood_chowder / mussel_soup / lobster_soup | via: MineColonies colony provisioning (tavern/cook hut) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony tavern requests seafood dishes as high-nutrition provisions, anchoring the "fisher" specialization to settlement demand
- from: createfisheryindustry:harpoon | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: harpoon is a mid-tier throwable, not an endgame item — M-06 is the sequenced-assembly keystone motif for flagship endgame, applying it to a basic combat tool is over-gating; one light crafting step is the right cost model
- from: createfisheryindustry:bait_trap output (exotic fish) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: fish→spirit transmutation has no lore grounding; the link is mechanically possible but thematically arbitrary
- OK — Create↔survival sound; M-12 fish-skin pressing + M-28 colony provisioning add a genuine third touch via economy

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — pure client-side spyglass zoom/overlay/keybind mod; no items, no methods, no drops. Sanctioned support role.

## azurelib   [anchors: support/library (1)]
- LEAVE — animation engine library (GeckoLib fork); no player content, no methods, no items to route.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure terrain-generation overhaul datapack; registers no items/blocks/loot. Thematic adjacency to regional-scarcity spread (bigger landmasses → wider ore separation) is real but is already an emergent effect of the GTMOGS ore-gen layer; no recipe edge to author.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals shared code framework; one shipped item (template_chest) is too trivial (vanilla-equivalent chest) to anchor a pillar. Sanctioned support role.

## createbigcannons   [anchors: Create, aeronautics (2)]
- from: createbigcannons:cast_iron_ingot / steel_ingot | via: createbigcannons:melting (CBC foundry) | to: Create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: scrap metal (broken cannon parts, misfired shot) cycles back into the foundry as feedstock — industrial circularity that rewards the munitions specialist for keeping their own supply line tight
- from: createbigcannons:big_cartridge / shell | via: emergent trade (combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: munitions are bulk consumables — a combat/artillery specialist produces them for trade; non-combat players buy rather than build a foundry, giving the economy its war-goods arm
- from: createbigcannons:steel_ingot (c:ingots/steel) | via: aeronautics structural recipe (airframe/hull) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel plate is also the structural alloy for armored ship hulls — the munitions forge and the shipyard share a supply line, so the steel specialist touches both pillars
- from: createbigcannons:nethersteel_ingot | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: nethersteel is already CBC's own top-tier cannon material gated behind Nether access; wrapping it in another Create sequenced chain double-gates it without adding a coherent new step — over-engineering for the sake of depth
- REWORK: existing dossier economy candidate cites M-09 (retired "luxury→coin"). Should re-express as M-34 combat-route supply (accepted above) or M-30 regional-scarcity (steel/nethersteel are already regional metals). Both are valid; M-34 is the primary route.

## formations   [anchors: survival (1)]
- LEAVE — scatter-structure worldgen with no items/blocks/loot of its own (loot=no confirmed in digest). Structures use existing block palettes. Dossier correctly notes any loot-table tie-in would belong to what's generated, not Formations itself. No coherent 2nd anchor without forcing.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute | via: aeronautics logistics (ship cargo routing) | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: the direct chute is a logistics convenience block but assigning it to M-31 (logistics-required bulk good) conflates the *tool* with the *goods it moves*; M-31 targets bulk trade goods that require aeronautics to move at scale, not the pipe itself — forcing this edge is a category error
- LEAVE — single Create logistics convenience block; no second coherent anchor. Its contribution to aeronautics logistics is real (the chute is part of ship cargo automation) but that's a functional dependency, not a weave link distinct from its Create anchor.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- from: rechiseledcreate:*_window_panes / chiseled variants | via: create:mechanical_crafting | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the Mechanical Chisel already IS the kinetic processing step — rechiseledcreate is the bridge; adding another Create method on top would be stacking methods without a thematic reason. The mod is already well-connected as the Create-kinetic deco bridge.
- OK — connections sound. Create × decoration is the mod's core identity; it IS the weave (Rechiseled gets its Create anchor through this mod's Mechanical Chisel).

## ribbits   [anchors: survival (1)]
- from: ribbits amethyst-shard trade economy | via: numismatics coin bridge (KubeJS trade hook: amethyst shard ↔ numismatics:spur, the smallest coin) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ribbit merchants already trade in amethyst shards — bridging shard→lowest-denomination coin folds their village economy into the pack's player-run settlement medium; the frog traders become the first NPC node where explorers spend early coin
- from: ribbits:toadstool / brown_toadstool | via: farmersdelight:cooking (mushroom stew ingredient) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: toadstool from a swamp Ribbit village goes into a FarmersDelight mushroom-based stew, weaving the discovery-reward (a found village) into the food/diet loop
- from: ribbits:mossy_oak_planks | via: create:crushing (M-04 lossy deco recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mossy_oak is a generic deco woodset; crushing it for sawdust/gravel is coherent but trivially generic — adds no meaningful connection. One-system mods need a real second anchor, not a generic wood-crush edge. The coin bridge (M-08) + cooking (M-12) give it survival + economy, which is the right pair.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]
- LEAVE — pure compat behavior-patcher (makes furniture sittable on Aeronautics ships); no items, no methods. Already touches aeronautics via its compat role. No recipe surface to weave.

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — mandatory ship-compat patcher (per CLAUDE.md); pure mixin/behavior patch, no items or methods. Sanctioned required support role with no weave surface.

## lithium   [anchors: support/performance (1)]
- LEAVE — server/world-tick optimization mod; no content, no items, no methods. Sanctioned performance support role.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dendro Potion (which affects DT tree growth) is infused with arcane source to produce an "augmented growth solution" — magic specialist provides enhanced tree-growth reagents, the forester pays for the upgrade; theme fits (natural growth + arcane nurturing is coherent)
- from: dynamictrees:branch (any species) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT branches are effectively sticks/logs; milling them is identical to milling vanilla sticks — no new connection, just applying M-12 to a vanilla equivalent. Dossier explicitly notes this edge is contrived.
- OK — survival anchor is sound. The dendro-potion infusion (M-10) gives a genuine magic second touch without forcing the tree mechanics into an awkward Create loop.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual (transmutation: wither skeleton skull + undead essence → undead_eye) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a player stuck on the Undead Eye can ritually assemble it from occultism undead-essence components — End access gates through magic, the magic specialist becomes a progression enabler, and the ritual cost keeps the exploration intent intact
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Magical Eye (likely the rarest/most arcane eye) is crafted through an Ars enchanting apparatus as a last resort — the magic specialist holds the key to the End for those who can't find it in the world
- from: endrem:guardian_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the guardian eye is thematically ocean/aquatic and not inherently a tech-industrial artifact; routing it through Create sequenced assembly breaks the exploration/organic source theme — a loot/ritual origin fits better than a factory chain
- from: endrem eyes (general) | via: loot-seed into Formations / structure chests | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — seeding eyes into structure loot is a config/datapack edit, not a recipe weave, and loot-seeding here doesn't advance the loop in a new direction (the eyes are already loot-driven by design)

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight:cabbage / tomato / onion (FD crops) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling FD crops (onion, dried tomato) into powders/pastes feeds the Create mixing chain for sauces and seasonings — the kitchen's prep stage runs on Create kinetics (deepening the already-established spine)
- from: farmersdelight:cooked_stew/pie (high-tier cooked meals) | via: MineColonies colony provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colony cook/tavern requests hearty FD stews as settler provisions — the kitchen specialist feeds settlement growth, turning the cooking surplus into colony-gated demand
- from: farmersdelight:rice / grain | via: Serene Seasons (seasonal crop availability gate) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: rice and grain are already season-sensitive (real-world summer crops) — tagging them as Serene Seasons spring/summer harvests only means the diet-variety pressure spikes in winter when the grain supply drops, tightening the food loop
- from: farmersdelight:apple_cider | via: vinery:apple_fermenting | to: survival | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: FD apple cider feeds into Vinery's apple-fermentation method as the pressed-juice input, adding a maturation step (cider→wine) that rewards aging and connects the two food mods' beverage chains
- from: farmersdelight:cutting_board (knife recipes) | via: supplementaries:sus_crafting | to: survival | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif and tone clash — combining FD cutting board with Supplementaries suspicious crafting has no coherent gameplay meaning; the two methods don't share a design language
- REWORK: dossier economy candidate cites M-09 (retired). Re-express as M-28 colony provisioning (accepted above) — the kitchen's trade output is colony demand, not NPC coin.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors:*_iron_*_door / *_metal_*_door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal-frame doors crush back to iron nuggets + an XP nugget (lossy) — standard deco-recycle weave that links the door palette to the Create materials loop without gating construction
- from: mcwdoors:*_barn_door / stable_door | via: farmersdelight:cutting (knife on wood planks) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cutting a door on a cutting board makes no sense — the cutting method is for food prep, not woodworking; theme clash disqualifies this
- REWORK: dossier correctly identifies M-04 as the one plausible edge; decoration-only mods are a sanctioned support anchor. The metal-door crush (M-04) is the minimal but coherent second touch.

== CHUNK COMPLETE ==
