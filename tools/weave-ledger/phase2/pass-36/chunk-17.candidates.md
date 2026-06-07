# Phase 2 candidates — chunk-17

## occultengineering   [anchors: create, magic (2)]

Already at ≥2 anchors. Auditing existing connections + checking for new links.

REWORK: OK — connections sound. The Create↔Occultism bridge is the defining purpose of this mod (M-05 native-method gating, M-11 ritual/transmutation sink, M-19 haunting seam via the fan-enspirit mechanic). The reserved `occultengineering:spirit_solution` reagent is correctly owned. No arbitrary edges found.

New link candidate:
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is an occult alloy already created through the Create-Occultism pipeline — pressing it into coin stock makes the specialist who controls occult automation the pack's mint-master for a rare alloy coin, a meaningful economic role
- from: occultengineering:mechanical_pulverizer / phlogiport (automated ritual logistics) | via: occultism:miner → spirit_trade (M-18 service pathway) | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: an occult-automation specialist offers ritual-processing as a paid service (spirit-pulverizing rare ores, phlogiport delivery of reagents) — labor flows player-to-player, no vendor; makes the occult-engineering investment a tradeable capability, not just personal automation
- from: occultengineering:spirit_solution (the reserved occult intermediate) | via: create:haunting (M-19) | to: Create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 already routes create:haunting INTO spirit outputs; reversing it (spirit_solution back through haunting) is a near-round-trip with no design gain. spirit_solution's reserved role is as an occult INPUT reagent, not a Create feedstock — flagging to avoid accidental double-spend.

## particlerain   [anchors: support/atmosphere (1)]

- LEAVE — pure client-side particle-rendering mod; no items, no blocks, no methods, no loot tables. Zero content surface to weave. Atmosphere/QoL support role only.

## collective   [anchors: support/library (1)]

- LEAVE — genuine zero-content code library (Serilum shared event-hook utilities). No items, no blocks, no recipe types, no loot. Nothing to weave.

## create_hypertube   [anchors: create, aeronautics (2)]

Already at ≥2 anchors. Auditing existing connections.

REWORK: OK — connections sound. Hypertubes are kinetic-Create-powered entity transit; Create (sequenced_assembly construction) + aeronautics/logistics (player/entity transport arm) is the correct pairing. The mod moves people, not items, so no processing pull exists. No further anchor is coherent.

New link candidate:
- from: hypertube network (player transit infrastructure) | via: config/worldgen tie — zone-gating hypertube entrances to colony-built stations | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies doesn't control hypertube placement; this would be a building-convention, not a recipe/method edge. No mechanism exists to gate tube entrances via colony — not a Phase-3 action.
- from: create_hypertube:hypertube_entrance (crafted via create:sequenced_assembly) | via: create:sequenced_assembly, requiring northstar:advanced_circuit as a component | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: wiring up a hypertube entrance requires an advanced circuit — the automation/transit infrastructure is gated on the electronic-manufacturing tier, so fast transit is a Create-tech milestone not a basic craft

## knightlib   [anchors: support/library (1)]

- LEAVE — library/API mod. The medieval content items (Great Chalice, grails, homunculus, essences) are dormant without Knight Quest, which is not in this pack. Weaving dead/inert items is explicitly ruled out ("do not weave dead items"). If Knight Quest is ever added, knightlib:great_essence and knightlib:filled_grail are natural M-02/M-10 reagent candidates (mob-drop/altar sink). Not applicable today.

## detect-afk-1.2.2   [anchors: support/QoL (1)]

- LEAVE — genuine zero-content server-behavioral mod. AFK detection with no items, no blocks, no methods, no loot. Nothing to weave.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]

- LEAVE — Kotlin language runtime/adapter. Pure developer plumbing; zero player-facing content, no items, no methods. Nothing to weave.

## handcrafted   [anchors: support/decoration (1)]

Sanctioned decoration palette anchor. Target: find a coherent 2nd anchor via method-pull.

- from: handcrafted wood-furniture (chairs/tables/cupboards/shelves — planks-tier) | via: create:cutting / woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create-driven sawmill refines raw planks into precise furniture blanks, so furnishing your base is a minor Create byproduct rather than pure bench-craft — light, one-step, appropriate for everyday deco tier
- from: handcrafted:berry_jam_jar (semi-functional food decoration) | via: farmersdelight:cooking or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: berry jam is a real food product — routing it through a cooking station makes it an ingredient in Farmer's Delight recipes (a jam-filled pastry, a toast topping), anchoring the deco mod to the diet/survival web at zero design cost
- from: handcrafted furniture (metal-trim variants — iron/copper/brass) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: metal-trim furniture is mid-tier deco, not a flagship item; gating deco behind mechanical_crafting would be punishing for what players use furniture for (base decoration). M-12 via cutting is the right depth for everyday deco. Keep the create:cutting ACCEPT above; this heavier gate is unwarranted.
- from: handcrafted furniture (as colony interior fittings) | via: minecolonies:composting or hut-supply requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: MineColonies doesn't pull furniture via recipe or requests in a way Phase 3 can author — colony huts don't consume handcrafted blocks. No mechanism to make this a real gate; would be a building convention, not a weave.

