# Phase 2 candidates — chunk-07

## ctov   [anchors: survival (1)]
- LEAVE — loot=yes but zero registered items/blocks; its only player-facing seam is custom structure loot tables (placed on existing vanilla loot), and all plausible cross-pack drops (coin, reagents) are pack-side editorial choices, not a mod-to-mod weave edge. Seeding other mods' items into ctov structures is a delivery action (loot-seed) that requires no ctov coupling — any such seed is attributed to the *source* mod, not ctov. No coherent second pillar to anchor here.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem (arcane currency hub) | via: ars_nouveau:imbuement | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A stack of source gems is the most visible reward from a productive magic operation — letting players sell them on a Numismatics stall is the most natural "magic earns money" loop; the currency is player-run so the price floats freely.
- from: ars_nouveau:spell_scroll (endgame spell scroll) | via: numismatics sell/price | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: A spell scroll that took real time/Source to compose should fetch good coin; selling one is a meaningful player-economy transaction, not an exploit.
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement (foreign essence → source_gem) | to: magic (internal hub depth) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Already the established M-01 spine — confirming it is sound, no rework needed.
- from: mob drops → Vitalic/Drygmy → Source generation | via: non-recipe (native sourcelink) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Any mob farm or Alex's Mobs enclosure quietly powers the Ars magic system; organic surplus doesn't go to waste.
- from: crop/tree growth → Agronomic Sourcelink | via: non-recipe (native sourcelink) | to: survival | motif: M-02/M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seasonal crop gluts (Serene Seasons summer bumper harvest) convert to raw magic fuel — survival feeds magic effortlessly.
- from: ars_nouveau:archwood_log | via: create:crushing (M-04 recycling) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood is plentiful once the grove is found; letting Create crushers recycle offcuts to planks/gravel + XP nugget fits the pack's general deco-recycle rule and ties magic lumber into Create.
- REWORK: no existing connections beyond the magic pillar — the above represent new additions, not reworks. Connections sound within magic; the gap is the missing 2nd pillar (economy/survival), addressed by the accepted rows above.

## alternate_current   [anchors: support (1)]
- LEAVE — pure behavior/perf mod; 0 items, 0 blocks, loot=no. Nothing to route, no content surface. Genuine zero-surface library.

## endrem   [anchors: survival/exploration (1)]
- from: endrem:undead_eye | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Transmuting an undead-themed drop (wither rose, wither skull) into the undead_eye through an Occultism ritual is exactly what rituals are for — a stuck player can craft their way to End entry rather than grinding the RNG; thematically "of course."
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: An eye imbued with pure arcane energy requiring source_gem and magic essences as catalyst inputs at the enchanting apparatus — magic mastery enables End progression, not just exploration luck.
- from: endrem:nether_eye | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A nether-attuned eye forged through spirit fire (burning nether components in Occultism) reads as sorcery, not contrivance.
- from: endrem:corrupted_eye (rare) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: One corrupted/endgame eye assembled via a multi-step derpack:incomplete_* chain means the Create technician has a legitimate route to End access — scarcity is preserved because the chain costs real Create components, not just luck. Keep to at most one or two eyes to protect exploration intent.
- from: endrem:guardian_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: guardian_eye is thematically tied to ocean monuments/guardians — a Create assembly chain feels jarring for an aquatic/guardian-themed artefact; if an ocean eye gets a craft route, it should feel oceanic (boss drop + something wet), not factory-assembled. Reject on theme; the undead/magical/corrupted eyes already cover the Create/magic quota.

## betterbiomereblend   [anchors: support (1)]
- LEAVE — pure client-side render performance mod; 0 items, 0 blocks, loot=no. No content surface whatsoever. Genuine zero-surface library/behavior mod.

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — client-only camera/movement mod; 0 items, 0 blocks, loot=no. No content surface. Genuine zero-surface behavior mod.

## lithium   [anchors: support (1)]
- LEAVE — server/world-tick optimization mod; 0 items, 0 blocks, loot=no. No content surface. Genuine zero-surface library.

## toomanypaintings   [anchors: support/deco (1)]
- LEAVE — registers 0 items, 0 blocks, loot=no. The painting entity is a vanilla entity variant, not an item in the material graph; there is nothing to route through a method. No coherent weave exists.

## recipe_integration   [anchors: support/infrastructure (1)]
- LEAVE — this mod IS the connective layer; it authors recipes on behalf of other mods rather than providing its own content. It has 0 blocks, 0 items, loot=no and its 82 c:tags reference mostly uninstalled mods (Mekanism, GT, MI, Aether) that are inert here. Its active recipes (create:milling, create:pressing, ars_nouveau:scry_ritual, etc.) are already weaving other mods into Create/magic — they count toward those mods' pillars, not recipe_integration's. Assigning recipe_integration a 2nd pillar for doing its job is circular; it is infrastructure, not a content node.

## sable   [anchors: support/aeronautics-backend (1)]
- LEAVE — pure physics-engine library; 0 items, 0 blocks, loot=no. No survival content. The aeronautics pillar weaves happen in mods that build on sable (Create Aeronautics itself, aeronauticscompat, etc.), not in the engine backend. Genuine zero-surface library.

== CHUNK COMPLETE ==
