# Phase 2 candidates — chunk-03

## createadditionallogistics   [anchors: create, aeronautics (2)]

REWORK: The aeronautics anchor is listed as "seats wired to Stock Keepers/train logistics." The flexible-shaft / lazy-shaft angle is the stronger Create anchor (lag-free kinetics for big factory runs). The aeronautics seat claim is thin — the short/tall seats are for Stock Keeper mobs (train seats), which is logistics-adjacent but not a named aeronautics weave. Flag for review: the aeronautics anchor should be tightened to "seat variants used in train/drone logistics platforms" or narrowed to logistics-support and the aeronautics label left for mods with proper Aeronautics recipes. Does not invalidate the 2-anchor count, but the aeronautics claim is weak.

- from: lazy shafts/cogwheels | via: aeronautics contraption builds | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: lazy cogwheels/shafts are general Create kinetics components, not a drivetrain for Aeronautics propulsion/control specifically; M-24 is for propellers/engines/control surfaces, not kinetics infrastructure. The perf-support role is the real justification for keeping this mod, not a second weave edge.

- from: flexible shafts (andesite/brass encased) | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: M-23 is structural alloy for airframes/hulls; flexible shafts are kinetics components, not hull material. Tone clash: a flexible shaft is not a structural airframe element.

OK — existing connections are passable (Create clear; aeronautics thin but not wrong — seat variants genuinely serve train/drone platform builds). Primary value is the perf-support role. No new cross-system weave found that survives red-team.

## sparsestructures   [anchors: support (1)]

LEAVE — genuine zero-content (no items, no blocks, no loot tables). This is a worldgen-config-only mod that dilates structure spacing. There is no material surface to route through any method. Its effect on the loop is indirect (rarer structures → exploration is more rewarding, pressure from danger is maintained), but that is an ambient design effect, not a weave.

## rolling_down_in_the_deep   [anchors: support (1)]

