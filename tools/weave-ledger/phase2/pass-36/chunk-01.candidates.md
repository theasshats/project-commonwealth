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

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / guardian_soup / fugu_slice | via: M-26 consumption sink — high-value seafood dishes feed the diet system (pressure face), generating continuous demand from inland players for coastal-specialist goods | to: survival (diet pressure → economy) | motif: M-26 | power: mid | tone: ok — oceanic cuisine that requires ocean-zone access to produce is exactly the coastal-specialist trade angle | via: farmersdelight:cooking + diet demand | verdict: ACCEPT | hook: the inland player's nutrition bar demands ocean dishes she can't make without guardian drops; she buys from the coast specialist
- from: oceansdelight raw guardian / elder-guardian flesh | via: create:cutting (M-12 processing-chain pull) — cutting-board prep step that extends the FD cutting chain into a Create-machine variant, letting a Create player automate ocean-food prep | to: create | motif: M-12 | power: everyday | tone: ok — FD cutting is vanilla-table; a create:cutting variant is a light one-step upgrade for automation | via: create:cutting | verdict: ACCEPT | hook: running guardian harvests through a Create saw instead of a cutting board scales the operation; one integration, one extra step, clearly worth it
- from: oceansdelight:fugu_slice (poison-risk delicacy) | via: occultism:spirit_fire / M-11 ritual/transmutation sink — fugu flesh as a transmutation input that yields a toxin-reagent (M-11, organic→magic) | to: magic | motif: M-11 | power: mid | tone: ok — fugu is already a poison-mechanic item; feeding it to a spirit-fire ritual for a venom reagent is thematically tight | via: occultism:spirit_fire | verdict: ACCEPT | hook: the spirit-fire wants something with inherent toxicity; fugu flesh is exactly that
- from: oceansdelight:elder_guardian_roll | via: M-34 combat-route supply (elder guardian = a boss-class mob; its roll is a combat-gated luxury) | to: economy | motif: M-34 | power: mid | tone: ok — elder guardian is mini-boss tier; someone farming ocean monuments is the combat specialist supplying this | via: emergent trade | verdict: ACCEPT | hook: nobody casually kills elder guardians; the combat specialist farms ocean monuments and sells the rolls to players who want the buff food
- from: oceansdelight dishes | via: bare "sellable" — "these are luxury foods worth Numismatics coin" with no demand-gating | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: M-09 is retired; "sellable" is the ambient endpoint, not a weave. The M-26/M-34 edges above capture the real demand-gate without invoking the retired motif.
- REWORK: dossier's two candidates both invoke M-09 or M-09-adjacent coin-from-goods framing. Both should be replaced: the economy link is better expressed as M-26 (diet-pressure demand) + M-34 (combat-specialist supply of elder guardian goods), as proposed above.

## alternate_current   [anchors: support (1)]
- LEAVE — pure deterministic redstone-performance rewrite; registers zero blocks, items, or recipe types. No gameplay content surface whatsoever — genuine code-behavior mod only.

## searchables   [anchors: support (1)]
- LEAVE — client UI search/autocomplete API library; registers zero blocks, items, or recipe types. No content surface.

## l2library   [anchors: support (1)]
- LEAVE — shared code library for LightLand mods (Curios tabs, screen tracking, attribute APIs); registers zero blocks, items, or recipe types. No content surface.

## staaaaaaaaaaaack   [anchors: support (1)]
- LEAVE — QoL dropped-item coalescing mod; registers zero blocks, items, or recipe types. No gameplay content surface — entity-count reduction only.

## createthreadedtrains   [anchors: support (1)]
- LEAVE — server-side performance mod that parallelises Create's railway calculations; registers zero blocks, items, or recipe types. No content surface. Indirectly makes the logistics/aeronautics arm more scalable but is purely infrastructure.





