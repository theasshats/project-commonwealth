# Phase 2 candidates — chunk-11

## cbc_at   [anchors: create, aeronautics (2)]

Dossier says ≥2 anchors already (Create + aeronautics). Review existing connections first.

REWORK: OK — connections sound. Create-machined munitions arming Aeronautics ships is a clean causal path, tightly motivated. No arbitrary or lore-clashing links.

New candidate via method-pull:

The dossier itself names boss-drop gating as the obvious deepening. The heavy autocannon barrel / rocket pod are high-tier ship weapons — endgame by the pack's cost model. A boss-drop gate (M-15) on the heavy tier fits the "more steps for higher tiers" rule precisely: light autocannon = standard Create chain; heavy autocannon + rocket pod = same chain plus a boss-drop input (the gate is the extra *step*, not a cost multiplier).

- from: cbc_at:bronze_heavy_autocannon_barrel / cbc_at:bronze_rocket_pod_breech | via: KubeJS recipe gate (boss drop as required input, added to existing create:cutting/CBC assembly chain) | to: survival (boss-drop route) | motif: M-15 | power: endgame | tone: ok — heavier weapons demanding a proof-of-danger kill is immediately legible; PvPvE pack, so ship weaponry gating on the dangerous world is thematically clean | verdict: ACCEPT | hook: you can build light autocannons off the factory floor, but the heavy barrel and rocket pod demand a kill-trophy — the world has to push back before you arm a warship

- from: cbc_at:bronze_heavy_autocannon_barrel (combat-route supply) | via: emergent player trade | to: economy | motif: M-34 | power: endgame | tone: ok — combat specialists farm boss drops → trade heavy-weapon components to shipwrights who don't fight; the loop closes without forcing a recipe | verdict: ACCEPT | hook: the fighter and the builder need each other — a fighter sells the boss key that unlocks the heavy turret, a builder sells the hull the fighter flies on

- from: cbc_at:ap_rocket_item (munitions as a consumption sink) | via: M-26 consumption (munitions are spent against danger/pressure) | to: survival | motif: M-26 | power: mid | tone: ok — ammunition is literally consumable in combat; demand never zeroes | verdict: ACCEPT | hook: munitions burn through combat; a warship's magazine is a standing order, keeping munitions makers relevant even when no new ships are being built

- from: cbc_at munitions materials (gunpowder, propellant inputs) | via: regional-scarcity gate (propellant precursors are region-locked ores) | to: economy (scarcity foundation) | motif: M-30 | power: mid | tone: ok — propellant chemistry needs saltpeter or nitrate precursors; region-locking those makes the warship economy depend on who controls the raw inputs | verdict: ACCEPT | hook: whoever settles the saltpeter region controls the ammunition supply — regional scarcity makes the munitions trade non-optional

- from: cbc_at weapons as Colony unlock | via: MineColonies research/supply gate | to: economy (colony route) | motif: M-28 | power: endgame | tone: clash — armaments aren't a colony-production natural fit (colony produces basics, not bespoke weapons); forced | verdict: REJECT | reason: thematic clash — a MineColonies production route for advanced autocannon barrels contradicts the colony-as-basics-producer model; boss-drop route (M-15, above) is the correct high-tier gate here

## occultengineering   [anchors: create, magic (2)]

REWORK: OK — connections sound. occultengineering IS the Create×Occultism bridge by construction; both anchors are well-motivated. The dossier also correctly identifies the dossier's own "weak" sterling silver→coin link (M-08) — reviewed below.

New candidate via method-pull:

sterling_silver (c:ingots/sterling_silver, an occult alloy) is tagged and usable as a coin metal. It is scarce (Occultism-tied, not freely obtained), which is what M-08 requires — player-minted currency from scarce regional metal → Create-processed → Numismatics coin. This is flagged WEAK in the dossier but let's power-read it: sterling silver is a genuine alloy with Occultism depth (requires spirit-fire or ritual to produce), it is not trivially obtainable, and minting it as a distinct high-value coin tier gives it a second system anchor beyond the Create×magic bridge it already is.

