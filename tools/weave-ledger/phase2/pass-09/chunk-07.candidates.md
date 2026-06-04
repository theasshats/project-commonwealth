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

## tide   [anchors: survival (1)]
- from: tide fish (rare/biome-locked: abyss_angler, alpha_fish, void catches) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A rare deep-sea catch is worth real coin — biome-locked fish become trade goods, and the angling specialist earns their place at the market.
- from: tide fish (bulk: anchovy, common catch) | via: farmersdelight:cutting → fish dish + create:milling → fishmeal | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bulk catches go to the cutting board for a Farmer's Delight dish, or into the mill for fishmeal fertilizer that feeds any crop machine — the fishing surplus has a processing outlet.
- from: tide:abyss_angler / void-caught fish | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Red-team: abyssal fish as magic reagents is thematically loose — it's "weird" not "arcane." Weak single-drop use that doesn't survive the tone check. The strong M-09 and M-12 weaves already give tide its 2nd and 3rd pillar connections; this one isn't needed and risks clutter.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A chitinous claw from a mob-vote creature is exactly the kind of exotic material that a ritual asks for — it's weird, it's rare, it reads as "of course this goes in a spell."
- from: friendsandfoes copper deco (copper_button, weathered/oxidized lightning rods) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: The copper deco is vanilla-tier copper — it crushes back to copper nuggets, which is already covered by vanilla copper + M-04 on any copper block. There's no new value here; this is recycling that already works without a recipe entry. Thin/redundant.
- from: friendsandfoes hostile mob drops (Wildfire / Illusioner loot) | via: numismatics bounty / bountiful board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire and Illusioner are combat-encounter rewards; routing their drops through a bounty board for coin makes the combat encounter economically meaningful. (provisional motif)
- NOTE on friendsandfoes: mob-vote mobs are deliberately vanilla-feeling; two thin weaves (crab_claw → magic, hostile drops → economy) are enough. Don't over-wire.

## aileron   [anchors: aeronautics (1)]
- LEAVE — zero items, zero blocks; pure behavior/enchantment overhaul with no material surface to weave. The enchantments it adds operate on the vanilla Elytra item. Even the magic-via-enchanting_apparatus candidate in the dossier is too speculative (enchants may not be datapack-exposed). No coherent 2nd pillar without forcing.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork processed metals (molten scarce regionals: palladium, platinum, osmium, quicksilver) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: You crush the rare ore, melt it in a superheated basin, and cast it into coin — the Create processing chain is the mint's supply line. Regional scarcity × higher yield = natural coin feedstock.
- from: createmetalwork molten magic-metal outputs (e.g. molten forms of occultism/galosphere metals) | via: create:mixing (already used inbound) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Magic-mod ores already pass through Create crushing; the metalwork layer gives occultism and Ars mages doubled output from their scarce reagent ores — Create is the doubling reward for the magic economy, not just the tech one.
- from: createmetalwork:molten_steel_bucket / molten_netherite_bucket | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel and netherite are the structural alloys for a real airship hull — pouring molten structural metal is the natural source of airframe plates.








