// NetMusic — the two ELECTRONICS, built in the cross-mod synergy style (KubeJS).
//
// Mirroring the Immersive-TaCZ approach: instead of a thin "one Create part + vanilla" gate, a
// device is assembled from real components pulled across the pack's tech mods, so building it
// actually exercises the Create electrical chain and ties the mods together. A computer/CD burner
// should feel like assembled electronics, not a crafting-table trinket.
//
// Sourced across: create (framed_glass screen, electron_tube core), create_new_age (copper_circuit —
// itself a create:deploying product), createaddition (copper_wire), galosphere (allurite_shard as
// the glowing optical/laser element), + vanilla chassis. The simpler audio blocks (megaphone,
// music_player, CDs) stay vanilla decoration.
//
// Verified against tools/mod-data/recipes/{netmusic,create-new-age,createaddition,Galosphere}-*.txt.

ServerEvents.recipes(event => {
  // COMPUTER — framed-glass screen + logic circuit + electron-tube processor + wiring + iron chassis.
  // orig: c:ingots/copper + c:ingots/iron + clock + glass_pane + redstone
  event.remove({ id: 'netmusic:computer' })
  event.shaped('netmusic:computer', ['FCF', 'WEW', 'IKI'], {
    F: 'create:framed_glass',            // screen
    C: 'create_new_age:copper_circuit',  // logic board
    W: 'createaddition:copper_wire',     // internal wiring
    E: 'create:electron_tube',           // processor core
    I: '#c:ingots/iron',                 // chassis
    K: 'minecraft:clock'                 // clock signal
  })

  // CD BURNER — an optical writer: a glowing allurite shard as the "laser", driven through circuitry.
  // orig: c:ingots/copper + c:nuggets/iron + lightning_rod + redstone
  event.remove({ id: 'netmusic:cd_burner' })
  event.shaped('netmusic:cd_burner', ['CLC', 'WAW', 'CEC'], {
    C: '#c:ingots/copper',               // copper housing
    L: 'minecraft:lightning_rod',        // emitter
    W: 'createaddition:copper_wire',     // wiring
    A: 'galosphere:allurite_shard',      // glowing optical/laser element
    E: 'create:electron_tube'            // controller
  })
})
