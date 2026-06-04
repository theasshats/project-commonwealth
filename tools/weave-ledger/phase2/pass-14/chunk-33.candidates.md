# Phase 2 candidates — chunk-33

## timm   [anchors: support/client-UI (1)]
- LEAVE — zero-content pure UI overlay (client biome/dimension title renderer); no items, no blocks, no loot tables, no methods. Genuine zero-surface library/behavior mod.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — the 184 registered "items" are internal particle-holder entries (minecraft:blood1..blood15, *_parent), not collectable or craftable game objects; loot=yes flag is a false positive from the particle registrations. No gameplay surface, no methods, no drops. Genuine zero-gameplay-content cosmetic mod.

## architectury   [anchors: support/library (1)]
- LEAVE — pure cross-platform API; 0 items, 0 blocks, 0 loot, no registered recipe-types, no gameplay mechanics. Canonical zero-surface library.

## gamediscs   [anchors: survival (1)]
- from: gamediscs:processor + gamediscs:redstone_circuit (console components) | via: recipe (create:mechanical_crafting or create:sequenced_assembly light step) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a working Minecraft gaming console deserves a machine-shop finish — the circuit board and processor roll off a brass assembly line rather than a crafting table, grounding the retro gadget in Create's industrial aesthetic.
- from: gamediscs:gaming_console | via: recipe (create:sequenced_assembly multi-step) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is reserved for *endgame* multi-step keystones; the gaming console is a novelty/downtime item, not an endgame unlock — scaling deep sequenced-assembly onto a toy is a depth/power mismatch per guardrails.
- from: gamediscs:game_disc_* (skeleton-kill drops) | via: trade (M-21 provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); the disc-from-skeleton-kill loop is already the mod's mechanic and is not economy-facing; forced coin bridge onto a quirky novelty toy is arbitrary.
- REWORK: none — the mod has only one pillar (survival); the single ACCEPT above (M-05 crafting) is a genuine light-step that earns a Create anchor without over-engineering a toy.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: recipe (create:milling) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling dried ginger root into ground spice fits naturally on a Create millstone — a seasonal crop joins the food-processing web the same way wheat or peppercorns would.
- from: snowyspirit:gingerbread_cookie / snowyspirit:eggnog | via: recipe (farmersdelight:cooking or extradelight:oven) | to: survival (deeper food web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: gingerbread and eggnog are high-effort comfort foods — running them through Farmer's Delight cooking tables slots them into the survival nutrition system and makes winter harvests feel rewarding.
- from: snowyspirit:candy_cane / snowyspirit:eggnog | via: trade (M-21 provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; seasonal candy as a coin trade-good is weak (not scarce, not processed) and would require the provisional motif.
- from: snowyspirit:ginger (winter/Serene Seasons gated) | via: worldgen/season-gating (M-16) | to: Create/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger only fruits in Serene Seasons winter — making it the seasonal input for a winter-batch recipe (e.g. a spiced flux for Create mixing, or a cold-catalyst for an Ars Nouveau winter ritual) locks a genuinely scarce seasonal reagent behind the calendar. Pairs M-12 (the milling step) with M-16 (the season gate) on the same crop.

## cmpackagepipebomb   [anchors: Create (1)]
- from: cmpackagepipebomb:pipebomb (rigged Create package) | via: recipe (create:sequenced_assembly or crafting) | to: survival/combat | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — there is no accepted motif for "explosive trap output"; forcing it into M-06 (sequenced-assembly keystone) is theme-wrong (a toy prank is not a keystone); leaving as a one-pillar Create novelty.
- LEAVE — tiny PvP-prank novelty riding Create packages; no loot table, no collectable outputs, no coherent path to a second pillar without inventing an explosion-economy motif. Single Create anchor is sufficient.

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments loot tables (monument chest drops — prismarine-adjacent) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the expanded monument layout adds chest rooms deep in an aquatic dungeon — seeding a handful of Numismatics coins into those chests makes clearing the monument feel economically rewarding and ties aquatic exploration to the player economy without requiring any item from this mod.
- from: betteroceanmonuments loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian-tower secrets are thematically arcane; seeding an Ars Nouveau source gem cluster or Iron's Spellbooks scroll into a hidden monument chest room gives the aquatic dungeon a magic payoff and rewards specialisation-focused players who make the dive.
- from: betteroceanmonuments loot tables | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is boss-drop-as-gate; Better Ocean Monuments adds chests, not a boss — using it as a boss-key source is thematically wrong. No boss drop to gate on.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: aeronautics_dyeable_components:*_levitite (dyed) / *_tire variants | via: recipe (create:toolbox_dyeing or create:mixing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is "Create crushes deco back to raw" (a lossy recycle motif); dyeing levitite is a forward color step, not a recycle — wrong motif direction. The dye step already uses vanilla crafting; routing through Create mixing is gilding with no design gain.
- from: aeronautics_dyeable_components:*_levitite | via: recipe (crafting, dye in offhand) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the mod is already anchored to aeronautics; the dye mechanic is the whole mod — proposing a Create route to earn a second anchor yields no-motif and no meaningful player story.
- LEAVE — pure cosmetic palette extension for aeronautics hulls; no items of its own with any independent resource value. The aeronautics anchor is correct; forced Create/economy edges would be arbitrary. One-pillar cosmetic skin layer is a sanctioned support role within the aeronautics pillar.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery / create_connected:kinetic_bridge | via: recipe (create:sequenced_assembly) | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is for *endgame* keystones; the kinetic battery is a quality-of-life storage block, not a progression gate — over-costing an everyday convenience item violates the depth-scales-with-power guardrail.
- from: create_connected:item_silo / create_connected:inventory_bridge | via: recipe (create:mechanical_crafting) | to: Create (depth) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: these are Create-internal QoL logistics blocks — they're already in the Create spine; M-05 is for *foreign* mods whose flagship item needs gating via their own machine. Applying it to Create's own QoL parts is a category error.
- from: create_connected:fan_*_catalyst blocks (blasting/enriched/freezing/haunting/etc.) | via: recipe (create:item_application) | to: Create (depth/aeronautics) | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the fan-catalyst blocks are wrappings of Create's processing fans — making the filled catalyst require deployer-application of the correct reagent on an empty catalyst frame makes catalyst crafting itself a Create process, deepening the Create loop modestly without gating basic fans.
- REWORK: none — the mod currently uses create:cutting, create:filling, create:item_application, create:sequenced_assembly (existing inbound weaves from the jar); those are well-formed. The single ACCEPT above adds a light M-20 layer on the catalyst blocks; nothing existing looks arbitrary.

## durabilitytooltip   [anchors: support/client-QoL (1)]
- LEAVE — pure client-side tooltip renderer; 0 items, 0 blocks, no loot, no recipe-types. Genuine zero-surface UI mod.

== CHUNK COMPLETE ==

