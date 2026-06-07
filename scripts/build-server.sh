#!/usr/bin/env bash
# Builds a server-ready zip with mod jars baked in.
#
# Approach: same as build-prism-bundled.sh — spin up `packwiz serve`,
# use packwiz-installer-bootstrap to fetch *server-side* mods. We bake jars
# in directly rather than ship a fetch-mods.sh because:
#   - It works for CurseForge mods (which have no direct URL)
#   - The end state is identical: a working server folder
#
# Result: dist/<slug>-server-<version>.zip

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

PACK_NAME="$(grep -E '^name\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
PACK_VERSION="$(grep -E '^version\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
SLUG="$(echo "${PACK_NAME}" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g; s/--*/-/g; s/^-//; s/-$//')"

INSTANCE_NAME="${SLUG}-server-${PACK_VERSION}"
STAGING="dist/staging/${INSTANCE_NAME}"
OUT="dist/${INSTANCE_NAME}.zip"

rm -rf "${STAGING}"
mkdir -p "${STAGING}"

# Copy the override dirs that belong on the server. The list lives in
# scripts/instance-dirs.txt (shared with build-prism-skeleton.sh and the editor builder) so
# the three builders can't drift — see that file's header. Server takes scope "both"/"server"
# (no client-only resource/shaderpacks). tacz/ (scope both) carries the Create: Armorer zip.
while read -r d scope _; do
    [[ -z "${d}" || "${d}" == \#* ]] && continue
    [[ "${scope}" == "both" || "${scope}" == "server" ]] || continue
    if [[ -d "${d}" ]]; then
        cp -r "${d}" "${STAGING}/"
    fi
done < scripts/instance-dirs.txt

# Bootstrap jar
BOOTSTRAP_JAR="${REPO_ROOT}/.tools/packwiz-installer-bootstrap.jar"
if [[ ! -f "${BOOTSTRAP_JAR}" ]]; then
    mkdir -p "${REPO_ROOT}/.tools"
    curl -fsSL -o "${BOOTSTRAP_JAR}" \
        "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
fi

# packwiz serve
PORT=8766  # different port from bundled in case both run together
echo "==> Starting packwiz serve on :${PORT}"
packwiz serve --port "${PORT}" >/tmp/packwiz-serve-server.log 2>&1 &
SERVE_PID=$!
trap "kill ${SERVE_PID} 2>/dev/null || true" EXIT

for i in $(seq 1 20); do
    if curl -fs "http://localhost:${PORT}/pack.toml" >/dev/null 2>&1; then break; fi
    sleep 0.5
done
if ! curl -fs "http://localhost:${PORT}/pack.toml" >/dev/null 2>&1; then
    echo "ERROR: packwiz serve never came up. Log:" >&2
    cat /tmp/packwiz-serve-server.log >&2
    exit 1
fi

echo "==> Fetching server-side mod jars"
(
    cd "${STAGING}"
    java -jar "${BOOTSTRAP_JAR}" -g -s server "http://localhost:${PORT}/pack.toml"
)

kill ${SERVE_PID} 2>/dev/null || true
trap - EXIT

rm -f "${STAGING}/packwiz.json" "${STAGING}/packwiz-installer-bootstrap.jar"

mod_count="$(find "${STAGING}/mods" -name '*.jar' 2>/dev/null | wc -l)"
if [[ "${mod_count}" -eq 0 ]]; then
    echo "ERROR: no mod jars in ${STAGING}/mods after install" >&2
    exit 1
fi
echo "==> ${mod_count} server-side mod jars bundled"

# Generational ZGC launcher — 32 GB fixed heap (Java 21).
# ZGC (sub-millisecond pauses) suits the server's high allocation rate better than
# G1 at this heap size; the G1-specific tuning flags don't apply under ZGC and are
# dropped. A fixed Xms=Xmx + AlwaysPreTouch commits the heap up front.
cat > "${STAGING}/run.sh" <<'EOF'
#!/usr/bin/env bash
set -e
java -Xms32G -Xmx32G \
    -XX:+UseZGC -XX:+ZGenerational \
    -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled \
    -XX:+DisableExplicitGC -XX:+PerfDisableSharedMem \
    @user_jvm_args.txt @libraries/net/neoforged/neoforge/*/unix_args.txt \
    "$@"
EOF
chmod +x "${STAGING}/run.sh"

cat > "${STAGING}/README.txt" <<EOF
${PACK_NAME} ${PACK_VERSION} — Server Pack

Mods are already in ./mods/. To finish setup:

1. Install NeoForge for Minecraft 1.21.1 in this directory:
     https://neoforged.net/   (download the installer, run with --installServer)

2. Accept the EULA in eula.txt

3. Start: ./run.sh nogui

The launcher uses Generational ZGC with a 32 GB fixed heap (needs Java 21).
Tune Xms/Xmx in run.sh if 32G is wrong for your box; ZGC wants a large fixed heap,
so don't drop it far without reverting to G1GC.
EOF

(cd dist/staging && zip -qr "../${INSTANCE_NAME}.zip" "${INSTANCE_NAME}")
ls -lh "${OUT}"
echo "Built: ${OUT}"
