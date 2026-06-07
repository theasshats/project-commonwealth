# Phase 2 candidates — chunk-04

## companion   [anchors: support/QoL (1)]

Behavior-only pet-safety mod: teleport tracking, health-retreat logic, no items, no loot, no recipes. The PHASE2-BRIEFING reserves LEAVE for "genuine zero-content code library / behavior mods" — this qualifies. There is no material surface to route, no loot to seed, no mechanic that ties to a system node.

- LEAVE — pure behavior mod (no items, no loot, no methods); zero surface for any method-pull or loot-seed. Pet survivability is a QoL improvement to the survival experience but offers no join key to route toward a 2nd anchor. Forcing any edge here would produce a defect edge, not a weave.

## minecolonies_tweaks   [anchors: support/tag-harmonization (1)]

This mod is the c: tag glue layer for the pack's food/crop web — its OUTPUT is the unified tag set (c:crops/corn, c:foods/garlic, c:foods/cheese, etc.) that enables Create/cooking/colony recipes to reference unified crop identities instead of per-mod ids. It also ships minecolonies_tweaks:component_merge_shapeless as a registered recipe type, and its scrolls are colony logistics tools.

**Method-pull analysis:**
- The unified c:crops/* and c:foods/* tags it injects are the join key that lets Create milling (M-12) target, e.g., "all grains" rather than individual mod seeds. Without its tags, modded crops are invisible to shared recipes.
- Its component_merge_shapeless recipe type is the MineColonies upgrade-component merging mechanic — a colony-side method (M-28 colony route).
- The inventory/copy scrolls are colony logistics tools — they move resource lists between colony storage and player inventory, reducing colony micromanagement. This is a logistics-adjacent function (M-28 / colony route).

**Candidate 1: survival↔production via c:tag injection enabling Create milling of unified crop tags**
- Power: everyday (tag injection is invisible infrastructure, always active)
- Tone: fine — a harmonization mod enabling pack-wide food-web processing is coherent
- Red-team: this isn't a recipe weave from minecolonies_tweaks itself; it's enabling weaves in other mods. The "weave" here is that mc_tweaks' tags are the prerequisite for Create/cooking chains targeting modded crops. That's a SUPPORT anchor function, not a self-contained 2nd anchor for this mod.
- REJECT — the tag injection is enablement infrastructure (support role), not a weave that adds a new system anchor to this mod. The mod's identity IS its tags; giving it a "2nd anchor" by noting those tags enable Create milling is circular (the tags are support, not production). The correct frame: LEAVE this mod in the support role; the weaves that EXPLOIT these tags are recorded on Create/cooking/FD mods.

**Candidate 2: colony route via component_merge_shapeless as a colony upgrade chain step**
- Power: mid (colony upgrade components are mid-tier colony progression)
- Tone: fine — a colony-facing merge recipe fits the MineColonies production route
- Red-team: component_merge_shapeless is a MineColonies mechanic, not a cross-system bridge — it merges colony building parts within the colony system; it doesn't reach across to Create or magic. That makes it an intra-system deepening, not a 2nd-anchor cross-system weave.
- REJECT — intra-system MineColonies mechanic; doesn't add a new system anchor. If anything this is already captured under M-28 (colony route) as an existing connection.

- LEAVE — support role (tag harmonization). This mod's function is enabling other mods' cross-system weaves by unifying crop/food tags; it earns its keep as infrastructure, but it has no independent content surface from which to weave a genuine 2nd anchor. Its scrolls are colony logistics tools, not cross-system items. Leave as support.

## formationsnether   [anchors: survival (1)]

Nether structure worldgen mod: generates ritual altars, sanctuaries, cabins, castles, campsites in the Nether. No own items/blocks — the content surface is loot tables (loot=yes). PHASE2-BRIEFING explicitly says "do NOT LEAVE a loot-bearing structure mod just because it has no recipes" — the delivery mechanism is loot-seed.

**Method-pull analysis:**
The Nether biome placement and structure variety makes this pack's Nether dangerous to explore — that's the danger face of Survival pressure. But loot tables are the weave surface, and the structures' thematic vibe (nether ruins, ritual altars, sanctuaries) is a strong match for:
- Magic reagents seeded into altar/sanctuary loot → ties the Nether danger route into the magic production pillar (M-02 mob-drop reagent sink, via loot-seed variant)
- Scarce progression components seeded into castle/fortress loot → ties Nether exploration to the boss-key/high-tier production gate (M-15 boss-key unlock analogue for structure chests)

**Candidate 1: magic reagent seeded into ritual-altar / sanctuary loot tables**
- from: formationsnether structure chests (altar / sanctuary) | via: loot-seed | to: magic | motif: M-02 | power: mid (Nether altar structures are mid-tier exploration targets) | tone: ok — nether ritual altars yielding magic reagents is thematically coherent (desecrated altars left behind occult materials) | verdict: ACCEPT | hook: Nether altars look like they belong to the magic web; finding Ars source gems or Occultism datura in a ritual altar chest makes the structure feel like a predecessor to the player's own magic practice.

**Candidate 2: boss-key/progression component seeded into nether castle/stronghold loot**
- from: formationsnether nether castle / campsite chest | via: loot-seed | to: create (production gate) | motif: M-15 | power: mid-endgame (nether fortresses are dangerous; castle structures harder to reach than overworld) | tone: ok — nether fortresses yielding rare machine components or Create processing parts (e.g., a precision mechanism, a mechanical component) as rare drops fits the "dangerous frontier yields rare goods" loop | verdict: ACCEPT | hook: the Nether's danger pressure becomes worth facing because its hardest structures drop parts the Create specialist needs, making combat players the natural Nether suppliers for tech players.

**Candidate 3: numismatics coin as loot-table drop in nether structures (bare economy link)**
- from: nether structure chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: clash — seeding player-minted currency from NPC/world-generated loot contradicts the player-run economy ruling (M-08 is player-minted; coin from structure loot is a faucet from outside the player economy, which is M-14 NPC coin faucet territory, cut under #163/#240) | verdict: REJECT | reason: bare coin-from-loot is a cut NPC coin faucet (M-14 cut); contradicts player-run economy. The weave would need to be a component that feeds the minting chain, not the coin itself.

OK — existing survival anchor is sound; the two loot-seed links above add magic (M-02) and create/production (M-15) as second and third anchors, advancing the loop: Nether danger → loot containing magic reagents and tech components → production of magic/Create goods → economy.

## dynamic_fps   [anchors: support/performance (1)]

Pure client performance mod — throttles FPS/volume/rendering when the window is unfocused. Zero items, zero loot, zero methods. No material surface of any kind.

- LEAVE — genuine zero-content client performance library. No items, no loot, no methods, no player-facing behavior beyond FPS management. No weave is coherent here; forcing one would be a defect edge.

