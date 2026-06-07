# Phase 2 candidates — chunk-09

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure code library; no items, no recipe types, no content surface whatsoever. Zero-surface library; genuine LEAVE case.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — cosmetic particle-only mod; the 184 "items" are internal particle holders, not usable items; loot=yes is a false positive from the jar scanner. No method to route through, no drop to seed.

## endermoon   [anchors: survival (1)]
- from: ender pearl (indirect — mass enderman spawns during Ender Moon event) | via: loot-seed (LootJS boost to ender pearl drop rate on Ender Moon nights) | to: magic | motif: M-22 | power: everyday | tone: ok | verdict: REJECT | reason: motif M-22 requires the material itself to only be available during the lunar event; ender pearls drop all the time, not exclusively on Ender Moon — the event amplifies supply, it doesn't gate it. A "more pearls on Ender Moon" tweak is a balance config, not a weave motif. The weave (if any) belongs on enhancedcelestials, which owns the lunar-event system, not on this spawn-weight shim.
- LEAVE — no items/blocks/loot of its own; any lunar-cycle weave attaches to enhancedcelestials. Endermoon's surface is purely a spawn modifier.

## notenoughanimations   [anchors: support/visual (1)]
- LEAVE — zero content surface; client-side animation replacer; sanctioned support role.

## create_jetpack   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (brass/backtank crafting spine) + aeronautics (personal flight = the economy's mobility arm). Already at goal.
- REWORK: dossier candidate "leave — could be boss-drop/MineColonies gated" is worth promoting to a formal M-15/M-28 note: the Netherite Jetpack (endgame, lava-traversal) is a good candidate for a boss-key gate (Netherite Monstrosity drop from Cataclysm, or a Warden-tier drop from deeperdarker), tying flight progression into the combat route. Record as a refinement suggestion, not a new pillar.
  - from: cataclysm:ancient_metal_ingot (or deeperdarker warden material) as required input | via: recipe | to: Create/aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "Netherite Jetpack requires a boss-forged alloy — you can't fly through lava until you've faced something terrible"

