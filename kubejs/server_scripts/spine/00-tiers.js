// Create spine — the TIER TREES (authoritative data).
//
// The single source of truth for "what tier is X, how is it gated, what does it cost." Sibling spine
// scripts (10-locks, 20-power-ladder, 30-cost-basics) and the per-mod cost batches read from this.
// Design: docs/CREATE-SPINE.md. Build reference: docs/CREATE-SPINE-IMPL.md. Changes NO recipes itself.
//
// Tiers map to the power ladder (CREATE-SPINE.md Part 1). Aeronautics is a control-complexity thread
// woven across tiers (Part 4a); the boss fork sits at the T3->T4 jump.

const SPINE = {
  // Power rung per tier (CREATE-SPINE.md Part 1).
  tiers: {
    T0: { name: 'Manual',        rung: 0, anchors: ['create'],
          items: ['andesite_alloy', 'shaft', 'cogwheel', 'iron_sheet', 'copper_sheet', 'andesite_casing'],
          gate: 'none (bootstrap)', cost: '3x basics, 1 stage', aero: 'none' },

    T1: { name: 'Water/Wind',    rung: 2, anchors: ['create', 'createaddition', 'gnkinetics'],
          items: ['brass_casing', 'electron_tube', 'zinc_sheet', 'gnkinetics:brass_gear'],
          gate: 'windmill_bearing behind grimoireofgaia:rotten_heart (early Gaia gate); water wheel free', cost: '3x basics, 2 stages',
          aero: 'basic hot-air balloon (aeronautics:adjustable_burner + envelope)' },

    T2: { name: 'Steam',         rung: 3, anchors: ['create', 'tfmg', 'create_ironworks', 'gnkinetics'],
          items: ['precision_mechanism', 'tfmg:steel_ingot', 'tfmg:heavy_machinery_casing',
                  'gnkinetics:industrial_gear', 'tfmg:unfinished_circuit_board'],
          gate: 'steam fluid chain (inherent) + steam_engine behind grimoireofgaia:fireshard (thematic fire)', cost: '2-3x, 3 stages',
          aero: 'propelled balloon + first ANALOG control (create_tweaked_controllers)' },

    T3: { name: 'Electric-low',  rung: 4, anchors: ['tfmg', 'createaddition', 'create_new_age', 'gnkinetics'],
          items: ['tfmg:etched_circuit_board', 'createaddition:capacitor', 'create_new_age:reinforced_energiser',
                  'tfmg:electric_motor', 'gnkinetics:planetary_gear'],
          gate: 'electric needs rung-3 kinetic; advanced energiser behind any Frostmaw-equiv Mowzie boss (#derpack:mowzies_mid); ship core behind cataclysm:cursium', cost: '2-3x, 4 stages',
          aero: 'COMPLEX analog control (aeronautics:gyroscopic_propeller_bearing)' },

    T4: { name: 'Electric-high', rung: 5, anchors: ['create_new_age', 'aeronautics'],
          items: ['create_new_age:reactor_casing', 'create_new_age:advanced_energiser',
                  'aeronautics:pearlescent_levitite'],
          gate: 'BOSS FORK — cataclysm:ignitium (New Age reactor; repoint post-dump); colony bypass DEFERRED',
          cost: '2-3x, 5 stages + gate',
          aero: 'DIGITAL control (create-aeroworks, aeronautics:smart_propeller)' }
  },

  // T3->T4 mod spine (CREATE-SPINE.md Part 4b): how the addon chain bolts together.
  spine: {
    additions_to_tfmg:  'createaddition (rung-4 SU<->FE converter) powers TFMG electric machines',
    tfmg_to_newage:     'TFMG steel + circuits feed New Age (advanced_energiser needs a TFMG etched circuit)',
    newage_reactor:     'New Age reactor is the end-game generator (Nuclear cut for 1.0; returns in 2.0)'
  }
}

ServerEvents.recipes(event => {
  const t = SPINE.tiers
  console.info(`[derpack-spine] tier trees loaded: ${Object.keys(t).map(k => `${k}=${t[k].name}`).join(', ')}`)
})
