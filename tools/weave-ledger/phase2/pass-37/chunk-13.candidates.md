# Phase 2 candidates — chunk-13

## bcc   [anchors: support/modpack-ops (1)]

- LEAVE — pure server/client version-handshake utility; 0 items, 0 blocks, no loot, no recipe types. Zero content surface; nothing to route.

## bundle_recipe   [anchors: support/QoL (1)]

- LEAVE — datapack that re-adds a vanilla crafting recipe for bundles; 0 items, 0 blocks of its own, no loot, no recipe types. The bundle output is vanilla and carries no modded weave surface.

## notenoughcrashes   [anchors: support/stability (1)]

- LEAVE — crash-recovery/stability utility; 0 items, 0 blocks, no loot, no recipe types. Pure UX safety net with zero content surface.

## polymorph   [anchors: support/compat (1)]

- LEAVE — recipe-conflict resolver UI; 0 items, 0 blocks, no loot, no recipe types. Pure infra compat layer; it routes *through* other mods' recipes but has no content of its own to weave.

## createtreadmill   [anchors: Create (1)]

Power-read: Two blocks — a player-powered Treadmill (weak SU source, early/everyday tier) and a Maid Motor (novelty crossover item with touhou_little_maid, mid tier). Both are kinetic sources only; the join key the dossier identifies is the Soul Orb / Photo from TLM, which is friend-group flavor content, not a loop system. No loot.

- from: createtreadmill:treadmill (player-powered SU) | via: M-26 consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: The treadmill outputs SU into Create networks — it consumes the *player's* effort, not a trackable item, so there's no M-26 consumption sink that the loop can measure or that creates demand. Player-effort-as-input isn't an item-weave. No motif fits cleanly; forced.

- from: createtreadmill:maid_motor + touhou_little_maid:soul_orb | via: create:item_application / deploying | to: Create/economy | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: The Soul Orb / Photo are TLM companion items, not loop-relevant materials. TLM is curated flavor, not a loop anchor. Weaving around this crossover would tie a Create-depth item to a mod with no loop standing — a tone/system clash that doesn't advance scarcity→pressure→production→economy.

- LEAVE — both candidates reject. The treadmill's SU is an early convenience source; its only cross-mod join is TLM flavor. No clean 2nd anchor without forcing. Confirm LEAVE.

## createfisheryindustry   [anchors: Create, survival (2)]

Power-read: Rich content mod — bait traps (automated fishing), mechanical peeler (kinetic, Create), harpoons/pneumatic gun, diving leggings, seafood dishes. Mid-tier throughout; peeling/trap are everyday Create operations; harpoon gun and diving leggings are mid-endgame. Already 2 anchors (Create + survival). Existing connection review needed.

REWORK:
- The dossier lists "economy via numismatics — seafood dishes as sellable trade goods; M-09" — M-09 is RETIRED. Bare-sellable links are the ambient endpoint, not a weave. This should be dropped or reframed as M-26 (consumption sink: cooked fish consumed against hunger/diet pressure) or M-29/M-30 (cross-route dependency).

New candidates:

- from: createfisheryindustry:fish_skin | via: create:mixing or farmersdelight:cutting | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Fish skin is a leather analogue — route it through occultism:ritual or ars_nouveau:imbuement as a cheap organic reagent for early-tier magic crafting (parchment-substitute, spirit binding medium); a fisher supports the magic specialist.

- from: createfisheryindustry:seafood_chowder / cooked_cod_steak / cooked_salmon_steak | via: farmersdelight:cooking (already inbound) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Processed seafood fills the Protein diet group (Diet-AppleSeed), creating continuous demand for the fishing operation — consumption renews the loop's return edge.

- from: createfisheryindustry:bait_trap catch outputs (cod, salmon, mussels, lobster) | via: createfisheryindustry:peeling + farmersdelight:cooking | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A fisher specialization produces processed seafood ingredients (cooked lobster, chowder) that a cook/colony player's Kitchen hut requests — neither the fisher nor the colony is self-sufficient for the full food chain, so they must trade. Cross-route dependency: fisher output → MineColonies colony food supply.

