#!/usr/bin/env python3
"""Recipe-graph connectivity metric for Derpack X.

North star (CLAUDE.md): if you drew a line from every item to what it's used for, the pack should look
like ONE or two cohesive webs, not many disconnected clusters. This measures that.

It builds an undirected graph (nodes = items + `c:` tags; every recipe unions its tokens) from BOTH:
  - the mod-jar recipe digests in tools/mod-data/recipes/*.txt, AND
  - our live kubejs/server_scripts/recipes/*.js overlay (each file unions the item ids it references —
    coarse but it captures the bridges we author with replaceInput / shaped / create.* methods).
The giant component is "the web"; everything else is an island = the worklist.

Two lenses:
  - default: vanilla `minecraft:` items are FILTERED OUT, so "connected" means connected through the
    modded/Create economy, not through a shared stick or dirt block. This is the real picture.
  - --with-vanilla: keep vanilla (everything looks connected; useful only as an upper bound).
Flags:  --with-vanilla   keep minecraft: nodes
        --jars-only      ignore the kubejs overlay (measure the untouched base game)

Usage:  python3 tools/recipe-graph.py [--with-vanilla] [--jars-only]
"""
import re, sys, glob, os
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
RECIPE_DIR = os.path.join(HERE, 'mod-data', 'recipes')
KUBEJS_DIR = os.path.join(HERE, '..', 'kubejs', 'server_scripts', 'recipes')

WITH_VANILLA = '--with-vanilla' in sys.argv
JARS_ONLY    = '--jars-only' in sys.argv

_RTYPE = re.compile(r'[a-z_0-9]+:(crafting_shaped|crafting_shapeless|smelting|blasting|smoking|'
                    r'campfire_cooking|stonecutting|smithing_transform|smithing_trim|pressing|mixing|'
                    r'crushing|cutting|milling|compacting|deploying|filling|emptying|haunting|splashing|'
                    r'sandpaper_polishing|sequenced_assembly|mechanical_crafting|item_application)$')
_TOKEN = re.compile(r'#?([a-z0-9_]+:[a-z0-9_/]+)')   # mod:item or c:tag, optional leading #

def is_noise(tok):
    return (':' not in tok
            or tok.endswith(':flag') or 'feature_item_enabled' in tok
            or re.match(r'(fabric|neoforge|forge):(mod_loaded|not|or|and|always|never|true|false)', tok)
            or _RTYPE.match(tok))

modof = lambda t: t.split(':', 1)[0]

BUCKET = {
    'block/deco':  {'more_slabs_stairs_and_walls','upgrade_aquatic','quark','mcwroofs','mcwwindows',
                    'mcwdoors','mcwfences','mcwstairs','galosphere','domum_ornamentum','usefulfoundation',
                    'undergroundworlds','biomeswevegone','dynamictrees','handcrafted','rechiseled'},
    'tech/gear':   {'createnuclear','createbigcannons','cbc_at','northstar','create_d2d','tfmg',
                    'create_ironworks','createaddition','dndesires','thermal','silentgear','minecolonies',
                    'createaeronautics','immersive_armors','modulargolems','mffs'},
    'food':        {'createfood','extradelight','farmersdelight','expandeddelight','oceansdelight',
                    'bakery','farm_and_charm','meadow','vinery','chefsdelight'},
    'organic/mob': {'alexsmobs','naturalist','tide','ecologics','deeperdarker','cataclysm','arphex',
                    'mutantmonsters','beachparty','snowyspirit','grimoireofgaia','deep_aether',
                    'eternal_starlight','born_in_chaos_v1','ribbits'},
    'magic':       {'ars_nouveau','forbidden_arcanus','occultism','irons_spellbooks','s_a_b'},
    'security':    {'securitycraft'},
    'misc/util':   {'simplehats','supplementaries'},
    'phantom':     {'recipe_integration','spawn','minecraft'},
}
def bucket(m):
    for b, ms in BUCKET.items():
        if m in ms: return b
    return 'other'

