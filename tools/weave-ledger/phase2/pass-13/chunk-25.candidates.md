# Phase 2 candidates — chunk-25

## create_hypertube   [anchors: Create, aeronautics (2)]
- REWORK: existing aeronautics anchor is notional/pillar-labeling only; there is no authored recipe edge connecting hypertube to aeronautics construction. The mod is genuinely about in-base personnel transport, not airship construction, so the aeronautics label is a vibe claim. Downgrade is a human call — flag for Gate review.
- from: hypertube_entrance (assembled via create:sequenced_assembly) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: hypertube is ground/base transport; forcing its parts into an Aeronautics control-surface recipe creates a tone mismatch (tube vs airship control). No mechanical coupling. The aeronautics anchor should rest on shared kinetic-power theme alone, not a recipe; better to leave the label as-is than invent an arbitrary recipe edge.
- from: create_hypertube tube network (player/villager transit) | via: theme/logistics | to: aeronautics (logistics pillar) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — transport theme is coherent but no recipe/method to route through; motif does not exist for "complements aeronautics thematically." Needs Gate 0 if a new motif is warranted.
- LEAVE — already ≥2 pillars (Create + aeronautics); no additional coherent recipe weave. The Create anchor is fully earned (sequenced_assembly). The aeronautics anchor is thematic/logistics, not recipe-grounded; note for Gate review but do not force a recipe edge.

## prickle   [anchors: support (library) (1)]
- LEAVE — pure config-format library; 0 blocks, 0 items, no gameplay surface. No pillar weave is possible or coherent.

## createoreexcavation   [anchors: Create (1)]
- from: drilling machine output (raw ores — scarce regional metals) | via: createoreexcavation:vein table → create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the drilling rig taps a scarce vein; the ore feeds the Create crusher; the processed metal mints into coin — the economy runs on what your drill finds.
- from: diamond_drill / netherite_drill (endgame drill-heads) | via: M-15 boss-key unlock | to: Create (depth) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier drill bit demands a boss drop as a fabrication input — deeper tech requires defeating harder content first.
- from: raw_emerald (vein output via createoreexcavation:vein) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: raw_emerald is a vanilla item used broadly; dedicating it as an Occultism ritual input via this mod specifically is an over-attributed edge — the vein is just a delivery mechanism, not a distinct material. The connection should live on a mod-native drop, not a passthrough vanilla ore.
- from: vein table (any ore vein configured in datapack) | via: M-16 seasonal reagent | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: createoreexcavation veins have no season-lock mechanic; vein rate is not season-gated without custom code that doesn't exist. Seasonality would need to be authored in the vein recipes, which is a pack-design lever not a recipe weave.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris — a rare ocean-chemistry material — is exactly the kind of exotic ingredient an arcane infusion demands; sperm whale hunt for the magic web.
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue from the void worm burns in spirit fire into a dimensional essence; the end-dimension kill powers the occult web.
- from: alexsmobs:bear_dust | via: create:mixing | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear dust mixed with oil yields a crude lubricant or tallow intermediate; fauna byproduct keeps the machines running.
- from: alexsmobs:void_worm_beak / void_worm_effigy drop | via: M-15 boss-key unlock | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is a genuine boss; its beak or effigy drop gates an endgame Create recipe — the design on-ramp through content, not just materials.
- from: alexsmobs:banana (renewable food) | via: numismatics (sell good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: banana is too common/trivial a food item to be a meaningful luxury good; the economy pillar should gate on scarcity or effort. A bulk-farmable fruit doesn't carry trade weight.
- from: alexsmobs:ambergris | via: numismatics (sell good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is rare, hunt-gated, and historically a luxury trade item — a natural coin-earner in the player economy.
- REWORK: survival anchor is solid; the four ACCEPTs above (ambergris×2, ender_residue, bear_dust, void_worm_beak) collectively earn magic + Create + economy as second pillars — verify none conflict with reagent-ownership table before authoring.

## structurize   [anchors: support (library — MineColonies build engine) (1)]
- LEAVE — pure build-engine dependency for MineColonies/StyleColonies; no blocks/items of its own that can be woven. Its weave is entirely MineColonies' weave.

## durabilitytooltip   [anchors: support (client QoL/UI) (1)]
- LEAVE — client-side tooltip overlay; 0 blocks, 0 items, no processing method, no gameplay surface. No pillar weave possible.

## kubejs_create   [anchors: support (modpack tooling) (1)]
- LEAVE — scripting bridge that enables Create-recipe weaving via KubeJS; registers no items, blocks, or methods. It is the instrument of weaving, not a weave target.

## dynamictreesplus   [anchors: survival (worldgen/foraging) (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run the saguaro fruit through a Millstone to yield cactus pulp or a desert dye — arid foraging feeds the Create processing chain.
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk organic) | via: create:crushing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: felled mega-mushroom caps crush into mushroom powder / spores — a fungal byproduct stream for the mixing chain.
- from: dynamictreesplus:saguaro_fruit | via: numismatics (sell good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is renewable and easily farmed once the cactus is established; it doesn't have the scarcity or effort profile for a meaningful sell good. Use milling first; economy anchor requires more than bulk-farmable fruit.
- from: dynamictreesplus:mushroom_branch | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — a mushroom branch fed into arcane infusion has no thematic logic; mushrooms don't map onto Ars Nouveau's elemental/arcane palette. Forced.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crush the salt ore to yield salt dust plus a small mineral byproduct — the same ore-doubling loop Create applies everywhere; basic seasoning through the crusher.
- from: expandeddelight:cinnamon (bark, dust) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark goes through the Millstone as the pack's spice-grinding step — small but coherent; cinnamon powder feeds baked recipes downstream.
- from: expandeddelight:cheese_wheel (aged, time-gated) | via: numismatics (sell good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese is time-locked, player-effort product — a natural luxury trade good; wheel to coin.
- from: expandeddelight:salt (c:dusts/salt) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: salt-in-mixing is a reasonable candidate but duplicates the create:crushing salt_ore edge above; one Create anchor is sufficient for salt. Don't pile two Create edges on the same material.
- from: expandeddelight:chili_pepper | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: chili pepper as an arcane infusion ingredient has no thematic grounding in Ars Nouveau's elemental palette. Forced "spicy = fire magic" reading is too shallow.
- REWORK: existing survival anchor (food/crops/cooking) is solid. The three ACCEPTs (salt_ore crushing, cinnamon milling, cheese coin) give Create + economy as second pillars. Salt_ore crushing is the strongest because it's M-03 and directly feeds the pack's ore-processing idiom.

## formationsnether   [anchors: survival (1)]
- from: formationsnether loot tables (loot=yes; Nether structure chests/altars) | via: loot-table edit to insert a magic reagent or sellable drop | to: magic / economy | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the altar ruins in the Nether hold occult ingredients or rare sell goods — exploring structure loot feeds the magic web and trade economy without adding new items, just tuning what already generates there.
- from: formationsnether Nether altar loot | via: numismatics (sell good, rare find) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: this is the same loot-table hook as the ACCEPT above; don't double-log it as a separate motif row. The M-02 / loot-edit path already covers the economy outlet.
- REWORK: formationsnether has no items/recipes of its own — any weave IS a loot-table edit. The ACCEPT above is the only coherent surface. Note for authoring: the loot-edit is very lightweight (one JSON file); suitable as a quick win in survival/magic pillar work.

== CHUNK COMPLETE ==
