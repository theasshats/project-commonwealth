# Derpack X — player site (`modpack.ishimura.xyz`)

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
└── deploy/                 # compose + Caddy snippets for the box
```

## Run / build locally

```bash
cd site
go run .                                   # http://localhost:8080
MC_ADDR=play.example.net:25565 go run .     # point the status badge elsewhere
```

Config (env): `LISTEN_ADDR` (default `:8080`), `MC_ADDR` (default
`mc.ishimura.xyz:25565`). The page is fully usable with JS off — copy button and
status badge are enhancements.

## Content to fill

Everything is pulled from the modpack already. The one remaining placeholder is
the **Discord invite** — search `web/index.html` for `{{DISCORD_INVITE}}`. The
game connect address is set to `mc.ishimura.xyz`; if that ever moves, change it
in `index.html` (the copy button) **and** the `MC_ADDR` env in compose.

---

## Deploy on ishimura (network wiring per the hosting brief)

This is an ordinary web app → it goes through the tunnel + Caddy (**Path 1**),
*not* the game-server direct path. `modpack.ishimura.xyz` and the game's
`mc.ishimura.xyz` coexist because tunnel routing is per-hostname.

**B1 — service dir.** As `xela` (no `sudo`, or you get a root-owned dir):

```bash
mkdir -p "/home/media stack/modpack"
# copy the contents of this repo's site/ into it (so ./modpack has the Dockerfile)
```

**B2 — compose service.** Add the block from
`deploy/docker-compose.snippet.yml` to `/home/media stack/docker-compose.yml`.
No `ports:` (Caddy reaches it internally), no `networks:` (joins the external
`media` network by default), no PUID/PGID.

**B3 — Caddy block.** Add `deploy/Caddyfile.snippet` to
`/home/media stack/caddy/Caddyfile` (reverse-proxy by **name**, `modpack:8080`),
then reload:

```bash
cd "/home/media stack" && docker compose -p media restart caddy
docker logs --tail 20 caddy   # watch for "certificate obtained" for modpack.ishimura.xyz
```

**B4 — tunnel public hostname (Cloudflare dashboard, can't be done from shell).**
Zero Trust → Networks → Tunnels → **ishimura** → Public Hostname → Add:
subdomain `modpack`, domain `ishimura.xyz`, type **HTTPS**, URL **`caddy:443`**,
and **No TLS Verify: ON**. Auto-creates the proxied DNS record.

**B5 — Access: leave OFF.** It's player-facing (like Jellyfin/Seerr), no
email-PIN gate.

**B6 — deploy.**

```bash
cd "/home/media stack" && docker compose -p media up -d --build modpack
```

### Verify

```bash
docker compose -p media ps | grep modpack
docker run --rm --network media curlimages/curl:latest \
  -s -o /dev/null -w "internal: %{http_code}\n" http://modpack:8080/healthz   # 200
curl -sk -o /dev/null -w "via caddy: %{http_code}\n" \
  -H "Host: modpack.ishimura.xyz" https://localhost:443                       # 200
```

Then from off-network (phone on cellular) open `https://modpack.ishimura.xyz` —
it should load directly, no Cloudflare login. A 502 means the cloudflared→Caddy
hop failed (work the runbook's "Web app returns 502" checklist).

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
