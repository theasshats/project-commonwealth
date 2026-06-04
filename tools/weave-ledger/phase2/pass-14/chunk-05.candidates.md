# Phase 2 candidates — chunk-05

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs:*_stone/*_brick/*_blackstone variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: torn-down stone railings and balconies crush back to gravel and an XP nugget — demolition has a Create byproduct, linking the deco palette to the Create spine
- from: mcwstairs:*_wood variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden deco crushing to planks is trivially lossless — no meaningful byproduct, no scarcity, not what M-04 was designed for (stone/brick is the canonical form); reject to avoid recipe noise

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no; pure client windowing option with no material or world presence.

## configuration   [anchors: support/library (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no; pure config-screen API framework with no player-facing content.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:dragon_breath_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: dragon breath distilled through arcane infusion becomes an exotic Ars reagent — the Encased Fan's ending catalyst has a natural magic downstream
- from: create_dragons_plus:dragon_breath_bucket | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: M-10 via Ars imbuement already covers the magic-pillar link for dragon breath; stacking an Occultism ritual on the same material is redundant and dilutes the scarcity of the catalyst — pick one pathway
- from: create_dragons_plus:blaze_upgrade_smithing_template | via: recipe (smithing) | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: the Blaze Upgrade template is already a Create-family item (smithing upgrade for Create Blazeburner-tier gear); it doesn't add a new pillar, it deepens an existing Create→Create connection — not a cross-pillar weave
- from: create_dragons_plus:*_dye_bucket (bulk dye fluids) | via: create:mixing | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: bulk dye fluids are industrial intermediates used in other recipes, not a finished good — tagging them as coin-generating luxury goods is a tone mismatch; M-09 requires a high-effort consumable, not a processing fluid

## attributefix   [anchors: support/fix (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no; purely raises vanilla attribute caps; no material, no method, no content surface.

## blockui   [anchors: support/library (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no; pure XML UI framework consumed by MineColonies; no player-facing content to weave.

## detect-afk-1.2.2   [anchors: support/server-admin (1)]
- LEAVE — genuine zero-surface behavioral mod: 0 blocks, 0 items, loot=no; server-side AFK timer with no material presence; nothing to route through any method.

## createfood   [anchors: survival, Create (2)]
OK — existing connections sound: survival (food/nutrition) + Create (multi-stage machine sequences through create:milling/mixing/pressing/deploying + farmersdelight) are a coherent and well-grounded 2-pillar pair; no REWORK needed on those.

- from: createfood:bacon_pizza / apple_cheesecake / apple_ice_cream (high-effort finished dishes) | via: numismatics sell (trade/price config) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create bakery specialization mints coin from its multi-stage output — the food processing chain pays for itself in the player-run economy
- from: createfood:apple_milkshake / apple_juice (drinks) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: craft drinks are a step above raw food — bottled beverages as a lighter coin tier below the full-dish luxury goods
- from: createfood:apple_pie_filling_block / jam_block (sweet fillings/jams) | via: vinery:apple_fermenting or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fruit fillings are one processing step from fermenting into cider or jam liqueur — deepens the food chain and feeds the drinks tier
- from: createfood:bacon_pizza / pastry range | via: create_dragons_plus:ending (Bulk Ending fan station) | to: Create | motif: M-12 | power: mid | tone: clash | verdict: REJECT | reason: using an End-dragon-breath fan station to process pizza is tonally absurd — the magical/industrial ending catalyst should not be a cooking method; theme clash overrides the method-availability

## polymorph   [anchors: support/compat (1)]
- LEAVE — genuine zero-surface QoL mod: 0 blocks, 0 items, loot=no; operates on other mods' recipe outputs as a conflict resolver; no material to weave.

## stylecolonies   [anchors: support/decoration — MineColonies blueprints (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no; ships only MineColonies blueprint folder definitions; the block costs it incurs at colony-build time belong to MineColonies' own build system, not a weaveable recipe or loot surface; nothing to route through a method.

== CHUNK COMPLETE ==
