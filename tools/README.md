# Derpack Editor

A local web app for managing the modpack without using the command line or GitHub Actions workflows. Edit mods through your browser, commit through GitHub Desktop, ship through PRs.

## Quick start

1. Make sure you've cloned the repo with GitHub Desktop and have the latest `main` pulled.
2. In GitHub Desktop, create a branch named after the next version (e.g. `0.3.3`) — see [Branch naming](#branch-naming) below.
3. Open the repo folder in File Explorer.
4. Double-click `tools\derpack-edit.exe`.
5. A console window appears, then your browser opens to `http://localhost:8765`.
6. Edit mods. When done, switch to GitHub Desktop, commit, push, open a PR.

## What it does

- **List every mod** in the pack with version, source, side, pinned status
- **Add a mod** by slug (Modrinth or CurseForge)
- **Wishlist (batch add)** — paste a list of slugs, the editor adds them all in sequence
- **Remove a mod** with a confirmation
- **Pin / unpin** to skip auto-updates
- **Change a mod's side** with a dropdown (both / client / server)
- **Set a specific version** — pick from Modrinth's version list, or paste any URL
- **Update one mod or all mods** — bulk update skips pinned mods automatically
- **Recompute hash** after manual edits
- **Build & Launch in Prism** — fully build the pack onto your local machine for testing

## What it doesn't do

- **Doesn't handle git.** Use GitHub Desktop for clone, branch, commit, push, and PRs. This tool only edits files in your working directory — git records those changes, and GitHub Desktop helps you push them.
- **Doesn't cut releases.** Releases happen via the existing build workflow when you publish a release on GitHub.
- **Doesn't replace the GitHub Actions workflows.** They still work as a fallback — see [the editing guide](../docs/EDITING.md#fallbacks).

## Branch naming

Branches are named after the **next version** they'll become. If `main` is at `0.3.2`:

- Patch-level work goes on `0.3.3`
- Bigger work (mod additions, breaking changes) goes on `0.4.0`

When your PR merges, the branch's name matches the release tag you'll cut. Whoever's reviewing knows immediately what's coming.

## Build & Launch in Prism

When you click the green ▶ Build & Launch in Prism button:

1. The editor builds the modpack locally — fetches every mod jar, copies configs, assembles a Prism instance scaffold
2. Copies the result into the Prism Launcher instance you've configured under Settings (⚙)
3. Tells you to open Prism and click Play

**Requirements:**

- Java 21 must be on your system PATH. If you have Prism installed and have launched a modpack at least once, you might already have a Java install at `C:\Program Files\Eclipse Adoptium\jdk-21...\bin`. Add that to your PATH if needed.
- A configured Prism instance — open Settings (⚙) and either pick from auto-detected instances or paste a path.

**What gets synced into the Prism instance:**

- `mods/` — replaced entirely from the build
- `config/`, `defaultconfigs/`, `kubejs/`, `resourcepacks/`, `shaderpacks/` — replaced from the repo

**What doesn't get touched:**

- Worlds and saves (everything under `.minecraft/saves/`)
- Anything outside the dirs listed above (screenshots, options.txt, journeymap data)

This is intentionally aggressive — the goal is "test exactly what'll ship." If you have a custom config you want to keep across rebuilds, drop it in the repo's `defaultconfigs/`.

## Wishlist (batch add)

For when you have a list of mods to add at once — copying from a Modrinth collection, a Discord message, or another modpack's mod list.

Click **📋 Wishlist (batch add)**. Paste lines like:

```
mr:supplementaries
mr:create-deco
cf:create-diesel-generators
clumps
# this is a comment, ignored
```

Format rules:
- `mr:slug` — explicitly Modrinth
- `cf:slug` — explicitly CurseForge
- `slug` (no prefix) — defaults to Modrinth
- Lines starting with `#` are comments
- Empty lines are skipped

Click **Process all**. Each line tries to add; you'll see ✓ or ✗ for each in the results panel. Failed lines stay in the textarea so you can fix typos and retry. Successful ones disappear.

The wishlist always sets new mods to `side = "both"`, even if Modrinth's metadata says client-only or server-only. (Modrinth's metadata is unreliable for many Create addons.) If a mod really should be client-only, fix its side from the table afterward.

## Local config

The editor stores your Prism instance path in `.editor/config.json`. That file is gitignored — your friend won't see your path, you won't see theirs. Each user has their own.

The editor also caches its packwiz binary and downloaded build files under `.editor/` — also gitignored.

## Running it

The .exe is committed to the repo at `tools/derpack-edit.exe`. You don't need to build anything yourself; CI rebuilds it whenever the source under `tools/editor-src/` changes.

To update the editor itself (rare): edit files under `tools/editor-src/`, commit, push to main. The build-editor workflow rebuilds and commits a new `tools/derpack-edit.exe`.

## Troubleshooting

**"could not find pack.toml"**
You launched the editor from outside the repo. Move the `.exe` into the repo's `tools/` folder, or open a terminal in the repo and run it from there.

**"could not bind to any port"**
Something else is using ports 8765-8774. Close other apps and try again, or restart your machine.

**Browser doesn't open automatically**
The console window will print the URL — copy it into your browser manually.

**Build fails with "java not found"**
Install Java 21 (Adoptium Temurin is the easy choice: https://adoptium.net/) or add Prism's bundled Java to your PATH.

**Build & Launch hangs**
First build downloads ~500MB of mod jars and can take 5+ minutes. Watch the console window for progress messages. If it's truly hung (no output for 10+ minutes), close the console (X) to kill it, then re-launch.

**Mod added with wrong side**
This is a Modrinth metadata problem, not the editor. Use the side dropdown on the mod's row to fix.

**My changes aren't showing up in the table**
Click the ↻ Refresh button. The editor reads from disk fresh, but the UI caches the list between operations.
