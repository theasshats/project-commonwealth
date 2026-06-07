# Phase 2 candidates — chunk-12

## terralith   [anchors: survival (1)]
- LEAVE — pure data-only worldgen overhaul; registers no items, no blocks, no loot of its own. Its contribution is the biome surface that other mods' content (GTMOGS ore-gen, structure mods) lands on. The indirect M-30 scarcity effect is real, but the link lives in the ore-gen config, not a weave authored *against* terralith. No recipe/loot surface to pull through any method.

## just_blahaj   [anchors: decoration/support (1)]
- LEAVE — 31 wool+dye plush variants, zero processing surface, zero loot. No method in the palette wants plush blocks as input. Forcing any edge is the failure mode the briefing warns against.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw boss drop) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's crystallized cold unlocks cryogenic Create components — a player-sensible gate from mythic boss to tech spine
- from: mowziesmobs:earthrend_gauntlet / wrought metal artifacts (Wroughtnaut drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut is forged from earth-spirits; Occultism's spirit-fire naturally dissolves it into a high-tier spirit essence, making the boss a magic unlock as well as a tech gate
- from: mowziesmobs:sol_visage (Barako boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a solar mask steeped in sun-magic slots directly into Ars imbuement as a celestial catalyst, giving the third boss a distinct magic sink
- from: mowziesmobs boss drops (general) | via: numismatics bounty / M-34 combat-route supply | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: combat specialists farm Mowzie's bosses and trade the artifacts to tech/magic players who need them as gatekeepers — the bosses are dual-role (world-pushback + supply chain)
- from: mowziesmobs boss drops | verdict: REJECT | reason: bare "sellable for coin" — M-09 retired; the M-34 above covers the economy angle via demand-gating (artifacts are required inputs), not a sell link

## companion   [anchors: support/QoL (1)]
- LEAVE — pure behavior mod (pet-safety teleport/retreat); registers zero items, zero loot. Nothing to route through any method.

## zombiemoon   [anchors: survival (1)]
- LEAVE — 7 hostile zombie/mutant variants, zero unique drops (no items in jar), loot=no. The mobs use vanilla rotten-flesh-style drops; there is no reagent to seed into any method without inventing a fictional edge. Difficulty flavor only.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI plugin category for breeding info; zero blocks, zero items, zero loot. Pure informational; no material surface.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen API library (density functions, biome injectors); registers no items, no loot. Shapes the terrain other content lands on, but has no recipe or loot surface of its own.

## necronomicon   [anchors: support/library (1)]
- LEAVE — pure code library (config/datagen/registry helpers for opacpvp); zero items, zero loot. Nothing to weave.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / smallhull (ship hull components) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a proper wooden hull with Create's mechanical crafter (brass fittings, treated planks) gates the cutter/war-cutter above the raw wood-craft tier — sensible for a tech pack
- from: hpm:corvette_steamship_item (flagship vessel) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a steam-powered corvette demands a multi-stage assembly chain (boiler → drive-shaft → hull integration) through sequenced assembly, matching the flaghship-depth rule
- from: hpm:cannonball / mortar_ball | via: createbigcannons:cartridge_assembly | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Swashbucklers' cannonballs are a lower-tech cousin of CBC munitions; routing them through CBC's cartridge-assembly method forces the naval-combat specialist to touch the Create-side munitions web — cross-route dependency that rewards specialization
- from: hpm:hand_cannon / war-cutter vessels | via: economy (M-34) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat-shipwright builds and sells armed cutters to players who want naval raiding capability but haven't built the Create spine themselves; the cutter is a service/supply good that gates demand
- NOTE: curation flag — hpm ships are bespoke boat-entities (not Aeronautics-physics ships); their overlap with Create Aeronautics and Create Big Cannons (CBC) should be reviewed at the thunderdome (odd-version curation pass). The weaves above are valid *if the mod survives curation*.
- from: hpm:raftitem (basic raft) | verdict: REJECT | reason: everyday/cheap item — gating a basic raft behind Create machinery violates the "never gate basics behind complex recipes" guardrail; the raft should stay cheap vanilla-craft

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory optimization (blockstate dedup); zero items, zero loot, no gameplay mechanic. Sanctioned perf support role.

## inventoryprofilesnext   [anchors: client-QoL/support (1)]
- LEAVE — client-side inventory manager; zero items, zero loot. Pure UI behavior. Note: pack already carries a KubeJS texture override for its empty-slot arrow (CLAUDE.md §gotchas) — no weave possible or needed.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling dried ginger root yields a spice powder that feeds cooking recipes — a one-light-step processing pull for an everyday crop; depth scales correctly (it's a crop, not a flagship item)
- from: snowyspirit:ginger | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farmer's Delight cutting board chops fresh ginger for candied/spiced dish ingredients — joins the food-processing web, giving snowyspirit a survival-food system second weave alongside its decoration anchor
- from: snowyspirit:eggnog | via: vinery:wine_fermentation or alcohol_industry:alcohol_boiling | to: create | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: eggnog must be aged/matured (sit cold) to hit the premium variant — a winter-seasonal maturation commodity that rewards the aging specialist and makes winter logistics matter
- from: snowyspirit:sled (transport item) | via: aeronautics weave | to: aeronautics | motif: M-31 | power: everyday | tone: clash | verdict: REJECT | reason: the sled is a low-tech snow-terrain traversal toy, not a logistics vehicle in the aeronautics sense; forcing it into the logistics arm (M-31) misrepresents what it does and its power tier — it's faster than walking, not a cargo route
- from: snowyspirit:gingerbread / candy_cane decor as seasonal luxury goods | verdict: REJECT | reason: bare sell-for-coin (M-09 retired); the food-processing and maturation weaves above cover the economy connection via actual demand-gating; this would be a dead ambient endpoint

## betteroceanmonuments   [anchors: survival (1)]
- from: monument chest loot | via: loot-seed (datapack edit) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a rare combat-supply drop (a processed material or magic reagent) into monument chests means clearing a Better Ocean Monument is a combat-route supply event — the aquatic specialist brings goods to the surface trade network; loot=yes makes this a valid loot-seed candidate
- from: monument chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an exotic aquatic material (prismarine-based reagent or a unique drop seeded into the loot) gives Occultism/Ars a deep-water source, tying aquatic exploration into the magic spine
- REWORK: existing dossier says "none — leave; defer to a datapack edit" — the briefing explicitly says do NOT leave loot-bearing structure mods (loot=yes); a loot-seed is a real Phase-3 action. Dossier's 2nd-anchor candidates should be updated to reflect the loot-seed path.

## detect-afk-1.2.2   [anchors: support/server-admin (1)]
- LEAVE — behavioral AFK-detection utility; zero items, zero loot. Server-admin QoL only.

## betterbiomereblend   [anchors: support/client-perf (1)]
- LEAVE — client-only biome color rendering optimization; zero items, zero loot. No content surface.

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — client-side cosmetic animation enhancer; zero items, zero loot. No content surface.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris (whale drop — rare ocean resource) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a real-world magical/perfume reagent; Ars imbuement absorbing it as a source-amplifying catalyst is player-sensible and gives the ocean biome a magic-supply role
- from: alexsmobs:ender_residue (void worm drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm is a dimension-crossing entity; spirit-fire transmuting its residue into an Occultism dark-essence is the coherent ritual path, and sinks a flagship drop into the magic spine
- from: alexsmobs:bear_dust | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear-derived dust mixes into a crude lubricant or tallow intermediate that feeds Create machinery upkeep — a one-light-step organic-to-tech bridge at everyday depth
- from: alexsmobs:banana_slug_slime | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: slug slime as a natural adhesive/lubricant for Create belts or mechanical components — a thematically coherent mob-drop processing pull
- from: alexsmobs rare boss drops (void_worm_beak, void_worm_effigy) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm is a Nether/End-tier boss; its beak gates a high-tier Create assembly, matching the boss-key unlock design intent
- from: alexsmobs:leafcutter_anthill (passive resource generator) | via: economy (M-33 service) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: setting up and managing an anthill resource generator is a specialized labor; the anthill owner provides leaf-mold or substrate goods to other players who don't want to manage one — labor/service economy axis
- from: alexsmobs drops as bare "sellable for coin" | verdict: REJECT | reason: M-09 retired; ambient sell link; the M-02/M-11/M-34 weaves above cover demand-gating legitimately
- from: alexsmobs:void_worm_effigy as decoration | verdict: REJECT | reason: no-motif forced deco edge; functional items should route through methods, not be re-framed as decoration to claim a second anchor
- REWORK: dossier lists "economy via Numismatics — rare drops/tames as bounty or sale goods; M-08 coin-from-scarcity" as MED — this is a bare sell link (M-09 retired pattern); should be re-expressed as M-34 combat-route supply (drops farmed by specialists and traded to non-combat players who need them as inputs) or dropped entirely if not demand-gated.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — cross-platform utility/API library; zero items, zero loot, no gameplay mechanic. Pulled transitively by Resourceful-family mods.

## formationsnether   [anchors: survival (1)]
- from: Nether structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a Nether-exclusive magic reagent (a soul-shard or infernal essence) into Formations Nether chest loot makes clearing these ruins a magic-supply mission — loot=yes enables this as a Phase-3 datapack edit
- from: Nether structure loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare Nether commodity (a processed ore or exclusive material) seeded into the altar/sanctuary loot makes Nether exploration a combat-supply route — the combat specialist brings goods up that the surface economy needs
- REWORK: dossier candidate listed "economy via numismatics" as WEAK with an M-08 citation that doesn't fit; the real pattern is M-34 (loot from a dangerous exploration feeds the trade network). Bare sell link angle should be retired from the dossier.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — configurable client audio cue on world/menu load; zero items, zero loot, no gameplay mechanic. No content surface.

== CHUNK COMPLETE ==
