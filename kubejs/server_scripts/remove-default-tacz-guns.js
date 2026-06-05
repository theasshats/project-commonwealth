// Stop the TaCZ gun smith table from being a crafting path — all guns, ammo, and
// attachments are meant to be Create-gated, crafted through the Create recipes
// (kubejs/data/createimmersivetacz/...), not assembled at the bench.
//
// IMPORTANT — why we do NOT remove the gun-smith-table recipes here:
// They are NOT Minecraft recipes. TaCZ loads them into its OWN registry from the gun
// packs in .minecraft/tacz/, so KubeJS's ServerEvents.recipes(...).remove(...) — which
// only sees the vanilla RecipeManager — matches nothing and silently no-ops. (We learned
// this the hard way: stock + Armorer guns kept crafting at the bench despite a remove()
// call here.) The table is instead emptied via TaCZ recipe FILTERS, shipped as datapack
// overrides:
//   kubejs/data/tacz/recipe_filters/default.json            (the stock TaCZ table)
//   kubejs/data/create_armorer/recipe_filters/default.json  (the Create: Armorer table)
// Both blacklist ^.*$, so every tab — guns, ammo, attachments — shows nothing.
//
// The workbench ITEM craft removed below IS a normal vanilla recipe, so KubeJS can remove
// it; with the table emptied the block would only be a dead end. (Caveat: the block item
// still exists in the creative tab — this removes its crafting only.)
ServerEvents.recipes(event => {
  event.remove({ id: /^tacz:/, output: 'tacz:workbench' })
})
