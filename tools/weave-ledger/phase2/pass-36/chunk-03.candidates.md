# Phase 2 candidates — chunk-03

## configuration   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (config-screen/serialization API, no blocks/items/loot); nothing to route, no method surface.

## structurize   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; it is the MineColonies build engine (blueprint scan/place framework), no items of its own that generate independent demand, and its weave is entirely MineColonies' weave. The 14 tool items (scepters, shape tool) are builder-util, not economy/magic/survival material.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; 0 items, 0 blocks, no loot; nothing to route.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs / Undead Fortress / Spider Cave chests) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: crypts and undead fortresses naturally yield occult components — a bone-pile dungeon makes sense as a reagent source for Occultism/Ars Nouveau
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare minted coin seeded into dungeon chests makes exploration a legitimate way to bootstrap trade currency — but this is player-found coin (already minted), not an NPC faucet; the scarce supply keeps it meaningful. Red-team: coins in chests could feel arbitrary — survives if seeded sparingly (one or two per chest, not guaranteed), so they represent genuine loot rather than a vendor dispenser.
- from: betterdungeons loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-key component (a rare iron artifact or blueprint fragment) seeded into the hardest dungeon tier (Undead Fortress) gates a high-tier Create recipe, matching the pack's "boss drops unlock tech" design intent — a structure dungeon is a spatial boss-equivalent for this motif
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: combat specialists farm dungeon loot (boss keys, magic reagents, coin) and trade to non-combat players — the danger content directly feeds the economy's combat-supply role
- from: betterdungeons loot tables | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: seeding raw arcane infusion inputs directly in dungeon chests (before the player has the infusion apparatus) is a tone mismatch — a Catacombs chest handing out pre-refined Ars reagents feels like a shortcut, not earned progression; M-02 (mob-drop reagents found organically) is the cleaner fit here

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charge method) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks spell-focuses and magic armor can require an FE charge step to reach their active tier — the electrical layer of Create feeds the magic spine in a way a player immediately understands ("I need to power this before it works"). Red-team: magic players may resist needing a Create setup; survives because it's one short step and the mod's electric motor already provides FE natively from SU, so even a pure-Create player can fulfill this.
- from: createaddition:seed_oil / bioethanol (liquid_burning) | via: createaddition:liquid_burning | to: aeronautics | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: bioethanol from farmed seeds burns in the electric generator → FE → drives electric motors → SU for Aeronautics propellers — an agricultural fuel line feeding the logistics arm, tying survival farming to airship flight. Red-team: the FE→SU→propeller chain is two conversions and the energy loss (75% alternator efficiency) is real; survives because it's an intentional intermediate route, not the primary fuel (diesel stays primary per M-13 reserved), giving a renewable fallback path.
- from: createaddition:electrum_ingot | via: create:rolling → createaddition:rolling | to: Create (depth) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum wire (gold/silver alloy) is a unique conductor material that cross-routes the Create electric subgraph — a Create-tech specialist wants electrum wires for connectors but must either smelt electrum (requiring silver from Occultism/Galosphere) or trade with a magic specialist; forcing the cross-route dependency. Red-team: electrum is already in Create's own material tree; the cross-dependency only bites if silver is locked. Survives as a candidate — flag for reagent-ownership check on silver: occultism owns real silver (noted in CLAUDE.md gotchas), so galosphere:silver_ingot (actually palladium) must not be used here.
- from: createaddition:seed_oil | via: createaddition:liquid_burning | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: M-12 (processing-chain pull) applies to taking a crop through a processing method to a useful intermediate — seed oil fits the idea but the liquid_burning method is about consuming the oil as fuel, not making a downstream intermediate. The more honest weave is M-13 (fuel → propulsion). The survival tie is already implicit (crops grow under Serene Seasons); a separate M-12 edge here is redundant with the M-13 ACCEPT above.
- REWORK: the dossier's 2nd-anchor candidate "magic via charging / tesla_coil" is labeled M-05 (native-method gating) — that motif means "a mod's flagship item built in its own machine with Create parts as inputs." The correct motif for FE-charging magic gear is M-17 (electric charging bridge). The dossier's motif label is imprecise and should be corrected.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content QoL mod; overlays buttons on crafting grids, 0 items/blocks/loot, no method surface to weave.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees logs (output of whole-tree felling) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: DT's whole-tree felling dumps large log batches naturally suited for automated Create milling (logs → sawdust/pulp as a milling byproduct), feeding the Create wood-processing chain. This is a downstream-output weave: DT doesn't need a recipe change, Create's mill already processes logs — the connection is documenting that DT logs are the upstream supply the mill expects. Red-team: any log does this; the DT-specific angle is that whole-tree felling creates reliable bulk supply, which is what Create mechanical harvesters and mills prefer. Survives — it's a genuine method-pull, not contrived.
- from: dynamictrees:dendro_potion | via: create:mixing | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the dendro potion (boosts/stuns tree growth) is a specialty utility item with no natural place in Create mixing; routing it through create:mixing to produce an agricultural catalyst is speculative — there's no established pattern here and the theme doesn't survive red-teaming (a Create cauldron mixing a tree-growth potion reads as arbitrary, not "of course").
- from: dynamictrees species seeds (e.g. dynamictrees:oak_seed) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling seeds is already vanilla/Create behavior for generic crops; DT seeds are a conversion of vanilla saplings, not a unique material. Adding a separate mill recipe for DT seeds is redundant noise, not a meaningful weave.
- from: dynamictrees logs | via: create:milling | to: create | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is seasonal reagent — a material obtainable only in a given Serene Season feeds a method. DT logs are available year-round (trees don't seasonally disappear in DT); the seasonal gate doesn't apply. Wrong motif.
- Note on dossier: the dossier's LEAVE assessment ("DT trees are notoriously awkward for Create automated harvesters") is valid for mechanical harvesting, but the downstream bulk-log-to-mill weave (M-12) is still coherent as a non-automated hand-harvest → bulk-mill pattern. The LEAVE on automated harvesting stands; the M-12 downstream candidate is a light single-step edge.

## mcwroofs   [anchors: support/decoration palette (1)]
- from: mcwroofs stone/brick/andesite roof variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Macaw's stone/brick roof blocks crush back to gravel/crushed-stone + XP nugget — the same "deco recycles back to raw" loop Create uses for all stone deco. A player building with stone roofs should be able to reclaim material. Red-team: 605 blocks makes a wholesale crush pass very noisy; survives only for the stone/brick/andesite/terracotta subset (not wood variants, which would go to planks/sticks via cutting) — scope it to stone-derived variants only.
- from: mcwroofs wood-plank roof variants | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood-plank roofs cut back to planks/sticks in the Create saw — symmetric with M-04 for the stone line. Same "deco → raw" pattern, honest and light.
- from: mcwroofs:* | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: locking roof blocks behind Create mechanical crafting makes no sense architecturally — a sloped roof piece is an everyday building material, not a precision-manufactured component. Depth must scale with power; a decorative roof block is everyday, so a complex recipe gate would violate the "never gate basics behind complex recipes" rule.
- REWORK: dossier flags the M-04 crush candidate as WEAK because of the 605-block count. This is a valid scope concern, not a concept weakness — the concept is sound (M-04 is established for exactly this). The resolution is to scope to stone/brick/terracotta/concrete variants in Phase 3, not to drop the candidate. Flag as SCOPE-LIMITED, not rejected.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite / dyed tires | via: create:toolbox_dyeing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is deco-recycles-back-to-raw (lossy crush/cut), which doesn't apply here — dyed parts aren't recycled into raw levitite, they're just recolored. The motif doesn't fit; forcing it is arbitrary.
- from: dyed levitite / dyed tires | via: create:mixing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) applies a woven part to upgrade a base — a dye-color swap is a cosmetic reskin, not an upgrade. Motif doesn't fit; cosmetics are the sanctioned support role here, not a weave candidate.
- from: aeronautics_dyeable_components color variants | via: ars_nouveau:dye | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: routing a dye-coloring step through an Ars dye method is purely cosmetic and the magic-paint-shop framing is a tone clash (no arcane reason to dye a tire in a magic ritual). No motif for cosmetic dye routing exists and no new motif should be invented.
- LEAVE — cosmetic skin layer on Aeronautics; the single aeronautics anchor is the correct and complete anchor for this mod. Dye steps (offhand dye + craft) are already the mod's own native mechanism. No coherent 2nd anchor — forcing one would be a defect.

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (made via sequenced_assembly/mechanical_crafting from Create mats) + aeronautics (jetpacks, drones = personal flight arm) is a correct ≥2 anchor pair.
- from: create_sa:brass_drone_item | via: create:sequenced_assembly | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: drones as a service-for-hire mechanic — a Create-specialist operates owner-locked drones as a logistics/delivery service for other players (carrying goods, scouting routes), without selling the drones themselves; payment is emergent. Red-team: drones are owner-locked per the dossier, so they can't literally be traded; the weave is the labor/service, not the drone as a good. This is a coherent M-33 (service-for-hire) link, adding an economy anchor.
- from: create_sa:brass_jetpack_chestplate (netherite variant) | via: create:sequenced_assembly | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite-tier jetpack ("lava-swim" perk) is a natural candidate for a boss-key gate — requiring a Mowzie's or Cataclysm boss drop as a sequenced_assembly keystone, so endgame personal flight demands combat progression. Red-team: sequenced_assembly already uses Create mats; adding a boss-drop input follows established M-15 / M-06 patterns and is tonally coherent (you're embedding a fearsome artifact into powered armor). Survives. Adds survival anchor (danger/boss route).

