// Supplementaries — full pass: "made through Create" for the MECHANICAL/INSTRUMENT blocks only.
//
// Supplementaries is overwhelmingly DECORATION (sconces, lamps, flags, awnings, urns, statues, the
// 20+ candle holders, gold/iron gates & doors, goblets, hourglasses, planters…) — all LEFT ALONE,
// and so are the redstone/novelty gadgets (relayer, sconce_lever, cannon, bomb, bubble_blower,
// spring_launcher) which live in vanilla's redstone/explosive domain. Wholesale gating those is the
// over-reach we avoid. What we DO touch is the handful that are genuinely mechanical or are
// aeronautics instruments — where a Create part is the obvious, coherent build:
//   • cog_block / turn_table — literally Create's kinetic vocabulary (cog, rotator)
//   • wrench            — a mechanical tool; built from an andesite alloy core
//   • pulley            — a mechanical block; built on a Create cogwheel + shaft
//   • altimeter         — an AERONAUTICS instrument; gets a Create electron_tube core
//   • wind_vane         — an AERONAUTICS instrument that spins; built on a cogwheel
// Costs stay ~comparable: each adds one Create part / a step, never a new tier of grind.
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

  // orig wrench: c:ingots/copper  ->  a mechanical tool built around an andesite alloy core.
  swap('supplementaries:wrench', ['CA ', ' A ', ' A '], {
    C: '#c:ingots/copper', A: 'create:andesite_alloy'
  })

  // orig pulley_block: c:ingots/iron + planks + wooden_slabs  ->  turns on a Create cogwheel + shaft.
  swap('supplementaries:pulley_block', [' G ', 'PSP', ' P '], {
    G: 'create:cogwheel', P: '#minecraft:planks', S: 'create:shaft'
  })

  // altimeter: a brass-housed aeronautics gauge with a glowing readout + electron-tube sensor.
  // orig: c:ingots/copper + redstone  (cross-mod: create + galosphere + vanilla)
  swap('supplementaries:altimeter', [' B ', 'CLC', 'RER'], {
    B: '#c:ingots/brass',            // brass instrument housing
    C: '#c:ingots/copper',
    L: 'galosphere:lumiere_shard',   // glowing altitude readout
    R: '#c:dusts/redstone',
    E: 'create:electron_tube'        // sensor core
  })

  // wind_vane: a Create PROPELLER (catches the wind) spinning on a cogwheel spindle — cross-mod
  // synergy, kept a TABLE craft at comparable cost (no Mechanical-Crafter gate).
  // orig: c:ingots/iron + iron_bars + redstone
  swap('supplementaries:wind_vane', [' P ', ' G ', 'IRI'], {
    P: 'create:propeller', G: 'create:cogwheel', I: '#c:ingots/iron', R: '#c:dusts/redstone'
  })
})
