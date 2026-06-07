# Phase 2 candidates — chunk-07

## brazil_legends   [anchors: survival (1)]

**Power-read:** this mod's content is its mob drops — capelobo_claw, big_tongue, amber_shard, amber_pearl, bottle_with_saci. These are endgame in their own gear tree (sickle, spell books) but mid-tier by pack standards: unique folklore drops, no c:tags, so currently dead-end. loot=yes; no recipe methods registered.

- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The werewolf-cryptid claw is exactly what a spirit-fire ritual would feed on — occultism players can transmute it into a demonology reagent, giving claw a use outside its own gear
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A giant folkloric creature's severed tongue imbued with Ars source is sensible — bestiary reagent for a mid-tier arcane infusion
- from: brazil_legends:amber_shard | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Fossilized amber as a ritual ingredient is an old occult trope; spirit_fire transmutation → a crystallized spirit intermediate fits the dossier's "amber_pearl → magic use" candidate
- from: brazil_legends:bottle_with_saci | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: A trapped trickster spirit in a bottle is a perfect arcane catalyst — using it as an attunement charge for a high-tier Ars enchant/apparatus step is thematically tight
- from: brazil_legends drops (general) | via: numismatics sell bare | to: economy | motif: none (M-09 retired) | power: mid | tone: ok | verdict: REJECT | reason: bare sell-for-coin is the ambient endpoint, not a weave; M-09 is retired — no economy link unless it gates demand
- from: brazil_legends:amber_pearl | via: bountiful objective pool | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Curating amber_pearl as a Bountiful bounty objective turns this folklore-hunt drop into an economy-demand node — combat specialists farm it and supply the market (combat-route supply)

REWORK: no existing connections beyond survival anchor — OK as single-anchor; the four magic weaves above add a clear second pillar.

---

## betterbiomereblend   [anchors: support/client (1)]

LEAVE — pure client-side color-blend rendering engine; zero items, zero loot, zero methods. No content surface to route.

---

## terralith   [anchors: survival (1)]

**Power-read:** data-only worldgen — no items, no loot table (loot=yes in digest but no items of its own; any loot is vanilla). However it defines 65 c:tags (biome tags), which is its real weave surface: GTMOGS/regional ore-gen keys its veins off biome tags, so Terralith's 95 biomes *are the scarcity map*. That indirect role (the terrain that scarcity rides) is already load-bearing.

- from: terralith biome-tags (65 c:tags) | via: GTMOGS regional ore-gen keyed to terralith biomes | to: scarcity/survival | motif: M-30 | power: everyday (foundation) | tone: ok | verdict: ACCEPT | hook: Terralith's 95 biomes define *where* regional ores appear — the scarcity foundation is only as good as the biome map it's keyed to; Terralith IS the map, so this is its real second anchor
- from: terralith structures/biomes | via: loot-seed (trek/terralith loot tables) | to: survival→economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: terralith has no structures or loot tables of its own (loot=yes likely from vanilla biomes it replaces, not new chests); the correct loot-seed target is trek or tidal towns, not terralith

REWORK: dossier notes "2nd anchor = none — leave" but the biome-tag→M-30 regional-scarcity angle is the pack's actual foundation dependency; it's worth recording as ACCEPT rather than leaving it unanchored. No existing authored weave to rework.

---

## spawn   [anchors: survival (1)]

**Power-read:** spawn has real content — 165 blocks, 296 items, 34 biome-modifiers, loot=yes, and already woven via farmersdelight:cooking/cutting (existing inbound). The FD bridge is the right move; the question is whether a second pillar is coherent.

