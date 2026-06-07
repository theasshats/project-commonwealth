# Phase 2 candidates — chunk-03

## ars_nouveau   [anchors: magic (1)]

Existing connections: magic spine only (1 anchor). The dossier flags magic↔survival via Vitalic/Agronomic as a candidate — that's the strongest organic link. The magic-internal M-01 hub is established. The dossier's M-09 "sellable" candidate is already retired; ignore it.

REWORK note: no existing cross-system weaves yet, so no REWORK items — just new proposals.

- from: ars_nouveau:source_gem (imbuement) | via: ars_nouveau:imbuement | to: Create | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: foreign essences (lapis, amethyst, nether quartz) refined through the Imbuement Chamber into source_gem; the arcane lab is the downstream sink for Create's crushed-ore byproducts, tying the tech spine to the magic currency
- from: mob-drop surplus (Drygmy / Vitalic sourcelink) | via: ars_nouveau:summon_ritual / Vitalic Sourcelink (passive mob-death → Source) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the magic garden literally runs on the farm's surplus — every mob death and baby animal feeds the Source economy, so a ranching/combat player is also fuelling the mage's power
- from: ars_nouveau:source_gem (Alchemical sourcelink) | via: ars_nouveau:alchemical_sourcelink (potion jar → Source) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: brewing potions and feeding them to the Alchemical sourcelink is a consumption sink that keeps potion demand live — apothecaries brew to sell to the mage who burns them for Source
- from: ars_nouveau enchanted gear / spell scrolls | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the mage is a specialist — other players bring items to be enchanted via the Enchanting Apparatus or have spells inscribed; payment is emergent, capability can't be bought, only the product
- from: ars_nouveau:archwood logs | via: ars_nouveau:imbuement (as fuel bonus for Volcanic sourcelink) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Volcanic sourcelink burns any fuel to generate Source; archwood gives a bonus, but this is a passive consume of a Create-adjacent material, not a method-routing that advances the loop. The M-12 shape works better for food/crop chains than passive fuel; this doesn't add a cross-system link that's meaningful enough to record as a weave candidate.
- from: ars_nouveau spell scrolls (combat utility) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: spell scrolls as loot-table seeds in structures is a valid concept, but ars_nouveau already anchors survival via the mob/farm source sinks (M-02/M-26 above). Seeding scrolls into unrelated structures would spread the mod's progression onto loot rather than recipe webs; weak emergent link with no mechanic pull.

## oceansdelight   [anchors: survival (1)]

Existing connections: survival only (1 anchor). Dossier proposes M-09 as economy link — M-09 is retired. Needs a real demand-gate or processing chain to reach 2 anchors.

