// Create spine — WEAVE: Additions -> TFMG (the converter-layer gate).
//
// SEAM: createaddition (the FE/RF electric "converter layer") -> TFMG (T3 industrial). Goal: you cannot run
// TFMG's electric/industrial machines without first building the Additions electric components (alternator,
// capacitor, electric_motor, copper_wire), so the two electric ecosystems are genuinely interdependent —
// no self-contained TFMG T3 industry.
//
// TIER DAG (never a cycle): TFMG machines (T3) may require create parts, brass/copper, TFMG's own
// steel/circuits, AND createaddition electric parts. createaddition parts depend only on create + TFMG steel
// (a LOWER tier than these machines), so weaving them UP into TFMG machines adds no cycle. NOT touched:
// New Age / Nuclear (higher tier) are never pulled in here.
//
// OWNED ELSEWHERE — not re-authored here: tfmg:copper_spool / createaddition:copper_spool (welded in
// 50-cross-tier.js); engine_controller's #c:wires/copper row already feeds Additions' wire (per 50's note).
//
// Each recipe below keeps its ORIGINAL type/shape from the dump and weaves in ONE createaddition electric
// part as a hard ingredient. Grids verified vs tools/recipe-dump/derpack-recipes.txt. Note bare
// 'accumulator' does NOT exist in this pack — Additions ships createaddition:modular_accumulator; the parts
// used here are capacitor / electric_motor / copper_wire / alternator (all confirmed in the dump).
//
// STATUS: verified vs dump, load-safe, UNVERIFIED IN-GAME.

