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





