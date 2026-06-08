# Spawn gating & mob curation (issue #83)

This documents the spawn-control work from the #83 curation pass: **what** each
file does, **why** the route was chosen, and **what must be verified in-game**
(none of this can be confirmed in the headless web sandbox — no game runs here).

## Tooling

[In Control!](https://modrinth.com/mod/in-control) (`mods/in-control.pw.toml`,
`side = "both"`) is the spawn-rule engine. Its config lives in
`config/incontrol/spawn.json` — a **strict JSON array** of rules evaluated
top-to-bottom; the first rule whose conditions match a spawn attempt wins and
its `result` (`deny` / `allow` / `default`) is applied. **⚠️ Keys are SINGULAR.** Verified against the
In Control! 10.2.6 jar (`mcjty.incontrol.rules`): `mob`, `mod`, `biome`, `biometags`, `structure`,
`structuretags`, `dimension`, `mintime`, `maxtime`, `minlight`, `maxlight`, `mindifficulty`,
`maxdifficulty`, `weather`, `hostile`, `passive`, `baby`, `seesky`, `mincount`, `maxcount`, `result`, …
*(An earlier draft of this doc used the plurals `mobs`/`structures`; In Control! rejected them at load
with "Invalid keywords for spawn.json" — fixed.)*

## What's configured

### Grimoire of Gaia kobold — disabled (Task D)
`config/incontrol/spawn.json` denies `grimoireofgaia:kobold`. GoG registers
spawns in code (no per-mob config toggle, no datapack `add_spawns` to override),
so an In Control! `deny` is the cleanest kill switch. The spawn **egg** still
works (admin/testing); only natural spawning is blocked.

### Heavy-AI mob spawn throttle (perf — #98 / #83)
A `/spark profiler` of the integrated-server tick (settled, pre-generated world)
showed the **lows/TPS spikes are mob-AI pathfinding**, not render and not
Create/MineColonies. The mods most present in the spike capture were **Born in
Chaos** (`born_in_chaos_v1`), **Mowzie's Mobs** (`mowziesmobs`), and **Grimoire
of Gaia** (`grimoireofgaia`). First-pass mitigation: three `mod`-scoped rules
using In Control!'s `random` condition (fraction of spawn attempts the deny rule
fires on) to **throttle, not remove** their natural spawns — keeping the content
while cutting the standing population that pathfinds each tick:

| Mod | `random` | Effect |
|---|---|---|
| `born_in_chaos_v1` | 0.6 | ~60% of natural spawns denied (the bulk undead spawner — biggest lever) |
| `grimoireofgaia` | 0.5 | ~50% denied (the kobold rule above still fully denies kobolds) |
| `mowziesmobs` | 0.5 | ~50% denied (rare elites; secondary, throttles standing count) |

Spawn **eggs** and structure/boss mechanics are unaffected (only natural spawn
attempts roll against `random`). These numbers are a **deliberate first pass** —
tune against a fresh TPS profile after playtest; if the lows persist, the next
levers are a global mob-cap trim and Cold Sweat / Accessories per-tick cost
(both showed in the *baseline* tick, not the spikes). Server-perf axis tracked
under #83 (and the TPS routine #147), distinct from the now-solved client-render
goal in #98.

