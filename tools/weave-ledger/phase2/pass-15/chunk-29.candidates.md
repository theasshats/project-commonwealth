# Phase 2 candidates — chunk-29

## gamediscs   [anchors: survival (1)]
- LEAVE — Pure novelty toy (arcade minigame player); outputs are cosmetic playables with zero material surface. `gamediscs:processor` / `redstone_circuit` are vanilla-recipe flavor components, not a connective material — forcing a Create recipe on them buys a micro-Create anchor on a toy gadget with no player reason to care. No loot table (loot=no). Genuine zero-weave case; dossier agrees.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's signature crystal is the frozen heart of a glacial titan — of course a cryo-chamber assembly line needs it to fabricate a heat-sink or cryo-pipe keystone part.
- from: mowziesmobs:earthrend_gauntlet (Wroughtnaut drop) | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Wroughtnaut's indestructible axe head is the ferrous alloy shard a high-tier mechanical drill or forge press requires — raw mythic iron that no smelter can replicate.
- from: mowziesmobs:ice_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Spirit-fire ritual cracks the glacial spirit sealed inside the crystal, transmuting it into a cryo-essence for Occultism higher rites — the cold soul escapes into the formula.
- from: mowziesmobs boss drops (ice_crystal / sol_visage) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Infusing a boss artifact in the Ars apparatus attunes its primal energy — solar or glacial — into a high-tier source lens or focus upgrade.
- from: mowziesmobs boss kills | via: loot-seed (bountiful board) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Barakoa warchief's head and Frostmaw's claw are exactly the rare trophies a bounty board pays top coin for — prestige combat cashes out directly.
- from: mowziesmobs boss drops | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 bounty-board already covers the combat→economy path; adding a plain coin-sell on top is redundant and weakens the bounty mechanic's role as the gating layer. Collapse into M-14.
  REWORK: No existing weaves to flag (anchors: survival only, 1 pillar — no rework needed, just the new proposals above).

## just_blahaj   [anchors: decoration/support (1)]
- LEAVE — Decorative plush blocks; no material surface, no loot table. Wool/dye inputs are vanilla-only. No coherent Create/magic/economy/aeronautics routing exists that wouldn't be arbitrary. Dossier agrees; this is a friend-group flavor mod.

## followersteleporttoo   [anchors: support QoL (1)]
- LEAVE — Zero-content behavior mod (0 items, 0 blocks, loot=no). Pet-teleport tweak; no material or content surface to weave. Genuine zero-surface library/behavior case.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery | via: recipe (crafting/create:mechanical_crafting) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: A kinetic battery stores rotational energy — an Aeronautics ship engine drawing on a banked battery for burst thrust is a natural drivetrain fit; the battery block becomes a required component in a mid-tier propulsion assembly.
- from: create_connected:item_silo | via: config tie | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: No motif covers "logistics block as economy anchor." A silo is infrastructure, not a sellable good or currency-path item. No-motif → REJECT-for-review per briefing rules.
- from: create_connected:brass_gearbox | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: The brass gearbox is exactly the torque-splitting component an airship needs to route shaft power to multiple propeller shafts — it belongs in the drivetrain recipe for a multi-rotor vessel.
  REWORK: create_connected has loot=yes (loot table present) but no existing inbound weave beyond its own Create recipes. Its 2nd-pillar gap is real — the aeronautics proposals above close it. Existing Create-internal recipes look appropriate and not arbitrary.

## fishingreal   [anchors: survival (1)]
- LEAVE — Behavior-only mod (0 items, 0 blocks, loot=no). It intercepts fishing-loot events to spawn live fish entities; no material surface of its own. Any weaving belongs to the content mods it enables (farmersdelight, createfisheryindustry), not to this behavior layer. Genuine zero-surface case.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — Pure runtime memory-optimization library. Zero items, zero blocks, loot=no, no registered recipe-types, no in-world mechanic. Archetypal zero-content case; no weave is possible.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already at the 2-pillar goal (Create via sequenced_assembly + aeronautics/train lighting). No new pillar needed. Existing sequenced_assembly route is coherent (lamp intermediates are properly gated behind Create). No rework flagged.
- Exploratory: from: ctl:htlb_block | via: numismatics sell / trading_floor:trading_depot | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no). Train lighting fixtures are an industrial product, not an organic trade-seam item. The link is architecturally thin — HTLB is a Create-internal deco part, not a luxury good. Reject on M-21 provisional status and weak trade logic.

## terrablender   [anchors: support (1)]
- LEAVE — Worldgen API/library (0 items, 0 blocks, loot=no). No in-world device, no material surface. Its value is invisible biome-blending at worldgen registration time. Pure dependency; no content to weave.

## trading_floor   [anchors: Create, economy (2)]
- OK — connections sound. Already at 2-pillar goal (Create depot variant + automated villager trading = economy spine). The natural M-08 keystone use (feed Create-processed scarce metals into the depot to mint emerald/Numismatic value) is the most coherent link and is noted in the dossier. No rework flagged.
- from: trading_floor:trading_depot | via: trading_floor depot feeding coin path | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Run a Create production line's refined metal output through the Trading Depot's automated trade; the depot converts processed scarcity into coin — exactly the Create→economy pipeline M-08 describes. Delivery: config/KubeJS price assignment pairing the depot's emerald output to a Numismatics exchange rate.
- from: trading_floor:trading_depot + magic components | via: trading_floor depot + villager trade | to: magic | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no). While a "magic librarian" trade through the depot is conceptually plausible, this is exactly the exploratory edge M-21 flags as unresolved — and trading_floor already sits at 2 pillars. Surface for review only; do not author.

== CHUNK COMPLETE ==
