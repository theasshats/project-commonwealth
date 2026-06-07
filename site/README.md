# Derpack X — player site (`derpack-x.ishimura.xyz` / `modpack.ishimura.xyz`)

The player-facing front door for Derpack X: how to join, what's in the pack, the
rules, FAQ, and a live server-status badge. Built as a small **Go binary** that
serves an embedded static site and a self-hosted `/api/status` endpoint, then
sits behind the box's **Cloudflare Tunnel → Caddy** stack like any other
service. (Why Go instead of the brief's `nginx:alpine`: the maintainer prefers
Go, and it lets the status badge be self-hosted instead of depending on a
third-party API. Everything else follows the hosting brief.)

## Layout

```
site/
├── main.go                 # server: embeds web/, serves it + /api/status + /healthz
├── internal/ping/          # Minecraft Server List Ping client (live status)
├── web/                    # the site itself — edit content here
│   ├── index.html          # one page, anchored sections
│   ├── css/style.css
│   ├── js/main.js          # copy button + status badge (progressive enhancement)
│   └── assets/             # logo / small images
├── Dockerfile              # multi-stage → distroless, non-root
├── docker-compose.yml      # standalone — its own project, attaches to the media net
└── deploy/                 # Caddy snippet for the box
```

## Run / build locally

```bash
cd site
go run .                                   # http://localhost:8080
MC_ADDR=play.example.net:25565 go run .     # point the status badge elsewhere
```

Config (env): `LISTEN_ADDR` (default `:8080`), `MC_ADDR` (default
`mc.ishimura.xyz:25565`), `GITHUB_REPO` (default `derpack-org/Derpack-X`, used by
`/api/release`). The page is fully usable with JS off; the copy button, status
badge and live download resolution are enhancements.

### Endpoints

- `/` — the embedded static site.
- `/api/status` — cached Minecraft Server List Ping for the live status badge.
- `/api/release` — cached GitHub Releases lookup (15 min). Resolves the latest
  release's actual Prism-installer asset URL by pattern and lists recent
  versions, so the download button always points at the real current file even
  though asset names carry a version. Falls back to the last good result on a
  transient API error. Optional `GITHUB_TOKEN` raises the API rate limit.
- `/healthz` — liveness.

## Content to fill

Everything is pulled from the modpack already. The one remaining placeholder is
the **Discord invite** — search `web/index.html` for `{{DISCORD_INVITE}}`. The
game connect address is set to `mc.ishimura.xyz`; if that ever moves, change it
in `index.html` (the copy button) **and** the `MC_ADDR` env in compose.

The download buttons resolve live via `/api/release`, so they always point at
the current release's actual Prism-installer asset (a direct file download, no
GitHub UI). With JS off they fall back to the static `releases/latest/download/`
link in the HTML, which works once a release ships the stable, version-less asset
name the build workflow now attaches. The site links only the Prism installer
(the `.mrpack` is dropped on purpose: it's currently ~200&nbsp;MB and the
installer is the recommended path). The **Rules** section is intentionally left
as a placeholder (zagwar is designing them).

---

## Deploy on ishimura (network wiring per the hosting brief)

This is an ordinary web app → it goes through the tunnel + Caddy (**Path 1**),
*not* the game-server direct path. `modpack.ishimura.xyz` and the game's
`mc.ishimura.xyz` coexist because tunnel routing is per-hostname.

It runs as its **own compose project**, separate from the media stack — it only
*attaches* to the existing external `media` network so Caddy still resolves it
by name. Served at both `modpack.ishimura.xyz` and `derpack-x.ishimura.xyz`.

**B1 — service dir.** Put it in its own directory (as `xela`, no `sudo`),
*outside* the media stack — e.g. `~/derpack-site`. Copy this repo's `site/`
contents into it (so the dir has the `Dockerfile` and `docker-compose.yml`).

**B2 — bring it up (its own project — NOT in the media-stack compose file).**
From that dir:

```bash
docker compose up -d --build
```

This builds the image and attaches the `modpack` container to the existing
external `media` network (created by the media stack). No `ports:`, no PUID/PGID.

**B3 — Caddy block.** Add `deploy/Caddyfile.snippet` to
`/home/media stack/caddy/Caddyfile` (one block, both hostnames, reverse-proxy by
**name** → `modpack:8080`), then reload:

```bash
cd "/home/media stack" && docker compose -p media restart caddy
docker logs --tail 20 caddy   # watch for "certificate obtained" for both hostnames
```

**B4 — tunnel public hostnames (Cloudflare dashboard, can't be done from shell).**
Zero Trust → Networks → Tunnels → **ishimura** → Public Hostname. Add **two**,
both type **HTTPS**, URL **`caddy:443`**, **No TLS Verify: ON**:
- subdomain `modpack`, domain `ishimura.xyz`
- subdomain `derpack-x`, domain `ishimura.xyz`

Each auto-creates its proxied DNS record.

**B5 — Access: leave OFF.** It's player-facing (like Jellyfin/Seerr), no
email-PIN gate.

### Verify

```bash
docker compose ps | grep modpack         # from the site dir
# 1. container itself, by name on the media network
docker run --rm --network media curlimages/curl:latest \
  -s -o /dev/null -w "internal: %{http_code} %{size_download}b\n" http://modpack:8080/   # 200, ~9KB
# 2. the Caddy hop — over the docker network, NOT localhost. The tunnel reaches
#    caddy:443; Caddy does NOT publish 443 to the host, so a localhost:443 test
#    just returns 000 (no listener) and is misleading.
docker run --rm --network media curlimages/curl:latest -sk \
  -o /dev/null -w "via caddy: %{http_code} %{size_download}b\n" \
  -H "Host: derpack-x.ishimura.xyz" https://caddy:443/                                   # 200, ~9KB
```

A `200` with **0 bytes** on the Caddy hop means Caddy has no site block for the
host — Caddy's `https://caddy { … }` SNI loop forwards the tunnel's request back
into Caddy by `Host`, and an unmatched host returns an empty `200`. Fix: confirm
the `derpack-x.ishimura.xyz, modpack.ishimura.xyz` block is in the Caddyfile and
`docker compose -p media restart caddy`.

Then from off-network (phone on cellular) open `https://derpack-x.ishimura.xyz`
(and `https://modpack.ishimura.xyz`) — both should load directly, no Cloudflare
login. A 502 means the cloudflared→Caddy hop failed (work the runbook's "Web app
returns 502" checklist).

### Notes

- **The pack download is not served here.** The site links out to the GitHub
  release (small manifest bundles; launchers fetch jars themselves), so nothing
  large goes through the tunnel — exactly the brief's decision #5.
- **Cloudflare caches the proxied hostname.** HTML is sent with a short
  `Cache-Control` (60s) so content edits surface quickly; for an instant update
  after an edit, purge the cache in the dashboard.
- **Name, not IP** in the Caddyfile, always (`modpack:8080`).
- When it's live, add a row to `ishimura-media-architecture.md` and note this as
  a worked Path-1 example in `ishimura-cloudflare-adding-services.md`.
