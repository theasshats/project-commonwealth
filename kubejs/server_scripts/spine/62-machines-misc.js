// simulated (Create Aeronautics physics lib) MACHINE/device method conversions.
//
// Pure method conversion: re-add with IDENTICAL ingredients/grid, changing only the recipe TYPE so the
// assembled aeronautics CONTROL DEVICES route through Create's mechanical_crafting. Grids verified vs
// tools/recipe-dump/derpack-recipes.txt. No new ingredients, no count changes, no global state.
//
// SCOPE (re-reviewed): the simulated control devices/sensors are multi-part Create-Aeronautics gear and
// belong on the Mechanical Crafter. GEARS are deliberately NOT here — gnkinetics gears (planetary, ring,
// magnet, and all the simple/conversion gears) stay on the bench; routing gears through Create reads as
// busywork, and gnkinetics is a gear-expansion mod where gears are the basic vocabulary.
//
// Excluded (owned by other seams): simulated:gyroscopic_mechanism, gimbal_sensor (54);
//   aeronautics:gyroscopic_propeller_bearing / propeller_bearing / smart_propeller (40/54/50).
// Already Create-typed in the dump: plunger_launcher, linked_typewriter, docking_connector, engine_assembly.
// unverified — needs an in-game playtest.

ServerEvents.recipes(event => {
  const mc = (out, pattern, key) => { event.remove({ output: out }); event.recipes.create.mechanical_crafting(out, pattern, key) }

  // ── core machines ──
  mc('simulated:physics_assembler', ['   ', ' N ', 'ARA'], { A: 'create:andesite_alloy', N: 'minecraft:lever', R: 'create:andesite_casing' })
  mc('simulated:navigation_table', ['S', 'P', 'B'], { S: '#c:plates/brass', P: 'create:precision_mechanism', B: 'create:brass_casing' })
  mc('simulated:swivel_bearing', [' A ', ' B ', ' C '], { A: '#minecraft:wooden_slabs', B: 'create:industrial_iron_block', C: 'create:cogwheel' })
  mc('simulated:rope_winch', ['I', 'H', 'S'], { I: '#c:plates/iron', H: 'create:shaft', S: 'create:industrial_iron_block' })
  mc('simulated:directional_gearshift', ['ACRS'], { A: 'create:andesite_casing', C: 'create:cogwheel', R: 'minecraft:redstone_torch', S: 'create:shaft' })
  mc('simulated:red_portable_engine', ['G', 'E', 'B'], { G: '#c:plates/iron', E: 'simulated:engine_assembly', B: 'minecraft:blast_furnace' })

  // ── redstone control / storage ──
  mc('simulated:redstone_magnet', ['RCI'], { R: 'minecraft:redstone', C: '#c:plates/copper', I: 'create:industrial_iron_block' })
  mc('simulated:redstone_inductor', [' C ', 'RBT', 'SSS'], { C: '#c:plates/copper', R: '#c:dusts/redstone', B: '#c:plates/brass', T: 'minecraft:redstone_torch', S: '#c:stones' })
  mc('simulated:redstone_accumulator', [' Q ', 'RBT', 'SSS'], { Q: 'create:polished_rose_quartz', R: '#c:dusts/redstone', B: '#c:plates/brass', T: 'minecraft:redstone_torch', S: '#c:stones' })
  mc('simulated:modulating_linked_receiver', ['A', 'B', 'C'], { A: 'create:transmitter', B: '#c:plates/gold', C: 'create:brass_casing' })
  mc('simulated:directional_linked_receiver', ['A', 'B', 'C'], { A: 'create:transmitter', B: '#c:plates/iron', C: 'create:brass_casing' })
  mc('simulated:analog_transmission', ['BSCE'], { B: 'create:brass_casing', S: 'create:shaft', C: 'create:cogwheel', E: 'create:electron_tube' })

  // ── sensors ──
  mc('simulated:velocity_sensor', ['P', 'B', 'A'], { P: 'create:propeller', B: 'minecraft:barrel', A: 'create:andesite_casing' })
  mc('simulated:optical_sensor', [' A ', ' C ', ' B '], { A: 'minecraft:amethyst_shard', C: 'create:electron_tube', B: 'create:brass_casing' })
  mc('simulated:laser_sensor', ['G', 'A', 'C'], { G: 'minecraft:tinted_glass', A: '#simulated:laser_point_lens', C: 'create:andesite_casing' })
  mc('simulated:laser_pointer', ['A', 'T', 'C'], { A: '#simulated:laser_point_lens', T: 'minecraft:redstone_torch', C: 'create:andesite_casing' })
  mc('simulated:altitude_sensor', ['P', 'S', 'A'], { P: 'minecraft:paper', S: '#c:plates/iron', A: 'create:andesite_casing' })
  mc('simulated:torsion_spring', ['A', 'S', 'C'], { A: 'create:shaft', S: 'simulated:spring', C: 'create:andesite_casing' })

  console.info('[derpack-spine] 62-machines-misc: 18 simulated aeronautics control devices/sensors routed through create:mechanical_crafting. gnkinetics gears left on the bench.')

  // LEFT AS CRAFTING: all gnkinetics gears (planetary/ring/magnet/simple/conversion) — gears stay benchcraftable;
  //   simulated simple parts (spring, ropes, handles, steering_wheel, throttle_lever, cosmetics).
})
