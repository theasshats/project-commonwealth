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
