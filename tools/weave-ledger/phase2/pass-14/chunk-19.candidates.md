# Phase 2 candidates — chunk-19

## better_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content library (no items, no blocks, no loot, no methods); provides config/message API only. No coherent pillar weave possible.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a metal door crushed back to iron nuggets + xp nugget is exactly the "deco recycles" loop Create handles everywhere else in the palette
- from: mcwdoors wood door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crush to planks/sticks is trivially cheap and adds no interesting decision — the iron variants are the meaningful case; over-indexing the wood family dilutes the pattern
- REWORK: existing anchor is "support (decoration palette)" — that's fine as the floor. The iron-door crush is a genuine M-04 pull, but should be done as part of a wholesale deco-family pass (Macaw's Fences, Windows, Doors together) rather than piecemeal; flag for that batch.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library with no items, no blocks, no loot; only token c:tags (iron/gold nuggets as scaffolding) that belong to vanilla, not to balm itself. No content surface to weave.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — pure client UI mod (loading-screen tip rotator); no items, no blocks, no loot, no methods. Zero gameplay content surface. Tips text is pack-authoring, not a pillar weave.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical mushroom caps (agarikon, angels_wing, etc.) | via: farmersdelight:cooking or extradelight:oven | to: survival/Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: rare foraged fungi processed into high-nutrition or effect-bearing dishes makes the foraging loop pay off through the same kitchen chain Farmer's Delight and Farm & Charm already run through
- from: mushroomquest rare/mythical caps (deadly or mythical tier) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a deadly death-cap or mythical fungus burned in spirit fire yielding an occult essence is thematically coherent — the otherworldly mushroom has soul-adjacent qualities
- from: mushroomquest rare caps (mythical tier) | via: numismatics sell/shopkeeper | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare foraged goods as luxury trade items match the intended emergent economy — specialist foragers sell to the alchemist/cook player
- from: mushroomquest common edible mushrooms | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: imbuing a common puffball into an arcane reagent is tone-wrong and depth-wrong — everyday mushrooms shouldn't gate behind arcane infusion; M-10 says "don't gate basics behind infusion"; use spirit_fire (M-11) only for the rare/deadly tiers
- from: mushroomquest glowshroom variants | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling a glowshroom into powder is mechanically thin and produces no useful intermediate in the existing recipe web — no method downstream wants "mushroom powder" as a named reagent; forcing it is arbitrary
- OK — existing survival anchor is sound; the three ACCEPT candidates above (cooking chain, spirit_fire, luxury trade) establish a solid 2nd-pillar through magic and economy without forcing anything.

## createlowheated   [anchors: Create (1)]
- from: createlowheated:basic_burner | via: config / design | to: Create (depth) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: the Basic Burner is a balance mechanic, not a connective material; it deepens the Create pillar internally but there is no cross-pillar item to route. No motif covers "mechanic that makes another pillar's baseline harder." This is a support-tier tweak within Create; LEAVE is appropriate.
- LEAVE — single-block Create heat-balance mod; 1 block, 1 item, no loot, no tradeable output, no magic surface. Its entire purpose is making Create heat an active resource cost. No coherent 2nd-pillar weave available without inventing a new motif — and that would be a Gate 0 escalation, not a local accept.

## formations   [anchors: survival (1)]
- from: formations structures (altars, cabins, ruins, campsites) | via: loot-seed | to: economy | motif: M-08/M-14 | power: everyday | tone: ok | verdict: REJECT | reason: formations registers loot=no (confirmed by dossier digest) and adds no loot tables of its own — the structure palettes are vanilla/modded blocks with no item-drops controlled by this mod. Seeding coin or reagents into "formations loot" has no table to target; the mod exposes no loot injection point.
- LEAVE — scatter-structure worldgen with no loot tables (loot=no confirmed) and no items besides the dev template_editor tool. The structures use existing block palettes; formations controls placement, not drops. A loot-seed requires a loot table to seed; none exists here. Genuine zero-loot-surface case; LEAVE is correct per briefing guardrail.

## rhino   [anchors: support (1)]
- LEAVE — Mozilla Rhino JS engine; KubeJS hard dependency. Zero blocks, items, loot, or methods. Pure runtime library. No content surface whatsoever.

## l2library   [anchors: support/API (1)]
- LEAVE — shared library for LightLand mods; no blocks, items, loot, or methods. Pure developer plumbing. No content surface to weave.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm barley / oat grains | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling farm grains in a Create Millstone into flour ties the farmstead bread-chain into the industrial spine — the mill is the obvious machine for grain, and it already processes wheat in Create packs
- from: farm_and_charm meat (ground patties via mincer), butter, eggs surplus | via: numismatics shopkeeper / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the husbandry loop (feed animals → more drops → surplus) is a natural production-for-trade engine; selling bulk butter/eggs/patties makes the specialist farmer a real economy player
- from: farm_and_charm barley (as a grain crop) | via: farmersdelight:cooking or extradelight:vat | to: survival/Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: barley → fermented mash (via vat or mixing) → alcohol intermediate connects the farmstead grain to the broader food/drink processing chain and feeds M-09 luxury-good exports
- from: farm_and_charm crops (cabbage/onion/corn/tomato via shared c:tags) | via: farm_and_charm:mincer → create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the shared c:tags already allow FD/Farm&Charm to interoperate at the recipe level; adding a Create:mixing step on top of an existing in-mod mincer path is redundant depth without a payoff intermediate — the grain milling ACCEPT above is the right Create hook, not the veggie processing chain
- from: farm_and_charm:fertilized_farmland | via: create:deploying | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: deploying fertilizer onto farmland is a player-action trivially done by hand; routing it through a deployer adds no interesting decision and Create's mechanical farming loop doesn't need it — this would be forced integration
- REWORK: none needed — mod has no existing cross-pillar connections (made-by: vanilla only); the three ACCEPTs above are new.

== CHUNK COMPLETE ==
