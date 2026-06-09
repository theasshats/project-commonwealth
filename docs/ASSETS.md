# Project Commonwealth — Visual identity & asset creation plan

> **Status: DRAFT for maintainer review.** The production plan for the pack's visual identity and
> marketing assets — logo, pack icon, thumbnails, store/social imagery, the trailer, and the
> screenshot/clip library. It's the detailed companion to **`docs/OUTREACH.md` §5 (Assets)**; OUTREACH
> says *what* and *when*, this says *exactly which asset, at what spec, made how*. Internal planning doc
> (normal formatting); any *player-facing copy* examples follow the professional-prose rule (`CLAUDE.md`).
>
> **Name note.** Identity is **decided** — **Project Commonwealth**, motto ***Magna Communitas***, handle
> `pcmc` — so asset work can start now. The mechanical repo/hostname rename is a **separate task (#78)**,
> not a blocker for designing assets.
>
> **zagwar has reference images.** Those drive the visual direction. §0 and §4 are the workflow for
> turning them into a concrete brief; the creative directions in §1 are *starting points to reconcile
> against the references*, not a prescribed look.

---

## 0. Principles (read first)

- **One identity, reused everywhere.** Every surface — launcher tile, store page, YouTube thumbnail,
  Discord, the site — uses the *same* logo, mark, and palette. Recognizability comes from repetition,
  not variety. The logo + pack icon + palette are the **gating assets**; everything else is built on
  them, so they come first (§6).
- **Built by two people, no budget assumed.** Favor what's cheap and repeatable: in-game capture (free
  and perfectly on-brand), reusable templates, free tools. Spend real effort (or a small commission) on
  exactly one thing — the **logo** — because everything else reuses it.
- **Honesty (the `OUTREACH.md` §9 / `CLAUDE.md` rule applies to pixels too).** Screenshots and the
  trailer show the *actual game*. No doctored looks a player can't reproduce. Note the shaders caveat in
  §3.
- **The visuals tell the systems-loop story.** `docs/SYSTEMS.md` is the script: *scarcity → specialize →
  produce → trade*, with airships moving the goods. The hero image is an **airship**; the supporting
  shots are vein biomes (scarcity), a colony + Create megabase (production), a market/trade moment
  (economy), a boss/combat beat (danger).

---

## 1. Brand foundation (decide once — everything hangs off it)

**Locked:** name **Project Commonwealth**, motto ***Magna Communitas***, handle `pcmc`.

**Creative directions — starting points, to reconcile with zagwar's references (§4).** The name +
motto ("Commonwealth," a Latin motto) plus the two signature mods (Create = cogs/brass; Aeronautics =
airships/sky) point at a **civic/heraldic** feel, which is distinctive in a field of generic Create-pack
logos:

- **A — Civic crest / emblem.** A shield or roundel: a central **cog** (Create), an **airship**
  silhouette, an element of **trade** (a balance scale, or crossed wrench + pick), and a ribbon banner
  reading *MAGNA COMMUNITAS*. Reads as a faction crest — fits the name and motto exactly, and makes a
  strong square **pack icon**.
- **B — Industrial-sky wordmark.** "PROJECT COMMONWEALTH" in a riveted/industrial display face with an
  airship silhouette integrated into the lockup; motto as a small underline ribbon. More modern; the
  mark-only version is a cog/airship monogram.
- **C — Roundel / monogram badge.** A circular badge with a stylized **PC** monogram built from a cog
  and a propeller, motto set around the ring. Maximally scalable — looks clean at 32px favicon size.

**Palette — derive from the references; starting suggestion** until they're in: **brass/copper**
(Create), **sky blue** (Aeronautics), **dark slate** (contrast/legibility), with a **parchment/cream**
accent (the "commonwealth/civic" note). Lock 4–6 hex values once the references are reviewed.

