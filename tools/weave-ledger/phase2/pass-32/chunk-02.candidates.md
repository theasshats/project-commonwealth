# Phase 2 candidates — chunk-02

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — pure biome-finder compass; 0 items output, no methods, nothing to route through any machine or ritual. Correctly labelled support; no coherent 2nd anchor is possible.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable-book item; no methods, no drops, no loot table. Genuine zero-content surface.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:branch (harvested tree debris, available in bulk from felling) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill the leftover branches that pile up when you fell a Dynamic Tree into bark mulch / wood pulp — Create gets a wood-byproduct processing sink and the pack gains a log-surplus use
- from: dynamictrees:dendro_potion (brewed specialty item controlling tree growth) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: dendro_potion is a growth-control potion, not a magical reagent by theme; routing it through arcane infusion is tonally forced — a botanical druids angle would need dedicated motif support not in the registry
- from: dynamictrees seed types (species seeds — oak/birch/jungle etc.) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: seeds are basic everyday components — M-11 explicitly warns against gating basic components behind complex ritual steps; seed-to-reagent conversion would violate the depth-scales-with-power rule
- from: dynamictrees mega-seed variants (endgame large-tree cultivation tool) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: mega-seeds are a DT-internal rarity for enormous trees, not a technology component — a sequenced-assembly construction of a mega-seed has no coherent "why" a player would nod at; the mod doesn't interface with Create contraptions in any meaningful way so the edge is contrived
REWORK: dossier says "leave — DT trees awkward for Create automated harvesters" but the branch byproduct (not the tree itself) is a natural milling candidate; the milling link (M-12) does not require automated harvesting — manual felling still produces branches. OK to reassess the 1-anchor status with the M-12 mill link.

## copycats   [anchors: Create (2 anchor-adjacent)]
- from: copycats:copycat_* blocks (zinc-built decorative shapes) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copycat blanks that have been mis-cut or replaced crush back to zinc dust + a faint XP nugget — the Create recycling loop applies to its own family of deco blocks
- from: copycats zinc-skin blanks as shipbuilding interior cladding | via: aeronautics airframe recipes | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: copycats are texture-only skins, not structural load-bearing material — M-23 requires a structural alloy/hull material; a copycat panel carries no mass or structural metaphor a player would find convincing as an airframe ingredient
REWORK: dossier anchor listed as "Create (2)" but the second anchor is described as "pillar-adjacent via Create" — only one real system tag (create). M-04 crushing link above would add a concrete second method-routing, but doesn't add a second *system* anchor. Connections are sound for a deco mod within the Create pillar; one-anchor is acceptable here. OK — connections sound.

## jamlib   [anchors: library/API (1)]
- LEAVE — pure code library, 0 items/blocks/methods. Genuine zero-content surface.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- from: lazy shaft/cogwheel blocks (bulk infrastructure components) | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a large Create factory needs dozens of lazy shafts; a colony Blacksmith/Mechanic produces them cheaply at scale, making the logistics player dependent on a colony specialist rather than hand-crafting hundreds
- from: flexible shaft components | via: create:deploying item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: flexible shafts are already crafted from Create parts; adding a second deploy-upgrade step on top of what is a QoL shaft variant would add depth to a utility component that doesn't earn it (it's not an endgame item)
REWORK: existing anchors (Create + aeronautics) are sound. The aeronautics tie via Stock Keeper seats is genuine. OK — connections sound.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute (zinc-built logistics block) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: direct_chute is a single simple logistics block; giving it a crushing recipe is valid by M-04 but adds negligible loop value — copycats and other zinc-deco blocks are better M-04 candidates. The mod is correctly 1-anchor; forcing a second edge would be noise.
- from: direct_chute in-column item transport (bulk logistics) | via: aeronautics logistics arm | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: M-31 requires the *good being moved* to be heavy/bulk enough to need aeronautics; the direct_chute is the *conduit*, not a good — the motif doesn't apply to infrastructure blocks
- LEAVE — single-block Create QoL addon; no novel material outputs; any forced edge is weaker than just noting it lives inside Create.

