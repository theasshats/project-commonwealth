# Phase 2 candidates — chunk-05

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure compat-glue layer; registers no items, no recipe types, no blocks; its function IS the M-12 food-chain unification the briefing describes as already done. No material surface to route a 2nd anchor through; forcing one would be attaching an edge to the glue itself, not to the content. OK as 1-anchor support.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — zero-content config API; no items, no methods, no material surface.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- REWORK: existing Create anchor comes via the Courier ↔ Create Stock Link storage bridge. That connection is valid (routes colony logistics through Create's stock infrastructure). OK — connections sound.
- from: minecolonies_compatibility:tacz_dummy_gun (colony Gunner job) | via: loot-seed / config tie | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony Gunner produces combat-ready trained soldiers; their boss-drop output feeds the combat-supply economy axis (combat specialist in residence, not just a wandering player — someone has to supply the colony's defenders and trade the surplus)
- from: minecolonies_compatibility Butcher/Cook workers | via: M-28 colony route | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony Butcher and Cook produce processed meat/dishes cheaper than hand-crafting; any player who doesn't run a colony must trade with one who does, creating cross-player dependency
- from: colony worker jobs (Orchardist/Fluid Manager) | via: M-37 research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Orchardist and Fluid Manager jobs are unlocked via MineColonies research tree, not purchasable — only a colony-runner can offer their output; knowledge gates the production capability
- from: storage-network bridge (citizen_terminal/stock_keeper) | via: M-29 cross-route | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: colony workers pull from Create's stock-link storage; a production chain (magic items requested by colony, Create parts needed by colony) demands cross-specialist cooperation when colony logistics are wired in

## tide   [anchors: survival (1)]
- from: biome-locked rare fish (tide:abyss_angler, void/lava catches, deep-ocean exclusives) | via: loot-seed + seasonal gating (tide Serene Seasons compat) | to: survival/magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: seasonal biome-locked fish are catchable only in the right season and biome; they feed a magic ritual or a Create milling step (fishmeal/reagent) only while that window is open — scarcity forces expedition planning
- from: tide raw fish (c:foods/raw_fish tag) | via: create:milling → fishmeal intermediate | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw fish milled to fishmeal gives a processing-chain fertilizer/compost feedstock — a mundane conversion a Create factory would want, turning fishing surplus into farm input
- from: tide exotic fish drops (rare, boss-tier like tide:alpha_fish or special named catches) | via: occultism:ritual or ars_nouveau:imbuement as reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a deep-void fish as a ritual reagent — the exotic catch has arcane weight; an occult practitioner would pay for it
- from: tide fish as "sellable goods" to villagers / economy node | via: bare sell link | to: economy | motif: M-09 (retired) | power: everyday | tone: clash | verdict: REJECT | reason: M-09 retired; ambient sell endpoint is not a weave. Dossier's own "economy via numismatics" candidate falls here. Only accept economy link if it gates demand.
- from: tide:wooden_crate / tide fishing journal | via: loot-seed into structure chests | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding fishy-notes and rare lures into underwater ruins/shipwreck loot connects the fishing system to the exploration→combat-supply loop (someone cleared the dungeon to unlock the lure recipe note)

## domum_ornamentum   [anchors: decoration/support, MineColonies progression (1)]
- from: DO ornamental blocks (framed/timberframe/shingle families) | via: domum_ornamentum:architects_cutter consuming Create-processed stone (e.g. create:andesite_alloy_block, crushed stone forms) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding Create-processed stone or alloy blocks into the Architect's Cutter produces matching framed/shingled variants — Create's industrial material becomes architectural finish; the cutter gives processed stone a decorative destination
- from: DO ornamental blocks (metal-cased or alloy variants) | via: create:crushing back to crushed stone/raw + xp nugget | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: DO blocks crush lossy — the create:crushing recycler recovers some material from old decoration; this is the standard deco-recycle edge and keeps DO blocks on the Create web
- from: DO architects_cutter | via: M-28 colony route | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies Builder hut uses DO blocks natively for colony structures; a colony builder is the colony-locked route to construct the fancy framed/shingled buildings the colony's style demands — non-colony players must buy these from a colony runner
- from: DO purely as palette decoration with no cross-system dependency | via: bare "it looks nice" | verdict: REJECT | reason: decoration-only weave with no method routing is not a weave — must anchor through a method; the three above cover the real surface

## pantographsandwires   [anchors: Create, aeronautics (2)]
- REWORK: existing connections sound. Create anchor: inbound from 6 create:* recipe types incl. sequenced_assembly. Aeronautics anchor: the overhead-line infrastructure is the electric-train supply chain. OK — connections sound.
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke tag) | via: tfmg:coking or create:compacting as a shared industrial intermediate | to: Create (survival/fuel side) | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coke produced in Pantographs' wire-infrastructure chain is the same industrial intermediate TFMG's blast furnace wants; a Create factory's railway overhead-line byproduct feeds into TFMG smelting — circular industrial chain, nobody wastes coke
- from: pantographsandwires:graphite (c:item/ingots/graphite tag) | via: recipe as electrode/component in Create electrical machines (createaddition) or TFMG | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite ingots are a wire-production output sitting in a tagged slot — routing them into Create's electrical machines (electrodes, contacts) creates a cross-route: the railway builder feeds the electrical specialist
- from: pantographsandwires overhead-line infrastructure blocks | via: M-31 logistics-required bulk good (electric train lines span regions) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: building electrified rail between distant regional ore-depots is inherently a long-haul logistics project; pantograph infrastructure forces the aeronautics/rail arm to haul its own construction materials across routes it is building

## kambrik   [anchors: library/API (1)]
- LEAVE — zero-content Kotlin library; no items, no methods, no material surface.

## mcwdoors   [anchors: decoration/support (1)]
- from: mcwdoors metal/iron door variants (iron/deepslate/nether) | via: create:crushing back to iron nuggets/raw + xp nugget (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal doors crush lossy via Create — the deco-recycle standard edge; Create players can recover material from surplus metal door variants
- from: mcwdoors:*_modern_door / garage variants | via: M-28 colony route — Builder hut places MCW doors in colony structures | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony buildings use door variants; a colony runner is the colony-locked route to varied doors in bulk without hand-crafting each type
- from: mcwdoors wood variants as "any door is a door" | via: bare "it's wood" | verdict: REJECT | reason: no method routing; wood doors have no cross-system hook that earns an anchor — the metal-crush edge (M-04) covers the only coherent hook

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot instancing; no recipe types, no items to route, no material surface. The loot=yes flag means it touches structure loot but it only re-skins containers — it adds no loot of its own and is not a structure mod with its own loot tables to seed. No coherent 2nd anchor.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid button overlay; zero content surface, zero methods.

## occultengineering   [anchors: Create, magic (2)]
- REWORK: existing connections are strong and correctly assigned. Create anchor: inbound from create:compacting/filling/haunting/item_application/mixing/pressing (6 types). Magic anchor: inbound from occultism:ritual/spirit_fire. The spirit_solution reserved reagent is properly noted. OK — connections sound.
- from: occultengineering:sterling_silver (c:item/ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is a Create-processed occult alloy; a player who runs both Create and Occultism presses it into a premium coin — the occult-industrial specialist controls this currency denomination, making the magic-industrial intersection the mint for high-value coins
- from: occultengineering:phlogiport (wireless teleport logistics) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: phlogiports teleport item packages by address; an occult engineer offering remote delivery contracts performs logistics labor — a player-run courier service using eldritch teleportation, not cargo planes
- from: occultengineering mechanical upgrades (afrit/etc.) on Occultism spirits | via: M-29 cross-route | to: Create | motif: M-29 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: upgrading a summoned spirit machine (afrit miner) requires Create cogs + occult reagents; neither a Create-only nor magic-only specialist can do it alone — forces trade between the industrial and occult players

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — guidebook engine; 6 book items, zero gameplay methods, no material surface to route.

## bits_n_bobs   [anchors: Create, survival (2)]
- REWORK: existing connections are Create (inbound item_application + splashing; produces kinetic chain-drive machinery) and survival (decoration palette). OK — connections sound.
- from: bits_n_bobs tile blocks (andesite/asurine/crimsite/calcite/deepslate tiles, chairs) | via: create:crushing back to crushed-stone equivalents + xp nugget | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: standard deco-recycle edge — bits_n_bobs tiles are Create-stone derivatives; crushing them recovers crushed stone, tightening the deco↔Create recycling loop
- from: bits_n_bobs:chain_pulley / chain_rope (kinetic) | via: M-24 mechanical component | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: chain pulley assemblies are mechanical drivetrain components; feeding them as Aeronautics control-mechanism inputs (hoist/winch control surfaces) draws the Create kinetic library into the aeronautics build chain
- from: bits_n_bobs nixie boards as a display surface | via: bare "it's decorative" | verdict: REJECT | reason: display blocks without a recipe method or demand hook aren't a weave; decorative anchor is already covered

## underground_village   [anchors: survival (1)]
- from: underground_village Stoneholm villagers (discoverable trade posts deep underground) | via: loot-seed into village chest structures | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing the underground village of threats to access the market is a combat-supply scenario; rare Stoneholm loot seeds (boss-drop keys, magic reagents) reward the combat specialist while the settlement becomes an economy node underground
- from: underground_village as a regional economy node (underground merchants below a surface biome) | via: M-30 regional-scarcity gate — seating underground-exclusive trades here (only this biome's underground village sells X) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: seating region-locked trades in Stoneholm villages (a deep-cave mineral tool, a colony supply request) makes underground exploration economically necessary — the underground market is only accessible in that region
- from: underground_village Stoneholm as NPC coin faucet (villager → numismatics sell) | via: bare NPC sale | verdict: REJECT | reason: M-21 cut — trade-seam to NPC coin is a faucet, not player-run; the M-30 and M-34 economy links above are the valid routes

## create_confectionery   [anchors: Create, survival (2)]
- REWORK: existing connections are Create (inbound compacting/crushing/emptying/filling/mixing/pressing — 6 methods) and survival (food/candy effects). OK — connections sound.
- from: create_confectionery:hot_chocolate / bar_of_ruby_chocolate (effect foods — Regeneration, Phantom repel) | via: ars_nouveau:imbuement or occultism:ritual as exotic reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a chocolate with genuine magical effects (Regeneration from hot chocolate, Phantom repel from Restful) is a plausible alchemical ingredient; the occult chef discovers cocoa's eldritch side — themed as the "sugar-witch" archetype
- from: create_confectionery chocolate bricks/gingerbread deco | via: create:crushing back to cocoa/sugar intermediates (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: chocolate brick buildings can be milled back to cocoa dust; Create's industrial recycle loop absorbs the chocolate-factory's structural overproduction
- from: create_confectionery candies as "sellable luxury" (bare sell) | via: M-09 retired | verdict: REJECT | reason: M-09 retired; ambient endpoint, not a weave. Dossier notes this too.
- from: create_confectionery candy effects (Speed/Saturation) | via: M-26 consumption sink | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: candies are consumable effect items that players spend continuously (buffs expire, hunger returns); the confectionery chain is a repeating-demand sink — the chocolate factory's output is consumed, not stockpiled, so demand never zeroes

## attributefix   [anchors: support/fix (1)]
- LEAVE — pure attribute-cap patch; no items, no methods, no material surface.

## create_central_kitchen   [anchors: Create, survival (2)]
- REWORK: existing connections are Create (it bridges Create machinery to food mod cooking blocks) and survival (food chain automation). OK — connections sound.
- from: create_central_kitchen Blaze Stove (Blaze powering cooking 4×) | via: M-26 consumption sink — Blazes consumed as fuel creates repeating demand | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: the Blaze Stove burns Blaze rods/Blazes to speed cooking; the combat specialist who farms Blazes becomes the industrial kitchen's supplier — a consumption-sink cross-specialist dependency
- from: create_central_kitchen automated feast output (complete dishes via sequenced-assembly) | via: M-29 cross-route — sequenced-assembly sandwich/pie requires both FD crop inputs and Create processing parts | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a sequenced-assembly feast dish requires both farming output (crops, FD cook-intermediates) and Create infrastructure; neither a farmer nor a Create engineer alone can automate the full chain — joint production
- from: create_central_kitchen dishes as colony food supply | via: M-28 colony route | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies Cook hut uses FD/FCK recipes; a player running a colony kitchen via Central Kitchen's automation can supply processed colony food cheaper than any other route — the automated kitchen is the colony food-supply specialist

## fzzy_config   [anchors: support/library (1)]
- LEAVE — zero-content config engine; no items, no methods, no material surface.

## betterclouds   [anchors: support/client-visual (1)]
- LEAVE — client-only cloud renderer; zero gameplay surface.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / fugu_slice / guardian_soup (high-effort, effect-bearing seafood dishes) | via: M-12 farmersdelight:cooking processing chain — these are the finished output of the FD cooking chain applied to ocean mob drops | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean drops → FD cutting → FD cooking → finished dish; routing the guardian/tentacle drops through Create's milling step first (fishmeal intermediate from tentacles) extends the processing chain into the Create cluster — a coastal-Create synergy
- from: oceansdelight:fugu_slice (poison-risk delicacy, rare/dangerous) | via: occultism:ritual or ars_nouveau:imbuement as a dangerous ritual ingredient | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: fugu — a deadly delicacy requiring courage to prepare — is exactly the kind of dangerous organic that ritual magic demands; an occultist needs the sliced puffer fish to bind a harmful spirit or brew a paralytic tincture
- from: oceansdelight elder_guardian drops → combat farming → dishes | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardians are a dangerous combat target; a combat specialist farms them and trades the raw drops (tentacles, elder_guardian_slice) to the coastal kitchen operator who makes the high-value rolls — the combat/kitchen split is a natural player trade
- from: oceansdelight dishes as bare "sell to NPC" luxury | via: M-09 retired | verdict: REJECT | reason: M-09 retired; dossier's own "economy via numismatics sale" candidate uses retired motif. The M-34 combat-supply edge above is the correct economy link.
- from: oceansdelight:cooked_stuffed_cod / stuffed_squid as bulk food | via: M-31 logistics-required | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk food for a sailing/airship expedition (high-saturation seafood) is perishable-adjacent cargo; a coastal kitchen supplies the aeronautics crew's provisions, giving aeronautics a food-supply dependency and the coastal food specialist a volume buyer

== CHUNK COMPLETE ==
