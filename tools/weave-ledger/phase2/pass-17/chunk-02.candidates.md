# Phase 2 candidates — chunk-02

## aeronauticscompat   [anchors: aeronautics (1)]
LEAVE — pure runtime compat patcher; zero items/blocks/loot; no material surface to weave. Its role is to make aeronautics function at all — it is infrastructure, not a material node. Any weave belongs on the mods it patches (Etched, Cobblemon, etc.), not here.

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — client-side HUD overlay only (light-level X, chunk grid, JEI dimming); zero items/blocks/loot; no material surface. Genuine zero-content utility; nothing to route through any method.

## createshufflefilter   [anchors: create (1)]
- from: shuffle_filter / weighted_shuffle_filter | via: recipe (crafting) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) requires the item to be applied *onto* a base to upgrade it — a filter item that randomizes deployer output doesn't fit the "upgrade a base via deploying/item_application" shape. No second motif fits: the item is a one-trick deployer accessory with no material input/output of its own. Forcing a weave here would be a no-motif edge.
- from: weighted_shuffle_filter | via: recipe | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the item has no sellable trade-good property or luxury-good shape; it's a builder utility. No coherent economy anchor; no-motif → reject.
LEAVE — two items that randomize deployer output; no material consumption/output, no loot, no processing method of its own. A one-system (Create) builder utility; no coherent 2nd anchor without forcing an arbitrary edge. Reserve LEAVE for exactly this case.

## spark   [anchors: support/performance (1)]
LEAVE — server/client profiler; zero items/blocks/loot; pure diagnostics tooling. Genuine zero-content utility; nothing to route.

## platform   [anchors: support/library (1)]
LEAVE — cross-platform registry/API library (ItsBlackGear); zero items/blocks/loot; pure code infrastructure. Genuine zero-content library.

## extradelight   [anchors: survival, create (2)]
OK — connections sound: survival (deep cuisine / diet pressure) + Create (create:mixing already an inbound weave) are both genuine anchors. Now evaluating additional and third-anchor links.

- from: extradelight feasts / high-effort dishes | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a feast that took a colonist's kitchen and a Create mixing line to produce is exactly the luxury good a Trading Floor stall sells for coin.
- from: extradelight:mortar (ground coffee/spices) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mortar grinds coffee beans and spice seeds — the same job as a Create millstone; routing raw coffee/hazelnut/ginger through create:milling before they enter the mortar chain makes the bakery a downstream of the Create spine, not a parallel kitchen.
- from: extradelight:vat / evaporator fluid outputs (apple cider, syrups, salt) | via: create:mixing or create:filling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: reduced fluids from the evaporator (salt brine, fruit syrups) feed back into Create mixing as flavour intermediates — the Vat becomes one step in a longer Create chain rather than a standalone kitchen appliance.
- from: extradelight crops (coffee beans, garlic, citrus) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling dry coffee beans to grounds before the extradelight:oven roast step makes Create the first stage of the espresso production chain — natural, teaches new players the Create-first pipeline.
- from: extradelight feasts | via: minecolonies:composting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: colony composting of feast leftovers is a possible loop-close but composting belongs to the survival/production layer generically; this particular link is too marginal to assert (feast → compost is not a strong player-facing hook). The M-09/economy route is a stronger second weave.
- from: extradelight luxury dishes | via: loot-seed into structure chests | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty-board → coin (mob-drops combat loop); seeding extradelight food into structure chests doesn't fit the bounty motif — it would need its own no-motif edge or an M-09 variant. Reject under M-14; the M-09 trade-stall path already covers the economy hook cleanly.

REWORK: none — the existing create:mixing inbound weave is correct and the survival anchor is genuine. No weak/arbitrary connections to flag.

## invtweaksemuforipn   [anchors: support/QoL (1)]
LEAVE — client-only InvTweaks keybind shim on top of IPN; zero items/blocks/loot; pure inventory-management compat. Genuine zero-content utility.

## sound_physics_remastered   [anchors: support/immersion (1)]
LEAVE — client audio simulation (reverberation, occlusion); zero items/blocks/loot; no material surface. Genuine zero-content utility.

## companion   [anchors: support/QoL (1)]
LEAVE — behavior-only pet-safety mod; zero items/blocks/loot; no material surface. Genuine zero-content utility; nothing to route.

## zeta   [anchors: support/library (1)]
LEAVE — Vazkii's module-loader framework (Quark backbone); zero items/blocks/loot. Genuine zero-content library.

