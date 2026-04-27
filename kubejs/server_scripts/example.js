// Example KubeJS script. Safe to delete or modify.
// This file is loaded by the SERVER when it starts up.
//
// See ../README.md for more examples and the KubeJS docs link.

ServerEvents.recipes(event => {
  // Examples (commented out — uncomment to enable):

  // Remove a recipe by output:
  // event.remove({ output: 'create:precision_mechanism' })

  // Add a shaped recipe:
  // event.shaped('minecraft:diamond_block', [
  //   'DDD',
  //   'DDD',
  //   'DDD'
  // ], { D: 'minecraft:diamond' })
})
