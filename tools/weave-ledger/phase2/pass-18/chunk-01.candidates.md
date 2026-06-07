# Phase 2 candidates — chunk-01

## friendsandfoes   [anchors: survival (1)]

- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the claw of a skittering deep-sea creature makes a coherent spirit-fire reagent — crab = oceanic danger loot seeded into spellcraft
- from: friendsandfoes:crab_claw | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the rare reach-extending claw is a natural infusion catalyst for a mobility/reach glyph or upgrade — already brews a reach potion, so a magical infusion is a second use that reads "of course"
- from: friendsandfoes:crab_claw | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty board demands mob-drop curiosities — a crab claw from a skittering coastal beast is exactly the kind of field-harvest item a bounty wants; routes the survival encounter into coin
- from: hostile-mob loot (Wildfire / Iceologer / Illusioner drops) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hostile variants dropping bounty-eligible materials — the danger pressure converts to coin via the bounty arm of the economy
- from: friendsandfoes:copper_golem_head / copper_button set | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: deco-recycling of 3 copper blocks (buttons, rods) is a trivially thin M-04 hit on a tiny surface; the copper buttons are functionally vanilla, so crushing them to nuggets adds noise without real loop value — the crab_claw/magic edges are the coherent pair
- from: friendsandfoes:crab_claw (reach potion path) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: M-02 via spirit_fire and M-10 via enchanting_apparatus already claim the claw's magic slot; stacking a third magic route on one low-volume drop over-loads it — pick the two cleaner methods (spirit_fire + enchanting_apparatus) and leave the ritual slot for a mod with no other magic candidates

OK — friendsandfoes currently has 1 anchor (survival). The crab_claw magic-reagent and bounty/economy routes are its natural 2nd anchors. No existing connections to review.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — pure cosmetic particle/sound emitter; 184 "items" are particle-effect holders with no world presence, no drops, no loot table content (loot=yes in the auto-digest but the items are minecraft namespace blood particle holders, not collectible drops). Zero material surface to route through any method.

## gamediscs   [anchors: survival/flavor (1)]

- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: power-read kills this — the gaming console is a pure novelty toy at survival-everyday tier; the processor/redstone_circuit are theme-flavor components (a retro arcade gadget), and gating them behind Create mechanical_crafting imposes a tech-spine dependency on a downtime easter-egg. Depth should scale with power; a toy is explicitly not a power-bearing item. Forcing it reads as contrivance.
- from: gamediscs:game_disc_* | via: loot-seed | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: discs already drop from specific kills (skeleton kills bee/slime/frog/rabbit) — that IS the survival interaction loop and it works as-is. No cross-system seeding is coherent; there's no motif that fits "add a game disc to a dungeon chest" in a way a player would call purposeful.
- LEAVE — gamediscs is a sanctioned novelty/flavor item with no coherent production or economy surface worth weaving; all candidate routes either under-scale (toy forced through a complex method) or add noise. The existing kill-to-disc gimmick is the whole loop.

## smartbrainlib   [anchors: support/library (1)]

- LEAVE — zero-content code library (AI framework); no items, no blocks, no methods. Nothing to weave.

## alexsmobs   [anchors: survival (1)]

