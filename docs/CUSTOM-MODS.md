# Custom mods — Derpack X

Derpack X ships a couple of small purpose-built mods. They are **not** developed in
this repo. Each lives in its own repository under the `derpack-org` org and is pulled
into the pack the same way every other mod is: a packwiz manifest pointing at a hosted
jar (the **mod-mirror** pattern, like `mods/ars-n-spells.pw.toml`).

This keeps the pack repo free of a JDK/Gradle toolchain and lets each mod version and
release on its own cadence.

## The mods

| Mod | Repo | What it does |
| --- | --- | --- |
| Derpack Kill Feed | [`derpack-org/derpack-killfeed`](https://github.com/derpack-org/derpack-killfeed) | Configurable on-screen kill-feed HUD. Adapted from Superb Warfare (GPL-3.0). |
| Derpack Arcana | [`derpack-org/derpack-arcana`](https://github.com/derpack-org/derpack-arcana) | Magic-weave bridge: code-layer integrations between Ars Nouveau, Iron's Spellbooks, Occultism, etc. Skeleton stage. |

Both were originally prototyped in-pack under `mods-src/` on PR branches (#196 kill-feed,
#80 arcana). That source moved to the standalone repos; those PRs are superseded and
should be closed rather than merged.

## How a custom mod reaches the pack (mod-mirror)

Each mod repo has a `build.yml` workflow that, on a `v*` tag, builds the jar and
**attaches it to a GitHub release**. That release asset is the URL the pack references.

To pull a new build into the pack:

1. In the mod repo, tag a release: `git tag v1.0.0 && git push --tags`. The workflow
   builds the jar, prints its **sha1**, and attaches it to the `v1.0.0` release.
2. Grab the sha1 from the workflow log (the "Print jar sha1" step) or compute it from
   the downloaded asset.
3. In this repo, add the packwiz manifest (see template below), then `./tools/packwiz refresh`.

### Manifest template

`mods/derpack-killfeed.pw.toml`:

```toml
name = "Derpack Kill Feed"
filename = "derpack_killfeed-1.0.0.jar"
side = "both"

[download]
url = "https://github.com/derpack-org/derpack-killfeed/releases/download/v1.0.0/derpack_killfeed-1.0.0.jar"
hash-format = "sha1"
hash = "<sha1 from the build workflow>"
```

`mods/derpack-arcana.pw.toml` follows the same shape with the arcana repo/filename.

> These manifests are **not** committed until a real jar exists for the referenced tag.
> packwiz-installer verifies the hash on download, so a placeholder hash would break the
> pack at install time — and since a merge to `main` auto-cuts a player-facing release,
> the manifest must point at a real, hashed asset before it lands here.
