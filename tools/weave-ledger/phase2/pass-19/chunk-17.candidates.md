# Phase 2 candidates — chunk-17

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config library/API; 0 items, 0 blocks, no loot, no recipe types. Genuine zero-surface; nothing to weave.

## clumps   [anchors: support/performance (1)]
- LEAVE — XP-orb-merging behavior mod, no items or loot. Zero content surface; nothing to weave.

## tipsmod   [anchors: support/client-UI (1)]
- LEAVE — loading-screen tip display, no items/blocks/loot. Pure client UI; nothing to weave. (Pack could author its own tip JSON for onboarding, but that is content authoring, not a pillar weave.)

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — numerical ping display, client-only, no items/blocks. Zero content surface.

## createfood   [anchors: survival, Create (2)]
- from: createfood finished dishes (pizza, cheesecake, milkshake, etc.) | via: numismatics sell/price (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the bakery district on your ship turns pastries and ice cream into coin — a baker guild earns its keep
- from: createfood dishes as seasonal inputs | via: Serene Seasons gate on crop ingredient | to: survival (deepens Create) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: apple pie only when apples are in season; forces stockpiling and adds urgency to the harvest
- from: createfood dishes (warm meals) | via: Cold Sweat config warmth-food bonus | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — config tie is not a numbered motif; flag for Gate-0 if desired
- REWORK: existing Create anchor is sound (uses create:milling/mixing/etc. as the giant M-12 consumer — that's the design). Economy connection proposed above is new; no existing economy edge to rework. OK — connections sound for existing 2 anchors.

## t_and_t   [anchors: survival (1)]
- from: t_and_t loot chests (fort/outpost/ship structures) | via: loot-seed — seed Numismatics coin or pack economy items into conquerable fort/outpost loot | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: raiders stockpile coin; taking a fort pays out in currency, not just vanilla loot — exploration feeds the economy loop
- from: t_and_t village variants | via: loot-seed — seed villager trades toward Numismatics-priced goods (M-21 provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); surface for review but do not author
- from: t_and_t conquerable structures | via: loot-seed with boss-key drop | to: Create (M-15 boss-key unlock) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the outpost commander carries a trophy key-component; beating the fort unlocks a complex Create recipe tier — exploration converts to tech progress

## searchables   [anchors: support/client-UI (1)]
- LEAVE — search/filter API library, 0 items/blocks/loot. Genuine zero-surface library.

## alternate_current   [anchors: support/performance (1)]
- LEAVE — redstone performance patch, no items/blocks/loot. Zero content surface; nothing to weave.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — pet-teleport behavior tweak, no items/blocks/loot. Zero content surface.

## fxntstorage   [anchors: Create, survival (2)]
- from: fxntstorage:backpack_flight_upgrade (wearable flight) | via: aeronautics thematic tie — require an Aeronautics-processed component (e.g. a small propeller or lift-fan part) as a crafting ingredient | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: to get personal flight from your backpack you need to machine a miniature lift rotor — the propulsion supply line scales down to wearable gear
- from: fxntstorage storage controller / interface (item-routing network) | via: thematic tie to economy logistics | to: economy/aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — a storage-routing-as-logistics edge has no approved motif; the existing Create + survival anchors are sound
- REWORK: existing anchors (Create + survival) both solid. The M-24 flight-upgrade candidate above is new. OK — connections sound otherwise.

## underground_village   [anchors: survival (1)]
- from: underground_village Stoneholm loot chests | via: loot-seed — seed Numismatics coin and/or pack economy goods into underground village chests | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm residents trade in coin — delving underground turns up real currency, not just food barrels
- from: underground_village villager trades (Stoneholm villagers) | via: villager trade seating toward Numismatics-priced goods | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 provisional (maintainer leans no); surface for review only

## durabilitytooltip   [anchors: support/client-UI (1)]
- LEAVE — numeric durability tooltip, client-only, 0 items/blocks/loot. Zero content surface.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine, 0 items/blocks/loot. Genuine zero-surface library.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — animation/entity rendering API, 0 items/blocks/loot. Genuine zero-surface library.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire or ars_nouveau:imbuement — transmute the fang into a magic reagent, giving the dungeon mob a downstream use | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the cave spider's toxic fang is exactly the ingredient an alchemist needs — dungeon runs feed the magic lab
- from: undergroundworlds temple/pyramid bricks (chiseled_temple_bricks, pyramid_bricks, etc.) | via: create:crushing — lossy crush back to raw stone + create:experience_nugget | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: hauling out a slab of ancient stonework and grinding it through the crusher recovers rubble and a glint of XP — deco waste has a use
- from: undergroundworlds dungeon loot chests (loot=yes) | via: loot-seed — seed Numismatics coin or economy goods in dungeon chests | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the old civilizations left coin caches — clearing a dungeon pays out in spendable currency
- from: undergroundworlds:antidote_flask / desert_charm (immunity gear) | via: Create M-05 — gate crafting behind a Create-processed component | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: these are consumable/charm items (everyday protective gear, not flagship machines) — M-05 native-method gating is for a mod's flagship machine, not its utility trinkets; applying it here violates the "don't gate basic components behind complex recipes" guardrail

## chefsdelight   [anchors: survival, economy (2)]
- from: chefsdelight Cook/Chef villager trades (FD meals) | via: Numismatics re-pricing — KubeJS resets the emerald price to Numismatics coin so village food economy joins pack currency | to: economy (deepens) | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the village cook charges coin for a hot meal; now wandering traders are plugged into the same currency network as player shops
- REWORK: existing economy anchor is emerald-trade-based, which is functional but sits outside the Numismatics economy. The M-09 candidate above proposes upgrading that seam. OK — core 2-anchor structure sound; the deepening is additive.

## dtterralith   [anchors: survival/worldgen-compat (1)]
- from: dtterralith biome-specific seeds (amethyst_seed, cedar_seed, maple_seed, etc.) | via: create:milling — mill rare seeds into a specialty dye/powder matching their biome theme | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: these are worldgen dynamic-tree seeds, not crops meant for milling; forcing a Create processing step on a compat-bridge seed is thematically strained and there is no player-sensible hook ("of course I mill a cedar sapling" doesn't land). Their log output already reaches vanilla craft / Create cutting as standard wood.
- from: dtterralith rare-biome timber varieties (jacaranda, maple, giga_spruce logs) | via: create:cutting — a dedicated cut recipe producing biome-flavored plank or strip variants | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Dynamic Trees / vanilla sawmill already handles these logs; adding a redundant Create:cutting edge is duplication, not depth. No net weave value.
- LEAVE — worldgen compat bridge; its log outputs flow into existing Create/wood-processing webs as vanilla wood. No bespoke weave warranted beyond what vanilla handles.

## spark   [anchors: support/performance (1)]
- LEAVE — performance profiler, no items/blocks/loot. Zero content surface; nothing to weave.

## create   [anchors: Create (1, IS the pillar)]
- LEAVE — Create is the method hub, not a recipient. Its 17 recipe-types are the connective backbone every other mod weaves THROUGH. No edges that consume Create itself are warranted (the dossier explicitly notes this). Existing connections are by design the entire point; do not force a 2nd anchor.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies (high-effort consumables) | via: numismatics sell/price — designate a tier of extracts/edibles as trade goods in Numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the dealer's wares are priced in coin now; your strain farm becomes a revenue stream, not just a personal stash
- from: smokeleafindustries FE-powered machines (grinder / extractor / liquifier / synthesizer) | via: createaddition:charging (FE↔kinetic bridge) — wire the smokeleaf machine energy from Create rotational generation so they aren't an FE island | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: spin up a water wheel, run it through the Create Addition alternator, and your grow-room machines hum — the industrial farm joins the kinetic spine
- from: smokeleafindustries raw hemp bud / dried hemp | via: create:milling — route raw hemp through the millstone as an alternate first-pass step before the mod's own grinder tier | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the millstone produces coarse hemp dust, a step down from the machine-ground extract — a low-tech entry ramp before you build the grinder
- from: smokeleafindustries generator FE output | via: createaddition:liquid_burning or create:compacting (biomass fuel) — the smokeleaf generator consumes Create-processed biofuel or compacted plant matter | to: Create | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is reserved for Aeronautics propulsion fuel (TFMG diesel/gasoline); applying it to a non-aeronautics FE generator would dilute the motif. Use M-17 (FE charging bridge) as the Create↔smokeleaf link instead.
- from: smokeleafindustries mutator (seed crossbreeding) | via: create:deploying — deployer applies a reagent shard to a seed to trigger mutation, threading Create into the strain-breeding step | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the mutator is a machine with its own UI; routing through create:deploying instead is thematically forced ("why does a mechanical arm breed plants?"). The M-17 FE bridge is the cleaner seam.

== CHUNK COMPLETE ==
