# Phase 2 candidates — chunk-06

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical mushroom caps | via: farmersdelight:cooking / extradelight:oven | to: survival→economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a morel or agarikon simmered into a gourmet dish commands a real coin price — forager becomes supplier
- from: mushroomquest rare/mythical mushroom caps (finished dishes) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effect fungi are exactly the kind of regional specialty a coast or forest player trades inland; low floor, no forcing
- from: mushroomquest deadly cap (death-cap, destroying-angel type) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: deadly caps are everyday drops (not rare enough to justify a magic reagent role without trivialising spirit_fire); depth rule — everyday material, too light a step to anchor a 2nd pillar on its own. Could complement but not drive the weave.
- from: mushroomquest mythical-tier cap | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier lists mythical mushrooms but gives no hard rarity signal from the wiki (SWEEP only); until power-tier is grounded, gating imbuement on an unverified-rarity drop is balance-pending to a degree that makes it a LEAVE candidate — flag for Gate 2 review rather than outright accept.

**Net verdict:** 2nd pillar = economy, via cooking + sell (M-12 + M-09). The food-processing chain to luxury sell-good is coherent and low-risk.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising (the mod's unique method) | via: create_new_age:energising → magic tool/focus charge | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: charging an Ars Nouveau spell focus or Iron's Spellbooks focus through the Energiser makes the electric tier the gateway to late magic gear — tech feeds magic
- from: create_new_age:corium (reactor waste product) | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: radioactive corium transmuted by spirit-fire into a corrupted occult reagent; nuclear byproduct becomes a magic ingredient — the tone of "dangerous material → occult process" is convincing
- from: create_new_age:thorium_ore (scarce regional biome-mod ore, 2 modifiers) | via: create:crushing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Thorium is functionally nuclear fuel, not a coin-mintable metal — there is no natural "mint thorium into coin" step that a player would nod at. The ore-to-coin arc fits iron/copper/platinum, not fissile material. Tone clash (industrial nuclear ≠ monetary metal). Keep Thorium in the tech/energy lane.
- from: create_new_age advanced_motor / reinforced_motor (Create mechanical component) | via: aeronautics drivetrain | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a motor that converts FE→rotation is exactly what you'd bolt into an airship drivetrain; the electric engine tier makes ships faster or powers thrust control

**Net verdict:** 2nd pillar = magic (M-17 charging + M-11 corium sink) and aeronautics (M-24 motor→drivetrain). The energising method cleanly bridges to magic; M-24 is a natural fit for a powered motor going into propulsion.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork crushed_raw_materials/* (palladium, platinum, mythril, etc.) | via: create:crushing → minting | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the whole point of ore-doubling is more refined metal — those extra ingots are the natural mint feedstock; scarcity → processed yield → coin is one clean arc
- from: createmetalwork crushed_raw_materials/palladium (= galosphere silver, already flagged in CLAUDE.md) | via: create:crushing → ars_nouveau:imbuement or occultism | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: galosphere palladium is a reserved reagent (CLAUDE.md explicit: never unify galosphere:*silver* as silver). Using the crushed form as a magic reagent risks creating a path that semantically equates palladium with silver — too close to the reserved-reagent conflict. Needs a Gate 2 human call.
- from: createmetalwork molten_steel (a structural alloy output) | via: aeronautics airframe/hull ingredient | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: molten steel poured into hull plates is exactly the fabricated structural material airframes should cost; positions metalwork as the foundry for the shipbuilding supply line

**Net verdict:** 2nd pillar = economy (M-08) + aeronautics (M-23 steel hull). Both are clean, non-forced, and scale sensibly with the mod's role as the pack's foundry layer.

## dynamictreesplus   [anchors: survival (worldgen) (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling → food intermediate (e.g. cactus pulp / dye) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling a saguaro fruit for a desert-fruit pulp (or a natural dye) is the same everyday step Create applies to any crop; light single step for an everyday item — depth rule satisfied
- from: dynamictreesplus:brown/red mushroom caps (bulk harvest) | via: farmersdelight:cutting / create:milling | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this weave stays inside the survival pillar (FD cooking is survival, Create milling of common mushrooms is also just survival/Create). Doesn't earn a *distinct* second pillar for the mod unless the output routes onward — and for a bulk ambient worldgen ingredient this is too minor to warrant a formal 2nd anchor.
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro_fruit is a single ambient drop; selling it alone is too thin to ground an economy pillar. The milling route (M-12) is the better weave — a processed intermediate is a stronger hook than a raw forage sell.

**Net verdict:** 2nd pillar = Create, via create:milling of saguaro_fruit (M-12, everyday, one light step). Thin but honest — this is a worldgen ambient mod. Anything more would be forced.

## dungeons_arise_seven_seas   [anchors: survival (exploration) (1)]
- LEAVE — no craftable outputs, no processing methods, and no items of its own. The only wiring surface is loot-table additions (vanilla or economy drops), which is a loot-table edit external to this mod's identity. Aesthetically rhymes with aeronautics (naval/ships) but these are static jigsaw structures with no functional vessel mechanic — forcing an aeronautics edge would be purely thematic with no method to ride. Any economy link belongs to whichever mod owns the loot, not to the structure generator itself.

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco/tool blocks (copper_bars, copper_chain, copper_lantern, etc.) | via: create:crushing → copper nuggets + xp_nugget | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: all the copper deco the mod adds should crush back to nuggets + raw copper, the same as any copper block — completing the Create copper economy and preventing deco from being a dead end
- from: copperagebackport copper tools/armor | via: create:crushing (lossy, as M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: same crushing-recycle arc — copper gear → nuggets is consistent with vanilla copper block behavior and M-04 precedent; light single step for everyday material
- from: minecraft:copper_golem_statue (the Copper Golem) | via: aeronautics / logistics | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the Copper Golem is a low-tech item-sorting mob, not a mechanical component. Routing it into Aeronautics as a drivetrain part would be tone-clashing and mechanically incoherent — a living statue isn't a rotor blade. No-motif match for the aeronautics angle.

**Net verdict:** 2nd pillar = Create, via create:crushing M-04 deco recycle. Copper deco→Create is clean, coherent, and exactly what M-04 was designed for.

## bakery   [anchors: survival (1)]
- from: bakery finished luxury goods (cakes, tarts, cupcakes, jams) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a strawberry cake or chocolate tart is the definition of a high-effort sellable luxury — bakers supply the settlement food market; direct M-09 fit
- from: wheat/flour → bakery chain | via: create:milling (wheat → flour as alt input) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat in a millstone to get bakery-grade flour pulls the baking chain onto the Create spine; one light step for an everyday ingredient — depth rule satisfied
- from: bakery baked goods (surplus) | via: ars_nouveau Vitalic/Agronomic Sourcelink (food near altar generates Source) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: the Agronomic Sourcelink passively generates Source from nearby crops/food, but bakery's finished goods are the wrong end of that mechanic (it wants growing crops, not placed cakes). The passive Source-from-food angle is weak and the breadcrumb is better owned by a farming mod. Not coherent enough to anchor a 2nd pillar.

**Net verdict:** 2nd pillar = economy (M-09 luxury sell) + Create (M-12 milling into flour). Both are clean. Economy is the stronger anchor; Create milling is a light but honest integration.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop, endgame boss artifact) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice_crystal is exactly the kind of boss keystone the design doc puts at the top of a Create sequenced-assembly chain — "defeat the frost boss to unlock the cryogenic compressor" is a player-legible on-ramp
- from: mowziesmobs wrought-metal / earthrend_gauntlet materials (Wroughtnaut drop) | via: create:sequenced_assembly (as M-06 gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ferrous Wroughtnaut is a metal giant — his wrought-iron drop gating advanced Create metalwork is thematically read-at-a-glance; M-15 boss-key unlock
- from: mowziesmobs boss drops (generic pool) | via: numismatics bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: paying coin bounties for killing the Wroughtnaut or Frostmaw gives the economy a combat-to-coin loop; tagged (provisional motif)
- from: mowziesmobs:sol_visage (Barako drop, sun-powered mask) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a sun-god mask refined through arcane imbuement into a solar-magic catalyst is tone-sensible and powers-appropriate; endgame drop → endgame magic reagent, depth rule satisfied
- from: mowziesmobs:elokosa_paw (crescent/gibbous/full moon variants) | via: lunar-event gating / ars ritual | to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Elokosa is explicitly tied to moon phases (paw variants track the moon) — routing the full-moon paw as a lunar-reagent input to a moon-phase-gated ritual is a natural motif-M-22 composition; the item names confirm the moon-phase mechanic is in-mod

**Net verdict:** 2nd pillar = Create (M-06/M-15 boss-gate) + magic (M-10/M-22). Multiple strong connections; this is among the richest weave targets in the chunk.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight finished seafood dishes (elder_guardian_roll, fugu_slice, cooked_stuffed_squid) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean-specialist food that inland players can't easily source is the archetypal regional trade good; coast players sell to inland, the scarcity-trade loop fires
- from: oceansdelight:fugu_slice (poison-risk delicacy) | via: occultism:spirit_trade / alchemist cauldron | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: fugu is a food (poison effect on eat), not a spirit-transmutable reagent — the tone is culinary, not occult, and forcing fugu into spirit_fire just to earn a magic pillar would feel arbitrary to the player. The mod's value is as a food/economy mod; the magic angle is a stretch.
- from: oceansdelight raw guardian drops (cut_tentacles, elder_guardian_slab) | via: create:cutting extended chain | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the FD cutting board already handles ocean mob prep; adding a create:cutting step would duplicate the existing processing chain rather than extend it. No coherent additional Create output (the seafood chain terminates at food, not a Create-useful intermediate).

**Net verdict:** 2nd pillar = economy (M-09 luxury sell). Single clean anchor; the food-to-trade-good arc is strong. Magic and Create extensions don't survive red-team.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — recipe-only datapack; no items, no blocks, no entities. All its recipes are already Create-type. No material outputs to route to another pillar, and no method of its own. Deepens the Create spine (its entire purpose) rather than bridging pillars. No coherent 2nd pillar exists without inventing one from nothing.

== CHUNK COMPLETE ==

