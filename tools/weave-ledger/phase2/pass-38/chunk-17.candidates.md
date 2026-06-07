# Phase 2 candidates — chunk-17

## corgilib   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no; registers nothing player-facing. Pure code dependency for Alex's Caves / LightLand ecosystem. No content surface to route through any method.

## prickle   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. Config serialization API (Darkhax-ecosystem). Nothing to route.

## supermartijn642configlib   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. Config-definition API. Nothing to route.

## l2library   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. LightLand shared API; no in-world content.

## smartbrainlib   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. Brain/AI framework dependency. Nothing player-facing; nothing to route.

## terrablender   [anchors: support/library (1)]
LEAVE — genuine zero-surface worldgen library: 0 blocks, 0 items, loot=no. Biome injection API only; no content surface.

## ponderjs   [anchors: support/Create tooling (1)]
LEAVE — genuine zero-surface tool: 0 blocks, 0 items, loot=no. KubeJS-side scripting API for Create Ponder scenes. No player content, no materials to route. Authoring-only.

## fzzy_config   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. TOML config engine dependency. Nothing to weave.

## blueprint   [anchors: support/library (1)]
LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no. Team Abnormals shared framework; the one shipped item (template_chest) is too trivial (a vanilla-style chest, no crafting uniqueness) to anchor any pillar. No content surface beyond a deco curiosity.

## sound_physics_remastered   [anchors: support/client-immersion (1)]
LEAVE — client-only audio mod: 0 blocks, 0 items, loot=no. No material surface; pure audio simulation. Nothing to route.

## midnightthoughts   [anchors: survival/sleep (1)]
- from: well-rested buff | via: config-tie to Cold Sweat / Serene Seasons winter | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: Midnightthoughts ships no items — there is no material to route through any method. The only surface is its event/effect system. While the well-rested buff feeds the survival pressure face (resting offsets cold/season penalties), this is a config interaction not a weave — a weave requires a material routing. No-motif in Phase 2 terms since M-26 needs a consuming mechanic with a material spend; this mod has no material. The thematic link is real but cannot be a Phase-3 recipe/loot action. Record so a human can decide if a config synergy note (not a weave) is worth logging.
- LEAVE — no items, no loot (loot=no), no methods; rest-buff mechanic only; zero material surface means no Phase-3 weave is possible. Survival anchor is its sole valid role.

## direct_chute   [anchors: Create (1)]
Power-read: direct_chute is a single-block Create logistics QoL fix (zinc-tier, everyday utility). loot=yes but the loot flag likely reflects the block drop, not a treasure table. No processing methods; no novel material output; crafted entirely from zinc (already Create-native). The dossier flags it as "no weave" already.
- from: direct_chute block | via: any method | to: any system | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: No-motif — this is a transport-only block with no material outputs and no join keys. An aeronautics-logistics tie ("it improves item routing on ships") would be a local-use note, not a system-level weave; M-31 requires the bulk-good role (making logistics necessary), not an item that aids logistics. Forcing any motif would be a contrived edge. The dossier's own "none — leave" is correct; this is a sanctioned Create QoL block.
- LEAVE — single-item Create logistics block with no material surface beyond zinc (already Create-native); no viable 2nd anchor without forcing.

## createtreadmill   [anchors: Create (1)]
Power-read: two kinetic-source blocks (everyday tier; low SU output ≈ 2× hand crank). Cross-tie to touhou_little_maid via Soul Orb/Photo. loot=yes (block drops). The Maid Motor's Soul Orb intake is the only exotic input; TLM is a flavor mod, not a loop pillar.
- from: createtreadmill:treadmill | via: create:mechanical_crafting (escalate crafting cost) | to: Create (depth) | motif: M-06 | power: everyday | tone: ok | verdict: REJECT | reason: M-06 is the sequenced-assembly keystone for endgame/flagship items; the treadmill is a low-tier novelty SU source. Applying M-06 depth to an everyday block violates the cost-model rule (depth scales with power; basics ≈ 3×, never multi-stage chains). Hard reject.
- from: createtreadmill:maid_motor | via: touhou_little_maid soul orb as input | to: Create (cross-mod fuel) | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 requires a consumed item that closes the demand loop (fuel/food/upkeep). The Soul Orb/Photo *is* consumed, but TLM is not a loop pillar; the maid-motor is strictly a flavor/QoL device. The consumption isn't creating real trade demand (no specialization unlocked); it's a whimsy mechanic. Tone is fine but no systemic anchor is earned here.
- LEAVE — Create anchor only; both kinetic sources are novelty/QoL; no material join key reaches a loop pillar without forcing.

