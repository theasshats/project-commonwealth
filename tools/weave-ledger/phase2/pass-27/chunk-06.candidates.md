# Phase 2 candidates — chunk-06

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — zero-content code QoL mod; adds no items, blocks, recipes, or loot. Crafting-grid buttons have no material surface to route through any method. Genuine zero-surface library.

## moonlight   [anchors: support/library (1)]
- LEAVE — pure API library (dynamic registration, map markers, virtual fluids). No player-facing items; loot=no. The weaving happens in the dependent mods (Supplementaries etc.), not here.

## biolith   [anchors: support/worldgen API (1)]
- LEAVE — worldgen biome-placement framework; zero items, zero loot. The biome content belongs to the mods that use it as a substrate.

## astikorcartsredux   [anchors: survival (1)]
- from: plow/reaper implements | via: create:item_application or crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a plow blade and reaper cutting-bar are iron-worked parts — having Create pressed iron sheets (or a mechanical-crafting step) gate the implement tier makes the farm tool a downstream product of the Create spine, not just sticks-and-planks.
- from: reaper harvest output (bulk crops) | via: create:milling or farmersdelight:cutting | to: create / survival | motif: M-12 | power: everyday | verdict: REJECT | reason: the reaper already outputs raw crops; milling the crops is a link on the crop itself (dynamictrees/farmersdelight side), not on astikorcartsredux — double-counting a downstream step that belongs to the input, not this mod.
- from: supply cart / animal cart | via: aeronautics / logistics framing | to: aeronautics | motif: M-31 | power: everyday | tone: clash | verdict: REJECT | reason: supply carts are horse-drawn overland — pulling them into the aeronautics/logistics arm is a tone clash (draft animal ≠ airship freight); this mod sits comfortably as early-game ground transport and does not need an aeronautics edge.
- REWORK: existing single survival anchor stands on its own; the dossier notes the dossier-suggested "gate implements on Create iron sheets" (M-05) is WEAK. Upgrading to ACCEPT with M-05 at mid-power is the second anchor; depth is appropriate (a craftable implement is not a basic component). OK — one accepted weave takes this to 2 anchors.

## formationsnether   [anchors: survival (1)]
- from: Nether structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ruins are where occult practitioners left their marks — seeding occultism reagents (datura seeds, warp/demon residue) and Ars mana items into Formations Nether altar/sanctuary chests ties ruin-diving to magic progression, so a player loots a Nether altar and comes back with ritual components rather than just vanilla loot.
- from: Nether structure loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: dangerous Nether structure content (boss-area loot) is the combat specialist's trade good — seeding a rare crafting intermediate or a Numismatics-relevant scarce component into the castle/sanctuary loot creates genuine supply-side demand (combat specialist raids Nether, sells unique drops to non-combatants).
- from: Nether structure loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: one of the rarer Nether sanctuaries could hold a boss-key fragment (e.g. blaze-derived component, rare alloy schematic) that gates a high-tier Create machine — making Nether ruins a prerequisite for tech progression not achievable by ore-grinding alone.
- from: Nether structure loot | via: loot-seed as regional-scarcity good | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: M-30 is specifically about ore-gen regional locking — applying it to dungeon loot is a motif stretch; the demand-gating via M-34 already captures the cross-player dependency, so this would duplicate without adding clarity.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is a juicy desert forage; milling it into a cactus pulp/dye (yellow-orange pigment or a food intermediate) follows the same logic as milling other fruits — raw desert-biome output becomes a processed Create good, giving the desert forager a reason to feed the Create spine.
- from: dynamictreesplus:mushroom caps (brown/red) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: giant mushroom caps are bulk organic forage; milling them follows the same Create mushroom-stew/dye pattern — caps → mushroom powder / spore dust is a natural intermediate for magic inks or Ars pigments.
- from: dynamictreesplus:saguaro_fruit | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: saguaro fruit is a mundane food item — transmuting a cactus fruit through a demonic ritual is tonally incoherent; M-11 is for dark/otherworldly drops, not fruit.
- from: dynamictreesplus:mushroom_branch / mushroom caps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: giant mushroom mycelia have alchemical tradition — an imbued mushroom cap as a magic growth-reagent (feeding Ars growth-spell glyphs or as a potion ingredient) ties the naturalistic worldgen output to arcane production; fits the organic↔magic axis without overloading dark ritual.

## appleskin   [anchors: support (1)]
- LEAVE — client HUD readout only; zero items, zero loot, no material surface. Genuine zero-surface support mod.

