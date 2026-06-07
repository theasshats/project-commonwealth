# Phase 2 candidates — chunk-15

## travelersbackpack   [anchors: survival (1)]

- from: themed variant crafting (dragon/netherite/enderman packs + upgrade modules) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: a Netherite or Dragon Traveler's Backpack is clearly a complex fabrication milestone, not a craft-table throwaway; the multi-stage assembly adds earned depth without blocking basic leather packs
- from: themed variant crafting (basic leather packs) | via: create:sequenced_assembly (or recipe) | to: create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: gating basic tier pack behind sequenced assembly violates the "don't gate everyday behind complex" guardrail; the M-06 candidate above targets only mid/endgame variants
- from: fluid-tank upgrade modules | via: create:filling / create:emptying | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: tank upgrades are essentially pressurized fluid vessels — a deploying/item_application step where Create fills and seals the tank insert is mechanically coherent
- from: sleeping bag (portable respawn) | via: loot-seed into create_ltab structures | to: survival | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: sleeping bags aren't a "boss key" — this is closer to exploration convenience; no M-15 boss-unlock logic applies; would just be arbitrary loot seeding
- REWORK: existing survival anchor is sound; the dossier's "aeronautics via passive logistics" candidate should be REJECTED — it's passive carry capacity, not an aeronautics-system method tie; the M-20 fluid-tank upgrade candidate is the more coherent 2nd anchor. OK — connections sound for existing survival anchor.

## smartbrainlib   [anchors: support/library (1)]

- LEAVE — pure code library; 0 items, 0 blocks, no recipe types, no loot. Nothing to weave.

## staaaaaaaaaaaack   [anchors: support/perf (1)]

- LEAVE — behavior-only drop-merge utility; 0 items, 0 blocks, no recipe types, no loot. Nothing to weave.

## inventoryprofilesnext   [anchors: client QoL/support (1)]

- LEAVE — client-side inventory UI only; 0 items, 0 blocks, no recipe types, no loot. Nothing to weave.

## moreculling   [anchors: support/performance (1)]

- LEAVE — render-culling performance mod; 0 items, 0 blocks, no content surface. Nothing to weave.

## lootr   [anchors: support/QoL (1)]

- from: per-player loot instancing mechanism | via: loot-seed | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: Lootr's mechanic ensures every player rolls their own loot tables — it's a fairness layer, not a regional-scarcity gate; M-30 applies to *ore-gen* locking goods to regions, not loot fairness. No motif fits; the service is ambient infrastructure.
- LEAVE — QoL loot-fairness mechanic for multiplayer; the mod's own block items (lootr:lootr_chest etc.) are transparent wrapper containers with no connective role. No weave surface after rejecting forced economy link.

## mushroomquest   [anchors: survival (1)]

- from: common mushroom caps (bay bolete, artist conk, etc.) | via: farmersdelight:cooking / extradelight:oven | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foragers hand their harvest to a cook running Farmer's Delight pots/ovens — mushrooms become prepared dishes and broths, routing the forage-loop output into the food-processing chain
- from: deadly/poisonous mushroom caps (effect-bearing, mythical tier) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit-fire transmuting a deadly fungal cap into an occult reagent reads as alchemical sense — poison essence from nature's toxin
- from: rare/mythical mushrooms (effect-bearing caps) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: M-11 via occultism:spirit_fire already covers this slot cleanly; adding a second magic-reagent route on the same material is redundant unless reagent-ownership splits them — prefer one clean path. Reject to avoid double-routing the same material.
- from: effect-bearing mushrooms (any tier) | via: bountiful Decree objective pool | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bounty board that requests rare foraged mushrooms creates repeating demand — foragers go out specifically to fill orders, closing the survival-production→economy consumption arc
- from: glowshrooms (light-bearing blocks) | via: create:crushing → byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco blocks crushing back to raw — glowshroom blocks are organic/natural, not metal/stone deco; forcing them through a Create crusher for an XP nugget is tonally odd and adds no meaningful loop value. REJECT.
- REWORK: dossier candidate "economy via Numismatics shopkeeper — sell rare mushrooms as luxury goods [M-09]" — M-09 is retired; bare sell links are not weaves. REWORK to M-26 consumption via bountiful Decree (accepted above). Dossier candidate for M-11/M-10 magic split is reasonable; collapsed to one clean M-11 path (accepted) and M-10 rejected as redundant.

