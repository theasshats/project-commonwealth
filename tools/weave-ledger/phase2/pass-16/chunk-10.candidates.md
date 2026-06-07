# Phase 2 candidates — chunk-10

## underground_village   [anchors: survival (1)]

Power-read: underground_village is a pure worldgen/structure mod — no items, no recipes, no own blocks. It places procedurally generated subterranean villages (Stoneholm) with vanilla villagers and standard loot chests. The dossier flags `loot=yes`, meaning its generated structures carry chest loot tables. The structure provides: (a) villager trade access, (b) discoverable chest loot. The only weave surfaces are loot-seeding and trade-seating.

Existing connection: survival (exploration/worldgen) — sound; this is exactly its role.

REWORK: OK — survival anchor is correct for a worldgen structure mod.

**New candidates:**

- from: Stoneholm village loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: underground traders deal in the metals mined below — seeding processed-scarcity coin (numismatics:spur/cog) into Stoneholm chests makes underground exploration pay off in the economy's currency, not just vanilla loot. Advances the loop: scarcity→pressure→explore→economy node.

- from: Stoneholm villager trades | via: loot-seed (trade-seating) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no from maintainer). While Stoneholm villagers are a natural seat for numismatics-priced trades, the trade-seam-to-economy motif requires maintainer sign-off before authoring. Keep as a candidate for review, but do not advance to ACCEPT under the provisional motif. Better to fold the value into the loot-seed (M-08 ACCEPT above) which doesn't carry M-21's restriction.

- from: Stoneholm loot chests | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Stoneholm is a subterranean *human* settlement, not a monster lair or boss-guarded ruin. Seeding magic reagents (source gems, spirit essence) into underground village chests is a tone mismatch — villagers don't carry arcane loot. The mob-drop/boss-drop association of M-02 doesn't fit a cozy underground settlement. Drop.

## stylecolonies   [anchors: support/decoration palette — MineColonies styles (1)]

Power-read: stylecolonies ships zero items/blocks/loot. It is a pure blueprint data add-on for MineColonies — extra building styles (Steampunk, High Magic, etc.) that the colony builder reads. Its Steampunk style already references Create blocks at build time (a natural implicit tie). No recipe types, no materials, no loot tables.

This is a genuine zero-content-surface support mod: it adds building aesthetic options to MineColonies but has no items to route through any method, no loot to seed, and no processing surface. Its weave is fully carried by MineColonies' own weave.

REWORK: OK — support anchor (decoration palette) is correct; the existing connections note (Steampunk style consumes Create blocks) is already its natural tie-in at the MineColonies level.

- LEAVE — pure MineColonies blueprint data (zero items/blocks/loot/recipe-types); weave surface is nil; forcing an edge would be entirely contrived. Its value to the loop is carried by MineColonies.

## galosphere   [anchors: survival (1)]

Power-read: Galosphere is a rich cave-overhaul mod — 127 blocks, 171 items, 9 biome-modifiers, `loot=yes`. Key materials: allurite_shard and lumiere_shard (already reserved M-07 attunement catalysts), palladium/"silver" ingot (c:ingots/palladium — NEVER unify as c:ingots/silver per CLAUDE.md), pink-salt blocks, deco crystal bricks, amber-preservation (`galosphere:preserved_transform_recipe`), combustion table + echo altar. The shards' M-07 role as attunement catalysts already ties galosphere to magic. Palladium is a scarce regional metal suited for M-08 (coin from processed scarcity) and M-03 (Create ore-doubling). Deco blocks suit M-04 (Create recycles deco). The amber preservation method is a content surface that could gate an interesting input.

Existing connection: survival (cave biomes, worldgen, regional metal) — sound and correct. The M-07 shard tie to magic is already established but not yet recorded as a formal 2nd anchor in the dossier; it is de facto the 2nd anchor.

REWORK: The dossier lists only 1 anchor (survival) but the M-07 shard tie to magic is already established as a pack design fact (scripts 33/80/97). This should be promoted to a 2nd formal anchor (magic). Flag: anchor count understated — should be survival + magic (2).

**New candidates:**

- from: galosphere:palladium ore / raw palladium | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: regional palladium ore passes through a Create millstone or crushing wheel for ore-doubling — the standard tech spine extraction route makes palladium worth setting up a dedicated mine + processing line, not just a vanilla smelt.

