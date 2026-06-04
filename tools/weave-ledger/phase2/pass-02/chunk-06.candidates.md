# Phase 2 candidates — chunk-06

## sereneseasons   [anchors: survival (1)]

- from: season_sensor redstone output | via: Create automation (gearshifts/contraptions read redstone) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: automated farms that switch crop-output or open greenhouse shutters when the sensor ticks seasons — the machine knows winter is coming.
- from: out-of-season crops (scarce in-season produce) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: seasonal scarcity is an ambient mechanic, not a crafted good — calling a crop "luxury" because it's out of season is a stretch; the sell value would need to be manually curated every season for every crop, which is unmanageable overhead. Better left as an organic player-driven trade, not a recipe-keyed weave. Dossier rates it WEAK.

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Otherside soul materials transmuted through spirit fire into occult essences — the Warden's realm feeds the dark arts directly.
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement (or occultism:ritual) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the rarest Otherside drop — the Warden's own heart — is the capstone reagent for an endgame arcane infusion or ritual; depth matches its scarcity.
- from: deeperdarker:gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco block surplus crushes back to gravel + XP nugget; the standard Create recycle loop applied to Otherside stonework. (Already partially wired per dossier — confirm and formalise.)
- from: deeperdarker:soul_dust / Otherside mob drops | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: soul materials are already strongly claimed by M-11 (spirit_fire → magic); routing them to economy as well spreads their identity thin. Keep them magic-primary; if coin is wanted, M-09 sits downstream of the magic pillar, not as a direct Otherside→economy edge. Dossier rates it WEAK / secondary.

## dynamictreesplus   [anchors: survival/worldgen (1)]

- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit milled in a Create Millstone yields a cactus-based dye or food intermediate — desert biome foraging routes straight into the processing spine.
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk mushroom caps from dynamic mega-mushroom felling milled into mushroom powder (dye intermediary or soup stock) — the organic yield becomes a Create input.
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: single-step sell-good with no processing depth behind it — too weak on its own; the Create milling weave above already gives it a second pillar. Adding a bare sell on top is redundant and inflates pillar count without substance.

## createmetalwork   [anchors: Create (1)]

- from: createmetalwork crushed rare metals (c:crushed_raw_materials/palladium, platinum, etc.) | via: create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the ore-doubling pipeline's refined output — processed ingots from scarce regional veins — mint directly into coin, making the Create foundry the economic backbone. Precisely the M-08 design case.
- from: magic-mod metal ores (occultism raw ores, galosphere metals) | via: create:crushing (createmetalwork crush tags) | to: magic (Create doubling feeds magic crafting) | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the same crush→melt pipeline that doubles iron also doubles the occult/arcane metal harvest — one Create investment pays dividends into the magic web too.
- from: createmetalwork:molten_<metal> fluids | via: tfmg:casting | to: Create (depth/integration) | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: routing molten fluids into TFMG casting is a Create-internal integration, not a second pillar — both are Create-spine mods. No motif covers Create→Create cross-mod depth. no-motif → REJECT-for-review.

## trailandtales_delight   [anchors: survival (1)]

- from: trailandtales_delight:cheese_wheel / cheese_slice | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels are multi-step luxury dairy goods (milk → curd → wheel → slice) — a natural high-margin sell item for a colony provisioner or travelling merchant.
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient coffee and floral teas are archaeological curiosities with high cultural cachet — exactly the artisan drink goods that command a premium on a player market.
- from: trailandtales_delight:lantern_fruit (sniffer-find crop) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a rare sniffer-recovered crop milled into a fruit pulp or dye intermediate — the procedural discovery loop of the sniffer pays out into the Create processing chain.
- from: trailandtales_delight crops / produce | via: sereneseasons fertility window | to: survival (seasonal) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is a seasonal-reagent motif (crop/material obtainable only in a given season feeds a machine/ritual); Serene Seasons seasonal fertility on these crops just constrains availability, it doesn't create a method-routing — there is no "seasonal reagent feeding a machine" here, just crop timing. Leave the Serene Seasons tie at the config layer. no-motif for this specific edge → REJECT.

