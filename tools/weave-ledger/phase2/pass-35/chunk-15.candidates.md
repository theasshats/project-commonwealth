# Phase 2 candidates — chunk-15

## createshufflefilter   [anchors: create (1)]
- LEAVE — pure Create QoL builder utility (2-item mod: shuffle_filter + weighted_shuffle_filter). Zero material surface: it controls which foreign items a Deployer places, but adds no items, no outputs, no loot, and no recipe type of its own. There is no coherent second anchor without inventing an edge. The dossier's own conclusion (leave) is correct.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster (endgame tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a pocket drone that can actually fly fast needs an ion thruster assembled through Create's own sequencer — nobody gets the top drone tier without building the Create spine first
- from: drones:iron_rotor + drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors and the assembly controller are precision Create parts — a mid-tier drone is a genuine Create build milestone, not a vanilla craft
- from: drones:wood_rotor | via: vanilla crafting (light step) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: wood_rotor is an everyday starter component; gating it behind Create processing would violate the "never gate basics behind complex recipes" rule. The M-05 gate belongs at iron/ion tier only, not wood entry-level.
- from: drones:pocket_drone (drill variant) | via: aeronautics logistics | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a drill-drone (beacon = combat, lodestone = magnet pickup, drill = auto-mining) can feed extracted ore directly into a bulk-good pipeline — cross-route dependency: drone requires Create parts, drone output feeds the economy's logistics arm. This is the loop advance: Create (production) → aeronautics (logistics arm of economy)
- from: drones:pocket_drone (economy "sell" framing) | via: bare sell link | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: M-09 is retired; "a crafted drone is sellable" is the ambient endpoint, not a weave. The demand-gating path (M-29 cross-route above) is the correct economy entry.

## aeronautics   [anchors: aeronautics + create (2)]
REWORK check on existing connections:
OK — the aeronautics↔Create connection is jar-proven (zinc/brass/sequenced_assembly/mixing all run through Create) and well-grounded; no arbitrary links.

