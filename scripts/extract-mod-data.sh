#!/usr/bin/env bash
# Extract licensing-SAFE facts from mod jars into a text digest for offline reference.
#
# Captures ONLY functional identifiers + tiny structural metadata + DERIVED indexes:
#   - mod id/version/deps (META-INF/neoforge.mods.toml headers)
#   - block ids, item ids
#   - neoforge biome_modifier contents (small structural json)
#   - c: common tag membership
#   - recipe INDEX  : per recipe,     "id | type | referenced ids"  (derived, NOT verbatim)
#   - loot INDEX    : per loot table,  "id | type | referenced ids"  (derived, NOT verbatim)
# Never copies verbatim recipes/loot/lang/models/textures -> safe to commit.
#
# Jar-in-Jar: a mod can ship other mods nested under META-INF/jarjar/ (NeoForge
# bundles). Create: Aeronautics is the load-bearing case — one `aeronautics_bundled`
# jar nests THREE real mods (simulated / offroad / base aeronautics), so a flat read
# of the outer jar yields an empty wrapper. We recurse ONE level into the nested jars
# and emit each content-bearing one as its own by-mod/recipes/loot entry, tagged with
# a `bundled-in: <outer jar>` header so prune-mod-data.sh keeps it in sync with the
# pack (it's kept as long as its bundling jar is still installed). Pure-library nested
# jars (no blocks/items/recipes/loot/tags) are skipped, and a nested mod that also
# ships standalone is left to its standalone entry (no duplicate).
#
# Single Python pass (one zip open per jar, in-process) — fast enough for the full pack.
# Usage: scripts/extract-mod-data.sh <jars-dir> [out-dir]
set -euo pipefail
python3 - "$@" <<'PY'
import sys, os, re, json, zipfile, glob, io

jars_dir = sys.argv[1]
out = sys.argv[2] if len(sys.argv) > 2 else "tools/mod-data"
bymod, recdir, lootdir = (os.path.join(out, d) for d in ("by-mod", "recipes", "loot"))
for d in (bymod, recdir, lootdir):
    os.makedirs(d, exist_ok=True)

RL        = re.compile(r'^[a-z0-9_.-]+:[a-z0-9_./-]+$')
BLOCK     = re.compile(r'^assets/([^/]+)/blockstates/(.+)\.json$')
ITEM      = re.compile(r'^assets/([^/]+)/models/item/(.+)\.json$')
CTAG      = re.compile(r'^data/c/tags/(.+)\.json$')
RECIPE    = re.compile(r'^data/([^/]+)/recipes?/(.+)\.json$')
LOOT      = re.compile(r'^data/([^/]+)/loot_tables?/(.+)\.json$')
TOMLKEY   = re.compile(r'^\s*(modId|version|displayName|license|versionRange)\s*=', re.I)
NESTED    = re.compile(r'.+\.jar$', re.I)   # a nested jar ANYWHERE (jarjar, a custom folder, or root)

def refs(obj):
    found = set()
    def walk(x):
        if isinstance(x, str):
            if RL.match(x): found.add(x)
        elif isinstance(x, dict):
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(obj)
    return " ".join(sorted(found))

def scan(zf):
    """Pull facts from one open zip; also collect nested jar-in-jar entry names."""
    blocks, items, bmods, ctags, rec_lines, loot_lines, toml, nested = [], [], [], [], [], [], [], []
    try:
        toml = [l.strip() for l in zf.read("META-INF/neoforge.mods.toml").decode("utf-8", "replace").splitlines() if TOMLKEY.match(l)]
    except Exception:
        pass
    for n in zf.namelist():
        if NESTED.match(n): nested.append(n); continue
        m = BLOCK.match(n)
        if m: blocks.append(f"{m.group(1)}:{m.group(2)}"); continue
        m = ITEM.match(n)
        if m: items.append(f"{m.group(1)}:{m.group(2)}"); continue
        if "/neoforge/biome_modifier/" in n and n.endswith(".json"):
            try: bmods.append((n.split("/biome_modifier/")[-1], json.dumps(json.loads(zf.read(n)))))
            except Exception: pass
            continue
        m = CTAG.match(n)
        if m:
            try: ctags.append((m.group(1), json.dumps(json.loads(zf.read(n)))))
            except Exception: pass
            continue
        m = RECIPE.match(n)
        if m:
            try: obj = json.loads(zf.read(n))
            except Exception: continue
            t = obj.get("type", "?") if isinstance(obj, dict) else "?"
            rec_lines.append(f"{m.group(1)}:{m.group(2)} | {t} | {refs(obj)}")
            continue
        m = LOOT.match(n)
        if m:
            try: obj = json.loads(zf.read(n))
            except Exception: continue
            t = obj.get("type", "?") if isinstance(obj, dict) else "?"
            loot_lines.append(f"{m.group(1)}:{m.group(2)} | {t} | {refs(obj)}")
    return dict(blocks=blocks, items=items, bmods=bmods, ctags=ctags,
                rec=rec_lines, loot=loot_lines, toml=toml, nested=nested)

