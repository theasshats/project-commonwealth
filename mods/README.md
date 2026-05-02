# mods/

Each `.pw.toml` file is a packwiz manifest for one mod. **Don't edit them by hand for normal stuff** — use the workflows (Add mod, Remove mod, Update mods). The workflows compute hashes and update the index correctly.

But sometimes the workflows aren't enough — you need a beta version, an older version, or a specific platform. That's when you edit these files directly.

## What a manifest looks like

```toml
name = "Some Mod"
filename = "somemod-1.21.1-1.2.3.jar"
side = "both"

[download]
url = "https://cdn.modrinth.com/data/PROJECTID/versions/VERSIONID/somemod-1.21.1-1.2.3.jar"
hash-format = "sha512"
hash = "abc123..."

[update]
[update.modrinth]
mod-id = "PROJECTID"
version = "VERSIONID"
```

CurseForge mods use `[update.curseforge]` with `project-id` and `file-id` (numeric) instead.

## Common edits

### Pin a mod so Update mods won't change it

Add `pin = true` under the `[update]` line:

```toml
[update]
pin = true
[update.modrinth]
mod-id = "PROJECTID"
version = "VERSIONID"
```

Use this when you've manually picked a specific version (older, beta, etc.) and don't want the next Update mods run to overwrite it.

### Downgrade to an older Modrinth version

1. Go to the Modrinth page → Versions tab → click the version you want
2. Right-click the download button → Copy link. URL is `https://cdn.modrinth.com/data/PROJECTID/versions/VERSIONID/filename.jar`
3. In the manifest, change four things:
   - `filename` (the jar name from the URL)
   - `url` (the full URL)
   - `version` under `[update.modrinth]` (the VERSIONID)
   - `hash` — set to `""` (empty), then run **Update mods** workflow with this mod's slug, packwiz refreshes the hash for you
4. Add `pin = true` under `[update]` so it stays put

### Switch a mod from Modrinth to CurseForge (or vice versa)

Don't try to edit the manifest in place — the `[update.modrinth]` and `[update.curseforge]` sections have different fields. Easier:

1. **Remove mod** workflow with the current slug
2. **Add mod** workflow specifying the other source

For betas only on CF, after Add mod runs, edit the manifest to pin to the beta's file-id.

### Pin a CurseForge beta or specific file

CF manifests look like:

```toml
[update.curseforge]
file-id = 5247113
project-id = 392898
```

To switch to a specific (e.g. beta) file:

1. CF page → Files tab → All Files → click the file you want
2. URL ends in `/files/<NUMBER>` — that number is the file-id
3. Edit `file-id` in the manifest
4. Set `hash = ""` and run **Update mods** for the slug
5. Add `pin = true` under `[update]`

### Change client-only / server-only / both

The `side` field controls which artifacts the mod gets bundled into:

- `side = "both"` — bundled into client AND server packs
- `side = "client"` — only in client artifacts (Prism, mrpack)
- `side = "server"` — only in server artifact

Most mods are `both`. Stuff like Xaero's Minimap, IPN, EMI/JEI should be `client`. Server-side performance mods or admin tools would be `server`.

Just change the field and commit. Build workflow respects this on the next run.

## After editing a manifest

Always run the **Update mods** workflow afterward (with no slug, or with the specific slug). This:

1. Downloads the file
2. Computes the new hash if you blanked it
3. Updates `index.toml` to match
4. Commits the result

If you skip this step, builds will fail with hash mismatch errors.

## Don't edit

- `index.toml` in the repo root — it's auto-managed
- The hash field, unless you computed it yourself or set it to `""` to be regenerated
- Filenames that don't match what the URL actually serves

## Reference

Full packwiz manifest format docs: https://packwiz.infra.link/reference/pack-format/
