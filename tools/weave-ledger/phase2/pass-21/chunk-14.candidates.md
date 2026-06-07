# Phase 2 candidates — chunk-14

## fishingreal   [anchors: survival (1)]
LEAVE — pure behavior mod; zero items/blocks of its own. The weave surface belongs to fish-content mods (createfisheryindustry, farmersdelight, spawn) that sit beneath it. A forced edge here would be noise.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull (ship hulls) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a pirate cutter from raw planks feels cheap — having to machine-press and assemble the hull components in a mechanical crafter adds the right industrial gate before you take to the seas
- from: hpm:corvette_steamship_item (steamship, WIP) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a steamship demands an engine — a sequenced-assembly chain through a derpack:incomplete_corvette_hull makes the flagship ship feel flagship
- from: hpm:hand_cannon / hpm:cannonball | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: cast iron + brass springs gating a hand cannon is exactly what a Create-era gunsmith does; it distinguishes the weapon from vanilla bows
- from: hpm:swashbucklerupgrade (ship upgrade) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a shipwright sells ship upgrades at the trading dock; coins from ore trade buy your vessel's next refit
- from: hpm:pirate_cutter_item | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: overlap with the upgrade ACCEPT above; selling entire pre-built ships feels unearned against the crafting gate; keep the crafted-gate route and drop the vendor-pre-built ship sale
REWORK: existing aeronautics anchor is the right label (water transport = economy's logistics arm) but the mod sits at 1 anchor with its hulls/cannons still vanilla-crafted. The Create gate (M-05/M-06) is the load-bearing second anchor; add it before shipping.

## geckolib   [anchors: support/library (1)]
LEAVE — animation/rendering API, zero gameplay surface. No weave possible or needed.

## ichunutil   [anchors: support/library (1)]
LEAVE — shared-class library (iChun's mods), zero gameplay surface. No weave possible or needed.

## create_ironworks   [anchors: create (1)]
- from: create_ironworks:tin_ingot / create_ironworks:steel_ingot (processed metals via create:crushing + mixing) | via: numismatics mint (KubeJS coin recipe) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is the pack's new regional scarcity metal — you crush it, alloy it, mint it; the whole scarcity→production→economy loop in one chain
- from: create_ironworks:steel_plate (fabricated structural sheet) | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plate is exactly the load-bearing hull material an Aeronautics airframe needs; no more wood-plank airships above iron tier
- from: create_ironworks:bronze_plate | via: create:pressing → aeronautics control-surface recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze sheet-metal beats wood for ailerons and rudder flanges — a natural mid-tier drivetrain material before steel
- from: create_ironworks:brass_hammer (3×3 mining tool) | via: numismatics vendor sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the hammer is a QoL tool, not a luxury/processed good; M-09 is for consumed goods (food, wine) or unique trade items; selling a mass-producible mining tool via coin vendors adds noise, not texture
OK — create anchor is sound (the mod IS the metal-tier Create expansion; M-08 + M-23 now give it economy + aeronautics)

## create_pattern_schematics   [anchors: create (1)]
LEAVE — pure Create-internal build-tooling (3 items, no material conversion); any edge here would be cosmetic. Value is in convenience, not a weave node.

## cloth_config   [anchors: support/library (1)]
LEAVE — config-screen API, zero player-facing content.

## freefbible   [anchors: support/curated flavor (1)]
LEAVE — single inert readable-book gag item. A forced recipe would be noise; the novelty is the point.

## createthreadedtrains   [anchors: support/performance (1)]
LEAVE — server-side railway threading; zero items/blocks. Performance mod only; no content surface to weave.

## playeranimator   [anchors: support/library (1)]
LEAVE — player animation API; zero gameplay surface.

## trashslot   [anchors: support/QoL (1)]
LEAVE — inventory-trash-slot UI; zero items or material surface.

## notenoughanimations   [anchors: support/visual (1)]
LEAVE — client-side cosmetic animation overrides; zero gameplay content.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a fang from the subterranean spider-crypt is exactly the kind of cursed reagent an occultist burns in spirit-fire to crystallize a spirit essence
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire) already covers the reagent-sink route at the right tone; doubling into Ars imbuement is redundant — keep one clean edge (occultism) rather than wiring both
- from: undergroundworlds:temple_bricks / pyramid_bricks / ice_bricks (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: looting the temple and bringing rubble back to the Create workshop is a plausible "reclaim materials" loop; lossy crushing gives the salvage cost
- from: undergroundworlds:blade_of_the_jungle / freezing_sword (unique boss-loot weapons) | via: boss-key gate (M-15) — these items as gate ingredients in a Create/tech recipe | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: power-read — the Blade of the Jungle is a mid-tier adventure weapon, not a true boss key; M-15 should be reserved for genuine boss-drops from iconic encounters, not generic dungeon loot; forced gate feels arbitrary
REWORK: the mod has no existing weave edges at all. M-11 (spirit_fire spider_fang) and M-04 (brick crushing) together give it survival↔magic + survival↔Create, reaching the 2-anchor target cleanly.

## numismatics   [anchors: economy, create (2)]
OK — connections sound. Numismatics is the hub destination; direction of weave is inbound (other mods → numismatics vendor/mint). Its 2-pillar anchor (economy + Create) is correct and load-bearing. No outgoing edge needed; adding one would invert the loop.

## create_connected   [anchors: create (1)]
- from: create_connected:kinetic_battery (stored kinetic energy) | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 is for FE-charging tools/foci into the magic/tech tier — kinetic_battery is already squarely on the Create spine; this is internal Create wiring, not a cross-system seam; motif doesn't apply, and the link is circular
- from: create_connected:item_silo / inventory_bridge (logistics blocks) | via: aeronautics logistics context — these ARE part of the Create spine's logistics arm and serve aeronautics infrastructure | to: aeronautics | motif: no-motif | verdict: REJECT | reason: no-motif — there is no motif for "Create logistics blocks support aeronautics"; it's thematically adjacent but no recipe/method routes through here; a genuine aeronautics anchor requires a material-method edge, not vibes
LEAVE — despite 65 blocks/57 items, the mod is Create-internal QoL (kinetics, copycats, logistics); no foreign-material surface for a cross-system weave. Confirmed 1-anchor; no coherent 2nd.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw (Capelobo elite-mob drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a clawed fang from a Brazilian cryptid werewolf-beast belongs in an occultist's spirit-fire ritual; the folkloric-menace tone aligns perfectly with dark summoning
- from: brazil_legends:amber_shard (drop from Cuca/amber mobs) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is a preserved-magic material; imbuing it in an arcane apparatus refines it into a source-adjacent essence — amber-as-fossilized-magic is a universal fantasy trope
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber as a coin-economy luxury is weak — the mob encounter rate is hard to predict; better used as a magic reagent (accepted above) than as a generic coin earner; keeps the economy cleaner
- from: brazil_legends:big_tongue (Saci/Capelobo drop) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: big_tongue is a low-tier gag drop; putting it in a ritual feels forced rather than thematically resonant — the claw is the right folkloric trophy; one M-11 edge per mob is enough
REWORK: existing survival anchor is the only one. M-11 (capelobo_claw → spirit_fire) and M-10 (amber_shard → imbuement) together push it to survival↔magic, which is the 2-anchor goal.

## appleskin   [anchors: support (1)]
LEAVE — food-HUD readout only; no items, no mechanics, nothing to weave.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: dungeons_arise_seven_seas structure loot tables (galleon/fortress chests) | via: loot-seed — seed numismatics coins into naval chest loot | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a plundered galleon's strongbox should have old coin; pirates hoard wealth — coin drops in naval dungeon chests make exploration immediately reward the economy loop
- from: dungeons_arise_seven_seas structure loot (galleon chests) | via: loot-seed — seed boss-key materials or magic reagents (M-02 / M-15) into flagship dungeon chests | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the structure is loot=yes but registers no unique drops/mobs; seeding magic reagents into a generic naval chest would require choosing a specific reagent with no thematic justification — a coin seed (accepted above) is coherent without an invented narrative
REWORK: the dossier says "LEAVE" but the mod is loot=yes with boardable ship structures — a coin loot-seed (M-08, via: loot-seed) is a real, low-effort second anchor (survival→economy). Override the dossier's LEAVE.

## ribbits   [anchors: survival (1)]
- from: ribbits amethyst-shard trade economy (Ribbit merchants accept amethyst shards) | via: KubeJS villager-trade bridge → numismatics — amethyst shards exchangeable at coin rate | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: the Ribbit sorcerer and merchant already run a shard-based economy; bridging it to coin via a trade-seam means players who befriend the frog village can exchange shards for coin, making swamp exploration economically useful
- from: ribbits:toadstool / ribbits:brown_toadstool | via: create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: milling toadstools into dye/spore dust is generically applicable to any mushroom mod; the connection is real but the motif fit is weak (M-04 is for metal/stone deco blocks back to raw material) — the tone clash is that toadstool-milling is survivally organic, not the industrial-reclaim context M-04 was designed for; no-motif on the correct framing, so reject-for-review
- from: ribbits:swamp_lantern (decorative block) | via: create:crushing → wax/fat byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same M-04 scope problem — decorative lanterns could plausibly crush to a wax nugget, but the item is not a "deco block that existed in a foreign context" in the M-04 sense; generic deco-crush is noise; the trade-seam (accepted) is the cleaner second anchor

## spawn   [anchors: survival (1)]
- from: spawn:crab / spawn:barnacle (sea creatures, drops) | via: farmersdelight:cooking + create:milling (processing chain pull) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crab meat milled into a crab-powder seasoning that feeds Farmer's Delight feast recipes — seafood processing integrates the ocean fauna into the food production web
- from: spawn:clam (color variants, caught by casting net) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare color-variant clams and pearl items as boutique goods at a coastal vendor — the ocean's equivalent of a luxury crop, with actual scarcity (specific biomes + casting net required)
- from: spawn:angler_fish (deep-water mob) | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 (haunting seam) is for Create's soul-fire transmutation toward occult outputs — using an anglerfish as a haunting input has no narrative logic; the bioluminescent fish has no occult connection; tone clash
- from: spawn:date_log / date_planks (date palm wood set) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: cutting a new wood type into planks/boards is not a cross-system weave — it's vanilla Create wood-processing; M-04 is deco-reclaim (metal/stone back to raw), not "process new wood"; no real second anchor here

== CHUNK COMPLETE ==
