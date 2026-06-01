# Gun integration — TaCZ + Create

Derpack-X's gun system is built on **TaCZ** (Timeless and Classics Zero), with two add-ons that tie
guns into Create:

| Piece | What it is | Source | Delivery |
|---|---|---|---|
| **TaCZ** | base gun framework | Modrinth `tacz` | `mods/tacz-1.21.1.pw.toml` |
| **Create: Immersive TaCZ** | Create recipes for TaCZ guns/ammo/attachments — gunpowder & nitropowder *fluids*, casings + fluid-fill, barrels/triggers/primers, scopes/mags/grips | Modrinth `create-immersive-tacz-integration` | `mods/…` (added via the `add-mod` CI workflow) |
| **Create: Armorer** | a TaCZ *gun pack* — Create-themed guns/ammo/models | CurseForge `tacz-create-armorer-koei` (file 7598625), **CC BY-NC-ND 4.0**, by **Koei** ([source](https://space.bilibili.com/407541278)) | `tacz/create-armorer.pw.toml` → `.minecraft/tacz/` |

> Replaces the abandoned **Create: TaCZ** (`tacz-create`), which was never updated to MC 1.21.1 (issue #27).

## How gun packs are delivered

TaCZ loads gun packs from `.minecraft/tacz/`. Unlike mods (which land in `mods/`), a gun pack must
land in that folder, so we ship it with a packwiz **metafile placed in a `tacz/` folder**:

- `tacz/create-armorer.pw.toml` points `[download] url` at the zip mirrored on the GitHub
  `mod-mirror` release (same pattern as `mods/ars-n-spells.pw.toml`). packwiz-installer fetches it
  to `.minecraft/tacz/create_armorer-1.2.0.1.zip` on **both client and server** — no build-script
  changes needed (`.packwizignore` does not exclude `tacz/`).

### Adding / updating a gun pack

1. Upload the gun-pack zip as an asset on the `mod-mirror` GitHub release (lowercase-underscore
   name + version, e.g. `create_armorer-1.2.0.1.zip`). CC BY-NC-ND 4.0 permits **verbatim**
   redistribution: mirror the zip **unmodified**, keep attribution (Koei), and only for a
   **non-commercial** (free) pack.
2. Create `tacz/<name>.pw.toml` with `filename`, `side = "both"`, `pin = true`, and a `[download]`
   block (`url` + `hash-format`/`hash`).
3. Run `packwiz refresh` (the `refresh` or `add-mod` CI workflow, or the editor) so the file is
   indexed in `index.toml`.

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
