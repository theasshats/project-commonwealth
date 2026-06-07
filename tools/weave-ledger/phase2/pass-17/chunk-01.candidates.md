# Phase 2 candidates — chunk-01

## alternate_current   [anchors: support (1)]
- LEAVE — pure redstone-propagation performance patch; zero player-facing items, no recipes, no content surface; nothing to weave.

## illagerinvasion   [anchors: survival (1)]

**Power-read:** hallowed_gem is an Invoker boss drop — endgame by placement in the raid/boss chain. illusionary_dust is a mid-tier drop (Illusioner, a somewhat-rare illager variant). platinum_chunk is a mid-tier mineral drop. lost_candle and horn_of_sight are niche-use items. The Imbuing Table is an endgame service. The mod anchors survival/danger firmly; the dossier flags a strong latent magic foot via its arcane-themed drops and enchant economy.

**Candidate A — hallowed_gem as magic reagent (M-02 + M-10), ACCEPT**
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 + M-10 | power: endgame | tone: ok — gem of a fallen magical boss attuned into arcane currency is exactly the "of course" moment | verdict: ACCEPT | hook: defeating the Invoker lets you unlock Ars Nouveau tier-up by feeding the Hallowed Gem into the Imbuement Chamber — the raid boss funds the magic web

**Candidate B — illusionary_dust as Occultism ritual input (M-02 + M-11), ACCEPT**
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: occultism:ritual | to: magic | motif: M-02 + M-11 | power: mid | tone: ok — illusion/spirit dust is coherent as a ritual reagent for Occultism's spirit-binding | verdict: ACCEPT | hook: the dust left by a shattered Illusioner is exactly what a spirit-binder needs to summon illusory servants

**Candidate C — platinum_chunk via Create crushing (M-03), REJECT**
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: platinum_chunk is a boss/mob drop, not an ore — routing a combat trophy through a crushing wheel is mechanically valid but thematically weak ("why does killing an illager give me ore ore?"); the gem/dust drops are the more coherent connective tissue; platinum as an isolated ore-equivalent drop creates an awkward scarcity bypass

**Candidate D — platinum_chunk as Numismatics coin source (M-08), REJECT**
- from: illagerinvasion:platinum_chunk | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: platinum is an isolated named metal with no other presence in the pack's metal web; minting it into coin without first unifying it into the metallurgy graph would create a dangling coin source; flag for reconsideration only if platinum gets a c:ingots/platinum unification pass

**Candidate E — hallowed_gem as boss-key gate (M-15), ACCEPT**
- from: illagerinvasion:hallowed_gem | via: gated KubeJS recipe (boss drop as input) | to: create | motif: M-15 | power: endgame | tone: ok — hallowed gem as a required component for a Create brass/endgame machine part is thematically coherent (the cursed metal of the raid boss gates the industrial tier) | verdict: ACCEPT | hook: you can't assemble the high-tier Brass Hand or equivalent Create controller without the gem the Invoker drops — combat specialization enables tech specialization

REWORK: No existing connections to flag (mod is 1-anchor). Candidates above establish the magic + Create(boss-key) second anchors.

## yungsapi   [anchors: support (1)]
- LEAVE — pure API/library; zero player-facing items; provides jigsaw/structure tooling for YUNG's mods only; nothing to weave.

## accessories   [anchors: support (1)]
- LEAVE — pure accessory-slot API; no items, no recipes, no content surface of its own; wearables live in other mods that register into its slots; nothing to weave at the API layer.

## create_better_villagers   [anchors: Create, economy (2)]

**Power-read:** no items — profession/trade behavior only. Andesite-tier trades (everyday/low-mid), Brass-tier trades (mid), Copper Worker/Miner (mid). The bridge is already sound; the open question is denominating the trades in Numismatics coin vs. vanilla emeralds.

