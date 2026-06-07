# Phase 2 candidates — chunk-11

## cmparallelpipes   [anchors: create (1)]
- LEAVE — pure Create fluid-network QoL tool (Pipe Wrench); no items, no processing methods, no material surface to route through any second pillar. Tightly bound to Create plumbing and nothing else.

## create_factory   [anchors: create, survival (2)]
- REWORK: existing M-09 candidate in dossier is retired — "economy via numismatics sell" of sweets is bare-sell, not a weave.
- from: create_factory:cream_bucket / sweet_berries_jam fluid | via: farmersdelight:cooking or extradelight:melting_pot | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pack's sweet fluids (cream, jams) slot into FD/ExtraDelight cooking chains as flavour agents, deepening the food web and creating demand for a confectionery specialist.
- from: create_factory sweets (waffle/roll/candy apple) | via: meadow:cooking or extradelight:feast | to: survival | motif: M-35 | power: mid | tone: ok | verdict: REJECT | reason: M-35 is maturation/aging — sweets don't age; the connection is to consumption (M-26) not maturation. No valid aging mechanic here.
- from: create_factory sweets | via: minecolonies hut or colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: confectionery output routes into MineColonies colony food supply as a luxury-tier ration, making a dedicated sweets factory a colony-feeding specialization; demand is colony-gated, not bare sell.
OK — connections sound (Create + survival are the natural anchors; the two accepts add economy depth via M-12 and M-28 without forcing the mod)

## owo   [anchors: support (1)]
- LEAVE — pure code library (GUI/config/networking framework); 0 items, 0 blocks, no methods, no material surface. Genuine zero-content library.

## ichunutil   [anchors: support (1)]
- LEAVE — pure shared-class library for iChun's mods; 0 items, 0 blocks, no gameplay content. Genuine zero-content library.

## ponderjs   [anchors: support (1)]
- LEAVE — packdev documentation tool extending Create's Ponder system via KubeJS; 0 items, 0 blocks, no game content. Genuine zero-content library.

## meadow   [anchors: survival (1)]
- from: meadow:alpine_salt | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt milled to refined salt crystals as a food-preservation and chemical input — pulls the meadow biome's signature mineral into the Create processing web; everyday ingredient, one light step.
- from: meadow:cheese_wheel (finished) | via: minecolonies hut / colony food request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels are a high-calorie colony food; MineColonies farm/tavern huts can request them, making dairy farming a viable colony-supply specialization that gates colony growth.
- from: meadow:chambray_wool (felt textile) | via: create:mixing or create:mechanical_crafting | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: felted chambray is a durable insulating textile; routing it through Create mixing (as a fiber input for gasket/packing materials) gives the alpine textile trade a mechanical consumer and a second anchor on the Create spine.
- from: meadow:cheese_wheel / alpine dishes | via: numismatics minting | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — bare sell link; "cheese is sellable" is the ambient loop endpoint, not a weave. Re-expressed correctly by M-28 (colony demand gate) above.
- from: meadow:alpine_salt | via: northstar:freezing or create_cheese:maturing | to: create/survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: alpine salt as a required input for create_cheese maturing or northstar brine-freezing, making the meadow biome a regional supply node that specialists must trade for; pulls M-30 regional-scarcity logic naturally since salt ore is biome-locked.
- from: meadow alpine crops (oats, lavender, yarrow) | via: Serene Seasons / seasonal-gated input | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine meadow crops grow only in spring/summer seasons, so lavender-infused meals and oat-based foods are season-gated inputs feeding the food-pressure cycle and driving trade between highland/lowland specialists.
REWORK: dossier lists M-09 (luxury good→coin) as the economy candidate — this is retired; replace with M-28 (colony demand gate) and M-30 (regional-scarcity for salt) as the correct economy links.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — GUI/block/packet scaffolding library; 0 items, 0 blocks, no player content. Genuine zero-content library.

