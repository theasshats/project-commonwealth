# Project Commonwealth

*Magna Communitas*

A Create-focused Minecraft modpack for 1.21.1 / NeoForge, built around [Create Aeronautics](https://modrinth.com/mod/create-aeronautics).

It's a **cooperative PvPvE** pack for a small crew (~10), **scarcity-driven**: ores are scarce and regional, so nobody can do everything alone — you specialize and trade. The design is one interlocking loop — **scarcity → pressure → production → economy** (inspired by the game *Eco*), where every mod earns its place by feeding a system (Create / magic — production · survival — pressure · economy — distribution & trade, incl. logistics/aeronautics) or it's cut.

**Design & docs:** [`docs/SYSTEMS.md`](docs/SYSTEMS.md) (the structural model) · [`docs/DESIGN.md`](docs/DESIGN.md) (the why) · [`docs/ROADMAP.md`](docs/ROADMAP.md) (the plan + release cadence) · full index in [`docs/README.md`](docs/README.md).

---

## For players

**Everything players need is on the website — [www.project-commonwealth.com](https://www.project-commonwealth.com).** The download, live server status, how to join, the rules, and the FAQ all live there; you shouldn't need to touch this repo at all. Reporting a problem will go through the site too (no GitHub account needed — see #77). The steps below are the same ones the site walks you through, kept here as the canonical reference.

**Community:** join the Discord — [discord.gg/AxfjYbQ86K](https://discord.gg/AxfjYbQ86K).

Grab the installer from the site's download button (it always resolves to the latest [release](../../releases)):

| File | What it is | When to use |
|------|-----------|-------------|
| `project-commonwealth-prism-installer-X.Y.Z.zip` | Prism instance that downloads mods on first launch | Drop into Prism, launch, mods auto-fetch. |

**Steps:** download → open Prism Launcher → Add Instance → Import from zip → pick the file → launch.

The first launch fetches all mod jars from Modrinth/CurseForge. Subsequent launches are instant.

Memory and Java args are pre-configured. Java 21 is required (Prism will offer to download it if missing).

See [`docs/PRISM-SETUP.md`](docs/PRISM-SETUP.md) for the full walkthrough.

> **Why no bundled-jars option?** Most mod licenses don't permit re-hosting jars. The installer variant pulls jars from Modrinth/CurseForge on first launch instead — same end result, no licensing weirdness, smaller download.

---

## For collaborators: how it works

This repo doesn't store mod jars — it stores manifests describing *what mods are in the pack* (with URLs and hashes). When a release is cut, GitHub Actions builds a small Prism installer zip from those manifests; the launcher fetches actual jars at install time.

There are two ways to make changes, in order of how often they're used:

1. **Project Commonwealth Editor** (recommended) — local desktop app, GUI, runs from the repo.
2. **packwiz CLI directly** — fallback for things the editor doesn't cover yet, or when you can't run it.

(The pack used to also expose browser-button GitHub Actions for add/remove/update/hash; those were retired once the editor covered them — see [issue #127](https://github.com/theasshats/project-commonwealth/issues/127).)

The workflow we follow: each contributor works on a **version-named branch**, edits via the editor, opens a **pull request to main**. Every PR runs automated merge-gating checks (packwiz index freshness, manifest lint, KubeJS/config parse, Go build & vet) — see [`docs/CI-CHECKS.md`](docs/CI-CHECKS.md). Releases are cut from main.

### Branch naming

Branches are named after the **next version** they're working toward. Concretely:

- If `main` is at `0.4.6`, work targeting the next patch goes on branch `0.4.7`.
- If your branch will introduce something bigger (mod additions, breaking changes, big config rewrites), name it after the next minor: `0.5.0`.
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
2. Create a new branch (or check out your existing branch). Name it after the next version (e.g. `0.4.7`, `0.5.0`).
3. Open the repo folder in File Explorer. Double-click `tools\pcmc-edit.exe`.
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
│   ├── pcmc-edit.exe   # The editor binary (auto-built by CI)
│   └── editor-src/        # Editor source — Go + HTML/CSS/JS
├── docs/                  # Human-facing documentation (see docs/README.md for the index)
├── scripts/               # Build helpers (CI runs these; you almost never run them directly)
└── .github/workflows/     # CI: PR merge-gating checks, index sync, release build, editor build, ground-truth digest
```

Each folder has its own `README.md` with details.

---

## Cutting a release

From the `main` branch:

1. Bump `version` in `pack.toml` (e.g. `0.4.6` → `0.4.7`)
2. Commit and push to `main`
3. On GitHub: Releases → Draft a new release → tag `v0.4.7` → Publish
4. Wait for the build, then check the release page for the attached Prism installer zip

The build runs fresh each time — no caching, ~30s — then attaches the Prism installer zip to the release.

---

## Fallbacks

If the editor doesn't work for you (no Windows machine, can't install Java, whatever), every operation can be done with `packwiz` directly from the repo root — `packwiz mr add <slug>` / `packwiz cf add <slug>`, `packwiz update <slug>` (or `--all`), `packwiz pin`/`unpin`, `packwiz refresh`. See [`docs/EDITING.md`](docs/EDITING.md#fallbacks) and [`mods/README.md`](mods/README.md).

(The browser-button GitHub Actions that used to sit here — Add mod(s) / Remove mod / Update mods / Compute hash — were retired; the editor replaced them, [#127](https://github.com/theasshats/project-commonwealth/issues/127).)

---

## Player website

The player-facing site lives in its **own repo** now —
[`theasshats/pcmc-site`](https://github.com/theasshats/pcmc-site)
(split out of this repo's former `site/` directory). It's served at
**[`www.project-commonwealth.com`](https://www.project-commonwealth.com)**: how to join, what's in
the pack, rules, FAQ, a live server-status badge, and a download button that
auto-resolves to the latest release's Prism installer (so it never points at a
dead/stale asset). A player bug/issue report form is planned (#77) so problems
can be filed without a GitHub account — keeping the site the single player touchpoint.

It's a self-contained Go binary that embeds the static site and exposes
`/api/status` (Minecraft Server List Ping) and `/api/release` (GitHub Releases
lookup — which still reads **this** repo's releases). It runs **on the ishimura
box** behind the Cloudflare Tunnel + Caddy stack and is **deployed by hand, not
by this repo's CI**. Build, run, and deploy details are in that repo's README.

---

## Known issues

- **Iris/Oculus shaders glitch on Aeronautics ships.** Disable shaders if airships look broken. The mod team is aware.
- **Some non-Aeronautics mods misbehave on physics ships.** That's why `aeronauticscompat` is in the pack — it patches Etched, Cobblemon, sentry turrets, sleeping, chains, and others.

## License

Pack configuration and scripts: see [LICENSE](LICENSE) (MIT). Bundled mods retain their original licenses; this repo does not redistribute mod jars — the build pipeline only ships manifests, and launchers fetch jars from each mod's authoritative source at install time.
