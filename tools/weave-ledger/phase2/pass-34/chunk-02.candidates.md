# Phase 2 candidates — chunk-02

## lootjs   [anchors: support/library (1)]
- LEAVE — pure scripting API; no items, no blocks, no material flows. It is the *enabler* of M-02 mob-drop weaves authored elsewhere, not itself a weave node.

## kambrik   [anchors: library/API (1)]
- LEAVE — Kotlin dev framework; zero player-facing content, nothing to route.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — entity-animation rendering API; zero items/blocks/loot; no content surface.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — shared code library; zero content; dependency only.

## moreoverlays   [anchors: support/QoL client (1)]
- LEAVE — client-side HUD overlays (spawn markers, chunk grid, JEI highlight); no items, no world interaction.

## attributefix   [anchors: support/fix (1)]
- LEAVE — attribute-cap bugfix library; no content, no material surface.

## kubejs_create   [anchors: support/packdev tooling (1)]
- LEAVE — scripting bridge that exposes Create recipe-types to JS; no items/blocks; it is a tool for authoring weaves, not a weave node itself.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted furniture (planks/wool-made wood/fabric deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a broken chair crushes back to planks + an XP nugget — standard Create deco-recycle; the whole furniture set earns a Create tie without any forced step.
- from: handcrafted:*_counter / *_cupboard (kitchen-set pieces) | via: minecolonies huts/colony requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Cook hut or Tavern requests furnished counters/cupboards from a crafting specialist — colony demand gates the furniture trade so sell-to-colony is driven by building progression, not ambient sale.
- from: handcrafted:*_table / *_shelf / *_couch (full room sets) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:cutting already covered by M-04 crush-recycle; a separate cutting-down recipe would duplicate the Create tie and add no loop advancement. M-04 crush is the cleaner, single-step form.
- REWORK: dossier 2nd-anchor candidate mentions M-09 (luxury good → coin) — M-09 is retired (#163/#240); the economy link survives only as M-28 (colony demand), which is now accepted above.
- OK — M-04 recycle + M-28 colony demand are two clean cross-system links (create + economy); both survive red-team.

## notenoughanimations   [anchors: support/client visual (1)]
- LEAVE — purely cosmetic procedural animations; no items, no blocks, no material surface.

## createoreexcavation   [anchors: create (1)]
- from: createoreexcavation vein table (regional ore veins) | via: GTMOGS regional ore-gen → vein recipe → create:pressing/crushing → numismatics mint | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Drilling Machine is the only infinite-but-slow ore source in a given region; gating coin-metal veins here makes the mint a regional specialization — you must be in (or trade with) that region to produce that currency denomination.
- from: createoreexcavation:drill / diamond_drill / netherite_drill (drill-head consumables) | via: create:mechanical_crafting → boss drop input | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite drill head that can tap a deep rare vein requires a boss-key component — makes the high-throughput mining tier a combat/boss milestone, not just a crafting progression.
- from: createoreexcavation vein (fluid extracting — oil/diesel veins) | via: createoreexcavation:extracting → tfmg:distillation → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: an oil vein under a Drilling Machine produces the crude feedstock that a TFMG distiller refines into diesel — the fuel supply line for Aeronautics ships runs through the drill, making the excavation base a strategic logistics node.
- REWORK: dossier 2nd-anchor candidate describes the M-08/M-30 mint path loosely as "a pack-design lever, not a recipe edge" — the M-30 regional-scarcity framing above sharpens it into a proper gate; flag for adoption.

## create   [anchors: create (1)]
- LEAVE — Create is the method library (17 recipe-types); it is the hub other mods weave INTO. It does not need, and should not receive, edges that consume Create itself as a material. As the dossier correctly notes: N/A as a recipient.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure code library; no items, no blocks, nothing to route.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — config API library; no gameplay content.

## startuptime   [anchors: support/diagnostic (1)]
- LEAVE — boot-time logger; no items, no world interaction.

## collective   [anchors: support/library (1)]
- LEAVE — shared utility library for Serilum mods; no player-facing content.

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — client HUD overlay displaying armor durability; no items, no material surface.

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco blocks (bars, chains, lanterns, chests, oxidized variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: oxidized copper bars and chests crush back to copper nuggets + an XP nugget — the whole copper deco palette folds into the Create copper economy; lossy recycle is exactly the M-04 form.
- from: copperagebackport copper tools/armor (copper_sword, copper_chestplate, etc.) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools crush to copper nuggets; gives the copper tool tier an explicit Create tie and a sensible use for downgraded gear.
- from: minecraft:copper_golem_statue (Copper Golem item-logistics mob) | via: minecolonies colony supply / aeronautics ship crew | to: economy/aeronautics | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is a labor/service motif riding a method (enchanting, colony contract, cargo run); the Copper Golem is an autonomous mob that sorts chests, not a hired specialist providing a service. Thematic stretch — the golem's behavior is vanilla item-transfer, not a player-to-player labor axis. Forced.
- from: copperagebackport copper blocks (bars, chains, chests) | via: create:mechanical_crafting / M-05 native-method gating | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-04 + M-03 crush-recycles already give copperagebackport a clean Create anchor; adding a native-method gate on top would imply these are endgame/flagship items — copper chest is an everyday deco/storage block, not a Create-gated high-tier piece. Depth must scale with power; over-gating everyday copper.
- REWORK: dossier candidate mentions aeronautics via Copper Golem chest-hauling as "WEAK" — confirmed REJECT (no method to route through; forced logistic synergy without a recipe edge is not a weave).

## multipiston   [anchors: support/MineColonies dependency (1)]
- LEAVE — functional dependency block for MineColonies/Structurize builders; no item/fluid processing, no material surface. The multipistonblock is an internal tool, not a player-crafted/traded item.

## createshufflefilter   [anchors: create (1)]
- LEAVE — two filter items (shuffle_filter, weighted_shuffle_filter) that extend Create Deployer behavior for random item placement; a builder QoL tool with no material flows. No coherent 2nd-anchor method edge exists without forcing it.

## moblassos   [anchors: survival (1)]
- from: moblassos:golden_lasso / emerald_lasso (livestock/villager capture-and-carry) | via: minecolonies colony population requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: transporting a villager to a new MineColonies outpost via emerald lasso is the efficient path — the lasso becomes a requested logistics consumable for colony expansion (colony demands a "villager transport service" that the lasso enables, gating settlement growth).
- from: moblassos:hostile_lasso (captures monsters <50% HP) | via: emergent combat-supply trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: M-34 requires a boss/danger output farmed by a combat specialist and *traded* to non-combat players; capturing a hostile mob in a lasso and shipping it to a buyer has no backing method in the pack (no "sell monster" mechanic), and the use-case (buying caged monsters?) is unclear/contrived. No method to route through.
- from: moblassos lassos (crafted from gold/aqua/diamond materials) | via: create:crushing recycle | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: lassos are tools, not deco blocks; M-04 is specifically for decorative blocks crushed back to raw. Applying it to tool items is a category mismatch and would trivially recover gold/diamond, undermining material scarcity.

== CHUNK COMPLETE ==
