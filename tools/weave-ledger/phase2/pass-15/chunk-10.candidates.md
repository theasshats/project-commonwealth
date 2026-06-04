# Phase 2 candidates — chunk-10

## irons_spellbooks   [anchors: magic, Create (2)]
- REWORK: existing Create anchor is via `create:emptying`/`create:filling` on the alchemist cauldron — this is sound and deliberate; no rework needed.
- OK — connections sound (2 pillars: magic + Create via cauldron fluid I/O). Candidates below are depth-adds.
- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Mithril is a rare depth ore — crushing it for a secondary pyrium/arcane-dust byproduct rewards the Create player who bothers to route it
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is the Iron's currency reserved for M-01 bonding — imbuement conversion to/from source_gem closes the cross-magic economy loop (already ledger-reserved)
- from: mob drops (irons_spellbooks apothecarist / ice_spider drops) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: apothecarist and ice spider drops as spell-brew reagents or ritual components; natural: killing magic-school enemies yields magic materials
- from: irons_spellbooks:affinity_ring_* (school-specific) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: affinity rings are already Iron's endgame gear; gating them further behind sequenced-assembly adds friction without narrative payoff and is mis-costed (the ring earns its depth from the magic progression tree, not Create manufacturing)
- from: irons_spellbooks alchemist cauldron brew | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: the cauldron is a fluid multiblock, not an electric device; charging it via FE is a tonal stretch — the alchemist cauldron reads arcane, not electric

## solclassic   [anchors: survival (1)]
- LEAVE — zero-content ambient rule: 0 blocks, 0 items, loot=no. The mod applies a config-driven penalty modifier to all foods pack-wide; it has no items a machine can consume, no method to route through, and no loot table to seed. The systemic pressure it creates (eat variety → trade matters) amplifies M-09 luxury-good→coin but there is no discrete recipe or delivery hook to author. Leave at one pillar by design.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- OK — connections sound (2 pillars: Create kinetic method + decoration). The Mechanical Chisel IS the weave.
- from: rechiseledcreate window/variant blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: chiseled Create variants (asurine/andesite small-brick etc.) crush back to raw/gravel + XP nugget — the standard deco-recycle weave keeps the palette from being a dead end
- from: rechiseledcreate chiseled variants | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif — decorative architecture variants have no thematic hook in magic rituals; forcing it is a defect
- from: rechiseledcreate blocks (deco set) | via: numismatics trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); deco blocks as trade goods is weak without a specific shop context — not worth pursuing over the existing 2-pillar coverage

## fzzy_config   [anchors: support/library (1)]
- LEAVE — genuine zero-content library. 0 blocks, 0 items, loot=no, no recipe-types. Config engine API only; nothing to weave.

## chat_heads   [anchors: support/QoL client (1)]
- LEAVE — genuine zero-content client UI mod. 0 blocks, 0 items, loot=no, no recipe-types. Chat avatar overlay; nothing to weave.

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments monument chest loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the expanded monument chests drop a handful of Numismatics coins (spur/bevel tier) — a deep aquatic dungeon paying out hard currency makes the ocean worth diving; thematically coherent (sunken treasure → coin)
- from: betteroceanmonuments monument chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a guardian-scale magic reagent (Iron's arcane scroll fragment or Ars source gem shard) into monument loot — guardian fights are mid-tier and the sea-magic flavour is earned
- from: betteroceanmonuments monument chest loot | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is boss-key unlock — guardians aren't a strong-enough boss to gate complex Create tech; the existing vanilla elder guardian heart drop already serves progression; using monument loot as a Create gate is over-engineering a dungeon chest

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack tank upgrade / backpack_upgrade | via: create:sequenced_assembly | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the tank upgrade module runs through deploying/item_application to add a pressurized manifold — Create-assembled backpack hardware is a natural fit; mid-tier (not everyday leather pack)
- from: travelersbackpack:netherite backpack / dragon backpack | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: netherite/dragon themed packs are cosmetic variants, not functional upgrades — gating cosmetics behind sequenced-assembly is mis-costed and arbitrary; M-20 (the tank upgrade) is the coherent integration point
- from: travelersbackpack backpack (leather tier, any variant) | via: travelersbackpack:backpack_upgrade + numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: backpacks aren't consumable luxury goods; M-09 is for food/drink trade goods, not gear — tonal stretch
- from: travelersbackpack fluid tanks (portable) | via: config tie | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the aeronautics fuel/fluid logistics are handled by TFMG tanks and Create fluid pipes; a backpack tank is a personal carry buffer, not an aeronautics component; no authored connection is coherent

## sound_physics_remastered   [anchors: support/client (1)]
- LEAVE — genuine zero-content client audio mod. 0 blocks, 0 items, loot=no, no recipe-types. Realistic reverb/occlusion rendering; nothing to weave.

## charta   [anchors: survival (1)]
- from: charta bar furniture (bar_shelf, bar_stool, card_table etc.) | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: tavern furniture runs through the Mechanical Saw — planks-to-bar-stool via a cutting recipe fits Create's deco-recycle seam and earns a Create pillar for the whole tavern set
- from: charta:empty_wine_glass / empty_beer_glass | via: vinery:wine_fermentation or extradelight:vat | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: empty glasses filled via Vinery/ExtraDelight fermentation pipeline — the tavern set pairs with the drink-production chain; a player who brews wine fills these glasses to sell or serve; second pillar becomes survival/food
- from: charta card_table loot | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: card tables that generate in villages/dungeons can seed a small Numismatics coin reward — winning at cards pays out coin (provisional M-14 bounty→economy seam); thematically gambling is the whole point
- from: charta card_table as economy gambling sink | via: KubeJS/trade hook | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); a KubeJS betting hook on card table wins has no supported delivery mechanism in Phase 3 and would require custom event code — scope creep

## owo   [anchors: support/library (1)]
- LEAVE — genuine zero-content library. 0 blocks, 0 items, loot=no, no recipe-types. GUI/config/networking API; nothing to weave.

== CHUNK COMPLETE ==
