# Phase 2 candidates — chunk-17

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron (and tier ladder) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gliders are fabricated gear; routing the mid-to-high tiers through Create mechanical crafting (brass/copper sheets as frame components) puts them on the tech spine and makes the flight-gear ladder a production milestone, not just a shopping list.
- from: vc_gliders:paraglider_diamond / _netherite | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is for flagship endgame items with a derpack:incomplete_* multi-stage chain; diamond/netherite gliders are high-tier but not pack-flagship keystones — M-05 is the right level (one gate step, not a full sequenced chain); stacking both motifs on the same item family is over-deep for a traversal accessory.
- from: vc_gliders:copper_upgrade | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the copper upgrade is semantically an "apply a component to base gear" action — deployer-applying a Create copper sheet onto the base glider is exactly the light single-step upgrade M-20 is for, and it's already how Create gear upgrades read.
- from: vc_gliders:nether_upgrade | via: loot-seed (Nether fortress / bastion) | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the nether upgrade material comes from deep-Nether danger; seeding a nether-specific component drop (blaze rod / magma cream precursor) into Nether structure loot makes the upgrade a combat-supply item that non-combat specialists buy from the crew's Nether runner.
- REWORK: current anchor is aeronautics-only (1). The dossier's own candidates (M-05 via pressing/mechanical_crafting) are sound. The aeronautics anchor is correct but thin — gliders are personal flight/traversal, which does sit on the aeronautics pillar (movement tier). No existing connection to challenge.
- OK — aeronautics anchor is sound for personal-flight gear. Accepted weaves add create + survival (via combat-supply loot) as second and third anchors.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure code library: 0 blocks, 0 items, no recipe types, no loot. Zero content surface; nothing to weave.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]
- LEAVE — pure server behavior mod: adjusts sleep quorum only, 0 items, no loot, no recipe methods. Nothing to route.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker is a raid-boss with arcane/illusion theming; its Hallowed Gem naturally reads as a condensed arcane fragment — feeding it into Ars Nouveau imbuement as a high-tier catalyst (e.g. gating a T3 spell glyph or a source-gem resonator) makes the boss a required step for the magic specialist, not just a combat trophy.
- from: illagerinvasion:illusionary_dust | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary Dust — dropped by the mod's illusioner variant — is a powdery illusion-magic material; feeding it into an Occultism spirit-fire ritual as a transmutation input (yielding a mid-tier spirit essence or binding component) grounds the drop in the magic web and rewards players who grind the Illusioner Tower.
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum_chunk is an ore-adjacent metal drop; Create crushing it into a processed metal intermediate (platinum dust/ingot precursor) slots it neatly onto the ore-doubling spine — a combat specialist running the Invoker can supply a processed metal that no mine directly provides.
- from: illagerinvasion:platinum_chunk | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum is a rare combat-route metal; pressing platinum dust into a Numismatics coin grade makes it a player-minted settlement currency that only flows from players willing to fight Invokers — a natural scarcity gate on the minting supply.
- from: illagerinvasion:hallowed_gem | via: loot-seed (Illusioner Tower / raid) | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: already implicit (gem is a boss drop); formalizing M-34 — the combat-specialist sells/trades hallowed_gem to magic players who need it for M-02 imbuement — completes the dual-role boss loop.
- from: illagerinvasion:lost_candle / horn_of_sight | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: lost_candle and horn_of_sight are thematically witch/hex items, and feeding them into Ars enchanting apparatus is plausible, but the gem (M-02) and dust (M-11) already cover the magic-sink angle for this mod fully; adding a third magic link via M-10 on lesser drops risks over-saturating the magic pillar with the same mod's drops. Cap at two accepted magic links for now.
- REWORK: dossier lists "economy via numismatics — platinum_chunk as bounty/sale [M-08]" but notes it as MED. The accepted M-08 here reframes it correctly as player-minted currency, not a sale — that's a clean upgrade. No existing authored connections to challenge.

## minecolonies_compatibility   [anchors: survival, create (2)]
- OK — connections sound. This mod is itself an integration bridge; its two anchors (colony farming/jobs for survival, Create Stock Link for the Create production arm) are its design purpose. No new edge needed and none would be non-forced.

