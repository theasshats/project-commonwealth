// Create spine — #145 power ladder + generator audit (RESOLVED) + the §4a HEAT LADDER.
//
// The ladder is gated by recipe cost + dependency chains, NOT a tech-tree mod (CREATE-SPINE.md Part 1):
//   rungs 0-1 cheap (bootstrap) · rung 2 windmill = sail cloth + windmill bearing · rung 3 steam = its
//   inherent fluid/heat chain (no extra lock) · rung 4 electric = NEEDS rung-3 kinetic to drive (no
//   double-tax) · rung 5 reactor = behind the boss fork (ignitium reactor_rod, 40-gates).
//
// HEAT LADDER (createlowheated — keep+integrate, #289): the mod DISABLES the Blaze Burner's free passive
// heat and adds a "low heat" rung below it. Recipe heat levels now climb
//   lowheated (createlowheated:basic_burner) -> heated (Blaze Burner) -> superheated (Blaze Burner + cake)
// so rung-3 steam is EARNED: a basic boiler needs a built basic_burner (low heat), not a parked idle
// blaze. Temperate T2 processing (the mod's own food mixings use heat_requirement "lowheated") runs on
// the burner; heated/superheated stay the T2->T3+ premium. Don't hand recipes "heated" where "lowheated"
// would do — that re-cheapens the blaze rung.
//
// Load-bearing rule: electricity is a CONVERTER, not a SOURCE. Audit (verified against tools/mod-data):

const SPINE_GENERATORS = {
  // CONVERTERS — plug into the ladder (SU<->FE or fuel->FE); leave as-is, you climbed rungs 1-3 to spin them.
  converter: [
    'createaddition:alternator',                 // kinetic SU -> FE (the canonical converter)
    'create_new_age:basic_motor', 'create_new_age:advanced_motor', 'create_new_age:reinforced_motor',
    'create_new_age:generator_coil',
  ],
  // FREE SOURCE — solar makes FE from a free renewable. Settled stance: cost-gate to rung-4+ so it isn't an
  // EARLY free route (don't re-recipe to require kinetic — cost-gating is less likely to break addon logic).
  free_source: [
    'create_new_age:basic_solar_heating_plate',
    'create_new_age:advanced_solar_heating_plate'
  ],
  // CAPPED SOURCE — rung-0/1 SU from player/entity effort (#145 audit: createtreadmill, tier-placed per
  // #289-C). Self-capping: output scales with whatever walks on it (hand-crank class, not a generator
  // farm — a mob on a treadmill is a babysat machine, not free infinite SU). Recipe is already
  // alloy-propagated (andesite casing + belt + shaft); no re-recipe, no cost dial needed.
  capped_source: [
    'createtreadmill:treadmill'
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

  // §4a — the low-heat burner is the rung-3 enabler, so it must read as a BUILT component, not a trinket.
  // Stock is 3 raw alloy ('A A'/' A '); dial to the #219 3x band with an iron firebox under the alloy frame.
  // Shape stays recognizably the stock burner; createlowheated's own lowheated food mixings are untouched.
  event.remove({ output: 'createlowheated:basic_burner' })
  event.shaped('createlowheated:basic_burner', [
    'A A',
    'AIA'
  ], { A: 'create:andesite_alloy', I: '#c:ingots/iron' })

  // §4a — the heat ladder is LITERAL (06-11 round 3): the Blaze Burner is built ON a basic burner —
  // stock grid (iron plates around netherrack, from the create-6.0.10 jar) with the burner as its
  // base, so each heat rung physically contains the one below. Removed by ID (never by output — the
  // 06-11 mechanism lesson).
  event.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })
  event.shaped('create:empty_blaze_burner', [
    ' I ',
    'IAI',
    ' B '
  ], { I: '#c:plates/iron', A: '#c:netherracks', B: 'createlowheated:basic_burner' })

  // Converters are deliberately untouched (preserving the alternator/motor SU->FE path = the ladder).
  // Steam (rung 3) and electric (rung 4) need no recipe edit — their dependency chains are the gate.
  console.info(`[pcmc-spine] power ladder resolved: ${SPINE_GENERATORS.converter.length} converters kept, ${SPINE_GENERATORS.free_source.length} free-sources cost-gated, ${SPINE_GENERATORS.capped_source.length} capped source tiered; heat ladder lowheated->heated->superheated documented (basic_burner dialed)`)
})
