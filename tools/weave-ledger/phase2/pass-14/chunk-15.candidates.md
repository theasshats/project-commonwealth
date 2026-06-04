# Phase 2 candidates — chunk-15

## sounds   [anchors: support/client-polish (1)]
- LEAVE — genuine zero-content library/behavior mod: 0 items, 0 blocks, loot=no, audio-only. No material surface to route through any method.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero item/block content (0 blocks, 0 items, loot=no). It IS already a weave (magic↔magic internal bridge between Ars Nouveau and Iron's Spellbooks via unified mana/cross-cast ritual), but has no foreign material surface to earn a second pillar through. Forcing a weave here would target the parent mods' items, not this mod's surface — that belongs to the parent dossiers.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — genuine zero-content behavior mod: 0 items, 0 blocks, loot=no, command-only. Directly serves the cooperative-PvPvE premise; no material surface exists.

## azurelib   [anchors: support/library (1)]
- LEAVE — genuine library (animation engine). 1 block registered (lightblock) is an internal rendering helper with no gameplay surface, not a player-obtainable item. No weave possible without manufacturing an arbitrary edge.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: cold-dead flesh fed to a spirit flame yields a Frozen Essence — the undead cold biome unlocks a minor magic reagent
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-charred zombie flesh smolders into an Infernal Essence when spirit-burned — volcanic undead fuel occult craft
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: wart grown in corrupted soil, soaked in arcane light, becomes a source-infused fungal catalyst — the swamp zombie's drop earns a magic use
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: soul-fire haunting strips the necrotic cold off frozen flesh and outputs an icy soul byproduct — Create's haunting chamber processes the bestiary
- from: rottencreatures:treasure_chest (Dead Beard drop) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a pirate captain's chest should contain coin — seed a small Numismatics coin drop into Dead Beard's treasure_chest loot table so rare coastal combat pays out
- from: rottencreatures:mob_heads (decorative blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mob heads are trophies/decoration, not deco blocks from a metal/stone set — M-04 is for metal/stone deco recycling; crushing a display head feels punitive and thematically off; head-as-trophy value is better served leaving it placeable

## letsdocompat   [anchors: survival/food-web (1)]
- LEAVE — pure glue/bridge mod: 0 items, 0 blocks, loot=no. It already IS the M-12-style weave across the food cluster (Farm&Charm ↔ Farmer's Delight ↔ Vinery ↔ Bakery etc.). The c:foods/leafy_green tag it adds is a shared tag, not a material surface. Any additional 2nd-pillar weave belongs on the food mods themselves, not this connector.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood — already a soul-state reagent — converts through Occultism spirit flame into a spirit intermediate, bridging the Soul Furnace loop into the occult web
- from: companions:soul_gem (Sacred Pontiff drop or Soul Furnace output) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a soul gem is exactly the kind of arcane crystal that the enchanting apparatus wants as an attunement catalyst — boss-tier item earns a deep magic use
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: relic gold recovered from the Pontiff, processed through a Create mill → minted into high-denomination coin; boss combat feeds the player economy
- from: companions:copper_coin / companions:nether_coin / companions:end_coin | via: config/loot-seed | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: bridging companions' private coins into Numismatics risks two competing currency systems; better to leave companions' coins as collectibles/flavor and route only high-value materials (relic gold, soul gems) to the economy pillar — the coin-bridge is the exact fragmentation risk the ledger warns about
- from: companions:tesla_coil_block / voltaic_pillar_block | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier already flagged this WEAK; the tesla network is thematic core of companions' magic-electric aesthetic, not incidental deco — crushing it back to copper scrap feels punitive and reduces incentive to build with it

## cristellib   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Provides a structure-config API only; gameplay surface belongs to the structure mods it backs (t_and_t, expanded_ecosphere).

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content config API library: 0 blocks, 0 items, loot=no. No weave surface.

## endermoon   [anchors: survival/spawn-event (1)]
- from: endermoon Ender Moon event (mass enderman spawns → ender pearl surplus) | via: config/loot-seed | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ender Moon floods the night with endermen — during that event, ender pearls dropped should have a small chance of being "charged" (or seed a charged-pearl loot-table variant) that feeds Occultism or Ars rituals as a lunar-gated reagent; the moon event becomes a scheduled magic-material harvest window
- from: endermoon Ender Moon event (mass enderman spawns) | via: config tie | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: configure enhanced_celestials / endermoon so that during the Ender Moon, an Ars Nouveau scry_ritual or Occultism ritual has increased potency or a unique result (event-gated ritual window) — the lunar event earns a magic pillar without adding items to endermoon itself
- from: endermoon Super Ender Moon (all-mob surge) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 bounty-board mechanic belongs on the Bountiful mod, not on a spawn-event mod with no items; seeding loot into a spawn-event (not a structure/loot table) is not a natural delivery here; the ender-pearl weave (M-22) is the right anchor

== CHUNK COMPLETE ==
