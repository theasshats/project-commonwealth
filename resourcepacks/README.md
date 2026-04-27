# `resourcepacks/` — Bundled resource packs

Drop `.zip` resource packs in this folder. They'll be available in the user's resource pack list when they install the pack (but not auto-enabled — they choose to turn them on).

## How to add one

1. Drop the `.zip` file here, e.g. `resourcepacks/cute-create-textures.zip`.
2. From the repo root, run `packwiz refresh` so the index includes it.
3. Commit both the zip and any new `.pw.toml` packwiz creates.

If you want a resource pack to be **auto-enabled by default**, you'd also need to drop a `defaultconfigs/options.txt` with `resourcePacks:["fileX","fileY"]` set, or use a server-side config — that's beyond the basics. Ask if you need it.

## Don't put here

- Mods. Those go through `packwiz mr add` or `packwiz cf add`.
- Shaders. Those go in [`../shaderpacks/`](../shaderpacks/).
