# Phase 2 candidates — chunk-02

## spark   [anchors: support/performance (1)]
- LEAVE — pure performance-profiling tool; zero items/blocks/loot/recipes. Genuine zero-surface support role; nothing to route through any method.

## fluid   [anchors: Create, aeronautics (2)]

- REWORK: existing Create + aeronautics anchors are sound — the centrifugal pump / smart interfaces are genuine build-required kit for large ship plumbing, and its parts are crafted through Create methods. OK — connections sound.
- from: fluid:honeycomb_mold (exists in item list) | via: create:filling (honey fluid → mold) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a copper-cast honeycomb mold lets a beekeeper run honey through Create's fluid system into candied/wax goods — everyday processing step that ties the copper plumbing set to the farming/food chain
- from: fluid:neon_tube | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: neon tube is deco-lighting glass, not metal; M-04 is specifically metal/stone deco recycle — tone clash for a glass tube, and the yield is trivial

## mcwfences   [anchors: support/decoration palette (1)]
- from: mcwfences metal fence variants (acorn/bastion/cathedral metal fences) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal fences crush lossy back to iron/steel nuggets + an XP nugget — the standard deco-recycle seam; fits any wholesale Macaw's deco-family pass; doesn't gate basics
- from: mcwfences wood fence variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing wood fences is redundant — wood is already abundant and the vanilla path is trivially cheap; adds no interesting loop pressure
- from: mcwfences hedge variants (leaf-based) | via: create:milling | to: survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: grinding hedges into mulch/compost is technically possible but thematically forced — hedges are pure deco; the input signal that says "mill this" is absent; tone clash

