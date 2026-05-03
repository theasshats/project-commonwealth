# `defaultconfigs/` — Mod configs seeded only on first install

Files in this folder are copied to the user's instance **only the first time** they install the pack. After that, if they tweak the config, their changes stick — future updates won't overwrite them.

Use this for sensible defaults that respect the user's right to change things (preferences, UI tweaks, personal-taste settings).

If you want a config that gets re-applied on every update no matter what, use [`../config/`](../config/) instead.

## How to add a config here

1. From your version-named branch (e.g. `0.3.3`), launch the pack via the editor's **▶ Build & Launch in Prism** button.
2. Configure the mod in-game.
3. Find the resulting file in your Prism instance's `.minecraft/config/`.
4. Copy it here, preserving the filename and any subdirectory structure.
5. Run any editor operation to trigger an index refresh.
6. Commit and push, then open a PR.

## When to use this vs. `config/`

See [`../config/README.md`](../config/README.md) for the comparison table.

Short version: gameplay-affecting → `config/`, preferences → `defaultconfigs/`.
