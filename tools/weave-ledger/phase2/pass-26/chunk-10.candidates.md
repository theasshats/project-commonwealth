# Phase 2 candidates — chunk-10

## accessories   [anchors: support/library (1)]
- LEAVE — zero items/blocks/recipes; pure slot-API. Wearable weaves live in the mods that register accessories into it, not here.

## cmparallelpipes   [anchors: Create (1)]
- LEAVE — single utility tool (pipe wrench) that acts on Create pipes. No foreign material surface; forces a second pillar edge onto a wrench. Its anchor is valid: it deepens Create's fluid-logistics layer.

## dndesires   [anchors: Create (1)]
- from: dndesires fan-processing sails (freezing/seething/sanding/dragon_breathing) | via: dndesires:freezing / dndesires:seething / dndesires:sanding | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: crops and organic drops get a processing step (freeze a fruit into a preserved ingredient, sear a hide in the seething fan) — the survival food/material chain gains a Create-powered prep stage
- from: dndesires:rubber (sap → rubber via hydraulic_compacting) | via: dndesires:hydraulic_compacting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber seals and gaskets are a logical drivetrain/control-surface component for airships — the hydraulic press is the tech gate, not free crafting
- from: dndesires fan-processing sails as machine input | via: dndesires:dragon_breathing | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: routing a foreign crystal (allurite shard / source gem) through a dragon-breathing sail could attune it — fire-breath as arcane infusion is tonally coherent with Ars/occultism's infusion-style methods
- from: dndesires:rubber / milkshake foods | via: economy sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
REWORK: existing anchors (Create-only) — OK at one anchor; the above accepted links add survival and aeronautics (and optionally magic), bringing it to ≥2. No current connections are weak — they're just sparse.

## galosphere   [anchors: survival (1), magic via M-07 (established)]
- from: galosphere:silver_ingot (=palladium ore) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore crushed in a Create millstone/crusher gives a second ore yield — a tangible reward for the cave-dive that ties the regional scarcity metal into the Create processing spine
- from: galosphere:allurite_shard / lumiere_shard | via: galosphere:preserved_transform_recipe | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the shards are reserved M-07 attunement catalysts — re-routing them through a deco-crushing recipe risks conflicting with that reservation; don't double-spend reagent-owned items
- from: galosphere deco stone blocks (allurite bricks, amethyst bricks, opal bricks, pink salt) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: cave-deco stone blocks crush back lossy (raw + xp nugget) — standard M-04; players who mine the cave palettes can reclaim some material via the Create spine
REWORK: existing connections — M-07 (attunement catalysts) is well-established. New M-03 palladium crushing is the natural tech second anchor. OK on the magic side; Create is the needed addition.

## chefsdelight   [anchors: survival, economy (2)]
- from: Chef/Cook villager trades | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: KubeJS patches Cook/Chef trades to accept/pay in numismatics coins instead of emeralds — the food-trade economy joins the pack's real currency loop
- from: Cook/Chef meal output | via: farmersdelight:cooking / numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the M-21 provisional route above is the structurally distinctive one
REWORK: existing connections (survival + economy) — OK, but economy connection is currently only villager-trade-with-emeralds; M-21 coin-trade is the needed deepening. Connections are sound in structure, thin on coin integration.

## curios   [anchors: support/library (1)]
- LEAVE — zero items/blocks; slot-framework API. Wearable weaves belong to mods that register curio items.

## startuptime   [anchors: support/perf (1)]
- LEAVE — boot-time logger; zero content surface. No weave possible.

## jamlib   [anchors: library/API (1)]
- LEAVE — dev library (config framework + platform abstraction); zero player-facing content.

