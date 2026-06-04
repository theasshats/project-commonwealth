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



