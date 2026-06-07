# Phase 2 candidates — chunk-10

## kleeslabs   [anchors: support/QoL (1)]
LEAVE — pure behavior mod (no items, no blocks, no recipes, no loot tables). Breaking one slab half is a building convenience; it registers nothing and has no content surface to route through any motif. Zero surface means zero candidate edges. Not a forced LEAVE — genuinely nothing here.

## bettermineshafts   [anchors: survival (1)]
<!-- power-read: structure overhaul only; loot=no (uses vanilla mineshaft loot table — no seeding hook even via loot-seed delivery). Zero items/blocks registered. -->
<!-- method-pull: no materials to route. loot=no means even loot-seed is off the table. -->
<!-- The dossier correctly notes it indirectly serves the scarce-ore mining loop (the expanded corridors hold more ore encounters), but that's a worldgen-feel effect, not a content hook. -->
LEAVE — structure-overhaul mod with no registered items, no blocks, and loot=no (vanilla mineshaft loot only). No material surface to route; loot-seed delivery requires a loot table to inject into, which this mod doesn't own. Genuinely zero weave surface beyond the structural atmosphere.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
<!-- power-read: 10 items — cardboard_plane (mid-tier; needs cardboard + Create cutting+deploying), location_transmitter, portable_stock_ticker. Logistics layer over Create packages — everyday use once Create-logistics is established. -->
<!-- existing connections sound: Create-cutting/deploying to build the plane, aeronautics/logistics role. Two strong anchors. -->
<!-- method-pull for a 3rd: could we find an economy or survival edge? The plane moves packages — could carry coin (economy), food, or magic reagents. But that's the *use*, not a recipe weave. -->
<!-- candidate 1: economy — the portable_stock_ticker lets players place remote orders while away. Could tie to Numismatics trade orders (a player remote-buys from a Trading Floor stall via the ticker). This is a config/KubeJS integration, not a recipe. Motif M-21 (provisional trade-seam) — but it's more logistical than villager-trade-denominated. No clean motif. REJECT. -->
<!-- candidate 2: aeronautics depth — cardboard_plane needs a structural material for high-tier courier variants. Could require a lightweight structural component (e.g. an aeronautics sail or Create thin plate) via M-23 or M-24. But the cardboard_plane is already mid/everyday; gating it further violates the depth-scales-with-power rule. REJECT. -->
<!-- candidate 3: M-20 deploy-application — a "courier upgrade" applied to the plane via create:deploying to extend range or add a chunkloading beacon. Plausible mechanically, but no-motif as written (M-20 is about upgrading a base item, not a logistical range-extend). The item exists (plane + deploying already used in its recipe), but it doesn't compose a clean new cross-system link. no-motif / REJECT. -->
OK — connections sound. Create + aeronautics/logistics are the correct and sufficient anchors. The mod's value is logistics infrastructure, not a material node. No forced 3rd anchor — all candidates either violate the depth-scaling rule or land on no-motif.

- from: cardboard_plane economy routing | via: M-21 provisional trade-seam | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: provisional motif + it's logistical infrastructure (the *use* of the plane is trade-routing, not a recipe seam); no recipe/loot delivery mechanic available
- from: cardboard_plane structural-tier upgrade | via: M-23 structural alloy | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: plane is everyday/mid; gating it behind a structural alloy recipe chain violates depth-scales-with-power; basics cannot be deeply gated
- from: courier range-upgrade application | via: M-20 deploy-application | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the "upgrade via deploying" angle doesn't route through a cross-system link; it stays within Create logistics and adds no second pillar

## sable_sa_compat   [anchors: support/compat (1)]
LEAVE — genuine zero-content code library / compat patch. No items, no blocks, no loot, no recipes. It bridges Create: Stuff 'N Additions gadget behavior to Sable physics ships; its entire value is behavioral (gadgets work on moving ships). Nothing to route through any method; forcing a weave would be a defect. Same family as aeronauticscompat — necessary and correct, but not weaveable.

