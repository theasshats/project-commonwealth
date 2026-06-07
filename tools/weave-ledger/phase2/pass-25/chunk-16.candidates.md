# Phase 2 candidates — chunk-16

## valarian_conquest   [anchors: survival (1)]
- from: faction citizenship / mercenary-hire gate | via: config/trade tie (M-21 provisional) | to: economy | motif: M-21 | power: mid | tone: ok — coin as the universal currency of hire makes sense in a trading co-op | verdict: REJECT | reason: M-21 is provisional/leans-no; also a bare "hire NPCs with coins" without a genuine loop-closing structure is generic-sellable-adjacent — economy de-emphasis
- from: faction armor / knight gear (armorsmith station) | via: create:mechanical_crafting or create:sequenced_assembly as gating step | to: create | motif: M-05 | power: mid | tone: ok — war gear built on an industrial spine fits the industrial-martial crossover | verdict: ACCEPT | hook: the armorsmith station that produces plate and shields demands Create-fabricated metal sheets as inputs, anchoring faction escalation to the tech spine
- from: faction loot chests (loot=yes) | via: loot-seed — seed Numismatics coin or magic reagent into faction structure loot | to: economy | motif: M-08 | power: mid | tone: ok — spoils of conquest should include spendable coin, distinctively closing conquest→economy rather than generic sellability | verdict: ACCEPT | hook: clearing a Barathian Outpost yields regional coin alongside faction gear, so combat risk converts directly to trade capital

REWORK: existing survival anchor is sound. Second anchor (create) above is new.

## createthreadedtrains   [anchors: support/performance (0 content)]
- LEAVE — pure server-side performance optimization; zero items/blocks/recipes; nothing to weave.

## sliceanddice   [anchors: create, survival (2)]
- OK — connections sound. Already the canonical M-12 Create×survival bridge. No coherent additional anchor.

## biolith   [anchors: support/library (0 content)]
- LEAVE — worldgen API library; no items, no recipe surface.

## create_jetpack   [anchors: create, aeronautics (2)]
- from: netherite_jetpack (endgame lava-swim flight) | via: create:sequenced_assembly or boss-key gating | to: survival (boss gate) | motif: M-15 | power: endgame | tone: ok — netherite-tier personal flight through lava is flagship; demanding a boss-drop input fits | verdict: ACCEPT | hook: the Netherite Jetpack's assembly chain requires a boss-drop component, making lava-flight a hard-won milestone rather than a straight material upgrade
- OK on existing create + aeronautics anchors.

## resourcefulconfig   [anchors: support/library (0 content)]
- LEAVE — config API; no player content.

## bagus_lib   [anchors: support/library (0 content)]
- LEAVE — shared code library; no player content.

## companion   [anchors: support/QoL (0 content)]
- LEAVE — pet-safety behavior mod; no items, no material surface.

## touhou_little_maid   [anchors: survival (1)]
- from: altar_recipe_serializers (native ritual method accepting arbitrary modded inputs) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-11 | power: mid | tone: ok — the Altar's power-point currency + offering layout reads identically to a magic ritual; routing a magic reagent (e.g. ars_nouveau:source_gem or irons_spellbooks:arcane_essence) as a required altar input ties maid summoning to the magic pillar's progression | verdict: ACCEPT | hook: summoning a powerful maid requires an arcane offering alongside vanilla mats, so the altar becomes a ritual junction between shrine magic and NPC labor
- from: fairy drops (power-point bottles via mob-drop path) | via: bounty-board or spirit_trade route | to: economy | motif: M-14 | power: everyday | tone: ok — power bottles from fairy mobs as a bounty payout or trade item is distinctive because the item is functionally the altar's "fuel" currency, creating a supply chain | verdict: REJECT | reason: the power-point bottle supply chain is plausible but thin — it's essentially "a mob drop becomes currency," which is M-02/M-14 boilerplate; the altar magic link (above) is the stronger and more distinctive anchor; adding a second economy tie here would be over-engineering a one-trick item
- REWORK: existing survival anchor is sound; the Altar method is genuinely ritual-adjacent and under-exploited.

## betteroceanmonuments   [anchors: survival (1)]
- from: monument chest loot (loot=yes) | via: loot-seed — inject Numismatics coin or a scarcity-gated reagent into monument rooms | to: economy | motif: M-08 | power: mid | tone: ok — an expanded ocean monument is a real combat challenge; seeding coin there closes the combat→economy loop distinctively (aquatic hazard = aquatic reward) | verdict: ACCEPT | hook: the deepened monument's reward rooms carry regional trade coin, giving the aquatic dungeon route a concrete economy payoff
- from: monument chest loot (loot=yes) | via: loot-seed — inject a boss-key component (guardian-related or unique ocean fragment) into the capstone room | to: create/magic | motif: M-15 | power: endgame | tone: ok — the Elder Guardian is the monument boss; putting a recipe-gating drop in the final room is thematically tight | verdict: ACCEPT | hook: the monument's inner sanctum yields a unique sea-core component that gates a Create or magic mid-tier recipe, making ocean exploration load-bearing in the production loop

