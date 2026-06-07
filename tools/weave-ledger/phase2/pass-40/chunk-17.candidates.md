# Phase 2 candidates — chunk-17 (context-fed)

## crash_assistant   [anchors: support (1)]
LEAVE — pure client diagnostic; 0 items/blocks, no loot, no material surface. Existing rows: none.

## fxntstorage   [anchors: Create, survival (2)]
OK — existing rows sufficient. The converged picture is clear: M-06 sequenced-assembly on the hardened backpack/box (endgame flagship), M-29 cross-route dependency requiring a colony-crafted plate for the hardened tier, and M-28 colony cheaper-route for bulk storage. The aeronautics/M-23/M-24 flight-upgrade attempts are correctly rejected. Two nuances the existing rows miss:

- NEW | from: fxntstorage:cardboard_storage_box (lowest tier — disposable shipping box) | via: create:compacting (compact paper + string on the millstone/compactor into a flat-packed bundle) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cardboard boxes are literally compressed paper — the Create compactor outputs them from pulp, and the courier drone (create_mobile_packages) ships them; the full everyday logistics loop closes without touching endgame.
- CHALLENGE | from: fxntstorage:backpack_flight_upgrade | via: aeronautics structural component recipe | to: aeronautics | motif: M-23 | verdict: REJECT | hook: a wearable Curios gadget is not an airframe/hull structural alloy; the existing 4-reject M-23 row is correct — this challenge reinforces the consensus rather than overturning it; leaving on record that no aeronautics edge exists for the flight upgrade.

## do_a_barrel_roll   [anchors: support (1)]
LEAVE — pure clientside elytra camera/physics mod; 0 items/blocks, no loot, no material surface. Existing rows: none.

## clumps   [anchors: support (1)]
LEAVE — server-perf XP-orb merger; 0 items/blocks. Existing rows: none.

## foodeffecttooltips   [anchors: support (1)]
LEAVE — client tooltip-UI only; 0 items/blocks. Existing rows: none.

## startuptime   [anchors: support (1)]
LEAVE — boot-time logger; 0 items/blocks. Existing rows: none.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
OK — existing rows are substantial and converged. The strong accepts (M-05 robo_bee via mechanical_crafting, M-20 deploy-application for the portable_stock_ticker, M-31 logistics-required bulk good, M-33 service-for-hire logistics operator) cover the real surface. One nuance the existing rows do not capture:

- NEW | from: create_mobile_packages:robo_bee (completed drone) | via: MineColonies research gate — a colony-level "Aerial Logistics" research node unlocks the ability for colony couriers to interface with Bee Ports rather than walking | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't just build a Bee Port and have colony couriers use it — the colony research tree has to acknowledge aerial delivery first; knowledge (the research) isn't tradeable, only its product (faster colony supply) is, and that capability gap is what makes the aeronautics-colony specialist distinct.

## betteranimationscollection   [anchors: support (1)]
LEAVE — client visual polish, 0 items/blocks. Existing rows: none.

## more_slabs_stairs_and_walls   [anchors: support — deco palette (1)]
Existing rows are very thorough (M-12 create:cutting heavily accepted; M-04 gravity-cut recycling split; M-23 airframe-structural correctly rejected). Two gaps not yet surfaced:

- NEW | from: more_slabs_stairs_and_walls bulk cut variants (stone/wood — 847 blocks) | via: MineColonies colony builder-hut request (schematic-driven demand — colony build-upgrades request specific slab/stair/wall variants that the Create saw line supplies automatically) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony player upgrading their Lumberjack hut to tier 3 needs basalt stairs and birch-log slabs at volume; no colony can grind 847 variants manually — the Create saw line becomes the colony's construction supply, and non-colony players are the sawmill operators who sell the output.
- NEW | from: more_slabs_stairs_and_walls:amethyst_block_slab / amethyst_block_stairs (amethyst variants — mid-tier unusual stone) | via: ars_nouveau:imbuement (as construction components in an arcane ritual structure — amethyst variants are used as the floor/pedestal blocks of an Ars setup, so their presence or absence gates progression) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ars Nouveau imbuement apparatus calls for amethyst-block pedestals; if those are the slab-cut variants only achievable via the Create saw or the stonecutter, the magic specialist depends on the builder-supply chain for their ritual setup — a cross-route dependency that's coherent (amethyst is already Ars-adjacent vanilla material) and doesn't require inventing new items.

