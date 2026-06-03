// MineColonies — "integrate where feasible" (the MACHINES, not the colony).
//
// MineColonies is an NPC colony-management mod: ~55 worker-hut blocks built with its own build-tool
// (`structurize:sceptergold`), plus a large cooking tree. That hut progression is the mod's OWN
// spine — gating all 55 behind Create would be exactly the grind we avoid, and the cooking/chainmail
// recipes are vanilla-parallel. The two things that are unambiguously MACHINES are the QUARRIES, so
// those route through Create: a quarry that digs should be built from Create's mechanical vocabulary.
// The non-consumed build-tool stamp (`structurize:sceptergold`) is preserved in-grid as the mod
// expects, and the original pickaxe/barrel/planks stay — we add the Create mechanical core.
//
// Verified against tools/mod-data/recipes/minecolonies-1.1.1307-1.21.1-snapshot.txt.

ServerEvents.recipes(event => {
  // SIMPLE QUARRY. orig: barrel + iron_pickaxe + planks + sceptergold  ->  andesite-tier machine.
  // Cost upped a notch: 2 andesite casings + 2 cogwheels + a driving shaft (was 1 casing + 2 cogs).
  event.remove({ id: 'minecolonies:simplequarry' })
  event.shaped('minecolonies:simplequarry', ['AKA', 'GHG', 'PBS'], {
    A: 'create:andesite_casing', K: 'minecraft:iron_pickaxe', G: 'create:cogwheel',
    H: 'create:shaft', P: '#minecraft:planks', B: 'minecraft:barrel', S: 'structurize:sceptergold'
  })

  // MEDIUM QUARRY. orig: barrel + diamond_pickaxe + planks + sceptergold  ->  brass/precision tier.
  // Cost upped a notch: 2 brass casings + 2 precision mechanisms (was 2 casings + 1 mechanism).
  event.remove({ id: 'minecolonies:mediumquarry' })
  event.shaped('minecolonies:mediumquarry', ['AKA', 'MBM', 'PSP'], {
    A: 'create:brass_casing', K: 'minecraft:diamond_pickaxe', M: 'create:precision_mechanism',
    B: 'minecraft:barrel', P: '#minecraft:planks', S: 'structurize:sceptergold'
  })
})
