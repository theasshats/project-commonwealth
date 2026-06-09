// Create spine — METHOD conversion: TFMG MACHINE blocks/devices -> THROUGH Create.
//
// PURE METHOD OVERHAUL. This file takes TFMG machine / multi-part block recipes that were still on a plain
// vanilla bench and routes them through Create's Mechanical Crafter (create:mechanical_crafting), keeping the
// IDENTICAL pattern/keys/ingredients and output counts from the recipe dump. Nothing about WHAT goes in
// changes — only HOW it's assembled. No new ingredients, no cross-tier parts, no global.* state.
//
// This complements the seam files (40/50/51/52/53/54), which already converted the engines, gearboxes, the
// mixer, the winding machine, the distillation controller, the pumpjack crank and the two large engines (and
// wove createaddition electric parts into them). Those 12 outputs are NOT touched here. This file is the rest
// of TFMG's machine catalogue — the fluid-handling, blast-furnace, centrifuge, engine-cylinder and electrical
// multi-part blocks — getting the same "made through Create" treatment, but as a STRAIGHT type swap (no woven
// ingredient). The engine cylinders are an explicit exception left shaped — see the note at their position.
//
// WHAT'S A MACHINE (converted) vs a SIMPLE PART (left shaped): assembled devices and multi-part machine blocks
// route through the Crafter. Genuinely simple parts — plates/sheets/rods/nuggets, hand tools, building blocks
// (the *_reinforcement bricks, which are structural blocks not machines), and trivial pipe fittings (the
// *_fluid_valve = one plate + one pipe) — stay shaped. See the LEFT-AS-CRAFTING note at the bottom.
//
// mechanical_crafting takes the same grid as the shaped recipe; tags are '#c:...', items are bare ids. For the
// two shapeless devices (the mechanical_pumps) the same two items are laid into a small grid (rule 1).
// Grids/keys/counts all verified vs tools/recipe-dump/derpack-recipes.txt.
//
// STATUS: verified vs dump, load-safe, UNVERIFIED IN-GAME.

