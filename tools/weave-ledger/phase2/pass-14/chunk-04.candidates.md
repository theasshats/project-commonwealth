# Phase 2 candidates — chunk-04

## handcrafted   [anchors: support/decoration (1)]
- from: finished furniture (chairs, tables, cupboards, shelves) | via: recipe (create:cutting for plank-stage components, or woodworks:sawmill) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Mechanical Saw mills raw planks into pre-cut furniture blanks — the workshop makes furniture at scale, not just by hand
- from: handcrafted furniture sets (luxury item framing) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: deco sells thinly — a furniture item priced in Numismatics has no meaningful scarcity anchor; the dossier itself flags this WEAK, and it doesn't survive red-teaming for a pack where coin flows from scarce metal and processed trade goods (M-08/M-09 mods that produce food, wine, etc. are already there)
- REWORK: no existing multi-pillar connections to flag — single-anchor mod, the Create/cutting candidate above is the primary push.

## edf-remastered-5.0-beta4   [anchors: survival/endgame (1)]
- from: Ender Dragon encounter (loot=yes flag, confirmed — but dossier says "does NOT change dragon drops or add rewards") | via: loot-seed | to: economy or magic | motif: M-02 / M-14 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier explicitly confirms no item outputs and the mod does not modify the dragon's drop table — it is purely a behavioral/AI overhaul with loot=yes only because the datapack format can touch loot. There is no material to seed or route. Genuine zero-content case for loot purposes.
- LEAVE — pure behavior/AI datapack; adds no items, blocks, or loot drops of its own; no material surface to route through any method. (loot=yes flag is a false positive here — confirmed by dossier sweep: "Does NOT change dragon drops or add rewards.")

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — pure Create-internal build tooling (3 items: empty_pattern_schematic, pattern_schematic, pattern_schematic_and_quill). No foreign material outputs, no loot, no processing method. Its items are single-purpose automation tools with no sensible use as inputs to magic/economy/survival. A forced edge (e.g. "craft a schematic via sequenced assembly") would be gimmicky and circular — the mod is about operating Create's schematic system, not providing cross-pillar material. Genuine support role.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen API library; 0 items, 0 blocks, loot=no. No player-facing content surface whatsoever. Classic zero-surface library case.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — pure configuration engine (0 items, 0 blocks, loot=no). No gameplay content. Classic zero-surface library case.

## prickle   [anchors: support/library (1)]
- LEAVE — pure config-format library (0 items, 0 blocks, loot=no). No gameplay content. Classic zero-surface library case.

## netmusic   [anchors: support/QoL-flavor (1)]
- from: netmusic:music_cd (craftable, loot=yes) | via: recipe — route cd_burner/computer through Create brass components as crafting inputs | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: a network-capable music computer needs precision gears and brass — workshop-tier tech to build a speaker system; keeps it feeling earned rather than trivial
- from: netmusic:music_player_backpack | via: recipe — require a travelersbackpack:backpack_upgrade step | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the Travelers Backpack upgrade path is a different mod's internal mechanic, not a pack-level motif; this would be a one-off recipe with no broader pattern. Also crosses into the wrong depth tier for a cosmetic item.
- REWORK: existing connection (touhou_little_maid:altar_recipe_serializers for music_cd) — the maid altar as a crafting step for a music disc is thematically cute but weak as a pillar anchor; it ties netmusic to the TLM flavor mod rather than to a pack spine (Create/magic/economy). The Create-component recipe above would be a stronger primary connection; the maid-altar step could be kept as flavor but shouldn't be the only weave.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled chiseling method (all 3600+ decorative block variants) | via: rechiseledcreate companion (already in pack) — Mechanical Chisel runs chiseling recipes on Create rotational power | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk-chiseling stone and planks into decorative variants is exactly the kind of rote work a spinning shaft should automate — decoration at industrial scale
- from: rechiseled decorative stone variants (e.g. polished andesite tiles, granite bricks) | via: numismatics sell/trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: decorative blocks as trade goods is even thinner than furniture — they have no inherent scarcity, any player can chisel them, and the economy pillar rewards scarce processed goods (M-09 targets wine/cheese/luxury food); a stone tile is not a luxury good by any sensible reading
- OK — rechiseledcreate companion already supplies the Create anchor; the ACCEPT above formalizes it.

## revelationary   [anchors: support/library (1)]
- LEAVE — pure progression-gating API library (0 items, 0 blocks, loot=no). No player-facing content. The mechanic it provides (advancement-gated block reveals) is used by dependent mods (notably Occultism's otherworld blocks), but the library itself has no material surface. Classic zero-surface library case.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL mod (0 items, 0 blocks, loot=no). Single-slab-break interaction on double slabs. No content surface whatsoever. Classic zero-surface behavior mod.

== CHUNK COMPLETE ==
