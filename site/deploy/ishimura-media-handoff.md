# Handoff: Derpack X player site → ishimura media-stack docs

Drop-in material to update the media project's own docs now that the modpack
website is live. Self-contained: everything the media-stack docs need is below,
nothing to cross-reference back into the modpack repo.

- **Hostnames:** `derpack-x.ishimura.xyz` and `modpack.ishimura.xyz`
- **Container:** `modpack` (internal `modpack:8080`)
- **Type:** ordinary web app behind the tunnel + Caddy (**Path 1**)
- **Access:** none (player-facing, like Jellyfin/Seerr)
- **Compose:** its **own** project, *not* in the media-stack compose file; it only
  attaches to the existing external `media` network so Caddy resolves it by name.

---

## 1. For `ishimura-media-architecture.md` (services table)

Add a row:

| Service | Hostname(s) | Container | Internal addr | Cloudflare Access | Notes |
|---|---|---|---|---|---|
| Derpack X site | `derpack-x.ishimura.xyz`, `modpack.ishimura.xyz` | `modpack` | `modpack:8080` | none (public) | Own compose project; joins the `media` network only so Caddy can reach it. Go binary (static site + `/api/status` + `/api/release`). |

Note alongside it: this is **not** the game server. The Minecraft server keeps its
own gray-cloud `mc.ishimura.xyz` + port-forward path; the website and the game
connect coexist because tunnel routing is per-hostname.

---

## 2. For `ishimura-cloudflare-adding-services.md` (worked Path-1 example)

A clean example of adding a web app that is **built from source** rather than a
pulled image, and that lives in its **own compose project**.

**Caddy block** (`/home/media stack/caddy/Caddyfile`) — both hostnames, one block,
reverse-proxy by name:

```
modpack.ishimura.xyz, derpack-x.ishimura.xyz {
	reverse_proxy modpack:8080
	tls {
		dns cloudflare {env.CF_API_TOKEN}
	}
}
```

> Deviation from the nginx example: the service is a Go binary that runs as a
> non-root user, which can't bind `:80`, so it listens on `:8080` and Caddy
> targets `modpack:8080` (not `:80`).

**Standalone compose** (its own dir, e.g. `/home/Minecraft/Derpack-X-Site`, **not**
the media-stack `docker-compose.yml`):

```yaml
services:
  modpack:
    build: .
    image: derpack-site:latest
    container_name: modpack
    restart: unless-stopped
    environment:
      - MC_ADDR=mc.ishimura.xyz:25565   # game server to ping for the status badge
    networks:
      - media
    # no ports: Caddy reaches it internally over the shared network

networks:
  media:
    external: true
```

Bring it up from its own dir: `docker compose up -d --build`.

**Tunnel public hostnames** (Cloudflare dashboard → Zero Trust → Networks →
Tunnels → ishimura → Public Hostname): add **two**, both type **HTTPS**, URL
**`caddy:443`**, **No TLS Verify: ON** — `modpack` and `derpack-x`, both on
`ishimura.xyz`. Leave **Access OFF** (player-facing).

---

## 3. For `ishimura-runbook.md` (a gotcha worth recording)

**Symptom:** the public site loads but is **blank**, and an internal probe of the
Caddy hop returns `200` with **0 bytes**:

```bash
docker run --rm --network media curlimages/curl:latest -sk -o /dev/null \
  -w "%{http_code} %{size_download}b\n" \
  -H "Host: derpack-x.ishimura.xyz" https://caddy:443/      # 200 0b  -> no site block
```

**Cause:** the tunnel rides in via the `https://caddy { … }` SNI block, which
forwards the request back into Caddy by `Host`. If there is **no site block for
that host**, Caddy answers an empty `200`. (The container is fine — probe it
directly: `http://modpack:8080/` returns the full HTML.)

**Fix:** add the per-host Caddy block above and `docker compose -p media restart
caddy`. The hop should then return ~9 KB.

> Don't test the hop with `https://localhost:443` — Caddy doesn't publish 443 to
> the host, so that returns `000` and is misleading. Use `caddy:443` over the
> `media` network as above.

Optionally add `modpack:8080/healthz` to the runbook's health-check loop.

---

## Notes

- **Nothing large crosses the tunnel.** The download button links out to the
  GitHub release's installer (~7 MB), resolved live via the site's `/api/release`.
  No big files are served from the origin.
- **Content edits are not live** (the site embeds its files into the binary):
  updating the page means `docker compose up -d --build` + a Cloudflare cache
  purge. A future option to bind-mount the content for live edits is tracked in
  the modpack repo.
- **Status badge** pings `mc.ishimura.xyz:25565`; keep `MC_ADDR` in sync if the
  game connect address ever moves.
