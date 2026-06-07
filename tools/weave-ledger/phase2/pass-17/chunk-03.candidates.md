# Phase 2 candidates — chunk-03

## upgrade_aquatic   [anchors: survival (1)]

Power-read: The mod is a large aquatic-world expansion with 319 blocks, 20 biome-modifiers, and a full
set of raw/cooked fish, berry/pie foods, and coral/driftwood decorative families. Its foods reach the
farmersdelight cooking/cutting ecosystem via c:tags. Driftwood is a wood set already processed by
woodworks:sawmill. Its coralstone family is a distinct stone deco. Fish are everyday-to-mid items;
the thrasher mob is a hostile aquatic danger (mid-tier survival).

EXISTING ANCHOR: survival — ok, solid.
2nd-anchor target: economy or Create.

- from: upgrade_aquatic cooked fish / seafood foods (cooked_pike, cooked_perch, cooked_lionfish, pie) | via: farmersdelight:cooking → numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok — cooked luxury seafood selling at a dock town is completely natural | verdict: ACCEPT | hook: A player who settled near the ocean can cook exotic fish into prized dishes and sell them — a maritime food-trade node the inland crew can't replicate.

- from: upgrade_aquatic:acan_coralstone / brain_coralstone / branch_coralstone deco family | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — deco stone returning gravel + xp nugget fits vanilla-plus expectations | verdict: ACCEPT | hook: Coralstone slab surplus crushed back to gravel keeps the Create recycling web coherent across the full deco palette.

- from: upgrade_aquatic raw fish (c:foods/raw_fish, raw_pike, raw_perch, raw_lionfish) | via: createfisheryindustry:peeling (mechanical peeler) | to: Create | motif: M-12 | power: everyday | tone: ok — both mods are aquatic-food focused, the peeler is precisely for raw fish | verdict: ACCEPT | hook: The Fishery Industry peeler processes Upgrade Aquatic's catch into fish skin and steaks — a natural merge of two aquatic-content mods into one processing chain.

- from: upgrade_aquatic driftwood / riverwood wood set | via: woodworks:sawmill (already inbound) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Already exists as an inbound weave (made-by line confirms woodworks:sawmill). Logging it as reject to record the evaluation — this is already handled.

- from: upgrade_aquatic:thrasher mob (hostile aquatic danger) | via: loot-seed → bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok — a dangerous ocean predator being a bounty target makes perfect sense | verdict: ACCEPT | hook: A posted bounty on thrashers pays coin — the danger of the deep has an economic side, pulling combat players toward the ocean.

REWORK: No existing connections to flag (single anchor mod). OK for new links.

---

## dummmmmmy   [anchors: support/QoL (1)]

Power-read: One item (target_dummy). A placeable combat-test prop. No loot table (loot=no), no recipes routing through it, no material outputs.

- LEAVE — genuine zero-content prop; its only function is displaying hit numbers. No coherent 2nd anchor possible; forcing an edge (e.g. "its head drop is a magic catalyst") would be entirely contrived.

---

## cmpackagepipebomb   [anchors: Create (1)]

Power-read: 4 items (pipebomb, pipebomb_rigged, tnt_rigged, pipebomb_white). No loot, no output materials,
no processing method. A novelty PvP trap riding Create's package delivery system.

- LEAVE — tiny novelty/PvP gag. Its content surface is the explosion itself, not a material. No coherent 2nd anchor; a "gunpowder reagent" edge would be forcing it.

---

## jeresources   [anchors: client-only UI/support (1)]

Power-read: 0 items, 0 blocks, 0 loot tables (loot=no). Pure display — surfaces existing worldgen/mob-drop data in JEI. No processing, no materials.

- LEAVE — zero-content documentation UI. A client support role by design. Its value to the pack is transparency about the scarcity layer; it does not participate in the loop itself.

---

## farmersdelight   [anchors: survival, Create (2)]

Power-read: 132 blocks, 187 items, 72 c:tags, loot=yes. Already at 2 anchors. The foundational cooking
mod — its cutting/cooking methods are consumed by the entire food web. Strongly woven into Create via
create:milling/mixing/filling (existing). Its foods feed the survival diet system directly.

