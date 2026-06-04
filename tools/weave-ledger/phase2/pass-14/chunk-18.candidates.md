# Phase 2 candidates — chunk-18

## undergroundworlds   [anchors: survival (1)]

- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spider fangs transmuted into a spirit essence — the dungeon's predator becomes raw occult fuel
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: fang soaked in source, yielding a venom-attuned reagent — dungeon spoil finds a magic use
- from: undergroundworlds:temple_bricks / pyramid_bricks (deco block lines) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn temple stone crushes back to sand/gravel + XP nugget; lossy recycling ties the dungeon deco to the Create web
- from: undergroundworlds:blade_of_the_jungle / freezing_sword (loot-table weapons) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: clash | verdict: REJECT | reason: these weapons are already the dungeon payoff; gating a Create recipe on them would feel arbitrary — the dungeon has no thematic Create link; M-15 works when the boss/dungeon belongs to the same tech-or-combat arc
- from: undergroundworlds:desert_charm / antidote_flask (charm drops) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: charms are stand-alone utility items already fully defined — wrapping them in the enchanting apparatus adds complexity with no clear player-motivation hook; M-02/M-11 via spider_fang is the cleaner entry point

## betterendisland   [anchors: survival (1)]

- LEAVE — zero-content structure overhaul (0 blocks, 0 items, loot=no). No loot tables, no items, no methods. Nothing to weave.

## trek-b0.6.1.1   [anchors: survival (1)]

- from: trek structures (ship holds, pyramid chests, fortress rooms) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare-structure chests occasionally yield minted coin or Create components — exploration pays into the pack's currency loop without Trek owning any items of its own
- from: trek structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding magic reagents (source gems, arcane essences) into Trek's dungeon chests as mid-tier finds gives exploration a magic-supply reward — a player stumbles on a ruin and walks away with ritual fuel
- from: trek structures | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is boss-drop gating; Trek has no bosses, only chest loot — forcing a boss-key role onto a generic loot table is an architectural mismatch; the M-08/M-02 loot-seed candidates cover the real opportunity here

## irons_lib   [anchors: library/support (1)]

- LEAVE — support library. Transmog table and player statue are cosmetic/API-only blocks with no routable material and no processing surface. The real weave target is irons_spellbooks, not its library.

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag_* / hammock_* | via: create:milling or farmersdelight:cutting | to: Create/survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: milling a sleeping bag into wool/string is contrived recycling with no lore sense — a hammock is not a processing input; M-04/M-12 require a coherent "this material becomes that material" narrative, which is absent here
- from: comforts:sleeping_bag_* (exploration-adjacent) | via: loot-seed | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: selling a sleeping bag as a luxury good is thematically possible but weakly motivated — a sleeping bag is a cheap craft item, not a high-effort luxury; M-09 targets high-effort consumables (wine, aged cheese). Not a good fit.
- LEAVE — vanilla-recipe QoL/deco mod with no material surface that coheres with any pillar method. Forced edges would be noise.

## zombiemoon   [anchors: survival (1)]

- LEAVE — zero-content mob mod (0 blocks, 0 items, loot=no). Mobs use only vanilla rotten-flesh-style drops; no unique drop or method surface to route through. Any invented unique-drop reagent would be an authorial addition, not a weave.

## betterpingdisplay   [anchors: support — client UI]

- LEAVE — pure client UI/behavior mod (0 blocks, 0 items, loot=no). Numerical ping display; no game content surface whatsoever.

## appleskin   [anchors: support — client UI]

- LEAVE — HUD-only client display mod (0 blocks, 0 items, loot=no). Surfaces existing food values; changes no mechanics, routes no materials. Nothing to weave.

## byzantine   [anchors: survival (1)]

- from: byzantine style schematics | via: minecolonies (schematic consumption) | to: Create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: Byzantine's "weave" is entirely through MineColonies build demand — it has no items, no loot, and no recipe types of its own. There is no mod edge here independent of MineColonies. Any Create-material demand is a MineColonies builder requirement, not a Byzantine weave. No-motif → reject.
- LEAVE — pure style/schematic pack for MineColonies (0 blocks, 0 items, loot=no). Its value is colony architectural variety; it has no independent content surface to anchor a second pillar.

## bettermineshafts   [anchors: survival (1)]

- from: bettermineshafts expanded shaft structure (larger caverns, ore side-rooms) | via: config tie | to: Create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the shaft layout improvement indirectly benefits Create ore mining, but there is no recipe/loot/item handle — it's a structural enhancement with loot=no. No-motif, no content surface; forced.
- LEAVE — structure overhaul with no items, no blocks, and no loot tables (loot=no). YUNG's layout improvements benefit exploration but provide no content surface to weave through.

== CHUNK COMPLETE ==
