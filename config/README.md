# `config/` — Mod configs that always get applied

Files in this folder are **always copied to the user's instance** on install and on every update. Use this when you want to enforce a specific config for everyone (balance tweaks, KubeJS triggers, gameplay-affecting settings).

If you want a config that the user can override and keep across updates, use [`../defaultconfigs/`](../defaultconfigs/) instead.

## How to add a config here

1. From your version-named branch (e.g. `0.3.3`), launch the pack via the editor's **▶ Build & Launch in Prism** button to generate the mod's default config.
2. In your Prism instance's `.minecraft/config/`, find the file the mod created.
3. Edit it in-game or in a text editor until it's how you want it.
4. Copy that file into this `config/` folder, preserving the filename.
5. Open the editor and run any operation (or just refresh) — the next operation triggers an index refresh that picks up the new file.
6. Commit and push, then open a PR.

If you skip step 5, the build workflow will still pick up the file because it runs its own refresh — but the editor's mod list won't reflect it until you trigger an editor operation.

## What goes here vs. `defaultconfigs/`

| Type of setting | Goes in |
|---|---|
| Create rotation speed multipliers | `config/` (gameplay) |
| Mob spawn rates | `config/` (gameplay) |
| KubeJS trigger configs | `config/` (gameplay) |
| Server-side mod settings | `config/` |
| Minimap zoom level | `defaultconfigs/` (preference) |
| JEI search filter style | `defaultconfigs/` (preference) |
| Keybindings | `defaultconfigs/` (preference) |

Rule of thumb: **`config/` for things that affect gameplay or balance**, **`defaultconfigs/` for things that are personal preference**. When in doubt, use `defaultconfigs/`. It's friendlier to users.
