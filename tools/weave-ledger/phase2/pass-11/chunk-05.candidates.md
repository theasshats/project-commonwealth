# Phase 2 candidates — chunk-05

## bakery   [anchors: survival (1)]
- from: cakes/tarts/cupcakes (high-effort processed sweets) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: luxury pastries are natural café-trade goods — time-gated baking effort earns coin
- from: wheat/grain | via: create:milling (millstone) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route flour through the Create millstone as an alternative to the crafting bowl, tying the baking chain to the tech spine (one light step for an everyday ingredient, depth stays appropriate)
- from: crops/fruit surplus | via: ars_nouveau:imbuement (Vitalic sourcelink passive) | to: magic | motif: M-02 | power: everyday | tone: clash — sourcelinks are a passive ambient system, not a per-item routing; bakery outputs are food, not reagents; the connection reads as incidental, not designed | verdict: REJECT | reason: no coherent per-item route; passive source generation belongs to farm mods that own the crop layer, not a baked-goods mod downstream of them

## betterdungeons   [anchors: survival (1)]
- from: dungeon chest loot tables (datapack-editable) | via: numismatics coin seeding | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: rare coins found in crypts/undead fortresses feel right — adventuring earns money, not just loot; the bounty connection (M-14) also flows naturally since dungeon mobs are kill-targets
- from: dungeon chest loot | via: magic reagent drop seeding (ars/occultism items in tables) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: gating Ars source gems / Occultism ritual items behind dungeon exploration pushes magic progression into the world; crypts as the place to find arcane components is thematically solid
- LEAVE (method-routing) — betterdungeons has no processing methods; both accepted weaves are loot-table seeding (the only wiring surface). No forced recipe edge possible or needed.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: ship/fortress chest loot tables | via: numismatics coin seeding | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: pirate galleons and sea fortresses should yield coin — nautical treasure is an obvious economy source; economy pillar gets an ocean faucet
- from: ship structures (nautical aesthetic) | via: aeronautics thematic bridge | to: aeronautics | motif: no-motif | power: n/a | tone: clash | verdict: REJECT | reason: the mod's ships are static structures, not functional vessels; calling this an aeronautics weave is purely aesthetic with no mechanical surface — no-motif, rejected
- LEAVE (method-routing) — no items or processing methods; loot-table seeding is the only integration surface. The economy loot-seed above is the coherent 2nd pillar.

## aileron   [anchors: aeronautics (1)]
- from: Elytra enchants (enchantment datapack exposure) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT (conditional) | hook: applying Aileron's flight-tune enchants through the Enchanting Apparatus makes glider upgrades part of the magic progression — flying better requires magic; conditional on Aileron's enchantments being datapack-accessible as standard enchantments that the Apparatus can target
- from: Aileron loot-injected flight items | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: Aileron has no items of its own; its loot is vanilla Elytra; selling Elytra is vanilla arbitrage, not a designed weave
- LEAVE — Aileron is a behavior overhaul with no item surface; if the enchanting_apparatus route is blocked (enchantments not apparatus-targetable), no coherent 2nd pillar exists and aeronautics anchor alone is fine.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (keystone input) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's rare ice crystal is the gate component for a high-tier Create assembly — you can't automate certain cold-processing without killing the glacier boss first; matches the pack's design explicit boss-unlock for complex tech
- from: mowziesmobs:earthrend_gauntlet / wrought-metal drops (Wroughtnaut) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: unbreakable wrought-iron artefact as a machining keystone; the Wroughtnaut's signature drop earns its place as an industrial gate component (thematically: ancient metal, now refined by Create)
- from: boss artifacts (sol_visage, ice_crystal) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: transmuting a mythic tribal artefact into an occult essence via spirit-fire makes the drops dual-use — combat progression OR magic catalyst; player has a choice
- from: boss drops | via: numismatics bounty payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT (weak, already covered) | reason: Bountiful + M-14 already handles boss-kill bounties generically; applying it here is redundant without a dedicated reason — the M-06/M-11 weaves are the stronger pillars; leave economy to the generic bounty system

