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

## create_hypertube   [anchors: create, aeronautics (2)]

Already at ≥2 anchors. Auditing existing connections.

REWORK: OK — connections sound. Hypertubes are kinetic-Create-powered entity transit; Create (sequenced_assembly construction) + aeronautics/logistics (player/entity transport arm) is the correct pairing. The mod moves people, not items, so no processing pull exists. No further anchor is coherent.

New link candidate:
- from: hypertube network (player transit infrastructure) | via: config/worldgen tie — zone-gating hypertube entrances to colony-built stations | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies doesn't control hypertube placement; this would be a building-convention, not a recipe/method edge. No mechanism exists to gate tube entrances via colony — not a Phase-3 action.
- from: create_hypertube:hypertube_entrance (crafted via create:sequenced_assembly) | via: create:sequenced_assembly, requiring northstar:advanced_circuit as a component | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: wiring up a hypertube entrance requires an advanced circuit — the automation/transit infrastructure is gated on the electronic-manufacturing tier, so fast transit is a Create-tech milestone not a basic craft

## knightlib   [anchors: support/library (1)]

- LEAVE — library/API mod. The medieval content items (Great Chalice, grails, homunculus, essences) are dormant without Knight Quest, which is not in this pack. Weaving dead/inert items is explicitly ruled out ("do not weave dead items"). If Knight Quest is ever added, knightlib:great_essence and knightlib:filled_grail are natural M-02/M-10 reagent candidates (mob-drop/altar sink). Not applicable today.

## detect-afk-1.2.2   [anchors: support/QoL (1)]

- LEAVE — genuine zero-content server-behavioral mod. AFK detection with no items, no blocks, no methods, no loot. Nothing to weave.

