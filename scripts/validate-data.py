#!/usr/bin/env python3
"""Validate shipped data files for PR checks.

`packwiz refresh` hashes every file but only parses the packwiz manifests, so a
broken KubeJS recipe JSON or a malformed config TOML ships silently. This walks
the data that gets shipped to every install and parses it:

  * JSON under kubejs/, config/, defaultconfigs/ (recipes, worldgen, loot, …);
  * TOML under config/, defaultconfigs/ (per-mod configs).

(JavaScript under kubejs/ is checked separately with `node --check` in CI.)

Stdlib only (json, tomllib). Exits non-zero on the first batch of failures so CI
can gate the merge. Run locally with: python3 scripts/validate-data.py
"""

from __future__ import annotations

import json
import sys
import tomllib
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

JSON_ROOTS = ("kubejs", "config", "defaultconfigs")
TOML_ROOTS = ("config", "defaultconfigs")


def check(parser, roots: tuple[str, ...], suffix: str) -> tuple[int, int]:
    checked = 0
    errors = 0
    for root in roots:
        base = REPO_ROOT / root
        if not base.is_dir():
            continue
        for path in sorted(base.rglob(f"*.{suffix}")):
            checked += 1
            try:
                parser(path)
            except Exception as exc:  # noqa: BLE001 - report any parse failure
                print(f"{path.relative_to(REPO_ROOT)}: invalid {suffix.upper()}: {exc}")
                errors += 1
    return checked, errors


def parse_json(path: Path) -> None:
    with path.open("rb") as fh:
        json.load(fh)


def parse_toml(path: Path) -> None:
    with path.open("rb") as fh:
        tomllib.load(fh)


def main() -> int:
    json_checked, json_errors = check(parse_json, JSON_ROOTS, "json")
    toml_checked, toml_errors = check(parse_toml, TOML_ROOTS, "toml")

    total_errors = json_errors + toml_errors
    if total_errors:
        print(f"\nFAILED: {total_errors} parse error(s).")
        return 1

    print(f"OK: {json_checked} JSON + {toml_checked} TOML file(s) parsed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
