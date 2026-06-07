# Phase 2 candidates — chunk-16 (context-fed)

## kubejs_create
LEAVE — pure Create-recipe scripting bridge; 0 blocks, 0 items, no material surface. Nothing to weave.

## farmersdelight   [anchors: survival, Create (2)]
Existing rows are dense and well-covered on M-12/M-16/M-26/M-28. Two gaps and one challenge follow.

- NEW | from: farmersdelight:apple_cider (pressed fruit juice) | via: vinery:apple_fermenting → vinery:wine_fermentation | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cider pressed at the FD cutting board feeds Vinery's fermentation casks — the cellar master's product is built on the farmer's harvest, a maturation step the solo player can't shortcut

- NEW | from: farmersdelight seasonal crops (cabbage/tomato/rice — Serene Seasons gated) | via: M-31 logistics framing — bulk seasonal surplus is heavy enough that trading at scale requires aeronautics/train runs | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a summer tomato glut is worth nothing if you can't move crates of it — the seasonal farm surplus is exactly the bulk cargo that justifies an airship trade route rather than a single backpack trip

- CHALLENGE | from: farmersdelight cooked meals as MineColonies colonist food / composting | via: minecolonies:composting / colony provisioning | to: economy | motif: M-12 | verdict: REJECT | hook: the dominant surviving M-28/M-12 rows file colony food provisioning as a cross-system weave, but FD and MineColonies both live in the survival-pressure / production space — colony workers eating cooked meals is intra-production depth, not an economy anchor; the genuinely distinct rows are the *M-28 cook-hut-requires-FD-cooking-equipment* ones (the hut demands the block, not just the food), which add a real demand gate; the bare "feed workers FD food" rows should be M-28 cook-hut-equipment ACCEPTs and composting-as-waste-loop M-32, not treated as economy links

## betterclouds
LEAVE — client-only volumetric cloud renderer; 0 items, 0 blocks. No material surface.

## mffs   [anchors: Create, survival (2)]
M-05/M-06 weaves authored (60-mffs.js). Existing rows cover the core well. One gap: the M-33 service framing and M-37 colony-commission framing both have 1 ACCEPT each; the M-37 row is the more defensible one. One challenge on M-29 magic-cross-route.

- NEW | from: mffs:projector / mffs:interdiction_matrix (endgame force-field system, built via Create sequenced-assembly) | via: MineColonies research gate — "Fortress Protocol" tier unlocks the colony's right to commission a projector; the colony cannot build one itself, only requisition from a Create specialist | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony's research tree unlocks the right to want a force-field — only the Create specialist who mastered the sequenced-assembly chain can deliver it; knowledge can't be bought, only the finished projector can

- CHALLENGE | from: mffs:fortron_capacitor / biometric_identifier | via: recipe cross-route requiring an Occultism spirit-trade material or occult sigil | to: magic | motif: M-29 | verdict: REJECT | hook: all existing M-29 proposals were correctly rejected — MFFS is explicitly sci-fi/industrial-futuristic in vibe; seeding an occult sigil or spirit component into a security device clashes hard with the mod's aesthetic; the Create spine (M-05/M-06) is the right and already-authored cross-route; adding a magic component to a biometric access card is tone-breaking with no intuitive player story

## create_sa   [anchors: Create, aeronautics (2)]
Already at 2 anchors. M-10 blazing tool imbuement is split and dossier recommends leaving. The M-15 boss-key netherite jetpack and M-17 exoskeleton energising are the cleanest unresolved candidates. One new nuance and one challenge follow.

- NEW | from: create_sa:andesite_jetpack_chestplate / brass_armor (base tier wearables) | via: minecolonies colony blacksmith hut — colony produces the lower-tier armor pieces cheaper than raw Create crafting, making the colony player the natural supplier for non-Create-specialist players | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony blacksmith stamps andesite plate faster and cheaper than a solo player running the Create chain — gear supply becomes a settlement-builder's trade good, not a self-serve errand

- CHALLENGE | from: create_sa:blazing_pickaxe / blazing_axe (blaze-powered tools) | via: ars_nouveau:imbuement or create_new_age:energising | to: magic | motif: M-10 | verdict: REJECT | hook: the existing split (5A/5R) reflects genuine tension; the dossier itself says "leave" — blazing tools are mid-tier Create-gadgeteer gear; routing them through arcane infusion muddies which pillar "owns" fire tools (Create already makes them via blaze rods), and M-10's own guardrail ("do not gate basic components behind infusion") bites here since the blazing line is a reachable mid-tier tool, not an endgame keystone; the existing M-17 exoskeleton-energising ACCEPT is the cleaner FE bridge

