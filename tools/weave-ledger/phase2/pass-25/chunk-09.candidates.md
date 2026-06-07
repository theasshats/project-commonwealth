# Phase 2 candidates — chunk-09

## craftingtweaks   [anchors: support/QoL (1)]
LEAVE — zero content surface (no items, no blocks, no recipe types); crafting-screen button overlay only. Nothing to weave.
OK — connections sound (support role is correct and complete).

---

## accelerateddecay   [anchors: support/perf (1)]
LEAVE — pure behavior patch (leaf-decay tick replacement); no items, no outputs, no content surface. Nothing to weave.
OK — connections sound.

---

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese:cheese (any aged variant) | via: create_cheese:maturing → numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Cheese is trivially sellable; bare sell-for-coins is saturated. The dossier itself flags this as the obvious link; that's exactly the pattern to skip this pass.
- from: create_cheese:cheese_curds / aged cheese | via: farmersdelight:cooking or extradelight:melting_pot | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: curds and aged cheese fold into FarmersDelight cooking (grilled cheese, fondue, stuffed pasta); the dairy chain feeds the diet system's Protein/Dairy group, closing the survival pressure loop — Create-processed food that actually feeds diet-variety demand.
- from: create_cheese:calendar_page_tier_1/2/3 | via: create_cheese:maturing (as a generic aging station) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cheese Cellar's tag-driven maturing method is a general "age-an-item" station — other Create-chain perishables (cured meats, fermented produce from FarmersDelight/Vinery) can mature through it, making the Cellar a shared Create-spine processing node rather than a single-mod dead end.
REWORK: current "survival" anchor is correct but thin — it counts create_cheese as food without noting the diet-variety demand loop. The Create anchor is strong (uses create:mixing/compacting). No REWORK needed; anchors are sound. OK — connections sound.

---

## northstar   [anchors: Create, aeronautics (2)]
- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: create:crushing + northstar:electrolysis | to: Create | motif: M-03 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: titanium/tungsten ore doubles via Create crushing (ore-doubling reward) — these are the off-world scarce metals that make the space tier worth the rocket cost; M-03 applies cleanly to any ore, including off-world ones.
- from: northstar:advanced_circuit | via: create:sequenced_assembly (northstar:engraving as intermediate) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits are the Northstar endgame keystone — routing them through a sequenced_assembly chain (engraving step embedded) makes the off-world tech tier cost real Create-spine depth, not just crafting-table clicks. GregTech-style: more steps, not bigger cost.
- from: northstar:titanium_ingot | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium plate/beam as a high-tier airframe material — a space-retrieved metal that makes flagship-tier ships cost off-world expedition effort, not just brass. Scales with ship tier (basic frames stay brass/steel; top-tier hulls need titanium).
- from: northstar:biofuel | via: createaddition:liquid_burning → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar biofuel is a planet-derived refined fuel that powers Aeronautics engines — an off-world supply chain feeding the logistics arm; makes space bases productive, not just exploratory.
- from: northstar:astronomical_reading | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. A specialist output being sellable is trivially true; the economy link needs to be structurally distinctive, not just "space data = tradeable."
- from: northstar:advanced_circuit | via: northstar:engraving as a locked exclusive | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Circuits as a trade good is real, but it's a bare sell-for-coins link; the stronger signal is the Create/aeronautics weaves above.
REWORK: dossier's economy candidates are correctly marked WEAK/MED and both land as generic-sellable; REJECT both, as done above. Existing Create+aeronautics anchors are sound. OK — connections sound.

---

## almostunified   [anchors: support/recipe-graph (1)]
LEAVE — zero content surface (no items, no blocks); it IS the recipe-graph unifier. The galosphere/palladium gotcha is noted in the dossier. Nothing to weave.
OK — connections sound (support role is correct and complete).

---

