# Phase 2 candidates — chunk-07

## rhino   [anchors: support (1)]
- LEAVE — genuine zero-content code library (JS runtime for KubeJS; 0 items, 0 blocks, no gameplay surface; nothing to route through any method)

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / steampunk set | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok — Steampunk armor literally invites a Create fabrication gating; Heavy/Divine also suit pressed-plate inputs | verdict: ACCEPT | hook: "Heavy armor requires pressed iron plates from your press — it's not free-crafted, it's manufactured"
- from: immersive_armors:divine_chestplate / robe set | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok — "Divine" and Robe sets suit an arcane infusion finish; the M-10 anti-arbitrage rule is respected (these are end-pieces, not basic ingots) | verdict: ACCEPT | hook: "A Divine set piece isn't forged — it's consecrated at the Enchanting Apparatus with a source gem"
- from: finished armor sets | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash — armor is kept gear, not a trade good; players won't mass-sell unique set pieces; supply too thin to be a real economy signal | verdict: REJECT | reason: players retain armor; not a viable economy feedstock

## kiwi   [anchors: support/library (1)]
- LEAVE — genuine zero-content support library (0 items, 0 blocks, registration/font helpers only; nothing to route)

## irons_spellbooks   [anchors: magic, create (2)]
- OK — connections sound. Two anchors present (magic spellcasting spine + Create emptying/filling inbound on the alchemist cauldron). Depth additions flagged in dossier (M-03 mithril crushing, M-01 arcane_essence bond) are valid future passes.
- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok — mithril is a scarce ore; ore-doubling via crusher is the standard Create reward; deepens the Create–magic tie on the metal | verdict: ACCEPT | hook: "Crush mithril ore in your crusher for crushed mithril + a byproduct — the Create route, not just a furnace"
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok — arcane_essence is the Iron's-side magic currency, already RESERVED in the ledger §2 as bonded to source via M-01; this confirms the bond rather than inventing a new one | verdict: ACCEPT | hook: "Iron's arcane essence and Ars source gems exchange at the Imbuement Chamber — one magic economy, not two"
- REWORK: existing Create anchor is thin (only emptying/filling on the alchemist cauldron — purely a fluid-I/O connection, not a meaningful Create integration). Flag for Phase-3 deepening via the mithril-crushing edge (M-03) and a Create-gated scroll forge component (M-05) so the Create anchor carries real weight.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — no items, no blocks, no recipe surface; a command/behavior toggle for party PvP rules; nothing to route through any method

