# Phase 2 candidates — chunk-35

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — pure client texture-feature engine; no items, no methods, no game content surface. Nothing to route.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:optical_sensor | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the wolf's sensor eye needs arcane attunement before it can "see" through illusion — a lore-coherent reason to pass a precision component through a magic ritual
- from: createmechanicalcompanion:mob_radar | via: occultism:spirit_fire | to: magic | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: soul-fire haunting a radar device is tonal stretch — the radar is a mechanical scanner, not a soul vessel; the haunting imagery doesn't map
- from: createmechanicalcompanion:illager_engineer_spawn_egg (via illager_engineer mob drop) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty to hunt the Illager Engineer (the mechanical wolf's antagonist mob) pays coin — combat against the enemy that drops wolf-build mats feeds the economy loop
- from: createmechanicalcompanion:mechanical_wolf_link | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: the wolf link is a personal companion summoner, not a trade good; selling it undermines the "crafted reward" narrative and there's no thematic reason a player would peddle their companion bond
- OK — existing Create connections (sequenced_assembly / mechanical_crafting / sandpaper_polishing / deploying) are coherent and well-scaled to the companion's endgame depth; no rework needed.

## ponderjs   [anchors: support/dev-infra (1)]
- LEAVE — packdev tooling only; no items, no methods, no material surface.

## betterstrongholds   [anchors: survival (1)]
- LEAVE — pure structure/worldgen mod; no registry items or recipe methods. A loot-table seed (coin/reagent) would be a datapack edit, not a mod weave; deferred per dossier recommendation.

## companion   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-safety mod; no items, no methods, no material surface.

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — client-side map UI; no items, no methods, no material surface.

## timm   [anchors: support/QoL-client (1)]
- LEAVE — client UI overlay only; no items, no methods, no material surface.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — pure server-side threading optimization for Create trains; no items, no methods, no material surface.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid button overlay; no items, no methods, no material surface.

## umapyoi   [anchors: survival (1) — inbound create:mixing already ties it loosely to Create but not as a formal pillar]
- from: umapyoi:crystal_gold / crystal_rainbow | via: numismatics sell/price | to: economy | motif: M-09 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: gacha-rarity crystals are luxury collectibles — rainbow crystals command a real coin price at player markets, making the Uma loop feed the trade economy
- from: umapyoi:blank_uma_soul (ticket feedstock step) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pulping a carrot + paper through a mixer to produce the blank ticket substrate feels like sensible industrial preparation; the soul-baking oven sits downstream of Create's mixing step, so the tech spine is a required first stop
- from: umapyoi:crystal_silver | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: uma-crystals are gacha-collectible flavor items; passing them through an arcane imbuement ritual mixes anime-gacha tone with high-fantasy magic in a way that reads as forced — no thematic story for why a horse-girl crystal needs a magic ritual
- from: umapyoi:crystal_rainbow | via: occultism:spirit_trade | to: magic | motif: M-11 | power: endgame | tone: clash | verdict: REJECT | reason: same tonal mismatch — occultism spirit trade is demon-pact territory; rainbow uma crystals are whimsical collectibles; the pairing is incoherent to a player
- REWORK: the existing create:mixing inbound is light and may not register as a formal Create anchor. Consider formalizing: if the mixing step is just a recipe shortcut rather than a required gate on the ticket feedstock, it won't count as a pillar weave. The accept above (M-12, blank ticket via mixing) addresses this — make the mixing step *required* (not an alternative path) so umapyoi genuinely sits in the Create pillar.

== CHUNK COMPLETE ==
