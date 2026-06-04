#!/usr/bin/env python3
"""Build the library-freeze list from the ONE full pass (every dossier reviewed).

A mod is "frozen" (a pure code-library with no content surface) ONLY if, in the given full pass, every line it
produced was a LEAVE — i.e. it earned zero ACCEPT / REJECT / REWORK / NEW / CHALLENGE rows. Those mods will only
ever LEAVE, so subsequent blind passes skip them (phase2-chunks.py reads LIBRARY-FREEZE.txt). Anything that drew
even one substantive verdict stays in the rotation.

This is the explicit, auditable replacement for the old prose-regex SUPPORT filter: the freeze list is *earned*
by a real review, not guessed from dossier wording. Re-review the list before trusting it.

Usage:
  python3 scripts/phase2-freeze.py --pass 13          # scan tools/weave-ledger/phase2/pass-13/*.candidates.md
  python3 scripts/phase2-freeze.py --pass 13 --write  # also write LIBRARY-FREEZE.txt
"""
import os, re, glob, sys

PH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'tools', 'weave-ledger', 'phase2')
SUBSTANTIVE = re.compile(r'\b(ACCEPT|REJECT|REWORK|NEW:|CHALLENGE:)\b')


def arg(name, default=None):
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else default


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

    frozen = sorted(seen - substantive)
    print(f'pass-{p:02d}: {len(seen)} mods reviewed | {len(substantive)} substantive | {len(frozen)} LEAVE-only (freeze)')
    for m in frozen:
        print('  ', m)

    if '--write' in sys.argv:
        out = os.path.join(PH, 'LIBRARY-FREEZE.txt')
        with open(out, 'w', encoding='utf-8') as o:
            o.write('# Library freeze list — mods that only ever LEAVE (no content surface). Built by\n'
                    f'# scripts/phase2-freeze.py from the full pass-{p:02d}. Blind passes skip these. Re-review before trusting.\n')
            o.write('\n'.join(frozen) + '\n')
        print(f'wrote {out} ({len(frozen)} mods)')


if __name__ == '__main__':
    main()
