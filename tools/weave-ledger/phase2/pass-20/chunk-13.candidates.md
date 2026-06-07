# Phase 2 candidates — chunk-13

## startuptime   [anchors: support/perf-diagnostic (1)]
- LEAVE — pure boot-time logger; zero items, zero methods, zero content surface. Nothing to weave.

## spawn   [anchors: survival (1)]
- from: spawn seafood/clam drops | via: create:milling (clam shells → lime powder) + farmersdelight:cutting (further prep) | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Clam shells milled for lime / chalk — a coastal byproduct that feeds Create's chemical chain and deepens the seafood processing loop.
- from: spawn:crab_boil_block / crab drops | via: farmersdelight:cooking (feast chain) → numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A crab boil feast is a coastal delicacy; selling it to Cook/Chef villagers (or a bounty) gives fishing an economic payoff beyond subsistence.
- from: spawn date-palm wood (date_log / date_planks) | via: create:crushing → M-04 lossy recycle | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Date palm is a common structural wood with no special premium; M-04 recycles deco-metal/stone, not ordinary planks. Weak forced edge.
- from: spawn aquatic mob drops (angler_fish, seal, sea_cow) | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Spirit-fire converts deep-sea creature essence into occult reagents — the abyss as a source of dark magic material.
- REWORK: existing FD bridge (farmersdelight:cooking/cutting) is sound as a 1st-anchor weave, but spawn is still 1-anchor; the three ACCEPTs above bring it to Create + magic + economy (4 total, 3 new).

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn library for Alex's Mobs; zero items, zero blocks, zero methods. Genuine zero-surface code library.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — ships only a vanilla crafting recipe restoring the bundle; no items, no methods, no material surface of its own. Pure vanilla-parity fix.

## openpartiesandclaims   [anchors: support/server-protection (1)]
- LEAVE — chunk-claim / party protection; zero items, zero methods, no content surface. Infrastructure mod; no weave possible.

## kobolds   [anchors: economy, survival (2)]
- OK — connections sound. Already 2-anchor (emerald trade economy + underground survival creature-feature).
- from: kobolds:kobold_skull | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Kobold skulls burned in spirit-fire yield an occult essence — undead-lizard-folk skulls feel right as a dark-magic ingredient, and it gives the kobold_skull a use beyond trophy.
- from: kobolds:kobold_skull / kobold_wither_skull | via: ars_nouveau:imbuement as attunement catalyst | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Redundant with the M-11 accept above; two magic routes for the same item is over-weaving a single drop. Keep M-11; drop M-10 here.
- REWORK: The economy anchor rides vanilla emerald trades only; consider an M-14 bounty board → numismatics payout for kobold warrior/captain kills to cement a non-emerald economy link — but this is a note for Phase 3, not a new Phase 2 candidate, since M-14 is already provisionally accepted. Flag for Phase 3.

## sounds   [anchors: support/client-audio (1)]
- LEAVE — client-only SFX overhaul; zero items, zero blocks, zero methods. Pure cosmetic audio.

## northstar   [anchors: Create, aeronautics (2)]
- OK — connections sound. Heavily Create-woven (crushing/mixing/pressing/sequenced_assembly inbound) and its rockets ARE the aeronautics transport pillar. Already ≥2 anchors.
- from: northstar:titanium_ingot / northstar:tungsten_ingot (Create-crushed from off-world ores) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Space-metal ingots, already Create-processed, minted into high-denomination coin — off-world ore scarcity directly funds the player economy.
- from: northstar:advanced_circuit | via: numismatics sell as specialist trade good | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: advanced_circuit is an endgame item but selling it as a coin good is thin flavor — a circuit is a component, not a luxury consumable. M-09 reads better on food/wine/luxury. The M-08 titanium/tungsten accept is the stronger economy hook; don't double up weakly.
- from: northstar:martian_steel_ingot | via: aeronautics structural recipe (airframe/hull ingredient) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Martian steel as a high-tier airframe alloy — an off-world expedition unlocks the best ships, tying space exploration to aeronautics construction depth.
- from: northstar:biofuel_bucket | via: TFMG/createaddition fuel pipeline → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar biofuel is a natural aeronautics propellant — off-world bio-synthesis feeds the airship fuel supply, expanding beyond diesel.
- REWORK: northstar's existing weaves (all inbound Create methods) are sound; the 3 ACCEPTs above add economy and strengthen aeronautics anchoring.

