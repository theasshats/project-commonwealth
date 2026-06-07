# Phase 2 candidates — chunk-12 (context-fed)

## createadditionallogistics   [anchors: create, aeronautics (2)]

Existing rows cover the main edges (M-24 flexible-shaft drivetrain, M-20 andesite-cog deploy-upgrade, M-28 lazy-shaft colony bulk route). The dossier itself says "≥2 pillars — leave." One gap: the loot=yes flag on the jar is unaddressed — the mod ships loot tables. These are almost certainly seat/dye drop tables for the riding-seat variants, not weave-relevant structure loot. No coherent loot-seed candidate opens up from a kinetics-QoL mod.

CHALLENGE | from: createadditionallogistics lazy shafts/cogwheels (bulk infrastructure components) | via: minecolonies colony route | to: economy | motif: M-28 | verdict: REJECT | hook: the accepted M-28 row is weak — lazy shafts are a server-performance block (no per-block-entity overhead), not a colony-exclusive or colony-prioritized good; the colony has no semantic reason to prefer them over vanilla shafts, so the "colony produces them cheaply at scale" framing is arbitrary; M-28 requires the colony route to either be cheaper/faster for basics or produce locked exclusives — lazy shafts are neither relative to vanilla Create shafts.

OK — remaining existing rows sufficient (mod is 2-anchor; aeronautics drivetrain M-24 via flexible shafts is the load-bearing weave).

## clumps   [anchors: support (performance)]

LEAVE — zero items, zero recipe-types, zero loot; pure XP-orb-merging behavior mod. No content surface to weave.

## betterdungeons   [anchors: survival (1)]

Existing rows: M-08 coin loot-seed (strong consensus ACCEPT), M-02 magic reagent loot-seed (strong consensus ACCEPT), M-34 Spider Cave combat-supply (ACCEPT), M-15 boss-key loot-seed (contested, split). The M-30 biome-typed-loot-seed row (1 ACCEPT) captures a real nuance. One gap in the existing coverage: the three structure types (Catacombs / Undead Fortress / Spider Cave) are biome-differentiated, but no row has articulated a clean M-30 proposal that would make a *single specific reagent per structure-type* the region-locked driver — most M-30 rows remain vague. Also: existing M-15 rows are disputed on the basis that dungeons have no boss guardian (just spawners), which is a valid challenge worth recording.

CHALLENGE | from: betterdungeons loot tables (Catacombs / Undead Fortress / Spider Cave boss chest) | via: loot-seed | to: create | motif: M-15 | verdict: REJECT | hook: M-15 requires a *boss drop* — an item dropped by a boss encounter — as the gate key; betterdungeons has no guardian boss fight, only spawner-density rooms and chest rewards; seeding a key into a dungeon chest is a treasure-find, not a boss-drop, and dilutes the M-15 framing (a player can cherry-pick the chest without clearing the dungeon); the correct motif for a dungeon-chest gate item is M-02 (mob-drop reagent sink) or an unregistered "exploration-gate" motif — not M-15.

NEW | from: betterdungeons Spider Cave / Catacombs / Undead Fortress (structure-type-specific loot tables) | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: seed one distinct scarce reagent per structure type and biome zone — e.g. a venomous silk thread (Spider Cave, jungle/forest) and a bone-dust fragment (Catacombs, plains/desert) — so the dungeon type you can *reach from your region* determines which reagent your region can supply; the structure-biome pairing becomes a regional-scarcity signal feeding the trade loop.

## create_factory   [anchors: create, survival (2)]

Existing rows are dense: M-28 colony confectionery supply (ACCEPT), M-26 diet sugar-group demand (ACCEPT), M-16 seasonal berry gate (ACCEPT), M-35 maturation via honey-waffle aging or jam fermentation (ACCEPT), M-32 cream/jam as byproduct feedstock (ACCEPT). The dossier's "2nd-anchor candidate" note still cites M-09 (retired) as the obvious economy link — that stale framing hasn't been explicitly challenged in the existing rows.

CHALLENGE | from: create_factory assembled sweets (economy link via numismatics sell) | via: bare sell (dossier 2nd-anchor candidate) | to: economy | motif: M-09 | verdict: REJECT | hook: the dossier's own 2nd-anchor candidate says "M-09 sell" which is the retired motif — "sellable" is the ambient endpoint, not a weave; the actual economy weave for create_factory is M-28 (colony confectionery demand) and M-26 (diet consumption), both already ACCEPTed; no bare-sell link should be carried forward into Phase 3.

NEW | from: create_factory:cream_bucket / sweet_berries_jam fluid (berry-chain outputs) | via: Serene Seasons config-tie (sweet berries are summer/fall biome-seasonal; cream requires milk from animals that produce less in winter) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the confectionery line runs hot in summer and dries up in winter — a jam stockpiler and a confectioner become complementary seasonal specialists; the M-16 gate here is a *supply-side* constraint on an existing Create chain, not an invented restriction.

