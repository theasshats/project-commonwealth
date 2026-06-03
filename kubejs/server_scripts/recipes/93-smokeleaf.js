// Smokeleaf Industries — "made through Create" (one machine-core keystone).
//
// The mod's appliances (grinder, extractor, generator, liquifier, mutator, sequencer, synthesizer,
// plant_analyzer, dryer, led_light…) are ALL built from smokeleafindustries:hemp_core, which is
// itself made from smokeleafindustries:unfinished_hemp_core. So gate that one keystone — the
// "machine brain" — with a Create precision mechanism, and every appliance routes through Create.
// Consumables (buds, joints, edibles, seeds, fertilizers) and hemp_plastic stay organic — untouched.
//
// Verified against tools/mod-data/recipes/smokeleafindustries-0.5.5-1.21.1.txt.

ServerEvents.recipes(event => {
  // orig unfinished_hemp_core: amethyst_shard + diamond + glowstone_dust + redstone
  // Now cored on a Create precision_mechanism (the industrial control brain).
  event.remove({ output: 'smokeleafindustries:unfinished_hemp_core' })
  event.shaped('smokeleafindustries:unfinished_hemp_core', ['ADG', ' M ', ' R '], {
    A: 'minecraft:amethyst_shard', D: 'minecraft:diamond', G: 'minecraft:glowstone_dust',
    M: 'create:precision_mechanism', R: '#c:dusts/redstone'
  })
})