def build():
    nodes, edges = set(), []
    def add_group(toks):
        toks = [t for t in toks if not is_noise(t)]
        if not WITH_VANILLA:
            toks = [t for t in toks if modof(t) != 'minecraft']
        toks = list(dict.fromkeys(toks))
        for n in toks: nodes.add(n)
        for b in toks[1:]:
            edges.append((toks[0], b))
    # mod-jar digests
    for f in glob.glob(os.path.join(RECIPE_DIR, '*.txt')):
        for line in open(f, encoding='utf-8'):
            p = line.rstrip('\n').split(' | ')
            if len(p) < 3: continue
            add_group([t for t in p[2].split() if t != p[1]])
    # live kubejs overlay. Two kinds of edge:
    #  (a) explicit item ids a file references (shaped/create.* recipes, bridges) -> union them.
    #  (b) mod-filter weaves: `replaceInput({ mod: 'X' }, ..., 'create:Y')` references mod X only by
    #      NAME (no item id), so (a) misses it. Detect bare mod-name strings and wire that whole mod's
    #      items to the file's create:/modded targets — that's how the decoration weave connects mods.
    if not JARS_ONLY and os.path.isdir(KUBEJS_DIR):
        mod_nodes = defaultdict(list)
        for n in nodes: mod_nodes[modof(n)].append(n)
        known_mods = set(mod_nodes)
        for f in glob.glob(os.path.join(KUBEJS_DIR, '*.js')):
            txt = open(f, encoding='utf-8').read()
            ids = [m.group(1) for m in _TOKEN.finditer(txt)]
            add_group(ids)
            # (b) whole-mod bridges
            targets = [t for t in ids if not is_noise(t) and modof(t) in ('create',)  # Create parts/sheets
                       and (WITH_VANILLA or modof(t) != 'minecraft')]
            if targets:
                named = {w for w in re.findall(r"'([a-z0-9_]+)'", txt) if w in known_mods}
                for mod in named:
                    for node in mod_nodes[mod]:
                        edges.append((node, targets[0]))

    parent = {n: n for n in nodes}
    def find(x):
        r = x
        while parent[r] != r: r = parent[r]
        while parent[x] != r: parent[x], x = r, parent[x]
        return r
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra != rb: parent[ra] = rb
    comps = defaultdict(set)
    for n in nodes: comps[find(n)].add(n)
    return nodes, sorted(comps.values(), key=len, reverse=True)

def main():
    nodes, comps = build()
    giant = comps[0]
    nitems = lambda c: sum(1 for x in c if not x.startswith('c:'))
    items = sum(nitems(c) for c in comps)
    off = items - nitems(giant)
    lens = "WITH vanilla" if WITH_VANILLA else "NO vanilla (modded/Create economy only)"
    src  = "jars only" if JARS_ONLY else "jars + live kubejs overlay"
    print(f"# Recipe-graph connectivity\n")
    print(f"_Generated by `tools/recipe-graph.py` — lens: **{lens}**, source: {src}._\n")
    print(f"- item nodes: **{items}**  (+{len(nodes)-items} `c:` tags)")
    print(f"- connected components: **{len(comps)}**")
    print(f"- giant component (\"the web\"): **{nitems(giant)}** items — {100*nitems(giant)//items}% of items")
    print(f"- items OUTSIDE the web (islands): **{off}** across {len(comps)-1} clusters\n")

    print("## Separate webs / islands by mod (dominant mod of each off-web cluster)\n")
    by_mod = defaultdict(int); isl = defaultdict(int); big = defaultdict(int)
    for c in comps[1:]:
        cm = defaultdict(int)
        for x in c:
            if not x.startswith('c:'): cm[modof(x)] += 1
        for m, n in cm.items(): by_mod[m] += n
        if cm:
            dom = max(cm, key=cm.get); isl[dom] += 1
            big[dom] = max(big[dom], len(c))
    print("| items off-web | clusters | biggest | bucket | mod |")
    print("|--:|--:|--:|---|---|")
    for m, n in sorted(by_mod.items(), key=lambda x: -x[1]):
        if n >= 5:
            print(f"| {n} | {isl.get(m,0)} | {big.get(m,0)} | {bucket(m)} | `{m}` |")

if __name__ == '__main__':
    main()
