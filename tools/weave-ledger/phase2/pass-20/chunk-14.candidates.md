# Phase 2 candidates — chunk-14

## geckolib   [anchors: support/library (1)]
- LEAVE — genuine zero-content animation/rendering API; 0 blocks, 0 items, no methods, no material surface. Nothing to route.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen-structure framework lib; 0 blocks, 0 items, loot=no. No player-facing surface; nothing to route.

## spark   [anchors: support/performance (1)]
- LEAVE — profiler/diagnostics tool; 0 blocks, 0 items. No gameplay surface; nothing to route.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the wart of a twisted undead feeds Occultism's spirit-fire transmutation into an essence — killing biome zombies becomes a ritual supply run
- from: rottencreatures:frozen_rotten_flesh | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: frostbitten flesh saturated with cold-biome death attuned into a cryo-arcane catalyst — biome hunting unlocks a magic tier
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: soul-fire of haunting strips the magma taint into a residue; kills in the hot-variant biome feed the Create soul-seam
- from: rottencreatures:frozen_rotten_flesh | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: magma_rotten_flesh via haunting (above) already covers the Create-sink angle; a second crushing route for the frozen variant is thin duplication; one Create link is enough for a mid-tier mob drop
- from: mob heads (rottencreatures:undead_miner_head etc.) | via: numismatics sell | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: heads as bounty goods overlap cleanly with the existing M-14 bounty mechanic, but heads are decorative non-stackable drops — they function better as deco or as boss-key gatekeepers (M-15) than as a coin source; flagging as weaker than the magic routing above
- REWORK: none — mod is currently 1-anchor (survival) with no existing weave connections; the ACCEPT rows above are all additive.

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — client-only model/animation replacer; 0 blocks, 0 items, no methods. No material surface.

## moonlight   [anchors: support/library (1)]
- LEAVE — shared API library for MehVahdJukaar mods; 1 helper block/2 internal items with no gameplay role. Its data-driven-trade API is exercised by dependent mods (Supplementaries), not by moonlight itself.

## l2library   [anchors: support/library (1)]
- LEAVE — developer plumbing; 0 blocks, 0 items, no methods. Nothing to route.

## formations   [anchors: survival (1)]
- from: formations structures (loot tables) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: dossier records loot=no (the AUTO digest says 0 loot tables registered); formations places structures built from existing block palettes but does NOT register its own loot tables — there is no loot surface to seed into. If future versions add loot, revisit with loot-seed.
- LEAVE — scatter-structure worldgen with no items and no loot tables of its own (confirmed loot=no). Only the template_editor tool exists; nothing to weave.

## accessories   [anchors: support/library (1)]
- LEAVE — accessory-slot API; 0 blocks, 0 items, no methods. Wearables belong to the mods that register into its slots.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore through the Crushing Wheel yields salt dust (+ gravel byproduct); a regional ore that the kitchen needs, pulled into the Create supply chain — scarcity drives the trade
- from: expandeddelight:cheese_wheel / goat_cheese_wheel | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese is time-gated (cask aging) and regionally available; a natural high-value sell-good that creates spontaneous trade between food-focused and coin-hungry players
- from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cinnamon is already a dust-form item produced by the mod's own harvesting; routing it AGAIN through a Millstone (M-12) would be a redundant mill step on something that is already in dust form. The salt ore crush (above, M-03) cleanly covers the Create anchor — a second Create recipe on a less interesting item weakens the salt anchor's distinctiveness.
- from: expandeddelight:salt (c:dusts/salt) | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: once salt is produced by crushing (M-03 above), feeding it into mixing as a seasoning input is thematically fine but produces a recipe dependency the pack can author independently during Phase 3 — not a distinct 2nd-anchor candidate, just a natural downstream step of the M-03 weave.
- REWORK: none — mod is 1-anchor (survival) currently; ACCEPT rows above extend to create + economy.

## clumps   [anchors: support/performance (1)]
- LEAVE — XP-orb merger, server perf mod; 0 blocks, 0 items, no methods. Nothing to weave.

## terrablender   [anchors: support/library (1)]
- LEAVE — biome-injection API; 0 blocks, 0 items. Nothing to route.

