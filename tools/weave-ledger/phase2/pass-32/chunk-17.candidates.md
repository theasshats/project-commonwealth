# Phase 2 candidates — chunk-17

## cmparallelpipes   [anchors: create (1)]
- LEAVE — Pure Create fluid-plumbing utility tool (Pipe Wrench). No items usable as material inputs, no loot table, no foreign method surface. Supports the Create spine directly; no coherent 2nd-anchor weave exists.

## glitchcore   [anchors: support/library (1)]
- LEAVE — Zero-content loader-abstraction library backing Glitchfiend mods (Serene Seasons, TerraBlender). No blocks, items, or loot. Nothing to weave.

## blockui   [anchors: support/library (1)]
- LEAVE — XML-based UI framework library for MineColonies/Structurize. No blocks, items, or loot. Nothing to weave.

## moblassos   [anchors: survival (1)]
- from: moblassos:hostile_lasso | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: The hostile_lasso (capture a mob at <50% HP) is a tool item, not a loot drop — nothing enters a loot table here; the economy link would be a bare "players trade lassos" which is the ambient endpoint, not a demand-gate. No demand-gating motif applies to a tool item with no consumable role.
- from: moblassos:emerald_lasso | via: recipe | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: Emerald lasso captures villagers — relevant to MineColonies stocking. But the tool itself requires no colony input and produces no colony output; the connection is thematic utility synergy, not a recipe-routed method-pull. M-28 requires a MineColonies hut/research/request node on one side; this would only be "useful for colonies," not routed through them.
- LEAVE — Item-utility mod; its value is mob-transport (carrying livestock to farms/ships), not material flow. No method to route through, no loot surface, no consumable reagent. One-anchor survival/QoL; genuine zero-weave surface.

