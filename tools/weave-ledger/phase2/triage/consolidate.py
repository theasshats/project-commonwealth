#!/usr/bin/env python3
"""Consolidate triage batch-NN.md slates into a cross-batch rollup for maintainer ratify.

Reads tools/weave-ledger/phase2/triage/batch-*.md, parses each per-mod slate block,
and emits SLATE-SUMMARY.md: totals, per-pillar/milestone KEEP distribution, motif
histogram of KEEPs, anchor-count distribution (1/2/3/4), LEAVE mods, one-anchor mods
(candidates for a second weave), and DEFER->build routing counts. Pure read + report;
touches nothing the triage agents wrote.
"""
import re, glob, os, collections, sys

HERE = os.path.dirname(os.path.abspath(__file__))

# header forms:
#   ## <ns>  — slate: 2 KEEP / 22 CUT / 2 MERGE / 0 DEFER   | anchors after: create + survival (now 2)
#   ## <ns> — LEAVE (reason)
H_SLATE = re.compile(r'^##\s+(\S+)\s+—\s+slate:\s*(\d+)\s*KEEP\s*/\s*(\d+)\s*CUT(?:\s*/\s*(\d+)\s*MERGE)?\s*/\s*(\d+)\s*DEFER', re.I)
H_LEAVE = re.compile(r'^##\s+(\S+)\s+—\s+LEAVE', re.I)
H_ANY   = re.compile(r'^##\s+(\S+)\s+—')
NOW_N   = re.compile(r'\(now\s+(\d+)\)')
ANCHORS = re.compile(r'anchors after:\s*([^(|]+)')
CANON   = ['create', 'magic', 'economy', 'survival', 'aeronautics']
MOTIF   = re.compile(r'\bM-(\d{2})\b')
MILE    = re.compile(r'milestone:\s*(v\d+\.\d+\.\d+)', re.I)
BUILD   = re.compile(r'→build\s*#(\d+)')

def parse_block(ns, lines):
    """lines: the header line + body lines until next header."""
    head = lines[0]
    rec = {'ns': ns, 'leave': False, 'keep': 0, 'cut': 0, 'merge': 0, 'defer': 0,
           'anchors_n': None, 'pillars': [], 'keep_motifs': [], 'keep_miles': [],
           'defer_builds': [], 'defer_playtest': 0,
           'line_keep': 0, 'line_cut': 0, 'line_merge': 0, 'line_defer': 0}
    if H_LEAVE.match(head):
        rec['leave'] = True
        # fall through and still scan the body — a LEAVE mod can carry a DEFER (audit) line
    m = H_SLATE.match(head)
    if m:
        rec['keep'] = int(m.group(2)); rec['cut'] = int(m.group(3))
        rec['merge'] = int(m.group(4) or 0); rec['defer'] = int(m.group(5))
    n = NOW_N.search(head)
    if n: rec['anchors_n'] = int(n.group(1))
    a = ANCHORS.search(head)
    if a:
        # canonical pillars by substring match per token — robust to case ("Create"),
        # qualifiers ("survival only"), and notation ("economy×2"); ignores prose since
        # the capture is already truncated before the first '(' or '|'.
        pil = []
        for t in re.split(r'[+/,]', a.group(1)):
            tl = t.strip().lower()
            for p in CANON:
                if p in tl and p not in pil:
                    pil.append(p)
        rec['pillars'] = pil
    for ln in lines[1:]:
        s = ln.strip()
        if s.startswith('KEEP'):
            rec['line_keep'] += 1
            mm = MOTIF.search(s);  rec['keep_motifs'].append('M-'+mm.group(1) if mm else '(none)')
            ml = MILE.search(s);   rec['keep_miles'].append(ml.group(1) if ml else '(none)')
        elif s.startswith('CUT'):   rec['line_cut'] += 1
        elif s.startswith('MERGE'): rec['line_merge'] += 1
        elif s.startswith('DEFER'):
            rec['line_defer'] += 1
            b = BUILD.search(s)
            if b: rec['defer_builds'].append('#'+b.group(1))
            else: rec['defer_playtest'] += 1
    return rec

