// Samurai Dynasty — "made through Create" (restraint case).
//
// Samurai already runs on STEEL (c:ingots/steel), a Create-made metal in this pack (TFMG /
// Ironworks / Metalwork). So it's largely Create-routed already — converting every steel recipe
// would be the over-gating we avoid. ONE visible Create touch: the flagship "steel samurai" plate
// set is built from a Create-pressed steel PLATE. We use the concrete create_ironworks:steel_sheet
// (the create:pressing product) rather than the #c:plates/steel tag: the tag is only filled by
// Create addons (ironworks/tfmg), so a tag ingredient reads as "empty/unobtainable" in JEI if the
// providers shift — the concrete item is the stable Create gate. Jade ornament kept on the helmet.
// Weapons, the light/ninja/basic
// sets, stone, cloth and netherite upgrades are coherent as-is and left untouched.
//
// STEEL SOURCING (samurai's iron->steel blasting, mffs's smelt) is a pack-wide question -> deferred
// to a dedicated metals/steel pass, not touched here.
//
// Verified against tools/mod-data/recipes/samurai_dynasty-*.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }
  const P = 'create_ironworks:steel_sheet' // Create-pressed steel plate (concrete, not the addon-only #c:plates/steel tag)

  // orig steel_samurai_helmet:     c:gems/jade + c:ingots/steel + iron_ingot   (jade ornament KEPT)
  swap('samurai_dynasty:steel_samurai_helmet',     ['SJS', 'S S'],        { S: P, J: '#c:gems/jade' })
  // orig steel_samurai_chestplate: c:ingots/steel + iron_ingot
  swap('samurai_dynasty:steel_samurai_chestplate', ['S S', 'SSS', 'SSS'], { S: P })
  // orig steel_samurai_leggings:   c:ingots/steel + iron_ingot
  swap('samurai_dynasty:steel_samurai_leggings',   ['SSS', 'S S', 'S S'], { S: P })
  // orig steel_samurai_boots:      c:ingots/steel + iron_ingot
  swap('samurai_dynasty:steel_samurai_boots',      ['S S', 'S S'],        { S: P })

  // LEFT AS-IS (already steel-routed / coherent): all weapons (katana, kunai, naginata, …),
  // light_samurai_* + steel_* + steel_ninja_* sets, jade/spirit-stone blocks, cloth/kimono,
  // and the netherite smithing upgrades.
})
