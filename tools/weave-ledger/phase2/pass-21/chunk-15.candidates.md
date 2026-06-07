# Phase 2 candidates — chunk-15

## formationsnether   [anchors: survival (1)]
- from: nether structure loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing a nether ruin drops a bounty payout — combat in hell becomes coin, driving the trade web
- from: nether structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ritual altars and cabins hold occult/magic reagent drops — exploring the nether feeds the magic web
- from: nether structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: clash | verdict: REJECT | reason: M-08 requires Create-processed metal → coin; loot-seeding coin directly bypasses that chain — the loot-seed for M-14 bounty is the right route, not raw coin drops

## kambrik   [anchors: library/API (1)]
LEAVE — pure Kotlin library for mod developers; zero gameplay surface, no items, no loot, no processing. No weave possible.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / fugu_roll | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a coastal kitchen specializing in guardian cuisine sells premium rolls to inland players who can't reach the ocean temples
- from: oceansdelight:fugu_slice (poison-risk delicacy) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the risk premium on fugu makes it a luxury trade good; chefs who can process pufferfish safely command a real price
- from: oceansdelight raw drop inputs | via: create:milling or farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: FD cutting is already the native processing method and that inbound weave exists; adding create:milling on top of it is redundant overlap, not a new anchor — the FD route already anchors survival; M-12 is already embodied
REWORK: existing FD cooking/cutting inbound is the mod's primary method — no arbitrary connection, but no second anchor flows from it either. Flag for M-09 luxury sale as the priority second weave.

## modonomicon   [anchors: support/documentation (1)]
LEAVE — data-driven guidebook framework; its 6 registered items are book variants (flavour/lore items). No material processing, no loot, no crafting surface beyond the vanilla book recipe. A one-mod "build a guide" tool.

## invtweaksemuforipn   [anchors: client QoL (1)]
LEAVE — pure client-side InvTweaks keybind emulation shim over IPN. Zero items, zero loot, no processing surface.

## everycomp   [anchors: support/decoration (1)]
LEAVE — runtime block/recipe generator that stamps existing mods' wood shapes across all wood types; its weave surface belongs to the host mods it bridges (Create, MCW, etc.), not here. No items of its own except the creative-tab grouper.

## libipn   [anchors: support/library (1)]
LEAVE — GUI/config/logging library for IPN. No items, no loot, no gameplay hooks.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled chiseling recipes | via: create:mechanical_crafting (rechiseledcreate companion) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel runs chiseling on a belt — decoration output scales with your Create infrastructure, not just a hand tool
REWORK: existing connection is via the rechiseledcreate companion (already in pack) which routes chiseling through Create power — this is M-04 and is sound. OK — connections sound.

## trashcans   [anchors: support/automation QoL (1)]
LEAVE — void-sink utility; no material outputs (by definition). Weaving a void block into the economy loop is anti-thematic for a scarcity-driven pack. No coherent 2nd anchor.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob fragments / nuggets | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: myth-creature fragments transmuted by spirit fire — the bestiary's drops feed the occult web directly
- from: grimoireofgaia boss busts (valkyrie/gorgon/sphinx/vampire/minotaur) | via: bountiful bounty board | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: clearing a Grimoire mini-boss delivers a bust trophy redeemable for coin at the bounty board — heroics pay
- from: grimoireofgaia mob drops (c:nuggets/diamond, c:nuggets/emerald) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: gem-bearing nuggets from Gaia creatures are infused into arcane catalysts — the mythic bestiary feeds the Ars magic web
- from: grimoireofgaia:pearl_block / creature pearls | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: the pearl_block is a decorative block, not a processed ore; crushing deco back to raw is M-04 not M-03, and there's no strong scarcity narrative for pearl-crushing; the spirit_fire route (M-11) is the coherent sink for organic creature drops
- from: grimoireofgaia artifact rings (ring_of_speed / jump / haste) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: artifact rings from mythic creatures are trade goods — fighters sell gear to non-combat specialists who want the effect buffs

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:seafood_chowder / cooked_lobster / lobster_soup | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a mechanized fishery producing chowder and lobster at scale can supply the server market — maritime specialists sell premium seafood to inland bases
- from: createfisheryindustry:fish_skin | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish_skin is already a leather substitute used in crafting — pressing it into a Create intermediate would add a step without a clear destination; the leather-substitute route is cleaner and the mod already has strong Create anchoring via its own machines (peeler, trap). Not needed.
OK — connections sound (Create + survival already well woven; economy sell is the natural third).

