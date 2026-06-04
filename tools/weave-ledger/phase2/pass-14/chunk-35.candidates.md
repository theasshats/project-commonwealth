# Phase 2 candidates — chunk-35

## createpickywheels   [anchors: Create (1)]
- LEAVE — pure behavioral patch (no items, no blocks, no loot, no methods). It adds geographically-sensitive power requirements that deepen the Create pillar from within, but the mod has zero material surface to route anywhere. There is no second pillar to weave — the survival flavor ("world pushes back") is a design side-effect of a config change, not a connective node. LEAVE pending any future content addition by the mod.

## dragonlib   [anchors: support/library (1)]
- LEAVE — confirmed zero-surface code library. The single `dragonlib:dragon` entry in the jar is a dev/test artifact, not a player-facing item. No loot, no methods, nothing to route.

## clumps   [anchors: support/performance (1)]
- LEAVE — pure entity-merging behavior mod with no blocks, no items, no loot, and no methods. Counts confirm: 0 blocks, 0 items, loot=no. Genuine zero-surface library/behavior mod.

## kiwi   [anchors: support/library (1)]
- LEAVE — confirmed zero-surface modding library (registration helpers, GUI/font utilities). 0 blocks, 0 items, loot=no. Nothing to weave.

## knightlib   [anchors: support/library (1)]
- from: knightlib:great_essence / small_essence | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: Knight Quest is not in this pack; the grail/essence content is dormant without its parent mod. Weaving inert items that players cannot obtain creates a confusing dead-end in JEI. The medieval/alchemical flavor is thematically coherent with Occultism, so this is worth revisiting if Knight Quest is ever added — but for now the items have no obtainment path.
- LEAVE (current state) — 1 block + 6 items are registered but are wholly inert without Knight Quest. Weaving dead items that players cannot obtain is a guardrail violation (forced edge with no coherent acquisition path). Note for future: if Knight Quest is added, `knightlib:great_essence` is an obvious M-11 (ritual transmutation → magic reagent) or M-02 (mob-drop reagent sink) candidate.

## moonlight   [anchors: support/library (1)]
- LEAVE — confirmed zero-surface library (dynamic registration, villager AI, map-marker API). The two registered items (`moonlight:spawn_box`, `moonlight:placeable_item`) are internal helper entries, not player-facing content. loot=no. Nothing to route.

## extradelight   [anchors: survival, Create (2)]
- REWORK: existing Create anchor is via `create:mixing` (inbound weave from jar data). This is a good start but shallow — mixing fluids/ingredients is a minor touch. The dossier flags that the full grain→flour, coffee-grinding, and Vat/Evaporator fluid-reduction pipeline is NOT yet routed through Create's milling/pressing/mechanical crafting; the kitchen currently reads as a parallel system rather than Create's downstream. This connection should be deepened to M-12.
- from: extradelight crops (coffee, garlic, corn, citrus) via create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony kitchen's grain and coffee run through Create's millstone before the oven; automation feeds mouths
- from: extradelight feasts / high-tier dishes | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Baked Alaska or a full Feast tray is a luxury export — the colony cook sells it for coin, and the scarcity of good ingredients makes it worth real money
- from: extradelight:evaporator / vat outputs (salt, syrups, reduced fluids) | via: create:pressing or create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create's basin extracts the syrup/salt that the Vat turns into a seasoning; the bakery and the machine shop share the same fluid network
- from: extradelight high-tier feast ingredient (seasonal crop) | via: serene seasons gate (config) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: the grandest feast requires an autumn harvest — you can't rush the calendar
- OK — existing Create connection is real but thin; the above deepens it. The survival anchor is solid (the mod IS the survival food layer). Economy is the natural 3rd pillar given the feasts' effort cost.

## minecolonies_tweaks   [anchors: support/QoL (1)]
- from: minecolonies_tweaks scroll items (inventoryscroll / copyscroll) | via: create:mechanical_crafting or recipe | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the scrolls are handheld colony management tools, not machines or power components. Routing them through Create's mechanical crafting would gate a basic utility item behind a complex method disproportionate to its function. M-05 is for flagship machine items gated on Create parts, not QoL scrolls.
- from: minecolonies_tweaks c:crops/c:foods tag surface | via: (enables other weaves, not itself a weave node) | to: n/a | motif: n/a | power: n/a | tone: ok | verdict: REJECT | reason: the mod's real contribution is the unified tag set it injects — it is the *enabler* of food-web weaves (letting extradelight, farmersdelight, colony recipes all share a tag), not a weave node itself. There is no material to route through a method here; the value is structural.
- LEAVE — support/QoL mod. Its value is the c:crops/c:foods tag harmonization that enables other weaves, not a weave of its own. No items flow through any machine here. The inventoryscroll items are plain utility; forcing them into a crafting method would be depth-without-purpose.

## trashcans   [anchors: support/automation QoL (1)]
- from: trashcans:ultimate_trash_can (craft) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The trash can is an automation overflow utility, not a machine that earns a deep Create gate. Gating a QoL void block behind mechanical crafting imposes friction on the workflow it's meant to simplify. More importantly, in a scarcity pack, making void blocks harder to craft is a balance lever the maintainer should decide consciously — this is a design question, not a weave candidate.
- from: trashcans void mechanic | via: n/a | to: n/a | motif: no-motif | verdict: REJECT | reason: voiding items is anti-scarcity/anti-economy by nature; no motif covers intentional destruction as a connective link. The dossier notes this explicitly — don't weave something whose core function undermines the pack's economic design.
- LEAVE — automation QoL utility. No methods, no loot, no magic/economy surface. The only integration question is a balance one (should void be gated?) which is a design call for the maintainer, not a weave candidate.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the deepest rooms of the stronghold yield a handful of old coins — wealth from an abandoned civilization, not an exploit
- from: betterstrongholds loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: forgotten magical reagents (source gems, arcane essences) lie in the library's sealed chests — the stronghold's scholars left something behind
- from: betterstrongholds loot tables | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a schematic fragment or machine blueprint hidden in the stronghold's vault gates a complex Create recipe — the Eye of Ender leads to more than just the End portal
- from: betterstrongholds boss-adjacent (pre-End gate structure) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is specifically a bounty-board/combat mechanic, not a loot-seed into structure chests. The coin-in-chest angle is better served by M-08 above. Using M-14 here would misapply the motif.
- OK — the structure is loot=yes and sits on the critical path to the End; seeding it with pack-relevant drops (coin, magic reagents, a Create blueprint) earns it economy and magic pillars via loot-seed delivery. All three ACCEPT candidates are thematically coherent — the stronghold's scholars/builders would plausibly leave coins, arcane materials, and technical schematics.

== CHUNK COMPLETE ==
