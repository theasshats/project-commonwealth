# Phase 2 candidates — chunk-09

## searchables   [anchors: support (1)]
- LEAVE — pure client-UI library (search/filter API); zero items/blocks/methods/loot. No content surface to weave.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — PvP-rule behaviour mod; zero items/blocks/loot. No material surface. Sanctioned support role for cooperative play premise.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — client audio-cue only; zero items/blocks/loot/methods. Nothing to weave.

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies:apple_pie / minecolonies:baked_salmon / colony food outputs (c:foods/*) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony baker runs a food stall — baked goods mint coin, making the settlement a natural market anchor feeding the player economy.
- from: minecolonies:ancienttome (research-gate item) | via: loot-seed into structure chests / boss loot | to: survival→economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient tomes drop from dungeon chests and boss caches, making exploration raids pay off with colony-unlock keys; combat pressure feeds colony expansion.
- from: minecolonies worker huts (e.g. blockhutminer, blockhutblacksmith) | via: create:mechanical_crafting gating the hut blocks | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: dossier says quarry already uses M-05 and deeper Create-gating of hut blocks is a design decision already documented as "gate complex Create tech behind colony research" — the causal direction is reversed here (colony gates tech, tech doesn't gate colony); forcing it would contradict the design intent.
- REWORK: existing Create anchor (quarries on andesite/brass) — connections sound per dossier. OK — connections sound.

## cbc_at   [anchors: Create, aeronautics (2)]
- from: cbc_at heavy-autocannon / rocket-pod tier | via: boss-drop as gating ingredient (M-15 boss-key unlock) | to: survival→Create/aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: mounting a rocket pod demands a Cataclysm/Void Worm boss component — the biggest ship weapons are locked behind the biggest fights, not just enough bronze.
- from: cbc_at assembled cannons (ship armament) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cannon-smithing specialist sells assembled weapon blocks at market — arms trade is a natural economy lane on an airship server.
- from: cbc_at munition propellant cost | via: tfmg:distillation (gunpowder/nitrate precursor) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: TFMG distillation is owned by the fuel/aeronautics chain (M-13); rerouting it into munitions would create reagent-ownership ambiguity; the existing Create:cutting/casting coverage already satisfies the Create pillar; this is a stretch with no motif cleanly fitting.
- OK — connections (Create + aeronautics) are sound.

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled spirits are a luxury trade good — a distillery on an airship route sells spirits at ports, threading the Create production chain into the coin economy.
- from: alcohol_industry:alcohol_base (fluid) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: distilled spirits as a reagent in arcane brews — the alchemist's cauldron accepts a spirit base to brew higher-potency elixirs, giving magic a reason to commission the distillery.
- from: alcohol_industry:tequila / vodka | via: create:haunting (soul-fire transmutation into spirit-infused fluid) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: haunting produces soul/spirit outputs from items; routing a finished liquor through haunting to make an "infused spirit" is a stretch — the tone clash between a distillery product and soul-fire is mild but the mechanism is forced (haunting is for making soul-imbued materials, not flavoring drinks). ACCEPT for M-12/cauldron route instead.
- OK — connections (Create + survival) are sound.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build engine; zero items of its own weave value (its weave is MineColonies'). Pure library/dependency.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack; zero items/blocks of its own. It deepens the Create pillar internally but has no material surface to route to a second pillar. Support-tier content (recipe datapack, no independent identity).

## cmpackagepipebomb   [anchors: Create (1)]
- LEAVE — novelty PvP trap; 4 items (pipebomb/rigged/tnt), no loot tables, no processing method. A forced 2nd-anchor weave would be incoherent. Curated friend-group flavor riding Create packages.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris — a waxy marine secretion — is a classic perfumery/alchemy base; imbuement with source gems refines it into an Ars reagent, making ocean exploration pay off magically.
- from: alexsmobs:ender_residue | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue from void-touched creatures transmutes in spirit fire to an Occultism essence — End combat becomes a magic-ingredient pipeline.
- from: alexsmobs:void_worm (boss drop — beak / effigy) | via: boss-drop as gate item | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm beak is the key ingredient for a top-tier Create machine component — hunting the End's apex predator unlocks endgame tech.
- from: alexsmobs mob drops (bear_dust, skunk_spray, banana_slug_slime, etc.) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards pay coin for exotic fauna drops, making each biome's Alex's creature a live economy target — hunting routes into the coin supply.
- from: alexsmobs:bear_dust | via: create:crushing | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-02 says an isolated mob drop feeds a magic/economy input — routing bear_dust through create:crushing into a generic dust output adds no coherent meaning (what does bear-crushing produce?). M-10 / M-11 routes for the exotic reagents and M-14 bounty for the common drops are stronger; a crushing route is tonal mismatch (tech crushing bear remains is odd).
- OK — survival anchor is strong. Four accepted links add magic (×2), Create, and economy pillars.

## wits   [anchors: support/debug (1)]
- LEAVE — server command utility (/wits structure ID); zero items/blocks/loot. No content surface.

## modernfix   [anchors: support/performance (1)]
- LEAVE — JVM/loader performance patches; zero items/blocks/loot. No content surface.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: mithril ore doubles in a Create crusher (crush → 2× raw mithril + chance of a byproduct), giving ore a Create-native processing path and tying the magic metal to the industrial chain.
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement (mint into/out of source_gem) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane essence and source gems are both magic currencies — the imbuement link bonds Iron's and Ars economies so neither magic school is a dead currency island. (Reagent-ownership ledger explicitly flags arcane_essence as "bonded to source via M-01"; this confirms it.)
- from: exotic mob-drop reagents (e.g. alexsmobs:ambergris, vanilla blaze powder) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the alchemist's cauldron accepts exotic mob drops as brew catalysts — hunting creature-drops feeds the spellcasting pipeline.
- from: irons_spellbooks affinity rings / focus gear | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: an arcane focus must be pre-charged on a Create electric motor before it can slot into a spellbook, threading the factory's FE supply into the magic tier.
- from: irons_spellbooks:scroll (one-shot consumable) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: scribes sell one-use scrolls at market — spell scrolls as traded commodities threads the magic pillar into the coin economy without requiring the buyer to grind the inscription path.
- from: irons_spellbooks:pyrium_ingot | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: pyrium is a mid-tier magic metal; routing it through sequenced assembly (the deep GregTech-style chain) is over-costed for its power tier. M-03 ore-doubling on mithril is the right depth fit; pyrium's weave role is as a magic input, not a Create endgame component. Keep depth for boss-drop gating (M-15), not a mid metal.
- OK — existing magic+Create connections are sound. Five accepted links deepen Create (×2), magic (×2), economy (×1).

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:jetpack | via: boss-drop as gating ingredient (M-15) | to: survival→Create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the brass jetpack recipe requires a rare alloy fragment dropped by a mid-tier boss — personal flight isn't free, you fight for the key ingredient.
- from: create_jetpack:netherite_jetpack | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: upgrading to the lava-traversal netherite jetpack is a multi-step sequenced-assembly chain — forge a reinforced backtank, deploy the netherite plate, fill with refined propellant — making the top-tier flight gear a factory milestone.
- from: create_jetpack:jetpack | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: jetpacks are personal mobility gear — selling them at market is coherent in theory, but the pack's economy loop is driven by commodities and processed goods, not gear resale. A jetpack is a one-per-player craft goal, not a trade good that cycles. Tone mild-ok but loop-value is low; reject to avoid diluting economy motif.
- OK — existing connections (Create + aeronautics) are sound.

## createfood   [anchors: survival, Create (2)]
- from: createfood high-effort dishes (bacon_pizza, apple_cheesecake, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bakery-deli specialization sells finished dishes at market — the Create food chain is the natural luxury-goods arm of the food economy, turning crop surplus into coin.
- from: createfood seasonal ingredient pulls (e.g. berry-season ice cream, autumn-apple pie) | via: season-gated Create ingredient | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Create Food recipes become available only when their key ingredient is in season (Serene Seasons), making the bakery output rotate through the year and keeping food production temporally grounded.
- from: createfood:apple_milkshake / fruit drinks | via: alcohol_industry:alcohol_boiling (ferment the juice base into hard cider) | to: survival→economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fruit juice from Create Food feeds the distillery as a fermentable base — a cider/hard-cider production line connects the two food mods and yields a sellable spirit.
- from: createfood dishes as MineColonies cook/baker outputs | via: minecolonies:composting / zero_waste byproduct | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: MineColonies cooks already produce colony food from their own recipes — feeding createfood dishes through the colony cook is a config/integration call, not a weave that adds a second pillar. Creates no new pillar link (both are already survival). Reject as not a cross-pillar connection.
- OK — existing survival+Create anchors are sound. Three accepted links add economy (×2) and survival depth (×1).

## charta   [anchors: survival (1)]
- from: charta:card_table (tavern furniture) | via: create:cutting (sawmill step) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: card tables and bar stools are crafted from Create-cut hardwood components — the tavern furniture set requires the sawmill, threading décor into the Create production chain.
- from: charta filled wine/beer glasses (deco consumables) | via: alcohol_industry:alcohol_boiling + charta glass fill | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: tavern operators buy bottled spirits from a distillery and resell filled glasses — a small but coherent bar-trade loop connecting the drink-deco to the coin economy via the distillery's output.
- from: charta card_table gambling (wagering mechanic) | via: numismatics coin wager | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 (trade-seam to economy via villager/wandering trader) is provisional and leans "no"; furthermore Charta has no built-in betting/currency API, so a numismatics wager would need deep KubeJS plumbing with no native hook — too invasive for a provisional motif. Flag for maintainer review.
- from: charta bar furniture | via: M-04 deco-through-Create | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: duplicate of the first ACCEPT (cutting route); recording for clarity that a separate "pressing glass vessels" M-04 route would be trivial and redundant given the cutting route already lands Create. One M-04 is enough.

## fogoverrides   [anchors: support/client-QoL (1)]
- LEAVE — config-only visual mod; zero items/blocks/loot. No content surface.

## curios   [anchors: support/library (1)]
- LEAVE — equipment-slot API library; zero items/blocks/loot. Its weave value is hosting OTHER mods' accessories (Ars/Iron's rings/amulets), which is captured in those mods' dossiers.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client texture-feature engine; zero items/blocks/loot. No gameplay content to weave.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter; zero items/blocks/loot/methods. Required dependency for Kotlin-based mods; no content.

== CHUNK COMPLETE ==
