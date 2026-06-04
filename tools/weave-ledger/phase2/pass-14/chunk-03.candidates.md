# Phase 2 candidates — chunk-03

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / fugu_slice / cooked_stuffed_squid (finished seafood) | via: recipe (numismatics sell-price) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: coast specialists cook boss-mob dishes and sell to inland players who can't reach the ocean — natural trade niche
- from: oceansdelight raw guardian flesh / cut_tentacles | via: create:milling → processed paste intermediate | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grinding guardian flesh yields an "ocean extract" paste that feeds the Create processing web and becomes a craftable ingredient in higher-tier food or alchemical recipes
- from: oceansdelight:fugu_slice (poison-risk luxury) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: fugu's identity is culinary danger, not arcane material — routing it as a spirit reagent is arbitrary and loses its hook without earning a sensible one

## curios   [anchors: support/library (1)]
- LEAVE — genuine zero-content support library; provides equipment slots that other mods' items plug into but carries no items, blocks, loot tables, or processing methods of its own. No coherent independent weave exists; its connective value is enabling Ars Nouveau / Iron's Spellbooks accessories (already counted in those mods' pillar audits).

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic cooked_pike / cooked_perch / cooked_lionfish (tagged c:item/foods/cooked_fish) | via: farmersdelight:cooking / create:milling processing chain | to: Create + economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling lionfish scales yields a spicy extract; processing pike into a cured fillet routes aquatic content through the Create food web and produces sellable goods
- from: upgrade_aquatic cooked fish dishes (cooked_pike, cooked_perch, finished dishes) | via: recipe (numismatics sell-price) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: river/ocean fishers have a reliable sell-good, especially for lionfish which is an invasive catch — light economy anchor that rewards exploration
- from: upgrade_aquatic:*_coralstone deco family / driftwood blocks | via: create:crushing (lossy recycling) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone crushing is weak — it's already in the survival/deco space and one Create crushing step doesn't earn a meaningful second pillar; the food/economy links above are stronger and sufficient for a 2nd-pillar claim
- from: upgrade_aquatic jellyfish / thrasher mob drops (loot=yes) | via: loot-seed — add coin or a magic reagent to their loot table | to: economy or magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: thrasher sharks and jellyfish are mid-tier ocean threats; their drops feeding either a bounty reward or an alchemical reagent (poisonous barb → venom for Ars/Iron's brewing) grounds them in the magic or economy pillar

## ohthetreesyoullgrow   [anchors: support/library (1)]
- LEAVE — genuine zero-content worldgen library (0 blocks, 0 items, 0 loot tables); defines a sapling-growth algorithm and trunk/leaf decorator framework for dependent mods' trees. Nothing to weave — no items, no drops, no recipe surface.

## create_integrated_farming   [anchors: Create, survival (2)]
- REWORK: economy edge (M-09 roost/net products as bulk trade goods) is flagged WEAK by the dossier — eggs/feathers are not compelling luxury goods; they're commodity inputs. The economy link here should instead be the *downstream products* (FD/bakery meals made from eggs, cooked poultry) priced as sell-goods, not the raw roost output itself. Flag the raw-product sell-good framing as weak; the processed-food sell is owned by downstream food mods.
- from: create_integrated_farming fishing_net catch (fish, aquatic drops) | via: create:milling or farmersdelight:cutting → processed seafood intermediate → numismatics sell | to: economy | motif: M-12 + M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: automated net harvest feeds the Create milling/cutting chain into a sellable processed fish product — links the net's bulk output to both Create processing and the economy pillar
- from: create_integrated_farming:lava_fishing_net catch (nether drops — blaze rods, magma cream, ghast tears) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: lava-fishing auto-harvests nether mob drops; routing blaze rods / ghast tears through spirit-fire or imbuement ties automated nether farming into the magic pillar — a genuinely earned connection (nether drops are canonical magic inputs)
- from: create_integrated_farming roost products (feathers) | via: recipe (crafting-table or create:milling) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — feathers as an aeronautics material has no supported motif; REJECT-for-review

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Jetpacks/exoskeletons built through Create sequenced assembly satisfy the Create pillar; personal flight/drones satisfy aeronautics. Two-pillar floor met.
- from: create_sa:brass_jetpack_chestplate / andesite_jetpack (personal flight gear) | via: config tie or recipe — require Aeronautics-specific fuel cell or structural part as an ingredient | to: aeronautics (deepen) | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a jetpack burning TFMG diesel or using a Create-Aeronautics structural component to build the fuel chamber ties personal flight gear deeper into the aeronautics supply line — same fuels, same parts, same pillar
- from: create_sa blazing tools (blazing_pickaxe, blazing_axe; consume blaze rods) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the blazing tool line already consumes blaze rods — routing through an arcane infusion step (imbuement with source gem) to unlock the blaze enchant tier marries Create's industrial fire-gear to the magic pillar thematically; fire-tools needing arcane attunement is coherent
- from: create_sa:brass_drone_item modules | via: recipe (Create mechanical_crafting + Ars/Iron's focus component) | to: magic | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: drones are already deep Create (built via sequenced_assembly); adding a magic module would deepen an already-deep item past what's needed — no clear player hook and over-complicates the drone UX; defer

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item QoL utility (shuffle_filter, weighted_shuffle_filter) that modifies Deployer placement behavior; no material surface, no loot, no processing method. No coherent 2nd pillar without forcing it. The two items could theoretically be sold but a filter-for-sale has no player hook. Genuine behavior-utility mod: LEAVE.

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot instancing mechanic; its blocks (lootr_chest, lootr_barrel, etc.) are structural replacements for vanilla containers and carry no craftable recipe surface or material. The loot=yes flag on the jar reflects the containers themselves, not unique loot content — Lootr reads existing loot tables rather than contributing new drops. No coherent weave: its role is multiplayer fairness plumbing, not a material or method.

## bakery   [anchors: survival (1)]
- from: bakery:strawberry_cake / chocolate_gateau / apple_pie / tarts (high-effort luxury foods) | via: recipe (numismatics sell-price) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: baked luxury goods are the high end of the food sell-chain — a baker specialist sells cakes/tarts that no one else produces; colony/town supply contract for MineColonies is a natural downstream
- from: bakery:baguette / braided_bread / bread (wheat-based finished goods) | via: create:milling — wheat → flour as a Create-processed intermediate required by the baking chain | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat in Create's millstone produces the flour that feeds the bakery dough chain — a light single-step tie that puts the Create spine in the ingredient supply path without over-gating daily bread
- from: bakery jam/jam_jar (apple_jam, strawberry_jam, chocolate_jam) | via: extradelight:juicer or extradelight:vat (jam concentration) | to: Create (via extradelight methods) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running bakery fruit through the ExtraDelight juicer/vat to produce concentrates/jams creates an intermediate craft tier and ties the Let's Do bakery chain into the broader food processing web
- from: bakery:blank_cake (blank_cake_interaction, in-world decoration) | via: ars_nouveau:prestidigitation | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif — using Ars prestidigitation to "magically frost a cake" has no supported motif and is a whimsical stretch; the economy sell-good path is the real anchor

## towntalk   [anchors: support/flavor (1)]
- LEAVE — audio-only MineColonies addon: colonist voice barks, no items, no blocks, no loot tables, no recipe surface. Genuine zero-content behavior mod. The immersion value rides on MineColonies itself; towntalk has no independent weave surface.

== CHUNK COMPLETE ==









