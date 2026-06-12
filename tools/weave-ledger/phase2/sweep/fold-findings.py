#!/usr/bin/env python3
"""Fold V2-S sweep findings into a reviewable action queue.

Reads every sweep/*.findings.md, parses the structured one-line findings, maps each to a
ledger action, and auto-matches it against the ratified slate (triage/decisions-ratified.tsv).
Output: sweep/FOLD-QUEUE.tsv — one row per ACTIONABLE finding (confirms and zero-slate leaves
are counted but not queued), with a match-confidence column. A human (or the fold session)
reviews the queue — especially NONE/AMBIG matches and every DROP/ADD — then the curated rows
are translated into triage/ratification.tsv entries and applied by apply-ratification.py.

Kind/act → action mapping:
  shipped | act DONE          -> mark-done       (KEEP/PLUMB row exists in shipped reality)
  challenge | act DROP        -> drop            (drop-keep / drop-plumb by matched state)
  challenge | act RESCOPE     -> rescope         (weave right, delivery corrected — annotate)
  challenge | act KEEP        -> rescope         (pilot-era files predate act:RESCOPE)
  new | act ADD               -> add-keep
  custom | act CUSTOM         -> custom          (route to CUSTOM-MOD-CANDIDATES.md)
  confirm with BALANCE-PENDING-> balance-note    (annotate; routes to playtest)
  confirm / leave otherwise   -> (counted, not queued)

Run after each sweep wave; the queue is cumulative-regenerated (idempotent over the files).
"""
import csv, glob, os, re, collections

SW = os.path.dirname(os.path.abspath(__file__))
TRI = os.path.join(SW, '..', 'triage', 'decisions-ratified.tsv')

def parse_findings():
    out = []
    for f in sorted(glob.glob(os.path.join(SW, '*.findings.md'))):
        chunk = os.path.basename(f).split('.')[0]
        mod = None
        for ln in open(f, encoding='utf-8'):
            h = re.match(r'^##\s+(\S+)', ln)
            if h:
                mod = h.group(1)
                continue
            if not ln.lstrip().startswith('- kind:'):
                continue
            fields = {}
            for part in ln.lstrip('- ').split(' | '):
                k, _, v = part.partition(':')
                fields[k.strip().lower()] = v.strip()
            mo = re.search(r'M-\d{2}', fields.get('motif', ''))
            out.append({'chunk': chunk, 'mod': mod, 'kind': fields.get('kind', ''),
                        'ref': fields.get('ref', ''), 'motif': mo.group(0) if mo else '',
                        'act': fields.get('act', '').upper(), 'evidence': fields.get('evidence', ''),
                        'note': fields.get('note', ''), 'loop': fields.get('loop', '')})
    return out

def action_of(r):
    k, a = r['kind'], r['act']
    if a == 'DONE' or k == 'shipped':
        return 'mark-done'
    if k == 'challenge' and a == 'DROP':
        return 'drop'
    if k == 'challenge':  # RESCOPE, or pilot-era KEEP
        return 'rescope'
    if k == 'new' and a == 'ADD':
        return 'add-keep'
    if k == 'custom' or a == 'CUSTOM':
        return 'custom'
    if 'BALANCE-PENDING' in (r['note'] + r['evidence']).upper():
        return 'balance-note'
    return ''  # confirm / leave — counted only

TOK = re.compile(r'[a-z0-9_]{4,}')
def match_row(r, slate_by_mod):
    rows = slate_by_mod.get(r['mod'], [])
    live = [s for s in rows if s['ratified'] in ('KEEP', 'PLUMB', 'DEFER')]
    if not live:
        return ('', 'NONE')
    cand = [s for s in live if s['motif'] == r['motif']] if r['motif'] else []
    if len(cand) == 1:
        return (cand[0]['link'], 'motif-exact')
    pool = cand if len(cand) > 1 else live
    rt = set(TOK.findall(r['ref'].lower()))
    best, bs = None, 0.0
    for s in pool:
        st = set(TOK.findall(s['link'].lower()))
        sc = len(rt & st) / (len(rt | st) or 1)
        if sc > bs:
            best, bs = s, sc
    if best and bs >= 0.15:
        return (best['link'], 'fuzzy' if len(cand) != 1 else 'motif-exact')
    return ((best['link'] if best else ''), 'AMBIG' if pool else 'NONE')

def main():
    slate = collections.defaultdict(list)
    for s in csv.DictReader(open(TRI), delimiter='\t'):
        slate[s['mod']].append(s)
    findings = parse_findings()
    counts = collections.Counter()
    rows = []
    for r in findings:
        act = action_of(r)
        counts[act or f"({r['kind'] or '?'} — not queued)"] += 1
        if not act:
            continue
        if act in ('add-keep', 'custom'):
            link, conf = '(new)', 'n/a'
        else:
            link, conf = match_row(r, slate)
        rows.append([r['chunk'], r['mod'], act, r['motif'], conf, link[:90], r['ref'][:90],
                     r['note'][:160], r['evidence'][:120]])
    hdr = ['chunk', 'mod', 'action', 'motif', 'match', 'matched_link', 'ref', 'note', 'evidence']
    with open(os.path.join(SW, 'FOLD-QUEUE.tsv'), 'w', encoding='utf-8') as f:
        f.write('\t'.join(hdr) + '\n')
        for row in sorted(rows, key=lambda x: (x[2], x[1])):
            f.write('\t'.join(c.replace('\t', ' ') for c in row) + '\n')
    print('findings parsed:', len(findings), 'from', len(set(r["chunk"] for r in findings)), 'chunks')
    for k, v in counts.most_common():
        print(f'  {k}: {v}')
    mc = collections.Counter(r[4] for r in rows)
    print('match confidence:', dict(mc))

if __name__ == '__main__':
    main()
