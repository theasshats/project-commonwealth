# Phase 2 candidates — chunk-09

<!-- pass-31 | blind mode -->

## rottencreatures   [anchors: survival (1)]

- from: rottencreatures:corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart from a storm-lich or pirate captain has an obvious "dark organic magic" feel; spirit-fire transmuting it into an occultism essence is a natural ritual-sink that a combat specialist farms and trades to a magic specialist
- from: rottencreatures:frozen_rotten_flesh | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: frozen flesh from cold-biome undead routes into Ars imbuement as a cold-attuned reagent — biome-gated mob drops feeding magic rituals is exactly M-02
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-infused flesh through Create's soul-fire haunting is a coherent "fire-tempered" material bridge from combat drops to the Create spine
- from: rottencreatures (boss drops — Dead Beard / Immortal heads) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: rare pirate-captain and storm-lich head drops are prized trophies; a combat specialist farms and trades them — the loot=yes flag means a loot-seed seeding a scarce high-value drop into these tables is the right delivery
- from: rottencreatures:undead_miner_head (4 pickaxe-tier ranks) | via: occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: undead miner heads already absorbed by the mob-head dossier theme; the spirit_fire path (above) covers the organic→magic weave adequately and a second ritual path on a different head is redundant depth, not a second system


## jakes-build-tools-2.0.1.5   [anchors: QoL/building-tools support (1)]

- LEAVE — pure build-assistant toolset (hammer/chisel/trowel/magnet); the tools are consumable builder utilities with no material processing surface and no thematic home in any production/magic/economy/survival pillar. No loot table worth seeding. A forced recipe edge (e.g. gate the hammer through Create) would treat a convenience tool as a progression item — that contradicts the "never gate basics behind complex recipes" guardrail and is thematically incoherent.

## s_a_b   [anchors: Create, aeronautics (2)]

REWORK: existing connections sound — compacting/mixing (Create) and the aeronautics armor-hull role are coherent and mutually reinforcing. No arbitrary links.

- from: s_a_b:hardsteelblock (highest tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard-steel armor plate as a sequenced-assembly multi-stage part (incompletely-formed hull panel → deployer-applied rivet → finished plate) gives the highest-tier hull material genuinely deep Create depth, fitting the GregTech-style "more steps for higher tiers" cost model — and ties combat vehicle hardening to the full Create production spine rather than a single mixing step
- from: s_a_b:lightsteelblock (base tier) | via: create:compacting | to: create | motif: M-06 | power: everyday | verdict: REJECT | reason: light steel blocks are already crafted via create:compacting (inbound weave exists); adding sequenced_assembly to the base tier would gate a basic material behind a deep chain — violates the "never gate basics" guardrail. Endgame-only for M-06.
- from: s_a_b:hardsteelblock | via: loot-seed | to: economy | motif: M-34 | power: endgame | verdict: REJECT | reason: hard-steel hull plates are crafted, not looted; loot-seed is for boss/structure mods. Wrong delivery mechanism.

OK — connections sound on existing 2-anchor set; M-06 deepening on the endgame tier is the only worthwhile addition.


## cold_sweat   [anchors: survival (1)]

- from: cold_sweat:goat_fur / chameleon_molt / hoglin hide (insulating materials) | via: create:filling (waterskin fill) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Hearth (the post-Nether multiblock climate machine) gated on Create brass/copper casing parts — you need the Create spine to graduate from campfire-warming to proper climate control; survival pressure drives Create demand; waterskin fill via create:filling already exists as an inbound edge, so this extends a natural seam
- from: cold_sweat:hearth (higher-tier emitter) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the large climate-radiator as a Create mechanical-crafting recipe requiring brass/casing/andesite-alloy — sizes depth to the item's power (not a basic, it's a post-Nether multiblock), coherently weaves the temperature backbone into the tech spine
- from: cold_sweat insulating armor (goat_fur/chameleon/hoglin set) | via: config tie (cold_sweat sewing-table accepts mob-mod hides as insulation) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: hides from hostile mobs (rottencreatures, alexsmobs, naturalist) feed the sewing-table as insulation inputs — mob pressure → drop → armor upgrade is a clean survival consumption loop (M-26: items spent against pressure); pairs naturally with the rottencreatures weave in this chunk
- from: cold_sweat:filled_waterskin (hot/cold water carrier) | via: create:filling | to: create | motif: M-12 | power: everyday | verdict: REJECT | reason: create:filling already exists as an inbound weave (auto-digest confirms it); this is not a new candidate but an already-existing connection. Not a new weave.
- from: cold_sweat insulated armor | via: bare sell | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: M-09 retired; "insulated gear is sellable" is the ambient endpoint, not a weave. No demand-gating mechanic proposed.


## betterpingdisplay   [anchors: support/client-UI (1)]

- LEAVE — client-side numerical ping display; zero game content, no items, no methods, no loot tables. Nothing to route through any method.


## charta   [anchors: survival (1)]

