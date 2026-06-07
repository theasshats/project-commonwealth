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
