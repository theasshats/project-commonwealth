# `kubejs/` — Custom recipes and tweaks

[KubeJS](https://kubejs.com/) lets you write JavaScript files to add, remove, or modify recipes (and other game stuff) without making a full mod. Drop `.js` files in the right subfolder and they'll be loaded by the user's instance.

## Subfolders

| Folder | What it's for | Loaded |
|--------|---------------|--------|
| `server_scripts/` | Recipes, loot tables, mob drops, server-side things | When server starts |
| `client_scripts/` | Tooltips, JEI hide/show, item renaming | When client starts |
| `startup_scripts/` | Custom items/blocks, advanced stuff | At game launch (rare) |

If you're just changing recipes, put it in `server_scripts/`.

## How to add a script

1. From your version-named branch (e.g. `0.3.3`), create the `.js` file under the appropriate subfolder.
2. The fastest way to write KubeJS is iteratively: launch the pack via the editor's **▶ Build & Launch in Prism** button, write the script, run `/reload` in-game, see what broke, repeat.
3. Once the script does what you want, run any editor operation to trigger an index refresh.
4. Commit and push, then open a PR.

## Examples

### Remove a recipe

```js
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stick' })
})
```

### Add a Create mixing recipe

```js
ServerEvents.recipes(event => {
  event.recipes.create.mixing('minecraft:diamond', [
    '4x minecraft:coal_block',
    Fluid.of('minecraft:lava', 1000)
  ])
})
```

### Hide an item from JEI

```js
// in client_scripts/
JEIEvents.hideItems(event => {
  event.hide('minecraft:dirt')
})
```

## Reference

- [KubeJS documentation](https://kubejs.com/wiki/)
- [KubeJS Discord](https://discord.gg/kubejs) — fast help if you're stuck