- from: galosphere:palladium ingot (Create-processed) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is scarce and regional — after Create-processing it becomes coin; players in palladium-bearing biomes hold a natural economic niche minting it. Advances the loop: scarcity (regional ore) → production (Create) → economy (coin).

- from: galosphere:allurite_block / lumiere_block / amethyst_bricks / pink_salt blocks (decorative) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crystal and salt deco blocks crush back to raw shard/dust + XP nugget (lossy), keeping the decorative palette in the Create web without over-rewarding over-building.

- from: galosphere:preserved_transform_recipe (amber preservation) | via: galosphere:preserved_transform_recipe | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: amber preservation encases organic items, not refines materials into arcane inputs. While a "preserved reagent" notion is thematically intriguing, the preserved_transform method isn't designed as a magic infusion step — it's a storage/display mechanic. Routing foreign materials through it as a magic-refining step would be an arbitrary theme mismatch. No clear motif fit survives red-team.

- from: galosphere:allurite_shard / lumiere_shard | via: create:haunting | to: Create/magic | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-07 already reserves these shards as attunement catalysts; routing them through create:haunting as a separate soul/spirit conversion would create a second role for reserved reagents — a reagent-ownership conflict. Do not double-spend. Reject in favour of the already-established M-07 path.

- from: galosphere:silver_bomb (palladium + TNT) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: the silver bomb is a crafted weapon/consumable, not a loot drop. M-14 (bounty → drop economy) is for mob-drop rewards paying coin, which doesn't map coherently onto a player-crafted explosive. No bounty framing survives red-team.

## charta   [anchors: survival (1)]

Power-read: charta has 51 blocks and 54 items — card tables, bar furniture, wine/beer glasses. All vanilla-recipe crafting; no registered processing methods. `loot=yes` — tables can generate in villages/dungeons. Its functional content is social: interactive card games (multiplayer matches) + tavern decoration. The wine/beer glasses are decorative, not consumable drinks that feed a food/diet system. No material outputs, no ores, no crops.

Existing connection: survival (social/lounge, borderline pure-deco) — the dossier is candid: "borderline pure-deco." Survival anchor is a stretch here; the mod's primary value is curated flavor for the co-op group.

REWORK: The survival anchor is weak — card tables don't create survival pressure or diet/temperature demand. This should arguably be categorized as "support (decoration/flavor)" rather than survival. Flag for human review at Gate 2: consider re-labeling the anchor.

**New candidates:**

- from: charta:empty_wine_glass / empty_beer_glass | via: vinery:wine_fermentation or alcohol_industry:alcohol_boiling (fill method) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fill the bar glasses with a fermentation chain product (wine, ale) — the empty glass becomes a container that routes through an existing drink-processing method, integrating the tavern set into the food/drink processing web. A player setting up a tavern is also running a fermentation line.

- from: charta furniture blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing bar furniture back to planks + XP is mechanically valid as M-04, but the deco palette here is very thin (tables, stools, shelves) and none are load-bearing blocks that would realistically be bulk-crushed. The payoff is trivial and the creative cost of documenting it is not worth a nominal 2nd pillar. The dossier itself flags this as WEAK. Reject.

- from: charta card tables | via: config tie / KubeJS event | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: a wagering/gambling hook on card tables (numismatics coins bet at the table) would need either mod-level API or external KubeJS hooking neither of which fits existing motifs. No motif — reject for review per the briefing rule (no-motif → reject-for-review, do not invent one). Surface as a potential Gate-0 new-motif request if the gambling mechanic is worth pursuing.

## woodworks   [anchors: survival (1)]

