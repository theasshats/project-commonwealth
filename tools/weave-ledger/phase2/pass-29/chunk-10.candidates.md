# Phase 2 candidates — chunk-10

## mutantszombies   [anchors: survival (1)]
- LEAVE — pure behavior-only mob mod; no drops, no items, no loot tables (loot=no confirmed). No material surface to route through any method. Dossier's own judgment correct: forcing an edge here is the failure mode.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: the salt ore sits in the ground — running it through a Millstone/Crushing Wheel doubles yield (salt + crushed deepslate byproduct) and ties the cooking supply chain to Create from day one.
- from: expandeddelight:cinnamon_log / cinnamon bark (spice reagent) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Millstone grinds cinnamon bark into cinnamon dust, the same way it grinds spices — makes the Create mill the entry point for the seasoning chain rather than raw crafting table.
- from: expandeddelight:cheese_wheel (aged) | via: create_cheese:maturing or expandeddelight cask | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese takes time (aging cask mechanic) → creates a maturing-specialist niche; the wheel is a natural trade good that nobody else can rush (value = time invested).
- from: expandeddelight:cheese_wheel / salt as "luxury good → sellable" | via: bare numismatics sale | to: economy | motif: bare sell link (M-09 retired) | verdict: REJECT | reason: M-09 is retired; "sellable" is the ambient endpoint, not a weave. The cheese already accepted under M-35 (maturing) which captures the real value.
- REWORK: dossier 2nd-anchor candidate lists M-09 luxury-good→coin as [MED] — that motif is retired; the coin angle should be re-expressed as M-35 (aging/maturation creates time-locked value) or M-26 (salt as a consumption sink in recipe chains), not a bare sell link.

## citadel   [anchors: support/library]
- LEAVE — genuine zero-surface library. No items, no loot, no methods. Dependency of Alex's Mobs/Caves; no weave possible or needed.

## createthreadedtrains   [anchors: support/performance]
- LEAVE — pure performance mod; zero items, zero blocks, zero loot. Nothing to weave. It serves the economy/aeronautics pillar indirectly (makes big train networks viable) but has no material hook.

## shulkerboxtooltip   [anchors: support/client QoL]
- LEAVE — client tooltip renderer only; no items, no loot, zero content surface.

## dataanchor   [anchors: support/library]
- LEAVE — developer data-attachment library; no player-facing content whatsoever.

## solmaiddream   [anchors: survival (1)]
- LEAVE — micro-addon (1 item: food_book); its mechanic is a stat-growth layer that *consumes* whatever foods the pack already feeds maids. No independent material to route; the connection is already implicit via every food mod in the pack. Forcing a recipe edge would be artificial.

## kleeslabs   [anchors: support/QoL]
- LEAVE — behavior-only (single-slab-break); no items, no blocks registered, no loot.

## balm   [anchors: support/library]
- LEAVE — multiloader abstraction API; no gameplay content. Dependency of BlayTheNinth mods; nothing to weave.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice (prestige seafood) | via: create:cutting or farmersdelight:cutting (existing) → demand-gate via MineColonies colony cafeteria request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies colony's kitchen can request rare seafood dishes from the coast specialist; inland colonies that can't fish create a standing demand the coast player fills.
- from: oceansdelight:guardian / oceansdelight:cut_tentacles (mob drop) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian flesh/tentacles are otherworldly deep-sea matter — a fitting arcane reagent; spirit-fire transmutation into an essence fits the monstrous-organic-to-magic pipeline established by M-02.
- from: oceansdelight dishes as "coastal luxury sellable" | via: bare numismatics | to: economy | motif: bare sell (M-09 retired) | verdict: REJECT | reason: dossier suggests M-09 twice; that motif is retired. The M-28 colony-demand link above captures the real demand-gating without an NPC sale.
- from: oceansdelight:guardian / tentacle → create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Mechanical Saw cutting raw guardian flesh into portions (like the existing FD butchery chains) ties the ocean-mob harvest into Create's cutting method and deepens the fish-processing chain.
- REWORK: dossier 2nd-anchor candidate cites M-09 and M-12 for economy — the M-09 references must be retired; M-12 (processing chain) is valid and accepted above. The M-12 candidate in the dossier is sound; the M-09 should be struck.

## naturescompass   [anchors: support/QoL]
- LEAVE — biome-locator tool only; produces no materials, has no loot. Its value to the pack is purely navigational (helps players find regional biomes for scarcity-driven resources), but that's ambient function, not a weave.

## createfood   [anchors: survival, Create (2)]
- OK — connections sound. Already anchors survival + Create via deep multi-stage Create-processing chains (milling/mixing/pressing/deploying + FD cooking). Two solid pillars confirmed.
- from: createfood finished dishes (high-effort processed goods) | via: MineColonies colony dining hall request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's tavern/dining-hall hut generates standing requests for bakery/deli items that only a Create-food specialist can fill at scale — the production chain earns its complexity by having a structural buyer.
- from: createfood dishes as "sellable luxury" (dossier suggestion) | via: bare numismatics | motif: bare sell (M-09 retired) | verdict: REJECT | reason: M-09 retired; the ambient sellability of high-effort food isn't a weave. M-28 colony-demand above captures the real demand anchor.
- from: createfood dish variety pool | via: solmaiddream / Spice-of-Life diet mechanic | to: survival | motif: M-26 (consumption sink — diet variety renews food demand) | power: everyday | tone: ok | verdict: ACCEPT | hook: the huge variety of Create Food dishes is the direct fuel for the diet-variety pressure; each dish class consumed unlocks the next SoL tier, making food production a repeating consumption loop rather than a one-time craft.
- REWORK: dossier 2nd-anchor candidate for "Spice of Life / Cold Sweat" is noted as "deepening, not a new pillar" — that's correct; it's a M-26 consumption-sink edge, not a 3rd anchor claim, which is fine per the motif.

