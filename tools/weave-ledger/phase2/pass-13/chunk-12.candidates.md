# Phase 2 candidates — chunk-12

## create_tweaked_controllers   [anchors: aeronautics (1)]
- LEAVE — pure control-interface device; no material inputs or outputs, no recipe types, and no coherent cross-pillar link beyond its existing aeronautics/Create anchor. Its craft already threads through Create parts (precision mechanism, electron tubes). Forcing a magic/economy/survival edge onto a UI-redstone-link device would be arbitrary.
- OK — existing aeronautics anchor is sound.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- OK — connections sound. Kinetics infrastructure (Create spine) + seats wired to Stock Keepers / train logistics (aeronautics/transport pillar) is coherent. No new edge needed; already at the two-pillar floor. No REWORK items — both links are earned, not forced.

## jamlib   [anchors: library/API (support)]
- LEAVE — pure code library (platform abstraction + JSON5 config API for JamCoreModding mods). Zero blocks, zero items, no recipe types, no player-facing surface. Weaving is impossible.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (player-powered SU source) | via: thematic + M-09 economy angle | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: A player-operated kinetic block does not produce a sellable good and has no path to Numismatics; any M-09 framing ("luxury good → coin") would require fabricating an intermediate item that doesn't exist. No-motif; forced.
- from: touhou_little_maid Soul Orb / Photo (Maid Motor input) | via: `occultism:spirit_fire` or `ars_nouveau:imbuement` | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: Soul Orb/Photo are TLM-internal soul tokens; re-routing them through Occultism spirit_fire as "spirit transmutation" stretches the lore badly — they are maid-specific objects, not generic soul reagents. Theme clash overrides the method fit. TLM is curated friend-group flavor, not a pillar; forced edge.
- LEAVE — no coherent 2nd-pillar routing. The treadmill is a novelty low-tier power source; its only cross-mod hook is the TLM Soul Orb/Photo intake, and that mod is not one of the five pillars. Depth-scaling rule also blocks gating: the device is everyday/early, so a deep chain would violate the basic-component guardrail.

## sparsestructures   [anchors: support / worldgen-tuning (1)]
- LEAVE — config-only worldgen-tuning mod. Zero blocks, zero items, no recipe types. Operates on structure placement registry only. Nothing to route; no weave is possible.

## opacpvp   [anchors: support / PvP-rules (1)]
- LEAVE — pure server PvP-rules toggle (command + config). Zero blocks, zero items, no recipe types, no material surface. Its function (cooperative-fire prevention) directly serves the pack's cooperative PvPvE premise as infrastructure, not as a content pillar. No weave is possible or coherent.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons dungeon chest loot tables (Catacombs / Undead Fortress / Spider Cave) | via: loot-table seeding → `numismatics` coins or sellable rarity drops | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing a catacombs dungeon pays out in coin — combat exploration feeds the Numismatics economy directly, no farming needed.
- from: betterdungeons dungeon chest loot tables | via: loot-table seeding → Ars Nouveau / Occultism reagent drops (source gems, ritual components) gated behind dungeon exploration | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: magic progression gates on dungeon-found reagents; you have to explore the dark before you can cast.
- from: betterdungeons loot tables | via: loot seeding → boss-key drop for complex Create recipe (M-15) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a *boss drop* as a gate item for complex Create/tech recipes; betterdungeons has no boss — it has spawner mobs (zombies, skeletons, spiders). Using ordinary mob drops from a dungeon chest as a Create gate is M-15 in spirit but lacks the boss-drop condition the motif requires. Downgrade to the M-02 accept above instead, or flag for Gate-0 motif extension.

## spyglass_improvements   [anchors: support / client QoL (1)]
- LEAVE — client-side spyglass zoom/overlay mod. Zero blocks, zero items, no recipe types, no material surface. Curios integration uses the vanilla spyglass item; no new items are introduced. Nothing to route; no weave possible.

## afk-sleep-1.3.2   [anchors: support / multiplayer QoL (1)]
- LEAVE — pure server behavior tweak (sleep quorum recomputation). Zero blocks, zero items, no recipe types. No player-facing content surface at all; the entire mod is a single behavioral adjustment to the sleeping percentage calculation. No weave possible.

## betterbiomereblend   [anchors: support / client performance (1)]
- LEAVE — client-side render engine replacement (OKLab biome color blending). Zero blocks, zero items, no recipe types. No content surface; purely a graphics optimization. No weave possible.

== CHUNK COMPLETE ==