## kiwi   [anchors: support/library (1)]
LEAVE — Snownee's modding library; no items, no loot, no gameplay surface.

## shulkerboxtooltip   [anchors: support/client QoL (1)]
LEAVE — pure client-side tooltip renderer for shulker boxes; no items, no loot, no processing. Zero gameplay hooks.

## wits   [anchors: support/debug (1)]
LEAVE — server-side /wits command for structure identification; no items, no loot, no processing surface.

## s_a_b   [anchors: Create, aeronautics (2)]
- from: s_a_b:hardsteelblock / doublesteelblock | via: aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: a warship hull demands hard steel armor plate — the armored-block tier is the natural structural material for armed Aeronautics ships
- from: s_a_b steel blocks (any tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the steel blocks are already produced via create:compacting/mixing — adding sequenced-assembly on top would be depth for depth's sake; M-23 (hull plating) is the meaningful second use and the mod already has two anchors
OK — connections sound (Create production + aeronautics destination already established; M-23 deepens the aeronautics side).

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth / boiler gating | via: create:mechanical_crafting (brass components as gate) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth that keeps your base livable requires Create brass fittings to build — temperature control is a tech problem, not just a material one
- from: cold_sweat:goat_fur / chameleon_molt insulation materials | via: farmersdelight:cutting or create:milling | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cold_sweat IS survival already; routing its insulation materials back through another survival method doesn't add a second anchor — the needed 2nd anchor is Create (M-05 gating) not another survival-side route
- from: cold_sweat insulated armor sets (chameleon/hoglin/fur) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: arctic-biome ready armor is a premium trade good — cold-climate specialists sell insulation kits to crews heading to winter biomes or high altitudes
REWORK: existing create:filling inbound (waterskins) is a narrow everyday touch, not a pillar-defining anchor; M-05 gating on Hearth construction gives the real Create second anchor.

## betterpingdisplay   [anchors: support/client UI (1)]
LEAVE — numerical ping display in tab list; pure client UI mod with no items, no loot, no gameplay hooks.

## sliceanddice   [anchors: Create, survival (2)]
- from: sliceanddice Slicer (automates all FD cutting recipes) | via: create:mixing (heated) | to: economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: automated FD processing at scale enables a food-manufacturing economy — a kitchen specialist running Slice and Dice output supplies the server food market
REWORK: the mod IS the M-12 processing-chain bridge between Create and FD; its connections are definitional, not arbitrary. Existing Create + survival anchoring is sound. OK — connections sound; economy sale (M-09/M-12) is the natural extension when throughput scales up.

## createlowheated   [anchors: Create (1)]
- from: createlowheated:basic_burner gating | via: crafting recipe (Create brass/andesite components required) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: Create components in the burner recipe would make this M-05, but the burner IS a Create-support machine — it's already anchored in Create and routing it deeper into Create doesn't add a second pillar
- from: createlowheated heat tier (lowheated) as a fuel-cost gate | via: config link to survival fuels (charcoal/biomass from food mods) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this would be a config-tie to survival fuels rather than a recipe route; the lowheated condition gates heating but the fuel is generic (any furnace fuel) — no specific seasonal/survival reagent can be locked here coherently; M-16 requires a season-specific crop input
LEAVE — a Create-internal mechanics tweak (heat as managed resource); no tradeable/magic surface, no new pillar reachable. Support-tier within Create spine.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (geode worldgen) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: mining_core is a consumable that powers the coin miner — it's a scarcity gate, not an ore to crush; using M-03 here would conflate a progression-key item with ore-processing
- from: createblockchain FE coin minting → numismatics | via: createaddition FE chain | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the coin miner only runs on FE from a Create electrical line — tracing the coin supply back through processed metal (scarce ore → Create → FE → coin) makes the money faucet sit on the pack's scarcity foundation
- from: createblockchain:piggy_bank chest loot | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks already scatter coin loot in chests by default — seeding this is the mod's own mechanic, not a weave the pack authors; no additional loot-seed needed from our side
OK — connections sound (economy faucet + Create FE chain already the mod's design); M-08-adjacent deepening (FE traces to scarce ore) is the right refinement.

== CHUNK COMPLETE ==
