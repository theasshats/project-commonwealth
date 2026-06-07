#!/usr/bin/env bash
# Auto-open the next PATCH and next MINOR version branches + draft PRs after a
# release, each with pack.toml pre-bumped and a skeleton patch note — so the next
# version is always staged and a forgotten bump can't silently skip a release.
#
# Run by release.yml after a release is cut. Requires:
#   GH_TOKEN      — a token with contents:write + pull-requests:write
#   RELEASED_TAG  — the tag just released, e.g. v0.5.4
#
# Idempotent: any target branch that already exists is skipped, so the standing
# next-minor branch (e.g. v0.6.0) is only ever created once.
set -euo pipefail

tag="${RELEASED_TAG:?RELEASED_TAG required}"
ver="${tag#v}"
IFS='.' read -r MAJ MIN PAT <<<"$ver"

if ! [[ "$MAJ" =~ ^[0-9]+$ && "$MIN" =~ ^[0-9]+$ && "$PAT" =~ ^[0-9]+$ ]]; then
  echo "::error::tag '$tag' is not a 3-part vMAJ.MIN.PATCH — not staging next branches"
  exit 1
fi

next_patch="${MAJ}.${MIN}.$((PAT + 1))"
next_minor="${MAJ}.$((MIN + 1)).0"

git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

open_branch() {
  local v="$1" kind="$2"
  local branch="v${v}"

  if git ls-remote --exit-code --heads origin "refs/heads/${branch}" >/dev/null 2>&1; then
    echo "==> ${branch} already exists — skipping (${kind})."
    return 0
  fi

  echo "==> staging ${branch} (${kind}, version ${v})"
  git checkout -B "${branch}" origin/main

  # Bump pack.toml version (a one-line change; doesn't touch the packwiz index).
  sed -i -E "s/^version[[:space:]]*=[[:space:]]*\".*\"/version = \"${v}\"/" pack.toml

  # Insert a skeleton patch-note stub before the first existing release heading.
  # Player-facing prose is filled in by a human before this version ships.
  python3 - "$v" <<'PY'
import re, sys
v = sys.argv[1]
path = "docs/PATCHNOTES.md"
s = open(path, encoding="utf-8").read()
stub = f"## {v} — TBD\n\n_Draft placeholder — replace with real notes before release._\n\n"
m = re.search(r"^## ", s, flags=re.M)
idx = m.start() if m else len(s)
open(path, "w", encoding="utf-8").write(s[:idx] + stub + s[idx:])
PY

  git add pack.toml docs/PATCHNOTES.md
  git commit -m "chore: stage v${v} (auto-opened after ${tag})"
  git push -u origin "${branch}"

  gh pr create \
    --base main --head "${branch}" --draft \
    --title "v${v} — staged" \
    --body "Auto-opened after \`${tag}\` so the next version is always staged with the bump in place.

- \`pack.toml\` is pre-bumped to \`${v}\` (${kind}).
- Fill in \`docs/PATCHNOTES.md\` and the milestone's content, then mark ready for review.
- On merge to \`main\`, \`release.yml\` tags + releases \`v${v}\` automatically.

_Auto-opened by \`scripts/open-next-version-branches.sh\`. \`pr-checks.yml\` won't run until you push a commit (GitHub doesn't run workflows for token-created PRs)._" \
    || echo "::warning::could not open PR for ${branch} (it may already exist)"
}

open_branch "$next_patch" "next patch"
open_branch "$next_minor" "next minor"