## kleeslabs   [anchors: support/QoL (1)]

- LEAVE — genuine zero-content behavior-only QoL mod. Single-slab-break interaction; no items, no blocks registered, no methods, no loot. Nothing to weave.

## northstar   [anchors: create, aeronautics (2)]

Already at ≥2 anchors. Auditing connections + checking for new links.

REWORK: OK — connections sound. Heavily Create-woven (crushing/mixing/pressing/sequenced_assembly used inbound) and its rockets ARE the off-world logistics pillar. The dossier's "economy via numismatics minting from titanium/tungsten" candidate (M-08) is worth accepting below. The M-09 luxury-good candidate in the dossier is correctly flagged WEAK — M-09 is retired; reject it.

New link candidates:
- from: northstar:titanium_ingot / northstar:tungsten_ingot (scarce off-world ores, obtained only via rocket/space expedition) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: space metals are genuinely scarce (regional + off-world gated) — pressing them into a high-denomination coin creates the settlement medium for the highest economic tier; the player who controls rocket access controls the supply of the rarest coin, a real specialization
- from: northstar:advanced_circuit | via: create:sequenced_assembly (as a required component in high-tier Create/aeronautics recipes) | to: create/aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits from space technology gate complex Create machinery — a natural high-tier sequenced-assembly keystone that forces tech players to invest in rocketry for the highest machines
- from: northstar:biofuel (c:tag liquid fuel) | via: createaddition:liquid_burning | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: biofuel is a renewable off-world crop output that powers engines — the logistics arm runs on space-derived fuel, creating a supply chain from the off-world base back to the fleet
- from: northstar:advanced_circuit / northstar:astronomical_reading | via: occultism:spirit_trade (M-18 spirit acquisition of scarce off-world materials) | to: magic | motif: M-18 | power: endgame | tone: ok | verdict: REJECT | reason: spirit trade acquiring off-world circuits is thematically strained — occult spirits fetching space tech feels arbitrary, not "of course." The two tones (eldritch spirit vs. hard sci-fi rocket) clash. Reject on theme-fit.
- from: northstar:martian_steel_ingot | via: create:compacting → structural alloy plate → aeronautics hull | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Martian steel is a space-sourced structural alloy — using it as high-tier airframe/hull plating creates a direct demand signal from the aeronautics fleet back to the rocket program, tying both halves of the logistics pillar together
- from: northstar:titanium_ingot | via: northstar:electrolysis or create:crushing (ore-doubling) | to: create | motif: M-03 | power: endgame | tone: ok | verdict: REJECT | reason: M-03 is specifically ore-doubling (ore → crushed + byproduct) and northstar already uses create:crushing inbound — it's already doing ore-doubling internally. Redundant; no new edge.

## letsdocompat   [anchors: survival (1)]

Food-web glue mod. It IS the weaving layer for the food cluster, but has no content of its own to give a second anchor. Check if a method-pull reveals something the dossier missed.

- from: letsdocompat food-tag unification (items/foods/leafy_green and other c:tags) | via: existing farmersdelight/extradelight/farm_and_charm methods | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: letsdocompat already anchors to survival — this is its only anchor by construction (it wires food chains together). Its c:tag output (leafy_green) is consumed by the food mods it bridges; that's its function, not a new weave edge. No second anchor is coherent for a pure bridge mod.
- LEAVE — the mod IS the food-system weave glue; it has no standalone content to give it a second pillar. Its survival anchor is well-founded and it serves the "one web not clusters" goal directly.

## shulkerboxtooltip   [anchors: support/QoL (1)]

- LEAVE — genuine zero-content client QoL mod. Container hover-preview tooltip; no items, no blocks, no methods, no loot. Nothing to weave.

## biolith   [anchors: support/worldgen-library (1)]

- LEAVE — genuine zero-content worldgen API library. Biome placement framework with no items, no blocks, no methods, no loot. The library that other biome mods are built on, never a content node itself.

## resourcefulconfig   [anchors: support/library (1)]

- LEAVE — genuine zero-content config library/API. No player-facing items, blocks, methods, or loot. Infrastructure for other mods' configuration screens.

## vc_gliders   [anchors: aeronautics (1)]

Single anchor. Method-pull: gliders consume paper + tier metals; upgrades consume copper and nether materials. Create methods available: pressing (sheets), mechanical_crafting, deploying; also createaddition:charging.

