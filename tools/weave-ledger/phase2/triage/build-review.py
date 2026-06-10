#!/usr/bin/env python3
"""Build the human review package from the triage batch files.

Triage's output is meant to be *ratified by a human*. The raw batch-NN.md files
are ordered by load-balancing buckets and bury the 423 KEEPs among ~2,700 rejects.
This regenerates a presentable review surface:

  REVIEW.md      — the ratification hub: KEEPs as a checklist grouped by the milestone
                   they'd file under, decisions needing attention, DEFERs, LEAVE sanity,
                   and an alphabetical mod index into the batch files.
  decisions.tsv  — every KEEP/CUT/MERGE/DEFER/LEAVE flattened to one row
                   (mod · decision · link · motif · milestone · detail). GitHub renders
                   this as a searchable, sortable table — filter to KEEP, sort by mod,
                   etc. — so the full set is reviewable without reading 13 files.

Reads tools/weave-ledger/phase2/triage/batch-*.md. Pure read + emit.
"""
import glob, re, os, collections

HERE = os.path.dirname(os.path.abspath(__file__))
H = re.compile(r'^##\s+(\S+)\s+—\s*(.*)$')
DEC = re.compile(r'^(KEEP|CUT|MERGE|DEFER)\b')
MOTIF = re.compile(r'\bM-\d{2}\b')
MILE = re.compile(r'\bv\d+\.\d+\.\d+\b')
NOWN = re.compile(r'\(now\s+(\d+)\)')
WHY = re.compile(r'why\b[^:]*:\s*(.*)$', re.I)

# Post-#305 milestone map: the pillar reorder swapped Survival and Economy, so the
# pre-#305 labels the triage agents wrote (economy→v0.9.0, survival→v0.13.0) are remapped
# at render time. The batch files stay frozen as written.
MILE_REMAP = {'v0.9.0': 'v0.13.0', 'v0.13.0': 'v0.9.0'}
MILE_LABEL = {
    'v0.7.0':  'v0.7.0 — Create spine',
    'v0.9.0':  'v0.9.0 — Survival',
    'v0.11.0': 'v0.11.0 — Magic & MineColonies',
    'v0.13.0': 'v0.13.0 — Economy & logistics (incl. aeronautics)',
}
MILE_ORDER = ['v0.7.0', 'v0.9.0', 'v0.11.0', 'v0.13.0']
CANON = ['create', 'magic', 'economy', 'survival', 'aeronautics']

def pillars_of(anchors_txt):
    """Distinct canonical pillars in the 'anchors after:' text. Parenthetical SPANS are
    stripped (qualifiers like '(primary)' / '(now 2)'), the remainder split on +/,/|
    and substring-matched to canonical pillars (robust to 'Create', 'survival only',
    'economy×2'). The old version truncated at the FIRST '(' and miscounted e.g.
    'magic (primary) + survival' as one anchor. Identical logic to consolidate.py so
    the two docs agree on every mod's anchor count."""
    head = re.sub(r'\([^)]*\)', ' ', anchors_txt)
    pil = []
    for t in re.split(r'[+/,|]', head):
        tl = t.strip().lower()
        for p in CANON:
            if p in tl and p not in pil:
                pil.append(p)
    return pil

def anchor_count(mods, ns):
    return len(pillars_of(mods[ns]['anchors_txt']))

