// Traveler's Backpack — "made through Create" (storage branch: the metal components).
//
// Most backpacks are mob-/cloth-themed cosmetics (built from leather, wool, mob drops) and the
// blank_upgrade base is leather+string — all organic, LEFT ALONE. The metal/mechanical parts are
// the fair conversion targets: the backpack_tank (a metal-framed fluid vessel; the keystone behind
// the standard backpack + tanks_upgrade) and the hose_nozzle (a machined fitting).
//
// NOTE: the iron/gold/diamond/netherite TIER upgrades use the mod's custom `backpack_shaped`
// recipe type — not re-authorable from KubeJS without breaking them — so they're left as-is; the
// tank keystone already carries the Create signature into the tank line.
//
// Verified against tools/mod-data/recipes/travelersbackpack-neoforge-1.21.1-10.1.34.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // orig backpack_tank: c:glass_blocks/colorless + c:ingots/iron
  // A copper-framed glass tank — copper is Create's fluid-vessel metal (cf. copper_backtank).
  swap('travelersbackpack:backpack_tank', ['SGS', 'SGS'], {
    S: 'create:copper_sheet', G: '#c:glass_blocks/colorless'
  })

  // orig hose_nozzle: c:ingots/gold + c:ingots/iron  ->  a Create-pressed brass fitting.
  swap('travelersbackpack:hose_nozzle', ['B B', ' B '], { B: 'create:brass_sheet' })
})
