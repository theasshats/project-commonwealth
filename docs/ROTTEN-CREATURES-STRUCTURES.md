# Rotten Creatures spawn structures — review sheet (issue #106)

> **Resolved — per-mob placement (zagwar, 2026-06-06).** The shared allowlist
> below was the review draft; zagwar's call **split it per mob** (open question
> #4). `config/incontrol/spawn.json` now carries one rule set per mob, not the
> single shared list. The Current/Decide columns further down are the **review
> snapshot** that informed this; the live mapping is:
>
> | Mob | Where it spawns now |
> |-----|---------------------|
> | **Undead Miner** | `minecraft:mineshaft`, `mineshaft_mesa`, `betterdungeons:small_dungeon`, `betterdungeons:zombie_dungeon`, `nova_structures:badlands_miner_outpost`; **+** `underground_village:underground_village` only where dark (`maxlight: 7`) |
> | **Frostbitten / Glacial Hunter** | cold biomes (`c:is_snowy` + `c:is_cold`, incl. Terralith) **+** `nova_structures:stray_fort` |
> | **Swampy** | swamp biomes (`c:is_swamp`, incl. Terralith) **+** `minecraft:ruined_portal_swamp`, `nova_structures:jungle_ruins`, `toxic_lair` |
> | **Burned** | all ruined-portal variants **except** ocean (`ruined_portal`, `_desert`, `_jungle`, `_swamp`, `_mountain`, `_nether`) **+** `minecraft:fortress`, `betterdungeons:zombie_dungeon`, `small_nether_dungeon` |
> | **Mummy** | `minecraft:desert_pyramid` **+** `nova_structures:undead_crypt`, `remnant_graveyard`, `remnant_birch_graveyard`, `creeping_crypt`, `desert_ruins` |
> | **Dead Beard** | `minecraft:ocean_ruin_warm`, `ocean_ruin_cold`, `ruined_portal_ocean`, `nova_structures:conduit_ruin` |
> | **Immortal** | not gated (keeps default summon behavior) |
>
> Net effect vs. the draft: Cataclysm arenas, the WDA Seven Seas pirate ships,
> the illager/citadel/town DnT structures, and the broad shared vanilla set were
> **dropped** in favour of these tighter per-mob themes. See `docs/SPAWN-GATING.md`
> for the rule mechanics and the In-Control!-can't-force-spawns caveat on the
> Terralith-biome additions.

This sheet lists every structure the pack can generate — **vanilla and from each
structure mod** — with a one-line description and its **current** allowlist
status, so the set can be reviewed and tuned. IDs are read straight from each
mod jar's `data/<ns>/worldgen/structure/`, so they're exact (`/locate
structure <id>` works in-game). Unknown IDs are ignored (logged), not fatal —
the list is safe to over-cover.

**Legend:** ✅ = currently on the allowlist (Rotten Creatures spawn here) ·
⬜ = currently excluded · **Decide** column is for the review — keep / add /
drop.

---

