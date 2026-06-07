#!/usr/bin/env python3
"""Aggregate Phase 2.x candidate passes into one master convergence table.

Reads every pass's per-chunk candidate files and tallies, for each unique candidate
(mod, from-item, to-pillar, motif), HOW MANY independent runs proposed it (`times_suggested`)
and whether an Opus run did (`from_opus`). This is the confidence signal: a weave proposed by
8/10 independent instances is robust; one proposed once is speculative.

Pass layout it understands:
  tools/weave-ledger/phase2/pass-PP/chunk-NN.candidates.md       <- pass PP (every pass, 00..NN)
  tools/weave-ledger/phase2/pass-00/chunk-NN.candidates.opus.md  <- pass-00's Opus overlay (legacy .opus suffix)
  (pass-00 was the original flat Phase-2; its files now live in pass-00/ like every other pass.)
  tools/weave-ledger/phase2/pass-PP/MANIFEST.json           <- {"opus_chunk": NN, "seed": S}  (which chunk was Opus)

Output: CANDIDATES.tsv (machine) + CANDIDATES.md (rendered, sorted by times_suggested desc).
Run after every pass. Pure stdlib.
"""
import glob, os, re, json, csv
from collections import defaultdict

PH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'tools', 'weave-ledger', 'phase2')


def _load_cut_ns():
    """Cut mods (no manifest, but still in the pass files / the additive digest) are excluded from the
    merged table so the Gate-2 read never proposes weaves for content that isn't shipped. Single source of
    truth = build-dossiers.py CUT_NS, loaded by path (the hyphenated filename isn't importable normally)."""
    import importlib.util
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build-dossiers.py')
    spec = importlib.util.spec_from_file_location('build_dossiers', p)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return set(m.CUT_NS)


CUT = _load_cut_ns()


def norm_from(s):
    s = s.strip().lower()
    m = re.search(r'[a-z0-9_]+:[a-z0-9_/]+', s)          # prefer a mod:item id
    if m:
        return m.group(0)
    return re.split(r'[\s(/|,]', s.strip())[0]            # else first token


def norm_pillar(s):
    s = s.strip().lower()
    for p in ('create', 'magic', 'economy', 'aeronautics', 'survival'):
        if p in s:
            return p
    return s.split()[0] if s.split() else s


def parse_file(path):
    """Yield (mod, from, via, to, motif, verdict, hook) per candidate line."""
    mod = None
    for line in open(path, encoding='utf-8'):
        h = re.match(r'^##\s+`?([a-z0-9_\-\.]+)', line)
        if h:
            mod = h.group(1)
            continue
        if not line.lstrip().startswith('-'):
            continue
        if re.search(r'\bLEAVE\b', line):
            yield (mod, '', '', '', '', 'LEAVE', line.strip(' -\n')[:120])
            continue
        if 'verdict:' not in line:
            continue
        fields = {}
        for part in line.lstrip('- ').split('|'):
            if ':' in part:
                k, _, v = part.partition(':')
                fields[k.strip().lower()] = v.strip()
        verdict = 'ACCEPT' if 'ACCEPT' in fields.get('verdict', '') else (
                  'REJECT' if 'REJECT' in fields.get('verdict', '') else fields.get('verdict', '?'))
        motif = (re.search(r'M-\d{2}', fields.get('motif', '')) or [None])
        motif = motif.group(0) if hasattr(motif, 'group') else (re.search(r'M-\d{2}', line).group(0) if re.search(r'M-\d{2}', line) else '')
        yield (mod, fields.get('from', ''), fields.get('via', ''), fields.get('to', ''), motif,
               verdict, fields.get('hook', fields.get('reason', ''))[:120])


def collect():
    # (pass_id, is_opus, path) for every candidate file
    runs = []
    for d in sorted(glob.glob(os.path.join(PH, 'pass-*'))):
        if not os.path.isdir(d):
            continue
        man = os.path.join(d, 'MANIFEST.json')
        opus_chunk = json.load(open(man)).get('opus_chunk') if os.path.exists(man) else None
        pid = os.path.basename(d)
        for f in sorted(glob.glob(os.path.join(d, 'chunk-*.candidates.md'))):
            n = re.search(r'chunk-(\d+)', os.path.basename(f))
            is_opus = bool(opus_chunk) and n and int(n.group(1)) == int(opus_chunk)
            runs.append((pid, is_opus, f))
        # pass-00's Opus overlay uses the legacy `.candidates.opus.md` suffix (no MANIFEST opus_chunk);
        # the `chunk-*.candidates.md` glob above does NOT match it, so collect it explicitly.
        for f in sorted(glob.glob(os.path.join(d, 'chunk-*.candidates.opus.md'))):
            runs.append((pid, True, f))
    return runs


