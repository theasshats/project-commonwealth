# Phase 2 candidates — chunk-29

## bcc   [anchors: support (1)]
- LEAVE — pure server/client version-handshake utility; zero items, zero methods, no gameplay surface.

## lootr   [anchors: support (1)]
- LEAVE — per-player loot instancing; the containers are invisible reskins of vanilla loot tables. No materials, no recipe surface. The only theoretical hook (loot-table injection) belongs to KubeJS/LootJS, not lootr itself. Nothing coherent to weave.

## accessories   [anchors: support (1)]
- LEAVE — slot API/library only; no items, no blocks, no recipe methods. The wearable items that could be woven live in the dependent mods, not here.

## kambrik   [anchors: support (1)]
- LEAVE — Kotlin code library (registration helpers, DSLs, networking); no items, no blocks, zero gameplay surface.

## moonlight   [anchors: support (1)]
- LEAVE — shared library for MehVahdJukaar's mods; the only registered items (spawn_box, placeable_item) are internal helper objects, not player-facing materials. No weave surface.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — GUI/block/packet scaffolding library; zero items, zero recipe methods, no gameplay content.

## bigsignwriter   [anchors: support (1)]
- LEAVE — client-side UI utility that expands sign text input; no items, no methods, purely a decoration-ergonomics tool. Nothing coherent to route through any pillar.

## inventoryprofilesnext   [anchors: client-only QoL (1)]
- LEAVE — pure client-side inventory ergonomics (sort, dump, lock-slots); no items, no server-side methods, no recipe surface. Zero coherent weave path.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood | via: occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's blood-crystals are a spirit-state material — of course Occultism's rituals drink from that same soul well
- from: companions:crystallized_blood | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: a soul-crystallized reagent attuned through Ars apparatus is a natural step up the arcane ladder
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: numismatics (sell/price) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Pontiff's relic gold is singular loot — selling it to traders is exactly how you convert combat prestige into coin
- from: companions:relic_gold | via: boss-key gate on a Create sequenced-assembly chain | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: relic gold from a divine-adjacent boss unlocking a high-end Create component fits the "boss opens the tech door" design principle
- from: companions:crystallized_blood | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: haunting runs on soul fire; feeding Crystallized Blood through it ties the soul-furnace loop into the Create spine at a light, thematically sensible step
- from: companions:copper_coin / nether_coin / end_coin | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bridging the Companions coins into Numismatics as collectible trade goods defuses the two-currency tension without deleting the in-mod flavor
- from: companions:voltaic_pillar_block / tesla_coil_block | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the electrical infrastructure is the companions progression backbone, not surplus deco; crushing it back to scrap creates a teardown incentive against building the Tesla network — a design defect. Dossier itself flags this as WEAK.
- from: companions:soul_gem | via: occultism:spirit_trade | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism spirits trade in soul-adjacent materials; a soul gem is a credible spirit-trade commodity that opens a magic-logistics lane from companion content
- REWORK: companions currently has no cross-pillar connections at all — the internal coin economy (copper/nether/end_coin) actively competes with Numismatics without a bridge; the accepted M-09 entry above (coin bridging) addresses this, but the absence of a link is a design gap worth flagging for the 0.9 economy update review.








