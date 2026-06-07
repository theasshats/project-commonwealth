# appleseed — dossier

<!-- HAND-AUTHORED (not the build-dossiers skeleton). Diet – AppleSeed Edition is a HUD + mechanic mod:
     it registers 0 blocks / 0 items / no recipe types (the digest below is correctly near-empty), so the
     auto-skeleton would read as a content-less library and freeze. But it is NOT a library — it is the
     food face of the SURVIVAL (pressure) system per docs/SYSTEMS.md §2, added in v0.6.0 to REPLACE Spice
     of Life (solclassic + solonion, both cut). Content below is grounded on the digest metadata + the
     ratified SYSTEMS.md model; nutrition behaviour is the mod's documented mechanic. -->

one-line:   Diet – AppleSeed Edition — diet-variety nutrition: auto-derives each food's nutrient groups from its recipe ingredients, grants buffs for a balanced diet / withholds them for an imbalanced one. The maintained successor to the classic Diet mod; the pack's diet system in place of Spice of Life.
vibe:       systemic-survival, diegetic nutrition HUD; no blocks/items of its own — it re-reads the whole modlist's food.
signature:  (no items) — the five nutrient groups (Grains, Vegetables, Protein, Fruits, Sugars) + the diet HUD + the balanced-diet buff set.

methods (FIRST-CLASS — what this mod can DO; resources other mods pull THROUGH — §2.0):
  registered recipe-types (AUTO, jar-grounded): (none — pure mechanic; nutrition is auto-derived, not a recipe type)
  non-recipe mechanics: auto-calculates nutrition from a food's recipe ingredients across the ENTIRE modlist (no per-food hand-tagging — decisive for a ~356-mod pack); balanced diet → buffs, imbalanced → buffs withheld. The mechanic IS a standing demand signal, not an item.
  consumes / outputs: consumes nothing craftable; its "output" is DEMAND — it makes diverse food continuously worth producing, so it pulls on farming / ranching+hunting / cooking production (the join key, but inverted: it FEEDS demand rather than accepting a material).

anchors:    survival (1) — it is the pressure-side diet mechanic (SYSTEMS.md §2, "Food: the diet system"). The natural 2nd is production-by-demand, not a recipe edge.
2nd-pillar candidates (a demand-driver, so frame as "what production does the diet pull on" — not a forced recipe):
  - production (Create/farming/cooking): diet variety creates ongoing demand for diverse crops, meats and cooked dishes → pulls Farmer's Delight / ExtraDelight / vinery / farming mods. This is the loop in miniature: pressure (diet) → production (food) → economy (food trade). via: config/tuning, not a new recipe. [STRONG — the mod's whole point; matches SYSTEMS.md]
  - economy: a balanced diet being valuable makes high-nutrient / multi-group foods sellable trade goods (M-09), so the cook/farmer specialist supplies others. via: numismatics price/sell. [MED — the Eco "varied nutrition has value" parallel, SYSTEMS.md]
  - magic: none obvious — leave (don't force).

how-packs-integrate: drop-in diet layer; pairs with Farmer's Delight-family food mods (the recipe-derived nutrition covers them automatically). Replaces Spice of Life (which needed per-food tagging).
open gaps: per-category buff/decay tuning is a later config pass (SYSTEMS.md "Food" — usable on defaults). Keep all five default groups (AppleSeed's auto-calc is tied to its five fixed presets).
sources: https://modrinth.com/mod/diet-appleseed-edition  + docs/SYSTEMS.md §2 (the diet system, ratified v0.6.0)  + digest metadata (appleseed-2.0.3-1.21.1)
status:     VERIFIED (mechanic + role grounded in SYSTEMS.md; 0-content is correct, not under-captured)

<!-- AUTO-DIGEST-FACTS — hand-seeded; this mod registers no blocks/items/recipe-types (correctly empty). -->

jar:            appleseed-2.0.3-1.21.1
primary ns:     appleseed
deps:           (none beyond loader)
counts:         0 blocks, 0 items, 0 biome-modifiers, 0 c:tags, loot=no   (correct — a HUD/mechanic mod, no content registered)
made-by methods (foreign types this mod's recipes USE — existing inbound weaves): (none / vanilla only)
material c:tags: (none)
blocks (grounded): (none)
item sample (grounded): (none)
