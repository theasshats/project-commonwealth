// Create spine — #219 cost model (basics dial + step-depth framework).
//
// Two dials (CREATE-SPINE.md Part 2):
//   (1) BASICS ~3x — tier-1 fabricated items cost ~3x their raw-material FLOOR (band 2.5-3.5x), measured
//       in base resource units, NOT a literal x3 of every ingredient.
//   (2) STEP-DEPTH — higher tiers gain difficulty by passing through MORE distinct Create stages
//       (T1:1-2, T2:3-4, T3:5-6, T4:6+ and a gate), not multiplied ingredient counts.
//
// This file establishes the dial + the target list. The actual per-item application is staged in per-mod
// batches (docs/CREATE-SPINE-IMPL.md §5) because re-reciping a widely-used basic (e.g. andesite_alloy)
// blind, with no in-game test, is exactly the world-load-crash risk CLAUDE.md warns about. Each batch
// removes+replaces per docs/RECIPES.md + 00-create-ify.js patterns, targets #c: tags, and carries its own
// playtest gate.

// The basics that take the ~3x dial (tier-1 fabricated, needed constantly by every route). Raw resources
// (ores/logs/crops) are EXCLUDED — scarcity is handled by ore-gen, not recipe cost. So is the colony route.
global.SPINE_BASICS_3X = [
  'create:andesite_alloy', 'create:iron_sheet', 'create:copper_sheet', 'create:brass_sheet',
  'create:andesite_casing', 'create:brass_casing', 'create:electron_tube',
  'createaddition:zinc_sheet'
]

// Step-depth budget per tier (min distinct Create stages). Sequenced assembly is the preferred vehicle
// for T3+ (one placed multi-step item, better UX than N manual handoffs).
global.SPINE_STAGES = { T1: '1-2', T2: '3-4', T3: '5-6', T4: '6+ and the boss fork' }

ServerEvents.recipes(event => {
  // Application staged per-mod (see header). This file is the dial spec the batches read.
  console.info(`[derpack-spine] cost model loaded; ${global.SPINE_BASICS_3X.length} basics flagged for the 3x dial, step budget ${JSON.stringify(global.SPINE_STAGES)}`)
})
