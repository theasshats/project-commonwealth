// Package builder assembles a local Prism Launcher instance from the current
// repo state. Equivalent to scripts/build-prism-bundled.sh but in Go, so it
// works on Windows without bash.
//
// The build does NOT zip — it produces a directory structure ready to be
// copied into the user's existing Prism instance folder (or imported as-is).
//
// High-level flow:
//   1. Read pack metadata from pack.toml.
//   2. Write Prism scaffold files (mmc-pack.json, instance.cfg) into a staging
//      folder.
//   3. Copy the override dirs listed in scripts/instance-dirs.txt (the source of
//      truth shared with the install scripts) into <staging>/.minecraft/.
//   4. Start `packwiz serve` on a free port.
//   5. Run packwiz-installer-bootstrap (Java) against that server to fetch
//      every mod jar into <staging>/.minecraft/mods/.
//   6. Stop the server.
//   7. Clean up bootstrap leftovers.
package builder

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/pcmc/pcmc-edit/internal/packwiz"
)

// Result describes a completed build.
type Result struct {
	StagingDir string // absolute path to the assembled instance dir
	ModCount   int
	Logs       []string // human-readable progress log
}

// Builder runs builds. Reuse one across requests.
type Builder struct {
	RepoRoot     string
	PackwizBin   string // absolute path to packwiz executable
	BootstrapJar string // absolute path to packwiz-installer-bootstrap.jar (downloaded on first call if absent)
}

