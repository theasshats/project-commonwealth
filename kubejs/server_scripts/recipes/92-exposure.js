// Exposure — "made through Create" (the camera devices, not the film/frames).
//
// Exposure is a photography mod: most outputs are consumable FILM (iron/gold + kelp + gunpowder —
// chemical emulsion, organic) and photo FRAMES/albums (decoration) — all LEFT ALONE. The metal
// DEVICES are the fair targets: the camera (a film camera — analog, so a copper body + glass lens,
// NOT electronics), its stand, and the endgame interplanar projector.
//
// Verified against tools/mod-data/recipes/exposure-neoforge-1.21.1-1.9.16.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // CAMERA (keystone device). orig: iron + glass_pane + button + lever
  // A pressed-copper body, glass lens, button+lever shutter.
  swap('exposure:camera', ['BLS', 'SGS'], {
    B: '#minecraft:buttons', L: 'minecraft:lever', S: 'create:copper_sheet', G: '#c:glass_panes/colorless'
  })

  // CAMERA STAND (tripod). orig: iron + smooth_stone_slab + stick
  swap('exposure:camera_stand', ['I', 'K', 'V'], {
    I: 'create:iron_sheet', K: 'minecraft:stick', V: 'minecraft:smooth_stone_slab'
  })

  // INTERPLANAR PROJECTOR (endgame). orig: ender_eye + redstone + tinted_glass
  // Brass-bodied projector around an ender-eye core.
  swap('exposure:interplanar_projector', [' G ', 'BEB', ' R '], {
    G: 'minecraft:tinted_glass', B: 'create:brass_sheet', E: 'minecraft:ender_eye', R: '#c:dusts/redstone'
  })

  // LEFT ALONE: all film (consumable chemical emulsion), the lightroom (wood/iron-trapdoor
  // darkroom), albums and photograph frames (decoration).
})
