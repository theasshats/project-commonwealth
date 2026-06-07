# Phase 2 candidates — chunk-05 (context-fed)

## create_ironworks
NEW | from: create_ironworks:steel_ingot / c:ingots/steel | via: createbigcannons steel/nethersteel cannon-barrel recipe (M-29 cross-route, not the M-05 foundry-melt already logged) | to: create | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: CBC publishes its own c:ingots/steel, so the metallurgist's ironworks steel can be made the required feedstock for the artillery specialist's high-tier barrels — the smith and the gunner can't each do the other's half.
NEW | from: crushed tin byproduct (create:crushing of tin_ore) | via: create:splashing / create:milling washing the crushed-tin byproduct back into a nugget feedstock | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: the ore-doubling crush already drops a secondary; capturing that byproduct as washed nugget feedstock closes the tin chain instead of dumping it — industrial circularity, not a fresh reward.
CHALLENGE | from: create_ironworks:bronze_ingot / c:ingots/bronze | via: numismatics mint (bronze as a processed coin metal) | to: economy | motif: M-08 | verdict: REJECT | hook: the existing accepted bronze-mint row stacks a third minted denomination on top of tin and steel; one prior reject already flags steel-mint as coin-flooding, and bronze is an alloy two steps above tin — minting tin (the scarce regional base) is the clean M-08 seam, alloyed bronze should be a traded good, not a parallel currency.

## supplementaries
NEW | from: supplementaries:rope (flax-derived) + supplementaries:bellows | via: M-29 cross-route — make a low-tier Aeronautics balloon/envelope require rope rigging AND a bellows-pumped fill step so the textile farmer feeds the early airship | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a cloth-and-rope balloon needs both the rigging and a way to inflate it — pairing supplementaries' rope with its own bellows as the early-tier envelope route gives the fiber farmer a second customer beyond Create.
CHALLENGE | from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement (ash as a purification/cleansing catalyst) | to: magic | motif: M-10 | verdict: REJECT | hook: this row already sits at a split 5/5 verdict and M-10's own anti-gate rule forbids routing everyday materials through infusion — ash is a bulk burn byproduct. It has two better, non-arbitrary homes already accepted (occultism:spirit_fire M-11, TFMG hot-blast flux M-32); the imbuement route is the weakest of the three and should be dropped, not kept as a third parallel sink.


## lithostitched__tectonic-3.0
LEAVE — pure worldgen datapack (0 blocks / 0 items / 0 loot / no recipe-types); nothing to recipe-, loot-, or config-route. Latent design synergy worth noting but NOT an authorable weave: Tectonic's continent-scale terrain spreads ore deposits farther apart, amplifying the regional-scarcity foundation (M-30) and the demand for the logistics arm (M-31). That is a backdrop the scarcity layer rides on, not a material this mod hands to a method — no Phase-3 action exists against it.

## balm
LEAVE — multi-loader abstraction library (BlayTheNinth); 0 blocks / 0 items, only iron/gold-nugget scaffolding tags. Pure code dependency, no content surface to weave.

## lootr
OK — existing rows sufficient. All four prior candidates are correctly REJECT: lootr is a per-player loot-instancing fairness wrapper that reads whatever loot tables already exist; its loot=yes flag is only its reskinned container blocks (chest/barrel/shulker recolor gold→blue once opened), not loot of its own. There is no material join key and no loot table to seed — the seeding decision belongs to the source structure mod, not here. lootr:trophy is a container-state marker, not a tradeable drop. No coherent second anchor; the QoL/fairness support role is the whole of it.

## createfurnitureseats
OK — existing rows sufficient. Content-free compat glue (0 blocks / 0 items / 0 c:tags / no recipe-types) that registers foreign furniture as rideable Create/Sable seats. It already leans aeronautics (sittable furniture on Aeronautics ships) on top of its support role, so it meets the two-anchor target through behavior, not materials. There is nothing to route — both prior rejects are sound; forcing an economy/magic edge would be noise.

## handcrafted
CHALLENGE | from: handcrafted furniture (deco supply at scale) | via: M-31 logistics-required bulk | to: aeronautics | motif: M-31 | verdict: REJECT | hook: M-31's bar is heavy/bulky/perishable enough that trading at scale *requires* the aeronautics arm — furniture is light, stackable as items, and trades fine by hand, cart, or train. Bulk furnishing a remote colony is convenient by air, not gated to it; this doesn't meet the M-31 threshold and overstates the logistics tie. The colony-furnishing demand is already captured at M-28, which is the correct motif.
NEW | from: handcrafted dishes / plates / cups (cosmetic tableware) | via: farmersdelight:food_serving (plate a finished FD/ExtraDelight feast onto a handcrafted dish as the serving vessel) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a tavern dishes a stew onto a real plate — letting handcrafted tableware act as the serving vessel for the cooking layer gives the deco palette a light, sensible foothold in the food chain beyond the already-covered jam jar.

