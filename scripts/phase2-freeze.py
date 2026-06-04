#!/usr/bin/env python3
"""Build the library-freeze list from the ONE full pass (every dossier reviewed).

A mod is "frozen" (no content surface, safe to skip in future passes) only if ALL of these hold:
  - in the given full pass, every line it produced was a LEAVE (zero ACCEPT/REJECT/REWORK/NEW/CHALLENGE), AND
  - it has ZERO ACCEPT candidates across the whole merged dataset (CANDIDATES.tsv) — one pass's LEAVE must not
    override 13 passes that found a weave, AND
  - the jar registers 0 blocks AND 0 items AND loot=no — i.e. nothing tangible to act on.
Anything with an accept, an item/block, or a loot table (a loot-SEEDING Phase-3 action) stays in rotation.
Phase 2 produces Phase 3 actions, so loot-table seeding counts — structure/dungeon mods are NOT auto-frozen.

This is the explicit, auditable replacement for the old prose-regex SUPPORT filter: the freeze list is *earned*
by a real review plus hard zero-content evidence. Re-review the list before trusting it.

Usage:
  python3 scripts/phase2-freeze.py --pass 13          # scan tools/weave-ledger/phase2/pass-13/*.candidates.md
  python3 scripts/phase2-freeze.py --pass 13 --write  # also write LIBRARY-FREEZE.txt
"""
import os, re, glob, sys, csv

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PH = os.path.join(ROOT, 'tools', 'weave-ledger', 'phase2')
DOSS = os.path.join(ROOT, 'tools', 'mod-data', 'dossiers')
SUBSTANTIVE = re.compile(r'\b(ACCEPT|REJECT|REWORK|NEW:|CHALLENGE:)\b')


def arg(name, default=None):
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else default


def accepted_mods():
    f = os.path.join(PH, 'CANDIDATES.tsv')
    if not os.path.exists(f):
        return set()
    return {r['mod'] for r in csv.DictReader(open(f), delimiter='\t') if r['consensus'] == 'ACCEPT'}


def has_content(ns):
    """True if the dossier digest shows any block/item OR a loot table (= something actionable)."""
    p = os.path.join(DOSS, ns + '.md')
    if not os.path.exists(p):
        return False
    dig = open(p, encoding='utf-8').read().split('AUTO-DIGEST-FACTS', 1)[-1]
    m = re.search(r'(\d+) blocks, (\d+) items.*?loot=(\w+)', dig)
    if not m:
        return False
    return int(m.group(1)) > 0 or int(m.group(2)) > 0 or m.group(3) == 'yes'


def main():
    p = int(arg('--pass', '0'))
    d = os.path.join(PH, f'pass-{p:02d}')
    files = sorted(glob.glob(os.path.join(d, 'chunk-*.candidates.md')))
    if not files:
        sys.exit(f'no candidate files in {d} — run the full pass first')

    seen, substantive = set(), set()      # every mod with a header; mods with >=1 non-LEAVE line
    for f in files:
        mod = None
        for line in open(f, encoding='utf-8'):
            h = re.match(r'^##\s+`?([a-z0-9_\-\.]+)', line)
            if h:
                mod = h.group(1); seen.add(mod); continue
            if mod and SUBSTANTIVE.search(line):
                substantive.add(mod)

    acc = accepted_mods()
    # frozen = LEAVE-only in this pass  AND  no accept anywhere  AND  no tangible content (items/blocks/loot)
    frozen = sorted(m for m in (seen - substantive)
                    if m not in acc and not has_content(m))
    kept_back = sorted((seen - substantive) - set(frozen))   # LEAVE-only but spared by a guard
    print(f'pass-{p:02d}: {len(seen)} reviewed | {len(substantive)} substantive | '
          f'{len(frozen)} frozen | {len(kept_back)} LEAVE-only-but-kept (accept/item/block/loot)')
    if kept_back:
        print('  kept in rotation despite LEAVE:', ', '.join(kept_back))

    if '--write' in sys.argv:
        out = os.path.join(PH, 'LIBRARY-FREEZE.txt')
        with open(out, 'w', encoding='utf-8') as o:
            o.write('# Library freeze list — mods with NO content surface (0 blocks/0 items/loot=no), zero accepts\n'
                    '# across all passes, and LEAVE-only in the full pass. Built by scripts/phase2-freeze.py.\n'
                    '# Blind passes skip these. Anything with an accept, item/block, or loot table is NOT frozen.\n')
            o.write('\n'.join(frozen) + '\n')
        print(f'wrote {out} ({len(frozen)} mods)')


if __name__ == '__main__':
    main()

