#!/usr/bin/env bash
# Builds a server-ready zip: configs + KubeJS + a fetch-mods.sh that
# pulls every server-side jar from the URLs in mods/*.pw.toml.
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

for d in config defaultconfigs kubejs; do
    if [[ -d "${d}" ]]; then
        cp -r "${d}" "${STAGING}/"
    fi
done

cat > "${STAGING}/fetch-mods.sh" <<'EOF'
#!/usr/bin/env bash
# Auto-generated. Downloads server-side mod jars from the packwiz manifest URLs.
set -euo pipefail
mkdir -p mods
EOF

if [[ -d mods ]]; then
    for f in mods/*.pw.toml; do
        [[ -e "$f" ]] || continue
        side="$(grep -E '^side\s*=' "$f" | sed -E 's/.*"([^"]+)".*/\1/' || echo both)"
        [[ "${side}" == "client" ]] && continue
        url="$(grep -E '^url\s*=' "$f" | sed -E 's/.*"([^"]+)".*/\1/')"
        if [[ -n "${url}" ]]; then
            modname="$(basename "$f" .pw.toml)"
            echo "echo \"  fetching ${modname}\"" >> "${STAGING}/fetch-mods.sh"
            echo "curl -fsSL -o \"mods/${modname}.jar\" \"${url}\"" >> "${STAGING}/fetch-mods.sh"
        fi
    done
fi

chmod +x "${STAGING}/fetch-mods.sh"

cat > "${STAGING}/run.sh" <<'EOF'
#!/usr/bin/env bash
set -e
java -Xms12G -Xmx12G \
    -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
    -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC \
    -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 \
    -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 \
    -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
    -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
    -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 \
    -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true \
    @user_jvm_args.txt @libraries/net/neoforged/neoforge/*/unix_args.txt \
    "$@"
EOF
chmod +x "${STAGING}/run.sh"

cat > "${STAGING}/README.txt" <<EOF
${PACK_NAME} ${PACK_VERSION} — Server Pack

1. Install NeoForge for Minecraft 1.21.1 in this directory:
     https://neoforged.net/

2. Run:  ./fetch-mods.sh
3. Accept the EULA in eula.txt
4. Start: ./run.sh nogui

Tune memory in run.sh if 12G is wrong for your box.
EOF

(cd dist/staging && zip -qr "../${INSTANCE_NAME}.zip" "${INSTANCE_NAME}")
ls -lh "${OUT}"
echo "Built: ${OUT}"
