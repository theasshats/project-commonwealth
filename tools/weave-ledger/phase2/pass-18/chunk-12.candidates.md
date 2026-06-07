# Phase 2 candidates — chunk-12

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — zero content surface: client HUD overlays only (light-level X, chunk grid, JEI-search dim), no items, no blocks, no loot table, no material flows. Nothing to route through any method.

## accessories_compat_layer   [anchors: support (1)]
LEAVE — pure API translation shim (Curios/Trinkets → Accessories slot system). No items, no blocks, no loot, no material surface. The wearables that could weave live in the host mods; this layer is invisible plumbing.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — movement-physics tweak only (ladder/vine climb speed, jump-while-climbing). No items, no blocks, no loot, no material flows. Genuine zero-content behavior mod; nothing to route.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is a desert forage item; milling it into a dye pigment or food dust is exactly the "raw forage → processed good" path Create mills crops through — natural and discoverable
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps are bulk organic blocks; milling them yields mushroom powder / dye intermediate the same way vanilla mushrooms can be processed — fits the Create-spine foraging economy
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is an everyday renewable forage drop in desert biomes — it's too abundant and low-effort to be a meaningful luxury trade good; M-09 requires "high-effort consumable" (wine, cheese, processed crop). The raw fruit alone fails the bar; a processed downstream (e.g. milled into powder then crafted into a jam via extradelight:dynamic_jam) could qualify but that edge lives on the downstream mod, not here.
- from: dynamictreesplus:mushroom_branch | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is the "deco block crushes back to raw/gravel + XP nugget" motif; mushroom branches are organic growth byproducts, not deco blocks placed by the player. Applying M-04's lossy-recycle logic to organic wood-like branches doesn't fit the motif's anti-arbitrage rule — it would create a free XP farm from mushroom farms.
REWORK: existing anchor (survival only) is the floor. The two ACCEPT items above (saguaro fruit milling, mushroom cap milling) each add Create as a 2nd anchor. Both are same-motif (M-12) so only one needs to ship to elevate the mod; the mushroom-cap route is the higher-value one (bulk block → processed dye/ingredient) and should be prioritized.

## ctl   [anchors: Create, aeronautics (2)]
OK — connections sound. CTL is built via create:sequenced_assembly (Create anchor) and its entire purpose is train/contraption lighting (aeronautics anchor). Already at the 2-pillar goal and the links are load-bearing and thematically tight, not arbitrary.
- from: ctl:htlb_block / ilb_block | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: train lamp blocks are functional build components, not luxury consumables — selling them as trade goods is plausible but doesn't advance the loop meaningfully; M-09 applies to consumable luxury goods (wine, cheese), not durable crafted parts. A forced economy edge here would be arbitrary.

## lithium   [anchors: support/performance (1)]
LEAVE — server/world-tick performance optimizer (mob AI, block ticking, physics), registers zero items/blocks/loot. Pure behavior optimization; genuine zero-content library — nothing to weave through any method.

## emojitype   [anchors: support/client QoL (1)]
LEAVE — client-side chat input helper inserting Unicode emoji via :shortcodes:. Zero items, blocks, loot, or material flows. Pure UI convenience; nothing to route.

## edf-remastered-5.0-beta4   [anchors: survival/boss-difficulty (1)]
- from: (dragon loot table) | via: loot-seed | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: the remastered dragon is a substantially harder endgame encounter (500 HP, multi-phase); seeding a high-value coin payout or rare trade-currency fragment into the dragon's loot table turns a victory into a meaningful economic event — the harder the fight, the richer the reward, advancing the loop from survival-danger directly to economy
- from: (dragon loot table) | via: loot-seed | to: Create/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the remastered dragon fight as the gate for a top-tier Create or magic component — seeding a boss-key item into the loot table makes conquering the End a prerequisite for the pack's highest-tier tech/magic, which is thematically tight (the ultimate vanilla boss guards the ultimate pack unlock)
- from: (dragon loot table — mob drop) | via: loot-seed | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: M-02 is for isolated mob/boss drops given a use as magic/economy input; this is essentially the same move as the M-15 ACCEPT above but framed through the magic-reagent angle. It isn't independently wrong, but it is redundant with the M-15 accept — a single loot-seed edit can fulfill both in one action. Log as a note that the seeded item should be usable as a magic reagent to double-dip, not as a separate candidate.
NOTE: edf-remastered has loot=yes (dossier confirmed) — do NOT treat it as "no content"; the loot table is the weave surface. The two loot-seed accepts (M-08 coin, M-15 boss-key) together give this mod a meaningful survival+economy+Create/magic web even though it registers zero items of its own.

