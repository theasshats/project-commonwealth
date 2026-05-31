// Swashbucklers — "made through Create" (the firearms' metal barrels).
//
// Pirate flavor mod: ships/hulls/masts/sails, treasure, dyes and cosmetics are organic/decoration
// and LEFT ALONE. The two black-powder FIREARMS (hand cannon, hand mortar) are the metal/mechanical
// targets — give each a Create-pressed iron barrel, keeping the black-powder character. Ammo
// (cannonball, mortar_ball — stone + tnt) stays as-is; it's consumable.
//
// Verified against tools/mod-data/recipes/swashbucklers! 2.6.6C 1.21.1 neoforge.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // orig hand_cannon: hpm:cannonball + cobbled_deepslate_slab + gunpowder
  swap('hpm:hand_cannon', [' S ', 'DGD', ' B '], {
    S: 'create:iron_sheet', D: 'minecraft:cobbled_deepslate_slab', G: 'minecraft:gunpowder', B: 'hpm:cannonball'
  })

  // orig hand_mortar: hpm:mortar_ball + cobbled_deepslate_slab + gunpowder
  swap('hpm:hand_mortar', ['S S', 'DGD', ' B '], {
    S: 'create:iron_sheet', D: 'minecraft:cobbled_deepslate_slab', G: 'minecraft:gunpowder', B: 'hpm:mortar_ball'
  })
})