- from: spawn:clam (color variants) | via: create:crushing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing raw clams on a belt yields pearl dust + shell shards — a Create ore-processing parallel for aquatic material; light single step fits everyday tier
- from: spawn seafood drops (crab, angler_fish, seal loot) | via: farmersdelight:cutting + create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing catch through a Create mill (grain→flour is the model) for dried seafood flakes / fish-meal intermediate deepens the food-processing web with no magic forced; player finds "of course — I mill grain, I mill dried fish"
- from: spawn:date_log/planks | via: create:cutting (saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a new wood variety running through Create's sawmill for date-palm planks is a natural extension; EveryComp already wires the wood into other mods' shapes, Create's cutter is the missing step
- from: spawn aquatic drops → economy | via: bountiful objective pool | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic aquatic catches (angler_fish, colored clams, sea_cow) as Bountiful bounty objectives — combat/fishing specialists supply them to other players; gates demand on actual fishing specialization
- from: spawn:casting_net_clam mechanic | via: aeronautics logistics as cargo | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: casting-net clams are low-bulk, easily carried individually; the M-31 logistics-required threshold is for heavy/bulky goods, not handheld catches — forced
- from: spawn mob drops | via: numismatics bare sell | to: economy | motif: none (M-09 retired) | verdict: REJECT | reason: bare sell is the ambient endpoint, not a weave

REWORK: existing connections (survival + farmersdelight cooking/cutting) are sound — the FD bridge is the natural integration. Three Create M-12 routes above give a genuine second pillar without forcing magic.

---

## createlowheated   [anchors: Create (1)]

**Power-read:** one block (basic_burner), one item. A balance/mechanics tweak with no tradeable surface. It deepens Create heat management but produces nothing tradeable and has no loot table.

LEAVE — single-block Create heating tweak; no foreign material surface, no loot, no tradeable output. A pure Create mechanics mod with no content to route. Dossier assessment correct.

---

## occultengineering   [anchors: Create, magic (2)]

**Power-read:** well-connected by construction (Create × Occultism bridge); 12 blocks, 38 items, sterling_silver c:tags, loot=yes, and already uses create:compacting/filling/haunting/mixing/pressing + occultism:ritual/spirit_fire. The reserved occult intermediate (spirit_solution) lives here.

Existing connections are sound. Checking for new links:

- from: occultengineering:sterling_silver (c:tag: ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is a scarce occult alloy processed through Create — pressing it into Numismatics coins makes the occult-industrial specialist a natural minter; the alloy's scarcity controls supply
- from: occultengineering:phlogiport (wireless logistics) | via: aeronautics cargo-routing integration | to: aeronautics | motif: M-33 | power: endgame | tone: ok | verdict: REJECT | reason: phlogiport is wireless item teleportation, not physical logistics — it bypasses the aeronautics/train arm rather than feeding it; wiring it as a service would undercut M-31 logistics demand
- from: occultengineering:mechanical_pulverizer outputs (dusts) | via: create:mixing → magic reagent | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: pulverizer is already *within* the occultengineering Create↔magic bridge; adding a second mixing step is redundant depth, not a new cross-route

OK — connections sound (Create + magic). One new accepted link: sterling_silver → M-08 mint adds economy as a third partial anchor.

---

## fxntstorage   [anchors: Create, survival (2)]

**Power-read:** 41 blocks, 68 items; Create-tiered storage (andesite→brass→hardened); uses create:mechanical_crafting. The flight/health/feeding backpack upgrades touch aeronautics and survival but are gear gadgets, not material routes.

Existing connections are sound. Checking for new links:

- from: fxntstorage:backpack_flight_upgrade | via: create:sequenced_assembly gating | to: aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a flight-capable backpack upgrade built through a sequenced assembly chain (precision mechanisms + Create brass parts) ties the pack's personal-flight gadget into the aeronautics production spine — endgame depth without forcing magic
- from: fxntstorage:backpack tiers | via: bountiful bounty objective | to: economy | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: backpacks are durable items, not consumed goods — M-26 (consumption sink) requires the good to be spent against pressure, which backpacks are not; bare sell is ambient

OK — connections sound for Create + survival. Flight upgrade → M-06 aeronautics is the one coherent new link.

---

## enhancedcelestials   [anchors: survival (1)]

**Power-read:** 4 blocks (meteor, space_moss_block/carpet/grass), 5 items; loot=no; the three moon events (Blood/Harvest/Blue) are the real surface — they're world-state modifiers other mods can gate on.

- from: enhancedcelestials:meteor (block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing a fallen meteor rock on a belt gives nickel dust + iron + an xp nugget byproduct — the "fallen star" framing is intuitive; players pick up meteor fragments and feed them into the Create processing line
- from: Blood Moon active state | via: occultism:ritual gating (event-as-condition) | to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Blood Moon ritual only completable when the lunar event is active makes celestial timing a real constraint for high-tier occultism; "of course this dark summon needs a Blood Moon"
- from: Harvest Moon crop-growth buff | via: serene_seasons / farmersdelight crop tie | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Harvest Moon's growth boost already accelerates any crop — explicitly noting it as a seasonal-reagent feed into the food/magic loop solidifies the scarcity pressure side (abundance window is real, not permanent)
- from: Blue Moon Luck buff | via: ars_nouveau:imbuement gating (event-as-catalyst) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a Blue Moon imbuement step adds a luck-amplified reagent tier — an arcane infusion only viable under a Blue Moon's luck window; celestial timing as a magic gating condition
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss is decoration; imbuing deco-moss into an arcane reagent is thematically forced ("space moss" from a meteor is vague enough but thin — not something a player would find obvious); no wiki evidence it's a meaningful material
- from: meteor/moon events | via: bare sell | to: economy | motif: none | verdict: REJECT | reason: ambient endpoint, not a weave

REWORK: dossier candidate for "magic via ars/occultism — gate a ritual on Blood/Blue Moon" is validated here (M-22). The meteor-crushing M-04 is the Create bridge.

---

## cbc_at   [anchors: Create, aeronautics (2)]

**Power-read:** 207 blocks, 255 items; deep Create machining (cutting + CBC munition assembly chains); arms Aeronautics ships with autocannons and rocket pods. Well-connected; checking for new links.

- from: cbc_at heavy autocannon / rocket tier | via: boss-drop gating (M-15) | to: survival/Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: gating the heavy-autocannon barrel or rocket pod breech behind a boss-key drop (Cataclysm/Ars boss) makes the largest ship-weapons a genuine progression unlock, not just a material grind
- from: cbc_at munitions (AP rounds, rockets) | via: bountiful bounty objective | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: commissioned munition loads as Bountiful bounty objectives — a weapons-specialist player fabricates and supplies them; other players demand ammo they can't easily make themselves (combat-route supply completing M-15's gate with its economy side)
- from: cbc_at:bronze_rifled_barrel | via: minecolonies hut unlock | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies doesn't naturally produce weapons/cannons — a "weapons hut" producing rifled barrels is not in-pack; forced colony route without an existing hut type
- from: cbc_at bronze barrels/breech | via: tfmg:casting | to: Create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: cbc_at barrels already use create:cutting and CBC assembly chains — adding a TFMG casting pre-step is redundant complexity with no new pillar gained; still within Create

OK — connections sound (Create + aeronautics). Two new links: M-15 boss-gate and M-34 combat-supply.

---

## comforts   [anchors: survival (1)]

**Power-read:** 33 blocks, 33 items — sleeping bags and hammocks in 16 colors each. Vanilla wool+string recipes. No processing methods, no loot. QoL-only.

LEAVE — pure vanilla-recipe QoL/sleep mod; no foreign-material join surface, no loot, no methods. Forced edges on dyed wool items would be noise with no loop benefit.

---

## createaddoncompatibility   [anchors: support (1)]

LEAVE — zero blocks, zero items; pure tag-unification glue that merges duplicate Create-addon items (plastic, kerosene, etc.). No content surface to route. Its one existing inbound weave (tfmg:distillation for plastic) already serves its function.

---

## farmersdelight   [anchors: survival, Create (2)]

**Power-read:** 132 blocks, 187 items, 72 c:tags; the pack's central food-processing hub (cooking/cutting/dough/food_serving). Already woven: create:filling/milling/mixing + immersiveengineering machines. Well-connected.

- from: farmersdelight cooked dishes (stews, pies) | via: minecolonies provisioning / MineColonies Tavern/Cook hut | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies Cook hut that requests FD's stews/pies to feed colonists creates real repeating demand — the kitchen becomes a colony-supply contract, not just player-food; colony demand gates the value of farming
- from: farmersdelight:cabbage / tomato / onion / rice (new crops) | via: serene_seasons season-gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: FD's unique crops restricted to their appropriate seasons (tomato/cabbage in summer, cabbage in autumn) makes seasonal ingredient scarcity real — a pressured farming loop feeding both kitchen and colony demand
- from: farmersdelight high-tier dishes | via: bountiful bounty objective | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: FD dishes are already produced by most players (kitchen is a shared resource, not a specialist build); M-34 (combat-route supply) is the wrong motif here — more like ambient provisioning; the M-28 colony route above captures the real demand-gate
- from: farmersdelight:straw | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: straw is already an established FD byproduct; milling it again is a redundant step with no new cross-route
- from: farmersdelight cooked meals | via: numismatics bare sell | verdict: REJECT | reason: ambient endpoint

OK — existing connections (survival + Create) are sound. Two new links: M-28 colony provisioning (economy third anchor) and M-16 seasonal crop pressure.

---

## mru   [anchors: support (1)]

LEAVE — pure code-sharing library (0 blocks, 0 items, no loot); no player-facing content surface whatsoever.

---

## bountiful   [anchors: economy (1)]

**Power-read:** 1 block (bountyboard), 9 items; reward/objective pools are fully data/config-driven. Its real power is as the pack's demand-shaping layer — every production pillar can funnel goods through it.

- from: bountiful bounty reward pool | via: numismatics coin as reward payout | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: setting bounty rewards to numismatics:cog/spur (player-minted coin) makes Bountiful the primary coin-earning mechanism for non-minters; it's player-run because the board requests goods that players produced — coin circulates from the server's minting specialists to the bounty-fillers
- from: bountiful decree objective pool | via: curating objectives toward Create-processed goods + magic reagents | to: Create + magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a Decree configured to request Create-processed goods (pressed iron sheets, brass ingots) or magic reagents (source gems, occultism dusts) cross-wires the demand side — production specialists find their surplus items requested, forcing cross-route trade
- from: bountiful deck objectives | via: minecolonies research unlock | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: gating higher-tier Decrees (rare/epic bounty pools) behind a MineColonies research node (e.g. Town Bulletin Board research) means economic sophistication requires colony progression — knowledge gates the service layer
- from: bountiful | via: bare sell ambient endpoint | verdict: REJECT | reason: board is *already* the economy anchor; adding "it pays coin" without gating demand is the ambient outcome, not a weave — the M-08 row above captures the real motif

REWORK: dossier notes M-09 (luxury good→coin) as the obvious weave — that motif is retired. The replacement framing here is M-08 (player-minted coin as reward) + M-29 (cross-route demand shaping) + M-37 (research-gate on higher tiers). REWORK the dossier's M-09/M-14 suggestions to these three motifs.

---

## drones   [anchors: aeronautics (1)]

**Power-read:** 6 blocks, 7 items; pocket_drone is a personal quadcopter built from arbitrary blocks in-world. Rotors are wood/iron/ion tier. Currently all vanilla-recipe crafting; loot=yes but no unique loot items.

- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the highest-tier drone thruster built through a sequenced assembly chain (brass components + precision mechanisms) makes a proper Create build milestone; "of course the ion drive needs precision engineering"
- from: drones:iron_rotor | via: create:pressing (metal sheet → rotor blank) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: applying a pressed metal sheet via item_application/deploying to make a rotor blank is a light single-step that slots the mid tier naturally into Create; everyday depth without over-complicating it
- from: drones:controller | via: minecolonies research unlock | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: gating the drone controller assembly behind a MineColonies research node (Engineering or equivalent) means advanced personal logistics requires colony investment — knowledge gates the capability
- from: drones:pocket_drone (equipped item) | via: bare sell | verdict: REJECT | reason: ambient endpoint
- from: drones drill-drone | via: createoreexcavation integration | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: createoreexcavation:drilling is a Create Ore Excavation method — a drill-drone body does not interact with that method meaningfully; the drone's drill block is a separate entity behavior, not a recipe type routing

REWORK: dossier candidate M-06 sequenced-assembly for ion_thruster is validated as the strongest weave. M-05 native-method gating candidate is less clean (drones has no native machine type to gate on) — replace with M-06 + M-20 combo above.

---

## dndesires   [anchors: Create (1)]

**Power-read:** 84 blocks, 119 items; deep Create add-on with 5 registered methods (dragon_breathing, freezing, hydraulic_compacting, sanding, seething); its fan sails are a broad foreign-material sink (any pack item can get a sanding/freezing/seething recipe). Rubber is its signature output. Already inbound from create:mixing/mechanical_crafting/item_application/filling/emptying.

- from: any seasonal crop (farmersdelight/spawn) | via: dndesires:freezing (fan-freezing) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fan-freezing a crop or food item is a preservation/prep step before cooking — "frozen fish fillets go into the cooking pot differently" reads naturally; routes the FD food web through a new Create processing stage
- from: dndesires:rubber (hydraulic_compacting sap→rubber) | via: create:sequenced_assembly as gasketing/sealing component | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber as a sealing gasket in a sequenced-assembly chain for fluid machinery (pipes/tanks) makes the hydraulic press an upstream step in Create's own wet-processing tier; players who want fluid infrastructure need rubber first
- from: dndesires:cardboard_package | via: aeronautics cargo packaging | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: cardboard packages as the logistics standard for airship cargo holds — bulk goods packaged via dndesires before loading on a Aeronautics ship; gives the packaging mechanic its economic role and makes the logistics arm's cargo tangible
- from: dndesires milkshakes (food items) | via: farmersdelight:cooking integration | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milkshake food items fitting into the FD food-serving chain (a finished beverage from the Create kitchen) completes the survival food loop; Create-produced drinks join the meal table
- from: dndesires:rubber | via: bare sell | verdict: REJECT | reason: ambient endpoint; rubber is already captured as Create mid-tier material above

REWORK: dossier survival/food routing candidate (M-12) is validated and expanded. Cardboard/aeronautics link (M-31) is the clearest new pillar. Rubber→sequenced-assembly (M-06) gives Create depth.

---

## particlerain   [anchors: support/client (1)]

LEAVE — pure client-side weather particle rendering mod; zero items, zero loot, zero methods. No content surface to route.

---

## rolling_down_in_the_deep   [anchors: support/client (1)]

LEAVE — client-side camera/movement addon (Do a Barrel Roll extension); zero items, zero loot, zero methods. No content surface to route.

---

## companion   [anchors: support/QoL (1)]

LEAVE — behavior-only pet-safety mod; zero blocks, zero items, zero loot. No content surface to route.

---

## trek-b0.6.1.1   [anchors: survival (1)]

**Power-read:** 0 blocks, 0 items, 0 biome-modifiers, loot=yes — a structure datapack with chest loot tables. No items of its own, but loot-seed is a valid delivery mechanism per briefing.

- from: trek structure chest loot tables | via: loot-seed (seed Create components / magic reagents into trek chest pools) | to: survival→Create/magic | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: a progression-key component (e.g. a boss-adjacent blueprint or Create casting mould) hidden in a Trek fortress chest makes exploration the on-ramp to the tech tree — "of course the ancient fortress had working machinery plans"
- from: trek rare structure loot | via: loot-seed (numismatics coins into high-rarity chest pools) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: seeding pre-minted coins into loot chests is an NPC-adjacent coin faucet (coins appear without player minting) — contradicts the player-run ruling; the settlement medium must come from players pressing metal, not loot chests
- from: trek structure variety | via: loot-seed (seed occultism grimoires or ars_nouveau spell scrolls into themed structures) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an ancient ruin structure seeded with an occultism ritual page or Ars Nouveau spell parchment makes magic discovery exploration-gated rather than purely crafted — the "mob-drop reagent sink" motif extends to "structure-loot reagent seed" as the same distribution concept

REWORK: dossier assessment "2nd anchor = none — leave" is overly conservative given the loot-seed delivery method. Two loot-seed candidates (M-15 progression-key and M-02 magic reagent) convert trek into a second survival+magic/Create anchor at zero recipe cost.

== CHUNK COMPLETE ==
