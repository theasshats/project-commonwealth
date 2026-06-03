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
  const xp = chance => Item.of('create:experience_nugget').withChance(chance)

  // Quark worldgen stones → crushed to gravel (Create's stone→gravel→sand vocabulary) + a little XP.
  // One recipe per base stone collapses the whole limestone/shale/myalite/jasper/permafrost brick family.
  ;['quark:limestone', 'quark:shale', 'quark:myalite', 'quark:jasper', 'quark:permafrost'].forEach(stone =>
    event.recipes.create.crushing(['minecraft:gravel', xp(0.12)], stone)
  )

  // Create Nuclear: autunite is a uranium-bearing decorative mineral → crush it for uranium powder,
  // wiring the autunite stone family straight into the nuclear chain (already on the Create spine).
  event.recipes.create.crushing(['createnuclear:uranium_powder', xp(0.2)], 'createnuclear:autunite')

  // TFMG asphalt (industrial paving) → crushed back to gravel rubble.
  event.recipes.create.crushing(['minecraft:gravel', xp(0.1)], 'tfmg:asphalt')
})
