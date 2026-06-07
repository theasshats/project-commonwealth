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

## appleseed   [anchors: survival (1)]

Diet – AppleSeed Edition: auto-derives nutrition groups from food recipes; balanced diet → buffs, imbalanced → withheld. No items, no loot, no recipe types. A demand-driver mechanic — its "output" is standing demand for diverse food production. The pack's food face of Survival pressure per SYSTEMS.md §2.

**Method-pull analysis:**
The dossier is hand-authored specifically to note that the mod IS a demand mechanic, not a recipe node. The natural 2nd anchor is production↔economy via the diet demand it creates, but this is the ambient endpoint of the loop (diet demand → food production → food trade), which would be the M-09 retired framing ("sellable is the ambient endpoint"). The correct reading: appleseed's demand is the engine that MAKES food-production weaves for other mods valuable. It's not itself a weave node.

The candidates in the dossier note:
1. "production via diet demand pulling on farming/cooking" — this is the ambient loop, not a weave on this mod.
2. "economy via food as trade goods" — M-09 retired (bare sellable link).

**Candidate 1: diet demand pulling on Create milling for multi-group foods (grain→flour→bread chain)**
- from: appleseed diet-balanced state | via: Create milling / mixing / farmersdelight cooking chain | to: create | motif: M-12 (processing-chain pull — diet demand creates a pull on grain-processing) | power: everyday | tone: ok — a diet system that requires grain consumption pulls on Create's milling of wheat/rice/corn into flour, which feeds into baking/cooking chains | verdict: REJECT | reason: the diet demand is an ambient pull (it exists for ALL food, not specifically a Create-processing-chain-routed connection). M-12 is for routing a specific raw material through a specific processing method — the diet demand here is undifferentiated. The weave is on the food mods (FD, ExtraDelight, etc.) not on appleseed itself. Appleseed is the demand signal, not the processing node.

**Candidate 2: diet-balanced buff as a prerequisite or enhancer for MineColonies colony worker efficiency**
- from: player diet state (balanced buffs from appleseed) | via: config/MineColonies colony production efficiency | to: economy (colony route) | motif: M-28 | power: everyday | tone: ok — if colony workers are affected by the player's diet state (fed workers = faster production), diet management becomes a colony-economics lever. Thematically reads as "a well-fed colonial overseer runs a tighter colony." | verdict: REJECT | reason: MineColonies worker efficiency is driven by the in-colony food supply, not the player's personal diet state. The diet buffs in appleseed affect the player character, not worker NPCs. This would require a forced non-existent config hook; the connection doesn't exist in either mod's mechanic surface.

The dossier is correct: appleseed's real 2nd anchor is a DEMAND pull that shows up in other mods' weaves, not as a weave on appleseed itself. The mod sits correctly as single-anchor survival pressure. No coherent 2nd anchor weave exists for this mod independently — but it makes other food mods' economy and Create weaves more load-bearing.

- LEAVE — the diet system is a demand driver, not a weave node. Its 2nd anchor is structurally embedded in how it amplifies other mods' weaves (it makes FD/ExtraDelight/cooking production economically necessary). No independent recipe- or method-pull weave from appleseed itself reaches a 2nd system anchor without forcing an edge that doesn't exist in either mod.

## touhou_little_maid   [anchors: survival (1)]

Touhou-themed maid companions with 21 task automations (farming, fishing, combat, ranching) + Altar multiblock (ritual-style crafting using power-point bottles as currency). Has registered recipe type: touhou_little_maid:altar_recipe_serializers. 16 blocks, 85 items, loot=yes.

**Method-pull analysis:**
The Altar multiblock is a native ritual-style method (analogous to Ars imbuement or Occultism ritual) — it accepts arbitrary item inputs plus power-point bottles and outputs gated content. This is exactly the M-05 (native-method gating) surface: gate a maid/upgrade behind Create-produced parts as altar inputs. The maids themselves are automation labor (M-33 service-for-hire analogue — they perform work on farms/fisheries for the player).

