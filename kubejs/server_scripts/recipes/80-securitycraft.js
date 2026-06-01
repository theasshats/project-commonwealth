// SecurityCraft — "made through Create" (gate the device keystones, not the 90-device tail).
//
// SecurityCraft is fundamentally a redstone/iron security mod with a huge tail of standalone
// iron+redstone devices and ~200 reinforced BUILDING blocks. Create-gating all of it would be the
// GregTech-ification the guardrails forbid. Instead, gate the few KEYSTONES that the advanced
// multi-block systems are built FROM — that Create-routes the high tier coherently with one touch
// each, while the bulk stays the simple iron/redstone craft it's meant to be.
//
//   portable_radar -> feeds sentry, ims, sonic_security_system, username_logger, motion lights.
//   laser_block    -> the optical emitter behind the 3-tier block reinforcers + inventory_scanner.
//   mine           -> base of the explosive/trap family (bouncing_betty, claymore, track_mine…).
//   keypad_frame   -> the access-panel core.
//
// LEFT ALONE: standalone iron devices (cameras, display cases, modules, keycards…) and every
// reinforced wood/stone/glass/wool building block — decorative/bulk, coherent as plain crafts.
//
// Verified against tools/mod-data/recipes/[1.21.1] SecurityCraft v1.10.1.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // orig portable_radar: c:dusts/redstone + c:ingots/iron + minecraft:redstone_torch
  // Detection brain -> a Create electron_tube; iron framing -> pressed iron sheet; createaddition
  // copper_wire as the antenna feed (cross-mod synergy, comparable cost).
  swap('securitycraft:portable_radar', [' T ', 'SES', ' W '], {
    T: 'minecraft:redstone_torch', S: 'create:iron_sheet', E: 'create:electron_tube', W: 'createaddition:copper_wire'
  })

  // orig laser_block: c:glass_panes/colorless + c:storage_blocks/redstone + stone_crafting_materials
  // The emitter is an actual glowing crystal — galosphere:allurite_shard — focused through a Create
  // polished-rose-quartz lens; the redstone block stays the power core (cross-mod, comparable cost).
  swap('securitycraft:laser_block', [' G ', 'QAQ', ' R '], {
    G: '#c:glass_panes/colorless', Q: 'create:polished_rose_quartz', A: 'galosphere:allurite_shard', R: '#c:storage_blocks/redstone'
  })

  // orig mine: c:gunpowders + c:ingots/iron  ->  pressed-iron casing around the charge (kept light;
  // mines are placed in bulk).
  swap('securitycraft:mine', [' S ', 'SGS', ' S '], { S: 'create:iron_sheet', G: '#c:gunpowders' })

  // orig keypad_frame: c:dusts/redstone + c:ingots/iron  ->  pressed-iron access panel.
  swap('securitycraft:keypad_frame', ['SSS', 'SRS'], { S: 'create:iron_sheet', R: '#c:dusts/redstone' })
})
