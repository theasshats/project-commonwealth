# Phase 2 candidates — chunk-11 (pass-29, blind)

## trailandtales_delight   [anchors: survival (1)]
- from: cheese curd / cheese wheel chain (must→aged) | via: create_cheese:maturing or vinery ferment-style aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels must sit and age before they're worth trading — an aging specialist's good
- from: Lantern Fruit / golden lantern fruit (sniffer-recovered crop) | via: create:milling / create:mixing into juice or paste intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route the orchard crop through a mechanical mill instead of by hand
- from: cherry cheese pie / ancient coffee (multi-step dishes) | via: numismatics sale | to: economy | motif: M-09 (retired) | power: mid | tone: ok | verdict: REJECT | reason: bare sell link; "luxury food is sellable" is the ambient endpoint, not a weave (M-09 retired). Real demand-gate is M-35 aging above.
- REWORK: dossier's 2nd-anchor #1 (economy via M-09 luxury-food→coin) — kill; M-09 retired. Re-express as M-35 (cheese aging) which it qualifies for.

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — zero-content server-behavior datapack (0 blocks/items, no loot, pure sleep-quorum math); no material or method to route.

## vinery   [anchors: survival (1)]
- from: grapes / apples | via: create:milling or create:pressing → juice (alt to grapevine_pot) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: press grapes by machine, not by stomping, once you industrialize
- from: bottled wines (age in-world ~1yr/20 days for stronger effects) | via: native in-world barrel aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: aged vintages are worth more — a vintner who sits on stock corners the wine trade
- from: grape juice as ingredient | via: cross-route into a Create/cooking recipe needing a fermented intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wine/cider as a solvent or flavor input feeding other production chains
- from: wines/ciders | via: numismatics sale | to: economy | motif: M-09 (retired) | power: mid | tone: ok | verdict: REJECT | reason: bare "luxury good→coin" is ambient, not a weave (M-09 retired); the real demand-gate is M-35 maturation above.
- REWORK: dossier's STRONG economy candidate (M-09 luxury good→coin) — kill; replace with M-35 (in-world wine aging), which it already mechanically supports.

## dndesires   [anchors: create (1, deep)]
- from: rubber / sap (hydraulic_compacting) | via: cross-route input into an Aeronautics or magic recipe | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber as a required gasket/seal in airship hull/control parts forces the rubber producer and the shipwright to trade
- from: cardboard_package_* logistics blocks | via: aeronautics/train cargo loadout | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: packaged bulk goods need the logistics arm to move at scale
- from: milkshake foods | via: farmersdelight cooking / Spice-of-Life variety | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: its milkshakes feed the food-variety layer
- from: freezing/seething/sanding catalyst sails | via: their own fan methods | to: (self) | motif: — | power: mid | tone: ok | verdict: REJECT | reason: these are weave-TARGETS other mods route through, not edges dndesires needs.
- REWORK: dossier's economy candidate (M-08 coin from processed scarcity, WEAK) — keep only if rubber is region/scarcity gated (M-30); as written it's a bare sell, reject. Prefer the M-29 cross-route framing above.

## lootr   [anchors: support (1)]
- LEAVE — loot-instancing mechanic; its loot=yes is only its own reskinned container blocks, it injects no drops of its own (reads existing tables). No own loot pool to seed, no material surface.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks/items/loot); dependency framework only.

## appleskin   [anchors: support (1)]
- LEAVE — client HUD/readout only; 0 items, no mechanic change, nothing to route.

## createpickywheels   [anchors: create (1)]
- from: water-wheel/windmill placement gated by River biome / open-air / Overworld | via: biome+worldgen config gating (no recipe) | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the world dictates where you can build power — geography is the scarcity foundation pushing on the Create spine
- Note: behavioral patch, no items; the survival edge is a config/worldgen tie, delivered as a balance gate not a recipe. Genuine 2nd anchor (Create + survival/scarcity).

## underground_village   [anchors: survival (1)]
- from: Stoneholm villager trades | via: villager-trade seating (M-21 cut) | to: economy | motif: M-21 (cut) | power: mid | tone: ok | verdict: REJECT | reason: NPC trade→Numismatics is an NPC coin faucet; M-21 cut under player-run ruling.
- from: Stoneholm structure loot tables (loot=yes) | via: loot-seed of boss/progression/magic-reagent drops | to: survival/magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed weave-relevant drops (e.g. a magic reagent or a region-keyed material) into underground-village chests so the structure feeds the web, not just vanilla loot
- REWORK: dossier's only 2nd-anchor (economy via M-09 numismatics trade) — kill; M-09 retired and the villager-trade form is M-21 (cut). Replace with the loot-seed edge.