// Build assembles a Prism instance into <RepoRoot>/.editor/build-staging/.
// Returns the path on success.
func (b *Builder) Build(ctx context.Context, log func(string)) (*Result, error) {
	logf := func(format string, args ...any) {
		msg := fmt.Sprintf(format, args...)
		if log != nil {
			log(msg)
		}
	}
	res := &Result{Logs: []string{}}
	collect := func(format string, args ...any) {
		msg := fmt.Sprintf(format, args...)
		res.Logs = append(res.Logs, msg)
		logf(msg)
	}

	// 1. Read pack metadata.
	pack, err := packwiz.LoadPack(b.RepoRoot)
	if err != nil {
		return nil, fmt.Errorf("read pack.toml: %w", err)
	}
	mcVersion := pack.Versions["minecraft"]
	neoforgeVersion := pack.Versions["neoforge"]
	if mcVersion == "" || neoforgeVersion == "" {
		return nil, fmt.Errorf("pack.toml missing minecraft or neoforge version")
	}

	staging := filepath.Join(b.RepoRoot, ".editor", "build-staging")
	mcDir := filepath.Join(staging, ".minecraft")

	// Preserve the packwiz-installer mod cache (the mods/ dir and its packwiz.json
	// state file) across builds, then rebuild everything else from scratch. A full
	// wipe re-downloaded all ~360 mods on every build; the handful hosted on GitHub
	// releases (the mod-mirror jars, the appleseed fix) intermittently 504 under that
	// parallel load, and a single random failure aborts the whole build. Keeping the
	// cache lets packwiz-installer validate existing jars by hash and fetch only the
	// changed ones — and still prune orphans (e.g. an old mod version) via
	// packwiz.json — cutting GitHub-release exposure from several files to ~one.
	cache := filepath.Join(b.RepoRoot, ".editor", "mods-cache")
	_ = os.RemoveAll(cache)
	if err := os.MkdirAll(cache, 0o755); err != nil {
		return nil, fmt.Errorf("mkdir mods cache: %w", err)
	}
	for _, name := range []string{"mods", "packwiz.json"} {
		if _, err := os.Stat(filepath.Join(mcDir, name)); err == nil {
			_ = os.Rename(filepath.Join(mcDir, name), filepath.Join(cache, name))
		}
	}
	if err := os.RemoveAll(staging); err != nil {
		return nil, fmt.Errorf("clean staging: %w", err)
	}
	if err := os.MkdirAll(mcDir, 0o755); err != nil {
		return nil, fmt.Errorf("mkdir staging: %w", err)
	}
	// Restore the cache ONLY when both the jars and packwiz-installer's state file
	// survived a prior build. packwiz.json is what lets the installer prune mods
	// that have since left the pack, so requiring it guarantees the rebuilt modset
	// equals a clean install — a dev never ends up with a stale mod a new player
	// wouldn't have. Missing either piece => fall back to a clean full fetch.
	_, modsErr := os.Stat(filepath.Join(cache, "mods"))
	_, stateErr := os.Stat(filepath.Join(cache, "packwiz.json"))
	cacheUsable := modsErr == nil && stateErr == nil
	if cacheUsable {
		_ = os.Rename(filepath.Join(cache, "mods"), filepath.Join(mcDir, "mods"))
		_ = os.Rename(filepath.Join(cache, "packwiz.json"), filepath.Join(mcDir, "packwiz.json"))
		collect("Staging dir: %s (reusing mod cache — only changed mods download)", staging)
	} else {
		collect("Staging dir: %s (clean build — full mod download)", staging)
	}
	_ = os.RemoveAll(cache)

	// 2. Scaffold Prism instance files.
	if err := writeMmcPack(staging, mcVersion, neoforgeVersion); err != nil {
		return nil, err
	}
	jvmBlock, err := ReadInstanceJvm(b.RepoRoot)
	if err != nil {
		return nil, fmt.Errorf("read scripts/instance-jvm.cfg: %w", err)
	}
	if err := writeInstanceCfg(staging, pack.Name, pack.Version, jvmBlock); err != nil {
		return nil, err
	}
	collect("Wrote mmc-pack.json and instance.cfg")

	// 3. Copy the override dirs. The list is the shared single source of truth in
	// scripts/instance-dirs.txt (also read by build-prism-skeleton.sh and
	// build-server.sh) so the editor build and the install scripts can never drift —
	// that drift is how tacz/ (the Create: Armorer gun packs) once went missing from
	// editor-built instances. This is a client/Prism build, so it takes "both" + "client".
	dirs, err := ReadInstanceDirs(b.RepoRoot, "client")
	if err != nil {
		return nil, fmt.Errorf("read scripts/instance-dirs.txt: %w", err)
	}
	for _, d := range dirs {
		src := filepath.Join(b.RepoRoot, d)
		if _, err := os.Stat(src); err != nil {
			continue // skip missing dirs
		}
		dst := filepath.Join(mcDir, d)
		if err := copyDir(src, dst); err != nil {
			return nil, fmt.Errorf("copy %s: %w", d, err)
		}
		collect("Copied %s/", d)
	}

	// 4. Ensure bootstrap jar present.
	if err := b.ensureBootstrapJar(); err != nil {
		return nil, fmt.Errorf("get installer bootstrap: %w", err)
	}

	// 5. Run packwiz serve + bootstrap to fetch jars.
	port, stop, err := startPackwizServe(ctx, b.PackwizBin, b.RepoRoot)
	if err != nil {
		return nil, fmt.Errorf("start packwiz serve: %w", err)
	}
	defer stop()
	collect("Started packwiz serve on :%d", port)

	if err := waitForServer(ctx, port); err != nil {
		return nil, fmt.Errorf("packwiz serve never came up: %w", err)
	}

	collect("Fetching mod jars (this may take a few minutes)...")
	if err := runBootstrap(ctx, b.BootstrapJar, mcDir, port); err != nil {
		return nil, fmt.Errorf("install mods: %w", err)
	}

	// 6. Clean up the bootstrap jar leftover. Keep packwiz.json — it is
	// packwiz-installer's state file, preserved across builds together with mods/
	// so the next build validates the cache by hash and prunes orphaned mods
	// (e.g. an old mod version) instead of re-downloading everything.
	_ = os.Remove(filepath.Join(mcDir, "packwiz-installer-bootstrap.jar"))

	// 7. Sanity check.
	jars, _ := filepath.Glob(filepath.Join(mcDir, "mods", "*.jar"))
	res.ModCount = len(jars)
	if res.ModCount == 0 {
		return nil, fmt.Errorf("no mod jars after install — something went wrong fetching")
	}
	collect("Bundled %d mod jars", res.ModCount)

	res.StagingDir = staging
	return res, nil
}