**Candidate 1: Altar recipe gated on a Create-produced mechanical component**
- from: Create mechanical component (e.g., brass mechanism, precision mechanism) | via: touhou_little_maid:altar_recipe_serializers | to: create | motif: M-05 (native-method gating — flagship item built in its own method, gated on Create parts) | power: mid (a specialized maid type is mid-tier; power-point bottles are the native currency) | tone: ok — a shrine altar that requires a precisely machined brass gear as an offering to summon a combat maid reads as "industrial-magical fusion"; the shrine demands order-level precision from the outside world. The Touhou/anime aesthetic is quirky but the mechanical-offering-at-shrine trope is established in the mod's design | verdict: ACCEPT | hook: summoning a hunting maid at the altar costs not just power points but a brass mechanism from the Create workshop — the shrine demands manufactured precision, making the magic summoning route dependent on Create production.

**Candidate 2: boss drop / occult material as altar recipe input for high-tier maid upgrade**
- from: boss signature drop (per M-15) or Occultism essence | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-15 (boss-key unlock) / M-11 (ritual/transmutation sink) | power: endgame (high-tier maid needing boss material is endgame) | tone: ok — boss drops as altar offerings to summon a powerful combat maid is thematically coherent; the maid is a danmaku combat specialist, so she's gated by combat achievement | verdict: ACCEPT | hook: the most powerful combat maid — the one who fires danmaku patterns — is unlocked at the shrine only after the player has defeated a boss and brought its signature drop as a tribute offering.

**Candidate 3: power-point bottles as mob-drop reagent / economy trade good**
- from: touhou_little_maid:power_point_bottle (village loot / maid fairy drops) | via: numismatics trade / loot distribution | to: economy | motif: M-02 (mob-drop reagent sink — fairy drops yield the currency; player economy via distribution) | power: everyday | tone: ok — power bottles are consumable altar currency; players who farm maid-fairy mobs become power-bottle suppliers for players who want maids | verdict: ACCEPT | hook: players who haven't built an altar still collect power-point bottles from maid fairies — a natural supply-and-demand trade: bottle farmers supply shrine-users who are advancing the altar progression.

**Candidate 4: maid farming/fishing labor as service-for-hire labor**
- from: touhou_little_maid maid automation (farming/fishing/shearing tasks) | via: maid-hire service (player-to-player) | to: economy | motif: M-33 (service-for-hire labor) | power: mid | tone: ok — lending a maid to another player's farm for a session is a labor-rental service | verdict: REJECT | reason: "lending" maid entities to other players is not mechanically supported; maids are bonded to their owner. M-33 requires the specialist to perform work on another player's materials, which maid AI doesn't support cross-player. The connection requires mechanics that don't exist. Leave this as flavor.

OK — survival anchor is sound. Three accepted links: Create-gate (M-05), boss-key magic (M-15/M-11), and power-bottle mob-drop economy (M-02).

## occultism   [anchors: magic (1)]

Flagship summoning/ritual magic pillar: pentacle rituals, spirit_fire, spirit_trade, dimensional mineshaft, crushing, crystallize. 164 blocks, 596 items, 158 c:tags, loot=yes. Registered recipe types: ritual, spirit_fire, crushing, crystallize, miner, spirit_trade, book_binding, repairitem.

**Method-pull analysis:**
This is the richest method surface in the chunk. The dossier already identifies 3 strong 2nd-anchor candidates. Let me evaluate them rigorously and look for gaps.

**Existing candidates from dossier — evaluating:**

