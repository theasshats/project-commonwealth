# Phase 2 candidates — chunk-14

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

Single music disc; no items beyond itself, no recipe-types, no loot tables of interest (the disc is its own drop).

- LEAVE — genuine zero-content single-item flavor mod (one meme music disc). No material surface, no processing method, no loot table worth seeding. Forcing an edge would be noise.

## trashslot   [anchors: support/QoL (1)]

Client-side UI mod — trash slot in the inventory. Zero blocks, zero items, zero loot, no recipe-types. Pure behavior.

- LEAVE — zero-content code mod (UI behavior only). No material, no recipe surface, nothing to route through any method. Canonical LEAVE case.

## emojitype   [anchors: support/client-UI (1)]

Client-only chat input helper. Zero blocks, zero items, no loot.

- LEAVE — zero-content client code library. Text-input QoL with no in-world surface. Nothing to weave.

## ecologics   [anchors: survival (1)]

94 blocks, 104 items, loot=yes. Tropical biome expansion: coconut palms, coconut crab mobs, azalea woodset. Outputs `c:item/foods/fruit`, `c:item/foods/nut`, `c:item/foods/soup`, `c:item/foods/cooked_meat`. Coconut slice clears potion effects (milk analog). No registered recipe-types — its materials are inputs to foreign methods.

Power-read: coconut/nut/fruit = everyday tier (common biome drop, renewable); azalea woodset = everyday decoration. Effect-clearing coconut slice is mid-tier (functional utility).

**Method-pull candidates:**

- from: ecologics:coconut / coconut_slice / nuts (c:item/foods/fruit+nut) | via: farmersdelight:cooking + extradelight:* | to: survival | motif: M-12 | power: everyday | tone: ok — tropical fruits into cooking-pot dishes (coconut curry, palm soup) is an obvious culinary fit; player nods at "of course" | verdict: ACCEPT | hook: Coconut and tropical nuts run through the cooking pot or mixing bowl into prepared dishes, widening the diet-variety spread across all five nutrition groups.

- from: ecologics:coconut_slice (effect-clearing food) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 / M-11 | power: mid | tone: clash — the effect-clearing property is mechanically interesting but the coconut's theme is "tropical beach snack," not arcane reagent; mapping a beach fruit to spirit-fire or arcane infusion feels arbitrary/tonal mismatch | verdict: REJECT | reason: tone clash; coconut's effect-clearing is a survival convenience, not a magical property — the imbuement/ritual framing imports magic lore the mod doesn't carry.

- from: ecologics:coconut_log / azalea_log (woodsets) | via: create:milling (sawdust byproduct) | to: create | motif: M-04 | power: everyday | tone: ok — woodsets are decoration; milling yields sawdust/pulp byproduct, tying the deco palette into Create's processing loop | verdict: ACCEPT | hook: Coconut and azalea logs crushed in the millstone yield sawdust, looping the tropical woodset into Create's industrial material flow.

