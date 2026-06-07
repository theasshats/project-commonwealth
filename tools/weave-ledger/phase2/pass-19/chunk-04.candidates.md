# Phase 2 candidates — chunk-04

## solmaiddream   [anchors: survival (1)]
- LEAVE — flavour addon that rides the existing food pool; the only surface (stat milestones from varied feeding) has no material I/O to route. Forcing an edge here would be artificial.

## create_confectionery   [anchors: Create, survival (2)]
- from: chocolate bars / candies (multi-step processed luxury confections) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a specialised chocolate factory is a natural trade good — players buy sweets for buffs, especially Speed/Regeneration candies
- REWORK: existing connections sound — Create+survival is a clean 2-pillar fit; the economy ACCEPT above adds a genuine 3rd node.
- OK — connections sound (Create + survival anchors are well-grounded; M-09 is the natural 3rd)

## corgilib   [anchors: support/library (1)]
- LEAVE — zero-content code library; no items, no methods, no loot surface. Nothing to route.

## xaerominimap   [anchors: support/QoL (1)]
- LEAVE — client-only navigation UI; no items, no loot, no methods. Nothing to route.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — client-only zoom behaviour on the vanilla spyglass; no items, no loot, no methods. Nothing to route.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: four new ore types running through the crushers for doubling is exactly what Create's ore-doubling motif is for; their c:tags already provide the join key
- from: samurai_dynasty steel (c:ingots/steel) | via: create:crushing / create:mixing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai steel folded into the Create metal web via ore crushing and alloy mixing — the tech spine gains a themed alloy and the samurai gear costs real fabrication steps
- from: Yokai drops (akaname_tongue, Oni/Kitsune drops) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are spirits — their drops feeding spirit-fire transmutation or arcane imbuement feels completely natural; gives the drops a downstream use beyond just crafting samurai upgrades
- from: Yokai drops | via: bountiful bounty board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai hunts posted as bounties (regional monsters worth coin) threads the combat loop into the economy — a hunter's income stream
- from: samurai_dynasty silver_ore (c:silver overlap) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: CLAUDE.md Galosphere/Occultism silver caveat — samurai_dynasty tags its metal as silver but it may conflict with the reserved occultism silver; unifying is explicitly warned against; exclude until the silver identity is resolved
- REWORK: currently 0 inbound weaves from foreign methods — the existing "survival only" anchor is thin for a mod with 14 c:tags, 150 items, and boss-level Yokai drops; the three ACCEPTs above bring it to Create+survival+magic+economy (strong web integration).

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — client UI overlay; no items, no loot, no methods. Nothing to route.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice / nuts (c:foods/fruit, c:foods/nut) | via: farmersdelight:cooking or extradelight:juicer | to: survival→economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical fruits milled and cooked into sellable island-themed dishes / coconut oil — an obvious processing chain that connects the beach biome to the food-economy loop
- from: ecologics coconut wood planks/logs | via: create:cutting (mechanical saw) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a unique woodset going through the Create saw is a light, natural step; the crush-back to sawdust + an XP nugget keeps it in the deco-recycle motif
- REWORK: currently no inbound weave methods — two light ACCEPTs give it a Create + survival/economy pair, reaching the 2-anchor floor cleanly.

## knightlib   [anchors: support/library (1)]
- LEAVE — library/API; its bundled items (great_chalice, grail, homunculus, essences) are inert without Knight Quest, which is not in the pack. Weaving dead items is explicitly prohibited.

## create_hypertube   [anchors: Create, aeronautics (2)]
- OK — connections sound. Two clear anchors (Create kinetics + logistics/aeronautics); the tube network advances the logistics loop without needing a recipe weave. No further anchor adds coherent value.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. Drone-port logistics is a direct aeronautics/economy arm; two anchors are well-placed. Economy adjacency (delivering trade goods between players) is already the mod's function, not a recipe edge.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth / boiler (fuel-burning climate machines needing Create-scale infrastructure) | via: recipe — gate the Hearth on Create brass/casing parts (M-05 native-method gating, requiring Create components as inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a whole-base climate control system demanding real Create fabrication (brass piping, casing) makes intuitive sense — the hearth becomes a mid-game Create milestone for cold/hot biome settlement
- from: cold_sweat insulated gear (chameleon/hoglin/goat fur armor) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cold-adapted survival gear sold to crews heading into tundra/nether biomes — a seasonal supply good that naturally ties the temperature system to the trade economy
- from: cold_sweat cold/heat interactions | via: season-gated temp (Serene Seasons driving biome temp → cold_sweat activation) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasons amplify cold_sweat's danger (winter = lethal without insulation), creating a demand cycle that drives gear crafting and trade — the seasons driver feeding the pressure pillar exactly as CLAUDE.md describes
- REWORK: currently anchored only to survival with create:filling as its sole inbound method (waterskins). The three ACCEPTs bring it to Create+survival+economy, and the M-16 note formalises the Serene Seasons×cold_sweat pressure link. Connections become sound with these additions.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
- LEAVE — entity/performance QoL; no items, no loot, no methods. Nothing to route.

