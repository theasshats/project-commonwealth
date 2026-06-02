// Decoration metal — route the pack's metal DECORATION through Create-pressed iron (aggressive weave).
//
// Maintainer call (matured rubric: "decoration needing Create is great" — it earns a pure-decoration
// mod a SECOND pillar). The big currently-vanilla decoration mods craft their METAL variants from raw
// iron ingots, bypassing Create entirely. Route that iron through `create:iron_sheet` so "metal
// decoration is made of Create-pressed metal" — coherent, and cost-neutral (a sheet is just a pressed
// ingot, 1:1).
//
// HOW: `event.replaceInput` swaps only the INGREDIENT — every recipe's shape, count and yield are
// preserved, and the wood/stone/glass variants (which don't use an iron ingot) are untouched. This is
// deliberately broad and safe: no recipe is re-authored, so decoration can't become a grind. iron_BARS
// / iron_nuggets / iron_BLOCK are left alone (lattice / trim / dense-block are coherent as-is).
//
// Verified against tools/mod-data/recipes/{mcw-doors,mcw-mcwwindows,mcw-mcwfences,supplementaries}-*.txt.
// (bits_n_bobs is already Create-woven — its lamps use create sheets + its own `lightbulb` = glass +
// glowstone + redstone; nothing to add there.)

ServerEvents.recipes(event => {
  // Macaw's metal doors (metal_door + reinforced/windowed/warning that build from it, garages,
  // portcullis, hospital/sliding/store), metal windows (curtain rod, shutters, hammer/key tools) and
  // metal fences — raw iron_ingot → Create-pressed iron sheet.
  ;['mcwdoors', 'mcwwindows', 'mcwfences'].forEach(mod =>
    event.replaceInput({ mod: mod }, 'minecraft:iron_ingot', 'create:iron_sheet')
  )

  // Supplementaries iron candle-holders (the whole dyed line builds from c:ingots/iron) → pressed sheet.
  event.replaceInput({ id: /^supplementaries:candle_holders\// }, '#c:ingots/iron', 'create:iron_sheet')
})
