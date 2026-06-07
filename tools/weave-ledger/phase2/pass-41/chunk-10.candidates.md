# Phase 2 candidates — chunk-10 (context-fed)

## create_cheese   [anchors: create, survival (2)]

Existing rows cover: M-35 maturing (strong), M-28 colony provisioning, M-26 consumption/diet demand, M-33 fromagerie service-for-hire, M-12 FD/ED processing integration, M-29 alpine-salt cross-route dependency, M-16 seasonal dairy scarcity. What is missing: the Cellar's tag-extensibility has not been routed as an M-32 byproduct sink for fermentation intermediates (the magic-perishable angle was rejected for tone but the wine-must angle has no such clash). Also, no row notes the Create-upstream gate for tier-3 maturing as an M-05 deepening distinct from sequenced assembly.

- NEW | from: create_cheese:cheese_cellar (tag-extensible maturing station) | via: create_cheese:maturing accepting vinery:grape_must or alcohol_industry wort as a cellar input tag | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cellar doubles as a general aging vessel — wine must matures beside brie, closing the fermentation byproduct loop without any arcane stretch

- NEW | from: create_cheese tier-3 maturing (tier-3 calendar page, 900-tick maturation) | via: create:pressing (require a Create-pressed beeswax seal — pressed honeycomb block → wax blank — as the physical input consumed in the tier-3 maturing slot alongside the calendar page) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: proper aged cheese is wax-rinded; the wax seal is a pressed-Create component that gates tier-3 without any sequenced-assembly overreach and deepens the Create anchor with an organic upstream step

## createfisheryindustry   [anchors: create, survival (2)]

Existing rows cover: M-28 colony seafood provisioning (strong), M-26 diet/consumption, M-34 combat-supply high-saturation seafood, M-31 fish_skin bulk logistics, M-12 fish_skin as leather-substitute cross-route input, M-16 seasonal bait catch. The fish_skin M-10 magic ACCEPT is split (tone weak, rightly so). Gaps: the `copper_diving_leggings` (a Create-backtank gear item) has never been routed as a cross-route dependency that ties the fishery to the aeronautics pillar via underwater ship-work; and irons_spellbooks shellfish-alchemy (one tentative ACCEPT) has no power-tier nuance. Also: no row proposes the `bait_trap` method itself as a **M-16 seasonal gate** at the method level (seasonal bait types changing trap outputs).

- NEW | from: createfisheryindustry:copper_diving_leggings (Create-backtank underwater-movement gear) | via: recipe — require an Aeronautics-supplied component (e.g. a Create Aeronautics buoyancy balloon piece or a pressurised brass canister) as a recipe ingredient in the leggings crafting recipe | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: ship salvage and underwater hull repair demand the diving leggings — but the leggings themselves need a pressure vessel from the aeronautics supply chain; the diver and the shipwright are cross-dependent

- NEW | from: createfisheryindustry:bait_trap method (createfisheryindustry:bait_trap catch table) | via: config/loot-seed — designate specific seasonal baits (spring: bloodworm, summer: cicada, winter: ice-grub) so only season-appropriate rare catches (lobster, rare shellfish) appear in a given season window | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the trap's catch table already supports bait-typed entries; seeding seasonal baits into Serene Seasons fertility windows makes the fishery a seasonal operation, not an always-on protein tap — a nuance none of the existing M-16 rows capture at the method level (they seed crops, not bait tables)

- CHALLENGE | from: createfisheryindustry:fish_skin (leather-equivalent byproduct of peeling) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | verdict: REJECT | hook: the ACCEPT rows for fish_skin as magic reagent (M-10/M-11) are tone-weak and split evenly; fish skin is an industrial tanning byproduct with no mythic or spirit charge; M-11 explicitly requires organic-to-essence transmutation with a soul/spirit reading; the already-accepted M-32 leather-substitute cross-route is the grounded anchor for this material — adding a magic row alongside it buys a second system for an item whose tone carries none

## grimoireofgaia   [anchors: survival (1)]


