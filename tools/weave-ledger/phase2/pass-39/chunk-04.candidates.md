# Phase 2 candidates — chunk-04

## createadditionallogistics   [anchors: create, aeronautics (2)]

Existing connections review:
- create anchor: kinetics infrastructure is correct — it IS Create (deepens the spine).
- aeronautics anchor: seats wired to Stock Keepers / train logistics is legitimate; the aeronautics / logistics arm explicitly includes train transport.
REWORK: OK — connections sound. Both anchors are load-bearing and the mod's role is well-scoped (a performance+logistics deepener of Create, not a standalone content mod). No new edges needed; forcing one would be arbitrary.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: structure datapack — 150+ vanilla-block structures across biomes, loot=yes. No items of its own; content surface is entirely loot tables. Single survival anchor (exploration/discovery) is correct.

Method-pull candidates:
- from: trek chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scarce Numismatics coin (or coin blank requiring Create-pressing) seeded into rare trek structures makes exploring ruins a way to seed the early coin economy — players loot coin or coin blanks rather than emeralds, threading exploration into the player-run currency layer. This is a genuine demand-gating link (M-08 player-minted currency); loot-seed is the delivery.
- from: trek chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: source gems, arcane essences, or Occultism spirit-books seeded into trek ruins make remote structures a source of hard-to-farm magic reagents — exploration feeds the magic production route and draws players out into danger. Mob-drop-reagent logic applies here: the loot table IS the organic/world source.
- from: trek chest loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-key or rare Create-gated blueprint component hidden in the deepest trek fortresses / pyramid / dungeon loot creates an exploration-to-tech unlocking arc — players who push far enough find a gate item for a high-tier Create machine, making exploration matter for tech progression. Scale to the structure rarity (a pyramid or fortress, not every island).
- from: trek chest loot tables | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: seeding combat drops into trek loot doesn't advance the loop — that's just extra loot scattered across structures rather than a combat-route supply link. M-34 is about combat specialists farming bosses to trade; scattering boss-adjacent drops into structure chests doesn't create the specialist dynamic, it removes it. REJECT.

## supermartijn642configlib   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (config API); no items, no recipe types, no loot, no in-world behavior. Nothing to weave.

## trading_floor   [anchors: create, economy (2)]

Existing connections review:
- create anchor: hard Create dependency (it IS a Create depot variant) — correct.
- economy anchor: its purpose is automating villager trades, which is a distribution/exchange mechanic — correct.
REWORK: OK — connections sound. It is already a genuine two-anchor mod at the exact seam of Create logistics and the economy distribution layer. No new edges needed.

