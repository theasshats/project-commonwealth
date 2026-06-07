# Phase 2 candidates — chunk-05

## prickle   [anchors: support/library (1)]
- LEAVE — pure config-format library; zero items, zero blocks, zero recipe-types. Nothing to route; no coherent second anchor possible.

## alcohol_industry   [anchors: Create, survival (2)]
- REWORK: OK — connections sound. Create (mixing/filling inbound) and survival (drinkable buffs) are both genuine.
- from: bottled spirits (beer/vodka/whiskey/tequila) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Every consumable is trivially sellable; this adds no structural loop-closure.
- from: alcohol_base fluid (Create-mixed) | via: create:mixing → irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a distilled alcohol solvent feeds the alchemist's cauldron as a brewing base — the industrial distillery supplies the magic lab; two-system cross without forcing Create as tollgate.

## notenoughcrashes   [anchors: support (1)]
- LEAVE — pure crash-recovery UI utility; zero items, zero blocks. Nothing to weave.

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot-instancing mechanic; no items to route, no recipe surface. Its reskinned container blocks (lootr:trophy etc.) are internal and carry no join key. Support role is complete.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns structure loot (ocean-village chests) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: ocean-village chests seed a few Numismatics coins and a coastal trade bounty note — the floating villages are a reward stop on an Aeronautics sea route, closing exploration → economy.
- from: tidal-towns ocean-village loot | via: loot-seed (magic reagent drop) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare coastal flora or a kelp-wraith drop tucked into village loot gives early-game foragers a magic seed item, connecting sea exploration to the magic web.

## galosphere   [anchors: survival, magic via M-07 (2)]
- REWORK: OK — both anchors are sound. M-07 (allurite/lumiere as reserved attunement catalysts) is the established 2nd pillar.
- from: palladium ore / raw palladium | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore feeds the Create crushing chain for ore-doubling — a regional metal pulled into the tech spine exactly as designed; byproduct nugget follows standard M-03 pattern.
- from: galosphere deco bricks (allurite/amethyst/pink-salt) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: unwanted cave-biome brick surplus crushes back to powder/gravel — the crystalline cave's deco feeds the Create recycling loop.
- from: palladium ingot (Create-processed, scarce/regional) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is regional and scarce; Create-refined it mints into coins — a distinctive scarcity-gated distribution node, not generic sellability.

## companions   [anchors: survival (1)]
- from: Crystallized Blood / soul gems (Soul Furnace outputs) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's crystallised blood and soul gems are ritual-fire inputs in Occultism — the gothic-alchemical companion lab feeds the occult web; players taming companions and using their drops closes mob→magic loop.
- from: mob drops (rotten flesh, hostile essences) → Soul Furnace → Crystallized Blood | via: companions:soul_furnace → ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: mob drops that would rot in a chest get purified in the Soul Furnace and then imbued — organic combat output routed into two magic systems.
- from: Relic Gold / Old Cloth (Sacred Pontiff boss drops) | via: numismatics sell (boss-tier) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Boss drops being sellable is trivially true; no structural loop-closure.
- from: companions:tesla_coil_block / voltaic infrastructure | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — the Tesla electric set is thematically self-contained gothic-electric; crushing it back to copper is mechanical but the lore pairing feels arbitrary. Better to leave deco recycling to a wholesale deco sweep.

## formationsnether   [anchors: survival (1)]
- from: Formations Nether structure chests | via: loot-seed (magic reagents) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Nether reagents (nether-themed occultism ritual items, crimson essences, or wither-adjacent drops) into Formations Nether altars/sanctuary chests — exploring hostile Nether ruins yields magic catalysts, feeding survival→magic.
- from: Formations Nether structure chests | via: loot-seed (coin drop) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Seeding coins into loot tables is trivially applicable to any structure; the magic-reagent seed (above) is the distinctive link. One loot-seed ACCEPT is sufficient; two on the same mod dilutes both.

## trading_floor   [anchors: Create, economy (2)]
- REWORK: OK — connections are the mod's entire purpose. Create depot + automated economy is sound.
- (No additional anchors warranted — the mod is an explicit Create↔economy bridge; it needs no third anchor. Depth opportunity only: pair it with a Numismatics price config so automated villager emerald income mints to coins per M-08, but that is a config note, not a new edge.)

