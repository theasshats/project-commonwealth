# Phase 2 candidates — chunk-08

## createaddition   [anchors: Create (1)]

- from: `createaddition:seed_oil` / `bioethanol` (crop-derived liquid fuels) | via: `createaddition:liquid_burning` → Aeronautics engine fuel intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the same seed-oil you burn for FE also fuels the airship's generator — the farm feeds the sky
- from: `createaddition:biomass` / `biomass_pellet` (crop waste compressed) | via: `createaddition:liquid_burning` → `numismatics` sell (processed agricultural good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: biomass pellets are a mundane but steady sellable commodity; farmers produce surplus, traders buy it for furnace fuel
- from: Iron's Spellbooks / Ars Nouveau FE-chargeable gear (magic batteries, wand cores, spell foci that hold charge) | via: `createaddition:charging` (tesla coil / charging station) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the tesla coil charges your Iron's Spellbooks focus — you need the electrical tier before you can run top-tier spellcasting gear at full power
- from: `createaddition:electrum_ingot` / `electrum_wire` / `electrum_rod` (rolling output) | via: `ars_nouveau:enchanting_apparatus` or `ars_nouveau:imbuement` as a catalyst/component in a magic construct recipe | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: electrum already has a natural home as an electrical conductor; routing it into arcane infusion creates an awkward double-role and competes with M-17 (the charging bridge is the cleaner magic seam for createaddition); prefer M-17 as the single magic anchor
- from: `createaddition:rolling` producing `c:rods/all_metal` and `c:wires/all_metal` tags | via: Aeronautics structural hull/frame recipes needing copper wire or metal rods as wiring harness | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: ACCEPT | hook: every ship needs wiring — the rolling mill stamps copper into the wire that runs through the airframe's control surfaces

**Net verdict:** createaddition earns a solid 2nd pillar (aeronautics) via M-13 + M-24, with magic as a 3rd via M-17. Economy via M-09 (biomass) is a lighter weave but coherent. Four candidates: 3 ACCEPT, 1 REJECT.

## formations   [anchors: survival (1)]

- LEAVE — pure scatter-structure worldgen mod; registers no items beyond an authoring tool (`formations:template_editor`), no recipe types, no loot tables. Places vanilla/modded blocks it doesn't own; has no materials to route through any method. A forced crafting or economy edge would be attaching to a mod that generates structures, not to the structures' contents — that's a job for the loot-table config of whatever fills the structures, not Formations itself. No coherent 2nd pillar.

== CHUNK COMPLETE ==
