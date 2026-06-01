// NetMusic — "made through Create" (light touch on the two ELECTRONICS).
//
// Most of NetMusic is decoration/QoL audio (megaphone, music_player, CDs) and stays vanilla. But
// the `computer` and `cd_burner` are literally electronic devices — copper + iron + redstone — so
// an `create:electron_tube` core (the pack's "circuit" part) is the coherent gate. One light gate
// each; the simpler audio blocks inherit nothing and are left alone.
//
// Verified against tools/mod-data/recipes/netmusic-1.5.0-neoforge+mc1.21.1.txt.

ServerEvents.recipes(event => {
  // COMPUTER. orig: c:ingots/copper + c:ingots/iron + clock + glass_pane + redstone
  event.remove({ id: 'netmusic:computer' })
  event.shaped('netmusic:computer', ['GKG', 'IEI', 'RCR'], {
    G: 'minecraft:glass_pane', K: 'minecraft:clock', I: '#c:ingots/iron',
    E: 'create:electron_tube', R: '#c:dusts/redstone', C: '#c:ingots/copper'
  })

  // CD BURNER. orig: c:ingots/copper + c:nuggets/iron + lightning_rod + redstone
  event.remove({ id: 'netmusic:cd_burner' })
  event.shaped('netmusic:cd_burner', ['CLC', 'RER', 'CNC'], {
    C: '#c:ingots/copper', L: 'minecraft:lightning_rod', R: '#c:dusts/redstone',
    E: 'create:electron_tube', N: '#c:nuggets/iron'
  })
})
