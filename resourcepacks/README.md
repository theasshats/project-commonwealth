# `resourcepacks/` — Bundled resource packs

Drop `.zip` resource packs in this folder. They'll be available in the user's resource pack list when they install the pack (but not auto-enabled — they choose to turn them on).

## How to add one

1. From your version-named branch (e.g. `0.3.3`), drop the `.zip` file here, e.g. `resourcepacks/cute-create-textures.zip`.
2. Run any editor operation to trigger an index refresh.
3. Commit both the zip and any new `.pw.toml` packwiz creates.
4. Push and open a PR.

If you want a resource pack to be **auto-enabled by default**, you'd also need to drop a `defaultconfigs/options.txt` with `resourcePacks:["fileX","fileY"]` set, or use a server-side config — that's beyond the basics. Ask if you need it.

## Don't put here

- Mods. Those go through the editor's **+ Add mod** button.
- Shaders. Those go in [`../shaderpacks/`](../shaderpacks/).
