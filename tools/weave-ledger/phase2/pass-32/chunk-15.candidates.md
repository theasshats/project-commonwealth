# Phase 2 candidates — chunk-15

## bountiful   [anchors: economy (1)]

Power-read: bounty boards are the quest-dispatch layer. The board itself consumes player-delivered items and credits kills; the reward pool is config-driven. Existing dossier candidate M-08/M-09 notes are present, but M-09 is retired and M-14 is cut. The real question is whether Bountiful can gate demand (qualify under active economy motifs).

- from: bountiful bounty objective pool | via: config/datapack Decree targeting pack-specific goods | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounties call for Create-processed goods, Ars reagents, or seasonal crops — the board turns pack production surplus into an explicit demand sink, renewing consumption cycle.
- from: bountiful reward pool | via: config Decree reward set to numismatics:cog/spur | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: Numismatics coin as a bounty reward is an NPC coin faucet (currency enters from outside the player economy — board → player with no player-minted origin). M-08 is player-minted currency via Create → numismatics; having an NPC board pay out coins directly contradicts the player-run ruling. M-14 (cut) was exactly this pattern. Reject.
- from: bountiful bounty objective pool | via: loot-seed / Decree targeting boss-route drops | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Decrees aimed at combat-route drops (boss materials, rare mob loot) make the bounty board a structured demand node for the combat specialist's output — a player-run supply/demand signal, not an NPC faucet.

REWORK: existing candidate "set bounty payout to numismatics:cog/spur" — this is the M-14 pattern (NPC coin faucet); reject it on economy-is-player-run grounds. The live anchor is economy via demand-gating (M-26/M-34), not reward payout.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: loot=yes, structure-only. No items/blocks. Dossier says leave. Briefing says reach for a loot-seed before LEAVE on any loot-bearing mod.

- from: trek structure chest loot tables | via: loot-seed (datapack edit) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: seeding Numismatics coin into chest loot is an NPC coin faucet — coin materialises from a chest with no player-minted origin. Player-run ruling rules this out (M-14 pattern, now cut). Coin loot ≠ player-minted.
- from: trek structure chest loot tables | via: loot-seed (datapack edit) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars source_gem fragments, Iron's arcane_essence, or raw Occultism materials into trek dungeon chests pulls exploration into the magic production route — finding a ruin funds your arcane start.
- from: trek structure chest loot tables | via: loot-seed (datapack edit) | to: Create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare blueprint scroll or Create-specific component seeded into a trek fortress loot table makes exploration a source of tech progression — discovery of a ruin unlocks a machine recipe.

## timm   [anchors: support/QoL (1)]

Client-only UI, no items/blocks/loot. Genuine zero-content surface.

- LEAVE — client-side biome-title overlay, no items/blocks/recipes/loot; nothing to route.

## create_pattern_schematics   [anchors: Create (1)]

Pure build-tooling QoL. Three items, no recipe-types. No foreign material surface.

- LEAVE — Create-internal build-automation tool (schematics); no material to weave outward and no method to pull foreign material through.

## trading_floor   [anchors: Create, economy (2)]

Already at 2-pillar goal. Power-read: the Trading Depot automates villager trades onto Create belts. It's the bridge between automation and emerald/enchant acquisition.

OK — connections sound. Already anchors Create (hard dep, it IS a Create depot) and economy (automated trade is its entire purpose). The dossier's note that it feeds M-08 via processed goods → emeralds is coherent — no REWORK needed. No third anchor would add meaning; the mod's loop contribution is clear.

## mysterious_mountain_lib   [anchors: support/library (1)]

Genuine zero-content code library.

- LEAVE — pure code library (base classes, registry helpers, FoodInfo compat for MMF-Group mods); no items/blocks/recipes/loot to weave.

## betteroceanmonuments   [anchors: survival (1)]

loot=yes, zero registry items. Structure overhaul. Dossier says leave, citing "no registry items." The briefing overrules a bare LEAVE for loot-bearing mods — check loot-seed candidates.

