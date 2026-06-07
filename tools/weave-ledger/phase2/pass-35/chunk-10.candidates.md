# Phase 2 candidates — chunk-10

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: undead ice-variant flesh dissolves into a cold spirit essence — biomancy from the frozen dead is an obvious pairing
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-zombie flesh feeds a heat-aligned ritual spirit; the element is already there in the drop name
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: wart from a corrupt undead is a plausible Ars corruption-reagent — thematically sits squarely beside Ars' blight/undead spells
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: soul-fire haunting of cold-death flesh producing a chilled soul-byproduct is coherent and routes the bestiary through the Create web
- from: rottencreatures:corrupted_wart | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed corrupted wart yields a nether-spore dust useful as a dye or chemical intermediate — Create already crushes wart-family items
- from: rottencreatures mob heads (decorative) | via: loot-seed (loot tables) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mob heads (dead_beard, immortal, glacial_hunter) are combat trophies a combat specialist sells; the pirate/storm-lich variants are thematically prestige collectibles a non-fighter would pay for
- from: rottencreatures:treasure_chest drop | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the treasure_chest is a block spawned by Dead Beard; its loot is vanilla-style pirate loot — seeding pack-specific economy items into it would require knowing exact loot-table structure, and the generic "loot chest → coin" is a bare sell link falling under the retired M-09 logic; REJECT until a specific gated demand exists
- REWORK: the dossier's 2nd-anchor candidates both cited M-09 (luxury→coin, retired) and M-11/M-02 which are valid — the dossier flagging is partially stale on M-09. The M-02/M-11 routings above are the correct reformulation.

## do_a_barrel_roll   [anchors: support (client QoL) (1)]
LEAVE — pure client camera/movement mod with zero items, blocks, or recipe surface; the flight it modifies is vanilla elytra, not Create Aeronautics ships; nothing to route through any method. Support role confirmed.

## towntalk   [anchors: support (MineColonies flavor) (1)]
LEAVE — no items, no blocks, no recipe methods; audio-cosmetic layer riding MineColonies which carries the real weave; independent edge would be entirely contrived.

## sereneseasons   [anchors: survival (1)]
- from: season-gated crops (any seasonal fertility window) | via: create:milling or farmersdelight:cooking | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: out-of-season crops are rare enough to be worth milling for a higher-yield flour or cooking into a premium dish — the scarcity the season creates amplifies value through a processing step
- from: sereneseasons:season_sensor (redstone output) | via: config tie → Create contraption gearshift | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create automated farm reads the sensor and swaps crop varieties by season, turning the season clock into a real automation trigger a Create specialist wires up
- from: winter-scarce crop (e.g. pumpkin, wheat, off-season) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: an off-season ingredient harvested under snow is imbued with a seasonal attunement; "winter wheat" as a magic reagent is a classic folklore/alchemy trope and the M-16 motif is explicitly listed as a priority survival lever
- from: seasonal scarcity (general) | via: bare economy sell link | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: dossier's 2nd candidate explicitly cited M-09 (retired); seasonal scarcity does create trade-value but "it's sellable" is the ambient loop endpoint, not a weave — a real economy edge needs demand-gating (e.g. M-30 regional gate + M-26 consumption); reject until a specific cross-player demand gate is scoped
- REWORK: dossier candidate 2 uses M-09 (luxury→coin, retired) — should be rephrased as M-30 regional-scarcity gate or M-26 consumption sink if an economy anchor is later wanted. The season_sensor Create link is correctly framed but was listed as M-05 "native-method gating" in the dossier — that label fits since the sensor IS sereneseasons' own flagship device driving a Create method. OK on the stronger candidates; M-09 mention is stale.

