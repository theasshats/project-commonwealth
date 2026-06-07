# Phase 2 candidates — chunk-09 (context-fed)

## terrablender   [anchors: support (1)]
LEAVE — pure worldgen API library; 0 items/blocks/methods; no material surface to route.

## jamlib   [anchors: support (1)]
LEAVE — pure code library (JSON5 config + platform helpers); 0 items/blocks/methods; nothing to route.

## moogs_structures   [anchors: support (1)]
LEAVE — pure structure-framework library; 0 items/blocks/loot; nothing to weave.

## do_a_barrel_roll   [anchors: support (1)]
LEAVE — client elytra-flight camera tweak; no items, blocks, or methods; nothing to route.

## ding   [anchors: support (1)]
LEAVE — client audio-cue on load; no items/blocks/methods; nothing to route.

## rightclickharvest   [anchors: support (1)]
LEAVE — interaction-behavior QoL (right-click harvest); no items/blocks/methods.

## sounds   [anchors: support (1)]
LEAVE — client SFX-overhaul; no items/blocks/methods.

## bigsignwriter   [anchors: support (1)]
LEAVE — client sign-GUI utility; no items/blocks/methods.

## necronomicon   [anchors: support (1)]
LEAVE — pure code library (config/datagen helpers); 0 items/blocks/methods.

## corgilib   [anchors: support (1)]
LEAVE — pure code library (loot/worldgen/datagen helpers); 0 items/blocks/methods.

## naturescompass   [anchors: support (1)]

Existing rows: M-05 gate-via-Create REJECT (majority correct); M-30 recipe-requires-regional-ore ACCEPT (2, but weakly framed as bare utility labelling).

- CHALLENGE | from: naturescompass:naturescompass (bare "biome compass helps find regional ore biomes") | via: recipe (vanilla, no change) | to: economy | motif: M-30 | verdict: REJECT | hook: the accepted M-30 rows label an existing tool "useful near regional scarcity" without routing any region-locked material through its crafting — M-30 requires the good's key input to be region-locked in its recipe, not merely useful for finding regions.
- NEW | from: naturescompass:naturescompass | via: recipe (add one GTMOGS region-specific ore/gem — e.g. a biome-restricted mineral shard — as a crafting input alongside vanilla compass materials) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the biome-finder is shaped by the scarcity it navigates — crafting a compass requires a fragment of the very ore-type whose biome you want to find, so the tool that maps regional scarcity is itself a product of it.

## beachparty   [anchors: survival (1)]

Existing rows cover: coconut→Create milling/juicing (M-12, ACCEPT majority); cocktails→consumption sink (M-26, ACCEPT majority); palm biome regional scarcity (M-30, ACCEPT); Palm Bar as player service (M-33, ACCEPT); summer-gated melon cocktail (M-16, ACCEPT 1); cocktail maturation via vinery/vat (M-35, ACCEPT 1/REJECT 1). Palm wood M-04/M-12 REJECT (correct). Mini-fridge ice REJECT (correct).

Existing rows already cover two anchors (survival + Create/economy via M-12/M-30/M-33). What's missing is a logistics angle and a cleaner maturation framing:

- NEW | from: beachparty cocktails (coconut_cocktail / honey_cocktail / melon_cocktail — finished buff drinks, liquid form) | via: create:filling (fill Create casks/barrels for bulk distribution) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: casks of cocktail bulk-filled on a contraption ride the cardboard-plane courier to inland buyers — the beach bar's output needs logistics to reach non-coastal players, giving the aeronautics arm a concrete low-tier cargo.
- NEW | from: beachparty:coconut_open (raw tropical fruit, harvested from beach biome palms) | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling (ferment coconut water / tropical juice into a fermented base before palm_bar_mixing premium recipes) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a premium tier of cocktail requires a fermented tropical base the plain coconut doesn't provide — beach specialist needs the brewer's maturation step, so bar and winery specialize against each other.
- CHALLENGE | from: beachparty:message_in_a_bottle | via: loot-seed (coin/scroll inside) | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 requires scarce-metal → Create-processed → player-pressed coin; a flavor-float item seeding coin is arbitrary and breaks the player-minting rationale — the existing REJECT is correct.

