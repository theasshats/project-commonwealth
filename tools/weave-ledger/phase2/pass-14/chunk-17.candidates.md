# Phase 2 candidates — chunk-17

## createoreexcavation   [anchors: Create (1)]
- from: ore-vein table (config/datapack) | via: config tie | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the drilling machine is the only way to sustain scarce regional metals late-game; those metals feed the numismatics mint — specializing in a vein is a coin-income strategy
- from: drill-head tier (drill / diamond_drill / netherite_drill) | via: recipe — create:mechanical_crafting | to: Create (depth) | motif: M-06 | power: mid–endgame | tone: ok | verdict: REJECT | reason: drill-heads are already assembled via Create mechanical_crafting (inbound weave listed in dossier); adding sequenced_assembly gating on top would double-gate without adding thematic value — no clear 2nd pillar gain here
- from: loot=yes (the mod has a loot table) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: loot=yes is flagged but the dossier lists no structure/dungeon; likely just drop tables for the drill mob etc.; seeding coins into drill-machine drops isn't thematically coherent — the vein-table config tie (above) is the correct delivery, not a loot-seed
- REWORK: none — existing single Create anchor is coherent; the economy lever via vein-table config is the proposed 2nd pillar, not an authored recipe, so no existing arbitrary connections to flag.

## galosphere   [anchors: survival (1); effective 2nd pillar = magic via M-07]
- from: galosphere:silver_ingot (= palladium) | via: recipe — create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore → crushed palladium (ore-doubling with Create); the scarce regional metal earns a bonus ingot through automation — exactly the Create spine payoff
- from: galosphere:silver_ingot (= palladium) — processed → minted | via: recipe — numismatics vendor price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a scarce regional metal; Create-refined palladium ingot → coin in a vendor shop makes cave-diving + drilling a real income path (the emergent economy)
- from: galosphere deco bricks (allurite_bricks, amethyst_bricks, pink_salt blocks, etc.) | via: recipe — create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco stonework crushes back to raw/gravel — standard Create recycling for the builder economy; lossy so no arbitrage
- from: galosphere:allurite_shard / lumiere_shard | via: existing reserved M-07 attunement catalyst role | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT (existing connection — confirm and preserve) | hook: the shards already gate magic conversions; this is galosphere's real 2nd pillar — don't let future updates accidentally strip this
- REWORK: none — the M-07 attunement catalyst role is the cleanest possible 2nd-pillar seam; the new M-03/M-04/M-08 candidates add Create and economy without crowding the reserved reagent.

## createfurnitureseats   [anchors: support/compat + aeronautics]
- LEAVE — genuine zero-content behavior mod: 0 blocks, 0 items, no loot tables, no recipe types. Its sole function is registering foreign furniture as Create/Aeronautics seats. No material to route, no loot-seed surface, no delivery mechanism coherent.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / finished ammo (bulk-produced) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create base that automates the ammo pipeline becomes an arms dealer — setting a vendor price on twelve_gauge_shell and finished rounds makes ammo a real trade good and the factory a coin source
- from: createimmersivetacz:gun_barrel / firing_mechanism | via: recipe — create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid–endgame | tone: ok | verdict: REJECT | reason: the dossier already confirms the mod authors sequenced_assembly recipes for these parts (listed under made-by methods); flagging this as a new link is redundant — the 2nd-pillar move is the economy side, not further Create depth
- from: nitropowder_bucket (high-energy fluid) | via: createaddition:liquid_burning | to: Create (energy) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is reserved for Aeronautics propulsion fuel; nitropowder-as-engine-fuel is thematically plausible but tonally off (ammo propellant ≠ vehicle fuel) and would deplete combat supply — forces a supply-chain tradeoff that a small crew (10 players) would find punishing rather than interesting; reject on balance grounds
- REWORK: none — single Create anchor is clean; economy (M-09) is the proposed 2nd pillar.

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies (processed strains) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a strain farm producing luxury edibles sells them via a vendor — the "dealer" fantasy is already in the mod's own villager trades; numismatics makes it pack-wide coin income; luxury-good → coin is the exact M-09 pattern
- from: smokeleafindustries FE output (generator) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the hemp generator produces RF; wiring it to a Create Addition charging station makes the strain farm a power source for Create electric tools — two tech layers cross without retheming either
- from: raw hemp buds / dry herb | via: recipe — create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: smokeleafindustries has its own grinder chain that already covers this processing step; routing raw buds through create:milling duplicates the native method with no added player value and muddies the processing loop; the FE bridge (above) is the cleaner Create seam
- from: smokeleafindustries extract/oil (liquifier output) | via: smokeleafindustries:synthesizer | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: there is no plausible magic use for cannabis extract in Ars Nouveau / Occultism lore; "herb → arcane reagent" is thematically a stretch and no motif covers it cleanly — no-motif reject
- REWORK: none — mod has no existing cross-pillar connections; M-09 economy + M-17 Create FE bridge are the two proposed pillars.

## ldlib2   [anchors: support (library/API) (1)]
- LEAVE — confirmed zero-content library. The two registered blocks (ldlib2:renderer_model, ldlib2:test_2) are developer/test entries per the dossier; no loot tables, no player-facing items, no processing surface. Nothing to weave.

## mru   [anchors: support (library/API) (1)]
- LEAVE — confirmed zero-content library. 0 blocks, 0 items, no loot tables, no registered recipe types. Shared utility code only; no weave surface.

## betteranimationscollection   [anchors: support (client/visual) (1)]
- LEAVE — confirmed zero-content client visual mod. 0 blocks, 0 items, no loot tables, animation-model replacements only. No delivery mechanism exists.

## numismatics   [anchors: economy, Create (2)]
- (already ≥2 pillars — hub mod; weaving direction is inbound, not outbound)
- from: numismatics:vendor / depositor blocks | via: recipe — create:mechanical_crafting / create:pressing | to: Create (depth for economy machines) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: numismatics blocks are already Create-styled and made via vanilla crafting with Create materials; gating them behind mechanical_crafting would increase friction on the economy backbone without gameplay reward — the economy hub should be accessible, not deeply gated; balance reject
- OK — connections sound. Economy + Create anchors are both clean and deliberate. The mod is the inbound destination for M-08/M-09; no outbound edges needed. No REWORK items.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window / train_step_brass / train_slide_brass | via: recipe — create:pressing (brass sheets as input) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: train fittings assembled from Create-pressed brass sheets makes the train-detailing tier feel like it belongs in the same factory as the train itself — one light crafting step, not deep gating
- from: create_train_parts:crossing | via: recipe — create:mechanical_crafting | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the crossing is a track-logic block; gating it behind mechanical_crafting (a heavier step) for a purely functional infrastructure block violates the "don't gate basics behind complex recipes" rule — pressed brass for decorative fittings is fine; the track crossing should stay accessible; balance reject
- REWORK: none — aeronautics anchor is correct; M-20 pressed-brass fittings is the proposed Create 2nd pillar.

== CHUNK COMPLETE ==