## lithium   [anchors: support/performance (1)]
- LEAVE — server-tick optimization with zero items, zero blocks, zero recipe-types. Nothing to weave; support role is complete.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: Trek structure chests (biome-keyed: jungle/ocean/savanna/taiga) | via: loot-seed (progression key or magic reagent) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: biome-appropriate drops (jungle ruin yields a rare fern reagent, ocean island yields sea-kelp magic catalyst) seeded into Trek chests — broad exploration content funnelling into the magic web, rewarding the player who travels for resources.
- from: Trek structure chests | via: loot-seed (Create component) | to: Create | motif: M-15 (loose) | power: mid | tone: ok | verdict: REJECT | reason: M-15 is boss-key unlock — gating a Create component behind a structure chest is weaker than the boss-key pattern and risks inflation; better handled as part of a general progression-reward sweep rather than a Trek-specific edge.

## cbc_at   [anchors: Create, aeronautics (2)]
- REWORK: OK — both anchors are genuine: Create-machined munitions + Aeronautics ship armament. No new pillar needed.
- from: heavy autocannon/rocket-pod tier | via: KubeJS gate (boss drop as input) | to: Create/progression | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful autocannon barrel requires a boss-drop component (e.g. a Cataclysm-boss metallic relic) in its recipe — endgame firepower locked behind world-boss progression, not just crafting depth.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — cross-platform utility/API library; zero items, zero blocks, zero recipe-types. Nothing to route.

## curios   [anchors: support/library (1)]
- LEAVE — equipment-slot framework API; no items or blocks of its own. Quietly underpins magic gear slots (Ars/Iron's accessories) but that is infrastructure, not a weaveable edge.

## jade   [anchors: support/client UI (1)]
- LEAVE — informational HUD overlay; no items, no recipe surface. Support role is complete.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- REWORK: OK — lazy kinetics infrastructure (Create) and Stock Keeper / train seats (aeronautics logistics arm) are sound.
- (No new pillar needed — already at 2. Flexible shafts + seats are core infrastructure for both; leave.)

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: ~600 blocks makes a wholesale crush pass very low-value maintenance overhead; the dossier flags this correctly as WEAK. Recycle is best handled in a pack-wide deco sweep that tags stone-type roofs collectively, not as a mcwroofs-specific edge. Leave until that sweep.
- LEAVE — decoration palette; sanctioned support anchor. One weak M-04 candidate exists (noted above) but deferred to wholesale deco sweep.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — single utility item (biome locator); no material outputs, no recipe surface. Support role is complete. (Pairs well with regional-scarcity worldgen conceptually but adds no weaveable edge itself.)

## samurai_dynasty   [anchors: survival (1)]
- from: jade / ruby / onyx / aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Samurai Dynasty's coloured gemstone ores crush for ore-doubling in the Create web — exotic Japanese-themed minerals entering the same processing spine as iron and copper; scarcity pressure drives trade.
- from: samurai_dynasty steel (c:ingots/steel) | via: create:crushing (scrap) or create:mixing (alloying) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: steel ingots unify into the Create metal web via c:ingots/steel; crushing the ore doubles yield — feudal-Japan steel folded into industrial production.
- from: Yokai drops (akaname_tongue, Oni/Tengu/Kitsune reagents) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are supernatural creatures — their drops transmuting into occult reagents or arcane essences through spirit fire is precisely coherent; feudal-Japan folklore and Occultism's spirit-world sit in adjacent design space.
- from: samurai_dynasty weapon upgrade mechanic (Yokai-kill-gated) | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew (requires magic catalyst) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: upgrading a katana by absorbing Yokai abilities could require an arcane infusion step (magic catalyst as ingredient) — marrying the native kill-gate with the magic pillar, so swordplay and magic advancement are co-dependent at endgame.
- ⚠ silver c:tag caveat: samurai_dynasty tags own silver as c:* silver — must NOT unify with galosphere silver (= palladium). almostunified priority_override must keep samurai_dynasty silver isolated or unify only with occultism silver, never galosphere. Flag for DECISIONS.md.

## almostunified   [anchors: support/infrastructure (1)]
- LEAVE — recipe-graph unifier; no items, no recipe-types. It IS the connectivity infrastructure, not a content node to weave. Support role is complete and load-bearing.
- ⚠ Carry-forward warning: galosphere:*silver* must NEVER unify as c:ingots/silver (it is palladium); samurai_dynasty silver must be audited against occultism silver before any unification pass.

== CHUNK COMPLETE ==
