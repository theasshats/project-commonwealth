# Phase 2 candidates — chunk-14

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- LEAVE — pure cosmetic skin layer (colored levitite/tires, no recipe-type registered, no independent material join key); sanctioned decoration-palette support role within the aeronautics anchor. Forcing a Create/economy edge (e.g. "route dye via Create mixing") would be gilding with no loop benefit.

---

## create_central_kitchen   [anchors: Create, survival (2)]
- OK — connections sound. Already bridges Create automation to the survival/food pillar (sequenced-assembly dishes, Blaze Stove, arm-support for FD/ExtraDelight/Farm&Charm blocks). An optional economy link (M-09 luxury feast → sellable) exists but is generic-sellable and low-signal; economy de-emphasis applies.
- from: finished automated feast/dish | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the existing Create+survival double-anchor is the whole story here.

---

## samurai_dynasty   [anchors: survival (1)]
- from: jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing Yokai-realm ores in the mechanical grinder is an obvious first step before smelting; folds the feudal-Japan ore tier into the Create mineral web and adds byproduct yields.
- from: samurai_dynasty:akaname_tongue / Yokai mob drops | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit-fire transmuting a Yokai's essence into an occult reagent reads as lore-coherent (Yokai are supernatural; Occultism's spirit processing is the obvious receiver); provides a mid-tier mob-drop sink that feeds the magic pillar.
- from: samurai_dynasty:akaname_tongue / Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's imbuement chamber pulling on a Yokai essence to craft an arcane component gives the magic specialist a reason to engage Samurai Dynasty combat; feudal-Japan spirits → arcane reagent is tonally coherent.
- from: samurai_dynasty steel/jade gear | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: samurai_dynasty already registers no recipe-types and its weapons use their own upgrade mechanic (kill Yokai to absorb powers); locking the Katana tier behind sequenced assembly would compete with and override the native kill-gated upgrade, breaking the mod's own design. The M-03 ore-doubling link is sufficient for Create.
- REWORK: existing single anchor (survival) is weak for a mod with ore, mob drops, and a combat system. M-03 + M-02 above lift it to survival+Create+magic — that's the target; no existing authored connection needs reworking (none authored yet), but the dossier 2nd-anchor candidates are confirmed strong.

---

## ars_nouveau   [anchors: magic (1)]
- from: any crop/mob-drop surplus (Vitalic/Agronomic Sourcelink) | via: ars_nouveau:imbuement (Sourcelink passive) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: farm output and mob kills passively charge Source; the survival/food/combat layer drives the magic engine without any recipe — the organic-to-magic pump is already the mod's native mechanic and just needs documenting as the survival anchor.
- from: foreign essences (lapis, amethyst, irons_spellbooks:arcane_essence, source_gem hub) | via: ars_nouveau:imbuement | to: magic | motif: M-01/M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbuement chamber as the universal magic-currency mint; this IS the M-01 reserved reagent ownership. Confirming it as the established anchor, no new authoring needed.
- from: ars_nouveau:source_gem / spell scrolls | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; every magic product is trivially sellable, this adds nothing structural.
- OK — connections sound (once survival anchor is recorded); magic↔survival via Sourcelink is strong and native.

---

## tipsmod   [anchors: support (1)]
- LEAVE — zero-content client UI library; tip text is pack-authoring content, not a pillar weave. No items, blocks, or materials to route.

---

## mru   [anchors: support (1)]
- LEAVE — pure code library (0 blocks, 0 items, 0 recipe-types); no player-facing surface to weave.

---

## platform   [anchors: support (1)]
- LEAVE — pure code library (0 blocks/items, 0 recipe-types); cross-platform registry API with no player-facing content.

