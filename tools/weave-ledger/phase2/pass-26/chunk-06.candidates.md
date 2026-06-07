# Phase 2 candidates — chunk-06

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — pure in-game guidebook engine; no items consumed or produced, no methods exposed, nothing to route through any pillar method. Zero content surface.

## towntalk   [anchors: support (1)]
- LEAVE — audio-only colonist flavor; 0 items, 0 blocks, 0 methods. Rides MineColonies which carries the real weave. No independent edge possible.

## create_better_villagers   [anchors: Create, economy (2)]
- OK — connections sound. Already bridges Create parts supply and the trade economy via villager professions. Two-pillar goal met.
- from: create_better_villagers trade denominations (emeralds) | via: config/KubeJS trade override | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; re-denominating emerald trades into Numismatics coins would be structural but the maintainer has flagged this motif for explore-only review — flag for Gate 0, not Phase 3 authoring.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice crystal is the cryo-hardening keystone — slip it into a sequenced-assembly chain to produce an advanced cryogenic casing or cooled precision mechanism; the boss fight earns you the unlock
- from: mowziesmobs:earthrend_gauntlet / wrought-metal drop | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's forged-iron artifact is a literal industrial relic — pressing and assembly complete the missing high-stress shaft component it represents
- from: mowziesmobs boss drops (ice_crystal, sol_visage, elokosa_paw variants) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: mythic-tribal artifacts dissolve in spirit fire into powerful otherworldly essences — each boss feeds the occult tree a different elemental soul ingredient
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire) already claims the boss-drop→magic route above; adding a separate imbuement path is redundant and fragments the sink — one magic consumption motif per drop family is cleaner; prefer M-11 for all three artifact types
- from: mowziesmobs boss kill bounty | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Boss kills paying coin is trivially true for every mob-drop mod; the valuable weave is the Create/magic gating above.
- REWORK: current anchor is survival (1) — one anchor is the floor. The M-15 (Create gating) and M-11 (occult sink) candidates above both survive red-team; accepting both brings it to 3 systems which is healthy for a flagship boss mod.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller craft chain | via: create:sequenced_assembly | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: deploying a precision-machined controller board onto the lectern housing is exactly the kind of finishing step Create's assembly line does — the controller earns its aeronautics slot by being fabricated on the Create spine
- REWORK: current anchor is aeronautics (1). The mod already uses Create parts (precision mechanism, electron tubes) in its craft but isn't tagged Create. The M-20 accept above formalises the Create anchor it implicitly has — brings it to 2 pillars.

## tidal-towns-1.3.4   [anchors: survival (1)]
- LEAVE — pure structure worldgen, no items, no loot table entries of its own (loot=no in dossier). No recipe surface. The dossier correctly notes its value is exploration; nothing to weave.

## accelerateddecay   [anchors: support (1)]
- LEAVE — pure performance behavior patch; 0 items, 0 methods. Nothing to route.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (the summoner item) | via: create:deploying / item_application | to: aeronautics | motif: M-20 | power: endgame | tone: ok | verdict: ACCEPT | hook: a mechanical wolf is itself a kinetic contraption — deploying the wolf link onto a structural frame at an assembly station is coherent; the companion becomes an on-ship/on-train autonomous defender, tying it to the aeronautics/vehicle pillar
- from: createmechanicalcompanion:quantum_drive / optical_sensor (high-tier components) | via: occultism:spirit_trade or spirit_fire | to: magic | motif: M-11 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — quantum_drive and optical_sensor are pure-tech gear; routing them through Occultism's spirit fire reads as forced arbitrage. The mod's whole vibe is clockwork-industrial, not occult. No coherent hook.
- REWORK: current anchor is Create (1) — the floor. The M-20 aeronautics link above is defensible (a kinetic mechanical companion that roams contraptions) and gives it a 2nd pillar without forcing tone.

## trashcans   [anchors: support (1)]
- LEAVE — a void sink is anti-weave by design (destroys value rather than routing it). In a scarcity pack this mod sits in tension with the loop anyway; the dossier correctly notes the balance concern. No pillar edge is coherent.

## prickle   [anchors: support/library (1)]
- LEAVE — pure config-format library; zero player-facing content, 0 items, 0 methods. Nothing to route.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Built via create:sequenced_assembly (Create pillar) and its entire function is train/contraption lighting (aeronautics pillar). Two-pillar goal met, no rework needed.

