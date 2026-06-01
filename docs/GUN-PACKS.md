# Gun integration — TaCZ + Create

Derpack-X's gun system is built on **TaCZ** (Timeless and Classics Zero), with two add-ons that tie
guns into Create:

| Piece | What it is | Source | Delivery |
|---|---|---|---|
| **TaCZ** | base gun framework | Modrinth `tacz` | `mods/tacz-1.21.1.pw.toml` |
| **Create: Immersive TaCZ** | Create recipes for TaCZ guns/ammo/attachments — gunpowder & nitropowder *fluids*, casings + fluid-fill, barrels/triggers/primers, scopes/mags/grips | Modrinth `create-immersive-tacz-integration` | `mods/…` (added via the `add-mod` CI workflow) |
| **Create: Armorer** | a TaCZ *gun pack* — Create-themed guns/ammo/models | CurseForge `tacz-create-armorer-koei` (file 7598625), **CC BY-NC-ND 4.0**, by **Koei** ([source](https://space.bilibili.com/407541278)) | committed zip `tacz/Create_Armorer-v1.2.0.1.zip` → `.minecraft/tacz/` |

> Replaces the abandoned **Create: TaCZ** (`tacz-create`), which was never updated to MC 1.21.1 (issue #27).

## How gun packs are delivered

TaCZ loads gun packs from `.minecraft/tacz/` (it reads both folders **and** `.zip` files there).
Unlike mods (which land in `mods/`), a gun pack must land in that folder.

**We commit the gun-pack zip directly into the repo `tacz/` folder.** The packwiz *metafile* approach
(a `tacz/*.pw.toml` pointing at the mod-mirror release) was tried first and **did not deliver
reliably** — packwiz-installer / some `.mrpack` launchers don't place files under non-standard paths
like `tacz/`, so the zip silently never arrived. Committing it makes delivery deterministic:

- `tacz/Create_Armorer-v1.2.0.1.zip` is a normal committed file. `packwiz refresh` indexes it, so
  the `.mrpack` carries it as an **override** → `.minecraft/tacz/`.
- For the Prism builds, `scripts/build-prism-skeleton.sh` and `scripts/build-server.sh` include
  `tacz` in their copy loop, so the zip is copied into `.minecraft/tacz/` directly.
- CC BY-NC-ND 4.0 permits **verbatim** redistribution: commit the zip **unmodified**, keep
  attribution (Koei), non-commercial only.

### Adding / updating a gun pack

1. Drop the gun-pack zip (unmodified) into `tacz/` in the repo.
2. Run `packwiz refresh` (the editor / CI) so it's indexed in `index.toml`.
3. Confirm `tacz` is in the copy loops of `build-prism-skeleton.sh` + `build-server.sh`.

## Removing the stock TaCZ guns (Armorer-only)

We want **only** Create: Armorer's guns — not TaCZ's built-in stock pack (AK/M4/etc.). TaCZ has
**no config flag to disable default guns** (upstream marked it wontfix, issue #267).

A first attempt — `config/tacz-pre.toml` `DefaultPackDebug=true` + an emptied
`tacz/tacz_default_gun/` override — **did not work**: `DefaultPackDebug` only stops TaCZ
*overwriting* an existing pack, not *generating* an absent one, so deleting the folder just makes
TaCZ regenerate the full default pack. (Removed.)

Reliable approach instead — **remove the stock guns' crafting recipes in KubeJS**
(`kubejs/server_scripts/remove-default-tacz-guns.js`):

```js
ServerEvents.recipes(e => e.remove({ type: 'tacz:gun_smith_table_crafting', id: /^tacz:/ }))
```

The stock guns' recipes are `tacz:gun_smith_table_crafting` recipes in the `tacz` namespace;
Create: Armorer's are in the `create_armorer` namespace, so the `id` filter kills every stock-gun
craft while leaving Armorer. This ships via `kubejs/` (reliably delivered) and is independent of
pack-folder / instance state.

> **Caveat:** the stock gun *items* still exist in the creative tab — this removes their *crafting*
> only. Fully hiding them from the gunsmith table would need a working pack-disable, which TaCZ
> doesn't cleanly support.

> **Verify in-game:** the gunsmith table offers **only** Create: Armorer guns to craft; no stock
> AK/M4/Glock recipes. (Requires that `tacz:gun_smith_table_crafting` recipes load into the recipe
> manager — confirm none reappear after a `/reload`.)

## Crafting design — Create-gated, assembled at the gun smith table

Every Armorer gun, ammo round, and attachment is **gated behind Create**: the ingredients are Create
parts and processed metals, so you can't make a gun without first building out a Create line. This is
the gun branch of the pack's Create-driven scarcity economy (see `DESIGN.md`).

**Where each thing is crafted:**

- **Guns / ammo / attachments** — at the **TaCZ gun smith table** (`tacz:gun_smith_table_crafting`
  recipes shipped in `tacz/Derpack_Armorer_Recipes.zip`, namespace `derpack_armorer`). The table is
  the assembly bench; its recipes list the Create parts each item needs.
- **The three core gun parts** — `gun_barrel`, `gun_trigger`, `firing_mechanism` (and `primer`) — via
  **plain shaped recipes** in `kubejs/data/derpack/recipe/`. They're shaped (not Create
  `mechanical_crafting`) **on purpose**: Immersive TaCZ's own `mechanical_crafting` recipes load but
  don't render in EMI on this Create build, so vanilla shaped recipes guarantee they're discoverable.
  The *ingredients* are still all Create/processed-metal, so the Create gating holds.
- **Immersive TaCZ's native Create tree** (mixing→fluid→filling→primer→casing→ammo, and
  `mechanical_crafting` guns) still loads as a parallel path (see *Compat overlays*); it just isn't
  the discoverable one, so we don't rely on it.

### Recipe themes

Recipes are **not formulaic** — each item is themed, leaning on the wider Create ecosystem so the
parts *read* like what they build. We start from Immersive TaCZ's own (already hand-themed) ingredient
sets and deepen them:

| Item | Theme / signature ingredients |
|---|---|
| **Gun barrel** | a bored **steel** tube — `c:ingots/steel` ring + a Create Addition iron rod (the bore) |
| **Trigger** | fine mechanism — brass sheets + precision mechanism + Create Addition copper wire |
| **Firing mechanism** | the striker — Create **deployer** + **rotation speed controller** + cogwheels + flint & steel |
| **Sidearms / SMG** | lightweight **TFMG aluminum** frames + Create Addition metal rods |
| **Snipers** | **electrum** precision optics mount + extra steel |
| **Flywheel MG** | a Create **flywheel** + an **Aeronautics propeller bearing** (rotary feed) |
| **40mm Cannon** | flagship: **7 barrels**, a wall of steel, aluminum frames, and exotic **Aeronautics levitite** |
| **Scopes / sights** | glass panes + brass; the telephoto scope uses **Aeronautics aviator's goggles** |
| **Grips** | each matches its name — gantry-shaft grip→gantry shafts, fluid-pipe grip→fluid pipes, etc. |
| **Mags** | tiered — brass sheet → +diamond → +netherite for the three extended mags |
| **Ammo** | HE = steel + heavy powder; AP (`rbapb`) = **diamond-grit** core; pneumatic = copper; etc. |

All ingredient ids are verified against the actual mod jars (`createaddition`, `tfmg`, `aeronautics`,
`create_ironworks`/steel tag, plus base Create). Cross-mod parts are accessible Create products
(pressed sheets, drawn wire, alloys) — nothing requires a separate deep tech tree.

### Difficulty intent

Guns are meant to be **a mid-to-late-game investment, not a quick craft** — deliberately costed 2-3
notches above a "convert the original recipe" baseline:

- **The components carry the cost.** Every gun needs a barrel (**8 steel** each), a trigger
  (brass + precision mechanism), and a firing mechanism (a **deployer + rotation speed controller** —
  itself several precision mechanisms). So even a pistol is a real Create commitment, and barrels
  scale brutally on multi-barrel guns.
- **Bulk doubled, specials kept lean.** Filler metals/wood are roughly ×2 over the author's baseline;
  structural/rare parts (barrels, the flywheel, levitite, electrum, propeller bearing) stay at sane
  counts so recipes get *heavier*, not *grindier-on-one-item*.
- **The 40mm cannon is an intentional megaproject** — ~70 steel all-in (7 barrels + a steel wall) plus
  levitite. It should feel like building a field gun, because it is one.
- **Ammo runs lean** — small batch yields with steel/powder inputs, so feeding the guns is its own
  ongoing Create-production task rather than a one-off.

Tuning lives entirely in the generator inputs (`GUN_ENH` per-gun tables, the `scale_gun`/`scale_att`
multipliers, and the `AMMO` table) — costs can be re-balanced per tier without touching item ids.

## Compat overlays — `kubejs/data/` (Immersive TaCZ + Armorer fixes)

Both upstream packs ship data that's broken on our MC 1.21.1 / NeoForge / Create 6.0.10 target. We fix
each with **same-id `kubejs/data` overrides** (KubeJS's datapack outranks the source, so our corrected
file shadows the broken one — it's never parsed, so no datapack error), generated mechanically from
the originals so they stay faithful. We never edit the source packs (Create: Armorer is **CC BY-NC-ND**
— no derivatives).

**Immersive TaCZ — `kubejs/data/createimmersivetacz/recipe/…`:**

1. **Invalid fluid declarations (`{"type":"fluid_stack"}`) — 8 recipes.** Not valid on NeoForge, so the
   whole recipe is rejected; the foundational `gunpowder_fluid` + `primer` being dead killed the entire
   native ammo tree. Fixed per context (verified against Create 6.0.10): fluid **ingredient** (filling)
   → `{"type":"neoforge:single",…}`; fluid **result** (mixing) → `{"amount":N,"id":…}`.
2. **Malformed JSON — `guns/lmg.json`** had a stray trailing `}`, so the Flywheel LMG never parsed —
   override removes the extra brace.
3. **Schema** — `category` + result `count` added to match Create 6.0.10's own recipes.

**Create: Armorer — `kubejs/data/create_armorer/data/blocks/create_workbench.json`:** the themed
workbench's tab icons used 1.20-era `{"item":…,"nbt":…}`; 1.21 needs `{"id":…,"components":…}`.
TaCZ logged a hard `BlockDataLoader`/`BlockIndexLoader` error for `create_armorer:create_workbench` —
the override rewrites every tab icon to the component form, clearing the error.

> Regenerate after a mod update: re-run the recipe generator (it reads the `createimmersivetacz` and
> `create_armorer` data straight from the jars/zip), re-validate JSON, then `packwiz refresh`.

## Verify in-game

- Create recipes for TaCZ ammo/casings/components appear in JEI and craft via Create
  (mixing / filling / pressing).
- Create: Armorer guns appear in the TaCZ gunsmith table / creative tab (loaded from
  `.minecraft/tacz/`) — e.g. the Salamander 40mm field cannon, Classic M1, Burster grenade launcher.
- No registry/datapack errors in the log.

> **Version note:** gun packs are bound to the **TaCZ** version, not Minecraft — they're JSON +
> models/textures/sounds/animations/scripts read by TaCZ, with no compiled code. Create: Armorer
> 1.2.0.1 targets **TaCZ 1.1.7** (= our `tacz-…-1.1.7-hotfix-r5`) and uses current TaCZ features
> (LOD models, scripts, state machines), so a CurseForge MC-version tag for an older MC is not a
> blocker. If the hotfix tweaked any schema field, TaCZ skips just the affected entry (lenient
> parser) rather than crashing — confirm by playtest.

> **Verification items:** confirm packwiz indexes a metafile under `tacz/` and that the `.mrpack`
> export carries it; if not, fall back to committing the zip into a repo `tacz/` folder and adding
> `tacz` to the copy loop in `scripts/build-prism-skeleton.sh`.
