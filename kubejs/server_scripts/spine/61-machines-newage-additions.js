// Create spine — METHOD conversion: route New Age + Create Crafts & Additions MACHINES through Create.
//
// PURE METHOD CONVERSION: same ingredients, same grid layout, same output counts — only the crafting
// METHOD changes (plain crafting table -> create:mechanical_crafting). No new ingredients, no extra parts.
// A Create pack should assemble its machines/devices on the Mechanical Crafter, not a vanilla bench.
//
// SCOPE: machines/devices NOT already handled by the seam files (52-weave-tfmg-newage, 50-cross-tier,
// 20-power-ladder, 40-gates). Roots and simple parts are deliberately left on plain crafting:
//   - create_new_age:basic_energiser  -> ROOT (bootstrap), left craftable elsewhere.
//   - heat_pipe / carbon_brushes / electrical_connector -> simple PARTS, not devices.
//   - redstone/netherite/fluxuated magnets -> material components, not machines.
//   - createaddition:capacitor -> tiny 3-slot component, not a device.
//
// LOAD-SAFE / UNVERIFIED: grids taken verbatim from tools/recipe-dump/derpack-recipes.txt; parses +
// static-checks, but NOT playtest-verified.

ServerEvents.recipes(event => {
  // ── basic_motor — shaped -> mechanical_crafting. Pattern/keys/count identical. ──
  event.remove({ output: 'create_new_age:basic_motor' })
  event.recipes.create.mechanical_crafting('create_new_age:basic_motor', [
    'NNN',
    'MCS',
    'NNN'
  ], {
    N: '#c:nuggets/iron',
    M: 'create_new_age:magnetite_block',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  })

  // ── basic_motor_extension — shaped -> mechanical_crafting. Pattern/keys/count identical. ──
  event.remove({ output: 'create_new_age:basic_motor_extension' })
  event.recipes.create.mechanical_crafting('create_new_age:basic_motor_extension', [
    'III',
    'MCC',
    'III'
  ], {
    I: 'create_new_age:overcharged_iron',
    M: 'create_new_age:basic_motor',
    C: 'create_new_age:copper_circuit'
  })

  // ── heat_pump — shaped (1x3) -> mechanical_crafting. Pattern/keys/count(4) identical. ──
  event.remove({ output: 'create_new_age:heat_pump' })
  event.recipes.create.mechanical_crafting('4x create_new_age:heat_pump', [
    'PTP'
  ], {
    P: 'create_new_age:heat_pipe',
    T: 'create_new_age:thorium'
  })

  // ── heater — shaped (3x3) -> mechanical_crafting. Pattern/keys/count identical. ──
  event.remove({ output: 'create_new_age:heater' })
  event.recipes.create.mechanical_crafting('create_new_age:heater', [
    'N N',
    'NBN',
    'PIP'
  ], {
    N: '#c:nuggets/iron',
    B: 'create:empty_blaze_burner',
    I: 'create_new_age:overcharged_iron',
    P: 'create_new_age:heat_pipe'
  })

  // ── stirling_engine — shaped (2x3) -> mechanical_crafting. Pattern/keys/count identical. ──
  event.remove({ output: 'create_new_age:stirling_engine' })
  event.recipes.create.mechanical_crafting('create_new_age:stirling_engine', [
    'NSN',
    'PCP'
  ], {
    N: '#c:nuggets/iron',
    S: 'create:shaft',
    P: 'create_new_age:heat_pipe',
    C: '#c:storage_blocks/copper'
  })

  // ── createaddition:modular_accumulator — shaped (3x3) -> mechanical_crafting. Identical. ──
  // A power-storage DEVICE; the bare capacitor component stays on plain crafting.
  event.remove({ output: 'createaddition:modular_accumulator' })
  event.recipes.create.mechanical_crafting('createaddition:modular_accumulator', [
    ' R ',
    'CBC',
    ' W '
  ], {
    R: '#c:rods/copper',
    C: 'createaddition:capacitor',
    B: 'create:brass_casing',
    W: '#c:wires/electrum'
  })

  console.info('[derpack-spine] machines: New Age (basic_motor/extension, heat_pump, heater, stirling_engine) + Create Crafts & Additions (modular_accumulator) now assemble through Create (mechanical_crafting) — pure method swap, ingredients unchanged.')
})