**Candidate 1: occultism:spirit_trade as economy player-to-player trade node**
- from: spirit-traded otherworld goods | via: occultism:spirit_trade | to: economy | motif: M-02 (mob-drop reagent / spirit-drop traded goods) — but actually this is closer to M-33 (service-for-hire: the spirit performs trade) or M-29 (cross-route dependency) | power: mid-endgame (spirit_trade requires a summoned trader spirit, which requires ritual progression) | tone: ok — a summoned demon merchant is a natural intermediary for otherworld goods; players trade with it for materials unavailable by any other route | verdict: ACCEPT | hook: the Occultism specialist summons a spirit merchant that carries otherworld items (iesnium, djinn-crafted tools) — these goods exist only in the occult route, so Create and colony players must trade with the magic specialist to access them. M-18 (summoned-spirit logistics — spirit_trade as the magic acquisition route) is the exact motif.
- Corrected motif: M-18 (Summoned-spirit logistics — spirit_trade acquires scarce materials; the magic logistics arm)

**Candidate 2: mob/boss drops → occultism:spirit_fire or :ritual → essences (transmutation sink)**
- from: foreign mob/boss drops (blaze rod, wither skull, dragon egg analogue, cataclysm boss drops) | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-11 (ritual/transmutation sink) | power: mid-endgame (spirit_fire requires ritual setup; boss drops are endgame) | tone: ok — burning boss drops in the spirit fire to produce djinn/afrit/marid essences is exactly the mod's intended gameplay; the transmutation rite consumes the drop and yields a magic intermediate | verdict: ACCEPT | hook: a combat specialist farms boss drops and brings them to the magic specialist's pentacle — boss drops are transmuted into spirit essences that only the occultist can produce, making the two routes interdependent. M-11 + M-34 (combat-route supply).

