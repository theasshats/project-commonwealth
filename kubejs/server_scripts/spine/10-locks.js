// Create spine — #220 locking + gating patterns.
//
// Pattern A (route-exclusive lock): strip every non-Create recipe for an output so only the Create line
//   makes it — the anti-erosion wall (SYSTEMS.md §3). v0.7.0 slice: the two signature gate components.
// Pattern B (boss fork): gate a high-tier item behind a #derpack:boss_keys drop. Colony bypass DEFERRED
//   (boss-only for v0.7.0). Helper exposes the pattern; one flagship example is applied below.
//
// Design: docs/CREATE-SPINE.md Part 3. Load-safe: removes are no-ops if no alt recipe exists.

// Pattern B helper — author a boss-keyed recipe for `output`. `build(KEY)` receives the boss-key tag.
global.spineBossFork = (event, output, build) => {
  event.remove({ output: output })
  build('#derpack:boss_keys')
}

ServerEvents.recipes(event => {
  // ── Pattern A — lock the two exclusives to the Create route (v0.7.0 slice; expand later if playtest
  //    shows erosion). Only non-Create recipes are stripped; the Create line stays intact. ──
  ;['create:precision_mechanism', 'create:electron_tube'].forEach(id =>
    event.remove({ output: id, not: { mod: 'create' } })
  )

  // ── Pattern B — boss forks. Per maintainer call, the flagship forks gate on SPECIFIC tiered drops (not
  //    the flat tag): a T4 item behind a T4 boss drop, a T3 item behind a T3 boss drop (boss progression
  //    reference: docs/CREATE-SPINE-IMPL.md §7). The #derpack:boss_keys tag + spineBossFork helper remain
  //    for future generic gates. ──

  // D1 — create_jetpack:netherite_jetpack: a T4 item, gated behind ignitium (Cataclysm Ignis, T4 boss),
  //      costed up to T4 (netherite + electric/precision parts + the boss ingot).
  event.remove({ output: 'create_jetpack:netherite_jetpack' })
  event.shaped('create_jetpack:netherite_jetpack', [
    'INI',
    'EPE',
    'NAN'
  ], {
    I: 'cataclysm:ignitium_ingot',            // T4 boss gate (Ignis)
    N: 'minecraft:netherite_ingot',
    E: 'create:electron_tube',
    P: 'create:precision_mechanism',
    A: 'create_new_age:advanced_energiser'    // T4 electric component
  })

  // D2 — aeronautics:gyroscopic_propeller_bearing (T3 ship core), gated behind cursium (Cataclysm T3 boss)
  //      for now. Real base recipe (brass_casing + gyroscopic_mechanism + wooden slab) + the cursium gate.
  event.remove({ output: 'aeronautics:gyroscopic_propeller_bearing' })
  event.shaped('aeronautics:gyroscopic_propeller_bearing', [
    ' C ',
    'BGB',
    ' W '
  ], {
    C: 'cataclysm:cursium_ingot',             // T3 boss gate
    B: 'create:brass_casing',
    G: 'simulated:gyroscopic_mechanism',
    W: '#minecraft:wooden_slabs'
  })
})
