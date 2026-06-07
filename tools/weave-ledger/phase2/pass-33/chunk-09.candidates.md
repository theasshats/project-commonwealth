# Phase 2 candidates — chunk-09

## create_factory   [anchors: create, survival (2)]

REWORK: existing 2nd-anchor candidate in dossier cites M-09 (retired "luxury good → coin") — that entry must be replaced with a real demand-gate link.

- from: create_factory jam/nectar fluids (sweet_berries_jam, nectar, glowberry spread) | via: create:mixing (as flavoring additive ingredient) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: ferment jam into a Create mixer batch for a glazed confection that qualifies as a distinct Spice-of-Life diet item — the sweet-food specialist feeds the survival pressure loop
- from: create_factory cream_bucket | via: create_cheese:maturing | to: survival | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: cream matures into a spreadable cheese variant under the aging mod — the confectionery chain grows a time-value step without a new machine
- from: create_factory finished sweets (caramel/honey waffles/rolls) | via: M-08 (bare sell endpoint) | to: economy | motif: M-09 retired | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — "sweets are sellable" is the ambient endpoint, not a weave; needs a demand-gate to count
- from: create_factory honey_glazed_berries / cake_paste | via: MineColonies cook/request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony Cook requests cake_paste and glazed berries as colony food supply — confectionery specialist becomes a colony provisioner, demand never zeroes

OK — core Create+survival anchors are sound. The M-09 dossier note is retired; M-12/M-35/M-28 replacements above cover the second-anchor goal.

---

## towntalk   [anchors: support/immersion (1)]

LEAVE — zero items, zero methods, zero loot. Pure client audio flavor for MineColonies colonies; no material surface to route through any method. Audio immersion is the entire content surface and that rides on MineColonies' anchor, not an independent node.

---

## crash_assistant   [anchors: support/client-utility (1)]

LEAVE — zero items, zero methods. Client crash-diagnostic tool; no content surface whatsoever. Genuine zero-surface library/behavior mod.

---

## lootjs   [anchors: support/library (1)]

LEAVE — zero items, zero methods. KubeJS-addon scripting library — it is the *enabler* of M-02 mob-drop weaves (and M-15 boss-key loot seeding) for the whole pack, not a content node. Nothing to route.

---

## minecolonies_compatibility   [anchors: survival, create (2)]

REWORK: dossier notes "no new edge to force" but the loot=yes flag and the colony-worker bridge surface are non-trivial; worth checking for a third anchor.

- from: minecolonies_compatibility Butcher worker job (renders carcasses) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony Butcher hut routes animal carcasses through Farmer's Delight cutting boards — colony production feeds the food/survival processing chain without the player's intervention
- from: minecolonies_compatibility Orchardist + BotanyPots crops | via: MineColonies research gate on Orchardist unlock | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the Orchardist hut is unlocked only via MineColonies research tree — the capability to grow modded crops at scale is knowledge-gated, so a crop-production specialist can't simply be bought out; they must have built the research
- from: minecolonies_compatibility Create Stock Link courier bridge | via: MineColonies colony logistics | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the Courier ↔ Create Stock Link bridge makes colony distribution a cheaper alternate logistics route — colony as the economy's bulk-goods mover without needing full aeronautics
- from: minecolonies_compatibility citizen_terminal storage bridge | via: sellable to coin | to: economy | motif: M-09 retired | verdict: REJECT | reason: "storage bridge is economically useful" is ambient; the real link is already captured by M-28 above

OK — the Create + survival anchors are sound as integration glue; M-12/M-37/M-28 above add depth.

---

## underground_village   [anchors: survival (1)]

