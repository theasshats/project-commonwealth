// Create spine — WEAVE: New Age + TFMG -> Create Nuclear (the T4 end-game gate).
//
// SEAM: Nuclear is the HIGHEST tier. Nothing in the pack currently gates the reactor multiblock or the
// uranium fuel chain behind a T4 producer, so a fresh Create+steel base can leap straight to a reactor.
// This file weaves New Age energisers (reinforced/advanced — the T4 electric tier) and TFMG etched circuits
// into every prerequisite of the reactor multiblock + fuel chain, so the core (boss-gated in 40-gates.js,
// DO NOT touch here) sits behind genuine end-game inputs.
//
// TIER DAG (never a cycle): Nuclear parts may require create / TFMG (steel, etched circuits) / New Age
// (energisers) / lower Nuclear parts. Nothing lower may require Nuclear back. All woven ingredients here
// are strictly lower-tier (TFMG T3, New Age T4 electric) feeding the highest tier — DAG safe.
//
// Each recipe below keeps its REAL type + shape from tools/recipe-dump/derpack-recipes.txt and weaves a T4
// prereq into a spare/extra slot. Raw uranium ORE is left untouched (enrichment realism — we gate processed
// steps only). createnuclear:reactor_core is OWNED by 40-gates.js and is NOT touched here.
//
// LOAD-SAFE / UNVERIFIED: parses + node --check clean; all ids verified against the recipe dump. NOT
// playtested in-game (CI is parse-only) — boot a fresh world and confirm each recipe resolves in JEI.

