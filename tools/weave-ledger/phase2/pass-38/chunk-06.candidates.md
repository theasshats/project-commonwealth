# Phase 2 candidates — chunk-06

## bagus_lib   [anchors: support/library (1)]
LEAVE — pure code library (baguchi's shared utilities); 0 blocks, 0 items, no recipe types, loot=no. No content surface to weave. Genuine zero-surface case.

## bakery   [anchors: survival (1)]
Existing connections: 1 anchor (survival — food/satiety via Farm & Charm cooking chain). One anchor is the floor; needs a second.

Power-read: bakery outputs are mid-to-high tier processed foods (cakes, tarts, cupcakes, jams, baguettes). The blank_cake_interaction is a light unique mechanic. The food items grant saturation + short-duration speed+strength buffs on sweet stacking. Mid tier overall — a specialist baking chain, not endgame but well above raw crop.

Candidates:

- from: wheat / berries / fruit (bakery inputs) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's millstone grinds grain to flour that feeds the baker's station — the bakery chain runs on the tech spine's output, not just hand-grinding.

  Red-team: Is flour production coherent with a Create millstone? Yes — milling grain is exactly its documented use case. Risk is scale mismatch (bakery is artisanal, Create is industrial) but the coupling is light (one processing step, not a full chain) and appropriate for everyday tier. Tone ok.

- from: bakery:beer / bakery bread products | via: alcohol_industry:alcohol_boiling | to: create | motif: M-12 | power: mid | tone: clash | verdict: REJECT | reason: alcohol_industry produces spirits, not beer-from-bread; forcing a bread→alcohol bridge when alcohol_industry already has its own input chain is arbitrary and the two mods' themes don't overlap naturally. No clear method link.

- from: bakery finished goods (cakes/tarts/jams) | via: minecolonies colony supply | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Cook or Tavern Worker requests bakery-quality pastries as colony supply — settlement-scale demand that a baking specialist fills, gating colony happiness/tier without the goods being NPC-sold.

  Red-team: Is this just "bakery goods are food, colonies need food"? MineColonies does request specific cooked/prepared foods from its cook hut, and bakery's high-saturation cakes/tarts are a natural "luxury food" tier the colony would request above basic bread. The link gates colony demand on a specialist production chain — that's M-28 (colony route as demand). Not arbitrary. Tone ok.

- from: bakery:strawberry_cake / bakery:apple_jam (seasonal fruit inputs) | via: config tie to Serene Seasons | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Strawberry/apple-based bakery items are only craftable when the seasonal crop is available (spring/autumn gated), making the bakery's luxury tier follow the harvest calendar — bakers are seasonal specialists.

  Red-team: Does bakery use crops whose seasonal availability is controlled by Serene Seasons? The dossier lists fruit/berries as inputs. Serene Seasons gates crop growth by season; if berry/apple crops are season-sensitive, then bakery's premium recipes inherit that gating without a recipe change — it's a config-tie/worldgen read, not forced. Tone fits the cozy-bakery vibe perfectly. M-16 accepted.

- from: bakery loot (loot=yes) | via: loot-seed | to: survival / economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: bakery's loot=yes is likely chest-loot for the decorative blocks/foods, not a boss/structure loot scenario. M-34 is combat-route supply from dangerous sources; a bakery doesn't fit the combat-supply frame. No-motif for a bare loot-seed here; the seasonal and colony links above are stronger.

REWORK: The dossier lists M-09 as the candidate economy link ("luxury sell-goods"). M-09 is retired — "sellable" is the ambient endpoint, not a weave. The colony demand link (M-28) is the correct reframe. Flag the dossier's M-09 economy candidate as superseded by M-28.

Summary: 3 ACCEPT (M-12 milling, M-28 colony demand, M-16 seasonal), 2 REJECT.

## voicechat   [anchors: support (1)]
LEAVE — proximity voice communication infrastructure; 0 blocks, 0 items, no recipe types, loot=no. Pure communication layer with no gameplay material surface. Genuine zero-surface case.

## aileron   [anchors: aeronautics (1)]
Existing connections: 1 anchor (aeronautics — Elytra flight rebalance). One anchor is the floor; needs a second.

Power-read: aileron adds Elytra enchantments (loot=yes) and reworks flight physics. The enchantments are mid tier — they're refinements to an existing item, not a new endgame unlock. No item namespace (0 blocks, 0 items under aileron:) — the content surface is the Elytra enchants (loot) and behavior changes.

Candidates:

- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchantments (higher durability, glide-speed, pull) are imbued through the Enchanting Apparatus using source — a magic-route unlock to the premium personal-flight tier that requires a mage's setup to access.

  Red-team: Are aileron's enchants accessible to the apparatus? The dossier notes enchants are "datapack-exposed" as a condition; if they're standard Minecraft enchantments registered under vanilla's enchantment system, the apparatus can target them via an imbuement recipe. If they're a closed system, this fails at authoring — flag as BALANCE-PENDING. The thematic pairing is coherent: flight magic imbued through arcane apparatus feels right; it's not a forced edge. M-10 (arcane infusion pull) fits: a foreign enchantment pulled into the magic route. Only mid-depth treatment (one apparatus recipe per enchant), appropriate for the tier.

- from: aileron Elytra enchantments (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's premium Elytra enchant books seed into end-structure / stronghold loot — rare endgame exploration drops that reward adventuring into dangerous space, giving the combat specialist a tradeable commodity (the flight-enchanted Elytra) that the aerial logistics player wants.

  Red-team: Does this feel forced? The Elytra already drops from End Ships; aileron's enchantments extending that loot tier is thematically tight. The combat/exploration specialist farms the enchantment books; the aeronautics player buys them. M-34 (combat-route supply) is the right motif. Tone ok. This is a loot-seed delivery, not a recipe — valid per briefing.

- from: aileron Elytra enchantments | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Iron's cauldron brews potions, not enchantments; routing Elytra enchantments through a potion-brewing mechanic is a category mismatch. The apparatus route (above) covers the magic angle more coherently.

REWORK: Dossier notes "leave is acceptable" — but loot=yes is a real surface, and the two ACCEPT candidates above (apparatus enchantment, loot-seed) are coherent without forcing. Flag dossier's dismissal of the apparatus link as overly conservative.

Summary: 2 ACCEPT (M-10 apparatus enchant, M-34 loot-seed), 1 REJECT.

## createnuclear   [anchors: create (1)]
Existing connections: 1 anchor (Create — power addon, uses create:compacting/crushing/mixing/pressing/mechanical_crafting/splashing). One anchor is the floor; needs a second.

Power-read: createnuclear is endgame. The reactor outputs >2M SU (the single largest power source in the pack), requires a multiblock build with reactor_core/casing/frame/cooler/controller, and the fuel chain runs through multiple Create processing stages (crush → mix → press → enrich). The steel (c:ingots/steel) and lead byproducts are mid-tier shared metals. The anti-radiation armor set is mid-tier protective gear. The loot=yes entry likely covers ore gen drops.

Candidates:

- from: createnuclear:uranium (ore→raw→dust→enriched fuel) | via: create:crushing → createnuclear:enriched → reactor | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The uranium fuel cycle — crush ore, mix, press, enrich through the campfire/fire stage, load reactor — is a multi-step sequenced processing chain that is exactly the GregTech-style depth target for endgame. A sequenced-assembly approach wrapping the fuel rod as a `derpack:incomplete_*` part is coherent.

  Red-team: Is this an additional weave or just documenting what already exists? The dossier shows the Create processing chain is already an inbound weave (the made-by methods). The M-06 candidate here is about explicitly modeling the fuel-rod as a sequenced-assembly keystone, deepening the existing chain rather than adding a new one. Endgame power gates behind multi-step process — fits M-06. Not a new pillar but deepens Create anchor meaningfully.

  Revised: This is a depth play within the existing Create anchor, not a second anchor. Valuable as a weave note (endgame Create chain depth), but doesn't open a new system. File as Create-depth enhancement; not the 2nd anchor we need.

- from: createnuclear:steel_ingot (c:ingots/steel) | via: create:mechanical_crafting / aeronautics hull recipes | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Nuclear steel — a fabricated structural alloy — becomes a required ingredient in Aeronautics' highest-tier hull/airframe recipes, making the reactor's byproduct essential for endgame ship construction. The player with a reactor is the server's steel supplier for fleet-grade airframes.

  Red-team: Is steel a meaningful structural material for Aeronautics? M-23 (structural alloy → airframe) is established for exactly this — fabricated metal plates as hull material that scales by ship tier. Steel is the right material for the highest-tier frames (it's harder and scarcer than iron). The reactor makes steel as a byproduct of its own operation, so the two systems are already operationally coupled; the weave formalizes it. Tone: industrial-to-industrial, coherent. The Create spine produces power AND the hull material — the reactor player becomes a supplier to the aeronautics player. Strong cross-system link.

- from: createnuclear:lead_ingot (c:ingots/lead) | via: create:pressing → radiation shielding for magic rituals | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Lead shielding is pressed from nuclear lead and used as a catalyst/protective component in Occultism's higher-tier rituals (e.g., ritual containment chalk or a spirit-binding circle that requires a shielded component), forcing the magic specialist to source lead from the nuclear tech player.

  Red-team: Is lead shielding in Occultism rituals thematically coherent? Lead's historical association with alchemy and anti-magical containment is real (alchemists used lead for transmutation; ceremonial circles used heavy metals as binding agents). The idea that a high-tier occult ritual needs physical shielding from its own radiation/energy output is a coherent fiction. M-29 (cross-route dependency) is exactly the motif — a tech byproduct becomes required input for a magic method, forcing the two routes to interact. The specific Occultism method (ritual or spirit_fire) can consume a pressed lead plate as a ritual ingredient. Not a forced edge. Tone ok.

- from: createnuclear uranium / reactor | via: regional scarcity (GTMOGS ore-gen) | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: Uranium is region-locked by GTMOGS ore generation — only certain biomes/regions bear uranium veins — so the reactor is anchored to a specific settlement location, making its steel/power output a regional specialty that must be traded or physically moved by the aeronautics/logistics arm.

  Red-team: Is this a real weave or just "uranium is scarce by default"? M-30 (regional-scarcity gate) specifically requires that the good's key input be region-locked, forcing trade. Uranium's ore distribution being regional means the reactor can only be built where uranium exists — that's M-30's logic applied cleanly. The delivery is via GTMOGS ore-gen config, not a recipe. Tone ok.

- from: createnuclear anti-radiation armor | via: create:mechanical_crafting | to: survival | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The anti-radiation suit (helmet/chest/legs/boots) is gated on Create parts as core inputs — pressed/machined components via mechanical_crafting — so the hazmat layer that lets players safely approach the reactor is itself a mid-tier Create manufacturing goal.

  Red-team: Does the anti-rad armor already use create:mechanical_crafting or create:item_application? The dossier lists create:item_application in the made-by methods, so there's already some Create-gating on the armor. M-05 (native-method gating with Create parts as inputs) would deepen this — make the core suit components require Create-processed parts. Not inventing a new link, refining an existing one to be explicit. Tone: hazmat suit from a nuclear-powered tech civilization — coherent.

- from: createnuclear reactor output (SU) | via: createaddition:charging | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: The reactor's massive SU is converted to FE via Create Addition, then routed to charge Ars Nouveau wands/foci or Iron's Spellbooks spell focuses — the nuclear plant powers the server's arcane infrastructure, coupling the reactor player with the magic specialist as a power customer.

  Red-team: Is the SU→FE→magic charging chain mechanically sound? createaddition:charging is established (M-17). The reactor outputs enormous SU to Create's kinetic network; Create Addition converts SU to FE; then a charging station charges magic foci/wands. The chain exists in the methods palette. M-17 is "only when it makes sense" — a nuclear reactor as the power source for high-tier magic foci is exactly when it makes sense (endgame power for endgame magic tools). Tone: electric-magic bridge, coherent. ACCEPT.

REWORK: Dossier proposes M-09 ("uranium/steel mint into coin") as the economy candidate. M-09 is retired. The M-08 candidate (player mints coin from processed scarce metal) is partially valid but "steel coin" is a stretch — steel isn't a currency metal in the loop. M-30 (regional scarcity gate) is the correct economy anchor — it grounds the reactor to a specific territory and forces trade via the logistics arm. Flag dossier's M-09 economy candidate as superseded by M-30 + M-23.

OK — Create anchor connections sound (deep multi-step fuel chain is appropriately endgame). New links add aeronautics (M-23 steel hull), economy (M-30 regional scarcity), magic (M-17 power bridge, M-29 lead-ritual cross-route), survival (M-05 hazmat gear depth).

Summary: 6 ACCEPT (M-06 depth-note, M-23 aeronautics steel hull, M-29 lead-ritual cross-route, M-30 regional scarcity, M-05 hazmat gear, M-17 FE magic charge), 0 REJECT. [Note: M-06 is a within-Create depth note rather than a new system anchor; net new anchors: aeronautics, economy, magic, survival.]

## railways   [anchors: create, aeronautics (2)]
Existing connections: 2 anchors (Create + aeronautics/transport). Two anchors meets the target. Review for REWORK.

Power-read: railways is mid-to-endgame Create content — track variants, locometal building stock, conductor entity. Uses create:mechanical_crafting and create:sequenced_assembly (confirmed inbound). 617 blocks, 1015 items — substantial content. loot=yes (conductor caps, locometal deco in loot?).

REWORK candidates (existing connections):
- Create anchor: sound. create:mechanical_crafting + create:sequenced_assembly are deep, appropriate for train construction. No rework needed.
- Aeronautics anchor: labeled as "transport pillar" — accurate framing. Trains are the logistics arm alongside airships. The economy side of this (trains as the bulk-goods movement method) could be sharpened.

New candidates:

- from: railways:locometal (conductor/boiler building stock) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Used locometal panels/boiler sections crush back to metal scraps + an XP nugget — the standard Create deco-recycle loop; a bulk train builder doesn't stockpile obsolete panels forever.

  Red-team: 617 blocks is a huge catalogue; adding a blanket crushing recipe for deco stock is established M-04 practice. The locometal variants (brass/copper/iron wrapped) would return their respective raw metal at a lossy ratio. Tone: industrial recycling of train parts — coherent. Not deep, but closes the resource loop.

- from: railways bulk goods trains | via: aeronautics/trains as the transport method | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A loaded benchcart or cargo train is the bulk-goods distribution method — ore, processed metals, food — between regions; scale logistics requires rail infrastructure, making the railway builder the server's freight specialist whose service others pay for.

  Red-team: M-31 (logistics-required bulk good) is about goods that require the logistics arm to move at scale. Railways are explicitly the ground transport arm alongside aeronautics. The "railway builder as freight specialist" is exactly the service-for-hire + logistics weave. M-31 delivery is via train contraptions, not a recipe. Tone ok.

- from: railways conductor entity + semaphores | via: minecolonies colony builder | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A colony's Transport post or Courier hut employs a player-run conductor (the railway specialist who builds and operates the freight network), making train operation a player labor service the settlement economy pays for.

  Red-team: M-33 (service-for-hire labor) fits the conductor role — operating a cargo train is skilled work, not a product. The framing is a bit loose (MineColonies doesn't have a direct "train conductor" job), but the colony-to-logistics coupling is real: a colony that needs bulk raw goods routed to it is exactly the M-33 / M-31 demand scenario. The conductors could be player-operated for colony supply contracts. Tone ok but delivery is emergent/config rather than a specific method — still a valid Phase-3 design note.

- from: railways locometal (c: iron/brass/copper plates) | via: aeronautics hull recipes | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: railways locometal is a thematic deco material (boiler casing, smokebox), not a structural hull alloy. Routing it into Aeronautics airframe recipes creates a tone mismatch (train boiler casing as airship hull) and conflicts with the more coherent M-23 candidate (createnuclear steel). The aeronautics anchor for railways is better served by M-31 (logistics) than hull-material supply. Reject to avoid confusion.

OK — connections sound on the core Create/aeronautics anchors. New links add economy via M-31 logistics + M-33 service, and M-04 deco-recycle within Create. No fundamental rework needed.

Summary: 3 ACCEPT (M-04 locometal crush, M-31 logistics bulk goods, M-33 freight service), 1 REJECT.

## necronomicon   [anchors: support/library (1)]
LEAVE — pure code library (Necronomicon API by ElocinDev; registry/config/worldgen helpers for opacpvp); 0 blocks, 0 items, no recipe types, loot=no. No content surface to weave. Genuine zero-surface case.

## modernfix   [anchors: support/performance (1)]
LEAVE — pure JVM/loader performance patch; 0 blocks, 0 items, no recipe types, loot=no. No content surface to weave. Genuine zero-surface case.

## sable   [anchors: support/physics-backend (1)]
LEAVE — Rapier physics engine library backing Aeronautics ships; 0 blocks, 0 items, no recipe types, loot=no. The weaving surface lives in the mods that build ON sable (Aeronautics itself). No content to weave here. Genuine zero-surface case.

## notenoughanimations   [anchors: support/client-visual (1)]
LEAVE — client-side cosmetic animation overrides; 0 blocks, 0 items, no recipe types, loot=no. Visual-only; no gameplay surface. Genuine zero-surface case.

## glitchcore   [anchors: support/library (1)]
LEAVE — Glitchfiend loader-abstraction library backing Serene Seasons / Biomes O' Plenty / TerraBlender; 0 blocks, 0 items, no recipe types, loot=no. No content surface to weave. The seasonal/biome weaves belong to the content mods that use this library. Genuine zero-surface case.

## more_slabs_stairs_and_walls   [anchors: support/decoration-palette (1)]
Existing connections: 1 anchor (decoration palette support role). One anchor is the floor; a second is the goal.

Power-read: 847 blocks — all slab/stair/wall variants for vanilla blocks that lack them. The items are everyday-tier construction materials (no processing depth of their own, derived from vanilla blocks via crafting grid/stonecutter). Stonecutter origin makes `create:cutting` (the mechanical saw) a natural automation pathway.

Candidates:

- from: more_slabs_stairs_and_walls cuts (all 847 variants) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The mechanical saw cuts every parent block (logs, stone, basalt, concrete, etc.) directly into the corresponding MSSW slab/stair/wall variant — a blanket recipe batch that makes bulk architectural automation possible on the Create spine; builders automate their palette instead of hand-crafting hundreds.

  Red-team: Is this forced? create:cutting is designed for stonecutter-equivalent operations; MSSW blocks ARE stonecutter-derived. This is the most natural possible Create connection (existing method → identical function). "Packs commonly add saw/cutting recipes so the variants automate" per the dossier confirms it's established practice. The 847-recipe scope sounds large but it's one batch KubeJS registration pattern, not 847 individual decisions. Everyday tier — light single step, correct per cost model. Not a new system, but a strong Create second anchor. M-12 (processing-chain pull from a raw block into a finished cut) fits.

- from: more_slabs_stairs_and_walls gravity cuts (concrete powder slab, sand/gravel variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Leftover sand/gravel/concrete-powder slabs and stairs crush back to their parent material at a lossy ratio — the standard M-04 deco recycle loop; a builder who over-cuts doesn't waste material permanently.

  Red-team: Does M-04 fit gravity-block variants? M-04 is "deco crushes back to raw" — sand slabs crushing to sand is the direct analog. Lossy (you don't get full sand back), which is the anti-arbitrage rule. The concrete-powder variants are interesting: crushing a concrete-powder slab could yield concrete powder + possibly a bit of gravel, which is the parent material. Coherent. Everyday tier.

- from: more_slabs_stairs_and_walls amethyst cuts (amethyst_block slab/stairs/wall) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Amethyst cuts are decorative blocks; imbuement of a decorative stone slab into an arcane material is a forced stretch. Amethyst's magic weaves belong to the main amethyst supply chain, not to MSSW's variant of the block. Tone mismatch between "wall block" and "magical infusion input." Reject.

- from: more_slabs_stairs_and_walls basalt cuts | via: dndesires:sanding | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: dndesires:sanding is a specialized method for a different purpose; routing generic basalt cuts through it is arbitrary. The create:cutting route above already covers the Create angle comprehensively. Redundant.

REWORK: Dossier already identifies create:cutting (M-12) and create:crushing (M-04) as candidates, rating the first STRONG. Both ACCEPT stands. No rework of existing entries needed — the dossier analysis is correct.

OK — decoration palette anchor is clear. New links: Create via M-12 (cutting) + M-04 (crushing recycle).

Summary: 2 ACCEPT (M-12 create:cutting, M-04 crushing recycle), 2 REJECT.

## createblockchain   [anchors: economy, create (2)]
Existing connections: 2 anchors (economy — Numismatics faucet; Create — FE/mechanical_crafting+mixing). Two anchors meets the target. Review for REWORK.

Power-read: The currency miner is mid-tier infrastructure — requires FE (Create Addition), a Mining Core (worldgen consumable from geodes every ~30 chunks), and coolant management. The geode scarcity naturally rate-limits coin output. The piggy-bank is a loot (loot=yes) mechanism seeding coins in overworld chests.

Candidates:

- from: createblockchain:mining_core (geode worldgen consumable) | via: regional scarcity / GTMOGS ore-gen config | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Mining Cores spawn in geodes that cluster in specific biomes/regions (the geode biome-modifier is already set) — the miner is therefore region-locked, making the coin-minting capacity itself a regionally scarce resource; the first player to settle near a geode-rich region becomes the server's primary minter.

  Red-team: Is this M-30 or just "geodes are worldgen"? M-30 is specifically about a good's key input being region-locked so the GOOD is region-locked and must be traded. Mining Cores are the rate limiter of coin production — their regional availability directly limits where the miner can run. The biome-modifier confirms geodes have a specific spawn pattern. The minter's location is genuinely economically significant. M-30 fits. Not forced.

- from: createblockchain FE→coin minting | via: createnuclear reactor SU→FE (createaddition:liquid_burning) | to: create | motif: M-32 | power: endgame | tone: ok | verdict: ACCEPT | hook: The nuclear reactor's output SU → FE (via Create Addition) powers the currency miner — meaning the reactor player's endgame power generation is the prerequisite for high-throughput coin minting; the power producer and the minter are coupled, making coin supply depend on the server's reactor status.

  Red-team: Is FE→coin via the reactor a real operational coupling or just "FE comes from somewhere"? The reactor is the only large-scale FE source in the late pack; a currency miner consuming significant FE would depend on it. M-32 (byproduct→input industrial circularity) isn't quite right — the reactor's FE isn't a byproduct, it's the primary output. M-29 (cross-route dependency — tech output needed by economy method) is closer. Actually: the dependency is Create (power) → economy (minting) across routes, which is M-29. Revise to M-29.

  Revised: | motif: M-29 | verdict: ACCEPT | hook: High-throughput coin minting demands FE from the nuclear reactor — the Create power specialist and the economy minter are locked together; nobody mints at scale without a reactor running.

- from: createblockchain piggy-bank (loot=yes, overworld chests) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: The piggy-bank already seeds coins into overworld chests by its own mechanic — this isn't a weave we author, it's stock behavior. Proposing a loot-seed here is redundant with what the mod already does. Not a Phase-3 action.

REWORK: The dossier's existing economy + Create anchors are sound. The dossier notes "M-08-adjacent: feed the miner FE from scarce processed metal" as a deepening — this is the M-29 cross-route dependency I've captured above. The dossier's analysis of createblockchain as a "money faucet" is accurate but the DESIGN concern is whether the FE→coin rate is controlled by scarcity (it is: geodes + FE source). No rework of existing anchors needed — the two ACCEPTs above deepen rather than replace.

OK — existing Create + economy anchors sound. New links: M-30 (regional geode scarcity), M-29 (reactor FE cross-route dependency).

Summary: 2 ACCEPT (M-30 regional scarcity, M-29 reactor cross-route), 1 REJECT.

## alcohol_industry   [anchors: create, survival (2)]
Existing connections: 2 anchors (Create — filling/mixing processing chain; survival — drinkable consumables with status effects). Two anchors meets the target. Review for REWORK.

Power-read: The Alcohol Boiler is mid-tier — a heated processing block that takes Create-assembled Alcohol Base fluid and converts it to bottled/bucketed spirits. The output tier: beer/vodka/whiskey/tequila are status-effect consumables, not endgame items. Mid-effort production chain (Create mixing → filling → boiling). The mod has one unique recipe-type (alcohol_industry:alcohol_boiling).

Candidates:

- from: alcohol_industry spirits (beer/vodka/whiskey/tequila) | via: minecolonies colony supply / tavern | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Tavern or Inn keeper requests a steady supply of bottled spirits for colony morale/happiness — the distiller player fills colony supply contracts, making spirits a colony-demanded commodity that gates settlement quality without being an NPC coin sink.

  Red-team: Does MineColonies have a tavern/inn worker that requests alcohol? MineColonies does have a Tavern building and potentially requests food/drinks for colony happiness. The framing is that spirits are "colony luxury goods" the colony management system assigns demand to. M-28 (colony route as demand-gating) is correct — the colony creates repeating demand, making the distiller a supplier rather than just a player buff-farmer. Tone: industrial distillery supplying a colonial settlement — coherent. Not the same as "sellable."

- from: alcohol_industry:beer (grain ferment) | via: Serene Seasons seasonal crop gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: The grain/hop inputs to beer production are summer/autumn crops; spring distilling means working from stored reserves — the distillery follows the harvest calendar, making seasonal brewing a real specialist role and tying the industry to survival's temporal pressure.

  Red-team: Does beer in alcohol_industry use grain/hop inputs? The dossier says it "consumes Alcohol Base fluid + flavor ingredients" — the base itself is built from fermentable crops via Create mixing. If those crops are season-gated, the base becomes seasonal. The link is one level indirect (crop → base → spirits) but the chain is short. M-16 is the seasonal reagent motif; if the base's grain inputs are Serene-Seasons-sensitive, the spirit chain inherits that. Coherent.

- from: alcohol_industry:whiskey/vodka/tequila (bottled spirits) | via: extradelight:vat / evaporator | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Distilled spirits feed ExtraDelight's vat or evaporator to produce sauces, marinades, or a spirit-infused cooking ingredient — the distillery chain slots into the cooking web, extending alcohol_industry's output into the food production system.

  Red-team: Is routing spirits through extradelight:vat coherent? Alcohol in cooking (spirits as a cooking input — wine reduction, flambé sauce, spirit marinade) is real cuisine. ExtraDelight has a vat machine for processing liquids. The tone is consistent with the rustic-industrial cooking web the pack builds. M-12 (processing-chain pull where a mid-output feeds another process) fits. Not forced.

- from: alcohol_industry spirits (as fuel) | via: tfmg:distillation or createaddition:liquid_burning | to: create | motif: M-13 | power: mid | tone: clash | verdict: REJECT | reason: Ethanol/spirits as an engine fuel is technically real but the dossier's spirits (beer/vodka/whiskey/tequila) are modeled as player-consumable drinks, not fuel liquids. Treating the colony's whiskey supply as engine fuel is a tone conflict between the culinary/survival theme and the industrial fuel system. TFMG already has diesel/gasoline for M-13; adding spirits as a competing fuel source would dilute the specialization. Reject.

REWORK: Dossier proposes M-09 economy link ("bottled spirits as luxury sell-goods"). M-09 is retired. The M-28 colony demand link is the correct reframe. Flag.

OK — existing Create + survival anchors sound. New links add economy (M-28 colony demand) and deepen survival (M-16 seasonal, M-12 cooking-chain pull).

Summary: 3 ACCEPT (M-28 colony demand, M-16 seasonal, M-12 spirits-into-cooking), 1 REJECT.