## direct_chute   [anchors: create (1)]

Existing rows are unanimous REJECTs across all proposed weaves (M-20, M-24, M-23, M-31, M-04 all rejected). Dossier says LEAVE.

LEAVE — single zinc logistics conduit block; no item transform, no loot tables (loot=yes in jar is likely the chute's own block-drop, not structure loot); all weave angles lead to forced edges with no accepted motif. Correct as-is.

## sable_sa_compat   [anchors: support (compat)]

No existing CANDIDATES.tsv rows.

LEAVE — zero items, zero blocks, zero recipe-types; pure behavior patch bridging Create: Stuff 'N Additions to Sable physics. No content surface.

## nochatreports   [anchors: support (privacy/QoL)]

No existing CANDIDATES.tsv rows.

LEAVE — zero items, zero blocks, networking/privacy utility only. No content surface.

## woodworks   [anchors: survival (1)]

Existing rows: M-04 crush-recycle (strong consensus ACCEPT), M-10 bookshelf → Ars enchanting apparatus bonus (ACCEPT, 3:1), M-05 Sawmill gated on Create parts (ACCEPT), M-28 colony Library/Warehouse demand (ACCEPT). These are strong and cover the main linkages. One gap: the `woodworks:sawmill` recipe-type is a connective method that can absorb *modded-wood* logs from northstar/samurai/other mods — this is a genuine M-12 "route foreign material through this method" that no existing row cleanly articulates as a NEW weave (most M-12 rows are REJECTed as "cosmetic overlap with create:cutting," conflating two distinct things: overlap with Create's saw is weak, but absorbing *foreign mod logs into Woodworks' own method* is a real processing-chain pull). Also: the M-10 row for bookshelves is contested (3 ACCEPT, 1 REJECT) but the Accept is strong — the enchanting apparatus genuinely counts bookshelves. Worth noting the power-tier: this is an everyday/ambient weave (no cost, just placement adjacency), not a recipe-routing.

NEW | from: modded logs (northstar:argyre_log, northstar:calorian_log, samurai_dynasty: red_maple_log, or any foreign wood added by other installed mods) | via: woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic logs from Northstar or other mods run through the Woodworks Sawmill for their plank/slab/boards variants — one method absorbs every foreign wood the pack adds without duplicating Create's saw, weaving the mod-added wood palette into a single cutting web.

CHALLENGE | from: woodworks:*_bookshelf variants | via: ars_nouveau:enchanting_apparatus (bookshelf-bonus mechanic) | to: magic | motif: M-10 | verdict: ACCEPT (uphold, but clarify power-tier) | hook: the existing row is valid but ambiguous on delivery — this is NOT a recipe weave; the link is ambient placement adjacency (Ars counts bookshelves in radius for Source bonus), so Phase 3 delivery is a *config or documentation note*, not a KubeJS recipe; the row should be kept but tagged as "delivery: config/placement" to avoid Phase 3 authoring a recipe that doesn't exist.

## dynamictreesplus   [anchors: survival (1)]

Existing rows: M-12 saguaro milling (35 ACCEPTs — settled), M-12 mushroom cap cutting/milling (25 ACCEPTs — settled), M-16 saguaro seasonal gate (ACCEPT), M-30 desert-biome scarcity (ACCEPT), M-11 red mushroom → spirit fire (contested, mostly REJECT). One genuine gap: the cactus_branch as a milling byproduct (green dye + cactus dust) appears in one ACCEPT row but was never fully evaluated — it's distinct from the saguaro_fruit milling and worth explicit treatment. The M-16+M-22 combo for saguaro (bonus yield during Enhanced Celestials Harvest Moon) is a creative subtlety with only 1 ACCEPT and no challenge.

CHALLENGE | from: dynamictreesplus:red_mushroom_cap / brown_mushroom_cap | via: occultism:spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: the recurring M-11 proposal for mushroom caps is weak because these are vanilla-equivalent bulk organics (every player finds red/brown mushrooms; DT+ just makes them fall in caps); M-11 is the "mob-drop or isolated drop given a magic use" motif — mushroom caps are not isolated or scarce; accepting this cheapens spirit_fire transmutation by routing a commodity into it; the existing REJECT consensus (3:1) is correct; challenge upheld.

NEW | from: dynamictreesplus:cactus_branch (bulk stem byproduct of cactus felling — currently an inert drop) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cactus branches fall in bulk when a saguaro or pillar cactus is felled; milling them yields green dye powder plus a cactus fiber — a processing-chain pull on an item that currently has no recipe, folding the cactus byproduct into Create's milling web without touching the fruit's own milling row.

## cmpackagepipebomb   [anchors: create (1)]

Existing rows are unanimous REJECTs. Dossier says LEAVE.

LEAVE — tiny PvP novelty gag with no items that route coherently through any accepted motif; all proposals tried (M-29, M-06, M-20, M-34, M-24) and rejected; the one ACCEPT (nitropowder-upgraded pipebomb via M-29) is imaginative but crosses the "forcing edges onto a gag item" guardrail. The dossier judgment is correct.

## tipsmod   [anchors: support (QoL/client)]

No existing CANDIDATES.tsv rows.

LEAVE — zero items, zero blocks, zero recipe-types; loading-screen tip displayer. No content surface.

## touhou_little_maid   [anchors: survival (1)]

Existing rows are extremely dense. Strong coverage of: M-05 (altar + magic reagent / boss-drop, many ACCEPTs), M-15 (boss-key altar gate, multiple ACCEPTs), M-22 (lunar broom craft, 1 ACCEPT), M-33 (labor service, 1-2 ACCEPTs), M-26 (power-point upkeep consumption, ACCEPT), M-37 (MineColonies research unlocks maid task modes, 1 ACCEPT), M-34 (power-point loot-seed in boss/dungeon loot, ACCEPT). Two gaps worth exploring: (1) the M-37 colony-research row is mechanically dubious — TLM has no MineColonies integration hook; (2) the `touhou_little_maid:drown_protect_bauble` (a Curios bauble in the jar) is completely uncovered.

CHALLENGE | from: touhou_little_maid maid automation (farming/fishing/ranching tasks) | via: MineColonies research gate — unlock highest-tier maid task modes only after a specific MineColonies research | to: economy | motif: M-37 | verdict: REJECT | hook: M-37 requires a recipe unlocked by research that an item can't carry (knowledge isn't tradeable, only its product is); TLM task modes are entity-level AI settings toggled in the maid GUI, not recipe-gated outputs; there is no MineColonies API hook into TLM's task system; this would require custom KubeJS/event code with no established method, making it a mechanism-pending idea, not an actionable Phase-3 weave against existing methods.

