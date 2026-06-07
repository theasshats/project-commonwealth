# Phase 2 candidates — chunk-16

## numismatics   [anchors: economy, Create (2)]
- REWORK: OK — connections sound. numismatics IS the economy hub; it is the destination other mods weave TO (M-08/M-09). No outgoing edge needed; leave as the sink.

## simplehats   [anchors: support (1)]
- from: rare hats (loot-drop collectibles) | via: loot-seed into boss/dungeon tables | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare hats found in boss chests make dangerous fights worth loot-hunting, not just drop-farming; a cosmetic vanity sink gives coins somewhere to spend.
- from: simplehats hats | via: numismatics vendor sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the loot-seed above is the distinctive weave, bare "sell hats for coins" adds nothing.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo's bestial claw transmutes in spirit flame into a primal essence — folkloric predator feeds the occult reagent web.
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: fossilised amber from Brazilian myth soaks up arcane energy in an imbuement altar, becoming an attunement catalyst — regional folklore as magic material.
- from: brazil_legends:big_tongue | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Saci's severed tongue is the right kind of mischief-infused organic for an occultism ritual component.
- from: brazil_legends:amber_shard | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; amber already has a magic home above; don't double-dip economy as a primary link.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (worldgen geode) | via: create:crushing as an ore-doubling input | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing a scavenged mining core in a millstone yields extra mineral dust — geode rarity makes every core worth processing, not just installing.
- REWORK: OK — connections sound. The FE→coin pipeline and Create-gated construction already give it two pillars. The M-08-adjacent deepening (FE tracing back to scarce processed metal) is a refinement of the existing Create/economy edge, not a new pillar — no rework needed, flag for authoring as a recipe depth note.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling saguaro fruit in a millstone yields a cactus-green dye and fibrous pulp — forage from desert cactus goes straight into Create's dye/processing chain.
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grinding giant mushroom caps in a millstone extracts spore dust for a brown/red dye and a small mushroom stew intermediate — bulk organic forage to dye production.
- from: dynamictreesplus:saguaro_fruit | via: numismatics vendor | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; a cactus fruit selling for coins has zero structural distinctiveness.

## sable   [anchors: support/library (1)]
- LEAVE — pure physics-engine backend library (no items, no blocks, no recipes); the aeronautics weave happens in the dependent mods (Create Aeronautics), not here.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: ship/fortress loot chests | via: loot-seed (datapack) — seed nautical trade goods (compass, spyglass, coin, chart fragments) into chest tables | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a boarded galleon's locked hold pays out real coin and trade goods — naval plunder drives the Numismatics economy, not just XP.
- from: ship/fortress loot chests | via: loot-seed — seed magic reagents (source gems, arcane essences) into hidden monument rooms | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: old sea-sorcerer ships carry bottled arcane reagents in their depths — ocean exploration feeds the magic reagent supply.
- REWORK: existing survival anchor is thin (just "ocean exploration"). The two loot-seed weaves above would lift it to survival+economy+magic (3) — the loot tables are the only lever and they're real.

## vinery   [anchors: survival (1)]
- from: vinery wines/ciders | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged wine is a genuinely high-effort luxury (ferment + season) that only a dedicated vintner can supply in quantity — this is one of the structurally distinctive M-09 cases (gate + effort + scarcity), not a trivial sell.
- from: vinery:apple_juice / grape_juice | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pumping apple or grape juice through a Create mixer with sugar and heat produces a concentrated cordial intermediate — the vineyard feeds Create's fluid-processing tier.
- from: vinery grapes | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mechanical press handles grape-crushing at scale instead of stomping in the pot — automation of the vineyard's first step through Create.
- REWORK: existing survival anchor is correctly identified. The M-09 wine→coin link is noted as STRONG in the dossier and survives red-team (it IS a high-effort gated luxury, not a trivial sell) — it should be accepted, lifting to survival+economy. The Create pressing/mixing adds a 3rd anchor.

## northstar   [anchors: Create, aeronautics (2)]
- from: northstar:titanium_ingot | via: create:crushing (ore-doubling) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: dossier confirms titanium is already deeply woven into Create (crushing/mixing/pressing/sequenced_assembly inbound); ore-doubling is already established — not a new weave.
- from: northstar:advanced_circuit | via: aeronautics control-surface recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: an off-world advanced circuit is the avionics brain of a high-tier Aeronautics control surface — space tech gates the best airship navigation.
- from: northstar:martian_steel_ingot | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: martian steel plate is the exotic structural alloy for a top-tier ship hull — reaching Mars earns you the best airframe material.
- from: northstar:titanium_ingot | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; northstar already has 2 anchors and a third via aeronautics above; a bare "scarce metal → coin" economy link adds no structure.
- REWORK: OK — connections sound for Create+aeronautics. The two aeronautics weaves above deepen the existing aeronautics anchor (M-23/M-24) without adding a forced economy pillar.

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese aged cheeses | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully-matured tier-III cheese (900-tick wait, Create automation chain) is exactly the high-effort luxury good that warrants a coin price — time-gated artisan produce, not a trivial sell.
- from: create_cheese:cheese_curds | via: vinery:wine_fermentation (ingredient slot) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a spoonful of fresh cheese curds in a Vinery fermentation batch produces a creamy fruit-cheese blend — the dairy and vineyard chains cross-feed, giving players a reason to run both.
- REWORK: OK — Create+survival anchors are sound. The M-09 economy link is a structurally sound third (time-gated artisan luxury), not a generic sell.

