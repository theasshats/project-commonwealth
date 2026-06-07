# Phase 2 candidates — chunk-16

## create_jetpack   [anchors: create, aeronautics (2)]

Dossier already marks this ≥2 anchors (Create + aeronautics). Review the existing connections before proposing more.

REWORK/OK check:
- The aeronautics anchor is *sound*: a jetpack powered by Create compressed air is exactly the personal-mobility arm of the aeronautics/economy logistics system — it advances the loop (Create production → aeronautics mobility). The Create anchor is trivially solid (it's a Create add-on).
- The dossier note "could be a boss-drop/MineColonies-gated unlock" is the right instinct — this is a mid-tier flight item, and gating it behind a boss drop or colony unlock fits the depth model.
- No new cross-system weave is coherent here beyond what's already anchored. The only plausible third would be survival (flight eases exploration pressure), but that's ambient; the gear itself does no survival processing.

Candidate proposals (method-pull pass):
The registered method `create_jetpack:copy_components_mechanical_crafting` is a component-copy helper, not a connective sink. The jetpack itself consumes compressed air (M-26 consumption) and is built from brass+backtank (already Create). No foreign material leaves the mod.

- from: jetpack (brass tier mid-game flight gear) | via: M-15 boss-key unlock (gating) | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: The Invoker boss drops a Hallowed Gem; weave it as a required input for the brass jetpack upgrade, so personal flight costs a raid clear — flight earned, not bought.
- from: jetpack mobility | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: Jetpack is gear, not a trade good — it's the *tool* of the logistics/combat specialist, not a commodity that flows through the economy. Bare "sell it" logic — no demand gating.
- from: jetpack (netherite tier) | via: M-06 sequenced-assembly keystone | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: The netherite upgrade already implies deep progression; adding another sequenced-assembly chain on top of what the jetpack already requires would pile cost on cost without adding cross-system contact. M-15 gating is the cleaner, more thematic hook.

OK — connections sound (Create + aeronautics are the right pair; M-15 boss-gating is the proposed depth step).

## betterpingdisplay   [anchors: support (client UI) (1)]

Pure client-side UI mod: replaces ping bars with a numerical millisecond value. Zero blocks, zero items, zero loot, no recipe types. No material surface to route through any method. Client QoL; player-facing but purely informational — no loop contact.

LEAVE — genuine zero-content client UI; no items, no methods, nothing to weave. Sanctioned support role.

## meadow   [anchors: survival (1)]

One anchor only — needs a second. Rich content: cheese pipeline (meadow:cheese_form), alpine salt ore, oats/yarrow/lavender/juniper crops, felt textiles (meadow:felting), alpine woodcutting. Registered methods: meadow:cheese, meadow:cooking, meadow:felting, meadow:woodcutting. The dossier flags two candidate directions (M-09 for cheese luxury — that's retired; M-12 for Create processing). Blind pass.

Method-pull:
- alpine_salt: salt is a universal culinary intermediate — Create:milling could grind salt ore into salt, which feeds cooking chains (farmersdelight/extradelight). That's M-12.
- cheese wheel: a cured/matured product — Create_cheese has `create_cheese:maturing`; meadow cheese forms via its own pipeline but there's a thematic adjacency. More strongly: cheese wheel as an M-35 aging product (meadow already has the multi-step pipeline, so it fits the aging motif). Aged cheese wheels are a high-value specialty food.
- felt/chambray wool (meadow:felting): felting consumes wool → felt textile. Felt as an aeronautics material for cabin lining / acoustic dampening is thematic but no registered aeronautics method takes textile inputs — no direct route. Reject that angle.
- oats (alpine crop): could feed Create:milling (oats → oat flour, M-12). Oat flour then feeds farmersdelight/extradelight baking chains.
- alpine_salt + oats + cheese wheels as M-16 seasonal reagents: alpine biome crops and salt are only accessible in the alpine meadow sub-biomes. Season-locked accessibility (winter closes access): M-16.
- Occultism / Ars: lavender as a ritual/imbuement reagent (M-10/M-11 arcane infusion pull — lavender is a classic arcane herb). Power: everyday herb → light imbuement step.

Concrete candidates:

- from: meadow:alpine_salt_ore / meadow:alpine_salt | via: create:crushing / create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore crushed in a millstone gives alpine salt — a cooking ingredient that Create miners can supply to food specialists, routing through the Create spine and feeding the food cluster.
- from: meadow:cheese_wheel (multi-step cured product) | via: meadow:cheese pipeline → M-35 aging motif | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged cheese wheels are a genuine specialty trade good — they take time and a cow, a cooking frame, and a press, so a dairy specialist sells them rather than every player making their own; the aging step (cheese mass → pressed wheel → mature) maps cleanly to M-35 maturation.
- from: meadow:lavender (alpine herb) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: Lavender distills into an arcane additive in the imbuement apparatus — an alpine biome crop feeding the magic web (scarcity → pressure: you need the alpine biome to source it).
- from: meadow:oats (alpine crop) | via: create:milling → farmersdelight cooking chains | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Oat flour milled from alpine oats becomes a baking intermediate (bread/porridge at the cooking station), weaving the meadow's unique crop into the food-production chain; the Create millstone is the processing gate.
- from: meadow:alpine_salt + meadow:cheese_wheel (alpine crops) | via: Serene Seasons (winter access restriction) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Alpine biomes are snowbound in winter — access to salt ore and high-altitude crops becomes difficult seasonally, making meadow products a weather-gated scarcity driver feeding the survival pressure face.
- from: meadow:chambray_wool / felt | via: create:item_application or M-20 deploy | to: aeronautics | motif: M-23 | power: mid | tone: clash | verdict: REJECT | reason: Felt textile as an airship interior component is atmospheric but no aeronautics recipe method accepts textile inputs; there is no registered aeronautics felt-intake method, and fabricating one from scratch is Phase-3 authoring we cannot do here. Also, structural aeronautics material (M-23) is specifically metal plates/alloys, not fabric — tone mismatch.
- from: meadow:cheese_wheel as a colony colony request | via: minecolonies requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies colony requests cheese wheels as a food supply for its workers — dairy farming becomes colony-feed production, creating a recurring demand sink that never zeroes (M-26 consumption via M-28 colony route).

REWORK: dossier candidate M-09 (luxury good → coin) is already retired — correct to ignore. The M-12 Create suggestion in the dossier was sound; this pass extends it to specific materials (salt ore, oats).

## puzzleslib   [anchors: support (library/API) (1)]

Zero blocks, zero items, zero loot, no recipe types. Pure multi-loader abstraction library for Fuzs's mods. No player-facing surface at all.

LEAVE — genuine zero-content code library; no items, methods, or loot to weave. Sanctioned dependency support role.

## cookingforblockheads   [anchors: survival (1)]

One anchor — needs a second. Core purpose: modular kitchen multiblock that surfaces available food recipes from connected storage. Has 140 blocks (the appliances in 16 colors), 148 items, loot=yes. Registered method: cookingforblockheads:toaster. Downstream sink for food mods, not a source.

Method-pull:
- The Oven and Fridge are mid-tier kitchen appliances — gating their upgraded variants on Create brass/copper sheets is a M-05 native-method gating weave. Power: mid (oven/fridge are quality-of-life but not basic; the basic cooking table is everyday).
- Toaster (cookingforblockheads:toaster): consumes bread → toast. Toast is an everyday food output. Could feed extradelight/farmersdelight chains, but that's just a food recipe using its own method — no cross-system contact unless toast feeds a magic ritual (far-fetched).
- The Cooking Table itself is a recipe aggregator for ALL food mods. This makes it the natural "kitchen infrastructure" node — gating it on Create parts (M-05) turns it from a free convenience into a significant craft milestone for the food cluster.
- Loot=yes means it has loot table entries — could seed a rare kitchen appliance into a structure chest, giving explorers a reason to raid for kitchen gear. Not a weave, but worth noting.
- Colony request: a MineColonies Cook/Restaurant hut would logically request a Cooking Table or Oven as equipment — M-28. That makes the kitchen an infrastructure good the colony player provides, not a free vanilla drop.

Concrete candidates:

- from: cookingforblockheads:oven / fridge (mid-tier kitchen appliances) | via: KubeJS recipe gate (Create brass/copper sheets as inputs) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Upgrading the kitchen from a plain counter to a real Oven or Fridge needs fabricated Create brass fittings — the food specialist must trade with or also be a Create tier player to unlock batch cooking infrastructure.
- from: cookingforblockheads:cooking_table (the recipe-hub block) | via: KubeJS recipe gate (Create andesite casing / copper cog) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: The Cooking Table is the central QoL hub that lets players navigate a ~200-mod food catalogue — gating it on Create parts risks making the QoL paywall too early. Everyday-tier rule: don't gate a basic convenience. The Oven is mid-tier and the right place to put the Create input floor, not the Table.
- from: cookingforblockheads:fridge (cold storage) | via: minecolonies requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The MineColonies Restaurant/Cook hut requests a Fridge as kitchen infrastructure — colony-builders commission it from the food-kitchen specialist, creating a colony supply route for appliances.
- from: cookingforblockheads:toaster output (toast) | via: extradelight/farmersdelight cooking further chain | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Toast as an intermediate ingredient is plausible (bread → toast → something richer), but the toaster already lives in survival; this doesn't add a second anchor, just deepens the first. No cross-system contact.

REWORK: dossier's economy-via-numismatics candidate was already flagged WEAK and is correctly rejected (bare sell link). The M-05 Create-gating candidate in the dossier is sound; this pass confirms it and narrows to the Oven/Fridge level rather than the Cooking Table.

## naturalist   [anchors: survival (1)]

One anchor — needs a second. Rich content: 28 blocks (froglass, shellstone), 104 items, loot=yes. Outputs: venison, bushmeat, antler, glow_goop, snail shell, butterfly. Registered method: naturalist:net (captures small critters). Dossier flags M-09 (retired), M-04, M-12.

Method-pull:
- venison / bushmeat (raw meat): farmersdelight:cutting or create:milling could process these into cuts/sausage. M-12 processing-chain pull — meat from wildlife enters the food processing chain.
- antler: bone-analog reagent. Occultism's spirit_fire turns organic matter into magical intermediates. antler → occultism spirit_fire → bone-ash or chalk analog? That's M-11. Could also be ars_nouveau:imbuement as an arcane additive (M-10). Antler as a natural talisman — thematically coherent with hunting-magic traditions.
- glow_goop (firefly/jar material, light-emitting): Ars Nouveau is built on luminescent spell components; glow_goop has a strong arcane-bioluminescent tone. Feed into ars_nouveau:imbuement as a light reagent. M-10, M-02.
- shellstone/froglass deco: can crush back to raw/sand + xp nugget via create:crushing. M-04 lossy recycle.
- butterfly (net-captured): Ars has alakarkinos_conversion and summon_ritual types; a butterfly could be an arcane familiar catalyst via M-11 (ritual). Power: everyday creature.
- glow_goop: also plausible as a Create enchantment industry input (create_enchantment_industry:grinding → experience fluid) — bioluminescent materials → liquid XP. M-10 adjacent.
- Seasonal angle: naturalist animals spawn in specific biomes; their populations behave seasonally (bears hibernate in winter conceptually). Could tie bear drops to a winter pressure event — M-16, but endermoon-style (no item output from naturalist itself, just behavioral). Weak without a registered method.

Concrete candidates:

- from: naturalist:venison / naturalist:bushmeat (raw meat) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Naturalist deer and boar supply a butcher's cutting board with wildlife game — venison cuts and bushmeat strips feed the food cluster's high-protein diet demand, routing wild hunt into the survival food web.
- from: naturalist:antler | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: Antler is a classic animist component — feeding it through the imbuement apparatus as an arcane input (powering an earth/nature glyph recipe) makes hunting a supply chain for the magic specialist; survival drops → magic production.
- from: naturalist:glow_goop (bioluminescent fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Firefly glow_goop is a natural luminescent reagent; the imbuement apparatus converts it into a light-based spell component — catching fireflies on Ender Moon nights (M-22) yields magic supply during the lunar event.
- from: naturalist:glow_goop | via: create_enchantment_industry:grinding | to: create | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: The grinding method turns enchanted items into XP fluid — glow_goop isn't enchanted, so there's no clean method routing here. Tone-adjacent but no registered hook.
- from: naturalist:shellstone / froglass deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone and glass deco from aquatic naturalist fauna crushes back to sand/gravel + XP nugget in the crusher — a lossy but coherent recycle link tying the deco palette to the Create metal economy.
- from: naturalist:butterfly (net-captured) | via: ars_nouveau:summon_ritual or occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: Butterfly as a ritual component is romantic but the net-capturing mechanic registers naturalist:net (not a summoning type), and a butterfly sacrifice feels tonally off for Ars's whimsical school. Antler and glow_goop are cleaner M-02/M-10 hooks already accepted; this redundant route adds no new system contact.
- from: naturalist animals (deer/bear) | via: M-34 combat-route supply (hunting as a combat-adjacent profession) | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: A dedicated hunter farms venison and antler to trade with food specialists and magic users who can't or don't want to hunt — hunting becomes a trade-supplying profession, advancing the loop's economy leg via the combat-supply motif.

REWORK: dossier M-09 is retired (correct). Dossier M-04 (shellstone crush) is the weakest link but passes thematic coherence; accepted above. Dossier M-12 (meat processing) confirmed and extended to farmersdelight:cutting specifically.

