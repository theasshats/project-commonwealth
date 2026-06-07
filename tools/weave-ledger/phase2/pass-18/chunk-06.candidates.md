# Phase 2 candidates — chunk-06 (pass-18)

## deeperdarker   [anchors: survival (1)]

**Power-read:** deeperdarker is a mid-to-endgame mod — the Otherside dimension is gated behind a Warden
Heart (rare boss drop from one of vanilla's hardest encounters). Its soul/sculk reagents (soul_dust,
soul_crystal, sculk_bone, warden_carapace) are thus endgame-tier: earning them requires reaching and
surviving the Ancient City, killing the Warden, and then exploring the Otherside. Deep multi-step
integration is warranted for those materials. The gloomslate/sculk-stone block families are everyday deco
once you're in the Otherside, suitable for a light one-step connection.

**Existing inbound weaves review:** create:crushing and farmersdelight:cutting already inbound. These are
M-04-style (deco block recycle) and M-12-adjacent (cutting drops). **OK** for what they are, but they don't
give deeperdarker a 2nd anchor pillar — they feed back INTO Create/survival without anchoring magic or
economy.

- from: deeperdarker:soul_dust + deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul-fire consumes Otherside soul reagents to mint spirit essences — the eldritch underworld feeds the summoning web exactly as it should
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's Heart is infused at an arcane apparatus into a high-tier Ars source reagent — a boss-difficulty cost unlocks a flagship magic component
- from: deeperdarker:sculk_bone + deeperdarker:warden_carapace | via: occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Otherside mob drops transmuted through a pentacle ritual into djinni/afrit essence — exploration of the deep dark pays into the summoning pillar
- from: deeperdarker:gloomslate (block family) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate deco crushes back to gravel + XP — the sculk-stone aesthetic integrates cleanly as a lossy recycler (already partially wired)
- from: deeperdarker:soul_dust / soul_crystal | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: these materials are more naturally consumed as magic reagents (M-11/M-10 above); selling them as coin would short-circuit the scarcity that makes the magic route valuable — weak second leg; the magic anchor is the stronger 2nd-pillar choice

REWORK: The existing create:crushing inbound does give a Create touch, but it doesn't yet anchor deeperdarker to Create as a second pillar — it's a one-directional deco recycle. The spirit_fire and imbuement candidates above are the real 2nd-anchor move.

## terralith   [anchors: survival (1)]

**Power-read:** Pure data-pack worldgen overhaul — no items, no blocks, no recipe types, no loot tables
with modded drops (loot=yes but only vanilla loot placement). Its "power" is purely structural: it defines
the terrain canvas that everything else rides on. It cannot be routed through any method.

