# Phase 2 candidates — chunk-02

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit mills into a cactus-green dye paste or food pulp — same logic as milling wheat, forage → useful intermediate
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk mushroom caps (procedurally felled) mill into mushroom powder / brown dye — joins the Create processing web as a farmable dye feedstock
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is too common/ambient to be a meaningful luxury sell-good; M-09 targets high-effort processed goods, not raw forage drops — depth mismatch
- from: dynamictreesplus:red_mushroom_cap | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: red mushroom caps are vanilla-equivalent commons; routing them into a spirit-fire reagent is plausible but weak — mushroom → magic is a no-motif stretch when milling (M-12) already gives a clean 2nd pillar; don't double-dip on an everyday material

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack (upgrade tier / tank) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the Tank Upgrade (portable fluid buffer for expeditions) is assembled from a Create-pressed copper sheet + crafted parts in a sequenced assembly — the fluid-carrying upgrade earns its complexity
- from: travelersbackpack (basic leather packs) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: everyday | tone: ok | verdict: REJECT | reason: hard guardrail — gating a basic/everyday carry bag behind sequenced assembly is depth-inappropriate; the tank/upgrade tier is the right target, not the starter leather pack
- from: travelersbackpack (high-tier variants: dragon, netherite) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: endgame-material packs (netherite, dragon) built in a Mechanical Crafter from processed plates — their power matches the depth

## bettermineshafts   [anchors: survival (1)]
- LEAVE — no items, no methods, no loot; pure structure overhaul. Nothing to weave without inventing content that isn't there.

## bakery   [anchors: survival (1)]
- from: bakery cakes/tarts/pies (finished luxury foods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a finished strawberry cake or apple tart is the canonical luxury sell-good — high-effort multi-step bake output fetches a premium coin price; the bakery becomes the pack's pastry-export industry
- from: wheat | via: create:milling → flour (for bakery chain) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create mill replaces the crafting_bowl for flour — the bake chain's upstream step runs through the tech spine; players grind wheat in bulk for the bakery
- from: bakery:blank_cake | via: bakery:blank_cake_interaction | to: — | motif: — | power: everyday | tone: ok | verdict: REJECT | reason: blank_cake_interaction is internal deco flavor (right-click to decorate); it is not a connective method to another pillar — no weave target here

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot | via: loot-table edit (add sellable coin-adjacent item) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: formationsnether registers no items of its own; any weave is a loot-table edit on content that belongs to other mods — ownership unclear and forced. The weave doesn't "belong" to this mod.
- LEAVE — no items, no registered methods; a loot-table seam would be a Nether-exploration loot edit, not a weave on formationsnether itself. Any Nether loot economy hook belongs to the items placed in tables, not to the structure-scatter mod.

## betterendisland   [anchors: survival (1)]
- LEAVE — no items, no methods, no loot; purely cosmetic/structural End overhaul. Nothing to weave.

## formations   [anchors: survival (1)]
- LEAVE — no items, no processing methods, no loot. Pure overworld scatter-structure worldgen with a single authoring tool item. Forcing a recipe or economy edge would invent a connection that isn't there.

## tide   [anchors: survival (1)]
- from: tide rare/biome-locked fish (e.g. abyss_angler, tide:void catches) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare biome-specific fish is exactly the luxury sell-good that drives the player economy — collectors and traders pay for uncommon catches
- from: tide raw fish (c:foods/raw_fish) | via: farmersdelight:cutting / create:milling (fishmeal) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk fish → Create milling → fishmeal fertilizer or dried fish flake, routing tide's large fish output into the Create processing web as agrarian feedstock
- from: tide:abyss_angler / exotic void fish | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: exotic fish as a magic reagent is thematically suggestive but mob-drop-reagent (M-02) is best reserved for genuine boss/rare mob drops; a fish (even exotic) is a repeatable catch, not a scarce drop — it dilutes the motif. The economy+Create weaves are stronger and sufficient.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spider fang from the underground recluse transmutes in spirit fire into a venom essence — the dungeon mob's drop feeds the occult web, giving the recluse a reason to farm
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spider_fang already routed to magic via M-11 (spirit_fire); doubling to M-10 imbuement on the same material in the same pillar is redundant — pick one method, keep it clean
- from: undergroundworlds temple/pyramid brick blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: chiseled temple brick crushes back to gravel + XP nugget (lossy) — the dungeon's deco block set feeds the Create recycle web the way any modded stone does

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (the appliance tier) | via: create:mechanical_crafting or crafting requiring Create brass/copper sheet | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Oven and Fridge are complex appliance blocks — requiring Create-processed brass or copper sheets to build them anchors the kitchen upgrade to the tech spine; players need Create to unlock the full kitchen
- from: cookingforblockheads (food-recipe aggregation) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: cookingforblockheads doesn't output novel goods — it surfaces other mods' food recipes; the economy hook belongs to bakery/farmersdelight outputs, not to the kitchen appliance; dossier notes this itself

== CHUNK COMPLETE ==
