# Derpack Arcana

Internal helper mod for **Derpack X** — weaves the magic mods together at the **code layer**
(energy / attribute / behaviour bridges) that the KubeJS recipe web can't express.
Design & roadmap: [`docs/ARCANA-BRIDGE-MOD.md`](../../docs/ARCANA-BRIDGE-MOD.md).

> **Status: P1 + P2 + P3 implemented — compiles green in `build-arcana.yml`; in-game testing pending.**
> Each feature is behind a `ModList.isLoaded(...)` guard and a config toggle, so it never hard-deps a
> target mod. (P1 is **bidirectional** — right-click toggles direction; P3 is drop-on-kill rather than
> ritual fuel, since Occultism exposes no clean ritual-completion event — see #118.)
> - **P1 — Attunement Font** (block): bridges Ars Source ⇄ Iron's mana for the standing player —
>   drains nearby Source to grant mana, or (right-click to flip) spends mana to refill a nearby Source
>   jar. Crafted from the magic-web spine reagents (source_gem + arcane_essence + Galosphere shards).
> - **P2 — spell-power crossover** (automatic): each school's `SpellDamageEvent` is boosted by the
>   caster's *other*-mod spell-power, by `spellCrossoverFactor`.
> - **P3 — Soul Reaping** (occultism + born_in_chaos_v1, automatic): slaying a Born in Chaos mob has a
>   `soulReapChance` to drop Occultism `demons_dream_essence` — feeds the occult economy via combat.
>   Pure `LivingDropsEvent` + namespace check + item lookup (no compile dep on either mod).
>
> In-game verify: mana client-sync after `addMana`; that `addMana` clamps to max mana; crossover
> magnitudes; whether Ars `SpellDamageEvent` is posted on the game bus.

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

## Distribution (shipping)
The jar isn't committed to `mods/`. Like the other self-hosted mod (`mods/ars-n-spells.pw.toml`), it's
hosted on the repo's **`mod-mirror`** GitHub release and pulled via a packwiz metafile. This is a
by-hand deploy step (matches the maintainer's release flow). To ship it (with the magic-web recipes #75):

1. **Build** — push to `mods-src/**` or run `build-arcana.yml` (workflow_dispatch); download the
   `derpack-arcana-jar` artifact → `derpackarcana-1.21.1-<version>.jar`. CI prints its `sha1`.
2. **Host** — upload that jar to the **`mod-mirror`** release (the same release `ars_n_spells` uses).
3. **Wire** — create `mods/derpack-arcana.pw.toml`:
   ```toml
   name = "Derpack Arcana"
   filename = "derpackarcana-1.21.1-<version>.jar"
   side = "both"

   [download]
   url = "https://github.com/Xela112233/Derpack-X/releases/download/mod-mirror/derpackarcana-1.21.1-<version>.jar"
   hash-format = "sha1"
   hash = "<sha1 from step 1>"
   ```
4. **Index** — `./tools/packwiz refresh`, commit `index.toml` + `pack.toml` + the new metafile.

`mods-src/` stays `.packwizignore`'d (source, not pack content); only the `mods/*.pw.toml` enters the pack.
May move to its own repo later — the subtree is self-contained.

## Layout
- `src/main/java/com/derpack/arcana/DerpackArcana.java` — `@Mod` entrypoint + integration logging.
- `src/main/java/com/derpack/arcana/Config.java` — one toggle per weave feature.
- `src/main/resources/META-INF/neoforge.mods.toml` — metadata + **optional** deps on ars_nouveau,
  irons_spellbooks, occultism, born_in_chaos_v1, galosphere.
