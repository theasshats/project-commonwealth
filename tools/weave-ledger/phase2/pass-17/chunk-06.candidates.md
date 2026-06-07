# Phase 2 candidates — chunk-06

## imfast   [anchors: support/QoL (1)]

- LEAVE — pure server-side movement-validation mixin; 0 items, 0 blocks, no content surface. Functionally serves aeronautics (keeps ships from getting kicked) but as a fix, not a wireable resource. No motif applies.

OK — connections sound (support anchor is correct; no weave is appropriate or possible).

## create_ultimate_factory   [anchors: Create (1)]

Power-read: this is a recipe datapack — no blocks, no items of its own. Every recipe it adds uses existing Create machine types (compacting/crushing/mixing/splashing/haunting). Its explicit job is to make vanilla resources renewable via those machines (coal→diamond via heated compacting, nuggets+gravel→strata stones, etc.). It deepens the Create pillar but has no free materials to route anywhere else, and no items another mod could pull. The one latent angle: its coal→diamond and lava→stone renewability loops might interact with scarcity design intent (create_ultimate_factory's renewable diamond path could undercut GTMOGS scarcity if unmanaged). That's a curation note, not a weave.

- LEAVE — recipe datapack with 0 items, 0 blocks of its own; it authors recipes onto Create's existing types and has no material surface for a cross-pillar weave. The only design note is: verify its renewable-diamond recipe doesn't undercut GTMOGS scarcity intent (a config/disable pass, not a weave).

REWORK: the dossier's anchor (Create only, 1) is accurately scored — a datapack that authors Create recipes is firmly Create-pillar. No second anchor is achievable through weaving because there is nothing to route.

## formations   [anchors: survival (1)]

Power-read: purely a worldgen scatter-structure mod (altars, cabins, pedestals, ruins, campsites built from vanilla/modded block palettes). The AUTO digest confirms 0 blocks registered under its own namespace and loot=no, so it seeds no loot tables. The one item the jar registers (`formations:template_editor`) is an authoring tool for the mod's developer, not a player progression item. No processing methods; no drops; no items for any machine to pull.

Red-team: could the template_editor be wired as a crafted item? It's a dev utility and wouldn't make thematic sense as a player-crafted item. Could a structure mod tie into bounties (M-14)? Only if it had loot — loot=no means there is nothing to seed. Could its generated altars/pedestals contextually be tied to a ritual system (loot-seed → occultism, M-11)? The structures themselves are cosmetic, not loot-bearing; loot-seeding would require the mod to have loot tables, and it doesn't. All roads dead-end.

- LEAVE — 0 own blocks, loot=no, template_editor is a dev tool. Cosmetic scatter structures with no loot surface; no coherent weave path. Second anchor is not achievable.

OK — connections sound (survival anchor correct; leave is appropriate).

## accelerateddecay   [anchors: support (1)]

Power-read: zero items, zero blocks, zero gameplay content. Pure leaf-decay performance behavior patch. Nothing to route.

- LEAVE — genuine zero-content performance mod. No items, no blocks, no methods. LEAVE is the correct and only verdict.

OK — connections sound.

## minecolonies   [anchors: survival, Create (2)]

Power-read: minecolonies is a first-class production-route node (per SYSTEMS.md §3 and the dossier). It already holds ≥2 anchors: survival (settlement/food) and Create (quarries gated on brass/cogwheel parts via 98-minecolonies.js, M-05). The dossier correctly notes the deeper Create tech is gated BEHIND colony research. Now check for third-anchor candidates.

Candidate — economy via M-09 (colony food/goods as sellable trade goods): the colony produces a category of foods (`minecolonies:apple_pie`, `minecolonies:baked_salmon`, c:foods/* categories including bread/soup/vegetable/candy tags) that are finished prepared goods. Finished food produced cheaply by NPC workers is a natural sell-good — the colony feeds the trade pillar. The method is `numismatics` sell/price on colony-produced items. Power: mid-tier (colony food is everyday/mid; depth is proportional). Tone: a settlement that supplies the local market is the most natural economy-loop participation imaginable — "the colony feeds and sells to the server." This advances the loop directly (production node → economy node). Red-team: could undercut food scarcity if all food is buyable freely — but price tuning handles this; the weave is a link, not a balance fix. Motif: M-09.

Candidate — economy via M-14 (bounty board → colony guards/combat): minecolonies has barracks, guard towers, combat academy — colonists that fight. A bounty board could source colony-defense quests (kill waves near a town hall), paying coin for completing them. Method: `bountiful` board → numismatics. Power: mid. Tone: colonies under threat, bounties to protect them — natural (M-14). Red-team: this is a stretch — bountiful bounties are usually mob-kill, not colony-specific; wiring it to colony events would need custom KubeJS. Tag as weaker. Motif M-14 provisional.

Existing connections check: M-05 quarries on Create parts is well-anchored and correctly scoped (mid-tier quarry machines on brass/precision). The survival anchor from settlement/farming is accurate. No existing connection is arbitrary.

- from: minecolonies:apple_pie, minecolonies:baked_salmon, minecolonies c:foods/* tags | via: numismatics sell/price (KubeJS price config) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: colony cooks produce cheap bulk food that players buy at market — settlement becomes the server's breadbasket
- from: minecolonies barracks/guard-tower events (colony defense) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: wiring bounties to colony-specific defense events needs custom KubeJS colony event hooks that don't exist natively; the surface is real but the delivery mechanism is too speculative for a Phase-2 accept — flag for Phase-3 design (provisional motif)

REWORK: none — existing Create/survival connections are solid and correctly scoped. The dossier's note "(economy is a possible 3rd via M-09 … but emergent)" is correct; this pass formally proposes it.

