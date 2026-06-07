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

## create_better_villagers   [anchors: create, economy (2)]

- OK — connections sound. Already 2-anchor (Create + economy): villager professions keyed to Create workstations supply Create parts through trade, directly bridging production and the economy pillar. Both anchors are load-bearing and correct.
- from: create_better_villagers trade denomination (emeralds) | via: config or KubeJS trade override → Numismatics coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Re-denominating the Create-profession trades from vanilla emeralds into player-minted Numismatics coinage closes the loop properly — coins minted by a Create specialist are the medium the villager workers accept, keeping the currency in the player-run economy rather than the emerald economy. Config-level change; no recipe required.
- from: create_better_villagers (emerald-denominated NPC trade) | via: bare villager-trade-to-coin link | to: economy | motif: none | verdict: REJECT | reason: The vanilla emerald trade loop is NOT M-21 (cut) — it's a pre-existing vanilla mechanic. An NPC-vendor sourcing Create parts for emeralds is not a player-run economy weave by itself. The M-08 re-denomination above is the correct form; without it, the economy anchor rests on vanilla trading which is structurally fine but not a Phase-3 authoring target.
- REWORK: the existing economy anchor is valid but weak in the vanilla-emerald form. The M-08 re-denomination strengthens it into the pack's actual economy. Flag as a priority config pass alongside the Economy pillar (v0.9.0).

## byzantine   [anchors: survival (1)]

- LEAVE — pure MineColonies schematic-style pack (Byzantine/Shogun/Nile building styles). Zero own items, blocks, or loot. Like stylecolonies: its connection to the loop runs entirely through MineColonies' builder consuming materials, which is already M-28's domain. No recipe surface or material to author a weave against. Confirmed LEAVE.

## ars_n_spells   [anchors: magic (1)]

