# Phase 2 candidates — chunk-10

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — pure code-behavior mod (transient ping markers, no items, no recipes, no loot tables); genuine zero-content surface. Co-op QoL support role is its correct position; no coherent weave exists.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Swamp zombie's cursed growth is exactly the kind of tainted organic matter Occultism turns into spirit-reagents — haul it back from the swamp, burn it in spirit-fire.
- from: rottencreatures:frozen_rotten_flesh | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Frostbitten zombie's flesh already carries glacial attunement — imbuement refines it into a cold-magic reagent, one light step befitting an everyday drop.
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: soul-fire haunting transmutes the magma zombie's scorched flesh into a smoldering soul-infused byproduct — the Create→occult seam at its lightest.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:crush | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire) already covers the same reagent-sink role for corrupted_wart — a crush route would duplicate the sink; prefer the ritual/spirit method as the more thematically resonant delivery.
- from: rottencreatures mob heads (undead_miner_head etc.) | via: loot-seed / numismatics bounty | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: mob-head trophies from themed undead variants are bounty-board fodder — a player who hunts Frostbitten zombies turns in heads for coin; combat → economy via bounty.
REWORK: existing survival anchor is sound. No existing economy or magic connections to flag; the proposed weaves above address the gap.

## create_integrated_farming   [anchors: Create, survival (2)]
- from: roost egg/meat products (bulk poultry output) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flags this as WEAK — bulk commodity eggs/feathers are low-value trade goods; the economic signal is drowned in vanilla commerce and adds no interesting decision. A roost's power is automation throughput, not trade-floor value.
- from: create_integrated_farming:fishing_net aquatic drops | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: CIF already has survival as an anchor — the fishing-net-to-FarmersDelight cooking chain is already the implicit use-path the mod was designed for; this is the existing connection, not a new one. No cross-pillar gain from recording it as a new weave.
OK — connections sound. Already at 2 anchors (Create + survival); no weak existing links. No new cross-system weave clears the red-team for this mod.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — pure code library (0 blocks, 0 items, loot=no); genuine zero-content surface. No weave possible.

## sable   [anchors: support/physics-backend (1)]
- LEAVE — physics-engine library (0 blocks, 0 items, loot=no); no item/method surface. Weaving belongs in mods built on it (Aeronautics etc.), not here.

## trading_floor   [anchors: Create, economy (2)]
- from: trading_floor:trading_depot (automated villager trade block) | via: numismatics mint / M-08 coin-from-processed-scarcity | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: trading_floor is already anchored to economy (it *is* an economy block); an M-08 note here is tautological — the mod is the delivery mechanism, not a new cross-system bridge. Nothing new is being woven.
- from: trading_floor:trading_depot | via: M-21 villager-trade-seam | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); and trading_floor is already the automated-trade seam — it supersedes M-21's manual-trade intent. Redundant.
OK — connections sound. 2 anchors (Create + economy) are correct and load-bearing; existing links are coherent. No new weave warranted.

## collective   [anchors: support/library (1)]
- LEAVE — pure code library (0 blocks, 0 items, loot=no); zero-content surface. Dependency of Serilum mods only.

## t_and_t   [anchors: survival (1)]
- from: t_and_t structure loot tables (conquerable forts, ocean ships, village chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatic coins into T&T's conquerable outpost/fort and ship loot makes exploration pay off as economic capital — the player who takes a pillager fort finds currency, not just sticks.
- from: t_and_t village variant spawned villagers (16 biome variants) | via: villager-trade route | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no — maintainer guidance); and T&T's 16-variant villages are structural/worldgen only (no custom professions registered), so a trade seam here requires no per-mod wiring, just vanilla trade content. Park until M-21 status resolved.
- from: t_and_t structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: scattering Ars Nouveau source gems or Occultism ritual components into T&T dungeon/fort chests creates a magic-progression reward for exploring dangerous structures — survival pressure (danger) feeding magic production.
REWORK: survival anchor is sound. The "economy via loot-seed" direction (M-14) and "magic via loot-seed" (M-02) are the natural 2nd anchors; neither is currently woven.

