# Phase 2 candidates — chunk-01

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — pure code library (GUI/block-entity/packet scaffolding); registers zero blocks, zero items, no loot, no recipe types. Genuine zero-content surface — nothing to route.

## cbc_at   [anchors: create, aeronautics (2)]
OK — connections sound. Create + aeronautics is the correct read: all output (autocannon/rocket-pod weapon blocks and munitions) is assembled through Create-native cutting and CBC's munition-assembly pipeline, and those weapons arm Aeronautics ships/contraptions for PvPvE combat.

New links to assess:

- from: cbc_at heavy autocannon / rocket-pod tier | via: M-15 boss-key unlock (boss drop as a KubeJS-gated required input for the rocket-pod breech or heavy autocannon breech) | to: survival (boss-drop production route) | motif: M-15 | power: endgame | tone: ok — heavy artillery locked behind a dangerous boss is exactly the pack's intended depth curve; "of course you need a boss drop for ship-killing guns" | verdict: ACCEPT | hook: the rocket-pod rail doesn't assemble until you bring the drop from whatever dropped it; the combat specialist earns the escalation
- from: cbc_at munitions (caseless / AP cartridges) | via: M-34 combat-route supply → emergent trade | to: economy | motif: M-34 | power: mid | tone: ok — munitions are expendable, so a munitions crafter supplies non-combat players with the ammo their ships carry | verdict: ACCEPT | hook: the engineer running the airship needs shells; the artillery specialist sells them — a genuine recurring demand that never zeroes
- from: cbc_at barrel/breech moulds (regional bronze/steel scarcity) | via: M-30 regional-scarcity gate — bronze/steel from GTMOGS ore-gen locks the cannon tier regionally | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't cast autocannon barrels without the bronze, and bronze is not everywhere
- from: cbc_at assembled autocannon (machine component) | via: M-24 mechanical component → propulsion/control — an autocannon mount satisfies the "controlled-fire weapon" slot on an Aeronautics ship's armament recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: cbc_at's output (weapon mounts) already fully constitutes aeronautics armament; framing it as feeding an aeronautics *drivetrain* recipe would be a stretch — M-24 is about propulsion/control surfaces, not weapons. The aeronautics anchor is already sound without this extra edge. Flag no-motif mismatch.
- REWORK: dossier 2nd-anchor candidate mentions M-05 native-method gating for the heavy autocannon tier — the delivery is right (boss-drop or colony unlock gates the breach) but the motif is more precisely M-15 (boss-key unlock) or M-28 (colony route); M-05 is "flagship item built in its own machine gated on Create parts", which is subtly different. Recommend replacing dossier suggestion with M-15 + M-28 fork as above.


