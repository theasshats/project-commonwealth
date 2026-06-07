# Phase 2 candidates — chunk-01

## vc_gliders   [anchors: aeronautics (1)]

- from: vc_gliders:paraglider_iron (mid-tier glider) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a glider's load-bearing frame is pressed metal sheet — of course a Create machinist builds it
- from: vc_gliders:paraglider_diamond / netherite (endgame glider) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the diamond/netherite glider is a precision build — sequenced assembly with a `derpack:incomplete_glider_frame` part earns its power tier
- from: reinforced paper feedstock | via: create:pressing (paper → reinforced paper sheet) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced paper is a mundane input (everyday-tier) — routing it through Create pressing is a legal light step, but the dossier flags this as WEAK and it would apply to dozens of paper-consuming mods; not distinctive enough to accept independently; if M-05/M-06 already gate the tier-1 gliders on Create parts the paper chain is subsumed
- from: vc_gliders:copper_upgrade | via: create:item_application / deploying | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a deployer presses the copper cladding upgrade onto the assembled glider frame — the upgrade is *applied*, not just crafted alongside

REWORK: dossier's existing 2nd-anchor candidate (create:milling for reinforced paper) is the flagged WEAK one above — confirmed REWORK needed; M-05 + M-06 + M-20 together are the coherent set; the milling path should be dropped.

---

## minecolonies_tweaks   [anchors: support/QoL (1)]

LEAVE — genuine zero-weave support role. It is a tag-harmonization glue layer that ENABLES weaves elsewhere (by unifying c:crops/c:foods tags for colony/Create/food recipes) but is not itself a weave node — no machine, no loot, no processed output. Analogous to a library.

---

## timm   [anchors: support/client (1)]

LEAVE — zero content surface (no items, no blocks, no loot, no recipes). Client UI overlay only; nothing to route through any method.

---

## trek-b0.6.1.1   [anchors: survival (1)]

- from: trek structure chest loot | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: exploration specialists loot trek ruins for scarce regional materials and uncommon components; the finds become trade goods for non-explorer players (combat-route supply side applied to exploration)
- from: trek structure chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed magic reagents (source gems, arcane essences, occultism spirit drops) into trek ruin loot tables — exploration becomes one route to magic inputs alongside mob-drop farming
- from: trek "rare spawn" mechanics | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-tier enemy found in a rare trek fortification drops a key component needed in a Create recipe (exploration-gated unlock alongside the standard boss route); deepens the reason to explore rare structures

REWORK: dossier's existing candidate says "leave; weave only indirectly via loot-table edits" — that IS the valid delivery here (via: loot-seed); the dossier undersells it by treating loot-seed as not a real weave. Per briefing §"loot-table seeding", a structure with loot=yes is a real candidate. Three ACCEPT links above are all loot-seed deliveries.

---

## mcwroofs   [anchors: support/decoration (1)]

- from: mcwroofs stone/brick/andesite roof blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing a stone or brick roof returns gravel/stone dust + an XP nugget — the decoration palette feeds back into the Create recycling web
- from: mcwroofs wood roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crush-back is already covered generically by any wood block in the pack; adding 400+ wood roof variants to the crush recipe table is low value and noisy — only the stone/brick variants (above) make sense as a targeted addition. Scale check: 605 blocks total, bulk registration of all variants via tag is feasible but the wood ones add nothing the vanilla wood crush doesn't already cover
- from: mcwroofs:*_roof (stone/brick/andesite/terracotta range only) | via: create:crushing → M-04 bulk batch | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a wholesale deco-sweep (stone-family roofs only) authored as a single tag-keyed crush recipe; one recipe covers the family without spamming individual entries

Note: these two M-04 entries are the same link at different scope; the second (tag-batch) is the correct Phase-3 form. Keep both in record.

---

## balm   [anchors: support/library (1)]

LEAVE — zero content surface. Pure multi-loader abstraction API; no items, blocks, or loot. The weave is its dependent mods' weave.

---

## jamlib   [anchors: library/API (1)]

LEAVE — zero content surface. Platform-abstraction + config framework; no items, blocks, or loot.

---

## createfood   [anchors: survival, Create (2)]

Existing connections: survival (food/nutrition) + Create (all processing via Create methods). Already ≥2 anchors.

OK — connections sound for the two anchors. Both are load-bearing: it IS a Create production mod producing survival goods.

New links / REWORK on existing:

- from: createfood finished dishes (pizza, pie, milkshake, etc.) | via: farmersdelight:cooking → numismatics vendor price | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort Create-processed dishes create a baker/cook specialization — the food is *consumed* against hunger/diet pressure (M-26 consumption), and the production depth (multi-step Create chain) makes a food specialist's output worth trading for; the economy link is demand-gated by diet variety requirement, not bare "sellable"
- from: createfood finished dishes | via: minecolonies colony request system | to: economy (colony) | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists request food; a baker specialist supplying the colony with Create-processed dishes is a cheaper colony-upkeep route than a non-specialist crafting them raw
- from: createfood:*_jam / *_juice (crop-derived intermediates) | via: create:milling (seasonal crop input) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: jam and juice recipes requiring a seasonal crop (e.g. strawberries/berries, gated by Serene Seasons) make certain dishes unobtainable off-season — food variety is seasonal-gated, sharpening the diet-demand pressure

REWORK on dossier candidate: "economy via numismatics — M-09 luxury good → coin" is listed as the economy link; M-09 is **retired**. The correct re-expression is M-26 (consumption sink — food is spent against hunger/diet pressure, demand never zeroes) + M-28 (colony demand for food). Already noted above. The bare sell framing must be replaced.

---

## betterendisland   [anchors: survival (1)]