## touhou_little_maid   [anchors: survival (1)]
- from: boss drop (e.g. cataclysm boss signature drop) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The altar is a ritual/shrine-maiden summoning rite — gating a high-tier maid or the flying Broom behind a boss-key drop reads as "you earned this companion through danger," directly analogous to boss-key tech gates; the altar is already the mod's own gating machine so depth is native, not bolted-on.
- from: ars_nouveau:source_gem (power-point bottle analogue) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: The altar consumes "power-point bottles" as its summoning currency — re-expressing some altar recipes to spend Ars source gems (the universal magic currency) as an alternative power-source ties the shrine's spiritual energy to the magic web; a mage specialist can fuel the altar without farming fairy drops. Fits M-01's arcane-currency-hub role; source_gem is not double-spent (it's already the hub, this adds a consumption node).
- from: occultism:spirit_fire (or spirit_trade) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: While a spirit-fire transmutation producing a power-point bottle or maid-summoning catalyst is thematically coherent (spirits → shrine energy), the power-point bottle is a low-value input (~0.5 XP-bottle equivalent) and the altar already has a self-contained economy; routing spirit_fire into it adds complexity without a clear demand gap. The M-01 source_gem link (above) already covers the magic↔altar bridge more cleanly. Reject to avoid over-weaving the altar.
- from: touhou_little_maid:broom | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: The Broom is a rideable flight item within TLM's whimsical tone; proposing it as a control surface / drivetrain component for Aeronautics vessels is a tone clash (shrine-maiden broom ≠ industrial airship part). M-24 is for mechanical components, not magical flying props.
- REWORK: existing "economy via power-point bottles as a sink" candidate in the dossier (M-02) — the bare "fairy-drop bottles are sellable" read is a rejected ambient-endpoint connection (M-09 territory). Should instead be framed as M-26 consumption sink: power-point bottles are consumed at the altar for maid maintenance/upgrades, meaning the farm/fight loop that generates them never zeroes out. That framing is stronger but still weak without an explicit recipe forcing the consumption; leave for Phase 3 to decide if an "altar upkeep" recipe makes sense.

## entity_model_features   [anchors: support/rendering (1)]
- LEAVE — Client-only OptiFine CEM rendering library; no items, no loot, no methods. Nothing to weave.

## createfood   [anchors: survival, create (2)]
- from: createfood finished dishes (pizza/cake/milkshake) | via: farmersdelight:cooking or create:mixing | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Processed dishes are consumed on the spot as high-calorie travel food (M-26 consumption sink), meaning a cook-specialist's output is continuously demanded — the cooking chain never idle-stockpiles. Pairs with Cold Sweat's warm-meal loop: hot dishes from the Create kitchen are demanded every expedition.
- from: createfood dishes | via: minecolonies (colony supply request) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists have "food" supply needs — Create Food's rich dish set can populate the colony request queue directly, making the Create kitchen the canonical colony food supplier and gating colony growth on the cook's output.
- from: vinery wine / alcohol_industry products (as createfood recipe inputs) | via: create:mixing | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: createfood already consumes its own set of ingredients through Create methods; adding fermented liquids from Vinery/Alcohol Industry as createfood recipe inputs is a M-12 processing-chain pull, thematically fine (cocktail milkshakes, wine-infused cakes) but createfood already anchors Create + survival at 2 pillars. This would deepen within-survival rather than add a new anchor. Reject as incremental not a new anchor; note for Phase 3 recipe work if depth is wanted.
- from: createfood plated blocks (deco tables) | via: recipe | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: Plated food deco blocks as a "catering service" framing (cook-for-hire) is M-33 labor/service, thematically reasonable, but service-weaves require a clear player-to-player mechanic — the plated blocks are static deco, not a catering workflow. No method enforces the service frame; reject as no-mechanism.
- OK — connections sound. createfood is well-anchored at 2 pillars (survival + create). The two ACCEPTs above (M-26 consumption + M-28 colony supply) add economy as a genuine 3rd anchor via demand-gating, not ambient sell.

## netmusic   [anchors: support/flavor (1)]
- from: netmusic:music_cd | via: touhou_little_maid:altar_recipe_serializers | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: The music_cd is already crafted through the TLM altar (existing made-by method), so this is a description of the status quo, not a new weave. The altar→CD connection is cosmetic audio, not a demand-gate. No motif maps cleanly; the ambient-endpoint rule applies (it's "flavor"); reject as no-motif.
- LEAVE — Cosmetic audio jukebox; the one existing altar recipe is already the extent of sensible wiring. No material flow, no demand-gating. Genuine flavor/support role.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: aeronautics_dyeable_components dyed levitite/tires | via: create:toolbox_dyeing or vanilla dye craft | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: Dyed ship components are cosmetic — "paint your ship" isn't a service-for-hire in a player-economy sense; it's a one-time self-serve craft. M-33 requires a player performing work on another player's materials; re-dyeing your own tiles doesn't create labor demand. Reject.
- from: aeronautics_dyeable_components dyed levitite | via: create:mixing (dye + levitite) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: The current dye method (hold dye in offhand + catalyse) is already the mod's own mechanism; routing through create:mixing would replace, not add to, the existing path. M-20 (deploy-application upgrade) applies a functional upgrade, not a cosmetic re-skin. Tone is fine but the motif is a mismatch. Reject.
- LEAVE — Cosmetic color-skin layer on Aeronautics parts. Dye + levitite/tire → colored variant is pure visual; no method surface for a genuine cross-system weave. Already aeronautics-anchored; a forced 2nd anchor would be noise.

## polymorph   [anchors: support/compat (1)]
- LEAVE — Zero-content recipe-conflict resolver (UI button). No items, no loot, no methods. Nothing to weave.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* | via: farmersdelight:cooking or create:milling | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: Running sleeping bags through a Create machine has no thematic grounding — there's no sensible processing loop between wool bedrolls and industrial machinery. No motif covers "textile → Create." Reject.
- from: comforts sleeping bags | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: Seeding sleeping bags into dungeon/structure loot is thematically fine (a traveler's cache) but M-34 is combat-route supply — it describes boss/dangerous-source drops feeding the economy. A sleeping bag in a loot chest is ambient loot placement, not a demand-gating weave.
- LEAVE — Small wool/string QoL mod with no foreign material surface. Sleep-utility items crafted from vanilla materials; no coherent cross-system method route without forcing it. Genuine one-anchor survival QoL.

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — Config framework library, zero player content. Nothing to weave.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — Leaf-decay performance patch. No items, no methods, no content surface. Nothing to weave.

## spyglass_improvements   [anchors: support/client (1)]
- LEAVE — Client-side spyglass zoom/overlay tweak. No new items; pure input/render behavior. Nothing to weave.

## jade   [anchors: support/client (1)]
- LEAVE — Client HUD overlay (what-am-I-looking-at tooltip). No items, no methods, no content surface. Nothing to weave.

## mru   [anchors: support/library (1)]
- LEAVE — Code-sharing utility library with zero player-facing content. Nothing to weave.

## playeranimator   [anchors: support/library (1)]
- LEAVE — Player animation API library. No items, no methods, no gameplay content. Nothing to weave.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — Client volumetric cloud renderer. No items, no methods, no content surface. Nothing to weave.

## gamediscs   [anchors: survival/flavor (1)]
- from: gamediscs:processor | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: The gaming console's processor component being assembled in a mechanical crafter is thematically coherent (electronic component = precision manufacturing), but power-reading it: the processor is an everyday low-tier component for a novelty toy, not endgame gear — M-05 native-method gating is reserved for a mod's flagship item built in its own machine gated on Create parts. The gaming console isn't a production asset or power item; gating a downtime toy's component behind mechanical crafting adds friction without loop benefit. Reject.
- from: gamediscs game discs (disc-from-skeleton-kill gimmick) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: Discs already drop from skeleton-kills of specific mobs (Bee/Slime/Frog/Rabbit). This is the mod's existing acquisition mechanic, not a new loot-seed weave. Proposing it as a weave would be describing current behavior, not authoring a link. Reject.
- LEAVE — Novelty downtime toy; cosmetic arcade minigames with no material flow beyond its own component craft. The skeleton-kill disc-drop is the entire loop. Genuine zero-weave surface for cross-system play.

## owo   [anchors: support/library (1)]
- LEAVE — General utility/UI/config library. No blocks, items, methods, or loot. Nothing to weave.

== CHUNK COMPLETE ==
