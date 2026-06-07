# Phase 2 candidates — chunk-01

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul Dust and Soul Crystal from the Otherside — a dimension themed around death and silence — transmuting into occultism essences through spirit-fire is a "of course" pairing; both inhabit the soul/death space, and the transmutation feeds the magic web with a uniquely dangerous-to-acquire reagent.
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Warden's Heart of the Deep is an endgame boss drop (gate item for the Otherside dimension itself); it is thematically a "deep primal force" that Ars Nouveau imbuement refines into a high-tier source material — mob-drop reagent sink, endgame tier, naturally multi-step depth justified.
- from: deeperdarker:warden_carapace | via: create:crushing | to: create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Warden Carapace as a sculk-infused structural material crushed into a refined processing intermediate (e.g. echo-dust or a sculk-plate byproduct) that feeds a Create recipe; reinforced organic-tech material pulled into the production spine.
- from: deeperdarker:gloomslate / sculk_stone blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: The dark-stone building palette (gloomslate, sculk_stone) recycling back through Create's crusher is a clean deco-recycle loop — standard M-04, lossy, already partially wired per dossier.
- from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Amber is an Otherside mineral with no current use; its "preserved life within stone" theme maps to arcane infusion — foreign material refined into a magic intermediate; thematically organic-frozen matter becoming arcane reagent makes sense.
- from: deeperdarker soul/sculk materials (general) | via: numismatics coin as economy anchor | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: "Otherside-only materials are scarce and sellable" is bare M-09 (retired) — the sellable loop-endpoint, not a demand-gating weave. Regional scarcity (M-30) would apply if these were region-locked ore-gen materials, but the Otherside is a dimension accessible by anyone who finds a Warden — the scarcity is danger-gated (already survival), not region-locked.

REWORK: The dossier's 2nd-anchor candidate for economy (M-09 luxury good → coin) is correctly flagged WEAK; M-09 is retired and this should be explicitly rejected as a bare sell link rather than treated as a candidate. The magic routing (M-11/M-02) and Create routing (M-04) are sound. No existing woven connections to rework — the mod is 1-anchor, all candidates are new proposals.

---

## mffs   [anchors: Create, survival (2)]

OK — connections sound. The dossier documents an already-authored gold-standard weave: `focus_matrix` gated on `create:electron_tube` (M-05 native-method gating) and `projector`/`interdiction_matrix` as `create:sequenced_assembly` chains through `derpack:incomplete_*` parts (M-06 sequenced-assembly keystone). The TFMG steel mid-tier is also noted. At 2 anchors (Create + survival/base-defense), no further weave is needed.

- Potential 3rd link considered: MineColonies colony-defense via M-28 (colony route) — a force-field module produced cheaper via colony. Power tier is endgame, so "cheaper via colony" would be a meaningful alternate path for settlement-builder players. REJECT: the force field is a base-defense active machine, not a basic — the MineColonies cheaper-basics M-28 is for basics, not flagship endgame machines. A colony-built alternative to the MFFS projector would flatten the Create-gated sequenced-assembly gating that gives it depth; resist.

---

## accessories   [anchors: support (1)]

LEAVE — zero-surface library/API. No items, no blocks, no loot, no recipe-types; it provides the slot framework other mods register into. The wearables that could be woven live in the mods that use it. Nothing to route.

---

## almostunified   [anchors: support (1)]

LEAVE — recipe-graph plumbing infrastructure. No items, no blocks, no loot. It operates on the recipe graph itself (canonicalizing duplicate-material outputs) — there is no material surface to weave. Structural support role; the warning about galosphere silver≠palladium is worth preserving (in the dossier) but is not a weave candidate.

---

## crash_assistant   [anchors: support (1)]

LEAVE — client diagnostic utility with zero items, blocks, or methods. Pure crash-log GUI tool; no content surface. No weave possible.

---

## openpartiesandclaims   [anchors: support (1)]

LEAVE — server-protection/social framework with zero items, blocks, or methods. Chunk-claim + party permissions are behavioral infrastructure; nothing to route.

---

## quark   [anchors: support (1)]

