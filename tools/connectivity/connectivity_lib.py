"""Shared graph core for Project Commonwealth connectivity tooling.

Builds an undirected graph from the mod-jar recipe digests (tools/mod-data/recipes/*.txt), the mob-drop
edges of the entity loot digests (tools/mod-data/loot/*.txt — #129), plus the live kubejs/ overlay, and
provides the connectivity analyses used by the CLI report and the interactive HTML viz. See
docs/CONNECTIVITY.md for the math.
"""
import re, glob, os
from collections import defaultdict, deque

HERE = os.path.dirname(os.path.abspath(__file__))                       # tools/connectivity/
RECIPE_DIR = os.path.join(HERE, '..', 'mod-data', 'recipes')            # tools/mod-data/recipes/
LOOT_DIR   = os.path.join(HERE, '..', 'mod-data', 'loot')               # tools/mod-data/loot/
BYMOD_DIR  = os.path.join(HERE, '..', 'mod-data', 'by-mod')             # tools/mod-data/by-mod/
KUBEJS_DIR = os.path.join(HERE, '..', '..', 'kubejs', 'server_scripts', 'recipes')

_RTYPE = re.compile(r'[a-z_0-9]+:(crafting_shaped|crafting_shapeless|smelting|blasting|smoking|'
                    r'campfire_cooking|stonecutting|smithing_transform|smithing_trim|pressing|mixing|'
                    r'crushing|cutting|milling|compacting|deploying|filling|emptying|haunting|splashing|'
                    r'sandpaper_polishing|sequenced_assembly|mechanical_crafting|item_application)$')
_TOKEN = re.compile(r'#?([a-z0-9_]+:[a-z0-9_/]+)')

# Blind-spot #3 fix (tag membership is invisible in digests): infer cross-mod material unification.
# Any `<mod>:[raw_]<material>[_ingot/_block/_nugget/_dust/_plate/_ore]` is wired to a synthetic
# `c:material/<material>` node, so e.g. create_d2d:steel_ingot and tfmg steel stop looking islanded.
_MATERIALS = ('steel','iron','copper','gold','tin','lead','bronze','brass','zinc','nickel','silver',
              'aluminum','aluminium','uranium','tungsten','cobalt','platinum','titanium','mithril',
              'osmium','electrum','invar','constantan','crimson_iron','azure_silver','rose_gold')
_MATFORM = re.compile(r'^[a-z0-9_]+:(?:raw_|crushed_|cut_)?(' + '|'.join(_MATERIALS) +
                      r')(?:_ingot|_block|_nugget|_dust|_plate|_sheet|_ore|_wire|_rod)?$')

SPINE_NS = {'create'}   # the Create spine, for distance-to-spine

# Mob drops (#129): entity loot tables become mob nodes with DIRECT edges to each dropped item —
# deliberately no shared 'drop' method-node, which would weld every mob into one artificial hub and
# inflate the giant component. The digest is referenced-ids only (no pools/weights/conditions), so
# these are POSSIBLE drops (presence), not rates. The 'referenced ids' column mixes real drops with
# loot functions/conditions/number-providers; _noise() can't see those (they only vanish today
# because `minecraft` sits in the default remove set — under --with-vanilla they'd become phantom
# items), hence this explicit set of the vanilla loot registries. Modded refs are validated against
# the by-mod block/item registries instead (which also drops mod-registered loot functions), and any
# ref with a '/' in its path is a table/self reference, not an item.
_LOOT_NOISE = {'minecraft:' + p for p in (
    # entry types
    'item', 'entity', 'block', 'loot_table', 'tag', 'group', 'alternatives', 'sequence',
    'dynamic', 'empty',
    # functions
    'set_count', 'set_components', 'set_custom_data', 'set_potion', 'set_name', 'set_lore',
    'set_damage', 'set_attributes', 'set_enchantments', 'set_stew_effect', 'set_instrument',
    'set_banner_pattern', 'set_contents', 'set_loot_table', 'set_ominous_bottle_amplifier',
    'set_custom_model_data', 'set_fireworks', 'set_firework_explosion', 'set_book_cover',
    'set_writable_book_pages', 'set_written_book_pages', 'enchant_randomly', 'enchant_with_levels',
    'enchanted_count_increase', 'looting_enchant', 'exploration_map', 'explosion_decay',
    'furnace_smelt', 'smelt', 'fill_player_head', 'limit_count', 'apply_bonus', 'copy_components',
    'copy_custom_data', 'copy_name', 'copy_state', 'modify_contents', 'filtered', 'reference',
    'toggle_tooltips',
    # conditions
    'killed_by_player', 'random_chance', 'random_chance_with_enchanted_bonus',
    'random_chance_with_looting', 'looting', 'entity_properties', 'block_state_property',
    'match_tool', 'table_bonus', 'survives_explosion', 'damage_source_properties',
    'location_check', 'weather_check', 'time_check', 'value_check', 'entity_scores', 'inverted',
    'any_of', 'all_of', 'alternative', 'enchantment_active_check',
    # number providers + entity targets
    'uniform', 'binomial', 'constant', 'score', 'storage', 'enchantment_level',
    'this', 'attacker', 'killer', 'killing_player', 'direct_attacker', 'player', 'block_entity',
)}

