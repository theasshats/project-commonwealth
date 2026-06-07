# Phase 2 candidates — chunk-06

## ferritecore   [anchors: support/perf (1)]
- LEAVE — pure runtime memory-optimization library; zero items, zero blocks, zero loot, zero recipe types. No content surface to weave through any method. Sanctioned support/perf anchor, no 2nd anchor possible.

## createaddoncompatibility   [anchors: support/library (1)]
- LEAVE — zero items, zero blocks, no loot; content is tag-unification rules only (priority glue for plastic/copycat/gearbox across Create addons). The one distillation recipe it ships is internal plumbing, not a weave seam. Any weave lives in the mods whose items it unifies, not here.

## more_slabs_stairs_and_walls   [anchors: support/decoration palette (1)]
- from: the 847 slab/stair/wall block variants (stone/wood/concrete) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create-spine player runs bulk building materials through a mechanical saw to produce architectural cuts automatically — the natural "industrialise a vanilla task" fit; stonecutter logic migrates to the saw, giving deco output a production anchor.
- from: gravity-obeying cuts (concrete-powder/sand/gravel slabs+walls) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for recycling *finished* deco back to raw — crushing a concrete-powder slab to get gravel is trivially valueless (you made the cut FROM gravel; crushing it back is a pointless round-trip, not a meaningful recycle). Not a coherent loop edge.
- REWORK: dossier note M-12 labelled as STRONG is correct. The M-04 candidate in the dossier is WEAK and confirmed reject above.

## sable   [anchors: support/library-physics (1)]
- LEAVE — genuine zero-content physics-engine library; no items, no blocks, no loot, no recipe types. All weaving happens in Aeronautics and its compat mods that build ON sable, not in sable itself. Sanctioned support role.

## sablecollisiondamage   [anchors: support/physics-addon (1)]
- LEAVE — collision-damage behavior layer on Sable; zero items, zero blocks, no material graph whatsoever. Its "weave" is mechanical (ships hurt things they hit), which enriches PvPvE aeronautics play but has no recipe/method surface to route through. Sanctioned support role serving the aeronautics pillar.

## create_enchantment_industry   [anchors: create (1)]
- from: liquid experience (fluid XP produced by the Blaze Enchanter / Disenchanter loop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's imbuement apparatus can already consume fluids; routing liquid XP as an imbuement fuel/catalyst to power a magic infusion step (e.g. upgrading a spell book tier or imbuing a mana gem) makes the XP-factory a direct feeder of the magic production route — the Create specialist produces the fuel the magic specialist burns. Advances the loop: Create output → magic input.
- from: enchanted books (produced by the Printer / Blaze Enchanter) | via: occultism:ritual | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-tier Occultism ritual (summoning a greater spirit or upgrading a familiar) consumes a specific enchanted book, so the Create-enchanting specialist and the occultism specialist must trade — neither can reach the ritual's gate alone. Classic cross-route dependency; advances the loop.
- from: liquid experience | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Iron's Spellbooks cauldron brews already have defined ingredient types (potions, essences); bolting liquid XP as a brew ingredient is thematically odd (a magic cauldron brewing from an industrial fluid bucket) and the tone clashes with Iron's arcane-scholarly feel. The ars:imbuement route (ACCEPT above) covers the same magic-pillar link more coherently; duplicate weave is surplus.
- from: super_experience_nugget (a dense XP item, mid-rarity) | via: create:pressing | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: pressing XP nuggets is circular internal to Create-CEI and adds no second-pillar anchor; it just deepens an already-Create chain with no new system reached. Motif M-06 is sequenced-assembly depth, not a cross-system edge.
- OK — existing Create anchor is sound (deep Create-spine enchanting/XP automation). REWORK: the dossier's M-05 native-gating candidate is serviceable but less clean than M-10/M-29 above — M-05 would gate a magic-side machine behind a Create liquid-XP input, which is also valid; retain as a possible Phase-3 option but M-10 is the cleaner first weave to author.

## modonomicon   [anchors: support/QoL-documentation (1)]
- LEAVE — guidebook framework; the books it displays are flavor/information, not a material or method. Zero recipe types, zero loot. No weave surface exists: the value is documentation, and documentation is not a system node in the loop. Sanctioned support role.






