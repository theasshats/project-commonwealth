# Phase 2 candidates — chunk-04

## lootjs   [anchors: support/packdev-tooling (1)]
- LEAVE — genuine zero-content scripting library; it is the *enabler* of M-02 mob-drop weaves (the pack uses it to inject drops), not a node in the loop itself. No items, no recipe types, no loot tables of its own. Forcing an anchor would be a defect.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build engine; ships 14 tool items (scepters, shape-tool, caliper) but these are pure build-tool instruments, not materials. Its weave is MineColonies' weave. No loot tables (loot=no). No coherent independent edge.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj:glowhaj (emissive plush variant) | via: loot-seed | to: economy | motif: M-14 (provisional) | power: everyday | tone: clash | verdict: REJECT | reason: glowhaj has no mob or structure context — seeding it as a bounty reward is a forced stretch; the mod's tone is cozy decor, not combat loop. No coherent loot-seed opportunity (loot=yes but 31 identical plush blocks with no structure association).
- LEAVE — pure decorative flavor set. The 31 plush variants are an aesthetic palette with vanilla wool/dye inputs and no output surface; none of the M-01..M-24 motifs apply without forcing an incoherent edge. Dossier explicitly flags "forcing an edge here is the failure mode."

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear (mid-tier kinetic components) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gearset in the drivetrain of an Aeronautics propeller reads as obvious engineering — more torque control for bigger ships
- from: gnkinetics:industrial_gear (endgame heavy gear) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: large industrial gears as the control-surface actuators (rudder/aileron mechanisms) on heavy airframes — endgame gearing for endgame ships
- from: gnkinetics:ring_gear (complex gear system) | via: create:sequenced_assembly | to: aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is for derpack:incomplete_* multi-stage keystone chains; gnkinetics gear components are inputs to M-24 drivetrain weaves, not themselves multi-stage keys — using M-06 here would double-count the motif. Keep as M-24 only.
- REWORK: existing 1-anchor (Create) is correct but the dossier says "leave" for 2nd anchor without testing M-24. The drivetrain motif is exactly what gnkinetics components should feed. The two ACCEPT rows above represent the recommended 2nd-anchor path.

## foodeffecttooltips   [anchors: support/client-QoL (1)]
- LEAVE — zero items/blocks, pure tooltip renderer. No content surface at all. Sanctioned support role.

## dynamic_fps   [anchors: support/performance (1)]
- LEAVE — runtime window-state throttler; no items, no methods, no material. Pure client-side performance fix.

## imfast   [anchors: support/QoL-fix (1)]
- LEAVE — server-side movement validation patch. Functionally serves aeronautics (keeps ships from being kicked), but as a behavior fix, not a wireable resource. No content.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library; ships only iron/gold nugget c:tags as scaffolding (these are vanilla-tier, not unique reagents). No gameplay, no recipe types. Dependency-only.

## pantographsandwires   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already ≥2 anchors: built through Create machines (6 inbound types including sequenced_assembly), and directly serves rail/train transport (the aeronautics/logistics arm). Its coal_coke (c:item/dusts/coal_coke) and graphite (c:item/ingots/graphite) tags are natural shared-material nodes.
- from: pantographsandwires:coal_coke | via: tfmg:coking | to: Create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coke is a coking by-product and a standard fuel — if TFMG coking produces it or consumes it, it ties into the fuel/propulsion chain for trains and aeronautics engines
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:crushing or create_new_age:energising | to: magic/Create | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: graphite as a magic reagent is a reach — it has no established arcane connotation in Ars/Occultism lore; forcing it through M-10 would feel arbitrary to a player. The material's established home is electrical rail, not magic.

