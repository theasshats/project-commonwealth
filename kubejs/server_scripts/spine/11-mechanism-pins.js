// Mechanism pins — re-assert the three addon-family mechanism assemblies (06-11 playtest).
//
// SYMPTOM: create:precision_mechanism, simulated:gyroscopic_mechanism and
// createfisheryindustry:pneumatic_mechanism have NO recipe at runtime. Their sequenced_assembly
// JSONs are intact in the jars (extracted and verified: create-6.0.10, aeronautics-bundled-1.2.1,
// createfisheryindustry-5.0.1), no datapack overrides them, no KubeJS script removes them
// (10-locks' Pattern A spares mod=create recipes; verified against KubeJS 2101's RecipeFilter),
// and the committed runtime dump proves the timeline: present in the 06-08 boot
// (tools/recipe-dump/pcmc-recipes.txt), absent in the 06-09 boot (pcmc-recipes.json). Something
// in the runtime recipe pipeline (AlmostUnified's unify/dedup pass with createaddoncompatibility's
// priority mixin is the prime suspect — these are exactly the "mechanism" family that mod exists
// to reconcile) drops them; the precise actor needs the boot log to confirm.
//
// FIX (robust under every theory): re-add each assembly as an exact copy of its stock JSON under a
// pcmc: id. If the originals are eaten, these stand in; if the originals survive, AlmostUnified's
// duplicate pass collapses the identical pair to one. PLAYTEST: all three mechanisms craft; JEI
// shows ONE assembly per mechanism (two means the eater is gone — then delete this file).

ServerEvents.recipes(event => {
  // create:precision_mechanism — stock copy (create-1.21.1-6.0.10 jar).
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { tag: 'c:plates/gold' },
    loops: 5,
    results: [
      { chance: 120.0, id: 'create:precision_mechanism' },
      { chance: 8.0, id: 'create:golden_sheet' },
      { chance: 8.0, id: 'create:andesite_alloy' },
      { chance: 5.0, id: 'create:cogwheel' },
      { chance: 3.0, id: 'minecraft:gold_nugget' },
      { chance: 2.0, id: 'create:shaft' },
      { chance: 2.0, id: 'create:crushed_raw_gold' },
      { id: 'minecraft:iron_ingot' },
      { id: 'minecraft:clock' }
    ],
    sequence: [
      { type: 'create:deploying',
        ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:cogwheel' }],
        results: [{ id: 'create:incomplete_precision_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:large_cogwheel' }],
        results: [{ id: 'create:incomplete_precision_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { tag: 'c:nuggets/iron' }],
        results: [{ id: 'create:incomplete_precision_mechanism' }] }
    ],
    transitional_item: { id: 'create:incomplete_precision_mechanism' }
  }).id('pcmc:pin/precision_mechanism')

  // simulated:gyroscopic_mechanism — stock copy (aeronautics-bundled-1.2.1's simulated jar).
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'create:iron_sheet' },
    loops: 5,
    results: [
      { chance: 200.0, id: 'simulated:gyroscopic_mechanism' },
      { chance: 8.0, id: 'create:iron_sheet' },
      { chance: 8.0, id: 'create:andesite_alloy' },
      { chance: 3.0, id: 'create:brass_nugget' },
      { chance: 2.0, id: 'create:crushed_raw_iron' },
      { id: 'minecraft:compass' }
    ],
    sequence: [
      { type: 'create:deploying',
        ingredients: [{ item: 'simulated:incomplete_gyroscopic_mechanism' }, { item: 'create:cogwheel' }],
        results: [{ id: 'simulated:incomplete_gyroscopic_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'simulated:incomplete_gyroscopic_mechanism' }, { item: 'create:shaft' }],
        results: [{ id: 'simulated:incomplete_gyroscopic_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'simulated:incomplete_gyroscopic_mechanism' }, { tag: 'c:nuggets/brass' }],
        results: [{ id: 'simulated:incomplete_gyroscopic_mechanism' }] }
    ],
    transitional_item: { id: 'simulated:incomplete_gyroscopic_mechanism' }
  }).id('pcmc:pin/gyroscopic_mechanism')

  // createfisheryindustry:pneumatic_mechanism — stock copy (createfisheryindustry-5.0.1 jar).
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { tag: 'c:plates/zinc' },
    loops: 2,
    results: [
      { chance: 80.0, id: 'createfisheryindustry:pneumatic_mechanism' },
      { chance: 5.0, id: 'createfisheryindustry:zinc_sheet' },
      { chance: 4.0, id: 'create:andesite_alloy' },
      { chance: 3.0, id: 'create:cogwheel' },
      { chance: 2.0, id: 'create:zinc_nugget' },
      { chance: 2.0, id: 'create:shaft' },
      { chance: 2.0, id: 'create:crushed_raw_zinc' },
      { id: 'minecraft:iron_ingot' },
      { id: 'create:propeller' }
    ],
    sequence: [
      { type: 'create:deploying',
        ingredients: [{ item: 'createfisheryindustry:incomplete_pneumatic_mechanism' }, { item: 'create:cogwheel' }],
        results: [{ id: 'createfisheryindustry:incomplete_pneumatic_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'createfisheryindustry:incomplete_pneumatic_mechanism' }, { item: 'create:propeller' }],
        results: [{ id: 'createfisheryindustry:incomplete_pneumatic_mechanism' }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'createfisheryindustry:incomplete_pneumatic_mechanism' }, { tag: 'c:nuggets/iron' }],
        results: [{ id: 'createfisheryindustry:incomplete_pneumatic_mechanism' }] }
    ],
    transitional_item: { id: 'createfisheryindustry:incomplete_pneumatic_mechanism' }
  }).id('pcmc:pin/pneumatic_mechanism')

  console.info('[pcmc-spine] mechanism pins: precision/gyroscopic/pneumatic assemblies re-asserted (stock copies — see header; remove when the runtime eater is identified and fixed).')
})