## formationsnether   [anchors: survival (1)]
- from: Nether structure loot tables | via: loot-seed (magic reagent drops) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a mob-drop reagent (soul-fire essence, nether-born shard) into ritual-altar and castle loot tables turns a ruined Nether castle into a supply node for the magic pillar — exploration feeds the arcane web
- from: Nether structure loot tables | via: loot-seed (Numismatics coin) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: bare coin-in-loot would be a faucet; economy is player-run — coins should emerge from minting, not drop from chests; violates the player-minted-currency ruling
- from: Nether structure loot tables (rare chest) | via: loot-seed (boss-key component) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a rare Nether relic (nethersteel fragment, skull-key token) found only in formationsnether castles/sanctuaries gates a high-tier Create sequenced_assembly — makes Nether exploration load-bearing for the Create tech tier

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — pure behavior hook (right-click harvest/replant); zero items/blocks/loot. Genuine zero-surface QoL mod; nothing to route.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's ice_crystal is a required keystone in a high-tier Create cold-processing chain (cryo-distillation, frost-gear fabrication) — the boss-kill gates the tech tier exactly as the design intends
- from: mowziesmobs:earthrend_gauntlet / wrought helm | via: create:sequenced_assembly (boss-key input) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: wrought-iron artifacts from the Ferrous Wroughtnaut are material inputs for a Create-machined heavy-alloy or armour-press chain — mythic forging requires the boss's own metal
- from: mowziesmobs:elokosa_paw (Elokosa Howler drop, mid-tier) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: transmuting the Howler's lunar paw through spirit_fire yields a moon-attuned reagent feeding Occultism rituals — a mob-drop that would otherwise sit idle becomes magic fuel
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: ice_crystal is already proposed as an M-15 Create gate above; double-spending a single boss drop as both a Create key AND a magic reagent splits the drop's scarcity value and would make Frostmaw fights mandatory for both pillars — keep it on one route (M-15 Create is stronger fit for a physical artifact)
- from: mowziesmobs combat route (boss kills) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mowzie drops (ice_crystal, gauntlet parts) are farmed by combat specialists and traded to Create/magic players — the supply side of the boss-gate; a combat player's standing product
- from: mowziesmobs Barakoa village structures | via: loot-seed (magic reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the village loot is already the territory of the boss drops (the Sol Visage / sun-power items); seeding a separate magic reagent into the village chests dilutes the thematic identity of the Sol Visage as the unique artifact — keep the village's value anchored to the boss fight

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco/tool/armor set (bars, chains, lanterns, armor) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper-oxidation deco (exposed/weathered/oxidized bars, chains, lanterns) crushes lossy back to copper nuggets + XP nugget — weaves the vanilla-plus copper set into Create's copper economy at zero recipe depth (everyday tier)
- from: copperagebackport copper tools / armor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn copper tools/armor crush to nuggets — recycles the early-game toolset; consistent with iron-tool crushing; satisfying loop for a "copper age" feel
- from: minecraft:copper_chest (oxidized stages) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: all four oxidation stages of the copper chest crush to copper nuggets + XP nugget — the whole deco palette folds into the ore economy with one lossy step
- from: Copper Golem chest-to-chest hauling | via: config/behavior | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the Copper Golem's logistics role is flavor-overlap with Create's own item transport; there's no implemented method connecting it to Numismatics or trade — no motif fits a pure-behavior neighbor; leave
- from: copperagebackport copper blocks (oxidation stages) | via: northstar:electrolysis | to: Create/Northstar | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: electrolysis of copper oxidation blocks is thematically plausible but Northstar's electrolysis targets fluids/brine, not blocks; forcing a cross-route dependency here invents an unimplemented method step — reject pending Northstar electrolysis surface confirmed

## spyglass_improvements   [anchors: support/QoL client (1)]
- LEAVE — pure client-side zoom/UI tweak, no items/blocks/loot. Genuine zero-surface QoL mod; nothing to route.

## ldlib2   [anchors: support/library (1)]
- LEAVE — code library (UI/render/data infrastructure); the two registered blocks are dev/test stubs with no player-facing surface. Genuine zero-surface library; nothing to route.

## createfood   [anchors: survival, Create (2)]
- REWORK: dossier lists an economy candidate via M-09 (luxury good → coin). M-09 is retired — bare "sellable dish" is the ambient endpoint, not a weave. Flag for correction: the economy candidate should be reframed as M-26 (dishes are a consumption sink — eaten against hunger/diet pressure, renewing demand) or M-33 (cook-for-hire service). Not a structural problem; the two existing anchors are sound.
- from: createfood finished dishes (pizza, pie, ice cream) | via: consumption / diet-demand | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-processed dishes are consumed against diet-variety pressure (Diet mod five-group system) — the cook's output is continuously spent by every player, renewing demand and closing the production→survival→demand loop
- from: createfood high-tier plated dishes (apple_cheesecake, bacon_pizza etc.) | via: emergent trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a food specialist who controls the Create kitchen (mixer, press, deployer chains) provides dishes-for-trade to non-cooking players; cooking-as-a-service is the cook's economy role — no NPC, just player-to-player demand
- from: createfood processed doughs/batters (multi-step Create chains) | via: create:milling→mixing→pressing sequence | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is already baked into createfood's own existing recipes — it IS the M-12 consumer; proposing it again is circular. The anchor is already Create; no new link.
- from: createfood seasonal crop inputs (apple, melon, pumpkin) | via: create:mixing (season-gated fruit availability) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Serene Seasons makes the apple/melon/berry harvest seasonal; Create Food dishes using those crops become season-dependent — a pumpkin pie is an autumn specialty, tightening the survival-pressure loop through food scarcity

## libipn   [anchors: support/library (1)]
- LEAVE — GUI/config/logging library for IPN; no items/blocks/loot. Genuine zero-surface dependency; nothing to route.

## createpickywheels   [anchors: Create (1)]
- from: water-wheel biome-gate (river biome required) | via: config/worldgen-gating | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the river-biome requirement for water wheels turns river-adjacent settlement into a scarce early-power node — players must settle near rivers or trade for wheel-generated power/output, directly linking Create power generation to regional geography (the scarcity foundation)
- from: windmill biome-gate (Overworld + open air required) | via: config/worldgen-gating | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the open-air/Overworld windmill requirement makes Nether/underground bases power-disadvantaged — above-ground exposure is a survival tradeoff (you get power but you're visible); real Create specialization emerges from geography
- from: power-placement constraint | via: no new method — behavior-only | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: REJECT (duplicate) | reason: the two biome-gate entries above already capture this; a third overlapping entry adds nothing — the behavior is the same mechanic, not a third weave point

## packetfixer   [anchors: support/compat (1)]
- LEAVE — pure network packet-size fix; zero items/blocks/loot. Genuine zero-surface infra mod; nothing to route.

## ribbits   [anchors: survival (1)]
- from: Ribbit merchant Amethyst-Shard trade economy | via: KubeJS trade bridge | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Amethyst Shards (a regionally-scarce gem) are the Ribbit economy's currency; a KubeJS bridge minting a Ribbit-denomination Numismatics coin from Amethyst Shards (player-processed: crushed → minted) turns the swamp village into a genuine regional market node — the scarcity of amethyst geodes makes the Ribbit market a travel-incentive, not a freebie
- from: ribbits:toadstool / ribbits:mossy_oak_planks woodset | via: create:cutting (sawmill) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood-cutting for any exotic planks is a low-signal weave; mossy oak is a deco-flavor wood with no unique properties that Make a second Create link interesting — the anchor value is trivially low
- from: Ribbit sorcerer buff trades | via: emergent demand | to: magic | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ribbit sorcerer NPC grants player buffs in exchange for Amethyst Shards; a magic specialist who cultivates shard supply and trades them to sorcerers offers a service route — the sorcerer as a magic-adjacent service provider the magic pillar can integrate (or the Ribbit sorcerer trades a magic reagent that feeds Ars/Occultism)
- from: ribbits:toadstool (mushroom blocks) | via: ars_nouveau:imbuement or farmersdelight:cooking | to: magic/survival | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: toadstool-as-reagent is thematically appealing but would invent a new reagent role for a deco block without a reagent-ownership assignment — register a DECISIONS.md escalation if this is wanted; don't author it here

## create_pattern_schematics   [anchors: Create (1)]
- from: create_pattern_schematics:pattern_schematic (repeating build tool) | via: aeronautics build workflow | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: pattern schematics riding a gantry/contraption auto-extend ship hulls and rail corridors — the repeating-schematic tool is exactly how a player constructs a large Aeronautics airframe efficiently; it's a build-enabler for the aeronautics tier, granting it a second anchor in the logistics arm
- from: create_pattern_schematics:empty_pattern_schematic | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the schematic items already route through vanilla crafting; adding a mechanical_crafting gate on an M-05 logic requires a machine the schematic's use-case doesn't justify — it's a paper+quill tool, not a product that earns a multi-step gate













