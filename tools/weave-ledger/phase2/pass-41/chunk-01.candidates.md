# Phase 2 candidates — chunk-01 (context-fed)

## stylecolonies   [anchors: support (1)]
- CHALLENGE | from: stylecolonies Steampunk style blueprints | via: create:mechanical_crafting (colony build) | to: create | motif: M-05 | verdict: REJECT | hook: M-05 is "a mod's flagship item built in its OWN machine, gated on Create parts as inputs" — stylecolonies registers zero recipe-types and zero items; its blueprint styles demand Create blocks at colony-build time but that is passive material consumption, not a native-method gating. The M-05 rows (1 ACCEPT) misapply the motif; the correct motif for style-demand-pulling-Create-blocks is M-28 (colony route), which is already ACCEPTed.
- NEW | from: stylecolonies High Magic style (requires Ars/Occultism-themed blocks) | via: domum_ornamentum:architects_cutter (magic-imbuement-tinted stone blocks fed into cutter for arcane-pillar colony aesthetics) | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the High Magic colony hall needs pillars cut from arcane-stone — the settlement builder buys imbuement-processed blocks from the magic specialist before they can even finish the Town Hall tier; no single player covers both routes.

## betterbiomereblend   [anchors: support (1)]
- LEAVE — zero items, zero blocks, zero loot, client-only render engine; no material surface to weave.

## securitycraft   [anchors: support (1)]
- NEW | from: securitycraft:ancient_debris_mine / securitycraft:diamond_mine / securitycraft:emerald_mine (ore-disguised explosive traps) | via: recipe (trap construction consumes the real disguised ore as a crafting input) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: setting a diamond-mine trap costs a real diamond — PvPvE base defense becomes a genuine consumption sink for scarce regional ores, closing the loop between danger-pressure and production output; the more the server PvPs, the faster the ore economy turns.
- NEW | from: securitycraft finished trap/device set (claymore, sentry, keycard readers) | via: emergent player trade (defense specialist builds and sells installation packages to non-combat players) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: in a PvPvE context a security specialist who has invested in Create-fabricated reinforcing components can sell a "base hardening" service — install your sensors and sentries for coin; labor flows player-to-player with no NPC intermediary.
- CHALLENGE | from: securitycraft:keycard_reader assembly | via: create:sequenced_assembly | to: create | motif: M-06 | verdict: REJECT | hook: M-06 is the deep endgame multi-step keystone for Create's *own* flagship items (Clockwork Bearing class); the keycard reader is a security device, not a Create machine — one ACCEPT row (row 237) mistakenly promotes it to M-06 depth. The reinforcer/sentry via create:mechanical_crafting (M-05) is the correct and already-ACCEPTed tier for securitycraft. M-06 here is prestige inflation.

## domum_ornamentum   [anchors: decoration palette / MineColonies support (1)]
- CHALLENGE | from: Create-processed stone/metal blocks fed into architects_cutter | via: domum_ornamentum:architects_cutter | to: create | motif: M-12 | verdict: REJECT | hook: several rows tag this routing M-12 (processing-chain pull — raw crop/material → finished good or useful intermediate). M-12 is for crops and raw materials entering a processing chain; the Architect's Cutter fabricates decorative framing from *already-finished* blocks — that is M-04 territory (Create recycles deco / palette routing through a deco method), not M-12 which implies a raw→intermediate processing step. The existing M-04 ACCEPTs on the cutter are the correct motif; M-12 rows on the same edge should be dropped.
- NEW | from: domum_ornamentum framed/shingled blocks (output of cutter using Create-palette stone) | via: aeronautics ship hull construction (DO ornamental panels as hull cosmetic / interior material) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the shipwright cuts Create-processed andesite or brass-casing tiles through the Architect's Cutter and panels the hull — the airship looks like a flying colony, and building it requires a colony's cutter output; aeronautics demand pulls on both Create and MineColonies production in one build. (One 1-vote row exists; this reinforces and sharpens it with the explicit dual-pull framing.)

## patchouli   [anchors: support / library (1)]
- LEAVE — documentation library; its only player items are guide-book covers (zero gameplay routing surface). All prior proposals correctly rejected.

