# Phase 2 candidates — chunk-06

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — zero content surface: no items, no blocks, no recipe methods, no loot. Pure interaction hook on existing crops. No material graph to route through; forced edge would be invented.

## yungsapi   [anchors: support/library (1)]
- LEAVE — pure code library (jigsaw manager / structure utilities). Zero items, zero loot, zero methods. Nothing to weave.

## letsdocompat   [anchors: survival/food-web (1)]
- LEAVE — this mod IS the weave layer for the food cluster; it routes the Let's Do / Farm&Charm / Farmer's Delight foods through each other's stations. It registers no items, no methods, and no loot of its own. A second anchor would require an item or method this mod doesn't have. The work it does already advances M-12 (processing-chain pull) across the food group; no additional proposal is coherent.

## justenoughbreeding   [anchors: support/client UI (1)]
- LEAVE — JEI plugin only; no items, no methods, no loot. Zero content surface.

## northstar   [anchors: create, aeronautics (2)]
REWORK:
- The dossier's 2nd-anchor candidate "economy via numismatics sale of astronomical_reading / advanced_circuit" cites M-09 — that motif is RETIRED. Strip it.
- The dossier's M-08 (titanium/tungsten → coin) candidate is structurally sound but needs tighter framing: titanium/tungsten are off-world regional metals obtained via northstar's electrolysis/freezing machines from planet-local ores — that is a genuine regional-scarcity gate (M-30) feeding the minting step (M-08), not just "process metal → mint". Reframe as M-30 + M-08 chain.