## better_lib   [anchors: support/library (1)]
- LEAVE — pure code library: 0 blocks, 0 items, no recipe types. Nothing to weave.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure terrain-generation datapack: 0 items, 0 recipe types, no loot. Thematic fit to regional scarcity is real (bigger continents spread ores further) but there is no recipe/loot/method surface to route through.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences:*_metal_fence / *_metal_fence_gate variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal fences are fabricated iron/copper deco; crushing them back to nuggets + an XP nugget is the standard Create deco-recycle loop — lossy by design, so no arbitrage, and it connects the deco palette to the ore-refining spine with zero forced steps.
- from: mcwfences:*_stockade_fence / picket_fence | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood fences crushing back to planks via M-04 is technically valid but M-04 targets metal/stone deco where the recycle is meaningful (metal → nugget is tangible value recovery); wood fences → planks recycle is trivially covered by vanilla crafting already and adds no loop value. Limit M-04 to metal fence variants only.
- REWORK: dossier already suggests the M-04 metal-crush as "WEAK — only weave metal variants as part of a wholesale deco-family pass." Accepted here as a proper ACCEPT not WEAK — the metal fence population is large enough (bastion, acorn, cathedral, etc.) that a batch crush recipe covers real volume. Existing anchor is decoration-only; adding create via M-04 is the floor second anchor.

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure MineColonies blueprint pack: 0 blocks, 0 items, no recipe types. The Steampunk style passively pulls Create blocks as build materials, but that is a worldbuilding tie, not a weave (no recipe/loot method to route through). Nothing to force.

