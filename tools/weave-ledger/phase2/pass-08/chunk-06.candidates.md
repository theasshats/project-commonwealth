# Phase 2 candidates — chunk-06

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (fuel-burning climate machine) | via: create:mechanical_crafting / M-05 native-method gating | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth is a complex multiblock — requiring Create brass fittings and a casing to build it makes climate control a tech-spine unlock, not a freebie.
- from: cold_sweat:boiler (fuel-burning heat emitter) | via: create:filling (waterskins already use this) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already an inbound edge on waterskins; adding it on the boiler too doubles up without adding a second pillar — it's still only survival+Create, not a new pillar.
- from: insulated armor (goat_fur / chameleon / hoglin sets) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Climate-hardened gear for harsh-biome expeditions is exactly the kind of survivalist luxury good traders pay premium for — a cold-climate kit commands coin.
- from: cold_sweat:chameleon_molt / goat_fur (insulating materials) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: cold_sweat is grounded-survivalist; infusing a fur into an arcane reagent is a tone mismatch — the mod's loop is physical insulation, not mystical refinement. Forces a theme the mod doesn't have.

## endermoon   [anchors: survival (1)]
- LEAVE — no items or blocks; it's a spawn-weight event modifier only. Any weave on ender-pearl yield belongs to enderman drops (vanilla) or Enhanced Celestials (the parent event system), not this thin addon. Motif M-22 (lunar reagent) applies to the event but there is no endermoon-namespaced item to route — the connection would live on the ender pearl itself, which is vanilla. Don't force.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale loot tables (chest loot on the whales) | via: loot-table seeding (KubeJS global loot modifier) | to: aeronautics | motif: M-15 (boss-key unlock, loosely — landmark loot as a craft gate) | power: mid | tone: ok | verdict: ACCEPT | hook: Sky whales are reachable only by airship; seeding their loot with Aeronautics construction parts (hull components, engine plans) makes reaching them a meaningful aeronautics progression reward — the airship gets you there, and being there advances your airship.
- from: sky_whale loot tables | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: WEAK — the loot-table → coin path is generic and adds no distinct hook; the aeronautics seam (above) is the coherent 2nd pillar here. Economy can follow from aeronautics naturally without its own seam.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — structure datapack with no items or methods; any weave is an indirect loot-table edit, not a mod-level edge. The dossier correctly notes this; forcing a second pillar would be cosmetic.

## smokeleafindustries   [anchors: survival (1)]
- from: strain extracts / gummies (refined smokeleaf products) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The mod already ships its own dealer/stoner villager trades, proving a sell loop exists; routing refined extracts/gummies into Numismatics coin makes the strain farm a legitimate economy node — harvest, refine, sell.
- from: smokeleafindustries FE (generator output) | via: createaddition:charging (FE↔kinetic) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: The smokeleaf generator burns hemp biomass to FE; wiring it into Create's kinetic grid via Create Addition means the grow-room actively powers Create machines — the farm and the tech spine share an energy bus.
- from: raw buds/hemp harvest | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod has its own grinder chain (manual_grinder → grinder) that already does this; routing raw hemp through Create milling as well creates redundant paths with no mechanical advantage — prefer the FE/energy bridge (above) which adds something genuinely new.

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — structure datapack with no items or methods; floating ocean villages are exploration content with vanilla-block construction. No recipe edge is coherent; aeronautics pair value is ambient/navigational (a destination for sea-level ship routes) but generates no ledger entry.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / _netherite (upper-tier gliders) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: High-end paragliders are precision flight tools; requiring Create's mechanical_crafting (brass frames, precision mechanisms) to fabricate them ties the flight-gear ladder to the tech spine — you earn the better glider by reaching Create mid-game.
- from: vc_gliders "reinforced paper" feedstock | via: create:milling (paper pulp chain) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced paper is the most basic feedstock (iron tier) — gating it behind Create milling violates the "never gate a basic/everyday component behind a complex recipe" guardrail. Depth must scale with power; this doesn't.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris / ender_residue / void_worm_beak (exotic drops) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ambergris from whale-mimics and ender residue from void-touched creatures are exactly the occult raw materials spirits crave — feeding them into Occultism rituals makes hunting Alex's rarest fauna a magic-progression gate.
- from: alexsmobs:bear_dust / bear_fur / skunk_spray (mid-tier drops) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Bear dust and pungent fauna extracts as arcane infusion reagents — the naturalist and the arcanist both need to venture into the wild, so the biology of Alex's world feeds Ars Nouveau's magic web.
- from: alexsmobs rare drops (ambergris, ancient_dart, crystalized_banana_slug_mucus) | via: numismatics sell/bounty | to: economy | motif: M-09 | power: mid/endgame | tone: ok | verdict: REJECT | reason: the magic routing (above, two ACCEPT rows) is the stronger 2nd pillar; the economy angle is valid but tertiary — don't pile on a third pillar for a mod that already has two coherent weaves. Flag for later if the economy pillar needs more inputs.

## formations   [anchors: survival (1)]
- LEAVE — cosmetic scatter-structure worldgen with no items (bar the template_editor tool, which is a dev utility). No recipe edge is coherent; any loot-table tie-in belongs to the structures' content, not to Formations itself.

## createoreexcavation   [anchors: Create (1)]
- from: vein table (configurable per-chunk infinite ore veins) | via: createoreexcavation:vein recipe type → numismatics mint path (ore → processed → coin) | to: economy | motif: M-08 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: Veins are regional and infinite-but-slow; feeding coin-grade metals (silver, gold) through the drilling chain and into the Numismatics mint makes the Create drilling base a literal money operation — specialization pays off.
- from: vein table seeded with magic ore (e.g. createnuclear uranium, arcane crystals) | via: createoreexcavation:drilling → magic processing (occultism:crushing or ars_nouveau:imbuement) | to: magic | motif: M-18 | power: endgame | tone: ok | verdict: REJECT | reason: the vein table is a pack-design lever, not a smokeleaf/alexsmobs-style item join; the magic routing is M-18 (spirit acquisition) territory only loosely — better to leave the magic-ore angle as a pack-config note rather than a ledger weave, since the vein recipe type is entirely configurable. The economy seam (M-08) is the clean and specific one here.

== CHUNK COMPLETE ==

