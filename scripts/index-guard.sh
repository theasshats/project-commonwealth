#!/usr/bin/env bash
# Single source of truth for "is the packwiz index OK on this branch?".
#
# Runs `packwiz refresh` in the working tree, then prints exactly one verdict word
# to stdout and sets the exit code:
#
#   fresh      (exit 0) — index already up to date.
#   fixable    (exit 0) — stale, but only within KNOWN pack dirs; safe to auto-commit.
#   violation  (exit 1) — refresh pulled files in under a NEW top-level path (a dir
#                         that should be .packwizignore'd, e.g. site/), OR refresh
#                         touched files beyond the generated index — needs a human.
#
# Callers:
#   pr-checks.yml  — the "packwiz index" gate. Its exit code IS the check result, so
#                    routine staleness (fixable) passes and only a violation is red.
#                    No flicker: the kind of staleness sync-index auto-fixes is green.
#   sync-index.yml — the fixer. Reads the verdict to decide: commit the refresh
#                    (fixable) / nothing to do (fresh) / don't auto-commit (violation).
#
# It does NOT commit — the caller decides what to do with the refreshed tree.
# Diagnostics go to stderr (so they show in the CI log); only the verdict word goes
# to stdout (so a caller can capture it cleanly).
set -euo pipefail

# Top-level prefixes the index may legitimately reference: the shared instance-dirs
# set (the pack-content override dirs) + mods/, plus any prefix already committed.
allowed="$(mktemp)"
{
  awk 'NF && $1 !~ /^#/ {print $1}' scripts/instance-dirs.txt
  echo mods
  git show HEAD:index.toml | sed -nE 's#^file = "([^/"]+)(/.*)?"$#\1#p'
} | sort -u >"$allowed"

packwiz refresh >&2

if git diff --quiet -- index.toml pack.toml; then
  echo fresh
  exit 0
fi

# Refresh should only ever touch the generated files.
other="$(git diff --name-only -- . ':(exclude)index.toml' ':(exclude)pack.toml')"
if [ -n "$other" ]; then
  {
    echo "::error::packwiz refresh changed files beyond the index:"
    printf '  %s\n' $other
  } >&2
  echo violation
  exit 1
fi

# The .packwizignore guard: any top-level prefix the refreshed index references that
# isn't allowed means a directory that should be ignored got vacuumed in.
after="$(grep '^file = ' index.toml | sed -nE 's#^file = "([^/"]+)(/.*)?"$#\1#p' | sort -u)"
new="$(comm -23 <(printf '%s\n' "$after") "$allowed")"
if [ -n "$new" ]; then
  {
    echo "::error::index gained entries under a new top-level path:"
    printf '  %s\n' $new
    echo "Add a .packwizignore entry (if it shouldn't ship) or an scripts/instance-dirs.txt"
    echo "line (if it's real pack content), then push."
  } >&2
  echo violation
  exit 1
fi

echo fixable
exit 0
