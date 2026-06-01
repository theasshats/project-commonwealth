// Drones — "made through Create" (a drone IS a kinetic contraption — ideal Create fit).
//
// Every drone part bypasses Create with raw iron/copper, yet they're literally spinning-rotor
// flying machines — so they map onto Create's kinetic vocabulary almost 1:1. Tiered by role, and
// (cross-mod synergy at comparable cost) wired with createaddition's electricals — a drone is an
// electric machine, so its remote and powered thruster draw on copper wire + an electric motor:
//   - rotors  -> built around a create:shaft (the axle they spin on); basic tier.
//   - ion_thruster (endgame rotor) -> a create:propeller on a createaddition:electric_motor (marquee).
//   - frame (the chassis keystone) -> an andesite_casing core (the Create "machine body").
//   - controller (handheld remote) -> a create:electron_tube brain + createaddition:copper_wire.
//
// Verified against tools/mod-data/recipes/{drones,createaddition}-*.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // CHASSIS (keystone). orig frame: iron + logs + smooth_stone
  swap('drones:frame', ['SSS', 'SCS', 'S S'], {
    S: 'create:iron_sheet', C: 'create:andesite_casing'
  })

  // REMOTE. orig controller: iron + logs + redstone + repeater + smooth_stone
  swap('drones:controller', ['SES', 'WIW'], {
    S: 'create:iron_sheet', E: 'create:electron_tube', W: 'createaddition:copper_wire', I: '#c:ingots/iron'
  })

  // ROTORS — spun on a Create shaft. orig wood_rotor: copper + planks + stick
  swap('drones:wood_rotor', ['PCP', ' K '], { P: '#c:planks', C: '#c:ingots/copper', K: 'create:shaft' })
  // orig iron_rotor: copper + iron + stick
  swap('drones:iron_rotor', ['SCS', ' K '], { S: 'create:iron_sheet', C: '#c:ingots/copper', K: 'create:shaft' })

  // ION THRUSTER (endgame rotor) — a Create propeller driven by a createaddition electric motor.
  // orig: diamond + iron + stick
  swap('drones:ion_thruster', [' P ', 'EME'], {
    P: 'create:propeller', E: 'create:electron_tube', M: 'createaddition:electric_motor'
  })

  // DRILL (mining attachment) — a shaft-driven bit. orig drill: iron
  swap('drones:drill', ['S', 'S', 'K'], { S: 'create:iron_sheet', K: 'create:shaft' })
})
