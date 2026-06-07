# Phase 2 candidates — chunk-16

## lootjs   [anchors: support (library/QoL — packdev tooling) (1)]
- LEAVE — genuine zero-surface scripting library; no items, no methods, no recipe types. It is the *enabler* of M-02 mob-drop weaves (the pack uses it to wire other mods' loot), not a weave target itself.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement | to: magic (internal) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: foreign essences (lapis, amethyst, iron's arcane_essence) mint in and out of source_gem through the Imbuement Chamber — the pack's unified magic-currency hub already lives here
- from: farm/mob surplus (crops, mob drops, babies from farmersdelight/naturalist/etc.) | via: ars_nouveau:agronomic_sourcelink / vitalic_sourcelink (passive Source generation) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: planting a crop near a Sourcelink turns the farm's output into arcane fuel — survival feeds magic without a recipe
- from: ars_nouveau:source_gem / spell_scroll | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane goods are the magic quarter's luxury export; mages sell spell scrolls and gem-charged goods for coin
- from: ars_nouveau:archwood_log | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: archwood is uncommon and magically themed; crushing it back to planks/gravel is dull and slightly lore-clashing (sacred tree ground up in a machine); the organic Sourcelink weave is stronger and cleaner
- REWORK: current anchor is magic (1) — M-01 and M-02 connections (survival-organic→magic Source, magic-currency hub) should be promoted to woven status to lift this to ≥2 anchors; add the economy link (M-09 spell-scroll sell) to reach 3

