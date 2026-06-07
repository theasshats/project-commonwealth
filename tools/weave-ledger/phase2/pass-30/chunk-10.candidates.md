# Phase 2 candidates — chunk-10

## ribbits   [anchors: survival (1)]
- from: ribbits:toadstool (red/brown toadstool blocks) | via: create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: toadstool caps mill into mushroom dust — a loose Create feedstock for brewing/mixing, giving the swamp village's flora a minor Create use and pulling ribbits into the production spine
- from: ribbits:swamp trade node (amethyst-shard currency) | via: numismatics mint bridge | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare sell-link — "Ribbit merchants trade for amethyst shards which players then sell" is an ambient endpoint, not demand-gating; M-21 is cut; a Numismatics bridge here would be an NPC coin faucet flavored as a player trade, no demand gate is created
- from: ribbits:mossy_oak_planks | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood variant — mossy oak is vanilla-functionally identical to oak planks; routing it through Create cutting adds nothing the base wood set doesn't already cover; no meaningful weave depth

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal ore runs through a Create crusher yielding dark metal dust + xp nugget byproduct — a reward path that threads this hostile-mob loot into the production spine; gear becomes an outcome of the Create ore-processing chain rather than a pure bench recipe
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: bundle of bones from undead mobs transmuted in an Occultism spirit fire into a necromantic bone-meal intermediate — gothic horror drop gets a magic use, and Occultism players need a reason to hunt Born in Chaos mobs
- from: born_in_chaos_v1:dark_metal + boss drops (Soul Saber / Pumpkin Staff) | via: emergent trade (combat-route supply) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a combat specialist farms Born in Chaos bosses/elites for dark metal and boss drops; non-combat players (Create builders, magic users) need dark metal for the Create-processed chain (M-03) or Occultism ritual (M-11) — dual-role boss makes it an economy node
- from: born_in_chaos_v1:bagof_candy | via: create:mixing (seasonal ingredient) | to: survival | motif: M-16 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — bagof_candy is a seasonal Halloween-event drop; routing it through a Create mixer as a seasonal food ingredient strains both mods' vibes; Create's industrial mixing and Halloween candy are thematically inconsistent; forced edge

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: fallen meteor chunks crush into nickel/iron dust + an xp nugget — a minor Create feedstock reward that gives meteors something to do beyond deco; players have a light incentive to locate meteor craters
- from: Blood Moon / Blue Moon active event | via: occultism:ritual gated on moon state | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Occultism rituals (or Ars Nouveau spells) only complete under a Blood Moon or Blue Moon — the lunar event becomes a hard schedule gate, not just atmosphere; forces magic players to track the moon cycle
- from: Harvest Moon crop-boost | via: config tie (growth-rate multiplier) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: already anchored to survival — the Harvest Moon IS the survival anchor; this is the same system, not a second one; no new pillar crossed
- REWORK: existing survival anchor — OK, but the two ACCEPTs above (M-04 meteor + M-22 lunar ritual gate) move it to 3 anchors (survival/create/magic); no rework needed on current entry

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structure chest loot | via: loot-seed (datapack edit seeding Create components or magic reagents into trek loot tables) | to: survival↔create/magic | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: trek's exploration structures carry seeded progression keys — a rare Create sequenced-assembly component or a magic scroll as exploration reward turns these ruins into a reason to leave base; exploration pressure feeds the production loop
- REWORK: the dossier candidate says "leave — no items/methods; weave only indirectly via loot-table edits" and then dismisses it. The briefing explicitly says structure/dungeon mods with loot=yes must be considered via `via: loot-seed` and should NOT be left. The ACCEPT above corrects this.

## ding   [anchors: support (1)]
- LEAVE — pure client audio cue; zero items, zero methods, zero loot surface. No coherent weave possible.

## simplehats   [anchors: support (1)]
- from: simplehats rare hat (collectible cosmetic) | via: loot-seed into boss/dungeon tables | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: rare hat as a boss-drop reward is a cosmetic, not a demand-gating link; M-34 requires the drop to be traded to non-combat players because they *need* it for a production/magic step — a cosmetic hat has no downstream demand in the loop; REJECT as bare cosmetic sink
- from: simplehats:custom_hatscraps recipe | via: simplehats:custom_hatscraps (recycles unwanted hats → scraps → upgraded bags) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 consumption-sink requires the item to be spent against *pressure* (fuel/food/upkeep); hat-scraps are a self-contained cosmetic recycling loop with no pressure axis; doesn't close the loop
- LEAVE — cosmetic-only mod; its mechanics are entirely self-contained; no method to route foreign material through and no downstream production demand for hats. Sanctioned support role; no forced weave.

## better_climbing   [anchors: support (1)]
- LEAVE — client-side movement tweak; no items, no methods, no loot. Genuine zero-surface.

## fxntstorage   [anchors: create, survival (2)]
- OK — connections sound. Already 2-pillar (Create-tier-gated via create:mechanical_crafting + survival QoL). The dossier's flight-upgrade/aeronautics note was correctly passed over. No rework needed.