## sable_sa_compat   [anchors: support/compat (0 content)]
- LEAVE — compat behavior patch; no items.

## ldlib2   [anchors: support/library (0 content)]
- LEAVE — UI/rendering library; no real player content (dev test items only).

## betterpingdisplay   [anchors: support/UI (0 content)]
- LEAVE — client UI mod; no gameplay content.

## betterstrongholds   [anchors: survival (1)]
- from: stronghold chest loot (loot=yes) | via: loot-seed — inject a magic reagent (e.g. ars_nouveau:source_gem fragments or irons_spellbooks:arcane_essence) into stronghold library/vault chests | to: magic | motif: M-02 | power: mid | tone: ok — the stronghold is the End-access gate; giving its loot a magic reagent makes exploration feed the magic pillar, closing dungeon-delving → arcane production | verdict: ACCEPT | hook: delving the stronghold's new secret rooms yields arcane reagents that feed the magic production loop, making End-portal access and arcane progression share the same dungeon run
- from: stronghold chest loot (loot=yes) | via: loot-seed — inject a boss-key component | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the stronghold is already the End-portal structure; a second boss-key seed here competes with the Ender Dragon's own drop slot and muddies progression clarity — one strong magic reagent seed (above) is cleaner

## more_slabs_stairs_and_walls   [anchors: decoration/support (1)]
- from: 847 cut-block variants (stone/log/leaves/concrete) | via: create:cutting (mechanical saw) | to: create | motif: M-12 | power: everyday | tone: ok — cuts from a saw is the natural production path; players automate bulk building materials the same way they automate planks | verdict: ACCEPT | hook: the mechanical saw outputs all 847 slab/stair/wall variants in bulk, folding this massive palette into the Create production line and making large builds viable without hand-crafting
- from: gravel/sand gravity-variant blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: weak — crushing a gravel-slab back to gravel is trivially obvious and adds minimal loop value; it's a completeness tick, not a hook | verdict: REJECT | reason: M-04 recycle loop is low-signal here; every stone/gravel variant being crushable is implicit in M-04's existing scope — no separate weave needed, and a player wouldn't call it a distinctive connection

## create_dragons_plus   [anchors: create (1)]
- from: dragon_breath fluid + Bulk Ending method (create_dragons_plus:ending) | via: route a magic item through Bulk Ending (dragon-breath-infused End transmutation) | to: magic | motif: M-10 | power: mid | tone: ok — dragon breath is inherently arcane; passing a magic material through an End-infused fan process as an attunement step reads naturally | verdict: ACCEPT | hook: End-infusing a base arcane material in the Bulk Ending fan chamber produces a higher-tier magic reagent, tying dragon-breath industrial processing to the magic production pillar
- from: bulk freezing method (create_dragons_plus:freezing, powder-snow catalyst) | via: route a survival/seasonal ingredient through bulk freezing | to: survival | motif: M-16 | power: everyday | tone: ok — seasonal ice/snow availability in Serene Seasons is a pressure lever; the Bulk Freezing fan method is the industrial way to freeze seasonal ingredients | verdict: ACCEPT | hook: certain seasonal-harvest ingredients (obtainable only in winter) are bulk-frozen in the fan chamber to produce preserved forms, tying the seasons lever to Create industrial output

## create_ultimate_factory   [anchors: create (1)]
- LEAVE — pure recipe-content mod with no items of its own; it deepens the Create pillar but has no second-pillar material surface to bridge to. Weaving it further is a Create-depth decision (content scarcity review), not a cross-pillar edge.

## imfast   [anchors: support/QoL (0 content)]
- LEAVE — server movement-validation patch; no content.

## lithostitched   [anchors: support/library (0 content)]
- LEAVE — worldgen library; no player-facing items.

## immersive_paintings   [anchors: decoration/support (1)]
- from: paintings/graffiti as player-created decorative items | via: economy (player-run art trade / Numismatics sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; "sell art for coins" is trivially true of any decorative item
- LEAVE — pure decorative-expression mod; no material loop to close; no coherent Create/magic/survival weave without forcing a busywork edge.

== CHUNK COMPLETE ==