## multipiston   [anchors: support/MineColonies-dependency (1)]
LEAVE — a MineColonies/Structurize internal utility block (configurable multi-block piston for colony builders); 1 block item but it is a functional dependency, not a material node. No loot table weave-worthy content. Any weave belongs on MineColonies itself; pulling a colony dependency into a separate system anchor would misattribute the connection.

## minecolonies_compatibility   [anchors: survival, create (2)]
OK — connections sound: survival (Orchardist/Butcher/colony farming bridge) and Create (Courier ↔ Create Stock Link storage bridge) are both genuine and functional. This mod's purpose *is* cross-system glue; being a bridge is its 2nd anchor by construction. Evaluating whether a 3rd-anchor link would be coherent:

- from: colony Gunner job (TaCZ worker) | via: loot-seed / bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the Gunner job is a colony worker that uses TaCZ guns, not itself a drop source or bounty-payout mechanism — the M-14 bounty link belongs on bountiful/combat mods that generate the actual drops, not on the colony job wrapper. Attributing M-14 here would be indirect and confusing.
- from: citizen_terminal / citizen_stock_keeper blocks | via: create:item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) requires *applying a woven part onto a base* — the stock-keeper/terminal are functional colony infrastructure blocks, not items that get upgraded by deployment. No sensible M-20 shape here; forced edge.
- from: colony Fluid Manager job (fluid-network bridge) | via: config-tie to aeronautics fuel logistics | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is fuel → engine (refined fuel powering Aeronautics propulsion); the Fluid Manager job handles fluid routing but it is a colony AI job, not a recipe or item that routes fuel. This would be a config-relationship claim, not a recipe-weave. No-motif for the specific link as proposed; reject.

REWORK: none — existing 2-anchor assignments are correct. No weak/arbitrary connections.

## fzzy_config   [anchors: support/library (1)]
LEAVE — Kotlin-based config engine API; zero items/blocks/loot; no gameplay surface. Genuine zero-content library: its only role is config serialization/GUI for dependent mods.

