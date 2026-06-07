# Phase 2 candidates — chunk-12

## gtmogs   [anchors: survival, economy (2)]
<!-- gtmogs is the worldgen-framework substrate — it defines scarcity, not a content mod. Already ≥2
     anchors. The dossier correctly identifies it as an enabler of downstream motifs (M-03, M-08, M-30)
     rather than a mod that can itself be woven further. -->
- REWORK: existing anchor claim "economy" is slightly loose — gtmogs *enables* M-30 but does not
  participate in a recipe/loot surface; however calling it a scarcity/economy foundation anchor is
  defensible per the SYSTEMS.md loop (scarcity is the foundation). Mark OK with caveat.
- OK — connections sound. Framework mod; downstream motifs ride its ore-gen output, no weave to author
  against gtmogs itself. No candidates.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
<!-- Autonomous cardboard-plane courier for Create packages. Already ≥2 anchors (Create + aeronautics/
     logistics). The dossier notes light economy adjacency — let's examine whether any demand-gating
     link exists. -->
- from: cmpackagecouriers:cardboard_plane | via: recipe (crafting gate) | to: economy | motif: M-29 |
  power: mid | tone: ok | verdict: REJECT | reason: The cardboard plane is already made via
  create:cutting + create:deploying on cardboard. A cross-route dependency (M-29) would require it
  consume a magic or survival input — e.g. a wax/resin seal or a wind-script. Tone is fine but the
  link is forced: the mod's value is *infrastructure*, not a material with a meaningful second-system
  use. The existing Create + aeronautics anchors fully describe it. Reject until a coherent
  cross-dependency materializes.
- OK — connections sound. No new weave needed.

## create_confectionery   [anchors: Create, survival (2)]
<!-- Cocoa→chocolate factory riding Create methods. Already ≥2 anchors. M-09 was noted in the dossier
     but M-09 is retired. Need to find a demand-gating economy link or a magic/colony link instead. -->
- from: create_confectionery:bar_of_ruby_chocolate (or effect candies) | via: ars_nouveau:imbuement |
  to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT |
  hook: ruby chocolate's gemstone flavour fits arcane infusion — a candy infused with source becomes
  a short-duration potion-flask substitute or reagent extender, so the confectionery chain has an
  arcane outlet beyond food.
- from: create_confectionery:bar_of_black_chocolate (bulk) | via: minecolonies colony request system |
  to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT |
  hook: colony Cook hut adds chocolate bars to its request list as a luxury food input; colony demand
  creates a floor price and a guaranteed trade sink for chocolate producers, without NPC coin faucets.