## gnkinetics   [anchors: create (1)]
- from: brass_gear / planetary_gear / ring_gear (kinetic components) | via: create:* → Aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: its specialized gears (planetary/worm for gear-ratio/torque) feed airship propellers and control surfaces — the drivetrain seam
- Note: dossier said "leave, it IS Create" — but M-24 (mechanical component→propulsion/control) is a genuine cross-system bridge to aeronautics that the isolated view missed; gears are exactly the drivetrain feedstock. Accept as 2nd anchor.

## createfurnitureseats   [anchors: support/compat + aeronautics]
- LEAVE — content-free compat glue (0 blocks/items); already touches aeronautics (rideable furniture on ships) via behavior, nothing to route. Connections sound.

## spyglass_improvements   [anchors: support (1)]
- LEAVE — client-only spyglass zoom QoL; 0 items, no mechanic surface.

## blockui   [anchors: support/library (1)]
- LEAVE — zero-content UI framework library (MineColonies/Structurize dep); nothing to route.

## xaerominimap   [anchors: support (1)]
- LEAVE — client navigation HUD; 0 items, no gameplay surface.

## create   [anchors: create (1) — the hub]
- LEAVE (as a recipient) — Create is the method library the whole pack weaves INTO, not a mod that needs a 2nd anchor; do not author edges that consume Create itself.
- OK — connections sound (it is pillar #1 by definition; its 17 recipe-types are the connective methods).

## rottencreatures   [anchors: survival (1)]
- from: frozen_rotten_flesh / magma_rotten_flesh / corrupted_wart (themed kill-drops) | via: occultism:spirit_fire / ars_nouveau:crush | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: themed undead drops are arcane transmutation reagents — kill-loot becomes a magic input
- from: same themed drops | via: occultism:ritual transmutation into an essence | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ritual-sink the corrupted wart into an occult essence
- from: themed drops farmed by combat specialists | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat player farms the storm-lich/swampy variants and supplies reagents to non-combat magic users
- from: frozen/magma rotten flesh | via: create:haunting / create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: haunt rotten flesh into a soul/Create byproduct
- Note: M-02 is the right motif for the mob-drop→reagent sink (the dossier's M-02/M-11 calls hold up under the reworked set).

## create_dragons_plus   [anchors: create (1)]
- LEAVE — Create fan-processing methods + shared code library for the DragonsPlus add-on family; its ending/freezing methods are weave-TARGETS others route through, not edges it needs. (Its dye buckets are intermediates, not a cross-system surface.)

## opacpvp   [anchors: support (1)]
- LEAVE — PvP-rules toggle; 0 items, combat-social config only, nothing to route.

## naturalist   [anchors: survival (1)]
- from: raw venison / bushmeat | via: farmersdelight:cooking / create:cutting into the food chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route game meat through the processing/cooking web rather than just grilling it
- from: antler (bone/keratin-analog) + glow_goop (light material) | via: occultism:spirit_fire / ars_nouveau:crush as a reagent | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: antler and firefly glow-goop as minor arcane reagents — drops that earn a second home
- from: shellstone / froglass deco | via: create:crushing → sand/cobble + xp nugget (lossy) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: recycle surplus deco back to raw via the crusher
- from: cooked venison/bushmeat | via: numismatics butcher sale | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: bare sell of renewable food is the ambient endpoint (M-09 retired); no demand-gate.
- REWORK: dossier's economy candidate (M-09 butcher sale) — kill; M-09 retired. Meat's real woven home is M-12 (food processing).

## createlowheated   [anchors: create (1)]
- from: Basic Burner consumes furnace fuel (passive heat removed) | via: the burn/consumption mechanic | to: survival/economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create heat now costs real fuel every tick — a consumption sink that keeps fuel demand alive (the loop's closing arrow)
- Note: the dossier said "leave," but forcing heat to consume fuel is a textbook M-26 consumption sink — a genuine cross into the survival/economy demand-renewal edge, not just a Create-internal tweak.

== CHUNK COMPLETE ==
