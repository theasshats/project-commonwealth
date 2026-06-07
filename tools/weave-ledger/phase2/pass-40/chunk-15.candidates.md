# Phase 2 candidates — chunk-15 (context-fed)

## direct_chute   [anchors: create (1)]

All existing rows are REJECT — the consensus is unanimous: direct_chute is a single-block zinc logistics conduit with no items of its own, no loot, and no method surface to pull through. Every attempted aeronautics/M-31/M-04/M-20 edge was correctly rejected. The dossier itself says "leave."

One avenue not yet explicitly challenged: whether M-28 (colony route) could apply if MineColonies requested chutes as bulk infrastructure items. That angle was tried (REJECT: colony logistics huts have no real chute demand, and the mod is a QoL fix, not a traded good). Concur.

LEAVE — zero-surface single-item logistics block; no motif fits without forcing; all routes already correctly rejected.

## railways   [anchors: create, aeronautics (2)]

Existing rows cover: M-04 locometal crushing (ACCEPT consensus), M-31 bulk logistics (ACCEPT), M-33 conductor service (split), M-30 regional brass scarcity (ACCEPT×1), M-34 loot-seed (ACCEPT×1), M-37 MineColonies University research gate on conductor automation (ACCEPT×1). The mod is already at ≥2 anchors.

