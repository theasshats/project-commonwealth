# Phase 2 candidates — chunk-09 (pass-27, blind)

## resourcefullib   [anchors: support (1)]
- LEAVE — pure code library (0 blocks/items/loot, no methods, no materials). Genuine zero-content surface.

## inventoryprofilesnext   [anchors: support (1)]
- LEAVE — client-only inventory QoL; no items/materials/methods to route. Genuine zero-content surface.

## zeta   [anchors: support (1)]
- LEAVE — mod-development framework (Quark's backbone); 0 items, the lone biome-modifier is scaffolding not player content. Zero-content library.

## balm   [anchors: support (1)]
- LEAVE — multi-loader abstraction library; no items/blocks, only nugget c:tags + scaffolding biome-mod. Zero-content library.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: seafood_chowder / lobster_soup / cooked steaks | via: create_cheese:maturing OR farmersdelight processing | to: survival/economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: prepared dishes are already finished food; routing through another processing method is gilding. The food chain via farmersdelight is already inbound. No demand-gating beyond ambient food use.
- from: cod_steak / cooked seafood | via: cold_sweat insulation/warm-food | to: survival | motif: no-motif | power: everyday | verdict: REJECT | reason: no warm-food temperature hook in Cold Sweat config surface here; speculative, no-motif.
- from: fish_skin (leather substitute) | via: numismatics mint | to: economy | motif: none | power: everyday | verdict: REJECT | reason: bare sell link, not demand-gating. Economy is player-run; fish_skin's value is its ambient use as leather.
- from: harpoon_gun / diving_leggings (Create backtank gear) | via: create:sequenced_assembly / deploying upgrade | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: already a Create-anchored mod with native Create-method recipes (pressing/sequenced/mechanical_crafting inbound). Adds no cross-system reach.
- REWORK: existing economy 2nd-anchor candidate in dossier cites M-09 (luxury good→coin) — RETIRED. Drop it; seafood's economy role, if any, is ambient food demand (no motif), not a weave. Existing Create+survival anchors are sound.
- Net: connections sound on the two real anchors; the dossier's M-09 economy note should be struck.

## ponderjs   [anchors: support (1)]
- LEAVE — KubeJS Ponder-scene authoring tool; no items/materials/world content. Documents the Create spine, doesn't feed a pillar. Zero-content.

## betterendisland   [anchors: survival (1)]
- from: End-island dragon arena | via: loot-seed | to: economy/magic | motif: M-34 / M-02 | power: endgame | tone: ok | verdict: REJECT | reason: loot=no and 0 registry items — the mod is a pure structure/worldgen overhaul of the *vanilla* End fight; it adds no loot tables of its own to seed and the dragon's drops belong to vanilla. Nothing to attach a weave to. (Per briefing: not a loot-bearing structure, so LEAVE is correct.)
- LEAVE — structure/worldgen overhaul only; no items, no loot tables, no methods. Deliberately vanilla-plus End spectacle; forcing an edge would be a defect.

## opacpvp   [anchors: support (1)]
- LEAVE — PvP-rules addon (/opacpvp toggle, config); 0 items/blocks/methods. Serves the coop premise directly; nothing material to weave.

## create_cheese   [anchors: Create, survival (2)]
- from: aged cheeses (cheddar/brie/gouda…) | via: create_cheese:maturing (the wait gate) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of brie that had to sit in the cellar is worth more than curds — the aging time IS the value-add, so a "cheesemonger" specialist emerges and trades matured wheels to crews who won't wait.
- from: create_cheese:maturing station (tag-driven, accepts arbitrary inputs) | via: maturing | to: economy/survival (cross-mod) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cellar's tag-extensible output means other mods' "must-age" goods (wine must, cured meats) can route through it — the maturing method becomes the pack's shared aging axis, an M-35 host.
- from: cheese (high-protein food) | via: cold_sweat warm-food / numismatics | to: economy | motif: M-09 | power: mid | verdict: REJECT | reason: dossier's "luxury good→coin (M-09 STRONG)" is RETIRED. The real economy weave is M-35 (above), not a bare sell.
- REWORK: dossier 2nd-anchor cites M-09 luxury→coin — strike it; replace with M-35 maturation (accepted above). Create+survival anchors sound; M-35 makes it a genuine 3-system tie via demand-gating (aging wait), not selling.

## create_connected   [anchors: Create (1)]
- from: copycat_* family (universal block skin) | via: copycat application | to: survival/deco | motif: no-motif | power: everyday | verdict: REJECT | reason: copycat is a cosmetic skin sink, mints no material and routes nothing cross-system; it's Create-internal QoL. No motif.
- from: kinetic_battery / brass_gearbox / clutches | via: create:* | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: these are generic Create drivetrain parts already inside the Create spine; Aeronautics drivetrain weaves (M-24) target a *foreign* mod's mechanical part, not more Create cogs. No cross-system gain.
- LEAVE — pure Create-spine QoL/expansion (parts, copycats, logic). Its value is convenience within Create; no foreign-material weave is coherent. Single Create anchor stands.

## smartbrainlib   [anchors: support (1)]
- LEAVE — AI-framework code library (no items/methods). Zero-content.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth / boiler (fuel-burning climate machines) | via: create:filling + Create part gating (steel/brass casing) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a fuel-hungry multiblock that heats a whole base — gating the Hearth (or a higher-tier emitter) on Create brass casing / piping Create steam as its fuel ties the temperature backbone to the tech spine, so surviving harsh climate needs a Create build.
- from: hearth/boiler fuel burn | via: create_addition:liquid_burning / fuel intake | to: Create/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: climate machines burn fuel continuously to hold temperature — a standing consumption sink (M-26) that keeps fuel/charcoal demand alive for the whole crew in a cold biome, never zeroing out.
- from: goat_fur / chameleon_molt / hoglin hide (insulation at sewing table) | via: sewing-table insulation accepts ANY warm fur/hide | to: survival (cross-mod) | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: insulation accepts furs/hides from the pack's mob mods — a mob-mod drop (e.g. a foreign creature's pelt) becomes the insulation filler, so the hunter's drop feeds the cold-survival route (cross-route material pull).
- from: insulated cold-climate armor | via: numismatics sell | to: economy | motif: M-09 | power: mid | verdict: REJECT | reason: dossier's "luxury survival good→coin (M-09 WEAK)" is RETIRED — bare sell. Real economy demand here is M-26 fuel consumption (above), not selling armor.
- from: filled_waterskin | via: create:filling | to: Create | motif: M-26 | power: everyday | verdict: REJECT | reason: the create:filling inbound edge already exists; no new reach.

