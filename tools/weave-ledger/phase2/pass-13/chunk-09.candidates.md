# Phase 2 candidates — chunk-09

## betteroceanmonuments   [anchors: survival (1)]
- LEAVE — zero registry items/blocks; structure-only overhaul. No material surface to route through any method. The loot tables it adds are vanilla loot-table edits (a datapack-side hook), not a mod weave — defer any coin-in-chest or reagent-drop loot-table work to the economy datapack pass. Forcing an edge here would violate the "don't force edges onto deliberately-vanilla organic content" guardrail.

## rolling_down_in_the_deep   [anchors: support/client (1)]
- LEAVE — pure clientside camera/movement feel mod; zero items, zero methods, zero material graph. No coherent weave surface exists; not even a thematic adjacency worth a datapack hook.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — pure runtime memory optimization; no blocks, items, or methods. A sanctioned support anchor needing no weave.

## tide   [anchors: survival (1)]
- from: tide rare/biome-locked fish (e.g. tide:abyss_angler, tide:alpha_fish) | via: numismatics sell/price (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare fish caught only in specific biomes or under seasonal conditions are sellable trade goods — a fisher specialist sells what no one else can catch.
- from: tide:abyss_angler / void-fish drops | via: occultism:spirit_fire (M-11) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: creatures from the abyss carry residual soul-matter; burning them in spirit fire yields an essence — the deep sea is magic-adjacent (void fish, nether fish, etc.).
- from: tide raw fish (c:foods/raw_fish stream) | via: create:milling (M-12) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill raw fish into fishmeal — a cheap organic fertilizer or Farmers Delight cooking intermediate that feeds farm machines; one light step for an everyday material.
- from: tide:abyss_angler or exotic fish | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Ars imbuement is better reserved for gem/crystal/essence materials; infusing a fish into a magic reagent crosses a tone line (comically mundane vs. arcane ritual). The spirit_fire route (M-11) handles the magic angle more coherently.
- from: tide biome-locked fish | via: M-16 seasonal reagent | to: Create/magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Serene Seasons compat is already in tide; certain fish only in winter/autumn become seasonal inputs — e.g. a winter-locked fish feeds a magic infusion or a Create mixing recipe for a cold-temperature reagent.

## owo   [anchors: support/library (1)]
- LEAVE — pure code library (UI/config/networking framework); zero player-facing content, zero items, zero methods. Genuine zero-content library; no weave possible or appropriate.

## aeronautics_bundled   [anchors: aeronautics (1)]
- from: (bundle wrapper — content registers under `aeronautics`/`sable` ns) | via: n/a | to: n/a | motif: n/a | power: n/a | tone: n/a | verdict: LEAVE — this jar is a distribution wrapper; it registers 0 items, 0 blocks under this namespace. All real weaving belongs on the `aeronautics` namespace dossier. The dossier itself notes this. Attempting to weave the bundle ns is mis-targeted.
- OK — the existing note that Create is a de-facto 2nd pillar via component crafting (M-06/M-23/M-24 on the aeronautics ns) is sound; the bundle wrapper's own ns has nothing to add.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure recipe/tag glue layer for the Let's Do food family; registers 0 items, 0 blocks of its own. Its entire function IS the M-12-style processing-chain unification for the food cluster — it is the weave, not a candidate for a second weave. Treating it as a weave target would be circular. A second pillar requires something of its own to route; it has none.

## kobolds   [anchors: economy, survival (2)]
- OK — connections sound: economy (emerald trade / kobold profession system) + survival (underground structures, creature layer) are both solid and natural; this is a genuinely dual-pillar mod without forcing.
- REWORK: no existing authored connections to flag — the dual anchors are natural (not recipe-authored), so no rework needed on those.
- from: kobolds:kobold_skull | via: occultism:spirit_fire (M-11) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: kobolds are an underground folk with a distinct life-force; burning a kobold skull in spirit fire transmutes it into a spirit essence — the skull is already a symbolic item (used to make skelebolds), lending it to Occultism's transmutation grammar.
- from: kobolds:kobold_skull | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: a kobold skull is organic/trophy material — routing it through Ars imbuement doubles up on the magic pillar where spirit_fire already handles organic→spirit transmutation more coherently. Don't need both magic routes for one item.
- from: kobolds (Prospector enchant / redstone trade goods) | via: M-21 trade-seam | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); kobolds already anchor economy via their own emerald-trade system — adding a Numismatics trade-seam on top is redundant and risks over-wiring a naturally-trading mob. Skip unless M-21 is confirmed.

## dynamic_fps   [anchors: support/perf (1)]
- LEAVE — clientside FPS throttler; zero items, zero methods, zero material graph. Performance infrastructure; no weave surface exists.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — terrain-generation overhaul with no registry items/blocks; pure worldgen density-function shaping. Thematic adjacency to the pack's "scarce, regional ores" survival design is real (bigger mountains/continents spread resources further, amplifying specialization), but there is nothing to recipe-route. Forcing an edge here would be decorative fiction, not a weave.

== CHUNK COMPLETE ==
