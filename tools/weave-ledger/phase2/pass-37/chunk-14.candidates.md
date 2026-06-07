# Phase 2 candidates — chunk-14

## cookingforblockheads   [anchors: survival (1)]

- from: cookingforblockheads:oven / cookingforblockheads:fridge (appliance blocks) | via: M-05 native-method gating | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Oven and Fridge are multi-slot kitchen appliances that a Create machine shop would obviously fabricate — gating the upgraded color variants (or a "deluxe" version) on Create copper/brass sheets makes the kitchen a Create commissioning target without touching the food logic. One light step for everyday variants; a slightly deeper chain for the flush-color deluxe set.
- from: cookingforblockheads (aggregates food-mod outputs) | via: bare "it's sellable" economy link | to: economy | motif: none | power: everyday | tone: clash | verdict: REJECT | reason: M-09 retired; CfB doesn't add new foods, only surfaces existing ones — an economy link belongs on the food mods it wraps, not on the aggregator. Forcing it here is double-counting.
- REWORK: none — existing single-anchor (survival) is correct; M-05 candidate above earns the Create 2nd anchor. OK to proceed once the appliance-gating recipe is authored.

## expandeddelight   [anchors: survival (1)]

- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt is a culinary everyday mineral — crushing it in a Create millstone (or crusher) to yield salt dust with a small extra pinch (byproduct) is an obvious ore-doubling; a one-step process, no depth overdraft for a basic seasoning ingredient.
- from: expandeddelight:cinnamon_log (wood) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create saw cutting cinnamon logs into planks/sticks keeps cinnamon wood consistent with how every other modded wood feeds the spine. Light single step — dailycraft wood, not a power ingredient.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (aged) | via: extradelight:evaporator or expandeddelight:cask (native aging) → economy | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged cheese is time-gated (cask maturation) — a player who sets up the cask pipeline holds inventory that others can't instantly reproduce, making it a genuine maturation-specialist trade good. M-35 maturation/aging.
- from: expandeddelight:salt (dust) | via: create:mixing / farmersdelight:cooking — salt as preservation agent | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt as a mandatory preservation input in curing/pickling recipes (Farmer's Delight curing, ExtraDelight drying rack) ties it to the consumption-sink loop — the pack constantly needs salt to process preserved foods. M-26 consumption sink, demand never zeroes.
- from: expandeddelight: luxury-good "sellable" economy link (bare) | to: economy | motif: none | verdict: REJECT | reason: M-09 retired. The dossier candidate noted this — aged cheese as an NPC sale is the ambient endpoint of the loop, not a weave. The M-35 maturation entry above is the correct form: the *time-gating* is the demand-creating mechanism, not the sale.
- REWORK: none — connections sound once M-03/M-35 are authored.

## create_pattern_schematics   [anchors: create (1)]

- LEAVE — pure build-automation tooling inside the Create spine. Zero items of its own (0 blocks, 3 items: schematic objects) and no material surface to route a 2nd-pillar link through. No coherent forced weave possible; it earns its place as a Create-internal QoL support. Confirmed LEAVE.

## appleskin   [anchors: support (1)]

- LEAVE — zero-content client HUD mod. No items, no blocks, no loot, no recipe surface. Genuine zero-surface support role; no weave possible or needed.

## mushroomquest   [anchors: survival (1)]

- from: mushroomquest effect-bearing / rare caps (e.g. agarikon, angels_wing, autumn_skullcap) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare real-world mushrooms with potent medicinal/deadly effects transmute naturally into Occultism spirit-reagents or Ars imbuement inputs — the fungi's world as arcane-ingredient supplier is thematically tight (herbalism → alchemy). Mid-power items; one processing step per cap type, not a chain.
- from: mushroomquest common edible caps (bay bolete, common puffball etc.) | via: farmersdelight:cooking or extradelight:melting_pot | to: survival (processing-chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Everyday foraged mushrooms entering the Farmer's Delight cooking chain as an ingredient (mushroom soup, stew) is the natural output pipeline — it already reads as "of course." One light step; zero depth overdraft for a forageable basic.
- from: mushroomquest glowshrooms (bioluminescent block) | via: create:crushing → glowing dust byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Glowshroom blocks crushing back to glowing dust (+ experience nugget) threads the deco fungal set into the Create deco-recycle loop. Lossy, one step — the M-04 pattern exactly.
- from: mushroomquest mythical/rare drops | via: M-09 "rare forageable → sellable" | to: economy | motif: none | verdict: REJECT | reason: M-09 retired. Bare sale link is the ambient endpoint, not a weave. The magic-transmutation route (M-11 above) is the proper demand-gating form.
- from: mushroomquest mushrooms | via: M-22 lunar reagent — "only harvestable under a specific moon phase" | to: survival↔magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Locking mythical caps (e.g. death cap, fly agaric equivalent) behind lunar-phase harvesting (mushrooms that only fruit during a full / blood moon — Enhanced Celestials) is thematically perfect and makes their rarity mechanic not just RNG but celestial timing. Advances the M-22 "span every moon event" directive.
- REWORK: none — single-anchor survival is correct. M-11 / M-12 / M-04 / M-22 candidates each add a coherent 2nd anchor.

## xaerominimap   [anchors: support (1)]

- LEAVE — zero-content client UI mod (no items, no blocks, no loot, no recipe surface). Navigation aid only; nothing to weave. Genuine zero-surface support role.

## ding   [anchors: support (1)]

- LEAVE — zero-content client audio-cue mod. No items, no blocks, no loot. Nothing to weave. Genuine zero-surface support role.

## supermartijn642corelib   [anchors: support (1)]

- LEAVE — pure code library (GUI/block/BE/packet scaffolding). Zero items, zero blocks, zero loot, no content surface whatsoever. Confirmed LEAVE.

## create_confectionery   [anchors: create, survival (2)]

- OK — connections sound. Already 2-anchor (Create + survival): the cocoa→chocolate chain runs through Create crushing/mixing/compacting/filling/pressing (fully woven into the spine) and the edible effect candies anchor to survival. Both connections are solid and load-bearing.
- from: create_confectionery:hot_chocolate / candy (effect item) | via: M-26 consumption sink → survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Hot Chocolate granting Regeneration and Speed candies are consumed against the survival pressure layer — they're not stockpilable perks but a repeating demand driver (constant consumption = constant cocoa-chain demand). Strengthens the existing survival anchor as a consumption-sink rather than a passive food note.
- from: create_confectionery:bar_of_ruby_chocolate (rare variety) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ruby chocolate (the rarest variety, made from a distinct Create process chain) as an Ars imbuement catalyst — chocolate factory meets arcane-ingredient supply. Mid-tier; thematically coherent (luxury processed goods as ritual catalysts is a recurring fantasy-cooking trope). Gives the confectionery a magic 3rd anchor without forcing it.
- from: create_confectionery chocolate bricks (deco blocks) | via: create:crushing → cacao gravel/dust byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Chocolate-brick deco blocks crushing back to cocoa dust + experience nugget (lossy) is the M-04 deco-recycle pattern; keeps the decorative set tied to the spine rather than becoming a disposal dead-end.
- from: create_confectionery (luxury goods) | via: bare "sell chocolate for coin" | to: economy | motif: none | verdict: REJECT | reason: M-09 retired. Bare luxury-good→coin is the ambient endpoint. The dossier flagged M-09 as the 2nd-anchor candidate — but that's exactly the retired motif. No economy weave is warranted here unless a demand-gating mechanic (M-26/M-29/M-28) ties to it, and the M-26 consumption sink above is the correct framing.
- REWORK: existing Create + survival connections are sound. Adding M-26 / M-10 / M-04 as additional depth, not corrections.

## stylecolonies   [anchors: support (1)]

- LEAVE — pure MineColonies blueprint-set (schematic styles). No own items, blocks, or loot. Its design-intent weave (Steampunk style consuming Create blocks at build time) is already embedded in the blueprint data, not a recipe to author. No coherent additional weave possible without authoring new styles (out of scope for Phase 2). Confirmed LEAVE.



