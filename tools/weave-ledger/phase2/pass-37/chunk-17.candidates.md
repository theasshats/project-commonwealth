# Phase 2 candidates — chunk-17

## sable_sa_compat   [anchors: support/aeronautics (1)]
- LEAVE — pure compat behavior patch (0 blocks, 0 items, no recipe types); bridges Create: Stuff 'N Additions movement gear to Sable ship-physics engine. No material surface to route through any method.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: farmersdelight:cutting | to: create (food-processing web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a cook slices ginger root on the cutting board into minced ginger, a spice ingredient that feeds cooking recipes — the same step a real kitchen takes.
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday (automated scale) | tone: ok | verdict: ACCEPT | hook: automated millstone grinds ginger root into ground ginger spice — lets a Create baker automate the spice supply for cookie/eggnog production chains.
- from: snowyspirit:gingerbread_cookie / gingerbread goods (c:foods/cookie) | via: create:mixing / extradelight:mixing_bowl | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: gingerbread recipes call for seasonal ginger (sparse-jungle/winter-biome crop) — winter is the only time stocks are replenished, making gingerbread a genuine seasonal food good that drives winter-period foraging demand; requires Serene Seasons config gate on ginger growth to be meaningful.
- from: snowyspirit:sled | via: (no method) | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: sled is a terrain-bound snow vehicle with no interface to Create Aeronautics ships or any routable method; the "traversal" link is a vibe overlap, not a mechanism.
- from: snowyspirit:candy_cane_block / gingerbread deco | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: M-04 covers metal/stone deco → raw material + XP nugget; food-material decorative blocks (candy, gingerbread) produce no coherent crush byproduct — the pairing is mechanically incoherent, not just unusual.

