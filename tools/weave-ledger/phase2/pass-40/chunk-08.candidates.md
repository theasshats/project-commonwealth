# Phase 2 candidates — chunk-08 (context-fed)

## knightlib   [anchors: support (1)]
LEAVE — support library; Knight Quest is not in the pack so all content items (great_chalice, grail, homunculus, essences) are inert. Prior passes correctly rejected M-02/M-11 attempts on the essence items. No active material surface to route.

## appleskin   [anchors: support (1)]
LEAVE — HUD food-display only; zero items, zero mechanics, zero recipes. Nothing to route.

## createpickywheels   [anchors: Create (1)]
- CHALLENGE | from: water-wheel placement (River-biome gate) | via: config-tie / behavioral | to: survival | motif: M-16 | verdict: REJECT | hook: M-16 is a *seasonal* reagent motif (time-gated input); the River-biome requirement is geography-gated, not time-gated — calling it M-16 misuses the motif. Accepted rows citing M-16 for the water wheel should be re-tagged M-30 (regional-scarcity gate: the right power source is region-locked, making early-game Create power placement a geographic specialization choice).
- CHALLENGE | from: windmill placement (open-air + Overworld gate) | via: config-tie / behavioral | to: survival | motif: M-16 | verdict: REJECT | hook: windmill gate is dimension/open-air constrained, not seasonal; M-16 is being stretched here. The correct read is that windmill power is geographically regionalized (M-30) — you can't build a windmill underground or in the Nether, so power supply is world-region-locked, the same scarcity mechanic as ore regionality.
- NEW | from: windmill on Aeronautics ship deck | via: config behavioral constraint | to: aeronautics | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the open-air + Overworld-only requirement means a windmill mounted on a ship deck fails in caves or the Nether — a natural constraint that distinguishes windmill-powered from engine-powered vessels and gives the aeronautics build tier real meaning (you equip the right power source for the route).

## minecolonies_tweaks   [anchors: support (1)]
- NEW | from: minecolonies_tweaks:inventoryscroll / copyscroll (colony-storage access tool) | via: recipe (M-33 service-for-hire framing) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony administrator running a scroll-stocked storefront performs *labor* for other players — remote stock-checking and inventory pulls are a service, not a good; the scroll is the interface for that colony-logistics trade, fitting the service-for-hire player-economy axis.

## betterpingdisplay   [anchors: support (1)]
LEAVE — numerical ping display only; no items, no mechanics. Nothing to route.

## mcwstairs   [anchors: support/decoration (1)]
- CHALLENGE | from: mcwstairs stone/brick stair variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: the split vote (15 ACCEPT / 16 REJECT) reflects genuine ambiguity; the dossier itself calls this WEAK. The M-04 motif exists for deco-family blocks where the crush-back is a deliberate recycling path — but with 224 stair variants across stone AND wood families, a wholesale crushing pass creates recipe clutter (224 new crush recipes) for marginal gameplay value. The decoration palette is a sanctioned support anchor; a targeted deco-family crush pass is better scoped to a later builder-content sweep, not this mod alone.
- NEW | from: mcwstairs wood platform / railing blocks | via: woodworks:sawmill (the sawmill registered in the methods palette) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the woodworks sawmill can recut wood-family stair/platform/railing variants into planks or strips — a consistent wood-processing step that pulls architectural deco into the Create-adjacent wood-cutting pipeline without needing a new motif.

## mushroomquest   [anchors: survival (1)]
- NEW | from: mushroomquest:resin_orb (sticky amber-like resin block item) | via: create:compacting | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: compacting resin orbs under heat yields a processed resin sealant usable in Create mechanical-crafting gaskets or as a waterproofing intermediate — an untouched item the mod ships that has a clear industrial-material read nobody has proposed yet.
- NEW | from: mushroomquest glowshrooms (blue / green / magenta) | via: create:haunting (soul fire transmutation) | to: magic | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: glowshrooms routed through Create haunting yield a soul-infused spore — a bioluminescent reagent distinct from vanilla glowstone that feeds the occult web; the haunting method already bridges Create to occultism and the glowing-fungus-to-spirit-material reading is thematically coherent.
- CHALLENGE | from: mushroomquest deadly / mythical caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | verdict: REJECT | hook: existing ACCEPT rows (21 votes) are well-founded on M-11 — keeping this as is. No challenge warranted; the reagent use of rare mushroom caps as occultism/ars inputs is the strongest second anchor here and prior passes have already argued it well.

## mutantszombies   [anchors: survival (1)]
- CHALLENGE | from: mutantszombies boss-class variants (Mutant Brute, Rotten Mutant) | via: loot-seed | to: economy | motif: M-34 | verdict: REJECT | hook: M-34 (combat-route supply) requires a unique loot drop that a combat specialist farms and trades to non-combat players; the dossier and AUTO data confirm `loot=no` and no special drops — only spawn eggs exist. There is no supply chain to form; rows that ACCEPT M-34 here are assuming drops that don't exist. The mod provides danger pressure (survival) only, which is already its anchor. A loot-seed could be authored *into* their tables (a Phase-3 action), but as a Phase-2 proposal on existing content this is premature — flag as loot-seed candidate for Phase-3 rather than accepting M-34 now.
- NEW | from: mutantszombies increased mob pressure (7 harder zombie variants) | via: loot-seed (Phase-3 authoring action — seed a unique mutant drop into tables) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a unique mutant fragment or ichor into the variant loot tables gives the combat specialist a farmable supply that non-combat crafters need; this makes the danger-pressure anchor dual-role (danger + supply) without requiring the drops to exist today — the proposal is the Phase-3 loot-table action.