## platform   [anchors: support/library (1)]

- LEAVE — cross-platform developer library; 0 items, 0 blocks, no gameplay surface. Nothing to weave.

## bountiful   [anchors: economy (1)]

- from: bounty reward pool | via: config — payout set to numismatics:cog/spur/bevel | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: this makes Bountiful an NPC coin faucet — the board pays out coins to the player for completing objectives, which is exactly the NPC-coin-source pattern M-14 was cut for. The player-run ruling requires coins to flow player→player (M-08 is player-pressed metal, not board-dispensed). REJECT bare reward-to-coin link.
- from: bounty Decree objective pool | via: config — objective requests Create-processed goods, magic reagents, or crop outputs | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Decrees that demand surplus production outputs (processed iron sheets, rare mushrooms, brewed potions) create repeating consumption demand, pulling from every production pillar and keeping supply meaningful — the loop's closing arrow
- from: bounty board Decree pools | via: config — objectives target Serene Seasons seasonal crops | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a board demanding seasonal produce means the objective pool shifts with the calendar — foragers and farmers pursue seasonal objectives, tying the board's demand rhythm to the survival/seasons pressure
- from: bounty kill-objectives | via: config — request boss-route drops as objective items | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist farms a boss drop (danger output) and turns it in to the board — the board is the distribution point for the combat-supply trade, connecting danger farmers to non-combat players who benefit from the drop
- from: Reputation → rare-bounty unlock | via: config — high-rep bounties request colony goods | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Reputation tiers that gate access to bounties requiring MineColonies-produced goods make colony development a progression gate for the best board rewards — colony route feeds bounty economy
- REWORK: existing economy anchor is sound. Dossier candidate "reward table → Numismatics coin [M-08/M-09]" is a bare NPC faucet — REJECTED (see above). The four accepted candidates give Bountiful a genuine second anchor in survival (M-16, M-34) and deepen its economy role via demand-gating (M-26, M-28). OK — existing economy anchor sound; needs demand-gating weaves to earn its place.

## modernfix   [anchors: support/performance (1)]

- LEAVE — JVM/loader-level performance patches; 0 items, 0 blocks, no content. Nothing to weave.

## gtmogs   [anchors: survival, economy (2)]

- OK — connections sound. GTMOGS is the worldgen framework that *enables* M-30 (regional scarcity) and feeds M-03/M-08 downstream; it is the foundational layer, not a mod that itself routes through methods. No new weave candidates surface — it has no items to route and no methods to pull through. Any weave belongs on downstream mods consuming its scarce ore outputs.
- REWORK: dossier notes "no weave to author" which is correct. No existing connection weaknesses found — its 2-anchor posture (survival worldgen + economy via scarcity foundation) is structurally correct. Both anchors are earned.

## letmefeedyou   [anchors: support/QoL (1)]

- LEAVE — behavior-only player-feeding interaction; 0 items, 0 blocks, no recipe types. Nothing to weave.

## create_ltab-3.9.2   [anchors: Create, survival (2)]