## meadow   [anchors: survival (1)]
- from: meadow:alpine_salt (alpine_salt_ore) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing alpine salt ore in a millstone yields processed salt (+ gravel byproduct) — the same ore-doubling logic as any mineral, routing the alpine biome's signature output into the Create processing web and making the salt a production input rather than a purely decorative biome reward.
- from: meadow:alpine_salt | via: create:mixing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt feeds Create-powered food processing (brining, curing, seasoning) — routes meadow's salt into the pack's cooking chains (Farmer's Delight, ExtraDelight) as a required ingredient; demand for alpine-region salt creates a genuine trade good from a biome-locked resource.
- from: meadow:cheese_wheel / meadow:alpine dishes (dairy outputs) | via: farmersdelight:cooking / extradelight:evaporator | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels and alpine dairy products feed multi-step cooking chains — a chef combines cheese with other crops in the cooking pot to produce high-nutrition meals; adds a dairy production leg to the food web.
- from: meadow:chambray_wool (felted textile) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: chambray/felt textiles require meadow's felting step (wool → felt), then those felted parts feed mechanical crafting for padded or insulated components (filter pads, gaskets) — a light native-method gate that makes the alpine textile a genuine production intermediate, not only decoration.
- from: meadow:cheese_wheel / alpine dishes | via: (emergent trade) | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: dairy products and aged cheeses are consumed against the diet/nutrition pressure (Diet mod's Protein group) — continuous diet demand means cheese is never stockpiled indefinitely; the alpine biome's cheese wheel becomes a recurring trade commodity.
- from: meadow:alpine_salt | via: (regional ore-gen) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine_salt_ore is biome-locked (meadow alpine sub-biomes); a player settled elsewhere must trade for the salt needed in cooking/preservation chains — the biome lock creates the regional-scarcity pressure that makes salt a real trade good.
- REWORK: dossier flags M-09 ("luxury good→coin") for cheese/dishes — M-09 is retired; the cheese/economy connection should read as M-26 (consumption sink via diet demand) + M-30 (regional scarcity gate on alpine salt), which are both proposed above. The bare "sell for coin" framing should not persist into Phase 3.

## incontrol   [anchors: support (1)]
- LEAVE — config-only JSON rule engine; 0 blocks, 0 items, no recipe types. It shapes spawn tables and loot for other mods' weaves but has no material surface of its own. Any weave belongs on the drop-providing mobs or loot-bearing structures, not here.

## entity_model_features   [anchors: support (1)]
- LEAVE — client-side rendering engine for CEM model overrides; 0 blocks, 0 items, no recipe types, loot=no. Pure cosmetic infrastructure; no content surface.

## resourcefullib   [anchors: support (1)]
- LEAVE — cross-platform utility/API library; 0 blocks, 0 items, no recipe types. Zero game-content surface; nothing to route.

## bigsignwriter   [anchors: support (1)]
- LEAVE — client-side GUI utility for large-character sign text; 0 blocks, 0 items, no recipe types. No game-content surface.

## lithium   [anchors: support (1)]
- LEAVE — server/world-tick performance optimizer; 0 blocks, 0 items, no gameplay mechanic. No content surface to route.

## yungsapi   [anchors: support (1)]
- LEAVE — structure/jigsaw API library for YUNG's mods; 0 blocks, 0 items, no recipe types. No standalone content; nothing to weave here.

## better_climbing   [anchors: support (1)]
- LEAVE — client movement-feel tweak (ladder/vine physics); 0 blocks, 0 items, no recipe types. Pure feel improvement; no content surface.

## craftingtweaks   [anchors: support (1)]
- LEAVE — crafting-grid QoL (rotate/balance/clear buttons); 0 blocks, 0 items, no recipe types. No content surface to route.

## miningspeedtooltips   [anchors: support (1)]
- LEAVE — tooltip-display tweak for digging speed; 0 blocks, 0 items, no recipe types. No content surface.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: iron-frame and metal-variant doors crush back to iron nuggets + gravel + an XP nugget (the same lossy M-04 pass applied to all metal deco) — gives the decoration palette a Create recycling edge without gating the doors themselves. Best done as part of a wholesale metal-deco crushing pass, not individually.
- from: mcwdoors wood door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood doors crush to planks/sawdust which vanilla already provides; the byproduct is not a useful intermediate at this tier and adds no meaningful weave — the value only exists on the metal variants. Scope the M-04 pass to iron/metal only.

## jei   [anchors: support (1)]
- LEAVE — recipe/item viewer (client UI); 0 blocks, 0 items, no recipe types, loot=no. Load-bearing for Create recipe visibility but has no content surface to weave. (Note: do not swap to EMI — per CLAUDE.md EMI cannot render Create processing recipes.)

## endermoon   [anchors: survival (1)]
- from: endermoon Ender Moon event (enderman spawn surge) | via: loot-seed | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ender Moon is a lunar event (M-22 spans ALL moon events) — during the surge, endermen drop ender pearls at much higher rate; seeding a bonus drop of a magic reagent (e.g. a minor ender-attuned crystal usable in Ars Nouveau imbuement or an Occultism ritual) onto the enderman loot table during the Ender Moon event ties the celestial calendar to magic progression. Players learn to plan rituals around the Ender Moon.
- from: endermoon Super Ender Moon (all-mob surge) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Super Ender Moon is a combat-supply event — mass mob spawns flood the night; a combat specialist farms the surge for drops (bone, rotten flesh, mob-specific reagents) and trades them to crafters who need the materials. The event is the danger-pressure face of the loop; loot-seeding extra mob drops to make the farming reward worth the risk closes the M-34 combat-route supply arc.
- from: endermoon lunar-event gate | via: worldgen/spawn event gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: the spawn-rate modifier itself is not a routable material — the valid weave is on the loot table (already captured above as loot-seed). Proposing the event as a "gate" without a concrete method to route material through is redundant and not authorable in Phase 3.

## spyglass_improvements   [anchors: support (1)]
- LEAVE — client QoL zoom/overlay tweak on the vanilla spyglass; 0 blocks, 0 items, no recipe types, loot=no. No game-content surface; the Curios slot integration is behavior-only.

## moogs_structures   [anchors: support (1)]
- LEAVE — worldgen library/API for Moog's structure mods; 0 blocks, 0 items, no recipe types, loot=no. Pure infrastructure; no standalone content to weave.

## chefsdelight   [anchors: survival, economy (2)]
- OK — connections sound: survival anchor (Farmer's Delight meal food) and economy anchor (villager Cook/Chef professions trade meals) are both coherent. The dossier's M-09 note (route trades to Numismatics coins) is a retired motif — the correct read is M-33 (service-for-hire labor: Cook/Chef villages are a service point where players can acquire cooked meals as a service, paying with goods/emeralds in a player-adjacent way). No new mandatory weave is needed, but one additional link is worth noting:
- from: chefsdelight Cook/Chef villager profession | via: emergent trade (service) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cook villager acts as a service-for-hire node — players bring raw Farmer's Delight ingredients, the Cook processes them into meals (a service the non-cooking player pays for); value flows player→trade-post, no NPC coin faucet needed. This deepens the economy anchor from "food source" to "service node."
- from: chefsdelight trades → Numismatics coin conversion | via: KubeJS config | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: reframing villager emerald trades to Numismatics minted coin would make the Cook/Chef an NPC coin faucet, which is exactly what the player-run ruling prohibits. Emerald trades stay as-is; the economy anchor is already captured by M-33 above.

## prickle   [anchors: support (1)]
- LEAVE — config-format serialization library (Darkhax Prickle JSON format); 0 blocks, 0 items, no recipe types, loot=no. Pure developer infrastructure; nothing to weave.

## minecolonies   [anchors: survival, create (2)]
- OK — connections sound: survival anchor (settlement food/farming + citizen upkeep pressure) and Create anchor (quarry machines built from Create parts, M-05) are both established and authored. The dossier correctly identifies that the deeper Create gating (complex tech behind colony research) is design intent, not a new edge to add.
- from: minecolonies colony food/crop outputs (c:foods/*, c:crops/*) | via: farmersdelight:cooking / create:mixing | to: survival | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony route is cheaper/faster for basics (by design); a colony Cook hut producing bread/soups/pies cheaper than hand-crafting is exactly the M-28 colony route in action — making colony specialists valuable to non-colony players who buy basics from them. Explicitly framing this as M-28 (not just incidental food) ties the colony's food output to the loop's production-route trade incentive.
- from: minecolonies:ancienttome (research gate item) | via: minecolonies research tree | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: colony University research unlocks capabilities (higher-tier huts, locked exclusives per DESIGN.md §3) that cannot be bought — only the colony's *output* is tradeable, not the research itself. This is the textbook M-37 research/knowledge gate: players who want the exclusive colony-produced good must trade with a colony specialist because the research capability can't be sold. Naming it explicitly anchors minecolonies to the economy pillar via the knowledge-gate mechanism.
- from: minecolonies NPC colony combat output (guard/barracks drops) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: colony guards kill mobs but the drop goes into the colony's request system, not a player-tradeable loot stream; the M-34 combat-supply arc is cleaner on boss/hostile-mob drops from other mods, not the colony's internal guard output which the player doesn't directly farm. Force-fitting M-34 here is arbitrary.

== CHUNK COMPLETE ==