def main():
    files = sorted(glob.glob(os.path.join(HERE, 'batch-*.md')))
    if not files:
        print('no batch-*.md files found', file=sys.stderr); sys.exit(1)
    recs = []
    incomplete = []
    for f in files:
        txt = open(f).read()
        if '== BATCH COMPLETE ==' not in txt:
            incomplete.append(os.path.basename(f))
        lines = txt.splitlines()
        # find header indices
        idxs = [i for i, ln in enumerate(lines) if H_ANY.match(ln)]
        for j, i in enumerate(idxs):
            end = idxs[j+1] if j+1 < len(idxs) else len(lines)
            ns = H_ANY.match(lines[i]).group(1)
            recs.append((os.path.basename(f), parse_block(ns, lines[i:end])))

    # aggregates
    tot = collections.Counter()
    pillar_keep = collections.Counter()
    mile_keep = collections.Counter()
    motif_keep = collections.Counter()
    anchor_dist = collections.Counter()
    leave_mods, one_anchor, build_routes = [], [], collections.Counter()
    defer_playtest = 0
    for fn, r in recs:
        # totals come from actual enumerated lines (ground truth), not the agent's
        # rounded header self-count. DEFER routing is scanned for every mod, including
        # LEAVE mods (e.g. recipe_integration carries an audit DEFER under a LEAVE header).
        tot['keep'] += r['line_keep']; tot['cut'] += r['line_cut']
        tot['merge'] += r['line_merge']; tot['defer'] += r['line_defer']
        for b in r['defer_builds']: build_routes[b] += 1
        defer_playtest += r['defer_playtest']
        if r['leave']:
            leave_mods.append(r['ns']); continue
        for p in r['pillars']: pillar_keep[p] += 1
        for m in r['keep_motifs']: motif_keep[m] += 1
        for ml in r['keep_miles']: mile_keep[ml] += 1
        # anchor count = distinct canonical pillars named in 'anchors after:' (every
        # non-LEAVE mod, not just those with a parenthetical '(now N)' — that omission
        # previously dropped ~24 mods and made the distribution undercount).
        ac = len(r['pillars'])
        anchor_dist[ac] += 1
        if ac <= 1: one_anchor.append(r['ns'])

    mods_total = len([r for _, r in recs])
    out = []
    out.append('# Triage slate summary (cross-batch rollup)\n')
    out.append(f'> Auto-generated by `consolidate.py` from {len(files)} batch files. '
               f'{mods_total} mod blocks ({len(leave_mods)} LEAVE).\n')
    if incomplete:
        out.append(f'\n⚠️ **INCOMPLETE batch files (no completion marker):** {", ".join(incomplete)}\n')
    out.append('\n## Totals')
    out.append('_(counted from enumerated KEEP/CUT/MERGE/DEFER lines — the ground truth — '
               'not the agents\' rounded header self-counts.)_')
    out.append(f'- **KEEP {tot["keep"]} · CUT {tot["cut"]} · MERGE {tot["merge"]} · DEFER {tot["defer"]}**')
    out.append(f'- weave KEEPs across {mods_total - len(leave_mods)} non-LEAVE mods\n')
    out.append('## Mods anchored to each pillar (breadth — counts a mod once per pillar it touches)')
    for p, c in pillar_keep.most_common(): out.append(f'- {p}: {c}')
    out.append('\n## KEEP weaves by target milestone (KEEP-by-pillar; sums to total KEEP)')
    for ml, c in sorted(mile_keep.items()): out.append(f'- {ml}: {c}')
    out.append('\n## KEEP motif histogram')
    for mo, c in motif_keep.most_common(): out.append(f'- {mo}: {c}')
    out.append('\n## Anchor-count distribution (mods reaching N anchors)')
    for n in sorted(anchor_dist): out.append(f'- {n} anchor(s): {anchor_dist[n]} mods')
    out.append(f'\n## One-anchor mods (candidates for a second weave) — {len(one_anchor)}')
    out.append(', '.join(sorted(one_anchor)) or '(none)')
    out.append(f'\n## LEAVE mods — {len(leave_mods)}')
    out.append(', '.join(sorted(leave_mods)) or '(none)')
    out.append(f'\n## DEFER routing  (build {sum(build_routes.values())} / playtest {defer_playtest})')
    for b, c in build_routes.most_common(): out.append(f'- →build {b}: {c}')
    out.append(f'- →playtest (in-game confirmation before authoring): {defer_playtest}')
    out.append('')
    report = '\n'.join(out)
    with open(os.path.join(HERE, 'SLATE-SUMMARY.md'), 'w') as f:
        f.write(report)
    # also echo headline to stdout
    print(f'batches={len(files)} mods={mods_total} LEAVE={len(leave_mods)} '
          f'KEEP={tot["keep"]} CUT={tot["cut"]} MERGE={tot["merge"]} DEFER={tot["defer"]} '
          f'(build {sum(build_routes.values())}/playtest {defer_playtest})')
    if incomplete: print('INCOMPLETE:', ', '.join(incomplete))

if __name__ == '__main__':
    main()
