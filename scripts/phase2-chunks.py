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
SUPPORT = re.compile(r'\b(support|library|lib|api|perf|performance|qol|client|flavor|cosmetic|deco|util|'
                     r'tooling|framework)\b', re.I)
PILLARS = ('create', 'magic', 'economy', 'aeronautics', 'survival')


def arg(name, default=None):
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else default


def main():
    p = int(arg('--pass', '1'))
    seed = int(arg('--seed', str(p)))
    mode = arg('--mode', 'blind')                       # blind | context-fed
    cov, audit = [], []
    for f in sorted(glob.glob(os.path.join(DOSS, '*.md'))):
        ns = os.path.basename(f)[:-3]
        head = open(f, encoding='utf-8').read().split('AUTO-DIGEST-FACTS', 1)[0]
        m = re.search(r'^anchors:\s*(.+)$', head, re.M)
        anch = m.group(1) if m else ''
        pill = sum(1 for q in PILLARS if re.search(r'\b' + q, anch, re.I))
        if SUPPORT.search(anch) and pill < 2:
            continue
        (audit if pill >= 2 else cov).append(ns)
    random.Random(seed).shuffle(cov)                    # the per-pass randomization
    size = 10
    chunks = [cov[i:i + size] for i in range(0, len(cov), size)]
    hubs = ['create', 'extradelight', 'touhou_little_maid', 'farm_and_charm', 'occultengineering', 'numismatics']
    aud = [h for h in hubs if h in audit] + sorted(x for x in audit if x not in hubs)
    chunks.append(aud[:14])
    n = len(chunks)
    opus_chunk = int(arg('--opus-chunk', str((p - 1) % n + 1)))   # cycle opus across chunks over passes

    d = os.path.join(PH, f'pass-{p:02d}')
    os.makedirs(d, exist_ok=True)
    for i, ms in enumerate(chunks, 1):
        open(os.path.join(d, f'chunk-{i:02d}.txt'), 'w').write('\n'.join(ms) + '\n')
    json.dump({'pass': p, 'seed': seed, 'opus_chunk': opus_chunk, 'n_chunks': n, 'mode': mode},
              open(os.path.join(d, 'MANIFEST.json'), 'w'), indent=2)
    print(f'pass-{p:02d}: {len(cov)} coverage + {len(aud[:14])} audit -> {n} chunks (seed {seed}, '
          f'opus=chunk-{opus_chunk:02d}, mode={mode}) -> {d}')


if __name__ == '__main__':
    main()
