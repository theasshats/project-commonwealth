# Phase 2 candidates — chunk-11

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / salt_dust | via: create:crushing (M-03) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore in a Millstone or Crushing Wheels is the obvious first automation step — press the raw ore for double salt, tying the new mineral into the Create spine immediately.
- from: expandeddelight:cinnamon_log / cinnamon dust | via: create:milling (M-12) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Grind dried cinnamon bark in a Millstone → cinnamon dust reagent; keeps the spice supply scarce until automated.
- from: expandeddelight:cheese_wheel / aged cheese (time-gated output) | via: numismatics sell / M-09 | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; any food product is trivially sellable; no structural loop-close.
- from: expandeddelight:asparagus / chili / sweet_potato (seasonal crops) | via: Serene Seasons fertility window | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Slot these new crops into Serene Seasons' fertility config so each matures only in its fitting season — asparagus in spring, cranberry in autumn — making the Juicer's output genuinely scarce off-season.
REWORK: existing anchor is survival only (1). The M-03/M-12 accepts above add Create; salt_ore is a genuine ore-doubling candidate. No other weak connections to flag.

## ohthetreesyoullgrow   [anchors: support/library (1)]
LEAVE — zero items, zero methods, zero loot; pure worldgen/growth engine dependency. Nothing to weave.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: tavern/structure loot tables | via: loot-seed (add scarce magic reagents / boss-key fragments to vault loot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Tavern and dungeon vaults seeded with rare Ars/Iron's components or Occultism soul-gear recipes give explorers a reason to clear these structures beyond vanilla loot — discovery as a magic on-ramp.
- from: trial vault / ominous key loot | via: loot-seed (add coin or coin-adjacent rare to reward clearing) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable / coin-from-loot is the most trivial economy link; does not advance the loop distinctively. Coin is everywhere; this adds no scarcity signal.
- from: in-tavern cartographer trade | via: M-21 villager trade → Numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); also generic trade seam, not distinctive.
OK — exploration anchor is the right single anchor for a structure datapack; the M-02 loot-seed above is the meaningful second weave.

## betterendisland   [anchors: survival (1)]
LEAVE — zero items, zero methods, loot=no; structure cosmetic overhaul only, nothing to route.

