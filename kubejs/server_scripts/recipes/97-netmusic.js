// NetMusic electronics — assembled THROUGH Create, in the Immersive-TaCZ style (KubeJS).
//
// Immersive TaCZ doesn't gate a gun on a token part — it assembles it on the MECHANICAL CRAFTER from
// components sourced across the pack (steel barrel, firing mechanism, precision core, …). We mirror
// that: a computer / CD burner is real electronics, so it comes off the Mechanical Crafter from parts
// pulled across the tech mods — not a crafting-table trinket. This both ties the mods together and
// makes "made through Create" literal (the machine has to run).
//
// Sourced across: create (framed_glass, electron_tube), create_new_age (copper_circuit — itself a
// create:deploying product), createaddition (copper_wire), galosphere (allurite_shard = the glowing
// optical/laser element). Simpler audio blocks (megaphone, music_player, CDs) stay vanilla.
//
// Verified against tools/mod-data/recipes/{netmusic,create-new-age,createaddition,Galosphere}-*.txt.

ServerEvents.recipes(event => {
  // COMPUTER — off the Mechanical Crafter: framed-glass screen, logic circuit, electron-tube
  // processor, copper wiring, iron chassis, clock signal.
  // orig: c:ingots/copper + c:ingots/iron + clock + glass_pane + redstone
  event.remove({ id: 'netmusic:computer' })
  event.recipes.create.mechanical_crafting('netmusic:computer', ['FCF', 'WEW', 'IKI'], {
    F: 'create:framed_glass',
    C: 'create_new_age:copper_circuit',
    W: 'createaddition:copper_wire',
    E: 'create:electron_tube',
    I: '#c:ingots/iron',
    K: 'minecraft:clock'
  })

  // CD BURNER — an optical writer: a glowing allurite "laser" focused through wiring + a controller,
  // assembled on the Mechanical Crafter.
  // orig: c:ingots/copper + c:nuggets/iron + lightning_rod + redstone
  event.remove({ id: 'netmusic:cd_burner' })
  event.recipes.create.mechanical_crafting('netmusic:cd_burner', ['CLC', 'WAW', 'CEC'], {
    C: '#c:ingots/copper',
    L: 'minecraft:lightning_rod',
    W: 'createaddition:copper_wire',
    A: 'galosphere:allurite_shard',
    E: 'create:electron_tube'
  })
})