- from: alexsmobs:ambergris | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a rare sea-creature secretion — already a real-world reagent for perfume and preservatives; routing it as an arcane infusion catalyst for potion-longevity or fluid-related glyphs is sensible and the player immediately understands why the whale-dropped wax goes into a magic altar
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender_residue from End-space creatures is thematically spirit-adjacent; transmuting it in spirit fire makes instinctive sense and routes exploration-danger into the Occultism web
- from: alexsmobs:bear_dust | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a ground bear byproduct as a low-tier imbuement ingredient — "bear essence" is perfectly understandable in a magic context; keeps mob-combat meaningful at the everyday tier without over-gating
- from: alexsmobs:void_worm_beak (boss-tier) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm is the pack's End-space boss; its beak as a boss-key gating ingredient for a high-tier Create component (e.g. an advanced mechanical arm or precision device) is a textbook M-15 — danger output unlocking tech depth. The void worm's scale makes this feel earned.
- from: alexsmobs:banana / alexsmobs:banana_slug_slime | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Alex's tropical drops (banana, slug slime) into Farmer's Delight cooking chains — banana dishes or a slime-thickened stew — is a clean processing pull that cements the survival anchor with a second processing node
- from: alexsmobs:ambergris | via: create:milling | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: ambergris is already claimed for the magic infusion route (M-10 via enchanting_apparatus) which is the stronger, more coherent use. Milling ambergris into a generic craft ingredient dilutes the reserved reagent role; don't double-spend the scarce whale drop on a weaker Create intermediate when the magic route is cleaner.
- from: alexsmobs:void_worm_beak | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: the beak is already accepted as an M-15 boss-key gate for Create; routing it also through an Occultism ritual splits the boss-key identity across two systems — dilutes both. One boss drop should have one primary key role; if a second magic use is wanted, use a *different* Void Worm drop, not the beak.

REWORK: alexsmobs has no existing authored connections yet (0 made-by methods, vanilla only) — no rework needed. The new candidates above are all additive.

## mcwroofs   [anchors: support/decoration (1)]