ServerEvents.recipes(event => {
  // ── Fluid tanks (assembled tank blocks): barrel + plates. count preserved. ──
  event.remove({ output: 'tfmg:aluminum_fluid_tank' })
  event.recipes.create.mechanical_crafting([
    ' P ',
    ' B ',
    ' P '
  ], {
    P: '#c:plates/aluminum',
    B: 'minecraft:barrel'
  }, 'tfmg:aluminum_fluid_tank').acceptMirrored(false)

  event.remove({ output: 'tfmg:cast_iron_fluid_tank' })
  event.recipes.create.mechanical_crafting([
    ' P ',
    ' B ',
    ' P '
  ], {
    P: '#c:plates/cast_iron',
    B: 'minecraft:barrel'
  }, 'tfmg:cast_iron_fluid_tank').acceptMirrored(false)

  event.remove({ output: 'tfmg:steel_fluid_tank' })
  event.recipes.create.mechanical_crafting([
    ' P ',
    ' B ',
    ' P '
  ], {
    P: '#c:plates/steel',
    B: 'minecraft:barrel'
  }, '2x tfmg:steel_fluid_tank').acceptMirrored(false)

  // ── Mechanical pumps (devices): shapeless cogwheel + pipe laid into a 2-cell grid. ──
  event.remove({ output: 'tfmg:aluminum_mechanical_pump' })
  event.recipes.create.mechanical_crafting([
    'CP'
  ], {
    C: 'create:cogwheel',
    P: 'tfmg:aluminum_pipe'
  }, 'tfmg:aluminum_mechanical_pump').acceptMirrored(false)

  event.remove({ output: 'tfmg:brass_mechanical_pump' })
  event.recipes.create.mechanical_crafting([
    'CP'
  ], {
    C: 'create:cogwheel',
    P: 'tfmg:brass_pipe'
  }, 'tfmg:brass_mechanical_pump').acceptMirrored(false)

  event.remove({ output: 'tfmg:cast_iron_mechanical_pump' })
  event.recipes.create.mechanical_crafting([
    'CP'
  ], {
    C: 'create:cogwheel',
    P: 'tfmg:cast_iron_pipe'
  }, 'tfmg:cast_iron_mechanical_pump').acceptMirrored(false)

  event.remove({ output: 'tfmg:plastic_mechanical_pump' })
  event.recipes.create.mechanical_crafting([
    'CP'
  ], {
    C: 'create:cogwheel',
    P: 'tfmg:plastic_pipe'
  }, 'tfmg:plastic_mechanical_pump').acceptMirrored(false)

  event.remove({ output: 'tfmg:steel_mechanical_pump' })
  event.recipes.create.mechanical_crafting([
    'CP'
  ], {
    C: 'create:cogwheel',
    P: 'tfmg:steel_pipe'
  }, 'tfmg:steel_mechanical_pump').acceptMirrored(false)

  // ── Electric pump (electrical machine block). ──
  event.remove({ output: 'tfmg:electric_pump' })
  event.recipes.create.mechanical_crafting([
    'MQK',
    'CPW',
    'MQK'
  ], {
    M: 'tfmg:magnet',
    Q: 'tfmg:capacitor_item',
    K: 'tfmg:electromagnetic_coil',
    C: 'tfmg:circuit_board',
    P: 'tfmg:steel_mechanical_pump',
    W: '#c:wires/copper'
  }, 'tfmg:electric_pump').acceptMirrored(false)

  // ── Blast furnace multi-part machine blocks (hatch + output). ──
  event.remove({ output: 'tfmg:blast_furnace_hatch' })
  event.recipes.create.mechanical_crafting([
    'FIF',
    'PTP',
    'FIF'
  ], {
    F: 'tfmg:fireproof_bricks',
    I: '#c:plates/cast_iron',
    P: 'tfmg:cast_iron_pipe',
    T: 'tfmg:cast_iron_fluid_tank'
  }, 'tfmg:blast_furnace_hatch').acceptMirrored(false)

  event.remove({ output: 'tfmg:blast_furnace_output' })
  event.recipes.create.mechanical_crafting([
    'BCB',
    'CQC',
    'BCB'
  ], {
    B: 'tfmg:fireproof_bricks',
    C: 'tfmg:cast_iron_pipe',
    Q: '#c:storage_blocks/cast_iron'
  }, 'tfmg:blast_furnace_output').acceptMirrored(false)

  // ── Centrifuge (machine block). ──
  event.remove({ output: 'tfmg:centrifuge' })
  event.recipes.create.mechanical_crafting([
    'BAB',
    'BAB',
    'BAB'
  ], {
    A: '#c:ingots/aluminum',
    B: 'tfmg:aluminum_bars'
  }, 'tfmg:centrifuge').acceptMirrored(false)

  // ── Crankshaft (engine drivetrain device). ──
  event.remove({ output: 'tfmg:crankshaft' })
  event.recipes.create.mechanical_crafting([
    'ABA',
    'BAB',
    '   '
  ], {
    A: '#c:rods/steel',
    B: '#c:plates/aluminum'
  }, 'tfmg:crankshaft').acceptMirrored(false)

  // ── Engine cylinders: intentionally LEFT shaped (NOT converted). ──
  // tfmg:diesel_engine_cylinder and tfmg:simple_engine_cylinder are NOT plain machine
  // assemblies: their crafting recipes write fuel data onto the result as item COMPONENTS
  // (`tfmg:fuel_tags` / `tfmg:fuels`) — they are the entry point of TFMG's engine-fueling
  // upgrade chain (engine_cylinder_gas / engine_cylinder_spark_plug build on them). A
  // create.mechanical_crafting output id cannot reproduce those result components, so a
  // straight type swap would silently strip the fuel data and break the engine system.
  // Per rule 3 ("when unsure, skip"), these stay on their original shaped recipes.

  // ── Accumulator (electrical energy-storage machine block). ──
  event.remove({ output: 'tfmg:accumulator' })
  event.recipes.create.mechanical_crafting([
    'LWL',
    'SBS',
    'LCL'
  ], {
    L: '#c:ingots/lithium',
    W: '#c:wires/copper',
    S: '#c:plates/nickel',
    B: '#c:storage_blocks/lithium',
    C: 'tfmg:industrial_aluminum_casing'
  }, 'tfmg:accumulator').acceptMirrored(false)

  // ── Chemical vats (fluid-processing machine blocks). ──
  event.remove({ output: 'tfmg:cast_iron_chemical_vat' })
  event.recipes.create.mechanical_crafting([
    'PPP',
    'NTN',
    'PPP'
  ], {
    N: '#c:plates/lead',
    P: '#c:plates/cast_iron',
    T: 'tfmg:cast_iron_fluid_tank'
  }, 'tfmg:cast_iron_chemical_vat').acceptMirrored(false)

  event.remove({ output: 'tfmg:steel_chemical_vat' })
  event.recipes.create.mechanical_crafting([
    'PPP',
    'NTN',
    'PPP'
  ], {
    N: '#c:plates/nickel',
    P: '#c:plates/steel',
    T: 'tfmg:steel_fluid_tank'
  }, '2x tfmg:steel_chemical_vat').acceptMirrored(false)

  event.remove({ output: 'tfmg:fireproof_chemical_vat' })
  event.recipes.create.mechanical_crafting([
    'PRP',
    'NTN',
    'PHP'
  ], {
    P: 'tfmg:fireproof_bricks',
    R: 'tfmg:rubber_sheet',
    N: 'tfmg:circuit_board',
    T: 'tfmg:steel_chemical_vat',
    H: 'tfmg:heavy_machinery_casing'
  }, 'tfmg:fireproof_chemical_vat').acceptMirrored(false)

  // ── Firebox (heating machine block). ──
  event.remove({ output: 'tfmg:firebox' })
  event.recipes.create.mechanical_crafting([
    'BTB',
    'PPP',
    'BPB'
  ], {
    B: 'tfmg:fireproof_bricks',
    P: 'tfmg:brass_pipe',
    T: 'tfmg:steel_fluid_tank'
  }, 'tfmg:firebox').acceptMirrored(false)

  // ── Polarizer (electrical instrument machine). ──
  event.remove({ output: 'tfmg:polarizer' })
  event.recipes.create.mechanical_crafting([
    'BWB',
    'CVC',
    'RSR'
  ], {
    B: '#c:plates/brass',
    W: '#c:wires/copper',
    C: 'tfmg:capacitor_item',
    V: 'tfmg:voltmeter',
    R: 'tfmg:resistor',
    S: 'tfmg:steel_casing'
  }, 'tfmg:polarizer').acceptMirrored(false)

  // ── Cable hubs (electrical distribution devices). count preserved (all 2x). ──
  event.remove({ output: 'tfmg:aluminum_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    'MMM',
    'WWW'
  ], {
    M: '#c:ingots/aluminum',
    W: '#c:wires/copper'
  }, '2x tfmg:aluminum_cable_hub').acceptMirrored(false)

  event.remove({ output: 'tfmg:brass_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    'MMM',
    'WWW'
  ], {
    M: '#c:ingots/brass',
    W: '#c:wires/copper'
  }, '2x tfmg:brass_cable_hub').acceptMirrored(false)

  event.remove({ output: 'tfmg:copper_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    'MMM',
    'WWW'
  ], {
    M: '#c:ingots/copper',
    W: '#c:wires/copper'
  }, '2x tfmg:copper_cable_hub').acceptMirrored(false)

  event.remove({ output: 'tfmg:steel_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    'MMM',
    'WWW'
  ], {
    M: '#c:nuggets/steel',
    W: '#c:wires/copper'
  }, '2x tfmg:steel_cable_hub').acceptMirrored(false)

  event.remove({ output: 'tfmg:heavy_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    ' M ',
    'WWW'
  ], {
    M: 'tfmg:heavy_machinery_casing',
    W: '#c:wires/copper'
  }, '2x tfmg:heavy_cable_hub').acceptMirrored(false)

  event.remove({ output: 'tfmg:steel_casing_cable_hub' })
  event.recipes.create.mechanical_crafting([
    'WWW',
    ' M ',
    'WWW'
  ], {
    M: 'tfmg:steel_casing',
    W: '#c:wires/copper'
  }, '2x tfmg:steel_casing_cable_hub').acceptMirrored(false)

  // ── Smokestacks (machine exhaust multi-part blocks). count preserved (all 4x). ──
  event.remove({ output: 'tfmg:brick_smokestack' })
  event.recipes.create.mechanical_crafting([
    'BPB',
    'BPB',
    'BPB'
  ], {
    B: 'minecraft:bricks',
    P: 'tfmg:industrial_pipe'
  }, '4x tfmg:brick_smokestack').acceptMirrored(false)

  event.remove({ output: 'tfmg:concrete_smokestack' })
  event.recipes.create.mechanical_crafting([
    'BPB',
    'BPB',
    'BPB'
  ], {
    B: 'tfmg:concrete',
    P: 'tfmg:industrial_pipe'
  }, '4x tfmg:concrete_smokestack').acceptMirrored(false)

  event.remove({ output: 'tfmg:metal_smokestack' })
  event.recipes.create.mechanical_crafting([
    'BPB',
    'BPB',
    'BPB'
  ], {
    B: '#c:nuggets/steel',
    P: 'tfmg:industrial_pipe'
  }, '4x tfmg:metal_smokestack').acceptMirrored(false)

  console.info('[derpack-spine] machines TFMG: 26 TFMG machine/multi-part blocks now route THROUGH Create (mechanical_crafting), pure method swap; simple parts (fluid valves, reinforcement blocks, hammer heads) and the component-bearing engine cylinders left shaped.')
})