## vc_gliders   [anchors: aeronautics (1)]
Needs a 2nd anchor. M-05 Create pressing/mechanical_crafting for upper tiers has strong consensus (18 ACCEPTs) — that's the primary path. M-19 nether_upgrade haunting has 3 ACCEPTs and is clean. M-26 durability consumption is 1 ACCEPT and sound. One gap not yet proposed: the colony route as a demand-gate for the base iron tier.

- NEW | from: comforts:sleeping_bag_* / vc_gliders:paraglider_iron (base-tier exploration kit as a set) | via: minecolonies colony builder/scout request — colony scouting parties requisition gliders (iron tier) and sleeping bags from the pack's suppliers as expedition outfitting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony's long-range builder detachments request an iron glider and a sleeping bag before heading to a distant site — the pack's expedition-kit makers become colony suppliers, giving the glider a colony-route demand gate at the everyday tier without gating it behind complex craft

- NEW | from: vc_gliders:paraglider_netherite (top-tier glider, smith-upgraded) | via: recipe requiring an aeronautics structural alloy component (e.g. a Create Aeronautics hull plate or rigging part) as a shared ingredient | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: a netherite glider capable of high-altitude flight uses the same structural alloy as airship frames — personal and ship aviation share a supply chain at the top tier

- CHALLENGE | from: vc_gliders:paraglider_netherite (top tier) | via: create:sequenced_assembly (multi-stage canopy + frame assembly) | to: create | motif: M-06 | verdict: REJECT | hook: multiple rows proposed M-06 sequenced-assembly for the netherite glider; this oversizes the integration — gliders are mid-to-endgame traversal gear, not a pack flagship keystone; M-06 is reserved for items like MFFS projectors or multi-stage Create machines; a glider should earn its depth via M-05 (pressed sheets + mechanical_crafting, the accepted path) and M-20 (upgrade deployment), not a full sequenced-assembly chain that would make personal flight more costly than an airship drivetrain component

## appleskin
LEAVE — food-values HUD only; 0 items, 0 blocks, no gameplay mechanics. No material to route.

## creativecore
LEAVE — pure library (CreativeMD GUI/event/packet API); 0 items, 0 blocks, no content.

## formationsnether   [anchors: survival (1)]
The M-02 magic-reagent loot-seed has strong consensus (15 ACCEPTs) and is the clean 2nd anchor. M-34 combat-supply loot also has 3 ACCEPTs. The M-08 coin-from-loot rows are split; several were correctly rejected as NPC coin faucet. One new routing and one challenge.

- NEW | from: formationsnether Nether castle / sanctuary structure loot | via: loot-seed — seed a Nether-exclusive hostile-mob drop (e.g. a blaze-core fragment or wither-bone shard from the deeper castle structures) that functions as a combat-route supply item a combat specialist farms and trades | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Nether castle's inner sanctum only yields its rare component after clearing the hostile occupants — the combat specialist who raids it regularly can supply that material to crafters who can't survive the Nether long enough to farm it themselves; distinct from M-02 because the item itself is the combat-route trade good, not a magic reagent

- CHALLENGE | from: formationsnether structure loot | via: loot-seed of numismatics coins or coin-like sellables | to: economy | motif: M-08 | verdict: REJECT | hook: the 4 ACCEPT votes on M-08 coin-loot rows are understandable on the surface but contradict the player-run economy ruling — seeding minted coin directly into loot chests is an NPC coin faucet (value from outside the player economy); the correct economy link is M-34 (combat-route supply: a rare traded good the combat specialist harvests and sells), not coin itself; M-08 specifically means *players pressing ore into coin*, not finding coin in chests

## dungeons_arise_seven_seas   [anchors: survival (1)]
M-08 coin loot has strong consensus (7 ACCEPTs) — it is the cleanest 2nd anchor. M-02 magic reagent loot also solid. One routing not well-articulated yet: M-31 as the aeronautics-destination justification (more coherent than M-23 structural loot). One challenge on M-23.

- NEW | from: dungeons_arise_seven_seas galleons / floating fortresses / sunken ruins | via: worldgen placement — ocean structures are inherently distant from land bases; the bulk of loot found there (rare metal ingots, coin caches, exotic materials) is heavy enough that a solo swim-run is impractical at scale; the structures are the pack's canonical aeronautics/ship destinations | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: you can swim to a galleon once; to trade its salvage regularly you need an airship — the ocean structures become the recurring aeronautics freight run that justifies the logistics arm's existence, giving DASS a genuine economy-aeronautics anchor without forcing a fabricated loot drop

