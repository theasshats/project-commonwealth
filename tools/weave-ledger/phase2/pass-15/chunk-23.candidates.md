# Phase 2 candidates — chunk-23

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content behavior mod: 0 items, 0 blocks, no loot tables, no recipe types. The feeding interaction is a pure QoL convenience and touches no material graph; there is no surface to weave through.

## durabilitytooltip   [anchors: support/client QoL (1)]
- LEAVE — genuine zero-content client-UI mod: 0 items, 0 blocks, client-side tooltip overlay only. No material surface, no loot, no methods to route anything through.

## create_better_villagers   [anchors: Create, economy (2)]
- Already 2-pillar (Create + economy). Connections sound: villager professions bound to Create workstations, trading Create parts for emeralds is a coherent Create↔economy bridge.
- REWORK: existing emerald denomination is a weak economy tie — it routes through vanilla emeralds rather than the pack's Numismatics coins, so the "economy pillar" link is soft.
- from: create_better_villagers trades | via: villager trade → numismatics payout | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: ACCEPT (provisional) | hook: Re-denominating the Andesite/Brass/Copper Worker's trades into pack coins cements the Create-parts market inside the player-run currency; emeralds become a secondary fallback, not the primary measure.
- from: create_better_villagers Miner profession | via: trade | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: Miner already buys/sells raw materials — it's functionally the same route as the Worker trade weave above; redundant entry would double-count the same bridge. Consolidate into one denomination-swap weave.

## mru   [anchors: support/library (1)]
- LEAVE — genuine zero-content pure-library mod: 0 items, 0 blocks, no loot, no recipe types. Exists only as a shared-utilities dependency; nothing to weave.

## everycomp   [anchors: support/decoration (1)]
- LEAVE — generator/compat shim: 0 blocks (grounded), runtime-generated assets ride host-mod namespaces. Any weaving belongs on the host mods (Create wood shapes, Macaw blocks) not on the generator. No independent material surface.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling ginger into a ground-spice or ginger-powder intermediate connects the winter crop to the Create processing web and feeds downstream cooking recipes — a player understands "you grind spices in the mill."
- from: snowyspirit:ginger / gingerbread_cookie / eggnog | via: farmersdelight:cooking or extradelight:oven | to: survival (food web depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ginger-based recipes in Farmer's Delight pots/Extra Delight ovens weaves the holiday crop into the broader food-processing web; seasonal ingredient meets the kitchen pillar.
- from: snowyspirit:eggnog / candy_cane / gingerbread_cookie | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seasonal luxury foods available only in winter (Serene Seasons) become a time-limited trade good — a spice merchant in a colony town sells eggnog for coins at a premium; scarcity window drives the market.
- from: snowyspirit:ginger (c:crops/ginger, seasonal — winter biome) | via: season-gated input → Create/magic | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ginger, harvestable only in winter, functions as a seasonal reagent for an Ars Nouveau imbuement or Iron's Spellbooks cauldron brew — a cold-natured infusion component makes intuitive sense.
- from: snowyspirit sled | via: flavour/transport | to: aeronautics | motif: no-motif | verdict: REJECT | reason: The sled is a bespoke terrain vehicle unrelated to Create Aeronautics physics ships; no motif covers "ground vehicle → ship pillar" and the tonal link is pure flavour. No-motif → reject-for-review.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / smallhull (ship hull components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Building a pirate cutter's hull at a Mechanical Crafter from Create brass sheets and iron frames makes the ship a mid-tier Create product — "you need a proper workshop to build a warship" is immediately legible.
- from: hpm:cuttermilitariseditem (war cutter) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The militarised variant — the most powerful ship — is a multi-stage assembly chain with a derpack:incomplete_warship intermediate, gating it behind the full Create sequence workshop; depth matches power.
- from: hpm:hand_cannon / hand_mortar | via: create:pressing + tacz:gun_smith_table_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Hand cannons crafted with Create-pressed iron plates at the gun smith table links naval weapons to the industrial spine; a pirate doesn't forge cannons by hand, they use the workshop.
- from: hpm ships (finished vessels) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A finished cutter or raft is a luxury good — a shipwright sells them for a tidy stack of coins; naval craft as high-value tradeable goods fits the emergent economy naturally.
- from: hpm:corvette_steamship_item | via: tfmg:casting + create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The steamship (the WIP flagship) demands cast TFMG iron/steel components from the industrial furnace, plus Create sequenced assembly — the steam-powered hull needs actual industrial metalwork.
- REWORK flag: dossier notes role-overlap with Create Aeronautics (ships) and Create Big Cannons (artillery) — this is a curation/thunderdome question noted in the dossier. The weave above (M-05/M-06 gating) is valid regardless; if hpm gets cut in thunderdome, these weaves are vacuous. Keep the weaves, note the dependency on the curation decision.

## rightclickharvest   [anchors: support/farming QoL (1)]
- LEAVE — genuine zero-content behavior mod: 0 items, 0 blocks, no loot, no recipe types. Right-click harvest is a pure interaction convenience that touches no material graph.

## tacz   [anchors: support/combat flavour (1)]
- from: tacz:gun_smith_table_crafting inputs (metal/components) | via: create:pressing + tacz:gun_smith_table_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gun recipes at the Gun Smith Table require Create-pressed steel/iron sheets and mechanical components — industrial firearms need industrial fabrication; the ore-scarcity spine directly throttles the arms supply.
- from: tacz high-tier guns (endgame variants) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: A precision military rifle is a multi-stage sequenced assembly chain through derpack:incomplete_firearm intermediates — the most lethal weapons require the most sophisticated factory.
- from: tacz:ammo / ammo_box | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ammunition is a consumable coin-sink — players buy bulk ammo_box for coins, creating a recurring economy demand loop that sustains the market beyond one-time purchases.
- from: tacz guns/ammo (scarce due to Create gating) | via: numismatics sell/bountiful board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A bounty board paying coins for confirmed kills (or boss drops) with TACZ weapons threads combat into the economy — the gun becomes a tool of the bounty trade, not just PvP flavour.
- from: tacz airship-mounted aesthetics | via: flavour | to: aeronautics | motif: no-motif | verdict: REJECT | reason: TACZ doesn't integrate natively with Create Aeronautics turret mounts; aeronauticscompat covers other turret mods, not TACZ. No motif covers "FPS gun on a ship" without a concrete mechanical bridge. No-motif → reject.

## sounds   [anchors: support/client polish (1)]
- LEAVE — genuine zero-content client audio mod: 0 items, 0 blocks, no loot, no recipe types. Sound replacement is purely cosmetic; nothing to weave.

== CHUNK COMPLETE ==
