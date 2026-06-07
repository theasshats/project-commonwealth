# Phase 2 candidates — chunk-08

## immersivearmorhud   [anchors: client-only UI / support (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot table, no recipe-types, no material surface. Pure client HUD overlay (armor-durability display). Sanctioned support role; no coherent weave possible.

## nochatreports   [anchors: support / privacy-networking (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types, no material. Intercepts chat-signing protocol at the network layer. Sanctioned support role; nothing to weave.

## immersive_paintings   [anchors: decoration palette / support (1)]

Power-read: 4 items (painting, glow_painting, graffiti, glow_graffiti) — all decorative canvas blocks; no c:tags, no loot. The join surface is the painting *item itself* (crafted from vanilla mats — stick/wool/dye). No processing method of its own.

Method-pull candidates:
- Could a painting frame craft require a Create-pressed iron frame? Thematic: "an art press." But pressing a painting frame is busywork with no loop benefit — it adds a step to a decoration item that gives the survival/economy loop nothing back. Red-team: a player who wants to hang art would find this friction, not depth.
- Could glow_painting require a magic-infusion step (M-10) for the glow effect? The glow property is cosmetic; gating decoration behind arcane infusion would be M-10's "do not gate basic components" anti-rule.
- Loot-seed: paintings/graffiti seeded into structure loot (CTOV villages, underground villages) as found art? Architecturally plausible but the mod's items are player-created images, not fixed art tiles — the mechanic doesn't produce a stable "item" to drop.

