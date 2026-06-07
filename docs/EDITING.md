# Editing Derpack X

How to add mods, change configs, and ship updates. Most of this happens through the Derpack Editor — a local desktop app that runs from the repo. When the editor isn't an option, the packwiz CLI is the fallback.

This doc assumes you've already done the [one-time setup in the README](../README.md#setup-one-time): GitHub Desktop installed, repo cloned, Java 21 installed.

---

## The branch-and-PR flow

Every edit goes on a branch named after the **next version**. If `main` is at `0.3.2`:

- Patch-level work (mod tweaks, config fixes, version bumps) goes on `0.3.3`
- Bigger work (mod additions, breaking changes, big config rewrites) goes on `0.4.0`

Steps in GitHub Desktop:

1. **Fetch origin** + **Pull** to make sure you're current
2. **Current Branch** dropdown → **New Branch**
3. Name it after the target version (`0.3.3`, `0.4.0`, etc.)
4. Make sure "Create branch based on `main`" is selected
5. Click **Create branch**

You're now on the new branch. Edit, commit, push, open a PR when ready.

---

## Running the editor

1. Make sure you're on your branch (GitHub Desktop confirms this in the top bar).
2. Open the repo folder in File Explorer.
3. Double-click `tools\derpack-edit.exe`.
4. A console window appears, your browser opens to `http://localhost:8765`.

The editor reads from disk on every action — no need to refresh the page after you make changes elsewhere.

When you're done editing, close the console window (X button) to stop the server.

---

## I want to ADD a mod

### Single mod

1. In the editor, click **+ Add mod**
2. Pick the source (Modrinth or CurseForge)
3. Type the slug — that's the last part of the mod's URL:
   - `modrinth.com/mod/jei` → slug `jei`
   - `curseforge.com/minecraft/mc-mods/create-aeronautics-compatability` → slug `create-aeronautics-compatability`
4. Pick a side. Default `both`. Use `client` for things like minimaps and JEI; `server` is rare.
5. Click **Add**

The status pane will log "Added <slug>" or surface an error if the mod doesn't exist on that platform / for our loader+MC version.

### Many mods at once (Wishlist)

For batch adds — e.g., copying a list from a Modrinth collection or a Discord message:

1. Click **📋 Wishlist (batch add)**
2. In the textarea, paste one slug per line. Format:
   ```
   mr:supplementaries
   cf:create-mob-spawners
   handcrafted
   # comment lines start with # and are ignored
   ```
   Lines without a `mr:` / `cf:` prefix default to Modrinth.
3. Click **Process all**
4. Per-line results appear below the textarea — green ✓ for success, red ✗ for failure
5. After processing: failed lines remain in the textarea (so you can fix typos and retry); successful lines clear

Wishlist always sets new mods to `side = "both"` even if Modrinth's metadata says otherwise. If a specific mod really is client-only (Xaero's Minimap) you can flip its side from the table afterward.

---

## I want to REMOVE a mod

In the mod list table, click the **Remove** button on the mod's row. A confirmation modal appears; click Confirm.

The `mods/<slug>.pw.toml` file is deleted and the index is refreshed. GitHub Desktop will show one deleted file in the diff.

---

## I want to UPDATE mods

### A single mod

Click **Update** on the mod's row. The editor runs `packwiz update <slug>` and bumps the URL+hash if a newer version is available. Pinned mods can't be updated this way — their button is disabled.

### Everything

Click **Update all (skip pinned)** in the action bar. This iterates every non-pinned mod and bumps each to its latest version. Takes a minute or two.

The status pane logs which mods got bumped.

---

## I want to PIN a mod

Pinning tells the auto-updater "leave this manifest alone." Useful when you've manually picked an older or beta version and don't want it auto-bumped.

Click **Pin** on the mod's row. Icon changes to a colored pin. Click **Unpin** to undo.

Pinned mods still show their **Set version** button, so you can change a pinned mod's version manually — the pin only blocks bulk updates.

---

## I want to use a SPECIFIC version of a mod

Click **Set version** on the mod's row. Modal opens with two tabs:

### From Modrinth (recommended)

The editor fetches the version list filtered to your loader/MC version. Click **Use this version** on whichever entry you want. A confirmation modal appears; confirm. The manifest is rewritten and the hash recomputed automatically.

