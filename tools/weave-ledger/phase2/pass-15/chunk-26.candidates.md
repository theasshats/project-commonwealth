# Phase 2 candidates — chunk-26

## multipiston   [anchors: support / MineColonies dependency (1)]
- LEAVE — genuine zero-content utility block (no items/fluids produced, no loot table, no material surface); exists solely as a Structurize/MineColonies builder dep. No coherent weave surface.

## edf-remastered-5.0-beta4   [anchors: survival/endgame boss (1)]
- LEAVE — zero items and the dossier explicitly confirms no changed/custom drop table. The mod only rewrites dragon AI and HP. The dragon's vanilla drops (dragon egg, XP, end gateway) remain untouched by this mod, so there is no loot-seed handle here without inventing content the mod doesn't own. A datapack-side loot-table injection *on the vanilla dragon* is possible, but that belongs to a boss-key (M-15) entry under the vanilla dragon, not attributed to this mod. Flag for M-15 cross-reference: if a boss-key is ever authored on the ender dragon fight, this mod raises the ante on that gate, but the reagent and loot-table are dragon-side, not edf-side.

## bagus_lib   [anchors: support / library (1)]
- LEAVE — pure code library, 0 blocks, 0 items, loot=no. Genuine zero-surface.

## tipsmod   [anchors: support / QoL client (1)]
- LEAVE — pure client UI library, 0 blocks, 0 items, loot=no. Genuine zero-surface; the loading-screen tips it can host are pack-authored text, not a pillar weave.

## ctov   [anchors: survival / worldgen (1)]
- from: ctov village loot tables (biome-themed settlements) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: finding a coin purse in a village chest is the natural entry point for Numismatics — players discover currency exists the moment they loot their first CTOV village.
- from: ctov village loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scrap of arcane parchment or a source gem shard in a rural chest hints that magic knowledge filters out from cities; low-tier only (everyday) — not an enchanted book, just a reagent scrap.
- from: ctov outpost loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: pillager outpost chests seeded with a coin bounty — combat risk matches mid-tier payout, coherent with M-14 combat→economy flow.
- from: ctov villager trade pools | via: trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional) | hook: CTOV's biome-variant villages each carry themed traders; a villager who accepts coin (Numismatics) for goods or vice-versa is the most natural economy on-ramp (provisional — maintainer leans no on M-21, surface for review).
- REWORK: current dossier says "leave" — that under-sells the loot-seed seam. CTOV has loot=yes and 37 structure variants; seeding economy/magic on-ramps into its chest loot is a legitimate and light delivery (loot-table datapack edit, no recipe). Recommend upgrading from LEAVE to ACCEPT on loot-seed candidates above.

## betterdungeons   [anchors: survival / exploration (1)]
- from: dungeon chest loot tables (Catacombs / Undead Fortress / Spider Cave) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon-crawling pays out in coin — the danger gradient (catacombs < fortress < spider cave) maps cleanly to escalating coin drops; combat earns economy.
- from: dungeon chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: undead crypts are the canonical place to find occult/arcane reagents — an Occultism ritual ingredient or Ars source shard seeded into Undead Fortress chests reads as "of course."
- from: Spider Cave chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: spider venom / silk quantities from caves are a natural apothecary / alchemy input; seeding a magic poison-reagent or alchemical extract here is thematically tight.
- from: boss/rare dungeon loot | via: loot-seed | to: Create/survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a unique key-item seeded into the deepest Undead Fortress chest as a rare drop gates a complex Create recipe — exploration unlocks tech, per M-15 design intent. Scale: rare (1–2% weight), one key type max.

## s_a_b   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already routes through create:compacting/mixing (Create pillar) and exists specifically to armor Aeronautics ships/Big-Cannons builds (aeronautics pillar). Two solid pillars.
- from: s_a_b hard_steel_block (highest-tier armor plating) | via: recipe (create:mechanical_crafting or sequenced_assembly) | to: aeronautics (deeper) | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: the toughest armor plate is a required structural component for high-tier Aeronautics hull frames — you need hard steel to build a warship, not just a raft; already fits M-23 structural-alloy seam exactly.
- from: s_a_b steel blocks (as ballistic-grade material) | via: recipe | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: sequenced-assembly chain that outputs a "reinforced hull panel" intermediate (derpack:incomplete_hull_panel) deepens the Create steel-fabrication loop; endgame depth appropriate to a flagship-tier hardened block.
- REWORK: none flagged — existing Create + aeronautics anchors are both coherent and non-arbitrary.

## balm   [anchors: support / library (1)]
- LEAVE — pure loader-abstraction library, 0 items, 0 blocks, loot=no. Genuine zero-surface.

## oceansdelight   [anchors: survival / food (1)]
- from: oceansdelight:elder_guardian_roll / fugu_slice / cabbage_wrapped_elder_guardian | via: numismatics trade/sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardian dishes are high-effort (guardian farm + ocean exploration + FD cooking chain); a coastal specialist sells them to inland players for coin — the scarcity gradient is real and the trading angle is entirely natural.
- from: oceansdelight:fugu_slice (pufferfish delicacy, rare/dangerous) | via: numismatics sell at premium | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: fugu is a real-world luxury-dangerous dish; a high-coin price for a poison-risk food adds memorable economy flavor; depth matches the cooking effort.
- from: oceansdelight:cooked_stuffed_squid / cut_tentacles | via: create:milling or create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running tentacles through a millstone to grind them into a squid-ink pigment or briny extract is a plausible Create food-processing chain that feeds dyes or cooking intermediates.
- from: oceansdelight ocean drops (guardian_tail, elder_guardian_slice) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian flesh transmuted via spirit_fire into an aquatic essence — ocean combat fuels the occult. Guardians are mid-game, depth fits.
- REWORK: none — existing FD anchors are clean; the mod just needs economy and one more pillar added.

## mushroomquest   [anchors: survival / foraging (1)]
- from: mushroomquest rare/mythical mushroom caps (e.g. agarikon, angels_wing) | via: farmersdelight:cooking or extradelight:melting_pot | to: survival/Create | motif: M-12 | power: everyday-mid | tone: ok | verdict: ACCEPT | hook: exotic mushrooms going into a cooking pot for medicinal broths or umami pastes is the most natural step imaginable; folds mushrooms into the food-processing web without forcing anything.
- from: mushroomquest:miso_soup_block / prepared mushroom dishes (high-saturation) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a "mushroom forager" specialty — players who invest in biome-specific foraging sell premium broths and rare-cap dishes for coin; low floor, natural trade output.
- from: mushroomquest deadly/toxic caps (amanita-type mushrooms that apply negative effects) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: poisonous mushrooms transmuted into a venom essence or curse reagent through spirit_fire reads as "of course" — death-cap into occult toxin is an obvious apothecary-dark-magic seam.
- from: mushroomquest glowshrooms (bioluminescent caps — blue/green/magenta) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: bioluminescent fungi are a near-universal fantasy magic ingredient; imbueing a glowshroom into a light-attunement reagent (or source shard catalyst) is thematically solid and adds a foraging→magic pipeline.
- from: mushroomquest rare caps with seasonal/biome-specific spawning | via: season-gated spawn (Serene Seasons config/worldgen) | to: survival↔Create/magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: only-in-autumn foraging for specific caps that feed a seasonal ritual or Create recipe deepens the seasonal economy; mushrooms and seasons are inseparable conceptually.
- REWORK: none flagged — the dossier's 2nd-pillar candidates are all sound; adding magic (M-11/M-10) and seasonal (M-16) routes above extends them further.

== CHUNK COMPLETE ==
