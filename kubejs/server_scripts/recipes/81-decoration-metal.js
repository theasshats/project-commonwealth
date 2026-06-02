// Decoration metal — route the pack's metal DECORATION through Create-pressed iron (aggressive weave).
//
// Maintainer call (matured rubric: "decoration needing Create is great" — it earns a pure-decoration
// mod a SECOND pillar). The big currently-vanilla decoration mods craft their METAL variants from raw
// iron, bypassing Create entirely. Route that iron through `create:iron_sheet` so "metal decoration is
// made of Create-pressed metal" — coherent, and cost-neutral for ingots (a sheet is a pressed ingot).
//
// HOW: `event.replaceInput` swaps only the INGREDIENT — every recipe's shape, count and yield are
// preserved, and the wood/stone/glass variants (which don't use iron) are untouched. Deliberately
// broad and safe: no recipe is re-authored, so decoration can't become a grind. iron_BARS / iron_nuggets
// are left alone (lattice / trim are coherent as-is). Verified against tools/mod-data/recipes/
// {mcw-doors,mcw-mcwwindows,mcw-mcwfences,handcrafted,supplementaries}-*.txt.
//
// SCOPE NOTES (deliberate omissions):
//  - Macaw's metal FENCES come from a stonecutter cut from iron_bars (not the crafting table) — cheap
//    decoration on an awkward-to-weave path; left as-is.
//  - LIGHTS are not force-fitted with a "bulb": the pack's lamps are organic (Galosphere crystal +
//    glowstone, Quark corundum/crystal, torch-lit) and a bulb would break their theme, while the
//    genuinely electric lights are already Create-woven (bits_n_bobs bulb-lamps, Northstar plate-lamps,
//    securitycraft). Theme-coherence > forcing the rule. The metal light we DO touch is the iron
//    candle-holder line below.

ServerEvents.recipes(event => {
  // Raw iron ingot -> Create-pressed iron sheet, across the metal items of these decoration mods:
  //  - mcwdoors:  metal_door (+ reinforced/windowed/warning built from it), garages, portcullis, store/…
  //  - mcwwindows: metal curtain rod + the hammer/key tools
  //  - mcwfences:  any crafting-table iron_ingot fence parts (no-op for the stonecut metal fences)
  //  - handcrafted: metal furniture (bench, hammer)
  ;['mcwdoors', 'mcwwindows', 'mcwfences', 'handcrafted'].forEach(mod =>
    event.replaceInput({ mod: mod }, 'minecraft:iron_ingot', 'create:iron_sheet')
  )

  // Macaw's marquee metal WINDOWS are framed from a full iron BLOCK -> a pressed sheet. Decoration
  // shouldn't cost 9 ingots, and this routes the frame through Create (mcwwindows-scoped, so only the
  // metal_window/metal_window2/metal_pane_window/metal_four_window frames are affected).
  event.replaceInput({ mod: 'mcwwindows' }, 'minecraft:iron_block', 'create:iron_sheet')

  // Supplementaries iron candle-holders (the whole dyed line builds from c:ingots/iron) -> pressed sheet.
  event.replaceInput({ id: /^supplementaries:candle_holders\// }, '#c:ingots/iron', 'create:iron_sheet')
})