## dragonlib   [anchors: support/library (1)]
LEAVE — pure code library/framework (GUI, networking, multiloader helpers) for MrJulsen's mods. The lone dragonlib:dragon block/item is a confirmed dev/test artifact with no player-facing role. Zero weave surface.

## accessories   [anchors: support/library (1)]
LEAVE — data-driven accessory slot API. No player-facing items, no loot, no material flows of its own. The wearables that could weave live in dependent mods; this is invisible slot-framework infrastructure.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium / c:ingots/steel | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: uranium is a regionally scarce ore requiring a long Create processing chain (crush→mix→enrich) to become reactor fuel; that refined scarcity naturally mints into a high-value coin — the most expensive fuel in the pack becoming the most valuable currency unit advances the loop from Create-production straight into economy
- from: createnuclear:steel_block (c:ingots/steel) | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Create Nuclear's steel (shared c:ingots/steel tag) is the canonical fabricated structural alloy; requiring steel plate/beam for mid-to-high-tier Aeronautics airframes makes reactor-grade metallurgy matter for fleet construction, linking the industrial tier to ship-building depth
- from: createnuclear:reactor output (SU) | via: createaddition:charging | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: a fission reactor producing massive SU can power a CreateAddition generator → FE → charging station to charge magic foci/tools; the reactor as the pack's most powerful magical charger is thematically coherent (atomic age feeding arcane tech) and adds a survival-pressure reason to build a reactor beyond raw SU
- from: createnuclear:autunite (glowing ore) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: autunite is a radiation-hazard ore — its fiction is nuclear decay, not arcane attunement. Running it through an Ars imbuement apparatus would clash with the mod's industrial-atomic vibe; the thematic tone is a meaningful clash (radioactive rock ≠ magic reagent). Red-team survives: no player would nod at "I feed glowing uranium ore into a magic ritual."
- from: createnuclear anti-radiation armor | via: survival (radiation as hazard) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the survival-pressure angle (radiation damage as environmental hazard) is real but it's a config/mechanic angle, not a method-routing — there's no motif for "mod adds environmental hazard that feeds survival pressure." Filed as no-motif; don't invent one. The mod already drives survival-pressure through its hazard mechanic passively; no recipe weave is needed.
REWORK: existing anchor is Create (1), which is the floor. The three ACCEPTs above elevate it to Create+economy (M-08 coin) + aeronautics (M-23 steel hull) + magic (M-17 FE charging) — effectively all four loop pillars touched, which is strong but coherent: this is an endgame power mod whose outputs (steel, SU, coin) are load-bearing at every tier.

## moblassos   [anchors: survival (1)]
- from: moblassos:golden_lasso | via: aeronautics logistics | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the aeronautics synergy (carry mobs onto ships, stock remote MineColonies) is a real utility connection but it's behavioral, not a method-routing, and there's no established motif for "item enables mob logistics." No-motif → reject-for-review; don't invent a motif here. The mod is fine as a 1-anchor survival convenience tool.
- from: moblassos:hostile_lasso (captures weakened monsters) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the hostile lasso captures monsters at <50% HP — you could imagine the captured mob being transmuted via Occultism ritual into an essence. But the lasso holds a *live mob entity*, not a drop item; M-11 routes *drops/materials* through spirit_fire, not living captured mobs. The mechanic doesn't map onto the motif cleanly; the tone is borderline (capturing live mobs for ritual use is flavourful but the mod's vibe is "pokeball logistics," not occult harvesting). Reject — the mechanic gap is real.
LEAVE — no coherent 2nd anchor found after method-pull. The mob-transport utility is genuine but purely behavioral (no material output to route through any machine). Confirm as 1-anchor survival QoL.

## trashslot   [anchors: support/client QoL (1)]
LEAVE — inventory trash slot UI; deletes items. Zero items, blocks, loot, or material flows. Genuine zero-content client convenience mod; nothing to route.

## ldlib2   [anchors: support/library (1)]
LEAVE — UI/rendering/data-sync library (GregTech lineage). The two registered blocks (renderer_model, test_2) are confirmed dev/test artifacts. Zero player-facing content; pure developer infrastructure. Genuine zero-surface library.

## jade   [anchors: support/client UI (1)]
LEAVE — client "what-am-I-looking-at" HUD tooltip. Zero items, blocks, loot, material flows. Pure informational overlay; nothing to route through any method.

