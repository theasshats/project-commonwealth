# Phase 2 candidates — chunk-04

## dndesires   [anchors: Create (1)]

- from: dndesires:freezing_sail fan-processing | via: dndesires:freezing (route foreign crops/fish through freezing as a cold-prep step, e.g. freezing raw fish → frozen fillet used in cooking) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create belt running through a Freezing Sail flash-freezes the catch — a chef's cold-chain is just industrial automation
- from: dndesires:rubber (sap → Hydraulic Press → raw rubber) | via: dndesires:hydraulic_compacting (intermediate in Aeronautics seals/gaskets, ship hull components need rubber seals) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: every pressurized hull needs gaskets — rubber from the hydraulic press is the logical seal material
- from: dndesires:milkshake foods (chocolate_milkshake / glowberry_milkshake) | via: numismatics sale | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: milkshakes are everyday low-effort food; selling them doesn't convey the "high-effort luxury" feel M-09 is for — too thin to anchor an economy pillar
- from: dndesires:cardboard_package_* | via: logistical use as Aeronautics ship inventory/cargo-container component | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: cardboard packaging ≠ ship construction; feels forced; no motif matches a "packaging → hull" routing

**Best 2nd pillar for dndesires:** survival (freezing fan-processing as a cold-chain prep step, M-12). The rubber → aeronautics seals weave (M-23) is a valid secondary accept if the aeronautics build-material list wants rubber.

## cold_sweat   [anchors: survival (1)]

- from: cold_sweat:hearth (fuel-burning multiblock climate machine) | via: create:item_application or M-05 native-method gating — gate the Hearth (or a higher-tier cold_sweat:boiler) on Create brass fittings/casings as a required crafting component | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a climate-control machine that runs on steam-era principles ought to need the same brass and casing every other Create machine does
- from: cold_sweat:goat_fur / chameleon_molt / hoglin armor (insulated gear crafted at sewing table) | via: numismatics sale — sell cold-climate insulated gear sets as luxury survival goods for crews heading into frozen/nether biomes | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: insulated armor is personal-survival gear players keep rather than trade; the "luxury good" feel is weak here — the sale quantity would be tiny (one set per player) and doesn't sustain an economy node
- from: cold_sweat:filled_waterskin (hot/cold water container) | via: create:filling — already inbound-woven (made-by: create:filling confirmed) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already an inbound edge (waterskins ARE filled by Create); this is existing, not a new 2nd-pillar weave

**Best 2nd pillar for cold_sweat:** Create, via M-05 gating the Hearth/Boiler on Create brass parts. One clean step; depth matches mid-tier "infrastructure" item.

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / farm_and_charm:oat (raw grains) | via: create:milling — route grains through Create Millstone → flour, so the bread chain requires the tech spine for automated production | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling grain by hand is peasant work — hooking it to a turning millstone is exactly what a Create pack wants
- from: farm_and_charm surplus goods (bacon, butter, eggs, bread, barley_soup) | via: numismatics sale — animal-husbandry produce and baked goods as sellable bulk trade goods; the "feed more → drop more" loop is a natural production surplus engine | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a farmstead that produces more than the crew eats sells the rest — farmhouse goods as the low-floor economy anchor
- from: farm_and_charm:barley | via: vinery:apple_mashing / alcohol_industry:alcohol_boiling — ferment barley into a beer/spirit sellable as a luxury good | to: economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-09 surplus-food sale already covers the economy pillar; adding a second fermentation path is redundant at this stage and vinery routes barley only if its fermentation recipe accepts it (unverified)

**Best 2nd pillar for farm_and_charm:** both Create (grain milling, M-12) and economy (food surplus sales, M-09) are strong accepts — this mod naturally earns 2 pillars.

## oceansdelight   [anchors: survival (1)]

- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice / oceansdelight:cooked_stuffed_squid (high-effort seafood dishes) | via: numismatics sale — coastal specialist players produce and sell these to inland crews; fugu as a high-risk delicacy commands premium price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a dockside cook who risks poison preparing fugu should be able to name their price — inland players pay coin for the danger they avoided
- from: oceansdelight:cut_tentacles / guardian drops (raw materials) | via: create:cutting (farmersdelight:cutting is already inbound) — extend the processing chain with a Create-automation step for bulk tentacle processing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: farmersdelight:cutting is already the method here and is already inbound; routing also through create:cutting adds friction without meaningful gain; the survival→economy path via M-09 is cleaner and sufficient

**Best 2nd pillar for oceansdelight:** economy (M-09, finished seafood dishes as luxury trade goods). Clean, single-step, thematically tight.

## aileron   [anchors: aeronautics (1)]

- from: (no items/blocks; behavior-only mod) | via: ars_nouveau:enchanting_apparatus applying Aileron's Elytra enchants — thematic but only possible if Aileron's enchants are datapack-accessible to the apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: enchant accessibility is unverified; even if it works, Aileron registers zero items and has no material surface to weave — a behavior mod with no craftable outputs cannot anchor a method-routing 2nd pillar
- LEAVE — Aileron is a behavior/mechanic overhaul (no items, no registered recipe-types, no outputs). It has no material surface for a method-routing weave. The aeronautics anchor stands on its own; forcing a 2nd pillar here creates a defect, not value.

## valarian_conquest   [anchors: survival (1)]

