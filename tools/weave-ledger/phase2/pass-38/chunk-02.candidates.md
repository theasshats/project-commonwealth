# Phase 2 candidates — chunk-02

## incontrol   [anchors: support (server-util/QoL) (1)]
- LEAVE — config-only spawn/loot/XP rule engine; 0 blocks, 0 items, no registered methods, no routable material. It can *enable* the scarcity foundation (region-gating spawns/drops that feed M-02/M-30), but that is infrastructure shaping other mods' tables, not a weave-able node of its own. Genuine zero-surface admin tool.

## platform   [anchors: support (library/API) (1)]
- LEAVE — pure code library (ItsBlackGear's Architectury wrapper); 0 blocks, 0 items, no gameplay surface. The single biome-modifier is its own framework hook, not player content. Nothing to weave.

## shulkerboxtooltip   [anchors: support (QoL/client) (1)]
- LEAVE — client-side container-preview tooltip; 0 items/blocks, informational overlay only. No content surface to route through any method.

## farm_and_charm   [anchors: survival (1)]
- from: barley/oat grain | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: take your barley/oat to a Create millstone for flour, threading the farmhouse bread chain onto the Create spine alongside its own crafting-bowl path.
- from: barley/oat (grain) | via: create_central_kitchen / farmersdelight:cooking | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: barley/oat feed Create's Central Kitchen mechanical-cooking automation (this farm is a grain producer; CCK automates the meals) — a cross-route dependency that pulls farm output through the Create kitchen.
- from: barley/oat | via: alcohol_industry:alcohol_boiling / vinery ferment | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: barley is the brewer's grain — ferment/age it (Alcohol Industry boiling) into ale/spirits that must sit to gain value, creating an aging specialist who buys raw grain.
- from: feeding-trough/coop husbandry surplus (meat/eggs/butter) | via: minecolonies request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony's cooks/restaurant want bulk eggs, butter and meat — the "feed-for-more-drops" husbandry loop becomes a colony-provisioning production engine, not a vendor sale.
- from: nettle/ribwort tea, butter, dishes | via: numismatics mint (bare sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this is the dossier's old "luxury good → coin" suggestion; M-09 is RETIRED (economy is player-run, "sellable" is the ambient endpoint, not a weave). The real demand-gate is the colony/diet route already captured above (M-28) and the diet-variety pull is ambient food use (M-27 n/a), so no standalone weave.
- from: fertilized farmland / soil boost | via: — | to: — | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: growth-boost soil is an everyday self-contained farming convenience; no method WANTS it and forcing a Create/magic tie would gate a basic. No coherent cross-system pull.

## fishingreal   [anchors: survival (1)]
- LEAVE — pure behavior tweak (reeled fish item -> live fish entity, datapack-mapped); 0 items/blocks of its own, no method to feed. Any weave belongs to the fish-content/cooking mods it sits beneath (createfisheryindustry, farmersdelight, spawn's casting net), not here. Forcing an edge would be arbitrary.

## undergroundworlds   [anchors: survival (1)]
- from: spider_fang (Black Recluse drop) | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the recluse's fang is a poison/venom reagent — transmute it via Occultism spirit-fire into an occult essence, giving a dungeon mob-drop a magic use (M-02 mob-drop reagent sink).
- from: spider_fang | via: minecolonies request / emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist farms the recluse dungeon for fangs and trades them to the magic/alchemy player who needs the reagent — the supplier side of the danger route (M-34 combat-route supply, completing the M-02 sink).
- from: temple/pyramid brick deco (chiseled/cracked/mossy variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: surplus dungeon brick crushes back to sand/gravel + an XP nugget (lossy) so the building set isn't a dead-end palette — light Create recycle edge.
- from: desert_charm / antidote_flask (immunity charms) | via: ars_nouveau:enchanting_apparatus / imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: these are finished single-purpose Curios charms (blindness/poison immunity) won as dungeon loot, not loose reagents; routing a complete utility item through an arcane infusion to make a "better charm" is arbitrary gilding, and the immunity niche already overlaps potions. No clean material-pull.
- from: freezing tools (axe/sword/etc.) | via: cataclysm:weapon_fusion / amethyst_bless | to: survival | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: themed on-hit weapons that are self-contained dungeon rewards; no motif covers "fuse a found weapon into another mod's weapon," and Cataclysm fusion is reserved for its own boss gear. Tone clash (subterranean-adventure vs. Cataclysm titan-boss). no-motif.

## sparsestructures   [anchors: support (QoL/worldgen-tuning) (1)]
- LEAVE — config-only structure-spacing multiplier (spreadFactor); 0 items/blocks, operates on the placement registry. It *supports* the scarcity foundation by spreading structures thinner (more travel to reach loot, reinforcing M-30/regionality), but that is infrastructure tuning, not a routable node. Genuine zero-surface utility.

## endermoon   [anchors: survival (1)]
- from: Ender Moon lunar event (enderman spawn surge -> ender pearls) | via: M-22 lunar-event gating on a Create/magic recipe | to: magic | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: M-22 is the right concept (a lunar-gated reagent), but endermoon owns NO item — it only reweights spawns. The gateable reagent is the vanilla ender pearl / the enhancedcelestials event registry, so the M-22 weave must be authored on the pearl or the parent event system (already its own candidate elsewhere), not on this add-on. Recording the considered link; nothing to author on endermoon itself.
- LEAVE — spawn-weight-only Enhanced Celestials event with 0 items/blocks and no loot table; the only routable surface (ender-pearl supply, the event hook) belongs to vanilla/enhancedcelestials. No content of its own to weave.

## ritchiesprojectilelib   [anchors: support (library/API) (1)]
- LEAVE — projectile/ballistics code library (backbone of Create Big Cannons); 0 items/blocks, pure API. Indirectly serves Create/aeronautics via its dependents, but exposes no material or method of its own. Genuine zero-content library.

## extradelight   [anchors: survival, Create (2)]
- from: coffee/garlic/citrus crops + grain | via: create:milling / create:pressing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: deepen the existing Create tie — route coffee/sugar grinding, grain->flour, and citrus/fruit pressing through Create's millstone/press so the bakery reads as Create's downstream, not a parallel kitchen (extends the current create:mixing inbound weave).
- from: Vat/Evaporator fluid reduction (salt, syrups) | via: create:mixing (heated) / tfmg:distillation | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the reduced-fluid intermediates (syrup, brine) are feedstock other Create/cooking recipes want — a byproduct->input circularity rather than a one-shot, threading the Vat into the wider process web.
- from: feasts / high-tier dishes | via: minecolonies request / restaurant hut | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a 43-feast endgame kitchen is exactly what a colony's restaurant + diet-variety demand consume in bulk — the cook specializes, the colony provisions (M-28 colony route), gating real demand instead of a flat sale.
- REWORK: existing dossier 2nd-anchor "feasts as sellable luxury goods via numismatics [M-09]" — M-09 is RETIRED; a bare sell link isn't a weave. Re-express as the M-28 colony-provisioning demand-gate above (and ambient diet-variety pull, which needs no motif). Drop the M-09 framing.
- from: coffee (caffeine/energy food) | via: cold_sweat config hook | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: a coffee->warmth/Cold-Sweat tie is tempting but everyday coffee is a basic crop output; no accepted motif covers ad-hoc food->temperature config, and M-16 seasonal/M-26 consumption already carry food's survival role. Don't author a one-off. no-motif.
- REWORK: existing Create anchor (create:mixing inbound) — OK, connections sound. The mixing tie is coherent (Create fluids feed its stations) and survives red-team; the deepening links above strengthen rather than replace it.
