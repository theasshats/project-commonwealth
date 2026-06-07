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






