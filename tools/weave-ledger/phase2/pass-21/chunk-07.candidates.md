# Phase 2 candidates — chunk-07

## pingwheel   [anchors: support/QoL (1)]
LEAVE — genuine zero-content QoL: no items, no blocks, no loot, no methods. Multiplayer ping marker only; nothing to route or seed.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / meadow:alpine_salt | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a multi-step hand-crafted alpine cheese wheel is an obvious luxury trade good, and salt is a preserved-food staple — both are things a colony food-trader would sell
- from: meadow:alpine_salt | via: create:milling (ore→salt) or create:mixing (salt-brine) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run alpine_salt_ore through a Create millstone to yield salt — the pack's standard ore-processing weave, gives Create players a route to the salt without the meadow biome grind
- from: meadow:chambray_wool (felted textile) | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: felt/chambray is purely decorative/apparel; pressing wool into it adds Create dependency for a cosmetic that doesn't feed any loop node. One M-12 edge on salt is sufficient; this is weave-for-weave's-sake.
- from: meadow cheese_wheel | via: create:milling / farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cheese is already fully produced in meadow's own native cheese pipeline (a deliberate multi-step craft); adding a Create milling step onto an already-gated product over-layers complexity without advancing the loop. M-09 coin route is the cleaner second anchor.
REWORK: existing anchors are 'survival (1)' — both ACCEPTs above land meadow at survival + economy (M-09) or survival + Create (M-12 salt); either is a valid 2nd anchor. OK — connections sound once one ACCEPT is authored.

## sounds   [anchors: support/client-polish (1)]
LEAVE — zero content surface: no items, no blocks, no methods, no loot. Client audio polish only; nothing to weave.

## bundle_recipe   [anchors: support/QoL (1)]
LEAVE — zero content surface: ships one vanilla crafting recipe re-enabling bundles; no items of its own, no loot, no methods. Pure QoL datapack.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs/Undead Fortress/Spider Cave chest loot) | via: loot-seed (datapack) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatics coin drops into dungeon chests makes clearing dungeons a bounty-grade combat→economy payoff, consistent with the M-14 bounty/combat→coin pattern
- from: betterdungeons loot tables | via: loot-seed (datapack) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars source_gems or Occultism magic reagents as rare dungeon loot gates early magic progression behind exploration/danger, advancing the scarcity→pressure→production chain
- from: betterdungeons loot tables | via: loot-seed (datapack) | to: economy | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is boss-drop as gating key, not dungeon-chest loot; the loot tables here are generic chests without a boss guardian — misuse of the motif. M-14/M-02 cover the real opportunity.
REWORK: existing anchor is 'survival (1)'. The two ACCEPTs land it at survival + economy (M-14) + magic (M-02). OK — that is strong dual-anchor coverage for a loot-only mod.

## aeronauticscompat   [anchors: aeronautics/support (1)]
LEAVE — pure behavior/mixin patch; no items, no loot, no methods. Required infrastructure; nothing to weave and the dossier confirms it.

## notenoughcrashes   [anchors: support/stability (1)]
LEAVE — zero content surface; crash-recovery UI utility only.

## create_confectionery   [anchors: Create, survival (2)]
- from: create_confectionery:bar_of_black_chocolate / bar_of_ruby_chocolate (multi-step processed luxury) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a multi-step cocoa→chocolate factory output is a natural luxury confection to sell at a trading post; completes the scarcity→production→economy arc for the cocoa chain
- from: create_confectionery:hot_chocolate (Regeneration-granting) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: hot_chocolate's effect is Regeneration (survival-potion territory), not arcane; routing a food through an imbuement chamber as a magic reagent is a tone clash — the mod is a chocolate factory, not an apothecary. Imbuement should be reserved for materials that read as "arcane raw material".
- from: create_confectionery:candy (Speed/Saturation effects) | via: farmersdelight:cooking / extradelight:* | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: candies already land solidly in survival via their effect grants; adding an extra cooking step on top of the Create chain that already gates them (cocoa→crushed→cocoa_butter→chocolate→candy) would violate the "don't add more steps to basics" guardrail without adding a new system link.
OK — connections sound. create_confectionery is already at 2 anchors (Create + survival); M-09 ACCEPT grants the 3rd-pillar economy bonus cleanly.

## mffs   [anchors: Create, survival (2)]
OK — connections sound. The dossier explicitly calls mffs the gold-standard authored weave (M-05 focus_matrix + M-06 sequenced_assembly projector/interdiction_matrix chains). No new edges needed and no existing connection is weak.

## terrablender   [anchors: support/worldgen-library (1)]
LEAVE — genuine zero-content worldgen API library; no items, no blocks, no methods, no loot.

