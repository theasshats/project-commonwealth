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



