# Phase 2 candidates — chunk-11

## sound_physics_remastered   [anchors: support/client-immersion (1)]

LEAVE — pure client-side audio simulation (raytraced reverb/attenuation/occlusion); 0 blocks, 0 items, no recipe-types, no material outputs. Nothing to weave; sanctioned support role.

## puzzleslib   [anchors: support/library-API (1)]

LEAVE — zero-content code library (Fuzs mod abstraction layer); 0 blocks, 0 items, no recipe-types, no materials. Genuine zero-surface library; sanctioned support role.

## followersteleporttoo   [anchors: support/QoL (1)]

LEAVE — pure behavior tweak (tamed-pet teleport on owner TP); 0 blocks, 0 items, no recipe-types, no material outputs. No content surface to weave; sanctioned QoL support role.

## cubes_without_borders   [anchors: support/client-QoL (1)]

LEAVE — client-only Video Settings option (borderless fullscreen); 0 blocks, 0 items, no recipe-types, no material outputs. No content surface; genuine zero-surface client display mod.

## sereneseasons   [anchors: survival (1)]

Power-read: sereneseasons is the pack's seasonal clock — it modulates crop growth (out-of-season = stunted), shifts biome temperature (winter cold overlaps Cold Sweat), and emits a redstone signal via `season_sensor`. The calendar items are everyday informational goods. The key join surfaces are: (a) the `season_sensor` block's redstone output (readable by Create logic), and (b) out-of-season crops becoming scarce, trade-worthy goods. Designated in SYSTEMS.md as a *driver* feeding scarcity + survival, not a standalone pillar.

Existing 2nd-anchor candidate in dossier (Create via season_sensor → M-05) — analysing:

- from: sereneseasons:season_sensor redstone output | via: create contraption logic (gearshift/clutch read from sensor) | to: create | motif: M-16 | power: everyday | tone: ok — seasons driving automation is exactly "seasonal reagent" — the sensor is a seasonal gate on machinery | verdict: ACCEPT | hook: a seasonal sensor wired into a Create gearshift makes automated crop-switching farms that adapt to what's fertile, not what the player remembered to replant — the loop: survival pressure (scarce off-season crops) → Create automation (sensor-gated farm) → production
- from: out-of-season crop (e.g. wheat in winter) | via: create:milling or farmersdelight:cooking | to: create/survival | motif: M-16 | power: everyday | tone: ok — out-of-season scarcity is a real demand hook that forces either greenhouse investment or trade; routes the seasonal scarcity into production decisions | verdict: ACCEPT | hook: winter shortages make greenhouse-grown or hoarded out-of-season crops worth trading — scarcity → pressure → economy (distribution closes the gap)
- from: sereneseasons:calendar | via: loot-seed | to: survival | motif: no-motif — the calendar is an information item, not a material; adding it to structure loot is decorative flavor rather than a weave | verdict: REJECT | reason: no-motif; calendar is informational, not a method-routed material; loot-seeding it doesn't advance the loop

