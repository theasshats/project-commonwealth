# Phase 2 candidates — chunk-10

## curios   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; provides accessory slots for other mods' items but registers no items, blocks, or methods of its own. No material surface to route.

## entity_model_features   [anchors: support/client rendering (1)]
- LEAVE — client-only rendering engine (OptiFine CEM replacement); zero items, zero blocks, zero methods. No content to weave.

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — invisible code library (GUI/block-entity/packet scaffolding); zero items, zero blocks, zero methods. No content to weave.

## jeed   [anchors: client UI/support (1)]
- LEAVE — JEI display-only addon; its two "recipe-types" (jeed:effect_provider, jeed:potion_provider) are viewer-category registrations, not craft-able methods. No item or material surface.

## ctov   [anchors: survival (1)]
- from: ctov village/outpost loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: biome-themed villages are the natural place to find coin stashes and bounty contracts — seeding Numismatics coin (cog/spur) into ctov chest loot makes villages a tangible economy entry point for new players landing in a settlement.
- from: ctov village/outpost loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: pillager outpost chests feeling like a place to find a strange reagent (a source gem fragment, an arcane scroll shard) anchors magic exploration to a recognisable structure — players raiding outposts discover their first magic ingredient naturally.
- from: ctov village/outpost loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding a bounty slip into outpost/village chest loot bootstraps the bounty-board economy — players find their first bounty task in a structure rather than having to seek out a board, lowering the on-ramp friction. (provisional motif)
- from: ctov structures | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: boss-key gating (M-15) specifically calls for boss drops as gate items for complex Create recipes — a structure's ordinary chest loot seeding a key component is a weaker form of the same idea and would dilute the boss-key identity. Better served by M-08/M-14 coin and reagent seeds.
- REWORK: existing anchor is "survival (1)" — one is the floor. The three ACCEPT loot-seeds above push ctov toward economy (coin + bounty seeds) and magic (reagent seed), reaching the ≥2 goal via loot-table delivery.

## createblockchain   [anchors: economy, Create (2)]
- OK — connections sound. Currency Miner is already the Numismatics money faucet (economy) built via create:mechanical_crafting/mixing (Create). The dossier notes a useful deepening (FE sourced from scarce-metal processing → coin traceable to regional scarcity, M-08-adjacent) but this is a refinement of the existing economy edge, not a new pillar. No forced third anchor needed; flag the deepening as a config/balance note only.
- from: createblockchain:mining_core (geode-worldgen consumable) | via: config/scarcity | to: survival | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mining Core is already a worldgen-limited consumable gating coin output — formalising it as an attunement-catalyst-style scarcity lever (config: low spawn rate, not renewable) directly ties the coin faucet to exploration pressure, making the money supply feel earned rather than free. Survives red-team: it is literally what the geode is already doing; the weave just names it and cements the config choice.

