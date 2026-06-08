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

  // ── Pattern B — flagship boss fork. create_jetpack:netherite_jetpack was flagged (weave ledger) as the
  //    cheap, ready second example of the #92 fork — gate it behind any boss key. PLACEHOLDER recipe shape:
  //    the exact ingredient grid is finalized in the #92 PR against the real recipe dump; IDs here are all
  //    real, so worst case is a no-op (the original recipe simply stays) rather than a crash. ──
  global.spineBossFork(event, 'create_jetpack:netherite_jetpack', KEY => {
    event.shaped('create_jetpack:netherite_jetpack', [
      'NKN',
      'NPN',
      'BEB'
    ], {
      N: 'minecraft:netherite_ingot',
      K: KEY,                            // any boss drop opens the fork
      P: 'create:precision_mechanism',
      B: 'create:brass_sheet',
      E: 'create:electron_tube'
    })
  })

  // The FLAGSHIP fork (CREATE-SPINE.md 3c) is the aeronautics ship core
  // (aeronautics:gyroscopic_propeller_bearing) gated at the T3->T4 jump — authored in the #92 PR against
  // the create-aeronautics recipe dump, using the same global.spineBossFork helper.
})
