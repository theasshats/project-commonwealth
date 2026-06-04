# Phase 2 candidates — chunk-24

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork molten metals (processed scarce regional ore) | via: recipe (numismatics mint) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: refined molten metal poured into coin blanks — the foundry is the mint
- from: createmetalwork crushed magic-mod ores (e.g. occultism/galosphere metals via c:crushed_raw_materials/*) | via: create:crushing → create:mixing | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: the same crushed-ore doubling that serves steel serves silver and palladium — one pipeline, two webs
- from: createmetalwork molten steel / molten brass | via: create:compacting → aeronautics structural part recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: molten-cast structural blanks are the raw stock for hull plates — the foundry feeds the shipyard
- from: createmetalwork molten metals as aeronautics hull feedstock | via: recipe (create:compacting cast blank → aeronautics build) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 should use a fabricated structural part (e.g. create_ironworks steel plate) not a fluid bucket directly — route molten → plate first (M-03 step), then plate into hull (M-23); the direct bucket→hull step is awkward ergonomically and slightly forced. The two-step path (molten → plate → hull) is the right form but that's already implied by M-08/M-03 + M-23 chaining; no need for a separate molten→hull edge.
- REWORK: existing anchor is Create only (1 pillar). The dossier notes M-08 and M-03 as strong candidates but they are not yet authored — no rework of existing connections needed, but the single-pillar state is the gap to close.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts brass/copper window and step blocks | via: recipe (require create:brass_sheet / create:copper_sheet as crafting ingredients) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the same pressed sheets that go into every Create machine are exactly what you'd panel a train window or step with — the workshop supplies the railcar
- from: create_train_parts train steps/slides | via: create:crushing (lossy recycle, M-04 pattern) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: these are construction blocks; recycling them back via crusher adds friction for negligible value. The forward recipe-ingredient step (pressed sheets as inputs) is enough and cleaner. Crush-recycle is for deco surplus, not purposeful fittings.
- from: create_train_parts blocks (loot=yes) | via: loot-seed | to: Create/economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: loot=yes is flagged in the jar digest but the items are crafted train fittings, not chest loot — likely just block drops. No structure loot-table to seed into.
- REWORK: aeronautics-only anchor is fine for a train-detail mod; the M-04-style recipe-ingredient link (pressed sheets as inputs) would give a lightweight Create 2nd pillar. The dossier called this WEAK but it is the coherent form — it is not forced.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, no loot tables, no recipe types; pure animation/entity API for dependent mods. Nothing to route.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable novelty item (no mechanics, no loot, no recipe types). Any forced recipe edge would be noise. Sanctioned gag item; no weave surface.

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream maid food-variety progression | via: config tie — the milestone thresholds (max-health/armour/attack) are configurable; tying milestone rewards to the survival pillar's food ecosystem (rare/processed foods unlock higher tiers) | to: survival (deeper) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is purely a config tuning, not a weave — it doesn't add a cross-pillar material link. The mechanic already lives fully within survival; there is no second pillar to add via config alone.
- from: solmaiddream companion maid (via touhou_little_maid dep) with high favorability | via: no coherent mechanic route to economy/Create/magic | motif: no-motif | verdict: REJECT | reason: no-motif; the companion mechanic has no item output that routes anywhere. Favorability is internal to the maid system.
- LEAVE — tiny flavour addon (0 blocks, 1 item = food_book inspection tool, no loot, no recipe types). Rides entirely on the survival food pool already in the pack; no coherent second pillar without inventing something arbitrary.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending (Bulk Ending fan method, uses dragon breath fluid) | via: create_dragons_plus:ending | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: End-infused fan processing transmutes foreign materials with draconic essence — a native Create→magic bridge using the Ending catalyst, turning Ender-touched items into magic reagent intermediates
- from: create_dragons_plus:freezing (Bulk Freezing fan method, powder snow catalyst) | via: create_dragons_plus:freezing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: powder-snow bulk-freeze is a seasonal resource gate — winter-locked processing ties Create fan stations to Serene Seasons survival scarcity
- from: create_dragons_plus dragon_breath fluid | via: create_dragons_plus:ending → occultism ritual ingredient | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: dragon breath is already the catalyst *for* the ending method (internal mechanic); routing it as an occultism ritual input is a plausible idea but conflicts with it being reserved as the ending-method catalyst — double-role on the same item is confusing. Better to route the *output* of an ending recipe into magic, not the catalyst itself.
- from: create_dragons_plus dye fluids (bulk dyeing) | via: create_dragons_plus bulk dyeing → textile/deco recipes | to: survival (deco) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: bulk dye processing is already a Create-side utility (dyes are survival/deco basics); routing it to a second pillar adds no meaningful connection — the value is in the ending/freezing methods, not the dye ones.
- REWORK: no existing cross-pillar connections to rework. Single-pillar Create anchor; the ending→magic and freezing→survival links above are the priority adds.

## architectury   [anchors: support (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, no loot, no recipe types; pure cross-loader API. Nothing to route.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — genuine zero-content compat shim: 0 blocks, 0 items, no loot, no recipe types; pure API translation layer. Nothing to route.

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — genuine zero-surface decoration mod: 0 blocks, 0 items, no loot tables, no recipe types; adds painting variants via GUI but registers no material items. Nothing to route without forcing an arbitrary edge.

## packetfixer   [anchors: support (1)]
- LEAVE — genuine zero-content infrastructure mod: 0 blocks, 0 items, no loot, no recipe types; pure network packet-limit fix. Nothing to route.

== CHUNK COMPLETE ==

