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
	"context"
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/derpack/derpack-site/internal/github"
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
	mux.HandleFunc("/api/release", newReleaseHandler(cfg))
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
	githubRepo string
}

func loadConfig() config {
	return config{
		listenAddr: envOr("LISTEN_ADDR", ":8080"),
		mcAddr:     envOr("MC_ADDR", "mc.ishimura.xyz:25565"),
		githubRepo: envOr("GITHUB_REPO", "Xela112233/Derpack-X"),
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

type releaseSummary struct {
	Version     string `json:"version"`
	Name        string `json:"name"`
	PublishedAt string `json:"published_at"`
}

type releaseInfo struct {
	Version       string           `json:"version"`
	Name          string           `json:"name"`
	PublishedAt   string           `json:"published_at"`
	InstallerURL  string           `json:"installer_url"`
	InstallerSize int64            `json:"installer_size"`
	Releases      []releaseSummary `json:"releases"`
	Error         string           `json:"error,omitempty"`
}

// newReleaseHandler resolves the latest release's actual download URLs from the
// GitHub API (by asset pattern, so versioned filenames keep working) plus a few
// recent versions. Cached for 15 minutes; on a transient API failure it serves
// the last good result rather than breaking the download button.
func newReleaseHandler(cfg config) http.HandlerFunc {
	const ttl = 15 * time.Minute
	var (
		mu       sync.Mutex
		cached   releaseInfo
		fetched  time.Time
		haveGood bool
	)

	build := func() releaseInfo {
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		releases, err := github.FetchReleases(ctx, cfg.githubRepo, 5)
		if err != nil {
			return releaseInfo{Error: "could not reach GitHub"}
		}

		var info releaseInfo
		var latest *github.Release
		for i := range releases {
			r := releases[i]
			if r.Draft {
				continue
			}
			info.Releases = append(info.Releases, releaseSummary{
				Version:     r.Version(),
				Name:        r.Name,
				PublishedAt: r.PublishedAt.Format("2006-01-02"),
			})
			if latest == nil && !r.Prerelease {
				latest = &releases[i]
			}
		}
		if latest != nil {
			info.Version = latest.Version()
			info.Name = latest.Name
			info.PublishedAt = latest.PublishedAt.Format("2006-01-02")
			if a := latest.AssetMatching("prism-installer", ".zip"); a != nil {
				info.InstallerURL = a.DownloadURL
				info.InstallerSize = a.Size
			}
		}
		return info
	}

	return func(w http.ResponseWriter, r *http.Request) {
		mu.Lock()
		if !haveGood || time.Since(fetched) > ttl {
			fresh := build()
			fetched = time.Now()
			if fresh.Error == "" {
				cached, haveGood = fresh, true
			} else if !haveGood {
				cached = fresh // no good data yet: surface the error
			}
			// otherwise keep the last good result, ignore the transient error
		}
		info := cached
		mu.Unlock()

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Cache-Control", "public, max-age=300")
		_ = json.NewEncoder(w).Encode(info)
	}
}
