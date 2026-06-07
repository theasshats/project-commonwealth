# Phase 2 candidates — chunk-05

## cristellib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; provides structure-config framework only (no items, no blocks, no loot tables, no recipe types). No connective surface to route through any method.

## gamediscs   [anchors: survival/flavor (1)]
- from: gamediscs:processor (crafted component) | via: create:milling or create:pressing | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: theme-fit fails hard — routing an arcade "processor" through an industrial ore mill is a category clash; the mod's entire tone is whimsical retro novelty, not tech-ingredient production. The processor name is coincidental flavor, not a real circuit part in the pack's tech tree.
- from: gamediscs:game_disc_* (mob-kill drops) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the drop gimmick (bee/slime/frog/rabbit killed by skeleton = 100% drop) is already the mod's internal loop and it feeds only itself — the disc output is a cosmetic playable, not a material that feeds any other system. M-34 requires a drop traded to non-combat players; there's nothing here worth trading. No economy value in a playable mini-game object.
- LEAVE — pure novelty toy; its outputs (game discs, gaming console) have no material role in any system. No weave candidate survives red-team. A forced edge would be a defect.

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — zero-content tooltip-display mod; reads existing tool attributes, ships nothing of its own (0 items, 0 blocks, 0 recipe types, no loot). No connective surface.

## dndesires   [anchors: create (1)]
- from: dndesires:rubber (raw rubber → processed rubber via hydraulic_press) | via: dndesires:hydraulic_compacting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber gaskets and seals are exactly what an airship's hull joints need — a player building a ship has to come to the Create-expansion specialist for this processed industrial material.
- from: dndesires:rubber | via: dndesires:hydraulic_compacting → create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber-insulated mechanical couplings or damper mounts for Aeronautics drive components — the drivetrain's vibration-reduction layer; rubber as an industrial intermediate feeding the control-surface supply chain.
- from: dndesires milkshake foods (chocolate_milkshake, glowberry_milkshake etc.) | via: dndesires's fan/processing methods as a delivery medium | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshakes are mid-tier processed foods from base ingredients (milk, cocoa, glowberries) via a Create-style fan, naturally feeding the diet/nutrition pressure loop; a bakery or food specialist produces them and sells to players who need the nutritional variety.
- from: dndesires:cardboard_package_* | via: create:cutting (cardboard source) | to: economy | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: cardboard packaging is a logistics consumable — bulk goods traded at scale need physical packaging, making the packaging supply itself a recurring demand that the aeronautics/logistics arm consumes.
- from: foreign crops/ores (pack items) | via: dndesires:sanding or dndesires:freezing (fan-catalyst methods) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the fan-catalyst methods are a universal processing sink — sanding raw ore fragments into fine dust, freezing fish/meat for preservation before cooking; these routes are the Create spine's own expansion and should absorb materials from the pack's survival/food layer.
- from: dndesires:asphalt blocks | via: recipe | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: asphalt as a structural airframe material is thematically wrong — asphalt is road-paving, heavy, non-structural; not a coherent airframe ingredient. M-23 requires a load-bearing metal/structural material. Tone: clash.
- REWORK: existing anchors — the dossier lists only Create (1). The rubber + milkshake + cardboard weaves above open solid paths to survival and aeronautics; the dossier's 2nd-anchor note flags them as candidates (survival MED, aeronautics WEAK-MED) — agreed on survival/aeronautics elevation but rubber-to-aeronautics is stronger than the dossier rates it. No existing connection to flag REWORK (none yet authored); this is an extension.

## cmpackagecouriers   [anchors: create, aeronautics (2)]
- OK — connections sound. The mod already sits at Create + aeronautics/logistics, which is exactly right for an autonomous cardboard-plane package courier. The dossier correctly notes a light economy adjacency (remote trade fulfilment) but leaves it un-elevated — agreeing with that call, since the economy link is implicit/ambient (packages carry trade goods), not a gated demand edge. No new weave needed; no existing connection to flag.

## clumps   [anchors: support/performance (1)]
- LEAVE — genuine zero-content server performance mod; merges XP orbs only (no items, blocks, recipe types, loot). No connective surface.