- from: createfisheryindustry:harpoon / pneumatic harpoon gun | via: loot-seed or create:sequenced_assembly upgrade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The harpoon is a ranged combat tool for underwater/boat skirmishes — the combat specialist farms sea-creature drops and sells the processed seafood; harpoon gun as a traded war materiel. Ties the fishing route to the danger/combat pressure face.

- from: createfisheryindustry:copper_diving_leggings | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: Diving leggings extend Create's diving gear — relevant to underwater exploration, not airship drivetrain. Aeronautics is about air vehicles; the thematic link to underwater gear is a clash. Not a genuine M-24 (propulsion/control component).

- from: createfisheryindustry:fish_skin (as leather substitute) | via: vanilla crafting or create:mechanical_crafting | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: Fish skin as a structural airframe material stretches credulity badly — no player would nod at leather-equivalent fish hide as an airship hull component. Tone clash overrides the material adjacency.

## blueprint   [anchors: support/library (1)]

- LEAVE — Team Abnormals shared code library. 0 blocks, 0 items (the one template_chest is too trivial to anchor a pillar), 0 loot, 0 recipe types. The 13 c:tags are framework scaffolding for dependent mods; no content surface of its own to weave.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: Structure-only worldgen datapack adding 150+ vanilla-block structures (islands, pyramids, ships, ruins, towers). loot=yes — chest loot tables in structures. No items or blocks of its own; the weave surface is entirely via loot-seed into its existing chest tables.

- from: trek structures (loot tables) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seed player-minted coin (low-denomination Numismatics spur/cog) into Trek's structure chests as exploration rewards — found coin is not minted by an NPC (not M-14/M-21) but is pre-existing treasure that enters the player economy from exploration. Structures serve as the physical coin "mine" — a scarce regional supply incentivising exploration and seeding the early economy.

- from: trek structures (loot tables) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seed low-tier magic reagents (ars_nouveau source_gem fragments, occultism raw materials) into Trek's varied structure chests (pyramids, ruins, ancient buildings) — exploration rewards that feed magic specialists early. Gives magic a discovery pressure rather than only a crafted path; a player who can't craft reagents yet finds the first ones in ruins.

- from: trek structures (loot tables) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed a mid-tier Create component (e.g. a partially-assembled mechanical part or a schematic scroll) into Trek's rarer structures (fortresses, ships) as a boss-key-adjacent progression find. Ties exploration depth to Create advancement — not every blueprint is buyable; some must be found.

- from: trek structures (rare ships/fortresses) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The most dangerous Trek structures (ocean fortresses, pirate ships) seed combat-supply drops (ammo components, armour pieces) that combat specialists farm and trade to non-combat players — Trek's danger structures become a supply node in the combat-economy arm.

- from: trek structures (loot tables) | via: loot-seed | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: A seasonal-reagent weave (M-16) requires a season-gated input feeding a machine/ritual, not a static loot table. Loot tables in structures aren't season-gated by default; forcing seasonal conditions onto static chest loot would need custom KubeJS and is a mechanism-build, not a simple loot-seed. No clean M-16 delivery here; drop.

## playeranimator   [anchors: support/library (1)]

- LEAVE — pure client animation API library; 0 items, 0 blocks, no loot, no recipe types. Zero content surface. Ships as a dependency for animation-driven mods; nothing to weave.

## woodworks   [anchors: survival/decoration (1)]

Power-read: 83 blocks — wood-type variants of chests, bookshelves, ladders, boards, beehives, leaf piles, plus the Sawmill block (a stonecutter-for-wood). Everyday decoration tier throughout. The Sawmill (woodworks:sawmill recipe type) is the one distinct method. The dossier already proposes M-04 crushing recycle and M-12 sawmill overlap with Create cutting.

REWORK:
- The dossier's M-12 candidate ("overlap Sawmill outputs with Create's saw so wood deco reads as one cutting web — WEAK") is well-flagged as weak. It's a cosmetic recipe-weave that earns a 2nd pillar label but contributes very little to the loop (it doesn't advance scarcity→pressure→production→economy). Keep as a candidate but the method-pull is thin.

New candidates:

- from: woodworks:*_chest / *_bookshelf blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wood-decorated chests and bookshelves crush back to planks/sawdust + an XP nugget (lossy recycle) in a Create crusher — closes the materials loop so a builder's deco surplus isn't a dead end. Keeps wood waste productive. Straightforward M-04 deco-recycle at one light step.

