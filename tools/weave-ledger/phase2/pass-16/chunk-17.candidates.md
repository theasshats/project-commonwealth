# Phase 2 candidates — chunk-17

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — zero-content client HUD overlay (spawn-light markers, chunk grid, JEI highlight); no items, no loot, no recipe surface, no material I/O. Genuine zero-surface support role.

## architectury   [anchors: support/library (1)]
LEAVE — pure cross-platform API library; 0 blocks, 0 items, no loot, no recipe-types. Zero content surface; pulling a weave from it would be fabricated.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (music disc) | via: loot-seed | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 requires a high-effort luxury good; a single joke disc is a meme easter egg — selling it for coin is cheap arbitrage and trivializes the motif. Tone mismatch: the disc is a one-off gag, not a crafted luxury the economy should price. Dossier itself flags "forcing a coin/recipe edge would be noise."
- LEAVE — the dossier's own conclusion is correct: one joke disc, no recipe surface, forcing any economy/craft tie is noise. Curated flavor; sanctioned support role.

## create_cheese   [anchors: Create, survival (2)]
OK — connections sound (Create via mixing/compacting upstream + maturing method; survival via food/dairy).

New cross-system weave candidates:

- from: create_cheese:brie / cheddar / aged cheese (any tier-2/3 matured output) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: mid (tier-2, 600-tick wait) to endgame (tier-3, 900-tick) | tone: ok | verdict: ACCEPT | hook: aged cheese is behind a real time-gate (10–15 min maturing + Create upstream chain) — a player waits and runs a dairy line; selling the output at a Trading Floor stall gives them coin, making the Create-kitchen loop economically meaningful and distinct from raw crop sales.
- from: create_cheese:cheese_curds (mid-step intermediate) | via: farmersdelight:cooking or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: curds are an explicit intermediate from the cheese chain — routing them into a Farmer's Delight cooking-pot recipe (e.g. a cheesy stew or white sauce) deepens the Create-to-kitchen pipeline without forcing a machine step, and uses an established method the pack already has.
- from: create_cheese:calendar_page_tier_1/2/3 (maturing time-keepers) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid–endgame | tone: ok | verdict: REJECT | reason: Calendar Pages are the *selector* for maturing tier, not a constituent ingredient needing a deeper chain — gating the page itself behind sequenced assembly would add cost to a time-based system (the maturing wait is already the cost). Over-engineering for no play-loop benefit; depth is already delivered by the time-lock, not a parts chain. Violates "never gate a basic component behind complex recipe" — the page is the equivalent of a crafting catalyst here.
- from: create_cheese:brie / gouda (a prestigious cheese variety) | via: MineColonies provisioning (config seeding) | to: economy (MineColonies production route) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies taverns/inns need food to provision colonists — seeding high-nutrition cheeses into the colony food supply turns the Create dairy line into a colony-support resource, threading production into the economy pillar's second arm (the colony route). Player running the dairy supplies the colony player.

REWORK: None — existing Create+survival anchors are coherent and well-grounded (create:mixing/compacting upstream, native create_cheese:maturing method). The dossier's M-09 candidate is the obvious next step (confirmed above as ACCEPT).

## almostunified   [anchors: support/recipe-graph (1)]
LEAVE — recipe-graph unification tool; zero items, zero loot, operates on the recipe graph itself at reload time. No material I/O to route. The galosphere silver/palladium GOTCHA is noted and must never be violated in its config. Pure infrastructure support role.

## domum_ornamentum   [anchors: decoration/support + MineColonies (1)]
OK — MineColonies dependency; current single anchor (decoration / support within the MineColonies production route) is coherent.

New cross-system weave candidates:

