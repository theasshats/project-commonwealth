# Phase 2 candidates — chunk-16

## create_new_age   [anchors: create (1)]

- from: create_new_age:energising (method) | via: create_new_age:energising | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: An Ars Nouveau source gem or Iron's arcane focus passes through the Energiser — electricity literally charges the arcane, bridging the electric tier into magic gear progression.
- from: create_new_age:energising (method) | via: create_new_age:energising | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: A high-tier Aeronautics propulsion controller or thruster requires an energised component — the reactor tier earns its place by gating the best ship drives.
- from: create_new_age:thorium_ore (worldgen — 2 biome-modifiers) | via: config/worldgen lever | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is rare and regional; the pack's scarcity-coin pipeline (ore → Create process → mint) naturally applies — a Thorium region specialises in reactor fuel and trades it.
- from: create_new_age:corium (reactor waste) | via: create_new_age:energising | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: Corium is radioactive slag — routing it into arcane infusion is a tone clash (radioactive waste ≠ magical reagent); no thematic coherence. Reject; leave waste as a worldgen curiosity or industrial byproduct only.
- from: create_new_age:advanced_motor (FE→rotation) | via: M-17 electric charging bridge | to: magic | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 targets *charging a magic tool/focus through FE*, not a motor item per se — the motor is itself a Create machine, not a chargeable magic item; wrong end of the bridge. The energising-method candidate above is the correct M-17-adjacent move.

REWORK: existing anchor (Create only) is thin for a mod with electricity, nuclear, and reactor heat — the M-05 and M-24 candidates above supply the second weave; flag for authoring.

---

## create_sa   [anchors: create, aeronautics (2)]

OK — connections sound. Two anchors already present: Create-built gear + personal flight (aeronautics). The dossier's "Blazing tools → magic infusion" candidate was pre-screened and left as not needed. No new edge found that adds meaningful loop advancement beyond the existing pair.

---

## create_enchantment_industry   [anchors: create (1)]

- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: irons_spellbooks:alchemist_cauldron_fill | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Alchemist Cauldron brews with fluids; liquid XP is the obvious high-XP fuel for a powerful brew — factory XP flows into spellbook potions, binding the Create enchanting spine to Iron's magic.
- from: create_enchantment_industry:experience_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars imbuement is a solid-item method, not a fluid method; routing a fluid bucket into an imbuement altar is mechanically awkward. The alchemist-cauldron route (M-05 above) is cleaner and directly supported. Redundant — reject.
- from: create_enchantment_industry:grinding (method — Mechanical Grindstone) | via: create_enchantment_industry:grinding | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: `grinding` is a Create-spine method already; routing it for deco-recycle is valid but purely internal to Create — doesn't add a second anchor. Not a cross-system edge.

REWORK: single Create anchor; M-05 liquid-XP → cauldron brew is the strongest available second link; prioritise.

---

## modelfix   [anchors: support (1)]

LEAVE — genuine zero-content rendering bugfix library; no items, blocks, or methods to weave.

---

## sound_physics_remastered   [anchors: support (1)]

LEAVE — client-only audio simulation; no items, blocks, or game-state surface to connect to any pillar.

---

## necronomicon   [anchors: support (1)]

LEAVE — pure code library (config/datagen helpers); zero content surface; sanctioned support role.

---

## create_mobile_packages   [anchors: create, aeronautics (2)]

OK — connections sound. Two anchors: Create logistics spine + airborne drone delivery (aeronautics arm). The economy-adjacency note in the dossier (delivering traded goods) was considered but it's infrastructure layer, not a coin/bounty sink — no new cross-system edge warranted.

---

## mushroomquest   [anchors: survival (1)]

- from: mushroomquest rare/mythical caps | via: farmersdelight:cooking / extradelight:oven | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running foraged mushrooms through a cooking pot or oven produces prepared dishes — mushroom stew, soups, dried caps — folding the fungi into the food-processing chain and feeding the diet-variety system.
- from: mushroomquest rare/mythical caps | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare and mythical mushrooms are low-floor, no-tech trade goods — a forager sells them to players who can't access the Mushroom Island biome; the biome's regional exclusivity makes these naturally scarce.
- from: mushroomquest effect-bearing caps (deadly/mythical) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Thematic case is borderline — mushrooms-as-occult-reagents needs a specific narrative hook ("death cap → death essence") that works for some caps but not the 137-strong pool in general. Red-team: feels forced for most entries; would require hand-selecting specific caps rather than a general rule, which is a Phase-3 authoring nuance not a Phase-2 ACCEPT. Mark for re-evaluation per-cap in Phase 3 rather than blanket accept.

REWORK: single survival anchor; both ACCEPT candidates above supply solid second weave (survival→production via cooking, survival→economy via luxury trade).

---

## trashcans   [anchors: support (1)]

LEAVE — void utility blocks; no pillar weave coherent (voiding is anti-scarcity/anti-economy in a scarcity-driven loop). Balance note: consider config-gating or recipe-gating so byproduct metals retain value per scarcity design.

---

## sereneseasons   [anchors: survival (1)]

- from: sereneseasons:season_sensor (redstone output) | via: create:mechanical_crafting / logic | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: The season sensor's redstone signal wires into Create gearshifts and contraptions — an automated farm switches crop inputs or opens greenhouse shutters by season, making the seasonal calendar part of the Create production spine.
- from: out-of-season crop scarcity (seasonal fertility rule) | via: numismatics sell/bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: The scarcity-causes-trade argument is sound, but this is a *design lever* (crops are rarer in winter → trade demand rises naturally) rather than an authored recipe/loot edge. It's already implicit in the pack's design intent. No Phase-3 action possible here — Serene Seasons creates scarcity passively; no item or method to route. Reject as a weave candidate (leave as acknowledged design intent, not a ledger entry).

