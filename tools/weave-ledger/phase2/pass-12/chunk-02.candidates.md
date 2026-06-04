# Phase 2 candidates — chunk-02 (pass-12, context-fed)

## createpickywheels   [anchors: Create (1)]

Existing rows converge on: (a) behavioral survival flavor (biome-gates power placement), (b) M-16 seasonal-reagent attempted but rejected. No ACCEPT rows exist — all are REJECT or no-motif behavioral notes.

- NEW: from: windmill placement constraint (must be above tree-canopy / open-air) | via: create:deploying (no recipe route — behavioral-only) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: createpickywheels has zero items/blocks; there is nothing to route through any method. The biome-gate IS the contribution — it belongs purely to the survival flavor of the Create pillar (a rule about how Create power is earned from the world). Its 2nd pillar is genuinely not available via method-pull; leave is correct.
- NEW: CHALLENGE to any M-16 classification — existing rows tag the windmill/water-wheel constraint under M-16 (seasonal reagent). M-16 requires a material gated by season; createpickywheels gates power by *biome/geography*, not season. Applying M-16 here is a mis-motif. The correct read is: this mod deepens the *Create* pillar's survival flavor with no independent second pillar. Record as LEAVE — no items, no method surface, biome-gate is a Create-internal behavior, not a seasonal-reagent weave.

## travelersbackpack   [anchors: survival (1)]

Existing rows: M-06 sequenced assembly for netherite/dragon packs (times=4 ACCEPT), M-20 pressing for blank/tank upgrades (times=2 ACCEPT), upgrade modules via backpack_upgrade method (times=2 ACCEPT), aeronautics passive logistics (REJECT × multiple).