EXISTING CONNECTIONS REVIEW:
- survival anchor: sound — it's the primary cooking mod driving the diet system (pressure).
- Create anchor: sound — create:milling → flour is a natural multi-step grain chain; the inbound methods confirm this.
OK — connections sound.

New/deeper candidates:

- from: farmersdelight high-effort dishes (stews/pies — apple_pie, beef_stew, baked_cod_stew, etc.) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok — cooked specialty food as sellable trade goods is the most natural food→economy bridge | verdict: ACCEPT | hook: A farmstead player cooks up stews and pies to sell at a market stall — the kitchen becomes a revenue center, not just a subsistence tool.

- from: farmersdelight:tomato / cabbage / onion / rice crops | via: create:milling → flour/paste → farmersdelight:dough | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: This is already the established inbound weave (create:milling is confirmed in made-by line). Noting for completeness — already authored direction, no new edge needed.

- from: farmersdelight seasonal crops (cabbage/tomato flourish in summer; rice in wet season per Serene Seasons integration) | via: config-gated Serene Seasons seasonal availability → farmersdelight:cooking / cutting | to: survival | motif: M-16 | power: everyday | tone: ok — seasonal crop scarcity naturally varies cooking options through the year | verdict: ACCEPT | hook: Cabbage stew is a summer staple; rice dishes dry up in winter — the diet system's demand curve moves with the calendar, creating real seasonal food pressure.

- from: farmersdelight cooked dishes as MineColonies provisioning (colony citizens eat) | via: minecolonies colony feed/supply | to: economy | motif: M-09 | power: mid | tone: ok — colonies needing food is well established; farmstead as supplier is natural | verdict: ACCEPT | hook: The colony kitchen player has a steady municipal contract supplying meals to the MineColonies settlement — another economic loop leg.

Note: The M-09 + M-16 candidates above advance the loop: survival pressure (diet demand) → production (farming/cooking) → economy (selling dishes). Both are real loop-advancing weaves.

---

## structurize   [anchors: support/library (1)]

Power-read: 10 blocks, 14 items. The schematic build engine for MineColonies. No registered recipe types, no loot, no material outputs beyond its own tools. Its weave is entirely MineColonies' weave.

- LEAVE — pure build-engine library/dependency. Its 14 items are construction tools (scepter, scan tool, etc.) used by the builder system. No independent content surface to weave.

---

## numismatics   [anchors: economy, Create (2)]

Power-read: 6 blocks, 45 items, loot=yes (coins can drop). The keystone of the economy pillar. Already at 2 anchors. The direction is *into* numismatics (M-08, M-09), not out from it.

EXISTING CONNECTIONS REVIEW:
- economy anchor: it IS the economy pillar's currency system — correct and load-bearing.
- Create anchor: depends on create, coins/blocks are Create-themed and crafted via Create processes — correct.
OK — connections sound.

New candidates:

- from: numismatics coins in loot tables (loot=yes) | via: loot-seed into boss/structure loot tables | to: economy | motif: M-14 | power: mid | tone: ok — bounty/treasure chests yielding coin is a natural economy seam | verdict: ACCEPT | hook: Dungeon chests and boss drops already contain coin denominations — treasure becomes immediately spendable currency rather than a vendor-trash item.

- from: numismatics:vendor / depositor block | via: MineColonies market building hosting vendor blocks | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; also this is a config/placement choice, not a recipe-level weave. Recording for completeness but not accepting.

---

## modelfix   [anchors: support/bugfix (1)]

Power-read: 0 items, 0 blocks, 0 loot. Pure client rendering patch. No content surface whatsoever.

- LEAVE — genuine zero-content code library; rendering-patch only.

---

## createoreexcavation   [anchors: Create (1)]

Power-read: 6 blocks, 11 items, loot=yes. Three registered methods (drilling, extracting, vein). The
vein table is a configurable KubeJS/datapack join key that can output ANY mod's ore. This is the
pack's late-game infinite-ore automation.

EXISTING ANCHOR: Create — correct (SU-powered, crafted via create:crushing/cutting/milling/mechanical_crafting).

New candidates:

- from: createoreexcavation vein output → scarce regional ore (e.g. TFMG steel precursors, Galosphere palladium) → create:crushing → numismatics mint | via: vein-table configuration → create:crushing → numismatics vendor | to: economy | motif: M-08 | power: mid | tone: ok — drilling for precious metals and minting them into coin is the quintessential industrialist's economy play | verdict: ACCEPT | hook: A miner who locates a palladium vein and installs a drill earns a steady coin income — the Create ore pipeline directly feeds the trade economy.

