# Phase 2 candidates — chunk-06

## everycomp   [anchors: support/decoration (1)]
- LEAVE — pure runtime-generation support mod; no items, no recipe-types of its own, no material surface to weave. Its outputs are variants of host mods' blocks and already ride those mods' recipes. Any weave belongs to the host, not here.

## durabilitytooltip   [anchors: support/client-UI (1)]
- LEAVE — zero items, zero recipe-types, client tooltip overlay only. No material surface; nothing to route.

## createoreexcavation   [anchors: Create (1)]
- from: vein-table (infinite ore output) | via: vein KubeJS config → regional ore assignment | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Ore veins are per-chunk and finite-rate — locking regional metals (coin-grade scarce ores like silver/palladium, createnuclear uranium) to specific biome chunks makes the driller a regional-scarcity node, so coin-grade output can only be minted where the vein exists; forces trade
- from: drill-head items (drill / diamond_drill / netherite_drill) | via: create:mechanical_crafting or create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: Netherite-tier drill head assembled as a multi-stage Create chain — the drill itself earns its depth through fabrication steps
- from: vein-table output | via: vein recipe seeding | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Add Ars source-gem precursor ore or occultism-specific crystal ore to the vein table, so a magic-route player needs a driller (or a trade) to sustain their reagent supply — cross-route dependency between Create-mining and magic production
- from: raw ore output | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Vein raw ores are already tagged — crushing them through Create gives the standard doubled-ore reward, making the drilling machine a direct feeder for Create's ore-doubling chain (already established; recording as the clean inbound route)
- from: aero-fuel ore (e.g. createnuclear uranium) | via: vein assignment → createoreexcavation:vein | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: If uranium vein output feeds the nuclear/fuel chain for Aeronautics engines, the drilling machine becomes load-bearing for the airship fuel supply — makes ore automation a prerequisite for long-haul flight
- REWORK: existing dossier 2nd-anchor note flags only "economy via coin-grade scarcity" as a pack-design lever — that is M-30 and real; but the M-29 cross-route (magic reagent in a vein) and M-06 drill-head fabrication depth were not recorded. The aeronautics fuel link (M-13) is also unmapped. Three concrete ACCEPT links added; existing note is too thin.

## patchouli   [anchors: support/library (1)]
- LEAVE — guide-book library only; its `shapeless_book_recipe` just creates a book item; no material surface, no foreign processing sink. Any weave (e.g. locking an Ars/Occultism guide behind a Create part) would be forced and irritating.

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:pressing or create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: Console components are assembled parts — a pressed copper plate and a crafted circuit board from Create makes the gaming console sit naturally in the Create gadget tier, not a vanilla craft
- from: gamediscs:gaming_console | via: tacz:gun_smith_table_crafting or thematic: traded as entertainment | to: economy | motif: M-33 | power: everyday | tone: clash | verdict: REJECT | reason: "service" motif requires labor on another's materials; a console is a finished good, not a service. Bare sell is M-09 (retired). No clean economy gate without forcing it.
- from: gamediscs:game_disc_* (mob-kill drops) | via: loot-seed — skeleton kill gimmick already defined per-mob | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the disc-from-skeleton-kill is an inherent mechanic (Bee/Slime/Frog/Rabbit killed by Skeleton → disc). It's already a survival/danger loop — the disc IS the mob drop. No new weave needed; this is already the mechanic.
- Note on M-05 accept: one light step is appropriate (everyday item); a sequenced-assembly chain would over-gate a novelty toy.

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — tooltip display mod; reads existing tool stats, ships no items or tags. Nothing to route.

## exposure   [anchors: Create, survival (2)]
OK — connections sound. The existing Create sequenced-assembly film development + deployer-tended stands gives Create+survival anchors. The dossier's optional M-09 note is moot (M-09 retired).
- from: exposure:aged_photograph | via: exposure:photograph_aging → supplementaries:antique_book or supplementaries:item_lore | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged photographs baked into an annotated Supplementaries antique-book become tradeable keepsakes with provenance — a player-labor service (aging + annotation) the photographer charges for; value flows player-to-player
- from: exposure:camera / exposure:black_and_white_film | via: create:sequenced_assembly (film development) → seasonal light condition | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Serene Seasons doesn't gate film chemistry; there's no mechanical hook where season affects developing. The existing Create-sequenced assembly is already the weave; adding a fake seasonal gate would be arbitrary.
- from: exposure:camera_gold | via: create:mechanical_crafting or deeper assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The gold camera is the prestige tier — gating it behind a Create sequenced-assembly chain (lens grinding + frame pressing + assembly deployer) earns its depth and makes photography-at-scale a Create milestone
- REWORK: dossier lists M-09 as optional 3rd anchor — M-09 is retired; that row should be removed or reframed as M-33 service (which the aged-photograph link above does).

## blockui   [anchors: support/library (1)]
- LEAVE — XML UI framework library, hard dependency of MineColonies; zero items, zero methods, zero material surface.