## sparsestructures   [anchors: support (1)]
- LEAVE — pure worldgen config-tuning library (no items, no recipes); no material surface to weave.

## ding   [anchors: support (1)]
- LEAVE — client-only audio cue (no items, no blocks, no methods); genuinely zero content surface.

## bundle_recipe   [anchors: support (1)]
- LEAVE — vanilla-parity recipe datapack; its "output" is a vanilla bundle, not a mod-native item. No weave surface beyond what vanilla already provides.

## followersteleporttoo   [anchors: support (1)]
- LEAVE — behavior-only QoL fix (no items, no blocks, no methods); zero content surface.

## betteroceanmonuments   [anchors: survival (1)]
- from: ocean monument chest loot | via: loot-seed — seed coin (numismatics:cog/spur) and a magic reagent into the added monument chests | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the expanded monument's deepest treasury room pays out in coin and a rare reagent — high-difficulty ocean content rewards the economy, not just prismarine.
- REWORK: currently survival-only. The loot-seed above is exactly the kind of structurally distinctive economy link (combat difficulty + unique structure gates the reward), not a generic sell.

## gravestone   [anchors: survival (1)]
- LEAVE — death-recovery utility (no material inputs/outputs beyond the player's own inventory); any weave would be contrived.

## formations   [anchors: survival (1)]
- LEAVE — scatter-structure worldgen with no own items and no loot tables (loot=no in digest). Structure palettes are vanilla/modded blocks, not Formations-native material; loot-seed belongs to whatever structures contain real chests, not to the worldgen framework itself.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:steel_block (c:ingots/steel) | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: reactor-grade steel plate is the natural structural alloy for a mid-tier airframe hull — the nuclear pillar feeds the aeronautics supply chain.
- from: createnuclear:uranium (processed) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-enriched uranium is among the scarcest regional materials — a coin minted from processed uranium-ore isn't a generic sell but a scarcity-gated economic node that only the nuclear specialist can supply. This is the distinctive M-08 case (Create-processed + genuinely scarce regional ore → coin).
- from: createnuclear:autunite (glowing mineral) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: autunite's eerie glow reads as arcane; imbueing it in an enchanting apparatus charges it with source energy — nuclear geology as a magic reagent. Red-team: tone is industrial not mystical, but radioactive glow-minerals are a classic fantasy magic ingredient and the method-routing is real; survives.
- from: createnuclear reactor SU output | via: createaddition:charging | to: aeronautics (via FE bridge) | motif: M-13 | power: endgame | tone: ok | verdict: REJECT | reason: M-13 is fuel → propulsion (TFMG fuels), not SU → FE → propulsion; routing reactor SU through Create Addition as FE to an engine is a plausible chain but stretches M-13 beyond its chartered method (fuel intake). No-motif escalation would be needed; REJECT pending a Gate-0 motif clarification.
- REWORK: currently 1-anchor (Create). Steel→aeronautics (M-23) and uranium→coin (M-08, distinctively gated) and autunite→magic (M-10) would lift to Create+aeronautics+economy+magic (4) — a strong integration for a flagship power mod.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux:oak_plow / reaper blade | via: create:item_application — apply a Create-processed iron sheet to the wooden cart frame to produce an iron-shod implement | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: fitting a pressed iron blade onto a wooden plow frame via a deployer converts the basic cart to the iron-shod tier — the farm-tools progression passes through the Create metalworking chain.
- from: astikorcartsredux:oak_supply_cart | via: aeronautics cargo loading (thematic/config) | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif — carts haul on land, not air; the tonal bridge to aeronautics is forced and there is no method-routing that makes sense. A "cart packed into a cargo hold" is story, not a weave.
- REWORK: surviving anchor is a light Create (M-20) item-application upgrade for the metal-shod implement tier. The dossier flagged M-05 (native-method gating) as WEAK; M-20 (deploy-application upgrade) is the better motif — one light step, not a deep chain, which correctly respects the everyday power level.

## irons_lib   [anchors: library/support (1)]
- LEAVE — API/library mod; the transmog table and player statue are cosmetic with no routable material. Weaving happens in Iron's Spells 'n Spellbooks (the dependent), not here.

== CHUNK COMPLETE ==
