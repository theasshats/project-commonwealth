# Phase 2 candidates — chunk-26

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config-API library; zero blocks, items, loot, or recipe surface. No content to weave.

## crash_assistant   [anchors: support/client (1)]
- LEAVE — client crash-diagnostics utility; zero blocks, items, or recipe surface. No content to weave.

## companion   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-safety mod; zero blocks, items, loot, or recipe surface. No content to weave.

## moreoverlays   [anchors: support/client (1)]
- LEAVE — client HUD-overlay mod (light levels, chunk grid, JEI search); zero blocks, items, or recipe surface. No content to weave.

## inventoryprofilesnext   [anchors: client-QoL/support (1)]
- LEAVE — client-side inventory management UI; zero blocks, items, loot, or recipe surface. No content to weave.

## create_jetpack   [anchors: Create + aeronautics (2)]
- OK — connections sound. Already spans Create (brass/backtank crafting chain) and aeronautics (pneumatic personal flight). No coherent third pillar available: magic tie would be forced (compressed air ≠ arcane energy) and economy tie (sell a jetpack) is trivially shallow — not worth an edge. REWORK: none; both anchors are well-grounded.
- from: create_jetpack:netherite_jetpack | via: loot-seed (boss loot / MineColonies unlock) | to: Create/progression | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the lava-immune tier feels like a boss reward, not a shop purchase — seeding it as a drop or gating its nether-upgrade material behind a boss key makes the netherite variant a progression milestone rather than a straight craft.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is exactly the kind of miniaturised precision mechanism that warrants a sequenced-assembly chain — players feel the gate is earned, not arbitrary.
- from: drones:iron_rotor | via: recipe (create:mechanical_crafting) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a precision spinning rotor built in a mechanical crafter using Create shafts/cogs follows the same logic as every other mechanical component in the pack; brass/iron input keeps the cost proportionate.
- from: drones:pocket_drone (assembled) | via: trade (numismatics sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a compact personal drone is a luxury crafted good — selling one for coin is plausible in a player-run economy where not everyone wants to build their own.
- from: drones:drill (ability block) | via: recipe (create:deploying / item_application) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the drill block is already a vanilla-style block; applying it to a drone body is handled in-mod by the assembly multiblock, not an external deployer step. Routing it through create:deploying adds complexity with no thematic gain over the existing assembly mechanic.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments (rings/dolls/rare drops) | via: loot-seed (boss loot tables) | to: economy | motif: M-14 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: mini-boss busts and artifact rings are the kind of rare, distinctive loot that a bounty board should pay out for — "bring me a Valkyrie bust" turns the Grimoire bestiary into a living economy quest.
- from: grimoireofgaia:bone_shield + nugget/fragment drops | via: recipe (occultism:spirit_fire or ritual) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: mythic creatures from folklore are natural occult reagents — a gorgon's scale fragment transmuted through spirit fire into a crystallized essence sits perfectly in the Occultism aesthetic. Grimoireofgaia's mythic-fantasy vibe and Occultism's spirit-binding are the same thematic register.
- from: grimoireofgaia drops (nuggets/fragments) | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbuing a minotaur fragment into an Ars ritual augments the "bestiary feeds magic" web — a player who fights monsters to fuel their spellbook. Power-tier: everyday fragment = one light imbuement step, not a deep chain.
- from: grimoireofgaia drops (c:nuggets/diamond, c:nuggets/emerald) | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing gemstone nuggets from mythic creatures through a millstone for a marginal dust byproduct extends the ore-doubling logic to combat loot — every source of value should pass through Create somewhere.
- from: grimoireofgaia:bust_* (mini-boss decorative drops) | via: recipe (crafting table) | to: Create/decoration | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no motif fits a "bust as decoration unlock" angle cleanly; M-04 is deco→crush (reverse direction). Forcing a crafting recipe onto busts as Create inputs has no mechanical logic. REJECT-for-review.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: recipe (ars_nouveau:imbuement or occultism:ritual) | to: magic | motif: M-02 + M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is already a real-world luxury magical reagent (perfumery, alchemy) — giving it a ritual/imbuement role is the most natural weave in the pack. Players expect a rare ocean drop to have occult significance.
- from: alexsmobs:ender_residue | via: recipe (occultism:spirit_fire) | to: magic | motif: M-11 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: ender residue from void creatures transmuted through spirit fire into a spirit essence is coherent — the end dimension's exotic matter feeding occult processes makes lore sense.
- from: alexsmobs:bear_dust | via: recipe (create:mixing or ars_nouveau:imbuement) | to: Create or magic | motif: M-12 (mixing) / M-10 (imbuement) | power: everyday | tone: ok | verdict: ACCEPT | hook: bear dust is a fine-grain organic material — logical to mix into a paste/compound (Create) or infuse into a nature-attuned reagent (Ars). Keep it a single light step given everyday power tier.
- from: alexsmobs:void_worm_beak (or effigy, boss-tier drop) | via: recipe (gated tech or boss-key) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a void worm's beak as the gate item for a deep-ocean or endgame Create machine (a drilling/excavation upgrade) makes the massive worm fight feel purposeful rather than just cosmetic loot.
- from: alexsmobs:banana + banana-related outputs | via: recipe (farmersdelight:cooking or create:milling) | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bananas are a food crop — milling into banana flour, cooking into banana bread; adds the food to the Farmer's Delight processing chain naturally. Could also be a M-09 sellable luxury food.
- from: alexsmobs rare drops (skunk_spray, banana_slug_slime) | via: recipe (irons_spellbooks:alchemist_cauldron_brew) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: alchemical cauldron turning exotic animal secretions (skunk spray = a reagent! slug slime = a binding medium) into Iron's Spellbooks brew components is exactly the "weird creature product has a use in the lab" fantasy.
- from: alexsmobs:ambergris | via: trade (numismatics sell / villager trade) | to: economy | motif: M-09 / M-21 | power: mid | tone: ok | verdict: ACCEPT (M-09 only, M-21 provisional) | hook: ambergris is a classic luxury trade good — players who grind ocean content should be able to cash out for coin. M-21 tag is provisional per ledger rules.
- from: alexsmobs:leafcutter_anthill (passive resource generator) | via: config tie | to: Create/survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the anthill is a passive generator of leaves/organic material; attempting to config-tie it to Create processing chains has no motif and forcing the connection feels arbitrary. REJECT-for-review.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure terrain-generation worldgen datapack; zero blocks, items, loot tables, or recipe surface. Thematic adjacency to the pack's scarcity/regional-ore design is real but not actionable through any method — the terrain spread effect is ambient, not a weave edge. No content to route.

== CHUNK COMPLETE ==