## curios   [anchors: support/library]
- LEAVE — API framework providing accessory slots; no items, no loot, no material surface. Weave value is carried by the mods that use its slots (Ars Nouveau, Iron's Spellbooks), not by Curios itself.

## fogoverrides   [anchors: support/client QoL]
- LEAVE — client-side visual/fog config mod; no items, no loot, no content.

## create_jetpack   [anchors: Create, aeronautics (2)]
- OK — connections sound. Anchors Create (built from Create backtank + brass) and aeronautics (personal flight consuming compressed air). Two clean pillars.
- from: create_jetpack:netherite_jetpack (lava-traversal flagship) | via: boss-drop gate (loot-seed — Nether boss drop as required component) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Netherite tier's lava-traversal capability justifies a Nether boss key — a Blaze/Wither skull or Cataclysm-boss drop in the recipe makes the lava-jetpack a landmark progression reward, not a free brass+netherite craft.
- from: create_jetpack progression gate | via: MineColonies research unlock | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the brass jetpack recipe could require a flight-research unlock from a MineColonies engineer/mechanic hut — the knowledge (not a tradeable item) gates the capability, so you can't just buy it; you need the colony infrastructure first.
- REWORK: dossier notes "could be boss-drop/MineColonies-gated but that's a gating call, not a pillar" — both are accepted motifs (M-15, M-37) that do add survival/economy anchors. Worth elevating from a footnote to real candidates (done above).

## trashslot   [anchors: support/QoL]
- LEAVE — inventory UI trash slot; no items, no loot, no content surface.

## zeta   [anchors: support/library]
- LEAVE — modular framework library (Quark's backbone); no player-facing content.

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats grab-bags (rare hats) | via: loot-seed into boss/dungeon loot tables | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding rare grab-bags into boss chests and dungeon loot makes hat-hunting a side reward of the combat route — the combat specialist accidentally farms cosmetics that non-combatants want, feeding a small vanity trade.
- from: simplehats:custom_hatscraps (duplicate-recycling) | via: create:crushing (cosmetic scraps → dye/fluff material) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding unwanted hats into a Crushing Wheel yields hat-scraps + an XP nugget (M-04 deco-recycles-back-to-raw pattern) — a light Create tie that gives hats a material loop rather than pure void.
- from: rare hats as "sellable cosmetic" via numismatics | bare sell | motif: bare sell (M-09 retired) | verdict: REJECT | reason: M-09 retired. Vanity trade is emergent (players trade hats peer-to-peer without an NPC faucet). The M-34 loot-seed above captures the demand-side without a vendor sale.
- from: simplehats scraps | via: ars_nouveau:imbuement (arcane cosmetic upgrade) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — cosmetic scraps going through arcane infusion reads as forced; infusion is for reagents/power items, not flair. A hat gaining magic aura from an Ars ritual is whimsical but arbitrary.

## createaddoncompatibility   [anchors: support/compat (1)]
- LEAVE — pure tag/priority unification layer for Create addons; no items, no loot, no methods of its own. Its one tfmg:distillation recipe is already recorded. Weave value is carried by the mods it unifies (TFMG, pneumaticcraft, etc.).

## securitycraft   [anchors: support/utility (1)]
- from: securitycraft:sentry / high-tier locks (base defense) | via: create:mechanical_crafting — gate sentry assembly behind a Create Mechanical Crafting recipe using brass/electron tubes | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a sentry that auto-targets intruders is a mid-tier automated device — it belongs in the mechanical crafting tier alongside other automata; plain crafting-table assembly undersells its complexity.
- from: securitycraft reinforced blocks (block_reinforcing_recipe) | via: MineColonies stonemason/blacksmith route — some reinforcing tiers available cheaper/faster via colony hut | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony blacksmith produces bulk reinforced stone for base-hardening contracts; the manual reinforcing recipe stays, but the colony route makes large-scale fortress building a specialization.
- from: securitycraft keycard / scanner (access-control gear) | via: regional-scarcity gate — key materials for keycards are region-locked ores | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: if keycard circuits require a regional ore (e.g. platinum or galosphere palladium), access-control infrastructure becomes a traded good — only the region with the ore can produce the readers, so security gear flows through the economy.
- from: securitycraft security gear as "scarce metal sink → coin" | via: bare numismatics | motif: bare sell (M-09 retired) | verdict: REJECT | reason: M-09 retired; mere sellability isn't a weave. M-30 above captures the real demand-gating via regional scarcity.
- from: securitycraft gear via Create crushing | motif: M-05 (dossier suggests this) | verdict: ACCEPT above as mechanical_crafting | note: crushing is wrong angle — reinforcing is assembly not destruction; mechanical_crafting is the coherent form.
- REWORK: dossier lists securitycraft as "support (1)" — with M-05 (Create gate) + M-28 (colony route) + M-30 (scarcity gate) it can gain Create + economy anchors; the dossier undersells it.

== CHUNK COMPLETE ==