- from: occultengineering:sterling_silver (ingot) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid (requires Occultism progression to obtain) | tone: ok — an occult alloy as a premium coin tier is thematically coherent (alchemy/silver → money is a real historical chain) and a player would accept it; the key test: is sterling silver scarce enough to make minting a specialization? Yes — it's behind Occultism's spirit-fire, not trivially farmable | verdict: ACCEPT | hook: the alchemist's silver pressed into coin — the occult specialist is also the mint-master, and the economy runs on their output

- from: occultengineering:spirit_solution (reserved reagent) | via: occultism:ritual as a gate for cross-route items (a ritual requiring spirit_solution to produce a Create-needed component) | to: economy (cross-route dependency) | motif: M-29 | power: mid | tone: ok — a Create component that can only be finished through an Occultism ritual locks in that cross-dependency | verdict: ACCEPT | hook: the brass gear needs a whisper of spirit to hold — the machinist trades with the occultist or the machine won't turn

- from: occultengineering:phlogiport (wireless logistics teleporter) | via: logistics bulk-goods movement | to: aeronautics/economy (logistics arm) | motif: M-31 | power: mid-endgame | tone: clash — M-31 is specifically about goods that require aeronautics/trains to move at scale; a teleporter *bypasses* that logistics arm and threatens regional scarcity rather than serving it; the loop says keep travel meaningful | verdict: REJECT | reason: phlogiports are a logistics-erase mechanic for the scarcity foundation — proposing them as M-31 (logistics-required bulk good) contradicts the balance lens (§5); the right framing is a design-tension flag, not a weave

## fogoverrides   [anchors: support/client-QoL (1)]

0 items, 0 blocks, 0 loot, pure config-driven visual. No material surface to route through any method.

LEAVE — genuine zero-content config mod; atmospheric/visual only; no items, no loot, no recipe surface to weave on any motif.

## trashslot   [anchors: support/QoL-client (1)]

0 items, 0 blocks, 0 loot. UI-only inventory slot; deletes items, produces nothing.

LEAVE — zero-content client UI mod; no material surface to weave; the void-slot function has no loop coupling.

## create_hypertube   [anchors: create, aeronautics (2)]

REWORK: OK — connections sound. Kinetic-powered player/entity transport through tube networks cleanly anchors to both Create (kinetic power, sequenced_assembly crafting) and the aeronautics/logistics pillar (moving entities across the map, the economy's physical arm).

New candidate via method-pull:

The hypertube itself is built via create:sequenced_assembly (confirmed in dossier made-by). Its blocks are: hypertube, hypertube_accelerator, hypertube_entrance — 4 blocks / 6 items. Power-reading: the tube network is an infrastructure build, equivalent to train track. At high scale (connecting colonies, player bases, trade hubs) it becomes a logistics service.

- from: create_hypertube tube network (infrastructure) | via: M-33 service-for-hire (a player who builds/maintains the tube network charges passage or route construction fees to others) | to: economy | motif: M-33 | power: mid-endgame | tone: ok — a tube-network builder as an infrastructure specialist-for-hire fits the PvPvE social model cleanly; "pay the engineer to run a spur to your base" is exactly how a player economy generates labor value | verdict: ACCEPT | hook: the tube network is infrastructure — someone built it, and someone pays for the connection

- from: create_hypertube:hypertube_entrance (requires kinetic power) | via: consumption sink (kinetic energy burned to sustain the tube) | to: survival/Create | motif: M-26 | power: everyday | tone: ok — the tube consumes rotational power continuously; a large network is an ongoing energy demand | verdict: ACCEPT | hook: the faster you want to travel, the bigger your power plant needs to be — tube networks drive generator demand

- from: create_hypertube as a colony logistics seam | via: MineColonies courier/delivery routes threaded through hypertube nodes | to: economy (colony route) | motif: M-28 | power: mid | tone: clash — MineColonies colonists can't actually use hypertubes (no villager-NPC pathfinding through the tube mechanic); forced behavioral coupling that the mod doesn't support | verdict: REJECT | reason: no technical hook for colonists to enter/exit tube networks; coupling is cosmetic not mechanical



