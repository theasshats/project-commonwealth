# Phase 2 candidates — chunk-08  (pass-26, mode=blind)

## moblassos   [anchors: survival (1)]
- from: filled lassos (livestock/villager transport) | via: aeronautics logistics utility | to: aeronautics | motif: none | power: mid | tone: ok | verdict: REJECT | reason: no method to route a material THROUGH — it's a utility synergy (carry mobs onto ships), not a recipe/loot/trade weave; no motif fits (no-motif).
- from: emerald_lasso captures villagers | via: trade-hub stocking | to: economy | motif: M-21 (provisional) | power: mid | tone: clash | verdict: REJECT | reason: generic logistics enabler for moving traders; not a distinctive distribution node, and M-21 is explore-only. Economy de-emphasis.
- from: hostile_lasso / capture mechanic | via: create:deploying or magic ritual on a captured mob | to: create/magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: lasso items are inert NBT containers; no coherent processing method consumes them; forcing an edge would be contrived.
- LEAVE — item-utility mod; no material flows through it and no coherent 2nd-anchor method edge (aeronautics tie is nominal). Confirms dossier.

## wits   [anchors: support (1)]
- LEAVE — pure server-side command (0 items/blocks/loot); genuine zero-content utility, nothing to weave.

## create_enchantment_industry   [anchors: Create (1)]
- from: experience_bucket (liquid XP) | via: occultism:ritual / spirit cost | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals that demand XP can drink piped Liquid Experience — automate the soul-cost of summoning. (Liquid XP as the bridge fluid; magic acquisition supplied by an industrial XP source.)
- from: experience_bucket (liquid XP) | via: ars_nouveau:imbuement / source generation | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: feed Liquid XP into an imbuement step so the Create XP factory can prime the magic-currency hub (source_gem), bonding the tech enchant-line to Ars. Depth scales — not gating a basic Ars step, an optional XP-fed accelerator.
- from: blaze_enchanter / hyper-enchant output | via: KubeJS boss/colony gate | to: create (progression) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: cap-breaking hyper-enchantment is the kind of endgame power that should sit behind a boss drop or MineColonies part, not be free — a natural on-ramp gate.
- from: enchanted gear output | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Enchanted books are trivially saleable; not a loop-closing sink.
- REWORK: existing Create anchor is sound (hard Create dep + grinding recipe-type). OK — connection sound. The strong missing weave is magic (XP↔enchant economy is the literal bridge to the magic pillar) — promote that to the 2nd anchor.

## direct_chute   [anchors: Create (1)]
- from: direct_chute block | via: aeronautics ship logistics | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: a basic zinc Create logistics block; aeronautics tie is purely local/nominal. No material routes through it. Don't gate an everyday block.
- LEAVE — single self-contained Create logistics block crafted from zinc (already a Create material); no coherent 2nd anchor. Confirms dossier.

## securitycraft   [anchors: support (1)]
- from: block_reinforcing (high-tier scanners/keypads) | via: create:mechanical_crafting / create-made parts | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the strongest reinforcing/access gear is built from Create-fabricated components (circuitry/electron tubes), tying base-defense to the tech spine instead of being trivially cheap. Endgame-side only — leave basic keypads cheap.
- from: keypad/scanner electronics | via: createaddition:charging (FE) | to: create/tech | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: SecurityCraft devices don't consume FE; charging bridge has no host, would be contrived. (no-motif fit in practice.)
- from: ore-disguised block-mines / reinforced gear | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: clash | verdict: REJECT | reason: generic-sellable / generic coin-sink — non-distinctive, economy de-emphasis. Defense gear isn't a distinctive distribution node.
- REWORK: support anchor is fine for a PvPvE crew, but it has a real content surface (690 items, reinforcing accepts any block). The Create gating above is the legitimate 2nd anchor — prefer it over leaving at support-only.

## friendsandfoes   [anchors: survival (1)]
- from: crab_claw / Wildfire / Illusioner drops | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: combat loot from the new hostiles (Wildfire shield/Illusioner drops) becomes a magic reagent input — isolated mob drops earn a use in the magic web. Light single-step.
- from: copper buttons / lightning rods / copper_golem_head | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper-themed deco recycles (lossy) to copper nuggets + XP nugget, folding the copper set into Create's metal recovery web.
- from: mob drops | via: numismatics/bounty | to: economy | motif: M-14 | power: everyday | tone: clash | verdict: REJECT | reason: generic bounty/sell payout — non-distinctive, economy de-emphasis; the mod is deliberately vanilla-like.

## t_and_t   [anchors: survival (1)]
- from: village/outpost/ship loot chests | via: loot-seed (magic reagents) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed scarce magic reagents / a boss-key fragment into conquerable-fort and shipwreck loot, so exploring its structures feeds the magic & gating routes (loot-table datapack edit; do NOT leave a loot-bearing structure mod).
- from: conquerable fort/tower loot | via: loot-seed (progression key) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: place a tech-gate key (boss-key style) in conquerable pillager-fort loot, making "conquer a fort" an alternate on-ramp to high-tier Create — an exploration/danger route into production.
- from: 16 village variants (villager trade hubs) | via: villager trade → numismatics | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: trade-hub seeding is M-21 explore-only AND a generic sell/trade tie — economy de-emphasis; surface only, not an anchor.