After setting a specific version, **also click Pin** on that mod's row — otherwise the next "Update all" run will bump it back to latest.

### Paste URL

For CurseForge specifically, or for Modrinth betas not showing in the picker:

1. Switch to the **Paste URL** tab
2. Paste a direct download URL (right-click the green Download button on Modrinth/CurseForge → Copy Link)
3. Optional: type a filename if the URL doesn't end with one
4. Click **Set version from URL**

The editor downloads the file, computes the hash, and writes the manifest.

---

## I want to fix a mod that's set to the WRONG SIDE

Some Create addons end up tagged `client` because the mod author misconfigured their Modrinth project. Fix: in the table, click the side dropdown on that mod's row → pick `both`. The manifest is rewritten and the index refreshed in one shot.

---

## I want to drop in a CONFIG file

Two folders, and the difference matters:

### `config/` — always overwritten on install

Use this for configs you want to **enforce** for every user. Every time someone installs the pack (or the auto-updater runs), files here will overwrite whatever they had.

**Example:** You spent two hours tuning JEI's bookmark sorting. Drop `jei-client.ini` in `config/`. Every user gets it.

### `defaultconfigs/` — only seeded on first install

Use this for configs that you want to **suggest** but not enforce. The user gets your version on first install, and any changes they make stick around — future updates won't clobber them.

**Example:** Sensible Xaero's Minimap defaults that the user can later override. Drop `xaerominimap.txt` in `defaultconfigs/`.

### Which do I use?

**`config/` for things that affect gameplay or balance** (Create speed multipliers, mob spawn rates, KubeJS scripts), **`defaultconfigs/` for things that are personal preference** (minimap zoom, JEI search filter style).

When in doubt, use `defaultconfigs/`. It's friendlier to users.

### How to drop the file in