## bountiful   [anchors: economy (1)]
- from: bounty payout config | via: numismatics coin reward | to: economy (deepen — already economy) | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: rewiring bounty payouts to output numismatics:cog/spur instead of gold makes Bountiful the primary coin faucet — it's the designed intent of M-14 and the most important config change for the economy pillar
- from: bounty objective pool (fetch/kill) | via: Decree config targeting Create-processed goods | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties that demand Create-processed items (crushed ores, mixed alloys, pressed sheets) turn the bounty board into a Create production driver — a player earns coin by running their factory, which is exactly the economy↔Create double anchor the design wants
- from: bounty objective pool | via: Decree config targeting farm/hunt outputs | to: survival | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: fetch-bounties for seasonal crops or mob drops (Serene Seasons / Mowzie's / MushroomQuest outputs) tie the bounty board to the survival layer; this is the "survival anchor" pillar completion
- NOTE: The 3 accepted rows above are all config/data-level, not recipe authoring — they are Decree and reward configuration tasks (appropriate for Phase 3 data work).

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical caps (high rarity forages) | via: farmersdelight:cooking / extradelight:juicing | to: Create/survival | motif: M-12 | power: everyday–mid | tone: ok | verdict: ACCEPT | hook: running exotic mushrooms through the cooking-pot or juicer into prepared dishes / mushroom broths folds fungi into the food-processing chain that feeds the economy sell loop
- from: mushroomquest rare caps (deadly/mythical, biome-gated) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mythical mushrooms are natural luxury goods — rare biome forages that sell for coin at a wandering-trader/Numismatics shopkeeper; scarcity-driven price
- from: mushroomquest:resin_orb / deadly effect caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the dossier flags this WEAK; resin_orb is not confirmed to have effect relevance to magic rituals; the cooking/economy weave already covers two pillars; adding a thin magic edge here risks forcing a connection — leave magic for mods with confirmed reagent surface; could be revisited if a specific cap item proves suitable

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing salt ore in Create yields salt dust (+ a small bonus) — the pack's ore-processing pattern applied to a food-mineral; one light step, appropriate depth for an everyday ingredient
- from: expandeddelight:cinnamon (bark/spice) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling cinnamon logs/bark into cinnamon dust via Create's millstone ties the spice trade to the tech spine; one light step, everyday power level
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-aged, high-effort) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese is a natural luxury good — cask-aging is time-gated effort that earns a trade price; salt (a regional ore) + time makes cheese a scarcity product
- from: expandeddelight:salt (regional resource) | via: create:milling → numismatics sell (processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT (covered) | reason: salt-as-coin already covered by M-09 cheese weave above; adding a separate salt-coin edge is redundant and M-08 is specifically for metals; keep the cheese weave as the economy entry

## modulargolems   [anchors: Create (1)]
- from: golem assembly requiring boss-drop metals (Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble (with M-15 boss-gating) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies demand metals from boss kills — the combat boss is the key to the top-tier automaton; players who fight bosses unlock the best constructs
- from: golem-core upgrade slot | via: ars_nouveau:imbuement (source_gem infused core) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: infusing a golem-core with Ars source gives it arcane abilities (magic-attuned golem); the industrial-arcane vibe of the mod makes this coherent — golemancy and magic are natural sibling disciplines; light single step for a mid-tier upgrade
- from: golem metal parts | via: occultism:spirit_trade (acquire exotic metals) | to: magic | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: M-10 (Ars infusion) already provides the magic anchor; adding Occultism spirit_trade as a metal source would duplicate the magic connection without adding a new pillar; keep to one clean magic weave

## formations   [anchors: survival (1)]
- LEAVE — Formations is cosmetic scatter-structure worldgen with no items, no loot, and no recipe/method surface. No coherent 2nd pillar exists; any forced edge (e.g. "decorates the world near Create builds") is aesthetic, not designed. Survives on its survival/atmosphere anchor alone.

== CHUNK COMPLETE ==