## copperagebackport   [anchors: survival (1)]
- from: copper deco blocks (copper_bars, copper_chain, oxidized variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Copper deco crushes back to copper nuggets + XP nugget (lossy), folding the whole copper-age palette into the Create copper economy — a player who over-built oxidized copper can recoup some material
- from: minecraft:copper_chest / copper tools | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Damaged copper tools and replaced copper chests crush into nuggets — the standard Create recycle loop applied to the copper-age item tree
- from: Copper Golem (minecraft:copper_golem_statue) | via: thematic: low-tech logistics complement | to: aeronautics | motif: M-31 | power: everyday | tone: clash | verdict: REJECT | reason: the Copper Golem sorts items between copper chests in a small radius — it's a chest-sorting mob, not a bulk-freight operator. M-31 requires goods heavy/bulky enough to need aeronautics; a golem sorting chests is the opposite end of the scale. Tone clash too (cute mob vs. airship logistics). No genuine link.
- from: copper ingots (c:ingots/copper) | via: create:pressing → copper plates | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the vanilla Create path (copper ingot → pressed copper via create:pressing); not a new weave, just existing established behavior.
- REWORK: dossier has copper-deco crushing (M-04) as the primary candidate but no motif ID assigned and the Copper Golem logistics tie marked WEAK. Confirmed: M-04 is the right path, two rows (deco + tools). Golem logistics REJECTED (see above).

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute | via: thematic: bulk-item vertical relay on aeronautics ships | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: the direct chute is a passive conduit block, not a logistics *service*; M-31 is about goods requiring aeronautics-scale movement. A clog-free chute column on a ship is a construction detail, not a weave — the anchor is still Create, and the connection is structural, not a loop-feeding link.
- LEAVE — single Create logistics QoL block; no material processing, no foreign-material sink. Its zinc recipe is already within Create. Genuine zero second-anchor surface; the forced aeronautics link above rejected on inspection.

## tacz   [anchors: support/combat-flavor (1)]
- from: tacz:ammo_box / tacz:ammo | via: tacz:gun_smith_table_crafting inputs | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gate gun-smith table crafting behind Create-pressed brass/steel casings and mechanical-crafted receivers — firearms are industrial products, and a Create factory producing ammunition makes tactical supply a Create specialization
- from: tacz:modern_kinetic_gun (high-tier firearms) | via: create:sequenced_assembly (multi-stage fabrication) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: A high-spec rifle assembled through a Create sequenced-assembly line (barrel lathing → receiver assembly → stock fitting → quality check) earns its endgame depth; the gun becomes a Create milestone output
- from: tacz:ammo (consumable) | via: ongoing combat expenditure | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Ammunition is spent per-shot and never stockpiles indefinitely — the consumption sink ensures PvPvE players must continuously re-supply; a combat specialist sells ammo to non-crafters, closing the demand loop
- from: tacz:ammo / tacz:modern_kinetic_gun | via: player-to-player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: A combat/armory specialist farms the Create fabrication line to supply guns and ammo to players who focus on other pillars — war materiel as a tradeable class of goods, just like food or magic reagents
- from: tacz:gun_smith_table build | via: minecolonies colony-workshop route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Blacksmith/Workshop route produces basic guns slower/cheaper than a Create fabrication line — colony provides the baseline supply while a dedicated Create armory is the specialist's edge
- from: tacz:m67 (grenade) | via: boss-drop gate | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: M67 grenades (high explosive) require a boss-drop component as a fuse ingredient — grenade-tier ordnance is gated behind defeating the pack's progression bosses, not purchasable or craftable from the start
- from: aeronautics — ship-mounted turret flavor | via: thematic | to: aeronautics | motif: no-motif | verdict: REJECT | reason: TACZ doesn't natively integrate with Aeronautics ships; aeronauticscompat covers other turret mods; forcing a ship-weapon link has no implementing method. No motif fits; REJECT.
- REWORK: dossier marks tacz "support (1)" but lists three strong 2nd-anchor candidates (Create via M-05/M-06, economy via ammo consumption). That 1-anchor label undersells it — six ACCEPT rows across Create, economy, and survival confirm at least 3 anchors are achievable.

## recipe_integration   [anchors: support/library (1)]
- LEAVE — conditional cross-mod recipe datapack; it IS the connective tissue, not a content node. Its c:tags are mostly for uninstalled mods (Aether, Mekanism, MI, GT) and are inert in this modlist. The weaves it provides are credited to the host mods whose materials flow through it. No bespoke weave needed on the library itself.

## voicechat   [anchors: support/comms (1)]
- LEAVE — proximity voice infrastructure; zero items, zero methods, no gameplay surface.

## trading_floor   [anchors: Create, economy (2)]
OK — connections sound. Trading Depot is hard-Create and automation-trade at its core.
- from: trading_floor:trading_depot | via: automated villager trade loop | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create belt feeds scarce processed goods (e.g. Create-pressed iron sheets, Numismatics coin) into the depot to run villager trades and output enchanted gear or emeralds — the depot is a cross-route bridge where Create production and the trade economy meet; the player controls the input mix, making the trade outcome depend on their production specialization
- from: trading_floor:trading_depot | via: loot-seed (enchanted-book output) | to: magic | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Trading via depot can yield spell scrolls or enchant books that gate magic progression (Iron's Spellbooks / Ars tomes); a Create-automated trade loop becomes a research-unlock mechanism — the trading post as a knowledge-delivery method, not just an item conveyor
- REWORK: existing dossier note says "Natural keystone for M-08" but M-08 is player-minted currency from scarce metal, not an emerald-from-trade loop; that framing is slightly off. The depot runs *existing villager trades* — it's not a mint. M-29 (cross-route: Create production feeds the trade economy) is the cleaner motif.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — network packet-size fix; zero items, zero methods, invisible to players.

## irons_lib   [anchors: support/library (1)]
- LEAVE — UI framework library for Iron's Spellbooks; transmog table and player statue are cosmetic-only with no routable material surface.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — client audio cue on load; zero items, zero gameplay surface.

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — numerical ping in tab list; zero items, zero methods.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending (fan-bulk-ending via Dragon Head catalyst) | via: create_dragons_plus:ending method | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Route Ars Nouveau source gems or occultism spirit crystals through the Bulk Ending fan (Dragon's Breath catalyst) to produce an attuned End-infused reagent — the End infusion acts as an arcane refinement step, giving the fan-ending method a magic-production role
- from: create_dragons_plus:freezing (fan-bulk-freezing via Powder Snow) | via: create_dragons_plus:freezing method | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Powder Snow is vanilla and always available; the freezing method has no seasonal gate. M-16 requires season-gated input. Without a Serene Seasons hook on Powder Snow supply, this is not a seasonal reagent link.
- from: create_dragons_plus:dragon_breath (fluid) | via: create:filling / extracting from the Dragon's Breath tank | to: aeronautics | motif: M-13 | power: mid | tone: clash | verdict: REJECT | reason: Dragon's Breath is an exotic bio-fluid, not a combustion fuel; the fuel reagent-ownership table reserves TFMG diesel/gasoline/lubricant for M-13. Routing Dragon's Breath as an engine fuel is a tone clash (magical substance vs. industrial engine) and would compete with the reserved fuel reagents.
- from: dragon_breath fluid | via: create_dragons_plus:ending → boss-drop (Ender Dragon kill required to get Dragon Head catalyst) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Bulk Ending fan only works with a Dragon Head catalyst — you need to kill the Ender Dragon to unlock the method. Gating endgame Create-magic items behind the ending fan naturally gates them behind the boss, making dragon-kill a prerequisite for End-infused crafting
- from: create_dragons_plus:blaze_upgrade_smithing_template | via: smithing upgrade | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The Blaze smithing template comes from Nether content (Blaze drop pathway) and upgrades armor/tools — a mob-drop reagent that feeds a crafting/smithing step, threading combat drops into tool progression
- REWORK: dossier marks only "Create (1)" and says "leave — support role / library." That undersells it: the ending/freezing fan methods ARE weave-targets (other mods can route through them), and the Dragon Head boss-gate (M-15) and arcane fan-ending (M-10) are real. Three ACCEPT rows bring it to Create + magic + survival.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees logs/wood (output of felling) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is not a DT-specific weave — any log goes to create:milling. The weave belongs on Create or Farmers Delight, not on DT. DT's own seed-conversion recipe types are not a foreign-material processing sink, and its log output is vanilla-tagged; routing it through Create is already the default. Forcing a DT-specific Create edge is exactly the "contrived" case the dossier warns against.
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The Dendro Potion accelerates tree growth — infusing it with arcane source gems produces a supercharged Growth Elixir used in magic ritual tree-farming; the life-essence angle is thematically coherent (living trees + growth magic)
- from: dynamictrees:mega_crimson_sapling / mega_warped_sapling | via: create_dragons_plus:ending (fan-bulk-ending) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: mega saplings are converted via dynamictrees:mega_seed from vanilla, not via a Create/fan method; forcing fan-ending onto a sapling is arbitrary and the tone doesn't hold (fungal nether growth via Dragon's Breath is odd).
- from: dynamictrees species seeds | via: dynamictrees:seed_conversion → minecolonies lumberjack hut automation | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies Lumberjack huts harvest Dynamic Trees (DT's whole-tree felling is natural for them); the colony route provides automated wood production cheaper/slower than a player-built Create saw mill — the two routes (colony lumberjack vs. Create harvester) compete and pressure specialization
- REWORK: dossier says "leave" but there are genuine non-contrived links: M-10 dendro-potion magic infusion, M-28 colony lumberjack route. The "contrived" warning was aimed at a forced Create milling edge (correctly REJECTED above), not at all possible links.

== CHUNK COMPLETE ==