---

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull (ship hull components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a pirate cutter from mechanically-crafted hull sections feels like a natural shipyard workflow; gates the naval fleet on the Create tech spine and gives the mid-tier mechanical_crafting a pirate-ship reward.
- from: hpm:corvette_steamship_item (WIP steamship) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the corvette steamship is the mod's endgame vessel — a multi-stage sequenced-assembly chain (boiler, paddle wheel, hull) from TFMG/Create metals fits the GregTech-depth principle and makes the steamship a proper Create capstone, not a free craft.
- from: hpm:cannonball / hpm:mortar_ball | via: createbigcannons:cartridge_assembly | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: routing Swashbucklers' hand-cannon ammunition through Create Big Cannons' cartridge-assembly workbench unifies the naval artillery supply line; a cannonball forged via CBC assembly rather than plain crafting adds depth and creates a shared logistics loop (munitions → economy).
- from: hpm:cuttermilitariseditem (war cutter) | via: numismatics sell/trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The Create-gating links above are the load-bearing weaves; the war cutter being tradeable is implied, not a distinctive economy structure.
- REWORK: single aeronautics anchor is weak for a vehicle mod with hull components and weapons. M-05 + M-06 + M-05 (CBC) lift it to aeronautics+Create — that's the correct 2-anchor state.

---

## midnightthoughts   [anchors: survival (1)]
- LEAVE — rest/sleep buff mechanic with no items, blocks, or material join keys. The well-rested effect pairs thematically with Cold Sweat/Serene Seasons (pressure face) but offers nothing to route into a second pillar. Genuine zero-surface for weaving.

---

## ichunutil   [anchors: support (1)]
- LEAVE — shared-class library (0 blocks, 0 items, 0 recipe-types); no player-facing surface.

---

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / ecologics:coconut_slice | via: farmersdelight:cutting + extradelight:juicer | to: Create (via M-12 processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts cut on the Cutting Board into coconut slices, then juiced into tropical coconut milk — a multi-step processing chain that feeds the food pillar AND the Create automation spine when the juicer/cutting board runs on a contraption; the status-clearing property of coconut_slice also makes it a mid-value survival reagent (antidote ingredient).
- from: ecologics:coconut_husk | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coconut_husk-as-bowl-substitute is a vanilla-replacement item, not a deco block, so M-04 (recycles deco) doesn't fit cleanly; milling a bowl substitute into raw fiber is a stretch with low loop value. The M-12 coconut chain above is the better and sufficient Create touch.
- from: ecologics:coconut / tropical fruits | via: create:mixing (as fluid or ingredient) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the FD/ExtraDelight cutting+juicing route is already a cleaner M-12 implementation; adding a Create mixing step would be redundant and over-engineer a simple food chain. One M-12 link is enough.
- REWORK: single survival anchor is thin given the food/fruit richness. The M-12 coconut processing chain above adds a Create/survival double-anchor — confirming that is the target.

---

## controlling   [anchors: support (1)]
- LEAVE — client-only keybind-search UI (0 items, 0 blocks, 0 recipe-types); no content to weave.

---

## blockui   [anchors: support (1)]
- LEAVE — XML GUI framework library; hard dependency of MineColonies with no player-facing content of its own.

---

## death-count-1.0   [anchors: support (1)]
- LEAVE — vanilla-scoreboard datapack tracking death tally in tab list; no items, no blocks, no material join key. Cosmetic server flavor, not a pillar weave.

---

## bundle_recipe   [anchors: support (1)]
- LEAVE — a single vanilla crafting recipe datapack re-enabling the Bundle; no new items, no foreign materials. Pure vanilla-parity QoL fix, no pillar weave possible.

---

## imfast   [anchors: support (1)]
- LEAVE — server-side movement-validation mixin (0 items, 0 blocks); a behavioral patch that enables aeronautics speeds without registering any wireable content.

---

## bagus_lib   [anchors: support (1)]
- LEAVE — shared code library (0 items, 0 blocks, 0 recipe-types); no player-facing surface.

---

## shulkerboxtooltip   [anchors: support (1)]
- LEAVE — client-side container-tooltip renderer (0 items, 0 blocks); pure UI informational overlay, nothing to weave.

---

## moonlight   [anchors: support (1)]
- LEAVE — shared library for MehVahdJukaar's mods (Supplementaries, Map Atlases, etc.); 0 recipe-types registered, no independent player-facing content beyond internal spawn_box/placeable_item API helpers. No weave surface.

---

## lootr   [anchors: support (1)]
- LEAVE — per-player loot-instancing mechanic (loot=yes in digest but no loot of its own — it proxies existing structure loot tables); no material join key, no new drops to seed. The instancing is multiplayer-fairness QoL, not a pillar weave target.

== CHUNK COMPLETE ==
