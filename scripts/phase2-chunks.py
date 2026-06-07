#!/usr/bin/env python3
"""Generate one Phase 2.x pass's randomized chunk assignment.

Each pass re-shuffles which mods share a chunk (different neighbours → tests whether chunk composition
changes the finds) and records which chunk the single Opus agent runs. Writes:
  tools/weave-ledger/phase2/pass-PP/chunk-NN.txt   (mod lists)
  tools/weave-ledger/phase2/pass-PP/MANIFEST.json  ({"pass","seed","opus_chunk","mode"})

Every pass covers EVERY dossier (full coverage — the library-freeze was RETIRED; nothing is excluded). The
pool is shuffled per --seed so a mod shares a chunk with different neighbours each pass. Only CUT mods
(CUT_NS in build-dossiers.py) are absent — they have no dossier.

Usage:
  python3 scripts/phase2-chunks.py --pass 1 --seed 1            # opus chunk auto = ((pass-1) % n_chunks)+1
  python3 scripts/phase2-chunks.py --pass 2 --seed 2 --opus-chunk 3 --mode context-fed
"""
import os, re, glob, sys, json, random

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSS = os.path.join(ROOT, 'tools', 'mod-data', 'dossiers')
PH = os.path.join(ROOT, 'tools', 'weave-ledger', 'phase2')
# Exclusion is OFF by design: NOTHING is excluded (maintainer call). Even mods with solid existing connections
# (recipes, mob drops) are reviewed — examining them alongside everything else can surface new links/methods.
# The only mods absent are CUT ones (no dossier exists). Pure code-libraries will simply LEAVE.
PILLARS = ('create', 'magic', 'economy', 'aeronautics', 'survival')


def arg(name, default=None):
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else default


def main():
    p = int(arg('--pass', '1'))
    seed = int(arg('--seed', str(p)))
    mode = arg('--mode', 'blind')                       # blind | context-fed
    # Universe = EVERY dossier. NOTHING is excluded (maintainer rule) — one shuffled pool so any mod can share
    # a chunk with any other (cross-mod adjacency is where new links get found). `well` just counts the
    # already-well-connected (>=2 anchor) mods for the summary line; it does not gate inclusion.
    #
    # The library-FREEZE was RETIRED. It skipped ~160 "zero-content" mods to save tokens, but its content test
    # trusted the digest's block/item count — which FALSE-ZEROES code-registered and mechanic-only content
    # (Create Aeronautics' parts, diet/AppleSeed, sleep/midnightthoughts, fishingreal). Those real content mods
    # got frozen and silently skipped, missing their weaves and re-introducing the exclusion the "review
    # everything" rule had removed. So every pass is now a FULL pass over all dossiers; the only absent mods are
    # CUT ones (no dossier). Pure code-libraries simply LEAVE each pass — cheap, and never a missed content mod.
    allns, well = [], 0
    for f in sorted(glob.glob(os.path.join(DOSS, '*.md'))):
        ns = os.path.basename(f)[:-3]
        head = open(f, encoding='utf-8').read().split('AUTO-DIGEST-FACTS', 1)[0]
        m = re.search(r'^anchors:\s*(.+)$', head, re.M)
        pill = sum(1 for q in PILLARS if re.search(r'\b' + q, m.group(1) if m else '', re.I))
        well += pill >= 2
        allns.append(ns)
    random.Random(seed).shuffle(allns)                  # the per-pass randomization
    size = int(arg('--size', '10'))                     # mods per chunk (bigger = fewer dispatched agents)
    chunks = [allns[i:i + size] for i in range(0, len(allns), size)]
    n = len(chunks)
    opus_chunk = int(arg('--opus-chunk', str((p - 1) % n + 1)))   # cycle opus across chunks over passes

    d = os.path.join(PH, f'pass-{p:02d}')
    os.makedirs(d, exist_ok=True)
    for i, ms in enumerate(chunks, 1):
        open(os.path.join(d, f'chunk-{i:02d}.txt'), 'w').write('\n'.join(ms) + '\n')
    json.dump({'pass': p, 'seed': seed, 'opus_chunk': opus_chunk, 'n_chunks': n, 'mode': mode},
              open(os.path.join(d, 'MANIFEST.json'), 'w'), indent=2)
    print(f'pass-{p:02d}: {len(allns)} mods (ALL dossiers — full coverage, no freeze; {well} already >=2-anchor) -> '
          f'{n} chunks (seed {seed}, opus=chunk-{opus_chunk:02d}, mode={mode}) -> {d}')


if __name__ == '__main__':
    main()
