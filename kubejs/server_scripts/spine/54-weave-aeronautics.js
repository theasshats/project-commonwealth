// SEAM — Aeronautics control ladder (LIGHT pass; reviewed/expanded next).
//
// Reinforces the analog->digital control progression and ties aeronautics control parts into the
// Create / TFMG / Additions tiers. Tier DAG (control complexity, no cycles):
//   T1 balloon (envelope+adjustable_burner+propeller)
//     -> T2 propelled+analog (propeller_bearing, create_tweaked_controllers)
//       -> T3 complex analog (gyroscopic_mechanism -> gimbal_sensor -> gyroscope)
//         -> T4 digital (aeroworks servos / gyroscope / joystick)
// Higher control tiers require lower + Create/TFMG/Additions parts. The digital aeroworks parts
// are woven to need a T3 industrial part (TFMG circuit / Additions electric) on top of their
// precision_mechanism/electron_tube core, so they read T3->T4.
//
// DO NOT re-author here (owned elsewhere): aeronautics:smart_propeller (50-cross-tier.js),
// aeronautics:gyroscopic_propeller_bearing (40-gates.js).
//
// load-safe: every recipe below removes then re-adds with its REAL original type + shape (verified
// against tools/recipe-dump/pcmc-recipes.txt); only one woven ingredient is added per recipe.
// All woven dep IDs (tfmg:etched_circuit_board, createaddition:electric_motor/electrum_sheet,
// create:cogwheel) confirmed present as real recipe outputs in the dump.
// unverified: not booted in-game (sandbox can't launch); needs playtest.