- from: ocean monument chest loot tables | via: loot-seed (datapack edit) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: coin-in-chest is NPC faucet. Rejected same as trek.
- from: ocean monument chest loot tables | via: loot-seed (datapack edit) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding aquatic-magic reagents (e.g. source_gem fragments, Occultism spirit_shard) into monument chests ties deep-ocean exploration to the magic production route — dangerous dive, arcane payoff.
- from: ocean monument chest loot tables | via: loot-seed (datapack edit) | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: ocean monuments aren't a thematic home for tech blueprints (prismarine + guardian = aquatic/arcane vibe); forcing a Create key here is a tone clash. Reject on theme.

## mcwroofs   [anchors: support/decoration (1)]

605 blocks. No methods. Stone/brick variants are crushable. Dossier flags M-04 as weak for 600 blocks.

- from: mcwroofs stone/brick roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: while mechanically valid (M-04 is established for deco↔Create), applying it to 600 individual roof blocks is exhausting to author and low design signal — a player building a factory won't be un-crafting roof tiles to recover gravel. Value/effort ratio doesn't justify the recipe pass. Dossier correctly flags this as low-value; confirm LEAVE on this vector.

- LEAVE — sanctioned decoration palette; no weave adds design value at reasonable authoring cost. A wholesale deco-crush sweep would dilute M-04's signal.

## simplehats   [anchors: support/cosmetic (1)]

351 hat items, grab-bag system, two registered recipe-types (custom_hatscraps / custom_hatvariants). loot=no in jar counts but grab-bags drop from mobs/chests per dossier.

- from: simplehats rare hats / grab-bags | via: loot-seed into boss/dangerous-mob loot tables | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding rare grab-bags into boss loot tables or dangerous-mob drops makes cosmetic flair a reward for engaging the combat/danger face of survival — combat specialist trades rare hats as a prestige good.
- from: simplehats:hatscraps (recycling mechanic) | via: simplehats:custom_hatscraps → economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the scraps system is self-contained cosmetic recycling; it doesn't consume against pressure or create cross-system demand. No economy link gates demand. Reject — the loop doesn't pass through here.
- from: simplehats rare hats | via: Bountiful Decree (target rare hat as bounty objective) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board Decree asking for rare hats turns cosmetic prestige goods into a player-economy demand node — the hat collector becomes a buyer in the hat-drop market, giving the combat specialist a named customer.

## l2library   [anchors: support/library (1)]

Genuine zero-content code library.

- LEAVE — shared library for LightLand mods; no items/blocks/recipes/loot to weave.

## detect-afk-1.2.2   [anchors: support/QoL (1)]

Server admin utility. No items/blocks.

- LEAVE — behavioral server-side AFK utility; no items/blocks/methods/loot; nothing to route.

## bits_n_bobs   [anchors: Create, survival (2)]

Already at 2-pillar goal. 123 blocks, 85 items. Already made-by create:item_application + create:splashing. Dossier proposes M-04 deco→crushing as optional reinforcement.

