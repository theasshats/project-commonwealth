# Installing Derpack X in Prism Launcher

Step-by-step for players. If you've imported a Prism instance before, you can skim — it's just "Add Instance → Import from zip → done."

## What you need

- [Prism Launcher](https://prismlauncher.org/) (free, open source — works on Windows, Mac, Linux)
- A Mojang or Microsoft Minecraft account
- Java 21 (Prism will offer to download this for you if missing)
- ~12 GB of free disk space (mods + worlds add up)
- 8 GB+ of RAM ideally (the pack uses 8–12 GB)
- An internet connection for the first launch (mods are fetched from Modrinth/CurseForge)

## The download

### `derpack-x-prism-installer-X.Y.Z.zip`

A small (~5 MB) Prism instance configured to fetch all mod jars on first launch. Every future launch checks for updates and syncs them automatically. This is the only release artifact — we no longer ship a `.mrpack` (it had bloated to ~200 MB and nobody used it).

## Install (Prism installer zip)

1. Download the zip from the [latest release](../../releases).
2. Open Prism Launcher.
3. Click **Add Instance** in the top-left.
4. Click **Import from zip** in the sidebar.
5. Click **Browse** and select the zip.
6. Click **OK**.

Prism will unpack the instance scaffold (it's small — no jars yet). You'll see a new instance in your list named "Derpack X X.Y.Z".

## First launch

Click the instance, click **Launch**. First time:

- If you don't have Java 21, Prism will prompt to download it (do it).
- The first launch will pause for a minute or two while it downloads all the mods. The Prism log shows what's being fetched. Subsequent launches are instant.
- The Minecraft window opens. Log in if prompted.

## Updating to a new release

The installer-style instance auto-syncs to the latest release at the configured pack URL — just launch and any new mods, version bumps, or removals are pulled in. Worlds and saves are untouched.

If you want to pin to a specific old release for some reason, edit the pack URL in the instance's pre-launch script.

## Memory and Java args

The instance comes pre-configured: 8 GB min / 12 GB max, Aikar's flags applied. If your machine has less than 12 GB total RAM, lower the max:

- Right-click instance → **Edit Instance** → **Settings** → **Java**
- Set **Maximum memory allocation** to something safe (4096–6144 MB on a low-RAM box)
- Don't go below 4096 MB — the pack will OOM.

## Troubleshooting

**"Java version mismatch" or refuses to launch.** Install Java 21 (Prism's auto-download is the easiest path).

**First launch fails to download mods.** Check your internet, then check the launch log for which mod the fetch failed on. Modrinth/CurseForge are usually reliable, but rate-limiting or temporary outages happen. Retrying usually works.

**Crashes immediately on world load.** Open `.minecraft/logs/latest.log` and search for `Caused by`. Most pack crashes are mod conflicts or out-of-memory. Send the log file to the pack maintainer.

**Airships render weirdly with shaders enabled.** Known issue — Aeronautics has visual bugs with Iris/Oculus. Disable shaders when flying.

**Random mod misbehaves on a moving ship (sounds wrong, mob can't pathfind, etc).** This is what `aeronauticscompat` is supposed to fix; if a specific mod is still broken, mention it in the issue tracker and we can flag it for the Aeronautics team.

**Server pack instead?** Server distribution is currently disabled — see the README for status.
