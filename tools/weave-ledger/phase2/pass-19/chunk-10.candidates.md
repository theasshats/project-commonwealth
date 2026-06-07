# Phase 2 candidates — chunk-10

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: structure loot (coins/relics) | via: loot-seed (seed numismatics coin into tavern/dungeon vault loot tables) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: cracking open a Dungeons & Taverns chest drops actual currency — exploration has monetary payoff
- from: structure cartographer villager | via: loot-seed (seed exploration maps referencing coin-rich destinations as high-tier trade) | to: economy | motif: M-21 (provisional motif) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional and leans no; vanilla villager→emerald trade, not Numismatics; weak linkage
- from: trial chamber key loot | via: loot-seed (seed a magic reagent — source_gem shard or occultism drop — into vault output as a rare find) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing a trial chamber uncovers an arcane fragment — combat and exploration feed the magic web directly

REWORK: none existing — single-anchor mod, ACCEPT candidates are the proposed additions.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: slaying the myth-bestiary's creatures yields ritual material — the folklore mobs feed Occultism's spirit-fire transmutations
- from: grimoireofgaia mini-boss bust/ring drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bust of the valkyrie / gorgon ring fetches real coin — the bestiary's prestige drops become trade goods
- from: grimoireofgaia metal nuggets/fragments (c:nuggets/diamond, c:nuggets/emerald) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: nuggets/emerald and diamond are vanilla-tagged; crushing already handles those without a Gaia-specific recipe. Adding an edge here is arbitrary — nothing specifically Gaia about it. Better left to the existing crushing sweep.
- from: grimoireofgaia boss drops (sphinx stone / vampire relic) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-tier drops are arcane catalysts — a folklore trophy is the irreplaceable ingredient for a high-tier Ars imbuement

