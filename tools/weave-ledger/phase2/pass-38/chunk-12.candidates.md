# Phase 2 candidates — chunk-12

## foodeffecttooltips   [anchors: support (1)]
LEAVE — pure client-side tooltip renderer; no items, no blocks, no recipes, no methods surface. Sanctioned support/QoL role. Zero content to route through any method.

## tide   [anchors: survival (1)]
- from: tide raw/cooked fish (100+ biome-locked species) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill bycatch and off-spec fish into fish meal — a Create-processed fertilizer/brewing input drawn from the fishing yield; fishing biome-locks the feedstock (some species only in ocean/void/nether), so the source carries regional scarcity naturally
- from: tide rare catch (abyss_angler, void fish, nether catches) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: abyss-dwellers and void catches are eldritch by lore; burning them in spirit fire yields an occult essence — rare catches become a magic reagent, pulling combat/fishing into the Occultism tree; biome-locked scarcity means mages must trade or fish specific biomes
- from: tide fish as c:foods/raw_fish / c:foods/cooked_fish | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: already inbound (made-by list confirms farmersdelight:cutting) — confirm existing edge is intentionally exploiting the tag breadth; no new authoring needed but worth flagging as a load-bearing existing connection
- from: tide seasonal catches (Serene Seasons compat) | via: create:milling | to: create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: season-gated species (e.g. freshwater spawning fish in spring only) yield a season-exclusive meal or fishmeal that feeds Create compacting or a cooking recipe — seasonal window forces stockpiling and trade, advancing the pressure loop
- from: tide rare biome-locked fish | via: numismatics (player bounty) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: a void-only or deep-ocean-only species is region-locked by biome; the only way to supply one to an inland colony is to trade — fish become inter-player commodity, not a vendor sink; demand is functional (recipe input for M-11/M-12 weaves, not bare "sellable")
- from: tide:crab_claw (from dossier reference to friendsandfoes; crosscheck — actually friendsandfoes is the crab, tide is fish) — this belongs to friendsandfoes, not tide; discard this candidate
- from: tide fish drops / loot | via: bare "sellable" | to: economy | motif: M-09 (RETIRED) | verdict: REJECT | reason: dossier's own candidate cites M-09 which is retired; "fish are sellable" is the ambient endpoint — only counts if it gates demand (M-30 above covers the real version)
- from: tide:abyss_angler / void catches | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (M-11/occultism) is the cleaner fit for "burn eldritch creature to reagent"; an Ars imbuement of a raw fish is thematic stretch — the occult route (M-11) is accepted and covers this need; redundant edge, don't double-route the same material through two magic systems without strong differentiation
OK — existing farmersdelight:cutting connection sound (confirmed via made-by). No existing multi-anchor connections to flag as REWORK; mod is currently 1-anchor; proposed edges above add create + magic.

## nochatreports   [anchors: support (1)]
LEAVE — networking/privacy utility; zero items, zero blocks, zero methods. Pure server-protocol mod. Sanctioned support role, no content surface to weave.

## createfurnitureseats   [anchors: support + aeronautics (2)]
- REWORK: current aeronautics anchor is described as "leans the transport pillar" from sittable furniture on ships — this is sound; the compat behavior is exactly the aeronautics logistics arm's quality-of-life layer (player comfort on Aeronautics sub-levels). OK — connections sound.
- from: (no items/blocks) | verdict: REJECT all new candidates | reason: zero items/blocks/methods; forcing any edge would be contrived. Already at 2 anchors (support + aeronautics) via the compat behavior, which is a valid aeronautics anchor. No further weaving possible or needed.
LEAVE from method-pull — no content surface; existing 2-anchor classification is appropriate and should remain.

## kambrik   [anchors: library/API support (1)]
LEAVE — Kotlin dev-framework library; zero items, blocks, biome-modifiers, or methods. No gameplay surface whatsoever. Pure dependency for Kotlin-based mods.

## accessories   [anchors: support (1)]
LEAVE — accessory-slot API; zero items, blocks, or methods of its own. All wearable content that weaves lives in dependent mods (Travelers Backpack, Ars Nouveau accessories, etc.), not here. No surface to route.

