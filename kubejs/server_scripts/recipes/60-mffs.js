// MFFS (Modular Force Field System) — "made through Create" (complexity-tiered).
//
// MFFS already plugs into the spine via `#c:ingots/steel` (Create-routed in this pack), but its
// real MACHINES — the force-field projector, the Fortron generator/capacitor, the interdiction
// matrix — are endgame tech that still crafted on a plain table. So gate by COMPLEXITY, the way
// Northstar already does (simple gear = a part gate; complex machines = real Create METHODS):
//
//   - focus_matrix (the field-focus component shared by every module): one precision gate
//     (create:electron_tube). Cheap, and it flows to all the simple modules — no need to touch
//     them individually.
//   - The MACHINES earn genuine depth: TFMG steel casings/mechanisms (the pack's endgame
//     Create-steel parts) + precision mechanisms, and the two marquee builds go through
//     create:mechanical_crafting (i.e. you must have built Create's Mechanical Crafters first).
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

  // ── MACHINES — endgame tech, gated on TFMG steel parts + mechanisms; marquee builds need the
  //    Mechanical Crafters (create:mechanical_crafting). ──

  // FORCE-FIELD PROJECTOR (flagship). orig: c:gems/diamond + c:ingots/steel + battery + focus_matrix
  event.remove({ output: 'mffs:projector' })
  event.recipes.create.mechanical_crafting('mffs:projector', [
    'CEC',
    'BFB',
    'CMC'
  ], { C: 'tfmg:steel_casing', E: 'create:electron_tube', B: 'mffs:battery', F: 'mffs:focus_matrix', M: 'create:precision_mechanism' })

  // INTERDICTION MATRIX (endgame area-denial). orig: focus_matrix + shock_module + ender_chest
  event.remove({ output: 'mffs:interdiction_matrix' })
  event.recipes.create.mechanical_crafting('mffs:interdiction_matrix', [
    ' E ',
    'SFS',
    'CMC'
  ], { E: 'minecraft:ender_chest', S: 'mffs:shock_module', F: 'mffs:focus_matrix', C: 'tfmg:steel_casing', M: 'create:precision_mechanism' })

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
