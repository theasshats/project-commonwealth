# Phase 2 candidates — chunk-03

## create_confectionery   [anchors: create, survival (2)]

Power-read: cocoa→chocolate is a mid-tier Create chain (crusher → mixer → presser/mold); effect candies are everyday consumables; ruby/white chocolate bars are treat-tier cosmetic foods. The mod already sits at create+survival (2). Looking for a 3rd pillar via method-pull.

- from: create_confectionery:bar_of_ruby_chocolate / effect candies | via: create:sequenced_assembly (multi-step boxed confection) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A player specializing in the cocoa→chocolate chain assembles boxed assortments via sequenced-assembly; another player in need of Speed/Saturation uptime must trade for them — cross-route dependency forces the food-specialist to supply the combat/expedition crew.
- from: create_confectionery effect candies (Speed, Mining Fatigue clear, Phantom-repel) | via: create:mixing (seasonal sweetener input) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A seasonal sweetener (e.g. a spring honey or autumn berry, Serene-Seasons-gated) catalyzes the most potent candy recipes, so the confectionery output follows the calendar — spring harvest unlocks Restful chocolate batches.
- from: create_confectionery chocolate fluids (cocoa_butter, black/white/ruby chocolate) | via: extradelight:mixing_bowl / farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Chocolate fluid is a finishing ingredient for ExtraDelight dessert recipes (chocolate tarts, glazed goods), pulling the confectionery line deeper into the cooking chain rather than terminating at bars.
- from: create_confectionery blocks (gingerbread_block, caramel_bricks, chocolate_bricks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Misfired or surplus deco blocks can be crushed back to cocoa powder / sugar gravel + an XP nugget — consistent with the pack's lossy deco-recycle pattern.
- from: create_confectionery:bar_of_ruby_chocolate → numismatics coin mint | via: bare sell link | to: economy | motif: none (M-09 retired) | power: mid | tone: ok | verdict: REJECT | reason: "luxury sellable" is the ambient endpoint of the loop, not a weave; M-09 retired. Demand must be gated (M-26/M-29/M-30) to count.

REWORK: existing dossier candidate "economy via numismatics sell [M-09]" — correctly flagged retired, remove from dossier consideration.
OK — remaining connections (create + survival) sound.

---

## createoreexcavation   [anchors: create (1)]

Power-read: Drilling Machine is mid-to-endgame Create infrastructure (made via mechanical_crafting, milling, cutting/crushing); drill-heads tier from iron → diamond → netherite. The `vein` recipe type is the pack-lever: any ore can be made a vein output. The mod already sits at 1 anchor.

- from: createoreexcavation vein-table (configurable regional ore output) | via: GTMOGS regional vein definition + createoreexcavation:vein KubeJS recipe | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: The Drilling Machine taps the pack's GTMOGS-defined regional veins — the same regional scarcity that forces trade across the map also gates which ores a drilling specialist can extract; regional drilling becomes a tradeable service.
- from: createoreexcavation:diamond_drill / netherite_drill | via: create:mechanical_crafting (already inbound) → MineColonies research gate | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: The netherite drill tier is unlockable through a MineColonies research path, meaning the colony specialist can unlock drilling at a cheaper route than self-crafting; encourages the colony player to supply drill heads to the mining specialist.
- from: createoreexcavation kinetic ore output | via: create:crushing ore-doubling | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Raw ore output from the Drilling Machine feeds directly into the crusher ore-doubling chain — the mining arm is already a Create consumer; this is the natural downstream path that makes drilling worth specializing in.
- from: createoreexcavation ore outputs → bare sell to economy | via: numismatics | to: economy | motif: none (M-09 retired) | power: mid | tone: ok | verdict: REJECT | reason: ore→sell is the ambient loop endpoint; the demand-gating is the M-30 regional scarcity edge above, not a vendor transaction.
- from: createoreexcavation:vein_finder → magic attuning | via: ars_nouveau:imbuement | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: a rotating drill sensor being infused with arcane energy is thematically forced (tech detection device ≠ magical artifact); no motif covers "tech tool → magic upgrade."

REWORK: dossier's sole 2nd-anchor candidate "economy via vein-table scarcity [M-08]" is partially correct framing but underspecifies; M-30 regional-scarcity gate is the precise motif (M-08 is the minting step downstream). Refine to M-30 in dossier.
OK — M-03 inbound already established.

---

## durabilitytooltip   [anchors: support — client QoL (1)]

Zero items, zero methods, no loot. Pure tooltip overlay.

- LEAVE — genuine zero-content client UI mod; no items, methods, or loot surface to route. No weave possible.

---

## create_central_kitchen   [anchors: create, survival (2)]

Power-read: The Blaze Stove is a mid-tier Create automation piece (fueled by Blazes, 4× cooking speed boost); the real value is the Packager/arm integration layer that wraps other cooking blocks. 0 items of its own. Already 2 anchors.

- from: create_central_kitchen Blaze Stove (heating accelerator) | via: create_central_kitchen as speed-tier gate | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A kitchen specialist who builds a Blaze Stove can produce the high-throughput food output that feeds colony worker demand (MineColonies food upkeep) faster than hand-cooking — the industrial kitchen is a distinct production node whose output other players depend on.
- from: create_central_kitchen sequenced-assembly sandwiches/burgers/pies | via: create:sequenced_assembly (existing inbound) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists require food input; the central kitchen's high-throughput sequenced-assembly output (pies, feast dishes) is the realistic supply route for a colony provisioner — a cross-pillar gate where kitchen output feeds colony upkeep.
- from: create_central_kitchen sauce/drink/ice-cream fluids | via: farmersdelight:cooking / extradelight:chiller (already inbound) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The kitchen's sauce and drink fluids are natural intermediate ingredients for further cooking chains (FD recipes consuming sauce as a liquid input), extending the processing web rather than terminating at the dispenser.
- from: create_central_kitchen finished feast / sauce output → bare sell | to: economy | motif: none (M-09 retired) | verdict: REJECT | reason: "finished dish is sellable" is the ambient endpoint, not a demand-gate. The M-28/M-29 edges above are the correct economy weaves.

REWORK: dossier's 2nd-anchor candidate "economy via numismatics [M-09, WEAK]" — M-09 is retired; the correct economy links are M-28 (colony supply route) and M-29 (cross-route dependency). Update dossier note.
OK — create+survival connections sound.

---

## lionfishapi   [anchors: support — library (1)]

Zero items, zero methods, no loot. Rendering/animation API only.

- LEAVE — genuine zero-content developer library; no items, methods, or loot surface to route.

---

## tipsmod   [anchors: support — client QoL (1)]

Zero items, zero methods, no loot. Loading-screen tip display only.

- LEAVE — genuine zero-content client UI mod; no items, methods, or loot surface. No weave possible.

---

## spawn   [anchors: survival (1)]

Power-read: Clams/crabs/anglerfish are everyday ambient fauna catches; crab_boil_block is mid-tier food prep; date palm wood is everyday building material. Has loot=yes. The mod is currently 1-anchor (survival) and the dossier flags three 2nd-anchor candidates — assess all.

- from: spawn clam/crab/anglerfish drops | via: create:milling (clam → ground shell / calcium powder) or create:crushing (crab carapace → shell fragments) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Clam shells and crab carapace run through Create's crusher/mill into calcium powder or shell grit — a natural industrial byproduct of the fishing/foraging supply chain that feeds Create chemical recipes (chalk substitute, glazing compound).
- from: spawn:clam (colored variants), spawn:angler_fish (bioluminescent) | via: ars_nouveau:imbuement (bioluminescent essence) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Anglerfish produce natural bioluminescence; crushing/imbuing their light organ yields a glowing arcane substrate — a plausible organic→magic reagent pathway that gives rare aquatic fauna a magic purpose.
- from: spawn seafood/critter drops (clams, crabs, eel, anglerfish) | via: farmersdelight:cooking / farmersdelight:cutting (already inbound) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Deepening the existing FD cooking chain — crab → crab bisque, clam → clam chowder as multi-step processed dishes — pulls the fauna mod further into the food processing web. (Extends the existing inbound weave rather than duplicating it; legitimate per instructions.)
- from: spawn seafood surplus (scalable catch) | via: aeronautics/logistics (bulk transport) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Aquatic regions produce clam/crab at scale; inland players need the protein. Bulk seafood is a natural trade commodity whose volume makes airship/train delivery worth the effort — the fishing region feeds the interior via the logistics arm.
- from: spawn critter drops → "mint for coin" | to: economy | motif: none (bare sell, M-09 retired) | verdict: REJECT | reason: "sell catch for money" is the ambient endpoint; the M-31 logistics edge above and M-12 processing chain are the real weaves.
- from: spawn critter drops → createfisheryindustry mechanized bait/harvesting | to: aeronautics | motif: M-12 | power: weak | tone: ok | verdict: REJECT | reason: createfisheryindustry is in the pack but the dossier rates this WEAK and "if mechanized fishing is wanted" — the connection is speculative (the bait_trap method targets fish species, not crabs/clams specifically); insufficient grounding. The M-31 logistics edge is more concrete.

REWORK: dossier 2nd-anchor candidate "economy via Numismatics [M-09]" — M-09 retired; REJECT. Dossier candidate "aeronautics via createfisheryindustry [M-12 WEAK]" — REJECT (too speculative). Replace with M-31 bulk logistics and M-10 magic reagent edges found above.
Existing FD cooking/cutting connection: OK — sound.

---

## handcrafted   [anchors: support — decoration palette (1)]

Power-read: Furniture pieces are everyday crafting (vanilla planks/wool/stone); no single item is endgame. Has loot=yes (267 blocks). The mod is currently 1-anchor (decoration); the dossier lists Create and economy as 2nd candidates.

- from: handcrafted hardwood furniture (oak/dark_oak/cherry tables, chairs, shelves) | via: create:cutting (planks → precise-cut trim/component) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Routing a subset of the furniture line through Create's Saw (cut-to-shape trim pieces → assembly step) earns the decoration tier a Create anchor — the woodworker's workshop uses the Saw as the first step before hand-crafting the finished piece.
- from: handcrafted furniture sets (full room sets: bedroom/kitchen/study) | via: minecolonies colony building supply request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists furnishing a building request furniture items — chairs, shelves, beds — creating continuous repeating colony demand for the furniture specialist to supply. This is a demand-gate (M-28 colony route), not a bare sell.
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking / extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The berry_jam_jar is a food item whose contents (berry jam) make sense as a cooking ingredient — a jam spread step in toast/sandwich/cake recipes, pulling the decorative kitchen prop into the food chain.
- from: handcrafted furniture → "sell as luxury good" | to: economy | motif: none (M-09 retired, bare sell) | verdict: REJECT | reason: selling finished furniture is the ambient endpoint; M-28 colony supply demand is the correct economy weave.
- from: handcrafted metal-trim pieces (andesite_pillar_trim, etc.) | via: create:crushing back to metal | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: andesite trim is stone, not metal — crushing stone deco is already fully covered by existing M-04 stone patterns; adding a second M-04 row for what is effectively the same operation on different stone doesn't add value. The wood-cutting M-04 above is the more informative edge.

REWORK: dossier candidate "economy via numismatics [M-09 WEAK]" — M-09 retired; the real economy anchor is M-28 colony demand found above.
OK — decoration palette anchor is sound; M-04 Create-cutting weave above is the 2nd anchor.

---

## dtterralith   [anchors: survival — worldgen compat (1)]

Items: 33 seeds + leaf/sapling variants. Has loot=yes. A compat bridge; logs/wood fall through to vanilla item economy downstream.

- from: dtterralith biome-specific seeds (dtterralith:jacaranda_seed, dtterralith:maple_seed, dtterralith:cedar_seed, etc.) | via: create:milling (seed → dye-pigment or resin powder) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith-exclusive tree seeds (cedar, jacaranda, maple) yield biome-specific pigments or wood resins when milled — a Create processing step that makes foraging in Terralith biomes produce inputs for dye recipes and Create mixing. Encourages regional exploration to collect biome-locked seeds.
- from: dtterralith logs (cedar, ebony, kapok — distinctive wood types) | via: create:crushing back-recycle | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: logs crushing to planks/sawdust is already covered by vanilla wood → Create processing; adding a dtterralith-specific row is redundant with existing M-04 wood-deco patterns. The seed-milling edge (M-12) is the more distinctive weave.
- from: dtterralith amethyst_seed (associated with Terralith amethyst biomes) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The amethyst-tree seed grown in crystal-rich Terralith terrain carries latent resonance — imbuing it yields a minor arcane lens or crystal dust, connecting the worldgen exploration side to the magic pillar.

REWORK: dossier concluded "none — leave (worldgen compatibility layer)" — valid reasoning but undersells the seed surface. M-12 seed-milling and M-10 amethyst-seed imbuement are coherent lightweight edges. Upgrade from LEAVE to 2-accept.

---

## ars_n_spells   [anchors: magic (1)]

Zero items, zero loot. Internal magic↔magic bridge (Ars Nouveau ↔ Iron's Spellbooks mana unification). No foreign-material I/O.

- LEAVE — genuine zero-item-surface mod; the weave it performs is internal to the magic pillar (Ars↔Iron's mana). There is no material join key through which a 2nd pillar could be reached without forcing a thematic mismatch. The magic-internal connection is its correct and sufficient role.

---

## corgilib   [anchors: support — library (1)]

Zero items, zero methods, no loot. Code library.

- LEAVE — genuine zero-content developer library; no items, methods, or loot surface. No weave possible.

---

## midnightthoughts   [anchors: survival (1)]

Zero items, zero methods, no loot. Sleep/rest buff effect system only.

- LEAVE — zero item/loot surface; the well-rested buff has no material join key. Thematically it amplifies the survival pressure → rest motivation, but there is no method to route through. No weave possible.

---

## createmechanicalcompanion   [anchors: create (1)]

Power-read: Mechanical Wolf is endgame (sequenced-assembly, netherite plates, quantum drive). Has loot=yes (illager_engineer spawns). 21 items. Dossier concludes LEAVE for 2nd anchor.

- from: createmechanicalcompanion:illager_engineer_spawn_egg / illager_engineer drop | via: loot-table seeding | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The Illager Engineer variant (ships with the mod) drops a create-relevant component (e.g. a partial blueprint or logic chip fragment) when killed — making the combat specialist who hunts them a supplier for the tech tree; boss/enemy drops feeding a tech production route is the M-34 combat-supply pattern.
- from: createmechanicalcompanion:optical_sensor / quantum_drive | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: imbuing a quantum computing component with Ars arcane energy is a strong theme clash (cutting-edge clockwork tech ≠ magical infusion); forced. The optical sensor's purpose is sensor-range, not magical resonance.
- from: createmechanicalcompanion endgame modules (booster_rocket, combat modules) | via: create:sequenced_assembly (already inbound) → MineColonies research gate | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: The most advanced wolf modules (booster, mob_radar, mounted_crossbow) require a MineColonies research unlock (e.g. Mechanist research tier) before the recipe becomes available — knowledge gating that means the colony specialist must reach a research threshold before supplying these modules to other players.

REWORK: dossier concludes "none — leave (no tradeable/magic/transport surface)" — partially valid, but the Illager Engineer loot surface (M-34) and MineColonies research gate (M-37) are real lightweight edges. Upgrade from full LEAVE; the companion stays Create-anchored with a combat-supply + research add.

---

## gtmogs   [anchors: survival, economy (2)]

Power-read: GTMOGS is a framework mod (3 marker blocks), not a content mod. Already 2 anchors. The dossier correctly notes "no weave to author — it enables downstream motifs (M-03/M-08)."

- from: gtmogs vein configuration | via: GTMOGS vein KubeJS + createoreexcavation:vein recipe | to: economy | motif: M-30 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: Each GTMOGS vein definition locks a metal to a region; the vein recipe type directly maps to regional scarcity gates on M-08 coin minting and M-30 trade — authoring this is the pack-design step that makes the scarcity model real. (This is a config/design weave, not a recipe weave, but M-30 names it correctly.)
- from: gtmogs surface indicator blocks (vein markers) | via: loot-seed into GTMOGS vein loot table | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: GTMOGS marker blocks do not have loot tables (they are config/worldgen markers, not mob/structure loot); no loot-seed weave is possible here.
- from: gtmogs vein system → bare sell ores to economy | motif: none (M-09 retired) | verdict: REJECT | reason: ore → sell is the ambient endpoint; the demand-gating is M-30 above.

REWORK: dossier says "no weave to author — it enables downstream motifs" — sound reasoning for a framework, but M-30 regional-scarcity gate is the explicit motif name for what this mod IS doing in the pack. Naming M-30 as gtmogs's economy anchor is clarifying, not forcing. OK otherwise.
Existing anchors (survival + economy) sound.

---

## openpartiesandclaims   [anchors: support — server protection (1)]

Zero items, zero methods, no loot. Chunk-claim / party-permissions framework.

- LEAVE — genuine zero-content server protection mod; no items, methods, or loot surface. No weave possible.

---

## createshufflefilter   [anchors: create (1)]

Two filter items (shuffle_filter, weighted_shuffle_filter). No loot. A builder QoL utility.

- from: createshufflefilter:shuffle_filter / weighted_shuffle_filter | via: create:deploying (Deployer randomizes block-type placement on a contraption) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: The shuffle filter affects Deployer item-placement logic, not drivetrain/propulsion/control surfaces — M-24 targets mechanical propulsion components feeding Aeronautics engines/control surfaces, not placement randomizers. No applicable motif for "Deployer filter → aeronautics."
- from: createshufflefilter:weighted_shuffle_filter | via: create:mechanical_crafting (gated behind a Create machine-crafting step to emphasize it's a precision component) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: The filter is already implicitly a Create item (uses Create Deployer); requiring mechanical_crafting is adding depth to a utility item, but M-05 is "a mod's flagship item built in its own machine gated on Create parts" — this mod's items are already in the Create family; M-05 is about foreign mods adopting Create methods, not a Create sub-item gaining depth. No clean motif.
- LEAVE — a two-item Create QoL utility with no loot and no material surface beyond the filter items themselves. No coherent 2nd anchor: the only possible edges (M-24 control-surface, M-05 native-method) don't fit on examination.

---

## entity_texture_features   [anchors: support — client rendering (1)]

Zero items, zero methods, no loot. Texture rendering engine.

- LEAVE — genuine zero-content client rendering mod; no items, methods, or loot surface. No weave possible.

---

## modonomicon   [anchors: support — QoL/documentation (1)]

Six items (books). No loot. Guidebook framework.

- from: modonomicon:modonomicon (guidebook) | via: patchouli:shapeless_book_recipe (already supported in pack) | to: support | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the book item is flavor/documentation; routing it through a recipe is not a pillar-weave. No applicable motif — book items are not material connectors.
- LEAVE — documentation/guidebook framework; the book items carry no material join key for a pillar weave. The guidebook's value is onboarding, not a production node.

---

## alternate_current   [anchors: support — performance (1)]

Zero items, zero methods, no loot. Redstone propagation performance patch.

- LEAVE — genuine zero-content performance mod; no items, methods, or loot surface. No weave possible.

---

## createbigcannons   [anchors: create, aeronautics (2)]

Power-read: bronze cannon = mid tier; cast_iron/steel = upper mid; nethersteel = endgame. Cartridge assembly is sequenced. 213 items + 139 blocks; loot=yes. Already 2 anchors. Looking for a 3rd economy anchor and checking existing connections.

- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: GTMOGS regional vein (steel-locked region) → create:crushing → createbigcannons cannon chain | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel is region-locked by GTMOGS vein scarcity; the munitions specialist in a steel-rich region controls cannon production — their rivals in steel-poor regions must trade for cannons or raw ingots, making the steel-region player a key supplier in PvPvE.
- from: createbigcannons shells / cartridges / fuzes (consumable munitions) | via: farmersdelight / extra food supply side | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Munitions are consumed on use and can't be stockpiled without ongoing production — a continuous consumption sink that means the cannon operator always needs resupply from the munitions specialist. (M-26 consumption sink: demand never zeroes out.)
- from: createbigcannons:big_cartridge / AP shell (endgame munitions) | via: MineColonies research gate | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced munition assembly (cluster/HA shells, tracer application) requires a MineColonies Ballistics research node to unlock — locking the highest-yield shells behind colony progression, making the colony player a gate for the artillery specialist's endgame kit.
- from: createbigcannons cannon drop loot | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Cannon-equipped enemies (the Illager Engineer from createmechanicalcompanion shares the combat ecosystem) drop a cannon-grade component (bronze ingot, barrel fragment, or shell casing) as loot — giving the combat specialist materials to trade back into the tech supply chain.
- from: createbigcannons shells / munitions | via: numismatics mint → bare sell | to: economy | motif: none (M-09 retired) | verdict: REJECT | reason: selling finished munitions for coin is the ambient endpoint; M-26 consumption and M-30 scarcity gating are the demand edges.
- from: createbigcannons:steel_ingot | via: tfmg:hot_blast / industrial_blasting (TFMG blast furnace as steel source) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's blast furnace is the natural steel-smelting route in the pack; gating cannon-grade steel on TFMG industrial processing rather than vanilla furnace creates a cross-route dependency between the munitions specialist (CBC) and the heavy-industry player (TFMG) — neither is self-sufficient.

REWORK: dossier 2nd-anchor candidate "economy via numismatics [M-09 MED]" — M-09 retired. The real economy anchors are M-30 regional scarcity, M-26 consumption sink, and M-37 research gate, all found above.
Existing create + aeronautics connections: OK — sound (deep Create build chain + contraption/ship mounting).

== CHUNK COMPLETE ==
