# Derpack X — server deploy (ishimura)

The compose + auto-update script that run the live server on the ishimura box.
Staged in this repo for review and version control; intended to migrate to a
dedicated `derpack-org/derpack-server` repo later (the same way the site was
split out). Nothing here runs in this repo's CI — deploy is by hand on the box.

## The one invariant

**The NeoForge loader and the mod set are always resolved from the *same*
immutable commit, and pinned together.** `auto-update.sh` resolves one commit
from the tracked channel, reads `pack.toml` at that commit, and writes both
`NEOFORGE_VERSION` and a commit-pinned `PACKWIZ_URL` into `.env` in one step.

This is the fix for the failure that prompted the overhaul: previously NeoForge
came from `.env` (changed only by the cron script) while mods floated on `main`
and re-synced on *every* container start. Any restart not driven by the script —
reboot, OOM, crash-loop, manual `up` — pulled a newer mod set against the old
loader, which is how the box ended up running NeoForge `21.1.228` while the pack
required `21.1.233`. With both values pinned to one commit, a restart can't
desync them.

NeoForge is still a **human decision made in the pack repo's `pack.toml`**. The
script only *mirrors* it onto the box — it never bumps `pack.toml`.

## Channels

- `release` — track the latest published `vX.Y.Z` GitHub release. **Production.**
- `branch` — track the tip of a branch (e.g. `v0.7.0`). **Dev / playtest.**

Set `CHANNEL` (and `BRANCH_REF`) in `.env`, or override per-run:
`./auto-update.sh --channel release` / `./auto-update.sh --branch v0.7.0`.

## Box layout

```
/home/Minecraft/Derpack-X/
├── docker-compose.yml      # from this dir
├── auto-update.sh          # from this dir (chmod +x)
├── .env                    # from .env.example; managed by the script
├── data/                   # bind mount: world, mods, configs (itzg-managed)
└── auto-update.log
```

## First-time setup

```bash
cd /home/Minecraft/Derpack-X
cp .env.example .env
# edit .env: CHANNEL, BRANCH_REF, and a real RCON_PASSWORD (openssl rand -hex 24)
chmod +x auto-update.sh
./auto-update.sh --now        # resolves the channel, pins .env, deploys
```

Cron (every 15 min; a no-op unless the tracked commit moved):

```
*/15 * * * * /home/Minecraft/Derpack-X/auto-update.sh >> /home/Minecraft/Derpack-X/auto-update.log 2>&1
```

## Run the v0.7.0 branch for playtesting right now

```bash
cd /home/Minecraft/Derpack-X
# .env: CHANNEL=branch, BRANCH_REF=v0.7.0
./auto-update.sh --now
```

To return to production later: set `CHANNEL=release` in `.env` and run
`./auto-update.sh --now` (deploys the latest release tag).

## How a deploy is judged

`docker compose up -d --force-recreate`, then poll the container's **real**
healthcheck (`State.Health.Status`) for up to 25 min — a cold first boot does a
full NeoForge install + packwiz mod sync + worldgen, so the window is generous.
A deploy that boots but crash-loops or never reports healthy is **rolled back**:
the script restores the previous `.env` (previous commit, previous loader) and
re-deploys it, because that commit's content is still pinned and reachable. Watch
a live deploy with `docker compose logs -f` (look for `Done (NN.Ns)! For help`).

## Controls

```bash
touch .pause-auto-update     # pause the cron (it skips while this exists)
rm    .pause-auto-update     # resume
./auto-update.sh --now       # deploy the tracked commit immediately, no countdown
```

## Notes / gotchas

- **Owner is `derpack-org`,** not the old `Xela112233`. The old raw URLs still
  redirect today but will break the moment that account name is reused; this
  config uses the canonical org path.
- **`NEOFORGE_VERSION` and `PACKWIZ_URL` are script-owned.** Don't hand-edit them
  in `.env` or hard-code them in compose — change `CHANNEL`/`BRANCH_REF` instead.
- **JVM flags:** compose keeps Aikar/G1; `scripts/build-server.sh` in the pack
  repo argues for Generational ZGC at 32G. They disagree — pick one deliberately
  (see the comment in `docker-compose.yml`).
- **Healthcheck command:** `mc-health` ships in itzg images. If a future image
  tag drops it, switch the `test` to `["CMD", "mc-monitor", "status"]`.
