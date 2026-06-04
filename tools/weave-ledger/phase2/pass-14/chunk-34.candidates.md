# Phase 2 candidates — chunk-34

## resourcefullib   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code library: 0 blocks, 0 items, loot=no, no gameplay mechanics. Nothing to weave; pure API/utility layer for dependent mods.

## create_compressed   [anchors: Create (1)]
- from: create_compressed:crushed_*_pile blocks (compressed crushed ores, especially regional/scarce metals — lead, zinc, nickel, osmium, uranium, platinum, quicksilver) | via: recipe (crafting-table or Create:compacting) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a chest of compressed crushed zinc is a tradeable bulk-goods unit — the Create supply chain's native export format plugs straight into Numismatics as a mintable commodity
- from: create_compressed:mechanism_block / cogwheel_block / shaft_bundle (bulk mechanical parts) | via: recipe (crafting-table → aeronautics structural component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: building an airship frame from compressed mechanism blocks — bulk-packed Create parts as structural aeronautics inputs — is a natural extension of the supply-chain logic the mod already embodies
- from: create_compressed:dough_block / wheat_flour_pile | via: recipe (Create:milling or farmersdelight:cutting) | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create_compressed already sits inside Create's own ecosystem; routing dough blocks into food chains adds a trivial one-step and gives a Create-internal convenience item a survival weave that feels arbitrary rather than thematic — the food pillar doesn't need bulk-compressed dough as a gating input
- REWORK: current single-pillar anchor is correct but the dossier's 2nd-pillar analysis says "leave" without checking M-08 (economy via bulk-traded compressed ore piles). The M-08 and M-24 candidates above are real and should be logged; the dossier's "nothing to weave" conclusion is too conservative for a mod with 30 blocks covering scarce regional metals.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no. Adds buttons to crafting grids; no items or materials to route through any method. LEAVE is correct here.

## owo   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code library: 0 blocks, 0 items, loot=no. Pure UI/config/networking framework for dependent mods; no gameplay content whatsoever.

## trading_floor   [anchors: Create, economy (2)]
- from: trading_floor:trading_depot | via: recipe (gate the depot's recipe behind Create-processed parts rather than pure vanilla) | to: Create (depth) | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Trading Depot is a Create machine variant — making it require Create-pressed sheets or mechanical components in its recipe anchors it properly in the tech spine, not free at a crafting table
- from: trading_floor:trading_depot (automated villager trade output pipeline) | via: trade / config | to: economy (Numismatics) | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); also the mod is ALREADY anchored economy — this would be reinforcing an existing pillar rather than adding a new one. The real opportunity is deepening the Create anchor, not adding a third economy tie.
- OK — connections sound. The two-pillar Create + economy anchor is the correct shape for this mod. The M-05 recipe-gating above strengthens the Create tie which is currently only implicit (hard dep, but no recipe-level gate).

## tacz   [anchors: support/combat (1)]
- from: tacz gun_smith_table_crafting inputs (metals: iron, Create-processed sheets/rods/casings) | via: recipe (tacz:gun_smith_table_crafting — gate mid/high-tier guns on Create:pressed iron sheet, Create:brass ingot, or create_ironworks steel plate) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: you build the rifle at the Gun Smith Table but the barrel blank came off the rolling mill — manufacturing-era firearms require industrial metalworking, which is exactly what Create is
- from: tacz ammo (cartridges, boxes) as a consumable coin-sink | via: trade (Numismatics sell or player market) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo is the purest consumable in any PvPvE economy — bullets cost coin, keeping combat players in the market and giving crafters a steady demand signal
- from: tacz high-tier gun or endgame attachment | via: recipe (create:sequenced_assembly — multi-stage precision-machined assembly line) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a sniper-grade rifle isn't hand-assembled — it's a sequenced-assembly product, barrel + receiver + stock + optic rail, each stage on the line; exactly what M-06 is for
- from: tacz:m67 grenade (throwable explosive) | via: loot-seed (seed into structure/dungeon loot tables of combat-heavy mods, or military crate loot) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: grenades found in ruins or on enemy corpses are a natural warzone scavenge and reward exploration without requiring crafting gate
- from: tacz guns as aeronautics turret / vehicle weapons | via: config (aeronauticscompat compatibility config or aeronautics weapon mount) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — TACZ doesn't natively integrate with Create Aeronautics weapon mounts; aeronauticscompat covers other turret mods (not TACZ); the link is flavour only with no delivery mechanism. No motif → reject for review.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy_* set (high-armor iron-block gated) | via: recipe (create:pressing — swap the iron block component for Create:iron_sheet × N or Create:mechanical_crafting plate blank) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: heavy plate armor is stamped sheet metal — the press is where the smithy ends and the factory begins; thematically exact for the Steampunk and Heavy sets
- from: immersive_armors:divine_chestplate / divine_* set (wither-skull gated endgame set) | via: recipe (ars_nouveau:enchanting_apparatus — add source gem + arcane reagents to the divine armor recipe) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: divine protection requires arcane consecration — you can't bless armor at a crafting table, you finish it in the enchanting apparatus
- from: immersive_armors:steampunk_* set | via: recipe (create:mechanical_crafting — the Steampunk set demands precision assembly befitting a Create pack) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: steampunk gear assembled on a mechanical crafting rig is theme-perfect; the set becomes the "Create smith" milestone loadout
- from: immersive_armors finished sets (Prismarine, Bone, Divine) as sellable goods | via: trade (Numismatics sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: armor is keep-don't-sell equipment; high-tier sets are too scarce and too personal to be a reliable trade good. The economy hook for this mod is better served by the crafting-input side (Create/magic mats as gate) than the output side (selling armor)

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no. Pure door-interaction convenience mechanic; no items, no methods, nothing to route or weave.

## imfast   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no. Server-side movement-validation patch that enables aeronautics/vehicle speed; no content surface whatsoever.

## fogoverrides   [anchors: support/client (1)]
- LEAVE — genuine zero-surface client visual mod: 0 blocks, 0 items, loot=no. Config-only fog tuning; no materials or mechanics to weave.

== CHUNK COMPLETE ==
