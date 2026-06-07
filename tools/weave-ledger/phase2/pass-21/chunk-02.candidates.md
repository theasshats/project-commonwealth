# Phase 2 candidates — chunk-02

## minecolonies_compatibility   [anchors: survival, Create (2)]
- REWORK: OK — connections sound. The mod's whole job is bridging MineColonies into Create/storage/Farmer's Delight; it already sits at 2 anchors (survival + Create) and is itself a weave artifact. No forced third edge needed.
- from: colony Courier ↔ Create Stock Link storage bridge | via: config/job tie | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the Courier/storage bridge is a logistics convenience, not a value-flow into the economy pillar (no coin, no trade); fits no motif as described — would need M-18-style framing but Courier is not an Occultism spirit; no-motif reject-for-review.
- from: minecolonies_compatibility Butcher job | via: farmersdelight:cutting (colony worker uses cutting boards) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the Butcher already operates through Farmer's Delight cutting boards per the dossier — that existing tie is already there; adding a Numismatics sell step on butcher products would be a real M-09 edge, but the Butcher's outputs (carcasses/cuts) are already covered by the Farmer's Delight food chain elsewhere; the marginal value over what the mod already does is low; pass — not a new weave this mod needs to own.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- LEAVE — genuine cosmetic-only layer: 96 colored variants of levitite/tires, zero items with a functional surface, no recipe-types, no loot. The dye step is a one-click offhand interaction or crafting-grid slot, which is already the lightest possible depth — putting it behind Create:mixing would add weight to a cosmetic step. No coherent second anchor exists without forcing an edge. The aeronautics anchor is sufficient for a decoration-palette support mod.

## createpickywheels   [anchors: Create (1)]
- from: biome-gated water-wheel power (river biome required) | via: config-behavior tie (world pushes back on Create power) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player building their first mill has to actually find a river biome — the world shapes where industry goes, not the other way round. M-16 covers season/environment-gated inputs feeding Create; biome-gated power generation is the same loop direction (world → Create), making this a coherent M-16 extension. Delivery: config-only (already live); no recipe action needed — the weave is the behavioral coupling itself. Power is everyday (affects starter generators); depth is appropriate (one rule, not a chain).
- from: windmill open-air/overworld gating | via: config/worldgen tie | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: same motif, same mod, same delivery as the water-wheel candidate above — would double-count the same behavioral hook; one ACCEPT per the single config-behavior weave is the right scope.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a cactus biome produces bulk saguaro fruit; running it through a Create mill yields a dye-intermediate or food powder — bulk forage becomes a processing feedstock, the same loop as grain→flour. Delivery: recipe (create:milling). Power is everyday (ambient worldgen drop); one light milling step is the right depth.
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom felling yields bulk cap blocks; milling them gives mushroom powder (fermentation input or food intermediate) — large-scale mushroom farming feeds the Create food/chemistry chain. Delivery: recipe (create:milling). Second M-12 candidate for same mod is fine — two distinct material outputs from different biome ecosystems, not a double-count.
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is an ambient low-tier drop with no processing depth; selling it raw for coin makes the economy trivially farmable by anyone near a desert. M-09 is for high-effort consumables (wine, cheese); an unprocessed cactus fruit doesn't earn the coin step. Would need to route through Create first (M-12 ACCEPT above) before a downstream M-09 is coherent.

## controlling   [anchors: support/client-UI (1)]
- LEAVE — pure client keybind-search UI, zero items/blocks/loot, no content surface. Genuine zero-surface behavior mod; no coherent second anchor exists.

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure blueprint-set add-on for MineColonies; ships style schematics only, no items, no blocks, no loot. The Steampunk style's indirect consumption of Create blocks at build time is already its natural tie — that is not a recipe weave this mod owns. No coherent second anchor without forcing a non-edge.

## byzantine   [anchors: survival (1)]
- LEAVE — pure schematic-style pack for MineColonies; 0 blocks, 0 items, 0 loot. Its "weave" flows entirely through MineColonies and Domum Ornamentum; it defines no outputs of its own. No route to a second anchor without manufacturing one.