## fluid   [anchors: Create, aeronautics (2)]
- REWORK: OK — connections sound. Create dep is hard (parts built through compacting/deploying/mixing/mechanical_crafting); the aeronautics tie is genuine (better fluid routing for ships/bases = logistics-of-matter), not nominal. No forced third needed; neon/sink decor is flavor, not a pillar. No new ACCEPT — already well-woven and the existing edges are real.

## trading_floor   [anchors: Create, economy (2)]
- REWORK: OK — connections sound. Hard Create dep (it's a Create depot variant) and its whole function is automated trade — economy edge is structurally load-bearing, NOT a generic sellable (it's a distinctive distribution node: the literal Create↔trade join, the keystone for M-08 — feed Create-processed scarce metal in, mint coin out). This is exactly the "distinctive economy link" the de-emphasis carve-out preserves.
- from: trading_depot | via: M-08 keystone (Create-processed scarcity → mint) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: route regionally-scarce metal through Create then into the depot to auto-mint emerald/coin value — the canonical loop-closing sink, already the mod's purpose. (Reinforces the existing economy anchor, distinctive not generic.)

## packetfixer   [anchors: support (compat/perf) (1)]
- LEAVE — pure network-fix infra, 0 items/blocks, no gameplay surface; genuine zero-content support mod.

## stylecolonies   [anchors: support (1)]
- from: Steampunk blueprint style | via: MineColonies build consuming Create blocks | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the Steampunk style already pulls Create blocks at build time — that's an intrinsic tie, not a new authored weave; no recipe/loot to add (no-motif). It registers no items.
- LEAVE — pure MineColonies blueprint/decoration palette; defines no recipes or items. Its natural Create/colony tie is intrinsic, nothing to author.

## mousetweaks   [anchors: support (1)]
- LEAVE — client inventory-input QoL; 0 content, nothing to weave.

## vc_gliders   [anchors: aeronautics (1)]
- from: paraglider_diamond / _netherite (higher tiers) | via: create:pressing / mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gate the upper glider tiers (or reinforced paper) on Create sheets/pressed parts so flight gear climbs through the tech spine — keep the iron tier cheap (don't gate the basic frame).
- from: reinforced paper feedstock | via: create:milling / Create paper-pulp chain | to: create (survival adjacency) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: routing basic paper feedstock through milling gates an everyday component behind a chain — guardrail violation (depth must scale with power); the tier-gating above is the right power-matched edge instead.
- from: updraft/heat-source mechanic | via: M-13 fuel/propulsion | to: aeronautics | motif: M-13 | power: mid | tone: clash | verdict: REJECT | reason: gliders are personal traversal, not engine-powered craft; no fuel intake to feed — already anchored aeronautics, no second routing here.

## lithostitched   [anchors: support (library/API) (1)]
- LEAVE — worldgen library, registers no items/recipes; genuine zero-content code library.

## fusion   [anchors: support (client/library) (1)]
- LEAVE — connected-texture rendering library; no items/content, nothing to weave.

## zeta   [anchors: support (1)]
- LEAVE — mod-development framework (Quark's backbone); zero player content, genuine code library.

## rolling_down_in_the_deep   [anchors: support (client/movement) (1)]
- LEAVE — client-only camera/movement feel mod; no material graph, nothing to weave.

## createlowheated   [anchors: Create (1)]
- from: basic_burner consumes furnace fuel (heat as managed cost) | via: survival fuel-cost framing | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: making Create heat a fuel cost is a balance tweak with survival *flavor*, but there's no material routed into another system's method and no motif (no-motif). Honest support-tier within Create.
- from: lowheated heat tier | via: M-16/M-22 seasonal/lunar fuel gating | to: survival | motif: M-16 | power: mid | tone: clash | verdict: REJECT | reason: heat tier is fuel-driven, not season/moon-gated; forcing a celestial input would be contrived.
- LEAVE — single-block Create heating-mechanic tweak; no tradeable/magic/aeronautics surface. Deepens Create only (support-tier within the pillar). Confirms dossier.

## woodworks   [anchors: survival (1)]
- from: wood deco blocks (boards/bookshelves/ladders) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood-deco blocks crush back (lossy) to planks/sawdust + XP nugget, folding the palette into Create's recovery web — light, power-matched.
- from: Sawmill recipe-type / wood deco | via: create:cutting overlap | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: unifying Woodworks' Sawmill with Create's saw is a cosmetic recipe-merge, not a cross-system flow; marginal and risks recipe-graph noise. The M-04 crush edge is the cleaner 2nd anchor.
- from: *_chest / *_bookshelf | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: generic-sellable deco — non-distinctive, economy de-emphasis.

## durabilitytooltip   [anchors: support (client QoL/UI) (1)]
- LEAVE — client tooltip UI; no items or methods, nothing to weave.

== CHUNK COMPLETE ==
