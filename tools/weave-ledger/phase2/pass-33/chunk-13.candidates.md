# Phase 2 candidates — chunk-13

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API; 0 items, 0 blocks, no recipe-types, no loot. Nothing to route through any method; no content surface whatsoever.

## aeronauticscompat   [anchors: aeronautics/support (1)]
- LEAVE — pure behavior-patch (runtime mixins); 0 items, 0 blocks, no loot, no recipe-types. No material to weave; required glue that must stay but has nothing to connect.

## createaddoncompatibility   [anchors: support/compat (1)]
- LEAVE — pure tag-unification/priority glue (Almost Unified rules + one distillation recipe it seeds onto tfmg); 0 items, 0 blocks of its own. Its weave value is keeping the Create addon ecosystem coherent; forcing a second anchor would be a contrived edge on a zero-content mod.
  Note: the CLAUDE.md galosphere palladium warning applies here — verify `c:ingots/plastic` unification never sweeps `galosphere:*silver*` items.

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: The Otherside's raw "soul" materials feed Occultism's spirit-fire transmutation as reagents — the dark dimension is now a magic input source, not a dead-end.
- from: deeperdarker:heart_of_the_deep (Warden drop) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The hardest drop in the mod gates a high-tier magic ritual — "you went to the deep and came back with something the mages need."
- from: deeperdarker:warden_carapace / sculk_bone | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Otherside mob drops as imbuement reagents — a direct material bridge from exploration danger to the Ars web.
- from: deeperdarker:gloomslate / sculk_stone (block families, 149 blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Decorative stone families crushes back to gravel + experience nuggets — the Otherside build palette connects to the Create spine (already partially inbound per dossier; confirm coverage of gloomslate/sculk_stone families).
- from: deeperdarker:soul_dust / crystallized_amber | via: loot-seed (Otherside mob/chest loot) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Otherside soul materials are dangerous-to-acquire; a combat specialist farms and trades them to magic-route players — the Otherside becomes a combat-supply node.
- from: deeperdarker:sculk_transmitter | via: craft (redstone device) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: the Sculk Transmitter is a wireless-redstone block; tying it to economy requires a contrived cross-route dependency that no existing method supports cleanly. No-motif for a redstone-device-as-economy-input.
- REWORK: dossier M-09 "sellable for coin" candidate listed as MED — M-09 is RETIRED. Drop it; the valid economy link is M-34 (combat-supply) above.

## jei   [anchors: client-only UI/support (1)]
- LEAVE — display-only recipe browser; 0 items, 0 blocks, no loot. Load-bearing support role (the only viewer that renders Create processing recipes — do not swap). Nothing to weave.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-teleport fix; 0 items, 0 blocks, no loot. No content surface; sanctioned QoL support.

## minecolonies   [anchors: survival, create (2)]
- OK — connections sound. Existing weave (M-05: quarries gated on Create precision_mechanism/andesite casings) is authored and appropriate. The design mandates MineColonies as the cheaper-basics / locked-exclusives cross-cutting production route (M-28) — that's the architectural role, not a new edge to add here.
- from: minecolonies colony foods (apple_pie, baked_salmon, bread/soup/vegetable tags) | via: minecolonies:composting → create:milling chain | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony food output feeds the diet-demand pressure loop (M-26 consumption sink) — colony-produced food is consumed against hunger/diet pressure, renewing demand continuously.
- from: minecolonies:ancienttome (research gate) | via: minecolonies University research | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony research knowledge is non-tradeable — you can sell the *output* of a researched hut, not the research itself. Knowledge gates capability, making the colony specialist irreplaceable (the anti-erosion wall).
- from: minecolonies quarry ore output | via: minecolonies:zero_waste → createmetalwork crushing chain | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony quarry byproduct stone/cobble goes into Create's crushing pipeline as feedstock — industrial circularity, colony output feeds the spine.
- REWORK: dossier notes "(economy is a possible 3rd via M-09: colony-produced food/goods as sellable trade goods)" — M-09 is RETIRED. The correct framing is M-26 (consumption demand) + M-28 (colony as alternate route) + M-37 (research gate), not "sellable goods."

## curios   [anchors: support/library (1)]
- LEAVE — pure accessory slot API; 0 items, 0 blocks. No content surface; underpins magic accessories silently. Nothing to weave.

## companions   [anchors: survival (1)]

- from: companions:crystallized_blood | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood (mob-drop reagent from the Soul Furnace) transmutes into Occultism spirit essences — the gothic-alchemical vibe of Companions slots naturally into the dark-occult tier.
- from: companions:soul_gem / essences | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul Furnace gems are mob-drop-derived reagents; routing them through Ars imbuement gives the magic specialist a reason to deal with Companions' combat loop.
- from: companions boss drop (Old Cloth / Relic Gold — Sacred Pontiff) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Pontiff's Relic Gold is a rare combat-route trophy — a combat-specialist farms it and trades it to crafters who need rare metal inputs.
- from: companions:voltaic_pillar_block / tesla_coil_block (copper-electrical deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: The electrical deco set (copper-heavy) crushes back to copper scrap — connects the decorative Tesla network to the Create spine's recycle loop.
- from: companions:copper_coin / nether_coin / end_coin | via: (numismatics economy) | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: Companions' internal coins are a private in-mod economy and NOT the pack's Numismatics settlement medium (dossier explicitly notes this). Bridging them to Numismatics would create two competing coin systems. Reject — the reagent-ownership table reserves numismatics:* to the economy pillar; Companions coins stay internal or are ignored.
- REWORK: dossier M-09 "luxury good→coin" candidate listed as MED — M-09 is RETIRED. The valid economy link is M-34 (combat-supply/boss drop) above.

## createfurnitureseats   [anchors: support/compat + aeronautics (1-2)]
- LEAVE — pure seat-behavior registration for furniture mods on Aeronautics ships; 0 items, 0 blocks. Already touches aeronautics as its second anchor; forcing a further weave would be a contrived edge on a zero-content compat mod.

## domum_ornamentum   [anchors: decoration/support + MineColonies-progression (1)]

- from: domum_ornamentum framed/shingled blocks (any modded stone/metal as input) | via: domum_ornamentum:architects_cutter consuming Create-processed stone (andesite alloy, zinc, processed cobble) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-processed stone and metal families feed the Architect's Cutter to produce framed variants — the Create palette rounds into the colony build aesthetic naturally.
- from: domum_ornamentum:architectscutter | via: minecolonies colony (M-28 colony route) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: The cutter is MineColonies' architectural backbone; its outputs are what colony builders sell or use in colony structures — it's the colony's decoration production route, strengthening MineColonies as a first-class production node.
- from: domum_ornamentum block families | via: create:crushing (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: The architects_cutter already bridges DO → Create-palette (above); a separate crushing recycle of DO outputs back is redundant and creates a trivial roundtrip (cut with cutter → crush back) that has no loop value. One Create edge (the input-side) is sufficient.

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — config GUI API; 0 items, 0 blocks. Pure infrastructure library; nothing to weave.

## createmetalwork   [anchors: create (1)]

- from: createmetalwork molten processed metals (molten_iron, molten_copper, molten_brass, etc.) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Refined molten metals (the output of the Create ore-doubling chain) are pressed into Numismatics coins — the ore-processing specialist is the pack's mint; minting is a specialization that controls the money supply.
- from: createmetalwork:crushed_raw_materials/* (palladium, osmium, platinum, quicksilver…) | via: create:crushing → ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare crushed metals (palladium, quicksilver) from the ore-doubling pipeline feed magic infusion — Create's foundry output is a magic-route input, crossing the two production specialists.
- from: createmetalwork:crushed_raw_materials/palladium (galosphere) | via: create:crushing → craft | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Palladium (galosphere `c:ingots/palladium`) is already in the crush pipeline; flagging it separately adds no new link. The CLAUDE.md warning applies: never unify galosphere palladium as silver. This is a reminder, not a weave candidate.
- REWORK: dossier notes M-08 "coin from processed scarcity" as STRONG — that matches the current M-08 reframe perfectly (player-minted currency). The dossier's framing is correct and consistent with reagent-ownership. No rework needed on the first candidate.

## copycats   [anchors: create (2, already)]
- OK — connections sound. Copycats is a Create-zinc deco addon; it already sits inside the Create pillar (zinc-built, Create-dependent). The dossier correctly notes no second hard anchor needed. Forcing an economy/magic edge would be contrived.
- REWORK: dossier marks anchors as Create (2) but the rationale says "two-pillar-adjacent via Create" — this is one anchor (Create), not two distinct systems. The count of 2 in the dossier appears to be an artefact; it's a single-anchor (Create decoration) mod with a sanctioned support role. No new weave proposed; flag for dossier correction.

## ctov   [anchors: survival (1)]

- from: ctov village loot tables (custom food/armour/goodies) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: Village variants hold goods worth exploring for; seeding pack-relevant trade goods (Numismatics coins, magic reagents) into ctov loot tables makes exploration a supply-chain input — finding a village pays off in the player economy.
- from: ctov village structures as colony-adjacent settlements | via: minecolonies colony route | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: CTOV generates NPC vanilla villages; they are NOT MineColonies colonies. There is no mechanical link between ctov structures and the MineColonies colony route — this would be a forced thematic mapping with no in-game implementation path.
- from: ctov pillager-outpost structures | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: Pillager outpost variants are combat-pressure nodes; seeding their loot with boss-key components or magic reagents makes clearing an outpost a supply event (combat specialist farms them, trades drops). Deepens the danger→trade arc.

## travelersbackpack   [anchors: survival (1)]

- from: travelersbackpack tank + hose (portable fluid buffer) | via: aeronautics logistics (portable fluid supply on ships) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A fluid-tanking backpack is the explorer's on-ship fuel/potion reserve — bulk fluid transport on expeditions requires the backpack as personal logistics gear, tying exploration into the aeronautics loop.
- from: travelersbackpack upgrades (blast-furnace, smelting, crafting) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: The high-tier upgrades (tank/blast-furnace upgrade modules) are built as sequenced assemblies — the backpack's functional tier ladder maps to Create's depth-via-steps cost model.
- from: travelersbackpack:netherite / dragon backpack variants | via: create:sequenced_assembly or boss-key (M-15) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Flagship endgame backpack variants (dragon, netherite) require a boss drop as a key input — rewarding high-tier combat with a logistics upgrade, not just gear.
- from: travelersbackpack vanilla-tier leather/wool packs | via: craft | to: create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: Sequenced assembly for a basic leather pack violates the "never gate a basic/everyday component behind a complex recipe" guardrail. Leather packs should stay craft-table accessible; depth applies only at the mid/endgame tier.

## bookshelf   [anchors: support/library (1)]
- LEAVE — Darkhax utility library; 0 items, 0 blocks. Pure dependency infrastructure; nothing to weave.

## astikorcartsredux   [anchors: survival (1)]

- from: astikorcartsredux plow / reaper (iron-bearing implements) | via: craft with Create-pressed iron sheets | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: The plow blade and reaper blade require Create iron sheets — the early-game farming tier is gated on Create output, pulling the farm tool into the tech spine at minimal depth (one light step for an everyday item).
- from: astikorcartsredux:supply_cart (bulk hauling, double-chest) | via: aeronautics (logistics predecessor) | to: aeronautics | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: The supply cart is a passive vanilla-horse-drawn hauler; there is no in-pack method that connects it to Aeronautics. The "pre-aero logistics" framing is thematic, not a mechanical cross-route dependency. No method to route through → no weave.
- REWORK: dossier M-05 candidate listed as WEAK — on re-evaluation, a one-step craft requirement (iron sheet for plow/reaper blade) is exactly the "light single step for an everyday item" rule. Upgrade WEAK to actionable, but note it must remain one step only (not a sequenced chain for a basic farm tool).

## necronomicon   [anchors: support/library (1)]
- LEAVE — code library (ElocinDev API); 0 items, 0 blocks. Dependency-only; nothing to weave.

## numismatics   [anchors: economy, create (2)]
- OK — connections sound. Numismatics IS the economy keystone; it is the destination, not a source. The dossier correctly identifies it as the hub other mods weave TO (via M-08). No new outgoing weave proposed.
- REWORK: dossier mentions M-09 "luxury good → coin" as the weaving direction — M-09 is RETIRED. The correct inbound motif framing is M-08 (player-minted currency from processed scarcity) + M-26/M-29/M-30/M-34/M-37 on the demand-gating side. Dossier should drop the M-09 reference in its 2nd-anchor note.

== CHUNK COMPLETE ==
