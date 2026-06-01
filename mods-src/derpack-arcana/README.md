# Derpack Arcana

Internal helper mod for **Derpack X** — weaves the magic mods together at the **code layer**
(energy / attribute / behaviour bridges) that the KubeJS recipe web can't express.
Design & roadmap: [`docs/ARCANA-BRIDGE-MOD.md`](../../docs/ARCANA-BRIDGE-MOD.md).

> **Status: skeleton.** It loads, registers config, and logs which integrations are present. Feature
> phases (P1 Source↔mana Attunement Font, P2 spell-power crossover, P3 Born-in-Chaos ritual fuel) land
> incrementally — each behind a `ModList.isLoaded(...)` guard and a config toggle, so it never hard-deps
> a target mod.

## Stack
- NeoForge **21.1.228**, Minecraft **1.21.1**, Java **21** (matches `pack.toml` `[versions]`).
- [ModDevGradle](https://github.com/neoforged/ModDevGradle) (`net.neoforged.moddev`).

## Build
CI builds it on every change (`.github/workflows/build-arcana.yml`). Locally:
```bash
cd mods-src/derpack-arcana
gradle build          # jar -> build/libs/derpackarcana-1.21.1-<version>.jar
gradle runClient      # dev test (add the target mods to runClientMods to exercise integrations)
```
No committed Gradle wrapper — CI uses `gradle/actions/setup-gradle`; locally use a system Gradle 8.x.

## Distribution
Per `docs/ARCANA-BRIDGE-MOD.md`: the built jar is hosted on the **mod-mirror** GitHub release and wired
into the pack via `mods/derpack-arcana.pw.toml` (a packwiz metafile). May move to its own repo later —
the subtree is self-contained.

## Layout
- `src/main/java/com/derpack/arcana/DerpackArcana.java` — `@Mod` entrypoint + integration logging.
- `src/main/java/com/derpack/arcana/Config.java` — one toggle per weave feature.
- `src/main/resources/META-INF/neoforge.mods.toml` — metadata + **optional** deps on ars_nouveau,
  irons_spellbooks, occultism, born_in_chaos_v1, galosphere.