## zombiemoon   [anchors: survival (1)]
- LEAVE — hostile mob behavior mod; no unique drops, no items, no blocks, no methods. The dossier confirms vanilla rotten-flesh-style drops only. A forced drop-reagent edge would be invented. Genuine zero-surface content for weaving.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL slab-break mod; zero items, zero methods, zero material surface. Nothing to route.

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:processor + gamediscs:redstone_circuit (console components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The console's processor and redstone circuit are machine-crafted on a Mechanical Crafter — a whimsical gadget built via Create's precision assembly, making the gaming console a playful Create showcase.
- from: gamediscs:gaming_console assembly | via: create:sequenced_assembly (multi-step: etch circuit → press PCB → assemble console) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is reserved for endgame keystones; a retro novelty toy should not be a sequenced-assembly multi-chain. M-05 via mechanical_crafting is the right fit at this power tier. Don't over-depth a downtime toy.
- from: gamediscs:game_disc_* (mob-kill acquisition from skeleton kills) | via: bountiful bounty board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: clash | verdict: REJECT | reason: Bounties targeting "kill a Bee/Frog/Rabbit with a skeleton" are absurdly contrived as a trade-economy hook. Tone clash — the disc gimmick is a fun easter egg, not an economy driver. Don't monetize it.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure API/base-class library for MMF-Group mods; zero items, zero blocks, zero methods. Genuine zero-surface code library.

## bakery   [anchors: survival (1)]
- from: bakery high-tier finished goods (strawberry_cake, chocolate_gateau, apple_pie, tarts) | via: numismatics sell / MineColonies food supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A master baker's cake sells for real coin at a trading post — the bakery chain has tangible economic payoff, connecting cozy food craft to the pack's currency.
- from: bakery wheat → flour step | via: create:milling (wheat → flour as an alt to crafting_bowl) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create Millstone grinds wheat to flour — the bakery chain plugs into the tech spine at its base ingredient, making a windmill a natural bakery feeder.
- from: bakery:apple_jam / chocolate_jam / fruit preserves | via: ars_nouveau:imbuement as seasonal catalyst | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Jams-as-arcane-catalyst is a stretch — fruit preserves are food, not magical reagents. M-16 is stronger when the seasonal item is a raw material (a crop, a metal) not a finished luxury food. Tone slightly off; not coherent enough to survive red-team.
- REWORK: existing anchor is survival-only via Farm & Charm cooking chain. The two ACCEPTs (M-09 + M-12) bring bakery to Create + economy (3 total).

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:ritual or ars_nouveau:imbuement as reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The giant crab's claw already brews a reach-extending potion; feeding it into a magic ritual as an attunement reagent is a natural next step — the sea's physical-extension motif translates to arcane extension of reach/sense.
- from: friendsandfoes copper-themed deco (copper_button, weathered/oxidized variants) | via: create:crushing → copper nuggets/scrap | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Friends & Foes' copper buttons are minimal-count flavor items, not a significant deco block set. M-04 is designed for bulk deco recycling (stone/metal block sets); crushing 4 copper button variants is too thin to justify the edge. Volume doesn't support it.
- from: friendsandfoes:crab_claw (hostile mob boss-lite drop) | via: bountiful bounty board → numismatics payout (combat loot → economy) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A bounty board posts contracts for Wildfire / Illusioner kills, paying coin — the mob-vote creatures become targets of the pack's combat economy.
- REWORK: existing connections are vanilla only; the two ACCEPTs (magic + economy) bring this to 3-anchor.

## companion   [anchors: support/QoL (1)]
- LEAVE — pet-safety behavior mod; zero items, zero blocks, zero methods. Nothing to weave.

## owo   [anchors: support/library (1)]
- LEAVE — developer UI/config/networking library; zero items, zero blocks, zero methods. Genuine zero-surface code library.

## timm   [anchors: support/QoL-client (1)]
- LEAVE — client-side biome title overlay; zero items, zero blocks, zero methods. Pure UI immersion polish.

## chefsdelight   [anchors: survival, economy (2)]
- OK — connections sound. Already 2-anchor (food/FD meals → survival; villager trade → economy).
- from: chefsdelight Cook/Chef villager trades | via: numismatics coin integration (KubeJS trade-to-coin bridge) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The Cook and Chef sell Farmer's Delight feasts for emeralds — a KubeJS bridge prices those meals in numismatics coin, wiring the village food economy into the pack's real currency and making Cook an early economy on-ramp.
- REWORK: existing economy anchor is via emerald villager trades, which is outside numismatics. The M-09 accept above deepens the economy hook to the pack's actual currency system; without it the economy anchor is somewhat hollow (vanilla emeralds, not pack coin). Flag as a priority deepening for Phase 3.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds loot tables (custom chests in 15+ room types) | via: loot-seed → numismatics coin + magic reagent drops | to: economy + magic | motif: M-08 / M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Delving a YUNG stronghold yields coin caches and rare magic reagents in the deepest vaults — the dungeon is now an early investment target (survival risk → economy reward), and reagent drops feed magic without a direct recipe gate.
- from: betterstrongholds hidden areas / boss-adjacent rooms | via: loot-seed → boss-key component drop | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A stronghold vault contains a fragment needed for a complex Create machine — exploration gates tech, not just loot. The dungeon becomes a required pilgrimage for tech specialists.
- REWORK: dossier says "defer loot-table tweak" — this pass overrides that with real loot-seed candidates per briefing §Delivery mechanisms: a loot-bearing structure is NOT a LEAVE. The two ACCEPTs (economy+magic loot-seed, plus Create boss-key) bring it from 1-anchor to 4.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship onboard loot chests | via: loot-seed → aeronautics craft components / Create structural parts | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: A sky whale's cargo hold contains rare structural alloys and airframe parts — reaching a whale by ship is both the challenge and the reward, giving aeronautics players a high-altitude scavenger hunt.
- from: sky_whale_ship onboard loot chests | via: loot-seed → numismatics coin + rare trade goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Sky whale loot is premium trade stock — rare materials carried out of the sky fetch good coin, making whaling runs an adventurer's economic strategy.
- from: sky_whale_ship onboard mob spawners (hostile whales) | via: bountiful bounty board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: A bounty "kill the hostile whale's guards" is coherent in isolation but redundant — the loot-seed M-09 accept already gives the whale economic weight. A third economy hook on the same structure is over-weaving. Keep the two loot-seed accepts.
- REWORK: dossier candidate said M-05 for aeronautics, loosely. M-23 via loot-seed is a tighter fit (structural alloys as rewards) than M-05 (native-method gating, which needs a crafting gate, not a loot drop). The revised framing is cleaner.

== CHUNK COMPLETE ==
