# Phase 2 candidates — chunk-12

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — zero content surface: behavior-only, 0 items/blocks/loot. No method, no material, nothing to route. Genuine zero-content mod.

## createpickywheels   [anchors: Create (1)]
- from: biome-gate on water-wheel/windmill placement | via: config (behavioral, no recipe) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the biome-gate is a survival *flavor* on the Create spine but it operates purely as a config constraint, not a material routing; no motif covers "behavioral restriction gives a mod a survival anchor." A survival anchor via motif would require a material crossing into a survival method or vice-versa. Worth flagging to Gate-0 if a "biome-gate = survival pressure" motif is desired, but cannot be counted as a weave under current registry.
- REWORK: existing anchor Create (1) — OK, that single anchor is accurate; the survival-flavor read in the dossier's 2nd-anchor candidate is mis-categorized (it's not a method-routing). No weaveable edge exists; the mod remains at 1 anchor.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library: 0 blocks, 0 items, 0 loot, 0 recipe types. Nothing to route.

## lithostitched   [anchors: support/library (1)]
- LEAVE — genuine zero-content worldgen library: 0 blocks, 0 items, 0 loot, 0 recipe types. Nothing to route.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- REWORK: existing connections — dossier says Create + aeronautics. Checking: the mod adds bee_port/drone_port logistics infrastructure that moves packages between players and bases via Robo Bees. Create anchor is solid (uses Create parts + packaging system). Aeronautics anchor is reasonable as the logistics arm, though these are flying couriers not strictly Aeronautics physics-ships. Economy sub-link candidate below.
- from: package delivery network | via: M-29 cross-route dependency | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who doesn't control a Bee Port network *must* trade for delivery service, not build it themselves — the postal infrastructure is a specialist role, and the Portable Stock Ticker lets non-specialists request goods remotely, binding Create logistics specialists to the player economy's distribution layer
- from: robo_bee courier fleet | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is labor/service — but Robo Bees are automated infrastructure, not a player performing work; the service-for-hire frame requires an active player specialist. The M-29 accept above covers the dependency angle better. Redundant here.
- OK — connections sound for the two existing anchors; M-29 adds an economy edge.

## platform   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library: 0 blocks, 0 items, 0 recipe types. Nothing to route.

## mru   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library: 0 blocks, 0 items, 0 recipe types. Nothing to route.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / fugu_slice / cooked_stuffed_cod (high-effort seafood dishes) | via: create:crushing on raw guardian drops then farmersdelight:cooking chain | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create crushes elder-guardian flesh → processed seafood stock, routing the ocean's most dangerous catch through the industrial processing chain before it hits the kitchen — a coast specialist's Create line feeds the FD cooking tree
- from: oceansdelight:fugu_slice / elder_guardian_roll (guardian-derived dishes) | via: M-26 consumption sink / M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian loot is a combat-specialist exclusive (the farm is dangerous, deep-ocean); the prepared dishes flow to non-combat players as high-value food — the ocean combatant feeds the table
- from: oceansdelight dishes as "sellable luxury" | via: bare sell | to: economy | motif: M-09 | verdict: REJECT | reason: M-09 retired — bare sell links are rejected. The M-34 accept above correctly frames it as a combat-supply economy link, not a vendor transaction.
- from: elder guardian drop → oceansdelight processing → high-saturation dish | via: M-16 seasonal reagent | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: elder guardians are not season-gated by Serene Seasons; applying M-16 here would be forced. Reject.
- REWORK: existing survival(1) anchor — OK, correctly placed; FD-cooking weave is existing. The mod needs a Create or economy second anchor; M-12 (guardian drop → crushing) and M-34 (combat-supply to economy) both deliver that.

## modernfix   [anchors: support/performance (1)]
- LEAVE — genuine zero-content performance mod: 0 blocks, 0 items, 0 recipe types, no gameplay behavior. Nothing to route.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content crafting-grid QoL: 0 blocks, 0 items, no recipe types. Nothing to route.

## xaerominimap   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content client map/navigation mod: 0 blocks, 0 items, no recipe types. Nothing to route.

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content inventory-input QoL: 0 blocks, 0 items, no recipe types. Nothing to route.

## immersive_paintings   [anchors: decoration/support (1)]
- from: immersive_paintings:painting / glow_painting as player-made art | via: M-33 service-for-hire | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player with artistic skill commissions paintings for others' builds — the "art service" is a player-to-player labor transaction; the commissioner pays the artist, no NPC involved; fits the economy's labor axis cleanly
- from: immersive_paintings:painting crafted via create parts | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-05 or M-06 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — forcing craft frames through Create machinery for what is fundamentally a decorative canvas is busywork with no thematic sense. "Why does a windmill help hang a painting?" — fails the player-nod test. Reject.
- REWORK: existing anchor decoration/support(1) — the M-33 service accept gives it an economy anchor; now at 2.

