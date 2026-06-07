# Phase 2 candidates — chunk-18

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen/terrain-shaping datapack; registers zero items, blocks, or loot; no recipe surface to route through any method. The thematic adjacency (bigger mountains spread ore deposits apart) is ambient setting, not a weave edge — attempting to wire it would require inventing an artificial item that doesn't exist.

## moreoverlays   [anchors: support/client QoL (1)]
- LEAVE — zero-content client HUD mod; no items, no loot, no recipe types. Overlay rendering has no recipe-graph surface.

## touhou_little_maid   [anchors: survival (1)]
- from: boss-drop / magic reagent (e.g. `occultism:silver_dust` or Ars source gem) | via: touhou_little_maid:altar_recipe_serializers (KubeJS-authored altar recipe) | to: magic | motif: M-05 | power: mid | tone: ok — the altar is an explicit ritual-style multiblock; gating a mid-tier maid or upgrade behind a magic reagent reads as "the shrine requires attuned offerings", consistent with the miko/shrine aesthetic | verdict: ACCEPT | hook: summoning a maid from the Altar requires a purified Ars source gem — the ritual demands real arcane investment, not just diamonds.
- from: Crystallized Blood analogue / soul currency (power-point bottles, existing village loot drops) | via: occultism:spirit_fire (transmutation) | to: magic | motif: M-11 | power: everyday | tone: ok — power-point bottles carry a "soul offering" vibe directly compatible with Occultism's spirit vocabulary | verdict: ACCEPT | hook: spent power-point bottles tossed into spirit fire yield a trace of soul essence — the shrine's leftover spiritual energy feeds the Occultism web.
- from: maid loot table (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok — maid fairy/hostile mobs drop items that could include mid-tier combat/survival goods (arrows, potions, bone-based reagents), reinforcing the combat-supply loop | verdict: ACCEPT | hook: hostile fairy mobs guarding the shrine drop alchemical components that non-combat players must source or trade.
- from: power-point bottles as "sellable" | via: bare sell link | to: economy | motif: M-09 (retired) | power: everyday | tone: n/a | verdict: REJECT | reason: M-09 retired; "it's sellable" is the ambient endpoint, not a weave. No demand-gating mechanism here.
- from: altar recipe requiring a Create-processed part (e.g. `create:iron_sheet`) | via: crafting-table or altar | to: create | motif: no-motif | power: everyday | tone: clash — the altar is the deliberately non-Create path per dossier; forcing a Create-sheet input into a shrine multiblock reads as an industrial tollgate on a spiritual ritual; breaks thematic coherence | verdict: REJECT | reason: dossier explicitly flags "leave — no natural Create routing without a forced edge"; theme clash confirmed.
REWORK: existing single anchor (survival) — no existing cross-connections to review beyond the 1-anchor; the three ACCEPT links above add magic (M-05, M-11) and survival-depth (M-34). OK at baseline, no bad existing edges to flag.

## configuration   [anchors: support/library (1)]
- LEAVE — genuine zero-content config-screen library; no items, no loot, no recipe surface. No forced edge possible.

## creativecore   [anchors: support/library (1)]
- LEAVE — genuine zero-content GUI/event library; no items, no loot, no recipe surface.

## create_new_age   [anchors: create (1)]
- from: `create_new_age:thorium_ore` (regional scarcity; 2 biome-modifiers confirmed) | via: GTMOGS regional ore-gen → its reactor fuel chain | to: economy | motif: M-30 | power: endgame | tone: ok — thorium is region-locked by biome-modifier placement; whoever settles in a thorium biome controls the nuclear fuel supply, creating genuine trade pressure | verdict: ACCEPT | hook: thorium only spawns in certain continental zones — reactor operators must secure a supply route or trade.
- from: `create_new_age:energising` method (endgame item charged via Energiser) | via: create_new_age:energising → aeronautics hull/propulsion component | to: aeronautics | motif: M-24 | power: endgame | tone: ok — an electrically energised control surface or motor for high-tier airships fits the "advanced drivetrain" depth the aeronautics arm wants; an Energiser-charged actuator/motor is thematically a next-tier propulsion component | verdict: ACCEPT | hook: the top-tier airship control surface requires an Energiser-charged motor — you need the full Create electricity stack before you can fly a real warship.
- from: `create_new_age:energising` method | via: create_new_age:energising → magic focus/tool charge | to: magic | motif: M-17 | power: mid | tone: ok — the Energiser charging an Ars Nouveau focus or Iron's Spellbooks scroll is the FE-to-magic bridge; fits M-17 cleanly | verdict: ACCEPT | hook: charging a high-power spell focus through the Energiser threads Create's electric tier into the magic web.
- from: `create_new_age:corium` (reactor waste) | via: create:crushing or create:mixing (processing byproduct) | to: create | motif: M-32 | power: endgame | tone: ok — corium as a byproduct-to-input (e.g. industrial sealant / radiation-hazard component in advanced Create machinery) is industrial circularity | verdict: ACCEPT | hook: reactor corium isn't just waste — it processes into a dense industrial sealant used in advanced Create pressure vessels.
- from: Thorium → reactor as a "sellable" without demand-gating | via: bare economy link | motif: M-09 (retired) | power: endgame | tone: n/a | verdict: REJECT | reason: M-09 retired; the trade value of Thorium is already captured by M-30 (regional scarcity gates demand structurally — whoever doesn't live in a thorium biome must trade for it). Bare sell link adds nothing.
REWORK: existing single anchor (create) — currently 1-anchor. No bad existing edges to flag; the four ACCEPT links above add economy (M-30), aeronautics (M-24), magic (M-17), create-depth (M-32). OK — no weak connections exist yet.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — zero-content config/data mod; affects structure placement spacing only; no items, loot, or recipe types. Nothing to route.

## revelationary   [anchors: support/library (1)]
- LEAVE — progression-gating library (advancement → block reveal API); no items, no loot, no recipe surface. Acts as infrastructure for M-05 (native-method gating) in other mods but has no independent weave surface of its own.

## companions   [anchors: survival (1)]
- from: `companions:crystallized_blood` (Soul Furnace output from mob drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — Crystallized Blood is an explicit soul/essence material; feeding it into Occultism spirit-fire as a transmutation reagent is immediately coherent ("gothic alchemical blood into occult power") | verdict: ACCEPT | hook: Crystallized Blood from the Soul Furnace transmutes in spirit-fire into an Occultism reagent — the companions' gothic-alchemical loop feeds the magic web.
- from: `companions:soul_gem` / Old Cloth (Sacred Pontiff boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok — Relic Gold and soul gems from the boss are premium drops; seeding them into Ars imbuement or Iron's alchemist cauldron as catalysts makes them sought-after magic reagents | verdict: ACCEPT | hook: the Sacred Pontiff's Relic Gold is needed to attune high-tier Ars Nouveau apparatus — the boss is a magic gatekeeper, not just a survival fight.
- from: Sacred Pontiff (boss) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok — the Pontiff is a boss; its drops (Relic Gold, Old Cloth) are combat-route goods non-combat players need via trade | verdict: ACCEPT | hook: Relic Gold only drops from the Sacred Pontiff — combat specialists farm and trade it to magic players who need it for advanced imbuement.
- from: companions internal coins (copper/nether/end_coin) | via: bridge to numismatics | to: economy | motif: M-08 | power: everyday | tone: clash — companions' coins are a separate in-mod economy with no meaningful exchange rate to Numismatics; bridging them creates an NPC-faucet-like inflation vector (they're generated from the mod's hostile mobs, not player-minted) | verdict: REJECT | reason: companions coins are mob-drop generated, not player-minted; bridging them to Numismatics introduces an NPC-style coin faucet that contradicts the player-run economy ruling. The correct framing is M-34 (Relic Gold as traded good), not coin conversion.
- from: Tesla/voltaic blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — deco-recycling back to copper is an established pattern (M-04); voltaic coils/pillars are explicitly copper-based deco blocks that would naturally crush back to copper scrap | verdict: ACCEPT | hook: dismantled voltaic coils and pillars recover copper scrap through the Crushing Wheel — no wasted material.
REWORK: existing single anchor (survival). No weak existing edges. The four ACCEPT links add magic (M-11, M-02), economy (M-34), and create (M-04). OK — no bad connections to flag.

## cloth_config   [anchors: support/library (1)]
- LEAVE — genuine zero-content config-screen API library; no items, loot, or recipe surface.

== CHUNK COMPLETE ==