New proposals:
- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: create:crushing (ore-doubling) then northstar:electrolysis (brine → pure form) then numismatics mint | to: economy | motif: M-30 + M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: the only source of titanium is off-world ore under a planetary atmosphere — whoever controls the rocket controls the mint.
- from: northstar:advanced_circuit | via: create:sequenced_assembly (gate northstar circuit behind a Create sequenced assembly chain using northstar:electrolysis output as intermediate) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced electronics are built step-by-step on a Create assembly line, not hand-crafted — the circuit engraver becomes a production node, not a crafting table.
- from: northstar:biofuel (biofuel_bucket) | via: createaddition:liquid_burning (burn biofuel in Create Addition's liquid burner for FE) | to: create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: space-grown biofuel feeds the electrical grid back on the ground — the off-world farm pays for its own power.
- from: northstar:martian_steel_ingot | via: create:mechanical_crafting (fabricate structural airframe parts — M-23 analogue) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: martian steel's weight-to-strength ratio makes it the natural choice for high-tier airship hulls — an aeronaut has to trade with a rocketeer.
- from: northstar:astronomical_reading | via: (recipe or colony research gating — lock a late-game MineColonies research behind delivering an astronomical_reading) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony's university can't chart trade routes without star charts from the telescope — knowledge gated on exploration.
- from: northstar:advanced_circuit | via: occultism:spirit_fire or ars_nouveau:imbuement (arcane infusion of a circuit to produce a techno-magical component) | to: magic | motif: M-10 | power: endgame | tone: clash — advanced circuits are sci-fi tech; magic fusing them in ritual feels forced against the mod's hard sci-fi aesthetic | verdict: REJECT | reason: tone clash — northstar is deliberately industrial/sci-fi; routing its endgame circuit through a magic ritual undermines its design identity and would look incoherent to a player.
- from: northstar planet-stone/woods (argyre, calorian, coiler) | via: create:crushing → deco recycle (M-04 analogue) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is specifically for metal/stone deco blocks recovering raw+gravel+XP; planet woods are organic lumber, not metal deco — the motif's anti-arbitrage/lossy logic doesn't fit organic lumber. Forced edge; leave planet woods vanilla-craftable.

## jade   [anchors: client UI/support (1)]
- LEAVE — client HUD overlay; zero items, zero loot, zero methods. Nothing to weave.

## dragonlib   [anchors: support/library (1)]
- LEAVE — developer API library; zero items (the lone `dragonlib:dragon` block/item is a dev artifact), zero methods. Nothing to weave.

## createaddition   [anchors: create (1)]
REWORK:
- Dossier's "survival/economy via liquid_burning of crop oils" cites M-12 weakly — the sellable-good framing leans M-09 (retired). Reframe or drop: the real weave is M-12 (farmed seeds → Create Addition seed_oil → processed fuel → FE generation), which ties agriculture to the electrical layer. The "sellable" tail should be cut; the economy link comes from cross-route dependency (magic/tech needing FE → buys seed oil from farmers), which is M-29.

New proposals:
- from: createaddition:seed_oil / createaddition:bioethanol | via: createaddition:liquid_burning (farmed seeds → seed_oil → liquid burner → FE) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a farmer pressing seeds into fuel oil runs half the factory's power — agriculture and industry are the same supply chain.
- from: irons_spellbooks magic gear / ars_nouveau focus (FE-chargeable items) | via: createaddition:charging (tesla coil or charging station) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the tesla coil sparking up next to the enchanting apparatus — electric power and arcane power share the same charge.
- from: createaddition:seed_oil | via: cross-route dependency — magic rituals (ars_nouveau:imbuement or occultism:ritual) require seed_oil as a fuel/solvent input | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: distilled plant oil as a ritual solvent — the alchemist buys fuel from the farmer because their cauldron won't ignite without it.
- from: createaddition:electrum_ingot | via: create:crushing (ore-doubling for electrum ore, if any mod contributes one) or numismatics mint (electrum → electrum coin as a mid-tier denomination) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum — the alloy of gold and silver — is historically a coin metal; a rolling-mill operator minting their own electrum spurs the natural denomination.
- from: createaddition:biomass / biomass_pellet | via: tfmg:coking (treat biomass as a coking feedstock to produce charcoal/syngas) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the factory's organic waste pressed into fuel pellets, coked in the industrial furnace — nothing from the farm floor gets thrown away.
- from: createaddition:accumulator (energy storage) | via: aeronautics power supply — FE accumulators as the onboard power bank for Aeronautics electric flight systems | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: you need a bank of accumulators in the hull before the airship's electric instruments come online.
- from: createaddition:rolling (rods/wires) | via: northstar:circuit_engraver (engraving copper/electrum wires into circuit traces — a cross-mod processing chain) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: rolling mill copper wire → circuit engraver traces → advanced circuit: the wire-drawing specialist feeds the electronics fabricator.

## gnkinetics   [anchors: create (1)]
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear / gnkinetics:industrial_gear | via: create:mechanical_crafting (gate the high-ratio gear tiers behind the mechanical crafting table — a Precision Mechanism-style fabrication step) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: industrial gear ratios aren't hammered out by hand — they're assembled part by part on the mechanical crafter, the same way you'd machine a worm drive.
- from: gnkinetics:planetary_gear (high-torque output) | via: aeronautics drivetrain — gearing down a high-RPM shaft to match Aeronautics propeller torque spec (crafting ingredient in a propeller or drive assembly) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the planetary gear box is what keeps the propeller from overspeeding — you can't spin up without one.
- from: gnkinetics:worm_gear | via: occultism:ritual or ars_nouveau:imbuement (arcane-infuse a worm gear to produce a self-locking magic mechanism used in a golem or spell delivery device) | to: magic | motif: M-10 | power: mid | tone: clash — worm gears are pure Newtonian mechanics; grafting them into a magic ritual feels thematically arbitrary | verdict: REJECT | reason: tone clash — the magic methods want organic/soul/elemental inputs, not metal mechanism parts; a player would ask "why does a ritual need a worm gear?" with no satisfying answer.

## bettermodsbutton   [anchors: support/client UI (1)]
- LEAVE — pure client UI (pause-screen mods button); zero items, zero methods, zero loot. Nothing to weave.

## create_pattern_schematics   [anchors: create (1)]
- LEAVE — pure build-automation tooling for Create's schematic system; no items of gameplay consequence (the three items are schematic tools, not materials), no recipe methods, no loot. Forced weave would be invented.

## trashcans   [anchors: support/automation QoL (1)]
- from: trashcans:item_trash_can / trashcans:ultimate_trash_can | via: (balance note, not a recipe weave) — in a scarcity pack these blocks should be expensive to craft or gated behind a late-game Create fabrication step, otherwise they trivialize byproduct value and undercut M-32 (byproduct → input) and M-26 (consumption sink) design intent. Specifically: gate ultimate_trash_can behind a Create sequenced-assembly chain so "infinite void" is a meaningful build milestone, not a starter convenience. | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a machine that deletes matter at arbitrary rate is endgame infrastructure — you build it, not craft it at a table.
- from: trashcans:liquid_trash_can | via: create:sequenced_assembly (same escalation — liquid void is valuable in automation overflow; gate it) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: a void tank that eats any fluid at max throughput should cost more than iron and wood — it's a fabricated valve, not a box with a hole.
- REWORK: dossier flags "voiding is anti-economy/anti-scarcity by nature" and leaves it as support with no weave. The correct disposition is not to leave it unwoven but to weave it as a *gated* Create build milestone (M-06) so the anti-scarcity effect is earned. The balance note in the dossier is sound; the action is gate it, not just note it.

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — client rendering patch; zero items, zero methods, zero loot. Nothing to weave.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — vanilla recipe enabler only (leather + string → bundle). No items of its own, no methods. Nothing to weave.

## samurai_dynasty   [anchors: survival (1)]
REWORK:
- Dossier notes two strong candidates already (M-03 ore-doubling, M-02/M-10 Yokai drops→magic). Both are correct; promote them to full candidate rows.

New proposals:
- from: samurai_dynasty:jade / samurai_dynasty:ruby / samurai_dynasty:onyx / samurai_dynasty:aquamarine (ores) | via: create:crushing (ore-doubling, +byproduct) | to: create | motif: M-03 | power: everyday→mid | tone: ok | verdict: ACCEPT | hook: crushed jade yields jade dust and a chance at a second gem — an ore-doubler earns their keep the first time a katana costs real material.
- from: samurai_dynasty:akaname_tongue / Yokai drops (mob reagents) | via: occultism:spirit_fire or occultism:ritual (transmute Yokai essence into a spirit component) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Yokai's tongue is already a creature of spirit — burning it in a spirit fire to extract an occult intermediate is an obvious read for any player who knows both mods.
- from: samurai_dynasty:akaname_tongue / Yokai drops | via: ars_nouveau:imbuement (infuse a Yokai drop into a magic reagent used in a spell component) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane infusion of a yokai essence to produce a rare glyph catalyst — folklore and spellcraft run on the same animistic logic.
- from: samurai_dynasty:steel_ingot (c:ingots/steel) | via: create:pressing + create:mechanical_crafting (gate samurai-dynasty steel plates through Create fabrication as a structural material) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: feudal steel forged at a water wheel; modernized in a rolling mill — the metallurgy is the same, the machine is different.
- from: samurai_dynasty:jade (c:gems/jade) | via: ars_nouveau:enchanting_apparatus (jade as an attunement catalyst in an enchanting ritual, thematically: jade is a stone of spiritual protection in East Asian lore) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: jade placed at the corners of the enchanting apparatus — spiritual protection stone as an arcane focus; any player with the lore context nods immediately.
- from: samurai_dynasty Yokai drops | via: M-15 boss-key unlock — gate a specific Create or magic recipe behind defeating a named Yokai boss | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the forge master won't teach you the martensitic quench unless you've bested the Oni — boss gate on a technique, not just a drop.
- from: samurai_dynasty:silver_ore (⚠ c:* silver — NOT galosphere palladium) | via: create:crushing (ore-doubling, silver dust → occultism silver chain) | to: magic | motif: M-03 + M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai silver ore doubled by the crusher feeds occultism's silver-circle rituals — a miner becomes the magic specialist's supplier. ⚠ verify c:tag carefully before Phase 3: do NOT unify samurai_dynasty silver with galosphere (palladium), only with occultism's actual silver tag.
- from: samurai_dynasty spirit_stone blocks | via: create:crushing (deco recycle, lossy — spirit stone → stone dust + rare XP nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: spirit_stone is a themed cultural/spiritual build material; crushing shrines back to dust feels like a desecration the player would resist. The tone clash (sacred → industrial scrap) is strong enough to kill it — leave spirit_stone as a decoration block, not a crusher feed.
- from: samurai_dynasty:steel_ingot | via: numismatics mint (processed steel → steel coin as a mid-tier denomination, if no other mod already owns steel coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: steel already exists as a currency metal in several other mods (Create's own chain, TFMG, etc.); samurai_dynasty steel is c:ingots/steel and would collide with those chains unless scoped narrowly. Better routed through M-03 + M-05 (into Create fabrication) than minting. Flag for cross-chunk coin-metal reconciliation.

## cloth_config   [anchors: support/library (1)]
- LEAVE — config-screen API library; zero items, zero methods, zero loot. Nothing to weave.

## zombiemoon   [anchors: survival (1)]
- REWORK: dossier correctly calls "leave (no unique drop)." Confirm: jar shows 0 items, 0 loot. The mobs use vanilla rotten-flesh-style drops (nothing specific surfaced). A loot-seed proposal would require inventing new drops that the mod doesn't define. Leave stands.
- LEAVE — no unique drops, no items, no methods. The harder undead mobs serve as pure pressure/difficulty flavor. A combat-route supply link (M-34) would require the mobs to drop something tradeable — they don't. No coherent second anchor without inventing content.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly (multi-step fabrication: brass casing + electrum coil + northstar:advanced_circuit, assembled on the sequence line) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion drive isn't bolted together at a bench — it's precision-assembled, calibrated, and tested on the line before it ever lifts.
- from: drones:iron_rotor | via: create:pressing + create:mechanical_crafting (iron sheet → stamped rotor blade → assembled rotor; a mid-tier Create fabrication step) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a stamped rotor blade off the press, assembled on the crafter — every drone that lifts starts in the rolling mill.
- from: drones:controller (assembly controller block) | via: create:mechanical_crafting (brass-heavy precision component; the controller is the computer, not a workbench) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the drone brain is a brass computing assembly — you route it through the mechanical crafter because it's not something you hammer together.
- from: drones:pocket_drone (equipped item) | via: colony MineColonies delivery/logistics — assign a drone as a delivery courier for a colony route (the drone physically moves goods between colony buildings) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony requisitions pocket drones for inter-district deliveries — you supply the drone, the colony uses it.
- from: drones:drill (ability block) | via: createoreexcavation:drilling (the drone's drill ability maps directly to Create Ore Excavation's drill method — a drone with a drill block could be a mobile mining assistant feeding Create extractors) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a drill drone scouting a vein and flagging it for the ore excavator — autonomous prospecting feeds the ore supply chain.
- from: drones:pocket_drone | via: aeronautics logistics arm — a drone as a short-range cargo pod (Aeronautics covers long-haul; drones cover last-meter delivery) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: the airship unloads at the dock; the drone carries parcels from dock to doorstep — logistics hand-off at scale.
- from: drones:wood_rotor | via: create:mechanical_crafting gating | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: wood_rotor is the starter tier — gating the simplest rotor behind a mechanical crafter violates the "never gate a basic component behind a complex recipe" guardrail. Leave wood rotors at vanilla crafting; only mid/endgame tiers need fabrication.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — network/privacy mod; zero items, zero loot, zero methods. Nothing to weave.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — projectile/ballistics API library; zero items, zero methods, zero loot. Indirectly supports aeronautics via Big Cannons but has nothing of its own to route.

== CHUNK COMPLETE ==
