// Disable the TaCZ gun smith table as a crafting path. Guns, ammo, and attachments are
// Create-gated and crafted through the Create recipes (kubejs/data/createimmersivetacz/...),
// not assembled at the bench.
//
// tacz:gun_smith_table_crafting is a real (custom) recipe type registered in the vanilla
// RecipeManager, so KubeJS CAN remove these — the same call already removes TaCZ's stock
// default guns (the `tacz` namespace). Here we remove the whole type, which additionally
// clears the Create: Armorer guns/ammo/attachments (the `create_armorer` / `derpack_armorer`
// namespaces) from the bench. The Create recipes are a DIFFERENT type
// (create:mechanical_crafting / mixing / filling / cutting / ...), so they are untouched —
// every item is still craftable, only the path moves to Create.
ServerEvents.recipes(event => {
  event.remove({ type: 'tacz:gun_smith_table_crafting' })
  // With every tab empty the table block is a dead end — remove its (vanilla) craft too.
  event.remove({ id: /^tacz:/, output: 'tacz:workbench' })
})
