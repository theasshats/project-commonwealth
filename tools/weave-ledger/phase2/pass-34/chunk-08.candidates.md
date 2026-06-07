# Phase 2 candidates — chunk-08

## irons_lib   [anchors: library/API (1)]
- LEAVE — pure code library (transmog table + player statue are cosmetic blocks with no routable material; no recipe-types; nothing to route through any method). Support dependency for Iron's Spellbooks; no weave surface.

---

## mutantszombies   [anchors: survival (1)]
- LEAVE — zero item drops, zero loot tables (loot=no), zero blocks; only spawn eggs. 7 biome-modifier spawns increase night threat (survival pressure), but there is no drop material to give any method a feed. Forcing an edge would be the explicit failure mode called out in the briefing.

---

## create_dragons_plus   [anchors: Create (1)]
REWORK: existing dossier notes "none — support role (library/QoL for the Create add-on family)" and recommends LEAVE. That's correct — its `ending`/`freezing` fan-methods are weave *targets* other mods route through, not edges this mod needs to own. However there is one non-library content surface worth testing:

- from: create_dragons_plus:dragon_breath fluid (Bulk Ending catalyst) | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 requires create:haunting (soul-fire transmutation) — dragon breath is NOT soul fire; routing dragon breath through the hauning station is a category error. The mod's Bulk Ending already IS the dragon-breath method; there's nothing to weave *into* another method.
- from: create_dragons_plus:fan_ending station (bulk ending) | via: loot-seed — seed ender/magic drop in chest near dragon-breath catalyst in loot tables | to: magic | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: this mod ships no structures and loot=yes is for its loot-table *items*, not structures; there's no chest to seed. No motif fits.
- LEAVE — Create spine support library; the `ending`/`freezing` methods are weave targets for OTHER mods (they route through this mod's methods). No 2nd anchor needed here; the value flows the other direction.

---

## alexsmobs   [anchors: survival (1)]
2nd-anchor candidates:

- from: alexsmobs:ambergris (whale drop, exotic reagent) | via: occultism:spirit_fire | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris has a long alchemical/perfume history — feeding it to spirit fire as a catalyst for a ritual component is immediately legible.
- from: alexsmobs:ender_residue (void worm/end-mob drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 / M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue already reads as arcane matter; imbueing a source gem or arcane essence with it to produce an end-attuned reagent is thematically clean.
- from: alexsmobs:bear_dust (drop) | via: create:mixing | to: Create | motif: M-02 / M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear dust as an organic abrasive mixed with water → crude lubricant or bone-powder intermediate that feeds a Create polishing step; everyday, one light step.
- from: alexsmobs:void_worm (boss-tier) drop | via: boss-key (native gating) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is clearly a boss-tier mob; its signature drop as the unlock for a deep Create recipe (e.g. a high-tier motor or lens) fits the boss-key pattern exactly.
- from: alexsmobs rare drops (ambergris, soul drops) | via: numismatics player-mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare sell-link — "rare drop therefore coin" is the ambient endpoint (M-09 retired). The ACCEPT entries above already gate demand properly via magic/Create recipes; adding a raw mint link on top would be a no-motif economy edge.
- from: alexsmobs mob drops (general) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: clash | verdict: REJECT | reason: M-03 is ore-doubling via crushing; applying it to organic mob drops is a category mismatch. The correct method is create:mixing (M-12) as accepted above, not crushing.
OK — the 4 accepted connections (2× magic, 1× Create processing, 1× Create boss-key) give alexsmobs solid survival↔magic and survival↔Create weaves.

---

## t_and_t   [anchors: survival (1)]
2nd-anchor candidates:

- from: t_and_t structure loot tables (fort chests, sail-ship cargo hold, village traders) | via: loot-seed — seed Numismatics coin denomination(s) into conquerable fort/ship loot | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a looted fort or captured ship yielding a handful of player-minted coin is exactly how the economy gets seeded in the world; players discovering coins in the wild bootstraps the currency layer without an NPC faucet — the coins were minted by whoever built the fort (lore).
- from: t_and_t structure loot tables (village chests, outpost caches) | via: loot-seed — seed a Create part (andesite casing, shaft) or magic reagent (source gem shard) as a reward for clearing the structure | to: Create / magic | motif: M-15 (boss-key variant for structures) | power: everyday | tone: ok | verdict: ACCEPT | hook: finding a Create component or an Ars reagent in a cleared outpost cache rewards exploration and cross-pollinates the production systems; gives exploration a direct role in the production loop.
- from: t_and_t village variant buildings (16 biome-specific layouts) | via: config tie — designate t_and_t village variants as regional economy hubs with Trading Floor stall blocks seeded in them | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a biome-themed village is the natural place for a player to set up a trade stall; seeding one Trading Floor stall slot into village structures makes settlements organic economy nodes without forcing NPC coin faucets.
- from: t_and_t sail ships / forts as player bases | via: worldgen/spawn — ships and forts are conquerable; a conquered fort becomes a colony footprint node | to: economy (MineColonies adjacency) | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: M-28 requires MineColonies huts/research. t_and_t doesn't register colony buildings; "conquerable fort → colony" is a player-play behavior, not a recipe/method edge. No delivery mechanism; cannot be authored.
REWORK: dossier candidate "economy via villagers/Numismatics — M-09 luxury-good→coin" must be retired (M-09 retired). The accepted loot-seed + stall entries above replace it with demand-gating economy links.

---

## create_better_villagers   [anchors: Create, economy (2)]
Existing anchors assessed:
- Create: villager professions tied to Create workstations → supplies Create parts via trade. Solid.
- Economy: emerald-denominated trades tie into vanilla trade economy. This is the weaker link because vanilla emeralds ≠ the pack's player-run Numismatics economy.

REWORK: the "economy" anchor currently rides vanilla emerald trades, which is an NPC-denominated faucet pattern. Under the player-run ruling (M-09 retired, M-14/M-21 cut), this is NOT a genuine economy link — it's an NPC trade unchanged from vanilla. The anchor should either be re-earned via a Numismatics-denomination KubeJS re-skin (so the trades pay/accept Numismatics coin, making the villager a player-economy participant) or the economy anchor should be dropped and the mod treated as single-anchor Create support.

- from: create_better_villagers villager trades (Andesite/Brass/Copper/Miner) | via: config/KubeJS — re-denominate trades to accept/pay Numismatics coin instead of emeralds | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: when Create-parts villagers trade in pack coin rather than emeralds, they become a live node in the player economy — players need coin to buy parts, and miners pay coin for raw materials, creating a coin circulation demand.
- from: create_better_villagers Miner villager (buys raw andesite/copper/brass) | via: M-29 cross-route — the miner's *buy list* creates a demand cross-route: a player who mines sells to the miner, who sells parts to a Create player | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: M-29 is a recipe cross-dependency (mod A's recipe requires mod B's ingredient). The miner's buy/sell is an emergent play behavior, not a KubeJS-authorable recipe edge. No delivery mechanism; this is already the ambient player-economy endpoint.
OK (after rework) — coin-denomination fix converts the economy anchor from an NPC-vanilla faucet into a genuine M-08 player-minted-currency link.

---

## entity_model_features   [anchors: support/client rendering (1)]
- LEAVE — client rendering engine (OptiFine CEM replacer); zero items/blocks, zero gameplay content, zero loot. No weave surface exists.

---

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — crash-recovery UI utility; zero items/blocks, zero loot, no gameplay surface. Sanctioned support role; no weave needed or possible.

---

## betteranimationscollection   [anchors: support/client visual (1)]
- LEAVE — client-only mob animation replacer; zero items/blocks, zero loot, no gameplay surface. Sanctioned support role.

---

## create_mobile_packages   [anchors: Create, aeronautics (2)]
Existing anchors assessed:
- Create: builds on Create's Logistics/Package system — solid.
- Aeronautics: Robo Bees are airborne couriers, making this the drone logistics arm of the economy. Solid.

- from: create_mobile_packages:robo_bee (drone courier entity) | via: create:mechanical_crafting | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is for multi-stage sequenced-assembly keystones (endgame). A robo_bee is mid-tier infrastructure, not an endgame flaghship; M-06 depth would be disproportionate. The existing Create anchor already covers crafting the bee port.
- from: create_mobile_packages delivery network (carries goods between players) | via: logistics demand gate | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk goods (heavy ore, fluid tanks, colony supplies) that exceed what a player can carry require the drone network to move at scale — the logistics arm earns its economy role by being the *only* practical bulk-delivery method. Delivery is the method; no recipe authoring required, it's a design-intent declaration.
- from: create_mobile_packages:portable_stock_ticker (remote order/craft terminal) | via: no new recipe needed — design tie: make certain bulk colony-supply orders only fulfillable via the logistics network | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: M-29 requires a recipe that cross-depends on another mod's ingredient — the stock ticker doesn't have a recipe that demands a foreign input. The *use* of the ticker in the player economy is emergent, not authorable as a KubeJS cross-dependency.
OK — M-31 accept adds an economy anchor, giving the mod Create + aeronautics + economy (3 systems represented). The existing 2-anchor is sound; the new link deepens the logistics-arm role.

---

## naturalist   [anchors: survival (1)]
2nd-anchor candidates:

- from: naturalist:venison / naturalist:bushmeat (food drops) | via: farmersdelight:cooking or create:mixing (M-12 processing chain) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing raw game meat through Farmer's Delight cooking (already in pack) or a Create automated cooking step produces finished dishes that feed the diet-variety demand loop — survival pressure → Create automation. One light step; everyday power.
- from: naturalist:antler (drop) | via: occultism:spirit_fire | to: magic | motif: M-02 / M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: antler is a keratin/bone-analog reagent; spirit-fire transmuting it into an occult bone essence is thematically grounded (bone magic, stag symbolism) and gives the mob a non-food use.
- from: naturalist:glow_goop (firefly drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 / M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: bioluminescent goop as an infusion catalyst for a light-aspected Ars spell component is immediately sensible; firefly drops enabling light-magic upgrades is the kind of pairing players nod at.
- from: naturalist:shellstone / froglass deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (Create recycles deco) is a lossy crush-back to raw/gravel + XP nugget. Valid motif but shellstone and froglass are not metal/stone deco in the M-04 sense (they're organic/biological blocks). Crushing them back to gravel adds no real system value and the tone is weak — a player who worked to collect shellstone wouldn't crush it. REJECT on tone.
- from: naturalist meat drops | via: numismatics sale | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: bare sell-link (M-09 retired). "Meat is sellable" is the ambient endpoint; the demand is already captured by the farming/cooking chain in M-12.

---

## mru   [anchors: support/library (1)]
- LEAVE — pure code-sharing library for itsmineblock11's mods; zero items/blocks, zero loot. No player-facing surface.

---

## cold_sweat   [anchors: survival (1)]
2nd-anchor candidates:

- from: cold_sweat:hearth (climate-control multiblock, fuel-burning) | via: create:filling + native-method gating — gate the Hearth's higher-tier "super-hearth" upgrade or its brass smokestack component on Create brass casing/pipe output | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a Nether-unlocked machine that radiates warmth to a base; gating its upgrade (brass smokestack fittings) on Create-fabricated brass makes the climate-control layer depend on the tech spine — survival needs Create to be properly warm.
- from: cold_sweat insulation materials (cold_sweat:chameleon_molt, cold_sweat:goat_fur) | via: create:mixing — mix fur/pelt with tallow or wax → insulating compound that also feeds a Create-chain | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mixing organic insulators with a Create station to produce a refined insulation paste (usable in both sewing-table armor and as a heat-seal on boiler components) ties the survival-material loop to Create processing. One light step for everyday-tier furs.
- from: cold_sweat temperature range — winter/cold biomes | via: seasonal reagent gate (Serene Seasons config tie) | to: survival (2nd face) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: cold_sweat temp pressure peaks in Serene Seasons winter; linking cold_sweat's danger-zone temps to seasonal calendar means winter is the prod of the production loop — players prepare in autumn, the pressure kicks in at solstice. This is a config tie (cold_sweat + Serene Seasons integration), not a new recipe.
- from: cold_sweat:goat_fur / chameleon_molt insulating armor | via: no new recipe — existing sewing-table route | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: M-34 is combat-supply (boss drops traded to non-combat players). Insulating armor is not a boss drop — it comes from passive mobs (goats, chameleons). The link to economy would be bare sell (M-09 retired). REJECT.
OK — 3 accepted candidates: survival×Create via M-05 (Hearth gating), survival×Create via M-12 (insulation processing), survival×survival/scarcity via M-16 (seasonal pressure). Gives cold_sweat solid 2nd anchors.

---

## create_central_kitchen   [anchors: Create, survival (2)]
Existing anchors assessed — both solid:
- Create: automates cooking blocks via Packager/Mechanical Arm; Blaze Stove speeds cooking; sequenced-assembly sandwiches/burgers. Established.
- Survival: routes FarmersDelight/ExtraDelight food production through Create — bridges food system to tech spine.

- from: create_central_kitchen automated feast output (finished dishes, sauces, drinks) | via: numismatics | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-automated kitchen produces dishes at scale — those dishes are *consumed* against diet-variety pressure (Cold Sweat, Diet mod), meaning production demand never zeroes out. The consumption (M-26) is the food itself being eaten; the automated kitchen is the supply node that must keep pace. This is M-26 (consumption sink) not a bare sell link — demand is diet pressure.
- from: create_central_kitchen dishes | via: numismatics sell-to-player | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired). The accepted M-26 entry above captures the correct demand-gating form; a raw sell edge on top adds nothing.
OK — connections sound on the existing 2-anchor; M-26 deepens the loop by making the kitchen's output a consumption target, not just a production endpoint.

---

## durabilitytooltip   [anchors: support/UI (1)]
- LEAVE — client-only numeric durability tooltip overlay; zero items/blocks, zero loot. Pure QoL UI; no weave surface.

---

## sound_physics_remastered   [anchors: support/client immersion (1)]
- LEAVE — client audio processing (reverb/occlusion); zero items/blocks, zero loot. Pure immersion support; no weave surface.

---

## detect-afk-1.2.2   [anchors: support/QoL (1)]
- LEAVE — server-side AFK detection behavioral mod; zero items/blocks, zero loot. Admin utility; no weave surface.

---

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter for NeoForge; zero items/blocks, no gameplay surface whatsoever. Required dependency for Kotlin mods; no weave possible.

---

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config serialization/GUI API; zero items/blocks, no gameplay surface. Required dependency for fzzyhmstrs mods; no weave possible.

---

## accessories   [anchors: support/library (1)]
- LEAVE — accessory-slot API (modern Curios replacement); zero items/blocks of its own. Gameplay weaves live in the mods that register wearables into its slots, not here.

---

== CHUNK COMPLETE ==