## mushroomquest   [anchors: survival (1)]
Power-read: large biome-modifying foraging mod, 48 blocks / 352 items, loot=yes. Rich pool of effect-bearing mushroom caps (everyday → rare/mythical tier). Strong material surface for cooking and magic methods. Currently 1-anchor only; this is a prime rework candidate for a 2nd anchor.

- from: mushroomquest mushroom caps (common species) | via: farmersdelight:cooking OR extradelight:oven | to: Create (food-chain) / survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Any camp cook knows to fry up bay bolete or chanterelles — mushrooms belong in the cooking pot; routes a survival foraging output into the food-processing chain and feeds the diet-variety demand.

- from: mushroomquest rare/mythical mushroom caps | via: occultism:spirit_fire OR ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A hallucinogenic amanita or a mythical fungal cap transmuted into an occult essence makes instinctive sense — poison mushrooms as spirit-fire fodder; bridges survival foraging into the magic production route.

- from: mushroomquest rare caps (amanita/deadly species) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A deadly or mythical mushroom brewed in an alchemist's cauldron yields a potent arcane reagent; the toxicity fits the alchemical vibe and gives rare foraging drops a valuable sink beyond selling.

- from: mushroomquest mushroom caps | via: extradelight:drying_rack | to: Create/survival | motif: M-35 | power: everyday | tone: ok | verdict: REJECT | reason: M-35 (maturation/aging) is valid, but drying mushrooms is an intermediate step, not a value-adding maturation — the dossier shows no brew/ferment integration unique to mushroomquest. Reject in favour of the stronger M-12 cooking chain above; duplicative at everyday tier.

- from: mushroomquest:resin_orb (from foraging blocks) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Tree resin as an alchemical imbuement substrate — amber/resin is a historic vessel for organic matter and magical preservation; the resin_orb is a distinctive item that can serve as an arcane catalyst without double-spending an existing reagent.

REWORK: Existing anchor "survival" is sound. No existing connections beyond the 1-anchor — this is a genuine under-woven mod; the accepted links above add the missing Create/magic ties.

## dungeons_arise_seven_seas   [anchors: survival/exploration (1)]
Power-read: worldgen-only, 0 blocks, 0 items, loot=yes. Ship/naval structures in oceans. The only wiring surface is loot tables. The dossier correctly notes the aesthetic rhyme with aeronautics but these are static structures.

