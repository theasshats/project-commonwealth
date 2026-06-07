# Phase 2 candidates — chunk-14

## endrem   [anchors: survival (1)]

Power-read: The 16 themed eyes are all mid-to-endgame — they gate End access (a one-time high-value progression event), so they're endgame tier overall, though individual eyes vary (nether_eye = mid; corrupted/guardian = endgame-adjacent). The exploration intent is central; any crafting bypass must stay costly.

- from: endrem:undead_eye (themed drop-in-waiting) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a Wither-skeleton skull spirited into an undead ritual yields an eye the player couldn't find — magic as a costly last resort for a stuck explorer; ritual cost keeps it non-trivial
- from: endrem:guardian_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Guardian essence (raw sea-temple drop) attuned through the apparatus into an eye — Ars makes End access feel arcane-earned; endgame cost is appropriate
- from: endrem:ancient_portal_frame (gateway structure) | via: loot-seed | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a rare boss-faction drop into the frame/stronghold loot that only combat specialists farm — dungeon loot → eye source → combat-supply link; via: loot-seed
- from: endrem:cold_eye / magic-themed eyes | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: The exploration-by-design intent is the entire point; letting Create assemble eyes trivialises the gate, and an automated eye factory is tonally wrong for an exploration/adventure mod — keep crafting exits only in ritual/magic methods where cost and rarity are native constraints
- REWORK: existing single-anchor (survival) is accurate — magic weave via M-10/M-11 adds a real 2nd anchor. No existing connections to flag as weak.

## moreoverlays   [anchors: support — QoL/client (1)]

- LEAVE — pure client HUD overlays (light-level X, chunk grid, JEI highlight); zero items/blocks/loot and no method surface. Nothing to route.

## moogs_structures   [anchors: support — library/API (1)]

- LEAVE — pure worldgen library with zero items/blocks/loot; all gameplay is in its dependent mods. Nothing to route.

## farm_and_charm   [anchors: survival (1)]

Power-read: Grains (barley/oat) and mincer/roaster/stove outputs are everyday food items — bread, butter, patties. The farmhouse meals are mid-tier (multi-step cooking). Animal-husbandry mechanic is mid (feed → more drops). Wide content surface; good weave target.

- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat through a Create Millstone → flour, bridging the farmhouse grain chain into the Create spine; a one-step everyday add that a farmer immediately nods at
- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: farm_and_charm:drying + vinery:wine_fermentation | to: survival (food depth) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: dried barley → fermented barley ale via Vinery aging — a maturation chain that creates an aging-specialist niche and links F&C grains to the drink-economy arc; via: vinery fermentation + farm_and_charm:drying
- from: farm_and_charm grain/meat outputs (bulk surplus) | via: MineColonies provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony workers need grains and meat — F&C husbandry surplus provisioning the colony is a natural demand sink that gates colony growth behind agricultural output
- from: farm_and_charm:butter / farm_and_charm:flour (basic ingredients) | via: extradelight:oven / extradelight:drying_rack | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: butter + flour into Extra Delight processing chains (pastry intermediates) — broadens the diet-group coverage and ties F&C basics into the existing delight processing web; cross-mod food chain
- from: farm_and_charm dossier candidate — "economy via numismatics — animal-husbandry surplus as sellable" | verdict: REJECT | reason: bare sell link — "husbandry surplus is sellable" is the ambient endpoint of the loop; no demand gate is specified. M-09 is retired. Economy link only counts when it gates demand (M-26/M-28/M-29/M-30). The M-28 colony-provisioning above is the correct expression.
- REWORK: dossier's 2nd-anchor candidate for economy via numismatics is exactly the retired M-09 form — flag as should-be-expressed-as-M-28 instead. The M-12 Create-milling candidate in the dossier is sound.

## blood_n_particles_datapack   [anchors: support (cosmetic) (1)]

- LEAVE — cosmetic particle/sound emission on damage; 184 "items" are all particle-holder entries, not usable items. No item, loot table, or method surface to route.

## wits   [anchors: support (1)]

- LEAVE — server-side command utility (/wits structure identification); no items/blocks/loot, no method, nothing to route.