# Decisions the triage agents explicitly flagged for maintainer attention
# (curated from the per-batch returns; see each mod's slate for full context).
FLAGS = [
    ("create_ultimate_factory", "Renewable-diamond recipe undercuts the M-30 scarcity foundation — consider KubeJS-disabling it; only the strata-stone byproduct loop survives as a safe KEEP."),
    ("friendsandfoes", "Wildfire/Iceologer/Illusioner drop weaves (M-02/M-34) were CUT pending confirmation the drops are *unique named items*, not generic vanilla loot already used elsewhere."),
    ("exposure", "Film weave re-tagged M-29 (cross-route) *because of* the galosphere/occultism-silver gotcha — confirm the silver→mixing→film route reads as intended."),
    ("minecolonies", "Colony-magic-wing link tagged M-28 (colony route); could be M-29 (cross-route dependency) instead — maintainer pick."),
    ("northstar", "astronomical_reading M-37 was CUT because the reading is a *tradeable item*; reinstate as M-37 only if it becomes a non-tradeable research token."),
    ("create_enchantment_industry", "Hyper-enchant boss-gate DEFERRED to #220 (locked-exclusive list) rather than filed as a standalone weave."),
    ("oceansdelight", "fugu-venom routed to M-02 (alchemist cauldron) over M-11 (spirit_fire) on tone grounds — confirm the kitchen-adjacent framing."),
    ("edf-remastered-5.0-beta4", "Adds no items and does not modify the dragon drop table natively; both KEEPs are KubeJS loot-table edits — delivery constraint, not a recipe."),
]

def parse():
    mods = {}
    for f in sorted(glob.glob(os.path.join(HERE, 'batch-*.md'))):
        bn = os.path.basename(f)
        cur = None
        for ln in open(f):
            m = H.match(ln)
            if m:
                ns, tail = m.group(1), m.group(2).strip()
                leave = tail.upper().startswith('LEAVE')
                nn = NOWN.search(tail)
                anchors_txt = ''
                am = re.search(r'anchors after:\s*(.*)$', tail)
                if am: anchors_txt = am.group(1).strip()
                reason = ''
                if leave:
                    rm = re.search(r'LEAVE\s*\((.*)\)\s*$', tail)
                    reason = rm.group(1).strip() if rm else tail
                mods[ns] = {'ns': ns, 'batch': bn, 'leave': leave, 'reason': reason,
                            'anchors_n': int(nn.group(1)) if nn else None,
                            'anchors_txt': anchors_txt, 'decisions': []}
                cur = ns
                continue
            if cur and DEC.match(ln):
                parts = [p.strip() for p in ln.rstrip().split(' | ')]
                typ = parts[0].split()[0]
                link = parts[1] if len(parts) > 1 else ''
                rest = ' | '.join(parts[2:]) if len(parts) > 2 else ''
                mo = MOTIF.search(ln); motif = mo.group(0) if mo else ''
                ml = MILE.search(rest); mile = MILE_REMAP.get(ml.group(0), ml.group(0)) if ml else ''
                wm = WHY.search(ln); why = wm.group(1).strip() if wm else ''
                mods[cur]['decisions'].append(
                    {'type': typ, 'link': link, 'motif': motif, 'mile': mile,
                     'why': why, 'detail': rest})
    return mods

def trunc(s, n=200):
    s = ' '.join(s.split())
    return s if len(s) <= n else s[:n-1].rstrip() + '…'