## ribbits   [anchors: survival (1)]
<!-- power-read: 14 blocks, 21 items, loot=yes. Toadstool blocks (brown/red/stem) are everyday decoration. mossy_oak woodset is a full wood set (planks/slab/stairs/door/fence/fence_gate). maraca is a unique social/music item. ribbit profession spawn eggs (fisherman/gardener/sorcerer/merchant/nitwit) are mid-tier spawn items, rare in the wild. swamp_lantern, giant_lilypad, umbrella_leaf are deco. The trade economy runs on Amethyst Shards (not emeralds) — this is the primary economy hook. loot=yes: it has a loot table (village chests / trade loot). -->
<!-- method-pull for 2nd anchor: -->
<!-- candidate 1 (economy/M-08 → M-14 or M-21): Ribbit merchants already trade in Amethyst Shards. Amethyst shards are a vanilla worldgen material (scarce; not mined with pickaxe, grown via budding amethyst). Re-denominate their trades INTO Numismatics coins — shard-for-coin at a Ribbit merchant, or shard accepted as part-payment for swamp goods. Amethyst shards are not a reserved reagent. This bridges a biome village (survival) into the economy pillar by folding a shard-barter into the coin loop. Motif M-08 maps when the shard has been processed (Create crushing yields amethyst dust/powder? — not native to Create, but Ars Nouveau uses amethyst natively; alternatively M-21 provisional trade-seam via the villager-trade angle). Actually the cleanest motif is M-08 (coin from processed scarcity) if a player first processes amethyst shards through a Create crushing step into a refined form, then mints coins. Power: mid (amethyst is mid-tier; shards are farmable from budding blocks). Tone: ok — a swamp-village trader accepting refined crystal coin is thematically plausible for a quirky frog merchant. Survives red-team. ACCEPT. -->
<!-- candidate 2 (magic/M-10 or M-02): The sorcerer Ribbit grants buffs — a magic-adjacent mob. Its drops (loot table) could seed an Ars Nouveau or Iron's reagent. Toadstool fungi could be an imbuement ingredient or an alchemist-cauldron brew input. Toadstools are mushroom-like; Ars Nouveau uses nature-school ingredients; toadstool as a magic catalyst for a nature-school brew is thematically plausible. Motif M-02 (mob-drop reagent sink) or M-10 (arcane infusion pull). Power: everyday (toadstools are common blocks in Ribbit villages). Tone: ok — mushroom fungi → nature magic is a natural pairing. ACCEPT. -->
<!-- candidate 3 (Create/M-04): mossy_oak woodset through create:cutting into planks/sticks with a small mossy-wood-strip byproduct. This is M-04 (Create recycles deco). Power: everyday (deco wood). Tone: ok, but weak — it's a generic wood cut, provides no cross-system loop advance. The dossier already flagged this as WEAK. Red-team: it's just "another wood goes through Create sawmill"; no unique survival↔Create story. REJECT — no second-system advance, and the connection is arbitrary/generic. -->
<!-- candidate 4 (economy/M-14 bounty): Ribbit fisherman/sorcerer mobs provide unique drops (fish + buff materials) that could feed a bountiful board bounty. loot=yes means loot-seed delivery is on the table. Seed a bounty drop: "bring N ribbits:maraca to a bounty board → coin". Tone: whimsical — players collect maracas from swamp-folk musicians. Plausible. But the maraca is a purchased item (from merchants), not a mob drop per se; a bounty on traded goods is circular. REJECT — the drop surface is the fisherman's fish (vanilla fish) not a unique Ribbits material. -->
<!-- REWORK check: single anchor (survival). No existing connections to flag as REWORK. -->

- from: ribbits:amethyst_shard trade → coin | via: create:crushing shard into dust → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ribbit merchant's crystal-shard barter finally slots into the coin economy — process shards through a grinder, mint the dust into coin
- from: ribbits:toadstool / toadstool_stem | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: swamp-grown toadstool fungi are a nature-school reagent — the sorcerer Ribbits were onto something
- from: ribbits:mossy_oak_planks woodset | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood-through-sawmill; no cross-system story, arbitrary pairing — every mod's wood qualifies; the dossier already flags this as WEAK

## moreculling   [anchors: support/performance (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Pure client-side render optimization — improves face culling on translucent/leaf geometry. Depends on Sodium. No gameplay surface at all. -->
<!-- method-pull: literally nothing to route. The mod's entire effect is in the GPU pipeline. -->
LEAVE — zero-content client rendering optimization. No items, no blocks, no loot tables, no recipe surface. Face-culling improvements have no weave path through any motif. Correct role: performance support.