## underground_village   [anchors: survival (1)]
- from: Stoneholm villagers (in-structure) | via: loot-seed (seat MineColonies supply-quest items or Numismatics-priced bounty board inside the village) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Placing a Bountiful board or Numismatics trade chest inside a Stoneholm village makes the underground settlement an economy hub — players seek it out for trade, not just exploration. Structurally distinctive because the underground location creates a genuine logistics challenge (aeronautics can't land there easily).
- from: underground_village structure | via: loot-seed (seed Create schematics / Ars Nouveau source-gem fragments into chest loot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: weak thematic fit — an underground stone village housing magic loot feels arbitrary without a dossier/lore hook. Better to keep magic seeding to specifically arcane structures.
OK — the M-14 bounty-board seat is distinctive (location-driven economy node, not generic coin drop).

## rhino   [anchors: support/library (1)]
LEAVE — zero items, zero methods; KubeJS JS engine, nothing to weave.

## s_a_b   [anchors: Create, aeronautics (2)]
OK — connections sound. Already ≥2 pillars (Create compacting/mixing + aeronautics armor). The M-06 sequenced-assembly deepening (hard steel plate as a sequenced step in hull construction) is optional enrichment but not required.
- from: s_a_b:hardsteelblock (high blast-resistance tier) | via: create:sequenced_assembly (M-06) | to: create/aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Require a sequenced-assembly step to laminate layers into a hard-steel hull plate — multi-pass construction mirrors GregTech-style depth and makes armored hulls a real production challenge for ship builders.

## platform   [anchors: support/library (1)]
LEAVE — zero items, zero methods, zero loot; pure developer API library.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
LEAVE — zero items, zero methods; Kotlin language adapter, nothing to weave.

## ctov   [anchors: survival (1)]
- from: ctov village loot tables (custom loot=yes) | via: loot-seed (inject Numismatics coins or Bountiful board as a default chest find in village chests) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seeding a coin purse or a bounty contract into CTOV's biome-themed village chests makes each village variant a natural economy waypoint — players explore to trade, not just loot; structurally distinctive because it ties the variety of villages to trade network breadth.
- from: ctov structure (cartographer / fletcher variants per biome) | via: M-21 villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 provisional and the broader villager-trade seam is already covered; no additional edge.
OK — surviving candidate is the M-14 loot-seed which advances survival→economy without being generic-sellable.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / soul_crystal / heart_of_the_deep | via: occultism:spirit_fire / ritual (M-11) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Soul Dust transmuted through Occultism's spirit fire becomes a high-tier occult essence — the Otherside dimension feeds the magic web, so descending into the sculk dark is how you advance magic end-game rather than it being a dead-end dimension.
- from: deeperdarker:soul_crystal | via: ars_nouveau:imbuement (M-10) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Imbue a Soul Crystal through the Ars Nouveau enchanting apparatus → a dark-attuned source gem or resonance component; the Otherside becomes an Ars progression gate, making magic players need to brave the dimension.
- from: deeperdarker:gloomslate / sculk_stone blocks | via: create:crushing (M-04) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushing gloomslate/sculk stone yields gravel + experience nugget — lossy recycle keeping the unique stone blocks from hoarding (already partly wired; formalizing closes the loop).
- from: deeperdarker:warden_carapace / reinforced echo shard | via: create:sequenced_assembly (M-06) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: warden carapace is thematically a boss-tier material (M-15 boss-key is better fit) and sequenced assembly here would overlap; save it for a dedicated M-15 gate on a Create machine that needs a "sculk core" component.
- from: deeperdarker:heart_of_the_deep | via: boss-key gating (M-15) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Heart of the Deep (gate to the Otherside dimension) doubles as the boss-key component for unlocking a late-Create machine or magical apparatus — tying Warden combat into the production loop.
- from: deeperdarker:soul_dust / soul materials | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; scarce soul materials are better anchored to magic (already accepted above).
REWORK: existing anchor is survival (1). The four accepted links above add magic (M-11/M-10) and Create (M-04, M-15), lifting to ≥3 systems — strong.

## mousetweaks   [anchors: support/QoL (1)]
LEAVE — zero items, zero methods; client input-handling only, nothing to weave.

## netmusic   [anchors: support/flavor (1)]
LEAVE — purely cosmetic audio; already has one cross-weave (TLM altar). No material to route; forcing a Create/economy edge would be contrived.

## accessories_compat_layer   [anchors: support/library (1)]
LEAVE — zero items, zero methods; API compat shim, nothing to weave.

## incontrol   [anchors: support/server-util (1)]
LEAVE — zero items, zero methods; config-only spawn/loot rule engine. Enabling infrastructure, not a loop node.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery (stores rotational energy) | via: createaddition:charging (M-17) | to: magic/tech | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: the kinetic_battery stores *kinetic SU*, not FE; createaddition:charging charges FE-based items. Mismatched energy types — no coherent bridge.
- from: create_connected:item_silo / inventory_bridge (logistics expansion) | via: aeronautics ship logistics — the silo/bridge blocks are natural on-ship storage and inventory management nodes | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is a structural-alloy motif (physical hull materials); inventory/logistics blocks on ships is configuration, not a recipe weave. No method to route material through; can't form a proper edge.
LEAVE — Create-internal QoL mod; its copycat/kinetic parts deepen the Create pillar but have no foreign material to route to a second system. Connections are sound within their anchor.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone season-change signal) | via: Create redstone-reader / gearshift logic — wire season signal into a Create contraption so automated farms shift crop or open greenhouse shutters by season | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A season_sensor feeding a Create gearshift lets players automate crop changeovers — the farming contraption is aware of the calendar, making seasonal scarcity a design problem Create solves rather than a raw penalty.
- from: out-of-season crops (scarce off-season produce) | via: numismatics / M-09 | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; out-of-season scarcity is already a survival pressure; coin-sell doesn't advance the loop distinctively.
REWORK: surviving M-16 link is the meaningful second anchor (survival→Create), matching the briefing's note that Serene Seasons is a priority survival lever.

## jeresources   [anchors: support/UI (1)]
LEAVE — zero items, zero methods; client-only documentation addon for JEI, nothing to weave.

## supplementaries   [anchors: Create, survival (2)]
OK — connections sound. Already ≥2 pillars (Create haunting/mixing/splashing + survival/food). Deeply cross-woven by nature; adding more edges is unnecessary.
- (latent) from: supplementaries:flax (c:crops/flax) | via: Serene Seasons fertility window (M-16) | to: survival/Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Register flax in Serene Seasons' spring/summer fertility window so rope supply tightens in winter — scarcity pressure on a Create-connected resource (rope/string are mechanical inputs) without adding a recipe.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charge an item) | via: charge Iron's Spellbooks magic gear / focus | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks gear or a magic focus that holds FE charge gets recharged at the tesla coil — the electrical layer directly feeds a magic player's upkeep, making the Create power grid relevant to magic progression.
- from: createaddition:seed_oil / bioethanol (crop-derived fuel) | via: create:mixing or liquid_burning as an aeronautics reserve fuel | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed oil / bioethanol as a lower-grade ship fuel — biofuel from farmed seeds powers smaller or less-efficient engines, giving agriculture a direct stake in aeronautics logistics (survival→economy loop arm).
- from: createaddition:seed_oil production chain | via: farmersdelight / Expanded Delight crop→oil | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Route Farmer's Delight / Expanded Delight oily crops (peanut, seed crops) through createaddition's liquid_burning chain to produce seed oil — the processing chain crosses survival→Create→aeronautics in one flow.
- from: createaddition:electrum_ingot | via: create:rolling (M-08 adjacent) → coin mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic coin-from-metal; electrum as a sellable metal is non-distinctive — economy de-emphasis.
REWORK: existing anchor is Create (1). Accepted links add magic (M-17) and aeronautics/survival (M-13/M-12), lifting to ≥3 — strong progression.

== CHUNK COMPLETE ==