- from: createoreexcavation:diamond_drill / netherite_drill (high-tier drill heads) | via: create:mechanical_crafting or boss-drop gate (M-15) | to: Create (depth) | motif: M-15 | power: endgame | tone: ok — a netherite drill head requiring a boss drop for the tier makes exploration dangerous advancement | verdict: ACCEPT | hook: The netherite drill head demands a Warden/boss component — industrial-scale mining is locked behind combat progression, not just crafting depth.

- from: createoreexcavation vein outputs → magic reagent ores (e.g. occultism silverite, ars-relevant gems) | via: createoreexcavation:vein table → occultism:crushing / ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — the drill finding arcane mineral veins that feed the magic pillar ties industrial automation to magical progression | verdict: ACCEPT | hook: Locating an arcane vein deep underground and running the drill to supply the magic workshop — industry serving the mystical, a sensible GregTech-style depth step.

---

## cold_sweat   [anchors: survival (1)]

Power-read: 9 blocks, 44 items, 3 biome-modifiers, 18 c:tags, loot=yes. The body-temperature system.
Its Hearth is a multi-block climate emitter. Its armor insulation slot consumes furs from foreign mob
mods. Already has create:filling as an inbound weave (waterskin filling).

EXISTING ANCHOR: survival — correct and strong (it IS the temperature-pressure system).

New candidates:

- from: cold_sweat:hearth (the multi-block climate emitter) | via: create:filling (pipe in lava/steam) + gating on Create brass fittings via crafting | to: Create | motif: M-05 | power: mid | tone: ok — a sophisticated climate-control device using Create plumbing and parts is an entirely natural pairing | verdict: ACCEPT | hook: Building out a proper heated workshop requires a Create-brass-clad Hearth with piped lava — the industrial base camp needs engineered climate control, not just a campfire.

- from: cold_sweat insulation sewing (goat_fur, chameleon_molt, hoglin hide → insulated armor) | via: farmersdelight:cutting (butchering gives hide/fur byproducts) or create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok — cutting/processing raw animal materials into workable insulation is a natural crafting-chain step | verdict: ACCEPT | hook: The cutting board breaks down a freshly-skinned hide into usable insulation strips — the kitchen table is part of cold-weather survival prep.

- from: cold_sweat:goat_fur / chameleon_molt (insulating materials) → cold-climate specialty armor | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok — selling insulated arctic gear to players heading to cold biomes is a natural trade good | verdict: ACCEPT | hook: The survival specialist who farms chameleons sells cold-weather kit to explorers — a direct scarcity→pressure→economy loop (cold biomes create demand; you supply the kit).

- from: cold_sweat temperature as seasonal driver | via: config linking Serene Seasons winter → cold_sweat temperature bands | to: survival | motif: M-16 | power: everyday | tone: ok — this is explicitly its design intent (seasons driving temperature) | verdict: REJECT | reason: This is a config relationship, not a recipe/material weave — it's already the expected integration path for these two mods and doesn't add a new loop edge. Not a novel weave to record.

---

## create_dragons_plus   [anchors: Create (1)]

Power-read: 20 blocks, 24 items, loot=yes, 53 c:tags. Ships two fan-processing methods (ending, freezing).
Functions primarily as a code library/method-provider for Create Central Kitchen / Create Enchantment
Industry / Create Integrated Farming. Also provides dye-fluid buckets, dragon_breath fluid, and
bulk-dyeing via dye fluids. Already uses create:emptying/filling/mixing.

The dossier marks this as "support role (library/QoL for the Create add-on family)" with a leave
recommendation for 2nd-anchor. Let me challenge that with method-pull:

The create_dragons_plus:ending method is a fan-processing type using Dragon's Breath fluid / Dragon Head.
Dragon's Breath is an End-dimension material. Running items through Bulk Ending is thematically "infusing
something with End energy."

