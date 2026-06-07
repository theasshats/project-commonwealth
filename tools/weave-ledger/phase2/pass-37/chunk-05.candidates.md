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

