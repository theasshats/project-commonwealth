#!/usr/bin/env bash
# Builds the "packwiz-installer" Prism instance zip.
# No jars bundled — friend's Prism runs packwiz-installer-bootstrap on first
# launch (and every launch), which fetches/updates jars from URLs in pack.toml.
#
# Result: dist/<slug>-prism-installer-<version>.zip
#
# REQUIREMENT: pack.toml must be reachable over HTTPS.
# The script reads PACK_URL from env, defaulting to a GitHub raw URL pattern.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

PACK_NAME="$(grep -E '^name\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
PACK_VERSION="$(grep -E '^version\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
SLUG="$(echo "${PACK_NAME}" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g; s/--*/-/g; s/^-//; s/-$//')"

# URL where pack.toml will live. In CI we set this from $GITHUB_REPOSITORY.
# Locally it falls back to a placeholder you'll need to edit before shipping.
: "${PACK_URL:=https://raw.githubusercontent.com/YOUR_USER/${SLUG}/v${PACK_VERSION}/pack.toml}"

INSTANCE_NAME="${SLUG}-prism-installer-${PACK_VERSION}"
STAGING="dist/staging/${INSTANCE_NAME}"
OUT="dist/${INSTANCE_NAME}.zip"

rm -rf "${STAGING}"
mkdir -p dist

bash scripts/build-prism-skeleton.sh "${STAGING}" "installer"

# Drop the bootstrap jar into the instance's .minecraft/
BOOTSTRAP_JAR=".tools/packwiz-installer-bootstrap.jar"
if [[ ! -f "${BOOTSTRAP_JAR}" ]]; then
    mkdir -p .tools
    curl -fsSL -o "${BOOTSTRAP_JAR}" \
        "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
fi
cp "${BOOTSTRAP_JAR}" "${STAGING}/.minecraft/packwiz-installer-bootstrap.jar"

# Wire up the pre-launch hook in instance.cfg.
# Prism runs PreLaunchCommand from $INST_MC_DIR before each launch.
cat >> "${STAGING}/instance.cfg" <<EOF
PreLaunchCommand="\$INST_JAVA" -jar "\$INST_MC_DIR/packwiz-installer-bootstrap.jar" -g -s client "${PACK_URL}"
EOF

cat > "${STAGING}/README.txt" <<EOF
${PACK_NAME} ${PACK_VERSION} — Prism Instance (auto-updater)

Install:
  1. Open Prism Launcher
  2. Add Instance -> Import from zip
  3. Pick this zip
  4. Launch (first launch fetches all mods — slow once, fast after)

Memory: 8-12 GB (configured)
Java:   21 (Prism will prompt to download if missing)

How updates work:
  Each launch, Prism runs packwiz-installer-bootstrap before Minecraft.
  It checks ${PACK_URL}
  and adds/removes/updates mods to match. No manual zip swap.

If the pre-launch hook fails:
  Edit Instance -> Settings -> Custom commands -> Pre-launch command,
  verify the URL is reachable. Or just delete the hook and run mods manually.
EOF

(cd dist/staging && zip -qr "../${INSTANCE_NAME}.zip" "${INSTANCE_NAME}")

ls -lh "${OUT}"
echo "Built: ${OUT}"
echo "Pack URL baked in: ${PACK_URL}"