- from: woodworks:*_beehive | via: create:mechanical_crafting or create:pressing | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wood-typed beehives produce honey/honeycomb continuously — a woodworks beehive is the "improved apiary" that keeps Protein/Sugars diet groups stocked. Consumption demand (diet pressure) drives the beehive-crafting loop; a wood specialist produces specialist hives the colony food system consumes.

- from: woodworks:sawmill (recipe method) | via: woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The Sawmill processes raw logs/planks into wood deco in one step, a parallel to Create's saw/cutting. Route the same materials through both so the sawmill and Create's saw read as one cohesive wood-processing web — a builder can use either path. Light single-step integration that earns the Create 2nd anchor without forcing complexity onto basic blocks.

- from: woodworks:*_boards / leaf piles | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Boards and leaf piles are thin decoration with minimal mass; adding a separate crush recipe for each of these beside the chests/bookshelves above is unnecessary duplication at the everyday tier. The M-04 accept above (chests + bookshelves) already earns the anchor. Don't over-extend crush-recycle to every deco block in a 83-block set.

## lootjs   [anchors: support/packdev-tooling (1)]

- LEAVE — KubeJS scripting API for loot-table manipulation; 0 items, 0 blocks, no loot, no recipe types. Pure developer tooling that enables M-02/loot-seed weaves elsewhere; not itself a weave node. Nothing to route.

## searchables   [anchors: support/client-UI library (1)]

- LEAVE — client-side search/filter UI library; 0 items, 0 blocks, no loot, no recipe types. Pure API dependency with zero content surface.

## tacz   [anchors: support/curated-flavor (1)]

Power-read: 6 blocks, 21 items. Gun Smith Table is the primary workstation (its own tacz:gun_smith_table_crafting recipe type). Guns, ammo, attachments — all data-driven. Ammo is a consumable. loot=yes. The join key is the metal/gunpowder inputs to the GST. Currently anchored only as curated PvPvE flavor — a clear 1-anchor gap.

- from: tacz:gun_smith_table_crafting inputs (metals, components) | via: tacz:gun_smith_table_crafting + create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gate the Gun Smith Table recipe itself behind Create-fabricated parts (pressed iron sheets, zinc casings, andesite alloy fittings) — the GST becomes a Create product, not a vanilla craft. Firearms ride the Create spine: you need a metalworks operation running before you can manufacture guns. One firm step up from the everyday tier; GST is mid-tier access.

- from: tacz ammo_box / ammo components | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: High-calibre ammo (specialty rounds, explosive cartridges) assembled through a Create sequenced-assembly line — multiple pressing/filling/deploying steps to produce finished ammo at scale. Turns ammunition manufacturing into a Create production specialty, scaling depth with firepower. A Create machinist who runs an ammo line trades to the combat specialist.

- from: tacz ammo (consumable) | via: consumption mechanic | to: survival/economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ammo is spent every combat engagement — a continuous consumption sink that can never be stockpiled indefinitely. This makes the ammo-manufacturer a persistent trade partner for the combat specialist: demand never zeroes out. The loop's closing arrow applied to combat supply.

- from: tacz loot tables (gun drops from structures/bosses) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed rare tacz guns/attachments into boss/structure loot — combat specialists farm dangerous structures for weapon blueprints or partial guns, then sell or use them. Ties the danger-pressure face to the combat-economy supply arm.

- from: tacz:gun_smith_table + metals | via: tacz:gun_smith_table_crafting | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Gun production depends on specific metals (lead/nickel/steel from region-locked ores via GTMOGS). A region without those metals can't manufacture firearms locally — must trade for the raw materials or the finished guns. Regional scarcity → regional gun-production specialization → player trade in war materiel.

- from: tacz:modern_kinetic_gun / attachment system | via: loot-seed or create:deploying | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: TACZ doesn't natively integrate with Aeronautics turrets (aeronauticscompat covers other turret mods specifically). Proposing a "mount TACZ guns on ships" weave would require authoring custom compat that doesn't exist in the methods palette. Tone is adjacent but delivery mechanism is absent — forced without a real method.

