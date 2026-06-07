# Phase 2 candidates — chunk-17

## occultengineering   [anchors: create, magic (2)]

Already at ≥2 anchors. Auditing existing connections + checking for new links.

REWORK: OK — connections sound. The Create↔Occultism bridge is the defining purpose of this mod (M-05 native-method gating, M-11 ritual/transmutation sink, M-19 haunting seam via the fan-enspirit mechanic). The reserved `occultengineering:spirit_solution` reagent is correctly owned. No arbitrary edges found.

New link candidate:
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is an occult alloy already created through the Create-Occultism pipeline — pressing it into coin stock makes the specialist who controls occult automation the pack's mint-master for a rare alloy coin, a meaningful economic role
- from: occultengineering:mechanical_pulverizer / phlogiport (automated ritual logistics) | via: occultism:miner → spirit_trade (M-18 service pathway) | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: an occult-automation specialist offers ritual-processing as a paid service (spirit-pulverizing rare ores, phlogiport delivery of reagents) — labor flows player-to-player, no vendor; makes the occult-engineering investment a tradeable capability, not just personal automation
- from: occultengineering:spirit_solution (the reserved occult intermediate) | via: create:haunting (M-19) | to: Create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 already routes create:haunting INTO spirit outputs; reversing it (spirit_solution back through haunting) is a near-round-trip with no design gain. spirit_solution's reserved role is as an occult INPUT reagent, not a Create feedstock — flagging to avoid accidental double-spend.

## particlerain   [anchors: support/atmosphere (1)]

- LEAVE — pure client-side particle-rendering mod; no items, no blocks, no methods, no loot tables. Zero content surface to weave. Atmosphere/QoL support role only.

## collective   [anchors: support/library (1)]

- LEAVE — genuine zero-content code library (Serilum shared event-hook utilities). No items, no blocks, no recipe types, no loot. Nothing to weave.

