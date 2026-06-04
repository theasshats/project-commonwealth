# Phase 2 candidates — chunk-13

## createfood   [anchors: survival, Create (2)]
- from: finished dishes (pizzas/cakes/ice cream) | via: numismatics sell / price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-effort plated dish off the Create cooking line is the baker's sellable trade good
- from: hot drinks / processed dishes | via: bountiful board payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: bounty boards want combat/mob drops, not cooked food; the sell-good route (M-09) already covers food→coin, this duplicates it less coherently
- from: foreign crops/meats/cheese (it consumes) | via: create:milling/mixing + farmersdelight:cooking | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: it is itself a giant M-12 consumer — already its design, worth logging as the canonical inbound food-processing sink for other mods' crops
- REWORK: existing Create anchor is sound (it authors onto create:* + FD types). No arbitrary edges. OK — connections sound; the only addition is the M-09 economy 3rd pillar.

## createbigcannons   [anchors: Create, aeronautics (2)]
- from: finished shells/munitions (AP shells, cartridges) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a munitions specialist sells fabricated shells as a war-good to the crew
- from: cannon-grade steel ingot (createbigcannons:steel_ingot) | via: create:* processing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon-grade steel is scarce processed metal, mintable as coin from regional scarcity
- from: bronze/cast_iron/steel cannon parts (cast in foundry) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: heavy cast cannon plate is the structural feedstock for armored naval/air gun-platforms — deepens the aeronautics build it already mounts on
- REWORK: the aeronautics anchor currently rests on "mountable on ships" (a runtime fact, not a recipe weave). Sound thematically but it's a soft edge — strengthen it with the M-23 structural-part recipe above so the link is a real material dependency, not just placement. OK overall, connections sound.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- LEAVE — zero blocks/items/c:tags; pure jigsaw worldgen structures with vanilla+pack loot. No material surface to method-pull. The naval theme only rhymes aesthetically with aeronautics (static structures, not functional vessels); any economy edge would live in edited loot tables elsewhere, not in this mod. Forcing an edge would be a defect.

## born_in_chaos_v1   [anchors: survival (1)]
- from: dark_metal_deposit / dark_metal | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: ore-doubling its dark-metal deposit ties the spooky metal into the Create spine, gear becomes a Create outcome not a pure bench recipe
- from: bundle_of_bones / soul-themed drops | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: cursed bone/soul drops are apt necromantic transmutation reagents for the occult web
- from: dark_metal / boss drops (Soul Saber, Pumpkin Staff) | via: bountiful board → numismatics | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the Halloween danger-loop pays out — mob drops become bounty turn-ins and coin
- from: boss drop (Pumpkin Staff / signature) | via: gated Create/tech recipe | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: no-motif-fit-mismatch — born_in_chaos boss is a seasonal flavor miniboss, not a progression keystone; gating real tech behind a seasonal-window drop is a balance trap (M-15 must stay thematically/temporally sensible). M-03/M-11/M-14 already give it three weaves.

## ichunutil   [anchors: support (library) (1)]
- LEAVE — pure shared-class library (0 blocks, 0 items, loot=no). Genuine zero-content code library; sanctioned support role, no weave possible or wanted.

## brazil_legends   [anchors: survival (1)]
- from: capelobo_claw / big_tongue / amber_shard | via: occultism:spirit_fire / ars_nouveau:imbuement | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: folklore cryptid drops transmute into a magic essence rather than dead-ending in their own gear
- from: amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: amber is a natural sellable luxury curio
- from: bottle_with_saci (trickster-in-a-bottle) | via: occultism:ritual / spirit_trade | to: magic | motif: M-18 | power: endgame | tone: ok | verdict: REJECT | reason: no-motif-fit — saci-in-a-bottle is a self-contained captured-entity novelty item; repurposing it as a spirit-trade input clashes with its existing flavor and risks a forced "why does this convert?" edge. The claw/amber routes are the clean ones.

## tfmg   [anchors: Create (1)]
- from: diesel / gasoline / LPG fuels | via: TFMG distillation → Aeronautics engine intake | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: refined TFMG fuel is the propulsion supply line for Create Aeronautics ships/planes (reagent-owned for this exact role)
- from: combustion engines / mechanical engine blocks | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: TFMG engine blocks feed Aeronautics propellers/engines — the drivetrain side of the same supply line
- from: steel plate / structural concrete-rebar | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: fabricated steel plate is the structural airframe/hull feedstock, making airships cost real industrial metal
- from: refined steel / fuel cans | via: numismatics sell / mint | to: economy | motif: M-08 / M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort processed steel and fuel are scarcity goods minted/sold into the economy
- REWORK: none — TFMG is a strong 1-pillar mod that gains aeronautics (its primary 2nd) plus economy cleanly; no arbitrary existing edges (it's pure Create-addon, anchor sound).

## curios   [anchors: support (library)]
- LEAVE — Curios API, 0 items/blocks; equipment-slot framework hosting other mods' trinkets. Genuine zero-content code library; sanctioned support role (quietly underpins magic by giving Ars/Iron's their slots), no material to route.

## grimoireofgaia   [anchors: survival (1)]
- from: mob-drop nuggets/fragments (per-tier) | via: occultism:ritual/spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the bestiary's many drop-fragments become ritual/infusion feedstock so killing Gaia mobs feeds the magic web
- from: c:nuggets/diamond, c:nuggets/emerald, metal fragments | via: create:crushing / compacting | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: processing its metal fragments into intermediates ties the mob loot to the tech spine (already has a create:emptying touch)
- from: boss busts / artifact rings (Ring of Speed/Haste) | via: bountiful board → numismatics | to: economy | motif: M-14 / M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: kill-the-miniboss → busts and rare rings as high-value bounty/sale goods
- REWORK: existing inbound weaves (create:emptying bottling a drop, farmersdelight:cutting on a food) are coherent but thin/incidental — fine to keep, they're not arbitrary. The three additions above give it survival + magic + Create + economy reach.

## biolith   [anchors: support (library / worldgen API)]
- LEAVE — worldgen/biome-placement library, 0 items/blocks/recipes; operates on biome registry data, not items. Genuine zero-content code library; sanctioned support role, no material surface to weave.

== CHUNK COMPLETE ==
