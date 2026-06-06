# Derpack Kill Feed

A small NeoForge 1.21.1 mod that shows an on-screen kill feed in a screen corner
(default top-right): a fading line per kill, e.g. `Alex ⚔ [Diamond Sword] Zombie (melee)`.

- **Player deaths and named-creature deaths** are broadcast to everyone.
- **Any other player-made kill** (a regular mob) is shown only to the killer.
- Unnamed mob-on-mob deaths are ignored.

Configurable (client config `derpack_killfeed-client.toml`): corner, margins, line
spacing, max lines.

## License & attribution

GPL-3.0-only. This mod adapts code from
[Superb Warfare](https://github.com/Mercurows/SuperbWarfare) (also GPL-3.0) — the
kill-message queue, the entry slide/fade animation timing, and the attacker-resolution
logic — ported from Kotlin/Forge 1.20.1 to Java/NeoForge 1.21.1 and stripped of its
guns, vehicles, dog tags, custom damage types, and all art assets (only code is reused,
not assets). See `LICENSE`.

## Building

This source lives in the pack repo but is **not** pack content (it's `.packwizignore`d).
Build the jar with Gradle (NeoForge ModDevGradle):

```
cd mods-src/derpack-killfeed
gradle build      # jar lands in build/libs/derpack_killfeed-<version>.jar
```

CI builds it via `.github/workflows/build-killfeed.yml` (manual dispatch + on changes
under `mods-src/derpack-killfeed/**`) and uploads the jar as an artifact.

## Shipping in the pack

The pack distributes mods as packwiz manifests pointing at a hosted jar + hash, so to
actually ship this:

1. Publish the built jar somewhere stable (a GitHub release asset on this repo, or
   Modrinth).
2. Add a `mods/derpack-killfeed.pw.toml` with that download URL + sha256 (and
   `side = "both"`), then `./tools/packwiz refresh`.

Until then this is source-only; the feature isn't live in an installed instance.
