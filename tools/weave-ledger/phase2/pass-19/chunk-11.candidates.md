# Phase 2 candidates — chunk-11

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — pure server behavior mod; zero items, zero recipe surface, zero loot. A genuine zero-content QoL shim with nothing to route through any method.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero items, zero recipe types; it IS an internal magic↔magic weave (Ars ↔ Iron's mana bridge). No foreign-material surface exists to anchor a second pillar. Forcing one would be synthetic noise.

## sparsestructures   [anchors: support (1)]
- LEAVE — config-only worldgen-tuning mod; zero items, zero blocks, zero loot. No material surface to route anywhere.

## doubledoors   [anchors: support (1)]
- LEAVE — pure behavioral interaction mod; zero items, zero blocks, zero recipe surface. Genuine zero-content convenience shim.

## configuration   [anchors: support (library) (1)]
- LEAVE — config-screen library; zero items, zero recipe types. Pure code library; nothing to route.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone signal on season change) | via: create:item_application or KubeJS redstone logic | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wire the season_sensor into a Create gearshift/analog lever so automated crop-swap contraptions (or greenhouse shutters) change state each season without a player touching them — the world's calendar becomes a real Create input.
- from: out-of-season produce (any crop with seasonal scarcity penalty) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crops you can only grow in their season — or only under expensive greenhouse glass — become genuinely scarce trade goods; someone with a spring crop sells to someone locked in winter, giving the seasonal calendar a direct economic pulse.
- REWORK: existing single anchor "survival" is correct but the season_sensor is an obvious Create interface that's being left on the table; M-16 is explicitly marked "want more of these" in the ledger — the sensor→Create link is the priority.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* (16-color wool item) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is a lossy-recycle motif for deco/metal blocks; crushing a sleeping bag back to wool is a round-trip swap, not depth, and the sleeping bag is a practical item not a deco piece. Noise, not a real weave.
- from: comforts:sleeping_bag variant upgrades | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: clash | verdict: REJECT | reason: A sequenced-assembly chain for a wool sleeping bag violates the cost-model guardrail ("never gate a basic/everyday component behind a complex recipe") — the sleeping bag is a basic exploration item and the theme clash (Create factory for camping gear) is real.
- LEAVE — the dossier's own conclusion stands: no coherent 2nd anchor exists that isn't forced. Comforts is a one-pillar exploration-QoL mod and that's fine.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising (the Energiser recipe method) | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Route an Ars Nouveau focus or Iron's Spellbooks scroll/rune through the Energiser (rotation+FE in → charged arcane component out) so the electrical tier of Create feeds the magic production chain — the tech spine powers the arcane tools players need mid-game.
- from: create_new_age:thorium_ore (scarce regional ore, 2 biome-modifiers) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is a region-locked heavy ore; crushing it yields a rare processed metal that converts to high-denomination coin — reactor-builders who over-mine their region can sell the surplus, threading the nuclear tier into the trade web.
- from: create_new_age:corium (reactor waste output) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Corium — the lethal byproduct of a nuclear meltdown — is a plausible arcane contaminated material; infusing it through a high-tier Ars Nouveau imbuement or Occultism ritual yields a volatile reagent locked to endgame magic (think corrupted source crystal). Thematically: nuclear waste meets eldritch ritual; a player nods at the danger.
- from: create_new_age:advanced_motor (high-tier mechanical component) | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced motors convert FE to rotation at high efficiency — exactly what an airship's propulsion drivetrain needs for sustained cruise; gating a high-tier aeronautics engine or thruster on an Advanced Motor makes the electric tier of Create a prerequisite for fast/large ships.
- REWORK: existing anchor is Create (1); the energising method, thorium worldgen, and corium byproduct all beg for magic and economy secondary anchors — especially M-17 (electric charging bridge) which was accepted exactly for Create New Age.

## patchouli   [anchors: support/library (1)]
- LEAVE — documentation/guide-book library; 9 items but they are inert book cover items with no material role. The sole recipe type (shapeless_book_recipe) just crafts a guide book. No coherent weave surface.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The Dendro Potion (a tree-growth accelerant) is a biological compound with clear magical precursor logic — imbueing it with arcane source upgrades it to a hyper-growth or season-immune variant, tying the living-forest system into the magic production chain as both consumer and supplier of botanical reagents.
- from: dynamictrees:branch (generic drop from any species, high volume) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Dynamic tree felling produces large volumes of branch items alongside logs; milling branches into sawdust/mulch (a Create processing step) turns the debris into a compostable or fertilizer intermediate that feeds the food/farming chain — every harvest becomes a small input to the Create production web.
- from: dynamictrees logs (high-volume automated felling output) | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: DT's whole-tree felling drops a burst of logs at once, making it naturally suited to Create's mechanical saw (cutting); routing a steady log flow through a belt-fed Create sawmill closes the loop between the living forest and the lumber production side of Create — wood isn't a manual task.
- REWORK: survival (1) is correct but the branch/log economy and the Dendro Potion have clear inbound-weave hooks; the dossier's "leave" call is too conservative given M-12 is established and the branch debris is real volume.

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API library; zero items, zero recipe types, zero loot. Genuine zero-surface code library.

