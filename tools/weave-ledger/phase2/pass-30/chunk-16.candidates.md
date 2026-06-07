# Phase 2 candidates — chunk-16

## cmpackagepipebomb   [anchors: create (1)]
- LEAVE — single-gimmick PvP prank addon (explosive package trap); no items that could anchor to a second pillar, no loot, no processing methods. Tiny novelty content riding Create's package system; a forced second-anchor edge would be noise.

## formations   [anchors: survival (1)]
- from: formations structures (altars, ruins, campsites) | via: loot-seed | to: survival↔magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: ruined altar chests carry a fragment of spider fang or runic dust — explorers gather the reagents that mages need
- from: formations structures | via: loot-seed | to: survival↔economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: scattered ruins seed low-tier sellable find (old coin, raw ore fragment) that an explorer specialist trades to production players who never venture far
- from: structures palette (uses vanilla/modded blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: formations adds no blocks of its own — it places existing world blocks; crushing is not attributable to this mod, so this edge is a null operation

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:backpack_tank (portable fluid buffer) | via: travelersbackpack:backpack_upgrade (upgrade slot method) | to: aeronautics | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: a fluid-tank backpack lets an Aeronautics crew member carry extra fuel mid-flight — the tank upgrade is a consumable slot that feeds the airship supply loop (consumption demand for upgrades never zeroes)
- from: travelersbackpack upgrade tier (tank/crafting/smelting upgrades) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the tank upgrade module is fabricated as a Create sequenced component — sheet metal + valve, multi-step — making the mid-tier explorer kit depend on the production spine
- from: travelersbackpack:backpack (leather/wool mob-themed packs) | via: create:pressing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: pressing is a sheet-metal operation; applying it to leather/wool packs is tonally forced — deploy-application (M-20) is for mechanical upgrades, not fabric items. Everyday tier should stay vanilla-table. Reject.
- REWORK: existing 2nd-anchor candidate listed as WEAK — the aeronautics link via M-26 (consumption of tank upgrades in the airship supply chain) is a valid cross-pillar connection; should be elevated. The sequenced-assembly suggestion (M-06) is also coherent and survivable. Recommend promoting both as formal weave proposals rather than leaving them as weak candidates.

## copperagebackport   [anchors: survival (1)]
- from: minecraft:copper_chest / copper deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper deco crushes back to raw copper + xp nugget — the entire copper build set folds into the Create copper-processing economy (lossy, so stockpiling doesn't trivialize it)
- from: minecraft:copper_golem_statue (item-sorting mob) | via: minecolonies integration | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the Copper Golem's chest-to-chest hauling is a low-tech colony logistics assistant — a MineColonies-accessible sorter that is cheaper/earlier than Create's mechanical belts, giving colonies a route into the item-flow economy before full Create automation
- from: copper tools + armor set | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already captures the copper-deco crush under M-04; tools/armor crush is the same motif repeated — redundant, not a new anchor. One M-04 edge is enough.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Black Recluse's fang is transmuted in Occultism spirit-fire into a spider-essence reagent — dungeon exploration becomes a magic-reagent source
- from: undergroundworlds:desert_charm / antidote_flask (immunity accessories) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbue the desert charm with source to upgrade it into an enchanted amulet slot item — the dungeon-loot tier feeds the magic progression, not just combat
- from: undergroundworlds boss loot (dungeon chests) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the blade_of_the_jungle and freezing tools are rare enough that only combat specialists farm them and trade to builders/crafters who can't reach the deep dungeons
- from: undergroundworlds temple/pyramid bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the M-04 deco-recycle is a valid motif but these are niche biome-specific bricks — better treated as part of a wholesale deco-crushing pass rather than a targeted weave; adding it here in isolation adds noise. Flag for a bulk deco pass; reject as a standalone weave.

## openpartiesandclaims   [anchors: support (1)]
- LEAVE — zero-item, zero-block server-protection framework; no material surface for any method-routing. The mod underpins the pack's cooperative territory premise as infrastructure, not a content pillar.

## domum_ornamentum   [anchors: decoration/MineColonies support (1)]
- from: domum_ornamentum:architects_cutter (accepts any full block as input) | via: domum_ornamentum:architects_cutter | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies colonists use the Architect's Cutter to produce colony buildings' decorative blocks — the cutter is a colony production method, feeding the colony-route economy with dressed stone and timber-frame facades without manual player crafting
- from: Create-palette stone (andesite/deepslate-processed/etc.) | via: domum_ornamentum:architects_cutter | to: create↔decoration | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is a crushing/recycle motif; the Architect's Cutter is not crushing — it's fabrication of new deco. The motif doesn't fit. The palette-bridge is real, but it's thematic convenience (any pack player already does this) rather than a cross-system weave with a motif. No-motif → reject.
- from: domum_ornamentum deco blocks (framed/shingles) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: framed and shingled ornamental blocks crush back to their source stone + xp nugget — the combinatorial deco palette doesn't dead-end, it recycles back into Create's material web (lossy, anti-exploit)
- REWORK: dossier's 2nd-anchor is listed as WEAK-MED and thematic-only for the cutter+Create edge. The M-28 colony route (Architect's Cutter as a colony production method) is stronger than described and should be the primary second anchor. Elevate.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-teleport QoL fix; no items, no blocks, no loot, no methods. Pure convenience tweak with zero content surface.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single joke music disc (one item, loot=yes but no loot table of note); disc plays in a jukebox like any vanilla disc. Forcing a recipe/economy edge onto a meme flavor item would be noise. The loot=yes flag is a jar artifact, not a real loot-table drop source.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (Soul Furnace output from rotten flesh) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood feeds Occultism spirit-fire, pulling the Soul Furnace's alchemy into the pack's magic web — the gothic-alchemical loop connects to the broader magic pillar
- from: companions:soul_gem (diamond→Soul Furnace output) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a Soul Gem is imbueable as a source-infused focus component — the Companions' gem-crafting and Ars Nouveau's imbuement share an arcane tone that survives the red-team
- from: companions copper/nether/end coins | via: numismatics | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: companions' coins are a SEPARATE internal currency system for its own companion/shop loop; bridging them into Numismatics would create an NPC coin faucet (Companions' mobs generate coins that would then convert to Numismatics currency, violating the player-minted M-08 framing). Two coin systems should remain separate; the dossier flags this as a coin-competition risk.
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: numismatics vendor | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold is a boss-drop rare that only combat specialists can farm and sell to builders/crafters — the boss dual-role (M-34 supply side) feeds the player economy without an NPC faucet
- from: companions Tesla/voltaic deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the voltaic/tesla blocks are copper-based infra; while M-04 (crush to raw+xp) is valid for copper blocks in bulk, this is a thin edge on an already-complex mod. Better handled in a wholesale deco-crush pass. Reject as a standalone weave to avoid diluting the stronger magic connections.
- REWORK: dossier lists the M-09 luxury-good→coin candidate — M-09 is RETIRED. The economy connection for Companions should be M-34 (combat-route supply of Relic Gold, boss drops as trade goods) rather than a direct coin link. The M-11/M-10 magic connections are the primary weave and should be promoted.

