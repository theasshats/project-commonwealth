# Phase 2 candidates — chunk-14 (pass-32, blind)

## vc_gliders   [anchors: aeronautics (1)]
- from: paraglider higher tiers (diamond/netherite) + reinforced paper | via: create:pressing / mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a glider is fabricated flight gear — the diamond/netherite tier built through Create sheets reads as engineered, not hand-folded.
- from: reinforced-paper feedstock | via: create:milling / pressing (pulp→paper chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: paper is a basic everyday component; gating the base glider's paper behind a Create chain trips the "never gate a basic behind depth" guardrail. Keep the tier-gate (M-05) on the high tiers only.
- from: copper_upgrade / nether_upgrade | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: snapping a copper or nether upgrade onto a glider via a Create deployer is the light single-step apply that suits an upgrade part.
- from: paraglider (finished good) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link, M-09 retired (economy is player-run). No demand-gate here; it's the ambient endpoint.

## fusion
- LEAVE — pure client texture-rendering library (0 blocks/0 items/0 recipes); genuine zero-content code library, no surface to weave.

## dndesires   [anchors: Create (1, deep)]
- from: crops / mob drops / foreign items | via: dndesires:freezing / seething / sanding (fan processing) | to: survival (food prep) / create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: its catalyst-sail fans are a foreign-material sink — route a crop or drop through a freezing/seething prep step feeding the food/Create web.
- from: milkshake foods | via: native eating → diet/seasons demand | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshakes are a finished dish that feeds the diet-variety pressure (consumed, demand renews).
- from: raw rubber / processed intermediate | via: create:* chain → cross-route recipe input | to: create/production | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber is a byproduct-grade intermediate other Create chains (insulation, belts) want — captured as feedstock rather than a dead-end.
- from: cardboard packaging / bore blocks | via: create:mechanical_crafting → aeronautics loadout | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: cardboard packaging is Create logistics flavor, not a drivetrain/control part; forcing it onto Aeronautics propulsion is an arbitrary edge. Bore blocks are deco. No coherent aeronautics pairing.
- from: rubber | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: rubber isn't a scarce regional metal nor the settlement medium; minting it as coin doesn't fit M-08. Its economy role is demand via M-32/M-29 as a traded intermediate, not currency.
- REWORK: existing 2nd-anchor candidate "rubber→economy via M-08 coin" in dossier is mis-motifed — should be M-32/M-29 (cross-route intermediate), not M-08 mint. Existing "milkshake→survival" is sound (re-cite M-26, not the retired M-09 framing).

## naturalist   [anchors: survival (1)]
- from: raw venison / bushmeat | via: farmersdelight:cooking / cutting | to: survival/create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: deer and boar meat dropped into the cooking-pot/cutting-board web becomes stews — fresh fauna feeds the kitchen processing chain.
- from: antler | via: ars_nouveau:imbuement or occultism:ritual as a keratin/bone reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an antler is the kind of isolated organic drop a ritual would want as a bone-analog reagent — gives the deer drop a magic sink.
- from: glow_goop | via: ars_nouveau:imbuement (light/source reagent) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: glow_goop is an everyday light material; a magic reagent role for it is plausible but thin and risks duplicating source_gem's reserved currency role. Leave to magic-chunk if a native consumer surfaces; no-strong-fit here.
- from: shellstone / froglass deco | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: lossy recycle of the deco set back to sand/cobble + xp nugget gives the stone blocks a second home in the Create web.
- from: cooked venison | via: numismatics sell (butcher good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: bare sell, M-09 retired. Meat's demand is the ambient use of food; no demand-gate.
- REWORK: dossier's "economy via numismatics sale of cooked meat (M-09)" is a retired bare-sell — drop it. Replace with M-12 (cooking chain) / M-28 (colony provisioning of meat) if a colony hut consumes it.

## notenoughanimations
- LEAVE — purely cosmetic client animation overrides (0 blocks/0 items/no gameplay); zero-content support mod.

## incontrol
- LEAVE — server-side JSON spawn/loot rule engine, no items or methods. It enables the scarcity/regionality design (can region-gate mob drops feeding M-02/M-30) but is infrastructure, not a weave node.

## fzzy_config
- LEAVE — Kotlin config-serialization library (0 content); zero-surface dependency.

## opacpvp
- LEAVE — PvP-rules toggle (0 items/0 methods); sanctioned support, nothing to route.

## aeronautics   [anchors: aeronautics (1), Create de-facto 2nd]
- from: levitite_blend crystallization (code step) | via: KubeJS catalyst-adjacent requiring galosphere allurite/lumiere shard | to: magic | motif: M-07 | power: endgame | tone: ok | verdict: ACCEPT | hook: making the blend→levitite catalysis require an attunement shard gives a clean aeronautics↔magic seam and stops lift being free arbitrage. (Mechanism: confirm the step is KubeJS-reachable.)
- from: adjustable_burner fuel intake | via: fuel-tag extension to tfmg:diesel | to: survival/aeronautics fuel | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the hot-air burner already burns furnace fuel; tagging diesel in lets a fuel specialist supply the fleet — the propulsion supply line.
- from: structural alloy / steel plate | via: create recipe input to airframe/hull | to: create/survival | motif: M-23 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: airframes should cost real fabricated structural metal, scaling depth with ship tier (already an inbound-strong seam).
- from: gyroscopic_mechanism / portable engine | via: create:sequenced_assembly → drivetrain | to: create | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: propellers/engines built through Create sequenced-assembly is the drivetrain side of the supply line.
- from: levitite (bulk lift material) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier proposes M-08/M-09 sell — bare sell is retired. The real economy weave is M-30: levitite is zinc + end-stone gated (regional scarcity), so it's region-locked and must be traded — re-express as below.
- from: levitite (zinc + end-stone gated) | via: GTMOGS regional ore-gen → recipe input | to: economy/scarcity | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite's zinc input is region-locked, so lift production is regional and a lift specialist must trade it across regions — anchors aeronautics to the scarcity foundation.
- from: rope/docking connector + bulk lift goods | via: aeronautics/trains as move method | to: economy/aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: heavy lift cargo and docking infrastructure give the logistics arm its distribution role at trading posts.
- REWORK: dossier's levitite→economy (M-08/M-09 sell) is the retired bare-sell — replace with M-30 regional-scarcity gate (above). Dyeable-tires→NPC-trade-goods (M-09) is a bare sell — drop it (tires belong to M-24 drivetrain). Borehead-bearing→economy (M-08) is also bare sell — its real weave is M-30 (extracted region-locked ore feeds trade), not a coin mint.

## northstar   [anchors: Create, aeronautics (2)]
- from: titanium / tungsten / martian_steel (scarce regional metals) | via: GTMOGS regional ore-gen → recipe input | to: economy/scarcity | motif: M-30 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: off-world metals are region/dimension-locked, so a space-tech specialist must trade them — anchors the tier to scarcity, not a flat sale.
- from: advanced_circuit | via: cross-route recipe input (required in a Create/aeronautics high-tier chain) | to: production | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits as a required input for another route's endgame part forces the space-tech player and the builder to trade.
- from: northstar:electrolysis / freezing machines | via: accept foreign fluids/ingots as new join keys | to: create/production | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: its three machines can consume foreign brines/fluids, giving another route's byproduct a processing home.
- from: titanium | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: minting space metal as the settlement medium is a stretch — M-08 is for the chosen coin metal; titanium's economy role is M-30 scarcity-gating. Reject the mint framing.
- from: astronomical_reading / advanced_circuit | via: numismatics sale | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell, retired. Re-express circuits as M-29 (above); astronomical_reading better fits M-37 research-gating if it unlocks recipes.
- from: astronomical_reading | via: research/knowledge gate | to: economy/production | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: if astronomy readings unlock recipes (knowledge an item can't carry), only the product is tradeable — a non-erodable capability wall.
- REWORK: dossier's two economy candidates (M-08 mint, M-09 sale) are both weak/retired — replace M-09 sale with M-29 cross-route + M-37 research; downgrade M-08 mint to M-30 regional scarcity. Existing Create + aeronautics anchors are sound.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen overhaul (0 items/0 blocks/0 methods). Its weave is indirect: it's the terrain other mods' regional ore-gen (M-30) and biome-spawned content ride on. No material or method to route; survival anchor stands alone, no forced 2nd.

## createaddoncompatibility
- LEAVE — content-free Almost-Unified glue (0 items, retag rules only); support role. (Caution per CLAUDE.md: verify it never mis-merges galosphere palladium as silver — but that's an audit note, not a weave.)

## betterbiomereblend
- LEAVE — client perf/color-blend render mod (0 content); zero-surface support.

## justenoughbreeding
- LEAVE — JEI breeding-info plugin (0 content); client recipe-viewer support, nothing to weave.

## yungsapi
- LEAVE — pure structure/jigsaw library API (0 content); zero-surface dependency.

## farmersdelight   [anchors: survival, Create (2)]
- from: grain / crops | via: create:milling / cutting (flour, prep) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing grain→flour and ingredient prep through Create keeps the kitchen reading as Create's downstream (partly existing — deepen it).
- from: cooked stews / pies (high-tier dishes) | via: minecolonies request / hut provisioning | to: economy/colony | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony needs feeding — hearty cooked meals provision colonists via the colony route, a real demand-gate (not a bare sell).
- from: cooked meals | via: native eating → diet-variety pressure | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: cooked dishes are consumed against the diet/nutrition pressure, so demand for the kitchen's output never zeroes out.
- from: high-tier cooked dishes | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier's M-09 luxury-good→coin is retired bare-sell. Re-express as M-28 colony provisioning (above) — that's the demand-gate.
- REWORK: dossier's "economy via numismatics (M-09 luxury good→coin)" is retired — replace with M-28 colony provisioning. Existing survival + Create anchors sound; Create link is partly already authored (made-by create:milling/mixing/filling).

## beachparty   [anchors: survival (1)]
- from: open coconut / fruit | via: farmersdelight:cooking or palm_bar_mixing into diet-relevant foods | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts and cocktails feed the diet-variety/hydration pressure (Fruits/Sugars groups) — consumed demand.
- from: mini_fridge ice | via: create cooling/freezing chains as bulk ice feedstock | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: ice is trivially vanilla-obtainable; routing it as a "byproduct→input" feedstock is not a meaningful scarcity/demand edge. No-strong-fit.
- from: cocktails | via: numismatics sell (tavern stock) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: bare sell, retired. Cocktail buffs feed survival (M-26); no demand-gate for an economy weave.
- from: palm wood + furniture | via: any | to: any | motif: — | power: everyday | tone: clash | verdict: REJECT | reason: decoration palette; forcing a Create recipe-weave on beach deco is an arbitrary edge per guardrails. Decoration support is a valid standalone role.
- REWORK: dossier's economy-via-sell (M-09) is retired bare-sell — drop. Survival anchor stands; the coconut/cocktail→diet link (M-26) is the cleaner second weave.

## dtterralith
- LEAVE — Dynamic-Trees × Terralith worldgen compat bridge. Its log/sapling output is ordinary vanilla wood that already reaches Create milling / farmersdelight as plain wood; no bespoke edge warranted. Survival/worldgen-flavor anchor stands.

## configuration
- LEAVE — config-screen library (0 content); zero-surface dependency.

## betterdungeons   [anchors: survival (1)]
- from: dungeon loot tables (Catacombs/Undead Fortress/Spider Cave) | via: loot-seed of magic reagents (Ars/Occultism/boss) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding magic reagents into dungeon chests gates magic progression behind dangerous exploration — the danger-pressure feeding production.
- from: dungeon loot tables | via: loot-seed of boss-key / progression gate items | to: create/production | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: a Catacombs-only key item gating a complex Create recipe makes the dungeon a real production on-ramp (the boss/danger route).
- from: dungeon danger output (farmed loot) | via: emergent trade to non-combat players | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist farms dungeon rarities and trades them to builders — the supplier side of the danger route.
- from: dungeon loot | via: loot-seed of minted coins | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: seeding minted Numismatics coin into loot is an NPC/world coin faucet — currency from outside the player economy, which the player-run ruling forbids (M-14 cut). Seed goods/reagents, not coin.
- REWORK: dossier's "economy via loot-seeded coins (M-08-adjacent)" is a coin faucet — reject per player-run ruling; replace with M-34 (combat-route supply) + M-02/M-15 reagent/key seeding (above).

== CHUNK COMPLETE ==
