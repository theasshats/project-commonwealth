# Phase 2 candidates — chunk-07

## mushroomquest   [anchors: survival (1)]

- from: mushroomquest edible/ingredient mushrooms (bay bolete, autumn skullcap, etc.) | via: farmersdelight:cooking / extradelight:oven | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Slicer-fed kitchen processes bulk mushroom caps into soups and ragouts — foraging feeds the automated food line.
- from: mushroomquest rare/mythical mushroom caps (agarikon, etc.) | via: numismatics sell/trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Mythical caps are scarce, biome-gated luxury forage goods — a natural trade commodity for coin without touching any machine.
- from: mushroomquest deadly/rare mushroom caps | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Thematically weak — fungi transmuting into spirit essence reads as forced; deadly caps already have a poison-effect role; doubling as magic reagents dilutes both. Red-team: player reaction would be "why is a mushroom an occult catalyst?" No natural lore link.
- from: mushroomquest glowshrooms (luminescent blocks) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Glowshrooms are deco/light-source blocks; their luminescence isn't a named arcane property in the pack lore — imbuement requires a plausible attunement story. Red-team: other luminescent materials (galosphere lumiere shard) are already the reserved attunement catalyst (M-07); introducing a competing light-catalyst is fragmentation. REJECT to avoid stepping on M-07 reagent-ownership.

## moogs_structures   [anchors: support/library (1)]

- LEAVE — pure worldgen code library (0 blocks, 0 items, no player-facing content); no material surface to weave.

## trashslot   [anchors: support/QoL-client (1)]

- LEAVE — client-only UI mod; zero items, zero blocks, zero recipe surface; no coherent pillar weave possible.

## letmefeedyou   [anchors: support/QoL (1)]

- LEAVE — behavior-only multiplayer QoL mod (player-to-player feeding interaction); registers no items, blocks, or recipe types; nothing to weave.

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag_* (16 dyed wool items) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for metal/stone deco recycling. Sleeping bags are soft goods (wool + string); crushing them back to raw wool is mechanically coherent but the design north-star says don't force edges onto organic/soft content. Red-team: a player carrying a sleeping bag wouldn't naturally feed it to a crushing wheel. The M-04 anti-wring note explicitly flags "don't force" — REJECT.
- from: comforts:sleeping_bag_* (craft material, wool-heavy) | via: create:pressing | to: Create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: No motif covers soft-goods pressing into a pack weave and no thematic story holds it — tone clash (mechanical processing of cozy camping gear). REJECT-for-review; no-motif.
- LEAVE — small vanilla-recipe survival/QoL mod; the dossier's own assessment ("a forced edge would be noise") is correct. No coherent second pillar.

## staaaaaaaaaaaack   [anchors: support/perf (1)]

- LEAVE — invisible entity-merge performance utility; zero items, zero blocks, no recipe surface; no weave possible.

## create_cheese   [anchors: Create, survival (2)]

OK — existing connections sound (Create spine via create:mixing/compacting → maturing, survival food output; 2-pillar anchor is coherent and well-implemented).

- from: create_cheese aged cheeses (cheddar, brie, gouda, camembert…) | via: numismatics sell/trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Maturing takes real time (300–900 ticks behind the Cheese Cellar wait) — aged cheese is the textbook high-effort luxury trade good, a natural coin earner with no cross-mod recipe needed.
- from: create_cheese:cheese_curds (intermediate) | via: extradelight:mixing_bowl / farmersdelight:cooking | to: survival (depth) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: This is a within-pillar deepening (survival→survival), not a new second-pillar link; create_cheese is already anchored in survival. Adding curds to more cooking recipes is a recipe-balance call, not a weave. REJECT as out-of-scope for cross-pillar mapping.
- REWORK: none — the two existing anchors are natural and well-grounded; no arbitrary edges found.

## multipiston   [anchors: support/MineColonies-dep (1)]

- LEAVE — functional dependency block for Structurize/MineColonies (moves world blocks for colony builders); the multipistonblock has a crafting recipe but is not player-facing content; no material sink, no coherent cross-pillar weave.

## sliceanddice   [anchors: Create, survival (2)]

OK — existing connections sound (it IS the M-12 Create↔food bridge by design; both pillars are load-bearing).

- from: sliceanddice:sprinkler (fluid distributor) + modded fluid piping | via: create:filling (pump a potion/fluid into sprinkler network) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: The Sprinkler is an output device for water/lava/fluids; connecting it to magic potions would use it as a combat/ritual area-effect tool, not a processing weave. That's a gameplay design divergence from its crop-watering role. Red-team: "magic fluid sprinkler" blurs the farm-tool identity. No clean motif fits — this is a behavior extension, not a material routing. REJECT.
- from: sliceanddice:slicer (automates all FD cutting recipes) | via: farmersdelight:cutting on mushroomquest/seasonal crops | to: survival (seasonal) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 requires a season-gated input feeding a machine/ritual — the Slicer processes any FD cutting recipe year-round; no season gate is added by this pairing. The season constraint must come from the crop input, not the Slicer. This is a correct M-16 application on the *crop side* (e.g. a Serene Seasons crop that only grows in autumn feeds the Slicer), but the Slicer itself adds nothing new to the weave. REJECT for sliceanddice specifically; the weave lives on the crop-side mod.
- Note: sliceanddice's Sprinkler dispensing Serene Seasons seasonal fertiliser/fluid could be a M-16 candidate — but this is a config-level integration, not a recipe weave, and the motion belongs to a seasonal-crops pass.

## bundle_recipe   [anchors: support/QoL (1)]

- LEAVE — datapack that re-enables vanilla bundle crafting; outputs only minecraft:bundle; no new items, no recipe types registered, no foreign material surface; no pillar weave possible.

== CHUNK COMPLETE ==