## steves_lava_chicken_music_disc   [anchors: support (flavor) (1)]

- LEAVE — a single joke music disc (loot=yes flag but it's a disc obtainable from any jukebox-context); forcing a recipe or coin edge onto a meme easter egg is noise. Support role.

## clumps   [anchors: support (performance) (1)]

- LEAVE — XP-orb entity merging; no items/blocks/loot. Pure server-TPS aid, nothing to route.

## gtmogs   [anchors: survival, economy (2)]

Power-read: GTMOGS is a framework — it has 3 marker blocks and no gameplay items beyond those. Its weave value is *downstream* (the ores it places are what M-03/M-08/M-30 route through), not in GTMOGS itself.

- from: gtmogs regional ore veins (the downstream scarce metals it makes regional) | via: (conceptual — the weave lives in the ores, not gtmogs itself) | to: economy | motif: M-30 | power: n/a | tone: ok | verdict: ACCEPT (existing — framework enables M-30 for every ore in the pack; record as confirmed anchor, not a new authored weave)
- from: gtmogs framework | via: (no recipe method — worldgen config only) | to: any third system | motif: no-motif | verdict: REJECT | reason: GTMOGS has no item/method surface to route through; its 3 marker blocks have no crafting role and can't carry a new motif. All motifs attach to the downstream ores, not the framework itself. Two solid anchors already — no forced edge needed.
- OK — connections sound. Already at 2 anchors (survival = exploration layer; economy = scarcity foundation). No weak connections to flag.

## kobolds   [anchors: economy, survival (2)]

Power-read: Kobold skulls and drops are everyday-to-mid (just rare mob drops); the Prospector enchantment from Enchanters is the most distinctive output (a genuine mid/high value). Kobold Den structures are mid-adventure.

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull — little scaly creature associated with underground mining and fire — ritually transmuted into an earth/spirit essence feels right; underground mob → dark ritual reagent is coherent and adds a magic anchor
- from: kobolds:kobold_skull | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold skulls imbued into a mining-themed Ars reagent (linked to the Prospector enchant theme) — mob-drop-reagent-sink expressly proposed by the dossier; imbuement adds Ars anchor
- from: Prospector enchantment (kobold enchanter output) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: the Prospector enchant is already the *output* of kobold trading, not a material to run through the apparatus — this would be routing an enchantment (not a craftable item) through a crafting method, which doesn't work mechanically. The kobold_skull as reagent (above) is the correct M-02 handle.
- OK — 2 anchors sound (economy via emerald trading, survival via underground structures/danger). The skull→magic addition would add a 3rd anchor, which is a bonus.

## betterclouds   [anchors: support (client/visual) (1)]

- LEAVE — client cloud renderer; no items/blocks/loot/methods. Pure visual, nothing to route.

## gravestone   [anchors: survival (1)]

Power-read: The gravestone block and obituary item are the only items (2 items). The block holds inventory on death; obituary logs the death. There's no material in/out; it's a death-handling utility.

- from: gravestone:gravestone (silk-touch drop) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a gravestone (a tombstone holding a player's corpse) back to raw materials is tonally grim and contrived — the mod's whole purpose is the item *staying put* and being recoverable; a recipe on it damages that utility identity
- from: gravestone:obituary (unique death record item) | via: (no mechanical method — it's an information item) | to: any | motif: no-motif | verdict: REJECT | reason: the obituary is an information/lore record, not a material; no method can usefully process it and any recipe on it would be noise
- LEAVE — death-recovery utility with 2 non-material items; forcing any edge would be contrived. The dossier's conclusion (leave) is correct.

## glitchcore   [anchors: support (library) (1)]

- LEAVE — loader-abstraction library for Glitchfiend mods (Serene Seasons dep); zero items/blocks/loot. Nothing to route.

## bountiful   [anchors: economy (1)]

Power-read: The bountyboard (1 block) and bounty contract items (8 items — common/uncommon/rare/epic tiers) are the content. The board generates random fetch/kill bounties; rewards are configurable. A very strong economy anchor that needs a 2nd system.

- from: bountiful:bountyboard objectives (configurable to request pack items) | via: Decrees config pointing at Create-processed goods or magic reagents as required items | to: Create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties that demand Create-pressed metal sheets or Ars source gems as turn-in items put a player-driven demand floor under production — a real cross-route dependency flowing through the board's objective system; via: config (Decree data)
- from: bountiful:bountyboard reward pool | via: config setting payout to numismatics coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty rewards denominated in Numismatics coin make the board a player-economy consumption node — players spend effort (fighting/farming) to earn minted coin; the coin enters circulation as labor-earned currency, not NPC inflation. NOTE: this only holds if coin entering from bounty rewards is balanced against coin sinks elsewhere; flag as BALANCE-PENDING.
- from: bountiful:bountyboard (kill objectives) | via: Decrees config targeting pack boss mobs | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: kill-bounties on dungeon bosses make combat specialists the supplier of bounty credits — boards create structured demand for dangerous combat output, closing the combat→economy loop
- from: bountiful reward table → numismatics coin "faucet" concern | verdict: REJECT (as an unrestricted faucet) | reason: if bounty rewards inflate coin supply without a matching sink the player economy corrodes; the M-08 accept above must be paired with coin sinks (M-26 consumption) to avoid this — record the tension as a balance note, not a new reject candidate
- from: dossier candidate "any pillar as a sink — request Create-processed goods, magic reagents, aeronautics cargo turning surplus into coin" via M-09 | verdict: REJECT | reason: M-09 is retired — "surplus → coin" is the ambient endpoint; the correct framing is M-29 (cross-route demand gating) and M-34 (combat supply), both accepted above
- REWORK: dossier's M-08/M-09 framing for reward → Numismatics should be refined to M-08 (player-minted settlement medium) only; the M-09 framing in the dossier is stale (retired motif). Correct it to: coin as earned labor medium, not a sell-for-profit link.

## northstar   [anchors: Create, aeronautics (2)]

Power-read: Northstar is heavily Create-woven already (inbound: crushing/mixing/pressing/sequenced_assembly). Titanium and tungsten are mid-to-endgame metals (space-tier); advanced_circuit is endgame. Three registered methods (electrolysis, engraving, freezing) are potential inbound weave targets.

- from: northstar:titanium_ingot (scarce space metal) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: off-world titanium is the scarcest metal in the pack — players who make the rocket trip press titanium coins; rocketeer becomes the currency specialist and regional-scarcity (space = ultimate scarce region) drives coin value. M-08 (player-minted currency from scarce metal).
- from: northstar:advanced_circuit | via: MineColonies research gate | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits as a MineColonies research unlock — a colony at high tech tier can start producing them (cheaper than soloing the Create chain), but the research knowledge can't be traded, only the output; research-gate anti-erosion wall on a key endgame component
- from: northstar:electrolysis_machine (method: northstar:electrolysis) | via: foreign fluid inputs (e.g. Occultism fluid, magic essences) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: running a magic fluid through an electrolysis machine splits it into arcane components — industrial science meets arcane matter; the sci-fi/magic tone junction is coherent for a Create-heavy pack; adds magic anchor via a novel method pull
- from: northstar:biofuel | via: createaddition:liquid_burning | to: aeronautics (fuel) | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar biofuel (off-world organic source) as an exotic Aeronautics engine fuel — space crops → biofuel → propulsion; off-world base feeds the logistics arm; already inbound-woven via createaddition:liquid_burning per dossier, confirming the channel exists
- from: northstar:martian_steel_ingot / tungsten_ingot | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: space-forged martian steel as the required material for high-tier airframe hulls — the endgame ship hull costs the rocketeer's exclusive output; aeronautics scales with ship tier and martian steel is the endgame tier material
- from: dossier candidate "numismatics sale of astronomical_reading / advanced_circuit as high-tech trade goods via M-09" | verdict: REJECT | reason: M-09 retired; bare sell-for-coin is the ambient endpoint. The M-08 titanium coin candidate above is the correct coin link; advanced_circuit→M-37 is the correct economy gate.
- OK — existing 2 anchors (Create + aeronautics) are solid and deep. New candidates add economy and magic for a potential 4-anchor mod.

## createlowheated   [anchors: Create (1)]

Power-read: The basic_burner is an everyday Create block — early-game, prerequisite for all heated basin work. It consumes furnace fuel (coal/charcoal/wood). No tradeable item output, no magic surface.

- from: createlowheated:basic_burner (fuel consumption) | via: M-26 consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: requiring real solid fuel (coal/charcoal) for every heated Create process ties the tech spine to the survival fuel-supply loop — a charcoal farm or mining expedition becomes prerequisite for advanced processing, creating continuous fuel demand
- from: createlowheated "lowheated" heat tier | via: config — route seasonal crops/resins through lowheated processes | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a seasonal resin (available only in summer/fall via Serene Seasons) as the premium lowheated fuel — creates a fuel-scarcity node tied to the calendar, making heated Create processing seasonal-gated at the premium tier
- from: createlowheated:basic_burner | via: any magic method | to: magic | motif: no-motif | verdict: REJECT | reason: the burner is a heat source, not a material; no magic method routes through a heat emitter. No coherent magic edge exists.
- REWORK: existing single-anchor (Create) is correctly identified; M-26 survival-fuel link and M-16 seasonal-fuel link are the natural 2nd anchors. No existing weak connections.

## spawn   [anchors: survival (1)]

Power-read: Spawn has a huge content surface (165 blocks, 296 items) — clams/crabs/anglerfish as everyday food items, date wood as everyday building material, ant-colony content as mid-tier (ant_farm automation?). FD integration already exists (inbound: farmersdelight:cooking/cutting).

- from: spawn:crab / spawn:clam (seafood) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: clam shells through a Create Millstone → calcium powder / shell grit as an intermediate (fertilizer or mixing reagent) — seafood harvest feeds the Create processing web; natural industrial extension of coastal foraging
- from: spawn:angler_fish (rare aquatic mob drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an anglerfish's bioluminescent lure — a deep-sea creature with its own light source — transmuted via spirit fire into a luminous occult essence; eerie aquatic mob feeding dark ritual makes thematic sense
- from: spawn seafood drops (crab/clam bulk) | via: MineColonies provisioning (colony kitchen/cook hut) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony cooks request coastal seafood as provisioning goods — sea-fisher becomes a colony supplier, linking aquatic foraging to colony growth demand
- from: spawn clam/fish catches (bulk aquatic goods) | via: aeronautics/logistics (bulk perishable transport) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: fresh catch (clams, crab) is heavy in bulk — trading coastal seafood inland at scale requires the logistics arm to move it; gives the aeronautics/ship system a distribution purpose for a real food commodity
- from: spawn dossier candidate "economy via Numismatics — sell seafood as trade goods via M-09" | verdict: REJECT | reason: M-09 retired; bare sell link. The M-28 colony and M-31 logistics candidates above are the correct economy expressions.
- from: spawn dossier candidate "aeronautics via createfisheryindustry — mechanized fishing" | verdict: REJECT | reason: while coherent in concept, createfisheryindustry is a separate mod whose integration should be assessed against createfisheryindustry's dossier, not spawn's; don't piggyback spawn's weave on a separate mod's mechanics without that mod being in scope.
- REWORK: existing FD bridge (farmersdelight:cooking/cutting) is sound — it's the current 1-anchor tie. The dossier's M-09 economy candidate needs correction to M-28/M-31. No other weak connections.

## dndesires   [anchors: Create (1)]

Power-read: dndesires is a deep Create addon (5 registered methods; already inbound-woven with 5 Create methods). Rubber is mid-tier (sap farming + hydraulic press); milkshakes are everyday food; cardboard packaging is everyday logistics; asphalt/breccia are everyday deco. Catalyst sails are mid-to-endgame Create machinery.

- from: dndesires:rubber (output of hydraulic_compacting — sap + water) | via: aeronautics structural/drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber as a required gasket/seal component in Aeronautics propulsion mounts or control surfaces — you need the hydraulic press output to build a working engine; industrial rubber is exactly what keeps a flying machine airtight and vibration-damped
- from: dndesires:milkshake_* foods | via: diet system (M-26 consumption) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshakes cover the Sugars/Dairy diet groups — everyday consumption sink that pulls on dairy farming; the food presses against the diet-pressure loop continuously
- from: dndesires:dragon_breathing fan-processing | via: endgame boss drop as catalyst fuel (M-15 adjacent) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: sealing a Blaze rod (or a Cataclysm-boss scale) into the dragon-breathing sail as a one-time install makes the endgame fan tier a boss-unlock — combat → endgame Create method; boss-key flavor, scales to the sail's power
- from: dndesires:cardboard_package_* | via: aeronautics cargo/logistics | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: cardboard packages as the standard shipping unit for aeronautics freight — bulk goods packaged into standard-size boxes loaded onto ships; gives the packaging mechanic a distribution role in the logistics arm
- from: dndesires:asphalt (deco block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: asphalt crushed back to gravel + tar (or bitumen byproduct) — lossy recycle consistent with Create's deco-crush pattern; straightforward M-04
- from: dndesires dossier candidate "economy via rubber as scarce trade good via M-08" | verdict: REJECT | reason: rubber isn't a regional ore and it can't be Create-pressed into coin (M-08 requires scarce regional metal → Create processing → numismatics mint); rubber as a tradeable material is the ambient endpoint, not a demand gate. Drop or re-express as M-29 if rubber is a cross-route dependency in a specific recipe.
- from: dndesires dossier candidate "aeronautics via cardboard packaging + bore blocks as logistics parts via M-06/M-05" | verdict: REJECT | reason: M-06 (sequenced-assembly keystone) and M-05 (native-method gating) are about gating the mod's own flagship item; bore blocks are drilling equipment, not airframe parts; this conflates two unrelated things. The cardboard packaging M-31 link above is the correct aeronautics hook.
- REWORK: existing single-anchor (Create) is correctly deep. The dossier's economy M-08 candidate is misfitted (rubber ≠ regional metal); the aeronautics M-06/M-05 candidate conflates bore blocks with aeronautics. Both should be revised to the accepted candidates above.

## rhino   [anchors: support (1)]

- LEAVE — KubeJS's JavaScript runtime engine; no items/blocks/loot, no player-facing mechanics. Pure library. Nothing to route.

## betterdungeons   [anchors: survival (1)]

Power-read: YUNG's Better Dungeons adds 3 structure types (Catacombs, Undead Fortress, Spider Cave) with loot tables but zero items/blocks of its own. loot=yes, 1 biome-modifier. The loot tables are datapack-overridable — the primary weave surface.

- from: betterdungeons Catacombs / Undead Fortress loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Occultism spirit-essence fragments or Ars source-gem shards into undead dungeon chests — magic progression gated behind dungeon exploration; undead catacombs as a source of occult reagents is thematically perfect (death → occult); via: loot-seed
- from: betterdungeons Spider Cave loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a rare silk component or arachnid reagent (combat-route exclusive) into Spider Cave chests — a combat specialist farms caves for a material non-combat players must trade for; closes the combat→trade loop; via: loot-seed
- from: betterdungeons Undead Fortress (boss-spawner structure) | via: loot-seed | to: survival/Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a rare boss-key component (a derpack:incomplete_* precursor or a boss-drop gate item per M-15 design) into Fortress chest loot — dungeon exploration unlocks a Create/tech recipe gate; the Fortress becomes a landmark worth raiding for progression; via: loot-seed
- from: betterdungeons general loot tables | via: numismatics coin seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a small quantity of minted Numismatics coin into dungeon chest loot — coins as lost civilizational treasure found by explorers, entering player circulation via the exploration loop; dungeon-find → player economy injection; via: loot-seed
- from: betterdungeons structures as bounty targets | via: bountiful:decree config | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the weave here would be "configure Bountiful Decrees to target dungeon-mob kills" — that's a cross-mod config tie with no authoring handle (no loot-table, no KubeJS recipe); it's valid pack design but not a Phase-3 authorable weave; record as pack-config note, not a candidate.
- REWORK: existing single anchor (survival) is correct. Multiple loot-seed weaves add economy and magic 2nd anchors cleanly — no existing connections to flag as weak.

== CHUNK COMPLETE ==