def _registry():
    """Every block/item id the installed jars register (from the by-mod digests). Used to validate
    modded loot refs: a ref not in here is a loot function / phantom, not a drop. Per-installed-jar
    data, so unlike recipe ingredient refs it can't admit an uninstalled mod."""
    reg = set()
    for f in glob.glob(os.path.join(BYMOD_DIR, '*.txt')):
        for line in open(f, encoding='utf-8'):
            line = line.strip()
            if re.fullmatch(r'[a-z0-9_.-]+:[a-z0-9_.-]+', line):  # bare RL = a block/item line
                reg.add(line)
    return reg

# Coarse interpretive buckets (for reports + viz colouring ONLY — the graph itself is mod-agnostic,
# and since #129 mob connectivity is real drop edges from the loot digests, not this hand-map).
BUCKET = {
    'block/deco':  {'more_slabs_stairs_and_walls','upgrade_aquatic','quark','mcwroofs','mcwwindows',
                    'mcwdoors','mcwfences','mcwstairs','galosphere','domum_ornamentum','usefulfoundation',
                    'undergroundworlds','biomeswevegone','dynamictrees','handcrafted','rechiseled'},
    'tech/gear':   {'createnuclear','createbigcannons','cbc_at','northstar','create_d2d','tfmg',
                    'create_ironworks','createaddition','dndesires','thermal','silentgear','minecolonies',
                    'createaeronautics','immersive_armors','modulargolems','mffs','create'},
    'food':        {'createfood','extradelight','farmersdelight','expandeddelight','oceansdelight',
                    'bakery','farm_and_charm','meadow','vinery','chefsdelight'},
    'organic/mob': {'alexsmobs','naturalist','tide','ecologics','deeperdarker','cataclysm','arphex',
                    'mutantmonsters','beachparty','snowyspirit','grimoireofgaia','deep_aether',
                    'eternal_starlight','born_in_chaos_v1','ribbits'},
    'magic':       {'ars_nouveau','forbidden_arcanus','occultism','irons_spellbooks','s_a_b'},
    'security':    {'securitycraft'}, 'misc/util': {'simplehats','supplementaries'},
    'phantom':     {'recipe_integration','spawn','minecraft'},
}
def bucket(m):
    for b, ms in BUCKET.items():
        if m in ms: return b
    return 'other'

modof = lambda t: t.split(':', 1)[0]

def _noise(tok):
    return (':' not in tok or tok.endswith(':flag') or 'feature_item_enabled' in tok
            or re.match(r'(fabric|neoforge|forge):(mod_loaded|not|or|and|always|never|true|false)', tok)
            or _RTYPE.match(tok))

def _mat_edge(tok):
    m = _MATFORM.match(tok)
    return 'c:material/' + m.group(1) if m else None

def _real_namespaces():
    """Namespaces that AUTHOR a recipe (appear as a recipe-id). Everything else seen in ingredient
    position is a condition predicate (neoforge:tag_empty, fabric:all_mods_loaded) or dead compat for an
    UNINSTALLED mod (mekanism:* from recipe_integration) — phantom nodes we must not count."""
    real = set()
    for d in (RECIPE_DIR, LOOT_DIR):    # loot too: a mobs-only mod authors tables, not recipes
        for f in glob.glob(os.path.join(d, '*.txt')):
            for line in open(f, encoding='utf-8'):
                i = line.find(' | ')
                if i > 0: real.add(line[:i].split(':', 1)[0])
    real.add('c')   # our shared tags + synthetic c:material/*
    return real