- from: ecologics foods (c:item/foods/*) | via: create:mixing (food compound processing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's mixing basin blends coconut milk (pressed from coconut) into food compounds — standard processing-chain pull for any fruit-bearing biome mod.

Red-team on M-12 pair: three ACCEPT edges for one everyday mod risks over-wiring. The cooking (farmersdelight) and the Create milling/mixing are genuinely separate methods, but only the cooking one has rich content density (enough distinct coconut dishes to justify). The Create milling edge is lightweight (sawdust byproduct from woodset). Keep both — they are different methods and different outputs.

OK — connections in dossier are directionally sound; the M-12 cooking candidate is the primary, milling/mixing are lightweight secondaries.

## mushroomquest   [anchors: survival (1)]

48 blocks, 352 items, 32 biome-modifiers, loot=yes. Large foraged-mushroom mod: biome-spread foraging stumps yield 137+ edible caps with positive/negative effects; mushroom-cap armor; Mushroom Island biome structures with loot. No registered recipe-types.

Power-read: common mushrooms = everyday; rare/mythical caps (agarikon, angel's wing) = mid/endgame tier — they have special effects (medicinal, hallucinogenic, deadly). Armor = mid (mushroom cap). Loot tables from Mushroom Island structures are relevant for seeding.

**Method-pull candidates:**

- from: mushroomquest rare/mythical mushroom caps (effect-bearing) | via: farmersdelight:cooking / extradelight:* | to: survival | motif: M-12 | power: everyday-mid | tone: ok — cooking a baybolete or artist_conk into a dish is perfectly sensible forager-to-cook pipeline | verdict: ACCEPT | hook: Rare foraged caps run through the cooking pot into effect-granting meals, making mycology a distinct diet-pillar input (fungal protein group).

- from: mushroomquest deadly/mythical mushroom caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-10 | power: mid | tone: ok — toxic/mythical fungi transmuted into occult reagents is a coherent alchemical/druidic trope; "deadly mushroom → spirit essence" is a well-trodden fantasy archetype | verdict: ACCEPT | hook: The agarikon or death cap, burned in spirit-fire, yields an occult essence — the mycology specialist becomes a reagent supplier for magic players.

- from: mushroomquest:glowshrooms (bioluminescent mushrooms) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok — glowing fungi as a light/aura reagent in arcane infusion is thematically coherent (bioluminescence → luminous magic) | verdict: ACCEPT | hook: Glowshroom caps are a minor but coherent input to arcane imbuement, bringing the forager-biome into the magic web.

- from: mushroomquest structure loot (Mushroom Island biome structures) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — seed rare reagent items (magic catalyst, coin) into the Mushroom Island structure chests so exploration feeds economy and magic supply chains | verdict: ACCEPT | hook: Mushroom Island ruins reward explorers with rare magic reagents or numismatics coin, making the biome a viable combat/exploration-supply output.

- from: mushroomquest M-09 (bare sell) candidate in dossier | verdict: REJECT | reason: dossier candidate cited M-09 which is RETIRED — bare "sell rare mushrooms for coin" is the ambient endpoint, not a weave. Redirect is covered by M-34 loot-seed above or M-12 processing for the economy leg (if dishes are traded, that's the ambient loop naturally).

REWORK: dossier's economy candidate cites M-09 — flag as retired, covered by the M-34 loot-seed + M-12 processing → ambient trade path.

## recipe_integration   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Datapack-as-mod shipping ~3,700 conditional cross-mod recipes. Its "made-by methods" list includes create:milling/mixing/pressing, ars_nouveau:scry_ritual, occultism:crushing, farmersdelight:cutting, farm_and_charm:mincer — all riding installed-mod methods. Most of its 82 c:tags reference uninstalled mods (Mekanism, MI, GT, IE, Aether) and are inert here.

Power-read: infrastructure tier — it IS the connective tissue, not content. Its value is: which of its ~3,700 recipes actually fire on this modlist?

- LEAVE — pure recipe-bridge support library; it is the weaving tool, not a node in the web. Its installed-mod-conditional recipes may already advance the web without Phase 3 action, but recipe_integration itself has no content anchor to assign a second pillar to. Record note: **audit which of its create:milling/mixing/pressing recipes fire on THIS modlist** (many c:tags are inert, but the create:* + farmersdelight:cutting subset may add real cross-mod edges for free). That audit is an infrastructure task, not a weave proposal.

## create_pattern_schematics   [anchors: create (1)]

3 items, no blocks, no loot. Create build-automation QoL — Pattern Schematic tiles repeating builds on contraptions/gantries/trains. No recipe-types of its own.

- LEAVE — Create-internal build tooling with no foreign material surface. Its anchor is correctly the Create spine. No coherent 2nd anchor: the schematic items aren't traded goods, not survival pressure, not magic material. Forcing one would be arbitrary.

## copycats   [anchors: create (1)]

46 blocks, 45 items, loot=yes. Create decoration addon: copycat shapes built from zinc, adopt any block's texture. Consumes Create's zinc; no recipe-types of its own.

- from: copycats:copycat_* shapes (zinc-built, texture from any block) | via: create:crushing (zinc source) | to: create | motif: M-04 | power: everyday | tone: ok — copycat blocks' zinc is crushed from ore → pressed into blank shapes → textured with pack blocks; the whole deco palette loops through Create's material web | verdict: ACCEPT | hook: Copycat blank shapes are pressed zinc, grounding the pack's richest decoration tool in Create's metal-processing chain.

- from: copycats shaped blocks as aeronautics hull decoration | via: loot-seed / recipe (aeronautics construction) | to: aeronautics | motif: M-23 | power: everyday | tone: ok — copycat blocks used as hull-skin material on airframes is a natural build use; however the aeronautics connection is through use as decoration, not as a structural load-bearing recipe | verdict: REJECT | reason: M-23 is structural alloy → airframe, not a decoration skin; copycat blocks aren't load-bearing. The aeronautics arm requires structural alloy/metal, not a cosmetic shape. Tone does not clash but motif doesn't fit; the decoration use is ambient, not a weave.

OK — existing create anchor is sound (zinc-sourced, Create-dependent). M-04 ACCEPT above strengthens the loop edge; no forced second pillar needed beyond that.

## create   [anchors: create (1)]

The pack's tech spine and the method library. 17 registered recipe-types. 643 blocks, 775 items, loot=yes. Dossier correctly notes Create is the hub other mods weave INTO, not a node needing a 2nd pillar from the outside.

- LEAVE — Create is the method library itself. Proposing edges that consume Create (e.g. "create materials go into X") is backwards — every mod in the pack already routes through Create's methods. Assigning it a second external pillar anchor would invert the architecture. No weave proposed.

OK — dossier's self-assessment is correct. Create's "2nd anchor" is the sum of all the pack's weaves through its methods, not a single edge.

## immersive_armors   [anchors: survival (1)]

0 blocks, 41 items, no loot. ~10 armor sets (Bone/Wither/Warrior/Heavy/Robe/Slime/Divine/Prismarine/Wooden/Steampunk) each with a set bonus; crafted via vanilla materials + wither skull for Wither set.

Power-read: Bone/Wooden = early game (vanilla materials, accessible). Heavy/Prismarine = mid (iron block, prismarine shard). Divine/Wither = endgame (wither skull — boss kill required). Steampunk = thematic Create-adjacent.

**Method-pull candidates:**

- from: immersive_armors:heavy_chestplate / heavy set (iron block base) | via: create:mechanical_crafting or create:pressing | to: create | motif: M-05 | power: mid | tone: ok — Heavy armor is plate-and-rivet industrial design; gating it on Create-pressed iron sheets and a Mechanical Crafter assembly step fits the "industrial armor" aesthetic perfectly | verdict: ACCEPT | hook: The Heavy armor set requires Create-pressed steel/iron plates in its assembly — industrial protection demands industrial fabrication.

- from: immersive_armors:steampunk set | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok — Steampunk is the most Create-native aesthetic; gating the Steampunk set behind a sequenced-assembly chain (brass fittings, cogwheel inlays) is the exact thematic lock this motif was designed for | verdict: ACCEPT | hook: The Steampunk armor's layered brass-and-gear construction is a natural Create sequenced-assembly chain, placing endgame-tier protection behind the tech spine.

- from: immersive_armors:divine set | via: ars_nouveau:armor_upgrade or ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok — Divine armor (blocks one hit per minute, radiant set) is thematically holy/arcane; completing it via an enchanting apparatus with magic reagents fits — divine protection needs divine investiture | verdict: ACCEPT | hook: The Divine armor set is finished at the Enchanting Apparatus with source gems, tying celestial protection to the magic spine.

- from: immersive_armors:wither set (wither skull input) | via: wither_skull = boss drop | to: survival | motif: M-15 | power: endgame | tone: ok — wither skull is the boss-key for the Wither armor; this is the motif's exact shape (boss drop as gate into complex gear) | verdict: ACCEPT | hook: Wither armor demands a Wither skull — the server's most dangerous boss fight gates the pack's most volatile armor set.

- from: immersive_armors dossier's economy candidate (M-09 bare sell) | verdict: REJECT | reason: M-09 is RETIRED. Armor as "sellable" is the ambient endpoint; what gates trade is the M-15 boss-key on the wither set, plus the M-05/M-06 Create gate on Heavy/Steampunk. Those are the real economy drivers (specialists producing and trading finished sets), not a bare sell link.

## createtreadmill   [anchors: create (1)]

2 blocks (treadmill, maid_motor), loot=yes. Adds player-powered (treadmill) and maid Soul Orb/Photo-powered (maid_motor) SU sources. Cross-mod: touhou_little_maid Soul Orb/Photo as the Maid Motor's fuel.

Power-read: treadmill = early game (manual power, 2× hand crank). Maid motor = mid (requires a tamed maid + Soul Orb, which is a TLM mid-game item).

**Method-pull candidates:**

- from: createtreadmill:maid_motor (consumes touhou_little_maid Soul Orb/Photo) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-19 / M-10 | power: mid | tone: clash — Soul Orb is a TLM item tied to the maid's "soul" concept; routing it through Occultism spirit-fire or arcane infusion imports heavy magic lore onto what is explicitly a cute/whimsical maid-companion mod. The tone mismatch (gothic occultism + anime maid hamster wheel) is a defect. | verdict: REJECT | reason: tone clash; the maid Soul Orb is TLM's own economy item (exchange for items), not an arcane material. Forcing it into Occultism spirit-fire or Ars imbuement is lore-incoherent.

- from: createtreadmill:treadmill (player effort → SU) | via: survival pressure loop | to: survival | motif: M-26 | power: everyday | tone: ok — the treadmill is a consumption sink: it consumes player action (stamina/effort) to generate SU, which is a real demand-renewal edge (you must keep running it) | verdict: REJECT | reason: no-motif fit — M-26 consumption sink is for items that are physically *spent* (fuel/food/durability); player effort is not a consumable item in the recipe sense. The treadmill's power-source mechanic is Create-internal, not a motif-mappable weave.

LEAVE — no second anchor justified. Treadmill is a novelty SU source (Create-internal); the Soul Orb link to TLM is a cute cross-mod bridge but TLM is not a loop-system pillar. No clean 2nd pillar without forcing.

## createmechanicalcompanion   [anchors: create (1)]

0 blocks, 21 items (including incomplete_* sequenced parts), loot=yes. Mechanical Wolf companion gated behind Create sequenced assembly + netherite plates. Already deeply Create-wired (uses create:sequenced_assembly, mechanical_crafting, sandpaper_polishing, deploying).

Power-read: mechanical_wolf_link = endgame (netherite plates + precision/regenerative casing = late Create progression). Modules vary mid-to-endgame. Boss or colony tier.

**Method-pull candidates:**

- from: createmechanicalcompanion:mechanical_wolf_link (endgame item) | via: boss drop as gate (M-15) | to: survival | motif: M-15 | power: endgame | tone: ok — the Quantum Drive or Optical Sensor that completes the wolf could require a boss drop (Cataclysm/Ice&Fire drop) as the keystone input, making the companion a reward that parallels the boss-fork design | verdict: ACCEPT | hook: The Mechanical Wolf's Quantum Drive requires a Cataclysm boss drop, placing this endgame companion at the intersection of combat progression and tech manufacturing.

- from: createmechanicalcompanion:optical_sensor (endgame component, sequenced assembly) | via: ars_nouveau:imbuement (arcane optic) | to: magic | motif: M-10 | power: endgame | tone: ok — an optical sensor on a mechanical wolf could plausibly require an imbuement step (the optic is enchanted to perceive magic signatures), threading magic into the Create-gated companion | verdict: REJECT | reason: the dossier explicitly notes there's no tradeable/magic/transport surface to route and the companion is personal-use combat. The optical sensor is an assembly intermediate; threading it through arcane infusion adds complexity without a sensible "of course" player reaction. The boss-key (M-15) ACCEPT above is sufficient and more coherent.

OK (on existing connections) — the Create anchor is well-established and deep. M-15 ACCEPT adds a survival/danger anchor. No further forced edges.

## modulargolems   [anchors: create (1)]

1 block (golem_workbench), 308 items, loot=yes. Tinker-style golem assembly: parts cast from metals (including boss-tier metals — dragonsteel from Ice&Fire, cursium from Cataclysm). Already uses create:crushing, create:mechanical_crafting, create:sequenced_assembly (inbound). Has three registered recipe-types: golem_assemble, golem_replace_part, golem_add_slot.

Power-read: Iron/Gold/Diamond golems = mid. Boss-metal (dragonsteel, cursium) golems = endgame. The upgrade-slot system is a deep progression tree.

**Method-pull candidates:**

- from: modulargolems endgame boss-metal golem bodies (dragonsteel, cursium) | via: modulargolems:golem_assemble consuming boss drops | to: survival | motif: M-15 | power: endgame | tone: ok — boss-metal bodies naturally demand the boss drop; Ice&Fire dragonsteel requires killing a fire/ice/lightning dragon, Cataclysm cursium a Cataclysm boss; the loop "kill boss → get metal → build apex golem" is exactly what M-15 describes | verdict: ACCEPT | hook: The dragon-steel golem body requires dragonsteel ingots — you commission a combat specialist to slay Ice&Fire dragons before the golemancer can assemble an apex construct.

- from: modulargolems:golem_assemble consuming ars_nouveau:source_gem or Occultism material (golem-core arcane upgrade) | via: modulargolems:golem_add_slot | to: magic | motif: M-10 / M-29 | power: mid-endgame | tone: ok — golems imbued with arcane cores (a source gem slotted as a magic upgrade) straddle the industrial-arcane vibe the dossier notes; an ars_nouveau imbuement step on the golem-core ties golemancy to the magic web and forces the golemancer to trade with a magic specialist | verdict: ACCEPT | hook: An arcane-core upgrade slot requires an imbuement-charged source gem, forcing the golem-builder to coordinate with the magic specialist for the most powerful golem upgrades.

- from: modulargolems via create:mixing (molten-metal application to golem parts) | to: create | motif: M-29 | power: mid | tone: ok — dossier notes Create mixing can apply molten metal onto parts; this is already implied by the inbound create:crushing dependency, but the cross-route dependency (golem-part material requires Create-processed alloy) is the cleaner framing | verdict: ACCEPT | hook: Golem parts are cast from Create-processed alloys (bronze/steel from create_ironworks crushing+mixing), grounding the whole golem tier in the Create production chain.

OK — existing anchors (Create) are sound. Three ACCEPT edges bring survival (M-15 boss-metal) and magic (M-10 arcane core) into scope, achieving the two-pillar target.

## byzantine   [anchors: survival (1)]

0 blocks, 0 items, loot=no. Pure MineColonies building-schematic style pack (Byzantine/Shogun/Nile architectural styles). No own recipe-types; depends on minecolonies + structurize + domum_ornamentum.

- LEAVE — pure schematic/style data pack for MineColonies; no items, no blocks, no loot table, no recipe surface. Its weave is entirely through MineColonies (which is the M-28 colony route). Assigning a second anchor would require routing its non-existent content through a method. Curated colony flavor; the colony route is the anchor.

## securitycraft   [anchors: support (1)]

657 blocks, 690 items, loot=yes. Security toolkit: reinforcing recipes (any block → reinforced variant), keypads/retinal scanners, block mines, sentries, security cameras, Block Pocket Manager. 7 registered recipe-types (reinforcing/unreinforcing, copy-device recipes).

Power-read: reinforcing = everyday-mid (iron/glass cost, available early). Sentries / Block Pocket Manager = mid-endgame (advanced materials). Block mines vary by ore type (diamond_mine = endgame). Loot tables present (loot=yes, 28 c:tags).

**Method-pull candidates:**

- from: securitycraft reinforcing system (accepts any modded block as input) | via: securitycraft:block_reinforcing_recipe consuming Create-processed metal | to: create | motif: M-05 | power: mid | tone: ok — gating the reinforcing compound or the sentry's processor behind Create-fabricated components (brass plate, zinc mesh) ties base-defense to the tech spine; a reinforced base costs Create-tier materials, not just iron | verdict: ACCEPT | hook: Reinforcing requires a Create-fabricated compound, making base hardening part of the industrial progression — you can't lock down your base until you've built your factory.

- from: securitycraft:sentry (auto-targeting combat defense) | via: create:mechanical_crafting or create:sequenced_assembly | to: create | motif: M-05 | power: mid-endgame | tone: ok — an autonomous turret is mechanical in nature; its processor/targeting system built through Create mechanical crafting is sensible | verdict: ACCEPT | hook: The sentry's targeting processor is assembled on the Mechanical Crafter, placing automated base defense at the output of the Create spine.

- from: securitycraft block mines (diamond_mine, ancient_debris_mine etc.) | via: loot-seed | to: economy | motif: M-34 | power: mid-endgame | tone: ok — seeding the mines' "triggered loot" with economic goods (Numismatics coin, boss-key fragments) when a player successfully triggers one turns mine-setting into a combat-supply service; mine-layers are a defense specialist | verdict: REJECT | reason: block mines don't have loot tables in the conventional sense — they *detonate*, they don't drop loot chests. The loot=yes is likely the mod's own item drops (the mine item itself), not explorable loot tables. The mechanism doesn't fit loot-seed delivery. Motif M-34 (combat supply) is ambient here — sentries and mines are defense services by nature, but that's the loop's endpoint, not a weave.

- from: securitycraft dossier's M-08 coin candidate ("high-tier security gear as scarce-metal sink") | verdict: REJECT | reason: this is a bare-cost argument ("security gear is expensive, therefore linked to coin"), not a demand-gating weave. The mechanism is just "expensive recipe," not M-08 (player minted currency from scarce regional metal). Rephrase: if a reinforcing alloy needed Create_ironworks tin or steel as input, that would be M-08/M-30 (regional scarcity flows into security); the bare "costs materials" framing is M-09-adjacent (retired).

REWORK: dossier's economy candidate cites M-08 loosely — the coherent framing is M-30 regional-scarcity gate (if a security component requires regional tin/steel from create_ironworks) or M-05 Create-gating (the ACCEPT above). The bare "costs scarce metals → coin" framing should be retired.

## domum_ornamentum   [anchors: decoration/support + MineColonies (1)]

100 blocks, 118 items, loot=yes. Architect's Cutter: combines up to three full blocks into ornamental framed/shingled/pillared variants. 1 registered recipe-type: domum_ornamentum:architects_cutter. Strong join surface — accepts any block as main/support material.

Power-read: architects_cutter = everyday (basic crafting station). Outputs are pure decoration; no power or resource cost beyond the blocks consumed. MineColonies dependency.

**Method-pull candidates:**

- from: domum_ornamentum:architects_cutter consuming Create-processed blocks (andesite tiles, brass-cased stone, steel blocks) | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok — the cutter is explicitly a "combinatorial stonecutter for any block," so Create's processed stone and metal blocks become input materials for timberframes/shingles/pillars; Create deco outputs feed the colony build palette | verdict: ACCEPT | hook: Create-processed andesite and brass casings feed the Architect's Cutter, so the colony's ornamental buildings display the industrial palette — factory and settlement aesthetics converge.

- from: domum_ornamentum outputs (framed blocks, ornamental variants) | via: MineColonies colony request | to: economy | motif: M-28 | power: everyday | tone: ok — the colony's Builder requests DO blocks as part of style schematics; this is the M-28 colony-route (DO is cheaper/faster via MineColonies builder than hand-crafting ornamental blocks individually) | verdict: ACCEPT | hook: The colony's Builder pulls ornamental blocks from the Architect's Cutter stock — architectural variety is a colony demand that a build-specialist fills via the cutter.

OK — existing MineColonies anchor is sound. M-04 + M-28 ACCEPTs connect DO to Create and economy pillars.

## rechiseled   [anchors: support/decoration (1)]

3,627 blocks, 3,628 items, loot=yes. Chisel tool converting vanilla blocks into 600+ decorative variants; companion `rechiseledcreate` (in pack) adds kinetic Mechanical Chisel running these on Create power.

Power-read: chiseling = everyday (chisel + source block, 1:1 reversible). The Mechanical Chisel (rechiseledcreate companion) = mid (requires Create rotational power source). 3,627 registered chiseling variants = largest decoration palette in the pack.

**Method-pull candidates:**

- from: rechiseled decoration palette | via: rechiseledcreate Mechanical Chisel (create:crushing / kinetic) | to: create | motif: M-04 | power: everyday | tone: ok — the Mechanical Chisel already routes this entire deco palette through Create power; the weave is the kinetic chiseling step | verdict: ACCEPT | hook: Every rechiseled decorative variant can be produced at scale on the Mechanical Chisel, making the entire 600-variant palette a Create throughput product — bulk deco production is an industrial output.

- from: rechiseled stone variants | via: domum_ornamentum:architects_cutter | to: survival/economy | motif: M-28 | power: everyday | tone: ok — rechiseled blocks as input material for DO's cutter, producing framed/shingled colony buildings with chiseled-stone texture; the colony route pulls from the deco specialist's output | verdict: ACCEPT | hook: Rechiseled stone tiles fed into the Architect's Cutter give colony buildings a finely detailed texture — the decorator and the colony-builder trade blocks.

- from: rechiseled massive item registry (3,627 blocks) | via: create:crushing (M-04 lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok — rechiseled blocks crushing back to base material + XP nugget is the standard deco-recycle pattern | verdict: ACCEPT | hook: Placed rechiseled blocks that no longer fit the design crush back to raw material in the millstone — industrial waste processing keeps deco blocks in the materials loop.

Note: three ACCEPT edges all ultimately serve the same loop direction (deco palette ↔ Create + colony). Keeping all three because they are distinct delivery methods (rechiseledcreate kinetic chiseling, architects_cutter integration, create:crushing recycle).

OK — existing support anchor is the correct base. M-04 (via rechiseledcreate companion already in pack) is the primary weave; it may already be implemented by that companion, so Phase 3 action may be a config check, not a new recipe.

## create_ironworks   [anchors: create (1)]

8 blocks, 81 items, 3 biome-modifiers (tin ore worldgen), loot=yes, 44 c:tags. Tin/Bronze/Steel metalworking tier. Full c:tags vocabulary: ingots/plates/nuggets/storage for tin/bronze/steel. Already uses create:crushing/mixing/pressing/sequenced_assembly (inbound).

Power-read: tin = early game (new ore in worldgen); bronze = mid (tin+copper alloy); steel = endgame-adjacent (near-Netherite). Steel is the upgrade path to Netherite.

**Method-pull candidates:**

- from: create_ironworks tin ore (scarce regional metal, 3 biome-modifiers) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — tin is a fresh regionally-biased metal; crushing + processing it and minting it into a Numismatics tin-coin denomination (or as component of coin alloys) is the exact M-08 player-minted currency path; a "tinsmith" specialist who processes the regional tin and mints coin becomes a tradeable role | verdict: ACCEPT | hook: Tin is crushed and alloyed into a coin denomination at the Numismatics mint — whoever settles a tin-rich biome becomes the regional tinsmith and coin-minter.

- from: create_ironworks:steel_ingot / steel_plate | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok — steel is the obvious structural alloy for airframe plating; a steel plate as a required airframe ingredient makes heavy airships cost real manufactured steel, tying aeronautics construction to the Create Ironworks tier | verdict: ACCEPT | hook: Heavy airship hulls require Create Ironworks steel plate — your fleet's range is bounded by your steel production capacity.

- from: create_ironworks:bronze_plate / tin components | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok — bronze is a classic mechanical alloy (bearings, bushings); bronze components in Aeronautics propulsion/control surfaces is a coherent industrial-era material choice | verdict: ACCEPT | hook: Aeronautics control surfaces use bronze bearings from Create Ironworks — the tinker's alloy keeps the fleet maneuverable.

- from: create_ironworks scarcity (tin biome-modifiers, regional distribution) | to: economy | motif: M-30 | power: mid | tone: ok — tin's 3 biome-modifiers mean it is naturally region-distributed; the tin-rich biome becomes a trade region for all bronze/steel production | verdict: ACCEPT | hook: Tin is region-locked — whoever builds in a tin-rich biome controls the bronze and steel supply chains, making Create Ironworks a structural scarcity pillar.

- from: create_ironworks dossier survival candidate (ore as scarcity driver) | verdict: ACCEPT-by-reference | reason: dossier correctly identifies this but frames it as "MED" secondary to M-08; it is in fact the M-30 motif (regional-scarcity gate) and deserves its own acceptance — covered above.

REWORK: dossier's second candidate ("survival/worldgen — Tin ore as a regional-scarcity resource") should be re-labelled M-30 (not just "feeds M-08"); that's more precise and maps cleanly to the existing motif. The aeronautics candidates (M-23/M-24) are not in the dossier and are new additions.

## trailandtales_delight   [anchors: survival (1)]

13 blocks, 38 items, loot=yes, 2 c:tags. Sniffer-crop themed FD addon: Lantern Fruit crop, cheese-making, sniffer-egg dishes, flower/plant drinks. Already uses farmersdelight:cooking, farmersdelight:cutting (inbound).

Power-read: Lantern Fruit = everyday (sniffer-recovered seed crop, renewable). Cheese wheel = mid (milk processing chain: milk → curd → wheel → slices). Cherry cheese pie / ancient coffee = mid-tier processed specialty. Cooked sniffer egg = mid (requires sniffer egg, which is found not bred).

**Method-pull candidates:**

- from: trailandtales_delight:cheese_wheel / curd_block (milk processing chain) | via: create:mixing or create_cheese:maturing | to: create | motif: M-12 | power: mid | tone: ok — milk → mixed curd (mixing basin) → wheel → pressed slices is a standard Create food-processing chain; the cheese wheel is a maturation product (M-35 also applies) | verdict: ACCEPT | hook: Curd mixes in the basin and matures into cheese wheel — dairy processing becomes a Create automation target, linking the trail-themed foods to the industrial food chain.

- from: trailandtales_delight:cheese_wheel (maturing product) | via: create_cheese:maturing | to: create | motif: M-35 | power: mid | tone: ok — cheese maturing is literally the M-35 motif (a good must sit under the right conditions to gain value); the cheese wheel is the canonical example of aging value-add | verdict: ACCEPT | hook: Cheese wheels age in the maturing chamber — the aging specialist's time investment is what makes this trade good premium, not just its ingredients.

- from: trailandtales_delight Lantern Fruit crop | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok — a novel sniffer-crop milled into flour or a flavoring compound is the standard M-12 crop-to-processing-chain pull | verdict: ACCEPT | hook: Lantern Fruit milled into a lantern-fruit flour feeds the confectionery chain — the sniffer's rare seed becomes a Create milling input.

- from: trailandtales_delight:ancient_coffee / flower teas | via: extradelight:evaporator or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok — concentrating coffee/tea into a potent drink via an evaporator is a sensible food-processing step (M-12 covers useful intermediates) | verdict: ACCEPT | hook: Ancient coffee evaporated to concentrate becomes an effect-granting stimulant — a step-up in the food chain from raw drink to functional potion-adjacent item.

- from: dossier's economy candidate (M-09, luxury foods → coin) | verdict: REJECT | reason: M-09 is RETIRED. The ambient endpoint (players trade premium foods) is covered by the loop's natural distribution stage; no weave needed. If a cherry cheese pie or ancient coffee is demanded by a colony (M-28), that IS a weave — but it's not in this dossier's framing and would need a colony-request config to verify.

## ichunutil   [anchors: support/library (1)]

0 blocks, 0 items, loot=no. Shared code library for iChun's mods. Zero content.

- LEAVE — genuine zero-content code library. No blocks, no items, no loot, no recipe-types. Classic LEAVE case.

== CHUNK COMPLETE ==

