# Phase 2 candidates — chunk-05

## rechiseledcreate   [anchors: Create, decoration (2)]
- REWORK: existing anchors are sound — Mechanical Chisel is a genuine Create kinetic block, and the 242-block decoration palette is real content. No forced edges here.
- OK — connections sound. This mod IS the decoration↔Create bridge for Rechiseled; the 2-pillar reading (Create method + decoration palette) is correct and well-grounded.
- from: rechiseledcreate window/stone variants | via: `create:crushing` | to: Create (recycle) | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is a lossy deco-recycle path, already available to any Create deco block; adding it here is valid but adds zero new pillar (still Create+decoration), so it broadens the decoration↔Create seam but doesn't earn a 3rd pillar. Worth noting as an easy M-04 expansion for completeness, but it's not a new weave — it's a range extension of existing M-04 coverage.

## ldlib2   [anchors: support/library (1)]
- LEAVE — pure developer library (UI/rendering/sync infrastructure). Zero items, zero recipe surfaces, no content to route. Genuine zero-content code library.

## cloth_config   [anchors: support/library (1)]
- LEAVE — config-screen API only. No items, no blocks, no gameplay surface. Genuine zero-content code library.

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration (1)]
- from: structure loot (rare items, trial-key vaults) | via: `numismatics` sell / bounty board payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: rare loot fished out of these structures has a coin value — turn a dungeon haul into starter capital; the bounty board cashes dangerous finds.
- from: trial-key vault unique drops | via: `occultism:spirit_fire` or `ars_nouveau:imbuement` | to: magic | motif: M-11 / M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the vault-unique drops are vanilla `minecraft:` items (the mod ships no custom items), so there's nothing specific to transmute; any transmutation rule would apply equally to vanilla dungeon loot, not to this mod specifically. No mod-specific reagent surface.
- from: in-tavern cartographer NPC | via: villager trade → `numismatics` payout | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; additionally the cartographer uses vanilla emerald trades, not Numismatics, so the tie-in is indirect and would require a separate emerald↔coin bridge that doesn't belong to this mod.
- Note on the M-14 ACCEPT: the hook is genuinely coherent (structures generate dangerous loot, players cash it in for coin), but it depends on the pack actually populating a bounty board with trial loot / structure-drop categories. The weave is at the "loot seeding" level, not recipe-level — worth tagging as needing a concrete Bountiful board config entry to make it real rather than implicit.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — pure behavior framework (JSON weapon movesets, combat animations, hitboxes). No items, no blocks, no recipe surface. Nothing to route material through. Genuine zero-content library.

## death-count-1.0   [anchors: support/friend-group QoL (1)]
- LEAVE — scoreboard datapack (death tally in tab list). No items, no processing, no content surface. A social cosmetic; no coherent 2nd pillar exists without forcing something.

## do_a_barrel_roll   [anchors: support/client QoL (1)]
- LEAVE — client-side elytra flight-feel overhaul (camera roll/pitch/yaw, banking). No items, no blocks, no recipe surface. The elytra-flight theme is aeronautics-adjacent but there is no content bridge — it does not touch Create Aeronautics ships, only vanilla elytra. Forcing an aeronautics pillar onto a pure client movement mod would be an arbitrary label, not a real connection.

## playeranimator   [anchors: support/library (1)]
- LEAVE — animation API (AnimationStack/ModifierLayer for player models). Zero items, zero blocks, zero gameplay surfaces. Genuine zero-content code library.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — base-class / registry-helper library for MMF-Group mods. Zero items, zero blocks, no recipes. Genuine zero-content code library.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin TOML config engine. Zero items, zero blocks, no gameplay. Genuine zero-content code library.

== CHUNK COMPLETE ==
