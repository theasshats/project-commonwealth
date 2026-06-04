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


def scan_pass(p):
    """Return (seen, substantive) for one full pass dir."""
    d = os.path.join(PH, f'pass-{p:02d}')
    files = sorted(glob.glob(os.path.join(d, 'chunk-*.candidates.md')))
    if not files:
        sys.exit(f'no candidate files in {d} — run that full pass first')
    seen, substantive = set(), set()
    for f in files:
        mod = None
        for line in open(f, encoding='utf-8'):
            h = re.match(r'^##\s+`?([a-z0-9_\-\.]+)', line)
            if h:
                mod = h.group(1); seen.add(mod); continue
            if mod and SUBSTANTIVE.search(line):
                substantive.add(mod)
    return seen, substantive


def main():
    # --passes 13,14,15  (or legacy --pass 13). A mod freezes only if it was LEAVE-only in EVERY listed full
    # pass — multiple independent samples kill the single-agent-LEAVE variance.
    plist = [int(x) for x in arg('--passes', arg('--pass', '0')).split(',')]
    scans = {p: scan_pass(p) for p in plist}
    # reviewed in every pass; substantive (got a non-LEAVE) in NONE of them
    reviewed_all = set.intersection(*(s for s, _ in scans.values()))
    sub_any = set.union(*(sub for _, sub in scans.values()))
    leave_only_all = reviewed_all - sub_any

    acc = accepted_mods()
    # frozen = LEAVE-only across ALL full passes  AND  no accept anywhere  AND  no tangible content
    frozen = sorted(m for m in leave_only_all
                    if m not in acc and not has_content(m))
    kept_back = sorted(leave_only_all - set(frozen))   # LEAVE-only everywhere but spared by a guard
    print(f'passes {plist}: {len(reviewed_all)} reviewed in all | '
          f'{len(leave_only_all)} LEAVE-only in all | {len(frozen)} frozen | {len(kept_back)} kept (accept/item/block/loot)')
    if kept_back:
        print('  kept in rotation despite all-LEAVE:', ', '.join(kept_back))

    if '--write' in sys.argv:
        out = os.path.join(PH, 'LIBRARY-FREEZE.txt')
        with open(out, 'w', encoding='utf-8') as o:
            o.write('# Library freeze list — mods with NO content surface (0 blocks/0 items/loot=no), zero accepts\n'
                    f'# across all passes, and LEAVE-only in EVERY full pass {plist}. Built by scripts/phase2-freeze.py.\n'
                    '# Blind passes skip these. Anything with an accept, item/block, or loot table is NOT frozen.\n')
            o.write('\n'.join(frozen) + '\n')
        print(f'wrote {out} ({len(frozen)} mods)')


if __name__ == '__main__':
    main()