## dummmmmmy   [anchors: support / QoL (1)]
- LEAVE — single entity prop that displays damage numbers; no material in/out, no method surface. Any edge would be contrived.

## ponderjs   [anchors: support / Create-tooling (1)]
- LEAVE — packdev scripting tool with zero player-facing items or methods; documents the Create spine rather than feeding a pillar.

## occultism   [anchors: magic (1)]
- NEW | from: occultism:datura (crop — c:item/crops/datura, grows on farmland) | via: season-gated growth (Serene Seasons restricts datura to spring/summer growing windows; winter harvest is impossible) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the witch-herb only blooms in warm months — a pentacle ritual timed to winter stalls because the harvester can't restock datura; seasons feed the magic pressure loop, not just survival.
- NEW | from: occultism:iesnium_ingot (otherworld metal, endgame) | via: create_new_age:energising (charge the ingot with Create electrical energy before it accepts a ritual bind — the otherworldly metal needs a spark to resonate) | to: create | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: the djinni-mined metal is inert until it is charged through a Create New Age energiser — the magic specialist needs the electric sub-spine to unlock iesnium's highest-tier uses; Create electricity and the occult are joined at the top tier rather than passing each other by.
- CHALLENGE | from: occultism spirit essences (foliot/djinni/afrit/marid) as imbuement catalysts | via: ars_nouveau:imbuement | to: magic | motif: M-01 | verdict: REJECT | hook: the reagent-ownership table reserves ars_nouveau:source_gem as the universal magic currency and irons_spellbooks:arcane_essence as the Iron's-side bonded currency (both M-01). Routing Occultism spirit essences *into* Ars imbuement as power-tier catalysts would create a third M-01 spoke that isn't registered in the ownership table, risking double-spend. The correct bridge is M-10 (foreign material refined into magic reagent via imbuement), not M-01 (currency exchange). The 1-ACCEPT row (row 135) uses M-01 incorrectly; the same edge fits M-10 and is already partially covered by existing M-10 rows for Occultism.
- NEW | from: occultism branch-drops / entity waste (byproduct stream of summoning rituals — broken chalk, used ritual bowls, spent candles) | via: occultism:crushing (parallel ore-doubler also processes ritual waste) | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: spent ritual detritus — the chalk dust, broken bowls, and ash after a summoning — feeds the crushing spirits as raw material input, closing a circularity loop inside the magic pillar; waste from one Occultism process feeds another Occultism process that interfaces with the Create ore-doubling network (M-03/M-32 together).

## betterendisland   [anchors: survival (1)]
- LEAVE — no items, no blocks, no loot tables (loot=no confirmed); pure structure overhaul of the End island. No material surface exists.

## gamediscs   [anchors: survival (1)]
- LEAVE — pure novelty toy with cosmetic outputs; every candidate weave was rejected across many passes. The skeleton-kill-disc mechanic is the closed loop; no cross-system material routing is coherent.

## accelerateddecay   [anchors: support (1)]
- LEAVE — performance behavior patch for leaf decay; zero items, zero loot, zero methods.

