# Phase 2 candidates — chunk-01 (pass-19, blind)

## startuptime   [anchors: support (1)]
- LEAVE — zero-content boot-time logger; 0 blocks/0 items/0 recipes, reads the clock and writes a log line. No material surface, no loot. Genuine support/diagnostic library.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- from: cardboard_plane / portable_stock_ticker (remote order fulfilment) | via: numismatics price tie-in (config/datapack) | to: economy | motif: M-21 (provisional motif) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is explore-only and maintainer leans no; the courier moves *matter* (Create packages) not *value*, so its real economy adjacency is already covered by the aeronautics/logistics anchor (logistics = economy's matter-movement arm). No new edge needed — adding a coin tie would be forcing.
- from: cardboard_plane_parts / rope_* | via: create:cutting + create:deploying | to: Create | motif: M-20 deploy-application | power: mid | tone: ok | verdict: REJECT | reason: already authored inbound (mod's own recipes use create:cutting/deploying); this is its existing Create anchor, not a new weave.
- REWORK: none. OK — connections sound. Create (built on Create packages) + aeronautics (autonomous flying courier = logistics arm) are both load-bearing and non-arbitrary. Light economy adjacency noted but correctly left.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack (0 blocks/0 items), authors ~30 recipes onto Create's own types (compacting/crushing/mixing/splashing/haunting). It deepens the Create spine rather than bridging pillars; it has no items of its own to route through a foreign method. No coherent 2nd-anchor surface. (Note for human: balance-review its renewable-diamond/strata loops against the scarcity foundation — out of Phase-2 weave scope, but it can undercut regional ore scarcity.)

## create_compressed   [anchors: Create (1)]
- from: crushed_<metal>_pile blocks (e.g. crushed_silver_pile, crushed_platinum_pile) | via: numismatics mint after bulk-washing back to nuggets | to: economy | motif: M-08 coin from processed scarcity | power: mid | tone: clash | verdict: REJECT | reason: these are 1:9 storage forms of Create's own intermediates, not a new scarce material; the coin weave belongs on the underlying ore/metal (owned by whatever scarcity mod registers it), not on a QoL compression block. Putting the mint here would double-spend the metal's economy role.
- from: crushed_<metal>_pile | via: create:splashing (bulk washing) | to: Create | motif: M-04 recycles deco | power: everyday | tone: ok | verdict: REJECT | reason: already its native mechanic (compress/decompress via Create); not a new cross-system edge.
- LEAVE — support role: Create-internal storage/QoL covering Create's own item set; introduces no foreign material to weave. Leave as Create-spine convenience.

## cmpackagepipebomb   [anchors: Create (1)]
- from: pipebomb_rigged (explosive payload) | via: createbigcannons munition assembly | to: Create (combat depth) | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif; it's a one-shot PvP gag riding create:package delivery, consuming vanilla TNT/gunpowder. Routing it into cannon ammo clashes tonally (joke trap vs. artillery system) and fits no registered motif.
- LEAVE — tiny novelty/PvP trap (4 items, no loot, vanilla-only inputs). Curated friend-group flavor with no coherent second-pillar surface; do not force an edge.

## kubejs   [anchors: support (1)]
- LEAVE — zero-content scripting framework; it is the weaving *tool* (authors all recipes/tags/events), not a weave target. Registers only a placeholder bucket. Genuine support library.

## openpartiesandclaims   [anchors: support (1)]
- LEAVE — zero-content server-protection/party framework (0 blocks/0 items/0 recipes/no loot). Chat-command + map-UI driven; underpins the coop-PvPvE territory premise but has no material surface to route. Sanctioned support role.

## rightclickharvest   [anchors: support (1)]
- LEAVE — behavior-only farming QoL (right-click harvest + replant); 0 items, touches no material graph. It greases the survival/farming loop but as an interaction hook, not a routable method. Genuine support role.

## libipn   [anchors: support (1)]
- LEAVE — zero-content GUI/config library; required dependency for Inventory Profiles Next, registers no player-facing items/blocks. Genuine code library.

## moreoverlays   [anchors: support (1)]
- LEAVE — zero-content client HUD overlay mod (light-level/chunk-grid/JEI-search). No world or material interaction. Genuine client-QoL support.

## drones   [anchors: aeronautics (1)]
- from: ion_thruster / iron_rotor (thrust tiers) + controller | via: create:sequenced_assembly through a derpack:incomplete_thruster part | to: Create | motif: M-06 sequenced-assembly keystone | power: endgame | tone: ok | verdict: ACCEPT | hook: the best drone tier should be a real Create build — fly faster only after you fabricate the ion thruster on the spine.
- from: drones:drill (the auto-mining ability block) | via: create:deploying / item_application onto the rotor assembly | to: Create | motif: M-20 deploy-application upgrade | power: mid | tone: ok | verdict: ACCEPT | hook: bolt a Create-fabricated drill head onto the drone to give it mining assist — the light single-step tier below the ion-thruster chain.
- from: wood_rotor (entry tier) | via: create:mechanical_crafting | to: Create | motif: M-05 native-method gating | power: everyday | tone: clash | verdict: REJECT | reason: guardrail — the basic/entry rotor must stay cheaply hand-craftable; gating the everyday tier behind a Create machine violates "never gate a basic component behind a complex recipe." Only the upper tiers (above) earn depth.
- from: pocket_drone (finished crafted good) | via: numismatics sell/price | to: economy | motif: M-09 luxury good→coin | power: mid | tone: ok | verdict: REJECT | reason: weak/redundant; a drone-maker selling drones is a generic "any crafted item is sellable" edge, not a designed weave, and economy is better served by the Create-fabrication route already giving it a second anchor. Recorded for review.
- REWORK: aeronautics anchor is sound but currently the *only* anchor and it's a "personal flight toy" rather than logistics — the Create-fabrication weaves above are what make it earn its place (give it a real 2nd anchor and tie flight to the tech spine).

## bagus_lib   [anchors: support (1)]
- LEAVE — zero-content shared code library (baguchi's dependency); no items/blocks/methods. Genuine library.

## resourcefullib   [anchors: support (1)]
- LEAVE — zero-content cross-platform API library; pulled transitively as a hard dependency, never configured. Genuine library.

## appleseed   [anchors: survival (1)]
- from: diet variety (DEMAND signal, 5 nutrient groups) | via: config/tuning that makes multi-group cooked dishes the way to keep buffs | to: production (Create/farming/cooking — farmersdelight:cooking, extradelight:*, create:milling) | motif: M-12 processing-chain pull | power: mid | tone: ok | verdict: ACCEPT | hook: a balanced diet means you actually have to cook across food mods — pressure (diet) pulls production (the cooking/farming chains). This is the loop in miniature, matches SYSTEMS.md §2.
- from: high-nutrient / multi-group foods (made valuable by the diet buff) | via: numismatics price/sell | to: economy | motif: M-09 luxury good→coin | power: mid | tone: ok | verdict: ACCEPT | hook: when a varied diet is buff-worthy, the specialist cook's balanced meals become trade goods others buy — pressure → production → economy, the Eco "nutrition has value" parallel.
- REWORK: survival anchor is sound (it IS the pressure-side diet mechanic). It is a demand-driver not a recipe target, so frame the two accepts as config/tuning + price hooks, not new recipes on the mod itself (it has 0 items). Note M-09 carries the 0.9 player-run-currency review caveat.

## mcwfences   [anchors: support (decoration) (1)]
- from: *_metal_fence variants (acorn/bastion/cathedral metal fences) | via: create:crushing | to: Create | motif: M-04 recycles deco | power: everyday | tone: ok | verdict: ACCEPT | hook: melt a scrapped metal fence back to nuggets + an xp nugget — lossy, only the metal variants, as part of a wholesale deco-recycle pass.
- from: hedge variants (leaf-based greenery) | via: create:milling/composting | to: Create/survival | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif and forced; hedges are vanilla-leaf deco, milling them yields nothing distinctive. Don't force edges onto organic deco.
- REWORK: decoration is a sanctioned support anchor — no rework needed; only the metal-fence crush is worth authoring, and only inside a deco-family batch (not piecemeal for 180 blocks).

## trashslot   [anchors: support (1)]
- LEAVE — zero-content inventory trash-slot UI (deletes items). No material surface to route. Genuine client-QoL support.

## formations   [anchors: survival (1)]
- from: scattered altars/ruins/pedestals (generated structures) | via: loot-seed into structure loot tables | to: economy | motif: M-08 coin from processed scarcity → numismatics seed | power: mid | tone: clash | verdict: REJECT | reason: Formations registers NO blocks/items and builds from foreign palettes — it places structures but owns no loot tables of its own (loot=no). There is nothing to seed; loot tie-ins belong to whatever mod's blocks fill the structure, not to Formations. (Contrast a loot-bearing dungeon mod, which would qualify.)
- from: ruins as boss/progression sites | via: loot-seed (M-15 boss-key) | to: Create | motif: M-15 boss-key unlock | power: mid | tone: clash | verdict: REJECT | reason: same — no loot tables, no bosses; these are cosmetic scatter-structures. A progression-key seed has no home here.
- LEAVE — cosmetic scatter-structure worldgen with no items and no loot tables of its own; the survival/exploration anchor is correct and a forced economy/Create edge would be a defect. (Reserved-LEAVE per guardrail: checked loot-seed first, none exists.)

## pantographsandwires   [anchors: Create, aeronautics (2)]
- from: coal_coke (c:item/dusts/coal_coke) | via: createaddition:liquid_burning / create:* fuel intake | to: aeronautics | motif: M-13 fuel→propulsion | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is a crafting intermediate here, not a refined propulsion fuel; M-13's reserved fuels are tfmg diesel/gasoline/lubricant. Routing coke as airship fuel would clash with the reserved-reagent table and the mod's own use of coke for graphite/wire production.
- from: graphite (c:item/ingots/graphite) | via: create:sequenced_assembly into a control/drivetrain part | to: aeronautics | motif: M-24 mechanical component→propulsion | power: mid | tone: clash | verdict: REJECT | reason: graphite/coke are this mod's *own* intermediates for catenary/wire infra (the rail-electrification arm of aeronautics), already serving that anchor; pulling them into a separate propeller/control recipe is redundant and not what the material is for.
- REWORK: OK — connections sound. Create (6 inbound recipe types incl. sequenced_assembly) + aeronautics (overhead-line infra for electric Create trains = rail/logistics arm) are both solid and non-arbitrary. Its coal_coke/graphite c:tags are a genuine shared-material node any mod can pull — leave them as an open join surface rather than authoring a forced edge now.

## justenoughbreeding   [anchors: support (1)]
- LEAVE — zero-content JEI/REI/EMI plugin (breeding-info categories). Informational UI, no material flows. Genuine client recipe-viewer support.

## rechiseled   [anchors: support (decoration) (1)]
- from: chiseling-recipe groups (3627 decorative variants) | via: rechiseledcreate Mechanical Chisel (kinetic chiseling on Create power) | to: Create | motif: M-04 recycles deco (Create-powered processing of the deco palette) | power: everyday | tone: ok | verdict: ACCEPT | hook: the whole 600+ chisel palette runs on Create rotational power via the Mechanical Chisel companion (already in pack) — the deco family threads onto the spine. Light, everyday, no per-block authoring (data-defined groups).
- from: decorative variant blocks | via: numismatics sell | to: economy | motif: M-09 luxury good→coin | power: everyday | tone: clash | verdict: REJECT | reason: 1:1 reversible cosmetic swaps of vanilla blocks carry no added value; selling them is a generic everyday-item edge with no design intent. Reject.
- REWORK: decoration is a sanctioned support anchor; the Mechanical Chisel weave (above) gives it a real Create 2nd anchor with no extra work. No rework of existing connections needed.

== CHUNK COMPLETE ==
