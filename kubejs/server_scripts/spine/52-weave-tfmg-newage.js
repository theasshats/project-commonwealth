// Create spine — WEAVE: end-of-TFMG -> Create: New Age T4 (reactor/electric tier).
//
// SEAM: the END of the TFMG (T3) chain feeds New Age's T4 parts. Reaching New Age's high-tier electric +
// reactor tier now depends on having climbed the full TFMG circuit/steel/plastic chain.
//
// TIER DAG (no cycles): New Age T4 parts may require create, TFMG end-products
//   (tfmg:etched_circuit_board, tfmg:coated_circuit_board, #c:ingots/steel | #c:plates/steel,
//   tfmg:plastic_sheet) and LOWER New Age parts. They must NOT require Nuclear (higher tier), and a TFMG
//   item must NEVER require a New Age item (that would be a cycle). Every weave below only ADDS a TFMG
//   end-product into an existing New Age recipe, keeping the original recipe type + shape.
//
// NOT touched (owned elsewhere): advanced_energiser, reinforced_energiser, basic/advanced solar plates.
// basic_energiser is the root and is deliberately SKIPPED to avoid breaking early bootstrap.
//
// LOAD-SAFE / UNVERIFIED: all grids are taken verbatim from tools/recipe-dump/derpack-recipes.txt; types
// and shapes are preserved, only ingredients change. Parses + static-checks, but NOT playtest-verified.