REWORK: single survival anchor; M-16 season-sensor → Create is the available authored weave. Season-driven scarcity is a passive structural effect, not a recipe.

---

## foodeffecttooltips   [anchors: support (1)]

LEAVE — client-only tooltip rendering; no content surface.

---

## endermoon   [anchors: survival (1)]

- from: endermoon Ender Moon event (mass enderman spawn) | via: loot-seed / M-22 | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: During an Ender Moon, the surge of ender pearls can seed special loot-table entries for magic reagents (ender-aligned) that are only obtainable this night — a lunar-reagent that feeds Iron's or Ars routines requiring ender components.
- from: endermoon Super Ender Moon (all-mob surge) | via: M-14 bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A bounty board activated during Super Ender Moon offers premium coin payouts for mob-drop stacks (ender pearls, rotten flesh, etc.) — the spawn surge becomes an economic event, rewarding players who organise a kill-night.

REWORK: single survival anchor; both lunar-event candidates above add magic and economy anchors via existing motifs — note these operate at the event/config/loot-seed level, not a recipe.

---

## securitycraft   [anchors: support (1)]

- from: securitycraft reinforced blocks / sentry components | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gating the Sentry or Keycard Reader behind a Create mechanical-crafted component (e.g. a precision mechanism or brass plate) ties base-defense tech to the Create spine — defense costs real production, not just iron.
- from: securitycraft high-tier gear (Block Pocket Manager, retinal scanner) | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: The M-08 motif is "scarce metal → Create process → coin" — SecurityCraft doesn't produce coins or feed a mint, it makes defense gear. Applying M-08 here is a stretch; the gear isn't a coin vehicle. The real economy link would be M-09 (luxury good → sell), but high-end security gear is a build item, not a consumable luxury — wrong category. Reject.
- from: securitycraft crystal_quartz (its own decorative material) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: SecurityCraft's `crystal_quartz` is a decorative block, making it crushable-back is a cosmetic deco-recycle; it's minor and doesn't advance any loop node. Not worth authoring.

REWORK: support role with no current loop anchor; M-05 Create-gating gives it a first real anchor, which is the minimum floor.

---

## terrablender   [anchors: support (1)]

LEAVE — worldgen biome-region API library; zero items, zero blocks, zero methods; sanctioned support dependency.

---

## sablecollisiondamage   [anchors: support (1)]

LEAVE — physics behavior addon for Aeronautics collision damage; no items/blocks/methods to connect; sanctioned aeronautics-support role.

---

## inventoryprofilesnext   [anchors: support/client-QoL (1)]

LEAVE — client-only inventory sort/management UI; no content surface; sanctioned QoL role.

---

## createoreexcavation   [anchors: create (1)]

- from: createoreexcavation vein table (configurable ore output) | via: config/datapack lever → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Because veins are regional (per-chunk, datapack-defined), gating scarce coin-grade metals (e.g. Galosphere palladium, TFMG-relevant regional ores) as vein outputs makes the Drilling Machine a slow-but-infinite ore source that feeds the Create-process → mint pipeline — a region that holds a Thorium or palladium vein becomes a specialist supplier.
- from: createoreexcavation drill-head tiers (drill / diamond_drill / netherite_drill) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: The drill heads are already made via create:crushing/cutting/milling/mechanical_crafting (all Create spine). Adding sequenced_assembly for the netherite drill is a depth option, but M-06 is reserved for "endgame keystone via sequenced assembly" — a drill head is mid-tier tool fabrication, not an endgame multi-stage keystone. Mis-tier for M-06. Reject (could revisit as M-06 for the Diamond Drilling Machine block itself in Phase 3).

REWORK: single Create anchor; M-08 vein-table lever is the natural second (economy via regional ore specialisation). This is a config/datapack action in Phase 3, not a recipe.

---

## create_jetpack   [anchors: create, aeronautics (2)]

OK — connections sound. Two anchors: Create-fabricated (uses backtank + brass), aeronautics (personal pneumatic flight). Dossier pre-screened further weave candidates and correctly left them. No new cross-system edge found.

---

## irons_spellbooks   [anchors: magic, create (2)]

- from: irons_spellbooks:mithril_ore / irons_spellbooks mithril ingot | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Mithril ore → Crushing Wheel yields mithril + a silver byproduct nugget — ore-doubling on the magic-metal feeds both the Create processing pipeline and Iron's magic progression simultaneously.
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement (M-01 linkage) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is already ledger-reserved as "Iron's-side magic currency, bonded to source via M-01" — this confirms the existing cross-magic currency bridge should be authored (source_gem ↔ arcane_essence via imbuement), deepening the magic web.
- from: irons_spellbooks mob bosses (apothecarist etc.) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: An Iron's apothecarist or corrupted-mage drop transmuted via Occultism spirit fire yields a shared magical essence — cross-magic synergy where fighting wizard-class enemies feeds Occultism's spirit economy.

REWORK: already ≥2 anchors; the three above are depth additions. M-03 mithril crushing is the most immediately actionable. The M-01 arcane_essence↔source_gem bridge is confirmed-reserved and should be noted for Phase-3 priority.

---

## solmaiddream   [anchors: survival (1)]

LEAVE — thin flavour addon (maid diet stat tracker) with no processing methods, no items of strategic value, and no coherent cross-system edge. Its only surface is the shared food pool, which the diet/survival system already covers structurally.

== CHUNK COMPLETE ==