**Candidate 3: occultism:crushing as parallel ore-doubling (Create cross-route)**
- from: raw ores (crushed in occultism crushing entity) | via: occultism:crushing | to: create | motif: M-03 (Create ore-doubling / M-29 cross-route dependency — using the magic crushing as an alternative to create:crushing) | power: everyday-mid (crushing is core early occultism) | tone: ok — occultism's crushing entity doubles ores the same way Create's crusher does; this is an alternative route that the magic specialist can use instead of building a Create ore-crushing setup | verdict: ACCEPT | hook: the magic specialist doesn't need to build a Create ore-processor — the Djinni crusher doubles ores through ritual, making the magic and Create routes genuinely non-overlapping in their production methods. M-29 (cross-route dependency) is the tighter motif — the magic route offering crushing makes the Create route non-mandatory, preserving specialist diversity.
- Corrected motif: M-29 (cross-route dependency — magic route has its own ore-doubling, distinct from Create's; neither route is required for the other)

**Candidate 4: dimensional mineshaft as regional-scarcity override / logistics (iesnium/silver acquisition)**
- from: occultism:dimensional_mineshaft → iesnium / occultism:silver_ingot | via: occultism:miner (spirit-mined void dimension) | to: economy/scarcity | motif: M-18 (summoned-spirit logistics — the miner spirit extracts from a void dim) | power: mid-endgame (dimensional mineshaft requires ritual + binding progression) | tone: ok — a spirit miner is the magic equivalent of Create's ore excavation, acquiring materials from a pocket dimension instead of the overworld; this is the magic production route's supply chain | verdict: ACCEPT | hook: the Occultism specialist doesn't dig — they send a spirit into the void to mine, producing iesnium and silver from another dimension. This is the magic pillar's logistics arm: the scarcity of iesnium/silver in the overworld is partially bypassed by the occult route (a real cross-route diversity that forces non-magic players to trade for these materials).
- Motif: M-18 (Summoned-spirit logistics)

**Candidate 5: occultism silver ingot as cross-route dependency (silver needed in Create or magic chains)**
- from: occultism:silver_ingot (c:ingots/silver, the pack's REAL silver — CLAUDE.md gotcha) | via: recipe (cross-route requirement) | to: create | motif: M-29 (cross-route dependency — a Create chain requires occultism silver) | power: mid | tone: ok — if a Create recipe calls for real silver (c:ingots/silver), only the Occultism specialist can produce it (via spirit mining), forcing Create specialists to trade with magic specialists | verdict: ACCEPT | hook: the Create smith who needs silver wire or a silver-contact component must acquire occultism silver — galosphere "silver" (actually palladium) won't substitute, so only the occultist's silver qualifies. M-29 cross-route dependency, and enforces the CLAUDE.md silver/palladium distinction.

**Existing anchor review:**
- REWORK: magic anchor (1) is already the correct primary anchor but occultism needs economy/Create/survival secondary anchors formalized. The dossier's economy candidate via spirit_trade was framed as M-09 (retired) — it should be M-18 (summoned-spirit logistics) instead. Correct the motif framing.

OK — five accepted links across Create (M-03/M-29), magic depth (M-11), and economy/logistics (M-18). Occultism is the pack's highest-density method surface.

## charta   [anchors: survival (1)]

Card-game social mod: multiplayer card tables (Crazy Eights, Solitaire, Fun), bar/casino furniture in every wood type, wine/beer glasses. 51 blocks, 54 items, loot=yes. No recipe types.

**Method-pull analysis:**
The surface here is the card-table social mechanics + bar furniture. The economy angle is obvious (wagering) but Charta has no built-in betting mechanic. The loot=yes likely covers village/tavern structures where card tables generate.

**Candidate 1: card table as Numismatics economy node (wagering with minted coin)**
- from: charta:card_table (gambling mechanic) | via: KubeJS event hook + numismatics coin | to: economy | motif: M-26 (consumption sink — coins wagered are spent against pressure, consumed in the social economy) | power: everyday | tone: ok — a card game played for Numismatics coin stakes is a natural economy sink; it's a legitimate consumption mechanism (coin is wagered and changes hands among players, exactly the player-run economy model) | verdict: ACCEPT | hook: card games at a charta table become a venue for player-economy currency circulation — an entertainment consumption sink that keeps minted coin moving. Note: this requires a KubeJS betting hook (no native mechanic) and works only if the server culture uses it; it's a social enablement weave, not a mechanical force. M-26 is correct because coin is consumed/transferred (not generated from nothing).

**Candidate 2: bar furniture (glasses, shelves) → create:cutting for wood component / deco-press**
- from: charta bar furniture (bar shelf, bar stool, game chair) | via: create:cutting | to: create | motif: M-04 (Create recycles deco) | power: everyday | tone: ok but weak | verdict: REJECT | reason: bar furniture crushing back to planks via create:cutting is the most generic deco recycle and adds no cross-system meaning. M-04 is better used for metal deco with metal recovery; wood furniture to planks is effectively lossless trivia. The weave adds no cross-system interest — charta bar furniture is decoration, not a processed material.

**Candidate 3: charta card table generating in tavern/village structures → loot-seed for trade goods**
- from: charta card tables (in village/tavern structures, loot=yes) | via: loot-seed | to: economy | motif: M-33 (service venue — card tables as a meeting place where economic services happen) | power: everyday | tone: ok | verdict: REJECT | reason: loot tables in card-table-containing structures don't make the card TABLE itself a weave node. Seeding trade goods into tavern chests is a loot-seed on the structure mod, not on charta. This is a delivery confusion; the weave would be on a tavern/structure mod, not charta.

**Candidate 4: wine glasses as vessels for vinery / alcohol_industry outputs**
- from: charta:empty_wine_glass / empty_beer_glass | via: vinery:wine_fermentation / alcohol_industry:alcohol_boiling | to: survival/economy | motif: M-35 (maturation/aging — wine ages in bottles, served in wine glasses) | power: everyday | tone: ok — wine glasses as serving vessels for aged wine is coherent (the glass is the final container for the aged product) | verdict: ACCEPT | hook: a player running a tavern fills charta wine glasses with vinery-fermented wine — the glass is the serving step after the aging chain, connecting bar furniture to the food/drink production web. Requires a recipe linking empty_wine_glass + wine to a served_wine variant (via a Fill or item_application recipe); thematically clean.
- Motif: M-35 (maturation/aging — glass as the serving vessel step at the end of the wine-aging chain)

OK — survival anchor is thin (social decoration). Two accepted links: economy coin sink via card wagering (M-26), and wine-glass→vinery serving vessel (M-35). These together push charta into survival+economy territory coherently.

## mcwdoors   [anchors: support/decoration (1)]

250 door/gate variants in every wood + metal type. Sanctioned decoration palette support role. 246 blocks, 260 items, loot=yes. No recipe types.

**Method-pull analysis:**
Mirrors mcwfences: decoration palette with metal variants as the M-04 Create-crushing candidate. The dossier already identifies this.

**Candidate 1: metal/iron door variants → create:crushing → iron nuggets/raw + xp nugget (M-04)**
- from: mcwdoors iron/metal door variants (modern_door, industrial styles) | via: create:crushing | to: create | motif: M-04 | power: everyday (doors are basic building-tier materials) | tone: ok — crushing a deconstructed iron door back to iron nuggets in a Create crusher is a sensible salvage loop | verdict: ACCEPT | hook: a builder who tears down a fortification or upgrades a base can crush the old iron doors into scrap via Create, closing the metal recycling loop.

**Candidate 2: glass door variants → create:crushing → glass shards or sand (M-04)**
- from: mcwdoors glass door variants (glass_door, barn_glass_door) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — crushed glass yielding sand or glass shards is coherent with Create's material loop | verdict: REJECT | reason: glass doors to sand via crushing is a near-1:1 round trip (glass = sand; crushing it back to sand is lossless reclamation). The M-04 motif is for *lossy* recycling — the lossy element (xp nugget) is the Create reward. Sand→glass→crush→sand with only an xp nugget gain is a trivial loop that doesn't add cross-system meaning. Restrict to metal variants only.

**Candidate 3: wooden door variants as Create-cutting outputs (M-12 — reverse: Create cutting produces exotic wood doors)**
- from: exotic wood logs | via: create:cutting → wooden door blanks → crafted into mcwdoors wooden doors | to: create | motif: M-12 | power: everyday | tone: ok — but | verdict: REJECT | reason: this routes Create cutting into wooden door blanks as an intermediate, but mcwdoors wooden doors are already craftable directly on the vanilla table from planks. Adding Create as a prerequisite step for basic doors would be gating basics behind a complex recipe (explicitly forbidden in the briefing guardrails: "never gate a basic/everyday component behind a complex recipe").

OK — single accepted link: metal door variants → create:crushing (M-04). Same as mcwfences; Phase-3 should batch the whole Macaw's deco family under one wholesale M-04 authoring pass.

## terrablender   [anchors: support/library (1)]

Worldgen library: biome-region API that lets biome mods inject biomes into vanilla terrain without clashing. No items, no loot, no blocks, no recipe types.

- LEAVE — genuine zero-content code library. Biome-region registration API only; no player-facing content and no method surface. Required dependency for biome mods; no weave possible.

## controlling   [anchors: support/client-UI (1)]

Client UI mod: adds search/filter to the vanilla Key-Bindings screen. No items, no loot, no blocks, no recipe types. Pure UI enhancement.

- LEAVE — genuine zero-content client UI utility. Keybind search is a QoL improvement for the player managing many mods' controls; zero material surface, no weave possible.

## mcwwindows   [anchors: support/decoration (1)]

328 window/shutter/blind/curtain/parapet/arrow-slit variants. 328 blocks, 326 items, loot=yes. No recipe types. Sanctioned decoration palette.

**Method-pull analysis:**
Same Macaw's deco family as mcwfences and mcwdoors. Stone parapet/arrow-slit variants are M-04 crushing candidates; curtains (wool-based) open a possible M-12 processing hook.

**Candidate 1: stone parapet/arrow-slit variants → create:crushing → gravel/raw stone + xp nugget (M-04)**
- from: mcwwindows stone parapet variants (andesite_parapet, blackstone_gothic, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — stone deco crushing back to gravel/raw is a sensible salvage mechanic | verdict: ACCEPT | hook: a player dismantling castle-style fortifications crushes stone parapets into gravel aggregate in a Create crusher — deco palette feeds the material loop.

**Candidate 2: wool curtains as Ars Nouveau imbuement target (dye-infusion → arcane curtain)**
- from: mcwwindows:black_curtain / wool curtain variants | via: ars_nouveau:dye / ars_nouveau:imbuement | to: magic | motif: M-10 (arcane infusion pull — foreign material refined/attuned into a magic context) | power: everyday | tone: clash — curtains as magical items is a significant aesthetic leap. A curtain is a domestic textile; making it "arcane" via imbuement feels forced and comedic rather than coherent. The magic pillar's imbuement is for items with real magical function (foci, reagents, wands), not home textiles. | verdict: REJECT | reason: theme clash — domestic curtains as arcane items doesn't survive red-team. The tonal gap between "wool curtain" and "imbuement target" is too large. M-10 applies to items with natural magical adjacency.

**Candidate 3: mosaic glass panels → create:mixing (colored glass fusion from dyed glass + sand) as intermediate**
- from: mcwwindows mosaic glass | via: create:mixing | to: create | motif: M-12 (processing chain — Create mixing produces the colored glass intermediate for mosaic panes) | power: everyday | tone: ok | verdict: REJECT | reason: this gates a basic deco material behind Create mixing, which violates "never gate a basic/everyday component behind a complex recipe." Mosaic glass is deco; adding a Create prerequisite to all colored glass deco blocks punishes builders and is not depth, just friction.

OK — single accepted link: stone parapet → create:crushing (M-04). Part of the wholesale Macaw's deco-family M-04 pass.

## midnightthoughts   [anchors: survival/rest (1)]

Sleep/rest overhaul: well-rested buff system from sleeping, penalizes sleep-skipping. No items, no loot, no recipe types. Pure effect/event-driven mechanic.

**Method-pull analysis:**
The well-rested buff is a persistent status effect tied to sleep timing. No material surface. The only possible weave angle is whether the well-rested buff interacts with another system's mechanic — but that requires a mod-to-mod config hook that doesn't exist in either system.

**Candidate 1: well-rested buff as a prerequisite for increased MineColonies worker output**
- from: midnightthoughts well-rested status | via: config tie / KubeJS event | to: economy (colony route) | motif: M-28 | power: everyday | tone: ok in concept | verdict: REJECT | reason: MineColonies worker AI doesn't read the player's well-rested buff state — worker productivity is driven by in-colony food supply, not player status effects. This connection requires a mechanical bridge that doesn't exist.

**Candidate 2: well-rested buff as a lunar/seasonal cycling anchor (M-22)**
- from: player sleep schedule tied to moon phase (Midnight Thoughts respects MC day/night) | via: config/behavioral | to: survival | motif: M-22 (lunar/celestial reagent — a material/effect tied to moon events) | power: everyday | tone: ok conceptually | verdict: REJECT | reason: the well-rested buff is triggered by sleeping, not by moon phase specifically. Moon-phase-specific sleep bonuses would need a separate mechanic; Midnight Thoughts doesn't implement moon-phase differentiation. This is a theme association, not a method-pull.

- LEAVE — behavior-only rest/sleep mechanic. No items, no loot, no recipe types; no material surface for method-pull. The well-rested buff is a survival pressure enhancement with no join key to a second system. Forcing an edge (e.g., "well-rested buff → colony productivity") requires mechanical bridges that don't exist in either mod. Leave as survival support.

## spawn   [anchors: survival (1)]

Ambient fauna + new biomes: clams (color variants, casting-net catch), crabs, anglerfish, seals, sea cows, date-palm wood set, ant biome, Seagrass Meadow biome; EveryComp bundles cross-mod block variants. 165 blocks, 296 items, 34 biome-modifiers, 8 c:tags, loot=yes. Registered recipe type: spawn:casting_net_clam. Existing inbound weaves: farmersdelight:cooking, farmersdelight:cutting.

**Method-pull analysis:**
Spawn already has the FD cooking/cutting connection (survival→food production) established. The question is whether those connections are the right ones, and what 2nd anchors are available.

**Candidate 1: clam drops → Create crushing → clam powder / shell fragments (M-12 processing-chain pull)**
- from: spawn clam drops (clam meat / clam shell) | via: create:crushing | to: create | motif: M-12 (processing-chain pull — raw seafood/shell processed into a useful intermediate) | power: everyday (clams are common coastal catch) | tone: ok — crushing clamshells into shell grit (a calcium analogue) or grinding clam meat into seafood paste is coherent as an industrial seafood processing step | verdict: ACCEPT | hook: the coastal fishing specialist runs clams through a Create mill to produce clamshell aggregate — a building material or fertilizer intermediate — making the seafood harvest economically deeper than just cooking.

**Candidate 2: clam color variants as magic dye reagents / Ars imbuement input**
- from: spawn clam color variants (purple, red, white, yellow clamshells) | via: ars_nouveau:dye / ars_nouveau:imbuement | to: magic | motif: M-10 (arcane infusion pull — chromatic shell fragments as pigment for magic work) | power: everyday | tone: ok — colored shells as natural dye sources for magical pigments is coherent with the alchemical tradition of shell-derived pigments (Tyrian purple from murex shells is a real historical parallel) | verdict: ACCEPT | hook: gathering rare-colored clams (specific color variants that spawn in specific biomes) yields shell fragments that feed Ars Nouveau's dye/imbuement system — regional seafood specialization gains a magic-pillar outlet.

**Candidate 3: date palm wood → aeronautics structural material (M-23 structural alloy analogue)**
- from: spawn:date_log / date_planks | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash — date palm wood as an airframe structural material is a stretch; M-23 is for load-bearing metals (plates, beams, alloys). Wood planks (even exotic date palm) are not structural alloy equivalents. This would trivialize M-23 by treating any exotic wood as an airframe material. | verdict: REJECT | reason: theme clash with M-23 — date palm is exotic deco wood, not a structural engineering material. M-23's intent is fabricated metal plates/alloys, not wood.

**Candidate 4: anglerfish bioluminescence → magic catalyst (M-07 attunement catalyst)**
- from: spawn:angler_fish drop (bioluminescent organ / drop) | via: ars_nouveau:imbuement | to: magic | motif: M-07 (attunement catalyst — a worldgen consumable gates a magic conversion) | power: mid (anglerfish are deep-ocean; finding them requires exploration) | tone: ok — bioluminescent deep-sea fish providing a light-based magic catalyst is thematically coherent; anglerfish are universally associated with alien/otherworldly appearance | verdict: ACCEPT | hook: the anglerfish's lure is a self-lighting organ from the deep ocean — the Ars Nouveau mage uses it as an attunement catalyst for a light-infusion recipe, making deep-sea fishing a magic-relevant profession.

**Candidate 5: spawn seafood as logistics-required bulk good for aeronautics (M-31)**
- from: spawn crab/clam/fish bulk haul | via: aeronautics cargo (ship-based fishing and bulk delivery) | to: aeronautics | motif: M-31 (logistics-required bulk good) | power: mid | tone: ok — bulk seafood that needs delivery from coastal/ocean biomes to inland players | verdict: REJECT | reason: same issue as chefsdelight candidate 2 — food is not bulk-heavy enough to require airship logistics without M-36 perishability being in play (MECHANISM-PENDING). Without perishability, seafood is no more logistics-demanding than any other carried item.

**Existing anchor review:**
OK — the farmersdelight:cooking / farmersdelight:cutting inbound weaves are sound (survival→food production). New links: clam→Create crushing (M-12), color-clam→magic dye (M-10), anglerfish→magic attunement catalyst (M-07). These give spawn survival+create+magic, well-woven.

== CHUNK COMPLETE ==

