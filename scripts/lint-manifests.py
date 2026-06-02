#!/usr/bin/env python3
"""Lint Derpack X packwiz manifests for PR checks.

Validates `mods/*.pw.toml` and `pack.toml` for the mistakes that slip past
`packwiz refresh` but break the pack at install or update time:

  * required fields (name, filename, [download] hash + hash-format);
  * a valid `side` value when present (convention: new mods are "both");
  * the **pin-placement gotcha** — `pin = true` must sit at the file top level,
    before any `[section]` header, or `packwiz update` silently ignores it
    (see CLAUDE.md / mods/README.md);
  * pack.toml carries a version and the [versions] minecraft + neoforge fields.

Stdlib only (tomllib, ships with Python 3.11+). Exits non-zero on any error so
CI can gate the merge. Run locally with: python3 scripts/lint-manifests.py
"""

from __future__ import annotations

import sys
import tomllib
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
MODS_DIR = REPO_ROOT / "mods"
PACK_TOML = REPO_ROOT / "pack.toml"

VALID_SIDES = {"both", "client", "server"}
# packwiz-supported hash formats; flag anything outside this so a typo surfaces.
VALID_HASH_FORMATS = {"sha1", "sha256", "sha512", "md5", "murmur2"}


def find_misplaced_pin(text: str) -> int | None:
    """Return the 1-based line number of a `pin =` key that lives under a
    [section] header (i.e. is silently ignored by packwiz), else None."""
    in_section = False
    for lineno, raw in enumerate(text.splitlines(), start=1):
        line = raw.strip()
        if line.startswith("#") or not line:
            continue
        if line.startswith("["):
            in_section = True
            continue
        key = line.split("=", 1)[0].strip()
        if key == "pin" and in_section:
            return lineno
    return None


def lint_mod_manifest(path: Path) -> list[str]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")

    try:
        data = tomllib.loads(text)
    except tomllib.TOMLDecodeError as exc:
        return [f"invalid TOML: {exc}"]

    for field in ("name", "filename"):
        value = data.get(field)
        if not isinstance(value, str) or not value.strip():
            errors.append(f"missing or empty required field `{field}`")

    side = data.get("side")
    if side is not None and side not in VALID_SIDES:
        errors.append(f"invalid side {side!r} (expected one of {sorted(VALID_SIDES)})")

    download = data.get("download")
    if not isinstance(download, dict):
        errors.append("missing [download] table")
    else:
        for field in ("hash", "hash-format"):
            value = download.get(field)
            if not isinstance(value, str) or not value.strip():
                errors.append(f"missing or empty [download] `{field}`")
        hash_format = download.get("hash-format")
        if isinstance(hash_format, str) and hash_format not in VALID_HASH_FORMATS:
            errors.append(
                f"unknown hash-format {hash_format!r} "
                f"(expected one of {sorted(VALID_HASH_FORMATS)})"
            )

    pin_line = find_misplaced_pin(text)
    if pin_line is not None:
        errors.append(
            f"`pin` on line {pin_line} sits under a [section] header — it must be "
            "a top-level key (before any section) or packwiz update ignores it"
        )

    return errors


def lint_pack_toml(path: Path) -> list[str]:
    errors: list[str] = []
    try:
        data = tomllib.loads(path.read_text(encoding="utf-8"))
    except tomllib.TOMLDecodeError as exc:
        return [f"invalid TOML: {exc}"]

    if not isinstance(data.get("version"), str) or not data["version"].strip():
        errors.append("missing or empty top-level `version`")

    versions = data.get("versions")
    if not isinstance(versions, dict):
        errors.append("missing [versions] table")
    else:
        for field in ("minecraft", "neoforge"):
            value = versions.get(field)
            if not isinstance(value, str) or not value.strip():
                errors.append(f"missing or empty [versions] `{field}`")

    return errors


def main() -> int:
    total_errors = 0
    checked = 0

    if not PACK_TOML.is_file():
        print(f"ERROR: {PACK_TOML} not found", file=sys.stderr)
        return 1
    for err in lint_pack_toml(PACK_TOML):
        print(f"pack.toml: {err}")
        total_errors += 1
    checked += 1

    for path in sorted(MODS_DIR.glob("*.pw.toml")):
        rel = path.relative_to(REPO_ROOT)
        for err in lint_mod_manifest(path):
            print(f"{rel}: {err}")
            total_errors += 1
        checked += 1

    if total_errors:
        print(f"\nFAILED: {total_errors} problem(s) across {checked} file(s).")
        return 1

    print(f"OK: {checked} manifest(s) passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
