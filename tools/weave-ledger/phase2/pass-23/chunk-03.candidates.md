# Phase 2 candidates — chunk-03

## yungsapi   [anchors: support/library (1)]
- LEAVE — pure code library (0 items, 0 blocks, no recipe-types, no loot); zero content surface; nothing to route.

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs tile/chair/lamp blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: andesite-tile floors and brass lamps crunch back into crushed stone and metal scrap in the Crushing Wheels — decoration has a recycling cost, not a one-way sink.
- from: bits_n_bobs:chain_pulley / chain_rope (kinetic component) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: chain-drive assemblies are the mechanical heart of a rope-winch lift on a Create Aeronautics ship; chain pulleys become a required drivetrain sub-component for certain propulsion/hoisting rigs.
- REWORK: existing "survival" anchor is recorded but thin — bits_n_bobs contributes decoration, not survival pressure. The anchor label should probably be `Create + deco` rather than `Create + survival`; no authored weave enforces the survival side.
- OK — Create connections sound (items made-by create:item_application + create:splashing confirmed in jar).

## moonlight   [anchors: support/library (1)]
- LEAVE — pure library/API (1 block, 2 items are internal helper entries; no recipe-types; no loot); no player content surface to route.

## ichunutil   [anchors: support/library (1)]
- LEAVE — zero-surface library (0 blocks, 0 items, 0 recipe-types, no loot); nothing to route.

