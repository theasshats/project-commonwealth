# Derpack Arcana — scoping doc for the magic-weave helper mod

> Working name: **Derpack Arcana** (modid `derpackarcana`). Status: **SCOPING** — not built yet.
> Companion to the recipe-level weave (`kubejs/server_scripts/recipes/33–35-magic-web-*.js`, PR #75).

## Context — why a mod at all
The KubeJS magic web (PR #75) weaves the magic mods at the **recipe/material layer**: essences and
mob drops convert between Ars Nouveau, Iron's Spellbooks, Occultism, Born in Chaos and Galosphere via
their native machines. That's everything recipes *can* do. The maintainer wants to weave **deeper than
recipes** — the parts that need code: shared energy, shared attributes, and making isolated content
(Born in Chaos) actually *function* inside the established systems. Ars 'n Spells already proves the
model (it bridges Iron's↔Ars at the casting layer); this mod fills the gaps Ars 'n Spells and recipes
don't: **Occultism, Born in Chaos, and a Source↔mana energy bridge.**

## The gap (recipes vs code)
| Want | Recipe layer (done) | Needs a mod |
|---|---|---|
| Convert essences/drops between schools | ✅ `33–35-magic-web` | — |
| Spend Ars **Source** to refill Iron's **mana** (and vice versa) | ❌ (energy is a capability, not an item) | ✅ |
| One school's gear/level buffs another's casting (shared **spell power**) | ❌ | ✅ (attributes/events) |
| Born in Chaos souls usable as Occultism **ritual fuel / sacrifice** | ❌ | ✅ (event hooks) |
| Born in Chaos weapons scale with spell power (not dead-end gear) | ❌ | ✅ (attributes) |
| Physical "attunement" hub block tying the web together | partial (Galosphere shards as reagents) | ✅ (block + behavior) |

## Design principles
- **Additive & optional.** Every feature is a soft (`optional`) dependency — if a target mod is absent,
  that feature no-ops; the mod never hard-crashes the pack. Mirrors the "additive, never break" recipe rule.
- **Config-gated.** Each bridge feature toggleable in config (so the maintainer can disable a misbehaving one).
- **No new progression currency.** Reuse existing items (Galosphere shards, the mods' essences) — don't
  invent a parallel economy (the "don't force one component into everything" steer).
- **Version-coupled, accept it.** Integrations bind to specific mod versions' APIs; treat like the #40
  community-port risk — pin versions, expect to bump on mod updates.

## Feature phases
### MVP (P1) — the Source↔mana bridge (the headline "deeper" weave)
- A block/device — working name **Attunement Font** — that consumes Ars **Source** from a nearby
  Source Jar / source pool and refills the standing player's Iron's Spellbooks **mana** (and a reverse
  mode: mana → Source). This is the canonical energy bridge that recipes can't express.
- Mechanism: read Ars source via Ars Nouveau's source API / `ISpecialSourceProvider`; write mana via
  Iron's `MagicData` capability (`SpellSelectionManager`/`MagicData.getPlayerMagicData`). Conversion
  rate config-gated.
- Crafted from the recipe-web reagents (source_gem + arcane_essence + Galosphere shard) so it sits on
  the existing spine.
- **Risk:** depends on both mods exposing stable source/mana access; verify the exact API surface in
  the jars (both already downloaded once for schema work).

### P2 — shared spell-power attributes
- Register/forward attribute links so Iron's spell-power-bearing gear contributes to Ars spell damage
  and vice versa (via NeoForge attribute events / a small attribute mapping). Optional: Born in Chaos
  weapons gain a spell-power scalar so they're not dead-end loot.
- **Risk:** attribute names differ per mod; needs in-jar verification. Lower-risk than P1.

### P3 — Occultism ↔ Born in Chaos behavioral tie
- Let Born in Chaos soul/spirit items (`ethereal_spirit`, `spiritual_dust`, soul-bearing kills) serve
  as **Occultism ritual fuel / sacrifice** via Occultism's ritual/sacrifice event hooks — making BiC's
  necromancy *function* inside the occult system, not just convert at a crafting table.
- **Risk:** Occultism ritual API is the least documented; may need mixins. Highest effort — last.

> Lightweight alternative to weigh per feature: P2-style attribute links and simple event tweaks may be
> achievable via **KubeJS events + a datapack** without a full Java mod. A Java mod is clearly warranted
> for **P1** (capability-level energy) and **P3** (ritual hooks/mixins). Recommend: **build P1 first**,
> reassess P2/P3 after it proves the toolchain.

## Tech approach
- **NeoForge 1.21.1**, Java 21, Gradle (NeoGradle/ModDevGradle). New subtree `mods-src/derpack-arcana/`
  (mirrors `tools/editor-src/` for the Go editor).
- **Soft dependencies** on `ars_nouveau`, `irons_spellbooks`, `occultism`, `born_in_chaos_v1`,
  `galosphere` — declared `optional` in `neoforge.mods.toml`; pull their APIs from CurseForge/Modrinth
  maven (or compile against the jars). Guard every integration behind `ModList.get().isLoaded(...)`.
- **Mixins** only if an API isn't exposed (likely P3). Keep them minimal and targeted.

## Build & distribution (modeled on existing precedents)
- **CI**: new `.github/workflows/build-arcana.yml` modeled on `build-editor.yml` — on push to
  `mods-src/derpack-arcana/**`, run Gradle `build`, produce the jar.
- **Hosting**: upload the jar to the **`mod-mirror` GitHub release** (the same release the gun pack /
  metafiles use — see `docs/GUN-PACKS.md`).
- **Pack wiring**: add `mods/derpack-arcana.pw.toml` (a packwiz metafile → mod-mirror URL + hash).
  Mods land in `mods/`, so the standard metafile path works (unlike the `tacz/` non-standard-path issue).
  Run `packwiz refresh`.
- **Server**: `[versions]` NeoForge already covers it; the mod is a normal `mods/` entry pulled at startup.

## Licensing / maintenance
- Our code: pick a license (MIT/LGPL). Integrations link other mods' APIs — keep our code clean-room;
  don't bundle their classes. Honor each integrated mod's license.
- Maintenance: version-coupled (see #40). Each integration is one file + a config flag, so a broken one
  can be disabled without pulling the mod.

## Open decisions (for the maintainer)
1. **Greenlight building a Java mod** (net-new Gradle/CI infra), or keep weaving to recipes/datapack for now?
2. **MVP = P1 (Source↔mana Attunement Font)?** Or a different first feature.
3. **Mod name** — "Derpack Arcana" / "Arcane Loom" / other.
4. **Hosting** — reuse the existing `mod-mirror` release, or a new one.

## Verification (when built)
- Dev: `runClient`/`runServer` with the five target mods present; confirm each feature no-ops when a
  target is absent (toggle via config).
- In pack: build a test `.mrpack`, confirm `mods/derpack-arcana.pw.toml` delivers the jar; check the
  Attunement Font moves Source↔mana in-game; no log errors when any integrated mod is removed.