- from: quark block/deco variants (vertical slabs, polished/brick variants, hedges, crate blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's large vanilla-plus building palette (hundreds of stone and wood deco blocks) recycling back to raw/gravel via the crusher is the exact deco-recycle pattern; lossy, one light step for everyday blocks — standard M-04. Quark also ships `block/storage_blocks/` for many crops/materials that Create's mixing/compacting could reference.
- from: quark:apple_crate / storage_block crops (c:block/storage_blocks/apple, carrot, potato etc.) | via: create:compacting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark storage-block crates (crop blocks) compacting via the Mechanical Press into a concentrated paste/juice intermediate feeds the Create-food chain; crop blocks as a bulk-form feedstock for Create processing is a clean light-step weave.
- from: quark:ancient_wood / Glimmering Weald cave blocks | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The Glimmering Weald is a glowing, alien underground biome — its ancient wood and glimmer-stone have an arcane aesthetic that translates naturally into arcane infusion; foreign cave material refined into a magic reagent. Light-step for the wood; mid for crafted items.
- from: quark:ancient_bookshelf / bookshelves | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's bookshelf variants (incl. the Ancient bookshelf) are a natural component for an Ars Nouveau enchanting apparatus setup; bookshelf blocks amplify the apparatus — a direct mechanical use already implied by the vanilla-plus enhancement aesthetic.
- from: quark deco blocks → Create recycling | via: create:mechanical_crafting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Mechanical Crafting is for complex multi-part items, not recycling/recycle flows — wrong method for the M-04 motif. The correct method is create:crushing (already accepted above). Deduplicate.

---

## detect-afk-1.2.2   [anchors: support (1)]

LEAVE — server-side AFK detection utility. No items, blocks, or methods. Purely behavioral; no content surface to weave.

---

## miningspeedtooltips   [anchors: support (1)]

LEAVE — client tooltip display mod. No items, blocks, or recipe-types. Reads existing tool stats and renders them; nothing to route.

---

## sounds   [anchors: support (1)]

LEAVE — client audio polish mod. No items, blocks, or methods. 170+ replacement SFX, YACL-configured; purely cosmetic audio with zero material surface.

---

## tidal-towns-1.3.4   [anchors: survival (1)]

The dossier flags this as structure-only with loot=no (grounded auto-check). However, the dossier itself notes vanilla clients can join, implying the structure uses vanilla loot tables (chests with vanilla/villager loot). The grounded count says loot=no but the auto-digest may not see loot tables that reference vanilla pools directly.

- from: tidal-towns ocean village structures | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Floating ocean towns are a natural place to seed Numismatics coin (player-minted currency) into their chest loot — the towns are trading posts at sea; finding coin in a village chest makes thematic sense as "wealth someone left behind," seeding the currency medium into the world's discovery layer. Via: loot-seed (datapack edit to the structures' chest loot tables).
- from: tidal-towns ocean village structures | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: An isolated ocean town is a plausible site for a magic reagent in chest loot (a bottled alchemical compound, a spell fragment, or a source gem shard) — adventure flavor connecting exploration to the magic web's reagent supply. Light step; not deep integration, but a discovery pull. Via: loot-seed.
- from: tidal-towns ocean village structures | via: loot-seed | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ocean towns surrounded by deep water are a strong thematic reason to need naval/aeronautical travel — seed a nautical chart, an aeronautics component schematic, or a logistics-required trade good into the village loot to make the town an aeronautics destination worth the voyage. Via: loot-seed.
- from: tidal-towns ocean village → "an economy node at sea" | via: loot-seed seeding coin + trade goods | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: M-33 is service-for-hire (labor between players), not a loot-table placement — the loot-seed for M-08 already covers the economy anchor cleanly. Duplicate framing.

REWORK: The dossier's 2nd-anchor candidate says "leave — no items/methods." That is over-conservative: `loot=no` in the auto-digest likely means no registered custom loot tables (structure uses vanilla pools), but that is precisely where a loot-seed Phase-3 action is needed. The correct ruling is to ACCEPT the loot-seed candidates above, not leave.

---

## naturescompass   [anchors: support (1)]

LEAVE — single-item biome-finder utility. The `naturescompass:naturescompass` item and its model variants are information tools only; no processing, no material output, no loot. Nothing to route. The dossier's LEAVE ruling is correct.

---

## lithostitched__tectonic-3.0   [anchors: support (1)]

LEAVE — pure terrain-generation worldgen overhaul. No items, no blocks, no loot, no recipe-types. Shapes terrain density functions; thematically amplifies regional scarcity (bigger landmasses spread ores further) but there is no recipe edge to author. The dossier's LEAVE ruling is correct.

---

## hpm   [anchors: aeronautics (1)]

