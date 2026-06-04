# Phase 2 candidates — chunk-03

<!-- pass-08 blind sample — do NOT read other passes or CANDIDATES.md before writing -->

## createaddition   [anchors: Create (1)]
- from: createaddition:seed_oil / bioethanol (crop-oil fuels) | via: createaddition:liquid_burning | to: aeronautics (M-13 Aeronautics fuel line) | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: farmed seed oil runs the biofuel generator that keeps the airship flying — agriculture feeds propulsion
- from: createaddition:charging (FE → charged item) | via: createaddition:charging | to: magic (Iron's Spellbooks FE-chargeable foci/staves or Ars battery) | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the factory's electrical grid recharges your spell focus — technology and magic share the same power bus
- from: createaddition:rolling (ingot → rods/wires) | via: createaddition:rolling | to: aeronautics (M-24 mechanical component → drivetrain) | motif: M-24 | power: everyday | tone: ok | verdict: ACCEPT | hook: rolled copper/electrum wire is the wiring harness inside every Create Aeronautics control surface — the rolling mill is an aeronautics supply stage
- from: createaddition:seed_oil → numismatics sell | via: numismatics price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: seed_oil is also proposed as aeronautics M-13 fuel; double-spend dilutes both; economy seam is weaker than the propulsion seam — drop to free the reagent for M-13

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — pure behavioral datapack (0 items, 0 blocks, no drop table changes); nothing to route through any method. Any pillar edge would require inventing content the mod does not have.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — recipe-only datapack with no items of its own; it deepens the Create pillar rather than bridging pillars. No material surface exists to route a 2nd pillar through.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen (biomes/terrain); no items or methods of its own. Its weave is indirect — it sets the terrain other mods' biome-modifiers and structures land on. A recipe edge would be fabricated.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye / endrem:nether_eye (themed eyes) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a player blocked by bad RNG can ritually transmute a matching undead/nether reagent into the corresponding eye — Occultism as the fallback path for exploration gates
- from: endrem:corrupted_eye / endrem:magical_eye (two rarest eyes) | via: create:sequenced_assembly (derpack:incomplete_eye chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: reaching the End is so important that two of the hardest eyes can be forged in a sequenced assembly line — but only with deep Create investment; exploration still provides the rest
- from: endrem eyes (general) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: redundant with the cleaner M-11 occultism:ritual path above; two magic routes on the same item family is overkill and splits attention — keep the ritual route, drop the apparatus route

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo rounds (bulk, mass-produced) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the Create ammo factory outputs shells by the chest — an arms-dealer player sells rounds to the crew, turning the factory into a trade-good producer
- from: createimmersivetacz:gun_barrel / firing_mechanism (precision parts) | via: create:sequenced_assembly | to: aeronautics (M-24 mechanical component → propulsion/control) | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: gun barrels are combat components, not drivetrain parts; routing them into Aeronautics propulsion/control is a thematic stretch — a player would not say "of course." Tone clash → reject.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: occultism:ritual (XP-costed ritual) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals that ordinarily drain player XP can instead draw from a tank of liquid experience piped in by the Create enchanting factory — industrial magic scales with automation
- from: create_enchantment_industry:experience_bucket (liquid XP) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: liquid XP is not an "arcane essence" — routing it through Ars imbuement is a weaker thematic fit than the occultism:ritual path above; keep the cleaner single route
- from: create_enchantment_industry:enchanting_template / enchanted books | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: Iron's cauldron brews potions, not scrolls/spells; enchanted books entering the cauldron has no natural player read-through and would feel arbitrary. Theme mismatch → reject.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — pure magic↔magic connective tissue (Ars Nouveau ↔ Iron's Spellbooks mana bridge); no item surface to route a 2nd pillar through. It is already a weave, but an internal one. Forcing an external pillar would be artificial.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (the companion summoner, Curios head) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: the wolf link is a personal-use unique item, not a mass-produced trade good; it doesn't fit M-09's "luxury consumable/processed good" form. Balance violation (endgame unique ≠ fungible trade good) → reject.
- from: createmechanicalcompanion:optical_sensor / quantum_drive (high-tier modules) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: quantum_drive and optical_sensor are deeply mechanical/tech items; running them through arcane imbuement feels thematically wrong — "arcane optical sensor" is not coherent within either mod's lore. Tone clash → reject.
- LEAVE — clockwork combat pet with no trade, magic, or aeronautics surface that survives red-teaming. Its role is a flavor/combat reward behind Create progression; forcing a 2nd pillar produces strained edges.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (fallen-star rock block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: meteors that dot the terrain crush into iron nuggets + stardust byproduct — a small windfall for the Create ore line; players go hunting after a blood moon
- from: Blood Moon / Blue Moon active event (world-state flag) | via: occultism:ritual (moon-conditional completion trigger) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Occultism rituals only complete under the correct moon phase — the factory runs all week, but the blood-moon rite only completes when the sky turns red
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss is worldgen decoration with no inherent magical identity; imbuement of moss-into-reagent is arbitrary without lore grounding. No coherent player read → reject.
- from: Harvest Moon crop-growth buff | via: create:milling / farmersdelight:cooking | to: Create/survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Harvest Moon accelerates any crop in the field — a smart player times their seed-oil harvest run or specialty-crop picking to the moon calendar, giving the Create farm and FD kitchen a seasonal rhythm

== CHUNK COMPLETE ==
