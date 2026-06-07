# Phase 2 candidates — chunk-09

## create_sa   [anchors: create/aeronautics (2)]

Dossier places this at 2 anchors already (Create-built gear + personal flight = aeronautics). The dossier's own 2nd-anchor note says "leave." Power-reading the items: brass/andesite jetpacks are mid-game personal mobility; exoskeleton is mid; the netherite blazing line is endgame. Drones are endgame utility.

**Method-pull candidates:**

- from: create_sa:blazing_pickaxe / blazing line | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: endgame | tone: ok — arcane infusion of a blaze-forged tool to add a fire-damage enchant or school affinity reads as thematic (fire-school meets industrial fire tool) | verdict: ACCEPT | hook: A blazing tool tempered in the Alchemist Cauldron gains a fire-school affinity charge — the smith and the mage meet at the forge.

- from: create_sa:brass_drone_item | via: create:sequenced_assembly (add a magic sensor module gated on ars_nouveau source_gem) | to: magic | motif: M-29 | power: endgame | tone: ok — drone with a scrying sensor requiring a source_gem attunement is thematically tight (Ars Nouveau's magic lens applied to a brass machine) | verdict: ACCEPT | hook: Fitting the drone with an arcane optical sensor demands a Source Gem from the magic specialist — Create and magic forced to exchange.

- from: create_sa:brass_exoskeleton_chestplate | via: create_new_age:energising | to: Create (depth) | motif: M-17 | power: mid | tone: ok — an exoskeleton that draws electrical charge to sustain its aura is mechanically sensible for an electricity-add-on | verdict: ACCEPT | hook: The exoskeleton's strength aura runs on stored FE, charged at the Energiser — it's equipment that eats power.

- from: create_sa:brass_jetpack_chestplate (fuel consumption) | via: M-26 consumption sink framing | to: survival/economy | motif: M-26 | power: mid | tone: ok — jetpacks consume fuel (charcoal/compressed air/FE depending on pack config) so demand never zeroes; natural loop-closing edge | verdict: ACCEPT | hook: Jetpacks eat fuel every flight; the refuel demand ties personal aviation back to the production chain.

- from: create_sa loot=yes (gear drops from mobs?) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — if Create SA gear can drop from combat mobs, seeding mid-tier modules into mob loot tables feeds the combat-supply economy (players farm modules, trade them) | verdict: ACCEPT | hook: A rare gear module loot-seeded to combat drops means fighters supply the workshop; combat specialist → tech economy.

**Existing connections review:**
OK — connections sound (Create build depth + aeronautics/personal flight are both well-grounded).

## create_train_parts   [anchors: aeronautics (1)]

One anchor (aeronautics = trains). Pure decorative/functional fittings for Create trains — sliding windows, steps, slides, crossings. No recipe-type registered; consumes vanilla mats (andesite/brass/copper/glass). Power: everyday train-detailing blocks.

**Method-pull candidates:**

- from: create_train_parts:brass_sliding_window / brass_step | via: create:pressing (brass ingot → brass sheet → into window recipe) | to: create | motif: M-04 | power: everyday | tone: ok — routing train-detailing brass parts through pressed sheets is the natural Create-materials story; a player expects train parts to cost real fabricated metal | verdict: ACCEPT | hook: A brass train window needs pressed brass sheet, not raw ingots — train infrastructure earns its Create anchor through the fabrication chain.

- from: create_train_parts blocks (copper/andesite variants) | via: create:crushing (deco→crushed return) | to: create | motif: M-04 | power: everyday | tone: ok — lossy crush-back is the established deco↔Create pattern; these are decorative fittings | verdict: ACCEPT | hook: Torn-down train steps and windows crush back to gravel + experience — the recycling loop that makes demolition make sense.

- from: create_train_parts (whole mod as train-economy infrastructure) | via: M-31 logistics-required bulk | to: economy/aeronautics | motif: M-31 | power: mid | tone: ok — an argument that detailed, live trains lower route friction and enable bulk cargo; but this is a stretch because the blocks themselves are purely cosmetic — they don't actually affect train throughput | verdict: REJECT | reason: The blocks are deco-only — sliding windows and steps do not affect cargo capacity or route speed. The M-31 link would be purely thematic, not mechanical.

- from: create_train_parts (loot=yes flag) | via: loot-seed | to: survival | motif: M-02 | power: everyday | tone: clash — the loot=yes flag likely comes from vanilla inheritance; these are crafting-only decorative blocks, not sensibly found in dungeon chests. Seeding train steps into loot tables would be incoherent. | verdict: REJECT | reason: Tone clash — train-fitting blocks in dungeon loot is nonsensical; loot=yes is likely a jar-artifact, not real chest-loot.

**Existing connections review:**
REWORK: The single aeronautics anchor is correct but minimal. The two ACCEPT candidates above (M-04 pressing + M-04 crushing) give it a genuine Create second anchor, which is the right pair — trains are a Create vehicle and their parts should cost fabricated Create materials. Without that, it's stranded at 1.

## cataclysm   [anchors: survival (1)]

Rich boss/dungeon mod — eight large bosses, 300+ items, unique processing methods (weapon_fusion via Mechanical Fusion Anvil, amethyst_bless via dungeon-only altar). Endgame content throughout. Boss-drop materials: Witherite, Ignitium, Cursium, ancient_metal_ingot, Void Core. CLAUDE.md explicitly calls Cataclysm as the canonical "complex Create tech unlocks via boss drops" mod.

**Method-pull candidates:**

- from: cataclysm:ancient_metal_ingot | via: create:crushing → Create processing chain → create:sequenced_assembly keystone | to: create | motif: M-15 (boss-key unlock) + M-06 (sequenced-assembly keystone) | power: endgame | tone: ok — the dossier explicitly flags this as STRONG; ancient metal as a material that must pass through Create processing before it can become the keystone of a high-tier Create machine is the canonical loop | verdict: ACCEPT | hook: Ancient Metal straight from the boss can't be used raw — it must be crushed and worked through Create's processing chain before the high-tier machine accepts it.

- from: cataclysm:witherite_ingot / cataclysm:cursium_ingot | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 (ritual/transmutation sink) | power: endgame | tone: ok — boss drops from dark-fantasy dungeons transmuted in an occult ritual reads as thematically tight (the dark essence of a world-boss captured via spirit fire) | verdict: ACCEPT | hook: Cursed boss metal fed to a spirit fire ritual yields a high-grade occultism reagent — the dungeon feeds the dark arts.

- from: cataclysm:ignitium_ingot (fire-themed metal from Ignis boss) | via: ars_nouveau:imbuement (fire attunement) | to: magic | motif: M-10 (arcane infusion pull) | power: endgame | tone: ok — fire-aspected metal from a fire boss into an Ars Nouveau fire-imbuement ritual is a strong thematic link; the imbuement makes it a magic reagent not just a metal | verdict: ACCEPT | hook: Ignitium, tempered in the flames of Ignis, is further refined in the Ars imbuement altar to become a fire-aspected magical catalyst.

- from: cataclysm boss-drop weapons (Laser Gatling, Meat Shredder) | via: economy — M-34 combat-route supply | to: economy | motif: M-34 | power: endgame | tone: ok — scarce boss-drop weapons are exactly the high-value combat-specialist → non-combat trade good; the fighter farms the dungeon and sells the weapon to the tech player | verdict: ACCEPT | hook: The combat specialist clears Cataclysm dungeons and trades the unique weapons; no one else can source them.

- from: cataclysm:amethyst_crab_meat (food item, ocean boss zone) | via: extradelight:oven / mortar (cooking chain) | to: survival (food) | motif: M-12 (processing-chain pull) | power: mid | tone: ok — exotic crustacean meat from an ocean boss zone processed in the deep-cuisine kitchen is a neat loop (adventure → food → diet variety) | verdict: ACCEPT | hook: Amethyst crab meat from the Sunken City dungeon is the exotic ingredient for an extradelight feast — the dungeon feeds the kitchen.

- from: cataclysm:weapon_fusion (Mechanical Fusion Anvil) as a method | via: method-pull on cataclysm's own machine — what foreign material wants this fusion upgrade method? | to: create | motif: M-20 (deploy-application upgrade) | power: endgame | tone: ok — weapon_fusion is itself an upgrade path (combine items for a better result); routing a Create-made weapon blank into weapon_fusion with a boss-drop upgrade material is the light-step version of this | verdict: ACCEPT | hook: A Create-forged sword + a Witherite ingot in the Mechanical Fusion Anvil produces an enhanced blade — industrial craft meets eldritch power.

- from: cataclysm dungeon structures | via: loot-seed — seed magic reagents (ars source_gem, irons arcane_essence) into Cataclysm dungeon loot | to: magic | motif: M-02 (mob-drop reagent sink, inverted — reagents as dungeon loot rewards) | power: mid | tone: ok — finding magic reagents in dark dungeon chests is thematically consistent and rewards explorers | verdict: ACCEPT | hook: The dungeons of L'Ender hold magic reagents as hidden spoils — exploration and magic interlock through the loot tables.

- from: cataclysm deco blocks (azure_seastone, blackstone, black_steel) | via: create:crushing → M-04 | to: create | motif: M-04 | power: everyday | tone: ok — boss-dungeon deco blocks crushing back to gravel/stone + XP is the established pattern | verdict: ACCEPT | hook: Stripped azure seastone from a cleared dungeon can be crushed back to reclaim the mineral — the Create recycling loop works even on boss loot.

**Existing connections review:**
REWORK: Single-anchor (survival) for a flagship 300-item boss mod with explicit CLAUDE.md callout as the boss-drop gate mechanism is clearly under-woven. The 8 ACCEPT candidates above (M-15 Create keystone, M-11 occult transmutation, M-10 Ars fire infusion, M-34 combat supply, M-12 food chain, M-20 fusion upgrade, M-02 loot seed, M-04 deco crush) all advance the loop. Priority is M-15 + M-06 (Create spine gating) and M-11 (magic web).

## citadel   [anchors: support/library (1)]

Pure library/API — animation framework, spawn-rate tooling for Alex's Mobs family. Minimal player-facing content (citadel:citadel_book, citadel:lectern are dev/util). The dossier records loot=yes, but that is a jar artifact (lectern item has a vanilla-inherited loot entry at most). Zero material surface.

- LEAVE — genuine code library (animation/spawn API for Alex's Mobs); zero material surface, no item processing, no loot tables of substance. No coherent weave possible.

## yungsapi   [anchors: support/library (1)]

Pure API library — jigsaw manager, structure utilities, JSON adapters, item/block randomizers. The dossier records 0 blocks, 0 items, loot=no. Genuinely nothing to weave.

- LEAVE — zero-content code library (YUNG's structure-mod API); no items, no loot, nothing to route through any method.

## xaerominimap   [anchors: support/client-QoL (1)]

Client-side minimap HUD with waypoints and entity radar. Zero items, zero loot, no blocks, no materials, no world interaction. Pure client rendering.

- LEAVE — pure client UI / navigation aid; no material surface, no items, no mechanic to route through. Nothing to weave.

## createmechanicalcompanion   [anchors: create (1)]

Craftable clockwork wolf companion, built via deep Create sequenced assembly (netherite plates, precision casing, optical sensor, quantum drive). Combat/utility modules. One anchor (Create). Dossier argues leave. Let me power-read the items and test harder.

**Method-pull candidates:**

- from: createmechanicalcompanion:mechanical_wolf_link (the summoning item, worn as Curios head slot) | via: ars_nouveau:imbuement (source gem attunement on the wolf link to unlock a magic combat module slot) | to: magic | motif: M-29 (cross-route dependency — a Create-built item requiring a magic input to unlock a capability) | power: endgame | tone: ok — a brass-and-netherite wolf gaining a magic-infused combat sense (arcane optical sensor) is tonally coherent for a pack where Create and magic coexist; it doesn't feel forced because the wolf already has an "optical sensor" mechanic | verdict: ACCEPT | hook: The mechanical wolf's arcane tracking module is awakened at an imbuement altar — the engineer and the arcanist both contribute to the ultimate companion.

- from: createmechanicalcompanion:optical_sensor / quantum_drive (exotic Create components) | via: create_new_age:energising | to: create (depth) | motif: M-17 (FE charging bridge) | power: endgame | tone: ok — the quantum drive and optical sensor sound like high-tech electronics; routing them through the Energiser for their final charge step is mechanically sensible | verdict: ACCEPT | hook: The quantum drive component must be energised at the Create New Age Energiser before it can power the wolf's locomotion system.

- from: createmechanicalcompanion (combat companion → survival pressure overlap) | via: M-34 combat-route supply | to: economy | motif: M-34 | power: endgame | tone: clash — the companion is personal gear, not a trade good; it's owner-locked (dossier: "owner-locked unbreakable helpers") so it can't be traded between players as a commodity. The M-34 angle would require the wolf modules to be separable trade goods. | verdict: REJECT | reason: Owner-locked, non-tradeable item — no economy trade surface. M-34 requires the fighter to supply goods to others; a personal companion doesn't fulfill that.

- from: createmechanicalcompanion:booster_rocket (a module item in the item sample) | via: aeronautics tie — a rocket-equipped wolf as personal propulsion | to: aeronautics | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: No-motif — personal rocket propulsion for a wolf companion doesn't map to any accepted M-01..M-38 motif. The aeronautics pillar is about logistics/vehicles (ships, trains, drones for cargo), not personal pet boosters. Forced edge.

**Existing connections review:**
REWORK: Single anchor (Create) is correct but the dossier's "leave, nothing to weave" is too conservative — the optical-sensor / quantum-drive items are clearly designed as high-tech electronics and the M-17 Energiser path + M-29 imbuement magic-module are both coherent. The mod has two genuine ACCEPT candidates to lift it to 3 anchors.

