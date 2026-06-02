// Swashbucklers — "made through Create" (the firearms' metal barrels).
//
// Pirate flavor mod: ships/hulls/masts/sails, treasure, dyes and cosmetics are organic/decoration
// and LEFT ALONE. The two black-powder FIREARMS (hand cannon, hand mortar) are the metal/mechanical
// targets. BALANCE (rubric: nerf strong things): a firearm is a weapon, so beyond the Create-pressed
// iron barrel it earns a Create mechanical firing component (andesite_alloy = the trigger/hammer
// assembly — "a gun costs gun parts") — gated harder than a lone barrel, but not TaCZ-deep (these
// stay black-powder flintlocks). Ammo (cannonball, mortar_ball) stays consumable, untouched.
//
// Verified against tools/mod-data/recipes/swashbucklers! 2.6.6C 1.21.1 neoforge.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // orig hand_cannon: hpm:cannonball + cobbled_deepslate_slab + gunpowder
  swap('hpm:hand_cannon', [' S ', 'MGD', ' B '], {
    S: 'create:iron_sheet', M: 'create:andesite_alloy', G: 'minecraft:gunpowder',
    D: 'minecraft:cobbled_deepslate_slab', B: 'hpm:cannonball'
  })

  // orig hand_mortar: hpm:mortar_ball + cobbled_deepslate_slab + gunpowder
  swap('hpm:hand_mortar', ['S S', 'MGD', ' B '], {
    S: 'create:iron_sheet', M: 'create:andesite_alloy', G: 'minecraft:gunpowder',
    D: 'minecraft:cobbled_deepslate_slab', B: 'hpm:mortar_ball'
  })
})
