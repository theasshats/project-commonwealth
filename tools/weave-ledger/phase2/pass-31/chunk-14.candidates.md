# Phase 2 candidates — chunk-14

## touhou_little_maid   [anchors: survival (1)]

- from: boss/mob drop (e.g. `ars_nouveau:wilden_spike` or Cataclysm drop) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar is already a ritual-summoning multiblock; gating a maid variant or a maid-core upgrade behind a magic reagent drop reads naturally as "summon a stronger servant with an arcane offering"
- from: `endrem:*_eye` themed drops (undead/nether/corrupted) | via: touhou_little_maid:altar_recipe_serializers | to: survival (progression) | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: End-eye drops are reserved as portal-key reagents (endrem); spending them in the maid altar competes with that gate and confuses players about which system they're feeding — do not double-route endrem eyes
- from: power-point bottles (fairy mob drops) | via: emergent trade | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: Power-point bottles are a simple maid-feeding consumable with no scarcity or regional lock; bare "sell this" is ambient endpoint, not demand-gating (M-09 retired). A combat-supply weave requires the material to be *farmed by specialists and traded* — the bottles are too cheap/common for that demand signal to emerge. No motif survives.
- REWORK: existing "economy via numismatics sell — power-point bottles" candidate in dossier — references M-09 which is retired; correct framing would need M-34 (combat-supply) and the bottles don't qualify (too common). Flag for drop.
- OK — the magic (M-05 Altar-method gating) direction is sound; 1 ACCEPT.

## beachparty   [anchors: survival (1)]

- from: `beachparty:coconut_open` / tropical fruit (coconut, melon slice) | via: `create:milling` or `extradelight:juicer` | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut flesh → coconut cream / shredded coconut via Create milling is a natural mid-chain ingredient for confectionery/ice-cream recipes (feeds createfood chains); players find a beach crop useful beyond just the raw fruit
- from: `beachparty:palm_bar_mixing` (cocktail method) | via: `beachparty:palm_bar_mixing` | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: cocktails grant stat buffs that are consumed on use — a consumption sink that never zeroes demand; a beachside bar operator specializes in mixing and selling to players who want the buffs; this is demand-gating (consumed = repeating demand), not bare sell
- from: `beachparty:mini_fridge_freezing` (ice output) | via: Create mixing (ice as coolant input) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Mini fridge produces generic ice/packed-ice; Create doesn't meaningfully need a beachparty-specific ice source — vanilla ice is trivially available via fridge mechanics or other mods. No scarcity driver; the link is generic, not load-bearing.
- from: `beachparty:coconut` palm wood | via: `create:cutting` | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: palm_planks/logs are a generic wood species; Create cutting of planks is available for every wood type — this does not *distinguish* beachparty or force any trade. Generic deco-wood recycling is a diluted M-04; it adds no loop pressure. Reject.
- REWORK: dossier 2nd-anchor candidate references M-09 (retired) for "cocktails sellable"; reframe as M-26 (consumption sink) — the ACCEPT above covers this.
- OK — 2 ACCEPTs.

## tipsmod   [anchors: support/QoL (1)]

- LEAVE — zero-surface client UI library (no items, no blocks, no loot, no recipe types). No coherent pillar weave possible; rides the pack purely as onboarding tooling.

## miningspeedtooltips   [anchors: support/client-UI (1)]

- LEAVE — tooltip-display tweak, no items/blocks/loot, nothing to route through any method. Pure QoL; no weave surface.

## geckolib   [anchors: support/library (1)]

- LEAVE — animation/rendering API, 0 items, 0 blocks, no recipe types, no loot. A genuine zero-content code library; weave not applicable.

## createfood   [anchors: survival, Create (2)]

- from: `createfood:*_milkshake` / `createfood:*_ice_cream` (creamy finished goods) | via: `beachparty:palm_bar_mixing` or `beachparty:mini_fridge_freezing` | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: beachparty's Mini Fridge already freezes liquids → the cross-route is "createfood ice-cream base requires a fridge-frozen step at the Palm Bar tier", making the two food mods interdependent instead of parallel. Dishes one can't solo.
- from: createfood finished dishes (pizza, cake, milkshake) | via: emergent trade | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: food is consumed on eating — permanent repeating demand that never zeroes; a baker/cook specialist produces dishes that non-food-specialist players *must* buy repeatedly. Consumption is the demand-renewal arrow, gates the economy without being a bare sell.
- from: createfood seasonal ingredient demand | via: Serene Seasons gated crop inputs | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: createfood's massive c:foods/* tag coverage means season-specific crops (berries in summer, squash in autumn per Serene Seasons) are the only source of certain dish variants → seasonal shortages propagate into the baking supply chain. Feeds the loop's pressure node.
- from: createfood dishes as colony ration supply | via: MineColonies request system | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists request food for health/morale; wiring advanced createfood dishes as premium rations (faster colonist healing) gives a colony route demand signal beyond vanilla bread, integrating the baker specialist into colony growth.
- REWORK: dossier 2nd-anchor candidate cites M-09 (retired) for "economy via numismatics sell." M-26 (consumption) and M-28 (colony) are the correct reframing — covered by ACCEPTs above. Flag the M-09 cite for removal.
- OK — 4 ACCEPTs (strong pillar mod).