**Candidate A — re-denominate trades into Numismatics coin (M-08/M-21), ACCEPT**
- from: create_better_villagers villager trades | via: numismatics (coin denominated trades, or config/KubeJS trade price) | to: economy | motif: M-08 + M-21 (provisional) | power: everyday/mid | tone: ok — a Create-themed villager trading in Sprockets/Cogwheels instead of emeralds is exactly the kind of integrated economy loop the pack wants | verdict: ACCEPT | hook: the Brass Worker takes Sprockets; the Andesite Worker takes Cogwheels — emeralds are for vanilla villages, not a factory town
  Note: M-21 is provisional (maintainer leans no on villager-economy seam) — flag for Gate review. The Numismatics config path (coin as trade currency) is the delivery mechanism.

**Candidate B — gate Brass/Copper Worker appearance behind a Create milestone (M-05), REJECT**
- from: create_better_villagers profession unlock | via: KubeJS progression gate | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the mod has no items/recipe types of its own to gate; progression gating on the profession appearance is a server-config/datapack concern outside the recipe-weave scope; worth noting as a design note but not a Phase-3 recipe action

OK — Create + economy dual anchor is sound. The only improvement is the coin-denomination weave above.

## xaerominimap   [anchors: support (1)]
- LEAVE — client-side navigation UI; zero items, no recipes, no server content surface; nothing to weave.

## sable_sa_compat   [anchors: support (1)]
- LEAVE — behavior compat patch between Create: Stuff 'N Additions and Sable/Aeronautics; no items, no recipes; serves the aeronautics pillar transparently; nothing to weave.

## trailandtales_delight   [anchors: survival (1)]

**Power-read:** The flagship items are multi-step foods — cherry cheese pie (cheese wheel → sliced → combined with cherry filling), ancient coffee, sniffer-egg dishes. The Lantern Fruit is a Sniffer-exclusive crop (mid-rarity; sniffer is a post-Ancient City progression gate). Cheese production is a multi-step chain (milk → curd_block → cheese_wheel → cheese_slice). These are mid-tier processed goods by depth, not raw ingredients; the dishes have genuine labour investment and thematic distinctiveness (ancient/archaeological flavour).

**Candidate A — luxury foods as Numismatics sell-goods (M-09), ACCEPT**
- from: trailandtales_delight:cherry_cheese_pie / ancient_coffee / cherry_petal_tea | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — hand-crafted artisan foods with archaeological/botanical flavour are exactly the "luxury good" the M-09 sell-loop is built for; a player specialising in sniffer farming and cheese-making has a real export product | verdict: ACCEPT | hook: a wedge of cherry cheese pie and a pot of ancient coffee sell for coin at the Trading Floor — the trail chef funds the airship crew

**Candidate B — Create milling/mixing for cheese/crop processing chain (M-12), ACCEPT**
- from: trailandtales_delight:lantern_fruit / curd_block | via: create:milling (grind lantern fruit) or create:mixing (accelerate curd-to-cheese) | to: create | motif: M-12 | power: mid | tone: ok — routing the cheese or lantern-fruit processing through Create machinery extends the food chain into the tech spine; the curd→wheel maturation step maps cleanly onto a mixing or milling step without forcing a weird marriage | verdict: ACCEPT | hook: feed the lantern fruit harvest into a milling wheel for a refined extract — the kitchen and the factory share the same floor

**Candidate C — Lantern Fruit as seasonal reagent (M-16), REJECT**
- from: trailandtales_delight:lantern_fruit | via: season-gated input | to: create/magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Lantern Fruit grows from Sniffer seeds, not season-gated soil; its availability is gated by Sniffer progression, not Serene Seasons calendar — applying M-16 (seasonal reagent) would misrepresent the gating mechanic. The crop is permanently growable once sniffer seeds are found, so this is not a genuine seasonal seam.

REWORK: No existing connections to flag (mod is 1-anchor). Candidates A and B establish survival + economy and survival + Create second anchors respectively.

## dragonlib   [anchors: support (1)]
- LEAVE — developer API/framework library with zero player-facing content (the lone dragonlib:dragon block is a dev/test artifact); nothing to weave.

## smokeleafindustries   [anchors: survival (1)]

