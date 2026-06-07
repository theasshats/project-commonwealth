# Phase 2 candidates — chunk-16

## dragonlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; 1 dev-artifact block, no items/methods/mechanics of its own; pulled automatically as a dependency; nothing to weave.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — client-only zoom/overlay tweak on the vanilla spyglass; 0 items, 0 blocks, no recipe surface; pure render/input behavior. Curios slot is already there. Nothing to route.

## createlowheated   [anchors: create (1)]
- from: solid furnace fuel (coal/charcoal/biomass) | via: M-26 consumption (fuel burned in Basic Burner) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: every Create basin that smelts now eats real fuel — charcoal, coal, or biomass from farming/forestry becomes a production input that the survival pillar supplies; the heat cost creates demand that pulls on the survival resource chain.
- from: Basic Burner block (createlowheated:basic_burner) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Basic Burner is a single-block installed device, not a deco or ingot sink; crushing it back is a trivial drop-recovery edge, not a weave — forced and low-value. The mod's real weaving surface is the fuel-consumption mechanic, not the block itself.
- from: lowheated heat tier | via: M-29 cross-route dependency | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: Ars/Occultism use their own heat sources (arcane fire, spirit fire); piggybacking the lowheated tier into magic rituals would require authoring new heat-conditioned ritual steps — too much cross-mod mechanical coupling for a behavioral tweak mod; scope exceeds the mod's nature.
OK — the M-26 fuel-consumption link is the clean second anchor. The mod already sits in Create; fuel burning binds it to survival's resource chain, advancing the loop (production demands survival output). No existing connections to rework (mod has 1 anchor; M-26 is the proposed addition).

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- from: experience_flask items (experience_flask_0..3) | via: create:filling / create_enchantment_industry:grinding | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: XP-flask items are build-tool consumables for storing/releasing XP on construction sites; routing them through Create's enchantment-industry grinder would be a forced thematic import — the XP flasks exist to help builders, not as a Create feedstock. The cost model says everyday items get one light step; but there's no coherent "whose machine wants a builder's XP flask?" answer. No-motif for the core toolset itself.
- from: hammer / chisel / trowel tools | via: M-05 native-method gating | to: create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: These are builder utilities (datapack-registered, vanilla namespace), not progression-gated tech items. Requiring Create parts to craft a hammer would be punishing for a basic building tool and tonal mismatch — the dossier notes this explicitly as "forced edge." Everyday builder items should not be gated behind a crafting spine.
- LEAVE — no coherent 2nd anchor; QoL builder tools with no machine or processing surface. The experience_flasks have no home in the methods palette as inputs. Force-fitting Create gating onto basic construction utilities is a defect.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen terrain-shaper (density functions only); 0 blocks, 0 items, 0 loot tables. No processing surface, no recipe surface. Thematically adjacent to regional scarcity (bigger terrain spreads ores out), but that is the worldgen configuration's effect, not a weave this mod can participate in as a recipe-graph node.

