# Phase 2 candidates — chunk-01

## comforts   [anchors: survival (1)]
- LEAVE — pure vanilla-recipe QoL/deco (sleeping bags/hammocks from wool+string); no method surface, no foreign material join key, no loot gating; a forced Create or economy edge on colored fabric would be noise.
REWORK: n/a (1 anchor, leave verdict)

---

## sable   [anchors: support/library (0 content)]
- LEAVE — zero-item physics-backend library; weaving happens in dependent mods (Aeronautics, etc.), not here.
REWORK: n/a

---

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit / dark_metal_pile | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark Metal is an alien cursed ore — of course the Create spine crushes it to a powder before it's usable in weapons.
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: A bundle of cursed bones burns cleanly in spirit-fire to yield a necrotic intermediate — the chaos mob's drop feeds the Occultism reagent chain.
- from: born_in_chaos_v1:dark_metal (pumpkinhead-boss drop tier) | via: loot-seed (boss-key gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Pumpkinhead boss drops dark-metal ingots that gate a complex Create forging recipe — kill the seasonal threat to unlock the craft.
- from: born_in_chaos_v1:dark_metal / argillite blocks | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco blocks → gravel/raw; dark_metal is functional, not decorative, and it's already handled via M-03 ore-doubling above — double-entry adds no loop value.
- from: born_in_chaos_v1:bagof_candy (seasonal) | via: extradelight:mixing_bowl or farmersdelight:cooking | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: bagof_candy is an ambient seasonal drop with no confirmed join-tag for extradelight/fd methods; forcing it into a cooking chain is contrived when the seasonal-event flavor already lives on M-15 boss-key side. Leave candy as flavor.
REWORK: OK — connections sound (1 anchor currently; candidates above add Create + magic)

---

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Saguaro fruit runs through the Mill like any crop — gives a dye-paste or food intermediate, weaving desert foraging into the Create spine.
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Giant mushroom caps are the pack's bulk organic yield — milling them into mushroom powder / dye-meal is the obvious Create tie for the agrarian forager.
- from: dynamictreesplus:saguaro_fruit (biome-locked — deserts only) | via: create:milling → output | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Saguaro only grows in desert regions; the milled output is region-locked, creating a goods-exchange reason across biomes.
- from: dynamictreesplus:red_mushroom_cap | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: giant mushroom caps are mundane fungal biomass — routing them as arcane reagents alongside cursed mob drops and exotic essences would cheapen the reagent pool; no thematic fit. Motif M-02 is for mob/boss drops, not forage.
REWORK: OK — connections sound (1 anchor; candidates add Create + regional economy)

---

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- from: cmpackagecouriers:cardboard_plane (autonomous flying delivery) | via: create:cutting + create:deploying (already used) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The cardboard courier is a cross-route dependency node — a player ordering parts from a remote specialist has to build and dispatch a courier, making the logistics arm a required step in the trade chain.
- from: cmpackagecouriers:location_transmitter | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: location_transmitter is an everyday-tier item (a signpost for couriers), not an endgame keystone; sequenced assembly depth would be disproportionate — violates the "depth scales with power" rule.
REWORK: OK — connections sound (2 anchors confirmed; M-29 above adds economy arm)

---

## controlling   [anchors: support/client UI (0 content)]
- LEAVE — zero-item client keybind search UI; no weave surface.
REWORK: n/a

---

## companion   [anchors: support/QoL (0 content)]
- LEAVE — zero-item behavior-only pet-safety mod; no weave surface.
REWORK: n/a

---

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:fish_skin | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Fish skin run through the mechanical press yields a dried-hide sheet — leather-equivalent from the fishery, tying the maritime production chain into Create's material web.
- from: createfisheryindustry:seafood_chowder / lobster_soup / mussel_soup (high-effort processed food) | via: minecolonies colony provisioning (supply request) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony workers demand high-calorie hot meals — the fishery's soups become a colony provisioning good that drives recurring demand from the fisher specialist.
- from: createfisheryindustry:cooked_lobster / cooked_cod_steak | via: extradelight:feast or extradelight:oven | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: createfisheryindustry already has survival as an anchor and already wires into farmersdelight:cooking/cutting; adding an extradelight feast chain is a depth-add on the same survival pillar, not a 2nd anchor — adds complexity without advancing the loop to a new system.
- from: createfisheryindustry:fish_skin (leather-substitute, bulk) | via: aeronautics construction (hull padding / gasket material) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is for load-bearing structural alloys/plates; leather-substitute fish skin isn't a hull structural — tone clash (maritime cannery → airframe structurals is a stretch), and the method call isn't coherent enough without a confirmed aeronautics recipe.
REWORK: existing 2-anchor set is sound; dossier candidate "economy via numismatics" (M-09) is retired — reject as noted.

---

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (player-powered SU source, early game) | via: minecolonies colony labor (builder/miner powered by colony members) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: A player "rents" treadmill time to a fellow specialist who needs SU without building a full windmill — the treadmill frames the labor-economy angle even at the lowest tier.
- from: createtreadmill:maid_motor (Soul Orb / Photo intake) | via: ars_nouveau:imbuement or occultism:spirit_fire to produce Soul Orbs | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Soul Orbs and Photos are touhou_little_maid items, not defined-as-arcane in the pack's magic web; routing TLM items through Occultism/Ars is a cross-mod forced edge with no thematic grounding — the maid flavor doesn't map to the arcane-reagent loop.
REWORK: OK — 1 anchor; M-33 above adds economy arm

---

## chat_heads   [anchors: support/client (0 content)]
- LEAVE — client-side chat-UI cosmetic; zero items, no weave surface.
REWORK: n/a

---

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh (biome-gated cold-spawn drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cursed frozen flesh burns in spirit-fire to yield a cryogenic transmutation intermediate — the Frostbitten's drop feeds the necromantic reagent chain.
- from: rottencreatures:magma_rotten_flesh (biome/heat-gated drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Magma-tainted flesh transmutes in spirit-fire to a heat-aligned occult intermediate — the undead fire-variant ties to the same reagent chain through a distinct elemental flavor.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Corrupted wart — a wart variant poisoned by chaos — is a natural arcane catalyst; imbuement refines it into a tainted essence that gates a mid-tier Ars spell.
- from: rottencreatures:frozen_rotten_flesh / magma_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: Run the thematic flesh through Create's soul-fire haunting to strip the curse and yield a mundane by-product — bridges the hostile-mob loop back to the Create spine.
- from: rottencreatures:treasure_chest (Dead Beard loot, rare) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The pirate-captain's treasure chest is the classic combat-route supply item — a combat specialist farms the rare drop and trades the treasure contents to non-combat players.
- from: rottencreatures:mob heads (decorative) | via: create:crushing (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mob heads are decorative trophies, not a deco-block palette; crushing a combat trophy for XP dust is thematically hollow and strips the collection reward. Leave heads as display items.
REWORK: OK — connections sound (1 anchor; candidates above add magic + Create + economy)

---

## tide   [anchors: survival (1)]
- from: tide fish roster (biome-locked catches — abyss_angler / void fish only in specific biomes) | via: regional catch tables (via: config tie / loot-seed) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Exotic fish are only catchable in their home biome; a fishing specialist in the right region is the sole supplier, making fish trade a region-scarcity good.
- from: tide raw fish (c:foods/raw_fish bulk stream) | via: createfisheryindustry:peeling + farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tide's expanded fish roster feeds directly into the Create Fishery's mechanical peeler — more species, more throughput through the existing Create processing chain.
- from: tide:angling_table (seasonal compat — Serene Seasons catch changes) | via: Serene Seasons seasonal catch gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Seasonal catch tables mean certain fish are only available in their season — a persistent demand cycle that keeps the fishery active year-round and prevents fish gluts.
- from: tide exotic fish (abyss_angler, void-catch variants) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: void/abyss fish are thematically aquatic-explorer flavor, not eldritch-arcane; forcing exotic fish into Ars imbuement as reagents clashes with the "explorer collects species" tone — the collection reward is the naturalist journal, not the spell, and the reagent pool should stay mob-drop and essence themed.
- from: tide fish (bulk cooked_fish output) | via: minecolonies colony provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colonies need food; processed tide fish (cooked) slots into colony worker feeding — creating recurring demand that the fishing specialist fills.
REWORK: dossier candidate "economy via numismatics" (M-09) is retired; replace with M-30 + M-28 above. "Create via milling/crushing fish trophies" is unnecessary — tide feeds into createfisheryindustry:peeling which is the correct Create method, no extra crush path needed.

---

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:jetpack (brass-tier personal flight) | via: MineColonies research gate (unlock requirement) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Personal flight via the Create jetpack becomes available only after a MineColonies blacksmith/engineer research branch — knowledge unlocks the capability, not just materials; players can't buy the blueprint.
- from: create_jetpack:netherite_jetpack (lava-traversal endgame) | via: boss-drop gate (M-15) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: netherite_jetpack already sits behind the netherite crafting tier (vanilla + Create brass chain); adding an extra boss-drop gate would be doubling depth on a gear item whose cost is materials, not lore — the jetpack isn't a keystone machine. Leave it at material cost.
REWORK: OK — connections sound (2 anchors; M-37 above adds economy arm)

---

## minecolonies_tweaks   [anchors: support/QoL (1)]
- LEAVE — tag-harmonization and crop-QoL glue; its output IS the c:tag surface that enables weaves elsewhere; it is not itself a weave node. Analogous to a library.
REWORK: n/a

---

## sable_sa_compat   [anchors: support/compat (0 content)]
- LEAVE — behavior-only compat patch (Create: SA × Sable); zero items, no material surface.
REWORK: n/a

---

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:processor / gamediscs:redstone_circuit (console components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: The retro console's circuit board and processor are clearly "assembled by machines" — routing them through Create's mechanical crafting table grounds the novelty toy in the Create spine without forcing depth onto a casual item.
- from: gamediscs:game_disc_* (mob-kill drop, skeleton kills mob → disc) | via: loot-seed | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: the disc-from-skeleton-kill mechanism is already the mod's native mechanic (100% drop), not a loot-table weave we'd author — seeding more drop paths would undermine the designed novelty gimmick (it's the whole loop). Leave the mechanic as-is.
REWORK: OK — 1 anchor; M-05 above adds Create arm

---

## mffs   [anchors: Create, survival (2)]
- from: mffs:projector / interdiction_matrix | via: create:sequenced_assembly (already authored via 60-mffs.js) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: (existing, authored) — no new proposal needed.
- from: mffs:coercion_deriver (Fortron generation, sci-fi base-defense) | via: aeronautics structural (force-field projectors on an airship hull) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: A mobile MFFS projector mounted aboard an Aeronautics ship is the endgame armed airship — force-field emitters in the hull require the same structural alloys (M-23) as the hull itself, tying base-defense tech into the logistics-arm build milestone.
- from: mffs biometric_identifier / blank_card | via: MineColonies research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: biometric access cards are security utilities, not a production capability — gating them behind research is security theater, not an anti-erosion wall. The real economy tie on MFFS is via M-23 airship usage, not card management.
REWORK: existing Create+survival (M-05/M-06 authored in 60-mffs.js) is the gold-standard example per dossier; OK — connections sound.

---

## configuration   [anchors: support/library (0 content)]
- LEAVE — config-screen framework library; no items, no weave surface.
REWORK: n/a

---

## extradelight   [anchors: survival, Create (2)]
- from: extradelight grain/coffee crop inputs | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling grain and roasting coffee through Create's millstone and mixing tank is the obvious pre-step for the Oven/Vat — the bakery reads as Create's downstream, not a parallel kitchen.
- from: extradelight:evaporator fluid-reduction (syrup, salt, reduction) | via: create:mixing (already inbound) + create:compacting | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Salt and syrups from the Evaporator feed back into Create mixing as food-chemistry intermediates — Create handles the thermal step, extradelight handles the culinary refinement.
- from: extradelight feasts (colony provisioning) | via: minecolonies colony food supply (hut provisioning) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony workers provisioned with extradelight feast blocks eat better and work faster — the feast becomes a colony supply good that the kitchen specialist produces on demand.
- from: extradelight:drying_rack / evaporator outputs (dried herbs, spices, salt) | via: maturation aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Dried spices and aged reductions must sit on the rack before they're usable — the time-axis creates an aging specialist role and gives the food economy a "matured goods" tier.
- from: extradelight seasonal crops (citrus, ginger — biome-gated by serene seasons) | via: Serene Seasons seasonal gate | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Citrus and ginger ripen in the right season; out-of-season you rely on preserved stores — seasonality drives the food economy's ebb-and-flow without a mechanical system.
- from: extradelight luxury feasts (baked alaska, high-tier pastries) | via: economy sell link | to: economy | motif: no-motif | verdict: REJECT | reason: "luxury feasts are sellable" is the ambient endpoint of the loop, not a weave — reject per the player-run economy rule. The economy link is already covered by M-28 colony provisioning above, which actually gates demand.
REWORK: dossier candidate "economy via numismatics (M-09)" is retired — superseded by M-28 + M-35. Create milling deepening (noted as STRONG in dossier) is confirmed via the two ACCEPT rows above. OK on existing 2-anchor structure.

---

## fxntstorage   [anchors: Create, survival (2)]
- from: fxntstorage:hardened_backpack (top-tier, hardened sheets) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The hardened-tier backpack is an endgame wearable; multi-stage sequenced assembly (harden sheets → frame → pack housing → upgrade assembly) makes it a flagship Create build rather than a one-step craft.
- from: fxntstorage:brass_backpack upgrade modules (flight, magnetism) | via: MineColonies research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Backpack upgrade modules (flight, magnetism) unlock through the MineColonies engineer research tree — you need a functioning colony to reach them, not just materials; the capability is knowledge-gated.
- from: fxntstorage:storage_controller / smart_passer (logistics network) | via: aeronautics logistics arm (ship-board storage routing) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A ship-board storage controller routes bulk cargo across the aeronautics network — fxntstorage's smart_passer becomes the on-ship logistics node that makes bulk cargo delivery viable at scale.
- from: fxntstorage:cardboard_storage_box | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: cardboard boxes are functional storage, not decorative blocks; the crushing-back-to-gravel framing doesn't make thematic sense for a utility container. Leave recycling to the player's own judgment.
REWORK: OK — 2 anchors sound (Create via mechanical_crafting, survival inventory QoL); candidates above add Create depth + economy + aeronautics.

---

== CHUNK COMPLETE ==
