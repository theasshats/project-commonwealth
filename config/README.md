# `config/` — Mod configs that always get applied

Files in this folder are **always copied to the user's instance** on install and on every update. Use this when you want to enforce a specific config for everyone (e.g. balance tweaks, KubeJS triggers, gameplay-affecting settings).

If you want a config that the user can override and keep across updates, use [`../defaultconfigs/`](../defaultconfigs/) instead.

## How to add a config here

1. Run the pack once, configure the mod in-game.
2. Find the resulting file in your instance's `.minecraft/config/`.
3. Copy it here, preserving the filename.
4. From the repo root, run `packwiz refresh` so the index knows about the new file.
5. Commit and push.

## What goes here vs. `defaultconfigs/`

| Type of setting | Goes in |
|---|---|
| Create rotation speed multipliers | `config/` (gameplay) |
| Mob spawn rates | `config/` (gameplay) |
| Recipe difficulty | `config/` (gameplay) |
| KubeJS scripts | `kubejs/` (different folder, but same idea) |
| Minimap zoom level | `defaultconfigs/` (preference) |
| JEI sort order | `defaultconfigs/` (preference) |
| Keybind defaults | `defaultconfigs/` (preference) |

When in doubt, use `defaultconfigs/`. It's nicer to users.

See [`../docs/EDITING.md`](../docs/EDITING.md) for the full explanation.
