# Phase 2 candidates — chunk-11

## foodeffecttooltips   [anchors: support/QoL (1)]
LEAVE — pure client tooltip renderer; zero items, blocks, or methods; no material surface to route; sanctioned support role.

## pantographsandwires   [anchors: Create, aeronautics (2)]
OK — connections sound. Already at 2 anchors (Create spine via 6 inbound recipe-types incl. sequenced_assembly; aeronautics pillar via rail/train logistics context). The coal_coke and graphite outputs are tagged (c:item/dusts/coal_coke, c:item/ingots/graphite) and could theoretically be pulled further, but the mod is already well integrated into the spine and any new link would be a modest incremental gain rather than a structural closure. Reviewed:

- from: pantographsandwires:coal_coke | via: tfmg:coking | to: Create (TFMG fuel chain) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is already tagged and available to TFMG's coking chain without a recipe addition — the tag connection is implicit; adding an explicit recipe edge would be redundant and arbitrary without a clear player-facing "of course" moment. The mod's purpose is overhead-line infrastructure, not fuel supply.
- from: pantographsandwires:graphite | via: create:milling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: graphite is already produced within the mod's own Create-routed recipes (it is an intermediate, not a standalone output orphaned from the spine). Adding another processing step for a material that already has a defined role in the mod's own recipes is overweaving with no loop advancement.
REWORK: none — existing 2-anchor connections are coherent and well-grounded in the mod's actual content.

## createfurnitureseats   [anchors: support/compat, aeronautics (2)]
LEAVE — zero items, zero blocks, zero recipe-types; pure behavior bridge making furniture blocks sittable on Create contraptions and Aeronautics sub-levels. Already touches the aeronautics pillar by definition (it makes ship interiors rideable). No material surface to route through any method. Forcing an economy or magic edge (e.g. "craft the compat") would be meaningless — the mod IS compat glue.

## sereneseasons   [anchors: survival (1)]
Power-read: sereneseasons is the pack's calendar engine — season_sensor emits redstone on season change; crop fertility is the ambient world rule; greenhouse_glass is the unlock. No registered recipe-types of its own. The "join key" is the sensor signal (machine-readable) and the fertility list (any crop can be slotted).

Candidates via method-pull:

- from: sereneseasons:season_sensor (redstone signal) | via: create:deploying / contraption logic | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: "wire the season sensor into a Create gearshift so the automated wheat farm switches to winter crops on the first frost — the machine knows what time of year it is."
  Red-team: is this a real weave or just "use redstone"? The Create belt/gearshift ecosystem legitimately reads redstone state to gate contraptions; the sensor is block-output, not just ambient data. M-16 explicitly calls for "season-gated input → Create/magic method." This is the input-gating side of M-16: the sensor gates which automated farm runs, not which ingredient enters a machine — one step upstream but fully within M-16's spirit. Tone: industrial-seasonal calendar feeding the machine spine — players would nod at this. ACCEPT.

- from: seasonal crops (any out-of-season crop flagged scarce by Serene Seasons fertility rules) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: "winter strawberries fetch coin at the trading floor — out-of-season produce is a luxury when half the crop patches are dormant."
  Red-team: the scarcity is real (the fertility penalty does make out-of-season crops genuinely harder to produce), but the "luxury good → coin" link doesn't depend on a specific Serene Seasons item — it's a config-level truth (seasonal scarcity → trade value). Still, M-09 rides on any high-effort consumable that's economically valuable, and seasonal scarcity is exactly that kind of enforced effort. The motif fits; the delivery is a Numismatics price entry, not a new recipe. Tone: survival-pressure feeding economy trade is core loop. ACCEPT.

- from: sereneseasons:season_sensor | via: ars_nouveau:scry_ritual or occultism:ritual gate | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: the sensor's redstone output is not a meaningful input to a ritual — a ritual consumes items, not redstone signals. The seasonal-reagent motif (M-16) fits better when a physical seasonal crop/material is required, not a sensor signal. Forcing a ritual gating on a redstone block is mechanically incoherent (rituals don't read redstone). No natural player "of course" moment here.

REWORK: existing connection is survival only (1 anchor). Both accepted links above advance the loop: survival pressure (seasons) → Create production (M-16 sensor automation) and survival pressure → economy (M-09 seasonal luxury). Together they bring sereneseasons to 3 system touches (survival + Create + economy) — strong structural closure for the pack's calendar engine.

## vinery   [anchors: survival (1)]
Power-read: vinery is the pack's winemaking tier — fermentation_barrel, apple_press, grape/cherry cultivation, dozens of named effect-bearing wines. Its outputs are high-value finished consumables (luxury trade goods). No Create inbound weave currently. loot=yes (chests).

Candidates via method-pull:

- from: vinery:wine (any bottled wine — apple_wine, cherry_wine, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "aged cherry wine sells for coin at the trading floor — the vineyard player exports what the combat crew can't grow themselves."
  Red-team: wines are exactly what M-09 names — a "high-effort consumable (wine, cheese, processed crop) is a sellable trade good." The motif was literally designed for this case. Effect-bearing wines are non-trivial to produce (cultivation → press → ferment → age) and create genuine specialization pressure. Tone: rustic agrarian food chain feeds the economy — natural loop closure. ACCEPT.

- from: vinery grapes / apple_mash | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "press a barrel of grapes in the mechanical press — bulk juice for the vineyard's fermentation barrels, no foot-stomping required at scale."
  Red-team: create:pressing is the natural Create analogue of the grapevine_pot foot-stomp. The dossier names this explicitly as a candidate. M-12 processing-chain pull: a raw crop run through a foreign processing method into a useful intermediate (grape juice → feeds fermentation_barrel). Depth: everyday tier (grapes are common farmland produce), so one light press step is appropriate. Tone: Create-scale food processing for a rustic crop — coherent (other Create packs do this). ACCEPT.

- from: vinery:apple_mash | via: extradelight:vat or create:mixing | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: apple_mash → vat fermentation is already covered by the pressing link above (same material, same destination). Doubling up with a second method for the same material at the same power tier is redundant; the pressing link is the cleaner single step.

- from: vinery wine bottles (aged) | via: loot-seed into trek or dungeon loot tables | to: survival (exploration reward) | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: while a rare aged wine as dungeon loot is thematically nice, it doesn't advance a *cross-system loop* — it stays within survival (exploration → food). M-09 requires selling for coin to reach the economy; this is just an exploration drop. Not a second anchor, just a loot flavor note.

REWORK: existing connection is survival only (1 anchor). Two accepted links bring vinery to: survival + Create + economy — 3 system touches. The Create pressing link advances the production chain; the Numismatics wine-trade link closes production → economy.