## createpickywheels   [anchors: Create (1)]
- from: Create water-wheel placement | via: biome-gate mechanic (config) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the biome-gating of power placement is a config/behavioral mod with no item/material surface; it's a genuine survival-flavor link conceptually (the world dictates where you can build power) but there's no recipe or method to hang a motif on. Record as a conceptual design note, not an actionable weave. The dossier's MED candidate is the right intuition but can't be authored as a method-pull.
REWORK: current anchor is Create (1) — the survival "world pushes back" flavor is real but can't be formalized as a motif-based weave since there's no item/method surface. LEAVE as Create (1) + note survival-flavor intent in design docs if needed. No REWORK to the anchor itself.

---

## gamediscs   [anchors: survival (1)]
- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: forced/cosmetic — the console is a downtime novelty toy; threading its component parts through Create machinery adds procedural cost to a zero-stakes gadget. Tone clash: a Create-fabricated processor for an arcade console is contrived; the dossier correctly identifies this as WEAK and not worth it. The disc-from-skeleton-kill gimmick is the whole loop — don't break it.
LEAVE — survival (novelty/flavor) anchor is correct. No coherent 2nd anchor — forcing Create onto an arcade gadget is a defect. OK — connections sound.

---

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs:andesite_tiles / bits_n_bobs:*_tiles / chairs | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: bits_n_bobs deco tiles and chairs crush back to crushed-stone/gravel + XP nugget via Create's recycling method — the deco tier stays inside the Create loop rather than being a dead-end sink; players who over-build can reclaim raw stone through Create.
OK — connections sound. ≥2 anchors; M-04 reinforces existing Create loop cleanly.

---

## architectury   [anchors: support/API (1)]
LEAVE — pure API library, zero content surface. Nothing to weave.
OK — connections sound.

---

## kotlinforforge-5.11.0-all   [anchors: support/API (1)]
LEAVE — language adapter (Kotlin runtime shim), zero content surface. Nothing to weave.
OK — connections sound.

---

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* | via: create:mechanical_crafting or create:cutting (wool processing step) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: forced/cosmetic — sleeping bags are vanilla-recipe QoL (wool+string); routing them through Create machinery would add cost to an everyday travel-comfort item, violating the "never gate a basic component behind a complex recipe" guardrail. Tone: fine, but mechanically wrong.
- from: comforts:sleeping_bag_* (wool consumer) | via: config/design tie to seasonal cold pressure | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: no-motif surface — sleeping bags serve survival pressure (cold/travel) conceptually, but there's no season-gated recipe or input here; it's purely behavioral. Can't hang M-16 on a zero-method-surface item. Already anchored to survival.
LEAVE — survival (1) is correct; no coherent 2nd anchor without forcing a contrived edge.

---

## corgilib   [anchors: support/library (1)]
LEAVE — pure code library (loot/worldgen helpers for dependents); zero content surface. Nothing to weave.
OK — connections sound.

---

## create_sa   [anchors: Create, aeronautics (2)]
- from: create_sa:brass_drone_item (ownable drone) | via: create:sequenced_assembly + drone-module recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: drones are personal-scale autonomous logistics agents — their module assembly (camera/inventory/flight modules) routes through sequenced_assembly as a mechanical drivetrain component, tying the drone's control surface into the aeronautics drivetrain pillar; makes drones cost real Create fabrication, not just crafting-table clicks.
- from: create_sa:brass_jetpack_chestplate | via: create:sequenced_assembly (already inbound) + northstar:advanced_circuit as endgame gate | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite/advanced jetpack tier requiring a Northstar advanced_circuit as a sequenced_assembly keystone ingredient — off-world circuit gates top-end personal flight, making the space-tier rocket effort pay off in gear progression.
- from: create_sa:blaze flamethrower / blazing tools | via: ars_nouveau:imbuement (blaze infusion) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: blazing tools are pre-attuned fire-tools — running them through an Ars imbuement chamber for a fire-affinity enchant or ignite glyph makes thematic sense (fire + arcane infusion = flame-attuned gear); magic specialist adds value to Create's fire-tech line.
REWORK: existing anchors Create + aeronautics are correct. No rework needed — all existing connections are sound. OK.

