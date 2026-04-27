# Mod list

Everything currently in the pack, grouped by purpose. Edit this file when you add or remove mods so it stays accurate (it's not auto-generated — `mods/*.pw.toml` is the source of truth, this is the human view).

## Required (Aeronautics core)

These four are the whole reason this pack exists. Don't remove them.

| Mod | Source | Notes |
|-----|--------|-------|
| Create | Modrinth | The base Create mod (gears, belts, contraptions). |
| Sable | Modrinth | Physics library that Aeronautics builds on. |
| Create Aeronautics | Modrinth | The main event — airships, planes, vehicles. |
| Create Aeronautics: Compatability | CurseForge | Patches other mods to play nice with physics ships. |

## Performance

| Mod | Source | Notes |
|-----|--------|-------|
| Embeddium | Modrinth | Sodium fork for NeoForge (huge FPS boost). |
| Embeddium++ | Modrinth | Extra Embeddium tuning options. |
| FerriteCore | Modrinth | Cuts memory usage. |
| Modernfix | Modrinth | Misc memory + load-time fixes. |
| Saturn | Modrinth | GC and allocation tuning. |
| Oculus | Modrinth | Shader support. **Note:** Aeronautics has known visual bugs with shaders. |

## Quality of life

| Mod | Source | Notes |
|-----|--------|-------|
| JEI | Modrinth | Recipe viewer. Press R on an item to see how to make it. |
| Jade | Modrinth | Tooltip showing what block you're looking at. |
| Mouse Tweaks | Modrinth | Inventory drag-to-fill, etc. |
| Xaero's Minimap | Modrinth | Minimap. |
| Xaero's World Map | Modrinth | Full map (press M). |
| Inventory Profiles Next | Modrinth | Auto-sort + saved inventory presets. |

## Create addons

| Mod | Source | Notes |
|-----|--------|-------|
| Create: Steam 'n' Rails | Modrinth | More trains, rolling stock, signaling. |
| Create: New Age | Modrinth | Adds electricity to Create. |
| Create: Enchantment Industry | Modrinth | Auto-enchanting via Create. |
| Create: Diesel Generators | CurseForge | Internal combustion engines. |

## Adventure / content

| Mod | Source | Notes |
|-----|--------|-------|
| Alex's Mobs | Modrinth | More animals and creatures. |
| Farmer's Delight | Modrinth | Cooking expansion. |
| Sophisticated Backpacks | Modrinth | Customizable backpacks. |
| Iron's Spells 'n Spellbooks | Modrinth | Magic + spellcasting. |
| Cataclysm | Modrinth | Bosses and dungeons. |
| Supplementaries | Modrinth | Decoration blocks. |

## Not yet added (under consideration)

- **Apotheosis** — loot/enchantment overhaul. Adds depth but also complexity.
- **Better Combat** — changes how melee feels. Some people love it, some hate it.
- **Distant Horizons** — extreme render distance. Heavy on the GPU but cool.

If you want to add one of these, see [`EDITING.md`](EDITING.md).

## How to read the source of truth

Each mod corresponds to a file in `mods/<slug>.pw.toml`. Open one and you'll see:

```toml
name = "Just Enough Items"
filename = "jei-1.21.1-neoforge-19.21.0.247.jar"
side = "both"

[download]
url = "https://cdn.modrinth.com/data/.../jei-...jar"
hash = "..."
```

`side` is one of `client`, `server`, or `both`. Use `both` unless you know it's only needed on one side (e.g. JEI is `both` because the server uses it for tag synchronization, even though only the client renders the GUI).

You almost never edit these files directly — the `packwiz add` command writes them.
