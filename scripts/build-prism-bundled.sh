#!/usr/bin/env bash
# Builds the "jars bundled" Prism instance zip.
# Workflow:
#   1. Use packwiz-installer-bootstrap to fetch every mod jar from the manifest
#   2. Place jars in .minecraft/mods/
#   3. Zip the whole instance dir
#
# Result: dist/<slug>-prism-bundled-<version>.zip
# Friend just opens Prism -> Add Instance -> Import from zip.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

PACK_NAME="$(grep -E '^name\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
PACK_VERSION="$(grep -E '^version\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
SLUG="$(echo "${PACK_NAME}" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g; s/--*/-/g; s/^-//; s/-$//')"

INSTANCE_NAME="${SLUG}-prism-bundled-${PACK_VERSION}"
STAGING="dist/staging/${INSTANCE_NAME}"
OUT="dist/${INSTANCE_NAME}.zip"

rm -rf "${STAGING}"
mkdir -p dist

# 1. Build skeleton
bash scripts/build-prism-skeleton.sh "${STAGING}" "bundled"

# 2. Fetch jars via packwiz-installer-bootstrap
#    The bootstrap jar reads pack.toml and downloads everything to mods/
BOOTSTRAP_JAR=".tools/packwiz-installer-bootstrap.jar"
if [[ ! -f "${BOOTSTRAP_JAR}" ]]; then
    mkdir -p .tools
    echo "==> Downloading packwiz-installer-bootstrap"
    curl -fsSL -o "${BOOTSTRAP_JAR}" \
        "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
fi

echo "==> Fetching mod jars (this is the slow step — pulling all referenced jars)"
# Run the bootstrap from inside .minecraft/ with a file:// URL pointing at our pack.toml.
# -g = headless (no GUI), -s both = client+server side mods
PACK_URL="file://${REPO_ROOT}/pack.toml"
(
    cd "${STAGING}/.minecraft"
    java -jar "${REPO_ROOT}/${BOOTSTRAP_JAR}" -g -s both --no-gui "${PACK_URL}"
)

# packwiz-installer leaves a packwiz.json behind; harmless but we don't ship it
rm -f "${STAGING}/.minecraft/packwiz.json"

# 3. Drop a README in the instance for the friend
cat > "${STAGING}/README.txt" <<EOF
${PACK_NAME} ${PACK_VERSION} — Prism Instance (bundled jars)

Install:
  1. Open Prism Launcher
  2. Add Instance -> Import from zip
  3. Pick this zip
  4. Launch

Memory: 8-12 GB (configured)
Java:   21 (Prism will prompt to download if missing)

Updating:
  Download a new bundled zip and re-import, or use the
  "installer" variant if you want auto-updates.
EOF

# 4. Zip it
echo "==> Packaging zip"
(cd dist/staging && zip -qr "../${INSTANCE_NAME}.zip" "${INSTANCE_NAME}")

ls -lh "${OUT}"
echo "Built: ${OUT}"
