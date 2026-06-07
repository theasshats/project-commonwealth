# Phase 2 candidates — chunk-16 (pass-34, blind)

## sliceanddice   [anchors: Create, survival (2)]
- from: foreign crops/meats/logs | via: sliceanddice slicer (auto farmersdelight:cutting) | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: any pack veg/meat gains a kinetic auto-slice prep step on the Create spine — but light, it's a basic food op
- from: season-gated crop | via: sprinkler/fertilizer growth accel + season-locked input | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: the Fertilizer/Sprinkler become the in-season force-growth answer to Serene Seasons' out-of-season penalty, tying the food-automation block to the seasonal pressure lever
- REWORK: existing anchors sound — already a deliberate M-12 bridge. No weak edge. The two ACCEPTs above just deepen the survival side (seasonal hook) rather than fix anything.

## cloth_config   [anchors: support (1)]
- LEAVE — pure config-screen library; zero content surface, no items/blocks/methods to route.

## dndesires   [anchors: Create (1, deep)]
- from: foreign crops/drops | via: dndesires:freezing / seething / sanding fan recipes | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: its catalyst-sail fan processing is a hungry foreign-item sink — route a crop/drop prep step through freezing/seething as an alt to vanilla cooking
- from: rubber / sap | via: dndesires:hydraulic_compacting | to: Create-spine intermediate | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber as a cross-route intermediate other machines consume (e.g. seals/belts), captured industrial feedstock rather than a dead-end good
- from: dndesires:haunting_sail | via: create:haunting native bridge | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the haunting sail is literally Create's soul-fire in bulk — an obvious Create→occult transmute seam feeding the magic pillar at scale
- from: cardboard packaging / bore blocks | via: aeronautics ship loadout part | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: cardboard packaging is generic Create logistics flavor, not a structural/drivetrain part; forcing it onto airship recipes is arbitrary (red-teamed in dossier as WEAK-MED)
- from: rubber/processed | via: mint for coin | to: economy | motif: — | power: mid | tone: — | verdict: REJECT | reason: bare sell link; economy is player-run, "tradeable scarcity good" is the ambient endpoint not a weave (the M-32 byproduct→input route above is the real demand-gate)

## curios   [anchors: support (1)]
- LEAVE — equipment-slot framework; no items of its own, hosts foreign trinkets only, nothing to route.