- from: domum_ornamentum:dynamic_timberframe / framed blocks (Architect's Cutter output using Create-produced stone/metal blocks as input material) | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Architect's Cutter takes ANY block as input — feeding Create-made andesite alloy casing or processed stone into the Cutter yields framed/timbered variants; this creates a natural Create-decoration demand sink (your factory-built stone becomes colony architecture) without any recipe rewrite, just palette guidance. M-04 is "Create recycles deco" — here it's the reverse direction (Create stone in → DO deco out), which is the same connective edge: Create production → decoration palette, coherent loop node.
- from: domum_ornamentum ornamental blocks (timberframes, shingles, pillars built with Create-palette materials) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: DO blocks are purely construction deco; treating them as "luxury goods" for coin would make coin trivially farmable from any build material (you just pass any block through the cutter). The cutter has no maturing gate, no time lock, no machine depth — it's immediate. Economy weave would cheapen M-09 and undermine scarcity.
- from: domum_ornamentum:architectscutter (Cutter block itself) | via: MineColonies production route gating | to: economy | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The Architect's Cutter is already a MineColonies support dependency — it cannot meaningfully be gated behind itself or behind a colony without breaking the MineColonies dependency chain. The mod IS the MineColonies decorator; gating it via colony recipes is circular.

REWORK: Current anchor lists "decoration palette (support); tied to MineColonies progression (1 content + support)" — this is slightly under-labelled. The MineColonies linkage is a production-route anchor (MineColonies is the economy's alternate-production arm), so DO should carry a light economy-adjacent tag via that route. Not a rework requiring recipe change — a label/anchor clarification: it should be counted as "support + economy (via MineColonies production route)" = effectively 2 anchors by indirect path.

## trashcans   [anchors: support/automation-QoL (1)]
- from: trashcans void blocks (item/fluid/energy sinks) | via: recipe-gate (gating the ultimate_trash_can behind Create-processed components) | to: Create | motif: M-05 | power: everyday–mid | tone: ok | verdict: REJECT | reason: Voiding is the opposite of the loop — it destroys value rather than moving it through production/economy. Gating the trash can behind Create parts gives a minor recipe cost bump but the fundamental design tension stands: a scarcity pack that prices everything also hands players an unlimited void. Deeper recipe gating doesn't resolve that tension; it just delays access. If the mod stays in for automation QoL, its recipe should be light (no deep Create gating) precisely because it shouldn't feel "worth building."
- LEAVE for weave purposes — the dossier note stands: trashcans are anti-scarcity by design; no pillar weave is coherent. The balance flag (don't let it trivialize byproduct value) is the real design note, not a recipe integration. Consider a config-side restriction (only non-resource overflow — e.g. cobblestone, excess dirt) if scarcity erodes in playtest.

## createshufflefilter   [anchors: Create (1)]
- from: createshufflefilter:shuffle_filter / weighted_shuffle_filter (filter items) | via: any recipe-gate approach | to: any second pillar | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Both filter items are pure builder/automation utility for randomizing Deployer placement — their value is entirely as a QoL handle inside Create contraptions. There is no material output, no loot surface, no thematic adjacency to magic/survival/economy that wouldn't be purely forced. No motif fits a filter-item weave; a recipe-gate would add friction to a trivial utility item, which the cost model explicitly guards against for everyday components. The mod earns its place as a single-anchor Create utility; there is no coherent second anchor.
- LEAVE — one-item builder utility (two filter variants, no loot, no material I/O). Dossier confirms "no coherent 2nd pillar without forcing it." Genuine single-anchor Create support.

## alternate_current   [anchors: support/performance (1)]
LEAVE — pure redstone-propagation performance patch; 0 blocks, 0 items, no loot, no recipe-types. Transparent behavior replacement with zero content surface. No weave is possible or meaningful.

## fogoverrides   [anchors: support/client-QoL (1)]
LEAVE — config-only client visual mod (fog density/color per biome/dimension); 0 blocks, 0 items, no loot. Pure atmosphere tuning, no material or world interaction surface. Nothing to route through any method.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — generic dropped-entity merge behavior, no items, no loot, no recipe-types. Operates on ItemEntities at runtime; no material I/O or content surface to route through any method.

## corgilib   [anchors: support/library (1)]
LEAVE — pure code library (loot/worldgen/datagen helpers for Alex's Caves etc.); 0 blocks, 0 items, no loot, no recipe-types. Genuine zero-surface dependency; no content to weave.

## glitchcore   [anchors: support/library (1)]
LEAVE — pure loader-abstraction library backing Glitchfiend mods (Serene Seasons, Biomes O' Plenty, TerraBlender); 0 blocks, 0 items, no loot, no recipe-types. Zero content surface; dependency only.

## farmersdelight   [anchors: survival, Create (2)]
OK — connections sound (survival via core food loop, crops, and seasonal eating; Create via existing inbound weaves: create:milling, create:mixing, create:filling for grain→flour and ingredient prep).

New cross-system weave candidates:

- from: farmersdelight cooked dishes (beef_stew, baked_cod_stew, apple_pie — high-saturation finish goods) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully stocked kitchen (crops → cutting board → cooking pot, gated on Create-milled flour) is genuine production depth; pricing the best stews as trade goods turns the farmstead into an economy node and rewards the player who built the food line rather than just eating the output. The coin pressure also incentivizes building a dedicated food production wing rather than eating everything.
- from: farmersdelight:cabbage / tomato / onion / rice (seasonal crops, c:crops/* tags) | via: season-gated growth (Serene Seasons) + farmersdelight:cooking | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Serene Seasons already gates crop growth by season; FD's unique crops (cabbage, tomato, rice) that don't grow off-season become scarce seasonal ingredients — the kitchen recipes that depend on them are naturally gated by the calendar, not by a recipe change. This is a config/season-data weave (seed which FD crops are seasonal), not a KubeJS recipe. DESIGN north star lists M-16 as "PRIORITY survival lever; want more of these."
- from: farmersdelight:straw (cutting byproduct) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: straw falls from cutting grain crops and wheat; routing it through Create's mill (or already-existing milling paths) as an intermediate for paper or packing material deepens the crop-to-industry chain and keeps the byproduct stream non-trivial. One light step for an everyday byproduct — cost model compliant.
- from: farmersdelight cooked feasts (food_serving recipes — large feast blocks) | via: MineColonies provisioning (config/data seeding) | to: economy (colony route) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists need food; seeding FD feast foods into the colony provisioning list turns the large-scale kitchen output (cooking_pot batches) into a colony supply resource — the player running the big farm feeds the colony, and the colony in turn enables unlocked buildings (the colony-production cross-cut). Advances the loop: production output → economy (colony arm) → unlocked production.
- from: farmersdelight:skillet (iron skillet item, cooked meals) | via: create:haunting (soul-fire cook step) | to: magic (Occultism/Ars) | motif: M-19 | power: everyday | tone: clash | verdict: REJECT | reason: Haunting a skillet or meal has no semantic grounding — soul-fire cooking is a stretch from farmhouse food. The tone clash (rustic kitchen vs. occult haunting) means a player would not say "of course." M-19 is the Create→occult bridge; routing food through it reads as arbitrary even if technically possible. Reject on theme-fit.

REWORK: Existing anchors are sound. The made-by line confirms create:milling/mixing/filling inbound weaves already exist. The dossier's 2nd-anchor candidates (M-09 economy sell + M-12 deeper Create chain) are both ACCEPT above — the mod should be relabelled survival, Create, economy (3) once the M-09 and MineColonies-provisioning weaves are authored.

## exposure   [anchors: Create, survival (2)]
OK — connections sound (Create via create:sequenced_assembly for film development + deployer-tended camera stands; survival as self-expression/keepsake hobby).

New cross-system weave candidates:

- from: exposure:aged_photograph / exposure:album (developed, printed, physically aged photographs) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a developed, aged photograph is genuinely high-effort (16 frames shot → develop at Lightroom → photograph_aging step → album assembly); selling albums or display-quality photographs as map-art/art-market trade goods is thematically coherent with an analog-photography aesthetic. The effort-gate (multi-step darkroom process, some automated via Create) earns the M-09 luxury designation. A player selling the art they made on their last airship expedition is a natural player-economy moment.
- from: exposure:camera (camera item, gold variant — high material cost) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Selling the camera itself (the tool) as a trade good is weaker than selling its output (photographs). The camera is a durable tool, not a consumable luxury; treating it as a trade good adds a recipe-economy edge without narrative pull. The photograph/album route above is the stronger M-09 candidate; camera-as-good is redundant and adds no loop advancement. One M-09 weave per mod is sufficient.
- from: exposure:black_and_white_film (film cartridge) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: Film development via sequenced assembly already EXISTS as the inbound weave (made-by: create:sequenced_assembly). Proposing it again is re-stating the existing anchor, not a new cross-system link. No new weave needed here.
- from: exposure:photograph (printed photograph of a location/scene) | via: loot-seed (placing photographs as decorative "evidence" drops in structure chests) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Photographs are player-generated, not world-generated — seeding them in structure loot would require pre-generated image data that doesn't exist at world-gen time. The mechanic doesn't support "pre-placed" photos; this delivery method is not technically coherent for this mod. Reject on mechanism grounds.

REWORK: Current 2 anchors (Create, survival) are sound. The dossier flags M-09 as "WEAK" for photographs — this pass reads it as ACCEPT (the aged_photograph + album path has genuine multi-step depth and thematic fit). The "weak" label in the dossier was probably conservative; the album-as-art-trade-good is a real luxury good by the pack's definition.

## aeronauticscompat   [anchors: aeronautics/support (1)]
LEAVE — pure mixin/runtime compat patcher for Sable ships; 0 blocks, 0 items, no loot, no recipe-types. Mandatory infrastructure per CLAUDE.md; no content surface to weave. Genuine zero-surface support role.

## createthreadedtrains   [anchors: support/performance (1)]
LEAVE — server-side railway threading performance mod; 0 blocks, 0 items, no loot, no recipe-types. Pure tick-parallelism optimization for Create trains; no content or material I/O. Nothing to weave.

## toomanypaintings   [anchors: support/decoration (1)]
- from: toomanypaintings painting item (any of the 50+ variants) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Vanilla paintings are crafted from 1 wool + 8 sticks (trivial cost); Too Many Paintings only adds a selection GUI, not a new crafting gate or material depth. Pricing vanilla-recipe paintings as coin-bearing luxury goods is cheap arbitrage — no effort-gate. M-09 requires genuine production depth (a time gate, multi-step chain, or scarce material). This mod has none of that; adding economy value to a zero-cost painting selection would undermine scarcity. No coherent weave.
- LEAVE — pure decoration-palette and GUI mod; 0 blocks, 0 items registered, no loot. No material surface. Sanctioned single-anchor support role.

## dataanchor   [anchors: support/library (1)]
LEAVE — pure data-attachment and networking library (Corgi_Taco); 0 blocks, 0 items, no loot, no recipe-types. Zero content surface; dependency only. Genuine zero-surface library.

## drones   [anchors: aeronautics (1)]
New cross-system weave candidates:

- from: drones:iron_rotor (iron-tier thruster component) | via: create:item_application or crafting-table recipe gated on Create-produced pressed iron / shafts | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a rotor is a mechanical component — shaping pressed iron plates + brass shafts into a rotor through Create's item_application (or a light 3-5-step crafting recipe using Create parts) is exactly the kind of "deploy a woven part onto a base" that M-20 describes. The wood rotor stays vanilla-accessible; the iron rotor costs Create-tier materials. Depth scales with the component's power — coherent with M-24/M-20 being the drivetrain side of the aeronautics supply line.
- from: drones:ion_thruster (high-tier thruster, clearly endgame-flavored) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is named as an advanced propulsion tier — it should be a multi-step Create fabrication (derpack:incomplete_ion_thruster through a sequenced assembly chain using electric components from Create New Age / Create Addition). This gates the best drone tier behind genuine Create factory depth and makes the ion thruster the drone equivalent of a high-tier Create machine part. Coherent: "of course the electric ion thruster comes out of the precision manufacturing line."
- from: drones:controller (assembly controller block) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the controller is the drone's brain — making it require mechanical crafting (gear-arranged recipe in a Mechanical Crafter array) costs a moderate Create investment and signals that drone ownership is a mid-tier Create milestone, not a day-one grab. Thematically: a precision controller is built in a precision machine.
- from: drones:pocket_drone (the equipped drone item, assembled at the controller) | via: numismatics sell | to: economy | motif: M-09 | power: mid–endgame | tone: ok | verdict: REJECT | reason: The pocket_drone is assembled from arbitrary blocks the player chose — it's a personal customized tool, not a standardized luxury trade good. Its value is entirely player-defined by what blocks it carries. Selling "a drone" for coin doesn't make sense when every drone is different; you can't price it consistently. No coherent economy weave for the assembled item.
- from: drones:drill (drill block component, used as a drone ability) | via: create:pressing or create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: The drill block is one possible drone body component but it's also just a functional block used for its ability — making it a Create-pressing output is viable technically, but it creates a conflict: the player needs the drill to build the drone, and gating it behind Create pressing front-loads the drone-building cost on a secondary component. Better to gate at the rotor/controller level (already accepted above) and leave the ability blocks (drill, beacon, lodestone) at vanilla-accessible cost. Over-gating would make mid-tier drone abilities inaccessible before Create is established. The dossier notes "aeronautics anchor already coherent" as the baseline.

REWORK: The dossier's existing Create weave candidates (M-06 sequenced assembly for ion_thruster / M-05 native gating) are both ACCEPT above with method clarifications. The dossier was already pointing at the right structure; this pass confirms and refines the delivery mechanism. Note: wood_rotor should stay vanilla-accessible (light recipe, no Create gate) — only iron_rotor and ion_thruster escalate.

== CHUNK COMPLETE ==