New links:
- from: aeronautics:levitite_blend (zinc_nugget + end_stone_powder + water, via create:mixing) | via: create:mixing then regional scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: zinc is regionally scarce and every builder needs levitite for lift — whoever settles a zinc-rich region becomes the server's lift supplier; the scarcity foundation directly gates the aeronautics arm's core material
- from: aeronautics:adjustable_burner (hot-air envelope) | via: config fuel-tag tie (extend #c:furnace_fuels to include tfmg:diesel) | to: create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: a cheap hot-air airship running on TFMG diesel creates a fuel supply chain — the diesel refiner and the ship builder are two specialists who need each other
- from: aeronautics:adjustable_burner (hot-air) | via: survival/fuel pressure | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the burner consumes fuel continuously during flight — charcoal/wood farming and fuel production is a repeating demand that never zeroes out, closing the loop's consumption edge
- from: aeronautics:levitite (crystallized) | via: magic catalyst requirement (KubeJS gate on the in-world crystallization step) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: levitite literally defies gravity — requiring an Ars/Occultism attunement catalyst adjacent during crystallization makes physical sense and gates the better lift tier behind magic specialists; nobody self-sufficient
- from: aeronautics:levitite (crystallized) → magic gate framing | via: M-10 catalyst | tone: clash-check | verdict: ACCEPT (survives red-team) | reason kept: the crystallization step is already code-only (not in recipe JSON), so a KubeJS catalyst injection is the correct form; the "magical attunement for anti-gravity material" pairing is thematically coherent — Ars and Occultism both deal in transmutation and levity effects. Survives.
- from: aeronautics:propeller_bearing / gyroscopic_propeller_bearing | via: create:mechanical_crafting (existing) → M-24 drivetrain | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: propeller bearings are the drivetrain — the point of M-24 is that the drivetrain side of the airship supply chain requires fabricated mechanical parts, which are themselves a Create specialism; already partially established, proposing it formally
- from: docking connector / rope coupling | via: logistics config | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: docking stations at trading posts make the airship a bulk-cargo layer; logistics-required bulk goods (levitite, colony materials, processed metals) need the physical movement arm — the docking system is the infrastructure that makes aeronautics the economy's distribution spine
- from: aeronautics:levitite as "mint for coin" framing | via: bare sell | to: economy | motif: M-09 | verdict: REJECT | reason: M-09 retired; the demand-gating via M-30 (regional scarcity) is the correct economy link. "Levitite is sellable" is ambient, not a weave.
- from: dyeable tires (cosmetic) | via: villager/wandering-trade | to: economy | motif: M-21 | verdict: REJECT | reason: M-21 cut (NPC coin faucet). Cosmetic tire variants don't warrant a weave — they're decoration palette, not a system node.

## kiwi   [anchors: support/library (1)]
- LEAVE — zero-content code library: provides registration helpers, GUI/font utilities, and config scaffolding for dependent mods; registers no items, no blocks, no recipe types, no loot. Genuine zero-surface library. No coherent weave possible.

## minecolonies_tweaks   [anchors: support/QoL (1)]
- The dossier calls this "support" and flags it as an enabler rather than a node. That's mostly right, but the 89 c:tags it injects (c:crops/corn, c:crops/rice, c:foods/dough, etc.) are themselves a weave surface — they're the join keys that enable food-chain weaves across the pack. However the "weave" is the downstream mod that USES those tags, not the tag provider itself. minecolonies_tweaks's own second-pillar link would have to be something it produces or processes.
- from: minecolonies_tweaks:inventoryscroll (colony storage access tool) | via: colony demand → survival | to: survival | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the inventory scroll (and copy scroll) is the quality-of-life object that a colony player specializes around — it embodies the MineColonies production route as a physical tool, tying the colony route back into the survival pillar's daily demand. At 38 items (dyed variants) it's a real crafted good. This is a light M-28 anchor: the colony route's accessory tooling feeds back into colony operators' daily workflow (survival pressure).
- from: minecolonies_tweaks c:tags (c:crops/rice, c:crops/corn, etc.) | via: create:milling / farmersdelight:cooking | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the unified crop tags this mod injects let Create milling and FD cooking target any modded rice/corn/tomato/cabbage by tag rather than per-mod ID — minecolonies_tweaks is the glue that makes M-12 food-chain weaves pack-wide without one-off per-mod recipes; its tags ARE the weave surface
- from: scrolls as "sellable colony goods" | via: bare sell | motif: M-09 | verdict: REJECT | reason: M-09 retired. Scrolls are tools-of-the-colony-trade, not a trade commodity themselves; any economy link routes through M-28 (colony demand) not a sale.

## createblockchain   [anchors: economy + create (2)]
REWORK check on existing connections:
- REWORK flag — economy anchor: the Currency Miner is a coin FAUCET — it mints Numismatics coins from FE at a configurable rate, gated by Mining Cores (worldgen). This is M-08-adjacent but potentially NPC-coin-faucet-flavored depending on how freely Mining Cores spawn. If the miner rate is unconstrained it becomes an NPC money printer that undermines the player-run economy (contradicts #163/#240 rework). The existing economy anchor should be strengthened: tie the FE input to a regionally scarce processed metal so coins trace back through scarcity (M-30), not minted from thin air. This is a design quality concern, not a verdict on the anchor existing.
- REWORK flag — the dossier notes "FE (from createaddition)" as the power source. The economy loop requires that minting cost something real. Recommend: FE consumption rate tuned so that minting requires non-trivial Create infrastructure (not passive), and Mining Cores' geode frequency config tuned to limit the tap. This is a balance/config note, not a new weave.

New candidates:
- from: createblockchain:mining_core (worldgen geode drop, scarce) | via: regional scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Mining Cores spawn in geodes ~every 30 chunks — that regional pattern means some players settle near geode clusters and become the server's "mint infrastructure" providers; coin minting becomes regionally anchored, not universally accessible, which is exactly the scarcity→economy loop
- from: createblockchain:piggy_bank (loot in overworld chests) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: piggy banks in exploration loot give adventurer/combat players a way to seed coin into the economy from dungeon runs — the combat-route supply side (M-34): explorers find piggy banks, crack them, coins enter circulation as a reward for danger
- from: createblockchain:cryotheum_coolant | via: create:mixing or thermal specialization | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: cryotheum_coolant is a proprietary coolant block for the miner, not a general processing intermediate. Routing it through Create:mixing as a generic coolant intermediate would be forced; the mod's own use of it (coolant for the miner) is already its function. No coherent M-12 path survives red-team.
- from: FE consumption of Currency Miner → bare "hook up any FE source" | via: createaddition FE | motif: M-17 | verdict: REJECT | reason: M-17 is an electric-charging bridge for tools/foci, not a generic FE-consumer link. The miner consuming FE is already its primary mechanic (economy anchor), not a second-system bridge; claiming M-17 here would dilute the motif.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — zero-item behavior-only mod. Enables player-to-player food feeding; registers no items, blocks, recipe types, or loot. The mechanic it enables (co-op food sharing) is a support convenience for the survival pillar but there is nothing to route through a method. Genuine zero-surface QoL mod.

## jei   [anchors: client-only UI/support (1)]
- LEAVE — recipe-viewer client UI; zero items, zero recipe types, no loot. Its load-bearing role is visibility (renders Create's processing recipes — the reason EMI was dropped). No material surface to weave. Genuine zero-surface support mod.

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — invisible code library (GUI/block/BE/packet scaffolding for dependent mods); zero items, zero blocks, zero recipe types, no loot. Genuine zero-surface library.

## byzantine   [anchors: survival/colony (1)]
- The dossier marks this leave with "curated colony flavor." Let me stress-test that conclusion. Byzantine ships MineColonies build schematics (schematic-only, 0 items/blocks of its own). Its content surface is CONSUMED building materials that the MineColonies Builder requests — Domum Ornamentum decorative blocks and standard vanilla/modded stone/wood. So the question is whether those building-material requests create a demand-side weave.
- from: Byzantine schematic building-material demands (Domum Ornamentum blocks, stone, brick variants) | via: MineColonies colony build requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony using Byzantine style must supply Domum Ornamentum architectural blocks at scale — that creates continuous colony demand for masonry and cut-stone specialists (Create stonecutting, ore-processing byproducts), feeding the M-28 colony-route anchor; the architectural style is the demand driver
- from: Byzantine colony style — tone check | verdict for M-28 above: survives red-team. Byzantine/Shogun/Nile styles are distinct architectural flavors — players pick them — so the building-material demands are real and predictable. A colony architecture specialist (who supplies ornamental blocks to colony builds) is a coherent player role. The M-28 hook is genuine, not invented.
- from: Byzantine as generic "more buildings → more materials → more trade" | via: bare economy link | verdict: REJECT | reason: this would be a vague "builds things, needs stuff" non-weave. The M-28 above captures it precisely (colony route demanding colony-exclusive or specialist-produced blocks). Don't double-count with a bare economy claim.
- from: Byzantine schematic style → magic/Create unlock | motif: M-15 boss-key unlock | verdict: REJECT | reason: a building style isn't gated behind a boss drop — that would be arbitrary and punishing for purely decorative content. M-15 is for high-tier tech recipes, not architecture skins.