## underground_village   [anchors: survival/exploration (1)]

- from: Stoneholm villager trades (vanilla mechanics) | via: numismatics — seating village-specific trades priced in Numismatics coin tiers | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no. The candidate is coherent (underground settlement as economy node) but M-21's provisional status requires surfacing for review only, not accepting. Tagging: (provisional motif — surface for review, do not author).
- LEAVE — underground_village owns no items, no recipe types, and no material outputs; the only credible 2nd-pillar move is villager-trade seating (M-21, provisional leans-no). No coherent method-pull weave exists here beyond that escalation.

## oceansdelight   [anchors: survival (1)]

- from: oceansdelight:elder_guardian_roll / fugu_slice / cooked_stuffed_squid | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean cuisine flagships — fugu risk-dish and elder guardian rolls — are exactly the high-effort luxury goods a coast specialist trades to landlocked players who can't run ocean dungeons.
- from: oceansdelight:cut_tentacles / guardian drops | via: farmersdelight:cutting → create:milling (fishmeal) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: there is no evidence of a "fishmeal" item in the pack that Create would consume, so the chain ends at FD cutting with no Create pull. Speculative intermediary without a confirmed consumer — REJECT until a fishmeal/fertiliser sink is established.

## createoreexcavation   [anchors: Create (1)]

- from: vein table outputs (raw ores of scarce regional metals) | via: createoreexcavation:vein + create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: vein-drilled scarce ore feeds the Create crush-and-mint pipeline — infinite but slow extraction rate makes the Drilling Machine the pack's economic pacemaker; scarcity by throughput rather than scarcity by absence.
- from: createoreexcavation:drilling_machine (the machine itself as a gated unlock) | via: minecolonies progression (colony unlock) | to: Create (depth) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is "boss drop gates a complex Create recipe," but the Drilling Machine isn't unlocked by a boss drop — it's made from Create parts. The colony angle is thematic, not method-grounded. No boss-drop gate here, so M-15 doesn't apply. no fitting motif → REJECT.

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / oat (grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat through a Create Millstone produce flour that feeds the bread chain — the farmstead's grain harvest becomes a Create processing staple. Exactly the "raw crop → milled intermediate" M-12 case the dossier flags as STRONG.
- from: farm_and_charm:butter / eggs / bacon surplus | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: animal-husbandry surplus — butter and eggs from a well-fed flock — become natural colony provisioning goods or market sell items; the feed-for-more-drops loop produces tradeable volume.
- from: farm_and_charm:barley (grain) | via: sereneseasons fertility | to: survival (seasonal) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: same issue as trailandtales — seasonal fertility on farm_and_charm crops is a config-layer concern; it restricts when you grow barley but doesn't route it through a machine/ritual as M-16 requires. M-16 needs the seasonal item to be a *machine/ritual input*, not merely a seasonally-available ingredient. REJECT — config-tier, not a method-routing weave.

## tide   [anchors: survival (1)]

- from: tide rare/biome-locked fish (e.g. tide:abyss_angler, exotic species) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare biome-locked fish are natural collectible sell goods — a fishing specialist can supply catches that landlocked players can never get; the fishing journal makes rarity legible.
- from: tide raw fish (c:foods/raw_fish bulk output) | via: farmersdelight:cutting + oceansdelight cooking | to: survival (Create processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the large volume of raw fish from Tide's expanded catch tables already feeds FD cutting (already wired); extending one step to create:milling of fish scraps into fish meal rounds the processing chain and ties Tide into the Create spine.
- from: tide exotic fish (abyss_angler / void-tier catches) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: abyssal fish as arcane reagents is thematically plausible but extremely weak — they aren't mob drops in the traditional sense and the connection requires inventing lore ("fish from the void channel dark energy") that the mods don't share. Red team: a player would find this arbitrary. Dossier rates it WEAK. REJECT — forced thematic reach.

== CHUNK COMPLETE ==

