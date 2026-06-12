// MFFS (Modular Force Field System) — "made through Create" (complexity-tiered).
//
// MFFS already plugs into the spine via `#c:ingots/steel` (Create-routed in this pack), but its
// real MACHINES — the force-field projector, the Fortron generator/capacitor, the interdiction
// matrix — are endgame tech that still crafted on a plain table. So gate by COMPLEXITY, the way
// the pack gates other complex tech (simple gear = a part gate; complex machines = real Create METHODS):
//
//   - focus_matrix (the field-focus component shared by every module): one precision gate
//     (create:electron_tube). Cheap, and it flows to all the simple modules — no need to touch
//     them individually.
//   - The flagship MACHINES (projector, interdiction_matrix) are multi-stage sequenced_assembly
//     chains — staged on the Mechanical Crafters from TFMG steel casings + electron tubes +
//     precision mechanisms (heaviest tier). Mid-tier machines get rich TFMG-steel crafts.
//
// LEFT ALONE: the field-shape modes + all functional modules (inherit the focus_matrix gate),
// battery, blank_card, and the smelted steel chain — simple items, coherent as-is.
//
// Verified against tools/mod-data/recipes/mffs-5.4.27.txt. TFMG part ids vetted in docs/RECIPES.md.

ServerEvents.recipes(event => {
  // ── SHARED COMPONENT — the field focus every module is built from. One precision gate. ──
  // orig focus_matrix: c:dusts/redstone + c:gems/diamond + c:ingots/steel
  event.remove({ output: 'mffs:focus_matrix' })
  event.shaped('mffs:focus_matrix', [' D ', 'SES', ' R '], {
    D: '#c:gems/diamond', S: '#c:ingots/steel', E: 'create:electron_tube', R: '#c:dusts/redstone'
  })

  // ── FLAGSHIP MACHINES — endgame tech, built in STAGES via sequenced_assembly (heaviest tier):
  //    start from the focus_matrix, deploy steel/circuits/mechanism onto the in-progress part on
  //    the Mechanical Crafters, then press to finish. Intermediates registered in
  //    kubejs/startup_scripts/01-intermediate-parts.js. ──

  // FORCE-FIELD PROJECTOR. orig: c:gems/diamond + c:ingots/steel + battery + focus_matrix
  event.remove({ output: 'mffs:projector' })
  event.recipes.create.sequenced_assembly(
    ['mffs:projector'], 'mffs:focus_matrix',
    [
      event.recipes.create.deploying('pcmc:incomplete_force_projector', ['pcmc:incomplete_force_projector', 'tfmg:steel_casing']),
      event.recipes.create.deploying('pcmc:incomplete_force_projector', ['pcmc:incomplete_force_projector', 'mffs:battery']),
      event.recipes.create.deploying('pcmc:incomplete_force_projector', ['pcmc:incomplete_force_projector', 'create:electron_tube']),
      event.recipes.create.deploying('pcmc:incomplete_force_projector', ['pcmc:incomplete_force_projector', 'tfmg:steel_mechanism']),
      event.recipes.create.deploying('pcmc:incomplete_force_projector', ['pcmc:incomplete_force_projector', 'create:precision_mechanism']),
      event.recipes.create.pressing('pcmc:incomplete_force_projector', 'pcmc:incomplete_force_projector')
    ]
  ).transitionalItem('pcmc:incomplete_force_projector').loops(1)

  // INTERDICTION MATRIX (endgame area-denial). orig: focus_matrix + shock_module + ender_chest
  event.remove({ output: 'mffs:interdiction_matrix' })
  event.recipes.create.sequenced_assembly(
    ['mffs:interdiction_matrix'], 'mffs:focus_matrix',
    [
      event.recipes.create.deploying('pcmc:incomplete_interdiction_matrix', ['pcmc:incomplete_interdiction_matrix', 'tfmg:steel_casing']),
      event.recipes.create.deploying('pcmc:incomplete_interdiction_matrix', ['pcmc:incomplete_interdiction_matrix', 'mffs:shock_module']),
      event.recipes.create.deploying('pcmc:incomplete_interdiction_matrix', ['pcmc:incomplete_interdiction_matrix', 'minecraft:ender_chest']),
      event.recipes.create.deploying('pcmc:incomplete_interdiction_matrix', ['pcmc:incomplete_interdiction_matrix', 'tfmg:steel_mechanism']),
      event.recipes.create.deploying('pcmc:incomplete_interdiction_matrix', ['pcmc:incomplete_interdiction_matrix', 'create:precision_mechanism']),
      event.recipes.create.pressing('pcmc:incomplete_interdiction_matrix', 'pcmc:incomplete_interdiction_matrix')
    ]
  ).transitionalItem('pcmc:incomplete_interdiction_matrix').loops(1)

  // ── MID-TIER MACHINES — deep but not flagship: rich TFMG-steel crafts, no full chain. ──

  // FORTRON GENERATOR (coercion_deriver). orig: c:ingots/steel + battery + focus_matrix
  // The steel_mechanism is TFMG's kinetic part — "this derives Fortron from mechanical power."
  event.remove({ output: 'mffs:coercion_deriver' })
  event.shaped('mffs:coercion_deriver', ['SMS', 'BFB', 'SES'], {
    S: '#c:ingots/steel', M: 'tfmg:steel_mechanism', B: 'mffs:battery', F: 'mffs:focus_matrix', E: 'create:electron_tube'
  })

  // FORTRON CAPACITOR (energy storage). orig: c:ingots/steel + battery + focus_matrix
  event.remove({ output: 'mffs:fortron_capacitor' })
  event.shaped('mffs:fortron_capacitor', ['CBC', 'SFS', 'CBC'], {
    C: 'tfmg:steel_casing', B: 'mffs:battery', S: '#c:ingots/steel', F: 'mffs:focus_matrix'
  })
})
