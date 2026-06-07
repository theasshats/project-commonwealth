# mods/

Each `.pw.toml` file is a packwiz manifest for one mod. **For normal operations, use the editor** — its UI handles add, remove, pin/unpin, side change, version pick, and hash recompute, all without you touching these files directly.

Hand-edit when:
- You need a beta or pre-release version that's not in Modrinth's filtered version list
- You're switching a mod between Modrinth and CurseForge sources mid-life
- You're recovering from a botched manual edit
- The editor doesn't yet support the operation you need

This doc covers those cases.

---

## What a manifest looks like

```toml
name = "Some Mod"
filename = "somemod-1.21.1-1.2.3.jar"
side = "both"
pin = true                              # optional, see below

[download]
url = "https://cdn.modrinth.com/data/PROJECTID/versions/VERSIONID/somemod-1.21.1-1.2.3.jar"
hash-format = "sha512"
hash = "abc123..."

[update]
[update.modrinth]
mod-id = "PROJECTID"
version = "VERSIONID"
```

CurseForge mods use `[update.curseforge]` with `project-id` and `file-id` (numeric) instead of `mod-id` / `version`.

---

## The pin field — read this before editing manually

`pin = true` tells packwiz "leave this manifest alone during `update --all`." This is what you want when you've manually picked a non-latest version (older, beta, specific build) and don't want it auto-bumped.

**Critical:** `pin` MUST go at the top level of the file, NOT inside `[update]`. TOML treats everything after a `[section]` header as part of that section, so this:

```toml
[update]
pin = true                # WRONG — packwiz ignores this
```

won't work. This does:

```toml
name = "Some Mod"
side = "both"
pin = true                # right — top level, before [download]
[download]
...
```

The editor's Pin button puts `pin = true` in the right place. If you're hand-editing, double-check the placement.

---

## Common manual edits

### Downgrade to an older Modrinth version

The editor's **Set version** button (Modrinth tab) covers most version downgrades. But Modrinth filters versions by loader/MC version, so older versions that pre-date NeoForge support might not show up. In that case, hand-edit:

1. Go to the Modrinth page → Versions tab → find the version you want
2. **Right-click the green Download button** → Copy Link. URL looks like `https://cdn.modrinth.com/data/PROJECTID/versions/VERSIONID/filename.jar`
3. The 8-character random string between `versions/` and the filename is the version ID
4. Edit four things in the manifest:
   - `filename` (the jar name from the URL)
   - `url` under `[download]` (the full URL)
   - `version` under `[update.modrinth]` (the VERSIONID — must match the URL)
   - `hash` — see "Computing the hash" below
5. Add `pin = true` at the top level so future `update --all` doesn't undo this
6. Commit
7. (Easier: open the editor and click **⟳ Hash** on this mod — it recomputes from your new URL)

### Switch a mod from Modrinth to CurseForge (or vice versa)

The `[update.modrinth]` and `[update.curseforge]` sections have different fields, so editing in place is brittle. Easier:

1. Editor: **Remove** button on the mod's row
2. Editor: **+ Add mod** with the other source

For betas only on CF, use the editor's **Set version** modal → **Paste URL** tab.

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
3. Paste the file's download URL into the editor's **Set version** → **Paste URL** tab
4. After it sets the version, click **Pin** on that mod's row

For doing this purely by hand without the editor:

1. Edit `file-id` in the manifest
2. Update `filename` and `url` to match the new file
3. Recompute the hash (see below)
4. Add `pin = true` at the top level

### Change client-only / server-only / both

The `side` field controls which artifacts the mod gets bundled into:

- `side = "both"` — bundled into client AND server packs
- `side = "client"` — only in client artifacts
- `side = "server"` — only in server artifact (or omitted from client)

Easiest: in the editor, click the **side dropdown** on the mod's row. Pick the value, manifest is rewritten and indexed in one shot.

By hand: change the `side =` line. Note that omitting the line entirely (or setting it to `"both"`) is equivalent — packwiz treats absence as "both."

---

## Computing the hash

When you edit a manifest by hand to point at a different file, the existing `hash` value is wrong (it was computed from the previous file). Three ways to fix this, in order of convenience:

### Option 1: Editor's ⟳ Hash button (recommended)

In the editor, click the **⟳ Hash** button on that mod's row. The editor reads the manifest's URL, downloads the file, computes SHA-512, and writes the hash back. Works for pinned mods (unlike the Update workflow).

### Option 2: packwiz CLI (fallback)

If you can't run the editor, do it locally with packwiz: re-add or update the mod so packwiz
recomputes the hash — `packwiz update <slug>` (un-pinned), or re-run `packwiz mr add <slug>` /
`packwiz cf add <slug>`. (The browser "Compute hash" Action that used to live here was retired with
the rest of the dispatch workflows — the editor replaced them, issue #127.)

### Option 3: Compute it yourself (full manual)

The hash is a SHA-512 of the actual jar contents.

PowerShell on Windows:

```powershell
$url = "<the new download URL>"
Invoke-WebRequest $url -OutFile $env:TEMP\mod.jar
(Get-FileHash -Algorithm SHA512 $env:TEMP\mod.jar).Hash.ToLower()
```

Bash on Linux/WSL:

```bash
curl -sL "<URL>" | sha512sum | awk '{print $1}'
```

Paste the resulting lowercase hex string into the `hash =` field (in quotes), commit.

### Option 4: Let packwiz compute it (un-pinned mods only, advanced)

1. Set `hash = ""` (empty string)
2. Make sure `pin = true` is NOT set
3. Commit
4. Run `packwiz update <slug>` (or the editor's Update)

packwiz will download the file, compute the hash, and write it back. Then if you want it pinned, edit the file again to add `pin = true`.

This works but takes more steps than Options 1 or 2. Mostly useful if you happen to be un-pinning anyway.

---

## After editing a manifest

If the URL changed, run **⟳ Hash** in the editor (or `packwiz update <slug>`) to refresh the hash and commit. Works for both pinned and un-pinned mods.

If you only changed `side` or other non-URL fields, just commit — no hash recomputation needed. CI's auto-refresh (and the editor after most operations) runs `packwiz refresh`, which updates the index pointer to your manifest.

---

## Don't edit

- `index.toml` in the repo root — it's auto-managed by `packwiz refresh`
- The hash field, unless you computed it yourself or set it to `""` to be regenerated
- Filenames that don't match what the URL actually serves (will 404 at install time)

---

## Reference

- packwiz manifest format: https://packwiz.infra.link/reference/pack-format/mod-toml/
- packwiz pin command: https://packwiz.infra.link/reference/commands/packwiz/pin/
- packwiz update command: https://packwiz.infra.link/reference/commands/packwiz/update/