## cloth_config   [anchors: support/library (1)]
- LEAVE — config screen API library; no items, no loot, no gameplay behavior. Genuine zero-surface library.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine API; no items, no loot. Genuine zero-surface library.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (upgraded appliance tier) | via: create:mechanical_crafting or create:pressing | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen's Oven and Fridge are metal appliances — requiring Create brass sheets / copper casings to craft the upgrade tier makes the kitchen a downstream consumer of Create fabrication, tying the domestic food layer to the tech spine. (Basic counters stay vanilla; only the powered/upgraded blocks require Create parts — depth scales with power.)
- from: cookingforblockheads toaster output (toast) | via: cookingforblockheads:toaster → farmersdelight:cooking / extradelight chain | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is an intra-survival link (food → food), not a cross-system weave; the toaster method is already the mod's own recipe-type; routing through it gives no new anchor.
- from: cookingforblockheads kitchen as MineColonies cook building | via: config / MineColonies hut recipe | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies has a Cook hut — the Cooking for Blockheads kitchen naturally becomes the player-side companion to a colony kitchen, where the colony provides baseline food production (M-28 cheaper route) but the player-kitchen provides variety and quality; the two complement rather than compete.
- REWORK: existing survival-only anchor is fine as a floor. The two accepted weaves (M-05 Create appliances + M-28 colony kitchen) bring it to ≥2 anchors and are coherent.

## invtweaksemuforipn   [anchors: support/QoL (1)]
- LEAVE — pure compat shim (keybind emulation layer); zero items, zero loot. Genuine zero-surface client glue.

## irons_lib   [anchors: support/library (1)]
- LEAVE — shared framework library for Iron's Spellbooks; the Transmog Table and Player Statue are cosmetic-only, no routable material. The weaving happens in irons_spellbooks, not here.

