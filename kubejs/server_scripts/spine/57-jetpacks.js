// Create spine — #87 RESOLVED: one jetpack line. create_jetpack is canonical; create_sa's jetpacks are out.
//
// The pack shipped two parallel jetpack families (Create Jetpack's backtank-pressure line and Create
// Stuff & Additions' engine line). Decision (#87): Create Jetpack is the canonical flight item — it rides
// the pack's existing backtank/pressure systems and the aeronautics compat. create_sa keeps its identity
// items (engines, exoskeletons, tools, drones); ONLY its three jetpack chestplates are disabled, by
// recipe removal (the disable-by-recipe pattern; items stay registered but uncraftable).
//
// The surviving line is tier-costed:
//   - create_jetpack:jetpack — EARLY T3 (user call): flight is an electric-age privilege, not a brass
//     trinket. Re-authored through Create (mechanical_crafting) with a createaddition:capacitor woven in
//     (the early-T3 electric part — also a fresh create_jetpack<->Additions seam; the mod previously
//     consumed only create + vanilla parts). NOTE: the stock recipe was the custom
//     create_jetpack:copy_components_mechanical_crafting type (copies the backtank's stored air); the
//     re-author is plain mechanical_crafting, so a fresh jetpack starts empty — fill it like any backtank.
//   - create_jetpack:netherite_jetpack — stays the T4 cursium boss gate in 40-gates.js (which also wipes
//     the mod's two netherite_upgrade smithing routes, so the gate can't be bypassed with a vanilla
//     smithing template).
//
// LOAD-SAFE / UNVERIFIED: ingredient families verified against tools/mod-data (create_jetpack-forge-5.1.2);
// the stock GRID layout isn't in the dump (namespace wasn't dumped), so the pattern below is authored, not
// preserved. Parses + static-checks; NOT playtest-verified.

ServerEvents.recipes(event => {
  // ── create_sa jetpacks — disabled (#87: create_jetpack canonical). Engines/exoskeletons untouched. ──
  event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
  event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
  event.remove({ output: 'create_sa:netherite_jetpack_chestplate' })

  // ── create_jetpack:jetpack — early T3, through Create. Every stock component family kept (brass
  //    plates, elytra, chute, copper backtank, shaft, precision mechanism) + the capacitor seam. ──
  event.remove({ output: 'create_jetpack:jetpack' })
  event.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
    'PLP',
    'HTH',
    'SZM'
  ], {
    P: '#c:plates/brass',
    L: 'minecraft:elytra',
    H: 'create:chute',
    T: 'create:copper_backtank',
    S: 'create:shaft',
    Z: 'createaddition:capacitor',             // early-T3 electric part — the Additions seam
    M: 'create:precision_mechanism'
  })

  console.info('[pcmc-spine] #87 jetpacks: create_sa jetpacks disabled; create_jetpack:jetpack re-costed early-T3 (capacitor, Mechanical Crafter); netherite stays cursium-gated in 40-gates.')
})