- from: oceansdelight:guardian_soup (cooking-pot block) | via: ars_nouveau:imbuement OR occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the elder guardian's mystical bioluminescence makes its concentrated soup broth a plausible arcane reagent — a coastal specialist brews it and ships it to the mage; the dangerous ocean temple boss-fight (elder guardian) backs the power tier
- from: oceansdelight:fugu_slice (chance-based poison food) | via: farmersdelight:cooking (the output already exists) / irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: pufferfish venom is a real-world toxin with magical precedent; routing fugu-derived toxin through a cauldron brew as a poison-effect reagent or potion base ties the dangerous coastal ingredient into the magic pillar — coast specialists supply danger-food to apothecaries
- from: oceansdelight:elder_guardian_roll / cooked dishes | via: farmersdelight:cooking → diet demand | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: high-nutrition seafood dishes are consumed against diet pressure (5-group system), renewing demand for coastal goods — the survival loop's consumption edge; the baked/cooked dishes satisfy the Protein group specifically
- from: oceansdelight raw ocean drops (tentacles, guardian meat) | via: create:crushing / create:milling | to: Create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — milling raw seafood in a Create machine reads as industrial fish paste, not a sensible culinary or industrial step. The coherent processing is FD cutting/cooking (which already exists as the mod's backbone). Forcing Create into a seafood chain is contrived.
- from: oceansdelight:elder_guardian_roll (rare prestige food) | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the elder guardian is a mid-tier ocean monument boss. The supply link (combat specialist farms drops → non-combat player gets seafood cuisine) is conceptually sound, but it reduces to "it's sellable because hard to get" — the ambient endpoint. Without a gating mechanic (colony demand, locked exclusive, cross-route ingredient) this is M-09 territory. REJECT pending a harder demand gate.

## controlling   [anchors: support/client-QoL (1)]

Zero content surface (0 blocks, 0 items, pure UI).

LEAVE — pure client keybind-search UI; no items, methods, or materials to weave. Genuine zero-content surface.

## cookingforblockheads   [anchors: survival (1)]

Existing connections: survival (food/cooking hub). Dossier proposes M-05 Create gating and rejects bare economy sell link.

- from: cookingforblockheads:oven / fridge / sink (kitchen appliance blocks) | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: a kitchen this large — multi-block fridge, industrial oven — should be assembled from Create brass fittings and copper sheet; the Sink needs a brass spigot, the Oven a blaze-heated cast-iron plate; the kitchen becomes a Create build milestone before a food specialist can reach full throughput
- from: cookingforblockheads:cooking_table (central hub) | via: minecolonies huts (cook's hut uses it as workstation) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies Cook hut already uses the Cooking Table as a workstation — this is a direct colony-route tie; a colony produces meals cheaper/faster via its Cook than a player crafts solo, making the kitchen a colony production node that feeds the pack's cheaper-basics route
- from: cookingforblockheads (the Recipe Book aggregation) | via: config — food-mod tags feed into its recipe scanner | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the mod's recipe scanner is a convenience layer, not a consumption mechanic. M-26 requires an item be *spent* against pressure — the Cooking Table just helps you discover recipes. This isn't a weave; it's the mod's ambient function.
- from: cookingforblockheads:toaster (the only registered recipe-type) | via: cookingforblockheads:toaster | to: Create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: the Toaster converts bread→toast — a trivial one-step recipe. Gating it on Create parts would over-engineer a breakfast appliance; M-05 is better expressed on the showcase kitchen blocks (oven/fridge). Adding a second Create edge here is redundant and the tier doesn't justify depth.

## dummmmmmy   [anchors: support/QoL (1)]

One item (target_dummy), no recipes, no loot, no methods.

LEAVE — damage-test prop with a single placeable entity; no materials, methods, or loot table to route. Forcing a "craft the dummy with Create parts" edge would be purely cosmetic flavor with no loop impact.

## smartbrainlib   [anchors: support/library (1)]

Zero content surface (0 blocks, 0 items, pure AI framework code library).

LEAVE — pure developer library; genuine zero-content surface. No items, methods, or loot.

## death-count-1.0   [anchors: support/flavor (1)]

Zero content surface (0 blocks, 0 items, scoreboard datapack only).

LEAVE — vanilla scoreboard cosmetic; no items, methods, or materials to route. Sanctioned support role, nothing to weave.

## create_connected   [anchors: Create (1)]

Dossier says Leave (Create-spine QoL only). Let me red-team this: create_connected has loot=yes (65 blocks, 57 items), and the kinetic_battery / inventory_bridge / item_silo are real automation infrastructure. The copycat blocks wear any block texture — that's a decoration/deco-palette bridge. The fan_catalyst family (blasting/haunting/etc.) are create_connected's method-extension blocks.

- from: create_connected:item_silo / inventory_bridge (bulk logistics blocks) | via: aeronautics ship design (storage configuration) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: aeronautics ships need bulk cargo holds; the item_silo (high-capacity per-block storage) and inventory_bridge (cross-contraption item access) are the Create-native answer to "ship's hold" — explicitly tying the logistics addon to the pack's aeronautics arm makes airship design depend on Create-connected infrastructure
- from: create_connected:kinetic_battery | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the kinetic_battery stores rotational energy but is already made via Create methods (filling/item_application per made-by line). Adding a sequenced-assembly keystone would layer M-06 on a part that is Create-internal — no new system anchor. The Create-internal depth is already there; this doesn't advance the loop to a second pillar.
- from: create_connected:fan_haunting_catalyst | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: create_connected provides a dedicated catalyst block to channel haunting-fan processing; making this catalyst require an occultism soul reagent or ars_nouveau source_gem input ties the magic pillar directly into the Create haunting chain — the soul-seam (M-19) runs through a crafted block, not just a raw fan setup
- from: create_connected:copycat blocks (wear any texture) | via: KubeJS config — accept deco blocks from magic mods as copycat skins | to: magic | motif: no-motif | verdict: REJECT | reason: deco-skinning is a cosmetic behavior, not a method-routing; there's no motif for "looks like another mod's block." No weave candidate.

## farmersdelight   [anchors: survival, Create (2)]

Already at 2 anchors. Dossier flags M-09 economy further weave (retired) and partial M-12 Create chain (partly existing). Check existing connections for REWORK.

REWORK: The dossier's "economy via numismatics — stews/pies as sellable goods" is an M-09 bare sell link — that's retired. No action needed, but confirm the existing 2-anchor claim.

Existing connections sound for 2 pillars. Looking for a third weave now:

- from: farmersdelight crops (cabbage/tomato/onion/rice — c:crops/grain tags) | via: ars_nouveau:imbuement (Agronomic Sourcelink: any crop growth in radius → Source) | to: magic | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Farmer's Delight crop farm beside an Agronomic Sourcelink passively generates Source — the agrarian and the mage share space; a dedicated crop-specialist's fields are double-purpose, feeding both the kitchen and the arcane lab
- from: farmersdelight:straw (byproduct of rice harvest, c:storage_blocks/straw) | via: create:milling (straw → animal feed or mulch intermediate) | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: straw is a natural milling/processing byproduct that can become animal bedding, compost input (MineColonies composting method), or mulch — turning the farm's waste into a Create-chain feedstock closes the production byproduct loop
- from: farmersdelight:cooking_pot (the primary food method hub) | via: minecolonies:composting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: composting at MineColonies uses specific waste, not cooked food; routing finished meals into a compost bin is thematically wrong and over-discards value. The M-28 colony link is better expressed via a Cook hut (chefsdelight covers that). Reject this specific routing.
- from: farmersdelight seasonal crops (cabbage grows in autumn, tomato summer — Serene Seasons) | via: serene_seasons config / seasonal growth gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: farming pressure shifts with the calendar — cabbage in autumn means stew ingredients are seasonal; winter forces reliance on preserved/canned goods, creating recurring scarcity cycles within the food production chain

OK — existing Create connection is sound (milling/mixing/filling per made-by). The survival anchor is the core food pillar — sound.

## chefsdelight   [anchors: survival, economy (2)]

Already at 2 anchors (survival + economy via villager trades). Dossier suggests routing its trades onto Numismatics coins — that's M-21 (CUT). The existing villager-trade economy anchor is NPC-based, which is cut per #163/#240. Check this carefully.

REWORK: The dossier claims "economy via villager trades" as the economy anchor. Villager trades paying emeralds are NPC economy, which M-21 cuts. The economy anchor here is **weak/misclassified** — the Cook/Chef villager selling FD meals for emeralds is exactly the NPC coin faucet the rework eliminated. This anchor needs reconsidering.

- REWORK: chefsdelight's "economy" anchor rests on emerald-trade villagers — the same NPC faucet M-21 cuts. The economy anchor should be challenged: it should either be reframed as M-33 service-for-hire (the Cook villager provides a labor service: cooking for players who lack the kitchen, with player-emergent payment), or dropped until the trades are re-scoped to non-coin goods. Flag for Gate 2 review.

- from: chefsdelight Cook/Chef villager professions | via: M-33 service-for-hire framing | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cook village is a specialist labor node — players who lack a kitchen can contract the village cook to process raw ingredients; payment is emergent (emeralds as a proxy, or Numismatics once the economy pillar is built); the work is done, not a product sold — fits service-labor framing
- from: chefsdelight village cook structures (new village buildings) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the cook structures are village variants, not dungeon/boss loot tables; loot-seeding here would put weave-relevant drops in a cooking-stall which is tonally wrong and mechanically unnecessary. The survival anchor comes from the FD food content the mod surfaces, which is already sound.
- from: chefsdelight (recruitable cook NPCs near a colony) | via: minecolonies huts | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies has its own Cook hut and restaurant — chefsdelight's professions are vanilla villager mechanics, not colony workers. Conflating them would require custom wiring that doesn't exist. M-28 is better authored via cookingforblockheads (which the colony Cook hut actually uses). Reject the collision.

## supplementaries   [anchors: Create, survival (2)]

Already at 2 anchors and deeply cross-woven. Dossier says Leave (no further edges needed). Checking existing connections and one potential new link.

REWORK: Existing connections are sound — haunting/mixing/splashing ties it to Create; FD cutting/flax crop/ash/soap ties it to survival. No weak or arbitrary existing edges. OK — connections sound.

- from: supplementaries:flax (c:crops/flax → rope/string) | via: ars_nouveau:imbuement (Agronomic Sourcelink passive Source from flax growth) | to: magic | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax is a crop; the Agronomic Sourcelink harvests Source from *any* crop growth in radius — a flax farm is simultaneously a rope factory and a passive Source generator; a fiber specialist supplies both the textile trade and the arcane economy without a recipe change
- from: supplementaries:faucet (fluid transfer — meshes with Create piping) | via: aeronautics fluid-routing on ships | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: the faucet is a useful fluid utility but it's a passive gravity-fed pipe, not a bulk cargo mover. Linking it to aeronautics as a "logistics bulk good" is a stretch — M-31 requires goods heavy enough to *need* the logistics arm; a faucet is just decoration/QoL. Tone: plausible but the weight isn't there.
- from: supplementaries:safe (locked storage) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: a safe as a player-economy tool is real (locked chests for market stalls) but this is ambient decoration behavior — the connection isn't a weave, it's just "players use safes to store traded goods." No method-routing exists to call this a candidate. The mod is already at 2 anchors and sound; forcing an economy edge isn't needed.

## createoreexcavation   [anchors: Create (1)]

Dossier proposes economy via vein-table scarcity → M-08 coin-mint (design lever, not a recipe). Need a genuine method-routing to get to 2 anchors.

- from: createoreexcavation vein outputs (raw ores — any via vein recipe table) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the drilling machine locates and mines a finite-rate ore vein; scarce regional metals (tin from create_ironworks, Galosphere palladium, etc.) extracted by drilling feed the Create crushing chain → coin mint; the drilling specialist controls a regional coin feedstock — minting is a specialization (M-08 reframe)
- from: createoreexcavation:vein_finder (3-chunk survey tool) | via: M-30 regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: veins are per-chunk and biome-biased — a player who finds a palladium or tin vein in their region holds a structural economic advantage; the Vein Finder makes that geography legible and tradeable as survey knowledge; region-locked ore access is the scarcity foundation M-30 gates
- from: createoreexcavation:diamond_drill / netherite_drill (high-tier drill heads) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the drill heads already route through create:crushing/cutting/milling/mechanical_crafting per the made-by line. Wrapping the diamond/netherite drill into a sequenced-assembly chain would be double-layering Create depth on a mod that's already Create-spine. The endgame drill should stay deep but it doesn't need M-06 on top of its existing Create chain — no new system anchor gained.
- from: createoreexcavation fluid extractor (extracting type) | via: tfmg:distillation | to: Create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: fluid extraction feeds into the broader fluid economy (fuels, etc.) but the extracting method routing is Create-internal; TFMG distillation is a legitimate downstream but it doesn't add a new system anchor (still Create→Create). No second pillar gained.

## create_compressed   [anchors: Create (1)]

Dossier says Leave (Create-internal QoL/storage). Red-team: 30 blocks, 30 items, already uses create:crushing/milling/mixing/splashing/sandpaper_polishing. Items are storage blocks for Create intermediates.

- from: create_compressed crushed ore pile blocks (crushed_tin_pile, crushed_copper_pile, etc.) | via: aeronautics cargo hold design | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: compressed storage blocks reduce the volume of bulk goods for shipping — this could be argued as enabling the logistics arm. But M-31 requires goods that *need* the logistics arm's bulk-movement role; storage compression is a convenience feature on any transport. Aeronautics ships are the transport, not the compressed goods themselves. The connection is ambient (compression helps logistics) not a weave.
- from: create_compressed:mechanism_block / sturdy_sheet_block (compressed Create parts) | via: create:sequenced_assembly → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the compressed mechanism block (9 Create mechanisms in one) is a dense structural material — requiring it in airframe/hull recipes makes large ships depend on bulk Create production capacity (you need to compress enough mechanisms first); a ship's structural density is gated behind industrial-scale mechanism output
- from: create_compressed:wheat_flour_pile / dough_block | via: farmersdelight:cooking (bulk baking) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: flour pile is a convenience 9:1 compression of Create flour; routing it to FD cooking is just "use flour in a recipe" — the connection already exists implicitly. No weave — this is ambient use of a tagged ingredient, not a new cross-system link.

## formations   [anchors: survival (1)]

Dossier says Leave (scatter-structure worldgen, no items). Counts: 0 blocks, 1 item (template_editor tool), loot=no. Dossier is right that loot-seeding belongs to what it *generates*, not Formations itself.

- from: formations structures (altars, cabins, ruins, campsites) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: formations has loot=no in the jar digest — no loot tables to seed. The structures use vanilla/modded block palettes but don't register drops. The template_editor is a dev authoring tool, not a gameplay item. No loot-seed candidate exists here.
- from: formations worldgen scatter structures (ruins, altars) | via: loot-seed (custom datapack add) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: formations registers NO loot tables (loot=no). Adding loot to its structures would require authoring new structure templates that include chests with custom loot — that's authoring new structures, not seeding existing ones. Out of scope for Phase 2 weave mapping; requires actual structure-authoring work. Reject here; flag as a possible Phase 3 design task separately.

LEAVE — formations structures carry no loot tables (jar digest: loot=no, 0 blocks, 1 dev-tool item). No content surface to weave; loot-seed path requires authoring new structures from scratch, not seeding existing tables.

## create_ironworks   [anchors: Create (1)]

Dossier proposes M-08 (tin → coin) as the economy link and survival/worldgen as a second angle. Both land on the same loop node (scarcity→economy). Let me look for two distinct anchors.

- from: create_ironworks:steel_ingot (near-Netherite alloy) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel is the Create metallurgy capstone — requiring a sequenced-assembly chain (press tin → alloy with iron → temper → steel plate) makes large-scale steel production a genuine Create deep-dive and gates the material behind the factory build milestone
- from: create_ironworks:tin_ingot / tin_ore (scarce regional ore) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is the pack's new scarce metal with biome-biased worldgen; crushing it and pressing it into Numismatics coin (tin cog or tin bevel) makes the coin supply tied to regional tin deposits — whoever controls tin deposits mints the coin; minting is a production specialization
- from: create_ironworks:bronze_armor / steel_armor (gear sets) | via: M-34 combat-route supply | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the bronze→steel gear progression is the combat specialist's advancement path; non-combat players need steel-tier tools for late-game building and colony expansion, so the combat/Create specialists who produce them are the gear suppliers — the supply side of the danger-gear economy
- from: create_ironworks:steel_plate (c:plates/steel tag) | via: aeronautics hull recipe (M-23 structural alloy) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is explicitly the pack's structural alloy candidate — requiring it in Aeronautics airframe and hull recipes (alongside iron beams) makes mid-tier ships depend on the Create ironworks supply chain; ship-builders must trade for or produce steel, tying the aeronautics build milestone to the metallurgy tier
- from: create_ironworks:brass_hammer (3×3 AOE mining) | via: survival pressure | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the hammer being consumed by use (durability) is M-26 tooling wear, but that's ambient Minecraft durability behavior — not a authored weave. M-38 (tooling wear) is MECHANISM-PENDING; don't propose it. Reject.












