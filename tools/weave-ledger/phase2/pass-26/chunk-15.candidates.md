# Phase 2 candidates — chunk-15

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — pure version-handshake utility; 0 items/blocks, no content surface. No weave possible.

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — zero-content behavior-patch glue between create_sa and Sable/Aeronautics; no items, no recipe surface. Correct to serve the aeronautics pillar silently.

## charta   [anchors: survival (1)]
- from: charta:card_table (loot=yes, generates in villages/dungeons) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a card table in a dungeon chest lets a wandering merchant set up a gambling den — the bounty board pays out to whoever wins, closing a social-economy loop
- from: charta deco (bar stools, bar shelves, wine/beer glasses) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood/glass deco crushing is too thin a justification — the mod's value is the card-game mechanic, not the furniture materials; M-04 deco-recycling here adds noise, not loop advancement

## fzzy_config   [anchors: support/library (1)]
- LEAVE — config serialization API; 0 items, no content surface. No weave possible.

## tacz   [anchors: support/combat-flavour (1)]
- from: tacz gun_smith_table inputs (metals/gunpowder-tier) | via: create:pressing + tacz:gun_smith_table_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: firearms need Create-pressed sheet-metal casings to build — you can't just slap iron together; the Create spine becomes the gun factory's supply chain
- from: tacz high-tier gun/rifle (endgame) | via: create:sequenced_assembly + tacz:gun_smith_table_crafting | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a precision rifle requires sequenced assembly — machined barrel → assembled action → fitted stock — each step through Create before the gun_smith_table finishes it; depth earned by steps, not inflated costs
- from: tacz ammo_box (consumable bulk ammo) | via: bountiful decree objective | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bounty board demanding ammo deliveries (or ammo spent on a kill bounty) makes tacz ammunition a genuine economy token, not just a pvp consumable — combat demand drives the Create metalwork supply chain
- from: tacz ammo (scarce consumable tied to pack ore-scarcity) | via: numismatics sell/price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The M-14 bounty-demand link (above) is the structurally distinctive economy tie; bare sell is saturated.

## bountiful   [anchors: economy (1)]
- from: bountiful decree objectives (configurable item/kill sinks) | via: bountiful board → Serene Seasons seasonal crop list | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: decrees that demand season-exclusive crops (summer berries, autumn squash) force players to engage with the farming calendar instead of stockpiling generic drops — scarcity meets the bounty board
- from: bountiful payout | via: bountiful board reward → numismatics cog/spur | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: the board pays in coin — mob-kill and fetch bounties become the early money faucet; this is the distinctive structural link (economy faucet + demand node), not mere sellability
- from: bountiful decree objectives | via: bountiful board demanding Create-processed goods or magic reagents | to: create/magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty requesting brass gears or Ars source gems turns the board into a demand signal pulling from production pillars — every surplus has a buyer
- REWORK: existing economy anchor is sound; the "Numismatics payout" candidate from the dossier was already the correct direction. No arbitrary connections found — anchors well-placed.
- OK — connections sound (economy anchor is solid; the above extend it to survival/create/magic as deliberate loop-closers)

## jade   [anchors: client-UI/support (1)]
- LEAVE — display-only HUD overlay; 0 items, no content or processing surface. No weave possible.

## createpickywheels   [anchors: create (1)]
- from: createpickywheels biome/placement constraint (river biome for water wheels, open air for windmills) | via: config/worldgen-event gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: early Create power is now geographically earned — players must find and settle a River or open highland, which is a survival/exploration pressure feeding back into when the Create spine can fire up; the world pushes back before the machines can roll
- REWORK: Create-only anchor is correct. The survival link above is not a recipe-weave but a genuine mechanic tie (biome requirement IS survival pressure). No forced edges needed elsewhere.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure cross-mod recipe/tag glue for the Let's Do food family; it IS the weaving layer for that cluster. No independent content surface to give a second pillar; its function already advances M-12 (processing-chain unification) across food mods.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (palm_bar_mixing output — luxury tropical drinks) | via: bountiful decree objective / numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: tropical cocktails are a genuine luxury trade good — coastal settlements run beach bars, and a player-economy where sun-and-sand drinks fetch real coin is structurally distinctive as a specialization node (coastal biome → cocktail production → economy), not just generic sellability
- from: beachparty mini_fridge_freezing (bulk ice output) | via: create:filling / create:mixing cold-step feedstock | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: mini_fridge ice as Create feedstock is a stretch — vanilla ice/packed ice are already available and Create has no ice-gated recipes in the pack; the link is a one-liner observation with no loop advancement
- from: beachparty coconut | via: extradelight:juicer or farmersdelight:cutting → intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: coconut-to-create processing adds a step for the sake of it; coconut already feeds cocktails, and routing it into Create would be forcing a tollgate on a basic daily ingredient — violates the basic-component gating guardrail

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — config API library; 0 items, no content surface. No weave possible.

## rhino   [anchors: support/library (1)]
- LEAVE — KubeJS JS runtime engine; 0 items, no content surface. No weave possible.

## revelationary   [anchors: support/library (1)]
- LEAVE — advancement-gated block-reveal API; 0 items, no player-facing content of its own. No weave possible (it is the mechanism M-05 gates ride through, not a material to route).

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag (portable sleep QoL, wool/string) | via: bountiful decree reward or survival pressure loop | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — sleeping bags are survival QoL already anchored correctly; no cross-system material routing exists; forced edges on dyed sleeping bags would be noise as dossier states
- LEAVE — cozy survival-QoL mod; wool/string consumption is vanilla, no processing surface to route. Single-anchor survival is the correct and honest placement.

## bigsignwriter   [anchors: support/UI (1)]
- LEAVE — client-only sign-text UI utility; 0 items, no content surface. No weave possible.

## byzantine   [anchors: survival/minecolonies (1)]
- LEAVE — pure MineColonies schematic style pack; 0 own items/blocks, no processing surface. Its entire "weave" runs through MineColonies already.

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — behavior-only JSON combat framework; 0 items, no content surface. No material routing possible.

## create_compressed   [anchors: create (1)]
- LEAVE — Create-internal storage/QoL compression layer; already uses create:crushing/milling/mixing/splashing as noted. No foreign material to introduce a second pillar — it follows Create's own item set and adds no independent content surface beyond that.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — keybind-triggered transient co-op ping marker; 0 items, no content surface. No weave possible.

## underground_village   [anchors: survival (1)]
- from: underground_village Stoneholm villager trades | via: villager trade → numismatics-priced items (or bounty node) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT | hook: finding a Stoneholm village underground means finding an economy node — villagers who trade in pack coins, making exploration directly reward economic standing; a literal physical distribution point for the economy pillar (provisional motif — tag: provisional motif M-21)
- from: underground_village loot chests (loot=yes) | via: loot-seed — seed magic reagents (Ars source gem shards, Occultism isntruments) into Stoneholm chest loot | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: rare arcane reagents hidden in underground settlements create an exploration-to-magic loop — finding the hidden village rewards the magic pilgrim, not just the miner

== CHUNK COMPLETE ==
