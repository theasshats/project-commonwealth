# Phase 2 candidates — chunk-15

## fluid   [anchors: create, aeronautics (2)]
- REWORK: OK — connections sound. Already at 2 anchors (Create spine fluid tooling + aeronautics/logistics). The dossier's 2nd-anchor note is correct: the centrifugal pump and smart fluid interfaces are genuine Create-spine parts used for fluid routing on airships and bases. No forced third needed.
- from: fluid:centrifugal_pump | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: The pump is a fluid-logistics device, not a drivetrain/propulsion component — routing it as M-24 (mechanical component→propulsion/control) misapplies the motif. It already carries the aeronautics anchor through its logistics role (piping fuel, water, etc. aboard ships). Forcing a recipe-seam here adds no new system bridge.
- from: fluid:neon_tube / deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Neon tubes are decorative copper/glass elements; a recycling crush path is mechanically coherent but adds nothing to the loop (the mod is already at 2 anchors and doesn't need the deco-recycle edge). Low payoff.

## do_a_barrel_roll   [anchors: support / client QoL (1)]
- LEAVE — pure client camera/movement behavior; zero items, zero recipe types, zero loot. No content surface to weave. The elytra-flight theme is aeronautics-adjacent but this mod touches vanilla elytra only, not Create Aeronautics ships or items.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood / soul gems (Soul Furnace outputs) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul-harvested blood and gems feed the spirit-fire transmutation web — the gothic-alchemy aesthetic matches Occultism perfectly, and it gives the Soul Furnace's reagents a system purpose beyond the private island.
- from: companions:crystallized_blood | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 via occultism:spirit_fire is the stronger and more thematically coherent path for dark soul-reagents; routing the same material through Ars imbuement as well would double-spend crystallized_blood without gaining a new system link. One clear conduit is enough.
- from: companions:relic_gold (boss drop from Sacred Pontiff) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic gold is explicitly named as a high-tier boss drop — smelting/processing it into coin through Create's mint is a natural economy bridge, and places the Companions boss in the M-15/M-08 supply chain.
- from: companions:copper_coin / nether_coin / end_coin | via: numismatics trade | to: economy | motif: M-21 | power: everyday | tone: clash | verdict: REJECT | reason: The mod ships its own parallel coin set. Bridging these private coins into Numismatics as equivalents risks a 1:1 round-trip swap (M-21 is provisional and the ledger specifically warns against competing coin systems). Better to leave the companions coins as purely flavor/vendor currency and not route them into the Numismatics economy. M-21 provisional + anti-round-trip rule.
- from: companions:voltaic_pillar / tesla_coil_block (deco-electrical blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: While deco recycling via M-04 is valid in principle, the Tesla/voltaic blocks are central decorative pillars of the mod's aesthetic — crushing them to copper scrap is a weak edge that adds no loop value for a mod that now has 2 anchors via ACCEPT above.
- REWORK: existing anchor is survival (1) — the two ACCEPTs above add magic + economy, bringing it to 3. No existing connections need rework since the mod had none authored yet.

## tipsmod   [anchors: support / QoL (1)]
- LEAVE — zero items, zero recipe types, zero loot. A UI-only loading-screen tip display; its only value is the tip text that maintainers can author. No content surface to weave.

## createadditionallogistics   [anchors: create, aeronautics (2)]
- REWORK: OK — connections sound. Already at 2 anchors (Create kinetics infrastructure + aeronautics/logistics via Stock-Keeper seats). The dossier's assessment is correct: lazy shafts/cogs are purely Create infrastructure (perf benefit), and the seat variants tie to logistics; a third anchor would be forced.
- from: createadditionallogistics:flexible_shaft variants | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Flexible shafts are transmission elements, not drivetrain/propulsion/control for Aeronautics — they belong to the Create spine (already the first anchor). Trying to make them an M-24 component overstretches the motif. The aeronautics anchor already exists via the seat variants.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice / coconut_husk (foods/fruit) | via: farmersdelight:cutting + farmersdelight:cooking | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tropical foods processed through Farmer's Delight cutting/cooking yield a distinct cuisine set (coconut soup, coconut cream), giving beach-biome exploration a food-chain payoff that feeds the diet system and produces a sellable regional food good.
- from: ecologics:coconut_husk (raw material, bowl substitute) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling dried coconut husk into coconut flour (a useful intermediate for baking/cooking recipes) draws the beach-biome crop into the Create spine at a light one-step cost — appropriate for an everyday ingredient, no deep chain required.
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: Azalea flowers are pretty but there is no established reason an azalea bloom would be an arcane attunement catalyst — the thematic link is too thin (vanilla floral ≠ arcane ingredient). Forcing an imbuement edge here is the kind of arbitrary connection the briefing warns against. No motif survives the red-team.
- from: ecologics:coconut / fruit/nut tagged items | via: extradelight:juicer | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Juiced coconut / nut drink is a regional luxury beverage that can be sold via Numismatics as a trade good; beach players supply it, inland players buy it — the exact scarcity-to-economy flow the loop needs.
- REWORK: existing anchor is survival (1). The three ACCEPTs add Create + economy (via M-12 processing chain + M-09 luxury good), bringing ecologics to 3 anchors. No existing connections to rework.

## betterendisland   [anchors: survival (1)]
- LEAVE — zero items, zero blocks, zero loot (loot=no confirmed by dossier). Pure structure/worldgen overhaul of the End main island; no content surface to weave. The End fight spectacle is survival/danger flavor but there is nothing to route through any method.

## dungeons_arise_seven_seas   [anchors: survival (ocean exploration / structures) (1)]
- from: galleon/fortress loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Nautical dungeon loot seeded with scarce processed metals / coin drops ties naval exploration directly into the economy — the player who risks the boardable galleon brings back trade-grade goods, not just raw loot. Ships the exploration→economy link.
- from: galleon/fortress loot chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed Bountiful bounty-targets into the galleon chests (or have the galleons themselves appear as bounty locations) so killing the nautical boss mobs or clearing the ship pays coin — combat → economy. The nautical danger-theme aligns perfectly with a seafaring bounty board.
- from: galleon/fortress loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed a signature magic drop (e.g. an Iron's spellbook, an Ars source gem cluster, or an Occultism ritual item) into the galleon's captain-chest loot so ocean exploration rewards magic progression — danger drives magic production.
- from: sunken-ruins loot | via: loot-seed | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Seed an aeronautics-relevant component or blueprint into the deepest sunken-ruins chest — a structural alloy plate (M-23) or control surface part — so the ocean frontier is a meaningful destination for aerial/naval players building higher-tier ships.
- REWORK: 1 anchor (survival). Four loot-seed ACCEPTs add economy (×2 via M-08/M-14), magic (M-02), and aeronautics (M-15), making this a well-connected structure mod with 4 anchors via loot alone — which is the correct approach for a loot=yes, items=0 mod.

## betterclouds   [anchors: support / visual (1)]
- LEAVE — pure client cloud renderer; zero items, zero blocks, zero loot, zero recipe types. No content surface to weave. Visual polish only.

## incontrol   [anchors: support / server-util (1)]
- LEAVE — config-only JSON rule engine; zero items, zero blocks, zero loot, zero recipe types. No content to route through any method. Its value is as enabling infrastructure for the pack's spawn/loot design (enforcing scarcity regionality), not as a node in the weave graph itself.

## ponderjs   [anchors: support / Create tooling (1)]
- LEAVE — zero-content packdev scripting API for animated Create-Ponder scenes; no items, no recipe types, no loot. It documents the Create spine rather than feeding a pillar.

## wits   [anchors: support / QoL-debug (1)]
- LEAVE — server-side /wits debug command; zero items, zero loot. A structure-identification utility with no material surface.

## createnuclear   [anchors: create (1)]
- from: createnuclear uranium ore (c:ores/uranium) → processed → refined fuel | via: create:crushing + create:mixing + numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Uranium is a deep-regional rare ore that requires a multi-step Create chain (crush → mill → mix → press) to refine into fuel rods — running that processed material through the Numismatics mint makes reactor-grade uranium a high-value trade good, exactly the scarcity→economy arc M-08 describes.
- from: createnuclear:steel (c:ingots/steel) | via: create:compacting / mechanical_crafting → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel is a scarce produced alloy (not found raw, needs coking/refining) that the aeronautics and tech spine both want — routing fabricated steel plate into coin makes it a liquid trade commodity, linking Create metallurgy to the economy.
- from: createnuclear:steel plate (fabricated structural piece) | via: recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel plate is a load-bearing structural metal — exactly what M-23 calls for as an airframe/hull ingredient; a reactor-derived steel plate as an Aeronautics structural component makes heavier ships cost real metallurgical depth.
- from: createnuclear:reactor_core / anti_radiation armor | via: loot-seed (boss drop as gate) | to: economy/survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: The reactor is a multiblock that players build — it is not a boss; seeding its core as a boss-drop gate would contradict the mod's design (it's a crafted multi-block, not a mob reward). M-15 applies to boss-drop gates; this would be M-06 sequenced assembly if gating were wanted. The radiation hazard is a survival-pressure angle but it's config/thematic, not a method-routing with a material to weave.
- from: createnuclear:enriched_soul_soil (createnuclear:enriched recipe type) | via: create:haunting + createnuclear:enriched | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul-enriched soil (produced through haunting + enriching) is a natural bridge to Occultism's spirit/soul workflow — the soul-fire already haunts items in Create (M-19), and enriching carries that soul-charge further into the magic web. The atomic + occult tone clash is mild (both are "forbidden energy" aesthetically) and the material speaks for itself.
- from: createnuclear:lead ingot (c:ingots/lead) | via: create:crushing / tfmg:casting | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: Lead is already produced within the mod's own Create-based ore processing chain; adding another M-03 ore-doubling path for it is redundant — the mod already routes through create:crushing/mixing/pressing (shown in made-by methods). No new system link, just a duplicate intra-Create step.
- REWORK: existing anchor is create (1). Three ACCEPTs add economy (×2, M-08 for uranium + steel coin) and aeronautics (M-23 steel structural) and magic (M-19 enriched soul soil) — brings to 4 anchors total.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Transmuting frozen rotten flesh through spirit fire yields a cold-themed essence — a natural ritual-sink for biome-gated zombie loot, turning cold-biome exploration into a magic-pillar supply route.
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Magma rotten flesh — a thermal zombie variant — transmutes into a fire essence via spirit fire, giving nether-adjacent undead drops an arcane purpose and keeping the two themed drop variants parallel.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Corrupted wart is an organic arcane contaminant; an imbuement step attuning it into a magic reagent (e.g. a corrupted source shard) fits the Ars tone — a mid-tier reagent gated on rare swamp/zombie drops.
- from: rottencreatures:frozen_rotten_flesh / magma_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: Haunting is already covered as a weave route by M-19 (soul/haunting seam, Create→magic), but applying haunting to themed rotten flesh gives no clearly useful Create output — the better path for these drops is spirit_fire (already ACCEPTed above via M-11). Layering a second processing edge on the same materials without a distinct output is redundant.
- from: rottencreatures drops (rare heads / treasure_chest loot) | via: numismatics / bountiful | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Zombie-variant heads and treasure chests are classic bounty targets — a bounty board paying coin for Dead Beard pirate-captain kills or Undead Miner heads links the bestiary's combat loop directly to the economy.
- REWORK: existing anchor is survival (1). Three ACCEPT rows (M-11 ×2, M-10, M-14) add magic + economy, bringing rottencreatures to 3 anchors.

## cmpackagecouriers   [anchors: create, aeronautics (2)]
- REWORK: OK — connections sound. Already at 2 anchors (Create package logistics + aeronautics/logistics via the cardboard plane courier). The dossier note is correct: the light economy adjacency (remote trade fulfilment) is real but the mod is already well-placed and adding a formal economy edge would be thin. Leave.
- from: cmpackagecouriers:cardboard_plane (flying autonomous courier) | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: The cardboard plane is already the aeronautics anchor (it IS the flying logistics arm); an M-24 drivetrain-component weave is not applicable — M-24 governs mechanical components that feed Aeronautics propellers/engines, not the courier plane itself as a product. The anchor is correctly placed without adding a redundant recipe edge.

## death-count-1.0   [anchors: support / friend-group QoL (1)]
- LEAVE — zero items, zero blocks, zero loot, zero recipe types. A vanilla-scoreboard datapack displaying a death tally in the tab list; nothing to weave.

## letmefeedyou   [anchors: support / QoL (1)]
- LEAVE — zero items, zero blocks, zero loot, zero recipe types. A behavior-only co-op feeding QoL mod; nothing to route through any method.

## accessories_compat_layer   [anchors: support / library-compat (1)]
- LEAVE — pure mixin/API compat shim (Curios + Trinkets → Accessories bridge); zero items, zero loot. A genuine zero-content code library / compat layer. No weave surface.

## sky_whale_ship   [anchors: survival (1)]
- from: sky-whale structure loot chests | via: loot-seed | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Sky whales are only reachable by aerial transit — boarding one by airship is the pack's flagship aeronautics encounter. Seeding whale-back chests with a structural alloy plate (M-23) or an Aeronautics blueprint/controller component makes reaching one a genuine payoff on the aeronautics progression arc, and makes "whale hunting by airship" a repeatable late-game activity.
- from: sky-whale structure loot chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Whale-back rarities (unique drops, ambient-mob loot) as Bountiful bounty targets gives the economy pillar a high-altitude combat objective — a bounty board entry "bring back X from the sky whales" drives player motivation to gear an airship and go.
- from: sky-whale structure loot chests | via: loot-seed | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 is for high-effort *consumables* (wine, cheese, processed crop) priced as sellable goods; whale-loot rarities are better handled by M-14 bounty/economy (already ACCEPTed above). Applying M-09 here would be a stretch — these are not luxury consumables, they're adventure spoils. Cleaner to keep one economy edge via M-14.
- from: sky-whale structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed a magic reagent (a rare ambient-mob drop, e.g. a source gem cluster or an Ars/Occultism exclusive component) into whale loot so sky exploration fuels magic specialization — the mage player has a reason to commission an airship or buy whale-back loot on the market.
- REWORK: existing anchor is survival (1). Three ACCEPTs (M-15 aeronautics, M-14 economy, M-02 magic) bring sky_whale_ship to 4 anchors — entirely via loot-seed, the correct delivery for a zero-items structure mod.

## jamlib   [anchors: library/API / support (1)]
- LEAVE — pure cross-platform library (platform abstraction + JSON5 config API); zero items, zero blocks, zero loot. A genuine zero-content code library. No weave surface.

== CHUNK COMPLETE ==




