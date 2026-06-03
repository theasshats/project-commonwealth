// NetMusic electronics — cross-mod synergy style, kept at COMPARABLE difficulty (KubeJS).
//
// Borrowing the Immersive-TaCZ idea of sourcing real components across the pack's tech mods (so a
// device ties the mods together and reads as assembled electronics) — but, unlike the guns (which
// are deliberately hard because they're strong), these stay roughly as easy as the originals: a
// rich TABLE craft, not a Mechanical-Crafter gate.
//
// Sourced across: create (framed_glass, electron_tube), create_new_age (copper_circuit),
// createaddition (copper_wire), galosphere (allurite_shard = the glowing optical/laser element).
// Simpler audio blocks (megaphone, music_player, CDs) stay vanilla.
//
// Verified against tools/mod-data/recipes/{netmusic,create-new-age,createaddition,Galosphere}-*.txt.

ServerEvents.recipes(event => {
  // COMPUTER — framed-glass screen, logic circuit, electron-tube chip, copper wiring, iron chassis.
  // orig: c:ingots/copper + c:ingots/iron + clock + glass_pane + redstone
  event.remove({ id: 'netmusic:computer' })
  event.shaped('netmusic:computer', ['FCF', 'WEW', 'IKI'], {
    F: 'create:framed_glass',
    C: 'create_new_age:copper_circuit',
    W: 'createaddition:copper_wire',
    E: 'create:electron_tube',
    I: '#c:ingots/iron',
    K: 'minecraft:clock'
  })

  // CD BURNER — a glowing allurite shard as the "laser", focused through wiring + a controller.
  // orig: c:ingots/copper + c:nuggets/iron + lightning_rod + redstone
  event.remove({ id: 'netmusic:cd_burner' })
  event.shaped('netmusic:cd_burner', ['CLC', 'WAW', 'CEC'], {
    C: '#c:ingots/copper',
    L: 'minecraft:lightning_rod',
    W: 'createaddition:copper_wire',
    A: 'galosphere:allurite_shard',
    E: 'create:electron_tube'
  })
})