**Power-read:** The base crop (hemp) is everyday — growable from spawn, no special gating. Individual strain buds are mid-tier by investment (grow-lamp/pot infrastructure, drying, grinding). The synthesizer-output gummies/oils are the endgame of this mod's chain (multi-stage). The generator is a structural piece (everyday-use workhorse). Dealer/Stoner villager trades are mid-tier trade loop. The mod is a self-contained island — 243 items, 12 recipe-types, zero c:tags, zero inbound method-weaves — exactly the "isolated FE cluster" the dossier flags.

**Candidate A — refined extracts/gummies as Numismatics luxury goods (M-09), ACCEPT**
- from: smokeleafindustries:*_extract / *_gummy (processed strain products) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — a strain farm producing refined edibles for sale at a Trading Floor stall is thematically coherent in a small-server co-op where someone specialises in the farm; the effects make these genuine luxury consumables with demand | verdict: ACCEPT | hook: the extractor produces a refined concentrate that sells for coin at the Trading Floor — the hemp farmer funds the colony

**Candidate B — Create Addition FE↔kinetic bridge for smokeleaf machines (M-17), ACCEPT**
- from: smokeleafindustries machines (FE-powered grinder/extractor/liquifier/synthesizer) | via: createaddition:charging (FE↔kinetic bridge) | to: create | motif: M-17 | power: mid | tone: ok — the mod ships its own FE generator but also accepts FE from any source; Create Addition's alternator/motor converts rotational power to FE bidirectionally, making the smokeleaf factory a legitimate consumer of the Create kinetic network without any recipe authoring (just player placement of a motor near the machines) | verdict: ACCEPT | hook: the brass motor runs the grinder — one Create shaft makes the whole hemp factory hum

**Candidate C — hemp/buds through create:milling as alternate processing path (M-12), REJECT**
- from: smokeleafindustries:*_weed / hemp_crop | via: create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: the mod's own grinder already handles raw-bud processing at the same tier; adding a Create milling path as an alternate would partially duplicate the mod's own processing chain and blur what the specialised machines are for. The FE bridge (Candidate B) is the cleaner Create seam — it extends the energy network rather than duplicating the processing step. Keep only B.

REWORK: No existing connections to flag (1-anchor). Candidates A and B establish economy + Create second anchors.

## astikorcartsredux   [anchors: survival (1)]

**Power-read:** Carts are crafted from vanilla wood/planks — everyday tier, no exotic ingredients. The plow/reaper/seed-drill are mid-tier by utility value (farming throughput tools requiring a draft animal). No registered recipe-types; all mechanics are hitched-entity behaviour. The mod is a low-tech pre-Create farming aid. Dossier already notes there is no strong 2nd-anchor candidate and flags as optional.

**Candidate A — Create-processed metal parts gate farm implements (M-05), REJECT**
- from: astikorcartsredux:oak_plow / oak_reaper (metal-bearing implements) | via: gated KubeJS recipe using create:pressing (iron sheet) as ingredient | to: create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: plow/reaper blades are pre-industrial farming tools; gating them on Create-pressed iron sheets would make early-game farming depend on mid-game Create access, violating the "never gate a basic/everyday component behind a complex recipe" guardrail. These tools should remain available before the Create tier unlocks; the thematic clash (hand-carved wooden plow needing a factory) is a red flag.

**Candidate B — supply cart as early-game logistics (aeronautics loop-feedforward), REJECT**
- from: astikorcartsredux:oak_supply_cart | via: no method available | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the cart is a flavour precursor to Aeronautics logistics but there is no recipe method that routes the cart's material surface into the aeronautics drivetrain or airframe. It's a progression-narrative note ("carts before ships"), not a weavable connection.

LEAVE — no coherent 2nd anchor available without forcing an edge. Survival anchor (agrarian field-work) stands on its own; one-pillar mod is a candidate for a "second weave" in future but no clean seam exists today.

## bettercombat   [anchors: support (1)]
- LEAVE — pure combat-framework mod; no items, no blocks, no processing methods; provides JSON-driven weapon-moveset behavior as a framework that other mods' weapons plug into. There is no material surface to route through another mod's method; weaving the framework itself makes no sense.

## spawn   [anchors: survival (1)]