ServerEvents.recipes(event => {
  // ── engine_gearbox: +copper_wire. The electric drive coupling now needs Additions' wire. ──
  event.remove({ output: 'tfmg:engine_gearbox' })
  event.shaped('tfmg:engine_gearbox', [
    'KMK',
    'SCS',
    'KWK'
  ], {
    K: 'tfmg:screw',
    M: 'tfmg:steel_mechanism',
    S: 'create:shaft',
    C: 'tfmg:steel_casing',
    W: 'createaddition:copper_wire'           // Additions electric part woven in
  })

  // ── steel_gearbox: +copper_wire. Same electric-coupling rationale, cheaper tier. ──
  event.remove({ output: 'tfmg:steel_gearbox' })
  event.shaped('tfmg:steel_gearbox', [
    ' O ',
    'OCO',
    ' W '
  ], {
    O: 'tfmg:steel_cogwheel',
    C: 'tfmg:heavy_machinery_casing',
    W: 'createaddition:copper_wire'           // Additions electric part woven in
  })

  // ── voltmeter: +capacitor. A meter that reads charge now needs an Additions capacitor. ──
  event.remove({ output: 'tfmg:voltmeter' })
  event.shaped('tfmg:voltmeter', [
    'NNN',
    'NCN',
    'AEA'
  ], {
    N: '#c:nuggets/steel',
    C: 'minecraft:compass',
    A: '#c:ingots/steel',
    E: 'createaddition:capacitor'             // Additions capacitor replaces the bare magnet
  })

  // ── regular_engine: +electric_motor. The base engine now needs an Additions motor as its driver. ──
  event.remove({ output: 'tfmg:regular_engine' })
  event.shaped('tfmg:regular_engine', [
    ' M ',
    'OIO',
    'ICI'
  ], {
    M: 'createaddition:electric_motor',       // Additions motor drives the engine
    O: '#c:ingots/steel',
    I: '#c:plates/steel',
    C: 'tfmg:heavy_machinery_casing'
  })

  // ── radial_engine: +electric_motor. Higher-displacement engine, same motor gate. ──
  event.remove({ output: 'tfmg:radial_engine' })
  event.shaped('tfmg:radial_engine', [
    'IOI',
    'OCO',
    'MSM'
  ], {
    I: '#c:nuggets/steel',
    O: '#c:ingots/steel',
    C: 'tfmg:heavy_machinery_casing',
    S: 'create:shaft',
    M: 'createaddition:electric_motor'        // Additions motor drives the engine
  })

  // ── turbine_engine: +alternator. A turbine produces electricity -> needs Additions' alternator. ──
  event.remove({ output: 'tfmg:turbine_engine' })
  event.shaped('tfmg:turbine_engine', [
    'OOO',
    'PHA',
    'OOO'
  ], {
    O: '#c:plates/steel',
    P: 'tfmg:aluminum_pipe',
    H: 'tfmg:heavy_machinery_casing',
    A: 'createaddition:alternator'            // Additions alternator: turbine generates power
  })

  // ── industrial_mixer: +electric_motor. The powered mixer now needs an Additions motor. ──
  event.remove({ output: 'tfmg:industrial_mixer' })
  event.shaped('tfmg:industrial_mixer', [
    'KSK',
    'MHE',
    'KCK'
  ], {
    K: 'tfmg:screw',
    S: 'create:shaft',
    M: 'tfmg:steel_mechanism',
    H: 'tfmg:heavy_machinery_casing',
    E: 'createaddition:electric_motor',       // Additions motor drives the mixer
    C: 'tfmg:large_steel_cogwheel'
  })

  // ── winding_machine: +copper_wire. The coil-winder needs Additions' wire to feed its winding head. ──
  event.remove({ output: 'tfmg:winding_machine' })
  event.shaped('tfmg:winding_machine', [
    '  W',
    'ITP',
    'ICM'
  ], {
    W: 'createaddition:copper_wire',          // Additions wire feeds the winding head
    I: '#c:ingots/steel',
    T: 'create:shaft',
    P: '#c:plates/steel',
    C: 'tfmg:heavy_machinery_casing',
    M: 'tfmg:steel_mechanism'
  })

  // ── steel_distillation_controller: +capacitor. Its control board now needs an Additions capacitor. ──
  event.remove({ output: 'tfmg:steel_distillation_controller' })
  event.shaped('tfmg:steel_distillation_controller', [
    'SPS',
    'ECE',
    'MHA'
  ], {
    S: '#c:plates/lead',
    P: 'tfmg:industrial_pipe',
    E: 'create:electron_tube',
    C: 'minecraft:compass',
    M: 'tfmg:steel_mechanism',
    H: 'tfmg:heavy_machinery_casing',
    A: 'createaddition:capacitor'             // Additions capacitor on the controller
  })

  // ── pumpjack_crank: +copper_wire. The powered crank wires into the Additions electric layer. ──
  event.remove({ output: 'tfmg:pumpjack_crank' })
  event.shaped('tfmg:pumpjack_crank', [
    'PWP',
    'HMH',
    'RCR'
  ], {
    P: '#c:strings',
    W: 'createaddition:copper_wire',          // Additions wire woven in
    H: '#c:plates/steel',
    M: 'tfmg:steel_mechanism',
    R: '#c:rods/steel',
    C: 'tfmg:heavy_machinery_casing'
  })

  // ── simple_large_engine (mechanical_crafting): +capacitor at the core. Keeps the create:mechanical_crafting
  //    type/shape; one core cell swapped to an Additions capacitor so the big engine needs the converter layer. ──
  event.remove({ output: 'tfmg:simple_large_engine' })
  event.recipes.create.mechanical_crafting([
    'CCC',
    'OEO',
    'OMO',
    'OCO'
  ], {
    C: '#c:ingots/cast_iron',
    O: '#c:plates/steel',
    M: 'create:precision_mechanism',
    E: 'createaddition:capacitor'             // Additions capacitor at the engine core
  }, 'tfmg:simple_large_engine').acceptMirrored(false)

  // ── large_engine (mechanical_crafting): +electric_motor. Top mechanical engine now needs an Additions
  //    motor; type/shape preserved, the bottom plate row's center cell carries the motor. ──
  event.remove({ output: 'tfmg:large_engine' })
  event.recipes.create.mechanical_crafting([
    ' O ',
    ' B ',
    'AOA',
    'SCS',
    'STS',
    'HEH'
  ], {
    O: '#c:ingots/steel',
    B: '#c:ingots/aluminum',
    A: '#c:plates/aluminum',
    S: 'tfmg:steel_mechanism',
    C: 'tfmg:heavy_machinery_casing',
    T: 'tfmg:steel_fluid_tank',
    H: '#c:plates/steel',
    E: 'createaddition:electric_motor'        // Additions motor at the engine base
  }, 'tfmg:large_engine').acceptMirrored(true)

  console.info('[derpack-spine] weave Additions->TFMG: 12 TFMG electric/industrial machines now require createaddition parts (copper_wire/capacitor/electric_motor/alternator). TFMG T3 industry gated behind the Additions converter layer.')
})
