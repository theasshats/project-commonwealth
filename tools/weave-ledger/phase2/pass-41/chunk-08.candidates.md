# Phase 2 candidates — chunk-08 (context-fed)

## bookshelf   [anchors: support (1)]
LEAVE — pure developer library (Darkhax); 0 blocks, 0 items, 0 loot, no recipe surface. Sanctioned support role; nothing to weave.

## spark   [anchors: support (1)]
LEAVE — performance profiler only; no items, no loot, no recipe methods. Sanctioned support role (diagnostic tooling per CLAUDE.md).

## create_dragons_plus   [anchors: Create (1)]

Existing rows cover the main weave axes well (M-10 ending→magic, M-16 freezing→seasonal, M-15 boss-key gating, M-34 combat-supply). The following gaps remain after reading all blind-pass rows:

- NEW | from: create_dragons_plus:levitite_fragile_fluid_tank | via: recipe (crafting + create:filling) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the tank whose name literally says "levitation fluid" is the lightest structural container on an airship's buoyancy deck — a natural hull component, not an arbitrary add-on.

- NEW | from: create_dragons_plus:blaze_upgrade_smithing_template | via: loot-seed (Nether structure loot tables) | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Blaze smithing template is a Nether-exploration find, not a shop purchase; seeding it into Nether fortress or bastion-adjacent loot makes the combat specialist the supplier of a Create-tier smithing upgrade.

- CHALLENGE | from: create_dragons_plus:freezing (fan bulk-freeze, powder snow catalyst) | via: create_dragons_plus:freezing | to: survival | motif: M-16 | verdict: REJECT | hook: M-16 requires a *season-gated input* feeding a machine/ritual — the powder-snow catalyst is obtainable year-round (from any powder-snow biome or Create compacting); the seasonal gate is missing unless KubeJS explicitly restricts powder-snow supply to winter. The existing ACCEPT rows are technically correct that Serene Seasons makes powder-snow seasonal in practice, but multiple blind passes noted this is indirect; the motif fit is borderline. Flag for Gate-2 review: only solid if powder snow supply is explicitly season-locked by config/KubeJS.

## sky_whale_ship   [anchors: survival (1)]

Existing rows thoroughly cover M-15 aeronautics loot-seed (strongest), M-34 combat-supply, M-22 lunar event boost, and the M-02/M-08 debates. The following is missing:

- NEW | from: sky_whale_ship loot chests (hostile-whale variant) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the hostile whale's mob density makes it a combat-supply node distinct from the peaceful whale — a combat-specialist pilot farms rare drops that grounded players need, cleanly separating two player roles at the same destination.