## quark   [anchors: support (decoration palette / building / QoL) (1)]
- from: quark deco/building blocks (vertical slabs, polished stone variants, crate blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a barrel of leftover quark stone-deco crushes back to gravel and dust — deco recycling, not a waste bin
- from: quark crop storage-blocks (apple_crate, carrot_crate, potato_crate, etc.) | via: create:milling / farmersdelight:cutting | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk-stored quark crates (which unpack to their crop) feed directly into Create/FD processing chains — the crate is a natural hopper-friendly input form
- from: quark:ancient_wood / ancient sapling | via: ars_nouveau:imbuement (or occultism:spirit_fire) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: ancient wood is a structural/deco material without established magical lore in this mod; imbuement would feel arbitrary. Theme clash — better to keep quark as a deco/building support and not force a magic edge.
- OK — the two accepted M-04/M-12 links are light, coherent, and proportion-matched (everyday single-step). Quark's support role is augmented, not overloaded.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. gtmogs is the worldgen substrate: its ore-scarcity model already feeds into Create (M-03 crushing/doubling), economy (M-08 coin-from-processed-scarcity), and survival (regional ore exploration). It is a framework, not a content node — no recipe-routing weave needed or appropriate.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike, raw_perch, raw_lionfish) | via: farmersdelight:cooking / create:milling | to: survival→economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fresh catch from a new fish species runs through the cooking chain into a finished dish — the ocean's harvest feeds the food web
- from: upgrade_aquatic cooked fish dishes (cooked_pike, cooked_perch, cooked_lionfish, pie) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a tray of rare lionfish fillets fetches coin at market — seafood is a luxury export from coastal traders
- from: upgrade_aquatic:driftwood_* / riverwood_* | via: create:cutting (or woodworks:sawmill) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: driftwood pulled from rivers feeds the sawmill as a cheap renewable lumber source — aquatic biomes supply the lumber yard
- from: upgrade_aquatic coral/coralstone blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone is decorative and culturally marine; crushing it back to gravel/powder is valid M-04 but no stronger than any stone-deco — low-value, and coralstone already has aesthetic coherence as a building block. Not worth polluting the recipe graph with a weak edge.
- REWORK: current single-anchor survival; the M-12 fish-cooking link + M-09 sell-to-economy together lift this to survival + economy, which is the target.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel (+ buffalo/amethyst variants) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an aged alpine cheese wheel is the archetypal luxury good — mountain traders sell them for coin, and the multi-step native cheese pipeline (milk → mass → press) gives the product real depth
- from: meadow:alpine_salt | via: create:milling (or farmersdelight:cooking) | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt ore, when milled into fine salt, becomes a universal seasoning input for cooking chains and preservation recipes — the mountain supplies what lowland kitchens need
- from: meadow:chambray_wool (felt textiles) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: felt/wool into arcane infusion has no cultural resonance with meadow's rustic-agrarian tone; would feel grafted. The food/economy links are strong enough — don't reach for a magic edge here.
- from: meadow alpine crops (oats, lavender, yarrow, juniper) | via: create:milling / farmersdelight:cooking | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine oats milled to flour, lavender infused into alpine teas — the mountain harvest joins the processing chain and expands the cooking web's seasonal palette (M-16 synergy: these are cold-biome/seasonal crops)
- REWORK: current single-anchor survival; M-09 cheese economy link + M-12 salt/crop processing lifts this to survival + economy (2). The M-16 seasonal-reagent angle (lavender/yarrow as cold-season-only inputs) is a bonus worth noting for Phase 3 authoring.

## t_and_t   [anchors: survival (1)]
- from: t_and_t structure loot tables (village chests, outpost/fort chests, sail ship hold) | via: loot-seed (datapack) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a chest in a conquered pillager fort holds a fistful of coin — adventurers loot settlements and bring currency into circulation, routing combat into the economy (M-14 bounty→drop economy analogue via loot seeding)
- from: t_and_t sail ship structure loot | via: loot-seed (datapack) | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the hold of an ocean sail-ship carries a blueprint schematic or a structural alloy sample — ships yield airship parts, giving exploring sailors a reason to hunt them (the seagoing vessel foreshadows airship construction)
- from: t_and_t village structures (16 biome-specific variants) | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no on villager-trade→Numismatics routing; flagging as explore-only. The loot-seed coin drop above (M-14-adjacent) is the cleaner path.
- REWORK: current single-anchor survival; M-14-adjacent loot seeding + M-15 ship-loot lift this to survival + economy, potentially brushing aeronautics via the blueprint/structural loot hook.

## dynamic_fps   [anchors: support (performance/client) (1)]
- LEAVE — genuine zero-content client performance utility; no items, blocks, or methods; no material graph.

## emojitype   [anchors: support (client UI/QoL) (1)]
- LEAVE — pure client text-input helper; no items, methods, or game-content surface.

## corgilib   [anchors: support (library) (1)]
- LEAVE — genuine zero-content code library; dependency of Alex's Caves etc.; nothing to route.

## particlerain   [anchors: support (client / atmosphere) (1)]
- LEAVE — client-side weather/particle rendering only; no items, no methods, no material graph.

## touhou_little_maid   [anchors: survival (1)]
- from: boss drop / arcane reagent (e.g. ars_nouveau:abjuration_essence or an occultism drop) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: summoning a combat maid requires an arcane offering at the Altar — the ritual framing fits the magic pillar's native-method gating; the maid is a magically-conjured being, not a crafting table product
- from: touhou_little_maid power-point bottles (fairy drops / village loot) | via: numismatics sell | to: economy | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are already the Altar's functional currency (internal progression item); routing them to Numismatics creates a second valuation for the same item and risks destabilizing maid progression. Tone clash: fairy-spirit energy as coin is incongruous.
- from: touhou_little_maid automation maids (farming/fishing/ranching task modes) | via: config tie (labor-loop feeding survival) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: maid-as-automation is already the survival anchor (they harvest crops, fish, mob-defend); no new method-routing opens. "Farming maid feeds survival" is the existing connection, not a weave candidate. No applicable M-01..M-24 motif; flagging no-motif per rules.
- REWORK: current single-anchor survival; the M-05 altar→magic link lifts this to survival + magic (2). The note in the dossier to "leave a Create edge" stands — no forced tech routing.

## kobolds   [anchors: economy, survival (2)]
- OK — connections sound. economy (emerald trades from kobold professions) + survival (underground creature/structure pressure layer) are both genuine. The optional M-02 kobold_skull→occultism spirit_fire link is a candidate for a third weave if the magic pillar wants a skull sink, but it's weak and should not be forced.
- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a kobold skull fed to spirit fire yields a minor spirit-essence — a dungeon-dweller's soul as magic fuel; the skull's deathly/ritual aesthetic fits spirit-fire cleanly
- from: kobolds Prospector enchantment books (enchanter trades) | via: numismatics bounty / trade | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the enchanter already trades for emeralds (economy anchor confirmed); adding a Numismatics layer on top of the emerald trade is double-counting the economy link, not adding a new one. Keep clean.

## xaerominimap   [anchors: support (1)]
- LEAVE — client navigation UI; no items, blocks, or recipe methods; zero content surface.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is advanced propulsion tech — multi-stage assembly through a sequenced line (precision mechanism + brass casing + energised coil) makes the top-tier drone rotor a real Create build milestone
- from: drones:iron_rotor | via: create:pressing + create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors are pressed sheet metal shaped into rotor blades — a Create fabrication step that ties mid-tier drone flight to the tech spine
- from: drones:pocket_drone (assembled) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a pocket drone is a personal companion tool, not a trade luxury (it's bound to your build). Players wouldn't sell a drone they spent time constructing. Tone clash with the "luxury good" framing.
- REWORK: current single-anchor aeronautics; the M-06/M-05 Create-fabrication weaves lift this to aeronautics + create (2).

## glitchcore   [anchors: support (library) (1)]
- LEAVE — genuine zero-content loader-abstraction library; backs Serene Seasons and BOP as a dependency; nothing to weave.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — pure config-screen API library; no items, blocks, or game content.

## fzzy_config   [anchors: support (library) (1)]
- LEAVE — pure Kotlin config engine; no items, blocks, or game content.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs, Undead Fortress, Spider Cave chests) | via: loot-seed (datapack) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon chests seed coin and sellable rarities — adventurers fund their economy by clearing crypts and selling the spoils (combat → economy loop)
- from: betterdungeons loot tables (Undead Fortress / Spider Cave) | via: loot-seed (datapack) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: undead fortress chests hold a trapped spirit reagent (occultism drop or ars essence) — dangerous dungeon-crawling is gated by magic progression needs; the world's hostility feeds the magic pillar
- from: betterdungeons spawner mobs (skeleton/zombie/spider) | via: bountiful bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: this is the same economy link as the loot-seed above — naming it twice (once via loot, once via bounty mob-farm) would double-count. Keep the loot-seed as the primary; the mob-farm route is an incidental parallel path, not a separate weave.
- REWORK: current single-anchor survival; M-14 loot-seed + M-02 magic-reagent seed lift this to survival + economy + magic brush (3 anchors). The loot-seed delivery is the right form here — no method-routing needed.

## sablecollisiondamage   [anchors: support (physics addon) (1)]
- LEAVE — behavior addon for Sable/Aeronautics collision physics; no items, blocks, or recipe methods; zero content surface.

== CHUNK COMPLETE ==