## bookshelf   [anchors: support/library (1)]
LEAVE — genuine code library; no items, no blocks, no methods.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block, harvestable, "fallen-star rock") | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a meteor that fell from the sky crushing into iron/nickel dust + xp-nugget byproduct is the exact ore-recycling / bonus-byproduct pattern of M-04 — players who find a meteor crater get a small Create-feedstock bonus
- from: lunar event state (Blood Moon / Blue Moon active) | via: event-gating config tie | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: gate a specific Ars Nouveau ritual (e.g. summon_ritual for a rare arcane entity) or Occultism ritual to only complete under a Blood or Blue Moon — lunar timing as a gating condition, exactly what M-22 was coined for
- from: enhancedcelestials:space_moss_block (exotic plant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: space_moss is effectively a decorative groundcover from a meteor impact; routing it through imbuement as an arcane reagent lacks thematic grounding — space-moss is a mundane flora analogue, not a mystical material. The meteor block (M-04) and lunar gating (M-22) are the two coherent hooks.
REWORK: existing anchor 'survival (1)'. Both ACCEPTs land it at survival + Create (M-04) + magic (M-22). That's a strong result for an atmospheric mod.

## ars_nouveau   [anchors: magic (1)]
- from: farm/mob surplus (any organic output — crops, mob deaths/babies, brewed potions) | via: ars_nouveau:agronomic_sourcelink / vitalic_sourcelink (native passive drain) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Agronomic and Vitalic Sourcelinks passively consume crop growth and mob deaths as Source fuel — survival farms and mob-farms organically power the magic machine; the more you farm, the more Source you generate
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement (hub reagent M-01) | to: magic (internal) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: the established M-01 spine — foreign essences convert through imbuement into/out of source_gem; this is the reserved hub reagent and should be maintained as the canonical magic-currency connector
- from: ars_nouveau:spell_scroll / enchanted_gear | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the dossier itself flags this as WEAK and "prefer leaving economy to dedicated arcane-currency weaves." Selling spell scrolls as a luxury good is too generic and blurs the magic↔economy seam that the dedicated arcane-currency weave (M-01 hub) should own. Reject to keep magic economy channeled through source_gem, not commodity scroll-selling.
REWORK: existing anchor 'magic (1)' — both ACCEPTs properly land it at magic + survival. The M-01/M-02 pair is exactly the dossier's STRONG candidates. OK — connections sound with these authored.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cherry_cheese_pie / ancient_coffee | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: multi-step prepared dishes (sniffer-crop → cook → cherry cheese pie; torchflower → ancient coffee) are credible luxury food trade goods — the kind of thing a food-specialist player sells at market
- from: trailandtales_delight:lantern_fruit (crop) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run lantern fruit through a Create millstone into a fruit-pulp flour/juice intermediate that feeds other cooking chains — the standard crop→Create milling weave that threads uncommon crops into the processing spine
- from: trailandtales_delight:curd_block (intermediate step in cheese pipeline) | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: curd is an intermediate in a native cooking pipeline — pressing it with Create doubles-down on a step that's already deliberately gated through its own mud_stove/pottery_cooking_pot workflow. Adding a Create press step on an intermediate re-routes a native chain rather than bridging a new system. One M-12 edge (lantern fruit milling) is sufficient.
REWORK: existing anchor 'survival (1)'. Both ACCEPTs land it at survival + economy (M-09) + Create (M-12). OK — connections sound once authored.

## createaddoncompatibility   [anchors: support/compat (1)]
LEAVE — content-free compat glue; no items, no loot, no blocks, no methods of its own. Only re-tags foreign items via Almost Unified. No weave surface.

## handcrafted   [anchors: support/decoration-palette (1)]
- from: handcrafted:*_chair / *_table / *_shelf (wood furniture, large variety set) | via: create:cutting (woodcutting/sawmill step to produce boards → assemble furniture) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing a subset of higher-tier furniture pieces through a Create saw (woodcutting planks into the right boards/panels) adds the Create pillar to the deco layer — one light step, consistent with the "one light step for everyday" cost rule
- from: handcrafted:berry_jam_jar (food/deco crossover) | via: farmersdelight:cooking or extradelight:oven | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: berry_jam_jar is a decorative condiment container; it is not a meaningful food-chain node. Routing it through cooking adds a recipe but no loop advance. Decoration palette is the valid anchor; don't manufacture a survival tie on a label.
- from: handcrafted:*_cupboard / *_shelf (storage furniture) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the dossier explicitly flags economy/sell as WEAK ("deco sells thinly"). Furniture is a commodity in an explorer/co-op pack — if everyone can craft it, it's not a trade good. Reject.
REWORK: existing anchor 'support/decoration-palette (1)'. The ACCEPT lands it at support-deco + Create (M-12). That is the appropriate 2nd anchor for a deco mod. OK — connections sound with that one authored.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack tank (portable fluid buffer, aeronautics-expedition relevant) | via: thematic config / aeronautics expedition role | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is about structural alloys/materials in aeronautics build recipes. A wearable item being useful *during* aeronautics expeditions is not a materials-supply weave; it's a passive use-case. No recipe or method routes a backpack tank into the aeronautics build supply chain. Tone: ok, but no method connection.
- from: travelersbackpack upgrade modules (crafting_upgrade, smelting_upgrade, tank_upgrade) | via: create:sequenced_assembly (apply upgrades via deployer chain) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: backpack upgrades (especially the tank upgrade, which adds portable fluid storage for expeditions) built via a Create deployer/sequenced-assembly step — a light M-20 apply-and-upgrade edge that gates the useful expedition-tier upgrades behind Create access
- from: travelersbackpack mob-themed variants (dragon, netherite, blaze) | via: boss-drop as required material | to: survival (danger/boss-drop) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: dragon-/netherite-tier backpack variants requiring a Cataclysm or endgame boss drop to craft — the pack's standard "boss drop gates high-tier items" mechanic; makes endgame backpacks a combat-route reward
REWORK: existing anchor 'survival (1)'. Both ACCEPTs land it at survival + Create (M-20) + survival-danger (M-15, deeper combat tier). OK — connections sound with these authored.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest (effect-bearing mushroom caps — bay bolete, agarikon, mythical caps) | via: farmersdelight:cooking / extradelight:oven | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run common mushrooms through a Farmer's Delight cooking pot or ExtraDelight mortar into prepared mushroom dishes or tinctures — folds the foraging output into the food-processing chain and closes the forage→prepare→eat loop
- from: mushroomquest rare/mythical caps (e.g. resin_orb, agarikon — rare biome-locked drops) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare or mythical foraged caps are a natural low-floor trade good — the mushroom-forager specialist sells rare finds; consistent with the M-09 luxury-goods→coin pattern without requiring any machine
- from: mushroomquest deadly/psychedelic caps (hallucinogenic/toxic variants) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: transmuting deadly or rare mushroom caps through Occultism spirit_fire into an essence or reagent — toxic organics → occult reagent is a coherent ritual-chemistry read
- from: mushroomquest:resin_orb (exotic drop from foraging blocks) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: resin_orb is a foraging curiosity, not a magical material; routing it through imbuement as an arcane reagent has no thematic grounding beyond "it sounds unusual." The spirit_fire route (M-11 ACCEPT above) already covers the magic anchor via the organic→occult path. A second magic edge here would be redundant.
REWORK: existing anchor 'survival (1)'. Three ACCEPTs land it at survival + Create/food-chain (M-12) + economy (M-09) + magic (M-11). That is excellent loop coverage for a foraging mod.

## t_and_t   [anchors: survival (1)]
- from: t_and_t loot chests (biome-village variants, pillager fort chests, ocean ship chests) | via: loot-seed (datapack) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatics coins into t_and_t village/fort/ship chests makes the towns feel like real trade hubs — finding a conquered fort rewards coin, and ship chests tie exploration to the economy
- from: t_and_t loot chests | via: loot-seed (datapack) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars source_gems or Iron's Spellbooks scrolls as rare loot in dungeon-fort chests gates early magic items behind exploration, consistent with the scarcity→pressure chain
- from: t_and_t village villager trades | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is marked provisional (leans no from maintainer). Surface as a candidate for review but do not advance. t_and_t's village flavor is better served by loot-seeding (M-14 ACCEPT above) than by the uncertain villager-trade seam.
REWORK: existing anchor 'survival (1)'. Both ACCEPTs land it at survival + economy (M-14) + magic (M-02). OK — solid dual-anchor coverage for a pure worldgen/structure mod.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot (boss-drop metals) | via: create:crushing / create:pressing | to: Create | motif: M-03 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-drop metals crushed/pressed into exotic plates/dust — the standard Create ore-processing pattern applied to high-tier boss materials; gives Create players a route to boss-mat components and puts boss drops into the processing chain
- from: cataclysm boss-drop metals (ancient_metal_ingot / witherite) | via: create:sequenced_assembly (multi-step chain gating advanced tech) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-material ingots as required keystone inputs in sequenced_assembly recipes for high-tier Create machines — the pack's canonical "complex Create tech unlocks via boss drops" lever named in CLAUDE.md
- from: cataclysm:witherite_ingot / cursium_drop (dark, corrupted materials) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: transmuting Witherite or Cursium through Occultism spirit_fire into a spirit essence — corrupted boss-drop metal → occult reagent is thematically resonant (these are materials from undead/void bosses)
- from: cataclysm boss-material items (ancient_metal, ignitium) | via: numismatics sell | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-drop metals processed into coin via Numismatics mint — the ultimate scarcity (locked behind boss kill + Create processing) converted to high-value currency; anchors the combat route to the economy
- from: cataclysm:amethyst_crab_meat / cataclysm:amethyst_crab_shell (organic boss drops) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: amethyst_crab is already thematically served by its own amethyst_bless ritual (the Altar of Amethyst, a native gating mechanic). Adding an Ars imbuement on top creates a competing/duplicate ritual path for the same material. The spirit_fire route (M-11, ACCEPT above) via Occultism covers the magic anchor without colliding with the native ritual.
REWORK: existing anchor 'survival (1)'. Four ACCEPTs land it at survival + Create×2 (M-03 ore-processing + M-15 boss-key gating) + magic (M-11) + economy (M-08). That is the richest weave result in this chunk — correct for the pack's flagship combat/boss mod.

== CHUNK COMPLETE ==