- from: hpm:pirate_cutter_item / cuttermilitariseditem (ship items) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Wooden sailing ships gated on brass/mechanical components from Create — the cutter's hull and rigging incorporate precision-machined parts — moves the mid-tier ship into the Create spine as a native-method gated product. The war cutter (militarised) gains extra depth as a more complex crafting-table recipe with Create parts.
- from: hpm:corvette_steamship_item (steamship, currently WIP) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The corvette steamship is the endgame vessel — a WIP item that maps perfectly to a sequenced-assembly chain through `derpack:incomplete_steamship_*` parts; this is the flagship ship build milestone, exactly where deep multi-step chains belong.
- from: hpm:hand_cannon / hand_mortar | via: create:pressing + tfmg:casting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Handheld cannons built from Create-pressed steel plates and cast TFMG cannon barrels — the weapons require proper machined components, tying naval combat to the production spine.
- from: hpm:largehull / smallhull (hull components) | via: create:mechanical_crafting | to: create | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Structural hulls for ships are exactly what M-23 (structural alloy → airframe/hull) covers — a fabricated Create-produced structural plate/beam as a required input for the ship hull components. Makes wooden ships cost real production.
- from: hpm ships as high-value trade goods | via: player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: A finished cutter or warship is a high-value trade item a shipwright sells to traders/explorers; the combat-supply angle (M-34) — the shipwright farms/builds the dangerous-to-craft vessel and sells to those who need transport/combat power without building it themselves. Demand is real: aeronautics players need sea-capable transports.
- from: hpm:cannonball / mortar_ball | via: create:compacting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cannonballs are consumable munitions — manufactured via Create's compacting/pressing from iron/steel gives them a supply-chain hook; repeated consumption (M-26 consumption sink) means the munition chain never zeroes out. Light step, justified by the everyday-use tier.
- from: hpm overlap with Create Aeronautics / Create Big Cannons | verdict: REJECT (CURATION FLAG) | reason: The dossier correctly flags role-split as a thunderdome question, not a weave. hpm ships are vanilla-physics boats, not Create Aeronautics physics-ships — coexistence is possible but the roles overlap (both are "ship transport"). This is a curation/keep-or-cut decision, not a recipe edge to propose.

REWORK: The dossier's 2nd-anchor economy candidate (M-08/M-09) is split: M-08 is "player-minted currency" (coin-pressing, not a direct output of selling ships) and M-09 is retired. The correct framing is M-34 (combat-route supply / trade in finished vessels), which is accepted above. The bare "sellable ship → coin" framing should be rejected.

---

## entity_model_features   [anchors: support (1)]

LEAVE — client rendering engine for OptiFine CEM model overrides. No items, blocks, or loot. Zero material surface; purely cosmetic model-replacement rendering. The dossier's LEAVE ruling is correct.

---

## create   [anchors: Create (1)]

The dossier correctly identifies Create as the method hub — it IS the connective skeleton, not a mod that needs inbound weaves. The 17 registered recipe-types (create:crushing, create:sequenced_assembly, etc.) are what every other mod threads through.

- Considered: can Create gain a 2nd anchor as a survival-pressure consumer? REJECT: Create is the production *route*, not a pressure source. Its 1-anchor status is architectural, not a gap — the weave direction is always "other mods → Create methods," never "Create → other-system methods."
- Considered: can Create gain an economy anchor via M-08 (player-minted currency, coin-pressing)? REJECT: M-08 says the *player presses* coin from refined metal, which is a Create-processed step — Create's methods are already load-bearing for M-08 across the whole pack. Naming Create itself as an "economy" anchor would double-count the infrastructure. The correct read is that Create enables M-08 for the materials-rich mods; Create itself stays as the production spine.

OK — anchor-count of 1 (Create) is correct and intentional per the dossier ("it IS pillar #1"). No rework.

---

## createfurnitureseats   [anchors: support + aeronautics (2)]

OK — connections sound. Zero-item compat glue that registers furniture as Create seats for Aeronautics ships. The 2-anchor status (support + aeronautics behavior) is correct and no recipe edge is available. Nothing to weave.

---

## cmparallelpipes   [anchors: Create (1)]

- from: cmparallelpipes:pipe_wrench | via: create:item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: The Pipe Wrench is used by applying it to a pipe to lock its connection state — a direct item-application interaction using Create's own `create:item_application` method; having the wrench itself be produced via item_application (applying a gear to a wrench blank) is a one-step light weave that ties the tool natively into the Create spine rather than leaving it as a raw craft. Everyday tier = one light step, appropriate.
- from: cmparallelpipes:pipe_wrench_gear | via: create:pressing | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: The gear component (`pipe_wrench_gear`) pressed from a metal sheet in Create's Mechanical Press — a precision-machined gear sub-component for the tool, pulling the wrench's manufacture into Create processing. One step, everyday tier.
- from: cmparallelpipes:pipe_wrench | economy weave | to: economy | motif: any | verdict: REJECT | reason: A Create fluid-logistics utility wrench has no coherent economy link — it is not a traded good, not a reagent, not a consumption sink with demand renewal. Forced economy edge would be arbitrary.

