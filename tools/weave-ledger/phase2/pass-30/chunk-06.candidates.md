# Phase 2 candidates — chunk-06

## betterendisland   [anchors: survival (1)]
LEAVE — zero items, zero loot tables, zero recipe methods; pure End-island structure overhaul. No material surface to route, no loot to seed. Nothing coherent to weave.

## knightlib   [anchors: support/library (1)]
LEAVE — content items (great_chalice, grail, homunculus, essences) are inert without Knight Quest, which is not in the pack. Weaving dormant items is a defect. If Knight Quest is ever added, `knightlib:great_essence` is a natural M-02 mob-drop reagent candidate; log then.

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein table (regional ore output) | via: GTMOGS regional-ore-gen config | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: a drilling rig is the only way to tap a region's deep vein — the ore is region-locked, so it has to be traded outward
- from: createoreexcavation vein table | via: createoreexcavation:vein datapack / KubeJS — add scarce coin-grade metal veins (e.g. numismatics-mintable regional metal) as vein outputs, so the drilling machine is a necessary step in the mint chain | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: you need a drill rig to reach the deep seam that feeds the mint; minting is work, not just smelting
- from: createoreexcavation drill heads (diamond_drill / netherite_drill) | via: create:mechanical_crafting (already used) | to: Create | motif: (existing — already in Create pillar) | power: mid | tone: ok | verdict: REJECT | reason: no new 2nd-anchor added; drill heads already route through Create methods; this is a Create-internal recipe depth, not a cross-system weave
REWORK: existing Create anchor is sound (drill machine + heads built via create:crushing/cutting/milling/mechanical_crafting). No arbitrary connections found. OK — connections sound.

