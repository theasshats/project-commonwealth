# Phase 2 candidates — chunk-08

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cheese_slice (milk → curd → cheese multi-step) | via: create:milling (grind torchflower/pitcher seeds into flour first) + farmersdelight:cooking | to: create | motif: M-12 | power: mid | tone: ok — Create milling grain/seeds into flour before cooking is standard; torchflower seeds through a mill into "torchflower powder" for teas is coherent | verdict: ACCEPT | hook: Create mills the ancient seeds; the cooking pot does the rest — grain-to-table sits on the tech spine
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea (multi-step bottled drink, high effort) | via: farmersdelight:cooking + extradelight:bottle_fluid | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the item is trivially sellable like any processed food
- from: trailandtales_delight:lantern_fruit (Sniffer-recovered seasonal crop, obtainable only after sniffer archaeology) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — a bioluminescent fruit infused into a glow reagent is thematically coherent; not a basic component | verdict: ACCEPT | hook: the Sniffer digs it up, Ars Nouveau imbues its light — an ancient organism feeding the arcane web
REWORK: existing anchor survival is sound. The dossier's M-09 luxury-food candidate (cherry cheese pie → coin) survives only as a secondary economy link if the Create/magic weaves are authored; don't rely on it as the main 2nd anchor.

## dataanchor   [anchors: support/library (1)]
- LEAVE — zero content, zero items/blocks, pure dev-plumbing library; no weave surface.

## railways   [anchors: Create, aeronautics (2)]
- from: railways:brass_wrapped_locometal / locometal blocks (Create-fabricated aesthetic metal) | via: create:crushing (M-04) | to: create | motif: M-04 | power: everyday | tone: ok — locometal is a deco-metal that crushes back coherently | verdict: ACCEPT | hook: retired train-stock and locometal scrap cycle back through the crusher — deco recycling keeps the material loop tight
- from: railways:black_conductor_cap (sequenced-assembly mid-tier item) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok — conductor cap is a control-surface operator item; loosely parallel to an airship crew role | verdict: REJECT | reason: conductor cap is clothing/identity, not a mechanical drivetrain component; the M-24 framing is a stretch — no coherent physical link to aeronautics control surfaces
OK — connections (Create + aeronautics) are sound; M-04 locometal recycling is a valid incremental addition, not a new pillar.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — zero content (behavior-only slab-breaking QoL); nothing to weave.

## pantographsandwires   [anchors: Create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke — produced by the mod, tagged) | via: tfmg:coking (or create:compacting) | to: create/economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: coal_coke is an intermediate feedstock; its c: tag makes it shareable, but the link proposed is just "process coal_coke further" with no scarcity-gate — generic-processable, non-distinctive
- from: pantographsandwires:graphite_block / ingots (c:item/ingots/graphite — a mod-unique tagged material) | via: create_new_age:energising (Create New Age electric charging; graphite is an electrical conductor) | to: create (electric tier) | motif: M-17 | power: mid | tone: ok — graphite as an electrode material that the FE system wants is scientifically coherent and ties the electric rails into the power-gen pillar | verdict: ACCEPT | hook: overhead-line graphite doesn't stop at the mast — the same material charges FE tools at the Create New Age energiser
OK — connections (Create + aeronautics) are sound; M-17 graphite-to-FE is an incremental deepening that doesn't add a new pillar but tightens the Create/electric seam.

## moreoverlays   [anchors: support/QoL (1)]
- LEAVE — zero content, client HUD only; nothing to weave.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_slab / elder_guardian_slice (boss-mob drops processed through FD cutting) | via: create:haunting | to: create/magic | motif: M-19 | power: mid | tone: ok — haunting elder guardian flesh into a "soul-infused" ocean essence is thematically coherent (elder guardian = rare, powerful, soul-adjacent to the deep ocean) | verdict: ACCEPT | hook: elder guardian flesh through Create's soul-fire haunting yields a deep-ocean spirit reagent — combat at sea earns arcane fuel
- from: oceansdelight:fugu_slice (poison-risk delicacy, high-effort, distinct risk profile) | via: occultism:spirit_fire or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-11 | power: mid | tone: ok — pufferfish/fugu is a classic potion ingredient; routing its cooked slice through a spirit-fire or alchemist cauldron as a toxic reagent is coherent | verdict: ACCEPT | hook: the ocean's deadliest dish transmuted in the spirit cauldron into a paralytic reagent — fishing the deep pays the arcane
- from: oceansdelight:guardian_soup / cooked dishes (finished meals) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; ocean dishes are trivially sellable like any food

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh (drops from Frostbitten — cold-biome zombie variant) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok — cold undead flesh transmuted in spirit-fire is coherent "cursed matter → essence" | verdict: ACCEPT | hook: the frozen dead leave behind a cold-touched remnant — spirit-fire renders it into a frost-essence for rituals
- from: rottencreatures:corrupted_wart (drops from Swampy zombie variant) | via: ars_nouveau:crush | to: magic | motif: M-02 | power: everyday | tone: ok — a diseased nether-wart variant crushed into a magic powder is exactly the mob-drop-reagent motif | verdict: ACCEPT | hook: the swamp zombie's fungal growth, ground fine, fuels Ars Nouveau potions — one more reason to clear the swamp at night
- from: rottencreatures:magma_rotten_flesh (drops from burned/lava zombie) | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok — magma-infused flesh passing through soul-fire haunting yields a heat reagent; thematic (fire undead → soul-fire → something useful) | verdict: ACCEPT | hook: the smoldering dead are worth more after the haunting vat — Create's soul-fire refines magma flesh into a heat-touched intermediate
- from: rottencreatures:treasure_chest (rare drop from Dead Beard pirate captain) | via: loot-seed — seed the treasure_chest loot table with Numismatics coin (bevel/spur) or a progression key | to: economy | motif: M-14 | power: mid | tone: ok — a pirate captain's treasure chest containing actual coins is exactly what a player expects | verdict: ACCEPT | hook: Dead Beard's buried hoard actually pays in coin — hunt the rarest beach zombie for a genuine payday

