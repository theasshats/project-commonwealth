# Phase 2 candidates — chunk-12

## sablecollisiondamage   [anchors: support/aeronautics (1)]
- LEAVE — zero items/blocks, zero loot, pure physics-behavior addon; no material surface to weave. Serves the aeronautics pillar as a sanctioned support role.
- OK — connections sound (support role, no 2nd anchor expected)

## controlling   [anchors: support/QoL (1)]
- LEAVE — client keybind UI library; no items, no loot, no material graph. Nothing to weave.
- OK — connections sound (sanctioned support role)

## crash_assistant   [anchors: support/client-utility (1)]
- LEAVE — crash-diagnostics coremod; no items, no loot, no material graph. Nothing to weave.
- OK — connections sound (sanctioned support role)

## createbigcannons   [anchors: create, aeronautics (2)]
- from: createbigcannons:steel_ingot / createbigcannons:nethersteel_ingot (c:ingots/steel, c:ingots/nethersteel) | via: createbigcannons:melting + create:mixing (foundry melt into cannon alloy) | to: survival | motif: M-15 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: boss drops (e.g. Cataclysm / Warden loot) gate the nethersteel formula in the CBC foundry — the fighter's path to naval artillery
- from: createbigcannons shells/munitions (finished war-goods) | via: economy sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; munitions are sellable but this alone adds no structural loop value
- REWORK: existing aeronautics anchor is solid (cannons on Aeronautics ships); Create anchor is solid (deep Create recipe chain). The boss-key gate (M-15) would add a genuine survival→Create seam without being forced — CBC's nethersteel/cast-iron are perfect candidates for a boss-gated foundry unlock. Flag for Phase 3.
- OK — core connections sound; one REWORK candidate proposed above

## t_and_t   [anchors: survival (1)]
- from: t_and_t loot tables (village chests / conquerable forts / ocean ship) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: conquered fort chests yield Numismatics coin alongside vanilla loot — settlements are the pack's natural trade hubs, and finding coin in cleared structures seeds the player economy organically; loot=yes makes this a real delivery point
- from: t_and_t loot tables (fort/outpost chests) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed an Ars Nouveau source gem or an Occultism awakening ingredient in the fort's "officer chest" — makes exploration the entry-point to magic, not just a farming grind
- from: t_and_t village structures (biome-specific villager spawns) | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); prefer the loot-seed approach already ACCEPTed above
- REWORK: 1-anchor (survival) — the two ACCEPT rows above raise it to survival+economy+magic if authored. The economy loot-seed is the priority (distinctive loop-feeder: exploration → coin → trade), magic loot-seed secondary.

## createfisheryindustry   [anchors: create, survival (2)]
- from: createfisheryindustry:fish_skin (leather-substitute) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish skin soaked in an imbuement chamber yields a water-attuned leather variant usable in Ars armour upgrades — the maritime route into magic progression
- from: createfisheryindustry:seafood_chowder / cooked_lobster / cooked_cod_steak (high-nutrition seafood) | via: survival diet demand (five-group system) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already one of the mod's existing anchors; this doesn't add a new system, just deepens an existing one — not a new weave
- from: createfisheryindustry fish/crustacean outputs | via: economy sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
- OK — core 2-anchor connections sound; the fish_skin→imbuement ACCEPT would add a genuine 3rd (magic) seam

## createmechanicalcompanion   [anchors: create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (endgame Curios item) | via: loot-seed or boss-drop gating | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wolf Link (summoning token) requires a boss-drop component in its sequenced-assembly chain — the mechanical wolf becomes the fighter's endgame Create reward, bridging combat to tech
- from: createmechanicalcompanion:optical_sensor / quantum_drive (high-precision modules) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: arcane infusion of a machine-precision sensor is tonally awkward — the mod's vibe is clockwork industrial, not arcane; the two mods' design languages clash here
- REWORK: 1-anchor currently; M-15 boss-gating of the Wolf Link is the natural and thematically sensible 2nd seam (survival danger → endgame craft reward)

## fusion   [anchors: support/library (1)]
- LEAVE — pure client texture-rendering library; no items, no loot, no material graph. Sanctioned support role.
- OK — connections sound