def build(mods):
    allmods = sorted(mods)
    nonleave = [m for m in allmods if not mods[m]['leave']]
    leave = [m for m in allmods if mods[m]['leave']]
    # gather decisions
    keeps, defers_build, defers_play = [], [], []
    cnt = collections.Counter()
    for ns in nonleave:
        for d in mods[ns]['decisions']:
            cnt[d['type']] += 1
            if d['type'] == 'KEEP': keeps.append((ns, d))
            elif d['type'] == 'DEFER':
                (defers_build if '→build' in d['detail'] or 'build #' in d['detail'] else defers_play).append((ns, d))
    for ns in leave:  # LEAVE mods can still carry a DEFER (e.g. recipe_integration audit)
        for d in mods[ns]['decisions']:
            if d['type'] == 'DEFER':
                (defers_build if 'build #' in d['detail'] else defers_play).append((ns, d))
            cnt[d['type']] += 1

    one_anchor = [m for m in nonleave if anchor_count(mods, m) <= 1]

    o = []
    o.append('# Project Commonwealth — weave triage: review & ratification\n')
    o.append('> **This is the human-review surface for Phase 2.5 triage.** The 6,373 mapped candidates '
             'were consolidated per-mod into KEEP / CUT / MERGE / DEFER decisions. Your job here is to '
             '**ratify the KEEPs** — the weaves that become Phase-2.5 issues — and sanity-check the '
             'LEAVE list and flagged calls. Nothing here touches the pack.\n')
    o.append('> **Regenerated by the June 2026 review session** (`WEAVE-PLAN-REVIEW.md` has the full audit): '
             '**(1) milestones remapped post-#305** — the pillar reorder swapped Survival and Economy, so '
             'economy/aeronautics weaves now file under **v0.13.0** and survival weaves under **v0.9.0**; '
             'the frozen batch files (and the quoted `milestone:` text inside detail strings) still carry '
             'the pre-reorder labels. **(2) Anchor counts recomputed** — the previous parser truncated the '
             '`anchors after:` header at the first parenthesis, so e.g. `magic (primary) + survival` '
             'counted as ONE anchor; flagship mods were wrongly listed as one-anchor. §2\'s list and the '
             'dashboard distribution are now parsed from the full header. Read §2 with `WEAVE-PLAN-REVIEW.md` '
             '§4-§5: the audit found agent-written headers also OVER-count in places (an anchor claimed with '
             'no kept weave behind it), so treat headers as claims, not ground truth.\n')
    o.append('## How to review\n')
    o.append(f'- **§1 KEEP ratification** is the main event: {cnt["KEEP"]} proposed weaves, grouped by the milestone '
             'they\'d be filed under. Tick `[x]` to approve, strike a line to reject, or edit it to modify. '
             'Each line is one weave: **mod** — from→to — `motif` — *why it\'s "of course"*.\n'
             '- **§2** lists the calls that need a decision (one-anchor mods + flagged conflicts).\n'
             '- **§3** the DEFERs (build tasks already tracked; playtest items need in-game confirmation).\n'
             '- **§4** the 42 LEAVE mods — confirm none should be reinstated.\n'
             '- **To review *everything* (incl. the 2,028 CUTs + 670 MERGEs):** open '
             '[`decisions.tsv`](decisions.tsv) — GitHub renders it as a searchable, sortable table; '
             'filter the `decision` column to CUT/MERGE, sort by `mod`, etc. Per-mod prose detail is in the '
             'batch files, linked in **§5**.\n')
    o.append('## Dashboard\n')
    o.append(f'| KEEP | CUT | MERGE | DEFER | LEAVE | mods |')
    o.append('|--:|--:|--:|--:|--:|--:|')
    o.append(f'| **{cnt["KEEP"]}** | {cnt["CUT"]} | {cnt["MERGE"]} | {cnt["DEFER"]} | {len(leave)} | {len(allmods)} |')
    o.append('')
    anch = collections.Counter(anchor_count(mods, m) for m in nonleave)
    o.append('Anchor reach (non-LEAVE mods): ' +
             ' · '.join(f'**{anch[n]}** @{n}' for n in sorted(anch, reverse=True)) +
             f'  →  {sum(anch[n] for n in anch if n>=2)}/{len(nonleave)} hit the 2-anchor goal or better. '
             'Full stats in [`SLATE-SUMMARY.md`](SLATE-SUMMARY.md).\n')

    # §1 KEEP ratification by milestone
    o.append(f'---\n\n## §1 — KEEP weaves to ratify ({len(keeps)})\n')
    by_mile = collections.defaultdict(list)
    for ns, d in keeps:
        by_mile[d['mile'] or 'unspecified'].append((ns, d))
    for mile in MILE_ORDER + [k for k in sorted(by_mile) if k not in MILE_ORDER]:
        group = by_mile.get(mile)
        if not group: continue
        label = MILE_LABEL.get(mile, mile if mile != 'unspecified' else 'milestone unspecified')
        o.append(f'### {label}  ({len(group)})\n')
        for ns, d in sorted(group, key=lambda x: x[0]):
            why = trunc(d['why'] or d['detail'])
            mot = '`' + (d['motif'] or '?') + '`'
            tail = ' — *' + why + '*' if why else ''
            o.append('- [ ] **' + ns + '** — ' + d['link'] + ' — ' + mot + tail)
        o.append('')

    # §2 needs a decision
    o.append('---\n\n## §2 — Needs a decision\n')
    o.append(f'### One-anchor mods ({len(one_anchor)}) — add a 2nd weave, accept at 1, or LEAVE?\n')
    for ns in sorted(one_anchor):
        ks = [d for d in mods[ns]['decisions'] if d['type'] == 'KEEP']
        kdesc = ks[0]['link'] if ks else '(no KEEP)'
        o.append(f'- **{ns}** — anchor: {kdesc}')
    o.append('')
    o.append('### Flagged conflicts / judgment calls\n')
    for ns, note in FLAGS:
        present = ' ' if ns in mods else ' *(not in corpus?)* '
        o.append(f'- **{ns}**{present}— {note}')
    o.append('')

    # §3 DEFERs
    o.append('---\n\n## §3 — DEFERs\n')
    o.append(f'### → build ({len(defers_build)}) — mechanism-pending, already tracked\n')
    for ns, d in sorted(defers_build):
        o.append(f"- **{ns}** — {d['link']} — {trunc(d['detail'], 240)}")
    o.append('')
    o.append(f'### → playtest ({len(defers_play)}) — need in-game confirmation before authoring\n')
    for ns, d in sorted(defers_play):
        o.append(f"- [ ] **{ns}** — {d['link']} — {trunc(d['detail'], 220)}")
    o.append('')

    # §4 LEAVE
    o.append('---\n\n## §4 — LEAVE — confirm none should be reinstated ({})\n'.format(len(leave)))
    for ns in leave:
        o.append(f"- [ ] **{ns}** — {trunc(mods[ns]['reason'], 200)}")
    o.append('')

    # §5 per-mod index
    o.append('---\n\n## §5 — Per-mod index (alphabetical) → full slate detail\n')
    o.append('Each mod links to its batch file (the prose KEEP/CUT/MERGE/DEFER detail). '
             'Anchors / decision counts shown for orientation.\n')
    o.append('| mod | anchors | K | C | M | D | slate |')
    o.append('|---|---|--:|--:|--:|--:|---|')
    for ns in allmods:
        r = mods[ns]
        c = collections.Counter(d['type'] for d in r['decisions'])
        if r['leave']:
            anchors = '_LEAVE_'
        else:
            anchors = (r['anchors_txt'] or '—')
        o.append(f"| {ns} | {anchors} | {c['KEEP']} | {c['CUT']} | {c['MERGE']} | {c['DEFER']} | [{r['batch']}]({r['batch']}) |")
    o.append('')
    o.append('---\n_Generated by `build-review.py` from the 13 batch files. '
             'Re-run after any slate edit. Companion: `SLATE-SUMMARY.md` (aggregate stats), '
             '`decisions.tsv` (flat, filterable)._')

    with open(os.path.join(HERE, 'REVIEW.md'), 'w') as fh:
        fh.write('\n'.join(o) + '\n')

    # decisions.tsv — every decision flat
    rows = [('mod', 'decision', 'link', 'motif', 'milestone', 'detail')]
    for ns in allmods:
        r = mods[ns]
        if r['leave']:
            rows.append((ns, 'LEAVE', '', '', '', ' '.join(r['reason'].split())))
        for d in r['decisions']:
            rows.append((ns, d['type'], ' '.join(d['link'].split()), d['motif'], d['mile'],
                         ' '.join(d['detail'].split())))
    with open(os.path.join(HERE, 'decisions.tsv'), 'w') as fh:
        for row in rows:
            fh.write('\t'.join(c.replace('\t', ' ') for c in row) + '\n')

    return cnt, len(keeps), len(leave), len(defers_build), len(defers_play), len(rows) - 1

if __name__ == '__main__':
    mods = parse()
    cnt, nk, nl, db, dp, nrows = build(mods)
    print(f'mods={len(mods)} REVIEW.md: KEEP={nk} LEAVE={nl} DEFER(build={db},playtest={dp})')
    print(f'decisions.tsv: {nrows} rows (KEEP {cnt["KEEP"]} / CUT {cnt["CUT"]} / MERGE {cnt["MERGE"]} / DEFER {cnt["DEFER"]} / LEAVE {nl})')
