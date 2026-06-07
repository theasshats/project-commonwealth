# Phase 2 candidates — chunk-13

## searchables   [anchors: support/UI-library (1)]
LEAVE — genuine zero-surface UI API library; no items, no methods, no recipe types. Nothing to weave.

## timm   [anchors: support/QoL-client (1)]
LEAVE — client-side biome title overlay; zero items, zero methods. No content surface to weave.

## create   [anchors: Create (1)]
LEAVE — Create is the method hub other mods weave INTO; it does not need a second anchor. Dossier explicitly marks this N/A-as-recipient. No edges authored against Create itself.
OK — connections sound (Create IS the spine; its single anchor is by design, not a gap).

## buildguide   [anchors: support/QoL-client (1)]
LEAVE — client-only render overlay (build-shape ghosts); zero items, zero methods. No content surface to weave.

## kubejs_create   [anchors: support/modpack-tooling (1)]
LEAVE — scripting bridge that enables Create-recipe weaving by other scripts; registers nothing of its own. No weave surface.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller | via: create:mechanical_crafting | to: Create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: The controller is crafted from Create precision mechanisms already — the Create-input dependency is captured by its vanilla recipe, not a new cross-route dependency. Adding a mechanical_crafting step on top doesn't advance the loop; it's a cost-inflation, not a meaningful cross-route.
- from: create_tweaked_controllers:tweaked_linked_controller | via: config tie / loot-seed | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: Bare "a vehicle pilot sells piloting services" — M-33 is valid but the controller item itself doesn't gate the service; the demand is ambient (anyone can pilot once they have it). No mechanic creates the dependency, so no weave.
REWORK: existing anchor 'aeronautics' is really a Create sub-anchor (control surfaces for contraptions/vehicles). The dossier's "leave — no coherent 2nd pillar" conclusion is correct; however the aeronautics anchor itself is sound (CC:Tweaked peripheral for vehicle/ship control). No actionable REWORK needed — leave at 1 anchor.

## architectury   [anchors: support/library (1)]
LEAVE — cross-platform API library; zero items, zero methods. Pure infrastructure, nothing to weave.

## exposure   [anchors: Create, survival (2)]
- from: exposure:aged_photograph | via: exposure:photograph_aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged photographs are time-matured documents; a specialist who keeps a darkroom running long enough to age prints has a trade good nobody else can rush-produce — the aging step (already implemented in the mod) makes photography a time-gated specialty exactly as M-35 intends.
- from: exposure:album / exposure:photograph | via: supplementaries:item_lore or supplementaries:antique_book | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: A photographer player offering keepsake portraits (albums/prints) as a service to other players is a pure labor trade with no vendor shortcut; the aged or lore-annotated result is the deliverable. No NPC faucet; value flows player-to-player (M-33 service).
- from: exposure:black_and_white_film | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Crushing film back to silver dust is thematically grotesque (you destroy the exposed/unexposed film for a trace resource); not what a player would nod at. Tone clash kills it.
- from: exposure:camera (gold variant) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: The gold camera is already made via create:sequenced_assembly per the dossier (made-by: create:sequenced_assembly) — this is the EXISTING weave, not a new one. Flagging as OK rather than a new proposal.
REWORK: dossier 2nd-anchor candidate notes "economy via numismatics — printed photographs as sellable mementos" citing M-09 — M-09 is RETIRED. The bare "sellable" read is correctly retired. The M-35 aging + M-33 service links above replace it cleanly.
OK — Create anchor (sequenced_assembly film development) is sound. Survival anchor (self-expression/hobby) is weak but defensible; the M-35/M-33 proposals strengthen the economy connection meaningfully.

## accelerateddecay   [anchors: support/performance (1)]
LEAVE — behavior-only leaf-decay optimization; zero items, zero methods. Nothing to weave.

## bettercombat   [anchors: support/combat-framework (1)]
LEAVE — JSON-driven combat behavior framework; registers no items, no recipe types. No material surface. A behavior library, not a weave target.

## supermartijn642corelib   [anchors: support/library (1)]
LEAVE — code library (GUI/block/network scaffolding); zero items, zero methods. Nothing to weave.

## rightclickharvest   [anchors: support/QoL-farming (1)]
LEAVE — interaction QoL (right-click harvest); zero items, zero methods. Nothing to weave.

