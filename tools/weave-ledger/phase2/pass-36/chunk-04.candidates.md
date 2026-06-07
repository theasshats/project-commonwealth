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

