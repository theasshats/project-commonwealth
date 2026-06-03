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

  // Magic web flagship tier (37-magic-web-flagship.js): the mid-chain "converged essence" — the
  // occult premium essence distilled on the Imbuement Chamber, then spent as the reagent on the
  // Enchanting Apparatus where all the schools converge. A magic-native (NOT Create) two-stage
  // chain, so this intermediate is a real magic item, not a sequenced-assembly transitional.
  // Placeholder arcane-looking texture for now.
  event.create('derpack:converged_essence')
    .displayName('Converged Essence')
    .texture('minecraft:item/amethyst_shard')
})