## biolith   [anchors: support/worldgen-API (1)]
- LEAVE — worldgen placement library; no items, no biome-modifiers of its own, no loot tables. Pure API dependency.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea (high-effort drinks) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cup of ancient coffee or cherry tea brewed from rare Sniffer crops is a real coastal/market trade good — travelers pay well for something they can't easily farm themselves
- from: trailandtales_delight:cheese_wheel (cheese production chain: milk → curd → wheel) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a whole cheese wheel is a crafted luxury, not a raw drop — exactly the kind of processed food that should command a price at the market
- from: trailandtales_delight:lantern_fruit (sniffer-recovered crop, tagged item/foods/berry) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling lantern fruit yields a juice pulp or dried flakes — a one-step Create processing of a botanically unusual crop pulls it into the tech spine naturally
- from: trailandtales_delight:cherry_cheese_pie (multi-step endgame food block) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: cherry_cheese_pie is already implicitly covered by the cheese_wheel M-09 above (it's further up the same chain); filing both would double-count. Keep the wheel as the sell-point; the pie is the consumer reward, not the trade good.
- REWORK: none needed on existing connections; survival anchor is sound. The three ACCEPTs above give the 2nd (economy) and 3rd (Create) anchors.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute | via: create:item_application (deploying zinc coating as upgrade step) | to: aeronautics | motif: M-20 | power: everyday | tone: clash | verdict: REJECT | reason: deploying a zinc chute onto an aeronautics logistics block is a plausible idea but direct_chute is a single utility block — the edge would be nominal (the chute doesn't change aeronautics behavior, it's still just a chute). M-20 is the light-step upgrade motif but requires a meaningful behavioral upgrade, not a cosmetic/logistics placement.
- LEAVE — single zinc logistics block; its role is fully captured by the Create anchor. No coherent 2nd anchor without forcing.

## minecolonies   [anchors: survival, Create (2)]
- OK — connections sound. Create weave is authored (M-05: quarries gated on andesite/brass/precision mechanism). Survival anchor via settlement food and farming is well established.
- from: minecolonies colony food outputs (apple_pie, baked_salmon, c:foods/bread/soup/vegetable) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a running colony produces surplus food the player can offload at market — the colony becomes a passive income engine as well as an unlock gatekeeper, fitting the emergent economy loop
- from: minecolonies:ancienttome (research gate item) | via: boss-key gating (M-15 style) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: ancienttome is already the colony's own research gate (University unlock); making it a Create recipe gate would double-purpose it against its primary colonial role. The existing M-05 gating (quarries gated on Create parts) is the cleaner direction.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork:molten_iron / molten_brass / molten_steel (processed via create:crushing→mixing→compacting) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined molten metal is the natural upstream of a mint — process scarce ore through the foundry, cast ingots, mint coin; the foundry IS the coin factory
- from: createmetalwork crushed_raw_materials tags (palladium/quicksilver/platinum) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: crushed quicksilver (mercury-analog) or platinum is a classic magic ingredient — routing the foundry's crushed output into an arcane infusion step ties the ore-processing chain directly into the magic pillar
- from: createmetalwork:molten_steel (high-tier processed alloy) | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plates cast from the molten foundry go straight into airframe construction — the smelter feeds the shipyard
- REWORK: dossier already identifies M-08 and M-03 candidates, so these are confirmations + the M-23 aeronautics edge which the dossier doesn't call out.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / fugu_slice (high-effort, effect-granting delicacies) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a fugu slice that risks poison or an elder-guardian roll requiring an Ocean Monument run commands a serious price — coastal specialists trade what inland players can't easily get
- from: oceansdelight:cut_tentacles / cooked_guardian_tail (raw mid-tier seafood) | via: farmersdelight:cutting then numismatics sell | to: economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-12 processing-chain pull is already served by the existing FD cooking/cutting weave (the anchor is survival-via-FD); adding a second economy edge at the raw-ingredient tier would overlap with the M-09 ACCEPT above and fragment the sell-point. Keep one clean economy link at the finished-dish tier.
- from: oceansdelight:guardian (guardian meat drop) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardian flesh transmuted through spirit-fire yields a water-affinity essence — guardians are already magical/arcane temple guardians lore-wise; the player that clears Ocean Monuments feeds the magic lab

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / bushmeat (cooked meat from hunted wildlife) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a hunter trading fresh venison at market is completely natural — wild game fills a niche no farmer fills, and it sells
- from: naturalist:antler (bone-analog drop from deer) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: antler is a classic alchemical material — a deer antler goes into the ritual chamber as a bone of the wild, yielding an earth-aspected reagent; players hunt deer for more than steak
- from: naturalist:glow_goop (firefly drop, light material) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: firefly glow-goop as a bioluminescent reagent in a light-spell inscription is an instant player "of course" — you caught living light in a jar
- from: naturalist shellstone / froglass deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as WEAK; the deco set is small and rarely surplus-crushed. The value proposition of M-04 (lossy recycle) is marginal when the blocks are low-count natural-stone analogs, not factory byproduct. Doesn't advance the loop.

## createpickywheels   [anchors: Create (1)]
- from: createpickywheels river/biome power-gating (behavioral: water wheels need River biome) | via: config/world constraint | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: this is a design/balance effect, not a recipe-routed weave. The "survival pressure" angle is real (geography dictates power placement), but there is no M-01..M-24 motif for a config/behavioral gate, and `no-motif → REJECT-for-review` per the briefing. Worth noting for a possible new motif (M-??: world-gate / biome-gate power) at Gate 0, but cannot ACCEPT without a motif.
- LEAVE — zero items, zero methods. The behavioral pressure it adds is a design lever, not a weave node. No route through any palette method.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: aeronautics_dyeable_components dyed levitite (levitite + dye → colored levitite) | via: create:toolbox_dyeing or ars_nouveau:dye | to: Create or magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: levitite is already an aeronautics specialty material; routing it through arcane infusion to gain color is thematically incoherent (dyeing ≠ magical refinement). create:toolbox_dyeing is the technically correct method but it's just a color swap, not a system link. The dye step is cosmetic, not a loop-advancing weave.
- LEAVE — pure cosmetic skin layer for aeronautics parts. The dossier's assessment holds: all 96 items are color permutations of two base aeronautics components (levitite + tire); no loop-advancing edge exists without forcing.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — elytra flight-feel overhaul; zero items/blocks, no recipe types, no loot. Purely client-side camera behavior. No weave surface.

## jade   [anchors: support/client-UI (1)]
- LEAVE — look-at info HUD. Zero items, no methods, no loot. Pure display-layer; weaving it is incoherent.

== CHUNK COMPLETE ==