**Typography.** A display face for the wordmark + a clean face for UI/body. **Use open-licensed fonts
(SIL OFL)** so they can be redistributed in assets without license trouble — e.g., a sturdy slab/grotesk
for the wordmark, Inter/Source Sans for body. Record the chosen fonts here once picked.

---

## 2. Asset inventory (what to make, at what spec, for where)

Specs are sensible standards — **verify the current platform requirements** before final export, they
drift. Priority: **P0** = gating (do first, everything reuses it); **P1** = needed for the loud push;
**P2** = nice-to-have / ongoing.

| Asset | Spec | Where it's used | Pri |
|---|---|---|---|
| **Primary logo** (horizontal: mark + wordmark) | SVG master + transparent PNG @1x/2x; **light & dark** variants | Site header, store pages, trailer, README | **P0** |
| **Logo mark only** (the symbol) | SVG + PNG, square-safe | Small placements, watermark, favicon source | **P0** |
| **Square pack/app icon** | **512×512** PNG (transparent or solid) | Modrinth icon, CurseForge avatar, **Prism instance tile**, Discord server icon — the single most-seen asset | **P0** |
| **Favicon set** | 32×32, 180×180 (apple-touch), 512×512 + manifest | The site (`derpack-site`) | P1 |
| **Social card / og:image** | **1200×630** | Link previews on Discord/Reddit/social, site `<meta>` | P1 |
| **YouTube/video thumbnail template** | **1280×720** (16:9), <2 MB | Trailer, any creator/devlog video | P1 |
| **Storefront gallery shots** | 16:9, ~1920×1080 | Modrinth gallery / CurseForge screenshots (if listed — `OUTREACH.md` §3) | P1 |
| **Site / store banner (wide hero)** | ~1920×600 (and a CF header if used) | Site landing hero, store header | P1 |
| **Discord assets** | server icon 512×512; banner 960×540; (opt.) invite splash 1920×1080 | The Discord (`OUTREACH.md` §8) | P1 |
| **Trailer** | 1920×1080, 60–90 s; **+ a 1080×1920 vertical cut** | Site, YouTube, Shorts/TikTok, launch posts | P1 |
| **Screenshot / clip library** | raw 1080p+ captures, organized by system | Feeds *every* asset above | **P2 / ongoing — start now** |

---

## 3. Screenshots & clips — the cheapest, highest-leverage asset

