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

Existing rows cover: M-11/M-02 spirit-fire/ritual (strong consensus 18 ACCEPT), M-10 Ars imbuement of mob-drop fragments (7-10 ACCEPT), M-15 boss busts as gate items for high-tier Create/tech recipes (strong), M-34 combat-specialist trade of busts/rings. These are the obvious high-signal weaves. What is missing: (a) a nuance on the **book_of_memory** specifically — it appears in one M-15 ACCEPT but without power-tier reasoning; (b) the **ring artifacts** have conflicted rows (M-17 FE-charging one ACCEPT; M-06 sequenced rejected; M-10 rejected) — no clean mid-power route has been established; (c) the **biome-modifier breadth** (75 biome modifiers governing spawns by biome/difficulty) creates a **M-30 regional scarcity** reading for specific creature drops that no existing row captures at that precision.

- NEW | from: grimoireofgaia:book_of_memory (the rare proof-of-bestiary item, loot=yes) | via: KubeJS recipe gating — the book_of_memory is a required non-consumed input (like a key-unlock) to craft a high-tier occultism familiar-focus or ars_nouveau tier-4 spellbook upgrade, consumed once per player progression unlock | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a mage who has studied the full Gaia bestiary holds its memory in one book — that knowledge (not just the materials) unlocks the apex spellbook tier; the combat-knowledge gating reads as natural mage-progression, not forced

- NEW | from: grimoireofgaia mob spawns governed by biome-modifier tags (75 biome modifiers mean certain creatures — sphinx, vampire, mermaid — only spawn in specific biomes) | via: config/worldgen — designate these per-biome exclusive creature drops (mermaid pearl → ocean biomes only; sphinx riddle-token → desert only) as M-30 regionally-scarce reagents that feed the magic web | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: a mermaid pearl only comes from ocean-biome spawns; a desert settlement's magic specialist must trade for it or fund an expedition — the biome-gating already exists, the weave just names the drops as regional-scarcity inputs to the magic economy

- CHALLENGE | from: grimoireofgaia:ring_of_haste / ring_of_speed | via: create_new_age:energising | to: create | motif: M-17 | verdict: REJECT | hook: M-17 (FE charging bridge) is for charging tools/foci that need an energy-state to function — the Gaia rings are mob-dropped finished equipment with passive on-hit effects; they are not inert items waiting for a charge to activate, so the energiser has no coherent "unlock the function" role here; the one ACCEPT row is thematically evocative but mechanically arbitrary

## revelationary   [anchors: support (1)]

LEAVE — zero-surface library (no items, no blocks, no loot, no recipe-types; pure advancement-gated block-visibility API). No content to route through any method; the gating it enables belongs to the host mods that use it.

## toomanypaintings   [anchors: support/decoration (1)]

LEAVE — pure decoration palette (no items, no blocks, no loot, no recipe-types registered; painting-selection GUI only). No material to route; the sole prior proposal (Supplementaries lore-text on paintings) was correctly rejected as no-motif cosmetic narrative.

## hpm   [anchors: aeronautics (1)]


