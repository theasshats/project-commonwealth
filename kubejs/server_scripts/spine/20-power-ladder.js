// Create spine — #145 power ladder + generator audit (RESOLVED).
//
// The ladder is gated by recipe cost + dependency chains, NOT a tech-tree mod (CREATE-SPINE.md Part 1):
//   rungs 0-1 cheap (bootstrap) · rung 2 windmill = sail cloth + windmill bearing · rung 3 steam = its
//   inherent fluid/heat chain (no extra lock) · rung 4 electric = NEEDS rung-3 kinetic to drive (no
//   double-tax) · rung 5 reactor/nuclear = behind the boss fork.
//
// Load-bearing rule: electricity is a CONVERTER, not a SOURCE. Audit (verified against tools/mod-data):

const SPINE_GENERATORS = {
  // CONVERTERS — plug into the ladder (SU<->FE or fuel->FE); leave as-is, you climbed rungs 1-3 to spin them.
  converter: [
    'createaddition:alternator',                 // kinetic SU -> FE (the canonical converter)
    'create_new_age:basic_motor', 'create_new_age:advanced_motor', 'create_new_age:reinforced_motor',
    'create_new_age:generator_coil',
    'createnuclear:reactor_controller'           // uranium fuel -> heat/FE (fuel converter)
  ],
  // FREE SOURCE — solar makes FE from a free renewable. Settled stance: cost-gate to rung-4+ so it isn't an
  // EARLY free route (don't re-recipe to require kinetic — cost-gating is less likely to break addon logic).
  free_source: [
    'create_new_age:basic_solar_heating_plate',
    'create_new_age:advanced_solar_heating_plate'
  ]
}

ServerEvents.recipes(event => {
  // Cost-gate the free-source solar plates behind electric-tier components so solar isn't free early power.
  // basic -> gated behind electron_tube (T1+); advanced -> behind a capacitor (T3). IDs all real; if a
  // grid detail is off it's a no-op, not a crash. Tune in playtest.
  event.remove({ output: 'create_new_age:basic_solar_heating_plate' })
  event.shaped('create_new_age:basic_solar_heating_plate', [
    'GGG',
    'EIE',
    'III'
  ], { G: 'minecraft:glass', E: 'create:electron_tube', I: '#c:plates/iron' })

  event.remove({ output: 'create_new_age:advanced_solar_heating_plate' })
  event.shaped('create_new_age:advanced_solar_heating_plate', [
    'GGG',
    'ECE',
    'III'
  ], { G: 'minecraft:glass', E: 'create:electron_tube', C: 'createaddition:capacitor', I: '#c:plates/iron' })

  // Converters are deliberately untouched (preserving the alternator/motor SU->FE path = the ladder).
  // Steam (rung 3) and electric (rung 4) need no recipe edit — their dependency chains are the gate.
  console.info(`[derpack-spine] power ladder resolved: ${SPINE_GENERATORS.converter.length} converters kept, ${SPINE_GENERATORS.free_source.length} free-sources cost-gated`)
})
