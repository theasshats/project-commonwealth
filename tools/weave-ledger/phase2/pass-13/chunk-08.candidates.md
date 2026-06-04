# Phase 2 candidates — chunk-08

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot | via: create:crushing → create:pressing (sheets) | to: Create | motif: M-03 | power: endgame | tone: ok | verdict: ACCEPT | hook: melting-down a boss's metal in a millstone and pressing the sheet is exactly how Create players expect new materials to enter the fabrication chain
- from: cataclysm:witherite_ingot / cursium_ingot (boss drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: wither-tainted metal feeds an occultism ritual as the source of corrupted essence — fits the boss's dark-fantasy lore
- from: cataclysm:ancient_metal_ingot (processed through Create) | via: create:sequenced_assembly (derpack:incomplete_ancient_frame) | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ancient forged alloy is exactly the kind of rare material that warrants a sequenced-assembly keystone gate on advanced Create tech (per CLAUDE.md design intent)
- from: cataclysm boss drop (weapon trophy / ignitium ingot) | via: numismatics sell (high-value scarce trade good after Create processing) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: carrying a Leviathan's refined alloy to the market is a natural power-reward loop and creates meaningful inter-player trade
- from: cataclysm:amethyst_crab_meat | via: ars_nouveau:imbuement (blessed variant as arcane infusion catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: amethyst_bless is a one-way in-dungeon ceremony for the Leviathan fight specifically; re-routing the meat through Ars imbuement outside context removes what makes it special; keep the altar as gatekeeper
- from: cataclysm:azure_seastone (deco blocks) | via: create:crushing → gravel/raw stone byproduct | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: seastone is obtained inside a dungeon at limited supply; M-04 deco-recycle is intended for plentiful/farmed deco, not scarce dungeon masonry — depth mismatch
- REWORK (existing connections): none yet (1 pillar only); M-03/M-06/M-11 above are the proposed first weaves

## lootjs   [anchors: support/library (1)]
- LEAVE — pure scripting library (zero items/blocks/methods); it is the *enabler* of mob-drop weaves (M-02/M-14), not a node in the graph. Weaving it directly is category error.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL tweak; no items, no methods, no content surface. Forcing any edge here is a defect per briefing rules.

## railways   [anchors: Create, aeronautics (2)]
- from: railways:conductor_cap (incomplete form — railways:black_incomplete_conductor_cap etc.) | via: create:sequenced_assembly | to: Create (depth) | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a conductor's cap assembled on a sequenced line ties Railways gear into Create's fabrication web naturally; mid-tier depth for a mid-tier item
- from: railways locometal blocks (structural panel) | via: aeronautics hull recipe (structural alloy input) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: locometal is *already* an aeronautics/Create-adjacent material; this would make the existing pillar circular rather than adding a genuinely new cross-pillar link. The railways→aeronautics anchor is already established.
- from: railways:benchcart / semaphore (logistics infrastructure) | via: numismatics (train-line as trade/commerce route flavor — selling logistics services) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; and there's no clean item-routing here, just a thematic flavor argument. No coherent method-pull.
- OK — connections sound: railways sits at Create + aeronautics naturally; M-20 conductor cap is the only actionable new link

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure compat-patcher (behavior-only, no items/blocks/methods). Required infrastructure; no content surface to weave. Adding a second pillar here would be a category error.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-only intercept layer; the mod adds no items of its own. Its "content" (fish entities, catches) belongs to the fishing/cooking/processing mods beneath it (createfisheryindustry, farmersdelight). Weaving fishing content goes there, not here.

## bakery   [anchors: survival (1)]
- from: bakery:baguette / strawberry_cake / linzer_tart / chocolate_gateau (high-effort luxury output) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a baker specializing in wedding cakes and pastries trades them to the town market — cooperative economy emerges without forcing it
- from: wheat (raw crop) | via: create:milling → flour | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding raw wheat into a Create millstone for baking flour is a natural one-step tie that makes the Create tech spine useful in daily kitchen prep
- from: bakery:apple_jam / chocolate_jam (high-sugar processed goods) | via: vinery:apple_fermentation (jam → fermented fruit base) | to: Create (via vinery chain) | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: jam→wine ferment is thematically plausible but convoluted; bakery goods are already economy-sellable and the chain adds no clear new pillar, just reroutes within survival/food space. Keep it simple.
- from: bakery surplus crops/baked goods | via: ars_nouveau Agronomic Sourcelink (passive Source) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: weak as noted in dossier; Source feedstock is better owned by dedicated farm mods (farmersdelight, farm_and_charm); using baked goods here adds redundancy without a clean hook
- REWORK: none — bakery was 1-pillar; M-09 + M-12 above are the proposed first weaves

## charta   [anchors: survival (1)]
- from: charta bar furniture (bar shelves, stools, card tables, wine glasses) | via: create:cutting (wood panels → shaped bar furniture) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the sawmill-cut boards and glass-pressed goblets coming off a Create line to furnish the tavern is a coherent craft progression
- from: charta gambling / card matches + numismatics coins | via: no method (behavior wiring, not item-routing) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — Charta has no betting hook; wiring a wager system would require a new game-mechanic edge that isn't in the palette. Flag for Gate 0 if wanted.
- from: charta:empty_wine_glass | via: vinery / alcohol_industry fill (liquid_burning or bottle_fluid) | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pouring vinery wine into charta's empty glass at a bar shelf completes the tavern loop and ties Charta into the alcohol/survival food chain naturally
- REWORK: none — 1-pillar; M-04 + M-12 above are the proposed weaves

## mffs   [anchors: Create, survival (2)]
- OK — connections sound. The gold-standard M-05/M-06 weave is fully authored (60-mffs.js). No new edge needed; adding more would over-weight a single mod.
- from: mffs biometric cards / access modules | via: create_new_age:energising (FE charging to power card authentication) | to: Create (electric) | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: MFFS uses Fortron (its own energy), not FE; bridging to FE energising is a false-fit (different power nets), and the mod is already well-connected. Don't force.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual (transmute a wither skull / undead-themed reagent → undead_eye as a costly craft fallback) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: an occultist who has studied the undead can summon an Eye of the Undead through ritual — costly, but stops exploration dead-ends; theme is pitch-perfect
- from: endrem:nether_eye | via: occultism:spirit_fire (blaze rod + nether wart soul-fire transmutation) | to: magic | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul-fire is the native bridge between the Nether and Occultism; birthing a nether eye from it is the most natural method
- from: endrem:magical_eye / corrupted_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: an Ars magician infusing source gems into a corrupted eye to purify/produce the magical variant reads as obvious to any magic player; keeps the craft route costly (apparatus + reagents)
- from: endrem eyes (1–2 specifically — e.g. endrem:cryptic_eye) | via: create:sequenced_assembly (derpack:incomplete_cryptic_eye multi-step) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the exploration intent is the point; making eyes craftable via sequenced assembly trivializes the gate. At most one eye could be craft-gated; but the magic transmutation routes (M-11/M-19/M-10) are more thematically coherent and less progression-diluting. Reject sequenced-assembly here.
- from: endrem boss-linked eyes (guardian_eye after defeating the Elder Guardian variant) | via: numismatics sell (rare Eye as trade good) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: eyes are single-use progression keys, not farmable currency commodities; selling them undermines the scarcity design. Wrong fit.
- REWORK: none — 1-pillar; M-11/M-19/M-10 above are the proposed first weaves

== CHUNK COMPLETE ==
