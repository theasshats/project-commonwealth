# Phase 2 candidates — chunk-07

## betterendisland   [anchors: survival (1)]
- LEAVE — no items, no loot tables, no recipe surface; pure structure/worldgen overhaul of the End island. Nothing to weave.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: A fallen meteor is raw star-iron — of course you run it through the crusher for iron/nickel dust and a glow-fragment byproduct.
- from: Blood Moon / Blue Moon event-as-catalyst | via: ars_nouveau:ritual or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Some rituals only complete under a charged sky — Blood Moon amplifies a summoning, Blue Moon opens a celestial imbuement; the lunar event is the missing catalyst.
- from: enhancedcelestials:space_moss_block | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss is scarce worldgen deco, not a cropable bulk feedstock; milling it loses the thing that makes it interesting. Depth/power mismatch — everyday mechanic on a rare block.

## solclassic   [anchors: survival (1)]
- from: systemic food-variety demand (diminishing-returns rule) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: When eating the same meal twice punishes you, a market stall stocked with diverse cooked food has real value — SoL's mechanic makes the economy's food trade a necessity, not a novelty.
- NOTE: this is a systemic/design-level link rather than a recipe-level one; no single item is the join key. The weave is "SoL's diminishing-returns rule makes M-09 food-trade meaningful" — implementation is config/design, not KubeJS. Flag for Gate 2 review on whether a recipe artifact is needed or whether the systemic note is sufficient.
- from: solclassic:basket / wicker_basket | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: The basket is a simple carry-item, not a flagship. Gating it behind mechanical_crafting is over-engineering an everyday tool; depth does not scale with its power level (guardrail violation).

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / _netherite (upper tiers) | via: create:pressing (sheets) + crafting-table (reinforced paper with Create paper-pulp) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A diamond-tier glider is built flight gear — of course it calls for metal sheets off a Create press and processed reinforced paper rather than raw paper+leather. Lower iron tier stays vanilla-accessible (depth scales with tier).
- from: vc_gliders:paraglider_iron (base tier) | via: create:milling → reinforced paper | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Iron tier must stay accessible early; routing its reinforced paper through a mill gates the most basic glider behind Create which violates the guardrail against gating everyday components behind complex recipes.
- from: vc_gliders:nether_upgrade | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: The nether-upgrade component gets its fire-resistance by passing through soul-fire in Create's haunting process — a single light step, thematically tight, no over-complexity.




