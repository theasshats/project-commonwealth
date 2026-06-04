# Phase 2 candidates — chunk-16

## moreculling   [anchors: support/performance (1)]
- LEAVE — pure client-side render-culling library; zero items, zero methods, zero material flows. No content surface to weave.

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager capture) | via: theme — relocating villagers to MineColonies worksites or Aeronautics ships | to: aeronautics/economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: utility synergy only; no method to route through; no material changes hands — a lasso is a transport tool, not a recipe node. No-motif → reject for review.
- from: moblassos:hostile_lasso (captured monster at <50% HP) | via: `occultism:ritual` — hostile mob in captivity as a live sacrifice input | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Occultism rituals consume *drops*, not living entities; hostile_lasso_filled is a container item, not a drop, and the ritual method can't consume a "filled lasso" as a spirit input without a bespoke patch. Mechanically incoherent as-is.
- from: moblassos:golden_lasso (livestock capture) | via: crafting — lasso becomes a required ingredient in a MineColonies animal-handler recipe or a Numismatics "cattle delivery" contract | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); the "contract" item in the mod's own item list suggests intent, but no economy method to cleanly route through.
- LEAVE — item-utility mod; value is mob transport QoL, not a material flow node. All candidate edges reduce to utility synergy or require methods that can't cleanly accept its output. No coherent 2nd-pillar weave survives red-team.

## galosphere   [anchors: survival + magic (2, via M-07)]
- OK — connections sound: `allurite_shard` / `lumiere_shard` as M-07 attunement catalysts is well-established and reserved in reagent-ownership. This is the genuine 2nd pillar (magic).
- from: galosphere:silver_ingot (=palladium, c:ingots/palladium) | via: `create:crushing` (ore-doubling) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: palladium ore fed into a crusher yields crushed palladium + a byproduct nugget — the same ore-doubling reward the rest of the pack's metals enjoy; keeps the Create spine as the refinery for every regional ore.
- from: galosphere:silver_ingot (refined palladium) | via: `numismatics` mint (Create-processed → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: scarce regional palladium, once crushed and smelted in Create's arc furnace, mints into Numismatics coins — a natural trade metal for a crew that specialises in cave diving.
- from: galosphere deco blocks (allurite/lumiere bricks, pink salt) | via: `create:crushing` (lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: mis-placed crystal bricks go back into the crusher for a gravel return and an XP nugget — standard Create deco-recycle; players won't balk at the same rule applying to glowing cave stone.
- REWORK note: the dossier lists palladium as the "real" 2nd-pillar candidate via M-03/M-08 but marks them only MED confidence. Both survive red-team cleanly — promote to ACCEPT above. The existing M-07 anchor is the magic pillar; M-03 + M-08 together add a **Create** and **economy** leg, making galosphere potentially 3-pillar (survival → magic already established; Create + economy via palladium metal are additive, not conflicting). No reagent-ownership conflict (palladium is not reserved; allurite/lumiere are reserved only as M-07 catalysts, not as economy goods).

## jeed   [anchors: support/client UI (1)]
- LEAVE — a JEI display provider only; its two registered "recipe-types" are viewer categories, not craftable methods. Zero items, zero material flows, no content surface to weave.

## kiwi   [anchors: support/library (1)]
- LEAVE — developer library providing registration helpers and font utilities; registers no items, blocks, or recipe types. Genuine zero-content code library.

## create_pattern_schematics   [anchors: Create (1)]
- from: create_pattern_schematics:empty_pattern_schematic | via: `create:mechanical_crafting` (the schematic + quill assembly could require a Create-processed paper/brass component) | to: Create (depth) | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the mod is already anchored firmly in Create; M-05 is for gating a *foreign* mod's flagship item inside its own machine using Create inputs. Gating a Create-adjacent tool inside Create's own mechanical crafter is circular — it adds friction to a QoL tool without a second-pillar benefit. Depth doesn't buy a new pillar here.
- LEAVE — pure Create build-automation QoL (3 schematic items, no processing surface, no material flows). Already sits inside the Create pillar; no foreign material to route; no coherent 2nd-pillar edge survives red-team.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — client-side volumetric cloud renderer; zero items, zero methods, zero material flows. No content surface to weave.

## architectury   [anchors: support/library (1)]
- LEAVE — cross-platform modding API library; zero items, zero recipe types, zero material flows. Genuine zero-content code library.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI plugin that documents breeding requirements; zero items, zero recipe types, zero material flows. No content surface to weave.

## betterpingdisplay   [anchors: support/client UI (1)]
- LEAVE — replaces ping bars with numerical ms; client-only, zero items, zero methods. No content surface to weave.

== CHUNK COMPLETE ==
