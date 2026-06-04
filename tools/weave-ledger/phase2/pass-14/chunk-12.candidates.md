# Phase 2 candidates — chunk-12

## coroutil   [anchors: support/library (1)]
- LEAVE — pure shared-code library (0 blocks, 0 items, no player content); nothing to weave.

## create_factory   [anchors: Create, survival (2)]
- from: create_factory:honey_glazed_berries / waffles / rolls (finished sweets) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a basket of Create-made waffles or honey-glazed sweets is a natural luxury trade good — players who specialize in the sweet-food line sell to others
- from: create_factory sweets cluster (caramel/chocolate/honey variants) | via: recipe — ars_nouveau:enchanting_apparatus or imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: forcing dessert sweets through arcane infusion is thematically incoherent (sugar paste is not a magic reagent); M-09 economy route is sufficient for a second pillar
- REWORK: none — existing Create+survival anchors are organically earned; the M-09 economy candidate is a clean addition.

## gravestone   [anchors: survival (1)]
- from: gravestone:obituary (the death log item) | via: loot-seed — seed gravestone:obituary into betterdungeons / undead-structure loot tables as a found "old adventurer's obituary" flavour drop | to: survival (exploration/narrative) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — a narrative flavour overlap, not a systemic pillar connection; no established motif covers "lore item seeded into dungeon loot"; not coherent enough to ACCEPT without a Gate 0 motif.
- from: gravestone:gravestone (block, craftable) | via: recipe — could require a magic or Create component to craft a fancier grave tier | to: magic or Create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: gating a basic death-QoL tool behind a Create/magic chain is a hard guardrail violation — everyday component must not be gated behind complex recipes; this mod's purpose is QoL, not progression.
- LEAVE — the mod's sole mechanical content (a grave block + obituary) is a death-recovery utility. No weave is coherent without violating the depth-scales-with-power rule or forcing an implausible pillar link.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons Catacombs / Undead Fortress / Spider Cave loot tables | via: loot-seed — seed numismatics coins (cog/spur) as rare chest drops in dungeon loot | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a crypt and finding a pouch of old coins is an obvious narrative reward; coins seeded here feed the player economy without needing Create production (scavenging vs. minting)
- from: betterdungeons dungeon loot tables | via: loot-seed — seed Ars Nouveau source gems or Occultism spirit bottles as rare drops in Spider Caves / Catacombs | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: dangerous dungeons yield rare magic reagents, making dungeon-running a valid magic-supply route and pushing specialization (fighters trade reagents to mages)
- from: betterdungeons Undead Fortress loot | via: loot-seed — seed a boss-key item (signature drop) gating a complex Create recipe | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the necromantic fortress holds the key component a machinist needs to build the next-tier Create machine; exploration gates tech
- REWORK: none — no existing connections to evaluate.

## modernfix   [anchors: support/performance (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, JVM-level patches only); genuine zero-surface performance library; nothing to weave.

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream food_book (the one item) | via: recipe — trivial craft (book + any food); already likely a simple recipe | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif for intra-pillar connection; the item is a utility inspect tool, not a cross-pillar material; any weave is redundant.
- from: maid stat-growth mechanic (unique-food milestone) | via: config — link milestone thresholds to Create-processed foods (waffles, jam, candy from create_factory) counting as special/rarer food variety entries | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding a maid Create-made sweets (waffles, jam rolls) counts toward milestone faster than plain crops — a soft incentive to run the Create food chain that doesn't gate anything hard
- REWORK: none.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction gear (shields, armor sets, knight weapons) at armorsmith/builder stations | via: recipe — require Create-processed metal parts (iron sheet, shaft, andesite casing) as station inputs for mid-tier gear | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: faction blacksmiths need Create-machined plate and fittings to produce field-ready knight gear; combat and industry share a supply line
- from: valarian_conquest citizenship items + mercenary hire + faction trade | via: trade → numismatics — seat faction quartermaster NPC trades on Numismatics coins; hiring a mercenary costs coin, not emeralds | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: mercenaries work for pay, not barter — faction warfare has an obvious monetary dimension; this is precisely the M-21 trade-seam case (provisional)
- from: valarian_conquest faction drops (banners, special faction items) | via: numismatics sell/bounty — bounty board pays coin for defeating faction enemies (captured banners, citizenship proofs as proof-of-kill) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: faction raids become profitable — players who specialize in combat sell proof-of-kill bounties, feeding the coin economy
- from: valarian_conquest knight armor/gear | via: create:deploying / item_application — apply a Create-machined crest-plate onto base faction armor to upgrade it | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the armorsmith upgrades a faction breastplate by press-deploying a stamped heraldic plate; light single-step, scales with gear level
- REWORK: The dossier's M-05 candidate (gating faction gear on Create parts) is sound but marked WEAK — it isn't weak if scoped to mid-tier gear only. The M-09 economy candidate in the dossier is mis-cited (M-09 is luxury food→coin, not combat trade); the right motifs are M-14 (bounty→drop economy) and M-21 (trade-seam). Flag for correction in the dossier.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — pure compat/API shim (0 blocks, 0 items, no loot); genuine zero-surface infrastructure mod; nothing to weave.

## ichunutil   [anchors: support/library (1)]
- LEAVE — pure shared-class library (0 blocks, 0 items, no loot); genuine zero-surface library; nothing to weave.

## patchouli   [anchors: support/library (1)]
- from: patchouli:guide_book (and the colored book variants) | via: recipe — patchouli:shapeless_book_recipe is already registered; the book itself is the product; the one registered method only crafts guide books | to: support | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no cross-pillar motif applies; patchouli is a documentation library whose only player item is a guide book — routing it through a Create or magic method would be arbitrary.
- LEAVE — documentation-library infrastructure; guide books are not progression materials; the shapeless_book_recipe is an internal recipe, not a weave surface.

== CHUNK COMPLETE ==