## invtweaksemuforipn   [anchors: support/client-compat (1)]
- LEAVE — client-side behavior shim (0 blocks, 0 items, loot=no); pure compat glue with no item/method surface.

## sable_sa_compat   [anchors: support/compat-patch (1)]
- LEAVE — behavior compat patch (0 blocks, 0 items, loot=no); no item/method surface. Aeronautics weaving belongs in the content mods.

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — developer-authoring tool (0 blocks, 0 items, loot=no); no item/method surface. Documents the Create spine but adds no content weave.

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments expanded monument loot chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the expanded monument is a rare aquatic landmark — seeding Numismatic coins or bounty tokens into its secret room chests turns the deep-sea dive into an economic payoff, coupling aquatic danger with the currency layer.
- from: betteroceanmonuments expanded monument loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the ocean monument is a water/guardian theme — seeding Ars Nouveau source gems or occultism soul drops there is a weak thematic fit (arcane dungeon items don't read as "ocean structure" loot). The economy seed (M-14) is the coherent 2nd anchor; force a magic seed here and the red-team wins.
REWORK: existing survival anchor is sound. The M-14 loot-seed economy weave is the only coherent cross-system addition.

## formations   [anchors: survival (1)]
- from: formations scattered structure set (altars, ruins, cabins, pedestals) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a ruin altar holding a source shard or bound scroll reads naturally as a lost arcane site — formations' altar/pedestal forms already imply ritual use; seeding magic reagents there is thematically coherent.
- from: formations scattered structures | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: formations generates many tiny ambient structures with minimal loot meaning (cabins, campsites); seeding coins into scattered mundane ruins dilutes the economic signal — coins should feel like meaningful finds, not background noise. The magic loot-seed (M-02) is the sharper weave given the altar/pedestal forms.
REWORK: survival anchor (exploration) is sound. Magic loot-seed (M-02) is the coherent 2nd anchor.

## owo   [anchors: support/library (1)]
- LEAVE — UI/config library (0 blocks, 0 items, loot=no); pure developer-infra with no item/method surface.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client-side animation replacement (0 blocks, 0 items, loot=no); render-only with no item/method surface.

## quark   [anchors: support/decoration-palette (1)]
- from: quark decorative building blocks (vertical slabs, polished stone variants, hedges, brick variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Quark polished andesite slab or hedge block that can be crushed back into gravel/raw stone + an XP nugget is a natural Create recycling path — deco gets a production-chain role without being gated behind one.
- from: quark crop storage blocks (apple_crate, carrot_crate, potato_crate etc. — c:storage_blocks/*) | via: create:compacting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: compacting bulk crops into Quark storage-crate blocks (and milling/crushing them back) routes the farm's output through a Create step — the crates become an intermediate in an automated processing chain rather than just decoration.
- from: quark:abacus (merchant/counting tool) | via: numismatics context / economy flavor | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); the abacus is a vanilla-aesthetic counting device with no Numismatics method-routing. A thematic decoration tie isn't a weave.
- from: quark Glimmering Weald cave biome blocks | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Glimmering Weald is a vanilla-palette underground biome — its blocks are standard stone/crystal-adjacent and carry no inherent arcane charge. An imbuement route would be forced; the tone clashes with Quark's "stays in vanilla aesthetic" vibe.
OK — existing support/decoration anchor is sound. The M-04 crushing and M-12 compacting weaves add a coherent Create production anchor.

## appleskin   [anchors: support/client-UI (1)]
- LEAVE — HUD-only display mod (0 blocks, 0 items, loot=no); surfaces hidden food stats but adds no material or method surface. Pairs naturally with the survival food layer but requires no weave.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure code library (0 blocks, 0 items, loot=no); dependency API with no item/method surface.

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — interaction-behavior mod (0 blocks, 0 items, loot=no); right-click harvest QoL with no item/method surface.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — config-screen API library (0 blocks, 0 items, loot=no); pure developer-infra with no item/method surface.

== CHUNK COMPLETE ==
