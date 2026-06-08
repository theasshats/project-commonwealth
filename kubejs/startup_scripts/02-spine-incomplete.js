// Incomplete (transitional) parts for the Create-spine sequenced_assembly chains in
// kubejs/server_scripts/spine/. Create's sequenced_assembly REQUIRES a transitional item that the
// in-progress part cycles through between stages — one per converted recipe.
//
// These back the Nuclear weave (53-weave-nuclear.js): the former item_application reactor parts are
// now staged on the Mechanical Crafters via deploying steps. Placeholder vanilla textures (pre-alpha;
// swap for custom art later). Pattern copied from 01-intermediate-parts.js.
//
// Naming: derpack:incomplete_<part>. Keep one per sequenced chain.

StartupEvents.registry('item', event => {
  event.create('derpack:incomplete_reactor_casing')
    .displayName('Incomplete Reactor Casing')
    .texture('minecraft:item/netherite_scrap')

  event.create('derpack:incomplete_reactor_input')
    .displayName('Incomplete Reactor Input Port')
    .texture('minecraft:item/netherite_scrap')

  event.create('derpack:incomplete_reactor_output')
    .displayName('Incomplete Reactor Output Port')
    .texture('minecraft:item/netherite_scrap')
})