- CHALLENGE | from: dungeons_arise_seven_seas sea-dungeon loot tables | via: loot-seed (seed aeronautics structural alloy / hull schema / nautical blueprint) | to: aeronautics | motif: M-23 | verdict: REJECT | hook: multiple rows proposed M-23 (structural alloy → airframe) for DASS, but M-23's accepted form is "a fabricated structural part is required in an aeronautics construction recipe" — seeding a raw alloy or schematic into loot tables does not fit this motif cleanly; Aeronautics schematics are player-authored (Create Schematicannon), not droppable progression keys; the correct aeronautics link is M-31 (ocean structures as logistics destinations), not M-23; the persistent 1-3 ACCEPT votes on M-23 DASS rows should be collapsed into M-31

## betteranimationscollection
LEAVE — client-only animated mob model replacements; 0 items, 0 blocks. No material surface.

## create_new_age   [anchors: Create (1)]
Extensive rows. M-17 energising magic focus is consensus (23 ACCEPTs). M-24 motor→aeronautics solid (8 ACCEPTs). M-08 thorium→coin split. M-11 corium→spirit_fire is 10 ACCEPTs. One gap: reactor heat as a cross-route magic bridge (M-29), not just as an aeronautics steam engine driver. One challenge on M-08.

- NEW | from: create_new_age reactor heat output (solar_heating_plate / reactor → Create heat network) | via: create_new_age:energising → advanced Ars Nouveau or Occultism ritual requiring reactor-grade heat as a continuous energy source (i.e. the ritual furnace or spirit-fire only reaches the required temperature when fed from a nuclear/solar heat network) | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the highest-tier Occultism ritual or Ars infusion requires sustained heat no campfire can provide — only a nuclear- or solar-backed Create heat network runs hot enough; the magic specialist must either build or trade with the Create electrician, forcing the two production routes to depend on each other

- NEW | from: create_new_age:solid_corium (reactor waste, dense irradiated slag) | via: create:crushing → a dense industrial filler/sealant intermediate used as a required input in an aeronautics hull-sealing recipe (bulkhead compound) | to: aeronautics | motif: M-32 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor slag is dense and thermally inert — processed into a hull sealant it becomes the one material that fireproofs an airship boiler housing; the nuclear tier's waste feeds the aeronautics build chain

- CHALLENGE | from: create_new_age:thorium_ore / energised outputs | via: numismatics mint (player presses crushed thorium into coin) | to: economy | motif: M-08 | verdict: REJECT | hook: the thorium→coin rows have 18 ACCEPTs and 5 REJECTs — the REJECTs are right; M-08 is specifically about a *specialization that controls the settlement medium* (pressing scarce regional metal into coin is itself a craft players compete for), and that is genuinely true of thorium if it's the only viable reactor fuel; however, several rows frame this as a bare "sell thorium" link, which is the retired M-09 pattern; the valid M-08 case is narrow: thorium is the one ore where *minting the coin IS the reactor-fuel tradeoff* (you either burn it or mint it), making the coin-press a real economic decision — that version is worth one ACCEPT row but should not proliferate into multiple sell-side rows

## craftingtweaks
LEAVE — crafting-grid QoL overlay (rotate/balance/clear buttons); 0 items, 0 blocks. Nothing to route.

## byzantine   [anchors: survival / MineColonies (1)]
M-28 colony route is correct and established. The M-30 rows (Byzantine buildings demanding region-locked exotic stone) have 2 ACCEPTs and are the only genuine second anchor candidate. No new proposals — but one challenge on the M-30 framing and one note that M-05 rejection was correct.

- NEW | from: byzantine MineColonies schematics (Byzantine/Shogun/Nile style buildings using Domum Ornamentum exotic stone — end stone bricks, deepslate, basalt, nether bricks) | via: MineColonies Builder material request → region-locked stone sources | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Byzantine dome calls for deepslate and end-stone composite blocks that don't spawn in every region — the colony's material requests pull on the pack's regional scarcity, making a settlement's architectural ambition a driver of inter-regional trade; the colony player must either explore or buy the scarce stone