## railways   [anchors: Create, aeronautics (2)]
- from: railways:locometal blocks (brass/copper/iron wrapped) | via: create:crushing | to: create (recycling) | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: locometal panels crush back to raw plate/gravel + XP nugget — the train-builder scraps old rolling stock into base metals, closing the industrial loop
- from: railways:conductor_cap (incomplete variants) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the conductor cap is already produced by an existing Create-native path (sequenced_assembly inbound); adding another SA step on incomplete caps is forced duplication on top of an already-woven item.
- from: railways locometal / boiler parts | via: aeronautics hull | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: railways is already anchored in aeronautics as a logistics/transport extension; adding a structural-alloy route would double-count the aeronautics anchor. The structural-alloy weave (M-23) should run through create_ironworks steel plates, not railways locometal.
- OK — connections sound: Create (2 inbound recipe types: mechanical_crafting + sequenced_assembly) + aeronautics/logistics. The M-04 crushing row above adds a light third touch-point but both existing anchors are solid. No rework needed on the existing connections.

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:netherite_jetpack | via: occultism:spirit_trade / ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: a Netherite-tier flight item via spirit trade feels forced — the jetpack is a mechanical pneumatic device, not an arcane artefact; tonal clash with magic/occult.
- from: create_jetpack:jetpack | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: jetpack already uses vanilla mechanical_crafting-family recipes; a sequenced-assembly chain COULD deepen it, but the dossier notes the `copy_components_mechanical_crafting` type handles the upgrade path — the crafting path is already Create-native. Adding SA would be depth for depth's sake rather than a causal loop advance.
- from: create_jetpack:jetpack | via: loot-seed (boss drop gate) | to: create/aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: a mid-tier flight device gated behind a boss-key material (e.g. a dropped rotor fragment) keeps brass-era flight a real milestone rather than a craft-and-forget; boss-kill → flight is a clean loop advance
- OK — connections sound on existing Create + aeronautics anchors. The M-15 boss-key gate proposal above adds progression depth to the aeronautics milestone without a new pillar anchor.

## midnightthoughts   [anchors: survival (1)]
- from: midnightthoughts well-rested buff | via: config tie | to: survival (cross-mod) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is a seasonal-reagent motif tied to material inputs; midnightthoughts produces no items and cannot be wired via materials or methods — it is a pure event/effect system. A config adjacency with Serene Seasons (sleep in season gates buff strength) would be thematic but offers no Phase-3 deliverable (no recipe, no loot, no tag). No-motif for material weave.
- LEAVE — rest/buff mechanics with no items, no methods, loot=no. The well-rested effect is a survival loop enhancement but there is no material join key for a second pillar.

## createaddoncompatibility   [anchors: support/compat (1)]
- LEAVE — tag-unification/priority glue; 0 blocks, 0 items. Operates on recipe resolution, not material routing. One caution note: verify the almostunified config never mis-merges galosphere:*silver* as c:ingots/silver (CLAUDE.md galosphere-palladium gotcha applies here).

## tide   [anchors: survival (1)]
- from: tide rare/biome-locked fish (e.g. tide:abyss_angler, void/nether catches) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: biome-locked trophy fish are natural luxury goods — a fisherman sells what an explorer needs for a quest, creating spontaneous trade without a mandate
- from: tide:abyss_angler (void-caught) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: void/abyss fish-as-arcane-reagent is conceptually interesting but the ars:imbuement motif (M-10) applies cleanly to minerals/essences — routing a whole fish through an enchanting apparatus is tonal silliness without a strong thematic argument. The economy anchor (M-09) is much more coherent.
- from: tide raw fish output (c:foods/raw_fish) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish scraps milled into bonemeal/fishmeal — a simple Create processing step that feeds Farmers Delight/MineColonies fertilizer chains; turns high-volume low-value catches into a Create-processed agricultural input
- REWORK: none — currently 1-anchor (survival); ACCEPT rows above add economy + create.

## better_lib   [anchors: support/library (1)]
- LEAVE — config/messaging API library; 0 blocks, 0 items, no methods. Nothing to route.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- from: cmpackagecouriers:cardboard_plane (carrying Create packages) | via: numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the cardboard courier physically moves goods between players' trading posts — the logistics arm of the economy pillar executing coin-denominated deliveries; the plane that carries the package advances the scarcity → economy loop
- from: cmpackagecouriers:cardboard_plane | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the plane is already built via create:cutting + create:deploying (both inbound); adding a sequenced-assembly keystone on top would be a depth tax on a utility item. The cutting+deploying path already anchors it in Create without over-engineering a delivery drone.
- OK — existing Create + aeronautics anchors are solid. M-08 economy row above extends to economy pillar, completing three anchors for the pack's logistics flagship concept.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill | via: survival pressure tie | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is a seasonal-reagent motif requiring a material input, not a behavior link. The treadmill produces SU, not a material; there is no phase-3-deliverable material pathway to survival.
- from: createtreadmill:treadmill (player-powered SU) | via: create:mechanical_crafting | to: create (depth gating) | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: M-05 is a native-method gate (a mod's flagship built in its own machine gated on Create parts); the treadmill is already a Create kinetic source and its recipe is vanilla-level. Applying M-05 here would gate an early-tier SU source behind mid-game Create parts, violating the "never gate a basic component behind a complex recipe" guardrail.
- from: createtreadmill:maid_motor Soul Orb intake | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the Maid Motor consumes touhou_little_maid Soul Orbs/Photos, not Occultism spirit-fire outputs — the two items are different soul-type tokens with no thematic equivalence; conflating them is a forced cross-mod mash.
- LEAVE — single Create-anchor kinetic source with no material outputs and no coherent second-pillar routing that survives red-teaming. The TLM crossover is curated flavor, not a loop system. Stays 1-anchor.

== CHUNK COMPLETE ==