- from: create_confectionery effect candies (Speed/Saturation) | via: cold_sweat sewing-table / config |
  to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT |
  reason: The candies already anchor survival (they're food/effect items). This would be a same-pillar
  link, not a cross-system advance. Not a useful weave.
- REWORK: dossier's M-09 "economy via numismatics sell" candidate is retired — no action needed; it
  was already flagged weak and M-09 is retired. The two accepted candidates above (M-10 magic, M-28
  colony) supply the missing second/third anchors properly.

## comforts   [anchors: survival (1)]
<!-- Sleeping bags + hammocks. Pure vanilla-recipe QoL. Dossier correctly identifies no weave surface. -->
- from: comforts:sleeping_bag_* | via: create:deploying (roll/stamp) | to: Create | motif: M-20 |
  power: everyday | tone: ok | verdict: REJECT | reason: Deploying a sleeping-bag to "roll" it into
  a compact form has zero gameplay value — the bag is already portable and cheap. Depth-for-depth's-sake
  on an everyday QoL item violates the anti-over-gating rule. Reject.
- from: comforts:sleeping_bag_* (16 colors) | via: MineColonies colony request | to: economy |
  motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: Colony workers sleeping in
  the field requesting sleeping bags is thematically plausible, but comforts adds no mechanics beyond
  sleep QoL — there is no colony-worker state that consumes sleeping bags. Forced; reject.
- LEAVE — genuine one-system QoL mod; no coherent cross-system surface.

## enhancedcelestials   [anchors: survival (1)]
<!-- Lunar events + meteor/space_moss blocks. 1-anchor; two candidates in dossier to evaluate. -->
- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 |
  power: mid | tone: ok | verdict: ACCEPT |
  hook: a meteor block is crushed like any unusual stone: yields iron nuggets + nickel dust (or
  experience_nugget byproduct) — the fallen-star becomes a minor ore source through the Create spine,
  tying the lunar event cycle to material production.
- from: Blood Moon / Blue Moon event state | via: ars_nouveau:ritual gating (event-as-prerequisite) |
  to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT |
  hook: a high-tier Ars ritual (or Occultism ritual) requires the moon to be in a Blood or Blue Moon
  phase to complete — celestial events become a *prerequisite* rather than pure ambiance, giving the
  lunar cycle gameplay weight beyond hostility. M-22 explicitly covers all moon events.
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement (or occultism:spirit_fire) |
  to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT |
  reason: Space moss is atmospheric deco with no distinct magical property beyond novelty. Infusing it
  adds complexity without player-legible meaning ("why does moss from space make a better reagent?").
  The meteor→crushing and moon-event→ritual pair already give the mod two anchors; a third moss edge
  would be noise. Reject.

## imfast   [anchors: support/aeronautics (1)]
<!-- Zero-content server mixin. Pure support. -->
- LEAVE — zero-content behavior patch (0 blocks, 0 items); no material surface to weave.

## sereneseasons   [anchors: survival (1)]
<!-- Four seasons driving crop fertility + biome temp. Core survival triad mod. 1-anchor. -->
- from: sereneseasons:season_sensor (redstone output) | via: Create automation (gearshift/redstone
  input on contraptions) | to: Create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT |
  hook: wire the season_sensor's signal into a Create gearshift so the farm contraption switches
  gear-ratio (or opens a greenhouse shutter) automatically when seasons turn — seasons directly drive
  Create mechanized agriculture.
- from: out-of-season crops (seasonal scarcity) | via: MineColonies colony demand (Farmer hut
  requests year-round crops regardless of season) | to: economy | motif: M-30 | power: mid |
  tone: ok | verdict: ACCEPT |
  hook: colony Farmers request any crop their hut is assigned year-round, but out-of-season yield is
  stunted — the colony's demand *doesn't shrink with the season*, so a greenhouse-owning specialist
  commands a real trade premium. Regional seasonal scarcity gates economy demand (M-30 scarcity
  angle) through the colony route.
- REWORK: dossier candidate "economy via M-09 luxury-good→coin" is retired. Replaced above with M-30
  (regional-scarcity gate via seasonal unavailability). The Create candidate (M-05 native-method
  gating) in the dossier is slightly mis-labelled — the join is via a non-recipe Create sensor signal,
  which better fits M-16 (seasonal reagent / seasonal condition driving Create). Updated motif to M-16.

## terrablender   [anchors: support (1)]
<!-- Worldgen library — no items/blocks. -->
- LEAVE — zero-content worldgen API library; no weave surface.

## followersteleporttoo   [anchors: support (1)]
<!-- Zero-content behavior QoL fix. -->
- LEAVE — zero-content behavior patch (0 blocks, 0 items); no material surface to weave.

## accelerateddecay   [anchors: support (1)]
<!-- Performance mod — leaf decay optimization. -->
- LEAVE — zero-content performance mod; no material surface to weave.

## just_blahaj   [anchors: decoration/support (1)]
<!-- Plush shark deco blocks, vanilla wool/dye recipe. The dossier is correct that forcing an edge
     here is the failure mode. But it has loot=yes — check if a loot-seed angle exists. The blocks are
     pure deco; no loot from structure chests; loot=yes likely means it can drop from the blahaj
     itself (probably just drops itself). No structural loot surface. -->
- from: just_blahaj:blahaj (wool plush) | via: create:crushing (fluffy stuffing → loose wool/string) |
  to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT |
  reason: Theme clash — crushing the iconic cozy shark to reclaim stuffing is tonally antithetical to
  the mod's entire purpose (wholesome friend-group decor). The "recycling deco" idea (M-04) is valid
  in principle but lands wrong here. Reject on tone.
- LEAVE — pure flavor decoration; tone clash on any mechanical edge.

## lithium   [anchors: support (1)]
<!-- Server perf optimization. Zero items. -->
- LEAVE — zero-content performance mod; no material surface to weave.

## minecolonies_compatibility   [anchors: survival, Create (2)]
<!-- Integration glue mod bridging colony workers to Create Stock Link, IE, Farmer's Delight, etc.
     Already ≥2 anchors. It is itself a bridge; additional weaves would double-count existing links. -->
- from: minecolonies_compatibility colony-worker modded-crop routes | via: sereneseasons fertility
  config (crop-fertility list) | to: survival | motif: M-16 | power: mid | tone: ok |
  verdict: ACCEPT |
  hook: the Orchardist/Farmer worker routes from minecolonies_compatibility handle modded crops; tag
  those crops in Serene Seasons' fertility config so the colony Farmer's productivity is
  season-sensitive — colony output naturally varies by season, creating a built-in seasonal scarcity
  signal without new recipes. This is a config-tie delivery, not a recipe.
- OK — the Create Stock Link / colony-worker bridge anchors are well-established. The seasonal config
  tie above adds a survival×economy depth without forcing a new recipe edge.

## clumps   [anchors: support (1)]
<!-- XP-orb merging perf mod. Zero content. -->
- LEAVE — zero-content performance mod; no material surface to weave.

## create_hypertube   [anchors: Create, aeronautics (2)]
<!-- Player/entity transit tubes. Already ≥2. Dossier says no coherent further weave. -->
- from: create_hypertube:hypertube (tube infrastructure) | via: structural alloy input |
  to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT |
  reason: Hypertubes are player-transit, not airship hulls — M-23 is the structural alloy → airframe
  motif. Routing a structural alloy through hypertube construction would be depth-adding (tubes
  require fabricated copper/brass pipe sections) but the tube is already crafted via
  create:sequenced_assembly with Create materials; adding a *separate* structural alloy input is an
  arbitrary cost increase on a mid-tier transit item, not a sensible cross-system link. Reject.
- OK — connections sound (Create + aeronautics/logistics is the right pair). No new weave needed.

## cold_sweat   [anchors: survival (1)]
<!-- Body-temperature system. 1-anchor; two dossier candidates to evaluate. -->
- from: cold_sweat:hearth (fuel-burning climate machine) | via: create:filling / Create boiler as
  fuel-source pipe | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT |
  hook: gate the Hearth (or its smokestack upgrade) on a Create brass casing + cogwheel input — the
  colony-era climate solution requires the tech spine's fabricated parts, binding survival's warmth
  infrastructure to Create production and making a Hearth a genuine mid-game milestone.
- from: cold_sweat:goat_fur / cold_sweat:chameleon_molt | via: farmersdelight:cutting or
  create:milling | to: Create/survival | motif: M-12 | power: everyday | tone: ok |
  verdict: ACCEPT |
  hook: raw fur/molt runs through a Create mill or FD cutting board to produce cleaned insulation
  batting — a one-step processing chain that ties cold-weather armor prep to the food/Create
  processing cluster (milling hides is historically sensible) and makes the insulating material
  cost something real beyond vanilla wolf/mob kills.
- from: cold_sweat insulated armor (chameleon/hoglin sets) | via: numismatics sell | to: economy |
  motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired. A bare "sell for
  coin" link is the ambient endpoint, not a weave. Reject.
- from: cold_sweat:boiler/hearth (fuel consumers) | via: TFMG fuel → boiler intake (M-13 fuel route) |
  to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT |
  reason: M-13 reserves TFMG diesel/gasoline/lubricant for Aeronautics propulsion. Cold Sweat's hearth
  burns solid fuel (coal/wood), not refined fuel. Routing refined diesel into a hearth is a stretch —
  the hearth is a heating block, not an engine, and the fuel line is reserved for propulsion. Tone
  clash (industrial fuel for home heating) + reagent-ownership conflict. Reject.
- REWORK: dossier's "economy via M-09" candidate is retired. The two accepted candidates (M-05
  Hearth-on-Create-parts, M-12 fur/molt processing) cover Create + survival second anchors correctly.

