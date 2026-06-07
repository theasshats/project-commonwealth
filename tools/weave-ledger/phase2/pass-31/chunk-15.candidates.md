# Phase 2 candidates — chunk-15

## fishingreal   [anchors: survival (1)]
- LEAVE — pure behavior tweak (no items, no loot, no recipe surface); weaving belongs to fish-content mods sitting beneath it (createfisheryindustry, farmersdelight), not here.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-only render overlay, zero items/loot/methods; nothing to route.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:steel_ingot (c:ingots/steel) | via: create:mechanical_crafting / sequenced_assembly | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: structural steel from the nuclear-industry chain goes into airframe and hull construction — the reactor complex supplies the material the shipyard demands.
- from: createnuclear:uranium_ore (c:ores/uranium) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: uranium ore run through a Create Crushing Wheel doubles the yield before the enrichment step, exactly as the ore-doubling motif intends.
- from: createnuclear:lead_ingot (c:ingots/lead) | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: radiation-shielded cargo compartment linings use lead plate — a natural structural-alloy supply route from the nuclear tier to ship hulls.
- from: createnuclear:reactor_core (endgame) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: assembling a reactor core through a multi-stage sequenced chain (casing → control-rods deployed → core inserted) makes it a proper flagship build, not a crafting-table click.
- from: createnuclear:steel_ingot → as coin feedstock | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: processed steel is a scarce refined metal a specialty player mints into coin — the industrial tier's settlement medium.
- from: anti-radiation armor as combat supply | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a reactor-zone specialist farms/crafts the hazmat gear and supplies it to players venturing into irradiated zones — a combat/danger supply chain.
- from: radiation-as-survival-hazard | via: config tie (cold-sweat/seasons) | to: survival | motif: no-motif | verdict: REJECT | reason: thematic adjacency only; no method exists to bridge radiation hazard to Cold Sweat or Serene Seasons — no-motif.
- REWORK: dossier candidate "economy via numismatics sell — refined uranium / steel" cites M-09 (retired) — re-expressed as M-08 (player-minted currency) in the ACCEPT rows above; the bare sell-link is rejected per rules.

## formations   [anchors: survival (1)]
- LEAVE — scatter-structure worldgen that uses only vanilla/existing block palettes; registers no items, no loot tables (loot=no in digest), no recipe surface; no coherent 2nd anchor is reachable without forcing it.

## searchables   [anchors: support (1)]
- LEAVE — pure client UI search library; zero gameplay surface.

## kotlinforforge-5.11.0-all   [anchors: support (1)]
- LEAVE — Kotlin language adapter; zero player-facing content.

## glitchcore   [anchors: support (1)]
- LEAVE — loader-abstraction library for Glitchfiend mods; zero player-facing content.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore (item/ores/salt) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt rock crushed in a Create Crushing Wheel yields salt dust (doubled) — a light one-step bridge that ties the food-pillar salt into the tech spine exactly as ore-doubling intends.
- from: expandeddelight:cinnamon (item/dusts/cinnamon) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: dried cinnamon bark run through a Create Millstone produces cinnamon dust for cooking — the milling step is the natural intermediate between harvest and kitchen use.
- from: expandeddelight:cheese_wheel (aged) | via: meadow:cheese or create_cheese:maturing | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels must age in a maturing cask before they're ready — a time-gated good that naturally creates an aging specialist and a trade good with stored value.
- from: expandeddelight:salt | via: create:mixing (as a reagent) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt as a mixing reagent (brine solutions, preservation processes) anchors the food-crop chain to Create fluid processing.
- from: expandeddelight:crops (asparagus/chili/sweet_potato) | via: create:milling / farmersdelight:cooking | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: crop-based foods are consumed as the survival pressure that renews demand — the closing arrow of the loop.
- from: economy sell link (bare) | verdict: REJECT | reason: "aged cheese / salt are natural sell-goods" — ambient endpoint, not a weave; rejected per M-09 retired rule. Re-expressed as M-35 maturation above.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / ring_gear / worm_gear | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: advanced gear sets (planetary / worm) are exactly the kind of precision drivetrain components a high-tier airship propulsion and control system needs — a mechanic specialist who masters gear trains supplies the shipyard.
- from: gnkinetics:industrial_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: industrial gears are the structural drive components in Aeronautics propellers and engine assemblies; making them via Create mechanical crafting keeps the tech chain coherent.
- from: gnkinetics parts (general) as forced magic edge | verdict: REJECT | reason: no thematic or method hook into magic/survival; the mod IS Create kinematics — a second pillar beyond aeronautics would be forced.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single-item damage-testing prop; no material surface, no loot, no processing; forcing a weave would be contrived.