LEAVE — genuine zero-content, client-only camera/movement mod. No items, no blocks, no loot tables; no material surface whatsoever. It is a feel-polish mod for underwater swimming (extends Do a Barrel Roll's camera freedom to diving). Nothing to route through any method.

## smartbrainlib   [anchors: support (1)]

LEAVE — genuine zero-content library. Pure AI/Brain framework code consumed by mob mods (Alex's Mobs, Naturalist); zero items, zero blocks, zero loot. No material surface to route.

## sounds   [anchors: support (1)]

LEAVE — genuine zero-content, client-only audio mod. 170+ sound effect replacements/additions; no items, no blocks, no loot. Nothing to route through any method.

## drones   [anchors: aeronautics (1)]

- from: drones:iron_rotor | via: create:pressing (iron plates → shaped rotor) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a rotor that lifts a drone is a pressed mechanical part — of course it goes through the rolling mill / press before it flies.

- from: drones:ion_thruster | via: create:sequenced_assembly (precision parts + electrum wire from createaddition + brass casing) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: ion thrust is advanced propulsion; it should cost more process steps than an iron rotor, not just more iron. Naturally pulls in createaddition electrum wire (a Create-electric intermediate) — cross-mod without forcing it.

- from: drones:wood_rotor | via: crafting table (vanilla wood + string) | to: create | motif: M-05 | power: everyday | verdict: REJECT | reason: everyday-tier item; do NOT gate the starter rotor behind Create processing — that violates the cost-model guardrail (basics ≈3×, not complex chains). Leave wood rotor at vanilla crafting depth.

- from: drones:pocket_drone (assembled) | via: aeronautics logistics role | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is service-for-hire labor, not a goods trade; a pocket drone is a finished good, not a service. The ambient "it's sellable" angle is M-09 retired. The economy tie would need a demand-gating mechanism (e.g. a colony hut that requires drones for automation — M-28) and that is speculative with no colony recipe hook defined. Reject until a concrete demand-gate exists.

- from: drones:drill (ability block) | via: the drone assembly mechanic pulling in a Create drill block as the ability component | to: create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: the drone assembly mechanic accepts *any* block as a body part — it doesn't specifically require a Create drill; it accepts minecraft:drill via the block-building system. Forcing a Create-drill cross-route dependency would be authoring a restriction, not a recipe. The dossier says "the drill/thrusters are natural Create-material sinks" but the drill is the *drone's* drill block, not create's drill. No clean M-29 here without an authored restriction.

## create_central_kitchen   [anchors: create, survival (2)]

REWORK: OK — existing connections sound. Create (food automation machinery) + survival (food production output) is the correct 2-anchor pairing. No weak or arbitrary edges.

- from: automated feast dishes (sequenced-assembly sandwich/burger/pie output) | via: colony food demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies colony consumes food continuously — an automated kitchen that mass-produces finished dishes feeds colony upkeep demand, giving the Create-kitchen a colony-economics role beyond just "cook faster." This is demand-gating, not ambient sellability.

- from: Blaze Stove (Blaze → cooking-speed booster) | via: magic route — ars_nouveau:imbuement or occultism:ritual — attune a Blaze flame into a more efficient fuel catalyst | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the Blaze Stove is a mechanical device (put a Blaze in, get cooking speed); it isn't a magic item, it's a Create machine. Routing it through arcane infusion would be thematically forced — a Blaze burner is already Create's fire idiom. Tone clash.

- from: sauce/drink fluids (ice-cream, sauce, drink outputs as fluids) | via: createaddition:liquid_burning (novelty fuels) | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: burning food sauces as machine fuel is thematically absurd — they're finished beverages/condiments, not fuel feedstocks. Tone clash kills this.

## create_ironworks   [anchors: create (1)]

- from: create_ironworks:tin_ingot (c:ingots/tin) | via: numismatics coin-press (Create-processed tin → player-minted coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a fresh regional ore — the pack's scarcity foundation hands you a new metal that has to be processed through Create before it becomes the settlement medium; a tin coin tier between copper and gold fits the loop's minting-as-specialization arc naturally.

- from: create_ironworks:steel_plate (c:plates/steel) | via: aeronautics hull recipe (structural plating for mid-tier airframes) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel plate is the obvious hull material between iron sheet and something exotic — a mid-tier airship frame that demands Create-forged steel plate makes aeronautics cost real metallurgy, not just base iron. Tier-appropriate depth.

- from: create_ironworks:steel_ingot → create_ironworks:steel_plate | via: create:pressing then aeronautics | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: This is the same edge as above, just clarifying the processing chain: ore → crushed tin → bronze alloy → steel (multi-step Create chain) → pressed plate → airframe. The GregTech-style depth is intentional and appropriate for mid-tier hulls.

- from: create_ironworks:bronze_ingot (c:ingots/bronze) | via: ars_nouveau:enchanting_apparatus (as a foreign metal catalyst in magic rituals) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Bronze has no thematic magic identity here — it's an industrial alloy in this mod's framing, not a mystical metal. Forcing it into an arcane infusion as a catalyst is arbitrary. Tone: industrial alloy → arcane catalyst doesn't read as coherent to a player. Reject.

- from: create_ironworks:steel_ingot | via: M-30 regional-scarcity gate (tin is regionally generated by 3 biome modifiers → steel requires tin → steel-gated items are region-dependent) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin's 3 biome-modifiers already lock it regionally — steel inherits that scarcity, so the players in a tin-rich biome become the steel suppliers for the server; the scarcity foundation does its job without extra authoring.

- from: create_ironworks:brass_hammer / brass_paxel | via: create:deploying (tool-application upgrade — apply a hammerhead plate to a crafted handle) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the Hammer/Paxel are mid-tier tools, not endgame flagships — M-20 is the "light single-step" deploy-upgrade, meant for upgrades not for baseline crafting. The tools already go through Create alloying; adding a deploy step on top doesn't add meaningful depth for everyday tools. Borderline over-engineering a mid-tier item. Reject.

## durabilitytooltip   [anchors: support (1)]

LEAVE — genuine zero-content (client-side tooltip overlay, no items/blocks/loot). The only surface is rendering numeric durability on damageable items. Nothing to route through any method.

## sliceanddice   [anchors: create, survival (2)]

REWORK: OK — connections sound. The Slicer (kinetic FD cutting automation) + Sprinkler (fluid-over-crops) is exactly the Create↔survival bridge this mod exists to be. It already instantiates M-12 by design.

- from: sliceanddice:sprinkler (water/fluid distributer) | via: config tie — route create:fluid output (e.g. Ars Nouveau source-infused water or Occultism-blessed fluid) through a Sprinkler to apply a magic buff to crops | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: the Sprinkler uses piped fluid — what the fluid *is* doesn't matter to the Sprinkler (it sprays whatever it receives). Making a magic-infused fluid do special crop effects requires authoring a new fluid type and a new mechanic, which is outside Phase 2 scope. This is a mechanism-to-build, not a method-routing through existing methods. No existing method to route through. Reject.

- from: sliceanddice:slicer | via: create:mixing — run slicer output (chopped vegetable/meat) into a mixing-bowl recipe chain for an intermediate food product that feeds colony food demand | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: the slicer output already is standard FD-processed food — routing it into colony food demand is an ambient endpoint (everyone needs food), not a demand-gating weave specific to the Slicer. The weave belongs to FD/central-kitchen, not the Slicer specifically. No distinct hook for the Slicer here.

No new accepted weaves for sliceanddice — it sits cleanly on its 2 anchors.

## createaddition   [anchors: create (1)]

- from: createaddition:charging (FE-charge method) | via: charging Iron's Spellbooks gear / magic batteries / Ars Nouveau mana storage that accepts FE | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: If a magic specialist's tools hold an electric charge, they need the Create electrical layer to top up — the charging station becomes the point where the magic and Create pillars intersect, and neither can ignore the other.

- from: createaddition:seed_oil (from farmed seeds via liquid_burning) | via: createaddition:liquid_burning → FE → aeronautics generator | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed oil is a biofuel derived from crops — running an airship on farm-pressed seed oil ties the aeronautics fuel supply to the survival/farming pillar, so the logistics arm literally runs on what the survival players grow.

- from: createaddition:bioethanol (fermented biomass) | via: createaddition:liquid_burning fuel for aeronautics | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: this is the same edge as seed_oil above (both are liquid fuels feeding an engine via liquid_burning). Bioethanol is a parallel path to seed oil — reporting it as a separate ACCEPT would double-count the same motif. The seed_oil edge is the cleaner, more distinctly-themed version. Reject as redundant.

- from: createaddition:rolling (rolling mill method — ingots→rods/sheets/wires) | via: cross-route with create_ironworks — roll steel/bronze ingots into rods/wires | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: The rolling mill is a natural home for create_ironworks' new alloys — bronze rods, steel wire — as byproducts of the metal-processing chain. The two Create addons' outputs feed each other rather than running in isolation.

- from: createaddition:biomass (farmed → biomass pellets) | via: minecolonies composting (minecolonies:composting) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: biomass → compost is a sensible loop, but minecolonies:composting already accepts various organic items. The link would be "biomass pellets can be composted in a colony composter." This is a valid ambient use but not a demand-gating weave; there's no locked exclusive or progression gate, just an alternate compost input. Too thin a hook to ACCEPT.

## glitchcore   [anchors: support (1)]

LEAVE — genuine zero-content library. Loader-abstraction API backing Glitchfiend mods (Serene Seasons, Biomes O' Plenty, TerraBlender). Zero blocks, zero items, zero loot. Nothing to route through any method.

## quark   [anchors: support (1)]

- from: quark storage crates (apple_crate, carrot_crate, gunpowder_crate, leather_crate, etc.) | via: create:crushing (crush crate → bulk loose material + XP nugget; lossy deco-recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A storage crate that can be deconstructed in a crushing wheel gives bulk-farm automation a natural overflow valve — surplus produce stored in crates can be reclaimed through Create if storage overflows, and the XP byproduct is the standard Create crushing reward.

- from: quark:ancient_wood / ancient_planks (rare cave-biome wood from Glimmering Weald) | via: create:milling (mill ancient wood → rare tinder/sawdust intermediate) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: "ancient wood mills into rare sawdust" doesn't add meaningful loop function — the Glimmering Weald's value is aesthetic/building, not as a Create feedstock. The milling output would need to do something unique for a second system, and there's no existing method that would want "ancient sawdust" specifically. No-motif end result for this specific edge.

- from: quark:vertical_slabs / brick_variants (decorative blocks) | via: create:crushing (deco-recycle back to base stone + XP nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's hundreds of decorative stone and wood variants are natural targets for Create's deco-recycling motif — crushing a polished andesite vertical slab back into andesite gravel is coherent industrial behavior; players who overbought building materials can reclaim them through Create.

- from: quark:abacus | via: economy — the abacus as a player-carried currency calculator / trade aid, positioned as an economy utility | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the abacus is a decorative/cosmetic item (counts clicks/taps); it has no game-mechanical economy effect. Naming it "trade aid" is flavor, not a weave. No method to route through.

- from: quark:smithing_rune (method: quark:smithing_rune — applies rune texture/enchant-like cosmetic to smithed gear) | via: cross with magic — gate a particular rune pattern on an Ars Nouveau source or Iron's Spellbooks arcane essence to add a visible magic mark | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: quark:smithing_rune is cosmetic (it's a texture application at a smithing table, not a gameplay buff from an arcane source). Gating it on a magic reagent would gate a cosmetic behind magic, which is a forced weave — the player value is visual, not power. Tone: smithing cosmetic ≠ arcane infusion.

## kubejs_create   [anchors: support (1)]

LEAVE — genuine zero-content (scripting bridge). Registers no items, blocks, or recipe-types of its own. It is the tool that *builds* Create-recipe weaves; it is not itself a weave target. Nothing to route through any method.

## immersive_armors   [anchors: survival (1)]

- from: immersive_armors:heavy_chestplate / heavy armor set (iron block construction) | via: create:pressing (press iron blocks → heavy iron plates as crafting input for heavy set) then create:mechanical_crafting (assemble the plate-reinforced chestplate) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Heavy plate armor assembled through a Create press and mechanical crafter is the natural GregTech-style depth escalation — vanilla iron blocks become pressed plates become a properly-engineered chestplate; a player nods "of course heavy armor takes real metalwork."

- from: immersive_armors:steampunk armor set | via: create:sequenced_assembly (multi-part assembly — pressed brass plate + cogwheel trim + leather strap + brass rivet applied via deployer) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Steampunk set is the one armor set that thematically belongs in a Create pack — it *should* require an assembly line. A sequenced-assembly chain (plate→rivet→cog trim→strap) is the only coherent way to make a steampunk chestplate; anything less undermines the aesthetic.

- from: immersive_armors:divine armor set | via: ars_nouveau:enchanting_apparatus (finishing the divine set by infusing it with source gems / blessing ritual) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Divine armor's passive (blocks one full attack per minute) reads as divine protection — it *should* pass through an arcane infusion or blessing apparatus to acquire that ability. A player who sees "Divine Chestplate" entering an enchanting apparatus says "of course."

- from: immersive_armors:prismarine armor set | via: create:splashing (wash raw prismarine shards in running water → refined prismarine scales as a crafting ingredient, the Create ocean-processing angle) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: Create:splashing washes items for ore-doubling/cleaning purposes; "refining prismarine shards into scales" via splashing is a stretch — the shards are already a finished crafting material, and there's no existing splashing output that produces "refined prismarine." The connection reads as forced rather than coherent. Reject.

- from: immersive_armors:bone armor set (bone material + set bonus that pacifies skeletons) | via: occultism:spirit_fire (transmute bone into a spirit-infused bone reagent for the set) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Bone armor pacifying skeletons is a fun mob-behavior mechanic, but routing the crafting through occultism spirit fire would imply undead magic is required for bone-themed survivalist gear. Tone is borderline — it's not incoherent, but the bone-armor fantasy is a ranger/hunter trope, not an occultist one. Reject on tone: the survivalist reading is stronger than the occult reading here.

## wits   [anchors: support (1)]

LEAVE — genuine zero-content (command utility). No items, no blocks, no loot. The /wits command identifies structures by registry name. Nothing to route through any method.

## mru   [anchors: support (1)]

LEAVE — genuine zero-content library. Mineblock's Repeated Utilities: rendering helpers, config, dynamic textures for itsmineblock11's mods. Zero items, zero blocks. Nothing to weave.

## fishingreal   [anchors: survival (1)]

- from: live-fish-entity spawns (fishingreal intercepts a fishing catch → spawns the corresponding live fish entity) | via: createfisheryindustry:bait_trap (the Create fishery mod's trap can catch live fish at a location — fishingreal's entity spawns are fish entities that could populate a fishery trap zone) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fishingreal operates at the moment of rod-reel, not as a method other mods feed into. The live fish entities it spawns are standard mob entities — createfisheryindustry traps catch fish in water generically. There is no authored link between "fishingreal spawns a fish entity" and "bait_trap catches it" — they're ambient co-presence, not a method-routing. The weave belongs to createfisheryindustry, not fishingreal. Reject.

- from: live-fish-entity spawn mechanic | via: naturalist:net (Naturalist's butterfly net can catch small entities) — fishing → entity → net-caught → survival collection loop | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: fishingreal already anchors to survival — it adds immersive fishing feel, which is already its survival contribution. Proposing a net-catch chain for fish entities would just loop back to survival again. M-26 is for consumption-sink demand renewal, not for chaining one survival mechanic into another. No new anchor gained. Reject.

fishingreal has no discoverable 2nd anchor — its behavior is entirely a survival-layer flavor tweak with no item surface. LEAVE the 2nd anchor unfilled; the one anchor is appropriate for its support-adjacent role.

## owo   [anchors: support (1)]

LEAVE — genuine zero-content library. GUI/config/networking framework; zero items, zero blocks, zero loot. Nothing to route through any method.

## moreoverlays   [anchors: support (1)]

LEAVE — genuine zero-content (client HUD overlay). Light-level spawn markers, chunk grid, JEI search highlight. Zero items, zero blocks. Nothing to route through any method.

== CHUNK COMPLETE ==