ServerEvents.recipes(event => {
  // ── reactor_casing (sequenced_assembly) — swap the iron-plate deploy step for STEEL plates. ──
  // The full reactor line bottoms out on the casing, so steel-gating it gates every reactor part.
  // ADDED: #c:plates/steel (replaces #c:plates/iron in the deploy step).
  event.remove({ output: 'create_new_age:reactor_casing' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'minecraft:bricks' },
    results: [{ count: 4, id: 'create_new_age:reactor_casing' }],
    sequence: [
      { type: 'create_new_age:energising', energy_needed: 500,
        ingredients: [{ item: 'create_new_age:incomplete_reactor_casing' }],
        results: [{ id: 'create_new_age:incomplete_reactor_casing' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_new_age:incomplete_reactor_casing' }, { tag: 'c:plates/steel' }],
        results: [{ id: 'create_new_age:incomplete_reactor_casing' }] },
      { type: 'create:pressing',
        ingredients: [{ item: 'create_new_age:incomplete_reactor_casing' }],
        results: [{ id: 'create_new_age:incomplete_reactor_casing' }] }
    ],
    transitional_item: { id: 'create_new_age:incomplete_reactor_casing' }
  })

  // ── reactor_glass (shaped) — add a coated circuit board to the central glass core. ──
  // ADDED: tfmg:coated_circuit_board (center slot, was glass).
  event.remove({ output: 'create_new_age:reactor_glass' })
  event.shaped('create_new_age:reactor_glass', [
    'CGC',
    'GZG',
    'CGC'
  ], {
    C: 'create_new_age:reactor_casing',
    G: '#c:glass_blocks',
    Z: 'tfmg:coated_circuit_board'            // TFMG circuit gates the reactor viewport
  })

  // ── reactor_fuel_acceptor (shaped) — add an etched circuit board between the funnels. ──
  // ADDED: tfmg:etched_circuit_board (center column).
  event.remove({ output: 'create_new_age:reactor_fuel_acceptor' })
  event.shaped('create_new_age:reactor_fuel_acceptor', [
    'CAC',
    'CZC',
    'CBC'
  ], {
    C: 'create_new_age:reactor_casing',
    A: 'create:andesite_funnel',
    B: 'create:brass_funnel',
    Z: 'tfmg:etched_circuit_board'            // TFMG circuit gates fuel handling
  })

  // ── reactor_heat_vent (shapeless) — add a plastic sheet as insulation. ──
  // ADDED: tfmg:plastic_sheet (extra ingredient; keeps the casing+heat_pipe core).
  event.remove({ output: 'create_new_age:reactor_heat_vent' })
  event.shapeless('create_new_age:reactor_heat_vent', [
    'create_new_age:reactor_casing',
    'create_new_age:reactor_casing',
    'create_new_age:heat_pipe',
    'create_new_age:heat_pipe',
    'tfmg:plastic_sheet'                       // TFMG plastic gates the heat vent
  ])

  // ── generator_coil (shaped) — swap the andesite-block core for STEEL ingots around it. ──
  // ADDED: #c:ingots/steel (center, was andesite_alloy_block).
  event.remove({ output: 'create_new_age:generator_coil' })
  event.shaped('create_new_age:generator_coil', [
    'CCC',
    'CSC',
    'CCC'
  ], {
    C: '#c:ingots/copper',
    S: '#c:ingots/steel'                       // TFMG steel cores the generator coil
  })

  // ── advanced_motor (shaped) — add an etched circuit board to the control core. ──
  // ADDED: tfmg:etched_circuit_board (a corner nugget slot becomes the circuit).
  event.remove({ output: 'create_new_age:advanced_motor' })
  event.shaped('create_new_age:advanced_motor', [
    'NZN',
    'ICS',
    'NNN'
  ], {
    C: 'create:brass_casing',
    I: 'create_new_age:overcharged_iron',
    N: '#c:nuggets/gold',
    S: 'create:shaft',
    Z: 'tfmg:etched_circuit_board'            // TFMG circuit gates the advanced motor
  })

  // ── reinforced_motor (mechanical_crafting) — swap iron plates for STEEL plates. ──
  // ADDED: #c:plates/steel (P, was #c:plates/iron).
  event.remove({ output: 'create_new_age:reinforced_motor' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      C: { item: 'create:brass_casing' },
      D: { item: 'create_new_age:overcharged_diamond' },
      P: { tag: 'c:plates/steel' },            // TFMG steel plates gate the reinforced motor
      R: { tag: 'c:storage_blocks/redstone' },
      S: { item: 'create:shaft' },
      d: { tag: 'c:gems/diamond' }
    },
    pattern: ['dDPPd', 'DCRSS', 'dDPPd'],
    result: { count: 2, id: 'create_new_age:reinforced_motor' }
  })

  // ── advanced_motor_extension (mechanical_crafting) — add a coated circuit board to the core row. ──
  // ADDED: tfmg:coated_circuit_board (B, flanking the reinforced motor in the core row).
  event.remove({ output: 'create_new_age:advanced_motor_extension' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      C: { item: 'create_new_age:copper_circuit' },
      D: { item: 'create_new_age:overcharged_diamond' },
      M: { item: 'create_new_age:reinforced_motor' },
      S: { item: 'create_new_age:overcharged_iron_sheet' },
      B: { item: 'tfmg:coated_circuit_board' } // TFMG circuit gates the advanced extension
    },
    pattern: ['SSSSS', 'BCMCB', 'SSSSS'],
    result: { count: 2, id: 'create_new_age:advanced_motor_extension' }
  })

  // ── layered_magnet (shaped) — swap the gold core row for STEEL ingots. ──
  // ADDED: #c:ingots/steel (G row, was overcharged_gold).
  event.remove({ output: 'create_new_age:layered_magnet' })
  event.shaped('create_new_age:layered_magnet', [
    'III',
    'SSS',
    'III'
  ], {
    I: 'create_new_age:overcharged_iron',
    S: '#c:ingots/steel'                       // TFMG steel cores the layered magnet
  })

  console.info('[derpack-spine] weave TFMG->New Age: reactor casing/glass/fuel_acceptor/heat_vent, generator_coil, advanced+reinforced motors, advanced_motor_extension, layered_magnet now consume TFMG end-products (steel/circuits/plastic).')
})
