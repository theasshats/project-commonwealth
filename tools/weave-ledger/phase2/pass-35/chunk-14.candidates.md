# Phase 2 candidates — chunk-14

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the beach biome's fruit gets milled into a coconut flour intermediate that feeds the cooking/baking chain — a new ingredient in the food web that any chef player needs
- from: ecologics:coconut_husk | via: farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: coconut_husk is already tagged as a bowl substitute in vanilla recipes; adding a cutting step for husks has no output product that's meaningfully distinct — it would produce the same or weaker result, and the everyday guardrail says don't over-engineer basic items. The flour link (above) covers the chain sufficiently.
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: azalea flowers are a sheared biome-harvest; routing them through arcane infusion as a floral catalyst for low-tier Ars spells (e.g. an earth/growth glyph component) threads the beach/azalea biome into the magic web — the forager becomes the magic specialist's supplier
- from: ecologics:coconut_slice (clears effects) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: coconut_slice's on-eat effect-clear is a vanilla milk analogue — it's a convenience food, not a magic component. Using it as a cauldron brew ingredient for a cleanse potion is redundant (its direct eat already does this). The flavor clashes with Ars/Iron's serious alchemy tone; a coconut isn't an arcane ingredient.
- from: ecologics woodsets (coconut/azalea planks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco mods — ecologics is a biome/survival mod, not a deco set. Crushing exotic woodsets back to gravel/sawdust is a weak forced edge on ordinary wood; the biome-flavor intent of coconut/azalea wood is building and boat crafting, not industrial recycling. Low-priority per dossier.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a farmable seasonal crop; milling it into ground-ginger powder routes it through the Create spine as a cooking spice intermediate — winter harvests feed industrial food-processing, weaving the seasonal-crop pillar into the tech chain
- from: snowyspirit:ginger | via: farmersdelight:cutting | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is wild in jungles and farmable in winter biomes — tagging it as a Serene Seasons winter/jungle-season input on a cutting board (ginger slices for recipes) ties it to the seasonal scarcity driver; demand for ginger in cooking recipes renews each winter
- from: snowyspirit:eggnog | via: extradelight:vat | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: eggnog is a finished food — running it through a processing method produces no useful intermediate and has no functional output that advances a chain. The snowyspirit food set (eggnog, gingerbread cookie) is meant to be final products, not feedstock. Processing a final food further is over-engineering.
- from: snowyspirit:gingerbread + candy_cane_block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: these are deco/food blocks in a cozy holiday context; crushing them into gravel + XP is a tone clash against snowyspirit's festive warmth — a holiday gingerbread house block being industrially crushed reads badly. M-04 is for metal/stone deco recycling, not holiday candy.
REWORK: dossier's M-09 economy candidate ("seasonal trade goods → coin") is a retired motif — that candidate should be dropped from the dossier. The ginger milling + M-16 seasonal-reagent edges above are the right second anchors.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — zero blocks/items, no loot, pure client-side model/animation replacement. No content surface to route through any method; no pillar weave is coherent. Genuine zero-surface client utility.

## solmaiddream   [anchors: survival (1)]
- LEAVE — 1 cosmetic item (food_book) and a pure behavior-layer addon for Touhou Little Maid. Its only "content" is the maid stat-growth mechanic triggered by feeding maids; there is no material to route through any method. Dossier conclusion confirmed — it's a tiny flavour addon tightly coupled to TLM and the food pool it already shares. A forced second anchor would be artificial.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
- LEAVE — zero blocks/items, no loot, pure dropped-entity-merge behavior. A performance/QoL utility with no content surface at all. Genuine zero-surface utility.

## everycomp   [anchors: support/deco (1)]
- LEAVE — a runtime generator (no own content); any weave belongs on the host mods it bridges (Create woodshapes, Macaw doors, etc.), not on the generator itself. Dossier correctly identifies this: it is a palette-filler whose outputs inherit their host mod's recipe context. Zero independent content surface.

