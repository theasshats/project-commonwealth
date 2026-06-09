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
// THROUGH CREATE: the assembled T3 machines (engines, gearboxes, the mixer, the winding machine, the
// distillation controller) are no longer hand-craftable on a vanilla bench — they route through the
// Mechanical Crafter (create:mechanical_crafting), same grid/keys as their original shaped recipes. Genuinely
// basic parts (voltmeter = a handheld meter; pumpjack_crank = a crank component) stay shaped so a low tier
// isn't over-gated. The two large engines were already mechanical_crafting upstream — kept as-is.
//
// OWNED ELSEWHERE — not re-authored here: tfmg:copper_spool / createaddition:copper_spool (welded in
// 50-cross-tier.js); engine_controller's #c:wires/copper row already feeds Additions' wire (per 50's note).
//
// Each recipe below keeps its ORIGINAL grid/keys from the dump and weaves in ONE createaddition electric
// part as a hard ingredient. Only the METHOD changes (shaped -> mechanical_crafting for machines). Grids
// verified vs tools/recipe-dump/derpack-recipes.txt. Note bare 'accumulator' does NOT exist in this pack —
// Additions ships createaddition:modular_accumulator; the parts used here are capacitor / electric_motor /
// copper_wire / alternator (all confirmed in the dump).
//
// STATUS: verified vs dump, load-safe, UNVERIFIED IN-GAME.

ServerEvents.recipes(event => {
  const mc = (p, k, o) => event.recipes.create.mechanical_crafting(o, p, k)
  // ── engine_gearbox: +copper_wire. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:engine_gearbox' })
  mc([
    'KMK',
    'SCS',
    'KWK'
  ], {
    K: 'tfmg:screw',
    M: 'tfmg:steel_mechanism',
    S: 'create:shaft',
    C: 'tfmg:steel_casing',
    W: 'createaddition:copper_wire'           // Additions electric part woven in
  }, 'tfmg:engine_gearbox').acceptMirrored(false)

  // ── steel_gearbox: +copper_wire. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:steel_gearbox' })
  mc([
    ' O ',
    'OCO',
    ' W '
  ], {
    O: 'tfmg:steel_cogwheel',
    C: 'tfmg:heavy_machinery_casing',
    W: 'createaddition:copper_wire'           // Additions electric part woven in
  }, 'tfmg:steel_gearbox').acceptMirrored(false)

  // ── voltmeter: +capacitor. KEPT SHAPED — a handheld meter is a basic part, not a T3 machine. ──
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

  // ── regular_engine: +electric_motor. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:regular_engine' })
  mc([
    ' M ',
    'OIO',
    'ICI'
  ], {
    M: 'createaddition:electric_motor',       // Additions motor drives the engine
    O: '#c:ingots/steel',
    I: '#c:plates/steel',
    C: 'tfmg:heavy_machinery_casing'
  }, 'tfmg:regular_engine').acceptMirrored(false)

  // ── radial_engine: +electric_motor. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:radial_engine' })
  mc([
    'IOI',
    'OCO',
    'MSM'
  ], {
    I: '#c:nuggets/steel',
    O: '#c:ingots/steel',
    C: 'tfmg:heavy_machinery_casing',
    S: 'create:shaft',
    M: 'createaddition:electric_motor'        // Additions motor drives the engine
  }, 'tfmg:radial_engine').acceptMirrored(false)

  // ── turbine_engine: +alternator. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:turbine_engine' })
  mc([
    'OOO',
    'PHA',
    'OOO'
  ], {
    O: '#c:plates/steel',
    P: 'tfmg:aluminum_pipe',
    H: 'tfmg:heavy_machinery_casing',
    A: 'createaddition:alternator'            // Additions alternator: turbine generates power
  }, 'tfmg:turbine_engine').acceptMirrored(false)

  // ── industrial_mixer: +electric_motor. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:industrial_mixer' })
  mc([
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
  }, 'tfmg:industrial_mixer').acceptMirrored(false)

  // ── winding_machine: +copper_wire. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:winding_machine' })
  mc([
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
  }, 'tfmg:winding_machine').acceptMirrored(false)

  // ── steel_distillation_controller: +capacitor. T3 machine -> Mechanical Crafter. ──
  event.remove({ output: 'tfmg:steel_distillation_controller' })
  mc([
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
  }, 'tfmg:steel_distillation_controller').acceptMirrored(false)

  // ── pumpjack_crank: +copper_wire. KEPT SHAPED — a crank component is a basic part, not a T3 machine. ──
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

  // ── simple_large_engine (mechanical_crafting): +capacitor at the core. Already through Create upstream;
  //    type/shape preserved, one core cell swapped to an Additions capacitor. ──
  event.remove({ output: 'tfmg:simple_large_engine' })
  mc([
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

  // ── large_engine (mechanical_crafting): +electric_motor. Already through Create upstream; type/shape
  //    preserved, the bottom plate row's center cell carries the motor. ──
  event.remove({ output: 'tfmg:large_engine' })
  mc([
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

  console.info('[derpack-spine] weave Additions->TFMG: 10 TFMG T3 machines now route THROUGH Create (mechanical_crafting) and require createaddition parts; voltmeter + pumpjack_crank kept shaped as basic parts.')
})
