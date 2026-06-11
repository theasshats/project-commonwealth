// Create spine — the TIER TREES (authoritative data).
//
// The single source of truth for "what tier is X, how is it gated, what does it cost." Sibling spine
// scripts (10-locks, 20-power-ladder, 30-cost-basics) and the per-mod cost batches read from this.
// Design: docs/CREATE-SPINE.md. Build reference: docs/CREATE-SPINE-IMPL.md. Changes NO recipes itself.
//
// Tiers map to the power ladder (CREATE-SPINE.md Part 1). Aeronautics is a control-complexity thread
// woven across tiers (Part 4a); the boss fork sits at the T3->T4 jump. SEAM LADDER (Part 1): tier T_n
// carries >= n+1 cross-mod seams — thin at bootstrap, thick at end-game; census table in the doc.

const SPINE = {
  // Power rung per tier (CREATE-SPINE.md Part 1).
  tiers: {
    T0: { name: 'Manual',        rung: 0, anchors: ['create'],
          items: ['andesite_alloy', 'shaft', 'cogwheel', 'iron_sheet', 'copper_sheet', 'andesite_casing'],
          gate: 'none (bootstrap)', cost: '3x basics, 1 stage', aero: 'none' },

    T1: { name: 'Water/Wind',    rung: 2, anchors: ['create', 'createaddition', 'gnkinetics', 'createtreadmill', 'create_sa'],
          items: ['brass_casing', 'electron_tube', 'zinc_sheet', 'gnkinetics:brass_gear',
                  'create_sa:heat_engine', 'createtreadmill:treadmill'],
          gate: 'cost/scarcity only — the T1 boss gate was PULLED (40-gates: bosses start at T3); windmill = the sail-cloth + bearing investment; water wheel free; treadmill = capped entity SU', cost: '3x basics, 2 stages',
          aero: 'basic hot-air balloon (aeronautics:adjustable_burner + envelope)' },

    T2: { name: 'Steam',         rung: 3, anchors: ['create', 'tfmg', 'create_ironworks', 'gnkinetics', 'createlowheated', 'create_sa'],
          items: ['precision_mechanism', 'tfmg:steel_ingot', 'tfmg:heavy_machinery_casing',
                  'gnkinetics:industrial_gear', 'tfmg:unfinished_circuit_board', 'createlowheated:basic_burner',
                  'create_sa:steam_engine'],
          gate: 'steam fluid chain (inherent) + LOW HEAT earned via createlowheated:basic_burner (T1-craftable, the rung-3 enabler — blaze passive heat is off; heated/superheated start at the Blaze Burner). T2 boss gate PULLED (bosses start at T3)', cost: '2-3x, 3 stages',
          aero: 'propelled balloon + first ANALOG control (create_tweaked_controllers)' },

    T3: { name: 'Electric-low',  rung: 4, anchors: ['tfmg', 'createaddition', 'create_new_age', 'gnkinetics', 'create_jetpack'],
          items: ['tfmg:etched_circuit_board', 'createaddition:capacitor', 'create_new_age:reinforced_energiser',
                  'createaddition:electric_motor', 'gnkinetics:planetary_gear', 'create_jetpack:jetpack'],
          gate: 'electric needs rung-3 kinetic; capacitor = THE T3 token (needs create_new_age:overcharged_iron = running power); advanced energiser behind any Frostmaw-equiv Mowzie boss (#pcmc:mowzies_mid); ship core behind cataclysm:ancient_metal_ingot; jetpack/brass-exo = capacitor; guns + SNA gear = functional thematic parts (recoil spring, drill head, fluid tank, plunger launcher, electric motor — Part 2b-ii family rule)', cost: '2-3x, 4 stages',
          aero: 'COMPLEX analog control (aeronautics:gyroscopic_propeller_bearing)' },

    T4: { name: 'Electric-high', rung: 5, anchors: ['create_new_age', 'aeronautics', 'createoreexcavation'],
          items: ['create_new_age:reactor_casing', 'create_new_age:reactor_rod', 'create_new_age:advanced_energiser',
                  'aeronautics:pearlescent_levitite', 'createoreexcavation:drilling_machine'],
          gate: 'BOSS FORK — cataclysm:ignitium -> create_new_age:reactor_rod (reactor capstone, 40-gates); cursium -> create_jetpack:netherite_jetpack (the one jetpack line, #87); colony bypass DEFERRED (#220)',
          cost: '2-3x, 5 stages + gate',
          aero: 'DIGITAL control (create-aeroworks, aeronautics:smart_propeller)' }
  },

  // TIER TOKENS (CREATE-SPINE.md Part 2) — the proof-of-tier item each tier's recipes weave in. When
  // costing a tiered item, reach for ITS token instead of inventing a new marker; that's what pulls the
  // recipe graph into one web. T1 has none (bootstrap must stay open).
  tokens: {
    T2: ['createlowheated:basic_burner', '#c:ingots/steel'],   // built heat + the steel chain
    T3: ['createaddition:capacitor'],                          // proof of running electricity (needs overcharged_iron)
    T4: ['cataclysm:ignitium_ingot', 'cataclysm:cursium_ingot', // boss metals (the gates)
         '#c:ingots/silver']                                   // the cross-producer ingredient (occultism-only -> trade with magic)
  },

  // T3->T4 mod spine (CREATE-SPINE.md Part 4b): how the addon chain bolts together.
  spine: {
    additions_to_tfmg:  'createaddition (rung-4 SU<->FE converter) powers TFMG electric machines',
    tfmg_to_newage:     'TFMG steel + circuits feed New Age (advanced_energiser needs a TFMG etched circuit)',
    newage_reactor:     'New Age reactor is the end-game generator (Nuclear cut for 1.0; returns in 2.0); capstone gate = ignitium-sheathed reactor_rod',
    excavation_sink:    'createoreexcavation is the T4 SINK: TFMG circuits/motors build the drilling machine; steel drill heads + heavy stress + fluid spend surplus end-game power for ore'
  }
}

ServerEvents.recipes(event => {
  const t = SPINE.tiers
  console.info(`[pcmc-spine] tier trees loaded: ${Object.keys(t).map(k => `${k}=${t[k].name}`).join(', ')}`)
})
