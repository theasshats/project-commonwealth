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

const SPINE_BASICS_3X = {
  applied:     ['create:andesite_alloy',                        // dialed in this file (the root; propagates widely)
                'createlowheated:basic_burner'],                // dialed in 20-power-ladder (§4a — the heat-ladder enabler)
  propagates:  ['create:andesite_casing', 'create:brass_casing', 'create:electron_tube',
                'createtreadmill:treadmill', 'create_sa:heat_engine'], // inherit via inputs; fine-tune in batch
  metal_1to1:  ['create:iron_sheet', 'create:copper_sheet', 'create:brass_sheet', 'createaddition:zinc_sheet'] // 1:1 press; cost carried by the ingot, NOT dialed
}

// #219 tail status: the integrated-mod tail (handoff §4/§5) carries its dial in the weave files —
// excavation's drill line went steel-bodied + Crafter-routed (55), create_sa's engines hold their
// sequenced step-depth with burner/steel seams (56), the burner itself is dialed (20). gnkinetics gears
// sit at metal-transform cost (shaft + ingot) like cogwheels — left undialed on the same grounds as
// sheets. The broader per-mod 3x sweep beyond the spine anchors waits on playtest measurement (#219 open).

// Step-depth budget per tier (min distinct Create stages). Sequenced assembly preferred for T3+.
const SPINE_STAGES = { T1: '1-2', T2: '3-4', T3: '5-6', T4: '6+ and the boss fork' }

ServerEvents.recipes(event => {
  // ── Dial the ROOT basic. The hand-craft is deliberately the EXPENSIVE route (a whole ingot per alloy)
  //    to push players onto the cheaper Create mixing route once they have a mixer; mixing stays ~3x the
  //    raw floor (3 nuggets). This cost flows into every machine/casing/component built from alloy. ──
  // ⚠️ Remove by ID, never `{ output: 'create:andesite_alloy' }`: the broad output filter also matches
  // every recipe with alloy among its CHANCED JUNK results — it silently deleted the precision /
  // gyroscopic / pneumatic mechanism sequenced assemblies (06-11 playtest, root-caused from latest.log:
  // KubeJS "removed 443 recipes", no errors) and the alloy-block unpacking. These four are the only
  // alloy PRODUCERS in the pack (verified across tools/mod-data/recipes); from_block stays (storage).
  ;['create:crafting/materials/andesite_alloy',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'create:mixing/andesite_alloy',
    'create:mixing/andesite_alloy_from_zinc'
  ].forEach(id => event.remove({ id: id }))

  // bootstrap hand-craft — EXPENSIVE: 1 full iron ingot per alloy (= 9 nuggets, vs mixing's 3)
  event.shapeless('create:andesite_alloy', ['minecraft:andesite', '#c:ingots/iron'])

  // Create route — mixing, the intended cheaper path (~3x floor: 3 nuggets, iron or zinc).
  // Concrete items + count (tag strings mis-parse as fluids in create:mixing on this KubeJS build).
  event.recipes.create.mixing('create:andesite_alloy', ['minecraft:andesite', '3x minecraft:iron_nugget'])
  event.recipes.create.mixing('create:andesite_alloy', ['minecraft:andesite', '3x create:zinc_nugget'])

  console.info(`[pcmc-spine] cost model: andesite_alloy dialed (hand-craft 1 ingot > mixing 3 nuggets); ${SPINE_BASICS_3X.propagates.length} basics inherit via inputs; sheets left 1:1. Per-mod step-depth staged.`)
})
