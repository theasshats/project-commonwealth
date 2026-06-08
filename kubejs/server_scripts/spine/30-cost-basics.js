// Create spine — #219 cost model (basics dial + step-depth framework).
//
// Two dials (CREATE-SPINE.md Part 2):
//   (1) BASICS ~3x — tier-1 FABRICATED items cost ~3x their raw-material FLOOR (band 2.5-3.5x), measured
//       in base resource units, NOT a literal x3 of every ingredient.
//   (2) STEP-DEPTH — higher tiers gain difficulty by passing through MORE distinct Create stages
//       (T1:1-2, T2:3-4, T3:5-6, T4:6+ and a gate), not multiplied ingredient counts.
//
// Design refinement baked in here: the 3x dial applies to FABRICATED COMPONENTS, not metal transforms.
// A sheet/plate is a 1:1 metal press — its cost is the INGOT (handled by ore-gen scarcity), so it is NOT
// dialed. And the root fabricated basic (andesite_alloy) PROPAGATES its cost to everything built from it,
// so dialing the root does most of the work; per-component fine-tuning is the staged content tail.

global.SPINE_BASICS_3X = {
  applied:     ['create:andesite_alloy'],                       // dialed in this file (the root; propagates widely)
  propagates:  ['create:andesite_casing', 'create:brass_casing', 'create:electron_tube'], // inherit via inputs; fine-tune in batch
  metal_1to1:  ['create:iron_sheet', 'create:copper_sheet', 'create:brass_sheet', 'createaddition:zinc_sheet'] // 1:1 press; cost carried by the ingot, NOT dialed
}

// Step-depth budget per tier (min distinct Create stages). Sequenced assembly preferred for T3+.
global.SPINE_STAGES = { T1: '1-2', T2: '3-4', T3: '5-6', T4: '6+ and the boss fork' }

ServerEvents.recipes(event => {
  // ── Dial the ROOT basic to ~3x. Vanilla andesite_alloy = 1 iron/zinc nugget + andesite. At ~3x the raw
  //    floor that's 3 nuggets + andesite. Keep BOTH a hand-craft (bootstrap — you need alloy to build the
  //    first mixer) and the Create mixing route, both at the dialed cost. This cost flows into every
  //    machine, casing, and component built from alloy. ──
  event.remove({ output: 'create:andesite_alloy' })

  // bootstrap hand-craft (~3x): 3 iron nuggets + andesite
  event.shapeless('create:andesite_alloy',
    ['minecraft:andesite', '#c:nuggets/iron', '#c:nuggets/iron', '#c:nuggets/iron'])

  // Create route — mixing, same dialed floor (iron or zinc nuggets)
  event.recipes.create.mixing('create:andesite_alloy',
    ['minecraft:andesite', '#c:nuggets/iron', '#c:nuggets/iron', '#c:nuggets/iron'])
  event.recipes.create.mixing('create:andesite_alloy',
    ['minecraft:andesite', '#c:nuggets/zinc', '#c:nuggets/zinc', '#c:nuggets/zinc'])

  console.info(`[derpack-spine] cost model: root basic andesite_alloy dialed to ~3x; ${global.SPINE_BASICS_3X.propagates.length} basics inherit via inputs; sheets left 1:1 (cost = ingot). Per-mod step-depth staged.`)
})
