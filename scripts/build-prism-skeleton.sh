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

# JVM args + heap come from the shared single source of truth scripts/instance-jvm.cfg
# (also read by the editor builder, tools/editor-src/internal/builder/builder.go) so the
# installer build and the editor build can't drift on Java flags — edit them there.
JVM_BLOCK="$(grep -vE '^[[:space:]]*(#|$)' scripts/instance-jvm.cfg)"

# instance.cfg — display name, memory, JVM args (from instance-jvm.cfg)
cat > "${OUT_DIR}/instance.cfg" <<EOF
[General]
ConfigVersion=1.2
InstanceType=OneSix
JavaArchitecture=64
JavaVersion=21
${JVM_BLOCK}
OverrideJavaArgs=true
OverrideMemory=true
PermGen=256
iconKey=default
name=${PACK_NAME} ${PACK_VERSION}
notes=Built from ${PACK_NAME} ${PACK_VERSION} (${VARIANT}).\nSee README in instance for details.
EOF

# Copy the override dirs that belong on the client. The list lives in
# scripts/instance-dirs.txt (shared with build-server.sh and the editor builder) so the
# three builders can't drift — see that file's header. tacz/ (scope both) carries the
# committed Create: Armorer gun pack zip -> .minecraft/tacz/ (TaCZ loads it there).
while read -r d scope _; do
    [[ -z "${d}" || "${d}" == \#* ]] && continue
    [[ "${scope}" == "both" || "${scope}" == "client" ]] || continue
    if [[ -d "${d}" ]]; then
        cp -r "${d}" "${OUT_DIR}/.minecraft/"
    fi
done < scripts/instance-dirs.txt

echo "Prism skeleton built at: ${OUT_DIR}"
