# Phase 2 candidates — chunk-08

## ohthetreesyoullgrow   [anchors: support/worldgen-library (1)]
LEAVE — genuine zero-content code library: 0 blocks, 0 items, no recipe-types, no loot tables. Pulled as a dependency for custom-tree mods; nothing to route material through or seed loot into.

## buildguide   [anchors: support/QoL-client (1)]
LEAVE — genuine zero-surface utility: 0 blocks, 0 items, keybind-driven render overlay only. A client build-assist with no world interaction, no materials, no loot. Nothing to route or weave.

## sliceanddice   [anchors: Create, survival (2)]
OK — connections sound.
- Dossier correctly identifies this as a M-12 processing-chain bridge (Create kinetic automation of Farmer's Delight cutting/cooking). Already 2 anchors, the connection is architecturally load-bearing (it IS the Create↔food-production seam), not incidental.
- REWORK check: none needed. The Create+survival pairing is exactly what the mod is — no arbitrary edge.
- New link scan: could a third weave be forced (e.g. sprinkler as a seasonal reagent delivery, M-16)? Red-team: the Sprinkler is a fluid-routing block, not a seasonal-gated item; a M-16 tie would require Serene Seasons config hooks that aren't registered, making it a config weave rather than a material route. No motif fits cleanly without forcing. Leave at 2.

## puzzleslib   [anchors: support/library-API (1)]
LEAVE — genuine zero-content code library: 0 blocks, 0 items, no recipe-types, no loot tables. Multi-loader abstraction for Fuzs mods; nothing to weave.

## netmusic   [anchors: support/QoL-flavor (1)]
- netmusic already routes through `touhou_little_maid:altar_recipe_serializers` (the music_cd is crafted via the TLM altar). That is a single-connection weave into magic-adjacent flavor.
- from: netmusic:music_cd (crafted item) | via: touhou_little_maid:altar_recipe_serializers | to: support/flavor (existing) | motif: no-motif (craft route to a cosmetic item; no loop anchor) | power: everyday | tone: ok | verdict: REJECT | reason: existing connection noted in dossier; it routes through TLM altar but the output is purely cosmetic audio — no loop advance (scarcity→pressure→production→economy). Acknowledging it doesn't justify a pillar anchor.
- New link search: could a music_player_backpack be priced as a luxury good (M-09 sell via numismatics)? Red-team: the item is a cosmetic streaming device; its value in the economy would be zero (players would never buy it over functional gear) — the economy pillar needs goods that relieve *scarcity pressure*, not cosmetic backpacks. No real M-09 candidate.
- Could create:mechanical_crafting gate the music_player or cd_burner (M-05 native-method gating)? Red-team: the machine is a tech convenience, not a flagship power item — gating a CD player behind sequenced assembly is disproportionate and thematically odd. Tone clash (whimsical cosmetic vs. deep industrial gate).
LEAVE — cosmetic audio flavor; no routable material and no loop advance. The TLM altar weave is noted but does not constitute a pillar anchor; the mod is correctly classified as sanctioned curated-flavor support.

## kubejs   [anchors: support/modpack-tooling (1)]
LEAVE — genuine zero-content modpack scripting layer: 0 blocks, 0 recipe-types (it authors other mods' recipes, not its own). It enables every weave but is not itself weaveable. No loop position.

## jeresources   [anchors: client-UI/support (1)]
LEAVE — display-only client UI: 0 blocks, 0 items, no recipe-types. Surfaces existing loot/worldgen data; no material input/output. Cannot hold a pillar anchor.

## create_sa   [anchors: Create, aeronautics (2)]
OK — connections sound.
- Create (built through create:sequenced_assembly / mechanical_crafting) + aeronautics (jetpacks, drones = personal flight/transport) is the correct and natural pairing. Both anchors are load-bearing: the mod's entire item set requires Create fabrication methods, and its output function (flight, transport) is the aeronautics pillar's personal-mobility tier.
- REWORK check: none needed. The pairing is coherent and matches the dossier.
- New link scan: blazing tools consume blaze rods — could they route through magic infusion (M-10, Ars imbuement)? Red-team: the blazing line is a Create-native fire/blaze process (`create:haunting` is already used — the blaze flamethrower and blazing pickaxe already route through Create haunting). Routing blaze through Ars imbuement on top of that is redundant and would create a parallel path with no scarcity pressure reason. Reject.
- from: create_sa (blazing tools) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: `create:haunting` (already in made-by methods) is the natural fire seam; adding Ars imbuement on the same items creates a redundant parallel path with no loop advance — keep the existing Create-only route.
- from: create_sa:brass_drone_item | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a high-tier personal combat/scouting drone is not a "luxury consumable" (M-09 is for processed food/goods); forced M-09 application to tech gear is mis-categorized and the drone is a functional tool, not a tradeable good. No loop benefit.
- Overall: 2 is the right count; no improvement available without forcing.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — genuine zero-surface client movement tweak: 0 blocks, 0 items. Alters climbing physics only. Nothing to weave.

## blueprint   [anchors: support/library-API (1)]
LEAVE — genuine zero-content code library: 0 blocks (the template_chest is a trivial vanilla-style item with no loop position), no recipe-types, no loot. Framework for Team Abnormals mods; nothing to route through.

## irons_lib   [anchors: library/API (1)]
- The dossier notes two player-facing blocks: `irons_lib:transmog_table` (armor reskin) and `irons_lib:player_statue` (decorative multiblock). These are cosmetic, not material-processing nodes.
- New link scan: Transmog table consumes armor pieces + presumably some cost to reskin — could that cost be a magic reagent (M-10, Ars essence as the payment for transmog)? Red-team: the transmog is an NBT-edit cosmetic action, not an infusion; charging an Ars source_gem for a cosmetic reskin is arbitrary overhead and M-10 is for "refining/attuning into a magic reagent," not payment for a cosmetic. Tone clash (cosmetic service vs. arcane refinement). Reject.
- from: irons_lib:transmog_table (armor cosmetic) | via: ars_nouveau:imbuement as reagent cost | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: M-10 is for refining foreign material into a magic output, not for cosmetic service fees. Routing a transmog table through Ars imbuement is thematically arbitrary and would punish a cosmetic action with a magic-resource gate.
LEAVE — library dependency with only cosmetic blocks; no coherent pillar anchor available without forcing.

## create_hypertube   [anchors: Create, aeronautics (2)]
OK — connections sound.
- Create (recipes via create:sequenced_assembly, kinetic power requirement) + aeronautics/logistics (player/entity fast-travel = the physical logistics arm of the economy) is the natural and correct pairing.
- REWORK check: none needed. The connection accurately reflects the mod's role as a Create-built logistics transit tool — it is the economy's ground/underground movement arm at high speed.
- New link scan: could tube materials become an economy trade good (M-08/M-09 coin from processed scarcity)? Tubes are craft items, not luxury consumables or processed scarce metals — M-08 is for scarce metal→Create→coin, and tubes are infrastructure blocks, not coins. No clean motif fit.
- from: create_hypertube:hypertube (infrastructure block) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 is for luxury consumables (processed food/goods); infrastructure blocks don't fit the "luxury good sold for coin" pattern. The economy anchor is already captured by the aeronautics/logistics role.

## dragonlib   [anchors: support/library-API (1)]
LEAVE — genuine zero-content code library: 0 items worth noting (dragonlib:dragon is a dev/test artifact), no recipe-types, no loot. Architectury-based framework for MrJulsen mods; nothing to weave.

## appleskin   [anchors: support/QoL-client (1)]
LEAVE — pure HUD/tooltip display layer: 0 blocks, 0 items, no recipe-types. Reads existing food saturation/exhaustion values; adds no content and no loop position. Cannot hold a pillar anchor.

## gnkinetics   [anchors: Create (1)]
- This is a 1-anchor mod with substantial content: 33 blocks, 31 items, loot=yes. Dossier says "leave" for 2nd anchor, reasoning it is "pure mechanism with no thematic hook into magic/economy/survival." This deserves a harder power-read for a second weave, since 1 is the floor and 2 is the goal.
- Method-pull: gnkinetics produces kinetic components (gears, planetary/ring/worm/industrial gears, chainable cogwheels). The methods palette has:
  - `create:mechanical_crafting` — gnkinetics' complex gears could require mechanical crafting (inbound already natural; this is a recipe method on the gnkinetics output side)
  - M-24 (Mechanical component → propulsion/control): a mod's mechanical part feeds Aeronautics propellers, engines, and control surfaces — gnkinetics produces exactly *mechanical components* (worm gears, planetary gears, industrial gears). This is the natural motif.
  - M-23 (Structural alloy → airframe): gnkinetics is kinetics, not structural alloy — not a direct M-23 fit.

- from: gnkinetics:worm_gear / gnkinetics:industrial_gear / gnkinetics:planetary_gear | via: aeronautics construction recipe (drivetrain/propeller/control surface) | to: aeronautics | motif: M-24 | power: mid (worm/industrial gears are mid-tier Create components) | tone: ok — "of course the industrial gear-set goes into the ship's drivetrain" | verdict: ACCEPT | hook: Aeronautics propellers and control surfaces require real gear assemblies; a worm gear or planetary stage is exactly the mechanical part you'd put in a ship's drivetrain.

- from: gnkinetics:ring_gear / gnkinetics:planetary_gear_struct | via: aeronautics construction recipe (high-tier control surfaces / turret rotation bearing) | to: aeronautics | motif: M-24 | power: endgame (planetary gear struct is a multi-block assembly) | tone: ok | verdict: ACCEPT | hook: Planetary gear arrangements for high-torque applications — a ship's heavy gun mounting or thrust-vectoring assembly is exactly the kind of high-stress mechanism a planetary stage handles.

- from: gnkinetics:magnet_gear / gnkinetics:large_magnet_gear | via: create_new_age:energising (FE charging) | to: Create/economy | motif: M-17 | power: mid | tone: ok? | verdict: REJECT | reason: magnet gears couple rotation across gaps mechanically — charging them with FE (M-17) would imply an electromagnetic activation step, which is a plausible industrial theme but there is no direct in-pack route that calls for it and Create: New Age energising is already used for other things. The connection is possible but forced — no clear scarcity driver creates demand for a magnetically-charged gear. Mechanically interesting but no loop advance.

- from: gnkinetics (gear components generally) | via: create:sequenced_assembly as intermediate component | to: Create (deepening) | motif: M-06 | power: mid-endgame | tone: ok | verdict: REJECT | reason: gnkinetics parts being used *in* sequenced assembly chains (as intermediate inputs for more complex Create machines) is already the natural reading of a Create-spine deepener; this does not add a second *pillar* anchor — it keeps gnkinetics entirely within Create. Leave as a recipe-design note, not a weave.

- Checking economy via trade: gnkinetics:brass_gear / gnkinetics:industrial_gear as sold components (M-09 luxury good → coin)? Red-team: gears are fabricated components, not luxury consumables (M-09 is specifically for processed food/goods: wine, cheese, candy). Gears sold for coin is M-08 territory (processed metal → coin) but gnkinetics doesn't process ores, it processes already-made Create stock. No direct M-08 fit either. Reject.
- from: gnkinetics gear (any) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: M-09 is for luxury consumable goods; mechanical gears are industrial components — the motif label doesn't fit and forcing it would mis-categorize the trade relationship.

REWORK: gnkinetics is currently 1-anchor (Create only). The M-24 weave above (worm/industrial/planetary gears into Aeronautics drivetrain recipes) earns a genuine second anchor (aeronautics). The dossier's "leave" recommendation should be updated to reflect this: gnkinetics' gear outputs are the exact "mechanical component → propulsion/control" case M-24 was accepted for.

## foodeffecttooltips   [anchors: support/client-QoL (1)]
LEAVE — pure client tooltip renderer: 0 blocks, 0 items, no recipe-types. Displays existing food effect data; no content, no material, no loop position. Cannot hold a pillar anchor.

## minecolonies_compatibility   [anchors: survival, Create (2)]
OK — connections sound.
- Survival (extends colony farming/jobs — Orchardist, Butcher, Cook using modded crops/FD cutting boards) + Create (Courier ↔ Create Stock Link storage bridge) is the right pairing. The mod's entire purpose is wiring MineColonies into the wider modpack production layer.
- REWORK check: none needed. Both anchors are load-bearing integration connections, not incidental.
- New link scan: could the Gunner/TaCZ job (colony soldiers armed with TaCZ guns) add a survival/danger anchor on the *combat* side (M-14, bounty → coin)? The Gunner job is colony-side combat support — not a player-facing bounty board interaction; M-14 is about bountiful boards paying coin for mob drops, not colony soldiers. No clean fit.
- from: minecolonies_compatibility:tacz_dummy_gun (TaCZ gun training item) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the tacz_dummy_gun is a colony-internal training object, not a mob drop that a bounty board consumes; M-14 requires "mob drops → bounty board → coin," which is not what this item does. Forced application.
- The dossier is already at ≥2 with a good pairing. No forced 3rd edge warranted.

## tidal-towns-1.3.4   [anchors: survival (1)]
- Structure-only worldgen mod (loot=no per dossier, though dossier notes vanilla blocks + villager population with vanilla loot/trade riders). The dossier says "leave" because no items/methods to weave.
- Power-read: The ocean villages contain vanilla chests (buried treasure / shipwreck / village chest loot tables) and a villager population. The loot=no flag in the digest likely means no *custom* loot tables registered — but vanilla structure loot is still seeable. Under PHASE2-BRIEFING rules: "A boss/structure feeding coin (M-08/M-14), magic reagents (M-02), or a progression key (M-15) is a REAL candidate — do NOT LEAVE a loot-bearing structure mod just because it has no recipes." However the dossier explicitly states loot=no (no custom loot tables at all), and this is confirmed by the AUTO-digest. Without any registered loot table, there is nothing to seed into via loot-seed delivery. The villages use vanilla-defaults only.
- from: tidal-towns ocean villages | via: loot-seed — add custom loot tables seeding Numismatics coin as "ocean merchant coin stash" | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ocean merchants would naturally cache coin — a shallow Numismatics coin seed in the village chest loot table ties seafaring exploration to the player economy, rewarding aeronautics sea travel with spendable currency. This is a datapack loot-table edit (Phase 3: loot-seed delivery), not a recipe.
- from: tidal-towns ocean villages | via: loot-seed — seed a magic reagent (e.g. occultism satchel / ars_nouveau:source_gem fragment) in dungeon/chest loot | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ocean settlements as repositories of arcane curiosities — a fragment of source gem or an Occultism page found in a submerged chest makes exploration feel like it yields magic-relevant finds, not just vanilla loot. Loot-seed delivery (Phase 3 datapack edit).
- from: tidal-towns ocean villages | via: M-21 villager trade → numismatics (provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans *no*; surface only. Additionally this is vanilla villager trade routing, not a custom economy integration. Flag as provisional-only; do not advance without Gate review.

REWORK: tidal-towns is currently 1-anchor (survival). The accepted loot-seed candidates above (M-08 coin, M-02 reagent) earn it a genuine second anchor if implemented, connecting exploration into the economy and magic pillars. The dossier's "leave" was based on "no items/methods to weave" — but the PHASE2-BRIEFING explicitly overrides that for loot-seed candidates. Worth advancing both seeds for Gate 2 review.

## create_confectionery   [anchors: Create, survival (2)]
- Already 2 anchors with a clear M-09 economy bonus candidate in the dossier itself.
- REWORK check: Create (cocoa→chocolate chain entirely through Create crushing/mixing/compacting/filling/pressing) + survival (candy effects, hot chocolate regen, food supply) — both are genuine, load-bearing, not incidental. OK.
- from: create_confectionery (chocolate bars / candies / hot_chocolate) | via: numismatics sell (Trading Floor stall) | to: economy | motif: M-09 | power: mid (multi-step processed food) | tone: ok — "of course a chocolate factory's output is a luxury commodity" | verdict: ACCEPT | hook: Chocolate and candy are processed luxury goods — cocoa beans through multiple Create machines into chocolate fluid into cast bars and effect candies — exactly the high-effort consumable that commands a price at a Trading Floor stall.

- from: create_confectionery:hot_chocolate (Regeneration grant) | via: farmersdelight:cooking or extradelight:melting_pot as an intermediate step | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: hot_chocolate already routes through Create mixing/filling (inbound); adding another cooking method (FD/ExtraDelight) on top creates redundant parallel processing paths. The survival anchor is already captured by the food-effects side. No loop advance from adding a second cooking route.

- from: create_confectionery (chocolate brick blocks — deco set) | via: create:crushing back to raw + XP nugget (M-04 Create recycles deco) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Chocolate brick deco blocks (chocolate_bricks, caramel_bricks, gingerbread_bricks) being crushable back into cocoa powder/raw chocolate + an XP nugget is the expected Create lossy-recycle pattern — satisfying and coherent, prevents deco from being a dead-end.

- New link: could a seasonal reagent drive create_confectionery? M-16 — certain flavors (e.g. peppermint/gingerbread) being only available during winter in Serene Seasons? Red-team: the mod currently has no seasonal-crop dependency; forcing peppermint seasonality would require adding a new crop not in the mod. The candy_cane (if tied to a peppermint crop) could work, but that would need a new crop mod or KubeJS to add the seasonal input — it is additive new-ingredient design, not a weave of existing materials. Flag as a future recipe note rather than a Phase 2 candidate. Reject as too additive.
- from: create_confectionery:candy_cane / candy_cane_block | via: seasonal crop gate (Serene Seasons winter) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: requires adding a peppermint/seasonal crop as input that does not currently exist in the pack; additive ingredient design, not a method-routing of existing materials. Not a Phase 2 weave candidate (would need new content authoring beyond a recipe change).

## ponderjs   [anchors: support/Create-tooling (1)]
LEAVE — genuine zero-content authoring tool: 0 blocks, 0 items, no recipe-types. Extends Create's Ponder documentation system via KubeJS scripting; no in-world mechanics, no materials, no loop position. Cannot hold a pillar anchor.

== CHUNK COMPLETE ==


