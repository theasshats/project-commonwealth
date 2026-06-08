#!/usr/bin/env bash
# Prune the mod-data digest down to the CURRENT modlist.
#
# Why this exists: scripts/extract-mod-data.sh (run by ground-truth.yml) only
# WRITES a file per fetched jar — it never deletes the digest of a mod that was
# removed from the pack, or of a superseded jar version. So every cut / version
# bump leaves a stale by-mod/recipes/loot entry behind, and the connectivity
# tooling (tools/recipe-graph/, which reads tools/mod-data/recipes/) ends up
# measuring phantom mods. This reconciles the digest to mods/*.pw.toml.
#
# It is deterministic and conservative: it keeps exactly the digest files whose
# basename matches a current jar `filename` in a manifest, so a file that IS in
# the pack is never touched. Everything else (removed mods, old jar versions) is
# dropped, and INDEX-ores / INDEX-biome-modifiers / README are reconciled to match.
#
# KEEPING BUNDLED + HAND-SEEDED MODS (both survive a prune):
#  - Jar-in-Jar: extract-mod-data.sh recurses into bundles and tags each nested
#    mod with a `bundled-in: <outer jar>` header. The prune keeps such a file
#    while its outer jar is installed (and drops it when the bundle leaves) — so
#    the three mods nested in create-aeronautics-bundled (simulated / offroad /
#    base aeronautics) ride along automatically, no name allowlist needed.
#  - PROTECT_RE is the fallback for anything hand-seeded that the automated pass
#    can't reproduce AND that lacks a bundled-in header: a name matching it is
#    ALWAYS kept even without a current manifest match. Widen it if such a mod
#    is added.
#
# Safe to re-run after any curation pass. Run from the repo root:
#   scripts/prune-mod-data.sh            # prune
#   DRY_RUN=1 scripts/prune-mod-data.sh  # report only, change nothing
set -euo pipefail

OUT="${1:-tools/mod-data}"
PROTECT_RE="${PROTECT_RE:-aeronautic}"
DRY_RUN="${DRY_RUN:-}"

python3 - "$OUT" "$PROTECT_RE" "${DRY_RUN}" <<'PY'
import sys, os, re, glob

out, protect_re, dry = sys.argv[1], re.compile(sys.argv[2], re.I), bool(sys.argv[3])

# Current jar basenames from the manifests (allow leading whitespace before key).
keep = set()
for pw in glob.glob("mods/*.pw.toml"):
    m = re.search(r'^\s*filename\s*=\s*"(.+?)\.jar"', open(pw, encoding="utf-8").read(), re.M)
    if m:
        keep.add(m.group(1))
if not keep:
    sys.exit("refusing to prune: found 0 current jars (run from repo root?)")

# Bundled mods (extract-mod-data.sh recursed into a Jar-in-Jar) carry a
# `bundled-in: <outer jar>` header — keep them while that outer jar is installed,
# drop them when it leaves. Map nested basename -> outer jar from the by-mod files.
bundled = {}
for p in glob.glob(os.path.join(out, "by-mod", "*.txt")):
    with open(p, encoding="utf-8") as fh:
        fh.readline()                       # "# <name>"
        m = re.match(r'bundled-in:\s*(\S.*)', fh.readline())
    if m:
        bundled[os.path.basename(p)[:-4]] = m.group(1).strip()

def protected(name): return bool(protect_re.search(name))
def kept(name):
    if name in keep or protected(name):
        return True
    par = bundled.get(name)                 # bundled mod: follow its outer jar
    return bool(par and (par in keep or protected(par)))

# 1) Per-mod files: by-mod / recipes / loot
pruned, protected_kept = [], set()
for sub in ("by-mod", "recipes", "loot"):
    d = os.path.join(out, sub)
    for p in sorted(glob.glob(os.path.join(d, "*.txt"))):
        base = os.path.basename(p)[:-4]
        if base in keep:
            continue
        if kept(base):                      # protected, or bundled-in an installed jar
            protected_kept.add(base)
            continue
        pruned.append(os.path.relpath(p))
        if not dry:
            os.remove(p)

# 2) Aggregate INDEX files — keep only lines whose leading jar token is kept.
def filter_index(path, sep):
    if not os.path.exists(path): return 0
    lines = open(path, encoding="utf-8").read().splitlines()
    out_lines = [l for l in lines if not l.strip() or kept(l.split(sep, 1)[0])]
    removed = len([l for l in lines if l.strip()]) - len([l for l in out_lines if l.strip()])
    if not dry and removed:
        open(path, "w", encoding="utf-8").write("\n".join(out_lines) + ("\n" if out_lines else ""))
    return removed

ores_removed = filter_index(os.path.join(out, "INDEX-ores.txt"), ": ")
bmod_removed = filter_index(os.path.join(out, "INDEX-biome-modifiers.txt"), "\t")

# 3) README jar count -> current by-mod file count (post-prune).
n_bymod = len([p for p in glob.glob(os.path.join(out, "by-mod", "*.txt"))])
if dry:  # account for not-yet-deleted by-mod files in the count
    n_bymod = len([p for p in glob.glob(os.path.join(out, "by-mod", "*.txt"))
                   if kept(os.path.basename(p)[:-4])])
readme = os.path.join(out, "README.txt")
if os.path.exists(readme) and not dry:
    txt = re.sub(r'over \d+ jars', f'over {n_bymod} jars', open(readme, encoding="utf-8").read())
    open(readme, "w", encoding="utf-8").write(txt)

print(f"current jars (manifests): {len(keep)}")
print(f"protected (kept, no current manifest match): {sorted(protected_kept) or '—'}")
print(f"per-mod files {'to prune' if dry else 'pruned'}: {len(pruned)}")
print(f"INDEX-ores lines removed: {ores_removed} | INDEX-biome-modifiers lines removed: {bmod_removed}")
print(f"by-mod files after: {n_bymod}")
PY