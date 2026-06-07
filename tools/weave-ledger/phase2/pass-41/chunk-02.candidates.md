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

## bakery   [anchors: survival (1); candidates target Create + economy]
OK — M-12 (milling/wheat→flour), M-28 (colony cook-hut demand), M-26 (consumption sink), M-35 (jam→ferment) all covered. One angle missing from the accepted set:

- NEW | from: bakery baked goods (finished cakes, tarts, pies — multi-step, player-specialized output requiring baker_station + Farm & Charm chain) | via: service-for-hire (a bakery-specialist player bakes to order, accepting ingredients + coin from diet-pressured clients) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: nobody wants to build a whole bakery chain just for the Sugars group buff; the baker player is the obvious specialist, and other players bring their apples and milk — the labor exchange is as natural as an enchanter-for-hire, and the diet pressure (appleseed M-26) makes the service continuously in demand.

## better_lib
LEAVE — pure config/messaging library; 0 items/blocks. Nothing to weave.

## appleseed   [anchors: survival (1); 2nd anchor is demand-side only]
OK — existing rows correctly identify this as a demand driver (M-26, M-16 seasonal diet, M-28 colony food demand). The dossier explicitly says "its 'output' is DEMAND." All recipe-forcing rows are correctly rejected. One gap:

- NEW | from: appleseed balanced-diet buff (requires diversity across all 5 nutrient groups) | via: config/mechanic — explicitly configure each group's buff to include a small movement/speed benefit (Grains), brief regeneration (Protein), or fire/cold resistance (relevant to Cold Sweat) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: wiring the diet buffs to Cold Sweat pressure (e.g. balanced diet reduces cold threshold slightly, diet imbalance worsens it) closes the survival pressure loop tightly: the diet mechanic and the climate mechanic reinforce each other rather than sitting in parallel, and both pull on the food-production chain.

Note: this is a config-tie proposal (appleseed + Cold Sweat config interaction), not a recipe. The existing M-26 rows focus on consumption demand but not on which specific buffs make the diet system mechanically interlocking with other survival mechanics.

## tfmg   [anchors: Create (1); strong candidates for aeronautics + economy + survival]
OK — M-13 (fuels), M-23 (steel/aluminum airframe), M-24 (combustion engine drivetrain), M-08 (steel→coin), M-17 (voltage→magic charging), M-29 (plastic cross-route) all well-covered. Two genuine gaps in method-routing not yet captured:

- NEW | from: tfmg:cast_iron (c:ingots/cast_iron, Industrial Blast Furnace byproduct — produced en route to steel) | via: create:mechanical_crafting (feeds createbigcannons:ap_shell and cannon mounts which require c:ingots/cast_iron) | to: survival | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the blast furnace's cast-iron offcut is exactly what the cannon foundry needs — the industrial tier's byproduct arms the combat tier without a separate supply chain (industry → weapons → danger-scarcity pressure closes the loop).

- NEW | from: tfmg:lithium (c:ingots/lithium, ore-gen regionalized; gates the TFMG accumulator / voltage grid — the FE storage tier) | via: GTMOGS regional ore-gen config | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: lithium is the battery metal — whoever settles above a lithium vein controls FE storage, making the TFMG electric tier a regional specialty that others must trade for rather than simply build.

## createmechanicalcompanion   [anchors: Create (1); candidates for survival + aeronautics]
OK — M-15 (boss-gate wolf link), M-24 (booster rocket aeronautics), M-20 (optical sensor deploy-upgrade), M-06 (netherite plates sequenced) all covered. One gap in the loot-table surface that the existing rows missed:

