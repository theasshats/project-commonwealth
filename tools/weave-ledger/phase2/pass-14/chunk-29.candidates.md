# Phase 2 candidates — chunk-29

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — zero content surface; pure viewer/documentation (mob-drop and ore-gen lookup). 0 items, 0 blocks, loot=no. No material to route, no method to pull through, no coherent weave possible.

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — genuine zero-content library. No items, no blocks, no loot. Purely a KubeJS scripting API for authoring Create Ponder scenes; no material surface to weave.

## create_enchantment_industry   [anchors: Create (1)]

### New cross-pillar candidates

- from: liquid XP (experience_bucket / fluid) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals that currently cost XP orbs can instead drain liquid XP from a tank piped by Create — industrialised occult, obvious once both mods are in the same pack.
- from: liquid XP (experience_bucket / fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau imbuement chambers that require a source-gem + XP cost can accept liquid XP as the XP input, threading the factory enchanting line into the magic pillar.
- from: create_enchantment_industry:experience_bucket (liquid XP) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks cauldron brews already consume magical fluids; routing liquid XP in as a brewing ingredient for higher-tier scrolls/inks is coherent and ties the two magic-adjacent systems together.
- from: create_enchantment_industry:super_experience_nugget | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Super-XP nuggets (dense concentrated XP from the super_experience_block line) become a required reagent on the Ars enchanting apparatus for the highest-tier spell glyphs — a natural endgame gate that links industrial XP production to the magic ceiling.
- from: create_enchantment_industry:experience_cake / experience_cake_slice | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A compressed XP cake is a high-effort luxury consumable (requires liquid XP + ingredients); exactly the kind of scarce processed good that commands a premium coin price on the player market.
- from: liquid XP (experience_bucket) | via: create_enchantment_industry:grinding (Mechanical Grindstone) then numismatics coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: grinding the liquid XP doesn't map naturally — the Mechanical Grindstone grinds solids, not fluids. The fluid-to-economy path is better routed via the cake (M-09 above) or direct sell, not forced through the grindstone.
- from: create_enchantment_industry:blaze_forger | via: M-05 native-gating (Blaze Forger requires Create parts) | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: create_enchantment_industry is already anchored to Create (all its machines are built with Create components); gating it further on Create is circular, not a 2nd pillar.

### REWORK flags on existing connections
- The dossier notes anchor = Create (1) only. The above two ACCEPT candidates (magic via M-11/M-10, economy via M-09) are genuine new 2nd-pillar opportunities; no existing weave to rework since none has been authored yet. Connections listed as "existing inbound weaves" (create:compacting/crushing/cutting etc.) are the machine-build recipes, not cross-pillar weaves — those are fine.

## multipiston   [anchors: support/MineColonies-dep (1)]
- LEAVE — functional block but zero item/material surface for weaving. It translates world blocks; it does not produce or consume items, has no loot table of note (1 block = the block itself, not a dungeon), and its gameplay role is exclusively internal to Structurize/MineColonies builder AI. No coherent weave — a forced edge here would be arbitrary.

## lootjs   [anchors: support/packdev-tooling (1)]
- LEAVE — genuine zero-content scripting library. No items, no blocks, loot=no. It is the *enabler* of loot-table weaves (M-02, loot-seed deliveries) but is not itself a weave target. Nothing to route through or from.

## bountiful   [anchors: economy (1)]

### New cross-pillar candidates

- from: bounty reward pool (bountiful:decree → payout) | via: numismatics coin payout (config) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bountiful's reward pool is directly configurable; pointing it at numismatics:cog/spur/bevel instead of vanilla gold makes it the canonical early-game coin faucet and completes M-14 (bounty → drop economy). This is the highest-priority weave for this mod. | via: config
- from: mob-kill bounty objectives (bountiful:decree pools targeting modded mobs) | via: bountiful decree config pointing at alexsmobs / cataclysm / naturalist kills | to: organic/survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Kill-bounties on modded mobs (Alex's bison, Cataclysm bosses, Naturalist animals) funnel combat rewards into the coin economy; the board becomes a reason to engage with the pack's mob roster rather than just vanilla mobs. | via: config
- from: Create-processed output as bounty objective | via: bountiful decree config requesting create:* processed goods (iron sheets, crushed ore, etc.) | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: A Decree that requests processed Create materials (iron sheets, precision mechanisms) as turn-in items creates economic demand for the Create production line — players specializing in Create can sell output via bounties. | via: config
- from: magic reagent as bounty objective | via: bountiful decree config requesting ars_nouveau:source_gem or irons_spellbooks:arcane_essence | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Bounties that request magic reagents create demand from non-magic specialists — a trader who doesn't do magic can pay a mage to supply reagents, deepening specialization. | via: config
- from: seasonal crop as bounty objective | via: bountiful decree config gated by Serene Seasons (season-specific Decree active/inactive) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Decree active only in, say, autumn that asks for Serene Seasons harvest crops makes the bounty board respond to seasons — players plan ahead or trade seasonal surplus for coin. | via: config
- from: bountiful:decree as a MineColonies unlock | via: recipe (decree crafting or colony research unlock unlocks tier-2 bounty Decrees) | to: Create/colony | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: Higher-rarity bounty Decrees (epic/rare) could require a MineColonies research or a colony-crafted component — tieing the progression unlock of good bounties to the colony pillar reinforces the DESIGN spec that complex Create tech unlocks via MineColonies. | via: recipe / config
- from: bountiful:bounty (contract item) | via: create:printing (Create Enchantment Industry Printer) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: Bountiful generates bounties from boards procedurally, not via a crafting or printing step. The Printer in CEI copies books/schedules; forcing bounty contract printing through it is mechanically unsupported and thematically a stretch.

### REWORK flags on existing connections
- OK — single economy anchor is correct. The config-driven candidates above are all additions, not reworks. The dossier's own "STRONG" note about coin payout aligns with ACCEPT on M-14.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — genuine zero-content config-UI library. 0 items, 0 blocks, loot=no. No material surface; the API renders settings screens for other mods' configs. Nothing to weave.

## citadel   [anchors: support/library (1)]
- LEAVE — pure developer library (animation framework, spawn tooling). The 5 items grounded in the jar (citadel_book, debug, effect_item, fancy_item, icon_item) are explicit dev/tool internals, not survival content; loot=yes is from the jar scan but these are not dungeon/chest loot tables. No coherent weave — forcing any of these dev-tool items into a recipe or drop would be arbitrary and confusing to players.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content behavior mod. 0 items, 0 blocks, loot=no. The mod adds only a player-to-player feeding interaction; it registers no items/blocks/loot of its own. Nothing to weave.

## titanium   [anchors: support/library (1)]
- LEAVE — developer library for HRZNStudio mods. The 7 blocks in the jar (creative_fe_generator, diamond/gold/iron/lapis/obsidian tables, smashing_table) and the test_serializer recipe-type are explicitly dev/test infrastructure, not survival content; loot=yes from the jar scan is the library's test stubs, not a gameplay loot table. No coherent weave available.

== CHUNK COMPLETE ==









