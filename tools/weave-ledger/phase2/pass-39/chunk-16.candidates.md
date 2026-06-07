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

