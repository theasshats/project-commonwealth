# Phase 2 candidates — chunk-13

## trailandtales_delight   [anchors: survival (1)]

- from: trailandtales_delight:ancient_coffee / trailandtales_delight:cherry_cheese_pie | via: recipe (numismatics sell / colony deliverable) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cherry cheese pie takes cheese + cherries + pastry — multiple-step effort makes it a believable luxury trade good or colony order
- from: trailandtales_delight:lantern_fruit / trailandtales_delight:pitcher_taro (seasonal crops) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling lantern fruit yields dried/powdered fruit — a Create processing input that feeds drink/cheese recipes (processing-chain pull from exotic crops through the tech spine)
- from: trailandtales_delight:cheese_wheel | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cheese already has a curd→wheel chain in-mod; adding a Create pressing step duplicates the chain without extending the loop — redundant, not additive
- REWORK: no existing connections to flag (1-anchor mod)

## createpickywheels   [anchors: Create (1)]

- from: (biome-gated power placement) | via: config tie / behavioral patch | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the biome/location gate on generators is a design lever, not a material edge — fits no M-01..M-24 motif; interesting concept but can't route through a method; no-motif reject for review
- LEAVE — zero items/blocks, no recipe surface; the mod is a behavioral patch to Create generators with no material interface to weave. Survives as a Create-anchor QoL/balance mod; 2nd anchor can't be authored here.

## bookshelf   [anchors: support/library]

- LEAVE — pure dev library (Darkhax). Zero items, blocks, or recipe types; no content surface to weave. Sanctioned support role.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

- from: aeronautics_dyeable_components:dyed_levitite (any color) | via: create:toolbox_dyeing | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing the dye step through Create's toolbox-dyeing method (already in the palette) tethers the cosmetic palette to the Create workflow — a light single-step deploy-application that earns the 2nd anchor without forcing anything
- from: aeronautics_dyeable_components:colored_tires (monstrous tier) | via: recipe (aeronautics construction) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: already anchored aeronautics (colored tires ARE the aeronautics content); this is not a new cross-system edge, just more of the same pillar — no new anchor gained
- REWORK: existing aeronautics anchor is sound (pure cosmetic extension of Aeronautics). The toolbox_dyeing accept above is the one realistic 2nd hook.

## galosphere   [anchors: survival (1); M-07 magic via allurite/lumiere already established]

