// Remove the stock TaCZ default guns and the default gun smith table block — Armorer-only.
//
// TaCZ has no config flag to disable its built-in default gun pack (upstream wontfix, issue #267).
// The DefaultPackDebug + empty-override approach we tried first does NOT work: DefaultPackDebug only
// stops TaCZ OVERWRITING an existing pack, not GENERATING an absent one — so deleting the folder
// just makes TaCZ regenerate the full default pack.
//
// Reliable instead: remove the default pack's gun-smith-table recipes directly. They're recipes of
// type tacz:gun_smith_table_crafting in the `tacz` namespace (Create: Armorer's are in the
// `create_armorer` namespace), so the id filter keeps Armorer while killing every stock-gun craft.
// Ships via kubejs/ (which we know is delivered), independent of pack-folder / instance state.
//
// Caveat: the stock gun ITEMS still exist in the creative tab — this removes their CRAFTING
// (the "default gun recipes still work" problem). Fully hiding them needs a working pack-disable,
// which TaCZ doesn't cleanly support.

// We also disable the DEFAULT gun smith table crafting block so survival players are
// funnelled onto the Create: Armorer table. TaCZ ships several workbench skins as distinct
// items; the stock one is `tacz:workbench`. Our Armorer table is a different item,
// `tacz:workbench_b` (BlockId create_armorer:create_workbench), crafted by the Create-gated
// `derpack:create_workbench` recipe in kubejs/data/derpack/recipe/ — so removing the stock
// block's craft by OUTPUT leaves ours untouched. Scope by `id: /^tacz:/` as well so we only
// ever touch TaCZ's own recipe, never our derpack one (which outputs the same family but a
// different item id).
//
// Caveat (same as the guns): this removes the CRAFTING only — the stock block item still
// exists in the creative tab; TaCZ has no clean way to unregister it.
ServerEvents.recipes(event => {
  event.remove({ type: 'tacz:gun_smith_table_crafting', id: /^tacz:/ })
  event.remove({ id: /^tacz:/, output: 'tacz:workbench' })
})