LEAVE — zero content surface after careful check. No items, no loot (loot=no), no blocks of its own; pure arena/worldgen overhaul. The enhanced dragon fight is survival pressure but there is no material handle to route. Cannot loot-seed (loot=no). Could argue the dragon fight creates demand for gear (M-34 combat supply), but that loop already runs through vanilla dragon drops — betterendisland adds no new drop surface. Genuinely zero-surface for Phase 2.

---

## ding   [anchors: support/client (1)]

LEAVE — zero content surface. Client-only audio cue, no items, no blocks, no loot, no methods.

---

## woodworks   [anchors: survival (1)]

- from: woodworks stone-family adjacent blocks (none — wood only) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks is entirely wood-based (logs/planks); crushing wood deco back to planks/sawdust is already covered by any wood block crush; the M-04 overlap gives no new signal beyond what vanilla wood crushing provides
- from: woodworks:*_chest / *_bookshelf (the more valuable wood items) | via: create:cutting (sawmill parity) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself flags this as WEAK — it's cosmetic recipe-weave overlap rather than a genuine second anchor; woodworks already has a `woodworks:sawmill` type which is the natural authoring surface; routing it *through* create:cutting is not a real cross-system join, it duplicates a recipe path
- from: woodworks:*_beehive (modded-wood beehive variants) | via: minecolonies colony hut supply | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony builders request beehives; woodworks' wood-typed beehives expand the range a colony supplier can fill — a woodworker specialist supplying the colony route
- from: woodworks sawmill output (boards, ladders, bookshelves) | via: create:cutting (cross-register sawmill→saw parity) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: woodworks' Sawmill and Create's saw are parallel wood-cutting methods — registering woodworks' outputs onto create:cutting ties the wood-deco web into the Create cutting chain and gives a Create machinist a one-stop cutting route for all wood decoration

---

## xaerominimap   [anchors: support (1)]

LEAVE — zero content surface. Client-side minimap UI; no items, blocks, loot, or methods. The weave is impossible by construction.

---

## structurize   [anchors: support/library (1)]

LEAVE — support role; hard dependency of MineColonies. Its weave IS MineColonies' weave. No independent items, methods, or loot beyond the build-tool items (which are builder-only utility, not economy/production goods).

---

## spark   [anchors: support/performance (1)]

LEAVE — zero content surface. Profiling tool; no player-facing items, no loot, no recipes.

---

## numismatics   [anchors: economy, Create (2)]

Existing connections: economy (the currency backbone) + Create (depends on Create; coins crafted via Create). Already ≥2 anchors.

OK — connections sound. Numismatics IS the economy hub; it is the *destination* of weaves from other mods, not the source of new outgoing ones. No new cross-system links proposed.

Additional note: dossier correctly identifies it as the hub other mods weave TO. The only open question is whether it needs a survival anchor (M-26 — coins are spent on survival goods). That loop runs player→player; the anchor is implicit in the economy role. No new Phase-3 action needed here.

---

## railways   [anchors: Create, aeronautics (2)]

Existing connections: Create (inbound sequenced_assembly + mechanical_crafting) + aeronautics/transport. Already ≥2 anchors.

OK — connections sound. Steam 'n' Rails is the train logistics layer of the economy's movement arm; it is already a Create production + aeronautics node. No new cross-system links proposed.

- from: railways locometal building blocks (colored locometal variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: locometal is an industrial material; surplus or mismatched-color locometal blocks crushing back to iron/steel input + XP nugget feeds the Create recycling web (deco→material recovery, M-04 lossy)
- from: railways conductor cap (conductor entity) | via: minecolonies colony logistics | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: the conductor is an entity/block, not a colony-requested item; no natural colony hut request surface for conductor caps; forced edge
- from: railways train tracks (scarce material consumption) | via: create:sequenced_assembly (already inbound) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: rail infrastructure is a bulk goods-movement system — building a rail line requires a volume of locometal/track that only makes sense to produce and ship at scale (aeronautics/logistics arm supplying rail expansion); the logistics ARE the economy movement

---

## necronomicon   [anchors: support/library (1)]

LEAVE — zero content surface. Pure API library for ElocinDev mods; no items, blocks, loot, or methods.

---

## corgilib   [anchors: support/library (1)]

LEAVE — zero content surface. Shared loot/datagen/worldgen helpers; no player-facing content.

---

## alternate_current   [anchors: support/performance (1)]

LEAVE — zero content surface. Silent redstone-performance patch; no items, blocks, loot, or methods. The weave is impossible by construction.

---

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

- from: dungeons-and-taverns structure loot (taverns, towers, illager hideouts) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: exploration/combat specialists clear dungeons and taverns for loot that non-combat players can't easily source — the cleared-dungeon drops become trade goods (combat-route supply)
- from: dungeons-and-taverns structure loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed magic reagents (source gems, occultism spirit drops, forbidden arcanus materials) into dungeon/illager-hideout loot — exploration of dangerous structures is a route to magic inputs
- from: dungeons-and-taverns Trial Chamber vaults (trial key / ominous trial key) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ominous vault in a dungeons-and-taverns trial chamber drops a high-tier Create component (boss-key style unlock); the most dangerous variant of the structure gates a tech progression step
- from: dungeons-and-taverns tavern cartographer trades | via: config tie (emerald → map) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the cartographer uses vanilla emerald trades, not Numismatics — this is a vanilla NPC faucet pattern; bridging it into the Numismatics economy would require re-expressing the trade as a player-run service (M-33 service-for-hire), but the service is delivered by an NPC (cartographer) not a player, so M-33 doesn't actually apply; no valid motif for vanilla villager trades under current ruleset; REJECT

== CHUNK COMPLETE ==