## tacz   [anchors: support (1)]
Existing rows are very well converged: M-05 gun_smith_table gated behind Create-pressed inputs, M-06 sequenced-assembly for high-tier guns, M-26 ammo consumption sink, M-34 combat-route supply, M-30 regional scarcity on metals, M-15 boss-drop component for top-tier guns. Two angles not yet present:

- NEW | from: tacz:m67 (grenade — throwable explosive, mid-tier danger item) | via: createbigcannons:big_cartridge_filling or createbigcannons:caseless_munition_assembly (M29 cross-route: a grenade fuse component is also a valid fill charge for a CBC shell, requiring the same Create-processed gunpowder/copper, so the two combat-pillar mods share a supply chain node) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the person who casts shell charges for the cannon also supplies the grenade fuse blanks — a TACZ grenadier and a Create Big Cannons artillerist share the same Create-processed explosive intermediate, neither fully self-sufficient, and the combat-supply economy gains a concrete cross-route node.
- NEW | from: tacz:gun_smith_table_crafting (the station itself — logs + iron block) | via: recipe (KubeJS override to gate the Gun Smith Table construction behind a create:pressing step for the iron plate and a create:mechanical_crafting step for the barrel-vise fixture) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: this is M-05 applied to the *station* rather than gun recipes — existing M-05 rows gate inputs into the table but not the table's own construction; gating the Gun Smith Table itself behind Create means no firearms at all without the Create spine, making Create the firearm industry's foundation rather than just a supplier. Note: this is distinct from and additive to the input-gating rows.

## createfood   [anchors: survival, Create (2)]
Existing rows are well converged (M-16 seasonal ingredient, M-28 colony supply, M-26 consumption sink, M-35 maturation/aging, M-29 cross-route fish-ingredient pull). Two angles not yet present:

