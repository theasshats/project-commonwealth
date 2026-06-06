# RFD: Derpack Kill Feed (clean-room, MIT)

Status: ready for implementation
Owner: Derpack X
Target license: **MIT**

## 0. Read this first — clean-room rules (non-negotiable)

This document exists so the kill feed can ship under **MIT** rather than GPL-3.0. That is
only legitimate if the implementation is written **independently**, from this document
alone. Therefore, whoever implements this:

1. **Must NOT read, open, clone, or reference the Superb Warfare source code**
   (`github.com/Mercurows/SuperbWarfare`) in any form.
2. **Must NOT read the existing GPL-adapted implementation** in this repo — i.e. do
   **not** open `mods-src/derpack-killfeed/` or the diff/code on PR #196. (Those are a
   GPL derivative of Superb Warfare; reading them taints the clean-room provenance.)
3. **Must implement solely from the requirements in this document** plus your own
   knowledge of the public NeoForge / Minecraft 1.21.1 modding APIs.
4. Add a top-of-file header to every source file: `SPDX-License-Identifier: MIT`, and a
   `LICENSE` file with the standard MIT text, copyright "Derpack X".
5. Do **not** copy any art/assets from any third-party mod.

This RFD is self-contained on purpose: it describes *what to build and how it should
behave*, never *how anyone else wrote it*. The specific timing/animation numbers are
left to your judgement (targets are given in human terms — seconds, "accelerating") so
you derive your own implementation rather than reproduce someone else's.

If anything here is ambiguous, decide with sensible defaults and note the decision — do
**not** go looking at other implementations to resolve it.

## 1. Purpose

A lightweight on-screen "kill feed": a short, fading line appears in a screen corner each
time a notable kill happens, e.g.

```
☠ Alex ⚔ [Diamond Sword] Zombie (melee)
```

It is purely cosmetic combat feedback. No gameplay effects, no items, no recipes.

## 2. Target environment

- Minecraft **1.21.1**, **NeoForge** (match the pack's `pack.toml` `[versions].neoforge`;
  at time of writing `21.1.228`).
- Java **21**.
- Build with Gradle using the NeoForge **ModDevGradle** plugin (`net.neoforged.moddev`).
- Mod id: `derpack_killfeed`. Group/package: `xyz.ishimura.derpackx.killfeed`.
- Display name: "Derpack Kill Feed". `side = "both"` (kill detection is server-side,
  rendering is client-side).

## 3. Functional requirements

### 3.1 When a feed entry is produced

On any living entity death, decide an entry as follows:

- Identify the **victim** (the entity that died).
- Identify the **killer**: the entity responsible. Resolve it so that **ranged kills
  attribute to the shooter, not the projectile** — if the direct cause is a projectile
  (arrow, bullet, thrown item, etc.), credit the projectile's owner; if the owner is a
  tameable/owned entity owned by a player, credit appropriately. Otherwise the killer is
  the direct attacking entity. The killer may be absent (environmental deaths: fall,
  lava, drowning, the void, etc.).

