// Registered intermediate "incomplete" parts for the heaviest gating tier: endgame machines are
// assembled in STAGES via Create sequenced_assembly (deploying + pressing on the Mechanical
// Crafters). Each chain needs an in-progress item to cycle through its stages — that's what these
// are. Placeholder vanilla textures for now (pre-alpha; swap for custom art later).
//
// Naming: derpack:incomplete_<machine>. Keep one per sequenced chain.

StartupEvents.registry('item', event => {
  event.create('derpack:incomplete_force_projector')
    .displayName('Incomplete Force Projector')
    .texture('minecraft:item/netherite_scrap')

  event.create('derpack:incomplete_interdiction_matrix')
    .displayName('Incomplete Interdiction Matrix')
    .texture('minecraft:item/netherite_scrap')
})
