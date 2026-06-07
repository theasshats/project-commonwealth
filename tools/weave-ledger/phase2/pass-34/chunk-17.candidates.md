# Phase 2 candidates — chunk-17

## kiwi   [anchors: support/library (1)]
- LEAVE — pure code library (Snownee registration/font helpers); 0 items, 0 blocks, no loot, no recipe-types. Zero content surface; nothing to weave.

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — behavior-only combat overhaul; 0 items, 0 blocks, no loot, no recipe-types. Routing a material "through" a JSON swing-arc system makes no sense. Weave belongs to the weapons/tools mods it re-skins, not here.

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — interaction-hook QoL (right-click harvest + replant); 0 items, no recipe-types, no loot. Pure behavior layer; the weave surface belongs to the crop/food mods below it.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — door-interaction convenience; 0 items, 0 blocks, no loot. Zero content surface.

## jade   [anchors: client-UI/support (1)]
- LEAVE — informational HUD overlay; 0 items, 0 blocks, no loot. Display-only. No weave surface.

## betterdungeons   [anchors: survival (1)]
- from: dungeon loot tables (Catacombs / Undead Fortress / Spider Cave) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: raiders cracking open a Catacombs chest find Ars Nouveau source gems or Occultism otherworld fragments — the dungeon danger gates early magic materials.
- from: dungeon loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist runs YUNG dungeons for reagent/component drops to trade to non-combat players — the dungeon's loot is the supply side of a combat-route trade.
- from: dungeon loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: seeding minted Numismatics coins directly into chest loot is an NPC-adjacent coin faucet — contradicts player-run economy ruling (coins should be player-pressed, not found in chests).
REWORK: existing anchor is survival (1) — connections sound at this level; the loot-seed candidates above are the natural 2nd-anchor path.

## bookshelf   [anchors: support/library (1)]
- LEAVE — developer utility library (Darkhax); 0 items, 0 blocks, no loot, no recipe-types. Pure dependency; nothing to weave.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver; 0 items, no content surface. Behavior-only; no weave possible.

## txnilib   [anchors: support/library (1)]
- LEAVE — code library (Txni); 0 items, no recipe-types. Zero content surface.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — leaf-decay performance patch; 0 items, no content surface.

## stylecolonies   [anchors: support/decoration-palette (1)]
- from: Steampunk blueprint style (consumes Create blocks at colony build time) | via: colony build demand | to: create | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: building the Steampunk colony style consumes Create-fabricated blocks (brass casings, shafts, etc.) — the colony's construction demand feeds the Create production loop directly.
- from: High Magic blueprint style | via: colony build demand | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: constructing the High Magic colony style requires Ars Nouveau or Occultism materials, tying magic production to colony growth — the settlement physically embodies its magic pillar.
- from: Fairy Tale / Underwater blueprint styles | via: loot-seed or config tie | to: survival | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: these styles likely require no unusual materials; REJECT pending concrete block-list data — without a confirmed bill-of-materials that ties to survival pressure, this is speculative.
REWORK: existing anchor is support (1). The two ACCEPTs above give it create and magic as 2nd/3rd anchors through M-28 colony-route demand — viable path, but requires confirming actual blueprint block requirements (Phase-3 authoring step would be adjusting blueprint material lists).

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull (ship hull components) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: crafting a proper ship hull requires Create's mechanical crafting table — the wooden naval vessel is gated behind the tech spine's fabrication step, so sailors are tech-dependent.
- from: hpm:corvette_steamship_item (WIP flagship ship) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the steamship — a multi-ton vessel with an engine — demands a sequenced assembly chain (boiler, hull, paddlewheel) through Create's fabrication line; it's not wood-crafted, it's engineered.
- from: hpm:hand_cannon / hpm:cannonball | via: create:mechanical_crafting or createbigcannons methods | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a hand cannon isn't a primitive gun — it's a machined brass weapon; requiring Create mechanical-crafting or CrBC assembly ties naval weapons to the same tech supply chain.
- from: hpm:hand_cannon / hpm:cannonball | via: combat + trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a naval combat specialist farms cannonballs and keeps ships repaired; landlocked players buy passage or cannon cover — the naval role becomes a traded service.
- from: hpm:cutter / hpm:war_cutter (finished ships) | via: aeronautics logistics | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: hpm ships are bespoke boat-entities, NOT Aeronautics-physics ships; calling them the "logistics arm" conflates two different ship systems. The aeronautics anchor is already the closest fit; a second aeronautics/M-31 link would be circular. REJECT.
- curation flag: hpm ships + Create Aeronautics + Create Big Cannons overlap in role (water/air vehicles + artillery). The thunderdome should decide which takes which niche — this is a curation question, not resolved by weaving.
OK — one existing aeronautics anchor is appropriate; the ACCEPT weaves above add create + economy as 2nd/3rd anchors.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit milled in the Create millstone yields a desert dye or a food-grade pulp — the arid forager's crop feeds the Create processing chain.
- from: dynamictreesplus:red_mushroom_cap / brown_mushroom_cap (bulk blocks) | via: create:crushing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing a fallen mushroom cap gives Fermented Spider Eye or a fungal powder intermediate — connects the mushroom forest to Create's chemical processing line.
- from: dynamictreesplus:saguaro_fruit | via: extradelight:juicer or create:mixing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is year-round, not season-gated — M-16 requires a Serene Seasons seasonal input. REJECT (wrong motif).
- from: dynamictreesplus:mushroom_branch (bulk timber analog) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: mushroom branches are a structural block analog for tree trunks, not a distinct crop to mill — routing them through milling would produce the same output as vanilla mushroom blocks (fungal powder / mushroom stew ingredient), which doesn't advance the loop beyond what vanilla already provides. Weak differentiation; REJECT.
REWORK: existing anchor survival (1) is sound; the two milling/crushing ACCEPTs above give it a Create 2nd anchor via M-12.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — datapack that re-enables vanilla bundle crafting; no new items, no new methods, no loot. The bundle itself is vanilla; this mod is a recipe-enabler only. Weave the bundle (leather → bundle → logistics use) belongs to vanilla's material graph, not this mod.

