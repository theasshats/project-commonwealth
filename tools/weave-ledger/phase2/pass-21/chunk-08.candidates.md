# Phase 2 candidates — chunk-08

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen-library/API; no items, no blocks, no loot tables, no recipe-types. Its weave is the dependent structure mods' weave. Nothing to route material through.

## fluid   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already anchors Create (all parts built through Create machines) + aeronautics (centrifugal pump / smart fluid interfaces used for ship-board fluid logistics). No forced third anchor needed; the copper/brass-tier industrial plumbing is coherent at 2. REWORK: the aeronautics anchor is informal (no explicit recipe tie — the pump is just *useful* on ships). A light M-23/M-24 step — e.g. the centrifugal pump as a required component in an Aeronautics fluid-feed intake or ship-board tank fitting — would firm this up from "nominally aeronautics" to an actual build-chain tie. Low priority; note for Phase 3 review.

## bountiful   [anchors: economy (1)]
- from: bounty board reward pool | via: config/datapack objective pool | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty board pays out Numismatics coin — the village quest board becomes the pack's early-game money faucet, linking combat and fetch tasks directly into the player-run economy.
- from: Decree objective pools | via: datapack objective list | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Decrees point at pack farm/fish/hunt outputs (Farmer's Delight crops, seasonal fish, Serene Seasons locked produce) so the board rewards engaging with the food and survival loops, not just vanilla kills — survival pressure feeds economy demand.
- from: Create-processed surplus goods (e.g. iron sheets, brass) as bounty objectives | via: datapack objective list | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a posted bounty for processed sheet metal turns Create factories into a demanded export, not just personal production — scarcity → demand → economy advance.
- from: magic reagents (ars source gems, occultism materials) as bounty objectives | via: datapack objective list | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare bounty requesting arcane reagents creates demand for magic specialists, tying the magic pillar into the economy exchange loop.
- from: bountiful:bounty-epic payout | via: loot-seed or datapack reward | to: economy | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is boss-key gating of tech recipes, not bounty rewards; an epic bounty paying boss-tier loot would shortcut boss-drop scarcity rather than reinforce it — contradicts the design.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — particle-only cosmetic; no items, no loot tables (the 184 "items" are internal particle holders, not collectibles), no methods. Nothing to route through any system.

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn API dependency for Alex's Mobs; no gameplay items, no loot (the lectern and debug items are dev tooling). Its weave is Alex's Mobs' weave.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute | via: recipe | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the direct chute is a logistics convenience block (slot-less item conduit), not a mechanical drivetrain/control component — M-24 is for rotors, bearings, and propulsion/control parts. Forcing it as a structural aeronautics component has no thematic coherence; the dossier itself notes the aeronautics tie is only nominal. LEAVE at 1 anchor.
- LEAVE — single Create logistics block (zinc chute); no coherent second anchor without forcing it.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only teleport tweak; no items, no methods, nothing to route. Sanctioned support role.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build engine dependency; no standalone items, no loot, no recipe-types beyond build-tool schematics. Its weave is MineColonies' weave.

## durabilitytooltip   [anchors: support/client QoL (1)]
- LEAVE — client-side tooltip UI; no items, no gameplay content. Nothing to weave.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — config-only structure spacing modifier; no items, no loot tables. Its role is making other structure mods' drops feel scarcer (indirectly supports the scarcity foundation), but there is no material surface to route through a method.

## northstar   [anchors: Create, aeronautics (2)]
- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: off-world metals are scarce regional materials — Create-crushing them and minting the product into high-denomination coin means space exploration directly funds the player-run economy; specialization pressure is real.
- from: northstar:advanced_circuit | via: recipe (crafting/sequenced_assembly) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: an advanced circuit is exactly what an Aeronautics autopilot, navigation console, or flight-control block needs — the off-world tech tier earns its place by feeding the drivetrain/control surface of high-tier ships.
- from: northstar:biofuel_bucket | via: createaddition:liquid_burning / TFMG distillation | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: biofuel from off-world botany is a renewable propulsion fuel for Aeronautics engines — space agriculture feeds the fleet, creating demand for planetary base-building.
- from: northstar:martian_steel_ingot | via: recipe (structural plate) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: martian steel is the pack's hardest fabricated metal — requiring it for high-tier airframe plating makes a planetary expedition the unlock for top-tier ships, putting the aeronautics and Create/rocketry pillars in a satisfying dependency loop.
- from: northstar:astronomical_reading | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: an astronomical reading as a trade good is plausible but thin — there is no consumption demand for it in any other pillar (no ritual, no recipe uses it). Without a downstream sink, it is a coin faucet without a drain, and M-09 works best when the luxury good is also consumed somewhere. Reject until a downstream use exists.
- REWORK: the dossier lists aeronautics anchor as rockets = transport, which is valid but informal. The M-23/M-24/M-13 candidates above would formalise it. The Create anchor is well-evidenced (heavy recipe inbound). No rework needed beyond firming up aeronautics with the accepted candidates.

## corgilib   [anchors: support/library (1)]
- LEAVE — pure code library (loot/worldgen/datagen helpers); no player-facing items, no loot tables, no recipe-types. Dependency for Alex's Caves; nothing to weave.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — JSON-driven weapon behavior framework; no items, no loot, no methods. Its value is survival feel (melee pressure), not a material surface. Forcing a recipe edge onto a behavior mod would be incoherent.

## attributefix   [anchors: support/fix (1)]
- LEAVE — attribute-cap patch library; no content, no items, no methods. Enables magic/combat gear to scale correctly — its "weave" is that every combat and magic weapon in the pack works at its designed power level. Nothing to route.

## formations   [anchors: survival (1)]
- from: formations-generated structures (altars, ruins, pedestals) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: scattered overworld ruins contain small coin caches (Numismatics spurs/cogs) — exploration pays off economically, reinforcing the scarcity→pressure→economy loop without requiring players to interact with a town or bounty board first.
- from: formations-generated structures (altars, pedestals) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a stone altar in the woods holds a low-tier magic reagent (Ars source gem shard, Occultism afrit essence fragment) — discovery introduces players to the magic pillar organically before they've built anything.
- REWORK: the dossier says "leave" as the 2nd-anchor candidate, citing loot-table edits as not a mod edge. The briefing explicitly overrides this — a structure mod with loot=no but placed chests IS a loot-seed candidate. However Formations' dossier says loot=no (confirmed in the AUTO section: loot=no). That means no chest loot tables to seed — the structures use vanilla block palettes with no container loot. The ACCEPT verdicts above are therefore conditional: only valid if Formations' structures DO contain chest loot in practice. Given loot=no in the jar scan, these reduce to REJECT pending confirmation.
- from: formations altars | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: loot=no in jar scan — no chest loot tables confirmed; cannot seed into what doesn't exist. Revise to ACCEPT if structures ship chest loot in a datapack layer not captured by jar scan.
- from: formations altars | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: same — loot=no; no seeding surface confirmed.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill | via: recipe | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: "player runs on a treadmill to power Create" is a survival-loop gag (costs player stamina/time = a soft survival pressure), but there is no established motif for player-effort-as-survival-resource, and it doesn't advance the loop meaningfully — survival pressure is supposed to come from environmental scarcity (food, seasons, mobs), not from the player jogging. no-motif → reject-for-review.
- from: createtreadmill:maid_motor consuming touhou_little_maid Soul Orb | via: recipe | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: Soul Orbs are maid-companion flavor items; routing them through a magic pillar weave (as if they were arcane components) would clash tonally — cute maid souls are not occult reagents. No motif fits. Reject.
- LEAVE — single Create kinetic source (novelty/companion cross-tie); no clean system-level anchor beyond Create without forcing it. The dossier's "leave" verdict stands.

## revelationary   [anchors: support/library (1)]
- LEAVE — progression-gating library/API; no items, no loot. Its mechanic (advance-gated block reveals) is a delivery tool for M-05 native-method gating when other mods use it, but Revelationary itself has no material surface to weave.

## rechiseledcreate   [anchors: Create, decoration (2)]
- OK — connections sound. Already at 2 (Create kinetic method via Mechanical Chisel + decoration palette). REWORK: the decoration anchor is informal — "decoration" is not one of the loop's system anchors (create/magic/economy/aeronautics/survival). The Mechanical Chisel's output (chiseled Create stone/wood variants) could earn a survival or economy second anchor via M-04 (Create recycles deco — chiseled blocks crush back to raw + XP nugget, lossy) or M-09 (chiseled decor as a luxury sellable). Evaluate:
- from: rechiseledcreate chiseled stone/wood variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: chiseled Create variants crush back to andesite/stone + XP nugget (lossy) — the decoration system integrates cleanly into Create's recycling loop, confirming the mod belongs in the Create pillar rather than floating as "decoration."
- from: rechiseledcreate window variants | via: numismatics sell / player trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: decorative windows as a luxury sellable is plausible but weak — there is no natural demand driver for patterned windows in the economy loop (no NPC or bounty asking for them), and M-09's strength comes from food/drink goods where consumption mechanics create genuine demand. Windows are deco with no consumption sink. Reject.

## foodeffecttooltips   [anchors: support/client QoL (1)]
- LEAVE — client tooltip rendering for food effects; no items, no recipe-types, nothing to route. Sanctioned support role; its value is making the food/survival pillar legible to players.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structures (ships, fortresses, ruins) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Trek's 150+ structures include ships and fortresses with chest loot (loot=yes confirmed) — seed small Numismatics coin drops into those chests and exploration pays off economically, making scarcity-driven travel worthwhile rather than purely aesthetic.
- from: trek structures (altars, ancient buildings) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding low-tier magic reagents (a source gem fragment, an Ars glyph scroll) into Trek's altar/ruin structures turns exploration into a magic-bootstrapping loop — finding ruins is how players who haven't built a magic tower yet get their first reagents.
- from: trek structures (rare fortresses, pyramids) | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: a mid-tier boss-key component (e.g. an ancient blueprint or mechanical relic) seeded into a rare Trek fortress loot table gives Create's gated recipes an exploration unlock alongside the crafted unlock path — discovery matters, not just production depth.
- REWORK: none — the dossier correctly identifies this as a loot-seed candidate and the accepted rows above formalise it.

== CHUNK COMPLETE ==