## Vanilla (`minecraft`)

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `minecraft:mineshaft` | Abandoned mine tunnels (YUNG's Better Mineshafts overwrites this) | ✅ | |
| `minecraft:mineshaft_mesa` | Badlands variant of the above | ✅ | |
| `minecraft:stronghold` | Underground fortress with the End portal (YUNG's Better Strongholds overwrites this) | ✅ | |
| `minecraft:ancient_city` | Deep Dark sculk city, Warden territory | ✅ | |
| `minecraft:desert_pyramid` | Desert temple with TNT trap and loot | ✅ | |
| `minecraft:swamp_hut` | Witch hut on stilts | ✅ | |
| `minecraft:ocean_ruin_cold` | Submerged cold-ocean stone ruins (drowned) | ✅ | |
| `minecraft:ocean_ruin_warm` | Submerged warm-ocean sandstone ruins (drowned) | ✅ | |
| `minecraft:ruined_portal` | Broken Nether portal, overworld | ✅ | |
| `minecraft:ruined_portal_desert` | Ruined portal, desert variant | ✅ | |
| `minecraft:ruined_portal_swamp` | Ruined portal, swamp variant | ✅ | |
| `minecraft:ruined_portal_mountain` | Ruined portal, mountain variant | ✅ | |
| `minecraft:ruined_portal_ocean` | Ruined portal, underwater variant | ✅ | |
| `minecraft:village_*` | Inhabited villages (plains/desert/savanna/taiga/snowy) | ⬜ | |
| `minecraft:pillager_outpost` | Pillager tower + tents | ⬜ | |
| `minecraft:bastion_remnant` | Nether bastion (piglins) | ⬜ | |
| `minecraft:fortress` | Nether fortress (blazes/wither skeletons) | ⬜ | |
| `minecraft:monument` | Ocean monument (guardians) | ⬜ | |
| `minecraft:mansion` | Woodland mansion (illagers) | ⬜ | |
| `minecraft:trail_ruins` | Buried archaeology ruins | ⬜ | |
| `minecraft:end_city` | End city tower | ⬜ | |

## YUNG's Better Dungeons (`betterdungeons`)

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `betterdungeons:small_dungeon` | Redesigned small mob dungeon | ✅ | |
| `betterdungeons:zombie_dungeon` | Zombie-themed dungeon | ✅ | |
| `betterdungeons:skeleton_dungeon` | Skeleton-themed dungeon | ✅ | |
| `betterdungeons:spider_dungeon` | Spider-themed cave dungeon | ✅ | |
| `betterdungeons:small_nether_dungeon` | Small Nether dungeon | ✅ | |

## Dungeons and Taverns (`nova_structures`)

Currently allowed — crypts / graveyards / ruins / illager dungeons:

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `nova_structures:undead_crypt` | Undead crypt dungeon | ✅ | |
| `nova_structures:creeping_crypt` | Overgrown crypt | ✅ | |
| `nova_structures:remnant_graveyard` | Ruined graveyard | ✅ | |
| `nova_structures:remnant_birch_graveyard` | Ruined graveyard, birch | ✅ | |
| `nova_structures:desert_ruins` | Ruined desert structure | ✅ | |
| `nova_structures:jungle_ruins` | Ruined jungle structure | ✅ | |
| `nova_structures:wild_ruin` | Generic overgrown ruin | ✅ | |
| `nova_structures:ruin_town` | Ruined/abandoned town | ✅ | |
| `nova_structures:conduit_ruin` | Underwater conduit ruin | ✅ | |
| `nova_structures:toxic_lair` | Toxic/poison-themed lair | ✅ | |
| `nova_structures:bunker` | Underground bunker | ✅ | |
| `nova_structures:deepslate_camp` | Deepslate-level camp | ✅ | |
| `nova_structures:badlands_miner_outpost` | Abandoned miner outpost | ✅ | |
| `nova_structures:stray_fort` | Snowy stray fort | ✅ | |
| `nova_structures:lone_citadel` | Isolated citadel/tower | ✅ | |
| `nova_structures:illager_hideout` | Illager hideout dungeon | ✅ | |
| `nova_structures:illager_manor` | Illager manor | ✅ | |

Currently excluded — taverns / wells / firewatch towers / inhabited & decorative
remnants / nether / end:

| ID(s) | What it is | Current | Decide |
|-------|------------|:------:|:------:|
| `nova_structures:tavern_*` | Biome taverns (oak/birch/spruce/…); social hubs | ⬜ | |
| `nova_structures:village_*`, `hamlet` | Inhabited villages | ⬜ | |
| `nova_structures:well_*` | Decorative wells | ⬜ | |
| `nova_structures:firewatch_tower_*` | Firewatch lookout towers | ⬜ | |
| `nova_structures:witch_villa`, `mangrove_witch_hut` | Witch dwellings | ⬜ | |
| `nova_structures:remnant_*` (village/farm/smith/sawmill/ranch/…) | Decorative village remnants (non-graveyard) | ⬜ | |
| `nova_structures:illager_camp`, `skeleton_camp_*`, `piglin_camp` | Surface mob camps | ⬜ | |
| `nova_structures:nether_keep`, `nether_port`, `nether_skeleton_tower_*` | Nether structures | ⬜ | |
| `nova_structures:piglin_donjon`, `piglin_outstation` | Piglin structures | ⬜ | |
| `nova_structures:end_castle`, `end_lighthouse`, `end_ship` | End structures | ⬜ | |
| `nova_structures:trident_trial_monument`, `shrine_combat_tier_*`, `shrine_tower` | Combat-trial shrines | ⬜ | |
| `nova_structures:underground_house` | Small underground home | ⬜ | |

## L_Ender's Cataclysm (`cataclysm`)

Boss/mini-boss arenas. Currently allowed — the abandoned/cursed/ruined ones:

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `cataclysm:abandoned_spire` | Abandoned tower spire | ✅ | |
| `cataclysm:abandoned_temple` | Abandoned temple | ✅ | |
| `cataclysm:abandoned_village` | Abandoned village ruins | ✅ | |
| `cataclysm:cursed_pyramid` | Cursed pyramid (Pharaoh boss) | ✅ | |
| `cataclysm:ruined_citadel` | Ruined citadel | ✅ | |
| `cataclysm:sunken_city` | Sunken underwater city (Leviathan) | ✅ | |
| `cataclysm:frosted_prison` | Frozen prison (Maledictus boss) | ✅ | |

Currently excluded — active/inhabited or non-undead-themed sites:

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `cataclysm:acropolis` | The Ancient Remnant arena | ⬜ | |
| `cataclysm:amethyst_nest` | Amethyst crab nest | ⬜ | |
| `cataclysm:ancient_factory` | Redstone factory (Coralius/Netherite Monstrosity) | ⬜ | |
| `cataclysm:burning_arena` | Lava arena (Ignis boss) | ⬜ | |
| `cataclysm:desert_occupied_village`, `desert_site` | Inhabited/active desert sites | ⬜ | |
| `cataclysm:desert_temple`, `soul_black_smith` | Misc themed sites | ⬜ | |

## When Dungeons Arise: Seven Seas (`dungeons_arise_seven_seas`)

Pirate ships — thematic for `dead_beard`. (Note: the **base** When Dungeons
Arise mod doesn't appear to be in the pack, only this addon — flagged separately
from #106.)

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `dungeons_arise_seven_seas:pirate_junk` | Pirate junk ship | ✅ | |
| `dungeons_arise_seven_seas:corsair_corvette` | Corsair corvette warship | ✅ | |
| `dungeons_arise_seven_seas:unicorn_galleon` | Large galleon | ✅ | |
| `dungeons_arise_seven_seas:victory_frigate` | Frigate warship | ✅ | |
| `dungeons_arise_seven_seas:small_yacht` | Small yacht | ✅ | |

## Underground Village / Stoneholm (`underground_village`)

Inhabited underground villages — **excluded** (don't want undead spawning among
villagers); listed for completeness.

| ID | What it is | Current | Decide |
|----|------------|:------:|:------:|
| `underground_village:underground_village` | Inhabited underground village | ⬜ | |
| `underground_village:underwater_village` | Inhabited underwater village | ⬜ | |

## Other structure mods (no IDs added)

- **Towns and Towers** (`t_and_t`) — pillager camps/towers and village
  variants; inhabited/active, **excluded**.
- **CTOV — Overhaul Village** (`ctov`) — village overhaul, inhabited,
  **excluded**.
- **Terralith** (`terralith`) — mostly biome/terrain gen; its handful of
  structures are natural landmarks rather than dungeons, **excluded**. Revisit if
  any read as ruins worth including.

---

## Open questions for review

1. **Witch dwellings** — vanilla `swamp_hut` is allowed, but DnT's `witch_villa`
   / `mangrove_witch_hut` are not. Keep consistent (both, or neither)?
2. **Cataclysm boss arenas** — extra undead spawns inside boss rooms could make
   those fights messier. Keep the abandoned/ruined ones, or drop Cataclysm
   entirely to leave its arenas to their own mobs?
3. **Surface mob camps** (`skeleton_camp_*`, `illager_camp`, `deepslate_camp`) —
   `deepslate_camp` is currently in; the surface camps are out. Right call?
4. ~~**Per-mob theming**~~ — **Resolved (zagwar):** split per mob. See the
   resolution table at the top; `spawn.json` now has one rule set per mob.
   Pirate ships were dropped for `dead_beard` (ocean ruins + conduit ruin
   instead); Cataclysm arenas dropped entirely.