## azurelib   [anchors: support/library (1)]
<!-- power-read: 1 block (azurelib:lightblock — internal dynamic-light helper, not player-obtainable), 0 items, loot=no. Animation/rendering API for dependent mods. -->
<!-- method-pull: nothing to route. The lightblock is internal infrastructure. -->
LEAVE — animation engine library. The single registered block is an internal rendering utility with no player-facing use. No recipe methods, no loot, no material surface. Correct role: dependency support for animated mobs (Cataclysm etc.).

## searchables   [anchors: support/library (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Client-side UI API for search/autocomplete bars in dependent mods (JEI family). No gameplay content whatsoever. -->
LEAVE — client UI library with zero content surface. Pulled transitively by JEI and similar; no items, no methods, no loot. Nothing to weave.

## chat_heads   [anchors: support/QoL (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Draws player face textures beside chat messages. Pure client UI cosmetic. -->
LEAVE — client-only chat cosmetic with no content surface. No items, no blocks, no loot, no methods. Correct role: multiplayer QoL.

## particlerain   [anchors: support/atmosphere (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Client weather-particle rendering — particle-based rain/snow/sandstorm/dust; reads biome data. Depends on asyncparticles. -->
<!-- method-pull: no material surface. The "reads biome data" angle is purely visual. No Serene Seasons API hook that would expose a seasonal material even if we wanted M-16. -->
<!-- The dossier notes a thematic pairing with Serene Seasons weather — acknowledged as flavor-only. -->
LEAVE — client-side atmospheric rendering with zero content surface. No items, no blocks, no loot tables. The biome-reading is visual only; no cross-mod material or method hook exists. Correct role: atmospheric support.

## dummmmmmy   [anchors: support/QoL (1)]
<!-- power-read: 0 blocks, 1 item (dummmmmmy:target_dummy), loot=no. A single craftable invulnerable entity that shows floating damage numbers (per damage type). Can be armored or dressed with mob heads to change its type-profile. Everyday utility item — cheap vanilla recipe. -->
<!-- method-pull: the target_dummy is a test prop. The only "use" is hitting it with spells/weapons. -->
<!-- candidate 1: the dummy CONSUMES armor/mob heads to set its damage profile. Could we say "equip an Iron's spellbook armor-set on the dummy to test magic damage"? That's purely the existing gameplay interaction (equipping armor), not a recipe weave. no-motif. -->
<!-- candidate 2: the dummy as a "practice dummy" for MineColonies guards — a config edge where a colony barracks uses a practice dummy for guard training efficiency. This would be a config tie, not a recipe. No motif covers "config boosts colony training." no-motif. REJECT. -->
<!-- candidate 3: Sell the target_dummy as a crafted luxury to a Numismatics stall — a player-made combat-testing product priced via M-09. But the dummy is a vanilla-crafted utilitarian block, not a luxury good. Red-team: a "luxury good" is wine, cheese, processed food — a wooden training dummy doesn't meet the bar. REJECT. -->
LEAVE — single-item combat-test utility. The only item is a test prop with no processing surface. "Consuming armor" is a cosmetic equip, not a recipe sink. No loot table; no viable motif applies without forcing. Genuinely a support role.

- from: dummmmmmy:target_dummy → luxury-good sell | via: numismatics | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: a wooden training dummy is a utility prop, not a craftable luxury; tone clash makes the M-09 sell unconvincing; no emergent economy story
- from: target_dummy used as MineColonies barracks training prop | via: config tie | to: create (production) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — a config efficiency bonus is not a method-routing; this is operational flavor, not a recipe weave

## ohthetreesyoullgrow   [anchors: support/library (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Tree-generation library for Oh The Biomes You'll Go — defines NBT-template trees + improved sapling-growth logic. No content of its own; foreign mods (BYG) register trees against it. -->
LEAVE — pure worldgen framework library. No items, no blocks, no loot tables, no recipe types. Foreign mods register trees against its API; it provides nothing itself to route. Genuine zero-content library.

