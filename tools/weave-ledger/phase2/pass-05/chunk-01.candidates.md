# Phase 2 candidates — chunk-01

## tfmg   [anchors: Create (1)]

TFMG is the heavy-industry spine: oil refining, steel, fuels (diesel/gasoline/LPG), and an FE-compatible electricity grid. Its reserved fuels (tfmg:diesel, tfmg:gasoline) are already locked by M-13 for Aeronautics propulsion. The aeronautics pillar is therefore the strong second, with economy as a plausible third.

- from: tfmg:diesel / tfmg:gasoline (distilled fuels) | via: Aeronautics engine fuel intake (M-13 — fuel → propulsion) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: You run TFMG's distillation tower to get real diesel; that diesel feeds your airship's combustion engine — the fuel line IS the industrial progression gate.

- from: tfmg:steel_ingot (processed scarcity, multi-step blast + coke) | via: crafting / aeronautics structural recipe (M-23 — structural alloy → airframe) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel plate is exactly what a hull needs; building a ship without going through the blast furnace first feels wrong.

- from: tfmg:steel_ingot / tfmg:aluminum_ingot (refined metals) | via: numismatics mint (M-08 — coin from processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Refined industrial metals are the obvious high-value commodity; minting steel/aluminum into the coin economy makes the factory the wealth engine.

- from: tfmg:combustion_engine (mechanical component) | via: Aeronautics drivetrain/propulsion recipe (M-24 — mechanical component → propulsion/control) | to: aeronautics | motif: M-24 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: A combustion engine block going directly into an airship drivetrain slot is the most literal "factory builds the plane" moment in the pack.

- from: tfmg:napalm / flamethrower content | via: combat flavor | to: magic/economy | motif: no-motif | power: mid | tone: clash (forced combat→economy edge) | verdict: REJECT | reason: the dossier flags this as WEAK/survival-combat flavor with no structural weave; no matching motif; the aggression tone clashes with economy/magic pillar needs.

---

## underground_village   [anchors: survival (1)]

Underground_village (Stoneholm) generates subterranean settlement structures with inhabiting villagers. No blocks, no items, no recipe types — its only hook is the villager trades and any loot in its chests.

- from: Stoneholm villager trades | via: numismatics trade → coin economy (M-21 — trade-seam to economy) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: An underground market hub where you can spend or earn coin with deep-city traders is a natural economy node for players working the caves.

  Red-team: M-21 is provisional and the maintainer leans *no* on villager-trade routes into Numismatics. The weave is thematically coherent and the location is distinctive (underground village as economy waypoint), so it survives theme-fit — but the provisional flag is real. Tagging accordingly.

- from: Stoneholm chest loot | via: loot-table insertion of a coin/reagent reward | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: loot-table edits are datapack work, not a mod weave; the right approach is to note the datapack opportunity, not propose it as a Phase 2 weave. No motif covers pure loot-table seeding.

---

## formations   [anchors: survival (1)]

Formations (overworld) scatters decorative ruins and structures. Zero blocks, zero items, no recipe types, no loot. The dossier's own conclusion is leave.

- LEAVE — zero item/method surface; a forced recipe or economy edge is incoherent. Any loot-table hook would have to come from structuring datapack work (which Formations doesn't own), not from this mod. Worldgen atmosphere only.

---

## vc_gliders   [anchors: aeronautics (1)]

Tiered gliders (iron → netherite) are early-to-mid flight gear anchored to aeronautics. Consumes paper + tier metals + copper/nether upgrade materials. No registered recipe types; currently uses vanilla crafting only.

- from: vc_gliders:paraglider_iron (entry tier) | via: create:pressing (iron sheet as an input part) gating iron glider on a light Create fabrication step (M-05 — native-method gating / Create parts as inputs) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: The first glider requiring a pressed iron sheet instead of raw iron feels right — you're not bending a raw ingot into a wing spar, you're pressing it.

  Power-read note: iron glider is everyday/entry; one light step (pressed sheet swapped in) is the correct depth — do NOT chain a full mechanical-crafting sequence for the basic tier.

- from: vc_gliders:paraglider_diamond / _netherite (upper tiers) | via: create:mechanical_crafting (complex plated assembly for the high-tier glider bodies) (M-05) | to: Create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: Diamond and netherite gliders as mechanical-crafting recipes — intricate precision wing assemblies — reads naturally for the higher-stakes tiers.

- from: vc_gliders reinforced paper feedstock | via: create:milling (pulp chain — M-12) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the reinforced-paper component is everyday material; routing a basic input through milling is a weak extra step with no player-narrative payoff. The pressed-sheet route on the glider itself (above) is the cleaner single seam. Dossier marked this WEAK.

---

## betteroceanmonuments   [anchors: survival (1)]

YUNG's ocean monument overhaul — structure-only, no items, no recipe types, loot=yes. Dossier conclusion was leave; this is confirmed.

- LEAVE — no registry items, no recipe methods. Loot-table seeding (coin drops, reagents) is a datapack edit and should be tracked as such if desired, but it is not a mod weave for Phase 2. No coherent 2nd-pillar connection is possible through the mod itself.

---

## ars_n_spells   [anchors: magic (1)]

Bridge mod between Ars Nouveau and Iron's Spellbooks — unifies mana pools and enables cross-casting. Zero blocks, zero items, no recipe types. The connection it already makes is magic↔magic (internal to the magic pillar).

- LEAVE — this mod IS already a weave (Ars ↔ Iron's = magic-to-magic connection), but it has no item or material surface to route a second pillar through. Forcing an economy or Create hook onto a zero-item bridge would be artificial. Its value is as connective tissue within the magic pillar, which is complete.

---

## formationsnether   [anchors: survival (1)]

Nether companion to Formations — scatters Nether ruins/altars using the same template system, with loot. Zero blocks, zero items, no recipe types.

- from: formationsnether structure loot (Nether altar / castle chests) | via: loot-table edit seeding a magic reagent or coin reward | to: economy or magic | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: same as formations/betteroceanmonuments — loot-table insertion is datapack work not attributable to this mod, and no motif covers pure loot-seeding. The *idea* is sound but it belongs in a "datapack loot enrichment" task, not a mod weave.

- LEAVE — no item/method surface for a recipe-based 2nd pillar. Loot-table opportunity is real but is a datapack edit, not a weave.

---

## createshufflefilter   [anchors: Create (1)]

Two-item Create QoL addon (shuffle filter, weighted shuffle filter) that randomizes which item a Deployer places. No material I/O, no recipe types, no method surface.

- LEAVE — single-utility builder QoL mod with no material or processing surface. No coherent 2nd pillar is available without forcing a completely artificial economy or magic edge onto a filter item. Dossier agrees.

---

## createaddition   [anchors: Create (1)]

Create ↔ FE bridge: electric motor, alternator, accumulators, tesla coil, rolling mill, seed oil / bioethanol fuels. Registers createaddition:charging, createaddition:liquid_burning, createaddition:rolling. Strong second-pillar surface via the charging method and the magic gear it can charge.

- from: FE-chargeable Iron's Spellbooks gear / magic-energy items | via: createaddition:charging (tesla coil FE-charges the item — M-17 — electric/FE charging bridge) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Spinning up a Create alternator to charge your spellbook battery is the moment the factory and the arcane converge — you need both running to cast at full power.

  Red-team: does this clash? The "wizard plugs into the power grid" image is a bit jarring. But Derpack-X leans into cross-pillar tension, and Iron's Spellbooks' arcane-scholarly tone accommodates a charged focus/battery item. It survives.

- from: createaddition:seed_oil / bioethanol (farm-crop-derived fuels) | via: createaddition:liquid_burning → economy sell as a processed-crop good (M-09 — luxury good → coin) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seed oil is the "farm surplus goes into the machine economy" loop — you grow crops, press oil, burn it for power or sell the surplus.

  Power-read: seed oil is everyday/cheap; one light step (liquid_burning as a processable → sellable commodity) is appropriate. Not a deep chain.

- from: createaddition:seed_oil / bioethanol | via: Aeronautics liquid_burning fuel (M-13 — fuel → propulsion) | to: aeronautics | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bioethanol as an early-game airship fuel before you refine proper diesel — the farming-based fuel line covers entry-level ships, TFMG diesel covers the heavy fleet.

  Note: the reserved M-13 fuel slots in WEAVE-LEDGER.md list tfmg:diesel/gasoline/lubricant. createaddition:bioethanol is a distinct fuel; confirm it doesn't conflict with that ownership. The dossier notes bioethanol as a fuel type for its own liquid_burning method, so this is an extension not a double-spend.

- from: createaddition:electrum_ingot (rods/wires produced by rolling) | via: create:crushing / numismatics (M-08 — coin from processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: electrum is a mid-tier alloy but not a scarcity item — it's a crafted blend of gold + silver and is regularly produced; minting it doesn't have the "scarce regional metal" weight M-08 requires. The rolling-to-wire chain is already Create-internal. Drop in favor of the seed oil economy route above.

---

## dungeons_arise_seven_seas   [anchors: survival (1)]

Ocean expansion for When Dungeons Arise — galleons, floating fortresses, sunken ruins. Zero items, no recipe types, loot=yes. Dossier conclusion: leave.

- LEAVE — no item or method surface. The nautical theme rhymes with aeronautics aesthetically (ships, sails) but the structures are static; there is no functional vessel to route through an aeronautics method. Any economy weave is a loot-table edit (datapack work). No coherent recipe-level 2nd pillar.

---

== CHUNK COMPLETE ==
