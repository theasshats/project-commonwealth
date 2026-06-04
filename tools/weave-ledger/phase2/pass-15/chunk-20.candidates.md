# Phase 2 candidates — chunk-20

## create_factory   [anchors: Create, survival (2)]
- from: create_factory sweets (caramel_waffle, honey_roll, chocolate_apple, etc.) | via: numismatics sell / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A player automating the dessert factory naturally wants a market — fancy confections are textbook luxury trade goods that earn coin.
- from: create_factory jam/nectar fluids | via: ars_nouveau:imbuement (as a sweet catalyst in an infusion) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: jam/nectar have no arcane thematic grounding — forcing a sweet fluid into an infusion reads as arbitrary flavor clash; the mod earns its 2nd pillar cleanly through M-09 alone.
REWORK: none — Create + survival anchors are natural and the M-09 economy link is the right shape; no existing connections to flag.

## chefsdelight   [anchors: survival, economy (2)]
- from: Cook/Chef villager trades (FD meals) | via: numismatics coin price config / KubeJS | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Rewiring the Cook/Chef trades to pay and cost numismatics coin pulls village food commerce into the pack's actual currency — a player can sell surplus crops to the village Cook and earn real coin rather than emeralds.
- from: chefsdelight loot=yes (village cook structures) | via: loot-seed (structure chests contain numismatics coin or FD recipe scrolls) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: A cook-house chest holding a few coins and a recipe note makes exploring villages rewarding in the pack's own currency.
REWORK: The existing economy anchor rides vanilla emerald trades — that is the right system but not yet wired to numismatics; the ACCEPT candidates above address that. Connections are sound in intent but need the currency bridge.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted wood furniture (chairs, tables, shelves, cupboards) | via: create:cutting (Saw processes planks into trim/panel components used as furniture inputs) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running lumber through the Create Saw to get cut panels before assembling furniture ties the homestead-decoration tier into the Create woodworking chain — players set up a small sawmill for their base furnishings.
- from: handcrafted finished furniture sets | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Deco furniture sells thinly as a trade concept — players don't typically carry chairs to a market stall; no strong "of course" moment. The Create-cutting link (above) is the stronger second pillar and sufficient.
REWORK: no existing cross-pillar connections; M-12 (via create:cutting) is the new anchor.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks tin_ingot / crushed tin | via: numismatics mint (Create process → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is scarce and regional — crushing and processing it into the Numismatics coin chain is exactly the scarcity-economy seam the pack is built around; a tin-region player becomes the mint for bronze-tier currency.
- from: create_ironworks steel_ingot / steel_plate | via: Aeronautics airframe recipe (structural alloy ingredient) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel plate as a required structural component in mid-tier Aeronautics hulls is mechanically obvious — you can't bolt together an airship from raw iron; the Create metalworking chain earns its place in ship construction.
- from: create_ironworks bronze_ingot | via: ars_nouveau:imbuement (arcane alloy sink) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Bronze is an industrial/metallurgy material; forcing it into an arcane infusion as a magic reagent has no thematic grounding and competes with the better established magic-input materials.
REWORK: no existing cross-pillar connections; both ACCEPTs above are the first weaves.

## exposure   [anchors: Create, survival (2)]
- from: exposure:camera (gold variant) / exposure:album | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: While "sell a photograph" is superficially sensible, photographs are personal player outputs (of their own base/world) — they have no consistent trade value and the link is more forced than coherent. The mod sits well at 2 pillars already.
- from: exposure:lightroom (block) + developed photographs | via: MineColonies quest/reward tie (photographs as quest reward items or colony archive flavor) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: No motif covers a photograph-as-quest-reward path; the "no-motif" rule applies. Surface for Gate-0 review only if the maintainer wants to pursue it.
OK — Create (sequenced_assembly film development) + survival anchors are well-grounded and proportionate to the mod's hobbyist scope.

## ldlib2   [anchors: support/library (1)]
LEAVE — genuine zero-content developer library (UI/rendering/sync infrastructure); no items, no loot, no gameplay mechanics of its own. A required dependency for dependent mods only; nothing to route.

## titanium   [anchors: support/library (1)]
LEAVE — developer code library for HRZNStudio mods; the few blocks registered (titanium:diamond, titanium:iron, etc.) are dev/test stubs with no gameplay recipes and the `titanium:test_serializer` recipe type is a dev artifact, not a player-facing method. Nothing coherent to weave.

## death-count-1.0   [anchors: support/QoL (1)]
LEAVE — pure scoreboard datapack (tab-list death tally); no items, no loot tables, no world mechanics. A social cosmetic with zero content surface; forcing a weave would be a defect.

## xaeroworldmap   [anchors: support/navigation (1)]
LEAVE — client-side map UI with no items, no blocks, no loot, no server-side mechanics. Genuine zero-content navigation overlay; nothing to route through any method.

## entity_model_features   [anchors: support/client-rendering (1)]
LEAVE — client rendering engine for OptiFine-format custom entity models; no items, no blocks, no loot, no gameplay content. Pure resourcepack infrastructure; nothing to weave.

== CHUNK COMPLETE ==