## spawn   [anchors: survival (1)]
- from: spawn clam variants (color clams, catch via casting_net_clam) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling clam shells yields lime powder (calcium) and a pearl-dust pigment — the net-catch gives Create automation a fresh aquatic input distinct from ore processing
- from: spawn:angler_fish (aquatic drop) | via: farmersdelight:cooking + create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: anglerfish roe milled into a bioluminescent paste (for lamps or Ars reagent) is a coherent step up from the raw fish-to-food chain the dossier already documents; light-emitting aquatic creature → luminescent material is a "of course" pairing
- from: spawn seafood drops (crab, mussel, clam) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: aquatic critter essence from a spirit-fire transmutation — sea-spirits in Occultism's demonology model; crabs and clams as sacrificial aquatic offerings for a water-affinity ritual makes thematic sense
- from: spawn:date_log (new wood type) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: date palm is a distinct wood type; cutting board/saw processing into planks/sticks is the standard Create wood-integration step and makes the exotic wood part of the Create production web
- from: spawn seafood dishes (crab_boil etc.) | via: bare sell link | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 is retired; "exotic seafood is sellable" is the ambient endpoint, not a weave; a real economy edge needs a demand gate (e.g. diet-system nutrition pull via M-26 consumption sink, or a specific colony supply contract via M-28)
- from: spawn aquatic mobs (anglerfish, sea_cow, seal) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare aquatic drops (e.g. angler fang, seal pelt, sea_cow blubber) are combat-route trophies that a hunting/fishing specialist trades — a sea-specialist archetype distinct from land-combat
- REWORK: dossier 2nd candidate cites M-09 (retired) for seafood economy. dossier 3rd candidate (aeronautics via createfisheryindustry / M-12) is valid but already within Create; should be framed as "spawn critters are inputs to createfisheryindustry's bait_trap/peeling chain" — the M-12 link is real but routes through createfisheryindustry, not directly to aeronautics. Flag as cross-mod chain rather than a direct aeronautics anchor.
- OK — survival anchor is sound; the FD bridge is real.

## sable   [anchors: support (library/physics backend) (1)]
LEAVE — zero items, zero blocks, zero recipe methods; the Rapier physics engine backing Aeronautics is infrastructure, not content; weaving happens in the mods built on top of it (Create Aeronautics, aeronauticscompat); no independent edge is possible or warranted.

## createfisheryindustry   [anchors: create, survival (2)]
- from: createfisheryindustry:fish_skin (leather substitute) | via: create:pressing or create:deploying | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: fish-skin pressed into a treated-hide panel via Create deployer — an industrial tannery step giving the fishery a material-processing chain beyond just food; fish_skin is already a leather-like, routing it through Create's press makes the substitution explicit and craft-depth-appropriate
- from: createfisheryindustry seafood dishes (chowder, lobster soup) | via: colony supply demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists consume food for morale; sealing chowder/lobster soup as colony-preferred food creates a steady demand the fishery specialist fills — a real cross-route dependency between seafood production and colony upkeep
- from: createfisheryindustry:harpoon (combat tool) | via: loot-seed or createbigcannons compat | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: harpoon is already a survival tool (diving leggings + harpoon are in the survival anchor); adding a combat-supply link would just deepen within the existing anchor rather than genuinely opening a second system; no-motif new-edge value — reject, survival is covered
- from: createfisheryindustry bait/trap components | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: trap/bait are machine blocks (mid-tier), not endgame flagship items; M-06 sequenced-assembly is explicitly for endgame multi-stage chains — forcing the bait_trap into a sequenced chain would over-deepen an everyday component; violates the "depth scales with power" rule
- REWORK: dossier 2nd candidate uses M-09 (retired luxury→coin) for seafood dishes. Replace with M-28 colony-supply demand as accepted above (colony food consumption is the concrete demand gate). OK — the two existing Create/survival anchors are sound.

## charta   [anchors: survival (1)]
- from: charta:card_table (social play) | via: economy service-for-hire framing | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the card table is a player-run wagering venue — a "dealer" host earns numismatics coin by running games; that's a labor/service specialization (a tavern-keeper archetype) with emergent payment, which is exactly M-33's player-economy labor axis; no NPC faucet, purely player-to-player
- from: charta bar furniture (bar_stool, bar_shelf, card_table) | via: create:cutting (sawmill) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: fancy bar furniture is a deco item with a Create production step — sawmilling premium wood into bar-stool blanks is a light one-step chain that roots the tavern set in the Create production web without over-deepening an everyday deco piece
- from: charta:empty_wine_glass / empty_beer_glass | via: create:filling (with vinery/alcohol wine) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: filling Charta's decorative glasses with actual Vinery wine or Alcohol Industry beer via Create's filling method turns purely decorative glasses into a real supply-chain prop — a tavern that needs filled glasses creates demand for the drink production chain
- from: charta card-game gambling "wager" concept | via: bare coin-sink framing | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is retired; even though gambling IS a consumption sink, without a concrete Numismatics hook in the mod itself it's a "would need custom KubeJS" story; the M-33 service-for-hire framing above already captures the economy angle without depending on a built-in betting mechanism Charta doesn't have

## sable_sa_compat   [anchors: support (compat patch) (1)]
LEAVE — zero items, zero blocks, zero recipe methods; a behavior patch bridging Create: Stuff 'N Additions gadgets to Sable ship physics; no content surface; genuine zero-surface compat glue.