## copperagebackport   [anchors: survival (1)]

Power-read: 70 blocks, 81 items. Copper tools/armor, Copper Golem (item logistics mob), copper chests (with oxidation states), copper deco set. Everyday to mid tier throughout — copper is early-game. The oxidation mechanic and the Copper Golem's chest-to-chest hauling are the distinguishing features. loot=yes. The join key is copper — Create's own staple metal.

- from: copperagebackport copper deco blocks (copper_bars, copper_chain, oxidized copper chest variants, copper_lantern) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: The full copper deco set (bars, chains, chests, lanterns — all oxidation stages) crushes back to copper nuggets/raw copper + XP nugget in a Create crusher. Lossy recycle folds the entire copper palette into the Create copper economy; a builder's surplus oxidized copper isn't wasted. One light step, correct depth for an everyday deco item.

- from: copperagebackport:copper_golem_statue | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: The Copper Golem is a logistics automaton (chest-to-chest hauling) — build it through a Create sequenced-assembly line (copper sheets + brass cogwheel + mechanical component) rather than a vanilla craft. The golem becomes a Create-produced logistics unit: you need Create infrastructure to make the thing that manages your storage. Mid-tier appropriate for an automation helper.

- from: copperagebackport:copper_golem_statue (item logistics role) | via: config tie or behaviour hook | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: The Copper Golem hauls items between chests — it's a logistics mob, not a propulsion or control component. Mapping it to aeronautics drivetrain (M-24) is a stretch; its logistics role overlaps Create conveyor logic thematically but not as a ship part. Tone is adjacent, connection is forced.

- from: copperagebackport copper tools / copper armor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Tools and armor are normally repaired/recycled through vanilla mechanics (anvil, grindstone). Routing them through a Create crusher duplicates a vanilla path without advancing the loop. The deco-block crush above (accepted) already earns the Create anchor; adding tools and armor is redundant at the everyday tier.

- from: copperagebackport copper blocks (oxidation palette) | via: create:deploying | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: Apply wax (honeycomb) to oxidized copper blocks via a Create deployer to produce the waxed variants — a one-step M-20 deploy-application that keeps the full oxidation management chain within Create's toolkit. Players building with copper use a Create-automated waxing line; no manual right-click needed at scale.

## zeta   [anchors: support/library (1)]

- LEAVE — Vazkii modular framework; 0 items, 0 blocks (1 biome-modifier is framework scaffolding), no loot, no recipe types. Quark's backbone dependency; nothing to weave.

## mcwstairs   [anchors: support/decoration (1)]

Power-read: 224 blocks — stair/railing/balcony/platform variants in wood and stone/brick materials. Entirely passive decoration; no behavior, no loot, no recipe types. The only plausible weave surface is crush-recycle (M-04) for the stone/brick variants — correctly identified as WEAK in the dossier.