**Power-read:** Clams (casting-net interaction, color-variant collectables) are mid-tier by effort (net + specific biome); crab/barnacle are ambient drops accessible early-game; angler fish is a rare deep-water mob. The date-palm wood set is everyday (decorative). The mod already has FD cooking/cutting inbound weaves (existing), meaning it participates in the food processing web. The 165 blocks and 296 items are dominated by deco/biome-flavour blocks; the food-relevant outputs (seafood drops) are the connective tissue.

**Candidate A — seafood/clam as Numismatics luxury sell-goods (M-09), ACCEPT**
- from: spawn:angler_fish / spawn clam items / spawn crab drops | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — rare aquatic catches (glowing anglerfish, color-variant clams) as premium trade goods at the Trading Floor is a coherent "exotic seafood specialist" economic role; the casting-net mechanic adds effort investment that justifies a price premium | verdict: ACCEPT | hook: a jar of color-sorted clams and a smoked anglerfish fillet fetch coin at the dockside stall — the fisherman has something worth sailing for

**Candidate B — Create crushing for coral/clam shells as deco processing (M-04), REJECT**
- from: spawn clam-case / barnacle / algal_reefstone blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: M-04 (Create recycles deco) is designed for metal/stone deco blocks that yield raw material back — it maps poorly onto living coral/clam shells which have no obvious "raw output" equivalent. Crushing organic sea-life blocks into gravel + XP nugget would be thematically odd and provides no meaningful scarcity or production value. The FD cooking bridge (existing) is the more coherent processing anchor.

**Candidate C — Create fishing industry (M-12), REJECT**
- from: spawn aquatic mobs/fish | via: createfisheryindustry:bait_trap / peeling | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the mod's critters are ambient/biome-flavour mobs, not fish-farm feedstock; routing them into createfisheryindustry bait traps would require the fish to spawn in bait-trap range, which is biome-dependent and unreliable. The weave is technically possible but the join key (mob spawns near player-placed traps) is too loose to be reliable. Flag for reconsideration if createfisheryindustry is tuned to work with spawn's biomes.

REWORK: No existing connections to flag beyond the FD inbound weaves (which are sound — existing anchor is intact). Candidate A establishes the economy second anchor.