- from: underground_village Stoneholm loot chests (loot=yes) | via: loot-seed — seed Numismatics coin + scarce ore fragments into Stoneholm chest pools | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the underground settlement sits in a specific ore-region; its chest loot reflects that region's scarce material — players trade routes to Stoneholm become economically meaningful
- from: underground_village Stoneholm villager trades | via: loot-seed / trade-table edit seeding Create components | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm smiths trade a rare Create intermediate (e.g. a polished rose quartz or a brass gear) — a cross-route dependency where a non-Create settlement makes a Create input available, pushing cross-group trade
- from: underground_village villagers as Numismatics trade partners | via: NPC coin faucet | to: economy | motif: M-21 cut | verdict: REJECT | reason: M-21 cut — villager→Numismatics is an NPC coin faucet; the real link is the loot-seed regional drop above (M-30), not a vendor faucet

---

## particlerain   [anchors: support/client (1)]

LEAVE — zero items, zero methods, zero loot. Pure client weather-particle renderer. No material surface; a forced "Serene Seasons visual pairing" is flavor commentary, not a method edge.

---

## create_compressed   [anchors: create (1)]

- from: create_compressed crushed_<metal>_pile blocks (bulk washing → 9× nuggets + byproducts) | via: create:splashing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk-washing a crushed-ore pile block gives the same ore-doubling reward as individual crushing in one pass — automation convenience is itself a Create throughput weave (the 9-to-1 compression is already M-03-grade ore processing, just in block form)
- from: create_compressed cogwheel_block / mechanism_block (bulk storage of Create mechanical parts) | via: MineColonies requester | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony Blacksmith/Mechanic hut can request a cogwheel_block (= 9 cogwheels) as a single line item — bulk-compressed parts become the colony's procurement unit, making Create-part production a colony-supply trade
- from: create_compressed wheat_flour_pile / dough_block | via: farmersdelight:cooking or create:mixing into bread/pastry recipes | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: compressing flour into pile blocks then feeding the pile into a mill-chain batch reduces the per-item handling — survival food processing gains a bulk-throughput tier without new machines

Dossier said "LEAVE" for Create-internal QoL. Reconsidering: M-03/M-28/M-12 all hold up under red-team (the compression blocks genuinely have a second-system interface surface), and depth is correctly sized at light-everyday. Add survival + economy as second anchors.

---

## dndesires   [anchors: create (1)]

- from: dndesires freezing_sail bulk-freezing | via: dndesires:freezing (fan processing) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: route a seasonal harvest (e.g. autumn berries, summer melons) through the freezing fan to preserve them as frozen ingredients that unlock off-season food recipes — the Create processing chain captures a seasonal survival input
- from: dndesires seething_sail (heat/blaze-element processing) | via: dndesires:seething + M-16 | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a summer-only crop (Serene Seasons-gated) passes through the seething fan to become a heat-rendered ingredient only available in its season, then stored — seasonal reagent feeds the machine
- from: dndesires rubber (hydraulic_press sap→rubber) | via: dndesires:hydraulic_compacting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: refined rubber from the Hydraulic Press is a required material in airship hull gaskets / control-surface seals — aeronautics construction demands the rubber production chain
- from: dndesires cardboard_package_* | via: logistics/aeronautics bulk cargo | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk shipments packed in cardboard boxes become the standard cargo unit for aeronautics transport — the packaging chain integrates with the logistics arm
- from: dndesires milkshakes (food) | via: MineColonies Tavern/Inn request | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony Tavern consumes milkshakes as an upkeep food for colonist happiness — consumption demand never zeroes, creating a steady pull on the milkshake production chain
- from: dndesires sanding_sail | via: dndesires:sanding on gemstones | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: run raw amethyst or Galosphere shards through the sanding fan to produce a refined shard intermediate suitable as a magic-infusion substrate — Create sanding refines magic reagents
- from: dndesires asphalt palette | via: aeronautics road/runway tiling | to: aeronautics | motif: no-motif | verdict: REJECT | reason: "asphalt looks good on runways" is a decoration note, not a method edge; no demand-gate or processing chain attached; no-motif → reject

---

## sounds   [anchors: support/client-polish (1)]

LEAVE — zero items, zero methods, zero loot. Client SFX overhaul; no content surface. Genuine zero-surface polish mod.

---

## create_sa   [anchors: create, aeronautics (2)]