## sparsestructures   [anchors: support/worldgen-config (1)]
- LEAVE — config-only worldgen mod (0 items, 0 blocks, no loot, no recipe-types); operates only on structure placement registry; nothing to route.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye (themed eye requiring undead source) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a player stuck on the undead eye can perform a dark ritual — sacrificing a wither skull + occult reagents — to transmute it; End access has a magic craft-path alongside the exploration one.
- from: endrem:corrupted_eye (chaos/dark themed eye) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the corrupted eye is attuned through an Ars imbuement with Source and a dark reagent (e.g. a mana gem charged with corruption), giving magic a role in the most thematically resonant End gate.
- from: endrem:guardian_eye | via: create:sequenced_assembly (derpack:incomplete_guardian_eye chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the guardian eye is meant to be fought for (Elder Guardian); a multi-step assembly chain trivialises the exploration intent and makes end-gate farming a factory task — depth cuts against the survival/exploration pillar here.
- from: endrem loot tables (eyes in structure chests) | via: loot-seed (seed weave-relevant drops into endrem's structure loot) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board that pays coin for rare endrem eyes gives the exploration loop an economic payoff — the combat/exploration→economy arm; a player who finds two guardian_eyes can sell the spare.

## ldlib2   [anchors: support/library (1)]
- LEAVE — developer plumbing library (2 dev/test blocks, 1 dev item; no recipe-types; no player content); nothing to route.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore runs through Crushing Wheels for doubled salt dust — the standard ore-doubling reward; a pantry staple that suddenly has a production incentive.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-gated aged goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese wheels are a time-locked luxury — a player who sets up a dairy cask operation has a consistent coin earner; scarcity (milk, goats, aging time) keeps it from flooding the market.
- from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark from cinnamon logs mills into cinnamon dust in a Millstone, giving the new wood type a processing identity and feeding spiced-food recipes that need ground cinnamon.
- from: expandeddelight chili_pepper / asparagus (c:crops) | via: farmersdelight:cooking (existing) — no new weave needed here | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: these crops are already routed through farmersdelight:cooking/cutting (existing inbound weave per dossier); recording a second M-12 for the same method would be redundant, not a new pillar.
- REWORK: none — existing anchors are honest (survival only, no 2nd claimed yet); the three ACCEPTs above deliver the 2nd anchor (Create + economy).

## charta   [anchors: survival/deco (1)]
- from: charta:empty_wine_glass / empty_beer_glass (glassware) | via: create:pressing or create:item_application | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: pressing/item_application on plain glassware has no thematic sense — glass + Create pressing outputs sand or nothing; forced deco-through-Create with no hook a player would nod at.
- from: charta bar furniture (card_table, bar_stool, bar_shelf) | via: loot-seed (seed charta furniture into tavern/village structure loot) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: card tables and bar furniture appearing in village/dungeon tavern chests gives players a ready-furnished economy hub to set up shop around; structures become social hubs without a recipe gate.
- from: charta wine/beer glass items as a vessel for Vinery/expandeddelight drinks | via: recipe (fill glass via supplementaries:faucet or create:filling) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a filled wine glass (Vinery wine poured into a charta glass) is a luxury item for a player-run tavern — a coin earner via Numismatics trade; the card table becomes the economic context, not just decoration.
- REWORK: current anchor is "survival" which is arguable for a card-game/bar mod. No explicit weave authored yet; the two ACCEPTs above establish economy as the real 2nd anchor.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (geode-worldgen consumable) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mining cores, cracked out of their geode shells in Crushing Wheels, expose an FE-amplified coin-minting substrate — processing the geode properly yields more cores than raw hand-mining, tying coin production to the Create processing chain.
- from: createblockchain coin faucet (FE→coins output) tracing back to scarce metals | via: M-08-adjacent (processed scarce metal→FE→coins) | to: Create | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: this is a refinement of the existing economy+Create anchors, not a new one — the faucet already *is* the economy↔Create link; no new pillar added. Flagging as REWORK note instead.
- OK — economy + Create connections sound; the FE→coin faucet with geode gating is a coherent loop. No new pillar needed; deepening the scarcity tie (mine the core → crush for yield → feed miner → coin) is a Phase 3 config/recipe note, not a Phase 2 weave candidate.
- REWORK: the cryotheum_coolant mechanic is currently undocumented in terms of what produces it — if cryotheum has no craft path (it's a Thermal Expansion fluid normally), there's a potential dead-end. Flag for Phase 3 to verify coolant has a supply chain or is self-seeded.

## supplementaries   [anchors: Create, survival (2)]
- OK — connections sound. Already woven via create:haunting, create:mixing, create:splashing (confirmed in jar); farmersdelight:cutting; flax crop ties to survival. No new pillar needed; deeply cross-woven.
- (noted in dossier: economy latent via jars/safes for shop builds — no action needed at this depth)

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats rare hats (endgame grab-bag tier) | via: loot-seed (seed rare hat grab-bags into boss loot tables) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: defeating a boss rewards a rare hat grab-bag alongside coin — cosmetic and economic payoff from the combat→economy arm; a hat with known rarity can be traded for coin between players.
- from: simplehats:grab_bag (uncommon/rare variant) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hat grab-bags are a vanity luxury that a player sells to the next person who wants a specific look — coin economy gets a cosmetic sink, which is exactly how player-run currency gets demand.
- REWORK: "support" anchor is the honest label but cosmetic mods *can* tie into economy via trade/vanity demand — the two ACCEPTs above establish that 2nd anchor without forcing a recipe.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client camera/movement behavior (0 items, 0 blocks, no loot, no recipe-types); touches elytra flight feel only; no content surface to route.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — pure client UI (0 items, 0 blocks); adds a pause-menu button; zero gameplay surface.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — pure runtime memory optimization (0 items, 0 blocks, no recipe-types, no loot); no content surface.

## biolith   [anchors: support/worldgen-API (1)]
- LEAVE — pure worldgen library/framework (0 items, 0 blocks, no recipe-types, no loot); biome-placement plumbing for dependents; nothing to route.

## buildguide   [anchors: support/client-QoL (1)]
- LEAVE — pure client render overlay (0 items, 0 blocks, no recipe-types, no loot); shape-guide visual aid only.

## jeed   [anchors: support/client-UI (1)]
- LEAVE — JEI documentation addon (0 items, 0 blocks; its recipe-types are JEI display providers only, not craftable methods); no material surface to route.

## northstar   [anchors: Create, aeronautics (2)]
- from: northstar:titanium_ingot (scarce off-world metal) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: off-world titanium is the rarest processed metal in the pack — minting it into high-denomination coin ties space exploration to the economy; the rocket crew becomes the pack's metal bankers.
- from: northstar:tungsten_ingot | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: tungsten, smelted from Martian ore, mints into heavy coin — the hardest material becomes the hardest coin; economy pillar gains a third scarce-metal spine alongside the surface metals.
- from: northstar:advanced_circuit | via: numismatics sell / trade | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits (engraved off-world, requiring titanium + Create processing) are the specialist trade good — a non-rocketry player buys them from the space crew; economy pillar gets an endgame technology luxury.
- from: northstar:biofuel (northstar:biofuel_bucket) | via: TFMG distillation | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: biofuel distilled through TFMG's processing column refines into Aeronautics propulsion fuel — the space-side crop/biomass loop feeds the airship engine bay; two Create-adjacent mods sharing an industrial supply chain.
- from: northstar:electrolysis_machine (splits water → hydrogen/oxygen) | via: northstar:electrolysis accepting magic-sourced fluids | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: electrolysis is a physical/chemical process; running a magic-origin fluid through it has no thematic coherence — the tone clash between lab-machine and arcane fluid is real; no motif fits cleanly (M-10 wants an arcane infusion method, not an electrolysis machine).
- OK — Create and aeronautics connections sound (deeply made-by Create processing methods per jar; rockets are the aeronautics arm).

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen overhaul (0 items, 0 blocks, 65 c:tags but all biome/surface tags — no material c:tags; loot=yes but structure loot uses vanilla blocks only). Its real weave contribution is *indirect*: regional terrain shapes where ore biomes and other mods' structures land — that's scarcity-foundation support, not a recipe-routable edge. No coherent 2nd anchor weave possible without forcing.

== CHUNK COMPLETE ==