## balm   [anchors: support (1)]
- LEAVE — multi-loader abstraction library (BlayTheNinth); no player-facing items beyond scaffolding c:tags for iron/gold nuggets (which are generic, not balm's own). The gameplay content (Waystones, Cooking for Blockheads, etc.) lives in the dependent mods, not here. Nothing to weave at the library layer.

## architectury   [anchors: support (1)]
- LEAVE — cross-platform modding API (events, networking, registry abstractions); zero player-facing content; a near-ubiquitous dependency with no items, blocks, or methods to route through. Nothing to weave.

## tfmg   [anchors: Create (1)]

**Power-read:** Steel (Industrial Blast Furnace → coke + iron → steel) is mid-game, requiring Create setup + coal coke infrastructure. Fuels (diesel/gasoline/LPG from distillation tower) are mid-to-endgame by facility investment. The Distillation Tower is a multiblock requiring significant Create machinery. Aluminum/constantan/lead/nickel/lithium are the deeper metals, gated on ore access. The electricity grid (Voltage network) is the late/endgame tier. With 584 items, 123 c:tags, and 8 recipe-types, TFMG is the heaviest Create addon in the pack — it should have multiple second-anchor connections.

**Candidate A — TFMG fuels as Aeronautics propulsion supply (M-13), ACCEPT**
- from: tfmg:diesel / tfmg:gasoline / tfmg:liquefied_petroleum_gas | via: TFMG distillation → engine intake (Aeronautics combustion engine / TFMG combustion engine) | to: aeronautics | motif: M-13 | power: mid | tone: ok — TFMG is literally the fuel refinery that Aeronautics needs; the pack's canonical fuel supply chain is exactly this loop: crude oil → pumpjack → distillation tower → diesel/gasoline → ship engine | verdict: ACCEPT | hook: the ship doesn't fly until the distillation tower is running — the airship fleet is downstream of the refinery

**Candidate B — TFMG steel as Aeronautics airframe material (M-23), ACCEPT**
- from: tfmg:steel_ingot / tfmg:steel_plate (via create:pressing) | via: fabricated structural part → aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok — structural steel for airframes is the natural material answer; a steel-framed ship is appropriately harder to build than a wood-frame one, gating serious aeronautics behind the blast-furnace tier | verdict: ACCEPT | hook: the corvette-class airframe calls for TFMG steel plates — the factory tier gates the ship tier

**Candidate C — TFMG combustion engine / electric motor as Aeronautics propulsion component (M-24), ACCEPT**
- from: tfmg:combustion_engine / tfmg:electric_motor (winding products) | via: component → aeronautics engine/propeller recipe | to: aeronautics | motif: M-24 | power: mid/endgame | tone: ok — the winding/polarizing machines produce motors; feeding a TFMG motor into an Aeronautics engine assembly makes the drivetrain depend on the electrical manufacturing tier | verdict: ACCEPT | hook: spinning up an advanced propulsion unit takes a TFMG-wound motor — the electrician and the pilot need each other

**Candidate D — TFMG steel/fuel as Numismatics sell-goods (M-08/M-09), ACCEPT**
- from: tfmg:steel_ingot / tfmg:diesel (canned) | via: numismatics sell/price | to: economy | motif: M-08 + M-09 | power: mid | tone: ok — processed steel and canned fuel are high-labour goods with real production costs; a TFMG specialist selling steel billets and fuel cans at the Trading Floor is the industrial trade loop the economy pillar wants | verdict: ACCEPT | hook: the refinery player sells fuel cans and steel ingots for coin — the economy runs on what the factory produces

**Candidate E — TFMG electricity grid as Create-New-Age / createaddition bridge (M-17), REJECT**
- from: tfmg Voltage/FE grid | via: createaddition:charging / create_new_age FE bridge | to: create | motif: M-17 | power: endgame | tone: ok | verdict: REJECT | reason: TFMG already is a Create addon — it's already anchored in Create and its electricity grid is an extension of the Create spine, not a foreign "FE → Create" bridge. Calling this M-17 would be circular; the interesting bridges are outbound to aeronautics and economy (Candidates A–D), not back into Create. Not a new connection.

REWORK: No existing connections to flag (1-anchor, but should become 3 after Candidates A–D). Candidates A–D establish aeronautics (fuel+airframe+drivetrain) and economy second anchors.

## northstar   [anchors: Create, aeronautics (2)]

**Power-read:** Titanium/tungsten are post-rocket metals — endgame tier (require space travel to access). Martian steel is late-mid (Mars landing). Advanced circuits are endgame (require the circuit engraver + titanium). The astronomical_reading is a mid-game service item. The three registered methods (electrolysis, engraving, freezing) can accept foreign inputs.

**Candidate A — titanium/tungsten as Aeronautics high-tier structural/propulsion material (M-23/M-24), ACCEPT**
- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: fabricated part → aeronautics high-tier airframe or engine recipe | to: aeronautics | motif: M-23 + M-24 | power: endgame | tone: ok — space metals as the material gate for the pack's most advanced ships is exactly the "depth scales with ship tier" rule M-23 specifies; a heavy titanium airframe is coherently more capable than a TFMG steel one | verdict: ACCEPT | hook: the fastest ship in the fleet is plated in northstar titanium — getting off-world means getting better ships

**Candidate B — northstar:advanced_circuit as Aeronautics control-surface component (M-24), ACCEPT**
- from: northstar:advanced_circuit | via: component → aeronautics control/navigation recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok — an advanced circuit (circuit-engraver product from titanium-tier) gating the autopilot/control system of a high-end ship is thematically sharp; space-tech enabling better ships is the intended progression | verdict: ACCEPT | hook: the ship's autopilot needs a northstar circuit — flight-capable tech gates on space-capable tech

**Candidate C — titanium via Numismatics as scarce space-metal coin (M-08), REJECT**
- from: northstar:titanium_ingot | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier flags this as MED; the balance concern is that titanium is only reachable post-rocket, making it a very late coin source that doesn't help early/mid economy. Also, the pack's M-08 framing is "regional metal → Create-processed → minted into coin" — titanium is planetary-scarcity (off-world), not regional-scarcity; the motif applies but the timing makes it an economic oddity. Flag for the 0.9 economy update; don't block aeronautics weaves on it.

**Candidate D — northstar:electrolysis accepts TFMG/foreign fluids (M-12 processing pull), REJECT**
- from: tfmg brine/oil or other pack fluids | via: northstar:electrolysis | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: while Northstar's electrolysis machine could technically accept foreign fluids, this would create a dependency-loop between two Create addons (TFMG → Northstar processing) that blurs each mod's role. The cleaner flow is one-directional (Northstar's outputs enable Aeronautics), not a circular inter-addon processing dependency. Keep the flow simple.

OK — existing Create + aeronautics dual anchor is sound. Candidates A + B deepen the aeronautics connection with endgame-tier materials. The economic coin angle is deferred to the 0.9 update review.

REWORK: The "aeronautics" anchor deserves a stronger explicit connection than "rockets = off-world logistics" — the dossier labels it correctly but the weave needs the explicit airframe/circuit recipes (Candidates A+B) to make it real rather than just narrative.

## travelersbackpack   [anchors: survival (1)]

**Power-read:** Base leather backpacks are everyday tier (early-game carry capacity). The netherite/dragon variant is endgame (cosmetic but requires those materials). The tank/upgrade modules are mid-tier (fluid tanks, crafting/smelting upgrades). The backpack_upgrade recipe-type means there is an authored upgrade path. The mod has no inbound method-weaves today.

**Candidate A — Create-component gated upgrade modules (M-05/M-20), ACCEPT**
- from: travelersbackpack:blank_upgrade (→ crafting_upgrade / blast_furnace_upgrade / tank_upgrade) | via: create:item_application or crafting recipe using Create parts (copper coil / andesite casing) | to: create | motif: M-20 | power: mid | tone: ok — a "workshop upgrade" slot in a backpack needing a Create-machined component is a single light step (M-20's "light single-step" tier), not a deep chain; it ties the upgrade path to the Create spine without gating the base backpack itself | verdict: ACCEPT | hook: slot a copper coil into the blank upgrade to get a crafting table in your pack — the factory makes the pack smart

**Candidate B — tank upgrade filled with TFMG/Northstar fuels as Aeronautics portable fuel (M-13-adjacent), REJECT**
- from: travelersbackpack:backpack_tank | via: fluid hose fills with tfmg:diesel → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: the backpack tank can hold any fluid, including diesel, but this is a player-use interaction (backpack hose → engine fluid slot), not a recipe weave. It's a "of course you can do this" emergent behavior, not a designed connection; no Phase-3 recipe action required. Already works by default.

**Candidate C — themed mob-drop backpacks as Numismatics sell-goods (M-09), REJECT**
- from: travelersbackpack:dragon / netherite backpack | via: numismatics sell/price | to: economy | motif: M-09 | power: endgame | tone: clash | verdict: REJECT | reason: the themed variants are cosmetically differentiated but functionally identical backpacks; pricing rare-drop backpacks as trade goods would make the pack economy sell cosmetic inventory items rather than production outputs, which weakens the "production specialisation → trade" loop. Backpacks aren't a production output from a pillar; they're player-crafted items.

REWORK: No existing connections to flag (1-anchor). Candidate A establishes a Create second anchor at the mid-tier upgrade level.

## enhancedcelestials   [anchors: survival (1)]

**Power-read:** Lunar events (Blood Moon, Harvest Moon, Blue Moon) are passive world-state toggles — no items gated behind them by default. The meteor block is everyday-harvestable (falls from sky, worldgen). Space moss is ambient decorative. The Harvest Moon crop-growth acceleration is a global buff freely available. The mod's power is atmospheric/survival pressure (Blood Moon danger, Harvest Moon yield boost) rather than material outputs.

**Candidate A — meteor block via create:crushing as fallen-star ore-equivalent (M-04), ACCEPT**
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: mid | tone: ok — a meteor is a fallen rock from space; crushing it for iron/nickel + an XP-nugget byproduct is the same logic as M-04 (deco block → raw material + XP); the "fallen star" as a minor Create feedstock is coherent without being a dominant scarcity bypass (meteors are occasional, not farmable) | verdict: ACCEPT | hook: drag a meteor chunk to the crushing wheel — the space rock yields iron and nickel dust, the sky provides its own ore drop

**Candidate B — lunar event as magic ritual gate (M-22), ACCEPT**
- from: enhancedcelestials Blood Moon / Blue Moon event state | via: event-as-gate → occultism:ritual or ars_nouveau:summon_ritual | to: magic | motif: M-22 | power: mid | tone: ok — a Blood Moon is precisely the kind of lunar event that should gate certain dangerous/powerful rituals; occultism's summoning rituals and Ars Nouveau moon-linked spells are thematically exact | verdict: ACCEPT | hook: the Blood Moon is the only time the Summoning Ritual for a Greater Spirit will work — danger and magic share the same night

**Candidate C — Harvest Moon as seasonal crop-yield driver (M-16-adjacent), REJECT**
- from: enhancedcelestials Harvest Moon buff | via: season/event-gated input | to: create/magic | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: the Harvest Moon is a passive global growth buff, not a recipe-gated material or seasonal ingredient — there is nothing to "route through a method." The buff already rewards crop farming automatically; making it a recipe gate would punish players who farm outside that window. M-16 requires an item that is *only obtainable* in the seasonal window, not a timing buff. Not a valid M-16 seam.

REWORK: No existing connections to flag (1-anchor). Candidates A and B establish Create (meteor crushing) and magic (lunar ritual gate) second anchors.

## hpm   [anchors: aeronautics (1)]

**Power-read:** The base raft/swashbuckler are everyday tier (wood + basic iron). The pirate cutter and war cutter are mid-tier (storage + combat, requiring hull/mast sub-components). The corvette steamship (WIP) is endgame by intent. Cannonball/mortar_ball are everyday combat consumables. The dossier flags a curation concern — overlap with Create Aeronautics (physics ships) and Create Big Cannons (artillery); this is a real issue but it's a thunderdome curation call, not a weave call.

**Candidate A — ship hulls/masts gated on Create mechanical components (M-05/M-23), ACCEPT**
- from: hpm:largehull / hpm:smallhull / hpm:largemast (ship sub-components) | via: crafting recipe using create:pressed iron sheet / create:mechanical_crafting for the steamship drive | to: create | motif: M-23 | power: mid/endgame | tone: ok — gating the war cutter and especially the corvette steamship hull on Create-fabricated structural parts is thematically coherent (a warship needs engineered metal, not just raw planks) and scales depth with ship tier per M-23's rule | verdict: ACCEPT | hook: the war cutter's hull plates are pressed iron — the shipyard runs on the factory's output

**Candidate B — Numismatics sell price for ships as high-value trade goods (M-08/M-09), ACCEPT**
- from: hpm:cutteritem / hpm:cuttermilitariseditem | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — a shipwright who builds and sells sailing vessels is an obvious economic specialisation; a finished cutter or war-cutter as a Numismatics-priced "vessel" trade good is coherent with the pack's player-economy loop; the high material cost makes it genuinely scarce | verdict: ACCEPT | hook: the shipwright sells rigged cutters at the Trading Floor — the navy is a trade profession, not just a playstyle

**Candidate C — curation flag: overlap with Create Aeronautics + Create Big Cannons, REJECT (curation, not weave)**
- from: hpm ships (non-physics, non-Create-superglue vessels) | via: n/a | to: aeronautics | motif: no-motif | power: n/a | tone: clash | verdict: REJECT | reason: hpm ships are bespoke boat-entities, not Aeronautics-physics superglue contraptions; the two coexist but occupy different roles (wooden sailing vessels vs. Create-built physics ships). The overlap with Create Big Cannons (mounted artillery vs. handheld cannon) is a curation/thunderdome question about whether both belong. This is not a recipe-weave issue; flag for thunderdome review in the appropriate odd-version curation pass.

REWORK: No existing connections to flag (1-anchor). Candidates A and B establish Create (fabricated hulls) and economy (shipwright trade) second anchors.

== CHUNK COMPLETE ==