## bakery   [anchors: survival (1)]
- from: bakery baked goods (cakes, tarts, cupcakes, jams) | via: create:milling (wheat→flour as Create-sourced input) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds wheat to flour, feeding the bakery chain — the Create spine sources the baker's primary ingredient, tying artisan food production to the tech line without overcomplicating the bake step.
- from: bakery high-tier confections (strawberry_cake, chocolate_gateau, glowberry_tart) | via: farm_and_charm:pot_cooking → bakery station chain | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: luxury baked goods are a genuine consumption sink — players eat them against diet/nutrition pressure (the diet system demands variety); high-saturation foods fed into a colony's supply chain or traded between food specialists and non-farming players keeps the demand cycle turning.
- from: bakery:apple_jam / bakery:chocolate_jam (fermentable/preserved goods) | via: vinery:apple_fermenting or extradelight:drying_rack | to: create | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: jams are a natural maturation candidate — a jam that improves over time (aging in a rack or fermentation vessel) gives bakery goods a time-axis value, making a jam-aging specialist a real role.
- from: bakery:bread / baguette (grain-group food) | via: config tie | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: bread is a year-round staple, not a seasonal food — there is no coherent seasonal gating of wheat-based products in the pack's survival model (Serene Seasons gates crops, not finished baked goods, and bread wheat is available spring/summer/autumn). M-16 requires a season-gated input; routing bread through a seasonal gate would be arbitrary.
- from: bakery goods (dessert tier) | via: MineColonies baker's hut (colony route) | to: create | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony baker can supply bread and basic cakes cheaper and faster than crafting by hand — the MineColonies alternate route naturally produces the bakery's everyday tier, leaving the high-tier cakes/tarts to the player-specialist baker. This is the classic M-28 shape: colony produces the basic, the player-specialist produces the exclusive.
- REWORK: dossier proposes "economy via numismatics sell" as M-09. M-09 is retired — NPC sell links are not weaves. The actual economy tie (M-26 consumption, M-28 colony route) supersedes that framing. The dossier's magic link (Ars Sourcelink) is WEAK and correctly flagged as such — no weave here since better owners (farm mods) hold that surface. Overall the bakery's 2nd anchor is clearly survival→economy via diet pressure, not a sell link.

## balm   [anchors: support/library (1)]
- LEAVE — genuine zero-content abstraction library; provides loader-abstraction API only (no items, no blocks, no recipe types, no loot tables, no meaningful gameplay content). Only ships iron/gold-nugget c:tags as scaffolding. No connective surface.

## dungeons_arise_seven_seas   [anchors: survival/exploration (1)]
- from: dungeons_arise_seven_seas ship/galleon loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a derelict galleon's treasure chest is exactly where a player-minted coin cache belongs — seeding Numismatics currency blanks (the raw metal discs, not already-minted coins) into naval loot tables makes the ocean a source of minting material, tying exploration danger to the currency supply without being an NPC coin faucet.
- from: dungeons_arise_seven_seas ship/galleon loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pirate/naval structures are a natural home for exotic mob-drop reagents (preserved kraken ink, sea-glass, dried nautilus essence) — seeding one or two magic reagents into ship loot makes these structures worth clearing for magic specialists, not just for general loot.
- from: dungeons_arise_seven_seas floating fortress / sunken ruins loot | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the naval structures are a danger zone (pressure face); seeding combat-supply drops (quality food, repair materials, rare armour) into fortress loot tables makes the combat specialist's loot useful for trade — the fighter clears the galleon for reagents and currency blanks that the non-fighter needs.
- from: dungeons_arise_seven_seas naval structures | via: loot-seed | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: seeding airframe structural parts into ocean dungeons doesn't make narrative sense — why would a sunken galleon contain Aeronautics hull components? Thematic clash; the structural-material supply line is a Create/tech production chain, not ocean-dungeon loot. REJECT on tone.
- REWORK: dossier assesses "none — leave" for the 2nd anchor, citing the structures as static (no functional vessels). This is too conservative for a loot=yes mod — the briefing explicitly says not to LEAVE a loot-bearing structure mod without trying loot-seed candidates first. The three loot-seed ACCEPTs above (M-08 currency blanks, M-02 reagents, M-34 combat-supply) are coherent and advance the loop; the mod gains a real second anchor in economy/magic via these seeds.

