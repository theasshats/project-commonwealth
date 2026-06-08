// Web bridges — rejoin orphaned worldgen MATERIALS to the Create web (driven by tools/recipe-graph.py).
//
// The connectivity metric flags materials that only ever feed their own block family — a worldgen stone →
// its bricks/slabs/walls, used nowhere else — as ISLANDS. "Create crushes rock" is the natural, non-grindy
// bridge: one ADDITIVE crushing recipe per material gives it an outbound use AND links the whole family
// into the Create spine (crushing is a Create METHOD, and the yield ties into the vanilla gravel economy +
// an experience nugget). Nothing is removed and no craft is gated — this only adds uses.
//
// Skipped on purpose: magic mods (separate PR); galosphere (already bridged via its allurite/lumiere
// shards in 33/80/97); and cosmetic vanilla-material variant families (coral blocks, reinforced blocks) —
// they already sit in the vanilla web, and Create-gating them would be the grind the guardrails forbid.

ServerEvents.recipes(event => {
  // KubeJS Create 1.21: chance outputs use CreateItem.of(item, chance) (NOT .withChance()).
  const xp = chance => CreateItem.of('create:experience_nugget', chance)

  // Quark's limestone OVERLAPS Create's own limestone -> a free 1:1 crafting-table SWAP both ways, so the
  // two are interchangeable without a crusher (a crusher block->block read wrong). The other Quark stones
  // have no Create/vanilla equivalent (checked: shale/myalite/jasper/permafrost are Quark-only), so they
  // crush to gravel + a little XP.
  event.shapeless('create:limestone', ['quark:limestone'])
  event.shapeless('quark:limestone', ['create:limestone'])
  ;['quark:shale', 'quark:myalite', 'quark:jasper', 'quark:permafrost'].forEach(stone =>
    event.recipes.create.crushing(['minecraft:gravel', xp(0.12)], stone)
  )

  // Create Nuclear: autunite is a uranium-bearing decorative mineral → crush it for uranium powder,
  // wiring the autunite stone family straight into the nuclear chain (already on the Create spine).
  event.recipes.create.crushing(['createnuclear:uranium_powder', xp(0.2)], 'createnuclear:autunite')

  // TFMG asphalt (industrial paving) → crushed back to gravel rubble.
  event.recipes.create.crushing(['minecraft:gravel', xp(0.1)], 'tfmg:asphalt')

  // ── METAL deco → CREATE recycling. Metal-themed building blocks whose only ties were a `c:plates/*`
  //    tag or vanilla copper (which the metric can't see), leaving them islanded. "Create crushes metal
  //    back to its raw form" is the natural, non-grindy bridge — a real recycling use AND a web edge.
  //    Lossy (you never get the full ingot back), so it's not free duplication. ──
  // Quark raw-copper bricks (a raw-metal block) → crushed back to raw copper.
  event.recipes.create.crushing(['2x minecraft:raw_copper', xp(0.2)], 'quark:raw_copper_bricks')
})
