# Phase 2 candidates — chunk-14

## afk-sleep-1.3.2   [anchors: support/QoL (1)]
- LEAVE — zero content surface: no items, no blocks, no loot, no recipe types. Pure server-behavior patch tweaking the sleep-quorum denominator. Nothing to route through any method; no motif applies.

## creativecore   [anchors: support/library (1)]
- LEAVE — zero content surface: pure GUI/API library with no items, blocks, or recipe types. Dependency-only presence; nothing to weave.

## spark   [anchors: support/performance (1)]
- LEAVE — zero content surface: profiler CLI tool only. No items, no loot, no recipe types. Nothing to route.

## alternate_current   [anchors: support/performance (1)]
- LEAVE — zero content surface: behavior-only redstone patch with no items, no blocks, no loot. Nothing to weave.

## kobolds   [anchors: economy, survival (2)]
OK — connections sound. kobolds already carries economy (emerald trade) + survival (creature/structure layer), which is the right two-pillar fit for a creature/dungeon mod. The emerald-trade economy connection is direct and legible.

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold skull transmuted in spirit fire — an underground kill fuels occult ritual; the underground-creature vibe fits the occult's dark flavor
- from: kobolds loot (skulls, redstone items, potions) | via: loot-seed into kobold den structures | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards pick up "Kobold Skull" / "Redstone Goods" contracts — the underground civilization becomes a coin-paying combat economy node
- from: kobolds:kobold_skull | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 (bounty→coin) already covers the combat-reward path; adding a direct sell-price on skulls would double-count the same loop and crowd out player-driven coin valuation

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — zero content surface: pure terrain-density-function overhaul with no items, blocks, loot, or recipe types. Thematic adjacency to scarcity (wider continents spread ore pockets) is real but yields nothing to recipe-route; forced edge would be incoherent.

## betterbiomereblend   [anchors: support/performance-client (1)]
- LEAVE — zero content surface: client-side OKLab color-blend engine. No items, no loot, no recipe types.