- from: charta:card_table (bar/casino furniture) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: card tables and bar stools are wooden furniture — routing them through a Create Saw (create:cutting) to produce planks/wood scrap is the standard deco-through-Create recycling pattern; gives the tavern set a Create anchor without forcing meaning where there is none. Lossy by design (M-04).
- from: charta:empty_wine_glass / empty_beer_glass | via: create:pressing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: empty glass vessels are raw deco items with no meaningful "crushed byproduct" — pressing a glass into sand/gravel would be thematically awkward and the value recovery is negligible. M-04 works cleanly for wooden furniture; don't extend it to glass vessels where it loses coherence.
- from: charta card_table / bar furniture | via: loot-seed | to: economy | motif: M-34 | power: everyday | verdict: REJECT | reason: charta generates in villages/dungeons (loot=yes), but the furniture is decorative, not a valuable supply-chain input. Seeding tavern furniture into dungeon loot is not a demand-gating weave; it's ambient deco. Bare sell pattern — REJECT.
- from: charta card gambling | via: no-motif | to: economy | verdict: REJECT | reason: wagering at a card table as a numismatics coin sink requires a Charta betting hook that doesn't exist, and the economy is player-run (coins are a settlement medium). Even if wired, "gamble coins away" is flavor, not a demand-gating link; no applicable motif.


## createmetalwork   [anchors: Create (1)]

