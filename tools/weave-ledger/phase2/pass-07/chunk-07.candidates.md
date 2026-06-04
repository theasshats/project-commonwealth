# Phase 2 candidates — chunk-07 (pass-07, blind)

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — structure-only worldgen datapack; 0 items/0 blocks/0 methods, built from vanilla blocks. No material to route through any method. Its value is exploration content (and a sea-travel base for Aeronautics), not a recipe edge. Forcing an edge would be a defect.

## betterendisland   [anchors: survival (1)]
- LEAVE — purely cosmetic/structural End-island overhaul; no items, no methods, no loot tables. Nothing to weave.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — it IS a weave already (magic↔magic glue unifying Ars + Iron's mana pools), but it has 0 items and no recipe surface. No material join key for a 2nd pillar; routing one would be artificial. The mana-bridge is the established M-01 corridor's connective tissue, not a new edge.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — a single-item Create builder QoL utility (random Deployer placement). Its two filter items have no material I/O; they gate WHICH foreign items a Deployer places. No coherent 2nd pillar without forcing one. Already lives squarely inside the Create pillar.

## betteroceanmonuments   [anchors: survival (1)]
- from: monument chest loot | via: loot-table seed (numismatics coin / magic reagent) | to: economy/magic | motif: — | power: everyday | tone: ok | verdict: REJECT | reason: no registry items or methods of its own; seeding a coin/reagent into its loot table is a datapack edit, not a mod weave. Defer to a loot-curation pass, not a Phase-2 method-routing. (no-motif as a mod weave.)
- LEAVE — structure overhaul; only data hook is vanilla loot. No weavable item surface.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — sleep/well-rested buff overhaul; 0 items/0 blocks, only applies vanilla-style effects. No material join key. Pairs thematically with Cold Sweat / Serene Seasons survival but offers nothing to route through a method. Deliberately vanilla-style QoL; forcing an edge is the failure mode.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (and higher-tier emitters) | via: create:* native-method gating (brass/casing as inputs, or piping Create steam/lava as fuel) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is already a fuel-burning climate multiblock with a smokestack — making its build cost Create brass/casing (or letting it run on piped steam) reads as the obvious tech-grade upgrade to the campfire.
- from: chameleon/hoglin/goat_fur insulated armor | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: insulated cold/heat gear is the exact thing a crew heading into a harsh biome would buy from a specialist outfitter — a sellable survival good (player-run currency caveat per M-09).
- from: cold_sweat:goat_fur / chameleon_molt / hoglin hide | via: cold_sweat sewing-table insulation | to: (inbound, organic→survival) | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: this is an INBOUND edge (other mob mods' furs/hides as insulation filler) and a survival↔survival routing — it doesn't give Cold Sweat a 2nd pillar, it gives mob mods their 2nd. Note it as a join key for those mods, not a Cold Sweat weave.

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: obsidian_heart / blazing_eye boss reagents | via: create:sequenced_assembly (or MineColonies unlock) as a required input | to: Create | motif: M-15 (+M-06) | power: endgame | tone: ok | verdict: ACCEPT | hook: directly realizes the pack's north-star rule "complex Create tech unlocks via boss drops" — a flagship reagent gates a deep sequenced-assembly keystone. Depth matches the endgame power tier.
- from: ancient_anima / void thorns | via: ars_nouveau:imbuement / forbidden_arcanus infusion | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: void/anima drops are thematically perfect top-tier arcane catalysts; routing them through an infusion gives them a magic role without gating any basic component (endgame-only).
- from: boss reagents (rare, non-renewable-feeling) | via: bountiful board → numismatics payout / direct sell | to: economy | motif: M-14 (provisional) / M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: premium bounty turn-ins for the hardest kills — a coin sink for the crew's apex combatants. (M-14 provisional, player-run-currency caveat.)

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure overhaul of mineshafts; 0 items/0 blocks, no loot tables (uses vanilla mineshaft loot). Nothing to weave. Indirectly serves the scarce-ore mining loop but exposes no hook.

## mutantszombies   [anchors: survival (1)]
- from: mutant variants | via: bountiful board → numismatics / M-02 reagent sink | to: economy/magic | motif: M-14 / M-02 | power: everyday | tone: clash | verdict: REJECT | reason: deliberately vanilla-style mob mod — spawn eggs only, loot=no, no item drops. There is no material to route. A bounty edge has nothing to turn in (no signature drop), and adding a drop just to weave it would be over-reach on a content-only difficulty mod. Forcing an edge is the failure mode the briefing warns against.
- LEAVE — no drops/items; raises night-threat baseline as pure survival content.

== CHUNK COMPLETE ==
