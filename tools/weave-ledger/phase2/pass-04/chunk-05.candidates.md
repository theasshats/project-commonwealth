# Phase 2 candidates — chunk-05

## bountiful   [anchors: economy (1)]
- from: bounty reward pool | via: numismatics coin payout (config/data) | to: economy (deepen) | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: kill a mob or collect a processed material, the board pays in Numismatics cog/spur — the natural faucet for the coin economy
- from: bounty objective pool (Decrees) | via: config/data pointing bounties at Create-processed goods (iron sheets, bronze rods, packed meals) | to: Create | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Decree on the board calls for a stack of pressed iron sheets — now Create production has a customer; surplus becomes coin
- from: bounty objective pool | via: Decrees requesting magic reagents (source gems, essences) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: magic reagents are scarce/progression items; turning them into routine bounty fodder cheapens scarcity and risks short-circuit of the magic pillar's economy — stick to M-14 demand on combat/production outputs, not magic consumables
- from: bounty objective pool | via: Decrees requesting aeronautics cargo | to: aeronautics | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: Aeronautics content is structural/vehicle, not deliverable cargo in the same sense; forced edge; M-14 reads more coherently as combat-drops → coin

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (multiblock climate machine) | via: create:mechanical_crafting / M-05 native-method gating — require Create brass casing or andesite machine block as hearth component | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a hearth that actually heats your base takes a brass casing from the factory floor — survival infrastructure routes through the tech spine
- from: cold_sweat:chameleon_molt / goat_fur / hoglin_hide (insulating furs) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: insulation materials are mid-game consumables (sewing table fodder), not finished luxury goods; selling raw furs as coin feels thin — the hook is too weak for a 2nd-pillar claim; survive → sell is not a player "of course" moment here
- from: cold_sweat:boiler/icebox (FE-accepting climate emitters) | via: createaddition:charging — FE from Create-electric charges/powers the boiler | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: boiler/icebox are fuel-burning by default and M-17 is for tools/foci; piping Create electric into them may not be supported in-game without a compat config; M-05 gating is a cleaner, more certain hook — don't stack two weaves on the same machine

## t_and_t   [anchors: survival (1)]
- from: t_and_t village loot tables / villager spawns in 16 biome variants | via: numismatics trade routing (village chests seed coins; village traders are natural economy nodes) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no (maintainer caveat); and t_and_t contributes no new villager professions or trade-definition data — it's a structure variant mod, not a villager profession mod; forcing trade-route weave here is thin and would be no-motif in practice
- from: t_and_t conquered fort loot chests | via: bountiful Decree — a Decree targets t_and_t-style outpost/fort mobs (pillagers), rewarding coin for clearing them | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: conquering a biome-variant outpost generates mob-kill bounties that pay in Numismatics coin — the exploration/combat loop connects to the economy without adding items to t_and_t itself
- from: t_and_t sail ship (ocean structure) | via: aeronautics thematic — the pack's ships in the sky echo the sea ships in the world (no mechanical weave possible; no items) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif; t_and_t exposes no items or methods to route through; thematic parallel alone is not a weave

## modulargolems   [anchors: Create (1)]
- from: modulargolems golem assembly | via: modulargolems:golem_assemble requiring a boss-drop metal (Cataclysm cursium ingot / Ice&Fire dragonsteel) as the core material for top-tier golem bodies | to: survival (combat progression) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: building a cursium-body golem demands the Cataclysm boss drop — defeating the boss unlocks automated combat; the golem IS the boss-key payoff
- from: modulargolems golem-core upgrade slot | via: ars_nouveau:imbuement — an Ars source-gem infusion applied to a golem upgrade part gives it an arcane ability (e.g. spell-cast aura) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: modulargolems upgrade slots are metal-stat driven (not spell-driven); bolting Ars infusion onto a golem upgrade feels like a mechanical stretch — the golem's identity is industrial-construct, not arcane-familiar; tone clash with the mod's own design; M-15 boss-metal gate is the clean 2nd weave