This must work for modded weapons too — in particular **TaCZ guns** (the pack's gun mod):
verify a gun kill credits the firing player and shows the held gun as the weapon. Use the
generic damage-source / projectile-owner resolution; do not special-case any mod.

### 3.2 Visibility — who sees the entry (important)

- **Global** (broadcast to all online players): the victim is a **player**, OR the victim
  is a **named creature** (has a custom name, e.g. name-tagged or a named pet).
- **Local** (sent only to the killer): any other kill where a **player** is the killer
  (i.e. a player killed an ordinary, unnamed mob).
- **Ignored** (no entry at all): an unnamed mob/creature dies and no player is the killer
  (ambient mob-on-mob deaths). This keeps the feed from spamming.

### 3.3 Line content & format

Build the line server-side as a styled text component, then send it to the client(s).

- Prefix: a skull glyph `☠ ` in gray.
- If there is a killer distinct from the victim:
  `<killer name> <sep> [<weapon>] <victim name>` where:
  - `<sep>` is `⚔` (crossed swords) when the killer is a player holding a non-empty item,
    otherwise `→`.
  - `[<weapon>]` is the killer's held item's display name, shown **only** when the killer
    is a player with a non-empty main-hand item; omit otherwise.
- If there is no killer (environmental): `<victim name> died`.
- Append the damage type in parentheses, e.g. ` (lava)` — see 3.4.
- **Name colors:** player names **red**; non-player names **gray**. (Use the entity's
  display name; apply the color over it.)

### 3.4 Damage-type label

Map the death's vanilla damage-source message id to a short human word and show it in
parentheses. Unmapped ids fall through to the raw id (so modded sources still read
sensibly). This mapping is Derpack X's own content — implement it as a simple lookup.
Suggested mapping (extend as you like):

| message id | label | | message id | label |
|---|---|---|---|---|
| player | melee | | lightningBolt | lightning |
| mob | mauled | | magic / indirectMagic | magic |
| arrow | shot | | wither / witherSkull | wither |
| trident | impaled | | thorns | thorns |
| fireball | fireball | | drown | drowned |
| explosion / explosion.player | explosion | | cactus | cactus |
| fireworks | fireworks | | sweetBerryBush | berry bush |
| fall | fall | | sting | stung |
| flyIntoWall | kinetic | | starve | starved |
| lava | lava | | freeze | froze |
| inFire / onFire / hotFloor | burned | | fellOutOfWorld | the void |
| | | | sonic_boom | sonic boom |

## 4. Display & animation requirements

These are stated as desired *feel*, in human units. **Choose your own constants, easing
curves, and pixel offsets** — do not look up anyone else's. Tune by eye in-game.

- Entries anchor to a configurable **screen corner** (default **top-right**). Support all
  four corners.
- Newest entry sits **nearest the corner**; older entries stack away from it. Respect
  configurable margins from the screen edges and a configurable line spacing.
- Each entry **animates in** quickly (a brief horizontal slide from the screen edge is
  fine — a few frames), **holds** for roughly **4 seconds**, then **animates out** over
  roughly **1 second** by sliding back toward/off the edge while fading its opacity to
  zero. Use an accelerating ease on the way out so it lingers then leaves.
- A **burst of kills** in quick succession must stack cleanly and not jitter; cap the
  number of simultaneously visible entries (config) and drop the oldest beyond the cap.
- Do not render when the GUI is hidden (F1) or there's no player.
- Rendering is text-only (no icons/art). One `drawString` per entry is sufficient.

Hook the render into the HUD via NeoForge's GUI-layer registration, above the chat layer.
Age/expire entries on a client tick.

## 5. Networking

Standard NeoForge 1.21.1 payload pattern:

- A custom payload (server → client) carrying the fully-styled line (a `Component` is
  fine to serialize via the vanilla component stream codec).
- Register the payload type on both sides; only the client installs a real receive
  handler that enqueues the line onto the client-side feed. Guard client-only classes so
  the dedicated server never classloads them.
- Server picks recipients per the 3.2 visibility rule (all players vs. the single killer).

## 6. Config (client-side)

A NeoForge client config (`ModConfigSpec`) with at least:

- `corner` — enum {TOP_RIGHT (default), TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT}
- `marginX`, `marginY` — pixels from the edges
- `lineSpacing` — pixels between entries
- `maxLines` — max simultaneous entries

(Display is a client preference; the server-side visibility rule is not configurable.)

## 7. Build, packaging & shipping

- Place the mod source at `mods-src/derpack-killfeed/` (this path is `.packwizignore`d —
  it's source, not pack content). **Replace** whatever is there now with your clean
  implementation. (See §8 on the handoff/replacement step.)
- Provide `build.gradle` / `settings.gradle` / `gradle.properties` (ModDevGradle),
  `src/main/resources/META-INF/neoforge.mods.toml`, and `pack.mcmeta`.
- A CI workflow (`.github/workflows/build-killfeed.yml`) should build the jar and upload
  it as an artifact. (One may already exist; reuse/keep it.)
- Shipping into the pack is a later step, tracked in #199: publish the built jar (GitHub
  release asset or Modrinth), then add `mods/derpack-killfeed.pw.toml` (download URL +
  sha256, `side = "both"`) and run `./tools/packwiz refresh`.

## 8. Provenance & handoff hygiene

Because this replaces a GPL-derived implementation:

- The implementer should do the work on a **fresh branch** without checking out or reading
  the GPL version's files. Practically: delete `mods-src/derpack-killfeed/` from your
  working tree **before** writing (or start the module from empty) so you're not tempted
  to reference it; rebuild it from this RFD.
- Commit message / PR should state the code is an independent MIT implementation written
  from this RFD, with no Superb Warfare (or GPL-port) code consulted.
- Keep this RFD in the repo as the provenance record.

## 9. Acceptance criteria

CI is parse/build-only and cannot launch the game — these must be checked by a human in a
fresh 1.21.1/NeoForge instance with the built jar installed:

- [ ] Client boots; fresh world creates without errors; dedicated server starts (side=both).
- [ ] Player melee kill → `killer ⚔ [Weapon] victim (melee)`, shown **only to the killer**.
- [ ] **Gun/arrow kill** attributes to the shooter and shows the weapon (verify with TaCZ).
- [ ] Player death (mob / PvP / environment) shows to **everyone**; PvP names in red.
- [ ] Named (name-tagged) mob death shows to **everyone**, even if a mob/environment killed it.
- [ ] Damage labels read correctly across causes (fall, lava, explosion, arrow).
- [ ] A burst of kills stacks and collapses without flicker; never exceeds `maxLines`.
- [ ] Entry appears in the configured corner, holds ~4s, slides out and fades cleanly.
- [ ] Changing corner/margins in the client config moves it as expected.
- [ ] GUI-hidden (F1) suppresses the feed.

## 10. Non-goals

No guns, vehicles, armor, dog tags, custom damage types, headshot detection, team-color
resolution, or any imported art/icons. Just the text feed described above.

## 11. Deliverables

1. MIT-licensed mod source at `mods-src/derpack-killfeed/` (replacing the GPL version).
2. `LICENSE` (MIT) + `SPDX-License-Identifier: MIT` headers.
3. Build files + `neoforge.mods.toml` + `pack.mcmeta`.
4. CI build workflow (kept/updated).
5. A short PR updating #199, stating the clean-room/MIT provenance.
