# Phase 2 candidates — chunk-04 (pass-22, blind)

## owo   [anchors: support (library) (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, 0 recipe-types; owo-ui/owo-config framework). No content surface to weave.

## create_cheese   [anchors: Create, survival (2)]
- from: aged cheese (cheddar/brie/gouda/etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel that took real maturing time is the classic luxury trade good — sell it for coin.
- from: foreign perishable (other mods' raw foods) | via: create_cheese:maturing (tag-driven cellar outputs) | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cellar's tag-extensible "age-an-item" station can mature a foreign food into a better good — a generic processing-chain pull.
- REWORK: none — existing Create+survival anchors are sound (whole dairy chain runs through create:mixing/compacting/maturing). OK — connections sound.

## necronomicon   [anchors: support (library) (1)]
- LEAVE — genuine zero-content code library (Necronomicon API; 0 blocks, 0 items, no recipe-types; only dependent is opacpvp). Nothing to weave.

## occultism   [anchors: magic (1)]
- from: foreign mob/boss drops | via: occultism:spirit_fire / occultism:ritual | to: magic (organic→magic) | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burn an isolated mob drop in spirit-fire to mint an occult essence — the canonical transmutation sink.
- from: scarce regional ore | via: occultism:crushing | to: Create (parallel ore-doubling) | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: a second ore-doubling path that rewards the magic route, vanilla smelt stays.
- from: otherworld goods / coin | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: a summoned trader spirit acquires scarce otherworld materials — magic as a logistics/acquisition arm feeding trade.
- from: occultism:dimensional_mineshaft (djinni miner) | via: occultism:miner | to: Create/economy (scarce-ore acquisition) | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: bound spirits passively mine a void dim — summoned-spirit logistics for scarce ore.
- REWORK: anchor currently lists only magic(1), but occultism legitimately also touches Create (create dep, crushing). The above ACCEPTs give it a sound 2nd anchor (economy via spirit_trade) and a 3rd (Create). OK once those land.

## deeperdarker   [anchors: survival (1)]
- from: soul_dust / soul_crystal / heart_of_the_deep | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 (or M-02) | power: mid | tone: ok | verdict: ACCEPT | hook: pure "soul" reagents from the Otherside transmute into occult essences / imbue a source reagent — the dark dimension feeds the magic web.
- from: heart_of_the_deep (rare Warden drop) | via: gated machine recipe (boss drop as input) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's Heart is a natural boss-key gate item for a high-tier tech recipe.
- from: gloomslate / sculk_stone deco | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the stone block sets crush back to gravel + xp nugget; lossy recycle into the spine (already partly wired).
- from: Otherside-only soul materials | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: secondary to the magic routing — same reagents already spoken for by M-11; selling them raw competes with the stronger transmutation sink. Surface for review, don't double-route.

## craftingtweaks   [anchors: support (QoL) (1)]
- LEAVE — genuine zero-content QoL library (0 blocks/items/recipes; crafting-grid buttons only). Nothing to weave.

## foodeffecttooltips   [anchors: support (client/QoL) (1)]
- LEAVE — genuine zero-content client tooltip mod (0 blocks/items; reads existing food/effect data, adds nothing). Nothing to weave.

## northstar   [anchors: Create, aeronautics (2)]
- from: Create-processed titanium / tungsten | via: create:* → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: scarce off-world metals, once fabricated, mint into coin — a regional high-tier coin source.
- from: foreign fluids/ingots | via: northstar:electrolysis / northstar:freezing | to: Create/survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the electrolysis/freezing machines accept foreign fluids as new join keys, pulling other mods' liquids into the space-tech chain.
- from: northstar:advanced_circuit / titanium plate | via: aeronautics control/airframe recipe | to: aeronautics | motif: M-23/M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium airframe plate and advanced circuits are exactly the fabricated structural/control parts high-tier Aeronautics ships should require.
- from: astronomical_reading / advanced_circuit | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: astronomical_reading is a niche progression token, weak as a luxury good; advanced_circuit is already better routed as an aeronautics/intermediate part — selling raw competes with M-08 mint. Surface for review.
- REWORK: existing Create+aeronautics anchors sound (deep inbound Create web; rockets ARE the off-world logistics tier). OK — connections sound.

## ritchiesprojectilelib   [anchors: support (1)]
- LEAVE — genuine zero-content code library (projectile/ballistics API behind Create Big Cannons; 0 blocks/items/recipes). Nothing to weave.

## securitycraft   [anchors: support (1)]
- from: scarce/traded metals | via: securitycraft:block_reinforcing_recipe + crafting (high-tier scanners/reinforcing) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a PvPvE crew's base-defense gear is a real demand sink — gate the strong reinforcing/scanners behind scarce traded metal so defense feeds trade.
- from: sentry / reinforcing components | via: create:mechanical_crafting (gate parts on Create-made components) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the high-tier defenses are built in their own gear but gated on Create parts — ties anti-grief to the tech spine (apt for the co-op server).
- REWORK: anchor is support(1); the two ACCEPTs give it a genuine economy + Create weave (well-suited to the PvPvE audience). Don't gate the basic keypad/reinforced cobblestone — only the high-tier devices.

## entity_model_features   [anchors: support (client rendering) (1)]
- LEAVE — genuine zero-content client rendering engine (CEM model overrides; 0 blocks/items). Nothing to weave.

## letmefeedyou   [anchors: support (QoL) (1)]
- LEAVE — genuine zero-content behavior-only QoL (player-to-player feeding; registers no items). Nothing to weave.

## blockui   [anchors: support (library / UI API) (1)]
- LEAVE — genuine zero-content UI library (XML GUI framework under MineColonies/Structurize; 0 blocks/items). Nothing to weave.

## cubes_without_borders   [anchors: support (client QoL) (1)]
- LEAVE — genuine zero-content client display feature (borderless fullscreen; 0 content, irrelevant on server). Nothing to weave.

## accelerateddecay   [anchors: support (perf) (1)]
- LEAVE — genuine zero-content performance patch (leaf-decay behavior only; 0 blocks/items). Nothing to weave.

## cristellib   [anchors: support (library) (1)]
- LEAVE — genuine zero-content worldgen-config library (structure config framework; 0 blocks/items). Nothing to weave.

## staaaaaaaaaaaack   [anchors: support (QoL / perf) (1)]
- LEAVE — genuine zero-content entity-merge perf utility (operates on dropped-item entities generically; 0 content, no recipe I/O). Nothing to weave.

## naturalist   [anchors: survival (1)]
- from: raw venison / bushmeat | via: farmersdelight:cooking / create:cutting | to: survival/Create (food chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: hunted meat feeds the cooking/processing chain into proper meals — pulls fauna into the food web (and the diet system's protein demand).
- from: cooked venison / bushmeat | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a butcher's renewable meat is a sellable food good — light coin source, sized to an everyday item.
- from: antler | via: occultism:spirit_fire / ars imbuement (as a bone/keratin reagent) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: no native consumer wants antler specifically; forcing a "why is antler magic?" edge is arbitrary. Surface for review only if a magic mod later claims a keratin/bone reagent slot.
- from: shellstone / froglass deco | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: weak/arbitrary — these are vanilla-style deco with no distinctive material; lossy-recycling generic deco adds noise, not a meaningful web edge. Surface for review.
- REWORK: anchor survival(1); the two ACCEPTs (M-12 food chain + M-09 sell) give a sound 2nd anchor (economy) and tie fauna to the diet pressure lever. Don't over-rewire the ambient drops.

## steves_lava_chicken_music_disc   [anchors: support (curated flavor) (1)]
- LEAVE — single joke music disc (1 item, behaves as a vanilla disc); curated flavor. Forcing a coin/recipe edge would be noise per the deliberately-flavor guardrail.

## createfurnitureseats   [anchors: support (compat) + aeronautics (2)]
- LEAVE — content-free compat glue (0 blocks/items; tags foreign furniture as Create/Sable seats). Already touches aeronautics via its core behavior; no item to route, an economy/magic edge would be meaningless.
- REWORK: existing aeronautics lean is sound (sittable furniture on ships is a genuine Aeronautics extension). OK — connections sound.

== CHUNK COMPLETE ==