## corgilib   [anchors: support/library (1)]
- LEAVE — pure code library (loot/worldgen/datagen helpers for dependent mods); zero items, zero blocks. No content surface.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller | via: recipe (create:mechanical_crafting) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the controller is crafted from precision mechanism + electron tubes already; routing it through a sequenced assembly or at minimum a mechanical_crafting step (its craft already touches Create internals) keeps it as a Create-depth item that belongs in the tech progression. One-is-the-floor: it currently sits on aeronautics alone — adding an explicit Create recipe step confirms the Create anchor formally.
- from: create_tweaked_controllers:tweaked_lectern_controller | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the controller is a control device, not a trade good or bounty target — seeding it into the economy via bounty/trade would be arbitrary and tone-clashing (bounties should call for mob drops or material quotas, not precision control hardware). Reject.
- from: create_tweaked_controllers:tweaked_linked_controller | via: recipe | to: magic | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: charging a control device via FE bridge into magic is a tone mismatch — the controller is industrial/redstone, not arcane; pairing it with magic infusion reads as forced. Reject.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen datapack (terrain shaping only); zero items, zero blocks, zero loot tables, zero recipes. Thematic adjacency to scarcity spread is real but offers no recipe-graph seam. Nothing to route.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — magic-internal bridge (Ars Nouveau ↔ Iron's Spellbooks mana unification); zero items, zero blocks, no item I/O surface. It IS already a weave (magic↔magic internal) but has no seam to route a second pillar through without forcing an artificial edge.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. The mod is itself a bridge (colony workers ↔ Create Stock Link / IE / Farmer's Delight / BotanyPots) and holds survival + Create anchors. Its whole purpose is wiring MineColonies into the wider pack.
- from: minecolonies_compatibility Butcher / Farmer workers | via: config/worker integration | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony butchers and farmers producing processed goods (Farmer's Delight cuts, cooked meats) naturally feeds the Numismatics sell-loop — their outputs are ready luxury/trade goods. Wiring colony produce into M-09 (luxury good → coin) gives the economy pillar a steady non-combat supply chain. Survives red-team: colony workers already produce excess; pricing their output is the natural next step.
- from: minecolonies_compatibility Gunner (TaCZ) job | via: loot-seed / bounty | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: colony Gunners fulfilling bounties (kill mob quotas, turn in to bounty board) is a direct M-14 (bounty → drop economy) instantiation — the colony's combat arm becomes a player-economy driver, not just an NPC feature. (provisional motif)

## polymorph   [anchors: support/QoL (1)]
- LEAVE — invisible recipe-conflict-resolution utility; zero items, zero blocks, zero methods. No game content to weave.

## mffs   [anchors: Create, survival (2)]
- OK — connections sound. The gold-standard weave is already authored: focus_matrix gated on create:electron_tube (M-05), projector + interdiction_matrix as create:sequenced_assembly chains (M-06), TFMG steel mid-tier. This is the reference example for the pack.
- from: mffs:coercion_deriver / projector | via: recipe/boss-drop | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a force-field projector able to lock down a base entirely is endgame-tier base defense — gating the Projector's final sequenced-assembly step on a boss drop (e.g. a Cataclysm boss core or Deeper Darker warden-adjacent drop) makes earning full base protection feel commensurate with the threat it guards against. Note: the dossier records sequenced_assembly chains already authored (M-06); this is an additive boss-key layer on top, deepening the endgame gate, not replacing the chain.
- from: mffs modules (anti_hostile, anti_personnel) | via: recipe | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: force-field modules are functional military hardware — pricing them as coin-economy goods reads as a stretch. The connection between base-defense and the trade economy is indirect enough that it's arbitrary. Reject; the M-15 boss-key is the cleaner second weave surface.

## inventoryprofilesnext   [anchors: client QoL/support (1)]
- LEAVE — client-only inventory sorting utility; zero items, zero blocks. No game content to weave.

## gravestone   [anchors: survival (1)]
- from: gravestone:gravestone block | via: recipe | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: routing a gravestone block through Create's crushing recycler (M-04) is technically possible (stone block → gravel + XP) but tonally strange — a grave is not decorative scrap, and players would find "crush your tombstone for gravel" jarring rather than sensible. Reject on tone; the one-item surface (gravestone block + obituary paper) is too thin and too somber-functional to force a recipe edge.
- LEAVE — death-recovery utility block; the gravestone and obituary are functional QoL items with no coherent second anchor. Any weave would be contrived.

## betterpingdisplay   [anchors: client UI/support (1)]
- LEAVE — UI utility (numerical ping display); zero items, zero blocks. No content surface whatsoever.

## create_better_villagers   [anchors: Create, economy (2)]
- OK — connections sound for current anchors (Create parts via villager trades, emerald economy).
- from: create_better_villagers villager trades | via: config/trade re-denomination | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT | hook: re-denominating the villager workers' trades from emeralds to Numismatics coin (cog/spur tier) ties the Create-parts supply chain into the pack's actual currency rather than vanilla emeralds — a player earning coin can spend it on Create parts, closing the loop. Tagged provisional per M-21 status; surface for review. (provisional motif)
- from: create_better_villagers Miner profession | via: loot-seed | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: the Miner villager buys/sells raw ore/metal — there is no seasonal-reagent angle here. M-16 is for crops/materials gated by Serene Seasons; applying it to a villager profession is a stretch. Reject.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-teleport fix; zero items, zero blocks. No content surface.

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Gear built through Create methods (sequenced_assembly, mechanical_crafting) for personal flight & transport.
- from: create_sa:brass_drone_item (drone) | via: recipe / loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: drones can serve as delivery/courier scouts for economy logistics — adding a bounty or trade use for drones (e.g. a Numismatics market buys a configured drone for a fixed coin reward, or a drone component is a bounty target) threads the gadgeteer gear into the trade loop. Survives red-team: an industrial drone as an economy commodity is sensible in a Create-based trade setting.
- from: create_sa blaze line tools (blazing_pickaxe, blazing_axe) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: blaze-fuelled Create tools being further attuned via arcane imbuement (adding a fire-affinity enchant effect or mana-storage) reads naturally — the blaze is already a magical-adjacent material, and an Ars infusion step on a mid-tier fire-tool is a light single step fitting the power level. Survives red-team: Create blaze tools + arcane infusion is a coherent industrial-magic crossover; not forcing a basic component behind a complex recipe.
- from: create_sa:brass_jetpack_chestplate | via: recipe (create:sequenced_assembly) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: jetpacks are already anchored to aeronautics (personal flight); adding a sequenced_assembly sub-step is a M-06/M-24 overlap on an already-anchored item. The connection is not a new pillar, just recipe depth on the existing anchor. Reject as redundant.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike, raw_perch, raw_lionfish) | via: farmersdelight:cooking / farmersdelight:cutting | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running aquatic fish through Farmer's Delight cutting and cooking boards produces finished seafood dishes that slot naturally into the pack's food/luxury chain — an ocean-specialised player can process catches into sellable product, weaving the aquatic biome into the food economy.
- from: upgrade_aquatic cooked fish / seafood dishes | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: priced cooked-fish dishes (cooked_lionfish as exotic fish, cooked_pike as mid-range catch) in a Numismatics shop makes ocean exploration a viable economic specialisation — fishing is no longer just food; it's income.
- from: upgrade_aquatic:driftwood_* / riverwood_* | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: driftwood/riverwood crushing for gravel + XP (M-04) is technically applicable but low-value — the wood sets are primarily decorative/building, and routing them through a crusher is a weak, mechanical connection with no thematic resonance beyond "wood → gravel." The aquatic food chain (M-12 + M-09) is the coherent story; this would dilute it with a noise edge. Reject.
- from: upgrade_aquatic jellyfish / thrasher mob drops | via: loot-seed / ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: jellyfish and aquatic predators dropping a bioluminescent reagent (usable in Ars Nouveau imbuement or Occultism ritual) anchors the ocean as a magic-ingredient source — a player specialising in aquatic exploration discovers they're also supplying the magic pillar. Survives red-team: bioluminescent/deep-sea material as an arcane reagent is a strong thematic fit.

== CHUNK COMPLETE ==