def write_convergence(passes_n, rows):
    """Upsert one row per distinct pass-count into the convergence log (the saturation curve). Idempotent:
    re-running the merge at the same pass-count overwrites that row; a new pass appends. `new` = unique-count
    growth vs the previous pass-count — watch it flatten to spot saturation."""
    COLS = ['passes', 'unique', 'ge2', 'ge5', 'gate2_core', 'opus']
    tsv = os.path.join(PH, 'CONVERGENCE.tsv')
    hist = {}
    if os.path.exists(tsv):
        for r in csv.DictReader(open(tsv), delimiter='\t'):
            hist[int(r['passes'])] = {c: int(r[c]) for c in COLS}
    hist[passes_n] = dict(passes=passes_n, unique=len(rows),
                          ge2=sum(1 for r in rows if r[0] >= 2),
                          ge5=sum(1 for r in rows if r[0] >= 5),
                          gate2_core=sum(1 for r in rows if r[0] >= 5 and r[7] == 'ACCEPT'),
                          opus=sum(1 for r in rows if r[1]))
    ordered = [hist[k] for k in sorted(hist)]
    with open(tsv, 'w', encoding='utf-8') as t:
        t.write('\t'.join(COLS) + '\n')
        for r in ordered:
            t.write('\t'.join(str(r[c]) for c in COLS) + '\n')
    md = ['# Phase 2.x — convergence log (the saturation curve)', '',
          '> One row per distinct pass-count, upserted by `scripts/phase2-merge.py` on each merge. `new` = '
          'unique-candidate growth since the previous pass-count; when it flattens, the search has saturated.',
          '> Tracking starts here (post cut-mod exclusion); earlier ad-hoc snapshots are in `DECISIONS.md`.',
          '> **⚠ The library-freeze was retired at pass 16+** — every pass now covers all ~351 dossiers (≈160 '
          'were skipped before), so expect `new` to **re-open** (jump) before it settles again.', '',
          '| passes | unique | ≥2 | ≥5 | Gate-2 core (≥5+ACCEPT) | opus | new |',
          '|--:|--:|--:|--:|--:|--:|--:|']
    prev = None
    for r in ordered:
        new = '' if prev is None else f"{r['unique'] - prev:+d}"
        md.append(f"| {r['passes']} | {r['unique']} | {r['ge2']} | {r['ge5']} | {r['gate2_core']} | {r['opus']} | {new} |")
        prev = r['unique']
    open(os.path.join(PH, 'CONVERGENCE.md'), 'w', encoding='utf-8').write('\n'.join(md) + '\n')


def main():
    cand = defaultdict(lambda: {'passes': set(), 'opus': False, 'verdicts': defaultdict(int),
                                'from': '', 'via': '', 'to': '', 'motif': '', 'hook': ''})
    passes = set()
    excluded = set()        # unique (mod,item,pillar,motif) dropped for being cut from the pack
    for pid, is_opus, path in collect():
        passes.add(pid)
        for mod, frm, via, to, motif, verdict, hook in parse_file(path):
            if not mod or verdict == 'LEAVE':
                continue
            if mod in CUT:                                  # mod was cut from the pack — drop its candidates
                excluded.add((mod, norm_from(frm), norm_pillar(to), motif))
                continue
            key = (mod, norm_from(frm), norm_pillar(to), motif)
            c = cand[key]
            c['passes'].add(pid + ('/opus' if is_opus else ''))
            c['opus'] = c['opus'] or is_opus
            c['verdicts'][verdict] += 1
            if not c['from']:
                c['from'], c['via'], c['to'], c['motif'], c['hook'] = frm, via, to, motif, hook
    rows = []
    for (mod, fnorm, pillar, motif), c in cand.items():
        n = len({p.replace('/opus', '') for p in c['passes']})    # distinct passes
        consensus = max(c['verdicts'], key=c['verdicts'].get)
        rows.append((n, c['opus'], mod, c['from'], c['via'], pillar, motif, consensus,
                     dict(c['verdicts']), c['hook']))
    rows.sort(key=lambda r: (-r[0], r[2]))

    with open(os.path.join(PH, 'CANDIDATES.tsv'), 'w', encoding='utf-8') as t:
        t.write('times_suggested\tfrom_opus\tmod\tfrom\tvia\tto_pillar\tmotif\tconsensus\tverdicts\thook\n')
        for r in rows:
            t.write('\t'.join(str(x) for x in r) + '\n')

    md = ['# Phase 2.x — master candidate table (convergence accumulator)', '',
          f'_Built by `scripts/phase2-merge.py` over **{len(passes)} pass(es)**: '
          f'{", ".join(sorted(passes))}. `times` = how many independent passes proposed this candidate '
          f'(confidence); `opus` = an Opus run also proposed it. Re-run after every pass._', '',
          f'**{len(rows)} unique candidates** (deduped on mod + item + pillar + motif).'
          + (f' _Excludes {len(excluded)} candidate(s) for {len(set(m for m,_,_,_ in excluded))} cut mod(s) '
             f'(build-dossiers `CUT_NS`)._' if excluded else ''), '',
          '| times | opus | mod | from → | via (method) | pillar | motif | consensus |',
          '|--:|:--:|---|---|---|---|---|---|']
    for n, opus, mod, frm, via, pillar, motif, consensus, verdicts, hook in rows:
        md.append(f'| {n} | {"✓" if opus else ""} | `{mod}` | {frm[:46]} | {via[:34]} | {pillar} | {motif} | {consensus} |')
    open(os.path.join(PH, 'CANDIDATES.md'), 'w', encoding='utf-8').write('\n'.join(md) + '\n')
    write_convergence(len(passes), rows)
    print(f'passes: {len(passes)} | unique candidates: {len(rows)} | with opus: {sum(1 for r in rows if r[1])}')
    print(f'  multi-pass (>=2): {sum(1 for r in rows if r[0] >= 2)} | >=5: {sum(1 for r in rows if r[0] >= 5)} '
          f'| Gate-2 core (>=5+ACCEPT): {sum(1 for r in rows if r[0] >= 5 and r[7] == "ACCEPT")}  -> CANDIDATES + CONVERGENCE')
    if excluded:
        print(f'  excluded {len(excluded)} candidate(s) for {len(set(m for m,_,_,_ in excluded))} cut mod(s): '
              f'{", ".join(sorted(set(m for m,_,_,_ in excluded)))}')


if __name__ == '__main__':
    main()