## astikorcartsredux   [anchors: survival (1)]
- from: cart crafting (oak/iron implement parts) | via: create:pressing (iron sheets for plow blade + reaper cutting bar) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the reaper blade and plow share are pressed iron sheet — a draft implement that rewards investing in the Create spine before upgrading farm scale
- from: astikorcartsredux:oak_supply_cart | via: numismatics sell (as a crafted good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: supply carts are bulk-crafted wooden items without the high-effort processing M-09 targets; a direct sell-price is weak arbitrage, not a genuine luxury trade good
- from: astikorcartsredux harvest output (bulk crops via reaper) | via: farmersdelight:cooking / create:milling (crop → processed ingredient → coin) | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this belongs to the crop's own mod (FarmersDelight / the crop source), not to the cart; routing the cart as a farming-throughput enabler that feeds M-12 elsewhere is correct, but the weave anchor lives in the crop mod. Don't double-tag here.

## modernfix   [anchors: support/performance (1)]
- LEAVE — zero content surface: JVM/loader-level performance patches only. No items, no loot, no recipe types.

## create_hypertube   [anchors: Create, aeronautics (2)]
OK — connections sound. create_hypertube already spans Create (kinetic power, sequenced_assembly build) + aeronautics (fast-transit logistics arm). The two anchors are well-justified by the mod's content.

- from: hypertube network (entity/player conduit) | via: aeronautics logistics design | to: economy | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is the structural-alloy → airframe motif; the hypertube is not an airframe component. No current motif covers "a transit-network feeds trade routes" as a recipe weave — would be no-motif. Economy anchor is thematically adjacent (you could argue hypertube = inter-city courier), but there is no recipe or loot hook that instantiates it; forcing a weave here is a defect.
- from: create_hypertube:hypertube_entrance | via: create:mechanical_crafting (brass/precision gate for the entrance terminal) | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the dossier already notes entrance is crafted via create:sequenced_assembly — it is already a sequenced-assembly item (the hypertube block). The M-06 path exists; adding a second mechanical_crafting layer on top adds cost without depth. No new connection needed.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — zero content surface: pure JEI plugin, no items, no loot, no recipe types. Nothing to route.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot | via: create:pressing → create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ancient Metal is smelted, pressed into sheets, and assembled in a sequenced chain — beating a Cataclysm boss earns you the raw material needed to build the pack's hardest Create machines
- from: cataclysm:witherite_ingot (boss mat) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Witherite (from the Netherite Monstrosity) is transmuted by spirit fire into an occult essence — the darkest boss drop fuels the darkest ritual
- from: cataclysm:ignitium_ingot (boss mat) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ignitium's flame-forged nature makes it a natural arcane infusion catalyst; imbuement refines the fire-boss metal into a fire-affinity magic reagent
- from: cataclysm boss trophy drops (ancient_metal, skulls, shells) | via: loot-seed | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: after Create-processing, ancient metal becomes mint-grade coin stock — defeating a world boss is the hardest coin-earning path in the pack
- from: cataclysm:ancient_metal_ingot | via: cataclysm:weapon_fusion | to: Create (as input gate) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Mechanical Fusion Anvil needs ancient_metal_ingot as a boss-key unlock for the deepest weapon/tech fusions — boss progress gates tech depth (CLAUDE.md design)
- from: cataclysm deco blocks (azure_seastone, black_steel, chiseled endstone sets) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco blocks from dungeon raids can be crushed back into gravel/raw material + XP nugget — loot overruns are never dead weight
- from: cataclysm:amethyst_crab_shell | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amethyst_crab_shell has a specific mechanical use (blessed meat / Leviathan preparation) via amethyst_bless; redirecting it to coin arbitrage would undercut that gated use and muddy the boss-drop-to-specific-use design. REWORK candidate if the bless path is ever removed.

REWORK: none — cataclysm's existing single survival anchor is the problem (under-connected); the ACCEPTs above add the needed Create + magic + economy webs. No existing connection is arbitrary or mis-costed.

## corgilib   [anchors: support/library (1)]
- LEAVE — zero content surface: code library (data-attachment + datagen utilities). No items, no blocks, no loot, no recipe types.

## galosphere   [anchors: survival (1); M-07 magic catalyst established in ledger]
OK — the M-07 attunement catalyst connection (allurite_shard / lumiere_shard as reserved magic gating reagents) is the mod's real second anchor; it is established and sound. The dossier correctly lists magic as the 2nd pillar.

- from: galosphere:silver_ingot (=palladium, c:ingots/palladium) | via: create:crushing (ore doubling) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore runs through the crusher for a doubled yield + a byproduct nugget — the rare cave metal rewards investing in Create automation
- from: galosphere:silver_ingot (palladium) | via: numismatics mint (after Create processing) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a scarce regional metal; Create-refined into coin stock it becomes a premium trade currency distinct from iron/gold
- from: galosphere deco bricks (allurite/lumiere/amethyst/pink_salt bricks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: excess cave-brick decoration crushes lossy back to raw crystal gravel + XP nugget — overbuilt underground bases aren't a dead end
- from: galosphere:allurite_shard | via: ars_nouveau:imbuement (as catalyst per M-07) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: REJECT | reason: M-07 is already established and reserved in the ledger as galosphere's canonical magic link. Listing it again here is redundant; it is not a new candidate. Flagging so the merge sees it was considered.

REWORK: none — the survival + magic (M-07) anchors are clean. The ACCEPTs above add Create + economy depth without overlap.

## dataanchor   [anchors: support/library (1)]
- LEAVE — zero content surface: developer data-attachment and packet-registration library. No items, no blocks, no loot, no recipe types.

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — zero content surface: crash-handler hook with no items, no loot, no recipe types. Nothing to route.

## cmparallelpipes   [anchors: Create (1)]
- from: cmparallelpipes:pipe_wrench | via: create:item_application or crafting-table recipe gated on Create brass | to: Create (depth) | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Pipe Wrench is a precision instrument — crafting it behind a brass cogset signals "you've reached the Create fluid tier" rather than being freely available day one
- from: cmparallelpipes:pipe_wrench | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a utility wrench with no luxury/food character is a poor fit for M-09 (luxury good → coin); forcing a sell-price on a functional Create tool is arbitrary.

## trashslot   [anchors: support/QoL-client (1)]
- LEAVE — zero content surface: inventory UI widget, no items, no loot, no recipe types.

## create_better_villagers   [anchors: Create, economy (2)]
OK — connections are sound. Create-parts supply through villager trading is a direct, coherent Create ↔ economy bridge.

- from: create_better_villagers villager trades | via: numismatics re-denomination (config trade currency → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Brass/Copper/Andesite Worker villagers price in Numismatics coin instead of emeralds — the pack's own currency runs through the Create supply chain, closing the trade loop
- from: create_better_villagers villager trades | via: M-21 (villager trade → numismatics) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; the re-denomination above via M-08 (processed scarcity → coin) is the cleaner framing since Create parts are processed goods. Recording this reject so the merge notes M-21 was surfaced and deliberately deferred to M-08.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly (precision brass + electromotor assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is a precision assembly product — building the fastest drone tier requires the Create sequenced-assembly line, bridging personal flight to the tech spine
- from: drones:iron_rotor | via: create:pressing (iron sheet → pressed rotor blank) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: rotors start as pressed sheet stock — even mid-tier drone propulsion demands the Create workshop, not just raw crafting
- from: drones:pocket_drone (assembled, high-spec) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a personal equipped tool doesn't naturally enter trade as a luxury consumable; the effort to build it is self-directed. The M-09 framing requires a high-effort good that *changes hands* as commerce. Drone is a build project, not a traded good.

== CHUNK COMPLETE ==
