// Command derpack-site is the player-facing website for Derpack X on Ishimura.
//
// It's a single static-serving binary: the HTML/CSS/JS live under web/ and are
// embedded into the binary, so the container has no filesystem dependency. It
// also exposes /api/status, a small self-hosted endpoint that pings the game
// server (Minecraft Server List Ping) so the page can show a live online badge
// without leaning on a third-party status API.
//
// It sits behind the box's Caddy + Cloudflare Tunnel stack exactly like the
// nginx service it replaces — Caddy reverse-proxies to it by container name.
// See site/README.md for the deploy wiring.
package main

import (
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/derpack/derpack-site/internal/ping"
)

//go:embed all:web
var embeddedSite embed.FS

func main() {
	cfg := loadConfig()

	siteFS, err := fs.Sub(embeddedSite, "web")
	if err != nil {
		log.Fatalf("derpack-site: embed: %v", err)
	}

	mux := http.NewServeMux()
	mux.Handle("/", cacheControl(http.FileServer(http.FS(siteFS))))
	mux.HandleFunc("/api/status", newStatusHandler(cfg))
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})

	srv := &http.Server{
		Addr:              cfg.listenAddr,
		Handler:           mux,
		ReadHeaderTimeout: 10 * time.Second,
	}
	log.Printf("derpack-site: listening on %s, pinging %s", cfg.listenAddr, cfg.mcAddr)
	if err := srv.ListenAndServe(); err != nil {
		log.Fatalf("derpack-site: %v", err)
	}
}

type config struct {
	listenAddr string
	mcAddr     string
}

func loadConfig() config {
	return config{
		listenAddr: envOr("LISTEN_ADDR", ":8080"),
		mcAddr:     envOr("MC_ADDR", "mc.ishimura.xyz:25565"),
	}
}

func envOr(key, def string) string {
	if v := strings.TrimSpace(os.Getenv(key)); v != "" {
		return v
	}
	return def
}

// cacheControl keeps HTML fresh (the site is edited live and sits behind
// Cloudflare's proxy cache) while letting static assets cache longer.
func cacheControl(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		p := r.URL.Path
		switch {
		case p == "/" || strings.HasSuffix(p, ".html"):
			w.Header().Set("Cache-Control", "public, max-age=60")
		case strings.HasSuffix(p, ".css") || strings.HasSuffix(p, ".js"):
			w.Header().Set("Cache-Control", "public, max-age=3600")
		default:
			w.Header().Set("Cache-Control", "public, max-age=86400")
		}
		next.ServeHTTP(w, r)
	})
}

// newStatusHandler returns a handler that reports the game server's status,
// cached briefly so a busy page doesn't hammer the server with pings.
func newStatusHandler(cfg config) http.HandlerFunc {
	const ttl = 15 * time.Second
	var (
		mu      sync.Mutex
		cached  ping.Status
		fetched time.Time
	)
	return func(w http.ResponseWriter, r *http.Request) {
		mu.Lock()
		if time.Since(fetched) > ttl {
			cached = ping.Ping(cfg.mcAddr, 3*time.Second)
			fetched = time.Now()
		}
		st := cached
		mu.Unlock()

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Cache-Control", "public, max-age=15")
		_ = json.NewEncoder(w).Encode(st)
	}
}