## attributefix   [anchors: support/fix (1)]
- LEAVE — no items, no blocks; pure attribute-cap patch; nothing to route

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (appliance blocks) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok — kitchen appliances are manufactured goods; gating the Oven and Fridge behind Create-pressed copper/brass sheets reads as "you need a metalworking setup to build a real kitchen" which fits a scarcity-driven pack | verdict: ACCEPT | hook: "A proper kitchen fridge takes copper-pressed sheets — it isn't craft-table built"
- from: cooked luxury foods (aggregated from Farmer's Delight / Vinery / Meadow via the Cooking Table) | via: numismatics sell | to: economy | motif: M-09 | power: everyday-mid | tone: ok — the Cooking Table is the discovery/batch layer for all food mods; seating a "sell prepared meal" coin path makes the kitchen an economy node (luxury food → coin) | verdict: ACCEPT | hook: "Sell a prepared feast platter at the trading floor — the kitchen is where raw crops become coin"
- REWORK: current survival-only anchor is one-system; both ACCEPT candidates above are the planned weaves; neither connection exists yet — both should be Phase-3 targets.

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows:stone_parapet / arrow_slit variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — stone deco back to gravel+xp is a consistent pack policy for all stone decorative blocks | verdict: ACCEPT | hook: "Crush old stone parapets back to gravel in the crusher — lossy, but nothing's wasted"
- from: mcwwindows:mosaic_glass variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — colored glass deco → crushed back to sand/glass pane scrap; same lossy-recycle pattern | verdict: REJECT | reason: glass-into-sand is incoherent physically (glass doesn't reconstitute as sand via crushing); ACCEPT only the stone parapet line above

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — scoreboard datapack cosmetic (0 items, 0 blocks, 0 loot); a tab-list death tally with no material surface; nothing to route

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — behavior-only framework (0 items, 0 blocks); JSON moveset definitions for existing weapons; no material surface to route through any method

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure behavior patch / compat glue (0 items, 0 blocks); no material surface; required infrastructure that cannot be woven

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window / train_step_brass / train_slide_brass | via: create:pressing (brass sheet input) | to: create | motif: M-20 | power: everyday | tone: ok — brass train fittings should consume Create-pressed brass sheets rather than raw brass; a light deploy/application step makes the Create fabrication visible without deep-chaining everyday deco blocks | verdict: ACCEPT | hook: "Train step and window fittings take Create-pressed brass sheets — they're manufactured components, not raw-crafted"
- from: create_train_parts:crossing | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok — a track crossing is a mechanical component; routing it through mechanical crafting (rather than vanilla table) reads as a proper engineering artifact | verdict: ACCEPT | hook: "A track crossing is a precision mechanical part — assemble it at the mechanical crafter, not a workbench"
- REWORK: current aeronautics-only anchor is a single edge; both ACCEPTs above are the Create weaves that earn it a 2nd anchor.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
- LEAVE — entity-merge behavior utility (0 items, 0 blocks); no material surface; generic perf QoL with no mod-specific routing opportunity

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — guidebook engine (6 cosmetic book items, 0 blocks, 0 loot); no material throughput; forcing a coin/recipe edge onto a documentation library is noise

## create_ltab-3.9.2   [anchors: create, survival (2)]
- OK — connections sound for its tier (Create-themed worldgen that also feeds the survival/exploration pillar via structures and loot=yes). Two anchors present.
- from: create_ltab structures (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok — a Create-themed ruin is a sensible place to seed a few coins or a processed-metal item as discoverable loot; discovery → economy onramp for players who find the structures before they set up a mint | verdict: ACCEPT | hook: "Create ruins hold minted coin caches — explorers can seed their economy from the remnants of the old industrial age"
- from: create_ltab structures (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — seeding a magic reagent (e.g. an arcane scroll fragment) in an abandoned workshop loot chest draws the magic pillar into exploration; thematically a researcher might have left something behind | verdict: REJECT | reason: Create-themed ruins are industrial, not arcane; a magic reagent is a tone mismatch here — the economy coin seed (M-08 above) is the tighter fit

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice infrastructure (0 items, 0 blocks); no material surface; support QoL with no routing opportunity

## underground_village   [anchors: survival (1)]
- from: underground_village Stoneholm villagers | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok — underground settlements as economy nodes is coherent (miners trading ore/supplies for coin); the M-21 provisional flag applies; surface for review | verdict: ACCEPT (provisional motif) | hook: "The Stoneholm miners trade in coin — underground villages are the first economy contact for a new spelunker"
- from: underground_village Stoneholm loot chests (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok — seed a handful of low-denomination coins in village chests so players naturally encounter the currency system when exploring underground | verdict: ACCEPT | hook: "Stoneholm chest loot includes a few coins — underground explorers encounter the economy before the surface mint"

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single joke music disc (1 item, loot=yes but it's a meme disc); forcing a coin or recipe edge is noise; the disc earns its place as pack flavor, not a system connection

## wits   [anchors: support (1)]
- LEAVE — server debug command utility (0 items, 0 blocks); /wits command only; no material surface

## creativecore   [anchors: support/library (1)]
- LEAVE — genuine zero-content library (0 items, 0 blocks); GUI/packet API for CreativeMD mods; nothing to route

== CHUNK COMPLETE ==