## dragonlib   [anchors: library/API (1)]
- LEAVE — pure code library, 0 player-facing items/methods. Genuine zero-content surface.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: blahaj plush variants (wool+dye constructs) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a plush shark into wool scraps is mechanically valid by M-04 but tonally jarring — the mod's whole vibe is cozy/wholesome; destruction-recycling of a plush is a meme, not a system. The tone clash is decisive.
- LEAVE — 31-variant decorative plush set; no material outputs, no methods; any forced weave would be noise. Correctly one-anchor flavor mod.

## ichunutil   [anchors: library (1)]
- LEAVE — zero items/blocks/methods. Genuine zero-content library.

## bagus_lib   [anchors: library (1)]
- LEAVE — zero items/blocks/methods. Genuine zero-content library.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (flagship kitchen appliance blocks) | via: create:mechanical_crafting or create:sequenced_assembly | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Kitchen Oven and Fridge are meaningful mid-game build targets; requiring Create brass sheets and a mechanical press makes the "proper kitchen" a Create milestone, not a free crafting-table build — the player who runs a food specialist colony needs Create's help to equip it
- from: cookingforblockheads:cooking_table (the hub multiblock anchor) | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony Cook hut naturally centralises the kitchen multiblock — requiring the cooking_table in the Cook hut recipe ties colony food production to the kitchen build and creates demand for the mod's blocks via colony requests
- from: cookingforblockheads kitchen food output (aggregated cooked meals from all food mods) | via: numismatics player economy | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: "food is sellable" is the ambient loop endpoint (M-09 retired); the kitchen doesn't gate demand — it reduces friction. An economy link here would just be restating that food has value. REJECT bare sell link.
REWORK: dossier candidate "economy via numismatics" was already weak/noted as such; confirm REJECT per M-09 retired. The M-05 gating and M-28 colony links are new — add them.

