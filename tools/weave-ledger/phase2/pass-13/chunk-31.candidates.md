# Phase 2 candidates — chunk-31

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic (Ars Nouveau spine) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence ↔ source_gem exchange — both are magic currencies; the ledger already reserves this bond, so formalise it as a two-way imbuement cost (spend source_gems to mint arcane_essence and vice-versa at a lossy rate so there's no free arbitrage)
- from: mithril ore / raw mithril | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: mithril is a rare ore (Y<38); crushing gives a bonus pyrite/silver byproduct — feeds the ore-doubling reward loop and ties the spellcasting metal directly into the Create processing chain
- from: mob-drops / apothecarist loot (irons_spellbooks: apothecarist drop set) | via: occultism:spirit_fire | to: magic (Occultism) | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: apothecarist drops are isolated reagents — routing them through spirit-fire transmutes them into an Occultism essence, linking the two magic systems without forcing one mod's items into the other's crafting tables
- from: mithril/pyrium ingot | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is for endgame items requiring multi-stage assembly; mithril/pyrium ingots are everyday mid-tier materials, not finished keystones — gating them behind sequenced assembly violates the "don't gate basic components behind complex recipes" guardrail
- from: pyrium ingot | via: create_new_age:energising | to: Create (electric tier) | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: pyrium is a fire-aligned magic metal; charging it through the New Age energiser to produce an enchanted/fire-attuned form is thematically coherent (electric energy + fire metal → activated reagent), and routes the magic-metal into the Create electric tier
- REWORK: existing "alchemist cauldron uses create:emptying/filling" — connection is sound (the cauldron is genuinely a fluid-using block); OK — connections sound

## dndesires   [anchors: Create (1)]
- from: dndesires:rubber (raw rubber sap output from Hydraulic Press) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber is a scarce processed intermediate (sap + water → hydraulic-compacted raw rubber); making it a sell-commodity gives Create specialists a tradeable good and funnels the press output into the economy pillar
- from: crop/food inputs (any belt-fed crop) | via: dndesires:freezing (sail fan) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fan-freezing crops — berries, milk, fruit — as a prep step before cooking is a natural processing-chain pull; the frozen intermediate feeds FarmersDelight/ExtraDelight cold recipes, landing dndesires in the survival pillar with a light single step
- from: dndesires:cardboard_package_* | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: cardboard packaging is a logistics/storage item, not a mechanical drivetrain component; routing it into Aeronautics control/propulsion surfaces (M-24) is a stretch with no thematic grounding — a player would not nod at "cardboard is an airship part"
- from: dndesires:asphalt blocks | via: (crafting table) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: asphalt is a paving/road material; ship hull structural alloys (M-23) expect fabricated metal plates/beams; forcing asphalt into airframe recipes would feel arbitrary and wrong to a player building a flying vessel
- from: dndesires:milkshakes | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshakes are a processed high-effort food (Create-blended dairy); selling them as a luxury good at market stalls is a natural Luxury-good→coin application, giving the survival/food output a second pillar entry point

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — structure-only datapack; zero items, zero recipe methods, zero material surface. No coherent 2nd-pillar weave possible.

## patchouli   [anchors: support/library (1)]
- LEAVE — pure documentation library; no items of gameplay weight, no processing method. Its one recipe type (shapeless_book_recipe) only produces guide books. Nothing to weave.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: structure loot tables (discoverable loot seeded in Create-themed ruins) | via: loot-table seeding (not a method-routing) | to: economy | motif: no-motif | verdict: REJECT | reason: seeding coins or reagents into loot tables is a loot edit, not a method-routing — it fits no approved motif (M-01..M-24 are all recipe-method connections); route this through the existing M-02/M-15 framework at Gate-2 if a loot edit is wanted
- LEAVE — no items, no recipe methods registered; value is structural worldgen. Already ≥2 pillars (Create-themed worldgen + survival/exploration). No coherent further method-weave available.

## createblockchain   [anchors: economy, Create (2)]
- from: Mining Core (createblockchain:mining_core, worldgen-scarce consumable) | via: tfmg:industrial_blasting or create:crushing | to: Create (scarcity tie-in) | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mining Core is a geode-found consumable gating the currency faucet; requiring it to be pre-processed through Create crushing or TFMG industrial blast before it can power the miner ties coin production back to the Create processing chain — coins trace to regional scarcity rather than just FE
- from: cryotheum coolant fluid | via: tfmg:distillation | to: Create | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: cryotheum is a proprietary coolant block; routing it through TFMG distillation as though it were a petroleum byproduct is thematically forced — a player would ask "why is a cooling mineral a distillation product?" No thematic grounding; tone clash.
- REWORK: existing Create weave (mechanical_crafting + mixing build the miner) — sound, the miner is correctly a Create-made block; OK — connections sound

## txnilib   [anchors: support/library (1)]
- LEAVE — pure code library; zero blocks, zero items, no recipe methods. No content surface to weave.

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:jetpack | via: create:sequenced_assembly (gating, not fabrication) | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the jetpack is a brass-tier personal-flight device that logically belongs at the end of a small sequenced-assembly chain (fit backtank, press plates, seat the valve) — placing it there slots it into Create's natural mid-game depth progression and keeps flight gated behind dedicated machine investment
- from: create_jetpack:netherite_jetpack | via: M-15 boss-drop gating | to: Create (boss-key unlock) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Netherite jetpack (lava-swim, top-tier flight) is an endgame item — gating its recipe behind a boss-drop ingredient (e.g. Cataclysm Harbinger scale or Deeper Darker Warden loot) ties the mobility ceiling to combat achievement, which matches the DESIGN north-star (complex tech unlocked by boss drops)
- from: create_jetpack:jetpack | via: createaddition:charging | to: Create (electric tier) | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: the jetpack runs on compressed air (Create backtank), not FE; routing it through FE charging would change the mod's core mechanic and confuse players who expect pneumatic operation. Tone clash with the mod's identity.
- REWORK: no existing cross-pillar recipe connections authored yet (made-by: none); OK — dossier anchors are correct and the M-06 + M-15 proposals above supply the weave

## puzzleslib   [anchors: support/library (1)]
- LEAVE — pure code library; zero blocks, zero items, no recipe methods. No content surface to weave.

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies:apple_pie / baked_salmon / colony food outputs (c:foods/*) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony workers produce food surpluses (apple_pie, baked_salmon, breads, soups) — listing these as priced sell goods at market makes colony-running the pack's food-economy supply chain; specializing a food colony earns coin, naturally emergent
- from: minecolonies:ancienttome (research gate item) | via: create:mechanical_crafting or create:sequenced_assembly (as a boss-key gated ingredient) | to: Create (boss-key) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ancienttome already gates colony University research; using it (or a boss-drop that unlocks it) as an input for the most complex Create tech recipes reinforces the DESIGN intent that complex tech runs through MineColonies — one node, two gatekeepers
- from: quarry ore-stream (minecolonies quarry output stone/ore) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: quarry output already implicitly flows into Create crushing by the nature of the pack (ore → crusher is universal); adding an explicit recipe edge here is redundant — it adds no new pillar and describes vanilla player behavior, not a designed weave
- from: minecolonies:composting (hut composter) | via: minecolonies:composting → create:mixing (compost as Create fertiliser mixing input) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony compost is a low-value organic output; feeding it as an ingredient into Create mixing to produce a richer soil amendment or growth catalyst ties the colony's waste stream into Create's processing chain — a natural settlement→industrial link
- REWORK: existing Create weave (98-minecolonies.js quarry built from andesite/brass casings + cogwheel/precision_mechanism) — this is M-05 native-method gating; correct and well-motivated; OK — connections sound

== CHUNK COMPLETE ==
