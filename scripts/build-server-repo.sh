#!/usr/bin/env bash
# Build the derpack-server deploy repo from scripts/server-repo/.
#
# TRANSITIONAL one-shot. The Derpack X server deploy config (compose +
# auto-update.sh) is moving OUT of the pack repo into its own repo,
# derpack-org/derpack-server — the same split as the site. The agent sandbox
# can't create org repos (the GitHub app is scoped to Derpack-X), so this lets a
# maintainer do it in one command. Source of truth is scripts/server-repo/; once
# derpack-server is populated, this script AND scripts/server-repo/ can be
# deleted from the pack repo (the doc pointer in docs/SERVER.md stays).
#
#   ./scripts/build-server-repo.sh             # bundle only -> dist/derpack-server.zip
#   ./scripts/build-server-repo.sh --push      # also create + push the repo (needs gh)
#   ./scripts/build-server-repo.sh --push --public
#
# The bundle is the new repo's root: docker-compose.yml, auto-update.sh,
# .env.example, .gitignore, README.md — drop straight into the box's deploy dir.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${REPO_ROOT}"

readonly SRC="scripts/server-repo"
readonly ORG_REPO="derpack-org/derpack-server"
readonly OUT_DIR="dist/derpack-server"
readonly OUT_ZIP="dist/derpack-server.zip"

PUSH=false
VIS="private"
while [[ $# -gt 0 ]]; do
    case "$1" in
        --push)   PUSH=true; shift ;;
        --public) VIS="public"; shift ;;
        --private) VIS="private"; shift ;;
        *) echo "usage: $0 [--push] [--public|--private]" >&2; exit 1 ;;
    esac
done

[[ -d "${SRC}" ]] || { echo "ERROR: ${SRC} not found (run from the pack repo)." >&2; exit 1; }
[[ -f "${SRC}/docker-compose.yml" && -f "${SRC}/auto-update.sh" ]] \
    || { echo "ERROR: ${SRC} is missing deploy files." >&2; exit 1; }

# --- Bundle -----------------------------------------------------------------
rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"
cp -a "${SRC}/." "${OUT_DIR}/"          # includes dotfiles (.env.example, .gitignore)
chmod +x "${OUT_DIR}/auto-update.sh"

mkdir -p dist
( cd dist && rm -f "$(basename "${OUT_ZIP}")" && zip -qr "$(basename "${OUT_ZIP}")" "$(basename "${OUT_DIR}")" )

echo "==> Bundle: ${OUT_ZIP}"
echo "    Repo root contents:"
( cd "${OUT_DIR}" && find . -mindepth 1 -maxdepth 1 | sort | sed 's#^\./#      #' )

# --- Optional: create + push the repo ---------------------------------------
if [[ "${PUSH}" == "true" ]]; then
    command -v gh >/dev/null 2>&1 \
        || { echo "ERROR: gh (GitHub CLI) not found. Install it, or push ${OUT_ZIP} by hand." >&2; exit 1; }
    echo "==> Creating ${ORG_REPO} (${VIS}) and pushing the bundle..."
    (
        cd "${OUT_DIR}"
        git init -q -b main
        git add -A
        git commit -q -m "Initial deploy config (from Derpack-X/scripts/server-repo)"
        gh repo create "${ORG_REPO}" "--${VIS}" \
            -d "Deploy config for the Derpack X server (ishimura)" \
            --source=. --remote=origin --push
    )
    echo "==> Done: https://github.com/${ORG_REPO}"
    echo "    Next: delete scripts/server-repo/ and scripts/build-server-repo.sh from the pack repo."
else
    echo "    (no --push: bundle only. Add --push to create ${ORG_REPO} via gh.)"
fi