## accelerateddecay   [anchors: support/perf (1)]
- LEAVE — performance mod replacing leaf-decay ticking; 0 blocks, 0 items, 0 loot, no gameplay surface. Genuine zero-content behavior mod.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library (BlayTheNinth); 0 blocks, 0 items. Provides no materials, methods, or content surface. Pure code dependency.

## dragonlib   [anchors: support/library (1)]
- LEAVE — developer abstraction library; 0 recipe types, 1 dev/test artifact block that is not player-facing. Pure code dependency.

## better_lib   [anchors: support/library (1)]
- LEAVE — config + messaging library; 0 blocks, 0 items. Pure code dependency.

## startuptime   [anchors: support/perf (1)]
- LEAVE — startup-duration logger; 0 blocks, 0 items, no in-world mechanics. Genuine zero-surface diagnostic tool.

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — client HUD overlay for armor durability; 0 blocks, 0 items, no loot. Pure display mod; no content surface to weave.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine; 0 blocks, 0 items. Pure code dependency providing config serialization to other mods.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver UI; 0 blocks, 0 items, no gameplay material. Infrastructure compat mod; no content surface.

## buildguide   [anchors: support/client-UI (1)]
- LEAVE — client build-overlay rendering parametric shape guides; 0 blocks, 0 items. No content surface, no gameplay interaction.

## clumps   [anchors: support/perf (1)]
- LEAVE — XP-orb entity-merger for server TPS; 0 blocks, 0 items. Performance behavior mod with no material surface.

## drones   [anchors: aeronautics (1)]
- from: drones:iron_rotor | via: create:pressing → crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: an iron sheet pressed by Create's mechanical press becomes the laminated rotor blade — the drone's flight tier is gated on having a working Create setup, not just a crafting table. Delivery: recipe (create:pressing as intermediate + crafting). Power is mid (iron rotor is the basic useful tier); depth is a single Create step, appropriate.
- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is the top-tier propulsion unit; building it requires sequenced assembly — precision casing, electrical winding, a brass housing — the same depth you'd expect from any Create endgame component. Delivery: recipe (create:sequenced_assembly with a derpack:incomplete_ion_thruster part). Power is endgame; multi-step depth is appropriate.
- from: drones:pocket_drone (assembled) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the pocket_drone is a player's custom-built personal robot assembled from arbitrary blocks — its "value" varies wildly by what blocks the player put in it; there is no fixed item identity to price in a coin shop. M-09 requires a well-defined finished good. The drone-as-trade-good is thematically coherent but mechanically undefined. Reject; revisit if a standardized "basic drone kit" item is ever added.
- from: drones:controller | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the controller is already crafted (it's a mid-tier item), and adding mechanical_crafting on top of the existing iron_rotor ACCEPT (same motif M-05) over-layers Create gating on this mod; one M-05 + one M-06 is sufficient depth for a personal-drone mod. Reject to avoid stack overload.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — door-interaction convenience behavior; 0 blocks, 0 items, no loot, no gameplay material. No content surface to weave.

## trading_floor   [anchors: Create, economy (2)]
- REWORK: OK — connections sound. trading_floor:trading_depot is a Create depot variant whose whole purpose is automating villager trades into the economy pillar; 2 anchors is the correct assessment. No rework needed.
- from: trading_floor:trading_depot fed by Create-processed scarce goods | via: trading_floor depot → villager trade → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create production line delivers processed copper or zinc ingots by belt to the Trading Depot; the resident villager (toolsmith/weaponsmith) trades them for emeralds, which then flow into Numismatics — the whole scarcity→production→economy loop in one automated chain. Delivery: config/loot-seed (ensure the relevant villager professions trade Create-relevant materials; this is a config-tier action, not a recipe). Power mid; no new recipe needed, just confirming the trade-seam path is intentional.
- from: trading_floor depot + magic goods (potions, enchanted books) | via: Create belt delivery to depot → villager trade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the depot automating potion trades is a valid play pattern, but it doesn't constitute an arcane infusion pull (M-10 requires routing through an arcane infusion *method*); the depot just handles villager trades regardless of what goods flow. No motif fits "depot handles magic goods" specifically — the trade path is M-08/M-21 territory, and M-21 is provisional/leans-no. Reject; the M-08 ACCEPT covers the canonical economy coupling.

== CHUNK COMPLETE ==
