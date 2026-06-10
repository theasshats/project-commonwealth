#!/usr/bin/env python3
"""Apply the ratification ledger (ratification.tsv) over the frozen triage decisions.

Pipeline position: batch-*.md (frozen agent record) -> decisions.tsv (flattened by
build-review.py) -> ratification.tsv (every ratification decision, with reasons) ->
THIS SCRIPT -> decisions-ratified.tsv + RATIFIED-SLATE.md (the post-ratification truth
that FILING-PLAN.md and Phase-3 authoring work from).

The batch files and decisions.tsv are never modified — the overlay keeps the agent
record and the ratification record separately auditable.

Actions understood (see ratification.tsv):
  ruling        — recorded verbatim in the slate's rulings log (no row effect)
  note          — recorded in the log (documents a deliberate non-action)
  demote-motif  — every KEEP with this motif -> PLUMB (authored once as a plumbing
                  batch; grants no anchors)  [F1]
  move-milestone— every ratified KEEP with this motif -> new milestone  [post-#305]
  drop-keep     — the single KEEP on <mod> matching <match> (substring of link/detail,
                  case-insensitive) -> DROPPED, reason appended
  leave         — mod reclassified LEAVE/support-role; its remaining KEEPs -> DROPPED
  add-keep      — append a reinstated KEEP (match=link, arg=motif|milestone, reason=detail)
  annotate      — append a ratify-note to the matching KEEP's detail
  set-anchors   — override the mod's derived anchor set (e.g. inherited authored weaves)
"""
import csv, os, sys, collections

HERE = os.path.dirname(os.path.abspath(__file__))
CANON = ['create', 'magic', 'economy', 'survival', 'aeronautics']
AERO_MOTIFS = {'M-13', 'M-23', 'M-24', 'M-31'}
ECON_MOTIFS = {'M-08', 'M-28', 'M-30', 'M-33', 'M-34', 'M-37'}
MILE2PILLAR = {'v0.7.0': 'create', 'v0.9.0': 'survival', 'v0.11.0': 'magic', 'v0.13.0': 'economy'}


def pillars_of_keep(link, motif, mile):
    tail = link.split('→')[-1].lower()
    pil = {p for p in CANON if p in tail}
    if pil:
        return pil
    if motif in AERO_MOTIFS:
        return {'aeronautics'}
    if motif in ECON_MOTIFS:
        return {'economy'}
    p = MILE2PILLAR.get(mile)
    return {p} if p else set()


