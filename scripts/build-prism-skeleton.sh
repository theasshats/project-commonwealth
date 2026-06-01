#!/usr/bin/env bash
# Builds the skeleton of a Prism Launcher instance directory.
#
# Usage: ./build-prism-skeleton.sh <output-dir> <variant>
#   <output-dir> -- where to scaffold the instance dir (e.g. dist/staging/foo)
#   <variant>    -- "bundled" or "installer"; controls instance.cfg notes only
#
# Reads version metadata from pack.toml. Does NOT populate mods/ — that's the
# caller's job (different per variant).

set -euo pipefail

OUT_DIR="${1:?usage: build-prism-skeleton.sh <out-dir> <variant>}"
VARIANT="${2:?usage: build-prism-skeleton.sh <out-dir> <variant>}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

PACK_NAME="$(grep -E '^name\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
PACK_VERSION="$(grep -E '^version\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
MC_VERSION="$(grep -E '^minecraft\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"
NEOFORGE_VERSION="$(grep -E '^neoforge\s*=' pack.toml | head -1 | sed -E 's/.*"([^"]+)".*/\1/')"

mkdir -p "${OUT_DIR}/.minecraft"

# mmc-pack.json — tells Prism which Minecraft + loader to use
cat > "${OUT_DIR}/mmc-pack.json" <<EOF
{
    "components": [
        {
            "important": true,
            "uid": "net.minecraft",
            "version": "${MC_VERSION}"
        },
        {
            "uid": "net.neoforged",
            "version": "${NEOFORGE_VERSION}"
        }
    ],
    "formatVersion": 1
}
EOF

# instance.cfg — display name, memory, JVM args (Aikar's flags, 12G heap)
cat > "${OUT_DIR}/instance.cfg" <<EOF
[General]
ConfigVersion=1.2
InstanceType=OneSix
JavaArchitecture=64
JavaVersion=21
JvmArgs=-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
MaxMemAlloc=12288
MinMemAlloc=8192
OverrideJavaArgs=true
OverrideMemory=true
PermGen=256
iconKey=default
name=${PACK_NAME} ${PACK_VERSION}
notes=Built from ${PACK_NAME} ${PACK_VERSION} (${VARIANT}).\nSee README in instance for details.
EOF

# Copy configs/kubejs/etc. that should be on the client.
# tacz/ carries the committed Create: Armorer gun pack zip -> .minecraft/tacz/ (TaCZ loads it there).
for d in config defaultconfigs kubejs resourcepacks shaderpacks tacz; do
    if [[ -d "${d}" ]]; then
        cp -r "${d}" "${OUT_DIR}/.minecraft/"
    fi
done

echo "Prism skeleton built at: ${OUT_DIR}"
