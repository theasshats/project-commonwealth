# `kubejs/` — Custom recipes and tweaks

[KubeJS](https://kubejs.com/) lets you write JavaScript files to add, remove, or modify recipes (and other game stuff) without making a full mod. Drop `.js` files in the right subfolder and they'll be loaded by the user's instance.

## Subfolders

| Folder | What it's for | Loaded |
|--------|---------------|--------|
| `server_scripts/` | Recipes, loot tables, mob drops, server-side things | When server starts |
| `client_scripts/` | Tooltips, JEI hide/show, item renaming | When client starts |
| `startup_scripts/` | Custom items/blocks, advanced stuff | At game launch (rare) |

If you're just changing recipes, put it in `server_scripts/`.

## Examples

### Remove a recipe

```js
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:torch' })
})
```

### Add a custom recipe

```js
ServerEvents.recipes(event => {
  event.shaped('minecraft:diamond', [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: 'minecraft:coal_block'
  })
})
```

### Hide an item from JEI

```js
// client_scripts/hide.js
JEIEvents.hideItems(event => {
  event.hide('minecraft:debug_stick')
})
```

## More examples

See the [KubeJS docs](https://kubejs.com/wiki/) for the full API. The wiki has good per-version docs since the syntax has shifted between MC versions.

## Don't put here

- Configs for other mods (those go in [`../config/`](../config/) or [`../defaultconfigs/`](../defaultconfigs/))
- Mod jars (those go through `packwiz add`)
