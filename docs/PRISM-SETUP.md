# Installing Derpack X: Create in Prism Launcher

Step-by-step for players. If you've imported a Prism instance before, you can skim — it's just "Add Instance → Import from zip → done."

## What you need

- [Prism Launcher](https://prismlauncher.org/) (free, open source — works on Windows, Mac, Linux)
- A Mojang or Microsoft Minecraft account
- Java 21 (Prism will offer to download this for you if missing)
- ~12 GB of free disk space (mods + worlds add up)
- 8 GB+ of RAM ideally (the pack uses 8–12 GB)

## Pick which download

The release page has multiple files. Pick **one**:

### `derpack-x-create-prism-bundled-X.Y.Z.zip` (recommended)

The full pack with mod jars baked in. Big download (~500 MB) but works offline once installed. Easiest option.

### `derpack-x-create-prism-installer-X.Y.Z.zip`

Smaller download (~5 MB). The first launch downloads all mods automatically. Every future launch checks for updates and syncs them. Use this if you want to stay current without re-downloading zips.

### `derpack-x-create-X.Y.Z.mrpack`

For Modrinth app users, or if you want to import via Prism's "Import from Modrinth" option. Roughly equivalent to the installer variant.

## Install (bundled or installer Prism zip)

1. Download the zip from the [latest release](../../releases).
2. Open Prism Launcher.
3. Click **Add Instance** in the top-left.
4. Click **Import from zip** in the sidebar.
5. Click **Browse** and select the zip.
6. Click **OK**.

Prism will unpack everything. You'll see a new instance in your list named "Derpack X: Create X.Y.Z".

## Install (.mrpack)

1. Click **Add Instance** → **Import from zip**.
2. Select the `.mrpack` file.
3. Prism will detect it and unpack.

Same result.

## First launch

Click the instance, click **Launch**. First time:

- If you don't have Java 21, Prism will prompt to download it (do it).
- For the **installer** variant, the first launch will pause for a minute or two while it downloads mods. Subsequent launches are instant.
- The Minecraft window opens. Log in if prompted.

## Updating to a new release

### Bundled variant
Download the new zip, import as a new instance, copy your saves over from the old one. Or replace the existing instance — but back up `saves/` first.

### Installer variant
Just launch. It auto-syncs to the latest release at the configured pack URL.

## Memory and Java args

The instance comes pre-configured: 8 GB min / 12 GB max, Aikar's flags applied. If your machine has less than 12 GB total RAM, lower the max:

- Right-click instance → **Edit Instance** → **Settings** → **Java**
- Set **Maximum memory allocation** to something safe (4096–6144 MB on a low-RAM box)
- Don't go below 4096 MB — the pack will OOM.

## Troubleshooting

**"Java version mismatch" or refuses to launch.** Install Java 21 (Prism's auto-download is the easiest path).

**Crashes immediately on world load.** Open `.minecraft/logs/latest.log` and search for `Caused by`. Most pack crashes are mod conflicts or out-of-memory. Send the log file to the pack maintainer.

**Airships render weirdly with shaders enabled.** Known issue — Aeronautics has visual bugs with Iris/Oculus. Disable shaders when flying.

**Random mod misbehaves on a moving ship (sounds wrong, mob can't pathfind, etc).** This is what `aeronauticscompat` is supposed to fix; if a specific mod is still broken, mention it in the issue tracker and we can flag it for the Aeronautics team.

**Server pack instead?** See the `derpack-x-create-server-X.Y.Z.zip` on the release page — that's for hosting, not for clients.