## copycats   [anchors: Create (1)]
- from: copycats blank shapes (copycat_slab / copycat_panel etc.) | via: create:cutting | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: cutting a zinc plate on a Create saw produces the blank copycat shapes — a light deploy-application step that ties the decoration tier explicitly into the Create spine and makes zinc slightly more interesting mid-game
- from: copycats blocks (stone-skinned variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks are aesthetic skins with no raw-material identity — crushing "a stone copycat block" is confusing (what should drop: the skin block or zinc?); M-04 needs clear material identity, which skin-blocks lack
REWORK: existing anchors (Create decoration) — sound; the M-20 cutting link is a light, coherent 2nd-anchor deepening.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot | via: create:pressing → sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient_metal sheets (pressed from boss ingots) gate a sequenced-assembly chain for a high-tier Create machine — the CLAUDE.md-canonical "complex Create tech unlocks via boss drops" path
- from: cataclysm:witherite_ingot / cursium_shard | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: witherite/cursium burned in spirit-fire yields a dark essence — a mob-drop reagent feeding the occultism ritual spine; the dark-fantasy boss lore makes this tonally obvious
- from: cataclysm:ancient_metal_ingot (boss material) | via: create:crushing | to: Create | motif: M-03 | power: endgame | tone: ok | verdict: REJECT | reason: crushing boss-tier ingots for an ore-doubling bonus is mis-scaled — M-03 is for ores/raw materials, not endgame boss drops; M-15 (sequenced-assembly gate) is the right depth lever for this material
- from: cataclysm boss drops (trophy/amethyst_crab_shell) | via: loot-seed | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: cataclysm dungeon loot tables seeded with a bounty-eligible drop (e.g. shell or trophy) closes the raid-combat → economy loop; boss kills pay coin via the bounty board
REWORK: existing connections (survival-only, 1 anchor) — REWORK needed. Cataclysm has the richest boss-drop material surface in the pack and sits at 1 anchor; M-15 (boss-key gating Create tech) and M-11 (spirit-fire reagent) are the two canonical second anchors; M-14 bounty-loot-seed adds a third light tie. Not weak — simply not yet woven.

## smartbrainlib   [anchors: support/library (1)]
- LEAVE — AI-behavior framework; no player-facing content or routable materials.

## moreculling   [anchors: support/perf (1)]
- LEAVE — render-culling performance mod; no content.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (multiblock climate machine) | via: create:mechanical_crafting / item_application | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth's smokestack assembly is gated on Create brass/casing via a mechanical-crafting or item-application recipe — the climate-control tech earns a Create prerequisite, making cold-climate survival pressure drive production
- from: cold_sweat sewing-table insulation (goat_fur / chameleon_molt / hoglin_hide → insulated armor) | via: create:deploying | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: deploying a Create-processed fiber (spun wool / pressed leather) onto base armor via the deployer applies an insulation tier — the Create spine feeds the survival protection chain
- from: cold_sweat:filled_waterskin (hot/cold water vessel) | via: create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already an inbound edge per the dossier (existing weave) — not a new proposal; redundant
- from: cold_sweat insulated armor (chameleon/fur gear) | via: economy sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
REWORK: existing connections (survival-only, 1 anchor) — REWORK needed. The Hearth and insulation sewing-table are mid-tier tech; M-05 gating and M-20 deploying-apply are coherent Create links. The existing create:filling inbound is already present; building on it further (M-05/M-20) solidifies a real second anchor.

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows stone parapet / arrow-slit variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone parapets and arrow-slits crush back to raw stone / gravel + xp nugget (lossy) — standard deco-recycling weave; any mod with stone deco deserves this pass
- from: mcwwindows mosaic glass panes | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushing is already covered by vanilla glass panes via standard M-04 passes; no distinctive surface here — adding mosaic glass to the same recipe adds no new loop connection
REWORK: existing connections (decoration-only) — a M-04 crush-recycle for stone parapets is a lightweight but coherent 2nd-anchor tie; it's the most the mod supports. Decoration mods are sanctioned 1-anchor; this is the natural upgrade if the deco-crushing pass is run pack-wide.

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — numerical ping display; client-only UI with no content.

## afk-sleep-1.3.2   [anchors: support/server-QoL (1)]
- LEAVE — server sleep-quorum behavior; no items, no content surface.

## alternate_current   [anchors: support/perf (1)]
- LEAVE — redstone propagation performance patch; no content.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted furniture (chairs/tables/shelves, wood-family variants) | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create saw cuts pre-dimensioned plank lumber into furniture blanks — the homestead decoration tier earns a tech dependency and a player's sawmill feels productive
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking / extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: berry jam is a processed food intermediate (berry → jam jar via Farmer's Delight or ExtraDelight vat) — the cozy-kitchen product feeds the food/survival loop and gains a processing step appropriate to its tier
- from: handcrafted furniture as colonial interior supply | via: minecolonies supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable / supply-to-colony without a distinctive structural loop — economy de-emphasis; furniture isn't scarcity-gated
REWORK: existing connections (decoration palette only, 1 anchor) — M-12 processing (Create cutting for furniture, FD cooking for jam) gives a real second anchor; coherent and low-complexity as befits everyday deco.

## biolith   [anchors: support/worldgen-API (1)]
- LEAVE — worldgen biome-placement library; zero items/blocks/content.

## irons_lib   [anchors: library/API (1)]
- LEAVE — dependency library for Iron's Spellbooks; transmog table/statue are cosmetic blocks with no routable material.

== CHUNK COMPLETE ==
