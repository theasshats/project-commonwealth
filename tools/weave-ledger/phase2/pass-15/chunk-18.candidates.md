# Phase 2 candidates — chunk-18

## occultengineering   [anchors: Create, magic (2)]

Existing connections are sound — this mod IS the Create↔Occultism bridge by construction; it pulls from `create:*` methods and feeds into `occultism:ritual/spirit_fire`. Reviewing for a potential 3rd pillar and checking existing connections.

REWORK: OK — connections sound. The inbound `create:compacting/filling/haunting/mixing/pressing/item_application` and `occultism:ritual/spirit_fire` are exactly what you'd expect; nothing arbitrary.

New cross-pillar candidates:

- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: recipe → create:crushing then numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is a genuine occult alloy — running it through Create's crusher and minting coin from the dust makes the occult-automation line double as a currency feedstock, and fits the scarcity-driven economy; the dossier already flagged this candidate.

- from: occultengineering:spirit_solution (reserved reagent) | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is the reserved occult intermediate (reagent-ownership table); using it as a spirit_trade commodity risks double-spend and bleeds its role as the bridging reagent. Better to leave it as infrastructure.

- from: occultengineering:phlogiport (wireless logistics block) | via: minecolonies colony supply unlock | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: phlogiport is a logistics infrastructure piece, not a boss drop; M-15 requires a boss-key drop as gate item. Tone mismatch — forcing it as a progression gate is arbitrary.

