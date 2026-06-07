# Phase 2 candidates — chunk-02 (context-fed)

## sound_physics_remastered
LEAVE — pure client audio simulation; 0 items/blocks, no recipe surface, no loot table. Nothing to weave.

## jeresources
LEAVE — JEI addon, display-only; 0 items/blocks. Surfaces existing loot/worldgen data but adds no connective material surface. Nothing to weave.

## trailandtales_delight   [anchors: survival (1); candidates target Create + economy (2nd anchor)]
OK — existing rows sufficient for the core Create (M-12 milling/pressing/mixing, M-35 cheese maturation) and economy (M-28 colony demand, M-16 seasonal) surface. Two gaps worth noting:

- NEW | from: trailandtales_delight:cheese_wheel (bulk specialty food, heavy per-unit) | via: aeronautics/train logistics (M-31 bulk-good transport) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony stocked on cheese wheels is a standing bulk order — train or airship cargo run from the dairy farm to the settlement, making the logistics arm earn its keep on food distribution, not just ore.

- CHALLENGE | from: trailandtales_delight crops / produce | via: sereneseasons fertility window | to: survival | motif: M-16 | verdict: REJECT | hook: existing M-16 REJECT is correct — the crops grow year-round (FD crops aren't season-gated by default); the Sniffer crops in particular have no season dependency; seeding a false seasonal restriction onto them would be arbitrary config with no design payoff.

## prickle
LEAVE — pure JSON config-format library; 0 items/blocks/loot. No content surface to weave.

## formations   [anchors: survival (1)]
The existing M-02 (loot-seed magic reagent) ACCEPT rows are the converged consensus. One structural challenge the existing rows miss:

- CHALLENGE | from: formations generated structures | via: loot-seed | to: magic | motif: M-02 | verdict: REJECT | hook: the dossier records loot=no — formations uses vanilla block palettes and structure_templates without owned loot tables; there are no chests or drops to seed. The multiple M-02 ACCEPT rows assume loot tables exist but they don't. Any loot-seed weave would require the pack to first author datapack-side loot tables for these structures, which is a pack-authoring prerequisite, not a formations weave. Flag for Gate review before committing any loot-seed Phase-3 action against this mod.

## fusion
LEAVE — rendering library (connected textures); 0 items/blocks, no recipe surface. Nothing to weave.

## immersivearmorhud
LEAVE — client HUD overlay; 0 items/blocks. Nothing to weave.

## createblockchain   [anchors: economy + Create (2)]
OK — M-08 (FE→coins, geode-scarce Mining Core), M-30 (regional geode scarcity) are well-covered with multiple converging ACCEPT rows. One gap in the accepted set:

- NEW | from: createblockchain:cryotheum_coolant_bucket (consumable thermal fluid the Currency Miner requires to run) | via: tfmg:vat_machine_recipe or create:mixing (chemical processing of a cold-fluid compound) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the minter needs coolant the refinery makes — the currency specialist depends on the TFMG chemist for sustained minting throughput, forcing a cross-route dependency between the two tech producers (nobody mints alone).

## tfmg   [anchors: Create (1); strong candidates for aeronautics + economy + survival]
OK — M-13 (fuels), M-23 (steel/aluminum airframe), M-24 (combustion engine drivetrain), M-08 (steel→coin), M-17 (voltage→magic charging), M-29 (plastic cross-route) all well-covered. Two genuine gaps in method-routing not yet captured:

- NEW | from: tfmg:cast_iron (c:ingots/cast_iron, Industrial Blast Furnace byproduct — produced en route to steel) | via: create:mechanical_crafting (feeds createbigcannons:ap_shell and cannon mounts which require c:ingots/cast_iron) | to: survival | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the blast furnace's cast-iron offcut is exactly what the cannon foundry needs — the industrial tier's own byproduct arms the combat tier without a separate supply chain (circularity closes a loop: industry → weapons → scarcity pressure).

- NEW | from: tfmg:lithium (c:ingots/lithium, ore-gen regionalized ore — gates the TFMG accumulator / voltage grid) | via: GTMOGS regional ore-gen config | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: lithium is the battery metal: whoever settles above a lithium vein controls the FE grid, making the TFMG electric tier itself a regional specialty that others must trade for rather than build themselves.