## createbigcannons   [anchors: create, aeronautics (2)]
- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: create:crushing → ore-doubling or create:sequenced_assembly → cannon-grade alloy | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: cannon-grade steel is endgame-deep; a sequenced-assembly chain forging cast_iron → refined steel → cannon barrel links the metallurgy pillar into the Create production web as a flagship multi-step chain.
- from: createbigcannons:big_cartridge / shells | via: emergent player trade (combat specialist supplies non-combat players) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: munitions require a Create metallurgy specialist to produce; non-combat players who want air/ship defense buy cartridges from the munitions specialist — the combat-route supply loop in its clearest form.
- from: createbigcannons cannon metals (bronze, nethersteel, steel) | via: numismatics player-mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel and bronze are scarce regional alloys (region-locked ore inputs); a player who controls the foundry can press coins from them, making cannon metallurgy a dual-purpose production node (weapons AND currency backing).
- from: createbigcannons:cannon blocks (barrel/chamber) | via: aeronautics airframe/hull construction | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: mounting a cannon on a ship requires reinforced structural blocks; cannon-grade cast-iron/steel hull segments as a required Aeronautics airframe material make arming a warship a deep fabrication project, not just a placement.
- from: createbigcannons loot (boss drops / structure chests) | via: loot-seed — seed cannon-grade components into structure/boss loot | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: rare fuze components or exotic propellant formulas seeded into dungeon loot give exploration a direct payoff for the artillery specialist — organic mob/boss drops become a reagent sink for the weapons chain.
- from: createbigcannons dossier M-09 candidate ("finished shells as sellable war-good") | verdict: REJECT | reason: M-09 retired — bare sell is the ambient endpoint; re-expressed as M-34 (combat-route supply) above.
OK — Create + aeronautics are the natural anchors; the accepts layer in economy (M-34/M-08), deeper Create depth (M-06), structural aeronautics (M-23), and survival loot seeding (M-02).

## resourcefullib   [anchors: support (1)]
- LEAVE — cross-platform utility/API library; 0 items, 0 blocks, no gameplay methods. Genuine zero-content library.

