# Phase 2 candidates — chunk-12

## solmaiddream   [anchors: survival (1)]
- LEAVE — pure flavour addon with no items/methods to route; feeding varied foods to maids is already captured by the food system it rides on; forcing a second edge would be artificial. OK — connections sound for its tier.

## incontrol   [anchors: support/server-util (1)]
- LEAVE — config-only JSON rule engine; no items, no methods, nothing to route. It can *support* scarcity/economy design (region-gating drops) but is enabling infrastructure, not a weave node.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit gets a mechanical-mill use (dye intermediate or food dust) the way Create mills crops — desert foraging feeds the Create processing web
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk mushroom blocks) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom fells dump cap blocks in bulk; milling them into spore-dust or mushroom-stew base pulls dynamic mushroom harvesting into the Create production spine
- from: dynamictreesplus:saguaro_fruit | via: farmersdelight:cooking or extradelight:oven | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already its primary anchor; a cooking route extends the same pillar rather than adding a second system — not distinctive enough as a weave
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis

## staaaaaaaaaaaack   [anchors: support/perf (1)]
- LEAVE — drop-merge QoL with no items or methods; pure performance/entity-count optimization. Nothing to weave.

## fxntstorage   [anchors: Create, survival (2)]
- OK — connections sound. Already at 2 (Create spine material ladder + survival inventory). Flight-upgrade touching aeronautics is a worn gadget, not a wireable resource; leave as is.

