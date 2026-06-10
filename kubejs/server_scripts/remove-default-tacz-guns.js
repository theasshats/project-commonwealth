// Disable the TaCZ gun smith table as a crafting path. Guns, ammo, and attachments are
// Create-gated and crafted through the Create recipes (kubejs/data/createimmersivetacz/...),
// not assembled at the bench.
//
// tacz:gun_smith_table_crafting is a real (custom) recipe type registered in the vanilla
// RecipeManager, so KubeJS CAN remove these — the same call already removes TaCZ's stock
// default guns (the `tacz` namespace). Here we remove the whole type, which additionally
// clears the Create: Armorer guns/ammo/attachments (the `create_armorer`
// namespace) from the bench. The Create recipes are a DIFFERENT type
// (create:mechanical_crafting / mixing / filling / cutting / ...), so they are untouched —
// every item is still craftable, only the path moves to Create.
ServerEvents.recipes(event => {
  event.remove({ type: 'tacz:gun_smith_table_crafting' })
  // With every tab empty the table blocks are dead ends — remove their crafts too, so players
  // can't build a bench that crafts nothing. This pack ships four TaCZ table variants (block ids
  // confirmed in-game), all driven by the same gun_smith_table_crafting recipes cleared above:
  //   tacz:gun_smith_table — gun crafting table (stock)
  //   tacz:workbench_a      — attachment table
  //   tacz:workbench_b      — Create: Armorer table (create-themed; all 12 tabs)
  //   tacz:workbench_c      — ammo table
  const taczTables = ['tacz:gun_smith_table', 'tacz:workbench_a', 'tacz:workbench_b', 'tacz:workbench_c']
  taczTables.forEach(id => event.remove({ output: id }))
})