- from: create_dragons_plus:ending (Bulk Ending fan process using dragon breath fluid / dragon head catalyst) | via: create_dragons_plus:ending → arcane/enchanting output | to: magic | motif: M-10 | power: mid | tone: ok — "End-infusing" an arcane material to prime it for Ars Nouveau imbuement or Occultism ritual is coherent (End = eldritch, magical) | verdict: ACCEPT | hook: Bulk Ending an ars_nouveau source gem or occultism raw ore in dragon breath primes it for deeper magic processing — Create's fan opens a door the magic specialist walks through.

- from: create_dragons_plus:freezing (Bulk Freezing fan process using powder snow catalyst) | via: create_dragons_plus:freezing → Serene-Seasons-gated powder snow (hard to get in summer) → seasonal reagent | to: survival | motif: M-16 | power: everyday | tone: ok — powder snow as a seasonal/climate-gated catalyst is a natural seasonal-reagent lock | verdict: ACCEPT | hook: Bulk Freezing recipes require powder snow — a resource that's only abundant in winter, so the Create line slows in summer and a cold-climate player becomes a key supplier.

- from: create_dragons_plus dye fluid buckets (16 dye colors as fluids) | via: create_dragons_plus:ending / dyeing → dyed trade goods | to: economy | motif: M-09 | power: everyday | tone: ok — fluid-dye processing enabling bulk-dyed textile production as a sellable good | verdict: REJECT | reason: Bulk dyeing is a convenience feature, not a production bottleneck. The dye fluids don't represent a scarce/high-effort commodity — this is a flat cost-reduction helper. Not a meaningful economy edge.

---

## jade   [anchors: client-only UI/support (1)]

Power-read: 0 items, 0 blocks, loot=no. Pure look-at HUD overlay.

- LEAVE — genuine zero-content UI mod. No material, no recipe type, no loot table.

---

## rolling_down_in_the_deep   [anchors: support/client QoL (1)]

Power-read: 0 items, 0 blocks, loot=no. Client-side camera/movement mod for underwater swimming.

- LEAVE — genuine zero-content client movement mod. No material surface whatsoever.

---

## sounds   [anchors: support/client polish (1)]

Power-read: 0 items, 0 blocks, loot=no. 170+ replacement/additional sound effects, client-only.

- LEAVE — genuine zero-content audio polish mod. No material surface.

---

## create_hypertube   [anchors: Create, aeronautics (2)]

Power-read: 4 blocks, 6 items, loot=yes. Already at 2 anchors (Create + aeronautics/logistics). The
hypertube entrance is crafted via create:sequenced_assembly. Moves players and entities through a
kinetic-powered tube network.

EXISTING CONNECTIONS REVIEW:
- Create anchor: correct — SU-powered, sequenced_assembly crafting, Create parts. Sound.
- aeronautics anchor: correct — it's the economy's physical movement arm (player/entity transit). Sound.
OK — connections sound.

No additional candidates: the mod is a transit infrastructure tool. It has no material throughput and
no processing method to pull foreign goods through. The loot=yes is from its blocks; no novel 2nd-anchor
weave is coherent.

---

## createfisheryindustry   [anchors: Create, survival (2)]

Power-read: 11 blocks, 46 items, loot=yes, 11 c:tags. Already at 2 anchors. Has two registered methods
(bait_trap, peeling). Already deeply inbound-woven (create:crushing/deploying/filling/mechanical_crafting/
mixing/pressing/sandpaper_polishing/sequenced_assembly, farmersdelight:cooking/cutting).

EXISTING CONNECTIONS REVIEW:
- Create anchor: very sound — the mod IS a Create automation module; its machines are powered by SU and crafted through the full Create chain.
- survival anchor: sound — it produces food (seafood dishes) and diving survival gear (copper diving leggings).
OK — connections sound.

New candidates:

- from: createfisheryindustry seafood dishes (chowder, lobster_soup, mussel_soup, cod_steak) | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok — high-effort automated seafood becoming a trade good for the fisher specialization is natural; the industrial scale makes it a viable revenue stream | verdict: ACCEPT | hook: The player who builds out the automated fishing cannery sells premium seafood at the dock market — industrialized fishing feeds the economy pillar.

- from: createfisheryindustry:fish_skin (peeling byproduct, a leather substitute) | via: create:pressing or crafting → cold_sweat insulation (as a hide-equivalent insulating material) | to: survival | motif: M-12 | power: everyday | tone: ok — fish skin as an alternative insulating hide for coastal/maritime Cold Sweat armor is thematically coherent (maritime survival kit) | verdict: ACCEPT | hook: Fish skin from the peeler becomes an alternative insulation material for Cold Sweat gear — the fishing industry provides waterproof hides for seafarers' cold-weather kit.

