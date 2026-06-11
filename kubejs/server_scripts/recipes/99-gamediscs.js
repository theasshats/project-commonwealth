// Game Discs (#170) — "build the handheld, find the games."
//
// gamediscs shipped its console + 5 components as plain vanilla crafts (copper/quartz/comparator/
// glowstone) and anchored none of the pillars. Route the hardware through Create (pillar 1) so the
// console earns its place, keep ONE game disc craftable as a day-one starter, and leave the other six
// to exploration loot (pillar 2 — handled in the loot pass, see #170 / #18; the discs already ship no
// craft recipe, so they stay loot-gated by default).
//
// Theme-first per docs/RECIPES.md ("computers cost computer parts"): the brain is a precision_mechanism,
// the boards are electron_tubes, the battery is a createaddition capacitor, screens are glass + a tube
// driver, all framed in pressed sheets. Every recipe is dearer than its vanilla original (balance-first).
// Verified against tools/mod-data/recipes/gamediscs-0.3.2-neoforge.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // processor (was 1 comparator) — the CPU: a Create precision_mechanism set in a copper-sheet board.
  swap('gamediscs:processor', ['SPS'], { S: 'create:copper_sheet', P: 'create:precision_mechanism' })

  // redstone_circuit (was comparator + redstone + torch) — an electron_tube + redstone on a copper sheet.
  swap('gamediscs:redstone_circuit', [' R ', 'SES', ' R '], {
    R: 'minecraft:redstone', S: 'create:copper_sheet', E: 'create:electron_tube'
  })

  // display (was glass panes + glowstone + redstone) — a screen: glass + glowstone backlight + an
  // electron_tube driver on a copper-sheet frame.
  swap('gamediscs:display', ['PPP', 'GEG', ' S '], {
    P: '#c:glass_panes/colorless', G: 'minecraft:glowstone_dust', E: 'create:electron_tube', S: 'create:copper_sheet'
  })

  // battery (was copper + quartz + redstone) — a power cell: a createaddition capacitor in a copper
  // shell (cross-mod weave into the electricity addon).
  swap('gamediscs:battery', ['S', 'C', 'S'], { S: 'create:copper_sheet', C: 'createaddition:capacitor' })

  // control_pad (was buttons + quartz) — the D-pad: buttons around an andesite-alloy frame.
  swap('gamediscs:control_pad', [' B ', 'BAB', ' B '], { B: '#minecraft:buttons', A: 'create:andesite_alloy' })

  // gaming_console (was the 5 components + iron) — assemble the handheld from the now-Create-routed
  // components in a brass-sheet shell. Kept a plain assembly craft (everyday gear, not an endgame
  // machine) — the Create gating lives in the components.
  swap('gamediscs:gaming_console', ['SDS', 'BPC', 'SRS'], {
    S: 'create:brass_sheet', D: 'gamediscs:display', B: 'gamediscs:battery',
    P: 'gamediscs:processor', C: 'gamediscs:control_pad', R: 'gamediscs:redstone_circuit'
  })

  // Starter game disc — Pong (the original arcade game; the one you build day-one): a copper-sheet disc
  // with a polished-rose-quartz "data crystal" + redstone. The other six discs (incl. Blocktris) are
  // exploration loot, distributed in kubejs/server_scripts/40-gamediscs-loot.js.
  event.shaped('gamediscs:game_disc_pong', [' R ', 'SQS', ' S '], {
    R: 'minecraft:redstone', S: 'create:copper_sheet', Q: 'create:polished_rose_quartz'
  })
})