## mffs   [anchors: Create, survival (2)]
- OK — connections sound. Gold-standard weave: M-05 focus_matrix gated on create:electron_tube; M-06 projector/interdiction via sequenced assembly; mid-tier machines on TFMG steel. Already the reference example in the dossier.
- No new edge needed; all authored in 60-mffs.js.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. Already at goal: Create kinetics + deco palette.
- from: bits_n_bobs stone/deco tile blocks (andesite_tiles, crimsite_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: "Tile offcuts crush back to crushed stone — the builder and the engineer share the same material loop"
- REWORK: dossier flags M-04 as "[MED]" reinforcement but doesn't formally accept it. Worth formalising: a bulk crushing recipe for each tile family (andesite/asurine/crimsite/deepslate/etc.) is a single small KubeJS authoring pass, closes the deco→Create recycle arc, and costs almost nothing. Promote to formal ACCEPT.

## bookshelf   [anchors: support/library (1)]
- LEAVE — pure code library (Darkhax codec/registration helpers); no items, no gameplay surface.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — client-side cloud renderer; no content surface; sanctioned visual support role.

## createblockchain   [anchors: economy, Create (2)]
- OK — connections sound. Already at goal: Create FE→coin faucet (economy) + built via create:mechanical_crafting/mixing (Create).
- from: createblockchain:mining_core (worldgen geode consumable) | via: worldgen/config — mining_core spawn rate and ore-gen gating | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: "The mining core only spawns near specific ore veins — which ore veins are abundant in your region determines how fast you can mint coin"
- from: FE supply (createaddition spinning generators) | via: create:mechanical_crafting / FE network | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "Coin is minted by the player who built the FE plant — controlling energy generation means controlling the money supply"
- REWORK: dossier's M-08-adjacent note ("feed the miner FE from scarce processed metal so coins trace back to regional scarcity") is exactly M-30 + M-08 together and should be formalised. The mining_core geode biome-modifier is already in the jar; the missing step is tying the core's spawn to scarcity-rich regions in the KubeJS vein config — a config note for the Economy pillar milestone.
- from: createblockchain:piggy_bank (generates in overworld chests, drops coin spread) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy bank chest loot is a passive coin injection that bypasses the player-minted/FE-gated design — it's a small NPC-style faucet in chest form. Reject as misaligned with the player-run economy ruling; consider disabling piggy-bank chest loot in config or seeding it only in dangerous/explored structures so it rewards exploration (M-34) rather than just spawning freely.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. GTMOGS is the worldgen substrate; it enables M-30 (regional scarcity) across all downstream mods rather than needing its own weave.
- REWORK: the dossier anchor label "survival, economy" is accurate but the framing could be sharper — gtmogs is more precisely the *scarcity foundation* layer than an economy anchor. The economy anchor it carries is by virtue of being the upstream knob that makes regional trade necessary; this is correct and intentional. No action needed.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice comms infrastructure; no items/blocks/recipes; sanctioned support role essential to ~10-person co-op.

## immersivearmorhud   [anchors: support/UI (1)]
- LEAVE — client HUD display only; no content surface; sanctioned support role.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot | via: create:pressing → create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "Ancient metal, forged by something that should have stayed dead, is the only material strong enough for the highest-tier Create precision components"
- from: cataclysm:witherite_ingot | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: "Wither-essence metal transmutes cleanly into an occult spirit intermediate — the bosses of the Nether feed the spirit web"
- from: cataclysm:cursium_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: "Cursium carries a residue of the curse — imbuement strips and concentrates it into source, giving the arcane a dark-matter input"
- from: cataclysm boss-drop materials (Witherite/Ignitium/ancient_metal) | via: numismatics player trade (M-34 combat-route supply) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: "The combat specialist farms boss mats; the tech player needs them and can't get them solo — the raid is the supply chain"
- from: cataclysm:ignitium_ingot | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: ignitium is a boss-fight-gated exotic alloy, not an ore to double-process; routing it through ore-doubling crushing is a category mismatch — it should go through M-15 (boss-key gate for Create tech) or M-11 (spirit transmutation for magic), not a mundane ore chain. The tone clashes: M-03 is for ores found in the ground, not for forged boss metals.
- from: cataclysm:amethyst_crab_shell | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "Amethyst-crusted shells mill to a pigment powder — the Scylla's carapace ends up on your factory floor as a dye additive"
- REWORK: dossier's economy candidate is "M-09 luxury good→coin" — M-09 is retired. Re-express as M-34 (combat-route supply): boss mats go to the tech player via player-to-player trade, not an NPC vendor. Dossier should be updated to retire the M-09 call.

## letsdocompat   [anchors: survival (1)]
- LEAVE — support/glue role: it is the recipe-bridge layer for the food cluster; its function is already M-12-style unification. No independent content surface; adding a 2nd anchor here would be adding it to a bridge, not to a mod. Its contribution IS the survival anchor.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client-side mob model animation replacer; no content surface; sanctioned visual support role.

## lootjs   [anchors: support/library (1)]
- LEAVE — KubeJS scripting library for loot-table editing; the enabler of M-02/loot-seed weaves elsewhere, not itself a weave node. Sanctioned support role.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: "Soul dust drawn from the Otherside's silence transmutes directly into spirit essence — the occultist's supply line runs through the deep dark"
- from: deeperdarker:soul_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: "A crystallised soul fragment, refined by arcane imbuing, yields source — the Otherside dimension pays into the magic web"
- from: deeperdarker:heart_of_the_deep (Warden drop, dimension key) | via: recipe (as a gating input for an occultism ritual or high-tier Create machine) | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "You can't open a Void Summoning ritual without a Heart taken from the thing that hunts in silence — the deep dark is the toll gate"
- from: deeperdarker:warden_carapace | via: create:pressing | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "Warden chitin is the only material hard enough to serve as a Create precision plate for the most demanding machines — survive the Ancient City first"
- from: deeperdarker gloomslate/sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: "Otherside stone and gloomslate crush like any other stone — the builder's off-cuts feed the Create gravel/experience loop"
- from: deeperdarker:soul_dust / soul_crystal | via: economy — M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: "The Otherside specialist sells soul reagents to the magic player who won't venture that deep — dimension exploration is a trade occupation"
- from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: crystallized_amber is a worldgen decorative block (Otherside biome floor material), not a boss/mob drop — routing it as a magic reagent input forces a decoration into a reagent role. Weak thematic fit; amber's "preserved" quality fits a maturation/artisan chain (M-35) better than arcane infusion. REJECT for M-10; flag as a possible M-35 (aging/preservation specialist) if Exposure or a crafting mod can use it as a pigment/resin intermediate.
- from: deeperdarker economy candidate in dossier "M-09 luxury good→coin" | verdict: REWORK | reason: M-09 retired. The economy link should be M-34 (Otherside materials as combat-sourced supply the magic specialist needs), already ACCEPTED above.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs stone/brick/andesite roof blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600+ blocks makes this a mechanical mass-pass rather than a coherent weave; the signal-to-noise is too low. M-04 is valid in principle for stone-family deco (the dossier itself flags it as [WEAK]). REJECT as not worth the Phase-3 authoring cost for essentially zero gameplay signal — a deco mod's recycle path is already covered by any other stone-deco M-04 pass. Revisit only if a wholesale deco-recycle sweep (covering all deco mods) is scheduled.
- LEAVE — sanctioned decoration palette; the 600-block family earns its place on pure builder value. No weave needed unless a wholesale deco sweep covers it incidentally.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (fuel-burning climate machine) | via: create:mechanical_crafting (gate the Hearth on Create brass casing as a recipe input) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: "The Hearth's firebox needs a brass-pressure fitting to hold the draw — the Create player supplies the part that keeps the colony warm"
- from: cold_sweat insulating furs/hides (goat_fur, chameleon_molt, hoglin hide from alexsmobs/other mob mods) | via: farmersdelight:cutting or extradelight:drying_rack | to: survival (Create/economy) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "Raw hide needs to be cured at the drying rack before it's fit for a cold-weather coat — the tanner's step is the mid-tier bottleneck for winter survival"
- from: cold_sweat insulated gear (goat_fur armor set, chameleon/hoglin armor) | via: player-to-player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: "The survivalist who knows how to work hides supplies cold-climate armor to every player heading into the frozen peaks — the sewing table is a trade occupation"
- from: cold_sweat:filled_waterskin (already uses create:filling inbound) | via: create:filling | to: Create | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: "Waterskins are a Create-filled consumable that burns on use — the thermal regulation loop generates steady demand for pressurised water lines"
- from: cold_sweat:hearth gating on Create | via: recipe | to: Create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: this is the same edge as M-05 (hearth on brass casing) re-expressed — not a distinct cross-route dependency. Reject as duplicate; the M-05 link already captures the Create gate on the Hearth.
- REWORK: dossier's economy candidate is "M-09 luxury good→coin" — M-09 is retired. Re-express as M-34 (insulated armor as combat-route supply via the tanner/sewing-table specialist). Already ACCEPTed above.

== CHUNK COMPLETE ==
