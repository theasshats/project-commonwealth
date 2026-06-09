// gnkinetics + simulated MACHINE method conversions (reviewed/trimmed).
//
// Pure method conversion: re-add with IDENTICAL ingredients/grid, changing only the recipe TYPE so
// genuine assembled MACHINES route through Create's mechanical_crafting. Grids verified vs
// tools/recipe-dump/derpack-recipes.txt. No new ingredients, no count changes, no global state.
//
// SCOPE (trimmed after review): ONLY real machines/engines/gearboxes. The first pass over-reached and
// routed ~15 small control PARTS through the crafter — sensors (velocity/optical/laser/altitude),
// link receivers, redstone magnet/inductor/accumulator, analog_transmission, torsion_spring, the
// 2-ingredient magnet gears, directional_gearshift. Those are components (peers of electron_tube /
// precision_mechanism) and stay table-craftable — routing a small part through the Mechanical Crafter
// is busywork, not a gate. See the trailing list.
//
// Excluded (owned by other seams): simulated:gyroscopic_mechanism, gimbal_sensor (54);
//   aeronautics:gyroscopic_propeller_bearing / propeller_bearing / smart_propeller (40/54/50).
// Already Create-typed in the dump: plunger_launcher, linked_typewriter, docking_connector,
//   engine_assembly. unverified — needs an in-game playtest.

ServerEvents.recipes(event => {
  // ── gnkinetics advanced gearboxes (multi-brass assemblies; simple/conversion gears stay on the bench) ──

  // planetary_gear — " b " / "bgb" / " b "  (b=#c:ingots/brass, g=gnkinetics:ring_gear)
  event.remove({ output: 'gnkinetics:planetary_gear' })
  event.recipes.create.mechanical_crafting('gnkinetics:planetary_gear', [' b ', 'bgb', ' b '], {
    b: '#c:ingots/brass', g: 'gnkinetics:ring_gear'
  })

  // ring_gear — "bbb" / "bgb" / "bbb"  (b=#c:ingots/brass, g=gnkinetics:hollow_large_brass_gear)
  event.remove({ output: 'gnkinetics:ring_gear' })
  event.recipes.create.mechanical_crafting('gnkinetics:ring_gear', ['bbb', 'bgb', 'bbb'], {
    b: '#c:ingots/brass', g: 'gnkinetics:hollow_large_brass_gear'
  })

  // ── simulated assembled MACHINES (the core devices; sensors/links/parts stay on the bench) ──

  // physics_assembler — the aeronautics assembler machine.  "   " / " N " / "ARA"
  event.remove({ output: 'simulated:physics_assembler' })
  event.recipes.create.mechanical_crafting('simulated:physics_assembler', ['   ', ' N ', 'ARA'], {
    A: 'create:andesite_alloy', N: 'minecraft:lever', R: 'create:andesite_casing'
  })

  // navigation_table — "S" / "P" / "B"
  event.remove({ output: 'simulated:navigation_table' })
  event.recipes.create.mechanical_crafting('simulated:navigation_table', ['S', 'P', 'B'], {
    S: '#c:plates/brass', P: 'create:precision_mechanism', B: 'create:brass_casing'
  })

  // swivel_bearing — " A " / " B " / " C "
  event.remove({ output: 'simulated:swivel_bearing' })
  event.recipes.create.mechanical_crafting('simulated:swivel_bearing', [' A ', ' B ', ' C '], {
    A: '#minecraft:wooden_slabs', B: 'create:industrial_iron_block', C: 'create:cogwheel'
  })

  // rope_winch — "I" / "H" / "S"
  event.remove({ output: 'simulated:rope_winch' })
  event.recipes.create.mechanical_crafting('simulated:rope_winch', ['I', 'H', 'S'], {
    I: '#c:plates/iron', H: 'create:shaft', S: 'create:industrial_iron_block'
  })

  // red_portable_engine — an engine.  "G" / "E" / "B"
  event.remove({ output: 'simulated:red_portable_engine' })
  event.recipes.create.mechanical_crafting('simulated:red_portable_engine', ['G', 'E', 'B'], {
    G: '#c:plates/iron', E: 'simulated:engine_assembly', B: 'minecraft:blast_furnace'
  })

  console.info('[derpack-spine] 62-machines-misc: 7 gnkinetics/simulated MACHINES routed through create:mechanical_crafting (sensors/links/small parts left on the bench).')

  // ── LEFT AS CRAFTING (reviewed — small control parts/components, not machines) ──
  // simulated sensors:        velocity_sensor, optical_sensor, laser_sensor, laser_pointer, altitude_sensor
  // simulated control parts:  redstone_magnet, redstone_inductor, redstone_accumulator, analog_transmission,
  //                           modulating_linked_receiver, directional_linked_receiver, directional_gearshift,
  //                           torsion_spring, spring, ropes, handles, steering_wheel, throttle_lever
  // gnkinetics:               magnet_gear / large_magnet_gear (gear + transmitter), all simple/conversion
  //                           gears, cog cranks, cogwheels — single-step parts.
})
