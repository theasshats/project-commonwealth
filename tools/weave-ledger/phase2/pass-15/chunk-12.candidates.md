# Phase 2 candidates — chunk-12

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / gasoline / lpg (distillation outputs) | via: loot-seed + config (fuel tank seeded into airship supply chests; TFMG combustion engine as aeronautics propulsion source) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: refining crude oil into diesel then loading it into your airship's fuel tank is exactly the industrial supply chain the aeronautics pillar needs
- from: tfmg:steel_ingot (c:ingots/steel) | via: recipe (aeronautics frame/hull ingredient) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: structural steel plates are the obvious load-bearing material for airship hulls — industrial-grade material for an industrial-age vehicle
- from: tfmg:steel_ingot / aluminum_ingot (c:ingots/steel / c:ingots/aluminum) | via: recipe (Create processing → numismatics mint) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined industrial metals are the backbone of a scarcity-driven economy; a coin from smelted steel feels earned
- from: tfmg:combustion_engine (or assembled engine block) | via: recipe (aeronautics drivetrain component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a dieselpunk engine block driving a propeller is the natural mechanical heart of an airship propulsion unit
- REWORK: existing dossier notes aeronautics tie as a candidate but it is unconfirmed/unanchored — the M-13 and M-23/M-24 links together are what make aeronautics a real 2nd pillar, not just "fuel exists." Mark as strong consensus needed.
- from: tfmg flamethrower/napalm weaponry | via: recipe/loot | to: survival/combat | motif: no-motif | power: everyday | tone: clash (combat flavor only, no structural system route) | verdict: REJECT | reason: no motif covers a generic "combat item useful in fights" edge; this is a dossier note flagging a weak tie, not a weave

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — pure client-side tooltip renderer; 0 items, 0 blocks, loot=no. No material surface to route through any method. Genuine zero-content library behavior mod.

## mutantszombies   [anchors: survival (1)]
- LEAVE — 7 spawn-egg items only, loot=no per dossier. The dossier confirms no special drops or blocks. The spawn eggs themselves are not meaningful weave fodder (they are not a craftable reagent, not seeded into loot tables, and there is no drop to route through a method). Mob-behavior expansion only; forcing an edge would be contrived. If a future sweep surfaces custom loot tables, revisit via M-02 or M-14 loot-seed.

## underground_village   [anchors: survival (1)]
- from: underground_village structure chest loot + inhabiting villagers | via: loot-seed (seed Numismatics coin drops into Stoneholm chest loot tables; seat a Numismatics-priced merchant or bounty-board within the village) | to: economy | motif: M-14 (bounty → drop economy, provisional) / M-08 (coin from processed scarcity) / M-21 (trade-seam to economy, provisional) | power: everyday | tone: ok | verdict: ACCEPT | hook: finding an underground settlement and discovering its merchants trade in the same coin you use on the surface makes the world feel like one economy, not isolated biomes
- from: underground_village villager trades | via: trade (villager trade → numismatics) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional — M-21 is provisional, surface for review) | hook: Stoneholm merchants naturally seat as economy-node traders
- Note: loot=yes per dossier digest (implies chest loot exists in the structure). Loot-seed delivery is the primary mechanism; no recipe surface exists.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — pure server-side performance optimization; 0 blocks, 0 items, loot=no. No material surface. Genuinely no content to weave.

## wits   [anchors: support (1)]
- LEAVE — pure server command utility; 0 items, 0 blocks, loot=no. No material surface. Genuinely zero-content.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already anchors Create (fabricated via create:cutting and CBC munition assembly) and aeronautics (mounts on Aeronautics ships for ship-to-ship combat).
- from: cbc_at heavy-autocannon / rocket-pod tier | via: recipe (require a boss drop as a required crafting input, or gate behind MineColonies unlock) | to: Create / survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heaviest ship armament shouldn't be craftable from basic metals — a boss-drop key for the advanced barrel tier gives PvPvE progression a meaningful ceiling
- from: cbc_at:ap_rocket_item / APDS munitions | via: recipe (TFMG steel/aluminum as barrel material instead of just bronze) | to: Create (deeper) | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: upgraded barrel alloys from TFMG's industrial chain gate the precision munitions tier — industrial-grade steel rifled barrel vs. bronze starter barrel
- REWORK: cbc_at has loot=yes — check what loot tables it registers; if it drops cbc_at items from structures/entities, consider seeding coin (M-08/M-14) or magic reagents (M-02) into those drops for an economy link (economy is its natural missing 3rd pillar).

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single-item (target_dummy) utility prop. No loot table, no processing surface. Its value is purely as a combat-test tool; it does not sit in any system as a material or output. Forcing a weave (e.g. "craft it from magic materials") would make it a gated utility, harming its QoL role. Genuine zero-content weave surface.

## txnilib   [anchors: support/library (1)]
- LEAVE — pure code library; 0 blocks, 0 items, loot=no. No content surface whatsoever.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (c:ingots/uranium / raw_uranium) | via: recipe (Create crushing/mixing → processed → numismatics mint) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade uranium is the most scarce regional material in the pack; minting it into the economy's highest-value coin is the natural scarcity-driven reward for deep tech progression
- from: createnuclear:steel_ingot (c:ingots/steel) | via: recipe (aeronautics structural ingredient) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: nuclear-grade steel (verified structural quality from the reactor build) as airship hull plating — industrial toughness for the sky
- from: createnuclear:autunite (the glowing mineral) | via: recipe or loot-seed (Ars Nouveau imbuement catalyst — its glow/radiation resonance as an arcane attunement catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a radioactive crystal that glows with atomic energy is a credible arcane catalyst — the line between radiation and magic resonance is one a player would accept in a dieselpunk/magic world
- from: createnuclear:enriched_soul_soil (enriched recipe output) | via: recipe (create:haunting feed — soul-fire → occultism spirit reagent) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: enriched soul soil fed through Create's haunting process to yield an occult spirit compound — nuclear enrichment touching the soul/spirit dimension is a satisfying thematic bridge
- from: createnuclear anti-radiation armor set | via: config (Cold Sweat / survival temperature config — radiation as an environmental hazard type that the hazmat suit also mitigates) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no motif covers environmental-hazard suit cross-linking; this is a thematic/config note but fits no Gate-0 motif — flag for Gate-0 if maintainer wants to establish a hazard-gear motif
- from: createnuclear reactor (massive SU output) | via: config/recipe (aeronautics — reactor as stationary power source feeding a very large ship's onboard kinetic network) | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: a nuclear reactor bolted into an airship superstructure powering its industrial contraptions — the ultimate aeronautics power plant tier

== CHUNK COMPLETE ==