## almostunified   [anchors: support (1)]
- LEAVE — recipe-graph plumbing tool with no item surface of its own. It operates on the graph, it isn't a node in it. ⚠ Retain the galosphere/palladium gotcha documented in the dossier.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert novelty item (readable book). Any forced weave would be noise. Sanctioned flavor-only mod.

## crash_assistant   [anchors: support (1)]
- LEAVE — client crash-diagnostics utility; zero items, zero recipe surface, no gameplay hook whatsoever.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:backpack (fluid-tank-equipped wearable storage) | via: aeronautics expedition logistics | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is specifically structural alloy → airframe/hull recipe; a backpack is not a structural component. The aeronautics thematic link (portable logistics for long-range flights) is real but doesn't map to an existing motif. Would need a new motif or a Gate-0 decision. Marking no-motif → REJECT-for-review.
- from: travelersbackpack:tank_upgrade (the add-on fluid-tank module) | via: create:sequenced_assembly | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: The Tank Upgrade module — a precision fluid-management component bolted onto an already-crafted backpack — is a natural candidate for a deploy-application upgrade step; a Create deployer applies the tank housing onto the blank backpack chassis (one light step, mid-tier item), tying the explorer's kit into the Create production chain without over-gating basic packs.
- from: travelersbackpack mob-themed variants (dragon, netherite, enderman) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Endgame-themed packs (dragon hide, netherite-plated) are multi-material fabrications that make sense as a sequenced-assembly chain — press the plates, deploy the straps, compact the insulation — gating the flagship packs behind Create depth while keeping starter leather packs vanilla-craftable.
- REWORK: survival (1) is the anchor; the dossier's two weak candidates are underdeveloped. M-20 (deploy/item_application) for the tank upgrade and M-06 for endgame variants are both coherent and follow the cost model (upgrade = mid, flagship = endgame).

## miningspeedtooltips   [anchors: support (1)]
- LEAVE — display-only tooltip mod; zero items, zero recipe surface, zero loot. Pure client UI.

## sliceanddice   [anchors: Create, survival (2)]
- OK — connections sound. It is the M-12 automation bridge between Create and Farmer's Delight by design; 2 anchors established. The dossier's "leave" call is correct.
- from: sliceanddice:sprinkler (fluid-dispenser block) | via: create:filling (pipe-feed modded fluids) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: The sprinkler is a production-side tool (accelerates crops/quenches), not a luxury good or trade output; routing it to economy via M-09 is a category mismatch. The sprinkler is already inside the Create↔survival production chain; no economy hook needed.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — pure API compat shim; zero items, zero recipe types, zero loot. Genuine zero-surface infrastructure.

## spawn   [anchors: survival (1)]
- from: spawn:clam (color-variant aquatic catch, via casting_net_clam) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Clams caught in bulk via casting net are a natural milling input — grind them down to shell dust (a mineral aggregate usable as a Create mixing ingredient or fertilizer), dragging aquatic harvest into the automated production chain. Player nods: crushed shells are real-world lime/fertilizer.
- from: spawn seafood drops (crab, anglerfish, seal meat — via existing FD cutting/cooking) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Exotic seafood (anglerfish, crab boil) is high-effort food that naturally commands a price premium; posting seafood dishes as Numismatics trade goods gives fishers/crab hunters an economic payoff — the coastal biome becomes a trade-route origin, not just a personal food source.
- from: spawn:date_log / date_planks (unique wood set from the date palm) | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Date palm wood is a new species whose lumber enters the wood-processing chain through the Create mechanical saw, making the coastal biome a distinct wood-supply region (another axis of regional scarcity).
- REWORK: survival (1) is current; M-09 (seafood → economy) and M-12 (clam milling, date wood) are clean second anchors that the dossier identified as MED candidates and they survive red-team.

## formationsnether   [anchors: survival (1)]
- from: formationsnether loot tables (chest loot in ritual altars / cabins / castles) | via: loot-seed (datapack edit) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed Numismatics coin (spur/bevel tier) and/or a magic reagent (raw source gem fragment, occultism ritual powder) into the altar/cabinet loot so Nether ruins exploration directly feeds the economy and magic pipelines — dangerous Nether runs have a payoff beyond vanilla loot.
- from: formationsnether loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ritual altars (thematically: occult sites) are the obvious place to seed a magic mob-drop or arcane reagent (e.g. occultism candles, ars_nouveau wilden drop) — the structure's theming and function align; a player exploring a Nether altar expects to find something arcane.
- REWORK: survival (1); both loot-seed candidates map cleanly to accepted motifs (M-14 coin, M-02 magic reagent) and the structure themes support them without forcing.

== CHUNK COMPLETE ==
