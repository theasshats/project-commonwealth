// Supplementaries — "made through Create" (only the unambiguous kinetic blocks).
//
// Supplementaries is overwhelmingly DECORATION (sconces, lamps, flags, awnings, urns, statues,
// candle holders, planters…) — all LEFT ALONE. Wholesale Create-gating its novelty gadgets would
// be over-reach. We touch only the two blocks that are literally Create's own vocabulary, where a
// Create kinetic part is the obvious build: the cog block (a cog) and the turn table (a rotator).
//
// Verified against tools/mod-data/recipes/supplementaries-1.21-3.5.34-neoforge.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // orig cog_block: c:ingots/copper + redstone_block  ->  built around actual Create cogwheels.
  swap('supplementaries:cog_block', [' G ', 'CRC', ' G '], {
    G: 'create:cogwheel', C: '#c:ingots/copper', R: '#c:storage_blocks/redstone'
  })

  // orig turn_table: c:ingots/copper + cobblestone + planks + redstone  ->  spins on a Create shaft.
  swap('supplementaries:turn_table', [' P ', 'CKC', ' R '], {
    P: '#minecraft:planks', C: '#c:ingots/copper', K: 'create:shaft', R: '#c:dusts/redstone'
  })
})
