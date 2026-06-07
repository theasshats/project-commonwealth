# Phase 2 candidates — chunk-06

## imfast   [anchors: support/QoL (1)]

- LEAVE — pure server-side movement-validation mixin; 0 items, 0 blocks, no content surface. Functionally serves aeronautics (keeps ships from getting kicked) but as a fix, not a wireable resource. No motif applies.

OK — connections sound (support anchor is correct; no weave is appropriate or possible).

## create_ultimate_factory   [anchors: Create (1)]

Power-read: this is a recipe datapack — no blocks, no items of its own. Every recipe it adds uses existing Create machine types (compacting/crushing/mixing/splashing/haunting). Its explicit job is to make vanilla resources renewable via those machines (coal→diamond via heated compacting, nuggets+gravel→strata stones, etc.). It deepens the Create pillar but has no free materials to route anywhere else, and no items another mod could pull. The one latent angle: its coal→diamond and lava→stone renewability loops might interact with scarcity design intent (create_ultimate_factory's renewable diamond path could undercut GTMOGS scarcity if unmanaged). That's a curation note, not a weave.

- LEAVE — recipe datapack with 0 items, 0 blocks of its own; it authors recipes onto Create's existing types and has no material surface for a cross-pillar weave. The only design note is: verify its renewable-diamond recipe doesn't undercut GTMOGS scarcity intent (a config/disable pass, not a weave).

REWORK: the dossier's anchor (Create only, 1) is accurately scored — a datapack that authors Create recipes is firmly Create-pillar. No second anchor is achievable through weaving because there is nothing to route.

## formations   [anchors: survival (1)]

Power-read: purely a worldgen scatter-structure mod (altars, cabins, pedestals, ruins, campsites built from vanilla/modded block palettes). The AUTO digest confirms 0 blocks registered under its own namespace and loot=no, so it seeds no loot tables. The one item the jar registers (`formations:template_editor`) is an authoring tool for the mod's developer, not a player progression item. No processing methods; no drops; no items for any machine to pull.

Red-team: could the template_editor be wired as a crafted item? It's a dev utility and wouldn't make thematic sense as a player-crafted item. Could a structure mod tie into bounties (M-14)? Only if it had loot — loot=no means there is nothing to seed. Could its generated altars/pedestals contextually be tied to a ritual system (loot-seed → occultism, M-11)? The structures themselves are cosmetic, not loot-bearing; loot-seeding would require the mod to have loot tables, and it doesn't. All roads dead-end.

- LEAVE — 0 own blocks, loot=no, template_editor is a dev tool. Cosmetic scatter structures with no loot surface; no coherent weave path. Second anchor is not achievable.

OK — connections sound (survival anchor correct; leave is appropriate).

## accelerateddecay   [anchors: support (1)]

Power-read: zero items, zero blocks, zero gameplay content. Pure leaf-decay performance behavior patch. Nothing to route.

- LEAVE — genuine zero-content performance mod. No items, no blocks, no methods. LEAVE is the correct and only verdict.

OK — connections sound.

## minecolonies   [anchors: survival, Create (2)]

Power-read: minecolonies is a first-class production-route node (per SYSTEMS.md §3 and the dossier). It already holds ≥2 anchors: survival (settlement/food) and Create (quarries gated on brass/cogwheel parts via 98-minecolonies.js, M-05). The dossier correctly notes the deeper Create tech is gated BEHIND colony research. Now check for third-anchor candidates.

Candidate — economy via M-09 (colony food/goods as sellable trade goods): the colony produces a category of foods (`minecolonies:apple_pie`, `minecolonies:baked_salmon`, c:foods/* categories including bread/soup/vegetable/candy tags) that are finished prepared goods. Finished food produced cheaply by NPC workers is a natural sell-good — the colony feeds the trade pillar. The method is `numismatics` sell/price on colony-produced items. Power: mid-tier (colony food is everyday/mid; depth is proportional). Tone: a settlement that supplies the local market is the most natural economy-loop participation imaginable — "the colony feeds and sells to the server." This advances the loop directly (production node → economy node). Red-team: could undercut food scarcity if all food is buyable freely — but price tuning handles this; the weave is a link, not a balance fix. Motif: M-09.

Candidate — economy via M-14 (bounty board → colony guards/combat): minecolonies has barracks, guard towers, combat academy — colonists that fight. A bounty board could source colony-defense quests (kill waves near a town hall), paying coin for completing them. Method: `bountiful` board → numismatics. Power: mid. Tone: colonies under threat, bounties to protect them — natural (M-14). Red-team: this is a stretch — bountiful bounties are usually mob-kill, not colony-specific; wiring it to colony events would need custom KubeJS. Tag as weaker. Motif M-14 provisional.

Existing connections check: M-05 quarries on Create parts is well-anchored and correctly scoped (mid-tier quarry machines on brass/precision). The survival anchor from settlement/farming is accurate. No existing connection is arbitrary.

- from: minecolonies:apple_pie, minecolonies:baked_salmon, minecolonies c:foods/* tags | via: numismatics sell/price (KubeJS price config) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: colony cooks produce cheap bulk food that players buy at market — settlement becomes the server's breadbasket
- from: minecolonies barracks/guard-tower events (colony defense) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: wiring bounties to colony-specific defense events needs custom KubeJS colony event hooks that don't exist natively; the surface is real but the delivery mechanism is too speculative for a Phase-2 accept — flag for Phase-3 design (provisional motif)

REWORK: none — existing Create/survival connections are solid and correctly scoped. The dossier's note "(economy is a possible 3rd via M-09 … but emergent)" is correct; this pass formally proposes it.

## charta   [anchors: survival (1)]

Power-read: card tables (Crazy Eights, Solitaire, Fun), bar stools, bar shelves, wine/beer glasses — 51 blocks, 54 items. The gameplay surface is: interactive multiplayer card games at a table; tavern/casino furniture. The dossier's 2nd-anchor candidates are (a) economy via card-table gambling/numismatics wagering and (b) Create via create:cutting/pressing on bar furniture (M-04).

Candidate — economy via numismatics gambling/wagering at card tables: Charta has no built-in betting mechanic, so this would require a KubeJS/external event hook listening on a card-game-win event — if the API exposes one. The mod does have a modder API for adding games. Red-team: the link is thematically strong (a casino card game should be playable for money), but the delivery mechanism is uncertain — it depends on Charta's API exposing game-outcome events, which the dossier doesn't confirm. This is a `via: config/event-hook` delivery, not a standard recipe. No motif covers "game-outcome → numismatics" directly; M-09 (luxury good → coin) covers sellable goods but not wager mechanics. This doesn't fit any motif cleanly — no-motif → REJECT-for-review.

Candidate — Create via create:cutting on bar furniture (M-04): stone/wood bar stools and shelves could be crushed/cut back to raw materials + XP nugget. This is the generic deco-crush pass (M-04). Power: everyday/deco (low tier, so one light step is correct). Red-team: does this earn a real second anchor? M-04 is accepted but "decoration is a sanctioned support anchor; only weave as part of a wholesale deco-family pass" (dossier caveat). A Create:cutting recipe on bar stools is valid but extremely thin — it's the same step you'd apply to any wood deco block. Tone: ok. Motif: M-04. Verdict: ACCEPT with caveat — roll into a wholesale deco-family pass rather than as a standalone Charta weave.

Candidate — economy via M-09 luxury sell: wine glasses (`charta:berry_wine_glass`, `charta:cactus_wine_glass`) and mixed drinks from the bar shelf are finished social goods. If a player stocks a bar and sells the drinks/ambiance services via a trading floor stall, that fits M-09. But Charta's glasses don't have actual drink-content recipes of their own (they're decorative deco items, not filled consumables with buffs). The sell-good angle is weak without a consumable item to price. REJECT.

- from: charta:oak_bar_stool, charta:oak_bar_shelf (wood deco) | via: create:cutting or create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: tavern furniture breaks down into planks + sawdust like any worked wood — the Create mill recycles deco
- from: charta card-table game outcomes | via: event-hook → numismatics payout | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif (wager mechanic doesn't map to M-09 or any current motif); delivery requires Charta API to expose win events, unconfirmed; flag for Gate-0 new-motif consideration
- from: charta:berry_wine_glass / cactus_wine_glass (decorative "filled" glasses) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: these are decorative blocks, not consumable drink items with buffs — no real trade value unless a drink mod fills them; leave to Vinery/Beachparty which make real drinks

REWORK: none — survival is the correct anchor; the deco-palette support role is appropriate.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]

Power-read: zero items, zero blocks, zero gameplay content. Pure Kotlin language adapter — shades the runtime so Kotlin-written mods can load. No player-facing surface whatsoever.

- LEAVE — genuine zero-content code library (language runtime adapter). No items, no blocks, no methods. The only correct verdict.

## crash_assistant   [anchors: support/client-utility (1)]

Power-read: zero items, zero blocks. Client-side crash diagnostic GUI. No gameplay content.

- LEAVE — genuine zero-content client utility. No items, no blocks, no methods to route. Correct support anchor; no weave possible or appropriate.

## ribbits   [anchors: survival (1)]

Power-read: 14 blocks (toadstool wood set, giant lilypad, swamp lantern, swamp daisy), 21 items (maraca, spawn eggs, mossy-oak variants), loot=yes. Trade economy runs on Amethyst Shards; five NPC professions (fisherman, gardener, sorcerer, merchant, nitwit). The toadstool/mossy-oak woodset is a genuinely distinct material (swamp aesthetic). Sorcerer grants buffs; merchant sells swamp goods; gardener/fisherman supply food.

Candidate — economy via Amethyst-Shard trade bridge to Numismatics (M-08 / M-21): Ribbit merchants use Amethyst Shards as currency. Amethyst shards are a naturally scarce worldgen mineral (geodes). Bridging amethyst shards → Numismatics coin (or making Ribbit merchants accept/pay in pack coin) plugs this trade node into the pack's economy pillar. Method: KubeJS trade override or numismatics mint. Power: mid (amethyst shards are mid-tier worldgen; not trivial). Tone: excellent — a distinct frog-village economy joining the player economy is a coherent world-building payoff. Red-team: M-08 is "scarce regional metal → Create-processed → coin" and amethyst is a mineral but goes through no processing — it's more M-21 (trade-seam to economy via villager trade, provisional). However the shard→coin path could be routed through a Create step (shard → crushed → polished crystal → coin) to bring it in under M-08 proper. Alternatively, simply accept M-21 provisional for the trade-seam. Given M-21 is "explore only," accept the shard→coin via Create processing step as M-08 (one light processing step between amethyst shard and coin is appropriate for an everyday material).

Candidate — Create via mossy-oak woodset (M-04): toadstool wood / mossy oak planks through create:cutting into slabs/planks (deco family pass). Power: everyday. Tone: ok but generic wood processing. WEAK. REJECT — same generic-wood caveat as mcwwindows; roll into a deco family pass if done at all.

Candidate — magic via ribbits:ribbit_sorcerer (sorcerer grants buffs) and datura/swamp ingredients as magic reagents: the sorcerer's buff effects suggest a magical connection. Toadstool blocks as Occultism ritual ingredient (M-11: organic→magic via spirit_fire/ritual). Mushrooms/fungi are a classical magical reagent. Power: everyday (toadstools are surface-common). Tone: a swamp sorcerer whose toadstools feed dark rituals — coherent. Motif: M-11. ACCEPT.

- from: minecraft:amethyst_shard (Ribbit trade currency) | via: create:pressing or create:milling → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Ribbit merchants trade in amethyst shards — a Create-polished shard becomes the pack coin denomination, the swamp economy joins the server market
- from: ribbits:brown_toadstool / ribbits:red_toadstool / ribbits:toadstool | via: occultism:spirit_fire or :ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: swamp toadstools are a classic witch's ingredient — the occult furnace transmutes them into a foliot-tier essence or ritual component
- from: ribbits mossy-oak planks / toadstool wood | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood deco crush — no distinct identity over any other wood block; roll into a deco-family pass only, not a Ribbits-specific weave

REWORK: none — survival anchor is correct; the dossier's M-08 and M-04 notes match this assessment.

## grimoireofgaia   [anchors: survival (1)]

Power-read: 17 blocks (busts, dolls, deco garden), 179 items (75 biome-modifiers, 4 c:tags: c:nuggets/diamond + c:nuggets/emerald). Loot=yes. Rich catalogue of mob-drop reagents — material nuggets/fragments, shields, artifact rings, dolls/busts. Already receives create:emptying and farmersdelight:cutting as inbound weaves. Tiered hostile mobs: common grunts → mini-bosses (valkyrie/gorgon/minotaur/vampire/sphinx) → bosses. The signature drops are busts (mini-boss) and rings (mid-boss) and rare boss loot.

Candidate — magic via spirit_fire/ritual (M-11 + M-02): Grimoire's mob-drop fragments/nuggets are the ideal feedstock for Occultism rituals. The variety is rich — dryad fragments (organic), harpy feathers (aerial), gorgon scales (earth), vampire essence (undead), etc. Route them through occultism:spirit_fire to mint tier-appropriate essences (foliot/djinni/afrit/marid by mob power). This IS the canonical M-02 + M-11 cross (mob-drop reagent fed into magic transmutation). Power: scales from everyday (common mobs) to endgame (mini-bosses). Tone: folklore monster-girls → eldritch spirit fire is coherent (both mythic-fantasy). Red-team: could it step on reserved reagents? No — it would produce occultism essences from EXTERNAL drops, not repurpose reserved items. ACCEPT.

Candidate — magic via ars_nouveau:imbuement (M-10): same logic — Grimoire drop fragments as imbuement reagents for Ars Nouveau. Power: mid (requires an enchanting apparatus). Tone: monster-girl drops feeding arcane infusion is coherent. Red-team: M-10 says "do not gate basic components behind infusion" — the drops are mid-to-high tier and this isn't a basic component. ACCEPT.

Candidate — economy via bounty boards / numismatics (M-14 + M-02): boss busts (grimoireofgaia:bust_valkyrie, :bust_sphinx, etc.) are decorative but distinct high-tier drops. A bountiful board could post "bring me a sphinx bust" quests paying numismatics coin. Method: bountiful board → numismatics payout. Power: endgame (mini-boss drops). Tone: monster-hunting for bounties is classic. ACCEPT.

Candidate — Create via create:crushing metal nuggets (M-03 / M-02): Grimoire drops c:nuggets/diamond and c:nuggets/emerald among its fragment catalogue. Running mob-drop nuggets through create:crushing to yield processed intermediates is M-03 (ore-doubling variant). The nuance: these aren't ores, they're mob drops — but the method is the same. Power: mid. Tone: ok but less thematically distinct (it's just "crush the nuggets"); the magic route is stronger as a second anchor. REJECT — the Create link via emptying is already present (create:emptying as an existing inbound weave per dossier), so a second Create recipe is redundant without a distinct thematic hook.

- from: grimoireofgaia mob-drop fragments (dryad/harpy/gorgon/vampire/sphinx by tier) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 + M-02 | power: everyday→endgame (scales with mob tier) | tone: ok | verdict: ACCEPT | hook: folklore creature essences transmuted in the occult furnace — the bestiary fuels the spirit-binding web
- from: grimoireofgaia mid-tier drop fragments (harpies, dryads, bee girls) | via: ars_nouveau:imbuement | to: magic | motif: M-10 + M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: monster-girl reagents infused at the enchanting apparatus to refine arcane sources
- from: grimoireofgaia:bust_valkyrie / :bust_sphinx / :bust_gorgon / :bust_minotaur (mini-boss trophy drops) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: the guild posts bounties for mythic monster trophies — bring a sphinx bust, collect coin
- from: grimoireofgaia c:nuggets/diamond + c:nuggets/emerald drops | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: create:emptying is already an inbound weave (the dossier); adding a crushing step is redundant without a distinct thematic purpose; the magic routes are the stronger second anchor

REWORK: existing create:emptying and farmersdelight:cutting inbound weaves are reasonable (somebody already wired those). Survival anchor is correctly scored. The dossier rates magic and economy as STRONG/MED candidates — this pass agrees and elevates them to ACCEPT.

## followersteleporttoo   [anchors: support/QoL (1)]

Power-read: zero items, zero blocks, zero gameplay content. Pure behavior patch — tamed pets teleport with owner.

- LEAVE — genuine zero-content behavior mod. No items, no blocks, no methods. Support/QoL anchor is correct; no weave possible.

## bettermodsbutton   [anchors: support/client-UI (1)]

Power-read: zero items, zero blocks. Client pause-screen UI enhancement.

- LEAVE — genuine zero-content client UI mod. No items, no blocks, no gameplay surface. Support anchor is correct.

## bettermineshafts   [anchors: survival (1)]

Power-read: 0 blocks, 0 items of own registration, loot=no (uses vanilla mineshaft loot). Structure overhaul only — no new loot tables, no new materials, no processing hook.

Red-team: could mineshaft loot be seeded with pack materials? It uses vanilla loot tables (its own loot=no, but vanilla loot is already there). A loot-seed action targeting the vanilla mineshaft chest loot table (rather than a bettermineshafts-specific table) would affect all mineshafts, not just the enhanced ones — that's a vanilla loot-table edit, not a bettermineshafts weave. No coherent hook specific to this mod. It gives richer mineshaft layouts that make the vanilla mineshaft loot more rewarding to reach, but that's an indirect survival benefit, not a weaveable surface.

- LEAVE — no items, loot=no (vanilla loot only), no methods. The structure overhaul enriches exploration but offers no hook for a cross-pillar weave. Survival anchor stands.

## mcwwindows   [anchors: support/decoration (1)]

Power-read: 328 blocks, 326 items — large deco palette of windows, shutters, curtains, mosaic glass, parapets. Vanilla-crafted. Loot=yes (mineshaft/structure chest drops perhaps). No methods of own; no c:tags.

Candidate — Create via create:crushing / create:milling (M-04): stone parapets/arrow-slits crush back to raw stone + xp nugget (lossy, M-04). Mosaic glass panes could mill into glass dust. Power: everyday (low tier deco). Tone: ok — deco recycling. Red-team: this is the generic M-04 deco-crush pass that applies to any stone/glass block; it's thin and only earns a Create anchor as part of a wholesale deco-family pass (same caveat as charta, mcwwindows dossier itself notes this). ACCEPT with caveat — roll into a deco-family pass.

- from: mcwwindows stone parapets / arrow-slits | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: castle battlements and stone shutters grind back to rubble — the Create mill recycles the builder's deco mistakes (roll into deco-family pass)
- from: mcwwindows:*_mosaic_glass / mosaic_glass_pane | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass milling is not established in Create's vanilla behavior (glass → sand is a crafting-table recipe); adding a Create:milling route for colored mosaic glass would be redundant and potentially conflict with existing sand/glass loops; stick to stone parapets only

REWORK: none — decoration support anchor is correct per SYSTEMS.md. The dossier's own WEAK assessment of the Create crush is accurate; this pass formalizes the ACCEPT (contingent on deco-family pass).

## beachparty   [anchors: survival (1)]

Power-read: 61 blocks, 80 items, 3 biome-modifiers (beach biomes), 6 c:tags, loot=yes. Two registered methods: `beachparty:mini_fridge_freezing` and `beachparty:palm_bar_mixing`. The palm_bar_mixing makes cocktails from tropical ingredients (coconut, honey, melon, cocoa → cocktails with buff effects). Mini fridge freezes water→ice. Cocktails grant status buffs (short duration).

Candidate — economy via numismatics (M-09): cocktails are a high-effort consumable (tropical ingredients + Palm Bar processing) with buff effects — a premium product. This is exactly M-09 (luxury good → coin). The tropical theme reinforces rarity — coconuts are beach-biome only; the ingredients require exploration/farming. Power: mid (requires finding a beach palm + several ingredients). Tone: excellent — a coastal bar selling exotic cocktails is the fantasy. Red-team: the buffs are short; are they valuable enough to buy? For a co-op server, a bartender player who stocks the palm bar and sells cocktails to adventurers about to go raid is a compelling trade moment. ACCEPT.

Candidate — survival pull on beachparty:mini_fridge as a Create cooling input (M-12 processing chain): the mini_fridge_freezing method could serve as a cold-processing step in a chain — e.g. a fish chilled in the mini fridge as an intermediate in a Create processing chain (chilled → processed differently). Power: everyday. Red-team: the mini fridge already makes ice freely from water (no fuel); it's basically a free ice source, which means it competes with Create's own cooling methods rather than feeding them. The upstream → Create direction is weak. REJECT.

Candidate — Create via beachparty coconuts / palm wood as a Create-processing feedstock (M-12): palm logs → create:milling into palm pulp or fiber as a distinct organic material, or palm planks → create:cutting for lumber chain. Power: everyday. Tone: ok but palm wood is just another wood type; generic deco-family pass candidate, not a Beachparty-specific weave. REJECT.

- from: beachparty cocktails (coconut_cocktail, honey_cocktail, cocoa_cocktail, melon_cocktail) | via: numismatics sell/price config | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a beach-bar player stocks the palm bar with tropical cocktails and sells them for coin — the coastal economy node feeds the trade pillar
- from: beachparty:mini_fridge_freezing ice output | via: Create cooling chain (upstream) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: mini_fridge makes ice with no fuel cost, competing with Create's own cooling methods; the free-ice aspect undercuts rather than feeds the Create spine; no distinct processing value
- from: beachparty:palm_log / palm_planks | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood type — no distinct identity; roll into deco-family pass only if a wholesale palm-wood deco step is done

REWORK: none — survival anchor is correct. The dossier's M-09 candidate is confirmed as ACCEPT.

## rhino   [anchors: support/library (1)]

Power-read: zero items, zero blocks. The Mozilla Rhino JS engine powering KubeJS.

- LEAVE — genuine zero-content code library (JS engine). No items, no blocks, no methods. Support anchor correct; no weave possible or appropriate.

## cookingforblockheads   [anchors: survival (1)]

Power-read: 140 blocks, 148 items (kitchen appliances in 16 colors: ovens, fridges, sinks, counters, cabinets, cooking tables), loot=yes, 1 registered method (`cookingforblockheads:toaster`). It's a recipe-discovery + batch-cooking convenience layer over all food mods, not a standalone food chain. The toaster recipe (bread → toast) is its only novel processing output.

Candidate — Create via M-05 (native-method gating — kitchen appliances gated on Create parts): the dossier directly notes this as MED. The Oven, Fridge, Sink are kitchen appliances (moderate-complexity builds). Gating them on brass/copper components from Create (e.g. the Oven needing a brass casing, the Fridge needing a Create flywheel or copper ingots in a more elaborate recipe) gives the kitchen a Create anchor without touching food logic. Power: mid (appliances are mid-game builds). Tone: kitchen appliances as mechanically sophisticated gear — the fridge as a refrigeration device needs Create-level engineering. Red-team: is this "gating basics behind complex recipes"? The kitchen appliances are convenience items, not basics — they're the QoL tier above vanilla crafting. A 3× cost with Create parts is proportionate for a color-variant appliance. Motif M-05 correct. ACCEPT.

Candidate — economy via M-09 (cookingforblockheads doesn't produce unique food; it aggregates other mods' food, so the sell-good is the food, not the appliance): WEAK/REJECT — the sell-goods belong to the food mods it aggregates, not to CfB itself.

- from: cookingforblockheads:oven / cookingforblockheads:fridge / cookingforblockheads:sink (flagship kitchen appliances) | via: create:mechanical_crafting or standard crafting with Create-brass/copper parts (M-05) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen needs Create-engineered appliances — the oven's heating coil and the fridge's cooling mechanism are brass-and-copper gear
- from: cookingforblockheads:cooking_table (recipe-discovery hub) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the cooking table is a convenience appliance, not a consumable trade good — sell-goods belong to the food mods it aggregates; economy anchor doesn't flow through CfB's own items

REWORK: none — survival anchor is correctly scored.

## gtmogs   [anchors: survival, economy (2)]

Power-read: 3 blocks (dimension markers), 3 items, loot=yes, 0 c:tags. Zero recipe methods. This mod IS the vein-based ore-gen framework — it disables vanilla ore gen and generates only pack-defined veins. The dossier correctly scores it at 2 anchors (survival via exploration/ore pressure, economy via the scarcity substrate enabling the trade loop). It's a framework, not a content mod.

The dossier concludes "already ≥2 pillars and it is a framework, not a content mod — no weave to author." Checking for any latent angle: could the marker blocks be wired into anything? They're debug/config items placed by mapmakers, not player progression items. No.

Existing connections check: survival (ore exploration/scarcity) and economy (the substrate of regional scarcity → trade) are both accurate and correctly high-level. No mis-costing or arbitrary connections — the anchors are conceptual, not recipe-based, which is correct for a worldgen framework.

- LEAVE — worldgen framework with 3 marker blocks and no player-facing items. The mod enables M-03 and M-08 downstream by defining where scarce ores live, but has no own material surface to route. No weave is needed or appropriate.

OK — connections sound. Both anchors are accurate framework-level anchors. The dossier correctly defers all weave candidates to downstream mods that consume its ore output.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

Power-read: 0 blocks, 17 items (loot=yes — specifically `minecraft:trial_key` and `minecraft:ominous_trial_key`, i.e. vanilla items that spawn in its trial vault chests). Jigsaw worldgen — 100+ structures (taverns, towers, dungeons, illager hideouts, trial chambers). The in-tavern cartographer sells maps to other structures. No items under the `dungeons-and-taverns-v4.4.4` namespace; it registers content under `minecraft:`.

Candidate — economy via loot-seed (M-08 / M-14): the structures have loot tables. Seeding the dungeon/tower chests with pack-relevant drops (Numismatics coin caches, magic reagent fragments, Create gear components) plugs this exploration mod into the economy and production loops. The tavern in particular is a natural location for a Charta card table, Numismatics market stall, or coin cache. Method: `via: loot-seed` (Phase-3 datapack edit to its loot tables). Power: mid (dungeon loot is mid-tier). Tone: treasure chests containing the pack's own economy drops is the natural payoff for exploration — "find dungeon, find wealth." Motif M-08 (coin from scarcity, seeded into loot) or M-14 (bounty/drop economy, seeded via loot). ACCEPT.

Candidate — survival/danger → economy via the cartographer trade (M-21 provisional): the in-tavern cartographer sells structure maps for emeralds. A Numismatics bridge (emerald ↔ coin) would make the map trade join the pack economy. Delivery: villager trade → numismatics (M-21 provisional). Red-team: M-21 is provisional/leans-no; the maintainer is skeptical. Surface the candidate but tag it provisional. ACCEPT (provisional).

- from: dungeons-and-taverns loot tables (dungeon/tower/tavern chests) | via: loot-seed (Phase-3 datapack edit seeding numismatics coin + magic reagents) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: treasure chests in abandoned towers hold coin purses and alchemical fragments — exploration pays in the pack's own currency
- from: dungeons-and-taverns in-tavern cartographer (sells structure maps) | via: villager-trade → numismatics bridge (KubeJS trade override) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: buy the cartographer's map with coin — the exploration trade economy runs on the pack's currency

REWORK: none — survival anchor is correctly scored.

## occultism   [anchors: magic (1)]

Power-read: 164 blocks, 596 items, 6 biome-modifiers, 158 c:tags, loot=yes. Eight registered recipe methods: `occultism:ritual`, `occultism:spirit_fire`, `occultism:crushing`, `occultism:crystallize`, `occultism:miner`, `occultism:spirit_trade`, `occultism:crafting_special_book_binding`, `occultism:crafting_special_repairitem`. One existing inbound weave: `immersiveengineering:sawmill`. The dossier flags three strong 2nd-anchor candidates.

Candidate — economy via occultism:spirit_trade (M-09 / M-18): a summoned merchant spirit (`occultism:miner` spirit / spirit_trade) is a natural otherworld-goods market node. Spirit trade currently produces occult-exclusive goods (iesnium, essences, otherworld materials). If a spirit_trade recipe emits numismatics coin or a sellable exotic good, it plugs the summoning pillar directly into the economy. Method: `occultism:spirit_trade` → economy (M-18: summoned-spirit logistics acquires or trades scarce material). Power: mid-to-high (spirit summoning requires ritual investment). Tone: a demon merchant providing rare goods for coin — coherent (Bartimaeus-style spirit-binding as a trade service). Red-team: spirit_trade is currently an internal magic mechanic; rerouting it through Numismatics requires a KubeJS bridge on spirit_trade output. Does this undercut magic's exclusive-production role? Only if spirit-traded goods bypass the lock — the bridge should add an economy output (coin for exotic goods), not bypass magic production. Motif M-18. ACCEPT.

Candidate — Create via occultism:crushing as Create ore-doubling parallel (M-03): the dossier lists `occultism:crushing` as an ore-doubling method (parallel to create:crushing). Routing ores through either Create or Occultism crushing creates a fork that rewards specialization — a tech player uses Create; a magic player uses Occultism. This is M-03 (ore-doubling) expressed through two parallel routes. The weave is: KubeJS ensuring both create:crushing and occultism:crushing accept the same ore inputs. Power: mid (ore processing is mid-game). Tone: Create machinery and Occultism entity-crushing as equivalent ore routes — the two paths are meant to be non-overlapping exclusive production, but shared ORE-DOUBLING input is not an exclusive — it's a parallel production step, not a locked exclusive. Red-team: does this violate "no single route can make everything"? No — ore-doubling is a commodity step, not an exclusive product. ACCEPT.

Candidate — Create via occultism datura (crop) and create:haunting (M-19): occultism:datura is a tagged crop (`item/crops/datura`). Create's haunting method (soul fire transmutes) is the native Create→magic bridge. Running datura through create:haunting could produce a soul-infused reagent, threading the two systems. Power: everyday (datura is a farmable surface crop). Tone: transmuting a cursed plant in soul fire fits the eldritch theme perfectly. Motif M-19 (soul/haunting seam — native Create→occult bridge). ACCEPT.

Candidate — magic via spirit_fire + foreign drops (M-11): already in the dossier as strong. This is the canonical use — mob drops from grimoireofgaia, naturalist, alexsmobs etc. going through occultism:spirit_fire to produce essences. Power scales with mob tier. Motif M-11. This anchors occultism more deeply to magic production via spirit-transmutation of the whole bestiary. ACCEPT.

Candidate — economy via spirit_trade as a "logistics" node (M-18): the dimensional mineshaft spirit passively mines a void dimension and delivers ore — a magic-powered logistics service (magic acquires scarce material → feeds economy). The dimensional miner is already a magic production/logistics node. Route its ore output into the economy via a trade/bounty mechanism. Power: high (requires advanced ritual investment). Tone: paying a demon to do your mining and selling the output — "of course." ACCEPT (subsumes under M-18).

- from: occultism:spirit_trade (summoned merchant) | via: occultism:spirit_trade → numismatics payout (KubeJS bridge on spirit_trade output) | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: the bound merchant spirit deals in otherworld goods for coin — eldritch commerce joins the pack trade pillar
- from: ore inputs (all pack ores) | via: occultism:crushing (parallel to create:crushing) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: magic players double their ores by sacrificing them to a summoned crusher spirit instead of running a Create mill — the two paths are equivalent, not overlapping
- from: occultism:datura (crop, item/crops/datura) | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: the cursed datura plant transmuted in soul fire yields a soul-touched reagent — Create's haunting furnace bridges to the occult web
- from: grimoireofgaia / alexsmobs / naturalist mob drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday→endgame | tone: ok | verdict: ACCEPT | hook: the spirit fire transmutes any creature essence into an occult intermediate — the entire bestiary feeds the summoning web
- from: occultism dimensional mineshaft ore output | via: occultism:miner → trade/bounty node | to: economy | motif: M-18 | power: high | tone: ok | verdict: ACCEPT | hook: sell the demon-mined ore stream to the market — spirit logistics is the magic pillar's contribution to the distribution network

REWORK: the dossier lists occultism's anchor as magic only (1). The 2nd-anchor candidates are rated STRONG across the board. This pass formally accepts economy (via spirit_trade/M-18) and Create (via crushing/M-03 and datura-haunting/M-19) as second anchors — bringing it to 3+ anchors. No existing connections to flag as arbitrary; the inbound IE:sawmill weave (noted) is an existing authored connection outside this pass's scope. The dossier's "also touches Create (create dep, crushing)" note is elevated here to ACCEPT.

== CHUNK COMPLETE ==