- from: vc_gliders:paraglider_iron / _gold / _diamond (tiered flight gear) | via: create:pressing (reinforced paper stock pressed from Create-processed fiber/sheet) + create:mechanical_crafting (frame assembly) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: flight gear assembled on a Create mechanical crafter from pressed reinforced paper stock — the personal flight tier is a Create fabrication milestone, not just a bench recipe; makes early aerial mobility a Create investment
- from: vc_gliders:copper_upgrade (copper component upgrade) | via: create:item_application — deployer applies the copper upgrade to a base glider | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: the copper upgrade is a single-step deployer-apply (the deploy-application upgrade motif) — exactly the light tier M-20 is for; adds a small Create step to upgrading flight gear without over-engineering it
- from: vc_gliders:paraglider_netherite / combined upgrades (endgame flight tier) | via: create:sequenced_assembly (multi-step build) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the netherite glider is the top tier but it's still a wearable exploration tool, not a machine or technology keystone. Sequenced assembly for personal gear is overkill for what is essentially a pre-Elytra mobility item; M-05 + M-20 above already give the tier ladder appropriately. Avoid gate-stacking for durable exploration gear.
- from: vc_gliders (weather-risk mechanic — lightning damage in rain) | via: config tie to Serene Seasons weather / particlerain storms | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is specifically a *seasonal reagent* feeding a machine/ritual; the glider weather-risk is a behavior/config not a recipe. No Phase-3 method exists to author this as a weave (would be a config/behavior note, not a recipe edge). No-motif as a weave; reject.

## s_a_b   [anchors: create, aeronautics (2)]

Already at ≥2 anchors. Auditing existing connections.

REWORK: OK — connections sound. Steel armor blocks are constructed via create:compacting/mixing (correct) and exist to armor Big Cannons / Aeronautics ships (correct). No arbitrary links found. The dossier notes M-06 as optional deepening — evaluate:

- from: s_a_b:hardsteelblock / doublesteelblock (top-tier plating) | via: create:sequenced_assembly (multi-step armor plate fabrication: press → compact → apply heat treatment) | to: create/aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hardest armor plating earns its protection through a multi-step Create chain — compacting + hot-blast + deploy-layer — so the most fortified warship hull is a real manufacturing investment, not just a material swap; naval/military construction becomes a Create depth tier
- from: s_a_b steel plating (bulk volume needed for large ships) | via: aeronautics/trains as transport requirement | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: M-31 (logistics-required bulk good) is about goods heavy/bulky enough that trading them at scale REQUIRES the logistics arm. Steel plate blocks are heavy but not uniquely so — any building material could claim this. The link is true-ish but generic; not a tight enough mechanism to qualify as a distinct weave edge. The mod's Create+aeronautics anchors already cover the loop role.

## invtweaksemuforipn   [anchors: client-QoL/compat (1)]

- LEAVE — genuine zero-content client compat shim. InvTweaks keybind emulation layer over IPN; no items, no blocks, no methods, no loot. Nothing to weave.

## meadow   [anchors: survival (1)]

Rich content mod with 4 registered methods (meadow:cheese, meadow:cooking, meadow:felting, meadow:woodcutting), loot=yes, alpine biomes, salt ore, cheese pipeline. Strong 2nd-anchor candidates.

- from: meadow:alpine_salt (c:tag material from alpine_salt_ore) | via: create:milling (grind salt ore → salt + mineral byproduct) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore runs through a Create millstone — getting culinary-grade salt from the alpine mountains requires a small tech step, and the mineral byproduct (gypsum/calcite dust) becomes a Create feedstock; connects the pastoral cheese-making region to the Create processing web
- from: meadow:cheese_wheel / alpine cheese variants | via: create_cheese:maturing (the cheese maturation method is already in the palette!) | to: create/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: meadow cheese wheels can age in a Create-cheese maturing rack — fresh-pressed alpine cheese gains value over time, creating both a maturation specialist role and a Create tie that the methods palette explicitly supports; the aged product commands a premium in the player economy
- from: meadow:chambray_wool (felted textile) | via: meadow:felting → then create:mechanical_crafting (assembling textile + frame for a glider wing) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: chambray felt from alpine wool is a structural textile — it becomes wing fabric in vc_gliders' reinforced paper process or a Create-assembled component, linking pastoral wool production to the personal-flight tech tier
- from: meadow:alpine_salt | via: farmersdelight:cooking / extradelight:evaporator — salt is a preservation/seasoning input in cooking chains | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: meadow is already anchored to survival; this would deepen within the same anchor, not add a second one. The salt-in-cooking link is real and valuable but doesn't extend the loop to a new system — worth noting for recipe authoring but not a new anchor weave.
- from: meadow:cheese_wheel (aged luxury dairy good) | via: minecolonies colony cook/farmer requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies colony cook requests cheese wheels as a luxury food supply — the alpine dairy specialist becomes the colony food supplier for the settlement tier; colony demand continuously pulls on cheese production, making the pastoral role economically durable
- from: meadow:alpine_salt_ore (a worldgen ore in a specific alpine biome) | via: GTMOGS regional ore-gen (alpine biome = regional salt lock) | to: scarcity/economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt is only found in meadow biomes — the regional scarcity foundation means salt (essential for food preservation/cooking chains) must be traded from players who settled in alpine terrain; one of the cleanest regional-gate candidates in the food web

## txnilib   [anchors: support/library (1)]

- LEAVE — genuine zero-content multiversion code library. No items, no blocks, no methods, no loot. Developer infrastructure for Txni's mods only.

## durabilitytooltip   [anchors: support/client-QoL (1)]

- LEAVE — genuine zero-content client UI mod. Numeric durability tooltip overlay; no items, no blocks, no methods, no loot. Nothing to weave.

== CHUNK COMPLETE ==