REWORK: dossier notes "≥2 pillars, no new edge needed" and suggests blazing tools → magic infusion but dismisses it. Worth a harder look at survival and magic.

- from: create_sa blazing_pickaxe / blazing_axe (blaze-fire tools) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbuing a blazing tool in an Ars source-rich environment upgrades it to a fire-infused enchanted state — the Create gear line intersects the magic infusion spine
- from: create_sa brass_drone_item (ownable logistics drone) | via: aeronautics logistics arm | to: aeronautics | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT (already aeronautics-anchored, but this deepens it) | hook: a drone-operator specialist offers cargo-scouting / reconnaissance services for ship crews — drones are a labor node in the logistics economy
- from: create_sa brass_jetpack / exoskeleton requiring a precision mechanism | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the jetpack chestplate final assembly is a sequenced multi-stage chain (already uses sequenced_assembly per dossier) — deepening this as an explicit M-06 keystone flags it for recipe depth work
- from: create_sa andesite_jetpack vs brass_jetpack tiering | via: boss-drop gate | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite/top-tier jetpack variant requires a boss-signature drop (e.g. a Cataclysm warlord component) as a key ingredient — the endgame survival challenge gates the best mobility tier

OK — Create+aeronautics are the right primary anchors; magic+survival additions above are sensible depth without over-reaching.

---

## mcwstairs   [anchors: support/decoration (1)]

- from: mcwstairs stone/brick stair variants (andesite, blackstone, brick) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing unused stone stair/railing variants back to raw stone + XP nugget — lossy recycling folds the decoration palette into Create's material-recovery loop (as part of a deco-family wholesale pass)
- from: mcwstairs wood railing/balcony variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood blocks don't produce stone/gravel byproducts coherently through crushing; M-04 is grounded in stone/metal deco → raw/gravel, not wood → planks (the round-trip is already 1:1 crafting table); force would create an arbitrary edge

---

## t_and_t   [anchors: survival (1)]

- from: t_and_t structure loot tables (loot=yes, 16 village variants + forts + ocean ships) | via: loot-seed — seed regional scarce materials (ore fragments, Create intermediates) matching the biome/region | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: a badlands T&T village chest yields copper-region materials; a tundra village yields silver-region drops — the exploration payoff is region-coded, making every village a node in the scarcity map
- from: t_and_t conquerable fort/tower structures | via: loot-seed — seed boss-key materials or M-34 combat-supply drops | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing a T&T pillager fort yields a combat-supply drop (iron bolts, cannon powder, chain scraps) that a non-combat player needs to buy from the combat specialist — the fort is the combat-route supply node
- from: t_and_t ocean sail-ship structure | via: loot-seed — seed Aeronautics blueprint fragment or a nautical chart | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a salvaged nautical chart from T&T's ocean shipwreck unlocks (keys) an early aeronautics blueprint, tying exploration to the aeronautics progression on-ramp
- from: t_and_t village villager trades | via: M-21 cut NPC coin faucet | verdict: REJECT | reason: M-21 cut; villager→Numismatics direct trade is an NPC coin faucet; the M-30 loot-seed above is the valid economy link

---

## mcwwindows   [anchors: support/decoration (1)]

- from: mcwwindows stone parapet / arrow_slit / blackstone_brick variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone parapets and arrow-slits crush back to raw stone + XP nugget — same lossy M-04 recycling as all stone-family deco; coherent as part of a deco-family pass
- from: mcwwindows mosaic glass panes (colored) | via: create:crushing → sand/glass shards | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushing to sand is a trivially cheap 1:1 (sand→glass is free from a furnace); the round-trip has no meaningful depth and the reward is not a valuable byproduct; M-04 requires the byproduct to be meaningful (stone→gravel + XP is the canonical case)
- from: mcwwindows wool curtains | via: create:milling → wool fiber for dye recipes | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wool→fibers is already established vanilla/Create milling; curtain→wool→fiber is a trivial disassembly, not a decorative-recycling edge — and the depth is wrong (curtains are low-cost daily deco, not a processing input)

---

