# Phase 2 candidates — chunk-11

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — pure config-screen API library; 0 items, 0 methods, no content surface to weave.

## alcohol_industry   [anchors: Create, survival (2)]
- REWORK: dossier 2nd-anchor candidate cites M-09 luxury→coin — M-09 is RETIRED; bare sell link rejected.
- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits) | via: create:sequenced_assembly (fill + cap + label multi-step) | to: economy | motif: M-35 (maturation/aging — fermented spirits need aging in a barrel step before bottling) | power: mid | tone: ok | verdict: ACCEPT | hook: a player running the distillery ages casks in barrels before final bottling, making aged spirits a scarcer, more valuable trade good than fresh alcohol base
- from: alcohol_industry:alcohol_base | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 (processing-chain pull — a crop ferment yields alcohol base that feeds other recipes, e.g. as a solvent intermediate) | power: everyday | tone: ok | verdict: ACCEPT | hook: the base fluid isn't just distillery input — a fermentation vat route from grain/potato crops grounds it in the survival food chain
- from: alcohol_industry:vodka / whiskey | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 (arcane infusion pull — high-proof spirits as a solvent/catalyst in infusion, a natural alchemical role) | power: mid | tone: ok | verdict: ACCEPT | hook: an alchemist's still feeds the ritual bench; distilled alcohol is a classic solvent reagent in real-world alchemy
- OK — Create + survival anchors are sound.

## ohthetreesyoullgrow   [anchors: support (1)]
- LEAVE — zero blocks, zero items, zero loot; tree-generation framework library only.

## bcc   [anchors: support (1)]
- LEAVE — modpack-ops utility; no items, no methods, nothing to weave.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack (no own items/blocks); it deepens the Create pillar's renewable loops but has no material handle of its own to route to a second pillar. The recipes it adds (coal-block→diamond via compacting, etc.) do indirectly serve scarcity, but there is no new node here — the value flows through vanilla/Create items already in the web.

