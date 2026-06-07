# Phase 2 candidates — chunk-18

## citadel   [anchors: support/library (1)]
- LEAVE — pure code library (animation/spawn API for sbom_xela mobs); 0 player-facing items/blocks, no loot surface, no materials to route. Weaving a library is explicitly excluded by the guardrails.

## edf-remastered-5.0-beta4   [anchors: survival/danger (1)]
- LEAVE — difficulty-only datapack; 0 new items, 0 blocks. Dossier confirms "does NOT change dragon drops or add rewards" (verified Modrinth). The `loot=yes` flag likely covers function/advancement files, not new loot tables. The added end-zombie minions use vanilla loot tables, so any drop-seed would target the vanilla entity, not this mod's content — that's a vanilla loot edit, not a loot-seed of this mod. No material surface for method-pull or loot-seed.

## valarian_conquest   [anchors: survival (1)]
- from: faction loot (shields, armor, weapons, banners) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: faction warlords drop Numismatics coin alongside their gear — conquest pays, and the player economy absorbs medieval spoils
- from: faction loot drops | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board posts "defeat a Barathian knight" — faction combat feeds coin rewards, pulling danger into the economy loop
- from: faction loot drops (rare faction commander loot) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a faction commander (Hospitaller Grand Master?) drops the boss key that unlocks a high-tier Create machine — martial prestige gates tech advancement
- from: valarian_conquest:armorsmith (crafting station) | via: recipe (M-05 native-method gating) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the faction armorsmith's plate gear requires Create-fabricated iron sheets as inputs — industrialized war production ties the combat and tech pillars
- from: faction gear (shields, armor) | via: create:crushing (M-04 recycle) | to: create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: faction salvage crushed back to raw metal + XP nugget — the workshop recycles battlefield scrap
- from: mercenary hire (NPC recruit service) | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); also mercenary hire is more soldier-command than trade-stall exchange — the economy angle is better served by M-14 bounty board already accepted; don't double-count
- from: faction citizenship items | via: recipe (crafting gate) | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: faction allegiance items gating magic access has no thematic logic — faction warfare and arcane progression are distinct tonal registers; no motif covers political allegiance as a magic prerequisite
- REWORK: dossier 2nd-anchor candidate "Create via M-05 armorsmith/builder station gating — gate faction gear on Create parts" is marked WEAK; it's actually well-grounded — the armorsmith is a native method, Create-fabricated iron sheets are a coherent requirement for plate armor, and M-05 is established. Elevate to STRONG and accept (done above).

## recipe_integration   [anchors: support/library (1)]
- LEAVE — pure recipe-bridge infrastructure; no items/blocks/loot, no material identity of its own. Its value is the cross-mod recipes it injects for installed mods, which is a weaving action. A weave target needs a material surface; this mod IS the weaving layer, not a target for one. Support anchor stands. Note for Phase 3: audit which of its 82 c:tags fire for this modlist — most reference uninstalled mods (Aether, Mekanism, GT, MI) and are inert; the active subset (create:milling/mixing/pressing, ars_nouveau:scry_ritual, occultism:crushing, farmersdelight:cutting, createaddition:rolling/charging) should be checked against the pack's KubeJS weave recipes to avoid duplication or conflict.

## create_ltab-3.9.2   [anchors: create, survival (2)]
- from: structure loot tables (Create-themed ruins/buildings) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a derelict Create workshop yields Numismatics coin among the gears — industrial ruins are worth looting, not just raiding for parts
- from: structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: deep in a Create-era ruin, an experimenter left behind an Ars Nouveau source gem — industrial explorers can stumble into arcane knowledge
- from: structure loot tables | via: loot-seed | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-tier Create hangar ruin contains a partial airframe schematic (a component part or blueprint) — find the ruins, recover the plans, build the ship
- from: structure loot tables | via: loot-seed | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is "boss drop as gate item for complex Create recipe" — structure loot is not a boss drop; routing a structure drop through M-15 would misuse the motif's definition (which specifically requires a boss encounter as the gate). Use M-08/M-02 loot-seeds instead (accepted above). The survival anchor is already established.
- OK — existing connections sound. Create + survival is the correct pair for a Create-themed worldgen/structures mod: it IS the Create theme (worldgen/exploration surface) and it drives survival (exploration pressure). The three loot-seeds add economy and magic hooks that deepen it.

## entity_texture_features   [anchors: support/rendering (1)]
- LEAVE — pure client-side rendering library (OptiFine-format random/emissive textures); 0 items, 0 blocks, no loot surface. No material to route through any method. Depended on by EMF (entity_model_features) for its model layer; never a recipe target. Weaving a rendering engine is a forced edge with no coherent hook.

## irons_lib   [anchors: support/library (1)]
- LEAVE — framework library for Iron's Spellbooks; cosmetic-only player-facing blocks (transmog table, player statue) have no material throughput. The transmog table edits NBT/appearance, statues store a skin — neither produces/consumes routable materials. The library's value is as Iron's Spellbooks' dependency, which is already the magic anchor. Weaving the library separately would be redundant with weaving Iron's Spellbooks itself.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — pure runtime memory optimization; zero items, zero blocks, no world interaction. Sanctioned support role (perf). Nothing to weave by definition.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen-modifier library (biome injectors, density functions, structure conditions); 0 items, 0 blocks. Registers no materials and shapes only the worldgen pipeline for dependent mods. No content surface for method-pull. Weaving a worldgen API library is a forced edge.

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure player-animation API (keyframe animation stack for dependent mods); 0 items, 0 blocks, no materials. Gameplay-invisible infrastructure. No content surface.

== CHUNK COMPLETE ==