## edf-remastered-5.0-beta4   [anchors: survival (1)]

- from: edf-remastered Ender Dragon fight (harder multi-phase boss, loot=yes) | via: loot-seed — seed dragon-specific boss-key drop(s) into the dragon's loot table | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: beating the enhanced dragon yields an "Ender Core Shard" (seeded) required for a late-game sequenced-assembly component — the tougher fight gates a genuine tech unlock
- from: edf-remastered dragon loot (enhanced difficulty) | via: loot-seed → magic reagent (arcane_essence or source_gem drop) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the enhanced dragon drops a concentrated magic reagent (mob-drop → magic input) — a meaningful reward that flows into the magic production chain
- from: edf-remastered end-zombie minions (summoned during fight) | via: loot-seed on minion kill | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: end-zombie minions drop combat-supply materials (ender fragments, void cloth) that non-combat players need to buy from someone willing to farm the dragon phase — combat specialist trade loop

---

## charta   [anchors: survival (1)]

- from: charta card_table (multiplayer card games with wager potential) | via: supplementaries:safe (or Numismatics coin slot) as a wager escrow mechanic | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: a card-game table becomes a social labor/service node — players wager minted coin using a locked chest or Numismatics interface as escrow; the card table is a player-run gambling service, not an NPC sink
- from: charta bar furniture (bar_shelf, bar_stool, wine_glass, beer_glass) | via: create:cutting (M-04 style, via woodworks:sawmill or create:cutting for the wood sub-variants) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the bar furniture is vanilla-crafting-table made from planks/glass; routing it through create:cutting gives a marginal depth increase for everyday deco — the Create touch is too thin to constitute a real pillar anchor; M-04 is designed for recycling, not initial crafting
- from: charta wine_glass / beer_glass blocks | via: vinery:wine_fermentation or alcohol_industry as a fill-target | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: an empty charta wine glass is the receptacle for a Vinery fermented vintage or an Alcohol Industry brew — the social decoration integrates with the fermented-drink production chain; "fill the glass at the bar shelf" is immediately player-sensible

---

## lootr   [anchors: support/QoL (1)]

LEAVE — zero methods, no material surface; operates on existing loot tables but adds no items or processing. Genuine QoL-only mod. Its instancing is the enabler of fair multi-player loot from every structure mod in the chunk (t_and_t, underground_village), but lootr itself is not a weave node.

---

## rechiseled   [anchors: support/decoration (1)]

- from: rechiseled chiseling recipes (3627 blocks, all stone/wood palette) | via: rechiseledcreate Mechanical Chisel (already in pack — adds kinetic chiseling via Create power) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel (rechiseledcreate companion, already installed) runs rechiseled's chiseling recipes on Create rotational power — the entire 3600+ block decoration palette routes through the Create spine; this is the primary cross-system link and already partially established
- from: rechiseled high-detail stone variants (bricks, tiles, paving) | via: MineColonies Builder hut request for colony building upgrades | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies Builder huts request specific rechiseled stone variants for colony building tier-ups — rechiseled becomes a colony supply chain, so a builder specialist produces decorative blocks on contract
- from: rechiseled wooden variants | via: create:crushing to recycle | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood → planks is a trivial 1:1 vanilla disassembly; M-04's reward model (stone → gravel + XP nugget) doesn't apply to wood; a wood-recycling crush edge would produce nothing meaningful

---

## almostunified   [anchors: support/infrastructure (1)]

LEAVE — zero items, zero methods, zero loot. Pure recipe-graph unification pass at reload time. The infrastructure that makes "one cohesive web" possible, but not a content node; no material surface. The dossier's GOTCHA note (never unify galosphere:*silver* as c:ingots/silver) is the only content-relevant flag and it's a guard, not a weave.

---

## cristellib   [anchors: support/library (1)]

LEAVE — zero items, zero methods, zero loot. Pure worldgen-config library; its only content is enabling t_and_t and expanded_ecosphere to function. Genuine zero-surface library.

---

== CHUNK COMPLETE ==
