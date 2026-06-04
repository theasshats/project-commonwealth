# Phase 2 candidates — chunk-19

## umapyoi   [anchors: survival (1)]
- from: umapyoi:crystal_gold / crystal_rainbow | via: recipe (numismatics sell) | to: economy | motif: M-09 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: A gold or rainbow uma-crystal is a rare luxury collectible; selling it to coin gives the gacha grind a tangible economy outlet — players trade crystals for gear or materials from specialists.
- from: umapyoi tickets / crystal upgrading | via: create:mixing (deepen existing inbound) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The ticket feedstock (rainbow carrot pulp + processed paper stock from Create mixing) makes the gacha pull dependent on the tech spine — flavored as "pressing your luck through a proper machine."
- from: umapyoi:crystal_silver | via: recipe (numismatics sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Silver crystals are the common tier — gating everyday gacha pulls behind economy would pinch the intended fun loop; keep sell-path to gold/rainbow only.

## yungsapi   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library (0 items, 0 blocks, loot=no, no player-facing surface); no weave possible.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — pure guidebook engine (6 items are coloured book variants, no material surface); no coherent 2nd-pillar route. Books are flavor, not a material sink.

## createaddoncompatibility   [anchors: support/Create-glue (1)]
- LEAVE — zero items/blocks, pure tag-unification glue. Its value is preventing mis-merges (per CLAUDE.md galosphere/silver warning); no weave possible or desirable.

## particlerain   [anchors: support/client-visual (1)]
- LEAVE — zero-content client rendering mod (0 items, 0 blocks, loot=no); atmospheric only; no material surface.

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — zero-content client animation mod (0 items, 0 blocks, loot=no); model/animation replacements only; no material surface.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute (block) | via: create:deploying / item_application | to: Create (depth) | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: The chute is a simple zinc logistics block — M-20 is for applying a woven part to upgrade something, not for adding a crafting step to a basic QoL conduit. Gating a clog-fix block behind deploying would be depth-without-payoff, violating the "never gate a basic component behind a complex recipe" guardrail.
- LEAVE — single Create logistics block with no content surface that supports a coherent 2nd-pillar link. Its zinc recipe is self-contained within Create.

## formations   [anchors: survival/worldgen (1)]
- from: formations structures (altars, ruins) | via: loot-seed | to: economy | motif: M-08/M-14 | power: everyday | tone: ok | verdict: REJECT | reason: Formations registers 0 loot tables (loot=no in digest) — it builds structures from vanilla/modded block palettes but does not define chest/entity loot tables of its own. Seeding coin or reagent drops into Formations loot would require Formations to *have* loot tables; without them this is a null delivery target. If Formations does place vanilla chest loot structures, those tables are vanilla-owned, not Formations-owned; scope this to a vanilla loot-seed task instead, not this mod.
- LEAVE — no blocks, no loot tables (loot=no); template_editor is a dev tool. Worldgen scatter mod with no item or loot surface to attach a 2nd pillar to.

## bookshelf   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library (0 items, 0 blocks, loot=no); Darkhax utility scaffolding; no player-facing surface for weaving.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — internal magic↔magic bridge (Ars↔Iron's mana unification); 0 items, 0 blocks, loot=no; operates on mana-pool data, no foreign-material I/O; forcing a 2nd pillar would be artificial. Already a weave by design — just an intra-magic one.

== CHUNK COMPLETE ==
