# Phase 2 candidates — chunk-01

## formations   [anchors: survival (1)]
- LEAVE — pure scatter-structure worldgen with no items, no processing surface, and no recipe types. Forced economy/magic edges would belong to specific loot tables generated inside those structures, not to the Formations mod itself. No coherent 2nd pillar.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot (c:ingots/tin) | via: numismatics mint (M-08 coin-from-processed-scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a fresh regional ore; crush → alloy → mint is the pack's scarcity-economy seam made concrete — the tinsmith becomes the town's coin source.
- from: create_ironworks:steel_plate (c:plates/steel) | via: aeronautics airframe construction (M-23 structural-alloy seam) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel plate is the obvious hull material for an armoured airship — building a serious vessel should cost fabricated steel, not just planks.
- from: create_ironworks:bronze_ingot (c:ingots/bronze) | via: ars_nouveau:enchanting_apparatus or imbuement (M-10) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Bronze-as-magic-substrate has no thematic grounding in Ars Nouveau's nature/arcane vocabulary; the mod already has two strong ACCEPT weaves (M-08 + M-23) so forcing a third magic seam is unnecessary and tone-clashing.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cherry_cheese_pie / ancient_coffee / cheese_wheel | via: numismatics sell (M-09 luxury-good→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A cherry cheese pie or ancient coffee is exactly the kind of artisan good a player would sell at market — high effort, clear value, natural trade item for the colony economy.
- from: trailandtales_delight:lantern_fruit (c:foods/berry) | via: create:milling → flour/juice intermediate then farmersdelight:cooking (M-12 processing-chain pull) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling lantern fruit before cooking ties the sniffer crop into the Create supply chain — a light, coherent step that doesn't over-complicate a basic ingredient.
- from: trailandtales_delight:cheese_wheel | via: create:milling (lossy, M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Crushing cheese back to curds via Create is a weaker/redundant weave now that milling lantern fruit already covers the Create pillar; M-12 (lantern fruit) is more coherent and already accepted. Duplicate pillar-win with less thematic clarity.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- LEAVE — purely a structure/worldgen mod (0 items, 0 blocks in jar). The nautical theme rhymes with aeronautics thematically, but these are static ocean structures with no functional ship mechanics — an aeronautics pillar would be fabricated. Any economy/pillar connection must come from editing its loot tables externally, which belongs to a cross-cutting loot-table pass, not to this mod as its 2nd pillar.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot chests (loot-table surface — no registered items) | via: loot-table injection of Aeronautics/Create progression items | to: aeronautics | motif: M-15 (boss-key unlock loosely) | power: mid | tone: ok | verdict: ACCEPT | hook: A sky whale is an airborne dungeon; players only reach it by airship — injecting ship-tech or hull materials into its loot makes it a natural aeronautics milestone destination.
- from: sky_whale_ship loot | via: numismatics coin / rare trade good in loot | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Loot-table economy weave is weaker than the aeronautics one, and both can't be fully justified without knowing what the loot contains — the aeronautics angle is stronger and thematically self-reinforcing (you need a ship to get there, you find ship parts). Economy via loot is generic and dilutes the aeronautics hook.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal | via: create:sequenced_assembly as a keystone input for a high-tier Create machine (M-15/M-06 boss-key gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Frostmaw's Ice Crystal is rare and hard-earned — exactly the kind of gate the pack's design mandates for unlocking complex Create tech. A player slaying Frostmaw to build an advanced machine is coherent and memorable.
- from: mowziesmobs:sol_visage / mowziesmobs:earthrend_gauntlet | via: occultism:spirit_fire transmutation into an arcane catalyst (M-11 ritual/spirit sink) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Boss artifacts that grant elemental powers (sun mask, iron gauntlet) converting through spirit fire into Occultism catalysts fits the "mythic energy → arcane essence" theme naturally — the spirit fire consumes the relic's bound power.
- from: mowziesmobs boss drops (any) | via: numismatics bounty board (M-14) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional and the maintainer leans no on player-currency bounties in general; also, boss artifacts are reserved as boss-key reagents (M-15 ownership) — routing them to bounty pay-in conflicts with that reservation and dilutes their gate role. Redundant with the two accepted weaves above.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / primer / createimmersivetacz ammo outputs | via: numismatics sell — bulk ammo as a consumable trade good (M-09 luxury/processed→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: An "arms dealer" player manufactures rounds on their Create line and sells them to combat-focused crew members — the ammo factory becomes the pack's PvPvE supply economy naturally.
- from: createimmersivetacz:gun_barrel / firing_mechanism (fabricated gun parts) | via: magic — none coherent | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: Gun parts have no thematic surface in Ars Nouveau or Occultism; a forced "infuse a gun barrel" edge would be arbitrary. No coherent magic weave exists for this mod.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire transmutation into an arcane reagent (M-11 ritual/spirit sink) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A giant cave spider's venom-fang is a natural Occultism ingredient — spirit fire consuming it to yield a spirit catalyst is exactly the "mob drop earns a use" pattern.
- from: undergroundworlds:temple_bricks / pyramid_bricks (deco block sets) | via: create:crushing lossy recycle (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salvaging ancient brickwork in a Create machine for gravel + XP is a minor but coherent quality-of-life weave; the brick sets are the only material surface this mod exposes, and M-04 is explicitly the light step for deco blocks.
- from: undergroundworlds:desert_charm / antidote_flask | via: ars_nouveau:imbuement as reagent (M-10) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: The charms already function as standalone gear; routing them as imbuement inputs would require either consuming them (thematically odd — they're wearable) or using them as catalysts in a multi-step craft that has no grounding in Ars Nouveau's existing reagent vocabulary. The spirit_fang (M-11) is the cleaner magic weave.

## endermoon   [anchors: survival (1)]
- LEAVE — no items, no blocks, no registered methods. The mod is a pure spawn-weight event modifier. Any weave worth having (e.g. ender-pearl supply feeding a Create/magic method on Ender Moon nights) belongs on the Enhanced Celestials system or the ender-pearl item itself, not on this mod, which has no material surface of its own.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster / drones:iron_rotor (upper-tier thrust components) | via: create:sequenced_assembly gating (M-06 sequenced-assembly keystone) — require precision mechanisms + brass internals built on the sequencer | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: An ion thruster is not a hand-craft item — building the best drone tier through a Create sequenced-assembly line makes the personal-flight capability feel properly earned and ties drones to the tech spine.
- from: drones:iron_rotor (mid-tier) | via: create:mechanical_crafting or create:pressing (M-05 native-method gating, light step) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Even the mid-tier iron rotor being shaped on a mechanical press (rather than a crafting table) makes sense — spinning components need precision forming, a one-step Create weave that doesn't over-gate a mid-game item.
- from: drones:pocket_drone (assembled drone) | via: numismatics sell as luxury crafted good (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: A pocket drone is primarily personal utility gear, not a consumable trade good; the economy weave lacks a clear buyer archetype on a 10-person server (everyone wants their own drone, so there's no recurring sale demand). The Create weaves are the coherent 2nd pillar here.

== CHUNK COMPLETE ==