// ----- helpers ----------------------------------------------------------

func writeMmcPack(staging, mcVer, neoforgeVer string) error {
	contents := fmt.Sprintf(`{
    "components": [
        {
            "important": true,
            "uid": "net.minecraft",
            "version": "%s"
        },
        {
            "uid": "net.neoforged",
            "version": "%s"
        }
    ],
    "formatVersion": 1
}
`, mcVer, neoforgeVer)
	return os.WriteFile(filepath.Join(staging, "mmc-pack.json"), []byte(contents), 0o644)
}

func writeInstanceCfg(staging, packName, packVersion, jvmBlock string) error {
	// jvmBlock is the JvmArgs/MaxMemAlloc/MinMemAlloc lines from the shared
	// single source of truth scripts/instance-jvm.cfg (see ReadInstanceJvm),
	// spliced into the [General] section so it can't drift from the install scripts.
	contents := fmt.Sprintf(`[General]
ConfigVersion=1.2
InstanceType=OneSix
JavaArchitecture=64
JavaVersion=21
%s
OverrideJavaArgs=true
OverrideMemory=true
PermGen=256
iconKey=default
name=%s %s
notes=Built locally from %s by pcmc-edit.
`, jvmBlock, packName, packVersion, packName)
	return os.WriteFile(filepath.Join(staging, "instance.cfg"), []byte(contents), 0o644)
}

// ReadInstanceJvm reads scripts/instance-jvm.cfg — the single source of truth (shared with
// scripts/build-prism-skeleton.sh) for the Prism instance's JVM args + heap (the JvmArgs,
// MaxMemAlloc and MinMemAlloc lines). Comments (#) and blank lines are stripped; the remaining
// key=value lines are returned joined by newlines, ready to splice into instance.cfg's
// [General] section. Shared so the editor build and the installer can't drift on Java flags —
// same rationale as ReadInstanceDirs.
func ReadInstanceJvm(repoRoot string) (string, error) {
	data, err := os.ReadFile(filepath.Join(repoRoot, "scripts", "instance-jvm.cfg"))
	if err != nil {
		return "", err
	}
	var lines []string
	for _, ln := range strings.Split(string(data), "\n") {
		t := strings.TrimSpace(ln)
		if t == "" || strings.HasPrefix(t, "#") {
			continue
		}
		lines = append(lines, t)
	}
	if len(lines) == 0 {
		return "", fmt.Errorf("scripts/instance-jvm.cfg has no JVM/heap lines")
	}
	return strings.Join(lines, "\n"), nil
}

// ReadInstanceDirs reads scripts/instance-dirs.txt — the single source of truth (shared with
// scripts/build-prism-skeleton.sh and scripts/build-server.sh) for which override directories
// get copied into a built instance's .minecraft/. Each non-comment line is "<dir> <scope>",
// scope being "both", "client", or "server"; a dir is returned when its scope is "both" or
// matches the requested scope ("client" for an editor/Prism build). Exported so the launch
// step (handlers) deploys the same set the build staged — they must not drift.
func ReadInstanceDirs(repoRoot, scope string) ([]string, error) {
	f, err := os.Open(filepath.Join(repoRoot, "scripts", "instance-dirs.txt"))
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var dirs []string
	sc := bufio.NewScanner(f)
	for sc.Scan() {
		line := strings.TrimSpace(sc.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		fields := strings.Fields(line)
		s := "both"
		if len(fields) > 1 {
			s = fields[1]
		}
		if s == "both" || s == scope {
			dirs = append(dirs, fields[0])
		}
	}
	return dirs, sc.Err()
}

// copyDir recursively copies srcDir into dstDir.
func copyDir(srcDir, dstDir string) error {
	if err := os.MkdirAll(dstDir, 0o755); err != nil {
		return err
	}
	return filepath.Walk(srcDir, func(p string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		rel, _ := filepath.Rel(srcDir, p)
		dst := filepath.Join(dstDir, rel)
		if info.IsDir() {
			return os.MkdirAll(dst, 0o755)
		}
		return copyFile(p, dst, info.Mode())
	})
}

func copyFile(src, dst string, mode os.FileMode) error {
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()

	if err := os.MkdirAll(filepath.Dir(dst), 0o755); err != nil {
		return err
	}
	out, err := os.OpenFile(dst, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, mode)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, in)
	return err
}

