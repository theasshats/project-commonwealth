# Phase 2 candidates — chunk-09

## expandeddelight   [anchors: survival (1)]

- from: expandeddelight:salt_ore / salt dust | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Crushing Wheel pulverizes salt rock into dust — the same spine that cracks iron ore; salt becomes a Create by-product, not free by hand
- from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark runs through a Millstone to produce the dust — vanilla-feeling grain-to-flour logic applied to a spice, ties the rustic crop roster to the Create mill
- from: expandeddelight:cheese_wheel (aged, c:foods/cheese) | via: create_cheese:maturing | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: route expandeddelight's cask-aged cheese through the Create Cheese Cellar as an alternative maturing path — two specialist routes to the same good, neither self-sufficient; each needs the other's calendar or cask
- from: expandeddelight:cranberry / sweet_potato (seasonal crops) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: only in-season harvests are viable magic ritual catalysts — a Serene-Seasons-gated reagent that forces a grower-to-mage trade when the season closes
- from: expandeddelight loot tables (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed undergroundworlds/ctov dungeon loot with expandeddelight food items (preserved chili, canned sweet potato) — exploration rewards the cook, not just the fighter
- from: expandeddelight:salt_ore region-locked worldgen | via: regional-scarcity + numismatics vendor | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: salt only deposits in certain geological zones, so a player who settled on a salt seam becomes the region's salt supplier; traded in coin, not freely available
- from: expandeddelight:juicer output (juices) → numismatics vendor | via: bare sell | to: economy | motif: bare-sell | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; "juices are sellable" is the ambient endpoint, not a weave — the M-30 scarcity angle covers the economy link for salt; juice alone is not demand-gating

REWORK: existing dossier candidate cites M-09 for cheese/salt trade — M-09 is retired; economy link should be re-expressed as M-30 (salt regional scarcity) + M-35 (aged-cheese maturation gate), both accepted.

## create_cheese   [anchors: create, survival (2)]

- from: create_cheese:maturing (tag-extensible) → accept expandeddelight:cheese_wheel as a cellar input | via: create_cheese:maturing | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: any cheese-tagged item ages in the Cellar — both the vanilla wheel and the modded goat/brie variants share the same automation chain; the Cellar becomes the universal aging pillar
- from: create_cheese aged varieties → MineColonies cook/tavern building requests | via: colony requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony cook demands aged cheese for high-tier feasts; a dedicated cheesemonger player fills the request — colony demand gates the market without NPC coin
- from: create_cheese:calendar_page_tier_3 (endgame maturing time) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the tier-3 Calendar Page — which unlocks 900-tick aged grands-crus — is fabricated in a sequenced assembly line (pressing + deploying layers of parchment + brass-printed date glyphs); makes the deepest aging tier cost real Create infrastructure
- from: create_cheese output → numismatics bare sell | via: bare sell | motif: bare-sell | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "aged cheese is tradeable" is ambient endpoint — M-28 colony demand and M-35 maturation already cover the economy link properly

REWORK: dossier candidate cites M-09 — retired; replace with M-28 (colony demand) and M-35 (maturation gate), both proposed above and accepted.
OK — Create + survival anchors are sound; the M-35 maturation motif is the mod's flagship and is correctly anchored.

## structurize   [anchors: support/library (1)]

LEAVE — zero-surface library (MineColonies build engine); no items/recipes/loot; its only weave is MineColonies' weave.

## create_integrated_farming   [anchors: create, survival (2)]

- from: create_integrated_farming:roost (passive poultry product) | via: farmersdelight:cooking → Farmer's Delight meals | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: roost eggs and meat feed directly into the Delight cooking chain; automated husbandry becomes the raw-material stage of automated kitchen production — the full farm-to-table loop in Create contraptions
- from: roost output (feathers) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: mass-produced feathers from automated roosts are transmuted by a mage into source gems or spirit essences — the magic specialist buys feathers in bulk from the farming specialist; a natural player-to-player trade (create/farming → magic pillar)
- from: create_integrated_farming:fishing_net / lava_fishing_net output (aquatic drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: lava fishing net yields unusual drops (blaze rods? magma mobs?) that the Occultism spirit-fire transmutes; a mid-tier lava-fishing → occult reagent bridge
- from: roost/net products → numismatics bare sell | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; "eggs/fish are sellable" is ambient — M-02/M-11/M-12 already route through demand-gating
- from: create_integrated_farming constructs | via: create:mechanical_crafting → gate roost construction | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the roost block requires Create mechanical_crafting (brass + shafts) so automated husbandry is gated behind mid-tier Create, not early wood; matches the cost model (everyday husbandry unlocked via moderate Create depth)

OK — Create + survival anchors are sound; new links add magic and mid-tier Create gating.

## occultism   [anchors: magic (1)]

- from: occultism:silver_ingot (c:ingots/silver) | via: create:crushing → ore doubling route | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: occultism silver ore runs through a Crushing Wheel (doubled yield + a copper byproduct) — the only real-silver source in the pack gets a Create processing bonus, binding the magic pillar's ore to the tech spine
- from: mob drops (foreign c:tag intake) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: any boss or exotic mob drop — spider fangs, goat horns, blaze rods — burns in spirit fire to yield foliot/djinni essences; combat specialists farm drops, mages buy them; the fight-to-ritual trade
- from: occultism:dimensional_mineshaft (spirit miner as logistics) | via: occultism:miner → delivers ore to non-miners | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: a player who mastered summoning deploys a dimensional Djinni miner and sells the exotic ores it surfaces — magic-as-a-logistics-service; miners can't replicate this without the ritual knowledge (M-37 knowledge gate: the ritual can't be purchased, only learned)
- from: occultism:spirit_trade | via: occultism:spirit_trade → trade otherworld materials to non-magic players | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: the summoner opens a spirit-trade session on commission — another player's materials go in, otherworld-exclusive goods come out; the mage sells a *service*, not a product (no coin faucet; payment is player-to-player)
- from: occultism:iesnium_ingot | via: create:mixing / mechanical_crafting → required Create input | to: create | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: high-tier Create devices require iesnium as a component (the magic-exclusive metal gates the deepest tech) — a Create specialist must trade with the Occultism specialist; neither is self-sufficient at endgame
- from: occultism:datura (c:crops/datura) | via: create:milling → dust usable as potion ingredient | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: dried datura flowers ground in a Millstone yield a dust that feeds alchemy chains — the poisonous garden crop doubles as a potion feedstock via the mill
- from: occultism bare sell | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; all economy anchors covered by M-18/M-33 service links and M-29 cross-route dependency above
- from: occultism:crushing as a standalone ore-double parallel to Create | via: occultism:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual crusher gives the magic player a parallel ore-doubling route — they don't need Create's Crushing Wheel, but they need summoning depth; two non-overlapping routes to the same outcome

REWORK: dossier economy candidates cite M-09 (retired) and M-02 (bare trade), which are ambient endpoints. Replace with M-18 (dimensional miner as logistics service), M-33 (spirit-trade as labor), and M-29 (iesnium cross-route dependency) — all accepted above. OK — magic anchor is correct and foundational.

## lootr   [anchors: support/QoL (1)]

LEAVE — pure loot-instancing behavior; no items to route, no method to pull through, no material surface; its contribution is multiplayer fairness, not a content weave. (loot=yes means lootr blocks exist in structures, but they're transparent — vanilla loot tables remain unchanged; the mod routes no new material.)

## bettercombat   [anchors: support/combat framework (1)]

LEAVE — pure JSON behavior framework; zero items/blocks/materials; no method to route anything through. Its combat feel benefit is real but not a material weave.

## spark   [anchors: support/performance (1)]

LEAVE — profiler only; no items, no methods, no material surface.

## patchouli   [anchors: support/library (1)]

LEAVE — guide-book library; the book items themselves have no material role in the pack's production loop. `patchouli:shapeless_book_recipe` assembles guide books only, not a processing method other mods route through.

## numismatics   [anchors: economy, create (2)]

- from: numismatics coins (minted regional metal → player-pressed coin) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the mint isn't a bank — a dedicated minter presses raw spur/cog blanks from regional metals (copper/zinc/brass) through a Create press; controlling the mint is a specialization, and the medium's scarcity is real
- from: numismatics:vendor / depositor as automation node | via: create:mechanical_crafting → gate vendor block | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Vendor block and Depositor require Create mechanical_crafting (gears + brass) — the shop infrastructure itself is behind the tech spine, so the economy layer is naturally post-Create-mid-tier
- from: numismatics → bare sell of any good | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; numismatics is the hub that receives weaves, not the origin of one; the direction of analysis is correct (dossier already notes this)

OK — economy + create anchors are sound; M-08 player-minted currency is the correct framing for the coin loop. No fabricated links needed; numismatics is the destination hub.

## astikorcartsredux   [anchors: survival (1)]

- from: astikorcartsredux plow/reaper (metal-bearing implements) | via: create:pressing → iron sheets as recipe inputs | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the plow blade and reaper blade need Create-pressed iron sheets — early-farm tools gate gently on the tech spine's simplest step; not deep, just connected (everyday component → one light step, per cost-model rule)
- from: carts as pre-aeronautics bulk hauling | via: aeronautics supply context | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: before an airship makes bulk goods worth moving, horse-drawn supply carts handle ground-level logistics — they're the first-tier logistics arm that aeronautics eventually supersedes; the loop has an early-game movement stage
- from: astikorcartsredux:oak_supply_cart → bare sell | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; carts as trade goods is ambient endpoint, not a weave
- from: cart crafting → Create mechanical_crafting deep gate | via: create:mechanical_crafting | motif: M-05 | power: everyday | verdict: REJECT | reason: over-gating a basic daily-use tool behind sequenced assembly violates the cost-model rule ("never gate a basic/everyday component behind a complex recipe") — one pressed iron sheet per blade is the right depth; mechanical_crafting is too deep for a wooden cart

OK — survival anchor correct; one light Create step (M-05 pressing) and an early-logistics framing (M-31) add the second anchor without over-engineering.

## dynamictreesplus   [anchors: survival/worldgen (1)]

- from: dynamictreesplus:saguaro_fruit | via: create:milling → dye dust or food intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit runs through a Millstone to yield a cactus-red dye pigment (or food paste) — a wild-harvest product converted to a useful craft intermediate; the forager feeds the mill
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: giant mushroom caps from mega mushrooms are a bulk organic food feedstock — Farmer's Delight meals that call for mushroom now have a large-scale supply chain; the mushroom-island biome becomes a food production zone
- from: mushroom drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: mega-mushroom caps transmuted in spirit fire yield a fungal essence reagent — an underground biome drop that the mage specialists process; forager-to-mage trade
- from: dynamictreesplus mushroom/cactus → bare sell economy link | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; ambient sell endpoint; M-12/M-11 cover the real demand-gating

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

LEAVE — single meme music disc; no crafting surface, no material role, no coherent second anchor. Forcing a recipe or loot-seed edge onto a joke disc is noise.

## trashcans   [anchors: support/automation QoL (1)]

LEAVE — void sink; its function is the opposite of weaving (destroys value). No items to route as inputs. A design note is worth flagging: in a scarcity-driven pack, unlimited item voiding is an anti-scarcity knob — if byproducts are meant to have value (M-32 byproduct→input, M-25 ecological cost), trash cans trivialize that. This is a balance concern for the curation pass, not a weave.

## ctov   [anchors: survival/exploration (1)]

- from: ctov structure loot tables (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed ctov village loot tables with Create-processed goods, Numismatics coin spoils, and a rare magic reagent drop — exploration villages become a meaningful loot destination that feeds the production loop, not just a trading-post flavor
- from: ctov village structures | via: loot-seed → seed Numismatics coins into pillager-outpost chests | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: pillager outposts raided for a purse of stolen coins — player-minted coins that previously changed hands end up in bandit coffers; recovering them from ctov outpost loot is a combat-economy loop (coins circulate via combat, not NPC vending)
- from: ctov → no recipe/processing weave | motif: n/a | verdict: REJECT | reason: ctov has zero items/blocks/methods of its own; recipe-side weaves are impossible; all real links are loot-seed delivery

## accessories   [anchors: support/API (1)]

LEAVE — slot API; no items/materials/methods of its own; the wearables that weave belong to other mods. No coherent standalone second anchor.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]

LEAVE — pure server behavior; no items, no methods, nothing to weave.

## ldlib2   [anchors: support/library (1)]

LEAVE — developer library; no real player-facing items (test_2/renderer_model are dev entries); no material surface.

## undergroundworlds   [anchors: survival/exploration (1)]

- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spider fangs burned in spirit fire yield a foliot essence — a unique underground-dungeon drop that only the mage can process; the dungeon diver farms the ingredients, the summoner buys them
- from: undergroundworlds:spider_fang / exotic dungeon drops | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the fang and desert/freeze-themed drops imbue into an elemental source-gem variant — mob-drop reagent routed through the Ars Nouveau apparatus; underground biome danger converts to magic capital
- from: undergroundworlds deco bricks (temple/pyramid/ice bricks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: dungeon bricks crushed back to stone dust + an XP nugget — a lossy deconstruction of raided architecture into buildable raw material; the explorer feeds the crusher with structural loot
- from: undergroundworlds:desert_charm / antidote_flask | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the charm's passive blindness immunity is enhanced by infusing it with an Ars reagent at the enchanting apparatus — upgrading a passive immunity trinket into a full attunement piece; dungeon loot becomes a magic-craftable upgrade base
- from: undergroundworlds dungeon loot tables (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seed undergroundworlds dungeon chests with boss-tier Create components or magic reagents — the underground biome is the pack's mid-game dungeon gauntlet, and loot rewards should reflect the loop (rare processed goods in the deepest chests, not just iron swords)
- from: undergroundworlds:freezing_sword / blade_of_the_jungle | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create deployer applies an enchanted plate to the dungeon blade, upgrading it — a light single-step deploy that routes the exotic weapon through the tech spine without requiring sequenced assembly (M-20's lighter touch vs. M-06)
- from: dungeon drops → numismatics bare sell | via: bare sell | motif: bare-sell | verdict: REJECT | reason: M-09 retired; M-34 loot-seed and M-11/M-02 magic routing already cover the demand-gating economy link

## architectury   [anchors: support/API (1)]

LEAVE — cross-platform API library; no player-facing content, no materials, no methods. Nothing to weave.

== CHUNK COMPLETE ==