- from: bits_n_bobs tile/chair blocks (stone/metal variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player who over-built an andesite-tile wall or swapped chair colors can crush the surplus back to crushed andesite + XP nugget — the Create deco loop closes without waste, a satisfying industrial housekeeping step.

REWORK: none — existing anchors (Create + survival as broad decoration) are coherent. The made-by create:item_application/splashing already weaves it inbound. M-04 reinforces rather than corrects.

OK — connections sound (Create via sequenced_assembly / item_application / splashing inbound; survival via deco breadth). M-04 crush-back is an optional tightening, not a correction.

## galosphere   [anchors: survival (1)]

Already the richest 1-anchor candidate in this chunk. Dossier explicitly lists magic (M-07, already established as the reserved reagent), economy (M-08, palladium mint), and Create (M-03 ore-doubling + M-04 deco-crush) as candidates.

- from: galosphere:palladium ore / raw_palladium | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a scarce regional metal (CLAUDE.md confirms regional ore-gen); running it through a Create crusher doubles yield — the tech player's incentive to process before smelting, tying a rare cave-biome metal to the Create production spine.
- from: galosphere:palladium ingot (Create-processed) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is regionally scarce and Create-refined; a player who controls that cave region mints palladium-based coins — the settlement-medium specialist controlling a rare metal is exactly the scarcity→economy arc.
- from: galosphere:allurite_shard / lumiere_shard | via: host magic method (ars_nouveau:imbuement, occultism:ritual) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: already the reserved attunement catalyst in the ledger (M-07 established in 33/80/97); confirming here as this chunk's read. The crystalline cave aesthetic makes shards as magic catalysts completely coherent.
- from: galosphere deco bricks (allurite_bricks, amethyst_bricks, opal_bricks, pink_salt) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the same lossy-crush-back-to-gravel loop as other deco mods; fits M-04 cleanly and makes cave-deco blocks a recyclable build material rather than permanent waste.
- from: galosphere:silver_ingot (palladium) | via: unification warning | to: — | motif: — | power: — | tone: clash | verdict: REJECT | reason: ⚠ NEVER unify galosphere:*silver* as silver (CLAUDE.md hard rule); the real silver is occultism. Any weave that routes galosphere's palladium as c:ingots/silver is a silent wrong-material merge. Not a weave proposal — flagging as a reagent-ownership guard.

REWORK: none on existing connections; survival is the correct single anchor. The 2nd-anchor goal is met by the accepted proposals above (Create via M-03/M-04, economy via M-08, magic via M-07 already established).

## toomanypaintings   [anchors: support/decoration (1)]

No items/blocks/loot. Pure GUI painting-picker. Genuine zero-surface.

- LEAVE — decoration palette (paintings); no items/blocks/methods/loot to route through any system.

## ctl   [anchors: Create, aeronautics (2)]

Already at 2-pillar goal. Made-by create:sequenced_assembly. Loot=yes but likely just from the loot-table jar scan, not chest loot meaningful to weave.

OK — connections sound. Anchors Create (sequenced_assembly inbound) and aeronautics (functional train/contraption lighting) cleanly. No third anchor adds design value — the mod's role is fulfilled. No REWORK.

## entity_texture_features   [anchors: support/client rendering (1)]

No items/blocks/loot. Client rendering engine.

- LEAVE — client texture-feature engine for OptiFine resourcepack compat; no items/blocks/methods/loot to route.

## ars_nouveau   [anchors: magic (1)]

Richest magic mod in the pack — 18 recipe-types, 199 blocks, 446 items, 7 biome-modifiers. The dossier flags survival (M-02 via Vitalic/Agronomic Sourcelink) and magic-internal (M-01/M-10) as candidates. The 1-anchor status (magic only) is the gap to address.

- from: any farm/mob-surplus (crops, mob drops, babies) | via: ars_nouveau:agronomic_sourcelink / vitalic_sourcelink (native passive sink) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a farmer's surplus crop growth or a rancher's mob-kill tally feeds Source generation natively through Ars' sourcelinks — every survival-side producer is a passive magic-power supplier; the loop runs without a recipe.
- from: foreign magic essences (irons_spellbooks:arcane_essence, occultism drops) | via: ars_nouveau:imbuement | to: magic (cross-magic) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: the three magic mods converge on one currency hub — foreign essences mint into/out of source_gem via imbuement, making magic a coherent cross-mod web rather than three isolated islands. Already established in the ledger as M-01 spine.
- from: ars_nouveau:source_gem (magic currency) | via: ars_nouveau:enchanting_apparatus | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: requiring source_gem as a reagent input in high-tier Create machine recipes (e.g. a precision component needing arcane infusion) makes a Create specialist dependent on a magic supplier — the cross-route dependency that forces trade.
- from: seasonal crops (Serene Seasons gated) | via: ars_nouveau:agronomic_sourcelink | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a seasonal crop grown only in summer feeding the Agronomic Sourcelink makes Source supply seasonal — the magic specialist's power fluctuates with the calendar, coupling magic pressure to the survival/seasons driver.
- from: ars_nouveau:enchanting_apparatus output (enchanted goods) | via: player trade / service | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the enchanting specialist performs enchanting-for-hire — other players bring their gear, the Ars player runs the apparatus, payment is emergent; no vendor, pure labor-axis economy.
- from: ars_nouveau:source_gem | via: numismatics mint as coin input | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: source_gem is the reserved magic-currency hub (M-01, reagent-ownership table); reassigning it as a numismatics mint feedstock introduces a double-spend (it's the arcane settlement medium, not a raw commodity to coin). Reject on reagent-ownership grounds.
- from: ars_nouveau spell scrolls / special reagents | via: ars_nouveau:imbuement gated on Create-processed part | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-tier Ars spell component (e.g. Tier-3 book upgrade) requires a Create-fabricated brass/andesite alloy part as an imbuement ingredient — the magic pilgrim needs a tech ally to advance, making the two production routes interdependent.

REWORK: existing "economy via numismatics — source_gem or spell scrolls as a sellable arcane good [WEAK, M-09]" in the dossier — M-09 is retired; reject this candidate explicitly. The economy link instead runs through M-33 service (enchanting-for-hire) and M-29 cross-route dependency.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

Cosmetic particle-only mod. 184 "items" are particle holder entries, not usable items. loot=yes from jar scan but that's the particle registrations, not chest loot.

- LEAVE — cosmetic combat particle/sound emitter; no usable items, blocks, methods, or meaningful loot tables to route through any system.

## smokeleafindustries   [anchors: survival (1)]

12 registered recipe-types. Rich method set (drying→grinder→extractor→liquifier→synthesizer). FE generator. Closed-loop on its own hemp/strain items. Dossier flags economy (M-09, retired), Create FE bridge (M-05), and Create milling (M-03/M-12).

- from: smokeleafindustries raw hemp buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hemp runs through a Create millstone as an alternate to the hand grinder — routing the harvest chain's first step through the Create spine gives a tech player a reason to care about the strain farm, and ties the isolated FE cluster into the Create production web.
- from: smokeleafindustries FE generator | via: createaddition:liquid_burning or FE↔kinetic bridge | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf generator produces FE; Create Addition bridges FE↔Create rotation — feeding that FE into a Create-powered network (or vice-versa: running a Create shaft into the grinder tier) makes the strain farm a node on the tech spine rather than an isolated island. The mod's own machines run on its FE, so a bridge input/output is the natural seam.
- from: smokeleafindustries strain extracts/gummies (effect-granting edibles) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a concentrated hemp extract is arcane-infused in Ars' imbuement chamber to produce an enhanced magical consumable (e.g. a focus-clarity potion feeding a spell-power buff) — thematically the herbalist's craft meets arcane refinement; tone is acceptable in a quirky magic-tech pack.
- from: smokeleafindustries refined extracts | via: Bountiful Decree bounty objective | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards demand refined strain extracts (consumption sink) — the specialist strain farmer fills board contracts, creating repeating demand that never zeroes out.
- from: smokeleafindustries strain extracts | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: strain extracts aren't a metallic commodity suitable for minting; M-08 is specifically about scarce regional metals Create-processed into player-minted coinage. Extracts as a mint feedstock doesn't fit the motif's mechanism or theme. Reject; the economy link routes better through M-26 consumption demand.
- from: smokeleafindustries dealer/stoner villager trades | via: trading_floor:trading_depot | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Trading Depot automates the smokeleaf dealer trades onto Create belts — the strain farmer feeds a belt, the depot trades it, output flows to a Create logistics run; this folds the FE-island farm into the Create-economy web at the distribution layer.

REWORK: dossier candidate "economy via Numismatics — M-09 luxury-good→coin [STRONG]" — M-09 is retired; reject. The real economy link is M-26 consumption demand (bounty contracts) and M-29 cross-route (Trading Depot automation). M-05 (Create FE bridge) replaces the isolated-island risk.

## shulkerboxtooltip   [anchors: support/QoL (1)]

Client-side tooltip only. No items/blocks/loot.

- LEAVE — client container-preview tooltip; no items/blocks/methods/loot to route through any system.

== CHUNK COMPLETE ==