def main():
    rows = []
    with open(os.path.join(HERE, 'decisions.tsv')) as f:
        rd = csv.reader(f, delimiter='\t')
        header = next(rd)
        for r in rd:
            r += [''] * (6 - len(r))
            rows.append({'mod': r[0], 'decision': r[1], 'link': r[2], 'motif': r[3],
                         'mile': r[4], 'detail': r[5], 'ratified': r[1], 'note': ''})

    acts = []
    with open(os.path.join(HERE, 'ratification.tsv')) as f:
        rd = csv.reader(f, delimiter='\t')
        next(rd)
        for r in rd:
            r += [''] * (5 - len(r))
            acts.append({'action': r[0], 'mod': r[1], 'match': r[2], 'arg': r[3], 'reason': r[4]})

    log, errors = [], []
    leaves, plumb_motifs, anchor_over = [], set(), {}

    # pass 1: demote-motif / move-milestone (global), collect others in order
    for a in acts:
        act = a['action']
        if act in ('ruling', 'note'):
            log.append((act.upper(), a['mod'], a['match'], a['reason']))
        elif act == 'demote-motif':
            plumb_motifs.add(a['match'])
            n = 0
            for r in rows:
                if r['ratified'] == 'KEEP' and r['motif'] == a['match']:
                    r['ratified'] = 'PLUMB'; r['note'] = a['reason']; n += 1
            log.append(('DEMOTE', a['match'], f'{n} KEEPs -> PLUMB', a['reason']))
        elif act == 'move-milestone':
            n = 0
            for r in rows:
                if r['ratified'] == 'KEEP' and r['motif'] == a['match']:
                    r['mile'] = a['arg']; n += 1
            log.append(('MOVE', a['match'], f'{n} KEEPs -> {a["arg"]}', a['reason']))
        elif act == 'drop-keep':
            hits = [r for r in rows if r['mod'] == a['mod'] and r['ratified'] == 'KEEP'
                    and (a['match'].lower() in r['link'].lower() or a['match'].lower() in r['detail'].lower())]
            if len(hits) != 1:
                errors.append(f"drop-keep {a['mod']} '{a['match']}': {len(hits)} matches (need exactly 1)")
                continue
            hits[0]['ratified'] = 'DROPPED'; hits[0]['note'] = a['reason']
            log.append(('DROP', a['mod'], hits[0]['link'][:60], a['reason']))
        elif act == 'leave':
            leaves.append(a['mod'])
            for r in rows:
                if r['mod'] == a['mod'] and r['ratified'] == 'KEEP':
                    r['ratified'] = 'DROPPED'; r['note'] = 'mod reclassified LEAVE: ' + a['reason']
            log.append(('LEAVE', a['mod'], '', a['reason']))
        elif act == 'add-keep':
            motif, mile = (a['arg'].split('|') + [''])[:2]
            rows.append({'mod': a['mod'], 'decision': '(added at ratification)', 'link': a['match'],
                         'motif': motif, 'mile': mile, 'detail': a['reason'],
                         'ratified': 'KEEP', 'note': 'added at ratification'})
            log.append(('ADD', a['mod'], a['match'][:60], a['reason'][:80]))
        elif act == 'annotate':
            hits = [r for r in rows if r['mod'] == a['mod'] and r['ratified'] == 'KEEP'
                    and (a['match'].lower() in r['link'].lower() or a['match'] == r['motif'])]
            if not hits:
                errors.append(f"annotate {a['mod']} '{a['match']}': no KEEP match")
                continue
            for h in hits:
                h['detail'] += ' [' + a['reason'] + ']'
            log.append(('ANNOTATE', a['mod'], a['match'], a['reason'][:80]))
        elif act == 'set-anchors':
            anchor_over[a['mod']] = a['match'].split('+')
            log.append(('SET-ANCHORS', a['mod'], a['match'], a['reason']))
        else:
            errors.append(f"unknown action: {act}")

    if errors:
        for e in errors:
            print('ERROR:', e, file=sys.stderr)
        sys.exit(1)

    # write decisions-ratified.tsv
    out = os.path.join(HERE, 'decisions-ratified.tsv')
    with open(out, 'w') as f:
        f.write('\t'.join(['mod', 'decision', 'link', 'motif', 'milestone', 'detail', 'ratified', 'ratify_note']) + '\n')
        for r in rows:
            f.write('\t'.join(x.replace('\t', ' ') for x in
                              [r['mod'], r['decision'], r['link'], r['motif'], r['mile'], r['detail'],
                               r['ratified'], r['note']]) + '\n')

    # derived anchors (F3): targets of ratified KEEPs only; PLUMB grants nothing
    keeps = [r for r in rows if r['ratified'] == 'KEEP']
    plumbs = [r for r in rows if r['ratified'] == 'PLUMB']
    drops = [r for r in rows if r['ratified'] == 'DROPPED']
    mods_k = collections.defaultdict(set)
    for r in keeps:
        mods_k[r['mod']] |= pillars_of_keep(r['link'], r['motif'], r['mile'])
    for m, pil in anchor_over.items():
        mods_k[m] = set(pil)
    dist = collections.Counter(len(v) for v in mods_k.values())
    one = sorted(m for m, v in mods_k.items() if len(v) <= 1)
    by_mile = collections.Counter(r['mile'] for r in keeps)

    s = []
    s.append('# Ratified slate — the post-ratification truth\n')
    s.append('> Generated by `apply-ratification.py` from `decisions.tsv` (frozen triage record) + '
             '`ratification.tsv` (every ratification decision, with reasons). F1 was maintainer-agreed; '
             'the remaining calls were delegated ("you decide") and resolved per `WEAVE-PLAN-REVIEW.md`. '
             'This file + `decisions-ratified.tsv` are what `FILING-PLAN.md` and Phase-3 authoring work '
             'from. Re-run after any ledger edit.\n')
    s.append('## Dashboard\n')
    s.append(f'- **Ratified KEEP weaves: {len(keeps)}** (was 423: '
             f'-{len(drops)} dropped, -{len(plumbs)} folded into the deco-crush plumbing batch, '
             f'+{sum(1 for r in keeps if r["note"] == "added at ratification")} reinstated)')
    s.append(f'- Plumbing batch (M-04, authored once at v0.7.0): {len(plumbs)} crush patterns across '
             f'{len(set(r["mod"] for r in plumbs))} mods')
    s.append(f'- Mods reclassified LEAVE/support-role: {", ".join(leaves)}')
    s.append('\n## Ratified KEEPs by milestone (post-#305 map; M-28 colony weaves ride v0.11.0)\n')
    for m in ['v0.7.0', 'v0.9.0', 'v0.11.0', 'v0.13.0']:
        s.append(f'- {m}: {by_mile.get(m, 0)}')
    for m, c in sorted(by_mile.items()):
        if m not in MILE2PILLAR:
            s.append(f'- {m or "(none)"}: {c}  ⚠ unexpected')
    s.append('\n## Derived weave-anchor distribution (F3: targets of ratified KEEPs; '
             'support roles and plumbing grant nothing; home systems not double-counted)\n')
    for n in sorted(dist):
        s.append(f'- {n} pillar(s): {dist[n]} mods')
    s.append(f'\nMods at ≤1 derived weave-pillar ({len(one)}): {", ".join(one)}')
    s.append('\n_Read with care: a mod whose home system is its only pillar (hub mods, F2) or whose '
             'second anchor is a sanctioned support role is **not** a gap._\n')
    s.append('\n## Plumbing batch members (M-04 → one v0.7.0 task)\n')
    for r in sorted(plumbs, key=lambda r: r['mod']):
        s.append(f'- `{r["mod"]}` — {r["link"][:90]}')
    s.append('\n## Ratification log\n')
    for kind, a, b, reason in log:
        s.append(f'- **{kind}** {a} {("— " + b) if b else ""}  \n  {reason}')
    s.append('')
    open(os.path.join(HERE, 'RATIFIED-SLATE.md'), 'w').write('\n'.join(s) + '\n')

    print(f'ratified: KEEP={len(keeps)} PLUMB={len(plumbs)} DROPPED={len(drops)} '
          f'LEAVE+={len(leaves)} | by milestone: ' +
          ', '.join(f'{m}={by_mile.get(m, 0)}' for m in ['v0.7.0', 'v0.9.0', 'v0.11.0', 'v0.13.0']))
    print(f'derived anchors: {dict(sorted(dist.items()))}; <=1: {len(one)}')


if __name__ == '__main__':
    main()
