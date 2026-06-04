# Phase 2 candidates — chunk-02

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Obsidilith's heart is the forge-catalyst that lets you chain-assemble the pack's hardest Create machine — a boss kill unlocks the industrial tier.
- from: bosses_of_mass_destruction:ancient_anima | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ancient Anima is literally called an "anima" — routing it through the enchanting apparatus to produce a top-tier source-infused reagent is an obvious arcane fit.
- from: bosses_of_mass_destruction:void_thorns / blazing_eye | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: M-10 (ancient_anima → imbuement) is the stronger and more thematic magic weave; adding a second endgame magic sink on the same mod's drops risks over-routing — one clear magic pillar edge is sufficient, the second dilutes scarcity.
- from: bosses_of_mass_destruction:ancient_anima | via: numismatics bounty (M-14) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: Boss drops are reserved as boss-key gating items (M-15 / reagent-ownership); selling them for coin reduces the gate tension and undermines scarcity. M-14 provisional caveat also applies.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (tesla coil / charging recipe) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Charging an Iron's Spellbooks arcane focus or a magic battery at the tesla coil is the exact "industrial power feeds the arcane" image M-17 was coined for — straightforward, sensible, already motivated in the dossier.
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning → smokeleafindustries generator | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The seed_oil→bioethanol chain is internal to createaddition; routing it *into* smokeleaf's generator doesn't add a real pillar — it's a fuel compat note, not a 2nd-pillar story, and smokeleafindustries is itself only survival-anchored.
- from: createaddition:rolling (ingot→rod/sheet) | via: createaddition:rolling | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: createaddition:rolling already produces the rods/wires Create and TFMG consume; it doesn't add an aeronautics pillar independently — the aeronautics seam is better expressed through TFMG fuels (M-13) and structural alloys (M-23). createaddition's charging bridge to magic (M-17) is the cleaner 2nd-pillar.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw / big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Folkloric creature remains burned in spirit-fire transmuting into an occult essence fits naturally — the capelobo is already supernatural in tone, and its claw/tongue as ritual fuel is the exact M-11 pattern.
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Amber as an arcane infusion catalyst is thematically weaker — amber is a preservation/trapping material, not inherently arcane; and splitting the mod's drops across both occultism (M-11) and Ars (M-10) fragments the weave. One magic sink is sufficient. Defer if the spirit_fire path is taken.
- from: brazil_legends:amber_shard | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Amber as a sellable curio is plausible but the dossier rates it WEAK — it's a common mob drop, not a high-effort processed luxury, which is what M-09 requires to feel justified. Would devalue the coin economy.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — Structure-only datapack with no items, blocks, or methods. No material to route through any method. Indirect weaving via loot-table edits (seeding magic/Create components into its chests) is a data tweak handled at authoring time, not a recipe-graph edge that earns a pillar.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries:*_extract / *_gummy (refined strain products) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The mod ships its own dealer/stoner villager trades, proving the sell-loop concept natively; formalizing refined extracts/gummies as Numismatics trade goods gives the strain farm a coin-economy role and makes specializing in the farm worth real currency.
- from: smokeleafindustries:hemp_crop / raw bud | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Routing raw hemp through the Create millstone as an alternate entry-tier grind (yielding hemp fiber / raw ground material) ties the farm's harvest loop into the Create processing web — the smokeleaf grinder becomes a mid-tier upgrade over the millstone, making the Create spine a visible on-ramp.
- from: smokeleafindustries FE machines | via: createaddition FE↔kinetic bridge | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: This is a compat/config note (hook createaddition's alternator output to the smokeleaf generator's FE input), not a recipe-type weave — it doesn't produce a new recipe edge in the graph and the methods palette has no "FE cable connection" recipe type. Better tracked as a config/server-side power-network note. The two accepted edges (M-09 economy, M-12 Create) are the correct 2nd/3rd pillar moves.

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — Structure-only datapack with no items, blocks, or recipe methods. Its ocean villages are exploration content; no material to route. The aeronautics flavor (sea-travel destination) is atmospheric, not a recipe edge.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / gasoline / LPG | via: TFMG combustion engine → Aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's entire distillation-tower chain exists to refine crude oil into engine fuels — and Aeronautics engines need exactly those fuels. The refinery IS the airship supply line; no other mod has this role.
- from: tfmg:steel_ingot / aluminum frame / cast iron | via: Aeronautics airframe/hull recipes | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: A steel-plated hull built from TFMG plate/frame stock makes airframe construction cost real fabricated material — the blast furnace feeds the shipyard. Scale with ship tier; basic frame costs iron/cast-iron, heavier hulls demand steel.
- from: tfmg:steel / refined fuels | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Steel and fuels are valid M-08/M-09 candidates but tfmg already earns its 2nd pillar (aeronautics) cleanly via M-13+M-23. A third economy connection risks spreading tfmg too thin and devalues the economy pillar's scarcity. Flag for Gate 2 review rather than accepting outright.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:fugu_slice / elder_guardian_roll | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Fugu and elder guardian rolls are high-effort, ocean-gated prestige foods; coastal specialists sell them inland for coin — a natural trade route and exactly the M-09 luxury-good pattern. The ocean biome scarcity (Terralith deep ocean + Tidal Towns) makes the supply chain feel real.
- from: oceansdelight:cut_tentacles / guardian drops | via: create:cutting (farmersdelight:cutting already in) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: farmersdelight:cutting is already the method oceansdelight routes through (the dossier's made-by methods confirm it) — adding a redundant create:cutting path is an over-connection. The economy edge (M-09) is the correct 2nd pillar; no Create recipe edge is needed for a food-focused mod.

## mutantszombies   [anchors: survival (1)]
- LEAVE — No item drops, no recipe methods. Vanilla-style mob expansion whose sole contribution is higher night-threat difficulty. Forcing a drop-sink edge would require inventing drops the mod doesn't have. If the mod is ever updated to add drops, revisit under M-02.

## terralith   [anchors: survival (1)]
- LEAVE — Worldgen-only (no items, blocks, or recipes). Its weave is structural, not a recipe edge: it provides the biome diversity that makes ore scarcity regional, that makes Serene Seasons M-16 weaves feel grounded, and that gives Aeronautics travel a reason to exist. That's real value — but it's not a 2nd-pillar recipe connection. No coherent method-pull route exists.

== CHUNK COMPLETE ==