## mcwstairs   [anchors: decoration palette (1)]
- from: mcwstairs stone/brick stair variants (andesite_bulk_stairs, blackstone_bulk_stairs, brick_terrace_stairs, etc.) | via: create:crushing | to: Create | motif: M-04 (Create recycles deco — stone/brick variants crush back to raw/gravel + xp nugget; lossy) | power: everyday | tone: ok | verdict: ACCEPT | hook: a staircase off-cut goes into the crusher and comes back as gravel — feels industrial-rational, not forced
- REWORK: dossier flags the M-04 candidate as [WEAK] — accepted here because it's exactly the "wholesale deco-family pass" the dossier anticipates; 224-block stone family makes it worthwhile as a single bulk rule.
- from: mcwstairs wooden variants (oak_railing, birch_loft_stairs, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crushing back to planks/sticks (M-04) is a much thinner value gain than stone and adds recipe noise; the established Create deco-crush pass targets stone/metal; wood recycle is not the pattern.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets (bone_shield components, misc. mineral fragments) | via: occultism:spirit_fire | to: magic | motif: M-11 (ritual/transmutation sink — creature-drop becomes occult essence) | power: mid | tone: ok | verdict: ACCEPT | hook: slaying a harpy and feeding its wing-shard to spirit fire turns it into an essence — the bestiary directly stocks the occultist's shelf
- from: grimoireofgaia mini-boss drops (bust_valkyrie, bust_gorgon, bust_sphinx, bust_minotaur, bust_vampire) | via: ars_nouveau:imbuement | to: magic | motif: M-02 (mob-drop reagent sink — a rare mini-boss bust is an imbuement catalyst or infusion key) | power: endgame | tone: ok | verdict: ACCEPT | hook: the gorgon bust on the imbuement pedestal channels petrifying energy into the reagent — tier-appropriate, mythic flavour holds
- from: grimoireofgaia drops (general fragment/nugget category) | via: create:crushing | to: Create | motif: M-02 + M-03 (mob-drop material → Create ore-doubling: creature mineral fragments crush like crude ore to yield metal dust + byproduct) | power: everyday | tone: ok | verdict: ACCEPT | hook: the ant-salvager drops a mineral shard; the crusher separates it — a small but sensible scavenger loop
- from: grimoireofgaia:ring_* (artifact rings) | via: occultism:ritual | to: magic | motif: M-11 (ritual sink — an artifact ring is sacrificed in ritual to bind its enchantment into a magic component) | power: endgame | tone: ok | verdict: ACCEPT | hook: to craft an Occultism familiar focus at high tier, a Ring of Haste is dissolved in the ritual circle — the bestiary's best reward fuels the magic endgame
- from: grimoireofgaia boss/mini-boss drops | via: loot-seed (LootJS injection) | to: economy | motif: M-34 (combat-route supply — a combat specialist farms the rare drops and trades them to non-combat players who need the magic reagents) | power: endgame | tone: ok | verdict: ACCEPT | hook: the wizard pays the fighter for gorgon busts, not the other way around — classic trade loop
- from: grimoireofgaia bust decorative blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a sculpture bust into gravel is tonally jarring; the busts are decorative trophies, not raw building stone — the imagery of the Valkyrie bust going in a crusher conflicts with the mythology vibe.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 (ritual/transmutation sink — soul materials from the Otherside are exactly what spirit_fire wants) | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust from the silent dark is fed to spirit fire to crystallize an occult essence — the underground horror dimension is literally a soul-harvesting ground for the occultist
- from: deeperdarker:heart_of_the_deep (rare Warden drop that gates the portal) | via: ars_nouveau:imbuement | to: magic | motif: M-15 (boss-key unlock — the heart is an endgame ingredient gating a powerful ars ritual or imbuement; Warden is a boss-tier encounter) | power: endgame | tone: ok | verdict: ACCEPT | hook: the heart that opens the Otherside also powers the highest-tier ars imbuement — two endgame branches share the same gating material
- from: deeperdarker:warden_carapace | via: create:mechanical_crafting | to: Create | motif: M-15 (boss-key unlock — the carapace is a required input for a high-tier Create fabricated component) | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's exoskeletal plate, crushed and smithed through a mechanical crafter, becomes a structural component for deep-mission equipment — endgame materials gate endgame tech
- from: deeperdarker gloomslate/sculk_stone block family (cobbled_gloomslate, sculk_stone, etc.) | via: create:crushing | to: Create | motif: M-04 (Create recycles deco — stone variants crush to gravel + xp nugget; lossy) | power: everyday | tone: ok | verdict: ACCEPT | hook: dark stone off-cuts go back into the gravel bin — same pattern as vanilla deepslate in the Create web
- from: deeperdarker:sculk_bone | via: create:crushing | to: Create | motif: M-03 (Create ore-doubling analogue — sculk bone is a mid-tier mob drop that crushes into a useful byproduct for magic/alchemy) | power: mid | tone: ok | verdict: ACCEPT | hook: the bone-like relic from dimension creatures yields a fine reagent powder when ground — alchemists pay for it
- from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement | to: magic | motif: M-07 (attunement catalyst — crystallized amber functions as a catalyst that gates a conversion, resonating with trapped ancient life) | power: mid | tone: ok | verdict: ACCEPT | hook: trapped ancient life energy in the amber catalyses the imbuement without being consumed — an attunement catalyst from the deep
- from: deeperdarker:reinforced_echo_shard | via: create:sequenced_assembly | to: Create | motif: M-06 (sequenced-assembly keystone — reinforced echo shards are mid-endgame and suitable as a step in a multi-stage assembly chain for sonic/detection tech) | power: endgame | tone: ok | verdict: ACCEPT | hook: the echo resonator component in a Create assembly line uses reinforced echo shards as a final-stage infused part — detection tech built from the dimension's materials
- from: deeperdarker soul materials (soul_dust, soul_crystal) | via: create:haunting | to: Create | motif: M-19 (soul/haunting seam — Create haunting uses soul fire, and the Otherside's soul materials are a natural feedstock for haunt-converted outputs) | power: mid | tone: ok | verdict: ACCEPT | hook: run gloomslate through soul fire in a Create contraption and it outputs a haunted variant enriched with Otherside energy — two soul-themed systems locked together
- REWORK: dossier candidate "economy via numismatics — Otherside-only soul materials…(M-09 luxury→coin)" — M-09 RETIRED; REJECT. Re-express: soul materials gate magic production (already proposed above), which gates a specialist trade (M-34/M-29 — the combat diver and the occultist need to trade).

## resourcefullib   [anchors: support (1)]
- LEAVE — pure API library; 0 items, 0 methods, 0 loot, nothing to weave.

## everycomp   [anchors: decoration palette, support (1)]
- LEAVE — runtime block/asset generator; it has no items of its own; weaving belongs on the host mods whose shapes it stamps out. The single `everycomp:all_woods` creative tab item is not a craftable.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull (ship hull components) | via: create:mechanical_crafting | to: Create | motif: M-23 (structural alloy → airframe/hull — ship hulls are a structural build ingredient gated on fabricated Create components; making the fleet cost real tech) | power: mid | tone: ok | verdict: ACCEPT | hook: the cutter's hull planking isn't just wood and iron — it needs Create-fabricated hull ribs; no shipwright without a workshop
- from: hpm:hand_cannon | via: create:sequenced_assembly | to: Create | motif: M-06 (sequenced-assembly keystone — the hand cannon is mid-tier and warrants a multi-step assembly chain: barrel + lock + stock) | power: mid | tone: ok | verdict: ACCEPT | hook: a hand cannon is precision-machined, not forged at a table; the assembly line produces the finished weapon
- from: hpm:swashbucklerupgrade | via: create:mechanical_crafting | to: Create | motif: M-20 (deploy-application upgrade — the upgrade is applied to an existing hull via deploying, analogous to M-20 item_application) | power: mid | tone: ok | verdict: ACCEPT | hook: fitting the upgrade keel to an existing ship feels right as a deployer or item_application step — you bring the ship to the workshop
- from: hpm ship items (cutter, war cutter, corvette) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the ships are already addressed via M-23 (hull gating) + M-06 (hand cannon); adding a full ship-assembly line on top would be over-gating the same content. Power-scaling: M-06 depth for the endgame corvette steamship would be fine but is a separate authoring task, not an additional weave link here.
- from: hpm:cannonball / mortar_ball | via: createbigcannons:cartridge_assembly | to: Create | motif: M-29 (cross-route dependency — the ship's munitions are assembled by the Big Cannons method, forcing the naval player to interact with the artillery production route) | power: everyday | tone: ok | verdict: ACCEPT | hook: you can't load a ship's cannon without going through the CBC ammo line — naval combat depends on the artillery supply chain
- NOTE: dossier flags "overlaps Create Aeronautics + CBC; role-split is a curation question." Flagging for thunderdome — do not weave the full ship set until curation confirms hpm stays vs Aeronautics ships. The weaves above are additive and survive either outcome (hull gating + cannon assembly apply regardless of which vehicle mod is primary).

## lootjs   [anchors: support (1)]
- LEAVE — KubeJS scripting library; no items, no loot tables of its own; it is the implementation tool for M-02 mob-drop seeding elsewhere, not itself a weave node.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure overhaul only; loot=no (uses vanilla mineshaft loot tables, no new drops); nothing to weave. The improved layout indirectly helps the scarcity/mining loop but offers no material hook.

## charta   [anchors: survival (1)]
- from: charta:empty_beer_glass / empty_wine_glass | via: alcohol_industry:alcohol_boiling | to: Create | motif: M-12 (processing-chain pull — the empty glasses from the card-table furniture become the output vessel for alcohol_industry's finished pours, linking tavern decor to the Create distillery) | power: everyday | tone: ok | verdict: ACCEPT | hook: the bar shelf's beer glass gets filled at the distillery tap — the social set and the industrial kitchen are the same supply chain
- from: charta:card_table (loot=yes; generates in villages/dungeons) | via: loot-seed | to: economy | motif: M-33 (service-for-hire — seed a Numismatics coin purse or trade-goods bundle into charta structure loot, so the card table is a player-economy node: someone finds the table, others travel to use it as a gambling/social venue paid in goods) | power: everyday | tone: ok | verdict: ACCEPT | hook: a player discovers a village card parlour with a coin purse on the table — social gathering spot seeded with economy starter goods
- from: charta bar furniture (bar_shelf, bar_stool, game_chair) | via: create:cutting | to: Create | motif: M-04 (Create recycles deco — wooden bar furniture cut back to planks; lossy) | power: everyday | tone: ok | verdict: REJECT | reason: this is M-04 forced; the bar furniture is decorative wood and there is no "of course" moment in running a bar stool through the sawmill — it's pure recipe busywork with no loop benefit.
- REWORK: dossier candidate "economy via card matches as gambling/coin sink" — flagged as needing external wiring with no Charta hook. Re-express: the loot-seed candidate above (M-33) is the coherent form; the gambling mechanic itself is not an authored recipe and thus not a Phase-2 weave.

## rightclickharvest   [anchors: support (1)]
- LEAVE — interaction-QoL behavior only; no items, no methods, no material join key.

## do_a_barrel_roll   [anchors: support (1)]
- LEAVE — client-side elytra flight-feel mod; no items, no methods, no content surface. Touching the aeronautics pillar thematically (flight) but has no game content to route.

## immersive_paintings   [anchors: decoration palette (1)]
- LEAVE — pure player-expression decoration mod; 4 items all identical in function (canvas frames); no material join key for Create/magic/economy that wouldn't be busywork. The Exposure compat addon is the natural bridge (Exposure dossier should carry that weave, not this one).

## midnightthoughts   [anchors: survival (1)]
- LEAVE — behavior-only rest/buff mod; no items, no loot, no material handle. Pairs thematically with Cold Sweat / Serene Seasons but offers no join key.

## create_central_kitchen   [anchors: Create, survival (2)]
- REWORK: dossier 3rd-anchor candidate cites M-09 (luxury→coin) — M-09 RETIRED; bare sell link rejected.
- from: create_central_kitchen automated feast outputs (finished dishes, sauce/drink fluids) | via: alcohol_industry:alcohol_boiling | to: survival | motif: M-12 (processing-chain pull — the kitchen's sauce fluids feed the alcohol boiler as flavor additives, chaining the two Create food systems) | power: mid | tone: ok | verdict: ACCEPT | hook: the automated kitchen's fermented grape sauce pumps directly into the distillery's boiler as a flavor input — one Create pipe connects the kitchen to the bar
- from: create_central_kitchen ice-cream / chilled drink fluids | via: extradelight:chiller | to: survival | motif: M-12 (processing-chain pull — chilled outputs from the kitchen become extradelight:chiller inputs for new recipe lines) | power: mid | tone: ok | verdict: ACCEPT | hook: the kitchen produces chilled base fluids that the Chiller turns into specialty frozen goods — same automated contraption, deeper food chain
- from: create_central_kitchen feast/dish outputs | via: minecolonies:composting | to: economy | motif: M-28 (colony route — surplus feast dishes can be composted via MineColonies for fertilizer, or the colony requests specific dishes from the kitchen as a demand sink) | power: mid | tone: ok | verdict: ACCEPT | hook: the colony cook requests the automated kitchen's output, making the kitchen a colony supplier rather than a self-contained production island
- OK — Create + survival anchors are sound; new economy-demand edge via M-28 adds the missing 3rd without a bare sell link.

## create_sa   [anchors: Create, aeronautics (2)]
- REWORK: dossier 2nd-anchor candidate (blazing tools → magic infusion) was dropped; revisit.
- from: create_sa:brass_jetpack_chestplate / andesite_jetpack_chestplate | via: create:sequenced_assembly | to: aeronautics | motif: M-24 (mechanical component → propulsion/control — the jetpack is a personal propulsion unit; its assembly through Create methods deepens the aeronautics→Create link, making personal flight cost real fabricated components) | power: mid | tone: ok | verdict: ACCEPT — already wired (made-by: sequenced_assembly); flagging as explicit M-24 anchor for the ledger
- from: create_sa:brass_drone_item | via: create:mechanical_crafting | to: aeronautics | motif: M-24 (drone is a personal unmanned flyer; mechanical crafting gates it on precision components) | power: mid | tone: ok | verdict: ACCEPT — already wired (made-by: mechanical_crafting); explicit M-24 tag for ledger
- from: create_sa blazing line (blazing_pickaxe, blazing_axe, blazing_shovel, blazing_cleaver) | via: ars_nouveau:imbuement or create_new_age:energising | to: magic | motif: M-17 (electric/FE charging bridge — the blazing tools contain heat energy that could be charged or discharged via the Create electricity / magic infusion tier) | power: mid | tone: ok | verdict: ACCEPT | hook: a blazing pickaxe is dipped in the imbuement pedestal to bond a fire affinity — the heat inside the tool becomes an infusion catalyst, and an alchemist can extract it for use as a reagent
- from: create_sa:brass_drill_head | via: create:crushing | to: Create | motif: M-32 (byproduct → input — a worn/depleted drill head crushes back to brass nuggets + experience_nugget, feeding the metal loop) | power: mid | tone: ok | verdict: REJECT | reason: no tooling-degradation mechanic exists in the pack (M-38 is MECHANISM-PENDING); without actual wear, the drill head is just a permanent item and there's no byproduct flow to route.
- OK — Create + aeronautics anchors are sound; magic 3rd via M-17 is the natural extension.

== CHUNK COMPLETE ==