## fogoverrides   [anchors: support/client (1)]
- LEAVE — config-only visual fog tuning; no items, blocks, or loot. Pure atmosphere mod with no content surface for any method-routing.

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics IS the economy pillar's keystone; it already holds 2 anchors (economy + Create). The weaving direction is always *inbound* (foreign goods → numismatics vendor) via M-08. The dossier correctly flags it as the hub destination, not an outgoing source. No new cross-system links needed; no REWORK items.

## cloth_config   [anchors: support/library (1)]
- LEAVE — config-screen API library; no items, no blocks, no gameplay content. Zero surface for any method-routing.

## sable   [anchors: support/library (1)]
- LEAVE — physics engine library (Rapier backend for Create Aeronautics sub-levels); no items, no blocks, no gameplay content. The weaving happens in the mods that build on top of Sable, not in Sable itself.

## edf-remastered-5.0-beta4   [anchors: survival/boss (1)]
- from: Ender Dragon (harder fight, more HP, phases) | via: loot-seed | to: survival↔economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the harder dragon fight makes the Ender Dragon's vanilla drops (dragon egg, dragon breath) scarcer and more valuable — a combat specialist who can kill the 500HP dragon farms dragon breath for magic reagents that non-combat players need
- from: Ender Dragon fight (500HP, multi-phase, minion summons) | via: loot-seed | to: survival↔magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: clearing the enhanced Dragon fight is the endgame gate — seed a boss-key item into the dragon loot table that unlocks a high-tier Create/magic recipe (datapack edit to dragon loot table; the mod already touches the fight's behavior)
- REWORK: dossier says LEAVE and flags "no items, doesn't touch dragon drops." The loot=yes flag on the jar confirms a loot table exists. The correct Phase-3 action is a datapack loot-seed into the dragon's existing loot table — no new mod content needed, just a Phase-3 datapack addition. Dossier's LEAVE is overly conservative; M-34 and M-15 are the handles.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-side shape-outline rendering helper; no items, no blocks, no loot, no gameplay methods. Pure build-assist visual overlay with zero content surface.

## sablecollisiondamage   [anchors: support/aeronautics (1)]
- LEAVE — behavior-only physics collision-damage addon for Sable/Aeronautics; no items, no blocks, no loot. The aeronautics pillar gains PvPvE weight from it, but there is no content surface to route through any method.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs stone/brick stair variants (andesite/blackstone/brick families) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone and brick stair/railing blocks crush back to raw stone + xp nugget — the large deco set doesn't dead-end; it recycles into Create's material web (same lossy anti-exploit logic as other deco mods)
- from: mcwstairs wood stair variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood doesn't crush coherently in the Create palette (crushing gives raw/gravel-equivalent; wood → planks is already vanilla); applying M-04 to wood variants is a forced extension of a stone-only motif. Only stone/brick/mineral families fit M-04 — reject the wood half.

## emojitype   [anchors: support/client (1)]
- LEAVE — client-only Unicode emoji input helper for chat; no items, no blocks, no gameplay content. Zero surface for any method-routing.

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — behavior-only compat patch between Create: Stuff 'N Additions and Sable; no items, no blocks. The aeronautics pillar benefits from it, but there is no content surface to route through any method.

== CHUNK COMPLETE ==
