# Installing Project Commonwealth in Prism Launcher

Step-by-step for players. If you've imported a Prism instance before, you can skim — it's just "Add Instance → Import from zip → done."

## What you need

- [Prism Launcher](https://prismlauncher.org/) (free, open source — works on Windows, Mac, Linux)
- A Mojang or Microsoft Minecraft account
- Java 21 (Prism will offer to download this for you if missing)
- ~12 GB of free disk space (mods + worlds add up)
- 8 GB+ of RAM ideally (the pack uses 8–12 GB)
- An internet connection for the first launch (mods are fetched from Modrinth/CurseForge)

## The download

### `project-commonwealth-prism-installer-X.Y.Z.zip`

A small (~5 MB) Prism instance configured to fetch all mod jars on first launch. Every future launch checks for updates and syncs them automatically. This is the only release artifact — we no longer ship a `.mrpack` (it had bloated to ~200 MB and nobody used it).

## Install (Prism installer zip)

1. Download the zip from the [latest release](../../releases).
2. Open Prism Launcher.
3. Click **Add Instance** in the top-left.
4. Click **Import from zip** in the sidebar.
5. Click **Browse** and select the zip.
6. Click **OK**.

Prism will unpack the instance scaffold (it's small — no jars yet). You'll see a new instance in your list named "Project Commonwealth X.Y.Z".

## First launch

Click the instance, click **Launch**. First time:

- If you don't have Java 21, Prism will prompt to download it (do it).
- The first launch will pause for a minute or two while it downloads all the mods. The Prism log shows what's being fetched. Subsequent launches are instant.
- The Minecraft window opens. Log in if prompted.

## Updating to a new release

The installer-style instance auto-syncs to the latest release at the configured pack URL — just launch and any new mods, version bumps, or removals are pulled in. Worlds and saves are untouched.

If you want to pin to a specific old release for some reason, edit the pack URL in the instance's pre-launch script.

## Memory and Java args

The instance ships with a safe default: **8 GB min / 12 GB max, G1GC (Aikar's flags)**. That suits a machine with 16 GB or more of system RAM. Tune it to your hardware in **Edit Instance → Settings → Java**.

### How much heap to give it

The pack's live working set is roughly **5-7 GB** at render distance 32 — most of an 8 GB heap — so the heap has to leave headroom on top of that, and **render distance is the biggest lever**: lower RD/simulation distance loads fewer chunks and entities, which shrinks the working set so a smaller heap fits.

| System RAM | Max heap (`-Xmx`) | Notes |
|---|---|---|
| 8 GB | 4-5 GB | Tight. Run **render distance 8-12**; expect GC pressure at high RD. |
| 12-16 GB | 8 GB | Comfortable at RD 12-16. The shipped default's 12 GB max is fine here too if nothing else is open. |
| 24 GB+ | 10-12 GB | Headroom for RD 32. |
| 32 GB+ | 12-16 GB | Plenty; consider the ZGC option below for smoother frames. |

Set both **Minimum** and **Maximum** memory to the chosen value (a fixed heap is steadiest). **Don't go below 4096 MB — the pack will OOM.** More than ~16 GB buys nothing: the working set doesn't need it, and a huge heap just makes garbage collection slower.

### Smoother frames on a high-RAM machine (optional, advanced)

The default G1 collector pauses the game briefly (~30 ms) every few seconds to collect garbage — usually invisible, but on a high-refresh display it can show up as a periodic dip in the 1% lows. If you have **24 GB+ of system RAM**, switching to **Generational ZGC** removes those pauses (sub-millisecond GC). It needs a larger, fixed heap to work well with this pack's high allocation rate — **don't use it below a 12 GB heap**.

In **Edit Instance → Settings → Java → JVM arguments**, replace the default args with:

```
-XX:+UseZGC -XX:+ZGenerational -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -XX:+DisableExplicitGC -XX:+PerfDisableSharedMem
```

and set min = max = 12288 (or 16384 if you have 32 GB+). Requires Java 21. If frames don't improve or RAM is tight, revert to the default — ZGC is a spend-RAM-for-smoothness trade, not a fix for low memory.

> **These settings are per-install.** Changing your instance's memory or Java args only affects your copy. The installer ships the default above for **fresh** installs; updating the pack does not change an instance you've already tuned. (Maintainers: the shipped default lives in `scripts/instance-jvm.cfg`, the single source for both the installer and the editor build.)


## Troubleshooting

**"Java version mismatch" or refuses to launch.** Install Java 21 (Prism's auto-download is the easiest path).

**First launch fails to download mods.** Check your internet, then check the launch log for which mod the fetch failed on. Modrinth/CurseForge are usually reliable, but rate-limiting or temporary outages happen. Retrying usually works.

**Crashes immediately on world load.** Open `.minecraft/logs/latest.log` and search for `Caused by`. Most pack crashes are mod conflicts or out-of-memory. Send the log file to the pack maintainer.

**Airships render weirdly with shaders enabled.** Known issue — Aeronautics has visual bugs with Iris/Oculus. Disable shaders when flying.

**Random mod misbehaves on a moving ship (sounds wrong, mob can't pathfind, etc).** This is what `aeronauticscompat` is supposed to fix; if a specific mod is still broken, mention it in the issue tracker and we can flag it for the Aeronautics team.

**Server pack instead?** Server distribution is currently disabled — see the README for status.