### Rotten Creatures — per-mob placement (Task C; tuned in #106)
Rotten Creatures spawns are **code-driven** (`CommonConfig` weights + per-mob
`can_*_spawn_on` biome tags) — there are no `add_spawns` biome modifiers to
override — so In Control! is the right tool. The first pass gated all seven
naturally-spawning mobs (`burned`, `frostbitten`, `glacial_hunter`, `swampy`,
`undead_miner`, `mummy`, `dead_beard`) to one shared structure allowlist; #106
**split that per mob** (zagwar's placement call) so each undead spawns where it
fits thematically rather than in any dungeon. Each mob now gets its own
`allow` rule(s) followed by its own blanket `deny`. Summoned adds
(`zombie_lackey`, `skeleton_lackey`, `hunter_wolf`, scarabs, `immortal`) are
**not** in any rule, so necromancer/parent-mob mechanics still work (`immortal`
keeps its default summon behavior).

> **Per-mob placement (issue #106).** Structure IDs were read straight from each
> mod jar's `data/<ns>/worldgen/structure/`, so they're exact (`/locate
> structure <id>` works); unknown IDs are ignored (logged), not fatal, so the
> lists are safe to over-cover. Biome conditions use `biometags` with NeoForge
> convention tags so the same rule covers vanilla **and** Terralith biomes.
>
> - **Undead Miner** — structures only: `minecraft:mineshaft`,
>   `mineshaft_mesa`, `betterdungeons:small_dungeon`, `betterdungeons:zombie_dungeon`,
>   `nova_structures:badlands_miner_outpost`; **plus** inhabited
>   `underground_village:underground_village` but **only where dark**
>   (`maxlight: 7`) — it haunts the unlit tunnels, not the lit village.
> - **Frostbitten & Glacial Hunter** — cold biomes (`biometags` `c:is_snowy` +
>   `c:is_cold`, covering Terralith cold biomes) plus the snowy
>   `nova_structures:stray_fort`.
> - **Swampy** — swamp biomes (`biometags` `c:is_swamp`, covering Terralith
>   swamps) plus `minecraft:ruined_portal_swamp`, `nova_structures:jungle_ruins`,
>   `nova_structures:toxic_lair`.
> - **Burned** — every ruined-portal variant **except** the underwater one
>   (`ruined_portal`, `_desert`, `_jungle`, `_swamp`, `_mountain`, `_nether`),
>   plus `minecraft:fortress`, `betterdungeons:zombie_dungeon`,
>   `betterdungeons:small_nether_dungeon`.
> - **Mummy** — `minecraft:desert_pyramid` plus `nova_structures:undead_crypt`,
>   `remnant_graveyard`, `remnant_birch_graveyard`, `creeping_crypt`,
>   `desert_ruins`. (The Ancient Mummy variant rolls from the mod's own spawn
>   config — these rules don't touch its chance.)
> - **Dead Beard** — `minecraft:ocean_ruin_warm`, `ocean_ruin_cold`,
>   `ruined_portal_ocean`, `nova_structures:conduit_ruin`; **plus** the WDA Seven
>   Seas pirate ships (`dungeons_arise_seven_seas:pirate_junk`,
>   `corsair_corvette`, `unicorn_galleon`, `victory_frigate`, `small_yacht`) at an
>   even lower chance — a second allow rule gated with `random: 0.25`, so only ~¼
>   of spawn attempts aboard a ship pass (the rest fall through to the deny). (Its
>   base rare spawn weight is the mod's own, unchanged.)
> - **Immortal** — not gated; keeps its default (summon) behavior.
>
> ⚠️ **In Control! filters, it does not force spawns.** An `allow` rule only
> permits a spawn attempt the game *already makes* there; it cannot add the mob
> to a biome/structure the mod never registered it for. So the biome rules above
> work only as far as each mob's `rottencreatures:can_<mob>_spawn_on` biome tag
> reaches. **Playtest check:** if Frostbitten/Glacial Hunter don't appear in
> cold **Terralith** biomes (or Swampy in Terralith swamps), the real fix is a
> KubeJS biome-tag override adding those biome IDs to the mob's
> `can_<mob>_spawn_on` tag — left as a follow-up rather than shipping guessed
> Terralith IDs into a datapack (a bad biome ID there is a load error, unlike a
> harmless unknown In Control! ID). Also confirm with `/locate structure` that
> the modded structures generate and that each undead spawns in its own set
> (and nowhere else).

### Mutants and Zombies — moon-gated, NOT via In Control! (Task C)
**Route chosen — and why it is *not* an In Control! deny:** M&Z must be off
during normal nights but spawn during the zombie/blood moon. In Control! cannot
read Enhanced Celestials' lunar event, and — critically — an In Control! `deny`
on M&Z would **also block the blood-moon spawns**, because EC injects its
lunar spawns through the *same* natural-spawn path In Control! intercepts. So
In Control! is the wrong tool here. Instead:

1. **Disable natural spawns at the source.** M&Z adds itself to overworld biomes
   via seven `neoforge:add_spawns` biome modifiers. Each is overridden to
   `neoforge:none` in
   `kubejs/data/mutantszombies/neoforge/biome_modifier/*_biome_modifier.json`.
   This removes them from every biome's spawn list — deterministic, no In
   Control! involved. (M&Z's `*SpawnNaturally` config booleans are left at their
   `true` defaults *on purpose*: that code path only *cancels* spawns, and
   flipping it could also cancel the EC-injected moon spawns.)
2. **Re-add them during the blood moon, natively.** EC lunar events carry their
   own `mob_settings.lunar_spawn_settings.mob_spawn_settings.spawners` list. The
   `blood_moon` and `super_blood_moon` events are overridden under
   `kubejs/data/enhancedcelestials/enhancedcelestials/lunar/event/` to add the
   seven M&Z mobs to the `monster` spawners (weights mirrored from their
   original biome modifiers). Result: M&Z appears **only** during a (super)
   blood moon. This is the "enhanced-celestials should also gate mobs" item.

> ⚠️ **Playtest checklist for M&Z:**
> - Confirm KubeJS `data/` actually overrides EC's dynamic-registry lunar events
>   and M&Z's biome modifiers (load-order/priority). If KubeJS doesn't win the
>   override, move these into a standalone datapack that loads after both mods.
> - Verify no M&Z spawn on a normal night; verify they spawn on a blood moon
>   (`/lunarevent set enhancedcelestials:blood_moon` via EC's command, or
>   `/time set night` and wait for one).
> - The blood-moon `monster` multiplier (2.25 / 4.5) stacks on top of these —
>   tune weights down if blood moons feel overwhelming with 10+ players.
>
> **Horde Moon (`horde-moon`/ZombieMoon)** remains installed as an independent
> driver. EC's blood moon was chosen as the single clean gate because EC
> natively supports mob-spawn injection (Horde Moon does not, and would need a
> KubeJS bridge). If both moons should gate M&Z, the cleanest add is a KubeJS
> bridge keyed off Horde Moon — left as a follow-up.

### Kobold drops backfill (Task D)
The standalone **Kobolds** mod's kobolds have **empty** loot tables (they're
trade/companion-flavored), so disabling GoG's kobold would lose its drops. GoG's
`kobold` dropped: `grimoireofgaia:fur` (0–2, +looting), iron nuggets
(`c:nuggets/iron`, 0–3), and rare `grimoireofgaia:box_iron` /
`grimoireofgaia:bag_arrows`. Those drops are reproduced on `kobolds:kobold` via
`kubejs/data/kobolds/loot_table/entities/kobold.json` (GoG stays in the pack, so
its items still exist). Only the base `kobold` is backfilled — the variant
kobolds (warrior, captain, …) keep their empty tables, matching that GoG had a
single kobold.

> ⚠️ **Playtest:** confirm `kobolds:kobold` spawns naturally and now drops the
> GoG items; confirm no GoG kobolds appear. If a variant should also carry the
> GoG drops, add sibling loot tables.

### Alex's Mobs / Naturalist overlap trim (issue #168)
Alex's Mobs (`alexsmobs`) and Naturalist (`naturalist`) both register the same
five animals — rhino, catfish, elephant, rattlesnake, brown bear — plus
near-duplicate drop/food items. Both mods stay (each has plenty of
non-overlapping content); this is a per-entity trim. **Maintainer decision:
Alex's Mobs wins** (richer behaviour and drops that already feed
recipes/economy — `bear_fur`, `rattlesnake_rattle`, three catfish sizes), so
the Naturalist versions are the losers.

**Spawn gate (this file).** A single `deny` rule blocks natural spawns of the
five Naturalist mobs: `naturalist:rhino`, `naturalist:catfish`,
`naturalist:elephant`, `naturalist:rattlesnake`, `naturalist:bear`. Spawn
**eggs** still work; only natural spawning is blocked. Naturalist's
non-overlapping animals (lion, deer, duck, snail, …) are untouched.

**Item unification (`config/almostunified/`).** The duplicate items collapse
onto the Alex's item via the pack's standard `almost-unified` route — the same
custom-tag pattern as the pasta unification. Three custom tags bridge the
pairs (they share no tag natively — `alexsmobs` raw catfish is `c:foods`/`raw_fish`,
`naturalist` is `raw_fishes`; `bear_fur` and `fur` share none), each set to
`alexsmobs` as dominant in `unification/materials.json`:

| Custom tag | Members | Dominant |
|---|---|---|
| `c:bear_fur` | `alexsmobs:bear_fur`, `naturalist:fur` | `alexsmobs:bear_fur` |
| `c:foods/raw_catfish` | `alexsmobs:raw_catfish`, `naturalist:catfish` | `alexsmobs:raw_catfish` |
| `c:foods/cooked_catfish` | `alexsmobs:cooked_catfish`, `naturalist:cooked_catfish` | `alexsmobs:cooked_catfish` |

With `recipe_viewer_hiding: true`, the non-dominant Naturalist items drop out of
JEI and recipes resolve to the Alex's item. No recipe rewire was needed: Alex's
bear-fur recipes (`falconry_glove`, `frontier_cap`/`_alt`, `banner_pattern_bear`)
already consume `alexsmobs:bear_fur`, which stays dominant; the catfish cooking
recipes in both mods keep working against the surviving raw item. (Those Alex's
recipes hardcode the `alexsmobs:bear_fur` *item*, not the tag, so they were never
at risk — the rewire only applied to the never-chosen "keep Naturalist" path.)

> ⚠️ **Notes / playtest.**
> - `naturalist:fur` also drops from Naturalist's **lion** (out of scope, not
>   gated). No recipe consumes `naturalist:fur`, so unifying it onto
>   `alexsmobs:bear_fur` is clean; the lion simply yields the surviving fur item
>   in JEI. Confirm in-game that lion fur shows as bear fur with no second entry.
> - **The catfish bucket is left un-unified on purpose.** Alex's has three sizes
>   (`small`/`medium`/`large_catfish_bucket`); Naturalist has one
>   (`naturalist:catfish_bucket`). A 3→1 mapping doesn't unify cleanly, and with
>   `naturalist:catfish` spawn-gated the Naturalist bucket is only reachable via
>   spawn egg, so it's a non-issue. Revisit only if it shows up as a stray JEI
>   entry that bothers anyone.
> - Verify: the chosen survivors spawn and the five Naturalist versions do **not**
>   spawn naturally (cross-ref #108's watchlist); surviving fur/catfish craft and
>   cook with no orphaned recipe; no duplicate JEI entries for the unified items.

## Open maintainer decisions (not changed here)

- **`ender-moon` — keep/cut.** The issue said: gate "special endermen"
  (variant/elite) to ender-moon *if any exist*, else flag. Scan result: **no mod
  in the pack adds an enderman variant/elite.** The one that did — Mutant
  Monsters' Mutant Enderman — is **removed in this same pass**. GoG's
  `ender_girl`/`ender_dragon_girl` are humanoid mobs, not endermen variants. So
  ender-moon has no unique job → **keep-or-cut is a maintainer call.** Left
  installed and unchanged.
- **`oh-the-trees-youll-grow` — kept (do not cut).** It's a tree-gen *library*
  (`.nbt` templates), not a gameplay mod. Verified on Modrinth that **Terralith
  does not depend on it** (Terralith deps: lithostitched, cristel-lib,
  unfixed-seeds, fabric-api), and BYG (its usual consumer) isn't in the pack —
  so it currently looks like an **orphan library**. Per #83 it stays regardless;
  flagging for the maintainer: confirm a soft-dep/future use, or cut later.
- **Dynamic Trees family** (`dynamictrees` + `dynamictreesplus` +
  `dynamic-trees-terralith`) — separate worldgen/perf decision, **not** an OTTYG
  duplicate. Left in place pending a maintainer call.