## create_dragons_plus   [anchors: Create (1)]
- The dossier already correctly identifies its `ending`/`freezing` fan methods as weave-*targets* other mods route through (not edges this mod needs). However, it is a 1-anchor mod with content — let's check for any genuine 2nd weave.
- from: create_dragons_plus:dragon_breath (fluid) | via: create_dragons_plus:ending (Bulk Ending fan catalyst) → applied to foreign Ars/Iron's drops | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: dragon's breath as an arcane End-infusion catalyst — items passed through the Bulk Ending fan are "end-touched," a natural conduit for magic-mod attuning (e.g. turning a base gem into a void-aligned magic component); dragon breath as arcane catalyst is thematically coherent
- from: create_dragons_plus (Bulk Freezing method) → foreign food/ingredient freezing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is the receiving pillar here (food freezing), but create_dragons_plus is the method provider, not the consumer — the correct framing is that a *survival* food mod routes through this method; this doesn't add a second anchor to create_dragons_plus itself

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding magic reagents (ars_nouveau:source_gem, occultism::otherworld_sapling, iron's spell scrolls) into Trek's varied structure chests rewards exploration with progression items and ties the structure-variety mod to the magic pillar — exploration pays off in the magic web
- from: trek structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable coin seeding — exploration → coin is non-distinctive; the magic-reagent loot seed (above) is the stronger tie; a bare coin loot seed adds nothing the Numismatics trade network doesn't already provide
- REWORK: existing single-anchor (survival) is accurate but weak — the mod is pure worldgen with no items; loot-seeding is the only path to a 2nd anchor and the magic-reagent route (above) is the one to pursue.

## ding   [anchors: support/QoL (1)]
- LEAVE — client-side audio cue on load; zero items/blocks/methods. Sanctioned support role; no weave possible or needed.

## copperagebackport   [anchors: survival (1)]
- from: copper deco blocks (minecraft:copper_chest, copper_bars, copper_chain, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the whole copper-age deco/tool set crushes back to copper nuggets + an XP nugget, folding the backported copper palette into Create's copper economy loop — a player building with copper bars or using copper tools has a recovery path
- from: minecraft:copper_golem_statue | via: create:crushing → copper nuggets | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the statue is a decorative/collector item, not deco the player masses for building; crushing it feels punishing and off-theme; leave the golem statue outside the recycle loop
- from: copper tools/armor | via: create:crushing → copper nuggets | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools crushed to nuggets + XP, closing the copper-tool economy — coherent with the Create "recycles deco/tools" pattern

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — pure crash-recovery client/server utility; no items or methods. Sanctioned support role.

## more_slabs_stairs_and_walls   [anchors: decoration palette (1)]
- from: 847 slab/stair/wall variants | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: giving the full cut-block set mechanical-saw recipes means a builder can automate bulk production of their preferred shapes on the Create spine — decoration automation is a natural Create use-case, and 847 cuts without saw recipes is a missed connection
- from: gravity-block cuts (concrete-powder/sand/gravel slabs+stairs+walls) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the recycle loop for these is trivially the parent block; adding 847 crushing recipes for cuts is mechanical bloat with no meaningful new connection — the saw recipe (above) is the load-bearing weave, not the crush-back

## dynamictrees   [anchors: survival (1)]
- The dossier correctly flags leaving this — DT trees are awkward for Create automated harvesters, the seed-conversion method isn't a foreign sink, and its log output already feeds downstream Create/FD methods.
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dendro Potion (a special growth booster for trees) is a natural candidate for arcane infusion — an alchemically grown potion that magic enhances; Ars imbuement of a dendro potion into a "verdant" growth catalyst ties the living-forest mod to the magic web, and the tone is coherent (nature magic accelerating organic growth)
- from: dynamictrees:branch (generic branch item, drops on fell) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT branches are generic low-value byproduct; milling a branch is equivalent to milling a stick — no distinctive connection, just noise

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork molten metal fluids (scarce regional metals crushed + melted) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined scarcity is the only defensible economy link here — createmetalwork's whole purpose is higher-yield ore processing; the processed metal (higher yield from scarce regional ore) is exactly what M-08 describes as "coin from processed scarcity," and the scarcity-gating makes it structurally distinctive, not generic-sellable
- from: createmetalwork crushed forms for magic-mod ores (e.g. palladium/osmium tagged as c:crushed_raw_materials/palladium) | via: create:crushing → then ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-03 + M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: magic-mod metals (occultism's silver, galosphere's palladium-tagged ore) run through createmetalwork's crush+melt pipeline before arcane infusion — the Create ore-doubling reward precedes the magic use, adding a required tech step before magic refining

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets (the large catalogue of per-mob drops) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-02 + M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: mythic creature drops — gorgon scales, harpy feathers, mermaid pearls — are perfect ritual/spirit-fire fodder for Occultism; the bestiary becomes a gathering pressure for magic progression, and the tone is pitch-perfect (mythology → dark ritual)
- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-02 + M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: infusing creature fragments into Ars source gems or spell components (e.g. a harpy feather infused into a wind glyph catalyst) ties the bestiary to the magic web — thematically strong, not contrived
- from: grimoireofgaia boss busts (bust_gorgon/valkyrie/sphinx/vampire/minotaur) | via: bountiful bounty | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss busts as bounty proof-of-kill — place a "wanted: gorgon" bounty that pays coin when a bust is turned in; the bust is not generically sellable (only obtainable by killing a mini-boss), so the economy link is structurally gated, not trivial. This is distinctive: combat → proof-of-kill → coin via bounty board
- from: grimoireofgaia:ring_of_speed / ring_of_jump / ring_of_haste (artifact rings) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the rings are mob drops, not crafted items — gating a drop behind sequenced assembly would strip it of its reward identity; the combat drop IS the production route here (boss drops as M-15 territory); forcing a Create crafting chain on a drop undermines the boss-key design

## spawn   [anchors: survival (1)]
- from: spawn:clam (color variants, caught via casting_net_clam) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling clam shells yields a calcium/mineral dust or a pearl pigment — turning the ambient sea-life catch into a Create-processable bulk material gives aquatic gathering a tech-spine connection; thematically coherent (crushing shells is what a mill does)
- from: spawn seafood drops (crab, angler_fish, seal — cooked forms) | via: farmersdelight:cooking extended chain → Create milling for spice/extract | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already the anchor; extending deeper into FD cooking stays within survival, not a second system. The Create milling of clam shells (above) is the more distinctive second-anchor candidate
- from: spawn aquatic drops | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; seafood being tradeable adds nothing structurally

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — required compat patcher; pure behavior glue with no items, methods, or content surface. Support role.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. Already at 2 (colony farming/jobs + Create stock-link bridge). The dossier correctly identifies this as a bridge mod whose whole job is wiring MineColonies into the wider pack; no new edge to force.

## alcohol_industry   [anchors: Create, survival (2)]
- from: finished liquors (beer/vodka/whiskey/tequila as bottled consumables) | via: numismatics sell / trading floor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-distilled spirits as a trade commodity — bottled alcohol is a quintessential luxury good that a tavern-running colony player produces and sells; this is a genuine loop-closing production→economy edge (Create produces, economy distributes), not a trivial "it's sellable" claim. The multi-step Create distillation (mix base → boil → bottle) gives the product real production depth and regional-crop dependency if grain/crop inputs are varied, making the trade value substantive.
- REWORK: existing "Create + survival" is sound but the economy link above is worth adding; alcohol_industry is one of the cleaner M-09 cases (high-effort, multi-step, themed luxury good) that the de-emphasis carve-out preserves.

## mffs   [anchors: Create, survival (2)]
- OK — connections sound. Gold-standard Create weave already authored (M-05 native-method gating on focus_matrix, M-06 sequenced-assembly chain on projector/interdiction_matrix, TFMG steel for mid-tier). No new edge needed.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime library; no content, no items, no methods. Sanctioned support role.

== CHUNK COMPLETE ==