Power-read: woodworks has 83 blocks and 83 items — wood-type variants of chests, bookshelves, boards, ladders, beehives, leaf piles plus a `woodworks:sawmill` block. The Sawmill is a stonecutter-equivalent for wood. `loot=yes`. It registers two recipe types: `woodworks:sawmill` (the connective method) and `woodworks:crafting_special_woodenchest`. No foreign tags. The key weave surface is the Sawmill (a connective method other mods' wood recipes can route through) and the deco block palette (M-04 crushing).

Existing connection: survival (decoration/building palette) — sound but thin. One anchor correctly placed.

REWORK: OK — survival anchor for a wood-deco mod is correct; flagged as "1 anchor" which is accurate. The WEAK note on M-12 in the dossier is well-reasoned.

**New candidates:**

- from: woodworks decorative blocks (boards, bookshelves, beehives) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood deco from the Sawmill crushes back to planks + sawdust + XP nugget (lossy) via Create's crushing wheel — the palette earns its place in the Create web and gives the crusher a bulk wood-processing role. Standard M-04 lossy-recycle; depth matches the everyday tier (one step, light).

- from: woodworks:sawmill recipe type | via: woodworks:sawmill (bridged output to create:cutting) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier correctly flags this WEAK. The Sawmill overlaps functionally with Create's saw/stonecutter — adding bridge recipes would produce recipe redundancy without clear player value. The mod already earns a Create tie via M-04 above; a second Create anchor here is unnecessary and the M-12 framing ("processing chain to finished good") doesn't cleanly fit pure wood-deco outputs. Reject.

- from: woodworks:*_bookshelf | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: selling bookshelves as luxury goods (M-09) is mechanically valid but the "high-effort consumable" framing of M-09 requires genuine processing investment (wine, cheese, crafted food). A bookshelf is a simple wood craft with no processing chain. The M-09 bar isn't met; tone clash with M-09's "luxury good" intent. Reject.

## structurize   [anchors: support/library — MineColonies build engine (1)]

Power-read: structurize has 10 blocks, 14 items — build tool, scan tool, shape tool, caliper, substitution blocks. No loot, no registered recipe types, no food/material surface. It is the blueprint scan+place engine MineColonies runs on. Every real weave surface it has is already MineColonies' surface.

Existing connection: support (library) — correct.

REWORK: OK — support anchor is right; it is a hard dependency of MineColonies with no independent content.

- LEAVE — genuine library/build-engine dependency (no recipe types, no loot, no material surface beyond MineColonies' own weave).

## direct_chute   [anchors: Create (1)]

Power-read: direct_chute has 1 block, 1 item — a zinc direct-chute logistics block. No recipe types of its own; crafted from zinc (already Create). No loot. The dossier is candid: a single Create logistics QoL block.

Existing connection: Create (logistics block) — correct and honest. One anchor.

REWORK: OK — Create anchor is accurate; the dossier's own "leave" recommendation for 2nd anchor is correct.

- LEAVE — a single Create logistics component (zinc-crafted slot-less chute); the weave surface is nil beyond its Create material already. Forcing aeronautics/economy here is contrived.

## lootjs   [anchors: support/library — packdev tooling (1)]

Power-read: lootjs has 0 blocks, 0 items, no loot. Pure KubeJS addon that provides a scripting API for rewriting loot tables. It is the tool the pack uses to implement M-02, M-14, M-15 loot-seed weaves — but it is not itself a weave node.

Existing connection: support (library/QoL — packdev tooling) — correct.

REWORK: OK — support anchor is right. LootJS is a pure code enabler; it has no player-facing surface.

- LEAVE — zero-content code library (0 blocks, 0 items, no loot, no recipe types); it enables other mods' weaves but has no surface of its own.

## create_pattern_schematics   [anchors: Create (1)]

Power-read: create_pattern_schematics has 0 blocks, 3 items — empty_pattern_schematic, pattern_schematic, pattern_schematic_and_quill. No loot, no recipe types of its own. Pure build-automation tooling (tile a schematic endlessly on a contraption). No material conversion or processing surface.

Existing connection: Create (build-automation QoL) — correct and accurate.

REWORK: OK — Create anchor is right; 1 anchor is correct. The dossier's own leave recommendation is sound.

- LEAVE — build-tooling support mod (3 items, no loot, no recipe types, no material surface); no coherent second anchor exists — any route would be entirely contrived.

## platform   [anchors: support/library — API (1)]

Power-read: platform has 0 blocks, 0 items, 1 biome-modifier (its own framework hook, not player content). Pure cross-platform API library by ItsBlackGear. No gameplay, no loot, no recipe types.

Existing connection: support (library/API) — correct.

REWORK: OK — support anchor is right. Genuine zero-surface library.

- LEAVE — genuine zero-content code library (0 blocks, 0 items, no gameplay surface); pulled silently as a dependency.

## createblockchain   [anchors: economy, Create (2)]

Power-read: createblockchain has 5 blocks, 6 items — currency_miner, mining_core (geode worldgen), piggy_bank, cryotheum_coolant_block. It registers no recipe types but IS made via `create:mechanical_crafting` and `create:mixing` (inbound weaves already). The currency_miner consumes Forge Energy + Mining Cores → outputs numismatics:* coins. `loot=yes` — piggy banks spawn in overworld chests with coin spreads. Already 2 anchors: economy (the money faucet for Numismatics) + Create (FE-powered machine, made via Create methods).

Existing connections: economy + Create (2 anchors) — both sound and correctly placed.

REWORK: OK — both anchors are strong and well-established. The dossier correctly notes the deepening option (M-08 FE → scarcity trace) is a refinement, not a new pillar.

**New candidates:**

- from: createblockchain:mining_core (geode worldgen consumable) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: the mining_core is a worldgen consumable consumed by the currency_miner machine — it is not an ore that doubles as a processable material. Crushing it would be destructive (consuming the gate item) and there's no "byproduct" story here. The M-03 ore-doubling motif doesn't fit a single-use miner input. Reject.

- from: createblockchain coin output chain | via: M-08 deepening (FE traces to processed scarce metal) | to: Create/economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the currency_miner's FE input should come from a Create-Addition generator burning refined fuel from a scarce metal (e.g. TFMG diesel from coal/oil distillation) — so minted coin traces back through scarcity → production → economy rather than being "free FE from any source." This tightens the loop without adding a new anchor; it's a recipe/config constraint that makes coin creation legibly expensive.

- from: createblockchain:piggy_bank (loot chest drop) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks already natively generate in overworld chests with coin drops per the dossier — this is the mod's intended behavior, not a weave candidate. Seeding *more* coin into its loot tables would either duplicate behavior or inflate the money supply. No net new weave here; reject.

## cloth_config   [anchors: support/library — config screens (1)]

Power-read: cloth_config has 0 blocks, 0 items, no loot, no recipe types. Pure config-screen rendering API. Zero gameplay surface.

Existing connection: support (library/API) — correct.

REWORK: OK — support anchor is right. Genuine zero-content library.

- LEAVE — genuine zero-content code library (config-screen API only; 0 blocks, 0 items, no gameplay surface).

## lithostitched   [anchors: support/library — worldgen (1)]

Power-read: lithostitched has 0 blocks, 0 items, no loot, no recipe types. Pure worldgen modifier library; underpins Tectonic and similar terrain mods.

Existing connection: support (library/API) — correct.

REWORK: OK — support anchor is right. Genuine zero-surface worldgen library.

- LEAVE — genuine zero-content worldgen library (no items, no loot, no recipe types; worldgen plumbing only).

## createoreexcavation   [anchors: Create (1)]

Power-read: createoreexcavation has 6 blocks, 11 items — drilling_machine, extractor, sample_drill, vein_finder, vein_atlas, and drill tiers. `loot=yes`. It registers three recipe types: `createoreexcavation:drilling`, `createoreexcavation:extracting`, `createoreexcavation:vein`. The vein recipe type is especially powerful: any mod's ore can be added as a vein output via datapack/KubeJS — this is a faucet feeding the entire ore economy. Machine crafting is via `create:crushing`, `create:cutting`, `create:mechanical_crafting`, `create:milling` (already inbound Create). Currently 1 anchor: Create.

Existing connection: Create (SU-powered, Create-made machines) — correct and strong.

REWORK: The dossier suggests an economy anchor via vein-table scarcity (M-08 lever) but notes it's a "pack-design lever, not a recipe edge." That's exactly right — the vein table IS the weave mechanism, and configuring regional scarce metals as vein outputs is what closes the loop from Create production → economy (coin). This should be promoted as a proper 2nd anchor.

**New candidates:**

- from: createoreexcavation vein table (regional scarce metal veins: palladium, uranium, etc.) | via: createoreexcavation:vein config + numismatics chain | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: configuring coin-grade regional metals (galosphere palladium, createnuclear uranium, pack-specific scarce ores) as Create Ore Excavation vein outputs ties the infinite-but-slow drilling faucet directly into the coin-from-processed-scarcity loop — the drilling machine's rate-limited output becomes the supply chain for the economy's metal coin. Advances the loop: Create production (drilling) → scarce ore → processed → coin (economy). Via: vein config (KubeJS/datapack, not a crafting recipe).

- from: createoreexcavation:drill / diamond_drill / netherite_drill | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the drill heads are mid-tier tools (not flagship endgame items); M-06 sequenced-assembly keystone is for endgame/flagship multi-stage chains. Applying a full sequenced-assembly chain to a drill bit that is a consumable input to a farming machine over-architects a mid-tier component. Depth-to-power mismatch. Reject.

- from: createoreexcavation extracted fluid veins (infinite fluid reservoir) | via: tfmg:distillation | to: economy | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: a discovered oil/creosote fluid vein extracted by the Extractor feeds TFMG's distillation column — crude oil vein → diesel/gasoline → Aeronautics propulsion fuel. The infinite-but-slow fluid source rate-limits the fuel supply chain and makes finding an oil vein a strategic economic location. Advances the loop: Create (extraction) → production (distillation) → economy/aeronautics (fuel). Via: createoreexcavation:extracting → tfmg:distillation.

## minecolonies_tweaks   [anchors: support/QoL — tag harmonization (1)]

Power-read: minecolonies_tweaks has 0 blocks, 38 items (dyed inventory scrolls + copyscroll), 89 c:tags. It registers one recipe type: `minecolonies_tweaks:component_merge_shapeless`. The c:tags include `item/crops/*` and `item/foods/*` for corn, rice, soybean, tomato, pea, eggplant, garlic, cabbage, onion, etc. — the unified crop/food tag set that lets pack recipes target shared tags. These 89 tags are the real output; the items (scrolls) are QoL convenience.

Existing connection: support (QoL + tag harmonization for survival/food web) — correctly labeled.

REWORK: The "support" anchor is accurate but undersells the tag output. The c:crops/c:foods tags this mod injects are the join keys that enable food-web weaves across the entire pack (M-12 processing-chain pull relies on unified crop tags). The mod is load-bearing for the survival/Create/economy food web, but as an enabler rather than a node — support is still the right label.

OK — support anchor is sound; it is correctly identified as an enabler (analogous to lootjs for loot). The scrolls (copyscroll, inventoryscroll) are minor QoL tools without a weave surface.

**New candidates:**

- from: minecolonies_tweaks c:crops/* tags (corn, rice, soybean, tomato, etc.) | via: create:milling or farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the unified c:crops/corn, c:crops/rice, c:crops/soybean tags this mod injects let Create milling/pressing recipes target *any* modded crop by shared tag rather than per-mod id — a milling recipe for `c:crops/corn → corn_flour` covers every corn-adding mod at once, folding the harmonized farm output into the Create processing web. The tags are the join key; the weave is "c:crops/* can be Create-milled." Advances survival→Create arm of the loop.

- from: minecolonies_tweaks inventoryscroll / copyscroll (colony logistics tools) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: inventory scrolls are QoL handhelds that simplify colony storage access — not luxury consumables. M-09 (luxury good → coin) requires a high-effort processed consumable with meaningful production investment. A colored scroll crafted for convenience doesn't carry that weight. Reject.

## sparsestructures   [anchors: support/QoL — worldgen-tuning (1)]

Power-read: sparsestructures has 0 blocks, 0 items, no loot, no recipe types. Pure config mod: multiplies structure spacing/separation. No material surface.

Existing connection: support (QoL/worldgen-tuning) — correct.

REWORK: OK — support anchor is right. Genuine zero-surface config utility.

- LEAVE — zero-content config-only mod (no items, no loot, no recipe types); tunes structure rarity with a single spreadFactor setting. No weave surface.

## betterendisland   [anchors: survival (1)]

Power-read: betterendisland has 0 blocks, 0 items, no loot (`loot=no`). Pure structure/worldgen overhaul of the End's central island and dragon arena. No new items, no recipes, no loot tables.

Existing connection: survival (end-game exploration/world-feel) — correct.

REWORK: The survival anchor is extremely thin — this mod purely reskins the vanilla End island. There's no gameplay pressure added, no material, no loot. It's borderline "pure decoration/world-feel." Flagging for Gate 2 review: should this be re-categorized as "support (world-feel)" rather than survival? A survival anchor should add pressure or material; visual redesign of the End arena doesn't do that.

- LEAVE — zero-content worldgen overhaul (0 blocks, 0 items, no loot); purely cosmetic End arena redesign. No weave surface exists.

## cmpackagepipebomb   [anchors: Create (1)]

Power-read: cmpackagepipebomb has 0 blocks, 4 items — pipebomb, pipebomb_rigged, pipebomb_white, tnt_rigged. No loot, no recipe types. A small novelty PvP trap riding Create's package logistics. No material processing surface.

Existing connection: Create (package-logistics payload) — correct.

REWORK: OK — Create anchor is accurate for this tiny package-riding trap. The dossier's own leave recommendation is sound.

**New candidates:**

- from: cmpackagepipebomb:pipebomb (rigged package explosive) | via: create:deploying | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) is for applying a woven part onto a base to upgrade it — not for applying an explosive onto a package to make a trap. The thematic direction is inverted (destruction vs. upgrade) and the deploy-application motif isn't meant for weaponized items. Tone clash against M-20's "upgrade" intent. Reject.

- LEAVE — novelty PvP gag (4 items, no loot, no recipe types, no material surface); no coherent second-pillar weave survives red-team.

## createfisheryindustry   [anchors: Create, survival (2)]

Power-read: createfisheryindustry has 11 blocks, 46 items — bait_trap, mechanical_peeler, harpoon, harpoon_gui, copper_diving_leggings, fish_skin, seafood_chowder, lobster_soup, mussels, etc. Registers `createfisheryindustry:bait_trap` and `createfisheryindustry:peeling`. `loot=yes`. Made via extensive Create methods (crushing, deploying, filling, mechanical_crafting, mixing, pressing, sandpaper_polishing, sequenced_assembly) and farmersdelight:cooking/cutting (inbound). Already 2 anchors: Create (kinetic processing/gear) + survival (food/diving gear).

Existing connections: Create + survival (2 anchors) — both strong and well-established.

REWORK: OK — both anchors are correctly placed and coherent. The dossier's suggestion of economy (M-09 seafood dishes → coin) is the natural 3rd weave.

**New candidates:**

- from: createfisheryindustry seafood dishes (chowder, lobster_soup, mussel_soup, cooked_*_steak) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: processed seafood (chowder, lobster) is a high-effort Create-chain product requiring automated traps + kinetic peeling + cooking — exactly the kind of luxury consumable M-09 targets. A fishing-specialist player minting coin from seafood trade carves out a distinct economy niche. Advances production (Create fishery) → economy (coin via trade).

- from: createfisheryindustry:fish_skin | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: fish_skin is leather-substitute material — a mundane industrial by-product of the mechanical peeler. Routing a leather-equivalent through arcane infusion has no thematic coherence; fish skin carries no magical resonance in the pack's tone. M-10 targets materials that refine *into* arcane reagents — fish skin doesn't fit that narrative. Tone clash. Reject.

- from: createfisheryindustry:copper_diving_leggings | via: create_new_age:energising | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 (electric/FE charging bridge) is for charging tools/foci/reagents — it's the "Create electricity charges a magic/tech gear" motif. The diving leggings are a survival tool (underwater super-jump), not a magic item or electric device. No FE-charging hook exists in the mod for them, and the thematic bridge between copper dive gear and electrical charging is weak. Reject.

- from: createfisheryindustry bait_trap loot output (fish, mussels, lobster) | via: loot-seed | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding seasonal bait into the trap's catch table (e.g. certain rare fish or shellfish only catchable in summer, or spawning more in spring) via Serene Seasons integration gates the automated trap into the seasonal pressure layer — a fisher player's yield varies by season, driving planning and storage. Advances scarcity (seasonal availability) → survival pressure → Create production (bait traps). Via: loot-seed (seasonal condition on catch table).

## pingwheel   [anchors: support/QoL — multiplayer (1)]

Power-read: pingwheel has 0 blocks, 0 items, no loot, no recipe types. Pure keybind-triggered world/entity ping marker for multiplayer. No gameplay material surface.

Existing connection: support (QoL/multiplayer) — correct. Excellent fit for a ~10-player co-op pack.

REWORK: OK — support anchor is right. Zero weave surface.

- LEAVE — zero-content QoL utility (0 blocks, 0 items, no loot, no recipe types); essential co-op coordination tool but no weave surface exists.

== CHUNK COMPLETE ==