- from: valarian_conquest:*_citizenship / mercenary hire (faction allegiance gate items, soldier spawn items) | via: numismatics coins — seat mercenary hiring and citizenship purchases on Numismatics coin so faction politics runs through the player economy | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary knight costs real coin — faction warfare and the player economy interlock naturally (provisional motif M-14)
- from: valarian_conquest faction armor/shields (crafted at armorsmith station) | via: create:pressing / mechanical_crafting — gate the armorsmith station's output on Create-pressed metal plates so faction gear requires industrial fabrication | to: Create | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: Valarian Conquest's vibe is medieval-feudal; requiring brass gears and mechanical presses to arm a knight feels anachronistic and tonal mismatch — the faction flavor is pre-industrial

**Best 2nd pillar for valarian_conquest:** economy (M-14 provisional — mercenary hire and citizenship fees paid in Numismatics coin). One coherent step; faction politics routing through the coin economy is exactly what M-14 is for.

## mushroomquest   [anchors: survival (1)]

- from: mushroomquest rare/mythical mushroom caps (agarikon, angel's wing, etc. — effect-bearing rare forages) | via: occultism:spirit_fire / ars_nouveau:imbuement — transmute rare mushrooms into occult essences or arcane reagents; the "mythical" tier especially invites a magic-reagent sink | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a mushroom that heals the sick and grows only once a year should be worth something to an alchemist — rare caps as spirit-fire reagents is the obvious use
- from: mushroomquest common mushrooms (bay bolete, puffball, etc.) | via: farmersdelight:cooking / extradelight:melting_pot — run common mushrooms through the cooking chain into prepared dishes | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mushrooms go in the pot — no player needs convincing
- from: mushroomquest rare mushrooms | via: numismatics sale — sell rare foraged caps as luxury goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-11 magic-reagent use is a stronger 2nd pillar and gives rare mushrooms a mechanical role beyond "sell for coin"; economy via sale is the fallback if magic isn't adopted

**Best 2nd pillar for mushroomquest:** magic (M-11 — rare/mythical caps → spirit-fire reagents). Common caps also enter the cooking chain (M-12) as a light everyday step. Two clean weaves.

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / deeperdarker:soul_crystal (Otherside mob drops, rare) | via: occultism:spirit_fire / ars_nouveau:imbuement — transmute soul material into occult essences or imbue into a source reagent; "soul" is exactly the thematic currency of both Occultism and Ars spirit work | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the souls pulled from the deepest dark are precisely what occultists are looking for — Otherside is the harvest ground for the spirit trade
- from: deeperdarker:heart_of_the_deep (boss drop, rare Warden loot) | via: gating a complex Create or magic recipe — use as a boss-key gate for an endgame machine/ritual component | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heart of the deep as a resonator core or arcane keystone — you don't crack open the Otherside and come back empty-handed
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing → gravel + experience_nugget (M-04 deco recycle) — already partly inbound (create:crushing in made-by) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone is stone — even eldritch stone grinds to gravel (already wired inbound, confirms the anchor)
- from: deeperdarker:warden_carapace | via: numismatics sale as rare Otherside luxury | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: M-11 and M-15 together already give a strong magic+Create 2nd-pillar dual; adding economy as a third stretches scope and the warden carapace fits better as an endgame crafting material than a sellable good

**Best 2nd pillar for deeperdarker:** magic (M-11 — soul_dust/soul_crystal into spirit reagents, STRONG) plus Create (M-15 — heart_of_the_deep as boss-key gate, endgame depth). M-04 is already wired. Two solid pillars established.

## solclassic   [anchors: survival (1)]

- from: solclassic food-variety penalty system (ambient rule — the bigger the food roster, the more diminishing returns push trading) | via: numismatics — food-variety pressure makes diverse cooked goods worth buying/selling; the economy pillar is exercised *through* solclassic's rule even though solclassic doesn't own a recipe | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this is a systemic amplifier, not a recipe-routing weave; M-09 already covers the food-to-economy connection via Farm & Charm and Ocean's Delight; solclassic earns credit indirectly but cannot anchor its own 2nd-pillar connection without a material surface
- LEAVE — Spice of Life: Classic is an ambient behavioral rule with no items to route (3 items total: basket, wicker_basket, food_history_book), no registered recipe-types, and no outputs. It amplifies the survival pillar by making the food roster matter more, but the amplification effect is not a method-routing weave. The food-to-economy path belongs to food mods, not solclassic. One pillar by design is correct here.

## immersive_armors   [anchors: survival (1)]

- from: immersive_armors:heavy_chestplate / immersive_armors:steampunk set (endgame armor, expensive to craft) | via: create:pressing → Create-pressed iron plate required as a crafting component so Heavy/Steampunk sets route through the tech spine | to: Create | motif: M-05 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: a heavy iron cuirass needs rolled sheet metal — the forge press is the right tool; the Steampunk set belongs in a Create workshop by name
- from: immersive_armors:divine_chestplate / immersive_armors:robe set (magic-aesthetic, glowy) | via: ars_nouveau:enchanting_apparatus armor_upgrade — finish the Divine or Robe set through the Enchanting Apparatus so it crosses into the magic web | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a "divine" armor set completed through an arcane ceremony makes thematic sense — the enchanting apparatus is the final step for sacred gear
- from: immersive_armors finished sets | via: numismatics sale — sell themed sets as artisan goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: gear players wear doesn't flow through the economy steadily; sets are personal-use items, not repeatable trade goods — thin economy anchor

**Best 2nd pillar for immersive_armors:** Create (M-05 — Heavy/Steampunk sets gated on pressed plates) and magic (M-10 — Divine/Robe sets finished at Enchanting Apparatus). Two accepts; each covers a different armor tier cleanly.

== CHUNK COMPLETE ==