## vinery   [anchors: survival (1)]
- from: grape/apple must → aged wine | via: vinery wine_fermentation + in-world bottle aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: wine must SIT to gain value (1 year/~20 days), creating a vintner specialist whose aged stock is worth more than fresh — the value-adding time axis, not a bare sale
- from: grapes/apples | via: create:milling / create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route fruit through Create press/mill into juice as the automatable alt to jumping in the grapevine pot — light single step, basic input
- from: wines | via: numismatics luxury sale | to: economy | motif: M-09 | power: mid | tone: — | verdict: REJECT | reason: dossier cites retired M-09 (luxury good→coin); bare sell is the ambient endpoint, not a weave. Real economy gate is the M-35 maturation above.
- REWORK: dossier's listed economy 2nd-anchor is the retired M-09 luxury-sale — replace it with the M-35 maturation framing (above). Vinery's fermentation/aging IS the canonical M-35 method (it's named in the M-35 row), so that's its sound 2nd anchor.

## resourcefullib   [anchors: support (1)]
- LEAVE — pure cross-platform API library; zero items, zero methods.

## knightlib   [anchors: support (1)]
- LEAVE — utility library; its few content items (chalice/grail/essence) are inert without Knight Quest, which isn't in the pack — do not weave dead items (per dossier).

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor redstone | via: Create logic gating (gearshift/contraption) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the season sensor's redstone output drives Create contraptions — auto-switch crops or open greenhouse shutters by season, threading the seasonal clock into the Create spine
- from: season-locked produce | via: GTMOGS-style regional + seasonal scarcity → recipe input | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: out-of-season crops become regionally/temporally scarce inputs a crew can't all grow year-round, forcing cross-player trade (demand-gating, not a bare sale)
- from: out-of-season produce | via: numismatics bounty sale | to: economy | motif: M-09 | power: weak | tone: — | verdict: REJECT | reason: dossier cites retired M-09 (luxury→coin); bare sell rejected. M-30 scarcity-gate above is the real economy weave.
- REWORK: dossier's economy candidate is retired-M-09 — re-express as M-30 regional/seasonal scarcity (above). Seasons is explicitly a priority M-16 driver, so its seasonal-reagent role (feeding crops into season-gated machine recipes) is also natural — but that's authored on the consuming machines, not here.

## configuration   [anchors: support (1)]
- LEAVE — pure config-screen library; no content.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:thorium_ore (2 biome-modifiers) | via: GTMOGS regional ore-gen → reactor fuel input | to: scarcity/economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: Thorium is a scarce regional ore gating nuclear power, so reactor-tier energy is region-locked and must be traded for — anchors the electric/nuclear tier to the scarcity foundation
- from: createaddition/new-age FE charging | via: createaddition:charging (or energising) of a magic focus/reagent | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: thread the electric tier into magic gear — charge a high-tier focus/reagent via the Energiser, only where it makes sense (endgame keystone, not basics)
- from: energised endgame keystone | via: create_new_age:energising / create:sequenced_assembly | to: Create-depth | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a magic/aeronautics keystone gated through the Energiser as a multi-stage chain — depth scaled to the flagship power tier
- from: reactor/energised outputs | via: numismatics sellable | to: economy | motif: M-08 | power: endgame | tone: — | verdict: REJECT | reason: dossier frames as "high-tier sellables" (bare sell); minting only counts as M-08 when the player presses scarce metal into coin — generic high-tier output→coin is the ambient endpoint, rejected. The M-30 Thorium gate carries the real economy weave.

## rechiseled   [anchors: support — decoration palette (1)]
- from: chiseling recipe groups | via: rechiseledcreate Mechanical Chisel (Create power) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: the companion Mechanical Chisel runs the whole 600+ palette on Create rotation, routing decoration through the spine (dossier tagged M-04, but it's a kinetic deploy-style application of a part/tool, not lossy crushing — M-20 deploy-application fits better; either way the link is sound and already in-pack)
- REWORK: dossier's M-04 tag is a slight mis-cite (M-04 is lossy deco→raw crushing; the Mechanical Chisel is a 1:1 reversible kinetic conversion). Re-tag as M-20 deploy-application. Decoration palette is itself a sanctioned support anchor, so this is a plus, not a fix.

## modonomicon   [anchors: support — documentation (1)]
- LEAVE — guidebook engine; books are flavor/reference, no material to route.

## createimmersivetacz   [anchors: Create (1)]
- from: TACZ rounds/shells | via: M-34 combat-route supply (emergent trade) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: an arms-dealer specialist mass-produces ammo on Create chains and supplies it to combat players who can't run the factory — the supplier side of the combat economy, demand-gated by consumption-in-combat
- from: ammo as a consumed combat upkeep | via: spent-in-combat consumption sink | to: survival/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: rounds are fired and gone, so demand for ammo never zeroes — the consumption arrow that keeps the ammo trade turning
- from: brass plates / andesite alloy / gunpowder | via: create:sequenced_assembly inbound | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: its multi-stage ammo pipeline IS a sequenced-assembly keystone chain (incomplete_twelve_gauge_shell) — already deep on the Create spine; sound as-is
- from: ammo | via: numismatics sale | to: economy | motif: M-09 | power: mid | tone: — | verdict: REJECT | reason: dossier cites retired M-09 (processed good→coin); replaced by M-34/M-26 demand-gating above.
- REWORK: dossier's economy 2nd-anchor is retired-M-09 ammo→coin — re-express as M-34 combat-supply + M-26 consumption (above).

## createmetalwork   [anchors: Create (1)]
- from: c:crushed_raw_materials/* of scarce regional metals | via: GTMOGS regional ore-gen → its crush+melt yield bonus | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: it ups the yield of scarce regional metals, so a smelting specialist in an ore-rich region refines for everyone — the doubled metal is still region-locked, demand-gated by where ore spawns
- from: magic-mod metal ores (occultism/galosphere) | via: create:crushing ore-doubling | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: it already tags crushed forms for modded metals — routing magic-mod ores through its crush gives the magic side a Create doubling reward (vanilla smelt path stays)
- from: molten metals → player-pressed coin | via: create:* → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: its refined scarce metals are the natural feedstock a player presses into Numismatics coin — minting as a specialization controlling the settlement medium, not a vendor sale (the one genuine M-08 case in this chunk)
- REWORK: dossier's "M-08 coin from processed scarcity [STRONG]" is correctly framed (player-mint, not NPC sale) — connections sound; kept above.

## foodeffecttooltips   [anchors: support — client/QoL (1)]
- LEAVE — tooltip-only client display; no items, no world interaction.

## just_blahaj   [anchors: support — decoration (1)]
- LEAVE — pure aesthetic plush decoration crafted from vanilla wool/dye; forcing a Create/economy/magic edge is the failure mode (per dossier). Decoration is a sanctioned anchor.

## everycomp   [anchors: support — decoration/compat (1)]
- LEAVE — runtime compat generator; its outputs already ride the host mods' (Create/Macaw/sawmill) recipes, so any weaving belongs on those hosts, not here. No content of its own.

## fogoverrides   [anchors: support — client/QoL (1)]
- LEAVE — cosmetic fog config; no items or world interaction.

## solmaiddream   [anchors: survival (1)]
- from: varied foods fed to maids | via: diet-variety milestone stat-growth | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: feeding maids unique foods consumes the food pool against a growth reward — a second consumption sink pulling on farming/cooking output, reinforcing the diet-variety pressure (twin of the player diet system)
- from: maid food demand | via: touhou_little_maid companion side | to: magic | motif: — | power: weak | tone: clash | verdict: REJECT | reason: no-motif; the maid (TLM) is the companion/magic surface but THIS addon only adds a stat-growth layer over food — it doesn't feed the magic pillar, forcing an edge is artificial (per dossier)
- REWORK: dossier says "leave" but the M-26 consumption-sink reading gives it a genuine survival deepening (it amplifies food demand). Single-pillar but now with a clearer demand-gate hook; not a forced edge.

## create_hypertube   [anchors: Create, aeronautics (2)]
- from: bulk/perishable trade good movement | via: hypertube short-hop personnel/entity transit | to: economy/aeronautics | motif: M-31 | power: mid | tone: clash | verdict: REJECT | reason: hypertubes move players/entities, NOT items/bulk goods (no material throughput per dossier) — it can't serve the logistics-required-bulk-good role; its aeronautics anchor is personnel transit, already counted
- REWORK: OK — connections sound. Create (kinetic-crafted, sequenced_assembly) + aeronautics/logistics (personnel transport) are both genuine; no weak edge to fix. No coherent 3rd weave (it carries no material).

== CHUNK COMPLETE ==
