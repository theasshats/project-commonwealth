# Phase 2 candidates — chunk-36

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — genuine zero-content mod: no items, no blocks, no loot tables, no recipe surface. Pure client-side color-blending engine replacement. No material to route through any method; no pillar connection is coherent.

## aileron   [anchors: aeronautics (1)]
- from: vanilla elytra (enchant surface) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's Enchanting Apparatus applies Aileron's proprietary flight enchants (e.g. Boost, Glide, Stability) — magic is the route to mastering personal flight, not just crafting
- from: vanilla elytra (loot injection) | via: loot-seed | to: aeronautics (depth) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: aileron has loot=yes but injects into vanilla loot; seeding something INTO its tables would require a foreign item drop on Elytra loot, which has no coherent recipient — no second pillar gained, no motif fits
- REWORK: aeronautics anchor is thin (behavior-only, zero item surface). The Enchanting Apparatus route above is the only coherent second edge; if Aileron's enchantments are not datapack-exposed to the apparatus, the ACCEPT collapses — flag for Phase 3 verification before authoring.

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-content mod: no items, no blocks, no loot tables, no recipe surface. Pure client windowing option added to Video Settings. No material, no world effect; no coherent pillar weave exists.

## create_central_kitchen   [anchors: Create, survival (2)]
- from: finished automated dish (feast output) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a mechanized kitchen cranking out pies and feasts is a natural merchant good — automate the cook, sell the surplus
- REWORK: existing Create + survival anchors are sound — the mod IS the Create↔FD cooking bridge, so those connections are load-bearing and correct. The M-09 economy edge above is the logical 3rd; the dossier already flagged it as optional but left it for an economy pass. Promote to explicit ACCEPT now.
- from: blaze_stove (Blaze as ingredient/booster) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: the Blaze Stove consumes a live Blaze mob for a cooking boost — routing this through a magic ritual feels contrived (a Blaze is already mundane-industrial here, not occult). Tone clash between kitchen automation and summoning ritual.

## attributefix   [anchors: support/library (1)]
- LEAVE — genuine zero-content mod: no items, no blocks, no loot tables. Pure attribute-cap patch library enabling high-power gear to function correctly. No material surface; no coherent weave.

## pantographsandwires   [anchors: Create, aeronautics (2)]
- from: pantographsandwires:coal_coke | via: tfmg:coking / tfmg:industrial_blasting | to: Create (TFMG industrial tier) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coke is an industrial intermediate — the overhead-line supply chain feeds TFMG's blast furnace as a processing input, threading rail infrastructure into the industrial tech ladder
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create_new_age:energising | to: Create (electric tier) | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite is a conductor — routing it through Create New Age's energising station charges/upgrades an electrical component, making the rail electrification material a node in the FE power web
- from: pantographsandwires:coal_coke | via: tfmg:coking | to: aeronautics (fuel tier) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is already M-13 reserved for TFMG diesel/fuel chain intermediates (the reserved reagent table owns tfmg fuels for M-13); routing coke into M-13 directly duplicates what TFMG's coking column already does — not a new edge, just TFMG's own recipe chain. Keep the M-12 industrial-blasting link above instead.
- REWORK: existing Create + aeronautics anchors are well-grounded (6 inbound Create recipe types, sequenced_assembly for the catenary hardware, serves rail transport). No rework needed on those. The M-12/M-17 additions above give it a 3rd pillar (industrial-tech depth via TFMG/electric).

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite / dyed tire | via: create:toolbox_dyeing or create:mixing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing the dye step through Create's mixing basin (or the toolbox-dyeing mechanic) means coloring your airship hull goes through the Create automation chain — even cosmetic work runs through the spine
- from: dyed levitite / dyed tire | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: colored levitite is pure cosmetic — making it a sellable trade good feels arbitrary (who buys colored airship blocks as a luxury?). No survival-effort backs the price; would be a coin-printer, not a luxury good.
- REWORK: current aeronautics-only anchor is the minimum floor. The M-04 Create-mixing dye route above is a light single-step weave that earns a Create anchor without over-engineering cosmetics. Dossier noted "route dye via Create mixing for color, but that's gilding" — I disagree: it's a light natural step and the briefing specifically allows a crafting-table recipe where coherent; mixing dye is exactly one step, everyday tier, and ties the color shop to the spine.

## createfood   [anchors: survival, Create (2)]
- from: finished dishes (pizza / cheesecake / ice cream) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-automated bakery producing bulk pastries and feasts is the natural merchant good — baker/cook specialization is the economic counterpart to the engineering specialization
- from: createfood:apple_jam / createfood:apple_juice (seasonal fruit outputs) | via: season-gated crop input | to: survival (Serene Seasons) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: jam and juice made from autumn-only apples means the seasonal harvest actually matters — stock up or go without in winter, turning the food chain into a seasonal economy
- from: createfood plated feast blocks | via: minecolonies cook/tavern building | to: Create/survival depth | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: MineColonies feeding might consume createfood dishes, but this is a config/behavior link with no clear motif match — M-12 doesn't cover colony consumption. No-motif → reject-for-review.
- REWORK: existing survival + Create anchors are load-bearing (it authors recipes onto Create + FD methods; it IS the food-production chain). Both connections are sound. M-09 and M-16 above add economy and seasonal survival as 3rd/4th pillars cleanly.

== CHUNK COMPLETE ==