## better_lib   [anchors: library (1)]
- LEAVE — zero items/blocks/methods. Genuine zero-content library.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (Soul Furnace output from rotten flesh) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood is already a soul-state reagent — running it through Occultism spirit_fire transmutes it into a spirit essence usable in rituals, bridging the gothic-alchemical Companions loop into the Occultism web
- from: companions:soul_gem (diamond→soul_gem via Soul Furnace) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a soul gem refined in the arcane imbuement apparatus becomes an Ars source-adjacent catalyst, threading the Companions' alchemy into the magic production route — two magic routes share a mid-tier ingredient
- from: companions boss drops — relic_gold / old_cloth (Sacred Pontiff drops) | via: emergent trade, boss gate | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Sacred Pontiff is a dangerous rare boss; its relic_gold and old_cloth are ingredients non-combat players need — a combat specialist farms and trades them, completing the supply side of M-34
- from: companions:copper_coin / nether_coin / end_coin (Companions' internal coins) | via: numismatics player-minted currency | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Companions has its own three-coin system that is NOT the Numismatics settlement medium — merging them would either create arbitrage (two coin systems at parity) or require a conversion recipe that turns Numismatics coins into an NPC-adjacent faucet. The dossier already flags this; keep the two coin systems separate. REJECT.
- from: companions:tesla_coil_block / voltaic_pillar (electrical deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the tesla/voltaic set is a thematic pillar of the Companions mod (electrical companion network); crushing it back to copper scrap destroys the set's identity for minimal loop gain. Tone survives but the power-to-benefit ratio is poor for a non-metal-specialty mod. REJECT.
REWORK: dossier economy candidate was M-09 luxury→coin (now retired) — confirm rejected per rework #163/#240. The three accepted links (M-11 spirit-fire, M-10 imbuement, M-34 combat-supply) give companions a survival + magic + economy(combat) triangle.

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — scoreboard datapack; zero items/blocks/methods. Pure cosmetic tab-list stat; no material surface to weave.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop — the Imbuing Table gate item) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hallowed_gem is already an arcane reagent by design (it powers over-cap enchantments); feeding it into the Ars imbuement apparatus makes it a cross-mod magic ingredient, so killing the Invoker boss pays off in both enchant-boosting and magic-production routes
- from: illagerinvasion:illusionary_dust (illusioner drop) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust from the illusioner mob is a ritual reagent for Occultism — illusion and spirit magic are obviously adjacent; a mid-tier illager boss-run yields a ritual catalyst
- from: illagerinvasion:platinum_chunk (rare illager drop) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum_chunk goes through Create's crusher into platinum dust (+ XP nugget byproduct), adding a new processed metal to the ore-doubling web and giving the illager economy a Create output
- from: illagerinvasion:hallowed_gem (Invoker boss gate) | via: boss-key gating on a complex recipe | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's hallowed_gem is the KubeJS gate key for a high-tier Create/tech recipe (e.g. a brass-tier automation component), making the Invoker a mandatory milestone for the tech spine — the pack's PvPvE loop rewards combat players with a progression gate
- from: illagerinvasion Imbuing Table service (enchant-boosting beyond vanilla caps) | via: service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the Imbuing Table is a specialization service — an enchanting specialist with access to hallowed_gems charges other players to run their gear through the table; the knowledge/resource gatekeeping creates a labor market without coin-faucet concerns
- from: illagerinvasion:platinum_chunk as scarce regional drop | via: GTMOGS regional gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk is a mob-drop, not an ore-gen output — M-30 is specifically a regional ore-gen gate via GTMOGS; mob drops are not region-locked by ore-gen, so the motif doesn't apply cleanly. REJECT on motif mismatch; the Create crushing link (M-03) captures the value of platinum without over-reaching into scarcity gating.
REWORK: dossier economy candidate was M-08 (coin) — re-examine: platinum_chunk could mint a rare coin via M-08 (player-pressed into Numismatics as a precious metal). That is a valid read but the M-15 boss-key and M-33 service links are stronger economy ties. M-08 for platinum is a weak candidate because platinum is a mob-drop rarity, not a regional ore the mint specialization controls. Leave M-08 as an optional follow-up.

## openpartiesandclaims   [anchors: support (1)]
- LEAVE — zero items/blocks/methods. Pure server protection/social framework; no material surface.

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — zero items/blocks/methods. Behavior compat patch between two installed mods; no material surface.

## createbigcannons   [anchors: Create, aeronautics (2)]
- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron — new metals in the common tag) | via: GTMOGS regional ore-gen gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: steel and cast iron are cannon-grade metals scarce enough to be region-differentiated; the player who controls a steel-rich region becomes the munitions supplier — the regional scarcity foundation drives the cannon economy
- from: createbigcannons finished shells / cartridges (consumable ammunition) | via: combat supply loop | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon shells are consumed in PvPvE combat; a munitions specialist manufactures and sells ammo to combat players who don't want to run the foundry — supply-side of the weapons economy
- from: createbigcannons:cannon_mount / barrel blocks (heavy structural castings) | via: aeronautics airframe recipes | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: cannon mounts are weapons, not structural airframe material — M-23 is for load-bearing hull/structural alloy; a cannon mount as an airframe ingredient has no coherent "of course" read. The existing aeronautics anchor comes from cannons *mounted on* ships, which is a functional placement, not an M-23 structural material. REJECT; aeronautics anchor is sound via placement.
- from: createbigcannons:nethersteel components (Nether-tier cannon metal) | via: create:sequenced_assembly multi-step chain | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: nethersteel cannon barrels deserve a deep multi-stage sequenced-assembly chain (anneal → bore → rifling → proof-test) — the endgame Create chain that turns a Create specialist into a premium cannon forge
- from: createbigcannons::steel_ingot → mint (Create-processed cannon-grade steel → player-pressed coin) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: steel is the cannon material first; having it mint as coin AND as a cannon input creates ambiguous value — the M-30 regional scarcity link already routes steel through the economy as a traded material. Adding an M-08 mint on top risks steel being "both coin metal AND cannon metal" with no specialisation distinction. REJECT — M-30 is the stronger economy tie for steel.
REWORK: dossier economy candidate was M-09 (luxury good → coin — now retired). Confirm rejected per #163/#240. The M-30 + M-34 + M-06 links above give createbigcannons a scarcity→economy→Create depth axis. Existing Create + aeronautics anchors are sound. OK — connections sound, adding three new links.

## voicechat   [anchors: support (1)]
- LEAVE — zero items/blocks/methods. Proximity voice comms infrastructure; no material surface to weave.

== CHUNK COMPLETE ==