## kubejs   [anchors: support (1)]
- LEAVE — server-side JS scripting framework; the weaving engine itself, not a weave target. No player-facing items to route.

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream food-variety mechanic (maid grows stronger as unique foods fed) | via: M-26 consumption sink — varied food pool as a recurring demand driver | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the consumption here is already the ambient food loop (every food mod feeds this); M-26 needs a *new* demand gate, not just "food is consumed". The mechanic is already the food-variety system functioning normally — no second anchor follows.
- from: solmaiddream:food_book | via: any recipe or loot seeding | to: any pillar | verdict: REJECT | reason: food_book is a single inspection item with no crafting chain; it has no join-key into other mods' methods.
- LEAVE — tiny flavor addon (~1 item, 0 blocks) that rides the existing food pool; its only hook is the Touhou Little Maid companion + SoL food-variety system already present. Forcing a second anchor would be artificial. Single-system (survival) is the honest call.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust transmuted through Occultism spirit-fire into a spirit essence — the Otherside's soul material feeds the magic web as a rare organic-reagent sink; "of course" because soul = occult.
- from: deeperdarker:heart_of_the_deep (rare Warden drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep as a mob-drop reagent consumed in a high-tier imbuement or ritual — links the Otherside's boss drop into the magic production web as an endgame gate material.
- from: deeperdarker:warden_carapace / sculk_bone | via: createbigcannons:melting or create:compacting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: sculk-bone and warden carapace are naturally dense bio-armor materials; melting them in a foundry or compacting them into a structural composite pulls the Otherside's organic drops into the Create metalworking chain — thematically coherent (alien shell → alloy).
- from: deeperdarker gloomslate/sculk-stone block families | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate and sculk-stone crush back to gravel + experience nugget, matching the Create deco-recycle motif; already has create:crushing inbound, so this is formalizing the established weave.
- from: deeperdarker:soul_crystal | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: soul crystal as an attunement reagent in an enchanting apparatus — the Otherside's crystallized soul energy refined into a magic intermediate, bridging exploration reward into arcane infusion.
- from: deeperdarker Otherside-only materials | via: regional scarcity (dimension-locked, not region-locked) | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: Otherside materials are dimension-locked (you need the Heart of the Deep to enter), making them the hardest scarcity gate in the pack; a combat/exploration specialist who farms them controls the magic reagent supply, forcing trade across pillars.
- from: deeperdarker dossier economy M-09 candidate ("soul materials sellable for coin") | verdict: REJECT | reason: M-09 retired — bare sell; the correct economy hook is M-30 (dimension-locked scarcity gates demand) above.
REWORK: dossier economy candidate was M-09 (retired); corrected to M-30 (regional/dimension-locked scarcity) above.

## lootjs   [anchors: support (1)]
- LEAVE — KubeJS addon for scripting loot tables; 0 items, 0 blocks, no gameplay methods. It is the *enabler* of M-02 mob-drop weaves in other mods, not itself a weave node.

## polymorph   [anchors: support (1)]
- LEAVE — recipe-conflict resolver (UI button); 0 items, 0 blocks, no material surface. Genuine zero-content QoL mod.

## sliceanddice   [anchors: create, survival (2)]
- from: sliceanddice:sprinkler (dispenses modded fluids over crops) | via: create:filling / fluid pipe routing (TFMG diesel/lubricant → sprinkler → crop field) | to: create | motif: M-13 | power: mid | tone: clash | verdict: REJECT | reason: M-13 is specifically fuel → propulsion; routing non-propulsive fluids through the sprinkler doesn't match the motif. Tone also clashes: diesel on crops is wrong.
- from: sliceanddice:slicer (automates farmersdelight:cutting) | via: northstar advanced_circuit as a required component | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: requiring a Northstar advanced_circuit to build the Slicer links the Create-space-tech pillar into the kitchen-automation chain — forcing the food-processing specialist to depend on the space-tech specialist, a real cross-route dependency.
- from: sliceanddice:fertilizer_bucket | via: create:mixing (water + bonemeal + crop byproducts → fertilizer fluid) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create mixing produces the fertilizer fluid that fills the Fertilizer block — the crop-acceleration system is sourced from the Create processing chain, making farm automation depend on the chemical-production arm.
OK — connections already 2-pillar (Create + survival); the accepts deepen the Create spine via M-29 cross-route and M-12 processing pull without over-reaching.

## xaerominimap   [anchors: support (1)]
- LEAVE — client-side minimap HUD with waypoints; 0 items, 0 blocks, no material surface. Genuine zero-content navigation mod.

## balm   [anchors: support (1)]
- LEAVE — multi-loader abstraction library; 0 items, 0 blocks (the biome-modifier and c:tags are scaffolding for dependents, not player-routable materials). Genuine zero-content library.

## northstar   [anchors: create, aeronautics (2)]
- from: northstar:titanium_ingot | via: create:pressing → titanium sheet → aeronautics airframe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium is the lightest high-strength metal in the pack; pressing it into titanium sheets as a required Aeronautics hull material for high-tier ships makes the space-metal extraction chain load-bearing for advanced airship construction.
- from: northstar:advanced_circuit | via: aeronautics control-surface / autopilot recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits as required components for Aeronautics autopilot/control systems — the circuit engraver chain becomes the electronics supply line for ship navigation; deep, multi-step, endgame-appropriate.
- from: northstar:biofuel (fluid) | via: createaddition:liquid_burning or TFMG engine as propulsion fuel | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar biofuel is a renewable off-world fuel; burning it in a TFMG/CreateAddition engine on a ship creates a second, renewable fuel source alongside diesel — the biofuel supply chain links space agriculture to the aeronautics propulsion line.
- from: northstar:titanium_ingot / tungsten_ingot | via: numismatics player-mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium and tungsten are space-locked scarce metals; a rocket operator who controls off-world mining can mint them into the pack's hardest currency — regional scarcity (space as the hardest-to-reach region) backs the coin.
- from: northstar:advanced_circuit | via: cross-route dependency into magic — required in an Ars Nouveau enchanting apparatus upgrade | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: an Ars book upgrade or focus slot requiring a Northstar advanced circuit ties the space-tech production route to the magic production route; the arcanist needs the engineer and vice versa.
- from: northstar biofuel + brine | via: M-16 seasonal — biofuel yield higher in summer / brine freezing only in winter | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Northstar's environmental systems are *planet*-based (Mars/Moon atmosphere, not Serene Seasons); the seasonal hook would require non-trivial config coupling that isn't supported by an existing method. no-motif for this specific routing.
- from: northstar dossier economy candidate "astronomical_reading as trade good" | verdict: REJECT | reason: M-09 retired — bare sell of a knowledge item isn't a weave; the correct economy hook is M-08 (scarce metal minting) above.
REWORK: dossier lists M-09 (luxury/knowledge sale) as economy candidate — retired; corrected to M-08 (player-minted currency from space metals) above.

## ldlib2   [anchors: support (1)]
- LEAVE — UI/rendering/sync infrastructure library for dependent tech mods; the registered dev/test entries (renderer_model, test_2) are not player-routable content. Genuine zero-content library.

## blueprint   [anchors: support (1)]
- LEAVE — Team Abnormals shared code framework; `template_chest` is its one nominal item but it's a trivial vanilla-style chest with no join-key into any pillar. Genuine zero-content library for practical purposes.

== CHUNK COMPLETE ==