## immersive_paintings   [anchors: support/decoration (1)]
- LEAVE — pure player-expression decorative mod; no materials with coherent routing, no loot surface. Dossier already notes that forcing a frame-craft edge would be busywork.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — vanilla-parity recipe enabler only; no new items, no loot, no methods.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted furniture pieces (chairs, tables, shelves — mid-complexity wood assemblies) | via: create:cutting (route a representative set through the mechanical saw for planks→shaped-cuts) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a furniture set that earns Create involvement (saw-cut components before assembly) weaves the homestead-decoration tier into the tech spine — players running a Create saw for furniture parts is a natural crafting step
- from: handcrafted luxury furniture sets (fancy beds, cupboards) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: finished high-end furniture as a sellable luxury good to other players or MineColonies — the build economy already exists socially; making it literal with coin reinforces the emergent trade dynamic
- REWORK: currently 0 inbound weave methods — pure vanilla crafting. The two ACCEPTs push it to Create+economy, reaching the 2-anchor target.

## collective   [anchors: support/library (1)]
- LEAVE — shared code library (Serilum); no content, no methods, no loot. Nothing to route.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: ocean structure loot tables (galleons/fortresses/sunken ruins) | via: loot-seed — add coin, Numismatics currency drops, and/or bounty-relevant items to the chests | to: economy | motif: M-08 / M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a sunken galleon or floating fortress yielding coin bags and rare salvage threads nautical exploration directly into the player economy — "loot the seas to fund the next airship" is an obvious loop node
- REWORK: currently 0 anchors beyond survival (loot=yes but no weave drops defined). The loot-seed ACCEPT gives it a genuine economy anchor via the coin/bounty seam.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / soul_crystal (Otherside mob drops, loot=yes) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul dust and soul crystals transmuted in spirit-fire into occultism essences or used as imbuement catalysts — "the deepest dark feeds the deepest magic" is a player-obvious thematic link; the Otherside becomes a magic feeder dimension
- from: deeperdarker:heart_of_the_deep (rare Warden drop, high power) | via: recipe gate — Heart of the Deep as a required input for a high-tier occultism ritual or ars_nouveau endgame spell book | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep is the key to the Otherside portal AND a magic keystone — having it unlock an endgame ritual is the DESIGN boss-key unlock made literal
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: eldritch stone crushing back to gravel + XP nugget is a light, natural step; the sculk-stone aesthetic passing through Create crushers is not forced; already has create:crushing as an inbound method
- from: deeperdarker Otherside soul/sculk reagents (soul_dust, sculk_bone, warden_carapace) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: Otherside materials are dangerous-to-obtain endgame reagents — a scarce sellable good that makes the dimension worth expeditions beyond personal gear; secondary to the magic routing but coherent
- from: deeperdarker:sculk_bone / warden_carapace | via: occultism:spirit_fire | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: partially redundant with the soul_dust M-11 ACCEPT — two spirit-fire routings from the same mod at the same power tier is over-dense; the M-11 accept covers the "Otherside feeds magic" theme adequately; a second spirit-fire link is diminishing value
- REWORK: currently survival-only despite create:crushing already existing as an inbound method. The four ACCEPTs move it to Create+survival+magic+economy — a fully woven endgame dimension.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (low-tier kinetic source) | via: no coherent 2nd anchor routing | to: n/a | motif: n/a | power: everyday | tone: n/a | verdict: REJECT | reason: the treadmill's only material join key is the Soul Orb/Photo from touhou_little_maid, which is curated flavor not a loop pillar; no Create-→magic/economy/survival routing for a device that just generates SU; forcing a recipe gate on SU sources is against the "don't gate basics behind complex recipes" guardrail
- LEAVE — already bridges Create↔TLM via Soul Orb/Photo intake; TLM is not a loop pillar so this cross-tie doesn't constitute a 2nd system anchor; genuine zero-weave outcome for a low-tier SU source.

== CHUNK COMPLETE ==
