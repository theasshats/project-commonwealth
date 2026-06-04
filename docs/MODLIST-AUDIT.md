# Modlist & Path-Forward Audit

_356 manifests, audited against the stated goals (CLAUDE.md / DESIGN.md / Phase-1 plan).
Slug + knowledge based — items marked ⚠ need confirming from the jar/EMI; the ground-truth
CI digest will nail those. This is a planning artifact, not a final decision list._

## The goal (the yardstick)
**A cooperative PvPvE Create pack for a small crew (~10), scarcity-driven, where every mod earns its
place by anchoring to one of five systems — or it's cut:**
- **Create spine** — the tech core; things made through Create (incl. **Create Aeronautics**).
- **Magic web** — Ars / Iron's / Occultism, bridged.
- **Economy** — Numismatics + Trading Floor + bounties (scarce regional ores → goods → trade). *In the
  spirit of Eco, but emergent and optional — not a forced economy.*
- **Aeronautics & logistics** — ships, trains, drones; the flight/transport ladder.
- **Survival & seasons** — Serene Seasons × Spice of Life × Cold Sweat.

Progression on-ramps: complex Create tech unlocks via **MineColonies or boss drops**. Guns = TaCZ +
Create Big Cannons. Friend-group, pre-alpha. Joke mods allowed *only if* they anchor to a system.
The test for every row below: **what does this anchor to — and if nothing, why is it here?**

