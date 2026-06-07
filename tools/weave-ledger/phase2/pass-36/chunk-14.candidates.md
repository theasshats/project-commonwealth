# Phase 2 candidates — chunk-14

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

Single music disc; no items beyond itself, no recipe-types, no loot tables of interest (the disc is its own drop).

- LEAVE — genuine zero-content single-item flavor mod (one meme music disc). No material surface, no processing method, no loot table worth seeding. Forcing an edge would be noise.

## trashslot   [anchors: support/QoL (1)]

Client-side UI mod — trash slot in the inventory. Zero blocks, zero items, zero loot, no recipe-types. Pure behavior.

- LEAVE — zero-content code mod (UI behavior only). No material, no recipe surface, nothing to route through any method. Canonical LEAVE case.

## emojitype   [anchors: support/client-UI (1)]

Client-only chat input helper. Zero blocks, zero items, no loot.

- LEAVE — zero-content client code library. Text-input QoL with no in-world surface. Nothing to weave.

## ecologics   [anchors: survival (1)]

94 blocks, 104 items, loot=yes. Tropical biome expansion: coconut palms, coconut crab mobs, azalea woodset. Outputs `c:item/foods/fruit`, `c:item/foods/nut`, `c:item/foods/soup`, `c:item/foods/cooked_meat`. Coconut slice clears potion effects (milk analog). No registered recipe-types — its materials are inputs to foreign methods.

Power-read: coconut/nut/fruit = everyday tier (common biome drop, renewable); azalea woodset = everyday decoration. Effect-clearing coconut slice is mid-tier (functional utility).

**Method-pull candidates:**

- from: ecologics:coconut / coconut_slice / nuts (c:item/foods/fruit+nut) | via: farmersdelight:cooking + extradelight:* | to: survival | motif: M-12 | power: everyday | tone: ok — tropical fruits into cooking-pot dishes (coconut curry, palm soup) is an obvious culinary fit; player nods at "of course" | verdict: ACCEPT | hook: Coconut and tropical nuts run through the cooking pot or mixing bowl into prepared dishes, widening the diet-variety spread across all five nutrition groups.

- from: ecologics:coconut_slice (effect-clearing food) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 / M-11 | power: mid | tone: clash — the effect-clearing property is mechanically interesting but the coconut's theme is "tropical beach snack," not arcane reagent; mapping a beach fruit to spirit-fire or arcane infusion feels arbitrary/tonal mismatch | verdict: REJECT | reason: tone clash; coconut's effect-clearing is a survival convenience, not a magical property — the imbuement/ritual framing imports magic lore the mod doesn't carry.

- from: ecologics:coconut_log / azalea_log (woodsets) | via: create:milling (sawdust byproduct) | to: create | motif: M-04 | power: everyday | tone: ok — woodsets are decoration; milling yields sawdust/pulp byproduct, tying the deco palette into Create's processing loop | verdict: ACCEPT | hook: Coconut and azalea logs crushed in the millstone yield sawdust, looping the tropical woodset into Create's industrial material flow.

- from: ecologics foods (c:item/foods/*) | via: create:mixing (food compound processing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's mixing basin blends coconut milk (pressed from coconut) into food compounds — standard processing-chain pull for any fruit-bearing biome mod.

Red-team on M-12 pair: three ACCEPT edges for one everyday mod risks over-wiring. The cooking (farmersdelight) and the Create milling/mixing are genuinely separate methods, but only the cooking one has rich content density (enough distinct coconut dishes to justify). The Create milling edge is lightweight (sawdust byproduct from woodset). Keep both — they are different methods and different outputs.

OK — connections in dossier are directionally sound; the M-12 cooking candidate is the primary, milling/mixing are lightweight secondaries.

## mushroomquest   [anchors: survival (1)]

48 blocks, 352 items, 32 biome-modifiers, loot=yes. Large foraged-mushroom mod: biome-spread foraging stumps yield 137+ edible caps with positive/negative effects; mushroom-cap armor; Mushroom Island biome structures with loot. No registered recipe-types.

Power-read: common mushrooms = everyday; rare/mythical caps (agarikon, angel's wing) = mid/endgame tier — they have special effects (medicinal, hallucinogenic, deadly). Armor = mid (mushroom cap). Loot tables from Mushroom Island structures are relevant for seeding.

**Method-pull candidates:**

- from: mushroomquest rare/mythical mushroom caps (effect-bearing) | via: farmersdelight:cooking / extradelight:* | to: survival | motif: M-12 | power: everyday-mid | tone: ok — cooking a baybolete or artist_conk into a dish is perfectly sensible forager-to-cook pipeline | verdict: ACCEPT | hook: Rare foraged caps run through the cooking pot into effect-granting meals, making mycology a distinct diet-pillar input (fungal protein group).

- from: mushroomquest deadly/mythical mushroom caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-10 | power: mid | tone: ok — toxic/mythical fungi transmuted into occult reagents is a coherent alchemical/druidic trope; "deadly mushroom → spirit essence" is a well-trodden fantasy archetype | verdict: ACCEPT | hook: The agarikon or death cap, burned in spirit-fire, yields an occult essence — the mycology specialist becomes a reagent supplier for magic players.

- from: mushroomquest:glowshrooms (bioluminescent mushrooms) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok — glowing fungi as a light/aura reagent in arcane infusion is thematically coherent (bioluminescence → luminous magic) | verdict: ACCEPT | hook: Glowshroom caps are a minor but coherent input to arcane imbuement, bringing the forager-biome into the magic web.

- from: mushroomquest structure loot (Mushroom Island biome structures) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — seed rare reagent items (magic catalyst, coin) into the Mushroom Island structure chests so exploration feeds economy and magic supply chains | verdict: ACCEPT | hook: Mushroom Island ruins reward explorers with rare magic reagents or numismatics coin, making the biome a viable combat/exploration-supply output.

- from: mushroomquest M-09 (bare sell) candidate in dossier | verdict: REJECT | reason: dossier candidate cited M-09 which is RETIRED — bare "sell rare mushrooms for coin" is the ambient endpoint, not a weave. Redirect is covered by M-34 loot-seed above or M-12 processing for the economy leg (if dishes are traded, that's the ambient loop naturally).


