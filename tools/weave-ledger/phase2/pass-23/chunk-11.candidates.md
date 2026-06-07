# Phase 2 candidates — chunk-11

## kambrik   [anchors: library/API (1)]
LEAVE — pure Kotlin mod-dev framework; zero items, zero recipe-types, no gameplay surface. Genuine zero-content library; nothing to weave.

## resourcefullib   [anchors: support/library (1)]
LEAVE — cross-platform utility/API library (Team Resourceful); zero items, zero recipe-types. Genuine zero-content library; nothing to weave.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]
OK — connections sound. Already spans compat (support) + aeronautics (furniture-on-ships behavior). Zero items/recipe-types; no material surface to route elsewhere.
- from: n/a | verdict: REJECT | reason: no items or material surface; any forced edge would be noise.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork molten metals / crushed ore outputs | via: numismatics mint (recipe) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined molten metal casts directly to coin blanks — the ore-doubling yield becomes the mint feedstock, closing the scarcity→Create→economy loop
- from: createmetalwork crushed magic-mod metals (occultism/galosphere ores crushed via its c:crushed_raw_materials/* tags) | via: create:crushing | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: magic-mod ores share the same industrial crush pipeline — the Create spine doubles yield on every metal including arcane ones, threading the magic pillar into the foundry
- from: createmetalwork molten_steel_bucket / steel ingot | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: cast steel plate becomes structural hull material for heavier Aeronautics airframes — molten-foundry output earns its place as the ship's load-bearing layer
REWORK: existing anchor is Create only (1) — no second anchor authored yet; all three above add it. No existing connections to flag as weak/arbitrary.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:earthrend_gauntlet / mowziesmobs:ice_crystal (boss drops) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Ferrous Wroughtnaut's gauntlet and Frostmaw's ice crystal are the keystone inputs of a multi-stage Create sequenced-assembly — the boss becomes the gate on high-tier tech, exactly as DESIGN intends
- from: mowziesmobs boss drop artifacts (ice_crystal, sol_visage, wrought helm) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: transmuting a Mowzie's artifact through spirit-fire extracts its mythic energy as a magic reagent — tribal-boss lore maps naturally onto the occult absorption ritual
- from: mowziesmobs boss drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: hunting Mowzies' bosses pays bounties in coin — the dangerous world converting combat reward into currency (provisional motif)
- from: mowziesmobs:sol_visage (sunlight-powered mask) | via: create_new_age:energising | to: create | motif: M-17 | power: endgame | tone: ok | verdict: REJECT | reason: sol_visage is an artifact weapon/gear item, not a tool that "charges" — forcing FE-charging onto a tribal sun-mask is a tone clash and there's no clear gameplay hook beyond "it glows"; M-15/M-11 already cover the endgame surface.
REWORK: no existing connections beyond survival-1; M-15 + M-11 are the strong adds.

## polymorph   [anchors: support/QoL (1)]
LEAVE — pure recipe-conflict resolver; zero items, zero material surface, no gameplay mechanics to weave. Genuine QoL-only library; nothing to route.

## ohthetreesyoullgrow   [anchors: support/library (1)]
LEAVE — tree-generation framework library (0 blocks, 0 items); no player-facing content. Genuine zero-content worldgen support library.

## jakes-build-tools-2.0.1.5   [anchors: QoL/building tools (1)]
- from: minecraft:experience_flask_* (XP storage items it registers) | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the experience_flask items store/release XP as a QoL tool; routing them through create:mixing would imply Create processes XP-flasks, which is mechanically odd and not a real material flow — forced edge.
- from: minecraft:hammer (3×3 mining tool) | via: create:sequenced_assembly | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the hammer is a basic builder utility, not a progression item — gating a construction-QoL tool behind sequenced assembly violates the "never gate a basic/everyday component behind a complex recipe" guardrail.
LEAVE — builder-utility datapack; items are vanilla-material consumables or XP flasks. No material processing surface, no meaningful 2nd anchor; forcing one would be noise.

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert readable item (novelty); no mechanics, no material surface, no coherent 2nd-anchor candidate. Genuine zero-surface flavor gag.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight lantern_fruit / pitcher_taro / cherry blossom crops | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the sniffer-recovered crops run through a Create mill to yield flour, dried petals, or extracts — ancient-world ingredients enter the Create processing chain, weaving the archaeology flavor into the tech spine
- from: trailandtales_delight:cherry_cheese_pie / cherry_cheese_pie_slice, ancient_coffee (multi-step luxury dishes) | via: numismatics sell/price (recipe) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of cherry cheese pie or a flask of ancient coffee commands a premium at the trading floor — high-effort sniffer-crop dishes become luxury trade goods
- from: trailandtales_delight:ancient_coffee (status-effect drink) | via: farmersdelight:cooking → create:mixing | to: create | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: ancient_coffee is not season-gated (no Serene Seasons hook on its ingredients) — forcing M-16 seasonal-reagent here is groundless; M-12 already covers the Create milling/processing link cleanly.
REWORK: existing anchor is survival-1; the two ACCEPTs above add Create + economy.

## playeranimator   [anchors: library/API (1)]
LEAVE — client-side animation API; zero items, zero recipe-types, zero gameplay surface. Genuine zero-content library; nothing to weave.

## toomanypaintings   [anchors: support/decoration (1)]
LEAVE — pure decoration (adds painting entity variants + selection GUI); 0 items (the painting is an entity, not an item with material tags), 0 recipe-types, nothing to route through any method.

## letmefeedyou   [anchors: support/QoL (1)]
LEAVE — behavior-only multiplayer QoL mod; registers no items, no blocks, no recipe surface. Nothing to weave.

## modonomicon   [anchors: support/documentation (1)]
LEAVE — data-driven guidebook engine; 6 book items are presentation/UI with no material value, no recipe-types. Genuine zero-content-surface documentation support library.

## xaeroworldmap   [anchors: support/QoL (1)]
LEAVE — client-side navigation map; zero items, zero blocks, zero recipe-types. Nothing to weave.

## midnightthoughts   [anchors: survival (1)]
- from: midnightthoughts well-rested buff (status effect) | via: config tie: pair well-rested effect with a craftable sleep-aid food (e.g. a chamomile/valerian extract cooked via farmersdelight:cooking) | to: survival (deepens existing) | motif: no-motif | verdict: REJECT | reason: no existing item surface in the mod — any link would require inventing a new item, which is authoring, not weaving an existing material; also fits no M-01..M-24 motif. Leave as survival-1 behavior mod.
LEAVE — sleep/rest buff mechanic; no items, no material to route. Genuinely one-anchor behavior mod with no join key for a second anchor via any method.

## moblassos   [anchors: survival (1)]
- from: moblassos:golden_lasso / diamond_lasso (mid/endgame capture tools) | via: create:sequenced_assembly | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: lassos are consumable livestock-QoL tools — gating them behind sequenced assembly is punishing for an everyday utility item, and they lack the flagship/progression character that M-05 native-method gating requires. Depth should scale with power; lassos are not progression gates.
- from: moblassos:hostile_lasso (captures monsters <50% HP) | via: bountiful board → numismatics | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the lasso itself isn't the bounty-rewarded item — it's the tool; M-14 wants the *drop* (a mob product) as the bounty commodity, not a capture tool. No real M-14 surface here.
LEAVE — mob-transport utility; no material flow, no method to route through. The aeronautics "carry livestock to ships" synergy is a usage pattern, not a method-routable weave. Genuine QoL tool with no 2nd-anchor method edge.

## createlowheated   [anchors: Create (1)]
- from: createlowheated:basic_burner (solid-fuel heat source) | via: survival pressure: fuel scarcity now drives Create processing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is the seasonal-reagent motif — a season-gated crop feeding a machine. The basic_burner consuming charcoal/coal is a fuel-demand mechanic, not a seasonal reagent. There's no applicable M-01..M-24 motif for "fuel demand creates survival pressure." Mark no-motif.
- from: createlowheated:basic_burner fuel consumption | no-motif (fuel-demand/survival-pressure tie) | verdict: REJECT | reason: the mechanic (heat now costs fuel) deepens the Create spine and implicitly tightens survival-pressure, but there is no method to route through and no motif that covers "passive-to-active fuel cost." A single-block Create balance tweak; a 2nd anchor via method-pull is not achievable here without inventing an edge.
LEAVE — single-block Create heating tweak; deepens Create internally but offers no material join key or method for a second-anchor weave. Genuine support-tier within Create.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies (high-step processed consumables) | via: numismatics sell/price (config/recipe) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the full strain-processing pipeline (grow→dry→grind→extract→synthesize→gummy) outputs premium luxury consumables that feed the coin economy at the trading floor — the dealer-village trades already hint at this; Numismatics formalizes it
- from: smokeleafindustries:generator (FE output) → createaddition:charging | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the hemp generator's FE feeds into the Create-Addition charging bridge — the stoner tech farm plugs into the Create spine's electric tier, ending its isolation as an FE island
- from: raw hemp buds / hemp biomass | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hemp stalks run through a Create mill yield hemp fibre + seed oil intermediates — the organic harvest enters the Create processing chain before hitting smokeleaf's own machines, giving Create a genuine role in the farm pipeline
- from: smokeleafindustries strain seeds / crossbred strains | via: serene seasons / seasonal availability | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: strain growth is year-round in the mod (grow-pots are indoor/artificial light-based); no seasonal gating exists — forcing M-16 would require authoring a seasonal-grow restriction that the mod doesn't support without KubeJS. Not a natural method-pull; too forced.
REWORK: existing anchor is survival-1; M-09 + M-17 + M-12 ACCEPTs add economy + Create.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot / bronze_ingot / steel_ingot (Create-processed metals) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a fresh regional scarcity metal — crush→alloy→mint puts it into the coin economy, threading worldgen scarcity through Create production into currency
- from: create_ironworks:steel_ingot / steel_plate (fabricated structural material) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: forged steel plate is the natural structural hull material for mid-tier Aeronautics airframes — the Create metallurgy tier earns its depth by gating real ship construction
- from: create_ironworks:bronze_ingot (alloy) | via: create:mixing → ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze, a pre-industrial alloy with alchemical resonance, is attuned in an arcane infusion apparatus to yield a magically-charged alloy component — the foundry tier feeds the magic pillar's mid-range recipes
- from: create_ironworks:steel_ingot | via: create:sequenced_assembly (M-06 keystone) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: steel is already *produced* through Create chains; making steel *also* a sequenced_assembly ingredient for a deeper item is not necessarily wrong, but this is a create→create loop (deepens within Create only, no second anchor gained). Add to REWORK note rather than a new-anchor candidate.
REWORK: existing anchor is Create-1; the three ACCEPTs above add economy + aeronautics + magic. No existing connections to flag as weak.

== CHUNK COMPLETE ==