- NEW | from: createfood:apple_ice_cream_block / createfood:apple_ice_cream_bowl_block (cold finished desserts) | via: beachparty:mini_fridge_freezing (M-29 cross-route: ice-cream base is chilled in beachparty's Mini Fridge before plating) | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: ice cream requires a cold step; the beachparty Mini Fridge provides it — a createfood dish cannot be completed without the beachparty block, forcing the two mods' ecosystems to trade; the beach-biome player (ecologics coconut source) who runs a Mini Fridge is the cold-chain specialist the bakery player needs. (Existing rows note this but only flag it as "accepted 1" — worth reinforcing as a deliberate cross-route design, not a coincidence.)
- NEW | from: createfood dishes containing c:foods/raw_fish or c:foods/cooked_fish tags (fish-based pizzas, sandwiches) | via: farmersdelight:cutting (M-12 processing step: createfisheryindustry fish → cutting board → fish fillet → createfood recipe) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a fish pizza requires cleaned fillets, not whole fish — routing through the FD cutting board means the createfisheryindustry fisher and the createfood baker share a processing step, and a player can't skip the fishery to get their fish pizza. The chain reads: catch → fillet → cook → top pizza — distinct from the generic "fish in food" ambient link.

## trading_floor   [anchors: Create, economy (2)]
Existing rows are solid (M-08 Create-processed goods → emerald, M-29 cross-route via depot, M-28 colony staffing the depot, M-33 service-for-hire, M-31 aeronautics bulk delivery, M-37 depot automating knowledge/enchantment access). One gap:

- NEW | from: trading_floor:trading_depot (block recipe) | via: recipe (KubeJS override to require create:mechanical_crafting with a brass component — specifically a Create Linked Controller or a filtered output module as the block's "trade-execution mechanism") | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the depot is a Create automation block; its construction should require a mechanical-crafting step just like other Create add-on blocks (sequencer, stock link), putting the trading gateway itself behind the Create spine and ensuring no player reaches automated emerald trading without first building a real Create setup. Existing M-05 row (1 accept) proposed this but at low signal — reinforcing it as the right framing with a concrete component (brass filter module).

## bettercombat   [anchors: support (1)]
LEAVE — behavior framework, 0 items/blocks, no loot, no material surface. Existing rows: none.

## companions   [anchors: survival (1)]
Existing rows are very thorough (M-11 crystallized_blood → occultism:spirit_fire strongly accepted; M-10/M-02 soul_gem → ars_nouveau:imbuement; M-15 + M-34 relic_gold as boss-key/combat-supply; M-19 crystallized_blood → create:haunting). The M-04 deco-recycling rows are correctly rejected. One gap not yet surfaced:

- NEW | from: companions mob drops (companions:small_essence / companions:great_essence — regular kill drops from companions-added hostile mobs) | via: occultism:spirit_trade (M-18: Occultism spirits trade in soul-adjacent currencies; Small Essence is exactly the kind of soul fragment a spirit would trade for a material reagent — a dimensional miner spirit buys Essences in exchange for a rare ore sample, so killing companions mobs feeds Occultism mining) | to: magic | motif: M-18 | power: everyday | tone: ok | verdict: ACCEPT | hook: every Shade or hostile companion creature drops Small Essence — rather than having the essence sit in a chest, an Occultism player sets up a spirit_trade: essences buy rare-ore samples from dimensional spirits, so the combat specialist (killing companions mobs) and the magic specialist (Occultism miner) are in a supply chain, and essence becomes a currency within the magic pillar.
- NEW | from: companions:soul_furnace (the method itself — transmutes items to soul-state) | via: companions:soul_furnace as upstream supplier for create:haunting (M-19 parallel: haunting runs on soul-fire; soul_furnace outputs are "pre-haunted" analogues — a KubeJS recipe where some haunting recipe accepts a Soul Furnace output as an alternate to the raw item, deepening the Create↔magic seam without replacing haunting) | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: a raw iron ingot haunted by soul-fire becomes a soul-steel blank; but if you run it through the Soul Furnace first (companions), you get crystallized-blood-coated iron that haunts faster — the Soul Furnace pre-processes for haunting, giving companions a Create anchor through the create:haunting method and making the two soul-fire methods complementary rather than parallel.

## prickle   [anchors: support (1)]
LEAVE — config-format library, 0 items/blocks. Existing rows: none.

## architectury   [anchors: support (1)]
LEAVE — cross-platform API library, 0 items/blocks. Existing rows: none.

## minecolonies_compatibility   [anchors: survival, Create (2)]
Existing rows are reasonable (M-28 colony job outputs, M-34 Gunner combat supply, M-37 research-gated Gunner job, M-12 Butcher → farmersdelight:cutting). One angle the existing rows miss:

- NEW | from: minecolonies_compatibility:citizen_terminal / citizen_stock_keeper (storage-network bridge blocks) | via: recipe (KubeJS override: gate the citizen_terminal construction behind a create:mechanical_crafting step requiring a Create Linked Controller component — the terminal is a network-interface device; it should require Create fabrication like any other network block) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the citizen_terminal bridges MineColonies workers to the Create Stock Link network — it's a precision interface device and its construction should require a Create mechanical-crafting step, not vanilla crafting, so the colony-Create supply bridge itself costs Create investment and the two-way dependency (colony needs Create to build the bridge; Create benefits from colony labor) is made explicit in the recipe graph.

## ecologics   [anchors: survival (1)]
Existing rows are well-converged (M-12 coconut → create:milling strongly accepted; M-30 regional scarcity on coconuts; M-16 seasonal coconut gate; M-10 coconut_slice → Ars imbuement split; M-12 farmersdelight/extradelight cooking paths). One gap not yet proposed:

- NEW | from: ecologics:coconut_husk (bowl substitute, c:item/foods/nut adjacent — the byproduct of breaking open a coconut) | via: create:milling (yields coconut fiber / husk meal as a byproduct — an industrial processing residue usable as a Create filter medium or as a feedstock for farm_and_charm or extradelight recipes) | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling coconuts at the Create millstone gives coconut meat AND husk residue — the husk meal is a byproduct that doesn't just vanish; it becomes a filter-medium feedstock for other Create processing steps (or a composting input for MineColonies), closing the tropical-processing loop industrially and making the coconut a fully-utilized resource rather than one with a discarded byproduct.

## ichunutil   [anchors: support (1)]
LEAVE — shared-class library, 0 items/blocks. Existing rows: none.

## companion   [anchors: support (1)]
LEAVE — pet-safety QoL behavior mod, 0 items/blocks, no loot. Existing rows: none.

== CHUNK COMPLETE ==


