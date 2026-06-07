# Phase 2 candidates — chunk-05

## everycomp   [anchors: support/decoration (1)]

LEAVE — Pure runtime block/asset/recipe generator with no items of its own (0 blocks, 1 grouping token, loot=no). All content lives under host-mod namespaces (Create, Macaw's, etc.); any weaving belongs on those hosts. No material join key, no method surface, no loot table. Nothing to propose or reject here.

## galosphere   [anchors: survival, magic (2)]

REWORK check — existing connections:
- survival (cave biomes + palladium ore, new underground pushing back): OK — connections sound.
- magic via M-07 (allurite_shard / lumiere_shard as reserved attunement catalysts): OK — connections sound; already authored in scripts 33/80/97 and locked in reagent-ownership table.

New proposals:

- from: galosphere:palladium_ore (c:ores/palladium) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is the scarce regional metal from the Crystal Canyon biome; crushing ore for doubled output with a byproduct folds it into the Create ore-economy exactly as the design intends — players with access to Crystal Canyon regions get a crush-yield advantage and others must trade for processed palladium. ⚠ Output must tag c:ingots/palladium only — never c:ingots/silver (CLAUDE.md gotcha: galosphere's item id is silver but the material is palladium; occultism owns silver).

- from: galosphere:silver_ingot (= palladium ingot, c:ingots/palladium) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is scarce and regionally locked; a player with Crystal Canyon access presses ingots into a palladium-denomination coin, making them the regional mint specialist. Advances the loop: scarcity → production (pressing) → economy (player-minted currency). Distinct from iron/gold coins — a genuine second denomination.

- from: galosphere:allurite_bricks / lumiere blocks (deco stone sets) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the shards (allurite_shard / lumiere_shard) are already the reserved M-07 catalysts — that is the mod's magic anchor. Running a separate crush-recycle on the decorative stone forms is low-value redundancy; the flagship weave dominates. Not worth adding noise here when M-03 palladium crushing is the stronger coherent Create edge.

- from: galosphere:silver_ingot (palladium) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: reagent-ownership collision risk. Palladium must never be conflated with silver (occultism owns c:ingots/silver). An imbuement recipe consuming galosphere's item would need extreme care to avoid the unification trap; M-07 shards already provide the magic anchor with zero identity-collision risk. Defer unless a second explicit magic route is wanted and the anti-silver safeguard can be guaranteed at authoring time.

## resourcefulconfig   [anchors: support/library (1)]

LEAVE — Config-screen framework library. Zero blocks, zero items, no loot, no gameplay mechanics. Pure transitive API dependency. Nothing to weave.

## modernfix   [anchors: support/performance (1)]

LEAVE — JVM/loader-level performance patches (lazy init, dynamic resources). Zero blocks, zero items, no content surface of any kind. Nothing to weave.

## cold_sweat   [anchors: survival (1)]

New proposals:

- from: cold_sweat:hearth (the post-Nether climate-control multiblock) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a significant infrastructure investment (post-Nether, large multiblock, smokestack required); requiring Create brass fittings or a shaft assembly in its crafting means a cold-biome settlement must engage the tech spine before it can stabilize temperature — survival pressure creates demand for Create production. The loop runs: survival pressure → production (Create) → climate stability.

- from: cold_sweat insulating materials (goat_fur, chameleon_molt) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hides and pelts processed through a Create mill into insulation padding or fiber intermediates before reaching the sewing table — an everyday pull that keeps the cold-climate survival chain running through the Create spine even at the basic tier. Lightweight one-step; doesn't over-burden a basic survival material.

- from: cold_sweat:boiler / cold_sweat:icebox | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the boiler and icebox are simpler half-power emitters compared to the Hearth. Gating the everyday climate emitters behind mechanical_crafting (a mid-tier Create method) violates the cost-model rule: never gate a basic/everyday component behind a complex recipe. The Hearth gate (mid-power item) is the correct level; leave the basic emitters on vanilla crafting.

- from: cold_sweat:chameleon/hoglin/goat_fur armor sets (insulated survival gear) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: farmersdelight:cutting is already on the methods palette, and hide-cutting is thematically coherent — but this stays within the survival anchor (cutting hide → insulated armor is still survival-only). It doesn't add a second system anchor; the two accepted candidates above (Create) are the more valuable proposals. Record and drop.

- from: cold_sweat waterskin (hot/cold water carry) | via: create:filling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already listed as an inbound weave on the dossier ("made-by methods: create:filling"). Duplicate — the edge already exists.

REWORK check — existing connections:
- create:filling inbound exists (waterskins). Dossier's M-09 candidate ("sellable survival gear") is correctly identified as weak and M-09 is retired — do not carry forward.

