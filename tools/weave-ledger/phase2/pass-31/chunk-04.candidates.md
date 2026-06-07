# Phase 2 candidates — chunk-04

## mutantszombies   [anchors: survival (1)]
- LEAVE — zero item drops, no loot table entries, no craftable outputs; 7 spawn-eggs only. Every weave candidate requires a material surface. Raising night-threat baseline is the whole contribution; the survival anchor stands on its own.

## bountiful   [anchors: economy (1)]
- from: bounty objective pool | via: config/datapack (Decree definitions) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Decrees target season-gated farm/hunt produce (Serene Seasons crops, Alex's Mobs pelts), so bounty demand renews each season and the consumption sink never zeroes out — harvest pressure feeds back into the economy loop.
- from: bounty reward | via: config (reward item set to numismatics:cog/spur) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bounty payouts land in player-minted coin — the board becomes a player-to-player settlement layer (commission work → earn coin), not an NPC faucet, because objectives are set by the server/admin to demand goods that only other specialists can supply.
- from: bounty objective pool | via: config/datapack | to: Create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A Decree demands Create-processed goods (e.g. iron sheets, brass ingots) or magic reagents (source gems) as bounty targets — a non-Create/non-magic player needs those and must trade for them, cross-routing two production specialists.
- from: bounty reward | via: config (reward = goods/rep, not coin) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A "service bounty" pays with colony reputation or scarce crafted goods rather than coin — labor-market axis: a combat player farms mob kills for the board; a crafting player turns in processed materials; payment is non-fungible, keeping the labor value player-driven.
- from: bare sell-link framing in dossier | verdict: REJECT | reason: dossier 2nd-anchor note mentions "reward = gold ingots → sellable as coin faucet" — that's M-09 (retired). The ACCEPT rows above re-express as demand-gating (M-26/M-08/M-29/M-33). The bare "coin faucet" framing is an NPC-side injection and must not be the weave.
REWORK: dossier's 2nd-anchor line 2 conflates "bounties reward engaging with food loops" with "sellable for coin" — the economy anchor is already present; the REWORK is to make M-26 (consumption sink via seasonal objectives) the explicit 2nd anchor (survival), not a vague "any pillar as a sink."

## sound_physics_remastered   [anchors: support (1)]
- LEAVE — pure client audio rendering; no items, no blocks, no loot, no material surface. Nothing to weave.

## configuration   [anchors: support/library (1)]
- LEAVE — pure config-screen library; zero player-facing content. Genuine zero-surface code library.

## aileron   [anchors: aeronautics (1)]
- from: loot tables (loot=yes, Elytra-enchantment rewards) | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed Aileron's enchantment loot drops with Ars Nouveau source gems or Iron's arcane essence — the enchant-for-hire specialist needs magic currency as both payment and resource; the player who acquires the enchant-gear now has a reason to interact with the magic pillar.
- from: Elytra enchantment books (loot-seeded) | via: loot-seed → ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's unique flight-enchants are applied at the Enchanting Apparatus (Ars Nouveau method), making the enchant-service a magic-labour job; the enchant service is M-33-adjacent but M-10 is the mechanism.
- from: enchanting-apparatus route for Aileron enchants | verdict: REJECT | reason: Aileron enchants are standard Minecraft enchantment IDs — they may not be configurable to require the Apparatus specifically without KubeJS tricks that would need testing; keep the loot-seed as the primary delivery (tag the enchant loot drop), and regard apparatus application as a Phase-3 research item, not a confirmed weave.
- from: Elytra as personal-flight peer to Aeronautics | via: behavior | to: aeronautics | motif: OK — existing anchor | power: everyday | tone: ok | verdict: n/a (anchor already aeronautics, no new weave needed)
OK — aeronautics anchor is sound; loot-seed to magic adds the second.

## appleskin   [anchors: support (1)]
- LEAVE — HUD/tooltip display only; no items, no blocks, no loot. Nothing to weave.

## supplementaries   [anchors: Create, survival (2)]
- from: supplementaries:flax (c:crops/flax, c:seeds/flax) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Flax seeds milled in a Create millstone produce linen fibre (or string), routing the flax crop through the Create processing spine — a farm crop becomes a textile feedstock, completing the fiber → rope → aeronautics-rigging chain.
- from: supplementaries:ash (c:dusts/ash) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ash mixed with lye (water + potash) in a Create mixer produces a soap intermediate — routes Supplementaries' waste product through the Create chemical spine, reinforcing the existing haunting/mixing inbound weaves.
- from: supplementaries:jar / supplementaries:faucet | via: create:filling / create:emptying | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Jars and faucets are fluid-transfer nodes that slot naturally into Create pipe networks as portable fluid containers — no recipe edit needed, just the physical interface, but worth noting as a load-bearing connector (aeronautics resupply: jars carry fuel/potions on airships).
- from: supplementaries:ash (c:dusts/ash) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ash is the residue of burned organic matter — routing it through Occultism spirit-fire transmutation to yield a minor essence (e.g. earth essence) is thematically direct (cremation residue → spirit-energy), giving ash a second output path beyond soap.
- REWORK: dossier says "none — leave (already ≥2 pillars)" for 2nd-anchor. That is correct as a meta-assessment, but the specific flax→Create:milling link and ash→Occultism link above are incremental strengthening rows worth recording. Existing connections (haunting/mixing/splashing/FD:cutting) are sound — OK on those.

## numismatics   [anchors: economy, Create (2)]
- from: player-minted coins | via: create:pressing → numismatics mint | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Regional scarce metal (Galosphere palladium, Occultism silver) → Create-pressed → minted coin; the minting process is a specialization — the economy's settlement medium is manufactured, not found, binding Create output to purchasing power.
- from: numismatics:vendor / depositor | via: config | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: Players set up vendor blocks as service-for-hire storefronts (enchanting fees, cargo-run payment, crafting contracts) — the vendor is the physical ledger of the labor market; value flows player-to-player, no NPC involved.
- from: numismatics:blaze_banker (requires blaze interaction) | via: blaze mob route | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Stocking a Blaze Banker requires getting to a blaze (Nether danger); the bank's operation has a combat-route supply cost baked in — combat specialists who farm blazes gain privileged access to banking infrastructure.
- from: bare "sell goods for coin" framing | verdict: REJECT | reason: M-09 retired; ambient sellability is not a weave. All economy links must gate demand, not just describe the endpoint.
OK — existing Create + economy anchors are sound. M-08 and M-33 reinforce. Blaze Banker → survival (M-34) adds a third touch point.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: 847 block variants | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Mechanical saw produces the slab/stair variants at speed — gives builders automated bulk production of cuts and ties the decoration palette into the Create processing spine; players who specialize in Create manufacturing can supply other players with cut blocks (cross-route demand).
- from: gravity variants (concrete-powder/sand/gravel slabs+stairs) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushing the gravity-based cuts back to gravel/sand/concrete-powder closes the recycling loop lossy (M-04 standard); waste stone cuts from construction return value rather than being voided.
- from: cutting recipe count (847 types) | verdict: REJECT | reason: Adding 847 individual create:cutting entries is impractical and inflates the recipe graph without adding gameplay signal — the weave is better expressed as a tag-based batch recipe covering all vanilla-material variants, not per-block entries. Phase-3 delivery: one KubeJS loop over the tag set.

## minecolonies_tweaks   [anchors: support (1)]
- from: c:crops/* / c:foods/* tag unification | via: tag injection (passive) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: By harmonizing modded crop tags (corn, rice, soybean, tomato, etc.) under c:crops/*, this mod enables the consumption-sink recipes (Create milling, FD cooking, colony requests) to target unified tags — it's the enabler that makes M-26 (consumption demand) actually work across a multi-crop food web.
- from: inventoryscroll / copyscroll | via: colony workflow | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Scrolls streamline colony-inventory management — a colony operator uses them to move resources between colony storage and personal inventory during large supply runs; the colony route (M-28) runs smoother with the scroll tooling, tying the QoL item to the colony production route.
- from: minecolonies_tweaks:component_merge_shapeless recipe type | via: component_merge_shapeless | to: Create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The component-merge recipe type can fuse a colony-produced scroll with a Create-brass component (or a magic reagent) to produce an upgraded colony management tool — a cross-route item that requires both the colony and the tech/magic specialist.
- from: tag-unification enabling bare sell | verdict: REJECT | reason: "the tags make food sellable" is M-09 (retired). The ACCEPT rows above ground the tag work in M-26 consumption demand and M-28 colony route — not ambient sellability.

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — client input-handling only; no items, no blocks, no loot table. Genuine zero-surface QoL mod.

## trashcans   [anchors: support/automation (1)]
- from: item_trash_can / liquid_trash_can | via: Create overflow drain | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: An overflow trash can on a Create processing line is a byproduct sink — but in a scarcity pack this is a double-edged weave: the trash can legitimately prevents gridlock on automated lines, yet voiding byproducts undermines M-32 (byproduct → input circularity). Propose as a gated/config item only: the trash can should require meaningful crafting cost so it isn't trivially available to nuke scarcity.
- from: voiding byproducts | verdict: REJECT | reason: In a scarcity-driven pack (regional ore-gen, no easy duplicates), free infinite-rate item deletion is an economic leak — bypasses M-32 (byproduct reuse) and M-26 (demand never zeroes). If kept, the trash-can blocks should be Config-gated or have their crafting recipe require Create brass / a processed component so they represent a deliberate automation investment, not a free escape hatch. No weave that routes material *through* the trash can is appropriate.
REWORK: the dossier already notes "arguably worth a balance note in a scarcity pack" — this should be escalated to a pack-design decision: either raise the crafting cost of trash-can blocks (especially the ultimate), or gate them behind a Create-gating recipe. The current vanilla-style crafting cost is too cheap for the scarcity model.

## stylecolonies   [anchors: support/decoration (1)]
- from: Steampunk style blueprints | via: colony build demand | to: Create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The Steampunk blueprint style requires Create blocks (brass casing, copper pipes, etc.) as build materials — the colony build request pulls Create-production output as building material, tying colony expansion directly to the Create pillar's production capacity.
- from: blueprint style variety | via: build material demand | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: Players who specialize in Create manufacture supply the building materials required by Steampunk/High-Magic styles; the builder player commissions or purchases the blocks — service-for-hire between the colony manager and the Create producer (M-33 labor axis).
- from: "pure decoration, no weave needed" framing in dossier | verdict: REJECT | reason: The Steampunk style's Create-block consumption is a real but passive demand pull — it does not require a KubeJS recipe edit, just the blueprint definition — so it's a valid M-28 colony-route link. The dossier undersells this.

## foodeffecttooltips   [anchors: support/QoL (1)]
- LEAVE — tooltip display only; no items, no blocks, no loot. Genuine zero-surface QoL mod.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The ion thruster — the drone's top propulsion tier — is assembled in a sequenced-assembly line (multi-stage Create process), making it a flagship crafting milestone; a player who builds an ion drone has put the Create spine to work, not just crafted wood rotors.
- from: drones:iron_rotor | via: create:pressing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron rotors require metal-pressing on a Create press (iron → metal sheet → stamped rotor blade) — the mid-tier drone component naturally routes through the Create processing spine without being over-gated.
- from: drones:controller | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The assembly controller is a precision device; mechanical crafting (Create's large-format grid) fits its complexity — reinforces the Create-spine gate without requiring sequenced assembly (which is reserved for the ion thruster tier).
- from: drones:pocket_drone as tradeable crafted good | verdict: REJECT | reason: M-09 retired; "sellable pocket drone → coin" is the ambient endpoint, not a weave. The value of a drone is already gated by the Create-fabrication cost; selling it is emergent, not a mechanic.
- from: drones:drill ability block | via: aeronautics logistics | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A drill-drone auto-mines for its owner while they manage other tasks — a logistics drone is bulk-goods handling at small scale, distinct from airship logistics; the drone-operator sells mining services (M-33-adjacent) or delivers resources, tying the aeronautics arm to the economy's logistics pillar.
OK — dossier's Create-gating candidate is well-identified; M-06/M-05 are the right motifs. Adding M-31 for the drill-drone logistics angle.

## zeta   [anchors: support/library (1)]
- LEAVE — pure mod-development framework; no player-facing content. Genuine zero-surface code library.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client model/animation replacement; no items, no blocks, no loot. Nothing to weave.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees seeds / saplings output (logs, sticks, fruit) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Large DynamicTrees felling events drop concentrated log stacks — feeding those through Create milling (logs → planks/sawdust) makes the living forest a Create-supply node, and the bulk-drop character suits automated mill throughput.
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The Dendro Potion accelerates tree growth; imbueing it with arcane energy at an Ars imbuement pedestal creates a supercharged growth catalyst — a magic specialist produces premium dendro potions for sale to tree farmers, cross-routing survival forestry and the magic pillar.
- from: dynamictrees:mega_seed (mega_seed recipe type) | via: dynamictrees:seed_conversion → create:milling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Mega seeds (converted from vanilla saplings + dirt bucket) produce enormous log yields — milling those logs on a Create deployment gives the best wood-per-operation rate; the seed-conversion + milling pair is a natural two-step processing chain.
- from: dynamic tree growth automating with Create deployers | verdict: REJECT | reason: Dynamic Trees explicitly uses cellular-automata growth that is not straightforwardly automated by Create deployers/harvesters — the dossier flags this as "notoriously awkward." Forcing a Create-harvester weave would likely not function correctly in-game, making it a false link.
- from: log output → colony build material | via: MineColonies requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony construction requests large quantities of logs/planks; Dynamic Trees' bulk-felling mechanic (all logs at once) supplies that demand efficiently — the living forest feeds the colony route directly, tying survival forestry to the M-28 production path.

## gravestone   [anchors: survival (1)]
- from: gravestone:obituary (the death-record item) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: An obituary — a record of death — is thematically coherent as a ritual component: Occultism works with death/spirit energy, so consuming an obituary in a minor ritual (e.g. spirit fire → ghost essence) gives deaths a tangible magical residue; a player who dies frequently inadvertently produces ritual feedstock.
- from: gravestone:gravestone (crafted tombstone) | via: MineColonies graveyard district | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A MineColonies cemetery/chapel building requests gravestones as construction materials — the crafted tombstone block becomes a colony supply item, routing the death-utility block into the colony production route.
- from: gravestone "death ≠ total loss → removes pressure" | verdict: REJECT | reason: Gravestone deliberately soft-caps the death penalty. In a scarcity-driven pack this is a design tradeoff, not a weave. The mod is in the pack as QoL; its anti-scarcity effect on survival is accepted and deliberate, not something to patch with a weave edge.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen API library; zero player-facing items, blocks, or loot. Genuine zero-surface code library.

== CHUNK COMPLETE ==