REWORK on dossier candidate "economy via seasonal scarcity → M-09 luxury-good→coin": M-09 is retired (#163/#240). The underlying scarcity-driven demand is real and sound; re-express as M-30 (regional-scarcity gate — seasonal scarcity is temporal, but the mechanism is analogous: a good becomes scarce and trade-worthy when unavailable). However, M-30 is formally about *geographic* region-locking via GTMOGS; temporal season-gating is closer to M-16 (seasonal reagent driving demand). The dossier's M-09 citation is outdated. The *correct* framing is M-16 applied to food-demand: out-of-season crop scarcity → diet-variety demand (survival pressure) → trade-driven economy link. Mark the dossier's M-09 candidate as REWORK.

REWORK: dossier lists "economy via numismatics sell → M-09" — M-09 is retired; the economy link is real (seasonal scarcity drives trade) but must be re-expressed via M-16 (seasonal scarcity gating demand) + M-26 (consumption sink — food eaten/used up) rather than a bare sell link. Flag for dossier update.

## create_cheese   [anchors: Create, survival (2)]

Power-read: already 2-anchor (Create + survival). The cheese chain is a multi-step production process (milk → curds via create:mixing/compacting → maturing in the Cheese Cellar at tier I/II/III → named aged cheeses). Calendar Pages gate maturation tier — everyday (tier I) through mid (II) to endgame-tier aged (III) cheeses. The `create_cheese:maturing` method is the palette join key: it accepts arbitrarily tagged inputs so any mod's dairy-adjacent output could age through it. Cheeses themselves are effect-bearing foods — high-effort survival consumables. M-35 (maturation/aging) is already established in the ledger specifically citing `create_cheese:maturing`.

Existing anchor review: Create + survival, both sound (Create machinery + food output). The dossier's candidate "economy via numismatics sell → M-09 STRONG" is M-09 which is retired. Need to re-frame.

- from: create_cheese:aged_cheese (tier II/III) | via: M-35 (maturing already in play) + M-26 consumption sink | to: economy | motif: M-26 | power: mid/endgame | tone: ok — aged cheese as a trade good: the maturing wait (up to 900 ticks = real time investment) gives it intrinsic time-value; players who specialize in the dairy chain supply it to those who don't; the demand is food-variety pressure (survival) requiring it for diet completeness | verdict: ACCEPT | hook: a dairy specialist who controls the Cheese Cellar supplies aged cheeses other players can't easily replicate mid-chain — the time-lock is what makes it trade-worthy, not a coin price
- from: create_cheese:cheese_curds | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: everyday | tone: clash — red-team: cheese curds as a magic reagent? Dairy and arcane infusion are tonally dissonant; no lore reason a spirit fire would want curds specifically; forcing it feels arbitrary | verdict: REJECT | reason: tone-clash; dairy→arcane infusion has no thematic grounding in either mod's lore; forces an edge the player won't find sensible
- from: create_cheese:maturing (the method itself, as a generic aging station) | via: create_cheese:maturing | to: economy/survival | motif: M-35 | power: mid | tone: ok — route another mod's perishable-adjacent output (e.g. Vinery wine-in-progress, Farmer's Delight preserved goods) through the Cheese Cellar's tag-extensible maturing method as an alternate aging path | verdict: ACCEPT | hook: a dairy specialist's Cheese Cellar doubles as the pack's shared aging infrastructure — wine, cheese, and preserved goods all mature in one automated station, specializing the operator as the pack's "time-keeper" of finished goods

REWORK: dossier candidate "economy via numismatics sell → M-09 [STRONG]" — M-09 retired (#163/#240). Re-express: the economy link is M-26 (consumption sink — aged cheese is eaten against survival/diet pressure, demand never zeroes) + M-35 (maturation — time-lock gives it trade value). The weave is already sound; citation needs updating.

## lithostitched   [anchors: support/library-API (1)]

LEAVE — worldgen plumbing library (biome/structure/terrain modifier API); 0 blocks, 0 items, no recipe-types, no material outputs. Genuine zero-surface library; sanctioned support role.

## mutantszombies   [anchors: survival (1)]

Power-read: mutantszombies adds 7 hostile zombie variants with 7 biome-modifier natural spawn entries (Zombie Brute, Crawler, Spitter, Blister, Split Head, Mutant Brute, Rotten Mutant). The dossier confirms loot=no, 0 items registered beyond spawn eggs. No special drops. The briefing warns not to force edges onto deliberately-vanilla organic content when nothing is coherent.

However: the briefing also says to reach for a loot-seed candidate before LEAVE for any mob with a potential loot table. These are hostile mobs — they drop standard zombie loot (rotten flesh, iron ingots, carrots via vanilla tables). They have *no unique drops* and no loot=yes in the dossier. The question: can we loot-seed pack-relevant items into their tables?

- from: mutantszombies boss-class variants (Mutant Brute, Rotten Mutant) | via: loot-seed (datapack addition) | to: survival/economy | motif: M-02 | power: mid | tone: ok — red-team: are these "bosses"? They are stronger variants, not named bosses with custom mechanics; seeding them with unique drops could feel arbitrary (why does a mutant zombie drop a specific magic reagent?). However, M-02 (mob-drop reagent sink) is established for giving isolated mob drops a magic/economy use; the question is whether these mobs are *isolated enough* to need it. They are vanilla-zombie variants — their drops blend into normal zombie drops, so a loot-seed upgrade isn't incoherent. But: without a unique identity hook (they're just stronger zombies, no thematic signature of their own), a seeded drop would feel arbitrary. | verdict: REJECT | reason: no thematic identity hook — these are vanilla-zombie stat variants, not mobs with a signature material; a loot-seed drop would be arbitrary rather than "of course" sensible; the danger-pressure anchor is the sound single anchor here

LEAVE not applied because there's a survival anchor. Mob is 1-anchor survival; no coherent 2nd anchor found that survives red-team.

## betterpingdisplay   [anchors: support/client-UI (1)]

LEAVE — client UI mod showing numerical ping in the tab list; 0 blocks, 0 items, no recipe-types, no material outputs. Genuine zero-surface client utility; sanctioned support role.

## platform   [anchors: support/library-API (1)]

LEAVE — cross-platform code library (ItsBlackGear's Architectury-based utility framework); 0 blocks, 0 items, no recipe-types, no material outputs. Genuine zero-surface library; sanctioned support role.