## trashslot
LEAVE — client-only QoL UI (inventory trash slot; 0 blocks / 0 items / 0 c:tags / no recipe-types). Deletes items; no material surface to weave.

## bits_n_bobs
NEW | from: bits_n_bobs:chain_pulley / chain_rope (kinetic chain transmission) | via: aeronautics winch/rigging recipe (M-23 structural-rigging routing — the alternative to the contested M-24 drivetrain row) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a chain pulley is a hoist, not an engine — its natural airship role is cargo-winch and rigging (raising/lowering loads and anchors) rather than the propeller drivetrain. Routing it as a rigging component sidesteps the M-24 reviewers' objection (a chain drive isn't a rotor/bearing) while keeping the obviously-right aeronautics link.
CHALLENGE | from: bits_n_bobs:large_nixie_tube / nixie_board | via: economy — player-to-player price display at a Trading Floor stall | to: economy | motif: M-33 | verdict: REJECT | hook: a price-display board is build-flavor sitting *near* the economy, not a demand-gating weave — placing a nixie board over a stall consumes nothing and gates no production. M-33 is service-for-hire (labour performed on another player's materials); a static display is not labour. The board's real anchor is Create fabrication (already accepted at M-05 mechanical_crafting); the economy-signage framing should be dropped as ambient.

## libipn
LEAVE — GUI/config/logging library for Inventory Profiles Next (0 blocks / 0 items / no recipe-types). Pure code dependency, nothing to route.

## gtmogs
OK — existing rows sufficient. gtmogs is the worldgen substrate (it disables vanilla ore gen and generates only KubeJS-authored veins), already anchored survival+economy. The accepted rows correctly place the weave *downstream* in the ores it makes regional (M-30), and the magic-metal vein-lock (Occultism silver / amethyst veins → M-30) is captured. Every reject that tried to route gtmogs's own config-marker blocks (overworld/nether/end_marker) through a recipe or loot-seed is sound — the markers are worldgen anchors, not player goods. Nothing to add; it enables motifs rather than carrying one.

## tidal-towns-1.3.4
CHALLENGE | from: tidal-towns ocean-village blacksmith chest | via: loot-seed of a rare hull/vessel blueprint that gates a Create/Aeronautics recipe | to: create | motif: M-15 | verdict: REJECT | hook: the unlock-in-a-chest idea is good and should survive, but the motif is wrong — M-15 is specifically a *boss-DROP* key (its reagent-ownership entry is "each boss's signature drop"), and tidal-towns has no boss. A unique blueprint seeded into a structure chest that gates an aeronautics recipe is a plain progression-gate loot-seed (cross-route demand, closer to M-29: you must explore the sea town to unlock the build), not a boss-key. Keep the weave, drop the M-15 label.

## dtterralith
CHALLENGE | from: dtterralith:amethyst_seed (and other exotic tree seeds) | via: ars_nouveau:imbuement / M-07 attunement (seed as an arcane catalyst) | to: magic | motif: M-10 | verdict: REJECT | hook: these seed→imbuement rows are split across reviewers for a sound reason — a dynamic-tree seed is a *planting item*, not a reagent, and imbuing one to get arcane essence is thematically awkward. The mod's loot=yes surface already offers a cleaner magic route that is accepted: a biome-locked crystalline shard dropped from amethyst-grove canopy leaves (M-02 loot-seed). That harvest-gated drop is the right magic tie; the seed-imbuement routing should yield to it rather than run in parallel.
NEW | from: dtterralith region-locked logs/planks (jacaranda, kapok, cedar — biome-exclusive species) | via: M-29 cross-route — a magic or aeronautics recipe that *requires* a specific exotic plank, so the player in that Terralith biome supplies the builder elsewhere | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: jacaranda only grows in its Terralith biome, so making (say) a decorative airship cabin or an Ars ritual frame call for that exact plank turns "nice-looking wood" into a real cross-region trade dependency — sharper than the bare M-30 worldgen-distribution note because it names a recipe that consumes it.

## entity_texture_features
LEAVE — client rendering engine for OptiFine-format random/emissive entity textures (0 blocks / 0 items). Cosmetic resourcepack support; no game content to weave.