## dungeons_arise_seven_seas   [anchors: survival (1)]
<!-- Ocean ship dungeons — loot=yes, no registered items. Loot-seed is the live surface. -->
- from: dungeons_arise_seven_seas loot tables (galleon/fortress chests) | via: loot-seed — drop
  Numismatics coin-blank (a scarce regional metal processed to coin-ready disc) in the galleon
  captain's chest | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT |
  hook: a sunken galleon's strongbox contains a few minted Numismatics coins (or coin-ready metal
  discs) — the nautical setting makes treasure-chest coin feel exactly right, and it seeds the
  player-minted currency into exploration loops without an NPC vendor.
- from: dungeons_arise_seven_seas loot tables | via: loot-seed — drop a magic reagent
  (ars_nouveau:source_gem shard or occultism ritual component) in underwater ruins | to: magic |
  motif: M-02 | power: mid | tone: ok | verdict: ACCEPT |
  hook: sea ruins hold fragments of arcane artifacts — a source gem shard or a spirit-crystal washed
  up from the deep, giving magic players a reason to explore ocean structures and creating a
  mob-drop/loot-driven reagent supply route via M-02 (mob-drop reagent sink, extended to loot-seed).
- REWORK: dossier dismissed a second anchor ("any real second pillar would come from loot tables")
  and said LEAVE. The briefing explicitly instructs: "do NOT LEAVE a loot-bearing structure mod just
  because it has no recipes — tag via: loot-seed." The two loot-seed candidates above correct this.