- CHALLENGE | from: byzantine schematic style as a pure decoration pack with no mechanical hook | via: any route | to: create/magic | motif: M-05 | verdict: REJECT | hook: Byzantine has 0 items and 0 blocks of its own; any recipe weave would be purely invented content not attributable to this mod; the M-05 proposal (mod's flagship built in its own machine) is categorically inapplicable to a schematic-data-only mod; the only valid anchor is through MineColonies material demand (M-28/M-30), and that is sufficient — forcing a Create or magic edge would be noise

## collective
LEAVE — Serilum shared-code library; 0 items, 0 blocks. Nothing to weave.

## undergroundworlds   [anchors: survival (1)]
M-11 spider_fang→spirit_fire is consensus (31 ACCEPTs). M-04 temple bricks→crushing is solid (14 ACCEPTs). Two gaps: the `irons_spellbooks:alchemist_cauldron_brew` alternative routing for spider_fang is meaningfully distinct from M-11 and deserves a standalone ACCEPT row. The M-30 regional-scarcity frame for spider_fang is genuinely novel.

- NEW | from: undergroundworlds:spider_fang (Black Recluse drop, spider-cave biome specific) | via: irons_spellbooks:alchemist_cauldron_brew — distill venom from the fang as a spell-potency amplifier ingredient in Iron's Spellbooks cauldron brews | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the alchemist's cauldron can extract the Black Recluse's venom as a concentrated amplifier reagent — an alternative routing to occultism:spirit_fire that connects the spider dungeon to the Iron's Spellbooks magic branch rather than just Occultism; the two magic paths drawing on the same mob-drop makes the fang a genuinely shared resource rather than a single-mod exclusive

- NEW | from: undergroundworlds:spider_fang (Black Recluse, spider-cave biome-specific spawn) | via: GTMOGS regional ore-gen / biome-specific underground placement — spider-cave biomes only generate under certain surface biomes; a player who settled in a spider-cave zone has the fang as a regional specialty, others must trade | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Black Recluse only lurks under certain underground biomes — where you built your base determines whether venom reagents are a local harvest or a trade dependency; scarcity reaches the magic lab through geography

- CHALLENGE | from: undergroundworlds:desert_charm / antidote_flask | via: ars_nouveau:imbuement / enchanting_apparatus upgrade | to: magic | motif: M-10 | verdict: REJECT | hook: rows proposing an arcane upgrade step for the charms (6 ACCEPTs) conflate adding magic cost with adding value; the Desert Charm and Antidote Flask are *finished utility items* won as dungeon rewards — routing them through an imbuement step to "activate" or "upgrade" them imposes a magic tax on items players already consider complete; M-10's guardrail ("do not gate a basic/everyday component behind complex recipe") applies: a poison-immunity charm is exactly the kind of everyday protective gear that should not require specialist magic processing to function; if the charms are too strong, tune the dungeon drop rate, not the recipe depth

## rolling_down_in_the_deep
LEAVE — client-side underwater camera/movement mod (Do a Barrel Roll extension); 0 items, 0 blocks. Nothing to route.

## comforts   [anchors: survival (1)]
All proposed weaves were correctly rejected except M-28 colony sleeping bag request (1 ACCEPT). One challenge on M-22 lunar hammock.

- CHALLENGE | from: comforts:hammock_* (inverse bed, day→night skip) | via: config/event gating — hammock use during a lunar event yields a celestial trace / moon-dew | to: magic | motif: M-22 | verdict: REJECT | hook: M-22 (lunar/celestial reagent) requires a material that is *only obtainable during a moon event* and feeds a machine or ritual — the hammock is furniture that functions as a QoL day-skip; "resting in a hammock during a full moon drops star fragments" invents a mechanics interaction this mod does not support (it has no on-sleep event hook for reagent drops, and KubeJS event scripting to add one would be authoring a new mechanic, not routing an existing material); the resulting reagent would be arbitrary and the tone (cozy camping gear → celestial ritual material) is a stretch; the dossier correctly says LEAVE and this should stay rejected

## mutantszombies   [anchors: survival (1)]
Loot=no confirmed — only spawn eggs registered, no special drops. The M-11 rotten-flesh-via-spirit-fire rows have 2 ACCEPTs, but this is a weak read.

- CHALLENGE | from: mutant mob drops (rotten flesh, bones — standard zombie loot) | via: occultism:spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: the 2 ACCEPT rows for M-11 rotten flesh through spirit_fire rely on standard zombie loot that every player already farms from vanilla zombies — there is nothing exclusive or distinct about mutantszombies drops (loot=no confirms no special items); the "augmented volume from an ambush" framing is interesting flavor but doesn't create a new material flow; routing generic rotten flesh through spirit_fire is an existing ambient path that predates this mod; an M-11 weave here would not add a new cross-system edge, only re-state a vanilla-drop path; the mod's contribution to the loop is purely the danger-pressure face (survival), which it earns without a second anchor

- CHALLENGE | from: mutantszombies mob spawns (harder zombie variants) | via: loot-seed | to: economy | motif: M-34 | verdict: REJECT | hook: the M-34 combat-supply framing (combat specialist farms unique drops and trades them) requires a *unique* drop that non-combat players actually want; loot=no means there are no drops to seed without authoring content from nothing; the mod's value is the elevated threat (harder zombies = more pressure), which feeds back into the loop as survival-pressure on all players, not as a tradeable commodity; M-34 requires a real loot surface that this mod does not have

## incontrol
LEAVE — server-side JSON spawn/loot rule engine; 0 items, 0 blocks. Design-time tool only; not a routable node.

== CHUNK COMPLETE ==