## formations   [anchors: survival (1)]
- LEAVE — pure scatter-structure worldgen mod with no registered items (only a template_editor dev tool), no methods, and no loot tables; no coherent 2nd-pillar hook exists without inventing content that belongs to formations. Indirectly enriches the exploration loop but offers no mechanical seam.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris (rare whale drop) | via: occultism:spirit_fire transmutation → spirit intermediate | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris has been a real-world perfume/alchemy ingredient for centuries — feeding a rare ocean-creature drop into an occult transmutation is an obvious "of course" that doesn't need explanation
- from: alexsmobs:ender_residue (void worm drop) | via: ars_nouveau:imbuement → arcane catalyst / source sink | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm lives in the End; its residue attunes readily into arcane source — hunting the worm unlocks a magic shortcut
- from: alexsmobs:bear_dust / bone-type drops | via: create:crushing → bone meal / crushed intermediate | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: bear_dust and standard bone-type drops are not a strong enough reason — vanilla bones already crush; this is not a meaningful 2nd weave, just noise
- from: alexsmobs:ambergris / rare drops | via: numismatics sell as luxury commodity | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: with M-11 (magic) already the accepted 2nd pillar, adding a parallel economy edge dilutes the "ambergris → alchemy" identity; the sell-good hook is weaker than the reagent use; one accepted 2nd pillar is sufficient here

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire / ritual → magic reagent | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a venomous dungeon fang fed into a spirit ritual is an immediate "of course" — dungeon-crawler work unlocks an occult ingredient
- from: undergroundworlds temple/pyramid bricks (themed deco stone sets) | via: create:crushing → crushed stone + create:experience_nugget (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing ruin bricks back to rubble is extremely thin as a 2nd pillar justification; M-04 is a *reward* for re-using deco, but the undergroundworlds brick sets are not distinctive enough to earn the "of course" reaction — this is a low-value edge
- from: undergroundworlds:desert_charm / antidote_flask | via: numismatics sell (cold-region / poison-region gear is a commodity) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: charms are dungeon-loot accessories with curio slots, not processed luxury goods; the M-09 pattern is for high-effort consumables/foods, not loot-chest pickups — tone clash with M-09's intent

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore → crushed tin → create:mixing steel | via: numismatics mint → coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a regional scarce ore — processing it into steel via Create and then minting steel products into coins is exactly the pack's scarcity-economy north star; the full chain (mine → crush → alloy → mint) is the clearest M-08 instance in the pack
- from: create_ironworks:steel_ingot / steel plate (item/plates/steel) | via: M-23 structural alloy → aeronautics airframe/hull component | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the obvious hull material for an airship — building a serious flying vessel should cost fabricated structural steel, not just wood and brass
- from: create_ironworks:bronze_ingot / tin_ingot | via: ars_nouveau:imbuement or occultism as catalysts | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: bronze/tin are industrial metals with no arcane resonance in this pack's lore; forcing them into an imbuement reads as a mechanical stretch, not an "of course" — magic is already supplied by dedicated ore/drop reagents; tone clash

## bettermineshafts   [anchors: survival (1)]
- LEAVE — pure structure-overhaul mod with zero registered items, blocks, or loot tables; nothing to route through any method. Its value is spatial (bigger, more interesting mineshafts = better ore-mining experience), which reinforces the pack's scarcity-ore loop indirectly, but no mechanical seam exists to weave.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cherry_cheese_pie / ancient_coffee / cherry_petal_tea (high-effort finished foods) | via: numismatics sell as luxury goods / colony deliverables | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cherry cheese pie or ancient coffee is a multi-step farm-to-table production — selling it as a premium good or shipping it to a colony makes perfect sense; M-09 luxury-food → coin
- from: trailandtales_delight:lantern_fruit / pitcher_taro (sniffer-recovered crops) | via: create:milling → flour/powder intermediate that feeds further recipes | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running exotic archaeological crops through the Create mill to get a versatile intermediate (lantern fruit powder as a flavoring/reagent) weaves the Trails & Tales food loop into the Create processing web naturally
- from: trailandtales_delight:curd_block → cheese_wheel | via: create:pressing (milk → curd step automated) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create press squeezing milk into curd for cheese production is a textbook processing-chain pull; the cheese chain already has multiple manual steps and a press fits neatly as one of them
- from: trailandtales_delight:lantern_fruit (item/foods/berry tag) | via: ars_nouveau:imbuement as a seasonal catalyst | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Lantern Fruit has no seasonal lock (it's grown from sniffer seeds, not a season-gated crop); M-16 seasonal-reagent requires a season-gated input — the tag doesn't qualify; tone is ok but the motif fit is wrong

== CHUNK COMPLETE ==