REWORK: The dossier says "leave — no second-pillar weave is coherent" and gives 0 candidates. The two accepted above are both intra-Create (Create→Create via pressing and item_application), which counts as Create-depth weaves rather than a second-pillar anchor. They don't change the anchor count but they deepen the Create weave web. If the standard requires a *different pillar* for 2nd anchor, these are Create-internal; still worth authoring as they tie the tool into Create native methods instead of vanilla craft.

---

## travelersbackpack   [anchors: survival (1)]

- from: travelersbackpack (netherite/dragon/endgame tier variants) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The high-end backpack variants (netherite, dragon, enderman) assembled through a sequenced-assembly chain with a `derpack:incomplete_backpack_*` intermediate — depth scaled to the endgame tier, making the top-tier carry option a Create production milestone.
- from: travelersbackpack:backpack_tank / fluid hose | via: create:filling + create:emptying | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: The backpack's built-in fluid tank filled/emptied via Create's fluid-filling station — the tank sub-component uses Create's filling method to prime it with a process fluid or potion blend; a mid-tier integration that pulls the portable fluid buffer into the Create fluid chain.
- from: travelersbackpack basic leather packs (early-tier variants) | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Leather sheets pressed in Create's Mechanical Press provide the structural hide panels for basic backpack construction — a one-step inbound weave making basic packs require crafted-leather rather than raw hide. Everyday tier, one light step.
- from: travelersbackpack:smelting_upgrade / blast_furnace_upgrade | via: create:mechanical_crafting | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: Upgrade modules for the backpack (smelting, blast-furnace) are mechanical-crafted from Create components (iron sheets + electron tube), making the upgrades require tech-spine parts; a deploy-application upgrade feel, M-20 (light upgrade via mechanical crafting).
- from: travelersbackpack (exploration carrier) | via: aeronautics logistics | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: The backpack is a passive storage item; while it aids long-range expeditions thematically, it doesn't *require* aeronautics logistics and the M-31 motif is about goods that are logistically *heavy* to move at scale. A backpack is a player-worn tool, not a bulk trade good. No mechanism to anchor here.
- from: travelersbackpack mob-themed variants (mob drops as inputs) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: The mob-themed variants (blaze backpack uses blaze materials, etc.) are cosmetic themes, not functional mob-drop inputs that need a magic sink. The mob-drop reagent sink (M-02) applies when a drop needs a *use* in the magic web; here the drops already have craft uses in the backpack recipe. Forced magic edge — resist.

---

## create_central_kitchen   [anchors: Create, survival (2)]

OK — connections sound. Already at 2 anchors (Create + survival) as the explicit Create↔FarmersDelight bridge. The dossier notes an optional 3rd (economy M-09) but M-09 is retired. The real 3rd opportunity:

- from: create_central_kitchen automated feast output | via: player trade | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create-automated kitchen produces finished feasts and high-value dishes faster than hand-cooking — these are consumed against the survival diet-pressure (M-26 consumption sink); the dishes are demanded continuously by nutrition/diet mechanics (diet-appleseed) and by colony workers, so the automated kitchen feeds a non-zeroing demand loop. M-26 consumption sink: food is eaten, demand renews.
- from: create_central_kitchen sequenced-assembly sandwiches/burgers | via: create:sequenced_assembly | to: create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: The mod already implements Create sequenced-assembly for sandwiches/burgers per the dossier — this is an existing authored weave worth recording explicitly (it's a mid-tier culinary chain through incomplete_* sandwich parts that's thematically coherent: build a layered sandwich on an assembly line). Flag as already-authored, deserves explicit ledger entry.
- from: create_central_kitchen sauce/drink/ice-cream fluids | via: create:filling | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Sauce and drink fluids produced by the kitchen automation are a natural Create:filling target — bottles/casks filled on a belt from the kitchen output; the fluid intermediates feed the Create fluid-logistics chain.
- from: create_central_kitchen dish output → magic catalyst | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: A cooked dish as an arcane imbuement catalyst is a tone-clash — the magic system's reagents are arcane/soul/essence materials, not kitchen output. Even framed as "a specially prepared magical dish," it stretches coherence and the mod already has 2 strong anchors. Resist.

== CHUNK COMPLETE ==