ServerEvents.recipes(event => {
  // ── T2 analog: propeller_bearing — keep it simple Create parts so it sits clearly BELOW the
  //    T3 gyroscopic line. Real grid: A=wooden_slab / S=#c:plates/iron / B=brass_casing. Add a
  //    cogwheel so the analog bearing reads as a turned/geared part (still T2, no digital dep). ──
  event.remove({ output: 'aeronautics:propeller_bearing' })
  event.recipes.create.mechanical_crafting('aeronautics:propeller_bearing', [
    ' A ',
    'CSC',
    ' B '
  ], {
    A: '#minecraft:wooden_slabs',
    S: '#c:plates/iron',
    C: 'create:cogwheel',                 // T2 analog gearing
    B: 'create:brass_casing'
  })

  // ── T3 analog: gimbal_sensor — keep on Create components (analog core). Real grid C/G/B column:
  //    compass / gyroscopic_mechanism / brass_casing. Re-asserted unchanged to anchor the T3 step
  //    explicitly in this seam (no digital parts — analog stays analog). ──
  event.remove({ output: 'simulated:gimbal_sensor' })
  event.shaped('simulated:gimbal_sensor', [
    'C',
    'G',
    'B'
  ], {
    C: 'minecraft:compass',
    G: 'simulated:gyroscopic_mechanism',  // T3 analog core (its own recipe untouched — not in dump)
    B: 'create:brass_casing'
  })

  // ── T3->T4 digital: aeroworks:gyroscope — original crafting_shapeless { flywheel, gimbal_sensor }.
  //    Digital control device -> routed through Create via mechanical_crafting. Weave a TFMG etched
  //    circuit so the digital gyroscope needs the T3 industrial circuit ladder, not just the analog
  //    gimbal sensor. ──
  event.remove({ output: 'aeroworks:gyroscope' })
  event.recipes.create.mechanical_crafting('aeroworks:gyroscope', [
    'FGZ'
  ], {
    F: 'create:flywheel',
    G: 'simulated:gimbal_sensor',         // T3 analog feed-in
    Z: 'tfmg:etched_circuit_board'        // T3 TFMG circuit -> makes the gyroscope read T4 digital
  })

  // ── T4 digital: mechanical_servo — real grid " A " / "DBD" / " C " (A=precision_mechanism,
  //    B=sequenced_gearshift, C=electron_tube, D=#c:ingots/brass). Replace one brass side with a
  //    TFMG etched circuit: the servo now needs the T3 circuit on top of its precision core. ──
  event.remove({ output: 'aeroworks:mechanical_servo' })
  event.recipes.create.mechanical_crafting('aeroworks:mechanical_servo', [
    ' A ',
    'ZBD',
    ' C '
  ], {
    A: 'create:precision_mechanism',
    B: 'create:sequenced_gearshift',
    C: 'create:electron_tube',
    D: '#c:ingots/brass',
    Z: 'tfmg:etched_circuit_board'        // T3 circuit gates the T4 digital servo
  })

  // ── T4 digital: stepper_servo — real grid " A " / "BCB" / " D " (A=precision_mechanism,
  //    B=sequenced_gearshift, C=#c:ingots/brass, D=electron_tube). Swap the brass core for an
  //    Additions electric_motor so the stepping servo reads off the T3 Additions electric chain. ──
  event.remove({ output: 'aeroworks:stepper_servo' })
  event.recipes.create.mechanical_crafting('aeroworks:stepper_servo', [
    ' A ',
    'BMB',
    ' D '
  ], {
    A: 'create:precision_mechanism',
    B: 'create:sequenced_gearshift',
    M: 'createaddition:electric_motor',   // T3 Additions electric -> T4 digital stepper
    D: 'create:electron_tube'
  })

  // ── T4 digital: joystick — real recipe create:mechanical_crafting, pattern (top->bottom)
  //    " L " / " P " / " S " / " B " / "BBB" (L=redstone_link, P=precision_mechanism, S=shaft,
  //    B=#c:ingots/brass). Swap the shaft row for an Additions electrum_sheet so the digital input
  //    device draws on the T3 Additions electric line alongside its precision mechanism. ──
  event.remove({ output: 'aeroworks:joystick' })
  event.recipes.create.mechanical_crafting('aeroworks:joystick', [
    ' L ',
    ' P ',
    ' E ',
    ' B ',
    'BBB'
  ], {
    L: 'create:redstone_link',
    P: 'create:precision_mechanism',
    E: 'createaddition:electrum_sheet',   // T3 Additions electric -> T4 digital joystick
    B: '#c:ingots/brass'
  })

  // ── AERONAUTICS = CRAFTER WORK (06-11 playtest call): flight machine blocks build on the Mechanical
  //    Crafter, not the crafting table. Stock shaped recipes removed and re-added as mechanical_crafting
  //    with their original grids (verified in the aeronautics 1.2.1 jar); the bearings/propeller above
  //    and the gate in 40-gates.js are converted in place. Parts (propellers, envelopes, goggles,
  //    handles) stay table-craftable. ──

  //    adjustable_burner — stock grid kept; the fire slot is #aeronautics:burner_fire, which 05-tags.js
  //    narrows to the basic_burner only (coal block removed), so the balloon burner is a BUILT heat
  //    source assembled on the Crafter. NOTE: this moves T1 ballooning behind a Mechanical Crafter.
  event.remove({ output: 'aeronautics:adjustable_burner' })
  event.recipes.create.mechanical_crafting('aeronautics:adjustable_burner', [
    'S S',
    'SCS',
    'ARA'
  ], {
    S: 'create:iron_sheet',
    C: '#aeronautics:burner_fire',
    A: 'create:andesite_alloy',
    R: 'minecraft:redstone'
  })

  //    steam_vent — stock grid kept (gold plate over copper block), Crafter-built like the rest of the
  //    flight machinery.
  event.remove({ output: 'aeronautics:steam_vent' })
  event.recipes.create.mechanical_crafting('aeronautics:steam_vent', [
    'G',
    'C'
  ], {
    G: '#c:plates/gold',
    C: 'minecraft:copper_block'
  })

  //    envelopes — ONE craft, colours by machine (06-11 round 3): the white envelope's stock shaped
  //    recipe is the only way to make a NEW envelope; the 15 colored shaped recipes go, leaving the
  //    stock deploying recipes (dye onto an envelope) as the only colour route. Washing stays.
  ;['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime',
    'magenta', 'orange', 'pink', 'purple', 'red', 'yellow'
  ].forEach(c => event.remove({ id: 'aeronautics:' + c + '_envelope' }))

  console.info('[pcmc-spine] weave-aeronautics: control ladder reinforced — propeller_bearing (T2) below gyroscopic; gimbal_sensor analog; gyroscope/servos/joystick (T4) need TFMG circuit / Additions electric; flight machines (burner/vent/bearings/propellers) are Mechanical Crafter builds.')
})
