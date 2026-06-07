# Phase 2 candidates — chunk-18

## jade   [anchors: support/client-UI (1)]
- LEAVE — zero content surface: no items, no loot table, no recipe methods, no materials. Pure client rendering overlay (block/entity tooltip HUD). Nothing to route through any method; no reagent to assign. Genuine zero-surface support mod.

## timm   [anchors: support/client-UI (1)]
- LEAVE — zero content surface: client-only biome/dimension title renderer; no items, no loot, no methods, no materials. Could theoretically reinforce exploration feel alongside t_and_t structures, but that is pure flavor with no method edge. Genuine zero-surface support mod.

## attributefix   [anchors: support/library-fix (1)]
- LEAVE — pure code library (Darkhax attribute-cap patch); zero blocks, items, loot, or methods. Its value is invisible correctness — it lets magic/combat gear scale without cap-clamping. No content surface to weave. Genuine zero-surface library.

## particlerain   [anchors: support/client-atmosphere (1)]
- LEAVE — zero gameplay surface: client-side weather/particle renderer; no items, no loot tables, no recipe methods, no consumables. A thematic adjacency to Serene Seasons weather exists at the flavor level (sandstorms in dry biomes reinforce season feel), but there is no method edge and nothing to route. Genuine zero-surface support mod.

## tipsmod   [anchors: support/client-QoL (1)]
- LEAVE — zero content surface: loading-screen tip display only; no items, no loot, no recipe methods. The pack can author tips.json to onboard players into the loop (scarcity, trading, diet), which is valuable but is documentation/content authoring, not a pillar weave. Genuine zero-surface support mod.

## vinery   [anchors: survival (1)]
- from: vinery wines (aged in fermentation_barrel) | via: vinery:wine_fermentation + barrel aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a vintner stores summer-pressed grape juice for weeks to sell premium aged wine — the aging wait is the specialist's moat
- from: grapes/apples (seasonal harvest) | via: config-tie (Serene Seasons crop-season growth conditions on vinery grapevines) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: grapevines only ripen in summer/autumn — a vintner times their harvest to the seasons, and off-season wine commands a premium
- from: fruit (grapes, apples, cherries) | via: create:pressing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: an industrial press scales the vineyard — skip the grapevine_pot stomp and pipe bulk grape juice into the fermentation line
- from: vinery wine (effect-bearing named bottle) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual calls for a specific vintage — cherry wine as a blood-ritual catalyst, or bolvar wine steeped in an Ars imbuement pedestal for a focus; the magic specialist must trade with the vintner
- from: vinery wines (consumables) | via: ambient food consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: bare consumption is the ambient loop endpoint; every food/drink is consumed, so this is not a designed demand-gating weave — it's the default. M-09 (luxury→coin) is retired; same principle applies here. No authoring action needed.
- REWORK: existing 2nd-anchor candidate in dossier cites M-09 (luxury→coin) as 'STRONG' — M-09 is retired (#163/#240). The real economy link is M-35 (aging creates specialist value that others must trade for) + M-29 (ritual demand gates it). Remove the M-09 framing from the dossier candidate note.