ServerEvents.recipes(event => {
  // ── REACTOR MULTIBLOCK ──────────────────────────────────────────────────

  // reactor_casing — real: item_application brass_casing + #c:ingots/steel. Re-route through a shaped
  // recipe so we can weave a TFMG etched circuit in (item_application is 2-slot, no room). Keeps steel.
  // T4 PREREQ ADDED: tfmg:etched_circuit_board (TFMG T3 circuit ladder).
  event.remove({ output: 'createnuclear:reactor_casing' })
  event.shaped('createnuclear:reactor_casing', [
    'SBS',
    'ZBZ',
    'SBS'
  ], {
    B: 'create:brass_casing',
    S: '#c:ingots/steel',
    Z: 'tfmg:etched_circuit_board'            // TFMG circuit woven into the base casing -> all parts inherit it
  })

  // reactor_controller — real: 5x5 mechanical_crafting (casing/netherite/content_observer/electron_tube/
  // item_vault/nether_star). Swap one netherite slot for a New Age advanced energiser: the controller (the
  // brain of the multiblock) now needs the top electric component.
  // T4 PREREQ ADDED: create_new_age:advanced_energiser.
  event.remove({ output: 'createnuclear:reactor_controller' })
  event.recipes.create.mechanical_crafting('createnuclear:reactor_controller', [
    'CCCCC',
    'CNONC',
    'CTXTC',
    'CEVNC',
    'CCCCC'
  ], {
    C: 'createnuclear:reactor_casing',
    N: '#c:ingots/netherite',
    O: 'create:content_observer',
    T: 'create:electron_tube',
    V: 'create:item_vault',
    X: 'minecraft:nether_star',
    E: 'create_new_age:advanced_energiser'    // T4 electric brain gates the controller
  }).acceptMirrored(true)

  // reactor_input — real: item_application reactor_casing + hopper. 2-slot, no room; re-route to shaped to
  // weave a reinforced energiser (this block pumps fuel in — give it a real power part).
  // T4 PREREQ ADDED: create_new_age:reinforced_energiser.
  event.remove({ output: 'createnuclear:reactor_input' })
  event.shaped('createnuclear:reactor_input', [
    ' H ',
    'CEC'
  ], {
    H: 'minecraft:hopper',
    C: 'createnuclear:reactor_casing',
    E: 'create_new_age:reinforced_energiser'  // T4 energiser woven into the fuel-input block
  })

  // reactor_output — real: item_application reactor_casing + create:shaft. Re-route to shaped to weave a
  // reinforced energiser alongside the shaft (power take-off block).
  // T4 PREREQ ADDED: create_new_age:reinforced_energiser.
  event.remove({ output: 'createnuclear:reactor_output' })
  event.shaped('createnuclear:reactor_output', [
    ' S ',
    'CEC'
  ], {
    S: 'create:shaft',
    C: 'createnuclear:reactor_casing',
    E: 'create_new_age:reinforced_energiser'  // T4 energiser woven into the power-output block
  })

  // reactor_cooler — real: 5x5 mechanical_crafting (casing / reinforced_glass / blue_ice / steel). Swap the
  // two steel slots' neighbours: replace the inner steel pair with reinforced energisers (active cooling = a
  // powered part). Keeps casing/glass/ice; weaves T4 in.
  // T4 PREREQ ADDED: create_new_age:reinforced_energiser (x2, replacing the inner steel pair).
  event.remove({ output: 'createnuclear:reactor_cooler' })
  event.recipes.create.mechanical_crafting('createnuclear:reactor_cooler', [
    'CCCCC',
    'CEGEC',
    'CIGIC',
    'CEGEC',
    'CCCCC'
  ], {
    C: 'createnuclear:reactor_casing',
    G: 'createnuclear:reinforced_glass',
    I: 'minecraft:blue_ice',
    E: 'create_new_age:reinforced_energiser'  // powered active cooling gates the cooler behind T4
  }).acceptMirrored(true)

  // reactor_frame — real: 5x5 mechanical_crafting (casing / reinforced_glass / uranium_bucket / steel). The
  // inner steel pair becomes reinforced energisers; keeps the uranium_bucket centre + glass + casing.
  // T4 PREREQ ADDED: create_new_age:reinforced_energiser (x2, replacing the inner steel pair).
  event.remove({ output: 'createnuclear:reactor_frame' })
  event.recipes.create.mechanical_crafting('createnuclear:reactor_frame', [
    'CCCCC',
    'CEGEC',
    'CGBGC',
    'CEGEC',
    'CCCCC'
  ], {
    C: 'createnuclear:reactor_casing',
    G: 'createnuclear:reinforced_glass',
    B: 'createnuclear:uranium_bucket',
    E: 'create_new_age:reinforced_energiser'  // T4 energiser woven into the frame
  }).acceptMirrored(true)

  // reinforced_glass — real: shaped, #c:glass_blocks + #c:ingots/lead (3x3). Add a steel reinforcement to
  // raise it to a real Nuclear-tier component (it gates the cooler/frame above). Keeps lead + glass.
  // T4 PREREQ ADDED: #c:ingots/steel (TFMG steel; modest depth bump, not a full energiser — glass is bulk).
  event.remove({ output: 'createnuclear:reinforced_glass' })
  event.shaped('createnuclear:reinforced_glass', [
    'SGS',
    'GLG',
    'SGS'
  ], {
    G: '#c:glass_blocks',
    L: '#c:ingots/lead',
    S: '#c:ingots/steel'                      // TFMG steel reinforces the glass (bulk part -> steel, not energiser)
  })

  // ── FUEL CHAIN ──────────────────────────────────────────────────────────

  // graphite_rod — real: 4x3 mechanical_crafting (graphene + #c:ingots/steel columns). Add depth: swap the
  // centre graphene column's top into an etched circuit so the rod gains a TFMG step (GregTech-style depth,
  // not multiplied cost). Keeps graphene + steel shape.
  // T4 PREREQ ADDED: tfmg:etched_circuit_board (one slot, adding a processing step).
  event.remove({ output: 'createnuclear:graphite_rod' })
  event.recipes.create.mechanical_crafting('createnuclear:graphite_rod', [
    'SZS',
    'SGS',
    'SGS',
    'SGS'
  ], {
    G: 'createnuclear:graphene',
    S: '#c:ingots/steel',
    Z: 'tfmg:etched_circuit_board'            // TFMG circuit adds a depth step to the graphite rod
  }).acceptMirrored(true)

  // uranium_rod — real: 5x5 diagonal mechanical_crafting of enriched_yellowcake. Add a steel cladding spine
  // so the finished fuel rod is clad (realism + a TFMG steel link). Keeps the enriched_yellowcake diagonal.
  // T4 PREREQ ADDED: #c:ingots/steel (cladding; keeps the diagonal fuel line, adds steel corners).
  event.remove({ output: 'createnuclear:uranium_rod' })
  event.recipes.create.mechanical_crafting('createnuclear:uranium_rod', [
    'S   U',
    '   U ',
    '  U  ',
    ' U   ',
    'U   S'
  ], {
    U: 'createnuclear:enriched_yellowcake',
    S: '#c:ingots/steel'                      // TFMG steel cladding on the fuel rod
  }).acceptMirrored(true)

  // enriched_yellowcake — real: createnuclear:enriched (energising machine) yellowcake -> enriched. This is
  // already a Nuclear-native enrichment step; leave the machine recipe intact (gating it harder would need a
  // custom machine type). The TFMG/New Age gate on this branch lives upstream in reactor parts + graphite.
  // (No change — flagged here so the chain reads complete. Raw uranium ore deliberately UNTOUCHED.)

  console.info('[derpack-spine] weave-nuclear: reactor casing/controller/input/output/cooler/frame/glass + graphite/uranium rods now gated behind New Age energisers & TFMG circuits. reactor_core untouched (boss-gated).')
})
