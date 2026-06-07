# Phase 2 candidates — chunk-08

## crash_assistant   [anchors: support/client-utility (1)]
- LEAVE — zero content: no items, no blocks, no loot, no methods. Pure crash-diagnostic client tool. No material surface to weave through.

## yungsapi   [anchors: support/library (1)]
- LEAVE — zero content: no items, no blocks, no recipe types, no loot. Pure jigsaw/structure API for YUNG's mods. No material surface.

## prickle   [anchors: support/library (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Config-serialization library. No material surface.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery (stored rotation) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a charged kinetic battery powers a ship's control-surface actuator — rotation stored in-factory, discharged on-deck
- from: create_connected:copycat_* (any block skinned) | via: recipe (copycat-applies a structural plate) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks wear a *texture*, they don't become that block materially — using them as structural hull material misreads the mechanic; hull weave belongs on actual metal plate mods
- REWORK: current single anchor (Create) is fine as-is; the kinetic_battery M-24 above is the natural 2nd. OK — connections sound for the Create pillar; the battery candidate advances it to 2.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Audio-cue utility. No material surface.

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Version-handshake utility. No material surface.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already at 2-pillar goal (Create sequenced_assembly + train/contraption lighting = aeronautics). No forced third weave needed.
- from: ctl:htlb_block (head/tail lamp, auto-switches direction) | via: recipe (require a TFMG polarized component as ingredient) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: TFMG polarizer is a steel-tier process; an interior/exterior lamp gated behind it would be mis-costed (everyday lamp ≠ endgame component). Depth overreach.
- from: ctl:ilb_block (interior lamp) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: lamps are deco; M-09 targets high-effort consumables (wine, cheese). A lamp is neither scarce nor processed; too thin to be a trade good. Forced.

## fxntstorage   [anchors: Create, survival (2)]
- OK — connections sound. Create-tier-gated (andesite/brass/hardened mechanical_crafting) + survival inventory QoL. Already at 2-pillar goal.
- from: fxntstorage:backpack_flight_upgrade | via: recipe (require an Aeronautics propulsion part as ingredient) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: the flight upgrade is a wearable gadget, not a propulsion/drivetrain component in the M-24 sense — M-24 targets ship engines/control surfaces, not a personal elytra-alike. Thematic mismatch in direction.
- from: fxntstorage:hardened_storage_box | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: hardened tier is already the top of the Create-material ladder (uses create:mechanical_crafting); wrapping it in sequenced_assembly is additive depth for a storage box — overkill per the "depth scales with power" rule; a storage box is not endgame.