## irons_spellbooks   [anchors: magic, Create (2)]
<!-- power-read: 26 blocks, 328 items, 2 biome-modifiers, 19 c:tags, loot=yes. This is a flagship magic mod. Mithril ore (Y<38, deep scarce), pyrium (nether), arcane_essence (magic currency), spell scrolls (dozens, tiered by school), alchemist cauldron (fluid brew multiblock), inscription table, scroll forge, affinity rings. Three tiers — everyday (low-tier scrolls, amethyst rapier), mid (school-specific gear, mithril ingots), endgame (arcane debris, affinity ring of specific school, high-tier spells). already uses create:emptying/filling (alchemist cauldron). -->
<!-- existing connection REWORK check: magic + Create. Create anchor via create:emptying/filling on the alchemist cauldron — that's a solid functional edge (filling the cauldron with fluids). Magic anchor obvious. Both are real. No REWORK needed on existing connections. -->
<!-- method-pull for depth (≥2 already; looking for deepening or gaps): -->
<!-- candidate 1 (Create/M-03 ore-doubling): mithril ore → create:crushing → crushed mithril + byproduct. Standard ore-doubling, already flagged in the dossier. Power: mid (mithril is mid-tier scarce ore, Y<38). Tone: ok — all ores go through Create crushing. Motif M-03. ACCEPT. -->
<!-- candidate 2 (magic/M-01 arcane currency bond): irons_spellbooks:arcane_essence ↔ ars_nouveau:source_gem via ars_nouveau:imbuement. The ledger explicitly reserves this: arcane_essence is "Iron's-side magic currency, bonded to source via M-01." This is ALREADY RESERVED — do NOT propose a new seam, just confirm the reservation applies. -->
<!-- candidate 3 (survival/economy via M-02): the apothecarist mob (mid-tier rare hostile found in wizard towers) drops unique reagents. These drops → into Iron's alchemist_cauldron_brew or ars_nouveau:imbuement as rare spell-school inputs. loot=yes supports loot-seed delivery. Power: mid (apothecarist is a dungeon mob). Tone: ok — monster-drop → magic ingredient is the canonical M-02 pattern. ACCEPT. -->
<!-- candidate 4 (economy/M-09 luxury sell): high-tier spell scrolls (e.g. a fully-inscribed endgame school scroll) as a craftable luxury trade good — inscribed at the Scroll Forge then sold via Numismatics stall. Power: endgame (inscribing high-tier scrolls is effort). Tone: ok — a magic scriptorium selling rare scrolls to the economy is plausible. Motif M-09 (luxury good → coin). ACCEPT. -->
<!-- candidate 5 (Create/M-17 electric charging): Create New Age FE charging a magic focus or the Arcane Anvil? The arcane anvil upgrades/imbues gear — if it needs power, this could be M-17. But the alchemist cauldron is the fluid machine; the arcane anvil uses XP/reagents, not FE. Red-team: forcing FE into the arcane anvil when it doesn't natively need power is arbitrary. REJECT. -->
<!-- candidate 6 (magic/M-11 spirit transmutation): mob drops → occultism:spirit_fire → irons spell reagents. The spirit-fire could transmute a common mob drop (like rotten flesh or ender pearl) into an Iron's-school essence. This is M-11 and a cross-magic weave. Power: mid. Tone: ok. ACCEPT. -->
<!-- REWORK check: existing anchors magic + Create are sound. create:emptying/filling is functional. No arbitrary edges. OK — connections sound. -->
OK — connections sound. magic + Create anchors are well-grounded. Deepening candidates below.

- from: irons_spellbooks:mithril_ore → crushed mithril | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril doubles in the crushing wheel — the smelted ingot path stays but the smart smith learns to crush first
- from: apothecarist mob drop → spell-school reagent | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the apothecarist carries reagents for a reason — defeating one unlocks a rare brew ingredient
- from: high-tier inscribed spell scroll (endgame school) → coin | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a scriptorium sells knowledge — rare scrolls are the mage's trade commodity
- from: mob drop (ender pearl / rotten flesh) → Iron's school essence | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit fire is the bridge between mundane kills and arcane ingredients; ender pearl → eldritch-school essence is a natural transmutation
- from: createaddition FE charging Arcane Anvil | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: the Arcane Anvil runs on XP + reagents, not FE; forcing electric charging would require rewriting the machine's power model — arbitrary and tone-clashing with the scholarly-arcane vibe

