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
  // A pressed-copper body + button/lever shutter, focused through a polished rose-quartz LENS
  // (Create's optical material — cross-mod synergy at comparable cost vs. a plain glass pane).
  swap('exposure:camera', ['BLS', 'SQS'], {
    B: '#minecraft:buttons', L: 'minecraft:lever', S: 'create:copper_sheet', Q: 'create:polished_rose_quartz'
  })

  // CAMERA STAND (tripod). orig: iron + smooth_stone_slab + stick
  swap('exposure:camera_stand', ['I', 'K', 'V'], {
    I: 'create:iron_sheet', K: 'minecraft:stick', V: 'minecraft:smooth_stone_slab'
  })

  // INTERPLANAR PROJECTOR (endgame). orig: ender_eye + redstone + tinted_glass
  // Brass-bodied projector around an ender-eye core, lit by a glowing galosphere:lumiere_shard
  // (the projection lamp — cross-mod synergy, kept comparable as an endgame piece).
  swap('exposure:interplanar_projector', ['GLG', 'BEB', ' R '], {
    G: 'minecraft:tinted_glass', L: 'galosphere:lumiere_shard', B: 'create:brass_sheet', E: 'minecraft:ender_eye', R: '#c:dusts/redstone'
  })

  // LEFT ALONE: all film (consumable chemical emulsion), the lightroom (wood/iron-trapdoor
  // darkroom), albums and photograph frames (decoration).
})