## hpm   [anchors: aeronautics (1)]
- from: hpm:cutter / hpm:cuttermilitariseditem (sailing ship hulls, mid-tier) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the war cutter's hull and mast components require a Create mechanical-crafting step for brass fittings — the shipwright uses the tech spine to build beyond simple wood
- from: hpm:corvette_steamship_item (steamship, highest tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the steamship (a steam-powered vessel) demands a sequenced-assembly chain producing a steam engine core from Create parts — the most advanced ship is a Create milestone, not just a wood/iron craft
- from: hpm:hand_cannon / hpm:cannonball | via: createbigcannons:melting (foundry) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the hand cannon's barrel is cast in the CBC foundry (bronze/cast-iron melt), tying the pirate weapons to the same metallurgy chain as CBC's naval guns — coherent industrial-military tier
- from: hpm ships as goods | via: economy sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; ships are sellable but the loop value is in making them require Create, not in marking them as trade items
- REWORK: 1-anchor (aeronautics); three ACCEPTs above would give it aeronautics+create (solid 2nd anchor). Note: overlap with Create Big Cannons in the naval-artillery space flagged for thunderdome curation (role-split question, not a weave issue).

## aeronautics   [anchors: aeronautics (1) — de-facto create 2nd]
- from: aeronautics:levitite (zinc-gated bulk lift block, every airship needs it) | via: create:mixing → economy (Numismatics) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: zinc-processed levitite blend minted or traded through Numismatics — whoever mass-produces lift material becomes the server's bulk aeronautics supplier; scarcity-gated and structurally distinctive (it's the airship's limiting input, not just a generic product)
- from: aeronautics:levitite blend crystallization (in-world step, code-only) | via: config-KubeJS catalyst injection | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the blend→levitite crystallization requires an Ars Nouveau source gem (or Occultism otherstone) placed adjacent as a catalyst — magic unlocks the lift material's final form, weaving the aeronautics pillar into the magic spine
- from: aeronautics:adjustable_burner (burns furnace fuel) | via: config-tie expanding fuel tag | to: survival | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: extending the burner's accepted fuel tag to include TFMG diesel makes the airship fleet dependent on the fuel-production chain — a farm/refinery specialist supplies the fleet (fuel → propulsion loop)
- from: aeronautics dyeable levitite / tires | via: economy sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable cosmetic, non-distinctive — economy de-emphasis
- REWORK: officially 1-anchor; the three ACCEPTs above would give it aeronautics+economy+magic+survival — a strong multi-anchor result. The economy accept (M-08 levitite) is structurally distinctive (scarcity-gated, loop-closing). The magic accept (M-10 crystallization catalyst) is the cleanest new seam. M-13 fuel-tag is a config-only win.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:branch (a tree-byproduct item dropped during dynamic growth/felling) | via: create:milling | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling branches yields wood pulp or sawdust (a Create milling byproduct) — the living-forest economy feeds the Create processing chain without forcing a non-organic machine into the mod's vibe
- from: dynamictrees per-species seeds (oak_seed, jungle_seed, etc.) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: seed-as-magic-reagent has no thematic grounding — DT seeds are just converted vanilla saplings with no arcane identity; the tone clash is real (rustic-naturalist vs. arcane-scholarly)
- from: dynamictrees mature log output (whole-tree felling dumps a bulk log stack) | via: create:milling (bulk wood processing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is the same seam as the branch milling ACCEPT above, just via a different input item — redundant with M-03; keep the branch route as the more distinctive byproduct
- REWORK: 1-anchor; branch-milling to Create (M-03) is the natural minimal seam. The mod's dossier already notes DT trees are awkward for Create automated harvesters — the milling-byproduct route sidesteps that by working on the dropped item, not the tree structure, so it's coherent and light (everyday depth, one step).

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — client-side tooltip renderer; no items, no loot, no material graph. Sanctioned support role.
- OK — connections sound

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite (16 color variants) | via: create:toolbox_dyeing or craft + dye | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: routing a cosmetic dye step through Create is gilding — the dyeing is already vanilla crafting (levitite + dye); forcing it through a Create method adds no loop value and contradicts the "light step for everyday" rule when the item is purely cosmetic
- from: dyed tires / dyed levitite as specialty trade goods | via: economy sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable cosmetic, non-distinctive — economy de-emphasis
- LEAVE — cosmetic skin layer for Aeronautics; no structural loop content. The aeronautics anchor it already has is appropriate as a support/decoration palette role for its pillar. Forcing a 2nd anchor on a cosmetic add-on mod would be a non-edge.

## l2library   [anchors: support/library (1)]
- LEAVE — shared library/API for LightLand mods; no items, no loot, no material graph. Sanctioned support role.
- OK — connections sound

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw (mob drop from Crab) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: crab claws soaked in an imbuement chamber yield a water-affinity component for Ars brewing — killing crabs on the coast becomes a reliable on-ramp to aquatic magic reagents
- from: friendsandfoes copper-themed blocks (copper_button, lightning_rod set, copper_golem_head) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing oxidized copper buttons/lightning rods yields copper nuggets + a small XP nugget, making F&F copper deco recyclable back through the Create metal economy — the copper golem's world naturally flows back into the production chain
- from: friendsandfoes:crab_claw | via: bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable via bounty, non-distinctive — economy de-emphasis; the magic imbuement ACCEPT is the better anchor for the claw
- REWORK: 1-anchor; the two ACCEPTs (magic + Create) would give it survival+magic+create — a well-rounded result that all feel earned. The crab_claw→imbuement link is particularly clean (coastal mob → aquatic magic reagent, both thematically water-adjacent). The copper-deco recycling is a standard M-04 and low-effort to author.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client texture-feature rendering library; no items, no loot, no material graph. Sanctioned support role.
- OK — connections sound

## kubejs_create   [anchors: support/tooling (1)]
- LEAVE — Create-recipe scripting bridge; no items, no loot, no material graph. Sanctioned support role; it is the *tool* through which weaves are authored, not a weave target itself.
- OK — connections sound

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem (M-01 hub — lapis/amethyst → gem via imbuement) | via: ars_nouveau:imbuement (foreign essences in) | to: magic (internal hub) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: the source gem is the universal magic currency; every mob drop / crop / foreign essence routes through imbuement — this IS the M-01 spine, and confirming it as an ACCEPT locks the hub role
- from: ars_nouveau Vitalic / Agronomic Sourcelinks consuming mob deaths / crop growth | via: organic surplus from Farmer's Delight / Dynamic Trees / farm mods | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: any farm surplus (crop growth, mob kills) passively generates Source — survival pressure and food production output feeds the magic engine without any recipe; the natural organic→magic sink
- from: ars_nouveau:archwood_log (Volcanic Sourcelink bonus fuel) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling archwood logs in a Create mill yields a small source-dust byproduct (an arcane sawdust) — the timber trade feeds the magic engine, and the Create spine processes even magic wood
- from: ars_nouveau spell scrolls / source_gems | via: economy sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; prefer the Vitalic/Agronomic seam as the distinctive survival↔magic bridge
- REWORK: 1-anchor officially; the three ACCEPTs would give it magic+survival+create — a strong result. M-01 is load-bearing and already reserved; M-02 via Sourcelinks is the cleanest natural seam (zero recipe needed, config-level); M-12 archwood milling is an optional but coherent Create bridge.

## modulargolems   [anchors: create (1)]
- from: boss-drop metals (Cataclysm cursium, Ice&Fire dragonsteel) used in golem bodies | via: modulargolems:golem_assemble gated on boss-tier ingot | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful golem bodies demand cursium (Cataclysm boss) or dragonsteel (Ice&Fire dragon) — combat → endgame construct is the fighter's automaton, a clean boss-key unlock at the golem workbench
- from: ars_nouveau:source_gem or occultism material as a golem-core upgrade item | via: modulargolems:golem_add_slot (upgrade slot) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: slotting a source gem into a golem upgrade socket imbues it with an arcane module (e.g. spell-casting behavior) — the golemancer bridges Create and magic by powering constructs with arcane energy
- REWORK: 1-anchor; both ACCEPTs above would give it create+survival+magic — strong result. Dossier already flagged these candidates as MED/WEAK; power-read agrees the boss-metal gate (M-15) is genuinely mid-endgame appropriate, and the arcane upgrade (M-10) is coherent given Ars golems exist in the same modpack space.

## playeranimator   [anchors: support/library (1)]
- LEAVE — client animation API; no items, no loot, no material graph. Sanctioned support role.
- OK — connections sound

== CHUNK COMPLETE ==
