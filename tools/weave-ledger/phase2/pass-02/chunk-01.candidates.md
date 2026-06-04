# Phase 2 candidates — chunk-01

## aileron   [anchors: aeronautics (1)]
- LEAVE — mechanic-only mod; registers 0 items/blocks under its namespace and operates on the vanilla Elytra. No material surface to route through any method. The weak candidate (Ars Enchanting Apparatus applying its enchants) is blocked by uncertainty about whether its enchantments are datapack-exposed and, even if so, would be an incidental flavor edge rather than a structural 2nd pillar. Aeronautics anchor is coherent on its own.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:backpack_tank (portable fluid buffer) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the integrated fluid tank makes a backpack a self-contained resupply unit — it deserves a Create-manufactured tank core, not just a crafted bucket
- from: travelersbackpack:blank_upgrade (upgrade module chassis) | via: create:pressing or create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: blank_upgrade is a basic/everyday component — gating it behind Create machinery violates the depth-scales-with-power rule; the sequenced-assembly tank weave (above) already earns the 2nd pillar at the right tier without gatekeeping basics
- from: travelersbackpack:netherite (netherite-themed backpack variant) | via: travelersbackpack:backpack_upgrade | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: this just re-routes the cosmetic upgrade through its own method; doesn't actually connect to Create unless Create parts are added as inputs, which would be over-engineering a cosmetic

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / tfmg:gasoline (refined fuels, outputs of distillation) | via: TFMG combustion engines → Create Aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: you don't fly without fuel — the distillation tower and the pumpjack become the supply line for every airship expedition
- from: tfmg:steel_ingot (output of industrial blast furnace chain) | via: numismatics mint (coin from processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is hard-won and finite — a premium Numismatics sell-good makes the factory profitable and the economy feel industrial
- from: tfmg:aluminum_ingot (bauxite → casting) | via: numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: steel already earns M-08 for tfmg; a second processed-metal coin-sink from the same mod duplicates the motif without adding a new pillar — keep one flagship metal as the luxury good, not both
- from: tfmg:plastic (vat_machine_recipe output) | via: create:mixing or occultism:spirit_trade | to: magic or economy | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: plastic-to-magic is a tone clash (dieselpunk industrial ≠ arcane); and routing plastic through spirit_trade is contrived. No coherent motif exists for this pairing.

## createmechanicalcompanion   [anchors: Create (1)]
- LEAVE — personal combat companion with a deep Create build chain; combat is not a pillar, and the mod has no tradeable, magic-facing, or logistics surface to route through. No coherent 2nd pillar; dossier concurs.

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — structure-only datapack; registers 0 items/blocks/methods. No material surface to weave. Dossier concurs; its value is exploration content, not a recipe edge.

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart (Night Lich drop) | via: create:sequenced_assembly (as required input to a high-tier Create machine) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the pack's own design rule — "complex Create tech unlocks via boss drops" — this is the literal realization; beating the Night Lich is the only way to reach the next automation tier
- from: bosses_of_mass_destruction:ancient_anima (Obsidilith drop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient anima is pure arcane essence made physical — the Enchanting Apparatus hungers for it; it becomes the catalyst for Ars' tier-3 infusion steps
- from: bosses_of_mass_destruction:blazing_eye (Nether Gauntlet drop) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: ancient_anima already earns the magic pillar cleanly via M-10; adding a second endgame-magic route for blazing_eye risks over-spending boss drops — the blazing_eye is thematically a fire/nether artifact rather than a spirit reagent, so the occultism:ritual routing is a weaker fit than the Ars imbuement. Reserve blazing_eye for Create (M-15 alternate) or leave it as a vanilla-tool ingredient. Not wrong — just redundant given ancient_anima already carries magic.
- from: bosses_of_mass_destruction:void_thorns (Void Blossom drop) | via: bountiful bounty board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: void thorns are the rarest drop in the pack — posting a bounty that pays top coin for them makes boss-hunting economically rational, not just heroic (provisional motif)

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (as keystone input to a high-tier Create cryo-refrigeration or coolant-circuit machine) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw guards a cold the world doesn't otherwise have — the ice crystal is what lets Create cool a reaction that no furnace can
- from: mowziesmobs:earthrend_gauntlet (Wroughtnaut drop — unbreakable axe) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the earthrend gauntlet is a melee weapon, not a raw material; routing a finished weapon into an imbuement step is a forced edge (the item already has its own identity). Better to treat it as a loot reward and keep it out of the recipe web.
- from: mowziesmobs:elokosa_paw (Elokosa drop — moon-phase-linked) | via: Ars/occultism method gated on lunar event | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elokosa is a moon-phase mob — its paw is only available during the right moon, making it a natural lunar reagent input into a magic ritual that can only be completed on certain nights
- from: mowziesmobs (boss kills) | via: bountiful bounty → numismatics | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 bounty is already used for bosses_of_mass_destruction:void_thorns in this chunk; extending it to Mowzie's drops too dilutes the bounty table and makes every boss a coin source rather than a distinct progression gate. Mowzie's value is the Create/magic weave, not trade.

## solonion   [anchors: survival (1)]
- from: solonion:golden_lunchbox (top-tier food container) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the golden lunchbox auto-serves your best food — earning that convenience through a Create-built clockwork mechanism makes it feel like a designed artifact, not just a crafting upgrade
- from: solonion:lunchbox | via: create:pressing / milling | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: lunchbox is a basic quality-of-life item — gating it behind Create processing violates the depth-scales-with-power rule. Only the golden (top-tier) variant should have a Create component.

## bakery   [anchors: survival (1)]
- from: bakery:strawberry_cake / bakery:chocolate_gateau / bakery:apple_pie (high-effort finished baked goods) | via: numismatics sell / MineColonies food supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bakery that can't sell its cakes is a hobby — Numismatics prices on finished baked goods make the cooking web economically productive
- from: bakery wheat-based inputs (flour / dough) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mills have always made flour — routing bakery wheat through a Create millstone is the one step that makes your bread a machine product, connecting the kitchen to the factory floor
- from: bakery:apple_jam / bakery:chocolate_jam (high-effort condiments) | via: ars_nouveau:imbuement as alchemical solvent | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: jam as a magic catalyst is a tone clash — baked condiments are wholesome food, not arcane reagents; forcing them into Ars imbuement reads as silly rather than sensible. The food↔economy edge (M-09) is the coherent 2nd pillar here.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster (top rotor tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is not a whittled stick — it takes a Create sequenced-assembly line to build the precision internals; the best drone flight is earned through the tech spine
- from: drones:iron_rotor (mid-tier rotor) | via: create:pressing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: pressing iron sheets into a rotor blade is a single natural Create step; mid-tier drone flight should touch the Create spine without over-engineering it
- from: drones:pocket_drone (assembled, equipped) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a pocket_drone is a personal-use item that requires assembling in-world; it's not a trade good in the same sense as food or coin-metal. Selling assembled drones as Numismatics luxury goods is contrived — a player wouldn't naturally equate "I built a cool drone" with "now I sell it." Create weave is the right 2nd pillar here.

== CHUNK COMPLETE ==