---

## createlowheated   [anchors: Create (1)]

Power-read: 1 block, 1 item, loot=yes. A single-block Create heating rework (Basic Burner). Injects a
"lowheated" heat condition into Create basins; removes passive heating.

- from: createlowheated:basic_burner | via: coal/charcoal fuel (any furnace fuel) → could be tied to seasonal scarcity of biomass fuel | to: survival | motif: M-16 | power: everyday | tone: marginal — the link is "fuel is scarcer in winter" which is very indirect | verdict: REJECT | reason: The burner simply consumes any furnace fuel — there's no unique material here, and "coal is scarcer in winter" is not a mod-level weave, it's a vague config observation. No coherent 2nd anchor. LEAVE.

- from: createlowheated: basic_burner as a dependency gate | via: M-05 — gating Create's heated recipes on constructing a proper burner (vs. the old passive heater) | to: Create (depth) | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: This is the mod's native function — it already IS a gating mechanism for Create heating. It deepens the Create pillar, but it's a single-pillar deepening, not a cross-system weave. No 2nd system.

LEAVE — single-block mechanic-tweak; its deepening is Create-internal. No coherent 2nd anchor reaches a second system.

---

## createaddition   [anchors: Create (1)]

Power-read: 23 blocks, 46 items, loot=yes, 41 c:tags. Three registered methods (charging, liquid_burning,
rolling). The canonical Create→FE electricity bridge. Key materials: electrum ingot, seed oil (crop fuel),
bioethanol. Already deeply inbound-woven through create:*  and mekanism/IE chains.

EXISTING ANCHOR: Create — correct and deep. The mod exists to bridge Create kinetics to FE electricity.

New candidates:

- from: createaddition:charging (FE-charge an item) applied to magic tools/foci that hold charge | via: createaddition:charging → irons_spellbooks gear or magic battery | to: magic | motif: M-17 | power: mid | tone: ok — charging a magic spell-focus via Create's electrical layer is exactly what M-17 describes; Iron's Spellbooks gear is in the pack and some pieces accept FE charging | verdict: ACCEPT | hook: The Create electrician's tesla coil charges the magic specialist's spell-focus — the power grid and the spellbook are one integrated system.

- from: createaddition:seed_oil / bioethanol (liquid fuel from farmed seeds) | via: createaddition:liquid_burning → Aeronautics engine fuel line or TFMG fuel replacement | to: aeronautics | motif: M-13 | power: mid | tone: ok — biofuel as an alternative aeronautics propellant is a natural pairing; it ties the farming chain to the airship fleet | verdict: ACCEPT | hook: The farm that produces sunflower seed oil keeps the airship flying — agriculture fuels logistics, a tight loop from survival production to the economy's movement arm.

- from: createaddition:seed_oil (pressed from seeds via rolling mill) | via: farmersdelight:cooking / create:mixing — seed oil as a cooking oil ingredient | to: survival | motif: M-12 | power: everyday | tone: ok — cooking oil from a Create mill is a natural culinary intermediate | verdict: ACCEPT | hook: Milled seed oil from the rolling mill goes into the cooking pot — the Create electric line and the farm kitchen share an ingredient, weaving electricity into daily cooking.

- from: createaddition:electrum_ingot (alloy: gold + silver via create:mixing) | via: create:pressing → electrum plates → aeronautics hull material | to: aeronautics | motif: M-23 | power: mid | tone: ok — a lightweight conductive alloy as an electrical-hull component for airships is coherent (real dirigibles used aluminum alloy; electrum as its fantasy equivalent) | verdict: ACCEPT | hook: Electrum-clad hull panels on the airship connect the electrical grid to the airframe — the Create electrician builds their own hybrid airship.

---

## bagus_lib   [anchors: support/library (1)]

Power-read: 0 items, 0 blocks, loot=no. Shared code library.

- LEAVE — genuine zero-content code library. No player content surface.

---

## prickle   [anchors: support/library (1)]

Power-read: 0 items, 0 blocks, loot=no. Config-format serialization library.

- LEAVE — genuine zero-content code library. No player content surface.

== CHUNK COMPLETE ==