- from: Create-themed structure loot tables (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a Numismatics coin denomination (e.g. a small cache of Cogs/Spurs) into Create-ruin loot tables means explorers returning from a Create structure bring back the medium of exchange — exploration yields coin without an NPC faucet, routed through player discovery
- from: Create-themed structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-02 is mob-drop reagent sink — routing a magic reagent into a structure chest isn't a mob-drop; while loot-seeding magic reagents into structures is plausible, this mod's tone is Create-industrial ruins, not arcane vaults; a tone clash. Reject.
- from: Create-themed structure loot tables | via: loot-seed | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seeding a boss-key unlock or a Create blueprint fragment into the deepest Create ruins makes structure exploration a legitimate on-ramp to gated tech — finding the ruin is the prerequisite, not just a crafting grind
- REWORK: existing Create + survival anchors are sound. Dossier notes "loot edit, not a method weave — leave" for economy/magic, but M-08 coin-seeding via loot-table is explicitly listed as a valid loot-seed delivery mechanism in the briefing ("a boss/structure feeding coin (M-08) is a REAL candidate — do NOT LEAVE a loot-bearing structure mod"). Upgrading dossier candidate from LEAVE to ACCEPT for M-08 coin-seed.

## createblockchain   [anchors: economy, Create (2)]

- from: FE input chain (FE sourced from createaddition electric motor running on scarce processed metal) | via: create:pressing / create:mixing → createaddition:charging → createblockchain:currency_miner | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins trace back to regional scarcity — a player who controls the scarce ore also controls the coin press, making minting a genuine specialization (M-08 reframed: the minting route, not a faucet, because FE feedstock is a bottleneck)
- from: Mining Core (worldgen geode consumable, ~1 per 30 chunks) | via: createblockchain:currency_miner (requires core to run) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: geodes are region-scattered — a player who finds a core cluster controls coin production for their region, making mining-core locations a trade asset (scarce input → gated economy output)
- from: piggy bank loot-chest spawns | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy-bank chest loot delivering coins to any explorer is an NPC-faucet-equivalent (no player pressed those coins); the coin enters the economy outside player production. REJECT as bare faucet.
- from: FE consumption (createaddition FE → currency miner) | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: the FE bridge (M-17) is already implicit in the existing Create anchor — createblockchain already uses create:mechanical_crafting + create:mixing per its jar data. Adding M-17 as a separate candidate is redundant overlap with the accepted M-08 chain above.
- REWORK: existing economy + Create anchors are sound. The dossier's "M-08-adjacent deepening" suggestion is correct and accepted above (FE chain → scarce-metal traceability). Piggy-bank loot is flagged REJECT (NPC faucet). No structural weaknesses in existing anchors.

## endermoon   [anchors: survival (1)]

- from: Ender Moon event (mass enderman spawns → ender pearl surge) | via: config/event-gate → lunar-gated ender pearl supply | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: ender pearls are a key magic reagent (Ars Nouveau, Occultism); the Ender Moon is the only night the pearl supply floods — a magic craftsperson times their Eye of Ender / Ars ritual prep around the lunar event. This is the exact M-22 "lunar reagent" pattern.
- from: Ender Moon event (Super Ender Moon — all-mob surge) | via: event-gate | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Super Ender Moon is the dangerous night that forces a combat-specialist response — mob drops flood the market on that cycle, making combat supply (M-34) a lunar-cyclical event rather than steady grinding
- from: Ender Moon event (enderman spawn surge) | via: loot-seed / event-trigger | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: endermoon has no items and no loot tables (loot=no per digest); any economy connection would be indirect via ender pearl drops, which is the M-22 magic link already accepted. Economy demand-gating doesn't have a direct method to route through here. REJECT.
- REWORK: existing survival anchor is sound but undersells the mod — the two accepted candidates (M-22 lunar reagent + M-34 combat-supply cycle) are the stronger weaves and both are earned. Dossier correctly identified "none — leave" but the M-22 pattern covers endermoon explicitly ("applies to ALL the moons"). Upgrading from LEAVE to 2-anchor.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]

- OK — connections sound. Create + aeronautics is the right posture; cardboard-plane logistics is the aeronautics logistics arm. The dossier correctly notes "light economy adjacency exists but leave unless trade tooling wants it." No new weave candidates that survive method-pull: the mod has 0 blocks, all items are delivery-infrastructure (planes/signs/tickers), no material to route through a foreign method. The economy adjacency (remote trade fulfillment) would be M-29 cross-route dependency, but there's no recipe method to author it through — it's behavioral.
- from: cmpackagecouriers package delivery | via: emergent play | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: M-29 requires a recipe that forces cross-route material dependency; here the link is behavioral (players use it for trade logistics), not a recipe authoring target. No method to route through; no-motif in the recipe sense. REJECT.

## lithostitched   [anchors: support/library (1)]

- LEAVE — worldgen API library; 0 items, 0 blocks, no loot, no recipe types. Nothing to weave.

## emojitype   [anchors: support/client UI (1)]

- LEAVE — client-side Unicode chat shortcode helper; 0 items, 0 blocks, no content. Nothing to weave.

## miningspeedtooltips   [anchors: support/client UI (1)]

- LEAVE — tooltip display mod for mining speed; 0 items, 0 blocks, no content. Nothing to weave.

## bigsignwriter   [anchors: support/client UI (1)]

- LEAVE — client-side sign large-text UI helper; 0 items, 0 blocks, no content. Nothing to weave.

== CHUNK COMPLETE ==