## minecolonies   [anchors: survival, Create (2)]
<!-- Colony/NPC settlement. Already ≥2; quarry M-05 authored. Dossier says no new edges. Let's check
     for M-37 (research gate) and M-28 (colony route) extensions not yet captured. -->
- from: minecolonies University research (colony tech tree) | via: MineColonies research gate |
  to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT |
  hook: gating a complex Create sub-assembly (or a magic hut tier) behind a colony University research
  level means the *knowledge* isn't tradeable — only the colony that ran the research can produce that
  component, creating genuine specialization and a trade demand that can't be arbitraged away by
  buying the blueprint.
- from: minecolonies colony food production (apple_pie, baked_salmon, c:foods/*) | via: colony request
  system as consumption sink | to: economy | motif: M-26 | power: everyday | tone: ok |
  verdict: REJECT | reason: Colony workers consuming food is already the ambient loop — food demand
  is the basic survival/colony operational cost, not a weave. This is "food is useful" without
  advancing the loop. Reject as ambient.
- OK — core Create+survival anchors are sound. M-37 (research gate) is the meaningful third edge.

## tidal-towns-1.3.4   [anchors: survival (1)]
<!-- Floating ocean villages, structure-only, loot=no per the dossier. No items, no loot. -->
- from: tidal-towns ocean village structures (the village buildings themselves) | via: loot-seed |
  to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT |
  reason: loot=no — the dossier reports no loot tables (vanilla villagers only). A loot-seed delivery
  requires actual loot tables. A villager-trade route (M-21) is cut. Without loot tables or items,
  there is no delivery mechanism. Reject.
- LEAVE — structure-only datapack, loot=no, no registered items; genuine zero-loot surface after
  checking loot=no. The mod's exploration value is its own reward; no weave surface available.

## formationsnether   [anchors: survival (1)]
<!-- Nether structures with loot=yes. Valid loot-seed target. Dossier dismisses economy link as M-08
     "loose" — let's examine properly. -->
- from: formationsnether loot tables (altar/castle/sanctuary chests) | via: loot-seed — drop Nether
  rare regional material (nether-quartz dust, magma cream, or a TFMG fuel-precursor) in ritual-altar
  chest | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT |
  hook: a ritual altar in the Nether holds refined nether-quartz or crude magma-salts; running these
  through Create's crusher yields an ore-doubling byproduct — Nether exploration feeds the Create
  processing spine with a Nether-locked feedstock, making Nether runs part of the resource chain.
- from: formationsnether loot tables (high-tier structures: castle/sanctuary) | via: loot-seed — drop
  a Numismatics coin-blank or a regional-scarcity metal disc in the most dangerous chests | to:
  economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT |
  hook: the most fortified Nether castle holds coin-blanks pressed from Nether metals — scarce
  Nether-regional material already minted, or ready to mint, rewarding deep-Nether raiders with
  the medium of exchange and tying Nether danger to the player economy's coin supply.
- REWORK: dossier's candidate was flagged as "[M-08 coin from processed scarcity, loose] [WEAK]" and
  nearly dismissed. The briefing's loot-seed instruction corrects this — the two loot-seed candidates
  above are the proper reading. The dossier's "otherwise leave" conclusion was premature.

== CHUNK COMPLETE ==