- NEW: from: travelersbackpack themed mob-variant packs (dragon, netherite, blaze, ghast…) | via: create:item_application (M-20 deploy-application) — apply a mob-specific drop (dragon scale / blaze rod via M-02 drop) onto a base pack at a deployer station, unlocking the themed cosmetic skin | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the blaze pack glows because you pressed a blaze rod into it; the dragon pack needs a scale — the theme earns its look through Create's deploy step, not a crafting table slap.
- NEW: from: travelersbackpack:backpack_tank (the integrated fluid-buffer item) | via: create:filling (pipe fluids into a carried tank via Create's filling station) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fill your traveling tank at a Create fluid pipe before a long expedition — the backpack becomes a field flask for whatever your factory makes (lubricant, lava, water).
- CHALLENGE to M-06 netherite/dragon sequenced-assembly row: the existing times=4 ACCEPT is correct in principle, but scoping "netherite AND dragon" as one row blurs power-tier. The netherite pack (mid-endgame) fits M-06 well. The dragon pack is boss-gated (ender dragon), which is M-15 territory (boss-key unlock) — the dragon-themed pack should reference M-15 with a dragon-scale input, not just a sequenced-assembly chain. Recommend splitting into two separate weaves at authoring time.

## spawn   [anchors: survival (1)]

Existing rows: M-12 FD cooking + Create milling for crab/clam (times=2 ACCEPT), M-09 numismatics sell clams/exotic catches (times=5 ACCEPT), createfisheryindustry bait_trap REJECT (times=6).

- NEW: from: spawn:ant_pupa / ant_mound byproducts (ant colony ambient drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: ant pupae are larval life-energy — transmuting them in spirit fire yields a low-grade essence; small yield, everyday drop, scales appropriately shallow.
- NEW: from: spawn:algal_reefstone / algal_sand / blasted_sandstone (deco stone blocks, the mod's structural palette) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the reefstone and blasted sandstone recycle to gravel and sand byproducts — identical logic to other deco-stone crushes; small XP bonus, lossy.
- CHALLENGE to times=6 REJECT on createfisheryindustry bait_trap: the rejection reason ("seafood general — REJECT") appears to be a blanket rejection on the basis of coherence with a non-obvious mod, but `createfisheryindustry:bait_trap` IS in the methods palette and spawn's clams/fish are exactly the kind of aquatic catch bait traps would use. The real issue is whether createfisheryindustry is in the pack. If it is, this should be revisited as M-12 (processing-chain pull, create-adjacent). If it is not installed, the rejection stands — verify pack membership before dismissing.

## mutantszombies   [anchors: survival (1)]

No existing rows in CANDIDATES.md.

- NEW: from: (no items — spawn eggs only, loot=no) | via: (none — no drops, no recipe surface) | to: n/a | motif: no-motif | verdict: LEAVE — zero drop items, zero recipe-type surface; no method can pull from this mod. Its contribution is purely difficulty texture on the survival pillar. Forcing a weave here is the definition of the failure mode this protocol warns against.

## bettermineshafts   [anchors: survival (1)]

No existing rows in CANDIDATES.md.

- NEW: from: (no items — structural overhaul only, loot=no, uses vanilla mineshaft loot tables) | via: (none) | to: n/a | motif: no-motif | verdict: LEAVE — pure worldgen/structure overhaul; no items, no blocks of its own, no loot tables to inject into. Its indirect benefit (better mineshafts expose scarce ores) feeds the Create/economy pillars but through no hookable method. The correct record is leave with note: if loot-table injection is ever wanted, point at vanilla mineshaft loot (not this mod's tables, which don't exist).

## ars_n_spells   [anchors: magic (1)]

No existing rows in CANDIDATES.md.

- NEW: from: (no items — 0 blocks / 0 items; operates on mana data, not materials) | via: (none — its inscription recipes are datapack-defined but not a registered recipe type) | to: n/a | motif: no-motif | verdict: LEAVE — this mod IS already a weave (Ars Nouveau ↔ Iron's Spellbooks mana unification), just an internal magic↔magic one. It has no item or method surface for a 2nd pillar. Correct: record as an internal M-01 strengthener (it deepens the existing magic pillar) and leave; do not force a Create or economy edge.

## create_ironworks   [anchors: Create (1)]

Existing rows: M-08 tin→coin ACCEPT (times=9 STRONG), M-23 steel plate→aeronautics ACCEPT (times=4), M-24 bronze plate→drivetrain ACCEPT (times=2–4). Magic rows (M-10, M-11) all REJECTED.

- NEW: from: create_ironworks:rose_quartz_block (an overlooked block in the item list — rose quartz is a Create ingredient) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the rose quartz block is a compacted form of a Create ore-processing byproduct; crushing it back is M-04 deco-recycle — natural, lossy, no surprise.
- NEW: from: create_ironworks:tin_ingot / bronze_ingot (scarce refined metals, c:ingots/tin and c:ingots/bronze) | via: occultism:spirit_trade (the miner acquires scarce metals from the spirit dimension) | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: a player specializing in Occultism can use spirit-trade/miner to acquire tin without needing to be in the right biome — magic as a logistics provider for metals (M-18 summoned-spirit logistics). Distinct from the M-08 coin-mint row; this is the acquisition seam, not the selling seam.
- CHALLENGE to M-23 and M-24 "already accepted" merging: the existing rows correctly flag both steel plate (M-23 airframe) and bronze plate (M-24 drivetrain) as ACCEPT. However, all rows treat these as interchangeable. A subtlety: steel = structural alloy (M-23 — the hull bears the load), bronze = mechanical component (M-24 — bearings/gears in the drivetrain). If both are used in the same aeronautics recipe, it blurs which tier of ship they gate. Recommend: at authoring time, assign steel plates to hull/frame recipes (large/heavy ships) and bronze plates to engine/control recipes (lighter maneuvering components), so depth scales with ship tier as M-23/M-24 intend.

## createimmersivetacz   [anchors: Create (1)]

Existing rows: M-09 ammo sell ACCEPT (times=9), M-06 gun_barrel assembly REJECT, M-24 firing mechanism → propulsion REJECT (correctly — guns ≠ propellers), M-12 nitropowder REJECT × many.

- NEW: from: createimmersivetacz:twelve_gauge_shell (bulk ammo, the factory output) | via: bountiful decree (bounty objective requiring bulk ammo delivery) → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: an arms-supply bounty — the colony or a faction NPC posts a standing order for X shells; the ammo-factory player fills it for coin. Distinct from M-09 (which is open-market sell); M-14 is a structured purchase contract, which fits better for bulk military supply.
- NEW: from: createimmersivetacz:nitropowder_bucket (fluid, mid-tier explosive intermediate) | via: createbigcannons:big_cartridge_filling (CBC's filling deployer — nitropowder is a propellant charge) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the createimmersivetacz nitropowder fluid is chemically identical to what fills a big cannon cartridge; routing it through CBC's cartridge assembly adds depth to the cannon-ammo chain without a new recipe type — the factory player who runs TACZ ammo also feeds the artillery crew. NOTE: verify CBC is in the pack (createbigcannons namespace is in the methods-palette, so YES).
- CHALLENGE to the blanket M-12 / TFMG nitropowder rejections: multiple passes rejected "nitropowder → tfmg:distillation" for coherence reasons. The rejection is correct — distillation refines crude fluids into clean ones; it doesn't synthesize explosives. But the underlying instinct (nitropowder is a *chemical* that should interact with TFMG's chemistry chain) is sound. The better route is tfmg:vat_machine_recipe (the vat processes chemical reactions), which one row noted but also rejected. The vat rejection reason wasn't recorded — if the actual issue is "TFMG vat doesn't accept fluid inputs of this type," REJECT stands; if it was just a convergence casualty, revisit at authoring time.

## drones   [anchors: aeronautics (1)]

Existing rows: M-05 iron_rotor via create:mechanical_crafting ACCEPT (times=8), M-06 ion_thruster via create:sequenced_assembly ACCEPT (times=8), M-09 pocket_drone sell REJECT (times=10).

- NEW: from: drones:ion_thruster (the top-tier thrust component) | via: create_new_age:energising (the ion thruster is a charged-particle device — energising it to unlock its ion mode is thematically coherent) | to: create | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster isn't a flywheel — it needs an electromagnetic charge pass from the Energiser before it can function; Create New Age gates the highest drone tier behind its electric infrastructure. Complements M-06 (sequenced assembly builds the shell; energising activates it).
- NEW: from: drones:drill (the mining-ability block, used as a drone body component) | via: create:sequenced_assembly (a drill block needs precision-machined tips, assembled in a chain) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: drone drills should require the same machining care as any Create drill head — a short sequenced chain to precision-tip the drill before it can be embedded in a drone frame. Adds depth to the mining-drone path specifically.
- CHALLENGE to M-09 pocket_drone sell REJECT (times=10): the rejection is correct by the "don't force" rule — a complete drone is too variable (any blocks can compose it) to price via numismatics. However, the rejection reason in most passes was vague ("too complex/variable"). The sharper reason: a pocket_drone's value is entirely determined by the blocks it was assembled from, making a fixed sell-price incoherent unless a *specific* drone config is sold (e.g. a "standard mining drone" blueprint). At authoring time, if a fixed configuration is locked in via a named item or a limited recipe, M-09 could be revisited.

## friendsandfoes   [anchors: survival (1)]

Existing rows: M-02 crab_claw magic ACCEPT (times=8), M-04 copper deco crushing ACCEPT (times=3), M-10 crab_claw REJECT × multiple, M-02 Wildfire/Illusioner drops REJECT, copper_golem_head crushing REJECT.

- NEW: from: friendsandfoes:crab_claw | via: ars_nouveau:potion_flask (the claw already brews a reach-extension potion in vanilla brewing; converting it to an Ars potion flask extends it into the magic potion system without needing imbuement) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: the claw is already a brewing ingredient — the Ars potion flask route is the narrowest viable bridge from vanilla-brew to the magic system without over-gating an everyday drop. NOTE: this is a lighter touch than the M-02 imbuement path (which was correctly rejected at times=3 as too thin); potion_flask is a processing step, not an infusion.
- NEW: from: friendsandfoes:copper_button (oxidizable copper buttons — unique to this mod, 4 oxidation stages, waxable) | via: create:splashing (splashing oxidizes copper; splashing a waxed copper button would de-wax it first, or splashing an exposed button advances weathering) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's water splashing controls copper weathering on pipes and sheets — naturally extends to these copper buttons; a player running a copper-decoration build can automate oxidation stages on the conveyor. Distinct from the M-04 crushing row (which recycles; this processes in place).
- CHALLENGE to M-02 Wildfire/Illusioner drop REJECT (times=3, ✓): the rejections cite "too thin" or "no coherent drop item documented." The dossier confirms Wildfire and Illusioner are hostile-with-loot but doesn't name the drops. Before permanently closing this, verify in-game: if Wildfire drops blaze-type material or Illusioner drops a magical tome-like item, M-11 (spirit-fire transmutation) or M-02 (mob-drop reagent sink) could have a real hook. The rejection is reasonable given current evidence but should be flagged as "revisit once drop items are confirmed."

== CHUNK COMPLETE ==