- from: galosphere:silver_ingot (=palladium, c:ingots/palladium) | via: create:crushing (ore-doubling) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: palladium ore → Create crusher → crushed palladium + byproduct nugget; scarce underground ore gets the standard doubling reward route through the tech spine
- from: galosphere:silver_ingot (palladium, processed) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: regional palladium ore → Create-processed → minted; a scarce regional metal completes the scarcity→coin loop naturally
- from: galosphere:allurite_shard / galosphere:lumiere_shard | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: the reserved M-07 catalyst role is already established (WEAVE-LEDGER says so) — confirming it lands here as the attunement seam; this is the real 2nd pillar
- from: galosphere deco bricks (allurite_bricks etc.) | via: create:crushing (lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: decorative allurite/lumiere brick sets crush back into raw shards + experience nugget — closing the deco→resource loop without waste
- REWORK: no existing authored connections. M-07 is proposed (established per WEAVE-LEDGER); M-03/M-08 are new proposals here.

## creativecore   [anchors: support/library]

- LEAVE — pure dev library (CreativeMD). Zero items, blocks, recipe types. Sanctioned support role; no weave possible.

## domum_ornamentum   [anchors: decoration/MineColonies support (1)]

- from: domum_ornamentum:architectscutter (cutter method) consuming Create-processed stone/metal blocks | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding Create-made stone (processed andesite, brass-casing offcuts) into the Architect's Cutter produces framed/tinted ornamental variants — Create materials become deco through DO's own method, not a Create machine; the loop is Create-production→DO-cutter→build-palette
- from: domum_ornamentum:fancy_door / framed blocks | via: recipe (colony building requirement) | to: economy (MineColonies route) | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: colony building material ties are a config/datapack choice in MineColonies, not a weave-type recipe edge; fits no M-01..M-24; no-motif reject
- REWORK: DO is a support/decoration dependency of MineColonies with one anchor. The architects_cutter→Create accept above is the coherent 2nd hook; keep the weave light (everyday one-step).

## sounds   [anchors: support/polish (client)]

- LEAVE — client-only audio mod, zero items/blocks/recipes. No content surface; sanctioned support role.

## astikorcartsredux   [anchors: survival (1)]

- from: astikorcartsredux:oak_plow / astikorcartsredux:oak_reaper (metal-edged implements) | via: recipe (crafting table, Create iron sheet input) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the plow blade and reaper cutting edge require Create-processed iron sheets — early-game farm tools gated on the tech spine's first tier, making carts a Create on-ramp reward rather than a day-1 free item
- from: astikorcartsredux:oak_supply_cart (bulk hauling) | via: design tie (pre-rail economy logistics) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the cart-as-logistics edge is thematic but there's no recipe or method to route; fits no motif; no-motif reject
- REWORK: no existing connections. The M-05 accept above gives the 2nd anchor via Create; stay at that one light step — don't over-gate basic carts.

## ctov   [anchors: survival (1)]

- from: ctov village loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding a small amount of Numismatics coin (lower denominations) into village chests across the 23 variants — the player finds coins in the world as found treasure, grounding the currency in exploration reward rather than pure crafting
- from: ctov outpost loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: outpost/pillager chests could include a bounty note / bounty-board token — a loot-seed that funnels combat/exploration into the bounty-economy arm (M-14 bounty→drop economy, with loot-seed delivery)
- REWORK: 1-anchor mod; both loot-seeds above are the weaving surface.

## better_climbing   [anchors: support/QoL]

- LEAVE — clientside movement-feel tweak, zero items/blocks/recipes. Sanctioned support role; no weave possible.

## rolling_down_in_the_deep   [anchors: support/QoL]

- LEAVE — clientside camera/movement addon, zero items/blocks/recipes. Sanctioned support role; no weave possible.

## railways   [anchors: Create, aeronautics (2)]

- from: railways:brass_wrapped_locometal_boiler (locometal deco block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: locometal blocks (decorative hull material) crush back to metal plates + experience nugget — deco recycles into resource; a minor but coherent M-04 loop on the large deco palette
- from: railways conductor / benchcart | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: conductor NPCs don't hold loot tables railways authors; bootstrapping a loot-seed here would require authoring against vanilla villager/entity tables, not railways' own — too indirect; no real method surface
- OK — connections sound (Create + aeronautics/logistics)

## necronomicon   [anchors: support/library]

- LEAVE — pure API library (ElocinDev). Zero items/blocks/recipes. Sanctioned support role.

## gtmogs   [anchors: survival, economy (2)]

- from: gtmogs ore-vein config (the worldgen framework) | via: worldgen/spawn | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: GTMOGS enables M-03 downstream (the ores it places are what Create crushes), but GTMOGS itself has no recipe surface or method to author against; it is the enabler, not the edge — no weave to author here; flag as "feeds M-03/M-08 upstream" in the log only
- OK — connections sound (survival + economy as scarcity foundation); framework mods don't need additional authored weaves

## trading_floor   [anchors: Create, economy (2)]

- from: trading_floor:trading_depot (automating villager trades) | via: trading_floor depot + Create belts | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: the Trading Depot bridges villager trade → Create belt output → Numismatics economy — it IS the villager-trade-to-economy seam; M-21 is provisional but this is the clearest possible instantiation of it (provisional motif)
- from: trading_floor:trading_depot loot table | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: the depot has a loot table (loot=yes) but seeding it with coins is circular — the depot already outputs trade goods; no new anchor gained
- OK — connections sound (Create + economy at 2); M-21 accept above is a confirmation/strengthening of the existing economy anchor rather than a new pillar

## createmechanicalcompanion   [anchors: Create (1)]

- from: createmechanicalcompanion:mechanical_wolf_link | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — a clockwork wolf soul-fused via spirit fire is lore-incoherent; Occultism's spirit_fire transmutes organic drops into essences, not mechanical constructs; the pairing feels forced
- from: createmechanicalcompanion:optical_sensor | via: create_new_age:energising | to: Create (electric tier) | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: the optical_sensor (a precision endgame component) requires an FE-charging step before assembly — threads Create's electric tier into the mechanical companion build chain; makes the companion cost energy infrastructure as a pre-req
- from: createmechanicalcompanion loot (illager_engineer_spawn_egg drops) | via: loot-seed | to: economy | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Illager Engineer (createmechanicalcompanion's custom mob) drops a rare blueprint fragment seeded into its loot — a boss-key style unlock that gates the companion's highest-tier module behind defeating the engineer (M-15 boss-key unlock)
- REWORK: 1-anchor mod. The two accepts above give Create + magic/electric and survival/boss-key paths.

## biolith   [anchors: support/worldgen API]

- LEAVE — worldgen placement library (Terraformers). Zero items/blocks/recipes. Sanctioned support role.

## bcc   [anchors: support/modpack-ops]

- LEAVE — server-connection version-check utility. Zero items/blocks/recipes. Sanctioned support role.

## fluid   [anchors: Create, aeronautics (2)]

- from: fluid:centrifugal_pump | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the centrifugal pump's superior flow rate makes it the required fluid-mover for Aeronautics fuel lines / coolant loops on larger ships — a mechanical component → aeronautics drivetrain/control connection (M-24)
- from: fluid:honeycomb_mold (noted in item list) | via: create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the honeycomb_mold is a manufacturing mold-tool (for creating the copper tap castings), not an ingredient to route through; no clean processing-chain pull here — read as part of the copper-tap recipe, not a standalone material edge
- OK — connections sound (Create + aeronautics). The M-24 accept above deepens the aeronautics anchor.

== CHUNK COMPLETE ==