def build(remove=frozenset({'minecraft'}), overlay=True, drops=True, loot_type='minecraft:entity'):
    """Return a Graph: nodes(set), adj(dict[node]->set[node]), mod_items(dict[mod]->set).

    drops=True ingests entity loot tables as mob->item edges (default-on; --no-drops in the CLI).
    loot_type parameterizes the table filter so chest/structure loot (#18) can become a lens later
    without rework — today only 'minecraft:entity' is wired up."""
    real = _real_namespaces()
    nodes = set()
    adj = defaultdict(set)
    def link(a, b):
        if a != b:
            adj[a].add(b); adj[b].add(a)
    def group(toks, method=None):
        toks = [t for t in toks if not _noise(t) and modof(t) in real and modof(t) not in remove]
        toks = list(dict.fromkeys(toks))
        extra = []
        for t in toks:
            me = _mat_edge(t)
            if me and 'c' not in remove:
                extra.append(me)
                link(t, me)
        for n in toks + extra:
            nodes.add(n)
        for b in toks[1:]:
            link(toks[0], b)
        # Create-spine principle is PARTS + METHODS: a modded machine recipe-type (create:mixing,
        # farmersdelight:cooking, …) is real connectivity — every item made by it is linked through
        # the method node, which attaches to that mod's cluster. Vanilla types are universal → dropped.
        if method and modof(method) in real and modof(method) not in remove:
            nodes.add(method)
            for t in toks:
                link(method, t)

    for f in glob.glob(os.path.join(RECIPE_DIR, '*.txt')):
        for line in open(f, encoding='utf-8'):
            p = line.rstrip('\n').split(' | ')
            if len(p) < 3: continue
            rtype = p[1]
            method = rtype if not rtype.startswith('minecraft:') else None
            group([t for t in p[2].split() if t != rtype], method=method)

    if overlay and os.path.isdir(KUBEJS_DIR):
        mod_nodes = defaultdict(list)
        for n in nodes: mod_nodes[modof(n)].append(n)
        known = set(mod_nodes)
        for f in glob.glob(os.path.join(KUBEJS_DIR, '*.js')):
            txt = open(f, encoding='utf-8').read()
            ids = [m.group(1) for m in _TOKEN.finditer(txt)]
            group(ids)
            targets = [t for t in ids if not _noise(t) and modof(t) == 'create' and modof(t) not in remove]
            if targets:
                # mod-filter weaves: replaceInput({mod:'X'|id:/^X:/}, .., 'create:Y') names X by filter.
                named = {w for w in re.findall(r"'([a-z0-9_]+)'", txt) if w in known}
                named |= {m for m in re.findall(r"/\^?([a-z0-9_]+):", txt) if m in known}
                for mod in named:
                    if mod in remove: continue
                    for node in mod_nodes[mod]:
                        link(node, targets[0])

    # --- mob drops (#129): entity loot tables -> mob node + direct edges to each dropped item ---
    recipe_nodes = set(nodes)            # snapshot: what recipes/overlay alone reach
    mob_nodes, drop_items, n_tables = set(), set(), 0
    if drops:
        reg = _registry()
        for f in glob.glob(os.path.join(LOOT_DIR, '*.txt')):
            for line in open(f, encoding='utf-8'):
                p = line.rstrip('\n').split(' | ')
                if len(p) < 3 or p[1] != loot_type:
                    continue                      # entity tables only: no block self-drops (would
                n_tables += 1                     # flood the graph), no chest loot (#18's sibling)
                mob = p[0]
                if modof(mob) in remove:
                    continue
                kept = []
                for t in dict.fromkeys(p[2].split()):
                    if t == mob or ':' not in t:
                        continue
                    ns, path = t.split(':', 1)
                    if '/' in path or ns in remove:
                        continue                  # '/' = table/self ref, never an item
                    if ns == 'minecraft':
                        if t in _LOOT_NOISE: continue
                    elif t not in reg:
                        continue                  # not a registered block/item -> loot function
                    kept.append(t)
                if not kept:
                    continue   # nothing in-lens: don't add a 1-node mob island (lens-respecting)
                mob_nodes.add(mob)
                nodes.add(mob)
                for t in kept:
                    nodes.add(t)
                    drop_items.add(t)
                    link(mob, t)
                    me = _mat_edge(t)             # material unification applies to drops too
                    if me and 'c' not in remove:
                        nodes.add(me)
                        link(t, me)

    mod_items = defaultdict(set)
    for n in nodes:
        if not n.startswith('c:'): mod_items[modof(n)].add(n)
    g = Graph(nodes, adj, mod_items)
    g.mob_nodes, g.drop_items, g.loot_tables = mob_nodes, drop_items, n_tables
    g.drop_only = drop_items - recipe_nodes      # items ONLY a mob provides — no recipe touches them
    return g