## create_compressed   [anchors: create (1)]
- from: create_compressed:crushed_<metal>_pile blocks (bulk crushed ore storage) | via: create:splashing (bulk washing) | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: the bulk-wash → nuggets path is already create_compressed's core mechanic (it's internal Create→Create byproduct cycling), not a new cross-system weave. This is Create-internal; no 2nd-anchor gain.
- from: create_compressed:mechanism_block / cogwheel_block / shaft_bundle (compressed mechanical parts) | via: aeronautics construction | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: airframe construction bills of materials call for compressed mechanism blocks — bulk-shipping the Create spine's mechanical parts in their storage-block form is a natural aeronautics supply-chain tie.
- from: create_compressed:iron_sheet_block / brass_sheet_block (compressed structural sheet storage) | via: aeronautics construction | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the structural hull plating for an airframe is sourced from compressed sheet blocks — a Create producer stockpiles sheets in block form and the shipwright draws on that inventory for hull construction.
REWORK: existing anchor create (1) is sound; the aeronautics ACCEPTs above give it a genuine 2nd anchor via M-23. These are the most natural path: create_compressed is already the "bulk storage" layer for Create, and aeronautics construction is exactly the bulk-consumption use case it was designed for.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — network packet-size fix; 0 items, 0 blocks, no content surface. Pure infrastructure.

## yungsapi   [anchors: support/library (1)]
- LEAVE — YUNG's API library; 0 items, 0 blocks. Pure dependency plumbing.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-side build-overlay; 0 items, 0 blocks, no content surface.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets (generic reagent set) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the folkloric beasts of Gaia — gorgon scales, harpy feathers, mermaid pearls — are precisely the kind of spirit-infused material Occultism distills into demon essences; killing myth-creatures feeds the ritual web.
- from: grimoireofgaia mob-drop fragments (specific per-mob drops) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars imbuement needs exotic organic catalysts; a dryad's heartwood fragment or a vampire's essence attuning a source gem makes the bestiary a magic-farming destination, not just a combat obstacle.
- from: grimoireofgaia mini-boss drops (busts: bust_gorgon / bust_minotaur / bust_sphinx / bust_valkyrie / bust_vampire) | via: boss-drop gate | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Gaia mini-boss bust is the gate item for a high-tier Create machine recipe — the myth-boss kill is the only path to that component, so the bestiary is a hard prerequisite for tech advancement, not optional content.
- from: grimoireofgaia mini-boss drops | via: emergent combat-route trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dedicated combat specialist farms Gaia mini-bosses for busts and fragments; non-combat players buy the drops — the bestiary generates a supply-side trade node that only danger unlocks.
- from: grimoireofgaia:ring_of_speed / ring_of_haste / ring_of_jump (artifact rings) | via: occultism:spirit_trade or ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the artifact rings are already finished tools (pre-enchanted equipment), not raw reagents to infuse — routing a finished item INTO an infusion to produce another finished item is a round-trip without clear value gain, not a reagent-sink. REJECT (wrong direction; the ring is an output, not an input catalyst).
- from: grimoireofgaia:pearl_block (pearl material) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: pearl_block is a decorative trophy block, not an ore — applying M-03 ore-doubling to a deco block is theme-clashing (M-03's anti-arbitrage rule; use M-04 for deco recycling). Pearl→crushed output is also low-value and doesn't advance the loop meaningfully. REJECT.
REWORK: existing anchor survival (1). The four ACCEPTs add magic (×2, M-11+M-02) and create (M-15) and economy (M-34) — making grimoireofgaia a 4-anchor mod, which is the correct profile for a bestiary providing boss drops, reagents, and danger pressure. Connections sound after weaving.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior tweak (fishing loot → live entity spawn); 0 items, 0 blocks, no recipe-types, no loot tables of its own. The weave surface belongs to the fish-content mods it sits beneath (createfisheryindustry, farmersdelight), not the behavior layer. No coherent 2nd anchor from this mod alone.

== CHUNK COMPLETE ==
