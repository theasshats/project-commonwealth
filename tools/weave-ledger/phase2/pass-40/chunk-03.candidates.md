# Phase 2 candidates — chunk-03 (context-fed)

## ohthetreesyoullgrow   [anchors: support (1)]
LEAVE — zero-surface worldgen library (0 items, 0 blocks, no recipe types); sanctioned support role. No rows in CANDIDATES.tsv; nothing to challenge or extend.

## jamlib   [anchors: library/API (1)]
LEAVE — pure code library (0 items, 0 blocks, no recipe types); sanctioned support role. No rows in CANDIDATES.tsv.

## bcc   [anchors: support/modpack-ops (1)]
LEAVE — connection-handshake utility (0 items, 0 blocks); operates at network layer only. No rows in CANDIDATES.tsv.

## towntalk   [anchors: support/flavor (1)]
LEAVE — audio-only MineColonies addon (0 items, 0 blocks, no recipe types); rides on MineColonies for its loop anchor. No rows in CANDIDATES.tsv.

## miningspeedtooltips   [anchors: support/client-UI (1)]
LEAVE — tooltip-display tweak only (0 items, 0 blocks); reads existing tool stats, changes nothing in the world. No rows in CANDIDATES.tsv.

## kubejs   [anchors: support/modpack-tooling (1)]
LEAVE — the scripting engine that authors weaves; it enables cross-system connections but is not itself a weave target. No rows in CANDIDATES.tsv.

## accelerateddecay   [anchors: support/perf (1)]
LEAVE — leaf-decay performance patch (0 items, 0 blocks); pure behavior override with no material in/out. No rows in CANDIDATES.tsv.

## kubejs_create   [anchors: support/modpack-tooling (1)]
LEAVE — scripting bridge exposing Create recipe types to KubeJS; no items/blocks, not a routable in-game method. No rows in CANDIDATES.tsv.

## fusion   [anchors: support/client-library (1)]
LEAVE — connected-textures rendering backend (0 items, 0 blocks); purely visual, no game content. No rows in CANDIDATES.tsv.

## better_lib   [anchors: support/library (1)]
LEAVE — config/messaging shared library (0 items, 0 blocks); no gameplay surface. No rows in CANDIDATES.tsv.

## packetfixer   [anchors: support/compat (1)]
LEAVE — network packet-size fix (0 items, 0 blocks); developer-infra, no player-facing content. No rows in CANDIDATES.tsv.

## terrablender   [anchors: support/worldgen-library (1)]
LEAVE — biome-region API dependency (0 items, 0 blocks, 0 biome-modifiers); operates only at worldgen registration, invisible in-game. No rows in CANDIDATES.tsv.

## xaerominimap   [anchors: support/client-QoL (1)]
LEAVE — client-side minimap HUD with waypoints (0 items, 0 blocks); no world effect, nothing to route. No rows in CANDIDATES.tsv.

## shulkerboxtooltip   [anchors: support/client-QoL (1)]
LEAVE — client-side container-preview tooltip (0 items, 0 blocks); informational only. No rows in CANDIDATES.tsv.

## appleseed   [anchors: survival (1)]

Existing rows are dense and well-reasoned. The strongest accepted rows already cover: M-26 (consumption sink, diet as standing demand), M-12 (production-by-demand pulling FD/ExtraDelight), M-28 (colony food requests), M-16 (Serene Seasons seasonal crops gating diet groups), M-33 (cook as labor specialist). The main gap is that no row has tried the survival→economy cross via **regional scarcity of a nutrient group** in a tight, scoped way.

- NEW | from: appleseed diet-gap signal (a specific nutrient group — e.g. Protein — scarce in one region) | via: config-tie (GTMOGS regional ore-gen → regional crop selection + appleseed auto-calc) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: if your region's biome supports only grains and no wild protein sources, you must trade for meat or legumes — the diet gap IS the regional scarcity gap, closing the loop from scarcity foundation directly through survival pressure to trade

