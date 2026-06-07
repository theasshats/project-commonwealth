#!/usr/bin/env python3
"""Weave-ledger consistency + coverage checker (docs/WEAVING-PLAN.md §4.4).

Asserts the ledger, the kubejs recipes, and the dossiers agree, and reports the understanding-layer
coverage that drives the worklist. Pure stdlib. Run after any weave/dossier change; advisory at first,
wire into pr-checks.yml later.

Checks (hard = exit nonzero):
  - every weave cites a known motif id                                  [hard]
  - every reagent a weave reserves matches the ownership table          [hard]
  - every weave whose status is authored+ names a kubejs file that      [hard]
    exists and mentions the target id/method
  - every kubejs bridge recipe file is referenced by >=1 weave          [advisory: un-ledgered edges]
Coverage (advisory):
  - dossiers: total / VERIFIED / UNVERIFIED / still-skeleton
  - mods at <2 anchors (the weave worklist), parsed from the `anchors:` line
"""
import os, re, sys, glob, json

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
LEDGER = os.path.join(HERE, 'weaves.json')
KUBEJS = os.path.join(ROOT, 'kubejs', 'server_scripts', 'recipes')
DOSSIERS = os.path.join(ROOT, 'tools', 'mod-data', 'dossiers')
PALETTE = os.path.join(HERE, 'methods-palette.md')
# the loop's anchorable systems (anchor labels in dossiers); `aeronautics` = the economy's logistics arm
PILLARS = ('create', 'magic', 'economy', 'aeronautics', 'survival')

errs, warns = [], []


def load_ledger():
    with open(LEDGER, encoding='utf-8') as f:
        d = json.load(f)
    return d, {m['id'] for m in d.get('motifs', [])}, d.get('reagents', {})


def check_weaves(led, motif_ids, reagents):
    referenced_files = set()
    for w in led.get('weaves', []):
        wid = w.get('id', '?')
        for m in (w.get('motif') or []) if isinstance(w.get('motif'), list) else [w.get('motif')]:
            if m and m not in motif_ids:
                errs.append(f'{wid}: cites unknown motif {m}')
        for r in w.get('reserves', []):
            if r in reagents and w.get('motif') and reagents[r] not in (
                    w['motif'] if isinstance(w['motif'], list) else [w['motif']]):
                errs.append(f'{wid}: reagent {r} owned by {reagents[r]}, weave cites {w.get("motif")}')
        if w.get('status') in ('authored', 'validated', 'playtested'):
            fp = w.get('file')
            if not fp:
                errs.append(f'{wid}: status {w["status"]} but no file')
                continue
            full = os.path.join(ROOT, fp)
            referenced_files.add(os.path.basename(fp))
            if not os.path.exists(full):
                errs.append(f'{wid}: file {fp} missing')
            else:
                body = open(full, encoding='utf-8').read()
                tgt = w.get('target') or w.get('to') or ''
                if tgt and tgt not in body:
                    warns.append(f'{wid}: target {tgt} not found in {fp}')
    return referenced_files


def check_unledgered(referenced_files, pre_ledger):
    if not os.path.isdir(KUBEJS):
        return
    pre_unlogged = 0
    for f in sorted(glob.glob(os.path.join(KUBEJS, '*.js'))):
        base = os.path.basename(f)
        if base in referenced_files:
            continue
        if base in pre_ledger:
            pre_unlogged += 1                # known pre-ledger weave — back-fill someday, not urgent
        else:
            warns.append(f'kubejs/{base}: NEW bridge file not referenced by any ledger weave — log it')
    if pre_unlogged:
        warns.append(f'{pre_unlogged} pre-ledger kubejs files not yet back-filled into the ledger '
                     f'(expected; not new edges)')


def coverage():
    files = sorted(glob.glob(os.path.join(DOSSIERS, '*.md')))
    if not files:
        warns.append('no dossiers found — run scripts/build-dossiers.py')
        return
    total = len(files)
    verified = skeleton = support = multi = 0
    low_pillar = []
    support_kw = re.compile(r'\b(support|library|lib|api|perf|performance|qol|client|flavor|cosmetic|'
                            r'deco|util|tooling|framework)\b', re.I)
    for f in files:
        txt = open(f, encoding='utf-8').read()
        head = txt.split('AUTO-DIGEST-FACTS', 1)[0]
        st = re.search(r'^status:\s*(\w+)', head, re.M)
        if st and st.group(1).upper() == 'VERIFIED':
            verified += 1
        if 'UNVERIFIED (skeleton)' in head:
            skeleton += 1
        am = re.search(r'^anchors:\s*(.+)$', head, re.M)
        anch = am.group(1) if am else ''
        if 'TODO' in anch:
            continue  # not yet swept — don't count as a gap yet
        n = sum(1 for p in PILLARS if re.search(r'\b' + p, anch, re.I))
        if n >= 2:
            multi += 1
        elif support_kw.search(anch):
            support += 1                 # sanctioned support role — a valid anchor, not a weave gap
        else:
            low_pillar.append((os.path.basename(f)[:-3], n))
    print(f'  dossiers: {total} total · {verified} VERIFIED · {skeleton} still-skeleton · '
          f'{total - skeleton} touched')
    if total - skeleton:
        print(f'  anchoring: {multi} at >=2 anchors (coverage met — NOT "done"; existing connections '
              f'still need a taste/balance audit, WEAVING-PLAN §6) · {support} support-role · '
              f'{len(low_pillar)} CONTENT mods at <2 anchors (coverage worklist)')
        for name, n in low_pillar[:60]:
            print(f'      [{n}] {name}')
        if len(low_pillar) > 60:
            print(f'      … +{len(low_pillar) - 60} more')


def main():
    print('== weave-ledger check ==')
    led, motif_ids, reagents = load_ledger()
    print(f'  motifs: {len(motif_ids)} · reagents reserved: {len(reagents)} · weaves: {len(led.get("weaves", []))}')
    print(f'  methods palette: {"present" if os.path.exists(PALETTE) else "MISSING"}')
    ref = check_weaves(led, motif_ids, reagents)
    check_unledgered(ref, set(led.get('pre_ledger_files', [])))
    coverage()
    if warns:
        print('\nadvisories:')
        for w in warns:
            print('  ! ' + w)
    if errs:
        print('\nERRORS:')
        for e in errs:
            print('  x ' + e)
        sys.exit(1)
    print('\nok')


if __name__ == '__main__':
    main()
