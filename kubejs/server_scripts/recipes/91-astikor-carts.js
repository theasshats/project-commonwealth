// Astikor Carts Redux — "made through Create" (one keystone gates the whole mod).
//
// Every cart, plow, reaper, seed-drill and supply/animal/hand cart (~55 recipes) is built from
// ONE part: astikorcartsredux:wheel. A cart wheel rolls on an axle — so mounting it on a
// create:shaft is the natural Create touch, and gating that single keystone transitively routes
// every cart through Create. No need to touch the 55 downstream recipes.
//
// Verified against tools/mod-data/recipes/astikorcartsredux-1.2.2.txt.

ServerEvents.recipes(event => {
  // orig wheel: minecraft:planks + minecraft:stick (a bare wooden wheel)
  // Now spoked around a Create shaft (the axle it turns on).
  event.remove({ output: 'astikorcartsredux:wheel' })
  event.shaped('astikorcartsredux:wheel', [' P ', 'PKP', ' P '], {
    P: '#minecraft:planks', K: 'create:shaft'
  })
})
