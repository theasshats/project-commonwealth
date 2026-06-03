// Decoration & equipment metal — route the pack's metal craftables through Create-pressed sheets.
//
// Maintainer call (matured rubric: "decoration needing Create is great" — it earns a mod a SECOND
// pillar). The currently-vanilla decoration + kitchenware mods craft their METAL items from raw ingots,
// bypassing Create. Route those through Create's pressed sheets so "metal stuff is made of Create-pressed
// metal" — coherent, and ~cost-neutral (a sheet is a pressed ingot, 1:1).
//
// HOW: `event.replaceInput` swaps only the INGREDIENT — every recipe's shape, count and yield are
// preserved, and the wood/stone/glass/food variants (which don't use a metal ingot) are untouched.
// Deliberately broad + safe: nothing is re-authored, so it can't become a grind. CONCRETE create: items
// are used (not #c:plates/* tags — those are addon-filled and read as unobtainable in JEI; that was the
// steel-plate breakage). iron_BARS / iron_nuggets are left alone (lattice / trim are coherent as-is).
// Verified against tools/mod-data/recipes/{mcw-*,handcrafted,supplementaries,FarmersDelight,extradelight}.

ServerEvents.recipes(event => {
  const SHEET = {
    'minecraft:iron_ingot':   'create:iron_sheet',
    'minecraft:copper_ingot': 'create:copper_sheet',
    'minecraft:gold_ingot':   'create:golden_sheet',
  }

  // 1. Pure DECORATION mods — route every base metal ingot, mod-wide (no food/weapons to mis-hit).
  //    Covers Macaw's metal doors/windows/fences/roof tools + handcrafted metal furniture.
  ;['mcwdoors', 'mcwwindows', 'mcwfences', 'mcwroofs', 'mcwstairs', 'handcrafted'].forEach(mod =>
    Object.entries(SHEET).forEach(([ingot, sheet]) => event.replaceInput({ mod: mod }, ingot, sheet))
  )
  // Macaw's marquee metal WINDOWS are framed from a full iron BLOCK -> a pressed sheet (decoration
  // shouldn't cost 9 ingots, and it routes the frame through Create).
  event.replaceInput({ mod: 'mcwwindows' }, 'minecraft:iron_block', 'create:iron_sheet')

  // Macaw's metal DOORS: their filler iron NUGGETS (rivets/hinges) become andesite alloy — the iconic
  // "forged with Create" accent, ~same tier as a nugget (andesite + iron nugget), so every metal door
  // reads as Create-made rather than plain iron.
  event.replaceInput({ mod: 'mcwdoors' }, 'minecraft:iron_nugget', 'create:andesite_alloy')

  // 2. Supplementaries metal DECORATION. Scoped by id — the kinetic/instrument blocks (wrench, pulley,
  //    altimeter, wind_vane, cog_block, turn_table) are already Create-gated in 94, so steer clear.
  event.replaceInput({ id: /^supplementaries:candle_holders\// }, '#c:ingots/iron', 'create:iron_sheet')
  event.replaceInput({ id: /^supplementaries:(gold_bars|gold_door|gold_trapdoor|hourglass)$/ }, '#c:ingots/gold', 'create:golden_sheet')
  event.replaceInput({ id: /^supplementaries:fire_pit/ }, '#c:ingots/copper', 'create:copper_sheet')

  // 3. Delight cooking EQUIPMENT -> Create. Kitchenware is metal gear, so this ties the food/survival
  //    pillar to the Create spine (a 2nd pillar). Consumable FOOD recipes are untouched.
  //    PLAYTEST NOTE: this puts a (hand-)pressed iron sheet in front of Farmer's Delight's cooking_pot /
  //    skillet / stove — trivially early in a Create pack, but it IS an early gate on the core cooking
  //    loop. If it feels bad early, pull FD back out of this list; the rest of the weave is decoration.
  event.replaceInput({ mod: 'farmersdelight' }, '#c:ingots/iron', 'create:iron_sheet') // cooking_pot, skillet, stove, iron_knife
  event.replaceInput({ id: /^extradelight:chiller$/ }, 'minecraft:iron_block', 'create:iron_sheet')
  event.replaceInput({ id: /^extradelight:tap$/ }, 'minecraft:copper_ingot', 'create:copper_sheet')
})