## bakery   [anchors: survival (1)]
- from: bakery outputs (cakes/tarts/breads) | via: minecolonies:composting (waste) / colony cook supply | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony cook requests high-tier baked goods to feed citizens — bakery output becomes the food supply chain the colony depends on, gating citizen productivity behind the baking specialist.
- from: flour / wheat | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing wheat through a Create Millstone to produce flour ties the bakery chain to the Create spine — a natural intermediate step before the crafting bowl.
- from: bakery:baked goods (luxury tier) | via: emergent player trade | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: high-saturation baked goods are consumed as the pressure that sustains repeating demand from non-baker players.
- from: bare sell link (M-09) | verdict: REJECT | reason: dossier cites M-09 "finished cakes as luxury sell-goods" — M-09 is retired; bare sell is the ambient endpoint; the real economy link is M-28 colony route (accepted above).
- from: magic via Ars Vitalic Sourcelink | verdict: REJECT | reason: dossier rates it WEAK and it's better owned by dedicated farm mods; baked goods as Source feedstock is thematically thin — tone clash between bakery warmth and abstract arcane energy.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — biome-finder utility; no material outputs, no loot (loot=no), nothing to route; genuinely zero content surface for a weave.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items with no material outputs, no loot, and no method surface; deepens Create build ergonomics but has no coherent 2nd pillar without forcing it.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg | via: aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's Distillation Tower refines crude oil into diesel and gasoline — the exact propulsion fuels Aeronautics engines burn; the industrial chemistry tier IS the airship fuel supply chain.
- from: tfmg:steel_ingot | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG steel plate is the natural structural material for ship hulls and airframes; the Blast Furnace output feeds directly into the shipyard.
- from: tfmg:combustion_engine / flywheel | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG combustion engines and flywheels are the mechanical heart of an Aeronautics propulsion assembly — the industrial-engine tier supplies the drivetrain.
- from: tfmg:aluminum_ingot | via: aeronautics lightweight-hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: aluminum is the lightweight structural alloy for high-speed airframes — TFMG's aluminum chain (bauxite → cast → refined) earns its place as the advanced ship-tier material.
- from: tfmg:steel / tfmg:fuels as coin feedstock | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: processed steel and refined fuel are the most effort-intensive outputs of the industrial tier — a refinery specialist mints coin from them, making the heavy-industry chain the pack's primary currency mint.
- from: tfmg:plastic | via: create:mixing or tfmg:vat as cross-route input | to: Create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG plastic is required in some Create or magic-adjacent recipes (insulation, foci housings), forcing the magic/tech specialist to trade with the industrial specialist — nobody self-sufficient.
- from: tfmg:sulfur / tfmg:saltpeter | via: createbigcannons ammo recipes | to: economy (combat supply) | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's chemical byproducts are the ingredients for gunpowder-based cannon charges — the industrial complex supplies the combat specialists.
- from: "economy via steel/fuel as luxury good→coin" (M-09) | verdict: REJECT | reason: dossier cites M-09 (retired); bare sell is ambient endpoint; reframed as M-08 player-minted currency in ACCEPT row above.
- from: survival via flamethrowers/napalm combat | verdict: REJECT | reason: dossier rates it WEAK; combat-flavor without structural method hook; no motif that applies without forcing.
- OK — Create anchor is already established via made-by methods (create:compacting/crushing/mixing/pressing/sequenced_assembly). Aeronautics anchors newly proposed here.

