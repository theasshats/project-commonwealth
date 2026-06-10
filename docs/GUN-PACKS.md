# Gun integration — TaCZ + Create

Project Commonwealth's gun system is built on **TaCZ** (Timeless and Classics Zero), with two add-ons that tie
guns into Create:

| Piece | What it is | Source | Delivery |
|---|---|---|---|
| **TaCZ** | base gun framework | Modrinth `tacz` | `mods/tacz-1.21.1.pw.toml` |
| **Create: Immersive TaCZ** | Create recipes for TaCZ guns/ammo/attachments — gunpowder & nitropowder *fluids*, casings + fluid-fill, barrels/triggers/primers, scopes/mags/grips | Modrinth `create-immersive-tacz-integration` | `mods/…` (added via the editor) |
| **Create: Armorer** | a TaCZ *gun pack* — Create-themed guns/ammo/models | CurseForge `tacz-create-armorer-koei` (file 7598625), **CC BY-NC-ND 4.0**, by **Koei** ([source](https://space.bilibili.com/407541278)) | committed zip `tacz/Create_Armorer-v1.2.0.1.zip` → `.minecraft/tacz/` |

> Replaces the abandoned **Create: TaCZ** (`tacz-create`), which was never updated to MC 1.21.1 (issue #27).

## How gun packs are delivered

TaCZ loads gun packs from `.minecraft/tacz/` (it reads both folders **and** `.zip` files there).
Unlike mods (which land in `mods/`), a gun pack must land in that folder.

**We commit the gun-pack zip directly into the repo `tacz/` folder.** The packwiz *metafile* approach
(a `tacz/*.pw.toml` pointing at the mod-mirror release) was tried first and **did not deliver
reliably** — packwiz-installer doesn't place files under non-standard paths like `tacz/`, so the zip
silently never arrived. Committing it makes delivery deterministic:

- `tacz/Create_Armorer-v1.2.0.1.zip` is a normal committed file that `packwiz refresh` indexes, so
  packwiz-installer pulls it on update like any other tracked file.
- For built instances, `tacz` is listed in `scripts/instance-dirs.txt` (`tacz both`) — the single
  source of truth all three builders read (`build-prism-skeleton.sh`, `build-server.sh`, and the
  editor) — so the zip is copied into `.minecraft/tacz/` directly.
- CC BY-NC-ND 4.0 permits **verbatim** redistribution: commit the zip **unmodified**, keep
  attribution (Koei), non-commercial only. ⚠️ **ND means NO in-repo edits to the zip — ever.** A
  two-line data fix (explosive shells' missing `destroy_block` flag) was committed and same-day
  reverted in v0.7.0 once this clause was checked; the compliant paths (upstream ask / TaCZ-side
  override / self-authored override pack) are tracked in **#308**. If a change inside the zip looks
  necessary, it goes through #308's options, not an edit.

### Adding / updating a gun pack

1. Drop the gun-pack zip (unmodified) into `tacz/` in the repo.
2. Run `packwiz refresh` (the editor / CI) so it's indexed in `index.toml`.
3. Confirm `tacz` is in the copy loops of `build-prism-skeleton.sh` + `build-server.sh`.

## Disabling the gun smith table (Create-only crafting)

Guns, ammo, and attachments are meant to be **Create-gated** — crafted through the Create recipes
below, not assembled at the TaCZ gun smith table. The table is a bypass around that gating (and it
also offers TaCZ's stock AK/M4/etc.), so we turn it off entirely — in
`kubejs/server_scripts/remove-default-tacz-guns.js`:

```js
ServerEvents.recipes(event => {
  event.remove({ type: 'tacz:gun_smith_table_crafting' })  // every gun/ammo/attachment off the benches
  // Remove the four table-block crafts too, so nobody builds a bench that crafts nothing.
  const taczTables = ['tacz:gun_smith_table', 'tacz:workbench_a', 'tacz:workbench_b', 'tacz:workbench_c']
  taczTables.forEach(id => event.remove({ output: id }))
})
```

This pack ships **four** TaCZ table-block variants — all driven by the same
`tacz:gun_smith_table_crafting` recipes (so the recipe-type removal empties every tab on every one):

- `tacz:gun_smith_table` — the **gun crafting table** (stock)
- `tacz:workbench_a` — the **attachment table**
- `tacz:workbench_b` — the **Create: Armorer table** (create-themed `create_armorer:create_workbench`, all 12 tabs)
- `tacz:workbench_c` — the **ammo table**

(`tacz:workbench_b` was also crafted by our old `kubejs/data/pcmc/recipe/create_workbench.json`, now deleted.)

`tacz:gun_smith_table_crafting` is a **real custom recipe type registered in the vanilla
`RecipeManager`**, so KubeJS's `event.remove` *does* match it — this is the **same call that already
removed TaCZ's stock default guns** (the `tacz` namespace); we just drop the namespace filter so it
clears every namespace, including Create: Armorer (`create_armorer`). The Create
recipes are a **different** type (`create:mechanical_crafting` / `mixing` / `filling` / `cutting` / …),
so they're untouched. A previously committed datapack of custom Armorer table recipes was
dropped — redundant once those recipes are removed at load.

> **Caveat:** the gun *items* still exist in the creative tab; this only removes the survival craft.
> **Verify in-game:** the gun smith table's tabs are empty (no guns/ammo/attachments to craft), and
> every Armorer item is instead craftable through its Create recipe (below).

## Crafting design — Create-gated, crafted through Create

Every Armorer gun, ammo round, and attachment is **gated behind Create**: the ingredients are Create
parts and processed metals, so you can't make a gun without first building out a Create line. This is
the gun branch of the pack's Create-driven scarcity economy (see `DESIGN.md`).

**Where each thing is crafted:**

- **Guns / ammo / attachments** — through **Immersive TaCZ's Create recipes**
  (`kubejs/data/createimmersivetacz/…`): `mechanical_crafting` for guns, mixing→fluid→filling→casing
  for ammo, and the attachment recipes. These produce the same `create_armorer:*` items the bench used
  to, and they render in **JEI** (the recipe viewer the pack switched to precisely because EMI can't
  draw Create processing recipes). The gun smith table is **disabled** (above), so this is the only path.
- **The three core gun parts** — `gun_barrel`, `gun_trigger`, `firing_mechanism` (and `primer`) — via
  **plain shaped recipes** in `kubejs/data/pcmc/recipe/`. Shaped (not Create `mechanical_crafting`)
  so they're trivially discoverable; the *ingredients* are still all Create/processed-metal, so the
  Create gating holds.

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

- Create recipes for Armorer guns/ammo/attachments/components appear in **JEI** and craft via Create
  (mechanical crafting / mixing / filling / pressing).
- Create: Armorer gun *items* exist (creative tab + loaded from `.minecraft/tacz/`) — e.g. the
  Salamander 40mm field cannon, Classic M1, Burster grenade launcher — and craft **only** through
  their Create recipe.
- The **gun smith table tabs are empty** — no guns/ammo/attachments craftable at the bench (stock
  TaCZ guns included).
- No registry/datapack errors in the log.

> **Version note:** gun packs are bound to the **TaCZ** version, not Minecraft — they're JSON +
> models/textures/sounds/animations/scripts read by TaCZ, with no compiled code. Create: Armorer
> 1.2.0.1 targets **TaCZ 1.1.7** (= our `tacz-…-1.1.7-hotfix-r5`) and uses current TaCZ features
> (LOD models, scripts, state machines), so a CurseForge MC-version tag for an older MC is not a
> blocker. If the hotfix tweaked any schema field, TaCZ skips just the affected entry (lenient
> parser) rather than crashing — confirm by playtest.

> **Verification items:** confirm `tacz/` is indexed in `index.toml` and that the committed zip is
> copied into `.minecraft/tacz/` by all three builders (it's in `scripts/instance-dirs.txt`).


## v0.7.0 state — one canonical path, tiered

- **The Mechanical Crafter is the only gun path.** The gun-smith table type and all four bench blocks
  are removed (`remove-default-tacz-guns.js`); every gun is built from Create-processed components
  (steel barrels, deployer+RSC firing mechanisms, precision triggers, fluid-filled primers).
- **Tier tokens on the guns** (`kubejs/data/createimmersivetacz/recipe/guns/`): the electric-age guns
  (SMG, both shotguns, rifles, snipers, atomic melee) carry a `createaddition:capacitor`; the three
  heavies (LMG, grenade launcher, 40mm cannon) build around a `createbigcannons:steel_autocannon_barrel`
  — the CBC↔TaCZ seam; heavy small arms grow out of the artillery industry.
- **Ammo is a four-stage line** (`.../recipe/ammo/`): casings cut from brass sheets (yields halved in
  v0.7.0), then per round: deploy primer → fill gunpowder → deploy a **lead** projectile (nuggets;
  ingots for the 40mm/grenade payloads) → crimping press. Lead demand is intentional (the lead veins).
- **Known gap:** the grenade launcher + 40mm cannon don't break blocks — diagnosed (missing per-gun
  `destroy_block`; the global TaCZ config already allows it) but the fix sits inside the ND-licensed
  zip → **#308**. Default-TaCZ JEI visibility cleanup → **#307**.
