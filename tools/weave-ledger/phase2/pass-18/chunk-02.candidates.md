# Phase 2 candidates — chunk-02

## createtreadmill   [anchors: create (1)]

Power-read: The Treadmill is a novelty low-tier kinetic source (~2× Hand Crank SU). The Maid Motor is a mid-tier variant that consumes a touhou_little_maid Soul Orb or Photo — that consumption is the cross-mod join key. loot=yes means there is a loot surface, though no blocks of its own appear in the jar.

Method-pull pass:
- The Soul Orb / Photo intake pattern already bridges Create↔TLM. Nothing in the methods palette can sensibly pull a Treadmill *block* through another system — it is a kinetic source block, not a material.
- M-24 (Mechanical component → propulsion/control): The Treadmill's output is raw SU; aeronautics needs SU sources. Could a "manual-power module" seat become an aeronautics tier-0 propulsion option (hand-cranked dirigible?). Theme-fit test: a hand-powered slow airship is whimsical-industrial in tone, not incoherent — but the Treadmill is *already* a rotational power block; routing it through aeronautics as an ingredient would be forcing a component into a role it doesn't thematically occupy (you'd ride, not cook it into, a treadmill). REJECT — forcing a component with no material surface.
- M-17 (Electric/FE charging bridge): Treadmill outputs SU, not FE; no direct bridge to magic/FE gear. REJECT — wrong energy type for M-17.
- The dossier's own candidate: "leave — TLM is curated flavor, not a loop system." That read is sound. createtreadmill IS Create; its Maid Motor is a soft cross-flavor tie, not a second pillar. No coherent second-system route survives the red-team.

- from: createtreadmill:treadmill (kinetic block) | via: create:deploying / M-24 | to: aeronautics | motif: M-24 | power: everyday | tone: clash | verdict: REJECT | reason: The treadmill is a power-source block you operate, not a machined component you route into a build; treating it as an aeronautics ingredient inverts its identity. Forcing.
- from: createtreadmill:maid_motor (Soul Orb input) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Soul Orbs are touhou_little_maid flavor items (cute maid-companion), not spirit/magic reagents in tone; routing them through an arcane infusion would clash with both TLM's whimsy and Occultism's grimoire aesthetic. Tone clash kills it.
- LEAVE — createtreadmill is a one-anchor Create novelty source (with a flavor TLM cross-tie); no loop-advancing second weave survives the red-team without forcing a tone mismatch or inverting the block's identity.

---

## lootr   [anchors: support/QoL (1)]

Power-read: Purely behavioral — instanced loot per player. No items of its own. loot=yes in the jar counts are the vanilla containers it intercepts, not its own drops. Nothing to route material through.

- LEAVE — lootr is a multiplayer-fairness behavior mod with no material surface; it has no items or processing methods. The only conceivable "weave" would be a loot-table edit on structures that happen to use Lootr containers — but that edit would target the *structure mod*, not lootr. Genuine zero-weave support role.

---

## formationsnether   [anchors: survival (1)]

Power-read: Zero registered items/blocks. Content surface = the Nether structure loot tables it places (loot=yes confirmed). The dossier already flagged the loot-seed route as the only real surface, though it marked it [WEAK]. Let me interrogate that weakness: the briefing explicitly says a structure mod with loot is a REAL candidate for loot-seed (M-08/M-14/M-02/M-15), not a LEAVE.

Nether-thematic analysis:
- Nether = hostile-wastes danger (survival-pressure face). Structures here yield exploration reward.
- M-14 (Bounty → drop economy): Nether structures often contain blaze rods, nether wart, gold, quartz. Seeding a Numismatics-denomination item (e.g. a coin) or a bounty-relevant Nether drop into the altar/chest tables routes Nether exploration → economy. A player who raids a Nether altar gets a sellable good. Tone: coherent — these are hostile ruins; finding buried currency/trade-goods in a dangerous place makes sense. Survives red-team.
- M-02 (Mob-drop reagent sink): The structures could carry a unique Nether-magic reagent in their loot (one specific item seeded as an occult reagent), giving exploration a magic-reagent payoff. But formationsnether adds no new mobs or drops of its own — the reagent would be a foreign drop seeded in. That is a valid loot-seed (M-02 says "mob/boss drop given a use"; here it would be giving a world-drop a use, slightly different). Red-team: borderline — M-02 is a mob-drop-reagent motif; seeding a reagent into a chest is looser. Still defensible as a variant of M-02's spirit, since it places a magic-context item in a hostile-magic-themed structure. Accept with caveat.
- M-15 (Boss-key unlock): If one of the structures holds a boss-adjacent encounter and the chest can carry a boss-key fragment. The Nether structures include altars and sanctuaries — plausible for a ritual-component or magical fragment drop. Coherent. Survives red-team.
- M-08 (Coin from processed scarcity): Seeding actual coin denominations into loot is a lighter but valid M-08 variant (processed scarcity → coin; here "exploration of a dangerous place" is the effort, not physical processing). The closer motif is M-14 (bounty → drop → coin) or a loose M-08. The economy seam via coin-seeding is valid.

Strongest single route: M-14 loot-seed — seed a Numismatics coin denomination into altar/sanctuary loot tables so Nether dungeon-raiding pays out in currency, feeding the combat→economy edge of the loop.

Second route: M-02/M-10 — seed an Ars Nouveau or Occultism reagent (e.g. an arcane essence, a source gem, a silver dust) into the ritual-altar loot, so the Nether ruin feeds the magic production route. The thematic match with a ritual altar is very strong.

- from: formationsnether structure loot (altar/sanctuary chests) | via: loot-seed → numismatics coin | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Nether ruins are dangerous enough that finding sellable coin inside feels like earned reward — Nether raiders cash in on the economy.
- from: formationsnether structure loot (ritual altar chests) | via: loot-seed → ars_nouveau:source_gem or occultism reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ritual altars in the hostile wastes are exactly where a magic researcher would travel to find lost arcane components — the altar's theme makes the reagent drop obvious.
- from: formationsnether structure loot (sanctuary/castle chests) | via: loot-seed → boss-key fragment / M-15 gate component | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A Nether fortress ruin is the right place to find a locked component for high-tier Create/tech gear — deep-Nether exploration unlocks engineering capability.
- from: formationsnether structure loot (generic chests) | via: loot-seed → numismatics:coin_type (flat coin) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: M-08 is specifically "scarce regional metal → Create-processed → minted coin"; a plain chest-coin drop doesn't fit that processing chain. M-14 (accepted above) is the correct motif for exploration→coin. Avoid double-counting.

---

## revelationary   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Pure advancement-gating API. The dossier correctly identifies it as a support library that enables M-05 (native-method gating) when another mod uses it — but revelationary itself has no material surface.

- LEAVE — genuine zero-content library; nothing to weave. Its mechanic (advancement-gated block visibility) is a delivery mechanism for other mods' content, not a source of materials or methods in its own right.

---

## followersteleporttoo   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Pure pet-teleport behavior. No items, no methods.

- LEAVE — genuine zero-content behavior mod; no material surface to route through any method.

---

## biolith   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Worldgen placement API only.

- LEAVE — genuine zero-content worldgen library; no items or methods to weave.

---

## necronomicon   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Pure code utility library for ElocinDev's mod suite.

- LEAVE — genuine zero-content code library; nothing to weave.

---

## cbc_at   [anchors: create, aeronautics (2)]

Already at 2 anchors. Evaluate existing connections and whether a third/deepening is warranted.

Existing connections: Create (machined via create:cutting + CBC munition assembly pipeline) + aeronautics (arms ships/contraptions). These connections are:
- Create anchor: STRONG — every barrel/munition goes through Create cutting/casting and CBC's assembly chain. Grounded, multi-step, thematic. OK.
- Aeronautics anchor: STRONG — the mod exists specifically to arm Aeronautics ships. The PvPvE combat loop closes through this. OK.

REWORK check: No arbitrary connections observed. The Create machining pipeline is deep and appropriate (not a single cheap step). The aeronautics tie is the whole point of the mod.

Now: is a third weave warranted? Dossier candidate: M-05 gating (boss drop as input for the heavy autocannon / rocket tier). This is not a new anchor — it deepens the existing Create+aeronautics pair. It is a valid *deepening* candidate.

- from: cbc_at:bronze_heavy_autocannon / rocket pod (high-tier weapon) | via: recipe gating with boss drop (M-15) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A ship-mounted rocket launcher demands something more than bronze and gunpowder — a boss component gates the tier and makes high-end naval armament feel earned.
- from: cbc_at munition types (caseless / cluster / AP rocket) | via: create:sequenced_assembly (M-06 chain) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Complex multi-stage munitions (fuze → fill → tracer → case) already map to sequenced assembly; making that explicit in the recipe graph tightens Create's role as the munition factory.
- from: cbc_at loot (loot=yes) | via: loot-seed → numismatics (scavenged weapon parts) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: cbc_at is a *crafting* mod, not a structure mod — its loot=yes is likely recipe/advancement data, not structure chest loot. Seeding coin into what are probably just item drops or recipe unlocks makes no sense. The mod doesn't place structures.

REWORK: OK — existing connections (Create machining + aeronautics arming) are sound and well-grounded.

---

## afk-sleep-1.3.2   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Pure server behavior (sleep quorum logic).

- LEAVE — genuine zero-content server behavior mod; nothing to weave.

---

## gnkinetics   [anchors: create (1)]

Power-read: 33 blocks, 31 items — substantial content. Gear types: planetary, ring, worm gears (specialty, mid-tier mechanism), chainable cogwheels (everyday Create utility), large cog crank (manual power, everyday). loot=yes (probably recipe/advancement data or small drops). No registered recipe types of its own — rides Create's kinetic system.

Method-pull: gnkinetics outputs precision kinetic components. Who wants precision mechanical components in the methods palette?

- M-24 (Mechanical component → propulsion/control): gnkinetics' worm gear, planetary gear, and ring gear are exactly the kind of specialty mechanical components an Aeronautics drivetrain/control surface would plausibly require. A worm gear is used in real aircraft control-surface linkages; a planetary gear would appear in a high-torque propeller hub. Routing `gnkinetics:worm_gear` or `gnkinetics:planetary_gear` through aeronautics drivetrain recipes gives the Create→aeronautics supply line a meaningful mechanical-component tier beyond just SU. Tone: industrial-Create → aeronautics is entirely coherent. Power: mid (worm gear is mid-tier gnkinetics content, not a basic cog). Survives red-team: a player building an airship's control system *should* need precision gear assemblies, not just vanilla cogwheels. STRONG ACCEPT.
- M-06 (Sequenced-assembly keystone): The planetary_gear_struct block suggests there may already be a multi-part structure assembly. Routing the large industrial gear or planetary gear through create:sequenced_assembly as an intermediate (making gnkinetics gear types the output of an assembly step) deepens Create integration. Tone: ok. Power: mid-endgame. But without confirmed recipe-type registration, this is proposing a KubeJS recipe wrapping a gnkinetics item in a sequenced assembly chain — valid as M-06 intent. ACCEPT (moderate confidence — depends on what gnkinetics' vanilla crafting looks like; don't overgate the mid-tier parts).
- M-17 (FE charging bridge): gnkinetics gear parts are pure mechanical; no FE/magic hook is thematically coherent. REJECT — no magic surface.
- M-23 (Structural alloy → airframe): The industrial_gear and large_industrial_gear are explicitly the "industrial" tier of gnkinetics — heavier, more specialized. These as airframe-structural components (not just drivetrain) is a stretch but not impossible. However M-24 already captures the drivetrain route, and M-23 is for metal plates/beams/alloys (structural material), not gears. REJECT — gnkinetics makes gears, not structural material; M-24 is the correct motif.

- from: gnkinetics:worm_gear / gnkinetics:planetary_gear | via: aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: An airship's control surfaces and propeller hubs need precision gearing that vanilla cogwheels can't provide — the worm gear routes into the aileron mechanism, the planetary gear into the high-torque propeller hub.
- from: gnkinetics:large_industrial_gear / gnkinetics:industrial_gear | via: create:sequenced_assembly as intermediate | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Industrial-grade gearsets are themselves a multi-step Create output — pressing, cutting, and fitting together — before they go into the high-tier aeronautics drivetrain.
- from: gnkinetics:chainable_cogwheel (everyday cog utility) | via: any complex chain | to: any | motif: M-06 | power: everyday | tone: ok | verdict: REJECT | reason: The briefing guardrail — never gate a basic/everyday component behind a complex recipe. Chainable cogwheels are everyday Create utility; they belong on a simple vanilla/Create recipe, not in a sequenced assembly chain.
- from: gnkinetics:worm_gear | via: magic ritual/infusion | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Precision mechanical gears have no magic-resonance that makes arcane infusion coherent. Tone clash; the industrial aesthetic of gnkinetics and the mystical aesthetic of Ars/Occultism don't meet here.

---

## bundle_recipe   [anchors: support/QoL (1)]

Zero blocks, zero items (the output is vanilla minecraft:bundle), loot=no. Datapack recipe only. No material of its own.

- LEAVE — this mod is purely a recipe datapack enabling a vanilla item; it adds nothing to route through any method. The bundle itself is vanilla and its connections belong to whoever assigns leather a use elsewhere.

---

## undergroundworlds   [anchors: survival (1)]

Power-read: 30 blocks, 68 items, loot=yes. Notable items: spider_fang (mob drop from Black Recluse), desert_charm (blindness immunity, curio slot), antidote_flask (poison immunity, curio slot), freezing tools (on-hit freeze), blade_of_the_jungle (poison on hit), axe_of_regrowth. Also substantial deco brick sets (temple_bricks, pyramid_bricks, ice_bricks) in multiple variants.

Method-pull:
- spider_fang: a unique mob drop. M-02 (mob-drop reagent sink) — give it a use as a magic/chemistry reagent via occultism:spirit_fire (transmute → arcane reagent) or ars_nouveau:imbuement (attune into a spell component). Tone: spider fang → spirit magic is thematically obvious (venom/darkness in occult tradition). Survives red-team strongly.
- Temple/pyramid deco bricks: M-04 (Create recycles deco) — create:crushing the brick variants back to raw stone + gravel + XP nugget. Tone: entirely coherent — you mine old temples and get raw material back. This is the standard M-04 application.
- The freezing tools / blade of the jungle: endgame combat gear. M-15 — use one of these as a gate component input for a high-tier Create/tech recipe. Freeze-enchanted tools are thematically adjacent to Nether machinery or cryogenic processing. But undergroundworlds' weapons are standalone dungeon finds; using them *as inputs* to a Create recipe inverts their identity (tools are outputs, not ingredients). REJECT — would feel wrong to consume a unique exploration weapon in a crafting step.
- desert_charm / antidote_flask (curio slot items): These could receive a M-10 arcane-infusion upgrade — feed them into ars_nouveau:enchanting_apparatus or irons_spellbooks:alchemist_cauldron to strengthen the immunity duration/effect. Tone: a desert charm being arcane-attuned for better blindness resistance is coherent. Power: mid (it's mid-tier survival gear). But this is adding an upgrade path to existing items, which is more of a recipe-design detail than a weave anchor — still, it is a valid M-10 instance.
- The loot tables: M-14 (bounty → drop economy) — seed coin or a bounty marker into dungeon chest loot so defeating dungeon mobs and looting underground temples feeds the economy. These are dangerous exploration targets (spider caves, ice dungeons, pyramid). Tone: finding sellable treasure in a pyramid is exactly what players would expect. ACCEPT.

REWORK: No existing connections to check (1 anchor only).

- from: undergroundworlds:spider_fang | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The Black Recluse's venom-laden fang is a natural occult ingredient — transmute it through spirit fire and it becomes a ritual component, giving dungeon-spelunkers a magic-feed pipeline.
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: An exotic spider fang attuned through arcane imbuement becomes a spell catalyst — the deep-cave biome's signature drop feeds the magic production route.
- from: undergroundworlds brick deco (temple_bricks, pyramid_bricks, ice_bricks variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Looted temple bricks run through the crusher yield raw stone and gravel — ruins become raw material, tying exploration output to the Create processing line.
- from: undergroundworlds dungeon chest loot | via: loot-seed → numismatics coin / bounty marker | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A pyramid or ice dungeon is exactly where adventurers find buried treasure — seeding coin denomination drops connects underground exploration directly to the trade economy.
- from: undergroundworlds:desert_charm / undergroundworlds:antidote_flask | via: ars_nouveau:enchanting_apparatus upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: These are utility trinkets (curio immunities), not thematically magical items; an arcane infusion upgrade feels grafted on rather than organic. The spider_fang routes (M-02, M-10 above) are the stronger and more coherent magic bridges. Adding a third magic route on mundane trinkets is unnecessary and adds complexity without narrative payoff.
- from: undergroundworlds:freezing_sword / undergroundworlds:blade_of_the_jungle | via: recipe-consume as Create input | to: create | motif: M-15 | power: endgame | tone: clash | verdict: REJECT | reason: These unique exploration weapons lose their identity as player rewards if consumed as crafting inputs. A boss drop or unique weapon should remain a prize, not a recipe ingredient. Tone clash: consumes what should feel special.

---

## txnilib   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Developer utility library.

- LEAVE — genuine zero-content code library; nothing to weave.

---

## startuptime   [anchors: support/diagnostic (1)]

Zero blocks, zero items, loot=no. Boot-time logger.

- LEAVE — genuine zero-content diagnostic utility; nothing to weave.

---

## dungeons_arise_seven_seas   [anchors: survival (1)]

Power-read: Zero registered blocks/items, loot=yes. Content surface = the ocean structure loot tables (galleons, fortresses, sunken ruins). These are elaborate, explorable naval structures — boardable galleons with loot.

Method-pull (loot-seed surface only):
- M-14 (Bounty → drop economy): Ocean galleons and fortresses are thematically the highest-value dungeon-raiding targets (pirates, buried treasure, naval salvage). Seeding Numismatics coin into galleon chest loot is the most natural imaginable connection — naval plunder feeds the economy. Tone: perfect. Survives red-team easily.
- M-02 (Mob-drop reagent sink): Could seed a magic reagent into ocean structure loot. Underwater/nautical items (e.g. a sea-salt crystal, a drowned's artifact) as Ars/Occultism reagents. Tone: coherent for a maritime-magic vibe (sea salt, brine essence, saltwater reagent). But the mod adds no new mobs and the dropped items would need to be a vanilla/modded item already in the pack. A pre-existing reagent seeded into the loot is valid as M-02 (giving an item a new use). However, seeding an existing item (e.g. `occultism:silver_dust`, `ars_nouveau:source_gem`) into ocean dungeon loot doesn't *give a new use to an isolated drop* — it gives a *new source* for an existing reagent. That's M-02 inverted. REJECT for M-02 specifically; reclassify.
- Actually for M-08/M-14 the coin is the clean route. A second option: M-15 (boss-key unlock) — the galleon captain (if any boss mob spawns) drops a component for a high-tier Create/tech recipe. Tone: a naval commander's chart/key as a tech unlock is coherent for a nautical-adventure pack. But the mod may not guarantee a boss mob; it might just have structure loot. Moderate confidence.
- Aeronautics thematic edge: The dossier flagged a thematic rhyme with aeronautics (ships), but correctly noted these are static structures. However — seeding aeronautics-construction materials (e.g. a ship blueprint, sail fabric, a nautical chart) into the galleon loot would give Aeronautics a discovery-unlock flavor: you sail out, board a derelict galleon, and find the parts/plans for your own airship. Tone: extremely thematic (ocean-to-air journey). Motif: M-23 (structural alloy → airframe) or M-15 (boss-key unlock) depending on whether it's materials or a gating component. This is a strong second route.

- from: dungeons_arise_seven_seas galleon/fortress chest loot | via: loot-seed → numismatics coin | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Boarding and looting a derelict galleon is the pack's highest-value naval exploit — finding salvageable coin connects ocean raiders directly to the trade economy.
- from: dungeons_arise_seven_seas galleon loot (sunken ruins / fortress chests) | via: loot-seed → aeronautics structural material or nautical blueprint | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: A sunken or derelict galleon is exactly where you'd salvage the hull plates, rigging hardware, and design plans that let you build your own airship — ocean exploration unlocks the aeronautics supply line.
- from: dungeons_arise_seven_seas galleon captain spawn / fortress boss | via: loot-seed → boss-key component for high-tier Create recipe | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: The mod doesn't guarantee a distinct boss mob; it places *structures*, not boss encounters. Without a confirmed boss spawn, a M-15 boss-key drop is speculative. The M-14 coin and M-23 aeronautics routes are more solidly grounded. Flag for Phase 3 verification.

---

## multipiston   [anchors: support/MineColonies-dependency (1)]

1 block (multipistonblock), 1 item, loot=yes (likely just its own item drop), no recipe types. Purpose: a MineColonies/Structurize internal utility block.

Power-read: The block is used internally by MineColonies for structure building. Players may encounter it but it's not a player-facing crafted item. Its loot=yes is probably just the block's own item drop.

Method-pull: The multipistonblock has no foreign material surface — it's a functional block for colony automation, not a material or craft ingredient. Its only connection is to MineColonies (which is itself a cross-cutting production route in the pack's loop).

Red-team: Could the piston block serve as a Create contraption component or be crafted using Create parts? Thematically a "super-piston" could be built from Create mechanical parts. But this is a MineColonies dependency that players aren't expected to interact with directly — adding a recipe path would be confusing if MineColonies auto-provides/places it.

- from: multipiston:multipistonblock | via: recipe requiring Create mechanical parts | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: The multipistonblock is a MineColonies/Structurize internal tool, not a player-built item in the conventional sense. Adding a Create-part recipe would add complexity where players don't expect to engage — it's colony infrastructure, not player crafting. Could confuse colony automation. Leave as MineColonies dependency.
- LEAVE — multipiston is a MineColonies/Structurize internal block (1 sanctioned support anchor); no player-facing weave is coherent without conflicting with MineColonies' own supply chain.

---

## cmparallelpipes   [anchors: create (1)]

2 items (pipe_wrench, pipe_wrench_gear), 0 blocks, 1 c:tag, loot=no. A Create fluid-logistics QoL tool.

Power-read: The Pipe Wrench is an everyday Create utility item — mid-tier crafting, not endgame. The pipe_wrench_gear is likely a crafting intermediate.

Method-pull: The wrench and gear are simple tool items. Who wants them?
- M-20 (Deploy-application upgrade): A Pipe Wrench is a tool applied to pipes; could `create:deploying` / `item_application` use the wrench as an applicator in a recipe? Tone: somewhat forced — the wrench is a player-held utility tool, not a recipe ingredient or applicator block. The deployer would use the wrench as a consumable to process pipe configurations? That inverts its identity.
- M-24 (Aeronautics drivetrain): A wrench is a tool, not a mechanical component for aeronautics. REJECT trivially.
- The pipe_wrench_gear (if it's a standalone brass gear intermediate): Could this feed M-08 or M-24? The "gear" suffix suggests it's a recipe part. A brass gear that's an intermediate for a plumbing wrench could also be a viable aeronautics component (M-24) or a Create metal byproduct. But since this is only a crafting intermediate for a single tool, pulling it into a cross-system route is tenuous — it would need to be a distinct, reusable component, and the mod's footprint (2 items, 0 blocks) doesn't suggest that.

Red-team result: cmparallelpipes is deep Create-internal plumbing QoL. No second pillar survives without forcing. The dossier's own LEAVE assessment is correct.

- from: cmparallelpipes:pipe_wrench | via: create:deploying as applicator | to: create | motif: M-20 | power: everyday | tone: clash | verdict: REJECT | reason: The pipe_wrench is a player-used tool for locking pipe connections; using it as a consumable deployer applicator would destroy the item on use and make no sense for a reusable wrench. Identity mismatch.
- LEAVE — cmparallelpipes is a single-purpose Create plumbing utility tool; no coherent second-system weave survives without inverting its identity or forcing the connection.

---

## create_ironworks   [anchors: create (1)]

Power-read: 8 blocks, 81 items, 44 c:tags, 3 biome-modifiers, loot=yes. This is a substantive metal-tier mod. Key outputs: tin ore/ingot/plate/nugget, bronze ingot/plate/block, steel ingot/plate/block, brass/bronze/steel tool and armor sets, brass Hammer (3×3 mining), brass Paxel, steel items upgradeable to Netherite. Already rides create:crushing/mixing/pressing/sequenced_assembly/splashing. Full c:tag vocabulary for tin/bronze/steel metals.

Method-pull: create_ironworks exports rich metal tags (c:ingots/tin, c:ingots/bronze, c:ingots/steel, c:plates/steel, c:plates/bronze, c:plates/tin). Who wants these?

- M-08 (Coin from processed scarcity): Tin is a new scarce regional ore (3 biome-modifiers). crush tin ore → process through Create → mint into Numismatics coin. This is M-08 as written — exactly the scarcity-economy seam. Regional tin forces specialization; the Create processing chain (crushing, mixing for alloys) produces a metal; minting closes the scarcity→economy loop. VERY STRONG ACCEPT.
- M-23 (Structural alloy → airframe/hull): create_ironworks:steel_plate (c:plates/steel) and create_ironworks:sturdy_sheet_block are structurally appropriate for Aeronautics airframe construction. Steel plate as a required ingredient for mid-to-high-tier airship hull blocks is the M-23 application. Tone: perfect — ironworks steel is literally forged structural metal, and a load-bearing airship hull demands it. STRONG ACCEPT.
- M-13 (Fuel → propulsion): REJECT — create_ironworks makes metals, not fuels.
- M-24 (Mechanical component → propulsion/control): Bronze is the CBC_AT barrel material; create_ironworks:bronze_ingot / bronze_plate feeds back into cannon and potentially aeronautics control hardware. But this is more of an ingredient connection than a new method-routing — the bronze already goes into cbc_at barrels. The plate/sheet going into aeronautics control surfaces is valid but already captured by M-23 (which covers structural material). REJECT as redundant given M-23 is accepted.
- M-10 (Arcane infusion pull): Could steel or tin be arcane-infused into a magic component? Tone: industrial metals don't have a magic-resonance that makes infusion coherent unless there's a theme hook (like mithril in fantasy). REJECT — tone mismatch; no magic narrative for tin or steel.
- M-15 (Boss-key unlock): The Steel upgrade path (steel → Netherite-tier via Smithing) could be gated on a boss drop — you need a boss component to unlock the Steel-to-Netherite upgrade template. Tone: very coherent — high-tier metallurgy requiring a dangerous boss encounter is a natural progression gate. Power: endgame. ACCEPT.
- M-16 (Seasonal reagent): Tin ore gen is biome-based, not seasonal. REJECT — no seasonal hook.

REWORK: No existing connections beyond Create (1 anchor) — the two 2nd-anchor candidates in the dossier (M-08 and survival/worldgen) are the same ones I'm arriving at independently. The survival/worldgen note in the dossier is really just describing the scarcity foundation, not a distinct anchor — M-08 captures it. The dossier is sound.

- from: create_ironworks:tin_ingot / tin_ore (regional scarce metal) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: everyday-mid | tone: ok | verdict: ACCEPT | hook: Tin is a new regional ore that not every player settles near — the Create processing chain (crush, mix for bronze alloy, mint the surplus) routes scarcity directly into the coin economy, making the ironsmith's region worth trading with.
- from: create_ironworks:steel_plate / create_ironworks:sturdy_sheet_block | via: aeronautics airframe/hull recipe | to: aeronautics | motif: M-23 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: You can't build a load-bearing airship hull out of wood and andesite — forged steel plate from the ironworks is the structural material that makes a proper ship hull, giving aeronautics a real metalworking supply dependency.
- from: create_ironworks steel tier (steel ingot → Netherite upgrade path) | via: recipe gating with boss drop | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Unlocking Netherite-grade steel requires a dangerous boss encounter — the highest metal tier is earned through combat, not just grinding ore and coal.
- from: create_ironworks:bronze_plate / create_ironworks:bronze_ingot | via: create:sequenced_assembly as cannon/drivetrain intermediate | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Bronze already feeds cbc_at cannon barrels (existing connection in the system); routing it a second time into aeronautics drivetrain via M-24 is redundant overlap. M-23 (steel plate for airframes) is the cleaner, non-redundant aeronautics route. Avoid double-routing the same material into the same system.
- from: create_ironworks:tin_ingot | via: ars_nouveau:imbuement or occultism ritual | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Tin has no magic-resonance in the pack's lore (it's an industrial alloying metal, not a mystical one). Arcane-infusing tin would feel arbitrary. The economy route (M-08) is the natural second pillar.

---

## doubledoors   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Pure door-interaction behavior.

- LEAVE — genuine zero-content behavior mod; no material surface to route through any method.

---

## bagus_lib   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Developer utility library.

- LEAVE — genuine zero-content code library; nothing to weave.

---

== CHUNK COMPLETE ==