## pingwheel   [anchors: support/QoL (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. Multiplayer ping-marker system — keybind drops a world/entity marker visible to the team. Pure client/server coordination UI. -->
LEAVE — zero-content multiplayer coordination utility. No items, no blocks, no loot, no recipe methods. Its value is entirely social/coordination and cannot be routed through any system motif. Correct role: co-op QoL.

## jeresources   [anchors: support/UI (1)]
<!-- power-read: 0 blocks, 0 items, loot=no. JEI addon displaying mob-drop tables, dungeon/chest loot, plant drops, and ore-distribution graphs. Documentation layer only — surfaces existing data. -->
<!-- The dossier notes it's useful for the pack's scarcity design (players can see regional ore distribution). That's UX, not a weave. -->
LEAVE — client-only UI documentation addon. No items, no blocks, no loot tables of its own. Surfaces existing world data; no material or method surface to route through any motif. Correct role: transparency support for the scarcity system.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
<!-- power-read: 2 blocks (bee_port, drone_port — mid-tier logistics infrastructure), 4 items (bee_port, drone_port, mobile_packager, robo_bee). loot=no. The robo_bee is the courier drone; the ports are dispatch/receive hubs. These are logistics nodes built from Create parts — mid-tier once Create logistics is established. -->
<!-- existing connection check: Create + aeronautics/logistics are the correct anchors. The robo_bee is an airborne logistics device, firmly aeronautics. Both anchors are well-grounded. -->
<!-- method-pull for depth: -->
<!-- candidate 1 (economy/M-08 or M-14): the bee_port could accept/dispatch coin packages — a Numismatics coin parcel that pays a remote trading partner. The port is infrastructure; the coin is the payload. Motif M-08 applies if we route a coin-containing package as a trade fulfilment mechanism — but this is the *use* of the system, not a recipe seam. The ledger wants recipe/loot-seed/config hooks, not logistical use-cases. no-motif as a recipe. REJECT. -->
<!-- candidate 2 (aeronautics depth/M-24): robo_bee as a mechanical drone — its rotor/propulsion mechanism could require a mechanical component from Create (e.g. a small rotary engine, fan, or bearing). Motif M-24 (mechanical component → propulsion). The robo_bee is already crafted from Create parts (the dossier says it consumes Create parts). But if the recipe doesn't specifically require a mechanical drivetrain component, we could deepen: require a Create:mechanical_crafting step to assemble the bee's rotor assembly. Power: mid (robo_bee is mid-tier). Depth-scales-with-power: a drone prop should need real mechanical work. ACCEPT — but specify it's a recipe deepening, not a new system; the aeronautics anchor already exists. -->
<!-- candidate 3 (Create/M-20 deploy-application): upgrade a robo_bee's range/speed by deploying a signal amplifier onto it. M-20 (deploy-application upgrade). Plausible. Power: mid. Tone: ok — a Create-style "apply upgrade via deployer" is thematically consistent with the mod's Create-native vibe. But: the second anchor is already aeronautics; this is depth within existing anchors, not a new pillar. Still a valid deepening candidate. ACCEPT for the deepening angle; acknowledge it doesn't add a 3rd pillar. -->
OK — connections sound. Create + aeronautics anchors are well-grounded; drone logistics is the correct slot. Deepening candidates below add recipe depth within existing anchors rather than a new pillar.

- from: create_mobile_packages:robo_bee propulsion assembly | via: create:mechanical_crafting | to: aeronautics (deepening) | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the robo_bee's rotor needs a proper mechanical assembly — it's a tiny Create-built drone, and its drivetrain should feel like one
- from: robo_bee range/speed upgrade | via: create:deploying (M-20 deploy-application) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: drop the upgraded bee into a deployer with a signal-amp component to extend its delivery range — standard Create upgrade logic applied to drone logistics
- from: bee_port dispatching coin parcels to remote trade partners | via: numismatics package payload | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — this is the logistical *use* of the system (coins as package payload), not a recipe seam; no delivery mechanism (recipe/loot-seed/config) creates the cross-system link