- from: mcwstairs stone/brick stair variants (andesite_*, brick_*, blackstone_*, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone and brick stair/railing variants from Macaw's crush back to gravel/raw stone + XP nugget in a Create crusher. Lossy recycle keeps architect material from dead-ending; every decorative stone block in the pack reads as Create-recyclable at one light step. Small but coherent; the join is real (stone is stone).

- from: mcwstairs wood stair variants (*_bulk_stairs, *_railing etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Wood stair/railing blocks crushing back to planks is marginal value — wood is cheaply renewable (trees) and Create's saw already cuts planks from logs. Adding a crush-recycle on top of abundant wood is loop-noise, not a meaningful weave. Limit M-04 to the stone variants where stone recovery has real value.

## create_factory   [anchors: Create, survival (2)]

Power-read: 1 block (jam block), 25 items — waffles, rolls, candy apples (honey/chocolate/caramel/ruby variants), cream_bucket, sweet_berries_jam, cake_paste. All everyday-to-mid food tier. Assembled through Create create:mixing/pressing/filling. Already 2 anchors (Create + survival). Existing connection review needed.

REWORK:
- The dossier lists "economy via numismatics sell — assembled sweets/waffles are sellable luxury goods — M-09, MED" — M-09 is RETIRED. Bare-sellable link. Should be reframed as M-26 (consumption/diet pressure — sweets fill the Sugars diet group) or M-29 (cross-route: sweets require Create processing + external ingredients like honey from a beekeeper colony player). The raw dossier link should be marked REWORK.

New candidates:

- from: create_factory:honey_waffle / caramel_roll / ruby_chocolate_apple | via: create:mixing/pressing/filling (already inbound) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Dessert foods fill the Sugars diet group (Diet-AppleSeed five-group system) — continuous consumption pressure from diet mechanics drives the confectionery production line. Demand never zeroes while players need nutrition balance. The loop's consumption-return edge applied to sweets.

- from: create_factory:cream_bucket / sweet_berries_jam fluids | via: create:filling or create:mixing | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cream and jam are intermediate fluids produced as byproducts of the confectionery chain — route them as feedstocks into other Create food chains (extradelight:vat, farmersdelight:cooking) rather than dead-ending. Industrial circularity: the dessert factory's fluid waste feeds the broader food-processing web.

- from: create_factory sweets (honey_waffle, caramel_apple, etc.) | via: create:mixing + MineColonies kitchen hut | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony kitchen workers request finished sweets as part of the colony food variety — a Create sweets-producer supplies the MineColonies colony route. The colony can't make Create-processed desserts internally; it depends on the factory player. Cross-route dependency that earns the economy anchor legitimately (M-28 colony route).

## cloth_config   [anchors: support/library (1)]

- LEAVE — standardized config-screen API library; 0 items, 0 blocks, no loot, no recipe types. Pure client UI infrastructure with zero content surface.

## createmetalwork   [anchors: Create (1)]

Power-read: 11 blocks (molten metal fluid blocks), 13 items (crushed ores + molten buckets). 55 c:tags covering crushed_raw_materials for nearly every modded metal in the pack. Rides create:crushing/mixing/compacting (already inbound). The anchor is deeply Create-spine; the 2nd-anchor gap is real and important. The dossier proposes M-08 (economy via coin from processed scarcity) and M-03 (magic ores through the crush path) — both strong.

- from: createmetalwork molten_<metal> fluids (molten_iron, molten_steel, molten_brass, molten_zinc, molten_copper) | via: numismatics mint → player presses | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: The Create metalwork pipeline (crush→melt→pour) refines scarce regional ores into pure molten metal that a specialist mints into Numismatics coin — the player-controlled settlement medium. Processed metal is the correct feedstock for minted coin because it embeds the scarcity and labor cost of the Create chain. A metalwork specialist controls the money supply by controlling refined output. Clean M-08.

- from: createmetalwork c:crushed_raw_materials/* (palladium, quicksilver, osmium, platinum…) | via: create:crushing + create_new_age:energising | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Route magic-associated metals (galosphere:palladium → crushed via createmetalwork, osmium → melt) through the Create metalwork chain before they enter magic crafting — the metalwork pipeline is the ore-doubling on-ramp for magic-mod metals too. A magic specialist needs the Create metalwork output as a reagent input; neither is self-sufficient. Advances the loop: scarcity → Create processing → magic production.

- from: createmetalwork:molten_netherite / molten_steel | via: create:sequenced_assembly | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Aeronautics high-tier hull plates and structural components require poured molten steel or netherite alloy — the metalwork pipeline is the mandatory feedstock for endgame airframe construction. No molten steel = no heavy ship hull. Scales depth correctly: endgame ship tier → endgame material, and the metalwork chain already has real depth (crush → melt → pour → plate).

- from: createmetalwork:crushed_andesite / molten_andesite_alloy | via: create:mixing → andesite alloy | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushed andesite and molten andesite alloy are byproducts of Create's ore processing that the metalwork chain captures and recycles back into andesite alloy — Create's own structural material. Industrial circularity closes the andesite loop; no ore-processing waste dead-ends. One light step from crushing byproduct back to a productive intermediate.

- from: createmetalwork:molten_brass (processed copper+zinc) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Brass is already a first-class Create material for mechanical components (cogwheels, etc.); routing molten brass specifically as an aeronautics drivetrain input would duplicate Create's own native brass recipes without adding new depth. The accepted M-23 above (molten steel/netherite for hulls) already covers the aeronautics weave at the appropriate tier. Redundant.

== CHUNK COMPLETE ==


