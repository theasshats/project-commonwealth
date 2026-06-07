# Phase 2 candidates — chunk-08

## towntalk   [anchors: support/MineColonies-immersion (1)]
- LEAVE — zero content surface (no items, no blocks, no loot, no recipe methods). Pure audio flavor layer that rides MineColonies; the colony weave belongs to minecolonies, not here. No independent edge is possible.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the cave-spider's fang burns away in occultism spirit-fire, yielding a minor spirit essence — dungeon-diving pays a magic toll
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire) is the cleaner primary route; imbuement is better reserved for rarer/higher-tier boss drops so as not to overload the apparatus with low-tier mob drops — keep only one route
- from: undergroundworlds:temple_bricks / pyramid_bricks / ice_bricks (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: dungeon-cleared bricks go into the crusher for gravel + XP nugget — deco stone pays a small Create dividend; lossy so no arbitrage
- from: undergroundworlds:desert_charm / antidote_flask (immunity accessories) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: these items are self-contained immunity tools with strong functional identity; routing them as magic infusion inputs strips their vibe and adds arbitrage — no player would find it obvious
- REWORK: existing survival anchor is sound. No existing cross-system connections to flag.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structure chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare Trek ruins yield a handful of minted Numismatics coins as buried treasure — exploration becomes an early currency source, fuelling the player economy before specialization kicks in (via: loot-seed into trek's structure loot tables)
- from: trek structure chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon chests in fortresses / pyramids seed a rare magic reagent (ars source gem or occultism spirit fragment) — exploration unlocks a head-start on the magic route (via: loot-seed)
- from: trek structure chest loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 boss-key is designed around boss drops specifically (a difficulty gate); trek structures are low-mid exploration find, not a boss encounter — seeding a Create machine keystone here would trivialize the boss-unlock design. The M-02 reagent loot-seed covers the progression hook at appropriate power.
- REWORK: survival-only anchor is the floor; loot-seed proposals above add the economy + magic 2nd anchor without forcing any recipe edge.

## followersteleporttoo   [anchors: support QoL (1)]
- LEAVE — behavior-only QoL with zero content surface (no items, no loot, no recipe methods). Teleport-pet convenience; nothing to route through any method.

## edf-remastered-5.0-beta4   [anchors: survival endgame-boss (1)]
- LEAVE — pure behavior datapack, zero items, does not touch the dragon's drop table. The dossier confirms no rewards are added. A loot-seed could be applied to the dragon's *vanilla* loot table elsewhere, but that belongs to a dragon-progression mod, not here. No content surface to weave.

## mousetweaks   [anchors: support QoL (1)]
- LEAVE — client input-handling tweak; zero content, no items, no loot, no recipe types. Pure support role.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot (boss-drop metals) | via: create:pressing → create:sequenced_assembly | to: create | motif: M-15 + M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: killing the Netherite Monstrosity / Ignis unlocks their signature metals, which the Mechanical Press turns into sheets — only then can the highest-tier Create machine components be crafted; combat-spec supplies tech-spec
- from: cataclysm:ancient_metal_ingot | via: create:crushing | to: create | motif: M-03 | power: endgame | tone: ok | verdict: REJECT | reason: crushing an ingot for ore-doubling (M-03) is a reward path for ores, not refined boss metals — it devalues the boss-drop economy and contradicts the "depth through more steps" cost model; pressing into sheets (M-15/M-06 above) is the correct endgame step
- from: cataclysm:cursium_ingot / void_core (occult-flavored boss drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Core and Cursium carry a distinctly occult vibe — spirit-fire transmutes them into a high-tier occultism spirit essence, giving the magic specialist a reason to fund a cataclysm raid
- from: cataclysm:witherite_ingot (Witherite = wither-material) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: Witherite is already the crafting input for cataclysm's own Mechanical Fusion Anvil (weapon_fusion method); pulling it into ars imbuement creates a competing demand path that would fragment its scarcity value — one primary magic route (M-11 spirit_fire above) is enough
- from: cataclysm boss drops (witherite_ingot, ancient_metal_ingot) | via: emergent player trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: combat specialists farm cataclysm bosses and trade the scarce metals to tech/magic players who need them but can't afford the downtime — the supply side of the boss-dual-role loop
- from: cataclysm:azure_seastone_bricks / deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: seastone/blackstone deco salvages back to raw + XP nugget — building with Cataclysm aesthetic doesn't strand materials outside the Create web; lossy, no arbitrage
- REWORK: existing connections — currently 1-anchor (survival only). Proposals above add create + magic + economy edges; connections are not yet authored so no existing weave needs flagging.

## numismatics   [anchors: economy, create (2)]
- OK — connections sound. Numismatics is the hub other mods weave TO (M-08 player-minted currency); its economy + Create anchors are correct. No outgoing weave needed; adding one would invert the loop direction. The dossier's "leave as destination" call is correct.

## kambrik   [anchors: library/API support (1)]
- LEAVE — pure Kotlin dev library. Zero content, no items, no loot, no recipe methods. Support role; nothing to route.

## citadel   [anchors: support library (1)]
- LEAVE — pure animation/spawn library (sbom_xela / Alex's Mobs). The 5 items in the jar are debug/tooling only (citadel:debug, citadel:effect_item, citadel:fancy_item, citadel:icon_item); citadel:lectern is a dev block. No survival-content surface. loot=yes but that is the debug loot entry, not a player-facing drop. Nothing to weave.

## staaaaaaaaaaaack   [anchors: support QoL/perf (1)]
- LEAVE — drop-merge behavior mod; zero items, no loot, no recipe methods. Support perf role; nothing to route.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-only fishing tweak (no items, no loot of its own). Weaving belongs to the fish-content mods it sits beneath (createfisheryindustry, farmersdelight). Nothing here to route.

## dtterralith   [anchors: survival worldgen-compat (1)]
- from: dtterralith:jacaranda_seed / maple_seed / cedar_seed / kapok_seed (Terralith-specific species seeds) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: seeds are basic everyday wood-economy items; gating them behind arcane infusion violates the "never gate a basic/everyday component behind a complex recipe" guardrail
- from: dtterralith species seeds (amethyst_seed, giga_spruce_seed, etc.) | via: dynamictrees:seed_conversion → create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the seed_conversion recipe is a vanilla sapling-swap, and milling seeds for sawdust/fiber is an existing everyday wood-chain — dtterralith adds no new material type here; this is weaving the parent mods (dynamictrees, create), not dtterralith specifically. Forced edge; LEAVE.
- LEAVE — worldgen compat bridge; its log/seed output enters the vanilla wood economy already served by Create/farmersdelight methods upstream. No bespoke dtterralith material warrants its own weave.

## kleeslabs   [anchors: support QoL (1)]
- LEAVE — single-slab-break behavior QoL. Zero content; nothing to route.

## entity_texture_features   [anchors: support client-rendering (1)]
- LEAVE — client texture-feature engine (OptiFine random/emissive textures). Zero content, zero loot, zero recipe methods. Support role; nothing to weave.

## appleseed   [anchors: survival (1)]
- from: appleseed diet-variety demand signal | via: config/tuning (demand driver, not a recipe) | to: create | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: balanced-diet buffs require diverse food groups, creating permanent recurring demand for varied crops and cooked meals — that demand pulls on Create-automated farming and Farmer's Delight cooking chains; the diet mechanic IS the consumption sink that closes the food-production loop
- from: appleseed diet-variety demand signal | via: emergent trade | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: while food trade is a natural downstream consequence, the economy link is the *ambient* endpoint ("everyone needs food"); the real weave is the demand pulling on production (accepted above), not a direct economy link — REJECT per player-run-economy rules (bare sell link)
- from: appleseed diet-variety demand signal | via: numismatics vendor | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: because a balanced diet requires multiple food groups, a cook/farmer specialist selling high-nutrition multi-group dishes (e.g. a Farmer's Delight feast) to non-cooks is a cross-route dependency — the diet system turns food into a trade good with a clear demand-side reason; delivery via numismatics vendor pricing on curated multi-group recipes
- REWORK: survival-only anchor is the floor. The two ACCEPTs above add a create + economy second anchor. No existing authored connections to audit.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — server-side railway threading optimization. Zero content, no items, no loot. Pure performance support role; nothing to weave.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo's claw — a cryptid beast part — goes into the spirit fire and yields an occultism essence; folkloric creature drops fuel the occult spine naturally
- from: brazil_legends:big_tongue (Headless Mule / Cuca drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a monstrous tongue steeped in an ars imbuement altar becomes a raw source-charged reagent — the creature's supernatural origins make the pairing feel earned
- from: brazil_legends:amber_shard / amber_pearl | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: amber_shard/pearl are exotic creature-drop items, not deco stone blocks; M-04 is for metal/stone deco, not organic drops — tone clash, forced. The M-11/M-02 reagent routes are the correct sink.
- from: brazil_legends:amber_shard | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the amber shard is a scarce folkloric drop obtained only by hunting brazil_legends mobs — a combat specialist farms and trades it to the magic player who needs it as a reagent; M-34 combat-route supply
- from: brazil_legends:bottle_with_saci (captured Saci spirit, a mischievous folklore entity) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: already accepting capelobo_claw via spirit_fire for M-11; adding a second spirit_fire accept for the same mod risks overloading spirit_fire and dilutes scarcity — keep one primary spirit_fire sink per mod; the big_tongue imbuement (M-02) covers the second magic link
- REWORK: existing single-anchor. Proposals above add magic + economy; connections are not yet authored.

## aeronauticscompat   [anchors: aeronautics support (1)]
- LEAVE — compat patcher (mixin/runtime patches); zero items, zero loot, zero recipe methods. Required pack infrastructure (CLAUDE.md: keep it in); no content to weave. Support role, nothing to route.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion (a consumable special item for tree manipulation) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the dendro_potion is a player-utility item for controlling tree growth, not a raw material; routing it through magic infusion makes it cost arcane energy to obtain the tree tool — that's a gatekeeping inversion (a survival utility gated behind magic), which introduces a mandatory cross-dependency for routine forestry. Reject: depth should come on the magic side, not on the forestry tool.
- from: dynamictrees log / branch drops (ordinary logs, vanilla item economy) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:milling of logs is a vanilla-log processing step that belongs to Create's own recipe set, not to dynamictrees — dynamictrees is the source, not the weave target; the downstream create methods already handle this. No bespoke DT edge warranted.
- LEAVE — living-forest world flavor; its log/sapling outputs are already in the vanilla wood economy that Create/farmersdelight/cooking mods process downstream. Forcing a DT-specific weave would be a dossier-confirmed contrived edge (DT trees are awkward for Create harvesters). The dossier's own LEAVE call stands.

== CHUNK COMPLETE ==