## rechiseledcreate   [anchors: create, decoration (2)]
- REWORK check: dossier says ≥2 (Create kinetic + decoration). Connections are sound — the Mechanical Chisel is a genuine Create kinetic method, and chiseling decorative blocks is its core surface. No weak or arbitrary edges to flag.
- from: rechiseledcreate chiseled variants | via: create:deploying / item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: chiseling is already M-04/M-05 territory routed through the Mechanical Chisel (the mod's own native method); adding another deploying layer would be redundant depth on a deco conversion that's already appropriately shallow.
- OK — connections sound; already 2 anchors (Create + deco/survival build palette).

## occultism   [anchors: magic (1)]
- from: occultism:silver_ingot / iesnium_ingot | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's silver and iesnium ores get the same Create crushing pass other ores do — raw ore → crushed + byproduct; natural extension of M-03 across all pack ores.
- from: foreign mob drops (various packs' boss drops) | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-11 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: spirit_fire is the canonical transmutation sink — any drop that has nowhere to go (boss trophy, exotic flesh, strange crystal) routes through it to yield essences, turning isolated kill-loot into ritual fuel; already the established pattern per 34/35-magic-web scripts.
- from: occultism:spirit_trade (summoned trader) | via: occultism:spirit_trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who has invested in Occultism summons a trader-spirit to source otherwise-unobtainable otherworld materials — this is labor/service (the magic specialist provides access to goods non-magic players can't get), not an NPC coin faucet; the value flows player→player when the magician sells the acquired materials.
- from: occultism:dimensional_mineshaft (djinni miners) | via: occultism:miner | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: binding a Djinni to a void mineshaft is the magic route to ore acquisition — a parallel logistics arm that doesn't require aeronautics but does require deep ritual investment; M-18 accepted "ship it, see what comes up."
- from: occultism:datura (crop) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: datura is primarily a ritual input (reserved reagent-adjacent); milling it into a Create intermediate without an Occultism gating context would bypass its ritual identity and trivialize a key magic crop. Better handled as M-11 ritual-only.
- from: occultism:silver_ingot | via: numismatics mint (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: occultism:silver_ingot is the pack's real silver (c:ingots/silver) — pressing it into Numismatics silver coins ties the magic pillar's exclusive ore directly to the player-minted currency medium; a magic specialist who mines silver becomes the pack's silver-coin mint.
- REWORK: current magic (1) anchor is clearly the floor; the five accepted weaves above bring it to create + magic + economy, which is the target ≥2. OK — connections now sound once Phase 3 authors them.

## libipn   [anchors: support/library (1)]
- LEAVE — GUI/config library for IPN; zero items, zero loot. Genuine zero-surface library.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: frozen flesh from a cold-biome undead is a recognizable ritual component — burning it in spirit fire yields a cold-aspected essence (foliot or similar); the themed drop now has a magic use that rewards the biome-specific combat encounter.
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-infused flesh (Nether-variant zombies) transmutes cleanly into a heat/afrit essence via spirit fire; the elemental thematic pairing is obvious to any player.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted nether wart is an arcane ingredient — imbuing it unlocks a corrupted-magic reagent for Ars spells or a dark-flavored source_gem infusion; thematically coherent with the swampy/rotted aesthetic.
- from: rottencreatures drops (frozen/magma flesh) | via: create:haunting | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: create:haunting (soul-fire transmutation) converts mob flesh into soul-touched variants — frozen flesh haunted into a chill residue is a light M-19 adjacent link that ties the bestiary drops into Create's processing web without needing dark rituals.
- from: rottencreatures:treasure_chest (pirate chest loot) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Dead Beard's pirate treasure chest is thematically a trade-route prize — seeding it with a Numismatics rare coin denomination or a scarce trade component makes the pirate-captain kill a combat-specialist supply event (hunt the rare undead, bring back economic goods non-fighters can't get).
- from: rottencreatures:mob_heads | via: create:mechanical_crafting | to: create | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: mob heads as Create mechanical-crafting inputs has no thematic hook — the heads are decorative trophies; forcing a tech-recipe use is arbitrary and doesn't survive theme-fit scrutiny.
- REWORK: single survival anchor is the floor. Five accepted weaves (magic×3 + create×1 + economy×1) give it solid multi-pillar coverage. OK once authored.

## createblockchain   [anchors: economy, create (2)]
- REWORK check: dossier records economy + Create (2 anchors). The FE→coin minting is the core mechanic; the geode worldgen is the scarcity gate. Existing connections are internally sound.
- from: createblockchain:mining_core (geode worldgen consumable) | via: GTMOGS regional ore-gen / loot-seed | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: mining cores spawn in geodes regionally (~30-chunk spacing) — configuring the geode placement to be biome-or-region-specific makes coin minting a regional specialization, not just a time gate; the region that has geodes becomes the mint; others buy coins.
- from: createblockchain currency miner (FE demand) | via: createaddition:charging → create energy chain | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: this is already the existing Create anchor (the miner runs on FE from Create-Addition); noting it here would duplicate the existing connection rather than add a new pillar. REWORK note: the existing Create link is sound but could be deepened (noted in dossier), not a new weave.
- from: createblockchain:piggy_bank loot | via: loot-seed into overworld chests | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks dropping coins in chests is already the mod's built-in behavior; there's no Phase-3 weave to author here — it's native functionality, not a cross-mod link. M-26 consumption sink requires an item being *spent*, not found.
- OK — two anchors (economy + Create) are sound. The M-30 regional geode placement is the strongest addition to deepen the scarcity→economy arc.

## particlerain   [anchors: support/client (1)]
- LEAVE — client-side particle renderer; zero items, zero loot, no material surface. Genuine zero-surface atmospheric mod.

## sable   [anchors: support/physics engine (1)]
- LEAVE — physics engine library backend for aeronautics; zero items, zero loot. The weaving happens in Create Aeronautics and its compat mods, not in the library itself.

## vinery   [anchors: survival (1)]
- from: vinery wines / ciders (finished consumables) | via: create:milling or create:pressing grapes/apples | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: grape/apple pressing is mechanically identical to what a Mechanical Press does — routing grapes through create:pressing yields grape juice as a Create intermediate, giving the Create spine a role in the fermentation supply chain (press first, barrel-ferment second) without removing the manual grapevine_pot path.
- from: vinery:apple_mash (press output) | via: extradelight:vat or alcohol_industry:alcohol_boiling | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: apple mash is exactly the feedstock an evaporator/vat would distill into cider concentrate or a cooking reduction — routing the mash through ExtraDelight methods ties the press output into the broader food chain as a useful intermediate rather than a dead end.
- from: finished wines (effect-bearing, aged) | via: vinery aging × M-35 maturation | to: economy | motif: M-35 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: wines age in-world over time (1 in-game year) — a vintner who invests in multi-year aging stock has a genuinely scarce, time-gated good that non-food players need for buffs; the aging time alone is a natural trade driver (buy young wine now, age it, sell aged wine later), which is the maturation specialist role M-35 defines.
- from: vinery wines as MineColonies colony upkeep/morale | via: MineColonies request system | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: if configured as a colony upkeep resource (workers get a morale/productivity buff from wine), demand never zeroes out — the colony becomes a consumption floor, completing the loop (grow→press→age→colony); this is M-28 colony route creating reliable demand.
- from: vinery wines as "sellable luxury" | via: Numismatics shop | to: economy | motif: (none — bare sell link) | verdict: REJECT | reason: "wine is sellable" is the ambient endpoint, not a weave; no M-09 (retired); demand must be gated by M-26/M-28/M-35 mechanics, which the accepted entries already cover.
- from: vinery:chorus_wine (chorus-fruit variant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: chorus wine (End-origin grape) is an arcane ingredient with natural resonance — imbuing it into a mana-augment reagent for Ars rituals ties the exotic wine variety to magic production; the End-plant origin makes the arcane use feel earned.
- REWORK: existing survival-only anchor is the floor. Five accepted weaves bring it to create + survival + economy + magic — solid multi-pillar. OK once authored.

== CHUNK COMPLETE ==
