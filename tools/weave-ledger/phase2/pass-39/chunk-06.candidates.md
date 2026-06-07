# Phase 2 candidates — chunk-06

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a coconut palm drops ripe coconuts; a windmill-powered mill cracks them into shredded coconut + coconut oil (fluid), feeding Farmers/ExtraDelight cooking chains — the tropics become a Create-processed food ingredient
- from: ecologics:coconut_slice (clears effects on eat) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the effect-clearing property of coconut slice makes it a natural arcane solvent; imbuement with Source upgrades it to a purgative reagent used in dispel/purification rituals — tropical biology as magic catalyst
- from: ecologics:azalea_flower | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: azalea_flower already exists as a vanilla-adjacent dye/decorative item; milling it to pink dye duplicates an existing chain with no loop value — forced processing with no demand driver
- from: ecologics wood (coconut/azalea planks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for *deco* blocks crushing back to raw/gravel; these are functional woodset planks and the crush-to-sawdust route adds no loop edge — thin and redundant alongside other woodset milling
- REWORK: existing survival anchor is sound (foods/biomes feed pressure correctly). The M-12 coconut-oil route is the strongest 2nd anchor; the imbuement route is a valid bonus. Note: coconut_slice's effect-clear is a low-power purgative (everyday food), so the imbuement integration must not gate basic food use — only elevate it into a reagent form at additional cost.

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — pure client-side tooltip renderer; 0 items, 0 blocks, no material surface, no loot table. Genuine zero-content.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — code library only (0 blocks, 0 items); provides base classes and food metadata for MMF-Group mods. Genuine zero-content surface.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — PvP-toggle command mod; 0 items, 0 blocks, no material surface. Genuine zero-content; directly serves the cooperative premise without needing a weave.

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — crash-recovery hook; 0 items, 0 blocks, nothing to route. Genuine zero-content.

## endrem   [anchors: survival (1)]
- from: endrem themed eyes (undead_eye, nether_eye, guardian_eye, corrupted_eye, etc.) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: if a player cannot find the right structure, a transmutation ritual converts a thematically-matched boss/biome drop (e.g. wither_skeleton_skull → undead_eye via spirit fire) into the correct eye — the magic route gives a deterministic craft path without trivializing exploration; the cost (soul-fire reagent + boss drop) keeps it costly
- from: endrem:magical_eye (the magic-themed eye, hardest to find) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the "magical" eye is literally arcane — producing it through an enchanting apparatus (feeding source gems + reagents in a large apparatus array) is thematically locked and makes an Ars specialist the path to this specific eye; ties End access to the magic production route
- from: endrem:corrupted_eye | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the intent of endrem is exploration-over-crafting; making even one eye easily sequenced-assemblyable risks trivializing the entire gate — the dossier itself warns this. The magic ritual (M-11) already provides a hard craft-fallback without duplicating the route. One craftable path (magic) is enough; a second (Create) is surplus and dilutes the exploration pressure
- REWORK: existing survival anchor is sound (it IS the End gate). The two accepted candidates push it toward a survival↔magic dual anchor without undermining the exploration core.

## cmparallelpipes   [anchors: create (1)]
- LEAVE — single Create plumbing QoL tool (Pipe Wrench). 2 items, no loot, no foreign content surface. Any weave would be contrived; support role within the Create spine.

## aeronautics   [anchors: aeronautics (1), Create de-facto (2)]
- from: aeronautics:levitite_blend | via: create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite blend (zinc + end-stone powder in a mixer) is the bulk material every shipbuilder needs; a specialist who mass-produces it and mints processed zinc into Numismatics coin becomes the server's lift-material supplier — scarcity of zinc and end-stone powder anchors the economy link (M-08 player-minted: the mint happens from processing the scarce input, not from selling the blend to NPCs)
- from: aeronautics:adjustable_burner (hot-air lift) | via: config-tie (burner fuel tag) | to: survival/economy | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: extend the burner's fuel tag to include TFMG diesel/gasoline — a charcoal or diesel specialist supplies the fleet's hot-air ships; makes the simple cheap-lift ship dependent on fuel production, closing the loop between aeronautics and the fuel economy (M-13 fuel → propulsion)
- from: aeronautics:levitite (crystallized, in-world step) | via: KubeJS catalyst requirement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the levitite blend→levitite crystallization step is code-only (not JSON) — gating it on a placed occultism/Ars reagent as a catalyst (KubeJS event hook) creates a clean aeronautics↔magic seam; the player who wants higher-tier lift material must involve a magic specialist. Caution: flagged as "needs source check" in dossier — confirm the in-world step is hookable before Phase 3
- from: simulated:rope_coupling / docking connector | via: config / worldgen | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: docking connectors placed at Numismatics trading-post outposts make airships a real bulk-cargo arm; rope/docking logistics = the physical distribution layer that makes aeronautics matter for trade (M-31: goods moved in bulk require the logistics arm)
- from: aeronautics:end_stone_powder | via: create:milling | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: end_stone_powder is already produced by the levitite_blend mixing recipe itself (crushed end stone → powder is the standard Create ore-processing path); this is not a new weave, it's describing existing behavior. No new loop edge.
- from: offroad tires (dyeable, addon) | via: trade | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is retired — "sellable" is the ambient endpoint, not a weave. Dyeable tires as cosmetic trade goods have no demand-gating motif.
- OK — the aeronautics pillar already anchors strongly to Create (jar-proven: zinc/brass/sequenced-assembly throughout). The accepted candidates add economy (M-08 levitite supply + M-31 docking logistics), magic (M-10 crystallization gate), and fuel/survival (M-13 burner). These are the load-bearing second-anchor links needed to integrate aeronautics into the full loop.

## creativecore   [anchors: support/library (1)]
- LEAVE — dev library (GUI API, packet/event system); 0 items, 0 blocks. Genuine zero-content.

## ohthetreesyoullgrow   [anchors: support/library (1)]
- LEAVE — tree-generation framework library; 0 items, 0 blocks. Genuine zero-content; pulled only as a dependency.

## direct_chute   [anchors: create (1)]
- LEAVE — single Create logistics block (zinc-based chute); 1 block, 1 item, no loot. Any second-pillar weave would be contrived. Legitimate Create-spine support role.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — slab-break behavior mod; 0 blocks, 0 items. Genuine zero-content.

## jade   [anchors: support/client-UI (1)]
- LEAVE — client-side informational HUD overlay; 0 items, 0 blocks. Genuine zero-content.

## gravestone   [anchors: survival (1)]
- from: gravestone:gravestone (silk-touch drops the block itself) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a gravestone block that held a player's death items carries residual soul energy — spirit-firing it releases a small soul-essence or occult fluid (like spirit_solution), giving death a tangible magic byproduct; a player specializing in death-site salvage can trade soul-materials to magic specialists
- from: gravestone:obituary (the logged death item) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: the obituary is a text/information item (records death location + inventory); imbueing a death log as a magic reagent is thematically odd — the soul is in the *grave block*, not the paper record. Clash between the note-taking function and arcane infusion purposes.
- REWORK: existing survival anchor is appropriate (death-loss softener). The gravestone → spirit_fire route (M-11) is the coherent weave: stones hold soul energy, spirit fire releases it. Keep it light — this is an everyday item (placing a grave happens every few deaths), so the soul byproduct should be a low-tier reagent, not endgame.

## yungsapi   [anchors: support/library (1)]
- LEAVE — shared jigsaw/structure library for YUNG's mods; 0 items, 0 blocks. Genuine zero-content.

## xaerominimap   [anchors: support/client-nav (1)]
- LEAVE — client-side minimap HUD; 0 items, 0 blocks. Genuine zero-content.

## accessories   [anchors: support/library (1)]
- LEAVE — accessory-slot API; 0 items, 0 blocks. Weaving lives in the mods that register wearables into its slots, not here.

## createoreexcavation   [anchors: create (1)]
- from: createoreexcavation vein table (datapack/KubeJS configurable) | via: createoreexcavation:vein (config-tie) | to: economy/scarcity | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: by seeding only region-specific scarce ores (per GTMOGS ore-gen) into the vein table for a given chunk, the Drilling Machine becomes the Create specialist's slow-but-infinite extraction route for their region's metals; region-locked vein content enforces that a drilling specialist in iron-rich territory cannot drill for gold — exactly the regional scarcity gate that drives trade (M-30)
- from: createoreexcavation:diamond_drill / netherite_drill tier | via: minecolonies route | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier drill heads (diamond/netherite) are endgame inputs — making them available cheaper through a MineColonies blacksmith/toolsmith hut (the colony route to drilling capability) means a settlement player can offer the pack's specialists better drills than pure solo crafting; the colony route lowers the barrier to large-scale ore extraction and ties colony progress to mining depth (M-28 colony route)
- from: createoreexcavation:raw_emerald / raw_redstone / raw_diamond (found in vein outputs) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the drilling machine's gem outputs (raw_emerald, raw_diamond from vein recipe table) are processed through Create's crusher into cut gems that feed the player-minted currency side — diamonds milled to dust are a Numismatics coin-tier metal; links the deep-extraction loop to the coin economy (M-08)
- from: createoreexcavation:drilling_machine | via: KubeJS boss-drop gate | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier notes the machine is made via create:crushing/cutting/mechanical_crafting — it's a mid-tier Create item, not an endgame keystone. Gating it behind a boss drop would break the progression (the player needs the drilling machine BEFORE they'd farm endgame bosses). Power mismatch — boss gates are for endgame items, not mid-tier tools.
- REWORK: existing Create anchor is sound. The three accepted candidates (M-30 regional vein config, M-28 colony drill-tier, M-08 gem output → coin) give it economy and survival touches through the loop's own mechanisms. The M-30 config lever is especially important — it's the design tool that makes the excavation mod serve the scarcity foundation rather than undermining it.

## sable   [anchors: support/physics-backend (1)]
- LEAVE — physics-engine library (sub-level backend for Aeronautics); 0 items, 0 blocks. Genuine zero-content; the weaving happens in mods that build on it (aeronautics).

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen-modifier library (biome injectors, density functions); 0 items, 0 blocks. Genuine zero-content.

== CHUNK COMPLETE ==