## On-track check — ✅ mostly
| Goal | State |
|---|---|
| Scarce regional veins | ✅ done — 20 ores (PR #56, playtest #58) |
| Guns = TaCZ + Big Cannons | ✅ TaCZ + Immersive TaCZ + Armorer (#55); Big Cannons + Adv-Tech present |
| Currency economy | 🟡 Numismatics + Trading Floor present, Blockchain gated; vendors/coin-values pending |
| GregTech recipe conversion | ⏳ next phase (#17) — scope in §C |
| Create Aeronautics core | ✅ present (+ aeronautics-compatability) |
| Joke-mod audit | 🟡 this doc + #45 / #60 |

**What the modlist reveals, re-framed under the five-system goal:** the pack is **much broader than
just "Create"** (heavy food / structure / magic / colony content) and runs **several systems in
parallel** (magic, economy, colonies). Under the old "everything routes through Create" framing those
read as drift; under the five-system goal they're **fine — they're the other pillars** — *provided
each mod anchors to one*. So the work isn't subordinating them to Create; it's (a) cutting what
anchors to nothing and (b) building the **economy** pillar so the content sprawl gains purpose (§D).

## A. Fit flags

**A1 — Pure memes (remove candidates; mostly already decided in #45):**
`mmmmmmmmmmmm`, `staaaaaaaaaaaack` (mega-stacks → **directly breaks the scarcity economy**),
`brazil-legends`, `create-more-pipe-bombs-in-packages` (grief), ~~`umapyoi`~~ (**cut** in v0.6.0 — #60).
**Keep — harmless flavor:** `just-blahaj`, music discs (`game-discs`, `net-music`, `immersivemusicmod`,
`steves-lava-chicken…`), `emoji-type`.
**Rework not remove:** `the-bible` (recipe rework, #17).

**A2 — "Meme" but functional → keep:**
`touhou-little-maid` (maids = automated labor), `smokeleaf-industries` (a cash-crop *processing*
chain — actually **fits** the grow→process→sell economy; treat as an economy crop).

**A3 — Scope-creep content (beyond the stated TaCZ+Cannons / Create theme — keep or gate?):**
- Melee/adventure weapons: `epic-samurais`, `swashbucklers`, `valarian-conquest` ⚠ — weapon trees
  beyond the stated gun/cannon lineup.
- Magic stack: `ars-nouveau` + `ars-n-spells`, `irons-spells-n-spellbooks`, `occultism` +
  `occult-engineering`, `necronomicon`, `modular-golems` — full parallel power systems (big
  recipe-gate candidates, §C).
- `mffs` (force fields), `security-craft` ⚠ — base defense; minor fit for a PvE friend group.
- `sky-whale-ship` ⚠, `companion` (pet dog, zero content → cut, #94) / `companions-mod` /
  `followers-teleport-too` ⚠ — companion/novelty; review value. **NOT novelties (re-tag, keep):**
  `buddy-drones` is **Modular Drones** (real logistics → aeronautics pillar); `create-mechanical-companion`
  is **Create content**.

## B. Duplicate / overlapping **mechanics** (pick one)
> Duplicate **items** (lead×2, silver×2, tin, etc.) are largely auto-handled by **`almost-unified`**
> + **`polymorph`**. Below are overlapping **mods/mechanics**, which unifiers do *not* fix.

| Cluster | Mods | Recommendation |
|---|---|---|
| Inventory sort | `inventory-profiles-next` · `mouse-tweaks` · `invtweaks-emu-for-ipn` | IPN owns sort; Mouse Tweaks = drag-fill only (#38; note: `clientsort` isn't actually installed) |
| Accessory API | `curios` + `accessories` + `accessories-compat-layer` | dual slot APIs — keep both only if mods require each; confirm the compat-layer resolves ⚠ |
| Tree growth | `dynamictrees`(+`-terralith`,+`plus`) · `oh-the-trees-youll-grow` | **not a duplicate** — `oh-the-trees-youll-grow` is a **library** (tree gen via .nbt; verify what needs it, likely Terralith). Dynamic Trees is the gameplay system — keep/cut on perf merits, separately. #83 |
| Moon events | `enhanced-celestials` · `ender-moon` · `horde-moon` | **keep as subsidiary spawn drivers**, not standalone: `horde-moon`→`mutants-and-zombies`, `enhanced-celestials`→broad lunar spawn-gating, `ender-moon`→special endermen if any (else keep/cut). #83 |
| Food diversity | `spice-of-life-maids-dream` · `spice-of-life-onion` · `foodvariations` (SoL: Classic) | **three** Spice-of-Life forks → keep one (#91) |
| Portable storage | `travelersbackpack` · `create-storage` (· orphan `sophisticated-core`) | **two real backpack systems** — `create-storage` ships a full backpack line too. Pick one (Create: Storage fits the Create spine; or keep Traveler's + disable CS backpacks). Drop the orphan `sophisticated-core`. #83 / #94 |
| AFK / sleep | `afk-sleep` + `detect-afk` | overlap; one suffices ⚠ |

## C. Recipe-change targets (GregTech-conversion scope → #17)
Where "just craft it cheaply" undercuts the Create economy — gate behind Create processing, raise
costs, or nerf the loot source:
- **OP factory shortcuts:** `create-ultimate-factory`, `create-factory` ⚠ — kitchen-sink blocks that
  can trivialize automation; review their progression/recipes.
- **Magic items:** gate key ars/iron's-spells/occultism/golem items behind Create-made components
  (brass, precision mechanisms…) so magic plugs **into** the Create spine, not around it.
- **Easy storage/travel:** sophisticated backpacks, `travelersbackpack`, `create-storage` — push
  upgrades behind Create materials.
- **Auto-cooking:** `cooking-for-blockheads` (free food auto-craft) — gate or accept (food ≠ economy core).
- **Structure/dungeon loot** (Yung's ×5, `dungeons-and-taverns`, `when-dungeons-arise-seven-seas`,
  `towns-and-towers`, `endrem`, `valarian-conquest` — **plus** `trek` (104 loot tables!), `tidal-towns`,
  `underground-village,-stoneholm`, `underground-worlds`, `formations`/`formations-nether`) — hand out
  gear/valuables that bypass mine-and-sell. **Loot pass (#18):** strip free metal/diamond gear;
  optionally seed Numismatics coins as rare loot.

## D. The two big design calls — decided (per the five-system goal)
1. **MineColonies = a progression on-ramp, woven in (not a rival economy to disable).** `minecolonies`
   (+ `structurize`, `domum-ornamentum`, `stylecolonies`, `ct-overhaul-village`, `multi-piston`,
   `towntalk`, `blockui`) stays first-class: it's one of the unlock paths for **complex Create tech**
   (alongside boss drops), and its differing colony pace is part of what *drives* trade between
   players. The earlier framing wanted its production disabled/gated as a "rival economy"; the settled
   goal instead **weaves it into the tech tree**. (Recipe/progression wiring tracked separately.)
2. **Breadth is fine when it's anchored.** Food (Farmer's Delight + ~10 addons), decoration (5×
   Macaw's + Supplementaries + …), structures (Yung's ×5 + more), mobs (~16) are all large — and
   that's OK, because each anchors to a system (food → Survival & seasons; decoration → the
   settlement/build palette; mobs → Economy via drops/bounties, or boss→keystone gating). The job
   isn't to shrink to a "focused Create pack" — it's to ensure every cluster anchors, and cut the
   bits that don't (curation in #83).

## E. Path forward (sequenced)
1. **Land current work** — playtest #58/#59 → merge #55/#56; merge #57 + run the digest.
2. **Curation pass** (#45 / #21 / #60) — remove agreed memes; resolve the §B duplicate-mechanic
   clusters (quick config/manifest edits).
3. **Big design calls — settled** (§D): MineColonies = woven on-ramp; breadth = fine if anchored.
4. **GregTech recipe overhaul** (#17) — metals/magic/storage through Create; needs the recipe digest.
5. **Loot pass** (#18) — structure/dungeon loot to fit scarcity; optionally seed coins.
6. **Economy finish** — Numismatics vendors/values + Trading Floor.
7. **Stability** (#42/#43/#48) and **QoL** (#38, …).

> Confidence: the Create / food / decoration / structure / colony / magic / library clusters are
> high-confidence. ⚠ items (and exact "what does X add") get confirmed by the ground-truth digest +
> an in-game EMI/JEI pass.