- NEW | from: sky_whale_ship aerial position (altitude-gated access) | via: worldgen/spawn gating | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: whale loot is bulk-heavy-enough (structural alloys, fuel tanks from loot-seed) that moving it to ground players at scale requires the logistics arm — the whale is the origin node of an aeronautics cargo run. Distinct from M-15 (that's the progression gate on reaching the whale; this is the distribution leg after the raid).

- CHALLENGE | from: sky_whale_ship loot chests | via: loot-seed | to: magic | motif: M-02 | verdict: REJECT | hook: multiple blind passes debated this; the persistent objection is sound — sky whales are whimsical-adventure/aerial set-pieces with no arcane lore. Seeding magic reagents (source gems, Occultism components) fails the "would a player nod at this?" test. The 5-ACCEPT vs 5-REJECT split in the tsv confirms the theme tension is real; the hostile-whale-loot M-34 weave above already gives the second anchor without forcing an arcane overlay.

## mysterious_mountain_lib   [anchors: support (1)]
LEAVE — pure code library (MMFGroup mods dep); 0 blocks, 0 items, no loot, no recipe surface. Sanctioned support role.

## polymorph   [anchors: support (1)]
LEAVE — recipe-conflict resolution UI only; no items, no recipe methods, no loot. Sanctioned support role (critical compat infrastructure for heavy packs).

## afk-sleep-1.3.2   [anchors: support (1)]
LEAVE — server behavior mod (AFK sleep quorum); no items, no loot, no recipe surface. Sanctioned support role.

## startuptime   [anchors: support (1)]
LEAVE — boot-time logger only; no items, no world effect. Sanctioned support role (perf diagnostic).

## spawn   [anchors: survival (1)]

Existing rows cover M-12 (FD/Create food processing), M-11 (spirit_fire for anglerfish/ant_pupa), M-31 (bulk coastal logistics), M-28 (colony provisioning), M-35 (date-wine aging), and M-30 (regional clam scarcity). The following is missing:

- NEW | from: spawn:angler_fish (bioluminescent deep-ocean hostile mob) | via: loot-seed (anglerfish loot table) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the anglerfish's light-organ is already thematically "a creature of pure dark and lure-light" — seeding a specific loot-table drop (a bioluminescent fluid or unique item) makes the rare deep-ocean catch a magic reagent without forcing tone; the *item* exists, the loot-table action formalizes it. Blind-pass rows kept confusing "route the mob through spirit_fire" (M-11, which many REJECTed as tonal) with the simpler action of giving the anglerfish a named drop that IS usable as a reagent. That distinction matters: a dedicated dropped reagent (not spirit-firing a raw fish) avoids the tonal clash and is a loot-seed action, not a recipe.

- NEW | from: spawn:ant_pupa | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: ant pupae are larval organic matter — exactly the category of isolated organic drop spirit-fire transmutes into a low-grade essence; the same logic that puts barnacle/insect drops in spirit-fire works here. Power-read: ant_pupa is an everyday ambient drop (anthill biome, low rarity), so the yield should be small (one low-tier essence per batch) — avoids the depth-cost mismatch the briefing warns against.

- NEW | from: spawn:date_bunch (date palm fruit, date_log tree set) | via: vinery:apple_fermenting | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: date fruit ferments into a date wine/spirit that must age — the maturation specialist turns a coastal crop into a timed luxury good the economy moves. Existing rows mention this once (1 ACCEPT) but it hasn't surfaced as a clear standalone proposal. The vinery:apple_fermenting method accepts fruit inputs generically; date_bunch fits naturally. This gives spawn a second anchor (survival→economy) without forcing anything.

- CHALLENGE | from: spawn:clam / crab drops | via: createfisheryindustry:bait_trap | to: create | motif: M-12 | verdict: REJECT | hook: the highest-voted row (20 occurrences) is split 15 ACCEPT / 9 REJECT. The REJECT case is correct on inspection: createfisheryindustry mechanized fishing is Create-internal processing, not a pillar-crossing weave — routing clam/crab into a fishing bait trap deepens the Create machine chain but doesn't advance survival→Create→economy; it's a within-Create convenience. The truly clean M-12 path is FD cooking/cutting (already established as an inbound weave). Flag this as the "keep the FD inbound, drop the bait-trap as the primary weave" recommendation for Gate 2.

## create_ultimate_factory   [anchors: Create (1)]

Existing rows converge cleanly: the diamond-synthesis route REJECTS (undermines scarcity), the strata-stone byproduct→input routes ACCEPT (M-32). No significant gaps, but one nuance the blind passes missed:

- NEW | from: create_ultimate_factory strata-stone recipes (nuggets+gravel+lava → decorative strata) | via: create:compacting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony architects request bulk strata stone (calcite, diorite, tuff, andesite) for colony building — a MineColonies colony production route for decorative blocks uses the Create byproduct chain as its feedstock. This is distinct from the M-32 rows (which route the byproducts back into the Create machine) — here the *output* of that loop is a colony supply good, closing the second anchor as economy/colony without needing a new recipe.

- CHALLENGE | from: create_ultimate_factory renewable-diamond recipe | via: create:compacting | to: [any] | motif: M-30 | verdict: REJECT | hook: several blind passes marked this ACCEPT as a "scarcity concern" flag or REWORK. The correct treatment is simpler: the coal-block→diamond recipe should be **disabled** (KubeJS recipe removal) when the pack's scarcity-foundation work lands, not woven. It's a design conflict, not a weave candidate. No ACCEPT is coherent here; this row should be a Gate-2 decision to remove the recipe, not to weave it.

## miningspeedtooltips   [anchors: support (1)]
LEAVE — client UI tooltip mod only; no items, no loot, no recipe surface. Sanctioned support role (informational QoL).

## staaaaaaaaaaaack   [anchors: support (1)]
LEAVE — entity-merge behavior mod (drop coalescing); no items, no recipe surface, no loot. Sanctioned support role (perf/QoL).

## underground_village   [anchors: survival (1)]

Existing rows cover M-02 (magic reagent loot-seed), M-08 (coin loot-seed), M-33 (villager service-for-hire), M-34 (combat-supply loot), M-37 (colony research tome), and M-04 (deco block recycle). One meaningful gap:

- NEW | from: underground_village Stoneholm structure (discoverable subterranean settlement) | via: loot-seed | to: survival | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm villages generate in specific underground biomes/depths; seeding their deepest chest with a sample of that region's rare ore (a vein chip or nugget from a region-locked ore) makes the underground village both an exploration reward and a regional-scarcity indicator — "the buried village is where the local miners worked, and they left ore samples behind." This closes the survival→scarcity link that all the M-08/M-02 loot-seed proposals ignore; the structure tells you something about the regional ore distribution, not just drops loot.

- CHALLENGE | from: underground_village Stoneholm villager trades | via: config-tie (villager trade list) | to: economy | motif: M-09 | verdict: REJECT | hook: the dossier itself listed M-09 as the economy-anchor candidate, but M-09 is **retired** (#163/#240) — "NPC coin faucet" is cut. The existing rows that propose Stoneholm villagers trading for Numismatics coin are wrong on motif. The valid routes are M-33 (service-for-hire, player brings materials), M-29 (cross-route dependency, a Stoneholm smith trades a pack-specific intermediate), or M-34 (combat supply). All three already have ACCEPT rows; no new proposal needed here, just flagging the M-09 framing as dead.

## supermartijn642corelib   [anchors: support (1)]
LEAVE — invisible GUI/packet library (SuperMartijn642 dep); 0 blocks, 0 items, no loot, no recipe surface. Sanctioned support role.

## jakes-build-tools-2.0.1.5   [anchors: support / QoL (1)]

Existing rows heavily REJECT all weave proposals (M-05 gating tools is against the "don't gate basics" rule; XP flask routing is no-motif or forced). One nuance not yet surfaced clearly:

- NEW | from: minecraft:experience_flask_* (XP storage/release items from the build-tools set) | via: create:crushing (XP byproduct collection) | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's crusher already emits `create:experience_nugget` as a standard byproduct; a jake's XP flask sitting on the output belt automatically bottles those nuggets into portable stored XP — the builder's flask becomes the *packaging step* for Create's XP byproduct stream. This is everyday-tier (one belt + flask = XP capture), avoids gating anything behind the flask, and gives the item a functional role in the Create loop without forced depth. The existing row proposing this has 1 ACCEPT but was presented without clarity on how the belt interaction works; this framing is the clean version.

- CHALLENGE | from: minecraft:experience_flask_* | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: the single ACCEPT for "drain a filled XP flask into the imbuement altar" is tonally strained — XP flasks are a builder convenience item, and the imbuement altar is for arcane reagents. "Concentrated experience is concentrated arcane potential" is a stretch metaphor, not a player-intuitive pairing. M-10 explicitly warns against gating basic components behind infusion, and an XP flask is a basic QoL item; the depth is wrong.

## smokeleafindustries   [anchors: survival (1)]

Existing rows converge well: M-17 FE↔kinetic bridge (strong ACCEPT), M-26 consumption-sink for gummies/extracts, M-28 colony provisioning, M-05 sequencer gating on Create parts. The following gaps remain:

- NEW | from: smokeleafindustries:sequencer (multi-batch automation flagship machine) | via: create:sequenced_assembly | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Sequencer is the mod's production flagship — it automates the drying→grinding→extracting chain into a single configurable batch. Gating its recipe behind a Create sequenced-assembly step (requiring brass components as inputs) is the textbook M-05 route: the tech-spine progression unlocks the mod's flagship, so a player must invest in Create before the industrial strain-lab pays off. This is distinct from the "power the FE machines from Create" (M-17) row — that's the power-routing weave; this is the recipe-gate weave. Both are needed for the full two-anchor picture.

- NEW | from: smokeleafindustries:hemp (crop biomass) | via: smokeleafindustries:generator → createaddition:charging | to: create | motif: M-17 | power: everyday | tone: ok | verdict: ACCEPT | hook: the generator burns hemp waste/biomass → FE → Create Addition converts to SU kinetic; the isolated FE island becomes a node on the Create spine's power grid. The existing rows capture this but split it across M-05/M-17 ambiguously — the precise routing is: generator provides FE, createaddition:liquid_burning or the motor/alternator converts it, threading the farm into Create's rotational network. This is the single cleanest weave this mod has.

- NEW | from: smokeleafindustries strain seeds (25 strains, crossbred via mutator) | via: config-tie (Serene Seasons seasonal availability) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic tropical strains (Banana Kush, Cotton Candy, Bubblegum) are naturally warm-climate crops — gating their seed germination behind a summer-heat window via Serene Seasons config makes strain-farming seasonal and gives the survival pressure layer a direct hook into the hemp economy. Power-read: mid-tier (exotic strains aren't everyday; they're the crossbred specialization products of the mutator). The blind pass that REJECTed this ("grow-pots are indoor/artificial light-based") is technically correct if all 25 strains grow identically indoors — if the grow_pot ignores seasons, this requires a KubeJS hook rather than a pure config tie. Flag for Phase 3: verify whether grow_pot bypasses Serene Seasons temperature; if so, the delivery is KubeJS (season-check on crop growth event) not config.

- CHALLENGE | from: smokeleafindustries refined extracts | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: 8 ACCEPT / 4 REJECT in existing rows. The REJECT is the correct call: Ars Nouveau's crystalline-arcane aesthetic genuinely does not absorb cannabis extracts without forcing tone. "Herb → arcane reagent" requires a lore bridge that doesn't exist in the pack's magic system (Ars uses source gems, glyphs, crystalline cores — not botanical extracts). The 8 ACCEPTs are surface-plausibility votes; the theme test fails on closer reading. Stick with M-17 + M-26 + M-28 as the economy/Create bridge; no magic anchor needed.

## dataanchor   [anchors: support (1)]
LEAVE — data-attachment/networking library (Corgi_Taco dep); 0 blocks, 0 items, no loot. Sanctioned support role.

## sable   [anchors: support (1)]
LEAVE — Rapier physics-engine library underpinning Aeronautics (sub-level backend); no player-facing content, no recipe surface. The weaving happens in the mods built on top of it, not here. Sanctioned support role.

## playeranimator   [anchors: support (1)]
LEAVE — player animation API (KosmX); 0 blocks, 0 items, no loot, no recipe surface. Sanctioned support role (animation library for dependent mods).

## lithostitched   [anchors: support (1)]
LEAVE — worldgen-modifier library (Apollounknowndev); 0 blocks, 0 items, no recipe surface. Sanctioned support role (worldgen plumbing for Tectonic and other terrain mods).

== CHUNK COMPLETE ==
