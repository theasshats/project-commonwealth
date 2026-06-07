# Phase 2 candidates — chunk-09

## minecolonies   [anchors: survival, Create (2)]
- REWORK: existing Create anchor (M-05 quarry gating on andesite/brass) is sound per dossier.
- OK — connections sound. Two anchors confirmed; dossier explicitly names the economy 3rd-weave candidate as emergent-by-design (leave to economy pillar). No forced add here.
- from: minecolonies:apple_pie / baked_salmon / colony foods | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony cook produces surplus food → sold at market stall; ties settlement output to the player economy naturally
- from: minecolonies:ancienttome (University research gate) | via: boss-drop as gate | to: Create (boss-key) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: ancienttome is already the colony research gate; making it depend on a boss drop adds a hard gate in front of the gate — stacks friction incorrectly; the pack already has M-05 gating on Create parts which is enough depth at this tier

## timm   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content client UI mod (biome title overlays, no items/blocks/methods). No coherent weave possible.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — scripting engine that authors weaves, not a weave target; no items, no methods, no material surface.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments (nuggets, fangs, feathers, shells) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a Gaia harpy feather / gorgon scale is exactly the "mythic creature essence" Occultism rituals should want — player kills fantasy bestiary mob → transmuted into spirit-reagent
- from: grimoireofgaia boss busts (bust_valkyrie / bust_gorgon etc.) | via: loot-seed → numismatics bounty | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: bounty board wants the boss's trophy bust — kill the mini-boss, cash in the bust; combat feeds coin (provisional motif noted)
- from: grimoireofgaia:pearl_block / gem fragments | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: pearl_block is mythic ocean material → arcane imbuement refines it into a mid-tier Ars reagent, connecting Gaia's ocean mobs to the magic production chain
- from: grimoireofgaia metal nuggets (c:nuggets/diamond, c:nuggets/emerald) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: these are *standard* diamond/emerald c:-tagged nuggets; routing them through Create crushing adds nothing over vanilla smelting — the mod's real weave value is its unique themed drops, not re-processing standard ore nuggets. Strength is in M-11/M-10 above.
- REWORK: existing connections — dossier lists create:emptying (a bottle drop?) and farmersdelight:cutting (a food ingredient cut) as current inbound edges. These are thin single-step touches; the spirit_fire / imbuement route (M-11/M-10) gives the bestiary a *second pillar* anchor properly. Flag the create:emptying edge as weak unless the specific drop is documented — it reads as an ad-hoc edge, not a deliberate loop step.

## bookshelf   [anchors: support/library (1)]
- LEAVE — pure mod-dev library (Darkhax codec/registration helpers). Zero items, zero blocks, no loot. Genuine zero-content library.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: venomous fang from a subterranean predator → transmuted in Occultism spirit-fire into a poison-essence reagent; dungeon biome feeds the magic web
- from: undergroundworlds temple/pyramid brick deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as WEAK and it is — crushing deco bricks back to gravel/raw is a mechanical correctness note, not a "of course" player hook. The brick set is a structural deco palette, not a material feedstock anyone wants. Low value; keep M-11 as the real anchor.
- from: undergroundworlds:desert_charm / antidote_flask (Curios accessories) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the charm that grants blindness immunity is upgraded through Ars' enchanting apparatus to also grant night-vision or a similar arcane bonus — dungeon gear crosses into the magic web via an upgrade rather than a recipe replacement

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Both anchors established and correct (Create-machined munitions arming aeronautics ships). The dossier notes a possible boss-drop gate for the heavy-autocannon/rocket tier — that is a deepening candidate.
- from: boss-drop signature item | via: cbc_at munition assembly chain (M-15 gate) | to: Create/aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy autocannon's critical recoil spring or rifled barrel demands a nethersteel alloy or boss-drop component — the most powerful shipboard gun earns its tier through earned progression, not just crafting table brass
- from: cbc_at autocannon/rocket weapon blocks | via: loot-seed (cbc_at loot=yes) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: bounty on assembled weapon blocks doesn't make sense — the economy weave for weapons is "sell the finished gun via numismatics trade" not a bounty board drop. No clear loot-seed hook; cbc_at's loot=yes likely reflects spawn-egg/cartridge entries, not a structure. Economy weave here is weak and forced.