## createpickywheels   [anchors: create (1)]
- from: water wheel / windmill placement (behavioral gate) | via: config tie — biome/geography requirement | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: where you can generate Create power is dictated by the world's geography — a River biome for water wheels, open air for windmills — so early base location becomes a deliberate choice shaped by the terrain; the world pushes back on industrialization, which is exactly the survival pillar's role. Via: config (no new recipe; the delivery is the biome-gate behavior already built into this mod). M-30 covers regional scarcity as a gate on goods; here the "good" is power generation, which is region-locked by biome. Closest fit — the mechanic advances the loop's scarcity→pressure→Create-production edge.
- from: windmill/water-wheel power output | via: M-29 cross-route dependency (magic forced to use Create's geographically-locked power) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: magic power (Ars source, Occultism spirit) runs independently of Create's electricity; the biome-location gate on a water wheel doesn't propagate into magic's power source. The dependency doesn't exist in the game loop — magic specialists wouldn't be blocked by a Create water-wheel biome rule. Forced edge.
OK — the M-30 biome-gate → survival link is real and already partially acknowledged in the dossier. Delivery is via the mod's existing config mechanism (no recipe to author). No existing connections to rework (mod has 1 anchor; survival is the proposed addition).

## copperagebackport   [anchors: survival (1)]
- from: copper deco blocks (copper_bars, copper_chain, copper_lanterns, oxidized/waxed variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Copper Age's wide deco palette — bars, chains, lanterns, shelves, chests in four oxidation states — are exactly the decorative copper-block set that Create's ore-doubling/recycle chain is meant to close; crushing any oxidized or surplus copper deco returns raw copper (nuggets + XP nugget), lossy, so there is no arbitrage — it just makes the copper palette part of the Create copper economy rather than an island. This is a one-light-step everyday weave, which is correct for deco-grade content.
- from: copper tools/armor | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper tools (axe, pickaxe, boots, chestplate…) are mid-tier early-game gear; crushing worn or replaced copper equipment back to nuggets feeds the Create ore economy the same way iron tools feed vanilla — closes the material loop and keeps copper as a proper Create-economy metal rather than a standalone backport island. Everyday power tier, one step, no arbitrage.
- from: Copper Golem (minecraft:copper_golem_statue) | via: no recipe method — behavioral | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: the Copper Golem's chest-to-chest hauling is genuinely logistics-flavored, but it is a mob entity, not a method or recipe — it can't be "routed through" a method palette entry. The economy link would be behavioral (golem moves goods between chests = primitive logistics), which is a no-recipe delivery type. The tone is fine, but the connection is loose: the golem is slow, manual-bred, and a novelty logistics tool — it doesn't advance the economy loop in a measurable way. REJECT as no-motif (it touches M-33 service-for-hire thematically but is mob behavior, not an authored delivery).
REWORK note: dossier marks economy link via Copper Golem as [WEAK] — confirmed; reject stands. The M-04/M-03 Create links are the real second anchor. No existing connections to rework beyond confirming the dossier's own [WEAK] flag.

## numismatics   [anchors: economy, create (2)]
- from: numismatics:cog / spur / crown (coins) | via: create:pressing (scarce regional metal → coin blank → pressed coin) | to: create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins are player-minted, not vendor-given — a Create pressing step turns a processed metal (andesite alloy blank, a copper blank) into the pack's settlement medium; the pressing step means minting is itself a specialization (only a player with a running press makes coins), which is exactly the M-08 framing. This reinforces the existing Create anchor with a specific method tie rather than just "Create-styled crafting."
- from: numismatics vendor block | via: any player-traded good → M-26 consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the vendor block is the economy distribution endpoint — calling it a survival weave just because goods flow through it and get consumed is restating the ambient loop endpoint (M-09-style), not a distinct weave. REJECT — bare sell-link.
REWORK: The dossier's "2nd-anchor candidates" section notes M-09 (luxury good→coin) which is explicitly retired. That row should be removed from the dossier — it references a cut motif. Flag for dossier cleanup.
OK — existing connections (economy + Create) are sound. The M-08 pressing step is a method-routing improvement to the Create anchor (makes it specific, not just "it depends on create"). No other new anchors needed; numismatics is a destination hub.

## kambrik   [anchors: support/library (1)]
- LEAVE — Kotlin developer-framework library; 0 blocks, 0 items; no gameplay surface. Pulled as a dependency of Kotlin-based mods; nothing to weave.

## spark   [anchors: support/performance (1)]
- LEAVE — server-side profiler; command-only diagnostic tool; 0 blocks, 0 items, no recipe surface; nothing to weave.

## accessories   [anchors: support/library (1)]
- LEAVE — accessory-slot API/framework; 0 blocks, 0 items; no standalone gameplay content. The wearables that belong to weaves live in the mods that register into its slots, not here.

## create_integrated_farming   [anchors: create, survival (2)]
- from: steady roost egg/feather/meat output | via: farmersdelight:cooking + create:mixing | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: bulk poultry products flowing through cooking into food is the ambient food-consumption loop — consumption of food is M-26's native meaning, but calling "eggs go to food recipes" a distinct weave is restating the ambient loop endpoint; the link exists without authoring anything. M-09 (bare sell) is retired. No demand-gating element here — it's the normal food chain.
- from: fishing_net / lava_fishing_net catches | via: create:milling (scale fish into oil/meal) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod already anchors Create (the roosts and nets are Create-contraption-compatible). Milling fish in a Create mill would be a second Create-to-Create edge (fish→fish_meal), not a cross-pillar advance. Adds depth but not a new anchor.
- from: roost products (feather bulk output) | via: M-31 logistics-required bulk good (aeronautics/trains ship bulk feathers to distant crafters) | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: roosts produce feathers passively in volume — feathers are used in arrows (combat supply), beds (base-building), and other recipes across the pack; a roost farm specialized in poultry products is exactly the kind of bulk goods source that justifies an aeronautics logistics run to distant buyers. M-31: the good is heavy-bulk enough (consistent, stackable farm output) that trading it at scale pulls on the logistics arm. Light weave — no recipe needed; the hook is design-level framing and vendor/logistics config in Phase 3.
REWORK: dossier's economy candidate cites M-09 (retired) — that row should be cleaned up. The M-31 logistics link above replaces it with a mechanism-grounded economy edge. Existing Create + survival anchors are sound.

## ribbits   [anchors: survival (1)]
- from: ribbits:maraca + swamp-goods trades (sorcerer buffs, gardener produce, fisherman fish) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ribbit sorcerers grant buffs for amethyst shards — that is already a "service for hire" (spend resource, receive labor/effect); the fisherman and gardener professions output goods that players can source from swamp villages rather than farming themselves, making Ribbit villages a natural player-economy node (a specialist NPC hub that a trade-route player visits and factors into supply routes). The economy link is real: players seeking buff services or harvesting swamp goods from Ribbits are using a service-for-hire node. M-33 is the motif. No recipe needed — the delivery is the existing Ribbit trade/service mechanics + a Phase-3 framing decision to document and price Ribbit services in the economy design.
- from: ribbits toadstool/mossy-oak blocks | via: create:cutting (sawmill equivalent) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mossy oak planks are thematically a swamp wood set — routing them through Create's woodcutter would give them a sawmill cut, which is generic and barely advances the loop. The woodset is narrow (14 blocks, one biome flavor) and a Create woodcutting entry is cosmetic, not weave-relevant. The M-04 "recycles deco" motif is meant for converting deco *back* to raw material, not just adding sawmill recipes for flavor wood. Weak — reject.
- from: Amethyst Shard trades (Ribbit merchant currency) | via: numismatics vendor config (amethyst shards ↔ coins, or swamp goods priced in coins) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: amethyst shards as Ribbit currency is their internal system; bridging shards to Numismatics coins would create an NPC-coin-faucet-adjacent path (players farm amethysts → trade to Ribbits → get goods → sell goods for coin). This is M-09-adjacent (luxury good → coin via NPC intermediary) which is retired because it's an NPC coin source. The cleaner path is M-33 (service/goods from Ribbits are a trade-economy node, not a coin-minting route). REJECT.

