1. Run the pack once locally (use the editor's **▶ Build & Launch in Prism** button), configure the mod in-game.
2. Find the resulting file in your Prism instance's `.minecraft/config/`.
3. Copy it into the repo's `config/` or `defaultconfigs/` folder, preserving the filename.
4. The editor's next operation (any operation) will trigger an index refresh, so you don't have to do anything else — just commit the new file.

If you didn't run any other editor operation after dropping in the config, you can either run any small operation (e.g., toggle a side dropdown back and forth) or just commit and let the GitHub Actions build do the refresh on release.

---

## I want to add a RESOURCEPACK or SHADERPACK

Same flow as configs, but with `.zip` files:

1. Drop the `.zip` in `resourcepacks/` or `shaderpacks/`
2. The next editor operation refreshes the index
3. Commit

If you want a resource pack auto-enabled by default, you'd also need a `defaultconfigs/options.txt` listing it. Ask if you need this.

---

## I want to add a KUBEJS script

KubeJS lets you write JavaScript files to add, remove, or change recipes (and other game stuff) without making a full mod. Drop `.js` files in:

- `kubejs/server_scripts/` — for recipes, loot, server-side stuff
- `kubejs/client_scripts/` — for tooltips, JEI hide/show, item renaming
- `kubejs/startup_scripts/` — for things that run at game launch (rare)

If you're just changing recipes, put it in `server_scripts/`.

Example recipe removal:

```js
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stick' })
})
```

See [`../kubejs/README.md`](../kubejs/README.md) for more examples.

---

## I want to test the pack before pushing

Click **▶ Build & Launch in Prism** in the editor.

What happens:
1. The editor builds the pack locally (downloads jars, copies configs)
2. Copies everything into the Prism instance you've configured under **⚙ Settings**
3. Opens a confirmation that you can now launch from Prism

Open Prism, click Play on the configured instance. You're testing exactly what'll be in the next release.

If you haven't configured a Prism instance path yet, click **⚙ Settings** first and pick one. Auto-detected instances should appear if you have any under `%APPDATA%\PrismLauncher\instances\`.

---

## I want to commit and ship my changes

1. Switch to GitHub Desktop. The "Changes" panel lists every modified file.
2. Review the diff. Look for unexpected changes (e.g., editor accidentally rewrote a config file).
3. Write a commit message. Convention: short summary on first line, optional details below.
4. Click **Commit to <branch>**.
5. Click **Push origin** in the top bar.
6. Open the repo on GitHub. A banner appears suggesting you open a Pull Request from your branch into `main`.
7. Click **Compare & pull request**. Write a description of what changed. Submit.
8. Wait for review (or self-merge if you're flying solo). Once merged, your changes are on `main`.

---

## I want to publish a release

Releases are **automatic and version-first** — you don't draft them by hand. To cut `vX.Y.Z`:

1. In your PR, **bump `version` in `pack.toml`** to the new number.
2. Add the matching `## X.Y.Z` section to **`docs/PATCHNOTES.md`** — this becomes the public release notes.
3. Merge the PR into `main`.

On that merge, `release.yml` reads `version` from `pack.toml` and — if the tag `vX.Y.Z` doesn't already exist — tags the release and calls `build.yml`, which builds the Prism installer zip and attaches it to the GitHub release. About a minute; no manual tagging.

- Forgetting the `pack.toml` bump means **no release** — the version is the trigger.
- Only one artifact ships: the Prism installer zip (we no longer build a `.mrpack` — issue #73).
- If something fails, check the **Actions** tab — the failed step will be red.

---

## Fallbacks

### When the editor isn't an option

Mod operations all run through the editor. The browser-based GitHub Actions fallbacks (Add mod(s),
Remove mod, Update mods, Compute hash) were **retired** once the editor covered everything they did —
they only duplicated it and raced each other on the index (issue #127). When you can't run the
editor, drive `packwiz` directly (below); for the manifest-only operations (pin/unpin, `side`, set
version) edit `mods/<slug>.pw.toml` by hand — see [`mods/README.md`](../mods/README.md).

### packwiz CLI

For the few operations that don't have a UI yet (or for batch tasks the editor can't reasonably do), `packwiz` directly is the deepest fallback. Install [Go](https://go.dev/dl/), then:

```sh
go install github.com/packwiz/packwiz@latest
```

From the repo root, packwiz commands work normally. Common ones:

- `packwiz refresh`
- `packwiz mr add <slug>`
- `packwiz update <slug>` / `packwiz update --all`
- `packwiz pin <slug>` / `packwiz unpin <slug>`

See [packwiz docs](https://packwiz.infra.link/) for the full reference.

---

## Things you should NOT edit by hand

- `mods/*.pw.toml` — for normal operations, use the editor. For advanced cases (pinning to a specific URL, switching from Modrinth to CurseForge mid-life), see [`../mods/README.md`](../mods/README.md).
- `index.toml` — packwiz manages this. The editor and CI both refresh it as needed.

---

## Common gotchas

- **"no version found"** — the mod doesn't have a 1.21.1 NeoForge build, or you picked the wrong source (some mods are CF-only or Modrinth-only).
- **Wrong version got picked by Add mod** — packwiz auto-accepts the first match. If you wanted a different variant, use the editor's Set Version after adding.
- **"hash mismatch" on the build workflow** — usually means a manifest got hand-edited to a new URL without recomputing the hash. Use the **⟳ Hash** button in the editor to fix.
- **Config changes don't apply for existing users** — if you put it in `defaultconfigs/`, it only applies on first install. Use `config/` if you want to force-update on existing installs.
- **Mod loaded as client-only when it should be both** — Modrinth metadata is sometimes wrong for Create addons. Use the side dropdown in the editor to fix.

---

## Quick FAQ

**Q: Where do I put a jar I downloaded?**
A: You don't. We don't ship jars in the repo — only manifests with URLs. Use **+ Add mod** with a Modrinth/CurseForge slug. The build pipeline doesn't bundle jars either; users' launchers fetch them at install time.

**Q: What if a mod is *only* on some random website, not Modrinth or CurseForge?**
A: Edge case — the editor doesn't currently support arbitrary URL adds. You can use `packwiz url add <name> <url>` from a local checkout. Mention it in the issue tracker if you hit this often and we'll add a UI for it.

**Q: I broke something. How do I undo?**
A: If you haven't pushed: GitHub Desktop → History → right-click the bad commit → Revert. If you already pushed: open the bad commit on GitHub → "Revert" button → it opens a PR that undoes the change.

**Q: My branch fell behind main. How do I sync?**
A: GitHub Desktop → Branch → Update from main. Resolves any conflicts in your favorite text editor (or just accept incoming for trivial cases).
