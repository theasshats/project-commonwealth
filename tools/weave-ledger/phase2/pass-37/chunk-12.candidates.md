# Phase 2 candidates — chunk-12

## samurai_dynasty   [anchors: survival (1)]

**Existing connections:** none beyond survival anchor; dossier flags Create ore-doubling and magic mob-drop as candidates.

- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: A surveyor finds a Yokai temple biome and brings ore back to the Create workshop — the crusher doubles yield the same way it does every other regional metal, pulling samurai_dynasty into the material spine without any thematic strain.
- from: samurai_dynasty steel (c:ingots/steel) | via: create:crushing (ore-doubling) + Create metal web | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai_dynasty:steel_ore enters the Create ore-crush table alongside other metals; steel ingots unify under c:ingots/steel and feed into existing steel recipes (TFMG, railways structural parts), making the mod's metal contribution load-bearing rather than siloed.
- from: samurai_dynasty:akaname_tongue / Yokai mob drops | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Akaname (a tongue-licking Yokai) is clearly occult-organic; its dropped tongue burns in occultism's spirit fire to yield a spirit intermediate — thematically dead-on (Yokai as spirit-world creatures) and follows the established mob-drop reagent sink pattern exactly.
- from: samurai_dynasty:akaname_tongue / Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai essence (tongue/Oni horn etc.) as an exotic imbuement catalyst for an Ars spell or reagent upgrade — feudal-Japan spirit creatures feeding a Latin-arcane infusion is a slight culture-mix but both are "ancient magical creature" so it survives red-team. A second magic routing is weaker than the spirit_fire one; flag as lower-priority.
- from: samurai_dynasty spirit_stone build blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: spirit_stone is a themed deco block; crushing it back to raw/gravel is lossy-recycle (M-04 is established for metal deco families). Survives theme check but adds very little — spirit-stone is not a widely-demanded material and a deco-crush weave for an uncommon block wastes Phase-3 effort. Reject in favour of the ore/mob weaves.
- from: samurai_dynasty:jade gem (c:gems/jade) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Jade is a classic East-Asian protective/ritual stone; using the gem as an arcane infusion catalyst for an enchanting-apparatus recipe is thematically clean (protective aura → enchantment reagent). Keeps the gem in the loop rather than being only a decoration material.
- REWORK: dossier 2nd-anchor "economy via numismatics" (implied sell) — that reads as M-09, which is retired. Dropped from candidates; the magic weave via M-02/M-10 is the stronger second anchor.

OK for existing survival anchor. Proposed additional anchors: create (ore-doubling + steel web) via M-03, magic (Yokai drops) via M-02; jade catalyst via M-10.

## mcwfences   [anchors: support/decoration palette (1)]

**Existing connections:** none; pure decoration palette. Dossier correctly identifies it as sanctioned support.

- from: mcwfences metal fence variants (iron/steel-texture) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (Create recycles deco) is established, but the dossier itself marks this WEAK and recommends limiting it to a "wholesale deco-family pass." mcwfences metal fences are everyday items with no unique material; a lossy-crush for 180-variant decoration blocks produces marginal graph value and risks chart noise. Better batched with all Macaw's mods in a single deco-recycle pass later. Reject as standalone now.
- LEAVE — decoration palette (sanctioned support); no coherent 2nd anchor beyond a future wholesale deco-crush pass. The mod's value is the builder palette, not a recipe-graph node.

## travelersbackpack   [anchors: survival (1)]

**Existing connections:** survival only (exploration logistics / carry capacity + fluid buffer). Dossier flags aeronautics and Create-recipe weave as weak candidates.

- from: travelersbackpack fluid tanks (2× portable fluid buffer) | via: aeronautics/logistics context | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A ship's crew member needs to carry fuel, potions, or water across the hold — the backpack's dual tanks make it the natural personal logistics layer for aeronautics expeditions. The M-31 framing is "logistics-required bulk good": here the backpack is the *carrier* enabling logistics, so the link is thematic fit (aeronautics specialist gear) rather than a recipe. Via: config tie / lore designation (no recipe change needed — existing use-case IS the weave). This is a soft anchor, not a method routing — flag as low-priority if the team wants method-only Phase 3 weaves.
- from: travelersbackpack upgrade modules (tank / crafting / smelting upgrades) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: The upgrade modules are mechanically distinct items (blank_upgrade → specialized upgrade); routing them through sequenced assembly (a multi-stage deploy chain) makes them feel like precision-tooled components rather than vanilla-crafted items, and ties the pack's gear-upgrade path to the Create spine. Depth matches the item: mid-tier, one or two assembly steps.
- from: travelersbackpack themed leather/mob-drop variants (e.g. dragon, netherite) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok | verdict: REJECT | reason: M-05 (native-method gating) requires the mod's own machine as the key step; travelersbackpack has no machine — `backpack_shaped` is just a shaped-recipe type. Routing the leather-tier packs through create:mechanical_crafting would be M-20 (deploy-application) at best, but the item is everyday-tier and the briefing explicitly forbids gating basic/everyday components behind complex recipes. Reject.
- from: travelersbackpack sleeping bag (portable respawn) | via: aeronautics/aeronautics role | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: the sleeping bag is an everyday-tier item (simple respawn-point setter); weaving it specifically into aeronautics via a recipe adds no real value — it already functions as the explorer respawn layer without a recipe change. Duplicate of the fluid-tank aeronautics rationale but weaker. Reject to avoid redundancy.
- REWORK: dossier "aeronautics via portable logistics" marked WEAK — that framing is correct, but the M-31 reading above (tanks as the aeronautics crew's personal logistics layer) upgrades it from WEAK to mid-strength if framed as thematic designation rather than a recipe. Keep but note it's a soft link.

## almostunified   [anchors: support (1)]

**Existing connections:** none; pure recipe-graph infrastructure. Dossier correctly identifies it as support.

- LEAVE — genuine infrastructure library; no items, no loot, no methods, no content surface to weave. Its value is the unification pass itself, which serves the connectivity goal structurally but is not a recipe-graph node. The Galosphere silver/palladium gotcha noted in the dossier is the only design-relevant detail, and it's already documented.