## lionfishapi   [anchors: support/library (1)]
LEAVE — animation/entity rendering API (L_Ender's mods dependency); zero items/blocks/loot; no gameplay surface. Genuine zero-content library; any weave belongs on the mobs whose animations it powers, not the rendering framework.

## bits_n_bobs   [anchors: create, survival (2)]
OK — connections sound: Create (kinetic chain drives + nixie displays + made-by create:item_application/splashing) and survival (decoration palette for player builds) are genuine. Already at the 2-pillar goal. Evaluating whether additional links add coherent value:

- from: bits_n_bobs tile blocks (andesite/asurine/crimsite/deepslate) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone-tile deco bought in bulk for building should be crushable back to their base crushed-stone + an XP nugget — the standard lossy recycling that keeps deco blocks from being a one-way sink and rewards the Create-first build philosophy.
- from: bits_n_bobs:brass_lamp / nixie_board | via: create:item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: nixie boards are already made-by create:item_application (inbound weave noted in dossier) — this is not a new link, it's the existing one already counted. Flagging to avoid double-counting; reject as redundant.
- from: bits_n_bobs:chain_pulley | via: aeronautics drivetrain | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the chain pulley is a kinetic contraption-mover — a natural mechanical component for an Aeronautics ship's winch/crane mechanism; seeding it as a recipe input for aeronautics contraption-drive hardware advances the M-24 drivetrain weave and ties a Create-adjacent mod to the aeronautics build arc.

REWORK: none — existing create:item_application and create:splashing inbound weaves are correctly assigned; survival decoration anchor is genuine.

## craftingtweaks   [anchors: support/QoL (1)]
LEAVE — crafting-grid rotate/balance/clear button overlay; zero items/blocks/loot; no material surface. Genuine zero-content QoL utility; nothing to route through any method.

## mcwfences   [anchors: support/decoration (1)]
The dossier flags a weak M-04 (metal fence → crushing) candidate. Power-reading: 180 fence/wall/gate variants spanning every wood + every stone, with a subset of named metal fence variants (acorn, bastion, cathedral, etc. — confirmed by the block list). The metal variants contain iron; the wood/stone variants are vanilla-composition. Loot=yes (structure chests may contain these).

- from: mcwfences metal fence variants (acorn/bastion/cathedral etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal fences bought for a base perimeter should be recoverable — crushing a bastion fence back to a couple of iron nuggets + XP nugget is the standard Create lossy-recycle that closes the builder's material loop. Restricting to metal variants only avoids applying M-04 to wood/stone fences where vanilla drop already covers demolition.
- from: mcwfences wood fence/gate variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla wood fences already drop themselves on break; adding a separate crush path adds nothing meaningful and bloats the recipe set. Restrict to metal variants only (above).
- from: mcwfences items (any) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 is for high-effort consumables (wine, cheese, processed crops) as luxury trade goods — selling a plain fence post for coin has no player-facing "of course" hook; tone clash with M-09's luxury-good framing. Decoration sell paths belong on finished premium builds, not raw building materials.

## moogs_structures   [anchors: support/library (1)]
LEAVE — worldgen framework/API library for Moog's structure mods; zero items/blocks/loot of its own. Genuine zero-content library. Any loot-seed weave belongs on the structure mod(s) that use this framework, not the framework itself.

## endermoon   [anchors: survival (1)]
The dossier suggests LEAVE, but the briefing's rules require reaching for a loot-seed or processing candidate before LEAVE. Power-reading: the Ender Moon event multiplies enderman spawns, indirectly spiking ender pearl drops for the night. The event itself has no items, but it is a named, player-recognizable lunar event — it fits the M-22 lunar/celestial reagent shape if the pearl surge is made meaningful.

- from: ender pearl surge (endermoon-night drop) | via: worldgen/spawn event gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Ender Moon nights flood the overworld with endermen; encoding ender pearls harvested on that specific night (via M-22 event-gate) as the input to an Occultism rite or Ars Nouveau summoning ritual gives the event a tangible mechanical payoff — players plan around it, create pressure to be ready and safe during it, and the pearl surplus feeds the magic spine. The event-gate delivery is a config/datapack note: "ender pearl gathered during Ender Moon qualifies as a charged variant" or a KubeJS listener.
- from: endermoon event (Super Ender Moon — all-mob spawn surge) | via: bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a Super Ender Moon is exactly when a group of players should post bounties — mob surge → bounty board consumes the resulting drops → coin payout. The event creates the supply spike that makes the bounty economically interesting; M-14's bounty→coin shape fits naturally. Delivery: a KubeJS/bountiful trigger note that Ender Moon nights are the canonical "post bounties" moment (not a recipe, just a documented seasonal pattern).
- from: endermoon event | via: recipe (KubeJS ritual input gate) | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no established motif connects a spawn-event gate to the Create pillar; forcing a Create link would require inventing a new motif. Reject; the magic (M-22) and economy (M-14) anchors are the coherent pair.

REWORK: the dossier's 2nd-anchor note says "none — leave" but M-22 and M-14 both fit; the LEAVE recommendation is too conservative given the briefing rule that spawn-surge events with recognizable player impact should reach for a motif before giving up. Existing single anchor (survival/pressure) is correct — the event is genuinely a pressure source.

## alcohol_industry   [anchors: create, survival (2)]
OK — connections sound: Create (create:filling + create:mixing inbound weaves; Alcohol Boiler is the Create-industrial distillery) and survival (drinkable consumables with status effects) are both genuine. The dossier already flags economy (M-09) as a strong 3rd anchor. Evaluating in full:

- from: alcohol_industry beer / vodka / whiskey / tequila (bottled) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bottle of Create-distilled whiskey is the archetypal luxury trade good — effort-intensive (Create mixing → boiling → bottling), portable, and universally wanted. Selling spirits at a Trading Floor stall or via MineColonies tavern provisioning is an "of course" hook that closes the production→economy arc cleanly.
- from: alcohol_industry:alcohol_base (fluid) | via: create:mixing (as intermediate) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier confirms alcohol_base is already assembled via create:filling + create:mixing (existing inbound weave); this would be a duplicate of a live connection, not a new one. Reject to avoid double-counting.
- from: finished liquor buckets | via: tfmg:distillation | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: TFMG distillation is for petroleum/industrial fluids (diesel, gasoline, lubricant) — routing whiskey through an industrial distillation tower is a tone clash; the Alcohol Boiler's themed method is already the correct vessel. The Create-arm is already covered; forcing a TFMG step on drinkable spirits is incoherent (a player wouldn't find it sensible).
- from: tequila / vodka (high-proof spirits) | via: tfmg:distillation → as solvent intermediate | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: same tone problem as above — high-proof spirits as industrial solvents is a real-world idea but in-game it would muddy the "these are drinks" identity with "these are industrial chemicals", creating player confusion about the item's role. The M-09 economy route is the clean 3rd link.

REWORK: none — Create + survival anchors are correctly assigned; the create:filling/mixing inbound weaves are genuine.

== CHUNK COMPLETE ==
