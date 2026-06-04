# Phase 2 candidates — chunk-18

## create_better_villagers   [anchors: Create, economy (2)]

Already 2-pillar. Reviewing existing connections and any deeper weave opportunities.

OK — connections sound. The two anchors (Create parts source + emerald trade economy) are coherent and well-motivated; the vanilla-emerald denomination is the only soft spot.

- from: emerald trades → Numismatics coin denomination | via: config/KubeJS trade override | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); re-denomination of villager trades to Numismatics coins sits under the trade-seam motif which the maintainer flags as explore-only. Surface for 0.9 economy review, don't accept now.
- from: Create parts (andesite/copper/brass tier) → MineColonies supply | via: M-05 native-method gating concept | to: Create (depth) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: create_better_villagers is already a *source* of Create parts; routing it as a gate input inverts its function. Architecturally backwards — the mod's role is to supply parts, not consume them as gate items. No clean weave available beyond the existing 2-pillar anchors.
- REWORK: existing economy anchor is via vanilla emeralds, not Numismatics coin — weak link to the pack's own economy pillar. Flag for 0.9 economy update: either re-denominate trades or add a Numismatics price-list overlay so these villagers participate in the player-run currency.

---

## fusion   [anchors: support/library (1)]

LEAVE — pure client-side connected-texture rendering library; zero items/blocks/materials; no content surface to weave.

---

## t_and_t   [anchors: survival (1)]

- from: village loot chests / trade tables (biome-specific variants) → Numismatics economy seeding | via: loot-table override (custom JSON) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: each of the 16 biome village variants carries region-appropriate goods in its chests — a jungle village might carry exotic spices or crop seeds that feed the pack's trade economy; players exploring new biome settlements find trade-ready commodities rather than plain vanilla loot.
- from: conquerable fort/tower loot → boss-adjacent rare drop for Create/magic gating | via: loot-table injection | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: the forts spawn pillagers, not bosses — the loot tier is mid-exploration, not endgame. Routing a pillager-fort drop as a boss-key gate item misrepresents its power tier. M-15 is reserved for actual boss drops; this would dilute it.
- from: ocean sail-ship structure → Aeronautics thematic hook (player inspiration/discovery) | via: (no mechanical routing exists — structures don't feed a method) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no mechanical method connects a worldgen structure to the aeronautics pillar; this is flavor only, not a real weave. no-motif → reject.

---

## exposure   [anchors: Create, survival (2)]

Already 2-pillar. Reviewing existing connections and any new opportunities.

OK — existing Create anchor (sequenced_assembly film development + deployer camera stands) is coherent, well-motivated, and appropriately deep for a hobby mod.

- from: printed photograph / album → sellable memento via Numismatics | via: numismatics sell/price listing | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself flags this as WEAK, and it is — photographs have no intrinsic economic value in-world; making them a coin commodity feels contrived. The mod's survival hobby character doesn't need an economic hook to justify its place. Reject; leave at 2 pillars.
- from: exposure:black_and_white_film (silver-halide chemistry implied) → Ars Nouveau imbuement as a "light-reactive" catalyst | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — film chemistry as arcane catalyst is a stretch that a player wouldn't find intuitive. The photography vibe and the arcane infusion vibe are stylistically incompatible. Reject on tone.

---

## alternate_current   [anchors: support (1)]

LEAVE — pure performance patch; replaces redstone-dust update logic with no items, no blocks, no materials; nothing to weave.

---

## searchables   [anchors: support (1)]

LEAVE — client UI search/filter library; no items, no blocks, no materials; nothing to weave.

---

## resourcefulconfig   [anchors: support (1)]

LEAVE — config-definition library/API; no items, no blocks, no materials; nothing to weave.

---

## creativecore   [anchors: support (1)]

LEAVE — GUI/packet/recipe-system library (CreativeMD); no items, no blocks, no materials; nothing to weave.

---

## createaddoncompatibility   [anchors: support/compat (1)]

LEAVE — content-free unification-rules layer (Almost Unified priorities for Create addons); no gameplay items; its one distillation recipe slot is already present to canonicalize TFMG plastic. No weave opportunity; existing function is to prevent weave-fragmentation, not to add new edges. Note standing caution: verify its tag priorities never touch `galosphere:*silver*` (CLAUDE.md palladium/silver gotcha).

---

## mcwwindows   [anchors: decoration/support (1)]

- from: stone parapet / arrow-slit / mosaic glass blocks → Create crushing | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: decorative stone parapets and arrow slits (solid stone cuts) crush back to gravel/cobblestone + an XP nugget — the same lossy recycle loop that applies to all deco stone; a builder over-ordering window blocks isn't penalized, they just lose a little.
- from: curtain (wool-based) → magic catalyst (wool as reagent) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: curtains as arcane reagents is a tone clash; wool is already vanilla and there's no thematic reason a window curtain earns a magic role. Reject on tone/forced-edge.
- REWORK note: the existing decoration anchor is a sanctioned support role per the dossier ("only weave as part of a wholesale deco-family pass") — the M-04 crush-recycle above is the right scope: light, consistent with the whole deco family, not deep. The accepted candidate should be batched with other Macaw's mods in the deco-family pass rather than standalone.

== CHUNK COMPLETE ==
