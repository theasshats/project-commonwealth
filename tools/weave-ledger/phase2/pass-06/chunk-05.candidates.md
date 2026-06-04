# Phase 2 candidates — chunk-05

## createlowheated   [anchors: Create (1)]
- LEAVE — single-block heat-balance tweak; no tradeable outputs, no items, no material surface to route through any method. It deepens Create internally but has no seam into any other pillar.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items for builder QoL (randomised Deployer placement); entirely a Create-internal utility with no material throughput. No output, no feedstock, no coherent 2nd-pillar surface.

## betterendisland   [anchors: survival (1)]
- LEAVE — pure structure-overhaul with no registered blocks, items, or loot; there is no material surface to weave. Any connection would require inventing content the mod does not possess.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / salt_dust | via: create:crushing (salt ore → salt dust + small rock byproduct) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt is a cooking staple; running rock-salt through a Millstone or Crusher is the obvious way to refine it, pulling Expanded Delight's ore into the Create processing chain right at the start of the food pipeline.
- from: expandeddelight:cinnamon (bark / dust) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grinding cinnamon bark in a Millstone to yield cinnamon dust is the industrial analogue of a spice mill — sensible one-step processing that seats a rustic ingredient on the Create spine.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel | via: numismatics (sell as luxury good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese is time-gated (cask → wait), naturally scarce and portable — exactly the kind of artisan luxury that earns coin at a market stall; reinforces the emergent-trade goal without forcing a machine route.
- from: expandeddelight:salt_dust | via: create:mixing (into brining/curing recipes) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: overlaps with the M-03 crushing candidate above and would double-gate the same everyday ingredient through two Create steps; keep only the simpler ore-crushing entry (M-03). The mixing seam is a future authoring detail, not a separate weave.
- from: expandeddelight:peanut / sweet_potato / cranberry | via: numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: everyday crops sell poorly as luxury goods — M-09 requires high-effort or time-gated production; basic crops don't pass the power-read bar. Cheese and salt are the justified luxury tier.

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot tables | via: loot-table edit (inject a Numismatics coin or a magic reagent into Nether ruins chests) | to: economy | motif: M-09 (loose — loot-drop rather than crafted luxury) | power: mid | tone: ok | verdict: REJECT | reason: the mod registers zero items; any "weave" is a loot-table edit that belongs to the economy or magic pillar's authoring work, not to this mod. The motif doesn't fit cleanly (M-09 is a crafted luxury→coin path, not a drop-table edit); no clean motif applies. Marking LEAVE — loot-seeding is a separate editorial task (see DECISIONS.md if pursued).
- LEAVE — no registered items or methods; the only weave surface is loot tables, which is an editorial task outside this mod's own pillar identity. A structure mod that ships loot gains its 2nd-pillar connection when the loot-table content is tuned, not through a recipe bridge.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot / raw_tin | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a fresh regional metal the Create chain already processes (crush→alloy); minting crushed tin into coin makes it the pack's first non-vanilla coin metal, locking the scarcity-economy seam tight — players in tin-poor biomes have a direct trading motive.
- from: create_ironworks:steel_plate / sturdy_sheet_block | via: aeronautics airframe recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plate is an industrial structural alloy — requiring it in airframe construction makes Aeronautics ship-building meaningfully expensive and thematically correct; "you built this hull from refined steel" is exactly what M-23 is for.
- from: create_ironworks:bronze_ingot / brass pieces | via: aeronautics drivetrain/propeller recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze and brass are the classic materials for propellers and mechanical linkages; routing them into Aeronautics propulsion components gives the mid-tier metalwork a clear endpoint beyond just tool sets.
- from: create_ironworks:steel_ingot | via: ars_nouveau:enchanting_apparatus (steel as a grounding reagent) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: steel already earns two strong pillars (economy M-08, aeronautics M-23/M-24); a third magic tie would over-centralize this one mod. Theme fit is weak — steel is industrial, not arcane. Drop in favour of keeping weave count lean.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate set / steampunk set (implied) | via: create:pressing + create:mechanical_crafting (gate on Create-pressed plates as required crafting inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy and Steampunk sets are forged industrial armor — requiring Create-pressed iron/steel plates to make them is the natural industrial gating; it ties combat-gear progression to the Create spine without touching basic sets.
- from: immersive_armors:divine_chestplate set / robe set | via: ars_nouveau:enchanting_apparatus (arcane apparatus finish step) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Divine armor is self-evidently arcane (blocks one hit per minute via a blessing); finishing it at the enchanting apparatus with a source-gem reagent is thematically obvious and not forced.
- from: immersive_armors:bone_chestplate set | via: occultism:spirit_fire or ritual (bone armor as an occult body-ward) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the dossier shows the Bone set uses vanilla bone (cheap everyday material); spirit-fire is reserved for transmuting mid-high drops into essences, not for re-gating a mid-tier armor. Tone clashes slightly (Occultism is about summoning/bargaining, not bone-ward crafting). Keep the Divine→Ars weave (M-10) as the single magic tie; don't stack two magic weaves on the same mod.
- from: full armor sets | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: players keep armor rather than sell it; M-09 is best for consumables/luxuries. Armor as trade good is thin and doesn't fit the scarcity-economy model.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — pure behavior datapack, no items, no loot additions, no recipe surface. Nothing to route through any method. The mod makes the dragon harder; that's its entire contribution, and it belongs to the survival pillar alone.

## endermoon   [anchors: survival (1)]
- LEAVE — spawn-weight event only; no items of its own. Its indirect output (more ender pearls on Ender Moon nights) is a passive amplifier on existing drops. Any ender-pearl weave (e.g. via M-22 lunar/celestial reagent) belongs on the ender pearl itself or on enhancedcelestials, not on this thin event-registration mod. Forcing an M-22 tag here would be attributing a weave to the wrong mod.

## solclassic   [anchors: survival (1)]
- LEAVE — ambient gameplay rule (diminishing food returns + basket carry); no recipe-type, no material throughput. The mod's 2nd-pillar value is systemic (makes the pack's broad food roster matter, which props up M-09 economy for food sellers), but there is no method-routing weave to hang on it directly. Correct placement: document the systemic amplifier note in DESIGN.md rather than forcing a recipe edge.

== CHUNK COMPLETE ==