## gtmogs   [anchors: survival, economy (2)]
- CHALLENGE | from: gtmogs vein definitions (regional scarce ores) | via: config | to: create | motif: M-03 | verdict: REJECT | hook: the 1 ACCEPT row here misattributes — gtmogs is the worldgen *framework*, not the ore content. M-03 (create:crushing ore-doubling) applies to the actual ore blocks the pack's KubeJS vein definitions produce; gtmogs itself registers no ore items and does no crushing. Tagging the framework mod with M-03 conflates the tool with the output it enables; downstream ore weaves belong on the ore-bearing mods or on Create itself, not on gtmogs. This is an infrastructure mod correctly at 2 anchors; no additional motif needed.

## fluid   [anchors: Create, aeronautics (2)]
- NEW | from: fluid:honeycomb_mold + honey fluid | via: create:filling (fill mold with honey fluid) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the honeycomb_mold is an underexplored item — filling it with honey fluid yields a cast honeycomb sweet that feeds into create_factory's confectionery chain; one light step connecting the fluid mod's only food-adjacent item into the food-processing web.
- NEW | from: fluid:aqueduct / copper_tap (open-channel flow delivery) | via: config-tie (Serene Seasons seasonal crop watering — aqueducts carry snowmelt in spring, frost-block in winter) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the aqueduct delivering water to crop plots has an inherent seasonal dependency — spring melt fills the channel, winter freezes it — making irrigation infrastructure a seasonal constraint on farming, a genuine survival-pressure tie that no other fluid-mod row has framed correctly.
- CHALLENGE | from: fluid:centrifugal_pump / smart_fluid_interface | via: aeronautics ship build (M-23/M-24) | to: aeronautics | motif: M-23 | verdict: REJECT | hook: the split ACCEPT rows for M-23/M-24 (centrifugal pump as a structural/drivetrain aeronautics component) apply the wrong motif — M-23 is structural alloy → airframe/hull and M-24 is mechanical component → propulsion/control. A fluid pump is neither hull material nor a drivetrain control surface; it's plumbing. The correct read is that fluid:centrifugal_pump is *already* the aeronautics anchor as functional ship-board fuel/coolant routing (the existing Create + aeronautics dual anchor captures this without needing a new motif label on a pump that doesn't structurally build the ship).

## securitycraft   [anchors: support (1)]
- NEW | from: securitycraft:limited_use_keycard (limited-charge access card) | via: the built-in wear mechanic (finite uses → recurring craft demand) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the keycard has a fixed use-count before it expires — this is a native consumption sink: players must repeatedly craft replacement keycards, creating continuous demand on whatever materials the keycard recipe requires; the wear is built in, not a custom mechanic, making this a clean M-26 application that no existing row has framed.
- CHALLENGE | from: securitycraft reinforced block / keycard | via: recipe (keycard reader requires a Numismatics coin as component) | to: economy | motif: M-08 | verdict: REJECT | hook: the 9-vote REJECT consensus here is correct and should stay. Coins as crafting ingredients is a coin-sink (M-09 retired), not player-minted currency (M-08). The existing REJECT reasoning is sound; no new angle rescues this.

## invtweaksemuforipn   [anchors: support (1)]
LEAVE — client-only InvTweaks keybind emulation shim; no items, no mechanics, no recipe surface. Nothing to route.

## create_factory   [anchors: Create, survival (2)]
- NEW | from: create_factory:sweet_berries_jam fluid (jam output) | via: Serene Seasons config-tie (sweet berries are summer/fall only; jam production is supply-gated by season) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the jam line depends on sweet berries, which Serene Seasons makes summer/fall seasonal — the confectionery factory has a genuine harvest-window supply constraint that forces stockpiling or trading, a quieter M-16 tie than an overt reagent gate but mechanically real and not yet clearly accepted in prior rows.
- NEW | from: create_factory:cream_bucket (cream fluid) | via: create_cheese:maturing | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cream poured into the cheese-maturing vat over time yields aged dairy — a natural maturation chain that threads the confectionery mod's cream fluid into the cheese production line, adding a time-cost to the dairy intermediate and creating a specialist opportunity (the dairy-to-cheese converter).
- CHALLENGE | from: create_factory cream/jam fluids | via: ars_nouveau:imbuement (sweet essence / sweetener as imbuement catalyst) | to: magic | motif: M-10 | verdict: REJECT | hook: the 5-vote REJECT consensus on this is correct. Honey and jam have no established arcane resonance in this pack's magic web; forcing them as imbuement catalysts is thematic noise. The dossier's own dossier-note says "M-09, MED" for the economy angle (which is itself retired) — the mod earns its 2 anchors from Create + survival without a magic reach.

## particlerain   [anchors: support (1)]
LEAVE — client-side weather particle rendering; no items, no mechanics, no material surface. Nothing to route.