class Graph:
    def __init__(self, nodes, adj, mod_items):
        self.nodes, self.adj, self.mod_items = nodes, adj, mod_items

    def components(self):
        """List of node-sets, largest first."""
        seen, comps = set(), []
        for s in self.nodes:
            if s in seen: continue
            stack, cur = [s], []
            seen.add(s)
            while stack:
                x = stack.pop(); cur.append(x)
                for y in self.adj[x]:
                    if y not in seen:
                        seen.add(y); stack.append(y)
            comps.append(set(cur))
        comps.sort(key=len, reverse=True)
        return comps

    def items_only(self, c):
        return [x for x in c if not x.startswith('c:')]

    def distance_to_spine(self):
        """BFS hop-distance of every node from the nearest Create-spine node (blind-spot #2)."""
        src = [n for n in self.nodes if modof(n) in SPINE_NS]
        dist = {s: 0 for s in src}
        q = deque(src)
        while q:
            x = q.popleft()
            for y in self.adj[x]:
                if y not in dist:
                    dist[y] = dist[x] + 1; q.append(y)
        return dist   # nodes not in dict are unreachable from the spine

    def articulation_points(self):
        """Tarjan cut-vertices: nodes whose removal raises the component count (blind-spot #1).

        Iterative DFS to survive deep graphs."""
        ids = {}; low = {}; art = set(); timer = [0]
        for root in list(self.nodes):
            if root in ids: continue
            children = 0
            stack = [(root, None, iter(self.adj[root]))]
            ids[root] = low[root] = timer[0]; timer[0] += 1
            while stack:
                node, parent, it = stack[-1]
                advanced = False
                for nb in it:
                    if nb == parent: continue
                    if nb not in ids:
                        if node == root: children += 1
                        ids[nb] = low[nb] = timer[0]; timer[0] += 1
                        stack.append((nb, node, iter(self.adj[nb])))
                        advanced = True
                        break
                    else:
                        low[node] = min(low[node], ids[nb])
                if not advanced:
                    stack.pop()
                    if stack:
                        par = stack[-1][0]
                        low[par] = min(low[par], low[node])
                        if stack[-1][1] is not None and low[node] >= ids[par]:
                            art.add(par)
            if children > 1: art.add(root)
        return art

    def mod_projection(self, min_weight=1):
        """Collapse to a mod-level weighted graph: nodes=mods, edge weight = #item-edges between them.
        `c:` tags fold into co-membership edges (mods sharing a tag get linked)."""
        wt = defaultdict(int)
        tag_mods = defaultdict(set)
        for a in self.adj:
            for b in self.adj[a]:
                if a >= b: continue
                ma, mb = modof(a), modof(b)
                if a.startswith('c:'):
                    if mb != 'c': tag_mods[a].add(mb)   # skip tag–tag edges (mb=='c')
                elif b.startswith('c:'):
                    if ma != 'c': tag_mods[b].add(ma)
                elif ma != mb:
                    wt[tuple(sorted((ma, mb)))] += 1
        for tag, mods in tag_mods.items():       # mods sharing a tag are woven via it
            mods = sorted(mods)
            for i in range(len(mods)):
                for j in range(i + 1, len(mods)):
                    wt[(mods[i], mods[j])] += 1
        return {k: v for k, v in wt.items() if v >= min_weight}
