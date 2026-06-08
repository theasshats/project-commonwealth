# Derpack X — Server

Deploy configuration for running a [Derpack X](https://github.com/derpack-org/Derpack-X)
server. It pairs a Docker Compose stack (NeoForge 1.21.1, via the
`itzg/minecraft-server` image) with an update script that keeps the server's
loader and mods pinned to a single, consistent version of the pack.

## Requirements

- A Linux host with Docker and the Docker Compose plugin.
- Outbound internet access — mods are downloaded from Modrinth and CurseForge on
  first start.
- Memory for a large modpack. The defaults request a fixed 32 GB heap; lower
  `INIT_MEMORY` / `MAX_MEMORY` in `docker-compose.yml` to suit your host (8 GB is
  a practical minimum).

Java is supplied by the container image — you do not install it yourself.

## Quick start

```bash
git clone https://github.com/derpack-org/derpack-server.git
cd derpack-server
cp .env.example .env
```

Edit `.env`: set `WHITELIST` and `OPS` to the players who may join and who should
be operators (comma-separated), and set `RCON_PASSWORD` to a value of your own
(for example `openssl rand -hex 24`). The defaults track the latest stable
Derpack X release.

Start the server:

```bash
./auto-update.sh --now
```

The first start installs NeoForge, downloads the pack's mods, and generates the
world — allow several minutes. Follow along with `docker compose logs -f`; the
server is ready when the log shows `Done (…)! For help, type "help"`.

## Updating

Run `./auto-update.sh` to apply any new version of the pack. It announces the
restart to players over RCON, recreates the container, and waits for the server
to report healthy — and it is a no-op when nothing has changed. Add `--now` to
skip the announcement countdown.

To keep the server current automatically, add it to cron:

```cron
*/15 * * * * /path/to/derpack-server/auto-update.sh >> /path/to/derpack-server/auto-update.log 2>&1
```

Pause automatic updates with `touch .pause-auto-update`; resume by deleting that
file.

## Channels

Set in `.env`:

- `CHANNEL=release` — track the latest published Derpack X release. Recommended
  for normal play.
- `CHANNEL=branch` with `BRANCH_REF=<branch>` — track a development branch, for
  playtesting an upcoming version.

`auto-update.sh` resolves the channel to one commit, reads the pack's `pack.toml`
at that commit, and pins both the NeoForge version and the mod set together.
Because the loader and mods always come from the same commit, a restart cannot
leave them mismatched, and a version that fails to start healthy is rolled back
to the previous one automatically.

## Configuration

In `.env` (operator settings):

- `WHITELIST`, `OPS` — comma-separated player names.
- `CHANNEL` / `BRANCH_REF` — which version to track (see Channels).
- `RCON_PASSWORD`.

In `docker-compose.yml`:

- The published port — the host side of `25568:25565` (change the left value).
- `INIT_MEMORY`, `MAX_MEMORY` — heap size.
- `DIFFICULTY`, `VIEW_DISTANCE`, and the full range of
  [itzg/minecraft-server](https://docker-minecraft-server.readthedocs.io/)
  options.

`NEOFORGE_VERSION` and `PACKWIZ_URL` are written by `auto-update.sh` and should
not be edited by hand.

## Notes

- The server runs on Generational ZGC with a fixed heap (Java 21).
- Shaders are a client-side option and have no effect on the server.
- This configuration is maintained in the
  [Derpack X](https://github.com/derpack-org/Derpack-X) pack repository.