// ensureBootstrapJar downloads packwiz-installer-bootstrap.jar to .editor/
// if it isn't already there. Idempotent.
func (b *Builder) ensureBootstrapJar() error {
	if b.BootstrapJar == "" {
		b.BootstrapJar = filepath.Join(b.RepoRoot, ".editor", "packwiz-installer-bootstrap.jar")
	}
	if _, err := os.Stat(b.BootstrapJar); err == nil {
		return nil
	}

	const url = "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
	if err := os.MkdirAll(filepath.Dir(b.BootstrapJar), 0o755); err != nil {
		return err
	}

	resp, err := http.Get(url)
	if err != nil {
		return fmt.Errorf("download bootstrap: %w", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return fmt.Errorf("download bootstrap: %s", resp.Status)
	}

	out, err := os.Create(b.BootstrapJar)
	if err != nil {
		return err
	}
	defer out.Close()
	_, err = io.Copy(out, resp.Body)
	return err
}

// startPackwizServe starts `packwiz serve` on a free port and returns the port
// plus a stop function.
func startPackwizServe(ctx context.Context, packwizBin, repoRoot string) (port int, stop func(), err error) {
	port, err = freePort()
	if err != nil {
		return 0, nil, err
	}

	cmd := exec.CommandContext(ctx, packwizBin, "serve", "--port", fmt.Sprint(port))
	cmd.Dir = repoRoot
	// Capture output for debug; not currently surfaced.
	cmd.Stdout = io.Discard
	cmd.Stderr = io.Discard

	if err := cmd.Start(); err != nil {
		return 0, nil, err
	}

	stop = func() {
		if cmd.Process != nil {
			_ = cmd.Process.Kill()
		}
		_ = cmd.Wait()
	}
	return port, stop, nil
}

func freePort() (int, error) {
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return 0, err
	}
	defer ln.Close()
	return ln.Addr().(*net.TCPAddr).Port, nil
}

func waitForServer(ctx context.Context, port int) error {
	url := fmt.Sprintf("http://localhost:%d/pack.toml", port)
	deadline := time.Now().Add(15 * time.Second)
	for time.Now().Before(deadline) {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
		}
		resp, err := http.Get(url)
		if err == nil {
			resp.Body.Close()
			if resp.StatusCode == 200 {
				return nil
			}
		}
		time.Sleep(500 * time.Millisecond)
	}
	return fmt.Errorf("timeout waiting for packwiz serve on :%d", port)
}

// runBootstrap invokes `java -jar packwiz-installer-bootstrap.jar -g -s client <pack-url>`
// from the .minecraft directory, fetching all mods.
func runBootstrap(ctx context.Context, jarPath, mcDir string, port int) error {
	packURL := fmt.Sprintf("http://localhost:%d/pack.toml", port)

	javaBin := "java"
	cmd := exec.CommandContext(ctx, javaBin, "-jar", jarPath, "-g", "-s", "client", packURL)
	cmd.Dir = mcDir

	out, err := cmd.CombinedOutput()
	if err != nil {
		// Most common failure: java not in PATH. Surface a clear message.
		if strings.Contains(err.Error(), "executable file not found") {
			return fmt.Errorf("java not found in PATH. Install Java 21+ and ensure it's on PATH, or open Prism once (Prism bundles Java) and configure your PATH to include it. Underlying: %w", err)
		}
		return fmt.Errorf("bootstrap failed: %w (output: %s)", err, string(out))
	}
	return nil
}
