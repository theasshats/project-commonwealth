// Remove the stock TaCZ default guns — Armorer-only.
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

ServerEvents.recipes(event => {
  event.remove({ type: 'tacz:gun_smith_table_crafting', id: /^tacz:/ })
})
