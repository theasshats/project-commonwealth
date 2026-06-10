// Create spine — the COMPLETE tier-gate ladder (#92/#220 Pattern B across every tier).
//
// Every tier transition carries a GATE: a tier-key item re-recipe'd to require a tier-matched boss /
// exploration drop (drop placement: docs/CREATE-SPINE-IMPL.md §7). Boss-only for v0.7.0 — the MineColonies
// bypass is deferred. Data-driven so the whole ladder is reviewable in one place: edit the table, not code.
//
// ⚠️ EXTENDS the ratified ladder. CREATE-SPINE.md gated bosses only at T4; per the "force players out into
// the world" direction, T1-T3 now also carry an exploration gate. Pending playtest + sign-off. Safety:
// rung-1 WATER WHEEL power stays UNGATED, so players are never hard-blocked from basic power; only the
// windmill (rung 2) and the tier-key machines are gated. All recipe grids are tunable placeholders.

const SPINE_GATES = [
  // T1 + T2 gates PULLED — early tiers are cost/scarcity-gated per the lineage; bosses start at T3.

  // T3 — ADVANCED electric behind ANY Frostmaw-equivalent Mowzie's boss (#pcmc:mowzies_mid). Basic
  //      alternator stays kinetic-gated (per spec), so this gates the *advanced* energiser, not entry to electricity.
  { tier: 'T3', out: 'create_new_age:reinforced_energiser', drop: '#pcmc:mowzies_mid',
    build: (e, K) => e.shaped('create_new_age:reinforced_energiser',
      ['EKE', 'BBB', 'III'],
      { K: K, E: 'create:electron_tube', B: 'create_new_age:basic_energiser', I: '#c:plates/iron' }) },

  // T3 — aeronautics ship core (flagship) behind ancient_metal (Ancient Remnant, mid Cataclysm boss).
  { tier: 'T3', out: 'aeronautics:gyroscopic_propeller_bearing', drop: 'cataclysm:ancient_metal_ingot',
    build: (e, K) => e.shaped('aeronautics:gyroscopic_propeller_bearing',
      [' K ', 'BGB', ' W '],
      { K: K, B: 'create:brass_casing', G: 'simulated:gyroscopic_mechanism', W: '#minecraft:wooden_slabs' }) },

  // T3/T4 — netherite jetpack behind cursium (Maledictus, mid-late Cataclysm boss). Through Create
  //      (Mechanical Crafter), and the remove also wipes create_jetpack's two netherite_upgrade smithing
  //      routes — no template bypass around the gate. (create_sa's jetpacks are disabled outright in
  //      57-jetpacks.js — #87: one canonical jetpack line.)
  { tier: 'T4', out: 'create_jetpack:netherite_jetpack', drop: 'cataclysm:cursium_ingot',
    build: (e, K) => e.recipes.create.mechanical_crafting('create_jetpack:netherite_jetpack',
      ['KNK', 'EPE', 'NAN'],
      { K: K, N: 'minecraft:netherite_ingot', E: 'create:electron_tube',
        P: 'create:precision_mechanism', A: 'create_new_age:advanced_energiser' }) },

  // T4 — CAPSTONE (repointed from the cut createnuclear:reactor_core — #258/#283/#289-A): the New Age
  //      reactor runs on reactor rods; ignitium (Ignis, end-game Cataclysm) sheathes them. Native 5x4
  //      mechanical_crafting grid + 2x yield kept — casings/glass arrive TFMG-gated via 52-weave (which
  //      deliberately does NOT touch reactor_rod, so no double-remove), fuel via the thorium chain. Only
  //      the two gold-band centers turn to ignitium (1 per rod). MineColonies leg deferred -> #220.
  { tier: 'T4', out: 'create_new_age:reactor_rod', drop: 'cataclysm:ignitium_ingot',
    build: (e, K) => e.recipes.create.mechanical_crafting('2x create_new_age:reactor_rod', [
      'CPKPC',
      ' GFG ',
      ' GFG ',
      'CPKPC'
    ], { C: 'create_new_age:reactor_casing', G: 'create_new_age:reactor_glass',
         F: 'create_new_age:nuclear_fuel', P: '#c:plates/gold', K: K }) }
]

ServerEvents.recipes(event => {
  SPINE_GATES.forEach(g => { event.remove({ output: g.out }); g.build(event, g.drop) })
  console.info(`[pcmc-spine] tier-gate ladder: ${SPINE_GATES.length} gates applied (${SPINE_GATES.map(g => g.tier).join('/')})`)
})
