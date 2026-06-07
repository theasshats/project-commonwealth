# Phase 2 candidates — chunk-16

## create_jetpack   [anchors: create, aeronautics (2)]

Dossier already marks this ≥2 anchors (Create + aeronautics). Review the existing connections before proposing more.

REWORK/OK check:
- The aeronautics anchor is *sound*: a jetpack powered by Create compressed air is exactly the personal-mobility arm of the aeronautics/economy logistics system — it advances the loop (Create production → aeronautics mobility). The Create anchor is trivially solid (it's a Create add-on).
- The dossier note "could be a boss-drop/MineColonies-gated unlock" is the right instinct — this is a mid-tier flight item, and gating it behind a boss drop or colony unlock fits the depth model.
- No new cross-system weave is coherent here beyond what's already anchored. The only plausible third would be survival (flight eases exploration pressure), but that's ambient; the gear itself does no survival processing.

Candidate proposals (method-pull pass):
The registered method `create_jetpack:copy_components_mechanical_crafting` is a component-copy helper, not a connective sink. The jetpack itself consumes compressed air (M-26 consumption) and is built from brass+backtank (already Create). No foreign material leaves the mod.

- from: jetpack (brass tier mid-game flight gear) | via: M-15 boss-key unlock (gating) | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: The Invoker boss drops a Hallowed Gem; weave it as a required input for the brass jetpack upgrade, so personal flight costs a raid clear — flight earned, not bought.
- from: jetpack mobility | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: Jetpack is gear, not a trade good — it's the *tool* of the logistics/combat specialist, not a commodity that flows through the economy. Bare "sell it" logic — no demand gating.
- from: jetpack (netherite tier) | via: M-06 sequenced-assembly keystone | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: The netherite upgrade already implies deep progression; adding another sequenced-assembly chain on top of what the jetpack already requires would pile cost on cost without adding cross-system contact. M-15 gating is the cleaner, more thematic hook.

OK — connections sound (Create + aeronautics are the right pair; M-15 boss-gating is the proposed depth step).

## betterpingdisplay   [anchors: support (client UI) (1)]

Pure client-side UI mod: replaces ping bars with a numerical millisecond value. Zero blocks, zero items, zero loot, no recipe types. No material surface to route through any method. Client QoL; player-facing but purely informational — no loop contact.

LEAVE — genuine zero-content client UI; no items, no methods, nothing to weave. Sanctioned support role.