## modonomicon   [anchors: support (1)]

Existing rows: all REJECT except one ACCEPT (M-37 book as MineColonies research-unlock ingredient). Majority correctly finds it documentation with no recipe surface.

- CHALLENGE | from: modonomicon:modonomicon (book item as a crafted research-unlock ingredient) | via: recipe | to: economy | motif: M-37 | verdict: REJECT | hook: M-37 is a research/knowledge gate — the motif's mechanic is that a recipe is unlocked by MineColonies research or Ars spell-knowledge, not that a guidebook item is a physical crafting ingredient. Forcing the book object into a recipe makes documentation an arbitrary reagent, which misapplies the motif. Correct disposition is LEAVE.

## createfood   [anchors: survival, Create (2)]

Existing rows cover: M-16 seasonal crop gate (ACCEPT ×12); M-28 colony cook demand (ACCEPT ×9); M-26 consumption sink (ACCEPT ×6); M-29 cross-route Ars+food (ACCEPT ×2); M-35 maturation (ACCEPT ×1); M-12 processing chain (ACCEPT). REJECT: M-10 food-as-magic (correct), bare M-09 (correct).

- NEW | from: createfood finished dishes (apple_cheesecake, bacon_pizza, complex pies — multi-step Create outputs) | via: create:filling (bulk-fill casks/barrels with food for ship provisioning) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: an aeronautics ship on a long run needs provisioned food in its hold — the kitchen fills casks and the courier ships them; the cook's chain and the logistics arm depend on each other.
- CHALLENGE | from: createfood:apple_jam_block / jam concentrates | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: apple jam is everyday food output, not an endgame arcane reagent; M-10's own rule is "do not gate basic components behind infusion"; the tonal jump from bakery to arcane has no thematic grounding. The broader M-10 REJECT consensus on food is correct — leave.
- NEW | from: createfood:apple_milkshake / hot_chocolate (warm drink finished goods) | via: Cold Sweat config warmth-food bonus | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | hook: no numbered motif covers a config-temperature-food link; the warmth effect would be emergent behavior, not a recipe weave. Flag for Gate-0 if a thermal-food motif is ever added.

## create_central_kitchen   [anchors: Create, survival (2)]

Existing rows cover: M-26 consumption feasts (ACCEPT ×4); M-28 colony cook/restaurant demand (ACCEPT ×4); M-16 seasonal pumpkin pie (ACCEPT ×1); M-34 Blaze Stove combat-supply (ACCEPT ×1); M-30 Blaze Stove regional scarcity (ACCEPT ×1); M-06 sequenced-assembly (ACCEPT ×2); M-29 cross-route dependency (ACCEPT ×1). Correctly REJECTs: magic-imbuement (M-10/M-11), Blaze→haunting (M-19 misfit), aeronautics-room framing (no motif).

The contested row is the blaze-stove M-12 pie-sauce→bait-trap (ACCEPT 3, but one good REJECT noting "contrived"). The M-06 sequenced-assembly and M-28 colony row are the cleanest existing signals.

What's missing: the aeronautics provisioning angle (M-31) for the automated kitchen as a ship galley, and a cleaner M-37 framing for the Blaze Stove.

- NEW | from: create_central_kitchen automated feast output (finished dishes via Blaze Stove-accelerated cooking) | via: create:filling (fill aeronautics ship food lockers for crew provisioning at scale) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial galley that can fill a ship's food stores by contraption is the kitchen that earns its spot on the flagship aeronautics build; the Blaze Stove's throughput advantage is what makes it worth building a cook-ship at all.
- CHALLENGE | from: create_central_kitchen sauce/drink fluids → createfisheryindustry:bait_trap (kitchen sauce as fishing bait) | via: createfisheryindustry:bait_trap | to: survival | motif: M-12 | verdict: REJECT | hook: the existing ACCEPT ×3 is overturned by the logic: bait_trap is for natural baits (fish, worms), not processed sauces; routing a culinary fluid into a fishing trap is thematically forced and has no precedent in either mod's design intent. The one existing REJECT ("contrived") is correct.
- NEW | from: create_central_kitchen Blaze Stove (requires a live Blaze as a fuel-catalyst) | via: MineColonies research gate (the Blaze Stove recipe or its efficiency-tier is unlocked by a combat-research node in the MineColonies tech tree, requiring prior Nether expedition) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the kitchen doesn't unlock its full 4× throughput until the colony has researched "industrial fire management" — knowledge of controlled Blaze use is gated behind progress, so the automated galley is a mid-game research prize, not a day-one drop.