## modelfix   [anchors: support/performance-bugfix (1)]
LEAVE — client-side rendering patch; zero items, zero methods. Nothing to weave.

## dynamic_fps   [anchors: support/performance-client (1)]
LEAVE — runtime FPS throttling; zero items, zero methods. Nothing to weave.

## yungsapi   [anchors: support/library (1)]
LEAVE — YUNG's structure library/API; zero items, zero methods. Nothing to weave.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns-1.3.4 (ocean village structures, loot=no per dossier) | via: loot-seed | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: Dossier records loot=no — these are vanilla-block structures using vanilla loot tables; there is no custom loot table to seed into. Would need a Phase-3 datapack edit to add a structure loot table first, but Phase 2 maps existing surface — this is a build task, not a direct weave. Reject as a weave; flag as future opportunity if a custom loot table is ever added.
- from: tidal-towns-1.3.4 (ocean location) | via: aeronautics as transit method | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: Deep-ocean floating villages are reachable only by sea or air; running a trade route to a Tidal Town settlement demands an airship or boat line — the location itself creates the logistics demand that makes the aeronautics arm earn its keep. No recipe needed; this is a design-level loop link (structure placement → aeronautics demand).
REWORK: dossier 2nd-anchor candidate says "none — leave" citing no items/methods. The M-31 logistics-demand link above is valid as a design-level weave (no recipe required; the placement IS the weave). Recommend updating dossier to note aeronautics as a 2nd anchor candidate.

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation:vein (vein table) | via: createoreexcavation:vein recipe-type + GTMOGS regional ore-gen | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Configuring the vein table so that region-locked scarce metals (palladium, tin, silver) only appear in specific chunk veins makes the Drilling Machine the local production gate — you have to be in that region OR trade for the ore. The vein table IS the regional-scarcity gate.
- from: createoreexcavation:diamond_drill / netherite_drill (drill heads) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Drill heads consuming Create materials is already the existing inbound weave (made-by: create:crushing/cutting/milling/mechanical_crafting in the dossier). This is the existing connection, not a new proposal.
- from: createoreexcavation vein output (raw ores) | via: numismatics mint (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Slow-but-infinite ore from a local vein → Create-processed → player-pressed coin is exactly the specialist-minter path: the region's Drilling Machine operator controls the ore supply that backs the currency, making minting a real specialization.
- from: createoreexcavation:extractor (fluid reservoir) | via: tfmg:distillation | to: Create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: Extracted crude fluid from a reservoir → TFMG distillation column → diesel/fuel byproducts feeds the aeronautics fuel chain without any manual ore-mining step; the infinite-but-slow reservoir becomes the industrial base for the fuel economy.
REWORK: dossier 2nd-anchor candidate correctly identifies "economy via vein-table scarcity" and M-08 as the key link — these are accepted above. The existing Create anchor is solid. No REWORK needed on existing connections.

## owo   [anchors: support/library (1)]
LEAVE — owo-ui/config code library; zero items, zero methods. Nothing to weave.

## alternate_current   [anchors: support/performance (1)]
LEAVE — redstone-propagation performance rewrite; zero items, zero methods. Nothing to weave.

## cmpackagepipebomb   [anchors: Create (1)]
- from: cmpackagepipebomb:pipebomb_rigged | via: createbigcannons:cartridge_assembly or tacz:gun_smith_table_crafting | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: The pipe bomb is a PvP novelty trap, not a boss-supply or danger-route item. Routing it through Big Cannons assembly or TACZ gunsmithing adds cost but not loop-advancement; the demand for it is player whimsy, not scarcity-driven pressure. No genuine M-34 angle — M-34 requires combat-specialist farming danger outputs for trade; a pipe bomb trap is the opposite direction. Reject.
- from: cmpackagepipebomb:pipebomb | via: design-level gag | to: survival/PvP | motif: no-motif | verdict: REJECT | reason: No motif fits the "package trap detonates on delivery" mechanic in a loop-advancing way. Fun flavor but genuinely zero weave surface beyond the existing Create-package dependency.
LEAVE — PvP novelty with no coherent 2nd-pillar weave; existing Create anchor covers its one real connection. Dossier's "leave" conclusion is correct.

== CHUNK COMPLETE ==
