# Editing this pack

Quick reference for adding mods, dropping in configs, tweaking behavior. Written for someone who has never touched packwiz and just wants to know "where do I put the file?"

---

## One-time setup

You need the `packwiz` tool installed locally.

**Easiest install (any OS with Go):**
```bash
go install github.com/packwiz/packwiz@latest
```

**Other options:**
- macOS: `brew install packwiz`
- Arch / Fedora COPR: `paru -S packwiz-bin`
- Windows: download `packwiz.exe` from [GitHub Actions builds](https://github.com/packwiz/packwiz/actions) and put it in your PATH

Verify it works: `packwiz --version`

Then clone this repo and `cd` into it. From here on everything is run from the repo root.

---

## I want to ADD a mod

### From Modrinth

1. Find the mod on [modrinth.com](https://modrinth.com). The slug is the URL piece, e.g. `modrinth.com/mod/jei` → slug is `jei`.
2. Run:
   ```bash
   packwiz mr add jei
   ```
3. Commit:
   ```bash
   git add mods/ index.toml
   git commit -m "Add JEI"
   git push
   ```

### From CurseForge

Same idea, different source:
```bash
packwiz cf add create-diesel-generators
```

Slug is the last part of the CurseForge URL, e.g. `curseforge.com/minecraft/mc-mods/create-diesel-generators` → `create-diesel-generators`.

### Then update the modlist

Open [`MODLIST.md`](MODLIST.md) and add a row in the right section. This isn't required to make the pack work — it's just the human-readable list.

---

## I want to REMOVE a mod

```bash
packwiz remove <slug>
```

Same slug as when you added it. Commit. Done.

---

## I want to UPDATE all mods to their latest versions

```bash
packwiz update --all
```

This goes through every mod and asks Modrinth/CurseForge "is there a newer version compatible with our Minecraft version?" If yes, it bumps the URL/hash. Review the changes with `git diff mods/`, commit if happy.

For a single mod:
```bash
packwiz update <slug>
```

---

## I want to drop in a CONFIG file

You have two folders, and the difference matters:

### `config/` — always overwritten on install

Use this for configs you want to **enforce** for every user. Every time someone installs the pack (or the auto-updater runs), files here will overwrite whatever they had.

**Example:** You spent two hours tuning JEI's bookmark sorting. Drop your `jei-client.ini` in `config/jei-client.ini`. Every user gets it.

### `defaultconfigs/` — only seeded on first install

Use this for configs that you want to **suggest** but not enforce. The user gets your version on first install, and any changes they make stick around — future updates won't clobber them.

**Example:** You set `xaerominimap.txt` defaults to a friendly zoom level, but if a user prefers something else, you don't want to keep stomping on their preference. Drop it in `defaultconfigs/`.

### Which do I use?

Rule of thumb: **`config/` for things that affect gameplay or balance** (Create speed multipliers, mob spawn rates, KubeJS scripts), **`defaultconfigs/` for things that are personal preference** (minimap zoom, JEI search filter style).

When in doubt, use `defaultconfigs/`. It's friendlier to users.

### Where do I get the config files in the first place?

Run the pack once, configure the mod in-game, then go grab the file from `.minecraft/config/<modname>.toml` (or whatever the file is). Copy it into the repo, commit.

---

## I want to add a RESOURCEPACK or SHADERPACK

Drop the `.zip` file directly in `resourcepacks/` or `shaderpacks/`, then:

```bash
packwiz refresh
```

This generates a `.pw.toml` for the file so packwiz knows about it. Commit both the zip and the `.toml`.

---

## I want to add a KUBEJS script (custom recipe, etc.)

KubeJS is a mod that lets you write JavaScript files to add/remove/change recipes. Drop your `.js` file in:

- `kubejs/server_scripts/` — for recipes, loot, server-side stuff
- `kubejs/client_scripts/` — for tooltips, textures, client-side stuff
- `kubejs/startup_scripts/` — for things that run at game startup (rare)

Example recipe removal in `kubejs/server_scripts/example.js`:

```js
ServerEvents.recipes(event => {
  // Remove the vanilla recipe for sticks
  event.remove({ output: 'minecraft:stick' })
})
```

Commit. KubeJS scripts are loaded by the user's instance the next time they launch.

---

## I changed something — how do I make sure the index is up to date?

```bash
packwiz refresh
```

This re-hashes everything in the repo. Run it after editing any config file so the hash in `index.toml` matches reality. If you forget, `packwiz refresh --build` (which CI runs) will fail and tell you what's stale.

---

## I want to publish a release

1. Bump the `version` in `pack.toml` (e.g. `0.1.0` → `0.1.1`)
2. Commit and push to `main`
3. On GitHub: Releases tab → "Draft a new release"
4. "Choose a tag" → type `v0.1.1` → "Create new tag on publish"
5. Title: `v0.1.1` (or something descriptive)
6. Description: write what changed, or just hit "Generate release notes"
7. Click **Publish release**

GitHub Actions will then:
- Download every mod jar
- Build the .mrpack, both Prism zips, and the server zip
- Attach all four to the release page

This takes ~5 minutes. If something fails, check the **Actions** tab — the failed step will be red and you can read the error log.

---

## Things you should NOT edit by hand

- `mods/*.pw.toml` — packwiz writes these. If you need to change a mod's version, use `packwiz update <slug>`.
- `index.toml` — packwiz manages this. If it's out of sync, run `packwiz refresh`.

---

## Common gotchas

- **"hash mismatch" on CI** — you edited a config file but forgot `packwiz refresh`. Run it, commit, push.
- **A mod's slug isn't found** — slugs sometimes have different forms on Modrinth vs CurseForge. Check the URL on the actual site. If it's only on one platform, use the matching command (`mr` vs `cf`).
- **"side = client" mods on the server** — fine, the server pack build automatically excludes them. But putting a server-only mod (`side = server`) in a client install will cause the client to crash. Most mods are `both`.
- **Config changes don't seem to apply for users** — if you put it in `defaultconfigs/`, it only applies on first install. If they've already installed, they keep their old version. Use `config/` if you want to force-update.

---

## Quick FAQ

**Q: Where do I put a jar I downloaded?**
A: You don't. We don't ship jars in the repo — only URLs. If you want a mod, find it on Modrinth or CurseForge and run `packwiz mr add` or `packwiz cf add`. The build pipeline downloads jars at release time.

**Q: What if a mod is *only* on a website, not Modrinth or CurseForge?**
A: `packwiz url add <name> <url>`. Rare case but supported.

**Q: I broke something. How do I undo?**
A: `git status` to see what changed, `git checkout <file>` to revert a specific file, or `git reset --hard HEAD` to nuke all uncommitted changes. Standard git stuff.

**Q: I want to test the pack without making a release.**
A: Run `./scripts/build-prism-bundled.sh` locally. It produces a zip in `dist/` you can import into Prism.