## blockui   [anchors: support/library (1)]
- LEAVE — genuine zero-content UI library; XML-based GUI framework, dependency of MineColonies only. No items, no blocks, no recipe types, no loot. No connective surface.

## nochatreports   [anchors: support/privacy-QoL (1)]
- LEAVE — zero-content networking/privacy mod; strips Mojang chat-signing protocol. No items, blocks, recipe types, loot. No connective surface.

## inventoryprofilesnext   [anchors: support/client-QoL (1)]
- LEAVE — zero-content client-side inventory manager; pure UI behavior (sort, lock slots, auto-refill). No items, blocks, recipe types, loot. No connective surface. Note: the pack ships a KubeJS texture override for its overlay sprite (CLAUDE.md — the empty-slot arrow fix); this is a cosmetic config, not a weave.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — zero-content behavior mod; player-to-player feeding interaction only. No items, blocks, recipe types, loot, or material surface. No connective surface.

## modelfix   [anchors: support/performance-bugfix (1)]
- LEAVE — zero-content client rendering patch; patches baked-model render bugs, ships nothing. No connective surface.

## pantographsandwires   [anchors: create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking or create:compacting | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: coal coke is a byproduct of steel-making that the catenary infrastructure also produces — routing it as a shared intermediate input into TFMG's industrial blast furnace (or Create's compacting) creates an industrial-circularity edge: the rail-infrastructure player produces coke as a byproduct that the steel/fuel specialist buys.
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:pressing or tfmg:polarizing | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite is a conductor material — a cross-route dependency where a Create-electrical recipe (createaddition or create_new_age) requires graphite electrodes sourced from the pantographs-and-wires specialist, making the rail-infrastructure player a supplier for the electric tech tree. Nobody produces graphite cheaply elsewhere.
- from: pantographsandwires overhead-line infrastructure (masts, brackets, wires) | via: dndesires:seething or create:haunting | to: magic | motif: M-19 | power: everyday | tone: clash | verdict: REJECT | reason: running copper catenary wire through a soul-fire haunt to produce a "spirit-charged conductor" is thematically forced — electrical rail infrastructure has no coherent occult reading in the pack's magic system. Tone: clash.
- REWORK: existing anchors — the dossier correctly marks Create + aeronautics (2) and says no extra edge needed. The coal_coke M-32 and graphite M-29 candidates above are genuinely new cross-route ties (TFMG/electric side) that the dossier didn't surface. Both survive red-team and are worth proposing even though the mod is already at 2. No existing authored connections to flag as weak.
- OK — the two existing anchors (Create + aeronautics) are sound; the new candidates are additions, not replacements.

## cloth_config   [anchors: support/library (1)]
- LEAVE — genuine zero-content config-screen library; renders settings GUIs for dependent mods only. No items, blocks, recipe types, loot. No connective surface.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — the pack's own scripting/weaving engine. It is what authors weaves, not a weave target. No items, blocks, recipe types (beyond a generated-bucket placeholder), loot. No connective surface; role is sanctioned modpack tooling.

## bundle_recipe   [anchors: support/QoL (1)]
- from: minecraft:bundle (the enabled item) | via: create:milling or create:pressing (leather processing as Create-alternative route) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod only re-adds a vanilla crafting recipe for bundles — the bundle itself is a vanilla item with a leather-and-string recipe. Routing the bundle recipe through Create processing would override the intentional vanilla-parity fix this mod provides, imposing Create gating on a basic QoL container. Depth must scale with power; a bundle is everyday storage, not a high-tier item. REJECT: misapplied cost model.
- LEAVE — QoL recipe-restoration mod; its only action is enabling a vanilla bundle recipe. The bundle is not a pack-exclusive item and adding a Create intermediate recipe would be an unwarranted gate on basic storage. Support role; no weave.

## incontrol   [anchors: support/server-admin (1)]
- LEAVE — zero-content server-admin config utility; rule-based JSON spawn/loot control. No items, blocks, recipe types, loot of its own. Acts as a design-side lever that enables the scarcity foundation but has no material to weave. The dossier's assessment is correct: enabling infrastructure, not a weave node.

## chat_heads   [anchors: support/client-QoL (1)]
- LEAVE — zero-content client-side chat-UI mod; renders player faces beside chat messages. No items, blocks, recipe types, loot. No connective surface.

== CHUNK COMPLETE ==
