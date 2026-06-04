# Phase 2 candidates — chunk-03

## copperagebackport   [anchors: survival (1)]
- from: copper deco/tool/armor blocks (copper_lantern, copper_bars, copper_chest, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper lanterns and bars crush back to copper nuggets + XP nugget — the whole copper deco set folds into the Create copper economy naturally
- from: copper tools/armor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools recycle through a Crusher for nuggets and gravel, same as vanilla Create ore deco pattern
- from: Copper Golem logistics niche | via: thematic adjacency to Create item transport | to: Create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the Golem is an item-sorting mob but there's no recipe-type it routes through; it's a parallel/competing logistics primitive, not a connected one; thematic overlap without a join key

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single utility filter item with no material surface, no outputs, and no join key to a second pillar; forcing a weave would be arbitrary

## createlowheated   [anchors: Create (1)]
- LEAVE — single-block balance tweak (Basic Burner + heat condition); no tradeable item, no reagent surface, and no method handle to pull through; the mod deepens the Create pillar internally but offers no coherent 2nd-pillar entry point

## bountiful   [anchors: economy (1)]
- from: bounty board reward pool | via: numismatics coin payout (config) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty payouts in Numismatics cog/spur/bevel instead of gold — the board becomes the economy pillar's primary coin faucet, completing the combat→coin loop
- from: bounty objective pool (fetch/kill) | via: bountiful decree targeting Create-processed goods or magic reagents | to: Create / magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: decrees that demand Create-processed outputs (e.g. iron sheet, brass ingot) or Ars reagents as turn-ins make surplus production a bounty objective — any pillar's overflow routes to coin
- from: boss-drop bounty objectives | via: bountiful decree targeting boss reagents | to: economy | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: premium "epic" bounties that call for obsidian_heart or ancient_anima reward top-tier coin — rare drops have a coin value and an economic demand
- from: bountiful → villager economy | via: M-21 trade-seam | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and leans no; the M-14 coin-payout path above is the correct mechanism for bountiful→economy

## betteroceanmonuments   [anchors: survival (1)]
- LEAVE — no registry items, no recipe-types, no reagent surface; a pure structure overhaul; loot-table seeding is a valid future datapack edit but is not a mod weave and belongs in a separate Phase 3 datapack pass

## endermoon   [anchors: survival (1)]
- from: Ender Moon event (mass enderman spawn night) | via: lunar-event-gated ender pearl supply → occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: an Ender Moon night yields the pearl surplus needed to power a lunar-keyed ritual or imbuement — the celestial event becomes a magic calendar marker (same M-22 pattern as Enhanced Celestials)
- from: Ender Moon event | via: bountiful decree (time-limited bounty window) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the event itself has no item output owned by this mod; the ender-pearl surplus is a side-effect of vanilla mob drops, so the weave technically belongs on an ender-pearl sink rather than on endermoon; the M-22 lunar→magic weave is cleaner and sufficient

## midnightthoughts   [anchors: survival (1)]
- LEAVE — no items, no recipe types, no reagent surface; pure status-effect/rest mechanic; no material join key to any second pillar without forcing it

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising (the Energiser recipe-type) | via: gating an aeronautics/magic keystone item through the Energiser (endgame power requirement) | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: charging a high-tier Ars focus or Iron's spellbook component through the Energiser costs real FE — electric power becomes a prerequisite for the magic tier, making the Create electrical branch feel load-bearing
- from: create_new_age:thorium_ore (scarce regional ore, 2 biome-modifiers) | via: create:crushing (ore-doubling byproduct) + numismatics mint route | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is a scarce regional ore; crushed and processed it becomes a high-value trade good, the same way Ironworks tin feeds coins — regional scarcity earns economic weight
- from: create_new_age:corium / create_new_age:solid_corium (reactor byproduct) | via: create:sequenced_assembly as an ingredient for a top-tier structural part | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Corium, the nuclear waste output, is dense and exotic — folding it as a sequenced-assembly input into an advanced aeronautics or heavy-industry component makes the reactor loop feel purposeful rather than terminal
- from: create_new_age:advanced_motor / motor components | via: aeronautics drivetrain/propulsion recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: an electric motor is a sensible drivetrain component for an airship — the Create New Age motor family slots naturally into Aeronautics propulsion as a mechanical control input
- from: FE generation (generator coil / solar plates / reactor) | via: createaddition:charging for magic tools | to: magic | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: already captured above in the Energiser/endgame-focus weave; a second M-17 entry for the charging station is redundant and risks double-counting; keep the Energiser route as the single M-17 hook

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart / blazing_eye | via: create:sequenced_assembly as a required keystone input | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss heart unlocks the endgame Create assembly tier — exactly the "complex Create tech unlocks via boss drops" design rule from DESIGN.md; power and theme both fit
- from: bosses_of_mass_destruction:ancient_anima / void thorns | via: ars_nouveau:imbuement or occultism:ritual as an arcane catalyst | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient anima and void thorns carry dark-fantasy thematic weight that maps cleanly to Ars imbuement or an Occultism ritual; they become the hardest magic-tier catalysts, gating the pack's strongest spells
- from: boss drops (any of the four) | via: bountiful decree as premium epic-tier bounty turn-ins | to: economy | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: epic bounties demanding a boss reagent pay top-tier coin — rare non-renewable drops gain an economic demand and a coin path, binding the combat endgame to the economy pillar
- from: bosses_of_mass_destruction:brimstone_nectar / crystal_fruit (lesser drops) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: brimstone_nectar and crystal_fruit are mid-tier drops without the thematic weight of the boss keystone reagents; ancient_anima/void thorns (M-10 above) cover the magic weave more compellingly; a second magic weave on the lesser drops is dilutive without adding pillar coverage

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore runs through a Crusher yielding salt dust + a small chance of extra crystal — salt becomes a Create-processed everyday resource, the same pattern as other ores; the salt dust feeds cooking recipes downstream
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-gated aged output) | via: numismatics sell / price (luxury good→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an aged cheese wheel is a premium trade good — time-gated by the cask, regionally flavored; exactly the luxury sellable the economy pillar wants for Numismatics depth
- from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: create:milling → milled cinnamon dust as a cooking/alchemy reagent | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark runs through a Millstone into fine cinnamon dust — a light processing step that ties an exotic crop to the Create spine as a cooking intermediate
- from: expandeddelight:chili_pepper / peanut (c:crops) | via: create:mixing or farmersdelight processing into a sauce/paste intermediate | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: chili sauce / peanut paste intermediates are valid M-12 candidates in principle but the salt-ore and cinnamon weaves already give this mod two Create hooks; a third M-12 crop chain is dilutive and pushes into over-engineering everyday food; the stronger play is to let the salt + cinnamon serve as the Create bridge and keep chili/peanut as pure cooking ingredients

== CHUNK COMPLETE ==
