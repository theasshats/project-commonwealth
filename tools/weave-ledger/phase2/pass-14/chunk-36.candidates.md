# Phase 2 candidates — chunk-36

## enhancedcelestials   [anchors: survival (1)]

- from: enhancedcelestials:meteor (fallen-star block, harvestable) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A meteor chunk on a belt yields iron/nickel gravel + an xp-nugget — debris from the sky becomes feedstock, not just deco
- from: Blood Moon / Blue Moon active world-state (event gating) | via: worldgen/spawn or event gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Certain Ars Nouveau rituals or Occultism summons only resolve while a lunar event is running — the sky sets the tempo for the magic web; via: event-gate (config/KubeJS world-state check)
- from: enhancedcelestials:space_moss_block (worldgen surface material) | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss is purely a deco/biome-filler surface block; giving it a milling recipe creates a forced arbitrary edge — meteor already earns Create (M-04) without doubling onto moss
- from: Harvest Moon world-state (global crop-growth boost) | via: config tie | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Harvest Moon already implicitly accelerates any crop — this is a passive config effect, not an authored weave; no delivery needed and no second pillar is added

## dndesires   [anchors: Create (1, deep)]

- from: dndesires milkshakes (chocolate_milkshake, glowberry_milkshake) | via: farmersdelight:cooking / extradelight processing | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Pack crops (cacao, glowberries) run through the dndesires Hydraulic Press or mixer to produce milkshake intermediates — farm output becomes a Create-backed luxury food, rooting D&D solidly in the survival pillar
- from: dndesires:rubber (raw rubber / rubber sapling outputs) | via: numismatics mint (M-08 chain) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Rubber is scarce — it requires the Hydraulic Press (500mb water + sap) and a dedicated sapling — so a processed rubber sheet is a logical trade good; a Create-processed rubber → minted coin route rewards the player who builds the press line
- from: dndesires asphalt blocks (colored asphalt palette) | via: create:crushing (recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: D&D is already anchored in Create (pillar 1 deep); adding M-04 recycling on its own palette blocks is inward-not-outward — it adds Create depth without a second pillar
- from: dndesires:cardboard_package_* | via: aeronautics logistics | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — cardboard boxes as aeronautics cargo packaging has flavor but no approved motif maps "Create packaging block → aeronautics logistics"; do not invent; flag for Gate-0 if packaging-as-cargo becomes a formal motif

REWORK: existing connections sound — D&D's inbound weaves (create:mixing, item_application, mechanical_crafting, filling, emptying) are all coherent Create-native recipe types for a Create add-on. No rework needed.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

- from: dungeon/tavern loot tables (structure drops — trial keys, loot chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed Numismatics coin denominations (cog/spur) into dungeon chest loot tables and trial vault rewards — finding a ruin yields starter currency, so exploration directly bootstraps the player economy; via: loot-seed (Phase-3 datapack edit)
- from: dungeon/tavern loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed a low-quantity Ars source gem or Iron's Spellbooks scroll into tavern/dungeon chests — early adventurers find a taste of the magic web, pulling exploration into the magic pillar; via: loot-seed
- from: tavern cartographer villager trade | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no (maintainer flag); the cartographer already trades vanilla emerald maps — adding a Numismatics layer on top of an existing vanilla trade is low priority and provisional; skip until M-21 is confirmed

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Soul Dust from Otherside mobs thrown into spirit fire yields a high-tier Occultism essence — the Otherside feeds the occult web exactly as the lore implies; dangerous to get = appropriately gated reagent
- from: deeperdarker:heart_of_the_deep (rare Warden drop) | via: boss-key recipe gate | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Heart of the Deep is the boss-key that unlocks a complex Create sequenced-assembly machine — Warden is already the gate to the Otherside dimension, so it doubly gates a top-tier Create build; scales with its extreme danger
- from: deeperdarker:warden_carapace / deeperdarker:sculk_bone (Otherside mob drops) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Warden Carapace and Sculk Bone are grotesque structural materials from a sound-horror dimension — imbuement into an arcane reagent reads naturally as harvesting the sculk's resonant soul energy
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Gloomslate and sculk-stone are abundant dimension-palette blocks — crushing them to gravel + xp-nugget follows the standard lossy-recycle pattern and pulls all that decorative stone into the Create spine; already partly wired (create:crushing is an inbound)
- from: deeperdarker:crystallized_amber (block/item from Otherside) | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: crystallized amber is a deco/crafting material used within D&D's own recipes; routing it to economy as a "luxury good" is arbitrary and generic — the magic routing (M-10/M-11) is far stronger and already fills the second pillar; the economy candidate would be a third pillar and weak; reject to avoid sprawl

REWORK: existing inbound weaves (create:crushing, farmersdelight:cutting) are coherent and non-arbitrary — stone/wood deco recycles (M-03/M-04 pattern) and cutting organic blocks are standard. No rework needed.

## pingwheel   [anchors: support / QoL (1)]

- LEAVE — pure behavior/UX mod: zero items, zero blocks, zero loot, zero methods. No content surface to weave. Its role is team coordination glue, and forcing a nominal recipe would be a defect.

## touhou_little_maid   [anchors: survival (1)]

- from: deeperdarker:soul_dust or occultism essence (endgame magic reagent) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Summoning a high-tier maid at the Altar requires a soul reagent from the Otherside — the altar is already a ritual-style multiblock, and gating it on magic materials makes the summoning feel like a genuine arcane rite rather than a crafting-table shortcut; via: altar recipe (KubeJS)
- from: touhou_little_maid:broom (rideable broom — flight) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Imbuing a Broom with a source gem attunes it for sustained magical flight, tying the maid's iconic mount to the Ars magic web — shrine-maiden + arcane broom is a completely coherent pairing
- from: mob-drop power-point bottle (fairy drops / village loot) | via: numismatics | to: economy | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are scarce by intent (the altar's gating currency) — routing them into Numismatics payout would let players farm maids' fairy drops for coin, which bypasses the altar-gating scarcity design; tone clash with the altar-progression intent
- from: touhou_little_maid:camera item | via: create:item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the camera is a "capture a maid for re-summon" utility item; applying it via deployer to produce an "enchanted" version is mechanically possible but thematically arbitrary — a camera is not a Create mechanical part; the tone doesn't survive red-team

## startuptime   [anchors: support / diagnostic (1)]

- LEAVE — zero-content diagnostic: no blocks, no items, no loot, no methods. Logs one line at boot. Nothing to weave.

## cerbons_api   [anchors: support / library (1)]

- LEAVE — pure code library: no blocks, no items, no loot, no gameplay methods. Dependency shim for CERBON's mods; nothing to route.

== CHUNK COMPLETE ==





