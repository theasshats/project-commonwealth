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

### Rotten Creatures — structures only (Task C)
Rotten Creatures spawns are **code-driven** (`CommonConfig` weights + per-mob
`can_*_spawn_on` biome tags) — there are no `add_spawns` biome modifiers to
override — so In Control! is the right tool. Two rules: an `allow` for the seven
naturally-spawning mobs (`burned`, `frostbitten`, `glacial_hunter`, `swampy`,
`undead_miner`, `mummy`, `dead_beard`) when inside a structure in the allowlist,
then a blanket `deny` for the same seven everywhere else. Summoned adds
(`zombie_lackey`, `skeleton_lackey`, `hunter_wolf`, scarabs, `immortal`) are
**not** in the lists, so necromancer/parent-mob mechanics still work.

> **Structure allowlist — vanilla + modded (issue #106).** Beyond the thematic
> vanilla structures (mineshaft, stronghold, ancient_city, desert_pyramid,
> swamp_hut, ocean ruins, ruined portals) the allowlist now also covers
> dungeon/ruin/abandoned structures from the pack's structure mods, picked to
> match the vanilla set's undead-friendly theme (no inhabited villages):
>
> - **YUNG's Better Dungeons** (`betterdungeons`): `small_dungeon`,
>   `zombie_dungeon`, `skeleton_dungeon`, `spider_dungeon`,
>   `small_nether_dungeon`. (Better Mineshafts/Strongholds overwrite the vanilla
>   `minecraft:mineshaft`/`stronghold` IDs already in the list — no new IDs.)
> - **Dungeons and Taverns** (`nova_structures`): the crypts, graveyards, ruins,
>   and abandoned/illager dungeons (`undead_crypt`, `creeping_crypt`,
>   `remnant_graveyard`, `remnant_birch_graveyard`, `desert_ruins`,
>   `jungle_ruins`, `wild_ruin`, `ruin_town`, `conduit_ruin`, `toxic_lair`,
>   `bunker`, `deepslate_camp`, `badlands_miner_outpost`, `stray_fort`,
>   `lone_citadel`, `illager_hideout`, `illager_manor`). Taverns, wells,
>   firewatch towers, and inhabited villages are deliberately left out.
> - **L_Ender's Cataclysm** (`cataclysm`): the abandoned/cursed/ruined sites
>   (`abandoned_spire`, `abandoned_temple`, `abandoned_village`,
>   `cursed_pyramid`, `ruined_citadel`, `sunken_city`, `frosted_prison`).
> - **When Dungeons Arise: Seven Seas** (`dungeons_arise_seven_seas`): the pirate
>   ships (`pirate_junk`, `corsair_corvette`, `unicorn_galleon`,
>   `victory_frigate`, `small_yacht`) — fitting for `dead_beard`.
>
> IDs were read straight from each mod jar's `data/<ns>/worldgen/structure/`,
> so they're exact, not guessed. Only the `allow` rule carries the `structure`
> list; the trailing `deny` is a blanket everywhere-else rule (no `structure`
> key). Unknown IDs are ignored (logged), not fatal, so the list is safe to
> over-cover. **Still playtest-gated:** confirm in-game with `/locate structure`
> that the modded structures generate and that Rotten Creatures actually spawn
> inside them (and nowhere else).

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
