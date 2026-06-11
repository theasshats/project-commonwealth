#!/usr/bin/env python3
"""Validate the GTMOGS ore-vein layer (kubejs/data/pcmc/gtmogs/ore_vein/).

Catches the worldgen mistakes that are valid JSON and therefore sail through
pr-checks green but crash or silently misbehave at world creation:

  - a band keyed `target` instead of the required plural `targets` (crashes worldgen)
  - missing bands / missing top-level keys
  - placed block states that exist in no installed mod (checked against
    tools/mod-data digests; minecraft: ids are trusted)
  - a vein whose `biomes` tag file does not exist
  - small-ore features whose configured/placed halves or biome-modifier entry
    are out of sync (a placed_feature pointing at a missing configured_feature
    crashes world creation)

Also prints the per-region weight shares (including megas) so a tuning change
can be sanity-checked against the intended rarity math without booting the game.

Run from the repo root:  python3 scripts/validate-ore-veins.py
Exit code 0 = clean, 1 = problems found.
"""
import glob
import json
import os
import re
import sys

VEIN_DIR = "kubejs/data/pcmc/gtmogs/ore_vein"
TAG_DIR = "kubejs/data/pcmc/tags/worldgen/biome"
SMALL_CONF = "kubejs/data/pcmc/worldgen/configured_feature"
SMALL_PLACED = "kubejs/data/pcmc/worldgen/placed_feature"
SMALL_MODIFIER = "kubejs/data/pcmc/neoforge/biome_modifier/small_ores.json"
BANDS = ("primary", "secondary", "between", "sporadic")

problems = []


def known_ids():
    ids = set()
    for f in glob.glob("tools/mod-data/by-mod/*.txt"):
        for m in re.finditer(r"\b([a-z0-9_]+:[a-z0-9_/]+)\b", open(f, errors="ignore").read()):
            ids.add(m.group(1))
    return ids


def check_veins(ids):
    weights = {}
    for f in sorted(glob.glob(f"{VEIN_DIR}/*.json")):
        name = os.path.basename(f)[:-5]
        d = json.load(open(f))
        for key in ("cluster_size", "density", "weight", "biomes", "height_range", "generator"):
            if key not in d:
                problems.append(f"{name}: missing top-level `{key}`")
        gen = d.get("generator", {})
        for band in BANDS:
            b = gen.get(band)
            if b is None:
                problems.append(f"{name}: missing band `{band}`")
                continue
            if "targets" not in b:
                problems.append(f"{name}/{band}: no `targets` (plural!) — a singular `target` "
                                f"parses as JSON but CRASHES world creation. keys={list(b)}")
                continue
            if "layers" not in b:
                problems.append(f"{name}/{band}: missing `layers`")
            for t in b["targets"]:
                if "target" not in t or "state" not in t:
                    problems.append(f"{name}/{band}: target entry missing inner `target`/`state`")
                    continue
                state = t["state"].get("Name", "?")
                if state.split(":")[0] != "minecraft" and state not in ids:
                    problems.append(f"{name}/{band}: block `{state}` not found in tools/mod-data digests")
        biomes = d.get("biomes", "")
        if isinstance(biomes, str) and biomes.startswith("#pcmc:"):
            tag = biomes.split(":", 1)[1]
            if not os.path.exists(f"{TAG_DIR}/{tag}.json"):
                problems.append(f"{name}: biome tag file {TAG_DIR}/{tag}.json does not exist")
        else:
            problems.append(f"{name}: `biomes` should be exactly one `#pcmc:vein_*` tag (got {biomes!r}) "
                            f"— edit the tag file to move a vein, never this field")
        weights[name] = d.get("weight", 0)
    return weights


def check_small_ores():
    conf = {os.path.basename(p)[:-5] for p in glob.glob(f"{SMALL_CONF}/small_*.json")}
    placed = {os.path.basename(p)[:-5] for p in glob.glob(f"{SMALL_PLACED}/small_*.json")}
    listed = {f.split(":", 1)[1] for f in json.load(open(SMALL_MODIFIER))["features"]}
    for missing in placed - conf:
        problems.append(f"small ores: placed_feature {missing} has no configured_feature (CRASHES world creation)")
    for missing in conf - placed:
        problems.append(f"small ores: configured_feature {missing} has no placed_feature (dead file)")
    for missing in listed - placed:
        problems.append(f"small ores: biome modifier lists {missing} but no placed_feature exists (CRASHES)")
    for orphan in placed - listed:
        problems.append(f"small ores: {orphan} exists but is not in the small_ores biome modifier (never generates)")


def region_shares(weights):
    # region -> member veins, mirrors the vein_* tag files; update when regions move.
    regions = {
        "hills": ["tin", "lead", "magnetite", "silver"],
        "mountains": ["iron", "lead", "magnetite", "nickel", "emerald", "palladium", "iron_mega"],
        "badlands": ["copper", "gold", "lithium", "thorium", "copper_mega"],
        "taiga/forest": ["coal", "coal_mega"],
        "savanna": ["zinc", "gold", "nickel", "bauxite"],
        "plains": ["tin", "zinc", "lignite"],
        "desert": ["redstone", "lithium"],
        "jungle": ["bauxite", "jade", "diamond"],
    }
    print("\nper-region weight shares (anchor every grid^2 chunks; grid 5 = 25):")
    for region, members in regions.items():
        total = sum(weights.get(m, 0) for m in members)
        if not total:
            continue
        parts = ", ".join(f"{m} {weights.get(m, 0) / total * 100:.0f}%" for m in members)
        print(f"  {region} (sum {total}): {parts}")
    print("  singletons (weight moot, rarity = biome rarity): lapis/snowy, salt/coasts,"
          " lignite/swamps, mithril/Terralith specials")


def main():
    ids = known_ids()
    weights = check_veins(ids)
    check_small_ores()
    print(f"{len(weights)} veins checked against {len(ids)} known ids:",
          "ALL CLEAN" if not problems else f"{len(problems)} PROBLEM(S)")
    for p in problems:
        print("  !!", p)
    region_shares(weights)
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