- LEAVE — this is itself a weave (the Ars Nouveau ↔ Iron's Spellbooks bridge), not a node that wants an external 2nd anchor. It has zero items, zero blocks, and no material surface. Its job is internal magic-web unification (M-01 territory); forcing an external link would be adding a 2nd anchor to a connector that has no throughput of its own. Confirmed LEAVE — genuine bridge mod with no item surface.

## illagerinvasion   [anchors: survival (1)]

- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Hallowed Gem is already the gate item for the Imbuing Table's over-cap enchantments — routing it as an Ars imbuement catalyst or an Occultism ritual input gives it a second sink and makes the Invoker a dual-purpose boss kill: enchant-booster and magic-reagent supplier. Endgame power, deep step appropriate. M-02 mob-drop reagent sink.
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary dust from the Illusioner (an illusion-themed mob) fed into an Ars imbuement station as a spell-catalyst ingredient is tonally perfect — illusion magic producing illusion-flavored arcane dust. Mid-tier (raid drop, not boss-exclusive). One step into the imbuement apparatus.
- from: illagerinvasion:platinum_chunk (rare drop) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Platinum chunk is an ore-grade drop from rare mobs — running it through Create crushing to yield platinum ingot/nugget (with experience nugget byproduct) integrates this drop into the Create ore-processing chain. The dossier flagged this as WEAK, but platinum as a new metal with a Create processing path is coherent; mid-power, one step.
- from: illagerinvasion boss drops (hallowed_gem, platinum) as endgame combat supply | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: A combat-specialist player who farms the Invoker holds Hallowed Gems and platinum that a magic- or tech-specialist can't easily self-supply — classic combat-route supply. The danger of the Invoker boss is the price; the gem/platinum is the product that flows to the economy. M-34 combat-route supply.
- from: illagerinvasion:hallowed_gem → "players mint it for coin" bare economy link | to: economy | motif: none | verdict: REJECT | reason: M-09 retired; bare sell link is the ambient endpoint. The M-34 combat-route supply above is the correct demand-gating form — it's the *scarcity of boss access* that gates supply, not a coin transaction.
- REWORK: existing single-anchor survival is correct. The Imbuing Table gives it a latent magic foot the dossier correctly identified. M-02 (hallowed_gem + illusionary_dust) is the priority 2nd-anchor weave.

## grimoireofgaia   [anchors: survival (1)]

- from: grimoireofgaia nuggets/fragments (the large catalogue of mob-drop materials) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A bestiary of mythic creatures dropping mythic fragments naturally feeds a ritual/transmutation system — grinding a gorgon's scale or a harpy feather in spirit-fire to produce an Occultism reagent is the "of course" connection. The mod already touches create:emptying (one existing weave) and farmersdelight:cutting; occultism:spirit_fire completes the magic pillar tie. Mid-power (drops are mid-progression); one step per drop type.
- from: grimoireofgaia mini-boss busts (bust_gorgon/minotaur/sphinx/valkyrie/vampire) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mini-boss busts are high-effort drops requiring defeating specific named variants — a combat specialist who farms these holds decoration/prestige items that non-fighters want. The danger is the supply constraint; busts as trade goods complete the combat-route supply loop. M-34 combat-route supply.
- from: grimoireofgaia:c:nuggets/diamond and c:nuggets/emerald drops | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Diamond/emerald nuggets tagged c:nuggets drop from Gaia creatures — routing these through Create crushing (already the standard nugget-doubling path) gives the combat loop a Create-ore-processing tie. The mod already touches create:emptying so the Create weave surface is established; M-03 extending to the nugget drops is a light additional step.
- from: grimoireofgaia drops → bare "sell boss busts for coin" | to: economy | motif: none | verdict: REJECT | reason: M-09 retired. The M-34 combat-route supply above is the correct form. Busts as sellables are the ambient endpoint; the demand-gating is that combat specialists hold them and non-fighters need them for colony decoration (M-28 colony use would add more depth, but that requires a specific colony-request weave to author).
- REWORK: existing anchors (survival, partial Create via the emptying/cutting touches) are sound. The dossier's STRONG magic recommendation (M-11) is the right priority 2nd-anchor.

## companions   [anchors: survival (1)]

- from: companions:crystallized_blood (Soul Furnace output from rotten flesh/mob drops) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood produced in the Soul Furnace is already a magical-process intermediate — routing it (or soul gems) into Occultism ritual or Ars imbuement as a reagent bridges the two arcane systems. The tone is tight: gothic alchemy → Occultism is the natural handoff. M-11 ritual/transmutation sink.
- from: companions:soul_furnace as method | via: M-19 Create haunting parallel — mob-drops transmuted to soul-state outputs | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: The Soul Furnace is functionally a soul-fire transmuter (like create:haunting) — treating it as a companion method to Create's haunting channel (where one route converts via Blaze/soul-fire and another via the Soul Furnace) gives the two a designed relationship rather than parallel islands. M-19 soul/haunting seam is the right motif frame: the Soul Furnace is the organic/magic-side version of Create's soul-fire channel.
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold is a boss-only drop from a difficult multi-phase fight — a combat specialist who farms the Sacred Pontiff holds something non-fighters can't replicate cheaply. Classic combat-route supply; M-34.
- from: companions:voltaic_pillar_block / tesla_coil_block (deco) | via: create:crushing → copper scrap | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Electrical deco blocks (Tesla coils, voltaic pillars) are copper-based — crushing them back to copper scrap + experience nugget is the M-04 deco-recycle pattern. Light single step; keeps the electrical deco set tied to the Create spine rather than being a pure disposal dead-end.
- from: companions own coins (copper/nether/end_coin) | via: "bridge to Numismatics" bare coin-link | to: economy | motif: none | verdict: REJECT | reason: M-09 retired; merging two coin systems is a config/design decision, not a weave motif. The companions coins are internal to its mod loop and should not be surfaced as Numismatics → they'd introduce an NPC coin faucet (the Soul Furnace producing tradeable coin via internal recipes). Leave the coin systems separate; M-34 (boss drop supply) is the legitimate economy link.
- REWORK: none — existing single-anchor survival is correct. Priority 2nd anchor is magic (M-11 Crystallized Blood / M-19 Soul Furnace as haunting-sibling).

## minecolonies_tweaks   [anchors: support (1)]

- LEAVE — tag-harmonization and colony QoL support. No own gameplay content (38 items are the scroll tools, no processing method). Its value is the 89 c:tags it injects — those tags enable food-web weaves on other mods, making it an infrastructure enabler, not a node. The component_merge_shapeless recipe-type is a colony internal. No coherent 2nd-pillar weave possible on this mod itself. Confirmed LEAVE — enabler role.

## born_in_chaos_v1   [anchors: survival (1)]

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal is an ore-grade deposit dropped/mined from fallen Chaos Knights — running it through Create crushing yields dark metal dust/nugget (+ experience byproduct), integrating the gothic-horror metal into the Create ore-processing chain. Mid-power (uncommon mob drop, not trivial); one processing step. Dossier correctly rated this STRONG.
- from: born_in_chaos_v1:bundle_of_bones (mob drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Bundle of bones from undead/skeletal mobs transmuted in Occultism spirit-fire into a necromantic intermediate — tonally perfect (BIC's spooky-gothic tone maps directly onto Occultism's necromantic palette). M-11 ritual/transmutation sink. One step; mid-power mob drop.
- from: born_in_chaos_v1:bagof_candy (seasonal boss loot, Oct 25–Nov 5 Pumpkinhead) | via: Serene Seasons / lunar gate + create:mixing | to: survival↔create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Bagof Candy is already seasonal (the Pumpkinhead boss only spawns in a real-calendar Halloween window, or by ritual). Gating the bag's craft/use behind Serene Seasons autumn-phase extends its seasonal identity into the mechanics rather than just lore. M-16 seasonal reagent. Light config or recipe step.
- from: born_in_chaos_v1 boss-only drops (Pumpkin Staff / Soul Saber) as high-tier gate | via: boss-key unlock | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Pumpkinhead boss drops the Pumpkin Staff and Soul Saber as rare endgame loot — using these as required inputs in a high-tier KubeJS-gated Create recipe (e.g. a dark-forged machine part) gives the seasonal boss a permanent tech-gate role beyond being a cosmetic difficulty spike. M-15 boss-key unlock.
- from: born_in_chaos_v1 drop economy | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal and bundle of bones are drops a combat-specialist farms from dense BIC mob spawns and sells to the Create tech player who needs dark_metal for a Create-processed intermediate. The danger is the supply gate; the ore-equivalents flow into the economy. M-34 combat-route supply.
- from: born_in_chaos_v1 drops | via: bare "sell dark metal drops for coin" | to: economy | motif: none | verdict: REJECT | reason: M-09 retired; bare sell link is ambient. M-34 above is the correct demand-gating form.
- REWORK: none — single-anchor survival is correct. M-03 (dark_metal_deposit via Create crushing) is the priority 2nd anchor; M-11 (bundle_of_bones via spirit_fire) and M-15 (boss-key) add depth.

## death-count-1.0   [anchors: support (1)]

- LEAVE — a vanilla scoreboard datapack tracking death count for the tab list. Zero items, zero blocks, zero loot. Pure cosmetic server flavor; no content surface whatsoever. Confirmed LEAVE — genuine zero-surface support.

## rottencreatures   [anchors: survival (1)]

- from: rottencreatures:frozen_rotten_flesh (Frostbitten zombie drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Frozen rotten flesh from cold-biome undead is a thematically distinct reagent — transmuting it in Occultism spirit-fire to yield a cryo-attuned intermediate (or a spirit reagent) is tonally sound and gives Frostbitten zombie kills a magic-web purpose beyond loot. M-11 ritual/transmutation sink.
- from: rottencreatures:magma_rotten_flesh (magma-variant drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Magma rotten flesh from fire-themed undead — a parallel magma-attuned transmutation reagent in spirit-fire. Same motif as frozen flesh but produces a heat-aligned intermediate. Pair with frozen_rotten_flesh as complementary cryo/pyro spirit materials. M-11.
- from: rottencreatures:corrupted_wart (swampy zombie drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Corrupted wart has an immediately readable alchemical identity (a diseased fungus from a swamp-undead) — feeding it into an Ars imbuement apparatus as a reagent/catalyst is the natural reading. M-02 mob-drop reagent sink.
- from: rottencreatures: drops (frozen/magma flesh) | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: Create's haunting method (soul-fire transmutation) is tonally adjacent to processing undead drops through cursed flame. Routing frozen or magma rotten flesh through create:haunting to yield a soul-adjacent byproduct threads the undead-bestiary drops into the Create↔magic seam. M-19 soul/haunting seam.
- from: rottencreatures: drop loot | via: bare "sell mob drops for coin" | to: economy | motif: none | verdict: REJECT | reason: M-09 retired; bare drop-sale is ambient. No economy weave is warranted unless a specific demand-gating mechanism ties to these drops — the magic sinks (M-11/M-02) above are the correct demand-gating form (a magic specialist has ongoing need for these inputs).
- REWORK: none — single-anchor survival is correct. M-11 (frozen/magma flesh via spirit_fire) is the priority 2nd-anchor set; M-02 (corrupted_wart via Ars) adds a parallel magic tie.

== CHUNK COMPLETE ==