## cmparallelpipes   [anchors: Create (1)]
LEAVE — a single Pipe Wrench utility tool for Create fluid plumbing. No processing method, no foreign material surface, no loot. Forcing a second-pillar edge would be noise. QoL support for the Create spine; stays at 1 anchor by design.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries:generator (FE power output) | via: createaddition:charging / FE↔kinetic bridge | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: run the smokeleaf generator alongside a Create contraption and both systems share the power grid — the farm becomes a Create power source, not an isolated island
- from: raw hemp bud / dried hemp | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the hemp harvest can be milled down the same Create grain-processing line as other crops; hemp becomes a raw material the Create spine processes, not just a standalone farm chain
- from: refined extract / gummy | via: smokeleafindustries:synthesizer (its own method) as a consumption sink — extracts are consumed for their status effects, creating repeating demand | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: effects run out; players need a refill, so the strain farm has persistent demand and the extracts are a traded good
- from: refined extract / gummy | via: bare sell link (dossier's M-09 candidate) | to: economy | motif: M-09 (RETIRED) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "sellable luxury good" is ambient endpoint, not a weave. The consumption-demand link (M-26 above) is the real economy hook.
REWORK: dossier lists M-09 luxury→coin as STRONG — this is retired under #163/#240. Replace with M-26 (consumption demand) which is already accepted above.

## astikorcartsredux   [anchors: survival (1)]
- from: iron-tier cart implements (plow/reaper) requiring metal parts | via: create:pressing (iron sheet) — gate plow blade / reaper blade on Create iron sheets, so the farm-tool tier ties to the tech spine | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: a working plow needs a pressed iron blade — makes early farming tools a natural first Create goal
- from: supply cart (bulk-haul item) | via: astikorcartsredux supply-cart + aeronautics framing as pre-aeronautics ground logistics | to: aeronautics | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: the supply cart doesn't interact with Aeronautics systems and there's no shared recipe surface; this is a thematic parallel (both haul goods), not a cross-route dependency. M-29 requires an actual recipe that consumes an input from a different production route — not a metaphor.
- from: astikorcartsredux:oak_supply_cart | via: loot-seed into early-game dungeon/village loot | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: M-34 is combat-route supply (boss output farmed and traded); a supply cart is not a combat drop and doesn't gate a boss route. Wrong motif; no clean alternative motif for "put item in loot." LEAVE at 1-anchor + the M-05 link above.

## jakes-build-tools-2.0.1.5   [anchors: QoL/support (1)]
LEAVE — builder QoL tools (hammer, chisel, trowel, magnet, rope-ladder, tape-measure, hard-hat) with vanilla craft recipes; no processing surface, no loot, no foreign-material method. A forced Create-gating of builder tools is a recipe-noise edge (they're consumable utilities, not progression items). Stays support-role.

## create   [anchors: Create (1)]
LEAVE — Create is the method hub, not a recipient. The dossier correctly identifies this: other mods weave INTO Create's 17 recipe-types; authoring edges that consume Create itself would invert the design logic. No 2nd-anchor weave proposed. OK — hub role is by design; connections sound.

## better_lib   [anchors: support/library (1)]
LEAVE — pure API/config/messaging library; zero items, zero loot, zero recipe methods. Genuine zero-content library.

## ponderjs   [anchors: support (1)]
LEAVE — pure KubeJS scripting layer for Create's Ponder documentation system; no items, no loot, no processing surface. Genuine zero-content code library.

## create_compressed   [anchors: Create (1)]
LEAVE — Create-internal storage compression (9:1 crushed-ore/sheet/flour blocks, already using create:crushing/milling/mixing/splashing/sandpaper_polishing). No foreign material surface to route; adding a 2nd-pillar edge would be forcing an internal Create support tool into a role it doesn't serve. Stays 1 anchor.

## yungsapi   [anchors: support/library (1)]
LEAVE — structure/jigsaw API library for YUNG's mods; no items, no loot, no recipe methods. Genuine zero-content library.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron / _diamond (mid-tier) | via: create:pressing — require Create iron/copper sheet as the "reinforced panel" in the glider recipe, gating the mid-tier glider on the Create spine | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a functional paraglider needs pressed metal panels — anyone who wants to fly has to touch Create first
- from: vc_gliders:paraglider_netherite (endgame) | via: create:sequenced_assembly — multi-stage assembly of the netherite glider (framework → attach nether-treated panels → fold) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier glider is a precision instrument, not a table craft; the sequenced assembly earns the flight time
- from: vc_gliders reinforced-paper (everyday tier) | via: create:milling (paper → pulp → reinforced paper analog) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced-paper is an everyday feedstock; gating it behind Create milling risks blocking the entry-level glider (iron tier) — "never gate a basic/everyday component behind a complex recipe." M-05 on the mid-tier already anchors the Create link appropriately. Keep the entry iron glider accessible.
REWORK: dossier lists M-05 and M-12 as candidates. M-05 on mid/endgame tiers — ACCEPT (as above). M-12 on everyday reinforced paper — REJECT (depth-scaling guardrail). The netherite tier is a good M-06 target. OK on the aeronautics anchor.

## curios   [anchors: support/library (1)]
LEAVE — accessory-slot API framework; no items, no loot, no recipe methods. Genuine zero-content library (its weave value is letting Ars/Iron's accessories exist, but that's the dependent mods' surface to weave, not Curios' own).

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert novelty readable item (the Bible); no mechanics, no loot, no processing surface. Any forced recipe edge would be noise. Genuine zero-content flavor item.

## resourcefullib   [anchors: support/library (1)]
LEAVE — pure utility/API library; zero items, zero loot, zero recipe methods. Genuine zero-content library.

## modulargolems   [anchors: Create (1)]
- from: modulargolems golem parts (mid-tier metal bodies) | via: modulargolems:golem_assemble — require a mob/boss-tier drop (Cataclysm cursium, Ice&Fire dragonsteel) as the core/catalyst material for top-tier golems | to: survival | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dragonsteel golem requires dragon-slaying first — the construct's power is earned through its metal's danger
- from: modulargolems golem core (magic-class body) | via: modulargolems:golem_assemble — require an Ars Nouveau source gem or Occultism otherstone as the arcane core for an "arcane golem" class | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the arcane golem runs on magic; its core is drawn from the source-gem web, so making golems drains the magic economy
- from: top-tier golem metals (dragonsteel / cursium) | via: boss routes — these metals are already boss drops (Ice&Fire / Cataclysm); M-02 above already covers this | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: REJECT | reason: M-34 is the economy-side of the boss dual-role (boss-slayer trades drops to non-combat players); this is correctly M-02 (mob-drop reagent → magic/golem input). The M-34 framing would require the drop to flow outward as a traded good, but here the golem builder IS consuming it. One accepted candidate (M-02) covers the combat-gate. Avoid double-counting.
REWORK: dossier lists M-02 (survival/combat metals) and M-10 (magic core) as candidates. Both are sound; both accepted above. Existing Create anchor is solid (uses create:crushing, create:mechanical_crafting, create:sequenced_assembly). OK — connections sound.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:mithril / pyrium ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing mithril ore gives a doubled yield — the magic metals reward Create investment, and the ore doubler is already the standard deal
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement — bond arcane_essence ↔ ars_nouveau:source_gem as the cross-magic-pillar currency bridge | to: magic (cross-system) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's arcane essence and Ars source gems are the same deep magic; swapping between them via the imbuement table links both schools into one currency web
- from: mob drops produced by Iron's mobs (apothecarist, ice_spider, etc.) | via: irons_spellbooks:alchemist_cauldron_brew as a brew input | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the apothecarist harvested from a dungeon fuels the cauldron — mob danger has a downstream brewing reward
- from: irons_spellbooks:arcane_essence (bare sell) | via: economy as a traded commodity | to: economy | motif: M-09 (RETIRED) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired. Ambient sellability is not a weave.
REWORK: dossier notes the mod is already ≥2 anchors (magic + Create via emptying/filling). The M-03 ore-doubling and M-01 cross-magic currency bridge add depth, not redundancy. arcane_essence is RESERVED in reagent-ownership table as Iron's-side currency bonded to source via M-01 — the M-01 ACCEPT above is exactly the right use of that reserved slot. OK — existing connections sound; deepening with M-01/M-02/M-03.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling — mill ginger root into dried ginger powder / spice dust as a cooking ingredient in the food-processing web | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the same Create windmill that grinds grain also grinds the winter-harvested ginger into spice — one machine, two crops
- from: snowyspirit:ginger (seasonal — only wild in sparse jungle; scarcer in winter via Serene Seasons) | via: season-gated crop (Serene Seasons — ginger unavailable in summer/fall or only sprouts in winter) → feeds Create milling / Farmer's Delight | to: survival (Serene Seasons gate) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger spice is only harvestable in winter, so seasonal bakers have to plan ahead or trade from the player who hoarded it
- from: snowyspirit sled (snow-surface transport) | via: thematic aeronautics overlap | to: aeronautics | motif: (no-motif) | power: everyday | tone: clash | verdict: REJECT | reason: the sled doesn't interact with Aeronautics recipes or systems; it's ground traversal on snow, not logistics-network integration. No motif covers "thematic parallel." REJECT.
- from: snowyspirit:eggnog / gingerbread_cookie (food) | via: farmersdelight:cooking — add ginger as a cooking ingredient for a seasonal dish recipe | to: survival (food web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: gingerbread cookies and eggnog belong in the Farmer's Delight recipe web naturally; the seasonal crop feeds the survival food chain
REWORK: dossier lists M-12 (ginger chain + Create milling) as the main candidate — ACCEPT. M-09 (seasonal trade goods) — REJECT per retirement. Serene Seasons gate (M-16) is a strong angle the dossier flagged implicitly but didn't name. Sled→aeronautics is weak and correctly flagged weak by dossier. OK on survival anchor.

## alternate_current   [anchors: support/performance (1)]
LEAVE — silent redstone-propagation performance patch; zero items, zero loot, zero recipe methods. Genuine zero-content perf mod.

== CHUNK COMPLETE ==