## modulargolems   [anchors: Create (1)]

- from: Cataclysm / Ice&Fire boss-drop metals (dragonsteel, cursium) | via: `modulargolems:golem_assemble` | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies are already gated on boss-tier metals; explicitly flagging this as a boss-key gate (M-15) for the most powerful constructs is thematically exactly right — you fight the boss to earn your automaton army
- from: `ars_nouveau:source_gem` or Occultism otherstone as a golem-core upgrade component | via: `modulargolems:golem_assemble` | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: routing a magic reagent into a golem-core upgrade creates a cross-route dependency — the golemancer needs a magic specialist's output to finish their construct, forcing trade. The pairing is thematically coherent (arcane animation of a construct is classic golemancy).
- from: golem combat labor (golems fight so players don't have to) | via: emergent service | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: REJECT | reason: M-33 (service-for-hire) requires a player *performing work* on another's materials — a golem autonomously fighting doesn't fit; the labor is automated, not a specialist service transaction. No valid M-33 edge. Reject.
- REWORK: dossier labels anchor as Create (1) — the boss-metal gating (M-15) and magic cross-route (M-29) both add survival and magic as 2nd/3rd anchors. Once the two ACCEPTs land it becomes Create + survival + magic (3).
- OK — 2 ACCEPTs.

## clumps   [anchors: support/performance (1)]

- LEAVE — XP-orb merging behavior, 0 items, 0 blocks, no recipe types, no loot. A genuine performance-support mod; no weave surface.

## createbigcannons   [anchors: Create, aeronautics (2)]

- from: `createbigcannons:*_shell` / munitions | via: emergent combat trade | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: a munitions-smith specializes in cannon shell production (the Create foundry chain is non-trivial); non-combat players buy shells from them. Combat-route supply is exactly M-34 — boss/danger outputs farmed by specialists and traded to others. Shells are consumed on firing, closing the demand loop.
- from: `createbigcannons:steel_ingot` / `c:ingots/steel` (regional metal) | via: `create:*` → `numismatics` mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel is a processed regional scarcity metal; a foundry player presses it into coin, making steel the pack's hard-industrial currency metal. CBS already defines `c:ingots/steel` — this is exactly the M-08 player-mint pattern.
- from: `createbigcannons:cast_iron_ingot` / cannon parts as MineColonies-requestable components | via: MineColonies request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's Guard Tower or Barracks could request cast-iron or bronze cannon fittings (defense upgrade) — demand flows through the colony route, not just player-to-player combat trade. Thematically: build an industrial fortification.
- REWORK: dossier notes M-09 for "economy via numismatics sell" — M-09 is retired. M-34 (shell supply trade) and M-08 (steel coin) are the correct framings, covered above.
- OK — 3 ACCEPTs.

## structurize   [anchors: support/library (1)]

- LEAVE — MineColonies build engine, 0 recipe types, no loot (loot=no). Its weave surface is MineColonies'; it has no independent item/method surface.

## endrem   [anchors: survival (1)]

- from: `endrem:corrupted_eye` (corrupted/undead-themed) | via: `occultism:ritual` | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: an Occultism ritual transmutes a matching corrupted-magic drop (wither skull / shulker shell) into a corrupted_eye, giving a stuck player a craft path that doesn't trivialize exploration (the ritual still costs rare occult mats)
- from: `endrem:nether_eye` | via: `ars_nouveau:enchanting_apparatus` infusion | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: nether-themed eye infused from a Ars Nouveau nether-aligned reagent (blaze rod + source gems in apparatus); the infusion cost is high enough to stay non-trivial and fits the arcane refinement theme
- from: `endrem:*_eye` (one or two rarest) | via: `create:sequenced_assembly` with a `derpack:incomplete_*` part | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the endrem dossier itself flags the sequenced-assembly route as WEAK (caution: don't trivialize the exploration intent). The whole design of endrem is *exploration-gated* portal access — routing any eye through a Create machine cuts against that intentional design, even if costly. The magic ritual (M-11) is a safer safety-valve. Reject.
- OK — 2 ACCEPTs.

## kubejs_create   [anchors: support/tooling (1)]

- LEAVE — scripting bridge mod, 0 items, 0 blocks, 0 loot. A genuine tooling library; the weaves it enables belong to the mods it connects, not to kubejs_create itself.

## ribbits   [anchors: survival (1)]

- from: Ribbit swamp-goods trade (Amethyst Shard economy) | via: Numismatics trade bridge (KubeJS) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ribbits already run an Amethyst Shard barter economy; bridging shard→coin (a player mints coin from regionally-gathered amethyst that Ribbits will also accept) plugs the swamp settlement into the pack's player-run currency — a regional economy node, not a bare sell
- from: `ribbits:toadstool` / `ribbits:mossy_oak_planks` | via: `create:cutting` | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: toadstool/mossy-oak are yet another generic wood/fungal deco tier; create:cutting on generic wood is not a distinguishing weave and adds no loop pressure. M-04 is meant for mods where the recycling creates a meaningful circuit — here it's too generic. Reject.
- from: Ribbit sorcerer buff service | via: emergent player service | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the sorcerer is an NPC granting buffs (not a player performing service on another player's materials); M-33 requires player-to-player labor, not NPC services. Reject.
- OK — 1 ACCEPT.

## jamlib   [anchors: library/API (1)]

- LEAVE — cross-platform library/config API, 0 items, 0 blocks, no loot, no recipe types. Genuine zero-surface code library.

## architectury   [anchors: support/library (1)]

- LEAVE — cross-platform modding API, 0 items, 0 blocks, no loot, no recipe types. Genuine zero-surface library.

## createadditionallogistics   [anchors: Create, aeronautics (2)]

- from: flexible shafts (omnidirectional kinetic routing) as bulk-logistics ship infrastructure | via: Aeronautics contraption build | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: createadditionallogistics' flexible shafts are kinetic routing QoL, not a structural/hull material (M-23 is for load-bearing alloy → airframe). The mod's seats are already the aeronautics link (Stock Keeper seating). Forcing the shafts into an airframe role stretches M-23 beyond its definition. Reject.
- OK — 0 ACCEPT, already ≥2 anchors; connections sound.
- REWORK: dossier says "no new edge needed — leave" — this is correct; connections are sound.

## create_jetpack   [anchors: Create, aeronautics (2)]

- from: `create_jetpack:netherite_jetpack` upgrade | via: `create:sequenced_assembly` netherite assembly | to: survival | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite jetpack upgrade (lava-flight + fire immunity) is endgame personal mobility; gating it behind a sequenced-assembly chain with a `derpack:incomplete_netherite_jetpack` part adds a meaningful multi-step Create requirement to this flagship item, consistent with M-06 depth scaling for endgame gear
- from: `create_jetpack:jetpack` fueled by backtank air | via: aeronautics/colony supply chain | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: jetpack air-fuel is just the Create backtank mechanic — the colony doesn't request personal flight gear as a baseline supply demand. No coherent MineColonies hut/research hook for jetpacks. Reject.
- OK — 1 ACCEPT.

## towntalk   [anchors: support/flavor (1)]

- LEAVE — audio-only MineColonies flavor mod, 0 items, 0 blocks, no loot, no recipe types. No weave surface independent of MineColonies.

## exposure   [anchors: Create, survival (2)]

- from: `exposure:aged_photograph` (aged via `exposure:photograph_aging`) | via: Numismatics trade / player-to-player economy | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: M-35 (maturation/aging) is already listed with `exposure:photograph_aging` as one of its canonical methods — an aged photograph is a *time-invested artifact* whose value comes from waiting; a photographer specialist ages prints and sells them as scarce collectibles/map-art. This is value-adding time axis, not bare sell — the aging process creates a specialist role.
- from: `exposure:black_and_white_film` / color film (chemical process) | via: `create:mixing` (silver halide emulsion) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: film stock needs a chemical emulsion (silver compound + sensitizer); routing film stock production through Create mixing (silver dust + chemical solvent → exposed film base) adds a mid-chain Create step and links the photography niche to the metallurgy/Create spine. Silver is `occultism`'s silver (reagent-ownership check: galosphere silver is palladium — use occultism silver dust, not galosphere)
- from: `exposure:photograph_copying` | via: player service | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: photograph copying is a darkroom utility; a player could charge for copies, but there's no emergent demand signal (photographs are curiosities, not needed for production). M-33 requires a specialist performing work other players *depend on* — photo copies don't gate any downstream need. Reject.
- REWORK: dossier 2nd-anchor candidate cites M-09 for "printed photographs as sellable mementos" — M-09 is retired. M-35 (maturation/aging) is the correct reframing (already in the ledger for exposure); covered by ACCEPT above.
- OK — 2 ACCEPTs; exposure gains economy as a third anchor via M-35 + M-12 deepens Create link.

## create_mobile_packages   [anchors: Create, aeronautics (2)]

- from: player-to-player package delivery (addressed packages via Robo Bees) | via: logistics network | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: M-31 (logistics-required bulk good) — the Robo Bee courier network is precisely the aeronautics arm's distribution role; trading at scale across bases *requires* this physical movement layer. The mod is the mechanism that makes economy "moves matter at a distance" rather than teleport-drop. Gains economy as a third anchor.
- from: `create_mobile_packages:robo_bee` assembly | via: `create:sequenced_assembly` | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the mod already has Create as an anchor and the robo_bee is a mid-tier logistics item, not an endgame flagship. M-06 (sequenced-assembly keystone) is reserved for endgame/flagship items (per the depth-scaling rule). A light crafting recipe is more appropriate for a logistics drone; M-06 would over-engineer it. Reject.
- OK — 1 ACCEPT.

== CHUNK COMPLETE ==
