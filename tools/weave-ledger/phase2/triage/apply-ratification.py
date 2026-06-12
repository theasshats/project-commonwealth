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
  remove-mod    — mod left the pack (thunderdome cut / version removal): its ratified
                  KEEP/PLUMB/DEFER rows -> REMOVED  [post-0.7.0 reconciliation]
  rehome-milestone — every ratified KEEP at <match> milestone -> <arg> (e.g. the create
                  bucket after v0.7.0 shipped without the weave program)
  fold          — apply a sweep FOLD-QUEUE.tsv (arg = path relative to repo root); per-row
                  actions mark-done/drop/rescope/balance-note/add-keep/custom, with
                  AMBIG/NONE matches and add-keep milestones resolved by the sibling
                  FOLD-RESOLUTIONS.tsv (directives: leave-to-done, record-done, skip,
                  milestone:vX.Y.0). Custom rows route to sweep/CUSTOM-MOD-CANDIDATES.md
                  by hand. New ratified states: DONE (shipped/native — no authoring).
"""
import csv, os, sys, collections, re

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
    removed_mods = []

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
        elif act == 'remove-mod':
            n = 0
            for r in rows:
                if r['mod'] == a['mod'] and r['ratified'] in ('KEEP', 'PLUMB', 'DEFER'):
                    r['ratified'] = 'REMOVED'; r['note'] = 'mod removed from pack: ' + a['reason']; n += 1
            removed_mods.append((a['mod'], n))
            log.append(('REMOVE-MOD', a['mod'], f'{n} rows -> REMOVED', a['reason']))
        elif act == 'rehome-milestone':
            n = 0
            for r in rows:
                if r['ratified'] == 'KEEP' and r['mile'] == a['match']:
                    r['mile'] = a['arg']
                    r['note'] = (r['note'] + '; ' if r['note'] else '') + f"rehomed {a['match']}->{a['arg']}"
                    n += 1
            log.append(('REHOME', f"{a['match']}->{a['arg']}", f'{n} KEEPs', a['reason']))
        elif act == 'fold':
            ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
            qpath = os.path.join(ROOT, a['match'])
            res = collections.defaultdict(list)
            rpath = os.path.join(os.path.dirname(qpath), 'FOLD-RESOLUTIONS.tsv')
            if os.path.exists(rpath):
                rd = csv.reader(open(rpath), delimiter='\t'); next(rd)
                for rr in rd:
                    rr += [''] * (5 - len(rr))
                    res[(rr[0], rr[1], rr[2])].append((rr[3], rr[4]))
            stats = collections.Counter(); warn = []

            TOKRE = re.compile(r'[a-z0-9_]{4,}')

            def find(mod, link_prefix, states, motif='', ref=''):
                live = [r for r in rows if r['mod'] == mod and r['ratified'] in states]
                hits = [r for r in live if link_prefix and
                        (r['link'].startswith(link_prefix) or link_prefix.startswith(r['link'][:60]))]
                if len(hits) > 1 and motif:
                    mh = [r for r in hits if r['motif'] == motif]
                    if len(mh) == 1:
                        return mh[0]
                if len(hits) == 1:
                    return hits[0]
                # apply-time fallback: the queue's matched_link was computed against a
                # post-fold file, but apply rebuilds from the pristine base — re-match here
                # by motif, then token overlap on the finding's ref.
                cand = [r for r in live if motif and r['motif'] == motif]
                if len(cand) == 1:
                    return cand[0]
                pool = cand if len(cand) > 1 else live
                rt = set(TOKRE.findall(ref.lower()))
                best, bs = None, 0.0
                for rr in pool:
                    st = set(TOKRE.findall(rr['link'].lower()))
                    sc = len(rt & st) / (len(rt | st) or 1)
                    if sc > bs:
                        best, bs = rr, sc
                return best if best and bs >= 0.15 else None

            qrd = csv.DictReader(open(qpath), delimiter='\t')
            for q in qrd:
                key = (q['mod'], q['action'], q.get('motif', ''))
                directive, dreason = (res[key].pop(0) if res.get(key) else ('', ''))
                if directive == 'skip':
                    stats['skipped'] += 1; continue
                if directive == 'leave-to-done':
                    hit = next((r for r in rows if r['mod'] == q['mod'] and r['decision'] == 'LEAVE'), None)
                    if hit:
                        hit['ratified'] = 'DONE'; hit['note'] = dreason
                        stats['leave-to-done'] += 1
                    else:
                        warn.append(f"leave-to-done: no LEAVE row for {q['mod']}")
                    continue
                if directive == 'record-done':
                    rows.append({'mod': q['mod'], 'decision': '(recorded at sweep fold)', 'link': q['ref'],
                                 'motif': q['motif'], 'mile': '', 'detail': (q['note'] + ' | ' + q['evidence']).strip(' |'),
                                 'ratified': 'DONE', 'note': 'shipped-beyond-slate, recorded by V2-S sweep'})
                    stats['record-done'] += 1; continue
                if q['action'] == 'add-keep':
                    mile = directive.split(':', 1)[1] if directive.startswith('milestone:') else ''
                    if not mile:
                        warn.append(f"add-keep without milestone resolution: {q['mod']} {q['ref'][:40]}"); continue
                    rows.append({'mod': q['mod'], 'decision': '(added at sweep fold)', 'link': q['ref'],
                                 'motif': q['motif'], 'mile': mile, 'detail': (q['note'] + ' | ' + q['evidence']).strip(' |'),
                                 'ratified': 'KEEP', 'note': 'added by V2-S sweep (' + q['chunk'] + ')'})
                    stats['add-keep'] += 1; continue
                if q['action'] == 'custom':
                    stats['custom (routed to CUSTOM-MOD-CANDIDATES)'] += 1; continue
                # shipped-beyond-slate findings (ref leads with NEW) have no slate row by
                # definition — record them as DONE rows instead of matching.
                if q['action'] == 'mark-done' and q['ref'].startswith('NEW'):
                    rows.append({'mod': q['mod'], 'decision': '(recorded at sweep fold)', 'link': q['ref'],
                                 'motif': q['motif'], 'mile': '', 'detail': (q['note'] + ' | ' + q['evidence']).strip(' |'),
                                 'ratified': 'DONE', 'note': 'shipped-beyond-slate, recorded by V2-S sweep'})
                    stats['record-done'] += 1; continue
                # match on the finding's ref (the agent quotes the slate row it judged);
                # the queue's matched_link is unreliable (computed against a post-fold file).
                hit = find(q['mod'], q['ref'], ('KEEP', 'PLUMB', 'DEFER'), q.get('motif', ''), q.get('ref', ''))
                if not hit:
                    warn.append(f"{q['action']}: no unique match for {q['mod']} :: {q['matched_link'][:50]}"); continue
                if q['action'] == 'mark-done':
                    hit['ratified'] = 'DONE'; hit['note'] = ('sweep ' + q['chunk'] + ': ' + q['evidence'])[:200]
                elif q['action'] == 'drop':
                    hit['ratified'] = 'DROPPED'; hit['note'] = ('sweep ' + q['chunk'] + ': ' + q['note'])[:200]
                elif q['action'] == 'rescope':
                    hit['detail'] += ' [RESCOPED@sweep ' + q['chunk'] + ': ' + q['note'] + ']'
                elif q['action'] == 'balance-note':
                    hit['detail'] += ' [BALANCE-PENDING@sweep: ' + q['note'] + ']'
                stats[q['action']] += 1
            log.append(('FOLD', a['match'], str(dict(stats)), a['reason']))
            for w in warn:
                errors.append('fold: ' + w)
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
    gone = [r for r in rows if r['ratified'] == 'REMOVED']
    done = [r for r in rows if r['ratified'] == 'DONE']
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
             f'+{sum(1 for r in keeps if "added at ratification" in r["note"])} reinstated'
             + (f', -{sum(1 for r in gone if r["decision"] == "KEEP" or "added" in r["note"])} on mods removed from the pack' if gone else '') + ')')
    if removed_mods:
        s.append(f'- Mods removed from the pack (v0.7.0 thunderdome — rows now REMOVED): '
                 + ', '.join(f'{m} ({n})' for m, n in removed_mods))
    if done:
        s.append(f'- **Closed as DONE (shipped/native — zero authoring): {len(done)} rows**, '
                 f'{len(set(r["mod"] for r in done))} mods (V2-S sweep verification against shipped kubejs)')
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

    print(f'ratified: KEEP={len(keeps)} PLUMB={len(plumbs)} DONE={len(done)} DROPPED={len(drops)} '
          f'LEAVE+={len(leaves)} | by milestone: ' +
          ', '.join(f'{m}={by_mile.get(m, 0)}' for m in ['v0.7.0', 'v0.9.0', 'v0.11.0', 'v0.13.0']))
    print(f'derived anchors: {dict(sorted(dist.items()))}; <=1: {len(one)}')


if __name__ == '__main__':
    main()