## createlowheated   [anchors: Create (1)]

Existing rows cover: M-26 fuel-consumption sink (ACCEPT ×5+, strongest signal — heat now costs real fuel); M-05 basic_burner gated on Create parts (ACCEPT ×1, REJECT ×1 — contested); M-32 TFMG coke as premium burner fuel (ACCEPT ×2); M-05 heat-condition on woven basin recipes (ACCEPT ×1). Correctly REJECTs: M-13 liquid-fuel (solid-only), M-16 seasonal gating (no seasonal angle), M-29 magic-heat-tier (contrived).

The 2nd anchor is clearly survival via M-26 (fuel demand from coal/charcoal farms ties production to the survival supply chain). What's genuinely missing is a clearer survival framing for the fuel-demand path, and a check on whether the basic_burner itself benefits from an M-28 colony route:

- NEW | from: createlowheated:basic_burner (requires solid furnace fuel to run Create basin processes) | via: MineColonies colony route (a charcoal burner / woodcutter hut produces charcoal cheaply in bulk as the colony-cheaper path to heat fuel, vs. manual mining) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the burner that makes heat a managed resource makes a charcoal-producing colony a load-bearing supplier for every Create processor in the server — heat is now a colony product, not a solo task.
- CHALLENGE | from: createlowheated "lowheated" heat tier as a magic cross-route dependency | via: M-29 — a magic reagent (e.g. Ars allurite catalyst) unlocks or sustains the lowheated tier | to: magic | motif: M-29 | verdict: REJECT | hook: the lowheated tier is a Create-internal heat condition injected on basin recipes; there is no API surface for a magic reagent to alter heat tier (it would require a custom mechanic, not Phase-3 recipe authoring). Multiple existing REJECTs correctly identify this as a no-surface crossing.
- NEW | from: solid furnace fuel (coal / charcoal / biomass pellets — any c:fuels item accepted by basic_burner) | via: createlowheated:basic_burner consumption (ongoing burn demand) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: heat is now a fuel sink that never stops — every basket of charcoal that burns in the burner is demand the survival/farming loop must refill; the Create specialist and the charcoal farmer are permanently coupled.

Note: the M-26 fuel-consumption weave has near-unanimous support in existing rows and is the cleanest path to a 2nd anchor. The M-28 colony-charcoal row adds a concrete delivery mechanism that the existing rows don't specify.

## fishingreal   [anchors: survival (1)]

Existing rows: all REJECT — behavior-layer tweak, no items of its own, weave surface belongs to fish-content mods above it. This consensus is correct.

OK — existing LEAVE verdict sufficient. No new candidates.

## netmusic   [anchors: support (1)]

Existing rows: nearly all REJECT. One ACCEPT (TLM altar-routing of music_cd, confirming the existing made-by method). The majority correctly identifies this as cosmetic audio with no material loop contribution.

OK — existing rows sufficient. The one ACCEPT is the TLM altar existing made-by connection — already logged. No new candidates.

## companions   [anchors: survival (1)]

Existing rows: M-11 crystallized_blood→occultism spirit_fire (ACCEPT ×27 — consensus); M-10 soul_gem→Ars imbuement (ACCEPT ×10); M-02 mob-drops→magic reagents (ACCEPT ×7+); M-34 relic_gold combat-supply (ACCEPT ×4); M-15 relic_gold boss-key (ACCEPT ×3); M-08 relic_gold→numismatics (ACCEPT ×6 contested by REJECT ×3+); M-04 tesla/voltaic→crushing (majority REJECT, flagged WEAK); M-19 soul_furnace→haunting (ACCEPT ×1).