**Thematic note:** Its real weave is already indirect — Serene Seasons' seasonal pressure, biome-specific
mob spawns from other mods (Grimoire of Gaia's 75 biome-modifiers, rottencreatures biome spawns), and
regional ore scarcity all key off its biomes. This is an emergent connectivity, not a recipe edge.

- LEAVE — pure data-driven worldgen with no items, blocks, recipes, or modded loot drops; nothing to route through any method in the palette. Its role is the terrain canvas underpinning scarcity + exploration pressure, not a connectable content node.

## astikorcartsredux   [anchors: survival (1)]

**Power-read:** Horse-drawn carts and farm implements — a mid-early mod (craftable from wood/iron before
any automation). Items are strictly functional tools (carts, plows, reapers) with no drops or reagents.
No registered recipe types; no loot tables. Its gameplay value is manual agrarian throughput (early-game
bulk harvest before Create automation).

- from: astikorcartsredux:oak_plow / oak_reaper | via: create:item_application or crafting (Create iron sheet as a required component) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the metal plow blade and reaper cutter require Create-pressed iron sheets — the farm implement tier is gated on basic fabrication, tying early agrarian work to the tech spine
- from: astikorcartsredux:oak_supply_cart | via: aeronautics (supply/transfer cart as a ship-deck cargo unit) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the supply cart is a ground vehicle pulled by a horse — it doesn't meaningfully fit as an airship component (M-24 is mechanical drivetrain parts); forcing a cargo-node link would be arbitrary and tonally awkward (horse carts on airships)
- from: astikorcartsredux:* (all carts) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: carts are durable tools, not consumable goods — they're not a natural sell commodity; M-09 is for consumable luxury goods (wine, food). No coherent economy edge.

**Verdict:** One accepted weave (M-05, iron-sheet crafting gate) gives a light Create touch. The 2nd anchor is thin — the dossier's own assessment calls any forced edge contrived. The accepted candidate is the clean one; LEAVE the economy/aeronautics edges.

## xaeroworldmap   [anchors: support (1)]

**Power-read:** Pure client-side map UI — zero server-side effect, no items, no blocks, no recipe types,
no loot. Invisible infrastructure.

- LEAVE — genuine zero-content client map mod; no material surface to route through any method. Support role only.

## betterdungeons   [anchors: survival (1)]

**Power-read:** Structure/loot mod — no items or blocks of its own; its only data hook is its loot tables
(loot=yes). Dungeons are a mid-game exploration encounter (harder than vanilla dungeons, pre-boss tier).
The briefing is explicit: do NOT LEAVE a loot-bearing structure mod just because it has no recipes.

- from: betterdungeons loot tables | via: loot-seed (datapack edit — add bountiful decree targeting these dungeons) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bountiful boards issue Catacombs/Undead Fortress clear-bounties paying numismatics coin — combat pressure converts into currency (combat→economy loop closed)
- from: betterdungeons loot tables | via: loot-seed (seed Ars/Occultism reagent drops into dungeon chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: finding a djinni-binding tome or source gem fragment in a Catacomb chest gates magic progression behind exploration danger — dungeon-clear pressure feeds the magic web
- from: betterdungeons loot tables | via: loot-seed (seed numismatics coin drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: rare Undead Fortress chests contain a few numismatics sprockets — the first coins many players see come from risking these dungeons, priming the economy early

REWORK: No existing weave connections — survival-only anchor is the current state. All three accepted loot-seeds push toward either economy or magic as a 2nd anchor.

## entity_model_features   [anchors: support (1)]

**Power-read:** Client rendering mod — no items, no blocks, no recipe types, no loot. Pure model-override
engine for OptiFine CEM format.

- LEAVE — genuine zero-content client rendering support mod; no material surface to route through any method.

## betteroceanmonuments   [anchors: survival (1)]

**Power-read:** Structure overhaul — no new items/blocks; only loot tables (loot=yes). Ocean monuments
are a mid-game aquatic encounter (Elder Guardian, prismarine grind). The dossier's own assessment says
"LEAVE: no registry items" — but the briefing overrides: loot-bearing structure mods are NOT left.

**Re-evaluation:** The dossier writer pre-concluded LEAVE, but the briefing says a loot-seed IS a real
candidate for structure/dungeon mods. Let me apply that rule.

- from: betteroceanmonuments loot tables | via: loot-seed (seed numismatics coin drops into monument chests) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: conquering the monument's new multi-floor layout pays out in coin — aquatic combat becomes an economy on-ramp
- from: betteroceanmonuments loot tables | via: loot-seed (seed Ars source gem / Occultism reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a hidden chamber in the expanded monument holds a rare arcane fragment — underwater exploration feeds the magic progression

REWORK: The dossier's existing LEAVE recommendation should be revised to the loot-seed candidates above — survival-only was correct before the briefing's structure-mod rule was considered.

## yet_another_config_lib_v3   [anchors: support (1)]

**Power-read:** Pure config-UI library — no items, no blocks, no recipe types, no loot, no gameplay
effects. Zero content surface. Required dependency for other mods' settings screens.

- LEAVE — genuine zero-content config-screen library; no material surface to route through any method. Support role only.

## occultism   [anchors: magic (1)]

**Power-read:** Occultism is a flagship magic pillar — it is one of three magic "producers" in the pack
(alongside Ars Nouveau and Iron's Spellbooks). Its items span everyday (chalk, datura, foliot-tier spirits)
through mid (djinni/afrit bindings, dimensional mineshaft, iesnium) to endgame (marid-tier rituals,
high-tier summoned machines). This is a deep system — integration should scale with tier.

**Existing inbound weaves review:** The dossier lists immersiveengineering:sawmill as an inbound weave.
IE is not a pack dependency; this is likely a dead compat recipe that won't fire in-pack (it uses no
foreign pack methods). The other noted weave candidates in the dossier are all outbound proposals.
The dossier already has the correct 3 candidate areas: economy, organic→magic, and Create↔magic.

- from: occultism:spirit_trade (summoned trader spirit) | via: occultism:spirit_trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: binding a Djinni as a merchant spirit is a player-visible "otherworld goods market" — demon labor converts into trade value, pulling the summoning pillar into the economy loop
- from: occultism:dimensional_mineshaft (void-dimension ore logistics) | via: occultism:miner | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's miner spirits acquire ores from the void and deliver them to a storage controller — magic as an acquisition/logistics provider that bypasses physical distance, a genuine rival to aeronautics logistics routes
- from: foreign mob/boss drops (biome mob drops, Grimoire of Gaia, rottencreatures) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burning foreign drops in spirit fire transmutes them to essences — the entire bestiary becomes feedstock for the summoning web
- from: foreign drops | via: occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: pentacle rituals consume curated boss/mob drops as reagent sacrifices — high-tier magic costs real danger-content, not just grind
- from: occultism:iesnium_ingot | via: create:crushing (ore doubling) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: iesnium ore crushed in a Create mill yields a bonus nugget — the occult metal integrates cleanly into the Create ore-doubling chain
- from: occultism:silver_ingot (real silver, c:ingots/silver) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: real occultism silver crushed for a bonus — distinguishes it cleanly from galosphere's palladium; the silver/silver confusion is resolved at the Create spine level
- from: foreign materials (ores, gems) | via: occultism:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: occultism:crushing is a parallel ore-doubler but it competes with create:crushing rather than feeding it; routing foreign ores exclusively through occultism would fragment the Create web. Better to use spirit_fire/ritual for the magic→Create bridge, not a competing ore-doubler.

OK — connections sound on the magic anchor. The IE sawmill inbound is likely dead compat (IE not in pack) — flag for cleanup rather than REWORK.
REWORK: The IE sawmill inbound recipe (immersiveengineering:sawmill) should be audited — IE is not in the pack's dependency tree; if it fires only on IE install it's harmless dead weight, but if it overrides a base recipe it could cause confusion. Flag for KubeJS cleanup pass.

## alcohol_industry   [anchors: Create, survival (2)]

**Power-read:** Already 2-anchor (Create + survival). Items are everyday consumables — bottled liquors
with short-duration status effects. The Alcohol Boiler + temperature_controller are mid-tier Create
machines (require brass-level parts). Liquors (beer/vodka/whiskey/tequila) are by nature tradeable luxury
consumables — the M-09 economy link is well-motivated.

- from: alcohol_industry:beer / vodka / whiskey / tequila | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: bottled spirits are a natural tavern trade good — a Create distillery run pays out in sellable luxuries, closing the production→economy loop (the distillery player sells to everyone)
- from: alcohol_industry:alcohol_base (fluid) | via: ars_nouveau:imbuement (alchemical alcohol as solvent catalyst) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: using industrial fermentation output as an arcane infusion catalyst is tonally strained — Ars Nouveau's aesthetic is natural-arcane, not industrial chemistry. The Create→magic bridge has better, more coherent routes (occultengineering, haunting). Alcohol and arcane infusion don't share a player-legible logic.
- from: alcohol_industry:* liquors | via: bountiful decree (bounty requesting a quantity of spirits) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Bountiful board can issue bounties for craft-brewed spirits — the distillery's output becomes a renewable coin source via the bounty economy, without needing a direct Numismatics recipe

OK — existing Create + survival anchors are well-placed. The accepted economy candidates give a genuine 3rd-pillar leg without straining theme.

## supplementaries   [anchors: Create, survival (2)]

**Power-read:** Already deeply woven (2 anchors, multiple inbound Create methods). The dossier correctly
identifies it as a connector mod by nature, with create:haunting/mixing/splashing and farmersdelight:cutting
already inbound. Flax crop, ash, soap, faucet/jar are the key join keys. The dossier's own assessment says
"leave, already ≥2 pillars."

**Re-check for any missed connection:** The supplementaries:safe and supplementaries:jars could support
shop/vault infrastructure for the economy pillar — but this is decorative deployment, not a recipe weave.
The flag/awning aesthetic is a natural shop-front motif (it dresses the Trading Floor physically), but
there's no recipe edge to accept. The supplementaries:weathered_map recipe is interesting — it's a map-aging
method, and a weathered trade-route map could theoretically be a Numismatics-adjacent item — but no
coherent motif covers this without being contrived.

OK — connections sound. Supplementaries is already multi-anchor and deeply connected. No additional weave needed; any forced edge would be architectural noise.

## bountiful   [anchors: economy (1)]

**Power-read:** Bountiful is a mid-tier mod — its boards appear in villages (early-mid game) and its
reward/objective tiers scale with Decree curation. The bounty board itself is just a block + contract
items; the real power is its data-configurable objective/reward pools. This is the canonical "economy
loop faucet" — it converts any mod's goods into coin.

- from: bountiful objectives (modded items: farm crops, mob drops, processed goods) | via: numismatics payout (bounty reward = numismatics coin) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: turning in a bounty pays numismatics sprockets/cogs instead of gold — the board becomes the main early coin faucet, and players engage with farming/combat to fill it
- from: bountiful objectives (Create-processed goods, e.g. iron sheets, brass ingots) | via: bountiful decree (objective pool targeting Create outputs) | to: create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a "Blacksmith's Decree" board requests Create-fabricated materials — the tech spine gets a pull demand from the economy, exactly how the loop should read
- from: bountiful objectives (magic reagents — source gems, spirit essences, arcane dusts) | via: bountiful decree (objective pool targeting magic outputs) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a "Mage's Decree" board requests Ars/Occultism reagents — magic production gets a coin-denominated demand signal, making the magic specialist economically viable
- from: bountiful objectives (farm/hunt targets per Serene Season availability) | via: bountiful decree (seasonal objective pool) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a seasonally-rotated Decree board requests crops that are only harvestable in-season — bounties become a seasonal economy driver, connecting scarcity→pressure→demand in one data config

OK — all accepted candidates are config/data-delivery (no recipe authoring), clean fits for the economy pillar.

## kiwi   [anchors: support (1)]

**Power-read:** Pure modding library — no items, no blocks, no recipe types, no gameplay. Required
dependency for Snownee mods.

- LEAVE — genuine zero-content library; no material surface. Support role only.

## owo   [anchors: support (1)]

**Power-read:** Developer infrastructure library — GUI/config/networking framework for dependent mods.
No items, no blocks, no gameplay.

- LEAVE — genuine zero-content code library; no material surface. Support role only.

## byzantine   [anchors: survival (1)]

**Power-read:** Pure MineColonies schematic/style pack — no items, no blocks of its own; the "product"
is architectural style options for the colony Builder. It's a flavor add-on for an already-anchored system
(MineColonies is a cross-cutting production route in the SYSTEMS model). Byzantine itself has no
independent material surface — its weave IS MineColonies.

**Re-check:** Could Byzantine's materials (Domum Ornamentum blocks that the Builder requests) link to
Create? The Builder requests vanilla or DO materials — those are standard construction goods, not
process-chain outputs. Forcing a "Create must supply DO blocks" rule would be contrived and would conflict
with the colony route being the *cheaper* path to basics. That's exactly backwards.

- LEAVE — pure schematic style-pack for MineColonies; no independent material surface. Its role is curated architectural flavor for the colony pillar, which is itself a cross-cutting production route. No coherent 2nd-pillar weave can be authored without forcing an arbitrary edge.

## almostunified   [anchors: support (1)]

**Power-read:** Recipe/tag unification engine — no items, no blocks, no recipe types, no loot. It operates
on the recipe graph itself, not on game content. Its importance is structural (it makes the web coherent by
merging duplicate material clusters), but it has no content surface.

**Special note:** The CLAUDE.md / dossier both flag the galosphere silver gotcha — almostunified's
priority_override on c:ingots/silver must NOT map galosphere:*silver* → silver (it's palladium). This is
a config constraint on almostunified, not a weave candidate, but it's worth recording.

- LEAVE — recipe-graph plumbing tool with no content surface; it is the connectivity mechanism itself, not a node in the web. Support role.

## rottencreatures   [anchors: survival (1)]

**Power-read:** Zombie-variant mob mod — biome- and event-gated spawns, drops themed loot. Items are
mob-drop tier: frozen_rotten_flesh, magma_rotten_flesh, corrupted_wart, mob heads, treasure_chest.
These are roughly equivalent in rarity to vanilla mob drops from uncommon biomes/events (cold biomes for
Frostbitten, thunderstorms for the Immortal). Mid-early power tier — they show up once players explore
diverse biomes. The treasure_chest from Dead Beard (rare beach pirate captain) is a light boss analog.

- from: rottencreatures:frozen_rotten_flesh + corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burning frozen/corrupted mob flesh in spirit fire yields foliot essence — killing dangerous biome variants pays into the summoning web (the world's danger feeds the magic pillar)
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: magma-tainted flesh from Swampy zombies is a natural spirit-fire reagent — themed transmutation that makes biome mob variety worthwhile to farm
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart is an arcane catalyst for imbuing a source reagent — the toxic, otherworldly material pairs naturally with Ars Nouveau's nature-magic infusion
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: passing frozen flesh through create's soul-fire haunting yields a spectral byproduct — Create's haunting process naturally works on cold-death materials, threading the hostile-mob ecology into the Create spine
- from: rottencreatures:treasure_chest (Dead Beard drop) + mob heads | via: bountiful decree (kill-bounty objective) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bountiful boards issue dead_beard / immortal kill-bounties paying coin — the rare pirate captain and storm-lich become economy-relevant targets (combat→economy)
- from: rottencreatures:frozen_rotten_flesh / magma_rotten_flesh | via: create:crushing | to: create | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: crushing flesh is tonally wrong for Create (Create's crusher is a stone/ore machine, not a butchery tool); spirit_fire (occultism) and haunting are far more coherent. Accepted haunting candidate covers the Create touch adequately.

OK — no existing weave connections. Accepted candidates spread across magic (3) + Create (1) + economy (1), giving a genuine multi-anchor lift from a 1-anchor survival mod.

## better_lib   [anchors: support (1)]

**Power-read:** Small shared-systems library — config handling + first-join/live messages. No player
content whatsoever.

- LEAVE — genuine zero-content support library; no material surface. Support role only.

## grimoireofgaia   [anchors: survival (1)]

**Power-read:** Large mythic bestiary mod — dozens of tiered humanoid-creature mobs with a rich drop
catalogue. Power spans mid (common Tier 1 mobs: harpies, dryads, slimes) through endgame (Tier 3+
mini-bosses: valkyrie, gorgon, sphinx, minotaur, vampire; rare busts, artifact rings). The item catalogue
is large: nugget/fragment drops (c:nuggets/diamond + c:nuggets/emerald), bone_shield, artifact rings (speed/
jump/haste), bust decorations, dolls, pearl_block. Already has create:emptying + farmersdelight:cutting
inbound weaves.

**Existing inbound weaves review:**
- create:emptying: likely empties a bottle of something (one of Gaia's liquid drops) into a container — a light weave. **OK.**
- farmersdelight:cutting: processes a Gaia drop (probably a meat/ingredient from a creature) — **OK**, survival-food loop.

- from: grimoireofgaia nugget/fragment drops (c:nuggets/diamond, c:nuggets/emerald, other fragment types) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: grinding through the Gaia bestiary yields fragments that burn in spirit fire to produce djinni/marid essences — the mythic-creature ecology is the feedstock the summoning web hungers for
- from: grimoireofgaia boss drops (valkyrie/gorgon/sphinx/vampire busts as reagents) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Valkyrie Bust is infused at the arcane apparatus into a high-tier Ars catalyst — killing the mini-boss earns a magic keystone, making the bestiary an endgame magic gate (M-10 anti-basics rule: bust is clearly endgame, not a basic component)
- from: grimoireofgaia:ring_of_haste / ring_of_speed | via: create_new_age:energising | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: charging a Gaia artifact ring at a Create New Age energiser gives it a boost — the FE tier unlocks the artifact's full potential, threading the mythic gear into the electric tier
- from: grimoireofgaia boss busts / rings | via: bountiful decree (kill-bounty paying numismatics coin) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: Bountiful issues Gaia mini-boss bounties paying sprockets/crowns — taking on the hardest mythic creatures earns the most coin, making high-tier combat an economic specialization
- from: grimoireofgaia fragment drops | via: create:crushing | to: create | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the dossier already has create:emptying inbound which is a light touch; adding crushing for fragments would need thematic grounding (what does a Create crusher do to a bone/gem fragment that spirit_fire doesn't do better?). The occultism and Ars routes are far more coherent for these drops. Avoid redundancy.

REWORK: create:emptying (existing inbound) — the dossier says "a drop is bottled via create:emptying" but that's inverted: create:emptying empties a fluid FROM an item. More likely Gaia has a bottle/fluid item and Create empties its fluid out. Worth verifying that the existing recipe makes logical sense (empties what into what?); if the recipe is unclear or exists only from Gaia's own registered recipes, it may be dead or trivially decorative. Flag for audit, not correction.

## beachparty   [anchors: survival (1)]

**Power-read:** Tropical beach decoration mod with two food/drink methods (palm_bar_mixing,
mini_fridge_freezing). Items are everyday tier — coconuts are found on beach biome palms, cocktails are
made from basic ingredients (honey, melon, cocoa), palm lumber is standard. Nothing is rare or gated.
The ice output from the mini fridge is the mod's most interesting inter-mod join key (cheap bulk ice
without a cold biome).

- from: beachparty:coconut_cocktail / cocoa_cocktail / honey_cocktail / melon_cocktail | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: cocktails are the quintessential luxury trade good — a coastal beachparty player sells exotic drinks to the server; tropical beverages at the Trading Floor are exactly the scarcity-driven luxury the economy pillar wants
- from: beachparty:mini_fridge (ice output) | via: create:mixing (as a cold/ice input for Create cooling recipes) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mini Fridge's ice output feeds Create mixing recipes that need cold material (e.g. cooling a mixed compound) — a beach-biome block becomes a low-tech ice supplier for the Create spine
- from: beachparty cocktails | via: bountiful decree (bounty requesting tropical drinks) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Bountiful board in a coastal village requests cocktails as a luxury bounty — tropical production tied to coin demand, the diet-variety economy loop (drink a variety → collect coin)
- from: beachparty:coconut (open coconut) | via: ars_nouveau:crush | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a coconut in an arcane crusher to get a magic ingredient is tonally forced — coconuts are mundane food, not arcane materials. Ars Nouveau's crush is for gem/material refinement, not tropical fruit. Theme clash.
- from: beachparty:palm_planks (wood family) | via: create:cutting (sawmill) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: every wood type can be cut in a Create sawmill — this is not a weave, it's a consequence of the existing generic wood-cutting recipe. No new connection authored; it already works by default. Not worth listing as a candidate.

OK — no existing weave connections. Accepted candidates give 2 new anchors: economy (M-09 + M-14) and Create (M-12 ice-feed). Survival-to-economy and survival-to-Create are clean loop advances.

== CHUNK COMPLETE ==