## wits   [anchors: support/QoL (1)]
- LEAVE — server-side debug command (/wits); 0 items, 0 blocks, no loot; nothing to route.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single-item (target dummy) combat-test utility; its only surface is "hit it to see numbers." No material flows, no loot, no processing method. Forcing a magic/combat weave (e.g. "test spells on it") is a use-case, not a connection — the weave would be on the spell mod, not on the dummy.

## patchouli   [anchors: support/library (1)]
- LEAVE — guide-book library/framework; no survival material, no loot, no processing method. The shapeless_book_recipe method just crafts the guide book itself. Nothing to route through any external method.

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn framework library; 5 dev-tool items (citadel_book, debug, effect_item, fancy_item, icon_item), loot=yes but it's library dev loot not player-progression loot. No method surface for weaving.

## toomanypaintings   [anchors: support/decoration palette (1)]
- LEAVE — UI-driven painting variant selector, 0 items/blocks/loot registered in jar; pure client-side deco expansion. Nothing to route.

## ldlib2   [anchors: support/library (1)]
- LEAVE — GregTech-lineage UI/rendering/sync library; 2 dev-test blocks, 1 dev-test item, no loot, no recipe-types; zero player-facing content. Nothing to route.

## create_factory   [anchors: Create, survival (2)]
- OK — connections sound. Create (mixing/pressing/filling methods) + survival (food/sweets) is a correct ≥2 anchor pair; the food chain through Create is the intended throughput.
- REWORK: the dossier's 2nd-anchor candidate is "economy via numismatics sell [M-09]" — but M-09 is RETIRED ("sellable" is the ambient endpoint, not a weave). Drop this candidate. The existing 2 anchors are sufficient; if an economy link is wanted, it would need to be demand-gating, not a bare sell.
- from: create_factory jam/cream fluids (sweet_berries_jam, cream_bucket) | via: create:filling + farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the jam/nectar fluids that create_factory outputs are natural inputs for Farmer's Delight sandwich/food recipes — a processing-chain pull where Create's confectionery line feeds the cooking production chain, deepening the food-system web. Red-team: FD already has its own ingredient sources; adding create_factory fluids as inputs is additive, not redundant. Survives — it's a short one-step downstream use.
- from: create_factory sweets (waffles, candy apples) | via: farmersdelight:cooking | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 (consumption sink) is about an item being SPENT against pressure so demand never zeroes. Waffles/candy apples are consumed as food (so technically M-26 applies), but "sweets are eaten" is the ambient food loop, not a distinctive weave — this is the exact "ambient endpoint" the briefing cautions against for food items. The survival anchor is already established through the food system; a separate M-26 tag for each food item would be noise.
- from: create_factory:cream_bucket (cream fluid) | via: create_cheese:maturing | to: survival/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cream from create_factory feeds the cheese maturing line (create_cheese mod in methods palette) — milk→cream→aged-cheese is a natural aging chain that ties the confectionery producer to the maturation/economy arc, adding value through time (M-35). Red-team: create_cheese:maturing exists in the palette; cream is a plausible input. Survives if create_cheese is in the pack and uses cream as an input — flag for Phase-3 verification.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI plugin displaying breeding requirements; 0 items/blocks/loot, no mechanics. Nothing to route.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- OK — connections sound. Create-themed structures (worldgen) + survival (exploration/loot/danger) is a correct and sufficient ≥2 anchor pair.
- from: create_ltab structures (loot tables, Create-themed) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding player-minted coin into Create-themed building ruins makes explorers find early trade currency inside Create-flavored structures — thematically tight (an abandoned factory has its payroll chest). Red-team: coin in a Create ruin is plausible — it's discovered wealth, not NPC-dispensed. Survives.
- from: create_ltab structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: Create-themed industrial structures seeding magic reagents (Ars source gems, occultism drops) in their loot tables is a tone clash — a gear-works ruin yielding arcane essences feels random, not "of course." Better to keep magic reagents in magic-themed structures (witch huts, dungeons). Rejected on theme.
- from: create_ltab structures | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hardest Create-themed structure (a large industrial ruin or a multi-floor factory) contains a rare precision-mechanism or blueprint fragment that gates a high-tier Create recipe — the structure IS the boss, spatially. Red-team: Create ruins as gatekeepers for Create tech is exactly the "of course" framing — a lost engineer's notebook found in the rubble. Survives.



