## occultengineering   [anchors: Create, magic (2)]
- OK — connections sound. The canonical Create×Occultism bridge; already ≥2 pillars.
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is an occult alloy — smelt it in a mixer and mint Numismatics coin; a magic-tier metal backing the player economy
- from: occultengineering:phlogiport (wireless item teleport) | via: config/design note | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: REJECT | reason: M-18 is Occultism-native spirit logistics; phlogiport IS that mechanic (it's already the Create-automated version of Occultism logistics). Tagging it M-18 is circular — it already IS the bridge this motif describes, not a new weave.
- REWORK: the dossier flags the M-08 sterling-silver-coin link as "[WEAK]" — it is actually coherent and worth ACCEPT (see above). Update dossier assessment to ACCEPT if a human agrees.

## createbigcannons   [anchors: Create, aeronautics (2)]
- OK — connections sound. Deep Create-machine build + ship-mounted cannons = aeronautics. Already at 2-pillar goal.
- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: numismatics sell / bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel and cast iron are scarce processed metals — a munitions trader buys bulk ingots or finished shells for coin, driving the Create-economy loop
- from: createbigcannons:big_cartridge / shell | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board commissions shell production — craft X cartridges, collect coin; combat production feeds the economy
- from: createbigcannons:nethersteel_ingot | via: occultism:spirit_fire (haunt raw nethersteel precursor) | to: magic | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: nethersteel is forged in the nether's soul-fire — an occult haunting step yields the spirit-tempered ingot; Create-meets-occult for the top cannon tier
- from: createbigcannons:bronze_cannon_barrel | via: create:sequenced_assembly as M-23 structural component | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: cannon barrels are weapons, not airframe hull/structural members. M-23 targets structural alloy plates/beams for hull construction. Forcing a cannon part into hull supply is a role mismatch.

## jei   [anchors: client-UI/support (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Recipe-lookup display only. No material surface.

## shulkerboxtooltip   [anchors: support/client-QoL (1)]
- LEAVE — zero content: no items, no blocks, no loot. Client-side tooltip renderer. No material surface.

## create_ultimate_factory   [anchors: Create (1)]
- from: create_ultimate_factory diamond recipe (coal-block+lava → diamond via compacting) | via: design note / scarcity concern | to: survival/scarcity | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: the pack is scarcity-driven (regional ores are scarce by design); a renewable coal→diamond recipe undermines that foundation. No motif covers "conflict with scarcity design." Flag for human review — this recipe in particular may need disabling.
- from: create_ultimate_factory strata-stone recipes (nuggets+gravel → granite/diorite/andesite) | via: create:compacting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: strata stones are deco, not a foreign-system feedstock. M-12 is processing into a *useful intermediate* for another system; making deco stones renewable is Create-internal only — 1-pillar, no new anchor added. Not a cross-system weave.
- LEAVE — this is a recipe-only datapack; it deepens Create-internal recipes but has no items of its own to route outward. The diamond recipe deserves a scarcity-review flag (see REJECT above). No 2nd-anchor weave is coherent.

## lithostitched   [anchors: support/library (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Worldgen-modifier library. No material surface.

## appleseed   [anchors: survival (1)]
- from: balanced-diet buff demand | via: config/tuning (high-nutrition multi-group foods priced in Numismatics) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: diet variety has real mechanical value — a cook specialist sells diverse prepared dishes for coin because buyers need multiple nutrient groups, not just saturation
- from: balanced-diet buff demand | via: config/tuning (Serene Seasons crops gate seasonal nutrients) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a winter-only crop (seasonal) provides a nutrient group only available that season — diet pressure drives players to stockpile or trade across seasons, closing the scarcity loop
- from: appleseed diet buff | via: design note (magic buff foods → extra nutrient group tags) | to: magic | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: adding magic-derived nutrition groups would need a new mechanic AppleSeed doesn't natively support (no per-item-tag override in its auto-calc). No existing motif covers "magic food = diet buff." no-motif → REJECT-for-review.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Pure server-tick threading optimization for Create trains. No material surface.

## invtweaksemuforipn   [anchors: client-QoL/support (1)]
- LEAVE — zero content: no items, no blocks, no loot. Client-side keybind-compat shim. No material surface.

## create_pattern_schematics   [anchors: Create (1)]
- from: create_pattern_schematics:pattern_schematic (repeating build tool) | via: recipe (require a MineColonies blueprint component as ingredient) | to: economy | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is native-method gating of a mod's own flagship item behind Create parts; a MineColonies ingredient here would be a foreign cross-mod gate, not M-05. No motif covers "tool gated on colony item." no-motif → REJECT.
- from: create_pattern_schematics:empty_pattern_schematic | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the schematic items have no recipe-type of their own registered; any recipe is vanilla crafting. More importantly, this is Create-internal tooling — no foreign system anchor is added. 1-pillar only; no second weave available.
- LEAVE — build-tooling QoL with no material outputs to route. Its 3 items are convenience tools; the only coherent weave would force a colony/economy tie with no motif match.

## everycomp   [anchors: support/deco-compat (1)]
- LEAVE — zero content of its own (no blocks, 1 creative-tab token item, no loot, no recipe types). A runtime generator; all real content is in the host mods (Create, Macaw, Blockus). Weaving belongs on the host mods, not here.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — zero content: no items, no blocks, no loot, no recipe types. Shared code library. No material surface.

== CHUNK COMPLETE ==