## dynamictrees   [anchors: survival (1)]
- CHALLENGE | from: dynamictrees:dendro_potion (growth accelerant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: the existing M-10 row is split 11:11 (highest contention in this chunk) and the REJECT side is correct. Power-read: the dendro potion is crafted from mushroom stew components — it is an everyday mid-tier utility item, not a rare or flaghip material. M-10's own guardrail explicitly bars "gating basic components behind complex infusion" and the briefing reinforces it. The imbuement step adds prestige cost without advancing the loop; a player in need of the growth potion should not be gated by a magic build. The M-10 rows on DT *seeds* (correctly rejected at 3:0) make the same argument. REJECT the dendro-potion M-10 row; the mid-tier power does not justify the infusion gate.
- NEW | from: dynamictrees:branch (byproduct of dynamic tree growth/felling — drops constantly as trees mature) | via: create:milling → sawdust/pulp intermediate | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: dynamic tree growth sheds branch items as a passive waste stream; milling those branches into sawdust or wood pulp gives Create's Mixer a consistent organic feedstock — the living forest's byproduct is another process's raw input, closing a circularity edge without forcing any special recipe onto the tree itself.
- NEW | from: dynamictrees:cherry_branch / cherry_leaves (spring-only seasonal drop — cherry trees shed blossoms/branches primarily in spring under Serene Seasons) | via: loot-seed (conditioned loot-table entry firing only in Serene Seasons spring) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: cherry blossom petals only drift from the living tree in spring — a seasonal-material that feeds a Mixer-based recipe or Ars imbuement input, making the annual bloom a reason to venture into cherry groves before summer ends. (Sharpens the 1-ACCEPT row with an explicit loot-seed delivery mechanism.)

## fogoverrides   [anchors: support (1)]
- LEAVE — client-side fog config; zero items, zero loot, zero methods. Visual atmosphere tuning only.

## azurelib   [anchors: support / library (1)]
- LEAVE — animation engine library (GeckoLib fork); one internal lightblock, no player items or methods.

## ribbits   [anchors: survival (1)]
- CHALLENGE | from: ribbits:amethyst_shard trade → Numismatics coin bridge | via: KubeJS trade-currency bridge | to: economy | motif: M-08 | verdict: REJECT | hook: multiple rows accept this (rows 184, 186, 203) but misread M-08. M-08 is "scarce regional metal → Create-processed → player-pressed into Numismatics coin; minting is a *specialization*." Amethyst shards are a vanilla geode material, not a scarce regional metal, and the Ribbit trade node is an NPC barter economy — bridging NPC-shard-sinks to player coins risks creating an NPC coin faucet (exactly what killed M-14/M-21). The legitimate angle is M-30 (regional scarcity) if amethyst geodes are genuinely region-locked in this pack's worldgen, or M-29 (cross-route: shards demanded by a player-authored recipe so another player must supply them). The bare currency-bridge rows should be challenged.
- NEW | from: minecraft:amethyst_shard (the Ribbit merchant currency, regionally distributed via geode worldgen) | via: occultism:spirit_fire (amethyst shard → amethyst dust is already an occultism tag: item/dusts/amethyst per dossier; the shard feeds the occult reagent web) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: the frog-folk trade in amethyst shards, and occultism already tags amethyst as a dust input — the swamp economy's currency is also the occult ingredient; settling near a Ribbit village gives the magic specialist a reliable amethyst supply chain without needing to hunt geodes.
- NEW | from: ribbits:toadstool / ribbits:brown_toadstool (swamp fungi blocks, obtainable from Ribbit villages) | via: farmersdelight:cooking or extradelight:melting_pot (toadstool as a mushroom stew ingredient — the explicit everyday survival use for a foraged fungus) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the toadstool from a frog-village is a mushroom — it goes in the pot; exploring swamps to trade with Ribbits yields both an amethyst economy node and a cooking ingredient, weaving the discovery reward into everyday food production. (Consolidates the scattered 1-vote rows on this edge with a clear delivery path.)

## death-count-1.0   [anchors: support (1)]
- LEAVE — vanilla-scoreboard datapack with no items, blocks, loot, or methods; purely a tab-list cosmetic.

## dynamic_fps   [anchors: support (1)]
- LEAVE — client FPS throttling mod; no items, no methods, no gameplay surface.

## buildguide   [anchors: support (1)]
- LEAVE — client-side build-shape overlay; no items, no loot, no gameplay.

## solmaiddream   [anchors: survival (1)]
- OK — existing rows sufficient. The M-26 consumption-sink anchor (food demand driven by maid stat-growth) is the one coherent weave and it is already ACCEPTed (multiple rows, including the clean "varied foods → maid milestone → consumption sink" framing). All other proposals (M-33 service clash, M-34 combat, M-16 seasonal, companion-as-commodity) were correctly rejected. The dossier's own assessment ("leave — tiny flavour addon") is consistent with keeping only the M-26 food-demand anchor; no new edge is warranted.

## fzzy_config   [anchors: support / library (1)]
- LEAVE — Kotlin config engine; zero blocks, zero items, no player-facing surface.

== CHUNK COMPLETE ==
