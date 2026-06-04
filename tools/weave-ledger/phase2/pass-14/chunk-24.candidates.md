# Phase 2 candidates — chunk-24

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — genuine zero-content behavior mod: 0 blocks, 0 items, no loot, no recipe surface. Privacy/networking utility with nothing to route through any method.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — pure language-adapter library: 0 blocks, 0 items, no loot, no recipe surface. Required dependency with no player-facing content.

## vinery   [anchors: survival (1)]
- from: vinery wines/ciders (finished effect-bearing bottles) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wine merchant sells Vinery bottles at the Numismatics shop — luxury drinks fund your next airship run
- from: vinery:apple_mash / grape_juice (pressed intermediates) | via: create:milling or create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Apple Press feeds a Create mechanical press for bulk juice production; a mill can extract grape pulp as a fermentation shortcut
- from: vinery wines (effect-bearing consumables) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: wine as a magic infusion catalyst clashes in tone — Ars Nouveau's inputs are crystals/essences, not rustic drinks; the pairing is arbitrary
- from: vinery:apple_juice / grape_juice | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival→survival; doesn't add a second pillar — already survival-anchored, so intra-pillar routing doesn't count
- REWORK: no existing cross-pillar connections to flag. Both ACCEPT candidates (M-09 economy and M-12 Create) are new — vinery is currently 1-pillar.

## copperagebackport   [anchors: survival (1)]
- from: copper deco/tools (oxidized/weathered variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn copper lanterns and oxidized bars feed back into the copper economy — Create crushers reclaim the metal with characteristic XP nugget loss
- from: copper tools/armor | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: broken copper gear crushed for nuggets/raw copper — the lowest-tier metal loops cleanly through the Create processing chain
- from: Copper Golem (item-sorting mob) | via: config/logistics tie | to: Create (logistics) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: the Copper Golem's chest-to-chest sorting overlaps Create logistics thematically, but there is no accepted motif for mob-as-logistics-bridge; flagging for Gate-0 motif consideration only
- REWORK: no existing cross-pillar connections to flag. Both accepted M-04/M-03 candidates are new — copperagebackport is currently 1-pillar.

## direct_chute   [anchors: Create (1)]
- LEAVE — single Create logistics block (zinc chute variant), 1 item, loot=yes but only its own block drop. No foreign material surface; forcing any second-pillar edge would be contrived. Already Create-anchored and self-contained.

## entity_model_features   [anchors: support/client-rendering (1)]
- LEAVE — genuine zero-content client mod: 0 blocks, 0 items, no loot. Renders OptiFine CEM model overrides; no game material to route through any method.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — genuine zero-content performance mod: 0 blocks, 0 items, no loot. Pure leaf-decay behavior patch with no material surface.

## aeronauticscompat   [anchors: aeronautics/support (1)]
- LEAVE — genuine zero-content compat patcher: 0 blocks, 0 items, no loot. Runtime mixin patches for ship compat; no items/blocks to route. Required pack component per CLAUDE.md.

## create_better_villagers   [anchors: Create, economy (2)]
- from: Create-parts villager trades | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: Andesite/Brass/Copper Workers accept coins instead of emeralds, pulling Create parts directly into the pack's Numismatics economy rather than vanilla trade — the Create spine feeds the coin web
- REWORK: existing connections (Create + economy) are sound in direction but use vanilla emeralds, not pack coins. The M-21 candidate above would tighten the economy pillar link from nominal (villager→emerald) to explicit (villager→Numismatics). Flag for the 0.9 economy update review per M-21's provisional caveat.

## buildguide   [anchors: support/QoL-client (1)]
- LEAVE — genuine zero-content client utility: 0 blocks, 0 items, no loot. Render-overlay build assistant with no game material surface.

== CHUNK COMPLETE ==