## sablecollisiondamage   [anchors: support/aeronautics-addon (1)]
- from: ship collision damage behavior | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the mod adds no items or materials — it's a pure behavior patch. M-34 requires a *drop or material* that enters the economy via combat; collision damage deals hurt but produces nothing tradeable. No material surface to route.
- LEAVE — pure behavior addon (physics/collision): 0 items, 0 recipe types, no drops. No material surface for any motif.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — genuine zero-content client animation mod: 0 blocks, 0 items, no recipe types. Nothing to route.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — genuine zero-content cosmetic particle mod: the 184 "items" in the digest are internal particle/effect holders (minecraft:blood1 etc.), not player-obtainable items; no loot table yields them as collectible drops; no recipe types. Nothing to route.

## owo   [anchors: support/library (1)]
- LEAVE — genuine zero-content UI/config library: 0 blocks, 0 items, no recipe types. Nothing to route.

## l2library   [anchors: support/library (1)]
- LEAVE — genuine zero-content shared library: 0 blocks, 0 items, no recipe types. Nothing to route.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: kinetic batteries store and release rotational energy — they're a meaningful mid-tier Create part; a sequenced-assembly chain (charge → inspect → case → seal) gives them earned depth consistent with Create's GregTech-style more-steps ethos, and as a deployable energy buffer they sit correctly at mid power
- from: create_connected:brass_gearbox | via: create:mechanical_crafting | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is for *endgame/flagship* sequenced chains; a gearbox is a utility part, not a flagship keystone — applying the deep-chain motif to an everyday kinetic part violates the "depth scales with power" rule. A light single-step M-20 deploy might fit but gearboxes are already vanilla-adjacent brass parts. Reject — leave at crafting table.
- from: create_connected:copycat_* blocks | via: M-04 Create recycles deco | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copycat blocks wear any texture; when demolished/swapped they can be crushed back to the base block + experience nugget (the M-04 pattern already established for deco blocks), making copycat panels part of the recycle loop rather than waste
- from: create_connected:item_silo / inventory_bridge | via: M-29 cross-route dependency | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: these are logistics/storage helpers internal to Create infrastructure; they don't *create* a cross-route dependency between production specialists — they just make Create's own storage faster. No second system is gated on them. Reject.
- REWORK: existing Create(1) anchor — the kinetic_battery M-06 and copycat M-04 accepts give it a richer Create-internal weave, but still only Create. M-29 above was rejected. The mod remains at Create(1) unless a genuinely non-Create pillar weave is found. Worth flagging: could the kinetic_battery as an Aeronautics structural power-buffer count as an aeronautics edge via M-23/M-24? The battery stores/releases SU — if it's a required component in an Aeronautics engine/propulsion control circuit, that's M-24 (mechanical component → propulsion/control). Below:
- from: create_connected:kinetic_battery as rotational buffer | via: M-24 mechanical component → propulsion/control | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: airship throttle-control circuits need a smoothed power buffer — a kinetic battery between the engine and propeller shaft prevents stall-surges; the aeronautics specialist sources them from the Create machinist

## createblockchain   [anchors: economy, Create (2)]
- REWORK: existing connections — dossier says economy + Create (2). The Currency Miner is an FE→coin faucet, using Create-side FE from createaddition. Coins enter Numismatics. This maps well to M-08 (player-minted currency) *except* the miner is not truly player-minted in the M-08 sense — M-08's intent is "scarce regional metal → Create processing → player-pressed coin," i.e. the player controls the scarce input and presses it. The Currency Miner is a passive FE burner, which is closer to an NPC-style coin faucet (continuous output for energy input), potentially in tension with the player-run-economy ruling. Flag as REWORK — the existing economy anchor should be reviewed against M-08's reframe.
- REWORK: economy anchor — the Currency Miner's FE→coin mechanism is a passive automated faucet, not player-minted in the M-08 sense; it may undercut the player-run economy (coins from a machine ≠ value created by player labor/scarcity). The dossier's own 2nd-anchor refinement ("feed FE from scarce processed metal so coins trace back to regional scarcity") is the correct fix — chain it through M-30 (regional-scarcity gate) so the coin rate is bounded by a regionally-scarce input, not just any FE. This is a balance/design REWORK, not a new weave.
- from: createblockchain:mining_core (geode worldgen, ~30 chunk spacing) | via: M-30 regional-scarcity gate | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Mining Cores only spawn in geodes spread every 30+ chunks — a player who finds (and controls) a rich geode vein controls the coin-supply rate; distant players must trade for cores or travel, giving the minting specialist a regional monopoly
- from: createblockchain:currency_miner (FE input rate) | via: M-08 player-minted currency + createaddition:charging | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the miner demands sustained Create-generated FE (via createaddition generator chain); building and feeding that generator line is itself a Create-spine build milestone, so the coin rate is bounded by how well the specialist has built their power plant — coins are a Create-production output, not free
- from: createblockchain:piggy_bank chest-loot seeding | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks in chests seed ambient coin into the world — this is effectively a loot-faucet (coins from structure loot), which is structurally similar to the NPC-faucet concern of M-14/M-21. The existing economy anchor already covers the minting loop; this chest-loot side-stream adds nothing to the loop and should be rate-minimized in config rather than amplified as a weave. Reject.
- OK — the two accepted (M-30 scarcity gate on Mining Cores, M-08 Create-FE bounded minting) refine the existing two anchors rather than adding new ones; the mod stays at economy + Create with better loop clarity.

== CHUNK COMPLETE ==