- from: mcwroofs stone/brick/andesite roof variants (many blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: power-read: the deco-recycle pass is valid in principle (M-04), but the effort-to-value ratio is severely negative for 600+ blocks. Any wholesale tag-sweep on `#mcwroofs:*stone*` / `*brick*` blocks works mechanically but adds negligible loop value — the mod is a pure decoration palette and its blocks are vanilla-equivalent materials already crushable via their source (vanilla stone/brick already crushes). Adding 600+ crush recipes for blocks that are already downstream of crushable vanilla materials is noise. A targeted subset (e.g. terracotta roof variants → clay + xp nugget) would be thinner still. M-04 on decoration mods earns its place when the mod's blocks are *unique* materials; here they are not.
- LEAVE — mcwroofs is a decoration palette (sanctioned support anchor). Its 600+ blocks are all vanilla-material derivatives with no unique outputs and no method of its own. There is no coherent 2nd-anchor weave that wouldn't be a contrived or low-value sweep.

## accelerateddecay   [anchors: support/performance (1)]

- LEAVE — pure performance patch (replaces leaf-decay ticking); no blocks, no items, no loot table, no methods. Genuine zero-content infrastructure mod. Nothing to weave.

## jamlib   [anchors: support/library (1)]

- LEAVE — zero-content library (JSON5 config API / platform abstraction); no items, no blocks, no methods. Nothing to weave.

## creativecore   [anchors: support/library (1)]

- LEAVE — zero-content GUI/event library; no items, no blocks, no methods. Nothing to weave.

## attributefix   [anchors: support/library (1)]

- LEAVE — zero-content attribute-cap bugfix; no items, no blocks, no methods. Nothing to weave.

## formations   [anchors: survival (1)]

- from: formations generated structures (altars, cabins, ruins, campsites) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: structures are the natural delivery mechanism for loot that feeds the bounty board — a ruin altar seeding coin or magic reagent drops converts exploration pressure into economy without needing any recipe; the player finds structures because the world is dangerous and interesting, and what they pull from them feeds trade
- from: formations generated altars/pedestals | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an ancient altar or pedestal structure seeding a magic reagent (e.g. an Ars source_gem fragment or an Occultism component) is immediately coherent — a player stumbling on a ruin and finding the arcane material "of course it was here" is exactly the thematic pull. Advance the loop: exploration → magic production input.
- from: formations template_editor (the one item) | via: recipe | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the template_editor is a dev-authoring tool, not a survival/gameplay item — routing it through a Create recipe makes no thematic sense and serves no loop purpose. No motif fits. The editor is an admin/creator tool, not a player-crafted object.

REWORK: formations has no existing authored connections (vanilla only). The loot-seed candidates above are the natural 2nd anchor.

## mffs   [anchors: create (1), survival (1) = 2 anchors]

- OK — connections sound. The authored weave (focus_matrix → create:electron_tube gated M-05; projector/interdiction_matrix → create:sequenced_assembly M-06; mid-tier machines use TFMG steel) is the gold-standard Create integration. Two anchors (create + survival) already at the target. The existing connections are coherent, correctly costed (endgame items behind sequenced assembly), and thematically tight (force-field base-defense is the survival anchor; the Create-fabricated machines are the production anchor). No rework candidates found.
- from: mffs:coercion_deriver (Fortron generator, endgame) | via: numismatics | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: the coercion_deriver is a functional machine (Fortron generator), not a luxury trade good — gear players keep, not sell. Force-field tech is base-defense infrastructure; it doesn't circulate in the trade economy the way food or deco goods do. This would be a forced economy edge on a functional survival-defense machine.
- from: mffs:blank_card / access_card | via: create:item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the biometric access cards are a functional security item, not a product to be upgraded — applying a Create component to a card to "upgrade" it has no thematic basis (it's a key, not gear). The existing M-05/M-06 chain already routes the load-bearing machines through Create; adding an M-20 on ancillary card items would be contrivance.

## lithostitched   [anchors: support/library (1)]

- LEAVE — zero-content worldgen library (biome/structure modifier API); no items, no blocks, no methods. Nothing to weave.

## terrablender   [anchors: support/library (1)]

- LEAVE — zero-content biome-region API library; no items, no blocks, no methods. Nothing to weave.

## polymorph   [anchors: support/compat (1)]

- LEAVE — zero-content recipe-conflict resolver (UI compat QoL); no items, no blocks, no methods. Nothing to weave.

## quark   [anchors: support/decoration-palette-building-QoL (1)]

- from: quark storage crate blocks (apple_crate, carrot_crate, potato_crate, etc. — item/storage_blocks/*) | via: create:compacting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: compacting bulk crops into Quark storage crates in a mechanical press is an intuitive farm-to-storage automation step — the Create-spine player sets up a compacting line to warehouse harvests; the crate blocks become a Create-friendly bulk-storage format
- from: quark:ancient_bookshelf / quark:ancient_planks/log set (Glimmering Weald wood) | via: occultism:spirit_fire | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ancient wood type (Glimmering Weald cave biome) has an inherent otherworldly vibe — running ancient logs through spirit-fire (Create's haunting-adjacent soul-fire process) to yield a spirit-attuned wood component is thematically coherent; the underground biome's rarest wood feeding occult processing is a sensible loop. Note: M-19 is create:haunting specifically; the rerouting through occultism:spirit_fire is M-11-adjacent — tag M-11 here as the closer fit since the method is Occultism's spirit_fire, not Create's haunting.
- from: quark:ancient_planks set | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: haunting the Glimmering Weald ancient wood (a cave biome material the player must explore/descend to find) via Create's soul-fire yields a spirit-charged wood product — immediately sensible, rewards exploration, and feeds the Create spine with an exploration-gated input
- from: quark stone decoration variants (andesite_bricks, granite bricks, limestone, cobblestone bricks, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Quark's stone deco variants are already downstream of vanilla crushable stones; crushing the deco blocks back to gravel/raw adds no loop value beyond what vanilla stone crushing already provides. The 800+ block count makes a wholesale pass low signal-to-noise. Skip in favor of the crate-compacting and ancient-wood weaves.
- from: quark:abacus | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: power-read: the abacus is a novelty/count tracking tool, not a power-bearing item. Gating a vanilla-tier counting gadget behind mechanical_crafting is M-05 misuse — M-05 is for flagship machines, not utility doodads. The loop imbalance (complex gate, minimal benefit) makes this a contrivance.
- from: quark:elytra_duplication recipe | via: quark:elytra_duplication | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: elytra duplication is Quark's own internal recipe-type for its elytra feature — it isn't a cross-system route. The output (more elytras) doesn't feed the Numismatics economy in a coherent way (elytras are a rare exploration item, not a traded luxury good at scale). No loop advance.
- from: quark:smithing_rune (decorative smithing upgrade) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: smithing runes are decorative cosmetic overlays on armor; routing them through a magic infusion apparatus would imply functional enhancement, but they have no gameplay effect — the tone (cosmetic) clashes with the functional-magic context of enchanting_apparatus. A cosmetic decoration shouldn't pretend to be an arcane upgrade.

REWORK: quark has no existing authored connections (vanilla only). The crate-compacting and ancient-wood weaves are the natural candidates.

## trailandtales_delight   [anchors: survival (1)]

- from: trailandtales_delight:cheese_wheel / cheese_slice | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: multi-step artisan food (milk → curd → aged cheese wheel → sliced) is a textbook luxury good; a cheese wheel traveling from a ranching specialist's dairy to a colony or market stall closes the loop from survival pressure (hunger/diet) through production into trade
- from: trailandtales_delight:cherry_cheese_pie | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the cherry cheese pie is the deepest-chain item (cherry blossom + cheese + sniffer-crop input + cooking steps) — multi-ingredient luxury food is the clearest Numismatics sell-good candidate in the mod; a player specialized in the cherry/dairy cooking route can sell these
- from: trailandtales_delight:ancient_coffee | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: ancient coffee is a legitimate luxury candidate, but M-09 slots are already filled by cheese_wheel and cherry_cheese_pie (the two strongest items); stacking a third economy candidate on the same mod from the same base motif without distinct differentiation thins the signal. The coffee is less differentiated (a drink vs. a food dish) and competes for the same economy slot. Keep the two cleaner ones.
- from: trailandtales_delight:lantern_fruit / golden_lantern_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling Sniffer-recovered lantern fruit into a fruity powder or extract feeds downstream drink/jam recipes — the Create milling step as an intermediate that produces an ingredient other cooking chains consume (M-12 processing-chain pull with an intermediate)
- from: trailandtales_delight:golden_lantern_fruit | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: the golden lantern fruit (the rarer cultivar of a Sniffer-recovered crop) is exactly the kind of seasonal/rare crop that fits M-16 — a mid-tier imbuement input gated on finding and growing the sniffer seed variant. Seasonal availability (crops only grow in-season with Serene Seasons) + rare sniffer-recovery = a legitimate magic-input reagent
- from: trailandtales_delight:cooked_sniffer_egg_block | via: farmersdelight:cooking | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: already uses farmersdelight:cooking (listed in made-by methods) — this is an existing connection, not a new weave candidate. The cooking integration is the mod's primary method usage. No new anchor is added.

REWORK: trailandtales_delight already uses farmersdelight:cooking and farmersdelight:cutting (made-by methods). These are its existing survival connections — they're coherent. The new economy (M-09 cheese, pie) and create (M-12 milling, M-16 golden fruit) candidates add the 2nd anchor. No rework flag on existing connections — they're appropriate.

## buildguide   [anchors: support/QoL (1)]

- LEAVE — pure client-side build-assist render overlay; no items, no blocks, no loot tables, no methods. Genuine zero-content utility mod. Nothing to weave.

## ecologics   [anchors: survival (1)]

- from: ecologics:coconut / coconut_slice | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut is a tagged fruit (item/foods/fruit) and coconut_slice is a hunger item — routing it through Farmer's Delight cooking into a coconut-based dish (coconut milk stew, tropical salad) is the natural survival-depth step and cements the survival anchor with a second cooking node
- from: ecologics:coconut | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling coconut into desiccated coconut flake or coconut flour — a cooking intermediate that feeds the broader delight-chain or drink recipes — is a clean Create processing-pull; the player mills harvested coconuts in a mechanical mill as part of a food-automation line
- from: ecologics:coconut_slice (clears all potion effects on eat) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the coconut slice's unique property (clears all potion effects, like milk) makes it a plausible arcane-infusion catalyst — an "anti-magic cleansing agent" used in a purification or dispel enchantment. The food already has a quasi-magical property (effect-clearing); formalizing that as a magic infusion input is coherent
- from: ecologics seashell storage blocks (block/storage_blocks/seashell) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: seashell storage blocks are vanilla-equivalent deco; crushing them back to shell fragments or sand is technically valid M-04 but the volume (one storage block type) makes it a very thin hit that adds minimal loop value. The coconut processing weaves (milling + cooking) are the coherent pair; the seashell crush would be noise.
- from: ecologics:coconut woodset planks/logs | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: a new woodset being cuttable on a saw is a standard Create compatibility that many packs add wholesale — but it's mechanical compat, not a weave that advances the loop. It doesn't add a new anchor (Create already processes all woods equivalently), and it's the most generic possible interaction. Not a weave candidate worth recording here; it belongs in a compat sweep, not the weave ledger.

REWORK: ecologics has no existing authored connections (vanilla only). The coconut cooking + milling + magic-cleansing-catalyst weaves are the natural 2nd anchor.

## immersive_armors   [anchors: survival (1)]

- from: immersive_armors:heavy_chestplate / heavy_boots / heavy_helmet / heavy_leggings | via: create:pressing | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy armor set (high armor, near-zero knockback, demanding iron blocks + pistons) is the natural Create-gating candidate — pressing iron sheets or fabricating the interlocking plate assembly in a mechanical press rather than at a vanilla crafting table reads "of course a set this protective needs machine-tooled plates"; routes the mid-game armor upgrade into the Create spine
- from: immersive_armors:divine_chestplate / divine set | via: ars_nouveau:armor_upgrade | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Divine set (blocks one full attack per minute) is the clearest magic-upgrade candidate in the mod — ars_nouveau:armor_upgrade applies arcane enhancements to armor pieces; a Divine chestplate that requires an arcane infusion step to gain its protective ward fits perfectly (the armor has a miraculous property; it passed through arcane hands to get it)
- from: immersive_armors:steampunk_chestplate / steampunk set (Steampunk armor) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Steampunk set is the thematic slam-dunk — a steampunk-aesthetic armor set in a Create-spine pack being gate on mechanical_crafting (the large-assembly Create method) is the most coherent fit in the entire mod. The player builds their steampunk gear on the mechanical crafter, not the crafting table.
- from: immersive_armors:prismarine_chestplate / prismarine set | via: create:deploying | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: deploying a prismarine component onto base armor to upgrade it is mechanically valid M-20, but the Prismarine set's bonus (spikes attackers + Depth Strider) doesn't suggest a mechanical-application narrative — it's an oceanic/magical property, not an assembled machine part. The Heavy and Steampunk Create weaves are the coherent ones; forcing a third armor set through Create dilutes the signal and Prismarine reads more as a magic/Occultism candidate (underwater/ocean theme) than a Create one.
- from: immersive_armors:bone_chestplate / bone set | via: occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: the Bone armor set uses vanilla bones and pacifies skeletons — there's a folk-magic vibe, but the set's ingredients are just vanilla bones, not ritual reagents. Routing bone armor through Occultism ritual is a theme stretch (the skeleton-pacifying property is behavioral, not spirit-fire transmutation). The Divine set via ars armor_upgrade is the cleaner magic route; adding a second magic route on a different set via a weaker thematic tie is redundant.
- from: immersive_armors:emerald_chestplate (Emerald/endgame set) | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: armor is gear players keep; selling full armor sets through Numismatics is a weak economy route (M-09 is for consumable luxury goods — food, drinks, deco — not functional gear). Armor circulates in combat, not trade stalls. Reject; don't force M-09 onto functional equipment.

REWORK: immersive_armors has no existing authored connections (vanilla only). The Heavy/Steampunk Create and Divine magic weaves give it the natural 2nd anchor (survival already present; Create/magic as second).

== CHUNK COMPLETE ==