The strong consensus (M-11 crystallized_blood + M-10 soul_gem + M-02 mob-drops + M-34 relic_gold combat supply) covers two anchors well (survival + magic). What's genuinely missing:

- CHALLENGE | from: companions:relic_gold (Sacred Pontiff boss drop) | via: create:* → numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 is explicitly "scarce regional metal → Create-processed → player-pressed coin" — the minting motif is tied to regional ore-gen scarcity, not to boss trophy drops. Relic Gold is a boss relic, not a regional ore; minting it into coin conflates two different scarcity sources and undermines the relic's identity as a unique boss reward. The existing M-34 (combat-supply trade) and M-15 (boss-key gate) rows handle Relic Gold's economy/Create role correctly without needing a coin path. The REJECT minority is right.
- NEW | from: companions:crystallized_blood (Soul Furnace mid-tier output — rotten flesh transmuted) | via: create:haunting (as an *alternate input acceptor*: a KubeJS haunting recipe accepts pre-crystallized blood as a substitute for the raw mob-drop in some soul-linked Create recipe) | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace and the soul-fire basin are parallel transmuters — a player who already ran mob-drops through companions' furnace can skip a haunting step, linking the gothic alchemist's prep work into the Create spine without duplicating effort.
- NEW | from: companions mob drops (companions:small_essence / companions:great_essence — dropped by every companions hostile mob) | via: occultism:spirit_trade (Occultism dimensional miner-spirits accept Small Essence as a trade currency for a rare ore sample) | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: the Occultism spirits recognise soul-adjacent material — an essence from a killed Shade buys a deep-ore sample from the miner, so every companions combat run feeds the Occultism logistics arm; killing and mining become one supply chain.
- CHALLENGE | from: companions tesla/voltaic blocks (tesla_coil_block, voltaic_pillar_block) | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: M-04 is specifically for metal/stone decoration crushing back to raw materials; the Tesla electrical aesthetic is companions' thematic core progression infrastructure (you build the tesla network to power your companions), not surplus deco — dismantling it is a destroy-your-investment path, not a recycle story. The consistent WEAK/REJECT majority (×7+) is correct.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]

Existing rows: M-31 bulk-good logistics (ACCEPT ×4+); M-33 service-for-hire courier network (ACCEPT ×3); M-29 cross-route remote fulfilment (ACCEPT ×2, contested). Correctly REJECTs: M-06 sequenced-assembly (transmitter not flagship), M-05 (transmitter not flagship), M-23 structural alloy overgate, M-08 bare coin-via-logistics, M-24 drivetrain (already is the delivery mechanism).

The two anchors are solid. The contested M-29 row (remote fulfilment as cross-route dependency) needs a more precise framing:

- NEW | from: cmpackagecouriers:location_transmitter (requires chunkloaded base to receive deliveries) | via: MineColonies colony hut placement (a colony chunk-loader keeps the transmitter hot — a player with a colony gets automated delivery; one without must be online to receive) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the courier network requires a colony or dedicated chunk-loader to be useful — a colony player becomes the logistics hub for their region, and other players route their orders through them; the cardboard-plane network and MineColonies become mutually reinforcing.
- CHALLENGE | from: cmpackagecouriers remote delivery (cross-base package delivery) | via: M-29 cross-route dependency framing ("magic specialist orders Create ingredients via cardboard plane without building Create") | to: economy | motif: M-29 | verdict: REJECT | hook: M-29 is a *recipe-level* cross-route dependency (a recipe in one route requires an input from another route); the courier's value is logistics, not a recipe that forces two routes to share ingredients. The framing misapplies M-29 to an emergent trade pattern — the courier just moves goods, it doesn't gate a recipe. The correct motifs are M-31 (bulk logistics) and M-33 (service).

== CHUNK COMPLETE ==






