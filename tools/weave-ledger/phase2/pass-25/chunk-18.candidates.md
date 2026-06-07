# Phase 2 candidates — chunk-18

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — genuine zero-surface config-UI library; no items, no methods, no recipe types. Nothing to weave.

## astikorcartsredux   [anchors: survival (1)]
- from: cart chassis (wooden planks + iron) | via: create:pressing (iron sheet gating) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: you press iron sheets to bind the axle housing — a cart without machined parts barely holds the load
- from: plow/reaper implement blades | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: pressing already covers the mid-tier gate; adding mechanical_crafting on top over-depths an everyday farming item (basics ≈ 3× rule; two Create gates for a cart is too much)
- from: reaper harvest output (bulk crops) | via: farmersdelight:cooking / extradelight:* | to: survival (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the reaper is a throughput tool, not an item; the weave here belongs to the crop-output mods (Farmer's Delight, Bakery) not the cart — weaving crops into the cooking chain is already in scope for those mods; attaching it to astikorcartsredux adds no new anchor
- REWORK: no existing cross-system connections — 1-anchor mod; the dossier WEAK candidate (M-05, create:crushing for plow blade) is slightly mis-specified (crushing for a blade is odd; pressing is the correct Create method for sheet-metal parts). Single ACCEPT above corrects this.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — behavioral door-interaction convenience mod; no items, no blocks, no loot table, no methods. Nothing to weave.

## bakery   [anchors: survival (1)]
- from: bakery luxury foods (cakes / tarts / jams) | via: create:milling (wheat → flour intermediate, feeding the baking chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the millstone grinds the flour that feeds every baker's oven — the tech spine is upstream of every loaf
- from: bakery finished goods (strawberry cake, tarts, etc.) | via: numismatics sell / MineColonies colony supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; every food is trivially sellable; no structural loop-closing role here
- from: glowberry jam / glowberry tart (glowberry as ingredient) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: glowberry is a common vanilla ingredient without a magic pedigree; forcing it through imbuement is contrived — the tone survives but the hook is weak ("glowy berry → arcane reagent" has no grounding)
- REWORK: existing connection via farm_and_charm:crafting_bowl / pot_cooking / stove is sound (jar-grounded). The ACCEPT above adds a Create upstream link (M-12) giving a genuine 2nd anchor.

## mushroomquest   [anchors: survival (1)]
- from: deadly/poisonous mushroom caps (e.g. death cap, destroying angel equivalents) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: transmuting a lethal cap in spirit-fire draws out its toxic essence — a foraged poison becomes occult reagent
- from: rare/mythical mushrooms (agarikon, resin orb class) | via: farmersdelight:cooking / extradelight:oven | to: survival (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a handful of rare caps and a slow simmer — the mycologist's meal is worth the forage trip
- from: glowshrooms (blue/green/magenta varieties) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: glowshrooms are a light-source/deco item with no innate arcane pedigree; the imbuement hook ("glowing fungus → arcane crystal") is thematically forced and the fungal-reagent slot is not reserved, but it adds no distinctive loop-value; the spirit_fire route (M-11) already covers the deadly-cap → magic link more coherently
- from: rare mushroom caps | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; sellability is trivially true for any rare forage drop

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure decoration mod; no items (0 items grounded), no blocks, no loot, no methods. Nothing to weave.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavioral fishing tweak; intercepts loot-table catches to spawn live entities instead of dropping items. No items, no blocks, no loot table of its own, no registered methods. Weave surface belongs to the fish-content and cooking mods underneath it (createfisheryindustry, farmersdelight), not here.

## createnuclear   [anchors: create (1)]
- from: createnuclear:steel (c:ingots/steel) | via: create:mechanical_crafting / aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: an airframe rivet-set without structural steel fails under load — nuclear-grade steel earns its place in the hull
- from: createnuclear:reactor core assembly (reactor_core / reactor_frame) | via: create:sequenced_assembly (multi-stage enrichment + assembly chain) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the reactor core is too precise for a crafting grid — each uranium plate is pressed, enriched, and sequenced into the assembly before the housing seals it
- from: uranium dust/enriched uranium | via: createnuclear:enriched (own method) feeding back into create:mixing for reactor fuel | to: create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: already grounded — the dossier shows create:compacting/crushing/mixing/pressing/mechanical_crafting all inbound; the mod uses Create's own methods extensively; M-05 would be redundant with the existing native-method chain
- from: createnuclear:steel (c:ingots/steel) as Aeronautics drivetrain component | via: aeronautics engine/propeller recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-23 (structural alloy → airframe) already claimed the steel-to-aeronautics link; M-24 is for mechanical/drivetrain components not structural alloy — tagging both M-23 and M-24 on the same material is double-counting
- from: lead ingots (createnuclear:lead, c:ingots/lead) | via: create:item_application / aeronautics shielded hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: lead shielding on a reactor-adjacent airframe is exactly what you'd spec — the logistical cost of moving fissile cargo makes a shielded hull worth building
- REWORK: current anchors = create (1). The two steel + lead M-23 ACCEPTs above add a genuine aeronautics anchor, plus the M-06 sequenced-assembly deepens the Create connection meaningfully for an endgame reactor build.

## aileron   [anchors: aeronautics (1)]
- from: Aileron Elytra enchantments (loot=yes, injected into loot tables) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: attunement-crafting the Aileron glide-rune at the Enchanting Apparatus is more satisfying than fishing up a book — flight mastery earns a magic price
- from: Elytra (vanilla) + Aileron enchants | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Iron's cauldron targets potion/brew recipes, not enchantment application; routing an enchantment through a brew cauldron is mechanically incoherent
- REWORK: current anchors = aeronautics (1). The ACCEPT above ties the enchantment progression to magic, giving a second anchor without forcing an artificial material edge.

## jei   [anchors: client-only UI/support (1)]
- LEAVE — recipe viewer; no items, no blocks, no loot, no methods. Load-bearing as the Create-recipe renderer (see CLAUDE.md), but zero weave surface.

== CHUNK COMPLETE ==
