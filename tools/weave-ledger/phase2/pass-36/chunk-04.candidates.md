# Phase 2 candidates — chunk-04

## companion   [anchors: support/QoL (1)]

Behavior-only pet-safety mod: teleport tracking, health-retreat logic, no items, no loot, no recipes. The PHASE2-BRIEFING reserves LEAVE for "genuine zero-content code library / behavior mods" — this qualifies. There is no material surface to route, no loot to seed, no mechanic that ties to a system node.

- LEAVE — pure behavior mod (no items, no loot, no methods); zero surface for any method-pull or loot-seed. Pet survivability is a QoL improvement to the survival experience but offers no join key to route toward a 2nd anchor. Forcing any edge here would produce a defect edge, not a weave.

## minecolonies_tweaks   [anchors: support/tag-harmonization (1)]

This mod is the c: tag glue layer for the pack's food/crop web — its OUTPUT is the unified tag set (c:crops/corn, c:foods/garlic, c:foods/cheese, etc.) that enables Create/cooking/colony recipes to reference unified crop identities instead of per-mod ids. It also ships minecolonies_tweaks:component_merge_shapeless as a registered recipe type, and its scrolls are colony logistics tools.

**Method-pull analysis:**
- The unified c:crops/* and c:foods/* tags it injects are the join key that lets Create milling (M-12) target, e.g., "all grains" rather than individual mod seeds. Without its tags, modded crops are invisible to shared recipes.
- Its component_merge_shapeless recipe type is the MineColonies upgrade-component merging mechanic — a colony-side method (M-28 colony route).
- The inventory/copy scrolls are colony logistics tools — they move resource lists between colony storage and player inventory, reducing colony micromanagement. This is a logistics-adjacent function (M-28 / colony route).

**Candidate 1: survival↔production via c:tag injection enabling Create milling of unified crop tags**
- Power: everyday (tag injection is invisible infrastructure, always active)
- Tone: fine — a harmonization mod enabling pack-wide food-web processing is coherent
- Red-team: this isn't a recipe weave from minecolonies_tweaks itself; it's enabling weaves in other mods. The "weave" here is that mc_tweaks' tags are the prerequisite for Create/cooking chains targeting modded crops. That's a SUPPORT anchor function, not a self-contained 2nd anchor for this mod.
- REJECT — the tag injection is enablement infrastructure (support role), not a weave that adds a new system anchor to this mod. The mod's identity IS its tags; giving it a "2nd anchor" by noting those tags enable Create milling is circular (the tags are support, not production). The correct frame: LEAVE this mod in the support role; the weaves that EXPLOIT these tags are recorded on Create/cooking/FD mods.

**Candidate 2: colony route via component_merge_shapeless as a colony upgrade chain step**
- Power: mid (colony upgrade components are mid-tier colony progression)
- Tone: fine — a colony-facing merge recipe fits the MineColonies production route
- Red-team: component_merge_shapeless is a MineColonies mechanic, not a cross-system bridge — it merges colony building parts within the colony system; it doesn't reach across to Create or magic. That makes it an intra-system deepening, not a 2nd-anchor cross-system weave.
- REJECT — intra-system MineColonies mechanic; doesn't add a new system anchor. If anything this is already captured under M-28 (colony route) as an existing connection.

- LEAVE — support role (tag harmonization). This mod's function is enabling other mods' cross-system weaves by unifying crop/food tags; it earns its keep as infrastructure, but it has no independent content surface from which to weave a genuine 2nd anchor. Its scrolls are colony logistics tools, not cross-system items. Leave as support.

## formationsnether   [anchors: survival (1)]

Nether structure worldgen mod: generates ritual altars, sanctuaries, cabins, castles, campsites in the Nether. No own items/blocks — the content surface is loot tables (loot=yes). PHASE2-BRIEFING explicitly says "do NOT LEAVE a loot-bearing structure mod just because it has no recipes" — the delivery mechanism is loot-seed.

**Method-pull analysis:**
The Nether biome placement and structure variety makes this pack's Nether dangerous to explore — that's the danger face of Survival pressure. But loot tables are the weave surface, and the structures' thematic vibe (nether ruins, ritual altars, sanctuaries) is a strong match for:
- Magic reagents seeded into altar/sanctuary loot → ties the Nether danger route into the magic production pillar (M-02 mob-drop reagent sink, via loot-seed variant)
- Scarce progression components seeded into castle/fortress loot → ties Nether exploration to the boss-key/high-tier production gate (M-15 boss-key unlock analogue for structure chests)

**Candidate 1: magic reagent seeded into ritual-altar / sanctuary loot tables**
- from: formationsnether structure chests (altar / sanctuary) | via: loot-seed | to: magic | motif: M-02 | power: mid (Nether altar structures are mid-tier exploration targets) | tone: ok — nether ritual altars yielding magic reagents is thematically coherent (desecrated altars left behind occult materials) | verdict: ACCEPT | hook: Nether altars look like they belong to the magic web; finding Ars source gems or Occultism datura in a ritual altar chest makes the structure feel like a predecessor to the player's own magic practice.

**Candidate 2: boss-key/progression component seeded into nether castle/stronghold loot**
- from: formationsnether nether castle / campsite chest | via: loot-seed | to: create (production gate) | motif: M-15 | power: mid-endgame (nether fortresses are dangerous; castle structures harder to reach than overworld) | tone: ok — nether fortresses yielding rare machine components or Create processing parts (e.g., a precision mechanism, a mechanical component) as rare drops fits the "dangerous frontier yields rare goods" loop | verdict: ACCEPT | hook: the Nether's danger pressure becomes worth facing because its hardest structures drop parts the Create specialist needs, making combat players the natural Nether suppliers for tech players.

**Candidate 3: numismatics coin as loot-table drop in nether structures (bare economy link)**
- from: nether structure chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: clash — seeding player-minted currency from NPC/world-generated loot contradicts the player-run economy ruling (M-08 is player-minted; coin from structure loot is a faucet from outside the player economy, which is M-14 NPC coin faucet territory, cut under #163/#240) | verdict: REJECT | reason: bare coin-from-loot is a cut NPC coin faucet (M-14 cut); contradicts player-run economy. The weave would need to be a component that feeds the minting chain, not the coin itself.

OK — existing survival anchor is sound; the two loot-seed links above add magic (M-02) and create/production (M-15) as second and third anchors, advancing the loop: Nether danger → loot containing magic reagents and tech components → production of magic/Create goods → economy.

## dynamic_fps   [anchors: support/performance (1)]

Pure client performance mod — throttles FPS/volume/rendering when the window is unfocused. Zero items, zero loot, zero methods. No material surface of any kind.

- LEAVE — genuine zero-content client performance library. No items, no loot, no methods, no player-facing behavior beyond FPS management. No weave is coherent here; forcing one would be a defect edge.

## mcwfences   [anchors: support/decoration (1)]

180 fence/wall/gate deco variants. Sanctioned decoration palette support role. Has loot=yes (structure loot), 180 blocks/items. Metal fence variants are the only realistic processing candidate.

**Method-pull analysis:**
M-04 (Create recycles deco) is the canonical deco-crush route: metal deco → create:crushing → raw/nuggets + xp nugget (lossy). The dossier already identifies this. The question is whether it earns a true 2nd anchor.

**Candidate 1: metal fence variants → create:crushing → nuggets/raw metal + xp nugget (M-04 deco-through-Create)**
- from: mcwfences metal fence variants (iron, steel-style) | via: create:crushing | to: create | motif: M-04 | power: everyday (fences are a building-tier material, not endgame) | tone: ok — crushing salvaged metal fencing back to raw is sensible scrap-loop behavior | verdict: ACCEPT | hook: a crashed or dismantled base leaves metal fences that a Create player crushes into scrap — the salvage loop makes the deco palette part of the resource web rather than a dead-end aesthetic choice.

**Candidate 2: wood fence variants contributing to M-04 bulk deco-crush pass**
- from: mcwfences wooden fences | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden fences crushing to planks/sticks is a 1:1 or near-1:1 round trip — the briefing prohibits 1:1 round-trip swaps for non-genuinely-equivalent materials. Wood fences to planks is essentially lossless reclamation, not a meaningful Create processing step. The M-04 metal variant above is the correct scope; wooden is too close to free reclamation.

**Candidate 3: aeronautics structural material (mcwfences iron fencing as airframe decoration rated component)**
- from: mcwfences:bastion_metal_fence (or acorn_metal_fence) | via: aeronautics build recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash — metal fencing as a structural airframe component is a stretch; fence blocks are not load-bearing structural elements in any conventional reading. A fence on a ship is decoration, not engineering. | verdict: REJECT | reason: theme clash — M-23 targets load-bearing structural metals (plates, beams, alloys), not decorative fencing. Forcing fences into airframe construction ignores the natural semantic of a fence as perimeter dressing.

OK — the metal-fence → create:crushing (M-04) link is sound and gives mcwfences a thin Create production anchor; the decoration role stays primary. A wholesale deco-family pass (all Macaw's mods) in Phase 3 should author the full crush set together.

## bettermineshafts   [anchors: survival (1)]

YUNG's mineshaft overhaul: larger branching structures, side-rooms, more dangerous ore caverns. No own blocks/items, and loot=no (uses vanilla mineshaft loot tables — not its own loot files, so loot-seed doesn't apply here). Structure-only overhaul.

**Method-pull analysis:**
The PHASE2-BRIEFING says "a mod with a loot table or any item/block is not 'no content' — reach for a loot-seed or processing candidate before LEAVE." Here loot=no — YUNG's mines use vanilla mineshaft loot tables, so this mod owns no loot surface to seed. No items, no blocks, no methods. The dossier recommends LEAVE and that is correct.

The indirect loop connection (bigger mineshafts → more dangerous spelunking → pressure → demand for lighting/equipment → Create production) is real but not a weave — that's the ambient gameplay effect of any overworld-structure mod. Nothing is missing from the system loop here that a weave could fix.

- LEAVE — structure-geometry overhaul only. No own items, no loot tables (uses vanilla mineshaft loot — not a seedable surface), no methods. The mod earns its keep as survival pressure/exploration flavor, but has no material join key for a 2nd anchor weave.

## chefsdelight   [anchors: survival, economy (2)]

Already 2 anchors (survival via Farmer's Delight food; economy via Cook/Chef villager trades). Has loot=yes (village cook structures + trade loot). Registered no recipe types of its own.

**Existing connections review:**
- Survival anchor: Cook/Chef villagers source FD meals into the food layer. Sound — feeding the diet-variety demand (appleseed) is a direct survival-pressure link.
- Economy anchor: villager emerald trades are an NPC trade, which is the M-21 (CUT — NPC trade → coin) territory. But the dossier frames it as "villager-trade source to the economy pillar." Under the player-run economy ruling (#163/#240), emerald NPC trades are NOT a player-economy weave — they're vanilla NPC faucets. This anchor is WEAK by the current model.
- REWORK: the economy anchor via emerald-trade villagers is an NPC trade (M-21 CUT); it contradicts the player-run economy model. The real economy link should be a *demand-gating* connection — these Cook/Chef NPCs create standing demand for FD cooking ingredients (M-26 consumption sink), which is the correct player-economy framing: the NPC villager's demand for ingredients pulls on farming/cooking production, which feeds the trade web because nobody can farm everything. The weave is not "Cook sells meals for emeralds" but "Cook's demand for ingredients creates repeating production demand."

**Candidate 1: Cook/Chef villager ingredient demand as a consumption sink pulling on food production**
- from: chefsdelight Cook/Chef villager ingredient trades (raw crops, meats) | via: config/villager trade tables | to: survival↔economy | motif: M-26 | power: everyday (basic Cook trades happen early, ongoing) | tone: ok — a village cook needing ingredients creates the kind of repeating demand that pulls on farm/ranch specialists; the player-economy reading is that other players fill the demand by supplying the cook, or the cook NPC's demand normalizes the food market price | verdict: ACCEPT | hook: the village cook buys raw ingredients continually — a farm specialist can treat Cook/Chef villagers as a reliable buyer anchor that keeps food production economically relevant even before the player economy is fully active.

**Candidate 2: food-supply line to Cook/Chef as a logistics-required bulk good (aeronautics/economy)**
- from: high-volume food supply destined for chefsdelight Cook villager clusters in distant villages | via: aeronautics cargo (logistics) | to: aeronautics | motif: M-31 | power: mid (applies once there are multiple villages / towns at distance) | tone: ok — bulk perishable ingredients needing physical delivery to distant village cooks is a coherent logistics hook | verdict: REJECT | reason: M-31 requires the good to be *heavy/bulky enough that logistics is required*; food in Minecraft is stackable to 64 and not realistically "requires airship" territory at the village scale. The logistics link only becomes real if perishability (M-36, MECHANISM-PENDING) is in play. Without that, REJECT as premature.

**Candidate 3: seasonal ingredient tie via Serene Seasons crops gating Cook/Chef premium trades**
- from: seasonal crop inputs (available only when Serene Seasons allows) | via: config seasonality + Cook/Chef trade gate | to: survival↔create | motif: M-16 | power: mid | tone: ok — a Cook who only offers premium feasts in summer (because the seasonal ingredients are only available then) creates a seasonal demand cycle coherent with the food web | verdict: ACCEPT | hook: the seasonal harvest feeds the village cook's premium menu; players who grow summer-only crops have a consistent buyer, and the demand is seasonal rather than always-on, creating natural price variation.

REWORK: existing economy anchor (villager emerald trades) should be reframed as M-26 consumption demand, not M-21 NPC coin faucet. The survival anchor is sound.

## trek-b0.6.1.1   [anchors: survival (1)]

150+ vanilla-block structures across biomes: flying islands, ships, fortresses, ruins, pyramids, camps, towers. No own items/blocks. loot=yes (chest loot tables). Server-side, no client required.

**Method-pull analysis:**
Trek has loot=yes and a wide variety of structure types — the PHASE2-BRIEFING is clear: don't LEAVE a loot-bearing structure mod. The delivery mechanism is loot-seed. The structure variety (ships, ruins, camps, towers, fortresses, ancient buildings) maps naturally onto:
- Rare exploration components seeded into appropriate structure types (ship → nautical/aeronautics parts; fortress/ancient building → magic reagents or boss-key materials)
- The vibe range is wide enough that different structure types can seed different system outputs

**Candidate 1: ancient building / pyramid loot seeding magic reagents (Ars source gems, Occultism datura)**
- from: trek ancient_building / pyramid chest | via: loot-seed | to: magic | motif: M-02 | power: mid (pyramids/ancient ruins feel like the right rarity tier for occult materials) | tone: ok — ancient ruins containing arcane relics is thematically coherent; the player reading is "these ruins were from a civilization that practiced magic" | verdict: ACCEPT | hook: exploring an ancient pyramid and finding a datura herb or a source gem feels like recovering lost magical knowledge — ties exploration danger to the magic production route.

**Candidate 2: shipwreck / ocean island loot seeding aeronautics/nautical components**
- from: trek ship / ocean island chest | via: loot-seed | to: aeronautics | motif: M-15 (analogue — progression key from structure) | power: mid-endgame (ocean structure finds require travel + survival pressure) | tone: ok — shipwrecks yield salvaged maritime components that a Create Aeronautics builder repurposes; the "salvaged from a wreck" reading is strongly coherent | verdict: ACCEPT | hook: a player wrecking into a submerged ship finds a damaged control surface or propeller diagram that unlocks or provides a Create Aeronautics build component — the dangerous ocean becomes the supply route for airship parts.

**Candidate 3: camp / cottage loot yielding generic food/coin drops (bare economy link)**
- from: trek camp/cottage chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok but weak | verdict: REJECT | reason: seeding Numismatics coins directly from world-generated loot is an NPC coin faucet (M-14 territory, CUT). Coin must be player-minted. Could seed coin-mintable raw metal instead, but that's covered by vanilla ore drops and GTMOGS regional ore-gen already — no added value from Trek loot tables specifically.

OK — survival anchor is sound. Loot-seed links to magic (M-02) and aeronautics (M-15 analogue) are the clean 2nd anchors.

## dtterralith   [anchors: survival/worldgen-compat (1)]

Compatibility bridge: makes Terralith biomes generate Dynamic Trees species instead of static vanilla trees. Outputs ordinary logs/saplings. Has loot=yes (104 blocks, 33 items — tree species seeds/saplings and biome-specific leaf blocks). No recipe types.

**Method-pull analysis:**
The items it registers are biome-specific seeds: dtterralith:amethyst_seed, cedar_seed, jacaranda_seed, kapok_seed, maple_seed, giga_spruce_seed, etc. These are planting materials — propagating Terralith-specific tree species. The downstream output is biome-keyed exotic wood logs.

**Candidate 1: exotic biome-keyed seeds as seasonal/regional material in Create processing chains**
- from: dtterralith:maple_seed / cedar_seed / jacaranda_seed (biome-specific, region-locked) | via: create:milling | to: create | motif: M-30 (regional-scarcity gate) | power: everyday (seeds are planting-tier materials) | tone: ok — biome-keyed seeds being milled for biome-specific byproducts (cedar oil, maple syrup analogues, exotic wood pulp) is coherent with regional specialty production | verdict: ACCEPT | hook: a player settled in a Terralith cedar biome can mill cedar seeds for a cedar extract unavailable elsewhere — regional specialty production that requires trade with players from other biomes. The regional scarcity foundation directly drives this.

**Candidate 2: exotic wood (kapok, jacaranda) as Create cutting → specialty plank for aeronautics or deco**
- from: dtterralith exotic logs (kapok, jacaranda, amethyst tree) | via: create:cutting | to: create | motif: M-04 (Create recycles deco) / M-12 | power: everyday | tone: ok — unique log types feeding Create's sawmill is a natural production step | verdict: REJECT | reason: this is vanilla-adjacent — any log goes through create:cutting to planks. This isn't a cross-system weave; it's the default behavior. Not worth recording as a Phase-3 action for dtterralith specifically; it applies to every wood mod.

**Candidate 3: amethyst_seed as magic catalyst / attunement ingredient**
- from: dtterralith:amethyst_seed | via: ars_nouveau:imbuement | to: magic | motif: M-07 (attunement catalyst) | power: mid (amethyst_seed requires finding a Terralith amethyst-biome; not everywhere) | tone: ok — an amethyst-bearing tree seed used as a magic catalyst fits the "worldgen consumable gates a conversion" pattern of M-07 | verdict: ACCEPT | hook: the amethyst seed, found only in Terralith's rare amethyst grove biomes, becomes a catalyst input for an Ars Nouveau imbuement — exploration-gated magic ingredient that makes the biome worth seeking and the seed worth farming or trading.

OK — survival/worldgen anchor is sound. Two new links: regional-scarcity Create processing (M-30, M-12) for biome-keyed seeds, and attunement catalyst for amethyst_seed (M-07).

## dataanchor   [anchors: support/library (1)]

Developer utility library (data-attachment + network plumbing). No items, no loot, no methods. Pure code infrastructure.

- LEAVE — genuine zero-content code library. Data-attachment and packet-handling utilities; no player-facing items, no loot, no recipe types. Required as a dependency only. No weave surface of any kind.

