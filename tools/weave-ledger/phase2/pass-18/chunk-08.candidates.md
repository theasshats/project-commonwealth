# Phase 2 candidates — chunk-08

<!-- ── chunk-08 ── pass-18 ── blind ── -->

## citadel   [anchors: support/library (1)]
- LEAVE — pure code library (animation/spawn framework for Alex's Mobs author's mods); no player-facing items, no survival material, no recipe surface. Auto-pulled as a dependency; nothing to route.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client-only texture-engine (OptiFine random/emissive textures); zero items, zero loot, zero world state. No content surface to weave.

## tacz   [anchors: support/combat-flavour (1)]

Power-read: `tacz` is a modern-firearms mod with a gun_smith_table (its own recipe type), discrete workbenches for attachments/ammo, and a loot table. Guns are mid-to-endgame items — the Gun Smith Table itself is an iron-tier unlock. The data-driven gun system means metal/component inputs are the live join key. This is a 1-anchor mod needing two real anchors.

- from: tacz:gun_smith_table_crafting inputs (iron/metals, logs) | via: tacz:gun_smith_table_crafting (gating) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Gun Smith Table only accepts Create-pressed iron sheets and mechanically-crafted components as metal inputs — firearms cost real fabrication, not raw ore.
  reason-accept: Create already processes ore→sheet→part, so inserting tacz's metal inputs into that chain is a direct loop-advance (scarcity→production). M-05 native-method gating is the exact fit — the gun smith table is tacz's own machine, and we inject Create-fabricated parts as its inputs. Tier sizing: mid (the table is an iron-tier build; pressed-sheet inputs are a light mid-game step, not an endgame chain — appropriate).

- from: tacz ammo (ammo/ammo_box) | via: create:mechanical_crafting or create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: High-tier ammunition (AP rounds, explosive) requires a sequenced-assembly line — the factory feeds the war machine.
  reason-accept: Ammo is a consumable that creates recurring demand — exactly the kind of loop-sustaining sink the economy needs. Endgame ammo via M-06 sequenced_assembly adds GregTech-style depth without bloating the basic iron round. Distinct from the M-05 entry (machine gating vs. ammo chain).

- from: tacz ammo_box / rare gun drops (loot=yes) | via: numismatics bounty (bountiful board) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony or a trader posts a bounty: deliver a crate of ammo or a recovered firearm — guns become war materiel traded for coin, not just looted.
  reason-accept: Ammo is the canonical consumable throttle in a PvPvE economy; making it a bounty target (M-14 combat→economy) advances the loop (production output feeds the economy node). Player-run-currency caveat applies (0.9 review same as other M-14/M-09 entries).

- from: tacz guns / attachment aesthetics | via: aeronautics ship-mounted turrets (thematic tie) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — TACZ does not natively integrate with Aeronautics turret hardpoints (aeronauticscompat handles other turret mods separately); any "mount a TACZ gun on a ship" route is flavour-only with no recipe/mechanical delivery. No established motif covers a pure-flavour placement edge. Flag for Gate 0 if a cross-mod turret-mount recipe type ever appears.

REWORK: existing dossier anchor is "support (1)" — combat flavour only. This is correct currently but should be upgraded once the M-05/M-14 weaves are authored; the mod would then carry create + economy (3 anchors). No existing authored connections to rework.

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — pure client windowing option (borderless fullscreen); no items, no loot, no world state. Nothing to weave.

## minecolonies_compatibility   [anchors: survival + Create (2)]

Power-read: Already a 2-anchor bridge mod — its entire purpose is wiring colony workers into Create Stock Link, IE, Farmer's Delight, and storage networks. 2nd anchor is already present. Check for a 3rd (economy) and inspect existing connections for REWORK quality.

- from: minecolonies_compatibility Gunner job (tacz_dummy_gun) | via: minecolonies job → tacz crafting/supply chain | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony's Gunner arms the settlement — he crafts or requisitions firearms, creating a steady in-colony demand that draws on the Create+tacz production chain and feeds trade with the wider player economy.
  reason-accept: The Gunner job already exists in the mod (tacz_dummy_gun item confirms it). Connecting colony firearm-production demand to the M-14 bounty/trade economy advances the loop (production→economy). The colony is a producer node; the economy pillar needs inputs. Tone fits the PvPvE framing.

- from: minecolonies_compatibility colony food output (Cook uses FD cutting board) | via: chefsdelight/farmersdelight → numismatics trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony cooks (already using FD's cutting boards) produce surplus meals — those meals sell at the market for coin, making the colony a literal food-economy node.
  reason-accept: This completes the loop segment: colony farming (survival) → colony cook (production) → food surplus → coin (economy). M-09 luxury-good→coin; everyday tier — a light step (no deep chain needed for basic meal sales). Synergises with chefsdelight's own villager-trade anchor.

- from: minecolonies_compatibility Courier ↔ Create Stock Link | via: Create logistics | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the Courier using Create Stock Link is already part of the Create anchor; extending that to aeronautics would require the Courier to interact with ship-mounted storage (no such Aeronautics storage interface exists as a recipe-type). Flavour-only; no delivery mechanism.

OK — existing connections sound (survival + Create are genuine, well-motivated bridges, not arbitrary). The two new ACCEPT entries add economy as a third anchor.