## mcwstairs   [anchors: support (decoration palette) (1)]
- from: mcwstairs stone/brick stair variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone/brick balcony and railing variants crushing back to gravel/raw stone + an XP nugget is the standard deco-recycle pass and is explicitly noted as the M-04 pattern; light, lossy, one step — exactly right for an everyday deco block
- from: mcwstairs wood railing/balcony variants | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wooden railing and platform variants yielding planks + sawdust on cutting is coherent and mirrors the standard Macaw's family deco-through-Create pass; gives the entire wood-railing range a Create production home
- from: mcwstairs brick/stone variants | via: create:crushing (blanket deco pass) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: this is the same M-04 pass as the first row but stated separately as "blanket" — redundant with the stone-variant row above; one M-04 accept per material family is enough; REJECT the duplicate framing, not the concept
- NOTE: this is a decoration-support mod; per briefing, the weave is only warranted "as part of a wholesale deco-family pass"; the two accepted rows above are exactly that scope — one for stone, one for wood.

## createthreadedtrains   [anchors: support (performance) (1)]
LEAVE — no items, no blocks, no recipe methods; a server-side threading optimization for Create railway calculations; the weave (trains as logistics backbone) happens in Create itself; no independent content surface.

## prickle   [anchors: support (library/API) (1)]
LEAVE — genuine zero-content config-format library; no items, no blocks, no recipe types; the definition of a code library LEAVE case.

## gravestone   [anchors: survival (1)]
- from: gravestone:obituary (death record item) | via: create:mechanical_crafting or loot-seed | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: while a "death record" could theoretically be a service artifact (a bounty hunter marks a kill, proof of a contract fulfilled), the obituary has no gameplay hook beyond its built-in death-log function; wiring it as a contract token requires KubeJS custom logic with no native method to route through — no-motif as a natural weave; forced and contrived; REJECT
- from: gravestone:gravestone (the tombstone block) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the gravestone is not a decorative block a player crafts in bulk — it's a single-spawn death-utility item; M-04 deco-recycle applies to production-palette blocks, not to functional utility blocks that appear once per death; applying crushing here is thematically odd and mechanically pointless; REJECT
LEAVE — the mod's content (gravestone block + obituary) is entirely functional utility for the death loop with no material graph; any weave would be contrived; supports the briefing's "no coherent 2nd anchor" criterion.

## voicechat   [anchors: support (1)]
LEAVE — zero items, zero blocks, zero recipe methods; proximity voice infrastructure; no content surface; genuine support-role LEAVE.

## lootjs   [anchors: support (library/QoL) (1)]
LEAVE — zero items, zero blocks, zero recipe methods; a KubeJS scripting library for loot-table manipulation; it is the *enabler* of M-02/loot-seed weaves (the tool Phase 3 will use to author them) but is itself not a node; pure dev tooling LEAVE.

## dtterralith   [anchors: survival (worldgen flavor / compat) (1)]
- from: dtterralith unique tree seeds (cedar, jacaranda, kapok, maple, giga_spruce) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic biome-specific seeds milled into rare wood pulps or resins (cedar resin, jacaranda pigment) — the biome-specific tree variety provides a regionally differentiated material that ties into scarcity and the Create processing chain; a giga spruce milled differently from vanilla spruce fits the GregTech-style "more steps = more valuable" model
- from: dtterralith exotic log types (cedar, jacaranda, kapok) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: distinctive Terralith-biome logs producing distinctive planks via Create's saw; ties the exotic biome's wood to the production spine and gives a woodworker a reason to travel to those biomes (M-30 regional flavor — cedar only in Terralith's redwood biome, etc.)
- from: dtterralith exotic seeds | via: worldgen/spawn only | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Terralith-biome-exclusive tree species are region-locked by definition — a jacaranda log only grows in Terralith's jacaranda valley; that makes the exotic plank a regional trade good consistent with M-30's scarcity gate
- from: dtterralith tree seeds | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: the seeds are trees, not crops, and Serene Seasons fertility doesn't gate tree growth (only crops); linking them to M-16 seasonal reagent is a stretch — trees aren't seasonally locked in the same way; theme clash between "deciduous tree seed" and "seasonal magic reagent"; REJECT
- NOTE: dossier already recommends LEAVE; these ACCEPT rows challenge that by noting the seeds/logs ARE distinct items with a real regional-scarcity identity. The LEAVE recommendation was for "worldgen compatibility layer" but the mod does register 33 unique seeds and 104 leaf blocks — there IS content surface. The M-12/M-30 candidates are valid for a wholesale Terralith-biome woodworking pass.