## createaddoncompatibility   [anchors: support (1)]
- LEAVE — zero items/blocks; pure tag/priority unification glue. No material surface to route. Caution flag (from dossier) noted: verify it never mis-merges galosphere palladium as silver.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:mithril_ore (c:ores/mithril) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril ore through a Create Crushing Wheel yields crushed mithril + a byproduct — the standard ore-doubling reward before smelting; connects the magic-metals chain to the Create spine the same way every other ore does.
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's arcane_essence is already the reserved Iron's-side magic currency (ledger §2); bonding it to source_gem via imbuement reinforces the Ars↔Iron's currency web — a player must choose or trade between the two magic schools.
- from: boss mob drops (apothecarist, ice_spider) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boss/elite mob drops (apothecarist reagents, ice-spider venom) feed the Alchemist Cauldron brews — isolated dangerous mob drops get a purpose as magic inputs, and the combat specialist supplies the magic specialist.
- from: irons_spellbooks:scroll (one-shot consumable) | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: scrolls are one-shot cast items — a magic scholar crafts scrolls and sells them to combat/survival players who can't (or won't) invest in spellbooks; a labor/service trade route.
- from: irons_spellbooks:pyrium (endgame alloy) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: pyrium gear assembled in a sequenced chain (raw → alloyed → quenched → inscribed) makes the endgame magic-metal cost feel earned rather than a single craft.
- from: alchemist cauldron fluid output | via: create:filling / create:emptying | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create's emptying/filling can batch-load reagent fluids into the cauldron and extract finished brews — the industrial-scale potion factory that needs both magic and tech specialists.
- OK — connections sound; ≥2 anchors already established (magic + Create via emptying/filling). New depth proposed above.
- REWORK: dossier's note "M-09 luxury sell" for scrolls should be retired; re-expressed as M-34 combat-route supply (accepted).

## meadow   [anchors: survival (1)]
- from: meadow:alpine_salt (item analog to c:dusts/salt) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt from the mountain biome is milled in a Create Millstone into fine salt dust used as a processing reagent — connects the meadow's regional harvest to the Create food/chemistry chain.
- from: meadow:cheese_wheel (aged) | via: create_cheese:maturing | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: meadow cheese must mature before it's trade-ready — a dairy specialist who tends cows and ages wheels in a mountain creamery becomes a genuine supply bottleneck.
- from: meadow:chambray_wool (felted textile) | via: create:mechanical_crafting or aeronautics envelope recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: felted chambray wool is a natural envelope and lining material for lighter-than-air airships — the alpine textile becomes a structural input in balloon/aerostat construction.
- from: meadow crops (oats, lavender, yarrow) | via: serene seasons gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine crops grow only in cold/alpine seasons — the meadow biome's harvest is season-locked, creating a scarcity window that drives trade for mountain-regional goods.
- from: economy "cheese as luxury sell-good" (M-09) | verdict: REJECT | reason: dossier cites M-09 (retired); bare sell is ambient; the real economy edge is M-35 maturation (accepted above).
- from: "Create heat via cheese mass" | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: warm milk + rennet processed in a Create heated mixing basin into cheese mass — the Create mixing step as the industrial-scale dairy intermediate before the cheese form press.

## createlowheated   [anchors: Create (1)]
- LEAVE — single-block heating tweak with no tradeable outputs and no magic/economy/survival method surface; it deepens the Create pillar's resource management but has no coherent 2nd anchor.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — invisible code library; zero player-facing content.

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies research (University) | via: minecolonies research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: advanced colony hut upgrades are gated behind University research that a single player can't buy — only the knowledge of how to build the capability; the research gate is the anti-erosion wall that keeps the colony specialist non-replaceable.
- from: minecolonies colony food supply | via: minecolonies:zero_waste / colony cook request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony cook requests specific high-tier foods (bread, soup, cooked meat) from the outside world — bakery/farming players supply the colony, closing the demand loop between the settlement and the food production pillar.
- from: minecolonies quarry output (ore streams) | via: create:crushing | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: colony quarries provide a bulk ore stream that feeds Create ore-processing chains — the colony route and the Create route are cross-dependent: you need Create parts to build quarries (already woven), and the quarry output feeds Create to make more parts.
- from: minecolonies:ancienttome (research gate) | via: boss-drop loot-seed | to: survival/economy | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient tomes (needed to unlock top University research tiers) are seeded into boss loot tables — the combat specialist farms dangerous content to unlock the colony specialist's next tier, forcing cross-specialization trade.
- OK — ≥2 anchors established (survival + Create). New economy/depth edges proposed above; no REWORK needed on existing connections.

== CHUNK COMPLETE ==
