# Phase 2 candidates — chunk-25

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchantments (loot injection) | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars/Iron's enchanting apparatus can apply Aileron's Elytra-specific enchants (Speed Wing, Strafe, etc.), tying personal flight upgrades into the magic pillar's enchanting workflow
- from: aileron loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: Aileron injects into vanilla Elytra loot — there's no structure/dungeon loot table of its own to seed coin into; the enchants don't monetize cleanly (no-motif for "enchant → coin")
- REWORK: aeronautics anchor is thin — aileron is about *personal* Elytra flight, which is adjacent to but separate from Aeronautics ships/vehicles. Not wrong, but the enchanting-apparatus link to magic (accepted above) is the meaningful second pillar. Existing anchor is fine as a classification; the magic weave is the real gain.

## better_climbing   [anchors: support (QoL) (1)]
- LEAVE — zero-content pure behavior mod: no items, no blocks, no loot tables. Movement physics tweak only; no material surface to weave through any method.

## terrablender   [anchors: support (worldgen library) (1)]
- LEAVE — pure worldgen registration API: no items, no blocks, no loot tables, no player-facing content. Required dependency for biome-injecting mods; no weave surface exists.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, honey_cocktail, melon_cocktail, cocoa_cocktail) | via: numismatics sell / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical cocktails are a finished luxury drink — exactly the kind of tavern/coastal trade good a player sells for coin; beach-bar economy writes itself
- from: beachparty:coconut (open_coconut) | via: create:milling or create:crushing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing a coconut in the millstone yields coconut flakes/coconut oil intermediate — a light processing step that feeds cooking recipes (Farmer's Delight / Extra Delight) and ties the tropical flora into Create's processing chain
- from: beachparty:mini_fridge ice output | via: beachparty:mini_fridge_freezing (as feedstock gate) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: mini_fridge is a no-power item-sink that outputs plain ice/packed-ice — vanilla Create already produces packed ice via compacting; no genuine link and adding a dependency on a tiki-bar appliance for ice feedstock is arbitrary; the crushing coconut path above is cleaner
- from: beachparty:cooked_mussel_meat / seafood items | via: farmersdelight:cooking or extradelight:* | to: Create (via M-12) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mussel meat + palm-sourced coconut processed through Farmer's Delight cooking into a coastal feast dish — survival food chain gains a tropical coastal branch

## collective   [anchors: support (library) (1)]
- LEAVE — confirmed pure code/event-hook library: 0 blocks, 0 items, loot=no. No player-facing content surface to weave through any method.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull — an underground lizard-folk relic — transmuted into spirit essence through the spirit fire feels like exactly the occult reagent a demonologist would want from a subterranean creature; natural M-02 sink
- from: kobolds structures / loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: kobolds already anchor economy via emerald trading — the direct trade IS the economy link; adding coin loot on top is redundant double-dipping; one economy channel is sufficient
- from: kobold redstone goods (engineer trade output) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: kobolds anchor economy already (emerald trades); pushing redstone goods → coin is a forced third-level chain when the primary economy anchor (trades) is already doing the job
- OK — existing economy + survival anchors are sound; the kobold_skull → occultism spirit_fire (ACCEPT above) adds a coherent magic 3rd pillar.

## rightclickharvest   [anchors: support (QoL) (1)]
- LEAVE — zero-content pure behavior mod: no items, no blocks, no loot tables (loot=no). Farming interaction hook only; no material surface for any weave.

## sable_sa_compat   [anchors: support (compat patch) (1)]
- LEAVE — zero-content compat behavior patch: no items, no blocks, no loot tables. Bridges two other mods' movement behavior on physics ships; no independent material surface.

## fluid   [anchors: Create, aeronautics (2)]
- from: fluid:centrifugal_pump / fluid infrastructure parts | via: create:mechanical_crafting (recipe) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-capacity centrifugal pump is a logical required component for an airship's fuel/fluid intake system — makes fluid's pump a drivetrain/logistics part for larger ships; M-24 companion
- from: fluid:smart_fluid_interface | via: recipe (crafting / create:mechanical_crafting) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: smart_fluid_interface is a flow-gating valve, not a structural airframe component; M-23 is for structural alloy/hull materials, not fluid valves; misfit motif — the centrifugal pump link above (M-24 drivetrain) is the clean one
- OK — existing Create + aeronautics anchors are accurate and well-grounded; the pump→aeronautics drivetrain link above strengthens the aeronautics side.

## occultengineering   [anchors: Create, magic (2)]
- from: occultengineering:sterling_silver (ingots/nuggets) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is an occult alloy (silver+something) processed through Create — minting it into coin (a silver-backed currency tier) is exactly the scarce-regional-metal-to-coin pipeline; the occult pedigree makes it a prestige coin material
- from: occultengineering:spirit_solution | via: occultism:ritual or ars_nouveau:imbuement | to: magic (deepen) | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is the RESERVED reagent already owned by M-11 (reagent-ownership table); it's already the established occult intermediate — flagging a new weave through it would be double-registering the same role; nothing new to add here
- from: occultengineering:phlogiport (wireless logistics) | via: config/recipe | to: economy | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: phlogiports are a logistics device, not a tradeable commodity or economy input; no motif maps "item-teleporter → economy pillar" cleanly; no-motif → reject-for-review
- OK — Create + magic anchors are structurally sound (the mod IS the Create×Occultism bridge); sterling_silver→coin (M-08) adds a clean economy third pillar.

== CHUNK COMPLETE ==