Additional checks (method-pull):
- The dossier flags M-08 (player-minted currency via the Trading Depot accepting Create-processed goods → emeralds → Numismatics mint) as a natural future use. That's a valid weave candidate but it's an economy-internal refinement: Create output → depot → emeralds → player mints coin. Power: mid. Tone: ok. Motif: M-08. Verdict: ACCEPT | hook: a Create production line auto-feeds the Trading Depot to convert refined goods into emeralds, which a player mints into Numismatics coin — the depot becomes the monetization point where the tech spine meets the player-run currency layer. via: config tie (depot wired into Create belt) + numismatics mint.
- from: trading_floor:trading_depot used for enchanted book farming | via: create belt + trading depot | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: routing enchanted books via the depot into magic is a one-hop convenience shortcut — it removes scarcity rather than gating demand. Enchantments belong to the magic specialist role (M-33 service-for-hire or the magic route's locked output); auto-farming them through a depot erodes that specialization. REJECT.

## dataanchor   [anchors: support/library (1)]

LEAVE — genuine zero-content developer library (data-attachment + networking API); no items, no blocks, no loot, no gameplay behavior. Nothing to weave.

## gnkinetics   [anchors: create (1)]

Power-read: 33 blocks, 31 items — pure kinetic extension parts (planetary, ring, worm gears; chainable cogwheels; cog cranks; creative gear motor). All crafted from Create stock (andesite/brass). Loot=yes but only as a kinetics-part source. The dossier correctly identifies this as a Create deepener.

Method-pull candidates:
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gear or worm gear — the high-ratio, torque-specific kinetics part — is a required mechanical component in Aeronautics propeller/drive-shaft assembly; it makes airship drivetrains demand specialized gear-cutting (a Create specialty), not just raw metals. The worm gear's self-locking property makes it a natural rudder/control-surface lock. Depth scales appropriately: these are mid-tier Create parts, not entry-level. via: create:mechanical_crafting (Aeronautics drivetrain recipe).
- from: gnkinetics:industrial_gear / gnkinetics:large_industrial_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is the structural alloy / airframe motif, not the drivetrain motif. A gear is not a structural alloy — it's a drivetrain component (M-24 covers this correctly). Routing it as M-23 mis-classifies the material. The M-24 accept above already covers the same gear type. REJECT (wrong motif; M-24 already handles this).
- from: gnkinetics:magnet_gear / gnkinetics:large_magnet_gear | via: create:mechanical_crafting | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: the magnet coupling across gaps is a physics/kinetics mechanic, not thematically connected to magic; routing it into magic is tone-forced. No motif fits. REJECT (no-motif, tone clash).
- from: gnkinetics:creative_gear_motor | via: n/a | to: any | power: creative | tone: n/a | verdict: REJECT | reason: creative-mode content; not weave-eligible (it's a dev/creative cheat block, not a survival material). REJECT.

## mushroomquest   [anchors: survival (1)]

Power-read: 48 blocks, 352 items, 32 biome-modifiers, loot=yes — large pool of edible/effect-bearing mushrooms spanning everyday (common forageables) through mythical (rare biome-locked finds). Biome-keyed foraging, Mushroom Island expansion, structures + loot. Strong feedstock for cooking/brewing methods. The dossier flags M-12 (cooking chain), M-09 (luxury sell), M-10/M-11 (magic) but M-09 is retired.

Method-pull candidates:
- from: mushroomquest rare/effect mushrooms (agarikon, bay bolete, mythical caps) | via: farmersdelight:cooking / extradelight:oven | to: create | motif: M-12 | power: everyday-to-mid | tone: ok | verdict: ACCEPT | hook: effect-bearing mushrooms are processed through Farmer's Delight / Extra Delight cooking into prepared mushroom dishes that feed the diet system (Grains/Protein/Vegetables face) — a survival→production chain that integrates the foraging layer into the food-processing spine without anything forced. Low bar; everyday mushrooms = one-step cooking recipe. via: farmersdelight:cooking.
- from: mushroomquest mythical/deadly mushroom caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: transmuting a rare mythical or deadly mushroom cap (an organic biome find, hard to farm at scale) through spirit-fire into an Occultism reagent or through Ars imbuement into a source-adjacent material makes the foraging route a real input to the magic production web — the mycologist who explores Mushroom Islands feeds the mage. Scale appropriately: mythical caps only, not common forageables; one light transmutation step. via: occultism:spirit_fire.
- from: mushroomquest rare/biome-locked mushrooms | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling mushrooms through Create's miller is coherent but redundant — farmersdelight:cooking already handles the processing chain (M-12, accepted above) and does it more naturally (mushroom dishes vs. mushroom powder is a thin distinction, not a new system seam). Adding a second M-12 path here thins the weave without adding a new pillar link. REJECT (redundant with cooking-chain accept).
- from: mushroomquest effect mushrooms as brew ingredients | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: effect-bearing mushroom caps (poison, healing, hallucination analogs) brewed in Iron's Alchemist Cauldron into spell-potions or buff-flasks makes the mushroom forager a supplier to the Iron's magic pillar — a cross-route dependency where a survival find feeds a magic production method. Scale: mid-tier mushrooms (not every common one), one brewing step. via: irons_spellbooks:alchemist_cauldron_brew. Motif M-10 (arcane infusion pull — foreign material refined into magic reagent through native magic method).
- from: mushroomquest loot tables (Mushroom Island structures) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: seeding coin into mushroom-island structure loot is weaker here than for trek (which spans all biomes); the Mushroom Island is already a vanilla special biome destination, so coin there could work, but the better economy weave for mushroomquest is the reagent supply chain (accepted above) rather than stashing coins in chests. The loot-seed economy link adds little over the direct magic-supply weave. REJECT (weaker than accepted links; economy gets no new structural benefit).

## copperagebackport   [anchors: survival (1)]

Power-read: 70 blocks, 81 items, 3 c:tags (item/nuggets/copper), loot=yes. Copper deco/tool/armor set with oxidation, Copper Golem item-sorter, shelves/lanterns/chains. Vanilla copper backport; everyday copper is the key material (Create staple). Dossier flags M-04 (crushing recycle) and a weak Copper Golem logistics link.

Method-pull candidates:
- from: copperagebackport copper deco blocks (copper bars, lanterns, chains, shelves — all oxidation stages) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper deco blocks crush back to copper nuggets/raw copper + an XP nugget — lossily, per M-04's anti-arbitrage rule — so the whole copper deco palette connects to the Create copper economy; a player who overbuilt copper lanterns can reclaim material. One light step (single crushing recipe); everyday tier correct. via: create:crushing.
- from: copperagebackport copper tools/armor (copper_axe, copper_boots, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn/discarded copper tools crush back to copper nuggets (lossy), consistent with M-04's deco-recycle role extended to tools — keeps the copper material loop inside Create's crushing economy rather than letting copper gear be disposable trash. Same method, same motif, different item class. via: create:crushing.
- from: copperagebackport:copper_golem_statue logistics role | via: config/behavioral tie | to: aeronautics/logistics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the Copper Golem's chest-to-chest hauling is a low-tech sorting analog that overlaps Create's logistics niche but doesn't advance the loop — it's parallel to, not feeding into, the aeronautics/logistics arm. No motif connects a vanilla-style item-sorter to the aeronautics pillar without forcing the link. REJECT (no-motif; would be redundant with Create's native logistics).
- from: copperagebackport:minecraft:copper_chest (oxidized/weathered variants) | via: create:item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: applying wax (honeycomb) to a copper chest via Create's item_application to lock its oxidation state is M-20 (deploy-application upgrade), but this is a vanilla/Create-adjacent operation that doesn't cross into a new system — it's entirely within the copper-oxidation mechanics, not a meaningful pillar link. REJECT (system doesn't advance; no new pillar touch).

## buildguide   [anchors: support/QoL (1)]

LEAVE — client-side render overlay with zero items, blocks, loot, or gameplay material surface. Pure visual build-assist; nothing to weave.

## jeresources   [anchors: support/client-UI (1)]

LEAVE — JEI addon that surfaces mob-drop, dungeon-loot, and worldgen-distribution data; display-only with no material surface, no items, no processing. Genuinely useful for the scarcity design (players see where regional ores live) but it's documentation infrastructure, not a loop node. Nothing to weave.

## create_compressed   [anchors: create (1)]

Power-read: 30 blocks, 30 items — crushed-ore piles, sheet blocks, mechanism/cogwheel/belt/shaft bundles, flour/dough piles. Already uses create:crushing, milling, mixing, splashing, sandpaper_polishing. Pure Create-internal storage/automation QoL; no foreign material. Dossier correctly identifies it as Create-internal support.

Method-pull candidates:
- from: create_compressed crushed_<metal>_pile blocks (bulk) | via: aeronautics/logistics — train bulk cargo | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: compressed crushed-ore piles are exactly the kind of heavy, bulk intermediate that makes train/airship logistics economically meaningful — shipping 9× crushed copper in one block rather than 9 loose items is the point of compression, and it makes bulk ore trade a job for the aeronautics/logistics arm rather than player backpacks. The M-31 link is thematic rather than a recipe (it's a pack-design framing that the aeronautics arm moves compressed ore between regional processing hubs). via: config/design framing (aeronautics/logistics move method).
- from: create_compressed:mechanism_block / belt_block / shaft_bundle | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the compressed mechanism/belt/shaft blocks are storage formats for existing Create parts, not distinct mechanical components. Using a shaft_bundle as an Aeronautics drivetrain input is a storage trick (9 shafts in a block), not a new mechanical specialty — it collapses the supply chain rather than adding depth. M-24 should require a genuinely distinct component type (like gnkinetics gears), not a compression block. REJECT (bad fit for M-24; storage format ≠ mechanical component).

## immersive_armors   [anchors: survival (1)]

Power-read: 41 items (armor sets only — no blocks). Sets span Bone (everyday mob material), Warrior/Heavy (mid-game iron-adjacent), Prismarine/Slime (ocean-biome materials, mid), Divine/Wither (endgame vanilla). Steampunk set implied by name but listed as one of the ~10 sets. The dossier flags M-05 (native-method gating via Create pressing/mechanical_crafting) and M-10 (arcane infusion for Divine/Robe). M-09 is retired, so the "economy via Numismatics sell" candidate is correctly dismissed.

Method-pull candidates:
- from: immersive_armors:heavy_chestplate / heavy_helmet (Heavy set) | via: create:pressing → mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy armor set (high toughness + near-zero knockback) is gated on Create-pressed iron plates assembled into heavy plate pieces via Mechanical Crafting — the survivalist who wants the tankiest non-boss armor must engage the Create spine; it slots naturally into the mid-game tech-to-survival loop. Steampunk set gets the same treatment. One or two Create steps; don't make it a sequenced-assembly chain (that's endgame). via: create:pressing + create:mechanical_crafting.
- from: immersive_armors:divine_chestplate (Divine set — fully blocks one attack per minute) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Divine set's passive (full attack block, one per minute) reads as magical protection, not engineered armor — finishing the set through the Ars enchanting apparatus with a source-gem catalyst makes the Divine set a magic production exclusive, so only a player who has progressed in Ars Nouveau (or trades with one) can own the best reactive armor. Endgame tier; one apparatus infusion step is sufficient. via: ars_nouveau:enchanting_apparatus.
- from: immersive_armors:bone_chestplate (Bone set) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday-to-mid | tone: ok | verdict: REJECT | reason: transmuting a Bone armor set through spirit fire into magic reagents inverts the intended relationship — Bone armor is a combat-facing output, not a magic feedstock. Players would make Bone armor to wear it, not to sacrifice it in a ritual. The transmutation would only be used to "un-make" worn gear into reagents, which is a corner case, not a loop-advancing edge. Theme doesn't click naturally. REJECT (wrong direction; armor is an output, not a spirit-fire input).
- from: immersive_armors:prismarine_chestplate (Prismarine set, spike retaliation) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the Prismarine set already uses prismarine shards (vanilla ocean material); gating it additionally on Create-pressed plates doubles the M-05 application and dilutes the Heavy-set accept above (two armor sets with the same exact Create pressing gate makes both feel like the same recipe, reducing the loop's clarity). One Create-gated armor set is the right depth for this motif; pick the most on-theme pair (Heavy + Steampunk). REJECT (would dilute the accepted Heavy/Steampunk M-05 tie).

## ldlib2   [anchors: support/library (1)]

LEAVE — developer library (UI/rendering/data-sync infrastructure); the two registered blocks are dev/test entries with no player-facing content. Nothing to weave.

## smokeleafindustries   [anchors: survival (1)]

Power-read: 62 blocks, 243 items, 12 registered recipe-types — a full industrial cluster (own machines, FE energy, 25 crop strains, multi-step processing chain). Loot=yes (dealer/stoner village trades implicit). Largely closed loop on hemp/strain items; the generator accepts external burnable fuel (join key). Effect-granting edibles touch the food/consumable space. Dossier flags M-09 (retired, so invalid) for economy, M-05 for Create FE bridge, and M-03/M-12 for Create crushing of hemp.

Method-pull candidates:
- from: smokeleafindustries refined extracts / gummies (strain output) | via: createaddition:charging or FE-kinetic bridge | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf machine network runs on FE; using Create Addition's FE↔kinetic bridge, the smokeleaf farm's generator can accept Create rotational power (or export FE back into the Create ecosystem), threading the strain-processing island into the Create energy web. This is a direct integration at the energy seam — the farm is no longer an isolated FE island; it's powered by (or exports to) Create's spinning infrastructure. One config/recipe bridge at the generator. via: createaddition:liquid_burning or FE bridge config.
- from: smokeleafindustries strain buds/extracts | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: certain potent strain extracts — the high-end synthesized concentrates — are used as catalysts in Occultism rituals or Ars imbuement: an alchemical parallel (cannabis extract as a ritual reagent is mythologically real and fits the arcane-alchemical tone of Occultism/Ars). This gives the strain farmer a magic-pillar output that isn't just effect food. Mid-tier extracts only (the synthesizer output, not raw buds). via: occultism:ritual. Motif M-10 (arcane infusion pull — foreign organic refined into a magic catalyst through native magic method).
- from: smokeleafindustries raw hemp fiber / hemp bud | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hemp fed through the Create miller yields hemp fiber / plant matter (a processing-chain intermediate) that feeds into other recipe steps — folding hemp into the Create processing graph and making the hemp farm contribute to the general material web, not just the smokeleaf island. One light milling step; everyday tier. via: create:milling.
- from: smokeleafindustries extracts/gummies | via: smokeleafindustries:synthesizer | to: economy | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: M-26 (consumption sink) needs the items to be *spent against pressure* — eaten/burned/expended in a way that renews demand. The strain effects do apply on consumption, so gummies ARE consumed. However, the loop-advancing question is whether a non-specialist needs to buy them. In a PvPvE co-op, buff-granting consumables (temporary speed, hunger-sating, etc.) bought from a strain specialist IS a genuine trade loop close. BUT this is the "sellable = ambient endpoint" territory — a player buys gummies from a strain farmer because they want buffs. Without a mechanic that forces players to *need* these buffs, it's optional trade. The consumption edge here is weak: players aren't meaningfully pressured to consume extracts. REJECT (ambient trade endpoint, not a structural pressure-driven demand gate; would need a diet/buff mechanic forcing consumption to make M-26 stick).
- from: smokeleafindustries:generator (FE burn) | via: smokeleafindustries:generator | to: create | motif: M-13 | power: everyday | tone: ok | verdict: REJECT | reason: M-13 is the fuel→propulsion motif for Aeronautics engines. The smokeleaf generator burns items to produce FE for the smokeleaf machines — it's not an Aeronautics propulsion fuel; it doesn't power airship engines. Applying M-13 here is a motif misfire. The FE→Create bridge (M-05, accepted above) covers the energy seam correctly. REJECT (wrong motif — M-13 is aeronautics propulsion, not general FE generation).

## ponderjs   [anchors: support/Create tooling (1)]

LEAVE — developer documentation tool (KubeJS scripting API for Create Ponder animated scenes); no items, blocks, processing, or gameplay material. Pure authoring infrastructure. Nothing to weave.

## better_climbing   [anchors: support/QoL (1)]

LEAVE — client-side climbing physics tweak (faster descent, speed ramp, jump in climbable); no items, blocks, loot, or gameplay material surface. Pure movement-feel improvement. Nothing to weave.

## create_ltab-3.9.2   [anchors: create, survival (2)]

Existing connections review:
- create anchor: Create-themed structures — correct. The mod exists within the Create aesthetic.
- survival anchor: structures + loot push the exploration / discovery face of survival — correct.
REWORK: OK — both anchors are sound.

Method-pull (loot-seed candidates for a 3rd link):
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins hiding a coin blank or scarce Numismatics coin (requiring a player to press it with Create to mint) makes exploring Create structures an entry into the player currency layer — the builder who finds the ruin seeds the early coin economy; thematic fit is strong (industrial ruins → industrial currency). via: loot-seed.
- from: create_ltab structure loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: seeding a boss-key item (M-15) into structure loot removes the boss-fight requirement — M-15 is specifically "a boss drop is the gate item for a complex Create recipe." Putting a boss-key analog into an exploration chest bypasses the combat-route dynamic that M-15 is meant to reinforce. REJECT (undermines M-15's design intent — boss kill should be the source of the gate item, not a chest in a ruin).

