## jamlib   [anchors: support/library (1)]
- LEAVE — zero content, Kotlin/Architectury dev library; nothing to weave.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear (complex mechanical components, mid-tier) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok — planetary and worm gears are precision drivetrain components; feeding them as inputs to Aeronautics propeller/control-surface assembly is a coherent mechanical story | verdict: ACCEPT | hook: an airship's propeller shaft doesn't run on a plain cogwheel — a planetary gear gives it the torque ratio to actually fly
- from: gnkinetics:creative_gear_motor | via: anything | verdict: REJECT | reason: creative/admin item — not for weaving; would trivialize the production chain
- REWORK: dossier says "none — leave" for 2nd anchor. The M-24 planetary gear → aeronautics drivetrain is a clean loop-advancing link (Create output feeds aeronautics) and upgrades the mod to 2-anchor — warrants revisiting the dossier's conclusion.

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — zero content, client movement tweak; nothing to weave.

## collective   [anchors: support/library (1)]
- LEAVE — zero content, shared event library; nothing to weave.

## kambrik   [anchors: support/library (1)]
- LEAVE — zero content, Kotlin dev framework; nothing to weave.

## moreculling   [anchors: support/performance (1)]
- LEAVE — zero content, client render-culling optimization; nothing to weave.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship structure loot tables (floating aerial structures, no registered items but loot=implied by structure) | via: loot-seed — seed whale-back chests with Create Aeronautics structural components (M-23: airframe plate / iron sheet) or a boss-key unlock token so reaching one by airship pays a tangible progression reward | to: aeronautics | motif: M-15 | power: mid | tone: ok — sky whale = natural airship destination; loot that advances the ship-build chain is exactly the "of course" pairing | verdict: ACCEPT | hook: fly a ship to board a sky whale and salvage the hull plates that make a better ship — the loop closes in the sky
- from: sky_whale_ship loot tables | via: loot-seed — seed with Numismatics coin (bevel/crown) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable / coin-seeding alone is non-distinctive; the aeronautics loot-seed (M-15) is the stronger and more distinctive link; coin can be a secondary drop, but it shouldn't be the primary anchor
- NOTE: dossier records loot=no from jar, but the mod ships structure data with chests; loot-seed delivery is still valid via a Phase-3 datapack edit targeting the whale structure chests directly.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable item, gag novelty; any forced recipe edge would be noise.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items (builder QoL tool for Create Deployers); no feedstock, no output, no coherent 2nd pillar without forcing.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure overhaul only, no items, no loot tables of its own (uses vanilla mineshaft loot); nothing to weave via recipe or loot-seed.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy set (max armor/toughness, near-zero knockback — mid/endgame tier) | via: create:mechanical_crafting or create:sequenced_assembly (require Create-pressed iron/steel plates as crafting matrix inputs) | to: create | motif: M-05 | power: mid | tone: ok — gating the heaviest armor behind a mechanical crafter makes it a Create milestone; the Steampunk set is an even cleaner fit but Heavy is more impactful mechanically | verdict: ACCEPT | hook: you can't hammer Heavy armor at a vanilla bench — it takes a mechanical crafter and pressed plates; the tech spine earns the toughest set
- from: immersive_armors:divine_chestplate / divine set (blocks one hit per minute — endgame passive) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok — "Divine" protection woven through an arcane apparatus is tonally obvious; the enchanting apparatus is the right depth for an endgame set bonus | verdict: ACCEPT | hook: the Divine set's protection isn't smithed — it's woven at the enchanting apparatus from arcane essences; magic earns you the blessing
- from: immersive_armors:bone_chestplate / bone set (drops from skeletons, vanilla bone) | via: any cross-system method | verdict: REJECT | reason: bone set is everyday vanilla material — gating it behind a complex recipe violates the cost-model guardrail (basics ≈ 3×, no deep chain); leave it at vanilla crafting
- from: immersive_armors:emerald_chestplate / emerald set | via: numismatics sell | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; armor as a traded commodity is weak (players keep gear)

## moonlight   [anchors: support/library (1)]
- LEAVE — library/API for MehVahdJukaar mods; no gameplay content to weave.

== CHUNK COMPLETE ==