- NEW | from: createmechanicalcompanion Illager Workshop structure (loot=yes — 6 chest types including illager_workshop_create_items containing mechanical_wolf_motherboard + optical_sensor) | via: loot-seed — seed a rare magic reagent (Ars source_gem, Occultism soul gem, or an Iron's scroll) into the Illager Workshop bedroom/roof chest loot | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Illager Engineer has clearly been experimenting — finding a looted magic reagent in their workshop is a discovery that ties exploration-danger to the magic spine; the workshop structure already generates, so no authoring of structure data is needed, only a loot-table datapack entry.

- CHALLENGE | from: createmechanicalcompanion:illager_engineer_spawn_egg | via: loot-seed | to: survival | motif: M-34 | verdict: REJECT | hook: the spawn egg is a creative item; the right frame for M-34 is the Illager Workshop structure loot (loot=yes, confirmed above) — not the spawn egg itself, which doesn't drop from anything. The correct Phase-3 action is seeding the workshop chest loot, not tagging the spawn egg.

## railways   [anchors: Create + aeronautics (2)]
OK — M-04 (locometal crush), M-31 (logistics bulk), M-33 (conductor service) covered. One gap:

- NEW | from: railways locometal blocks (massive aesthetic block palette — 617 blocks of brass/copper/iron-wrapped locometal in 17 colors) | via: create:crushing (M-04 — recycles deco back to raw material + XP nugget; lossy) applied to the *color-variant* surplus | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: when a player redecorates or tears down a rail build, the wrong-color locometal blocks crush back to copper/brass/iron plate + XP nugget — the 617-block palette makes deco-to-resource recycling genuinely useful rather than trivial (already partially in existing rows but the sheer palette scale is the nuance: the more colors, the more mis-buys, the more crushing happens).

Note: this deepens an existing M-04 ACCEPT row rather than adding a new motif — the context-fed nuance is that with 617 color variants, the recycling loop is a *recurring* mid-game activity, not a one-time construction choice.

- NEW | from: railways high-tier track components (high-speed track gauges / brass_wrapped_locometal_boiler — multi-step fabricated) | via: tfmg:hot_blast or tfmg:casting — TFMG steel/cast_iron required for high-speed rail boiler components | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-speed railway line needs boilers that a basic forge can't make — the rail engineer depends on the industrial tier for heat-resistant components, tying the transport spine to the refinery and forcing the two Create-specialists to cooperate.

## ars_n_spells   [anchors: magic (1)]
OK — M-29 (cross-cast enchanting apparatus dual-reagent) and M-37 (MineColonies research gate) are the correct accepted rows. One additional angle:

- NEW | from: ars_n_spells cross-casting ritual (requires two-tablet inscription, one from each magic system) | via: service mechanic — the ritual inherently requires input from both magic specialists; neither can perform it alone | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: cross-casting is a collaboration, not a solo craft — the Ars specialist and the Iron's specialist must both contribute their tablets and be present, making every cross-cast a player-economy service event that neither can shortcut (and neither can sell a cross-cast capability, only the cross-cast product).

## create_confectionery   [anchors: Create + survival (2)]
OK — M-12 (chocolate food chain), M-10 (ruby chocolate imbuement), M-26 (effect candy consumption), M-16 (seasonal candy), M-04 (deco crush) well-covered. Two gaps:

- NEW | from: create_confectionery:hot_chocolate (grants Regeneration; a warm comfort drink) | via: config-tie (Cold Sweat warming-items config tag — add hot_chocolate to the warming-consumables list) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the chocolate factory's most premium output is also your cold-weather field ration — Cold Sweat's warming mechanics make hot chocolate a practical consumable in winter biomes, not just a luxury, so demand for the whole confectionery chain spikes when the temperature drops (the existing M-12 REJECT for this angle used the wrong motif; M-26 is correct: it's a consumption sink driven by Cold Sweat survival pressure, not a processing-chain pull).

- NEW | from: create_confectionery chocolate bars / effect candies (multi-step Create-processed luxury foods) | via: minecolonies requests/deliveries (Cook hut or Tavern hut requests confectionery restockables) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a growing colony wants morale — the Cook hut stocking chocolate bars and Speed candies for colony workers is a standing bulk order that ties the confectionery specialist to the settlement-builder, pulling on the full cocoa→Create chain to keep a colony fed and productive.

## betterpingdisplay
LEAVE — client UI, numerical ping display; 0 items/blocks. Nothing to weave.

## mushroomquest   [anchors: survival (1); candidates for Create + magic + economy]
OK — M-12 (cooking), M-11 (deadly caps spirit_fire), M-16 (seasonal spawn), M-34 (rare foraged trade), M-10 (mortar grind→cauldron brew) all covered. Two gaps:

- NEW | from: mushroomquest biome-specific mythical/rare caps (32 biome-modifiers mean specific caps only spawn in specific biomes — Mushroom Island agarikon, Deep Dark rare varieties, etc.) | via: GTMOGS regional placement / biome-modifier config — treat specific biome-locked caps as regional specialties | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the forager who lives on the Mushroom Island has the only source of agarikon for hundreds of blocks — biome-gated mushrooms are already regional specialties by worldgen; naming them as M-30 regional goods makes the forager a trade specialist rather than just a flavor-picker, and the rarity is already implemented, not invented.

- NEW | from: mushroomquest:resin_orb (special drop from foraging stumps — an amber-like resin material, not a food) | via: create:mixing (process resin into a wood-varnish or amber-fluid intermediate) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the resin that seeps from foraging stumps is exactly what a Create alchemist routes through a mixer to get a varnish compound — M-12 covers "useful intermediates," not just food; a resin→lacquer/coating fluid is thematically sensible and gives the resin_orb a processing destination it currently lacks (the existing M-12 REJECT on resin_orb used "not clearly a food input" as the reason — the resolution is that M-12 explicitly covers non-food useful intermediates).

## bettermodsbutton
LEAVE — client UI (pause-screen Mods button); 0 items/blocks. Nothing to weave.

## aeronautics   [anchors: aeronautics + Create (2)]
OK — M-10 (levitite magic), M-13 (fuel), M-22 (lunar levitite), M-31 (docking logistics), M-33 (docking trading-post), M-08 (levitite→coin), M-24 (propeller drivetrain), M-10 (goggles enchanting) all covered. One structural gap:

- NEW | from: aeronautics:end_stone_powder (Create-crushed End Stone, required for levitite_blend) | via: recipe — Ender Dragon defeat gates End dimension access, which gates end_stone_powder, which gates levitite — the lift material's scarcity traces to a boss kill | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: you can't build your first airship until someone kills the Ender Dragon — the End boss unlocks the lift material the whole aeronautics tier hangs on, making the dragon fight a pack-wide milestone that gates the logistics arm (clean, thematically sensible, already implicit in levitite's recipe but never stated as a weave).

== CHUNK COMPLETE ==