- from: immersive_paintings:painting (frame) | via: recipe | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: pressing a painting frame is friction on a decoration item; zero loop benefit; no motif fits (M-04 recycles deco back to raw, not forward); busywork
- from: immersive_paintings:glow_painting | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: M-10 anti-rule — do not gate basic/everyday components behind infusion; glow paintings are a decoration item, gating them would be punitive
- REWORK: existing "decoration palette / support" anchor is correct; the dossier's own assessment (LEAVE) is sound. No connections to evaluate.
- OK — connections sound (1-anchor decoration mod; no forced 2nd anchor warranted; the dossier correctly LEAVE'd it).

## create_integrated_farming   [anchors: create, survival (2)]

Power-read: roost blocks (chicken/duck/goose variants) passively produce eggs, feathers, raw poultry; fishing nets produce fish/aquatic drops. No registered recipe-types; a passive-production extension of Create + FarmersDelight. Has loot=yes (drop table). Anchors: create + survival — already at the target floor of 2.

Existing connections review:
- Create anchor: roosts are contraption-compatible blocks operated by Create Mechanical Arms; chicken/duck/goose products feed FarmersDelight cooking chains. Sound — the production edge is real and jar-grounded (deps: create, farmersdelight).
- Survival anchor: automated animal-product supply directly addresses the diet/pressure loop (poultry = protein group in AppleSeed Diet). Sound.
- Dossier candidate (economy / M-09 / WEAK): steady egg/feather/fish bulk as a sell-good. Flagged WEAK by dossier; let's evaluate properly.

Method-pull — looking for a 3rd/stronger weave:
- M-12 (processing-chain pull): Roost eggs → FarmersDelight cutting / ExtraDelight mixing bowl for mayonnaise / custard — these are intermediates that feed *other* recipes (pastries, baked goods). This is exactly M-12's "useful intermediate" case. Power: everyday (eggs are common Roost output). Tone: coherent — automated kitchen feeding a recipe chain.
- M-09 (luxury good → coin): Goose eggs or specialty duck products as a premium sell-good. Everyday items; the numismatics sell is possible but the "luxury" label doesn't fit a commodity. Too weak as a standalone — the economy edge is cleaner through M-12 (processed goods → sell).
- M-13/aeronautics: Lava Fishing Net produces fish from lava biomes — could exotic lava-fish be a fuel additive or a Create method input? Thematic stretch; no clean motif.

- from: roost egg output | via: farmersdelight:cutting / extradelight:mixing_bowl | to: survival (food-processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the roost's egg stream flows straight into an automated kitchen — custard and mayo without a henhouse patrol
- from: roost egg / goose egg | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: poultry eggs are commodity goods, not luxury items — M-09 fits high-effort consumables; a bulk egg sell undercuts the currency weight the motif is designed for; M-12 processing into a finished food is the stronger economy connection
- REWORK: dossier's M-09 economy candidate is correctly labelled WEAK; the stronger candidate is M-12 routed through FarmersDelight/ExtraDelight as a processing-chain pull. The create+survival anchors are sound and well-stated.

## cubes_without_borders   [anchors: support / client QoL (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types. Adds a single Video Settings option (borderless fullscreen). Sanctioned support role; nothing to weave.

## resourcefullib   [anchors: support (1)]

LEAVE — pure API/library: no items, no blocks, no loot, no recipe-types, no gameplay content. Required transitively by Resourceful-family dependents. Sanctioned support role; no coherent weave possible.

## brazil_legends   [anchors: survival (1)]

Power-read: 47 items, 5 blocks (several are block-form amber pearls used as deco), loot=yes, 4 biome-modifiers. Key drops: `capelobo_claw`, `big_tongue`, `amber_shard`, `amber_pearl` (3 sizes), `bottle_with_saci`. Themed weapons (bloodmoon_sickle, spell books). Drops from folklore mobs — mid-tier combat rewards, not boss-level. No registered recipe-types; consumes only vanilla crafting.

Mob power-tier: Capelobo is a named cryptid (mid-difficulty — biome-specific, not trivially farmable but not a true boss). Saci-in-a-bottle is an interaction item (a trickster spirit bottled). Amber shards/pearls are forage/drop finds. These are mid-tier organic drops — depth of integration should be one step (routing into an existing method), not a deep chain.

Method-pull:
1. capelobo_claw / big_tongue → M-02 mob-drop reagent sink via occultism:spirit_fire → a spirit-intermediate or occult essence. The "big tongue" and "claw" map cleanly to a spirit transmutation (visceral body-part → soul material). Tone: thematically coherent — Occultism is a necromantic/spirit framework; folklore body-parts are a natural reagent. No reserved-reagent conflict. Power: mid (not trivially farmable; biome-locked mob). Red-team: could feel gratuitous (lore clash with Brazilian folklore vs. European occultism)? Counter: Occultism's ritual-sacrifice framework is setting-agnostic; body-part drops into a spirit fire is its exact idiom. Survives.

2. amber_shard / amber_pearl → M-10 arcane infusion pull via ars_nouveau:imbuement. Amber is a preserved/ancient material — thematically fits as an Ars infusion catalyst or arcane crystalline input. Power: everyday-to-mid (common-ish drop from biome-specific mob). Red-team: is amber already used elsewhere? No reserved-reagent conflict in the ledger. But M-10 anti-rule: don't gate basic components behind infusion. Amber is a *drop input* here, not the output being gated — the infusion consumes amber to produce an arcane intermediate. That's the correct direction for M-10. Survives.

3. bottle_with_saci → M-11 ritual/transmutation sink via occultism:ritual. A bottled trickster spirit is a pitch-perfect ritual ingredient — sacrificing or invoking a captured spirit fits Occultism's ritual summoning grammar. Power: mid (requires capturing a Saci). Tone: strong — a bottled spirit as a ritual reagent is "of course." Survives.

4. amber_shard → M-09 economy (luxury curio sell via numismatics). Amber is a physical object with intrinsic value feel (like a gemstone). But it's a mob drop from a biome-specific mob, not a "high-effort consumable" in the M-09 sense. The economy edge is cleaner as M-10 (processable into magic goods that then sell). Reject as standalone — the M-10 path is stronger.

5. brazil_legends drops → M-14 bounty board. Combat drops turned into coin via a bounty payout. Tone: fine but weak on its own — the stronger route is magic-reagent use (M-02/M-11) giving the drops meaning first, then economy as a downstream.

- from: brazil_legends:capelobo_claw / big_tongue | via: occultism:spirit_fire | to: magic | motif: M-02 + M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a claw torn from the cryptid and a giant tongue still steaming — Occultism's spirit fire sees exactly the kind of raw soul-adjacent material it craves
- from: brazil_legends:amber_shard / amber_pearl | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient amber — trapped light from another age — is drawn into an imbuement altar and releases its arcane charge; a folklore fossil becomes an Ars reagent
- from: brazil_legends:bottle_with_saci | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a bottled trickster spirit is exactly what an Occultism ritual needs — invoke it and the Saci's chaotic essence fuels the working
- from: brazil_legends:amber_shard | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber is a combat drop, not a high-effort produced consumable; M-09 fits processed goods (wine, cheese); the M-10 magic-reagent route is the stronger connection and provides economy value indirectly through selling processed arcana
- from: brazil_legends drops | via: bountiful board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: functional but weaker than M-02/M-11; the loop is better served by giving the drops a magic use first, then letting economy naturally follow from trading magic goods; M-14 as standalone makes Brazil Legends just another kill-for-coin mod

## snowyspirit   [anchors: survival (1)]

Power-read: 46 blocks, 65 items, 2 biome-modifiers, 16 c:tags (c:crops/ginger, c:seeds/ginger, c:foods/candy, c:foods/cookie, c:foods/vegetable), loot=yes. Ginger is a farmable wild crop (biome-found in sparse jungle). Key items: `snowyspirit:ginger`, `snowyspirit:gingerbread_cookie`, `snowyspirit:eggnog`, `snowyspirit:candy_cane`, plus the sled (winter transport). Gingerbread blocks form a build palette. The sled carries chests/sacks over snow.

Seasonal driver: ginger is a real-world cold-climate crop. Serene Seasons as the seasonal driver is already flagged as a priority lever (SYSTEMS.md: M-16 "want more of these"). Ginger should be winter-growth or fall-harvest — a seasonal crop pressuring the food/processing chain.

Power-tier of ginger: everyday (wild-found + farmable). M-16 requires season-gating, which is appropriate for flavor without being punishing since ginger persists in crates/inventory across seasons.

Method-pull:
1. snowyspirit:ginger (c:crops/ginger) → M-12 processing-chain pull via create:milling → ginger powder → used in FarmersDelight/ExtraDelight recipes as a spice intermediate. Mills crops to flour/powder is exactly Create's idiom (wheat → flour). Power: everyday. Tone: coherent — a spice mill is how ginger enters cooking chains in real kitchens. Red-team: is milling ginger a second step that adds friction? At everyday tier the cost is one mill step, which is correct per the cost model. Survives.

2. snowyspirit:ginger (c:crops/ginger, c:foods/vegetable tag) → M-16 seasonal reagent. Ginger only grows/ripens in Serene Seasons autumn/winter. Use it as a season-gated input to a Create/magic method — e.g. a Create:mixing recipe for a warming tonic that requires fresh ginger (seasonal window creates scarcity). Power: everyday-to-mid when seasonal. Tone: strong — winter ginger is exactly the kind of "you need to stock up before spring" design that M-16 is made for. Survives.

3. snowyspirit:eggnog (c:foods/cookie tag?) → M-09 luxury good → coin. Eggnog is a seasonal high-effort food (requires eggs + sugar + milk + ginger chain). Thematic fit: seasonal luxury goods are premium sell goods in a winter market. Power: mid (requires multiple production steps). Tone: ok — a winter market stall selling holiday treats is natural. Survives.

4. sled → aeronautics/economy logistics. Sleds carry chests over snow and move faster downhill. But they don't interface with Create Aeronautics physics ships — they're terrestrial terrain vehicles. The connection would be "sled as a low-tier ground transport before you have an airship." Thematic, but there's no method or recipe edge — it's purely a flavor observation, not a weave candidate. Reject.

5. snowyspirit:gingerbread (block palette) → M-04 Create recycles deco. Gingerbread blocks are a decorative material; crushing them back to ginger/sugar waste would be M-04. Power: everyday deco. Tone: fine but trivial — the value is in the build, not the recycle. Reject as low priority (not worth an authoring step for a minor deco block).

- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: toss ginger root into the millstone and it comes out as spice powder — plug it straight into the automated kitchen's herb rack
- from: snowyspirit:ginger (c:crops/ginger) | via: season-gated input (Serene Seasons autumn/winter harvest window) → create:mixing warming tonic recipe | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: ginger only ripens in the cold months — stock the root cellar before the thaw or your winter tonic recipe stalls until next autumn
- from: snowyspirit:eggnog | via: numismatics sell (seasonal trade good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a flask of fresh eggnog is worth real coin at a winter market — multi-step to brew, gone fast when seasons change
- from: snowyspirit sled | via: aeronautics logistics framing | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: sleds are terrestrial snow-gliders with no recipe/method interface to Create Aeronautics; the connection is flavor observation, not a weave; no motif fits
- from: snowyspirit:gingerbread blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: technically applies (deco material crushes to ingredients) but the value is too low to warrant authoring — gingerbread blocks don't produce any meaningful economy/loop output; M-04 is strongest for metal/stone deco; a baked-good recycle is a low-signal edge
- REWORK: existing single survival anchor is accurate; the dossier's M-16 candidate is correct and strong — this chunk confirms it. M-12 milling candidate from dossier also confirmed. Economy candidate (M-09 eggnog) also confirmed as viable. Three clean accepts: milling, seasonal-gating, and a luxury sell. No existing connections to rework (mod was single-anchor, no prior weaves to critique).

## lithium   [anchors: support / performance (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types. Server/world-tick optimizer. Sanctioned support role; no coherent weave possible.

## aeronautics   [anchors: aeronautics (1) + Create (de-facto, jar-proven)]

Power-read: 141 blocks, 18 items, loot=yes. Jar-grounded content: levitite/levitite_blend (zinc+endstone, the lift material), propeller bearing, gyroscopic propeller bearing, hot-air burner+envelopes, Physics Assembler, portable engine, gyroscopic mechanism, rope coupling, docking connector, tires (small/large/monstrous). All core construction paths route through create:mixing, create:sequenced_assembly, create:deploying, create:crushing, create:mechanical_crafting — Create is a confirmed structural 2nd anchor. Dossier flags several outbound weave candidates; evaluate each.

Existing connections review:
- aeronautics anchor: the pillar spine — correct, unambiguous.
- Create de-facto anchor: jar-proven (zinc/brass/andesite_alloy/sequenced_assembly all run through Create) — sound, should be formally registered.
- Dossier candidates to evaluate:

1. levitite → economy (M-08/M-09): levitite_blend = zinc+endstone+water via create:mixing → in-world crystallization → levitite. Zinc is scarcity-gated; endstone requires a Nether→End progression step. The mass production of levitite (every ship needs it) makes whoever controls zinc/endstone supply a key economic actor. M-08 (coin from processed scarcity) applies if levitite or levitite blend is mintable. More precisely: a levitite production specialist sells levitite to builders → M-09 (luxury/high-effort good → coin). Power: mid-to-endgame (zinc+endstone supply chain). Tone: strong — "who supplies the fleet's lift?" is exactly the economy question this creates. Survives.

2. levitite crystallization → magic (M-10/M-22): the in-world crystallization step (blend → levitite) is code-only (not in recipe JSON). Adding a KubeJS gate requiring an Ars/Occultism catalyst adjacent to the crystallization block creates a magic↔aeronautics seam. Power: mid (this is in the levitite production pipeline, not a trivial everyday step). Tone: the in-world crystallization already feels "magical" — a catalyst requirement would reinforce this. Red-team: adds friction to the aeronautics production chain; if levitite is already zinc+endstone gated, a magic catalyst on top could be over-gating. The M-22 variant (requires a specific moon phase for the crystallization) is softer — doesn't require a separate magic-mod item, just a timing gate. Either variant is valid; M-22 may be better to avoid double-gating. Survives (noting tension).

3. hot-air burner → M-13 fuel extension: the burner already burns furnace fuel; extending its fuel tag to accept TFMG diesel (tag JSON edit) creates a fuel supply line (aeronautics + TFMG). Power: mid (an optimization path for players with TFMG). Tone: coherent — industrial fuel powering industrial ships. No reserved-reagent conflict. Survives.

4. rope/docking connector → economy logistics: docking stations at Numismatics trading-post settlements give airships a physical cargo-delivery role. Not a recipe edge — a config/lore tie. Power: mid-to-endgame (airship ownership). Tone: strong — ships that dock at economy nodes is the aeronautics arm of the economy. M-13 adjacent or free-standing as an economy-logistics observation. Note: this is more a design intent than a Phase 3 action; flagged as a design note.

5. borehead bearing → economy: most integrated Create use; extracted ore feeds the economy via M-08. Power: endgame (boreheads are flying drills). Tone: coherent — aerial extraction → mint = closing the loop. Survives.

- from: aeronautics:levitite (via levitite_blend create:mixing → crystallization) | via: numismatics sell (levitite as traded bulk good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: every ship needs levitite and only the zinc-rich region can mass-produce it — the aeronautics fleet runs on someone's economy, and that someone sells lift
- from: aeronautics levitite crystallization step (in-world, code-only) | via: M-22 lunar-event gating (crystallization only completes during a specific moon phase — KubeJS) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite doesn't just crystallize — it needs the right sky to set; the blend sits inert until the moon's pull aligns, which is why the old sky-sailors watched the stars
- from: aeronautics:adjustable_burner fuel | via: tag-JSON (add TFMG diesel to burner fuel tag) | to: create (TFMG sub-pillar) | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: refined diesel burns hotter than charcoal — an industrial fuel supply feeds the fleet's hot-air envelope; the fuel line runs from TFMG distillery to flight deck
- from: aeronautics borehead bearing | via: create:ore-extraction (aerial mining → ore feeds economy pipeline) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: a flying drill contraption is the most Create way to feed the mint — aerial extraction pays for the expedition
- from: aeronautics:levitite crystallization | via: ars_nouveau:imbuement catalyst (magic catalyst adjacent to crystal) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-22 (lunar gate) is the cleaner seam — it doesn't add a hard magic-mod dependency to levitite production; M-10 here would make aeronautics require magic investment before a player can even fly, which over-gates the pillar; the moon-phase gate (M-22) is softer and more evocative
- from: aeronautics rope/docking connector | via: design-intent (dock at Numismatics trading posts) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no recipe-type method to route through; it's a design/layout observation, not a Phase 3 action; no motif applies (M-13 is fuel-specific); flag as design note only — the economy-logistics role of aeronautics is already the pillar framing
- REWORK: the dossier has a git merge conflict (<<<< HEAD / ======= / >>>>>) in the anchors section — the two halves are substantively the same (aeronautics + Create 2nd). No content conflict. The formal Create 2nd anchor should be registered. Existing inbound connections (M-23 structural alloy, M-24 mechanical component, M-06 Physics Assembler keystone) listed as "INBOUND, already strong" in dossier are sound — no REWORK needed on those. The merge artifact should be cleaned (not a Phase 2 task but flag for housekeeping).

## particlerain   [anchors: support / client atmosphere (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types. Client-side particle weather rendering (rain, snow, sandstorm visual effects). Sanctioned support role; no coherent weave possible.

## dataanchor   [anchors: support / library (1)]

LEAVE — genuine zero-content library: no items, no blocks, no loot, no recipe-types. Developer data-attachment and packet utility library (Corgi_Taco). Sanctioned support role; nothing to weave.

## dynamictreesplus   [anchors: survival / worldgen-foraging (1)]

Power-read: 14 blocks, 7 items, loot=yes. Key items: `saguaro_fruit` (cactus drop), `cactus_branch`, `mushroom_branch`, `brown_mushroom_cap`, `red_mushroom_cap`, `brown_mushroom_seed`, `red_mushroom_seed`. Extends Dynamic Trees (parent) for cactus/mushroom procedural growth/felling. No registered recipe-types of its own (parent dynamictrees holds the mega_seed / seed_conversion methods). Drops from felling via DT mechanics.

Power-tier: saguaro_fruit is an everyday forage item from a procedurally-growing desert cactus. Mushroom caps are bulk organic material from mega mushrooms (somewhat rarer biome feature). Both are "foraging outputs" — everyday-tier organic feedstock.

Method-pull:
1. dynamictreesplus:saguaro_fruit → M-12 processing-chain pull via create:milling → cactus juice/pigment/pulp. Real-world saguaro: the fruit yields red pigment and a syrup. create:milling is the pack's "run a crop through and get a useful intermediate" idiom (wheat → flour). Saguaro pulp → a dye intermediate or a food ingredient fits perfectly. Tone: a desert cactus fruit milled to pigment is coherent and "of course" for a Create player. Survives.

2. dynamictreesplus:brown_mushroom_cap / red_mushroom_cap → M-12 processing-chain pull via create:milling → mushroom powder/spore (a cooking intermediate). This is the "foraged cap → spice" version of M-12. Tone: reasonable — milled mushroom spores as a cooking ingredient for FarmersDelight recipes. Red-team: mushrooms are common vanilla items; is this adding enough? The DT+ caps are *large* bulk drops from mega mushroom felling — creating a use for them as a milled intermediate gives incentive to fell them. Survives.

3. dynamictreesplus:saguaro_fruit → M-09 economy sell via numismatics. An everyday desert forage item as a trade good. Power: everyday. The "luxury good" framing of M-09 doesn't fit a common fruit. Reject — M-12 processing is the stronger route, and processed cactus products could then sell (M-09 downstream).

4. mushroom_branch / cactus_branch (structural pieces from felling) → M-04 Create recycles deco via create:crushing → bone meal/gravel. These branch blocks are a construction/deco surface by-product of DT+ felling. Crushing them back is M-04 (lossy). Power: everyday deco by-product. Tone: sensible — the branch pieces aren't decorative in the same way stone deco is; they're more like log by-products. Low priority but coherent. Accept as a lightweight M-04 edge.

- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the millstone breaks saguaro fruit down to a vivid red pulp — feed it into the coloring machine or the kitchen, the desert's surplus becomes a useful intermediate
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a giant mushroom cap feeds the millstone and comes out as a fine spore-powder — a cooking intermediate the automated kitchen would actually use
- from: dynamictreesplus:cactus_branch / mushroom_branch | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the felling debris from a Dynamic cactus or mushroom crushes down to bone meal and grit — nothing from the big harvest goes to waste
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: everyday forage item doesn't qualify as a luxury good; M-09 is for high-effort produced consumables; the economy connection flows better through M-12-processed products (milled pigment or spore powder as a sellable intermediate)
- REWORK: single survival anchor is correct. Dossier's M-12 (saguaro_fruit / mushroom cap milling) and M-09 (economy sell) candidates evaluated; M-12 confirmed as the primary weave; M-09 rejected as standalone but valid as downstream of M-12. M-04 for branch by-products is a new addition not in the dossier — lightweight but coherent.

## mutantszombies   [anchors: survival (1)]

Power-read: 7 items (spawn eggs only), 7 biome-modifiers, loot=no. No item drops from the mod's mobs (loot=no confirmed). The 7 items are spawn eggs — not world-droppable materials. No recipe-types registered.

Method-pull: There are literally no materials to pull through a method. The dossier's LEAVE assessment is correct.

LEAVE — mob-behavior mod with no item drops and no recipe surface. 7 spawn eggs are the only items; the mobs yield no drops beyond vanilla zombie loot (not registered by this mod). Forcing a weave edge (e.g. "vanilla zombie drops through a Create method") would be using vanilla material, not this mod's content — that's not a cross-mod weave. Sanctioned danger-expansion role.

## terrablender   [anchors: support / worldgen library (1)]

LEAVE — genuine zero-content library: no items, no blocks, no loot, no recipe-types. Worldgen biome-injection API (Glitchfiend). Required by biome mods; operates solely on worldgen registration. Sanctioned support role; nothing to weave.

## underground_village   [anchors: survival / exploration (1)]

Power-read: 0 blocks, 0 items, loot=yes. The mod generates Stoneholm underground villages (jigsaw worldgen, built from vanilla blocks). No own items/blocks. Has loot=yes — chest loot tables exist in the structure. Villagers spawn in the village and offer trades.

Method-pull: This mod has a loot surface (structure chests) and a villager-trade surface. The briefing is explicit: "a boss/structure feeding coin (M-08/M-14), magic reagents (M-02), or a progression key (M-15) is a REAL candidate — do NOT LEAVE a loot-bearing structure mod just because it has no recipes. Tag via: loot-seed."

1. Loot-seed: seed Numismatics coin or pack-relevant materials into Stoneholm chest loot tables. Underground villages are a discovery reward — finding one should yield something meaningful beyond vanilla chest contents. Seeding with a small coin stash or a rare crafting component makes the discovery economically meaningful. M-14 adjacent (the structure rewards exploration-pressure with economy output). Power: everyday-to-mid discovery reward. Tone: subterranean settlements hoarding coin/materials is natural. Survives.

2. Villager trades as economy nodes (M-21 provisional): Stoneholm villagers as Numismatics-denominated traders. A settlement deep underground could sell underground-specific goods (raw deepslate, unusual foods, candles) for coin. M-21 is provisional (leans no), so tag accordingly. Tone: the underground setting is evocative for special traders. Flag as provisional-motif candidate.

3. Loot-seed for magic reagents: underground = dark/mystical setting; seeding Ars Nouveau source gems or occult materials into Stoneholm chest loot would make them an exploration reward for magic progression. M-02 adjacent (mob drops → magic supply; here the "mob drop" is the structure loot from hostile mob guarding). Tone: finding occult curios in a hidden underground settlement is coherent. Survives.

- from: underground_village structure chests | via: loot-seed (add Numismatics coin + pack-relevant materials to Stoneholm loot tables) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: cracking open a chest in a buried village reveals a stash of coin and odd materials — the settlement had commerce once; exploration pays
- from: underground_village structure chests | via: loot-seed (add arcane reagents / source gems to Stoneholm loot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: whoever lived here before left behind strange materials — a lucky delver finds the kind of components a mage would pay well for
- from: underground_village villager trades | via: villager-trade / Numismatics denomination | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); the stronger and cleaner weave is the loot-seed approach (accepted above); villager-trade denomination is an economy node but M-21's "explore only" status means it should not be a primary proposal
- REWORK: existing single survival anchor is accurate. Dossier's M-09 economy candidate (Stoneholm villagers as economy nodes) overlaps with M-21 — confirmed as the weaker path. The stronger economy seam is M-08 loot-seed (accepted above). Dossier correctly identified the trade-seating angle; this pass confirms loot-seed via: loot-seed is the actionable delivery.

## tidal-towns-1.3.4   [anchors: survival / exploration (1)]

Power-read: 0 blocks, 0 items, loot=no. Pure structure datapack: floating ocean village in vanilla deep_ocean biomes, built entirely from vanilla blocks. No registered loot tables (loot=no in jar). No recipe-types.

Method-pull: loot=no means no loot-seed opportunity (the mod doesn't register its own loot tables — any loot would be pure vanilla chest contents). No items, no recipe surface.

Dossier LEAVE was noted but let me verify: the briefing says "do NOT LEAVE a loot-bearing structure mod." This mod is loot=no — the exception doesn't apply. Could loot be added via a separate pack-side datapack? Yes, but that's a pack curation choice applied to vanilla chest structures, not a mod-to-mod weave edge.

The mod's aeronautics thematic value (ocean settlements as aeronautics expedition targets) is a design-layout observation, not a weave method edge. No motif fits.

LEAVE — structure datapack with no registered loot tables (loot=no), no items, no blocks, no recipe-types. Its only content is the structure geometry (vanilla blocks). Sanctioned exploration/worldgen flavor role. Could be an airship destination target by design intent, but that's a layout observation without a method-edge to anchor to.

## ctov   [anchors: survival / exploration (1)]

Power-read: 0 blocks, 0 items, loot=yes, uses lithostitched. 23 village + 14 outpost variants placed by biome tags. Custom loot tables exist (loot=yes). No own items/blocks/recipe-types.

Method-pull: loot=yes — this is a loot-bearing structure mod. Per briefing: seeding weave-relevant drops is a REAL candidate. CTOV's loot tables are the join surface.

1. Loot-seed economy: CTOV villages are the pack's primary source of discoverable villager settlements; seeding Numismatics coin or bounty-starter items into their chests and loot tables makes village-finding a real economy entry point. M-08 adjacent. Power: everyday (villages are common). Tone: villages having some coin is extremely natural — "of course."

2. Loot-seed magic reagents: themed villages (Halloween CTOV variant, mushroom variant) are thematically aligned with magic content. Seeding Ars source gems or occult components into the appropriate themed variant's loot adds progression hooks for magic players during exploration. Power: everyday-to-mid. Tone: good — finding a witch's village stocked with arcane samples is natural.

3. CTOV villages as MineColonies "seeding" locations: a discovered CTOV village could be the natural start point for a MineColonies colony (the villagers are already there). Not a recipe edge — a design recommendation for the modpack's new-player onboarding. Flag as design note, not a weave candidate (no method to route through).

- from: ctov structure chests (village + outpost loot tables) | via: loot-seed (add Numismatics coin / bounty items to village loot) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: the village blacksmith's chest has old coin in it — exploration has always been the first step toward a player economy, and now it literally starts you off
- from: ctov themed village chests (Halloween / mushroom / swamp variants) | via: loot-seed (add magic reagents — source gems, occult items — to thematically matched village loot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the cursed-looking village in the dark forest has exactly the kind of arcane odds-and-ends a mage needs to get started — loot tables reflect the settlement's character
- from: ctov as MineColonies colony seed point | via: design intent (discovered village becomes colony base) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no method-routing to implement; this is a design/onboarding observation, not a recipe or loot-table action; no motif fits; flag as design note only
- REWORK: existing single survival anchor is accurate. Dossier's LEAVE assessment missed the loot=yes surface — the briefing explicitly says don't LEAVE a loot-bearing structure mod (this is the exact case). The dossier note "could host other mods' items as found loot, but that's a curation knob, not an edge" undersells the loot-seed delivery mechanism that the Phase 2 briefing validates. Two clean accepts via loot-seed.

## creativecore   [anchors: support / library (1)]

LEAVE — genuine zero-content library: no items, no blocks, no loot, no recipe-types. CreativeMD's GUI/event/packet library (required by LittleTiles, ItemPhysic, etc.). Sanctioned support role; nothing to weave.

## born_in_chaos_v1   [anchors: survival (1)]

Power-read: 111 blocks, 355 items, 50 biome-modifiers, loot=yes. Rich content mod. Key drops: `dark_metal_deposit` (the ore block), `dark_metal_block`, `dark_metal` (ingot/material from Fallen Chaos Knight / Missionary / Skeleton Thrasher drops — chance ~7-16%), `bundle_of_bones`, `bagof_candy` (seasonal), boss drops: Pumpkin Staff, Soul Saber. Also: `black_argillite` build palette (stone-type block, 111 blocks are largely this palette). A seasonal boss (Pumpkinhead, Oct 25–Nov 5 or candle-pumpkin summon).

Power-tier: Dark metal is mid-tier (requires killing named hostile mobs at 7-16% drop rates; not trivially farmable but not a true boss). The Pumpkinhead boss is a genuine seasonal boss (M-15 candidate). Bundle of bones is a more common drop. Black argillite is plentiful (the build palette).

Method-pull:
1. born_in_chaos_v1:dark_metal_deposit → M-03 Create ore-doubling via create:crushing. It's an ore block — the core M-03 template. Dark metal deposit crushes to dark metal nuggets + byproduct (XP nugget per M-03 idiom). Tone: a rare dark ore being doubled by a crusher is exactly the Create ore processing fantasy. Power: mid (ore is mob-drop-gated, not a minable ore in the ground — it drops from specific mobs, making it a combat-resource). Red-team: M-03 says "ore → crushed (+byproduct); a reward, vanilla smelt path stays." The "deposit" block is from mob drops, not world-gen mining, but the M-03 motif is "any ore-form material → crushing." The dark_metal_deposit is called a "deposit" (a block form of the metal) — crushing it makes sense. Survives.

2. born_in_chaos_v1:bundle_of_bones → M-11 ritual/transmutation sink via occultism:spirit_fire. Bones are the classic spirit-fire material (vanilla bonemeal → spirit) and bundle_of_bones doubles down on it. Transmuting a bundle of bones into a necromantic spirit intermediate is a direct M-11 application. Power: mid (mob drop, moderately common from the hostile mob wave). Tone: excellent — bones into a spirit-fire ritual is pure occultism flavor. Survives.

3. Pumpkinhead boss drops (Soul Saber / Pumpkin Staff) → M-15 boss-key unlock. Boss drops gate a complex Create/tech recipe. Power: endgame (seasonal boss, multi-phase fight). Tone: strong — a soul saber or demonic pumpkin staff as a gate item for high-tier tech is exactly M-15. Red-team: the seasonal availability (Oct 25–Nov 5 real-world, or summonable) means the gate can be bypassed by summoning — acceptable. Survives.

4. born_in_chaos_v1:dark_metal (ingot/processed form) → M-02 mob-drop reagent sink via ars_nouveau:imbuement. Dark metal is a cursed, soul-touched material — feeding it into an imbuement altar as a magic reagent gives it a magic use beyond bench-crafting its own gear. Power: mid. Tone: cursed dark metal as an arcane reagent is coherent (thematically shadowy/necromantic). Survives.

5. born_in_chaos_v1:black_argillite blocks → M-04 Create recycles deco via create:crushing. 111 blocks is a big build palette — providing a crush-back to argillite dust/gravel + XP nugget rewards recycling. Power: everyday (common build material). Tone: good — a gothic stone palette crushing to aggregate is natural Create behavior. Survives.

6. born_in_chaos_v1:bagof_candy (seasonal drop) → M-16 seasonal reagent. The candy bag is a seasonal item (Pumpkinhead event). Using it as a season-gated input to a recipe (e.g. a festive confection via ExtraDelight or a magic ritual during the Halloween window) creates a temporal pressure. Power: seasonal/mid. Tone: a Halloween bag of candy as a seasonal recipe ingredient is playful and coherent. Survives — though seasonal scope is narrow (only Oct–Nov real-world window or summon).

7. born_in_chaos_v1 drops → M-14 bounty board. Combat drops converted to coin via bounty payouts. Power: mid (these are moderately difficult mobs with 50 biome-modifiers — they're frequent encounters). Tone: fine but weak on its own without the magic-use giving the drops more identity first. Reject as standalone — M-02/M-11/M-15 are the primary routes; economy as downstream.

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the dark ore that the fallen knight dropped still has to answer to the millstone — crush it to doubled nuggets and let Create extract the full value from every hard-won lump
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a bundle of the slain undead's bones feeds the spirit fire — Occultism's furnace doesn't ask where the bones came from; it just renders them into something useful
- from: born_in_chaos_v1 Pumpkinhead boss drops (Soul Saber / Pumpkin Staff) | via: recipe gating (boss drop as key input in a high-tier Create/tech recipe) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the soul saber is more than a weapon — its enchanted blade is the only thing sharp enough to cut the final assembly; fight the pumpkin king or go without
- from: born_in_chaos_v1:dark_metal | via: ars_nouveau:imbuement | to: magic | motif: M-02 + M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the forge can't tell cursed metal from true iron, but the imbuement altar can — dark metal's shadowy resonance makes it a natural arcane reagent; drop it in and the apparatus does something interesting
- from: born_in_chaos_v1:black_argillite blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the gothic stone palette is everywhere once the chaos mobs start dropping it — the crusher recovers argillite aggregate and XP from building offcuts
- from: born_in_chaos_v1:bagof_candy | via: season-gated recipe (ExtraDelight / magic ritual; available Oct–Nov event window or post-boss-summon) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: the candy that falls from the Pumpkinhead is a once-a-year ingredient — whatever recipe takes it, you either stock up during the event or wait another year
- from: born_in_chaos_v1 combat drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: functional as a standalone but weaker than the magic-use chain — M-02/M-11/M-15 give the drops identity first; M-14 alone reduces a rich horror mod to a kill-for-coin grind without the meaning the magic routes add; prefer economy to flow downstream from magic uses
- REWORK: existing single survival anchor is accurate. Dossier's three candidates (M-03 ore-doubling, M-02/M-14 economy/bounty, M-11/M-10 magic) are all evaluated here. M-03 confirmed STRONG (dark metal deposit is exactly the M-03 template). M-14 bounty rejected as standalone (confirmed WEAK from dossier label). M-11 (bundle_of_bones via spirit_fire) accepted — thematic fit is excellent. M-15 (Pumpkinhead boss key) is a new accept not in dossier. M-04 (argillite crushing) is a new accept not in dossier. M-16 (bagof_candy seasonal) is a new accept not in dossier. The mod deserves 3+ systems: survival (existing) + Create (M-03/M-04) + magic (M-02/M-10/M-11) + possible survival-M-16. That's a well-woven mod.

== CHUNK COMPLETE ==





