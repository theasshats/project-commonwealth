# Phase 2 candidates — chunk-23

## ding   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-content behavior mod: no items, no blocks, no loot tables, no recipe types. Pure client audio cue on load. Nothing to route through any method.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. This mod is integration glue by design: it already wires MineColonies colony workers into Create Stock Link storage, Farmer's Delight cutting boards, IE cloche/fertilizer farming, TaCZ gunner jobs, and modded-crop orchardist logic. Its whole identity is cross-pillar bridging; it has ≥2 pillars baked in. No new forced edges warranted.
- from: colony courier / citizen_stock_keeper | via: config tie (courier job profile references Create Stock Link) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: Numismatics coin doesn't flow through colony storage routing; the courier is a logistics bridge not a trade actor. No clean motif fit — tagging no-motif; flag for Gate-0 if desired.
- from: minecolonies_compatibility:tacz_dummy_gun (TaCZ Gunner colony job) | via: loot-seed or config tie | to: Create (weaponry supply chain) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The tacz_dummy_gun is a job-assignment dummy item not a functional weapon; gating it on Create parts would confuse the colony assignment UX. The real supply chain (gun crafting) lives in TaCZ itself. No clean weave here without distorting the colony job system.

## ritchiesprojectilelib   [anchors: support (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, no loot tables, no recipe types. Pure projectile/ballistics API consumed by Create Big Cannons. No material surface to route through any method.

## modulargolems   [anchors: Create (1)]
- from: golem body (boss-metal parts — cursium, dragonsteel) | via: modulargolems:golem_assemble with boss drop as required input | to: survival/organic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: killing the Cataclysm ender guardian or Ice&Fire dragon is the gate to building a cursium/dragonsteel golem — boss kill earns the strongest construct.
- from: golem upgrade slot | via: ars_nouveau:enchanting_apparatus as a required upgrade step for a magic-affinity upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbuing a golem core with source energy at the enchanting apparatus unlocks arcane behaviors — construct meets magic; one light step, mid-tier parts only.
- from: golem chassis blank | via: create:sequenced_assembly for endgame body intermediate | to: Create depth | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: The dossier already credits create:sequenced_assembly as an existing inbound weave; re-proposing it would duplicate rather than add. Confirm authorship first; if authored, REWORK check below applies.
- REWORK: Create anchor — dossier lists create:mechanical_crafting and create:sequenced_assembly as "made-by methods" (existing inbound weaves). Verify these are actually authored KubeJS recipes, not just speculative candidate notes. If unauthored, the Create pillar is aspirational and Phase 3 should author M-06 before layering a second pillar.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — recipe-enabler datapack only: 0 blocks, 0 items registered under its namespace, no loot tables. It enables minecraft:bundle via a vanilla crafting recipe (leather + string). The output is a vanilla item, not this mod's item; no surface to weave through any method.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj:blahaj (plush variants) | via: create:crushing to recover wool | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Crushing a beloved BLÅHAJ plushie for wool is tonally cruel and directly clashes with the mod's "cozy/wholesome" vibe. The mod's whole point is a decoration you keep, not a resource input. Hard tone clash.
- from: just_blahaj:glowhaj | via: ars_nouveau:imbuement or occultism:spirit_fire as "enchanted plush" | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Glowhaj is an aesthetic variant (glowing plush). Routing it through a ritual method treats a cozy decoration as a magic component, which is themetically forced and undermines the mod's flavor identity.
- LEAVE — the plushies are pure cozy decoration; every method-pull produces a tone clash. The briefing's own guardrail applies: "if nothing is coherent, LEAVE." The friend-group flavor value is precisely in NOT instrumentalizing them.

## voicechat   [anchors: support (1)]
- LEAVE — genuine zero-content infrastructure mod: 0 blocks, 0 items, no loot, no recipe types. Proximity voice comms only; nothing to route through any method.

## moreculling   [anchors: support/performance (1)]
- LEAVE — genuine zero-content performance mod: 0 blocks, 0 items, no loot, no recipe types. Client render-culling optimization. Nothing to weave.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — genuine zero-content visual mod: 0 blocks, 0 items, no loot, no recipe types. Client-side volumetric cloud renderer. Nothing to weave.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (post-Nether climate machine) | via: recipe — require Create brass casing / mechanical components in Hearth crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a late-survival infrastructure piece; gating it behind Create brass/casing is natural — you build the machine that keeps your base livable from the same tech that powers everything else.
- from: cold_sweat:boiler (fuel-burning heat emitter) | via: create:filling — pipe molten metal or lava as boiler fuel | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create fluid pipe feeding the boiler turns climate control into an automated system — survival logistics meet the tech spine. (Boiler already has a create:filling inbound edge per dossier; this deepens it with a supply-chain integration rather than a new recipe.)
- from: cold_sweat insulated armor (chameleon/hoglin/goat_fur sets) | via: numismatics sell — kit cold-climate armor as a trade good for crews heading to harsh biomes | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who specializes in cold climates (tundra/mountain biomes) can sell insulated kits to crewmates who haven't braved those biomes yet — emergent trade from scarcity of cold-region materials.
- from: cold_sweat:goat_fur / chameleon_molt / hoglin hide (insulating materials) | via: farmersdelight:cutting or create:milling to process raw mob drops into refined insulation material | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hide from a goat or chameleon needs processing before it insulates — run it through the cutting board or millstone to yield usable fur pads, tying the survival temperature loop to Create processing.
- from: cold_sweat:soul_stalk (Nether-realm cold plant) | via: occultism:spirit_fire or ars_nouveau:imbuement as a temperature-attuned reagent | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul_stalk grows in the cold depths of the Nether and carries residual soul energy — makes sense as an arcane cold reagent for rituals or infusion. Ties the temperature-survival loop to the magic pillar via a thematically fitting Nether plant.
- from: insulated goat_fur armor tier | via: config tie — cold_sweat config registers goat_fur and other mods' hides (alexsmobs bear fur, naturalist materials) as insulation | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: This is a config-only cross-mod hook with no motif in the registry — it's an in-pack tuning step, not a weave candidate. Useful for Phase 3 config authoring but not a named weave. Tagging no-motif; REJECT-for-review.

== CHUNK COMPLETE ==