def has_content(f):
    return bool(f["blocks"] or f["items"] or f["rec"] or f["loot"] or f["bmods"] or f["ctags"])

ores_idx = open(os.path.join(out, "INDEX-ores.txt"), "w", encoding="utf-8")
bmod_idx = open(os.path.join(out, "INDEX-biome-modifiers.txt"), "w", encoding="utf-8")
written = set()

def emit(name, f, bundled_by=None):
    """Write the by-mod / recipes / loot entries + INDEX lines for one mod."""
    head = f"# {name}\n"
    if bundled_by: head += f"bundled-in: {bundled_by}\n"
    with open(os.path.join(bymod, name + ".txt"), "w", encoding="utf-8") as fh:
        fh.write(head + "\n## mod metadata (id / version / deps)\n" + "\n".join(f["toml"]))
        fh.write("\n\n## blocks\n" + "\n".join(sorted(set(f["blocks"]))))
        fh.write("\n\n## items\n" + "\n".join(sorted(set(f["items"]))))
        fh.write("\n\n## neoforge biome_modifiers\n" + "\n".join(f"{a} :: {b}" for a, b in sorted(f["bmods"])))
        fh.write("\n\n## c: common tag membership\n" + "\n".join(f"{a} :: {b}" for a, b in sorted(f["ctags"])) + "\n")
    if f["rec"]:
        open(os.path.join(recdir, name + ".txt"), "w", encoding="utf-8").write("\n".join(sorted(f["rec"])) + "\n")
    if f["loot"]:
        open(os.path.join(lootdir, name + ".txt"), "w", encoding="utf-8").write("\n".join(sorted(f["loot"])) + "\n")
    for b in sorted(set(f["blocks"])):
        if "_ore" in b: ores_idx.write(f"{name}: {b}\n")
    for a, b in sorted(f["bmods"]):
        bmod_idx.write(f"{name}\t{a}\t{b}\n")
    written.add(name)

def collect(zf, zf_facts, top_name, depth, pending):
    """Recurse into nested jars wherever they sit (any folder depth, and up to `depth`
    jar-in-jar levels), queueing each. A bundled mod is attributed to the installed
    TOP-LEVEL jar (not its immediate container) so the prune keeps it while that jar
    is in the pack, however deep the nesting."""
    if depth <= 0:
        return
    for ne in zf_facts["nested"]:
        nb = os.path.basename(ne)[:-4]
        try:
            nz = zipfile.ZipFile(io.BytesIO(zf.read(ne)))
        except Exception:
            continue
        nf = scan(nz)
        pending.append((nb, nf, top_name))
        collect(nz, nf, top_name, depth - 1, pending)
        nz.close()

# Pass 1 — top-level jars (output byte-identical to the pre-jarjar digest).
pending = []  # (nested_name, facts, top_jar) deferred so a standalone copy wins
for jar in sorted(glob.glob(os.path.join(jars_dir, "*.jar"))):
    name = os.path.basename(jar)[:-4]
    try:
        zf = zipfile.ZipFile(jar)
    except Exception:
        continue
    f = scan(zf)
    emit(name, f)
    collect(zf, f, name, 3, pending)
    zf.close()

# Pass 2 — bundled mods: only those with real content and no standalone entry.
nested_count = 0
for nb, nf, parent in pending:
    if nb in written or not has_content(nf):
        continue
    emit(nb, nf, bundled_by=parent)
    nested_count += 1

ores_idx.close(); bmod_idx.close()
# Sort INDEX-ores in place. (Read BEFORE reopening for write — opening "w" truncates
# the file, so evaluating the read as the write-arg would have blanked it; that latent
# bug had kept INDEX-ores.txt empty.)
p = os.path.join(out, "INDEX-ores.txt")
_ores = sorted(open(p, encoding="utf-8").read().splitlines())
open(p, "w", encoding="utf-8").write("\n".join(_ores) + ("\n" if _ores else ""))
total = len(written)
open(os.path.join(out, "README.txt"), "w", encoding="utf-8").write(
    "Mod-data digest — IDs / tags / biome-modifiers + recipe & loot INDEXES (derived, not verbatim).\n"
    f"Generated by scripts/extract-mod-data.sh over {total} jars.\n\n"
    "  by-mod/<jar>.txt            blocks, items, biome_modifiers, c: tags, deps\n"
    "  recipes/<jar>.txt           per-recipe 'id | type | referenced ids'\n"
    "  loot/<jar>.txt              per-loot-table 'id | type | referenced ids'\n"
    "  INDEX-ores.txt              every *_ore blockstate across all mods\n"
    "  INDEX-biome-modifiers.txt   every neoforge biome_modifier across all mods\n\n"
    "A `bundled-in: <outer jar>` header marks a mod extracted from inside a Jar-in-Jar\n"
    "bundle (e.g. the three mods nested in create-aeronautics-bundled).\n\n"
    "Derived indexes only (no verbatim recipe/loot/lang/assets). Pair with in-game JEI for code-injected ores.\n")
print(f"Extracted {total} mods ({nested_count} bundled-in) -> {out}")
PY