## bits_n_bobs   [anchors: create, survival (2)]
- from: bits_n_bobs:*_tiles (andesite/asurine/crimsite/etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the stone-tile deco family is built from Create stones; crushing them back to crushed-variant + XP nugget closes the deco→ore loop and is the exact intended use of M-04. Already at 2 anchors, so this only tightens an existing connection.
- from: bits_n_bobs:chain_pulley / chain_rope | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: chain_pulley is a kinetic transmission block, not a propulsion/drivetrain/control component for aeronautics — forcing it into M-24 (mechanical component → propulsion/control) would be a contrived edge. The Create anchor is sufficient; aeronautics is not natural here.
- OK — existing two anchors (create + survival decoration) are sound. M-04 tile-crush is a tightening of the create anchor, not a new pillar.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor | via: create:gearshift / contraption logic | to: create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: the season_sensor emits a redstone signal keyed to the current season; wiring it into Create gearshifts lets automated farms switch crop-processing lines by season — a natural automation milestone. Serene Seasons is explicitly a priority survival lever and the dossier calls this out as its strongest candidate.
- from: out-of-season crops (sereneseasons crop-fertility tags) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: gating a seasonal-harvest ingredient (e.g. autumn-only leaf-cluster or winter-frost herb) into a magic ritual means the mage specialist must either build a greenhouse or trade with farmers during the right window — a seasonally-locked magic reagent directly advances the loop's scarcity → pressure → production chain.
- from: sereneseasons:calendar item | via: — (bare sell link) | to: economy | motif: none | power: everyday | tone: ok | verdict: REJECT | reason: "calendar is sellable" is the ambient endpoint, not a weave. No demand-gating motif applies here.
- REWORK: dossier lists "economy via M-09 luxury-good→coin [WEAK]" — M-09 is **retired** (#163/#240). That candidate must be struck. The accepted links (M-16 Create + M-16 magic) are the correct second-anchor routes.

## touhou_little_maid   [anchors: survival (1)]
- from: occultism:spirit_fire output / boss drop (e.g. illagerinvasion:hallowed_gem) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar is a ritual-style multiblock that consumes power-points + materials; gating a maid-type or special upgrade behind a magic reagent (hallowed_gem, or a small ars_nouveau:source_gem bundle) reads naturally as a "spirit-powered summoning rite" and bonds the mod to the magic pillar without forcing a Create edge.
- from: power_point_bottle (fairy drop / loot) | via: loot-seed (woodland mansion / Illusioner Tower loot) | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: power_point_bottles are consumed to operate the Altar; seeding them into raid/dungeon loot means combat players supply the shrine's operating currency to non-combat players who want maids — the combat-specialist supply side feeding production labor demand.
- from: touhou_little_maid maids (farming/fishing task modes) | via: create automation (stocklink/storage bridge) | to: create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: maid automation is a labor alternative to Create contraptions, not a cross-route dependency (M-29 requires recipe-level input from a different production route). Forcing a recipe dependency between maid-farming and a Create part has no natural join — the two systems are parallel labor solutions, not interlocked. No-motif fit; reject.
- REWORK: dossier note "Create: leave — no natural routing" is correct; the M-29 attempt above confirms it. The economy candidate (power_point_bottle as buyable/sellable M-02) is flagged WEAK in the dossier — as a bare sell link it fails the player-run test; replaced by M-34 loot-seed which properly gates supply.

## betterpingdisplay   [anchors: support/UI (1)]
- LEAVE — client-only UI mod: 0 items, 0 blocks, no loot, no recipe types. Nothing to weave.

## notenoughanimations   [anchors: support/visual (1)]
- LEAVE — client-only cosmetic animation mod: 0 items, 0 blocks, no loot, no recipe types. Nothing to weave.

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — pure scoreboard datapack: 0 items, 0 blocks, no loot, no recipe types. Nothing to weave.

## direct_chute   [anchors: create (1)]
- from: direct_chute:direct_chute (zinc logistics block) | via: — | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 (logistics-required bulk good) would require the chute itself to be a heavy/bulky good needing aeronautics transport — it's a small zinc block, not a bulk cargo item. The connection is nominal. Dossier correctly leaves it; confirming LEAVE.
- LEAVE — single-block Create logistics add-on. Its only content is the direct chute block, crafted from zinc (already a Create material). No second anchor is coherent; forcing aeronautics or survival would be contrived. One-anchor mod; confirmed.

## create_sa   [anchors: create, aeronautics (2)]
- OK — connections sound. Already at 2 anchors (gear built through Create methods; jetpacks/drones on the aeronautics movement pillar). Dossier note about blaze→magic infusion was considered and correctly left — the Create+aeronautics pairing is complete and natural.

## ldlib2   [anchors: support/library (1)]
- LEAVE — developer rendering/UI library: 2 registered blocks are dev/test entries (no player content), 0 real items, no loot, no recipe types. Nothing to weave.

## jakes-build-tools-2.0.1.5   [anchors: QoL/support (1)]
- from: minecraft:experience_flask_* (XP storage/release items) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: experience flasks store XP from kills/mining; routing them through create:crushing doesn't fit M-04 (which is metal/stone deco → raw + XP nugget recycle). The flask is an XP utility, not deco. No clean motif match — no-motif; reject.
- from: minecraft:hammer (area-mining tool) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the hammer is a builder utility, not a progression item whose depth scales with power tier. Gating a basic construction helper (3x3 mine) behind mechanical_crafting would punish early builders with no design payoff — violates the "never gate a basic/everyday component behind a complex recipe" guardrail.
- LEAVE — datapack-based building tools; all content is everyday builder utilities crafted from vanilla materials. No method surface to route through; no progression coherence to a 2nd anchor. Forcing a Create gate on any tool violates the basic-component guardrail.

## domum_ornamentum   [anchors: decoration/MineColonies support (1)]
- from: domum_ornamentum:architectscutter (Architect's Cutter) consuming modded-stone blocks (e.g. Create andesite casing, bits_n_bobs tiles) | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cutter is a materials-in → framed-variant-out combinatorial method; using Create-produced stone (polished andesite, deepslate tiles) as input material means factory output flows into the colony build palette — a genuine production-to-colony pipeline, not a forced edge.
- from: domum_ornamentum framed/shingled/pillar blocks (outputs of Cutter on rare materials) | via: minecolonies:composting or MineColonies builder requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: StyleColonies blueprints call for DO ornamental blocks as build materials — the colony builder requests specific framed-block variants, making the Architect's Cutter's output a colony-demanded good; demand comes from building colony structures (M-28 colony route), not from a vendor.
- from: DO ornamental blocks | via: bare sell link | to: economy | motif: none | verdict: REJECT | reason: "pretty blocks are sellable" is the ambient endpoint; no demand-gating motif applies unless it's colony-demanded (which M-28 above covers).
- REWORK: dossier M-04 candidate notes it as "WEAK-MED" because the cutter is its own method, not Create's. Upgraded to ACCEPT here: the join is real (Create blocks → Cutter input → DO output used by colonies), and M-04's spirit is "Create-production-loop closes on deco outputs." The distinction is that the cutter is DO's native method, but the connection advances the loop (Create output → colony demand) regardless of which machine runs it. Flagging for Gate-0 awareness — if M-04 is strictly "must route through create:crushing," then this should move to M-28 only and drop the M-04 claim; propose M-04 as a loose palette-bridge here with the caveat.

== CHUNK COMPLETE ==
