// Create spine — TFMG VOLTAGE LAYER REMOVED (returns with the 2.0 electricity overhaul, #282).
//
// TFMG ships a third electric network: a real circuit sim in SI units (volts/amps/watts/ohms — U=IR
// voltage splitting, transformer turn ratios), parallel to the createaddition/New Age FE wires. Two
// findings from tfmg-1.2.0 bytecode forced a decision:
//
//   1. Its rates are un-pegged. tfmg:generator makes 40 W per RPM against a 50 SU/RPM impact — ~0.8
//      FE-equivalent per SU·tick, ~27x the 0.029296875 base rate createaddition + New Age share — and
//      two blocks bridge volts<->FE (tfmg:converter in, tfmg:accumulator out), so the cheap generator
//      could mint real FE.
//   2. NO TFMG machine accepts Forge Energy. The volt grid powers only its own devices; TFMG's
//      PRODUCTION machinery (blast furnace, distillation, centrifuge, winding machine, ...) is kinetic
//      (tfmg:machine_input). The grid's only production machine is the polarizer (magnetic_alloy ->
//      magnet), and every magnet consumer is itself a grid device — the layer is fully self-contained.
//
// DECISION (Xela): remove TFMG's electricity wholesale rather than maintain a third parallel grid;
// re-add it properly re-tiered when the 2.0 electricity overhaul (#282) rebuilds the electric stack.
// Until then the pack's electricity is exactly two pegged systems: createaddition (the converter
// backbone) + New Age (T4 coil/motors/reactor).
//
// WHAT GOES (all recipe removals; the full grid family, verified self-contained vs the recipe dump):
// generation (generator, rotor/stator multiblock), conversion/storage (converter, accumulator),
// transmission (cables, hubs, posts, insulators, tubes, transformers, coils, switches, diodes,
// potentiometers, resistor), devices (electric_motor, electric_pump, polarizer + its magnet output,
// voltage_observer, segmented_display, traffic_light), instruments (voltmeter, the 17 multimeters,
// electricians_wrench), and the electric lights (light_bulb, neon_tube, circular_light, aluminum_lamp,
// modern_light).
//
// WHAT STAYS — and why this is safe:
//   * tfmg:capacitor_item + unfinished_capacitor — components of the CIRCUIT BOARD line (T3/T4 gates);
//     boards are unaffected.
//   * wires + spools (copper/aluminum/constantan) — materials used across TFMG machine recipes + weaves.
//   * magnetic alloy materials (ingot/block) — generic alloys; only the polarizing->magnet recipe goes.
//   * gas_lamp — gas-burning, not electric (machinery/misc); decoration survives where it has fuel.
//   * turbine/regular/radial/large engines, turbine_blade — kinetic fuel->SU producers, not grid.
//   * createaddition:electric_motor replaces tfmg:electric_motor as the T4 drive in the excavation
//     machines (55-weave) and the T3 representative set (00-tiers).
//
// Cross-file: 51-weave (voltmeter + the staged electric_motor seam retired), 60-machines (electric_pump,
// polarizer, 6 cable hubs, accumulator not re-added) — pointers at each site. VISIBILITY: the family is
// also hidden from JEI via config/jei/blacklist.cfg (67 digest-verified ids, incl. the unfinished_*
// transitionals this file's removals orphan) — recipes gone here, search entries gone there; keep the
// two lists in step. Removals here are load-safe no-ops for ids without recipes. Existing placed blocks
// in dev worlds keep working until broken (recipe removal, not registry removal). Verification: #315 /
// PR #234 playtest.
//
// STATUS: list verified vs tools/recipe-dump + the mod-data digest, load-safe, UNVERIFIED IN-GAME.

const TFMG_VOLTAGE_LAYER = [
  // generation + conversion + storage
  'tfmg:generator', 'tfmg:rotor', 'tfmg:stator', 'tfmg:converter', 'tfmg:accumulator',
  // transmission + network control
  'tfmg:cable_connector', 'tfmg:cable_tube', 'tfmg:concrete_encased_cable_tube',
  'tfmg:diagonal_cable_block', 'tfmg:copycat_cable_block', 'tfmg:copycat_cable_base',
  'tfmg:aluminum_cable_hub', 'tfmg:brass_cable_hub', 'tfmg:copper_cable_hub',
  'tfmg:steel_cable_hub', 'tfmg:heavy_cable_hub', 'tfmg:steel_casing_cable_hub',
  'tfmg:electric_post', 'tfmg:concrete_encased_electric_post',
  'tfmg:glass_cable_insulator', 'tfmg:glass_insulator_segment',
  'tfmg:transformer', 'tfmg:large_transformer',
  'tfmg:electromagnetic_coil', 'tfmg:large_electromagnetic_coil', 'tfmg:large_coil',
  'tfmg:electrical_switch', 'tfmg:large_switch',
  'tfmg:electric_diode', 'tfmg:encased_diode',
  'tfmg:potentiometer', 'tfmg:encased_potentiometer', 'tfmg:resistor',
  // devices
  'tfmg:electric_motor', 'tfmg:electric_pump', 'tfmg:polarizer', 'tfmg:magnet',
  'tfmg:voltage_observer', 'tfmg:segmented_display', 'tfmg:traffic_light',
  // instruments
  'tfmg:voltmeter', 'tfmg:electricians_wrench', 'tfmg:multimeter',
  'tfmg:black_multimeter', 'tfmg:blue_multimeter', 'tfmg:brown_multimeter', 'tfmg:cyan_multimeter',
  'tfmg:gray_multimeter', 'tfmg:green_multimeter', 'tfmg:light_blue_multimeter',
  'tfmg:light_gray_multimeter', 'tfmg:lime_multimeter', 'tfmg:magenta_multimeter',
  'tfmg:orange_multimeter', 'tfmg:pink_multimeter', 'tfmg:purple_multimeter',
  'tfmg:red_multimeter', 'tfmg:white_multimeter', 'tfmg:yellow_multimeter',
  // electric lights
  'tfmg:light_bulb', 'tfmg:neon_tube', 'tfmg:circular_light', 'tfmg:aluminum_lamp', 'tfmg:modern_light'
]

ServerEvents.recipes(event => {
  TFMG_VOLTAGE_LAYER.forEach(id => event.remove({ output: id }))
  console.info(`[pcmc-spine] TFMG voltage layer removed: ${TFMG_VOLTAGE_LAYER.length} grid outputs uncraftable pending the 2.0 electricity overhaul (#282)`)
})