Missing angle the rows don't capture cleanly: the M-37 University-gate candidate exists but was only proposed once. More worth challenging is the M-33 candidate — the existing row frames the conductor *entity* as the service, but the conductor entity is an NPC, not a player. There's a subtler M-33 read: a **railways specialist player** offers cargo-route *service* (builds/operates the rail network for other players' freight) — player labor, not NPC behavior. This distinction matters.

- CHALLENGE | from: railways:conductor entity | via: aeronautics operational use | to: economy | motif: M-33 | verdict: REJECT | hook: the existing M-33 row grounds "service" in the conductor *entity* (an NPC/automation block), not player labor — M-33 strictly requires a player performing work on another's materials; a deployed conductor NPC is automation, not a service. The row should be re-framed as a *player*-specialist running trains for others, not as the entity itself.
- NEW | from: railways:benchcart + locometal build demand | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding locometal salvage and benchcart parts into derailed-train-wreck structure loot (Towns & Towers / Formations derelict sites) so exploring combat players surface rail components — the combat-supply loop feeds the rail specialist rather than them being purely self-sufficient.

OK — existing rows (M-04, M-31, M-30, M-37) are otherwise sound.

## endrem   [anchors: survival (1)]

Existing rows: very rich. Accepted: M-11 undead_eye/occultism ritual (30×), M-10 nether_eye/Ars apparatus, M-34 loot-seed into boss chests, M-15 eyes as boss-key/loot-seed, M-02 guardian_eye mob-drop, M-19 haunting a soul/nether eye, M-34 trade economy. Rejected: M-06 Create sequenced_assembly for eyes (near-unanimous, trivializes gate), M-30 regional scarcity.

What's missing or worth a nuanced challenge:

The M-19 haunting candidates (create:haunting for nether_eye, rogue_eye, lost_eye) are each at ACCEPT×1 with no challenge. The create:haunting bridge (M-19) is the pack's native Create→occult seam. Applying it specifically to the *lost_eye* (a "lost soul" themed eye) is the cleanest single pick — no other eye is as thematically matched to soul-fire transmutation. The existing M-19 rows scatter across multiple eyes; a focused pick on exactly one is missing.

Also missing: a CHALLENGE to the over-proliferation of magic routes. The rows propose M-11 (occultism ritual), M-10 (Ars apparatus), M-19 (haunting), and M-02 all as separate ACCEPT entries for the magic anchor. That's four different magic methods on a 1-anchor mod. Phase 3 should pick *two at most* (one Ars, one Occultism or haunting), not author all four. The existing accepted rows don't record this over-routing risk.

- NEW | from: endrem:lost_eye | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the lost_eye is the "wandering soul" variant — running a base ender-blank through Create's soul-fire haunting to yield it is the most coherent single M-19 pick; keeps the Create spine involved without trivializing the exploration gate.
- CHALLENGE | from: endrem eyes (all magic routes together) | via: ars_nouveau:enchanting_apparatus + occultism:ritual + create:haunting + spirit_fire | to: magic | motif: M-10 | verdict: REJECT | hook: four parallel magic routes for a mod already accepted at M-11 + M-10 is over-routing; Phase 3 should author exactly two (one Ars path for one themed eye, one Occultism path for another) — the per-eye accepted rows are individually sound but their *sum* is too many seams on a single mod; flag for Gate-2 pruning.

## sable   [anchors: support (1)]

Zero items, zero blocks, zero loot, no registered recipe types. Pure physics-engine backend library. No rows in CANDIDATES.tsv. Dossier: leave.

LEAVE — physics-engine library with no content surface; the weaving happens in mods that build on it (Aeronautics).

## gamediscs   [anchors: survival (1)]

Existing rows: all REJECT. Consensus rejects M-05 (processor/console too light), M-06 (novelty toy, not endgame), M-34 (disc-from-skeleton-kill is cosmetic with no resource value), M-02 (discs are cosmetic collectibles), M-12 (forced), M-33 (no labor service here). Dossier says leave; all passes agree.

One angle not yet challenged directly: can the *skeleton-kills-mob disc-drop mechanic* feed the survival pressure loop as a de facto M-34 *combat-supply* item (not the disc itself as a commodity, but the mechanic as "you need a skeleton to kill a specific mob → skeleton farming is a skill")? Power-read: the disc is purely cosmetic with zero in-recipe value — a skeleton farmer can't trade discs for anything. The survival anchor is only cosmetic novelty, not genuine pressure/supply. Concur with all REJECT verdicts.

LEAVE — pure novelty toy; no material cross-system surface; all rejections sound.

## multipiston   [anchors: support (1)]

Zero items (one block, but it's a MineColonies internal tool not surfaced to players), no recipe types, no loot. The single REJECT row correctly identifies no player-facing surface. Dossier: leave.

LEAVE — MineColonies/Structurize internal utility block with no player-accessible item or method surface.

## byzantine   [anchors: survival (1)]

Existing rows: M-28 colony route ACCEPT (4×+2×), M-30 regional-scarcity gate ACCEPT×1 (colony building schematics pull region-locked Domum/stone materials). All other rows rejected.

The M-30 angle is interesting and underdeveloped. Byzantine-style schematics frequently specify ornate stone types (end stone bricks, polished deepslate, basalt) via Domum Ornamentum. If those stone types are region-locked by GTMOGS ore-gen or dimension-lock (deepslate biomes, Nether basalt), then a Byzantine colony building *naturally* creates regional demand — a player in a basalt-poor region must trade for the basalt their dome needs. This is a real M-30 loop-advance edge, not a forced one.

- NEW | from: byzantine schematic material demand (deepslate/basalt/end-stone via Domum Ornamentum) | via: config-tie (MineColonies builder requests region-locked stone types specified in Byzantine schematics) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Byzantine dome's Builder requests polished deepslate or basalt that not every server region has — the colony's architectural ambition pulls regional scarcity into the trade loop without authoring a single recipe.

OK — M-28 is the primary anchor; M-30 config-tie above adds depth without forcing.

## modulargolems   [anchors: create (1)]

Existing rows: rich. Accepted: M-15 boss-drop metal gates best golem bodies (strong consensus), M-10 arcane core slot via Ars imbuement (split), M-02 Cataclysm/Ice&Fire boss metals as body material (strong), M-33 golem specialist service-for-hire, M-34 combat-route supply. Rejected: M-06 sequenced_assembly (already inbound), M-04 entity crush, M-11 spirit_fire on metal bodies (tone), M-28 no golem hut, M-24 golems-as-drivetrain-parts.

What's missing: A subtler M-29 (cross-route dependency) angle. The existing M-29 ACCEPT row proposes a magic reagent (source_gem or otherstone) as a golem-core upgrade that creates dependency between golemancer and magic specialist. But it's not fully articulated: specifically, the `modulargolems:golem_add_slot` recipe requiring `occultengineering:spirit_solution` (the reserved occult intermediate from reagent-ownership) is a cleaner pick than raw source_gem — it pulls the *already-reserved reagent* rather than risking double-spend on source_gem. One ACCEPT row already proposes spirit_solution but it's a minority (1×). This is a sharper pick worth highlighting.

Also missing: The M-37 (research gate) angle. Golems are automation-tier content; unlocking *golem assembly* (or at minimum the highest-tier golem metals slot) via MineColonies University research would make golems a colony-progression reward — a player builds a colony to unlock the automation that reduces manual labor, which is the right loop direction.

- NEW | from: occultengineering:spirit_solution | via: modulargolems:golem_add_slot | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the reserved occult intermediate (spirit_solution) is the perfect upgrade catalyst for a golem's highest slot — the engineer needs the occultist's soul-fluid to animate the construct beyond its metal ceiling; neither specialist is self-sufficient.
- NEW | from: modulargolems golem assembly (high-tier) | via: minecolonies research gate (University) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: unlocking top-tier golem body templates via MineColonies University research makes colony-building a prerequisite for the automation tier — you built the town so the town teaches you to build better servants; the knowledge isn't tradeable, only the golems it produces.
- CHALLENGE | from: ars_nouveau:source_gem | via: modulargolems:golem_assemble or golem_replace_part | to: magic | motif: M-10 | verdict: REJECT | hook: source_gem is the reserved universal magic currency (reagent-ownership); using it as a per-part golem-core input risks depleting the magic economy's medium — prefer spirit_solution (already reserved as the occult intermediate, above) so the golem-magic seam doesn't double-spend the currency slot.

## sparsestructures   [anchors: support (1)]

Zero items, zero blocks, config-only worldgen tuning. No rows in CANDIDATES.tsv. Dossier: leave.

LEAVE — config-only worldgen mod with no item/block/method surface; structure spacing is infrastructure, not weavable content.

## deeperdarker   [anchors: survival (1)]

Existing rows: very rich. Accepted: M-11 soul_dust/soul_crystal → occultism spirit_fire (38×), M-04 gloomslate/sculk_stone crushing (21×+13×), M-10 heart_of_the_deep → Ars imbuement (11×), M-02 heart_of_the_deep as mob-drop reagent (11×), M-15 heart_of_the_deep as boss-key for Create/magic recipe, M-04/M-02 warden_carapace, M-34 Otherside combat-supply economy, M-07 crystallized_amber as attunement catalyst (2×).

What's missing or worth a sharper angle:

The M-07 crystallized_amber candidate (2×) is underdeveloped. Amber sits between reagent and catalyst — it's not the *material* being converted (M-10/M-11) but an *anti-arbitrage catalyst* that gates a conversion. The existing rows propose it as M-07 (attunement catalyst) or M-10 (imbuement). The cleaner pick: amber as the *catalyst in an M-01 Ars source conversion* — a dimension-locked catalyst that prevents free source-gem arbitrage out of the Otherside. This is a sharper motif-routing than the generic M-10 read.

Missing altogether: An M-31 (logistics-required bulk good) angle. Gloomslate and sculk-stone blocks are generated in enormous quantities in the Otherside — a builder who wants them at scale needs to haul bulk across a dimension portal. Dimension-portal logistics at scale is *exactly* the aeronautics/logistics arm's role.

- NEW | from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement (as anti-arbitrage catalyst in source conversion, not the reactant) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is the Otherside's attunement key — it gates a source-conversion so that Otherside magic stays Otherside-locked; pure dimension-lock enforced by the same motif as galosphere's shards, not a raw M-10 imbuement input.
- NEW | from: deeperdarker gloomslate / sculk_stone (bulk dimension-locked building material) | via: aeronautics/logistics (dimension portal + cargo ship) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: moving gloomslate out of the Otherside at build scale requires an organized expedition — airship cargo runs to a portal staging area is the only way to ship a full palace's worth of sculk-stone; the bulk need makes logistics matter.

## createaddition   [anchors: create (1)]

Existing rows: very rich. Accepted: M-17 tesla_coil → Iron's Spellbooks gear charging (29×), M-12 seed_oil/bioethanol crop fuel (12×), M-13 bioethanol as aeronautics propellant (14×), M-29 electrum requiring occultism silver (cross-route), M-24 rolling-mill wire → aeronautics wiring harness (split), M-28 biomass → colony composting, M-26 seed_oil consumption sink. Rejected: M-08 electrum coin (split, 5 reject / 4 accept), M-10 electrum → Ars infusion, M-23 electrum hull panels (2×).

The sharpest missing angle: The M-08 electrum candidate is genuinely split (5R/4A) and the split deserves a reasoned challenge. Electrum is createaddition's *internal conductor material* — wires, rods, the rolling-mill's primary product. If electrum is minted into coin, the electrician loses their primary production material to the currency market (price pressure on the coin medium *and* the production input simultaneously). This is the double-spend risk M-08's own framing warns against for materials that are both production inputs and coin candidates. The cleaner M-08 candidate is tin (create_ironworks) which is a *dedicated scarce ore*, not a production-spine alloy.

Also: the M-12 crop-fuel rows correctly accept seed_oil/bioethanol as a farming→energy bridge, but none of the rows articulate that this creates an *agricultural demand* from non-farmers (a magic specialist who runs a tesla coil to charge their focus *needs* the farmer's oil output) — that's the loop-advance read (survival pressure → farming production → energy → magic).

- CHALLENGE | from: createaddition:electrum_ingot | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: electrum is the rolling-mill's primary conductor (wires, rods throughout the FE tier) — minting it into coin creates a dual-role conflict where the same alloy is both production feedstock and currency, which erodes both; tin (create_ironworks) is the pack's dedicated coin-metal candidate; electrum should stay an industrial alloy, not a coin.
- NEW | from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning → FE → createaddition:charging (tesla coil powers magic gear) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the farming surplus that feeds the tesla coil is what keeps the magic specialist's focus charged — agriculture (survival pillar) drives the energy spine (Create) that powers magic; a three-node loop-advance edge rarely articulated as a chain.

## cloth_config   [anchors: support (1)]

Library-only, no items, no blocks, no loot. No rows in CANDIDATES.tsv. Dossier: leave.

LEAVE — config-screen API library; no content surface.

## ferritecore   [anchors: support (1)]

Perf-only mod, zero items, zero blocks. No rows in CANDIDATES.tsv. Dossier: leave.

LEAVE — memory-optimization library; sanctioned perf anchor, no content surface to weave.

## mowziesmobs   [anchors: survival (1)]

Existing rows: rich. Accepted: M-15 ice_crystal as Create boss-key gate (19×), M-06 ice_crystal/earthrend sequenced_assembly (13×), M-22 elokosa_paw lunar-reagent (10×), M-34 combat-route supply (11×), M-11 artifacts → spirit_fire magic transmutation (various), M-10 ice_crystal/sol_visage → Ars imbuement, M-02 boss drops as magic-reagent sinks. Rejected: M-06 for eye-trivializing risk, M-08 bounty.

The M-22 elokosa_paw angle (10×) is the strongest underdeveloped angle. The paw variants are literally named for moon phases (crescent, gibbous, full, half, closed). This is the cleanest M-22 in the pack — a mob whose *drops are phase-labeled*. What's not yet articulated: the *method routing*. Existing rows say "Ars imbuement or occultism:ritual as moon-gated reagent" generically. The sharper routing: elokosa_paw_full → occultism:ritual (the full-moon ritual context matches Occultism's lunar ritual hooks), while elokosa_paw_crescent → ars_nouveau:imbuement (the crescent is a waning-magic catalyst). Two distinct paws, two distinct method routings, one M-22 motif — this level of specificity is missing.

Also missing: the Grottol (ore-eating mob that drops diamonds) has an M-32 (byproduct → input) angle that nobody proposed. The Grottol eats ores and emits diamonds — its *waste byproduct* (excess crushed stone / ore fragments it doesn't digest) could feed the Create crushing chain as a byproduct. Very light edge but untried.

- NEW | from: mowziesmobs:elokosa_paw_full | via: occultism:ritual (full-moon ritual context) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a full-moon paw placed in a ritual circle amplifies the occultist's lunar working — the Elokosa's body is a phase-clock, so only the right paw unlocks the right night's ritual; demands the player track the moon.
- NEW | from: mowziesmobs:elokosa_paw_crescent | via: ars_nouveau:imbuement (crescent as waning-moon catalyst) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the crescent paw is the Ars catalyst for a waning-moon imbuement — the moth-spirit's waning phase channels diminishment magic; distinct paw, distinct method, same M-22 motif covering both Ars and Occultism.
- CHALLENGE | from: mowziesmobs:earthrend_gauntlet | via: create:sequenced_assembly (boss drop as M-06 keystone) | to: create | motif: M-06 | verdict: REJECT | hook: the earthrend gauntlet is already a finished unbreakable weapon — using it *as a component input* in a sequenced assembly chain destroys a rare artifact to make something else; the correct motif is M-15 (boss drop as a gate key/prerequisite, not consumed), not M-06 (which requires the item to be an *intermediate* in the chain); several accepted M-06 rows for this artifact are motif-mislabeled.

## born_in_chaos_v1   [anchors: survival (1)]

Existing rows: Accepted: M-03 dark_metal_deposit → create:crushing (25×), M-11 bundle_of_bones → occultism:spirit_fire (25×), M-15 boss drops as Create gate (5×), M-34 combat-supply economy (5×), M-08 dark_metal coin (split, 3× accept), M-16 bagof_candy seasonal (2× accept), M-19 dark_metal → create:haunting (1×). Rejected: M-10 dark_metal → Ars imbuement (3× reject), M-04 deco stone crushing, M-15 boss weapon as gate (split).

Missing angle: The M-16 bagof_candy seasonal (Oct 25–Nov 5) rows accept it as a season-gated Ars imbuement catalyst, but none of the rows articulate the *consumption sink* (M-26) aspect: candy used as fuel/reagent in a limited seasonal window creates a stockpile-or-miss demand dynamic that feeds the economy. A player who stockpiles candy during the event window can trade it year-round as a seasonal reagent — this is the M-35 (maturation/aging) adjacent or M-26 (consumption sink) read, not just M-16.

Also: The M-08 dark_metal coin split (3A/1R) deserves a cleaner verdict. Dark metal is fought-for, regional-adjacent (spawns via 50 biome-modifiers on specific hostile biomes), and Create-processable — exactly the M-08 profile. The single REJECT was "flooding the mint" concern; but dark metal drops at 9–16% from specific mobs (not trivially renewable), so the flooding concern is overstated. The ACCEPT verdict is correct.

- NEW | from: born_in_chaos_v1:bagof_candy | via: extradelight:evaporator or create:mixing (candy dissolved into a seasonal sweetness concentrate) | to: create | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: candy stockpiled during the haunting window is the only off-season source of the festive sweetness concentrate — the seasonal combat event creates a year-round consumption sink where demand persists after the source stops; stockpilers become seasonal traders.
- CHALLENGE | from: born_in_chaos_v1:dark_metal (processed ingot) | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: the existing M-08 REJECT argues flooding concern, but dark metal's drop rate (~9–16% from specific hostile mobs, not trivially farmable) and biome-modifier spawn distribution make it genuinely scarce and regional — the REJECT is overcautious; this is a clean M-08 candidate; recommend overturning the single reject.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

All existing rows REJECT. Consensus: the mod is a pure cosmetic color-permutation of aeronautics parts; every attempt to route through Create:mixing/toolbox_dyeing/M-04/M-20/M-23/M-10/Ars dye correctly rejected. Dossier says leave.

The one ACCEPT minority (1×) for create:toolbox_dyeing M-20 was: "routing the dye step through Create's toolbox-dyeing method tethers the cosmetic palette to the Create engine." Power-read: this is gilding — the offhand-dye mechanic is simpler and intentionally so; requiring a toolbox step for a cosmetic is a friction increase with no gameplay reward. Concur with rejection.

The M-28 colony-request angle (1× ACCEPT: shipwright colonist orders dyed levitite for fleet color-coding) is the most interesting minority. It's not a recipe weave but a config/datapack possibility — if a MineColonies Shipwright hut (or any relevant hut) could be configured to request a set of dyed levitite as a building supply, the cosmetic layer gets a demand mechanism. However, there is no Shipwright hut in base MineColonies, so this is speculative infrastructure.

LEAVE — cosmetic color-permutation of aeronautics parts with no method surface; the dye mechanic is intentionally hand-craft simple; all rejections sound.

## createfurnitureseats   [anchors: support + aeronautics (2)]

Zero items, zero blocks, pure behavior-bridge compat mod. Two prior REJECT rows confirm no surface. Already at 2 anchors (support + aeronautics via sittable furniture on ships). Dossier: leave.

LEAVE — zero-item behavior compat mod already at 2 anchors; no material surface.

## create_ironworks   [anchors: create (1)]

Existing rows: rich. Accepted: M-08 tin_ingot/crushed_tin → numismatics mint (23×+8×+3×+2×), M-23 steel_plate → aeronautics hull (18×+16×), M-24 bronze → aeronautics propeller/drivetrain (11×+5×+4×), M-28 steel via MineColonies blacksmith/colony equipment (2×+2×), M-30 tin regional scarcity (2×), M-04 bronze/tin deco storage blocks crush (1×). Rejected: M-10 steel/tin → Ars (unanimous), M-06 steel sequenced_assembly (3×), M-08 steel coin (split, concern of flooding).

The M-08 steel coin row is a useful challenge target. Steel is create_ironworks' *endgame alloy* (near-Netherite, Smithing-upgradeable). Minting it as a high-denomination coin on top of also minting tin and bronze risks coin denominations losing their scarcity hierarchy — if everything can be minted, the scarcity signal breaks. The existing reject (1×) makes this point. However: the pack only needs *one* coin-metal per tier. Tin is the right everyday-tier coin (regional ore, processable to coin). Bronze is mid-tier. Steel should stay an alloy, not a coin, to avoid over-monetizing the production chain.

Missing: The M-30 (regional scarcity) rows for tin (2×) are correctly accepted but undersell the *structural* role. Tin is the *only* new regional ore create_ironworks adds. If GTMOGS places tin in specific biomes only, then whoever settles in a tin-rich biome controls the bronze *and* steel supply chains entirely — this is the scarcity foundation's strongest expression in the Create spine. The existing rows note this but don't propose a distinct weave action; the action is: tag tin's biome distribution explicitly in GTMOGS config so its regional lock is deliberate.

- CHALLENGE | from: create_ironworks:steel_ingot (endgame alloy) | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: minting steel into coin on top of tin and bronze over-populates the coin-denominations and erodes the scarcity signal — one alloy (tin: scarce regional ore → processed → coin) is the pack's M-08 seam; steel should remain the endgame alloy, not also a currency; the existing M-08 steel REJECT is correct.
- NEW | from: create_ironworks:tin_ore (biome-distributed regional ore via 3 biome-modifiers) | via: config-tie (GTMOGS ore-gen + numismatics mint path) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: tin's biome-modifier distribution already seeds regional lock-in — explicitly aligning GTMOGS to concentrate tin in specific biomes makes the tin-miner's region the pack's bronze/steel bottleneck; the regional scarcity foundation expressed through the Create metallurgy spine.