## createfisheryindustry   [anchors: Create, survival (2)]
- OK — connections sound. Two anchors confirmed.
- from: createfisheryindustry seafood dishes (seafood_chowder, lobster_soup, cod_steak) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: automated fishery produces high-effort processed seafood → a "fishmonger" trade specialty; the maritime-cannery output funds the economy alongside farming goods
- from: createfisheryindustry:fish_skin | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish_skin is already the mod's own leather-substitute output; pressing it again into something further adds a step with no clear "of course" product. The processing chain is already Create-heavy (bait_trap/peeling); another Create processing step on its output is redundant, not depth.

## betterpingdisplay   [anchors: support/UI (1)]
- LEAVE — client UI only (numerical ping in tab list). Zero items, zero blocks, zero loot. Genuine zero-content utility.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — pure client spyglass behavior tweak. Zero items, zero blocks. No coherent weave — the vanilla spyglass itself is not a weave target.

## notenoughanimations   [anchors: support/visual (1)]
- LEAVE — pure cosmetic client animation overrides. Zero items, zero blocks. No material surface.

## immersive_paintings   [anchors: support/decoration (1)]
- LEAVE — decorative canvas expression mod. Items are 4 painting/graffiti blocks crafted from vanilla mats; no fluids/reagents/ores to route. The dossier correctly flags any Create frame route as busywork.

## accessories   [anchors: support/API (1)]
- LEAVE — slot-framework API; provides no items or recipes itself. The wearables that weave live in other mods.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads kitchen appliance blocks (oven, fridge, sink) | via: create:mechanical_crafting or create:pressing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the upgraded kitchen appliances (Oven/Fridge) require brass/copper plates from the Create line — you need the tech spine to build a proper kitchen, which feels right for an industrial-era pack
- from: cookingforblockheads cooking products (aggregated foods from all food mods) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: CfB sells nothing of its own — it is a recipe-discovery/batch-crafting layer over other food mods' outputs. Routing "CfB foods" to economy double-counts what the food mods (Farmer's Delight, Vinery) already own. Keep M-09 in those source mods, not here.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — invisible network-packet limit fix. Zero items, zero blocks. Pure infrastructure.

## curios   [anchors: support/library (1)]
- LEAVE — equipment-slot API with no items of its own. The trinkets that weave live in Ars Nouveau, Iron's Spellbooks, and other content mods.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / steampunk armor set | via: create:pressing (plates) → recipe | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Heavy and Steampunk armor sets require Create-pressed iron/copper plates as inputs — the Steampunk set especially invites a Create gating since its aesthetic is industrial-era; gating it on Create output is a "of course" pairing
- from: immersive_armors:divine_chestplate / robe set | via: ars_nouveau:armor_upgrade | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Divine set gains an arcane finishing step through Ars' armor_upgrade method — completing the set requires a magic ritual, crossing combat gear into the magic web for the highest-tier armor

## cmpackagepipebomb   [anchors: Create (1)]
- LEAVE — tiny novelty/PvP prank addon (pipe bomb in a Create package); no coherent second-pillar weave. The dossier correctly flags this as friend-group flavor with no material to route.

## opacpvp   [anchors: support/PvP rules (1)]
- LEAVE — PvP consent rule addon (no items, no blocks). Zero gameplay content beyond a combat toggle.

## dynamic_fps   [anchors: support/performance (1)]
- LEAVE — client FPS throttling for background/unfocused windows. Zero items, zero blocks. No material surface.

== CHUNK COMPLETE ==
