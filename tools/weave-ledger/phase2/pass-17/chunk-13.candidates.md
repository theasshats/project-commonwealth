# Phase 2 candidates — chunk-13

## miningspeedtooltips   [anchors: support/client-QoL (1)]

LEAVE — pure client tooltip-render mod; no items, no methods, no materials to route. Reading tool mining-speed is informational only. No coherent second anchor exists; any forced connection would be noise.

## ohthetreesyoullgrow   [anchors: support/worldgen-library (1)]

LEAVE — pure worldgen/sapling-growth code library; 0 blocks, 0 items, 0 loot tables. It is a dependency pulled for other mods that define trees. No material surface, no coherent second anchor. Genuine zero-content library — the correct LEAVE case.

## create_cheese   [anchors: create, survival (2)]

OK — existing connections sound. create_cheese sits squarely in the Create/survival production arm: cheese is fabricated through create:mixing/compacting for curds and then through create_cheese:maturing, which is itself an automatable Create-style station. Milk/dairy as survival food, the tiered Calendar Pages as depth, and the named cheeses as output are all coherent. No arbitrary or lore-clashing existing connections.

New weave candidates:

- from: create_cheese:cheddar (and other aged cheeses) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese takes real processing time (300–900 ticks in the Cellar + upstream Create mixing); a high-effort perishable luxury good is exactly the sell-stall trade item the economy pillar wants. Every player needs varied food (appleseed diet pressure), so the demand is real and not manufactured.

- from: create_cheese:cheese_curds (intermediate) | via: farmersdelight:cooking or extradelight:melting_pot | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: curds as an ingredient in cooked dishes (cheese sauce, fondue-style recipe) weaves the Create dairy chain into the FarmersDelight cooking method, deepening the food production route without gating basics. The Create upstream already makes curds; routing them into FD cooking is one light step that ties two mods' food spaces together.

- from: create_cheese:aged_cheese (any tier-2/3 variety) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — transmuting dairy products through arcane infusion or spirit fire is tonally incoherent; the rustic-artisanal fromagerie vibe has no magic resonance. The connection would read as arbitrary rather than "of course."

REWORK: none — both existing anchors (Create + survival) are structurally grounded and the recipes use the correct methods.