## letsdocompat   [anchors: survival (1)]
- LEAVE — it IS the weaving/glue layer (cross-mod food recipes + tag unification, 0 items of its own). Its existence already does the M-12-style food-web unification; nothing of its own to give a 2nd anchor.

## rechiseled   [anchors: support (1)]
- from: chiseling recipe groups (600+ deco variants) | via: rechiseledcreate Mechanical Chisel (Create-powered) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel runs Rechiseled's chiseling on Create power, so the whole builder's palette becomes automatable through the spine — a Create-anchored second tie for a deco mod. (Companion rechiseledcreate already in pack; this is the existing intended link, sound.)
- REWORK: dossier cites M-04 (Create recycles deco / lossy crushing) for the Mechanical Chisel — mis-cited. The Mechanical Chisel doesn't crush-to-raw; it runs chiseling conversions, which is M-20 deploy/apply-style upgrade, not M-04. Re-tag as M-20. The connection itself (Create via mechanical chisel) is sound; only the motif label is wrong.

## mru   [anchors: support (1)]
- LEAVE — code-sharing library (0 items/methods). Zero-content.

## ferritecore   [anchors: support (perf) (1)]
- LEAVE — memory-optimization mod, no in-world content. Sanctioned perf anchor, nothing to weave.

## curios   [anchors: support (1)]
- LEAVE — accessory-slot API; no items of its own, only hosts foreign trinkets. Zero material surface; its value is letting other mods' accessories exist.

## revelationary   [anchors: support (1)]
- LEAVE — advancement-gated block-visibility library; 0 items, no resource flow. A hook for M-05-style gating when a dependent uses it, but nothing of its own to weave.

## mffs   [anchors: Create, survival (2)]
- from: mffs:projector / interdiction_matrix / focus_matrix | via: create:sequenced_assembly + create:electron_tube gating | to: Create | motif: M-05/M-06 | power: endgame | tone: ok | verdict: ACCEPT (existing, gold-standard) | hook: the flagship force-field machines are built through Create native-method gating + sequenced-assembly chains — already authored in 60-mffs.js; the reference weave.
- from: Fortron-field base defense | via: PvE protection | to: survival | motif: M-26 | power: endgame | tone: ok | verdict: ACCEPT (existing) | hook: force fields wall off a base against PvE/PvP — the survival anchor; sound.
- from: interdiction_matrix / defensive modules (combat-grade base defense) | via: boss-drop or cross-route input | to: economy/survival | motif: M-29 / M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a defensive endgame module could require a boss-drop or magic-route component, forcing the base-builder to trade with a combat/magic specialist for the top-tier field — deepens the existing Create chain with a cross-route demand rather than more Create parts. (NEW: extends, doesn't overlap the M-05/M-06 inbound.)
- REWORK: existing Create+survival connections are sound (gold-standard). No mis-cost. Only addition is the optional M-29/M-34 cross-route module gate above.

== CHUNK COMPLETE ==