## fluid   [anchors: Create, aeronautics (2)]
OK — connections sound. Create:Fluid's parts are built through Create (compacting/deploying/mechanical_crafting/mixing) and its centrifugal pump + smart interfaces are fluid logistics tooling — the plumbing backbone for both base infrastructure and ship fluid systems. Both anchors are tight and load-bearing.
- from: fluid:centrifugal_pump | via: aeronautics structural recipe (fuel-line / coolant circuit on ship) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: fluid:centrifugal_pump is a fluid-movement block, not a mechanical drivetrain component (rotor, bearing, engine block, gearset) — M-24 specifically covers *drivetrain/control* components feeding Aeronautics propulsion/control surfaces. Using a pump in a coolant loop on a ship is plausible behavior but not a recipe weave, and it's already captured under the existing aeronautics anchor. Not a new weave.
- from: fluid:smart_fluid_interface | via: Create fluid networks on trains/ships | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: while smart fluid interfaces improve ship plumbing, this is behavioral integration, not a recipe-routing weave, and there's no established motif for "fluid logistics block enables ship operation." No-motif → reject; the aeronautics anchor already covers this mod's role.

## blockui   [anchors: support/library (1)]
LEAVE — XML-based UI framework library, dependency of MineColonies/Structurize. Zero player-facing items or content. Pure developer GUI infrastructure; nothing to weave.

## justenoughbreeding   [anchors: support/QoL (1)]
LEAVE — JEI plugin adding breeding-info categories (what items each mob needs to breed). Zero items, blocks, loot, material flows. Pure recipe-viewer data display; nothing to route through any method.

## betterstrongholds   [anchors: survival (1)]
- from: (stronghold chest loot tables) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: YUNG's strongholds are richer than vanilla with 15+ room types and custom chest loot; seeding a numismatics coin (or coin-fragment) into the stronghold's treasure chests makes dungeon-delving a direct economy on-ramp — danger-pressure produces economic reward, advancing the loop cleanly from survival/danger to economy
- from: (stronghold chest loot tables) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the stronghold is the pack's "ancient knowledge" structure; seeding a magic reagent (e.g. an Ars Nouveau source gem, an Occultism spirit essence, or an Iron's Spellbooks arcane essence) into its hidden-room chests is thematically tight — players exploring the End gateway structure find remnants of the arcane, not just iron swords
- from: (stronghold chest loot tables) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is a boss-key unlock (boss drop gates complex recipe); betterstrongholds is a structure, not a boss. Its loot tables have chests but no boss fight — putting a high-tier Create component in a stronghold chest doesn't advance the loop the same way a boss-gated drop does (no danger gate, just exploration). The two accepted loot-seeds (M-08 coin, M-02 magic reagent) are the coherent moves; a Create-key item in a chest is under-motivated and would trivialize the boss-key design.
REWORK: existing anchor (survival) is the floor. The two loot-seed ACCEPTs (M-08 coin, M-02 magic reagent) raise this to survival+economy+magic — a 3-pillar web from a single datapack loot edit. This is exactly the "loot-bearing structure mod is NOT a LEAVE" case the briefing calls out.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork:molten_<metal> fluids (processed scarce metals) | via: numismatics mint | to: economy | motif: M-08 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: createmetalwork is the pack's unified high-yield ore path — every scarce regional metal flows through its crush+melt pipeline before it mints into coin; the processed molten form (not raw ore) is the natural feedstock for the coin press, which rewards building the full Create metalworking chain before monetizing your ore
- from: createmetalwork:crushed_raw_materials/* (magic-mod metal ores: palladium/occultism silver) | via: create:crushing → createmetalwork molten pipeline | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: createmetalwork already registers crushed forms for palladium and other magic-adjacent metals; routing magic-mod ores through the shared Create crush+melt doubling is thematically sound (Create is the spine, magic uses its metalwork) and reduces isolated ore clusters into one coherent web
- from: createmetalwork:molten_steel | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is the canonical structural alloy; createmetalwork produces the molten steel that casts into steel ingots/plates used in Aeronautics hulls and frames — the foundry that feeds the shipyard
- from: createmetalwork:molten_netherite | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is the sequenced-assembly keystone for endgame multi-stage chains through derpack:incomplete_* parts; createmetalwork's molten netherite is already an input into its own compacting chain — wrapping it in a separate sequenced_assembly step doesn't add a new connection, it just deepens an existing Create-only chain. This is Create depth, not a cross-system weave. Reject as not a new anchor.
REWORK: existing anchor is Create (1). The three ACCEPTs (M-08 economy, M-03 magic ore doubling, M-23 aeronautics steel) lift this to Create+economy+magic+aeronautics — all four loop pillars, appropriate for a pack-wide ore-processing hub. The economy edge (M-08) is the highest priority since createmetalwork is literally the processed-scarcity → coin pipeline.

== CHUNK COMPLETE ==