## rechiseledcreate   [anchors: Create, decoration (2)]
- from: rechiseledcreate stone/wood variants (large deco tile volume) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a chiseled-andesite wall you no longer need crushes back to crushed stone on the belt — the chisel palette feeds back into the Create ore loop as a lossy but logical recycle
- OK — existing 2-anchor connection (Create kinetic method + decoration) is sound. The M-04 recycle above strengthens the Create link without adding artificial edges.

## entity_model_features   [anchors: support (1)]
- LEAVE — client rendering engine for OptiFine-format CEM models; 0 items, 0 methods, no content surface.

## immersivearmorhud   [anchors: support (1)]
- LEAVE — client HUD display only; no items, no methods, nothing to route.

## lithium   [anchors: support/performance (1)]
- LEAVE — server-tick optimization, no content whatsoever. Correct as support.

## domum_ornamentum   [anchors: decoration/MineColonies-support (1)]
- from: domum_ornamentum:architectscutter consuming Create-adjacent stone blocks (andesite, asurine, processed stone variants) | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-milled and processed stone feeds straight into the Architect's Cutter for framed deco — the cutter is the finishing step after the Create mill, not a separate island
- from: domum_ornamentum decorative blocks (timberframes, framed, shingles) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 requires crushing BACK to raw — while technically possible, DO's outputs are deeply combinatorial (millions of variants keyed by input block); a generic "crush deco back to raw" rule conflicts with the combinatorial identity of the mod. Better to keep the forward-path (Architect's Cutter consuming Create stone, accepted above) than force a reverse-crush on the variant blocks. REJECT to avoid recipe-graph noise.
- REWORK: current anchor is decoration/support (1). The M-04 forward-path accept above (Create-processed stone → architects_cutter → framed deco) gives DO a genuine Create anchor and lifts it to 2 pillars, which is the goal. MineColonies side already provides economy-adjacent value through the colony economy weave.

## occultengineering   [anchors: Create, magic (2)]
- OK — connections sound. This mod IS the Create×Occultism bridge; inbound create:* methods + occultism:ritual/spirit_fire already anchor it firmly in both pillars. Two-pillar goal met.
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Sterling silver is processed by Create already, but adding a coin-mint path here is a trivial sellability link rather than a structurally distinctive loop-closer. The mod already earns 2 pillars; don't pad with M-08.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charging method) applied to Iron's Spellbooks magic gear / Ars Nouveau-adjacent focus with a charge mechanic | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: running your arcane focus through the tesla coil charges it — the Create electrical layer fuels the magic spine, and the mage needs to befriend the engineer
- from: createaddition:seed_oil / bioethanol (liquid fuel from farmed crops) | via: createaddition:liquid_burning → TFMG fuel lines | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: bioethanol pressed from surplus seeds feeds the airship's liquid fuel tank — the farm feeds the fleet
- from: createaddition:seed_oil | via: createaddition:liquid_burning → economy (processed crop byproduct trade good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Seed oil is sellable but that's true of every processed crop product; the aeronautics/fuel link above (M-13) is the distinctive one. REJECT M-09 here.
- REWORK: current anchor is Create (1). The M-17 magic-charge accept and M-13 aeronautics-fuel accept each add a distinct pillar — bringing it to 3 systems (Create + magic + aeronautics), which is healthy for such a foundational addon.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. Kinetic chain drives and nixie displays anchor Create; broad tile/chair deco palette (for build comfort) anchors survival/base-building. Two-pillar goal met.
- from: bits_n_bobs tile/deco blocks (andesite_tiles, asurine_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: an andesite-tile floor you're tearing up crushes back to crushed stone on the belt — the decorating budget feeds back into the Create mill
- REWORK: M-04 above reinforces the Create link (crushable deco→raw) but the two-anchor goal is already met; this is a "plus" weave, not a required one.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. Airborne Robo Bee couriers over Create's logistics network is the textbook aeronautics/logistics arm; built from Create parts. Two-pillar goal met.
- from: create_mobile_packages delivery network carrying player-traded goods (coins, crafted items) between bases | via: implicit economy layer — packages carry Numismatics coin as payload | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif. The mechanism (packages contain coins) is an emergent player behavior, not an authored weave recipe — there is no Phase-3 action to author here. The economy adjacency is real but it's design-intent, not a method-routing. REJECT-for-review.

== CHUNK COMPLETE ==
