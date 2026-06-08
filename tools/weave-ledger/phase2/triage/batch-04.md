## almostunified — LEAVE (pure config/unification layer; zero content items; the one candidate row is REJECT consensus and has no motif — it operates on the recipe graph, not within it)

---

## charta  — slate: 2 KEEP / 9 CUT / 4 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

KEEP  | charta bar furniture → create | motif M-04 | delivery: recipe (create:cutting — sawmill produces card tables, bar stools, bar shelves from hardwood components) | milestone: v0.7.0 | why "of course": tavern furniture mass-produced on a mechanical saw is the obvious craft progression; the 5-ACCEPT / opus-corroborated card_table row is the representative phrasing
KEEP  | charta:empty_wine_glass / empty_beer_glass → survival | motif M-12 | delivery: recipe (create:filling or extradelight:bottle_fluid — Vinery wine / Alcohol Industry beer poured into Charta glassware, making it the pack's serve-ware for drink mods) | milestone: v0.13.0 | why "of course": the brewery and the bar are the same supply chain; glassware is only decoration until it's filled

CUT   | charta gambling / card matches + numismatics coins → economy | motif blank | reason: no-method — no betting hook exists; bespoke KubeJS wager event is a new mechanic, not a weave (REJECT ×5)
CUT   | charta:card_table + numismatics wagering → economy M-08 | reason: same no-method problem; M-08 is player-minted scarce metal → coin, not a card-game ante mechanic; REJECT majority
CUT   | charta:card_table M-26 consumption sink (KubeJS event hook) → economy | reason: wiring a wager-burn system is a bespoke mechanic build, not a method-routing weave; REJECT-leaning mixed
CUT   | charta:card_table / dealer_table loot-seed → economy M-33 | reason: loot-seeding a piece of furniture is not a service-for-hire weave (M-33 requires a player performing labor); REJECT ×2
CUT   | charta:empty_beer_glass / empty_wine_glass → create M-04 pressing/item_application | reason: no thematic sense (glass + pressing → nothing); REJECT ×3
CUT   | charta:oak_bar_shelf / bar_stool create:cutting or crushing M-04 | reason: the KEEP above (bar furniture → create M-04 cutting) already covers the furniture-through-Create link; separate crushing-back path adds noise
CUT   | charta bar furniture → aeronautics M-34 loot-seed | reason: decorative furniture is not a loot reward; no-method for structural-economic link; REJECT ×1
CUT   | charta:empty_wine_glass / empty_beer_glass → economy M-35 maturation | reason: Charta glassware is serve-ware, not a fermenting vessel; the maturation step is in Vinery, not Charta; single-pass ACCEPT does not outweigh the misread of M-35
CUT   | charta:empty_beer_glass / empty_wine_glass M-05 mechanical_crafting | reason: M-05 is "flagship item built in its own machine gated on Create parts"; Charta's flagship is the card table, not glassware; REJECT ×1

MERGE | charta:empty_wine_glass via vinery/alcohol_industry (3-ACCEPT) | into: KEEP fill-glassware link | reason: near-dup of the KEEP; identical from→to, same method
MERGE | charta:empty_wine_glass via alcohol_industry (2-ACCEPT) | into: KEEP fill-glassware link | reason: near-dup, same route
MERGE | charta:empty_wine_glass via supplementaries/vinery M-26 | into: KEEP fill-glassware link | reason: M-26 consumption is the ambient use of filled drinks, not a distinct weave; merged
MERGE | charta card_table (M-33 service-for-hire, 4-ACCEPT opus row) | into: KEEP bar-furniture-create link | reason: M-33 framing (tavern-keeper charges entry coin) is an emergent player-economy behavior, not a recipe or loot-table action; the physical furniture is what needs a weave; merged into KEEP as the delivery vehicle; note the M-33 *behavior* is desirable but doesn't need a separate weave entry

---

## create_connected  — slate: 2 KEEP / 22 CUT / 4 MERGE / 0 DEFER   | anchors after: create + aeronautics (now 2)

KEEP  | create_connected:kinetic_battery → aeronautics | motif M-24 | delivery: recipe (create:mechanical_crafting — kinetic battery as a banked SU source required in an Aeronautics ship propulsion or burst-thrust assembly) | milestone: v0.9.0 | why "of course": a ship engine drawing on a banked battery for calm-air thrust or burst power is exactly how a kinetic battery earns its place; 10-suggested, 8-ACCEPT, strongest phrasing
KEEP  | create_connected:fan_*_catalyst blocks (rare variants: haunting/withering/ender) → create | motif M-20 | delivery: recipe (create:item_application / deployer — the rarer fan catalysts require a deployer-application step, gating the specialist processing block behind one light Create step) | milestone: v0.7.0 | why "of course": fan catalysts are the portable form of Create fan-processing; making the rarest ones require a deploy step scales depth with rarity, light-tier M-20

CUT   | create_connected:kinetic_battery / kinetic_bridge → create M-06 sequenced_assembly | reason: kinetic battery is QoL storage, not an endgame keystone; M-06 over-depths a convenience block; REJECT ×4
CUT   | create_connected:item_silo / inventory_bridge → aeronautics M-31 | reason: logistics blocks on a ship is workflow adjacency without a recipe; no-method; REJECT ×2
CUT   | create_connected:copycat_* → create M-04 crushing | reason: copycat is a cosmetic skin, not stone/metal deco with an over-production problem; round-trip arbitrage; REJECT ×3 (and further single-pass REJECT)
CUT   | create_connected:copycat_* → aeronautics M-23 structural hull | reason: copycat wears a texture, doesn't become that block materially; misreads M-23; REJECT ×1
CUT   | create_connected:item_silo → economy M-08 numismatics depositor | reason: player-build pattern, not a recipe weave; REJECT ×1
CUT   | create_connected:item_silo / inventory_bridge → create M-05 | reason: these are Create-internal QoL blocks; M-05 is for foreign mods gating their flagship on Create parts; REJECT ×1
CUT   | create_connected:item_silo → economy (config tie, no motif) | reason: no-motif; infrastructure block; REJECT ×1
CUT   | create_connected:item_silo / inventory_bridge → economy M-31 | reason: the aeronautics link is already the KEEP above; M-31 "bulk goods require logistics" doesn't apply to a storage block; mixed/REJECT
CUT   | create_connected:brass_gearbox → aeronautics M-24 | reason: brass gearbox is a generic Create drivetrain part already inside the spine; M-24 targets *foreign* mod components; REJECT ×1 (the stronger kinetic_battery row is KEEP)
CUT   | create_connected:brass_gearbox → create M-06 | reason: M-06 is endgame flagship chain; gearbox is utility; REJECT ×1
CUT   | create_connected:fan_haunting_catalyst → magic M-19 (ship haunting context) | reason: Create-internal depth, not a new cross-system route; REJECT majority
CUT   | create_connected:fan_*_catalyst → magic M-10 (ars/occultism infusion) | reason: fan catalysts are Create-internal convenience blocks; no arcane method-pull; REJECT ×1
CUT   | create_connected:copycat_* → aeronautics M-20 item_application | reason: copycat's skin mechanic is already its vanilla interaction; adding a separate apply step is redundant; REJECT ×1
CUT   | create_connected:copycat_* → create M-04 (metal-skinned variant) | reason: copycats are cosmetic QoL, not over-produced deco; REJECT ×1
CUT   | create_connected:copycat_* panels → aeronautics M-23 deploying | reason: M-23 is structural load-bearing material; texture skin is not structural; ACCEPT minority insufficient
CUT   | create_connected:item_silo / inventory_bridge → economy M-33 | reason: logistics infrastructure is ambient Create base setup, not a demand-gating weave; REJECT ×1
CUT   | create_connected:item_silo / inventory_bridge (no motif) | reason: pure infrastructure, no cross-pillar route; REJECT ×1
CUT   | create_connected:kinetic_battery → magic M-17 createaddition:charging | reason: kinetic_battery stores SU, not FE; mismatched energy types; REJECT ×1
CUT   | create_connected:item_silo / inventory_bridge → aeronautics M-23 | reason: logistics blocks are not structural alloy; REJECT ×1
CUT   | create_connected:copycat_* → KubeJS magic skin config (no motif) | reason: no-motif; cosmetic skinning; REJECT ×1
CUT   | create_connected:control_chip → create M-06 sequenced_assembly | reason: control_chip is Create-internal; deepening Create-internal depth via M-06 is not a cross-system weave; REJECT ×1
CUT   | create_connected kinetic_battery/gearbox/clutches generic → aeronautics M-24 (opus) | reason: these are generic Create spine parts already; M-24 targets foreign-mod components; REJECT ×1

MERGE | create_connected:item_silo / inventory_bridge → aeronautics (2-ACCEPT thematic, M-24) | into: KEEP kinetic_battery→aeronautics | reason: near-dup framing of "logistics blocks on ship"; the kinetic_battery is the cleaner M-24 anchor; silo/bridge are ambient ship infrastructure
MERGE | create_connected:fan_*_catalyst → create M-20 item_application (1-ACCEPT, common fan catalysts) | into: KEEP fan_catalyst M-20 (rarer variants) | reason: same motif, same delivery; the KEEP scopes to rarer variants to avoid over-deepening common blocks
MERGE | create_connected:kinetic_battery → create M-06 sequenced_assembly (1-ACCEPT) | into: KEEP kinetic_battery→aeronautics | reason: M-06 wrong depth for this item; the aeronautics KEEP is the right anchor
MERGE | create_connected:fan_*_catalyst → create M-19 haunting (mixed-consensus) | into: KEEP fan_catalyst M-20 | reason: M-19 is Create-internal; the M-20 deploy-upgrade framing is the right anchor for the rarer catalysts

---

## ctov  — slate: 3 KEEP / 8 CUT / 1 MERGE / 0 DEFER   | anchors after: economy + magic + survival (now 3)

KEEP  | ctov structure chests → economy | motif M-08 | delivery: loot-seed (KubeJS global loot modifier — seed Numismatics coin into village/outpost chest loot tables) | milestone: v0.9.0 | why "of course": village blacksmiths have old coin; exploration was always the first step toward a player economy; 14-suggested, 13-ACCEPT strongest phrasing
KEEP  | ctov village loot tables → magic | motif M-02 | delivery: loot-seed (KubeJS global loot modifier — seed source gem shards or Ars/Occultism reagents into rural chests) | milestone: v0.11.0 | why "of course": arcane knowledge filtering out from cities into rural chests is a natural lore hook; 14-suggested, 11-ACCEPT
KEEP  | ctov outpost chests → survival | motif M-34 | delivery: loot-seed (seed boss-drop precursors or rare combat supplies into outpost chests) | milestone: v0.13.0 | why "of course": pillager outposts are danger zones; rare drops make the combat run worth the risk; 8-suggested, 7-ACCEPT

CUT   | ctov structure loot → create M-15 boss-key | reason: villages are not dungeon progression gatekeepers; thematically arbitrary; REJECT ×4
CUT   | ctov villages as MineColonies colony seed points → economy M-28 | reason: CTOV generates vanilla NPC villages; no mechanical link to MineColonies; REJECT majority
CUT   | ctov village structures (trade hub) → economy M-33 service-for-hire | reason: M-33 requires a player performing labor; loot-seeding a stall deed is closer to M-08 (already KEEP); REJECT ×2
CUT   | ctov as MineColonies colony seed (design intent, no motif) | reason: no method-routing; design observation only; REJECT ×1
CUT   | ctov chest loot → MineColonies recruitment scrolls (no motif) | reason: no motif fits; thematic but unimplementable as a weave; REJECT ×1
CUT   | ctov village loot → economy M-30 regional-scarcity | reason: M-30 requires ore-gen regional lock, not biome-specific village loot; REJECT ×1
CUT   | ctov village/outpost loot → economy M-29 cross-route | reason: M-29 is a recipe dependency; loot-seeding is not that; REJECT ×1
CUT   | ctov pillager outpost loot → magic M-02 | reason: ctov adds no mob drops; seeding into vanilla outpost loot is thematically weaker than the village M-02 KEEP; REJECT majority

MERGE | ctov biome-variant loot-seed differentiation (M-30, 1-ACCEPT) | into: KEEP ctov→economy M-08 | reason: regional differentiation of the M-08 coin seeds is an implementation detail of the KEEP loot-seed, not a separate weave; folded in

---

## dungeons_arise_seven_seas  — slate: 3 KEEP / 15 CUT / 5 MERGE / 0 DEFER   | anchors after: economy + magic (now 2; aeronautics is a 3rd via loot-gate framing)

KEEP  | galleon/fortress loot tables → economy M-08 | motif M-08 | delivery: loot-seed (KubeJS global loot modifier — seed Numismatics coin into naval chest loot) | milestone: v0.9.0 | why "of course": plundered galleon strongboxes should have old coin; pirates hoard wealth; 7-suggested, 7-ACCEPT strongest phrasing
KEEP  | galleon/fortress loot → magic M-02 | motif M-02 | delivery: loot-seed (seed Ars/Occultism reagents — source gems, arcane scrolls — into sunken-ruin / fortress chests) | milestone: v0.11.0 | why "of course": old sea-sorcerer ships carry bottled arcane cargo; ocean exploration feeds the magic reagent supply; 8-suggested, 6-ACCEPT (multiple corroborating passes)
KEEP  | galleon/fortress loot → economy M-34 | motif M-34 | delivery: loot-seed (seed scarce nautical trade goods into galleon captain cabin chests for combat-specialist trade) | milestone: v0.9.0 | why "of course": naval raiders are the pack's maritime combat specialists; they sell salvage that non-combat players can't reach; 4-suggested, 4-ACCEPT

CUT   | nautical structures → aeronautics thematic bridge (no motif) | reason: no-motif; structures are static worldgen, not functional vessels; thematic rhyme has no in-game mechanic; REJECT ×5 (including opus)
CUT   | galleon loot → aeronautics M-15 (loot-seeds aeronautics blueprint) | reason: Aeronautics schematics are player-authored items, not droppable progression; loot-seeding a schematic is not a supported method for M-15; REJECT majority
CUT   | galleon loot → aeronautics M-23 (structural alloy from loot) | reason: M-23/M-24 are crafting-construction seams, not loot-table seams; REJECT majority
CUT   | dungeon hostiles / pirate crew → magic M-02 mob-drop | reason: DASS has no unique mob drops confirmed; folded into the loot-table M-02 KEEP above; the specific "cursed sailor drops essence" framing is unconfirmed
CUT   | sea-dungeon loot → aeronautics M-31 (logistics-required bulk) | reason: M-31 is about goods needing aeronautics to move at scale; structures being distant doesn't qualify as a bulk-goods motif; REJECT ×1
CUT   | sea-dungeon loot → economy M-30 (ocean-exclusive metal) | reason: M-30 requires GTMOGS ore-gen regional lock; loot-table scarcity is a different mechanism; 1-pass ACCEPT insufficient
CUT   | galleon loot → create M-15 boss-key (no boss entity confirmed) | reason: DASS has no confirmed boss mob with a signature drop; structure chests are not boss drops; M-15 requires an actual boss entity; REJECT majority
CUT   | floating fortress loot → economy M-08 (aerial structures) | reason: the strongest M-08 KEEP already covers the nautical theme; aerial fortress is a separate DASS structure type — fold into KEEP if confirmed same loot tables
CUT   | DASS ships → aeronautics M-31 (worldgen placement as destination) | reason: same no-motif problem; destinations require an aeronautics method, not just physical elevation; REJECT ×1
CUT   | sea-dungeon loot → aeronautics M-34 navigation/chart drops | reason: navigation charts are player-authored in Aeronautics; no valid loot-seed target exists; REJECT reasoning applies
CUT   | galleon/fortress loot → survival M-34 combat supply | reason: already covered by the M-34 economy KEEP (combat specialist trades survival goods); duplicate
CUT   | DASS loot → magic M-34 (opus framing) | reason: magic M-02 KEEP is the tighter fit for magic reagents in DASS; M-34 is covered by economy KEEP; duplicate framing; 1-pass
CUT   | sunken-ruins loot → survival M-15 | reason: no boss entity; survival M-15 framing doesn't fit a structure-only mod; REJECT ×1
CUT   | DASS galleon captain/boss-key → create M-15 | reason: same no-boss-entity problem; REJECT majority

MERGE | galleon loot M-08 (5-ACCEPT, 3-ACCEPT, 2-ACCEPT, 1-ACCEPT near-dups) | into: KEEP M-08 | reason: same from→to, same delivery; strongest 7-ACCEPT phrasing is the KEEP representative
MERGE | magic M-02 near-dups (4-ACCEPT, 2-ACCEPT×2, 1-ACCEPT×3 sunken/galleon/shipwreck rows) | into: KEEP M-02 | reason: all express the same loot-seed of Ars/Occultism reagents into ocean structures
MERGE | economy M-34 near-dups (3-ACCEPT, 2-ACCEPT×2, 1-ACCEPT) | into: KEEP M-34 | reason: same combat-specialist trade framing
MERGE | aeronautics M-15 (3-ACCEPT + 1-ACCEPT opus — "boarding a sky-fortress finds airship lift/engine components") | into: KEEP M-34 + note | reason: the "aeronautics-relevant loot" idea is compelling but M-15 requires a boss entity; the component reward is better expressed as a high-value M-34 trade good (seed a structural alloy or aeronautics part as a combat-specialist reward, not a boss-key gate); merged into M-34 KEEP delivery spec
MERGE | galleon/fortress loot as M-08 coin drops (single-pass ACCEPT rows) | into: KEEP M-08 | reason: same link, different passes

---

## ecologics  — slate: 3 KEEP / 10 CUT / 4 MERGE / 0 DEFER   | anchors after: create + survival + economy (now 3)

KEEP  | ecologics:coconut (raw fruit) → create M-12 | motif M-12 | delivery: recipe (create:milling — coconut → coconut meat + husk fiber; byproduct feeds Create filter media or packing material) | milestone: v0.7.0 | why "of course": the Create mill splits a tropical crop into useful intermediates; 20-suggested, 21-ACCEPT, strongest row
KEEP  | ecologics:coconut / coconut_slice → survival M-12 | motif M-12 | delivery: recipe (farmersdelight:cooking / extradelight:juicer — coconut into tropical dishes or coconut milk) | milestone: v0.13.0 | why "of course": coconut is a tagged fruit; Farmer's Delight gets a tropical ingredient; 5-suggested, 5-ACCEPT
KEEP  | ecologics:coconut (beach-biome regional) → economy M-30 | motif M-30 | delivery: config (GTMOGS biome-specific placement — coconuts grow only on beaches; a player not near a beach must trade for coconut-based goods) | milestone: v0.9.0 | why "of course": regional scarcity is the foundation of the trade loop; a beach-locked crop is a natural trade commodity; 2-suggested, 2-ACCEPT

CUT   | ecologics:azalea_flower → magic M-10 imbuement | reason: azalea has no established magical property; tone-clash; REJECT majority (13-suggested, 7-REJECT)
CUT   | ecologics:coconut_slice → magic M-10 (effect-clearing property) | reason: tone clash; a fruit that clears effects belongs in an alchemist toolkit is plausible but REJECT majority at 10-suggested
CUT   | ecologics coconut woodset → create M-04 | reason: vanilla-style wood sets routing through milling yields nothing players don't already get; dossier flags WEAK; REJECT majority
CUT   | ecologics:coconut_husk → create M-12 (separate husk path) | reason: the coconut KEEP above already routes coconut through Create; a separate husk path is redundant sub-weave; REJECT majority
CUT   | ecologics:seashell → create M-04 crushing | reason: soft-tier deco with no particular production problem; WEAK dossier rating; REJECT majority
CUT   | ecologics:seashell → create M-03 calcium lime | reason: seashell → calcium is chemically plausible but a 2-pass ACCEPT is insufficient; no confirmed Create mixing recipe for this; CUT (low confidence)
CUT   | ecologics:azalea_flower → create M-12 milling (floral dye/powder) | reason: milling azalea flowers yields nothing players have a demand for; mixed-consensus; CUT
CUT   | ecologics:coconut woodset → create M-04 crushing | reason: same as woodset M-04 above; REJECT majority
CUT   | ecologics beach loot → economy M-08 (coconut crab coin drop) | reason: tone clash; naturalist mod dropping money is forced; REJECT ×1
CUT   | ecologics loot-seed → economy/survival M-34 | reason: ecologics has no dungeon structures; biome-creature loot is not a combat-supply node; REJECT ×2

MERGE | ecologics:coconut/coconut_slice M-12 economy framing (4-ACCEPT opus, juicer/pressing) | into: KEEP coconut→survival M-12 | reason: same processing-chain route; economy framing of "beach biome's food specialty feeds trade web" is an ambient endpoint, not a separate weave
MERGE | ecologics:coconut_husk → create M-32 byproduct (2-ACCEPT) | into: KEEP coconut→create M-12 | reason: husk fiber is the byproduct of the milling KEEP; M-32 framing of industrial circularity is folded into the KEEP delivery spec
MERGE | ecologics:azalea_flower → magic M-16 seasonal reagent (2-ACCEPT) | into: CUT | reason: M-16 requires a *material* obtainable only in a season; azalea bloom pattern is passive world-state, no routable item; CUT confirmed
MERGE | ecologics:coconut M-16 seasonal (summer-only crop, 1-ACCEPT) | into: KEEP coconut→create M-12 | reason: seasonal availability is an implementation detail of the M-12 KEEP delivery (note in spec); not a separate weave

---

## enhancedcelestials  — slate: 2 KEEP / 10 CUT / 4 MERGE / 0 DEFER   | anchors after: create + magic (now 2)

KEEP  | enhancedcelestials:meteor block → create M-04 | motif M-04 | delivery: recipe (create:crushing — meteor → iron + nickel dust + XP nugget) | milestone: v0.7.0 | why "of course": a fallen-star rock crushed open yields iron, nickel, and an XP nugget; every meteor shower event produces lootable stone that feeds the Create ore pipeline; 35-suggested, 35-ACCEPT strongest row
KEEP  | Blood/Blue Moon event-state → magic M-22 | motif M-22 | delivery: recipe (KubeJS recipe condition keyed to moon state — ars_nouveau:imbuement or occultism:ritual only completes under the relevant moon; Blood Moon for war-ritual reagent, Blue Moon for luck-attuned imbuement) | milestone: v0.11.0 | why "of course": certain rituals only complete under the right moon; timed scarcity is exactly what M-22 exists for; 27-suggested, 27-ACCEPT (opus-corroborated)

CUT   | enhancedcelestials:space_moss_block → magic M-10 imbuement | reason: space moss is ambient decoration with no coherent processing target or magical identity; REJECT majority (19-suggested, 14-REJECT)
CUT   | Harvest Moon crop-growth buff → create M-16 seasonal reagent | reason: Harvest Moon is a passive global growth modifier, not a new item; no routable material; REJECT majority (10-suggested, 8-REJECT)
CUT   | enhancedcelestials:space_moss_block → create M-12 milling | reason: space moss is deco; arbitrary processing with no clear product identity; REJECT ×4
CUT   | enhancedcelestials:space_moss_block → create M-04 milling/deco | reason: same; forced arbitrary edge; REJECT ×4
CUT   | Blood Moon mob-drop windfall → economy M-34 | reason: organic supply boost from mob-surge is the ambient loop, not a weave; REJECT majority
CUT   | Blue Moon Luck buff → economy M-22 loot-seed coin | reason: the Luck buff already upgrades loot tables globally; piggybacking a coin drop is an NPC faucet (retired M-09 logic); REJECT ×2
CUT   | Harvest Moon → create M-16 (crop-growth buff as seasonal hook, various phrasings) | reason: M-16 requires a material that only exists/grows in a season; the Harvest Moon is a passive buff, not a gated item drop; REJECT repeated across passes
CUT   | space_moss_bug_spawn_egg → magic M-11 spirit_fire | reason: cosmetic critter spawn egg transmutation is arbitrary; REJECT ×1
CUT   | enhancedcelestials:meteor → magic M-10 imbuement | reason: the Create M-04 crush KEEP is the correct anchor for meteor; arcane infusion is a weaker fit; REJECT ×1
CUT   | Blood Moon as passive atmosphere, no mechanic | reason: explicitly against M-22 guidance ("leaving moons as atmospheric misses M-22"); REJECT ×1

MERGE | Blood Moon Blood Moon event-as-precondition on occultism:ritual (3-ACCEPT) | into: KEEP Blood/Blue Moon → magic M-22 | reason: near-dup; same delivery (moon-state-gated ritual)
MERGE | Blue Moon Luck buff → magic M-22 imbuement (3-ACCEPT) | into: KEEP Blood/Blue Moon → magic M-22 | reason: near-dup; Blue Moon imbuement is the same M-22 delivery
MERGE | lunar event state Blood/Blue Moon occultism:ritual (1-ACCEPT) | into: KEEP | reason: near-dup
MERGE | enhancedcelestials:meteor → magic M-22 (lunar-material → celestial essence via spirit-fire, 1-ACCEPT) | into: KEEP meteor→create M-04 | reason: the Create crushing KEEP is the primary anchor for meteor; magic framing is a secondary use that doesn't add a new pillar anchor (enhancedcelestials already has magic via M-22); fold as a delivery note if desired

---

## fluid  — slate: 2 KEEP / 13 CUT / 0 MERGE / 0 DEFER   | anchors after: aeronautics + survival (now 2)

KEEP  | fluid:centrifugal_pump / smart_fluid_interface → aeronautics M-13 | motif M-13 | delivery: recipe (design — centrifugal_pump + smart_fluid_interface as the required fluid-routing components in an Aeronautics ship fuel system, moving TFMG diesel from tank to engine intake) | milestone: v0.9.0 | why "of course": a ship needs plumbing; the centrifugal pump and smart interface are what move fuel to the engine; 1-ACCEPT opus-corroborated; fits the reagent-ownership table (TFMG diesel is the reserved propulsion fuel)
KEEP  | fluid:aqueduct / copper_tap → survival M-16 | motif M-16 | delivery: config (Serene Seasons seasonal interaction — aqueduct channels spring meltwater to irrigate seasonal crops; winter frosts the channel; a seasonal-reagent water-routing step) | milestone: v0.13.0 | why "of course": aqueduct as spring irrigation and winter blockage is a natural seasonal-scarcity hook; 3-suggested, 2-ACCEPT

CUT   | fluid:centrifugal_pump / smart_fluid_interface → aeronautics M-24 drivetrain | reason: these are fluid-logistics parts, not mechanical drivetrain components (rotors/engines); M-24 mismatch; REJECT majority
CUT   | fluid:centrifugal_pump / smart_fluid_interface → aeronautics M-23 structural | reason: M-23 is structural alloy; fluid interfaces are not load-bearing hull material; REJECT majority
CUT   | fluid:neon_tube → create M-04 crushing | reason: cosmetic plumbing-mod lighting; low signal; REJECT majority
CUT   | fluid:honeycomb_mold → create M-12 filling (honey fluid) | reason: the honeycomb_mold is a manufacturing tool, not an ingredient to route through; mixed consensus, insufficient
CUT   | fluid:neon_tube → create M-20 toolbox_dyeing | reason: neon tubes already made through Create methods; redundant; REJECT ×1
CUT   | fluid:smart_fluid_interface → aeronautics M-23 (flow-gating valve as structural) | reason: M-23 is structural; a valve is not; REJECT ×1
CUT   | fluid:redstone_valve → create M-20 deployer gate | reason: valves already made via create:deploying; existing internal weave; REJECT ×1
CUT   | fluid:copper_tap + aqueduct → create M-04 crushing (functional tools) | reason: M-04 is for deco scrap, not functional plumbing tools; REJECT ×1
CUT   | fluid:smart_fluid_interface → Create fluid networks on ships (no motif) | reason: behavioral integration, no recipe-routing; REJECT ×1
CUT   | fluid:smart_fluid_interface → aeronautics M-24 (fluid interface as drivetrain) | reason: fluid interface is logistic, not propulsion drivetrain; REJECT ×1
CUT   | fluid:centrifugal_pump → create M-05 (mechanical_crafting gate) | reason: already covered — the aeronautics KEEP establishes the Create dependency; a separate M-05 flag is redundant; 1-pass ACCEPT insufficient
CUT   | fluid:centrifugal_pump → economy M-31 (bulk logistics at scale) | reason: M-31 is about bulk *goods* requiring aeronautics; a pump is the equipment, not the good; mixed/1-ACCEPT insufficient
CUT   | fluid:copper_tap / copper_sink → magic/survival (no motif) | reason: no-motif; copper plumbing has no sensible magic or survival angle; REJECT ×1

---

## knightlib  — LEAVE (pure library framework; KnightQuest parent mod is absent from the pack; all candidate content — great_essence, homunculus, chalice — is inert without its parent; all 5 rows are REJECT consensus citing absent parent)

---

## letmefeedyou  — LEAVE (single candidate row; M-33 REJECT; the feeding interaction is a player-behavior QoL mod with no material to route and no specialist-labor weave; zero content items of its own)

---

## modonomicon  — LEAVE (guidebook framework; 4 rows all REJECT or low-confidence; the book item is documentation, not a reagent; M-37 framing rejected as tone clash; one 1-ACCEPT row for "modonomicon book as research-unlock ingredient" is too low confidence and the delivery method is unconfirmed — LEAVE pending a confirmed MineColonies research mechanic that can consume a book item)

---

## rechiseled  — slate: 2 KEEP / 8 CUT / 2 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | rechiseled decoration blocks → create M-04 | motif M-04 | delivery: recipe (rechiseledcreate Mechanical Chisel on Create rotational power — the entire 3600+ decorative block palette becomes automatable through the Create spine via the companion already in pack) | milestone: v0.7.0 | why "of course": the Mechanical Chisel (rechiseledcreate, in-pack) runs chiseling on Create rotation; the builder's palette is Create-powered; 22-suggested opus-corroborated, 25-ACCEPT strongest row
KEEP  | rechiseled high-detail stone variants → economy M-28 | motif M-28 | delivery: recipe (MineColonies Builder hut request — colony schematics request specific rechiseled stone variants for tier-up builds, making the chisel specialist a colony material supplier) | milestone: v0.9.0 | why "of course": MineColonies Builder huts requesting chiseled brick for colony tier-ups is a concrete demand-gate; 3-suggested, 2-ACCEPT

CUT   | rechiseled blocks → aeronautics M-23 structural hull | reason: M-23 requires load-bearing alloy; chiseled deco is cosmetic cladding; REJECT ×2
CUT   | rechiseled stone → loot-seed survival M-34 | reason: players do not loot decorative bricks as rewards; incoherent; REJECT ×1
CUT   | rechiseled deco → magic M-10 imbuement | reason: texture-swap blocks have no magical valence; REJECT ×1
CUT   | rechiseled metal variants → create M-20 item_application | reason: M-20 is deploy-upgrade; applying a metal deco variant as an upgrade has no sensible recipe path; REJECT ×1
CUT   | rechiseled blocks → economy M-26 (colony upkeep consumption) | reason: chiseled blocks are not burned/consumed as ongoing upkeep; M-26 mismatch; REJECT ×1
CUT   | rechiseled deco as aeronautics hull aesthetic | reason: same as M-23 CUT; cosmetic, not structural; REJECT ×1
CUT   | rechiseled chiseled blocks → MineColonies M-28 (Builder hut, 2-REJECT) | reason: chiseled blocks are not cheaper via colony route; M-28 requires cheaper/faster production or colony-lock, not mere consumption; REJECT ×2
CUT   | rechiseled metal deco variants create:crushing M-04 (2-ACCEPT) | reason: the rechiseledcreate Mechanical Chisel already covers the Create connection; a separate crushing-back path adds noise without a new pillar; near-dup of KEEP

MERGE | rechiseled chiseling recipe groups → create M-20 Mechanical Chisel (2-ACCEPT opus) | into: KEEP rechiseled→create M-04 | reason: M-20 framing (Mechanical Chisel as a deploy-application upgrade) and M-04 framing (deco through Create rotation) describe the same physical mechanic; M-04 is the correct motif (the chisel runs as a Create-powered batch process, not a one-off item_application upgrade); merged
MERGE | rechiseled blocks as colony building material M-28 (1-ACCEPT) | into: KEEP rechiseled→economy M-28 | reason: near-dup of the 3-suggested KEEP; same delivery

---

## samurai_dynasty  — slate: 4 KEEP / 26 CUT / 12 MERGE / 0 DEFER   | anchors after: create + magic + economy + survival (now 4)

KEEP  | samurai_dynasty gem/jade/ruby/onyx/aquamarine ores → create M-03 | motif M-03 | delivery: recipe (create:crushing — ore-doubling for all four gem ores; standard Create ore-reward pattern) | milestone: v0.7.0 | why "of course": new gem ores get the same Create ore-doubling reward every other ore enjoys; 20-suggested, 20-ACCEPT strongest; steel also tagged c:ingots/steel folds in via tag unification
KEEP  | samurai_dynasty:akaname_tongue / Yokai mob drops → magic M-11 | motif M-11 | delivery: recipe (occultism:spirit_fire — Yokai drops transmute into occult essences; Yokai are spirit-world creatures in Japanese folklore) | milestone: v0.11.0 | why "of course": a Yokai's tongue burning in spirit-fire is the most natural recipe in the pack; 14-suggested, 14-ACCEPT
KEEP  | samurai_dynasty Yokai drops → economy M-34 | motif M-34 | delivery: emergent (combat specialist farms Yokai for drops — akaname_tongue, kitsune pelt, oni horn — and trades to magic/crafting players; rare drops are the commodity) | milestone: v0.9.0 | why "of course": non-combat players need Yokai drops for magic/gear work but can't or won't hunt Tengu; 5-suggested opus-corroborated, 5-ACCEPT
KEEP  | samurai_dynasty jade/ruby/onyx/aquamarine gems (regional ores) → economy M-30 | motif M-30 | delivery: config (GTMOGS regional vein placement — jade only in jungle-adjacent deep regions, aquamarine in ocean-floor deepslate; players in different biomes must trade gem-forged goods) | milestone: v0.9.0 | why "of course": gem ores only spawn in distinct biome columns; armor-forged goods from those gems are region-locked by default; 2-suggested, 2-ACCEPT (corroborated by multiple 1-pass rows)

CUT   | samurai_dynasty:silver_ore / silver ingot → create M-03 (any silver route) | reason: CLAUDE.md hard-warns — samurai_dynasty tags its silver as c:*silver which MUST NOT be unified with Galosphere palladium or Occultism silver; any silver unification row is a landmine; REJECT majority and explicit CLAUDE.md prohibition; ALL silver rows CUT
CUT   | samurai_dynasty:silver → create M-03 / numismatics M-08 / magic M-29 / occultism silver chain | reason: same silver caveat — all silver unification attempts CUT regardless of framing
CUT   | samurai_dynasty:steel_ingot → numismatics M-08 | reason: c:ingots/steel is shared with TFMG and create_ironworks; minting shared-tag steel as a coin metal would create tag-unification ambiguity; REJECT majority
CUT   | samurai_dynasty spirit_stone blocks → create M-04 crushing | reason: spirit stone is a culturally significant Shinto-shrine build palette; recycling to rubble is thematically disrespectful; REJECT majority (8-suggested, 6-REJECT)
CUT   | samurai_dynasty:steel → aeronautics M-23 structural (c:ingots/steel) | reason: create_ironworks also provides c:ingots/steel for M-23; two sources of the same tagged material create a confusing double-anchor; REJECT ×1 + tag-unification concern
CUT   | samurai_dynasty katana/spear → create M-06 sequenced_assembly (weapon forging chain) | reason: feudal blades forged on a factory assembly line is a tone clash with the mod's aesthetic; REJECT ×2
CUT   | samurai_dynasty:jade → magic M-10 imbuement (double-spend) | reason: jade already has the M-03 ore-doubling route; adding an arcane infusion path creates double-spend on the same gem; reagent-ownership concern; REJECT ×2
CUT   | samurai_dynasty Yokai drops → magic M-10 imbuement (Ars) | reason: M-11 spirit_fire is the stronger thematic fit for spirit-creature drops (already KEEP); imbuement would duplicate the same sink; REJECT majority at 9-suggested
CUT   | samurai_dynasty:steel → create M-05 pressing/mechanical_crafting | reason: steel is a shared tag (c:ingots/steel); gating its production behind M-05 would affect all sources; tone mismatch for a combat-origin alloy; REJECT majority
CUT   | samurai_dynasty:steel → TFMG hot_blast / M-03 unification | reason: TFMG also produces c:ingots/steel; unifying is the same double-spend / tag-overlap problem; REJECT majority
CUT   | samurai_dynasty katana/spear → create M-20 deploy/item_application | reason: M-20 is a light single-step upgrade; wrapping self-contained combat gear in a Create deploy step is forced; REJECT ×2
CUT   | samurai_dynasty:steel → create M-29 cross-route (tfmg blast furnace dependency) | reason: c:ingots/steel unification makes this ambiguous; same tag-overlap issue; 2-pass ACCEPT insufficient
CUT   | samurai_dynasty aquamarine/ruby → magic M-10 imbuement | reason: the gem ores are already covered by M-03 Create ore-doubling; adding an arcane path for aquamarine/ruby creates double-spend on regional gems; 2-pass ACCEPT insufficient vs. tag concerns
CUT   | samurai_dynasty weapons/armor M-34 (traded goods) | reason: M-34 KEEP above covers Yokai drops as the combat-specialist commodity; weapons/armor from the player are ambient trade, not a weave
CUT   | samurai_dynasty:steel M-12 (create:mixing or tfmg:industrial_blasting) | reason: c:ingots/steel tag-overlap makes this a tag-unification operation, not a recipe weave; 1-pass ACCEPT insufficient
CUT   | samurai_dynasty:aquamarine/onyx as M-07 attunement catalyst | reason: reagent-ownership — M-07 catalyst role is already filled by galosphere:allurite_shard / lumiere_shard; introducing competing catalysts fragments the system; REJECT ×1
CUT   | samurai_dynasty:spirit_stone as MineColonies colony material M-28 | reason: the mod's spirit_stone crushing is already CUT (tone); a colony-material demand for it would require the crush CUT to be reinstated; mixed/1-ACCEPT each; insufficient without spirit_stone in the recipe graph
CUT   | samurai_dynasty:katana Yokai-absorption → magic M-29 cross-route (ars binding) | reason: the katana's native kill-gate mechanic is the mod's own mechanic; adding a mandatory Ars imbuement binding step would require KubeJS hooks into a native mechanic; 1-pass ACCEPT; insufficient for the complexity cost
CUT   | samurai_dynasty Yokai spawn → survival M-16 / M-22 seasonal/lunar gating | reason: spawn-rate config (Serene Seasons autumn boost, Blood Moon surge) is a config/tuning decision, not a recipe weave; no material is routed through a method; 1-pass ACCEPT; no-method for M-16/M-22
CUT   | samurai_dynasty:cloth → economy M-28 colony Tailor | reason: samurai_dynasty:cloth presence in item list is unconfirmed as a tradeable good the colony Tailor would actually request; 1-pass ACCEPT; insufficient confidence
CUT   | samurai_dynasty:jade → economy M-08 numismatics gem-coin | reason: jade is already M-30 regional scarcity KEEP; minting jade into coin is an ambient endpoint (selling a scarce regional good), which is the retired M-09 logic; CUT

MERGE | samurai_dynasty gem ores M-03 near-dups (5-ACCEPT×2 opus, 3-ACCEPT×3, 1-ACCEPT×3) | into: KEEP gem ores→create M-03 | reason: all express the same four-gem ore-doubling route; representative is 20-ACCEPT row
MERGE | samurai_dynasty:steel M-03 (8-ACCEPT opus, 6-ACCEPT, 3-ACCEPT, 1-ACCEPT multiple) | into: KEEP gem ores→create M-03 | reason: c:ingots/steel is tag-compatible with the gem M-03 KEEP; the ore-doubling pattern covers steel as a processed alloy via create:mixing (iron + coke); merged into KEEP delivery note
MERGE | Yokai drops M-11 spirit_fire near-dups (9-suggested, 6-suggested, 4-suggested, 1-suggested multiple) | into: KEEP Yokai→magic M-11 | reason: all express the same spirit_fire transmutation; representative is 14-ACCEPT row
MERGE | Yokai drops M-02 (5-ACCEPT opus — "yokai folklore drops are spirit-stuff") | into: KEEP Yokai→magic M-11 | reason: M-11 (spirit_fire transmutation) is the correct motif for spirit-creature drops; M-02 framing merged
MERGE | Yokai drops M-10 imbuement (Ars, various phrasings, net REJECT) | into: CUT | reason: M-11 is the accepted anchor; M-10 is a duplicate with weaker thematic fit
MERGE | samurai_dynasty M-34 economy Yokai supply (2-ACCEPT, 1-ACCEPT multiple) | into: KEEP Yokai→economy M-34 | reason: near-dups of the M-34 KEEP
MERGE | samurai_dynasty gem M-30 near-dups (1-ACCEPT×3 — jade only / gem scarcity / steel region-locked) | into: KEEP gem→economy M-30 | reason: all express the same regional ore-scarcity framing
MERGE | samurai_dynasty:steel M-23 aeronautics (2-ACCEPT) | into: CUT | reason: tag-unification conflict with create_ironworks; folded into CUT reasoning
MERGE | samurai_dynasty:jade M-07 attunement catalyst (1-ACCEPT — "jade at corners of enchanting apparatus") | into: CUT | reason: reagent-ownership conflict with galosphere catalysts; CUT confirmed
MERGE | samurai_dynasty:katana → magic M-05 (Blaze Enchanter liquid XP, 1-ACCEPT) | into: CUT | reason: speculative — requires confirmed Blaze Enchanter mechanic interaction with a third-party weapon; 1-pass insufficient
MERGE | samurai_dynasty spirit_stone → create M-04 (1-ACCEPT "crushed spirit stone") | into: CUT | reason: spirit-stone crushing is thematically problematic (Shinto aesthetic); CUT confirmed
MERGE | samurai_dynasty M-16 seasonal Yokai spawn | into: CUT | reason: no-method (spawn-rate tuning is not a weave)

---

## sky_whale_ship  — slate: 2 KEEP / 10 CUT / 5 MERGE / 0 DEFER   | anchors after: aeronautics + economy (now 2)

KEEP  | sky_whale_ship loot chests → aeronautics M-15 | motif M-15 | delivery: loot-seed (KubeJS loot modifier — seed Create Aeronautics progression items in whale-back chest loot; balloon silk, copper casing components, airframe blueprint fragments; reaching a whale requires an airship) | milestone: v0.9.0 | why "of course": flying up to a sky whale on your airship and looting propulsion parts inside is what the aeronautics pillar is for; 17-suggested, 17-ACCEPT strongest row
KEEP  | sky_whale_ship loot → economy M-34 | motif M-34 | delivery: loot-seed (seed rare tradeable cargo in whale-back chests; combat specialist who can fly there farms drops that ground-side players trade for) | milestone: v0.9.0 | why "of course": whale-back rarities harvested by a flying combat specialist become traded goods; 6-suggested, 5-ACCEPT

CUT   | sky_whale loot → magic M-02 (arcane reagents) | reason: whale vibe is whimsical-adventure, not arcane; seeding Ars/Occultism reagents aboard a sky whale is thematically arbitrary; REJECT majority (12-suggested, 6-REJECT)
CUT   | sky_whale loot → aeronautics M-23 (structural alloy from loot) | reason: M-23 is a crafting-construction seam, not a loot-table seam; seed an aeronautics-relevant component as trade good (M-34) instead; REJECT majority
CUT   | sky_whale loot → economy M-08 (Numismatics coin) | reason: seeding coin from a chest is the retired M-09/bare-sell logic (an NPC coin faucet); explicitly banned; REJECT majority
CUT   | sky_whale as thematic aeronautics endpoint (no method) | reason: no-motif; "they're in the sky and airships go in the sky" is not a loop-advancing weave; REJECT ×1
CUT   | sky_whale structures → aeronautics M-31 (bulk goods logistics) | reason: M-31 is about bulk-goods movement; sky whales are exploration destinations, not logistics nodes; REJECT ×1
CUT   | sky_whale → aeronautics M-29 cross-route dependency (no recipe) | reason: M-29 is a recipe dependency; worldgen structures have no recipe; REJECT ×1
CUT   | sky_whale loot → economy M-30 regional scarcity | reason: M-30 requires GTMOGS ore-gen lock; sky-whale loot is exploration-gated, not region-locked by ore-gen; REJECT ×1
CUT   | sky_whale → create M-04 (vanilla blocks, no crush target) | reason: sky whale structures are vanilla blocks; no foreign block ids to recycle; REJECT ×1
CUT   | sky_whale → economy M-08 (Numismatics coin, 3-suggested) | reason: same retired-economy CUT as above
CUT   | sky_whale loot → survival M-34 (2-ACCEPT) | reason: already covered by economy M-34 KEEP; survival framing is a near-dup; merged

MERGE | sky_whale M-15 near-dups (6-ACCEPT, 5-ACCEPT, 4-ACCEPT, 2-ACCEPT opus×2, 1-ACCEPT×4) | into: KEEP M-15 | reason: all express the same aeronautics-progression loot-seed; representative is 17-ACCEPT row
MERGE | sky_whale M-34 near-dups (4-ACCEPT, 2-ACCEPT×2, 1-ACCEPT) | into: KEEP M-34 | reason: same combat-specialist trade framing
MERGE | sky_whale loot → survival M-34 (2-ACCEPT) | into: KEEP M-34 economy | reason: near-dup; survival framing is the same delivery
MERGE | sky_whale M-22 moon-event gating (1-ACCEPT — "hostile whale harder on Blood Moon") | into: KEEP M-15 | reason: moon-event gating of loot weight is an implementation detail of the KEEP delivery; folded as a delivery note
MERGE | sky_whale M-05 framing (1-ACCEPT opus — "loot rewards the next tier of ship-tech") | into: KEEP M-15 | reason: M-05 is "flagship item built in its own machine"; sky whale loot is M-15 (boss-key style loot-gate); merged into KEEP

---

## smokeleafindustries  — slate: 3 KEEP / 15 CUT / 6 MERGE / 0 DEFER   | anchors after: create + survival + economy (now 3)

KEEP  | smokeleafindustries generator FE output → create M-17 | motif M-17 | delivery: config (createaddition:charging / FE↔kinetic bridge — the smokeleaf generator burns biomass → FE → Create Addition converts to SU rotational power, folding the grow-op into the Create spine) | milestone: v0.7.0 | why "of course": the hemp farm makes FE; Create Addition's alternator is exactly the FE↔SU bridge; 12-suggested, 12-ACCEPT strongest row
KEEP  | smokeleafindustries:*_gummy / *_extract (refined consumables) → survival M-26 | motif M-26 | delivery: native (effect items consumed for status effects — gummies and extracts are spent on use, creating repeating demand; expedition fuel that runs out) | milestone: v0.13.0 | why "of course": effects run out; players need a refill; 4-suggested, 3-ACCEPT; corroborated by multiple 1-pass rows
KEEP  | smokeleafindustries refined extracts / gummies → economy M-28 | motif M-28 | delivery: config (MineColonies apothecary/healer hut requests effect consumables as a supply item — the colony medic stocks hemp gummies; colony demand creates persistent pull) | milestone: v0.9.0 | why "of course": a colony apothecary requesting analgesic edibles makes the strain farmer a colony supplier; 3-suggested, 3-ACCEPT

CUT   | smokeleafindustries raw hemp/buds → create M-12 milling (alternate grind) | reason: smokeleafindustries has its own grinder/dryer processing chain; routing hemp through Create milling as a parallel path adds redundancy, not a new pillar; REJECT majority at 15-suggested (the M-17 FE bridge is the real Create anchor)
CUT   | smokeleafindustries products → magic M-10 imbuement (Ars) | reason: tone clash — Ars Nouveau crystalline-arcane aesthetic does not absorb hemp extracts; "herb → arcane reagent" is thematically forced; REJECT majority at 9-suggested
CUT   | smokeleafindustries FE machines → create M-05 (generator gated on Create parts) | reason: the M-17 FE bridge already establishes the Create anchor; M-05 would require gating the smokeleaf machines on Create components — correct concept but already served by M-17; REJECT/mixed; not a separate weave
CUT   | smokeleafindustries hemp building blocks → create M-04 crushing | reason: hemp planks/bricks are functionally vanilla wood/stone equivalents; M-04 deco-recycle adds noise without signal; REJECT ×4
CUT   | smokeleafindustries strain seeds → survival M-16 seasonal | reason: strain growth is year-round (grow-pots are indoor/artificial light); no seasonal gating exists in the mod; forcing M-16 is artificial; REJECT majority
CUT   | smokeleafindustries extracts/gummies → magic M-10 Ars imbuement | reason: same tone-clash CUT as above; additional 1-pass rows; REJECT
CUT   | smokeleafindustries:*_extract → create M-29 mixing (lubricant/solvent) | reason: TFMG lubricant is the reserved reagent for M-13 aeronautics fuel; introducing a competing lubricant risks reagent double-spend; REJECT ×1
CUT   | smokeleafindustries generator inputs → create M-13 fuel→propulsion | reason: M-13 is reserved for Aeronautics propulsion fuel (TFMG diesel/gasoline); routing hemp-derived fuel through M-13 would dilute the reagent-ownership table; REJECT ×2 explicit
CUT   | smokeleafindustries:sequencer / flagship machine → create M-05 sequenced_assembly gate | reason: the M-17 FE bridge is the Create anchor; a separate M-05 machine-gating row would require authoring a KubeJS recipe that gates the sequencer on Create brass — viable in principle but the M-17 + M-28 KEEPs already give full 3-anchor coverage; low priority; mixed
CUT   | smokeleafindustries extracts → Bountiful bounty M-26 | reason: the M-26 KEEP and M-28 KEEP already cover the consumption-sink and colony-demand angles; bounty board framing is a sub-case of M-28 colony demand; merged
CUT   | smokeleafindustries strain extracts → numismatics M-08 | reason: extracts are not a metallic commodity; M-08 is player-minted scarce regional metal → coin; mismatch; REJECT ×2
CUT   | smokeleafindustries dealer/stoner villager trades → economy M-29 Trading Depot | reason: villager trades routed through a Trading Depot is an ambient player-economy pattern, not a recipe-gated cross-route dependency; 1-pass ACCEPT insufficient
CUT   | smokeleafindustries refined extracts → economy M-34 (bounty combat supply) | reason: M-28 colony KEEP and M-26 consumption KEEP already give two economy-side anchors; M-34 framing ("high-rep boards request extracts") is a sub-case of M-28; redundant anchor
CUT   | smokeleafindustries:mutator → create M-20 deployer (seed mutation) | reason: the mutator is its own machine with a UI; routing through create:deploying is thematically forced; REJECT ×1
CUT   | smokeleafindustries hemp biomass / byproduct → generator M-32 byproduct feed | reason: the M-17 FE bridge already captures the generator as the Create anchor; a separate M-32 byproduct framing is an implementation detail of that KEEP; merged

MERGE | smokeleafindustries M-17 near-dups (9-ACCEPT, 6-ACCEPT, 2-ACCEPT opus, 1-ACCEPT×4) | into: KEEP M-17 | reason: all express the same FE↔kinetic bridge; representative is 12-ACCEPT row
MERGE | smokeleafindustries M-26 near-dups (2-ACCEPT, 1-ACCEPT×4) | into: KEEP M-26 | reason: all express the same consumption-sink for refined consumables
MERGE | smokeleafindustries M-28 (1-ACCEPT) | into: KEEP M-28 | reason: near-dup; same colony apothecary demand
MERGE | smokeleafindustries raw hemp M-12 milling (12-opus-ACCEPT, various phrasings) | into: CUT | reason: the M-17 bridge is the Create anchor; hemp milling as a parallel path adds redundancy; the milling rows fail as a second Create pillar because smokeleafindustries' own grinder covers the same tier
MERGE | smokeleafindustries generator M-05 (4-ACCEPT, 6-ACCEPT, 1-ACCEPT×3) | into: KEEP M-17 | reason: M-05 framing ("machines gated on Create parts") and M-17 framing ("FE bridge") both establish the same Create anchor; M-17 is the simpler and confirmed mechanism; merged
MERGE | smokeleafindustries hemp building M-04 near-dups | into: CUT | reason: same hemp-planks CUT reasoning

---

## undergroundworlds  — slate: 3 KEEP / 13 CUT / 5 MERGE / 0 DEFER   | anchors after: magic + create + economy (now 3)

KEEP  | undergroundworlds:spider_fang (Black Recluse drop) → magic M-11 | motif M-11 | delivery: recipe (occultism:spirit_fire — spider fang transmutes into an occult essence; poison/curse → spirit is the natural alchemical path) | milestone: v0.11.0 | why "of course": a fang soaked in spirit-fire distills into an occult essence — the spider catacombs have always felt cursed; 31-suggested (opus), 31-ACCEPT strongest row in batch
KEEP  | undergroundworlds temple/pyramid bricks → create M-04 | motif M-04 | delivery: recipe (create:crushing — ancient masonry → crushed stone + XP nugget; lossy salvage; a miner's consolation when remodeling a dungeon) | milestone: v0.7.0 | why "of course": dungeon masonry crushing back to rubble and XP is the standard M-04 pattern for ruins content; 20-suggested, 14-ACCEPT (opus-corroborated); second strongest row
KEEP  | undergroundworlds dungeon loot (loot=yes) → economy M-34 | motif M-34 | delivery: loot-seed (KubeJS global loot modifier — seed coin + magic reagents into dungeon chests; combat specialist trades dungeon rarities: desert_charm, antidote_flask, freezing tools) | milestone: v0.9.0 | why "of course": a dungeon-clearing specialist trades items non-combat players can't obtain; desert_charm and antidote_flask are high-value consumables; 2-suggested, 2-ACCEPT; corroborated by M-08 + M-34 loot rows

CUT   | undergroundworlds:spider_fang → magic M-02 imbuement (Ars) | reason: M-11 spirit_fire is the thematically tighter fit for a poison/curse reagent; imbuement would duplicate the same sink; REJECT majority (21-suggested, 7-REJECT)
CUT   | undergroundworlds:spider_fang → magic M-10 imbuement | reason: same as above; REJECT majority (10-suggested, 9-REJECT)
CUT   | undergroundworlds:desert_charm / antidote_flask → magic M-10 imbuement upgrade | reason: the charms already grant clean status-immunity; consuming them as arcane upgrade inputs destroys their function; REJECT majority (16-suggested, 10-REJECT)
CUT   | undergroundworlds:freezing_* tools → create M-19 haunting | reason: freezing tools are dungeon loot drops; gating loot-found gear behind a Create recipe contradicts dungeon-reward design; REJECT ×2
CUT   | undergroundworlds:antidote_flask / desert_charm → occultism M-02 ritual ingredient | reason: spirit_fire M-11 already gives the magic pillar; routing charms into ritual as well over-concentrates one pillar's supply; REJECT ×2
CUT   | undergroundworlds:blade_of_the_jungle / freezing tools → create M-15 boss-key | reason: these weapons are already the dungeon payoff; gating a Create recipe on them is arbitrary; the dungeon has no tech theme; REJECT ×2
CUT   | undergroundworlds Ashan drop → occultism M-02 ritual | reason: Ashan has no documented unique drop; spider_fang already covers the magic-reagent niche; REJECT majority
CUT   | undergroundworlds dungeon loot → economy M-08 coin loot-seed | reason: the M-34 KEEP delivery already includes coin seeding as part of the dungeon-loot package; M-08 as a standalone is redundant here (and risks bare-sell framing); merged into M-34 KEEP
CUT   | undergroundworlds:freezing_sword / freezing_pickaxe → create M-04 crushing | reason: freezing tools are magical gear items; crushing them back yields no defined material; REJECT ×1
CUT   | undergroundworlds:spider_fang → economy M-30 regional biome | reason: M-30 requires GTMOGS ore-gen regional lock; spider cave biome distribution is worldgen flavor, not a coin-or-recipe gate; 2-pass ACCEPT insufficient for a new pillar
CUT   | undergroundworlds:axe_of_regrowth functional synergy → create M-12 | reason: tool behavior (auto-replant) is not a material flow; no-method; REJECT ×1
CUT   | undergroundworlds:freezing_* tools → magic M-10/M-17 FE charging | reason: dungeon-magic ice tools are thematically distant from FE charging or arcane infusion; REJECT ×2

MERGE | undergroundworlds temple bricks M-04 near-dups (16-ACCEPT opus, 3-ACCEPT opus, 1-ACCEPT) | into: KEEP temple bricks→create M-04 | reason: same crushing delivery; representative is 20-ACCEPT row
MERGE | undergroundworlds:spider_fang M-11 + M-02 Occultism spirit_fire (1-ACCEPT opus, M-02 framing) | into: KEEP spider_fang→magic M-11 | reason: M-11 is the correct motif for spirit_fire transmutation; M-02 framing merged
MERGE | undergroundworlds dungeon M-08 coin loot (2-ACCEPT) | into: KEEP dungeon→economy M-34 | reason: coin seeding is included in M-34 delivery; not a separate weave
MERGE | undergroundworlds:antidote_flask / desert_charm M-26 consumption sink (1-ACCEPT) | into: KEEP dungeon→economy M-34 | reason: charms consumed during dungeon runs are an ambient use; M-34 covers the trade-supply angle; folded as a delivery note
MERGE | undergroundworlds:spider_fang → economy M-34 (combat specialist farms fangs, 1-ACCEPT opus) | into: KEEP dungeon→economy M-34 | reason: near-dup; the fang as a traded reagent is the M-34 economy delivery

---

## valarian_conquest  — slate: 3 KEEP / 18 CUT / 8 MERGE / 0 DEFER   | anchors after: create + economy + magic (now 3)

KEEP  | valarian_conquest armorsmith / builder stations → create M-05 | motif M-05 | delivery: recipe (KubeJS recipe modification — gate armorsmith station's faction armor/shield recipes on Create-processed iron sheet or brass plate input; the armorsmith station is gated on a Create-machined component) | milestone: v0.7.0 | why "of course": a faction war machine needs precision metalwork; faction armor requiring Create-machined plate grounds medieval warfare in the tech spine; 13-suggested, 8-ACCEPT (strongest phrasing)
KEEP  | valarian_conquest faction loot (shields, armor, weapons) → economy M-08 | motif M-08 | delivery: loot-seed (KubeJS global loot modifier — seed Numismatics coin into Outpost/Keep chest loot; sacking a faction Outpost yields coin alongside battle-spoils) | milestone: v0.9.0 | why "of course": sacking a defended faction Keep should pay out coin from its strongroom; combat-gated coin (you fight for it) fits the player-economy model; 6-suggested, 4-ACCEPT (corroborated by opus-confirmed row)
KEEP  | valarian_conquest boss/elite drops (faction lord relics) → magic M-02 | motif M-02 | delivery: loot-seed (seed a magic reagent — a faction lord's relic, captured knight's alchemical kit — into captain/elite loot tables; battle trophies fuel arcane rituals) | milestone: v0.11.0 | why "of course": a conquered faction lord's relic as a magic reagent ties martial victory to the magic pillar; 2-suggested, 2-ACCEPT

CUT   | valarian_conquest faction armor/weapon sets → create M-05 (armor recipes directly, not via station) | reason: the armorsmith-station KEEP already covers the Create M-05 anchor; a parallel faction-armor-recipes row would double the gating; REJECT majority (10-suggested, 5-REJECT)
CUT   | valarian_conquest:*_citizenship → magic M-10 imbuement | reason: citizenship is political allegiance, not a magical process; tone clash; REJECT ×2
CUT   | valarian_conquest:*_shield / faction armor gated on create parts (armorsmith station, 3-suggested) | reason: covered by KEEP M-05; duplicate; REJECT majority
CUT   | valarian_conquest faction loot → create M-15 boss-key (commander's seal) | reason: valarian_conquest does not ship a clearly-designated boss with a unique signature drop; "commander" is a roleplay framing; REJECT majority (no confirmed boss entity)
CUT   | valarian_conquest faction gear → create M-04 crushing (recycle) | reason: faction armor is combat gear with a martial theme; recycling captured gear to rubble clashes with the mod's medieval aesthetic; REJECT majority (2-suggested, 1-REJECT)
CUT   | valarian_conquest citizen professions → MineColonies M-28 | reason: valarian citizens are an autonomous NPC faction system, not MineColonies workers; no shared mechanism; REJECT majority ×2
CUT   | valarian_conquest mercenary hire → economy M-33 service-for-hire | reason: M-33 is a player performing labor; hiring an NPC mercenary is not a player-labor weave; behavior-only, no recipe or method; REJECT-leaning (but note the emergent M-33 behavior of player escort-services using faction mechanics is desirable — it's just not a weave to author)
CUT   | valarian_conquest:builder / barber_surgeon stations → create M-05 (station block gating, double) | reason: already covered by KEEP M-05 (armorsmith station); adding station-block gating for builder/barber_surgeon as well would over-depth the Create dependency; REJECT ×1
CUT   | valarian_conquest faction gear → create M-04 (wool/banner crushing) | reason: tone clash (recycling war banners); crushing faction banners is thematically incoherent; REJECT ×2 (including opus)
CUT   | valarian_conquest:*_citizenship items → economy M-37 (research-unlock gate) | reason: M-37 is MineColonies research / Ars spell-knowledge; citizenship is a faction allegiance mechanic with no confirmed MineColonies research hook; tone mismatch; REJECT ×1
CUT   | valarian_conquest loot → economy M-30 (regional metal in strongholds) | reason: M-30 requires GTMOGS ore-gen regional lock; faction structure loot is combat-gated, not ore-gen-locked; 1-pass ACCEPT insufficient
CUT   | valarian_conquest faction labor → MineColonies-adjacent M-28 (opus, REJECT) | reason: confirmed no shared mechanism between valarian citizen system and MineColonies; REJECT ×1
CUT   | valarian_conquest:*_banner + supplementaries flag (cosmetic, no motif) | reason: no-motif; purely cosmetic territory; REJECT ×1
CUT   | valarian_conquest faction gear → create M-02 (loot drops metal plate) | reason: loot already drops vanilla metals; adding "metal plate from loot" is incidental and doesn't anchor the mod to Create; REJECT ×1
CUT   | valarian_conquest:*_citizenship → economy M-37 MineColonies-research-unlock | reason: same as above M-37 CUT; no confirmed mechanism; REJECT ×1
CUT   | valarian_conquest knight armor → create M-20 deploy/item_application (crest-plate upgrade) | reason: M-20 is a light single-step; wrapping the armorsmith station's armor in a separate deploy step would double-gate faction gear; over-depths basics; mixed consensus; merged into KEEP M-05 delivery note
CUT   | valarian_conquest loot → create M-02 (TACZ weapon drops) | reason: seeding TACZ weapons into medieval faction loot is a tone clash; REJECT ×1
CUT   | valarian_conquest barber_surgeon → economy M-28 colony Healer | reason: barber_surgeon producing unique healing items is unconfirmed; 1-pass ACCEPT insufficient; conditional on unconfirmed content

MERGE | valarian_conquest M-05 near-dups (8-ACCEPT opus, 5-ACCEPT, 3-ACCEPT, 1-ACCEPT×3) | into: KEEP M-05 | reason: all express the same armorsmith-gated-on-Create-parts delivery
MERGE | valarian_conquest M-08 coin loot near-dups (3-ACCEPT, 2-ACCEPT, 1-ACCEPT opus, 1-ACCEPT×2) | into: KEEP M-08 | reason: same Outpost/Keep loot-seed delivery
MERGE | valarian_conquest M-34 combat supply (4-ACCEPT, 3-ACCEPT, 2-ACCEPT, 1-ACCEPT×2) | into: KEEP M-08 | reason: M-34 "faction combat specialist farms raids and sells spoils" is the ambient loop endpoint; the economy KEEP captures the coin side; M-34 here is the ambient trade result of the KEEP, not a separate weave (the weapons/armor traded are the loot from the M-08 KEEP)
MERGE | valarian_conquest M-33 mercenary hire (6-ACCEPT, 2-ACCEPT, 1-ACCEPT) | into: CUT | reason: NPC mercenary hire is not a player-labor weave; the M-33 *player escort-service* behavior is desirable but unweave-able via recipe/loot
MERGE | valarian_conquest M-02 magic reagent from elite drops (2-ACCEPT, 1-ACCEPT×2) | into: KEEP M-02 | reason: near-dups; same delivery (faction lord relic as magic reagent)
MERGE | valarian_conquest M-15 boss-key from commander chest (3-ACCEPT, 1-ACCEPT opus) | into: KEEP M-02 | reason: the "commander drops a boss-key item" framing is better expressed as M-02 (elite drop → magic reagent) since no confirmed boss entity exists; merged into KEEP M-02 delivery
MERGE | valarian_conquest M-28 colony armorsmith/barber_surgeon (1-ACCEPT) | into: CUT | reason: no confirmed MineColonies-valarian mechanism
MERGE | valarian_conquest citizen mercenary coin gate M-08 (1-ACCEPT — "hire mercenary for Numismatics coin") | into: KEEP M-08 | reason: coin-gated NPC hire is an implementation detail of the economy anchor; folded into KEEP M-08 delivery note

---

== BATCH COMPLETE ==
