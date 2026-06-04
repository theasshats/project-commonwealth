# Phase 2 candidates — chunk-02

## solonion   [anchors: survival (1)]
- from: solonion:golden_lunchbox | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best auto-food carry item requiring a multi-stage Create chain feels right — it's gear, not groceries
- from: solonion:lunchbox | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-06 already covers the golden_lunchbox endgame tier via sequenced_assembly; gating the mid-tier lunchbox too risks making basic food-variety access Create-dependent, violating the "never gate everyday basics behind complex recipes" rule — the lunchbox is a convenience tool, not power-tier gear
- LEAVE (solonion:lunchbag / food_book — the entry-level containers and tracker should stay vanilla-craftable; one light Create gate at the top tier is sufficient)

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the dealer/stoner villagers already hint at a trade economy — having extract refined gummies as premium sellable goods closes that loop into the coin economy naturally
- from: smokeleafindustries:generator (FE output) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: wiring the hemp farm's generator into Create's rotational network stops the FE island — players spin up the smokeleaf plant to power Create machines, or vice-versa
- from: smokeleafindustries raw hemp/buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod has its own full grinder→extractor chain purpose-built for this; routing through Create:milling as an alternate path adds redundancy without meaningfully tying pillars — the FE bridge (M-17) is the cleaner Create seam

## modulargolems   [anchors: Create (1)]
- from: modulargolems golem assembly (boss-tier metals: cursium, dragonsteel) | via: modulargolems:golem_assemble | to: survival (combat progression) | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golems already want Ice&Fire/Cataclysm metals — formalizing these boss drops as the gate makes the combat→construct loop explicit; you kill the boss, you earn the construct
- from: modulargolems golem core upgrade | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: golemancy is already Create-native (uses create:sequenced_assembly etc.); routing a golem upgrade through Ars imbuement adds a conflicting feel — these are metal automatons, not enchanted clay; the pairing is a theme clash and the Create pillar already satisfied

## dynamictreesplus   [anchors: survival/worldgen (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running cactus fruit through a millstone for a dye paste or food dust is exactly what the millstone is for — forage → processed good, fits the Create spine as a light everyday step
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: large-form mushroom caps yielding powdered dye or a fermentation intermediate through a millstone is natural — megascale mushroom = more raw material, not just deco
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is common ambient forage; the economy weave needs scarcity or processing effort to be coherent as a trade good — routing through Create first (M-12) and selling the processed output is the correct order; a direct sell is too thin

## dungeons_arise_seven_seas   [anchors: survival/exploration (1)]
- LEAVE — no items, no methods, no processing surface; the mod is structures + loot tables only. An aeronautics theme rhyme (ships) exists but these are static worldgen, not functional vessels — no coherent recipe-level 2nd pillar is possible without inventing edges the mod doesn't support.

## bountiful   [anchors: economy (1)]
- from: bountiful bounty payout pool | via: numismatics coin as reward output (config/datapack) | to: economy (depth/integration) | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards that pay Numismatics coins (not gold) make the quest board the canonical money faucet — players immediately understand "turn in work, get currency"
- from: bountiful bounty objective pool | via: data/decree config requesting Create-processed goods or magic reagents | to: Create / magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty that demands "10 iron sheets" or "a source gem" draws players into Create/magic loops for economic reward — the board becomes a demand node that pulls on every pillar
- from: bountiful bounty payout | via: numismatics with M-21 villager-trade seam | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT (provisional motif) | reason: M-21 is provisional/leans-no from maintainer; the cleaner path is M-14 direct coin payout without threading through the contested villager-trade seam

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (flagship kitchen appliances) | via: create:mechanical_crafting (brass/copper sheet gating) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen with a real oven and fridge should require fabricated sheet metal — players who build Create infrastructure earn the full kitchen, not just a crafting-table assemble
- from: cookingforblockheads:toaster (the one registered recipe type) | via: create:* | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the toaster is a trivial item (makes toast); gating everyday toast behind Create parts violates the everyday-basics rule and the toaster weave would be cosmetic noise — the M-05 gate belongs on flagship appliances (oven/fridge), not the toaster

## solclassic   [anchors: survival (1)]
- LEAVE — solclassic is a global eating rule, not a machine or material source; no method-routing is available and the systemic economy link (food variety → trade value → M-09) is too diffuse to be a real recipe-level weave. Its value is ambient: it makes every food mod matter more, which is its design purpose. One pillar by design.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a meteor is literally a rock from space — crushing it in a Create crusher for iron dust / nickel byproduct + an xp nugget is exactly what the crusher does with rocks; players find meteors and run them through their tech line
- from: Blood Moon / Blue Moon event-as-condition | via: occultism:ritual or ars_nouveau:imbuement (gated by moon event) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain rituals or infusions only completing under a Blood or Blue Moon creates tense timing around celestial events — the night sky has mechanical weight, not just atmosphere
- from: enhancedcelestials:space_moss_block | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: space moss is ambient decoration; milling it adds a processing path with no clear product identity — the meteor crush (M-04) is the more coherent Create seam for this mod, and piling on a second Create weave for a deco block dilutes both

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris / ender_residue / bear_dust (exotic drops) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-02 + M-11 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: ambergris (whale-origin) as an Occultism ritual component and void_worm ender_residue in a spirit_fire transmutation are exactly the "rare creature extract as arcane reagent" archetype — players hunt exotic fauna to fuel the magic pillar
- from: alexsmobs:ambergris / exotic drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (Occultism spirit_fire/ritual) is the cleaner routing for organic creature drops — Occultism's theme is demonology/spirit work with creature components, which fits far better than Ars imbuement; don't double-spend the same drops across both magic mods unless both are thematically justified
- from: alexsmobs rare drops (bear_fur, terrapin shell, caiman materials) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare biome-specific creature drops as premium trade goods is natural — hunters specialize in biome-specific fauna and trade the products, feeding the emergent economy

== CHUNK COMPLETE ==
