# Phase 2 candidates — chunk-10

## platform   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code library (0 blocks, 0 items, 0 recipe-types); only registered content is a biome-modifier framework hook for its own API, not player content. Nothing to route through any method.

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — structure-only worldgen datapack (0 items, 0 blocks, loot=no); uses only vanilla blocks and vanilla loot riders. Registers no custom loot tables to seed, no items/methods to route. The ocean-village content is pure exploration variety — the loot-seed exception (PHASE2-BRIEFING §delivery) requires the mod to own loot tables, which this one does not.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:void_worm_beak / void_worm_effigy (boss-tier void worm drop) | via: boss drop as gate item | to: create | motif: M-15 | power: endgame | tone: ok — void worm is a flagship dangerous mob; its beak is a natural exotic-material keystone for a complex Create recipe | verdict: ACCEPT | hook: the void worm's beak is the material that makes the rarest Create components — no kill, no craft
- from: alexsmobs:ambergris (mid-tier ocean drop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — ambergris is literally a real-world alchemical/perfume reagent; feeding it into an arcane infusion is the most thematically grounded possible weave | verdict: ACCEPT | hook: the whale's secretion turns raw ocean exploration into an arcane catalyst
- from: alexsmobs:ender_residue / void_worm_beak (endgame ender-adjacent drops) | via: occultism:spirit_fire or ritual | to: magic | motif: M-02 + M-11 | power: endgame | tone: ok — ender/void-adjacent matter is the natural feedstock for occultism's spirit operations | verdict: ACCEPT | hook: the residue of a creature that bridges dimensions dissolves into spirit-fire, yielding a rare occultism reagent
- from: alexsmobs:bear_dust / banana_slug_slime / bear_fur (everyday to mid organic drops) | via: create:crushing or create:mixing | to: create | motif: M-02 + M-03 | power: everyday–mid | tone: ok — light industrial processing of organic drops (fur → fiber, slime → adhesive intermediate, dust → processed powder); keep to one or two light steps | verdict: ACCEPT | hook: your stockpile of bear dust and slug slime isn't junk — the Mixer turns it into something the factory needs
- from: alexsmobs:ambergris / void_worm_beak (rare drops, traded by combat/ocean specialists) | via: loot + emergent trade | to: economy | motif: M-34 | power: mid–endgame | tone: ok — rare mob drops are the classic combat-specialist trade good; a dedicated hunter farms and sells to magic/tech players | verdict: ACCEPT | hook: someone has to go hunt void worms; the rest of the server buys the beak
- from: alexsmobs:banana (everyday organic) | via: create:milling or farmersdelight:cooking | to: create/survival | motif: M-12 | power: everyday | tone: ok — banana milled to flour/processed to food intermediate; light one-step | verdict: ACCEPT | hook: a bunch of bananas run through the mill becomes flour for a diet-variety recipe
- from: alexsmobs:ambergris — bare sell/coin link | via: n/a | to: economy | motif: M-09 (retired) | power: mid | tone: n/a | verdict: REJECT | reason: M-09 retired; "ambergris is sellable" is the ambient endpoint of the loop, not a weave — the M-34 trade link above already covers the economic dimension properly
- from: alexsmobs seasonal-spawn gate | via: Serene Seasons config | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: no documented seasonal spawn restriction in alexsmobs; proposing a seasonal config tie for generic biome mobs is speculative and unsupported by the dossier — would need Serene Seasons spawn config support confirmed first

## fxntstorage   [anchors: create, survival (2)]
REWORK: OK — connections sound. Already at 2 anchors (Create material ladder + survival QoL). The create:mechanical_crafting inbound weave is confirmed by the jar. No arbitrary links; brass/hardened tier gating is coherent with the cost model.
- from: fxntstorage:backpack_flight_upgrade (endgame) | via: thematic adjacency to aeronautics | to: aeronautics | motif: no-motif | power: endgame | tone: clash — the flight upgrade is a worn gadget (personal propulsion), not an aeronautics propulsion/structural component; wiring it as an aeronautics input would be forced | verdict: REJECT | reason: no-motif; worn gadget ≠ ship component — the dossier itself flags this; don't force the edge
- from: fxntstorage:hardened_backpack / hardened_storage_box (endgame tier) | via: M-28 colony-cheaper-basics route | to: economy | motif: M-28 | power: endgame | tone: ok — a hardened-tier storage solution is exactly the kind of expensive-to-make basic a colony-player could supply cheaper (hut-built brass/hardened storage goods traded for coin), putting storage in the colony-economy web | verdict: ACCEPT | hook: a settlement's storage hut turns out hardened crates the solo craftsman would spend a week making — buy, don't grind

## corgilib   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code library (0 blocks, 0 items, 0 recipe-types, loot=no); loot/worldgen helpers are API framework for dependent mods, not player-accessible content. Nothing to route.

## balm   [anchors: support/library (1)]
- LEAVE — genuine zero-surface multi-loader abstraction library (0 blocks, 0 items, 0 recipe-types, loot=no). The iron/gold nugget c:tags it registers are scaffolding — already universally covered by vanilla/other mods; not a unique material surface. Nothing to route.

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — purely client-side HUD overlay (0 blocks, 0 items, 0 recipe-types, loot=no); display-only armor readout. No materials, no processing surface, no loot tables. Nothing to route.

## pingwheel   [anchors: support/QoL-multiplayer (1)]
- LEAVE — multiplayer coordinate-ping utility (0 blocks, 0 items, 0 recipe-types, loot=no); transient markers over the network. No materials, no processing, no loot. Nothing to route. Sanctioned as co-op QoL.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — genuine zero-surface configuration engine library (0 blocks, 0 items, 0 recipe-types, loot=no); TOML serializer + GUI API for dependent mods. No player content whatsoever. Nothing to route.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — purely cosmetic blood-particle emitter (0 blocks, 0 usable items, 0 recipe-types); the 184 "items" are particle-definition holder entries, not obtainable player items. loot=yes in the digest is misleading — the items are particle holders (minecraft:blood1..blood15, etc.), not drops from loot tables that could be seeded with reagents. Nothing to route through any method.

## emojitype   [anchors: support/client-UI (1)]
- LEAVE — client-only chat shortcode-to-Unicode helper (0 blocks, 0 items, 0 recipe-types, loot=no). No in-world content surface at all. Sanctioned friend-group flavor.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — genuine zero-surface Kotlin language adapter (0 blocks, 0 items, 0 recipe-types, loot=no). Language loader only; no player content to route.

## terrablender   [anchors: support/library (1)]
- LEAVE — genuine zero-surface worldgen library (0 blocks, 0 items, 0 recipe-types, loot=no); biome-region partitioning API for dependent biome mods. No player-accessible content surface to route.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-surface framework library for MMF-Group mods (0 blocks, 0 items, 0 recipe-types, loot=no). Base classes + FoodInfo API only; all player content belongs to dependent mods, not this library.

## patchouli   [anchors: support/library-docs (1)]
- from: patchouli:guide_book / colored book items (everyday) | via: patchouli:shapeless_book_recipe → potential pack-authored guide | to: magic or create | motif: M-37 | power: everyday | tone: ok — Patchouli books are used by Ars Nouveau and Occultism as advancement-gated knowledge unlocks; a packdev-authored guide book could gate recipe knowledge (knowledge = research progression) | verdict: REJECT | reason: the recipe-type is Patchouli's own book-crafting method for building guide books, not a weave routing a foreign material; the knowledge gating belongs to Ars/Occultism's own progression (which already uses Patchouli), not a new Patchouli-level weave. Any knowledge-gate weave is authored on the *using* mod (Ars/Occultism), not on Patchouli as a library.
- LEAVE — the 9 items are guide-book covers used by dependent mods (Ars Nouveau, Occultism, etc.); Patchouli itself is documentation infrastructure with no independent material or method surface to weave as a Derpack mod entry. Content is provided by its users, not by Patchouli. Sanctioned support/docs role.

