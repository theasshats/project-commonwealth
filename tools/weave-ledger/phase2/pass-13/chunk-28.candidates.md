# Phase 2 candidates — chunk-28

## solmaiddream   [anchors: survival (1)]
- LEAVE — flavour addon; its only surface is which foods are in the pool (shared with the survival/SoL pillar already). No items, no methods, no outputs to route. Forcing a second edge would be artificial.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:largemast (ship hull/mast components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a war-cutter or steamship hull from Create brass and iron plates is exactly what a ship carpenter who knows the tech spine would do
- from: hpm:corvette_steamship_item | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the steamship is WIP / top-tier; staging its construction through a sequenced assembly chain (boiler + drive shaft + hull) makes it the pinnacle of the naval line and gates it behind real Create progression
- from: hpm:cuttermilitariseditem / hpm:hand_cannon | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: overlaps the first ACCEPT above — both are M-05 gating on Create parts; keep the hull/mast accept and treat armament as part of the same gate rather than a separate row
- from: finished ship (hpm:pirate_cutter_item / hpm:swashbuckleritem) | via: numismatics sell-price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a shipwright sells a rigged cutter for coin — luxury vessel as a trade good in the player economy
- REWORK — none (no existing cross-pillar connections yet; anchored to aeronautics only; the above adds Create + economy)

## direct_chute   [anchors: Create (1)]
- LEAVE — single Create logistics block crafted from zinc; no foreign material surface, no second pillar to coherently join. A nominal "aeronautics logistics" tag would be forced.

## libipn   [anchors: support/library (1)]
- LEAVE — zero-content code library (GUI/config API); no items, no methods, nothing to route. Genuine zero-content case.

## create_compressed   [anchors: Create (1)]
- LEAVE — Create-internal storage/QoL layer; it compresses Create's own intermediates and uses Create's own methods. No foreign material joins, no second pillar to coherently reach. Dossier assessment confirmed.

## smartbrainlib   [anchors: support/library (1)]
- LEAVE — pure code-only AI framework dependency; no items, no blocks, no methods, nothing to route.

## spark   [anchors: support/performance (1)]
- LEAVE — server performance profiler (commands only); no player-facing content, no materials, no methods.

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — client-side cosmetic animation overrides only; no items, no blocks, no methods, nothing to route.

## copycats   [anchors: Create (1)]
- from: copycats blank shapes (zinc-crafted) | via: create:item_application (applying a block skin) | to: Create (depth) | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the "apply skin" mechanic is already the copycat block's native interaction (right-click-with-block), not a Create deployer step — routing it through create:deploying/item_application would replicate a mechanic that already exists, adding complexity without player value; the mod is already inside the Create pillar
- from: copycats blank shapes | via: create:cutting (stonecutter equiv, zinc sheet → shaped blank) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla stonecutter is the stated recipe path; replacing it with a Create cutting recipe is redundant housekeeping, not a meaningful weave; no second pillar reached
- LEAVE — already fully embedded in the Create pillar (zinc-built, Create-dependent); no coherent second-pillar surface. Both candidate routings above fail red-team.

## vinery   [anchors: survival (1)]
- from: vinery:apple_mash / grape_juice | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pressing apples in a Create mechanical press into mash/juice is an obvious industrial-scale upgrade over hand-stomping in the grapevine pot; slots Vinery into the Create food-processing line
- from: vinery wines / vinery:apple_cider / vinery:apple_wine | via: numismatics sell-price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled aged wines are the canonical luxury trade good — a Vinery winemaker sells her best bottles for coin at the market
- from: vinery:cherry_wine / vinery:chorus_wine | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: there is no coherent lore reason a wine bottle becomes a magic reagent through arcane infusion — the tone clash (rustic vineyard vs. arcane imbuement) fails red-team; stick to economy and Create
- from: vinery grape/cherry seasonal crop (Serene Seasons gated by climate zone) | via: create:milling → wine-fermentation pipeline | to: Create + survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: grapes only ripen in their climate zone's warm season, so the winery's Create-pressed juice supply is genuinely seasonal — makes the luxury-goods economy ebb with the calendar
- REWORK — none (no existing cross-pillar connections; survival-anchored only; above adds Create + economy + a seasonal lever)

== CHUNK COMPLETE ==