NEW | from: touhou_little_maid:drown_protect_bauble (a Curios-slot accessory in the TLM jar — waterbreathing/drowning protection) | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew (infuse the bauble with a water-affinity reagent as a crafting prerequisite) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a shrine-maiden drowning-ward sits in a Curios slot — requiring an arcane infusion (water-affinity source or an Iron's aquatic scroll) to complete the bauble makes the magic pillar the gatekeeper for a combat-utility accessory; shrines near oceans need the mage's blessing.

NEW | from: touhou_little_maid power-point bottles (altar operating currency; fairy-drop / village-loot sourced) | via: create:haunting (soul-fire transmutation — a spent power-point bottle through Create's haunting process yields a soul-residue intermediate, the "burned offering" of expended shrine energy) | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: a spent power-point bottle passed through Create's soul-fire doesn't vanish — it leaves a faint soul residue that the mage can use as a low-grade spirit reagent; the shrine's waste becomes the occult's feedstock, linking TLM's consumption loop to the Create→magic seam at everyday cost.

## zeta   [anchors: support (library)]

No existing CANDIDATES.tsv rows.

LEAVE — pure module-loader framework (Quark's backbone); zero items, zero recipe-types, zero loot.

## curios   [anchors: support (library)]

No existing CANDIDATES.tsv rows.

LEAVE — pure equipment-slot API framework; zero items of its own. Its weave value is enabling other mods' accessories (Ars Nouveau rings, Iron's Spellbooks amulets) to exist — that linkage belongs to those mods' dossiers, not here.

## bountiful   [anchors: economy (1)]

Existing rows are very dense. Strong coverage of: M-08 (coin payout — strong ACCEPT, contested by NPC-faucet concern), M-34 (kill/boss-drop objectives), M-16 (seasonal crop objectives), M-29 (cross-route dependency via objective pool), M-22 (blood-moon Decree), M-37 (colony-research gated higher Decree tiers), M-28 (colony building-material objectives). One important structural gap: nobody has challenged the M-08 coin-payout concern systematically. Also: the Decree-tier architecture row (ACCEPT, 1) is a genuinely useful structural framing but competes with many narrower rows saying the same thing in pieces.

CHALLENGE | from: bountiful:bounty reward pool → numismatics coin payout | via: config (reward = cog/spur) | to: economy | motif: M-08 | verdict: ACCEPT (uphold, with constraint) | hook: the NPC-faucet concern raised in one REJECT row is real but not fatal — M-08 reframing is specifically "player-minted currency" (the settlement medium); bounty-board coin payout *is* a quasi-NPC faucet (coin appears from no player's wallet), but this is a pragmatic pack compromise: Bountiful is the pack's primary early-game demand mechanism, and denominating it in Numismatics ties the coin into the economy loop; the constraint is that payout quantities must be calibrated so coin supply doesn't inflate faster than the Create minting supply (M-08's scarcity-gate); uphold ACCEPT with a Phase-3 balance note.

NEW | from: bountiful:decree (objective pool) | via: config/datapack — structure Decree rarity tiers to mirror the pack's production depth: common tier = everyday farm/hunt/fish outputs; uncommon = Create-processed intermediates (iron sheets, brass ingots); rare = magic reagents (source gem, Occultism drops); epic = boss drops + endgame components | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: when Decree rarity tracks production-pillar depth, the bounty board's implicit progression ladder IS the loop — a new player fills common boards with food, scales to processed metals, then pays a magic specialist for reagents to clear rare boards; the cross-route dependency is built into the board's architecture, not into any single recipe.

NEW | from: bountiful:decree (kill-objective pool) | via: config/datapack — configure a Decree category whose objectives only appear (or pay at premium rates) during Enhanced Celestials blood moon or Harvest Moon events, requesting the night's mob drops | to: survival | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a blood-moon Decree lights up at dusk and pays triple coin for kills made during the event window — combat specialists who watch the moon earn premium; the board becomes a lunar-event demand spike, threading M-22 into the economy arm without a recipe.

## cloth_config   [anchors: support (library/API)]

No existing CANDIDATES.tsv rows.

LEAVE — config-screen rendering library; zero items, zero recipe-types, zero gameplay content.

## rhino   [anchors: support (library)]

No existing CANDIDATES.tsv rows.

LEAVE — JavaScript engine for KubeJS; zero items, zero recipe-types; pure runtime infrastructure.

## mru   [anchors: support (library/API)]

No existing CANDIDATES.tsv rows.

LEAVE — code-sharing utility library; zero items, zero gameplay content.

## owo   [anchors: support (library/API)]

No existing CANDIDATES.tsv rows.

LEAVE — UI/config/networking framework library; zero items, zero gameplay content.

## oceansdelight   [anchors: survival (1)]

Existing rows: M-02 fugu → Iron's alchemist cauldron brew (4 ACCEPTs — the cleanest 2nd-anchor route), M-26 diet demand / consumption (ACCEPT), M-34 combat-route supply via elder guardian farming (ACCEPT), M-28 colony cook-hut demand (ACCEPT), M-19 elder guardian haunting → soul reagent (1 ACCEPT), M-12 fugu brine-cure via create:mixing (1 ACCEPT). The dossier's own 2nd-anchor candidate lists M-09 (retired) as "STRONG" — that stale framing needs a challenge. Also: the M-30 regional-scarcity angle (ocean biome = coastal gating) has only one weak ACCEPT for a logistics framing (M-31), not a clean M-30 gate.

CHALLENGE | from: oceansdelight finished seafood dishes (elder_guardian_roll, fugu_slice) → economy via numismatics sale | via: bare sell | to: economy | motif: M-09 | verdict: REJECT | hook: the dossier calls this "STRONG [M-09]" but M-09 is the retired motif — "sellable luxury good → coin" is the ambient endpoint; the real economy weave for oceansdelight is M-34 (combat specialist farms guardian drops and trades them) and M-28 (colony cook-hut requests guardian soup), both already ACCEPTed; the bare-sell framing should not propagate to Phase 3.

NEW | from: oceansdelight elder guardian / guardian drops (tentacles, flesh) — ocean-monument-only mob drops requiring open-ocean access | via: loot-seed framing as M-30 regional gate — elder guardian drops are structurally biome-locked (ocean monument spawns in deep ocean only); inland players cannot farm them without a voyage | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean monuments don't exist in every region — a landlocked colony must trade with the coast specialist for guardian-derived seafood; the geographic lock is vanilla (ocean monument rarity) and oceansdelight's processing chain makes the drop worth trading; this is a genuine regional-scarcity gate, not a forced edge.

NEW | from: oceansdelight:fugu_slice (poisonous pufferfish flesh — the most dangerous ocean catch) | via: irons_spellbooks:alchemist_cauldron_brew (distill fugu venom into a toxin concentrate used in Iron's poison scrolls or poison-coating brews) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the sea's deadliest ingredient feeds the mage's cauldron — fugu flesh is already a risk-food (poison chance on consumption); routing it through Iron's alchemist cauldron for a venom distillate that enhances poison-affinity spells is thematically coherent and makes the ocean specialist the magic pillar's source of a rare toxin reagent; this is the cleanest existing ACCEPT (4-vote consensus) reframed with precise method and motif alignment.

== CHUNK COMPLETE ==
