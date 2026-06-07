# Phase 2 candidates — chunk-04

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — pure code library; zero items, zero recipe methods, no content surface to weave.

## emojitype   [anchors: support/client-UI (1)]
- LEAVE — client chat input helper; no items, no blocks, no gameplay methods. Zero weave surface.

## direct_chute   [anchors: Create (1)]
- from: direct_chute (zinc logistics block) | via: create:item_application | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the direct chute is a pass-through conduit with no mechanical output — it has no "drivetrain component" character; M-24 requires a mechanical part feeding propulsion/control, which this is not. Forcing it would be contrived.
- from: direct_chute (zinc block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing a logistics block back to zinc nuggets is M-04 (deco-recycle), but direct_chute is a functional block (not deco), and the volume is trivially low — a deco-family crush pass is not worth a standalone proposal for a single non-deco block.
- REWORK: existing Create anchor is sound. The dossier correctly notes leaving it. OK — connections sound for a single-block Create logistics add-on; one anchor is sufficient here.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — guidebook framework; 6 items are colored book variants (display objects), no material or method surface. Weaving the books as a "craft to unlock" gating item is no-motif (would invent a progression-gate motif not in M-01..M-24 and books are not reserved reagents). Nothing coherent.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: meteor chunks that fell from the sky crush in the millstone/crusher — yields iron/nickel fragments + an XP-nugget byproduct; turns a worldgen oddity into a minor Create feedstock rather than static deco.
- from: Blood Moon / Blue Moon (active event) | via: event-gating (config tie) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Ars Nouveau rituals or Occultism spirit-fire transmutations only complete while the Blood Moon is active — the moon becomes a scarce ritual window rather than pure atmosphere; locks a magic supply step behind a timed survival pressure.
- from: enhancedcelestials:space_moss_block | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: space moss is a cosmetic/biome block with no established alchemical identity; milling it to a generic "moss dust" feeds nothing with a clear destination — no-motif for the output direction (would need a consuming method/recipe to be coherent). Not worth it without a confirmed sink.
- REWORK: none — the survival anchor is sound and reflects the mod's core role. OK — connections sound; two candidates above add the missing second anchor.

## puzzleslib   [anchors: support/library (1)]
- LEAVE — zero items, zero methods, pure developer-framework library. No weave surface.

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — zero items, zero methods, pure developer-framework library. No weave surface.

## spark   [anchors: support/performance (1)]
- LEAVE — profiler/diagnostics only; no items, no gameplay content. Zero weave surface.

## sound_physics_remastered   [anchors: support/client-audio (1)]
- LEAVE — client-side audio simulation; no items, no methods, no content surface.

## kubejs   [anchors: support/modpack-tooling (1)]
- LEAVE — the scripting layer that authors weaves; it is the tool, not a weave target. No content surface beyond a generated bucket placeholder.

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — pure build-automation tooling; three schematic items have no material-processing identity. Weaving a schematic item into a crafting recipe has no motif backing and would be arbitrary. The dossier correctly identifies no second anchor.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — server-side railway threading optimization; zero items, zero blocks, no content surface.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- from: rechiseledcreate chiseled blocks (andesite/asurine variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: rechiseledcreate is already a 2-anchor mod (Create kinetic method + decoration palette). Adding a crush-recycle edge would just mirror the generic deco-family crush pass — it's M-04-eligible but the dossier correctly notes the mod IS the bridge earning Rechiseled its Create pillar. No new anchor is added; this is marginally redundant.
- OK — connections sound. Already ≥2 anchors; no rework needed.

## txnilib   [anchors: support/library (1)]
- LEAVE — multiversion developer code library; zero items, zero blocks, zero methods.

## attributefix   [anchors: support/fix (1)]
- LEAVE — pure attribute-cap bugfix; no items, no blocks, no game content to weave.

## mcwdoors   [anchors: support/decoration (1)]
- from: metal/iron door variants (mcwdoors:*_modern_door, *_iron*, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvage an iron or industrial door in the crusher — yields iron nuggets + an XP nugget byproduct; metal doors become a minor Create ore-recycling feedstock, exactly how M-04 is designed for metal deco.
- from: wood door variants (all non-metal mcwdoors doors) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden doors crushing to planks/sticks adds no meaningful Create feedstock (wood is abundant, the recycled output has no downstream Create need), and the sheer count (~200 wood variants) bloats the recipe list without signal gain. Metal only is the coherent scope.
- REWORK: the decoration anchor is appropriate; no rework needed. The Create crush for metal variants provides a second system anchor.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client-side model/animation replacements; no items, no blocks, no gameplay methods.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — dependency framework library; no items, no blocks, no content.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — worldgen library API; no items, no blocks, no content. The actual structure mods that use it (e.g. Moog's Voyager Structures) are the loot-seed candidates — not this library.

## tacz   [anchors: support/combat-flavour (1)]
- from: gun_smith_table recipe inputs (iron, components) | via: tacz:gun_smith_table_crafting with Create-pressed/rolled inputs | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Gun Smith Table's crafting recipes require Create-rolled steel sheets or pressed iron plates as components — firearms are an output of the Create industrial spine, not just raw iron. Ore scarcity gates the supply chain.
- from: high-tier gun/sniper/heavy weapon | via: create:sequenced_assembly (barrel/receiver assembly stages) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a precision rifle or heavy gun body is assembled through staged deployer steps (mill the barrel blank → press the receiver → apply the stock) — depth scales with the weapon's power tier, no one-shot craft for endgame weapons.
- from: ammo (consumable) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Ammo being purchasable is trivially true of any consumable; it does not close a loop or gate a distribution node distinctively.
- from: ammo box / consumable ammo | via: bountiful bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Bounty-payout for ammo doesn't add a structural economy link beyond "this item is sellable."
- from: tacz gun/weapon as vehicle-mounted armament concept | via: aeronautics flavour | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: TACZ does not natively integrate with Create Aeronautics ship blocks; aeronauticscompat handles other turret mods, not TACZ. A flavour-only claim has no delivery mechanism and no motif. No weave here.
- REWORK: current "support (1)" anchor is deliberately provisional. The Create anchors (M-05 + M-06) accepted above provide the primary upgrade path. No existing connection to rework.

== CHUNK COMPLETE ==