## createtreadmill   [anchors: create (1)]
- from: createtreadmill:treadmill (player-operated kinetic source) | via: M-33 service analog — a player specialist "sells" sustained SU to a shared Create network in exchange for colony goods/coin | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: M-33 is a labor/service motif for a specialist performing *work on another player's materials*; a treadmill is self-operated infrastructure, not a service exchanged between players; no real economy link formed here
- from: createtreadmill:maid_motor consuming touhou_little_maid Soul Orb | via: cross-mod material consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: this links to touhou_little_maid (a curated flavor mod), not to a system pillar; M-26 requires the item to be *spent against pressure*; a Soul Orb powering a motor is a flavor link, not a system closure
- LEAVE — a low-tier novelty SU source; its only cross-mod link is to the maid flavor mod, not to a loop system. Dossier conclusion was correct.

## death-count-1.0   [anchors: support (1)]
- LEAVE — scoreboard cosmetic datapack; no items, no loot, no methods. Genuine zero-surface.

## kubejs_create   [anchors: support (1)]
- LEAVE — pure scripting bridge; no items, no loot surface, no in-game method to route material through. Weaving infrastructure, not a weave target.

## zombiemoon   [anchors: survival (1)]
- from: zombiemoon mutant zombie mob | via: loot-seed (custom drop seeded via loot-table edit) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: mutant zombies (notably the Mutant Brute) drop a rare "corrupted flesh" reagent (seeded via loot-table edit) consumed in an Occultism spirit_fire ritual — harder undead variant earns harder to source reagent; combat-specialist supply chain to magic users
- REWORK: dossier says "leave — no unique drop or method to route through; forcing a drop-reagent here would be an invented edge." The briefing says loot=no AND 0 items means check whether a loot-seed is still plausible. zombiemoon loot=no and 0 items confirmed — there is genuinely no loot table to seed into and no items in the jar. The "corrupted flesh" above would be a completely invented item (not registered by the mod), not a loot-seed. On re-evaluation: RETRACT the ACCEPT above — this is an invented edge, exactly what the briefing forbids. Correct verdict is LEAVE.
- LEAVE — 0 items, loot=no; the mod adds mob behaviors only. Any reagent would be invented wholesale, not a weave of existing material.

## create_confectionery   [anchors: create, survival (2)]
- from: create_confectionery:bar_of_ruby_chocolate or create_confectionery:black_chocolate_candy | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-tier chocolate (ruby or black) is an imbuement catalyst ingredient in an Ars Nouveau source-gem enhancement — confectionery luxury as a magic catalyst adds a production↔magic cross-route so a magic specialist needs the chocolate factory's output
- from: create_confectionery:hot_chocolate (grants Regeneration) | via: farmersdelight:cooking as a recipe ingredient | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already an existing anchor — adding a cooking step deepens the existing anchor rather than crossing to a new system; no new pillar reached
- from: create_confectionery output (chocolate goods, effect candies) | via: MineColonies colony request or demand driver | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies colony requests chocolate goods as a colony supply (colony citizens consume candies as morale/buff items), making the confectionery chain a recurring colony demand rather than a one-time craft; production is pulled by colony logistics
- OK — existing create + survival connections sound. The two ACCEPTs add magic and economy as 3rd/4th anchors.

## xaerominimap   [anchors: support (1)]
- LEAVE — client minimap UI; no items, no loot, no methods. Genuine zero-surface.

## midnightthoughts   [anchors: survival (1)]
- from: well-rested buff (sleep-dependent status effect) | via: config tie linking to Cold Sweat or Serene Seasons | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this links survival↔survival (both rest and seasons are already anchored to survival); no new pillar crossed; same-system note, not a weave
- LEAVE — no items, no loot, no methods; rest/sleep buff only. No coherent cross-system weave possible. Single-pillar survival support.

## create_better_villagers   [anchors: create, economy (2)]
- from: create_better_villagers trades (emerald → Create parts) | via: Numismatics coin re-denomination | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the villager trades are re-denominated from vanilla emeralds into pack-minted Numismatics coins — players who mint coin can now buy Create components from the profession villagers, closing the loop between the coin economy and the Create supply chain; mintable currency gains a real local demand sink
- REWORK: existing economy anchor is via vanilla emerald trading, which is structurally an NPC coin faucet (emeralds come from trading, not player minting). The anchor is legitimate (it IS a trade economy node) but the emerald denomination sits outside the player-run economy. The ACCEPT above is the rework — reframing it as a Numismatics coin demand-sink rather than a bare emerald trade. Flag for Phase 3: re-denominate trades in config or KubeJS.
- OK — Create anchor is sound (workstation-bound professions are a direct Create-supply route).

## kiwi   [anchors: support (1)]
- LEAVE — pure developer library; no items, no loot, no methods. Genuine zero-surface.

## crash_assistant   [anchors: support (1)]
- LEAVE — client crash-diagnostics utility; no items, no loot, no methods. Genuine zero-surface.

## particlerain   [anchors: support (1)]
- LEAVE — client visual/particle mod; no items, no loot, no methods. Genuine zero-surface.

## collective   [anchors: support (1)]
- LEAVE — shared code library; no items, no loot, no methods. Genuine zero-surface.

== CHUNK COMPLETE ==
