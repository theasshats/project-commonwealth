#!/usr/bin/env python3
"""Generate one Phase 2.x pass's randomized chunk assignment.

Each pass re-shuffles which mods share a chunk (different neighbours → tests whether chunk composition
changes the finds) and records which chunk the single Opus agent runs. Writes:
  tools/weave-ledger/phase2/pass-PP/chunk-NN.txt   (mod lists)
  tools/weave-ledger/phase2/pass-PP/MANIFEST.json  ({"pass","seed","opus_chunk","mode"})

The coverage set (content mods at <2 pillars) is shuffled per --seed; the ≥2-pillar quality-audit set is a
fixed final chunk. Mods cut from the pack (CUT_NS in build-dossiers.py) are excluded automatically because
they have no dossier.

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
    # Universe = EVERY dossier. No exclusion, no coverage/audit split — one shuffled pool so any mod can share
    # a chunk with any other (cross-mod adjacency is where new links get found). `well` just counts the
    # already-well-connected (>=2 pillar) mods for the summary line; it does not gate inclusion.
    #
    # FREEZE: the ONE full pass (`--full`) reviews literally everything and is used to identify pure
    # code-libraries (mods that only ever LEAVE) via scripts/phase2-freeze.py -> LIBRARY-FREEZE.txt. Subsequent
    # blind passes auto-skip that frozen set (proven-empty libraries) so repeat passes don't re-spend on them.
    # `--full` forces the whole universe regardless of the freeze file.
    full = '--full' in sys.argv
    freeze = set()
    fz = os.path.join(PH, 'LIBRARY-FREEZE.txt')
    if not full and os.path.exists(fz):
        freeze = {ln.strip() for ln in open(fz) if ln.strip() and not ln.startswith('#')}
    allns, well = [], 0
    for f in sorted(glob.glob(os.path.join(DOSS, '*.md'))):
        ns = os.path.basename(f)[:-3]
        if ns in freeze:
            continue
        head = open(f, encoding='utf-8').read().split('AUTO-DIGEST-FACTS', 1)[0]
        m = re.search(r'^anchors:\s*(.+)$', head, re.M)
        pill = sum(1 for q in PILLARS if re.search(r'\b' + q, m.group(1) if m else '', re.I))
        well += pill >= 2
        allns.append(ns)
    random.Random(seed).shuffle(allns)                  # the per-pass randomization
    size = 10
    chunks = [allns[i:i + size] for i in range(0, len(allns), size)]
    n = len(chunks)
    opus_chunk = int(arg('--opus-chunk', str((p - 1) % n + 1)))   # cycle opus across chunks over passes

    d = os.path.join(PH, f'pass-{p:02d}')
    os.makedirs(d, exist_ok=True)
    for i, ms in enumerate(chunks, 1):
        open(os.path.join(d, f'chunk-{i:02d}.txt'), 'w').write('\n'.join(ms) + '\n')
    json.dump({'pass': p, 'seed': seed, 'opus_chunk': opus_chunk, 'n_chunks': n, 'mode': mode},
              open(os.path.join(d, 'MANIFEST.json'), 'w'), indent=2)
    scope = 'ALL dossiers, --full' if full else (f'{len(freeze)} frozen libs skipped' if freeze else 'no freeze list yet')
    print(f'pass-{p:02d}: {len(allns)} mods ({scope}; {well} already >=2-pillar) -> '
          f'{n} chunks (seed {seed}, opus=chunk-{opus_chunk:02d}, mode={mode}) -> {d}')


if __name__ == '__main__':
    main()