- from: dungeons_arise_seven_seas loot chests | via: loot-seed (pirate/naval themed drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: A galleon wreck or floating fortress naturally holds coin and salvage — seeding Numismatics coinage (or a coin-mint ingredient: rare nautical metals, sealed chests of doubloons) into these loot tables ties pirate-exploration payoff to the player-currency economy without an NPC faucet; the haul is from the dungeon, not from a vendor.

- from: dungeons_arise_seven_seas loot chests | via: loot-seed (navigation/chart drops) | to: aeronautics | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Naval charts, sextant parts, or sealed barometric components found in ocean dungeons feed the aeronautics/logistics arm's navigation tier; a combat specialist looting a galleon supplies charting tools that a logistics player needs for long-distance routes. This is M-34 (combat-route supply): a dangerous structure's payoff flows into the economy's logistics arm.

- from: dungeons_arise_seven_seas loot chests | via: loot-seed (magic scroll/reagent drops) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Sunken ruins and pirate galleons containing ancient spell scrolls or rare reagents is a completely plausible flavour; seeding irons_spellbooks scrolls or ars_nouveau source gems into maritime loot makes deep-water exploration a second path to magic progression, reinforcing M-02 (mob-drop / dungeon-drop reagent sink).

- from: dungeons_arise_seven_seas loot chests | via: loot-seed (ship parts for aeronautics) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 requires fabricated structural alloy/hull material as an airframe ingredient. Seeding a "ship hull plank" loot item that feeds aeronautics construction is coherent in isolation, but (a) it creates a found-loot shortcut around the Create fabrication chain that M-23 intentionally gates, and (b) the structural alloy seam (steel plate, etc.) already has its native route through create_ironworks. A found-plank shortcut would undercut scarcity. Reject.

REWORK: Current 1-anchor (survival/exploration) is sound; the above accepted loot-seeds add economy and magic second anchors via M-08, M-34, M-02.

## fluid   [anchors: Create, aeronautics (2)]
Power-read: Create fluid logistics addon, 11 blocks / 18 items, loot=yes. Already at 2 anchors (Create + aeronautics/logistics). Recipes route through Create. Dossier says no forced third needed.
- OK — connections sound. Create (its parts are made through Create machines) and aeronautics/logistics (centrifugal pump + smart interfaces extend fluid routing for ships/bases) are both genuine and well-grounded. The decor (neon tubes, copper sink) is a deco bonus, not a new pillar. No rework needed; no credible 3rd anchor without forcing.

## galosphere   [anchors: survival (1); magic via M-07 established]
Power-read: rich cave biome mod, 127 blocks / 171 items, loot=yes. The allurite/lumiere shards are RESERVED reagents (M-07). Palladium ("silver", c:ingots/palladium) is a scarce cave metal distinct from occultism silver. Well-positioned for 2nd and 3rd anchor via Create and economy seams.

- from: galosphere palladium ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Any Create miner automatically doubles ore yield — palladium gets crushed like copper/zinc, folding the cave metal into the Create processing spine and making palladium mining meaningfully rewarding over smelting.

- from: galosphere palladium (crushed/ingot, Create-processed) | via: numismatics mint (player-pressed) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Palladium is regionally scarce and already distinct from every other coin-metal candidate; a miner who specialises in cave exploration can press the processed ingots into Numismatics coin, making cave-diving an economic specialization. Pairs with M-03 above as a two-step chain (ore → crushed → ingot → mint).

- from: galosphere allurite/lumiere decorative blocks | via: create:crushing (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crystal bricks and allurite blocks crushed back to shards + an XP nugget — the standard deco-recycle seam; keeps the decor palette from being a dead end and lets over-built crystal walls be repurposed.

- from: galosphere:echo_altar / combustion_table | via: native methods as magic processing nodes | to: magic | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 (native-method gating) requires a mod's own machine to be gated on Create parts as inputs. The echo_altar and combustion_table are functional but their recipes are vanilla-crafted; they do not use Create parts as inputs by default. Proposing that a KubeJS tweak adds Create inputs could apply M-05, but that's authoring (Phase 3 task), not a Phase 2 proposal — and the mod already has its magic anchor via M-07. Reject for now; flag as a Phase-3 candidate if the magic pillar wants more Create cross-route dependency.

- from: galosphere amber (preserved_transform_recipe output) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Amber-preserved specimens feed arcane infusion — fossilised organic matter as a magic catalyst is a classic archetype (Baltic amber → arcane); galosphere's amber preservation mechanic produces a visually distinct item that can gate an imbuement step without double-spending allurite/lumiere.

REWORK:
- Existing "survival (1)" + "magic via M-07 (established)" — both sound. The M-07 allurite/lumiere attunement catalyst role is correctly noted as reserved; do not give those shards any additional role. No rework needed on the existing connections; the accepted links above add Create + economy second anchors.

## handcrafted   [anchors: support/decoration palette (1)]
Power-read: furniture mod, 267 blocks / 285 items, loot=yes. No registered recipe-types; all vanilla crafting. Large deco output pool, everyday tier throughout. CLAUDE.md sanctions deco weaving as a 2nd-anchor grant when routed through Create.

- from: handcrafted wood furniture (chairs, tables, shelves, etc.) | via: create:cutting (saw lumber into parts first) OR woodworks:sawmill | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: High-quality furniture demands precision-cut planks; a Create sawmill or woodworks:sawmill yields the clean lumber that handcrafted's carpenters need — a one-step processing-chain pull that earns the decoration tier its Create tie without forcing a multi-stage chain on an everyday deco item.

- from: handcrafted specialty furniture (metal-trim pieces: andesite_corner_trim, etc.) | via: create:pressing / create:mechanical_crafting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Pressed metal sheets bent into corner trims and pillar housings is exactly what a Create workshop produces — the metal-accent furniture sub-set naturally routes through pressing, grounding the deco palette in the industrial spine without gating basic wood chairs.

- from: handcrafted:berry_jam_jar | via: extradelight:vat OR farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Berry jam is preserved food — a vat or cooking-pot step to produce the jar from fresh berries situates the kitchen deco output inside the food-processing chain and gives a survival/diet link (jam contributes to Fruits group in Diet).

- from: handcrafted trophies (bear_trophy etc.) | via: minecolonies colony requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies colony needs furnishings — colonists could request handcrafted beds/chairs/trophies via the colony's supply requests, making furniture a colony-demand good; the colony player buys from the furniture specialist. M-28 (colony route): the colony provides a recurring demand sink that keeps furniture production non-zero and tradeable.

- from: handcrafted furniture | via: "sellable luxury good" bare link | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is retired. "Sellable luxury good → coin" is the ambient endpoint, not a weave. The accepted M-28 colony-demand link above is the correct economy anchor (gates demand structurally rather than noting it could sell).

REWORK: Existing "support/decoration palette" anchor is correct. The dossier candidate "create:cutting / mechanical_crafting" aligns with what is accepted above — the accepted M-12 links are the implementation of that candidate.

## northstar   [anchors: Create, aeronautics (2)]
Power-read: large Create space expansion, 267 blocks / 354 items, loot=yes, already 2 anchors. Three machine methods (electrolysis, engraving, freezing). Rich metal vocabulary: titanium, tungsten, martian_steel. The existing Create weaves are extensive (9 inbound recipe types). Economy candidate via M-08 is noted in dossier.

- from: northstar:titanium_ingot / tungsten_ingot (Create-processed) | via: numismatics mint (player-pressed) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Off-world metals are the rarest regional materials in the pack — a space specialist who reaches Mars/Moon controls a coin-metal no terrestrial miner can reach, making Numismatics titanium or tungsten coin the high-tier settlement medium for advanced economy players. Scarcity is hard (gate = rocket flight); the coin is genuinely player-minted.

- from: northstar:advanced_circuit | via: create:mechanical_crafting (as input to Aeronautics control surfaces) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced avionics need advanced circuits — Northstar's engraved circuit boards gating Aeronautics control surfaces and guidance systems makes the space-tech tier feed directly into the logistics arm's endgame; a player who invested in off-world bases supplies the avionics that aeronautics builders need.

- from: northstar:biofuel | via: createaddition:liquid_burning OR TFMG fuel chain | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Biofuel is already a registered fuel output from Northstar's atmospheric concentrator; routing it into TFMG's distillation or directly into Aeronautics engines gives the space-base player a fuel-specialist role — they grow/synthesize biofuel off-world and supply the flight arm. M-13 (fuel → propulsion), fits cleanly.

- from: northstar:astronomical_reading | via: bare "sellable" as a trade good | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: M-09 is retired. "It's a sellable specialty output" is the ambient endpoint. The M-08 titanium/tungsten coin link above is the correct economy weave (player-minted from scarce materials); astronomical_reading could earn a separate economy link via M-37 (research gate — knowledge from the astronomy table unlocks a recipe) but that requires confirming the astronomy_table outputs a knowledge-document item usable as a recipe key, which is not confirmed in the dossier. Mark for follow-up; reject the bare sell link.

- from: northstar planet woods (argyre, calorian, coiler planks/logs) | via: create:cutting | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: Off-world woods being cut in a Create saw is coherent, but this just replicates the standard vanilla-wood cutting recipe with exotic planks — it adds no new system link since northstar already has deep Create inbound weaves. The value is cosmetic. Reject to avoid recipe noise; the Create anchor is already saturated.

REWORK:
- Existing aeronautics anchor — sound. Northstar rockets are the off-world logistics arm.
- Existing Create anchor — sound and already extensively woven (9 inbound recipe types).
- Dossier candidate "M-09 luxury-good via astronomical reading" correctly flagged as WEAK; confirmed REJECT above.
- No rework needed on existing connections; the three new accepted links (M-08, M-24, M-13) extend to economy as a genuine third anchor without forcing.

## create_ironworks   [anchors: Create (1)]
Power-read: metalworking tier mod, 8 blocks / 81 items, loot=yes, 44 c:tags, 3 biome-modifiers. Rich metal vocabulary (tin/bronze/steel, plates/ingots/nuggets). Highly route-able; clear M-08 and M-23 candidates in dossier.

- from: create_ironworks tin ore (regional, biome-modifiered) | via: create:crushing → create:mixing (to bronze/steel) → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a fresh regional ore (only in specific biomes) that a smelter specializes in; the two-step Create chain (crush → alloy → press) produces minted tin or bronze coin, making the metals-specialist a currency controller. The scarcity baked into the biome-modifiers makes tin coin genuinely non-ubiquitous.

- from: create_ironworks:steel_ingot / steel plates | via: aeronautics hull/airframe recipe (structural alloy) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel is the structural material of real aerospace — sheets welded into airframes. Gating Aeronautics hull blocks or structural frames on create_ironworks steel plate is the direct application of M-23 (structural alloy → airframe/hull), making the metals specialist the supplier for the airship builder.

- from: create_ironworks:bronze_ingot / bronze plates | via: create:mechanical_crafting (Aeronautics mechanical components) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Bronze bearings, bushings, and mechanical fittings (propeller hubs, gear housings) are a natural bronzesmith output; gating Aeronautics propulsion/drivetrain components on bronze feeds M-24 (mechanical component → propulsion/control) and gives the metals specialist a second aeronautics supply role distinct from steel hulls.

- from: create_ironworks tools (brass_hammer, brass_paxel, bronze_axe, steel_sword, etc.) | via: minecolonies colony requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A MineColonies blacksmith or guard hut requests metal tools and armor — create_ironworks' bronze/steel tool sets are the premium gear a colony demands from a metals specialist; the colony route (M-28) creates structural demand for the ironworks player's output.

- from: create_ironworks:steel_ingot | via: create:sequenced_assembly (multi-step refining) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is for endgame flagship items; steel is a mid-tier structural alloy. Applying a full sequenced-assembly chain to steel would gate a broadly-used material behind the deepest Create mechanic, violating the cost-model rule. The alloy chain (crush → mix → press) through create:mixing already provides appropriate depth for mid-tier. Hard reject.

- from: create_ironworks tin ore | via: GTMOGS regional ore-gen (biome-modifier already in) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is explicitly biome-gated (3 biome-modifiers); it is a factual regional-scarcity resource. M-30 formalises that the tin-zone player holds a trade advantage — they must ship or trade tin to non-tin-biome players who need bronze/steel. The scarcity foundation feeds economy directly.

REWORK: Existing "Create (1)" anchor is sound. The accepted links above add economy and aeronautics as second and third anchors. No existing connections to rework (none were authored yet; the 1-anchor state is the starting point).

== CHUNK COMPLETE ==