This is the raw material for the thumbnail, gallery, social card, banner, and trailer. **Start during
normal playtests now** (it's already a "now" item in `OUTREACH.md` §10) — zero dependencies.

**The shot list (mapped to the loop):**
- **Airship hero** — the money shot for the thumbnail/trailer/banner. A Create Aeronautics ship in
  flight, dramatic angle, good light.
- **Regional vein biomes** — the scarcity/exploration story (distinct biomes = "where you settle
  decides what you mine").
- **Colony + Create megabase** — production: a MineColonies settlement wired into a Create factory.
- **A market / trade moment** — the economy (stalls, coins, players exchanging).
- **A boss / combat beat** — danger.

**Capture craft (free):**
- Clean the frame: hide the HUD (**F1**), bump render distance, pick time-of-day/weather for drama; use
  spectator/cinematic-camera or a replay mod for smooth angles.
- **Shaders caveat (important):** Iris/Oculus shaders **break Create Aeronautics ships visually**
  (`CLAUDE.md`) — so **airship shots are shaders-off**. Scenery/biome beauty shots *can* use shaders, but
  only if you're willing to ship that shader setup to players (honesty rule) — otherwise keep captures to
  the pack's stock look.
- **Organize** in a shared drive (not this repo — binaries; `docs/` and assets are `.packwizignore`'d
  anyway), tagged by system, so any asset can be assembled fast.

---

## 4. The reference-image workflow (zagwar)

zagwar's references set the direction; this turns them into something the logo and palette can be built
from.

1. **Collect** the references into one place — a moodboard (Figma/PureRef) or a shared Drive folder.
2. **Annotate** each: what to take from it — palette? shape language? mood? a specific motif (a crest, a
   cog style, an airship form)?
3. **Distill** into a **one-page brief**: chosen direction (A/B/C from §1 or a blend), 4–6 palette hexes,
   2–3 must-have motifs, and do/don'ts. This brief is the input to the logo and every other asset.
4. **Brief → logo → everything else** (the logo's palette/type/mark cascade into all of §2).

> **Offer:** drop zagwar's reference images **into this chat** and I'll analyze them directly — propose a
> concrete direction, a named palette (with hexes), 2–3 logo concepts described in detail, and write the
> one-page brief from them. (I can view images; I just can't see them until they're shared here.)

---

## 5. Production approach & tools (two people, low budget)

- **Logo — the one asset worth doing carefully.** Three viable routes: **(a) commission** a small artist
  from the brief (the modding/Fiverr communities do clean vector logos cheaply); **(b) in-house** in
  **Inkscape** (free, vector) straight from the brief; **(c) AI-concept then hand-vectorize**. Decide
  commission-vs-in-house *after* the §4 brief exists — don't brief an artist (or yourself) without it.
- **Everything else — in-house.** Pack icon, thumbnail template, social card, banners: **GIMP/Krita**
  (raster) or **Figma free** (layout/templates). Build the thumbnail as a **reusable template** (logo +
  text zone + hero-image slot) so future videos are a 5-minute swap.
- **Trailer — free toolchain.** **DaVinci Resolve** (free) or **CapCut**; cut from the §3 clip library to
  the loop story; an open-licensed or properly-licensed music bed. 60–90 s, with a vertical cut for
  Shorts.
- **Source-file hygiene.** Keep editable masters (SVG/`.kra`/`.psd`/Figma) in a shared drive; commit only
  *exports*, and only where they're served (e.g. the **site repo**, `derpack-site` → future `pcmc-site`).
  Not in the pack repo. Use **OFL fonts** so exports are redistribution-safe.

---

## 6. Sequencing (tied to the OUTREACH cadence)

Mirrors `OUTREACH.md` §6 (build quietly now, loud finish) — assets are *ready* before the loud push, not
scrambled at launch.

- **Now (~v0.7):** collect references → **brief** (§4); lock palette + type; pick a logo direction; start
  the **screenshot/clip habit** (§3). *Gating work — do the brief and logo first.*
- **Mid (~v0.9, Economy & airships — the best content beat):** **logo final**, **pack icon**, social
  card, site header, first gallery shots. This is when the airship + economy hooks are both live, so it's
  the strongest moment to have polished visuals.
- **Late (~v0.15 → 1.0):** thumbnail template, the **trailer** (cut from the library), final storefront
  gallery, Discord assets — the loud-push set, timed to the launch sequence (`OUTREACH.md` §7).

---

## 7. Definition of done — the asset set before the 1.0 loud push

- [ ] Brief locked (direction, palette hexes, fonts, motifs) — from zagwar's references.
- [ ] **Logo** final (SVG master; light/dark; horizontal + mark-only; PNG exports).
- [ ] **Square pack icon** (512×512) live on the launcher tile + any storefront.
- [ ] Favicon set + **social card** (og:image) on the site.
- [ ] **Thumbnail template** + at least the launch thumbnail.
- [ ] **Trailer** (16:9 + vertical) cut and uploaded.
- [ ] Storefront gallery / site banner populated with hero shots.
- [ ] Discord icon + banner.
- [ ] Screenshot/clip library has the five loop shots (§3) at usable quality.

---

_Refs: `docs/OUTREACH.md` (§5 assets · §6 cadence · §7 launch · §9 honesty), `docs/SYSTEMS.md` (the loop
the visuals dramatize), `docs/DESIGN.md` (the why), `CLAUDE.md` (shaders × Aeronautics caveat;
player-facing honesty rule)._