REWORK: none existing — single-anchor mod, above are proposed additions.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the crab's unique claw is an arcane reagent — hunting crabs matters to the spellcraft economy, not just for a potion
- from: friendsandfoes copper blocks (copper_button / lightning_rod variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this WEAK; copper_button/lightning_rod are minor decoratives, not a meaningful deco-recycling sink — the copper they'd crush to is trivially available. Not worth an explicit edge.
- from: friendsandfoes:wildfire / illusioner drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: these are vanilla mob-vote mobs with very minor loot; the bounty would be for nearly-vanilla drops (no iconic output). Thin enough that forcing an edge here is WEAK — does not advance the loop meaningfully.

REWORK: none existing.

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese aged cheeses (brie, camembert, gouda…) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of aged Camembert is worth real coin — the Create dairy chain has a market exit, pushing players to automate the Cellar
- from: create_cheese:calendar_page_tier_3 (max maturation tier) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: a dairy-aging token feeding a magic infusion is a tone clash — arcane infusion wants organic/mystical inputs, not a cheese timer card. No sensible thematic pairing.

OK — connections sound (Create + survival already established; M-09 economy weave is the clean 3rd).

## immersivearmorhud   [anchors: client-only UI (support, 1)]
- LEAVE — pure client HUD display mod; no items, blocks, or methods; zero content surface for weaving.

## emojitype   [anchors: support (client UI/QoL, 1)]
- LEAVE — client chat input helper; no game content whatsoever; zero content surface.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (Soul Furnace output from mob drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's crystallized blood is exactly what spirit-fire wants — two gothic-alchemy systems speak the same material language
- from: companions boss drop (Sacred Pontiff → Old Cloth + Relic Gold) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the relic from the Sacred Pontiff boss is an irreplaceable catalyst for a high-tier arcane infusion — boss progress unlocks a new spell tier
- from: companions:soul_gem | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: companions ships its own internal coin set (copper/nether/end_coin); introducing a parallel sell-for-numismatics channel creates two competing coin economies. The dossier flags this as MED but the coin-duplication risk outweighs the gain until a single-currency decision is made.
- from: companions tesla/voltaic deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier rates this WEAK — deco-crushing is a loose connection; the tesla aesthetic is gothic-electrical, not industrial-Create. Tone is borderline; prefer keeping the 2nd anchor on magic (above) which is coherent.

REWORK: none existing — single-anchor mod, above are proposed additions.

## dragonlib   [anchors: support (library/API, 1)]
- LEAVE — code library; the sole `dragonlib:dragon` is a dev/test artifact with no player-facing purpose. Zero weave surface.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending fan-process method | via: create_dragons_plus:ending (Bulk Ending catalyst using dragon breath) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: routing an arcane material through the Bulk Ending fan transforms it — a Create machine that breathes dragon-fire bridges engineering to the arcane
- from: create_dragons_plus:dragon_breath fluid | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: dragon_breath is already the catalyst for the ending fan-method above; double-routing the same material into imbuement as well is redundant. One bridge per material.

REWORK: none existing — single-anchor mod, the ending-method→magic bridge is the proposed addition.

## bettermodsbutton   [anchors: support (client UI, 1)]
- LEAVE — pause-screen UI mod; no items, no blocks, no methods; zero game-content surface.

## do_a_barrel_roll   [anchors: support (client QoL, 1)]
- LEAVE — pure client elytra flight-feel mod; no items, no blocks, no materials; zero weave surface.

## quark   [anchors: support/decoration (1)]
- from: quark storage crates (apple_crate, carrot_crate, etc. — item/storage_blocks/*) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crate of apples or gunpowder compresses further in a Create mill — storage blocks have a recycling path, tying Quark's QoL containers to the industrial spine
- from: quark:ancient_wood (the underground Glimmering Weald tree) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient wood from deep cavern groves carries latent fey-energy — it's a reagent for an arcane infusion, giving the cave biome an economy role beyond aesthetics
- from: quark:abacus | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the abacus is a vanilla-plus QoL item (counts inventory); framing it as a tradeable luxury good is forced — it's a player convenience tool, not a craft product a merchant would price. Tone clash.

REWORK: none existing — support-anchor mod, above are proposed additions that would give it 2 real anchors.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice communication; no items, blocks, or methods; zero content surface.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction loot (shields, faction armor, banners) | via: loot-seed (seed numismatics coin into faction structure loot — Outpost/Keep chests) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sacking a faction Outpost yields coin alongside the battle-spoils — conquest has tangible economic reward
- from: valarian_conquest:armorsmith station | via: native method gating on Create parts (iron sheet / andesite casing) as required inputs | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: dossier flags this WEAK; gating a medieval armorsmith on Create factory parts is a tone clash — the faction's aesthetic is pre-industrial feudal, not steam-industrial. Forced.
- from: valarian_conquest mercenary hire cost | via: numismatics (pay mercenaries in Numismatics coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary sword-arm costs real currency — the faction-combat system drains the economy, keeping coin circulating

REWORK: none existing — single-anchor mod, above are proposed additions.

## supermartijn642configlib   [anchors: support (library/API, 1)]
- LEAVE — config-API code library; no items, blocks, or methods; zero content surface.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau Vitalic/Agronomic Sourcelink (consumes mob-death and crop-growth) | via: config/behavior tie — any mob-drop mod (grimoireofgaia, companions, alexsmobs) dying near the sourcelink passively fuels Source | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bestiary's combat feeds the magic engine — killing hostile mobs isn't just loot, it's fuel for the arcane infrastructure
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement (M-01 hub — foreign essences mint in/out) | to: magic-internal (M-01 spine) | motif: M-01 | power: everyday | tone: ok | verdict: ACCEPT | hook: source_gem is the universal magic currency — every magic mod's essence converts through it (this is the established M-01 spine, confirming it's sound)
- from: ars_nouveau spell scrolls / archwood lumber | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier rates this WEAK and recommends leaving economy to dedicated arcane-currency weaves; a sell-for-coin edge on spell scrolls dilutes the magic pillar's identity as a closed production route. Better to let source_gem be the magic economy, not coin.
- from: ars_nouveau:archwood_log | via: create_dragons_plus:ending (Bulk Ending uses dragon breath) | to: create | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: passing archwood through a dragon-breath fan chamber produces an arcane processed form — Create's engineering arm feeds the magic tree's refinement step

REWORK: OK — the Vitalic/Agronomic sourcelink→survival link is native behavior (no recipe needed); M-01 spine is established. The new links above add survival→magic (M-02) and create→magic (M-10 via dragon-fan) to round out a 3-anchor profile.

## l2library   [anchors: support (library/API, 1)]
- LEAVE — shared library for LightLand mods; no items, blocks, or methods; zero content surface.

## lootjs   [anchors: support (library/packdev tooling, 1)]
- LEAVE — KubeJS scripting API for loot table modification; no items or game content; it is the tooling that *enables* M-02 loot-seeds, not a node itself.

## copycats   [anchors: Create (2, per dossier)]
- from: copycats:copycat_block (zinc-built) | via: ars_nouveau:imbuement (apply a magical skin — a specific block texture from an arcane mod makes the copycat glow or carry an effect) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: copycat blocks are purely cosmetic shape-containers; giving them an arcane effect via imbuement invents a mechanic that doesn't exist in either mod. Forcing a fabricated interaction is exactly the kind of "why is this convertible to that?" defect the guardrails warn against.
- OK — connections sound (Create-anchored decoration mod; zinc dependency already ties it to the Create spine. Dossier correctly identifies leave as appropriate for further anchors.)

## terrablender   [anchors: support (worldgen library, 1)]
- LEAVE — invisible worldgen biome-region API; no items, blocks, methods, or loot surface; zero content for weaving.

== CHUNK COMPLETE ==
