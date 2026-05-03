# Derpack X

A Create-focused Minecraft modpack for 1.21.1 / NeoForge, built around [Create Aeronautics](https://modrinth.com/mod/create-aeronautics).

---

## For players: how to install

Pick **one** of the downloads on the latest [release](../../releases) page:

| File | What it is | When to use |
|------|-----------|-------------|
| `derpack-x-prism-installer-X.Y.Z.zip` | Prism instance that downloads mods on first launch | **Recommended.** Drop into Prism, launch, mods auto-fetch. |
| `derpack-x-X.Y.Z.mrpack` | Modrinth-format pack file | If you use the Modrinth app, or want to import via Prism's Modrinth importer. |

**Steps:** download → open Prism Launcher → Add Instance → Import from zip → pick the file → launch.

The first launch fetches all mod jars from Modrinth/CurseForge. Subsequent launches are instant.

Memory and Java args are pre-configured. Java 21 is required (Prism will offer to download it if missing).

See [`docs/PRISM-SETUP.md`](docs/PRISM-SETUP.md) for the full walkthrough.

> **Why no bundled-jars option?** Most mod licenses don't permit re-hosting jars. The installer variant pulls jars from Modrinth/CurseForge on first launch instead — same end result, no licensing weirdness, smaller download.

---

## For collaborators: how it works

This repo doesn't store mod jars — it stores manifests describing *what mods are in the pack* (with URLs and hashes). When a release is cut, GitHub Actions builds a small installer zip and a .mrpack from those manifests; the launcher fetches actual jars at install time.

There are three ways to make changes, in order of how often they're used:

1. **Derpack Editor** (recommended) — local desktop app, GUI, runs from the repo.
2. **GitHub Actions workflows** — click buttons in the Actions tab, no install needed. Fallback for when you can't run the editor.
3. **packwiz CLI directly** — power-user fallback for things the editor doesn't cover yet.

The workflow we follow: each contributor works on a **version-named branch**, edits via the editor, opens a **pull request to main**. Releases are cut from main.

### Branch naming

Branches are named after the **next version** they're working toward. Concretely:

- If `main` is at `0.3.2`, work targeting the next patch goes on branch `0.3.3`.
- If your branch will introduce something bigger (mod additions, breaking changes, big config rewrites), name it after the next minor: `0.4.0`.
- Multiple people working in parallel? Branch off whichever target version they're aiming at; merge in version order.

This keeps the branch name and the release tag in lockstep, and makes "what's coming up next" answerable at a glance.

---

## Setup (one-time)

To collaborate, install:

1. **[GitHub Desktop](https://desktop.github.com/)** — handles clone, branch, commit, push, and PRs without ever using a terminal.
2. **[Java 21](https://adoptium.net/)** — needed for the editor's "Build & Launch in Prism" feature, which fetches mod jars locally for testing.
3. (Optional) **[Prism Launcher](https://prismlauncher.org/)** — if you want to test the pack as you edit it.

Then in GitHub Desktop: **File → Clone repository →** pick this repo. You're set.

---

## Daily workflow

1. Open GitHub Desktop, **Fetch origin** + **Pull**.
2. Create a new branch (or check out your existing branch). Name it after the next version (e.g. `0.3.3`, `0.4.0`).
3. Open the repo folder in File Explorer. Double-click `tools\derpack-edit.exe`.
4. A console window appears, your browser opens to `http://localhost:8765`.
5. Make changes — add mods, set versions, pin, etc. The status pane logs every operation.
6. (Optional) Click **Build & Launch in Prism** to test in-game before committing.
7. Back in GitHub Desktop: review changed files, write a commit message, **Commit to <branch>**, **Push origin**.
8. On GitHub: open a Pull Request from your branch into `main`.
9. After review and merge, the changes are live on `main` and can be released.

The editor only edits files in your working tree. GitHub Desktop handles all the git mechanics.

See [`docs/EDITING.md`](docs/EDITING.md) for the in-depth walkthrough including fallbacks.

---

## Editor — what it does

| Action | UI |
|---|---|
| Add a single mod | **+ Add mod** button → modal with source/slug/side |
| Add many mods at once | **📋 Wishlist (batch add)** button → paste a list, hit Process |
| Remove a mod | **Remove** button on the mod's row |
| Pin / unpin a mod (skip auto-update) | **Pin** / **Unpin** button on the mod's row |
| Change a mod's side | Side dropdown on the mod's row (both / client / server) |
| Set a specific version | **Set version** button on the row → pick from Modrinth or paste URL |
| Update one mod | **Update** button on the row |
| Update everything | **Update all (skip pinned)** button in the action bar |
| Recompute hash after manual edit | **⟳ Hash** button on the row |
| Test pack locally before commit | **▶ Build & Launch in Prism** button |
| Configure Prism instance path | **⚙ Settings** button |

See [`tools/README.md`](tools/README.md) for the user-facing editor docs and troubleshooting.

---

## Where things live

```
.
├── pack.toml              # Pack name, version, Minecraft + loader version
├── mods/                  # One small text file per mod (use the editor; only edit by hand for advanced cases)
├── config/                # Mod configs ALWAYS applied to the user's instance
├── defaultconfigs/        # Mod configs only seeded on FRESH install (user can override)
├── kubejs/                # KubeJS scripts for recipe tweaks etc.
├── resourcepacks/         # Bundled resource packs (.zip files)
├── shaderpacks/           # Bundled shaderpacks (.zip files)
├── tools/
│   ├── derpack-edit.exe   # The editor binary (auto-built by CI)
│   └── editor-src/        # Editor source — Go + HTML/CSS/JS
├── docs/                  # Human-facing documentation
├── scripts/               # Build helpers (CI runs these; you almost never run them directly)
└── .github/workflows/     # CI: build modpack, build editor, fallback edit workflows
```

Each folder has its own `README.md` with details.

---

## Cutting a release

From the `main` branch:

1. Bump `version` in `pack.toml` (e.g. `0.3.2` → `0.3.3`)
2. Commit and push to `main`
3. On GitHub: Releases → Draft a new release → tag `v0.3.3` → Publish
4. Wait for the build, then check the release page for the attached zip and mrpack

The build is content-cached: if nothing material changed since the last build, the cached artifacts get attached to the release in seconds. Otherwise it rebuilds from scratch.

---

## Fallbacks

If the editor doesn't work for you (no Windows machine, can't install Java, whatever), every operation can also be done through GitHub Actions workflows:

- **Add mod(s)** → Actions tab → "Add mod(s)" → Run
- **Remove a mod** → Actions tab → "Remove mod" → Run
- **Update mods** → Actions tab → "Update mods" → Run (blank slug = update all)
- **Compute hash** → Actions tab → "Compute hash" → Run (for manually-edited manifests)

For deepest fallbacks (the rare CLI-only situation), see [`docs/EDITING.md`](docs/EDITING.md) and [`mods/README.md`](mods/README.md).

---

## Known issues

- **Iris/Oculus shaders glitch on Aeronautics ships.** Disable shaders if airships look broken. The mod team is aware.
- **Some non-Aeronautics mods misbehave on physics ships.** That's why `aeronauticscompat` is in the pack — it patches Etched, Cobblemon, sentry turrets, sleeping, chains, and others.

## License

Pack configuration and scripts: see [LICENSE](LICENSE) (MIT). Bundled mods retain their original licenses; this repo does not redistribute mod jars — the build pipeline only ships manifests, and launchers fetch jars from each mod's authoritative source at install time.