- from: createmetalwork processed scarce metal (regional ore → crushed → molten → refined ingot) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the whole point of createmetalwork is higher-yield Create ore processing — the refined metal coming out the other end of crush→melt→cast is exactly the player-minted coin feedstock; a Numismatics press converting processed precious metal into coin makes minting itself a Create specialization and ties regional scarcity to the player economy (M-08 + M-30 together). Strong, dossier agrees.
- from: createmetalwork:crushed_raw_materials/* (magic-mod metals: palladium, quicksilver, etc.) | via: create:crushing → create:mixing | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: createmetalwork already tags crushed forms for palladium (galosphere) and other magic-adjacent metals; routing occultism/galosphere ores through the crush+melt pipeline gives the magic pillar a Create ore-doubling reward and ties its metals to the Create spine — a magic-metal doubling is a cross-route incentive for the magic player to trade with the Create player (or invest in the machine themselves)
- from: createmetalwork molten fluids | via: create:compacting (cast into blocks/plates) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: molten steel/iron cast into structural alloy plates (structural_block precursors) is a natural hull-supply seam — melting and casting the metal is the production step that feeds the aeronautics M-23 structural-alloy chain; connects the foundry to the shipyard
- from: createmetalwork crushed ore byproducts | via: create:crushing (byproduct → experience nugget) | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: byproduct-experience-nugget is already the standard create:crushing pattern (M-03 / M-04 established); proposing it again for createmetalwork's crushed ores would duplicate the existing M-03 established pattern. Not a new weave.


## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

- LEAVE — a single joke/Easter-egg music disc ("Lava Chicken" from the Minecraft Movie). One item, no processing surface, no loot table worth seeding for weave purposes. Forcing a recipe or coin edge on a meme disc is noise. Sanctioned flavor; no weave warranted.


## toomanypaintings   [anchors: support/decoration (1)]

- LEAVE — pure decoration mod (extra painting variants + placement GUI). No items, no blocks, no loot table, no processing surface. Nothing to route through any method. Sanctioned decoration palette; no weave possible.


## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — cosmetic combat-particle mod; the 184 registered "items" are internal particle-holder entries (minecraft:blood1..blood15 etc.), not usable items. No loot tables containing real drops. No material to route. Zero weave surface.


## entity_texture_features   [anchors: support/client-rendering (1)]

- LEAVE — client-side OptiFine-format texture engine (random/emissive entity textures). No items, no blocks, no game content. Pure renderer dependency for resourcepacks. Zero weave surface.


## createaddition   [anchors: Create (1)]

- from: createaddition:charging (FE-charge via tesla coil) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks gear holds FE charges; routing a magic focus or charged staff through Create's FE (via the tesla coil / charging station) makes the electrical layer feed the magic pillar's power-tier — a player who runs the electric sub-system can recharge magic gear, creating a genuine cross-route service link (M-33 service-for-hire also applies here as a secondary read)
- from: createaddition:seed_oil / bioethanol (crop-oil fuel) | via: createaddition:liquid_burning | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed oil and bioethanol are farmed-crop derivatives burned for FE — agricultural surplus feeds the energy grid, closing the loop from survival farming to Create FE production. The farming player's crop surplus becomes a consumption sink that the energy specialist buys, creating cross-route demand (M-26 consumption sink; demand never zeros because FE is always needed).
- from: createaddition:electrum_ingot (crafted from gold + silver, produced by rolling) | via: createaddition:rolling | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum requires a silver source (occultism has real silver — c:ingots/silver) plus gold, run through the rolling mill; this forces the Create-electricity player to acquire occultism silver, making the electrical sub-system dependent on a magic-adjacent ore route and putting cross-route pressure on both sides (M-29 cross-route dependency)
- from: createaddition liquid_burning crop-oil fuels | via: bare sell | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: M-09 retired; "seed oil is sellable" is the ambient endpoint. The M-26 consumption-sink framing above is the correct read, not a vendor sale.
- from: createaddition:biomass / biomass_pellet | via: create:compacting | to: create | motif: M-12 | power: everyday | verdict: REJECT | reason: biomass already feeds the liquid_burning energy path (captured by M-26 above); adding a separate compacting step for pellets would be redundant depth on the same everyday material, not a new system anchor. One weave per material surface at this power tier.


## crash_assistant   [anchors: support/client-utility (1)]

- LEAVE — crash-diagnostic GUI utility; no items, no blocks, no gameplay content. Pure tooling for player support. Nothing to weave.


## modernfix   [anchors: support/performance (1)]

- LEAVE — JVM/loader-level performance patches (lazy init, dynamic resources). No content, no items, no methods. Zero weave surface.


## recipe_integration   [anchors: support/library (1)]

- LEAVE — a conditional datapack-as-mod that auto-generates ~3,700 cross-mod recipes; it IS the connective layer, not a content node. It has no items of its own and its 82 c:tags mostly reference uninstalled mods (Aether, Mekanism, MI, GT) and are inert in this pack. Note for Phase 3 / audit: verify which of its recipes actually fire against the Derpack-X modlist and assess whether any duplicate or conflict with weaves authored manually — but that is an audit task, not a weave proposal.


## dtterralith   [anchors: survival/worldgen-compat (1)]

- LEAVE — a worldgen compatibility layer (Terralith × Dynamic Trees); registers Dynamic Trees species for Terralith biomes, inherits Dynamic Trees mechanics. Its output is ordinary logs/saplings that already flow downstream via vanilla wood → Create milling / cooking webs. No bespoke material to route; no standalone processing; no loot table that a weave would seed. The compat bridge is its purpose — nothing to add on top.


## letmefeedyou   [anchors: support/QoL (1)]

- LEAVE — behavior-only multiplayer QoL mod (player-to-player food feeding). No items, no blocks, no methods, no loot tables. Nothing to route through any method.


## multipiston   [anchors: support/MineColonies-dependency (1)]

- LEAVE — a MineColonies/Structurize dependency block (super-piston for colony builders); pulled in automatically, not surfaced to players as standalone content. Moves world blocks but does not consume/produce items or fluids. One block/item with no processing surface and no loot table; nothing to route.


## bettermodsbutton   [anchors: support/client-UI (1)]

- LEAVE — client-side pause-screen Mods button; pure UI, no items, no blocks, no game content. Nothing to weave.


## create_enchantment_industry   [anchors: Create (1)]

- from: create_enchantment_industry liquid XP (experience_bucket fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP is a storable, pipeable fluid that an Ars imbuement apparatus could consume as a ritual power source — the arcane-industrial flavor is coherent (enchanting is already arcane-adjacent), and gating an Ars imbuement tier on a liquid-XP infeed bridges the Create enchantment spine to the magic pillar; the Create player with a mob farm becomes the XP supplier the magic player needs
- from: create_enchantment_industry:blaze_enchanter (automated enchanting) | via: create_enchantment_industry:grinding (mechanical grindstone) → ars_nouveau:enchanting_apparatus | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: an endgame hyper-enchanted piece of magic gear (Iron's or Ars) requiring both a Create-enchanted base (blaze_enchanter output) AND an Ars enchanting_apparatus step forces cross-route dependency — neither the Create specialist nor the magic specialist can fully self-enchant the top tier alone (M-29). Power-calibrated: only for the highest-tier magic weapon/focus, not for everyday enchanting.
- from: create_enchantment_industry:printer (book/schedule copying, fuelled by liquid XP + liquid ink) | via: minecolonies research | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies research unlocks are book-gated; a printer that copies written books (including research codices) at liquid-XP cost creates a research-reproduction service — the Create-enchantment specialist runs the printing press to supply colony research books, making knowledge a distributable good and tying the production spine to the economy's research-gate axis (M-37 research/knowledge gate)
- from: create_enchantment_industry liquid XP | via: bare sell | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: M-09 retired. "Liquid XP is sellable" is ambient; the demand-gating framing (M-37 / M-10 above) is the correct weave.
- from: create_enchantment_industry:experience_cake (XP-bearing food) | via: farmersdelight:cooking | to: survival | motif: M-12 | verdict: REJECT | reason: farmersdelight:cutting is already an inbound weave (auto-digest), and the experience_cake is a novelty food item, not a survival pressure driver. Cross-system food routing here adds no new system anchor — the mod is already using farmersdelight methods; this would deepen Create→survival at a trivially low-value item, not a real weave.

== CHUNK COMPLETE ==