## comforts   [anchors: survival (1)]

Existing rows show every naive route has been tried and rejected: M-04/M-06/M-20/M-22/M-23 on the items themselves all failed on motif-mismatch or tone-clash grounds. The one ACCEPT (M-28, colony builder requesting a sleeping bag) is credible but thin — one row on a "nice-to-have" colony request. The M-22 (lunar / hammock) accept from one pass is weak because it requires authoring a brand-new event hook. Let me look for a genuinely different angle the passes missed.

The dossier notes `loot=yes` — comforts has loot tables. The mod registers 33 blocks including all 16 hammock variants. Hammocks are inherently tied to **rest and time** — the one mechanic that touches the survival loop directly without forcing a recipe.

- NEW | from: comforts:sleeping_bag_* (bulk dyed wool goods, 16 SKUs) | via: create:toolbox_dyeing (batch-dye sleeping bags in matching ship/crew palette via Create's toolbox dye method) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: outfitting an Aeronautics crew cabin means dyeing matching sleeping bags for the bunks — the ship outfitter runs a Create dyeing line to produce uniform sets; keeps it everyday-depth appropriate and ties domestic wool goods to the fleet build
- CHALLENGE | from: comforts:hammock_* (day→night skip) | via: config/event (M-22 lunar hammock) | to: magic | motif: M-22 | verdict: REJECT | hook: the accepted M-22 row (1 ACCEPT, never converged) requires authoring a custom KubeJS event hook that fires on hammock-sleep during a lunar event — this is a mechanism-pending build, not a route through an existing method; no existing method in the palette covers "sleep event + lunar check → drop item"; should be flagged as a MECHANISM-PENDING candidate rather than a Phase-3 weave

## hpm   [anchors: aeronautics (1)]

Existing rows are the most extensive in this chunk. The Create spine (M-05/M-06/M-23), combat-supply (M-34), logistics (M-31), and cross-route (M-29 via CBC) are all well-covered with high-consensus ACCEPTs. The steamship fuel (M-13) is accepted. The main gaps I see:

1. **The M-29 cross-route angle on hpm munitions runs through CBC, but nobody proposed routing through occultism:spirit_trade to acquire a rare hull component** — a magic-route supply tie.
2. **The swashbucklerupgrade as a M-20 deploy-application** got 1 ACCEPT but is fragile — worth checking if it's genuinely M-20 (deploy onto an existing vessel) vs. a recipe gate.
3. **No row has explored the MineColonies / research gate for shipbuilding** (M-37 research — the shipwright's knowledge unlocking the hull recipe).

- NEW | from: hpm:swashbucklerupgrade (keel-upgrade applied to an existing cutter) | via: create:deploying (a Deployer applies the upgrade component onto the ship's hull form while it passes on a belt or contraption) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: retrofitting a cutter's keel is mechanically identical to Create's deploy-application pattern — the upgrade rides the assembly line, not a bench; this is exactly M-20's "light single-step upgrade" form
- NEW | from: hpm naval shipbuilding knowledge (hull + mast assembly) | via: minecolonies research (a colony "Shipwright" or "Naval Engineer" research tier unlocks the Create mechanical-crafting recipe for largehull/largemast) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't commission a war-cutter without someone in the colony who knows how to lay a keel — the research gate means the colony player's investment unlocks fleet capacity for the whole group, and you buy ships from the one who has it

## exposure   [anchors: create, survival (2)]

Existing rows: the mod is already at 2 anchors (Create + survival). The economy arm (M-35 aging, M-33 service/labor, M-26 film consumption) has solid converged ACCEPTs. The main gap is whether there's a **magic tie** that isn't a tone-clash (every magic row was rejected). One unexplored angle: **darkroom chemistry and occultism share a "reagent refinement" vibe** — occultism's silver (the real silver in the pack, not galosphere palladium) could feed film emulsion without forcing an arcane camera.

The other gap: the `exposure:photograph_aging` method is a registered recipe type — it is a *method* other mods could theoretically pull materials through, but nobody has asked "can a foreign material age in the lightroom?" That's worth checking.

- NEW | from: occultism silver compound (the real silver in the pack — checked against galosphere gotcha; galosphere silver_ingot is palladium, so occultism holds the silver) | via: create:mixing (silver dust + exposure chemistry → photographic silver halide emulsion → exposure:black_and_white_film) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: real B&W photography needs silver halide — the pack's only true silver is occultism's; making film emulsion from occultism silver in a Create mixer creates a genuine cross-route dependency (the photographer needs the alchemist's output), and the occultism silver isn't tagged c:ingots/silver so no unification hazard
- CHALLENGE | from: exposure:black_and_white_film (film cartridge) | via: create:pressing silver → film base | to: create | motif: M-12 | verdict: REJECT | hook: the 5-ACCEPT row for "pressing silver into film base" oversimplifies the chemistry — pressing produces sheets, not emulsion; film requires a mixing/coating step, not a pressing step; the correct method is create:mixing (the M-29 occultism-silver row above captures this more accurately); the pressing framing is mechanically incoherent and should be superseded by the mixing route

## ctov   [anchors: survival (1)]

Existing rows: loot-seed delivers (M-02 magic reagents, M-08 coin, M-34 combat supply) are the well-accepted weaves. The rejected rows (M-15 boss-key in village loot, M-28 colony-seed, M-30 regional scarcity via loot) are correctly dead. The main gap: **no row has tried seeding MineColonies colony-starter scrolls** (or a colony blueprint book) into ctov village loot to make the "discover a village → found a colony there" flow mechanically hinted-at — this is the loop-advancement angle (explore → find settlement → start economy node).

- NEW | from: ctov village loot tables (existing loot=yes surface) | via: loot-seed (seed a MineColonies Tavern Supply scroll or Citizen Charter item into ctov village chest loot at low drop rate) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a wanderer finds a deed to a charter in the village archive chest and realizes they can turn this settlement into a real colony — exploration feeds the colony-economy route directly; the village is no longer just flavor, it's a potential colony seed point surfaced through found loot

## cookingforblockheads   [anchors: survival (1)]

Existing rows: the M-05 gate on Create parts for the flagship appliances (Oven/Fridge/Sink) is the dominant high-consensus ACCEPT (32x). M-28 colony-route (Cook hut using the kitchen) is solid (6x). The M-20 cow-jar filling via create:filling has 1 ACCEPT — worth examining. The key gap: no row has addressed the **Fridge as a cold-storage node feeding the aeronautics logistics arm** (a ship's galley needs cold storage for provisioning runs).

- NEW | from: cookingforblockheads:fridge (cold-storage appliance block, keeps food fresh) | via: recipe (crafting + create:mechanical_crafting gate on Create brass pipes/copper sheets) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a provisioned airship needs a cold-hold for its galley — the Fridge becomes a required build component in the ship's crew quarters fit-out, threading domestic kitchen infrastructure into the Aeronautics hull supply chain; scales at mid-tier (brass fittings, not endgame)
- CHALLENGE | from: cookingforblockheads:cow_jar / milk_jar | via: create:filling (pipe milk into jar via spout) | to: create | motif: M-20 | verdict: REJECT | hook: the 1-ACCEPT M-20 row treats filling a Cow Jar via a Create spout as a "deploy-application upgrade" — but M-20 is specifically about upgrading an item by applying a woven part onto a base, not about filling a container; the create:filling method is the correct method but the motif is wrong; this is M-12 (processing pull: milk fluid → pre-filled jar as a useful intermediate for downstream dairy recipes) if anything, and even then it is thin — the everyday-basics guardrail applies to a jar of milk

== CHUNK COMPLETE ==