---

## kiwi   [anchors: support/API (1)]
LEAVE — modding library (registration/font helpers); zero content surface. Nothing to weave.
OK — connections sound.

---

## sable   [anchors: support/physics-backend (1)]
LEAVE — physics engine library (sub-level backend for Aeronautics); zero content surface. Nothing to weave.
OK — connections sound.

---

## ctov   [anchors: survival (1)]
- from: ctov village structures (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed Numismatics coins and/or Bountiful bounty tokens into ctov village chests — biome-themed villages become natural starting-economy nodes (find a Japanese mountain village, discover regional coin + a bounty slip); exploration → economy loop closes cleanly. Loot tables are datapack-editable; this is a loot-seed action, not a recipe.
- from: ctov village chests (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed low-tier Ars Nouveau/Occultism reagents (source gems, candle materials, spirit pedestals) into ctov village loot so magical knowledge gates on exploration rather than straight crafting — villages become magic primer nodes. Structurally distinctive: makes exploration the on-ramp to magic, not just trading with the magic player.
REWORK: current survival-only anchor is thin for a village overhaul. The two loot-seed weaves above give it a genuine economy + magic second anchor without forcing a recipe. Recommend upgrading to survival + economy (loot-seed coins) as the primary second anchor.

---

## ritchiesprojectilelib   [anchors: support/API (1)]
LEAVE — projectile/ballistics library (no content surface). Nothing to weave.
OK — connections sound.

---

## crash_assistant   [anchors: support/client-utility (1)]
LEAVE — crash-diagnostics client tool; zero content surface. Nothing to weave.
OK — connections sound.

---

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons dungeon chests (loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Bountiful bounty board tokens or partial Numismatics coin hoards into Catacomb/Undead Fortress/Spider Cave chests — dungeons become economy entry nodes for the combat-specialist route; the fighter clears a dungeon and walks out with trade currency, not just vanilla loot. Structurally distinctive: combat → economy pipeline without a generic "sell the drop."
- from: betterdungeons dungeon chests (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Occultism summoning ingredients, Ars source gems, or Iron's Spellbooks scrolls into Undead Fortress/Catacomb chests — magic lore lives in the dangerous underground; exploration of danger-content gates magic access. M-02 mob-drop/dungeon reagent sink applies here (boss-adjacent dungeon loot as magic on-ramp).
- from: betterdungeons Spider Cave / Catacombs | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a boss-key component (e.g. a cursed mechanism or dungeon-keeper's cog) into the hardest dungeon chest — gates a complex Create recipe behind dungeon-clearing; the dungeon becomes a Create progression gate, not just vanilla XP. One item, one gate: proportionate depth.
REWORK: survival anchor is correct. The three loot-seed weaves give this a genuine second anchor (economy + magic + Create tie-in) via the only available method (loot tables). No existing connections to rework — previously 1-anchor; these add depth.

---

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_chair / *_table / *_cupboard / *_fancy_bed (wood furniture) | via: create:cutting (sawmill step before assembly) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: furniture planks run through Create's mechanical saw (cutting step) before assembly — the furniture tier earns its Create spine tie; the aesthetic fits (industrial sawmill → artisan furniture). Light single step for everyday-tier items, per the depth-scaling rule. Gives handcrafted a Create anchor it currently lacks.
- from: handcrafted furniture (luxury build goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Furniture is sellable, but "deco sells thinly" (as dossier notes); bare sell-for-coins on decoration is the saturated pattern.
REWORK: currently support/decoration (1) with no Create tie despite being a natural fit for a pack built on Create's woodworking. The create:cutting weave is the right second anchor and gives it a coherent loop position (decoration tier inside the Create spine).

== CHUNK COMPLETE ==
